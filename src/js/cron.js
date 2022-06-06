const schedule = require("node-schedule");
import enviarEmail from "./mail";

const cronTime = () => {
  schedule.scheduleJob("* * * * *", () => {
    enviarEmail();
  });
};

module.exports = {
  cronTime,
};
