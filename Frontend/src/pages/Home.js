import { React, useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";
import axios from "axios";
import "../styles/Home.css";
import iconIMG from "../images/image.png";
import iconVideo from "../images/video.png";
import logo from "../images/2.svg";
import Post from "../components/Post";
import UserSearch from "../components/UserSearch";

const Home = () => {
  const { context, dispatch } = useContext(Context);
  const userId = context.userId;

  useEffect(() => {
    const getUser = async () => {
      try {
        axios({
          method: "GET",
          url: `http://localhost:3001/api/auth/user/${userId}`,
          withCredentials: true,
        })
          .then(function (res) {
            dispatch({ type: "setUser", payload: res.data });
          })
          .catch(function (res) {
            console.log(res);
          });
      } catch (error) {
        console.error(error);
      }
    };

    getUser();
  }, [dispatch, userId]);

  const user = context.user;
  const logout = async () => {
    try {
      axios({
        method: "GET",
        url: "http://localhost:3001/api/auth/logout",
        withCredentials: true,
      })
        .then(function (res) {
          dispatch({ type: "logout", payload: "" });
        })
        .catch(function (res) {
          console.log(res);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const [searchUserData, setSearchUserData] = useState([]);
  const [searchUser, setSearchUser] = useState("");

  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleInputBlur = () => {
    setIsInputFocused(false);
    setSearchUserData([]);
  };

  const getSearchUser = async () => {
    console.log("searchuser : " + searchUser);
    try {
      axios({
        method: "GET",
        url: "http://localhost:3001/api/auth/user/search?query=" + searchUser,
        withCredentials: true,
      })
        .then((res) => setSearchUserData(res.data))
        .catch(function (res) {
          console.log(res);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {user && (
        <div className="container">
          <header>
            <div className="header-logo">
              <img src={logo} alt="logo-groupomania" />
            </div>

            <div className="header-search">
              <form>
                <i className="fa-solid fa-magnifying-glass search-btn"></i>
                <input
                  type="text"
                  placeholder="Recherche..."
                  className="header-input"
                  onChange={(e) => {
                    e.preventDefault();
                    setSearchUser(e.target.value);
                    getSearchUser();
                  }}
                  onFocus={() => setIsInputFocused(true)}
                  onBlur={() => handleInputBlur()}
                />
                {isInputFocused &&
                  (searchUserData.length !== 0 ? (
                    <div>
                      <ul className="userSearch-display">
                        {searchUserData.map((user, index) => (
                          <UserSearch key={index} user={user} />
                        ))}
                      </ul>
                    </div>
                  ) : (
                    ""
                  ))}
              </form>

              <div className="user-info">
                <img src={user.picture} alt="profil" />
                <p>{user.firstName}</p>
              </div>

              <i
                onClick={logout}
                className="fa fa-arrow-right-from-bracket logout-btn"
              ></i>
            </div>
          </header>

          <aside>
            <div className="aside-content">
              <h2>Friends</h2>

              <div className="aside-user">
                <div className="aside-friends">
                  <img src="" alt="" />
                  <p>Username</p>
                </div>

                <div className="aside-friends">
                  <img src="" alt="" />
                  <p>Username</p>
                </div>

                <div className="aside-friends">
                  <img src="" alt="" />
                  <p>Username</p>
                </div>

                <div className="aside-friends">
                  <img src="" alt="" />
                  <p>Username</p>
                </div>

                <div className="aside-friends">
                  <img src="" alt="" />
                  <p>Username</p>
                </div>

                <div className="aside-friends">
                  <img src="" alt="" />
                  <p>Username</p>
                </div>

                <div className="aside-friends">
                  <img src="" alt="" />
                  <p>Username</p>
                </div>
              </div>
            </div>
          </aside>

          <main>
            <div className="main-form">
              <form>
                <div className="main-post">
                  <div>
                    <img src={user.picture} alt="" />
                  </div>

                  <textarea
                    placeholder={`Quoi de neuf ${user.firstName}?`}
                  ></textarea>
                </div>

                <div className="main-file">
                  <button type="button" className="button-4">
                    <img src={iconIMG} alt="img icon" />
                    Image
                  </button>

                  <button type="button" className="button-4">
                    <img src={iconVideo} alt="img icon" />
                    Vidéo
                  </button>
                </div>
              </form>
            </div>

            <Post />
            <Post />
            <Post />
          </main>

          <article>
            <div className="article-content">
              <div className="article-content-user">
                <div className="article-content-user-info">
                  <img src={user.picture} alt="" />
                  <p>{user.firstName}</p>
                </div>
              </div>

              <div className="article-content-follow">
                <div className="article-content-score">
                  <div className="articlescore">
                    <span>{user.followers.length}</span>
                    <p>Followers</p>
                  </div>

                  <div className="articlescore">
                    <span>{user.following.length}</span>
                    <p>Following</p>
                  </div>
                </div>
                <div className="separation"></div>
                <p>Mon Profile</p>
              </div>
            </div>
          </article>
        </div>
      )}
    </>
  );
};

export default Home;
