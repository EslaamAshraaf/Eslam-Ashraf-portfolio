(function () {
  var P = window.PROJECTS,
    box = document.getElementById('cs-body'),
    dlg = document.getElementById('case-study'),
    T = document.title,
    nav = document.querySelector('.nav'),
    native = typeof dlg.showModal === 'function',
    lastFocus = null, opener = null, current = null, inPage = false, lbOpen = false;

  var esc = function (s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); };
  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (l) {
    l.forEach(function (i) {
      if (!i.isIntersecting) return;
      var t = i.target;
      t.classList.add('in'); io.unobserve(t);
      if (t.style.transitionDelay) setTimeout(function () { t.style.transitionDelay = ''; }, 1100);
    });
  }, { threshold: .08 }) : null;
  function obs(r) {
    if (!r || !r.querySelectorAll) return;
    Array.prototype.forEach.call(r.querySelectorAll('.rv'), function (x) { io ? io.observe(x) : x.classList.add('in'); });
  }
  function a(h, c, t) { return '<a class="' + c + '" href="' + h + '"' + (h && h !== '#' ? ' target="_blank" rel="noopener"' : '') + '>' + t + '</a>'; }
  function phone(p, i) {
    var src = i ? (p.images && p.images[i]) : (p.cover || (p.images && p.images[0]));
    if (src) return '<div class="phone"><div class="scr shot ' + p.g + '"><img src="' + src + '" alt="' + esc(p.name) + ' screenshot" loading="lazy"></div></div>';
    return '<div class="phone"><div class="scr ' + p.g + '">' + p.emoji + '<i></i><i></i></div></div>';
  }
  function launch(p, peek) {
    if (!p.icon) return phone(p);
    var pk = (peek && p.cover) ? '<img class="peek" src="' + p.cover + '" alt="" aria-hidden="true">' : '';
    return '<div class="phone"><div class="scr ' + p.g + ' launch">' +
      '<img src="' + p.icon + '" alt="' + esc(p.name) + ' app icon">' +
      '<b>' + esc(p.name) + '</b><span>' + esc(p.kind) + '</span>' + pk + '</div></div>';
  }
  function card(p) {
    return '<article class="card rv"><div><p class="kick">' + esc(p.kind) + '</p><h3>' + esc(p.name) + '</h3>' +
      '<p class="d">' + esc(p.summary) + '</p><ul>' + p.highlights.map(function (h) { return '<li>' + esc(h) + '</li>'; }).join('') + '</ul>' +
      '<div class="chips">' + p.chips.map(function (c) { return '<span>' + esc(c) + '</span>'; }).join('') + '</div>' +
      '<div class="links"><a class="btn cs-open" href="#/project/' + p.id + '" aria-haspopup="dialog" aria-controls="case-study" aria-expanded="false">View case study <span class="arw" aria-hidden="true">→</span></a>' +
      a(p.links.play, 'lnk', 'Google Play') + a(p.links.store, 'lnk', 'App Store') + '</div></div>' +
      '<div class="vis">' + launch(p, true) + '</div></article>';
  }

  function caseStudy(p) {
    var n = P[(P.indexOf(p) + 1) % P.length];
    var slides = (p.images || []).map(function (src, i) {
      return '<li class="slide"><button class="shot-btn" type="button" data-full="' + src + '" data-alt="' + esc(p.name) + ' — screen ' + (i + 1) + '" aria-label="Enlarge ' + esc(p.name) + ' screen ' + (i + 1) + ' of ' + p.images.length + '">' +
        '<img src="' + src + '" alt="' + esc(p.name) + ' screen ' + (i + 1) + ' of ' + p.images.length + '" loading="lazy"></button>' +
        '<p class="slide-cap">Screen ' + (i + 1) + ' / ' + p.images.length + '</p></li>';
    }).join('');
    var car = slides ?
      '<section class="cs-sec"><h3>Interface preview</h3>' +
      '<div class="car" role="region" aria-roledescription="carousel" aria-label="' + esc(p.name) + ' screenshots">' +
      '<ul class="car-track" id="cs-track" tabindex="0">' + slides + '</ul>' +
      '<button class="car-b prev" type="button" aria-label="Previous screenshot" aria-controls="cs-track">‹</button>' +
      '<button class="car-b next" type="button" aria-label="Next screenshot" aria-controls="cs-track">›</button>' +
      '</div><p class="car-status" role="status" aria-live="polite"></p></section>' : '';
    return '' +
      '<div class="cs-top">' +
      '<button class="cs-x" type="button" data-close aria-label="Close case study">Close <kbd>ESC</kbd></button>' +
      '<div class="cs-head">' +
      '<p class="eyebrow">' + esc(p.kind) + '</p>' +
      '<h2 id="cs-title" tabindex="-1">' + esc(p.name) + '</h2>' +
      '<p class="lead">' + esc(p.tagline) + '</p>' +
      '<p class="cs-actions">' + a(p.links.play, 'btn', 'Google Play') + a(p.links.store, 'btn2', 'App Store') +
      (p.links.repo ? a(p.links.repo, 'btn2', 'View repo') : '') + '</p>' +
      '</div>' +
      '<div class="cs-vis">' + launch(p) + '</div>' +
      '</div>' +
      '<section class="cs-sec"><h3>Metrics &amp; highlights</h3><dl class="cs-metrics">' +
      p.facts.map(function (f) { return '<div><dt>' + esc(f[0]) + '</dt><dd>' + esc(f[1]) + '</dd></div>'; }).join('') + '</dl></section>' +
      '<section class="cs-sec"><h3>Overview</h3><p class="cs-copy">' + esc(p.overview) + '</p></section>' +
      car +
      '<section class="cs-sec"><h3>Key features</h3><div class="cs-grid">' +
      p.features.map(function (f) { return '<div class="cs-tile"><h4>' + esc(f[0]) + '</h4><p>' + esc(f[1]) + '</p></div>'; }).join('') + '</div></section>' +
      '<section class="cs-sec"><h3>Tech stack</h3><div class="cs-stack">' +
      Object.keys(p.stack).map(function (k) { return '<div class="cs-row"><h4>' + esc(k) + '</h4><div class="chips">' + p.stack[k].map(function (c) { return '<span>' + esc(c) + '</span>'; }).join('') + '</div></div>'; }).join('') + '</div></section>' +
      '<footer class="cs-foot"><a class="cs-next" href="#/project/' + n.id + '"><small>Next case study</small>' + esc(n.name) + ' <b aria-hidden="true">›</b></a>' +
      '<button class="btn2" type="button" data-close>Back to work</button></footer>';
  }

  function focusables() {
    return Array.prototype.filter.call(
      dlg.querySelectorAll('a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])'),
      function (el) { return el.getClientRects().length > 0; }
    );
  }
  function trap(e) {
    if (e.key !== 'Tab' || native || !dlg.open) return;
    var f = focusables();
    if (!f.length) return;
    var first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  function wireCarousel() {
    var track = box.querySelector('.car-track');
    if (!track) return;
    var status = box.querySelector('.car-status'),
      prev = box.querySelector('.car-b.prev'),
      next = box.querySelector('.car-b.next'),
      n = track.children.length, t;
    function idx() {
      var mid = track.scrollLeft + track.clientWidth / 2, best = 0, bd = 1e9;
      for (var i = 0; i < n; i++) {
        var it = track.children[i], d = Math.abs(it.offsetLeft + it.clientWidth / 2 - mid);
        if (d < bd) { bd = d; best = i; }
      }
      return best;
    }
    function say() {
      var i = idx();
      if (status) status.textContent = 'Screen ' + (i + 1) + ' of ' + n + '. Use the arrows or swipe to browse; click a screen to enlarge.';
      if (prev) prev.disabled = i <= 0;
      if (next) next.disabled = i >= n - 1;
    }
    function go(dir) {
      var i = Math.min(Math.max(idx() + dir, 0), n - 1), it = track.children[i];
      if (!it) return;
      track.scrollTo({ left: it.offsetLeft - (track.clientWidth - it.clientWidth) / 2, behavior: 'smooth' });
    }
    if (prev) prev.addEventListener('click', function () { go(-1); });
    if (next) next.addEventListener('click', function () { go(1); });
    track.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
    });
    track.addEventListener('scroll', function () { clearTimeout(t); t = setTimeout(say, 90); }, { passive: true });
    say();
  }

  function show(p) {
    if (!dlg.open) {
      var el = document.activeElement;
      lastFocus = el;
      opener = el && el.closest ? el.closest('a[aria-haspopup="dialog"]') : null;
      box.innerHTML = caseStudy(p);
      if (native) dlg.showModal(); else dlg.setAttribute('open', '');
      document.body.classList.add('lock');
      wireCarousel();
      var h = box.querySelector('#cs-title');
      if (h) h.focus();
    } else if (current !== p.id) {
      box.innerHTML = caseStudy(p);
      dlg.scrollTop = 0; box.scrollTop = 0;
      wireCarousel();
      var h2 = box.querySelector('#cs-title');
      if (h2) h2.focus();
    }
    current = p.id;
    document.title = p.name + ' · Eslam Ashraf Selim';
    if (opener) opener.setAttribute('aria-expanded', 'true');
  }

  function hide() {
    if (!dlg.open) return;
    closeLb();
    if (native) dlg.close(); else dlg.removeAttribute('open');
    document.body.classList.remove('lock');
    if (opener) opener.setAttribute('aria-expanded', 'false');
    var back = (opener && document.contains(opener)) ? opener : lastFocus;
    if (back && document.contains(back) && back !== document.body) {
      try { back.focus({ preventScroll: true }); } catch (err) { back.focus(); }
    }
    current = null; opener = null; lastFocus = null; inPage = false;
    document.title = T;
  }

  function requestClose() {
    if (!dlg.open) return;
    if (inPage) history.back();
    else location.hash = 'work';
  }

  var lb = document.getElementById('lb'), lbImg = lb && lb.querySelector('img'), lbLast = null;
  function openLb(b) {
    if (!lb) return;
    lbImg.src = b.getAttribute('data-full');
    lbImg.alt = b.getAttribute('data-alt') || '';
    lb.hidden = false; lbOpen = true; lbLast = b;
    lb.querySelector('.lb-x').focus();
  }
  function closeLb() {
    if (!lb || lb.hidden) return;
    lb.hidden = true; lbOpen = false;
    lbImg.removeAttribute('src');
    if (lbLast && document.contains(lbLast)) lbLast.focus();
    lbLast = null;
  }

  box.addEventListener('click', function (e) {
    if (e.target.closest && e.target.closest('[data-close]')) { requestClose(); return; }
    var nx = e.target.closest && e.target.closest('.cs-next');
    if (nx) {
      e.preventDefault();
      var m = (nx.getAttribute('href') || '').match(/^#\/project\/([\w-]+)/);
      var p = m && P.filter(function (x) { return x.id === m[1]; })[0];
      if (p) { history.replaceState(null, '', nx.getAttribute('href')); show(p); }
      return;
    }
    var b = e.target.closest && e.target.closest('.shot-btn');
    if (b) openLb(b);
  });

  dlg.addEventListener('click', function (e) { if (e.target === dlg) requestClose(); });
  dlg.addEventListener('cancel', function (e) {
    e.preventDefault();
    if (lbOpen) closeLb(); else requestClose();
  });

  if (lb) {
    lb.addEventListener('click', function (e) {
      if (e.target === lb || (e.target.closest && e.target.closest('.lb-x'))) closeLb();
    });
  }

  addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && dlg.open) {
      if (lbOpen) { closeLb(); return; }
      if (!native) requestClose();
      return;
    }
    trap(e);
  });

  document.addEventListener('click', function (e) {
    var l = e.target.closest && e.target.closest('a[href^="#/project/"]');
    if (l) inPage = true;
  });

  function route() {
    var m = location.hash.match(/^#\/project\/([\w-]+)/),
      p = m && P.filter(function (x) { return x.id === m[1]; })[0];
    if (p) { show(p); return; }
    hide();
    var id = location.hash.slice(1), el = id && document.getElementById(id);
    if (el) el.scrollIntoView();
  }

  function spy() {
    var links = [].slice.call(document.querySelectorAll('.nav nav a[href^="#"]'));
    var items = links.map(function (l) { return { l: l, el: document.getElementById(l.getAttribute('href').slice(1)) }; })
      .filter(function (x) { return x.el; });
    if (!items.length || !('IntersectionObserver' in window)) return;
    function set(active) {
      items.forEach(function (x) {
        if (x === active) { x.l.classList.add('on'); x.l.setAttribute('aria-current', 'true'); }
        else { x.l.classList.remove('on'); x.l.removeAttribute('aria-current'); }
      });
    }
    var so = new IntersectionObserver(function (es) {
      es.forEach(function (en) {
        if (!en.isIntersecting) return;
        var hit = items.filter(function (x) { return x.el === en.target; })[0];
        if (hit) set(hit);
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    items.forEach(function (x) { so.observe(x.el); });
  }

  function countUp(el) {
    var raw = el.textContent, m = raw.match(/(\d+(?:\.\d+)?)/);
    if (!m || matchMedia('(prefers-reduced-motion:reduce)').matches) return;
    var target = parseFloat(m[1]), dec = (m[1].split('.')[1] || '').length, t0 = 0;
    requestAnimationFrame(function step(t) {
      if (!t0) t0 = t;
      var k = Math.min((t - t0) / 1400, 1), e = 1 - Math.pow(1 - k, 3);
      el.textContent = raw.replace(m[1], (target * e).toFixed(dec));
      if (k < 1) requestAnimationFrame(step);
    });
  }
  function stats() {
    var s = document.querySelector('.stats');
    if (!s || !('IntersectionObserver' in window)) return;
    var bs = [].slice.call(s.querySelectorAll('b'));
    var o = new IntersectionObserver(function (en) {
      if (!en[0].isIntersecting) return;
      bs.forEach(countUp); o.disconnect();
    }, { threshold: .35 });
    o.observe(s);
  }

  var prog = document.querySelector('.prog'), ticking = false;
  function onScroll() {
    nav.classList.toggle('sc', scrollY > 8);
    if (prog) {
      var h = document.documentElement.scrollHeight - innerHeight;
      prog.style.transform = 'scaleX(' + (h > 0 ? Math.min(scrollY / h, 1) : 0) + ')';
    }
  }

  function pointerGlow() {
    var hero = document.querySelector('.hero');
    if (!hero || !matchMedia('(hover:hover) and (pointer:fine)').matches) return;
    if (matchMedia('(prefers-reduced-motion:reduce)').matches) return;
    hero.addEventListener('pointermove', function (e) {
      var r = hero.getBoundingClientRect();
      hero.style.setProperty('--gx', (e.clientX - r.left) + 'px');
      hero.style.setProperty('--gy', (e.clientY - r.top) + 'px');
    });
  }

  function init() {
    document.getElementById('cards').innerHTML = P.map(card).join('');
    Array.prototype.forEach.call(document.querySelectorAll('#cards .card'), function (c, i) {
      c.style.transitionDelay = Math.min(i, 4) * .07 + 's';
    });
    obs(document.getElementById('top'));
    addEventListener('hashchange', route);
    addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () { onScroll(); ticking = false; });
    }, { passive: true });
    document.getElementById('y').textContent = new Date().getFullYear();
    stats(); pointerGlow(); onScroll(); spy(); route();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
