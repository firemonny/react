//key.js determine the production or development
if (process.env.NODE_ENV === "production") {
  //in production
  module.exports = require("./prod");
} else {
  //in the development
  module.exports = require("./dev");
}
