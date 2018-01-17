exports.up = function(knex, Promise) {
  return knex.schema.createTable('songs', (table) => {
    table.increments();
    table.string('name');
    table.integer('album_id').references('albums.id').onDelete('CASCADE');
    table.integer('artist_id').references('artists.id').onDelete('CASCADE');
    table.integer('rank');
    table.integer('unique_words');
  })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('songs');
};
