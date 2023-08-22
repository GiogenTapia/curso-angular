import { Component, inject } from '@angular/core';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  private debounceTimer?: NodeJS.Timeout;
  private _placesService = inject(PlacesService);


  onQueryChanged(query: string = ''){

    if (this.debounceTimer) clearTimeout(this.debounceTimer);

    this.debounceTimer = setTimeout(() => {

      console.log('send this query:', query);

      this._placesService.getPlacesByQuery(query);

    }, 350);



  }

}
