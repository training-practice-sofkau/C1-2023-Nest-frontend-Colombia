export const environment = {
  firebase: {
    projectId: 'jp-bank-526c6',
    appId: '1:16681709335:web:33df73db37c348186bd152',
    storageBucket: 'jp-bank-526c6.appspot.com',
    apiKey: 'AIzaSyA9OOtwR-yoBoQ1QSZ0-Gd73KgAhIzeFFk',
    authDomain: 'jp-bank-526c6.firebaseapp.com',
    messagingSenderId: '16681709335',
  },
  production: true,
  regexPassword: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
  regexPhone: /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/,
  regexEmail: /^(?:(?:[\w`~!#$%^&*\-=+;:{}'|,?\/]+(?:(?:\.(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)*"|[\w`~!#$%^&*\-=+;:{}'|,?\/]+))*\.[\w`~!#$%^&*\-=+;:{}'|,?\/]+)?)|(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)+"))@(?:[a-zA-Z\d\-]+(?:\.[a-zA-Z\d\-]+)*|\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])$/

};
