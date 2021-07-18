import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {

  private request: Request;

  pseudonym = new FormControl('', [Validators.minLength(3), Validators.maxLength(10)]);
  password = new FormControl({value:"", disabled: true});
  vip = new FormControl('');
  sudden = new FormControl('');
  result = new FormControl('');

  requestForm: FormGroup = this.builder.group({
    pseudonym: this.pseudonym,
    password: this.password,
    vip: this.vip,
    sudden: this.sudden
  });

  constructor(private requestService: RequestService, private builder: FormBuilder) {
  }
  onSubmit(){
    this.result.setValue("");
    if(!this.vip.value && !this.sudden.value){
    this.requestService.send(this.pseudonym.value).subscribe(data => {
            this.setResult(data.id);
    });}
    if(this.sudden.value){
    this.requestService.sendAuthorization(this.pseudonym.value,this.password.value,'sudden').subscribe(data => {
            this.setResult(data.id);
    });}
    if(this.vip.value){
    this.requestService.sendAuthorization(this.pseudonym.value,this.password.value,'vip').subscribe(data => {
            this.setResult(data.id);
    });}
  };
  checkIfPasswordIsRequired(){
    if(this.vip.value || this.sudden.value){
      this.password.enable();
    }else{this.password.disable();}

  };
  suddenOnClik(){
    this.checkIfPasswordIsRequired();
    if(!this.sudden.value){
      this.vip.enable();
    }else{this.vip.disable();}
  };
  vipOnClik(){
    this.checkIfPasswordIsRequired();
    if(!this.vip.value){
      this.sudden.enable();
    }else{this.sudden.disable();}
  };
  setResult(id:  string){
      this.result.setValue("Twój identyfikator " + id);
  }
  ngOnInit(): void {
  }

}
