//   await User.remove({}); // Change Remove to remove
//   const importUser = await User.insertMany(users);
//   res.send({ importUser });
// });

// module.exports = ImportData;

// seed.js

const express = require('express');
const User = require('./Models/UserModel.js');
const users = require('./data/users.js');

const ImportData = express.Router();

ImportData.post('/user', async (req, res) => {
  //   try {
  await User.deleteMany({}); // Change Remove to deleteMany
  const importUser = await User.insertMany(users);
  res.send({ importUser });
  //   } catch (error) {
  //     console.error('Error importing data:', error.message);
  //     res.status(500).send({ error: 'Internal Server Error' });
  //   }
});

module.exports = ImportData;
