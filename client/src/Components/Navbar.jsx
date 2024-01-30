import React, { useState } from "react";
import logo from "../assets/logo.jpeg";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";

export default function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [navbarState, setNavbarState] = useState(false);

  const navigate = useNavigate();

  const login_button = () => {
    // Navigate to the desired URL when the button is clicked
    navigate("/login");
  };
  const signin_button = () => {
    // Navigate to the desired URL when the button is clicked
    navigate("/restaurant-login");
  };

  const logout_button = () => {
    // Navigate to the desired URL when the button is clicked
    navigate("/");
  };
  return (
    <>
      <Nav>
        <div className="brand">
          <div className="container">
            {/* <img src={logo} alt=""/> */}
            DineDex
          </div>
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose
                onClick={() => {
                  setNavbarState(false);
                }}
              />
            ) : (
              <GiHamburgerMenu
                onClick={() => {
                  setNavbarState(true);
                }}
              />
            )}
          </div>
        </div>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/restaurants">Restaurants</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
        </ul>
        {isHomePage && (
          <>
            <button onClick={login_button}>User</button>
            <button onClick={signin_button}>Restaurant</button>
          </>
        )}
        {!isHomePage && <button onClick={logout_button}>Logout</button>}
      </Nav>
      <ResponsiveNav state={navbarState}>
        <ul>
          <li>
            <a
              href="/home"
              onClick={() => {
                setNavbarState(false);
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/restaurants"
              onClick={() => {
                setNavbarState(false);
              }}
            >
              Restaurants
            </a>
          </li>
          <li>
            <a
              href="/about"
              onClick={() => {
                setNavbarState(false);
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/blog"
              onClick={() => {
                setNavbarState(false);
              }}
            >
              Blog
            </a>
          </li>
        </ul>
      </ResponsiveNav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .brand {
    .container {
      cursor: pointer;
      display: flex;
      color: #0077b6;
      justify-content: center;
      align-items: center;
      gap: 0.4rem;
      font-size: 1.2rem;
      font-weight: 900;
      text-transform: uppercase;
    }
    .toggle {
      display: none;
    }
  }
  ul {
    display: flex;
    list-style-type: none;
    gap: 1rem;
    li {
      a {
        text-decoration: none;
        color: #0077b6;
        font-size: 1.2rem;
        transition: 0ms.1s ease-in-out;
        &:hover {
          color: #023e8a;
        }
      }
      &:first-of-type {
        a {
          color: #023e8a;
        }
      }
    }
  }
  button {
    padding: 0.5rem 8rem;
    cursor: pointer;
    border-radius: 1rem;
    border: none;
    color: white;
    background-color: #0077b6;
    text-transform: uppercase;
    font-size: 1.1rem;
    letter-spacing: 0.1rem;
    transition: 0.5 ease-in-out;
    &:hover {
      background-color: #023e8a;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .toggle {
        display: block;
      }
    }
    ul,
    button {
      display: none;
    }
  }
`;

const ResponsiveNav = styled.div`
  display: flex;
  position: absolute;
  z-index: 5;
  background-color: white;
  width: 100%;
  height: 30vh;
  align-items: center;
  transition: 0.3s ease-in-out;
  top: ${({ state }) => (state ? "60px" : "-400px")};
  ul {
    list-style-type: none;
    width: 100%;
    li {
      width: 100%;
      margin: 1rem 0;
      margin-left: 2rem;
      a {
        text-decoration: none;
        color: #0077b6;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #023e8a;
        }
      }
      &:first-of-type {
      }
    }
  }
`;
