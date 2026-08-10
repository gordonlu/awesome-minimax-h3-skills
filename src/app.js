/* ==========================================================================
   Awesome MiniMax H3 Skills — App
   Vanilla JS · hash router · bilingual · GSAP motion
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

  var I18N = {
    zh: {
      "nav.skills": "视频 Skills",
      "nav.foundation": "基础 Skill",
      "nav.about": "关于",
      "hero.kicker": "MINIMAX H3 官方 SKILLS · 可视化发现入口",
      "hero.title.a": "先看看<b>能做什么</b>，",
      "hero.title.b": "再了解<i>怎么做</i>。",
      "hero.sub": "MiniMax H3 官方仓库内置了 1 个提示词 Skill 和 8 个视频制作 Skill，但很多人从未见过它们的效果。这里把每个 Skill 的官方演示、输入要求、工作流和安装方式整理成一页能看懂的参考。",
      "hero.stat.skills": "官方 SKILLS",
      "hero.stat.modes": "H3 生成模式",
      "hero.stat.demos": "官方效果演示",
      "hero.flow.discover": "发现效果",
      "hero.flow.understand": "理解流程",
      "hero.flow.use": "安装使用",
      "hero.scroll": "向下滚动浏览 SKILLS",
      "fd.label": "FOUNDATION · 基础 SKILL",
      "fd.title": "先有一个所有 Skill 共用的地基",
      "fd.note": "其余 8 个视频 Skill 的提示词结构都来自它",
      "fd.badge": "基础 SKILL · 五种生成模式",
      "fd.structure": "PROMPT STRUCTURE / 提示词结构",
      "fd.cta": "查看完整参考",
      "grid.label": "INDEX · 视频制作 SKILLS",
      "grid.title": "八个可以直接安装的视频工作流",
      "grid.note": "点击卡片查看输入、流程与安装方式",
      "filter.search": "搜索名称、标签、用途…",
      "filter.source": "来源",
      "filter.all": "全部",
      "filter.official": "Official 官方",
      "filter.community": "Community 社区",
      "filter.category": "分类",
      "filter.results": "个结果",
      "empty.community.title": "还没有收录社区 Skills",
      "empty.community.sub": "COMMUNITY SKILLS · COMING IN V0.4 — 当前展示的 9 个均来自官方仓库",
      "empty.search.title": "没有匹配的 Skill",
      "empty.search.sub": "试试更短的关键词，或清除筛选条件",
      "detail.back": "返回索引",
      "detail.attribution": "· 来源:",
      "detail.youProvide": "你需要准备",
      "detail.whatItDoes": "Skill 会做什么",
      "detail.workflow": "制作流程",
      "detail.outputs": "最终得到",
      "detail.bestFor": "最适合",
      "detail.notFor": "不适合",
      "detail.modes": "支持的生成模式",
      "detail.install": "安装使用",
      "detail.install.hint": "通过 skills CLI 安装到你的 Agent（Claude Code / Cursor / Codex 等任意可读取 SKILL.md 的环境）",
      "detail.sources": "官方来源",
      "detail.previewSource": "官方 GIF 素材",
      "detail.sourceRepo": "官方仓库",
      "detail.prev": "上一个",
      "detail.next": "下一个",
      "detail.copy": "复制",
      "detail.copied": "已复制",
      "footer.kicker": "关于本站",
      "footer.statement": "Awesome MiniMax H3 Skills 是独立社区项目，并非 MiniMax 官方网站。「Official」标记表示 Skill 来源于 MiniMax 官方仓库 MiniMax-AI/MiniMax-H3，不代表本站由 MiniMax 官方运营。",
      "footer.links": "官方链接",
      "footer.legal": "许可说明",
      "footer.legalText": "MiniMax H3、官方 H3 Skills 及相关媒体素材版权归 MiniMax 所有，仍受其原始协议约束。本站原创代码以 MIT 协议发布。演示素材经重编码处理，详见 third_party/MiniMax-H3/。",
      "footer.data": "数据来源：MiniMax-AI/MiniMax-H3 · 手工整理",
      "lang.note.en": "官方仅英文版",
      "badge.official": "OFFICIAL",
      "version": "版本",
      "author": "作者",
      "languages": "语言",
    },
    en: {
      "nav.skills": "Video Skills",
      "nav.foundation": "Foundation",
      "nav.about": "About",
      "hero.kicker": "OFFICIAL MINIMAX H3 SKILLS · VISUAL DISCOVERY INDEX",
      "hero.title.a": "See what it <b>makes</b>.",
      "hero.title.b": "Then learn <i>how</i>.",
      "hero.sub": "The official MiniMax H3 repository ships one prompt-writing skill and eight video-production skills — yet most users have never seen what they do. This index turns each skill's official demo, inputs, workflow, and install command into a page you can actually scan.",
      "hero.stat.skills": "OFFICIAL SKILLS",
      "hero.stat.modes": "H3 GENERATION MODES",
      "hero.stat.demos": "OFFICIAL DEMOS",
      "hero.flow.discover": "Discover",
      "hero.flow.understand": "Understand",
      "hero.flow.use": "Use",
      "hero.scroll": "SCROLL TO EXPLORE",
      "fd.label": "FOUNDATION SKILL",
      "fd.title": "One shared foundation under every workflow",
      "fd.note": "All eight video skills build on its prompt structure",
      "fd.badge": "FOUNDATION · 5 GENERATION MODES",
      "fd.structure": "PROMPT STRUCTURE",
      "fd.cta": "Open the full reference",
      "grid.label": "INDEX · VIDEO PRODUCTION SKILLS",
      "grid.title": "Eight installable video workflows",
      "grid.note": "Open a card for inputs, workflow & install",
      "filter.search": "Search name, tag, use case…",
      "filter.source": "Source",
      "filter.all": "All",
      "filter.official": "Official",
      "filter.community": "Community",
      "filter.category": "Category",
      "filter.results": "results",
      "empty.community.title": "No community skills yet",
      "empty.community.sub": "COMING IN V0.4 — ALL 9 SKILLS SHOWN ARE FROM THE OFFICIAL REPO",
      "empty.search.title": "No matching skills",
      "empty.search.sub": "TRY A SHORTER QUERY OR CLEAR THE FILTERS",
      "detail.back": "BACK TO INDEX",
      "detail.attribution": "· Source:",
      "detail.youProvide": "What you provide",
      "detail.whatItDoes": "What the skill does",
      "detail.workflow": "Workflow",
      "detail.outputs": "What you get",
      "detail.bestFor": "Best for",
      "detail.notFor": "Not for",
      "detail.modes": "Supported generation modes",
      "detail.install": "Install",
      "detail.install.hint": "Install into your agent via the skills CLI — works with Claude Code, Cursor, Codex, or any harness that reads SKILL.md",
      "detail.sources": "Official sources",
      "detail.previewSource": "Official GIF asset",
      "detail.sourceRepo": "Official repository",
      "detail.prev": "PREV",
      "detail.next": "NEXT",
      "detail.copy": "COPY",
      "detail.copied": "COPIED",
      "footer.kicker": "About",
      "footer.statement": "Awesome MiniMax H3 Skills is an independent community project, not an official MiniMax website. The “Official” mark means a skill ships in the MiniMax-AI/MiniMax-H3 repository — it does not mean this site is run by MiniMax.",
      "footer.links": "Official links",
      "footer.legal": "Licensing",
      "footer.legalText": "MiniMax H3, official H3 Skills, and related media assets are © MiniMax and remain subject to their original license terms. This project's original source code is licensed under MIT. Demo media are re-encoded — see third_party/MiniMax-H3/.",
      "footer.data": "DATA: MiniMax-AI/MiniMax-H3 · manually curated",
      "lang.note.en": "Official version is English-only",
      "badge.official": "OFFICIAL",
      "version": "VERSION",
      "author": "AUTHOR",
      "languages": "LANGUAGES",
    },
  };

  var lang = localStorage.getItem("amhs-lang") || "zh";
  function t(key) { return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key; }
  function L(field) {
    if (field == null) return "";
    if (typeof field === "string") return field;
    return field[lang] || field.en || "";
  }
  function LAlt(field) {
    if (field == null || typeof field === "string") return "";
    var other = lang === "zh" ? "en" : "zh";
    return field[other] || "";
  }

  /* ============================ state ============================ */

  var state = { query: "", source: "all", category: "all" };
  var viewCtx = null; // gsap context for the active view

  /* ============================ helpers ============================ */

  function catChip(id) {
    var c = CATS[id];
    if (!c) return "";
    return '<span class="card-cat"><span class="cdot" style="background:' + c.color + '"></span>' + esc(L(c)) + "</span>";
  }

  function officialBadge() {
    return '<span class="card-badge">' + t("badge.official") + "</span>";
  }

  function videoTag(p, cls) {
    return (
      '<video class="' + cls + '" muted loop playsinline preload="none" ' +
      'poster="' + esc(p.poster) + '" data-src="' + esc(p.video) + '"></video>'
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
        '<a class="marquee-item" href="#/skill/' + s.slug + '" aria-label="' + esc(L({ en: s.name, zh: s.nameZh })) + '">' +
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
        '<a class="foundation-card js-reveal" href="#/skill/' + s.slug + '">' +
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
          officialBadge() +
        "</div>" +
        '<div class="card-body">' +
          '<div class="card-cats">' + s.categories.map(catChip).join("") + "</div>" +
          '<h3 class="card-name">' + esc(L({ en: s.name, zh: s.nameZh })) + "</h3>" +
          '<p class="card-name-alt">' + esc(LAlt({ en: s.name, zh: s.nameZh })) + "</p>" +
          '<p class="card-summary">' + esc(L(s.summary)) + "</p>" +
          '<div class="card-foot"><div class="card-tags">' + tags + "</div>" +
          '<span class="card-go">' + (lang === "zh" ? "查看" : "OPEN") + ' <span aria-hidden="true">→</span></span></div>' +
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

  function renderHome() {
    var home = $("#view-home");
    home.innerHTML =
      '<section class="hero"><div class="wrap hero-inner">' +
        '<p class="hero-kicker"><span class="dot"></span>' + t("hero.kicker") + "</p>" +
        '<h1 class="hero-title">' +
          '<span class="line"><span>' + t("hero.title.a") + "</span></span>" +
          '<span class="line"><span>' + t("hero.title.b") + "</span></span>" +
        "</h1>" +
        '<p class="hero-sub">' + t("hero.sub") + "</p>" +
        '<div class="hero-stats">' +
          '<div class="stat"><div class="stat-num"><i data-count="9">0</i></div><div class="stat-label">' + t("hero.stat.skills") + "</div></div>" +
          '<div class="stat"><div class="stat-num"><i data-count="5">0</i></div><div class="stat-label">' + t("hero.stat.modes") + "</div></div>" +
          '<div class="stat"><div class="stat-num"><i data-count="8">0</i></div><div class="stat-label">' + t("hero.stat.demos") + "</div></div>" +
        "</div>" +
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
      "</div></section>";

    bindHomeEvents(home);
    renderGrid();
    animateHome(home);
  }

  function bindCards(root) {
    Array.prototype.forEach.call(root.querySelectorAll(".skill-card"), function (card) {
      function go() { location.hash = "#/skill/" + card.dataset.slug; }
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
    links.push({ label: t("detail.sourceRepo") + " — MiniMax-AI/MiniMax-H3", url: s.sources.skillDir });
    links.push({ label: "SKILL.md", url: s.sources.skillMd });
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

  function renderDetail(slug) {
    var s = DATA.skills.filter(function (x) { return x.slug === slug; })[0];
    var view = $("#view-detail");
    if (!s) { location.hash = "#/"; return; }

    var idx = DATA.skills.indexOf(s);
    var prev = DATA.skills[idx - 1];
    var next = DATA.skills[idx + 1];

    var meta = [];
    if (s.version) meta.push('<span class="meta-chip">' + t("version") + " <b>v" + esc(s.version) + "</b></span>");
    meta.push('<span class="meta-chip">' + t("author") + " <b>" + esc(L(s.author)) + "</b></span>");
    var langText = s.languages.indexOf("zh") !== -1 ? "EN + 中文" : "EN";
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

    sections += detailSection(n++, "detail.sources", sourceLinks(s));

    var langNote = (lang === "zh" && s.languageNote) ? '<p class="detail-desc-alt">' + esc(L(s.languageNote)) + "</p>" : "";

    view.innerHTML =
      '<div class="wrap detail-hero">' +
        '<a class="detail-back" href="#/">← ' + t("detail.back") + "</a>" +
        '<div class="detail-top">' +
          "<div>" +
            '<p class="detail-kicker">' + s.categories.map(function (id) { return esc(L(CATS[id])).toUpperCase(); }).join(" · ") + "</p>" +
            '<h1 class="detail-name">' + esc(L({ en: s.name, zh: s.nameZh })) + "</h1>" +
            '<p class="detail-name-alt">' + esc(LAlt({ en: s.name, zh: s.nameZh })) + " · " + esc(s.slug) + "</p>" +
            '<div class="detail-attribution"><span class="oa">Official MiniMax H3 Skill</span><span>' + t("detail.attribution") + '</span><a href="' + esc(s.sources.skillDir) + '" target="_blank" rel="noopener noreferrer">MiniMax-AI/MiniMax-H3</a></div>' +
            '<div class="detail-meta">' + meta.join("") + "</div>" +
            '<p class="detail-desc">' + esc(L(s.description)) + "</p>" +
            '<p class="detail-desc-alt">' + esc(LAlt(s.description)) + "</p>" + langNote +
            '<div class="detail-actions">' +
              '<a class="btn btn-primary" href="' + esc(s.sources.skillMd) + '" target="_blank" rel="noopener noreferrer">SKILL.md ↗</a>' +
              '<a class="btn" href="' + esc(s.sources.skillDir) + '" target="_blank" rel="noopener noreferrer">' + t("detail.sourceRepo") + " ↗</a>" +
            "</div>" +
          "</div>" +
          mediaBlock +
        "</div>" +
        sections +
        '<nav class="detail-nav" aria-label="More skills">' +
          (prev
            ? '<a href="#/skill/' + prev.slug + '"><span class="dn-dir">← ' + t("detail.prev") + '</span><span class="dn-name">' + esc(L({ en: prev.name, zh: prev.nameZh })) + "</span></a>"
            : '<a class="disabled"><span class="dn-dir">' + t("detail.prev") + '</span><span class="dn-name">—</span></a>') +
          (next
            ? '<a class="next" href="#/skill/' + next.slug + '"><span class="dn-dir">' + t("detail.next") + ' →</span><span class="dn-name">' + esc(L({ en: next.name, zh: next.nameZh })) + "</span></a>"
            : '<a class="next disabled"><span class="dn-dir">' + t("detail.next") + '</span><span class="dn-name">—</span></a>') +
        "</nav>" +
      "</div>";

    Array.prototype.forEach.call(view.querySelectorAll(".copy-btn"), function (btn) {
      btn.addEventListener("click", function () { copyText(btn.dataset.copy, btn); });
    });
    observeVideos(view);
    animateDetail(view);
    document.title = L({ en: s.name, zh: s.nameZh }) + " — Awesome MiniMax H3 Skills";
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
        .from(".marquee", { opacity: 0, duration: 0.8 }, "-=0.3");

      home.querySelectorAll("[data-count]").forEach(function (el) {
        var target = parseInt(el.dataset.count, 10);
        gsap.fromTo(el, { textContent: 0 }, {
          textContent: target, duration: 1.4, delay: 0.5, ease: "power2.out",
          snap: { textContent: 1 },
        });
      });

      gsap.utils.toArray(".section-head, .foundation-card").forEach(function (el) {
        gsap.from(el, {
          y: 42, opacity: 0, duration: 0.85, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
        el.classList.add("revealed");
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

  /* ============================ ROUTER ============================ */

  var ANCHORS = { "#skills": 1, "#foundation": 1, "#about": 1 };

  function showHome(anchor) {
    $("#view-detail").hidden = true;
    $("#view-home").hidden = false;
    document.title = lang === "zh"
      ? "Awesome MiniMax H3 Skills — 官方 Skill 可视化发现"
      : "Awesome MiniMax H3 Skills — Visual Discovery Index";
    if (!$("#view-home").innerHTML) renderHome();
    else if (viewCtx) { viewCtx.revert(); viewCtx = null; animateHome($("#view-home")); }
    if (anchor && $(anchor)) {
      requestAnimationFrame(function () { $(anchor).scrollIntoView({ behavior: REDUCED ? "auto" : "smooth" }); });
    } else {
      window.scrollTo(0, 0);
    }
  }

  function route() {
    var hash = location.hash || "#/";
    if (ANCHORS[hash]) { showHome(hash); return; }
    var m = hash.match(/^#\/skill\/([a-z0-9-]+)$/);
    if (m) {
      $("#view-home").hidden = true;
      var d = $("#view-detail");
      d.hidden = false;
      window.scrollTo(0, 0);
      renderDetail(m[1]);
      return;
    }
    showHome(null);
  }

  /* ============================ HEADER / LANG ============================ */

  function syncHeader() {
    document.querySelectorAll(".lang-opt").forEach(function (el) {
      el.classList.toggle("active", el.dataset.lang === lang);
    });
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.dataset.i18n);
    });
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  }

  function init() {
    $("#lang-toggle").addEventListener("click", function () {
      lang = lang === "zh" ? "en" : "zh";
      localStorage.setItem("amhs-lang", lang);
      syncHeader();
      // full re-render of current view in the new language
      $("#view-home").innerHTML = "";
      if (viewCtx) { viewCtx.revert(); viewCtx = null; }
      route();
    });
    window.addEventListener("hashchange", route);
    syncHeader();
    route();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
