import React from 'react';
import './App.css';
import Main from "./views/Main";
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";


const App = () => {
    // const fetchData = async () => {
    //     try {
    //         const data = await fetch('http://localhost:5000/');
    //         console.log('res', data);
    //     } catch (err) {
    //         throw new Error(err)
    //         // console.log(err);
    //     }
    // }
    //
    // useEffect(() => {
    //     fetchData();
    // }, [])

    return (
        <Router>
            <div>
                <Navbar/>
                {/*<Sidebar/>*/}
                <Main/>
            </div>
        </Router>

    )


    return (
        <p>xD</p>
    );
}

export default App;

