
exports.up = function(knex) {
  return knex.schema
  .createTable('project2', table => {
      table.increments('id')
      table.text('username', 128)
        .notNullable()
      table.string('password')
        .notNullable()
      table.string('department')
        .notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project2')
};
