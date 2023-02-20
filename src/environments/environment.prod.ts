export const environment = {
  firebase: {
    projectId: 'sofkabank-71571',
    appId: '1:823546693809:web:476b96ed9f241d46497a90',
    storageBucket: 'sofkabank-71571.appspot.com',
    apiKey: 'AIzaSyCAxRWEOsdETXhHB_vxXTWXY6x1DZJPK6s',
    authDomain: 'sofkabank-71571.firebaseapp.com',
    messagingSenderId: '823546693809',
  },
  production: true,
  baseUrl: "http://localhost:3000/",
  regexEmail:
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
  regexPassword: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g,
};
