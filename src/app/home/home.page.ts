import { Component, OnInit } from '@angular/core';
import {MusicService} from '../services/music.service';
import {ModalController} from '@ionic/angular';
import {SongsModalPage} from './../songs-modal/songs-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  artists: any[] = [];
  albums: any[] = [];
  songs: any[] = [];
  song: {
    previewurl: string;
    playing: boolean;
    name: string;
  } = {
    previewurl: '',
    playing: false,
    name: '',
  };
  currenSong: HTMLAudioElement;
  newTime: any;

  slideOps = {
    loop: false,
    slidesPerView: 4,
    slidesPerGroup: 4,
    grabCursor: true,
    spaceBetween: 30,
    speed: 400,
  };

  constructor(private readonly musicService: MusicService,
              private readonly modalController: ModalController) {
  }

  ngOnInit() {
    this.loadSlide();
  }

  loadSlide(): void {
    this.artists = this.musicService.getArtists().items;
    this.musicService.musicPage().subscribe(resp => {
      this.albums = resp.filter(res => res.album_type === 'single');
      this.songs = resp.filter(res => res.album_type === 'album');
    });
  }

  async showSongs(artist) {
    const songs = await this.musicService.getArtistsTopTracks(artist.id);
    const modal = await this.modalController.create({
      component: SongsModalPage,
      componentProps: {
        songs: songs.tracks,
        artist: artist.name
      }
    });
    modal.onDidDismiss().then(dataReturned => {
      this.song = dataReturned.data;
    });
    return await modal.present();
  }

  async showSongAlbum(album) {
    const songs = await this.musicService.getAlbumTrack(album.id);
    const modal = await this.modalController.create({
      component: SongsModalPage,
      componentProps: {
        songs: songs.items,
        album: album.name,
      },
    });
    modal.onDidDismiss().then(dataReturned => {
      this.song = dataReturned.data;
    });
    return await modal.present();
  }

  play(): void {
    this.currenSong = new Audio(this.song.previewurl);
    this.currenSong.play();
    this.currenSong.addEventListener('timeupdate', () => {
      this.newTime = (this.currenSong.currentTime / this.currenSong.duration);
    });
    this.song.playing = true;
  }

  pause(): void{
    this.currenSong.pause();
    this.song.playing = false;
  }

  parseTime(time: number){
    if (time){
      const partTime = parseInt(time.toString().split('.')[0], 10);
      let minutes = Math.floor(partTime/60).toString();
        if(minutes.length === 1){
          minutes = '0' + minutes;
        }
      let seconds = (partTime % 60).toString();
        if(seconds.length === 1){
          seconds = '0' + seconds;
        }
        return minutes + ':' + seconds;
    }
  }
}
