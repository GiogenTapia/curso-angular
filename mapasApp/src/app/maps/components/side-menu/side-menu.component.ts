import { Component } from '@angular/core';





interface  MenuItem {
  rute: string,
  name: string
};

@Component({
  selector: 'maps-side-menu',
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

  ]
  constructor(){}
}
