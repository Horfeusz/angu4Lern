import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MyComp2Component} from '../my-comp2/my-comp2.component';
import {StartComponent} from '../start/start.component';

const appRoutes: Routes = [
  {path: '', component: StartComponent},
  {path: 'start', component: StartComponent},
  {path: 'comp2', component: MyComp2Component}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
