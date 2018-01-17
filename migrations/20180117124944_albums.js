exports.up = function(knex, Promise) {
  return knex.schema.createTable('albums', (table) => {
    table.increments();
    table.string('name');
    table.integer('rank');
    table.integer('unique_words');
  })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('albums');
};
