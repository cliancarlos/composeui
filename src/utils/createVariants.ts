import React from 'react';

import { extractTailwindProps } from './extractTailwindProps';

export interface VariantConfig {
  variant: string;
  classes: string;
  element: keyof JSX.IntrinsicElements;
  props?: React.HTMLAttributes<HTMLElement>;
}

var i = 0;

type Variants = {
  [key: string]: React.FC<React.HTMLAttributes<HTMLElement>>;
};

export function createVariants(config: VariantConfig[]): Variants {
  const components: Variants = {};

  config.forEach(({ variant, classes, element, props }) => {
    const Component: React.FC<React.HTMLAttributes<HTMLElement>> = ({ children, className, ...props }) => {
      const twClassesInProps = extractTailwindProps(props);
      const combinedClassName = `${twClassesInProps} ${className || ''} ${classes}  `.trim();

      return React.createElement(element, { className: combinedClassName, ...props }, children);
    };

    components[variant] = Component;
  });

  return components;
}
