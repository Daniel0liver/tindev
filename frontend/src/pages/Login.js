import React, { useState } from 'react';
import './Login.css'

import  logo from '../assets/logo.svg'

export default function Login({ history }) {
  const [username, setUsername] = useState(''); // useState retorna dois valores: username e um função
  
  function HandSubmit(e){
    e.preventDefault(); // Bloqueia o eventDefault(Redirecionar para outra pagina) de um form
    history.push('/main')
    
  }

  return(
    <div className="login-container">
      <form onSubmit={HandSubmit}>
        <img src={logo} alt="Tindev" />
        <input 
        placeholder="Digite seu usuário do GitHub" 
        value={username}
        onChange={e => setUsername(e.target.value)} // onChange returna um event 
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
} 

// O state de um component é toda aquela informação que ele vai manipular