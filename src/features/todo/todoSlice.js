import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todo",
    initialState:{
        todos:[]
    },
   reducers : {
    addTodo: (state,action)=> {//a function is made here or we can give reference to it.Here we will also declare the fnction
            const todo = {
                id:nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
    },
    //state is the current state of the application
    //action is the payload that is passed to the function i.e jo bhi data pass hoga
    removeTodo : (state , action)=> {
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
    },
   }
})

export const {addTodo,removeTodo} = todoSlice.actions;

export default todoSlice.reducer;
