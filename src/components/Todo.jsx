import React, { useEffect, useRef, useState } from 'react'
import TodoItem from './TodoItem'

const Todo = () => {

  const [todoList, setTodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);

  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    }
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  }

  const deleteTodo = (id) => {
    setTodoList((prvTodos) => {
      return prvTodos.filter((todo) => todo.id !== id)
    })
  }

  const toggle = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete }
        }
        return todo;
      })
    })
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList))
  }, [todoList])



  return (
    <div className='bg-white place-self-center mt-8 p-8 flex flex-col min-h-[400px] rounded-lg shadow-xl max-w-md'>
      <div className='flex items-center bg-slate-200 rounded-lg'>
        <input ref={inputRef} type="text" placeholder='Add your tasks' className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 text-gray-600 shadow-inner placeholder:text-blue-900 text-[16px] font-semibold capitalize' />
        <button onClick={add} className='border-none outline-none rounded-lg h-14 w-32 bg-blue-900 text-white font-medium text-[20px] cursor-pointer transition duration-200 hover:bg-blue-800'>ADD</button>
      </div>

      <div>
        {todoList.map((item, index) => {
          return <TodoItem key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle} />
        })}
      </div>
    </div>
  )
}

export default Todo