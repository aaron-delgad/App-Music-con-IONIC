import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanActivate {

  constructor(private readonly router: Router,
              private storage: Storage) {
    this.storage.create();
  }

  async canActivate() {
    const isIntroShowed = await this.storage.get('isIntroShowed');
    if (isIntroShowed) {
      return true;
    } else {
      this.router.navigate(['/intro']);
    }
  }
}
