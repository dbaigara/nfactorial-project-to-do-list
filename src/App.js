import "./App.css";
import { useState } from "react";
import HEADER from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import SingleToDo from "./components/SingleToDo";
import {v4 as uuidv4} from "uuid"; 
import FilteredMenu from "./components/MainContent/FilteredMenu";
import Menu from "./components/MainContent/Menu"


function App() {


  const [activeStatus, setActiveStatus] = useState("To Do");
  const [todoList, setToDoList] = useState([
    {id: uuidv4(), name: "write essay", status: "To Do"},
    {id: uuidv4(), name: "go to gym", status: "To Do"},
    {id: uuidv4(), name: "buy one way ticket", status: "Done"},
    {id: uuidv4(), name: "buy one way", status: "Trash"},
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
  itemToTrash.status = "Trash";
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
    

    {/* <button onClick={()=>changeStatus("To Do")}>
      <p>To Do</p>
    </button>

    <button onClick={()=>changeStatus("Done")}>
      <p>Done</p>
    </button>

    <button onClick={()=>changeStatus("Trash")}>
      <p>Trash</p>
    </button> */}


    <h3 className="mt-5">< MainContent activeStatus={activeStatus} changeStatus={changeStatus}/>
      {/* {activeStatus === "To Do" ? "To Do" : activeStatus === "Done" ? "Done" : "Trash"} */}
    </h3>

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
