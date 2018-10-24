import { Component, OnInit,Input } from '@angular/core';
import { ChatsService } from '../chats.services';
import { TripAssistantService } from '../../Tripassistant.service';

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.css'],
  providers:[]
})
export class ChatContainerComponent implements OnInit {

  @Input() chats: {
    sender: string,
    message: string
  }[];

  constructor(private chatsService: ChatsService, private tripassistantService: TripAssistantService) { }

  ngOnInit() {
  }
}
