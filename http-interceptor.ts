import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpEvent, HttpErrorResponse, HttpResponse, HttpRequest } from '@angular/common/http';
import { HttpHandler } from "@angular/common/http/src/backend";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';
@Injectable()
export class Interceptor implements HttpInterceptor {
    public requestCount: number = 0;
    modalOpen: Boolean = false;
    constructor() {
        var load = '<button id="startLoading" class="noDisplay" data-toggle="modal" data-target="#loadingScreen"></button>';
        load += '<div class="modal fade center" data-backdrop="static" data-keyboard="false" id="loadingScreen" role="dialog">';
        load += '<i class="fa fa-5x fa-spin fa-spinner" aria-hidden="true"></i>';
        load += '<button id="closeLoading" [hidden]=true data-dismiss="modal"></button>';
        load += '</div>';
        document.getElementById("loading").innerHTML = load;
    }

    update() {
        if (this.requestCount == 1) {
            this.startLoading();
        }
        else if (this.requestCount == 0) {
            this.stopLoading();
        }
    }

    startLoading() {
        if (this.modalOpen) return;
        document.getElementById("startLoading").click();
        this.modalOpen = true;
    }
    stopLoading() {
        document.getElementById("closeLoading").click();
        this.modalOpen = false;
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).do((ev: HttpEvent<any>) => {
            if (ev instanceof HttpResponse) {
                this.requestCount--;
                this.update();
            }
            else if (ev != null && ev.type != null) {
                this.requestCount++;
                this.update();
            }
        }).catch(error => {
            this.requestCount--;
            this.update();
            if (error instanceof HttpErrorResponse) {
                console.error('Processing http error', error);
                
            }
            return Observable.throw(error);
        })
    }
}
