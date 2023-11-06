import styles from './todoitem.module.css'
export default function TodoItem({item, todos, setTodos})      //accepting item props from todo 
{
    function handleDelete(item)
    {
        console.log("item deleted", item);
        setTodos(todos.filter((todo)=> todo!==item));
    }

    // function CheckItem(item,name)
    // {
    //     if(item.name == name)
    //     {

    //         item.taskDone = !item.taskDone;
    //         console.log("selectedItem is done status",item.taskDone);
    //     }
       
    // }
    // function clickonItem(name)
    // {
    //     console.log("clickonItem",name);
    //    // const selectedItems = todos.filter((todo) => todo.name  === name);
    //     todos.map((item) => CheckItem(item,name));
    //     console.log(todos);
    //     setTodos(todos);
    // }
    function clickonItem(name){
       setTodos(todos.map((todo=> todo.name === name ? {...todo, taskDone:!todo.taskDone}:todo)))
       console.log(todos);
    }
    
    const ItemStyling = item.taskDone ? styles.completed : ""
    return(
        <div className={styles.item}>
            {/* //returning the item as jsx */}
            <div className={styles.itemName}>
            <span className={ItemStyling} onClick={() => clickonItem(item.name)}>{item.name}</span> 
            <button onClick={()=> handleDelete(item)} className={styles.deleteButton}>x</button>
            </div>
            <hr className={styles.line}/>             
        </div>
    )
}