import { Component } from '@angular/core';
import { DataService } from 'src/services/DataService';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent {
  message: string;

  constructor(private dataService: DataService) {}

  sendMessage() {
    this.dataService.changeMessage(this.message);
  }
}
