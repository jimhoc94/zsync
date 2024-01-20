const axios = require("axios");
var fs = require("fs");

const main = async () => {
  let numberCall = 0;
  try {
    console.log("Hello World from zsync !");
    if (process.argv.length === 2) {
      console.error("Expected at least one argument!");
      process.exit(1);
    } else {
      numberCall = process.argv[2];
      console.log("Number of API calls : " + numberCall);
    }

    for (let i = 1; i <= numberCall; i++) {
      axios
        .get("https://randomuser.me/api/?results=1")
        .then(function (response) {
          // handle success
          let first = response.data.results[0].name.first;
          let last = response.data.results[0].name.last;
          let title = response.data.results[0].name.title;
          let data = response.data.results[0];
          let dir = "./output/user";

          if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
          }
          let fileName = dir + "/" + first + "_" + last + ".json";
          console.log(`Writting, ${fileName}`);
          fs.writeFileSync(fileName, JSON.stringify(data, null, 2));
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    }
  } catch (error) {
    console.log(error.message);
  }
};

// Call the main function to run the action
main();
