import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ExerciseSetsByDate } from '../lib/storage';
import Performances from './performances';
import { useExerciseSetsByDate } from '../lib/hooks';

jest.mock('../lib/hooks', () => ({
  useExerciseSetsByDate: jest.fn(),
}));

const setup = () => {
  render(<Performances exerciseId="test-id" />);
  const dates = screen.queryAllByTestId('performance-date');
  const performances = screen.queryByTestId('performances');
  return { dates, performances };
};

describe('Performances Component', () => {
  it('renders performances when storage has data', () => {
    mockUseExerciseSetsByDate({ '01/01/2024': [{ reps: 10, weight: 24 }] });
    const { performances } = setup();

    expect(performances).toBeInTheDocument();
  });

  it('does not render performances when storage is empty', () => {
    mockUseExerciseSetsByDate({});
    const { performances } = setup();

    expect(performances).not.toBeInTheDocument();
  });

  describe('Sorts the performances by date', () => {
    it('when Date1 is greater than Date2', () => {
      mockUseExerciseSetsByDate({
        '01/01/2024': [{ reps: 10, weight: 24 }],
        '02/02/2022': [{ reps: 7, weight: 22 }],
      });
      const { dates } = setup();

      expect(dates[0]).toHaveTextContent('02/02/2022');
      expect(dates[1]).toHaveTextContent('01/01/2024');
    });

    it('when Date1 is less than Date2', () => {
      mockUseExerciseSetsByDate({
        '02/02/2022': [{ reps: 7, weight: 22 }],
        '01/01/2024': [{ reps: 10, weight: 24 }],
      });
      const { dates } = setup();

      expect(dates[0]).toHaveTextContent('02/02/2022');
      expect(dates[1]).toHaveTextContent('01/01/2024');
    });
  });
});

function mockUseExerciseSetsByDate(data: ExerciseSetsByDate) {
  (useExerciseSetsByDate as jest.Mock).mockImplementation(() => data);
}
