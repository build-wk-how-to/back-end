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
        { guide_id: 1, guide_name: 'How to build a treehouse', owner: 'id', guide_content: 'oijwaoisjoijaoiwjf[ij[aijdoi[jfoijwaoif[ijaoijijsoijdojoijojojojoj', date_created: 'July 9, 2019', category: 1 },
        { guide_id: 2, guide_name: 'What to do in a hurricane', owner: 'id', guide_content: 'oijwaoisjoijaoiwjf[ij[aijdoi[jfoijwaoif[ijaoijijsoijdojoijojojojoj', 
        date_created: 'July 9, 2019',
        category: 2 },
        { guide_id: 3, guide_name: 'When you are not expecting', owner: 'id', guide_content: 'oijwaoisjoijaoiwjf[ij[aijdoi[jfoijwaoif[ijaoijijsoijdojoijojojojoj',
        date_created: 'July 9, 2019',
        category: 3 }
      ]);
    })
    .then(function () {

      return knex('category').insert([
        { category_id: 1, category_name: 'Help',
      cat_id: 1 }, 
      { category_id: 2, category_name: 'How to', cat_id: 2 },
      { category_id: 3, category_name: 'Which one?',
    cat_id: 3 }
      ])
    })
};