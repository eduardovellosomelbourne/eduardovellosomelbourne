(function () {
  'use strict';

  if (typeof PUBLICATIONS_DATA === 'undefined') return;
  var container = document.getElementById('pub-list-container');
  if (!container) return;

  var activeYear = 'all';
  var activeTag  = 'all';

  /* ── helpers ─────────────────────────────────────────────── */

  function getYears() {
    var seen = {}, out = [];
    PUBLICATIONS_DATA.forEach(function (p) {
      if (!seen[p.year]) { seen[p.year] = true; out.push(p.year); }
    });
    return out.sort(function (a, b) { return b - a; });
  }

  function groupByYear() {
    var map = {};
    PUBLICATIONS_DATA.forEach(function (p) {
      if (!map[p.year]) map[p.year] = [];
      map[p.year].push(p);
    });
    return map;
  }

  function esc(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* ── render a single pub-item ────────────────────────────── */

  function renderItem(p) {
    var tagStr = (p.tags || []).join(' ');

    var badge = '';
    if (p.award === 'best-paper')
      badge = '<span class="pub-item__badge pub-item__badge--best">Best Paper</span>';
    else if (p.award === 'honourable-mention')
      badge = '<span class="pub-item__badge pub-item__badge--hm">Honourable Mention</span>';

    var typeBadge = p.type === 'journal'
      ? '<span class="pub-item__type-badge">Journal</span>'
      : '';

    var titleEl = p.url
      ? '<a href="' + esc(p.url) + '" class="pub-item__title" target="_blank" rel="noopener noreferrer">' + esc(p.title) + '</a>'
      : '<span class="pub-item__title">' + esc(p.title) + '</span>';

    return '<article class="pub-item" role="listitem"'
      + ' data-year="' + p.year + '"'
      + ' data-tags="' + esc(tagStr) + '">'
      + '<div class="pub-item__body">'
      +   '<div class="pub-item__meta">'
      +     '<span class="pub-item__venue">' + esc(p.venue) + '</span>'
      +     typeBadge
      +     badge
      +   '</div>'
      +   titleEl
      +   '<p class="pub-item__authors">' + esc(p.authors) + '</p>'
      + '</div>'
      + '</article>';
  }

  /* ── render all year groups ──────────────────────────────── */

  function renderGroups() {
    var years  = getYears();
    var byYear = groupByYear();
    var inner  = container;
    if (!inner) return;

    var html = '';
    years.forEach(function (yr) {
      html += '<div class="pub-year-group" data-year="' + yr + '">'
        + '<h2 class="pub-year-heading">' + yr + '</h2>'
        + '<div class="pub-list" role="list">';
      byYear[yr].forEach(function (p) { html += renderItem(p); });
      html += '</div></div>';
    });
    inner.innerHTML = html;
  }

  /* ── populate year filter buttons ───────────────────────── */

  function buildYearFilters() {
    var group = document.querySelector('[data-filter-group="year"]');
    if (!group) return;
    var years = getYears();
    var html  = '<span class="pub-filter-label">Year</span>'
      + '<button class="pub-filter-btn is-active" type="button" data-filter="year" data-value="all">All</button>';
    years.forEach(function (yr) {
      html += '<button class="pub-filter-btn" type="button" data-filter="year" data-value="' + yr + '">' + yr + '</button>';
    });
    group.innerHTML = html;
  }

  /* ── apply active filters ────────────────────────────────── */

  function applyFilters() {
    container.querySelectorAll('.pub-item').forEach(function (item) {
      var yearOk = activeYear === 'all' || item.dataset.year === activeYear;
      var tags   = item.dataset.tags ? item.dataset.tags.split(' ') : [];
      var tagOk  = activeTag  === 'all' || tags.indexOf(activeTag) !== -1;
      item.classList.toggle('is-hidden', !(yearOk && tagOk));
    });

    container.querySelectorAll('.pub-year-group').forEach(function (grp) {
      var hasVisible = grp.querySelector('.pub-item:not(.is-hidden)');
      grp.classList.toggle('is-hidden', !hasVisible);
    });
  }

  /* ── bind filter click events ────────────────────────────── */

  function bindFilters() {
    document.addEventListener('click', function (e) {
      var btn = e.target.closest ? e.target.closest('.pub-filter-btn') : null;
      if (!btn) return;
      var filterType = btn.dataset ? btn.dataset.filter : btn.getAttribute('data-filter');
      if (!filterType) return;

      var group = btn.closest('.pub-filters') || btn.parentElement;
      group.querySelectorAll('.pub-filter-btn').forEach(function (b) {
        b.classList.remove('is-active');
      });
      btn.classList.add('is-active');

      var val = btn.dataset ? btn.dataset.value : btn.getAttribute('data-value');
      if (filterType === 'year') activeYear = val;
      if (filterType === 'tag')  activeTag  = val;
      applyFilters();
    });
  }

  /* ── init ───────────────────────────────────────────────── */

  renderGroups();
  bindFilters();

}());
