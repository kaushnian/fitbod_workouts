'use client';

import { useExerciseSetsByDate } from '../lib/hooks';
import { ExerciseItem } from './exercise_list_item';
import PerformanceListItem from './performance_list_item';

type PerformancesProps = {
  exerciseId: ExerciseItem['id'];
};

export default function Performances({ exerciseId }: PerformancesProps) {
  const exerciseSetsByDate = useExerciseSetsByDate(exerciseId);

  const hasRecords = Object.keys(exerciseSetsByDate).length > 0;

  return (
    <>
      {hasRecords && (
        <>
          <h2 className="text-base font-bold mb-8">Performances:</h2>
          <ul>
            {Object.entries(exerciseSetsByDate).map(([date, exerciseSets]) => (
              <PerformanceListItem key={date} date={date} exerciseSets={exerciseSets} />
            ))}
          </ul>
        </>
      )}
    </>
  );
}
