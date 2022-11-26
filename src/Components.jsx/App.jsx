import React, { useState } from 'react';
import Calculator from './Calculators';


//import {add, subtract, multiply, divide} from './Functionality';

function App(){
  

  function handleClick(){
    console.log("click");
  }

    return (
        <Calculator />
        );
}

export default App;