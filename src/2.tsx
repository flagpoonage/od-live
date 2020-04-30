import * as React from 'react';

function useExampleState <T, U>(stateOne: T, stateTwo: U): [T, U, (a: T, b: U) => void] {
  const [sOne, updateStateOne] = React.useState<T>(stateOne);
  const [sTwo, updateStateTwo] = React.useState<U>(stateTwo);

  const update = (a: T, b: U) => {
    updateStateOne(a);
    updateStateTwo(b);
  }

  return [sOne, sTwo, update];
}

export function Example () {
  
  const [stateOne, stateTwo, update] = useExampleState(1, 2);

  const updateCallback = React.useCallback(() => {
    update(stateOne + 1, stateTwo + 1);
  }, [update]);

  return (
    <div>
      <button onClick={updateCallback}>
        {stateOne} {stateTwo}
      </button>
    </div>
  );
}