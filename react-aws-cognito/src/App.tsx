import React from 'react'
import './App.css'

// components
import SignUp from './auth/SignUp'
import Verification from './auth/Verification'
import SignIn from './auth/SignIn'
import SignOut from './auth/SignOut'

import { CognitoUserPool } from "amazon-cognito-identity-js"
import awsConfiguration from './awsConfiguration'

const userPool = new CognitoUserPool({
  UserPoolId: awsConfiguration.UserPoolId,
  ClientId: awsConfiguration.ClientId,
})

const App: React.FC = () => {

  const checkStatus = () => {
    console.log(userPool)
    console.log(localStorage)
  }

  const authentication = () => {
    const cognitoUser = userPool.getCurrentUser()
    if (cognitoUser) {
      return (
        <div className="authorizedMode">
          <SignOut />
        </div>
      )
    } else {
      return (
        <div className="unauthorizedMode">
          <SignUp />
          <Verification />
          <SignIn />
        </div>
      )
    }
  }

  return (
    <div className="App">
      <header style={{ height: '80px', backgroundColor: '#008080' }} />
      { authentication() }
      <div style={{ width: '50%', margin: '0 auto' }}>
        <button
          onClick={checkStatus}
          style={{
            width: '100%',
            border: 'none',
            backgroundColor: '#dc143c',
            color: '#ffffff'
          }}
        >
          CheckStatus
        </button>
      </div>
    </div>
  )
}

export default App
