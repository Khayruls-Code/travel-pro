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
          <PrivateRoute exact path='/order/:id'>
            <Order />
          </PrivateRoute>
          <PrivateRoute exact path='/mypackage'>
            <MyOrders />
          </PrivateRoute>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
