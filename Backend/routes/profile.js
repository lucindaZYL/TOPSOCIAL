const express =require('express');
const profilerouter =express.Router();
const axios =require('axios');
const {getProfile} =require('../controllers/profileController');
profilerouter.get('/', getProfile);




module.exports =profilerouter;

