import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

test('renders <Header />', () => {
  const { getByText } = render(<App />);
  const headerElem = getByText(/Welcome to Flask/i);
  expect(headerElem).toBeInTheDocument();
});
