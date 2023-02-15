import React from 'react';
import { render } from '@testing-library/react';
import { TableViewItem, TableViewItemProps } from './TableViewItem';
import { TableView } from './TableView';

jest.mock('./TableViewItem');
const MockTableViewItem = TableViewItem as jest.MockedFunction<
  typeof TableViewItem
>;
MockTableViewItem.mockImplementation(() => null);

const getTableViewItemProps = (index: number): TableViewItemProps => {
  if (index > MockTableViewItem.mock.calls.length) {
    throw new Error('out of bounds');
  }
  const props = MockTableViewItem.mock.calls[index][0];
  // types get lost this deep in jest
  return props;
};

describe('App', () => {
  it('renders a tableviewitems correctly', () => {
    render(<TableView items={['a', 'b']} />);

    expect(MockTableViewItem).toHaveBeenCalledTimes(2);
    expect(getTableViewItemProps(0).str).toEqual('a');
    expect(getTableViewItemProps(1).str).toEqual('b');
  });
});
