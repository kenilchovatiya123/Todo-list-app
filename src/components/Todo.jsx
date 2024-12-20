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
    <div className='bg-neutral-100 h-screen'>
      <div className='items-center justify-center flex flex-col'>
        <div className='bg-gray-200 text-black w-full sm:w-[460px] flex items-center justify-start py-6 px-8 gap-1 sm:gap-2 mt-20'>
          <img src="/src/assets/checklist.png" alt="" className='h-6 sm:h-7 items-center' />
          <h1 className='sm:text-2xl text-lg font-bold tracking-tight'>Task Tracker</h1>
        </div>

        <div className='bg-gray-200 text-black w-full sm:w-[460px] flex mt-2 items-center justify-between py-6 px-8 gap-1'>
          <div className='flex items-center w-full'>
            <input ref={inputRef} type="text" placeholder='Add your tasks' className='w-full flex-1 py-2 px-3 text-[14px] sm:text-[16px] outline-none capitalize' />
            <button onClick={add} className='bg-neutral-800 py-2 px-6 sm:px-8 text-white text-[14px] sm:text-[16px]'>ADD</button>
          </div>

        </div>
        <div className='bg-gray-200 text-black w-full sm:w-[460px] px-8 py-4'>
          {todoList.map((item, index) => {
            return <TodoItem key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Todo