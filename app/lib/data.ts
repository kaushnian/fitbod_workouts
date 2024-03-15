import { ExerciseItem } from '../ui/exercise_list_item';

export async function fetchExercises(): Promise<ExerciseItem[]> {
  const url = 'https://storage.googleapis.com/fitbod-web-internal/exercises.json';
  const params = {
    next: {
      revalidate: 3600, // revalidate at most every hour
    },
  };

  const response = await fetch(url, params);

  return response.json();
}
