import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
          constructor(private readonly router: Router,
            private storage: Storage) {
        this.storage.create();
        }

        async canActivate() {
          const isUserLoggeIn = await this.storage.get('isUserLoggeIn');
            if (isUserLoggeIn) {
              return true;
            } else {
              this.router.navigate(['/login']);
        }
}

}
