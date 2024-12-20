import React from 'react'
import check from '../assets/checked.png'
import uncheck from '../assets/unchecked.png'
import delete_icon from '../assets/trash.png'

const TodoItem = ({ text, id, isComplete, deleteTodo, toggle }) => {
    return (
        <div className='flex justify-between items-center py-1'>
            <div onClick={() => { toggle(id) }} className='flex items-center w-full'>
                <a href="#"><img src={isComplete ? check : uncheck} className='w-5' /></a>
                <p className={`text-[14px] sm:text-[16px] capitalize font-normal text-neutral-800 ml-2 ${isComplete ? "line-through" : ""}`}>
                    {text}
                </p>
            </div>
            <div>
                <a href="#" onClick={() => { deleteTodo(id) }}><img src={delete_icon} className='w-5' /></a>
            </div>
        </div>
    )
}

export default TodoItem
