import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  shoppingList = [
    {
      title: 'Buy things for dinner1',
      items: 'chicken,Whole Grains,  Beans and Lenti',
    },

    { title: 'Buy things for dinner2', items: 'rice' },
    { title: 'Buy things for dinner3', items: 'chicken rice chesse' },
    { title: 'Buy things for dinner4', items: 'chicken rice chesse' },
  ];
  constructor() {}

  ngOnInit(): void {}

  delete(i: number) {
    alert(i);
  }
}
