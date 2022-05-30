import { Component, OnInit } from '@angular/core';
import {MusicService} from '../services/music.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  artists: any[] = [];
  albums: any[] = [];
  songs: any[] = [];

  slideOps = {
    loop: false,
    slidesPerView: 4,
    slidesPerGroup: 4,
    grabCursor: true,
    spaceBetween: 30,
    speed: 400,
  };

  constructor(private readonly musicService: MusicService) {
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
}
