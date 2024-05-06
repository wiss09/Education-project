import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
@Input() courseInput:any
rating(price:number){
  if (price >= 1000 && price < 2000) {
    return "medium"

  }
  else if(price >=2000)
  {return "high"}
  else{return "low"}

}
  constructor() { }

  ngOnInit(): void {
  }

}
