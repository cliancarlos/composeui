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

type TailwindPropsOnly<T> = {
  [K in keyof T]: T[K] extends TailwindClass ? K : never;
}[keyof T];

const extractTailwindClasses = <T extends object>(props: T): string => {
  const tailwindKeys = Object.keys(props).filter((key) => props[key as keyof T] as unknown as TailwindClass) as Array<
    TailwindPropsOnly<T>
  >;

  const classes = tailwindKeys.map((key) => props[key]).join(' ');
  return classes;
};

export const Box: React.FC<BoxProps> = (props) => {
  const tailwindClasses = extractTailwindClasses(props);
  const { children, ...restProps } = props;

  return (
    <div className={`${tailwindClasses}`} {...restProps}>
      {children}
    </div>
  );
};
