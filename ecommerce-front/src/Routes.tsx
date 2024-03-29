import React from "react"
import { HashRouter, Route, Switch } from "react-router-dom"
import AdminDashboard from "./components/admin/AdminDashboard"
import AdminRoute from "./components/admin/AdminRoute"
import PrivateRoute from "./components/admin/PrivateRoute"
import UserDashboard from "./components/admin/UserDashboard"
import AddCategory from './components/admin/AddCategory'
import AddProduct from "./components/admin/AddProduct"
import Home from "./components/core/Home"
import Shop from "./components/core/Shop"
import Signin from "./components/core/Signin"
import Signup from "./components/core/Signup"
import Product from './components/core/Product'
import Cart from './components/core/Cart'
import PaySuccess from './components/core/Success'
import Orders from "./components/admin/Orders"

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <PrivateRoute path="/user/dashboard" component={UserDashboard} />
        <AdminRoute path="/admin/dashboard" component={AdminDashboard} />
        <AdminRoute path="/create/category" component={AddCategory} />
        <AdminRoute path="/create/product" component={AddProduct} />
        <AdminRoute path='/admin/orders' component={Orders} />
        <Route path='/product/:productId' component={Product} />
        <Route path='/cart' component={Cart} />

        {/* 支付成功后的跳转页面 */}
        <Route path='/paysuccess' component={PaySuccess} />
      </Switch>
    </HashRouter>
  )
}

export default Routes
