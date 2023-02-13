import React from 'react';
import {Row,List } from 'antd';
import TodoItem from './Item/TodoItem';
import Header from './Header/Header';
import { ToDo } from '../TodoListEdit'
import { Task } from '../../TodoListWithDesign';

interface ColumnProps {
    handleDeleteColumn: (id: string) => void;
    handleDeleteTask: (id: string) => void;
    handleShowModalColumn: (item : ToDo) => void;
    handleShowModalItem: (item : Task) => void;
    options: Array<ToDo>;
}

const Column =({
    handleDeleteColumn,
    handleDeleteTask,
    handleShowModalColumn,
    handleShowModalItem,
    options
}: ColumnProps) => {
    return <Row justify="space-between" style={{ marginTop: '16px' }}>
            {options.map((todo) =>
                <List key={todo.id}
                    header={<Header item={todo} showModal={handleShowModalColumn} deleteColumn={handleDeleteColumn} />}
                    dataSource={todo.list}
                    style={{ width: options.length > 0 ? `${90 / options.length}%` : '100%', margin: '8px' }}
                    renderItem={item => <List.Item style={{ background: 'rgba(235,235,235,255)' }}><TodoItem deleteTask={handleDeleteTask} showModal={handleShowModalItem} item={item} /></List.Item>}
                >

                </List>)}
        </Row>

}

export default Column;