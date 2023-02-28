import React from 'react';
import { Button } from 'antd';
import { CloseOutlined, EditOutlined } from '@ant-design/icons';
import { Task , ToDo} from '../../../TodoListEdit';
import { useSelector , useDispatch} from 'react-redux';
import {showModalTask , closeModalTask } from '../../../features/Item/ItemSlice';

interface TodoItemProps {
    task: Task;
    todo: ToDo;
}
const TodoItem = ({task ,todo} :TodoItemProps) => {
    const dispatch = useDispatch();
    return (
        <>
            
            <div>
            {task.value}
                <Button
                    icon={<EditOutlined />}
                    type='primary'
                    onClick={() => {dispatch(showModalTask({showModal: true, taskEdit: task , columnToDo: todo}))}}
                />

                <Button
                    style={{ marginLeft: '8px' }}
                    icon={<CloseOutlined />}
                    danger
                    type='primary'
                    onClick={() => {}}
                />
            </div>
        </>
    )
}

export default TodoItem;