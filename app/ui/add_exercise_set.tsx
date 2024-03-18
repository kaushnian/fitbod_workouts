'use client';

import { saveExerciseSet } from '../lib/storage';
import TextInput from './text_input';
import { ExerciseItem } from './exercise_list_item';

type AddExerciseSetProps = {
  exerciseId: ExerciseItem['id'];
};

interface FormControls extends HTMLFormControlsCollection {
  reps: HTMLInputElement;
  weight: HTMLInputElement;
}

interface ExerciseSetForm extends HTMLFormElement {
  readonly elements: FormControls;
}

export default function AddExerciseSet({ exerciseId }: AddExerciseSetProps) {
  const saveToLocalStorage = (e: React.FormEvent<ExerciseSetForm>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const reps = Number(form.elements.reps.value);
    const weight = Number(form.elements.weight.value);

    if (!reps || !weight) return;

    saveExerciseSet(exerciseId, { reps, weight });
    form.reset();
  };

  return (
    <div className="mb-8">
      <h2 className="text-base font-bold mb-6">Add set:</h2>

      <form onSubmit={saveToLocalStorage} className="flex gap-x-4">
        <TextInput type="number" name="reps" label="Reps" />
        <TextInput type="number" name="weight" label="Weight" />

        <button className="w-[42px] h-[35px] text-white bg-fill-primary leading-[35px] text-2xl rounded-lg ml-auto tablet:ml-4 flex-shrink-0">
          +
        </button>
      </form>
    </div>
  );
}
