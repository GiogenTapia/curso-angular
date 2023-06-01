import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';



interface  MenuItem {
  rute: string,
  name: string
};

@Component({
  standalone: true,
  imports: [RouterModule, CommonModule],
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  public menuItems: MenuItem[] = [
    {
      rute:'/maps/fullScreen',
      name:'FullScreen'
    },
    {
      rute:'/maps/zoom-range',
      name:'Zoom Range'
    },
    {
      rute:'/maps/markers',
      name:'Marks'
    },
    {
      rute:'/maps/properties',
      name:'Propierties'
    },
    {
      rute:'/alone',
      name:'Alone Page'
    },

  ]
  constructor(){}
}
