import React from 'react';
import Auth from './Auth'; 
import User from './user'; 
import Admin from './Admin';
import Auth1 from './Auth1';
const Authorized = Auth(User);
const Auth2 =Auth1(Admin);

const App = () => {
  const user = { name: "Danista" }; 
  const isAuth = false;  

  return (
    <div>
      <Authorized isAuth={isAuth} user={user} />
      <Auth2  isAuth={isAuth} user={user}/>
    </div>
  );
};

export default App;
