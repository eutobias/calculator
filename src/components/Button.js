import React from 'react';

const Button = (props) => {

  return (
    <div className={`button ${props.className ? props.className : ''}`}>
      {props.digit}
    </div>
  );
}

export default Button;
