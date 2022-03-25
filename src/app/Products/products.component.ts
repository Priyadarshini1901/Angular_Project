import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  template: `
   <div class="homepage">
<img src="assets/images/p1.JPG" alt="pic" >
</div>
<img src="assets/images/p2.JPG" alt="pic" >
<img src="assets/images/p3.JPG" alt="pic" >
<img src="assets/images/p4.JPG" alt="pic" >
<img src="assets/images/p5.JPG" alt="pic" >
<img src="assets/images/last.JPG" alt="pic" >


  `,
  styles: [
  ]
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
