import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RemoteService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = 'http://localhost:3000/api/';

  getCourses() {
    let url = this.baseUrl + 'courses';
    return this.httpClient.get(url).pipe(
      map(res => res)
    );
  }

  getStudents() {
    let url = this.baseUrl + 'students';
    return this.httpClient.get(url).pipe(
      map(res => res)
    );
  }

  addCourse(course) {
    let url = this.baseUrl + 'course';
    return this.httpClient.post(url, course).pipe(
      map(res => res)
    );
  }

  addStudent(student) {
    let url = this.baseUrl + 'student';
    return this.httpClient.post(url, student).pipe(
      map(res => res)
    );
  }
}
