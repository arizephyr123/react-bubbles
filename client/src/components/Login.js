import React, { useState, useEffect }  from "react";
import axiosWithAuth from './utils/axiosWithAuth'

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [state, setState]= useState({
    credentials: {
      username: '',
      password: ''
    }
  });

  const handleChange = e => {
    setState({
      credentials: {
        ...state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  const login = e => {
    e.preventDefault();
    // login to retrieve the JWT token
    // add the token to localstorage
    // route to /protected (whatever landing page)
    axiosWithAuth()
      .post('/api/login', this.state.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        props.history.push('/protected');
      })
      .catch(err => console.log(err.response));
  };

  

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <div>
        <form onSubmit={login}>
          <input
            type="text"
            name="username"
            value={state.credentials.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={state.credentials.password}
            onChange={handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    </>
  );
};

export default Login;
