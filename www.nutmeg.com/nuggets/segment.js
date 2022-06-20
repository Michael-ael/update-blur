!(function() {
  if (window.NutmegConfig.SEGMENT_ID) {
    var e = (window.analytics = window.analytics || []);

    if (!e.initialize) {
      if (e.invoked) {
        window.console && console.error && console.error('Segment snippet included twice.');
      } else {
        (e.invoked = !0),
          (e.methods = [
            'trackSubmit',
            'trackClick',
            'trackLink',
            'trackForm',
            'pageview',
            'identify',
            'reset',
            'group',
            'track',
            'ready',
            'alias',
            'debug',
            'page',
            'once',
            'off',
            'on'
          ]),
          (e.factory = function(t) {
            return function() {
              var n = Array.prototype.slice.call(arguments);

              return n.unshift(t), e.push(n), e;
            };
          });
        for (var t = 0; t < e.methods.length; t++) {
          var n = e.methods[t];

          e[n] = e.factory(n);
        }
        (e.load = function(t, n) {
          var i = document.createElement('script');

          (i.type = 'text/javascript'),
            (i.async = !0),
            (i.src = 'https://cdn.segment.com/analytics.js/v1/' + t + '/analytics.min.js');
          var a = document.getElementsByTagName('script')[0];

          a.parentNode.insertBefore(i, a), (e._loadOptions = n);
        }),
          (e.SNIPPET_VERSION = '4.1.0'),
          e.load(window.NutmegConfig.SEGMENT_ID),
          e.track('Website_Page_Viewed', { page: window.location.pathname });
      }
    }
  } else {
    window.analytics = {
      identify: (i = function() {}),
      group: i,
      page: i,
      track: i,
      alias: i
    };
  }
  var i;
})();
