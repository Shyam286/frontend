import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AdminLoginService } from "./admin-login.service";


@Injectable()
export class AdminAuthIntercepter implements HttpInterceptor
{
    constructor(private login:AdminLoginService){

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        
        //add jwt token request that is store in localstorage

        let authReq=req;
        const token=this.login.getToken();
        if(token != null)
        {
            authReq= authReq.clone({
                setHeaders: {Authorization: `Bearer ${token}`},
        });
        }
        return next.handle(authReq);
    }
    
}
export const adminAuthInterceptorProviders=[
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AdminAuthIntercepter,
        multi: true,
    },
];