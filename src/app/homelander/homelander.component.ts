import { Component, HostListener, OnInit } from '@angular/core';

@Component({ 
  selector: 'app-homelander',
  templateUrl: './homelander.component.html',
  styleUrls: ['./homelander.component.scss'],
})

export class HomelanderComponent implements OnInit {
  numberOfClicks = 0;
  constructor() {}

  @HostListener('click', ['$event'])
  onClick(event: PointerEvent) {
    let heihtWhiteBoxAnim: number = event.clientX;
    console.log( 'X:', event.clientX, ' Y:', event.clientY );
  }

  ngOnInit(): void {
  }

}
