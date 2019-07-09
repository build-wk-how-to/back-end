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
    
};