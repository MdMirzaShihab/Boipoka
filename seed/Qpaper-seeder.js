var Q = require('../models/Qpaper');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/boipoka', {
  useNewUrlParser: true
});


var Qpaper = [
  new Q({
    image: '/images/question-paper-7-731146.png',
    cardTitle: 'Artificial Intelligence',
    cardSubTitle: 'Mid Term 2014',
    cardText: 'For School of Computing, Software Engineering    ',
    bookLink: '/books/Artificial Intelligence Mid Term 2014.docx',

  }),



  new Q({
    image: '/images/question-paper-7-731146.png',
    cardTitle: 'Artificial Intelligence',
    cardSubTitle: 'Mid Term 2015 2016',
    cardText: 'For School of Computing, Software Engineering    ',
    bookLink: '/books/Artificial Intelligence Mid Term 2015 2016.pdf' ,

  }),

  new Q({
    image: '/images/question-paper-7-731146.png',
    cardTitle: 'Artificial Intelligence',
    cardSubTitle: 'Mid Term 2017',
    cardText: 'For School of Computing, Operating System    ',
    bookLink:'/books/Artificial Intelligence Mid Term 2017.docx',

  }),

  new Q({
    image: '/images/question-paper-7-731146.png',
    cardTitle: 'Artificial Intelligence',
    cardSubTitle: 'Mid Term 2012',
    cardText: 'For School of Computing, Operating System     ',
    bookLink: '/books/Artificial Intelligence Mid Term 2012.docx' ,

  }),

  new Q({
    image: '/images/question-paper-7-731146.png',
    cardTitle: 'Object Oriented Programming',
    cardSubTitle: 'Final 2016_2017',
    cardText: 'For School of Computing, Software Engineering    ',
    bookLink:'/books/Object Oriented Programming Final 2016_2017.pdf',


  }),

  new Q({
    image: '/images/question-paper-7-731146.png',
    cardTitle: '/Object Oriented Programming7',
    cardSubTitle: 'Final 2015_2016',
    cardText: 'For School of Computing, Network Communication      ',
    bookLink: '/books/Object Oriented Programming Final 2015_2016.pdf' ,


  }),

  new Q({
    image: '/images/question-paper-7-731146.png',
    cardTitle: 'Theory of Computer Science',
    cardSubTitle: 'MidTerm 2015 (14_15)',
    cardText: 'For School of Computing, Operating System      ',
    bookLink: '/books/Theory of Computer Science MidTerm 2015 (14_15).pdf' ,


  }),

  new Q({
    image: '/images/question-paper-7-731146.png',
    cardTitle: 'Theory of Computer Science',
    cardSubTitle: 'MidTerm 2015 (15_16)',
    cardText: 'For School of Computing, Network Communication    ',
    bookLink: '/books/Theory of Computer Science MidTerm 2015 (15_16).pdf' ,


  }),

  new Q({
    image: '/images/question-paper-7-731146.png',
    cardTitle: 'Theory of Computer Science',
    cardSubTitle: 'MidTerm 2016 (Ans)',
    cardText: 'For School of Computing, Software Engineering   ',
    bookLink: '/books/Theory of Computer Science MidTerm 2016 (Ans).pdf' ,


  }),

  new Q({
    image: '/images/question-paper-7-731146.png',
    cardTitle: 'Theory of Computer Science',
    cardSubTitle: 'MidTerm 2016',
    cardText: 'For School of Computing, Operating System      ',
    bookLink: '/books/Theory of Computer Science MidTerm 2016.pdf' ,


  }),

  new Q({
    image: '/images/question-paper-7-731146.png',
    cardTitle: 'Theory of Computer Science',
    cardSubTitle: 'MidTerm 2012',
    cardText: 'For School of Computing, Software Engineering    ',
    bookLink: '/books/Theory of Computer Science MidTerm 2012.pdf' ,


  }),

  new Q({
    image: '/images/question-paper-7-731146.png',
    cardTitle: 'Human Computer Interaction',
    cardSubTitle: 'FINAL 2014_2015',
    cardText: 'For School of Computing, Software Engineering    ',
    bookLink: '/books/Human Computer Interaction FINAL 2014_2015.pdf' ,



  })


];
var done = 0;
for (var i = 0; i < Qpaper.length; i++) {
  Qpaper[i].save(function(err, result) {
    done++;
    if (done === Qpaper.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
