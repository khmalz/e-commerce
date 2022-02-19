import React from "react";
import "./style/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "./router/Home";
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
import DashTransDetailPen from "./router/Dashboard/DashTransDetailPen";
import Categories from "./router/Categories";
import SuccessRegister from "./router/SuccessRegister";
import DashProduct from "./router/Dashboard/DashProduct";
import DashProductDetail from "./router/Dashboard/DashProductDetail";
import DashTransDetailSuc from "./router/Dashboard/DashTransDetailSuc";

const App = () => {
   return (
      <>
         <Router>
            <Switch>
               <Route path="/" exact component={Home} />
               <Route path="/register" component={Register} />
               <Route path="/login" component={Login} />
               <Route path="/categories" component={Categories} />
               <Route path="/detail" component={Detail} />
               <Route path="/cart" component={Cart} />
               <Route path="/success-register" component={SuccessRegister} />
               <Route path="/success" component={SuccessCheck} />
               <Route path="/dashboard" component={Dashboard} />
               <Route path="/dashboard-transactions" component={DashTransactions} />
               <Route path="/dashboard-settings" component={DashSettings} />
               <Route path="/dashboard-account" component={DashAcc} />
               <Route path="/dashboard-transactions-details-pending" component={DashTransDetailPen} />
               <Route path="/dashboard-transactions-details-success" component={DashTransDetailSuc} />
               <Route path="/dashboard-product" component={DashProduct} />
               <Route path="/dashboard-product-detail" component={DashProductDetail} />
               <Route path="/nofound" component={Nofound} />

               <Redirect to="/nofound" />
            </Switch>
         </Router>
      </>
   );
};

export default App;
