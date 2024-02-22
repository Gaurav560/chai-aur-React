import React from 'react';

const True = ({ x, y, z }) => { // Destructuring props directly in the function parameter
  return (
    <>
      <div className='slot_inner'>
        <h1>{x}{y}{z}</h1>
        <h1>This is matching.</h1>
      </div>
    </>
  );
};

export default True;
