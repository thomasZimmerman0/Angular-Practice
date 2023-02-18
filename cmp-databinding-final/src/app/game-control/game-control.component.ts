import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() numberAdded = new EventEmitter<{number: number}>();

  gameNumber: number = 0;
  private intervalID: ReturnType<typeof setInterval> = null;

  startGame() {
    if(!this.intervalID){
        this.intervalID = setInterval(()=>{
        this.gameNumber++
        this.numberAdded.emit({
          number: this.gameNumber
        })
      }, 1000);
    }
  }

  stopGame() {
    clearInterval(this.intervalID)
    this.intervalID = null
  }

  constructor() { }

  ngOnInit(): void {
  }

}
