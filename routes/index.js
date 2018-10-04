var express = require('express');
var router = express.Router();
var moment = require('moment');
/* GET home page. */
router.get('/GetValue', function (req, res, next) {
  res.send(`Hello word - ` + moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a'))
});
router.post('/Cong/a/:a/b/:b', function (req, res, next) {
  res.send((+req.params.a + +req.params.b).toString());
});
router.put('/Tru/a/:a/b/:b', function (req, res, next) {
  res.send((+req.params.a - +req.params.b)+'');
});
router.delete('/Nhan/a/:a/b/:b', function (req, res, next) {
  res.send(+req.params.a * +req.params.b +'');
});
router.delete('/Chia/a/:a/b/:b', function (req, res, next) {
  if(req.params.b == 0){
    res.send('Không thực hiện được phép chia 0')
    return
  }
  res.send(+req.params.a / +req.params.b + '');
});
router.get('/getThongTin', function (req, res, next) {
  res.json({
    MSSV: 1412465,
    HoTen: 'Nguyễn Đình Sơn',
    Email: '001.IceTea@gmailc.com'
  })
});

module.exports = router;
