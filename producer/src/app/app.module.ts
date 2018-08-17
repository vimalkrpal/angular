import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { ParentComponent } from './parent.component';
import { ABCComponent } from './abc.component';
import { SharedModule } from './shared/shared.module';
import { ResultComponent } from './shared/result/result.component';
const route: Routes = [
  { path: '', component: ResultComponent }
]
@NgModule({
  declarations: [
    AppComponent, ParentComponent, ABCComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(route), SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
