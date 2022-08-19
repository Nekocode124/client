import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  createForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm = this.fb.group({
      title: [''],
      category: [''],
      items: [''],
      date: [''],
    });
  }

  ngOnInit(): void {}

  save() {
    const data = this.createForm.value;
    data['title'] = 'Chicken' + data['title'];
    //save this in real DB
  }

  reset() {
    this.createForm.reset();
  }
}
