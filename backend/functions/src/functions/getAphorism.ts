/* eslint-disable @typescript-eslint/no-empty-interface */
import * as functions from 'firebase-functions';
import { firestore } from 'firebase-admin';
import generateRandomNumber from 'random-number';
import { IGlobalCounters } from '../types/globals';

const getAphorism = functions.https.onCall(async (): Promise<IAphorism> => {
  const firestoreDB = firestore();
  const globalCountersRef = firestoreDB.collection('globals').doc('counters');

  const globalCountersSnapshot = await globalCountersRef.get();
  const globalCountersMetadata = globalCountersSnapshot.data() as IGlobalCounters;

  const totalAphorisms = globalCountersMetadata.aphorismsCounter;
  const randomAphorismId = generateRandomNumber({
    min: 1,
    max: totalAphorisms,
    integer: true,
  });

  const targetAphorismId = firestoreDB.collection('aphorisms').doc(randomAphorismId.toString());
  const targetAphorismSnapshot = await targetAphorismId.get();
  const targetAphorismData = targetAphorismSnapshot.data() as IAphorism;

  return targetAphorismData;
});

export default getAphorism;
