import React from 'react';
import './Button.css';
export default function Button(props) {
  const { color, name, ...rest} = props;
  return (
    <button className={`button ${color}`} {...rest}>
      {name}
    </button>
  );
}