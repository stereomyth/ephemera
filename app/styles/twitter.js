'use strict';

var twitter;

twitter = {

    query: 'https://api.twitter.com/1.1/search/tweets.json?q=&geocode=-22.912214,-43.230182,1km&lang=pt&result_type=recent',

    init: function () {

        $.get( this.query, function( data ) {

            $( ".result" ).html( data );
            console.log( "Load was performed." );

        });

    }

};

$(function() {

    twitter.init();

});