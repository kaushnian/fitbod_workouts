import { fetchExercises } from '../lib/data';
import ExerciseListItem from './exercise_list_item';

export default async function ExerciseList() {
  const exercises = await fetchExercises();

  return (
    <ul className="grid grid-cols-1 tablet:grid-cols-2 desktop:gap-x-16 tablet:gap-x-4 gap-y-8 pt-4">
      {exercises.map(exercise => (
        <ExerciseListItem key={exercise.id} data={exercise} />
      ))}
    </ul>
  );
}
