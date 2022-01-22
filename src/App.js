import React from "react";
import "./style/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "./router/Home";
import Categories from "./router/Categories";
import Register from "./router/Register";
import Login from "./router/Login";
import Detail from "./router/Detail";
import Nofound from "./router/Nofound";
import Cart from "./router/Cart";
import Dashboard from "./router/Dashboard/Dashboard";
import DashTransactions from "./router/Dashboard/DashTransactions";
import DashSettings from "./router/Dashboard/DashSettings";
import SuccessCheck from "./router/SuccessCheck";
import DashAcc from "./router/Dashboard/DashAcc";
import DashTransDetail from "./router/Dashboard/DashTransDetail";

const App = () => {
   return (
      <>
         <Router>
            <Switch>
               <Route path="/" exact component={Home} />
               <Route path="/categories" component={Categories} />
               <Route path="/register" component={Register} />
               <Route path="/login" component={Login} />
               <Route path="/detail" component={Detail} />
               <Route path="/cart" component={Cart} />
               <Route path="/success" component={SuccessCheck} />
               <Route path="/dashboard" component={Dashboard} />
               <Route path="/dashboard-transactions" component={DashTransactions} />
               <Route path="/dashboard-settings" component={DashSettings} />
               <Route path="/dashboard-account" component={DashAcc} />
               <Route path="/dashboard-transactions-details" component={DashTransDetail} />
               <Route path="/nofound" component={Nofound} />

               <Redirect to="/nofound" />
            </Switch>
         </Router>
      </>
   );
};

export default App;
