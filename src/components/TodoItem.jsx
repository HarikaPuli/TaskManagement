import styles from './todoitem.module.css'
export default function TodoItem({item, todos, setTodos})      //accepting item props from todo 
{
    function handleDelete(item)
    {
        console.log("item deleted", item);
        setTodos(todos.filter((todo)=> todo!==item));
    }
    return(
        <div className={styles.item}>
            {/* //returning the item as jsx */}
            <div className={styles.itemName}>
            {item.name} 
            <button onClick={()=> handleDelete(item)} className={styles.deleteButton}>x</button>
            </div>
            <hr className={styles.line}/>             
        </div>
    )
}