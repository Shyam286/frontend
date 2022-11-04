import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserloginService } from "./userlogin.service";


@Injectable()
export class AuthIntercepter implements HttpInterceptor
{
    constructor(private login:UserloginService){

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
export const authInterceptorProviders=[
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthIntercepter,
        multi: true,
    },
];