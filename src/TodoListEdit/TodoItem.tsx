import React from 'react';
import { useState } from 'react';
import { Task } from '../TodoListWithDesign';
import { Button } from 'antd';
import { CloseOutlined, EditOutlined } from '@ant-design/icons';

interface TodoItemProps {
    deleteTask: (index: string) => void;
    editTask: (index: string) => void;
    unique: string;
    label: Task;
}

const TodoItem = ({ deleteTask, editTask, unique, label }: TodoItemProps) => {
    return (
        <>
            {label.description}
            <Button
                icon={<CloseOutlined />}
                danger
                type='primary'
                onClick={() => deleteTask(unique)}
            />

            <Button
                icon={<EditOutlined />}
                type='primary'
                onClick={() => editTask(unique)}
            />
        </>
    )
}

export default TodoItem;