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
                <th><TextField id="standard-basic" label="氏名" /></th>
              </tr>
              <tr>
                <th><TextField id="standard-basic" label="メールアドレス" /></th>
              </tr>
              <tr>
                <th><TextField id="standard-basic" label="パスワード" /></th>
              </tr>
              <tr>
                <Button variant="contained" color="secondary" type="submit" >
                登録する
                </Button>
              </tr>
          </tbody>
        </table>
      </form>
        </div>
    )
  }
}

export default Registration;
