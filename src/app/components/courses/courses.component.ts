import { Component, OnInit } from '@angular/core';
import { coursesTab } from 'src/app/data';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  coursesTab:any=coursesTab
  constructor() { }
 
  ngOnInit(): void {
  }

}
