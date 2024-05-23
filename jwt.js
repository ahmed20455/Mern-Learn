const jwt = require('jsonwebtoken');
const value = {
  name : "faheem",
  password : 123456
}
const token = jwt.sign(value, "secret");
console.log(token)
