import { Component } from "@angular/core";
import { SharedService } from "../sharedService";
import { ResultModel } from "../resultModel";

@Component({
    selector: 'result',
    templateUrl: 'result.html',
    styleUrls: ['result.css']
})
export class ResultComponent {
    inputs: Array<number> = [];
    result: ResultModel = new ResultModel();
    constructor(private service: SharedService) {
        this.service.numberInputs.subscribe(response => {
            this.inputs = response;
            this.ngOnChanges();
        });
    }
    ngOnChanges() {
        if (this.inputs.length == 0) return;
        this.result.sum = this.service.findsum(this.inputs);
        this.result.product = this.service.findprod(this.inputs);
    }
    provideInputs() {
        this.service.numberInputs.next([1, 2, 3, 4]);
    }
    routeTo(dest:string){
        this.service.routeTo.next(dest);
    }
}