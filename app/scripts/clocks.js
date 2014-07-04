'use strict';

var clocks, clock;

function timeToDeg (time) {

    return 360 * (time / 60);

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

        // console.log(d.getSeconds());

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

        // console.log(time);

        s = time.getSeconds();
        m = time.getMinutes();
        h = time.getHours();

        console.log(this.domObject);

        this.domObject.children('.s-hand').css('transform','rotate(' + timeToDeg(s) + 'deg)');
        this.domObject.children('.m-hand').css('transform','rotate(' + timeToDeg(m) + 'deg)');


    }

};

$(function() {

    if ( $('body').hasClass('clocks') ) {

        clocks.init();

    }

});
