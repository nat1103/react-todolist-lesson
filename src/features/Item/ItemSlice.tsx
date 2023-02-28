import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import { ToDo } from "../../TodoListEdit/TodoListEdit";
import { Task } from "../../TodoListWithDesign";

const defaultOptions: Array<ToDo> = [
    { id: uuidv4(), value: 'todo', label: 'To Do', list: [] },
    { id: uuidv4(), value: 'inprogress', label: 'In Progress', list: [] },
    { id: uuidv4(), value: 'done', label: 'Done', list: [] },
]

const defaultToDo: ToDo = {
    id: '',
    label: '',
    value: '',
    list: [],
}

const defaultTask: Task = {
    id: '',
    value: '',
}

export const itemSlice = createSlice({
    name: 'column',
    initialState: {
        todos: defaultOptions,
        isModalColumnOpen: false,
        todoToEdit: defaultToDo,
        isModalTaskOpen: false,
        taskToEdit: defaultTask,
        columnToDo: defaultToDo,
    },
    reducers: {
        addColumn: (state, action: { payload: ToDo }) => {
            state.todos.push(action.payload);
        },

        removeColumn: (state, action: { payload: string | undefined }) => {
            state.todos = state.todos.filter((item) => item.id !== action.payload);
        },

        showModalColumn: (state, action: { payload: { showModal: boolean, itemEdit: ToDo } }) => {
            state.isModalColumnOpen = action.payload.showModal;
            state.todoToEdit = action.payload.itemEdit;
        },

        closeModalColumn: (state) => {
            state.isModalColumnOpen = false;
            state.todoToEdit = defaultToDo;
        },

        changeColumn: (state, action: { payload: ToDo }) => {
            state.isModalColumnOpen = false;
            state.todos = state.todos.map((item) => {
                if (item.id === action.payload.id) {
                    return action.payload;
                }
                return item;
            });
        },

        saveTask: (state, action: { payload: {label : string , value : string} }) => {
            const task: Task = {
                id: uuidv4(),
                value: action.payload.label,
            }
            const newOptions = state.todos.map((option) => {
                if (option.value === action.payload.value) {
                    if (option.list) {
                        return { ...option, list: [...option.list, task] }
                    }else {
                        return { ...option, list: [task] }
                    }
                }
                return option;
            })
            state.todos = newOptions;
        },

        showModalTask : (state, action: { payload: { showModal: boolean, taskEdit: Task , columnToDo : ToDo  } }) => {
            state.isModalTaskOpen = action.payload.showModal;
            state.taskToEdit = action.payload.taskEdit;
            state.columnToDo = action.payload.columnToDo;

        },

        closeModalTask: (state) => {
            state.isModalTaskOpen = false;
            state.taskToEdit = defaultTask;
        },

        saveTaskChange: (state, action: { payload: {label : string , idOfColumn : string , taskToEdit : Task} }) => {
            state.isModalTaskOpen = false;
            const newOptions = state.todos.map((option) => {
                if (option.id === action.payload.idOfColumn) {
                    if(option.list){
                    const newList = option.list.map((task) => {
                        if (task.id === action.payload.taskToEdit.id) {
                            return { ...task, value: action.payload.label }
                        }
                        return task;
                    })
                    
                    return { ...option, list: newList }
                }
                }
                return option;
            })
            state.todos = newOptions;
            
        },
    },
});

export const { addColumn, removeColumn, showModalColumn, closeModalColumn , changeColumn , saveTask , showModalTask , closeModalTask , saveTaskChange} = itemSlice.actions;


export default itemSlice.reducer;