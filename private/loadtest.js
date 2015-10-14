meteorDown.init(function (Meteor) { 
  Meteor.subscribe('testPub', function () { 
    console.log('pub done'); 
    Meteor.kill(); 
  }); 
});

meteorDown.run({ 
  concurrency: 10, 
  url: "http://tom-loadtest.meet-eeyore.com:80"
});