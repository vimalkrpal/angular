import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ParentComponent } from './parent.component';
import { ABCComponent } from './abc.component';

@NgModule({
  declarations: [
    AppComponent,ParentComponent,ABCComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
