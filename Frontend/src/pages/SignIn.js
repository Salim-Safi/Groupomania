import React, { useContext } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Img from "../images/1.svg";
import "../styles/SignIn.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/Context";

const SignIn = () => {
  const { dispatch } = useContext(Context);
  const navigate = useNavigate();
  return (
    <div className="content">
      <div className="first-content">
        <img src={Img} alt="logo-groupomania-blanc" />
      </div>

      <div className="second-content">
        <div>
          <div className="pbox">
            <p className="p">
              Pas membre ? <NavLink to="/signup">S'inscrire maintenant</NavLink>
            </p>
          </div>
        </div>

        <div className="hbox">
          <h1 className="h1">Connectez-vous à Sociall</h1>
          <div className="fbox">
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email("Format d'email invalide")
                  .required("Un email est nécéssaire"),

                password: Yup.string().required(
                  "Un mot de passe est nécéssaire"
                ),
              })}
              onSubmit={async (values, { setSubmitting }) => {
                const formMess = document.querySelector(".formMessage");
                try {
                  axios({
                    method: "POST",
                    url: "http://localhost:3001/api/auth/login",
                    data: values,
                    withCredentials: true,
                  })
                    .then(function (res) {
                      console.log(res);
                      dispatch({ type: "setUserId", payload: res.data.userId });
                      dispatch({ type: "setRole", payload: res.data.role });
                      navigate("/");
                    })
                    .catch(function (res) {
                      formMess.innerHTML =
                        "<p>Pair login/mot de passe incorrect</p>";
                      formMess.className = "error";
                      setTimeout(() => {
                        formMess.innerHTML = "";
                      }, 2000);
                    });
                } catch (error) {
                  console.error(error);
                  setSubmitting(false);
                }
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="form-input-wrapper">
                    <label htmlFor="email" className="label-wrapper">
                      Email
                    </label>
                    <Field className="input-wrapper" id="email" name="email" />
                    <ErrorMessage
                      name="email"
                      component="div"
                      style={{ color: "red", fontWeight: "bold" }}
                    ></ErrorMessage>
                  </div>

                  <div className="form-input-wrapper">
                    <label htmlFor="password" className="label-wrapper">
                      Mot de passe
                    </label>
                    <Field
                      type="password"
                      className="input-wrapper"
                      id="password"
                      name="password"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      style={{ color: "red", fontWeight: "bold" }}
                    ></ErrorMessage>
                  </div>

                  <button
                    type="submit"
                    className="button-Up"
                    disabled={isSubmitting}
                  >
                    S'identifier
                  </button>

                  <div className="formMessage"></div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
