


import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: 'counter.component.html'
})

export class CounterComponent  {
  constructor() { }

  public counter : number = 10;

  increaseBy( value : number ) : void {
    // this.counter = this.counter + 1; // forma larga
    this.counter += value; //forma corta
  }

  resetBy() : void {

    this.counter = 10;

  }

}
