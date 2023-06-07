import { Component } from '@angular/core';
import { DataService } from 'src/services/DataService';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent {
  receivedMessage: string;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => {
      this.receivedMessage = message;
    });
  }
}
