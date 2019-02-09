import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styles: [`    
    .main_box{
      width: 100px;
      padding: 150px;
      border: 10px solid black;
      border-radius: 25px;
    }
  `]
})
export class AppComponent {
  message: string = 'Sharing Data from Child to Parent Component';
  color:string ='Yellow';
  ColorChangedHandler(color:string)
  {
    this.color = color;
  }
 
}
