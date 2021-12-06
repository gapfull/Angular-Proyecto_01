import { Component, OnInit } from '@angular/core';
import { Igallery } from './model/igallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  public galleryContent: Igallery[];
  constructor() { 
this.galleryContent = [
  {
    name: "Avenger",
    img: "https://dam.smashmexico.com.mx/wp-content/uploads/2019/02/alex-ross-marvels-25-aniversario-video-redes-lanzamiento-mexico-cover.jpg"
  },
  {
    name: "Avenger 2",
    img: "https://dam.smashmexico.com.mx/wp-content/uploads/2019/02/alex-ross-marvels-25-aniversario-video-redes-lanzamiento-mexico-cover.jpg"
  },
  {
    name: "Avenger 3",
    img: "https://dam.smashmexico.com.mx/wp-content/uploads/2019/02/alex-ross-marvels-25-aniversario-video-redes-lanzamiento-mexico-cover.jpg"
  },
  {
    name: "Avenger 4",
    img: "https://dam.smashmexico.com.mx/wp-content/uploads/2019/02/alex-ross-marvels-25-aniversario-video-redes-lanzamiento-mexico-cover.jpg"
  },
  {
    name: "Avenger 5",
    img: "https://dam.smashmexico.com.mx/wp-content/uploads/2019/02/alex-ross-marvels-25-aniversario-video-redes-lanzamiento-mexico-cover.jpg"
  },
  {
    name: "Avenger 6",
    img: "https://dam.smashmexico.com.mx/wp-content/uploads/2019/02/alex-ross-marvels-25-aniversario-video-redes-lanzamiento-mexico-cover.jpg"
  },
  {
    name: "Avenger 6",
    img: "https://dam.smashmexico.com.mx/wp-content/uploads/2019/02/alex-ross-marvels-25-aniversario-video-redes-lanzamiento-mexico-cover.jpg"
  },
  {
    name: "Avenger 6",
    img: "https://dam.smashmexico.com.mx/wp-content/uploads/2019/02/alex-ross-marvels-25-aniversario-video-redes-lanzamiento-mexico-cover.jpg"
  },
  {
    name: "Avenger 6",
    img: "https://dam.smashmexico.com.mx/wp-content/uploads/2019/02/alex-ross-marvels-25-aniversario-video-redes-lanzamiento-mexico-cover.jpg"
  },
  {
    name: "Avenger 6",
    img: "https://dam.smashmexico.com.mx/wp-content/uploads/2019/02/alex-ross-marvels-25-aniversario-video-redes-lanzamiento-mexico-cover.jpg"
  },
  {
    name: "Avenger 6",
    img: "https://dam.smashmexico.com.mx/wp-content/uploads/2019/02/alex-ross-marvels-25-aniversario-video-redes-lanzamiento-mexico-cover.jpg"
  },
  {
    name: "Avenger 6",
    img: "https://dam.smashmexico.com.mx/wp-content/uploads/2019/02/alex-ross-marvels-25-aniversario-video-redes-lanzamiento-mexico-cover.jpg"
  },
  {
    name: "Avenger 6",
    img: "https://dam.smashmexico.com.mx/wp-content/uploads/2019/02/alex-ross-marvels-25-aniversario-video-redes-lanzamiento-mexico-cover.jpg"
  },
  {
    name: "Avenger 6",
    img: "https://dam.smashmexico.com.mx/wp-content/uploads/2019/02/alex-ross-marvels-25-aniversario-video-redes-lanzamiento-mexico-cover.jpg"
  },
  {
    name: "Avenger 6",
    img: "https://dam.smashmexico.com.mx/wp-content/uploads/2019/02/alex-ross-marvels-25-aniversario-video-redes-lanzamiento-mexico-cover.jpg"
  },
  {
    name: "Avenger 6",
    img: "https://dam.smashmexico.com.mx/wp-content/uploads/2019/02/alex-ross-marvels-25-aniversario-video-redes-lanzamiento-mexico-cover.jpg"
  },
  {
    name: "Avenger 6",
    img: "https://dam.smashmexico.com.mx/wp-content/uploads/2019/02/alex-ross-marvels-25-aniversario-video-redes-lanzamiento-mexico-cover.jpg"
  },
  {
    name: "Avenger 6",
    img: "https://dam.smashmexico.com.mx/wp-content/uploads/2019/02/alex-ross-marvels-25-aniversario-video-redes-lanzamiento-mexico-cover.jpg"
  },
  {
    name: "Avenger 6",
    img: "https://dam.smashmexico.com.mx/wp-content/uploads/2019/02/alex-ross-marvels-25-aniversario-video-redes-lanzamiento-mexico-cover.jpg"
  },
  {
    name: "Avenger 6",
    img: "https://dam.smashmexico.com.mx/wp-content/uploads/2019/02/alex-ross-marvels-25-aniversario-video-redes-lanzamiento-mexico-cover.jpg"
  },
  {
    name: "Avenger 6",
    img: "https://dam.smashmexico.com.mx/wp-content/uploads/2019/02/alex-ross-marvels-25-aniversario-video-redes-lanzamiento-mexico-cover.jpg"
  },
  {
    name: "Avenger 6",
    img: "https://dam.smashmexico.com.mx/wp-content/uploads/2019/02/alex-ross-marvels-25-aniversario-video-redes-lanzamiento-mexico-cover.jpg"
  }
]

  }

  ngOnInit(): void {
  }

}
