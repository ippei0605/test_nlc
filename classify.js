'use strict';

// モジュールを読込む。
const nlc = require('./nlc');

nlc.classify({
  classifierId: 'f153e2x282-nlc-857',
  text: '住所6'
})
  .then(v => {
    console.log(v.result);
  })
  .catch(e => {
    console.log('error:', e);
  });
