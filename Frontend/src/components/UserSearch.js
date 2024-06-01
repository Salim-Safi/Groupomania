import React from "react";
import "../styles/components/UserSearch.css";

const UserSearch = ({ user }) => {
  return (
    <div className="countries-container">
      <div className="userSearch">
        <img src={user.picture} alt={"image de " + user.firstName} />
        <div className="nameUser">
          <p>{user.firstName}</p>
          <p>{user.lastName}</p>
        </div>
      </div>
    </div>
  );
};

export default UserSearch;
