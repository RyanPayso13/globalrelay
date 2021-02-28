import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchControl from './SearchControl';

describe('<SearchControl />', () => {

    const mock = jest.fn();

  test('should render and not crash', () => {
    render(<SearchControl onSearchSubmit={mock} />);
    expect(screen.getByPlaceholderText(/Search Twitter/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Submit search term/i)).toBeInTheDocument();
  });

  test('should emit the search term', () => {
    render(<SearchControl onSearchSubmit={mock} />);

    fireEvent.change(screen.getByPlaceholderText(/Search Twitter/i), { target: { value: 'a search term' } });
    fireEvent.click(screen.getByLabelText(/Submit search term/i));

    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith('a search term');
  });

});