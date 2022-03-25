
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="navbar is-danger">
   <a class="navabar-item">
   <h3 class="code">EARN FREE SHIPPING ON ORDERS $35 OR MORE</h3>
  </a>
</div>

<br>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="nush">
     <img src="assets/images/nush.JPG" alt="logo" width="120" height="1000px">
   </div>
</nav>
<div class="tabs is-centered">
<ul>
  <li class="is-active"><a routerLink="/">HOME</a></li>
<li><a routerLink="/Login">LOGIN</a></li>
<li><a routerLink="/Products">PRODUCTS</a></li>
  <li><a routerLink="/About">ABOUT US</a></li>
  <li><a routerLink="/Contact">CONTACT US</a></li>
</ul>
</div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = '🍩Nush Foods🍰';
}
