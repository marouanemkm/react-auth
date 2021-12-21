const INITIAL_STATE = {
    showSignIn: false,
    showSignUp: false,
};

export default function modalReducer(state= INITIAL_STATE, action) {

    switch(action.type) {
        case "TOGGLEIN" :
            if(state.showSignIn) {
                return {
                    ...state,
                    showSignIn: false,
                    showSignUp: false,
                };
            } else {
                return {
                    ...state,
                    showSignIn: true,
                    showSignUp: false,
                };
            };
        case "TOGGLEUP" :
            if(state.showSignUp) {
                return {
                    ...state,
                    showSignIn: false,
                    showSignUp: false,
                };
            } else {
                return {
                    ...state,
                    showSignIn: false,
                    showSignUp: true,
                };
            };
        case "CLOSEMODAL" :
            return {
                ...state,
                showSignIn: false,
                showSignUp: false,
            }
        default :
        return state;
    };
};