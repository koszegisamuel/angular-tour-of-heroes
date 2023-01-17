import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hero } from '@app/_models/hero';
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
export class HeroService {

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


    getAllHeroes() {
      return this.http.get<Hero[]>(`${environment.apiUrl}/posts`, httpOption)
    }

    getHeroById(heroId: Number){
      return this.http.get<Hero>(`${environment.apiUrl}/posts/${heroId}`, httpOption)
    }

    addHero(hero: Hero){
      return this.http.post<Hero>(`${environment.apiUrl}/posts`, hero, httpOption).pipe(
        tap(hero => console.log(`inserted hero = ${JSON.stringify(hero)}`)),
        catchError(error => error)
      );
    }

    updateHero(hero: Hero) {
      return this.http.put<Hero>(`${environment.apiUrl}/posts/${hero.id}`, hero, httpOption).pipe(
        tap(updatedHero => console.log(`updated hero = ${JSON.stringify(updatedHero)}`)),
        catchError(error => error)
      )
    }

    deleteHero(heroId: Number) {
      return this.http.delete<Hero>(`${environment.apiUrl}/posts/${heroId}`, httpOption).pipe(
        tap(updatedHero => console.log(`deleted hero with ID =  ${heroId}`)),
        catchError(error => error)
      )
    }
}
