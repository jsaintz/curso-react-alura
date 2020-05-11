import React from 'react';
import LinkWrapper from '../components/LinkWrapper'
const Header = () => {
    return(
        <nav>
        <div className="nav-wrapper deep-purple darken-1">
        <LinkWrapper to="/" className="brand-logo">Saintz</LinkWrapper>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><LinkWrapper to="/autores">Autores</LinkWrapper></li>
            <li><LinkWrapper to="/Livros">Livros</LinkWrapper></li>
            <li><LinkWrapper to="/Sobre">Sobre</LinkWrapper></li>
          </ul>
        </div>
      </nav>
    );
}

export default Header;