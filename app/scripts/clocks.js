'use strict';

var clocks, clock;

function sixtyToDeg (time) {

    return 6 * time;

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

    seconds: true,

    init: function (domObject) {

        this.domObject = domObject;

    },

    update: function (time) {
        var s, m, h;

        if (this.seconds) {

            s = time.getSeconds();
            this.domObject.children('.s-hand').css('transform','rotate(' + sixtyToDeg(s) + 'deg)');

            console.log(sixtyToDeg(s));

        }

        m = time.getMinutes();
        this.domObject.children('.m-hand').css('transform','rotate(' + sixtyToDeg(m) + 'deg)');

        h = time.getHours();
        this.domObject.children('.h-hand').css('transform','rotate(' + twentyfourToDeg(h) + 'deg)');

    }

};

$(function() {

    if ( $('body').hasClass('clocks') ) {

        clocks.init();

    }

});
