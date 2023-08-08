import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  registration!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.registration = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      pwd: ['', Validators.required],
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
    });
  }

  onSubmitForm(): void {
   console.log(this.registration.value);
  }
}
