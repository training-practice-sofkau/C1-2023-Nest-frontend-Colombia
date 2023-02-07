import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './main/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
