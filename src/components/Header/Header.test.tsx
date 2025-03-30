import { render } from '@testing-library/react';
import { Header } from './Header';

describe('DataList', () => {
  it('should render successfully with title', () => {
    const { getByText } = render(<Header title="Test Header" />);

    const titleElement = getByText('Test Header');
    expect(titleElement).toBeInTheDocument();
  });
});
