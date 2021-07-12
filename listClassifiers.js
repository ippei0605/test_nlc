'use strict';

// モジュールを読込む。
const nlc = require('./nlc');

nlc.listClassifiers({})
  .then(v => {
    console.log(v.result);
  })
  .catch(e => {
    console.log('error:', e);
  });
