/**
 * Created by Admin on 02.09.2016.
 */
(function (w, g) {
    w['GoogleAnalyticsObject'] = g;
    w[g] = w[g] || function () {
            (w[g].q = w[g].q || []).push(arguments)
        };
    w[g].l = 1 * new Date();
})(window, 'ga');

// Optional TODO: replace with your Google Analytics profile ID.
ga('create', 'UA-XXXX-Y');
ga('send', 'pageview');