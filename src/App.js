import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Square from './Square';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { tsConstructorType } from '@babel/types';
const { useCallback, PureComponent } = React;


const App = () => {

  const createGrid = useCallback(() => {
    const grid = Array.from({ length: 10 }, (_, i) =>
      Array.from({ length: 10 }, (_, j) =>
        [i, j].join(',')))

    return grid.map(row => row.map(xy => <Square key={xy} />))
  },
    [],
  );

  return (
    <div className="App">
      <Grid item xs={3} className="Square-Container">
        {createGrid()}
      </Grid>
    </div>
  );
}

export default App;
