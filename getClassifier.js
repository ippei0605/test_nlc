'use strict';

// モジュールを読込む。
const nlc = require('./nlc');

nlc.getClassifier({
  classifierId: 'f153e2x282-nlc-857'
})
  .then(v => {
    console.log(v.result);
  })
  .catch(e => {
    console.log('error:', e);
  });
