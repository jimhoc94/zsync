const axios = require("axios");
var fs = require("fs");
const yaml = require("yaml");

const main = async () => {
  let numberCall = 0;
  let password = "";
  const version = "1.0.0";
  try {
    console.log("Hello World from zsync !");
    console.log(`Version, ${version}`);

    // lecture fichier de configuration
    let configFile = "./input/zsyncConfiguration.yaml";
    let yamlFile = fs.readFileSync(configFile, "utf-8");
    let loadedYAML = yaml.parse(yamlFile);

    console.log(loadedYAML.email);

    // controle arguments
    if (process.argv.length === 2) {
      console.error("Expected at least one argument!");
      process.exit(1);
    } else {
      numberCall = process.argv[2];
      console.log("Number of API calls : " + numberCall);
      password = process.argv[3];
      console.log("Password : " + password);
    }

    // boucle d'appel api
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
