import React, { useState } from 'react';
import buttons from '../calcButtons';
import Buttons from './Buttons';

function click(props){
    props.handleClick();
}

function Calculator(props){

    const [name, setName] = useState("");
    const [calc, setCals] = useState([]);

    console.log('');
    return (<div className="button">
                <p className='miniDisplay'>{}</p>
                <h1 className='display'>{name}</h1>
                {buttons.map((value)=>{
                console.log(value.name);
                return (
                    <Buttons 
                    className={value.name}
                    sign={value.sign}
                    onClick={click}
                    />
                    );
                })}
            </div>);
}

export default Calculator;