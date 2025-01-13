import React from 'react';

export default function Container<El extends keyof JSX.IntrinsicElements>({
  children,
  element,
  className,
  ...rest
}: {
  element: El;
} & React.ComponentProps<El>) {
  const Comp = element as string;

  return (
    <Comp className={`px-2 py-4 ${className}`} {...rest}>
      {children}
    </Comp>
  );
}
