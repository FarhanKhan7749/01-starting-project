import React from 'react';

import './Button.css';

const Button = props => {
  let classes= 'button '+ props.className;
  return (
    <button type={props.type} style={props.style} className={classes} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
