export type ExerciseSet = {
  reps: number;
  weight: number;
};

// Local date string in mm/dd/yyyy format
type DateString = string;

export type ExerciseSetsByDate = Record<DateString, ExerciseSet[]>;

export const STORAGE_EVENT = 'storage';

// This event must be triggered when the localStorage is updated.
// Required because the native 'storage' event doesn't work on the same page
// that is making the changes.
const storageChangeEvent = new Event(STORAGE_EVENT);

export function getExerciseSetsByDate(storageKey: string): ExerciseSetsByDate {
  if (typeof window === 'undefined') return {};

  return JSON.parse(window.localStorage.getItem(storageKey) || '{}');
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
export function saveExerciseSet(storageKey: string, exerciseSet: ExerciseSet) {
  const today = new Date().toLocaleDateString();
  const exerciseSets = getExerciseSetsByDate(storageKey);

  window.localStorage.setItem(
    storageKey,
    JSON.stringify({
      ...exerciseSets,
      [today]: [...(exerciseSets[today] || []), exerciseSet],
    })
  );

  // Dispatch 'storage' event to reflect localStorage changes in the current window.
  dispatchEvent(storageChangeEvent);
}
