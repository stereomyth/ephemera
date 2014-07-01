'use strict';

var tiles, tile;

tiles = {

    tileArray: [],

    gridX: 2,

    gridY: 2,

    tileHeight: 200,

    tileWidth: 300,

    init: function () {

        this.build();

        // tiles.listeners();

    },

    build: function () {
        var x, y,
            container = $('.container');

        container.css({

            width: this.tileWidth * this.gridX,

            height: this.tileHeight * this.gridY

        });

        for (y = 0; y < tiles.gridY; y++) {

            for (x = 0; x < tiles.gridX; x++) {

                var object = $.extend({}, tile);

                object.init(container);

            }

        }

    },

    listeners: function () {

        // $('.tile').on('mouseenter', function (event) {

        //     // console.log ('enter ' + $(event.toElement).data('dir'));

        //     tiles.doEnter(event);

        // });

        // $('.target').on('mouseenter', function (event) {

        //     tiles.currentTarget = $(event.target).data('dir');

        // });

        // $('.tile').on('mouseleave', function () {

        //     console.log ('exit ' + tiles.currentTarget);

        // });

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

tile = {

    domObject: '',

    currentTarget: '',

    init: function (container) {

        this.domObject = $('<div>', { class: 'tile'});

        this.domObject
            .append( $('<div>', { class: 'top target', 'data-dir': 'top' }) )
            .append( $('<div>', { class: 'right target', 'data-dir': 'right' }) )
            .append( $('<div>', { class: 'bottom target', 'data-dir': 'bottom' }) )
            .append( $('<div>', { class: 'left target', 'data-dir': 'left' }) )
            .append( $('<div>', { class: 'front' }) )
            .append( $('<div>', { class: 'back' }) );

        container.append(this.domObject);

        this.domObject.css('background', 'tomato');

        this.listeners();

    },

    // build: function () {

    //     $()

    // },

    listeners: function () {
        var self = this;

        this.domObject.on('mouseenter', function (event) {

            console.log ('enter ' + $(event.toElement).data('dir'));

            // tiles.doEnter(event);

        }).on('mouseleave', function () {

            console.log ('exit ' + self.currentTarget);

        }).children('.target').on('mouseenter', function (event) {

            self.currentTarget = $(event.target).data('dir');

        });

    }

};

$(function() {

    tiles.init();

});
