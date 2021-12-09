import React from 'react';
import SignUp from '../../Components/AuthForm/SignUp';
import SignIn from '../../Components/AuthForm/SignIn';
import Navbar from "../../Components/Navbar/Navbar";
import './Home.css';

export default function Home() {
    return (
        <div className="global-container">
            <Navbar />
            <div className="content-container">
                <h1>Bienvenue sur le site</h1>
                <p>Authentifiez-vous pour accéder au fonctionnalitées</p>
            </div>
            <SignUp />
            <SignIn />
        </div>
    );
};