import * as React from 'react';

enum PropValue {
  A = 'a',
  B = 'b',
  C = 'c' 
};

type ExampleProps = {
  value: PropValue;
}

export function Example ({ value }: ExampleProps) {

  const previousValue = value;

  return (
    <div>
      {`Transitioned from ${previousValue} to ${value}`}
    </div>
  );
}