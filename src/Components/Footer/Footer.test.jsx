import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from '.';

describe('Footer', () => {
  it('renders Footer as expected', () => {
    render(<Footer />);

    let footer = screen.getByTestId('footer');
    expect(footer).toHaveTextContent('Ike Steoger 2023');
    
  })
})