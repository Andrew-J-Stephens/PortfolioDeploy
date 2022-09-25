import React from 'react';
import styles from './RadioButtonMini.css';
import { useState } from 'react';


export default function RadioButtonMini({value, onChange}) {
    const [Current, setCurrent] = useState(value[0].id);
    function onClick(v) {
        setCurrent(v.id);
        onChange(v.id);
    }
    return <div className = "container">
        {value.map((v,i)=>{
            return <div key = {i} onClick={() => onClick(v)} className = {"btn2"+" "+(Current===v.id?"active" : "inactive")}> {v.value} </div>;
        })}
    </div>;
}