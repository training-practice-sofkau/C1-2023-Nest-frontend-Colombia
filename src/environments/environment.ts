
/**
 * Archivo de configuración de entorno de la aplicación.
 *
 * @remarks
 * En este archivo se encuentran las variables de entorno de la aplicación, como
 * la configuración de Firebase.
 *
 * @example
 * import { environment } from './environment';
 * console.log(environment.production); // Devuelve false
 */
export const environment = {
  /**
   * Objeto de configuración de Firebase.
   *
   * @remarks
   * Este objeto contiene los valores necesarios para conectar la aplicación a Firebase.
   */
  firebase: {
    projectId: 'ciclo1-todolist',
    appId: '1:896431904178:web:5b0ab55331b791f8a680ab',
    storageBucket: 'ciclo1-todolist.appspot.com',
    apiKey: 'AIzaSyD1Eldhmj6eTX_IFvQVOeUaNIKD04KS_V8',
    authDomain: 'ciclo1-todolist.firebaseapp.com',
    messagingSenderId: '896431904178',
  },

  /**
   * Indica si la aplicación está en producción o no.
   *
   * @remarks
   * Este valor se utiliza para activar o desactivar ciertas características de la
   * aplicación, como los logs o el uso de ciertas APIs.
   */
  production: false,
};

