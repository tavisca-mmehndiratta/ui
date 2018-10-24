import { Component, OnInit } from '@angular/core';
import { TripAssistantService } from './Tripassistant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'TripAssistant';

  constructor(private tripassistantServices: TripAssistantService) {}

  ngOnInit() {
    // console.log("rewr"+this.tripassistantServices.getType());
  }
}