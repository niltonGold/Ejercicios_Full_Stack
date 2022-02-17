import { useState } from "react";
import TaskColumn from "../taks-column";
import './style.css';

const initialBoard = [
    { name: 'To do', status: 'TODO', showClearAll: false, tasks: [] },
    { name: 'In progress', status: 'INPROGRESS', showClearAll: false, tasks: [] },
    { name: 'Done', status: 'DONE', showClearAll: true, tasks: [] }
];

export default function BoardContainer(){
    const [originalBoard, updateOriginalBoard] = useState(initialBoard);
    const [boardList, updateBoard] = useState(initialBoard);
    const [idCounter, updateCounter] = useState(0);

    const createTask = (taskName, i) => {
        // tengo que crear una nueva tarea dentro de la columna i
        const newCounter = idCounter+1;
        updateCounter(newCounter)
        const task = {
            name: taskName,
            creationDate: new Date(),
            id: newCounter
        };
        boardList[i].tasks.push(task);
        updateBoard([...boardList]);
        updateOriginalBoard([...boardList]);
    } 

    const filterTasks = (e) => {
        const filteredArray = originalBoard.map(c => {
            const column = {...c};
            column.tasks = column.tasks.filter(t => t.name.toLowerCase().includes(e.target.value.toLowerCase()))
            return column;
        })
        updateBoard(filteredArray);
    }

    return (
        <main>
            <section>
                <div>
                    <h1>Version 1.0</h1>
                    <p>Updated on ---Algo--</p>
                </div>
                <input onChange={filterTasks} type="text" placeholder="busca majete" />
            </section>
            <section className='columns__container'>
                {boardList.map((b,i) => <TaskColumn className="column__container" index={i} onTaskCreation={createTask} info={b}></TaskColumn>)}
            </section>
        </main>
    )
}