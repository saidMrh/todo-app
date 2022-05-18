import { writable } from "svelte/store";
import { findAll, save, update } from "./repository";

export const todos = writable([]);
const tableName = 'todos';

export const loadTodos = async () =>{
    const {data, error} = await findAll(tableName);

    if(error){
        return console.error(error);
    }
    todos.set(data);
}

export const addTodo = async (text, user_id) => {
    let obj = {id: Date.now(), text, completed: false, user_id}
    const {data, error} = await save(tableName, obj);

    if(error){
        return console.error(error);
    }
    console.log(data);

    todos.update((cur) => [...cur, data[0]]);
}

export const deleteTodo = async (id) =>{
    const {error} = await deleteTodo(tableName, {id});

    if(error){
        return console.error(error);
    }

    todos.update((todos) => todos.filter(todo => todo.id !== id));
}

export const toggleTodoCompleted = async (id, currentState) =>{
    const {error} = await update(tableName, {completed: currentState}, {id});
    if(error){
        return console.error(error);
    }

    todos.update(todos =>{
        todos.forEach(todo =>{
            if(todo.id === id){
                todo.completed = !todo.completed;
            }
        });
        return todos;
    })
}
