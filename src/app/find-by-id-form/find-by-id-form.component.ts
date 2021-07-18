import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { SharedService } from './../shared.service';

@Component({
  selector: 'app-find-by-id-form',
  templateUrl: './find-by-id-form.component.html',
  styleUrls: ['./find-by-id-form.component.css']
})
export class FindByIdFormComponent implements OnInit {
  id = new FormControl('');
  requestForm: FormGroup = this.builder.group({
    id: this.id
  });
  constructor(private builder: FormBuilder, private sharedService:SharedService) {
  }
  onSubmit(){
    this.sharedService.setId(this.id.value);
  }
  ngOnInit(): void {
  }

}
