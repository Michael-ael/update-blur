!(function() {
  if (window.NutmegConfig.INTERACTION_STUDIO_SITE_KEY) {
    (function(o, n, e) {
      var l = 'link',
        s = 'script',
        c = 'createElement',
        i = 'insertBefore',
        f = o.getElementsByTagName(s)[0],
        p = f.parentNode,
        x = o[c](l),
        y = o[c](l),
        z = o[c](s);

      x.rel = 'preconnect';
      x.href = n;
      y.rel = 'preload';
      y.href = e;
      y.as = s;
      z.id = 'thxTag';
      z.src = e;
      p[i](x, f);
      p[i](y, f);
      p[i](z, f);
    })(
      document,
      'https://eu2.thunderhead.com',
      'https://eu2.cdn.thunderhead.com/one/rt/js/one-tag.js?siteKey=' + window.NutmegConfig.INTERACTION_STUDIO_SITE_KEY
    );
  }
})();
