import React, {useState } from 'react'
import Form from './Form'
import { useAppContext } from './Context'
import Register from './Register'


const App = () => {
  const [show, setShow] = useState(false)
  const [todo, setTodo] = useState([])
  const {x,state,setState}=useAppContext()
  return (
    <div>
      {!state.name&&<Register onClick={()=>setState}/>}
      {state.name&&<h1>{state.name} {state.name && 'Todo List for'} {state.day}</h1>}
      {state.name &&!show && <button onClick={()=>setShow(show=>!show)}>create</button>}
      {show && <Form todo={todo} setTodo={setTodo}/>}
      {todo.map((item,index,arr)=><p key={index}>{index+1}.{item}</p>)}
    </div>
  )
}

export default App