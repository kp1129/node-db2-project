
exports.up = function(knex) {
    // create table, build schema
  return knex.schema.createTable('cars', tbl => {
    //   REQUIRED: primary key, VIN, make, model, mileage
    // primary key
    tbl.increments();
    // VIN
    tbl
        .string('VIN', 17)
        .notNullable()
        .unique()
        .index();
    // make
    tbl
        .string('make')
        .notNullable();
    // model
    tbl
        .string('model')
        .notNullable();
    // mileage
    tbl
        .float('mileage')
        .notNullable();

    // NOT REQUIRED: transmission type and title status
    // transmission type
    tbl
        .string('transmission type');
    // title status
    tbl
        .string('title status'); 
  })
};

exports.down = function(knex) {
    // drop table
    return knex.schema.dropTableIfExists('cars');
};
