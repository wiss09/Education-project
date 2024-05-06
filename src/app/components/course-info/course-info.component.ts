import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'services/course.service';
import { coursesTab, teacherTab } from 'src/app/data';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {
element : any 
courseTab:any=coursesTab
teacherTab:any=teacherTab
teacher:any
  constructor(
    private activatedRoute : ActivatedRoute ,
     private router: Router,
     private service : CourseService) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    
    this.service.getCourseByID(id).subscribe((response)=>{
      this.element=response.course
      this.teacher=response.teacher
    })
    
    
   
   
    // this.teacher=this.teacherTab.find((object:any) => this.courseTab.name == object.role)
    // console.log(this.teacher)
    
  }

}
