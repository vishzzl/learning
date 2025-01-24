import {createSlice} from '@reduxjs/toolkit'

export const todoslice = createSlice(
    {
        name:'todo',
        initialState:{
            value:[{
                Text:'to the store',
                isCompleted:true
            }],
        },
        reducers:{
            createTodo: (state,action) => {
                state.value=[...state.value,{Text:action.payload,isCompleted:false}]
            },
            markTodoComplete: (state,action) => {
                const text = action.payload
                const todo = state.value.find(t=>t.Text === text)
                todo.isCompleted = true;
            },
            deleteTodo: (state,action) => {
                const text = action.payload;
                state.value = state.value.filter(t=>t.Text !== text);
            },
        }
        
    }
)
export const {createTodo,markTodoComplete,deleteTodo} = todoslice.actions;