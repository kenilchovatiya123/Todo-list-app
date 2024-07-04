import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListCheck } from '@fortawesome/free-solid-svg-icons'

const TodoNavbar = () => {
    return (
        <div className='flex items-center py-4 px-6 justify-between bg-white border-o rounded-lg shadow-xl max-w-md cursor-pointer'>
            <h1 className='text-blue-900 font-bold text-2xl'>MY TODOS</h1>
            <i className='text-blue-900 text-2xl'><FontAwesomeIcon icon={faListCheck} /></i>
        </div>
    )
}

export default TodoNavbar