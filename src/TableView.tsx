import React from 'react';
import { TableViewItem } from './TableViewItem';

export interface TableViewProps {
  items: string[];
}

export const TableView: React.FC<TableViewProps> = (props) => {
  if (props.items.length === 0) {
    return <div>no items</div>;
  }
  return (
    <div>
      {props.items.map((x, i) => (
        <TableViewItem key={x + i} str={x} />
      ))}
    </div>
  );
};
