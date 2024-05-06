import { Component, OnInit } from '@angular/core';
import UserService from 'services/user.service';


import { studentsTab } from 'src/app/data';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  studentsTab:any
  constructor(private service : UserService) { }



  ngOnInit(): void {
    this.service.getAllUser().subscribe((response) =>{
      this.studentsTab=response.users
    })
  }

}
