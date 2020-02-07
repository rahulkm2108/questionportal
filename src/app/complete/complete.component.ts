import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertComponent } from './alert/alert.component';
import { ServiceService } from './../services/service.service';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent implements OnInit {
  durationInSeconds = 5;
  yesCount: any;
  noCount: any;
  blankCount: any;
  constructor(private router: Router, private _snackBar: MatSnackBar, private service: ServiceService) { }

  openSnackBar() {
    this._snackBar.openFromComponent(AlertComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  ngOnInit() {
    this.yesCount = localStorage.getItem('Yes');
    this.noCount = localStorage.getItem('No');
    this.blankCount = localStorage.getItem('Blank');
    if (this.service.maxScore == true) {
      this.openSnackBar();
    }
  }

  goto() {
    this.router.navigate(['/']);
  }

}
