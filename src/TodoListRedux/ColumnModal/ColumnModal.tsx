import React from 'react';
import { Button, Modal, Input } from 'antd';
import { useSelector , useDispatch} from 'react-redux';
import { closeModalColumn , changeColumn } from '../../features/Item/ItemSlice';



const ColumnModal = () => {
  const dispatch = useDispatch();
  const showModal = useSelector((state: any) =>  state.item.isModalColumnOpen);
  const item = useSelector((state: any) => state.item.todoToEdit);
  const [label, setLabel] = React.useState(item ? item.label : '');

  return (
    <Modal
      open={showModal}
      title="Column Edition"
      onOk={() => dispatch(changeColumn({id: item.id, label: item.label}))}
      onCancel={()=> dispatch(closeModalColumn())}
      footer={[
        <Button key="back" onClick={()=> dispatch(closeModalColumn())}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={() => dispatch(changeColumn({id: item.id, label: label ? label : item.label }))}>
          Save
        </Button>
      ]}
    >
      <Input
        value={label ? label : item.label}
        style={{ width: '90%' }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLabel(e.target.value)}
      />
    </Modal>
  )
}

export default ColumnModal;