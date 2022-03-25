import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  template: `
<div class="homepage">
<img src="assets/images/Homepic.JPG" alt="pic" >
</div>
<div class="homepage1">
<img src="assets/images/cake.JPG" alt="pic" >
</div>
<br>
<h1 class="head1"> BUNDLE & SAVE</h1>

<div class="homepage1">
<img src="assets/images/Products.JPG" alt="pic" >
</div>

<div class="homepage1">
<img src="assets/images/last.JPG" alt="pic" >
</div>


  `,
  styles: []
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
