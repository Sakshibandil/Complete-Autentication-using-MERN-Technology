import React from 'react';
import "./mix.css"
import {NavLink, useNavigate} from "react-router-dom"
import { useState } from 'react';

const Login = () => {
 
   const[passshow, setpassshow]=useState(false);

   const[inpval, setInpval]= useState({
    email: "",
    password: "",
});

const history = useNavigate();


const  setval =(e)=>{
    //console.log(e.target.value);
    const {name, value}=e.target;

    setInpval(()=>{
        return {
            ...inpval,
            [name]:value
        }

    })

}

const loginuser = async (e)=>{
    e.preventDefault();

    const{email, password}= inpval;

    if(email===""){
        alert("please enter your email")
    }else if (!email.includes("@")){
        alert("please enter valid email")
    }else if(password===""){
        alert(" enter your password")
    }else if(password.length <6){
        alert("password must be of 6 char")
    }else{
       // console.log("user login successfully")

       const data = await fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    });
    
    

    const res = await data.json();
            console.log(res);

              if (res.status === 201) {
                localStorage.setItem("usersdatatoken", res.result.token)
                history("/dash")
                 setInpval({ ...inpval, email: "", password: "" });
             }
        }

   
}
  return (
    <>
    <section>
        <div className="form_data">
            <div className="form_heading">
                <h1>Welcome Back, Log In</h1>
                <p>Hey, we are glad that you are back. please log in.</p>
            </div>
            <form>
                <div className="form_input">
                    <label htmlFor="email">Email</label>
                    <input type="email"  value={inpval.email} onChange={setval} name="email" id="email" placeholder='Enter your email address'/>
                </div>
                <div className="form_input">
                    <label htmlFor="password">Password</label>
                    <div className="two">
                    <input type={!passshow?"password":"text"}  value={inpval.password} onChange={setval} name="password" id="password" placeholder='Enter your Password'/>
                    <div className="showpass"onClick={()=>setpassshow(!passshow)}>
                        {!passshow? "Show":"Hide"}
                    </div>
                    </div>
                </div>
                <button className='btn' onClick={loginuser}>Log In</button>
                <p>Don't have an account? <NavLink to="/register">Sign Up</NavLink></p>
            </form>
        </div>
    </section>
      
    </>
  );
}


export default Login;
