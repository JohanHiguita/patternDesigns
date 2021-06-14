const log = (user, msg, date) => console.log(`${user}:"${msg} at: ${date}"`);
const logCurry = (user)=>(msg)=>(date)=> console.log(`${user}:"${msg} at: ${date}"`);

log("Pedro", "normal fn", "today");
logCurry("Johan")("This is currying")("Yesterday");

