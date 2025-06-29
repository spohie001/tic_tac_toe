import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  imports: [],
  templateUrl: './square.html',
  styleUrl: './square.scss'
})
export class Square {
  @Input()  value!: 'X' | 'O';
}
