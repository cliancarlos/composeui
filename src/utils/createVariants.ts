import React from 'react';

interface VariantComponentProps<ComponentProps, Variant> {
  component: React.ComponentType<ComponentProps>;
  propName: keyof ComponentProps;
  variants: ReadonlyArray<Variant>;
}

function createVariantComponent<ComponentProps, Variant>(
  variant: Variant,
  propName: keyof ComponentProps,
  Component: React.ComponentType<ComponentProps>,
): React.ComponentType<ComponentProps> {
  return (props: ComponentProps) => {
    const newProps = { ...props, [propName]: variant };
    return React.createElement(Component, newProps);
  };
}

export function createVariants<Props extends Record<string, any>, Variant>(
  options: VariantComponentProps<Props, Variant>,
): React.ComponentType<Props> & {
  [key: string]: React.ComponentType<Props>;
} {
  const { component, propName, variants } = options;
  const ComponentWithVariants = component as
    | React.ComponentType<Props>
    | {
        [key: string]: React.ComponentType<Props>;
      };

  variants.forEach((variant) => {
    const variantName = variant as unknown as string;
    ComponentWithVariants[variantName] = createVariantComponent(variant, propName, component);
  });

  return ComponentWithVariants;
}
