import React, {useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';


export default function PrivateRoute({component: Component, ...rest}) {

    const {currentUser} = useContext(AuthContext);

    return (
        <div>
            <Route
                {...rest}
                render={() => {
                    return currentUser ? <Component /> : <Redirect to='/' />
                }}
            >
            </Route>
        </div>
    );
};