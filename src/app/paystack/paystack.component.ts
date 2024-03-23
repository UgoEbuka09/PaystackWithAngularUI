import { Component } from '@angular/core';
import { BagDetails } from './interface';

@Component({
  selector: 'app-paystack',
  templateUrl: './paystack.component.html',
  styleUrl: './paystack.component.css',
})
export class PaystackComponent {
  bagDetail: any;
  show: boolean = false;

  data: BagDetails[] = [
    {
      id: 1,
      name: 'Ella Purse',
      image: './assets/bag01.jpg',
      price: 5000,
    },
    {
      id: 2,
      name: 'Crystal 2in1 Bag',
      image: './assets/bag02.jpg',
      price: 20000,
    },
    {
      id: 3,
      name: 'holloids 3in1 Bag',
      image: './assets/bag03.jpg',
      price: 14000,
    },
    {
      id: 4,
      name: 'Jasmine Bag',
      image: './assets/bag04.jpg',
      price: 35007,
    },
  ];

  constructor() {}

  ngOnInit(): void {
    console.log(this.data);
  }
  getBagDetailById(id: number) {
    console.log(id);
    this.bagDetail = this.data.filter((item) => {
      return item.id === id;
    });

    if (this.bagDetail) {
      this.show = true;
    }
    console.log(this.bagDetail);
    console.log(this.show);
  }
}
