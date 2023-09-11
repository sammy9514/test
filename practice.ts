import fs from "fs";
import path from "path";

fs.mkdir("./code", (error) => {
  if (error) {
    console.log("done");
  } else {
    console.log("failed");
  }
});

const r = "hello";
fs.writeFile(path.join(__dirname, "code", "index.txt"), r, (error): void => {
  if (error) {
    console.log("er", error);
  } else {
    console.log("p");
  }
});

fs.writeFile(path.join(__dirname, "code", "index.txt"), r, (error): void => {
  if (error) {
  }
});

fs.appendFile(
  path.join(__dirname, "code", "index.txt"),
  r,
  (error): void => {}
);

fs.mkdir("./come", (error) => {});

fs.writeFile(
  path.join(__dirname, "come", "k.txt"),
  "fish",
  (error): void => {}
);

fs.appendFile(
  path.join(__dirname, "come", " g.txt"),
  "happy to see you",
  (error): void => {}
);

fs.mkdir("./damy", (error) => {});

fs.mkdir("./poop", (error) => {});

fs.writeFile(path.join(__dirname, "damy", "y.txt"), r, (error): void => {});
