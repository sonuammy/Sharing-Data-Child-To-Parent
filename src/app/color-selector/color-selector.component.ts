import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-color-selector',
  templateUrl: './color-selector.component.html',
  styleUrls: ['./color-selector.component.css']
})
export class ColorSelectorComponent implements OnInit {

  constructor() { }
  @Output() ColorChanged = new EventEmitter();

  SelectedColor:string;
  colors :string[];
  ColorSelected()
  {
      this.ColorChanged.emit(this.SelectedColor); // emit the selected color.
  }

  ngOnInit() {
    this.colors = ["red","blue","orange","cyan","yellow"]; // Set all allowed colors
    this.SelectedColor = this.colors[0]; // Initialize the SelectedColor
    this.ColorChanged.emit(this.SelectedColor) // emit the Initialized color.
  }
}
