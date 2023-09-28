const bcrypt = require('bcryptjs'};

const users = [
  {
    name: 'admin',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('admin1234', 12),
    isAdmin: true
  },
  {
    name: 'user',
    email: 'user@gmail.com',
    password: bcrypt.hashSync('user1234', 12)
  }
];

module.exports = users;
