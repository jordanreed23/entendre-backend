exports.up = function(knex, Promise) {
  return knex.schema.createTable('artist_album', (table) => {
    table.increments();
    table.integer('artist_id').references('artists.id').onDelete('CASCADE');
    table.integer('album_id').references('albums.id').onDelete('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('artist_album');
};
