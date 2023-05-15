import "./App.css";
import { useState } from "react";
import HEADER from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import SingleToDo from "./components/SingleToDo";
import {v4 as uuidv4} from "uuid"; 

function App() {

  const [activeStatus, setActiveStatus] = useState("To Do");
  const [todoList, setToDoList] = useState([
    {id: uuidv4(), name: "write essay", status: "To Do"},
    {id: uuidv4(), name: "go to gym", status: "To Do"},
    {id: uuidv4(), name: "buy one way ticket", status: "Done"},
    {id: uuidv4(), name: "buy one way", status: "Trash"},
  ]);

const changeStatus = (status) => {
  setActiveStatus(status);
}

const filteredTodos = todoList.filter((item)=> item.status === activeStatus);
// setToDoList(newToDoList);

const changeStatusSingleTodo = (id, changedStatus)=> {
  const changedItem = todoList.find((item)=> item.id === id);
  changedItem.status = changedStatus;
  const newToDoListWithoutItem = todoList.filter((item) => item.id !== id);
  setToDoList([...newToDoListWithoutItem, changedItem]);
  // const newToDoList = todoList.filter((item) => {
  //     if(item.id === id){
  //         return {...item, status: "trash"};
  //     }
  //     return item;
  // });
  // setToDoList(newToDoList)
}


  return (
        <div className="container mt-5">
            <div className="mb-5">
              <HEADER />
            </div>
            <div className="mb-5 mt-5 pt-5 todos">
              <MainContent changeStatus={changeStatus}/>
           
              <h3 className="mt-5"><p className="active-status"> {activeStatus === "To Do" ? "To Do" : activeStatus === "Done" ? "Done" : "Trash"}</p>
              </h3>

              {filteredTodos.map((item, _i)=> (
                <SingleToDo 
                  item={item} 
                  key={_i} 
                  changeStatusSingleTodo={changeStatusSingleTodo}
                />
              ))}
            </div> 
          
            <div className="pt-5">
              <Footer />
            </div>
    </div>
  );
}

export default App;
