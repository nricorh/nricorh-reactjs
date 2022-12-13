import React from "react";
import ClassComponent from "./Pembahasan/ClassComponent";
import FunctionalComponent from "./Pembahasan/FunctionalComponent";
import { NameComponent, GenderComponent, YearComponent } from "./Task/TaskComponent";


export default class Komponen extends React.Component{

    render() {
        return(
            <div>
                <ClassComponent nama = "Enrico"  />
                <FunctionalComponent />
                <NameComponent nama = "Risnanda" />
                <GenderComponent gender= "Laki-Laki" />
                <YearComponent />
            </div>
        )
    }
}