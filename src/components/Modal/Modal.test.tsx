import { render } from '@testing-library/react';
import Modal from './Modal';

describe('DataList', () => {
  it('should render successfully with title', () => {
    const { getByText } = render(
      <Modal
        title="Test Modal"
        content={<p>This is a test modal content</p>}
        footer={<p>This is a test modal footer</p>}
        handleClose={() => {}}
        open={true}
      />
    );

    const titleElement = getByText('Test Modal');
    expect(titleElement).toBeInTheDocument();
  });
});
