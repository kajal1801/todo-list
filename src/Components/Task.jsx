import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const Task = ({title, description, deleteTask, index}) => {
    const trash = <FontAwesomeIcon icon={faTrashCan} />

    return (
        <div className='task'>
            <div>
                <div >
                    <p>{title}</p>
                    <span>{description}</span>
                </div>
                <button id='trash' onClick={() => deleteTask(index)}>
                    {trash}
                </button>
            </div>
        </div>
    )
}

export default Task