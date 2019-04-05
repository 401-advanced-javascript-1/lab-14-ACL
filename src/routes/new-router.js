'use strict';

const express = require('express');
const router = express.Router();
const auth = require('../auth/middleware.js');

//Routes
router.get('/public-stuff', (req, res, next) => {
  res.status(200).send('Public stuff');
});
router.get('/hidden-stuff', auth(), (req, res, next) => {
  res.status(200).send('Hidden stuff');
});
router.get('/something-to-read', auth('read'), (req, res, next) => {
  res.status(200).send('Something to read');
});
router.post('/create-a-thing', auth('create'), (req, res, next) => {
  res.status(200).send('Created a thing');
});
router.put('/update', auth('update'), (req, res, next) => {
  res.status(200).send('updated stuff');
});
router.patch('/jp', auth('update'), (req, res, next) => {
  res.status(200).send('Updated JP stuff');
});
router.delete('/bye-bye', auth('delete'), (req, res, next) => {
  res.status(200).send('DELETE BYE BYE');}
);
router.get('/everything', auth('superuser'), (req, res, next) => {
  res.status(200).send('Superman');
});

module.exports = router;