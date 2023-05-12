import { render } from '@testing-library/react';
import Loading from './Loading';

describe('Loading', () => {
  it('should render correctly', () => {
    const { getByText } = render(<Loading />);

    expect(getByText('Chargement...')).toBeInTheDocument();
  });
});
