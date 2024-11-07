import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-admin-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './admin-register.component.html',
  styleUrl: './admin-register.component.scss',
})
export class AdminRegisterComponent {
  adminRegisterForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.adminRegisterForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.adminRegisterForm.valid) {
      console.log(this.adminRegisterForm.value);
      // this.adminLoginForm.reset();
      this.adminRegisterForm.get('password')?.setValue('');
      // API call
    } else {
      console.log('Form is not valid');
    }
  }
}
