import React from 'react';
import logo from "../assets/logo.jpeg";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

export default function Navbar() {

    const navigate = useNavigate();

    const login = () => {
      // Navigate to the desired URL when the button is clicked
      navigate('/login');
    };
  return (
    <>
        <Nav>
            <div className="brand">
                <div className="container">
                    {/* <img src={logo} alt=""/> */}
                    DineDex
                </div>
                <div className="toggle"></div>
            </div>
            <ul>
                <li><a href='/home'>Home</a></li>
                <li><a href='/restaurants'>Restaurants</a></li>
                <li><a href='/about'>About</a></li>
                <li><a href='/blog'>Blog</a></li>

            </ul>
            <button onClick={login}>Login</button>
            <button>SignIn</button>
        </Nav>

    </>
  )
}

const Nav = styled.nav`
    display:flex;
    justify-content:space-between;
    align-items:center;
    .brand{
        .container{
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.4rem;
            font-size: 1.2rem;
            font-weight: 900;
            text-transform: uppercase;
        }
        .toggle{
            display: none;
        }
    }
    ul{
        display: flex;
        list-style-type: none;
        gap:1rem;
        li{
            a{
                text-decoration: none;
                color:#0077b6;
                font-size: 1.2rem;
                transition:0ms.1s ease-in-out;
                &:hover{
                    color:#023e8a
                }
               
            }
            &:first-of-type{
                    a{
                        color:#023e8a
                    }
            }
        }
    }
    button{
        padding: 0.5rem 1rem;
        cursor: pointer;
        border-radius: 1rem;
        border: none;
        color: white;
        background-color: #48cae4;
        text-transform: uppercase;
        font-size:1.1rem;
        letter-spacing: 0.1rem;
        transition: 0.5 ease-in-out;
        &:hover{
            background-color: #023e8a;
        }
    }
    
`