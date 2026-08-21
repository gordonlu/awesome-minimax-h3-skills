/* ==========================================================================
   Awesome MiniMax H3 Skills — App
   Vanilla JS · history router · multilingual · GSAP motion
   ========================================================================== */
(function () {
  "use strict";

  var DATA = window.AMHS_DATA;
  var CATS = {};
  DATA.categories.forEach(function (c) { CATS[c.id] = c; });

  var $ = function (sel, el) { return (el || document).querySelector(sel); };
  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (m) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m];
    });
  };

  var REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var HAS_GSAP = typeof window.gsap !== "undefined";
  if (HAS_GSAP && window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  /* ============================ i18n ============================ */

  var I18N = window.AMHS_I18N || {};

  var lang = (location.search.match(/[?&]lang=(zh|en|ko|de|ja|es)/) || [])[1] || localStorage.getItem("amhs-lang") || "zh";
  function t(key) { return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key; }
  function L(field) {
    if (field == null) return "";
    if (typeof field === "string") return t(field);
    var loc = (window.AMHS_LOCALES && window.AMHS_LOCALES[lang]) || {};
    return loc[field.en] || field[lang] || field.en || "";
  }
  function LAlt(field) {
    if (field == null || typeof field === "string") return "";
    var other = lang === "en" ? "zh" : "en";
    var loc = (window.AMHS_LOCALES && window.AMHS_LOCALES[other]) || {};
    return loc[field.en] || field[other] || "";
  }

  /* ============================ state ============================ */

  var state = { query: "", source: "all", category: "all" };
  var viewCtx = null; // gsap context for the active view
  var homeBound = false; // true once events/hero are bound on a snapshot-rendered home

  /* ============================ helpers ============================ */

  function catChip(id) {
    var c = CATS[id];
    if (!c) return "";
    return '<span class="card-cat"><span class="cdot" style="background:' + c.color + '"></span>' + esc(L(c)) + "</span>";
  }

  function officialBadge(s) {
    return '<span class="card-badge' + (s.sourceType === "community" ? " community" : "") + '">' +
      t(s.sourceType === "community" ? "badge.community" : "badge.official") + "</span>";
  }

  function videoTag(p, cls) {
    var v =
      '<video class="' + cls + '" muted loop playsinline preload="none" ' +
      'poster="' + esc(p.poster) + '"' +
      (p.video ? ' data-src="' + esc(p.video) + '"' : "") + "></video>";
    if (!p.video) {
      return '<img class="' + cls + '" src="' + esc(p.poster) + '" alt="" loading="lazy" decoding="async">';
    }
    return (
      '<span class="media-bg" style="background-image:url(&quot;' + esc(p.poster) + '&quot;)"></span>' +
      '<span class="media-fg">' + v + "</span>"
    );
  }

  // Lazy video: load + play in view, pause out of view
  var videoIO = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      var v = en.target;
      if (en.isIntersecting) {
        if (!v.getAttribute("src") && v.dataset.src) v.src = v.dataset.src;
        var p = v.play();
        if (p && p.catch) p.catch(function () {});
      } else {
        v.pause();
      }
    });
  }, { rootMargin: "120px", threshold: 0.05 });

  function observeVideos(root) {
    Array.prototype.forEach.call(root.querySelectorAll("video[data-src]"), function (v) {
      videoIO.observe(v);
    });
  }

  function copyText(text, btn) {
    function done() {
      var label = btn.querySelector("span");
      btn.classList.add("copied");
      if (label) label.textContent = t("detail.copied");
      setTimeout(function () {
        btn.classList.remove("copied");
        if (label) label.textContent = t("detail.copy");
      }, 1600);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, done);
    } else {
      var ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); } catch (e) {}
      document.body.removeChild(ta);
      done();
    }
  }

  /* ============================ HOME ============================ */

  function videoSkills() {
    return DATA.skills.filter(function (s) { return !s.foundation; });
  }

  function filteredSkills() {
    var q = state.query.trim().toLowerCase();
    return videoSkills().filter(function (s) {
      if (state.source !== "all" && s.sourceType !== state.source) return false;
      if (state.category !== "all" && s.categories.indexOf(state.category) === -1) return false;
      if (!q) return true;
      var hay = [
        s.slug, s.name, s.nameZh, L(s.summary), LAlt(s.summary), L(s.description),
        s.tags.map(L).join(" "),
        s.categories.map(function (id) { return L(CATS[id]) + " " + LAlt(CATS[id]); }).join(" "),
        s.bestFor.map(L).join(" "),
      ].join(" ").toLowerCase();
      return hay.indexOf(q) !== -1;
    });
  }

  function renderMarquee() {
    var items = videoSkills().map(function (s, i) {
      return (
        '<a class="marquee-item" href="/skill/' + s.slug + '" aria-label="' + esc(L({ en: s.name, zh: s.nameZh })) + '">' +
          '<img src="' + esc(s.preview.poster) + '" alt="' + esc(s.name) + ' demo" loading="' + (i < 4 ? "eager" : "lazy") + '" decoding="async">' +
          '<span class="mq-label">' + esc(L({ en: s.name, zh: s.nameZh })) + "</span>" +
        "</a>"
      );
    }).join("");
    return '<div class="marquee" aria-hidden="false"><div class="marquee-track">' + items + items + "</div></div>";
  }

  function renderFoundation() {
    var s = DATA.skills.filter(function (x) { return x.foundation; })[0];
    var modes = s.modes.map(function (m) {
      return '<span class="mode-chip">' + esc(m.id) + "</span>";
    }).join("");
    var structures = s.promptStructures.map(function (g) {
      var fields = g.fields.map(function (f, i) {
        return (
          '<div class="structure-field"><span class="f-idx">' + (i + 1) + "</span>" +
          '<span class="f-name">' + esc(f) + '</span><span class="f-line"></span></div>'
        );
      }).join("");
      return (
        '<div class="structure-group"><div class="structure-group-label">' + esc(L(g.label)) + "</div>" + fields + "</div>"
      );
    }).join("");

    return (
      '<section class="section" id="foundation"><div class="wrap">' +
        '<div class="section-head"><div>' +
          '<p class="section-label">' + t("fd.label") + "</p>" +
          '<h2 class="section-title">' + t("fd.title") + "</h2>" +
        "</div>" + '<span class="section-note">' + t("fd.note") + "</span></div>" +
        '<a class="foundation-card js-reveal" href="/skill/' + s.slug + '">' +
          "<div>" +
            '<span class="foundation-badge">' + t("fd.badge") + "</span>" +
            '<h3 class="foundation-name">' + esc(L({ en: s.name, zh: s.nameZh })) + "</h3>" +
            '<p class="foundation-name-zh">' + esc(LAlt({ en: s.name, zh: s.nameZh })) + "</p>" +
            '<p class="foundation-desc">' + esc(L(s.summary)) + "</p>" +
            '<div class="foundation-modes">' + modes + "</div>" +
            '<div class="foundation-cta"><span class="btn">' + t("fd.cta") + ' <span aria-hidden="true">→</span></span></div>' +
          "</div>" +
          '<div class="structure-panel">' +
            '<p class="structure-title">' + t("fd.structure") + "</p>" +
            structures +
          "</div>" +
        "</a>" +
      "</div></section>"
    );
  }

  function skillCard(s, i) {
    var tags = s.tags.slice(0, 3).map(function (tg) {
      return '<span class="card-tag">' + esc(L(tg)) + "</span>";
    }).join("");
    return (
      '<article class="skill-card js-reveal" data-slug="' + s.slug + '" tabindex="0" role="link" aria-label="' + esc(L({ en: s.name, zh: s.nameZh })) + '">' +
        '<div class="card-media">' +
          videoTag(s.preview, "skill-video") +
          '<span class="card-index">' + String(i + 1).padStart(2, "0") + "</span>" +
          officialBadge(s) +
        "</div>" +
        '<div class="card-body">' +
          '<div class="card-cats">' + s.categories.map(catChip).join("") + "</div>" +
          '<h3 class="card-name">' + esc(L({ en: s.name, zh: s.nameZh })) + "</h3>" +
          '<p class="card-name-alt">' + esc(LAlt({ en: s.name, zh: s.nameZh })) + "</p>" +
          '<p class="card-summary">' + esc(L(s.summary)) + "</p>" +
          '<div class="card-foot"><div class="card-tags">' + tags + "</div>" +
          '<span class="card-go">' + (lang === "zh" ? "查看" : lang === "ko" ? "보기" : "OPEN") + ' <span aria-hidden="true">→</span></span></div>' +
        "</div>" +
      "</article>"
    );
  }

  function renderGrid() {
    var list = filteredSkills();
    var body;
    if (state.source === "community" && list.length === 0) {
      body = '<div class="empty-state"><p class="es-title">' + t("empty.community.title") + '</p><p class="es-sub">' + t("empty.community.sub") + "</p></div>";
    } else if (list.length === 0) {
      body = '<div class="empty-state"><p class="es-title">' + t("empty.search.title") + '</p><p class="es-sub">' + t("empty.search.sub") + "</p></div>";
    } else {
      body = '<div class="skill-grid">' + list.map(skillCard).join("") + "</div>";
    }
    $("#grid-container").innerHTML = body;
    $("#result-count").textContent = "— " + list.length + " " + t("filter.results");
    observeVideos($("#grid-container"));
    bindCards($("#grid-container"));
    revealGridCards();
  }

  function renderFilters() {
    var catChips = DATA.categories
      .filter(function (c) { return c.id !== "prompt"; })
      .map(function (c) {
        return (
          '<button type="button" class="chip' + (state.category === c.id ? " active" : "") + '" data-cat="' + c.id + '">' +
          '<span class="cdot" style="background:' + c.color + '"></span>' + esc(L(c)) + "</button>"
        );
      }).join("");
    return (
      '<div class="filter-bar">' +
        '<div class="search-row">' +
          '<div class="search-box">' +
            '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.8-3.8"/></svg>' +
            '<input class="search-input" id="search-input" type="search" value="' + esc(state.query) + '" placeholder="' + t("filter.search") + '" aria-label="' + t("filter.search") + '">' +
          "</div>" +
          '<span class="result-count" id="result-count"></span>' +
        "</div>" +
        '<div class="chip-row" role="group" aria-label="' + t("filter.source") + '">' +
          '<span class="chip-label">' + t("filter.source") + "</span>" +
          ['<button type="button" class="chip' + (state.source === "all" ? " active" : "") + '" data-source="all">' + t("filter.all") + "</button>",
           '<button type="button" class="chip' + (state.source === "official" ? " active" : "") + '" data-source="official">' + t("filter.official") + "</button>",
           '<button type="button" class="chip' + (state.source === "community" ? " active" : "") + '" data-source="community">' + t("filter.community") + "</button>"].join("") +
        "</div>" +
        '<div class="chip-row" role="group" aria-label="' + t("filter.category") + '">' +
          '<span class="chip-label">' + t("filter.category") + "</span>" +
          '<button type="button" class="chip' + (state.category === "all" ? " active" : "") + '" data-cat="all">' + t("filter.all") + "</button>" +
          catChips +
        "</div>" +
      "</div>"
    );
  }

  function computeHomeStats() {
    var modeSet = {}, nModes = 0, nVideos = 0;
    DATA.skills.forEach(function (s) {
      (s.modes || []).forEach(function (m) { if (!modeSet[m.id]) { modeSet[m.id] = 1; nModes++; } });
      if (s.preview && s.preview.video) nVideos++;
    });
    return { skills: DATA.skills.length, modes: nModes, videos: nVideos };
  }

  function refreshHomeStats(home) {
    var st = computeHomeStats();
    var vals = [st.skills, st.modes, st.videos];
    home.querySelectorAll(".hero-stats [data-count]").forEach(function (el, i) {
      if (i < vals.length) { el.dataset.count = String(vals[i]); el.textContent = "0"; }
    });
  }

  function renderHome() {
    var home = $("#view-home");
    var st = computeHomeStats();
    var heroStats = [
      { n: st.skills, label: t("hero.stat.skills") },
      { n: st.modes, label: t("hero.stat.modes") },
      { n: st.videos, label: t("hero.stat.demos") }
    ];
    var statsHtml = '<div class="hero-stats">' + heroStats.map(function (st) {
      return '<div class="stat"><div class="stat-num"><i data-count="' + st.n + '">0</i></div><div class="stat-label">' + st.label + "</div></div>";
    }).join("") + "</div>";
    home.innerHTML =
      '<section class="hero">' +
      '<div class="hero-bg" aria-hidden="true"><div class="hero-bg-frame">' +
        '<video class="hero-bg-video" muted loop playsinline preload="auto"></video>' +
        '<video class="hero-bg-video" muted loop playsinline preload="auto"></video>' +
      "</div></div>" +
      '<div class="wrap hero-inner">' +
        '<p class="hero-kicker"><span class="dot"></span>' + t("hero.kicker") + "</p>" +
        '<h1 class="hero-title">' +
          '<span class="line"><span>' + t("hero.title.a") + "</span></span>" +
          '<span class="line"><span>' + t("hero.title.b") + "</span></span>" +
        "</h1>" +
        "<p class=\"hero-sub\">" + t("hero.sub") + "</p>" +
        statsHtml +
        '<div class="hero-flow">' +
          '<span class="flow-step">01 <b>DISCOVER</b> · ' + t("hero.flow.discover") + "</span>" +
          '<span class="flow-arrow">→</span>' +
          '<span class="flow-step">02 <b>UNDERSTAND</b> · ' + t("hero.flow.understand") + "</span>" +
          '<span class="flow-arrow">→</span>' +
          '<span class="flow-step">03 <b>USE</b> · ' + t("hero.flow.use") + "</span>" +
        "</div>" +
      "</div>" + renderMarquee() + "</section>" +
      renderFoundation() +
      '<section class="section" id="skills"><div class="wrap">' +
        '<div class="section-head"><div>' +
          '<p class="section-label">' + t("grid.label") + "</p>" +
          '<h2 class="section-title">' + t("grid.title") + "</h2>" +
        "</div>" + '<span class="section-note">' + t("grid.note") + "</span></div>" +
        renderFilters() +
        '<div id="grid-container"></div>' +
      "</div></section>" +
      renderAnthEntry();

    bindHomeEvents(home);
    renderGrid();
    initHeroBg(home);
    animateHome(home);
  }

  /* ---- Home: prompt gallery entry banner ---- */

  function renderAnthEntry() {
    var total = 0, groups = 0;
    if (window.AMHS_ANTHOLOGY) {
      groups = window.AMHS_ANTHOLOGY.groups.length;
      total = window.AMHS_ANTHOLOGY.groups.reduce(function (a, g) { return a + g.items.length; }, 0);
    }
    return (
      '<section class="section anth-entry" id="anth-entry"><div class="wrap">' +
        '<div class="section-head"><div>' +
          '<p class="section-label">' + t("home.anth.label") + "</p>" +
        "</div>" + '<span class="section-note">' + t("home.anth.note") + "</span></div>" +
        '<a class="anth-banner js-reveal" href="/anthology">' +
          '<div class="anth-banner-glow" aria-hidden="true"></div>' +
          '<div class="anth-banner-body">' +
            '<p class="anth-banner-kicker"><span class="dot"></span>' + t("home.anth.kicker") + "</p>" +
            '<h3 class="anth-banner-title">' + t("home.anth.bigtitle") + "</h3>" +
            '<p class="anth-banner-sub">' + t("home.anth.sub") + "</p>" +
            '<div class="anth-banner-meta">' +
              '<span><b>' + total + '</b> PROMPTS</span>' +
              '<span><b>' + groups + '</b> GROUPS</span>' +
              '<span><b>1</b> CLICK COPY</span>' +
            "</div>" +
          "</div>" +
          '<div class="anth-banner-cta">' +
            '<span class="btn btn-primary">' + t("home.anth.cta") + ' <span aria-hidden="true">→</span></span>' +
          "</div>" +
        "</a>" +
        (groups
          ? '<div class="anth-banner-chips js-reveal">' +
              window.AMHS_ANTHOLOGY.groups.map(function (g, i) {
                return '<a class="anth-index-chip" data-anchor="anth-' + g.id + '" href="/anthology">' +
                  '<span class="anth-index-num">' + String(i + 1).padStart(2, "0") + "</span>" +
                  "<span>" + esc(L(g.title)) + "</span></a>";
              }).join("") +
            "</div>"
          : "") +
      "</div></section>"
    );
  }

  /* ---- Hero background: random official demo reels ---- */

  var heroBgTimer = null;
  var heroBgIO = null;

  function initHeroBg(home) {
    if (heroBgTimer) { clearInterval(heroBgTimer); heroBgTimer = null; }
    if (heroBgIO) { heroBgIO.disconnect(); heroBgIO = null; }
    var frame = $(".hero-bg-frame", home);
    if (!frame) return;

    // shuffled playlist of the official demo reels
    var pool = videoSkills().map(function (s) { return s.preview; });
    for (var i = pool.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = pool[i]; pool[i] = pool[j]; pool[j] = tmp;
    }

    // reduced motion: one static poster, no rotation
    if (REDUCED || !HAS_GSAP) {
      var img = document.createElement("img");
      img.src = pool[0].poster;
      img.alt = "";
      img.style.opacity = "1";
      frame.appendChild(img);
      return;
    }

    var vids = Array.prototype.slice.call(frame.querySelectorAll(".hero-bg-video"));
    var idx = 0, front = 0, playing = true;

    function loadInto(v, p) { v.dataset.for = p.video; v.poster = p.poster; v.src = p.video; v.load(); }
    function play(v) { var p = v.play(); if (p && p.catch) p.catch(function () {}); }
    function kenBurns(v) {
      gsap.fromTo(v, { scale: 1.03 }, { scale: 1.11, duration: 9, ease: "none", overwrite: "auto" });
    }

    loadInto(vids[0], pool[0]);
    loadInto(vids[1], pool[1 % pool.length]);
    gsap.set(vids[0], { opacity: 1 });
    play(vids[0]);
    kenBurns(vids[0]);

    function next() {
      if (!playing) return;
      idx = (idx + 1) % pool.length;
      var backIdx = 1 - front;
      var backEl = vids[backIdx];
      var cur = pool[idx];
      if (backEl.dataset.for !== cur.video) loadInto(backEl, cur);
      play(backEl);
      kenBurns(backEl);
      gsap.to(backEl, { opacity: 1, duration: 1.15, ease: "power2.inOut" });
      gsap.to(vids[front], { opacity: 0, duration: 1.15, ease: "power2.inOut" });
      front = backIdx;
      // once the crossfade finished, preload the upcoming reel into the hidden layer
      setTimeout(function () {
        var hiddenEl = vids[1 - front];
        hiddenEl.pause();
        loadInto(hiddenEl, pool[(idx + 1) % pool.length]);
      }, 1400);
    }

    vids.forEach(function (v) { v.addEventListener("error", next); });
    heroBgTimer = setInterval(next, 6200);

    heroBgIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        playing = en.isIntersecting;
        vids.forEach(function (v) { playing ? play(v) : v.pause(); });
      });
    }, { threshold: 0.02 });
    heroBgIO.observe($(".hero", home));

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) { vids.forEach(function (v) { v.pause(); }); }
      else if (playing) { vids.forEach(function (v) { if (parseFloat(v.style.opacity || "0") > 0.05 || v === vids[front]) play(v); }); }
    });
  }

  function bindCards(root) {
    Array.prototype.forEach.call(root.querySelectorAll(".skill-card"), function (card) {
      function go() {
        history.pushState(null, "", "/skill/" + card.dataset.slug + (location.search || ""));
        route();
      }
      card.addEventListener("click", go);
      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); }
      });
      if (HAS_GSAP && !REDUCED) {
        card.addEventListener("mouseenter", function () {
          gsap.to(card, { y: -6, duration: 0.35, ease: "power3.out" });
        });
        card.addEventListener("mouseleave", function () {
          gsap.to(card, { y: 0, duration: 0.45, ease: "power3.out" });
        });
      }
    });
  }

  function bindHomeEvents(home) {
    var search = $("#search-input", home);
    var debounce;
    search.addEventListener("input", function () {
      clearTimeout(debounce);
      debounce = setTimeout(function () {
        state.query = search.value;
        renderGrid();
      }, 140);
    });
    Array.prototype.forEach.call(home.querySelectorAll("[data-source]"), function (btn) {
      btn.addEventListener("click", function () {
        state.source = btn.dataset.source;
        home.querySelectorAll("[data-source]").forEach(function (b) { b.classList.toggle("active", b === btn); });
        renderGrid();
      });
    });
    Array.prototype.forEach.call(home.querySelectorAll("[data-cat]"), function (btn) {
      btn.addEventListener("click", function () {
        state.category = btn.dataset.cat;
        home.querySelectorAll("[data-cat]").forEach(function (b) { b.classList.toggle("active", b === btn); });
        renderGrid();
      });
    });
    Array.prototype.forEach.call(home.querySelectorAll(".anth-banner-chips a"), function (chip) {
      chip.addEventListener("click", function (ev) {
        if (!ev.metaKey && !ev.ctrlKey && !ev.shiftKey && !ev.altKey) {
          ev.preventDefault();
          history.pushState(null, "", "/anthology" + (location.search || ""));
          route();
          setTimeout(function () {
            var target = document.getElementById(chip.dataset.anchor);
            if (target) target.scrollIntoView({ behavior: REDUCED ? "auto" : "smooth", block: "start" });
          }, 80);
        }
      });
    });
  }

  /* ============================ DETAIL ============================ */

  function detailSection(idx, titleKey, inner) {
    return (
      '<section class="detail-section">' +
        '<div class="detail-section-head">' +
          '<span class="detail-section-idx">' + String(idx).padStart(2, "0") + "</span>" +
          '<h2 class="detail-section-title">' + t(titleKey) + '</h2>' +
          '<span class="detail-section-line"></span>' +
        "</div>" + inner +
      "</section>"
    );
  }

  function specCards(items, glyph) {
    return '<div class="spec-grid">' + items.map(function (it, i) {
      return (
        '<div class="spec-card js-reveal"><span class="spec-ico">' + (glyph || (i + 1)) + "</span><span>" + esc(L(it)) + "</span></div>"
      );
    }).join("") + "</div>";
  }

  function workflowSteps(steps) {
    return '<div class="workflow">' + steps.map(function (st, i) {
      return (
        '<div class="wf-step js-reveal">' +
          '<span class="wf-idx">STEP ' + String(i + 1).padStart(2, "0") + "</span>" +
          '<h3 class="wf-title">' + esc(L(st.title)) + "</h3>" +
          '<p class="wf-desc">' + esc(L(st.desc)) + "</p>" +
        "</div>"
      );
    }).join("") + "</div>";
  }

  function sourceLinks(s) {
    var links = [];
    if (s.sourceType === "community") {
      links.push({ label: t("detail.communityRepo") + " — gordonlu/awesome-minimax-h3-skills", url: s.sources.skillDir });
    } else {
      links.push({ label: t("detail.sourceRepo") + " — MiniMax-AI/MiniMax-H3", url: s.sources.skillDir });
    }
    if (s.sources.skillCnMd) links.push({ label: "SKILL.cn.md（中文版）", url: s.sources.skillCnMd });
    (s.sources.docs || []).forEach(function (d) { links.push({ label: L(d.label), url: d.url }); });
    if (s.preview) links.push({ label: t("detail.previewSource") + " — " + s.slug + ".gif", url: s.preview.sourceUrl });
    return '<div class="source-list">' + links.map(function (l) {
      return (
        '<a class="source-link" href="' + esc(l.url) + '" target="_blank" rel="noopener noreferrer">' +
          '<span class="sl-ico">↗</span><span class="sl-label">' + esc(l.label) + '</span>' +
          '<span class="sl-ext">GITHUB</span>' +
        "</a>"
      );
    }).join("") + "</div>";
  }

  function attributionBlock(s) {
    var a = s.attribution;
    if (!a) return "";
    var license = a.license || "Not specified";
    var previewVal;
    if (s.preview) {
      previewVal = '<span class="tp-val">' + esc(t("detail.tp.previewCollected")) + "</span>";
    } else {
      previewVal = '<a class="tp-link" href="' + esc(a.originalPost) + '" target="_blank" rel="noopener noreferrer">' + esc(t("detail.tp.previewOriginal")) + " ↗</a>";
    }
    return '<div class="tp-grid">' +
      '<div class="tp-row"><span class="tp-label">' + esc(t("detail.tp.author")) + '</span><span class="tp-val">' + esc(a.author) + "</span></div>" +
      '<div class="tp-row"><span class="tp-label">' + esc(t("detail.tp.source")) + '</span><span class="tp-val">' + esc(a.source) + "</span></div>" +
      '<div class="tp-row"><span class="tp-label">' + esc(t("detail.tp.post")) + '</span><a class="tp-link" href="' + esc(a.originalPost) + '" target="_blank" rel="noopener noreferrer">' + esc(a.originalPost) + " ↗</a></div>" +
      '<div class="tp-row"><span class="tp-label">License</span><span class="tp-val">' + esc(license) + "</span></div>" +
      '<div class="tp-row"><span class="tp-label">' + esc(t("detail.tp.prompt")) + '</span><span class="tp-val">' + esc(t("detail.tp.promptCollected")) + "</span></div>" +
      '<div class="tp-row"><span class="tp-label">' + esc(t("detail.tp.preview")) + "</span>" + previewVal + "</div>" +
    "</div>";
  }

  function renderDetail(slug) {
    var s = DATA.skills.filter(function (x) { return x.slug === slug; })[0];
    var view = $("#view-detail");
    if (!s) { history.pushState(null, "", "/" + (location.search || "")); route(); return; }

    var idx = DATA.skills.indexOf(s);
    var prev = DATA.skills[idx - 1];
    var next = DATA.skills[idx + 1];

    var meta = [];
    if (s.version) meta.push('<span class="meta-chip">' + t("version") + " <b>v" + esc(s.version) + "</b></span>");
    var authorHtml = esc(L(s.author));
    if (s.authorUrl) authorHtml = '<a href="' + esc(s.authorUrl) + '" target="_blank" rel="noopener noreferrer" class="author-link">' + authorHtml + " ↗</a>";
    meta.push('<span class="meta-chip">' + t("author") + " <b>" + authorHtml + "</b></span>");
    var langText = s.languages.indexOf("ko") !== -1 ? "KO + EN" : s.languages.indexOf("zh") !== -1 ? "EN + 中文" : "EN";
    meta.push('<span class="meta-chip">' + t("languages") + " <b>" + langText + "</b></span>");
    s.categories.forEach(function (id) {
      var c = CATS[id];
      meta.push('<span class="meta-chip"><span class="cdot" style="display:inline-block;width:6px;height:6px;border-radius:50%;background:' + c.color + '"></span><b>' + esc(L(c)) + "</b></span>");
    });

    var mediaBlock;
    if (s.preview) {
      mediaBlock =
        '<div class="detail-media">' +
          videoTag(s.preview, "detail-video") +
          '<div class="detail-media-cap"><span>' + esc(L(s.preview.caption)) + '</span><a href="' + esc(s.preview.sourceUrl) + '" target="_blank" rel="noopener noreferrer">SOURCE ↗</a></div>' +
        "</div>";
    } else {
      mediaBlock =
        '<div class="detail-media" style="padding:22px">' +
          '<p class="structure-title">' + t("fd.structure") + "</p>" +
          s.promptStructures.map(function (g) {
            return '<div class="structure-group"><div class="structure-group-label" style="font-family:var(--font-mono);font-size:10px;color:var(--muted);letter-spacing:.1em;margin-bottom:8px">' + esc(L(g.label)) + "</div>" +
              g.fields.map(function (f, i) {
                return '<div class="structure-field"><span class="f-idx">' + (i + 1) + '</span><span class="f-name">' + esc(f) + '</span><span class="f-line"></span></div>';
              }).join("") + "</div>";
          }).join("") +
        "</div>";
    }

    var sections = "";
    var n = 1;

    if (s.modes) {
      sections += detailSection(n++, "detail.modes",
        '<div class="modes-grid">' + s.modes.map(function (m) {
          return '<div class="mode-card js-reveal"><div class="mc-id">' + esc(m.id) + '</div><div class="mc-desc">' + esc(L(m)) + "</div></div>";
        }).join("") + "</div>");
    }

    sections += detailSection(n++, "detail.youProvide", specCards(s.inputs, "+"));
    sections += detailSection(n++, "detail.whatItDoes", specCards(s.capabilities, "→"));
    sections += detailSection(n++, "detail.workflow", workflowSteps(s.workflow));
    sections += detailSection(n++, "detail.outputs", specCards(s.outputs, "◆"));

    var fitInner = '<div class="fit-grid">' +
      '<div class="fit-card fit-yes js-reveal"><div class="fit-head">◍ ' + t("detail.bestFor") + '</div><ul class="fit-list">' +
        s.bestFor.map(function (b) { return "<li>" + esc(L(b)) + "</li>"; }).join("") + "</ul></div>" +
      (s.notFor.length
        ? '<div class="fit-card fit-no js-reveal"><div class="fit-head">◍ ' + t("detail.notFor") + '</div><ul class="fit-list">' +
          s.notFor.map(function (b) { return "<li>" + esc(L(b)) + "</li>"; }).join("") + "</ul></div>"
        : "") +
      "</div>";
    sections += detailSection(n++, "detail.bestFor", fitInner);

    sections += detailSection(n++, "detail.install",
      '<p style="color:var(--faint);font-size:13px;margin-bottom:14px;max-width:64ch">' + t("detail.install.hint") + "</p>" +
      '<div class="install-block"><span class="prompt-sign">$</span><code>' + esc(s.install.command) + "</code>" +
      '<button type="button" class="copy-btn" data-copy="' + esc(s.install.command) + '">' +
        '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>' +
        "<span>" + t("detail.copy") + "</span></button></div>");

    if (s.modes && s.modes.length) {
      sections += detailSection(n++, "detail.modes",
        '<div class="mode-badges">' + s.modes.map(function (m) {
          return '<span class="mode-badge">' + esc(m.id) + "</span>";
        }).join("") + "</div>");
    }

    var related = DATA.skills.filter(function (x) {
      return x.slug !== s.slug && x.categories.some(function (c) { return s.categories.indexOf(c) !== -1; });
    }).slice(0, 3);
    if (related.length) {
      sections += detailSection(n++, "detail.related",
        '<div class="related-grid">' + related.map(function (r) {
          return (
            '<a class="related-card" href="/skill/' + r.slug + '">' +
              '<span class="related-name">' + esc(L({ en: r.name, zh: r.nameZh })) + "</span>" +
              '<span class="related-sum">' + esc(stripHtml(L(r.summary))) + "</span>" +
            "</a>"
          );
        }).join("") + "</div>");
    }

    sections += detailSection(n++, s.sourceType === "community" ? "detail.sourcesCommunity" : "detail.sources", sourceLinks(s));

    if (s.attribution) {
      sections += detailSection(n++, "detail.tp.title", attributionBlock(s));
    }

    var langNote = (lang === "zh" && s.languageNote) ? '<p class="detail-desc-alt">' + esc(L(s.languageNote)) + "</p>" : "";

    view.innerHTML =
      '<div class="wrap detail-hero">' +
        '<a class="detail-back" href="/">← ' + t("detail.back") + "</a>" +
        '<div class="detail-top">' +
          "<div>" +
            '<p class="detail-kicker">' + s.categories.map(function (id) { return esc(L(CATS[id])).toUpperCase(); }).join(" · ") + "</p>" +
            '<h1 class="detail-name">' + esc(L({ en: s.name, zh: s.nameZh })) + "</h1>" +
            '<p class="detail-name-alt">' + esc(LAlt({ en: s.name, zh: s.nameZh })) + " · " + esc(s.slug) + "</p>" +
            '<div class="detail-attribution">' +
              (s.sourceType === "community"
                ? '<span class="oa">Community Skill</span>'
                : '<span class="oa">Official MiniMax H3 Skill</span>') +
              '<span>' + t("detail.attribution") + '</span><a href="' + esc(s.sources.skillDir) + '" target="_blank" rel="noopener noreferrer">' +
              (s.sourceType === "community" ? "gordonlu/awesome-minimax-h3-skills" : "MiniMax-AI/MiniMax-H3") +
              '</a></div>' +
            '<div class="detail-meta">' + meta.join("") + "</div>" +
            '<p class="detail-desc">' + esc(L(s.description)) + "</p>" +
            '<p class="detail-desc-alt">' + esc(LAlt(s.description)) + "</p>" + langNote +
            '<div class="detail-actions">' +
              '<a class="btn btn-primary" href="' + esc(s.sources.skillMd) + '" target="_blank" rel="noopener noreferrer">SKILL.md ↗</a>' +
              '<a class="btn" href="' + esc(s.sources.skillDir) + '" target="_blank" rel="noopener noreferrer">' + t(s.sourceType === "community" ? "detail.communityRepo" : "detail.sourceRepo") + " ↗</a>" +
            "</div>" +
          "</div>" +
          mediaBlock +
        "</div>" +
        sections +
        '<nav class="detail-nav" aria-label="More skills">' +
          (prev
? '<a href="/skill/' + prev.slug + '"><span class="dn-dir">← ' + t("detail.prev") + '</span><span class="dn-name">' + esc(L({ en: prev.name, zh: prev.nameZh })) + "</span></a>"
            : '<span class="dn-name dn-name--empty"></span>') +
          (next
            ? '<a class="next" href="/skill/' + next.slug + '"><span class="dn-dir">' + t("detail.next") + ' →</span><span class="dn-name">' + esc(L({ en: next.name, zh: next.nameZh })) + "</span></a>"
            : '<a class="next disabled"><span class="dn-dir">' + t("detail.next") + '</span><span class="dn-name">—</span></a>') +
        "</nav>" +
      "</div>";

    Array.prototype.forEach.call(view.querySelectorAll(".copy-btn"), function (btn) {
      btn.addEventListener("click", function () { copyText(btn.dataset.copy, btn); });
    });
    observeVideos(view);
    animateDetail(view);
    var skillName = L({ en: s.name, zh: s.nameZh });
    document.title = lang === "zh"
      ? skillName + " – MiniMax H3 技能 | H3 Skills"
      : skillName + " – MiniMax H3 Skill | H3 Skills";
    setCanonical("/skill/" + s.slug);
    setMetaDescription(stripHtml(L(s.summary)) + " — MiniMax H3 Skill, install and workflow.");
    setJsonLd("ld-breadcrumb", {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "H3 Skills", item: "https://h3skills.com/" },
        { "@type": "ListItem", position: 2, name: skillName, item: "https://h3skills.com/skill/" + s.slug }
      ]
    });
  }

  /* ============================ ANIMATION ============================ */

  function animateHome(home) {
    if (!HAS_GSAP || REDUCED) {
      home.querySelectorAll(".js-reveal").forEach(function (el) { el.classList.add("revealed"); });
      home.querySelectorAll("[data-count]").forEach(function (el) { el.textContent = el.dataset.count; });
      return;
    }
    if (viewCtx) viewCtx.revert();
    viewCtx = gsap.context(function () {
      var tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-kicker", { y: 18, opacity: 0, duration: 0.7 })
        .from(".hero-title .line > span", { yPercent: 110, duration: 0.9, stagger: 0.12 }, "-=0.35")
        .from(".hero-sub", { y: 22, opacity: 0, duration: 0.7 }, "-=0.45")
        .from(".hero-stats .stat", { y: 24, opacity: 0, duration: 0.6, stagger: 0.09 }, "-=0.4")
        .from(".hero-flow .flow-step, .hero-flow .flow-arrow", { y: 14, opacity: 0, duration: 0.5, stagger: 0.07 }, "-=0.35")
        .from(".marquee", { opacity: 0, duration: 0.8 }, "-=0.3")
        .from(".hero-bg-frame", { opacity: 0, duration: 1.6, ease: "power2.out" }, 0.5);

      home.querySelectorAll("[data-count]").forEach(function (el) {
        var target = parseInt(el.dataset.count, 10);
        gsap.fromTo(el, { textContent: 0 }, {
          textContent: target, duration: 1.4, delay: 0.5, ease: "power2.out",
          snap: { textContent: 1 },
        });
      });

      gsap.utils.toArray(".section-head, .foundation-card, .anth-banner, .anth-banner-chips").forEach(function (el) {
        el.classList.add("revealed");
        gsap.set(el, { clearProps: "opacity" });
        gsap.from(el, {
          y: 42, opacity: 0, duration: 0.85, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });
    }, home);
  }

  function revealGridCards() {
    var cards = document.querySelectorAll("#grid-container .js-reveal");
    if (!HAS_GSAP || REDUCED) {
      cards.forEach(function (el) { el.classList.add("revealed"); });
      return;
    }
    cards.forEach(function (el) { el.classList.add("revealed"); gsap.set(el, { clearProps: "opacity" }); });
    gsap.from(cards, {
      y: 36, opacity: 0, duration: 0.7, ease: "power3.out", stagger: 0.06,
      scrollTrigger: { trigger: "#grid-container", start: "top 92%" },
      overwrite: "auto",
    });
  }

  function animateDetail(view) {
    if (!HAS_GSAP || REDUCED) {
      view.querySelectorAll(".js-reveal").forEach(function (el) { el.classList.add("revealed"); });
      return;
    }
    if (viewCtx) viewCtx.revert();
    viewCtx = gsap.context(function () {
      var tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".detail-back", { x: -16, opacity: 0, duration: 0.5 })
        .from(".detail-kicker", { y: 14, opacity: 0, duration: 0.5 }, "-=0.25")
        .from(".detail-name", { y: 34, opacity: 0, duration: 0.8 }, "-=0.3")
        .from(".detail-name-alt, .detail-attribution, .detail-meta, .detail-desc, .detail-desc-alt, .detail-actions", { y: 20, opacity: 0, duration: 0.6, stagger: 0.06 }, "-=0.5")
        .from(".detail-media", { y: 30, opacity: 0, scale: 0.985, duration: 0.8 }, "-=0.7");

      gsap.utils.toArray(".detail-section-head, .detail-nav").forEach(function (el) {
        gsap.from(el, {
          y: 28, opacity: 0, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 90%" },
        });
      });
      gsap.utils.toArray("#view-detail .js-reveal").forEach(function (el) {
        el.classList.add("revealed");
        gsap.from(el, {
          y: 26, opacity: 0, duration: 0.65, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 92%" },
        });
      });
    }, view);
  }

  /* ============================ ANTHOLOGY ============================ */

  function anthItemCard(it, i) {
    var modes = (it.modes || []).map(function (m) {
      return '<span class="anth-mode">' + esc(m) + "</span>";
    }).join("");
    var copyIcon = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>';
    return (
      '<article class="anth-card js-anth">' +
        (it.img
          ? '<div class="anth-media">' +
              '<img loading="lazy" decoding="async" src="data/anthology-images/' + esc(it.img) + '" alt="' + esc(L(it.title)) + '">' +
              '<span class="anth-media-zoom" aria-hidden="true">+</span>' +
            "</div>"
          : "") +
        '<div class="anth-card-head">' +
          '<h3 class="anth-card-title">' + esc(L(it.title)) + "</h3>" +
          (modes ? '<div class="anth-modes">' + modes + "</div>" : "") +
        "</div>" +
        '<p class="anth-refs"><span class="anth-refs-label">' + t("anth.refs") + "</span>" + esc(it.refs) + "</p>" +
        '<div class="anth-prompt">' +
          '<div class="anth-prompt-bar">' +
            '<span class="anth-prompt-label">PROMPT</span>' +
            '<button type="button" class="copy-btn anth-copy" data-copy="' + esc(it.prompt) + '">' + copyIcon + "<span>" + t("anth.copy") + "</span></button>" +
          "</div>" +
          "<pre><code>" + esc(it.prompt) + "</code></pre>" +
        "</div>" +
      "</article>"
    );
  }

  function renderAnthology() {
    var view = $("#view-anthology");
    var G = window.AMHS_ANTHOLOGY.groups;
    var total = G.reduce(function (a, g) { return a + g.items.length; }, 0);

    var hero =
      '<section class="anth-hero">' +
        '<div class="hero-bg anth-hero-bg" aria-hidden="true"><div class="hero-bg-frame">' +
          '<img alt="" data-role="hero-a">' +
          '<img alt="" data-role="hero-b">' +
        "</div></div>" +
        '<div class="wrap anth-hero-inner">' +
          '<p class="hero-kicker"><span class="dot"></span>' + t("anth.kicker") + "</p>" +
          '<h1 class="hero-title">' +
            '<span class="line"><span>' + t("anth.title") + "</span></span>" +
          "</h1>" +
          '<p class="hero-sub">' + t("anth.intro") + "</p>" +
          '<div class="hero-stats">' +
            '<div class="stat"><div class="stat-num"><b data-count="' + total + '">0</b></div><div class="stat-label">EXAMPLES</div></div>' +
            '<div class="stat"><div class="stat-num"><b data-count="' + G.length + '">0</b></div><div class="stat-label">GROUPS</div></div>' +
            '<div class="stat"><div class="stat-num"><b data-count="1">0</b></div><div class="stat-label">CLICK COPY</div></div>' +
          "</div>" +
          '<div class="anth-hero-chips">' +
            G.map(function (g, gi) {
              return '<a class="anth-index-chip" href="#anth-' + g.id + '">' +
                '<span class="anth-index-num">' + String(gi + 1).padStart(2, "0") + "</span>" +
                "<span>" + esc(L(g.title)) + "</span></a>";
            }).join("") +
          "</div>" +
        "</div>" +
      "</section>";

    var index =
      '<nav class="anth-index" aria-label="Groups">' +
        '<div class="wrap anth-index-inner">' +
          G.map(function (g, gi) {
            return '<a class="anth-index-chip" href="#anth-' + g.id + '">' +
              '<span class="anth-index-num">' + String(gi + 1).padStart(2, "0") + "</span>" +
              '<span>' + esc(L(g.title)) + "</span></a>";
          }).join("") +
        "</div>" +
      "</nav>";

    var sections = G.map(function (g, gi) {
      return (
        '<section class="anth-group" id="anth-' + g.id + '">' +
          '<div class="wrap">' +
            '<div class="anth-group-head js-anth">' +
              '<span class="anth-group-idx">' + String(gi + 1).padStart(2, "0") + "</span>" +
              '<h2 class="anth-group-title">' + esc(L(g.title)) + "</h2>" +
              '<span class="anth-group-count">' + g.items.length + " PROMPTS</span>" +
            "</div>" +
            '<div class="anth-grid">' + g.items.map(anthItemCard).join("") + "</div>" +
          "</div>" +
        "</section>"
      );
    }).join("");

    view.innerHTML =
      hero + index + sections +
      '<footer class="anth-note wrap">' +
        "<span>" + t("anth.note") + "</span>" +
        '<p class="anth-disclaimer">' + t("anth.disclaimer") + "</p>" +
      "</footer>";

    Array.prototype.forEach.call(view.querySelectorAll(".copy-btn"), function (btn) {
      btn.addEventListener("click", function () { copyText(btn.dataset.copy, btn); });
    });

    observeVideos(view);

    Array.prototype.forEach.call(view.querySelectorAll(".anth-media"), function (media) {
      media.addEventListener("click", function () {
        openLightbox(media.querySelector("img").getAttribute("src"), media.querySelector("img").getAttribute("alt"));
      });
    });

    Array.prototype.forEach.call(view.querySelectorAll(".anth-index-chip"), function (chip) {
      chip.addEventListener("click", function (ev) {
        ev.preventDefault();
        var target = $(chip.getAttribute("href"));
        if (target) target.scrollIntoView({ behavior: REDUCED ? "auto" : "smooth", block: "start" });
      });
    });

    document.title = (lang === "zh" ? "官方提示词合辑 — " : lang === "ko" ? "프롬프트 갤러리 — " : "Prompt Gallery — ") + "Awesome MiniMax H3 Skills";
  }

  /* ---- Anthology hero: random landscape reference images, masked left ---- */

  var anthHeroBgTimer = null;

  function initAnthHeroBg(view) {
    if (anthHeroBgTimer) { clearInterval(anthHeroBgTimer); anthHeroBgTimer = null; }
    var frame = view.querySelector(".anth-hero-bg .hero-bg-frame");
    if (!frame || !window.AMHS_ANTHOLOGY) return;
    var imgs = frame.querySelectorAll("img");
    if (!imgs.length) return;

    var base = "data/anthology-images/";
    var pool = [];
    window.AMHS_ANTHOLOGY.groups.forEach(function (g) {
      g.items.forEach(function (it) { if (it.img) pool.push(it.img); });
    });

    var remaining = pool.length;
    var landscape = [];

    pool.forEach(function (name) {
      var probe = new Image();
      probe.onload = function () {
        remaining--;
        if (probe.naturalWidth >= probe.naturalHeight) landscape.push(name);
        if (remaining === 0) start(landscape);
      };
      probe.src = base + name;
    });

    function start(list) {
      if (!list.length) return;
      for (var k = list.length - 1; k > 0; k--) {
        var j = Math.floor(Math.random() * (k + 1));
        var t = list[k]; list[k] = list[j]; list[j] = t;
      }
      if (REDUCED) {
        imgs[0].src = base + list[0];
        imgs[0].style.opacity = "1";
        return;
      }
      var a = imgs[0], b = imgs[1], idx = 1;
      a.src = base + list[0];
      a.style.opacity = "1";
      anthHeroBgTimer = setInterval(function () {
        b.src = base + list[idx % list.length];
        b.style.opacity = "1";
        a.style.opacity = "0";
        var t = a; a = b; b = t;
        idx++;
      }, 3600);
    }
  }

  function animateAnthology(view) {
    if (!HAS_GSAP || REDUCED) {
      view.querySelectorAll("[data-count]").forEach(function (el) { el.textContent = el.dataset.count; });
      view.querySelectorAll(".js-anth").forEach(function (el) { el.classList.add("revealed"); });
      return;
    }
    if (viewCtx) viewCtx.revert();
    viewCtx = gsap.context(function () {
      gsap.timeline({ defaults: { ease: "power3.out" } })
        .from(".anth-hero .hero-kicker", { y: 18, opacity: 0, duration: 0.5 }, 0.15)
        .from(".anth-hero .hero-title .line > span", { yPercent: 110, duration: 0.9 }, 0.25)
        .from(".anth-hero .hero-sub", { y: 16, opacity: 0, duration: 0.6 }, 0.55)
        .from(".anth-hero .stat", { y: 18, opacity: 0, duration: 0.5, stagger: 0.08 }, 0.7)
        .from(".anth-hero-chips", { y: 14, opacity: 0, duration: 0.5 }, 0.85)
        .from(".anth-index-inner", { y: -10, opacity: 0, duration: 0.45 }, 0.95);

      gsap.utils.toArray(".anth-index-inner .anth-index-chip").forEach(function (chip, i) {
        gsap.from(chip, {
          y: 8, opacity: 0, duration: 0.3, delay: 1.0 + i * 0.03, ease: "power2.out",
        });
      });

      gsap.utils.toArray(".anth-group").forEach(function (group) {
        gsap.from(group.querySelector(".anth-group-head"), {
          y: 24, opacity: 0, duration: 0.6, ease: "power3.out",
          scrollTrigger: { trigger: group, start: "top 82%" },
        });
        gsap.utils.toArray(group.querySelectorAll(".anth-card")).forEach(function (card, i) {
          gsap.from(card, {
            y: 30, opacity: 0, duration: 0.6, ease: "power3.out", delay: (i % 2) * 0.08,
            scrollTrigger: { trigger: card, start: "top 88%" },
          });
        });
      });

      view.querySelectorAll("[data-count]").forEach(function (el) {
        var target = parseInt(el.dataset.count, 10);
        gsap.fromTo(el, { textContent: 0 }, {
          textContent: target, duration: 1.4, delay: 0.6, ease: "power2.out",
          snap: { textContent: 1 },
        });
      });
    }, view);
  }

  /* ============================ ROUTER ============================ */

  var ANCHORS = { "#skills": 1, "#foundation": 1, "#about": 1 };

  function setCanonical(path) {
    var link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = "https://h3skills.com" + path;
  }

  function setMetaDescription(content) {
    var m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.name = "description";
      document.head.appendChild(m);
    }
    m.content = content;
  }

  function setJsonLd(id, obj) {
    var el = document.getElementById(id);
    if (!el) {
      el = document.createElement("script");
      el.type = "application/ld+json";
      el.id = id;
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(obj);
  }

  function stripHtml(s) {
    return s.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
  }

  function show404() {
    $("#view-home").hidden = true;
    $("#view-detail").hidden = true;
    $("#view-anthology").hidden = true;
    document.title = "404 — H3 Skills";
    var wrap = $("#not-found");
    if (!wrap) {
      wrap = document.createElement("main");
      wrap.id = "not-found";
      document.body.appendChild(wrap);
    }
    wrap.hidden = false;
    wrap.innerHTML =
      '<div class="wrap not-found">' +
        "<h1>404</h1>" +
        "<p>" + (lang === "zh" ? "页面不存在或已被移动。" : "Page not found or moved.") + "</p>" +
        '<a class="btn" href="/">' + (lang === "zh" ? "回到首页" : "Back to home") + "</a>" +
      "</div>";
  }

  function showHome(anchor) {
    $("#view-detail").hidden = true;
    $("#view-anthology").hidden = true;
    $("#view-home").hidden = false;
    document.title = lang === "zh"
      ? "Awesome MiniMax H3 Skills — 官方 Skill 可视化发现"
      : lang === "ko"
        ? "Awesome MiniMax H3 Skills — 비주얼 디스커버리 인덱스"
        : "Awesome MiniMax H3 Skills — Visual Discovery Index";
    setCanonical("/");
    var home = $("#view-home");
    if (!home.innerHTML || lang !== "zh") {
      home.innerHTML = "";
      renderHome();
      homeBound = true;
    }
    else {
      refreshHomeStats(home);
      if (!homeBound) {
        homeBound = true;
        bindHomeEvents(home);
        renderGrid();
        initHeroBg(home);
      }
      if (viewCtx) { viewCtx.revert(); viewCtx = null; }
      animateHome(home);
    }
    if (anchor && $(anchor)) {
      requestAnimationFrame(function () { $(anchor).scrollIntoView({ behavior: REDUCED ? "auto" : "smooth" }); });
    } else {
      window.scrollTo(0, 0);
    }
  }

  function openLightbox(src, alt) {
    var old = document.querySelector(".lightbox");
    if (old) old.remove();
    var lb = document.createElement("div");
    lb.className = "lightbox";
    lb.innerHTML = '<img src="' + esc(src) + '" alt="' + esc(alt) + '">';
    lb.addEventListener("click", function () { lb.remove(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") lb.remove(); }, { once: true });
    document.body.appendChild(lb);
  }

  function showAnthology() {
    $("#view-home").hidden = true;
    $("#view-detail").hidden = true;
    var a = $("#view-anthology");
    a.hidden = false;
    window.scrollTo(0, 0);
    setCanonical("/anthology");
    setMetaDescription(lang === "zh"
      ? "MiniMax H3 官方提示词合辑 — 49 个可直接复制的示例 Prompt。"
      : "MiniMax H3 official prompt gallery — 49 copy-ready example prompts.");
    renderAnthology();
    initAnthHeroBg(a);
    animateAnthology(a);
  }

  function route() {
    refreshHomeStats($("#view-home"));
    var oldHash = location.hash;
    if (oldHash === "#/anthology") {
      history.replaceState(null, "", "/anthology" + (location.search || ""));
      showAnthology();
      return;
    }
    var om = oldHash.match(/^#\/skill\/([a-z0-9-]+)$/);
    if (om) {
      history.replaceState(null, "", "/skill/" + om[1] + (location.search || ""));
      $("#view-home").hidden = true;
      $("#view-anthology").hidden = true;
      var d = $("#view-detail");
      d.hidden = false;
      window.scrollTo(0, 0);
      renderDetail(om[1]);
      return;
    }
    var p = (location.pathname || "/").replace(/\/+$/, "") || "/";
    if (p === "/anthology") { showAnthology(); return; }
    var m = p.match(/^\/skill\/([a-z0-9-]+)$/);
    if (m) {
      $("#view-home").hidden = true;
      $("#view-anthology").hidden = true;
      var d = $("#view-detail");
      d.hidden = false;
      window.scrollTo(0, 0);
      renderDetail(m[1]);
      return;
    }
    var hash = location.hash;
    if (ANCHORS[hash]) { showHome(hash); return; }
    if (p === "/") { showHome(null); return; }
    show404();
  }

  /* ============================ HEADER / LANG ============================ */

  var LANG_NAMES = { zh: "中文", en: "EN", ko: "한국어", de: "Deutsch", ja: "日本語", es: "Español" };

  function setLang(next) {
    if (!LANG_NAMES[next] || next === lang) return;
    lang = next;
    localStorage.setItem("amhs-lang", lang);
    syncHeader();
    // full re-render of current view in the new language
    $("#view-home").innerHTML = "";
    $("#view-anthology").innerHTML = "";
    if (viewCtx) { viewCtx.revert(); viewCtx = null; }
    route();
  }

  function closeLangMenu() {
    var dd = $("#lang-dd");
    if (!dd) return;
    dd.classList.remove("open");
    var trig = $("#lang-trigger");
    if (trig) trig.setAttribute("aria-expanded", "false");
    var menu = $("#lang-menu");
    if (menu) menu.hidden = true;
  }

  function syncHeader() {
    var cur = $("#lang-cur");
    if (cur) cur.textContent = LANG_NAMES[lang] || "EN";
    document.querySelectorAll('#lang-menu [role="option"]').forEach(function (el) {
      var on = el.dataset.lang === lang;
      el.classList.toggle("active", on);
      el.setAttribute("aria-selected", on ? "true" : "false");
    });
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.dataset.i18n);
    });
    document.documentElement.lang = lang === "zh" ? "zh-CN" : lang === "ko" ? "ko" : lang === "de" ? "de" : lang === "ja" ? "ja" : lang === "es" ? "es" : "en";
  }

  function init() {
    var trig = $("#lang-trigger");
    var menu = $("#lang-menu");
    if (trig && menu) {
      trig.addEventListener("click", function () {
        if (menu.hidden) {
          menu.hidden = false;
          $("#lang-dd").classList.add("open");
          trig.setAttribute("aria-expanded", "true");
        } else {
          closeLangMenu();
        }
      });
      menu.addEventListener("click", function (ev) {
        var opt = ev.target.closest('[role="option"]');
        if (!opt) return;
        setLang(opt.dataset.lang);
        closeLangMenu();
      });
      document.addEventListener("click", function (ev) {
        if (!ev.target.closest("#lang-dd")) closeLangMenu();
      });
      document.addEventListener("keydown", function (ev) {
        if (ev.key === "Escape") closeLangMenu();
      });
    }
    window.addEventListener("popstate", route);
    syncHeader();
    route();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
