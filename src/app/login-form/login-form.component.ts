import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  connexion!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.connexion = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      pwd: ['', Validators.required],
    });
  }

  onSubmitForm(): void {
   console.log(this.connexion.value);
  }
}
