var db = require('./connection');

function getAll(){
  return db('artists');
}

function checkUser(username, id, pic){
  return db('users').where({
  username: username,
  token: id
});
}

function newUser(user){
  return db('users').insert(user).returning('*');
}




module.exports = {
  checkUser,
  newUser,
  getAll,
};
