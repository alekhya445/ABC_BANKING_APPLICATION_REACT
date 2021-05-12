// import React from 'react';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

//import Home from './Components/Home'

//import './App.css';

const Logout = (props) => {
    let history = useHistory();

    useEffect(() => {
        let user = sessionStorage.getItem("user");
        props.history.push(`/`);
        console.log(user);
    }, []);

    return (

       
        <div>
            <h1>You have been LoggedOut Succesfullyy!!!!!!!!</h1>
            <h2>Have A Good DAAY******!!!!!!!!</h2>
        </div>
    )


}
export default Logout;

