const axios = require('axios');
const Dev = require('../models/Dev');
module.exports = {
  async index(req, res){
    const { user } = req.headers;

    const loggedDev = await Dev.findById(user);

    const users = await Dev.find({
      $and: [
        { _id: { $ne: user } }, // $ne é como se fosse ( != ), ou seja, liste todos os usuarios menos o usuario logado
        { _id: { $nin: loggedDev.likes } }, // $nin é o Not in, ou seja, liste todos os usuarios que o usuario logado ja deu like
        { _id: { $nin: loggedDev.dislikes } },
      ],
    })
    return res.json(users);
  },

  async store(req, res){
    const { username } = req.body;
    const { user } = req.headers;
    
    // const loggedDev = await Dev.findById(user);
    // Validando se o usuário existe no github
    // if(!loggedDev) {
    //   return res.json({ error: 'Dev not exist' });
    // }
    
    const userExists = await Dev.findOne({ user: username });
    // Validando se o usuário ja existe na base de dados
    if(userExists){
      return res.json(userExists);
    }

    // Pegando os dados dos usuários na api do github atraves do username
    const response = await axios.get(`https://api.github.com/users/${username}`);
    
    const { name, bio, avatar_url: avatar } = response.data;

    const dev = await Dev.create({
      name,
      user: username,
      bio,
      avatar
    })

    return res.json(dev);
  }
};

/*
Boas praticas:
  Seu controller não deve mais do que 5 metodos essencias
    - Index
    - Show
    - Store
    - Update
    - Delete
*/