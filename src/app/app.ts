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

  txt_color: string = 'blue';
  txt_size: string = '40';

  ChangeColor(): void {
    if (this.txt_color == 'blue') {
      this.txt_color = 'red';
    } else {
      this.txt_color = 'blue';
    }
  }
  IncreaseFontSize(): void {
    let fn: number = parseInt(this.txt_size);
    this.txt_size = (fn + 10).toString();
  }
  DecreaseFontSize(): void {
    let fn: number = parseInt(this.txt_size);
    this.txt_size = (fn - 10).toString();
  }

  productImage: string[] = [
    '/products/p1.webp',
    '/products/p2.webp',
    '/products/p3.webp',
    '/products/p4.png',
  ];
  t_yellow: string = 'yellow';
  btn_T(): void {
    this.t_yellow = 'blue';
  }
  p: string[] = ['h1', 'h2', 'h3'];
  alert(): void {
    alert('hello');
  }
}
