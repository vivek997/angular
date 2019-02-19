import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { ToasterService } from './toaster.service';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService, ToasterService]
})

export class AppComponent {
  users = [{title: 'test'}];
  selectedUser;
  datePickerConfig: Partial<BsDatepickerConfig>;
  todayDate = new Date();
  tdy = this.todayDate.getFullYear();
  newtdy = this.tdy-18;
  tdm = this.todayDate.getMonth();
  tdd = this.todayDate.getDate();
  constructor(private api: ApiService, private toasterService:ToasterService) {
    
    this.selectedUser = {
      id: -1, 
      username: '',
      dob: '',
      email: '',
      phone_no: '' 
    };

    this.datePickerConfig = Object.assign({}, {
      containerClass: 'theme-dark-blue',
      showWeekNumbers: false,
      minDate: new Date(1900,0,1),
      maxDate: new Date(this.newtdy,this.tdm,this.tdd),
      dateInputFormat: "DD/MM/YYYY",
    });
  }

 
  createUser = () => {
    this.api.createUser(this.selectedUser).subscribe(
      data => {
          this.users.push(data);
          this.toasterService.Success("Success");
      },
      error => {
        console.log(error);
        this.toasterService.Error("All fields are required.");
      }
    );
  }

}
