import { fetchExercises } from '@/app/lib/data';
import AddExerciseSet from '@/app/ui/add_exercise_set';
import MainHeading from '@/app/ui/main_heading';
import Performances from '@/app/ui/performances';
import Image from 'next/image';
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

      <div className="w-[150px] h-[150px] relative m-auto mb-8">
        <Image
          src={exercise.image}
          alt={exercise.name}
          className="rounded-lg"
          layout="fill"
          priority
        />
      </div>

      <AddExerciseSet />

      <Performances />
    </>
  );
}
