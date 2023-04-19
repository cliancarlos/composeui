import React from 'react';

type ComponentWithVariants<T, P> = React.FC<P> & {
  [key: string]: React.FC<P>;
};

interface CreateVariantsProps<T, P> {
  component: React.FC<P>;
  propName: keyof P;
  variants: ReadonlyArray<T>;
}

export function createVariants<T, P extends Record<string, any>>({
  component: Component,
  propName,
  variants,
}: CreateVariantsProps<T, P>): ComponentWithVariants<T, P> {
  const ComponentWithVariants = Component as ComponentWithVariants<T, P>;

  const createVariant = (variantValue: T) => {
    return (props: P) => <Component {...{ [propName]: variantValue }} {...props} />;
  };

  variants.forEach((variantValue) => {
    ComponentWithVariants[variantValue as any] = createVariant(variantValue);
  });

  return ComponentWithVariants;
}
