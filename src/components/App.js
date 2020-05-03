// import React from 'react';
// import { BrowserRouter, Route, Link } from 'react-router-dom';
// import Login from './Login'
// import Header from './Header'
// import Registration from './Registration'
// import Blog from './Blog_display'
// import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';


// const HOME = () => {
//   return (
//     //ログイン、会員登録画面
//     <div>
//       {/* Linkから自動的にlinkされるようになっている */}
//       <Header />
//       <Link to="/Login">
//       <Button variant="raised">
//       ログインする
//       </Button> 
//         </Link>
//       <Link to="/registration">
//       <Button variant="raised">
//       初めての方はこちら
//       </Button>
//       </Link>
//     </div>
//   );  
// };

// const registration_click = () => {
//   return (
//     <div>
//       <Header />
//       <Registration />
//     </div>
//   );
// };

// const Login_click = () => { 
//   return (
//     <div>
//       <Header />
//       <Login />
//     </div>
//   )
// }

// const Blog_login = () => { 
//   return (
//     <div>
//       <Header />
//       <Blog />
//     </div>
//   )
// }

// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//         <div>
//           <Route path="/" exact component={HOME} />
//           <Route path="/registration" component={registration_click} />
//           <Route path="/login" component={Login_click} />
//           <Route path="/Blog_display" component={Blog_login} />
//         </div>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default App;

import React, { useEffect, useReducer } from 'react';

import API, { graphqlOperation } from '@aws-amplify/api';
import PubSub from '@aws-amplify/pubsub';

import { createTodo } from '../graphql/mutations';
import { listTodos } from '../graphql/queries';
import { onCreateTodo } from '../graphql/subscriptions';

import awsconfig from '../aws-exports';


API.configure(awsconfig);
PubSub.configure(awsconfig);

// Action Types
const QUERY = 'QUERY';
const SUBSCRIPTION = 'SUBSCRIPTION';

const initialState = {
  todos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case QUERY:
      return {...state, todos: action.todos};
    case SUBSCRIPTION:
      return {...state, todos:[...state.todos, action.todo]}
    default:
      return state;
  }
};

async function createNewTodo() {
  const todo = { name: "Use AWS AppSync", description: "RealTime and Offline" };
  await API.graphql(graphqlOperation(createTodo, { input: todo }));
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function getData() {
      const todoData = await API.graphql(graphqlOperation(listTodos));
      dispatch({ type: QUERY, todos: todoData.data.listTodos.items });
    }
    getData();

    const subscription = API.graphql(graphqlOperation(onCreateTodo)).subscribe({
      next: (eventData) => {
        const todo = eventData.value.data.onCreateTodo;
        dispatch({ type: SUBSCRIPTION, todo });
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="App">
      <button onClick={createNewTodo}>Add Todo</button>
      <div>
        {state.todos.length > 0 ? 
          state.todos.map((todo) => <p key={todo.id}>{todo.name} : {todo.description}</p>) :
          <p>Add some todos!</p> 
        }
      </div>
    </div>
  );
}

export default App;
