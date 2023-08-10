import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroInterface/hero';
import { HeroService } from '../hero.service';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  /*hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };*/

  constructor(private heroService: HeroService, 
    private messagesService: MessagesService) {}

  heroes: Hero[] = [];
  /*selectedHero?: Hero;*/

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  /*onSelect(hero: Hero): void{
    this.selectedHero = hero;
    this.messagesService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  }*/

}
