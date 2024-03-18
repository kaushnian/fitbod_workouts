import { ExerciseSet } from '../lib/storage';

type RmListItemProps = ExerciseSet;

export default function RmListItem({ reps, weight }: RmListItemProps) {
  const rm = Math.floor(weight * (36 / (37 - reps)));

  return (
    <li className="flex justify-between gap-x-2">
      <div>
        {reps} x {weight} lb
      </div>
      <div>
        <strong>Estimated 1RM:</strong> {rm} lb
      </div>
    </li>
  );
}
