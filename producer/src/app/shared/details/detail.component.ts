import { Component } from "@angular/core";
import { SharedService } from "../sharedService";

@Component({
    selector:'detail',
    templateUrl:'detail.html'
})
export class DetailComponent{
    elements:Array<number>;
    sum:number;
    prod:number;
    constructor(private resultService:SharedService){
        this.resultService.numberInputs.subscribe(res=>{
            this.elements=res;
        });
        this.resultService.sum.subscribe(res=>{
            this.sum=res;
        });
        this.resultService.prod.subscribe(res=>{
            this.prod=res;
        });
    }
}