import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashCan } from '@fortawesome/free-solid-svg-icons'

const Task = ({title, description, deleteTask, editTask, index}) => {
    const trash = <FontAwesomeIcon icon={faTrashCan} />
    const edit = <FontAwesomeIcon icon={faEdit} />

    return (
        <div className='task'>
            <div>
                <div >
                    <p>{title}</p>
                    <span>{description}</span>
                </div>
                <div class='task-btn'>
                    <button class='update' id='trash' onClick={() => deleteTask(index)}>
                        {trash}
                    </button>
                    <button class='update' id='edit' onClick={() => editTask(index)}>
                        {edit}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Task