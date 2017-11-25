const { API } = require('../../config');

module.exports.getAllPeople = function getAllPeople() {
  return `${API.URL}people`;
};
