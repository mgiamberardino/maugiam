import React from 'react';
import './Contact.css';
export default (props) => (
 <div className="contact">
   <a href={props.link || "#"}>
     <img src={props.logo} className="logo" alt="logo" />
     {props.text && (<span>{props.text}</span>)}
   </a>
  </div>
);
