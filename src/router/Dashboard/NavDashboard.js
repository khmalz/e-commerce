import React from "react";
import { NavLink } from "react-router-dom";
import dsl from "../../images/dashboard-store-logo.svg";

const NavDashboard = () => {
   const dashClick = (e) => {
      e.target.classList.toggle("text-decoration-underline");
   };

   return (
      <>
         <div className="border-end" id="sidebar-wrapper">
            <div className="text-center">
               <img src={dsl} alt="" className="my-4" />
            </div>
            <ul className="list-group list-group-flush">
               <li className="list-group-item">
                  <NavLink exact activeClassName="active" to="/dashboard" className="list-group-item" onMouseOver={dashClick} onMouseOut={dashClick}>
                     Dashboard
                  </NavLink>
               </li>
               <li class="list-group-item">
                  <NavLink exact activeClassName="active" to="/dashboard-product" className="list-group-item" onMouseOver={dashClick} onMouseOut={dashClick}>
                     My Product
                  </NavLink>
               </li>
               <li class="list-group-item">
                  <NavLink exact activeClassName="active" to="/dashboard-transactions" className="list-group-item" onMouseOver={dashClick} onMouseOut={dashClick}>
                     Transactions
                  </NavLink>
               </li>
               <li class="list-group-item">
                  <NavLink exact activeClassName="active" to="/dashboard-settings" className="list-group-item" onMouseOver={dashClick} onMouseOut={dashClick}>
                     Settings
                  </NavLink>
               </li>
               <li class="list-group-item">
                  <NavLink exact activeClassName="active" to="/dashboard-account" className="list-group-item" onMouseOver={dashClick} onMouseOut={dashClick}>
                     Account
                  </NavLink>
               </li>
               <li class="list-group-item">
                  <NavLink exact activeClassName="active" to="/" className="list-group-item" onMouseOver={dashClick} onMouseOut={dashClick}>
                     Sign Out
                  </NavLink>
               </li>
            </ul>
         </div>
      </>
   );
};

export default NavDashboard;
