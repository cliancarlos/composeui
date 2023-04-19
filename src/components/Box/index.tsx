import React from 'react';

import { tailwindClasses } from '../tailwindClasses';
import { extractTailwindProps } from '../../utils/extractTailwindProps';

interface BoxProps extends React.HTMLAttributes<HTMLDivElement>, tailwindClasses {
  children?: React.ReactNode;
}

export default function Box(props: BoxProps) {
  const tailwindClasses = extractTailwindProps(props);
  const { children, ...restProps } = props;

  return (
    <div className={`flex flex-wrap flex-row ${tailwindClasses}`} {...restProps}>
      {children}
    </div>
  );
}
Box.Center = (props: BoxProps) => {
  const tailwindClasses = extractTailwindProps(props);

  const { children, ...restProps } = props;

  return <Box all={`justify-center items-center ${tailwindClasses}`}>{children}</Box>;
};

Box.Around = (props: BoxProps) => {
  const tailwindClasses = extractTailwindProps(props);
  const { children, ...restProps } = props;

  return <Box all={`justify-around items-center ${tailwindClasses}`}>{children}</Box>;
};

Box.Evenly = (props: BoxProps) => {
  const tailwindClasses = extractTailwindProps(props);
  const { children, ...restProps } = props;

  return <Box all={`justify-evenly items-center ${tailwindClasses}`}>{children}</Box>;
};

Box.Stack = (props: BoxProps) => {
  const tailwindClasses = extractTailwindProps(props);
  const { children, ...restProps } = props;

  return <Box all={`flex-col ${tailwindClasses}`}>{children}</Box>;
};

Box.NoWrap = (props: BoxProps) => {
  const tailwindClasses = extractTailwindProps(props);
  const { children, ...restProps } = props;

  return <Box all={`flex-nowrap ${tailwindClasses}`}>{children}</Box>;
};

Box.Wrap = (props: BoxProps) => {
  const tailwindClasses = extractTailwindProps(props);
  const { children, ...restProps } = props;

  return <Box all={`flex-wrap ${tailwindClasses}`}>{children}</Box>;
};

Box.Grow = (props: BoxProps) => {
  const tailwindClasses = extractTailwindProps(props);
  const { children, ...restProps } = props;

  return <Box all={`flex-grow ${tailwindClasses}`}>{children}</Box>;
};

Box.Shrink = (props: BoxProps) => {
  const tailwindClasses = extractTailwindProps(props);
  const { children, ...restProps } = props;

  return <Box all={`flex-shrink ${tailwindClasses}`}>{children}</Box>;
};

Box.Between = (props: BoxProps) => {
  const tailwindClasses = extractTailwindProps(props);
  const { children, ...restProps } = props;

  return <Box all={`justify-between items-center ${tailwindClasses}`}>{children}</Box>;
};
