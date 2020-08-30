const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

app.use(cors());

app.use(express.static(path.join(__dirname, 'build')));

app.get('/tables', function(req, res) {
  res.sendFile(path.join(__dirname, 'mocks', 'tables.json'));
});

app.get("/table/:term", (req, res) => {
  if(req.params.term == 0){
    res.sendFile(path.join(__dirname, 'mocks', 'table2.json'));
  } else {
    res.sendFile(path.join(__dirname, 'mocks', 'table.json'));
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`App is running on port ${port}`));
