import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '@app/_models/article';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
// import { Hero, HEROES } from '@app/_models';
// import { Observable, of } from 'rxjs';
// import { MessageService } from './message.service';

const httpOption = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    // public messageService: MessageService
    private http: HttpClient
    ) { }

//   getHeroes(): Observable<Hero[]> {
//     const heroes = of(HEROES);
//     this.messageService.add('HeroService: fetched heroes');
//     return heroes;
//   }

//   getHero(id: number): Observable<Hero> {
//     // For now, assume that a hero with the specified `id` always exists.
//     // Error handling will be added in the next step of the tutorial.
//     const hero = HEROES.find(h => h.id === id)!;
//     this.messageService.add(`HeroService: fetched hero id=${id}`);
//     return of(hero);
// }


    getAllArticles() {
      return this.http.get<Article[]>(`${environment.apiUrl}/posts`, httpOption)
    }

    getArticleById(articleId: Number){
      return this.http.get<Article>(`${environment.apiUrl}/posts/${articleId}`, httpOption)
    }

    addArticle(article: Article){
      return this.http.post<Article>(`${environment.apiUrl}/posts`, article, httpOption).pipe(
        tap(hero => console.log(`inserted hero = ${JSON.stringify(article)}`)),
        catchError(error => error)
      );
    }

    updateArticle(article: Article) {
      return this.http.put<Article>(`${environment.apiUrl}/posts/${article.id}`, article, httpOption).pipe(
        tap(updatedArticle => console.log(`updated article = ${JSON.stringify(updatedArticle)}`)),
        catchError(error => error)
      )
    }

    deleteArticle(heroId: Number) {
      return this.http.delete<Article>(`${environment.apiUrl}/posts/${heroId}`, httpOption).pipe(
        tap(updatedHero => console.log(`deleted hero with ID =  ${heroId}`)),
        catchError(error => error)
      )
    }
}
