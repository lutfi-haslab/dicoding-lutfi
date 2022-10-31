const fs = require('fs');
const { resolve } = require('path');

const fileReadCallback = (error, data) => {
  if(error) {
    console.log("Gagal membaca berkas");
    return;
  }
  console.log(data);
}

// path.resolve(__dirname, notes.txt);
fs.readFile('todo.txt', 'utf-8', fileReadCallback);

// Teknik Readable Stream

const readableStream = fs.createReadStream('./article.txt', {
  highWaterMark: 10
});

readableStream.on('readable', () => {
  try {
      process.stdout.write(`[${readableStream.read()}]`);
  } catch(error) {
      // catch the error when the chunk cannot be read.
  }
});

readableStream.on('end', () => {
  console.log('Done');
});

// Teknik Writeable Stream
 
const writableStream = fs.createWriteStream('output.txt');
 
writableStream.write('Ini merupakan teks baris pertama!\n');
writableStream.write('Ini merupakan teks baris kedua!\n');
writableStream.end();
// writeableStream.end('Akhir dari writable stream!');


/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

 const rStream = fs.createReadStream(resolve(__dirname, 'input.txt'), {
  highWaterMark: 15,
});

const wStream = fs.createWriteStream(resolve(__dirname, 'output.txt'));

rStream.on('readable', () => {
  try {
    wStream.write(`${rStream.read()}\n`);
  } catch (error) {
    // catch the error when the chunk cannot be read.
  }
});

rStream.on('end', () => {
  wStream.end();
});