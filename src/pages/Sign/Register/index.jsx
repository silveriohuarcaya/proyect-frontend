import React from 'react'
import { useForm } from 'react-hook-form'

import './index.scss'

const Register = () => {
  const { form, handleOnchange } = useForm({})

  console.log('form', form)

  return (
    <div className="App">
      <main>
        <div className="container">
          <div className="card-register">
            <form>
              <div className="top-row background-top-row">
                <i className="fa fa-user-circle-o" aria-hidden="true" />
              </div>
              <div className="content">
                <i className="fa fa-lock" aria-hidden="true" />
                <h1>Register</h1>
                <div className="form-group">
                  <div className="input-group">
                    <p>User</p>
                    <input
                      type="text"
                      className="form-control"
                      name="UserName"
                      id=""
                      placeholder="Username"
                      onChange={handleOnchange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="input-group">
                    <p>Email</p>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id=""
                      placeholder="Email"
                      onChange={handleOnchange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <p>Password</p>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      id=""
                      placeholder="Password"
                      onChange={handleOnchange}
                    />
                  </div>
                </div>

                <button className="button" type="submit">
                  Register
                </button>
              </div>
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
export default Register
