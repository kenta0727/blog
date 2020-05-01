import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class login extends React.Component { 
  render() {
    //login or 登録された後にBlogにアクセスできるようにする処理
    return (
      <Router>
      <form action="">
        <table>
          <tbody>
              <tr>
              <th><TextField id="standard-basic" label="メールアドレス" /></th>
              <p>aaaa</p>
              </tr>
              <tr>
                <th><TextField id="standard-basic" label="パスワード" /></th>
              </tr>
          </tbody>
        </table>
                <Button variant="contained" color="primary" type="submit" >
                ログイン
                </Button>
              
        </form>
        </Router>
    )
  }
}

export default login;
