import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import AddExerciseSet from './add_exercise_set';
import { saveExerciseSet } from '../lib/storage';

jest.mock('../lib/storage', () => ({
  saveExerciseSet: jest.fn(),
}));

const setup = () => {
  const utils = render(<AddExerciseSet exerciseId="test-id" />);
  const repsInput = screen.getByLabelText<HTMLInputElement>('Reps');
  const weightInput = screen.getByLabelText<HTMLInputElement>('Weight');
  const addButton = screen.getByRole('button');
  return {
    repsInput,
    weightInput,
    addButton,
    ...utils,
  };
};

describe('AddExerciseSet Component', () => {
  describe('Add button click', () => {
    it('saves input values into the storage', () => {
      const { repsInput, weightInput, addButton } = setup();

      fireEvent.change(repsInput, { target: { value: '10' } });
      fireEvent.change(weightInput, { target: { value: '15' } });
      addButton.click();

      expect(saveExerciseSet).toHaveBeenCalledWith('test-id', { reps: 10, weight: 15 });
    });

    it('does not save values into the storage if the inputs are empty', () => {
      const { addButton } = setup();

      addButton.click();

      expect(saveExerciseSet).not.toHaveBeenCalled();
    });

    it('resets the form', () => {
      const { repsInput, weightInput, addButton } = setup();

      fireEvent.change(repsInput, { target: { value: '10' } });
      fireEvent.change(weightInput, { target: { value: '15' } });

      expect(repsInput.value).toEqual('10');
      expect(weightInput.value).toEqual('15');

      addButton.click();

      expect(repsInput.value).toEqual('');
      expect(weightInput.value).toEqual('');
    });
  });
});
