import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from "./contact-list/contact-list.component";
import { AddContactComponent } from "./add-contact/add-contact.component";
import { ContactDetailComponent } from "./contact-detail/contact-detail.component";

const routes: Routes = [
  {path:"contactList",component:ContactListComponent},
  {path:"addContact",component:AddContactComponent},
  {path:"contactDetails/:id",component:ContactDetailComponent},
  {path:'',redirectTo:'/contactList',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
