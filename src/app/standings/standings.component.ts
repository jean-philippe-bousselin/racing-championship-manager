import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'standings',
  templateUrl: './standings.component.html'
})
export class StandingsComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Standings initialized');
  }

}
