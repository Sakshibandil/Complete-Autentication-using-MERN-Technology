import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <>
      <div className="container">
        <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
          <img src="/404page2.gif" alt="error" style={{ width: "100vw", marginBottom: 10, scrollBehavior: "smooth" }} />
          {/* <h1 className="mb-3">404 ERROR </h1> */}
          {/* <h2 className="mb-3">PAGE NOT FOUND</h2> */}
          <NavLink to="/" className="btn btn-primary" style={{ fontWeight: "bold"}}> GO BACK TO HOME PAGE </NavLink>
        </div>
      </div>
    </>
  )
}

export default Error
