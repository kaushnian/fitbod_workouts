'use client';

import { useExerciseSetsByDate } from '../lib/hooks';
import { ExerciseSetsByDate } from '../lib/storage';
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
        <div data-testid="performances">
          <h2 className="text-base font-bold mb-8">Performances:</h2>
          <ul>
            {getEntriesSortedByDate(exerciseSetsByDate).map(([date, exerciseSets]) => (
              <PerformanceListItem key={date} date={date} exerciseSets={exerciseSets} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

function getEntriesSortedByDate(sets: ExerciseSetsByDate) {
  return Object.entries(sets).toSorted((a, b) => {
    const dateA = new Date(a[0]);
    const dateB = new Date(b[0]);

    return dateA === dateB ? 0 : dateA < dateB ? -1 : 1;
  });
}
