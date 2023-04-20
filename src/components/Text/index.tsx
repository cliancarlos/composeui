import React from 'react';
import { createBaseComponent } from '../../utils/createBaseComponent';

const textVariants = [
  { variant: 'h1', classes: 'text-5xl font-bold', element: 'h1' },
  { variant: 'h2', classes: 'text-4xl font-medium', element: 'h2' },
  { variant: 'h3', classes: 'text-3xl italic', element: 'h3' },
  { variant: 'h4', classes: 'text-2xl text-sm', element: 'h4' },
  { variant: 'h5', classes: 'text-xl font-bold', element: 'h5' },
  { variant: 'h6', classes: 'text-lg font-medium text-sm', element: 'h6' },
  { variant: 'label', classes: 'text-base text-blue-600', element: 'label' },
  { variant: 'default', classes: 'text-base text-blue-600', element: 'p' },
];

const Text = createBaseComponent(textVariants);

export default Text;
