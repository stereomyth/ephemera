'use strict';

var tiles, tile;

tiles = {

    tileArray: [],

    grid: {
        rows: 10,
        cols: 10
    },

    tile: {
        width: 40,
        height: 40
    },

    init: function () {

        this.build();

    },

    build: function () {
        var x, y,
            container = $('.container');

        container.css({

            width: this.tile.width * this.grid.cols - ( this.grid.cols - 1 ),

            height: this.tile.height * this.grid.rows - ( this.grid.rows - 1 )

        });

        for (y = 0; y < tiles.grid.rows; y++) {

            for (x = 0; x < tiles.grid.cols; x++) {

                var object = $.extend({}, tile);

                object.init(container);

            }

        }

    }

};

tile = {

    domObject: '',

    front: '',

    back: '',

    currentTarget: '',

    currentX: 0,

    currentY: 0,

    flipped: false,

    flipping: false,

    init: function (container) {

        this.domObject = $('<div>', { class: 'tile'}).css({height: tiles.tile.height + 'px', width: tiles.tile.width + 'px'});

        this.domObject
            .append( $('<div>', { class: 'top target', 'data-dir': 'top' }) )
            .append( $('<div>', { class: 'right target', 'data-dir': 'right' }) )
            .append( $('<div>', { class: 'bottom target', 'data-dir': 'bottom' }) )
            .append( $('<div>', { class: 'left target', 'data-dir': 'left' }) )
            .append( $('<div>', { class: 'front' }).css({height: tiles.tile.height + 'px', width: tiles.tile.width + 'px'}) )
            .append( $('<div>', { class: 'back' }).css({height: tiles.tile.height + 'px', width: tiles.tile.width + 'px'}) );

        container.append(this.domObject);

        this.front = this.domObject.children('.front');
        this.back = this.domObject.children('.back');

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

                // self.domObject.css('background', 'red');

                self.flipped = true;

            })

            .on('mouseleave', function () {

                // console.log ('exit ' + self.currentTarget);

                if (self.flipped) {

                    setTimeout(function(){

                        self.doEnter(self.currentTarget);
                        // self.domObject.css('background', '#222');

                    },1000);

                    self.flipped = false;

                }

            })

            .children('.target').on('mouseenter', function (event) {

                self.currentTarget = $(event.target).data('dir');

            });

    },

    doEnter: function (direction) {

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
        // console.log(this.currentY);

        this.front.css('transform', 'rotateX(' + this.currentX + 'deg) rotateY(' + (this.currentY * -1) + 'deg)');
        this.back.css('transform', 'rotateX(' + (this.currentX + 180) + 'deg) rotateY(' + this.currentY + 'deg)');

    }

};

$(function() {

    if ($('body').hasClass('tiles')) {

        tiles.init();

    }

});
