import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementComponent
  implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewInit, OnDestroy
{
  @Input('srvElement') element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  constructor() {
    console.log('constructor called!');
  }
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInnit Called!');
    console.log("Text Content: " + this.header.nativeElement.textContent);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck Called!');
  }

  ngAfterContentInit(): void {
    console.log('   ngAfterContentInit called!');
  }

  ngAfterViewInit(): void {
    console.log('   ngAfterViewInit called!');
    console.log("Text Content: " + this.header.nativeElement.textContent);
  }

  ngOnDestroy(): void {
    console.log("ngOnDestory called!")
  }
}
