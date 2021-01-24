import React from 'react';
import './App.css';
import Main from "./views/Main";
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/Navigation/Navbar/Navbar";
import Navigation from "./components/Navigation/Navigation";


const App = () => {

    return (
        // <Router>
        //     <div>
        //         {/*<Navbar/>*/}
        //         {/*<Sidebar/>*/}
        //         {/*<Navigation/>*/}
        //         {/*<Main/>*/}
        //     </div>
        // </Router>
        <Navigation/>
    )
}

export default App;

