import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent {

  public HeroNames : string[] = [ 'Ironman', 'Spiderman', 'Gost Rider', 'Wolverine', 'Dr Strange', 'Deadpool' ];
  public lastHero? : string = '';

  DeleteLastHero () : void {
    this.lastHero = this.HeroNames.pop();
    // console.log(deleteHero);
  }


}
