import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserResponseModelWrapper, UserResponseModel } from '../classes/user-response-model';
import { Subject } from 'rxjs';

@Injectable()
export class BackEndService {

    globals = {
        "serverLocation": "http://localhost:3000"
    };

    _token: string = null;
    set token(value: string){
        this._token = value;
        localStorage.setItem("access_token", value);
    }
    get token(): string {
        return this._token;
    }
    user: UserResponseModel = null;

    loginAnchor = new Subject();
    logoutAnchor = new Subject();

    constructor(private client: HttpClient){
        let token = localStorage.getItem("access_token");
        if(token){
            this.token = token;
            this.loginAnchor.next();
        }
    }
    /**
     * the method sends a http delete to the backend
     */
    delete(url){
        return this.client.delete(this.globals.serverLocation + "/" + url, {
            headers: new HttpHeaders().set("Authorization", "Bearer " + this.token)
        });
    }
    /**
     * the method sends a http get request to the backend
     */
    get(url){
        return this.client.get(this.globals.serverLocation + "/" + url, {
            headers: new HttpHeaders().set("Authorization", "Bearer " + this.token)
        });
    }
    /**
     * the method sends a http get request to the backend
     */
    getBlob(url){
        return this.client.get(this.globals.serverLocation + "/" + url, {
            headers: new HttpHeaders().set("Authorization", "Bearer " + this.token),
            responseType: 'blob'
        });
    }
    /**
     * the method checks whether the current user is logged in
     */
    isLoggedIn(): boolean {
        if(this.token == null){
            return false;
        }
        return true;
    }
    /**
     * the method loggs the current user in with the given credentials
     */
    login(email: string, password: string, successHandler: (userResponseModel: UserResponseModel) => void, errorHandler: any){
        this.post("login", {
            "email": email,
            "password": password,
          }).subscribe((success: UserResponseModelWrapper) => {
            this.token = success.token;
            this.user = success.user;
            this.loginAnchor.next();
            successHandler(success.user);
          }, errorHandler);
    }
    /**
     * the method loggs the current user out
     */
    logout(){
        this.token = null;
        this.user = null;
        localStorage.removeItem("access_token");
        this.logoutAnchor.next();
    }
    /**
     * the method initiates a put request to the backend
     */
    put(url, data) {
        return this.client.put(this.globals.serverLocation + "/" + url, data, {
            headers: new HttpHeaders().set("Authorization", "Bearer " + this.token)
        });
    }
    /**
     * the method initiates a post request to the backend
     */
    post(url, data) {
        return this.client.post(this.globals.serverLocation + "/" + url, data, {
            headers: new HttpHeaders().set("Authorization", "Bearer " + this.token)
        });
    }
}