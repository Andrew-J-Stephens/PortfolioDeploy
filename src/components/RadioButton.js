import React from 'react';
import styles from './RadioButton.css';
import { useState } from 'react';


export default function RadioButton({value, onChange}) {
    const [Current, setCurrent] = useState(value[2].id);
    function onClick(v) {
        setCurrent(v.id);
        onChange(v.id);
    }
    return <div className = "container">
        {value.map((v,i)=>{
            return <div key = {i} onClick={() => onClick(v)} className = {"btn"+" "+(Current===v.id?"active" : "inactive")}> {v.value} </div>;
        })}
    </div>;
}