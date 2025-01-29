import React from 'react';


const Auth = (Wrap) => {
    return ({ isAuth, ...props }) => {
        if (!isAuth) {
            return <p>Access denied.</p>;
        }
        return <Wrap {...props} />;
    };
};



export default Auth;
