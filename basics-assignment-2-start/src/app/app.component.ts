import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  username = ''
  notNull = false;

  checkUsername () {
    if (this.username !== ''){
      this.notNull = true;
    } else {
      this.notNull = false;
    }
  }

  resetUsernameButton () {
    this.username = ''
    this.checkUsername();
  }
}
