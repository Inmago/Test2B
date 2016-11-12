import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'JS World',
  });
});

app.get('/task2B', (req, res) => {
  const fname = req.query.fullname;
  const sname = fname.split(' ').reverse();
 const result = '';
 let rslt;
 if( (sname == false) || (sname.length > 3)) {
    res.send('Invalid fullname');
 }
 else {
   if (0 in sname) {
    rslt = sname[0];
    if ((2 in sname) & (sname[2] !== '')) {
      rslt += ' ' + sname[2].substring(0, 1) + '.';
    }
    if (1 in sname & (sname[1] !== '')) {
      rslt += ' ' + sname[1].substring(0, 1) + '.';
    }
  }

  res.send(rslt);
  }
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
