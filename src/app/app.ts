import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  name_: String = 'Tat';
  gender: String = 'Male';
  age: number = 19;
  profile: string = 'image.jpg';
  profile2: string = 'image2.jpg';
}
