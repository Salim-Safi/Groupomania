import React from "react";
import { NavLink } from "react-router-dom";
import FirstLogo from "../components/FirstLogo";
import FormInput from "../components/FormInput";
import Buttons from "../components/Buttons";
import "../styles/SignUp.css";

const SignUp = () => {
  return (
    <div className="content-Up">
      <div className="first-content-Up">
        <FirstLogo />
      </div>

      <div className="second-content-Up">
        <div>
          <div className="pbox-Up">
            <p className="p-Up">
              Déja membre ? <NavLink to="/">S'identifier</NavLink>
            </p>
          </div>
        </div>

        <div className="hbox-Up">
          <h1 className="h1-Up">Inscrivez-vous à Groupomania</h1>
          <div className="fbox-Up">
            <form action="submit">
              <FormInput text="Nom d'utilisateur" id="nom" />
              <FormInput text="Adresse mail" id="mail" type="email" />
              <FormInput text="Mot de passe" type="password" />
              <Buttons text="Créé un compte" class="button-Up" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
