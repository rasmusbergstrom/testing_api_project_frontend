import React, { useEffect, useState } from 'react';

 function Checkbox({ handleCheckboxChange }) {
   const [checked, setChecked] = useState(false);
   const [checkedProgramming, setCheckedProgramming] = useState(false);
  
    useEffect(() => {
      handleCheckboxChange(checked);
     });
   
  
    return (
      <div className='checkbox'>
        <label htmlFor='checkbox'>Any</label>
         <input     
               type='checkbox'
               checked={checked}
               onChange={(e) => setChecked(e.target.checked)}
      />

       <label htmlFor='checkbox'>Programming</label>
       <input
           type='checkbox'
           checked={checkedProgramming}
           onChange={(e) => setCheckedProgramming(e.target.checked)}
        />
      </div>
    );
  }

 
  
  
  export default Checkbox;