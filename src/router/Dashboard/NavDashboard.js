import React from "react";
import { NavLink } from "react-router-dom";

const NavDashboard = () => {
   const monitor = window.innerWidth < 800;
   const monitorK = window.innerWidth < 500;
   const dashClick = (e) => {
      e.target.classList.toggle("text-decoration-underline");
   };

   const lokasih = window.location.pathname === "/dashboard-transactions-details";

   return (
      <>
         <div>
            <div className="border-end sidenav h-100 bg-light" id="sidebar">
               <div className="text-center">
                  <img src="images/dashboard-store-logo.svg" alt="" className={monitor ? "mt-5 mb-2" : "mt-4 mb-2"} />
               </div>
               <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                     <NavLink exact to="/dashboard" className="list-group-item" onMouseOver={dashClick} onMouseOut={dashClick}>
                        Dashboard
                     </NavLink>
                  </li>
                  <li className="list-group-item">
                     <NavLink exact to="/dashboard-product" className="list-group-item" onMouseOver={dashClick} onMouseOut={dashClick}>
                        My Product
                     </NavLink>
                  </li>
                  <li className="list-group-item">
                     <NavLink exact to="/dashboard-transactions" className={lokasih ? "list-group-item active" : "list-group-item"} onMouseOver={dashClick} onMouseOut={dashClick}>
                        Transactions
                     </NavLink>
                  </li>
                  <li className="list-group-item">
                     <NavLink exact to="/dashboard-settings" className="list-group-item" onMouseOver={dashClick} onMouseOut={dashClick}>
                        Settings
                     </NavLink>
                  </li>
                  <li className="list-group-item">
                     <NavLink exact to="/dashboard-account" className="list-group-item" onMouseOver={dashClick} onMouseOut={dashClick}>
                        Account
                     </NavLink>
                  </li>
                  <li className="list-group-item" style={monitorK ? { marginTop: "140px" } : { marginTop: "250px" }}>
                     <NavLink exact to="/" className="list-group-item" onMouseOver={dashClick} onMouseOut={dashClick}>
                        Sign Out
                     </NavLink>
                  </li>
               </ul>
            </div>
         </div>
      </>
   );
};

export default NavDashboard;
