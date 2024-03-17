const STORAGE_KEY = 'sets';

export type ExerciseSet = {
  reps: number;
  weight: number;
};

type ExerciseSetsByDate = {
  // Local date string in mm/dd/yyyy format
  [date: string]: ExerciseSet[];
};

export function getExerciseSets(): ExerciseSetsByDate {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
}

/**
 * Saves the provided exercise set to localStorage, adds it to the array of today's sets.
 *
 * Example of the storage object:
 * {
 *   '03/15/2024': [
 *     {reps: 10, weight: 15},
 *     {reps: 5, weight: 20},
 *   ],
 *   '03/16/2024': [
 *     {reps: 12, weight: 10},
 *   ]
 * }
 */
export function saveExerciseSet(exerciseSet: ExerciseSet) {
  const today = new Date().toLocaleDateString();
  const exerciseSets = getExerciseSets();

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      ...exerciseSets,
      [today]: [...(exerciseSets[today] || []), exerciseSet],
    })
  );
}
