import { ExerciseSet } from '../lib/storage';
import RmListItem from './rm_list_item';

type RmListProps = {
  exerciseSets: ExerciseSet[];
};

export default function RmList({ exerciseSets }: RmListProps) {
  return (
    <ul className="grid sm:grid-cols-2 grid-cols-1 gap-x-12 gap-y-6">
      {exerciseSets.map(({ reps, weight }, index) => (
        <RmListItem key={index} reps={reps} weight={weight} />
      ))}
    </ul>
  );
}
