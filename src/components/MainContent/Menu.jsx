import { useState } from "react";
import FilteredMenu from "./FilteredMenu";
// import "./FilteredMenu.css";


export default function Menu() {
    
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

    return (
        <>
        <div className="menu__wrapper mt-2 ">
            <div className="filteredMenu__wrapper d-flex justify-content-between">
                {menu.map((item, index) => {
                    return <FilteredMenu key = {index} name = {item.name} bool={item.isActive} handleClick={handleClick} />
                })}
            </div>
        </div>
        </>
    )
}