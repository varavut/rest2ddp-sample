if (Meteor.isClient) {
    Samples = new Mongo.Collection('samples');

    Template.hello.onCreated(function () {
        var self = this;
        self.autorun(function () {
            self.subscribe('REST2DDP', 'sample');
        });
    });

    Template.hello.helpers({
        samples: function () {
            return Samples.find();
        }
    });
}

if (Meteor.isServer) {
    REST2DDP.configs.push({
        name: 'sample',
        collectionName: 'samples',
        restUrl: 'http://localhost:3002/test',
        jsonPath: '$.data.*',
        pollInterval: 1,
    });
}
