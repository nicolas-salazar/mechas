/* eslint-disable @typescript-eslint/no-empty-interface */
import * as functions from 'firebase-functions';
import { firestore } from 'firebase-admin';
import { IGlobalCounters } from '../types/globals';

interface ICreateAphorismPayload extends IAphorism {}

const createAphorism = functions.https.onCall(
  async ({ author, message }: ICreateAphorismPayload): Promise<IAphorism> => {
    const firestoreDB = firestore();
    const globalCountersRef = firestoreDB.collection('globals').doc('counters');

    const globalCountersSnapshot = await globalCountersRef.get();
    const globalCountersMetadata = globalCountersSnapshot.data() as IGlobalCounters;

    const nextAphorismsId = globalCountersMetadata.aphorismsCounter + 1;
    await firestoreDB.collection('aphorisms').doc(nextAphorismsId.toString()).set({
      author,
      message,
    });

    await firestoreDB.collection('globals').doc('counters').update({
      aphorismsCounter: nextAphorismsId,
    });

    return {
      author,
      message,
    };
  },
);

export default createAphorism;
