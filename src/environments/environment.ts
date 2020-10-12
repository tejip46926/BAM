// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyB3N30r3znGF9gu07we3F3-jl1WuY8htvE",
    authDomain: "talentsday-42962.firebaseapp.com",
    databaseURL: "https://talentsday-42962.firebaseio.com",
    projectId: "talentsday-42962",
    storageBucket: "talentsday-42962.appspot.com",
    messagingSenderId: "112132538515",
    appId: "1:112132538515:web:11873d8c2492641b558d66",
    measurementId: "G-RFB36BP9RV"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
