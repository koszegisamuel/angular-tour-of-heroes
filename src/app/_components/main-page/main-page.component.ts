import { Component, OnInit } from '@angular/core';
import { Article } from '@app/_models';
import { ArticleService } from '@app/_services';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  articles: Article[] = [];
 
  //a definite assignment assertion - a változónak futás közben is lesz értéke
  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.getArticles();

  }

  getArticles(): void {
    this.articleService.getAllArticles()
      .subscribe(data => this.articles = data);
  }

  

}
