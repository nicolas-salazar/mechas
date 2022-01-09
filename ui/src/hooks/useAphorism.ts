/* eslint-disable react-hooks/exhaustive-deps */
import { Aphorism } from '../types/aphorism';
import { firebaseFunctions } from '../firebase.config';
import { httpsCallable } from 'firebase/functions';
import { useEffect, useState } from 'react';

const FIREBASE_FUNCTION_GET_APHORISM_NAME = 'getAphorism';

const useAphorism = () => {
  const [aphorism, setAphorism] = useState<Aphorism | null>(null);

  useEffect(() => {
    const fetchAphorism = async () => {
      const getAphorismFromFirebase = httpsCallable(
        firebaseFunctions,
        FIREBASE_FUNCTION_GET_APHORISM_NAME,
      );
      const response = await getAphorismFromFirebase();
      const { author, message } = response.data as Aphorism;

      setAphorism({ author, message });
    };

    fetchAphorism();
  }, []);

  return {
    author: aphorism?.author || '',
    message: aphorism?.message || '',
  };
};

export default useAphorism;
