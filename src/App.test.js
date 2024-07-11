import { render, screen } from '@testing-library/react';
import Loader from './components/Loader';

test('renders learn react link', () => {
  render(<Loader />);
  const loader = screen.getAllByTestId('loader')[0];
  expect(loader).toBeInTheDocument(loader);
});
