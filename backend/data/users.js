import bcrypt from 'bcryptjs';

const users = [
    {
      name: 'Admin User',
      email: "admin@email.com",
      password: bcrypt.hashSync('123456', 10),
      isAdmin: true,

    },
    {
      name: 'Barath',
      email: "barath@email.com",
      password: bcrypt.hashSync('123456', 10),
      isAdmin: false,

    },
     {
      name: 'jain',
      email: "jain@email.com",
      password: bcrypt.hashSync('123456', 10),
      isAdmin: false,

    }


];

export default users;