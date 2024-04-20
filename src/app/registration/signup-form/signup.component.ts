import {Component, EventEmitter, Output} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatTooltip} from "@angular/material/tooltip";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {ToastService} from "angular-toastify";

@Component({
  selector: 'app-signup-form',
  standalone: true,
    imports: [
        MatButton,
        MatFormField,
        MatInput,
        MatLabel,
        MatTooltip,
        ReactiveFormsModule,
        RouterLink
    ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  @Output() newUserEvent = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private router:Router) {}

  registerFormular = this.formBuilder.group({
    email: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  onSubmitRegister(){
    this.newUserEvent.emit({'email': this.registerFormular.value.email,
      'username': this.registerFormular.value.username, 'password': this.registerFormular.value.password});
  }

}