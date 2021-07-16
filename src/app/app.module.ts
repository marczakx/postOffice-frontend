import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { QueueComponent } from './queue/queue.component';
import { QueueService } from './queue.service';
import { RequestService } from './request.service';
import { RequestFormComponent } from './request-form/request-form.component';
import { FindByIdFormComponent } from './find-by-id-form/find-by-id-form.component';
import { FindByPseudonymFormComponent } from './find-by-pseudonym-form/find-by-pseudonym-form.component';

@NgModule({
  declarations: [
    AppComponent,
    QueueComponent,
    RequestFormComponent,
    FindByIdFormComponent,
    FindByPseudonymFormComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [QueueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
