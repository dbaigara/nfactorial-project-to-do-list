import React from "react";
import Menu from "./Menu";
import { useState } from "react";
import "./index.css"
import SingleToDo from "../SingleToDo";


export default function MainContent({ activeStatus, changeStatus, newTodoText, setNewTodoText, addToTodo, setIsAddModalVisible, isAddModalVisible , changeStatusSingleTodo, removeForever, isModalVisible, setIsModalVisible, todoList, setTodoList, filteredTodos }) {

  // const [isAddModalVisible, setIsAddModalVisible] = useState(false);

  // const [newTodoText, setNewTodoText] = useState(""); 

  // const addToTodo = ()=> {
  //   console.log(newTodoText);
  //   setIsAddModalVisible(false);
  // }

  return (
    <div className="container">
      <div className="d-flex justify-content-between ">

        <div className="d-flex mt-2">
          < Menu changeStatus={changeStatus}/>
        </div>

        <div className="addModalWindow">
          <button className="button" onClick={()=>setIsAddModalVisible(!isAddModalVisible)}>
            <p className="button-text">+</p></button>
          {isAddModalVisible && ( 
            <div className="modal">
              <p className="modal-add-new-to-do">Add New To Do</p>
              < textarea onChange={(e)=>setNewTodoText(e.target.value) } className="modal-textarea" placeholder={"Your text"} />
              <button onClick={() => addToTodo(newTodoText)} className="modal-addbutton">Add</button>
            </div>
          )}
        </div>

      </div>
      
      {/* title */}
      <h3 className="mt-5"><p className="active-status"> {activeStatus === "To Do" ? "To Do" : activeStatus === "Done" ? "Done" : "Trash"}</p>
      </h3>

      <div className="line mt-4 mb-4"></div>   
        
      {filteredTodos.map((item, _i)=> {
        return <SingleToDo name={item.name}
        item={item} 
        key={_i} 
        changeStatusSingleTodo={changeStatusSingleTodo}
        removeForever={removeForever}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        todoList={todoList} setTodoList={setTodoList}
      />
      }
      // (<SingleToDo name={item.name}
      //             item={item} 
      //             key={_i} 
      //             changeStatusSingleTodo={changeStatusSingleTodo}
      //             removeForever={removeForever}
      //             isModalVisible={isModalVisible}
      //             setIsModalVisible={setIsModalVisible}
      //             todoList={todoList} setTodoList={setTodoList}
      //           />
      //         )
      )}
    </div>
  );
}
