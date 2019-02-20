import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="nav">
        <a class="nav-link active" [routerLink]="[ '/home']"> Home </a>
        <a class="nav-link" [routerLink]="[ '/formulario']"> Formulario </a>
        <a class="nav-link" [routerLink]="[ '/about']"> About </a>
    </nav>
  `,
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
