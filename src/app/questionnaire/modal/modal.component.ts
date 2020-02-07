import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServiceService } from '../../services/service.service';
import { Router } from '@angular/router';
import { convertUpdateArguments } from '@angular/compiler/src/compiler_util/expression_converter';
export interface DialogData { }

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  yesCount: any = 0;
  noCount: any = 0;
  blankCount: any = 0;
  constructor(
    private router: Router,
    private service: ServiceService,
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.countAns(this.data);
  }

  countAns(data) {
    data.map(item => {
      if (item == 'Yes') {
        this.yesCount = this.yesCount + 1;
      } else {
        if (item == 'No') {
          this.noCount = this.noCount + 1;
        } else {
          this.blankCount = this.blankCount + 1;
        }
      }
    })
    localStorage.setItem("Yes", this.yesCount);
    localStorage.setItem("No", this.noCount);
    localStorage.setItem("Blank", this.blankCount);
  }

  submitAll() {
    if (this.yesCount >= 7) {
      this.service.maxScore = true;
      this.router.navigate(['complete']);
      this.service.updateSheet(this.data).subscribe(res => {

      }, err => {
        if (err.status == 200) {
          // this.router.navigate(['complete']);
        }
      })
    } else {
      this.router.navigate(['complete']);
    }

  }

}
