import { Component, OnInit } from '@angular/core';
import { Hero } from '../_model/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent  implements OnInit{
  //itt megadott metódusok a komponens betöltésekor autamituksan meghívódnak
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }
  
  constructor() { }
  
  ngOnInit(): void {
   
  }

}
