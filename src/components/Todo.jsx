
import { useState } from "react"
import TodoItem from "./TodoItem";

export default function Todo(){
    const[todo, setTodo]=useState("");
    const[todos,setTodos]=useState([]);

    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos,todo]);
        setTodo("");   //to make input field empty after entering data
    }
    return(
        <div>
           <form onSubmit={handleSubmit}>
            <input 
            onChange={(e)=>setTodo(e.target.value)}
             value={todo} 
             type="text"></input>
            <button type="submit">Add</button>
           </form>
           {todos.map((item)=>(          //iterating items in array
           <TodoItem key={item} item={item}/>        //sending item as props to todoitem component 
           ))}
        </div>
    )
}