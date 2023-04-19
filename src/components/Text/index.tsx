// src/components/Typography/Text.js
import React from 'react';
import { tailwindClasses } from '../tailwindClasses';
import { createVariants } from '../../utils/createVariants';
import { extractTailwindProps } from '../../utils/extractTailwindProps';

interface BaseTextProps extends React.HTMLAttributes<HTMLDivElement>, tailwindClasses {
  type?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
}

const BaseText: React.FC<BaseTextProps> = ({ type = 'span', children, ...props }) => {
  const tailwindClasses = extractTailwindProps(props);
  const Component = type;
  return (
    <Component className={`${tailwindClasses}`} {...props}>
      {children}
    </Component>
  );
};

const headingTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'label'] as const;

const Text = createVariants<typeof headingTags[number], BaseTextProps>({
  component: BaseText,
  propName: 'type',
  variants: headingTags,
});

export default Text;
