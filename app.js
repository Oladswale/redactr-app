const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post('/scramble', (req, res) => {
  const text = req.body.text;
  const wordsToScramble = req.body.words.split(' ');
  const scrambledText = text.split(' ').map(word => {
    if (wordsToScramble.includes(word)) {
      // Replace the word with asterisks
      return '*'.repeat(word.length);
    }
    return word;
  }).join(' ');

  res.send(scrambledText);
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
