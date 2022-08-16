import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div>
    <div>
        <h3>WELCOME TO POKE APP!</h3>
    </div>
    <Link to = {'/home'}>
        <button>START</button>
    </Link>
    </div>
  )
}
