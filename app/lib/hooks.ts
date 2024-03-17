import { useEffect, useState } from 'react';
import { ExerciseSetsByDate, STORAGE_EVENT, getExerciseSetsByDate } from './storage';

export function useExerciseSetsByDate() {
  const [exerciseSets, setExerciseSets] = useState<ExerciseSetsByDate>({});

  useEffect(() => {
    setExerciseSets(getExerciseSetsByDate());

    const storageChangeHandler = () => {
      setExerciseSets(getExerciseSetsByDate());
    };

    addEventListener(STORAGE_EVENT, storageChangeHandler);

    return () => void removeEventListener(STORAGE_EVENT, storageChangeHandler);
  }, []);

  return exerciseSets;
}
