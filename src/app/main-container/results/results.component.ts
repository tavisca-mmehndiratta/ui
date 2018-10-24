import { Component, OnInit } from '@angular/core';
import { Activities } from './swiper/activity/activities.model';
import { TripAssistantService } from '../../Tripassistant.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})

export class ResultsComponent implements OnInit {
  activities: Activities[];
  hotels: {}[];
  // private recognition: any;

  constructor(private activityService: TripAssistantService) {
    
  }

  ngOnInit() {
    this.activities = this.activityService.getActivities();
    this.hotels = this.activityService.getHotels();
    console.log("ff"+this.activities);
    // const SpeechRecognition = window['SpeechRecognition'] || window['webkitSpeechRecognition'];

    // this.recognition = new SpeechRecognition();
    // this.recognition.continuous = true;
    // this.recognition.interimResults = true;
    // this.recognition.lang = 'en-un';
    // this.recognition.start();
  }

  isHotelsAvailable() {
    return this.hotels.length !== 0;
  }

  isActivityAvailable(list) {
    return list.length !== 0;
  }

  getType(type: string): string {
    switch(type) {
      case 'activity':
        return 'Activities';
      case 'attractions':
        return 'Attractions';
      case 'adventures':
        return 'Adventures';
      case 'amusement_park':
        return 'Amusement Parks';
      case 'aquarium':
        return 'Aquariums';
      case 'art_gallery':
        return 'Art Galleries';
      case 'church':
        return 'Churches';
      case 'hindu_temple':
        return 'Hindu Temples';
      case 'mosque':
        return 'Mosques';
      case 'museum':
        return 'Museums';
      case 'natural_feature':
        return 'Natural Features';
      case 'park':
        return 'Parks';
      case 'shopping_mall':
        return 'Shopping Malls';
      case 'zoo':
        return 'Zoo';
      default:
        return type;
    }
  }

}