import fs from "fs"

function readFile() {
  const readfile = fs.createReadStream("./streamFile.txt", "utf-8")

  readfile.on("error", function)
}