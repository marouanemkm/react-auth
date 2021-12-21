import React, {useRef, useState, useContext} from 'react';
import './AuthForm.css'
import {useSelector, useDispatch} from 'react-redux';
import {AuthContext} from '../../context/AuthContext';
import {useHistory} from 'react-router-dom';


export default function SignIn() {

    const showModal = useSelector(state => state);
    const [error, setError] = useState('');
    const history = useHistory();
    const {login} = useContext(AuthContext);

    const dispatch = useDispatch();
    const closeModal = () => {
        dispatch({
            type: "CLOSEMODAL"
        });
    };

    const toggleSignUp = () => {
        dispatch({
            type: 'TOGGLEUP'
        });
    };

    const inputs = useRef([]);
    const addInput = el => {
        if(el && !inputs.current.includes(el)) {
            inputs.current.push(el)
        };
    };

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            await login(inputs.current[0].value, inputs.current[1].value);
            dispatch({
                type: "CLOSEMODAL"
            });
            history.push('/loggedhome');
        } catch {
            setError('Email ou mot de passe incorrect')
        };
    };

    return (
        <div className={showModal.showSignIn ? "global-modal" : "hide-modal"}>
            <div onClick={closeModal} className="overlay"></div>
            <div className="container-modal">
                <form onSubmit={handleSubmit} className="form-auth">
                    <h2>Connexion</h2>
                    <label htmlFor="mail">Votre mail :</label>
                    <input ref={addInput} type="email" htmlFor="signin-mail" required />
                    <label htmlFor="psw">Votre mot de passe :</label>
                    <input ref={addInput} type="password" id="signin-psw" required />
                    <br />
                    <h5 style={{textAlign: 'center', color: 'red', fontStyle: 'italic'}}>{error}</h5>
                    <button className="btn-sign">Se connecter</button>
                </form>
                <button onClick={closeModal} className="btn-close">X</button>
                <p onClick={toggleSignUp} className="bottom-help-txt">Vous n'avez pas encore de compte ?</p>
            </div>
        </div>
    );
};