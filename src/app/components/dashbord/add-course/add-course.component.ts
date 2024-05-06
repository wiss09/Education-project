import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { coursesTab } from 'src/app/data';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
courseTab:any=coursesTab
courseForm!:FormGroup
binding:string='Add Course'
  constructor(
    private activatedRoute : ActivatedRoute ,
     private fb: FormBuilder) { }

  ngOnInit(): void {
      let id   =this.activatedRoute.snapshot.paramMap.get('id');
      let course = this.courseTab.find((object:any) => id == object.id)
      console.log(course)
      this.courseForm=this.fb.group({
        name:[course.nameCourse],
        teacher:[course.teacherCourse],
        price:[course.priceCourse]
      })
   this.binding='Edit Course'
   
  }

}
