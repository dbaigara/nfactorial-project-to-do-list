import React from "react";


export default function SingleToDo({ item, changeStatusSingleTodo }){

    const changeStatus = ()=> {
        if(item.status !== "Trash") {
            if(item.status === "Done"){
                changeStatusSingleTodo(item.id, "To Do")
            } else {
                changeStatusSingleTodo(item.id, "Done")
            }
        }
    }

    return (
            <>
                <div className="d-flex">
                    <input 
                        type="checkbox" 
                        checked={item.status==="Done"} 
                        onChange={changeStatus
                        }
                    />
                    <p style={{textDecoration: item.status === "Done" ? "line-through" : "none"}}> {" "} {item.name}</p>
                </div>
                {item.status !== "Trash" 
                    ? <button onClick={()=>      changeStatusSingleTodo(item.id, "Trash")}>
                    Move To Trash
                    </button>
                    : ( <div className="d-flex">
                            <button onClick={()=>      changeStatusSingleTodo(item.id, "Trash")}>
                            Delete Forever
                            </button>
                            <button onClick={()=>      changeStatusSingleTodo(item.id, "To Do")}>
                            Move Back To To Do
                            </button>
                        </div>) }
            </>
    );
}