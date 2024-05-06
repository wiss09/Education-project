import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'services/course.service';
import UserService from 'services/user.service';
import { coursesTab, teacherTab } from 'src/app/data';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  @Input() CourseInput:any
  courseTab:any
  users:any
  goToDisplayCourse(id:any){
    this.router.navigate([`course-info/${id}`])
  }
  goToDisplayUser(id:any){
    this.router.navigate([`teacher-info/${id}`])
  }
  goToEditUser(id:any){
    this.router.navigate([`edit-teacher/${id}`])
  }
  goToEditCourse(id:any){
    this.router.navigate([`edit-course/${id}`])
  }
  goDeleteUser(id:any){
    this.userService.deleteUser(id).subscribe((data)=>{
      alert (data.isDeleted)
    })
    this.userService.getAllUser().subscribe((response) => {
      this.users = response.users})  
  }
  goDeleteCourse(id:any){
    this.courseService.deleteCourse(id).subscribe((data)=>{
      alert (data.isDeleted)
    })
    this.courseService.getAllCourse().subscribe((response) => {
      this.courseTab = response.coursesTab})  
  }
  constructor(
     private router : Router ,
     private userService : UserService,
     private courseService : CourseService) { }

  ngOnInit(): void {
    this.userService.getAllUser().subscribe((response) => {
      this.users = response.users
    })
    this.courseService.getAllCourse().subscribe((reponse) =>{
      this.courseTab=reponse.coursesTab
    })
    
  }

}
