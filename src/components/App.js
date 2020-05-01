import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Login from './Login'
import Header from './Header'
import Registration from './Registration'
import Blog from './Blog_display'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const styles = {
  card: {
    margin: 48,
    height: 128
  },
};


const HOME = () => {
  return (
    //ログイン、会員登録画面
    <div>
      {/* Linkから自動的にlinkされるようになっている */}
      <Header />
      <Link to="/Login">
      {/* <Button variant="raised"> */}
      ログインする
      {/* </Button> */}
        </Link>
      <Link to="/registration">
      {/* <Button variant="raised"> */}
      初めての方はこちら
      {/* </Button> */}
      </Link>
    </div>
  );  
};

const registration_click = () => {
  return (
    <div>
      <Header />
      <Registration />
    </div>
  );
};

const Login_click = () => { 
  return (
    <div>
      <Header />
      <Login />
    </div>
  )
}

const Blog_login = () => { 
  return (
    <div>
      <Header />
      <Blog />
    </div>
  )
}

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={HOME} />
          <Route path="/registration" component={registration_click} />
          <Route path="/login" component={Login_click} />
          <Route path="/Blog_display" component={Blog_login} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
