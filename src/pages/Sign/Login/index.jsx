import React, { useState } from 'react'
import './index.scss'
// import { login } from '../../../services/auth'

const Login = () => {
  const [form, setForm] = useState({})

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
  }

  return (
    <div className="App">
      <main>
        <div className="container">
          <div className="card">
            <form onSubmit={handleSubmit}>
              <div className="top-row background-top-row">
                <i className="fa fa-user-circle-o" aria-hidden="true" />
              </div>
              <div className="content">
                <i className="fa fa-lock" aria-hidden="true" />
                <h1>Login</h1>
                <div className="form-group">
                  <div className="input-group">
                    <p>User</p>
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      placeholder="Username"
                      onChange={handleChange}
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
                      placeholder="Password"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <button className="button" type="submit">
                  Login
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
export default Login
