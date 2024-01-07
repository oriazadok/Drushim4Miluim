import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <h1>Drushim4Miluim</h1>
        <Link to="/signin">
            <button>Sign In</button>
        </Link>
    </div>
  )
}

export default Home;
