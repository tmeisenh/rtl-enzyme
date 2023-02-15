import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { TableView, TableViewProps } from './TableView';

jest.mock('./TableView');
const MockTableView = TableView as jest.MockedFunction<typeof TableView>;
MockTableView.mockImplementation(() => null);

const getTableViewProps = (): TableViewProps => {
  const props = MockTableView.mock.calls[0][0];
  // types get lost this deep in jest
  return props;
};

describe('App', () => {
  it('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('renders a tableview correctly', () => {
    render(<App />);
    expect(getTableViewProps().items).toEqual(['a', 'b', 'c']);
  });
});
