import { Injectable } from '@angular/core';
import { Contact } from "./contact";
import { ContactConst } from "./mock-contact";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContactService {
  private baseUrl:string = 'http://localhost:3000/contactObj';

  constructor(private HttpServ : HttpClient) { }

  getContactList():Observable<Contact[]>{
    // return ContactConst; //Returning the Harcoded Contant JSON Object from mock-contact File
    return this.HttpServ.get<Contact[]>(this.baseUrl); //to fetch data from json-server 
  }

}
