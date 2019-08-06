const { Schema, model } = require('mongoose');

const DevSchema = new Schema({ //Schema do Dev (Estrutura da tabela no banco de dados)
  name: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  bio: String,
  avatar: {
    type: String,
    required: true,
  },
}, {
  timestamps: true, // cria coluna CreatedAt(armazena automaticamente a data de criação de um registro) e updatedAt(armazena a data da ultima atualização no registro)
});

module.exports = model('Dev', DevSchema);