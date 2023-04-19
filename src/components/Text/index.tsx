import React from 'react';

import { tailwindClasses } from '../tailwindClasses';

interface TextProps extends React.HTMLAttributes<HTMLDivElement>, tailwindClasses {}

export default function Text(props: TextProps) {
  return <span>Hello World</span>;
}

Text.Bla = (props: TextProps) => {
  return <span>Bla</span>;
};
