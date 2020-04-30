import React from 'react';


const Header = () => {
    return(
        <nav>
        <div className="nav-wrapper deep-purple darken-1">
          <a href="/home" className="brand-logo">Saintz</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/autores">Autores</a></li>
            <li><a href="/Livros">Livros</a></li>
            <li><a href="/Sobre">Sobre</a></li>
          </ul>
        </div>
      </nav>
    );
    
}


export default Header;