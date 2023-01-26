const crypto = require('crypto')

let DB = []

class UserManager {
    getUsers = () => {
        return DB
    }

    insertUser = user => {
        user.salt = crypto.randomBytes(128).toString('base64')
        user.password = crypto.createHmac('sha256', user.salt).update((user.password)).digest('hex')
        DB.push(user)
        return user
    }

    validateUser = (username, password) => {
        const user = DB.find(u => u.username == username)
        if(!user) {
            console.log('user not found')
            return
        }
        
        const newHash = crypto.createHmac('sha256', user.salt).update((password)).digest('hex')

        if (newHash == user.password) console.log('Logged!')
        else console.log('Invalid password')
    }
}

const manager = new UserManager()
manager.insertUser({
    name: 'Juan',
    lastname: 'Pacheco',
    username: 'JuanPacheco',
    password: '1234'
})

console.log(manager.getUsers())
manager.validateUser('JuanPacheco', '1234')