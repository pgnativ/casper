import { Component } from '@angular/core';
import {initializeApp, database} from 'firebase';

/**
 * TODO (pgnativ):
 * An import path cannot end with a '.ts' extension.
 * The problem of absolute paths './src/environments/firebase.config'
 */
import {firebaseConfig} from '../environments/firebase.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
    // Initialize Firebase

    /*initializeApp(firebaseConfig);

    const root = database().ref('messages/2');

    root.on('value', function(span) {
      console.log(span.key, span.val());
    })*/
  }
}
