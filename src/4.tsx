import * as React from 'react';
import { expensiveOperation } from './ops';

type ChildProps = {
  value: number
}

export function Parent () {

  const [stateValue, setState] = React.useState(0);

  return (
    <div>
      <Child value={stateValue} />
      <button onClick={() => setState(stateValue + 1)}>
        {'Increment'}
      </button>
    </div>
  );
}

export function Child ({ value }: ChildProps) {

  const outputValue = expensiveOperation(value);

  return (
    <div>
      {outputValue}
    </div>
  )
}
