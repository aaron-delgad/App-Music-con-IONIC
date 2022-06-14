import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {Router} from '@angular/router';
import {Storage} from '@ionic/storage-angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private readonly menuController: MenuController,
              private readonly router: Router,
              private readonly storage: Storage) { }

  ngOnInit() {
  }

  closeMenu(): void{
    this.menuController.close();
  }

  logout(): void {
    this.storage.set('isUserLoggeIn', false);
    this.router.navigate(['/login']);
  }

  goToHome() {
    this.router.navigate(['/menu/home']);
  }

  goToSetting() {
    this.router.navigate(['/menu/setting']);
    this.menuController.close();
  }

  goToSport() {
    this.router.navigate(['/menu/sport']);
    this.menuController.close();
  }
}
