import { log } from "console";
import path from "path";
//PATH HELPS LOCATE THE DIRECTORY OF A FILE
const getExt = path.extname("index.html");
console.log(getExt);

console.log(path.basename("C:\\Users\\hp\\Documents\\Bandicam"));

console.log(path.dirname("C:\\Users\\hp\\Documents\\Bandicam"));
