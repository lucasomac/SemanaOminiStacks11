exports.up = function (knex) {
    knex.schema.createTable('ongs', function (table) {
        table.string('id').primary();
        table.string('nome').notNullable();
    })
};

exports.down = function (knex) {

};
// 999710543 Wilton