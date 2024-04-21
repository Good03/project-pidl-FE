import {Component, EventEmitter, Output} from '@angular/core';
import {SettingsComponent} from "../settings/settings.component";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {AxiosService} from "../../services/axios/axios.service";
import {Router} from "@angular/router";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {MatTooltip} from "@angular/material/tooltip";
import {MatIcon} from "@angular/material/icon";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-update-user-form',
  standalone: true,
  imports: [
    MatIcon,
    MatButton,
    MatTooltip,
    ReactiveFormsModule,
    NgIf,
    MatFormField,
    MatInput,
    MatLabel
  ],
  templateUrl: './update-user-form.component.html',
  styleUrl: './update-user-form.component.css'
})
export class UpdateUserFormComponent {
  constructor(private fb: FormBuilder, private axiosService: AxiosService,
              private router: Router) { }

  username = window.localStorage.getItem("username");

  updateForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    email: [''],
    address: [''],
    phoneNumber: ['']
  });

  updateUser(): void {
    this.axiosService.request(
      'PUT',
      `/api/users/update/${(this.username)}`,
      {
        firstName: this.updateForm.value.firstName,
        lastName: this.updateForm.value.lastName,
        email: this.updateForm.value.email,
        address: this.updateForm.value.address,
        phoneNumber: this.updateForm.value.phoneNumber
      }
    ).then(response => {
      this.router.navigate(['/profile']);
    }).catch(error => {
      console.log('Error during update:', error);
    })
  }

}
