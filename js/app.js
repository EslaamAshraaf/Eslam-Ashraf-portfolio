(function () {
  var P = window.PROJECTS, main = document.getElementById('top'), det = document.getElementById('detail'),
    T = document.title, nav = document.querySelector('.nav');
  var esc = function (s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); };
  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (l) {
    l.forEach(function (i) { if (i.isIntersecting) { i.target.classList.add('in'); io.unobserve(i.target); } });
  }, { threshold: .08 }) : null;
  function obs(r) { r.querySelectorAll('.rv').forEach(function (x) { io ? io.observe(x) : x.classList.add('in'); }); }
  function a(h, c, t) { return '<a class="' + c + '" href="' + h + '"' + (h === '#' ? '' : ' target="_blank" rel="noopener"') + '>' + t + '</a>'; }
  function phone(p) { return '<div class="phone"><div class="scr ' + p.g + '">' + p.emoji + '<i></i><i></i></div></div>'; }

  function card(p) {
    return '<article class="card rv"><div><p class="kick">' + esc(p.kind) + '</p><h3>' + esc(p.name) + '</h3>' +
      '<p class="d">' + esc(p.summary) + '</p><ul>' + p.highlights.map(function (h) { return '<li>' + esc(h) + '</li>'; }).join('') + '</ul>' +
      '<div class="chips">' + p.chips.map(function (c) { return '<span>' + esc(c) + '</span>'; }).join('') + '</div>' +
      '<div class="links"><a class="btn" href="#/project/' + p.id + '">View details</a>' + a(p.links.play, 'lnk', 'Google Play') + a(p.links.store, 'lnk', 'App Store') + '</div></div>' +
      '<div class="vis">' + phone(p) + '</div></article>';
  }

  function detail(p) {
    var n = P[(P.indexOf(p) + 1) % P.length];
    return '<section class="dh dark"><div class="w rv"><a class="back" href="#work">‹ All work</a>' +
      '<p class="eyebrow">' + esc(p.kind) + '</p><h1>' + esc(p.name) + '</h1><p class="lead">' + esc(p.tagline) + '</p>' +
      '<p class="cta">' + a(p.links.play, 'btn', 'Google Play') + a(p.links.store, 'btn2', 'App Store') + '</p>' +
      '<div class="vis">' + phone(p) + '</div></div></section>' +
      '<section class="facts"><div class="w rv">' + p.facts.map(function (f) { return '<div><small>' + esc(f[0]) + '</small><b>' + esc(f[1]) + '</b></div>'; }).join('') + '</div></section>' +
      '<section><div class="w rv"><h2>Overview.</h2><p class="about">' + esc(p.overview) + '</p></div></section>' +
      '<section class="alt"><div class="w rv"><h2>Key features.</h2><div class="tiles">' +
      p.features.map(function (f) { return '<div class="tile"><h4>' + esc(f[0]) + '</h4><p>' + esc(f[1]) + '</p></div>'; }).join('') + '</div></div></section>' +
      '<section><div class="w rv"><h2>Technology used.</h2>' +
      Object.keys(p.stack).map(function (k) { return '<div class="sr"><h4>' + esc(k) + '</h4><div class="chips">' + p.stack[k].map(function (c) { return '<span>' + esc(c) + '</span>'; }).join('') + '</div></div>'; }).join('') + '</div></section>' +
      '<section class="alt nx"><div class="w rv"><a href="#/project/' + n.id + '"><small>Next project</small>' + esc(n.name) + ' <b>›</b></a></div></section>';
  }

  function route() {
    var m = location.hash.match(/^#\/project\/([\w-]+)/),
      p = m && P.filter(function (x) { return x.id === m[1]; })[0];
    if (p) {
      det.innerHTML = detail(p); main.hidden = true; det.hidden = false;
      document.title = p.name + ' · Eslam Ashraf Selim';
      scrollTo({ top: 0, behavior: 'instant' }); obs(det);
    } else {
      var was = main.hidden; det.hidden = true; main.hidden = false; document.title = T;
      var id = location.hash.slice(1), el = id && document.getElementById(id);
      if (el) el.scrollIntoView(); else if (was) scrollTo({ top: 0, behavior: 'instant' });
    }
  }

  document.getElementById('cards').innerHTML = P.map(card).join('');
  obs(main);
  addEventListener('hashchange', route);
  addEventListener('scroll', function () { nav.classList.toggle('sc', scrollY > 8); }, { passive: true });
  document.getElementById('y').textContent = new Date().getFullYear();
  route();
})();
