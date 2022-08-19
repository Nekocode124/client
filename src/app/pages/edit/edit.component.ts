import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  shoppingList = [
    {
      title: 'Buy things for dinner1',
      items: 'chicken,Whole Grains,  Beans and Lenti',
      category: 'Meats',
      date: '18/8/2022',
    },

    { title: 'Buy things for dinner2', items: 'rice' },
    { title: 'Buy things for dinner3', items: 'chicken rice chesse' },
    { title: 'Buy things for dinner4', items: 'chicken rice chesse' },
  ];

  editForm: FormGroup;
  //currentIndex:number = 0;
  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute) {
    this.editForm = this.fb.group({
      title: [''],
      category: [''],
      items: [''],
      date: [''],
    });
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    const currentIndex = parseInt(id == null ? '0' : id);
    this.editForm.get('title')?.setValue(this.shoppingList[currentIndex].title);

    this.editForm
      .get('category')
      ?.setValue(this.shoppingList[currentIndex].category);

    this.editForm.get('items')?.setValue(this.shoppingList[currentIndex].items);

    this.editForm.get('date')?.setValue(this.shoppingList[currentIndex].date);
  }

  update() {}
}
