import React, { useState } from 'react';
import styled from 'styled-components'; // Import styled-components
import resimg1 from "../assets/resimg1.jpeg";
import resimg2 from "../assets/resimg2.jpeg";
import resimg3 from "../assets/resimg3.jpeg";

export default function Recommend() {
  const data = [
    {
      image: resimg1,
      restaurant_name: "Palm & Pine",
      address: "Panjrapol, Ahmedabad",
    },
    {
      image: resimg2,
      restaurant_name: "Palm & Pine",
      address: "Panjrapol, Ahmedabad",
    },
    {
      image: resimg3,
      restaurant_name: "Palm & Pine",
      address: "Panjrapol, Ahmedabad",
    },
  ];

  const [active, setActive] = useState(1);

  return (
    <Section id="recommend">
      <div className="title">
        <h2>Restaurants Near You</h2>
      </div>
      <div className="restaurants">
        {data.map((restaurant) => (
          <div className="restaurant" >
            <img src={restaurant.image} alt="" />
            <h3>{restaurant.restaurant_name}</h3>
            <p>{restaurant.address}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

const Section = styled.section`

  padding: 4rem 0;
  .title{
    padding-bottom:3rem;
    text-align: center;

  }
  .restaurants{
    display:grid;
    grid-template-columns: repeat(3,1fr);
    gap:3rem;
    padding: 0 3rem;
    .restaurant{
      padding:1rem;
      display:flex;
      flex-direction: column;
      gap:0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition:0.3s ease-in-out;
      &:hover{
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0,0,0,0.35) 0px 5px 13px;
      }
      img{
        width: 100%;
        height: 10rem; /* Set your desired fixed height in rem */
        object-fit: cover;
      } 
    }

  }

`;
