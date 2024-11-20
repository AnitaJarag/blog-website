import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatepostComponent } from './createpost/createpost.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { HomeComponent } from './home/home.component';
import { ViewpostComponent } from './viewpost/viewpost.component';

export const routes: Routes = [
  { path: '', component: HomeComponent } ,
  { path: 'createpost', component: CreatepostComponent } ,
  { path: 'view-all', component: ViewAllComponent },
  { path: 'viewpost/:id', component: ViewpostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Fixed variable name
  exports: [RouterModule]
})
export class AppRoutingModule {}
