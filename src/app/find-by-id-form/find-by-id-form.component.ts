import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'
import { QueueService } from '../queue.service';
import { Subscription, Observable, timer } from 'rxjs';
@Component({
  selector: 'app-find-by-id-form',
  templateUrl: './find-by-id-form.component.html',
  styleUrls: ['./find-by-id-form.component.css']
})
export class FindByIdFormComponent implements OnInit {
  id = new FormControl('');
  resultNumber = new FormControl('');
  resultTime = new FormControl('');
  private subscription: Subscription;
  everySecond: Observable<number> = timer(0, 1000);
  requestForm: FormGroup = this.builder.group({
    id: this.id
  });
  constructor(private queueService: QueueService, private builder: FormBuilder) {
  }
  onSubmit(){
    this.subscription = this.everySecond.subscribe((seconds) =>{
    this.queueService.getTime(this.id.value).subscribe(data => {
            this.resultTime.setValue(data);
        });

    this.queueService.getNumber(this.id.value).subscribe(data => {
            this.resultNumber.setValue(data);
        });
     });
  }
  ngOnInit(): void {
  }

}
