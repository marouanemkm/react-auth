import React, {useContext} from 'react';
import '../Home/Home.css';
import SignUp from '../../Components/AuthForm/SignUp';
import SignIn from '../../Components/AuthForm/SignIn';
import Navbar from "../../Components/Navbar/Navbar";
import {AuthContext} from '../../context/AuthContext';


export default function PrivateHome() {

    const {logout} = useContext(AuthContext);

    return (
        <div clazssName="global-container">
            <Navbar />
            <SignUp />
            <SignIn />
            <div className="content-container">
                <h1>Voici votre compte privé</h1>
                <p>Amusez-vous bien !</p>
                <button onClick={logout} >Se déconnecter</button>
            </div>
        </div>
    );
};