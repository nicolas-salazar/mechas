/* eslint-disable react-hooks/exhaustive-deps */
import { collection, getDocs, limit, query } from 'firebase/firestore';
import { firestoreDb } from '../firebase.config';
import { useEffect, useState } from 'react';
import randomItem from 'random-item';

const QUERY_LIMIT = 1;

interface Aphorism {
  author: string;
  message: string;
}

const useAphorism = () => {
  const aphorismsRef = collection(firestoreDb, 'aphorisms');
  const [aphorism, setAphorism] = useState<Aphorism | null>(null);

  useEffect(() => {
    const fetchAphorism = async () => {
      const queryRef = query(aphorismsRef, limit(QUERY_LIMIT));
      const querySnapshot = await getDocs(queryRef);

      const availableAphorisms: Aphorism[] = [];
      querySnapshot.forEach((doc) => {
        const serializedItem = doc.data() as Aphorism;
        availableAphorisms.push(serializedItem);
      });

      setAphorism(randomItem(availableAphorisms));
    };

    fetchAphorism();
  }, []);

  return {
    author: aphorism?.author || '',
    message: aphorism?.message || '',
  };
};

export default useAphorism;
