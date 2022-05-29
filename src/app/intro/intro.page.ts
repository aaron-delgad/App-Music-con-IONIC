import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slides = [
    {
      imageSrc: 'assets/img/logoMusic.png',
      imageAlt: 'logo.jpg',
      title: 'Escucha tu música',
      subtitle: 'EN CUALQUIER LUGAR',
      description: 'los mejores álbunes, las mejores canciones. Escucha y comparte en cualquier momento.',
      icon: 'play-circle-outline',
    },
    {
      imageSrc: 'assets/img/logoMusic.png',
      imageAlt: 'logo.jpg',
      title: 'Disfruta de nuestro reproductor',
      subtitle: 'DE VIDEOS INCREIBLES',
      description: `Entra al modo video de nuestro reproductor y obten acceso a documentales y marking
      y marking off increibles de tu artista favorito`,
      icon: 'videocam-outline',
    },
    {
      imageSrc: 'assets/img/logoMusic.png',
      imageAlt: 'logo.jpg',
      title: 'Accede a lo exclusivo',
      subtitle: 'MODO DEPORTE',
      description: `Crea una playlist basada en tu actividad física
       Ten reportes y  acceso a los que necesites, integrado con GPS.`,
      icon: 'locate-outline',
    }
  ];

  constructor(private readonly router: Router,
              private readonly storage: Storage) { }
  finish() {
    this.storage.set('isIntroShowed', true);
    this.router.navigate(['/home']);
  }

  async ngOnInit() {
    await this.storage.create();
  }


}
