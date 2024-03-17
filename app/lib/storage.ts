const STORAGE_KEY = 'sets';

export type ExerciseSet = {
  reps: number;
  weight: number;
};

export type ExerciseSetsByDate = {
  // Local date string in mm/dd/yyyy format
  [date: string]: ExerciseSet[];
};

export const STORAGE_EVENT = 'storage';

// This event must be triggered when the localStorage is updated.
// Required because the native 'storage' event doesn't work on the same page
// that is making the changes.
const storageChangeEvent = new Event(STORAGE_EVENT);

export function getExerciseSetsByDate(): ExerciseSetsByDate {
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
  const exerciseSets = getExerciseSetsByDate();

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      ...exerciseSets,
      [today]: [...(exerciseSets[today] || []), exerciseSet],
    })
  );

  // Dispatch 'storage' event to reflect localStorage changes in the current window.
  dispatchEvent(storageChangeEvent);
}
