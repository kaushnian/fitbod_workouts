'use client';

import { saveExerciseSet } from '../lib/storage';
import TextInput from './text_input';

const REPS_INPUT_NAME = 'reps';
const WEIGHT_INPUT_NAME = 'weight';

export default function AddExerciseSet() {
  const saveToLocalStorage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const reps = Number(form[REPS_INPUT_NAME].value);
    const weight = Number(form[WEIGHT_INPUT_NAME].value);

    if (!reps || !weight) return;

    saveExerciseSet({ reps, weight });
    form.reset();
  };

  return (
    <div className="mb-8">
      <h2 className="text-base font-bold mb-6">Add set:</h2>

      <form onSubmit={saveToLocalStorage} className="flex gap-x-4">
        <TextInput type="number" name={REPS_INPUT_NAME} label="Reps" />

        <TextInput type="number" name={WEIGHT_INPUT_NAME} label="Weight" />

        <button className="w-[42px] h-[35px] text-white bg-fill-primary leading-[35px] text-2xl rounded-lg ml-4">
          +
        </button>
      </form>
    </div>
  );
}
