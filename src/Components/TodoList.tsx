import React from 'react';
import { Todo } from './modal';
import SingleTodo from './SingleTodo';
import './styles.css'


interface Props {
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>

}



const TodoList: React.FC<Props> = ({todos,setTodos}) => {
    return (
        <div className="todos">
            {
                todos.map(todo=> (
                   <SingleTodo todo={todo}
                   todos={todos}
                   setTodos={setTodos}
                   key={todo.id}  />
                    // <li>{todo.todo}</li>
                ))
            }
        </div>
    );
};

export default TodoList;