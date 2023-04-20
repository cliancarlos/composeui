import React from 'react';
import { createVariants, VariantConfig } from './createVariants';

type BaseComponentProps = React.HTMLAttributes<HTMLElement> & { variant?: string };

export function createBaseComponent(variantsConfig: VariantConfig[]) {
  const VariantsComponents = createVariants(variantsConfig);

  const BaseComponent: React.FC<BaseComponentProps> & typeof VariantsComponents = ({ children, variant, ...props }) => {
    const Component = variant ? VariantsComponents[variant] : VariantsComponents.default;

    return React.createElement(Component, props, children);
  };

  Object.assign(BaseComponent, VariantsComponents);

  return BaseComponent;
}
