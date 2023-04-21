import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Batman', 'Mario', 'Calcetin con Rombos'];
  heroeBorrado: string  = '';

  borrarHeroe() {
    this.heroeBorrado = this.heroes.pop() || '';
  }

}
