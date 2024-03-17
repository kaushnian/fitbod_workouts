'use client';

import { useExerciseSetsByDate } from '../lib/hooks';
import PerformanceListItem from './performance_list_item';

export default function Performances() {
  const exerciseSetsByDate = useExerciseSetsByDate();

  return (
    <>
      <h2 className="text-base font-bold mb-8">Performances:</h2>

      <ul>
        {Object.entries(exerciseSetsByDate).map(([date, exerciseSets]) => (
          <PerformanceListItem key={date} date={date} exerciseSets={exerciseSets} />
        ))}
      </ul>
    </>
  );
}
