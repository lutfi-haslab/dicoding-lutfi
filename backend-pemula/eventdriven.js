const {EventEmitter} = require('events')

const myEvent = new EventEmitter();

const makeCoffee = ({ name }) => {
  console.log(`Kopi ${name} telah dibuat!`);
};

const makeBill = ({ price }) => {
  console.log(`Bill sebesar ${price} telah dibuat!`);
}

myEvent.on('coffee-order', makeCoffee);
myEvent.on('coffee-order', makeBill);


myEvent.emit('coffee-order', {name: "Tubruk", price: '20000'});

// Tugas

// TODO 1
// done sudah diatas
 
const birthdayEventListener = (name) => {
  console.log(`Happy birthday ${name}!`);
}
 
// TODO 2
const myEmmiter = new EventEmitter();
 
// TODO 3
 myEmmiter.on('birthday', birthdayEventListener);

// TODO 4
myEmmiter.emit('birthday', "Lutfi Ikbal Majid")