import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '@app/_models/article';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


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
        private http: HttpClient
    ) { }

    getAllArticles() {
      //JSON SERVER
      // return this.http.get<Article[]>(`${environment.apiUrl}/posts`, httpOption)

      //FIREBASE TRY
      return this.http.get<Article[]>(`https://japan-szemle-23187-default-rtdb.europe-west1.firebasedatabase.app/data.json`)
    }

    getArticleById(article: Article){
      //JSON SERVER
      // return this.http.get<Article>(`${environment.apiUrl}/posts/${articleId}`, httpOption)

      //FIREBASE TRY
      return this.http.get<Article>(`https://japan-szemle-23187-default-rtdb.europe-west1.firebasedatabase.app/data.json/${article.id}`)
    }

    addArticle(article: Article){
      //JSON SERVER
      // return this.http.post<Article>(`${environment.apiUrl}/posts`, article, httpOption).pipe(
      //   tap(hero => console.log(`inserted hero = ${JSON.stringify(article)}`)),
      //   catchError(error => error)
      // );

      // FIREBASE TRY
      return this.http.post<Article>('https://japan-szemle-23187-default-rtdb.europe-west1.firebasedatabase.app/data.json', article)
    }

    updateArticle(article: Article) {
      return this.http.put<Article>(`${environment.apiUrl}/posts/${article.id}`, article, httpOption).pipe(
        tap(updatedArticle => console.log(`updated article = ${JSON.stringify(updatedArticle)}`)),
        catchError(error => error)
      )
    }

    deleteArticle(articleId: Number) {
      return this.http.delete<Article>(`${environment.apiUrl}/posts/${articleId}`, httpOption).pipe(
        tap(updatedHero => console.log(`deleted hero with ID =  ${articleId}`)),
        catchError(error => error)
      )
    }
}
