import React, { useEffect, useState } from 'react';
import './Main.css';

import api from '../services/api';

import logo from '../assets/logo.svg';
import dislike from '../assets/dislike.svg';
import like from '../assets/like.svg';

export default function({ match }) { // A propriedade match pega todos os parametros passados para aquela rota
  const [users, setUsers] = useState([]);
  
  //useEffect é uma função que será exucutado quando meu component for renderizado em tela
  useEffect(() => {
    async function loadUsers(){
      const response = await api.get('/devs', {
        headers: { 
          user: match.params.id,
        }
      })

      setUsers(response.data);
      
    }

    loadUsers();
  }, [match.params.id]); // Recebe dois parametros: uma função e quando você quer executar essa função

  return( 
    <div className="main-container">
      <img src={logo} alt="Tindev" />
      <ul>
        {users.map(user => (
          <li key={user._id}>
          <img src={user.avatar} alt="" />
          <footer>
            <strong>{user.name}</strong>
            <p>{user.bio}</p>
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
        ))}
        
      </ul>
    </div>
  );
}