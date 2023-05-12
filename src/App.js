import "./App.css";
import { useState } from "react";
import HEADER from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import SingleToDo from "./components/SingleToDo";
import {v4 as uuidv4} from "uuid"; 
import FilteredMenu from "./components/MainContent/FilteredMenu";


function App() {


  const [activeStatus, setActiveStatus] = useState("To Do");
  const [todoList, setToDoList] = useState([
    {id: uuidv4(), name: "write essay", status: "todo"},
    {id: uuidv4(), name: "go to gym", status: "todo"},
    {id: uuidv4(), name: "buy one way ticket", status: "done"},
    {id: uuidv4(), name: "buy one way", status: "trash"},
  ]);

const [toDO, setToDo] = useState("");
const [mainContent, setMainContent] = useState("");
const [footer, setFooter] = useState("");


const changeStatus = (status) => {
  setActiveStatus(status);

}

const filteredTodos = todoList.filter((item)=> item.status === activeStatus);
// setToDoList(newToDoList);

const changeStatusToTrash = (id)=> {
  const itemToTrash = todoList.find((item)=> item.id === id);
  itemToTrash.status = "trash";
  const newToDoListWithoutItem = todoList.filter((item) => item.id !== id);
  setToDoList([...newToDoListWithoutItem, itemToTrash]);
  // const newToDoList = todoList.filter((item) => {
  //     if(item.id === id){
  //         return {...item, status: "trash"};
  //     }
  //     return item;
  // });
  // setToDoList(newToDoList)
}

const [menu, setMenu] = useState([
  {
      name: "To Do",
      isActive: true,
  },
  {
      name: "Done",
      isActive: false,
  },
  {
      name: "Trash",
      isActive: false,
  },
]);
const handleClick = (itemName) => {
  const newMenu = menu.map((item)=>{
      if(item.name === itemName){
          item.isActive = true;
      } else {
          item.isActive = false;
      }
      return item;
  })
  setMenu(newMenu);
}
const [isAddModalVisible, setIsAddModalVisible] = useState(false);

  return (
    <div className="container mt-5">
      <div className="mb-5">
        <HEADER />
      </div>
      <div className="mb-5 mt-5 pt-5">
        {/* <MainContent /> */}
      </div>
{/* ------------------------------------- */}

{/* ------------------------------------- */}
    

    <button onClick={()=>changeStatus("todo")}>
      {/* onClick={()=>changeStatus(activeStatus === "todo" ? "done" : "todo")}> */}
      <p>To Do</p>
    </button>

    <button onClick={()=>changeStatus("done")}>
      <p>Done</p>
    </button>

    <button onClick={()=>changeStatus("trash")}>
      <p>Trash</p>
    </button>

    
    <h3>{activeStatus === "todo" ? "To Do" : activeStatus === "done" ? "Done" : "Trash"}</h3>

    {filteredTodos.map((item, _i)=> (
      <SingleToDo 
        item={item} 
        key={_i} changeStatusToTrash={changeStatusToTrash}
      />
    ))}

  
{/* ------------------------------------- */}
      <div className="pt-5">
        <Footer />
      </div>
    </div>
  );
}

export default App;
