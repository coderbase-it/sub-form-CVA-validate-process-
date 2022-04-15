import { Component, OnInit } from '@angular/core';

import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-upper',
  templateUrl: './upper.component.html',
  styleUrls: ['./upper.component.css'],
})
export class UpperComponent implements OnInit {
  form: FormGroup;
  simpleform: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: this.fb.control('', Validators.required),
      address: this.fb.group({
        street: this.fb.control('', Validators.required),
        city: this.fb.control('', Validators.required),
      }),
    });
    this.simpleform = this.fb.group({
      firstName: this.fb.control('', Validators.required),
      lastName: this.fb.control('', Validators.required),
    });
  }

  get address() {
    return this.form.get('address') as FormGroup;
  }

  ngOnInit() {
    this.address.get('street').valueChanges.subscribe(console.log)
  }
}
