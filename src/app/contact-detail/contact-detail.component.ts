import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router/src/router';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';
import { Location } from "@angular/common";

@Component({
  selector: 'rb-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {
  contactArr : Contact[];
  selectedContactObj : Contact;
  constructor(private routerRef : ActivatedRoute,
              private contactServRef :ContactService,
              private locationRef : Location) { }

  ngOnInit() {
    this.getContactId();
  }
  getContactId():void{
    const id = +this.routerRef.snapshot.paramMap.get('id');
    this.contactServRef.getContactList().subscribe(contactServArr =>{
      
     this.contactArr = contactServArr
     this.selectedContactObj = this.contactArr.find(contactObj => contactObj.id === id);
    });
  }

  goBack():void{
    this.locationRef.back();
  }

}
