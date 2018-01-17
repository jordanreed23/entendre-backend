exports.up = function(knex, Promise) {
  return knex.schema.createTable('entendres', (table) => {
    table.increments();
    table.integer('user_id').references('users.id').onDelete('CASCADE');
    table.integer('song_id').references('songs.id').onDelete('CASCADE');
    table.integer('index');
    table.integer('length');
    table.integer('likes');
    table.integer('dislikes');
    table.string('entendre');
  })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('entendres');
};
