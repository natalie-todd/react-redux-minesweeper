import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

export default function Square() {
  return (
    <div>
      <ButtonGroup size="small" aria-label="small outlined button group">
        <Button size="small" className="Square"></Button>
      </ButtonGroup>
    </div>
  );
}
