import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {
  ReactiveFormsModule
} from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './login/login.component';


import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatStepperModule,
  MatSelectModule,
  MatRadioModule,
  MatGridListModule
} from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MatCardModule } from '@angular/material/card';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './questionnaire/modal/modal.component';
import { CompleteComponent } from './complete/complete.component';
import { AlertComponent } from './complete/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QuestionnaireComponent,
    ModalComponent,
    CompleteComponent,
    AlertComponent
  ],
  imports: [
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatCardModule,
    MatStepperModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSelectModule,
    MatRadioModule,
    MatDialogModule,
    MatGridListModule,
    MatSnackBarModule
  ],
  entryComponents: [
    ModalComponent,
    AlertComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
