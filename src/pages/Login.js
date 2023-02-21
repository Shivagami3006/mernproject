import React from "react";
import { useState } from "react";
import {FaSignInAlt} from "react-icons/fa";


function Login() {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
      password2: "",
    });
    const {  email, password,  } = formData;
    const onChange = (e) => {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };
  // const onChange = (e) => {setFormData ((prevState) => ({...prevState ,[e.target.name]: e.target.value}))}
  const onSubmit = (e) =>{
      e.preventDefault();
  };
    return (
      <>
        <section className="heading">
          <h1>
            <FaSignInAlt />
            Login
          </h1>
          <p>pls login set a goal</p>
        </section>
        <section className="form">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="text"
                value={email}
                placeholder=" Enter email"
                id="email"
                name="email"
                className="form-control"
                onChange={onChange}
              />
              <input
                type="password"
                name="password"
                value={password}
                placeholder=" Enter pasword"
                id="password"
                className="form-control"
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <button  type="submit" className="btn btn-block">Submit</button>
  
            </div>
          </form>
        </section>
      </>
    );
  }
  
  export default Login;
  