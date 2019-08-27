import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { Link } from 'react-router-dom';
import './Main.css';

import api from '../services/api';

import logo from '../assets/logo.svg';
import dislike from '../assets/dislike.svg';
import like from '../assets/like.svg';
import itsamatch from '../assets/itsamatch.png';

export default function ({ match }) { // A propriedade match pega todos os parametros passados para aquela rota
  const [users, setUsers] = useState([]);
  const [matchDev, setMtachDev] = useState(true);

  //useEffect é uma função que será exucutado quando meu component for renderizado em tela
  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/devs', {
        headers: {
          user: match.params.id,
        }
      })

      setUsers(response.data);

    }

    loadUsers();
  }, [match.params.id]); // Recebe dois parametros: uma função e quando você quer executar essa função

  useEffect(() => {
    const socket = io('http://localhost:3333', {
      query: { user : match.params.id }
    });

    socket.on('match', message => {
      console.log(message);
    })
  }, [match.params.id]);


  async function handleLike(id) {
    await api.post(`/devs/${id}/likes`, null, {
      headers: { user: match.params.id },
    })
    setUsers(users.filter(user => user._id !== id));
  }

  async function handleDislike(id) {
    await api.post(`/devs/${id}/dislikes`, null, {
      headers: { user: match.params.id },
    }) // Segundo parametro de um metodo POST é o header(Corpo)
    // Nunca deve alterar diretamente a users, mesmo ela sendo um array, temos que alterar pela função setUsers
    setUsers(users.filter(user => user._id !== id)); // Filtrando usuarios que tenham id diferentes aqueles usuarios que receberam dislike

  }

  return (
    <div className="main-container">
      <Link to="/">
        <img src={logo} alt="Tindev" />
      </Link>

      {users.length > 0 ? (
        <ul>
          {users.map(user => (
            <li key={user._id}>
              <div className="cards">
                <img src={user.avatar} alt="" />
                <footer>
                  <strong>{user.name}</strong>
                  <p>{user.bio}</p>
                </footer>
              </div>
              <div className="buttons">
                <button type="button" onClick={() => handleDislike(user._id)}> {/* Quando colocamos os parenteses na função, ao executar o onClick ele ira executar a função, não vai passar a referencia da função. Para isso usamos um hacker que é declarar uma nova função antes () => assim ele vai passar a referencia da função*/}
                  <img src={dislike} alt="Dislike" />
                </button>
                <button type="button" onClick={() => handleLike(user._id)}>
                  <img src={like} alt="Like" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
          <div className="empty">Acabou :(</div>
        )}

      { matchDev && (
        <div className="match-container">
          <img src={itsamatch}/>
          <img className="avatar" src="https://avatars0.githubusercontent.com/u/4248081?v=4" />
          <strong>Daniel de Oliveira</strong>
          <p>Nothing better than good coffee to solve user problems. computer science students - IFCE Maracanaú.</p>
        
          <button type="button" onClick={() => setMtachDev(null)}>FECHAR</button>
        </div>
      )}
    </div>
  );
}