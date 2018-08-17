import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class SharedService {
    numberInputs: BehaviorSubject<Array<number>> = new BehaviorSubject<Array<number>>([1]);
    routeTo: BehaviorSubject<string> = new BehaviorSubject<string>('');
    sum: BehaviorSubject<number> = new BehaviorSubject<number>(1);
    prod: BehaviorSubject<number> = new BehaviorSubject<number>(1);
    findsum(al: Array<number>): number {
        var result: number = 0;
        al.forEach(element => {
            result += element;
        });
        this.sum.next(result);
        return result;
    }
    findprod(al: Array<number>): number {
        var result: number = 1;
        al.forEach(element => {
            result *= element;
        });
        this.prod.next(result);
        return result;
    }
}