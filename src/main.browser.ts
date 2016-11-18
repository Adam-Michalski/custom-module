import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {CustomModule} from './app/custom.module';

platformBrowserDynamic().bootstrapModule(CustomModule)
  .catch(err => console.error(err));
