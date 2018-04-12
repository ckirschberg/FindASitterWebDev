import { Injectable } from "@angular/core";
import { UsersState } from "./store/store";
import { Sitter } from "./entities/sitter";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Baby } from "./entities/baby";

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) { }

  getSitters() {
    return this.http.get('http://angular2api1.azurewebsites.net/api/internships/getall');
  }

  createBaby(baby: Baby) {
    const httpOptions = {
      // responseType: 'text',
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
    //    'Authorization': 'my-auth-token' // If you use auth.
      })
    };
    baby.customerId = '3';
    return this.http.post("http://angular2api2.azurewebsites.net/api/internships", baby, httpOptions);
  }

  static getInitialUsersState() : UsersState {
    return { isBaby: undefined, babies: [], sitters: [
      // test data
      {
      username: 'test', firstname:'Lars', lastname: 'Petersen', birthDate: new Date(2000, 1,1), area: '', gender: 'MALE', rate: 195, workAreas: [], rating: []
    } as Sitter]};
  }
}