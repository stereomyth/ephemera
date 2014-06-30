'use strict';

var tiles = {

    currentTarget: '',

    init: function () {

        tiles.listeners();

    },

    listeners: function () {

        $('.tile').on('mouseenter', function (event) {

            // console.log ('enter ' + $(event.toElement).data('dir'));

            tiles.doEnter(event);

        });

        $('.target').on('mouseenter', function (event) {

            tiles.currentTarget = $(event.target).data('dir');

        });

        $('.tile').on('mouseleave', function () {

            console.log ('exit ' + tiles.currentTarget);

        });

    },

    doEnter: function (event) {
        var front = $(event.currentTarget).children('.front');
        var back = $(event.currentTarget).children('.back');

        front.css('transform', 'rotateX(180deg)');
        back.css('transform', 'rotateX(0deg)');

        console.log(event.currentTarget);

        // target.children('.front')

    }

};

$(function() {

    tiles.init();

});
