import React from 'react';

export interface TableViewItemProps {
  str: string;
}

export const VowelTableViewItem: React.FC<TableViewItemProps> = (props) => {
  return <div>is vowel! {props.str}</div>;
};

export const PTableViewItem: React.FC = () => {
  return <div>is p!</div>;
};

export const DefaultTableViewItem: React.FC<TableViewItemProps> = (props) => {
  return <div>{props.str}</div>;
};

// in a real app these above components would be in individual files

const isVowel = (str: string): boolean => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return vowels.includes(str);
};

export const TableViewItem: React.FC<TableViewItemProps> = (props) => {
  if (isVowel(props.str)) {
    return <VowelTableViewItem str={props.str} />;
  }

  if ('p' === props.str.toLocaleLowerCase()) {
    <PTableViewItem />;
  }

  return <DefaultTableViewItem str={props.str} />;
};
