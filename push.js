let push = require('web-push');
let vapidKeys = {
  publicKey: 'BK0Kfo-fA5fAq-iABUF4BZiXoAclxmxAdxqMcTNl84uk5Wih9aN6qlfwRIAZiXxbF-lJ8mLH5SXdb6_T8tQ7p_M',
  privateKey: 'HJZ6aiinvjX09fxenXtNlkAxVLc0mXDxDcxBhEAqptI'
};

push.setVapidDetails('mailto:ayush@patchus.in', vapidKeys.publicKey, vapidKeys.privateKey);


let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/doynUmRe7Io:APA91bE2JeUK71bogE5nvCGTNJ8PdGaJqjpDRRVv0A2J3nTRR1jQr_QlRal-smSGs5w9ygXt59iY1vYJGevDyytPZI5QedRBpmJ_3e6kGmlBr8iKSMJul4CKd9QGuVtWRGKsnddp95Dm","expirationTime":null,"keys":{"p256dh":"BM5e4bw1b8G7SHP_z-AsCT3ZoZQqSM40rqOTy1tj1VaWjhxjSxT8dNV33ZjzXF4b_eF5wue1jixGKlfGdd-WDt8","auth":"ZpMoArJtdTX4pLP8EPP5Bg"}};
push.sendNotification(sub)
