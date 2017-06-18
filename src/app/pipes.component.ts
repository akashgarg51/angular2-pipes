import { Component } from '@angular/core';

@Component({
  selector: 'pipes-app',
  templateUrl: 'pipes.component.html',
  styles: [`
  `]
})
export class PipesAppComponent {
  myValue = 'lowercase';
  myDate = new Date(2016,5,24);
}
