//Streams
// streams is the process of transfering data from one part to another using buffers
// Types of streams
/**
 * Readable
 * Writable
 * Duplex
 * Transform
 */

import fs from "fs";
const file = fs.createWriteStream("./streamFile.txt");
let attempt = 1;
setInterval(() => {
  file.write(`Welcome to codeLab attempt ${attempt++}\n`);
}, 200);
// for (let i = 0; i < 1000; i++) {
//   file.write("Welcome to codeLab\n");
// }
