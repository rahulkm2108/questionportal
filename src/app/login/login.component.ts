import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myform: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  age: FormControl;
  subscription: Subscription;

  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {
    localStorage.clear();
    this.createForm();
  }

  createForm() {
    this.myform = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ]),
      age: new FormControl('', Validators.required)
    });
  }

  onNext(routeUrl: string) {
    if (this.myform.valid) {
      this.service.updateUserData(this.myform.value);
      this.router.navigate([routeUrl]);
    }
  }

}
