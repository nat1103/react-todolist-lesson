import React from "react";
import { Button, Input, Row, Select } from "antd";


interface AddItemProps {
    handleAddTask: () => void;
    handleGetTask: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleChangeStatue: (e: any) => void;
    displayButtonTask: Array<boolean>;
    options: Array<{ label?: string; value?: string; list?: Array<{ id: string; value: string; }> | undefined; }>;
}


const AddItem = ({
    handleAddTask,
    handleGetTask,
    handleChangeStatue,
    displayButtonTask,
    options
}: AddItemProps) => {
    return (
        <Row justify={'space-between'} style={{ marginTop: '8px' }}>
            <Input
                style={{ width: '80%' }}
                onChange={handleGetTask}
            />
            <Select
                style={{ width: '10%' }}
                placeholder='Select column'
                onChange={handleChangeStatue}
                options={options}
            />
            <Button
                disabled={!(displayButtonTask[1] === false && displayButtonTask[0] === false)}
                onClick={handleAddTask}
            >Add Item</Button>
        </Row>
        
    )
}


export default AddItem;