import React from 'react'

class login extends React.Component { 
  render() {
    //login or 登録された後にBlogにアクセスできるようにする処理
    return (
      <form action="/Blog">
        <table>
          <tbody>
            <tr>
              <th>メールアドレス</th>
              <td><input type="text" name="id" id="" /></td>
            </tr>
            <tr>
              <th>パスワード</th>
              <td><input type="text" name="pass" id="" /></td>
            </tr>
          </tbody>
        </table>
        <input type="submit" value="ログインする" />
      </form>
    )
  }
}

export default login;
