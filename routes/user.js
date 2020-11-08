var express = require('express');
var router = express.Router();
const productHelpers = require('../helpers/product-helpers');
const { route } = require('./admin');
var userHelpers = require('../helpers/user-helpers');
const { response } = require('express');
/* GET home page. */
router.get('/', function(req, res, next) {
  let user=req.session.user
  productHelpers.getAllProducts().then((products)=>{
    console.log(products,"productsHere");
    res.render('user/view-products', {products,user})
  })
});
router.get('/login',(req,res)=>{
  res.render('user/login')
})
router.get('/signup',(req,res)=>{
  res.render('user/signup')
})
router.post('/signup',(req,res)=>{
  userHelpers.doSignUp(req.body).then((response)=>{
  console.log(response);
  })
})
router.post('/login',(req,res)=>{
  userHelpers.doLogin(req.body).then((response)=>{
    if(response.status){
      req.session.loggedIn=true
      req.session.user=response.user
      res.redirect('/')
    }else{
      res.redirect('/login')
    }
  })
})
router.get('/logout',(req,res)=>{
  req.session.destroy()
  res.redirect('/login')
})
module.exports = router;
