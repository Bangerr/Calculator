import React from "react";

function onClick(props){
    props.handleClick();
}

function Buttons(props){
    console.log(props.className);
    return (<button className={props.className} id={props.sign} onClick={onClick}>{props.sign}</button>)
}

export default Buttons;