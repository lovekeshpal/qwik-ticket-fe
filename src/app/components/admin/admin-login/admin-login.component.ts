import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.scss',
})
export class AdminLoginComponent {
  adminLoginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.adminLoginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.adminLoginForm.valid) {
      console.log(this.adminLoginForm.value);
      // this.adminLoginForm.reset();
      this.adminLoginForm.get('password')?.setValue('');
      // API call
    } else {
      console.log('Form is not valid');
    }
  }
}
