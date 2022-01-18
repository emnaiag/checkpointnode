const fs = require("fs");

const x = fs.readFileSync(process.argv[2], function (err, data) {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

console.log(x.toString().split("\n").length - 1);
