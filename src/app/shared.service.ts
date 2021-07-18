import { Injectable } from '@angular/core';
//import { Observable, Subject } from 'rxjs';
@Injectable({
providedIn: 'root'
})
export class SharedService {
  private id: string = '';
  private pseudonym: string = '';
  setId(id: string){
    this.id = id;
  }
  getId(): string{
    return this.id;
  }
  setPseudonym(pseudonym: string){
    this.pseudonym = pseudonym;
  }
  getPseudonym(): string{
    return this.pseudonym;
  }
  clear(){
    this.id='';
    this.pseudonym='';
  }
}
