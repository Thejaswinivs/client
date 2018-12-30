import { Component, OnInit } from '@angular/core';
import { RemoteService } from 'src/app/remote.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses = [];
  displayedColumns: string[] = ['name', 'duration', 'trainer'];

  constructor(private remoteService: RemoteService) { }

  ngOnInit() {
    this.remoteService.getCourses().subscribe((res: any) => {
      this.courses = res;
    })
  }

}
