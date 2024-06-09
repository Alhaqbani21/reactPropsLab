import React from 'react';

function Btn(props) {
  let color = props.name == 'Login' ? 'green' : 'red';
  return (
    <button style={{ color: color }} className="Btn">
      {props.name}
    </button>
  );
}

export default Btn;
