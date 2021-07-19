import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { SharedService } from './../shared.service';

@Component({
  selector: 'app-find-by-pseudonym-form',
  templateUrl: './find-by-pseudonym-form.component.html',
  styleUrls: ['./find-by-pseudonym-form.component.css']
})
export class FindByPseudonymFormComponent implements OnInit {

  pseudonym = new FormControl('');
  requestForm: FormGroup = this.builder.group({
    pseudonym: this.pseudonym
  });
  constructor(private builder: FormBuilder, private sharedService:SharedService) {
  }
  onSubmit(){
    this.sharedService.setPseudonym(this.pseudonym.value);
  }
  ngOnInit(): void {
  }
}
