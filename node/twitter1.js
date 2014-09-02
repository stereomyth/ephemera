'use strict';

var Twit = require('twit');

var T = new Twit({
    keys
});

T.get('search/tweets', { q: 'banana since:2011-11-11', count: 100 }, function(err, data) {

    if (err) {

        console.log(err);

        // this.provide();

        return false;

    }
    console.log(data);
});
