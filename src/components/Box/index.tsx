import React from 'react';

import { tailwindClasses } from '../tailwindClasses';
import { extractTailwindProps } from '../../utils/extractTailwindProps';

interface BoxProps extends React.HTMLAttributes<HTMLDivElement>, tailwindClasses {
  // outras props específicas para o componente Box
}

export const Box: React.FC<BoxProps> & {
  Center: React.FC<BoxProps>;
  Around: React.FC<BoxProps>;
  Evenly: React.FC<BoxProps>;
  Stack: React.FC<BoxProps>;
  Row: React.FC<BoxProps>;
  Wrap: React.FC<BoxProps>;
  NoWrap: React.FC<BoxProps>;
  Grow: React.FC<BoxProps>;
  Shrink: React.FC<BoxProps>;
} = (props) => {
  const tailwindClasses = extractTailwindProps(props);
  const { children, ...restProps } = props;
  console.log(tailwindClasses);

  return <div className={`flex flex-wrap flex-row ${tailwindClasses}`}>{children}</div>;
};

Box.Center = (props) => {
  const tailwindClasses = extractTailwindProps(props);

  const { children, ...restProps } = props;

  return <Box all={`justify-center items-center ${tailwindClasses}`}>{children}</Box>;
};

Box.Around = (props) => {
  const tailwindClasses = extractTailwindProps(props);
  const { children, ...restProps } = props;

  return <Box all={`justify-around items-center ${tailwindClasses}`}>{children}</Box>;
};

Box.Evenly = (props) => {
  const tailwindClasses = extractTailwindProps(props);
  const { children, ...restProps } = props;

  return <Box all={`justify-evenly items-center ${tailwindClasses}`}>{children}</Box>;
};

Box.Stack = (props) => {
  const tailwindClasses = extractTailwindProps(props);
  const { children, ...restProps } = props;

  return <Box all={`flex-col ${tailwindClasses}`}>{children}</Box>;
};

Box.NoWrap = (props) => {
  const tailwindClasses = extractTailwindProps(props);
  const { children, ...restProps } = props;

  return <Box all={`flex-nowrap ${tailwindClasses}`}>{children}</Box>;
};

Box.Wrap = (props) => {
  const tailwindClasses = extractTailwindProps(props);
  const { children, ...restProps } = props;

  return <Box all={`flex-wrap ${tailwindClasses}`}>{children}</Box>;
};

Box.Grow = (props) => {
  const tailwindClasses = extractTailwindProps(props);
  const { children, ...restProps } = props;

  return <Box all={`flex-grow ${tailwindClasses}`}>{children}</Box>;
};

Box.Shrink = (props) => {
  const tailwindClasses = extractTailwindProps(props);
  const { children, ...restProps } = props;

  return <Box all={`flex-shrink ${tailwindClasses}`}>{children}</Box>;
};

Box.Between = (props) => {
  const tailwindClasses = extractTailwindProps(props);
  const { children, ...restProps } = props;

  return <Box all={`justify-between items-center ${tailwindClasses}`}>{children}</Box>;
};
