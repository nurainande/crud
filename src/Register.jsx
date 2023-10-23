import React, { useState } from 'react'
import { useAppContext } from './Context';

const Register = () => {
    // const [name, setName] = useState('')
    // const [day, setDay] = useState('');
    // const [obj, setObj] = useState({});

    // function handleSubmitReg(e){
    //     e.preventDefault();
    //     if (!name && !day) return;
    //     setObj({...obj,name,day})
    //     return obj;
    //     console.log(obj)
    // }
    const {x,
          y,
          state,
          setState,
          name,
          setName,
          day,
          setDay,
          obj,
          setObj,
          handleSubmitReg,} = useAppContext()

          return (
    <>
    <form onSubmit={handleSubmitReg} style={{width:"100%",height:'100vh',display:'flex',alignItems:'center',justifyContent:"center"}}> 
    <h3>Start by inputing your name and the day of the week: </h3>
      <input type="text" placeholder="name.."  value={name} onChange={(e)=>setName(e.target.value)}/>
      <br />
      <input type="text" placeholder="day.." value={day} onChange={(e)=>setDay(e.target.value)} />
      <br />
      <button>start</button>
    </form></>
  );
}

export default Register