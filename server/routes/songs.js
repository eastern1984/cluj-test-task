const express = require('express');
const router = express.Router();
const songs = require('../controllers/songs');

router.get('/get-songs', songs.getSongs);
router.get('/song/:id', songs.getSong);
router.get('/collect-data', songs.collectData);

module.exports = router;