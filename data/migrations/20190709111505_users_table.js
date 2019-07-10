// exports.up = function(knex, Promise) {
//     return knex.schema.createTable('users', function(table) {
//       table.increments();
//       table
//         .string('username', 255)
//         .notNullable()
//         .unique();
//       table.string('password', 255).notNullable();
//       table.string('usertype', 125).notNullable();
//     })

//     .createTable('content', function(table) {

//       table
//         .integer('guideId')
//         .notNullable()

//       table.string('guideName', 128).notNullable()

//       table.integer('owner')
//       .unsigned()
//       .notNullable()
//       .references('id')
//       .inTable('users')
//         .onDelete('CASCADE')
//         .onUpdate('CASCADE');
//       table.text('guideContent', 500)
//       .notNullable();
//       table.date('dateCreated')
//       .notNullable();
//       table.integer('category')
//       .unsigned()
//       .notNullable()
//       .references('categoryId')
//       .inTable('category')
//         .onDelete('CASCADE')
//         .onUpdate('CASCADE');
//     })
//     .createTable('category', function(table) {

//       table
//         .integer('categoryId').notNullable()
//       table.string('categoryName', 128).notNullable();
//     })
//   };

//   exports.down = function(knex, Promise) {
//     return knex.schema.dropTableIfExists('users')
//     .dropTableIfExists('content')
//     .dropTableIfExists('category');
//   };

exports.up = function(knex, Promise) {
  // the tables most be created in the right order,
  // tables with FK are created after the referenced table is created

  return knex.schema
    .createTable("users", table => {
      table.increments();
      table
        .string("username", 128)
        .notNullable()
        .unique();
      table.string("password", 128).notNullable();
      table.string("usertype", 128).notNullable();
    })
    .createTable("content", table => {
      table.integer('guide_id')
      table
        .string("guidename", 128)
        .notNullable() //forcing a value to be entered
        
      table
        .integer("owner")
        .unsigned()
        .notNullable()
        .references("id") //foreign key referencing the tracks table above - ORDER MATTERS
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table.text("guidecontent", 500).notNullable();
      table.date("dateposted").notNullable();
      table
      .integer("category_id")
      .unsigned()
        .notNullable()
       .references("id")
        .inTable("category")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })


    .createTable("category", function(table) {
      table.integer("category_id")
      table.string("categoryname", 128).notNullable();
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    
    .dropTableIfExists("category")
    .dropTableIfExists("content")
    .dropTableIfExists("users");
};
