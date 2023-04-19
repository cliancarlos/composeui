type TailwindClass = string;

export interface tailwindClasses {
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
