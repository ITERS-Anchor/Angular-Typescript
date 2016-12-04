import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

declare var JSON: any;
//DAL
@Injectable()
export class UsersService {
    private apiUrl = "/api/v1/users/";
    
    constructor(private http: Http) { }

    getAllUsers(): Promise<any> {
        const url = `${this.apiUrl}list`;
        return this.http.get(url, { body: "" })
            .toPromise()
            .then(response => JSON.parseWithDate(response.text()));
    }  
}