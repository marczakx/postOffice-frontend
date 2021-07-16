import { Component, OnInit } from '@angular/core';
import { QueueItem } from '../queue-item';
import { Subscription, Observable, timer } from 'rxjs';
import { QueueService } from '../queue.service';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit {
  queue:QueueItem[];
  private subscription: Subscription;

  everySecond: Observable<number> = timer(0, 1000);

  constructor(private queueService: QueueService) { }

  ngOnInit(): void {
    this.subscription = this.everySecond.subscribe((seconds) =>{
        this.queueService.findAll().subscribe(data => {
            this.queue = data;
        });
    });
  }
  ngOnDestroy(): void {
	  this.subscription.unsubscribe();
  }
}
