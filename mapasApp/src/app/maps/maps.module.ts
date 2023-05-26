import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
(mapboxgl as any).accessToken = 'pk.eyJ1IjoiZ2lvZ2VuIiwiYSI6ImNsaTJjdGNheTBlNWwzZm50amtsaHY0cjUifQ.K3CSfBgqUXJY_8MirsSkfw';


import { MapsRoutingModule } from './maps-routing.module';
import { MinMapComponent } from './components/min-map/min-map.component';
import { FullScreenComponent } from './pages/full-screen/full-screen.component';
import { MarkersComponent } from './pages/markers/markers.component';
import { ZoomRangeComponent } from './pages/zoom-range/zoom-range.component';
import { PropertiesComponent } from './pages/properties/properties.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';


@NgModule({
  declarations: [
    MinMapComponent,
    FullScreenComponent,
    MarkersComponent,
    ZoomRangeComponent,
    PropertiesComponent,
    SideMenuComponent,
    MapsLayoutComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule
  ]
})
export class MapsModule { }
