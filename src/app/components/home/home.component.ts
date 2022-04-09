import { Component, OnInit } from '@angular/core';
//import Event from '../';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  events = [{
    "id": 1, 
    "venue":"Times Square, Menlyn, ZA", 
    "date": "15 December, 2022", 
    "Description": "Marshmello finally comes to mzanzi for the most epic festival since Ramaphosa opened up the country. He will be accompanied by the best that our country has to offer.", 
    "image": "../../../assets/marshmello-square.jpg", 
    "Time": "18:00 - 06:00", 
    "Title": "KEEP IT MELLO",
    "Category": "Festival"
  },
    
  {
    "id": 2, 
    "venue":"Times Square, Menlyn, ZA", 
    "date": "23 December, 2022", 
    "Description": "The king of moshpits. The rowdiest of rowdy. As part of the Astrowrold tour, Travis Scott will grace us at Time Square.", 
    "image": "../../../assets/travis-square.jpg", 
    "Time": "18:00 - 06:00", 
    "Title": "ASTROWORLD",
    "Category": "Festival"
    }, 
    
    
  {
    "id": 3, 
    "venue":"Botanical Gardens, Randburg, ZA", 
    "date": "30 December, 2022", 
    "Description": "An event for the family. If you are a sucker for jazz, live bands and outdoors, this is for you. Bring your own snacks or buy from one of the tuckshops on the site.", 
    "image": "../../../assets/picnic-square.png", 
    "Time": "18:00 - 06:00", 
    "Title": "JAZZ GARDENS",
    "Category": "Festival"
    }
  ]
  
  



  constructor() { }

  ngOnInit(): void {
    
  }

}
