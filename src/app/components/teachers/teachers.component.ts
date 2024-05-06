import { Component, OnInit } from '@angular/core';
import { teacherTab } from 'src/app/data';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  teacherTab:any=teacherTab
  constructor() { }

  ngOnInit(): void {
  }

}
