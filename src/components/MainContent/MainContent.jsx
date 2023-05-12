import React from "react";
import Menu from "./Menu";
import { useState } from "react";
import "./index.css"


export default function MainContent({activeStatus,  changeStatus}) {

  const [isAddModalVisible, setIsAddModalVisible] = useState(false);

  return (
    <div className="container">
      <div className="d-flex justify-content-between ">

        <div className="d-flex mt-2">
          < Menu changeStatus={changeStatus}/>
        </div>

        <div className="">
          <button className="button" onClick={()=>setIsAddModalVisible(!isAddModalVisible)}>
            <p className="button-text">+</p></button>
          {isAddModalVisible && ( 
            <div className="modal">
              <p className="modal-add-new-to-do">Add New To Do</p>
              {/* <AddNewTask /> */}
              < textarea className="modal-textarea" defaultValue={"Your text"} />
              <button className="modal-addbutton">Add</button>
            </div>
          )}
        </div>

      </div>
      
    </div>
  );
}
