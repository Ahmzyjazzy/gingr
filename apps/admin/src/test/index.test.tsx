import { render, screen } from '@testing-library/react';
import Sample from './Sample';

describe('Test App', () => {
  it('renders the heading', () => {
    render(<Sample />);
    expect(screen.getByRole('heading', { name: /welcome/i })).toBeInTheDocument();
  });
});
