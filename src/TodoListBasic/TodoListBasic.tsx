import { DollarOutlined } from '@ant-design/icons';
import React from 'react';
import { useState } from 'react';
import TodoListEdit from '../TodoListEdit';

const TodoListBasic = () => {
    const options: Array<any> = [
        { value: 'todo', label: 'To Do' },
        { value: 'inprogress', label: 'In Progress' },
        { value: 'done', label: 'Done' },
    ]

    const [todos, setTodos] = useState<Array<string>>([''])
    const [inprogresses, setInprogresses] = useState<Array<string>>([''])
    const [dones, setDones] = useState<Array<string>>([''])
    const [statue, setStatue] = useState<string>('todo')
    const [task, setTask] = useState<string>('')

    const handleStatus = () => {
        switch (statue) {
            case 'todo':
                setTodos([...todos, task])
                break;
            case 'inprogress':
                setInprogresses([...inprogresses, task])
                break;
            case 'done':
                setDones([...dones, task])
                break;
            default:
                break;
        }
    }

    const handleChangeStatue = (e: any) => {
        setStatue(e.target.value);
    }

    const handleGetTask = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value)
    }


    return (<>
        <div>TodoListBasic</div>

        <input onChange={handleGetTask} />
        <select onChange={handleChangeStatue}>
            {options.map(({ value, label }, index) => <option key={index} value={value}>{label}</option>)}
        </select>
        <button onClick={handleStatus}>Add To List</button>

        <section style={{ display: 'flex', gap: '8px' }}>
            <div>
                <h2>To do</h2>
                <ul>
                    {todos.map((todo, index) =>
                        <li key={index}>{todo}</li>
                    )}
                </ul>
            </div>

            <div>
                <h2>In progress</h2>
                <ul>
                    {inprogresses.map((inprogress, index) =>
                        <li key={index}>{inprogress}</li>
                    )}
                </ul>
            </div>

            <div>
                <h2>Done</h2>
                <ul>
                    {dones.map((done, index) =>
                        <li key={index}>{done}</li>
                    )}
                </ul>
            </div>
        </section>
    </>)
};

export default TodoListBasic;
