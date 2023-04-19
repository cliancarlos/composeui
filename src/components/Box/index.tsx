import React from 'react';

type TailwindClass = string;

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  all?: TailwindClass;
  // alignment, spacing, and padding
  flex?: TailwindClass;
  align?: TailwindClass;
  justify?: TailwindClass;
  place?: TailwindClass; // is justify and align some time
  gap?: TailwindClass;
  margin?: TailwindClass;
  padding?: TailwindClass;
  // sizing
  size?: TailwindClass;
  // typography
  family?: TailwindClass;
  fontStyles?: TailwindClass; // italitc, smoothing, //underline, //transform, //whitespace
  weight?: TailwindClass;
  fontNumeric?: TailwindClass;
  letterSpacing?: TailwindClass;
  line?: TailwindClass; // clamp, height
  textAlign?: TailwindClass; // + vertical align
  textDecoration?: TailwindClass;
  textOverflow?: TailwindClass; // overflow, word break, hipens
  textIndent?: TailwindClass;
  color?: TailwindClass;
  pseudo?: TailwindClass; // Content (::after ::before)
  // background
  bg?: TailwindClass;
  //border
  border?: TailwindClass;
  // effects
  effects?: TailwindClass;
  // filters
  filters?: TailwindClass;
  // transitions, animation, transform
  transitions?: TailwindClass;
  animation?: TailwindClass;
  transform?: TailwindClass;
  //interactivy
  scroll?: TailwindClass;
  pointer?: TailwindClass; // cursor, caret, resize, touch, user select, will change
}

const extractTailwindClasses = <T extends object>(props: T): string => {
  const tailwindKeys = Object.keys(props).filter((key) =>
    (props[key as keyof T] as unknown as TailwindClass) ? typeof props[key as keyof T] === 'string' : false,
  ) as Array<TailwindPropsOnly<T>>;

  const classes = tailwindKeys
    .map((key) => {
      const value = props[key];
      return typeof value === 'string' ? value : '';
    })
    .join(' ')
    .trim();

  return classes;
};

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
  const tailwindClasses = extractTailwindClasses(props);
  const { children, ...restProps } = props;
  console.log(tailwindClasses);

  return <div className={`flex flex-wrap flex-row ${tailwindClasses}`}>{children}</div>;
};

Box.Center = (props) => {
  const tailwindClasses = extractTailwindClasses(props);
  const { children, ...restProps } = props;

  return <Box all={`justify-center items-center ${tailwindClasses}`}>{children}</Box>;
};

Box.Around = (props) => {
  const tailwindClasses = extractTailwindClasses(props);
  const { children, ...restProps } = props;

  return <Box all={`justify-around items-center ${tailwindClasses}`}>{children}</Box>;
};

Box.Evenly = (props) => {
  const tailwindClasses = extractTailwindClasses(props);
  const { children, ...restProps } = props;

  return <Box all={`justify-evenly items-center ${tailwindClasses}`}>{children}</Box>;
};

Box.Stack = (props) => {
  const tailwindClasses = extractTailwindClasses(props);
  const { children, ...restProps } = props;

  return <Box all={`flex-col ${tailwindClasses}`}>{children}</Box>;
};

Box.NoWrap = (props) => {
  const tailwindClasses = extractTailwindClasses(props);
  const { children, ...restProps } = props;

  return <Box all={`flex-nowrap ${tailwindClasses}`}>{children}</Box>;
};

Box.Wrap = (props) => {
  const tailwindClasses = extractTailwindClasses(props);
  const { children, ...restProps } = props;

  return <Box all={`flex-wrap ${tailwindClasses}`}>{children}</Box>;
};

Box.Grow = (props) => {
  const tailwindClasses = extractTailwindClasses(props);
  const { children, ...restProps } = props;

  return <Box all={`flex-grow ${tailwindClasses}`}>{children}</Box>;
};

Box.Shrink = (props) => {
  const tailwindClasses = extractTailwindClasses(props);
  const { children, ...restProps } = props;

  return <Box all={`flex-shrink ${tailwindClasses}`}>{children}</Box>;
};

Box.Between = (props) => {
  const tailwindClasses = extractTailwindClasses(props);
  const { children, ...restProps } = props;

  return <Box all={`justify-between items-center ${tailwindClasses}`}>{children}</Box>;
};
