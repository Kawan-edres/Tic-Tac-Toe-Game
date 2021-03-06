import React from 'react';

const Square = ({val,chooseSquare}) => {
  return (
  <div onClick={chooseSquare}
   className='flex-[33%] border border-black h-full ] cursor-pointer
    text-[40px] text-amber-100  border-b-0 flex justify-center items-center
    active:bg-black/5
   
   '> 
  {val}
  </div>
  
  );
};

export default Square;
