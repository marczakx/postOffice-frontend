import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Subscription, Observable, timer } from 'rxjs';
import { QueueService } from '../queue.service';
@Component({
  selector: 'app-find-by-pseudonym-form',
  templateUrl: './find-by-pseudonym-form.component.html',
  styleUrls: ['./find-by-pseudonym-form.component.css']
})
export class FindByPseudonymFormComponent implements OnInit {

  pseudonym = new FormControl('');
  resultNumber = new FormControl('');
  resultTime = new FormControl('');
  private subscription: Subscription;
  everySecond: Observable<number> = timer(0, 1000);
  requestForm: FormGroup = this.builder.group({
  pseudonym: this.pseudonym
  });
  constructor(private queueService: QueueService, private builder: FormBuilder) {
  }
  onSubmit(){  this.subscription = this.everySecond.subscribe((seconds) =>{
    this.queueService.getTimeByPseudonym(this.pseudonym.value).subscribe(data => {
            this.resultTime.setValue("Czas oczekiwania " +data);
        });
  
    this.queueService.getNumberByPseudonym(this.pseudonym.value).subscribe(data => {
            this.resultNumber.setValue("Liczba osób w kolejce przed użytkownikiem " +data);
        });
     });
  }
  ngOnInit(): void {
  }


}


