import React from 'react'
import '../App.css'

// import AWS from 'aws-sdk'
import {
  CognitoUserPool,
  // CognitoUserAttribute,
  CognitoUser,
  AuthenticationDetails
} from "amazon-cognito-identity-js"
import awsConfiguration from '../awsConfiguration'

const userPool = new CognitoUserPool({
  UserPoolId: awsConfiguration.UserPoolId,
  ClientId: awsConfiguration.ClientId,
})

const SignIn: React.FC = () => {
  const [email, setEmail] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const changedEmailHaldler = (e: any) => setEmail(e.target.value)
  const changedPasswordHandler = (e: any) => setPassword(e.target.value)

  const signIn = () => {
    const authenticationDetails = new AuthenticationDetails({
      Username : email,
      Password : password
    })
    const cognitoUser = new CognitoUser({
      Username: email,
      Pool: userPool
    })
    
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        console.log('result: ' + result)
        const accessToken = result.getAccessToken().getJwtToken()
        console.log('AccessToken: ' + accessToken)
        setEmail('')
        setPassword('')
      },
      onFailure: (err) => {
        console.error(err)
      }
    })
  }

  return (
    <div className="SignIn">
      <div style={{ width: '50%', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'left' }} >SingIn</h1>
        <input
          type="text"
          placeholder='email'
          onChange={changedEmailHaldler}
          style={{ width: '100%' }}
        />
        <input
          type="text"
          placeholder='password'
          onChange={changedPasswordHandler}
          style={{ width: '100%' }}
        />
        <button
          onClick={signIn}
          style={{
            width: '100%',
            border: 'none',
            backgroundColor: '#dc143c',
            color: '#ffffff'
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  )
}

export default SignIn