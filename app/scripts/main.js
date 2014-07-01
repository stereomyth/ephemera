'use strict';

var tiles, tile;

tiles = {

    tileArray: [],

    gridX: 10,

    gridY: 10,

    tileHeight: 100,

    tileWidth: 100,

    init: function () {

        this.build();

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

    }

};

tile = {

    domObject: '',

    currentTarget: '',

    currentX: 0,

    currentY: 0,

    init: function (container) {

        this.domObject = $('<div>', { class: 'tile'}).css({height: tiles.tileHeight + 'px', width: tiles.tileWidth + 'px'});

        this.domObject
            .append( $('<div>', { class: 'top target', 'data-dir': 'top' }) )
            .append( $('<div>', { class: 'right target', 'data-dir': 'right' }) )
            .append( $('<div>', { class: 'bottom target', 'data-dir': 'bottom' }) )
            .append( $('<div>', { class: 'left target', 'data-dir': 'left' }) )
            .append( $('<div>', { class: 'front' }).css({height: tiles.tileHeight + 'px', width: tiles.tileWidth + 'px'}) )
            .append( $('<div>', { class: 'back' }).css({height: tiles.tileHeight + 'px', width: tiles.tileWidth + 'px'}) );

        container.append(this.domObject);

        // this.domObject.css('background', 'tomato');

        this.listeners();
         console.log(this.currentY + ', ' + -this.currentY);

    },

    listeners: function () {
        var self = this;

        this.domObject

            .on('mouseenter', function (event) {

                // console.log ('enter ' + $(event.toElement).data('dir'));

                self.doEnter($(event.toElement).data('dir'));

            })

            .on('mouseleave', function () {

                // console.log ('exit ' + self.currentTarget);

                setTimeout(function(){

                    self.doEnter(self.currentTarget);

                },1000)


            })

            .children('.target').on('mouseenter', function (event) {

                self.currentTarget = $(event.target).data('dir');

            });

    },

    doEnter: function (direction) {
        var front = this.domObject.children('.front');
        var back = this.domObject.children('.back');
        // var direction = $(event.toElement).data('dir');
        var difX = 0, difY = 0;

        // var theNum = cheese ? 180 : -180;
        var theNum = 180;

        switch (direction) {
            case 'top':
                difX = theNum;
            break;

            case 'bottom':
                difX = -theNum;
            break;

            case 'right':
                difY = -theNum;
            break;

            case 'left':
                difY = theNum;
            break;
        }

        this.currentX += difX;
        this.currentY += difY;
        console.log(this.currentY);

        front.css('transform', 'rotateX(' + this.currentX + 'deg) rotateY(' + (this.currentY * -1) + 'deg)');
        back.css('transform', 'rotateX(' + (this.currentX + 180) + 'deg) rotateY(' + this.currentY + 'deg)');

    }

};

$(function() {

    tiles.init();

});
