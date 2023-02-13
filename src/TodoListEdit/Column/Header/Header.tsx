import React from 'react';
import { ToDo } from '../../TodoListEdit'
import { Button } from 'antd';
import { CloseOutlined, EditOutlined } from '@ant-design/icons';

interface TodoItemProps {

    deleteColumn: (index: string) => void;
    showModal: (index: ToDo) => void;
    item: ToDo;
}

const Header = ({ deleteColumn, showModal, item }: TodoItemProps) => {
    return (
        <>
            <div >
                {item.label}
                <Button
                    icon={<EditOutlined />}
                    type='primary'
                    style= {{ marginLeft: '8px' }}
                    onClick={() => showModal(item)}
                />

                <Button
                    style={{ marginLeft: '8px' }}
                    icon={<CloseOutlined />}
                    danger
                    type='primary'
                    onClick={() => deleteColumn(item.id ? item.id : 'item')}
                />
            </div>
        </>
    )
}

export default Header;