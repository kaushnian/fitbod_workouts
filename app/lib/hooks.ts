import { useEffect, useState } from 'react';
import { STORAGE_EVENT, getExerciseSetsByDate } from './storage';

export function useExerciseSetsByDate() {
  const [exerciseSets, setExerciseSets] = useState(getExerciseSetsByDate());

  useEffect(() => {
    const storageChangeHandler = () => {
      setExerciseSets(getExerciseSetsByDate());
    };

    addEventListener(STORAGE_EVENT, storageChangeHandler);

    return () => void removeEventListener(STORAGE_EVENT, storageChangeHandler);
  }, []);

  return exerciseSets;
}
