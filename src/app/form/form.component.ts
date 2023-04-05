import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  form: FormGroup;
  submitted: boolean = false

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      gender: ['', Validators.required],
      name: ['', Validators.required],
      address: ['', Validators.required],
      birthdate: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true
  }
}
