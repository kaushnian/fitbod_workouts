import { useEffect, useState } from 'react';
import { ExerciseSetsByDate, STORAGE_EVENT, getExerciseSetsByDate } from './storage';

export function useExerciseSetsByDate(storageKey: string) {
  const [exerciseSets, setExerciseSets] = useState<ExerciseSetsByDate>({});

  useEffect(() => {
    setExerciseSets(getExerciseSetsByDate(storageKey));

    const storageChangeHandler = () => {
      setExerciseSets(getExerciseSetsByDate(storageKey));
    };

    addEventListener(STORAGE_EVENT, storageChangeHandler);

    return () => void removeEventListener(STORAGE_EVENT, storageChangeHandler);
  }, [storageKey]);

  return exerciseSets;
}
