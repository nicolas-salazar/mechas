/* eslint-disable react-hooks/exhaustive-deps */
import { firestoreDb } from '../firebase.config';
import { useEffect, useState } from 'react';
import { Dedication } from '../types/dedication';
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';

const FIRESTORE_DEDICATIONS_COLLECTION = 'dedications';
const DEDICATIONS_QUERY_LIMIT = 20;

const useDedications = () => {
  const [dedications, setDedications] = useState<Dedication[]>([]);

  useEffect(() => {
    const fetchDedications = async () => {
      const dedicationsQuery = query(
        collection(firestoreDb, FIRESTORE_DEDICATIONS_COLLECTION),
        orderBy('createdAt'),
        limit(DEDICATIONS_QUERY_LIMIT),
      );

      const snapshots = await getDocs(dedicationsQuery);

      const dedications: Dedication[] = [];
      snapshots.forEach((snapshot) => {
        const data = snapshot.data() as {
          author: string;
          createdAt: { seconds: number; nanoseconds: number };
          message: string;
        };

        dedications.push({
          author: data.author,
          createdAt: new Date(data.createdAt.seconds * 1000),
          id: snapshot.id,
          message: data.message,
        });
      });

      setDedications(dedications);
    };

    fetchDedications();
  }, []);

  return {
    dedications,
  };
};

export default useDedications;
