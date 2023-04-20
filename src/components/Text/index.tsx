import React from 'react';
import { createBaseComponent } from '../../utils/createBaseComponent';

const textVariants = [
  { variant: 'h1', classes: '', element: 'h1' },
  { variant: 'h2', classes: '', element: 'h2' },
  { variant: 'h3', classes: '', element: 'h3' },
  { variant: 'h4', classes: '', element: 'h4' },
  { variant: 'h5', classes: '', element: 'h5' },
  { variant: 'h6', classes: '', element: 'h6' },
  { variant: 'label', classes: '', element: 'label' },
  { variant: 'default', classes: '', element: 'span' },
];

const Text = createBaseComponent(textVariants);

export default Text;
