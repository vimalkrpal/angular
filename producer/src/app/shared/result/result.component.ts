import { Component, Input } from "@angular/core";
import { ResultService } from "../resultService";
import { ResultModel } from "../resultModel";

@Component({
    selector: 'result',
    templateUrl: 'result.html',
    styleUrls:['result.css']
})
export class ResultComponent {
    @Input() inputs: Array<number> = [];
    result: ResultModel=new ResultModel();
    constructor(private service:ResultService){

    }
    ngOnChanges() {
        if (this.inputs.length == 0) return;
        this.result.sum=this.service.findsum(this.inputs);
        this.result.product=this.service.findprod(this.inputs);
    }
}