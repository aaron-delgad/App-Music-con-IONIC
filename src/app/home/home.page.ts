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
  song: any = {
    playing: false,
    name: '',
  };
  currenSong: any = [];

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

  play(): void {
    this.currenSong = new Audio(this.song.preview_url);
    this.currenSong.play();
    this.song.playing = true;
  }

  pause(): void{
    this.currenSong.pause();
    this.song.playing = false;
  }
}
