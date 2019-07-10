exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { userID: 1, username: 'Dad', password: 'hiwiuuh', usertype: 2 },
        { userID: 2, username: 'Ronald', password: 'yhweuhio', usertype: 2 },
        { userID: 3, username: 'Richard', password: 'rkjljl', usertype: 1 }
      ]);
    })
    .then(function () {
      // Inserts seed entries
      return knex('content').insert([
        { guideID: 1, guidename: 'How to build a treehouse', owner: 1, guidecontent: 'oijwaoisjoijaoiwjf[ij[aijdoi[jfoijwaoif[ijaoijijsoijdojoijojojojoj', dateposted: 'July 9, 2019', categoryID: 1 },
        { guideID: 2, guidename: 'What to do in a hurricane', owner: 2, guidecontent: 'oijwaoisjoijaoiwjf[ij[aijdoi[jfoijwaoif[ijaoijijsoijdojoijojojojoj', 
        dateposted: 'July 9, 2019',
        categoryID: 2 },
        { guideID: 3, guidename: 'When you are not expecting', owner: 3, guidecontent: 'oijwaoisjoijaoiwjf[ij[aijdoi[jfoijwaoif[ijaoijijsoijdojoijojojojoj',
        dateposted: 'July 9, 2019',
        categoryID: 3 }
      ]);
    })
    .then(function () {

      return knex('category').insert([
        { categoryID: 1, categoryName: 'Help' }, 
      { categoryID: 2, categoryName: 'How to' },
      { categoryID: 3, categoryName: 'Which one?' }
      ])
    })
};