import { Component, OnInit } from '@angular/core';
import { QueueItem } from '../queue-item';
import { Subscription, Observable, timer } from 'rxjs';
import { QueueService } from '../queue.service';
import { SharedService} from '../shared.service';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit {
  queue:QueueItem[];
  private subscription: Subscription;

  everySecond: Observable<number> = timer(0, 1000);

  id: string;
  pseudonym:string;
  constructor(private queueService: QueueService, private sharedService:
    SharedService) { }
  ngOnInit(): void {
    this.subscription = this.everySecond.subscribe((seconds) =>{
      this.id = this.sharedService.getId();
      this.pseudonym = this.sharedService.getPseudonym();
      this.queueService.findAll().subscribe(data => {
        this.queue = data;
      });
    });
  }
  ngOnDestroy(): void {
	  this.subscription.unsubscribe();
  }
}
