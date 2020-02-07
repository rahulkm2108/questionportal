import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { ServiceService } from "../services/service.service";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  questionData: any;
  showData: boolean = false;
  selectedTypeQue: any;
  ansData: any = ["", "", "", "", "", "", "", "", "", ""];


  constructor(private _formBuilder: FormBuilder, private service: ServiceService, public dialog: MatDialog) { }

  ngOnInit() {
    localStorage.clear();
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.getJsonData();
  }

  getJsonData() {
    this.service.getJsonData().subscribe(data => {
      this.questionData = data;
      // console.log(this.questionData);
    })
  }
  selectedType(title) {
    localStorage.setItem("title", title);
    let qData = this.questionData.filter(data => {
      if (data.title == title) {
        return data;
      }
    })
    this.selectedTypeQue = qData[0];
    // console.log(this.selectedTypeQue);
    this.showData = true;
  }



  ansYes(id) {
    this.ansData[id - 1] = "Yes"
    // console.log(this.ansData)
  }

  ansNo(id) {
    this.ansData[id - 1] = "No"
    // console.log(this.ansData)
  }

  submitAll() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '400px',
      data: this.ansData
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
    });
  }

}
