import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  items: MenuItem[] = [];

  constructor(){

  }
  
  ngOnInit(): void {
    this.items =  [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items : [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-aling-left',
            routerLink: '/'
          },
          {
            label: 'Numeros',
            icon: 'pi pi-aling-left',
            routerLink: 'numeros'
          },
          {
            label: 'No Comunes',
            icon: 'pi pi-aling-left',
            routerLink: 'no-comunes'
          }
        ]
      },
      {
        label: 'Pipes Personalizados',
        icon: 'pi pi-cog',
        routerLink:'ordenar'
      }
    ];
  }



}
