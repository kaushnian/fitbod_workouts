import ExerciseList from './ui/exercise_list';
import MainHeading from './ui/main_heading';

export default function Home() {
  return (
    <>
      <MainHeading>Top Exercises</MainHeading>

      <ExerciseList />
    </>
  );
}
