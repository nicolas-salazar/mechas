/* eslint-disable @typescript-eslint/no-empty-interface */
import * as functions from 'firebase-functions';
import { firestore } from 'firebase-admin';
import { IGlobalCounters } from '../types/globals';

type ICreateDedicationPayload = Omit<IDedication, 'createdAt'>;

const createDedication = functions.https.onCall(
  async ({ author, message }: ICreateDedicationPayload): Promise<IDedication> => {
    const firestoreDB = firestore();
    const globalCountersRef = firestoreDB.collection('globals').doc('counters');

    const globalCountersSnapshot = await globalCountersRef.get();
    const globalCountersMetadata = globalCountersSnapshot.data() as IGlobalCounters;

    const createdAt = new Date();

    await firestoreDB.collection('dedications').add({
      author,
      createdAt,
      message,
    });

    await firestoreDB
      .collection('globals')
      .doc('counters')
      .update({
        dedicationsCounter: globalCountersMetadata.dedicationsCounter + 1,
      });

    return {
      author,
      createdAt,
      message,
    };
  },
);

export default createDedication;
