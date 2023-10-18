const express = require ('express');
const {getHomepage, getABC, gettrung,postCreateUser} =require('../controllers/homeController');
const {getDataCrawl} = require('D:/Back-end-new/src/controllers/news.controller.js')
const router = express.Router();
// router.Method('./route',handler)
router.get('/', getHomepage);
router.get('/abc', getABC);
router.get('/trung', gettrung);
router.post('/create-user',postCreateUser);  
router.post('/getData', getDataCrawl);
  
  module.exports = router;  