import React from 'react'
import TodoNavbar from './components/TodoNvabar'
import Todo from './components/Todo'

const App = () => {
  return (
    <div className='bg-gradient-to-r from-slate-300 to-slate-500 py-8 px-96 h-screen'>
      <TodoNavbar/>
      <Todo/>
    </div>
  )
}

export default App