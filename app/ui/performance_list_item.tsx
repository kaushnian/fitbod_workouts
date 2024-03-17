import { ExerciseSet } from '../lib/storage';
import RmList from './rm_list';

type PerformanceListItemProps = {
  date: string;
  exerciseSets: ExerciseSet[];
};

export default function PerformanceListItem({ date, exerciseSets }: PerformanceListItemProps) {
  return (
    <li>
      <h3 className="font-bold mb-6">{date}</h3>

      <RmList exerciseSets={exerciseSets} />
    </li>
  );
}
