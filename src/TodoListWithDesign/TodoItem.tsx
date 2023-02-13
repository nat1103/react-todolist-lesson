import React from 'react';
import { Task } from './TodoListWithDesign';
import { Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

interface TodoItemProps {
    deleteTask: (index: string) => void;
    unique: string;
    label: Task;
}

const TodoItem = ({ deleteTask ,unique, label }: TodoItemProps) => {
    return (
        <>
            {label.value}
            <Button
                icon={<CloseOutlined />}
                danger
                type='primary'
                onClick={() => deleteTask(unique)}
            />
        </>
    )
}

export default TodoItem;