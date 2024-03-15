import { fetchExercises } from '../lib/data';
import ExerciseListItem from './exercise_list_item';

export default async function ExerciseList() {
  const exercises = await fetchExercises();

  return (
    <ul className="grid sm:grid-cols-2 grid-cols-1 gap-x-16 gap-y-8 pt-4">
      {exercises.map(exercise => (
        <ExerciseListItem key={exercise.id} data={exercise} />
      ))}
    </ul>
  );
}
