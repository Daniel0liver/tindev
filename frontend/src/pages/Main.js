import React from 'react';
import './Main.css';

import logo from '../assets/logo.svg';
import dislike from '../assets/dislike.svg';
import like from '../assets/like.svg';

export default function({ match }) { // A propriedade match pega todos os parametros passados para aquela rota
  return( 
    <div className="main-container">
      <img src={logo} alt="Tindev" />
      <ul>
        <li>
          <img src="https://avatars3.githubusercontent.com/u/35768750?s=400&u=1fb0804013c8a8098fdf3d967ed5236dcebfba8c&v=4" alt="" />
          <footer>
            <strong>Daniel Oliveira</strong>
            <p>Apreciador da tecnologia da informação, desenvolvedor. Graduando em Ciência da Computação - IFCE Maracanaú </p>
          </footer>
          <div  className="buttons">
            <button type="button">
              <img src={dislike} alt="Dislike" />
            </button>
            <button type="button">
              <img src={like} alt="Like" />
            </button>
          </div>
        </li>

        <li>
          <img src="https://avatars3.githubusercontent.com/u/35768750?s=400&u=1fb0804013c8a8098fdf3d967ed5236dcebfba8c&v=4" alt="" />
          <footer>
            <strong>Daniel Oliveira</strong>
            <p>Apreciador da tecnologia da informação, desenvolvedor. Graduando em Ciência da Computação - IFCE Maracanaú </p>
          </footer>
          <div  className="buttons">
            <button type="button">
              <img src={dislike} alt="Dislike" />
            </button>
            <button type="button">
              <img src={like} alt="Like" />
            </button>
          </div>
        </li>

        <li>
          <img src="https://avatars3.githubusercontent.com/u/35768750?s=400&u=1fb0804013c8a8098fdf3d967ed5236dcebfba8c&v=4" alt="" />
          <footer>
            <strong>Daniel Oliveira</strong>
            <p>Apreciador da tecnologia da informação, desenvolvedor. Graduando em Ciência da Computação - IFCE Maracanaú </p>
          </footer>
          <div  className="buttons">
            <button type="button">
              <img src={dislike} alt="Dislike" />
            </button>
            <button type="button">
              <img src={like} alt="Like" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}