import React from 'react'
import '../App.css'

import {
  CognitoUserPool,
  CognitoUser
} from "amazon-cognito-identity-js"
import awsConfiguration from '../awsConfiguration'

const userPool = new CognitoUserPool({
  UserPoolId: awsConfiguration.UserPoolId,
  ClientId: awsConfiguration.ClientId,
})

const Verification: React.FC = () => {
  const [email, setEmail] = React.useState<string>('')
  const [verificationCode, setVerificationCode] = React.useState<string>('')
  const changedEmailHandler = (event: any) => setEmail(event.target.value)
  const changedVerificationCodeHandler = (event: any) => setVerificationCode(event.target.value)

  const verifyCode = () => {
    const cognitoUser = new CognitoUser({
      Username: email,
      Pool: userPool
    })
    cognitoUser.confirmRegistration(verificationCode, true, (err: any) => {
      if (err) {
        console.log(err)
        return
      }
      console.log('succeeded')
      setEmail('')
      setVerificationCode('')
    })
  }
  return (
    <div className="Verification">
      <div style={{ width: '50%', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'left' }}>Verification</h1>
        <input
          type="text"
          placeholder="verification code"
          onChange={changedVerificationCodeHandler}
          style={{ width: '100%' }}
        />
        <input
          type="text"
          placeholder='email'
          onChange={changedEmailHandler}
          style={{ width: '100%' }}
        />
        <button
          onClick={verifyCode}
          style={{
            width: '100%',
            border: 'none',
            backgroundColor: '#dc143c',
            color: '#ffffff'
          }}
        >
          Verification
        </button>
      </div>
    </div>
  )
}

export default Verification