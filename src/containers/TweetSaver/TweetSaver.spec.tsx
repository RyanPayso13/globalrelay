import React from 'react';
import { render, screen } from '@testing-library/react';
import TweetSaver from './TweetSaver';

describe('<TweetSaver />', () => {
  test('should render and not crash', () => {
    render(<TweetSaver />);
    expect(screen.getByText(/Tweet Saver/i)).toBeInTheDocument();
  });
});