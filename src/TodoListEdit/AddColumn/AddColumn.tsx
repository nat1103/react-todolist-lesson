import React from 'react';
import { Button, Input, Row } from 'antd';

interface AddColumnProps {
    handleAddNewColumn: () => void;
    handleGetNewColumn: (e: React.ChangeEvent<HTMLInputElement>) => void;
    displayButtonColumn: boolean;
}

const AddColumn = ({handleGetNewColumn,displayButtonColumn,handleAddNewColumn} : AddColumnProps) => {

    return (
        <>
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
        </>
    )
}

export default AddColumn;