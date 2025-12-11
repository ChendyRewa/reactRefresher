import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from  "./components/Header";
import ResBody from "./components/ResBody";


const AppLayout=()=>{

    return (<div className="app">
        <Header/>
        <ResBody/>
    </div>)
}

const reactRoot=ReactDOM.createRoot(document.getElementById('root'));                         
reactRoot.render(<AppLayout/>)