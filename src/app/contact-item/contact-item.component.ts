import { Component, OnInit ,Input ,Output ,EventEmitter} from '@angular/core';
import { Contact } from "../contact";
import { Router } from '@angular/router';

@Component({
  selector: 'rb-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss']
})
export class ContactItemComponent implements OnInit {
  @Input()
  ContactObj : Contact;
  @Output('selectedContactObj')
  change : EventEmitter<Contact> = new EventEmitter<Contact>();
  constructor(private routerRef : Router) { }

  ngOnInit() {
  }

  viewContact(ContactObj):void{
    this.change.emit(ContactObj);
  }

  fetchContactDetails(ContactObj):void{
    this.routerRef.navigate(['contactDetails',ContactObj.id]);
  }

}
