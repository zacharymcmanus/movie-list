/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("movies", (table) => {
        table.increments("id");
        table.string("title");
        table.string("genre");
        table.date("release_date");
        table.string("cover");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists("movies");
};
