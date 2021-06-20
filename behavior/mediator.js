//In node: Emmiter is the mediator
const Emitter = require("events");

const emitter = new Emitter();

emitter.on("evName", x => console.log(x));
emitter.emit("evName", {"name": "Johan"});