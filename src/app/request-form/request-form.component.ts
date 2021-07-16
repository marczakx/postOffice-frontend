import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from '../request';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {
 
  private request: Request;

  pseudonym = new FormControl('');
  password = new FormControl('');
  vip = new FormControl('');
  sudden = new FormControl('');

  result = new FormControl('');

  requestForm: FormGroup = this.builder.group({
    pseudonym: this.pseudonym,
    password: this.password,
    vip: this.vip,
    sudden: this.sudden
  });


  constructor(private requestService: RequestService, private router: Router,private builder: FormBuilder) {
  }
  onSubmit(){
    this.result.setValue("");
    if(!this.vip.value && !this.sudden.value){
    this.requestService.send(this.pseudonym.value).subscribe(data => {
            this.result.setValue("twój numer "+data.id);
    });}
    if(this.sudden.value){
    this.requestService.sendAuthorization(this.pseudonym.value,this.password.value,'sudden').subscribe(data => {
            this.result.setValue("twój numer "+data.id);
    });}
    if(this.vip.value){
    this.requestService.sendAuthorization(this.pseudonym.value,this.password.value,'vip').subscribe(data => {
            this.result.setValue("twój numer "+data.id);
    });}
  };
  ngOnInit(): void {
  }

}
