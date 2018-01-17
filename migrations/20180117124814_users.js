exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('username');
    table.string('token');
    table.string('pic');
    table.integer('entendres');
  })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('users');
};
