import React from 'react'
import { useForm } from 'react-hook-form'

import './index.scss'

const Login = () => {
  const { form, handleOnchange } = useForm({})

  console.log('form', form)

  return (
    <div className="App">
      <main>
        <div className="container">
          <div className="card">
            <form>
              <div className="top-row background-top-row">
                <i className="fa fa-user-circle-o" aria-hidden="true" />
              </div>
              <div className="content">
                <i className="fa fa-lock" aria-hidden="true" />
                <h1>Login</h1>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <p>User</p>
                  <input
                    type="text"
                    className="text"
                    name="UserName"
                    id=""
                    placeholder="UserName"
                    onChange={handleOnchange}
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="input-group">
                  <p>Password</p>
                  <input
                    type="password"
                    className="text"
                    name="UserPassword"
                    id=""
                    placeholder="UserName"
                    onChange={handleOnchange}
                  />
                </div>
              </div>

              <button className="buton" type="submit">
                Login
              </button>
              <div className="networks background-top-row">
                <i className="fa fa-facebook" aria-hidden="true" />
                <i className="fa fa-google" aria-hidden="true" />
                <i className="fa fa-instagram" aria-hidden="true" />
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}
export default Login
