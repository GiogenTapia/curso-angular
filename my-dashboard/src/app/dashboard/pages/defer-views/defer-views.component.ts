import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeavyLoadersSlowComponent } from '@shared/heavy-loaders/heavy-loaders-slow.component';

@Component({
  standalone: true,
  imports: [CommonModule, HeavyLoadersSlowComponent],
  templateUrl: './defer-views.component.html',
})
export default class DeferViewsComponent {

}
