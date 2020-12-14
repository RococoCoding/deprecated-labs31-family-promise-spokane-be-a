// This table is the primary table for guests.
// many members can belong to a family but only families are users
// that log in and members are attributes not users
exports.up = function (knex) {
  return knex.schema.createTable('families', (tbl) => {
    tbl.increments();

    tbl
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .notNullable()
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

    tbl.integer('case_number').notNullable();

    tbl.jsonb('phone_one');

    tbl.jsonb('phone_two');

    tbl.jsonb('emergencyContact');

    tbl.jsonb('vehicle');

    tbl.string('last_permanent_address');

    tbl.jsonb('homeless_info');

    tbl.jsonb('gov_benefits');

    tbl.jsonb('insurance');

    tbl.jsonb('domestic_violence_info');

    tbl.string('avatar_url');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('families');
};