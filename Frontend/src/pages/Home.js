import React from "react";
import "../styles/Home.css";
import SecondLogo from "../components/SecondLogo";
import PhotoProfil from "../images/sans-visage.png";
import Input from "../components/Input";

const Home = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="header-logo">
          <SecondLogo />
        </div>

        <div className="header-search">
          <form>
            <i class="fa-solid fa-magnifying-glass search-btn"></i>
            <Input
              type="text"
              customPlace="Recherche..."
              customClass={"header-input"}
            />
          </form>

          <div className="user-info">
            <img src={PhotoProfil} alt="profil" />
            <p>UserName</p>
          </div>

          <i className="fa fa-arrow-right-from-bracket logout-btn"></i>
        </div>
      </header>

      <aside>ASIDE</aside>
      <main>MAIN</main>
      <article>ARTICLE</article>
    </div>
  );
};

export default Home;
