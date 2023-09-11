//Events is a disturbance or acttion happening
//there are two methods on event .On and .emit
//.on listens for disturbance
//.emit creates for disturbance

import Events from "events";
import fs from "fs"
import path from "path"
console.log(Events);

const emitter = new Events();

setInterval(() => {
  emitter.emit("Money", "Please get me rice 300 naira");
  emitter.on("Money", () => {
    console.log("Okay ma");
  });
}, 5000)


const message = "welcometo codeLab"

const welcomeEvent = async ()=> {
  fs.appendFile(
    path.join(__dirname,"poop", "index.txt"), message,(error):void => {
      if(error) {
        console.log("no ", error);
        
      }
      else{
        console.log("done");
        
      }
    }
  )
}

welcomeEvent()
export default welcomeEvent;

