import React, { useState } from 'react';
import './Login.css'

import api from '../services/api';

import logo from '../assets/logo.svg'

export default function Login({ history }) {
  const [username, setUsername] = useState(''); // useState retorna dois valores: username e um função

  async function HandSubmit(e) {
    e.preventDefault(); // Bloqueia o eventDefault(Redirecionar para outra pagina) de um form

    const response = await api.post('/devs', {
      username,
    });
    
    if(!response){
      console.log('Não foi possivel fazer o login');
    }

    const { _id } = response.data;

    if(!_id){
      alert('Não foi possivel fazer o login');
    }

    history.push(`/dev/${_id}`);

  }

  return (
    <div className="login-container">
      <div className="login-content">
        <form onSubmit={HandSubmit}>
          <img src={logo} alt="Tindev" />
          <div className="ui left icon input">
            <input
              placeholder="Usuário GitHub"
              value={username}
              onChange={e => setUsername(e.target.value)} // onChange returna um event 
            />
            <i aria-hidden="true" className="users icon"></i>
          </div>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

// O state de um component é toda aquela informação que ele vai manipular