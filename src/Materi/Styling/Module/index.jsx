import React from "react";
import style from "./index.module.css";

class Module extends React.Component{
    render()  {
        return(
            <div>
                <button className={`${style.btn} ${style.info}`}>This Button</button>
            </div>
        )
    }
}

export default Module;