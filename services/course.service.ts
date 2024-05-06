import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  coursesURL:string='http://localhost:3000/courses'

  constructor(private http :HttpClient ) { }

  getAllCourse(){
    return this.http.get<{coursesTab:any}>(this.coursesURL);
  }

  getCourseByID(id:any){
    return this.http.get<{ course :any , teacher:any}>( `${this.coursesURL}/${id}`)
  }

  addCourse(object:any){
    return this.http.post(this.coursesURL , object )
  }

  editCourse(object:any){
    return this.http.put(this.coursesURL , object)
  }

  deleteCourse(id:number){
    return this.http.delete<{isDeleted:string}>(`${this.coursesURL}/${id}`)
  }
  getTeacherByCourse(id:any){
    return this.http.get(`${this.coursesURL}/teachers/${id}`)
  }
}
