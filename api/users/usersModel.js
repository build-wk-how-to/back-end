const db = require('../../data/dbConfig.js');

module.exports = {
  insertUser,
  insertGuide,
  getUserByName,
  getGuideByID,
  getCategories,
  getAllGuides,
  getGuidesByUser,
  getGuidesByCategory,
  updateGuide,
  deleteGuide,
  getUsersTest
};

function insertUser(user) {
  return db('users')
    .insert(user)
  // //   .then(ids => ({ userID: ids[0], username: user.username, password: user.password, usertype: user.usertype }));
  // db.insert(user).into('users')
  //   .then(ids => ({ userID: ids[0], username: user.username, password: user.password, usertype: user.usertype }));
}

function insertGuide(guide){
  return db('content')
    .insert(guide)
    .then(ids => ({ guideID: ids[0],guidename: guide.guidename, owner: guide.owner, guidecontent: guide.guidecontent, dateposted: guide.dateposted, category: guide.category }))
}

function getUserByName(name) {
  return db('users').where({ username: name }).first();
}

function getGuideByID(id){
  return db('content').where({ guideID: id }).first();
}

function getAllGuides(){
  return db('content');
}

function getGuidesByUser(userID) {
  return db('content').where({owner: userID});
}

function getGuidesByCategory(catID){
  return db('content').where({ categoryID: catID});
}

function getCategories(){
  return db('category');
}

function updateGuide(id, update){
  return db('content')
    .where({guideID: id})
    .update(update);
}

function deleteGuide(id){
  return db('content')
    .where({guideID: id})
    .del();
}

function getUsersTest(){
  return db('users');
}