import React from 'react';
import {Row,List } from 'antd';
import { ToDo } from '../../TodoListEdit';
import { useSelector} from 'react-redux';
import Header from './Header/Header';
import Item from './Item/TodoItem';

const Column =() => {
    const options = useSelector((state: any) => state.item.todos);

    return <Row justify="space-between" style={{ marginTop: '16px' }}>
            {options.map((todo : ToDo ) =>
                <List key={todo.id}
                    header={<Header item={todo}/>} 
                    dataSource={todo.list}
                    style={{ width: options.length > 0 ? `${90 / options.length}%` : '100%', margin: '8px' }}
                    renderItem={item =>  <Item task={item} todo={todo} />}
                >

                </List>)}
        </Row>

}

export default Column;