import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroInterface/hero';
import { HeroService } from '../hero.service';
import { MessagesService } from '../messages.service';
import { Observable } from 'rxjs';

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

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({name} as Hero)
    .subscribe(hero => {
      this.heroes.push(hero);
    });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h!==hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }


}
