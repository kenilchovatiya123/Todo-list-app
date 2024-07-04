import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faSquareCheck } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const TodoItem = ({ text, id, isComplete, deleteTodo, toggle }) => {
    return (
        <div className='flex items-center my-4 gap-2'>
            <div onClick={() => { toggle(id) }} className='flex flex-1 items-center cursor-pointer'>
                <i className='w-8 text-xl text-gray-600 hover:text-green-600'>
                    <FontAwesomeIcon icon={isComplete ? faSquareCheck : faSquare} />
                </i>
                <p className={`text-[16px] font-[500] text-gray-700 ml-4 decoration-slate-600 ${isComplete ? "line-through" : ""}`}>
                    {text}
                </p>
            </div>

            <i onClick={() => { deleteTodo(id) }} className='text-xl text-gray-600 cursor-pointer transition duration-200 hover:text-red-500'><FontAwesomeIcon icon={faTrash} /></i>
        </div>
    )
}

export default TodoItem
