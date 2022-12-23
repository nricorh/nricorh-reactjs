import React from "react";
import Content from "./StylingComponent/content";
import Head from "./StylingComponent/head";
import HeaderNavbar from "./StylingComponent/navbar";

export default class StylingComponent extends React.Component{

    render() {
        return(
            <div>
                <HeaderNavbar />
                <Head />
                <Content />
            </div>
        )
    }
}
