'use strict';

// モジュールを読込む。
const
  NaturalLanguageClassifier = require('ibm-watson/natural-language-classifier/v1'),
  { IamAuthenticator } = require('ibm-watson/auth');

const nlc = new NaturalLanguageClassifier({
  authenticator: new IamAuthenticator({ apikey: '349VW-vzMQ06_h3_8i5vL7w9GqapK3__2UrnnTCfv4Xk' }),
});
nlc.setServiceUrl('https://api.jp-tok.natural-language-classifier.watson.cloud.ibm.com/instances/fd9ad2f7-cebe-45cb-a29a-7ba3947e6440');

module.exports = nlc;
