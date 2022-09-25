import React, { useState, useRef, useEffect } from "react";
import styles from './UnlockScreen.css';
import { FaArrowUp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import SlideIn from "./SlideIn";


const useCurrentCallback = (callback) => {
    const reference = React.useRef();
    reference.current = callback;
    return (...args) => {
      return reference.current?.(...args);
    };
  };
  


const UnlockScreen = () => {

    const [time, setTime] = useState();
    const [dateCode, setDateCode] = useState();

    // Update the document title using the browser API
    
    const currentCallback = useCurrentCallback(() => {
        const date = new Date();
        setTime(date.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
        }))
        setDateCode(date.toLocaleDateString("en-US", 
        { weekday: 'long', month: 'long', day: 'numeric' }
        ))
      });

    useEffect(() => {

        const handle = setInterval(currentCallback, 100);
        return () => clearInterval(handle);

    });

    const [startAnimation, setStartAnimation] = useState(false);

    function unlock (){
        setStartAnimation(true);
    }

    return (
    
    <div className = "body" onClick={unlock}>
    <SlideIn startAnimation={startAnimation}>
      <div className = "header">
        <div className = "date">
            {dateCode}
        </div>
        <div className = "clock">
            {time}
        </div> 
      </div>
      
      <div className="footer">
        <div className="swipeBar">

        </div>
      </div>
      </SlideIn>
    </div>
    
    );
  };


  export default UnlockScreen
 