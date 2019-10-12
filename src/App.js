import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Square from './Square';
import { tsConstructorType } from '@babel/types';
const { useCallback, PureComponent } = React;
const App = () => {

  const createGrid = useCallback(() => {
    const grid = Array.from({ length: 10 },(_, i) => 
    Array.from({ length: 10 },(_, j) => 
    [i, j].join(','),))
    return grid.map(row => row.map(xy => <Square key={xy}/>))
  },
    [],
  );

  return (
    <div>
      {createGrid()}
    </div>
  );
}

export default App;
