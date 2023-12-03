const profileRouter =require('./profile');
const express =require('express');

const router = express.Router();

router.use(profileRouter);

module.exports =router