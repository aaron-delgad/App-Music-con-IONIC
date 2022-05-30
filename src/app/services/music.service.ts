import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from './../../environments/environment';
import {map} from 'rxjs/operators';
import * as dataArtists from './artists.json';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  urlBase = environment.backend.musicUrl;

  constructor(private readonly http: HttpClient) { }

  getArtists() {
    return dataArtists;
  }

  musicPage(){
    return this.http.get(`${this.urlBase}`)
      .pipe(map((resp: any) => resp.albums.items));
  }
}

