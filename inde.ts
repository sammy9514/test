import welcomeEvent from "../Events";
import Events from "events";

let date = new Date();
let p = date.getHours() + ":" + date.getMinutes() + ":" + date.getUTCSeconds();

const emitter = new Events();

setInterval(() => {
  let rand = Math.floor(Math.random() * (9999 - 1111)) + 1111;
  emitter.emit("Money", "Please get me rice 300 naira");
  emitter.on("Money", () => {
    console.log(
      `Welcome to codeLab, you got in on ${p} and this is your reg number is ${rand} `
    );
  });
}, 2000);
33
