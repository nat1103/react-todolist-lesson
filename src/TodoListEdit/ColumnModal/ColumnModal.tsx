import React from 'react';
import { Button, Modal, Input } from 'antd';
import { ToDo, Task } from '../TodoListEdit'

interface ColumnModalProps {
  open: boolean;
  handleEditColumn: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSaveEditColumn: () => void;
  handleCancel: () => void;
  item?: ToDo;
}

const ColumnModal = ({ open, handleEditColumn, handleCancel, item, handleSaveEditColumn }: ColumnModalProps) => {
  return (
    <Modal
      open={open}
      title="Column Edition"
      onOk={handleSaveEditColumn}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={handleSaveEditColumn}>
          Save
        </Button>
      ]}
    >
      <Input
        value={item ? item.label : ''}
        style={{ width: '90%' }}
        onChange={handleEditColumn}
      />
    </Modal>
  )
}

export default ColumnModal;