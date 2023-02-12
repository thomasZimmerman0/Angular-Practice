import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display = false;
  clicks = []

  onClick () {
    this.clicks.push(`Button clicked at ${new Date()}`)
  }

  getBackground (index: number) {
    return index >= 4 ? 'blue' : 'white';
  }

  getText (index: number) {
    return index >= 4 ? 'white' : 'black ';
  }
}
