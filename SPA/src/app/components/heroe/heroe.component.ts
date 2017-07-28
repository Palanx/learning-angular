import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe:Heroe = null;

  constructor( private activatedRoute : ActivatedRoute,
               private _heroeService : HeroesService,
               private router : Router
             ) {
    this.activatedRoute.params.subscribe( params =>{
      this.heroe = _heroeService.getHeroe(params['id']);
    });
  }

  volverHeroes(){
    this.router.navigate(['heroes']);
  }
}
