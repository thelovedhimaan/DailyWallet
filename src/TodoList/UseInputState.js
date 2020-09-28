import { useState } from 'react';
export default (initialVal) => {
   const [input, setinput] = useState(initialVal);
   const handleChange = (evt) => {
      setinput(evt.target.value);
   };
   const reset = () => {
      setinput('');
   };
   return [input, handleChange, reset];
};
