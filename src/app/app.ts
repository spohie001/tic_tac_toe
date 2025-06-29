import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Square } from "./square/square";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Square],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'tic_tac_toe';
}
