import React from 'react'
import TodoInput from './TodoInput'
import Todo from './Todo'
import { useSelector, useDispatch } from 'react-redux'
import { completeTodo, addTodo, removeTodo, updateTodo } from '../app/action'
import './TodoList.css'; 


const TodoList = () => {
    const state = useSelector((state) => ({...state}));
    console.log(state.todos);
    const create = (newTodo) => {
        dispatch(addTodo(newTodo))
    };
    const update = (id, upTask) => {
        dispatch(updateTodo({id, upTask}))
    }
    let dispatch = useDispatch();
    return (
        <div>
            <h1>Todo App</h1>
            <div className="infobox">
            <div className="inbox">
            <TodoInput createTodo={create} />
            <ul>
                <div>
                    {   state.todos && 
                        state.todos.map((todo) => {
                            // console.log(todo.task)
                            return (
                            <div key={todo.id}>
                                <Todo 
                                id={todo.id}
                                key={todo.id}
                                task={todo.task}
                                completed={todo.completed}
                                toggleTodo={() => dispatch(completeTodo(todo))}
                                deleteTodo={() => dispatch(removeTodo(todo))}
                                editTodo={update}
                                />
                            </div>
                            
                            )
                        })
                    }
                </div>
            </ul>
            </div>
            </div>
        </div>
    );
}

export default TodoList;
