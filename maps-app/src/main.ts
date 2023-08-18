import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import Mapboxgl from 'mapbox-gl';

Mapboxgl.accessToken = 'pk.eyJ1IjoiZ2lvZ2VuIiwiYSI6ImNsaTJjdGNheTBlNWwzZm50amtsaHY0cjUifQ.K3CSfBgqUXJY_8MirsSkfw';

if (!navigator.geolocation) {
  alert('Navegador no soporta la Geolocalizacion');
  throw new Error('Navegador no soporta la Geolocalizacion');
}



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
