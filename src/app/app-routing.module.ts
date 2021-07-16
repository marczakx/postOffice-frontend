import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QueueComponent } from './queue/queue.component';
import { RequestFormComponent } from './request-form/request-form.component';
import { FindByIdFormComponent } from './find-by-id-form/find-by-id-form.component';
import { FindByPseudonymFormComponent } from './find-by-pseudonym-form/find-by-pseudonym-form.component';

const routes: Routes = [
  { path: '', component: QueueComponent },
  { path: 'queue', component: QueueComponent },
  { path: 'request', component: RequestFormComponent },
  { path: 'findById', component: FindByIdFormComponent },
  { path: 'findByPseudonym', component: FindByPseudonymFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
