// 1トレーニング3USDなので実行しないでください。
process.exit(0);

'use strict';

// モジュールを読込む。
const
  fs = require('fs'),
  nlc = require('./nlc');

nlc.createClassifier({
  trainingMetadata: fs.createReadStream('./training-metadata.json'),
  trainingData: fs.createReadStream('./training-data.csv'),
})
  .then(v => {
    console.log(v.result);
  })
  .catch(e => {
    console.log('error:', e);
  });
