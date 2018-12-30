import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { GeneralModel } from 'src/app/model/general-model';
import { RemoteService } from 'src/app/remote.service';
import { SnackbarComponent } from 'src/app/snackbar/snackbar.component';

@Component({
  selector: 'app-registerstudent',
  templateUrl: './registerstudent.component.html',
  styleUrls: ['./registerstudent.component.scss']
})
export class RegisterstudentComponent implements OnInit {

  student: GeneralModel.Student = new GeneralModel.Student();

  constructor(private router: Router, private remoteService: RemoteService, private snackbar: MatSnackBar) { }

  ngOnInit() {
  }

  onRegister() {
    this.remoteService.addStudent(this.student).subscribe((res: any) => {
      console.log("Saved Successfully !!!");
      this.snackbar.openFromComponent(SnackbarComponent, { duration: 1000});
      this.router.navigate(['students']);
    })
  };

  onCancel() {
    this.student = new GeneralModel.Student();
  }

}
