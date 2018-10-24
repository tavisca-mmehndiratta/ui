import { Component, OnInit } from '@angular/core';
import { TripAssistantService } from '../../Tripassistant.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers:[]
})
export class TestComponent implements OnInit {

  constructor(private tripassistantService: TripAssistantService) { }

  ngOnInit() {
  }

}
