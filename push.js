let push = require('web-push');
let vapidKeys = {
  publicKey: 'BK0Kfo-fA5fAq-iABUF4BZiXoAclxmxAdxqMcTNl84uk5Wih9aN6qlfwRIAZiXxbF-lJ8mLH5SXdb6_T8tQ7p_M',
  privateKey: 'HJZ6aiinvjX09fxenXtNlkAxVLc0mXDxDcxBhEAqptI'
};

push.setVapidDetails('mailto:ayush@patchus.in', vapidKeys.publicKey, vapidKeys.privateKey);


let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/eVItCfy3jAg:APA91bFMYAOOGp6qtjw4Zr8Z1vUoQHtjKTjljUlZrlU29-apSP-xvBikprh_mlzkLExIDQSq3K7b_i3WtBC4yh2bUse6f_K5T_h2QUwcP3R2pMGLFjcOvcvTAp2Qu7mcj_fg-hk9r1zK","expirationTime":null,"keys":{"p256dh":"BDlshCEQySM9-GW5GQp9YjBvZ-X6glMKgN5MKC2UhdZVNLCj5q5zAs2jKx50B3LIv9izTPADwzPrhP9yR7v7ysU","auth":"xDWAxfp6JAH8WoYnWROReA"}};
push.sendNotification(sub)


