import { Component } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-songs-modal',
  templateUrl: './songs-modal.page.html',
  styleUrls: ['./songs-modal.page.scss'],
})
export class SongsModalPage {
  songs: any[] = [];
  artist: string;
  album: string;

  constructor(private readonly navParams: NavParams,
              private readonly modalController: ModalController) { }
  ionViewWillEnter(): void {
    this.songs = this.navParams.data.songs;
    const artistTitle = this.navParams.data.artist;
    if (artistTitle){
      this.artist = artistTitle + ' - Top Tracks';
    }
    this.album = this.navParams.data.album;
  }

  async selectSong(song){
    await this.modalController.dismiss(song);
  }

}
