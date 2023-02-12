import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

<<<<<<< HEAD
import { AppModule } from './app/main/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
=======
import { AppModule } from './app/modules/main/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
>>>>>>> fe70c39fb1e5094dd8a4f235c00bffdcc7890cfa
  .catch(err => console.error(err));
