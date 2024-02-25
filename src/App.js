import './App.css';
import { useState } from 'react';
function App() {
  const [toDos, setTodos] = useState([]);
  const [toDo, setTodo] = useState('');

  const removeTodo = (id) => {
    const index = toDos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      const newTodos = [...toDos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    }
  }

  return (
    <div className="app">
    <div className="mainHeading">
      <h1>ToDo List</h1>
    </div>
    <div className="subHeading">
      <br />
      <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
    </div>
    <div className="input">
      <input value={toDo} onChange={ (e) => setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
      <i className="fas fa-plus" onClick={()=>setTodos([...toDos, {id:Date.now(), text:toDo , status:false}])}></i>
    </div>
    <div className="todos">
        {toDos.map((value) => {
          return (
            <div  className={`todo ${value.status ? 'completed' : ''}`}>
          <div className="left">
                <input value={value.status} type="checkbox" name="" id="" onChange={(e) => {
                  setTodos(toDos.filter(obj2 => {
                    if (obj2.id === value.id) {
                      obj2.status = e.target.checked
                    }
                    return obj2
                  }))
            }}/>
                <p>{ value.text }</p>
          </div>  
          <div className="right">
                <i className="fas fa-times" onClick={() => removeTodo(value.id)}></i>
          </div>
            </div>
          )
        })
          }
    </div>
  </div>
);
}

export default App;