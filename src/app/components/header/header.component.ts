import { Component, OnInit } from '@angular/core';
import { Iheader } from './model/iheader';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public headerContent: Iheader;
  constructor() {
    this.headerContent = {
      logo: {
        title: 'Avengers',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Marvel%27s_The_Avengers_logo.svg/1200px-Marvel%27s_The_Avengers_logo.svg.png'
      },
      links: ['Characters', 'Comics', 'Films']
    }
   }

  ngOnInit(): void {}

}