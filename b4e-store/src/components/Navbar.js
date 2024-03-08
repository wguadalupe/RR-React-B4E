import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h1>Apparel Store</h1>
      <div>
        <ul><Link to="/hoodies">Hoodies</Link></ul>
        <ul><Link to="/hats">Hats</Link></ul>
       <ul><Link to="/joggers">Joggers</Link></ul>
        
      </div>
    </nav>
  );
}

export default Navbar;
