const jwt = require('jsonwebtoken');
const value = "faheem";
const tok = jwtsign(value)
jwtdecode(tok);
jwtverify(tok);
//Generating the jwt token
function jwtsign(value){
const token = jwt.sign(value, "secret");
console.log(token)
return token;
}
//decoding the token
function jwtdecode(token){
  const decoded = jwt.decode(token);
  if(decoded){
    console.log("Decoded");
    return true;
  }
  else {
    return false;
  }
}
// verifying the token
function jwtverify(token){
  try{
    jwt.verify(token,"secret")
    console.log("Verified");
    return true;
  }
  catch(e){
    return false;
  }
}
