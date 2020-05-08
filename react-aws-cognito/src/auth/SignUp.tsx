import React from 'react'
import '../App.css'

import {
  CognitoUserPool,
  CognitoUserAttribute,
  // CognitoUser,
  // AuthenticationDetails
} from "amazon-cognito-identity-js"
import awsConfiguration from '../awsConfiguration'

const userPool = new CognitoUserPool({
  UserPoolId: awsConfiguration.UserPoolId,
  ClientId: awsConfiguration.ClientId,
})

const SignUp: React.FC = () => {
  React.useEffect(() => {
    console.log(userPool)
  }, [])

  const [email, setEmail] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')

  const changedEmailHandler = (event: any) => setEmail(event.target.value)
  const changedPasswordHandler = (event: any) => setPassword(event.target.value)
  const signUp = () => {
    const attributeList = [
      new CognitoUserAttribute({
        Name: 'email',
        Value: email
      })
    ]
    userPool.signUp(email, password, attributeList, [], (err, result) => {
      if (err) {
        console.error(err)
        return
      }
      console.log('##########after signup##########')
      console.log(result)
      setEmail('')
      setPassword('')
    })
  }

  return (
    <div className="SignUp">
      <div style={{ width: '50%', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'left' }}>SignUp</h1>
        <input
          type="text"
          placeholder="email"
          onChange={changedEmailHandler}
          style={{ width: '100%' }}
        />
        <input
          type="text"
          placeholder="password"
          onChange={changedPasswordHandler}
          style={{ width: '100%' }}
        />
        <button
          onClick={signUp}
          style={{
            width: '100%',
            border: 'none',
            backgroundColor: '#dc143c',
            color: '#ffffff'
          }}
        >
          SignUp
        </button>
      </div>
    </div>
  )
}

export default SignUp
