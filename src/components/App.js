import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Login from './Login'
import Header from './Header'
import Registration from './Registration'
import Blog from './Blog'

const HOME = () => {
  return (
    //ログイン、会員登録画面
    <div>
       {/* Linkから自動的にlinkされるようになっている */}
      <Link to="/Login">
        <button>
          ログインする
        </button>
      </Link>
      <Link to="/registration">
        <button>
          初めての方はこちら
        </button>
      </Link>
    </div>
  );  
};

const registration_click = () => {
  return (
    <div>
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
          <Route path="/Blog"  component={Blog_login} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
