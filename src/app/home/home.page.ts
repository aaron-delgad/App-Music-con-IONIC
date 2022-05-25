import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slides = [
    {
      imageSrc: 'assets/img/logoMusic.jpg',
      imageAlt: 'logo.jpg',
      title: 'Escucha tu música',
      subtitle: 'EN CUALQUIER LUGAR',
      description: 'los mejores álbunes, las mejores canciones. Escucha y comparte en cualquier momento.',
      icon: 'play-circle-outline',
    },
    {
      imageSrc: 'assets/img/logoMusic.jpg',
      imageAlt: 'logo.jpg',
      title: 'Disfruta de nuestro reproductor',
      subtitle: 'DE VIDEOS INCREIBLES',
      description: `Entra al modo video de nuestro reproductor y obten acceso a documentales y marking
      y marking off increibles de tu artista favorito`,
      icon: 'videocam-outline',
    },
    {
      imageSrc: 'assets/img/logoMusic.jpg',
      imageAlt: 'logo.jpg',
      title: 'Accede a lo exclusivo',
      subtitle: 'MODO DEPORTE',
      description: `Crea una playlist basada en tu actividad física.<br/>
                    Ten reportes y  acceso a los que necesites, integrado con GPS.`,
      icon: 'play-circle-outline',
    }
  ];

  constructor() {
  }

}
