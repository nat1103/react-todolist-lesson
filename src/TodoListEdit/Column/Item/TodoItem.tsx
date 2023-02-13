import React from 'react';
import { Task,ToDo } from '../../TodoListEdit'
import { Button } from 'antd';
import { CloseOutlined, EditOutlined } from '@ant-design/icons';

interface TodoItemProps {
    deleteTask: (index: string) => void;
    showModal: (index: Task) => void;
    item: Task;
}

const TodoItem = ({ deleteTask, showModal, item }: TodoItemProps) => {
    return (
        <>
            {item.value}
            <div >
                <Button
                    icon={<EditOutlined />}
                    type='primary'
                    onClick={() => showModal(item)}
                />

                <Button
                    style={{ marginLeft: '8px' }}
                    icon={<CloseOutlined />}
                    danger
                    type='primary'
                    onClick={() => deleteTask(item.id)}
                />
            </div>
        </>
    )
}

export default TodoItem;