import React from 'react';
import { ToDo } from '../../../TodoListEdit';
import { Button } from 'antd';
import { CloseOutlined, EditOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { removeColumn, showModalColumn } from '../../../features/Item/ItemSlice';

interface TodoItemProps {
    item: ToDo;
}

const Header = ({ item }: TodoItemProps) => {
    const dispatch = useDispatch();
    return (
        <>
            <div >
                {item.label}
                <Button
                    icon={<EditOutlined />}
                    type='primary'
                    style={{ marginLeft: '8px' }}
                    onClick={() => dispatch(showModalColumn({ showModal : true, itemEdit: item}))}
                />

                <Button
                    style={{ marginLeft: '8px' }}
                    icon={<CloseOutlined />}
                    danger
                    type='primary'
                    onClick={() => dispatch(removeColumn(item.id))}
                />
            </div>
        </>
    )
}

export default Header;