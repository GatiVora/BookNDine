import React from "react";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <span>Copyright &copy; 2021 BookNDine. All rights reserved</span>
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
      <ul className="social_links">
        <li>
          <BsFacebook />
        </li>
        <li>
          <BsLinkedin />
        </li>
        <li>
          <AiFillInstagram />
        </li>
      </ul>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  background-color: black;
  padding: 2.5rem;
  border-radius: 0%.5rem;
  color: white;
  ul {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    color: white;
    li {
      a {
        text-decoration: none;
        color: white;
        transition: 0.3s ease-in-out;
        &:hover {
          color: white;
          border-bottom: 1px solid grey;
        }
      }
      svg {
        font-size: 1.3rem;
        transition: 0.3s ease-in-out;
        &:hover {
          color: white;
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
    ul {
      flex-direction: column;
    }
    .social_links {
      flex-direction: row;
    }
  }
`;
