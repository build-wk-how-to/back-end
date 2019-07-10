const db = require('../../data/dbConfig.js');

module.exports = {
  add,
  update,
  remove,
  find,
  findBy,
  findById,
};

function find() {
  return db('users').select('id', 'username', 'password', 'usertype');
}



function findBy(filter) {
  return db('users').where(filter);
}

async function add(user) {
  const [id] = await db('users').insert(user);

  return findById(id);
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}

function remove(id) {
  return db('users')
  .where({ id })
  .del()
  }
  function update(body, id) {
    return db('users')
    .where({ id })
    .update(body)
    }

function find() {
  return db('content').select('guidename', 'owner', 'guidecontent', 'dateposted', 'category_id');
}
  