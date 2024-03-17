'use client';

import { saveExerciseSet } from '../lib/storage';
import TextInput from './text_input';

const REPS_INPUT_NAME = 'reps';
const WEIGHT_INPUT_NAME = 'weight';

export default function AddExerciseSet() {
  const saveToLocalStorage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const reps = Number(e.currentTarget[REPS_INPUT_NAME].value);
    const weight = Number(e.currentTarget[WEIGHT_INPUT_NAME].value);

    if (!reps || !weight) return;

    saveExerciseSet({ reps, weight });
  };

  return (
    <div className="mb-8">
      <h3 className="text-base font-bold mb-6">Add set:</h3>

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
