import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Abhishek Obey',
        email: 'abhishek@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Akshit Shukla',
        email: 'Akshit@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users