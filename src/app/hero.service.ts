import { Injectable } from '@angular/core';
import { Hero } from './heroInterface/hero';
import { HEROES } from './heroesMocks/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    this.messagesService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  constructor(private messagesService: MessagesService) {
    this.messagesService.add('HeroService: fetched heroes');  
  }
}
