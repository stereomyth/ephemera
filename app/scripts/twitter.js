'use strict';

// var twitter;

// twitter = {

//     query: 'https://api.twitter.com/1.1/search/tweets.json?q=&geocode=-22.912214,-43.230182,1km&lang=pt&result_type=recent',

//     init: function () {

//         $.get( this.query, function( data ) {

//             $( ".result" ).html( data );
//             console.log( "Load was performed." );

//         });

//     }

// };

// $(function() {

//     if ( $('body').hasClass('twitter') ) {

//         twitter.init();

//     }

// });


// console.log('hello');


// $.ajax({

//     url: 'http://192.168.1.85/star/v2/api/content/tenants/',
//     beforeSend: function( xhr ) {
//         xhr.setRequestHeader( 'Authorization', 'Basic ' + btoa('starapp:test123') );
//     }
//     // username: 'starapp',
//     // password: 'test123'

// }).done(function() {

//     console.log('yay!');

// });

// $.ajax({

//     url: 'http://requestb.in/1ax3esq1',
//     type: 'GET',
//     beforeSend: function( xhr ) {
//         // xhr.setRequestHeader( 'X-My-Custom-Header-Name', '42' );
//         xhr.setRequestHeader( 'Authorization', 'Basic ' + btoa('starapp:test123') );
//     },

// }).done(function() {

//     console.log('yay!');

// });


var invocation = new XMLHttpRequest();
var url = 'http://requestb.in/1ax3esq1';

function callOtherDomain() {
  if(invocation) {
    invocation.open('GET', url, true);
    // invocation.onreadystatechange = handler;
    invocation.send();
  }
}


callOtherDomain();
