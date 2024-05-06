import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import UserService from 'services/user.service';

import { teacherTab } from 'src/app/data';

@Component({
  selector: 'app-teacher-info',
  templateUrl: './teacher-info.component.html',
  styleUrls: ['./teacher-info.component.css']
})
export class TeacherInfoComponent implements OnInit {
  teacherTab:any
  teacher:any
  constructor(private activatedRoute : ActivatedRoute , private service :UserService) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
   this.service.getUserByID(id).subscribe((response)=>{
    this.teacher=response.user
   })

  }

}
