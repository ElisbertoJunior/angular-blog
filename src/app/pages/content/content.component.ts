import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string = 'https://static1-br.millenium.gg/articles/7/12/59/7/@/142301-god-of-war-ragnarok-review-roundup-superb-story-boring-combats-aside_article_m-2.jpg'
  contentTitle: string = 'Noticia exemplo'
  contentDescription: string = 'bla bla bla bla'

  constructor(
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
        console.log(value.get("id"))
    )
  }

}
