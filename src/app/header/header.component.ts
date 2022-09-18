import { Component, OnInit } from '@angular/core';
import { MenuComponent as Menu } from '../menu/menu.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string;
  
  constructor() {
    this.title = 'Cargando título...';
  }

  ngOnInit(): void {
  }
}
