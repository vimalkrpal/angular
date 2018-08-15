import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { ResultComponent } from "./result/result.component";
import { ResultService } from "./resultService";



@NgModule({
    declarations: [ResultComponent],
    imports: [CommonModule],
    exports: [ResultComponent],
    providers: [ResultService]
})
export class SharedModule { }
export * from './resultService';
export * from './resultModel';