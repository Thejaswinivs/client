import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StudentsComponent } from './students/students.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { RegistercourseComponent } from './registercourse/registercourse.component';
import { RegisterstudentComponent } from './registerstudent/registerstudent.component';
import { RemoteService } from 'src/app/remote.service';
import { SnackbarComponent } from './snackbar/snackbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentsComponent,
    CoursesComponent,
    HomeComponent,
    RegistercourseComponent,
    RegisterstudentComponent,
    SnackbarComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  entryComponents: [
    SnackbarComponent
  ],
  providers: [
    RemoteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
