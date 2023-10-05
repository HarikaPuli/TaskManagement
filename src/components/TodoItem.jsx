export default function TodoItem({item})      //accepting item props from todo 
{
    return(
        <div>
            {/* //returning the item as jsx */}
            <h3>{item}</h3>                 
        </div>
        
    )
}