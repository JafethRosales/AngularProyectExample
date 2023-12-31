import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroInterface/hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  hero: Hero | undefined;

  ngOnInit(): void {
    this.getHero();
  }
  
  getHero(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!,10);
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
    }
  }

  /*@Input() hero?: Hero;*/

}
