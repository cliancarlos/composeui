import React from 'react';
import { createBaseComponent } from '../../utils/createBaseComponent';

const boxVariants = [
  { variant: 'Center', classes: 'flex justify-center items-center', element: 'div' },
  { variant: 'Around', classes: 'flex justify-around items-center', element: 'div' },
  { variant: 'Evenly', classes: 'flex justify-evenly items-center', element: 'div' },
  { variant: 'Stack', classes: 'flex flex-col', element: 'div' },
  { variant: 'NoWrap', classes: 'flex flex-nowrap', element: 'div' },
  { variant: 'Grow', classes: 'flex flex-grow', element: 'div' },
  { variant: 'Shrink', classes: 'flex flex-shrink', element: 'div' },
  { variant: 'Between', classes: 'flex justify-between items-center', element: 'div' },
  { variant: 'default', classes: 'flex flex-wrap flex-row', element: 'div' },
];

const Box = createBaseComponent(boxVariants);

export default Box;
