import { Injectable } from "@angular/core";

@Injectable()
export class ResultService {
    findsum(al: Array<number>): number {
        var result: number = 0;
        al.forEach(element => {
            result += element;
        });
        return result;
    }
    findprod(al: Array<number>): number {
        var result: number = 1;
        al.forEach(element => {
            result *= element;
        });
        return result;
    }
}