import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'admin',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('admin1234'),
    isAdmin: true
  },
  {
    name: 'user',
    email: 'user@gmail.com',
    password: bcrypt.hashSync('user1234')
  }
];

export default users;
