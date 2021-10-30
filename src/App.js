import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Order from './pages/Order/Order';
import Login from './pages/Login/Login';
import AuthProvider from './pages/AuthProvider/AuthProvider';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Header from './pages/Home/Header/Header';
import MyOrders from './pages/MyPackage/MyPackage';
import ManagePackage from './pages/ManagePackage/ManagePackage';
import AddNewPackage from './pages/AddNewPackage/AddNewPackage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <PrivateRoute path='/order/:id'>
            <Order />
          </PrivateRoute>
          <PrivateRoute path='/mypackage'>
            <MyOrders />
          </PrivateRoute>
          <PrivateRoute path='/manage'>
            <ManagePackage />
          </PrivateRoute>
          <PrivateRoute path='/addpackage'>
            <AddNewPackage />
          </PrivateRoute>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
