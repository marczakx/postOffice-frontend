import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindByPseudonymFormComponent } from './find-by-pseudonym-form.component';

describe('FindByPseudonymFormComponent', () => {
  let component: FindByPseudonymFormComponent;
  let fixture: ComponentFixture<FindByPseudonymFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindByPseudonymFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindByPseudonymFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
