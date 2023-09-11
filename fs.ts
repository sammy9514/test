// import { error, log } from "console";
import { log } from "console";
import fs from "fs";
import path from "path";
// import { setInterval } from "timers";

// // fs.mkdir("./NewClass", (error): void => {
// //   if (error) {
// //     console.log("an error in creating folder", error);
// //   } else {
// //     console.log("Folder created successfully");*
// //   }
// // });

// // const newMsg = "Help me Buy Food";
// // fs.writeFile(
// //   path.join(__dirname, "NewClass", "OldFile.txt"),
// //   newMsg,
// //   (error): void => {
// //     if (error) {
// //       console.log("Error writing a file", error);
// //     } else {
// //       console.log("New File Added");
// //     }
// //   }
// // );

// // fs.appendFile(
// //   path.join(__dirname, "Newclass", "OldFile.txt"),
// //   ,
// //   (error): void => {
// //     if (error) {
// //       console.log("An error in appending file", error);
// //     } else {
// //       console.log("New File Append");
// //     }
// //   }
// // );

// const newMsg2: string[] = [
//   "\ni am samyy",
//   "\neat and sleep",
//   "\npig is an animal",
//   "\nman is man",
//   "\ntomatoes is small",
//   "\ni hate people",
//   "\nrat na thief",
//   "\nlet me breathe",
//   "\nend the game",
// ];

// setInterval(() => {
//   const rand = Math.floor(Math.random() * newMsg2.length);
//   const p = newMsg2[rand];
//   let u = 0;
//   fs.appendFile(
//     path.join(__dirname, "Newclass", "OldFile.txt"),
//     p,
//     (error): void => {
//       if (error) {
//         console.log("An error in appending file", error);
//       } else {
//         console.log("New File Append");
//       }
//     }
//   );
// }, 1000);

fs.readFile(
  path.join(__dirname, "NewClass", "NewFile.txt"),
  "utf-8",
  (error, data) => {
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  }
);

//asnyc is also know as promises
// async does not wait for another code to run
// sync wait for another code to run
