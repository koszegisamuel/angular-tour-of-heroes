import { Component, OnInit } from '@angular/core';
import { HeroService } from '@app/_services/hero.service';
import { Hero } from '@app/_models';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  //itt megadott metódusok a komponens betöltésekor autamituksan meghívódnak

  heroes: Hero[] = [];

  selectedHero?: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
      this.getHeroes();
  }
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}
