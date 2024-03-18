import { ExerciseSet } from '../lib/storage';
import RmList from './rm_list';

type PerformanceListItemProps = {
  date: string;
  exerciseSets: ExerciseSet[];
};

export default function PerformanceListItem({ date, exerciseSets }: PerformanceListItemProps) {
  return (
    <li className="mb-8">
      <h3 className="font-bold mb-6" data-testid="performance-date">
        {date}
      </h3>

      <RmList exerciseSets={exerciseSets} />
    </li>
  );
}
