import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  myNum:number = 0;
  Products : any[] = [
    {
      Id:1,
      Name:"Civic",
      image:"./assets/images/3.png",
      Price: 200,
      qty:2
    },
    {
      Id:1,
      Name:"Toyota-Corolla",
      image:"./assets/images/2.png",
      Price: 2499,
      qty:150
    },
    {
      Id:3,
      Name:"Audi",
      image:"./assets/images/c46ee7388f5bfc5153bfbdb4a38f526b.jpg",
      Price: 1199,
      qty:150
      
    },
    {
      Id:4,
      Name:"Alto",
      image:"./assets/images/car4.jfif",
      Price: 2199,
      qty:150
      
    }


  ]



}
