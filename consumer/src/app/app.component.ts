import { Component } from '@angular/core';
import {ResultModel, SharedService} from 'producer';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cr:any;
  ac:ResultModel;

  sendInputs(){
    this.sharedService.numberInputs.next([14,18]);
  }
  constructor(private sharedService:SharedService,private router:Router){
    this.sharedService.routeTo.subscribe(response=>{
      this.router.navigate([response.toString()]);
    })
  }
  title = 'app';
  ngOnChanges(){
    
  }
}
