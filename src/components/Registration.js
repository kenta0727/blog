import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Registration extends React.Component { 
  render() {
    //login or 登録された後にBlogにアクセスできるようにする処理
    return (
      <div>
        <form action="./Blog_display">
          <table>
            <tbody>
            <tr>
              <th>氏名</th>
                <td><TextField id="standard-basic" required/></td>
              </tr>
              <tr>
              <th>メールアドレス</th>                
                <td><TextField id="standard-basic" required/></td>
              </tr>
              <tr>
                <th>パスワード</th>
                <td><TextField id="standard-basic" type="password" required/></td>
              </tr>
                <Button variant="contained" color="secondary" type="submit" >
                登録する
                </Button>
          </tbody>
        </table>
      </form>
        </div>
    )
  }
}

export default Registration;
