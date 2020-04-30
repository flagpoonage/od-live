import * as React from 'react';

type ExampleProps = {
  onResize: () => void;
}

export function Example ({ onResize, children }: React.PropsWithChildren<ExampleProps>) {

  React.useEffect(() => {

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    }

  });

  return (
    <div>
      {children}
    </div>
  );
}