const express = require('express');

const app = express();
const PORT = process.env.PORT || 9000;

app.use('/public', express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('*', (req, res) => {
  res.render('pages/index');
});

app.listen(PORT, () => {
  console.log('Node app is running on port', PORT);
});
