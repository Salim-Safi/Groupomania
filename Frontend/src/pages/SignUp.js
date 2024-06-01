import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Img from "../images/1.svg";
import "../styles/SignUp.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="content-Up">
      <div className="first-content-Up">
        <img src={Img} alt="logo-groupomania-blanc" />
      </div>

      <div className="second-content-Up">
        <div>
          <div className="pbox-Up">
            <p className="p-Up">
              Déja membre ? <NavLink to="/signin">S'identifier</NavLink>
            </p>
          </div>
        </div>

        <div className="hbox-Up">
          <h1 className="h1-Up">Inscrivez-vous à Sociall</h1>
          <div className="fbox-Up">
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
              }}
              validationSchema={Yup.object({
                firstName: Yup.string()
                  .required("Un prénom est nécéssaire")
                  .min(2, "Votre prénom doit comporter moins de 2 caractères")
                  .max(
                    50,
                    "Votre prénom doit comporter moins de 50 caractères"
                  ),
                lastName: Yup.string()
                  .required("Un nom est nécéssaire")
                  .min(2, "Votre nom doit comporter moins de 2 caractères")
                  .max(50, "Votre nom doit comporter moins de 50 caractères"),

                email: Yup.string()
                  .email("Format d'email invalide")
                  .required("Un email est nécéssaire"),

                password: Yup.string()
                  .required("Un mot de passe est nécéssaire")
                  .min(
                    8,
                    "Votre mot de passe doit comporter au moins 8 caractères"
                  ),
              })}
              onSubmit={async (values, { setSubmitting }) => {
                const formMess = document.querySelector(".formMessage");
                try {
                  axios({
                    method: "POST",
                    url: "http://localhost:3001/api/auth/signup",
                    data: values,
                  })
                    .then(function (res) {
                      formMess.innerHTML = `<p>${res.data.message}</p>`;
                      formMess.className = "success";
                      setSubmitting(false);
                      setTimeout(() => {
                        formMess.innerHTML = "";
                        navigate("/signin");
                      }, 2000);
                    })
                    .catch(function (res) {
                      formMess.innerHTML =
                        "<p>Erreur lors de la création de compte</p>";
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
                  <div className="flexcontent">
                    <div className="form-input-wrapper">
                      <label htmlFor="lastName" className="label-wrapper">
                        Nom
                      </label>
                      <Field
                        type="text"
                        className="inputflex"
                        id="lastName"
                        name="lastName"
                      />
                    </div>

                    <div className="form-input-wrapper">
                      <label htmlFor="firstName" className="label-wrapper">
                        Prénom
                      </label>
                      <Field
                        type="text"
                        className="inputflex"
                        id="firstName"
                        name="firstName"
                      />
                    </div>
                  </div>

                  <div>
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      style={{ color: "red", fontWeight: "bold" }}
                    ></ErrorMessage>
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      style={{ color: "red", fontWeight: "bold" }}
                    ></ErrorMessage>
                  </div>

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
                    Créé un compte
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

export default SignUp;
