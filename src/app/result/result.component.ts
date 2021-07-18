import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'
import { QueueService } from '../queue.service';
import { Subscription, Observable, timer } from 'rxjs';
import { SharedService } from './../shared.service';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  resultNumber = new FormControl('');
  resultTime = new FormControl('');
  clickEventsubscription:Subscription;
  id: string;
  private subscription: Subscription;
  private everySecond: Observable<number> = timer(0, 1000);

  constructor(private queueService: QueueService,
    private sharedService:SharedService) {
};

  ngOnInit(){
    this.sharedService.clear();
    this.subscription = this.everySecond.subscribe((seconds) =>{
      if(''!=this.sharedService.getId()){
        this.resultId();
      }
      if(''!=this.sharedService.getPseudonym()){
        this.resultPseudonym();
      }
    });
  }
resultId(){
  this.queueService.getTime(this.sharedService.getId()).
    subscribe(data => {this.resultTime.setValue(data);});
  this.queueService.getNumber(this.sharedService.getId()).
    subscribe(data => {this.resultNumber.setValue(data);});
}
resultPseudonym(){
  this.queueService.getTimeByPseudonym(this.sharedService.getPseudonym()).
    subscribe(data => {this.resultTime.setValue(data);});
  this.queueService.getNumberByPseudonym(this.sharedService.getPseudonym()).
    subscribe(data => {this.resultNumber.setValue(data);});
  }

}
