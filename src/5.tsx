import * as React from 'react';

const list = [1,2,3,4,5];

export function Parent () {

  return (
    <Multiplier input={list} multiplyBy={5}>
      {(outputValue: number) => (
        <span>
          {outputValue}
        </span>
      )}
    </Multiplier>
  );

}