import React from 'react';
import { Button, Modal, Input } from 'antd';
import { ToDo, Task } from '../TodoListEdit'

interface ItemModalProps {
  open: boolean;
  handleEditItem: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSaveEditItem: () => void;
  handleCancel: () => void;
  item: Task | undefined;
}

const ItemModal = ({ open, handleEditItem, handleCancel,handleSaveEditItem, item }: ItemModalProps) => {
  return (
    <Modal
      open={open}
      title="Task Edition"
      onOk={handleSaveEditItem}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={handleSaveEditItem}>
          Save
        </Button>
      ]}
    >
      <Input
        value={item ? item.value : ''}
        style={{ width: '90%' }}
        onChange={handleEditItem}
      />
    </Modal>
  )
}

export default ItemModal;