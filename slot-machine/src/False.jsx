import React from 'react';

const False = ({ x, y, z }) => {
  return (
    <>
      <div className='slot_inner'>
        <h1>{x}{y}{z}</h1>
        <h1>This is not matching.</h1>
      </div>
    </>
  );
};

export default False;
