import React from 'react';
//import './styles.css'

const  Dashboard=() =>{
  return <>
 


 
  <div className="navbar">
    <h1></h1>    </div>
    <div className="dropdown">
    <button className="tst">Admin<i className="fa fa-users"></i></button>
  
      <button className="dropbtn"><i className="fa fa-th"></i>     
      </button>
      <div className="dropdown-content hide">
        <a href="/Dashboard"><i font-size="8px" className="fa fa-tachometer"></i>   Dashboard Module</a>        
          <a href='/settings'><i font-size="8px" className="fa">&#xf0e3;</i>  Repair Module</a>
        <a href='/Companymodule'><i font-size="8px" className="fa">&#xf044;</i>  Componay Module</a>
        <a href='/userModule'><i font-size="8px" className="fa">&#xf0c0;</i> userModule</a>
        
    </div></div>
 
 
      
      <>
  <div className="flex items-center justify-center absolute top-28 right-36 ">
    <div className="flex border-2 border-[#c6c6c6] rounded">
      <input
        type="text"
        className="px-2 py-2 w-32"
        placeholder="Repair ID..."
      />
      <button className="search px-2   border-l   " style={{ color: "white"  }}> 
        Search
      </button>
    </div>
  </div>
  <section className="text-white body-font">
    <div className="container px-16 py-4 mx-auto">
      <div className="flex flex-col  w-full mb-20 ">
        <h1 className="sm:text text-2xl font-medium title-font  " style={{ color: "#51d8af" }}>
          Classic Dashboard
        </h1>
        <h1 style={{ color: "#c6c6c6" }}>Creativity Crafted Dashboard for your needs</h1>
      </div>
      <div className="flex  -m-4 text-center">
        <div className="p-8 md:w-1/4 sm:w-1/2 w-full">
          <div className="border-2 border-[#c6c6c6] px-2 py-4 rounded-lg">
            <svg
              fill="none"
              stroke="#51d8af"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="text-[#51D8af]   left-24 w-8 h-8  "
              viewBox="0 0 24 24"
            >
              <path d="M8 17l4 4 4-4m-4-5v9" />
              <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29" />
            </svg>
            
            <h2 className="title-font text-center py-0 px-6 font-medium  text-3xl text-white ">
              27
            </h2>
           
            <h1 style={{ color: "#c6c6c6" }}>Pending Repairs</h1>
          </div>
        </div>
        <div className="p-8 md:w-1/4 sm:w-1/2 w-full">
          <div className="border-2 border-[#c6c6c6] px-2 py-4 rounded-lg">
            <svg
              fill="none"
              stroke="#51d8af"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="text-[#51D8af] left-24 w-8 h-8 "
              viewBox="0 0 24 24"
            >
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
              <circle cx={9} cy={7} r={4} />
              <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
            </svg>
            <h2 className="title-font font-medium text-3xl text-gray-100">
              1.3K
            </h2>
            <h1 style={{ color: "#c6c6c6" }}>Total Users</h1>
          </div>
        </div>
        <div className="p-8 md:w-1/4 sm:w-1/2 w-full">
          <div className="border-2 border-[#c6c6c6] px-2 py-4 rounded-lg">
            <svg
              fill="none"
              stroke="#51d8af"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="text-[#51D8af] left-24 w-8 h-8"
              viewBox="0 0 24 24"
            >
              <path d="M3 18v-6a9 9 0 0118 0v6" />
              <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
            </svg>
            <h2 className="title-font font-medium text-3xl text-gray-100">
              74
            </h2>
            <h1 style={{ color: "#c6c6c6" }}>Total Repairs</h1>
          </div>
        </div>
        <div className="p-8 md:w-1/4 sm:w-1/2 w-full">
          <div className="border-2 border-[#c6c6c6] px-2 py-4 rounded-lg">
            <svg
              fill="none"
              stroke="#51d8af"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="text-[#51D8af] left-24 w-8 h-8"
              viewBox="0 0 24 24"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <h2 className="title-font font-medium text-3xl text-gray-100">
              46
            </h2>
            <h1 style={{ color: "#c6c6c6" }}>Complete Repairs</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
</>



<nav className="sidebar close ">
  <header>
    <div className="relative  ...">
      <div className="absolute left-0 ..." />
      <img src="/public/MoRIS-1 (1).png" alt="" />
    </div>
    <i className="bx bx-chevron-right toggle" />
  </header>
  <div className="menu-bar">
    <div className="menu">
      <ul className="menu-links">
        <li className="nav-link">
          <a href="/dashboard">
            <i className="bx bx-home-alt icon" />
            <span className="text nav-text">Dashboard</span>
          </a>
        </li>
        <li className="nav-link">
          <a href="/tabs">
            <i className="bx bx-bar-chart-alt-2 icon" />
            <span className="text nav-text">Pending Repairs</span>
          </a>
        </li>
        <li className="nav-link">
          <a href="/settings">
            <i className="bx bx-bell icon" />
            <span className="text nav-text">Repair History</span>
          </a>
        </li>
        <li className="nav-link">
          <a href="/users">
            <i className="bx bx-pie-chart-alt icon" />
            <span className="text nav-text">Repair Form</span>
          </a>
        </li>
        <li className="nav-link">
          <a href="/example">
            <i className="bx bx-heart icon" />
            <span className="text nav-text">Repair sets</span>
          </a>
        </li>
        <div className="bottom-content">
          <li className="">
            <a href="https://symmis.symcloud.net/auth/login/">
              <i className="bx bx-log-out icon" />
              <span className="text nav-text">Logout</span>
            </a>
          </li>
        </div>
      </ul>
    </div>
  </div>
</nav>



<footer>
  <div className="text-center absolute inset-x-0 bottom-0 h-6 ">
    <span>© 2022 Copyright:</span>
    <a
      className="text-black font-semibold"
      href="https://symmis.symcloud.net/auth/login/"
    >
      SymCloud. All rights reserved.
    </a>
  </div>
</footer>

    </>
  ;
  
}



export default Dashboard;
