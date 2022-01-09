/* eslint-disable object-curly-newline */
/* eslint-disable import/first */
import * as admin from 'firebase-admin';
import serviceAccount from './firebase/serviceAccount/serviceAccount';
import { createAphorism, getAphorism } from './functions';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

exports.createAphorism = createAphorism;
exports.getAphorism = getAphorism;
