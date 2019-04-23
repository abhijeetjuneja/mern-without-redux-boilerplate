var config = require('../config/config');
var mongoose = require('mongoose');
var express = require('express');
var app         = express();
var userRouter  = express.Router();
var userModel = mongoose.model('User');
var jwt = require('jsonwebtoken');
var _ = require('lodash');

exports.check =  (req, res, next) => {
  const authorizationHeader = req.headers['authorization'];
  let token;

  if (authorizationHeader) {
    token = authorizationHeader.split(' ')[1];
  }
  if (token) {
    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        res.status(401).json({ error: 'Failed to authenticate' });
      } else {
        userModel.findOne({'email':decoded.email}).select('email _id username favourites').exec((err,user) => {
          if (!user) {
            console.log("No user found");
            res.status(404).json({ error: 'No such user' });
          } else {
            req.currentUser = user;
            next();
          }
        });
      }
    });
  } else {
    res.status(403).json({
      error: 'No token provided'
    });
  }
}
