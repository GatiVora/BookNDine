// import React, { useState } from "react";
// import logo from "../assets/logo.jpeg";
// import styled from "styled-components";
// import { useNavigate, useLocation } from "react-router-dom";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { VscChromeClose } from "react-icons/vsc";

// export default function Navbar() {
//   const location = useLocation();
//   const isHomePage = location.pathname === "/";
//   const [navbarState, setNavbarState] = useState(false);

//   const navigate = useNavigate();

//   const login_button = () => {
//     // Navigate to the desired URL when the button is clicked
//     navigate("/login");
//   };
//   const signin_button = () => {
//     // Navigate to the desired URL when the button is clicked
//     navigate("/restaurant-login");
//   };

//   const logout_button = () => {
//     // Navigate to the desired URL when the button is clicked
//     navigate("/");
//   };
//   return (
//     <>
//       <Nav>
//         <div className="brand">
//           <div className="container">
//             {/* <img src={logo} alt=""/> */}
//             DineDex
//           </div>
//           <div className="toggle">
//             {navbarState ? (
//               <VscChromeClose
//                 onClick={() => {
//                   setNavbarState(false);
//                 }}
//               />
//             ) : (
//               <GiHamburgerMenu
//                 onClick={() => {
//                   setNavbarState(true);
//                 }}
//               />
//             )}
//           </div>
//         </div>
//         <ul>
//           <li>
//             <a href="/home">Home</a>
//           </li>
//           <li>
//             <a href="/restaurants">Restaurants</a>
//           </li>
//           <li>
//             <a href="/about">About</a>
//           </li>
//           <li>
//             <a href="/blog">Blog</a>
//           </li>
//         </ul>
//         {isHomePage && (
//           <>
//             <button onClick={login_button}>User</button>
//             <button onClick={signin_button}>Restaurant</button>
//           </>
//         )}
//         {!isHomePage && <button onClick={logout_button}>Logout</button>}
//       </Nav>
//       <ResponsiveNav state={navbarState}>
//         <ul>
//           <li>
//             <a
//               href="/home"
//               onClick={() => {
//                 setNavbarState(false);
//               }}
//             >
//               Home
//             </a>
//           </li>
//           <li>
//             <a
//               href="/restaurants"
//               onClick={() => {
//                 setNavbarState(false);
//               }}
//             >
//               Restaurants
//             </a>
//           </li>
//           <li>
//             <a
//               href="/about"
//               onClick={() => {
//                 setNavbarState(false);
//               }}
//             >
//               About
//             </a>
//           </li>
//           <li>
//             <a
//               href="/blog"
//               onClick={() => {
//                 setNavbarState(false);
//               }}
//             >
//               Blog
//             </a>
//           </li>
//         </ul>
//       </ResponsiveNav>
//     </>
//   );
// }

// const Nav = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   .brand {
//     .container {
//       cursor: pointer;
//       display: flex;
//       color: #0077b6;
//       justify-content: center;
//       align-items: center;
//       gap: 0.4rem;
//       font-size: 1.2rem;
//       font-weight: 900;
//       text-transform: uppercase;
//     }
//     .toggle {
//       display: none;
//     }
//   }
//   ul {
//     display: flex;
//     list-style-type: none;
//     gap: 1rem;
//     li {
//       a {
//         text-decoration: none;
//         color: #0077b6;
//         font-size: 1.2rem;
//         transition: 0ms.1s ease-in-out;
//         &:hover {
//           color: #023e8a;
//         }
//       }
//       &:first-of-type {
//         a {
//           color: #023e8a;
//         }
//       }
//     }
//   }
//   button {
//     padding: 0.5rem 8rem;
//     cursor: pointer;
//     border-radius: 1rem;
//     border: none;
//     color: white;
//     background-color: #0077b6;
//     text-transform: uppercase;
//     font-size: 1.1rem;
//     letter-spacing: 0.1rem;
//     transition: 0.5 ease-in-out;
//     &:hover {
//       background-color: #023e8a;
//     }
//   }

//   @media screen and (min-width: 280px) and (max-width: 1080px) {
//     .brand {
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       width: 100%;
//       .toggle {
//         display: block;
//       }
//     }
//     ul,
//     button {
//       display: none;
//     }
//   }
// `;

// const ResponsiveNav = styled.div`
//   display: flex;
//   position: absolute;
//   z-index: 5;
//   background-color: white;
//   width: 100%;
//   height: 30vh;
//   align-items: center;
//   transition: 0.3s ease-in-out;
//   top: ${({ state }) => (state ? "60px" : "-400px")};
//   ul {
//     list-style-type: none;
//     width: 100%;
//     li {
//       width: 100%;
//       margin: 1rem 0;
//       margin-left: 2rem;
//       a {
//         text-decoration: none;
//         color: #0077b6;
//         font-size: 1.2rem;
//         transition: 0.1s ease-in-out;
//         &:hover {
//           color: #023e8a;
//         }
//       }
//       &:first-of-type {
//       }
//     }
//   }
// `;


import React, { useState , useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import logo from "../assets/logo.png";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import AccountCircle from "@mui/icons-material/AccountCircle";
import { AuthContext } from "./AuthContext";

import { useAuth } from "./Auth";


export default function Navb() {

    const auth = useAuth();

    const handleLogout = () => {
        auth.logOut(); // Call the logout function
      };
    


    const [toggleMenu, setToggleMenu] = useState(false);
    // const { isLoggedIn } = useContext(AuthContext);
    return (
        <Navbar>
            <div className="logo">
                <img src={logo} alt="app logo" />
            </div>
            <ul className="navbar-links">
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

            <div className="navbar-login">
                <a  className="" onClick={handleLogout}>
                    Logout
                </a>
 
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

    .navbar-login {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        a {
            margin: 0 1rem;
            text-decoration: none;
            transition: 0.5s ease;
            color: white;
        }

        a:hover {
            border-bottom: 1px solid grey;
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







          


