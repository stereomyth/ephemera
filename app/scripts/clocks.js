'use strict';

var clocks, clock;

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

    seconds: false,

    twentyfour: false,

    smooth: false,

    init: function (domObject) {

        this.domObject = domObject;

        this.seconds = domObject.has('.s-hand');

        this.twentyfour = domObject.data('twentyfour');

        this.smooth = domObject.data('smooth');

    },

    update: function (time) {
        var s, m, h;

        h = time.getHours();
        m = time.getMinutes();
        s = time.getSeconds();

        this.domObject.children('.h-hand').css('transform','rotate(' + this.handleHour(h, m) + 'deg)');

        this.domObject.children('.m-hand').css('transform','rotate(' + this.handleMinutes(m, h) + 'deg)');

        if (this.seconds) {

            this.domObject.children('.s-hand').css('transform','rotate(' + this.handleSeconds(s, m, h) + 'deg)');

        }

    },

    handleHour: function (h, m) {
        var degrees, degInHour;

        degInHour = this.twentyfour ? 15 : 30 ;

        degrees = this.handle24(h) * degInHour;

        if (this.smooth) {

            degrees += degInHour / 60 * m;

        }

        return degrees;

    },

    handleMinutes: function (m, h) {

        return (6 * m) + (360 * h);

    },

    handleSeconds: function (s, m, h) {

        return (6 * s) + (360 * m) + (360 * 60 * h);

    },

    handle24: function (time) {

        if (!this.twentyfour) {

            if (time > 12) {

                time -= 12;

            }

        }

        return time;
    }

};

$(function() {

    if ( $('body').hasClass('clocks') ) {

        clocks.init();

    }

});
