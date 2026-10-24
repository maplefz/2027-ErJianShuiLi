/* 考点卡章节页顶部「书本 + 章节」下拉 · 由 tools/build_nav.py 生成，勿手改 */
(function () {
  "use strict";
  var NAV = [{"key": "fg", "short": "法规", "title": "建设工程法规及相关知识", "dir": "考点卡_法规", "chapters": [{"ch": 1, "name": "建设工程基本法律知识", "file": "ch01_建设工程基本法律知识_考点卡.html"}, {"ch": 2, "name": "建筑市场主体制度", "file": "ch02_建筑市场主体制度_考点卡.html"}, {"ch": 3, "name": "建设工程许可法律制度", "file": "ch03_建设工程许可法律制度_考点卡.html"}, {"ch": 4, "name": "建设工程发承包法律制度", "file": "ch04_建设工程发承包法律制度_考点卡.html"}, {"ch": 5, "name": "建设工程合同法律制度", "file": "ch05_建设工程合同法律制度_考点卡.html"}, {"ch": 6, "name": "建设工程安全生产法律制度", "file": "ch06_建设工程安全生产法律制度_考点卡.html"}, {"ch": 7, "name": "建设工程质量法律制度", "file": "ch07_建设工程质量法律制度_考点卡.html"}, {"ch": 8, "name": "建设工程环境保护和历史文化遗产保护制度", "file": "ch08_建设工程环境保护和历史文化遗产保护制度_考点卡.html"}, {"ch": 9, "name": "建设工程劳动保障法律制度", "file": "ch09_建设工程劳动保障法律制度_考点卡.html"}, {"ch": 10, "name": "建设工程争议解决法律制度", "file": "ch10_建设工程争议解决法律制度_考点卡.html"}]}, {"key": "gl", "short": "管理", "title": "建设工程施工管理", "dir": "考点卡_管理", "chapters": [{"ch": 1, "name": "施工组织与目标控制", "file": "ch01_施工组织与目标控制_考点卡.html"}, {"ch": 2, "name": "施工招标投标与合同管理", "file": "ch02_施工招标投标与合同管理_考点卡.html"}, {"ch": 3, "name": "施工进度管理", "file": "ch03_施工进度管理_考点卡.html"}, {"ch": 4, "name": "施工质量管理", "file": "ch04_施工质量管理_考点卡.html"}, {"ch": 5, "name": "施工成本管理", "file": "ch05_施工成本管理_考点卡.html"}, {"ch": 6, "name": "施工安全管理", "file": "ch06_施工安全管理_考点卡.html"}, {"ch": 7, "name": "绿色施工及环境管理", "file": "ch07_绿色施工及环境管理_考点卡.html"}, {"ch": 8, "name": "施工文件归档管理及项目管理新发展", "file": "ch08_施工文件归档管理及项目管理新发展_考点卡.html"}]}, {"key": "sl", "short": "水利", "title": "水利水电工程管理与实务", "dir": "考点卡_水利", "chapters": [{"ch": 1, "name": "水利水电工程建筑物及建筑材料", "file": "ch01_水利水电工程建筑物及建筑材料_考点卡.html"}, {"ch": 2, "name": "水利水电工程施工导流与截流", "file": "ch02_水利水电工程施工导流与截流_考点卡.html"}, {"ch": 3, "name": "水利水电工程主体工程施工", "file": "ch03_水利水电工程主体工程施工_考点卡.html"}, {"ch": 4, "name": "相关法规", "file": "ch04_相关法规_考点卡.html"}, {"ch": 5, "name": "相关标准", "file": "ch05_相关标准_考点卡.html"}, {"ch": 6, "name": "水利水电工程企业资质与施工组织", "file": "ch06_水利水电工程企业资质与施工组织_考点卡.html"}, {"ch": 7, "name": "施工招标投标与合同管理", "file": "ch07_施工招标投标与合同管理_考点卡.html"}, {"ch": 8, "name": "施工进度管理", "file": "ch08_施工进度管理_考点卡.html"}, {"ch": 9, "name": "施工质量管理", "file": "ch09_施工质量管理_考点卡.html"}, {"ch": 10, "name": "施工成本管理", "file": "ch10_施工成本管理_考点卡.html"}, {"ch": 11, "name": "施工安全管理", "file": "ch11_施工安全管理_考点卡.html"}, {"ch": 12, "name": "绿色施工及现场环境管理", "file": "ch12_绿色施工及现场环境管理_考点卡.html"}]}];

  var path = decodeURIComponent(location.pathname).replace(/\\/g, "/");
  var book = null;
  for (var i = 0; i < NAV.length; i++) {
    if (path.indexOf("/" + NAV[i].dir + "/") >= 0) { book = NAV[i]; break; }
  }
  if (!book) return;
  var fm = path.match(/\/ch(\d+)_/);
  var ch = fm ? parseInt(fm[1], 10) : book.chapters[0].ch;

  var bar = document.querySelector(".topbar");
  if (!bar) return;

  var st = document.createElement("style");
  st.textContent =
    ".cardnav{display:flex;gap:7px;align-items:center;flex-shrink:1;min-width:0}" +
    ".cardsel{font:inherit;font-size:12.5px;height:30px;padding:0 24px 0 9px;" +
    "border:1px solid var(--line2,#cfccc2);border-radius:7px;color:var(--tx,#2c2c2a);" +
    "cursor:pointer;appearance:none;-webkit-appearance:none;max-width:150px;text-overflow:ellipsis;" +
    "background:#fff url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%235f5e5a' fill='none' stroke-width='1.5'/%3E%3C/svg%3E\") no-repeat right 7px center}" +
    ".cardsel:hover{border-color:var(--tx3,#8c8a82)}" +
    ".cardsel:focus{outline:none;border-color:var(--blue,#185fa5)}" +
    ".cardsel.ch-sel{max-width:250px}" +
    "@media(max-width:640px){.cardsel{max-width:88px}.cardsel.ch-sel{max-width:120px}}";
  document.head.appendChild(st);

  var bs = document.createElement("select");
  bs.className = "cardsel";
  bs.title = "切换书本";
  NAV.forEach(function (b) {
    var o = document.createElement("option");
    o.value = b.dir;
    o.textContent = b.short + " · " + b.title;
    bs.appendChild(o);
  });
  bs.value = book.dir;

  var cs = document.createElement("select");
  cs.className = "cardsel ch-sel";
  cs.title = "切换章节";
  function fillChapters(b) {
    cs.innerHTML = "";
    b.chapters.forEach(function (c) {
      var o = document.createElement("option");
      o.value = c.ch;
      o.textContent = "第 " + c.ch + " 章　" + c.name;
      cs.appendChild(o);
    });
    cs.value = String(ch);
  }
  fillChapters(book);

  function go(target, chapter) {
    var prefix = target.dir === book.dir ? "" : "../" + target.dir + "/";
    location.href = encodeURI(prefix + chapter.file);
  }

  bs.onchange = function () {
    var target = NAV.filter(function (b) { return b.dir === bs.value; })[0];
    if (!target) return;
    var same = target.chapters.filter(function (c) { return c.ch === ch; })[0];
    go(target, same || target.chapters[0]);
  };

  cs.onchange = function () {
    var target = book.chapters.filter(function (c) { return c.ch === parseInt(cs.value, 10); })[0];
    if (target) go(book, target);
  };

  var box = document.createElement("span");
  box.className = "cardnav";
  box.appendChild(bs);
  box.appendChild(cs);

  var title = bar.querySelector(".ch-title");
  if (title) title.parentNode.replaceChild(box, title);
  else {
    var anchor = bar.querySelector(".modes") || bar.querySelector(".back");
    if (anchor) anchor.parentNode.insertBefore(box, anchor.nextSibling);
    else bar.insertBefore(box, bar.firstChild);
  }
})();
