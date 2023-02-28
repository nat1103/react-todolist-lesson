import React from 'react';
import { Button, Modal, Input } from 'antd';
import { useSelector , useDispatch} from 'react-redux';
import {closeModalTask , saveTaskChange} from '../../features/Item/ItemSlice';



const ItemModal = () => {
  const dispatch = useDispatch();
  const open = useSelector((state: any) =>  state.item.isModalTaskOpen);
  const item = useSelector((state: any) =>  state.item.taskToEdit);
  const todo = useSelector((state: any) =>  state.item.columnToDo);
  const [label, setLabel] = React.useState<string>(item ? item.value : '');
  return (
    <Modal
      open={open}
      title="Task Edition"
      onOk={()=>{dispatch(closeModalTask())}}
      onCancel={()=>{dispatch(closeModalTask())}}
      footer={[
        <Button key="back" onClick={()=>{dispatch(closeModalTask())}}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={()=>{dispatch(saveTaskChange({label : label , idOfColumn : todo.id , taskToEdit : item }))}}>
          Save
        </Button>
      ]}
    >
      <Input
        value={label ? label : item.value}
        style={{ width: '90%' }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLabel(e.target.value)}
      />
    </Modal>
  )
}

export default ItemModal;