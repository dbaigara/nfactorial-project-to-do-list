import { React } from "react";
import './FilteredMenu.css'

export default function FilteredMenu(props){
    const {name, bool, handleClick} = props;

    return (  
        <>
            <button onClick={()=>handleClick(name)} className={bool ? "btn-menu btn-menu-active" : "btn-menu"}>
                {name}
            </button>
        </>
    );
}