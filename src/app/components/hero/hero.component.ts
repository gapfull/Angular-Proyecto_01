import { Component, OnInit } from '@angular/core';
import { Ihero } from './model/ihero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  public heroContent: Ihero;
  constructor() {
    this.heroContent = {
      title: "Los Vengadores",
      description: "Los Vengadores (en inglés Avengers; Invencibles del siglo XX en antiguas traducciones de México realizadas por Editorial La Prensa)2​3​ son un equipo ficticio de superhéroes que aparecen en los cómics estadounidenses publicados por Marvel Comics. El equipo hizo su debut en The Avengers #1 (septiembre de 1963),4​creado por el escritor y editor[cita requerida] Stan Lee y el artista/copiloto Jack Kirby. Los Vengadores es la renovación de Lee y Kirby de un equipo anterior de superhéroes, Escuadrón Todos los Ganadores, que apareció en la serie de cómics publicada por el predecesor de Marvel Comics, Timely Comics.",
      banner: "https://dam.smashmexico.com.mx/wp-content/uploads/2019/02/alex-ross-marvels-25-aniversario-video-redes-lanzamiento-mexico-cover.jpg"
    }
   }

  ngOnInit(): void {
  }

}
