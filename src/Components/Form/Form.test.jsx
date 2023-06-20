import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Form from '.';

describe('form', () => {
  it('renders form as expected', () => {
    render(<Form />);

    let form = screen.getByTestId('form-span');
    expect(form).toHaveTextContent('URL');
    
  })
})