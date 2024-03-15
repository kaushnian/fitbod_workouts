'use client';

import TextInput from './text_input';

const REPS_INPUT_NAME = 'reps';
const WEIGHT_INPUT_NAME = 'weight';

type ExerciseSet = {
  [key: string]: {
    reps: number;
    weight: number;
  }[];
};

export default function AddSetForm() {
  const getItems = () => {
    return JSON.parse(localStorage.getItem('items') || '{}');
  };

  const addItem = (item: ExerciseSet) => {
    localStorage.setItem('items', JSON.stringify(item));
  };

  const addToLocalStorage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const date = new Date().toLocaleDateString();
    const items = getItems();

    // TODO: Refactor this
    addItem({
      ...items,
      [date]: [
        ...(items[date] || []),
        {
          reps: Number(e.currentTarget[REPS_INPUT_NAME].value) || 0,
          weight: Number(e.currentTarget[WEIGHT_INPUT_NAME].value) || 0,
        },
      ],
    });
  };

  return (
    <div>
      <h3 className="text-base font-bold mb-6">Add set:</h3>

      <form onSubmit={addToLocalStorage} className="flex gap-x-4">
        <TextInput type="number" name={REPS_INPUT_NAME} label="Reps" />

        <TextInput type="number" name={WEIGHT_INPUT_NAME} label="Weight" />

        <button className="w-[42px] h-[35px] text-white bg-fill-primary leading-[35px] rounded-lg ml-4">
          +
        </button>
      </form>
    </div>
  );
}
