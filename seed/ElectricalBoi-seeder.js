var EEEBoi = require('../models/ElectricalBoi');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/boipoka', {
  useNewUrlParser: true
});


var ElectricalBoi = [
  new EEEBoi({
    image: '/images/Electrical power transmission system engineering 3rd Ed [2014].png',
    cardTitle: '[Bookflare.net] - Modeling And High Performance Control Of Electrical Machines',
    cardSubTitle: 'Electrical Machine Control',
    cardText: 'For School of Electrical, Electrical Electronics Major    ',
    bookLink: '/books/[Bookflare.net] - Modeling And High Performance Control Of Electrical Machines.pdf' ,

  }),

  new EEEBoi({
    image: '/images/Principles of Electrical Machines and Power Electronics P_C_Sen copy.png',
    cardTitle: 'Principles of Electric Machines Solutions',
    cardSubTitle: 'EEE Machines',
    cardText: 'For School of Electrical, Electrical Electronics Major    ',
    bookLink: '/books/Principles of Electric Machines Solutions.pdf' ,

  }),

  new EEEBoi({
    image: '/images/Probability and Statistics for Engineering and the Sciences 9th ed - Jay L. Devore (Cengage Learning, 2016) .png',
    cardTitle: 'Probability and Statistics for Engineering and the Sciences 9th ed',
    cardSubTitle: 'Probability and Statistics',
    cardText: 'For School of Electrical, Electrical Electronics Major   ',
    bookLink:'/books/Probability and Statistics for Engineering and the Sciences 9th ed.pdf',

  }),

  new EEEBoi({
    image: '/images/embaded microprocessor systems real world design.png',
    cardTitle: 'Embaded microprocessor systems real world design',
    cardSubTitle: 'Microprocessor',
    cardText: 'For School of Electrical, Electrical Electronics Major   ',
    bookLink:'/books/embaded microprocessor systems real world design.pdf',

  }),

  new EEEBoi({
    image: '/images/Ordinary and Partial Differential Equation Routines in C, C++, Fortran, Java®, Maple®, and MATLAB® (Chapman & Hall, CRC, 2004).png',
    cardTitle: 'Ordinary and Partial Differential Equation Routines in C, C++, Fortran, Java®, Maple®, and MATLAB® (Chapman & Hall, CRC, 2004)',
    cardSubTitle: 'Differential Equation',
    cardText: 'For School of Electrical, Electrical Electronics Major    ',
    bookLink: '/books/Ordinary and Partial Differential Equation Routines in C, C++, Fortran, Java®, Maple®, and MATLAB® (Chapman & Hall, CRC, 2004).pdf',

  })
];
var done = 0;
for (var i = 0; i < ElectricalBoi.length; i++) {
  ElectricalBoi[i].save(function(err, result) {
    done++;
    if (done === ElectricalBoi.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
