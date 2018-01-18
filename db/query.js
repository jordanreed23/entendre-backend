var db = require('./connection');

function checkUser(username, id){
  return db('users').where({
  username: username,
  token:  id
});
}

function newUser(user){
  return db('users').insert(user).returning('*');
}


module.exports = {
  checkUser,
  newUser,
};
