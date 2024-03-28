import React, { useState, useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import logo from "../../../assets/logo.png";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useAuth } from "../../Auth";

export default function Navb() {
  const auth = useAuth();
  const location = useLocation();

  const handleLogout = () => {
    auth.logOut(); // Call the logout function
  };

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <Navbar>
       <Link to="/home">
        <div className="logo">
          <img src={logo} alt="app logo" />
        </div>
      </Link>
      <ul className="navbar-links">
        <li className={location.pathname === "/home" ? "active" : ""}>
          <Link to="/home">Home</Link>
        </li>
        <li className={location.pathname === "/restaurants" ? "active" : ""}>
          <Link to="/restaurants">Restaurants</Link>
        </li>
        <li className={location.pathname === "/about" ? "active" : ""}>
          <Link to="/about">About</Link>
        </li>
        <li className={location.pathname === "/blog" ? "active" : ""}>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>

      <div></div>

      <div className="navbar-login">
        <Link to="/profile" className="profile-link">
          <AccountCircle />
          {/* <span className="user-name">&nbsp;{auth.user.username}</span> */}
        </Link>
        <a onClick={handleLogout}>Logout</a>
      </div>

      <div className="smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => {
            setToggleMenu(true);
          }}
        />
        {toggleMenu && (
          <div className="smallscreen_overlay">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay_close"
              onClick={() => {
                setToggleMenu(false);
              }}
            />
            <ul className="smallscreen-navbar-links">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/restaurants">Restaurants</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </Navbar>
  );
}

const Navbar = styled.nav`
  width: 100%;
  display: flex;
  border: 2px solid black;
  justify-content: space-between;
  align-items: center;
  background: black;
  padding: 1rem 2rem;

  .logo {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    img {
      width: 150px;
    }
  }

  .navbar-links {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;

    li {
      margin: 0 1rem;
      cursor: pointer;
      color: white;
      transition: color 0.3s;
    }

    li:hover {
      color: grey;
    }

    a {
      text-decoration: none;
      color: inherit;
    }
  }

  .navbar-links .active a {
    color: grey; /* Change color of active link */
    font-weight: bold; /* Optionally, make it bold */
  }

  .navbar-login {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .profile-link {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: white;
      margin-right: 1rem;

      .user-name {
        margin-left: 0.5rem;
      }
    }

    a {
      margin: 0 1rem;
      text-decoration: none;
      transition: 0.5s ease;
      color: white;
      cursor: pointer; /* Add cursor pointer */
    }

    a:hover {
      /* border-bottom: 1px solid grey; */
        color: grey;
    }

    div {
      width: 1px;
      height: 30px;
      background-color: grey;
    }
  }

  .smallscreen {
    display: none;

    .smallscreen_overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: black;
      transition: 0.5s ease;
      flex-direction: column;
      z-index: 5;

      .overlay_close {
        font-size: 27px;
        color: white;
        cursor: pointer;
        position: absolute;
        top: 20px;
        right: 20px;
      }

      .smallscreen-navbar-links {
        list-style: none;

        li {
          margin: 2rem;
          cursor: pointer;
          color: grey;
          font-size: 2rem;
          text-align: center;
          font-family: var(--font-base);
        }

        li:hover {
          color: white;
        }
      }
    }
  }

  @media screen and (max-width: 2000px) {
    .logo {
      img {
        width: 110px;
      }
    }
  }

  @media screen and (max-width: 1150px) {
    .navbar-links {
      display: none;
    }
    .smallscreen {
      display: flex;
    }
  }

  @media screen and (max-width: 650px) {
    padding: 1rem;

    .navbar-links {
      display: none; /* Hide navbar links */
    }

    .logo {
      img {
        width: 110px;
      }
    }

    .smallscreen {
      display: flex;
    }

    .smallscreen_overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: black;
      transition: 0.5s ease;
      flex-direction: column;
      z-index: 5;
    }

    .smallscreen-navbar-links {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;

      li {
        margin: 1rem 0;
        cursor: pointer;
        color: white;
        font-size: 1.2rem;
        font-family: var(--font-base);
        text-align: center;
        transition: color 0.3s;
      }

      li:hover {
        color: grey;
      }

      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
`;



          


