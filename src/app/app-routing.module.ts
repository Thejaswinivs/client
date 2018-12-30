import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { CoursesComponent } from 'src/app/courses/courses.component';
import { RegistercourseComponent } from 'src/app/registercourse/registercourse.component';
import { RegisterstudentComponent } from 'src/app/registerstudent/registerstudent.component';
import { StudentsComponent } from 'src/app/students/students.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path: 'courses',
    component: CoursesComponent
  },
  {
    path: 'students',
    component: StudentsComponent
  },
  {
    path: 'registerCourse',
    component: RegistercourseComponent
  },
  {
    path: 'registerStudent',
    component: RegisterstudentComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
