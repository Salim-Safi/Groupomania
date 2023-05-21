import React from "react";
import { NavLink } from "react-router-dom";
import FirstLogo from "../components/FirstLogo";
import FormInput from "../components/FormInput";
import Buttons from "../components/Buttons";
import "../styles/SignIn.css";

const SignIn = () => {
  return (
    <div className="content">
      <div className="first-content">
        <FirstLogo />
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
          <h1 className="h1">Connectez-vous à Groupomania</h1>
          <div className="fbox">
            <form action="submit">
              <FormInput text="Adresse mail" id="mail" type="email" />
              <FormInput text="Mot de passe" type="password" />
              <Buttons text="S'identifier" class="button" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
