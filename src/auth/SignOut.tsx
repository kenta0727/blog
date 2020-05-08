import React from 'react'
import '../App.css'

import { CognitoUserPool } from "amazon-cognito-identity-js"
import awsConfiguration from '../awsConfiguration'

const userPool = new CognitoUserPool({
  UserPoolId: awsConfiguration.UserPoolId,
  ClientId: awsConfiguration.ClientId,
})

const SignOut: React.FC = () => {
  const signOut = () => {
    const cognitoUser = userPool.getCurrentUser()
    if (cognitoUser) {
      cognitoUser.signOut()
      localStorage.clear()
      console.log('signed out')
    } else {
      localStorage.clear()
      console.log('no user signing in')
    }
  }

  return (
    <div className="SignOut">
      <div style={{ width: '50%', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'left' }}>SignOut</h1>
        <button
          onClick={signOut}
          style={{
            width: '100%',
            border: 'none',
            backgroundColor: '#dc143c',
            color: '#ffffff'
          }}
        >
          Sign Out
        </button>
      </div>
    </div>
  )
}

export default SignOut