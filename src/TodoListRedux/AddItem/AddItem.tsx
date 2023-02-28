import React , {useState} from "react";
import { Button, Input, Row, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { saveTask } from "../../features/Item/ItemSlice";
import { v4 as uuidv4 } from "uuid";
const AddItem = () => {
    const dispatch = useDispatch();
    const options = useSelector((state: any) => state.item.todos);
    const [displayButtonTask, setDisplayButtonTask] = useState<boolean[]>([true, true]);
    const [label, setLabel] = useState<string>('');
    const [column, setColumn] = useState<string>('');

    return (
        <Row justify={'space-between'} style={{ marginTop: '8px' }}>
            <Input
                style={{ width: '80%' }}
                onChange={(e : React.ChangeEvent<HTMLInputElement>)=>{setLabel(e.target.value)
                    setDisplayButtonTask([false, displayButtonTask[1]])
                }}
            />
            <Select
                style={{ width: '10%' }}
                placeholder='Select column'
                onChange={(e : any)=>{setColumn(e)
                    setDisplayButtonTask([displayButtonTask[0], false])
                }}
                options={options}
            />
            <Button
                disabled={!(displayButtonTask[1] === false && displayButtonTask[0] === false)}
                onClick={()=>{dispatch(saveTask({label: label, value: column}))}}
            >Add Item</Button>
        </Row>
        
    )
}


export default AddItem;