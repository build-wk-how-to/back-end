exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(table) {
      table.increments();
      table
        .string('username', 255)
        .notNullable()
        .unique();
      table.string('password', 255).notNullable();
      table.string('usertype', 255).notNullable();
    })

    .createTable('content', function(table) {
  
      table
        .integer('guide_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
  
      table.string('guide_name', 128).notNullable()
      .unique();
      table.integer('owner').notNullable();
      table.text('guide_content', 500)
      .notNullable();
      table.date('date_created')
      .notNullable();
      table.integer('category')
      .unsigned()
      .notNullable()
      .references('category_id')
      .inTable('category')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
    .createTable('category', function(table) {
  
      table
        .integer('category_id')
        .unsigned()
        .notNullable()
        .references('guide_id')
        .inTable('content')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
  
      table.string('category_name', 128).notNullable()
      .unique();
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users')
    .dropTableIfExists('content')
    .dropTableIfExists('category');
  };
