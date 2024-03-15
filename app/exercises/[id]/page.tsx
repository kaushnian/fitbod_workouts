import { fetchExercises } from '@/app/lib/data';
import MainHeading from '@/app/ui/main_heading';
import { notFound } from 'next/navigation';

type ExerciseProps = {
  params: { id: string };
};

export default async function Exercise({ params }: ExerciseProps) {
  const exercises = await fetchExercises();

  const exercise = exercises.find(e => e.id === params.id);

  if (!exercise) {
    notFound();
  }

  return (
    <>
      <MainHeading>{exercise.name}</MainHeading>
    </>
  );
}
