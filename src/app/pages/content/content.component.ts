import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string = 'https://static1-br.millenium.gg/articles/7/12/59/7/@/142301-god-of-war-ragnarok-review-roundup-superb-story-boring-combats-aside_article_m-2.jpg'
  contentTitle: string = 'Noticia exemplo'
  contentDescription: string = 'bla bla bla bla'
  constructor() { }

  ngOnInit(): void {
  }

}
