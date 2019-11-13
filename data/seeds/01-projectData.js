
exports.seed = function(knex) {
  return knex('project2').insert([
    {username: 'maryam', password:'maryam', department:'CSE'},
    {username: 'karim', password: 'karim', department: 'MEE'},
    {username: 'yusuf', password: 'yusuf', department: 'MED'}
  ]);
};