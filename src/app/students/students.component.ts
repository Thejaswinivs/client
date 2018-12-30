import { Component, OnInit } from '@angular/core';
import { RemoteService } from 'src/app/remote.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'phone'];
  students = [];

  constructor(private remoteService: RemoteService) { }

  ngOnInit() {
    this.remoteService.getStudents().subscribe((res: any)=> {
      this.students = res;
    })
  }

}
