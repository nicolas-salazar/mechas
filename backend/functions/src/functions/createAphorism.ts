import * as functions from 'firebase-functions';

const createAphorism = functions.https.onCall(async (data, context) => ({
  message: 'Hola :)',
}));

export default createAphorism;
