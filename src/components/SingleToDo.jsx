export default function SingleToDo({ item, changeStatusToTrash }){

    return (
            <div>
                <p> - {item.name}</p>
                <button onClick={()=> changeStatusToTrash(item.id)}>
                    Move To Trash
                </button>
            </div>
    );
}