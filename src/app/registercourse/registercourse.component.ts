import { Component, OnInit } from '@angular/core';
import { GeneralModel } from 'src/app/model/general-model';
import { RemoteService } from 'src/app/remote.service';
import { MatSnackBar } from '@angular/material';
import { SnackbarComponent } from 'src/app/snackbar/snackbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registercourse',
  templateUrl: './registercourse.component.html',
  styleUrls: ['./registercourse.component.scss']
})
export class RegistercourseComponent implements OnInit {

  course = new GeneralModel.Course();

  constructor(
    private remoteService: RemoteService,
    private snackbar: MatSnackBar,
    private router: Router) { }

  ngOnInit() {
  }

  onRegister() {

    this.remoteService.addCourse(this.course).subscribe((res)=> {
      this.snackbar.openFromComponent(SnackbarComponent, { duration: 1000});
      this.router.navigate(['courses']);
    });

  }

  onCancel() {
    this.course = new GeneralModel.Course();
  }

}
