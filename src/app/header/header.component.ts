import { Component, OnInit } from '@angular/core';
import { MenuComponent as Menu } from '../menu/menu.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: String;
  
  constructor() {
    this.title = 'Mis proyectos';
  }

  ngOnInit(): void {
  }
}
