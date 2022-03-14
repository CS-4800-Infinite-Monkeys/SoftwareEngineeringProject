const datefns = require('date-fns');
const {compareAsc} = require('date-fns');
const http = require('http');


const hostname = '127.0.0.1';
const port = 3000;
const today = new Date();
const aDate = new Date('05.03.2022');
const bDate = new Date('01.26.2021');
const arr = [today, aDate, bDate];
arr.sort(compareAsc);
let len = arr.length;
let text = '<ul>'
for(let i = 0; i< len; i++){
  text += '<li>' + datefns.format(arr[i], 'MM.dd.yyyy') + '</li>';
}
text += '</ul>';
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(text);
  //A list of dates, ordered ascending using datefns's sort compareAsc.
});



server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });