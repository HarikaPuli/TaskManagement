import { useState } from "react"
import Footer from "./Footer";
import Form from "./Form";
import TodoList from "./TodoList";

export default function Todo(){
    const [todos, setTodos] = useState([]);
    const completedTasks= todos.filter((todo)=> todo.taskDone).length
    const totalTasks = todos.length 
    const remainingTasks = totalTasks-completedTasks
    return(
        <div>
           <Form todos={todos} setTodos={setTodos}/>
           <TodoList todos={todos} setTodos={setTodos}/>
           <Footer completedTasks={completedTasks} totalTasks={totalTasks} remainingTasks={remainingTasks} />

          
        </div>
    )
}