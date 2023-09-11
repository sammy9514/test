const os = require("os")
console.log("Ayo");

const myOwn = os.cpus()
console.log(myOwn);
const result = myOwn[0].model.split(" ")[0]
console.log(result);

const myArch = os.arch()
console.log(myArch);

const total = os.totalmem()
const getGb = Math.floor(total/1000000000)
console.log(getGb);

if(result === 'Intel(R)' && myArch === 'x64' && getGb === 8) {
  console.log("Welocme to CodeLab");
}

// console.log(os.homedir());
// console.log(os.hostname());

let add = os.networkInterfaces()
let y = []
for(let i in add) {
  y.push(add[i])
}

console.log(y[0][1].address);
console.log(y);
