import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { StudentsComponent } from './components/students/students.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { AddCourseComponent } from './components/dashbord/add-course/add-course.component';
import { AddTeacherComponent } from './components/dashbord/add-teacher/add-teacher.component';
import { TeachersTabComponent } from './components/dashbord/teachers-tab/teachers-tab.component';
import { CoursesTabComponent } from './components/dashbord/courses-tab/courses-tab.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { TeacherComponent } from './components/teachers/teacher/teacher.component';
import { StudentComponent } from './components/students/student/student.component';
import { CourseComponent } from './components/courses/course/course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WelcomeComponent } from './components/home/welcome/welcome.component';
import { RegisterNowComponent } from './components/home/register-now/register-now.component';
import { EventsComponent } from './components/home/events/events.component';
import { NewsComponent } from './components/home/news/news.component';
import { EventsCardComponent } from './components/home/events/events-card/events-card.component';
import { SmallNewsComponent } from './components/home/news/small-news/small-news.component';
import { LastestCourseComponent } from './components/courses/lastest-course/lastest-course.component';
import { AdminComponent } from './components/dashbord/admin/admin.component';
import { TeacherInfoComponent } from './components/teacher-info/teacher-info.component';
import { CourseInfoComponent } from './components/course-info/course-info.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CustomFilterPipe } from './pipe/custom-filter-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    CoursesComponent,
    TeachersComponent,
    StudentsComponent,
    DashbordComponent,
    AddCourseComponent,
    AddTeacherComponent,
    TeachersTabComponent,
    CoursesTabComponent,
    FooterComponent,
    HeaderComponent,
    TeacherComponent,
    StudentComponent,
    CourseComponent,
    WelcomeComponent,
    RegisterNowComponent,
    EventsComponent,
    NewsComponent,
    EventsCardComponent,
    SmallNewsComponent,
    LastestCourseComponent,
    AdminComponent,
    TeacherInfoComponent,
    CourseInfoComponent,
    CustomFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
