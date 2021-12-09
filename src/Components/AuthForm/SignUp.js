import React, { useRef, useState, useContext } from 'react';
import './AuthForm.css'
import { useSelector, useDispatch } from 'react-redux';
import {AuthContext } from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';


export default function SignUp() {

    const [error, setError] = useState('');
    const history = useHistory();
    const { signup } = useContext(AuthContext);

    const showModal = useSelector(state => state);

    const dispatch = useDispatch();
    const closeModal = () => {
        dispatch({
            type: "CLOSEMODAL"
        });
    };

    // permet d'eviter de faire plusieurs useRef() et de mettre toutes les infos dans un tableau
    const inputs = useRef([]);
    const addInput = el => {
        if(el && !inputs.current.includes(el)) {
            inputs.current.push(el)
        };
    };

    async function handleSubmit(e) {
        e.preventDefault();

        if(inputs.current[1].value !== inputs.current[2].value) {
            setError("Les mots de passe ne sont pas identiques");
        };

        await signup(inputs.current[0].value, inputs.current[1].value);
        // history.push('/loggedHome');
        dispatch({
            type: "CLOSEMODAL"
        });

        inputs.current.forEach(inp => {
            inp.value = "";
        });
        setError('');
    };

    return (
        <div className={showModal.showSignUp ? "global-modal" : "hide-modal"}>
            <div onClick={closeModal} className="overlay"></div>
            <div className="container-modal">
                <form onSubmit={handleSubmit} className="form-auth">
                    <h2>Inscription</h2>
                    <label htmlFor="mail">Votre mail :</label>
                    <input type="email" ref={addInput} htmlFor="signup-mail" required />
                    <label htmlFor="psw">Votre mot de passe :</label>
                    <input type="password" ref={addInput} id="signup-psw" required />
                    <label htmlFor="psw-confirm">Confirmer le mot de passe :</label>
                    <input type="password" ref={addInput} id="psw-confirm" required />
                    <br />
                    {error}
                    <button className="btn-sign">Créer un compte</button>
                </form>
                <button onClick={closeModal} className="btn-close">X</button>
                <p className="bottom-help-txt">Vous avez déjà un compte ?</p>
            </div>
        </div>
    );
};