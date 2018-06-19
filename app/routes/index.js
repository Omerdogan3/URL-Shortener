'use strict';

module.exports = function(app, db) {
  app.route('/')
    .get(function(req, res) {
      res.send({"Please Enter Link": ""})
    });
  app.route('/new')
    .get(function(req, res) {
      res.send({
        err: "Error: You need to add a proper url"
      });
    });
};