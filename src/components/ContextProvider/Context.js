import React, {createContext, useState} from 'react';

export const LoginContext = createContext("");

const Context = ( {children}) => {
    const [Logindata, setLogindata] = useState("")
  return (
    <>
    <LoginContext.Provider value ={{Logindata, setLogindata}}>

        {children}
    </LoginContext.Provider>

    </>
  );
}

export default Context;
