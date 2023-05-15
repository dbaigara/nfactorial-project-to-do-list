import modalLogo from "../img/More.png"
import { useState } from "react";


export default function Modal( {item, removeForever, changeStatusSingleTodo, isModalVisible, setIsModalVisible}){

    return ( 
        <div className="d-flex">

            <div className="">
                <button className="modal-button me-1" onClick={() => setIsModalVisible(!isModalVisible)}>
                    <img className="modal-logo" src={modalLogo} alt="modal-button" /></button>
                    {item.status !== "Trash" 
                    ? isModalVisible 
                        && (<button onClick={()=> changeStatusSingleTodo(item.id, "Trash")}>
                        Move To Trash
                        </button>)
                    : isModalVisible 
                        && (<div className="modal-background d-flex">
                            <button onClick={()=> {removeForever(item.id); setIsModalVisible(false)}
                                    // changeStatusSingleTodo(item.id, "Trash")
                                    }>
                                Delete Forever
                            </button>
                            <button onClick={()=> {changeStatusSingleTodo(item.id, "To Do");setIsModalVisible(false)}}>
                                Move Back To To Do
                            </button>                    
                        
                        </div>
                    )}
            </div>

                            
        </div>)
}