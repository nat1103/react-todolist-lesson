import React, { useState } from 'react';
import { Input, Button, Row, Select, List } from 'antd';
import TodoItem from './TodoItem';
import { uid, useUID } from 'react-uid';
import { v4 as uuidv4 } from 'uuid';



export interface ToDo {
    id?: string;
    label: string;
    value: string;
    list?: Array<Task>;
}

export interface Task {
    id: string;
    value: string;

}

const TodoListWithDesign = () => {
    const defaultOptions: Array<ToDo> = [
        { id: uuidv4(), value: 'todo', label: 'To Do', list: [] },
        { id: uuidv4(), value: 'inprogress', label: 'In Progress', list: [] },
        { id: uuidv4(), value: 'done', label: 'Done', list: [] },
    ]


    const [options, setOptions] = useState<Array<ToDo>>(defaultOptions)
    const [newStatue, setNewStatue] = useState<ToDo>()
    const [displayButtonColumn, setDisplayButtonColumn] = useState<boolean>(true)

    const [task, setTask] = useState<string>('')
    const [statue, setStatue] = useState<string>('')
    const [displayButtonTask, setDisplayButtonTask] = useState<Array<boolean>>([true, true])

    const handleGetNewColumn = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewStatue({ id: uuidv4(), label: e.target.value, value: e.target.value, list: [] });
        setDisplayButtonColumn(false)
    }

    const handleAddNewColumn = () => {
        setOptions([...options, newStatue ? newStatue : { label: '', value: '', list: [] }])
    }

    const handleGetTask = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value)
        displayButtonTask[0] = false;
        setDisplayButtonTask(displayButtonTask)
    }

    const handleChangeStatue = (e: any) => {
        setStatue(e);
        displayButtonTask[1] = false;
        setDisplayButtonTask(displayButtonTask)
    }

    const handleAddTask = () => {
        const newOptions = options.map((option) => {
            if (option.value === statue) {
                if (option.list) {
                    return { ...option, list: [...option.list, { id: uuidv4(), value: task }] }
                }
            }
            return option;
        })
        setOptions(newOptions)
    }

    const handleDeleteTask = (index: string) => {
        const newOptions = options.map((option) => {
            if (option.value === statue) {
                if (option.list) {
                    return { ...option, list: option.list.filter((item) => index !== item.id) }
                }
            }
            return option;
        })
        setOptions(newOptions)
    }

    return <div style={{ margin: '8px' }}>
        <Row justify={'space-between'}>
            <Input
                style={{ width: '90%' }}
                onChange={handleGetNewColumn}
            />
            <Button
                disabled={displayButtonColumn}
                onClick={handleAddNewColumn}
            >
                Add Column</Button>
        </Row>
        <Row justify={'space-between'} style={{ marginTop: '8px' }}>
            <Input
                style={{ width: '80%' }}
                onChange={handleGetTask}
            />
            <Select
                style={{ width: '10%' }}
                placeholder='Select column'
                onChange={handleChangeStatue}
                options={options}
            />
            <Button
                disabled={!(displayButtonTask[1] === false && displayButtonTask[0] === false)}
                onClick={handleAddTask}
            >Add Item</Button>
        </Row>

        <Row justify="space-between" style={{ marginTop: '16px' }}>
            {options.map(({ label, list }, index) =>
                <List key={index}
                    header={<div>{label}</div>}
                    dataSource={list}
                    style={{ width: options.length > 0 ? `${90 / options.length}%` : '100%', margin: '8px' }}
                    renderItem={item => <List.Item style={{ background: 'rgba(235,235,235,255)' }}><TodoItem deleteTask={handleDeleteTask} unique={item.id} label={item} /></List.Item>}
                >

                </List>)}
        </Row>

    </div>
};

export default TodoListWithDesign;
