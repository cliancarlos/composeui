import React from 'react';

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  all?: string;
  // alignment, spacing, and padding
  flex?: string;
  align?: string;
  justify?: string;
  place?: string; // is justify and align some time
  gap?: string;
  margin?: string;
  padding?: string;
  // sizing
  size?: string;
  // typography
  family?: string;
  fontStyles?: string; // italitc, smoothing, //underline, //transform, //whitespace
  weight?: string;
  fontNumeric?: string;
  letterSpacing?: string;
  line?: string; // clamp, height
  textAlign?: string; // + vertical align
  textDecoration?: string;
  textOverflow?: string; // overflow, word break, hipens
  textIndent?: string;
  color?: string;
  pseudo?: string; // Content (::after ::before)
  // background
  bg?: string;
  //border
  border?: string;
  // effects
  effects?: string;
  // filters
  filters?: string;
  // transitions, animation, transform
  transitions?: string;
  animation?: string;
  transform?: string;
  //interactivy
  scroll?: string;
  pointer?: string; // cursor, caret, resize, touch, user select, will change
}

export const Box: React.FC<BoxProps> = ({}) => {
  return <div>New</div>;
};
