exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'Dad', password: 'hiwiuuh', usertype: 'guidemaker' },
        { username: 'Ronald', password: 'yhweuhio', usertype: 'guidemaker' },
        { username: 'Richard', password: 'rkjljl', usertype: 'guidefinder' }
      ]);
    })
    .then(function () {
      // Inserts seed entries
      return knex('content').insert([
        { guide_id: 1, guidename: 'How to build a treehouse', owner: 1, guidecontent: 'oijwaoisjoijaoiwjf[ij[aijdoi[jfoijwaoif[ijaoijijsoijdojoijojojojoj', dateposted: 'July 9, 2019', category_id: 1 },
        { guide_id: 2, guidename: 'What to do in a hurricane', owner: 2, guidecontent: 'oijwaoisjoijaoiwjf[ij[aijdoi[jfoijwaoif[ijaoijijsoijdojoijojojojoj', 
        dateposted: 'July 9, 2019',
        category_id: 2 },
        { guide_id: 3, guidename: 'When you are not expecting', owner: 3, guidecontent: 'oijwaoisjoijaoiwjf[ij[aijdoi[jfoijwaoif[ijaoijijsoijdojoijojojojoj',
        dateposted: 'July 9, 2019',
        category_id: 3 }
      ]);
    })
    .then(function () {

      return knex('category').insert([
        { category_id: 1, categoryName: 'Help' }, 
      { category_id: 2, categoryName: 'How to' },
      { category_id: 3, categoryName: 'Which one?' }
      ])
    })
};