const db = require('../data/dbConfig')

function getUsers() {
    return db('project2')
}

function getUserBy (user) {
    return db('project2')
    .where(user)
    .first()
}

function getUserId(id) {
    return db('project2 as p')
    .where('p.id', id)
    .first()
}

function addUser(user) {
    return db('project2 as p')
    .insert(user)
    .where(([id]) => this.getUserId(id))
}

module.exports = {
    getUsers,
    getUserBy,
    getUserId,
    addUser
}