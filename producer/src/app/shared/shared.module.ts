import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { ResultComponent } from "./result/result.component";
import { SharedService } from './sharedService';
import { DetailComponent } from "./details/detail.component";

@NgModule({
    declarations: [ResultComponent, DetailComponent],
    imports: [CommonModule],
    exports: [ResultComponent,DetailComponent],
    providers: [SharedService]
})
export class SharedModule { }
export * from './sharedService';
export * from './resultModel';
export {ResultComponent} ;
export {DetailComponent};