import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.sass']
})
export class HeroComponent {

  public name: string = 'spiderman';
  public age:  number = 20;

  changeName () : void {

    this.name = 'ironman';

  }
  changeAge () : void {

    this.age = 45;

  }

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription () : string {

    return ` ${ this.name } - ${ this.age } `;

  }

  ResetForm () : void {
    this.name = 'spiderman';
    this.age = 20;

  }


}
