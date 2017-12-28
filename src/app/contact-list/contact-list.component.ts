import { Component, OnInit } from '@angular/core';
import { Contact } from "../contact";
import { ContactConst } from "../mock-contact";
import { ContactService } from "../contact.service";
import { Router } from '@angular/router';

@Component({
  selector: 'rb-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  ContactObjArr : Contact[];
  selectedContactObj : Contact;
  constructor(private ContactServ : ContactService) { }

  ngOnInit() {
    this.getContact();
  }

  getContact():void {
    this.ContactServ.getContactList().subscribe(contactObj => this.ContactObjArr=contactObj); 
  }

  onReceivingContactFromContactItem(event):void{
    this.selectedContactObj = event;
  }

  viewContact(ContactObj):void{
    this.selectedContactObj = ContactObj;
  }

}
