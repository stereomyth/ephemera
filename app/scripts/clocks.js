'use strict';

var clocks, clock;

function sixtyToDeg (time) {

    return 360 * (time / 60);

}

function twentyfourToDeg (time) {

    time = time > 12 ? time -= 12 : time ;

    return 360 * (time / 12);

}

clocks = {

    clocksArray: [],

    init: function () {
        var newClock, self = this;

        $('.clock').each( function () {

            newClock = $.extend({}, clock);

            newClock.init($(this));

            self.clocksArray.push(newClock);

        });

        setInterval(function () {

            window.requestAnimationFrame(function () {

                self.update();

            });

        }, 100);


    },

    update: function () {
        var i, time = new Date();

        for (i = 0; i < this.clocksArray.length; i++) {

            this.clocksArray[i].update(time);

        }


    }

};

clock = {

    domObject: '',

    init: function (domObject) {

        this.domObject = domObject;

    },

    update: function (time) {
        var s, m, h;

        s = time.getSeconds();
        m = time.getMinutes();
        h = time.getHours();

        console.log(h);

        this.domObject.children('.s-hand').css('transform','rotate(' + sixtyToDeg(s) + 'deg)').text(s);
        this.domObject.children('.m-hand').css('transform','rotate(' + sixtyToDeg(m) + 'deg)').text(m);
        this.domObject.children('.h-hand').css('transform','rotate(' + twentyfourToDeg(h) + 'deg)').text(h);


    }

};

$(function() {

    if ( $('body').hasClass('clocks') ) {

        clocks.init();

    }

});
