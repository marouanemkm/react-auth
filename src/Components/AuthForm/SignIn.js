import React, { useRef, useState } from 'react';
import './AuthForm.css'
import { useSelector, useDispatch } from 'react-redux';
import {AuthContext } from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';


export default function SignIn() {

    const showModal = useSelector(state => state);

    const dispatch = useDispatch();
    const closeModal = () => {
        dispatch({
            type: "CLOSEMODAL"
        });
    };

    return (
        <div className={showModal.showSignIn ? "global-modal" : "hide-modal"}>
            <div onClick={closeModal} className="overlay"></div>
            <div className="container-modal">
                <form className="form-auth">
                    <h2>Connexion</h2>
                    <label htmlFor="mail">Votre mail :</label>
                    <input type="email" htmlFor="signin-mail" required />
                    <label htmlFor="psw">Votre mot de passe :</label>
                    <input type="password" id="signin-psw" required />
                    <button className="btn-sign">Se connecter</button>
                </form>
                <button onClick={closeModal} className="btn-close">X</button>
                <p className="bottom-help-txt">Vous n'avez pas encore de compte ?</p>
            </div>
        </div>
    );
};