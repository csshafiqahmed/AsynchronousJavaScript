const fs = require("fs");
const superagent = require("superagent");

fs.readFile(`${__dirname}/dog.txt`, "utf8", (err, data) => {
  console.log(`Breed: ${data}`);

  superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .end((err, res) => {
      if (err) {
        console.log(err.message);
        return;
      }
      console.log(res.body.message);

      fs.writeFile("dog-img.txt", res.body.message, (err) => {
        console.log("Random image saved to dog-img.txt");
      });
    });
});