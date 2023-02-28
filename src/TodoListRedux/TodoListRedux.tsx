import React from 'react';
import AddColumn from './AddColumn/AddColumn';
import { Provider } from 'react-redux';
import store from '../app/store';
import Column from './Column/Column';
import ColumnModal from './ColumnModal/ColumnModal';
import AddItem from './AddItem/AddItem';
import ItemModal from './ItemModal/ItemModal';

const TodoListRedux = () => {
    return <Provider store={store}>
        <div style={{ margin: '8px' }}>
            <AddColumn />
            <AddItem />
            <Column />

            <ColumnModal />
            <ItemModal />
        </div>
    </Provider>
};

export default TodoListRedux;
