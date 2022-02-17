import { useState } from "react";
import Task from "../task";
import './style.css';

export default function TaskColumn(props){
    const [isTaskCreation, showCreationForm] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        const taskName = e.target.taskName.value;
        props.onTaskCreation(taskName, props.index);
    }

    return (
        <div>
            <div>
                <p>{props.info.tasks.length}</p>
                <p>{props.info.name}</p>
                <i onClick={() => showCreationForm(!isTaskCreation)}>Add</i>
            </div>
            <div className={isTaskCreation ? '' : 'task__form--hidden'}>
                <form onSubmit={handleSubmit}>
                    <textarea required name="taskName" placeholder="Enter your task"></textarea>
                    <button type="submit">Add</button>
                </form>
                <button onClick={() => showCreationForm(!isTaskCreation)}>Cancelar</button>
            </div>
            <ul>
                {props.info.tasks.map(t => <li key={t.id}><Task info={t} status={props.info.status}></Task></li>)}
            </ul>
        </div>
    )
}