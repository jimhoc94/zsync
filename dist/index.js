/******/ (() => { // webpackBootstrap
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
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
  } catch (error) {
    console.log(error.message);
  }
};

// Call the main function to run the action
main();

module.exports = __webpack_exports__;
/******/ })()
;