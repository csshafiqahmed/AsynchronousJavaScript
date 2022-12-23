const fs = require("fs");
const superagent = require("superagent");

// fs.readFile(`${__dirname}/dog.txt`, "utf8", (err, data) => {
//   console.log(`Breed: ${data}`);

//   superagent
//     .get(`https://dog.ceo/api/breed/${data}/images/random`)
//     .end((err, res) => {
//       if (err) {
//         console.log(err.message);
//         return;
//       }
//       console.log(res.body.message);

//       fs.writeFile("dog-img.txt", res.body.message, (err) => {
//         console.log("Random image saved to dog-img.txt");
//       });
//     });
// });
//Promises

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
/*
readFilePro(`${__dirname}/dog.txt`)
  .then((data) => {
    console.log(`Breed: ${data}`);
    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  })
  .then((res) => {
      console.log(res.body.message);
      return writeFilePro(`${__dirname}/dog-img.txt`, res.body.message);
    // fs.writeFile("dog-img.txt", res.body.message, (err) => {
    //   if (err) {
    //     console.log(err.message);
    //   }
    //   console.log("Random image saved to dog-img.txt");
    // });
  }).then(() => { 
      console.log("Done: Random image saved to dog-img.txt");
  })
  .catch((err) => {
    console.log(err.message);
  });
// fs.readFile(`${__dirname}/dog.txt`, "utf8", (err, data) => {
//   //   console.log(`Breed: ${data}`);
//   //   superagent
//   //     .get(`https://dog.ceo/api/breed/${data}/images/random`)
//   //     .then((res) => {
//   //       fs.writeFile("dog-img.txt", res.body.message, (err) => {
//   //         if (err) {
//   //           console.log(err.message);
//   //         }
//   //         console.log("Random image saved to dog-img.txt");
//   //       });
//   //     })
//   //     .catch((err) => {
//   //       console.log(err.message);
//   //     });
// });
*/

//Async Await
const getDogPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`Breed: ${data}`);

    const res = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    console.log(res.body.message);
    await writeFilePro("dog-img.txt", res.body.message);
    console.log("Random Dog Image Saved to File!");
  } catch (err) {
    console.log(err.body.message);
  }
    
};
console.log('1: Will get Dog Pics');
getDogPic();
console.log('2: Done getting dog pics');
