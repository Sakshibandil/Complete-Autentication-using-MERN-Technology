
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from './ContextProvider/Context';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


const Dashboard = () => {

  const {Logindata, setLogindata} = useContext(LoginContext);

  const [data,setdata] = useState(false);

  console.log(Logindata.validuserone)

    const history = useNavigate();



const Dashboardvalid = async()=>{
    let token = localStorage.getItem("usersdatatoken");
   // console.log(token)
    const res = await fetch("/validuser", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token
        }
      });
      
   const data = await res.json();
   if(data.status === 401 || !data){
   // console.log("error page redirect")
   history("*")
   }else{
    console.log("user verified");
   setLogindata(data)
   history("/dash")
   }
}

useEffect(()=>{
  setTimeout(()=>{
    Dashboardvalid();
    setdata(true)

 },2000)
},[])

return (
  <>
      {
          data ? <div style={{display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src="./m2.png" style={{ width: "200px", marginTop: 20 }} alt="" />
              <h1>User Email:{Logindata ? Logindata.validuserone.email : ""}</h1>
          </div> : <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh" }}>
              Loading... &nbsp;
              <CircularProgress />
          </Box>
      }

  </>

)
}

export default Dashboard;

