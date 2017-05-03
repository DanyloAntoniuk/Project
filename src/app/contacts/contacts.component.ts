import { Component, OnInit } from '@angular/core';
import { HttpService } from '../data.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
contacts: any;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getData().subscribe((data) => {
      this.contacts = data.contact;
    });
  }

}
