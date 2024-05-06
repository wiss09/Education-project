import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { StudentsComponent } from './components/students/students.component';
import { CoursesComponent } from './components/courses/courses.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { AddCourseComponent } from './components/dashbord/add-course/add-course.component';
import { AddTeacherComponent } from './components/dashbord/add-teacher/add-teacher.component';
import { AdminComponent } from './components/dashbord/admin/admin.component';
import { CourseInfoComponent } from './components/course-info/course-info.component';
import { TeacherInfoComponent } from './components/teacher-info/teacher-info.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"signup-teacher",component:SignupComponent},
  {path:"signup-admin",component:SignupComponent},
  {path:"home",component:HomeComponent},
  {path:"teachers",component:TeachersComponent},
  {path:"courses",component:CoursesComponent},
  {path:"students",component:StudentsComponent},
  {path:"add-course", component:AddCourseComponent},
  {path:"add-teacher", component:AddTeacherComponent},
  {path:"admin", component:AdminComponent},
  {path:"edit-course/:id", component:AddCourseComponent},
  {path:"edit-teacher/:id", component:AddTeacherComponent},
  {path:"course-info/:id", component:CourseInfoComponent},
  {path:"teacher-info/:id", component:TeacherInfoComponent}
  


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
