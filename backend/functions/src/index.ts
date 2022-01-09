/* eslint-disable object-curly-newline */
/* eslint-disable import/first */
import * as admin from 'firebase-admin';
import serviceAccount from './firebase/serviceAccount/serviceAccount';
import { createAphorism } from './functions';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

exports.deleteMocks = createAphorism;
