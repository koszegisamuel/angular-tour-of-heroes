import { Component, OnInit } from '@angular/core';
import { ArticleService } from '@app/_services/article.service';
import { Article } from '@app/_models';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  //itt megadott metódusok a komponens betöltésekor autamituksan meghívódnak

  articles: Article[] = [];

  // selectedArticle?: Article;

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
      this.getArticles();
  }
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }

  getArticles(): void {
    this.articleService.getAllArticles()
        .subscribe(data => this.articles = data);
  }
}
