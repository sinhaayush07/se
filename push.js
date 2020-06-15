let push = require('web-push');
let vapidKeys = {
  publicKey: 'BK0Kfo-fA5fAq-iABUF4BZiXoAclxmxAdxqMcTNl84uk5Wih9aN6qlfwRIAZiXxbF-lJ8mLH5SXdb6_T8tQ7p_M',
  privateKey: 'HJZ6aiinvjX09fxenXtNlkAxVLc0mXDxDcxBhEAqptI'
};

push.setVapidDetails('mailto:ayush@patchus.in', vapidKeys.publicKey, vapidKeys.privateKey);


let sub = {};
push.sendNotification(sub)
