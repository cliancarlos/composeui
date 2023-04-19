const isString = (value: unknown): value is string => typeof value === 'string';

export const extractTailwindProps = (props: object): string => {
  const tailwindProps = Object.entries(props)
    .filter(([, value]) => isString(value))
    .map(([key, value]) => value as string);

  const classNames = tailwindProps.join(' ').trim();

  return classNames;
};
