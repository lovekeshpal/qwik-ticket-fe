import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  FormArray,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-create-event',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.scss',
})
export class CreateEventComponent {
  eventForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.eventForm = this.formBuilder.group({
      eventName: ['', Validators.required],
      isPrivate: [false],
      heroImage: [null],
      venues: this.formBuilder.array([
        new FormControl('', Validators.required),
      ]),
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      hasSegments: [false],
      segments: this.formBuilder.array([
        this.formBuilder.group({
          segmentName: new FormControl('', Validators.required),
          startDateTime: new FormControl('', Validators.required),
          endDateTime: new FormControl('', Validators.required),
        }),
      ]),
      ticketsAvailable: [0, [Validators.required, Validators.min(1)]],
      ticketPrice: [0, [Validators.required, Validators.min(0)]],
      isParkingAvailable: [false],
      twoWheelerParking: [0],
      fourWheelerParking: [0],
    });
  }

  onSubmit(): void {
    if (this.eventForm.valid) {
      console.log('Form Data:', this.eventForm.value);
      this.eventForm.reset();
    } else {
      console.log('Form is invalid');
    }
  }

  get venues(): FormArray {
    return this.eventForm.get('venues') as FormArray;
  }

  addVenue(): void {
    const venueControl = new FormControl('', Validators.required);
    this.venues.push(venueControl);
  }

  removeVenue(index: number): void {
    this.venues.removeAt(index);
  }
}
