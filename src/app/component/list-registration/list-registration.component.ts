import { Component, OnInit } from '@angular/core';
import { Registration } from 'src/app/model/registration';

@Component({
  selector: 'app-list-registration',
  templateUrl: './list-registration.component.html',
  styleUrls: ['./list-registration.component.css']
})
export class ListRegistrationComponent  implements OnInit{
  registrations!:Registration[];
  ngOnInit(): void {
    this.registrations = [
      {
      firstName:'Pranay',
      lastName:'Kumar',
      email:'pranay@gmail.com',
      mobile:98765432109
      },
      {
        firstName:'Raju',
        lastName:'Kumar',
        email:'raju@gmail.com',
        mobile:98765432178
      }

    ]

    }
}

