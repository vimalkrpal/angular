import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SharedModule, DetailComponent} from 'producer';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { ResultComponent } from 'producer';
const routes:Routes=[
  {path:'',component:ResultComponent},
  {path:'details',component:DetailComponent}
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
