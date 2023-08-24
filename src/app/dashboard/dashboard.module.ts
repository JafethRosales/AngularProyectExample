import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 

import { DashboardComponent } from './dashboard.component';
import { CommonModule } from '@angular/common';
import { HeroSearchComponent } from '../hero-search/hero-search.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes), CommonModule],
    exports: [],
    declarations: [DashboardComponent, HeroSearchComponent],
    providers: [],
})
export class DashboardModule { }
