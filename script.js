(function () {
  'use strict';
  var D = window.PORTFOLIO || {};
  var I = window.I18N || { en: {}, fr: {} };
  var $ = function (s) { return document.querySelector(s); };
  var root = document.documentElement;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Language ---------- */
  var lang = (function () {
    try { var s = localStorage.getItem('lang'); if (s === 'en' || s === 'fr') return s; } catch (e) {}
    return /^fr/i.test(navigator.language || '') ? 'fr' : 'en';
  })();
  function t(key) { return (I[lang] && I[lang][key]) || I.en[key] || key; }
  // Bilingual value: { en, fr } or a plain value used for both languages.
  function L(v) { return v && typeof v === 'object' && !Array.isArray(v) && ('en' in v || 'fr' in v) ? (v[lang] != null ? v[lang] : v.en) : v; }

  function el(tag, attrs, children) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === 'text') n.textContent = attrs[k];
      else if (k === 'class') n.className = attrs[k];
      else n.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) n.appendChild(c); });
    return n;
  }
  function chips(list, cls) {
    return el('div', { class: 'chips' }, (L(list) || []).map(function (x) { return el('span', { class: 'chip ' + (cls || ''), text: x }); }));
  }
  function todo(text) { return el('span', { class: 'todo', text: text }); }

  /* Official technology logos (assets/logos, from Devicon, MIT). Missing → small dot. */
  var LOGOS = {
    'HTML': 'html5', 'CSS': 'css3', 'JavaScript': 'javascript', 'TypeScript': 'typescript', 'React.js': 'react', 'React': 'react',
    'Angular': 'angular', 'Java': 'java', 'Spring Boot': 'spring', 'C#': 'csharp', 'ASP.NET Core': 'dotnetcore', '.NET': 'dotnetcore',
    '.NET Core': 'dotnetcore', 'MySQL': 'mysql', 'SQL Server': 'microsoftsqlserver', 'PL/SQL': 'oracle', 'Git': 'git', 'GitHub': 'github',
    'Docker': 'docker', 'GitHub Actions': 'githubactions', 'Swagger / OpenAPI': 'swagger', 'Postman': 'postman', 'Python': 'python',
    'C': 'c', 'Unity': 'unity', 'Linux (Ubuntu)': 'ubuntu', 'Agile / Scrum': 'jira'
  };
  var MONO = { github: 1, unity: 1 }; // black logos → inverted in dark mode
  function skillChips(items) {
    return el('div', { class: 'skills' }, (L(items) || []).map(function (it) {
      var name = typeof it === 'string' ? it : L(it.name);
      var key = LOGOS[name];
      var icon = key ? el('img', { src: 'assets/logos/' + key + '.svg', alt: '', width: '28', height: '28', loading: 'lazy', class: MONO[key] ? 'mono' : '' })
                     : el('span', { class: 'dot', 'aria-hidden': 'true' });
      if (key) icon.addEventListener('error', function () { icon.replaceWith(el('span', { class: 'dot', 'aria-hidden': 'true' })); });
      return el('div', { class: 'skill' }, [icon, el('span', { text: name }), it.level ? el('small', { text: L(it.level) }) : null]);
    }));
  }
  function media(src, alt, isIllus, emptyText) {
    var box = el('div', { class: 'media' });
    if (src) {
      box.appendChild(el('img', { src: src, alt: alt, loading: 'lazy' }));
      if (isIllus) box.appendChild(el('span', { class: 'badge', text: t('illus') }));
    } else box.textContent = emptyText;
    return box;
  }
  var ICONS = {
    code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
    cpu: '<rect x="5" y="5" width="14" height="14" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/>',
    bulb: '<path d="M9 18h6M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.3h6c0-1 .4-1.8 1-2.3A7 7 0 0 0 12 2Z"/>',
    puzzle: '<path d="M19.4 14.4a2.5 2.5 0 1 0 0-4.8V6a1 1 0 0 0-1-1h-3.6a2.5 2.5 0 1 0-4.8 0H6a1 1 0 0 0-1 1v3.6a2.5 2.5 0 1 1 0 4.8V18a1 1 0 0 0 1 1h3.6a2.5 2.5 0 1 1 4.8 0H18a1 1 0 0 0 1-1Z"/>',
    cap: '<path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/><path d="M22 10v6"/>',
    school: '<path d="M3 21h18M5 21V10l7-5 7 5v11"/><path d="M10 21v-5h4v5"/><circle cx="12" cy="11" r="1.6"/>',
    rocket: '<path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1Z"/><path d="m12 15-3-3a22 22 0 0 1 2-4A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22 22 0 0 1-4 2Z"/><path d="M9 12H4s.6-3 2-4c1.6-1.1 5 0 5 0M12 15v5s3-.6 4-2c1.1-1.6 0-5 0-5"/>',
    briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    horse:'<path d="M6 21l2-6c-2-1-3-3-3-5l4-6 2 2 3-3 1 4c2 1 4 3 4 6v8"/><path d="M14 9l-3 2"/><circle cx="10.5" cy="7.5" r=".6" fill="currentColor"/>'
  };
  function iconSvg(name) {
    var s = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    s.setAttribute('viewBox', '0 0 24 24'); s.setAttribute('aria-hidden', 'true');
    s.innerHTML = ICONS[name] || ICONS.code;
    return s;
  }
  function link(href, text) {
    var a = el('a', { href: href, text: text });
    if (/^https?:/.test(href)) { a.target = '_blank'; a.rel = 'noopener'; }
    return a;
  }
  function fill(sel, nodes) { var box = $(sel); box.innerHTML = ''; nodes.forEach(function (n) { if (n) box.appendChild(n); }); return box; }

  /* ---------- Reveal on scroll ---------- */
  var rev = 'IntersectionObserver' in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); rev.unobserve(en.target); } });
  }, { threshold: .12 }) : null;
  function watch(scope, instant) {
    (scope || document).querySelectorAll('.reveal:not(.in)').forEach(function (n) {
      if (!rev || instant) n.classList.add('in'); else rev.observe(n);
    });
  }
  function stagger(box) {
    Array.prototype.forEach.call(box.children, function (c, i) { c.classList.add('reveal'); c.style.setProperty('--d', (i % 6) * 90 + 'ms'); });
  }

  /* ---------- Content ---------- */
  var projects = D.projects || [];
  var currentFilter = 'All';
  function family(x) { if (/net/i.test(x)) return '.NET'; if (x === 'C#') return 'Unity'; return x; }

  function renderProjects() {
    var list = projects.filter(function (p) { return currentFilter === 'All' || p.tech.some(function (x) { return family(x) === currentFilter; }); });
    var grid = fill('#projectsGrid', list.map(function (p, i) {
      var name = L(p.name), feats = L(p.features) || [];
      var card = el('article', { class: 'card pop' }, [
        media(p.image, (p.illustration ? t('a.photoAlt') : t('p.shotAlt')) + name, p.illustration, t('p.shot')),
        el('span', { class: 'meta', text: L(p.kind) }),
        el('h3', { text: name }),
        el('p', { text: L(p.description) }),
        L(p.objective) ? el('p', { class: 'objective' }, [el('b', { text: t('p.objective') + ' · ' }), document.createTextNode(L(p.objective))]) : null,
        feats.length ? el('details', {}, [el('summary', { text: t('p.features') + ' (' + feats.length + ')' }), el('ul', {}, feats.map(function (f) { return el('li', { text: f }); }))]) : null,
        L(p.role) ? el('p', { text: t('p.role') + L(p.role) }) : todo(t('p.roleTodo')),
        p.tech.length ? chips(p.tech, 'small') : todo(t('p.techTodo')),
        el('div', { class: 'links' }, [
          p.github ? link(p.github, t('p.repo')) : todo(t('p.repoTodo')),
          p.demo ? link(p.demo, t('p.demo')) : null
        ])
      ]);
      card.style.setProperty('--d', i * 70 + 'ms');
      return card;
    }));
    return grid;
  }

  function renderFilters() {
    var techs = ['All'];
    projects.forEach(function (p) { p.tech.forEach(function (x) { var f = family(x); if (techs.indexOf(f) < 0) techs.push(f); }); });
    fill('#filters', techs.map(function (x) {
      var b = el('button', { class: 'filter', type: 'button', 'aria-pressed': x === currentFilter ? 'true' : 'false', text: x === 'All' ? t('p.all') : x });
      b.addEventListener('click', function () {
        currentFilter = x;
        $('#filters').querySelectorAll('.filter').forEach(function (y) { y.setAttribute('aria-pressed', 'false'); });
        b.setAttribute('aria-pressed', 'true');
        renderProjects();
      });
      return b;
    }));
  }

  function renderContent(instant) {
    // Education
    var edu = fill('#educationList', (D.education || []).map(function (e) {
      var topics = L(e.topics) || [];
      return el('li', { class: e.done ? 'done' : '' }, [
        el('div', { class: 'edu-card' }, [
          el('span', { class: 'edu-icon' }, [iconSvg(e.icon)]),
          el('div', { class: 'edu-body' }, [
            el('div', { class: 'row' }, [el('span', { class: 'when', text: L(e.period) }), el('span', { class: 'chip' + (e.done ? ' done' : ''), text: L(e.status) })]),
            el('h3', { text: L(e.title) + (L(e.section) ? ' — ' + L(e.section) : '') }),
            el('p', { text: L(e.school) }),
            topics.length ? chips(topics) : null
          ])
        ])
      ]);
    }));
    stagger(edu);

    // Complementary training (column hidden when the list is empty)
    $('.edu-grid').classList.toggle('single', !(D.trainings || []).length);
    stagger(fill('#trainingList', (D.trainings || []).map(function (tr) {
      return el('article', { class: 'card training' }, [
        el('div', { class: 'training-head' }, [el('span', { class: 'edu-icon' }, [iconSvg(tr.icon)]), el('h3', { text: L(tr.title) })]),
        L(tr.issuer) ? el('p', { text: L(tr.issuer) }) : todo(t('t.issuer')),
        L(tr.date) ? el('span', { class: 'meta', text: L(tr.date) }) : todo(t('t.date')),
        L(tr.description) ? el('p', { text: L(tr.description) }) : null,
        tr.skills && L(tr.skills).length ? chips(tr.skills, 'small') : null
      ]);
    })));

    // Hero highlights (computed from the data)
    var facts = [
      { icon: 'cap', text: 'IIT Sfax' },
      { icon: 'briefcase', text: (D.experience || []).length + ' ' + t('fact.internships') },
      { icon: 'rocket', text: (D.achievements || []).length + ' ' + t('fact.events') }
    ];
    var fl = fill('#heroFacts', facts.map(function (f) { return el('li', {}, [iconSvg(f.icon), el('span', { text: f.text })]); }));
    fl.setAttribute('aria-label', t('aria.facts'));

    // Skills
    stagger(fill('#skillsGrid', (D.skills || []).map(function (g) {
      return el('div', { class: 'card skill-card' }, [el('h3', { text: L(g.category) }), g.notTech ? chips(g.items) : skillChips(g.items)]);
    })));

    // Experience
    var side = el('div', { class: 'exp-side' });
    var main = [];
    (D.experience || []).forEach(function (x) {
      if (x.main) {
        main.push(el('article', { class: 'card exp-main reveal' }, [
          el('div', { class: 'exp-head' }, [el('b', { text: x.company + ' · ' + L(x.type) }), el('span', { class: 'muted', text: L(x.period) })]),
          el('h3', { text: L(x.title) }),
          el('p', { text: L(x.description) }),
          el('ul', { class: 'exp-cols' }, (L(x.features) || []).map(function (f) { return el('li', { text: f }); })),
          chips(x.tech)
        ]));
      } else {
        side.appendChild(el('article', { class: 'card' }, [
          el('span', { class: 'meta', text: L(x.period) + ' · ' + x.company }),
          el('h3', { text: L(x.type) }),
          el('p', { text: L(x.description) }),
          chips(x.tech, 'small')
        ]));
      }
    });
    stagger(side);
    fill('#experienceList', main.concat([side]));

    // Projects
    renderFilters();
    renderProjects();

    // Certifications
    var certs = (D.certifications || []).map(function (c) {
      var name = L(c.name);
      return el('article', { class: 'card' }, [
        media(c.image, t('c.alt') + name, c.illustration, t('c.img')),
        el('h3', { text: name }),
        L(c.issuer) ? el('p', { text: L(c.issuer) }) : todo(t('c.issuer')),
        L(c.date) ? el('span', { class: 'meta', text: L(c.date) }) : todo(t('c.date')),
        c.skills && L(c.skills).length ? chips(c.skills, 'small') : null,
        c.verifyUrl ? el('div', { class: 'links' }, [link(c.verifyUrl, t('c.verify'))]) : null
      ]);
    });
    certs.push(el('div', { class: 'empty', text: t('c.more') }));
    stagger(fill('#certsGrid', certs));

    // Achievements
    stagger(fill('#achievementsGrid', (D.achievements || []).map(function (a) {
      return el('article', { class: 'card ach' }, [
        a.photos && a.photos.length ? media(a.photos[0], t('a.photoAlt') + L(a.name), a.illustration, '') : null,
        el('span',{ class: 'meta', text: (L(a.year) || t('a.year')) + ' · ' + a.organizer }),
        el('h3', { text: L(a.name) }),
        el('p', { text: L(a.description) }),
        L(a.activity) ? el('p', { text: t('a.project') + L(a.activity) }) : null,
        L(a.result) ? el('p', { text: t('a.result') + L(a.result) }) : null
      ]);
    })));
    fill('#associations', [chips(D.associations)]);
    stagger(fill('#interests', (D.interests || []).map(function (i) {
      return el('div', { class: 'interest' }, [el('span', { class: 'interest-icon' }, [iconSvg(i.icon)]), el('span', { text: L(i.label) })]);
    })));

    watch(document, instant);
  }

  function applyStatic() {
    root.lang = lang;
    document.title = t('meta.title');
    document.querySelectorAll('[data-i18n]').forEach(function (n) { n.textContent = t(n.getAttribute('data-i18n')); });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (n) { n.setAttribute('aria-label', t(n.getAttribute('data-i18n-aria'))); });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (n) { n.setAttribute('alt', t(n.getAttribute('data-i18n-alt'))); });
    var burger = $('#burger');
    burger.setAttribute('aria-label', t(burger.getAttribute('aria-expanded') === 'true' ? 'aria.menuClose' : 'aria.menuOpen'));
  }

  function setLang(next) {
    lang = next;
    try { localStorage.setItem('lang', lang); } catch (e) {}
    applyStatic();
    renderContent(true);
    // clear form errors (they were written in the previous language)
    document.querySelectorAll('.fl .err').forEach(function (n) { n.remove(); });
    $('#formStatus').textContent = '';
    if (!reduce) { root.classList.remove('i18n-fade'); void root.offsetWidth; root.classList.add('i18n-fade'); }
  }
  $('#langBtn').addEventListener('click', function () { setLang(lang === 'fr' ? 'en' : 'fr'); });

  applyStatic();
  renderContent(false);

  /* Stats — computed from the data, never hard-coded */
  $('#statProjects').textContent = projects.length;
  $('#statTech').textContent = (D.skills || []).filter(function (g) { return !g.notTech; })
    .reduce(function (n, g) { return n + L(g.items).length; }, 0);
  $('#statEvents').textContent = (D.achievements || []).length;
  $('#year').textContent = new Date().getFullYear();
  stagger($('.stats'));
  watch($('#about'));

  /* ---------- Theme ---------- */
  $('#themeBtn').addEventListener('click', function () {
    var cur = root.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    var next = cur === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  /* ---------- Mobile menu ---------- */
  var menu = $('#menu'), burger = $('#burger');
  burger.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', t(open ? 'aria.menuClose' : 'aria.menuOpen'));
  });
  menu.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { menu.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); burger.setAttribute('aria-label', t('aria.menuOpen')); }
  });

  /* ---------- Scroll: active link, back to top, progress bar ---------- */
  var navLinks = Array.prototype.slice.call(menu.querySelectorAll('a'));
  var toTop = $('#toTop'), bar = $('#progress');
  function onScroll() {
    toTop.classList.toggle('show', scrollY > 600);
    var h = root.scrollHeight - innerHeight;
    if (bar) bar.style.transform = 'scaleX(' + (h > 0 ? scrollY / h : 0) + ')';
  }
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) navLinks.forEach(function (a) { a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id); });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('main section[id]').forEach(function (s) { spy.observe(s); });

    // Count-up for numeric stats
    var cio = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        cio.unobserve(e.target);
        var node = e.target, end = parseInt(node.textContent, 10);
        if (isNaN(end) || reduce) return;
        var t0 = null;
        (function step(ts) { t0 = t0 || ts; var k = Math.min((ts - t0) / 1200, 1); node.textContent = Math.round(end * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(step); })(performance.now());
      });
    }, { threshold: .6 });
    ['#statProjects', '#statTech', '#statEvents'].forEach(function (id) { cio.observe($(id)); });
  }

  // Soft spotlight following the cursor on cards
  document.addEventListener('pointermove', function (e) {
    var c = e.target.closest && e.target.closest('.card');
    if (!c) return;
    var r = c.getBoundingClientRect();
    c.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    c.style.setProperty('--my', (e.clientY - r.top) + 'px');
  });

  /* ---------- QR code to LinkedIn (hidden if the library fails to load) ---------- */
  if (window.QRCode && D.linkedin) {
    new QRCode($('#qr'), { text: D.linkedin, width: 96, height: 96, colorDark: '#40352E', colorLight: '#FFFFFF' });
  }

  /* ---------- Contact form: real email delivery via FormSubmit ---------- */
  // Messages are delivered to D.email. The very first submission triggers a one-time
  // activation email from FormSubmit to that inbox: click "Activate Form" once.
  var FORM_ENDPOINT = 'https://formsubmit.co/ajax/' + D.email;
  var form = $('#contactForm'), status = $('#formStatus'), success = $('#formSuccess');
  var sendBtn = form.querySelector('.send');
  function setErr(input, msg) {
    var box = input.parentNode, old = box.querySelector('.err'); if (old) old.remove();
    input.setAttribute('aria-invalid', msg ? 'true' : 'false');
    if (msg) { box.appendChild(el('span', { class: 'err', text: msg })); box.classList.remove('shake'); void box.offsetWidth; box.classList.add('shake'); }
  }
  function check(i) {
    var v = i.value.trim();
    if (!v) return t('form.required');
    if (i.name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return t('form.badEmail');
    if (i.name === 'message' && v.length < 10) return t('form.short');
    return '';
  }
  ['name', 'email', 'subject', 'message'].forEach(function (n) {
    form.elements[n].addEventListener('blur', function () { if (this.value) setErr(this, check(this)); });
    form.elements[n].addEventListener('input', function () { if (this.getAttribute('aria-invalid') === 'true' && !check(this)) setErr(this, ''); });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var ok = true, first = null;
    ['name', 'email', 'subject', 'message'].forEach(function (n) {
      var i = form.elements[n], msg = check(i);
      setErr(i, msg);
      if (msg) { ok = false; first = first || i; }
    });
    status.className = 'form-note';
    if (!ok) { first.focus(); status.textContent = t('form.fix'); status.classList.add('bad'); return; }
    if (form.elements._honey.value) return; // bot

    var f = form.elements;
    var payload = {
      name: f.name.value.trim(),
      email: f.email.value.trim(),
      _replyto: f.email.value.trim(),
      _subject: 'Portfolio — ' + f.subject.value.trim(),
      subject: f.subject.value.trim(),
      message: f.message.value.trim(),
      _template: 'table',
      _captcha: 'false'
    };
    form.classList.add('sending'); sendBtn.disabled = true;
    status.textContent = t('form.sending');

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(payload)
    }).then(function (r) { return r.json().then(function (j) { return { ok: r.ok, j: j }; }); })
      .then(function (res) {
        if (!res.ok || String(res.j.success) !== 'true') throw new Error(res.j.message || 'Sending failed');
        form.classList.remove('sending'); form.classList.add('sent');
        status.textContent = '';
        success.hidden = false;
        form.reset();
      })
      .catch(function () {
        form.classList.remove('sending');
        status.classList.add('bad');
        status.textContent = t('form.fail');
        status.appendChild(el('a', { href: 'mailto:' + D.email, text: D.email }));
        status.appendChild(document.createTextNode('.'));
      })
      .then(function () { sendBtn.disabled = false; });
  });
  $('#formAgain').addEventListener('click', function () {
    success.hidden = true; form.classList.remove('sent'); form.elements.name.focus();
  });
})();
