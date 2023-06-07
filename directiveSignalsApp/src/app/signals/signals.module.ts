import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignalsRoutingModule } from './signals-routing.module';
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';
import { PropertiesPaeComponent } from './pages/properties-pae/properties-pae.component';


@NgModule({
  declarations: [
    SignalsLayoutComponent,
    SideMenuComponent,
    CounterPageComponent,
    UserInfoPageComponent,
    SideMenuComponent,
    PropertiesPaeComponent

  ],
  imports: [
    CommonModule,
    SignalsRoutingModule,


  ]
})
export class SignalsModule { }
