import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddColumn from './AddColumn/AddColumn';
import AddItem from './AddItem/AddItem';
import Column from './Column/Column';
import ColumnModal from './ColumnModal/ColumnModal';
import ItemModal from './ItemModal/ItemModal';

export interface ToDo {
    id?: string;
    label?: string;
    value?: string;
    list?: Array<Task>;
}

export interface Task {
    id: string;
    value: string;

}

const TodoListEdit = () => {
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
    const [editColumn, setEditColumn] = useState<ToDo>();
    const [editTask, setEditTask] = useState<Task>();
    const [displayModalEditColumn, setDisplayModalEditColumn] = useState<boolean>(false);
    const [displayModalEditItem, setDisplayModalEditItem] = useState<boolean>(false);


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

    const handleDeleteColumn = (index: string) => {
        const newOptions = options.filter((option) => index !== option.id)
        setOptions(newOptions)
    }

    const handleEditColumn = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (editColumn) {
            setEditColumn({ ...editColumn, label: e.target.value, value: e.target.value })
        }
    }

    const handleSaveEditColumn = () => {
        const newOptions = options.map((option) => {
            if (editColumn !== undefined) {
                if (option.id === editColumn.id) {
                    return { ...option, label: editColumn.label, value: editColumn.value }
                }
                return option;
            }
            return option;
        })
        setOptions(newOptions);
        setDisplayModalEditColumn(false);
    }

    const handleEditTask = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (editTask) {
            setEditTask({ ...editTask, value: e.target.value })
        }
    }

    const handleSaveEditTask = () => {
        const newOptions = options.map((option) => {
            if (editTask !== undefined && option.list !== undefined) {
                option.list.map((item) => {
                    if (item.id === editTask.id) {
                        item.value = editTask.value;
                    }

                })
                return option;
            }
            return option;
        })
        setOptions(newOptions);
        setDisplayModalEditItem(false);
    }

    const handleCancel = () => {
        setDisplayModalEditColumn(false);
        setDisplayModalEditItem(false);
    }
    const handleShowModalColumn = (item: ToDo) => {
        setEditColumn(item);
        setDisplayModalEditColumn(true);
    }

    const handleShowModalItem = (item: Task) => {
        setEditTask(item);
        setDisplayModalEditItem(true);
    }

    return <div style={{ margin: '8px' }}>
        <AddColumn
            handleGetNewColumn={handleGetNewColumn}
            handleAddNewColumn={handleAddNewColumn}
            displayButtonColumn={displayButtonColumn}
        />

        <AddItem
            handleGetTask={handleGetTask}
            handleChangeStatue={handleChangeStatue}
            handleAddTask={handleAddTask}
            displayButtonTask={displayButtonTask}
            options={options}
        />

        <Column options={options} handleDeleteTask={handleDeleteTask} handleShowModalItem={handleShowModalItem} handleShowModalColumn={handleShowModalColumn} handleDeleteColumn={handleDeleteColumn} />

        <ColumnModal
            handleEditColumn={handleEditColumn}
            handleCancel={handleCancel}
            handleSaveEditColumn={handleSaveEditColumn}
            open={displayModalEditColumn}
            item={editColumn}
        />
        <ItemModal
            handleEditItem={handleEditTask}
            handleCancel={handleCancel}
            handleSaveEditItem={handleSaveEditTask}
            open={displayModalEditItem}
            item={editTask}
        />
    </div>
};

export default TodoListEdit;
