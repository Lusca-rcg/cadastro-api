exports.up = function(knex) {
  return knex.schema.createTable('cadastros', table => {
    table.increments('id');
    table.string('nome').notNullable();
    table.string('email').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('cadastros');
};
