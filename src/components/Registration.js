import React from 'react';

class Registration extends React.Component { 
  render() {
    //login　or 登録された後にBlogにアクセスできるようにする処理
    return (
      <div>
        <form action="./Blog">
          <table>
            <tbody>
            <tr>
                <th>氏名</th>
                <td><input type="text" name="pass" id="" /></td>
              </tr>
              <tr>
                <th>メールアドレス</th>
                <td><input type="text" name="pass" id="" /></td>
              </tr>
              <tr>
                <th>パスワード</th>
                <td><input type="text" name="pass" id="" /></td>
              </tr>
              <tr>
                <th></th>
                <td><input type="submit" value="登録する" /></td>
              </tr>
          </tbody>
        </table>
        
      </form>
    </div>

    )
  }
}

export default Registration;
