import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  events = ["event1", "event2", "event3"];



  constructor() { }

  ngOnInit(): void {
    
  }

}
