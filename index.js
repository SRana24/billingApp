/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import firebase from '@react-native-firebase/app';

import {name as appName} from './app.json';

const firebaseConfig = {
    apiKey: 'AIzaSyA6enGpmVeTgXLtOnJpU4eis7Rbk2UPfbw',
    authDomain: 'billingapp-98f8e.firebaseapp.com',
    projectId: 'billingapp-98f8e',
    storageBucket: 'billingapp-98f8e.appspot.com',
    messagingSenderId: '881710562598',
    appId: '1:881710562598:android:a99c72c4db9c06882555e7',
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
AppRegistry.registerComponent(appName, () => App);
