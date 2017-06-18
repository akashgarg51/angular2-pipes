import { Component } from '@angular/core';

@Component({
    selector: 'pipes-app',
    templateUrl: 'pipes.component.html',
    styles: [`
     .pipes {
    margin: 32px;
     padding: 32px;
}
  `],

})
export class PipesAppComponent {
    myValue = 'lowercase';
    myDate = new Date(2016, 5, 24);
    values = ['Milk', 'Bread', 'Beans'];
}
