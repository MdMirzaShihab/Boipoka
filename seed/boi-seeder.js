var Boi = require('../models/ComputionBoi');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/boipoka', {
  useNewUrlParser: true
});


var ComputionBoi = [
  new Boi({
    image: '/images/Gaddis - Starting Out With C++ Cpp Early Objects 9th ed 2017.png',
    cardTitle: 'Gaddis - Starting Out With C++ Cpp Early Objects 9th ed 2017',
    cardSubTitle: 'C++',
    cardText: 'For School of Computing, Programming Technique 1 and Programming Technique 2    ',
    bookLink: '/books/Gaddis - Starting Out With C++ Cpp Early Objects 9th ed 2017.pdf' ,

  }),

  new Boi({
    image: '/images/Karumanchi-made easy copy.png',
    cardTitle: 'Karumanchi-made easy',
    cardSubTitle: 'Data Structure and algorithem',
    cardText: 'For School of Computing, Data Structure and Algorythem    ',
    bookLink: '/books/Karumanchi-made easy.pdf' ,

  }),

  new Boi({
    image: '/images/Operating System Concepts [9 ed.]-Silberschatz (lnw Adam) copy.png',
    cardTitle: 'Operating System Concepts [9 ed.]-Silberschatz (lnw Adam)',
    cardSubTitle: 'Operating System',
    cardText: 'For School of Computing, Operating System    ',
    bookLink:'/books/Operating System Concepts [9 ed.]-Silberschatz (lnw Adam).pdf',

  }),

  new Boi({
    image: '/images/Sommerville - Software Engineering 10th GLOBAL Edition c2016 txtbk copy.png',
    cardTitle: 'Software Engineering 10th GLOBAL Edition',
    cardSubTitle: 'Software Engineering',
    cardText: 'For School of Computing, Software Engineering    ',
    bookLink:'/books/Sommerville - Software Engineering 10th GLOBAL Edition c2016 txtbk.pdf',

  }),

  new Boi({
    image: '/images/System Analysis and Design 9th Edition - Shelly Cashman copy.png',
    cardTitle: 'System Analysis and Design 9th Edition',
    cardSubTitle: 'System Analysis and Design',
    cardText: 'For School of Computing, System Analysis and Design subject    ',
    bookLink: '/books/System Analysis and Design 9th Edition - Shelly Cashman.pdf',

  })
];
var done = 0;
for (var i = 0; i < ComputionBoi.length; i++) {
  ComputionBoi[i].save(function(err, result) {
    done++;
    if (done === ComputionBoi.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
