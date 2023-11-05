import { useState } from "react";
import styles from './form.module.css';

export default function Form({todos, setTodos})
{
    // const [todo, setTodo] = useState("");
    const [todo, setTodo] = useState({name:"", taskDone:false});
    
     function handleSubmit(e) {
     e.preventDefault();
     if (todo.name.length >0)
     {
        setTodos([...todos, todo]);
        setTodo({name:"", taskDone:false});
     }
    }
    return(
        <form className={styles.styleForm} onSubmit={handleSubmit}>
        <div className={styles.container}>
        <input className= {styles.styleInput} 
        onChange={(e)=>setTodo({name:e.target.value, taskDone:false})}
        placeholder="Enter todo item.."
         type="text"
         value={todo.name}/>
        <button className={styles.styleButton} type="submit">Add</button>
        </div>
        </form>
        
    )
}