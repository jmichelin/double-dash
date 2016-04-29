module.exports = {
  cohorts: getCohorts(),
<<<<<<< 4fa7ceffa894319f6557c40d56c527629fc351ab
  people: getPeople(),
  zenQuote: getZenQuote()
=======
  people: getPeople()
>>>>>>> [feature] added cohort data and mock data to server and client plus tests
};

function getCohorts() {
  return [
    {
<<<<<<< 4fa7ceffa894319f6557c40d56c527629fc351ab
<<<<<<< HEAD
<<<<<<< 47637176503b9d8a0128e9cf6020d10753689465
<<<<<<< 2cf7d7bbb959b6fccc199ec0c096c8c1a2860d7e
=======
>>>>>>> [fix] adjusted data stream from api for specific teams
=======
>>>>>>> 6544f1cbd128d0e88e0376ab0e78c5d16de7363a
      'name': 'w.la.fellows',
      'id': 1540144,
      'slug': 'w-la-fellows',
      'description': '',
      'permission': 'push',
      'privacy': 'secret',
      'url': 'https://api.github.com/teams/1540144',
      'members_url': 'https://api.github.com/teams/1540144/members{/member}',
      'repositories_url': 'https://api.github.com/teams/1540144/repos'
<<<<<<< HEAD
<<<<<<< 47637176503b9d8a0128e9cf6020d10753689465
=======
>>>>>>> 6544f1cbd128d0e88e0376ab0e78c5d16de7363a
    },
    {
      'name': 'R:MKS29.students',
      'id': 1805472,
      'slug': 'r-mks29-students',
      'description': '',
      'permission': 'pull',
      'privacy': 'secret',
      'url': 'https://api.github.com/teams/1805472',
      'members_url': 'https://api.github.com/teams/1805472/members{/member}',
      'repositories_url': 'https://api.github.com/teams/1805472/repos'
    },
    {
      'name': 'MakerSquare Excel Curriculum Team',
      'id': 1933574,
      'slug': 'makersquare-excel-curriculum-team',
      'description': '',
      'permission': 'pull',
      'privacy': 'secret',
      'url': 'https://api.github.com/teams/1933574',
      'members_url': 'https://api.github.com/teams/1933574/members{/member}',
      'repositories_url': 'https://api.github.com/teams/1933574/repos'
    },
    {
      'name': 'R:MKS38.students',
      'id': 1938919,
      'slug': 'r-mks38-students',
      'description': 'LA - April 11th, 2016',
      'permission': 'pull',
      'privacy': 'secret',
      'url': 'https://api.github.com/teams/1938919',
      'members_url': 'https://api.github.com/teams/1938919/members{/member}',
      'repositories_url': 'https://api.github.com/teams/1938919/repos'
    },
    {
      'name': 'R:MKS41.students',
      'id': 1978046,
      'slug': 'r-mks41-students',
      'description': 'LA - May 31st, 2016',
      'permission': 'pull',
      'privacy': 'secret',
      'url': 'https://api.github.com/teams/1978046',
      'members_url': 'https://api.github.com/teams/1978046/members{/member}',
      'repositories_url': 'https://api.github.com/teams/1978046/repos'
    },
    {
      'name': 'MKS37.staff-curriculum-accessors',
      'id': 1992997,
      'slug': 'mks37-staff-curriculum-accessors',
      'description': '',
      'permission': 'pull',
      'privacy': 'closed',
      'url': 'https://api.github.com/teams/1992997',
      'members_url': 'https://api.github.com/teams/1992997/members{/member}',
      'repositories_url': 'https://api.github.com/teams/1992997/repos'
    },
    {
      'name': 'MKS36',
      'id': 1994764,
      'slug': 'mks36',
      'description': '',
      'permission': 'pull',
      'privacy': 'closed',
      'url': 'https://api.github.com/teams/1994764',
      'members_url': 'https://api.github.com/teams/1994764/members{/member}',
      'repositories_url': 'https://api.github.com/teams/1994764/repos'
<<<<<<< HEAD
=======
=======
>>>>>>> [feature] added cohort data and mock data to server and client plus tests
      "name": "w.la.fellows",
      "id": 1540144,
      "slug": "w-la-fellows",
      "description": "",
      "permission": "push",
      "privacy": "secret",
      "url": "https://api.github.com/teams/1540144",
      "members_url": "https://api.github.com/teams/1540144/members{/member}",
      "repositories_url": "https://api.github.com/teams/1540144/repos"
<<<<<<< 4fa7ceffa894319f6557c40d56c527629fc351ab
=======
>>>>>>> [fix] adjusted data stream from api for specific teams
    },
    {
      'name': 'R:MKS29.students',
      'id': 1805472,
      'slug': 'r-mks29-students',
      'description': '',
      'permission': 'pull',
      'privacy': 'secret',
      'url': 'https://api.github.com/teams/1805472',
      'members_url': 'https://api.github.com/teams/1805472/members{/member}',
      'repositories_url': 'https://api.github.com/teams/1805472/repos'
    },
    {
      'name': 'MakerSquare Excel Curriculum Team',
      'id': 1933574,
      'slug': 'makersquare-excel-curriculum-team',
      'description': '',
      'permission': 'pull',
      'privacy': 'secret',
      'url': 'https://api.github.com/teams/1933574',
      'members_url': 'https://api.github.com/teams/1933574/members{/member}',
      'repositories_url': 'https://api.github.com/teams/1933574/repos'
    },
    {
      'name': 'R:MKS38.students',
      'id': 1938919,
      'slug': 'r-mks38-students',
      'description': 'LA - April 11th, 2016',
      'permission': 'pull',
      'privacy': 'secret',
      'url': 'https://api.github.com/teams/1938919',
      'members_url': 'https://api.github.com/teams/1938919/members{/member}',
      'repositories_url': 'https://api.github.com/teams/1938919/repos'
    },
    {
      'name': 'R:MKS41.students',
      'id': 1978046,
      'slug': 'r-mks41-students',
      'description': 'LA - May 31st, 2016',
      'permission': 'pull',
      'privacy': 'secret',
      'url': 'https://api.github.com/teams/1978046',
      'members_url': 'https://api.github.com/teams/1978046/members{/member}',
      'repositories_url': 'https://api.github.com/teams/1978046/repos'
    },
    {
      'name': 'MKS37.staff-curriculum-accessors',
      'id': 1992997,
      'slug': 'mks37-staff-curriculum-accessors',
      'description': '',
      'permission': 'pull',
      'privacy': 'closed',
      'url': 'https://api.github.com/teams/1992997',
      'members_url': 'https://api.github.com/teams/1992997/members{/member}',
      'repositories_url': 'https://api.github.com/teams/1992997/repos'
    },
    {
<<<<<<< 47637176503b9d8a0128e9cf6020d10753689465
=======
    },
    {
      "name": "R:MKS29.students",
      "id": 1805472,
      "slug": "r-mks29-students",
      "description": "",
      "permission": "pull",
      "privacy": "secret",
      "url": "https://api.github.com/teams/1805472",
      "members_url": "https://api.github.com/teams/1805472/members{/member}",
      "repositories_url": "https://api.github.com/teams/1805472/repos"
    },
    {
      "name": "MakerSquare Excel Curriculum Team",
      "id": 1933574,
      "slug": "makersquare-excel-curriculum-team",
      "description": "",
      "permission": "pull",
      "privacy": "secret",
      "url": "https://api.github.com/teams/1933574",
      "members_url": "https://api.github.com/teams/1933574/members{/member}",
      "repositories_url": "https://api.github.com/teams/1933574/repos"
    },
    {
      "name": "R:MKS38.students",
      "id": 1938919,
      "slug": "r-mks38-students",
      "description": "LA - April 11th, 2016",
      "permission": "pull",
      "privacy": "secret",
      "url": "https://api.github.com/teams/1938919",
      "members_url": "https://api.github.com/teams/1938919/members{/member}",
      "repositories_url": "https://api.github.com/teams/1938919/repos"
    },
    {
      "name": "R:MKS41.students",
      "id": 1978046,
      "slug": "r-mks41-students",
      "description": "LA - May 31st, 2016",
      "permission": "pull",
      "privacy": "secret",
      "url": "https://api.github.com/teams/1978046",
      "members_url": "https://api.github.com/teams/1978046/members{/member}",
      "repositories_url": "https://api.github.com/teams/1978046/repos"
    },
    {
      "name": "MKS37.staff-curriculum-accessors",
      "id": 1992997,
      "slug": "mks37-staff-curriculum-accessors",
      "description": "",
      "permission": "pull",
      "privacy": "closed",
      "url": "https://api.github.com/teams/1992997",
      "members_url": "https://api.github.com/teams/1992997/members{/member}",
      "repositories_url": "https://api.github.com/teams/1992997/repos"
    },
    {
>>>>>>> [feature] added cohort data and mock data to server and client plus tests
      "name": "MKS36",
      "id": 1994764,
      "slug": "mks36",
      "description": "",
      "permission": "pull",
      "privacy": "closed",
      "url": "https://api.github.com/teams/1994764",
      "members_url": "https://api.github.com/teams/1994764/members{/member}",
      "repositories_url": "https://api.github.com/teams/1994764/repos"
<<<<<<< 4fa7ceffa894319f6557c40d56c527629fc351ab
>>>>>>> [feature] added cohort data and mock data to server and client plus tests
=======
      'name': 'MKS36',
      'id': 1994764,
      'slug': 'mks36',
      'description': '',
      'permission': 'pull',
      'privacy': 'closed',
      'url': 'https://api.github.com/teams/1994764',
      'members_url': 'https://api.github.com/teams/1994764/members{/member}',
      'repositories_url': 'https://api.github.com/teams/1994764/repos'
>>>>>>> [fix] adjusted data stream from api for specific teams
=======
>>>>>>> 6544f1cbd128d0e88e0376ab0e78c5d16de7363a
=======
>>>>>>> [feature] added cohort data and mock data to server and client plus tests
    }
  ];
}

function getPeople() {
  return [
    { id: 1, firstName: 'John', lastName: 'Papa', age: 25, location: 'Florida' },
    { id: 2, firstName: 'Ward', lastName: 'Bell', age: 31, location: 'California' },
    { id: 3, firstName: 'Colleen', lastName: 'Jones', age: 21, location: 'New York' },
    { id: 4, firstName: 'Madelyn', lastName: 'Green', age: 18, location: 'North Dakota' },
    { id: 5, firstName: 'Ella', lastName: 'Jobs', age: 18, location: 'South Dakota' },
    { id: 6, firstName: 'Landon', lastName: 'Gates', age: 11, location: 'South Carolina' },
    { id: 7, firstName: 'Haley', lastName: 'Guthrie', age: 35, location: 'Wyoming' },
    { id: 8, firstName: 'Aaron', lastName: 'Jinglehiemer', age: 22, location: 'Utah' }
  ];
}

function getZenQuote() {
  return 'Responsive is better than fast.'
}
