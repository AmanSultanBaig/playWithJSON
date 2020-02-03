object = [
  {
    "name": "Aman",
    "address": "ABC",
    "city": "karachi",
    "work" : [{
      "company": "ABC Company1",
      "position": "Developer",
      "website": "www.web.com",
    }],
    "education": [{
    "institution": "University",
    "area": "Software Development",
    "studyType": "Bachelor",
    "startDate": "2011-01-01",
    "endDate": "2013-01-01",
    "gpa": "4.0",
    "courses": [
      "DB1101 - Basic SQL",
      "MONGODB",
      "NodeJS"
    ]
  }],
  },
  {
    "name": "Noman",
    "address": "ABC",
    "city": "karachi",
    "work" : [{
      "company": "ABC Company2",
      "position": "Developer",
      "website": "www.web.com",
    }],
    "education": [{
    "institution": "University",
    "area": "Software Development",
    "studyType": "Bachelor",
    "startDate": "2011-01-01",
    "endDate": "2013-01-01",
    "gpa": "4.0",
    "courses": [
      "DB1101 - Basic SQL"
    ]
  }],
  },
  {
    "name": "Salman",
    "address": "ABC",
    "city": "karachi",
    "work" : [{
      "company": "ABC Company3",
      "position": "Developer",
      "website": "www.web.com",
    }],
    "education": [{
    "institution": "University",
    "area": "Software Development",
    "studyType": "Bachelor",
    "startDate": "2011-01-01",
    "endDate": "2013-01-01",
    "gpa": "4.0",
    "courses": [
      "DB1101 - Basic SQL"
    ]
  }],
  },
  {
    "name": "Usman",
    "address": "ABC",
    "city": "karachi",
    "work" : [{
      "company": "ABC Company3",
      "position": "Developer",
      "website": "www.web.com",
    }],
    "education": [{
    "institution": "University",
    "area": "Software Development",
    "studyType": "Bachelor",
    "startDate": "2011-01-01",
    "endDate": "2013-01-01",
    "gpa": "4.0",
    "courses": [
      "DB1101 - Basic SQL"
    ]
  }],
  },
  {
    "name": "Nabeel",
    "address": "ABC",
    "city": "karachi",
    "work" : [{
      "company": "ABC Company3",
      "position": "Developer",
      "website": "www.web.com",
    }],
    "education": [{
    "institution": "University",
    "area": "Software Development",
    "studyType": "Bachelor",
    "startDate": "2011-01-01",
    "endDate": "2013-01-01",
    "gpa": "4.0",
    "courses": [
      "DB1101 - Basic SQL"
    ]
  }],
  },
  {
    "name": "Talha",
    "address": "ABC",
    "city": "karachi",
    "work" : [{
      "company": "ABC Company3",
      "position": "Developer",
      "website": "www.web.com",
    }],
    "education": [{
    "institution": "University",
    "area": "Software Development",
    "studyType": "Bachelor",
    "startDate": "2011-01-01",
    "endDate": "2013-01-01",
    "gpa": "4.0",
    "courses": [
      "DB1101 - Basic SQL"
    ]
  }],
  },
];

// get first object
console.log(object);
// get inner object value
console.log(object[0].work[0].company);
// get inner sub level object value 
console.log(object[0].education[0].courses[0]);
// JSON handling is very useful for api 
