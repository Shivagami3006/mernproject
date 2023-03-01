import { useEffect, useState } from "react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { reset, register } from "../features/auth/authSlice";
import { FaUser } from "react-icons/fa";
import Spinner from "../Components/Spinner";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccss, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccss && user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccss, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  // const onChange = (e) => {setFormData ((prevState) => ({...prevState ,[e.target.name]: e.target.value}))}
  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("password not matching");
    } else {
      const userData = {
        name,
        email,
        password,
      };
      dispatch(register(userData));
    }
  };

  if (isLoading) {
    <Spinner />;
  }
  return (
    <>
      <section className="heading">
        <h1>
          <FaUser />
          Register
        </h1>
        <p>pls create an acount</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              value={name}
              name="name"
              placeholder=" Enter Name"
              id="name"
              className="form-control"
              onChange={onChange}
            />
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
            <input
              type="password"
              name="password2"
              value={password2}
              placeholder=" Enter password2"
              id="password2"
              className="form-control"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Register;
