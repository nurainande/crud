import React, { useState } from 'react'
import { useAppContext } from './Context';

const Form = ({todo,setTodo}) => {
    const [value, setValue] = useState('')
    const { x } = useAppContext();

    function handleSubmit(e){
        e.preventDefault();
        if(!value) return;
        const newItem = value;
        setTodo([...todo,newItem])
        setValue('')
        
    }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="todo..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <input
        type="text"
        placeholder="todo..."
        value={x}
        // onChange={(e) => setValue(e.target.value)}
      />

      <button type="submit">submit</button>
    </form>
  );
}

export default Form