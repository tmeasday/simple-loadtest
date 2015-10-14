Data = new Meteor.Collection('data');

if (Meteor.isServer) {
  Meteor.startup(function () {
    Meteor.publish('testPub', () => {
      return Data.find({x: 7});
    });
  });

  if (Data.find().count() === 0) {
    const str = _.times(100, () => 'x').join('');
    _.times(1000, (i) => {
      Data.insert({
        x: i % 10,
        str
      })
    });
  }
}
