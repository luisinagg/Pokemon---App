import React from 'react';
import { Link } from 'react-router-dom';
import landing from '../media/landing.png'
import styled from 'styled-components'


export default function LandingPage() {
  return (
    <body>
      <Contenedor>
        <Img src={landing} alt="landing" />
    <Divtitle>
        <h3>WELCOME TO POKE APP!</h3>
    </Divtitle>
    <Button>
    <Link to = {'/home'} text-decoration='none'>
       <h3>START</h3> 
    </Link>
    </Button>
    </Contenedor>
    </body>
  )
}

//-----STYLED COMPONENTS
const Contenedor=styled.div`
position: absolute;
height: 100%;
width: 100%;
display:inline-block;
position:relative; 
`;
const Img =styled.img`
height: 100%;
width: 100%;
object-fit: cover;
`;
const Button= styled.div` 
bottom:32em;
left:16em;
padding:1em 10em;
text-decoration: none;
 position: absolute;
 border: none;
 font-size: 15px;
 font-family: inherit;
 width: 8em;
 height: 2em;
 line-height: 0em;
 text-align: center;
 background: linear-gradient(80deg,#03a9f4,#f441a5,#ffeb3b,#03a9f4);
 background-size: 250%;
 border-radius: 30px;
 z-index: 1;
 animation: ani 8s linear infinite;
 border: none;
 @keyframes ani {
  0% {
   background-position: 0%;
  }
  100% {
    background-position: 320%;
   }
   button:before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    z-index: -1;
    background: linear-gradient(90deg,#03a9f4,#f441a5,#ffeb3b,#03a9f4);
    background-size: 350%;
    border-radius: 35px;
    transition: 2s;}
`;
const Divtitle= styled.div`
display: flex;
bottom:34em;
left:20em;
justify-content: flex-start;
align-items: center;
position: relative;
font-family: Arial;
height: 100%;
color: white;
`
