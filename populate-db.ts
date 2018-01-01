import 'core-js/es6/reflect';
//import 'core-js/es7/reflect';

import {database, initializeApp} from "firebase";
import {firebaseConfig} from './src/environments/firebase.config';
import {dbData} from "./db-data";

initializeApp(firebaseConfig);

database().ref().remove();

const sizesRef = database().ref('sizes');

dbData.sizes.forEach(size => {
  // const sizeRef =
  sizesRef.push({
    name: size.name,
    description: size.description
  });
});
