var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products = [
    {
      name:"1 product",
      discription:"1 pro desc",
      price:"999",
      image:"https://1.bp.blogspot.com/-h_qrbYx-Dis/XrUYOvxqzII/AAAAAAAAAd4/HK4syMbwfG8nahz-eXwtBSGpInEdigNrwCLcBGAsYHQ/s1600/BP%2B016.png"
    },
    {
      name:"2 product",
      discription:"2 pro desc",
      price:"888",
      image:"https://1.bp.blogspot.com/-rFq4vU8drNQ/XrUXgPln8-I/AAAAAAAAAdk/vm1DccyKadora9QzWIAS-w7kaPZVZ5WNgCLcBGAsYHQ/s1600/BP%2B013.png"
    },
    {
      name:"3 product",
      discription:"3 pro desc",
      price:"999",
      image:"https://1.bp.blogspot.com/-N0diA7xZ1ow/XrUXKl_QyBI/AAAAAAAAAdc/OW80DK8CDbIrDVfHWoySPNnodf7RuUa3QCLcBGAsYHQ/s1600/BP%2B012.png"
    },
    {
      name:"4 product",
      discription:"4 pro desc",
      price:"999",
      image:"https://1.bp.blogspot.com/-mRDZBo_aKBI/XrUWxASawzI/AAAAAAAAAdU/tZx17MRrYI4HDl-0OLUxH0B-8ApC3q48wCLcBGAsYHQ/s1600/BP%2B011.png"
    },
    {
      name:"5 product",
      discription:"5 pro desc",
      price:"999",
      image:"https://1.bp.blogspot.com/-O-iEncgJgxo/XlpEYNc1tiI/AAAAAAAAAIs/7LcNP-4t-x0XxHsxiUygOylEt-hL6B8AwCPcBGAYYCw/s1600/IMG-20200226-WA0016.png"
    }
  ]
  res.render('index', { products,admin:true});
});

module.exports = router;
