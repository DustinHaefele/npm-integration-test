const printName = require("printName");
const Utils = require("utilsLibrary");



function run(name) {
  const testObject = {
    key1: {
      key2: {
        keyToFind: "You Found Me"
      }
    }
  }
  printName.printMyName(name);
  const keyObj = Utils.findKeyInObject(testObject, "keyToFind");
  console.log(keyObj);
  return;
}

run("Dustin");