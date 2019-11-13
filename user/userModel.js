const db = require('../data/dbConfig')

function getUsers(department) {
    return db('project2')
    .where(department)
    .select('id', 'username', 'department')
}

function getUserBy (user) {
    return db('project2')
    .where(user)
    .select('id', 'username', 'department')
    .first()
}

function getUserId(id) {
    return db('project2 as p')
    .where('p.id', id)
    .select('id', 'username', 'department')
    .first()
}

function addUser(user) {
    return db('project2 as p')
    .insert(user)
    .then(([id]) => this.getUserId(id))
}

module.exports = {
    getUsers,
    getUserBy,
    getUserId,
    addUser
}