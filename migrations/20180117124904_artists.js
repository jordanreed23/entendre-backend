exports.up = function(knex, Promise) {
  return knex.schema.createTable('artists', (table) => {
    table.increments();
    table.string('name');
    table.integer('vocab');
    table.integer('entendres');
  })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('artists');
};
