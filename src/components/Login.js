import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class login extends React.Component { 
  render() {
    //login or 登録された後にBlogにアクセスできるようにする処理
    return (
      <form action="./Blog_display">
        <table>
          <tbody>
            <tr>
              <th>メールアドレス</th>
              <td><TextField id="standard-basic"/></td>
              </tr>
            <tr>
              <th>パスワード</th>
              <td><TextField type="password" id="standard-basic" /></td>
            </tr>
          </tbody>
        </table>
                <Button variant="contained" color="primary" type="submit" >
                ログイン
                </Button>
              
        </form>
    )
  }
}

export default login;
