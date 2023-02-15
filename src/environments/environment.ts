// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'banco-sofka',
    appId: '1:157565000400:web:c7a1180cd5d95c87bcdcd5',
    storageBucket: 'banco-sofka.appspot.com',
    apiKey: 'AIzaSyBJcXVmJmULsec-Sk_DVNMvxs43J0lW-28',
    authDomain: 'banco-sofka.firebaseapp.com',
    messagingSenderId: '157565000400',
  },
  production: false,
  regexEmail:
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
