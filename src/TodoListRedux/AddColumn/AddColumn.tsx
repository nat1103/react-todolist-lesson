import React, { useState } from 'react';
import { Button, Input, Row } from 'antd';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { ToDo } from '../../TodoListEdit/TodoListEdit';
import { addColumn } from '../../features/Item/ItemSlice';

const AddColumn = () => {
    const dispatch = useDispatch();
    const [newColumn, setNewColumn] = useState<ToDo>({id: '', label: '', value: '', list: []});
    const [displayButtonColumn, setDisplayButtonColumn] = useState<boolean>(true);

    const handleGetNewColumn = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewColumn({ id: uuidv4(), label: e.target.value, value: e.target.value, list: [] });
        setDisplayButtonColumn(false)
    }
    
    return (
        <>
            <Row justify={'space-between'}>
                <Input
                    style={{ width: '90%' }}
                    onChange={handleGetNewColumn}
                />
                <Button
                    disabled={displayButtonColumn}
                    onClick={()=> dispatch(addColumn(newColumn))}
                >
                    Add Column</Button>
            </Row>
        </>
    )
}

export default AddColumn;