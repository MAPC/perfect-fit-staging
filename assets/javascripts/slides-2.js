    ! function(e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.katex = t() : e.katex = t() }("undefined" != typeof self ? self : this, function() {
        return function(e) {
            function t(n) { if (r[n]) return r[n].exports; var a = r[n] = { i: n, l: !1, exports: {} }; return e[n].call(a.exports, a, a.exports, t), a.l = !0, a.exports } var r = {}; return t.m = e, t.c = r, t.d = function(e, r, n) { t.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: n }) }, t.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, t.t = function(e, r) { if (1 & r && (e = t(e)), 8 & r) return e; if (4 & r && "object" == typeof e && e && e.__esModule) return e; var n = Object.create(null); if (t.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & r && "string" != typeof e)
                    for (var a in e) t.d(n, a, function(t) { return e[t] }.bind(null, a)); return n }, t.n = function(e) { var r = e && e.__esModule ? function() { return e["default"] } : function() { return e }; return t.d(r, "a", r), r }, t.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, t.p = "", t(t.s = 1) }([function() {}, function(e, t, r) {
            "use strict";

            function n(e) { for (var t = 0; t < X.length; t += 2)
                    if (e >= X[t] && e <= X[t + 1]) return !0; return !1 }

            function a(e, t, r) { if (!ie[t]) throw new Error("Font metrics not found for font: " + t + "."); var a = e.charCodeAt(0);
                e[0] in se && (a = se[e[0]].charCodeAt(0)); var i = ie[t][a]; if (i || "text" !== r || n(a) && (i = ie[t][77]), i) return { depth: i[0], height: i[1], italic: i[2], skew: i[3], width: i[4] } }

            function i(e, t, r, n, a, i) { de[e][a] = { font: t, group: r, replace: n }, i && n && (de[e][n] = de[e][a]) }

            function o(e, t) { var r = s(e, t); if (!r) throw new Error("Expected node of type " + t + ", but got " + (e ? "node of type " + e.type : String(e))); return r }

            function s(e, t) { return e && e.type === t ? e : null }

            function l(e, t) { var r = function(e, t) { return e && "atom" === e.type && e.family === t ? e : null }(e, t); if (!r) throw new Error('Expected node of type "atom" and family "' + t + '", but got ' + (e ? "atom" === e.type ? "atom of family " + e.family : "node of type " + e.type : String(e))); return r }

            function c(e) { return e && ("atom" === e.type || he.hasOwnProperty(e.type)) ? e : null }

            function h(e) { for (var t = e.type, r = (e.nodeType, e.names), n = e.props, a = e.handler, i = e.htmlBuilder, o = e.mathmlBuilder, s = { type: t, numArgs: n.numArgs, argTypes: n.argTypes, greediness: void 0 === n.greediness ? 1 : n.greediness, allowedInText: !!n.allowedInText, allowedInMath: void 0 === n.allowedInMath || n.allowedInMath, numOptionalArgs: n.numOptionalArgs || 0, infix: !!n.infix, consumeMode: n.consumeMode, handler: a }, l = 0; l < r.length; ++l) lt[r[l]] = s;
                t && (i && (ct[t] = i), o && (ht[t] = o)) }

            function d(e) { h({ type: e.type, names: [], props: { numArgs: 0 }, handler: function() { throw new Error("Should never be called.") }, htmlBuilder: e.htmlBuilder, mathmlBuilder: e.mathmlBuilder }) }

            function u(e, t) { var r = ut(["base"], e, t),
                    n = ut(["strut"]); return n.style.height = r.height + r.depth + "em", n.style.verticalAlign = -r.depth + "em", r.children.unshift(n), r }

            function m(e, t) { var r = null;
                1 === e.length && "tag" === e[0].type && (r = e[0].tag, e = e[0].body); for (var n, a = vt(e, t, !0), i = [], o = [], s = 0; s < a.length; s++)
                    if (o.push(a[s]), a[s].hasClass("mbin") || a[s].hasClass("mrel") || a[s].hasClass("allowbreak")) { for (var l = !1; s < a.length - 1 && a[s + 1].hasClass("mspace") && !a[s + 1].hasClass("newline");) s++, o.push(a[s]), a[s].hasClass("nobreak") && (l = !0);
                        l || (i.push(u(o, t)), o = []) } else a[s].hasClass("newline") && (o.pop(), o.length > 0 && (i.push(u(o, t)), o = []), i.push(a[s]));
                o.length > 0 && i.push(u(o, t)), r && ((n = u(vt(r, t, !0))).classes = ["tag"], i.push(n)); var c = ut(["katex-html"], i); if (c.setAttribute("aria-hidden", "true"), n) { var h = n.children[0];
                    h.style.height = c.height + c.depth + "em", h.style.verticalAlign = -c.depth + "em" } return c }

            function p(e) { return new Y(e) }

            function f(e, t) { var r = c(e); if (r && B.contains(pr, r.text)) return r; throw new E("Invalid delimiter: '" + (r ? r.text : JSON.stringify(e)) + "' after '" + t.funcName + "'", e) }

            function g(e) { if (!e.body) throw new Error("Bug: The leftright ParseNode wasn't fully parsed.") }

            function v(e) { for (var t = e.type, r = e.names, n = e.props, a = e.handler, i = e.htmlBuilder, o = e.mathmlBuilder, s = { type: t, numArgs: n.numArgs || 0, greediness: 1, allowedInText: !1, numOptionalArgs: 0, handler: a }, l = 0; l < r.length; ++l) vr[r[l]] = s;
                i && (ct[t] = i), o && (ht[t] = o) }

            function b(e) { var t = [];
                e.consumeSpaces(); for (var r = e.nextToken.text;
                    "\\hline" === r || "\\hdashline" === r;) e.consume(), t.push("\\hdashline" === r), e.consumeSpaces(), r = e.nextToken.text; return t }

            function y(e, t, r) { var n = t.hskipBeforeAndAfter,
                    a = t.addJot,
                    i = t.cols,
                    s = t.arraystretch; if (e.gullet.beginGroup(), e.gullet.macros.set("\\\\", "\\cr"), !s) { var l = e.gullet.expandMacroAsText("\\arraystretch"); if (null == l) s = 1;
                    else if (!(s = parseFloat(l)) || s < 0) throw new E("Invalid \\arraystretch: " + l) } var c = [],
                    h = [c],
                    d = [],
                    u = []; for (u.push(b(e));;) { var m = e.parseExpression(!1, "\\cr");
                    m = { type: "ordgroup", mode: e.mode, body: m }, r && (m = { type: "styling", mode: e.mode, style: r, body: [m] }), c.push(m); var p = e.nextToken.text; if ("&" === p) e.consume();
                    else { if ("\\end" === p) { 1 === c.length && "styling" === m.type && 0 === m.body[0].body.length && h.pop(), u.length < h.length + 1 && u.push([]); break } if ("\\cr" !== p) throw new E("Expected & or \\\\ or \\cr or \\end", e.nextToken); var f = o(e.parseFunction(), "cr");
                        d.push(f.size), u.push(b(e)), c = [], h.push(c) } } return e.gullet.endGroup(), { type: "array", mode: e.mode, addJot: a, arraystretch: s, body: h, cols: i, rowGaps: d, hskipBeforeAndAfter: n, hLinesBeforeRow: u } }

            function x(e) { return "d" === e.substr(0, 1) ? "display" : "text" }

            function w(e, t) { var r = vt(e.body, t, !0); return kr([e.mclass], r, t) }

            function k(e, t) { var r = Lt(e.body, t); return Mt.newDocumentFragment(r) }

            function S(e, t, r) { for (var n = vt(e, t, !1), a = t.sizeMultiplier / r.sizeMultiplier, i = 0; i < n.length; i++) { var o = n[i].classes.indexOf("sizing");
                    o < 0 ? Array.prototype.push.apply(n[i].classes, t.sizingClasses(r)) : n[i].classes[o + 1] === "reset-size" + t.size && (n[i].classes[o + 1] = "reset-size" + r.size), n[i].height *= a, n[i].depth *= a } return rt.makeFragment(n) }

            function A(e, t) { en[e] = t } r.r(t), r(0);
            var M = function() {
                    function e(e, t, r) { this.lexer = void 0, this.start = void 0, this.end = void 0, this.lexer = e, this.start = t, this.end = r } return e.range = function(t, r) { return r ? t && t.loc && r.loc && t.loc.lexer === r.loc.lexer ? new e(t.loc.lexer, t.loc.start, r.loc.end) : null : t && t.loc }, e }(),
                z = function() {
                    function e(e, t) { this.text = void 0, this.loc = void 0, this.text = e, this.loc = t } return e.prototype.range = function(t, r) { return new e(r, M.range(this, t)) }, e }(),
                T = function e(t, r) { this.position = void 0; var n, a = "KaTeX parse error: " + t,
                        i = r && r.loc; if (i && i.start <= i.end) { var o = i.lexer.input;
                        n = i.start; var s = i.end;
                        a += n === o.length ? " at end of input: " : " at position " + (n + 1) + ": "; var l = o.slice(n, s).replace(/[^]/g, "$&\u0332");
                        a += (n > 15 ? "\u2026" + o.slice(n - 15, n) : o.slice(0, n)) + l + (s + 15 < o.length ? o.slice(s, s + 15) + "\u2026" : o.slice(s)) } var c = new Error(a); return c.name = "ParseError", c.__proto__ = e.prototype, c.position = n, c };
            T.prototype.__proto__ = Error.prototype;
            var E = T,
                L = /([A-Z])/g,
                C = { "&": "&amp;", ">": "&gt;", "<": "&lt;", '"': "&quot;", "'": "&#x27;" },
                N = /[&><"']/g,
                q = function e(t) { return "ordgroup" === t.type ? 1 === t.body.length ? e(t.body[0]) : t : "color" === t.type ? 1 === t.body.length ? e(t.body[0]) : t : "font" === t.type ? e(t.body) : t },
                B = { contains: function(e, t) { return -1 !== e.indexOf(t) }, deflt: function(e, t) { return void 0 === e ? t : e }, escape: function(e) { return String(e).replace(N, function(e) { return C[e] }) }, hyphenate: function(e) { return e.replace(L, "-$1").toLowerCase() }, getBaseElem: q, isCharacterBox: function(e) { var t = q(e); return "mathord" === t.type || "textord" === t.type || "atom" === t.type } },
                I = function() {
                    function e(e) { this.displayMode = void 0, this.leqno = void 0, this.fleqn = void 0, this.throwOnError = void 0, this.errorColor = void 0, this.macros = void 0, this.colorIsTextColor = void 0, this.strict = void 0, this.maxSize = void 0, this.maxExpand = void 0, this.allowedProtocols = void 0, e = e || {}, this.displayMode = B.deflt(e.displayMode, !1), this.leqno = B.deflt(e.leqno, !1), this.fleqn = B.deflt(e.fleqn, !1), this.throwOnError = B.deflt(e.throwOnError, !0), this.errorColor = B.deflt(e.errorColor, "#cc0000"), this.macros = e.macros || {}, this.colorIsTextColor = B.deflt(e.colorIsTextColor, !1), this.strict = B.deflt(e.strict, "warn"), this.maxSize = Math.max(0, B.deflt(e.maxSize, 1 / 0)), this.maxExpand = Math.max(0, B.deflt(e.maxExpand, 1e3)), this.allowedProtocols = B.deflt(e.allowedProtocols, ["http", "https", "mailto", "_relative"]) } var t = e.prototype; return t.reportNonstrict = function(e, t, r) { var n = this.strict; if ("function" == typeof n && (n = n(e, t, r)), n && "ignore" !== n) { if (!0 === n || "error" === n) throw new E("LaTeX-incompatible input and strict mode is set to 'error': " + t + " [" + e + "]", r); "warn" === n ? "undefined" != typeof console && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + t + " [" + e + "]") : "undefined" != typeof console && console.warn("LaTeX-incompatible input and strict mode is set to unrecognized '" + n + "': " + t + " [" + e + "]") } }, t.useStrictBehavior = function(e, t, r) { var n = this.strict; if ("function" == typeof n) try { n = n(e, t, r) } catch (e) { n = "error" }
                        return !(!n || "ignore" === n || !0 !== n && "error" !== n && ("warn" === n ? ("undefined" != typeof console && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + t + " [" + e + "]"), 1) : ("undefined" != typeof console && console.warn("LaTeX-incompatible input and strict mode is set to unrecognized '" + n + "': " + t + " [" + e + "]"), 1))) }, e }(),
                O = function() {
                    function e(e, t, r) { this.id = void 0, this.size = void 0, this.cramped = void 0, this.id = e, this.size = t, this.cramped = r } var t = e.prototype; return t.sup = function() { return R[P[this.id]] }, t.sub = function() { return R[D[this.id]] }, t.fracNum = function() { return R[H[this.id]] }, t.fracDen = function() { return R[F[this.id]] }, t.cramp = function() { return R[V[this.id]] }, t.text = function() { return R[U[this.id]] }, t.isTight = function() { return this.size >= 2 }, e }(),
                R = [new O(0, 0, !1), new O(1, 0, !0), new O(2, 1, !1), new O(3, 1, !0), new O(4, 2, !1), new O(5, 2, !0), new O(6, 3, !1), new O(7, 3, !0)],
                P = [4, 5, 4, 5, 6, 7, 6, 7],
                D = [5, 5, 5, 5, 7, 7, 7, 7],
                H = [2, 3, 4, 5, 6, 7, 6, 7],
                F = [3, 3, 5, 5, 7, 7, 7, 7],
                V = [1, 1, 3, 3, 5, 5, 7, 7],
                U = [0, 1, 2, 3, 2, 3, 2, 3],
                W = { DISPLAY: R[0], TEXT: R[2], SCRIPT: R[4], SCRIPTSCRIPT: R[6] },
                _ = [{ name: "latin", blocks: [
                        [256, 591],
                        [768, 879]
                    ] }, { name: "cyrillic", blocks: [
                        [1024, 1279]
                    ] }, { name: "brahmic", blocks: [
                        [2304, 4255]
                    ] }, { name: "georgian", blocks: [
                        [4256, 4351]
                    ] }, { name: "cjk", blocks: [
                        [12288, 12543],
                        [19968, 40879],
                        [65280, 65376]
                    ] }, { name: "hangul", blocks: [
                        [44032, 55215]
                    ] }],
                X = [];
            _.forEach(function(e) { return e.blocks.forEach(function(e) { return X.push.apply(X, e) }) });
            var G = { path: { sqrtMain: "M95,702c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,\n-10,-9.5,-14c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54c44.2,-33.3,65.8,\n-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10s173,378,173,378c0.7,0,\n35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429c69,-144,104.5,-217.7,106.5,\n-221c5.3,-9.3,12,-14,20,-14H400000v40H845.2724s-225.272,467,-225.272,467\ns-235,486,-235,486c-2.7,4.7,-9,7,-19,7c-6,0,-10,-1,-12,-3s-194,-422,-194,-422\ns-65,47,-65,47z M834 80H400000v40H845z", sqrtSize1: "M263,681c0.7,0,18,39.7,52,119c34,79.3,68.167,\n158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120c340,-704.7,510.7,-1060.3,512,-1067\nc4.7,-7.3,11,-11,19,-11H40000v40H1012.3s-271.3,567,-271.3,567c-38.7,80.7,-84,\n175,-136,283c-52,108,-89.167,185.3,-111.5,232c-22.3,46.7,-33.8,70.3,-34.5,71\nc-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1s-109,-253,-109,-253c-72.7,-168,-109.3,\n-252,-110,-252c-10.7,8,-22,16.7,-34,26c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26\ns76,-59,76,-59s76,-60,76,-60z M1001 80H40000v40H1012z", sqrtSize2: "M1001,80H400000v40H1013.1s-83.4,268,-264.1,840c-180.7,\n572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,\n-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744c-10,12,-21,25,-33,39s-32,39,-32,39\nc-6,-5.3,-15,-14,-27,-26s25,-30,25,-30c26.7,-32.7,52,-63,76,-91s52,-60,52,-60\ns208,722,208,722c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,\n-658.5c53.7,-170.3,84.5,-266.8,92.5,-289.5c4,-6.7,10,-10,18,-10z\nM1001 80H400000v40H1013z", sqrtSize3: "M424,2478c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,\n-342,-109.8,-513.3,-110.5,-514c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,\n25c-5.7,9.3,-9.8,16,-12.5,20s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,\n-13s76,-122,76,-122s77,-121,77,-121s209,968,209,968c0,-2,84.7,-361.7,254,-1079\nc169.3,-717.3,254.7,-1077.7,256,-1081c4,-6.7,10,-10,18,-10H400000v40H1014.6\ns-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185c-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2z M1001 80H400000v40H1014z", sqrtSize4: "M473,2793c339.3,-1799.3,509.3,-2700,510,-2702\nc3.3,-7.3,9.3,-11,18,-11H400000v40H1017.7s-90.5,478,-276.2,1466c-185.7,988,\n-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,\n-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200c0,-1.3,-5.3,8.7,-16,30c-10.7,\n21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26s76,-153,76,-153s77,-151,\n77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,606z\nM1001 80H400000v40H1017z", doubleleftarrow: "M262 157\nl10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3\n 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28\n 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5\nc2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5\n 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87\n-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7\n-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z\nm8 0v40h399730v-40zm0 194v40h399730v-40z", doublerightarrow: "M399738 392l\n-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5\n 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88\n-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68\n-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18\n-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782\nc-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3\n-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z", leftarrow: "M400000 241H110l3-3c68.7-52.7 113.7-120\n 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8\n-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247\nc-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208\n 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3\n 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202\n l-3-3h399890zM100 241v40h399900v-40z", leftbrace: "M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117\n-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7\n 5-6 9-10 13-.7 1-7.3 1-20 1H6z", leftbraceunder: "M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13\n 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688\n 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7\n-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z", leftgroup: "M400000 80\nH435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0\n 435 0h399565z", leftgroupunder: "M400000 262\nH435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219\n 435 219h399565z", leftharpoon: "M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3\n-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5\n-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7\n-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z", leftharpoonplus: "M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5\n 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3\n-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7\n-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z\nm0 0v40h400000v-40z", leftharpoondown: "M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333\n 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5\n 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667\n-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z", leftharpoondownplus: "M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12\n 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7\n-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0\nv40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z", lefthook: "M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5\n-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3\n-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21\n 71.5 23h399859zM103 281v-40h399897v40z", leftlinesegment: "M40 281 V428 H0 V94 H40 V241 H400000 v40z\nM40 281 V428 H0 V94 H40 V241 H400000 v40z", leftmapsto: "M40 281 V448H0V74H40V241H400000v40z\nM40 281 V448H0V74H40V241H400000v40z", leftToFrom: "M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23\n-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8\nc28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3\n 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z", longequal: "M0 50 h400000 v40H0z m0 194h40000v40H0z\nM0 50 h400000 v40H0z m0 194h40000v40H0z", midbrace: "M200428 334\nc-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14\n-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7\n 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11\n 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z", midbraceunder: "M199572 214\nc100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14\n 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3\n 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0\n-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z", oiintSize1: "M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6\n-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z\nm368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8\n60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z", oiintSize2: "M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8\n-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z\nm502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2\nc0 110 84 276 504 276s502.4-166 502.4-276z", oiiintSize1: "M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6\n-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z\nm525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0\n85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z", oiiintSize2: "M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8\n-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z\nm770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1\nc0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z", rightarrow: "M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z", rightbrace: "M400000 542l\n-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5\ns-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1\nc124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z", rightbraceunder: "M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3\n 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237\n-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z", rightgroup: "M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0\n 3-1 3-3v-38c-76-158-257-219-435-219H0z", rightgroupunder: "M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18\n 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z", rightharpoon: "M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3\n-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2\n-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58\n 69.2 92 94.5zm0 0v40h399900v-40z", rightharpoonplus: "M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11\n-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7\n 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z\nm0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z", rightharpoondown: "M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8\n 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5\n-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95\n-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z", rightharpoondownplus: "M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8\n 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3\n 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3\n-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z\nm0-194v40h400000v-40zm0 0v40h400000v-40z", righthook: "M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3\n 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0\n-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21\n 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z", rightlinesegment: "M399960 241 V94 h40 V428 h-40 V281 H0 v-40z\nM399960 241 V94 h40 V428 h-40 V281 H0 v-40z", rightToFrom: "M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23\n 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32\n-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142\n-167z M100 147v40h399900v-40zM0 341v40h399900v-40z", twoheadleftarrow: "M0 167c68 40\n 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69\n-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3\n-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19\n-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101\n 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z", twoheadrightarrow: "M400000 167\nc-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3\n 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42\n 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333\n-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70\n 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z", tilde1: "M200 55.538c-77 0-168 73.953-177 73.953-3 0-7\n-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0\n 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0\n 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128\n-68.267.847-113-73.952-191-73.952z", tilde2: "M344 55.266c-142 0-300.638 81.316-311.5 86.418\n-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9\n 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114\nc1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751\n 181.476 676 181.476c-149 0-189-126.21-332-126.21z", tilde3: "M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457\n-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0\n 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697\n 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696\n -338 0-409-156.573-744-156.573z", tilde4: "M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345\n-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409\n 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9\n 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409\n -175.236-744-175.236z", vec: "M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z", widehat1: "M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22\nc-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z", widehat2: "M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z", widehat3: "M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z", widehat4: "M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z", widecheck1: "M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,\n-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z", widecheck2: "M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z", widecheck3: "M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z", widecheck4: "M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z", baraboveleftarrow: "M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202\nc4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5\nc-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130\ns-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47\n121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6\ns2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11\nc0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z\nM100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z", rightarrowabovebar: "M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32\n-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0\n13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39\n-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5\n-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z", baraboveshortleftharpoon: "M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17\nc2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21\nc-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40\nc-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z\nM0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z", rightharpoonaboveshortbar: "M0,241 l0,40c399126,0,399993,0,399993,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z", shortbaraboveleftharpoon: "M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,\n1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,\n-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z\nM93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z", shortrightharpoonabovebar: "M53,241l0,40c398570,0,399437,0,399437,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z" } },
                Y = function() {
                    function e(e) { this.children = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.children = e, this.classes = [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {} } var t = e.prototype; return t.hasClass = function(e) { return B.contains(this.classes, e) }, t.toNode = function() { for (var e = document.createDocumentFragment(), t = 0; t < this.children.length; t++) e.appendChild(this.children[t].toNode()); return e }, t.toMarkup = function() { for (var e = "", t = 0; t < this.children.length; t++) e += this.children[t].toMarkup(); return e }, t.toText = function() { var e = function(e) { return e.toText() }; return this.children.map(e).join("") }, e }(),
                j = function(e) { return e.filter(function(e) { return e }).join(" ") },
                $ = function(e, t, r) { if (this.classes = e || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = r || {}, t) { t.style.isTight() && this.classes.push("mtight"); var n = t.getColor();
                        n && (this.style.color = n) } },
                K = function(e) { var t = document.createElement(e); for (var r in t.className = j(this.classes), this.style) this.style.hasOwnProperty(r) && (t.style[r] = this.style[r]); for (var n in this.attributes) this.attributes.hasOwnProperty(n) && t.setAttribute(n, this.attributes[n]); for (var a = 0; a < this.children.length; a++) t.appendChild(this.children[a].toNode()); return t },
                Z = function(e) { var t = "<" + e;
                    this.classes.length && (t += ' class="' + B.escape(j(this.classes)) + '"'); var r = ""; for (var n in this.style) this.style.hasOwnProperty(n) && (r += B.hyphenate(n) + ":" + this.style[n] + ";"); for (var a in r && (t += ' style="' + B.escape(r) + '"'), this.attributes) this.attributes.hasOwnProperty(a) && (t += " " + a + '="' + B.escape(this.attributes[a]) + '"');
                    t += ">"; for (var i = 0; i < this.children.length; i++) t += this.children[i].toMarkup(); return t += "</" + e + ">" },
                J = function() {
                    function e(e, t, r, n) { this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.width = void 0, this.maxFontSize = void 0, this.style = void 0, $.call(this, e, r, n), this.children = t || [] } var t = e.prototype; return t.setAttribute = function(e, t) { this.attributes[e] = t }, t.hasClass = function(e) { return B.contains(this.classes, e) }, t.toNode = function() { return K.call(this, "span") }, t.toMarkup = function() { return Z.call(this, "span") }, e }(),
                Q = function() {
                    function e(e, t, r, n) { this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, $.call(this, t, n), this.children = r || [], this.setAttribute("href", e) } var t = e.prototype; return t.setAttribute = function(e, t) { this.attributes[e] = t }, t.hasClass = function(e) { return B.contains(this.classes, e) }, t.toNode = function() { return K.call(this, "a") }, t.toMarkup = function() { return Z.call(this, "a") }, e }(),
                ee = { "\xee": "\u0131\u0302", "\xef": "\u0131\u0308", "\xed": "\u0131\u0301", "\xec": "\u0131\u0300" },
                te = function() {
                    function e(e, t, r, n, a, i, o, s) { this.text = void 0, this.height = void 0, this.depth = void 0, this.italic = void 0, this.skew = void 0, this.width = void 0, this.maxFontSize = void 0, this.classes = void 0, this.style = void 0, this.text = e, this.height = t || 0, this.depth = r || 0, this.italic = n || 0, this.skew = a || 0, this.width = i || 0, this.classes = o || [], this.style = s || {}, this.maxFontSize = 0; var l = function(e) { for (var t = 0; t < _.length; t++)
                                for (var r = _[t], n = 0; n < r.blocks.length; n++) { var a = r.blocks[n]; if (e >= a[0] && e <= a[1]) return r.name }
                            return null }(this.text.charCodeAt(0));
                        l && this.classes.push(l + "_fallback"), /[\xee\xef\xed\xec]/.test(this.text) && (this.text = ee[this.text]) } var t = e.prototype; return t.hasClass = function(e) { return B.contains(this.classes, e) }, t.toNode = function() { var e = document.createTextNode(this.text),
                            t = null; for (var r in this.italic > 0 && ((t = document.createElement("span")).style.marginRight = this.italic + "em"), this.classes.length > 0 && ((t = t || document.createElement("span")).className = j(this.classes)), this.style) this.style.hasOwnProperty(r) && ((t = t || document.createElement("span")).style[r] = this.style[r]); return t ? (t.appendChild(e), t) : e }, t.toMarkup = function() { var e = !1,
                            t = "<span";
                        this.classes.length && (e = !0, t += ' class="', t += B.escape(j(this.classes)), t += '"'); var r = ""; for (var n in this.italic > 0 && (r += "margin-right:" + this.italic + "em;"), this.style) this.style.hasOwnProperty(n) && (r += B.hyphenate(n) + ":" + this.style[n] + ";");
                        r && (e = !0, t += ' style="' + B.escape(r) + '"'); var a = B.escape(this.text); return e ? (t += ">", t += a, t += "</span>") : a }, e }(),
                re = function() {
                    function e(e, t) { this.children = void 0, this.attributes = void 0, this.children = e || [], this.attributes = t || {} }
                    var t = e.prototype;
                    return t.toNode = function() {
                        var e = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                        for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && e.setAttribute(t, this.attributes[t]);
                        for (var r = 0; r < this.children.length; r++) e.appendChild(this.children[r].toNode());
                        return e
                    }, t.toMarkup = function() { var e = "<svg"; for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + "='" + this.attributes[t] + "'");
                        e += ">"; for (var r = 0; r < this.children.length; r++) e += this.children[r].toMarkup(); return e += "</svg>" }, e
                }(),
                ne = function() {
                    function e(e, t) { this.pathName = void 0, this.alternate = void 0, this.pathName = e, this.alternate = t } var t = e.prototype; return t.toNode = function() { var e = document.createElementNS("http://www.w3.org/2000/svg", "path"); return this.alternate ? e.setAttribute("d", this.alternate) : e.setAttribute("d", G.path[this.pathName]), e }, t.toMarkup = function() { return this.alternate ? "<path d='" + this.alternate + "'/>" : "<path d='" + G.path[this.pathName] + "'/>" }, e }(),
                ae = function() {
                    function e(e) { this.attributes = void 0, this.attributes = e || {} } var t = e.prototype; return t.toNode = function() { var e = document.createElementNS("http://www.w3.org/2000/svg", "line"); for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && e.setAttribute(t, this.attributes[t]); return e }, t.toMarkup = function() { var e = "<line"; for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + "='" + this.attributes[t] + "'"); return e += "/>" }, e }(),
                ie = {
                    "AMS-Regular": { 65: [0, .68889, 0, 0, .72222], 66: [0, .68889, 0, 0, .66667], 67: [0, .68889, 0, 0, .72222], 68: [0, .68889, 0, 0, .72222], 69: [0, .68889, 0, 0, .66667], 70: [0, .68889, 0, 0, .61111], 71: [0, .68889, 0, 0, .77778], 72: [0, .68889, 0, 0, .77778], 73: [0, .68889, 0, 0, .38889], 74: [.16667, .68889, 0, 0, .5], 75: [0, .68889, 0, 0, .77778], 76: [0, .68889, 0, 0, .66667], 77: [0, .68889, 0, 0, .94445], 78: [0, .68889, 0, 0, .72222], 79: [.16667, .68889, 0, 0, .77778], 80: [0, .68889, 0, 0, .61111], 81: [.16667, .68889, 0, 0, .77778], 82: [0, .68889, 0, 0, .72222], 83: [0, .68889, 0, 0, .55556], 84: [0, .68889, 0, 0, .66667], 85: [0, .68889, 0, 0, .72222], 86: [0, .68889, 0, 0, .72222], 87: [0, .68889, 0, 0, 1], 88: [0, .68889, 0, 0, .72222], 89: [0, .68889, 0, 0, .72222], 90: [0, .68889, 0, 0, .66667], 107: [0, .68889, 0, 0, .55556], 165: [0, .675, .025, 0, .75], 174: [.15559, .69224, 0, 0, .94666], 240: [0, .68889, 0, 0, .55556], 295: [0, .68889, 0, 0, .54028], 710: [0, .825, 0, 0, 2.33334], 732: [0, .9, 0, 0, 2.33334], 770: [0, .825, 0, 0, 2.33334], 771: [0, .9, 0, 0, 2.33334], 989: [.08167, .58167, 0, 0, .77778], 1008: [0, .43056, .04028, 0, .66667], 8245: [0, .54986, 0, 0, .275], 8463: [0, .68889, 0, 0, .54028], 8487: [0, .68889, 0, 0, .72222], 8498: [0, .68889, 0, 0, .55556], 8502: [0, .68889, 0, 0, .66667], 8503: [0, .68889, 0, 0, .44445], 8504: [0, .68889, 0, 0, .66667], 8513: [0, .68889, 0, 0, .63889], 8592: [-.03598, .46402, 0, 0, .5], 8594: [-.03598, .46402, 0, 0, .5], 8602: [-.13313, .36687, 0, 0, 1], 8603: [-.13313, .36687, 0, 0, 1], 8606: [.01354, .52239, 0, 0, 1], 8608: [.01354, .52239, 0, 0, 1], 8610: [.01354, .52239, 0, 0, 1.11111], 8611: [.01354, .52239, 0, 0, 1.11111], 8619: [0, .54986, 0, 0, 1], 8620: [0, .54986, 0, 0, 1], 8621: [-.13313, .37788, 0, 0, 1.38889], 8622: [-.13313, .36687, 0, 0, 1], 8624: [0, .69224, 0, 0, .5], 8625: [0, .69224, 0, 0, .5], 8630: [0, .43056, 0, 0, 1], 8631: [0, .43056, 0, 0, 1], 8634: [.08198, .58198, 0, 0, .77778], 8635: [.08198, .58198, 0, 0, .77778], 8638: [.19444, .69224, 0, 0, .41667], 8639: [.19444, .69224, 0, 0, .41667], 8642: [.19444, .69224, 0, 0, .41667], 8643: [.19444, .69224, 0, 0, .41667], 8644: [.1808, .675, 0, 0, 1], 8646: [.1808, .675, 0, 0, 1], 8647: [.1808, .675, 0, 0, 1], 8648: [.19444, .69224, 0, 0, .83334], 8649: [.1808, .675, 0, 0, 1], 8650: [.19444, .69224, 0, 0, .83334], 8651: [.01354, .52239, 0, 0, 1], 8652: [.01354, .52239, 0, 0, 1], 8653: [-.13313, .36687, 0, 0, 1], 8654: [-.13313, .36687, 0, 0, 1], 8655: [-.13313, .36687, 0, 0, 1], 8666: [.13667, .63667, 0, 0, 1], 8667: [.13667, .63667, 0, 0, 1], 8669: [-.13313, .37788, 0, 0, 1], 8672: [-.064, .437, 0, 0, 1.334], 8674: [-.064, .437, 0, 0, 1.334], 8705: [0, .825, 0, 0, .5], 8708: [0, .68889, 0, 0, .55556], 8709: [.08167, .58167, 0, 0, .77778], 8717: [0, .43056, 0, 0, .42917], 8722: [-.03598, .46402, 0, 0, .5], 8724: [.08198, .69224, 0, 0, .77778], 8726: [.08167, .58167, 0, 0, .77778], 8733: [0, .69224, 0, 0, .77778], 8736: [0, .69224, 0, 0, .72222], 8737: [0, .69224, 0, 0, .72222], 8738: [.03517, .52239, 0, 0, .72222], 8739: [.08167, .58167, 0, 0, .22222], 8740: [.25142, .74111, 0, 0, .27778], 8741: [.08167, .58167, 0, 0, .38889], 8742: [.25142, .74111, 0, 0, .5], 8756: [0, .69224, 0, 0, .66667], 8757: [0, .69224, 0, 0, .66667], 8764: [-.13313, .36687, 0, 0, .77778], 8765: [-.13313, .37788, 0, 0, .77778], 8769: [-.13313, .36687, 0, 0, .77778], 8770: [-.03625, .46375, 0, 0, .77778], 8774: [.30274, .79383, 0, 0, .77778], 8776: [-.01688, .48312, 0, 0, .77778], 8778: [.08167, .58167, 0, 0, .77778], 8782: [.06062, .54986, 0, 0, .77778], 8783: [.06062, .54986, 0, 0, .77778], 8785: [.08198, .58198, 0, 0, .77778], 8786: [.08198, .58198, 0, 0, .77778], 8787: [.08198, .58198, 0, 0, .77778], 8790: [0, .69224, 0, 0, .77778], 8791: [.22958, .72958, 0, 0, .77778], 8796: [.08198, .91667, 0, 0, .77778], 8806: [.25583, .75583, 0, 0, .77778], 8807: [.25583, .75583, 0, 0, .77778], 8808: [.25142, .75726, 0, 0, .77778], 8809: [.25142, .75726, 0, 0, .77778], 8812: [.25583, .75583, 0, 0, .5], 8814: [.20576, .70576, 0, 0, .77778], 8815: [.20576, .70576, 0, 0, .77778], 8816: [.30274, .79383, 0, 0, .77778], 8817: [.30274, .79383, 0, 0, .77778], 8818: [.22958, .72958, 0, 0, .77778], 8819: [.22958, .72958, 0, 0, .77778], 8822: [.1808, .675, 0, 0, .77778], 8823: [.1808, .675, 0, 0, .77778], 8828: [.13667, .63667, 0, 0, .77778], 8829: [.13667, .63667, 0, 0, .77778], 8830: [.22958, .72958, 0, 0, .77778], 8831: [.22958, .72958, 0, 0, .77778], 8832: [.20576, .70576, 0, 0, .77778], 8833: [.20576, .70576, 0, 0, .77778], 8840: [.30274, .79383, 0, 0, .77778], 8841: [.30274, .79383, 0, 0, .77778], 8842: [.13597, .63597, 0, 0, .77778], 8843: [.13597, .63597, 0, 0, .77778], 8847: [.03517, .54986, 0, 0, .77778], 8848: [.03517, .54986, 0, 0, .77778], 8858: [.08198, .58198, 0, 0, .77778], 8859: [.08198, .58198, 0, 0, .77778], 8861: [.08198, .58198, 0, 0, .77778], 8862: [0, .675, 0, 0, .77778], 8863: [0, .675, 0, 0, .77778], 8864: [0, .675, 0, 0, .77778], 8865: [0, .675, 0, 0, .77778], 8872: [0, .69224, 0, 0, .61111], 8873: [0, .69224, 0, 0, .72222], 8874: [0, .69224, 0, 0, .88889], 8876: [0, .68889, 0, 0, .61111], 8877: [0, .68889, 0, 0, .61111], 8878: [0, .68889, 0, 0, .72222], 8879: [0, .68889, 0, 0, .72222], 8882: [.03517, .54986, 0, 0, .77778], 8883: [.03517, .54986, 0, 0, .77778], 8884: [.13667, .63667, 0, 0, .77778], 8885: [.13667, .63667, 0, 0, .77778], 8888: [0, .54986, 0, 0, 1.11111], 8890: [.19444, .43056, 0, 0, .55556], 8891: [.19444, .69224, 0, 0, .61111], 8892: [.19444, .69224, 0, 0, .61111], 8901: [0, .54986, 0, 0, .27778], 8903: [.08167, .58167, 0, 0, .77778], 8905: [.08167, .58167, 0, 0, .77778], 8906: [.08167, .58167, 0, 0, .77778], 8907: [0, .69224, 0, 0, .77778], 8908: [0, .69224, 0, 0, .77778], 8909: [-.03598, .46402, 0, 0, .77778], 8910: [0, .54986, 0, 0, .76042], 8911: [0, .54986, 0, 0, .76042], 8912: [.03517, .54986, 0, 0, .77778], 8913: [.03517, .54986, 0, 0, .77778], 8914: [0, .54986, 0, 0, .66667], 8915: [0, .54986, 0, 0, .66667], 8916: [0, .69224, 0, 0, .66667], 8918: [.0391, .5391, 0, 0, .77778], 8919: [.0391, .5391, 0, 0, .77778], 8920: [.03517, .54986, 0, 0, 1.33334], 8921: [.03517, .54986, 0, 0, 1.33334], 8922: [.38569, .88569, 0, 0, .77778], 8923: [.38569, .88569, 0, 0, .77778], 8926: [.13667, .63667, 0, 0, .77778], 8927: [.13667, .63667, 0, 0, .77778], 8928: [.30274, .79383, 0, 0, .77778], 8929: [.30274, .79383, 0, 0, .77778], 8934: [.23222, .74111, 0, 0, .77778], 8935: [.23222, .74111, 0, 0, .77778], 8936: [.23222, .74111, 0, 0, .77778], 8937: [.23222, .74111, 0, 0, .77778], 8938: [.20576, .70576, 0, 0, .77778], 8939: [.20576, .70576, 0, 0, .77778], 8940: [.30274, .79383, 0, 0, .77778], 8941: [.30274, .79383, 0, 0, .77778], 8994: [.19444, .69224, 0, 0, .77778], 8995: [.19444, .69224, 0, 0, .77778], 9416: [.15559, .69224, 0, 0, .90222], 9484: [0, .69224, 0, 0, .5], 9488: [0, .69224, 0, 0, .5], 9492: [0, .37788, 0, 0, .5], 9496: [0, .37788, 0, 0, .5], 9585: [.19444, .68889, 0, 0, .88889], 9586: [.19444, .74111, 0, 0, .88889], 9632: [0, .675, 0, 0, .77778], 9633: [0, .675, 0, 0, .77778], 9650: [0, .54986, 0, 0, .72222], 9651: [0, .54986, 0, 0, .72222], 9654: [.03517, .54986, 0, 0, .77778], 9660: [0, .54986, 0, 0, .72222], 9661: [0, .54986, 0, 0, .72222], 9664: [.03517, .54986, 0, 0, .77778], 9674: [.11111, .69224, 0, 0, .66667], 9733: [.19444, .69224, 0, 0, .94445], 10003: [0, .69224, 0, 0, .83334], 10016: [0, .69224, 0, 0, .83334], 10731: [.11111, .69224, 0, 0, .66667], 10846: [.19444, .75583, 0, 0, .61111], 10877: [.13667, .63667, 0, 0, .77778], 10878: [.13667, .63667, 0, 0, .77778], 10885: [.25583, .75583, 0, 0, .77778], 10886: [.25583, .75583, 0, 0, .77778], 10887: [.13597, .63597, 0, 0, .77778], 10888: [.13597, .63597, 0, 0, .77778], 10889: [.26167, .75726, 0, 0, .77778], 10890: [.26167, .75726, 0, 0, .77778], 10891: [.48256, .98256, 0, 0, .77778], 10892: [.48256, .98256, 0, 0, .77778], 10901: [.13667, .63667, 0, 0, .77778], 10902: [.13667, .63667, 0, 0, .77778], 10933: [.25142, .75726, 0, 0, .77778], 10934: [.25142, .75726, 0, 0, .77778], 10935: [.26167, .75726, 0, 0, .77778], 10936: [.26167, .75726, 0, 0, .77778], 10937: [.26167, .75726, 0, 0, .77778], 10938: [.26167, .75726, 0, 0, .77778], 10949: [.25583, .75583, 0, 0, .77778], 10950: [.25583, .75583, 0, 0, .77778], 10955: [.28481, .79383, 0, 0, .77778], 10956: [.28481, .79383, 0, 0, .77778], 57350: [.08167, .58167, 0, 0, .22222], 57351: [.08167, .58167, 0, 0, .38889], 57352: [.08167, .58167, 0, 0, .77778], 57353: [0, .43056, .04028, 0, .66667], 57356: [.25142, .75726, 0, 0, .77778], 57357: [.25142, .75726, 0, 0, .77778], 57358: [.41951, .91951, 0, 0, .77778], 57359: [.30274, .79383, 0, 0, .77778], 57360: [.30274, .79383, 0, 0, .77778], 57361: [.41951, .91951, 0, 0, .77778], 57366: [.25142, .75726, 0, 0, .77778], 57367: [.25142, .75726, 0, 0, .77778], 57368: [.25142, .75726, 0, 0, .77778], 57369: [.25142, .75726, 0, 0, .77778], 57370: [.13597, .63597, 0, 0, .77778], 57371: [.13597, .63597, 0, 0, .77778] },
                    "Caligraphic-Regular": { 48: [0, .43056, 0, 0, .5], 49: [0, .43056, 0, 0, .5], 50: [0, .43056, 0, 0, .5], 51: [.19444, .43056, 0, 0, .5], 52: [.19444, .43056, 0, 0, .5], 53: [.19444, .43056, 0, 0, .5], 54: [0, .64444, 0, 0, .5], 55: [.19444, .43056, 0, 0, .5], 56: [0, .64444, 0, 0, .5], 57: [.19444, .43056, 0, 0, .5], 65: [0, .68333, 0, .19445, .79847], 66: [0, .68333, .03041, .13889, .65681], 67: [0, .68333, .05834, .13889, .52653], 68: [0, .68333, .02778, .08334, .77139], 69: [0, .68333, .08944, .11111, .52778], 70: [0, .68333, .09931, .11111, .71875], 71: [.09722, .68333, .0593, .11111, .59487], 72: [0, .68333, .00965, .11111, .84452], 73: [0, .68333, .07382, 0, .54452], 74: [.09722, .68333, .18472, .16667, .67778], 75: [0, .68333, .01445, .05556, .76195], 76: [0, .68333, 0, .13889, .68972], 77: [0, .68333, 0, .13889, 1.2009], 78: [0, .68333, .14736, .08334, .82049], 79: [0, .68333, .02778, .11111, .79611], 80: [0, .68333, .08222, .08334, .69556], 81: [.09722, .68333, 0, .11111, .81667], 82: [0, .68333, 0, .08334, .8475], 83: [0, .68333, .075, .13889, .60556], 84: [0, .68333, .25417, 0, .54464], 85: [0, .68333, .09931, .08334, .62583], 86: [0, .68333, .08222, 0, .61278], 87: [0, .68333, .08222, .08334, .98778], 88: [0, .68333, .14643, .13889, .7133], 89: [.09722, .68333, .08222, .08334, .66834], 90: [0, .68333, .07944, .13889, .72473] },
                    "Fraktur-Regular": { 33: [0, .69141, 0, 0, .29574], 34: [0, .69141, 0, 0, .21471], 38: [0, .69141, 0, 0, .73786], 39: [0, .69141, 0, 0, .21201], 40: [.24982, .74947, 0, 0, .38865], 41: [.24982, .74947, 0, 0, .38865], 42: [0, .62119, 0, 0, .27764], 43: [.08319, .58283, 0, 0, .75623], 44: [0, .10803, 0, 0, .27764], 45: [.08319, .58283, 0, 0, .75623], 46: [0, .10803, 0, 0, .27764], 47: [.24982, .74947, 0, 0, .50181], 48: [0, .47534, 0, 0, .50181], 49: [0, .47534, 0, 0, .50181], 50: [0, .47534, 0, 0, .50181], 51: [.18906, .47534, 0, 0, .50181], 52: [.18906, .47534, 0, 0, .50181], 53: [.18906, .47534, 0, 0, .50181], 54: [0, .69141, 0, 0, .50181], 55: [.18906, .47534, 0, 0, .50181], 56: [0, .69141, 0, 0, .50181], 57: [.18906, .47534, 0, 0, .50181], 58: [0, .47534, 0, 0, .21606], 59: [.12604, .47534, 0, 0, .21606], 61: [-.13099, .36866, 0, 0, .75623], 63: [0, .69141, 0, 0, .36245], 65: [0, .69141, 0, 0, .7176], 66: [0, .69141, 0, 0, .88397], 67: [0, .69141, 0, 0, .61254], 68: [0, .69141, 0, 0, .83158], 69: [0, .69141, 0, 0, .66278], 70: [.12604, .69141, 0, 0, .61119], 71: [0, .69141, 0, 0, .78539], 72: [.06302, .69141, 0, 0, .7203], 73: [0, .69141, 0, 0, .55448], 74: [.12604, .69141, 0, 0, .55231], 75: [0, .69141, 0, 0, .66845], 76: [0, .69141, 0, 0, .66602], 77: [0, .69141, 0, 0, 1.04953], 78: [0, .69141, 0, 0, .83212], 79: [0, .69141, 0, 0, .82699], 80: [.18906, .69141, 0, 0, .82753], 81: [.03781, .69141, 0, 0, .82699], 82: [0, .69141, 0, 0, .82807], 83: [0, .69141, 0, 0, .82861], 84: [0, .69141, 0, 0, .66899], 85: [0, .69141, 0, 0, .64576], 86: [0, .69141, 0, 0, .83131], 87: [0, .69141, 0, 0, 1.04602], 88: [0, .69141, 0, 0, .71922], 89: [.18906, .69141, 0, 0, .83293], 90: [.12604, .69141, 0, 0, .60201], 91: [.24982, .74947, 0, 0, .27764], 93: [.24982, .74947, 0, 0, .27764], 94: [0, .69141, 0, 0, .49965], 97: [0, .47534, 0, 0, .50046], 98: [0, .69141, 0, 0, .51315], 99: [0, .47534, 0, 0, .38946], 100: [0, .62119, 0, 0, .49857], 101: [0, .47534, 0, 0, .40053], 102: [.18906, .69141, 0, 0, .32626], 103: [.18906, .47534, 0, 0, .5037], 104: [.18906, .69141, 0, 0, .52126], 105: [0, .69141, 0, 0, .27899], 106: [0, .69141, 0, 0, .28088], 107: [0, .69141, 0, 0, .38946], 108: [0, .69141, 0, 0, .27953], 109: [0, .47534, 0, 0, .76676], 110: [0, .47534, 0, 0, .52666], 111: [0, .47534, 0, 0, .48885], 112: [.18906, .52396, 0, 0, .50046], 113: [.18906, .47534, 0, 0, .48912], 114: [0, .47534, 0, 0, .38919], 115: [0, .47534, 0, 0, .44266], 116: [0, .62119, 0, 0, .33301], 117: [0, .47534, 0, 0, .5172], 118: [0, .52396, 0, 0, .5118], 119: [0, .52396, 0, 0, .77351], 120: [.18906, .47534, 0, 0, .38865], 121: [.18906, .47534, 0, 0, .49884], 122: [.18906, .47534, 0, 0, .39054], 8216: [0, .69141, 0, 0, .21471], 8217: [0, .69141, 0, 0, .21471], 58112: [0, .62119, 0, 0, .49749], 58113: [0, .62119, 0, 0, .4983], 58114: [.18906, .69141, 0, 0, .33328], 58115: [.18906, .69141, 0, 0, .32923], 58116: [.18906, .47534, 0, 0, .50343], 58117: [0, .69141, 0, 0, .33301], 58118: [0, .62119, 0, 0, .33409], 58119: [0, .47534, 0, 0, .50073] },
                    "Main-Bold": { 33: [0, .69444, 0, 0, .35], 34: [0, .69444, 0, 0, .60278], 35: [.19444, .69444, 0, 0, .95833], 36: [.05556, .75, 0, 0, .575], 37: [.05556, .75, 0, 0, .95833], 38: [0, .69444, 0, 0, .89444], 39: [0, .69444, 0, 0, .31944], 40: [.25, .75, 0, 0, .44722], 41: [.25, .75, 0, 0, .44722], 42: [0, .75, 0, 0, .575], 43: [.13333, .63333, 0, 0, .89444], 44: [.19444, .15556, 0, 0, .31944], 45: [0, .44444, 0, 0, .38333], 46: [0, .15556, 0, 0, .31944], 47: [.25, .75, 0, 0, .575], 48: [0, .64444, 0, 0, .575], 49: [0, .64444, 0, 0, .575], 50: [0, .64444, 0, 0, .575], 51: [0, .64444, 0, 0, .575], 52: [0, .64444, 0, 0, .575], 53: [0, .64444, 0, 0, .575], 54: [0, .64444, 0, 0, .575], 55: [0, .64444, 0, 0, .575], 56: [0, .64444, 0, 0, .575], 57: [0, .64444, 0, 0, .575], 58: [0, .44444, 0, 0, .31944], 59: [.19444, .44444, 0, 0, .31944], 60: [.08556, .58556, 0, 0, .89444], 61: [-.10889, .39111, 0, 0, .89444], 62: [.08556, .58556, 0, 0, .89444], 63: [0, .69444, 0, 0, .54305], 64: [0, .69444, 0, 0, .89444], 65: [0, .68611, 0, 0, .86944], 66: [0, .68611, 0, 0, .81805], 67: [0, .68611, 0, 0, .83055], 68: [0, .68611, 0, 0, .88194], 69: [0, .68611, 0, 0, .75555], 70: [0, .68611, 0, 0, .72361], 71: [0, .68611, 0, 0, .90416], 72: [0, .68611, 0, 0, .9], 73: [0, .68611, 0, 0, .43611], 74: [0, .68611, 0, 0, .59444], 75: [0, .68611, 0, 0, .90138], 76: [0, .68611, 0, 0, .69166], 77: [0, .68611, 0, 0, 1.09166], 78: [0, .68611, 0, 0, .9], 79: [0, .68611, 0, 0, .86388], 80: [0, .68611, 0, 0, .78611], 81: [.19444, .68611, 0, 0, .86388], 82: [0, .68611, 0, 0, .8625], 83: [0, .68611, 0, 0, .63889], 84: [0, .68611, 0, 0, .8], 85: [0, .68611, 0, 0, .88472], 86: [0, .68611, .01597, 0, .86944], 87: [0, .68611, .01597, 0, 1.18888], 88: [0, .68611, 0, 0, .86944], 89: [0, .68611, .02875, 0, .86944], 90: [0, .68611, 0, 0, .70277], 91: [.25, .75, 0, 0, .31944], 92: [.25, .75, 0, 0, .575], 93: [.25, .75, 0, 0, .31944], 94: [0, .69444, 0, 0, .575], 95: [.31, .13444, .03194, 0, .575], 97: [0, .44444, 0, 0, .55902], 98: [0, .69444, 0, 0, .63889], 99: [0, .44444, 0, 0, .51111], 100: [0, .69444, 0, 0, .63889], 101: [0, .44444, 0, 0, .52708], 102: [0, .69444, .10903, 0, .35139], 103: [.19444, .44444, .01597, 0, .575], 104: [0, .69444, 0, 0, .63889], 105: [0, .69444, 0, 0, .31944], 106: [.19444, .69444, 0, 0, .35139], 107: [0, .69444, 0, 0, .60694], 108: [0, .69444, 0, 0, .31944], 109: [0, .44444, 0, 0, .95833], 110: [0, .44444, 0, 0, .63889], 111: [0, .44444, 0, 0, .575], 112: [.19444, .44444, 0, 0, .63889], 113: [.19444, .44444, 0, 0, .60694], 114: [0, .44444, 0, 0, .47361], 115: [0, .44444, 0, 0, .45361], 116: [0, .63492, 0, 0, .44722], 117: [0, .44444, 0, 0, .63889], 118: [0, .44444, .01597, 0, .60694], 119: [0, .44444, .01597, 0, .83055], 120: [0, .44444, 0, 0, .60694], 121: [.19444, .44444, .01597, 0, .60694], 122: [0, .44444, 0, 0, .51111], 123: [.25, .75, 0, 0, .575], 124: [.25, .75, 0, 0, .31944], 125: [.25, .75, 0, 0, .575], 126: [.35, .34444, 0, 0, .575], 168: [0, .69444, 0, 0, .575], 172: [0, .44444, 0, 0, .76666], 176: [0, .69444, 0, 0, .86944], 177: [.13333, .63333, 0, 0, .89444], 184: [.17014, 0, 0, 0, .51111], 198: [0, .68611, 0, 0, 1.04166], 215: [.13333, .63333, 0, 0, .89444], 216: [.04861, .73472, 0, 0, .89444], 223: [0, .69444, 0, 0, .59722], 230: [0, .44444, 0, 0, .83055], 247: [.13333, .63333, 0, 0, .89444], 248: [.09722, .54167, 0, 0, .575], 305: [0, .44444, 0, 0, .31944], 338: [0, .68611, 0, 0, 1.16944], 339: [0, .44444, 0, 0, .89444], 567: [.19444, .44444, 0, 0, .35139], 710: [0, .69444, 0, 0, .575], 711: [0, .63194, 0, 0, .575], 713: [0, .59611, 0, 0, .575], 714: [0, .69444, 0, 0, .575], 715: [0, .69444, 0, 0, .575], 728: [0, .69444, 0, 0, .575], 729: [0, .69444, 0, 0, .31944], 730: [0, .69444, 0, 0, .86944], 732: [0, .69444, 0, 0, .575], 733: [0, .69444, 0, 0, .575], 915: [0, .68611, 0, 0, .69166], 916: [0, .68611, 0, 0, .95833], 920: [0, .68611, 0, 0, .89444], 923: [0, .68611, 0, 0, .80555], 926: [0, .68611, 0, 0, .76666], 928: [0, .68611, 0, 0, .9], 931: [0, .68611, 0, 0, .83055], 933: [0, .68611, 0, 0, .89444], 934: [0, .68611, 0, 0, .83055], 936: [0, .68611, 0, 0, .89444], 937: [0, .68611, 0, 0, .83055], 8211: [0, .44444, .03194, 0, .575], 8212: [0, .44444, .03194, 0, 1.14999], 8216: [0, .69444, 0, 0, .31944], 8217: [0, .69444, 0, 0, .31944], 8220: [0, .69444, 0, 0, .60278], 8221: [0, .69444, 0, 0, .60278], 8224: [.19444, .69444, 0, 0, .51111], 8225: [.19444, .69444, 0, 0, .51111], 8242: [0, .55556, 0, 0, .34444], 8407: [0, .72444, .15486, 0, .575], 8463: [0, .69444, 0, 0, .66759], 8465: [0, .69444, 0, 0, .83055], 8467: [0, .69444, 0, 0, .47361], 8472: [.19444, .44444, 0, 0, .74027], 8476: [0, .69444, 0, 0, .83055], 8501: [0, .69444, 0, 0, .70277], 8592: [-.10889, .39111, 0, 0, 1.14999], 8593: [.19444, .69444, 0, 0, .575], 8594: [-.10889, .39111, 0, 0, 1.14999], 8595: [.19444, .69444, 0, 0, .575], 8596: [-.10889, .39111, 0, 0, 1.14999], 8597: [.25, .75, 0, 0, .575], 8598: [.19444, .69444, 0, 0, 1.14999], 8599: [.19444, .69444, 0, 0, 1.14999], 8600: [.19444, .69444, 0, 0, 1.14999], 8601: [.19444, .69444, 0, 0, 1.14999], 8636: [-.10889, .39111, 0, 0, 1.14999], 8637: [-.10889, .39111, 0, 0, 1.14999], 8640: [-.10889, .39111, 0, 0, 1.14999], 8641: [-.10889, .39111, 0, 0, 1.14999], 8656: [-.10889, .39111, 0, 0, 1.14999], 8657: [.19444, .69444, 0, 0, .70277], 8658: [-.10889, .39111, 0, 0, 1.14999], 8659: [.19444, .69444, 0, 0, .70277], 8660: [-.10889, .39111, 0, 0, 1.14999], 8661: [.25, .75, 0, 0, .70277], 8704: [0, .69444, 0, 0, .63889], 8706: [0, .69444, .06389, 0, .62847], 8707: [0, .69444, 0, 0, .63889], 8709: [.05556, .75, 0, 0, .575], 8711: [0, .68611, 0, 0, .95833], 8712: [.08556, .58556, 0, 0, .76666], 8715: [.08556, .58556, 0, 0, .76666], 8722: [.13333, .63333, 0, 0, .89444], 8723: [.13333, .63333, 0, 0, .89444], 8725: [.25, .75, 0, 0, .575], 8726: [.25, .75, 0, 0, .575], 8727: [-.02778, .47222, 0, 0, .575], 8728: [-.02639, .47361, 0, 0, .575], 8729: [-.02639, .47361, 0, 0, .575], 8730: [.18, .82, 0, 0, .95833], 8733: [0, .44444, 0, 0, .89444], 8734: [0, .44444, 0, 0, 1.14999], 8736: [0, .69224, 0, 0, .72222], 8739: [.25, .75, 0, 0, .31944], 8741: [.25, .75, 0, 0, .575], 8743: [0, .55556, 0, 0, .76666], 8744: [0, .55556, 0, 0, .76666], 8745: [0, .55556, 0, 0, .76666], 8746: [0, .55556, 0, 0, .76666], 8747: [.19444, .69444, .12778, 0, .56875], 8764: [-.10889, .39111, 0, 0, .89444], 8768: [.19444, .69444, 0, 0, .31944], 8771: [.00222, .50222, 0, 0, .89444], 8776: [.02444, .52444, 0, 0, .89444], 8781: [.00222, .50222, 0, 0, .89444], 8801: [.00222, .50222, 0, 0, .89444], 8804: [.19667, .69667, 0, 0, .89444], 8805: [.19667, .69667, 0, 0, .89444], 8810: [.08556, .58556, 0, 0, 1.14999], 8811: [.08556, .58556, 0, 0, 1.14999], 8826: [.08556, .58556, 0, 0, .89444], 8827: [.08556, .58556, 0, 0, .89444], 8834: [.08556, .58556, 0, 0, .89444], 8835: [.08556, .58556, 0, 0, .89444], 8838: [.19667, .69667, 0, 0, .89444], 8839: [.19667, .69667, 0, 0, .89444], 8846: [0, .55556, 0, 0, .76666], 8849: [.19667, .69667, 0, 0, .89444], 8850: [.19667, .69667, 0, 0, .89444], 8851: [0, .55556, 0, 0, .76666], 8852: [0, .55556, 0, 0, .76666], 8853: [.13333, .63333, 0, 0, .89444], 8854: [.13333, .63333, 0, 0, .89444], 8855: [.13333, .63333, 0, 0, .89444], 8856: [.13333, .63333, 0, 0, .89444], 8857: [.13333, .63333, 0, 0, .89444], 8866: [0, .69444, 0, 0, .70277], 8867: [0, .69444, 0, 0, .70277], 8868: [0, .69444, 0, 0, .89444], 8869: [0, .69444, 0, 0, .89444], 8900: [-.02639, .47361, 0, 0, .575], 8901: [-.02639, .47361, 0, 0, .31944], 8902: [-.02778, .47222, 0, 0, .575], 8968: [.25, .75, 0, 0, .51111], 8969: [.25, .75, 0, 0, .51111], 8970: [.25, .75, 0, 0, .51111], 8971: [.25, .75, 0, 0, .51111], 8994: [-.13889, .36111, 0, 0, 1.14999], 8995: [-.13889, .36111, 0, 0, 1.14999], 9651: [.19444, .69444, 0, 0, 1.02222], 9657: [-.02778, .47222, 0, 0, .575], 9661: [.19444, .69444, 0, 0, 1.02222], 9667: [-.02778, .47222, 0, 0, .575], 9711: [.19444, .69444, 0, 0, 1.14999], 9824: [.12963, .69444, 0, 0, .89444], 9825: [.12963, .69444, 0, 0, .89444], 9826: [.12963, .69444, 0, 0, .89444], 9827: [.12963, .69444, 0, 0, .89444], 9837: [0, .75, 0, 0, .44722], 9838: [.19444, .69444, 0, 0, .44722], 9839: [.19444, .69444, 0, 0, .44722], 10216: [.25, .75, 0, 0, .44722], 10217: [.25, .75, 0, 0, .44722], 10815: [0, .68611, 0, 0, .9], 10927: [.19667, .69667, 0, 0, .89444], 10928: [.19667, .69667, 0, 0, .89444], 57376: [.19444, .69444, 0, 0, 0] },
                    "Main-BoldItalic": { 33: [0, .69444, .11417, 0, .38611], 34: [0, .69444, .07939, 0, .62055], 35: [.19444, .69444, .06833, 0, .94444], 37: [.05556, .75, .12861, 0, .94444], 38: [0, .69444, .08528, 0, .88555], 39: [0, .69444, .12945, 0, .35555], 40: [.25, .75, .15806, 0, .47333], 41: [.25, .75, .03306, 0, .47333], 42: [0, .75, .14333, 0, .59111], 43: [.10333, .60333, .03306, 0, .88555], 44: [.19444, .14722, 0, 0, .35555], 45: [0, .44444, .02611, 0, .41444], 46: [0, .14722, 0, 0, .35555], 47: [.25, .75, .15806, 0, .59111], 48: [0, .64444, .13167, 0, .59111], 49: [0, .64444, .13167, 0, .59111], 50: [0, .64444, .13167, 0, .59111], 51: [0, .64444, .13167, 0, .59111], 52: [.19444, .64444, .13167, 0, .59111], 53: [0, .64444, .13167, 0, .59111], 54: [0, .64444, .13167, 0, .59111], 55: [.19444, .64444, .13167, 0, .59111], 56: [0, .64444, .13167, 0, .59111], 57: [0, .64444, .13167, 0, .59111], 58: [0, .44444, .06695, 0, .35555], 59: [.19444, .44444, .06695, 0, .35555], 61: [-.10889, .39111, .06833, 0, .88555], 63: [0, .69444, .11472, 0, .59111], 64: [0, .69444, .09208, 0, .88555], 65: [0, .68611, 0, 0, .86555], 66: [0, .68611, .0992, 0, .81666], 67: [0, .68611, .14208, 0, .82666], 68: [0, .68611, .09062, 0, .87555], 69: [0, .68611, .11431, 0, .75666], 70: [0, .68611, .12903, 0, .72722], 71: [0, .68611, .07347, 0, .89527], 72: [0, .68611, .17208, 0, .8961], 73: [0, .68611, .15681, 0, .47166], 74: [0, .68611, .145, 0, .61055], 75: [0, .68611, .14208, 0, .89499], 76: [0, .68611, 0, 0, .69777], 77: [0, .68611, .17208, 0, 1.07277], 78: [0, .68611, .17208, 0, .8961], 79: [0, .68611, .09062, 0, .85499], 80: [0, .68611, .0992, 0, .78721], 81: [.19444, .68611, .09062, 0, .85499], 82: [0, .68611, .02559, 0, .85944], 83: [0, .68611, .11264, 0, .64999], 84: [0, .68611, .12903, 0, .7961], 85: [0, .68611, .17208, 0, .88083], 86: [0, .68611, .18625, 0, .86555], 87: [0, .68611, .18625, 0, 1.15999], 88: [0, .68611, .15681, 0, .86555], 89: [0, .68611, .19803, 0, .86555], 90: [0, .68611, .14208, 0, .70888], 91: [.25, .75, .1875, 0, .35611], 93: [.25, .75, .09972, 0, .35611], 94: [0, .69444, .06709, 0, .59111], 95: [.31, .13444, .09811, 0, .59111], 97: [0, .44444, .09426, 0, .59111], 98: [0, .69444, .07861, 0, .53222], 99: [0, .44444, .05222, 0, .53222], 100: [0, .69444, .10861, 0, .59111], 101: [0, .44444, .085, 0, .53222], 102: [.19444, .69444, .21778, 0, .4], 103: [.19444, .44444, .105, 0, .53222], 104: [0, .69444, .09426, 0, .59111], 105: [0, .69326, .11387, 0, .35555], 106: [.19444, .69326, .1672, 0, .35555], 107: [0, .69444, .11111, 0, .53222], 108: [0, .69444, .10861, 0, .29666], 109: [0, .44444, .09426, 0, .94444], 110: [0, .44444, .09426, 0, .64999], 111: [0, .44444, .07861, 0, .59111], 112: [.19444, .44444, .07861, 0, .59111], 113: [.19444, .44444, .105, 0, .53222], 114: [0, .44444, .11111, 0, .50167], 115: [0, .44444, .08167, 0, .48694], 116: [0, .63492, .09639, 0, .385], 117: [0, .44444, .09426, 0, .62055], 118: [0, .44444, .11111, 0, .53222], 119: [0, .44444, .11111, 0, .76777], 120: [0, .44444, .12583, 0, .56055], 121: [.19444, .44444, .105, 0, .56166], 122: [0, .44444, .13889, 0, .49055], 126: [.35, .34444, .11472, 0, .59111], 163: [0, .69444, 0, 0, .86853], 168: [0, .69444, .11473, 0, .59111], 176: [0, .69444, 0, 0, .94888], 184: [.17014, 0, 0, 0, .53222], 198: [0, .68611, .11431, 0, 1.02277], 216: [.04861, .73472, .09062, 0, .88555], 223: [.19444, .69444, .09736, 0, .665], 230: [0, .44444, .085, 0, .82666], 248: [.09722, .54167, .09458, 0, .59111], 305: [0, .44444, .09426, 0, .35555], 338: [0, .68611, .11431, 0, 1.14054], 339: [0, .44444, .085, 0, .82666], 567: [.19444, .44444, .04611, 0, .385], 710: [0, .69444, .06709, 0, .59111], 711: [0, .63194, .08271, 0, .59111], 713: [0, .59444, .10444, 0, .59111], 714: [0, .69444, .08528, 0, .59111], 715: [0, .69444, 0, 0, .59111], 728: [0, .69444, .10333, 0, .59111], 729: [0, .69444, .12945, 0, .35555], 730: [0, .69444, 0, 0, .94888], 732: [0, .69444, .11472, 0, .59111], 733: [0, .69444, .11472, 0, .59111], 915: [0, .68611, .12903, 0, .69777], 916: [0, .68611, 0, 0, .94444], 920: [0, .68611, .09062, 0, .88555], 923: [0, .68611, 0, 0, .80666], 926: [0, .68611, .15092, 0, .76777], 928: [0, .68611, .17208, 0, .8961], 931: [0, .68611, .11431, 0, .82666], 933: [0, .68611, .10778, 0, .88555], 934: [0, .68611, .05632, 0, .82666], 936: [0, .68611, .10778, 0, .88555], 937: [0, .68611, .0992, 0, .82666], 8211: [0, .44444, .09811, 0, .59111], 8212: [0, .44444, .09811, 0, 1.18221], 8216: [0, .69444, .12945, 0, .35555], 8217: [0, .69444, .12945, 0, .35555], 8220: [0, .69444, .16772, 0, .62055], 8221: [0, .69444, .07939, 0, .62055] },
                    "Main-Italic": { 33: [0, .69444, .12417, 0, .30667], 34: [0, .69444, .06961, 0, .51444], 35: [.19444, .69444, .06616, 0, .81777], 37: [.05556, .75, .13639, 0, .81777], 38: [0, .69444, .09694, 0, .76666], 39: [0, .69444, .12417, 0, .30667], 40: [.25, .75, .16194, 0, .40889], 41: [.25, .75, .03694, 0, .40889], 42: [0, .75, .14917, 0, .51111], 43: [.05667, .56167, .03694, 0, .76666], 44: [.19444, .10556, 0, 0, .30667], 45: [0, .43056, .02826, 0, .35778], 46: [0, .10556, 0, 0, .30667], 47: [.25, .75, .16194, 0, .51111], 48: [0, .64444, .13556, 0, .51111], 49: [0, .64444, .13556, 0, .51111], 50: [0, .64444, .13556, 0, .51111], 51: [0, .64444, .13556, 0, .51111], 52: [.19444, .64444, .13556, 0, .51111], 53: [0, .64444, .13556, 0, .51111], 54: [0, .64444, .13556, 0, .51111], 55: [.19444, .64444, .13556, 0, .51111], 56: [0, .64444, .13556, 0, .51111], 57: [0, .64444, .13556, 0, .51111], 58: [0, .43056, .0582, 0, .30667], 59: [.19444, .43056, .0582, 0, .30667], 61: [-.13313, .36687, .06616, 0, .76666], 63: [0, .69444, .1225, 0, .51111], 64: [0, .69444, .09597, 0, .76666], 65: [0, .68333, 0, 0, .74333], 66: [0, .68333, .10257, 0, .70389], 67: [0, .68333, .14528, 0, .71555], 68: [0, .68333, .09403, 0, .755], 69: [0, .68333, .12028, 0, .67833], 70: [0, .68333, .13305, 0, .65277], 71: [0, .68333, .08722, 0, .77361], 72: [0, .68333, .16389, 0, .74333], 73: [0, .68333, .15806, 0, .38555], 74: [0, .68333, .14028, 0, .525], 75: [0, .68333, .14528, 0, .76888], 76: [0, .68333, 0, 0, .62722], 77: [0, .68333, .16389, 0, .89666], 78: [0, .68333, .16389, 0, .74333], 79: [0, .68333, .09403, 0, .76666], 80: [0, .68333, .10257, 0, .67833], 81: [.19444, .68333, .09403, 0, .76666], 82: [0, .68333, .03868, 0, .72944], 83: [0, .68333, .11972, 0, .56222], 84: [0, .68333, .13305, 0, .71555], 85: [0, .68333, .16389, 0, .74333], 86: [0, .68333, .18361, 0, .74333], 87: [0, .68333, .18361, 0, .99888], 88: [0, .68333, .15806, 0, .74333], 89: [0, .68333, .19383, 0, .74333], 90: [0, .68333, .14528, 0, .61333], 91: [.25, .75, .1875, 0, .30667], 93: [.25, .75, .10528, 0, .30667], 94: [0, .69444, .06646, 0, .51111], 95: [.31, .12056, .09208, 0, .51111], 97: [0, .43056, .07671, 0, .51111], 98: [0, .69444, .06312, 0, .46], 99: [0, .43056, .05653, 0, .46], 100: [0, .69444, .10333, 0, .51111], 101: [0, .43056, .07514, 0, .46], 102: [.19444, .69444, .21194, 0, .30667], 103: [.19444, .43056, .08847, 0, .46], 104: [0, .69444, .07671, 0, .51111], 105: [0, .65536, .1019, 0, .30667], 106: [.19444, .65536, .14467, 0, .30667], 107: [0, .69444, .10764, 0, .46], 108: [0, .69444, .10333, 0, .25555], 109: [0, .43056, .07671, 0, .81777], 110: [0, .43056, .07671, 0, .56222], 111: [0, .43056, .06312, 0, .51111], 112: [.19444, .43056, .06312, 0, .51111], 113: [.19444, .43056, .08847, 0, .46], 114: [0, .43056, .10764, 0, .42166], 115: [0, .43056, .08208, 0, .40889], 116: [0, .61508, .09486, 0, .33222], 117: [0, .43056, .07671, 0, .53666], 118: [0, .43056, .10764, 0, .46], 119: [0, .43056, .10764, 0, .66444], 120: [0, .43056, .12042, 0, .46389], 121: [.19444, .43056, .08847, 0, .48555], 122: [0, .43056, .12292, 0, .40889], 126: [.35, .31786, .11585, 0, .51111], 163: [0, .69444, 0, 0, .76909], 168: [0, .66786, .10474, 0, .51111], 176: [0, .69444, 0, 0, .83129], 184: [.17014, 0, 0, 0, .46], 198: [0, .68333, .12028, 0, .88277], 216: [.04861, .73194, .09403, 0, .76666], 223: [.19444, .69444, .10514, 0, .53666], 230: [0, .43056, .07514, 0, .71555], 248: [.09722, .52778, .09194, 0, .51111], 305: [0, .43056, 0, .02778, .32246], 338: [0, .68333, .12028, 0, .98499], 339: [0, .43056, .07514, 0, .71555], 567: [.19444, .43056, 0, .08334, .38403], 710: [0, .69444, .06646, 0, .51111], 711: [0, .62847, .08295, 0, .51111], 713: [0, .56167, .10333, 0, .51111], 714: [0, .69444, .09694, 0, .51111], 715: [0, .69444, 0, 0, .51111], 728: [0, .69444, .10806, 0, .51111], 729: [0, .66786, .11752, 0, .30667], 730: [0, .69444, 0, 0, .83129], 732: [0, .66786, .11585, 0, .51111], 733: [0, .69444, .1225, 0, .51111], 915: [0, .68333, .13305, 0, .62722], 916: [0, .68333, 0, 0, .81777], 920: [0, .68333, .09403, 0, .76666], 923: [0, .68333, 0, 0, .69222], 926: [0, .68333, .15294, 0, .66444], 928: [0, .68333, .16389, 0, .74333], 931: [0, .68333, .12028, 0, .71555], 933: [0, .68333, .11111, 0, .76666], 934: [0, .68333, .05986, 0, .71555], 936: [0, .68333, .11111, 0, .76666], 937: [0, .68333, .10257, 0, .71555], 8211: [0, .43056, .09208, 0, .51111], 8212: [0, .43056, .09208, 0, 1.02222], 8216: [0, .69444, .12417, 0, .30667], 8217: [0, .69444, .12417, 0, .30667], 8220: [0, .69444, .1685, 0, .51444], 8221: [0, .69444, .06961, 0, .51444], 8463: [0, .68889, 0, 0, .54028] },
                    "Main-Regular": {
                        32: [0, 0, 0, 0, .25],
                        33: [0, .69444, 0, 0, .27778],
                        34: [0, .69444, 0, 0, .5],
                        35: [.19444, .69444, 0, 0, .83334],
                        36: [.05556, .75, 0, 0, .5],
                        37: [.05556, .75, 0, 0, .83334],
                        38: [0, .69444, 0, 0, .77778],
                        39: [0, .69444, 0, 0, .27778],
                        40: [.25, .75, 0, 0, .38889],
                        41: [.25, .75, 0, 0, .38889],
                        42: [0, .75, 0, 0, .5],
                        43: [.08333, .58333, 0, 0, .77778],
                        44: [.19444, .10556, 0, 0, .27778],
                        45: [0, .43056, 0, 0, .33333],
                        46: [0, .10556, 0, 0, .27778],
                        47: [.25, .75, 0, 0, .5],
                        48: [0, .64444, 0, 0, .5],
                        49: [0, .64444, 0, 0, .5],
                        50: [0, .64444, 0, 0, .5],
                        51: [0, .64444, 0, 0, .5],
                        52: [0, .64444, 0, 0, .5],
                        53: [0, .64444, 0, 0, .5],
                        54: [0, .64444, 0, 0, .5],
                        55: [0, .64444, 0, 0, .5],
                        56: [0, .64444, 0, 0, .5],
                        57: [0, .64444, 0, 0, .5],
                        58: [0, .43056, 0, 0, .27778],
                        59: [.19444, .43056, 0, 0, .27778],
                        60: [.0391, .5391, 0, 0, .77778],
                        61: [-.13313, .36687, 0, 0, .77778],
                        62: [.0391, .5391, 0, 0, .77778],
                        63: [0, .69444, 0, 0, .47222],
                        64: [0, .69444, 0, 0, .77778],
                        65: [0, .68333, 0, 0, .75],
                        66: [0, .68333, 0, 0, .70834],
                        67: [0, .68333, 0, 0, .72222],
                        68: [0, .68333, 0, 0, .76389],
                        69: [0, .68333, 0, 0, .68056],
                        70: [0, .68333, 0, 0, .65278],
                        71: [0, .68333, 0, 0, .78472],
                        72: [0, .68333, 0, 0, .75],
                        73: [0, .68333, 0, 0, .36111],
                        74: [0, .68333, 0, 0, .51389],
                        75: [0, .68333, 0, 0, .77778],
                        76: [0, .68333, 0, 0, .625],
                        77: [0, .68333, 0, 0, .91667],
                        78: [0, .68333, 0, 0, .75],
                        79: [0, .68333, 0, 0, .77778],
                        80: [0, .68333, 0, 0, .68056],
                        81: [.19444, .68333, 0, 0, .77778],
                        82: [0, .68333, 0, 0, .73611],
                        83: [0, .68333, 0, 0, .55556],
                        84: [0, .68333, 0, 0, .72222],
                        85: [0, .68333, 0, 0, .75],
                        86: [0, .68333, .01389, 0, .75],
                        87: [0, .68333, .01389, 0, 1.02778],
                        88: [0, .68333, 0, 0, .75],
                        89: [0, .68333, .025, 0, .75],
                        90: [0, .68333, 0, 0, .61111],
                        91: [.25, .75, 0, 0, .27778],
                        92: [.25, .75, 0, 0, .5],
                        93: [.25, .75, 0, 0, .27778],
                        94: [0, .69444, 0, 0, .5],
                        95: [.31, .12056, .02778, 0, .5],
                        97: [0, .43056, 0, 0, .5],
                        98: [0, .69444, 0, 0, .55556],
                        99: [0, .43056, 0, 0, .44445],
                        100: [0, .69444, 0, 0, .55556],
                        101: [0, .43056, 0, 0, .44445],
                        102: [0, .69444, .07778, 0, .30556],
                        103: [.19444, .43056, .01389, 0, .5],
                        104: [0, .69444, 0, 0, .55556],
                        105: [0, .66786, 0, 0, .27778],
                        106: [.19444, .66786, 0, 0, .30556],
                        107: [0, .69444, 0, 0, .52778],
                        108: [0, .69444, 0, 0, .27778],
                        109: [0, .43056, 0, 0, .83334],
                        110: [0, .43056, 0, 0, .55556],
                        111: [0, .43056, 0, 0, .5],
                        112: [.19444, .43056, 0, 0, .55556],
                        113: [.19444, .43056, 0, 0, .52778],
                        114: [0, .43056, 0, 0, .39167],
                        115: [0, .43056, 0, 0, .39445],
                        116: [0, .61508, 0, 0, .38889],
                        117: [0, .43056, 0, 0, .55556],
                        118: [0, .43056, .01389, 0, .52778],
                        119: [0, .43056, .01389, 0, .72222],
                        120: [0, .43056, 0, 0, .52778],
                        121: [.19444, .43056, .01389, 0, .52778],
                        122: [0, .43056, 0, 0, .44445],
                        123: [.25, .75, 0, 0, .5],
                        124: [.25, .75, 0, 0, .27778],
                        125: [.25, .75, 0, 0, .5],
                        126: [.35, .31786, 0, 0, .5],
                        160: [0, 0, 0, 0, .25],
                        167: [.19444, .69444, 0, 0, .44445],
                        168: [0, .66786, 0, 0, .5],
                        172: [0, .43056, 0, 0, .66667],
                        176: [0, .69444, 0, 0, .75],
                        177: [.08333, .58333, 0, 0, .77778],
                        182: [.19444, .69444, 0, 0, .61111],
                        184: [.17014, 0, 0, 0, .44445],
                        198: [0, .68333, 0, 0, .90278],
                        215: [.08333, .58333, 0, 0, .77778],
                        216: [.04861, .73194, 0, 0, .77778],
                        223: [0, .69444, 0, 0, .5],
                        230: [0, .43056, 0, 0, .72222],
                        247: [.08333, .58333, 0, 0, .77778],
                        248: [.09722, .52778, 0, 0, .5],
                        305: [0, .43056, 0, 0, .27778],
                        338: [0, .68333, 0, 0, 1.01389],
                        339: [0, .43056, 0, 0, .77778],
                        567: [.19444, .43056, 0, 0, .30556],
                        710: [0, .69444, 0, 0, .5],
                        711: [0, .62847, 0, 0, .5],
                        713: [0, .56778, 0, 0, .5],
                        714: [0, .69444, 0, 0, .5],
                        715: [0, .69444, 0, 0, .5],
                        728: [0, .69444, 0, 0, .5],
                        729: [0, .66786, 0, 0, .27778],
                        730: [0, .69444, 0, 0, .75],
                        732: [0, .66786, 0, 0, .5],
                        733: [0, .69444, 0, 0, .5],
                        915: [0, .68333, 0, 0, .625],
                        916: [0, .68333, 0, 0, .83334],
                        920: [0, .68333, 0, 0, .77778],
                        923: [0, .68333, 0, 0, .69445],
                        926: [0, .68333, 0, 0, .66667],
                        928: [0, .68333, 0, 0, .75],
                        931: [0, .68333, 0, 0, .72222],
                        933: [0, .68333, 0, 0, .77778],
                        934: [0, .68333, 0, 0, .72222],
                        936: [0, .68333, 0, 0, .77778],
                        937: [0, .68333, 0, 0, .72222],
                        8211: [0, .43056, .02778, 0, .5],
                        8212: [0, .43056, .02778, 0, 1],
                        8216: [0, .69444, 0, 0, .27778],
                        8217: [0, .69444, 0, 0, .27778],
                        8220: [0, .69444, 0, 0, .5],
                        8221: [0, .69444, 0, 0, .5],
                        8224: [.19444, .69444, 0, 0, .44445],
                        8225: [.19444, .69444, 0, 0, .44445],
                        8230: [0, .12, 0, 0, 1.172],
                        8242: [0, .55556, 0, 0, .275],
                        8407: [0, .71444, .15382, 0, .5],
                        8463: [0, .68889, 0, 0, .54028],
                        8465: [0, .69444, 0, 0, .72222],
                        8467: [0, .69444, 0, .11111, .41667],
                        8472: [.19444, .43056, 0, .11111, .63646],
                        8476: [0, .69444, 0, 0, .72222],
                        8501: [0, .69444, 0, 0, .61111],
                        8592: [-.13313, .36687, 0, 0, 1],
                        8593: [.19444, .69444, 0, 0, .5],
                        8594: [-.13313, .36687, 0, 0, 1],
                        8595: [.19444, .69444, 0, 0, .5],
                        8596: [-.13313, .36687, 0, 0, 1],
                        8597: [.25, .75, 0, 0, .5],
                        8598: [.19444, .69444, 0, 0, 1],
                        8599: [.19444, .69444, 0, 0, 1],
                        8600: [.19444, .69444, 0, 0, 1],
                        8601: [.19444, .69444, 0, 0, 1],
                        8614: [.011, .511, 0, 0, 1],
                        8617: [.011, .511, 0, 0, 1.126],
                        8618: [.011, .511, 0, 0, 1.126],
                        8636: [-.13313, .36687, 0, 0, 1],
                        8637: [-.13313, .36687, 0, 0, 1],
                        8640: [-.13313, .36687, 0, 0, 1],
                        8641: [-.13313, .36687, 0, 0, 1],
                        8652: [.011, .671, 0, 0, 1],
                        8656: [-.13313, .36687, 0, 0, 1],
                        8657: [.19444, .69444, 0, 0, .61111],
                        8658: [-.13313, .36687, 0, 0, 1],
                        8659: [.19444, .69444, 0, 0, .61111],
                        8660: [-.13313, .36687, 0, 0, 1],
                        8661: [.25, .75, 0, 0, .61111],
                        8704: [0, .69444, 0, 0, .55556],
                        8706: [0, .69444, .05556, .08334, .5309],
                        8707: [0, .69444, 0, 0, .55556],
                        8709: [.05556, .75, 0, 0, .5],
                        8711: [0, .68333, 0, 0, .83334],
                        8712: [.0391, .5391, 0, 0, .66667],
                        8715: [.0391, .5391, 0, 0, .66667],
                        8722: [.08333, .58333, 0, 0, .77778],
                        8723: [.08333, .58333, 0, 0, .77778],
                        8725: [.25, .75, 0, 0, .5],
                        8726: [.25, .75, 0, 0, .5],
                        8727: [-.03472, .46528, 0, 0, .5],
                        8728: [-.05555, .44445, 0, 0, .5],
                        8729: [-.05555, .44445, 0, 0, .5],
                        8730: [.2, .8, 0, 0, .83334],
                        8733: [0, .43056, 0, 0, .77778],
                        8734: [0, .43056, 0, 0, 1],
                        8736: [0, .69224, 0, 0, .72222],
                        8739: [.25, .75, 0, 0, .27778],
                        8741: [.25, .75, 0, 0, .5],
                        8743: [0, .55556, 0, 0, .66667],
                        8744: [0, .55556, 0, 0, .66667],
                        8745: [0, .55556, 0, 0, .66667],
                        8746: [0, .55556, 0, 0, .66667],
                        8747: [.19444, .69444, .11111, 0, .41667],
                        8764: [-.13313, .36687, 0, 0, .77778],
                        8768: [.19444, .69444, 0, 0, .27778],
                        8771: [-.03625, .46375, 0, 0, .77778],
                        8773: [-.022, .589, 0, 0, 1],
                        8776: [-.01688, .48312, 0, 0, .77778],
                        8781: [-.03625, .46375, 0, 0, .77778],
                        8784: [-.133, .67, 0, 0, .778],
                        8801: [-.03625, .46375, 0, 0, .77778],
                        8804: [.13597, .63597, 0, 0, .77778],
                        8805: [.13597, .63597, 0, 0, .77778],
                        8810: [.0391, .5391, 0, 0, 1],
                        8811: [.0391, .5391, 0, 0, 1],
                        8826: [.0391, .5391, 0, 0, .77778],
                        8827: [.0391, .5391, 0, 0, .77778],
                        8834: [.0391, .5391, 0, 0, .77778],
                        8835: [.0391, .5391, 0, 0, .77778],
                        8838: [.13597, .63597, 0, 0, .77778],
                        8839: [.13597, .63597, 0, 0, .77778],
                        8846: [0, .55556, 0, 0, .66667],
                        8849: [.13597, .63597, 0, 0, .77778],
                        8850: [.13597, .63597, 0, 0, .77778],
                        8851: [0, .55556, 0, 0, .66667],
                        8852: [0, .55556, 0, 0, .66667],
                        8853: [.08333, .58333, 0, 0, .77778],
                        8854: [.08333, .58333, 0, 0, .77778],
                        8855: [.08333, .58333, 0, 0, .77778],
                        8856: [.08333, .58333, 0, 0, .77778],
                        8857: [.08333, .58333, 0, 0, .77778],
                        8866: [0, .69444, 0, 0, .61111],
                        8867: [0, .69444, 0, 0, .61111],
                        8868: [0, .69444, 0, 0, .77778],
                        8869: [0, .69444, 0, 0, .77778],
                        8872: [.249, .75, 0, 0, .867],
                        8900: [-.05555, .44445, 0, 0, .5],
                        8901: [-.05555, .44445, 0, 0, .27778],
                        8902: [-.03472, .46528, 0, 0, .5],
                        8904: [.005, .505, 0, 0, .9],
                        8942: [.03, .9, 0, 0, .278],
                        8943: [-.19, .31, 0, 0, 1.172],
                        8945: [-.1, .82, 0, 0, 1.282],
                        8968: [.25, .75, 0, 0, .44445],
                        8969: [.25, .75, 0, 0, .44445],
                        8970: [.25, .75, 0, 0, .44445],
                        8971: [.25, .75, 0, 0, .44445],
                        8994: [-.14236, .35764, 0, 0, 1],
                        8995: [-.14236, .35764, 0, 0, 1],
                        9136: [.244, .744, 0, 0, .412],
                        9137: [.244, .744, 0, 0, .412],
                        9651: [.19444, .69444, 0, 0, .88889],
                        9657: [-.03472, .46528, 0, 0, .5],
                        9661: [.19444, .69444, 0, 0, .88889],
                        9667: [-.03472, .46528, 0, 0, .5],
                        9711: [.19444, .69444, 0, 0, 1],
                        9824: [.12963, .69444, 0, 0, .77778],
                        9825: [.12963, .69444, 0, 0, .77778],
                        9826: [.12963, .69444, 0, 0, .77778],
                        9827: [.12963, .69444, 0, 0, .77778],
                        9837: [0, .75, 0, 0, .38889],
                        9838: [.19444, .69444, 0, 0, .38889],
                        9839: [.19444, .69444, 0, 0, .38889],
                        10216: [.25, .75, 0, 0, .38889],
                        10217: [.25, .75, 0, 0, .38889],
                        10222: [.244, .744, 0, 0, .412],
                        10223: [.244, .744, 0, 0, .412],
                        10229: [.011, .511, 0, 0, 1.609],
                        10230: [.011, .511, 0, 0, 1.638],
                        10231: [.011, .511, 0, 0, 1.859],
                        10232: [.024, .525, 0, 0, 1.609],
                        10233: [.024, .525, 0, 0, 1.638],
                        10234: [.024, .525, 0, 0, 1.858],
                        10236: [.011, .511, 0, 0, 1.638],
                        10815: [0, .68333, 0, 0, .75],
                        10927: [.13597, .63597, 0, 0, .77778],
                        10928: [.13597, .63597, 0, 0, .77778],
                        57376: [.19444, .69444, 0, 0, 0]
                    },
                    "Math-BoldItalic": { 65: [0, .68611, 0, 0, .86944], 66: [0, .68611, .04835, 0, .8664], 67: [0, .68611, .06979, 0, .81694], 68: [0, .68611, .03194, 0, .93812], 69: [0, .68611, .05451, 0, .81007], 70: [0, .68611, .15972, 0, .68889], 71: [0, .68611, 0, 0, .88673], 72: [0, .68611, .08229, 0, .98229], 73: [0, .68611, .07778, 0, .51111], 74: [0, .68611, .10069, 0, .63125], 75: [0, .68611, .06979, 0, .97118], 76: [0, .68611, 0, 0, .75555], 77: [0, .68611, .11424, 0, 1.14201], 78: [0, .68611, .11424, 0, .95034], 79: [0, .68611, .03194, 0, .83666], 80: [0, .68611, .15972, 0, .72309], 81: [.19444, .68611, 0, 0, .86861], 82: [0, .68611, .00421, 0, .87235], 83: [0, .68611, .05382, 0, .69271], 84: [0, .68611, .15972, 0, .63663], 85: [0, .68611, .11424, 0, .80027], 86: [0, .68611, .25555, 0, .67778], 87: [0, .68611, .15972, 0, 1.09305], 88: [0, .68611, .07778, 0, .94722], 89: [0, .68611, .25555, 0, .67458], 90: [0, .68611, .06979, 0, .77257], 97: [0, .44444, 0, 0, .63287], 98: [0, .69444, 0, 0, .52083], 99: [0, .44444, 0, 0, .51342], 100: [0, .69444, 0, 0, .60972], 101: [0, .44444, 0, 0, .55361], 102: [.19444, .69444, .11042, 0, .56806], 103: [.19444, .44444, .03704, 0, .5449], 104: [0, .69444, 0, 0, .66759], 105: [0, .69326, 0, 0, .4048], 106: [.19444, .69326, .0622, 0, .47083], 107: [0, .69444, .01852, 0, .6037], 108: [0, .69444, .0088, 0, .34815], 109: [0, .44444, 0, 0, 1.0324], 110: [0, .44444, 0, 0, .71296], 111: [0, .44444, 0, 0, .58472], 112: [.19444, .44444, 0, 0, .60092], 113: [.19444, .44444, .03704, 0, .54213], 114: [0, .44444, .03194, 0, .5287], 115: [0, .44444, 0, 0, .53125], 116: [0, .63492, 0, 0, .41528], 117: [0, .44444, 0, 0, .68102], 118: [0, .44444, .03704, 0, .56666], 119: [0, .44444, .02778, 0, .83148], 120: [0, .44444, 0, 0, .65903], 121: [.19444, .44444, .03704, 0, .59028], 122: [0, .44444, .04213, 0, .55509], 915: [0, .68611, .15972, 0, .65694], 916: [0, .68611, 0, 0, .95833], 920: [0, .68611, .03194, 0, .86722], 923: [0, .68611, 0, 0, .80555], 926: [0, .68611, .07458, 0, .84125], 928: [0, .68611, .08229, 0, .98229], 931: [0, .68611, .05451, 0, .88507], 933: [0, .68611, .15972, 0, .67083], 934: [0, .68611, 0, 0, .76666], 936: [0, .68611, .11653, 0, .71402], 937: [0, .68611, .04835, 0, .8789], 945: [0, .44444, 0, 0, .76064], 946: [.19444, .69444, .03403, 0, .65972], 947: [.19444, .44444, .06389, 0, .59003], 948: [0, .69444, .03819, 0, .52222], 949: [0, .44444, 0, 0, .52882], 950: [.19444, .69444, .06215, 0, .50833], 951: [.19444, .44444, .03704, 0, .6], 952: [0, .69444, .03194, 0, .5618], 953: [0, .44444, 0, 0, .41204], 954: [0, .44444, 0, 0, .66759], 955: [0, .69444, 0, 0, .67083], 956: [.19444, .44444, 0, 0, .70787], 957: [0, .44444, .06898, 0, .57685], 958: [.19444, .69444, .03021, 0, .50833], 959: [0, .44444, 0, 0, .58472], 960: [0, .44444, .03704, 0, .68241], 961: [.19444, .44444, 0, 0, .6118], 962: [.09722, .44444, .07917, 0, .42361], 963: [0, .44444, .03704, 0, .68588], 964: [0, .44444, .13472, 0, .52083], 965: [0, .44444, .03704, 0, .63055], 966: [.19444, .44444, 0, 0, .74722], 967: [.19444, .44444, 0, 0, .71805], 968: [.19444, .69444, .03704, 0, .75833], 969: [0, .44444, .03704, 0, .71782], 977: [0, .69444, 0, 0, .69155], 981: [.19444, .69444, 0, 0, .7125], 982: [0, .44444, .03194, 0, .975], 1009: [.19444, .44444, 0, 0, .6118], 1013: [0, .44444, 0, 0, .48333] },
                    "Math-Italic": { 65: [0, .68333, 0, .13889, .75], 66: [0, .68333, .05017, .08334, .75851], 67: [0, .68333, .07153, .08334, .71472], 68: [0, .68333, .02778, .05556, .82792], 69: [0, .68333, .05764, .08334, .7382], 70: [0, .68333, .13889, .08334, .64306], 71: [0, .68333, 0, .08334, .78625], 72: [0, .68333, .08125, .05556, .83125], 73: [0, .68333, .07847, .11111, .43958], 74: [0, .68333, .09618, .16667, .55451], 75: [0, .68333, .07153, .05556, .84931], 76: [0, .68333, 0, .02778, .68056], 77: [0, .68333, .10903, .08334, .97014], 78: [0, .68333, .10903, .08334, .80347], 79: [0, .68333, .02778, .08334, .76278], 80: [0, .68333, .13889, .08334, .64201], 81: [.19444, .68333, 0, .08334, .79056], 82: [0, .68333, .00773, .08334, .75929], 83: [0, .68333, .05764, .08334, .6132], 84: [0, .68333, .13889, .08334, .58438], 85: [0, .68333, .10903, .02778, .68278], 86: [0, .68333, .22222, 0, .58333], 87: [0, .68333, .13889, 0, .94445], 88: [0, .68333, .07847, .08334, .82847], 89: [0, .68333, .22222, 0, .58056], 90: [0, .68333, .07153, .08334, .68264], 97: [0, .43056, 0, 0, .52859], 98: [0, .69444, 0, 0, .42917], 99: [0, .43056, 0, .05556, .43276], 100: [0, .69444, 0, .16667, .52049], 101: [0, .43056, 0, .05556, .46563], 102: [.19444, .69444, .10764, .16667, .48959], 103: [.19444, .43056, .03588, .02778, .47697], 104: [0, .69444, 0, 0, .57616], 105: [0, .65952, 0, 0, .34451], 106: [.19444, .65952, .05724, 0, .41181], 107: [0, .69444, .03148, 0, .5206], 108: [0, .69444, .01968, .08334, .29838], 109: [0, .43056, 0, 0, .87801], 110: [0, .43056, 0, 0, .60023], 111: [0, .43056, 0, .05556, .48472], 112: [.19444, .43056, 0, .08334, .50313], 113: [.19444, .43056, .03588, .08334, .44641], 114: [0, .43056, .02778, .05556, .45116], 115: [0, .43056, 0, .05556, .46875], 116: [0, .61508, 0, .08334, .36111], 117: [0, .43056, 0, .02778, .57246], 118: [0, .43056, .03588, .02778, .48472], 119: [0, .43056, .02691, .08334, .71592], 120: [0, .43056, 0, .02778, .57153], 121: [.19444, .43056, .03588, .05556, .49028], 122: [0, .43056, .04398, .05556, .46505], 915: [0, .68333, .13889, .08334, .61528], 916: [0, .68333, 0, .16667, .83334], 920: [0, .68333, .02778, .08334, .76278], 923: [0, .68333, 0, .16667, .69445], 926: [0, .68333, .07569, .08334, .74236], 928: [0, .68333, .08125, .05556, .83125], 931: [0, .68333, .05764, .08334, .77986], 933: [0, .68333, .13889, .05556, .58333], 934: [0, .68333, 0, .08334, .66667], 936: [0, .68333, .11, .05556, .61222], 937: [0, .68333, .05017, .08334, .7724], 945: [0, .43056, .0037, .02778, .6397], 946: [.19444, .69444, .05278, .08334, .56563], 947: [.19444, .43056, .05556, 0, .51773], 948: [0, .69444, .03785, .05556, .44444], 949: [0, .43056, 0, .08334, .46632], 950: [.19444, .69444, .07378, .08334, .4375], 951: [.19444, .43056, .03588, .05556, .49653], 952: [0, .69444, .02778, .08334, .46944], 953: [0, .43056, 0, .05556, .35394], 954: [0, .43056, 0, 0, .57616], 955: [0, .69444, 0, 0, .58334], 956: [.19444, .43056, 0, .02778, .60255], 957: [0, .43056, .06366, .02778, .49398], 958: [.19444, .69444, .04601, .11111, .4375], 959: [0, .43056, 0, .05556, .48472], 960: [0, .43056, .03588, 0, .57003], 961: [.19444, .43056, 0, .08334, .51702], 962: [.09722, .43056, .07986, .08334, .36285], 963: [0, .43056, .03588, 0, .57141], 964: [0, .43056, .1132, .02778, .43715], 965: [0, .43056, .03588, .02778, .54028], 966: [.19444, .43056, 0, .08334, .65417], 967: [.19444, .43056, 0, .05556, .62569], 968: [.19444, .69444, .03588, .11111, .65139], 969: [0, .43056, .03588, 0, .62245], 977: [0, .69444, 0, .08334, .59144], 981: [.19444, .69444, 0, .08334, .59583], 982: [0, .43056, .02778, 0, .82813], 1009: [.19444, .43056, 0, .08334, .51702], 1013: [0, .43056, 0, .05556, .4059] },
                    "Math-Regular": { 65: [0, .68333, 0, .13889, .75], 66: [0, .68333, .05017, .08334, .75851], 67: [0, .68333, .07153, .08334, .71472], 68: [0, .68333, .02778, .05556, .82792], 69: [0, .68333, .05764, .08334, .7382], 70: [0, .68333, .13889, .08334, .64306], 71: [0, .68333, 0, .08334, .78625], 72: [0, .68333, .08125, .05556, .83125], 73: [0, .68333, .07847, .11111, .43958], 74: [0, .68333, .09618, .16667, .55451], 75: [0, .68333, .07153, .05556, .84931], 76: [0, .68333, 0, .02778, .68056], 77: [0, .68333, .10903, .08334, .97014], 78: [0, .68333, .10903, .08334, .80347], 79: [0, .68333, .02778, .08334, .76278], 80: [0, .68333, .13889, .08334, .64201], 81: [.19444, .68333, 0, .08334, .79056], 82: [0, .68333, .00773, .08334, .75929], 83: [0, .68333, .05764, .08334, .6132], 84: [0, .68333, .13889, .08334, .58438], 85: [0, .68333, .10903, .02778, .68278], 86: [0, .68333, .22222, 0, .58333], 87: [0, .68333, .13889, 0, .94445], 88: [0, .68333, .07847, .08334, .82847], 89: [0, .68333, .22222, 0, .58056], 90: [0, .68333, .07153, .08334, .68264], 97: [0, .43056, 0, 0, .52859], 98: [0, .69444, 0, 0, .42917], 99: [0, .43056, 0, .05556, .43276], 100: [0, .69444, 0, .16667, .52049], 101: [0, .43056, 0, .05556, .46563], 102: [.19444, .69444, .10764, .16667, .48959], 103: [.19444, .43056, .03588, .02778, .47697], 104: [0, .69444, 0, 0, .57616], 105: [0, .65952, 0, 0, .34451], 106: [.19444, .65952, .05724, 0, .41181], 107: [0, .69444, .03148, 0, .5206], 108: [0, .69444, .01968, .08334, .29838], 109: [0, .43056, 0, 0, .87801], 110: [0, .43056, 0, 0, .60023], 111: [0, .43056, 0, .05556, .48472], 112: [.19444, .43056, 0, .08334, .50313], 113: [.19444, .43056, .03588, .08334, .44641], 114: [0, .43056, .02778, .05556, .45116], 115: [0, .43056, 0, .05556, .46875], 116: [0, .61508, 0, .08334, .36111], 117: [0, .43056, 0, .02778, .57246], 118: [0, .43056, .03588, .02778, .48472], 119: [0, .43056, .02691, .08334, .71592], 120: [0, .43056, 0, .02778, .57153], 121: [.19444, .43056, .03588, .05556, .49028], 122: [0, .43056, .04398, .05556, .46505], 915: [0, .68333, .13889, .08334, .61528], 916: [0, .68333, 0, .16667, .83334], 920: [0, .68333, .02778, .08334, .76278], 923: [0, .68333, 0, .16667, .69445], 926: [0, .68333, .07569, .08334, .74236], 928: [0, .68333, .08125, .05556, .83125], 931: [0, .68333, .05764, .08334, .77986], 933: [0, .68333, .13889, .05556, .58333], 934: [0, .68333, 0, .08334, .66667], 936: [0, .68333, .11, .05556, .61222], 937: [0, .68333, .05017, .08334, .7724], 945: [0, .43056, .0037, .02778, .6397], 946: [.19444, .69444, .05278, .08334, .56563], 947: [.19444, .43056, .05556, 0, .51773], 948: [0, .69444, .03785, .05556, .44444], 949: [0, .43056, 0, .08334, .46632], 950: [.19444, .69444, .07378, .08334, .4375], 951: [.19444, .43056, .03588, .05556, .49653], 952: [0, .69444, .02778, .08334, .46944], 953: [0, .43056, 0, .05556, .35394], 954: [0, .43056, 0, 0, .57616], 955: [0, .69444, 0, 0, .58334], 956: [.19444, .43056, 0, .02778, .60255], 957: [0, .43056, .06366, .02778, .49398], 958: [.19444, .69444, .04601, .11111, .4375], 959: [0, .43056, 0, .05556, .48472], 960: [0, .43056, .03588, 0, .57003], 961: [.19444, .43056, 0, .08334, .51702], 962: [.09722, .43056, .07986, .08334, .36285], 963: [0, .43056, .03588, 0, .57141], 964: [0, .43056, .1132, .02778, .43715], 965: [0, .43056, .03588, .02778, .54028], 966: [.19444, .43056, 0, .08334, .65417], 967: [.19444, .43056, 0, .05556, .62569], 968: [.19444, .69444, .03588, .11111, .65139], 969: [0, .43056, .03588, 0, .62245], 977: [0, .69444, 0, .08334, .59144], 981: [.19444, .69444, 0, .08334, .59583], 982: [0, .43056, .02778, 0, .82813], 1009: [.19444, .43056, 0, .08334, .51702], 1013: [0, .43056, 0, .05556, .4059] },
                    "SansSerif-Bold": { 33: [0, .69444, 0, 0, .36667], 34: [0, .69444, 0, 0, .55834], 35: [.19444, .69444, 0, 0, .91667], 36: [.05556, .75, 0, 0, .55], 37: [.05556, .75, 0, 0, 1.02912], 38: [0, .69444, 0, 0, .83056], 39: [0, .69444, 0, 0, .30556], 40: [.25, .75, 0, 0, .42778], 41: [.25, .75, 0, 0, .42778], 42: [0, .75, 0, 0, .55], 43: [.11667, .61667, 0, 0, .85556], 44: [.10556, .13056, 0, 0, .30556], 45: [0, .45833, 0, 0, .36667], 46: [0, .13056, 0, 0, .30556], 47: [.25, .75, 0, 0, .55], 48: [0, .69444, 0, 0, .55], 49: [0, .69444, 0, 0, .55], 50: [0, .69444, 0, 0, .55], 51: [0, .69444, 0, 0, .55], 52: [0, .69444, 0, 0, .55], 53: [0, .69444, 0, 0, .55], 54: [0, .69444, 0, 0, .55], 55: [0, .69444, 0, 0, .55], 56: [0, .69444, 0, 0, .55], 57: [0, .69444, 0, 0, .55], 58: [0, .45833, 0, 0, .30556], 59: [.10556, .45833, 0, 0, .30556], 61: [-.09375, .40625, 0, 0, .85556], 63: [0, .69444, 0, 0, .51945], 64: [0, .69444, 0, 0, .73334], 65: [0, .69444, 0, 0, .73334], 66: [0, .69444, 0, 0, .73334], 67: [0, .69444, 0, 0, .70278], 68: [0, .69444, 0, 0, .79445], 69: [0, .69444, 0, 0, .64167], 70: [0, .69444, 0, 0, .61111], 71: [0, .69444, 0, 0, .73334], 72: [0, .69444, 0, 0, .79445], 73: [0, .69444, 0, 0, .33056], 74: [0, .69444, 0, 0, .51945], 75: [0, .69444, 0, 0, .76389], 76: [0, .69444, 0, 0, .58056], 77: [0, .69444, 0, 0, .97778], 78: [0, .69444, 0, 0, .79445], 79: [0, .69444, 0, 0, .79445], 80: [0, .69444, 0, 0, .70278], 81: [.10556, .69444, 0, 0, .79445], 82: [0, .69444, 0, 0, .70278], 83: [0, .69444, 0, 0, .61111], 84: [0, .69444, 0, 0, .73334], 85: [0, .69444, 0, 0, .76389], 86: [0, .69444, .01528, 0, .73334], 87: [0, .69444, .01528, 0, 1.03889], 88: [0, .69444, 0, 0, .73334], 89: [0, .69444, .0275, 0, .73334], 90: [0, .69444, 0, 0, .67223], 91: [.25, .75, 0, 0, .34306], 93: [.25, .75, 0, 0, .34306], 94: [0, .69444, 0, 0, .55], 95: [.35, .10833, .03056, 0, .55], 97: [0, .45833, 0, 0, .525], 98: [0, .69444, 0, 0, .56111], 99: [0, .45833, 0, 0, .48889], 100: [0, .69444, 0, 0, .56111], 101: [0, .45833, 0, 0, .51111], 102: [0, .69444, .07639, 0, .33611], 103: [.19444, .45833, .01528, 0, .55], 104: [0, .69444, 0, 0, .56111], 105: [0, .69444, 0, 0, .25556], 106: [.19444, .69444, 0, 0, .28611], 107: [0, .69444, 0, 0, .53056], 108: [0, .69444, 0, 0, .25556], 109: [0, .45833, 0, 0, .86667], 110: [0, .45833, 0, 0, .56111], 111: [0, .45833, 0, 0, .55], 112: [.19444, .45833, 0, 0, .56111], 113: [.19444, .45833, 0, 0, .56111], 114: [0, .45833, .01528, 0, .37222], 115: [0, .45833, 0, 0, .42167], 116: [0, .58929, 0, 0, .40417], 117: [0, .45833, 0, 0, .56111], 118: [0, .45833, .01528, 0, .5], 119: [0, .45833, .01528, 0, .74445], 120: [0, .45833, 0, 0, .5], 121: [.19444, .45833, .01528, 0, .5], 122: [0, .45833, 0, 0, .47639], 126: [.35, .34444, 0, 0, .55], 168: [0, .69444, 0, 0, .55], 176: [0, .69444, 0, 0, .73334], 180: [0, .69444, 0, 0, .55], 184: [.17014, 0, 0, 0, .48889], 305: [0, .45833, 0, 0, .25556], 567: [.19444, .45833, 0, 0, .28611], 710: [0, .69444, 0, 0, .55], 711: [0, .63542, 0, 0, .55], 713: [0, .63778, 0, 0, .55], 728: [0, .69444, 0, 0, .55], 729: [0, .69444, 0, 0, .30556], 730: [0, .69444, 0, 0, .73334], 732: [0, .69444, 0, 0, .55], 733: [0, .69444, 0, 0, .55], 915: [0, .69444, 0, 0, .58056], 916: [0, .69444, 0, 0, .91667], 920: [0, .69444, 0, 0, .85556], 923: [0, .69444, 0, 0, .67223], 926: [0, .69444, 0, 0, .73334], 928: [0, .69444, 0, 0, .79445], 931: [0, .69444, 0, 0, .79445], 933: [0, .69444, 0, 0, .85556], 934: [0, .69444, 0, 0, .79445], 936: [0, .69444, 0, 0, .85556], 937: [0, .69444, 0, 0, .79445], 8211: [0, .45833, .03056, 0, .55], 8212: [0, .45833, .03056, 0, 1.10001], 8216: [0, .69444, 0, 0, .30556], 8217: [0, .69444, 0, 0, .30556], 8220: [0, .69444, 0, 0, .55834], 8221: [0, .69444, 0, 0, .55834] },
                    "SansSerif-Italic": { 33: [0, .69444, .05733, 0, .31945], 34: [0, .69444, .00316, 0, .5], 35: [.19444, .69444, .05087, 0, .83334], 36: [.05556, .75, .11156, 0, .5], 37: [.05556, .75, .03126, 0, .83334], 38: [0, .69444, .03058, 0, .75834], 39: [0, .69444, .07816, 0, .27778], 40: [.25, .75, .13164, 0, .38889], 41: [.25, .75, .02536, 0, .38889], 42: [0, .75, .11775, 0, .5], 43: [.08333, .58333, .02536, 0, .77778], 44: [.125, .08333, 0, 0, .27778], 45: [0, .44444, .01946, 0, .33333], 46: [0, .08333, 0, 0, .27778], 47: [.25, .75, .13164, 0, .5], 48: [0, .65556, .11156, 0, .5], 49: [0, .65556, .11156, 0, .5], 50: [0, .65556, .11156, 0, .5], 51: [0, .65556, .11156, 0, .5], 52: [0, .65556, .11156, 0, .5], 53: [0, .65556, .11156, 0, .5], 54: [0, .65556, .11156, 0, .5], 55: [0, .65556, .11156, 0, .5], 56: [0, .65556, .11156, 0, .5], 57: [0, .65556, .11156, 0, .5], 58: [0, .44444, .02502, 0, .27778], 59: [.125, .44444, .02502, 0, .27778], 61: [-.13, .37, .05087, 0, .77778], 63: [0, .69444, .11809, 0, .47222], 64: [0, .69444, .07555, 0, .66667], 65: [0, .69444, 0, 0, .66667], 66: [0, .69444, .08293, 0, .66667], 67: [0, .69444, .11983, 0, .63889], 68: [0, .69444, .07555, 0, .72223], 69: [0, .69444, .11983, 0, .59722], 70: [0, .69444, .13372, 0, .56945], 71: [0, .69444, .11983, 0, .66667], 72: [0, .69444, .08094, 0, .70834], 73: [0, .69444, .13372, 0, .27778], 74: [0, .69444, .08094, 0, .47222], 75: [0, .69444, .11983, 0, .69445], 76: [0, .69444, 0, 0, .54167], 77: [0, .69444, .08094, 0, .875], 78: [0, .69444, .08094, 0, .70834], 79: [0, .69444, .07555, 0, .73611], 80: [0, .69444, .08293, 0, .63889], 81: [.125, .69444, .07555, 0, .73611], 82: [0, .69444, .08293, 0, .64584], 83: [0, .69444, .09205, 0, .55556], 84: [0, .69444, .13372, 0, .68056], 85: [0, .69444, .08094, 0, .6875], 86: [0, .69444, .1615, 0, .66667], 87: [0, .69444, .1615, 0, .94445], 88: [0, .69444, .13372, 0, .66667], 89: [0, .69444, .17261, 0, .66667], 90: [0, .69444, .11983, 0, .61111], 91: [.25, .75, .15942, 0, .28889], 93: [.25, .75, .08719, 0, .28889], 94: [0, .69444, .0799, 0, .5], 95: [.35, .09444, .08616, 0, .5], 97: [0, .44444, .00981, 0, .48056], 98: [0, .69444, .03057, 0, .51667], 99: [0, .44444, .08336, 0, .44445], 100: [0, .69444, .09483, 0, .51667], 101: [0, .44444, .06778, 0, .44445], 102: [0, .69444, .21705, 0, .30556], 103: [.19444, .44444, .10836, 0, .5], 104: [0, .69444, .01778, 0, .51667], 105: [0, .67937, .09718, 0, .23889], 106: [.19444, .67937, .09162, 0, .26667], 107: [0, .69444, .08336, 0, .48889], 108: [0, .69444, .09483, 0, .23889], 109: [0, .44444, .01778, 0, .79445], 110: [0, .44444, .01778, 0, .51667], 111: [0, .44444, .06613, 0, .5], 112: [.19444, .44444, .0389, 0, .51667], 113: [.19444, .44444, .04169, 0, .51667], 114: [0, .44444, .10836, 0, .34167], 115: [0, .44444, .0778, 0, .38333], 116: [0, .57143, .07225, 0, .36111], 117: [0, .44444, .04169, 0, .51667], 118: [0, .44444, .10836, 0, .46111], 119: [0, .44444, .10836, 0, .68334], 120: [0, .44444, .09169, 0, .46111], 121: [.19444, .44444, .10836, 0, .46111], 122: [0, .44444, .08752, 0, .43472], 126: [.35, .32659, .08826, 0, .5], 168: [0, .67937, .06385, 0, .5], 176: [0, .69444, 0, 0, .73752], 184: [.17014, 0, 0, 0, .44445], 305: [0, .44444, .04169, 0, .23889], 567: [.19444, .44444, .04169, 0, .26667], 710: [0, .69444, .0799, 0, .5], 711: [0, .63194, .08432, 0, .5], 713: [0, .60889, .08776, 0, .5], 714: [0, .69444, .09205, 0, .5], 715: [0, .69444, 0, 0, .5], 728: [0, .69444, .09483, 0, .5], 729: [0, .67937, .07774, 0, .27778], 730: [0, .69444, 0, 0, .73752], 732: [0, .67659, .08826, 0, .5], 733: [0, .69444, .09205, 0, .5], 915: [0, .69444, .13372, 0, .54167], 916: [0, .69444, 0, 0, .83334], 920: [0, .69444, .07555, 0, .77778], 923: [0, .69444, 0, 0, .61111], 926: [0, .69444, .12816, 0, .66667], 928: [0, .69444, .08094, 0, .70834], 931: [0, .69444, .11983, 0, .72222], 933: [0, .69444, .09031, 0, .77778], 934: [0, .69444, .04603, 0, .72222], 936: [0, .69444, .09031, 0, .77778], 937: [0, .69444, .08293, 0, .72222], 8211: [0, .44444, .08616, 0, .5], 8212: [0, .44444, .08616, 0, 1], 8216: [0, .69444, .07816, 0, .27778], 8217: [0, .69444, .07816, 0, .27778], 8220: [0, .69444, .14205, 0, .5], 8221: [0, .69444, .00316, 0, .5] },
                    "SansSerif-Regular": { 33: [0, .69444, 0, 0, .31945], 34: [0, .69444, 0, 0, .5], 35: [.19444, .69444, 0, 0, .83334], 36: [.05556, .75, 0, 0, .5], 37: [.05556, .75, 0, 0, .83334], 38: [0, .69444, 0, 0, .75834], 39: [0, .69444, 0, 0, .27778], 40: [.25, .75, 0, 0, .38889], 41: [.25, .75, 0, 0, .38889], 42: [0, .75, 0, 0, .5], 43: [.08333, .58333, 0, 0, .77778], 44: [.125, .08333, 0, 0, .27778], 45: [0, .44444, 0, 0, .33333], 46: [0, .08333, 0, 0, .27778], 47: [.25, .75, 0, 0, .5], 48: [0, .65556, 0, 0, .5], 49: [0, .65556, 0, 0, .5], 50: [0, .65556, 0, 0, .5], 51: [0, .65556, 0, 0, .5], 52: [0, .65556, 0, 0, .5], 53: [0, .65556, 0, 0, .5], 54: [0, .65556, 0, 0, .5], 55: [0, .65556, 0, 0, .5], 56: [0, .65556, 0, 0, .5], 57: [0, .65556, 0, 0, .5], 58: [0, .44444, 0, 0, .27778], 59: [.125, .44444, 0, 0, .27778], 61: [-.13, .37, 0, 0, .77778], 63: [0, .69444, 0, 0, .47222], 64: [0, .69444, 0, 0, .66667], 65: [0, .69444, 0, 0, .66667], 66: [0, .69444, 0, 0, .66667], 67: [0, .69444, 0, 0, .63889], 68: [0, .69444, 0, 0, .72223], 69: [0, .69444, 0, 0, .59722], 70: [0, .69444, 0, 0, .56945], 71: [0, .69444, 0, 0, .66667], 72: [0, .69444, 0, 0, .70834], 73: [0, .69444, 0, 0, .27778], 74: [0, .69444, 0, 0, .47222], 75: [0, .69444, 0, 0, .69445], 76: [0, .69444, 0, 0, .54167], 77: [0, .69444, 0, 0, .875], 78: [0, .69444, 0, 0, .70834], 79: [0, .69444, 0, 0, .73611], 80: [0, .69444, 0, 0, .63889], 81: [.125, .69444, 0, 0, .73611], 82: [0, .69444, 0, 0, .64584], 83: [0, .69444, 0, 0, .55556], 84: [0, .69444, 0, 0, .68056], 85: [0, .69444, 0, 0, .6875], 86: [0, .69444, .01389, 0, .66667], 87: [0, .69444, .01389, 0, .94445], 88: [0, .69444, 0, 0, .66667], 89: [0, .69444, .025, 0, .66667], 90: [0, .69444, 0, 0, .61111], 91: [.25, .75, 0, 0, .28889], 93: [.25, .75, 0, 0, .28889], 94: [0, .69444, 0, 0, .5], 95: [.35, .09444, .02778, 0, .5], 97: [0, .44444, 0, 0, .48056], 98: [0, .69444, 0, 0, .51667], 99: [0, .44444, 0, 0, .44445], 100: [0, .69444, 0, 0, .51667], 101: [0, .44444, 0, 0, .44445], 102: [0, .69444, .06944, 0, .30556], 103: [.19444, .44444, .01389, 0, .5], 104: [0, .69444, 0, 0, .51667], 105: [0, .67937, 0, 0, .23889], 106: [.19444, .67937, 0, 0, .26667], 107: [0, .69444, 0, 0, .48889], 108: [0, .69444, 0, 0, .23889], 109: [0, .44444, 0, 0, .79445], 110: [0, .44444, 0, 0, .51667], 111: [0, .44444, 0, 0, .5], 112: [.19444, .44444, 0, 0, .51667], 113: [.19444, .44444, 0, 0, .51667], 114: [0, .44444, .01389, 0, .34167], 115: [0, .44444, 0, 0, .38333], 116: [0, .57143, 0, 0, .36111], 117: [0, .44444, 0, 0, .51667], 118: [0, .44444, .01389, 0, .46111], 119: [0, .44444, .01389, 0, .68334], 120: [0, .44444, 0, 0, .46111], 121: [.19444, .44444, .01389, 0, .46111], 122: [0, .44444, 0, 0, .43472], 126: [.35, .32659, 0, 0, .5], 168: [0, .67937, 0, 0, .5], 176: [0, .69444, 0, 0, .66667], 184: [.17014, 0, 0, 0, .44445], 305: [0, .44444, 0, 0, .23889], 567: [.19444, .44444, 0, 0, .26667], 710: [0, .69444, 0, 0, .5], 711: [0, .63194, 0, 0, .5], 713: [0, .60889, 0, 0, .5], 714: [0, .69444, 0, 0, .5], 715: [0, .69444, 0, 0, .5], 728: [0, .69444, 0, 0, .5], 729: [0, .67937, 0, 0, .27778], 730: [0, .69444, 0, 0, .66667], 732: [0, .67659, 0, 0, .5], 733: [0, .69444, 0, 0, .5], 915: [0, .69444, 0, 0, .54167], 916: [0, .69444, 0, 0, .83334], 920: [0, .69444, 0, 0, .77778], 923: [0, .69444, 0, 0, .61111], 926: [0, .69444, 0, 0, .66667], 928: [0, .69444, 0, 0, .70834], 931: [0, .69444, 0, 0, .72222], 933: [0, .69444, 0, 0, .77778], 934: [0, .69444, 0, 0, .72222], 936: [0, .69444, 0, 0, .77778], 937: [0, .69444, 0, 0, .72222], 8211: [0, .44444, .02778, 0, .5], 8212: [0, .44444, .02778, 0, 1], 8216: [0, .69444, 0, 0, .27778], 8217: [0, .69444, 0, 0, .27778], 8220: [0, .69444, 0, 0, .5], 8221: [0, .69444, 0, 0, .5] },
                    "Script-Regular": { 65: [0, .7, .22925, 0, .80253], 66: [0, .7, .04087, 0, .90757], 67: [0, .7, .1689, 0, .66619], 68: [0, .7, .09371, 0, .77443], 69: [0, .7, .18583, 0, .56162], 70: [0, .7, .13634, 0, .89544], 71: [0, .7, .17322, 0, .60961], 72: [0, .7, .29694, 0, .96919], 73: [0, .7, .19189, 0, .80907], 74: [.27778, .7, .19189, 0, 1.05159], 75: [0, .7, .31259, 0, .91364], 76: [0, .7, .19189, 0, .87373], 77: [0, .7, .15981, 0, 1.08031], 78: [0, .7, .3525, 0, .9015], 79: [0, .7, .08078, 0, .73787], 80: [0, .7, .08078, 0, 1.01262], 81: [0, .7, .03305, 0, .88282], 82: [0, .7, .06259, 0, .85], 83: [0, .7, .19189, 0, .86767], 84: [0, .7, .29087, 0, .74697], 85: [0, .7, .25815, 0, .79996], 86: [0, .7, .27523, 0, .62204], 87: [0, .7, .27523, 0, .80532], 88: [0, .7, .26006, 0, .94445], 89: [0, .7, .2939, 0, .70961], 90: [0, .7, .24037, 0, .8212] },
                    "Size1-Regular": { 40: [.35001, .85, 0, 0, .45834], 41: [.35001, .85, 0, 0, .45834], 47: [.35001, .85, 0, 0, .57778], 91: [.35001, .85, 0, 0, .41667], 92: [.35001, .85, 0, 0, .57778], 93: [.35001, .85, 0, 0, .41667], 123: [.35001, .85, 0, 0, .58334], 125: [.35001, .85, 0, 0, .58334], 710: [0, .72222, 0, 0, .55556], 732: [0, .72222, 0, 0, .55556], 770: [0, .72222, 0, 0, .55556], 771: [0, .72222, 0, 0, .55556], 8214: [-99e-5, .601, 0, 0, .77778], 8593: [1e-5, .6, 0, 0, .66667], 8595: [1e-5, .6, 0, 0, .66667], 8657: [1e-5, .6, 0, 0, .77778], 8659: [1e-5, .6, 0, 0, .77778], 8719: [.25001, .75, 0, 0, .94445], 8720: [.25001, .75, 0, 0, .94445], 8721: [.25001, .75, 0, 0, 1.05556], 8730: [.35001, .85, 0, 0, 1], 8739: [-.00599, .606, 0, 0, .33333], 8741: [-.00599, .606, 0, 0, .55556], 8747: [.30612, .805, .19445, 0, .47222], 8748: [.306, .805, .19445, 0, .47222], 8749: [.306, .805, .19445, 0, .47222], 8750: [.30612, .805, .19445, 0, .47222], 8896: [.25001, .75, 0, 0, .83334], 8897: [.25001, .75, 0, 0, .83334], 8898: [.25001, .75, 0, 0, .83334], 8899: [.25001, .75, 0, 0, .83334], 8968: [.35001, .85, 0, 0, .47222], 8969: [.35001, .85, 0, 0, .47222], 8970: [.35001, .85, 0, 0, .47222], 8971: [.35001, .85, 0, 0, .47222], 9168: [-99e-5, .601, 0, 0, .66667], 10216: [.35001, .85, 0, 0, .47222], 10217: [.35001, .85, 0, 0, .47222], 10752: [.25001, .75, 0, 0, 1.11111], 10753: [.25001, .75, 0, 0, 1.11111], 10754: [.25001, .75, 0, 0, 1.11111], 10756: [.25001, .75, 0, 0, .83334], 10758: [.25001, .75, 0, 0, .83334] },
                    "Size2-Regular": { 40: [.65002, 1.15, 0, 0, .59722], 41: [.65002, 1.15, 0, 0, .59722], 47: [.65002, 1.15, 0, 0, .81111], 91: [.65002, 1.15, 0, 0, .47222], 92: [.65002, 1.15, 0, 0, .81111], 93: [.65002, 1.15, 0, 0, .47222], 123: [.65002, 1.15, 0, 0, .66667], 125: [.65002, 1.15, 0, 0, .66667], 710: [0, .75, 0, 0, 1], 732: [0, .75, 0, 0, 1], 770: [0, .75, 0, 0, 1], 771: [0, .75, 0, 0, 1], 8719: [.55001, 1.05, 0, 0, 1.27778], 8720: [.55001, 1.05, 0, 0, 1.27778], 8721: [.55001, 1.05, 0, 0, 1.44445], 8730: [.65002, 1.15, 0, 0, 1], 8747: [.86225, 1.36, .44445, 0, .55556], 8748: [.862, 1.36, .44445, 0, .55556], 8749: [.862, 1.36, .44445, 0, .55556], 8750: [.86225, 1.36, .44445, 0, .55556], 8896: [.55001, 1.05, 0, 0, 1.11111], 8897: [.55001, 1.05, 0, 0, 1.11111], 8898: [.55001, 1.05, 0, 0, 1.11111], 8899: [.55001, 1.05, 0, 0, 1.11111], 8968: [.65002, 1.15, 0, 0, .52778], 8969: [.65002, 1.15, 0, 0, .52778], 8970: [.65002, 1.15, 0, 0, .52778], 8971: [.65002, 1.15, 0, 0, .52778], 10216: [.65002, 1.15, 0, 0, .61111], 10217: [.65002, 1.15, 0, 0, .61111], 10752: [.55001, 1.05, 0, 0, 1.51112], 10753: [.55001, 1.05, 0, 0, 1.51112], 10754: [.55001, 1.05, 0, 0, 1.51112], 10756: [.55001, 1.05, 0, 0, 1.11111], 10758: [.55001, 1.05, 0, 0, 1.11111] },
                    "Size3-Regular": { 40: [.95003, 1.45, 0, 0, .73611], 41: [.95003, 1.45, 0, 0, .73611], 47: [.95003, 1.45, 0, 0, 1.04445], 91: [.95003, 1.45, 0, 0, .52778], 92: [.95003, 1.45, 0, 0, 1.04445], 93: [.95003, 1.45, 0, 0, .52778], 123: [.95003, 1.45, 0, 0, .75], 125: [.95003, 1.45, 0, 0, .75], 710: [0, .75, 0, 0, 1.44445], 732: [0, .75, 0, 0, 1.44445], 770: [0, .75, 0, 0, 1.44445], 771: [0, .75, 0, 0, 1.44445], 8730: [.95003, 1.45, 0, 0, 1], 8968: [.95003, 1.45, 0, 0, .58334], 8969: [.95003, 1.45, 0, 0, .58334], 8970: [.95003, 1.45, 0, 0, .58334], 8971: [.95003, 1.45, 0, 0, .58334], 10216: [.95003, 1.45, 0, 0, .75], 10217: [.95003, 1.45, 0, 0, .75] },
                    "Size4-Regular": { 40: [1.25003, 1.75, 0, 0, .79167], 41: [1.25003, 1.75, 0, 0, .79167], 47: [1.25003, 1.75, 0, 0, 1.27778], 91: [1.25003, 1.75, 0, 0, .58334], 92: [1.25003, 1.75, 0, 0, 1.27778], 93: [1.25003, 1.75, 0, 0, .58334], 123: [1.25003, 1.75, 0, 0, .80556], 125: [1.25003, 1.75, 0, 0, .80556], 710: [0, .825, 0, 0, 1.8889], 732: [0, .825, 0, 0, 1.8889], 770: [0, .825, 0, 0, 1.8889], 771: [0, .825, 0, 0, 1.8889], 8730: [1.25003, 1.75, 0, 0, 1], 8968: [1.25003, 1.75, 0, 0, .63889], 8969: [1.25003, 1.75, 0, 0, .63889], 8970: [1.25003, 1.75, 0, 0, .63889], 8971: [1.25003, 1.75, 0, 0, .63889], 9115: [.64502, 1.155, 0, 0, .875], 9116: [1e-5, .6, 0, 0, .875], 9117: [.64502, 1.155, 0, 0, .875], 9118: [.64502, 1.155, 0, 0, .875], 9119: [1e-5, .6, 0, 0, .875], 9120: [.64502, 1.155, 0, 0, .875], 9121: [.64502, 1.155, 0, 0, .66667], 9122: [-99e-5, .601, 0, 0, .66667], 9123: [.64502, 1.155, 0, 0, .66667], 9124: [.64502, 1.155, 0, 0, .66667], 9125: [-99e-5, .601, 0, 0, .66667], 9126: [.64502, 1.155, 0, 0, .66667], 9127: [1e-5, .9, 0, 0, .88889], 9128: [.65002, 1.15, 0, 0, .88889], 9129: [.90001, 0, 0, 0, .88889], 9130: [0, .3, 0, 0, .88889], 9131: [1e-5, .9, 0, 0, .88889], 9132: [.65002, 1.15, 0, 0, .88889], 9133: [.90001, 0, 0, 0, .88889], 9143: [.88502, .915, 0, 0, 1.05556], 10216: [1.25003, 1.75, 0, 0, .80556], 10217: [1.25003, 1.75, 0, 0, .80556], 57344: [-.00499, .605, 0, 0, 1.05556], 57345: [-.00499, .605, 0, 0, 1.05556], 57680: [0, .12, 0, 0, .45], 57681: [0, .12, 0, 0, .45], 57682: [0, .12, 0, 0, .45], 57683: [0, .12, 0, 0, .45] },
                    "Typewriter-Regular": { 32: [0, 0, 0, 0, .525], 33: [0, .61111, 0, 0, .525], 34: [0, .61111, 0, 0, .525], 35: [0, .61111, 0, 0, .525], 36: [.08333, .69444, 0, 0, .525], 37: [.08333, .69444, 0, 0, .525], 38: [0, .61111, 0, 0, .525], 39: [0, .61111, 0, 0, .525], 40: [.08333, .69444, 0, 0, .525], 41: [.08333, .69444, 0, 0, .525], 42: [0, .52083, 0, 0, .525], 43: [-.08056, .53055, 0, 0, .525], 44: [.13889, .125, 0, 0, .525], 45: [-.08056, .53055, 0, 0, .525], 46: [0, .125, 0, 0, .525], 47: [.08333, .69444, 0, 0, .525], 48: [0, .61111, 0, 0, .525], 49: [0, .61111, 0, 0, .525], 50: [0, .61111, 0, 0, .525], 51: [0, .61111, 0, 0, .525], 52: [0, .61111, 0, 0, .525], 53: [0, .61111, 0, 0, .525], 54: [0, .61111, 0, 0, .525], 55: [0, .61111, 0, 0, .525], 56: [0, .61111, 0, 0, .525], 57: [0, .61111, 0, 0, .525], 58: [0, .43056, 0, 0, .525], 59: [.13889, .43056, 0, 0, .525], 60: [-.05556, .55556, 0, 0, .525], 61: [-.19549, .41562, 0, 0, .525], 62: [-.05556, .55556, 0, 0, .525], 63: [0, .61111, 0, 0, .525], 64: [0, .61111, 0, 0, .525], 65: [0, .61111, 0, 0, .525], 66: [0, .61111, 0, 0, .525], 67: [0, .61111, 0, 0, .525], 68: [0, .61111, 0, 0, .525], 69: [0, .61111, 0, 0, .525], 70: [0, .61111, 0, 0, .525], 71: [0, .61111, 0, 0, .525], 72: [0, .61111, 0, 0, .525], 73: [0, .61111, 0, 0, .525], 74: [0, .61111, 0, 0, .525], 75: [0, .61111, 0, 0, .525], 76: [0, .61111, 0, 0, .525], 77: [0, .61111, 0, 0, .525], 78: [0, .61111, 0, 0, .525], 79: [0, .61111, 0, 0, .525], 80: [0, .61111, 0, 0, .525], 81: [.13889, .61111, 0, 0, .525], 82: [0, .61111, 0, 0, .525], 83: [0, .61111, 0, 0, .525], 84: [0, .61111, 0, 0, .525], 85: [0, .61111, 0, 0, .525], 86: [0, .61111, 0, 0, .525], 87: [0, .61111, 0, 0, .525], 88: [0, .61111, 0, 0, .525], 89: [0, .61111, 0, 0, .525], 90: [0, .61111, 0, 0, .525], 91: [.08333, .69444, 0, 0, .525], 92: [.08333, .69444, 0, 0, .525], 93: [.08333, .69444, 0, 0, .525], 94: [0, .61111, 0, 0, .525], 95: [.09514, 0, 0, 0, .525], 96: [0, .61111, 0, 0, .525], 97: [0, .43056, 0, 0, .525], 98: [0, .61111, 0, 0, .525], 99: [0, .43056, 0, 0, .525], 100: [0, .61111, 0, 0, .525], 101: [0, .43056, 0, 0, .525], 102: [0, .61111, 0, 0, .525], 103: [.22222, .43056, 0, 0, .525], 104: [0, .61111, 0, 0, .525], 105: [0, .61111, 0, 0, .525], 106: [.22222, .61111, 0, 0, .525], 107: [0, .61111, 0, 0, .525], 108: [0, .61111, 0, 0, .525], 109: [0, .43056, 0, 0, .525], 110: [0, .43056, 0, 0, .525], 111: [0, .43056, 0, 0, .525], 112: [.22222, .43056, 0, 0, .525], 113: [.22222, .43056, 0, 0, .525], 114: [0, .43056, 0, 0, .525], 115: [0, .43056, 0, 0, .525], 116: [0, .55358, 0, 0, .525], 117: [0, .43056, 0, 0, .525], 118: [0, .43056, 0, 0, .525], 119: [0, .43056, 0, 0, .525], 120: [0, .43056, 0, 0, .525], 121: [.22222, .43056, 0, 0, .525], 122: [0, .43056, 0, 0, .525], 123: [.08333, .69444, 0, 0, .525], 124: [.08333, .69444, 0, 0, .525], 125: [.08333, .69444, 0, 0, .525], 126: [0, .61111, 0, 0, .525], 127: [0, .61111, 0, 0, .525], 160: [0, 0, 0, 0, .525], 176: [0, .61111, 0, 0, .525], 184: [.19445, 0, 0, 0, .525], 305: [0, .43056, 0, 0, .525], 567: [.22222, .43056, 0, 0, .525], 711: [0, .56597, 0, 0, .525], 713: [0, .56555, 0, 0, .525], 714: [0, .61111, 0, 0, .525], 715: [0, .61111, 0, 0, .525], 728: [0, .61111, 0, 0, .525], 730: [0, .61111, 0, 0, .525], 770: [0, .61111, 0, 0, .525], 771: [0, .61111, 0, 0, .525], 776: [0, .61111, 0, 0, .525], 915: [0, .61111, 0, 0, .525], 916: [0, .61111, 0, 0, .525], 920: [0, .61111, 0, 0, .525], 923: [0, .61111, 0, 0, .525], 926: [0, .61111, 0, 0, .525], 928: [0, .61111, 0, 0, .525], 931: [0, .61111, 0, 0, .525], 933: [0, .61111, 0, 0, .525], 934: [0, .61111, 0, 0, .525], 936: [0, .61111, 0, 0, .525], 937: [0, .61111, 0, 0, .525], 8216: [0, .61111, 0, 0, .525], 8217: [0, .61111, 0, 0, .525], 8242: [0, .61111, 0, 0, .525], 9251: [.11111, .21944, 0, 0, .525] }
                },
                oe = { slant: [.25, .25, .25], space: [0, 0, 0], stretch: [0, 0, 0], shrink: [0, 0, 0], xHeight: [.431, .431, .431], quad: [1, 1.171, 1.472], extraSpace: [0, 0, 0], num1: [.677, .732, .925], num2: [.394, .384, .387], num3: [.444, .471, .504], denom1: [.686, .752, 1.025], denom2: [.345, .344, .532], sup1: [.413, .503, .504], sup2: [.363, .431, .404], sup3: [.289, .286, .294], sub1: [.15, .143, .2], sub2: [.247, .286, .4], supDrop: [.386, .353, .494], subDrop: [.05, .071, .1], delim1: [2.39, 1.7, 1.98], delim2: [1.01, 1.157, 1.42], axisHeight: [.25, .25, .25], defaultRuleThickness: [.04, .049, .049], bigOpSpacing1: [.111, .111, .111], bigOpSpacing2: [.166, .166, .166], bigOpSpacing3: [.2, .2, .2], bigOpSpacing4: [.6, .611, .611], bigOpSpacing5: [.1, .143, .143], sqrtRuleThickness: [.04, .04, .04], ptPerEm: [10, 10, 10], doubleRuleSep: [.2, .2, .2] },
                se = { "\xc5": "A", "\xc7": "C", "\xd0": "D", "\xde": "o", "\xe5": "a", "\xe7": "c", "\xf0": "d", "\xfe": "o", "\u0410": "A", "\u0411": "B", "\u0412": "B", "\u0413": "F", "\u0414": "A", "\u0415": "E", "\u0416": "K", "\u0417": "3", "\u0418": "N", "\u0419": "N", "\u041a": "K", "\u041b": "N", "\u041c": "M", "\u041d": "H", "\u041e": "O", "\u041f": "N", "\u0420": "P", "\u0421": "C", "\u0422": "T", "\u0423": "y", "\u0424": "O", "\u0425": "X", "\u0426": "U", "\u0427": "h", "\u0428": "W", "\u0429": "W", "\u042a": "B", "\u042b": "X", "\u042c": "B", "\u042d": "3", "\u042e": "X", "\u042f": "R", "\u0430": "a", "\u0431": "b", "\u0432": "a", "\u0433": "r", "\u0434": "y", "\u0435": "e", "\u0436": "m", "\u0437": "e", "\u0438": "n", "\u0439": "n", "\u043a": "n", "\u043b": "n", "\u043c": "m", "\u043d": "n", "\u043e": "o", "\u043f": "n", "\u0440": "p", "\u0441": "c", "\u0442": "o", "\u0443": "y", "\u0444": "b", "\u0445": "x", "\u0446": "n", "\u0447": "n", "\u0448": "w", "\u0449": "w", "\u044a": "a", "\u044b": "m", "\u044c": "a", "\u044d": "e", "\u044e": "m", "\u044f": "r" },
                le = {},
                ce = { bin: 1, close: 1, inner: 1, open: 1, punct: 1, rel: 1 },
                he = { "accent-token": 1, mathord: 1, "op-token": 1, spacing: 1, textord: 1 },
                de = { math: {}, text: {} },
                ue = de,
                me = "main",
                pe = "ams",
                fe = "bin",
                ge = "mathord",
                ve = "op-token",
                be = "rel",
                ye = "spacing";
            i("math", me, be, "\u2261", "\\equiv", !0), i("math", me, be, "\u227a", "\\prec", !0), i("math", me, be, "\u227b", "\\succ", !0), i("math", me, be, "\u223c", "\\sim", !0), i("math", me, be, "\u22a5", "\\perp"), i("math", me, be, "\u2aaf", "\\preceq", !0), i("math", me, be, "\u2ab0", "\\succeq", !0), i("math", me, be, "\u2243", "\\simeq", !0), i("math", me, be, "\u2223", "\\mid", !0), i("math", me, be, "\u226a", "\\ll", !0), i("math", me, be, "\u226b", "\\gg", !0), i("math", me, be, "\u224d", "\\asymp", !0), i("math", me, be, "\u2225", "\\parallel"), i("math", me, be, "\u22c8", "\\bowtie", !0), i("math", me, be, "\u2323", "\\smile", !0), i("math", me, be, "\u2291", "\\sqsubseteq", !0), i("math", me, be, "\u2292", "\\sqsupseteq", !0), i("math", me, be, "\u2250", "\\doteq", !0), i("math", me, be, "\u2322", "\\frown", !0), i("math", me, be, "\u220b", "\\ni", !0), i("math", me, be, "\u221d", "\\propto", !0), i("math", me, be, "\u22a2", "\\vdash", !0), i("math", me, be, "\u22a3", "\\dashv", !0), i("math", me, be, "\u220b", "\\owns"), i("math", me, "punct", ".", "\\ldotp"), i("math", me, "punct", "\u22c5", "\\cdotp"), i("math", me, "textord", "#", "\\#"), i("text", me, "textord", "#", "\\#"), i("math", me, "textord", "&", "\\&"), i("text", me, "textord", "&", "\\&"), i("math", me, "textord", "\u2135", "\\aleph", !0), i("math", me, "textord", "\u2200", "\\forall", !0), i("math", me, "textord", "\u210f", "\\hbar", !0), i("math", me, "textord", "\u2203", "\\exists", !0), i("math", me, "textord", "\u2207", "\\nabla", !0), i("math", me, "textord", "\u266d", "\\flat", !0), i("math", me, "textord", "\u2113", "\\ell", !0), i("math", me, "textord", "\u266e", "\\natural", !0), i("math", me, "textord", "\u2663", "\\clubsuit", !0), i("math", me, "textord", "\u2118", "\\wp", !0), i("math", me, "textord", "\u266f", "\\sharp", !0), i("math", me, "textord", "\u2662", "\\diamondsuit", !0), i("math", me, "textord", "\u211c", "\\Re", !0), i("math", me, "textord", "\u2661", "\\heartsuit", !0), i("math", me, "textord", "\u2111", "\\Im", !0), i("math", me, "textord", "\u2660", "\\spadesuit", !0), i("text", me, "textord", "\xa7", "\\S", !0), i("text", me, "textord", "\xb6", "\\P", !0), i("math", me, "textord", "\u2020", "\\dag"), i("text", me, "textord", "\u2020", "\\dag"), i("text", me, "textord", "\u2020", "\\textdagger"), i("math", me, "textord", "\u2021", "\\ddag"), i("text", me, "textord", "\u2021", "\\ddag"), i("text", me, "textord", "\u2021", "\\textdaggerdbl"), i("math", me, "close", "\u23b1", "\\rmoustache", !0), i("math", me, "open", "\u23b0", "\\lmoustache", !0), i("math", me, "close", "\u27ef", "\\rgroup", !0), i("math", me, "open", "\u27ee", "\\lgroup", !0), i("math", me, fe, "\u2213", "\\mp", !0), i("math", me, fe, "\u2296", "\\ominus", !0), i("math", me, fe, "\u228e", "\\uplus", !0), i("math", me, fe, "\u2293", "\\sqcap", !0), i("math", me, fe, "\u2217", "\\ast"),
                i("math", me, fe, "\u2294", "\\sqcup", !0), i("math", me, fe, "\u25ef", "\\bigcirc"), i("math", me, fe, "\u2219", "\\bullet"), i("math", me, fe, "\u2021", "\\ddagger"), i("math", me, fe, "\u2240", "\\wr", !0), i("math", me, fe, "\u2a3f", "\\amalg"), i("math", me, fe, "&", "\\And"), i("math", me, be, "\u27f5", "\\longleftarrow", !0), i("math", me, be, "\u21d0", "\\Leftarrow", !0), i("math", me, be, "\u27f8", "\\Longleftarrow", !0), i("math", me, be, "\u27f6", "\\longrightarrow", !0), i("math", me, be, "\u21d2", "\\Rightarrow", !0), i("math", me, be, "\u27f9", "\\Longrightarrow", !0), i("math", me, be, "\u2194", "\\leftrightarrow", !0), i("math", me, be, "\u27f7", "\\longleftrightarrow", !0), i("math", me, be, "\u21d4", "\\Leftrightarrow", !0), i("math", me, be, "\u27fa", "\\Longleftrightarrow", !0), i("math", me, be, "\u21a6", "\\mapsto", !0), i("math", me, be, "\u27fc", "\\longmapsto", !0), i("math", me, be, "\u2197", "\\nearrow", !0), i("math", me, be, "\u21a9", "\\hookleftarrow", !0), i("math", me, be, "\u21aa", "\\hookrightarrow", !0), i("math", me, be, "\u2198", "\\searrow", !0), i("math", me, be, "\u21bc", "\\leftharpoonup", !0), i("math", me, be, "\u21c0", "\\rightharpoonup", !0), i("math", me, be, "\u2199", "\\swarrow", !0), i("math", me, be, "\u21bd", "\\leftharpoondown", !0), i("math", me, be, "\u21c1", "\\rightharpoondown", !0), i("math", me, be, "\u2196", "\\nwarrow", !0), i("math", me, be, "\u21cc", "\\rightleftharpoons", !0), i("math", pe, be, "\u226e", "\\nless", !0), i("math", pe, be, "\ue010", "\\nleqslant"), i("math", pe, be, "\ue011", "\\nleqq"), i("math", pe, be, "\u2a87", "\\lneq", !0), i("math", pe, be, "\u2268", "\\lneqq", !0), i("math", pe, be, "\ue00c", "\\lvertneqq"), i("math", pe, be, "\u22e6", "\\lnsim", !0), i("math", pe, be, "\u2a89", "\\lnapprox", !0), i("math", pe, be, "\u2280", "\\nprec", !0), i("math", pe, be, "\u22e0", "\\npreceq", !0), i("math", pe, be, "\u22e8", "\\precnsim", !0), i("math", pe, be, "\u2ab9", "\\precnapprox", !0), i("math", pe, be, "\u2241", "\\nsim", !0), i("math", pe, be, "\ue006", "\\nshortmid"), i("math", pe, be, "\u2224", "\\nmid", !0), i("math", pe, be, "\u22ac", "\\nvdash", !0), i("math", pe, be, "\u22ad", "\\nvDash", !0), i("math", pe, be, "\u22ea", "\\ntriangleleft"), i("math", pe, be, "\u22ec", "\\ntrianglelefteq", !0), i("math", pe, be, "\u228a", "\\subsetneq", !0), i("math", pe, be, "\ue01a", "\\varsubsetneq"), i("math", pe, be, "\u2acb", "\\subsetneqq", !0), i("math", pe, be, "\ue017", "\\varsubsetneqq"), i("math", pe, be, "\u226f", "\\ngtr", !0), i("math", pe, be, "\ue00f", "\\ngeqslant"), i("math", pe, be, "\ue00e", "\\ngeqq"), i("math", pe, be, "\u2a88", "\\gneq", !0), i("math", pe, be, "\u2269", "\\gneqq", !0), i("math", pe, be, "\ue00d", "\\gvertneqq"), i("math", pe, be, "\u22e7", "\\gnsim", !0), i("math", pe, be, "\u2a8a", "\\gnapprox", !0), i("math", pe, be, "\u2281", "\\nsucc", !0), i("math", pe, be, "\u22e1", "\\nsucceq", !0), i("math", pe, be, "\u22e9", "\\succnsim", !0), i("math", pe, be, "\u2aba", "\\succnapprox", !0), i("math", pe, be, "\u2246", "\\ncong", !0), i("math", pe, be, "\ue007", "\\nshortparallel"), i("math", pe, be, "\u2226", "\\nparallel", !0), i("math", pe, be, "\u22af", "\\nVDash", !0), i("math", pe, be, "\u22eb", "\\ntriangleright"), i("math", pe, be, "\u22ed", "\\ntrianglerighteq", !0), i("math", pe, be, "\ue018", "\\nsupseteqq"), i("math", pe, be, "\u228b", "\\supsetneq", !0), i("math", pe, be, "\ue01b", "\\varsupsetneq"), i("math", pe, be, "\u2acc", "\\supsetneqq", !0), i("math", pe, be, "\ue019", "\\varsupsetneqq"), i("math", pe, be, "\u22ae", "\\nVdash", !0), i("math", pe, be, "\u2ab5", "\\precneqq", !0), i("math", pe, be, "\u2ab6", "\\succneqq", !0), i("math", pe, be, "\ue016", "\\nsubseteqq"), i("math", pe, fe, "\u22b4", "\\unlhd"), i("math", pe, fe, "\u22b5", "\\unrhd"), i("math", pe, be, "\u219a", "\\nleftarrow", !0), i("math", pe, be, "\u219b", "\\nrightarrow", !0), i("math", pe, be, "\u21cd", "\\nLeftarrow", !0), i("math", pe, be, "\u21cf", "\\nRightarrow", !0), i("math", pe, be, "\u21ae", "\\nleftrightarrow", !0), i("math", pe, be, "\u21ce", "\\nLeftrightarrow", !0), i("math", pe, be, "\u25b3", "\\vartriangle"), i("math", pe, "textord", "\u210f", "\\hslash"), i("math", pe, "textord", "\u25bd", "\\triangledown"), i("math", pe, "textord", "\u25ca", "\\lozenge"), i("math", pe, "textord", "\u24c8", "\\circledS"), i("math", pe, "textord", "\xae", "\\circledR"), i("text", pe, "textord", "\xae", "\\circledR"), i("math", pe, "textord", "\u2221", "\\measuredangle", !0), i("math", pe, "textord", "\u2204", "\\nexists"), i("math", pe, "textord", "\u2127", "\\mho"), i("math", pe, "textord", "\u2132", "\\Finv", !0), i("math", pe, "textord", "\u2141", "\\Game", !0), i("math", pe, "textord", "k", "\\Bbbk"), i("math", pe, "textord", "\u2035", "\\backprime"), i("math", pe, "textord", "\u25b2", "\\blacktriangle"), i("math", pe, "textord", "\u25bc", "\\blacktriangledown"), i("math", pe, "textord", "\u25a0", "\\blacksquare"), i("math", pe, "textord", "\u29eb", "\\blacklozenge"), i("math", pe, "textord", "\u2605", "\\bigstar"), i("math", pe, "textord", "\u2222", "\\sphericalangle", !0), i("math", pe, "textord", "\u2201", "\\complement", !0), i("math", pe, "textord", "\xf0", "\\eth", !0), i("math", pe, "textord", "\u2571", "\\diagup"), i("math", pe, "textord", "\u2572", "\\diagdown"), i("math", pe, "textord", "\u25a1", "\\square"), i("math", pe, "textord", "\u25a1", "\\Box"), i("math", pe, "textord", "\u25ca", "\\Diamond"), i("math", pe, "textord", "\xa5", "\\yen", !0), i("text", pe, "textord", "\xa5", "\\yen", !0), i("math", pe, "textord", "\u2713", "\\checkmark", !0), i("text", pe, "textord", "\u2713", "\\checkmark"), i("math", pe, "textord", "\u2136", "\\beth", !0), i("math", pe, "textord", "\u2138", "\\daleth", !0), i("math", pe, "textord", "\u2137", "\\gimel", !0), i("math", pe, "textord", "\u03dd", "\\digamma"), i("math", pe, "textord", "\u03f0", "\\varkappa"), i("math", pe, "open", "\u250c", "\\ulcorner", !0), i("math", pe, "close", "\u2510", "\\urcorner", !0), i("math", pe, "open", "\u2514", "\\llcorner", !0), i("math", pe, "close", "\u2518", "\\lrcorner", !0), i("math", pe, be, "\u2266", "\\leqq", !0), i("math", pe, be, "\u2a7d", "\\leqslant", !0), i("math", pe, be, "\u2a95", "\\eqslantless", !0), i("math", pe, be, "\u2272", "\\lesssim", !0), i("math", pe, be, "\u2a85", "\\lessapprox", !0), i("math", pe, be, "\u224a", "\\approxeq", !0), i("math", pe, fe, "\u22d6", "\\lessdot"), i("math", pe, be, "\u22d8", "\\lll", !0), i("math", pe, be, "\u2276", "\\lessgtr", !0), i("math", pe, be, "\u22da", "\\lesseqgtr", !0), i("math", pe, be, "\u2a8b", "\\lesseqqgtr", !0), i("math", pe, be, "\u2251", "\\doteqdot"), i("math", pe, be, "\u2253", "\\risingdotseq", !0), i("math", pe, be, "\u2252", "\\fallingdotseq", !0), i("math", pe, be, "\u223d", "\\backsim", !0), i("math", pe, be, "\u22cd", "\\backsimeq", !0), i("math", pe, be, "\u2ac5", "\\subseteqq", !0), i("math", pe, be, "\u22d0", "\\Subset", !0), i("math", pe, be, "\u228f", "\\sqsubset", !0), i("math", pe, be, "\u227c", "\\preccurlyeq", !0), i("math", pe, be, "\u22de", "\\curlyeqprec", !0), i("math", pe, be, "\u227e", "\\precsim", !0), i("math", pe, be, "\u2ab7", "\\precapprox", !0), i("math", pe, be, "\u22b2", "\\vartriangleleft"), i("math", pe, be, "\u22b4", "\\trianglelefteq"), i("math", pe, be, "\u22a8", "\\vDash", !0), i("math", pe, be, "\u22aa", "\\Vvdash", !0), i("math", pe, be, "\u2323", "\\smallsmile"), i("math", pe, be, "\u2322", "\\smallfrown"), i("math", pe, be, "\u224f", "\\bumpeq", !0), i("math", pe, be, "\u224e", "\\Bumpeq", !0), i("math", pe, be, "\u2267", "\\geqq", !0), i("math", pe, be, "\u2a7e", "\\geqslant", !0), i("math", pe, be, "\u2a96", "\\eqslantgtr", !0), i("math", pe, be, "\u2273", "\\gtrsim", !0), i("math", pe, be, "\u2a86", "\\gtrapprox", !0), i("math", pe, fe, "\u22d7", "\\gtrdot"), i("math", pe, be, "\u22d9", "\\ggg", !0), i("math", pe, be, "\u2277", "\\gtrless", !0), i("math", pe, be, "\u22db", "\\gtreqless", !0), i("math", pe, be, "\u2a8c", "\\gtreqqless", !0), i("math", pe, be, "\u2256", "\\eqcirc", !0), i("math", pe, be, "\u2257", "\\circeq", !0), i("math", pe, be, "\u225c", "\\triangleq", !0), i("math", pe, be, "\u223c", "\\thicksim"), i("math", pe, be, "\u2248", "\\thickapprox"), i("math", pe, be, "\u2ac6", "\\supseteqq", !0), i("math", pe, be, "\u22d1", "\\Supset", !0), i("math", pe, be, "\u2290", "\\sqsupset", !0), i("math", pe, be, "\u227d", "\\succcurlyeq", !0), i("math", pe, be, "\u22df", "\\curlyeqsucc", !0), i("math", pe, be, "\u227f", "\\succsim", !0), i("math", pe, be, "\u2ab8", "\\succapprox", !0), i("math", pe, be, "\u22b3", "\\vartriangleright"), i("math", pe, be, "\u22b5", "\\trianglerighteq"), i("math", pe, be, "\u22a9", "\\Vdash", !0), i("math", pe, be, "\u2223", "\\shortmid"), i("math", pe, be, "\u2225", "\\shortparallel"), i("math", pe, be, "\u226c", "\\between", !0), i("math", pe, be, "\u22d4", "\\pitchfork", !0), i("math", pe, be, "\u221d", "\\varpropto"), i("math", pe, be, "\u25c0", "\\blacktriangleleft"), i("math", pe, be, "\u2234", "\\therefore", !0), i("math", pe, be, "\u220d", "\\backepsilon"), i("math", pe, be, "\u25b6", "\\blacktriangleright"), i("math", pe, be, "\u2235", "\\because", !0), i("math", pe, be, "\u22d8", "\\llless"), i("math", pe, be, "\u22d9", "\\gggtr"), i("math", pe, fe, "\u22b2", "\\lhd"), i("math", pe, fe, "\u22b3", "\\rhd"), i("math", pe, be, "\u2242", "\\eqsim", !0), i("math", me, be, "\u22c8", "\\Join"), i("math", pe, be, "\u2251", "\\Doteq", !0), i("math", pe, fe, "\u2214", "\\dotplus", !0), i("math", pe, fe, "\u2216", "\\smallsetminus"), i("math", pe, fe, "\u22d2", "\\Cap", !0), i("math", pe, fe, "\u22d3", "\\Cup", !0), i("math", pe, fe, "\u2a5e", "\\doublebarwedge", !0), i("math", pe, fe, "\u229f", "\\boxminus", !0), i("math", pe, fe, "\u229e", "\\boxplus", !0), i("math", pe, fe, "\u22c7", "\\divideontimes", !0), i("math", pe, fe, "\u22c9", "\\ltimes", !0), i("math", pe, fe, "\u22ca", "\\rtimes", !0), i("math", pe, fe, "\u22cb", "\\leftthreetimes", !0), i("math", pe, fe, "\u22cc", "\\rightthreetimes", !0), i("math", pe, fe, "\u22cf", "\\curlywedge", !0), i("math", pe, fe, "\u22ce", "\\curlyvee", !0), i("math", pe, fe, "\u229d", "\\circleddash", !0), i("math", pe, fe, "\u229b", "\\circledast", !0), i("math", pe, fe, "\u22c5", "\\centerdot"), i("math", pe, fe, "\u22ba", "\\intercal", !0), i("math", pe, fe, "\u22d2", "\\doublecap"), i("math", pe, fe, "\u22d3", "\\doublecup"), i("math", pe, fe, "\u22a0", "\\boxtimes", !0), i("math", pe, be, "\u21e2", "\\dashrightarrow", !0), i("math", pe, be, "\u21e0", "\\dashleftarrow", !0), i("math", pe, be, "\u21c7", "\\leftleftarrows", !0), i("math", pe, be, "\u21c6", "\\leftrightarrows", !0), i("math", pe, be, "\u21da", "\\Lleftarrow", !0), i("math", pe, be, "\u219e", "\\twoheadleftarrow", !0), i("math", pe, be, "\u21a2", "\\leftarrowtail", !0), i("math", pe, be, "\u21ab", "\\looparrowleft", !0), i("math", pe, be, "\u21cb", "\\leftrightharpoons", !0), i("math", pe, be, "\u21b6", "\\curvearrowleft", !0), i("math", pe, be, "\u21ba", "\\circlearrowleft", !0), i("math", pe, be, "\u21b0", "\\Lsh", !0), i("math", pe, be, "\u21c8", "\\upuparrows", !0), i("math", pe, be, "\u21bf", "\\upharpoonleft", !0), i("math", pe, be, "\u21c3", "\\downharpoonleft", !0), i("math", pe, be, "\u22b8", "\\multimap", !0), i("math", pe, be, "\u21ad", "\\leftrightsquigarrow", !0), i("math", pe, be, "\u21c9", "\\rightrightarrows", !0), i("math", pe, be, "\u21c4", "\\rightleftarrows", !0), i("math", pe, be, "\u21a0", "\\twoheadrightarrow", !0), i("math", pe, be, "\u21a3", "\\rightarrowtail", !0), i("math", pe, be, "\u21ac", "\\looparrowright", !0), i("math", pe, be, "\u21b7", "\\curvearrowright", !0), i("math", pe, be, "\u21bb", "\\circlearrowright", !0), i("math", pe, be, "\u21b1", "\\Rsh", !0), i("math", pe, be, "\u21ca", "\\downdownarrows", !0), i("math", pe, be, "\u21be", "\\upharpoonright", !0), i("math", pe, be, "\u21c2", "\\downharpoonright", !0), i("math", pe, be, "\u21dd", "\\rightsquigarrow", !0), i("math", pe, be, "\u21dd", "\\leadsto"), i("math", pe, be, "\u21db", "\\Rrightarrow", !0), i("math", pe, be, "\u21be", "\\restriction"), i("math", me, "textord", "\u2018", "`"), i("math", me, "textord", "$", "\\$"), i("text", me, "textord", "$", "\\$"), i("text", me, "textord", "$", "\\textdollar"), i("math", me, "textord", "%", "\\%"), i("text", me, "textord", "%", "\\%"), i("math", me, "textord", "_", "\\_"), i("text", me, "textord", "_", "\\_"), i("text", me, "textord", "_", "\\textunderscore"), i("math", me, "textord", "\u2220", "\\angle", !0), i("math", me, "textord", "\u221e", "\\infty", !0), i("math", me, "textord", "\u2032", "\\prime"), i("math", me, "textord", "\u25b3", "\\triangle"), i("math", me, "textord", "\u0393", "\\Gamma", !0), i("math", me, "textord", "\u0394", "\\Delta", !0), i("math", me, "textord", "\u0398", "\\Theta", !0), i("math", me, "textord", "\u039b", "\\Lambda", !0), i("math", me, "textord", "\u039e", "\\Xi", !0), i("math", me, "textord", "\u03a0", "\\Pi", !0), i("math", me, "textord", "\u03a3", "\\Sigma", !0), i("math", me, "textord", "\u03a5", "\\Upsilon", !0), i("math", me, "textord", "\u03a6", "\\Phi", !0), i("math", me, "textord", "\u03a8", "\\Psi", !0), i("math", me, "textord", "\u03a9", "\\Omega", !0), i("math", me, "textord", "A", "\u0391"), i("math", me, "textord", "B", "\u0392"), i("math", me, "textord", "E", "\u0395"), i("math", me, "textord", "Z", "\u0396"), i("math", me, "textord", "H", "\u0397"), i("math", me, "textord", "I", "\u0399"), i("math", me, "textord", "K", "\u039a"), i("math", me, "textord", "M", "\u039c"), i("math", me, "textord", "N", "\u039d"), i("math", me, "textord", "O", "\u039f"), i("math", me, "textord", "P", "\u03a1"), i("math", me, "textord", "T", "\u03a4"), i("math", me, "textord", "X", "\u03a7"), i("math", me, "textord", "\xac", "\\neg", !0), i("math", me, "textord", "\xac", "\\lnot"), i("math", me, "textord", "\u22a4", "\\top"), i("math", me, "textord", "\u22a5", "\\bot"), i("math", me, "textord", "\u2205", "\\emptyset"), i("math", pe, "textord", "\u2205", "\\varnothing"), i("math", me, ge, "\u03b1", "\\alpha", !0), i("math", me, ge, "\u03b2", "\\beta", !0), i("math", me, ge, "\u03b3", "\\gamma", !0), i("math", me, ge, "\u03b4", "\\delta", !0), i("math", me, ge, "\u03f5", "\\epsilon", !0), i("math", me, ge, "\u03b6", "\\zeta", !0), i("math", me, ge, "\u03b7", "\\eta", !0), i("math", me, ge, "\u03b8", "\\theta", !0), i("math", me, ge, "\u03b9", "\\iota", !0), i("math", me, ge, "\u03ba", "\\kappa", !0), i("math", me, ge, "\u03bb", "\\lambda", !0), i("math", me, ge, "\u03bc", "\\mu", !0), i("math", me, ge, "\u03bd", "\\nu", !0), i("math", me, ge, "\u03be", "\\xi", !0), i("math", me, ge, "\u03bf", "\\omicron", !0), i("math", me, ge, "\u03c0", "\\pi", !0), i("math", me, ge, "\u03c1", "\\rho", !0), i("math", me, ge, "\u03c3", "\\sigma", !0), i("math", me, ge, "\u03c4", "\\tau", !0), i("math", me, ge, "\u03c5", "\\upsilon", !0), i("math", me, ge, "\u03d5", "\\phi", !0), i("math", me, ge, "\u03c7", "\\chi", !0), i("math", me, ge, "\u03c8", "\\psi", !0), i("math", me, ge, "\u03c9", "\\omega", !0), i("math", me, ge, "\u03b5", "\\varepsilon", !0), i("math", me, ge, "\u03d1", "\\vartheta", !0), i("math", me, ge, "\u03d6", "\\varpi", !0), i("math", me, ge, "\u03f1", "\\varrho", !0), i("math", me, ge, "\u03c2", "\\varsigma", !0), i("math", me, ge, "\u03c6", "\\varphi", !0), i("math", me, fe, "\u2217", "*"), i("math", me, fe, "+", "+"), i("math", me, fe, "\u2212", "-"), i("math", me, fe, "\u22c5", "\\cdot", !0), i("math", me, fe, "\u2218", "\\circ"), i("math", me, fe, "\xf7", "\\div", !0), i("math", me, fe, "\xb1", "\\pm", !0), i("math", me, fe, "\xd7", "\\times", !0), i("math", me, fe, "\u2229", "\\cap", !0), i("math", me, fe, "\u222a", "\\cup", !0), i("math", me, fe, "\u2216", "\\setminus"), i("math", me, fe, "\u2227", "\\land"), i("math", me, fe, "\u2228", "\\lor"), i("math", me, fe, "\u2227", "\\wedge", !0), i("math", me, fe, "\u2228", "\\vee", !0), i("math", me, "textord", "\u221a", "\\surd"), i("math", me, "open", "(", "("), i("math", me, "open", "[", "["), i("math", me, "open", "\u27e8", "\\langle", !0), i("math", me, "open", "\u2223", "\\lvert"), i("math", me, "open", "\u2225", "\\lVert"), i("math", me, "close", ")", ")"), i("math", me, "close", "]", "]"), i("math", me, "close", "?", "?"), i("math", me, "close", "!", "!"), i("math", me, "close", "\u27e9", "\\rangle", !0), i("math", me, "close", "\u2223", "\\rvert"), i("math", me, "close", "\u2225", "\\rVert"), i("math", me, be, "=", "="), i("math", me, be, "<", "<"), i("math", me, be, ">", ">"), i("math", me, be, ":", ":"), i("math", me, be, "\u2248", "\\approx", !0), i("math", me, be, "\u2245", "\\cong", !0), i("math", me, be, "\u2265", "\\ge"), i("math", me, be, "\u2265", "\\geq", !0), i("math", me, be, "\u2190", "\\gets"), i("math", me, be, ">", "\\gt"), i("math", me, be, "\u2208", "\\in", !0), i("math", me, be, "\ue020", "\\@not"), i("math", me, be, "\u2282", "\\subset", !0), i("math", me, be, "\u2283", "\\supset", !0), i("math", me, be, "\u2286", "\\subseteq", !0), i("math", me, be, "\u2287", "\\supseteq", !0), i("math", pe, be, "\u2288", "\\nsubseteq", !0), i("math", pe, be, "\u2289", "\\nsupseteq", !0), i("math", me, be, "\u22a8", "\\models"), i("math", me, be, "\u2190", "\\leftarrow", !0), i("math", me, be, "\u2264", "\\le"), i("math", me, be, "\u2264", "\\leq", !0), i("math", me, be, "<", "\\lt"), i("math", me, be, "\u2192", "\\rightarrow", !0), i("math", me, be, "\u2192", "\\to"), i("math", pe, be, "\u2271", "\\ngeq", !0), i("math", pe, be, "\u2270", "\\nleq", !0), i("math", me, ye, "\xa0", "\\ "), i("math", me, ye, "\xa0", "~"), i("math", me, ye, "\xa0", "\\space"), i("math", me, ye, "\xa0", "\\nobreakspace"), i("text", me, ye, "\xa0", "\\ "), i("text", me, ye, "\xa0", "~"), i("text", me, ye, "\xa0", "\\space"), i("text", me, ye, "\xa0", "\\nobreakspace"), i("math", me, ye, null, "\\nobreak"), i("math", me, ye, null, "\\allowbreak"), i("math", me, "punct", ",", ","), i("math", me, "punct", ";", ";"), i("math", pe, fe, "\u22bc", "\\barwedge", !0), i("math", pe, fe, "\u22bb", "\\veebar", !0), i("math", me, fe, "\u2299", "\\odot", !0), i("math", me, fe, "\u2295", "\\oplus", !0), i("math", me, fe, "\u2297", "\\otimes", !0), i("math", me, "textord", "\u2202", "\\partial", !0), i("math", me, fe, "\u2298", "\\oslash", !0), i("math", pe, fe, "\u229a", "\\circledcirc", !0), i("math", pe, fe, "\u22a1", "\\boxdot", !0), i("math", me, fe, "\u25b3", "\\bigtriangleup"), i("math", me, fe, "\u25bd", "\\bigtriangledown"), i("math", me, fe, "\u2020", "\\dagger"), i("math", me, fe, "\u22c4", "\\diamond"), i("math", me, fe, "\u22c6", "\\star"), i("math", me, fe, "\u25c3", "\\triangleleft"), i("math", me, fe, "\u25b9", "\\triangleright"), i("math", me, "open", "{", "\\{"), i("text", me, "textord", "{", "\\{"), i("text", me, "textord", "{", "\\textbraceleft"), i("math", me, "close", "}", "\\}"), i("text", me, "textord", "}", "\\}"), i("text", me, "textord", "}", "\\textbraceright"), i("math", me, "open", "{", "\\lbrace"), i("math", me, "close", "}", "\\rbrace"), i("math", me, "open", "[", "\\lbrack"), i("text", me, "textord", "[", "\\lbrack"), i("math", me, "close", "]", "\\rbrack"), i("text", me, "textord", "]", "\\rbrack"), i("math", me, "open", "(", "\\lparen"), i("math", me, "close", ")", "\\rparen"), i("text", me, "textord", "<", "\\textless"), i("text", me, "textord", ">", "\\textgreater"), i("math", me, "open", "\u230a", "\\lfloor", !0), i("math", me, "close", "\u230b", "\\rfloor", !0), i("math", me, "open", "\u2308", "\\lceil", !0), i("math", me, "close", "\u2309", "\\rceil", !0), i("math", me, "textord", "\\", "\\backslash"), i("math", me, "textord", "\u2223", "|"), i("math", me, "textord", "\u2223", "\\vert"), i("text", me, "textord", "|", "\\textbar"), i("math", me, "textord", "\u2225", "\\|"), i("math", me, "textord", "\u2225", "\\Vert"), i("text", me, "textord", "\u2225", "\\textbardbl"), i("text", me, "textord", "~", "\\textasciitilde"), i("text", me, "textord", "\\", "\\textbackslash"), i("text", me, "textord", "^", "\\textasciicircum"), i("math", me, be, "\u2191", "\\uparrow", !0), i("math", me, be, "\u21d1", "\\Uparrow", !0), i("math", me, be, "\u2193", "\\downarrow", !0), i("math", me, be, "\u21d3", "\\Downarrow", !0), i("math", me, be, "\u2195", "\\updownarrow", !0), i("math", me, be, "\u21d5", "\\Updownarrow", !0), i("math", me, ve, "\u2210", "\\coprod"), i("math", me, ve, "\u22c1", "\\bigvee"), i("math", me, ve, "\u22c0", "\\bigwedge"), i("math", me, ve, "\u2a04", "\\biguplus"), i("math", me, ve, "\u22c2", "\\bigcap"), i("math", me, ve, "\u22c3", "\\bigcup"), i("math", me, ve, "\u222b", "\\int"), i("math", me, ve, "\u222b", "\\intop"), i("math", me, ve, "\u222c", "\\iint"), i("math", me, ve, "\u222d", "\\iiint"), i("math", me, ve, "\u220f", "\\prod"), i("math", me, ve, "\u2211", "\\sum"), i("math", me, ve, "\u2a02", "\\bigotimes"), i("math", me, ve, "\u2a01", "\\bigoplus"), i("math", me, ve, "\u2a00", "\\bigodot"), i("math", me, ve, "\u222e", "\\oint"), i("math", me, ve, "\u222f", "\\oiint"), i("math", me, ve, "\u2230", "\\oiiint"), i("math", me, ve, "\u2a06", "\\bigsqcup"), i("math", me, ve, "\u222b", "\\smallint"), i("text", me, "inner", "\u2026", "\\textellipsis"), i("math", me, "inner", "\u2026", "\\mathellipsis"), i("text", me, "inner", "\u2026", "\\ldots", !0), i("math", me, "inner", "\u2026", "\\ldots", !0), i("math", me, "inner", "\u22ef", "\\@cdots", !0), i("math", me, "inner", "\u22f1", "\\ddots", !0), i("math", me, "textord", "\u22ee", "\\varvdots"), i("math", me, "accent-token", "\u02ca", "\\acute"), i("math", me, "accent-token", "\u02cb", "\\grave"), i("math", me, "accent-token", "\xa8", "\\ddot"), i("math", me, "accent-token", "~", "\\tilde"), i("math", me, "accent-token", "\u02c9", "\\bar"), i("math", me, "accent-token", "\u02d8", "\\breve"), i("math", me, "accent-token", "\u02c7", "\\check"), i("math", me, "accent-token", "^", "\\hat"), i("math", me, "accent-token", "\u20d7", "\\vec"), i("math", me, "accent-token", "\u02d9", "\\dot"), i("math", me, "accent-token", "\u02da", "\\mathring"), i("math", me, ge, "\u0131", "\\imath", !0), i("math", me, ge, "\u0237", "\\jmath", !0), i("text", me, "textord", "\u0131", "\\i", !0), i("text", me, "textord", "\u0237", "\\j", !0), i("text", me, "textord", "\xdf", "\\ss", !0), i("text", me, "textord", "\xe6", "\\ae", !0), i("text", me, "textord", "\xe6", "\\ae", !0), i("text", me, "textord", "\u0153", "\\oe", !0), i("text", me, "textord", "\xf8", "\\o", !0), i("text", me, "textord", "\xc6", "\\AE", !0), i("text", me, "textord", "\u0152", "\\OE", !0), i("text", me, "textord", "\xd8", "\\O", !0), i("text", me, "accent-token", "\u02ca", "\\'"), i("text", me, "accent-token", "\u02cb", "\\`"), i("text", me, "accent-token", "\u02c6", "\\^"), i("text", me, "accent-token", "\u02dc", "\\~"), i("text", me, "accent-token", "\u02c9", "\\="), i("text", me, "accent-token", "\u02d8", "\\u"), i("text", me, "accent-token", "\u02d9", "\\."), i("text", me, "accent-token", "\u02da", "\\r"), i("text", me, "accent-token", "\u02c7", "\\v"), i("text", me, "accent-token", "\xa8", '\\"'), i("text", me, "accent-token", "\u02dd", "\\H"), i("text", me, "accent-token", "\u25ef", "\\textcircled");
            var xe = { "--": !0, "---": !0, "``": !0, "''": !0 };
            i("text", me, "textord", "\u2013", "--"), i("text", me, "textord", "\u2013", "\\textendash"), i("text", me, "textord", "\u2014", "---"), i("text", me, "textord", "\u2014", "\\textemdash"), i("text", me, "textord", "\u2018", "`"), i("text", me, "textord", "\u2018", "\\textquoteleft"), i("text", me, "textord", "\u2019", "'"), i("text", me, "textord", "\u2019", "\\textquoteright"), i("text", me, "textord", "\u201c", "``"), i("text", me, "textord", "\u201c", "\\textquotedblleft"), i("text", me, "textord", "\u201d", "''"), i("text", me, "textord", "\u201d", "\\textquotedblright"), i("math", me, "textord", "\xb0", "\\degree", !0), i("text", me, "textord", "\xb0", "\\degree"), i("text", me, "textord", "\xb0", "\\textdegree", !0), i("math", me, ge, "\xa3", "\\pounds"), i("math", me, ge, "\xa3", "\\mathsterling", !0), i("text", me, ge, "\xa3", "\\pounds"), i("text", me, ge, "\xa3", "\\textsterling", !0), i("math", pe, "textord", "\u2720", "\\maltese"), i("text", pe, "textord", "\u2720", "\\maltese"), i("text", me, ye, "\xa0", "\\ "), i("text", me, ye, "\xa0", " "), i("text", me, ye, "\xa0", "~");
            for (var we = 0; we < '0123456789/@."'.length; we++) { var ke = '0123456789/@."'.charAt(we);
                i("math", me, "textord", ke, ke) }
            for (var Se = 0; Se < '0123456789!@*()-=+[]<>|";:?/.,'.length; Se++) { var Ae = '0123456789!@*()-=+[]<>|";:?/.,'.charAt(Se);
                i("text", me, "textord", Ae, Ae) }
            for (var Me = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", ze = 0; ze < Me.length; ze++) { var Te = Me.charAt(ze);
                i("math", me, ge, Te, Te), i("text", me, "textord", Te, Te) } i("math", pe, "textord", "C", "\u2102"), i("text", pe, "textord", "C", "\u2102"), i("math", pe, "textord", "H", "\u210d"), i("text", pe, "textord", "H", "\u210d"), i("math", pe, "textord", "N", "\u2115"), i("text", pe, "textord", "N", "\u2115"), i("math", pe, "textord", "P", "\u2119"), i("text", pe, "textord", "P", "\u2119"), i("math", pe, "textord", "Q", "\u211a"), i("text", pe, "textord", "Q", "\u211a"), i("math", pe, "textord", "R", "\u211d"), i("text", pe, "textord", "R", "\u211d"), i("math", pe, "textord", "Z", "\u2124"), i("text", pe, "textord", "Z", "\u2124"), i("math", me, ge, "h", "\u210e"), i("text", me, ge, "h", "\u210e");
            for (var Ee = "", Le = 0; Le < Me.length; Le++) { var Ce = Me.charAt(Le);
                i("math", me, ge, Ce, Ee = String.fromCharCode(55349, 56320 + Le)), i("text", me, "textord", Ce, Ee), i("math", me, ge, Ce, Ee = String.fromCharCode(55349, 56372 + Le)), i("text", me, "textord", Ce, Ee), i("math", me, ge, Ce, Ee = String.fromCharCode(55349, 56424 + Le)), i("text", me, "textord", Ce, Ee), i("math", me, ge, Ce, Ee = String.fromCharCode(55349, 56580 + Le)), i("text", me, "textord", Ce, Ee), i("math", me, ge, Ce, Ee = String.fromCharCode(55349, 56736 + Le)), i("text", me, "textord", Ce, Ee), i("math", me, ge, Ce, Ee = String.fromCharCode(55349, 56788 + Le)), i("text", me, "textord", Ce, Ee), i("math", me, ge, Ce, Ee = String.fromCharCode(55349, 56840 + Le)), i("text", me, "textord", Ce, Ee), i("math", me, ge, Ce, Ee = String.fromCharCode(55349, 56944 + Le)), i("text", me, "textord", Ce, Ee), Le < 26 && (i("math", me, ge, Ce, Ee = String.fromCharCode(55349, 56632 + Le)), i("text", me, "textord", Ce, Ee), i("math", me, ge, Ce, Ee = String.fromCharCode(55349, 56476 + Le)), i("text", me, "textord", Ce, Ee)) } i("math", me, ge, "k", Ee = String.fromCharCode(55349, 56668)), i("text", me, "textord", "k", Ee);
            for (var Ne = 0; Ne < 10; Ne++) { var qe = Ne.toString();
                i("math", me, ge, qe, Ee = String.fromCharCode(55349, 57294 + Ne)), i("text", me, "textord", qe, Ee), i("math", me, ge, qe, Ee = String.fromCharCode(55349, 57314 + Ne)), i("text", me, "textord", qe, Ee), i("math", me, ge, qe, Ee = String.fromCharCode(55349, 57324 + Ne)), i("text", me, "textord", qe, Ee), i("math", me, ge, qe, Ee = String.fromCharCode(55349, 57334 + Ne)), i("text", me, "textord", qe, Ee) }
            for (var Be = 0; Be < "\xc7\xd0\xde\xe7\xfe".length; Be++) { var Ie = "\xc7\xd0\xde\xe7\xfe".charAt(Be);
                i("math", me, ge, Ie, Ie), i("text", me, "textord", Ie, Ie) } i("text", me, "textord", "\xf0", "\xf0"), i("text", me, "textord", "\u2013", "\u2013"), i("text", me, "textord", "\u2014", "\u2014"), i("text", me, "textord", "\u2018", "\u2018"), i("text", me, "textord", "\u2019", "\u2019"), i("text", me, "textord", "\u201c", "\u201c"), i("text", me, "textord", "\u201d", "\u201d");
            var Oe = [
                    ["mathbf", "textbf", "Main-Bold"],
                    ["mathbf", "textbf", "Main-Bold"],
                    ["mathdefault", "textit", "Math-Italic"],
                    ["mathdefault", "textit", "Math-Italic"],
                    ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
                    ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
                    ["mathscr", "textscr", "Script-Regular"],
                    ["", "", ""],
                    ["", "", ""],
                    ["", "", ""],
                    ["mathfrak", "textfrak", "Fraktur-Regular"],
                    ["mathfrak", "textfrak", "Fraktur-Regular"],
                    ["mathbb", "textbb", "AMS-Regular"],
                    ["mathbb", "textbb", "AMS-Regular"],
                    ["", "", ""],
                    ["", "", ""],
                    ["mathsf", "textsf", "SansSerif-Regular"],
                    ["mathsf", "textsf", "SansSerif-Regular"],
                    ["mathboldsf", "textboldsf", "SansSerif-Bold"],
                    ["mathboldsf", "textboldsf", "SansSerif-Bold"],
                    ["mathitsf", "textitsf", "SansSerif-Italic"],
                    ["mathitsf", "textitsf", "SansSerif-Italic"],
                    ["", "", ""],
                    ["", "", ""],
                    ["mathtt", "texttt", "Typewriter-Regular"],
                    ["mathtt", "texttt", "Typewriter-Regular"]
                ],
                Re = [
                    ["mathbf", "textbf", "Main-Bold"],
                    ["", "", ""],
                    ["mathsf", "textsf", "SansSerif-Regular"],
                    ["mathboldsf", "textboldsf", "SansSerif-Bold"],
                    ["mathtt", "texttt", "Typewriter-Regular"]
                ],
                Pe = [
                    [1, 1, 1],
                    [2, 1, 1],
                    [3, 1, 1],
                    [4, 2, 1],
                    [5, 2, 1],
                    [6, 3, 1],
                    [7, 4, 2],
                    [8, 6, 3],
                    [9, 7, 6],
                    [10, 8, 7],
                    [11, 10, 9]
                ],
                De = [.5, .6, .7, .8, .9, 1, 1.2, 1.44, 1.728, 2.074, 2.488],
                He = function(e, t) { return t.size < 2 ? e : Pe[e - 1][t.size - 1] },
                Fe = function() {
                    function e(t) { this.style = void 0, this.color = void 0, this.size = void 0, this.textSize = void 0, this.phantom = void 0, this.font = void 0, this.fontFamily = void 0, this.fontWeight = void 0, this.fontShape = void 0, this.sizeMultiplier = void 0, this.maxSize = void 0, this._fontMetrics = void 0, this.style = t.style, this.color = t.color, this.size = t.size || e.BASESIZE, this.textSize = t.textSize || this.size, this.phantom = !!t.phantom, this.font = t.font || "", this.fontFamily = t.fontFamily || "", this.fontWeight = t.fontWeight || "", this.fontShape = t.fontShape || "", this.sizeMultiplier = De[this.size - 1], this.maxSize = t.maxSize, this._fontMetrics = void 0 } var t = e.prototype; return t.extend = function(t) { var r = { style: this.style, size: this.size, textSize: this.textSize, color: this.color, phantom: this.phantom, font: this.font, fontFamily: this.fontFamily, fontWeight: this.fontWeight, fontShape: this.fontShape, maxSize: this.maxSize }; for (var n in t) t.hasOwnProperty(n) && (r[n] = t[n]); return new e(r) }, t.havingStyle = function(e) { return this.style === e ? this : this.extend({ style: e, size: He(this.textSize, e) }) }, t.havingCrampedStyle = function() { return this.havingStyle(this.style.cramp()) }, t.havingSize = function(e) { return this.size === e && this.textSize === e ? this : this.extend({ style: this.style.text(), size: e, textSize: e, sizeMultiplier: De[e - 1] }) }, t.havingBaseStyle = function(t) { t = t || this.style.text(); var r = He(e.BASESIZE, t); return this.size === r && this.textSize === e.BASESIZE && this.style === t ? this : this.extend({ style: t, size: r }) }, t.havingBaseSizing = function() { var e; switch (this.style.id) {
                            case 4:
                            case 5:
                                e = 3; break;
                            case 6:
                            case 7:
                                e = 1; break;
                            default:
                                e = 6 } return this.extend({ style: this.style.text(), size: e }) }, t.withColor = function(e) { return this.extend({ color: e }) }, t.withPhantom = function() { return this.extend({ phantom: !0 }) }, t.withFont = function(e) { return this.extend({ font: e }) }, t.withTextFontFamily = function(e) { return this.extend({ fontFamily: e, font: "" }) }, t.withTextFontWeight = function(e) { return this.extend({ fontWeight: e, font: "" }) }, t.withTextFontShape = function(e) { return this.extend({ fontShape: e, font: "" }) }, t.sizingClasses = function(e) { return e.size !== this.size ? ["sizing", "reset-size" + e.size, "size" + this.size] : [] }, t.baseSizingClasses = function() { return this.size !== e.BASESIZE ? ["sizing", "reset-size" + this.size, "size" + e.BASESIZE] : [] }, t.fontMetrics = function() { return this._fontMetrics || (this._fontMetrics = function(e) { var t; if (!le[t = e >= 5 ? 0 : e >= 3 ? 1 : 2]) { var r = le[t] = { cssEmPerMu: oe.quad[t] / 18 }; for (var n in oe) oe.hasOwnProperty(n) && (r[n] = oe[n][t]) } return le[t] }(this.size)), this._fontMetrics }, t.getColor = function() { return this.phantom ? "transparent" : null != this.color && e.colorMap.hasOwnProperty(this.color) ? e.colorMap[this.color] : this.color }, e }();
            Fe.BASESIZE = 6, Fe.colorMap = { "katex-blue": "#6495ed", "katex-orange": "#ffa500", "katex-pink": "#ff00af", "katex-red": "#df0030", "katex-green": "#28ae7b", "katex-gray": "gray", "katex-purple": "#9d38bd", "katex-blueA": "#ccfaff", "katex-blueB": "#80f6ff", "katex-blueC": "#63d9ea", "katex-blueD": "#11accd", "katex-blueE": "#0c7f99", "katex-tealA": "#94fff5", "katex-tealB": "#26edd5", "katex-tealC": "#01d1c1", "katex-tealD": "#01a995", "katex-tealE": "#208170", "katex-greenA": "#b6ffb0", "katex-greenB": "#8af281", "katex-greenC": "#74cf70", "katex-greenD": "#1fab54", "katex-greenE": "#0d923f", "katex-goldA": "#ffd0a9", "katex-goldB": "#ffbb71", "katex-goldC": "#ff9c39", "katex-goldD": "#e07d10", "katex-goldE": "#a75a05", "katex-redA": "#fca9a9", "katex-redB": "#ff8482", "katex-redC": "#f9685d", "katex-redD": "#e84d39", "katex-redE": "#bc2612", "katex-maroonA": "#ffbde0", "katex-maroonB": "#ff92c6", "katex-maroonC": "#ed5fa6", "katex-maroonD": "#ca337c", "katex-maroonE": "#9e034e", "katex-purpleA": "#ddd7ff", "katex-purpleB": "#c6b9fc", "katex-purpleC": "#aa87ff", "katex-purpleD": "#7854ab", "katex-purpleE": "#543b78", "katex-mintA": "#f5f9e8", "katex-mintB": "#edf2df", "katex-mintC": "#e0e5cc", "katex-grayA": "#f6f7f7", "katex-grayB": "#f0f1f2", "katex-grayC": "#e3e5e6", "katex-grayD": "#d6d8da", "katex-grayE": "#babec2", "katex-grayF": "#888d93", "katex-grayG": "#626569", "katex-grayH": "#3b3e40", "katex-grayI": "#21242c", "katex-kaBlue": "#314453", "katex-kaGreen": "#71B307" };
            var Ve = Fe,
                Ue = { pt: 1, mm: 7227 / 2540, cm: 7227 / 254, "in": 72.27, bp: 1.00375, pc: 12, dd: 1238 / 1157, cc: 14856 / 1157, nd: 685 / 642, nc: 1370 / 107, sp: 1 / 65536, px: 1.00375 },
                We = { ex: !0, em: !0, mu: !0 },
                _e = function(e, t) { var r; if (e.unit in Ue) r = Ue[e.unit] / t.fontMetrics().ptPerEm / t.sizeMultiplier;
                    else if ("mu" === e.unit) r = t.fontMetrics().cssEmPerMu;
                    else { var n; if (n = t.style.isTight() ? t.havingStyle(t.style.text()) : t, "ex" === e.unit) r = n.fontMetrics().xHeight;
                        else { if ("em" !== e.unit) throw new E("Invalid unit: '" + e.unit + "'");
                            r = n.fontMetrics().quad } n !== t && (r *= n.sizeMultiplier / t.sizeMultiplier) } return Math.min(e.number * r, t.maxSize) },
                Xe = ["\\imath", "\u0131", "\\jmath", "\u0237", "\\pounds", "\\mathsterling", "\\textsterling", "\xa3"],
                Ge = function(e, t, r) { return ue[r][e] && ue[r][e].replace && (e = ue[r][e].replace), { value: e, metrics: a(e, t, r) } },
                Ye = function(e, t, r, n, a) { var i, o = Ge(e, t, r),
                        s = o.metrics; if (e = o.value, s) { var l = s.italic;
                        ("text" === r || n && "mathit" === n.font) && (l = 0), i = new te(e, s.height, s.depth, l, s.skew, s.width, a) } else "undefined" != typeof console && console.warn("No character metrics for '" + e + "' in style '" + t + "'"), i = new te(e, 0, 0, 0, 0, 0, a); if (n) { i.maxFontSize = n.sizeMultiplier, n.style.isTight() && i.classes.push("mtight"); var c = n.getColor();
                        c && (i.style.color = c) } return i },
                je = function(e, t) { if (j(e.classes) !== j(t.classes) || e.skew !== t.skew || e.maxFontSize !== t.maxFontSize) return !1; for (var r in e.style)
                        if (e.style.hasOwnProperty(r) && e.style[r] !== t.style[r]) return !1; for (var n in t.style)
                        if (t.style.hasOwnProperty(n) && e.style[n] !== t.style[n]) return !1; return !0 },
                $e = function(e) { for (var t = 0, r = 0, n = 0, a = 0; a < e.children.length; a++) { var i = e.children[a];
                        i.height > t && (t = i.height), i.depth > r && (r = i.depth), i.maxFontSize > n && (n = i.maxFontSize) } e.height = t, e.depth = r, e.maxFontSize = n },
                Ke = function(e, t, r, n) { var a = new J(e, t, r, n); return $e(a), a },
                Ze = function(e, t, r, n) { return new J(e, t, r, n) },
                Je = function(e) { var t = new Y(e); return $e(t), t },
                Qe = function(e, t, r) { var n = ""; switch (e) {
                        case "amsrm":
                            n = "AMS"; break;
                        case "textrm":
                            n = "Main"; break;
                        case "textsf":
                            n = "SansSerif"; break;
                        case "texttt":
                            n = "Typewriter"; break;
                        default:
                            n = e } return n + "-" + ("textbf" === t && "textit" === r ? "BoldItalic" : "textbf" === t ? "Bold" : "textit" === t ? "Italic" : "Regular") },
                et = { mathbf: { variant: "bold", fontName: "Main-Bold" }, mathrm: { variant: "normal", fontName: "Main-Regular" }, textit: { variant: "italic", fontName: "Main-Italic" }, mathit: { variant: "italic", fontName: "Main-Italic" }, mathbb: { variant: "double-struck", fontName: "AMS-Regular" }, mathcal: { variant: "script", fontName: "Caligraphic-Regular" }, mathfrak: { variant: "fraktur", fontName: "Fraktur-Regular" }, mathscr: { variant: "script", fontName: "Script-Regular" }, mathsf: { variant: "sans-serif", fontName: "SansSerif-Regular" }, mathtt: { variant: "monospace", fontName: "Typewriter-Regular" } },
                tt = { vec: ["vec", .471, .714], oiintSize1: ["oiintSize1", .957, .499], oiintSize2: ["oiintSize2", 1.472, .659], oiiintSize1: ["oiiintSize1", 1.304, .499], oiiintSize2: ["oiiintSize2", 1.98, .659] },
                rt = {
                    fontMap: et,
                    makeSymbol: Ye,
                    mathsym: function(e, t, r, n) { return void 0 === n && (n = []), r && r.font && "boldsymbol" === r.font && Ge(e, "Main-Bold", t).metrics ? Ye(e, "Main-Bold", t, r, n.concat(["mathbf"])) : "\\" === e || "main" === ue[t][e].font ? Ye(e, "Main-Regular", t, r, n) : Ye(e, "AMS-Regular", t, r, n.concat(["amsrm"])) },
                    makeSpan: Ke,
                    makeSvgSpan: Ze,
                    makeLineSpan: function(e, t, r) {
                        var n = Ke([e], [], t);
                        return n.height = r || t.fontMetrics().defaultRuleThickness, n.style.borderBottomWidth = n.height + "em", n.maxFontSize = 1, n
                    },
                    makeAnchor: function(e, t, r, n) { var a = new Q(e, t, r, n); return $e(a), a },
                    makeFragment: Je,
                    wrapFragment: function(e, t) { return e instanceof Y ? Ke([], [e], t) : e },
                    makeVList: function(e) { for (var t = function(e) { if ("individualShift" === e.positionType) { for (var t = e.children, r = [t[0]], n = -t[0].shift - t[0].elem.depth, a = n, i = 1; i < t.length; i++) { var o = -t[i].shift - a - t[i].elem.depth,
                                            s = o - (t[i - 1].elem.height + t[i - 1].elem.depth);
                                        a += o, r.push({ type: "kern", size: s }), r.push(t[i]) } return { children: r, depth: n } } var l; if ("top" === e.positionType) { for (var c = e.positionData, h = 0; h < e.children.length; h++) { var d = e.children[h];
                                        c -= "kern" === d.type ? d.size : d.elem.height + d.elem.depth } l = c } else if ("bottom" === e.positionType) l = -e.positionData;
                                else { var u = e.children[0]; if ("elem" !== u.type) throw new Error('First child must have type "elem".'); if ("shift" === e.positionType) l = -u.elem.depth - e.positionData;
                                    else { if ("firstBaseline" !== e.positionType) throw new Error("Invalid positionType " + e.positionType + ".");
                                        l = -u.elem.depth } } return { children: e.children, depth: l } }(e), r = t.children, n = t.depth, a = 0, i = 0; i < r.length; i++) { var o = r[i]; if ("elem" === o.type) { var s = o.elem;
                                a = Math.max(a, s.maxFontSize, s.height) } } a += 2; var l = Ke(["pstrut"], []);
                        l.style.height = a + "em"; for (var c = [], h = n, d = n, u = n, m = 0; m < r.length; m++) { var p = r[m]; if ("kern" === p.type) u += p.size;
                            else { var f = p.elem,
                                    g = p.wrapperClasses || [],
                                    v = p.wrapperStyle || {},
                                    b = Ke(g, [l, f], void 0, v);
                                b.style.top = -a - u - f.depth + "em", p.marginLeft && (b.style.marginLeft = p.marginLeft), p.marginRight && (b.style.marginRight = p.marginRight), c.push(b), u += f.height + f.depth } h = Math.min(h, u), d = Math.max(d, u) } var y, x = Ke(["vlist"], c); if (x.style.height = d + "em", h < 0) { var w = Ke([], []),
                                k = Ke(["vlist"], [w]);
                            k.style.height = -h + "em"; var S = Ke(["vlist-s"], [new te("\u200b")]);
                            y = [Ke(["vlist-r"], [x, S]), Ke(["vlist-r"], [k])] } else y = [Ke(["vlist-r"], [x])]; var A = Ke(["vlist-t"], y); return 2 === y.length && A.classes.push("vlist-t2"), A.height = d, A.depth = -h, A },
                    makeOrd: function(e, t, r) { var n, a = e.mode,
                            i = e.text,
                            o = ["mord"],
                            s = "math" === a || "text" === a && t.font,
                            l = s ? t.font : t.fontFamily; if (55349 === i.charCodeAt(0)) { var c = function(e, t) { var r = 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536,
                                        n = "math" === t ? 0 : 1; if (119808 <= r && r < 120484) { var a = Math.floor((r - 119808) / 26); return [Oe[a][2], Oe[a][n]] } if (120782 <= r && r <= 120831) { var i = Math.floor((r - 120782) / 10); return [Re[i][2], Re[i][n]] } if (120485 === r || 120486 === r) return [Oe[0][2], Oe[0][n]]; if (120486 < r && r < 120782) return ["", ""]; throw new E("Unsupported character: " + e) }(i, a),
                                h = c[0],
                                d = c[1]; return Ye(i, h, a, t, o.concat(d)) } if (l) { var u, m; if ("boldsymbol" === l || "mathnormal" === l) { var p = "boldsymbol" === l ? function(e, t) { return Ge(e, "Math-BoldItalic", t).metrics ? { fontName: "Math-BoldItalic", fontClass: "boldsymbol" } : { fontName: "Main-Bold", fontClass: "mathbf" } }(i, a) : (n = i, B.contains(Xe, n) ? { fontName: "Main-Italic", fontClass: "mathit" } : /[0-9]/.test(n.charAt(0)) ? { fontName: "Caligraphic-Regular", fontClass: "mathcal" } : { fontName: "Math-Italic", fontClass: "mathdefault" });
                                u = p.fontName, m = [p.fontClass] } else B.contains(Xe, i) ? (u = "Main-Italic", m = ["mathit"]) : s ? (u = et[l].fontName, m = [l]) : (u = Qe(l, t.fontWeight, t.fontShape), m = [l, t.fontWeight, t.fontShape]); if (Ge(i, u, a).metrics) return Ye(i, u, a, t, o.concat(m)); if (xe.hasOwnProperty(i) && "Typewriter" === u.substr(0, 10)) { for (var f = [], g = 0; g < i.length; g++) f.push(Ye(i[g], u, a, t, o.concat(m))); return Je(f) } } if ("mathord" === r) { var v = function(e) { return /[0-9]/.test(e.charAt(0)) || B.contains(Xe, e) ? { fontName: "Main-Italic", fontClass: "mathit" } : { fontName: "Math-Italic", fontClass: "mathdefault" } }(i); return Ye(i, v.fontName, a, t, o.concat([v.fontClass])) } if ("textord" === r) { var b = ue[a][i] && ue[a][i].font; if ("ams" === b) { var y = Qe("amsrm", t.fontWeight, t.fontShape); return Ye(i, y, a, t, o.concat("amsrm", t.fontWeight, t.fontShape)) } if ("main" !== b && b) { var x = Qe(b, t.fontWeight, t.fontShape); return Ye(i, x, a, t, o.concat(x, t.fontWeight, t.fontShape)) } var w = Qe("textrm", t.fontWeight, t.fontShape); return Ye(i, w, a, t, o.concat(t.fontWeight, t.fontShape)) } throw new Error("unexpected type: " + r + " in makeOrd") },
                    makeGlue: function(e, t) { var r = Ke(["mspace"], [], t),
                            n = _e(e, t); return r.style.marginRight = n + "em", r },
                    staticSvg: function(e, t) { var r = tt[e],
                            n = r[0],
                            a = r[1],
                            i = r[2],
                            o = new ne(n),
                            s = new re([o], { width: a + "em", height: i + "em", style: "width:" + a + "em", viewBox: "0 0 " + 1e3 * a + " " + 1e3 * i, preserveAspectRatio: "xMinYMin" }),
                            l = Ze(["overlay"], [s], t); return l.height = i, l.style.height = i + "em", l.style.width = a + "em", l },
                    svgData: tt,
                    tryCombineChars: function(e) { for (var t = 0; t < e.length - 1; t++) { var r = e[t],
                                n = e[t + 1];
                            r instanceof te && n instanceof te && je(r, n) && (r.text += n.text, r.height = Math.max(r.height, n.height), r.depth = Math.max(r.depth, n.depth), r.italic = n.italic, e.splice(t + 1, 1), t--) } return e }
                },
                nt = { number: 3, unit: "mu" },
                at = { number: 4, unit: "mu" },
                it = { number: 5, unit: "mu" },
                ot = { mord: { mop: nt, mbin: at, mrel: it, minner: nt }, mop: { mord: nt, mop: nt, mrel: it, minner: nt }, mbin: { mord: at, mop: at, mopen: at, minner: at }, mrel: { mord: it, mop: it, mopen: it, minner: it }, mopen: {}, mclose: { mop: nt, mbin: at, mrel: it, minner: nt }, mpunct: { mord: nt, mop: nt, mrel: it, mopen: nt, mclose: nt, mpunct: nt, minner: nt }, minner: { mord: nt, mop: nt, mbin: at, mrel: it, mopen: nt, mpunct: nt, minner: nt } },
                st = { mord: { mop: nt }, mop: { mord: nt, mop: nt }, mbin: {}, mrel: {}, mopen: {}, mclose: { mop: nt }, mpunct: {}, minner: { mop: nt } },
                lt = {},
                ct = {},
                ht = {},
                dt = function(e) { var t = s(e, "ordgroup"); return t ? t.body : [e] },
                ut = rt.makeSpan,
                mt = ["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"],
                pt = ["rightmost", "mrel", "mclose", "mpunct"],
                ft = { display: W.DISPLAY, text: W.TEXT, script: W.SCRIPT, scriptscript: W.SCRIPTSCRIPT },
                gt = { mord: "mord", mop: "mop", mbin: "mbin", mrel: "mrel", mopen: "mopen", mclose: "mclose", mpunct: "mpunct", minner: "minner" },
                vt = function(e, t, r, n) { void 0 === n && (n = [null, null]); for (var a = [], i = 0; i < e.length; i++) { var o = kt(e[i], t); if (o instanceof Y) { var l = o.children;
                            a.push.apply(a, l) } else a.push(o) } if (!r) return a; var c = t; if (1 === e.length) { var h = s(e[0], "sizing") || s(e[0], "styling");
                        h && ("sizing" === h.type ? c = t.havingSize(h.size) : "styling" === h.type && (c = t.havingStyle(ft[h.style]))) } var d = ut([n[0] || "leftmost"], [], t),
                        u = ut([n[1] || "rightmost"], [], t); return bt(a, function(e, t) { var r = t.classes[0],
                            n = e.classes[0]; "mbin" === r && B.contains(pt, n) ? t.classes[0] = "mord" : "mbin" === n && B.contains(mt, r) && (e.classes[0] = "mord") }, { node: d }, u), bt(a, function(e, t) { var r = xt(t),
                            n = xt(e),
                            a = r && n ? e.hasClass("mtight") ? st[r][n] : ot[r][n] : null; if (a) return rt.makeGlue(a, c) }, { node: d }, u), a },
                bt = function e(t, r, n, a) { a && t.push(a); for (var i = 0; i < t.length; i++) { var o = t[i],
                            s = yt(o); if (s) e(s.children, r, n);
                        else if ("mspace" !== o.classes[0]) { var l = r(o, n.node);
                            l && (n.insertAfter ? n.insertAfter(l) : (t.unshift(l), i++)), n.node = o, n.insertAfter = function(e) { return function(r) { t.splice(e + 1, 0, r), i++ } }(i) } } a && t.pop() },
                yt = function(e) { return e instanceof Y || e instanceof Q ? e : null },
                xt = function(e, t) { return e ? (t && (e = function e(t, r) { var n = yt(t); if (n) { var a = n.children; if (a.length) { if ("right" === r) return e(a[a.length - 1], "right"); if ("left" === r) return e(a[0], "left") } } return t }(e, t)), gt[e.classes[0]] || null) : null },
                wt = function(e, t) { var r = ["nulldelimiter"].concat(e.baseSizingClasses()); return ut(t.concat(r)) },
                kt = function(e, t, r) { if (!e) return ut(); if (ct[e.type]) { var n = ct[e.type](e, t); if (r && t.size !== r.size) { n = ut(t.sizingClasses(r), [n], t); var a = t.sizeMultiplier / r.sizeMultiplier;
                            n.height *= a, n.depth *= a } return n } throw new E("Got group of unknown type: '" + e.type + "'") },
                St = function() {
                    function e(e, t) { this.type = void 0, this.attributes = void 0, this.children = void 0, this.type = e, this.attributes = {}, this.children = t || [] } var t = e.prototype; return t.setAttribute = function(e, t) { this.attributes[e] = t }, t.getAttribute = function(e) { return this.attributes[e] }, t.toNode = function() { var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type); for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && e.setAttribute(t, this.attributes[t]); for (var r = 0; r < this.children.length; r++) e.appendChild(this.children[r].toNode()); return e }, t.toMarkup = function() { var e = "<" + this.type; for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="', e += B.escape(this.attributes[t]), e += '"');
                        e += ">"; for (var r = 0; r < this.children.length; r++) e += this.children[r].toMarkup(); return e += "</" + this.type + ">" }, t.toText = function() { return this.children.map(function(e) { return e.toText() }).join("") }, e }(),
                At = function() {
                    function e(e) { this.text = void 0, this.text = e } var t = e.prototype; return t.toNode = function() { return document.createTextNode(this.text) }, t.toMarkup = function() { return B.escape(this.toText()) }, t.toText = function() { return this.text }, e }(),
                Mt = { MathNode: St, TextNode: At, SpaceNode: function() {
                        function e(e) { this.width = void 0, this.character = void 0, this.width = e, this.character = e >= .05555 && e <= .05556 ? "\u200a" : e >= .1666 && e <= .1667 ? "\u2009" : e >= .2222 && e <= .2223 ? "\u2005" : e >= .2777 && e <= .2778 ? "\u2005\u200a" : e >= -.05556 && e <= -.05555 ? "\u200a\u2063" : e >= -.1667 && e <= -.1666 ? "\u2009\u2063" : e >= -.2223 && e <= -.2222 ? "\u205f\u2063" : e >= -.2778 && e <= -.2777 ? "\u2005\u2063" : null } var t = e.prototype; return t.toNode = function() { if (this.character) return document.createTextNode(this.character); var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mspace"); return e.setAttribute("width", this.width + "em"), e }, t.toMarkup = function() { return this.character ? "<mtext>" + this.character + "</mtext>" : '<mspace width="' + this.width + 'em"/>' }, t.toText = function() { return this.character ? this.character : " " }, e }(), newDocumentFragment: p },
                zt = function(e, t, r) { return !ue[t][e] || !ue[t][e].replace || 55349 === e.charCodeAt(0) || xe.hasOwnProperty(e) && r && (r.fontFamily && "tt" === r.fontFamily.substr(4, 2) || r.font && "tt" === r.font.substr(4, 2)) || (e = ue[t][e].replace), new Mt.TextNode(e) },
                Tt = function(e) { return 1 === e.length ? e[0] : new Mt.MathNode("mrow", e) },
                Et = function(e, t) { if ("texttt" === t.fontFamily) return "monospace"; if ("textsf" === t.fontFamily) return "textit" === t.fontShape && "textbf" === t.fontWeight ? "sans-serif-bold-italic" : "textit" === t.fontShape ? "sans-serif-italic" : "textbf" === t.fontWeight ? "bold-sans-serif" : "sans-serif"; if ("textit" === t.fontShape && "textbf" === t.fontWeight) return "bold-italic"; if ("textit" === t.fontShape) return "italic"; if ("textbf" === t.fontWeight) return "bold"; var r = t.font; if (!r || "mathnormal" === r) return null; var n = e.mode; if ("mathit" === r) return "italic"; if ("boldsymbol" === r) return "bold-italic"; var i = e.text; return B.contains(["\\imath", "\\jmath"], i) ? null : (ue[n][i] && ue[n][i].replace && (i = ue[n][i].replace), a(i, rt.fontMap[r].fontName, n) ? rt.fontMap[r].variant : null) },
                Lt = function(e, t) { for (var r, n = [], a = 0; a < e.length; a++) { var i = Nt(e[a], t); if (i instanceof St && r instanceof St) { if ("mtext" === i.type && "mtext" === r.type && i.getAttribute("mathvariant") === r.getAttribute("mathvariant")) { var o;
                                (o = r.children).push.apply(o, i.children); continue } if ("mn" === i.type && "mn" === r.type) { var s;
                                (s = r.children).push.apply(s, i.children); continue } if ("mi" === i.type && 1 === i.children.length && "mn" === r.type) { var l = i.children[0]; if (l instanceof At && "." === l.text) { var c;
                                    (c = r.children).push.apply(c, i.children); continue } } } n.push(i), r = i } return n },
                Ct = function(e, t) { return Tt(Lt(e, t)) },
                Nt = function(e, t) { if (!e) return new Mt.MathNode("mrow"); if (ht[e.type]) return ht[e.type](e, t); throw new E("Got group of unknown type: '" + e.type + "'") },
                qt = function(e) { return new Ve({ style: e.displayMode ? W.DISPLAY : W.TEXT, maxSize: e.maxSize }) },
                Bt = function(e, t) { if (t.displayMode) { var r = ["katex-display"];
                        t.leqno && r.push("leqno"), t.fleqn && r.push("fleqn"), e = rt.makeSpan(r, [e]) } return e },
                It = function(e, t, r) { var n = qt(r),
                        a = function(e, t, r) { var n, a = Lt(e, r);
                            n = 1 === a.length && a[0] instanceof St && B.contains(["mrow", "mtable"], a[0].type) ? a[0] : new Mt.MathNode("mrow", a); var i = new Mt.MathNode("annotation", [new Mt.TextNode(t)]);
                            i.setAttribute("encoding", "application/x-tex"); var o = new Mt.MathNode("semantics", [n, i]),
                                s = new Mt.MathNode("math", [o]); return rt.makeSpan(["katex-mathml"], [s]) }(e, t, n),
                        i = m(e, n),
                        o = rt.makeSpan(["katex"], [a, i]); return Bt(o, r) },
                Ot = { widehat: "^", widecheck: "\u02c7", widetilde: "~", utilde: "~", overleftarrow: "\u2190", underleftarrow: "\u2190", xleftarrow: "\u2190", overrightarrow: "\u2192", underrightarrow: "\u2192", xrightarrow: "\u2192", underbrace: "\u23b5", overbrace: "\u23de", overleftrightarrow: "\u2194", underleftrightarrow: "\u2194", xleftrightarrow: "\u2194", Overrightarrow: "\u21d2", xRightarrow: "\u21d2", overleftharpoon: "\u21bc", xleftharpoonup: "\u21bc", overrightharpoon: "\u21c0", xrightharpoonup: "\u21c0", xLeftarrow: "\u21d0", xLeftrightarrow: "\u21d4", xhookleftarrow: "\u21a9", xhookrightarrow: "\u21aa", xmapsto: "\u21a6", xrightharpoondown: "\u21c1", xleftharpoondown: "\u21bd", xrightleftharpoons: "\u21cc", xleftrightharpoons: "\u21cb", xtwoheadleftarrow: "\u219e", xtwoheadrightarrow: "\u21a0", xlongequal: "=", xtofrom: "\u21c4", xrightleftarrows: "\u21c4", xrightequilibrium: "\u21cc", xleftequilibrium: "\u21cb" },
                Rt = { overrightarrow: [
                        ["rightarrow"], .888, 522, "xMaxYMin"
                    ], overleftarrow: [
                        ["leftarrow"], .888, 522, "xMinYMin"
                    ], underrightarrow: [
                        ["rightarrow"], .888, 522, "xMaxYMin"
                    ], underleftarrow: [
                        ["leftarrow"], .888, 522, "xMinYMin"
                    ], xrightarrow: [
                        ["rightarrow"], 1.469, 522, "xMaxYMin"
                    ], xleftarrow: [
                        ["leftarrow"], 1.469, 522, "xMinYMin"
                    ], Overrightarrow: [
                        ["doublerightarrow"], .888, 560, "xMaxYMin"
                    ], xRightarrow: [
                        ["doublerightarrow"], 1.526, 560, "xMaxYMin"
                    ], xLeftarrow: [
                        ["doubleleftarrow"], 1.526, 560, "xMinYMin"
                    ], overleftharpoon: [
                        ["leftharpoon"], .888, 522, "xMinYMin"
                    ], xleftharpoonup: [
                        ["leftharpoon"], .888, 522, "xMinYMin"
                    ], xleftharpoondown: [
                        ["leftharpoondown"], .888, 522, "xMinYMin"
                    ], overrightharpoon: [
                        ["rightharpoon"], .888, 522, "xMaxYMin"
                    ], xrightharpoonup: [
                        ["rightharpoon"], .888, 522, "xMaxYMin"
                    ], xrightharpoondown: [
                        ["rightharpoondown"], .888, 522, "xMaxYMin"
                    ], xlongequal: [
                        ["longequal"], .888, 334, "xMinYMin"
                    ], xtwoheadleftarrow: [
                        ["twoheadleftarrow"], .888, 334, "xMinYMin"
                    ], xtwoheadrightarrow: [
                        ["twoheadrightarrow"], .888, 334, "xMaxYMin"
                    ], overleftrightarrow: [
                        ["leftarrow", "rightarrow"], .888, 522
                    ], overbrace: [
                        ["leftbrace", "midbrace", "rightbrace"], 1.6, 548
                    ], underbrace: [
                        ["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548
                    ], underleftrightarrow: [
                        ["leftarrow", "rightarrow"], .888, 522
                    ], xleftrightarrow: [
                        ["leftarrow", "rightarrow"], 1.75, 522
                    ], xLeftrightarrow: [
                        ["doubleleftarrow", "doublerightarrow"], 1.75, 560
                    ], xrightleftharpoons: [
                        ["leftharpoondownplus", "rightharpoonplus"], 1.75, 716
                    ], xleftrightharpoons: [
                        ["leftharpoonplus", "rightharpoondownplus"], 1.75, 716
                    ], xhookleftarrow: [
                        ["leftarrow", "righthook"], 1.08, 522
                    ], xhookrightarrow: [
                        ["lefthook", "rightarrow"], 1.08, 522
                    ], overlinesegment: [
                        ["leftlinesegment", "rightlinesegment"], .888, 522
                    ], underlinesegment: [
                        ["leftlinesegment", "rightlinesegment"], .888, 522
                    ], overgroup: [
                        ["leftgroup", "rightgroup"], .888, 342
                    ], undergroup: [
                        ["leftgroupunder", "rightgroupunder"], .888, 342
                    ], xmapsto: [
                        ["leftmapsto", "rightarrow"], 1.5, 522
                    ], xtofrom: [
                        ["leftToFrom", "rightToFrom"], 1.75, 528
                    ], xrightleftarrows: [
                        ["baraboveleftarrow", "rightarrowabovebar"], 1.75, 901
                    ], xrightequilibrium: [
                        ["baraboveshortleftharpoon", "rightharpoonaboveshortbar"], 1.75, 716
                    ], xleftequilibrium: [
                        ["shortbaraboveleftharpoon", "shortrightharpoonabovebar"], 1.75, 716
                    ] },
                Pt = function(e) { return "ordgroup" === e.type ? e.body.length : 1 },
                Dt = function(e, t, r, n) { var a, i = e.height + e.depth + 2 * r; if (/fbox|color/.test(t)) { if (a = rt.makeSpan(["stretchy", t], [], n), "fbox" === t) { var o = n.color && n.getColor();
                            o && (a.style.borderColor = o) } } else { var s = []; /^[bx]cancel$/.test(t) && s.push(new ae({ x1: "0", y1: "0", x2: "100%", y2: "100%", "stroke-width": "0.046em" })), /^x?cancel$/.test(t) && s.push(new ae({ x1: "0", y1: "100%", x2: "100%", y2: "0", "stroke-width": "0.046em" })); var l = new re(s, { width: "100%", height: i + "em" });
                        a = rt.makeSvgSpan([], [l], n) } return a.height = i, a.style.height = i + "em", a },
                Ht = function(e) { var t = new Mt.MathNode("mo", [new Mt.TextNode(Ot[e.substr(1)])]); return t.setAttribute("stretchy", "true"), t },
                Ft = function(e, t) { var r = function() { var r = 4e5,
                                n = e.label.substr(1); if (B.contains(["widehat", "widecheck", "widetilde", "utilde"], n)) { var a, i, o, s = Pt(e.base); if (s > 5) "widehat" === n || "widecheck" === n ? (a = 420, r = 2364, o = .42, i = n + "4") : (a = 312, r = 2340, o = .34, i = "tilde4");
                                else { var l = [1, 1, 2, 2, 3, 3][s]; "widehat" === n || "widecheck" === n ? (r = [0, 1062, 2364, 2364, 2364][l], a = [0, 239, 300, 360, 420][l], o = [0, .24, .3, .3, .36, .42][l], i = n + l) : (r = [0, 600, 1033, 2339, 2340][l], a = [0, 260, 286, 306, 312][l], o = [0, .26, .286, .3, .306, .34][l], i = "tilde" + l) } var c = new ne(i),
                                    h = new re([c], { width: "100%", height: o + "em", viewBox: "0 0 " + r + " " + a, preserveAspectRatio: "none" }); return { span: rt.makeSvgSpan([], [h], t), minWidth: 0, height: o } } var d, u, m = [],
                                p = Rt[n],
                                f = p[0],
                                g = p[1],
                                v = p[2],
                                b = v / 1e3,
                                y = f.length; if (1 === y) d = ["hide-tail"], u = [p[3]];
                            else if (2 === y) d = ["halfarrow-left", "halfarrow-right"], u = ["xMinYMin", "xMaxYMin"];
                            else { if (3 !== y) throw new Error("Correct katexImagesData or update code here to support\n                    " + y + " children.");
                                d = ["brace-left", "brace-center", "brace-right"], u = ["xMinYMin", "xMidYMin", "xMaxYMin"] } for (var x = 0; x < y; x++) { var w = new ne(f[x]),
                                    k = new re([w], { width: "400em", height: b + "em", viewBox: "0 0 " + r + " " + v, preserveAspectRatio: u[x] + " slice" }),
                                    S = rt.makeSvgSpan([d[x]], [k], t); if (1 === y) return { span: S, minWidth: g, height: b };
                                S.style.height = b + "em", m.push(S) } return { span: rt.makeSpan(["stretchy"], m, t), minWidth: g, height: b } }(),
                        n = r.span,
                        a = r.minWidth,
                        i = r.height; return n.height = i, n.style.height = i + "em", a > 0 && (n.style.minWidth = a + "em"), n },
                Vt = function(e, t) { var r, n, a, i = s(e, "supsub");
                    i ? (r = (n = o(i.base, "accent")).base, i.base = r, a = function(e) { if (e instanceof J) return e; throw new Error("Expected span<HtmlDomNode> but got " + String(e) + ".") }(kt(i, t)), i.base = n) : r = (n = o(e, "accent")).base; var l = kt(r, t.havingCrampedStyle()),
                        c = 0; if (n.isShifty && B.isCharacterBox(r)) { var h = B.getBaseElem(r);
                        c = function(e) { if (e instanceof te) return e; throw new Error("Expected symbolNode but got " + String(e) + ".") }(kt(h, t.havingCrampedStyle())).skew } var d, u = Math.min(l.height, t.fontMetrics().xHeight); if (n.isStretchy) d = Ft(n, t), d = rt.makeVList({ positionType: "firstBaseline", children: [{ type: "elem", elem: l }, { type: "elem", elem: d, wrapperClasses: ["svg-align"], wrapperStyle: c > 0 ? { width: "calc(100% - " + 2 * c + "em)", marginLeft: 2 * c + "em" } : void 0 }] }, t);
                    else { var m, p; "\\vec" === n.label ? (m = rt.staticSvg("vec", t), p = rt.svgData.vec[1]) : ((m = rt.makeSymbol(n.label, "Main-Regular", n.mode, t)).italic = 0, p = m.width), d = rt.makeSpan(["accent-body"], [m]); var f = "\\textcircled" === n.label;
                        f && (d.classes.push("accent-full"), u = l.height); var g = c;
                        f || (g -= p / 2), d.style.left = g + "em", "\\textcircled" === n.label && (d.style.top = ".2em"), d = rt.makeVList({ positionType: "firstBaseline", children: [{ type: "elem", elem: l }, { type: "kern", size: -u }, { type: "elem", elem: d }] }, t) } var v = rt.makeSpan(["mord", "accent"], [d], t); return a ? (a.children[0] = v, a.height = Math.max(v.height, a.height), a.classes[0] = "mord", a) : v },
                Ut = function(e, t) { var r = e.isStretchy ? Ht(e.label) : new Mt.MathNode("mo", [zt(e.label, e.mode)]),
                        n = new Mt.MathNode("mover", [Nt(e.base, t), r]); return n.setAttribute("accent", "true"), n },
                Wt = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map(function(e) { return "\\" + e }).join("|"));
            h({ type: "accent", names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"], props: { numArgs: 1 }, handler: function(e, t) { var r = t[0],
                        n = !Wt.test(e.funcName),
                        a = !n || "\\widehat" === e.funcName || "\\widetilde" === e.funcName || "\\widecheck" === e.funcName; return { type: "accent", mode: e.parser.mode, label: e.funcName, isStretchy: n, isShifty: a, base: r } }, htmlBuilder: Vt, mathmlBuilder: Ut }), h({ type: "accent", names: ["\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"', "\\r", "\\H", "\\v", "\\textcircled"], props: { numArgs: 1, allowedInText: !0, allowedInMath: !1 }, handler: function(e, t) { var r = t[0]; return { type: "accent", mode: e.parser.mode, label: e.funcName, isStretchy: !1, isShifty: !0, base: r } }, htmlBuilder: Vt, mathmlBuilder: Ut }), h({ type: "accentUnder", names: ["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\utilde"], props: { numArgs: 1 }, handler: function(e, t) { var r = e.parser,
                        n = e.funcName,
                        a = t[0]; return { type: "accentUnder", mode: r.mode, label: n, base: a } }, htmlBuilder: function(e, t) { var r = kt(e.base, t),
                        n = Ft(e, t),
                        a = "\\utilde" === e.label ? .12 : 0,
                        i = rt.makeVList({ positionType: "bottom", positionData: n.height + a, children: [{ type: "elem", elem: n, wrapperClasses: ["svg-align"] }, { type: "kern", size: a }, { type: "elem", elem: r }] }, t); return rt.makeSpan(["mord", "accentunder"], [i], t) }, mathmlBuilder: function(e, t) { var r = Ht(e.label),
                        n = new Mt.MathNode("munder", [Nt(e.base, t), r]); return n.setAttribute("accentunder", "true"), n } }), h({ type: "xArrow", names: ["\\xleftarrow", "\\xrightarrow", "\\xLeftarrow", "\\xRightarrow", "\\xleftrightarrow", "\\xLeftrightarrow", "\\xhookleftarrow", "\\xhookrightarrow", "\\xmapsto", "\\xrightharpoondown", "\\xrightharpoonup", "\\xleftharpoondown", "\\xleftharpoonup", "\\xrightleftharpoons", "\\xleftrightharpoons", "\\xlongequal", "\\xtwoheadrightarrow", "\\xtwoheadleftarrow", "\\xtofrom", "\\xrightleftarrows", "\\xrightequilibrium", "\\xleftequilibrium"], props: { numArgs: 1, numOptionalArgs: 1 }, handler: function(e, t, r) { var n = e.parser,
                        a = e.funcName; return { type: "xArrow", mode: n.mode, label: a, body: t[0], below: r[0] } }, htmlBuilder: function(e, t) { var r, n = t.style,
                        a = t.havingStyle(n.sup()),
                        i = rt.wrapFragment(kt(e.body, a, t), t);
                    i.classes.push("x-arrow-pad"), e.below && (a = t.havingStyle(n.sub()), (r = rt.wrapFragment(kt(e.below, a, t), t)).classes.push("x-arrow-pad")); var o, s = Ft(e, t),
                        l = -t.fontMetrics().axisHeight + .5 * s.height,
                        c = -t.fontMetrics().axisHeight - .5 * s.height - .111; if ((i.depth > .25 || "\\xleftequilibrium" === e.label) && (c -= i.depth), r) { var h = -t.fontMetrics().axisHeight + r.height + .5 * s.height + .111;
                        o = rt.makeVList({ positionType: "individualShift", children: [{ type: "elem", elem: i, shift: c }, { type: "elem", elem: s, shift: l }, { type: "elem", elem: r, shift: h }] }, t) } else o = rt.makeVList({ positionType: "individualShift", children: [{ type: "elem", elem: i, shift: c }, { type: "elem", elem: s, shift: l }] }, t); return o.children[0].children[0].children[1].classes.push("svg-align"), rt.makeSpan(["mrel", "x-arrow"], [o], t) }, mathmlBuilder: function(e, t) { var r, n, a = Ht(e.label); if (e.body) { var i = Nt(e.body, t);
                        e.below ? (n = Nt(e.below, t), r = new Mt.MathNode("munderover", [a, n, i])) : r = new Mt.MathNode("mover", [a, i]) } else e.below ? (n = Nt(e.below, t), r = new Mt.MathNode("munder", [a, n])) : r = new Mt.MathNode("mover", [a]); return r } }), h({ type: "textord", names: ["\\@char"], props: { numArgs: 1, allowedInText: !0 }, handler: function(e, t) { for (var r = e.parser, n = o(t[0], "ordgroup").body, a = "", i = 0; i < n.length; i++) a += o(n[i], "textord").text; var s = parseInt(a); if (isNaN(s)) throw new E("\\@char has non-numeric argument " + a); return { type: "textord", mode: r.mode, text: String.fromCharCode(s) } } });
            var _t = function(e, t) { var r = vt(e.body, t.withColor(e.color), !1); return rt.makeFragment(r) },
                Xt = function(e, t) { var r = Lt(e.body, t),
                        n = new Mt.MathNode("mstyle", r); return n.setAttribute("mathcolor", e.color), n };
            h({ type: "color", names: ["\\textcolor"], props: { numArgs: 2, allowedInText: !0, greediness: 3, argTypes: ["color", "original"] }, handler: function(e, t) { var r = e.parser,
                        n = o(t[0], "color-token").color,
                        a = t[1]; return { type: "color", mode: r.mode, color: n, body: dt(a) } }, htmlBuilder: _t, mathmlBuilder: Xt }), h({ type: "color", names: ["\\blue", "\\orange", "\\pink", "\\red", "\\green", "\\gray", "\\purple", "\\blueA", "\\blueB", "\\blueC", "\\blueD", "\\blueE", "\\tealA", "\\tealB", "\\tealC", "\\tealD", "\\tealE", "\\greenA", "\\greenB", "\\greenC", "\\greenD", "\\greenE", "\\goldA", "\\goldB", "\\goldC", "\\goldD", "\\goldE", "\\redA", "\\redB", "\\redC", "\\redD", "\\redE", "\\maroonA", "\\maroonB", "\\maroonC", "\\maroonD", "\\maroonE", "\\purpleA", "\\purpleB", "\\purpleC", "\\purpleD", "\\purpleE", "\\mintA", "\\mintB", "\\mintC", "\\grayA", "\\grayB", "\\grayC", "\\grayD", "\\grayE", "\\grayF", "\\grayG", "\\grayH", "\\grayI", "\\kaBlue", "\\kaGreen"], props: { numArgs: 1, allowedInText: !0, greediness: 3 }, handler: function(e, t) { var r = e.parser,
                        n = e.funcName,
                        a = t[0]; return { type: "color", mode: r.mode, color: "katex-" + n.slice(1), body: dt(a) } }, htmlBuilder: _t, mathmlBuilder: Xt }), h({ type: "color", names: ["\\color"], props: { numArgs: 1, allowedInText: !0, greediness: 3, argTypes: ["color"] }, handler: function(e, t) { var r = e.parser,
                        n = e.breakOnTokenText,
                        a = o(t[0], "color-token").color,
                        i = r.parseExpression(!0, n); return { type: "color", mode: r.mode, color: a, body: i } }, htmlBuilder: _t, mathmlBuilder: Xt }), h({ type: "cr", names: ["\\cr", "\\newline"], props: { numArgs: 0, numOptionalArgs: 1, argTypes: ["size"], allowedInText: !0 }, handler: function(e, t, r) { var n = e.parser,
                        a = e.funcName,
                        i = r[0],
                        s = "\\cr" === a,
                        l = !1; return s || (l = !n.settings.displayMode || !n.settings.useStrictBehavior("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline does nothing in display mode")), { type: "cr", mode: n.mode, newLine: l, newRow: s, size: i && o(i, "size").value } }, htmlBuilder: function(e, t) { if (e.newRow) throw new E("\\cr valid only within a tabular/array environment"); var r = rt.makeSpan(["mspace"], [], t); return e.newLine && (r.classes.push("newline"), e.size && (r.style.marginTop = _e(e.size, t) + "em")), r }, mathmlBuilder: function(e, t) { var r = new Mt.MathNode("mspace"); return e.newLine && (r.setAttribute("linebreak", "newline"), e.size && r.setAttribute("height", _e(e.size, t) + "em")), r } });
            var Gt = function(e, t, r) { var n = a(ue.math[e] && ue.math[e].replace || e, t, r); if (!n) throw new Error("Unsupported symbol " + e + " and font size " + t + "."); return n },
                Yt = function(e, t, r, n) { var a = r.havingBaseStyle(t),
                        i = rt.makeSpan(n.concat(a.sizingClasses(r)), [e], r),
                        o = a.sizeMultiplier / r.sizeMultiplier; return i.height *= o, i.depth *= o, i.maxFontSize = a.sizeMultiplier, i },
                jt = function(e, t, r) { var n = t.havingBaseStyle(r),
                        a = (1 - t.sizeMultiplier / n.sizeMultiplier) * t.fontMetrics().axisHeight;
                    e.classes.push("delimcenter"), e.style.top = a + "em", e.height -= a, e.depth += a },
                $t = function(e, t, r, n, a, i) { var o = function(e, t, r, n) { return rt.makeSymbol(e, "Size" + t + "-Regular", r, n) }(e, t, a, n),
                        s = Yt(rt.makeSpan(["delimsizing", "size" + t], [o], n), W.TEXT, n, i); return r && jt(s, n, W.TEXT), s },
                Kt = function(e, t, r) { var n; return n = "Size1-Regular" === t ? "delim-size1" : "delim-size4", { type: "elem", elem: rt.makeSpan(["delimsizinginner", n], [rt.makeSpan([], [rt.makeSymbol(e, t, r)])]) } },
                Zt = function(e, t, r, n, a, i) { var o, s, l, c;
                    o = l = c = e, s = null; var h = "Size1-Regular"; "\\uparrow" === e ? l = c = "\u23d0" : "\\Uparrow" === e ? l = c = "\u2016" : "\\downarrow" === e ? o = l = "\u23d0" : "\\Downarrow" === e ? o = l = "\u2016" : "\\updownarrow" === e ? (o = "\\uparrow", l = "\u23d0", c = "\\downarrow") : "\\Updownarrow" === e ? (o = "\\Uparrow", l = "\u2016", c = "\\Downarrow") : "[" === e || "\\lbrack" === e ? (o = "\u23a1", l = "\u23a2", c = "\u23a3", h = "Size4-Regular") : "]" === e || "\\rbrack" === e ? (o = "\u23a4", l = "\u23a5", c = "\u23a6", h = "Size4-Regular") : "\\lfloor" === e || "\u230a" === e ? (l = o = "\u23a2", c = "\u23a3", h = "Size4-Regular") : "\\lceil" === e || "\u2308" === e ? (o = "\u23a1", l = c = "\u23a2", h = "Size4-Regular") : "\\rfloor" === e || "\u230b" === e ? (l = o = "\u23a5", c = "\u23a6", h = "Size4-Regular") : "\\rceil" === e || "\u2309" === e ? (o = "\u23a4", l = c = "\u23a5", h = "Size4-Regular") : "(" === e || "\\lparen" === e ? (o = "\u239b", l = "\u239c", c = "\u239d", h = "Size4-Regular") : ")" === e || "\\rparen" === e ? (o = "\u239e", l = "\u239f", c = "\u23a0", h = "Size4-Regular") : "\\{" === e || "\\lbrace" === e ? (o = "\u23a7", s = "\u23a8", c = "\u23a9", l = "\u23aa", h = "Size4-Regular") : "\\}" === e || "\\rbrace" === e ? (o = "\u23ab", s = "\u23ac", c = "\u23ad", l = "\u23aa", h = "Size4-Regular") : "\\lgroup" === e || "\u27ee" === e ? (o = "\u23a7", c = "\u23a9", l = "\u23aa", h = "Size4-Regular") : "\\rgroup" === e || "\u27ef" === e ? (o = "\u23ab", c = "\u23ad", l = "\u23aa", h = "Size4-Regular") : "\\lmoustache" === e || "\u23b0" === e ? (o = "\u23a7", c = "\u23ad", l = "\u23aa", h = "Size4-Regular") : "\\rmoustache" !== e && "\u23b1" !== e || (o = "\u23ab", c = "\u23a9", l = "\u23aa", h = "Size4-Regular"); var d = Gt(o, h, a),
                        u = d.height + d.depth,
                        m = Gt(l, h, a),
                        p = m.height + m.depth,
                        f = Gt(c, h, a),
                        g = f.height + f.depth,
                        v = 0,
                        b = 1; if (null !== s) { var y = Gt(s, h, a);
                        v = y.height + y.depth, b = 2 } var x = u + g + v,
                        w = Math.ceil((t - x) / (b * p)),
                        k = x + w * b * p,
                        S = n.fontMetrics().axisHeight;
                    r && (S *= n.sizeMultiplier); var A = k / 2 - S,
                        M = []; if (M.push(Kt(c, h, a)), null === s)
                        for (var z = 0; z < w; z++) M.push(Kt(l, h, a));
                    else { for (var T = 0; T < w; T++) M.push(Kt(l, h, a));
                        M.push(Kt(s, h, a)); for (var E = 0; E < w; E++) M.push(Kt(l, h, a)) } M.push(Kt(o, h, a)); var L = n.havingBaseStyle(W.TEXT),
                        C = rt.makeVList({ positionType: "bottom", positionData: A, children: M }, L); return Yt(rt.makeSpan(["delimsizing", "mult"], [C], L), W.TEXT, n, i) },
                Jt = function(e, t, r, n) { var a; "sqrtTall" === e && (a = "M702 80H400000v40H742v" + (r - 54 - 80) + "l-4 4-4 4c-.667.7\n-2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1h-12l-28-84c-16.667-52-96.667\n-294.333-240-727l-212 -643 -85 170c-4-3.333-8.333-7.667-13 -13l-13-13l77-155\n 77-156c66 199.333 139 419.667 219 661 l218 661zM702 80H400000v40H742z"); var i = new ne(e, a),
                        o = new re([i], { width: "400em", height: t + "em", viewBox: "0 0 400000 " + r, preserveAspectRatio: "xMinYMin slice" }); return rt.makeSvgSpan(["hide-tail"], [o], n) },
                Qt = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "\u230a", "\u230b", "\\lceil", "\\rceil", "\u2308", "\u2309", "\\surd"],
                er = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "\u27ee", "\u27ef", "\\lmoustache", "\\rmoustache", "\u23b0", "\u23b1"],
                tr = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"],
                rr = [0, 1.2, 1.8, 2.4, 3],
                nr = [{ type: "small", style: W.SCRIPTSCRIPT }, { type: "small", style: W.SCRIPT }, { type: "small", style: W.TEXT }, { type: "large", size: 1 }, { type: "large", size: 2 }, { type: "large", size: 3 }, { type: "large", size: 4 }],
                ar = [{ type: "small", style: W.SCRIPTSCRIPT }, { type: "small", style: W.SCRIPT }, { type: "small", style: W.TEXT }, { type: "stack" }],
                ir = [{ type: "small", style: W.SCRIPTSCRIPT }, { type: "small", style: W.SCRIPT }, { type: "small", style: W.TEXT }, { type: "large", size: 1 }, { type: "large", size: 2 }, { type: "large", size: 3 }, { type: "large", size: 4 }, { type: "stack" }],
                or = function(e) { if ("small" === e.type) return "Main-Regular"; if ("large" === e.type) return "Size" + e.size + "-Regular"; if ("stack" === e.type) return "Size4-Regular"; throw new Error("Add support for delim type '" + e.type + "' here.") },
                sr = function(e, t, r, n) { for (var a = Math.min(2, 3 - n.style.size); a < r.length && "stack" !== r[a].type; a++) { var i = Gt(e, or(r[a]), "math"),
                            o = i.height + i.depth; if ("small" === r[a].type && (o *= n.havingBaseStyle(r[a].style).sizeMultiplier), o > t) return r[a] } return r[r.length - 1] },
                lr = function(e, t, r, n, a, i) { var o; "<" === e || "\\lt" === e || "\u27e8" === e ? e = "\\langle" : ">" !== e && "\\gt" !== e && "\u27e9" !== e || (e = "\\rangle"), o = B.contains(tr, e) ? nr : B.contains(Qt, e) ? ir : ar; var s = sr(e, t, o, n); return "small" === s.type ? function(e, t, r, n, a, i) { var o = rt.makeSymbol(e, "Main-Regular", a, n),
                            s = Yt(o, t, n, i); return r && jt(s, n, t), s }(e, s.style, r, n, a, i) : "large" === s.type ? $t(e, s.size, r, n, a, i) : Zt(e, t, r, n, a, i) },
                cr = function(e, t) { var r, n, a = t.havingBaseSizing(),
                        i = sr("\\surd", e * a.sizeMultiplier, ir, a),
                        o = a.sizeMultiplier,
                        s = 0,
                        l = 0,
                        c = 0; return "small" === i.type ? (e < 1 ? o = 1 : e < 1.4 && (o = .7), l = 1 / o, (r = Jt("sqrtMain", s = 1.08 / o, c = 1080, t)).style.minWidth = "0.853em", n = .833 / o) : "large" === i.type ? (c = 1080 * rr[i.size], l = rr[i.size] / o, s = (rr[i.size] + .08) / o, (r = Jt("sqrtSize" + i.size, s, c, t)).style.minWidth = "1.02em", n = 1 / o) : (s = e + .08, l = e, c = Math.floor(1e3 * e) + 80, (r = Jt("sqrtTall", s, c, t)).style.minWidth = "0.742em", n = 1.056), r.height = l, r.style.height = s + "em", { span: r, advanceWidth: n, ruleWidth: t.fontMetrics().sqrtRuleThickness * o } },
                hr = function(e, t, r, n, a) { if ("<" === e || "\\lt" === e || "\u27e8" === e ? e = "\\langle" : ">" !== e && "\\gt" !== e && "\u27e9" !== e || (e = "\\rangle"), B.contains(Qt, e) || B.contains(tr, e)) return $t(e, t, !1, r, n, a); if (B.contains(er, e)) return Zt(e, rr[t], !1, r, n, a); throw new E("Illegal delimiter: '" + e + "'") },
                dr = lr,
                ur = function(e, t, r, n, a, i) { var o = n.fontMetrics().axisHeight * n.sizeMultiplier,
                        s = 5 / n.fontMetrics().ptPerEm,
                        l = Math.max(t - o, r + o),
                        c = Math.max(l / 500 * 901, 2 * l - s); return lr(e, c, !0, n, a, i) },
                mr = { "\\bigl": { mclass: "mopen", size: 1 }, "\\Bigl": { mclass: "mopen", size: 2 }, "\\biggl": { mclass: "mopen", size: 3 }, "\\Biggl": { mclass: "mopen", size: 4 }, "\\bigr": { mclass: "mclose", size: 1 }, "\\Bigr": { mclass: "mclose", size: 2 }, "\\biggr": { mclass: "mclose", size: 3 }, "\\Biggr": { mclass: "mclose", size: 4 }, "\\bigm": { mclass: "mrel", size: 1 }, "\\Bigm": { mclass: "mrel", size: 2 }, "\\biggm": { mclass: "mrel", size: 3 }, "\\Biggm": { mclass: "mrel", size: 4 }, "\\big": { mclass: "mord", size: 1 }, "\\Big": { mclass: "mord", size: 2 }, "\\bigg": { mclass: "mord", size: 3 }, "\\Bigg": { mclass: "mord", size: 4 } },
                pr = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "\u230a", "\u230b", "\\lceil", "\\rceil", "\u2308", "\u2309", "<", ">", "\\langle", "\u27e8", "\\rangle", "\u27e9", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "\u27ee", "\u27ef", "\\lmoustache", "\\rmoustache", "\u23b0", "\u23b1", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."];
            h({
                type: "delimsizing",
                names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"],
                props: { numArgs: 1 },
                handler: function(e, t) { var r = f(t[0], e); return { type: "delimsizing", mode: e.parser.mode, size: mr[e.funcName].size, mclass: mr[e.funcName].mclass, delim: r.text } },
                htmlBuilder: function(e, t) { return "." === e.delim ? rt.makeSpan([e.mclass]) : hr(e.delim, e.size, t, e.mode, [e.mclass]) },
                mathmlBuilder: function(e) {
                    var t = [];
                    "." !== e.delim && t.push(zt(e.delim, e.mode));
                    var r = new Mt.MathNode("mo", t);
                    return "mopen" === e.mclass || "mclose" === e.mclass ? r.setAttribute("fence", "true") : r.setAttribute("fence", "false"),
                        r
                }
            }), h({ type: "leftright-right", names: ["\\right"], props: { numArgs: 1 }, handler: function(e, t) { return { type: "leftright-right", mode: e.parser.mode, delim: f(t[0], e).text } } }), h({ type: "leftright", names: ["\\left"], props: { numArgs: 1 }, handler: function(e, t) { var r = f(t[0], e),
                        n = e.parser;++n.leftrightDepth; var a = n.parseExpression(!1);--n.leftrightDepth, n.expect("\\right", !1); var i = o(n.parseFunction(), "leftright-right"); return { type: "leftright", mode: n.mode, body: a, left: r.text, right: i.delim } }, htmlBuilder: function(e, t) { g(e); for (var r, n, a = vt(e.body, t, !0, ["mopen", "mclose"]), i = 0, o = 0, s = !1, l = 0; l < a.length; l++) a[l].isMiddle ? s = !0 : (i = Math.max(a[l].height, i), o = Math.max(a[l].depth, o)); if (i *= t.sizeMultiplier, o *= t.sizeMultiplier, r = "." === e.left ? wt(t, ["mopen"]) : ur(e.left, i, o, t, e.mode, ["mopen"]), a.unshift(r), s)
                        for (var c = 1; c < a.length; c++) { var h = a[c].isMiddle;
                            h && (a[c] = ur(h.delim, i, o, h.options, e.mode, [])) }
                    return n = "." === e.right ? wt(t, ["mclose"]) : ur(e.right, i, o, t, e.mode, ["mclose"]), a.push(n), rt.makeSpan(["minner"], a, t) }, mathmlBuilder: function(e, t) { g(e); var r = Lt(e.body, t); if ("." !== e.left) { var n = new Mt.MathNode("mo", [zt(e.left, e.mode)]);
                        n.setAttribute("fence", "true"), r.unshift(n) } if ("." !== e.right) { var a = new Mt.MathNode("mo", [zt(e.right, e.mode)]);
                        a.setAttribute("fence", "true"), r.push(a) } return Tt(r) } }), h({ type: "middle", names: ["\\middle"], props: { numArgs: 1 }, handler: function(e, t) { var r = f(t[0], e); if (!e.parser.leftrightDepth) throw new E("\\middle without preceding \\left", r); return { type: "middle", mode: e.parser.mode, delim: r.text } }, htmlBuilder: function(e, t) { var r; if ("." === e.delim) r = wt(t, []);
                    else { r = hr(e.delim, 1, t, e.mode, []); var n = { delim: e.delim, options: t };
                        r.isMiddle = n } return r }, mathmlBuilder: function(e) { var t = new Mt.MathNode("mo", [zt(e.delim, e.mode)]); return t.setAttribute("fence", "true"), t } });
            var fr = function(e, t) { var r, n, a = rt.wrapFragment(kt(e.body, t), t),
                        i = e.label.substr(1),
                        o = t.sizeMultiplier,
                        s = 0,
                        l = B.isCharacterBox(e.body); if ("sout" === i)(r = rt.makeSpan(["stretchy", "sout"])).height = t.fontMetrics().defaultRuleThickness / o, s = -.5 * t.fontMetrics().xHeight;
                    else { /cancel/.test(i) ? l || a.classes.push("cancel-pad") : a.classes.push("boxpad"); var c = 0;
                        c = /box/.test(i) ? "colorbox" === i ? .3 : .34 : l ? .2 : 0, r = Dt(a, i, c, t), s = a.depth + c, e.backgroundColor && (r.style.backgroundColor = e.backgroundColor, e.borderColor && (r.style.borderColor = e.borderColor)) } return n = e.backgroundColor ? rt.makeVList({ positionType: "individualShift", children: [{ type: "elem", elem: r, shift: s }, { type: "elem", elem: a, shift: 0 }] }, t) : rt.makeVList({ positionType: "individualShift", children: [{ type: "elem", elem: a, shift: 0 }, { type: "elem", elem: r, shift: s, wrapperClasses: /cancel/.test(i) ? ["svg-align"] : [] }] }, t), /cancel/.test(i) && (n.height = a.height, n.depth = a.depth), /cancel/.test(i) && !l ? rt.makeSpan(["mord", "cancel-lap"], [n], t) : rt.makeSpan(["mord"], [n], t) },
                gr = function(e, t) { var r = new Mt.MathNode("menclose", [Nt(e.body, t)]); switch (e.label) {
                        case "\\cancel":
                            r.setAttribute("notation", "updiagonalstrike"); break;
                        case "\\bcancel":
                            r.setAttribute("notation", "downdiagonalstrike"); break;
                        case "\\sout":
                            r.setAttribute("notation", "horizontalstrike"); break;
                        case "\\fbox":
                        case "\\fcolorbox":
                            r.setAttribute("notation", "box"); break;
                        case "\\xcancel":
                            r.setAttribute("notation", "updiagonalstrike downdiagonalstrike") } return e.backgroundColor && r.setAttribute("mathbackground", e.backgroundColor), r };
            h({ type: "enclose", names: ["\\colorbox"], props: { numArgs: 2, allowedInText: !0, greediness: 3, argTypes: ["color", "text"] }, handler: function(e, t) { var r = e.parser,
                        n = e.funcName,
                        a = o(t[0], "color-token").color,
                        i = t[1]; return { type: "enclose", mode: r.mode, label: n, backgroundColor: a, body: i } }, htmlBuilder: fr, mathmlBuilder: gr }), h({ type: "enclose", names: ["\\fcolorbox"], props: { numArgs: 3, allowedInText: !0, greediness: 3, argTypes: ["color", "color", "text"] }, handler: function(e, t) { var r = e.parser,
                        n = e.funcName,
                        a = o(t[0], "color-token").color,
                        i = o(t[1], "color-token").color,
                        s = t[2]; return { type: "enclose", mode: r.mode, label: n, backgroundColor: i, borderColor: a, body: s } }, htmlBuilder: fr, mathmlBuilder: gr }), h({ type: "enclose", names: ["\\fbox"], props: { numArgs: 1, argTypes: ["text"], allowedInText: !0 }, handler: function(e, t) { return { type: "enclose", mode: e.parser.mode, label: "\\fbox", body: t[0] } } }), h({ type: "enclose", names: ["\\cancel", "\\bcancel", "\\xcancel", "\\sout"], props: { numArgs: 1 }, handler: function(e, t) { var r = e.parser,
                        n = e.funcName,
                        a = t[0]; return { type: "enclose", mode: r.mode, label: n, body: a } }, htmlBuilder: fr, mathmlBuilder: gr });
            var vr = {},
                br = function(e, t) {
                    function r(e) { for (var t = 0; t < e.length; ++t) t > 0 && (v += .25), c.push({ pos: v, isDashed: e[t] }) } var n, a, i = e.body.length,
                        o = e.hLinesBeforeRow,
                        s = 0,
                        l = new Array(i),
                        c = [],
                        h = 1 / t.fontMetrics().ptPerEm,
                        d = 5 * h,
                        u = 12 * h,
                        m = 3 * h,
                        p = e.arraystretch * u,
                        f = .7 * p,
                        g = .3 * p,
                        v = 0; for (r(o[0]), n = 0; n < e.body.length; ++n) { var b = e.body[n],
                            y = f,
                            x = g;
                        s < b.length && (s = b.length); var w = new Array(b.length); for (a = 0; a < b.length; ++a) { var k = kt(b[a], t);
                            x < k.depth && (x = k.depth), y < k.height && (y = k.height), w[a] = k } var S = e.rowGaps[n],
                            A = 0;
                        S && (A = _e(S, t)) > 0 && (x < (A += g) && (x = A), A = 0), e.addJot && (x += m), w.height = y, w.depth = x, v += y, w.pos = v, v += x + A, l[n] = w, r(o[n + 1]) } var M, z, T = v / 2 + t.fontMetrics().axisHeight,
                        L = e.cols || [],
                        C = []; for (a = 0, z = 0; a < s || z < L.length; ++a, ++z) { for (var N = L[z] || {}, q = !0;
                            "separator" === N.type;) { if (q || ((M = rt.makeSpan(["arraycolsep"], [])).style.width = t.fontMetrics().doubleRuleSep + "em", C.push(M)), "|" === N.separator) { var I = rt.makeSpan(["vertical-separator"], [], t);
                                I.style.height = v + "em", I.style.verticalAlign = -(v - T) + "em", C.push(I) } else { if (":" !== N.separator) throw new E("Invalid separator type: " + N.separator); var O = rt.makeSpan(["vertical-separator", "vs-dashed"], [], t);
                                O.style.height = v + "em", O.style.verticalAlign = -(v - T) + "em", C.push(O) } N = L[++z] || {}, q = !1 } if (!(a >= s)) { var R = void 0;
                            (a > 0 || e.hskipBeforeAndAfter) && 0 !== (R = B.deflt(N.pregap, d)) && ((M = rt.makeSpan(["arraycolsep"], [])).style.width = R + "em", C.push(M)); var P = []; for (n = 0; n < i; ++n) { var D = l[n],
                                    H = D[a]; if (H) { var F = D.pos - T;
                                    H.depth = D.depth, H.height = D.height, P.push({ type: "elem", elem: H, shift: F }) } } P = rt.makeVList({ positionType: "individualShift", children: P }, t), P = rt.makeSpan(["col-align-" + (N.align || "c")], [P]), C.push(P), (a < s - 1 || e.hskipBeforeAndAfter) && 0 !== (R = B.deflt(N.postgap, d)) && ((M = rt.makeSpan(["arraycolsep"], [])).style.width = R + "em", C.push(M)) } } if (l = rt.makeSpan(["mtable"], C), c.length > 0) { for (var V = rt.makeLineSpan("hline", t, .05), U = rt.makeLineSpan("hdashline", t, .05), W = [{ type: "elem", elem: l, shift: 0 }]; c.length > 0;) { var _ = c.pop(),
                                X = _.pos - T;
                            _.isDashed ? W.push({ type: "elem", elem: U, shift: X }) : W.push({ type: "elem", elem: V, shift: X }) } l = rt.makeVList({ positionType: "individualShift", children: W }, t) } return rt.makeSpan(["mord"], [l], t) },
                yr = function(e, t) { return new Mt.MathNode("mtable", e.body.map(function(e) { return new Mt.MathNode("mtr", e.map(function(e) { return new Mt.MathNode("mtd", [Nt(e, t)]) })) })) },
                xr = function(e, t) { var r, n = [],
                        a = y(e.parser, { cols: n, addJot: !0 }, "display"),
                        i = 0,
                        l = { type: "ordgroup", mode: e.mode, body: [] },
                        c = s(t[0], "ordgroup"); if (c) { for (var h = "", d = 0; d < c.body.length; d++) h += o(c.body[d], "textord").text;
                        r = Number(h), i = 2 * r } var u = !i;
                    a.body.forEach(function(e) { for (var t = 1; t < e.length; t += 2) { var n = o(e[t], "styling");
                            o(n.body[0], "ordgroup").body.unshift(l) } if (u) i < e.length && (i = e.length);
                        else { var a = e.length / 2; if (r < a) throw new E("Too many math in a row: expected " + r + ", but got " + a, e[0]) } }); for (var m = 0; m < i; ++m) { var p = "r",
                            f = 0;
                        m % 2 == 1 ? p = "l" : m > 0 && u && (f = 1), n[m] = { type: "align", align: p, pregap: f, postgap: 0 } } return a };
            v({ type: "array", names: ["array", "darray"], props: { numArgs: 1 }, handler: function(e, t) { var r = { cols: (c(t[0]) ? [t[0]] : o(t[0], "ordgroup").body).map(function(e) { var t = function(e) { var t = c(e); if (!t) throw new Error("Expected node of symbol group type, but got " + (e ? "node of type " + e.type : String(e))); return t }(e).text; if (-1 !== "lcr".indexOf(t)) return { type: "align", align: t }; if ("|" === t) return { type: "separator", separator: "|" }; if (":" === t) return { type: "separator", separator: ":" }; throw new E("Unknown column alignment: " + t, e) }), hskipBeforeAndAfter: !0 }; return y(e.parser, r, x(e.envName)) }, htmlBuilder: br, mathmlBuilder: yr }), v({ type: "array", names: ["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix"], props: { numArgs: 0 }, handler: function(e) { var t = { matrix: null, pmatrix: ["(", ")"], bmatrix: ["[", "]"], Bmatrix: ["\\{", "\\}"], vmatrix: ["|", "|"], Vmatrix: ["\\Vert", "\\Vert"] } [e.envName],
                        r = y(e.parser, { hskipBeforeAndAfter: !1 }, x(e.envName)); return t ? { type: "leftright", mode: e.mode, body: [r], left: t[0], right: t[1] } : r }, htmlBuilder: br, mathmlBuilder: yr }), v({ type: "array", names: ["cases", "dcases"], props: { numArgs: 0 }, handler: function(e) { var t = y(e.parser, { arraystretch: 1.2, cols: [{ type: "align", align: "l", pregap: 0, postgap: 1 }, { type: "align", align: "l", pregap: 0, postgap: 0 }] }, x(e.envName)); return { type: "leftright", mode: e.mode, body: [t], left: "\\{", right: "." } }, htmlBuilder: br, mathmlBuilder: yr }), v({ type: "array", names: ["aligned"], props: { numArgs: 0 }, handler: xr, htmlBuilder: br, mathmlBuilder: yr }), v({ type: "array", names: ["gathered"], props: { numArgs: 0 }, handler: function(e) { return y(e.parser, { cols: [{ type: "align", align: "c" }], addJot: !0 }, "display") }, htmlBuilder: br, mathmlBuilder: yr }), v({ type: "array", names: ["alignedat"], props: { numArgs: 1 }, handler: xr, htmlBuilder: br, mathmlBuilder: yr }), h({ type: "text", names: ["\\hline", "\\hdashline"], props: { numArgs: 0, allowedInText: !0, allowedInMath: !0 }, handler: function(e) { throw new E(e.funcName + " valid only within array environment") } });
            var wr = vr;
            h({ type: "environment", names: ["\\begin", "\\end"], props: { numArgs: 1, argTypes: ["text"] }, handler: function(e, t) { var r = e.parser,
                        n = e.funcName,
                        a = t[0]; if ("ordgroup" !== a.type) throw new E("Invalid environment name", a); for (var i = "", s = 0; s < a.body.length; ++s) i += o(a.body[s], "textord").text; if ("\\begin" === n) { if (!wr.hasOwnProperty(i)) throw new E("No such environment: " + i, a); var l = wr[i],
                            c = r.parseArguments("\\begin{" + i + "}", l),
                            h = c.args,
                            d = c.optArgs,
                            u = { mode: r.mode, envName: i, parser: r },
                            m = l.handler(u, h, d);
                        r.expect("\\end", !1); var p = r.nextToken,
                            f = o(r.parseFunction(), "environment"); if (f.name !== i) throw new E("Mismatch: \\begin{" + i + "} matched by \\end{" + f.name + "}", p); return m } return { type: "environment", mode: r.mode, name: i, nameGroup: a } } });
            var kr = rt.makeSpan;
            h({ type: "mclass", names: ["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"], props: { numArgs: 1 }, handler: function(e, t) { var r = e.parser,
                        n = e.funcName,
                        a = t[0]; return { type: "mclass", mode: r.mode, mclass: "m" + n.substr(5), body: dt(a) } }, htmlBuilder: w, mathmlBuilder: k });
            var Sr = function(e) { var t = "ordgroup" === e.type && e.body.length ? e.body[0] : e; return "atom" !== t.type || "bin" !== t.family && "rel" !== t.family ? "mord" : "m" + t.family };
            h({ type: "mclass", names: ["\\@binrel"], props: { numArgs: 2 }, handler: function(e, t) { return { type: "mclass", mode: e.parser.mode, mclass: Sr(t[0]), body: [t[1]] } } }), h({ type: "mclass", names: ["\\stackrel", "\\overset", "\\underset"], props: { numArgs: 2 }, handler: function(e, t) { var r, n = e.parser,
                        a = e.funcName,
                        i = t[1],
                        o = t[0];
                    r = "\\stackrel" !== a ? Sr(i) : "mrel"; var s = { type: "op", mode: i.mode, limits: !0, alwaysHandleSupSub: !0, symbol: !1, suppressBaseShift: "\\stackrel" !== a, body: dt(i) },
                        l = { type: "supsub", mode: o.mode, base: s, sup: "\\underset" === a ? null : o, sub: "\\underset" === a ? o : null }; return { type: "mclass", mode: n.mode, mclass: r, body: [l] } }, htmlBuilder: w, mathmlBuilder: k });
            var Ar = function(e, t) { var r = e.font,
                        n = t.withFont(r); return kt(e.body, n) },
                Mr = function(e, t) { var r = e.font,
                        n = t.withFont(r); return Nt(e.body, n) },
                zr = { "\\Bbb": "\\mathbb", "\\bold": "\\mathbf", "\\frak": "\\mathfrak", "\\bm": "\\boldsymbol" };
            h({ type: "font", names: ["\\mathrm", "\\mathit", "\\mathbf", "\\mathnormal", "\\mathbb", "\\mathcal", "\\mathfrak", "\\mathscr", "\\mathsf", "\\mathtt", "\\Bbb", "\\bold", "\\frak"], props: { numArgs: 1, greediness: 2 }, handler: function(e, t) { var r = e.parser,
                        n = e.funcName,
                        a = t[0],
                        i = n; return i in zr && (i = zr[i]), { type: "font", mode: r.mode, font: i.slice(1), body: a } }, htmlBuilder: Ar, mathmlBuilder: Mr }), h({ type: "mclass", names: ["\\boldsymbol", "\\bm"], props: { numArgs: 1, greediness: 2 }, handler: function(e, t) { var r = e.parser,
                        n = t[0]; return { type: "mclass", mode: r.mode, mclass: Sr(n), body: [{ type: "font", mode: r.mode, font: "boldsymbol", body: n }] } } }), h({ type: "font", names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it"], props: { numArgs: 0, allowedInText: !0 }, handler: function(e) { var t = e.parser,
                        r = e.funcName,
                        n = e.breakOnTokenText,
                        a = t.mode,
                        i = t.parseExpression(!0, n); return { type: "font", mode: a, font: "math" + r.slice(1), body: { type: "ordgroup", mode: t.mode, body: i } } }, htmlBuilder: Ar, mathmlBuilder: Mr });
            var Tr = function(e, t) { var r = t.style; "display" === e.size ? r = W.DISPLAY : "text" === e.size && r.size === W.DISPLAY.size ? r = W.TEXT : "script" === e.size ? r = W.SCRIPT : "scriptscript" === e.size && (r = W.SCRIPTSCRIPT); var n, a = r.fracNum(),
                        i = r.fracDen();
                    n = t.havingStyle(a); var o = kt(e.numer, n, t); if (e.continued) { var s = 8.5 / t.fontMetrics().ptPerEm,
                            l = 3.5 / t.fontMetrics().ptPerEm;
                        o.height = o.height < s ? s : o.height, o.depth = o.depth < l ? l : o.depth } n = t.havingStyle(i); var c, h, d, u, m, p, f, g, v, b, y = kt(e.denom, n, t); if (e.hasBarLine ? (e.barSize ? (h = _e(e.barSize, t), c = rt.makeLineSpan("frac-line", t, h)) : c = rt.makeLineSpan("frac-line", t), h = c.height, d = c.height) : (c = null, h = 0, d = t.fontMetrics().defaultRuleThickness), r.size === W.DISPLAY.size ? (u = t.fontMetrics().num1, m = h > 0 ? 3 * d : 7 * d, p = t.fontMetrics().denom1) : (h > 0 ? (u = t.fontMetrics().num2, m = d) : (u = t.fontMetrics().num3, m = 3 * d), p = t.fontMetrics().denom2), c) { var x = t.fontMetrics().axisHeight;
                        u - o.depth - (x + .5 * h) < m && (u += m - (u - o.depth - (x + .5 * h))), x - .5 * h - (y.height - p) < m && (p += m - (x - .5 * h - (y.height - p))); var w = -(x - .5 * h);
                        f = rt.makeVList({ positionType: "individualShift", children: [{ type: "elem", elem: y, shift: p }, { type: "elem", elem: c, shift: w }, { type: "elem", elem: o, shift: -u }] }, t) } else { var k = u - o.depth - (y.height - p);
                        k < m && (u += .5 * (m - k), p += .5 * (m - k)), f = rt.makeVList({ positionType: "individualShift", children: [{ type: "elem", elem: y, shift: p }, { type: "elem", elem: o, shift: -u }] }, t) } return n = t.havingStyle(r), f.height *= n.sizeMultiplier / t.sizeMultiplier, f.depth *= n.sizeMultiplier / t.sizeMultiplier, g = r.size === W.DISPLAY.size ? t.fontMetrics().delim1 : t.fontMetrics().delim2, v = null == e.leftDelim ? wt(t, ["mopen"]) : dr(e.leftDelim, g, !0, t.havingStyle(r), e.mode, ["mopen"]), b = e.continued ? rt.makeSpan([]) : null == e.rightDelim ? wt(t, ["mclose"]) : dr(e.rightDelim, g, !0, t.havingStyle(r), e.mode, ["mclose"]), rt.makeSpan(["mord"].concat(n.sizingClasses(t)), [v, rt.makeSpan(["mfrac"], [f]), b], t) },
                Er = function(e, t) { var r = new Mt.MathNode("mfrac", [Nt(e.numer, t), Nt(e.denom, t)]); if (e.hasBarLine) { if (e.barSize) { var n = _e(e.barSize, t);
                            r.setAttribute("linethickness", n + "em") } } else r.setAttribute("linethickness", "0px"); if (null != e.leftDelim || null != e.rightDelim) { var a = []; if (null != e.leftDelim) { var i = new Mt.MathNode("mo", [new Mt.TextNode(e.leftDelim)]);
                            i.setAttribute("fence", "true"), a.push(i) } if (a.push(r), null != e.rightDelim) { var o = new Mt.MathNode("mo", [new Mt.TextNode(e.rightDelim)]);
                            o.setAttribute("fence", "true"), a.push(o) } return Tt(a) } return r };
            h({ type: "genfrac", names: ["\\cfrac", "\\dfrac", "\\frac", "\\tfrac", "\\dbinom", "\\binom", "\\tbinom", "\\\\atopfrac", "\\\\bracefrac", "\\\\brackfrac"], props: { numArgs: 2, greediness: 2 }, handler: function(e, t) { var r, n = e.parser,
                        a = e.funcName,
                        i = t[0],
                        o = t[1],
                        s = null,
                        l = null,
                        c = "auto"; switch (a) {
                        case "\\cfrac":
                        case "\\dfrac":
                        case "\\frac":
                        case "\\tfrac":
                            r = !0; break;
                        case "\\\\atopfrac":
                            r = !1; break;
                        case "\\dbinom":
                        case "\\binom":
                        case "\\tbinom":
                            r = !1, s = "(", l = ")"; break;
                        case "\\\\bracefrac":
                            r = !1, s = "\\{", l = "\\}"; break;
                        case "\\\\brackfrac":
                            r = !1, s = "[", l = "]"; break;
                        default:
                            throw new Error("Unrecognized genfrac command") } switch (a) {
                        case "\\cfrac":
                        case "\\dfrac":
                        case "\\dbinom":
                            c = "display"; break;
                        case "\\tfrac":
                        case "\\tbinom":
                            c = "text" } return { type: "genfrac", mode: n.mode, continued: "\\cfrac" === a, numer: i, denom: o, hasBarLine: r, leftDelim: s, rightDelim: l, size: c, barSize: null } }, htmlBuilder: Tr, mathmlBuilder: Er }), h({ type: "infix", names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"], props: { numArgs: 0, infix: !0 }, handler: function(e) { var t, r = e.parser,
                        n = e.funcName,
                        a = e.token; switch (n) {
                        case "\\over":
                            t = "\\frac"; break;
                        case "\\choose":
                            t = "\\binom"; break;
                        case "\\atop":
                            t = "\\\\atopfrac"; break;
                        case "\\brace":
                            t = "\\\\bracefrac"; break;
                        case "\\brack":
                            t = "\\\\brackfrac"; break;
                        default:
                            throw new Error("Unrecognized infix genfrac command") } return { type: "infix", mode: r.mode, replaceWith: t, token: a } } });
            var Lr = ["display", "text", "script", "scriptscript"],
                Cr = function(e) { var t = null; return e.length > 0 && (t = "." === (t = e) ? null : t), t };
            h({ type: "genfrac", names: ["\\genfrac"], props: { numArgs: 6, greediness: 6, argTypes: ["math", "math", "size", "text", "math", "math"] }, handler: function(e, t) { var r = e.parser,
                        n = t[4],
                        a = t[5],
                        i = s(t[0], "atom");
                    i && (i = l(t[0], "open")); var c = i ? Cr(i.text) : null,
                        h = s(t[1], "atom");
                    h && (h = l(t[1], "close")); var d, u = h ? Cr(h.text) : null,
                        m = o(t[2], "size"),
                        p = null;
                    d = !!m.isBlank || (p = m.value).number > 0; var f = "auto",
                        g = s(t[3], "ordgroup"); if (g) { if (g.body.length > 0) { var v = o(g.body[0], "textord");
                            f = Lr[Number(v.text)] } } else g = o(t[3], "textord"), f = Lr[Number(g.text)]; return { type: "genfrac", mode: r.mode, numer: n, denom: a, continued: !1, hasBarLine: d, barSize: p, leftDelim: c, rightDelim: u, size: f } }, htmlBuilder: Tr, mathmlBuilder: Er }), h({ type: "infix", names: ["\\above"], props: { numArgs: 1, argTypes: ["size"], infix: !0 }, handler: function(e, t) { var r = e.parser,
                        n = (e.funcName, e.token); return { type: "infix", mode: r.mode, replaceWith: "\\\\abovefrac", size: o(t[0], "size").value, token: n } } }), h({ type: "genfrac", names: ["\\\\abovefrac"], props: { numArgs: 3, argTypes: ["math", "size", "math"] }, handler: function(e, t) { var r = e.parser,
                        n = (e.funcName, t[0]),
                        a = function(e) { if (!e) throw new Error("Expected non-null, but got " + String(e)); return e }(o(t[1], "infix").size),
                        i = t[2],
                        s = a.number > 0; return { type: "genfrac", mode: r.mode, numer: n, denom: i, continued: !1, hasBarLine: s, barSize: a, leftDelim: null, rightDelim: null, size: "auto" } }, htmlBuilder: Tr, mathmlBuilder: Er });
            var Nr = function(e, t) { var r, n, a = t.style,
                    i = s(e, "supsub");
                i ? (r = i.sup ? kt(i.sup, t.havingStyle(a.sup()), t) : kt(i.sub, t.havingStyle(a.sub()), t), n = o(i.base, "horizBrace")) : n = o(e, "horizBrace"); var l, c = kt(n.base, t.havingBaseStyle(W.DISPLAY)),
                    h = Ft(n, t); if (n.isOver ? (l = rt.makeVList({ positionType: "firstBaseline", children: [{ type: "elem", elem: c }, { type: "kern", size: .1 }, { type: "elem", elem: h }] }, t)).children[0].children[0].children[1].classes.push("svg-align") : (l = rt.makeVList({ positionType: "bottom", positionData: c.depth + .1 + h.height, children: [{ type: "elem", elem: h }, { type: "kern", size: .1 }, { type: "elem", elem: c }] }, t)).children[0].children[0].children[0].classes.push("svg-align"), r) { var d = rt.makeSpan(["mord", n.isOver ? "mover" : "munder"], [l], t);
                    l = n.isOver ? rt.makeVList({ positionType: "firstBaseline", children: [{ type: "elem", elem: d }, { type: "kern", size: .2 }, { type: "elem", elem: r }] }, t) : rt.makeVList({ positionType: "bottom", positionData: d.depth + .2 + r.height + r.depth, children: [{ type: "elem", elem: r }, { type: "kern", size: .2 }, { type: "elem", elem: d }] }, t) } return rt.makeSpan(["mord", n.isOver ? "mover" : "munder"], [l], t) };
            h({ type: "horizBrace", names: ["\\overbrace", "\\underbrace"], props: { numArgs: 1 }, handler: function(e, t) { var r = e.parser,
                        n = e.funcName; return { type: "horizBrace", mode: r.mode, label: n, isOver: /^\\over/.test(n), base: t[0] } }, htmlBuilder: Nr, mathmlBuilder: function(e, t) { var r = Ht(e.label); return new Mt.MathNode(e.isOver ? "mover" : "munder", [Nt(e.base, t), r]) } }), h({ type: "href", names: ["\\href"], props: { numArgs: 2, argTypes: ["url", "original"], allowedInText: !0 }, handler: function(e, t) { var r = e.parser,
                        n = t[1],
                        a = o(t[0], "url").url; return { type: "href", mode: r.mode, href: a, body: dt(n) } }, htmlBuilder: function(e, t) { var r = vt(e.body, t, !1); return rt.makeAnchor(e.href, [], r, t) }, mathmlBuilder: function(e, t) { var r = Ct(e.body, t); return r instanceof St || (r = new St("mrow", [r])), r.setAttribute("href", e.href), r } }), h({ type: "href", names: ["\\url"], props: { numArgs: 1, argTypes: ["url"], allowedInText: !0 }, handler: function(e, t) { for (var r = e.parser, n = o(t[0], "url").url, a = [], i = 0; i < n.length; i++) { var s = n[i]; "~" === s && (s = "\\textasciitilde"), a.push({ type: "textord", mode: "text", text: s }) } var l = { type: "text", mode: r.mode, font: "\\texttt", body: a }; return { type: "href", mode: r.mode, href: n, body: dt(l) } } }), h({ type: "htmlmathml", names: ["\\html@mathml"], props: { numArgs: 2, allowedInText: !0 }, handler: function(e, t) { return { type: "htmlmathml", mode: e.parser.mode, html: dt(t[0]), mathml: dt(t[1]) } }, htmlBuilder: function(e, t) { var r = vt(e.html, t, !1); return rt.makeFragment(r) }, mathmlBuilder: function(e, t) { return Ct(e.mathml, t) } }), h({ type: "kern", names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"], props: { numArgs: 1, argTypes: ["size"], allowedInText: !0 }, handler: function(e, t) { var r = e.parser,
                        n = e.funcName,
                        a = o(t[0], "size"); if (r.settings.strict) { var i = "m" === n[1],
                            s = "mu" === a.value.unit;
                        i ? (s || r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " supports only mu units, not " + a.value.unit + " units"), "math" !== r.mode && r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " works only in math mode")) : s && r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " doesn't support mu units") } return { type: "kern", mode: r.mode, dimension: a.value } }, htmlBuilder: function(e, t) { return rt.makeGlue(e.dimension, t) }, mathmlBuilder: function(e, t) { var r = _e(e.dimension, t); return new Mt.SpaceNode(r) } }), h({ type: "lap", names: ["\\mathllap", "\\mathrlap", "\\mathclap"], props: { numArgs: 1, allowedInText: !0 }, handler: function(e, t) { var r = e.parser,
                        n = e.funcName,
                        a = t[0]; return { type: "lap", mode: r.mode, alignment: n.slice(5), body: a } }, htmlBuilder: function(e, t) { var r; "clap" === e.alignment ? (r = rt.makeSpan([], [kt(e.body, t)]), r = rt.makeSpan(["inner"], [r], t)) : r = rt.makeSpan(["inner"], [kt(e.body, t)]); var n = rt.makeSpan(["fix"], []),
                        a = rt.makeSpan([e.alignment], [r, n], t),
                        i = rt.makeSpan(["strut"]); return i.style.height = a.height + a.depth + "em", i.style.verticalAlign = -a.depth + "em", a.children.unshift(i), a = rt.makeVList({ positionType: "firstBaseline", children: [{ type: "elem", elem: a }] }, t), rt.makeSpan(["mord"], [a], t) }, mathmlBuilder: function(e, t) { var r = new Mt.MathNode("mpadded", [Nt(e.body, t)]); if ("rlap" !== e.alignment) { var n = "llap" === e.alignment ? "-1" : "-0.5";
                        r.setAttribute("lspace", n + "width") } return r.setAttribute("width", "0px"), r } }), h({ type: "styling", names: ["\\(", "$"], props: { numArgs: 0, allowedInText: !0, allowedInMath: !1, consumeMode: "math" }, handler: function(e) { var t = e.funcName,
                        r = e.parser,
                        n = r.mode;
                    r.switchMode("math"); var a = "\\(" === t ? "\\)" : "$",
                        i = r.parseExpression(!1, a); return r.expect(a, !1), r.switchMode(n), r.consume(), { type: "styling", mode: r.mode, style: "text", body: i } } }), h({ type: "text", names: ["\\)", "\\]"], props: { numArgs: 0, allowedInText: !0, allowedInMath: !1 }, handler: function(e) { throw new E("Mismatched " + e.funcName) } });
            var qr = function(e, t) { switch (t.style.size) {
                    case W.DISPLAY.size:
                        return e.display;
                    case W.TEXT.size:
                        return e.text;
                    case W.SCRIPT.size:
                        return e.script;
                    case W.SCRIPTSCRIPT.size:
                        return e.scriptscript;
                    default:
                        return e.text } };
            h({ type: "mathchoice", names: ["\\mathchoice"], props: { numArgs: 4 }, handler: function(e, t) { return { type: "mathchoice", mode: e.parser.mode, display: dt(t[0]), text: dt(t[1]), script: dt(t[2]), scriptscript: dt(t[3]) } }, htmlBuilder: function(e, t) { var r = qr(e, t),
                        n = vt(r, t, !1); return rt.makeFragment(n) }, mathmlBuilder: function(e, t) { var r = qr(e, t); return Ct(r, t) } });
            var Br = function(e, t) { var r, n, a, i = !1,
                        l = s(e, "supsub");
                    l ? (r = l.sup, n = l.sub, a = o(l.base, "op"), i = !0) : a = o(e, "op"); var c, h = t.style,
                        d = !1; if (h.size === W.DISPLAY.size && a.symbol && !B.contains(["\\smallint"], a.name) && (d = !0), a.symbol) { var u = d ? "Size2-Regular" : "Size1-Regular",
                            m = ""; if ("\\oiint" !== a.name && "\\oiiint" !== a.name || (m = a.name.substr(1), a.name = "oiint" === m ? "\\iint" : "\\iiint"), c = rt.makeSymbol(a.name, u, "math", t, ["mop", "op-symbol", d ? "large-op" : "small-op"]), m.length > 0) { var p = c.italic,
                                f = rt.staticSvg(m + "Size" + (d ? "2" : "1"), t);
                            c = rt.makeVList({ positionType: "individualShift", children: [{ type: "elem", elem: c, shift: 0 }, { type: "elem", elem: f, shift: d ? .08 : 0 }] }, t), a.name = "\\" + m, c.classes.unshift("mop"), c.italic = p } } else if (a.body) { var g = vt(a.body, t, !0);
                        1 === g.length && g[0] instanceof te ? (c = g[0]).classes[0] = "mop" : c = rt.makeSpan(["mop"], rt.tryCombineChars(g), t) } else { for (var v = [], b = 1; b < a.name.length; b++) v.push(rt.mathsym(a.name[b], a.mode));
                        c = rt.makeSpan(["mop"], v, t) } var y = 0,
                        x = 0; if ((c instanceof te || "\\oiint" === a.name || "\\oiiint" === a.name) && !a.suppressBaseShift && (y = (c.height - c.depth) / 2 - t.fontMetrics().axisHeight, x = c.italic), i) { var w, k, S; if (c = rt.makeSpan([], [c]), r) { var A = kt(r, t.havingStyle(h.sup()), t);
                            k = { elem: A, kern: Math.max(t.fontMetrics().bigOpSpacing1, t.fontMetrics().bigOpSpacing3 - A.depth) } } if (n) { var M = kt(n, t.havingStyle(h.sub()), t);
                            w = { elem: M, kern: Math.max(t.fontMetrics().bigOpSpacing2, t.fontMetrics().bigOpSpacing4 - M.height) } } if (k && w) { var z = t.fontMetrics().bigOpSpacing5 + w.elem.height + w.elem.depth + w.kern + c.depth + y;
                            S = rt.makeVList({ positionType: "bottom", positionData: z, children: [{ type: "kern", size: t.fontMetrics().bigOpSpacing5 }, { type: "elem", elem: w.elem, marginLeft: -x + "em" }, { type: "kern", size: w.kern }, { type: "elem", elem: c }, { type: "kern", size: k.kern }, { type: "elem", elem: k.elem, marginLeft: x + "em" }, { type: "kern", size: t.fontMetrics().bigOpSpacing5 }] }, t) } else if (w) { var T = c.height - y;
                            S = rt.makeVList({ positionType: "top", positionData: T, children: [{ type: "kern", size: t.fontMetrics().bigOpSpacing5 }, { type: "elem", elem: w.elem, marginLeft: -x + "em" }, { type: "kern", size: w.kern }, { type: "elem", elem: c }] }, t) } else { if (!k) return c; var E = c.depth + y;
                            S = rt.makeVList({ positionType: "bottom", positionData: E, children: [{ type: "elem", elem: c }, { type: "kern", size: k.kern }, { type: "elem", elem: k.elem, marginLeft: x + "em" }, { type: "kern", size: t.fontMetrics().bigOpSpacing5 }] }, t) } return rt.makeSpan(["mop", "op-limits"], [S], t) } return y && (c.style.position = "relative", c.style.top = y + "em"), c },
                Ir = function(e, t) { var r; if (e.symbol) r = new St("mo", [zt(e.name, e.mode)]);
                    else { if (!e.body) return p([r = new St("mi", [new At(e.name.slice(1))]), new St("mo", [zt("\u2061", "text")])]);
                        r = new St("mo", Lt(e.body, t)) } return r },
                Or = { "\u220f": "\\prod", "\u2210": "\\coprod", "\u2211": "\\sum", "\u22c0": "\\bigwedge", "\u22c1": "\\bigvee", "\u22c2": "\\bigcap", "\u22c3": "\\bigcup", "\u2a00": "\\bigodot", "\u2a01": "\\bigoplus", "\u2a02": "\\bigotimes", "\u2a04": "\\biguplus", "\u2a06": "\\bigsqcup" };
            h({ type: "op", names: ["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint", "\u220f", "\u2210", "\u2211", "\u22c0", "\u22c1", "\u22c2", "\u22c3", "\u2a00", "\u2a01", "\u2a02", "\u2a04", "\u2a06"], props: { numArgs: 0 }, handler: function(e) { var t = e.parser,
                        r = e.funcName; return 1 === r.length && (r = Or[r]), { type: "op", mode: t.mode, limits: !0, symbol: !0, name: r } }, htmlBuilder: Br, mathmlBuilder: Ir }), h({ type: "op", names: ["\\mathop"], props: { numArgs: 1 }, handler: function(e, t) { var r = e.parser,
                        n = t[0]; return { type: "op", mode: r.mode, limits: !1, symbol: !1, body: dt(n) } }, htmlBuilder: Br, mathmlBuilder: Ir });
            var Rr = { "\u222b": "\\int", "\u222c": "\\iint", "\u222d": "\\iiint", "\u222e": "\\oint", "\u222f": "\\oiint", "\u2230": "\\oiiint" };
            h({ type: "op", names: ["\\arcsin", "\\arccos", "\\arctan", "\\arctg", "\\arcctg", "\\arg", "\\ch", "\\cos", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\sh", "\\tan", "\\tanh", "\\tg", "\\th"], props: { numArgs: 0 }, handler: function(e) { var t = e.parser,
                        r = e.funcName; return { type: "op", mode: t.mode, limits: !1, symbol: !1, name: r } }, htmlBuilder: Br, mathmlBuilder: Ir }), h({ type: "op", names: ["\\det", "\\gcd", "\\inf", "\\lim", "\\max", "\\min", "\\Pr", "\\sup"], props: { numArgs: 0 }, handler: function(e) { var t = e.parser,
                        r = e.funcName; return { type: "op", mode: t.mode, limits: !0, symbol: !1, name: r } }, htmlBuilder: Br, mathmlBuilder: Ir }), h({ type: "op", names: ["\\int", "\\iint", "\\iiint", "\\oint", "\\oiint", "\\oiiint", "\u222b", "\u222c", "\u222d", "\u222e", "\u222f", "\u2230"], props: { numArgs: 0 }, handler: function(e) { var t = e.parser,
                        r = e.funcName; return 1 === r.length && (r = Rr[r]), { type: "op", mode: t.mode, limits: !1, symbol: !0, name: r } }, htmlBuilder: Br, mathmlBuilder: Ir }), h({ type: "operatorname", names: ["\\operatorname"], props: { numArgs: 1 }, handler: function(e, t) { var r = e.parser,
                        n = t[0]; return { type: "operatorname", mode: r.mode, body: dt(n) } }, htmlBuilder: function(e, t) { if (e.body.length > 0) { for (var r = e.body.map(function(e) { var t = e.text; return "string" == typeof t ? { type: "textord", mode: e.mode, text: t } : e }), n = vt(r, t.withFont("mathrm"), !0), a = 0; a < n.length; a++) { var i = n[a];
                            i instanceof te && (i.text = i.text.replace(/\u2212/, "-").replace(/\u2217/, "*")) } return rt.makeSpan(["mop"], n, t) } return rt.makeSpan(["mop"], [], t) }, mathmlBuilder: function(e, t) { for (var r = Lt(e.body, t.withFont("mathrm")), n = !0, a = 0; a < r.length; a++) { var i = r[a]; if (i instanceof Mt.SpaceNode);
                        else if (i instanceof Mt.MathNode) switch (i.type) {
                            case "mi":
                            case "mn":
                            case "ms":
                            case "mspace":
                            case "mtext":
                                break;
                            case "mo":
                                var o = i.children[0];
                                1 === i.children.length && o instanceof Mt.TextNode ? o.text = o.text.replace(/\u2212/, "-").replace(/\u2217/, "*") : n = !1; break;
                            default:
                                n = !1 } else n = !1 } if (n) { var s = r.map(function(e) { return e.toText() }).join("");
                        r = [new Mt.TextNode(s)] } var l = new Mt.MathNode("mi", r);
                    l.setAttribute("mathvariant", "normal"); var c = new Mt.MathNode("mo", [zt("\u2061", "text")]); return Mt.newDocumentFragment([l, c]) } }), d({ type: "ordgroup", htmlBuilder: function(e, t) { return e.semisimple ? rt.makeFragment(vt(e.body, t, !1)) : rt.makeSpan(["mord"], vt(e.body, t, !0), t) }, mathmlBuilder: function(e, t) { return Ct(e.body, t) } }), h({ type: "overline", names: ["\\overline"], props: { numArgs: 1 }, handler: function(e, t) { var r = e.parser,
                        n = t[0]; return { type: "overline", mode: r.mode, body: n } }, htmlBuilder: function(e, t) { var r = kt(e.body, t.havingCrampedStyle()),
                        n = rt.makeLineSpan("overline-line", t),
                        a = rt.makeVList({ positionType: "firstBaseline", children: [{ type: "elem", elem: r }, { type: "kern", size: 3 * n.height }, { type: "elem", elem: n }, { type: "kern", size: n.height }] }, t); return rt.makeSpan(["mord", "overline"], [a], t) }, mathmlBuilder: function(e, t) { var r = new Mt.MathNode("mo", [new Mt.TextNode("\u203e")]);
                    r.setAttribute("stretchy", "true"); var n = new Mt.MathNode("mover", [Nt(e.body, t), r]); return n.setAttribute("accent", "true"), n } }), h({ type: "phantom", names: ["\\phantom"], props: { numArgs: 1, allowedInText: !0 }, handler: function(e, t) { var r = e.parser,
                        n = t[0]; return { type: "phantom", mode: r.mode, body: dt(n) } }, htmlBuilder: function(e, t) { var r = vt(e.body, t.withPhantom(), !1); return rt.makeFragment(r) }, mathmlBuilder: function(e, t) { var r = Lt(e.body, t); return new Mt.MathNode("mphantom", r) } }), h({ type: "hphantom", names: ["\\hphantom"], props: { numArgs: 1, allowedInText: !0 }, handler: function(e, t) { var r = e.parser,
                        n = t[0]; return { type: "hphantom", mode: r.mode, body: n } }, htmlBuilder: function(e, t) { var r = rt.makeSpan([], [kt(e.body, t.withPhantom())]); if (r.height = 0, r.depth = 0, r.children)
                        for (var n = 0; n < r.children.length; n++) r.children[n].height = 0, r.children[n].depth = 0; return r = rt.makeVList({ positionType: "firstBaseline", children: [{ type: "elem", elem: r }] }, t), rt.makeSpan(["mord"], [r], t) }, mathmlBuilder: function(e, t) { var r = Lt(dt(e.body), t),
                        n = new Mt.MathNode("mphantom", r); return n.setAttribute("height", "0px"), n } }), h({ type: "vphantom", names: ["\\vphantom"], props: { numArgs: 1, allowedInText: !0 }, handler: function(e, t) { var r = e.parser,
                        n = t[0]; return { type: "vphantom", mode: r.mode, body: n } }, htmlBuilder: function(e, t) { var r = rt.makeSpan(["inner"], [kt(e.body, t.withPhantom())]),
                        n = rt.makeSpan(["fix"], []); return rt.makeSpan(["mord", "rlap"], [r, n], t) }, mathmlBuilder: function(e, t) { var r = Lt(dt(e.body), t),
                        n = new Mt.MathNode("mphantom", r); return n.setAttribute("width", "0px"), n } });
            var Pr = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"],
                Dr = function(e, t) { var r = t.havingSize(e.size); return S(e.body, r, t) };
            h({ type: "sizing", names: Pr, props: { numArgs: 0, allowedInText: !0 }, handler: function(e) { var t = e.breakOnTokenText,
                        r = e.funcName,
                        n = e.parser,
                        a = n.parseExpression(!1, t); return { type: "sizing", mode: n.mode, size: Pr.indexOf(r) + 1, body: a } }, htmlBuilder: Dr, mathmlBuilder: function(e, t) { var r = t.havingSize(e.size),
                        n = Lt(e.body, r),
                        a = new Mt.MathNode("mstyle", n); return a.setAttribute("mathsize", r.sizeMultiplier + "em"), a } }), h({ type: "raisebox", names: ["\\raisebox"], props: { numArgs: 2, argTypes: ["size", "text"], allowedInText: !0 }, handler: function(e, t) { var r = e.parser,
                        n = o(t[0], "size").value,
                        a = t[1]; return { type: "raisebox", mode: r.mode, dy: n, body: a } }, htmlBuilder: function(e, t) { var r = { type: "text", mode: e.mode, body: dt(e.body), font: "mathrm" },
                        n = { type: "sizing", mode: e.mode, body: [r], size: 6 },
                        a = Dr(n, t),
                        i = _e(e.dy, t); return rt.makeVList({ positionType: "shift", positionData: -i, children: [{ type: "elem", elem: a }] }, t) }, mathmlBuilder: function(e, t) { var r = new Mt.MathNode("mpadded", [Nt(e.body, t)]),
                        n = e.dy.number + e.dy.unit; return r.setAttribute("voffset", n), r } }), h({ type: "rule", names: ["\\rule"], props: { numArgs: 2, numOptionalArgs: 1, argTypes: ["size", "size", "size"] }, handler: function(e, t, r) { var n = e.parser,
                        a = r[0],
                        i = o(t[0], "size"),
                        s = o(t[1], "size"); return { type: "rule", mode: n.mode, shift: a && o(a, "size").value, width: i.value, height: s.value } }, htmlBuilder: function(e, t) { var r = rt.makeSpan(["mord", "rule"], [], t),
                        n = 0;
                    e.shift && (n = _e(e.shift, t)); var a = _e(e.width, t),
                        i = _e(e.height, t); return r.style.borderRightWidth = a + "em", r.style.borderTopWidth = i + "em", r.style.bottom = n + "em", r.width = a, r.height = i + n, r.depth = -n, r.maxFontSize = 1.125 * i * t.sizeMultiplier, r }, mathmlBuilder: function() { return new Mt.MathNode("mrow") } }), h({
                type: "smash",
                names: ["\\smash"],
                props: { numArgs: 1, numOptionalArgs: 1, allowedInText: !0 },
                handler: function(e, t, r) { var n = e.parser,
                        a = !1,
                        i = !1,
                        s = r[0] && o(r[0], "ordgroup"); if (s)
                        for (var l = "", c = 0; c < s.body.length; ++c)
                            if ("t" === (l = s.body[c].text)) a = !0;
                            else { if ("b" !== l) { a = !1, i = !1; break } i = !0 } else a = !0, i = !0; var h = t[0]; return { type: "smash", mode: n.mode, body: h, smashHeight: a, smashDepth: i } },
                htmlBuilder: function(e, t) {
                    var r = rt.makeSpan([], [kt(e.body, t)]);
                    if (!e.smashHeight && !e.smashDepth) return r;
                    if (e.smashHeight && (r.height = 0, r.children))
                        for (var n = 0; n < r.children.length; n++) r.children[n].height = 0;
                    if (e.smashDepth && (r.depth = 0, r.children))
                        for (var a = 0; a < r.children.length; a++) r.children[a].depth = 0;
                    var i = rt.makeVList({ positionType: "firstBaseline", children: [{ type: "elem", elem: r }] }, t);
                    return rt.makeSpan(["mord"], [i], t)
                },
                mathmlBuilder: function(e, t) { var r = new Mt.MathNode("mpadded", [Nt(e.body, t)]); return e.smashHeight && r.setAttribute("height", "0px"), e.smashDepth && r.setAttribute("depth", "0px"), r }
            }), h({ type: "sqrt", names: ["\\sqrt"], props: { numArgs: 1, numOptionalArgs: 1 }, handler: function(e, t, r) { var n = e.parser,
                        a = r[0],
                        i = t[0]; return { type: "sqrt", mode: n.mode, body: i, index: a } }, htmlBuilder: function(e, t) { var r = kt(e.body, t.havingCrampedStyle());
                    0 === r.height && (r.height = t.fontMetrics().xHeight), r = rt.wrapFragment(r, t); var n = t.fontMetrics().defaultRuleThickness,
                        a = n;
                    t.style.id < W.TEXT.id && (a = t.fontMetrics().xHeight); var i = n + a / 4,
                        o = r.height + r.depth + i + n,
                        s = cr(o, t),
                        l = s.span,
                        c = s.ruleWidth,
                        h = s.advanceWidth,
                        d = l.height - c;
                    d > r.height + r.depth + i && (i = (i + d - r.height - r.depth) / 2); var u = l.height - r.height - i - c;
                    r.style.paddingLeft = h + "em"; var m = rt.makeVList({ positionType: "firstBaseline", children: [{ type: "elem", elem: r, wrapperClasses: ["svg-align"] }, { type: "kern", size: -(r.height + u) }, { type: "elem", elem: l }, { type: "kern", size: c }] }, t); if (e.index) { var p = t.havingStyle(W.SCRIPTSCRIPT),
                            f = kt(e.index, p, t),
                            g = .6 * (m.height - m.depth),
                            v = rt.makeVList({ positionType: "shift", positionData: -g, children: [{ type: "elem", elem: f }] }, t),
                            b = rt.makeSpan(["root"], [v]); return rt.makeSpan(["mord", "sqrt"], [b, m], t) } return rt.makeSpan(["mord", "sqrt"], [m], t) }, mathmlBuilder: function(e, t) { var r = e.body,
                        n = e.index; return n ? new Mt.MathNode("mroot", [Nt(r, t), Nt(n, t)]) : new Mt.MathNode("msqrt", [Nt(r, t)]) } });
            var Hr = { display: W.DISPLAY, text: W.TEXT, script: W.SCRIPT, scriptscript: W.SCRIPTSCRIPT };
            h({ type: "styling", names: ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"], props: { numArgs: 0, allowedInText: !0 }, handler: function(e) { var t = e.breakOnTokenText,
                        r = e.funcName,
                        n = e.parser,
                        a = n.parseExpression(!0, t),
                        i = r.slice(1, r.length - 5); return { type: "styling", mode: n.mode, style: i, body: a } }, htmlBuilder: function(e, t) { var r = Hr[e.style],
                        n = t.havingStyle(r).withFont(""); return S(e.body, n, t) }, mathmlBuilder: function(e, t) { var r = { display: W.DISPLAY, text: W.TEXT, script: W.SCRIPT, scriptscript: W.SCRIPTSCRIPT } [e.style],
                        n = t.havingStyle(r),
                        a = Lt(e.body, n),
                        i = new Mt.MathNode("mstyle", a),
                        o = { display: ["0", "true"], text: ["0", "false"], script: ["1", "false"], scriptscript: ["2", "false"] } [e.style]; return i.setAttribute("scriptlevel", o[0]), i.setAttribute("displaystyle", o[1]), i } }), d({ type: "supsub", htmlBuilder: function(e, t) { var r = function(e, t) { var r = e.base; return r ? "op" === r.type ? r.limits && (t.style.size === W.DISPLAY.size || r.alwaysHandleSupSub) ? Br : null : "accent" === r.type ? B.isCharacterBox(r.base) ? Vt : null : "horizBrace" === r.type && !e.sub === r.isOver ? Nr : null : null }(e, t); if (r) return r(e, t); var n, a, i, o = e.base,
                        s = e.sup,
                        l = e.sub,
                        c = kt(o, t),
                        h = t.fontMetrics(),
                        d = 0,
                        u = 0,
                        m = o && B.isCharacterBox(o); if (s) { var p = t.havingStyle(t.style.sup());
                        n = kt(s, p, t), m || (d = c.height - p.fontMetrics().supDrop * p.sizeMultiplier / t.sizeMultiplier) } if (l) { var f = t.havingStyle(t.style.sub());
                        a = kt(l, f, t), m || (u = c.depth + f.fontMetrics().subDrop * f.sizeMultiplier / t.sizeMultiplier) } i = t.style === W.DISPLAY ? h.sup1 : t.style.cramped ? h.sup3 : h.sup2; var g, v = t.sizeMultiplier,
                        b = .5 / h.ptPerEm / v + "em",
                        y = null; if (a) { var x = e.base && "op" === e.base.type && e.base.name && ("\\oiint" === e.base.name || "\\oiiint" === e.base.name);
                        (c instanceof te || x) && (y = -c.italic + "em") } if (n && a) { d = Math.max(d, i, n.depth + .25 * h.xHeight), u = Math.max(u, h.sub2); var w = 4 * h.defaultRuleThickness; if (d - n.depth - (a.height - u) < w) { u = w - (d - n.depth) + a.height; var k = .8 * h.xHeight - (d - n.depth);
                            k > 0 && (d += k, u -= k) } var S = [{ type: "elem", elem: a, shift: u, marginRight: b, marginLeft: y }, { type: "elem", elem: n, shift: -d, marginRight: b }];
                        g = rt.makeVList({ positionType: "individualShift", children: S }, t) } else if (a) { u = Math.max(u, h.sub1, a.height - .8 * h.xHeight); var A = [{ type: "elem", elem: a, marginLeft: y, marginRight: b }];
                        g = rt.makeVList({ positionType: "shift", positionData: u, children: A }, t) } else { if (!n) throw new Error("supsub must have either sup or sub.");
                        d = Math.max(d, i, n.depth + .25 * h.xHeight), g = rt.makeVList({ positionType: "shift", positionData: -d, children: [{ type: "elem", elem: n, marginRight: b }] }, t) } var M = xt(c, "right") || "mord"; return rt.makeSpan([M], [c, rt.makeSpan(["msupsub"], [g])], t) }, mathmlBuilder: function(e, t) { var r, n = !1,
                        a = s(e.base, "horizBrace");
                    a && !!e.sup === a.isOver && (n = !0, r = a.isOver); var i, o = [Nt(e.base, t)]; if (e.sub && o.push(Nt(e.sub, t)), e.sup && o.push(Nt(e.sup, t)), n) i = r ? "mover" : "munder";
                    else if (e.sub)
                        if (e.sup) { var l = e.base;
                            i = l && "op" === l.type && l.limits && t.style === W.DISPLAY ? "munderover" : "msubsup" } else { var c = e.base;
                            i = c && "op" === c.type && c.limits && t.style === W.DISPLAY ? "munder" : "msub" } else { var h = e.base;
                        i = h && "op" === h.type && h.limits && t.style === W.DISPLAY ? "mover" : "msup" } return new Mt.MathNode(i, o) } }), d({ type: "atom", htmlBuilder: function(e, t) { return rt.mathsym(e.text, e.mode, t, ["m" + e.family]) }, mathmlBuilder: function(e, t) { var r = new Mt.MathNode("mo", [zt(e.text, e.mode)]); if ("bin" === e.family) { var n = Et(e, t); "bold-italic" === n && r.setAttribute("mathvariant", n) } else "punct" === e.family && r.setAttribute("separator", "true"); return r } });
            var Fr = { mi: "italic", mn: "normal", mtext: "normal" };
            d({ type: "mathord", htmlBuilder: function(e, t) { return rt.makeOrd(e, t, "mathord") }, mathmlBuilder: function(e, t) { var r = new Mt.MathNode("mi", [zt(e.text, e.mode, t)]),
                        n = Et(e, t) || "italic"; return n !== Fr[r.type] && r.setAttribute("mathvariant", n), r } }), d({ type: "textord", htmlBuilder: function(e, t) { return rt.makeOrd(e, t, "textord") }, mathmlBuilder: function(e, t) { var r, n = zt(e.text, e.mode, t),
                        a = Et(e, t) || "normal"; return r = "text" === e.mode ? new Mt.MathNode("mtext", [n]) : /[0-9]/.test(e.text) ? new Mt.MathNode("mn", [n]) : "\\prime" === e.text ? new Mt.MathNode("mo", [n]) : new Mt.MathNode("mi", [n]), a !== Fr[r.type] && r.setAttribute("mathvariant", a), r } });
            var Vr = { "\\nobreak": "nobreak", "\\allowbreak": "allowbreak" },
                Ur = { " ": {}, "\\ ": {}, "~": { className: "nobreak" }, "\\space": {}, "\\nobreakspace": { className: "nobreak" } };
            d({ type: "spacing", htmlBuilder: function(e, t) { if (Ur.hasOwnProperty(e.text)) { var r = Ur[e.text].className || ""; if ("text" === e.mode) { var n = rt.makeOrd(e, t, "textord"); return n.classes.push(r), n } return rt.makeSpan(["mspace", r], [rt.mathsym(e.text, e.mode, t)], t) } if (Vr.hasOwnProperty(e.text)) return rt.makeSpan(["mspace", Vr[e.text]], [], t); throw new E('Unknown type of space "' + e.text + '"') }, mathmlBuilder: function(e) { if (!Ur.hasOwnProperty(e.text)) { if (Vr.hasOwnProperty(e.text)) return new Mt.MathNode("mspace"); throw new E('Unknown type of space "' + e.text + '"') } return new Mt.MathNode("mtext", [new Mt.TextNode("\xa0")]) } }), d({ type: "tag", mathmlBuilder: function(e, t) { var r = new Mt.MathNode("mtable", [new Mt.MathNode("mlabeledtr", [new Mt.MathNode("mtd", [Ct(e.tag, t)]), new Mt.MathNode("mtd", [Ct(e.body, t)])])]); return r.setAttribute("side", "right"), r } });
            var Wr = { "\\text": void 0, "\\textrm": "textrm", "\\textsf": "textsf", "\\texttt": "texttt", "\\textnormal": "textrm" },
                _r = { "\\textbf": "textbf" },
                Xr = { "\\textit": "textit" },
                Gr = function(e, t) { var r = e.font; return r ? Wr[r] ? t.withTextFontFamily(Wr[r]) : _r[r] ? t.withTextFontWeight(_r[r]) : t.withTextFontShape(Xr[r]) : t };
            h({ type: "text", names: ["\\text", "\\textrm", "\\textsf", "\\texttt", "\\textnormal", "\\textbf", "\\textit"], props: { numArgs: 1, argTypes: ["text"], greediness: 2, allowedInText: !0, consumeMode: "text" }, handler: function(e, t) { var r = e.parser,
                        n = e.funcName,
                        a = t[0]; return { type: "text", mode: r.mode, body: dt(a), font: n } }, htmlBuilder: function(e, t) { var r = Gr(e, t),
                        n = vt(e.body, r, !0); return rt.makeSpan(["mord", "text"], rt.tryCombineChars(n), r) }, mathmlBuilder: function(e, t) { var r = Gr(e, t); return Ct(e.body, r) } }), h({ type: "underline", names: ["\\underline"], props: { numArgs: 1, allowedInText: !0 }, handler: function(e, t) { return { type: "underline", mode: e.parser.mode, body: t[0] } }, htmlBuilder: function(e, t) { var r = kt(e.body, t),
                        n = rt.makeLineSpan("underline-line", t),
                        a = rt.makeVList({ positionType: "top", positionData: r.height, children: [{ type: "kern", size: n.height }, { type: "elem", elem: n }, { type: "kern", size: 3 * n.height }, { type: "elem", elem: r }] }, t); return rt.makeSpan(["mord", "underline"], [a], t) }, mathmlBuilder: function(e, t) { var r = new Mt.MathNode("mo", [new Mt.TextNode("\u203e")]);
                    r.setAttribute("stretchy", "true"); var n = new Mt.MathNode("munder", [Nt(e.body, t), r]); return n.setAttribute("accentunder", "true"), n } }), h({ type: "verb", names: ["\\verb"], props: { numArgs: 0, allowedInText: !0 }, handler: function() { throw new E("\\verb ended by end of line instead of matching delimiter") }, htmlBuilder: function(e, t) { for (var r = Yr(e), n = [], a = t.havingStyle(t.style.text()), i = 0; i < r.length; i++) { var o = r[i]; "~" === o && (o = "\\textasciitilde"), n.push(rt.makeSymbol(o, "Typewriter-Regular", e.mode, a, ["mord", "texttt"])) } return rt.makeSpan(["mord", "text"].concat(a.sizingClasses(t)), rt.tryCombineChars(n), a) }, mathmlBuilder: function(e) { var t = new Mt.TextNode(Yr(e)),
                        r = new Mt.MathNode("mtext", [t]); return r.setAttribute("mathvariant", "monospace"), r } });
            var Yr = function(e) { return e.body.replace(/ /g, e.star ? "\u2423" : "\xa0") },
                jr = lt,
                $r = new RegExp("^(\\\\[a-zA-Z@]+)[ \r\n\t]*$"),
                Kr = new RegExp("[\u0300-\u036f]+$"),
                Zr = "([ \r\n\t]+)|([!-\\[\\]-\u2027\u202a-\ud7ff\uf900-\uffff][\u0300-\u036f]*|[\ud800-\udbff][\udc00-\udfff][\u0300-\u036f]*|\\\\verb\\*([^]).*?\\3|\\\\verb([^*a-zA-Z]).*?\\4|\\\\[a-zA-Z@]+[ \r\n\t]*|\\\\[^\ud800-\udfff])",
                Jr = function() {
                    function e(e, t) { this.input = void 0, this.settings = void 0, this.tokenRegex = void 0, this.catcodes = void 0, this.input = e, this.settings = t, this.tokenRegex = new RegExp(Zr, "g"), this.catcodes = { "%": 14 } } var t = e.prototype; return t.setCatcode = function(e, t) { this.catcodes[e] = t }, t.lex = function() { var e = this.input,
                            t = this.tokenRegex.lastIndex; if (t === e.length) return new z("EOF", new M(this, t, t)); var r = this.tokenRegex.exec(e); if (null === r || r.index !== t) throw new E("Unexpected character: '" + e[t] + "'", new z(e[t], new M(this, t, t + 1))); var n = r[2] || " "; if (14 === this.catcodes[n]) { var a = e.indexOf("\n", this.tokenRegex.lastIndex); return -1 === a ? (this.tokenRegex.lastIndex = e.length, this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")) : this.tokenRegex.lastIndex = a + 1, this.lex() } var i = n.match($r); return i && (n = i[1]), new z(n, new M(this, t, this.tokenRegex.lastIndex)) }, e }(),
                Qr = function() {
                    function e(e, t) { void 0 === e && (e = {}), void 0 === t && (t = {}), this.current = void 0, this.builtins = void 0, this.undefStack = void 0, this.current = t, this.builtins = e, this.undefStack = [] } var t = e.prototype; return t.beginGroup = function() { this.undefStack.push({}) }, t.endGroup = function() { if (0 === this.undefStack.length) throw new E("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug"); var e = this.undefStack.pop(); for (var t in e) e.hasOwnProperty(t) && (void 0 === e[t] ? delete this.current[t] : this.current[t] = e[t]) }, t.has = function(e) { return this.current.hasOwnProperty(e) || this.builtins.hasOwnProperty(e) }, t.get = function(e) { return this.current.hasOwnProperty(e) ? this.current[e] : this.builtins[e] }, t.set = function(e, t, r) { if (void 0 === r && (r = !1), r) { for (var n = 0; n < this.undefStack.length; n++) delete this.undefStack[n][e];
                            this.undefStack.length > 0 && (this.undefStack[this.undefStack.length - 1][e] = t) } else { var a = this.undefStack[this.undefStack.length - 1];
                            a && !a.hasOwnProperty(e) && (a[e] = this.current[e]) } this.current[e] = t }, e }(),
                en = {},
                tn = en;
            A("\\@firstoftwo", function(e) { return { tokens: e.consumeArgs(2)[0], numArgs: 0 } }), A("\\@secondoftwo", function(e) { return { tokens: e.consumeArgs(2)[1], numArgs: 0 } }), A("\\@ifnextchar", function(e) { var t = e.consumeArgs(3),
                    r = e.future(); return 1 === t[0].length && t[0][0].text === r.text ? { tokens: t[1], numArgs: 0 } : { tokens: t[2], numArgs: 0 } }), A("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}"), A("\\TextOrMath", function(e) { var t = e.consumeArgs(2); return "text" === e.mode ? { tokens: t[0], numArgs: 0 } : { tokens: t[1], numArgs: 0 } });
            var rn = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, a: 10, A: 10, b: 11, B: 11, c: 12, C: 12, d: 13, D: 13, e: 14, E: 14, f: 15, F: 15 };
            A("\\char", function(e) { var t, r = e.popToken(),
                    n = ""; if ("'" === r.text) t = 8, r = e.popToken();
                else if ('"' === r.text) t = 16, r = e.popToken();
                else if ("`" === r.text)
                    if ("\\" === (r = e.popToken()).text[0]) n = r.text.charCodeAt(1);
                    else { if ("EOF" === r.text) throw new E("\\char` missing argument");
                        n = r.text.charCodeAt(0) } else t = 10; if (t) { if (null == (n = rn[r.text]) || n >= t) throw new E("Invalid base-" + t + " digit " + r.text); for (var a; null != (a = rn[e.future().text]) && a < t;) n *= t, n += a, e.popToken() } return "\\@char{" + n + "}" });
            var nn = function(e, t) { var r = e.consumeArgs(1)[0]; if (1 !== r.length) throw new E("\\gdef's first argument must be a macro name"); var n = r[0].text,
                    a = 0; for (r = e.consumeArgs(1)[0]; 1 === r.length && "#" === r[0].text;) { if (1 !== (r = e.consumeArgs(1)[0]).length) throw new E('Invalid argument number length "' + r.length + '"'); if (!/^[1-9]$/.test(r[0].text)) throw new E('Invalid argument number "' + r[0].text + '"'); if (a++, parseInt(r[0].text) !== a) throw new E('Argument number "' + r[0].text + '" out of order');
                    r = e.consumeArgs(1)[0] } return e.macros.set(n, { tokens: r, numArgs: a }, t), "" };
            A("\\gdef", function(e) { return nn(e, !0) }), A("\\def", function(e) { return nn(e, !1) }), A("\\global", function(e) { var t = e.consumeArgs(1)[0]; if (1 !== t.length) throw new E("Invalid command after \\global"); var r = t[0].text; if ("\\def" === r) return nn(e, !0); throw new E("Invalid command '" + r + "' after \\global") });
            var an = function(e, t, r) { var n = e.consumeArgs(1)[0]; if (1 !== n.length) throw new E("\\newcommand's first argument must be a macro name"); var a = n[0].text,
                    i = e.isDefined(a); if (i && !t) throw new E("\\newcommand{" + a + "} attempting to redefine " + a + "; use \\renewcommand"); if (!i && !r) throw new E("\\renewcommand{" + a + "} when command " + a + " does not yet exist; use \\newcommand"); var o = 0; if (1 === (n = e.consumeArgs(1)[0]).length && "[" === n[0].text) { for (var s = "", l = e.expandNextToken();
                        "]" !== l.text && "EOF" !== l.text;) s += l.text, l = e.expandNextToken(); if (!s.match(/^\s*[0-9]+\s*$/)) throw new E("Invalid number of arguments: " + s);
                    o = parseInt(s), n = e.consumeArgs(1)[0] } return e.macros.set(a, { tokens: n, numArgs: o }), "" };
            A("\\newcommand", function(e) { return an(e, !1, !0) }), A("\\renewcommand", function(e) { return an(e, !0, !1) }), A("\\providecommand", function(e) { return an(e, !0, !0) }), A("\\bgroup", "{"), A("\\egroup", "}"), A("\\lq", "`"), A("\\rq", "'"), A("\\aa", "\\r a"), A("\\AA", "\\r A"), A("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`\xa9}"), A("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}"), A("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`\xae}"), A("\u212c", "\\mathscr{B}"), A("\u2130", "\\mathscr{E}"), A("\u2131", "\\mathscr{F}"), A("\u210b", "\\mathscr{H}"), A("\u2110", "\\mathscr{I}"), A("\u2112", "\\mathscr{L}"), A("\u2133", "\\mathscr{M}"), A("\u211b", "\\mathscr{R}"), A("\u212d", "\\mathfrak{C}"), A("\u210c", "\\mathfrak{H}"), A("\u2128", "\\mathfrak{Z}"), A("\xb7", "\\cdotp"), A("\\llap", "\\mathllap{\\textrm{#1}}"), A("\\rlap", "\\mathrlap{\\textrm{#1}}"), A("\\clap", "\\mathclap{\\textrm{#1}}"), A("\\not", "\\mathrel{\\mathrlap\\@not}"), A("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`\u2260}}"), A("\\ne", "\\neq"), A("\u2260", "\\neq"), A("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`\u2209}}"), A("\u2209", "\\notin"), A("\u2258", "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`\u2258}}"), A("\u2259", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`\u2258}}"), A("\u225a", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`\u225a}}"), A("\u225b", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`\u225b}}"), A("\u225d", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`\u225d}}"), A("\u225e", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`\u225e}}"), A("\u225f", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`\u225f}}"), A("\u27c2", "\\perp"), A("\u203c", "\\mathclose{!\\mkern-0.8mu!}"), A("\u220c", "\\notni"), A("\u231c", "\\ulcorner"), A("\u231d", "\\urcorner"), A("\u231e", "\\llcorner"), A("\u231f", "\\lrcorner"), A("\xa9", "\\copyright"), A("\xae", "\\textregistered"), A("\ufe0f", "\\textregistered"), A("\\vdots", "\\mathord{\\varvdots\\rule{0pt}{15pt}}"), A("\u22ee", "\\vdots"), A("\\varGamma", "\\mathit{\\Gamma}"), A("\\varDelta", "\\mathit{\\Delta}"), A("\\varTheta", "\\mathit{\\Theta}"), A("\\varLambda", "\\mathit{\\Lambda}"), A("\\varXi", "\\mathit{\\Xi}"), A("\\varPi", "\\mathit{\\Pi}"), A("\\varSigma", "\\mathit{\\Sigma}"), A("\\varUpsilon", "\\mathit{\\Upsilon}"), A("\\varPhi", "\\mathit{\\Phi}"), A("\\varPsi", "\\mathit{\\Psi}"), A("\\varOmega", "\\mathit{\\Omega}"), A("\\colon", "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu"), A("\\boxed", "\\fbox{$\\displaystyle{#1}$}"), A("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;"), A("\\implies", "\\DOTSB\\;\\Longrightarrow\\;"), A("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
            var on = { ",": "\\dotsc", "\\not": "\\dotsb", "+": "\\dotsb", "=": "\\dotsb", "<": "\\dotsb", ">": "\\dotsb", "-": "\\dotsb", "*": "\\dotsb", ":": "\\dotsb", "\\DOTSB": "\\dotsb", "\\coprod": "\\dotsb", "\\bigvee": "\\dotsb", "\\bigwedge": "\\dotsb", "\\biguplus": "\\dotsb", "\\bigcap": "\\dotsb", "\\bigcup": "\\dotsb", "\\prod": "\\dotsb", "\\sum": "\\dotsb", "\\bigotimes": "\\dotsb", "\\bigoplus": "\\dotsb", "\\bigodot": "\\dotsb", "\\bigsqcup": "\\dotsb", "\\And": "\\dotsb", "\\longrightarrow": "\\dotsb", "\\Longrightarrow": "\\dotsb", "\\longleftarrow": "\\dotsb", "\\Longleftarrow": "\\dotsb", "\\longleftrightarrow": "\\dotsb", "\\Longleftrightarrow": "\\dotsb", "\\mapsto": "\\dotsb", "\\longmapsto": "\\dotsb", "\\hookrightarrow": "\\dotsb", "\\doteq": "\\dotsb", "\\mathbin": "\\dotsb", "\\mathrel": "\\dotsb", "\\relbar": "\\dotsb", "\\Relbar": "\\dotsb", "\\xrightarrow": "\\dotsb", "\\xleftarrow": "\\dotsb", "\\DOTSI": "\\dotsi", "\\int": "\\dotsi", "\\oint": "\\dotsi", "\\iint": "\\dotsi", "\\iiint": "\\dotsi", "\\iiiint": "\\dotsi", "\\idotsint": "\\dotsi", "\\DOTSX": "\\dotsx" };
            A("\\dots", function(e) { var t = "\\dotso",
                    r = e.expandAfterFuture().text; return r in on ? t = on[r] : "\\not" === r.substr(0, 4) ? t = "\\dotsb" : r in ue.math && B.contains(["bin", "rel"], ue.math[r].group) && (t = "\\dotsb"), t });
            var sn = { ")": !0, "]": !0, "\\rbrack": !0, "\\}": !0, "\\rbrace": !0, "\\rangle": !0, "\\rceil": !0, "\\rfloor": !0, "\\rgroup": !0, "\\rmoustache": !0, "\\right": !0, "\\bigr": !0, "\\biggr": !0, "\\Bigr": !0, "\\Biggr": !0, $: !0, ";": !0, ".": !0, ",": !0 };
            A("\\dotso", function(e) { return e.future().text in sn ? "\\ldots\\," : "\\ldots" }), A("\\dotsc", function(e) { var t = e.future().text; return t in sn && "," !== t ? "\\ldots\\," : "\\ldots" }), A("\\cdots", function(e) { return e.future().text in sn ? "\\@cdots\\," : "\\@cdots" }), A("\\dotsb", "\\cdots"), A("\\dotsm", "\\cdots"), A("\\dotsi", "\\!\\cdots"), A("\\dotsx", "\\ldots\\,"), A("\\DOTSI", "\\relax"), A("\\DOTSB", "\\relax"), A("\\DOTSX", "\\relax"), A("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax"), A("\\,", "\\tmspace+{3mu}{.1667em}"), A("\\thinspace", "\\,"), A("\\>", "\\mskip{4mu}"), A("\\:", "\\tmspace+{4mu}{.2222em}"), A("\\medspace", "\\:"), A("\\;", "\\tmspace+{5mu}{.2777em}"), A("\\thickspace", "\\;"), A("\\!", "\\tmspace-{3mu}{.1667em}"), A("\\negthinspace", "\\!"), A("\\negmedspace", "\\tmspace-{4mu}{.2222em}"), A("\\negthickspace", "\\tmspace-{5mu}{.277em}"), A("\\enspace", "\\kern.5em "), A("\\enskip", "\\hskip.5em\\relax"), A("\\quad", "\\hskip1em\\relax"), A("\\qquad", "\\hskip2em\\relax"), A("\\tag", "\\@ifstar\\tag@literal\\tag@paren"), A("\\tag@paren", "\\tag@literal{({#1})}"), A("\\tag@literal", function(e) { if (e.macros.get("\\df@tag")) throw new E("Multiple \\tag"); return "\\gdef\\df@tag{\\text{#1}}" }), A("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}"), A("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)"), A("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}"), A("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1"), A("\\pmb", "\\html@mathml{\\@binrel{#1}{\\mathrlap{#1}\\mathrlap{\\mkern0.4mu\\raisebox{0.4mu}{$#1$}}{\\mkern0.8mu#1}}}{\\mathbf{#1}}"), A("\\\\", "\\newline"), A("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
            var ln = ie["Main-Regular"]["T".charCodeAt(0)][1] - .7 * ie["Main-Regular"]["A".charCodeAt(0)][1] + "em";
            A("\\LaTeX", "\\textrm{\\html@mathml{L\\kern-.36em\\raisebox{" + ln + "}{\\scriptsize A}\\kern-.15em\\TeX}{LaTeX}}"), A("\\KaTeX", "\\textrm{\\html@mathml{K\\kern-.17em\\raisebox{" + ln + "}{\\scriptsize A}\\kern-.15em\\TeX}{KaTeX}}"), A("\\hspace", "\\@ifstar\\@hspacer\\@hspace"), A("\\@hspace", "\\hskip #1\\relax"), A("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax"), A("\\ordinarycolon", ":"), A("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}"), A("\\dblcolon", "\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}"), A("\\coloneqq", "\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}"), A("\\Coloneqq", "\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}"), A("\\coloneq", "\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}"), A("\\Coloneq", "\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}"), A("\\eqqcolon", "\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}"), A("\\Eqqcolon", "\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}"), A("\\eqcolon", "\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}"), A("\\Eqcolon", "\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}"), A("\\colonapprox", "\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}"), A("\\Colonapprox", "\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}"), A("\\colonsim", "\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}"), A("\\Colonsim", "\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}"), A("\u2254", "\\coloneqq"), A("\u2255", "\\eqqcolon"), A("\u2a74", "\\Coloneqq"), A("\\ratio", "\\vcentcolon"), A("\\coloncolon", "\\dblcolon"), A("\\colonequals", "\\coloneqq"), A("\\coloncolonequals", "\\Coloneqq"), A("\\equalscolon", "\\eqqcolon"), A("\\equalscoloncolon", "\\Eqqcolon"), A("\\colonminus", "\\coloneq"), A("\\coloncolonminus", "\\Coloneq"), A("\\minuscolon", "\\eqcolon"), A("\\minuscoloncolon", "\\Eqcolon"), A("\\coloncolonapprox", "\\Colonapprox"), A("\\coloncolonsim", "\\Colonsim"), A("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}"), A("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}"), A("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}"), A("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}"), A("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`\u220c}}"), A("\\limsup", "\\DOTSB\\mathop{\\operatorname{lim\\,sup}}\\limits"), A("\\liminf", "\\DOTSB\\mathop{\\operatorname{lim\\,inf}}\\limits"), A("\u27e6", "\\mathopen{[\\mkern-3.2mu[}"), A("\u27e7", "\\mathclose{]\\mkern-3.2mu]}"), A("\\darr", "\\downarrow"), A("\\dArr", "\\Downarrow"), A("\\Darr", "\\Downarrow"), A("\\lang", "\\langle"), A("\\rang", "\\rangle"), A("\\uarr", "\\uparrow"), A("\\uArr", "\\Uparrow"), A("\\Uarr", "\\Uparrow"), A("\\N", "\\mathbb{N}"), A("\\R", "\\mathbb{R}"), A("\\Z", "\\mathbb{Z}"), A("\\alef", "\\aleph"), A("\\alefsym", "\\aleph"), A("\\Alpha", "\\mathrm{A}"), A("\\Beta", "\\mathrm{B}"), A("\\bull", "\\bullet"), A("\\Chi", "\\mathrm{X}"), A("\\clubs", "\\clubsuit"), A("\\cnums", "\\mathbb{C}"), A("\\Complex", "\\mathbb{C}"), A("\\Dagger", "\\ddagger"), A("\\diamonds", "\\diamondsuit"), A("\\empty", "\\emptyset"), A("\\Epsilon", "\\mathrm{E}"), A("\\Eta", "\\mathrm{H}"), A("\\exist", "\\exists"), A("\\harr", "\\leftrightarrow"), A("\\hArr", "\\Leftrightarrow"), A("\\Harr", "\\Leftrightarrow"), A("\\hearts", "\\heartsuit"), A("\\image", "\\Im"), A("\\infin", "\\infty"), A("\\Iota", "\\mathrm{I}"), A("\\isin", "\\in"), A("\\Kappa", "\\mathrm{K}"), A("\\larr", "\\leftarrow"), A("\\lArr", "\\Leftarrow"), A("\\Larr", "\\Leftarrow"), A("\\lrarr", "\\leftrightarrow"), A("\\lrArr", "\\Leftrightarrow"), A("\\Lrarr", "\\Leftrightarrow"), A("\\Mu", "\\mathrm{M}"), A("\\natnums", "\\mathbb{N}"), A("\\Nu", "\\mathrm{N}"), A("\\Omicron", "\\mathrm{O}"), A("\\plusmn", "\\pm"), A("\\rarr", "\\rightarrow"), A("\\rArr", "\\Rightarrow"), A("\\Rarr", "\\Rightarrow"), A("\\real", "\\Re"), A("\\reals", "\\mathbb{R}"), A("\\Reals", "\\mathbb{R}"), A("\\Rho", "\\mathrm{R}"), A("\\sdot", "\\cdot"), A("\\sect", "\\S"), A("\\spades", "\\spadesuit"), A("\\sub", "\\subset"), A("\\sube", "\\subseteq"), A("\\supe", "\\supseteq"), A("\\Tau", "\\mathrm{T}"), A("\\thetasym", "\\vartheta"), A("\\weierp", "\\wp"), A("\\Zeta", "\\mathrm{Z}"), A("\\argmin", "\\DOTSB\\mathop{\\operatorname{arg\\,min}}\\limits"), A("\\argmax", "\\DOTSB\\mathop{\\operatorname{arg\\,max}}\\limits");
            var cn = { "\\relax": !0, "^": !0, _: !0, "\\limits": !0, "\\nolimits": !0 },
                hn = function() {
                    function e(e, t, r) { this.settings = void 0, this.expansionCount = void 0, this.lexer = void 0, this.macros = void 0, this.stack = void 0, this.mode = void 0, this.settings = t, this.expansionCount = 0, this.feed(e), this.macros = new Qr(tn, t.macros), this.mode = r, this.stack = [] } var t = e.prototype; return t.feed = function(e) { this.lexer = new Jr(e, this.settings) }, t.switchMode = function(e) { this.mode = e }, t.beginGroup = function() { this.macros.beginGroup() }, t.endGroup = function() { this.macros.endGroup() }, t.future = function() { return 0 === this.stack.length && this.pushToken(this.lexer.lex()), this.stack[this.stack.length - 1] }, t.popToken = function() { return this.future(), this.stack.pop() }, t.pushToken = function(e) { this.stack.push(e) }, t.pushTokens = function(e) { var t;
                        (t = this.stack).push.apply(t, e) }, t.consumeSpaces = function() { for (;
                            " " === this.future().text;) this.stack.pop() }, t.consumeArgs = function(e) { for (var t = [], r = 0; r < e; ++r) { this.consumeSpaces(); var n = this.popToken(); if ("{" === n.text) { for (var a = [], i = 1; 0 !== i;) { var o = this.popToken(); if (a.push(o), "{" === o.text) ++i;
                                    else if ("}" === o.text) --i;
                                    else if ("EOF" === o.text) throw new E("End of input in macro argument", n) } a.pop(), a.reverse(), t[r] = a } else { if ("EOF" === n.text) throw new E("End of input expecting macro argument");
                                t[r] = [n] } } return t }, t.expandOnce = function() { var e = this.popToken(),
                            t = e.text,
                            r = this._getExpansion(t); if (null == r) return this.pushToken(e), e; if (this.expansionCount++, this.expansionCount > this.settings.maxExpand) throw new E("Too many expansions: infinite loop or need to increase maxExpand setting"); var n = r.tokens; if (r.numArgs)
                            for (var a = this.consumeArgs(r.numArgs), i = (n = n.slice()).length - 1; i >= 0; --i) { var o = n[i]; if ("#" === o.text) { if (0 === i) throw new E("Incomplete placeholder at end of macro body", o); if ("#" === (o = n[--i]).text) n.splice(i + 1, 1);
                                    else { if (!/^[1-9]$/.test(o.text)) throw new E("Not a valid argument number", o); var s;
                                        (s = n).splice.apply(s, [i, 2].concat(a[+o.text - 1])) } } }
                        return this.pushTokens(n), n }, t.expandAfterFuture = function() { return this.expandOnce(), this.future() }, t.expandNextToken = function() { for (;;) { var e = this.expandOnce(); if (e instanceof z) { if ("\\relax" !== e.text) return this.stack.pop();
                                this.stack.pop() } } throw new Error }, t.expandMacro = function(e) { if (this.macros.get(e)) { var t = [],
                                r = this.stack.length; for (this.pushToken(new z(e)); this.stack.length > r;) this.expandOnce() instanceof z && t.push(this.stack.pop()); return t } }, t.expandMacroAsText = function(e) { var t = this.expandMacro(e); return t ? t.map(function(e) { return e.text }).join("") : t }, t._getExpansion = function(e) { var t = this.macros.get(e); if (null == t) return t; var r = "function" == typeof t ? t(this) : t; if ("string" == typeof r) { var n = 0; if (-1 !== r.indexOf("#"))
                                for (var a = r.replace(/##/g, ""); - 1 !== a.indexOf("#" + (n + 1));) ++n; for (var i = new Jr(r, this.settings), o = [], s = i.lex();
                                "EOF" !== s.text;) o.push(s), s = i.lex(); return o.reverse(), { tokens: o, numArgs: n } } return r }, t.isDefined = function(e) { return this.macros.has(e) || jr.hasOwnProperty(e) || ue.math.hasOwnProperty(e) || ue.text.hasOwnProperty(e) || cn.hasOwnProperty(e) }, e }(),
                dn = { "\u0301": { text: "\\'", math: "\\acute" }, "\u0300": { text: "\\`", math: "\\grave" }, "\u0308": { text: '\\"', math: "\\ddot" }, "\u0303": { text: "\\~", math: "\\tilde" }, "\u0304": { text: "\\=", math: "\\bar" }, "\u0306": { text: "\\u", math: "\\breve" }, "\u030c": { text: "\\v", math: "\\check" }, "\u0302": { text: "\\^", math: "\\hat" }, "\u0307": { text: "\\.", math: "\\dot" }, "\u030a": { text: "\\r", math: "\\mathring" }, "\u030b": { text: "\\H" } },
                un = {
                    "\xe1": "a\u0301",
                    "\xe0": "a\u0300",
                    "\xe4": "a\u0308",
                    "\u01df": "a\u0308\u0304",
                    "\xe3": "a\u0303",
                    "\u0101": "a\u0304",
                    "\u0103": "a\u0306",
                    "\u1eaf": "a\u0306\u0301",
                    "\u1eb1": "a\u0306\u0300",
                    "\u1eb5": "a\u0306\u0303",
                    "\u01ce": "a\u030c",
                    "\xe2": "a\u0302",
                    "\u1ea5": "a\u0302\u0301",
                    "\u1ea7": "a\u0302\u0300",
                    "\u1eab": "a\u0302\u0303",
                    "\u0227": "a\u0307",
                    "\u01e1": "a\u0307\u0304",
                    "\xe5": "a\u030a",
                    "\u01fb": "a\u030a\u0301",
                    "\u1e03": "b\u0307",
                    "\u0107": "c\u0301",
                    "\u010d": "c\u030c",
                    "\u0109": "c\u0302",
                    "\u010b": "c\u0307",
                    "\u010f": "d\u030c",
                    "\u1e0b": "d\u0307",
                    "\xe9": "e\u0301",
                    "\xe8": "e\u0300",
                    "\xeb": "e\u0308",
                    "\u1ebd": "e\u0303",
                    "\u0113": "e\u0304",
                    "\u1e17": "e\u0304\u0301",
                    "\u1e15": "e\u0304\u0300",
                    "\u0115": "e\u0306",
                    "\u011b": "e\u030c",
                    "\xea": "e\u0302",
                    "\u1ebf": "e\u0302\u0301",
                    "\u1ec1": "e\u0302\u0300",
                    "\u1ec5": "e\u0302\u0303",
                    "\u0117": "e\u0307",
                    "\u1e1f": "f\u0307",
                    "\u01f5": "g\u0301",
                    "\u1e21": "g\u0304",
                    "\u011f": "g\u0306",
                    "\u01e7": "g\u030c",
                    "\u011d": "g\u0302",
                    "\u0121": "g\u0307",
                    "\u1e27": "h\u0308",
                    "\u021f": "h\u030c",
                    "\u0125": "h\u0302",
                    "\u1e23": "h\u0307",
                    "\xed": "i\u0301",
                    "\xec": "i\u0300",
                    "\xef": "i\u0308",
                    "\u1e2f": "i\u0308\u0301",
                    "\u0129": "i\u0303",
                    "\u012b": "i\u0304",
                    "\u012d": "i\u0306",
                    "\u01d0": "i\u030c",
                    "\xee": "i\u0302",
                    "\u01f0": "j\u030c",
                    "\u0135": "j\u0302",
                    "\u1e31": "k\u0301",
                    "\u01e9": "k\u030c",
                    "\u013a": "l\u0301",
                    "\u013e": "l\u030c",
                    "\u1e3f": "m\u0301",
                    "\u1e41": "m\u0307",
                    "\u0144": "n\u0301",
                    "\u01f9": "n\u0300",
                    "\xf1": "n\u0303",
                    "\u0148": "n\u030c",
                    "\u1e45": "n\u0307",
                    "\xf3": "o\u0301",
                    "\xf2": "o\u0300",
                    "\xf6": "o\u0308",
                    "\u022b": "o\u0308\u0304",
                    "\xf5": "o\u0303",
                    "\u1e4d": "o\u0303\u0301",
                    "\u1e4f": "o\u0303\u0308",
                    "\u022d": "o\u0303\u0304",
                    "\u014d": "o\u0304",
                    "\u1e53": "o\u0304\u0301",
                    "\u1e51": "o\u0304\u0300",
                    "\u014f": "o\u0306",
                    "\u01d2": "o\u030c",
                    "\xf4": "o\u0302",
                    "\u1ed1": "o\u0302\u0301",
                    "\u1ed3": "o\u0302\u0300",
                    "\u1ed7": "o\u0302\u0303",
                    "\u022f": "o\u0307",
                    "\u0231": "o\u0307\u0304",
                    "\u0151": "o\u030b",
                    "\u1e55": "p\u0301",
                    "\u1e57": "p\u0307",
                    "\u0155": "r\u0301",
                    "\u0159": "r\u030c",
                    "\u1e59": "r\u0307",
                    "\u015b": "s\u0301",
                    "\u1e65": "s\u0301\u0307",
                    "\u0161": "s\u030c",
                    "\u1e67": "s\u030c\u0307",
                    "\u015d": "s\u0302",
                    "\u1e61": "s\u0307",
                    "\u1e97": "t\u0308",
                    "\u0165": "t\u030c",
                    "\u1e6b": "t\u0307",
                    "\xfa": "u\u0301",
                    "\xf9": "u\u0300",
                    "\xfc": "u\u0308",
                    "\u01d8": "u\u0308\u0301",
                    "\u01dc": "u\u0308\u0300",
                    "\u01d6": "u\u0308\u0304",
                    "\u01da": "u\u0308\u030c",
                    "\u0169": "u\u0303",
                    "\u1e79": "u\u0303\u0301",
                    "\u016b": "u\u0304",
                    "\u1e7b": "u\u0304\u0308",
                    "\u016d": "u\u0306",
                    "\u01d4": "u\u030c",
                    "\xfb": "u\u0302",
                    "\u016f": "u\u030a",
                    "\u0171": "u\u030b",
                    "\u1e7d": "v\u0303",
                    "\u1e83": "w\u0301",
                    "\u1e81": "w\u0300",
                    "\u1e85": "w\u0308",
                    "\u0175": "w\u0302",
                    "\u1e87": "w\u0307",
                    "\u1e98": "w\u030a",
                    "\u1e8d": "x\u0308",
                    "\u1e8b": "x\u0307",
                    "\xfd": "y\u0301",
                    "\u1ef3": "y\u0300",
                    "\xff": "y\u0308",
                    "\u1ef9": "y\u0303",
                    "\u0233": "y\u0304",
                    "\u0177": "y\u0302",
                    "\u1e8f": "y\u0307",
                    "\u1e99": "y\u030a",
                    "\u017a": "z\u0301",
                    "\u017e": "z\u030c",
                    "\u1e91": "z\u0302",
                    "\u017c": "z\u0307",
                    "\xc1": "A\u0301",
                    "\xc0": "A\u0300",
                    "\xc4": "A\u0308",
                    "\u01de": "A\u0308\u0304",
                    "\xc3": "A\u0303",
                    "\u0100": "A\u0304",
                    "\u0102": "A\u0306",
                    "\u1eae": "A\u0306\u0301",
                    "\u1eb0": "A\u0306\u0300",
                    "\u1eb4": "A\u0306\u0303",
                    "\u01cd": "A\u030c",
                    "\xc2": "A\u0302",
                    "\u1ea4": "A\u0302\u0301",
                    "\u1ea6": "A\u0302\u0300",
                    "\u1eaa": "A\u0302\u0303",
                    "\u0226": "A\u0307",
                    "\u01e0": "A\u0307\u0304",
                    "\xc5": "A\u030a",
                    "\u01fa": "A\u030a\u0301",
                    "\u1e02": "B\u0307",
                    "\u0106": "C\u0301",
                    "\u010c": "C\u030c",
                    "\u0108": "C\u0302",
                    "\u010a": "C\u0307",
                    "\u010e": "D\u030c",
                    "\u1e0a": "D\u0307",
                    "\xc9": "E\u0301",
                    "\xc8": "E\u0300",
                    "\xcb": "E\u0308",
                    "\u1ebc": "E\u0303",
                    "\u0112": "E\u0304",
                    "\u1e16": "E\u0304\u0301",
                    "\u1e14": "E\u0304\u0300",
                    "\u0114": "E\u0306",
                    "\u011a": "E\u030c",
                    "\xca": "E\u0302",
                    "\u1ebe": "E\u0302\u0301",
                    "\u1ec0": "E\u0302\u0300",
                    "\u1ec4": "E\u0302\u0303",
                    "\u0116": "E\u0307",
                    "\u1e1e": "F\u0307",
                    "\u01f4": "G\u0301",
                    "\u1e20": "G\u0304",
                    "\u011e": "G\u0306",
                    "\u01e6": "G\u030c",
                    "\u011c": "G\u0302",
                    "\u0120": "G\u0307",
                    "\u1e26": "H\u0308",
                    "\u021e": "H\u030c",
                    "\u0124": "H\u0302",
                    "\u1e22": "H\u0307",
                    "\xcd": "I\u0301",
                    "\xcc": "I\u0300",
                    "\xcf": "I\u0308",
                    "\u1e2e": "I\u0308\u0301",
                    "\u0128": "I\u0303",
                    "\u012a": "I\u0304",
                    "\u012c": "I\u0306",
                    "\u01cf": "I\u030c",
                    "\xce": "I\u0302",
                    "\u0130": "I\u0307",
                    "\u0134": "J\u0302",
                    "\u1e30": "K\u0301",
                    "\u01e8": "K\u030c",
                    "\u0139": "L\u0301",
                    "\u013d": "L\u030c",
                    "\u1e3e": "M\u0301",
                    "\u1e40": "M\u0307",
                    "\u0143": "N\u0301",
                    "\u01f8": "N\u0300",
                    "\xd1": "N\u0303",
                    "\u0147": "N\u030c",
                    "\u1e44": "N\u0307",
                    "\xd3": "O\u0301",
                    "\xd2": "O\u0300",
                    "\xd6": "O\u0308",
                    "\u022a": "O\u0308\u0304",
                    "\xd5": "O\u0303",
                    "\u1e4c": "O\u0303\u0301",
                    "\u1e4e": "O\u0303\u0308",
                    "\u022c": "O\u0303\u0304",
                    "\u014c": "O\u0304",
                    "\u1e52": "O\u0304\u0301",
                    "\u1e50": "O\u0304\u0300",
                    "\u014e": "O\u0306",
                    "\u01d1": "O\u030c",
                    "\xd4": "O\u0302",
                    "\u1ed0": "O\u0302\u0301",
                    "\u1ed2": "O\u0302\u0300",
                    "\u1ed6": "O\u0302\u0303",
                    "\u022e": "O\u0307",
                    "\u0230": "O\u0307\u0304",
                    "\u0150": "O\u030b",
                    "\u1e54": "P\u0301",
                    "\u1e56": "P\u0307",
                    "\u0154": "R\u0301",
                    "\u0158": "R\u030c",
                    "\u1e58": "R\u0307",
                    "\u015a": "S\u0301",
                    "\u1e64": "S\u0301\u0307",
                    "\u0160": "S\u030c",
                    "\u1e66": "S\u030c\u0307",
                    "\u015c": "S\u0302",
                    "\u1e60": "S\u0307",
                    "\u0164": "T\u030c",
                    "\u1e6a": "T\u0307",
                    "\xda": "U\u0301",
                    "\xd9": "U\u0300",
                    "\xdc": "U\u0308",
                    "\u01d7": "U\u0308\u0301",
                    "\u01db": "U\u0308\u0300",
                    "\u01d5": "U\u0308\u0304",
                    "\u01d9": "U\u0308\u030c",
                    "\u0168": "U\u0303",
                    "\u1e78": "U\u0303\u0301",
                    "\u016a": "U\u0304",
                    "\u1e7a": "U\u0304\u0308",
                    "\u016c": "U\u0306",
                    "\u01d3": "U\u030c",
                    "\xdb": "U\u0302",
                    "\u016e": "U\u030a",
                    "\u0170": "U\u030b",
                    "\u1e7c": "V\u0303",
                    "\u1e82": "W\u0301",
                    "\u1e80": "W\u0300",
                    "\u1e84": "W\u0308",
                    "\u0174": "W\u0302",
                    "\u1e86": "W\u0307",
                    "\u1e8c": "X\u0308",
                    "\u1e8a": "X\u0307",
                    "\xdd": "Y\u0301",
                    "\u1ef2": "Y\u0300",
                    "\u0178": "Y\u0308",
                    "\u1ef8": "Y\u0303",
                    "\u0232": "Y\u0304",
                    "\u0176": "Y\u0302",
                    "\u1e8e": "Y\u0307",
                    "\u0179": "Z\u0301",
                    "\u017d": "Z\u030c",
                    "\u1e90": "Z\u0302",
                    "\u017b": "Z\u0307",
                    "\u03ac": "\u03b1\u0301",
                    "\u1f70": "\u03b1\u0300",
                    "\u1fb1": "\u03b1\u0304",
                    "\u1fb0": "\u03b1\u0306",
                    "\u03ad": "\u03b5\u0301",
                    "\u1f72": "\u03b5\u0300",
                    "\u03ae": "\u03b7\u0301",
                    "\u1f74": "\u03b7\u0300",
                    "\u03af": "\u03b9\u0301",
                    "\u1f76": "\u03b9\u0300",
                    "\u03ca": "\u03b9\u0308",
                    "\u0390": "\u03b9\u0308\u0301",
                    "\u1fd2": "\u03b9\u0308\u0300",
                    "\u1fd1": "\u03b9\u0304",
                    "\u1fd0": "\u03b9\u0306",
                    "\u03cc": "\u03bf\u0301",
                    "\u1f78": "\u03bf\u0300",
                    "\u03cd": "\u03c5\u0301",
                    "\u1f7a": "\u03c5\u0300",
                    "\u03cb": "\u03c5\u0308",
                    "\u03b0": "\u03c5\u0308\u0301",
                    "\u1fe2": "\u03c5\u0308\u0300",
                    "\u1fe1": "\u03c5\u0304",
                    "\u1fe0": "\u03c5\u0306",
                    "\u03ce": "\u03c9\u0301",
                    "\u1f7c": "\u03c9\u0300",
                    "\u038e": "\u03a5\u0301",
                    "\u1fea": "\u03a5\u0300",
                    "\u03ab": "\u03a5\u0308",
                    "\u1fe9": "\u03a5\u0304",
                    "\u1fe8": "\u03a5\u0306",
                    "\u038f": "\u03a9\u0301",
                    "\u1ffa": "\u03a9\u0300"
                },
                mn = function() {
                    function e(e, t) { this.mode = void 0, this.gullet = void 0, this.settings = void 0, this.leftrightDepth = void 0, this.nextToken = void 0, this.mode = "math", this.gullet = new hn(e, t, this.mode), this.settings = t, this.leftrightDepth = 0 } var t = e.prototype; return t.expect = function(e, t) { if (void 0 === t && (t = !0), this.nextToken.text !== e) throw new E("Expected '" + e + "', got '" + this.nextToken.text + "'", this.nextToken);
                        t && this.consume() }, t.consume = function() { this.nextToken = this.gullet.expandNextToken() }, t.switchMode = function(e) { this.mode = e, this.gullet.switchMode(e) }, t.parse = function() { this.gullet.beginGroup(), this.settings.colorIsTextColor && this.gullet.macros.set("\\color", "\\textcolor"), this.consume(); var e = this.parseExpression(!1); return this.expect("EOF", !1), this.gullet.endGroup(), e }, t.parseExpression = function(t, r) { for (var n = [];;) { "math" === this.mode && this.consumeSpaces(); var a = this.nextToken; if (-1 !== e.endOfExpression.indexOf(a.text)) break; if (r && a.text === r) break; if (t && jr[a.text] && jr[a.text].infix) break; var i = this.parseAtom(r); if (!i) break;
                            n.push(i) } return "text" === this.mode && this.formLigatures(n), this.handleInfixNodes(n) }, t.handleInfixNodes = function(e) { for (var t, r = -1, n = 0; n < e.length; n++) { var a = s(e[n], "infix"); if (a) { if (-1 !== r) throw new E("only one infix operator per group", a.token);
                                r = n, t = a.replaceWith } } if (-1 !== r && t) { var i, o, l = e.slice(0, r),
                                c = e.slice(r + 1); return i = 1 === l.length && "ordgroup" === l[0].type ? l[0] : { type: "ordgroup", mode: this.mode, body: l }, o = 1 === c.length && "ordgroup" === c[0].type ? c[0] : { type: "ordgroup", mode: this.mode, body: c }, ["\\\\abovefrac" === t ? this.callFunction(t, [i, e[r], o], []) : this.callFunction(t, [i, o], [])] } return e }, t.handleSupSubscript = function(t) { var r = this.nextToken,
                            n = r.text;
                        this.consume(), this.consumeSpaces(); var a = this.parseGroup(t, !1, e.SUPSUB_GREEDINESS); if (!a) throw new E("Expected group after '" + n + "'", r); return a }, t.handleUnsupportedCmd = function() { for (var e = this.nextToken.text, t = [], r = 0; r < e.length; r++) t.push({ type: "textord", mode: "text", text: e[r] }); var n = { type: "text", mode: this.mode, body: t },
                            a = { type: "color", mode: this.mode, color: this.settings.errorColor, body: [n] }; return this.consume(), a }, t.parseAtom = function(e) { var t, r, n = this.parseGroup("atom", !1, null, e); if ("text" === this.mode) return n; for (;;) { this.consumeSpaces(); var a = this.nextToken; if ("\\limits" === a.text || "\\nolimits" === a.text) { var i = s(n, "op"); if (!i) throw new E("Limit controls must follow a math operator", a); var o = "\\limits" === a.text;
                                i.limits = o, i.alwaysHandleSupSub = !0, this.consume() } else if ("^" === a.text) { if (t) throw new E("Double superscript", a);
                                t = this.handleSupSubscript("superscript") } else if ("_" === a.text) { if (r) throw new E("Double subscript", a);
                                r = this.handleSupSubscript("subscript") } else { if ("'" !== a.text) break; if (t) throw new E("Double superscript", a); var l = { type: "textord", mode: this.mode, text: "\\prime" },
                                    c = [l]; for (this.consume();
                                    "'" === this.nextToken.text;) c.push(l), this.consume(); "^" === this.nextToken.text && c.push(this.handleSupSubscript("superscript")), t = { type: "ordgroup", mode: this.mode, body: c } } } return t || r ? { type: "supsub", mode: this.mode, base: n, sup: t, sub: r } : n }, t.parseFunction = function(e, t, r) { var n = this.nextToken,
                            a = n.text,
                            i = jr[a]; if (!i) return null; if (null != r && i.greediness <= r) throw new E("Got function '" + a + "' with no arguments" + (t ? " as " + t : ""), n); if ("text" === this.mode && !i.allowedInText) throw new E("Can't use function '" + a + "' in text mode", n); if ("math" === this.mode && !1 === i.allowedInMath) throw new E("Can't use function '" + a + "' in math mode", n); if (i.argTypes && "url" === i.argTypes[0] && this.gullet.lexer.setCatcode("%", 13), i.consumeMode) { var o = this.mode;
                            this.switchMode(i.consumeMode), this.consume(), this.switchMode(o) } else this.consume(); var s = this.parseArguments(a, i),
                            l = s.args,
                            c = s.optArgs; return this.callFunction(a, l, c, n, e) }, t.callFunction = function(e, t, r, n, a) { var i = { funcName: e, parser: this, token: n, breakOnTokenText: a },
                            o = jr[e]; if (o && o.handler) return o.handler(i, t, r); throw new E("No function handler for " + e) }, t.parseArguments = function(e, t) { var r = t.numArgs + t.numOptionalArgs; if (0 === r) return { args: [], optArgs: [] }; for (var n = t.greediness, a = [], i = [], o = 0; o < r; o++) { var s = t.argTypes && t.argTypes[o],
                                l = o < t.numOptionalArgs;
                            o > 0 && !l && this.consumeSpaces(), 0 !== o || l || "math" !== this.mode || this.consumeSpaces(); var c = this.nextToken,
                                h = this.parseGroupOfType("argument to '" + e + "'", s, l, n); if (!h) { if (l) { i.push(null); continue } throw new E("Expected group after '" + e + "'", c) }(l ? i : a).push(h) } return { args: a, optArgs: i } }, t.parseGroupOfType = function(e, t, r, n) { switch (t) {
                            case "color":
                                return this.parseColorGroup(r);
                            case "size":
                                return this.parseSizeGroup(r);
                            case "url":
                                return this.parseUrlGroup(r);
                            case "math":
                            case "text":
                                return this.parseGroup(e, r, n, void 0, t);
                            case "raw":
                                if (r && "{" === this.nextToken.text) return null; var a = this.parseStringGroup("raw", r, !0); if (a) return { type: "raw", mode: "text", string: a.text }; throw new E("Expected raw group", this.nextToken);
                            case "original":
                            case null:
                            case void 0:
                                return this.parseGroup(e, r, n);
                            default:
                                throw new E("Unknown group type as " + e, this.nextToken) } }, t.consumeSpaces = function() { for (;
                            " " === this.nextToken.text;) this.consume() }, t.parseStringGroup = function(e, t, r) { var n = t ? "[" : "{",
                            a = t ? "]" : "}",
                            i = this.nextToken; if (i.text !== n) { if (t) return null; if (r && "EOF" !== i.text && /[^{}[\]]/.test(i.text)) return this.gullet.lexer.setCatcode("%", 14), this.consume(), i } var o = this.mode;
                        this.mode = "text", this.expect(n); for (var s = "", l = this.nextToken, c = 0, h = l; r && c > 0 || this.nextToken.text !== a;) { switch (this.nextToken.text) {
                                case "EOF":
                                    throw new E("Unexpected end of input in " + e, l.range(h, s));
                                case n:
                                    c++; break;
                                case a:
                                    c-- } s += (h = this.nextToken).text, this.consume() } return this.mode = o, this.gullet.lexer.setCatcode("%", 14), this.expect(a), l.range(h, s) }, t.parseRegexGroup = function(e, t) { var r = this.mode;
                        this.mode = "text"; for (var n = this.nextToken, a = n, i = "";
                            "EOF" !== this.nextToken.text && e.test(i + this.nextToken.text);) i += (a = this.nextToken).text, this.consume(); if ("" === i) throw new E("Invalid " + t + ": '" + n.text + "'", n); return this.mode = r, n.range(a, i) }, t.parseColorGroup = function(e) { var t = this.parseStringGroup("color", e); if (!t) return null; var r = /^(#[a-f0-9]{3}|#?[a-f0-9]{6}|[a-z]+)$/i.exec(t.text); if (!r) throw new E("Invalid color: '" + t.text + "'", t); var n = r[0]; return /^[0-9a-f]{6}$/i.test(n) && (n = "#" + n), { type: "color-token", mode: this.mode, color: n } }, t.parseSizeGroup = function(e) { var t, r = !1; if (!(t = e || "{" === this.nextToken.text ? this.parseStringGroup("size", e) : this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size"))) return null;
                        e || 0 !== t.text.length || (t.text = "0pt", r = !0); var n = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text); if (!n) throw new E("Invalid size: '" + t.text + "'", t); var a, i = { number: +(n[1] + n[2]), unit: n[3] }; if ("string" != typeof(a = i) && (a = a.unit), !(a in Ue || a in We || "ex" === a)) throw new E("Invalid unit: '" + i.unit + "'", t); return { type: "size", mode: this.mode, value: i, isBlank: r } }, t.parseUrlGroup = function(e) { var t = this.parseStringGroup("url", e, !0); if (!t) return null; var r = t.text.replace(/\\([#$%&~_^{}])/g, "$1"),
                            n = /^\s*([^\\\/#]*?)(?::|&#0*58|&#x0*3a)/i.exec(r);
                        n = null != n ? n[1] : "_relative"; var a = this.settings.allowedProtocols; if (!B.contains(a, "*") && !B.contains(a, n)) throw new E("Forbidden protocol '" + n + "'", t); return { type: "url", mode: this.mode, url: r } }, t.parseGroup = function(t, r, n, a, i) { var o, s, l = this.mode,
                            c = this.nextToken,
                            h = c.text; if (i && this.switchMode(i), r ? "[" === h : "{" === h || "\\begingroup" === h) { o = e.endOfGroup[h], this.gullet.beginGroup(), this.consume(); var d = this.parseExpression(!1, o),
                                u = this.nextToken;
                            this.gullet.endGroup(), s = { type: "ordgroup", mode: this.mode, loc: M.range(c, u), body: d, semisimple: "\\begingroup" === h || void 0 } } else if (r) s = null;
                        else if (null == (s = this.parseFunction(a, t, n) || this.parseSymbol()) && "\\" === h[0] && !cn.hasOwnProperty(h)) { if (this.settings.throwOnError) throw new E("Undefined control sequence: " + h, c);
                            s = this.handleUnsupportedCmd() } return i && this.switchMode(l), o && this.expect(o), s }, t.formLigatures = function(e) { for (var t = e.length - 1, r = 0; r < t; ++r) { var n = e[r],
                                a = n.text; "-" === a && "-" === e[r + 1].text && (r + 1 < t && "-" === e[r + 2].text ? (e.splice(r, 3, { type: "textord", mode: "text", loc: M.range(n, e[r + 2]), text: "---" }), t -= 2) : (e.splice(r, 2, { type: "textord", mode: "text", loc: M.range(n, e[r + 1]), text: "--" }), t -= 1)), "'" !== a && "`" !== a || e[r + 1].text !== a || (e.splice(r, 2, { type: "textord", mode: "text", loc: M.range(n, e[r + 1]), text: a + a }), t -= 1) } }, t.parseSymbol = function() { var e = this.nextToken,
                            t = e.text; if (/^\\verb[^a-zA-Z]/.test(t)) { this.consume(); var r = t.slice(5),
                                a = "*" === r.charAt(0); if (a && (r = r.slice(1)), r.length < 2 || r.charAt(0) !== r.slice(-1)) throw new E("\\verb assertion failed --\n                    please report what input caused this bug"); return { type: "verb", mode: "text", body: r = r.slice(1, -1), star: a } } un.hasOwnProperty(t[0]) && !ue[this.mode][t[0]] && (this.settings.strict && "math" === this.mode && this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + t[0] + '" used in math mode', e), t = un[t[0]] + t.substr(1)); var i, o = Kr.exec(t); if (o && ("i" === (t = t.substring(0, o.index)) ? t = "\u0131" : "j" === t && (t = "\u0237")), ue[this.mode][t]) { this.settings.strict && "math" === this.mode && "\xc7\xd0\xde\xe7\xfe".indexOf(t) >= 0 && this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + t[0] + '" used in math mode', e); var s, l = ue[this.mode][t].group,
                                c = M.range(e); if (ce.hasOwnProperty(l)) { var h = l;
                                s = { type: "atom", mode: this.mode, family: h, loc: c, text: t } } else s = { type: l, mode: this.mode, loc: c, text: t };
                            i = s } else { if (!(t.charCodeAt(0) >= 128)) return null;
                            this.settings.strict && (n(t.charCodeAt(0)) ? "math" === this.mode && this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + t[0] + '" used in math mode', e) : this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + t[0] + '" (' + t.charCodeAt(0) + ")", e)), i = { type: "textord", mode: this.mode, loc: M.range(e), text: t } } if (this.consume(), o)
                            for (var d = 0; d < o[0].length; d++) { var u = o[0][d]; if (!dn[u]) throw new E("Unknown accent ' " + u + "'", e); var m = dn[u][this.mode]; if (!m) throw new E("Accent " + u + " unsupported in " + this.mode + " mode", e);
                                i = { type: "accent", mode: this.mode, loc: M.range(e), label: m, isStretchy: !1, isShifty: !0, base: i } }
                        return i }, e }();
            mn.endOfExpression = ["}", "\\endgroup", "\\end", "\\right", "&"], mn.endOfGroup = { "[": "]", "{": "}", "\\begingroup": "\\endgroup" }, mn.SUPSUB_GREEDINESS = 1;
            var pn = function(e, t) { if (!("string" == typeof e || e instanceof String)) throw new TypeError("KaTeX can only parse string typed expression"); var r = new mn(e, t);
                    delete r.gullet.macros.current["\\df@tag"]; var n = r.parse(); if (r.gullet.macros.get("\\df@tag")) { if (!t.displayMode) throw new E("\\tag works only in display equations");
                        r.gullet.feed("\\df@tag"), n = [{ type: "tag", mode: "text", body: n, tag: r.parse() }] } return n },
                fn = function(e, t, r) { t.textContent = ""; var n = vn(e, r).toNode();
                    t.appendChild(n) };
            "undefined" != typeof document && "CSS1Compat" !== document.compatMode && ("undefined" != typeof console && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."), fn = function() { throw new E("KaTeX doesn't work in quirks mode.") });
            var gn = function(e, t, r) { if (r.throwOnError || !(e instanceof E)) throw e; var n = rt.makeSpan(["katex-error"], [new te(t)]); return n.setAttribute("title", e.toString()), n.setAttribute("style", "color:" + r.errorColor), n },
                vn = function(e, t) { var r = new I(t); try { var n = pn(e, r); return It(n, e, r) } catch (t) { return gn(t, e, r) } },
                bn = { version: "0.10.1", render: fn, renderToString: function(e, t) { return vn(e, t).toMarkup() }, ParseError: E, __parse: function(e, t) { var r = new I(t); return pn(e, r) }, __renderToDomTree: vn, __renderToHTMLTree: function(e, t) { var r = new I(t); try { return function(e, t, r) { var n = m(e, qt(r)),
                                    a = rt.makeSpan(["katex"], [n]); return Bt(a, r) }(pn(e, r), 0, r) } catch (t) { return gn(t, e, r) } }, __setFontMetrics: function(e, t) { ie[e] = t }, __defineSymbol: i, __defineMacro: A, __domTree: { Span: J, Anchor: Q, SymbolNode: te, SvgNode: re, PathNode: ne, LineNode: ae } };
            t["default"] = bn
        }])["default"]
    }), ! function(e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t(require("katex")) : "function" == typeof define && define.amd ? define(["katex"], t) : "object" == typeof exports ? exports.renderMathInElement = t(require("katex")) : e.renderMathInElement = t(e.katex) }("undefined" != typeof self ? self : this, function(e) { return function(e) {
            function t(n) { if (r[n]) return r[n].exports; var a = r[n] = { i: n, l: !1, exports: {} }; return e[n].call(a.exports, a, a.exports, t), a.l = !0, a.exports } var r = {}; return t.m = e, t.c = r, t.d = function(e, r, n) { t.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: n }) }, t.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, t.t = function(e, r) { if (1 & r && (e = t(e)), 8 & r) return e; if (4 & r && "object" == typeof e && e && e.__esModule) return e; var n = Object.create(null); if (t.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & r && "string" != typeof e)
                    for (var a in e) t.d(n, a, function(t) { return e[t] }.bind(null, a)); return n }, t.n = function(e) { var r = e && e.__esModule ? function() { return e["default"] } : function() { return e }; return t.d(r, "a", r), r }, t.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, t.p = "", t(t.s = 1) }([function(t) { t.exports = e }, function(e, t, r) { "use strict";
            r.r(t); var n = r(0),
                a = r.n(n),
                i = function(e, t, r) { for (var n = r, a = 0, i = e.length; n < t.length;) { var o = t[n]; if (a <= 0 && t.slice(n, n + i) === e) return n; "\\" === o ? n++ : "{" === o ? a++ : "}" === o && a--, n++ } return -1 },
                o = function(e, t, r, n) { for (var a = [], o = 0; o < e.length; o++)
                        if ("text" === e[o].type) { var s = e[o].data,
                                l = !0,
                                c = 0,
                                h = void 0; for (-1 !== (h = s.indexOf(t)) && (c = h, a.push({ type: "text", data: s.slice(0, c) }), l = !1);;) { if (l) { if (-1 === (h = s.indexOf(t, c))) break;
                                    a.push({ type: "text", data: s.slice(c, h) }), c = h } else { if (-1 === (h = i(r, s, c + t.length))) break;
                                    a.push({ type: "math", data: s.slice(c + t.length, h), rawData: s.slice(c, h + r.length), display: n }), c = h + r.length } l = !l } a.push({ type: "text", data: s.slice(c) }) } else a.push(e[o]); return a },
                s = function(e, t) { for (var r = function(e, t) { for (var r = [{ type: "text", data: e }], n = 0; n < t.length; n++) { var a = t[n];
                                r = o(r, a.left, a.right, a.display || !1) } return r }(e, t.delimiters), n = document.createDocumentFragment(), i = 0; i < r.length; i++)
                        if ("text" === r[i].type) n.appendChild(document.createTextNode(r[i].data));
                        else { var s = document.createElement("span"),
                                l = r[i].data;
                            t.displayMode = r[i].display; try { a.a.render(l, s, t) } catch (e) { if (!(e instanceof a.a.ParseError)) throw e;
                                t.errorCallback("KaTeX auto-render: Failed to parse `" + r[i].data + "` with ", e), n.appendChild(document.createTextNode(r[i].rawData)); continue } n.appendChild(s) } return n };
            t["default"] = function(e, t) { if (!e) throw new Error("No element provided to render"); var r = {}; for (var n in t) t.hasOwnProperty(n) && (r[n] = t[n]);
                r.delimiters = r.delimiters || [{ left: "$$", right: "$$", display: !0 }, { left: "\\(", right: "\\)", display: !1 }, { left: "\\[", right: "\\]", display: !0 }], r.ignoredTags = r.ignoredTags || ["script", "noscript", "style", "textarea", "pre", "code"], r.ignoredClasses = r.ignoredClasses || [], r.errorCallback = r.errorCallback || console.error, r.macros = r.macros || {},
                    function e(t, r) { for (var n = 0; n < t.childNodes.length; n++) { var a = t.childNodes[n]; if (3 === a.nodeType) { var i = s(a.textContent, r);
                                n += i.childNodes.length - 1, t.replaceChild(i, a) } else 1 === a.nodeType && function() { var t = " " + a.className + " "; - 1 === r.ignoredTags.indexOf(a.nodeName.toLowerCase()) && r.ignoredClasses.every(function(e) { return -1 === t.indexOf(" " + e + " ") }) && e(a, r) }() } }(e, r) } }])["default"] }),
    function(e, t) { "function" == typeof define && define.amd ? define(function() { return e.Reveal = t(), e.Reveal }) : "object" == typeof exports ? module.exports = t() : e.Reveal = t() }(this, function() {
        "use strict";

        function e(e) { if (sr !== !0)
                if (sr = !0, t(), xr.transforms2d || xr.transforms3d) { vr.wrapper = document.querySelector(".reveal"), vr.slides = document.querySelector(".reveal .slides"), window.addEventListener("load", j, !1); var n = Xt.getQueryHash(); "undefined" != typeof n.dependencies && delete n.dependencies, M(or, e), M(or, n), R(), r() } else { document.body.setAttribute("class", "no-transforms"); for (var a = z(document.getElementsByTagName("img")), i = z(document.getElementsByTagName("iframe")), o = a.concat(i), s = 0, l = o.length; s < l; s++) { var c = o[s];
                        c.getAttribute("data-src") && (c.setAttribute("src", c.getAttribute("data-src")), c.removeAttribute("data-src")) } } }

        function t() { Zt = /(iphone|ipod|ipad|android)/gi.test(ir), Jt = /chrome/i.test(ir) && !/edge/i.test(ir); var e = document.createElement("div");
            xr.transforms3d = "WebkitPerspective" in e.style || "MozPerspective" in e.style || "msPerspective" in e.style || "OPerspective" in e.style || "perspective" in e.style, xr.transforms2d = "WebkitTransform" in e.style || "MozTransform" in e.style || "msTransform" in e.style || "OTransform" in e.style || "transform" in e.style, xr.requestAnimationFrameMethod = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame, xr.requestAnimationFrame = "function" == typeof xr.requestAnimationFrameMethod, xr.canvas = !!document.createElement("canvas").getContext, xr.overviewTransitions = !/Version\/[\d\.]+.*Safari/.test(ir), xr.zoom = "zoom" in e.style && !Zt && (Jt || /Version\/[\d\.]+.*Safari/.test(ir)) }

        function r() { var e = [],
                t = 0;
            or.dependencies.forEach(function(t) { t.condition && !t.condition() || (t.async ? yr.push(t) : e.push(t)) }), e.length ? (t = e.length, e.forEach(function(e) { i(e.src, function() { "function" == typeof e.callback && e.callback(), 0 === --t && n() }) })) : n() }

        function n() { var e = Object.keys(br).length; if (0 === e) a();
            else { var t = function() { 0 === --e && a() }; for (var r in br) { var n = br[r]; if ("function" == typeof n.init) { var i = n.init();
                        i && "function" == typeof i.then ? i.then(t) : t() } else t() } } }

        function a() { yr.length && yr.forEach(function(e) { i(e.src, e.callback) }), o() }

        function i(e, t) { var r = document.createElement("script");
            r.type = "text/javascript", r.async = !1, r.defer = !1, r.src = e, t && (r.onload = r.onreadystatechange = function(e) {
                ("load" === e.type || /loaded|complete/.test(r.readyState)) && (r.onload = r.onreadystatechange = r.onerror = null, t()) }, r.onerror = function(e) { r.onload = r.onreadystatechange = r.onerror = null, t(new Error("Failed loading script: " + r.src + "\n" + e)) }); var n = document.querySelector("head");
            n.insertBefore(r, n.lastChild) }

        function o() { lr = !0, s(), g(), d(), xe(), v(), Ye(), qe(!0), setTimeout(function() { vr.slides.classList.remove("no-transition"), vr.wrapper.classList.add("ready"), D("ready", { indexh: Gt, indexv: Yt, currentSlide: $t }) }, 1), O() && (y(), "complete" === document.readyState ? h() : window.addEventListener("load", h)) }

        function s() { vr.slides.classList.add("no-transition"), Zt ? vr.wrapper.classList.add("no-hover") : vr.wrapper.classList.remove("no-hover"), /iphone/gi.test(ir) ? vr.wrapper.classList.add("ua-iphone") : vr.wrapper.classList.remove("ua-iphone"), vr.background = u(vr.wrapper, "div", "backgrounds", null), vr.progress = u(vr.wrapper, "div", "progress", "<span></span>"), vr.progressbar = vr.progress.querySelector("span"), vr.controls = u(vr.wrapper, "aside", "controls", '<button class="navigate-left" aria-label="previous slide"><div class="controls-arrow"></div></button><button class="navigate-right" aria-label="next slide"><div class="controls-arrow"></div></button><button class="navigate-up" aria-label="above slide"><div class="controls-arrow"></div></button><button class="navigate-down" aria-label="below slide"><div class="controls-arrow"></div></button>'), vr.slideNumber = u(vr.wrapper, "div", "slide-number", ""), vr.speakerNotes = u(vr.wrapper, "div", "speaker-notes", null), vr.speakerNotes.setAttribute("data-prevent-swipe", ""), vr.speakerNotes.setAttribute("tabindex", "0"), vr.pauseOverlay = u(vr.wrapper, "div", "pause-overlay", or.controls ? '<button class="resume-button">Resume presentation</button>' : null), vr.wrapper.setAttribute("role", "application"), vr.controlsLeft = z(document.querySelectorAll(".navigate-left")), vr.controlsRight = z(document.querySelectorAll(".navigate-right")), vr.controlsUp = z(document.querySelectorAll(".navigate-up")), vr.controlsDown = z(document.querySelectorAll(".navigate-down")), vr.controlsPrev = z(document.querySelectorAll(".navigate-prev")), vr.controlsNext = z(document.querySelectorAll(".navigate-next")), vr.controlsRightArrow = vr.controls.querySelector(".navigate-right"), vr.controlsDownArrow = vr.controls.querySelector(".navigate-down"), vr.statusDiv = l() }

        function l() { var e = document.getElementById("aria-status-div"); return e || (e = document.createElement("div"), e.style.position = "absolute", e.style.height = "1px", e.style.width = "1px", e.style.overflow = "hidden", e.style.clip = "rect( 1px, 1px, 1px, 1px )", e.setAttribute("id", "aria-status-div"), e.setAttribute("aria-live", "polite"), e.setAttribute("aria-atomic", "true"), vr.wrapper.appendChild(e)), e }

        function c(e) { var t = ""; if (3 === e.nodeType) t += e.textContent;
            else if (1 === e.nodeType) { var r = e.getAttribute("aria-hidden"),
                    n = "none" === window.getComputedStyle(e).display; "true" === r || n || z(e.childNodes).forEach(function(e) { t += c(e) }) } return t }

        function h() { var e = K(window.innerWidth, window.innerHeight),
                t = Math.floor(e.width * (1 + or.margin)),
                r = Math.floor(e.height * (1 + or.margin)),
                n = e.width,
                a = e.height;
            C("@page{size:" + t + "px " + r + "px; margin: 0px;}"), C(".reveal section>img, .reveal section>video, .reveal section>iframe{max-width: " + n + "px; max-height:" + a + "px}"), document.body.classList.add("print-pdf"), document.body.style.width = t + "px", document.body.style.height = r + "px", $(n, a), z(vr.wrapper.querySelectorAll(rr)).forEach(function(e, t) { e.setAttribute("data-index-h", t), e.classList.contains("stack") && z(e.querySelectorAll("section")).forEach(function(e, r) { e.setAttribute("data-index-h", t), e.setAttribute("data-index-v", r) }) }), z(vr.wrapper.querySelectorAll(tr)).forEach(function(e) { if (e.classList.contains("stack") === !1) { var i = (t - n) / 2,
                        o = (r - a) / 2,
                        s = e.scrollHeight,
                        l = Math.max(Math.ceil(s / r), 1);
                    l = Math.min(l, or.pdfMaxPagesPerSlide), (1 === l && or.center || e.classList.contains("center")) && (o = Math.max((r - s) / 2, 0)); var c = document.createElement("div"); if (c.className = "pdf-page", c.style.height = (r + or.pdfPageHeightOffset) * l + "px", e.parentNode.insertBefore(c, e), c.appendChild(e), e.style.left = i + "px", e.style.top = o + "px", e.style.width = n + "px", e.slideBackgroundElement && c.insertBefore(e.slideBackgroundElement, e), or.showNotes) { var h = tt(e); if (h) { var d = 8,
                                u = "string" == typeof or.showNotes ? or.showNotes : "inline",
                                m = document.createElement("div");
                            m.classList.add("speaker-notes"), m.classList.add("speaker-notes-pdf"), m.setAttribute("data-layout", u), m.innerHTML = h, "separate-page" === u ? c.parentNode.insertBefore(m, c.nextSibling) : (m.style.left = d + "px", m.style.bottom = d + "px", m.style.width = t - 2 * d + "px", c.appendChild(m)) } } if (or.slideNumber && /all|print/i.test(or.showSlideNumber)) { var p = parseInt(e.getAttribute("data-index-h"), 10) + 1,
                            f = parseInt(e.getAttribute("data-index-v"), 10) + 1,
                            g = document.createElement("div");
                        g.classList.add("slide-number"), g.classList.add("slide-number-pdf"), g.innerHTML = Ce(p, ".", f), c.appendChild(g) } if (or.pdfSeparateFragments) { var v, b, y = at(c.querySelectorAll(".fragment"), !0);
                        y.forEach(function(e) { v && v.forEach(function(e) { e.classList.remove("current-fragment") }), e.forEach(function(e) { e.classList.add("visible", "current-fragment") }); var t = c.cloneNode(!0);
                            c.parentNode.insertBefore(t, (b || c).nextSibling), v = e, b = t }), y.forEach(function(e) { e.forEach(function(e) { e.classList.remove("visible", "current-fragment") }) }) } else z(c.querySelectorAll(".fragment:not(.fade-out)")).forEach(function(e) { e.classList.add("visible") }) } }), D("pdf-ready") }

        function d() { setInterval(function() { 0 === vr.wrapper.scrollTop && 0 === vr.wrapper.scrollLeft || (vr.wrapper.scrollTop = 0, vr.wrapper.scrollLeft = 0) }, 1e3) }

        function u(e, t, r, n) { for (var a = e.querySelectorAll("." + r), i = 0; i < a.length; i++) { var o = a[i]; if (o.parentNode === e) return o } var s = document.createElement(t); return s.className = r, "string" == typeof n && (s.innerHTML = n), e.appendChild(s), s }

        function m() { O();
            vr.background.innerHTML = "", vr.background.classList.add("no-transition"), z(vr.wrapper.querySelectorAll(rr)).forEach(function(e) { var t = p(e, vr.background);
                z(e.querySelectorAll("section")).forEach(function(e) { p(e, t), t.classList.add("stack") }) }), or.parallaxBackgroundImage ? (vr.background.style.backgroundImage = 'url("' + or.parallaxBackgroundImage + '")', vr.background.style.backgroundSize = or.parallaxBackgroundSize, vr.background.style.backgroundRepeat = or.parallaxBackgroundRepeat, vr.background.style.backgroundPosition = or.parallaxBackgroundPosition, setTimeout(function() { vr.wrapper.classList.add("has-parallax-background") }, 1)) : (vr.background.style.backgroundImage = "", vr.wrapper.classList.remove("has-parallax-background")) }

        function p(e, t) { var r = document.createElement("div");
            r.className = "slide-background " + e.className.replace(/present|past|future/, ""); var n = document.createElement("div"); return n.className = "slide-background-content", r.appendChild(n), t.appendChild(r), e.slideBackgroundElement = r, e.slideBackgroundContentElement = n, f(e), r }

        function f(e) { var t = e.slideBackgroundElement,
                r = e.slideBackgroundContentElement;
            e.classList.remove("has-dark-background"), e.classList.remove("has-light-background"), t.removeAttribute("data-loaded"), t.removeAttribute("data-background-hash"), t.removeAttribute("data-background-size"), t.removeAttribute("data-background-transition"), t.style.backgroundColor = "", r.style.backgroundSize = "", r.style.backgroundRepeat = "", r.style.backgroundPosition = "", r.style.backgroundImage = "", r.style.opacity = "", r.innerHTML = ""; var n = { background: e.getAttribute("data-background"), backgroundSize: e.getAttribute("data-background-size"), backgroundImage: e.getAttribute("data-background-image"), backgroundVideo: e.getAttribute("data-background-video"), backgroundIframe: e.getAttribute("data-background-iframe"), backgroundColor: e.getAttribute("data-background-color"), backgroundRepeat: e.getAttribute("data-background-repeat"), backgroundPosition: e.getAttribute("data-background-position"), backgroundTransition: e.getAttribute("data-background-transition"), backgroundOpacity: e.getAttribute("data-background-opacity") };
            n.background && (/^(http|file|\/\/)/gi.test(n.background) || /\.(svg|png|jpg|jpeg|gif|bmp)([?#\s]|$)/gi.test(n.background) ? e.setAttribute("data-background-image", n.background) : t.style.background = n.background), (n.background || n.backgroundColor || n.backgroundImage || n.backgroundVideo || n.backgroundIframe) && t.setAttribute("data-background-hash", n.background + n.backgroundSize + n.backgroundImage + n.backgroundVideo + n.backgroundIframe + n.backgroundColor + n.backgroundRepeat + n.backgroundPosition + n.backgroundTransition + n.backgroundOpacity), n.backgroundSize && t.setAttribute("data-background-size", n.backgroundSize), n.backgroundColor && (t.style.backgroundColor = n.backgroundColor), n.backgroundTransition && t.setAttribute("data-background-transition", n.backgroundTransition), e.hasAttribute("data-preload") && t.setAttribute("data-preload", ""), n.backgroundSize && (r.style.backgroundSize = n.backgroundSize), n.backgroundRepeat && (r.style.backgroundRepeat = n.backgroundRepeat), n.backgroundPosition && (r.style.backgroundPosition = n.backgroundPosition), n.backgroundOpacity && (r.style.opacity = n.backgroundOpacity); var a = n.backgroundColor; if (!a) { var i = window.getComputedStyle(t);
                i && i.backgroundColor && (a = i.backgroundColor) } if (a) { var o = q(a);
                o && 0 !== o.a && (B(a) < 128 ? e.classList.add("has-dark-background") : e.classList.add("has-light-background")) } }

        function g() { or.postMessage && window.addEventListener("message", function(e) { var t = e.data; if ("string" == typeof t && "{" === t.charAt(0) && "}" === t.charAt(t.length - 1) && (t = JSON.parse(t), t.method && "function" == typeof Xt[t.method])) { var r = Xt[t.method].apply(Xt, t.args);
                    H("callback", { method: t.method, result: r }) } }, !1) }

        function v(e) { var t = or.transition; if ("object" == typeof e && M(or, e), lr !== !1) { var r = vr.wrapper.querySelectorAll(tr).length;
                vr.wrapper.classList.remove(t), xr.transforms3d === !1 && (or.transition = "linear"), vr.wrapper.classList.add(or.transition), vr.wrapper.setAttribute("data-transition-speed", or.transitionSpeed), vr.wrapper.setAttribute("data-background-transition", or.backgroundTransition), vr.controls.style.display = or.controls ? "block" : "none", vr.progress.style.display = or.progress ? "block" : "none", vr.controls.setAttribute("data-controls-layout", or.controlsLayout), vr.controls.setAttribute("data-controls-back-arrows", or.controlsBackArrows), or.shuffle && ke(), or.rtl ? vr.wrapper.classList.add("rtl") : vr.wrapper.classList.remove("rtl"), or.center ? vr.wrapper.classList.add("center") : vr.wrapper.classList.remove("center"), or.pause === !1 && de(), or.showNotes && vr.speakerNotes.setAttribute("data-layout", "string" == typeof or.showNotes ? or.showNotes : "inline"), or.mouseWheel ? (document.addEventListener("DOMMouseScroll", Ct, !1), document.addEventListener("mousewheel", Ct, !1)) : (document.removeEventListener("DOMMouseScroll", Ct, !1), document.removeEventListener("mousewheel", Ct, !1)), or.rollingLinks ? F() : V(), or.hideInactiveCursor ? (document.addEventListener("mousemove", wt, !1), document.addEventListener("mousedown", wt, !1)) : (le(), document.removeEventListener("mousemove", wt, !1), document.removeEventListener("mousedown", wt, !1)), or.previewLinks ? (U(), W("[data-preview-link=false]")) : (W(), U("[data-preview-link]:not([data-preview-link=false])")), Qt && (Qt.destroy(), Qt = null), r > 1 && or.autoSlide && or.autoSlideStoppable && xr.canvas && xr.requestAnimationFrame && (Qt = new _t(vr.wrapper, function() { return Math.min(Math.max((Date.now() - Er) / zr, 0), 1) }), Qt.on("click", Wt), Lr = !1), or.fragments === !1 && z(vr.slides.querySelectorAll(".fragment")).forEach(function(e) { e.classList.add("visible"), e.classList.remove("current-fragment") }); var n = "none";
                or.slideNumber && !O() && ("all" === or.showSlideNumber ? n = "block" : "speaker" === or.showSlideNumber && Ge() && (n = "block")), vr.slideNumber.style.display = n, "default" !== or.navigationMode ? vr.wrapper.setAttribute("data-navigation-mode", or.navigationMode) : vr.wrapper.removeAttribute("data-navigation-mode"), "linear" === or.navigationMode ? (Nr["&#8594;  ,  &#8595;  ,  SPACE  ,  N  ,  L  ,  J"] = "Next slide", Nr["&#8592;  ,  &#8593;  ,  P  ,  H  ,  K"] = "Previous slide") : (Nr["N  ,  SPACE"] = "Next slide", Nr.P = "Previous slide", Nr["&#8592;  ,  H"] = "Navigate left", Nr["&#8594;  ,  L"] = "Navigate right", Nr["&#8593;  ,  K"] = "Navigate up", Nr["&#8595;  ,  J"] = "Navigate down"), Nr["Home  ,  &#8984;/CTRL &#8592;"] = "First slide", Nr["End  ,  &#8984;/CTRL &#8594;"] = "Last slide", Nr["B  ,  ."] = "Pause", Nr.F = "Fullscreen", Nr["ESC, O"] = "Slide overview", ve() } }

        function b() { if (Mr = !0, window.addEventListener("hashchange", Dt, !1), window.addEventListener("resize", Ht, !1), or.touch && ("onpointerdown" in window ? (vr.wrapper.addEventListener("pointerdown", Tt, !1), vr.wrapper.addEventListener("pointermove", Et, !1), vr.wrapper.addEventListener("pointerup", Lt, !1)) : window.navigator.msPointerEnabled ? (vr.wrapper.addEventListener("MSPointerDown", Tt, !1), vr.wrapper.addEventListener("MSPointerMove", Et, !1), vr.wrapper.addEventListener("MSPointerUp", Lt, !1)) : (vr.wrapper.addEventListener("touchstart", At, !1), vr.wrapper.addEventListener("touchmove", Mt, !1), vr.wrapper.addEventListener("touchend", zt, !1))), or.keyboard && (document.addEventListener("keydown", St, !1), document.addEventListener("keypress", kt, !1)), or.progress && vr.progress && vr.progress.addEventListener("click", Nt, !1), vr.pauseOverlay.addEventListener("click", de, !1), or.focusBodyOnPageVisibilityChange) { var e; "hidden" in document ? e = "visibilitychange" : "msHidden" in document ? e = "msvisibilitychange" : "webkitHidden" in document && (e = "webkitvisibilitychange"), e && document.addEventListener(e, Ft, !1) } var t = ["touchstart", "click"];
            ir.match(/android/gi) && (t = ["touchstart"]), t.forEach(function(e) { vr.controlsLeft.forEach(function(t) { t.addEventListener(e, qt, !1) }), vr.controlsRight.forEach(function(t) { t.addEventListener(e, Bt, !1) }), vr.controlsUp.forEach(function(t) { t.addEventListener(e, It, !1) }), vr.controlsDown.forEach(function(t) { t.addEventListener(e, Ot, !1) }), vr.controlsPrev.forEach(function(t) { t.addEventListener(e, Rt, !1) }), vr.controlsNext.forEach(function(t) { t.addEventListener(e, Pt, !1) }) }) }

        function y() {
            Mr = !1, document.removeEventListener("keydown", St, !1), document.removeEventListener("keypress", kt, !1),
                window.removeEventListener("hashchange", Dt, !1), window.removeEventListener("resize", Ht, !1), vr.wrapper.removeEventListener("pointerdown", Tt, !1), vr.wrapper.removeEventListener("pointermove", Et, !1), vr.wrapper.removeEventListener("pointerup", Lt, !1), vr.wrapper.removeEventListener("MSPointerDown", Tt, !1), vr.wrapper.removeEventListener("MSPointerMove", Et, !1), vr.wrapper.removeEventListener("MSPointerUp", Lt, !1), vr.wrapper.removeEventListener("touchstart", At, !1), vr.wrapper.removeEventListener("touchmove", Mt, !1), vr.wrapper.removeEventListener("touchend", zt, !1), vr.pauseOverlay.removeEventListener("click", de, !1), or.progress && vr.progress && vr.progress.removeEventListener("click", Nt, !1), ["touchstart", "click"].forEach(function(e) { vr.controlsLeft.forEach(function(t) { t.removeEventListener(e, qt, !1) }), vr.controlsRight.forEach(function(t) { t.removeEventListener(e, Bt, !1) }), vr.controlsUp.forEach(function(t) { t.removeEventListener(e, It, !1) }), vr.controlsDown.forEach(function(t) { t.removeEventListener(e, Ot, !1) }), vr.controlsPrev.forEach(function(t) { t.removeEventListener(e, Rt, !1) }), vr.controlsNext.forEach(function(t) { t.removeEventListener(e, Pt, !1) }) })
        }

        function x(e, t) { void 0 === br[e] ? (br[e] = t, lr && "function" == typeof t.init && t.init()) : console.warn('reveal.js: "' + e + '" plugin has already been registered') }

        function w(e) { return !!br[e] }

        function k(e) { return br[e] }

        function S(e, t) { "object" == typeof e && e.keyCode ? qr[e.keyCode] = { callback: t, key: e.key, description: e.description } : qr[e] = { callback: t, key: null, description: null } }

        function A(e) { delete qr[e] }

        function M(e, t) { for (var r in t) e[r] = t[r]; return e }

        function z(e) { return Array.prototype.slice.call(e) }

        function T(e) { if ("string" == typeof e) { if ("null" === e) return null; if ("true" === e) return !0; if ("false" === e) return !1; if (e.match(/^-?[\d\.]+$/)) return parseFloat(e) } return e }

        function E(e, t) { e.style.WebkitTransform = t, e.style.MozTransform = t, e.style.msTransform = t, e.style.transform = t }

        function L(e) { "string" == typeof e.layout && (gr.layout = e.layout), "string" == typeof e.overview && (gr.overview = e.overview), gr.layout ? E(vr.slides, gr.layout + " " + gr.overview) : E(vr.slides, gr.overview) }

        function C(e) { var t = document.createElement("style");
            t.type = "text/css", t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.getElementsByTagName("head")[0].appendChild(t) }

        function N(e, t) { for (var r = e.parentNode; r;) { var n = r.matches || r.matchesSelector || r.msMatchesSelector; if (n && n.call(r, t)) return r;
                r = r.parentNode } return null }

        function q(e) { var t = e.match(/^#([0-9a-f]{3})$/i); if (t && t[1]) return t = t[1], { r: 17 * parseInt(t.charAt(0), 16), g: 17 * parseInt(t.charAt(1), 16), b: 17 * parseInt(t.charAt(2), 16) }; var r = e.match(/^#([0-9a-f]{6})$/i); if (r && r[1]) return r = r[1], { r: parseInt(r.substr(0, 2), 16), g: parseInt(r.substr(2, 2), 16), b: parseInt(r.substr(4, 2), 16) }; var n = e.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i); if (n) return { r: parseInt(n[1], 10), g: parseInt(n[2], 10), b: parseInt(n[3], 10) }; var a = e.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i); return a ? { r: parseInt(a[1], 10), g: parseInt(a[2], 10), b: parseInt(a[3], 10), a: parseFloat(a[4]) } : null }

        function B(e) { return "string" == typeof e && (e = q(e)), e ? (299 * e.r + 587 * e.g + 114 * e.b) / 1e3 : null }

        function I(e, t) { if (t = t || 0, e) { var r, n = e.style.height; return e.style.height = "0px", e.parentNode.style.height = "auto", r = t - e.parentNode.offsetHeight, e.style.height = n + "px", e.parentNode.style.removeProperty("height"), r } return t }

        function O() { return /print-pdf/gi.test(window.location.search) }

        function R() { or.hideAddressBar && Zt && (window.addEventListener("load", P, !1), window.addEventListener("orientationchange", P, !1)) }

        function P() { setTimeout(function() { window.scrollTo(0, 1) }, 10) }

        function D(e, t) { var r = document.createEvent("HTMLEvents", 1, 2);
            r.initEvent(e, !0, !0), M(r, t), vr.wrapper.dispatchEvent(r), H(e) }

        function H(e, t) { if (or.postMessageEvents && window.parent !== window.self) { var r = { namespace: "reveal", eventName: e, state: rt() };
                M(r, t), window.parent.postMessage(JSON.stringify(r), "*") } }

        function F() { if (xr.transforms3d && !("msPerspective" in document.body.style))
                for (var e = vr.wrapper.querySelectorAll(tr + " a"), t = 0, r = e.length; t < r; t++) { var n = e[t]; if (n.textContent && !n.querySelector("*") && (!n.className || !n.classList.contains(n, "roll"))) { var a = document.createElement("span");
                        a.setAttribute("data-title", n.text), a.innerHTML = n.innerHTML, n.classList.add("roll"), n.innerHTML = "", n.appendChild(a) } } }

        function V() { for (var e = vr.wrapper.querySelectorAll(tr + " a.roll"), t = 0, r = e.length; t < r; t++) { var n = e[t],
                    a = n.querySelector("span");
                a && (n.classList.remove("roll"), n.innerHTML = a.innerHTML) } }

        function U(e) { var t = z(document.querySelectorAll(e ? e : "a"));
            t.forEach(function(e) { /^(http|www)/gi.test(e.getAttribute("href")) && e.addEventListener("click", Ut, !1) }) }

        function W(e) { var t = z(document.querySelectorAll(e ? e : "a"));
            t.forEach(function(e) { /^(http|www)/gi.test(e.getAttribute("href")) && e.removeEventListener("click", Ut, !1) }) }

        function _(e) { Y(), vr.overlay = document.createElement("div"), vr.overlay.classList.add("overlay"), vr.overlay.classList.add("overlay-preview"), vr.wrapper.appendChild(vr.overlay), vr.overlay.innerHTML = ["<header>", '<a class="close" href="#"><span class="icon"></span></a>', '<a class="external" href="' + e + '" target="_blank"><span class="icon"></span></a>', "</header>", '<div class="spinner"></div>', '<div class="viewport">', '<iframe src="' + e + '"></iframe>', '<small class="viewport-inner">', '<span class="x-frame-error">Unable to load iframe. This is likely due to the site\'s policy (x-frame-options).</span>', "</small>", "</div>"].join(""), vr.overlay.querySelector("iframe").addEventListener("load", function() { vr.overlay.classList.add("loaded") }, !1), vr.overlay.querySelector(".close").addEventListener("click", function(e) { Y(), e.preventDefault() }, !1), vr.overlay.querySelector(".external").addEventListener("click", function() { Y() }, !1), setTimeout(function() { vr.overlay.classList.add("visible") }, 1) }

        function X(e) { "boolean" == typeof e ? e ? G() : Y() : vr.overlay ? Y() : G() }

        function G() { if (or.help) { Y(), vr.overlay = document.createElement("div"), vr.overlay.classList.add("overlay"), vr.overlay.classList.add("overlay-help"), vr.wrapper.appendChild(vr.overlay); var e = '<p class="title">Keyboard Shortcuts</p><br/>';
                e += "<table><th>KEY</th><th>ACTION</th>"; for (var t in Nr) e += "<tr><td>" + t + "</td><td>" + Nr[t] + "</td></tr>"; for (var r in qr) qr[r].key && qr[r].description && (e += "<tr><td>" + qr[r].key + "</td><td>" + qr[r].description + "</td></tr>");
                e += "</table>", vr.overlay.innerHTML = ["<header>", '<a class="close" href="#"><span class="icon"></span></a>', "</header>", '<div class="viewport">', '<div class="viewport-inner">' + e + "</div>", "</div>"].join(""), vr.overlay.querySelector(".close").addEventListener("click", function(e) { Y(), e.preventDefault() }, !1), setTimeout(function() { vr.overlay.classList.add("visible") }, 1) } }

        function Y() { vr.overlay && (vr.overlay.parentNode.removeChild(vr.overlay), vr.overlay = null) }

        function j() { if (vr.wrapper && !O()) { if (!or.disableLayout) { Zt && document.documentElement.style.setProperty("--vh", .01 * window.innerHeight + "px"); var e = K(),
                        t = fr;
                    $(or.width, or.height), vr.slides.style.width = e.width + "px", vr.slides.style.height = e.height + "px", fr = Math.min(e.presentationWidth / e.width, e.presentationHeight / e.height), fr = Math.max(fr, or.minScale), fr = Math.min(fr, or.maxScale), 1 === fr ? (vr.slides.style.zoom = "", vr.slides.style.left = "", vr.slides.style.top = "", vr.slides.style.bottom = "", vr.slides.style.right = "", L({ layout: "" })) : fr > 1 && xr.zoom && window.devicePixelRatio < 2 ? (vr.slides.style.zoom = fr, vr.slides.style.left = "", vr.slides.style.top = "", vr.slides.style.bottom = "", vr.slides.style.right = "", L({ layout: "" })) : (vr.slides.style.zoom = "", vr.slides.style.left = "50%", vr.slides.style.top = "50%", vr.slides.style.bottom = "auto", vr.slides.style.right = "auto", L({ layout: "translate(-50%, -50%) scale(" + fr + ")" })); for (var r = z(vr.wrapper.querySelectorAll(tr)), n = 0, a = r.length; n < a; n++) { var i = r[n]; "none" !== i.style.display && (or.center || i.classList.contains("center") ? i.classList.contains("stack") ? i.style.top = 0 : i.style.top = Math.max((e.height - i.scrollHeight) / 2, 0) + "px" : i.style.top = "") } t !== fr && D("resize", { oldScale: t, scale: fr, size: e }) } Ee(), Be(), ae() && te() } }

        function $(e, t) { z(vr.slides.querySelectorAll("section > .stretch")).forEach(function(r) { var n = I(r, t); if (/(img|video)/gi.test(r.nodeName)) { var a = r.naturalWidth || r.videoWidth,
                        i = r.naturalHeight || r.videoHeight,
                        o = Math.min(e / a, n / i);
                    r.style.width = a * o + "px", r.style.height = i * o + "px" } else r.style.width = e + "px", r.style.height = n + "px" }) }

        function K(e, t) { var r = { width: or.width, height: or.height, presentationWidth: e || vr.wrapper.offsetWidth, presentationHeight: t || vr.wrapper.offsetHeight }; return r.presentationWidth -= r.presentationWidth * or.margin, r.presentationHeight -= r.presentationHeight * or.margin, "string" == typeof r.width && /%$/.test(r.width) && (r.width = parseInt(r.width, 10) / 100 * r.presentationWidth), "string" == typeof r.height && /%$/.test(r.height) && (r.height = parseInt(r.height, 10) / 100 * r.presentationHeight), r }

        function Z(e, t) { "object" == typeof e && "function" == typeof e.setAttribute && e.setAttribute("data-previous-indexv", t || 0) }

        function J(e) { if ("object" == typeof e && "function" == typeof e.setAttribute && e.classList.contains("stack")) { var t = e.hasAttribute("data-start-indexv") ? "data-start-indexv" : "data-previous-indexv"; return parseInt(e.getAttribute(t) || 0, 10) } return 0 }

        function Q() { if (or.overview && !ae()) { cr = !0, vr.wrapper.classList.add("overview"), vr.wrapper.classList.remove("overview-deactivating"), xr.overviewTransitions && setTimeout(function() { vr.wrapper.classList.add("overview-animated") }, 1), ht(), vr.slides.appendChild(vr.background), z(vr.wrapper.querySelectorAll(tr)).forEach(function(e) { e.classList.contains("stack") || e.addEventListener("click", Vt, !0) }); var e = 70,
                    t = K();
                hr = t.width + e, dr = t.height + e, or.rtl && (hr = -hr), Ae(), ee(), te(), j(), D("overviewshown", { indexh: Gt, indexv: Yt, currentSlide: $t }) } }

        function ee() { z(vr.wrapper.querySelectorAll(rr)).forEach(function(e, t) { e.setAttribute("data-index-h", t), E(e, "translate3d(" + t * hr + "px, 0, 0)"), e.classList.contains("stack") && z(e.querySelectorAll("section")).forEach(function(e, r) { e.setAttribute("data-index-h", t), e.setAttribute("data-index-v", r), E(e, "translate3d(0, " + r * dr + "px, 0)") }) }), z(vr.background.childNodes).forEach(function(e, t) { E(e, "translate3d(" + t * hr + "px, 0, 0)"), z(e.querySelectorAll(".slide-background")).forEach(function(e, t) { E(e, "translate3d(0, " + t * dr + "px, 0)") }) }) }

        function te() { var e = Math.min(window.innerWidth, window.innerHeight),
                t = Math.max(e / 5, 150) / e;
            L({ overview: ["scale(" + t + ")", "translateX(" + -Gt * hr + "px)", "translateY(" + -Yt * dr + "px)"].join(" ") }) }

        function re() { or.overview && (cr = !1, vr.wrapper.classList.remove("overview"), vr.wrapper.classList.remove("overview-animated"), vr.wrapper.classList.add("overview-deactivating"), setTimeout(function() { vr.wrapper.classList.remove("overview-deactivating") }, 1), vr.wrapper.appendChild(vr.background), z(vr.wrapper.querySelectorAll(tr)).forEach(function(e) { E(e, ""), e.removeEventListener("click", Vt, !0) }), z(vr.background.querySelectorAll(".slide-background")).forEach(function(e) { E(e, "") }), L({ overview: "" }), ge(Gt, Yt), j(), ct(), D("overviewhidden", { indexh: Gt, indexv: Yt, currentSlide: $t })) }

        function ne(e) { "boolean" == typeof e ? e ? Q() : re() : ae() ? re() : Q() }

        function ae() { return cr }

        function ie() { var e = "/",
                t = $t ? $t.getAttribute("id") : null;
            t && (t = encodeURIComponent(t)); var r; if (or.fragmentInURL && (r = $e().f), "string" == typeof t && t.length && void 0 === r) e = "/" + t;
            else { var n = or.hashOneBasedIndex ? 1 : 0;
                (Gt > 0 || Yt > 0 || void 0 !== r) && (e += Gt + n), (Yt > 0 || void 0 !== r) && (e += "/" + (Yt + n)), void 0 !== r && (e += "/" + r) } return e }

        function oe(e) { return e = e ? e : $t, e && e.parentNode && !!e.parentNode.nodeName.match(/section/i) }

        function se() { var e = document.documentElement,
                t = e.requestFullscreen || e.webkitRequestFullscreen || e.webkitRequestFullScreen || e.mozRequestFullScreen || e.msRequestFullscreen;
            t && t.apply(e) }

        function le() { Sr && (Sr = !1, vr.wrapper.style.cursor = "") }

        function ce() { Sr === !1 && (Sr = !0, vr.wrapper.style.cursor = "none") }

        function he() { if (or.pause) { var e = vr.wrapper.classList.contains("paused");
                ht(), vr.wrapper.classList.add("paused"), e === !1 && D("paused") } }

        function de() { var e = vr.wrapper.classList.contains("paused");
            vr.wrapper.classList.remove("paused"), ct(), e && D("resumed") }

        function ue(e) { "boolean" == typeof e ? e ? he() : de() : me() ? de() : he() }

        function me() { return vr.wrapper.classList.contains("paused") }

        function pe(e) { "boolean" == typeof e ? e ? ut() : dt() : Lr ? ut() : dt() }

        function fe() { return !(!zr || Lr) }

        function ge(e, t, r, n) { jt = $t; var a = vr.wrapper.querySelectorAll(rr); if (0 !== a.length) { void 0 !== t || ae() || (t = J(a[e])), jt && jt.parentNode && jt.parentNode.classList.contains("stack") && Z(jt.parentNode, Yt); var i = pr.concat();
                pr.length = 0; var o = Gt || 0,
                    s = Yt || 0;
                Gt = Se(rr, void 0 === e ? Gt : e), Yt = Se(nr, void 0 === t ? Yt : t), Ae(), j(), ae() && te(); var l = a[Gt],
                    h = l.querySelectorAll("section");
                $t = h[Yt] || l, "undefined" != typeof r && ot(r); var d = Gt !== o || Yt !== s;
                d || (jt = null), jt && jt !== $t && (jt.classList.remove("present"), jt.setAttribute("aria-hidden", "true"), vr.wrapper.querySelector(ar).classList.contains("present") && setTimeout(function() { var e, t = z(vr.wrapper.querySelectorAll(rr + ".stack")); for (e in t) t[e] && Z(t[e], 0) }, 0));
                e: for (var u = 0, m = pr.length; u < m; u++) { for (var p = 0; p < i.length; p++)
                        if (i[p] === pr[u]) { i.splice(p, 1); continue e } document.documentElement.classList.add(pr[u]), D(pr[u]) }
                for (; i.length;) document.documentElement.classList.remove(i.pop());
                d && D("slidechanged", { indexh: Gt, indexv: Yt, previousSlide: jt, currentSlide: $t, origin: n }), !d && jt || (We(jt), Fe($t)), vr.statusDiv.textContent = c($t), Ne(), Ee(), qe(), Be(), Le(), Me(), it(), je(), ct() } }

        function ve() { y(), b(), j(), zr = or.autoSlide, ct(), m(), je(), we(), Ne(), Ee(), Le(), Ae(), qe(!0), ze(), Me(), He(), or.autoPlayMedia === !1 ? We($t, { unloadIframes: !1 }) : Fe($t), ae() && ee() }

        function be(e) { e = e || $t, f(e), ye(e), qe(), Me(), Oe(e) }

        function ye(e) { return e = e || $t, at(e.querySelectorAll(".fragment")) }

        function xe() { var e = z(vr.wrapper.querySelectorAll(rr));
            e.forEach(function(e) { var t = z(e.querySelectorAll("section"));
                t.forEach(function(e, t) { t > 0 && (e.classList.remove("present"), e.classList.remove("past"), e.classList.add("future"), e.setAttribute("aria-hidden", "true")) }) }) }

        function we() { var e = z(vr.wrapper.querySelectorAll(rr));
            e.forEach(function(e) { var t = z(e.querySelectorAll("section"));
                t.forEach(function(e) { at(e.querySelectorAll(".fragment")) }), 0 === t.length && at(e.querySelectorAll(".fragment")) }) }

        function ke() { var e = z(vr.wrapper.querySelectorAll(rr));
            e.forEach(function(t) { vr.slides.insertBefore(t, e[Math.floor(Math.random() * e.length)]) }) }

        function Se(e, t) { var r = z(vr.wrapper.querySelectorAll(e)),
                n = r.length,
                a = O(); if (n) { or.loop && (t %= n, t < 0 && (t = n + t)), t = Math.max(Math.min(t, n - 1), 0); for (var i = 0; i < n; i++) { var o = r[i],
                        s = or.rtl && !oe(o);
                    o.classList.remove("past"), o.classList.remove("present"), o.classList.remove("future"), o.setAttribute("hidden", ""), o.setAttribute("aria-hidden", "true"), o.querySelector("section") && o.classList.add("stack"), a ? o.classList.add("present") : i < t ? (o.classList.add(s ? "future" : "past"), or.fragments && z(o.querySelectorAll(".fragment")).forEach(function(e) { e.classList.add("visible"), e.classList.remove("current-fragment") })) : i > t && (o.classList.add(s ? "past" : "future"), or.fragments && z(o.querySelectorAll(".fragment.visible")).forEach(function(e) { e.classList.remove("visible"), e.classList.remove("current-fragment") })) } r[t].classList.add("present"), r[t].removeAttribute("hidden"), r[t].removeAttribute("aria-hidden"); var l = r[t].getAttribute("data-state");
                l && (pr = pr.concat(l.split(" "))) } else t = 0; return t }

        function Ae() { var e, t, r = z(vr.wrapper.querySelectorAll(rr)),
                n = r.length; if (n && "undefined" != typeof Gt) { var a = ae() ? 10 : or.viewDistance;
                Zt && (a = ae() ? 6 : 2), O() && (a = Number.MAX_VALUE); for (var i = 0; i < n; i++) { var o = r[i],
                        s = z(o.querySelectorAll("section")),
                        l = s.length; if (e = Math.abs((Gt || 0) - i) || 0, or.loop && (e = Math.abs(((Gt || 0) - i) % (n - a)) || 0), e < a ? Oe(o) : Re(o), l)
                        for (var c = J(o), h = 0; h < l; h++) { var d = s[h];
                            t = i === (Gt || 0) ? Math.abs((Yt || 0) - h) : Math.abs(h - c), e + t < a ? Oe(d) : Re(d) } } vr.wrapper.querySelectorAll(".slides>section>section").length ? vr.wrapper.classList.add("has-vertical-slides") : vr.wrapper.classList.remove("has-vertical-slides"), vr.wrapper.querySelectorAll(".slides>section").length > 1 ? vr.wrapper.classList.add("has-horizontal-slides") : vr.wrapper.classList.remove("has-horizontal-slides") } }

        function Me() { or.showNotes && vr.speakerNotes && $t && !O() && (vr.speakerNotes.innerHTML = tt() || '<span class="notes-placeholder">No notes on this slide.</span>') }

        function ze() { or.showNotes && Te() ? vr.wrapper.classList.add("show-notes") : vr.wrapper.classList.remove("show-notes") }

        function Te() { return vr.slides.querySelectorAll("[data-notes], aside.notes").length > 0 }

        function Ee() { or.progress && vr.progressbar && (vr.progressbar.style.width = Xe() * vr.wrapper.offsetWidth + "px") }

        function Le() { if (or.slideNumber && vr.slideNumber) { var e, t = "h.v"; if ("function" == typeof or.slideNumber) e = or.slideNumber();
                else switch ("string" == typeof or.slideNumber && (t = or.slideNumber), /c/.test(t) || 1 !== vr.wrapper.querySelectorAll(rr).length || (t = "c"), e = [], t) {
                    case "c":
                        e.push(_e() + 1); break;
                    case "c/t":
                        e.push(_e() + 1, "/", Je()); break;
                    case "h/v":
                        e.push(Gt + 1), oe() && e.push("/", Yt + 1); break;
                    default:
                        e.push(Gt + 1), oe() && e.push(".", Yt + 1) } vr.slideNumber.innerHTML = Ce(e[0], e[1], e[2]) } }

        function Ce(e, t, r) { var n = "#" + ie(); return "number" != typeof r || isNaN(r) ? '<a href="' + n + '"><span class="slide-number-a">' + e + "</span></a>" : '<a href="' + n + '"><span class="slide-number-a">' + e + '</span><span class="slide-number-delimiter">' + t + '</span><span class="slide-number-b">' + r + "</span></a>" }

        function Ne() { var e = Pe(),
                t = De();
            vr.controlsLeft.concat(vr.controlsRight).concat(vr.controlsUp).concat(vr.controlsDown).concat(vr.controlsPrev).concat(vr.controlsNext).forEach(function(e) { e.classList.remove("enabled"), e.classList.remove("fragmented"), e.setAttribute("disabled", "disabled") }), e.left && vr.controlsLeft.forEach(function(e) { e.classList.add("enabled"), e.removeAttribute("disabled") }), e.right && vr.controlsRight.forEach(function(e) { e.classList.add("enabled"), e.removeAttribute("disabled") }), e.up && vr.controlsUp.forEach(function(e) { e.classList.add("enabled"), e.removeAttribute("disabled") }), e.down && vr.controlsDown.forEach(function(e) { e.classList.add("enabled"), e.removeAttribute("disabled") }), (e.left || e.up) && vr.controlsPrev.forEach(function(e) { e.classList.add("enabled"), e.removeAttribute("disabled") }), (e.right || e.down) && vr.controlsNext.forEach(function(e) { e.classList.add("enabled"), e.removeAttribute("disabled") }), $t && (t.prev && vr.controlsPrev.forEach(function(e) { e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled") }), t.next && vr.controlsNext.forEach(function(e) { e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled") }), oe($t) ? (t.prev && vr.controlsUp.forEach(function(e) { e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled") }), t.next && vr.controlsDown.forEach(function(e) { e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled") })) : (t.prev && vr.controlsLeft.forEach(function(e) { e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled") }), t.next && vr.controlsRight.forEach(function(e) { e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled") }))), or.controlsTutorial && (!mr && e.down ? vr.controlsDownArrow.classList.add("highlight") : (vr.controlsDownArrow.classList.remove("highlight"), !ur && e.right && 0 === Yt ? vr.controlsRightArrow.classList.add("highlight") : vr.controlsRightArrow.classList.remove("highlight"))) }

        function qe(e) { var t = null,
                r = or.rtl ? "future" : "past",
                n = or.rtl ? "past" : "future"; if (z(vr.background.childNodes).forEach(function(a, i) { a.classList.remove("past"), a.classList.remove("present"), a.classList.remove("future"), i < Gt ? a.classList.add(r) : i > Gt ? a.classList.add(n) : (a.classList.add("present"), t = a), (e || i === Gt) && z(a.querySelectorAll(".slide-background")).forEach(function(e, r) { e.classList.remove("past"), e.classList.remove("present"), e.classList.remove("future"), r < Yt ? e.classList.add("past") : r > Yt ? e.classList.add("future") : (e.classList.add("present"), i === Gt && (t = e)) }) }), Kt && We(Kt, { unloadIframes: !Ie(Kt) }), t) { Fe(t); var a = t.querySelector(".slide-background-content"); if (a) { var i = a.style.backgroundImage || ""; /\.gif/i.test(i) && (a.style.backgroundImage = "", window.getComputedStyle(a).opacity, a.style.backgroundImage = i) } var o = Kt ? Kt.getAttribute("data-background-hash") : null,
                    s = t.getAttribute("data-background-hash");
                s && s === o && t !== Kt && vr.background.classList.add("no-transition"), Kt = t } $t && ["has-light-background", "has-dark-background"].forEach(function(e) { $t.classList.contains(e) ? vr.wrapper.classList.add(e) : vr.wrapper.classList.remove(e) }), setTimeout(function() { vr.background.classList.remove("no-transition") }, 1) }

        function Be() { if (or.parallaxBackgroundImage) { var e, t, r = vr.wrapper.querySelectorAll(rr),
                    n = vr.wrapper.querySelectorAll(nr),
                    a = vr.background.style.backgroundSize.split(" ");
                1 === a.length ? e = t = parseInt(a[0], 10) : (e = parseInt(a[0], 10), t = parseInt(a[1], 10)); var i, o, s = vr.background.offsetWidth,
                    l = r.length;
                i = "number" == typeof or.parallaxBackgroundHorizontal ? or.parallaxBackgroundHorizontal : l > 1 ? (e - s) / (l - 1) : 0, o = i * Gt * -1; var c, h, d = vr.background.offsetHeight,
                    u = n.length;
                c = "number" == typeof or.parallaxBackgroundVertical ? or.parallaxBackgroundVertical : (t - d) / (u - 1), h = u > 0 ? c * Yt : 0, vr.background.style.backgroundPosition = o + "px " + -h + "px" } }

        function Ie(e) { var t = or.preloadIframes; return "boolean" != typeof t && (t = e.hasAttribute("data-preload")), t }

        function Oe(e, t) { t = t || {}, e.style.display = or.display, z(e.querySelectorAll("img[data-src], video[data-src], audio[data-src], iframe[data-src]")).forEach(function(e) {
                ("IFRAME" !== e.tagName || Ie(e)) && (e.setAttribute("src", e.getAttribute("data-src")), e.setAttribute("data-lazy-loaded", ""), e.removeAttribute("data-src")) }), z(e.querySelectorAll("video, audio")).forEach(function(e) { var t = 0;
                z(e.querySelectorAll("source[data-src]")).forEach(function(e) { e.setAttribute("src", e.getAttribute("data-src")), e.removeAttribute("data-src"), e.setAttribute("data-lazy-loaded", ""), t += 1 }), t > 0 && e.load() }); var r = e.slideBackgroundElement; if (r) { r.style.display = "block"; var n = e.slideBackgroundContentElement,
                    a = e.getAttribute("data-background-iframe"); if (r.hasAttribute("data-loaded") === !1) { r.setAttribute("data-loaded", "true"); var i = e.getAttribute("data-background-image"),
                        o = e.getAttribute("data-background-video"),
                        s = e.hasAttribute("data-background-video-loop"),
                        l = e.hasAttribute("data-background-video-muted"); if (i) n.style.backgroundImage = "url(" + encodeURI(i) + ")";
                    else if (o && !Ge()) { var c = document.createElement("video");
                        s && c.setAttribute("loop", ""), l && (c.muted = !0), Zt && (c.muted = !0, c.autoplay = !0, c.setAttribute("playsinline", "")), o.split(",").forEach(function(e) { c.innerHTML += '<source src="' + e + '">' }), n.appendChild(c) } else if (a && t.excludeIframes !== !0) { var h = document.createElement("iframe");
                        h.setAttribute("allowfullscreen", ""), h.setAttribute("mozallowfullscreen", ""), h.setAttribute("webkitallowfullscreen", ""), h.setAttribute("data-src", a), h.style.width = "100%", h.style.height = "100%", h.style.maxHeight = "100%", h.style.maxWidth = "100%", n.appendChild(h) } } var d = n.querySelector("iframe[data-src]");
                d && Ie(r) && !/autoplay=(1|true|yes)/gi.test(a) && d.getAttribute("src") !== a && d.setAttribute("src", a) } }

        function Re(e) { e.style.display = "none"; var t = et(e);
            t && (t.style.display = "none", z(t.querySelectorAll("iframe[src]")).forEach(function(e) { e.removeAttribute("src") })), z(e.querySelectorAll("video[data-lazy-loaded][src], audio[data-lazy-loaded][src], iframe[data-lazy-loaded][src]")).forEach(function(e) { e.setAttribute("data-src", e.getAttribute("src")), e.removeAttribute("src") }), z(e.querySelectorAll("video[data-lazy-loaded] source[src], audio source[src]")).forEach(function(e) { e.setAttribute("data-src", e.getAttribute("src")), e.removeAttribute("src") }) }

        function Pe() { var e = vr.wrapper.querySelectorAll(rr),
                t = vr.wrapper.querySelectorAll(nr),
                r = { left: Gt > 0, right: Gt < e.length - 1, up: Yt > 0, down: Yt < t.length - 1 }; if (or.loop && (e.length > 1 && (r.left = !0, r.right = !0), t.length > 1 && (r.up = !0, r.down = !0)), or.rtl) { var n = r.left;
                r.left = r.right, r.right = n } return r }

        function De() { if ($t && or.fragments) { var e = $t.querySelectorAll(".fragment"),
                    t = $t.querySelectorAll(".fragment:not(.visible)"); return { prev: e.length - t.length > 0, next: !!t.length } } return { prev: !1, next: !1 } }

        function He() { var e = function(e, t, r) { z(vr.slides.querySelectorAll("iframe[" + e + '*="' + t + '"]')).forEach(function(t) { var n = t.getAttribute(e);
                    n && n.indexOf(r) === -1 && t.setAttribute(e, n + (/\?/.test(n) ? "&" : "?") + r) }) };
            e("src", "youtube.com/embed/", "enablejsapi=1"), e("data-src", "youtube.com/embed/", "enablejsapi=1"), e("src", "player.vimeo.com/", "api=1"), e("data-src", "player.vimeo.com/", "api=1") }

        function Fe(e) { e && !Ge() && (z(e.querySelectorAll('img[src$=".gif"]')).forEach(function(e) { e.setAttribute("src", e.getAttribute("src")) }), z(e.querySelectorAll("video, audio")).forEach(function(e) { if (!N(e, ".fragment") || N(e, ".fragment.visible")) { var t = or.autoPlayMedia; if ("boolean" != typeof t && (t = e.hasAttribute("data-autoplay") || !!N(e, ".slide-background")), t && "function" == typeof e.play)
                        if (e.readyState > 1) Ve({ target: e });
                        else if (Zt) { var r = e.play();
                        r && "function" == typeof r["catch"] && e.controls === !1 && r["catch"](function() { e.controls = !0, e.addEventListener("play", function() { e.controls = !1 }) }) } else e.removeEventListener("loadeddata", Ve), e.addEventListener("loadeddata", Ve) } }), z(e.querySelectorAll("iframe[src]")).forEach(function(e) { N(e, ".fragment") && !N(e, ".fragment.visible") || Ue({ target: e }) }), z(e.querySelectorAll("iframe[data-src]")).forEach(function(e) { N(e, ".fragment") && !N(e, ".fragment.visible") || e.getAttribute("src") !== e.getAttribute("data-src") && (e.removeEventListener("load", Ue), e.addEventListener("load", Ue), e.setAttribute("src", e.getAttribute("data-src"))) })) }

        function Ve(e) { var t = !!N(e.target, "html"),
                r = !!N(e.target, ".present");
            t && r && (e.target.currentTime = 0, e.target.play()), e.target.removeEventListener("loadeddata", Ve) }

        function Ue(e) { var t = e.target; if (t && t.contentWindow) { var r = !!N(e.target, "html"),
                    n = !!N(e.target, ".present"); if (r && n) { var a = or.autoPlayMedia; "boolean" != typeof a && (a = t.hasAttribute("data-autoplay") || !!N(t, ".slide-background")), /youtube\.com\/embed\//.test(t.getAttribute("src")) && a ? t.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*") : /player\.vimeo\.com\//.test(t.getAttribute("src")) && a ? t.contentWindow.postMessage('{"method":"play"}', "*") : t.contentWindow.postMessage("slide:start", "*") } } }

        function We(e, t) { t = M({ unloadIframes: !0 }, t || {}), e && e.parentNode && (z(e.querySelectorAll("video, audio")).forEach(function(e) { e.hasAttribute("data-ignore") || "function" != typeof e.pause || (e.setAttribute("data-paused-by-reveal", ""), e.pause()) }), z(e.querySelectorAll("iframe")).forEach(function(e) { e.contentWindow && e.contentWindow.postMessage("slide:stop", "*"), e.removeEventListener("load", Ue) }), z(e.querySelectorAll('iframe[src*="youtube.com/embed/"]')).forEach(function(e) {!e.hasAttribute("data-ignore") && e.contentWindow && "function" == typeof e.contentWindow.postMessage && e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*") }), z(e.querySelectorAll('iframe[src*="player.vimeo.com/"]')).forEach(function(e) {!e.hasAttribute("data-ignore") && e.contentWindow && "function" == typeof e.contentWindow.postMessage && e.contentWindow.postMessage('{"method":"pause"}', "*") }), t.unloadIframes === !0 && z(e.querySelectorAll("iframe[data-src]")).forEach(function(e) { e.setAttribute("src", "about:blank"), e.removeAttribute("src") })) }

        function _e() { var e = z(vr.wrapper.querySelectorAll(rr)),
                t = 0;
            e: for (var r = 0; r < e.length; r++) { for (var n = e[r], a = z(n.querySelectorAll("section")), i = 0; i < a.length; i++) { if (a[i].classList.contains("present")) break e;
                    t++ } if (n.classList.contains("present")) break;
                n.classList.contains("stack") === !1 && t++ }
            return t }

        function Xe() { var e = Je(),
                t = _e(); if ($t) { var r = $t.querySelectorAll(".fragment"); if (r.length > 0) { var n = $t.querySelectorAll(".fragment.visible"),
                        a = .9;
                    t += n.length / r.length * a } } return Math.min(t / (e - 1), 1) }

        function Ge() { return !!window.location.search.match(/receiver/gi) }

        function Ye() { var e = window.location.hash,
                t = e.slice(2).split("/"),
                r = e.replace(/#|\//gi, ""); if (!/^[0-9]*$/.test(t[0]) && r.length) { var n; try { n = document.getElementById(decodeURIComponent(r)) } catch (e) {} var a = !!$t && $t.getAttribute("id") === r; if (n) { if (!a) { var i = Xt.getIndices(n);
                        ge(i.h, i.v) } } else ge(Gt || 0, Yt || 0) } else { var o, s = or.hashOneBasedIndex ? 1 : 0,
                    l = parseInt(t[0], 10) - s || 0,
                    c = parseInt(t[1], 10) - s || 0;
                or.fragmentInURL && (o = parseInt(t[2], 10), isNaN(o) && (o = void 0)), l === Gt && c === Yt && void 0 === o || ge(l, c, o) } }

        function je(e) { clearTimeout(kr), "number" == typeof e ? kr = setTimeout(je, e) : $t && (or.history || !window.history ? window.location.hash = ie() : or.hash ? window.history.replaceState(null, null, "#" + ie()) : window.history.replaceState(null, null, window.location.pathname + window.location.search)) }

        function $e(e) { var t, r = Gt,
                n = Yt; if (e) { var a = oe(e),
                    i = a ? e.parentNode : e,
                    o = z(vr.wrapper.querySelectorAll(rr));
                r = Math.max(o.indexOf(i), 0), n = void 0, a && (n = Math.max(z(e.parentNode.querySelectorAll("section")).indexOf(e), 0)) } if (!e && $t) { var s = $t.querySelectorAll(".fragment").length > 0; if (s) { var l = $t.querySelector(".current-fragment");
                    t = l && l.hasAttribute("data-fragment-index") ? parseInt(l.getAttribute("data-fragment-index"), 10) : $t.querySelectorAll(".fragment.visible").length - 1 } } return { h: r, v: n, f: t } }

        function Ke() { return z(vr.wrapper.querySelectorAll(tr + ":not(.stack)")) }

        function Ze() { return Ke().map(function(e) { for (var t = {}, r = 0; r < e.attributes.length; r++) { var n = e.attributes[r];
                    t[n.name] = n.value } return t }) }

        function Je() { return Ke().length }

        function Qe(e, t) { var r = vr.wrapper.querySelectorAll(rr)[e],
                n = r && r.querySelectorAll("section"); return n && n.length && "number" == typeof t ? n ? n[t] : void 0 : r }

        function et(e, t) { var r = "number" == typeof e ? Qe(e, t) : e; if (r) return r.slideBackgroundElement }

        function tt(e) { if (e = e || $t, e.hasAttribute("data-notes")) return e.getAttribute("data-notes"); var t = e.querySelector("aside.notes"); return t ? t.innerHTML : null }

        function rt() { var e = $e(); return { indexh: e.h, indexv: e.v, indexf: e.f, paused: me(), overview: ae() } }

        function nt(e) { if ("object" == typeof e) { ge(T(e.indexh), T(e.indexv), T(e.indexf)); var t = T(e.paused),
                    r = T(e.overview); "boolean" == typeof t && t !== me() && ue(t), "boolean" == typeof r && r !== ae() && ne(r) } }

        function at(e, t) { e = z(e); var r = [],
                n = [],
                a = [];
            e.forEach(function(e) { if (e.hasAttribute("data-fragment-index")) { var t = parseInt(e.getAttribute("data-fragment-index"), 10);
                    r[t] || (r[t] = []), r[t].push(e) } else n.push([e]) }), r = r.concat(n); var i = 0; return r.forEach(function(e) { e.forEach(function(e) { a.push(e), e.setAttribute("data-fragment-index", i) }), i++ }), t === !0 ? r : a }

        function it(e, t) { var r = { shown: [], hidden: [] }; if ($t && or.fragments && (t = t || at($t.querySelectorAll(".fragment")), t.length)) { if ("number" != typeof e) { var n = at($t.querySelectorAll(".fragment.visible")).pop();
                    n && (e = parseInt(n.getAttribute("data-fragment-index") || 0, 10)) } z(t).forEach(function(t, n) { t.hasAttribute("data-fragment-index") && (n = parseInt(t.getAttribute("data-fragment-index"), 10)), n <= e ? (t.classList.contains("visible") || r.shown.push(t), t.classList.add("visible"), t.classList.remove("current-fragment"), vr.statusDiv.textContent = c(t), n === e && (t.classList.add("current-fragment"), Fe(t))) : (t.classList.contains("visible") && r.hidden.push(t), t.classList.remove("visible"), t.classList.remove("current-fragment")) }) } return r }

        function ot(e, t) { if ($t && or.fragments) { var r = at($t.querySelectorAll(".fragment")); if (r.length) { if ("number" != typeof e) { var n = at($t.querySelectorAll(".fragment.visible")).pop();
                        e = n ? parseInt(n.getAttribute("data-fragment-index") || 0, 10) : -1 } "number" == typeof t && (e += t); var a = it(e, r); return a.hidden.length && D("fragmenthidden", { fragment: a.hidden[0], fragments: a.hidden }), a.shown.length && D("fragmentshown", { fragment: a.shown[0], fragments: a.shown }), Ne(), Ee(), or.fragmentInURL && je(), !(!a.shown.length && !a.hidden.length) } } return !1 }

        function st() { return ot(null, 1) }

        function lt() { return ot(null, -1) }

        function ct() { if (ht(), $t && or.autoSlide !== !1) { var e = $t.querySelector(".current-fragment");
                e || (e = $t.querySelector(".fragment")); var t = e ? e.getAttribute("data-autoslide") : null,
                    r = $t.parentNode ? $t.parentNode.getAttribute("data-autoslide") : null,
                    n = $t.getAttribute("data-autoslide");
                zr = t ? parseInt(t, 10) : n ? parseInt(n, 10) : r ? parseInt(r, 10) : or.autoSlide, 0 === $t.querySelectorAll(".fragment").length && z($t.querySelectorAll("video, audio")).forEach(function(e) { e.hasAttribute("data-autoplay") && zr && 1e3 * e.duration / e.playbackRate > zr && (zr = 1e3 * e.duration / e.playbackRate + 1e3) }), !zr || Lr || me() || ae() || Xt.isLastSlide() && !De().next && or.loop !== !0 || (Tr = setTimeout(function() { "function" == typeof or.autoSlideMethod ? or.autoSlideMethod() : bt(), ct() }, zr), Er = Date.now()), Qt && Qt.setPlaying(Tr !== -1) } }

        function ht() { clearTimeout(Tr), Tr = -1 }

        function dt() { zr && !Lr && (Lr = !0, D("autoslidepaused"), clearTimeout(Tr), Qt && Qt.setPlaying(!1)) }

        function ut() { zr && Lr && (Lr = !1, D("autoslideresumed"), ct()) }

        function mt() { or.rtl ? (ae() || st() === !1) && Pe().left && ge(Gt + 1, "grid" === or.navigationMode ? Yt : void 0) : (ae() || lt() === !1) && Pe().left && ge(Gt - 1, "grid" === or.navigationMode ? Yt : void 0) }

        function pt() { ur = !0, or.rtl ? (ae() || lt() === !1) && Pe().right && ge(Gt - 1, "grid" === or.navigationMode ? Yt : void 0) : (ae() || st() === !1) && Pe().right && ge(Gt + 1, "grid" === or.navigationMode ? Yt : void 0) }

        function ft() {
            (ae() || lt() === !1) && Pe().up && ge(Gt, Yt - 1) }

        function gt() { mr = !0, (ae() || st() === !1) && Pe().down && ge(Gt, Yt + 1) }

        function vt() { if (lt() === !1)
                if (Pe().up) ft();
                else { var e; if (e = or.rtl ? z(vr.wrapper.querySelectorAll(rr + ".future")).pop() : z(vr.wrapper.querySelectorAll(rr + ".past")).pop()) { var t = e.querySelectorAll("section").length - 1 || void 0,
                            r = Gt - 1;
                        ge(r, t) } } }

        function bt() { if (ur = !0, mr = !0, st() === !1) { var e = Pe();
                e.down && e.right && or.loop && Xt.isLastVerticalSlide($t) && (e.down = !1), e.down ? gt() : or.rtl ? mt() : pt() } }

        function yt(e) { for (; e && "function" == typeof e.hasAttribute;) { if (e.hasAttribute("data-prevent-swipe")) return !0;
                e = e.parentNode } return !1 }

        function xt() { or.autoSlideStoppable && dt() }

        function wt() { le(), clearTimeout(Ar), Ar = setTimeout(ce, or.hideCursorTime) }

        function kt(e) { e.shiftKey && 63 === e.charCode && X() }

        function St(e) { if ("function" == typeof or.keyboardCondition && or.keyboardCondition(e) === !1) return !0; var t = e.keyCode,
                r = Lr;
            xt(e); var n = document.activeElement && "inherit" !== document.activeElement.contentEditable,
                a = document.activeElement && document.activeElement.tagName && /input|textarea/i.test(document.activeElement.tagName),
                i = document.activeElement && document.activeElement.className && /speaker-notes/i.test(document.activeElement.className),
                o = e.shiftKey && 32 === e.keyCode,
                s = (e.metaKey || e.ctrlKey) && 37 === t,
                l = (e.metaKey || e.ctrlKey) && 39 === t,
                c = !o && !s && !l && (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey); if (!(n || a || i || c)) { var h, d = [66, 86, 190, 191]; if ("object" == typeof or.keyboard)
                    for (h in or.keyboard) "togglePause" === or.keyboard[h] && d.push(parseInt(h, 10)); if (me() && d.indexOf(t) === -1) return !1; var u = !1; if ("object" == typeof or.keyboard)
                    for (h in or.keyboard)
                        if (parseInt(h, 10) === t) { var m = or.keyboard[h]; "function" == typeof m ? m.apply(null, [e]) : "string" == typeof m && "function" == typeof Xt[m] && Xt[m].call(), u = !0 } if (u === !1)
                    for (h in qr)
                        if (parseInt(h, 10) === t) { var p = qr[h].callback; "function" == typeof p ? p.apply(null, [e]) : "string" == typeof p && "function" == typeof Xt[p] && Xt[p].call(), u = !0 } u === !1 && (u = !0, 80 === t || 33 === t ? vt() : 78 === t || 34 === t ? bt() : 72 === t || 37 === t ? s ? ge(0) : ae() || "linear" !== or.navigationMode ? mt() : vt() : 76 === t || 39 === t ? l ? ge(Number.MAX_VALUE) : ae() || "linear" !== or.navigationMode ? pt() : bt() : 75 === t || 38 === t ? ae() || "linear" !== or.navigationMode ? ft() : vt() : 74 === t || 40 === t ? ae() || "linear" !== or.navigationMode ? gt() : bt() : 36 === t ? ge(0) : 35 === t ? ge(Number.MAX_VALUE) : 32 === t ? (ae() && re(), e.shiftKey ? vt() : bt()) : 58 === t || 59 === t || 66 === t || 86 === t || 190 === t || 191 === t ? ue() : 70 === t ? se() : 65 === t ? or.autoSlideStoppable && pe(r) : u = !1), u ? e.preventDefault && e.preventDefault() : 27 !== t && 79 !== t || !xr.transforms3d || (vr.overlay ? Y() : ne(), e.preventDefault && e.preventDefault()), ct() } }

        function At(e) { return !!yt(e.target) || (Cr.startX = e.touches[0].clientX, Cr.startY = e.touches[0].clientY, void(Cr.startCount = e.touches.length)) }

        function Mt(e) { if (yt(e.target)) return !0; if (Cr.captured) ir.match(/android/gi) && e.preventDefault();
            else { xt(e); var t = e.touches[0].clientX,
                    r = e.touches[0].clientY; if (1 === e.touches.length && 2 !== Cr.startCount) { var n = t - Cr.startX,
                        a = r - Cr.startY;
                    n > Cr.threshold && Math.abs(n) > Math.abs(a) ? (Cr.captured = !0, mt()) : n < -Cr.threshold && Math.abs(n) > Math.abs(a) ? (Cr.captured = !0, pt()) : a > Cr.threshold ? (Cr.captured = !0, ft()) : a < -Cr.threshold && (Cr.captured = !0, gt()), or.embedded ? (Cr.captured || oe($t)) && e.preventDefault() : e.preventDefault() } } }

        function zt() { Cr.captured = !1 }

        function Tt(e) { e.pointerType !== e.MSPOINTER_TYPE_TOUCH && "touch" !== e.pointerType || (e.touches = [{ clientX: e.clientX, clientY: e.clientY }], At(e)) }

        function Et(e) { e.pointerType !== e.MSPOINTER_TYPE_TOUCH && "touch" !== e.pointerType || (e.touches = [{ clientX: e.clientX, clientY: e.clientY }], Mt(e)) }

        function Lt(e) { e.pointerType !== e.MSPOINTER_TYPE_TOUCH && "touch" !== e.pointerType || (e.touches = [{ clientX: e.clientX, clientY: e.clientY }], zt(e)) }

        function Ct(e) { if (Date.now() - wr > 600) { wr = Date.now(); var t = e.detail || -e.wheelDelta;
                t > 0 ? bt() : t < 0 && vt() } }

        function Nt(e) { xt(e), e.preventDefault(); var t = z(vr.wrapper.querySelectorAll(rr)).length,
                r = Math.floor(e.clientX / vr.wrapper.offsetWidth * t);
            or.rtl && (r = t - r), ge(r) }

        function qt(e) { e.preventDefault(), xt(), "linear" === or.navigationMode ? vt() : mt() }

        function Bt(e) { e.preventDefault(), xt(), "linear" === or.navigationMode ? bt() : pt() }

        function It(e) { e.preventDefault(), xt(), ft() }

        function Ot(e) { e.preventDefault(), xt(), gt() }

        function Rt(e) { e.preventDefault(), xt(), vt() }

        function Pt(e) { e.preventDefault(), xt(), bt() }

        function Dt() { Ye() }

        function Ht() { j() }

        function Ft() { var e = document.webkitHidden || document.msHidden || document.hidden;
            e === !1 && document.activeElement !== document.body && ("function" == typeof document.activeElement.blur && document.activeElement.blur(), document.body.focus()) }

        function Vt(e) { if (Mr && ae()) { e.preventDefault(); for (var t = e.target; t && !t.nodeName.match(/section/gi);) t = t.parentNode; if (t && !t.classList.contains("disabled") && (re(), t.nodeName.match(/section/gi))) { var r = parseInt(t.getAttribute("data-index-h"), 10),
                        n = parseInt(t.getAttribute("data-index-v"), 10);
                    ge(r, n) } } }

        function Ut(e) { if (e.currentTarget && e.currentTarget.hasAttribute("href")) { var t = e.currentTarget.getAttribute("href");
                t && (_(t), e.preventDefault()) } }

        function Wt() { Xt.isLastSlide() && or.loop === !1 ? (ge(0, 0), ut()) : Lr ? ut() : dt() }

        function _t(e, t) { this.diameter = 100, this.diameter2 = this.diameter / 2, this.thickness = 6, this.playing = !1, this.progress = 0, this.progressOffset = 1, this.container = e, this.progressCheck = t, this.canvas = document.createElement("canvas"), this.canvas.className = "playback", this.canvas.width = this.diameter, this.canvas.height = this.diameter, this.canvas.style.width = this.diameter2 + "px", this.canvas.style.height = this.diameter2 + "px", this.context = this.canvas.getContext("2d"), this.container.appendChild(this.canvas), this.render() }
        var Xt, Gt, Yt, jt, $t, Kt, Zt, Jt, Qt, er = "3.8.0",
            tr = ".slides section",
            rr = ".slides>section",
            nr = ".slides>section.present>section",
            ar = ".slides>section:first-of-type",
            ir = navigator.userAgent,
            or = { width: 960, height: 700, margin: .1, minScale: .2, maxScale: 2, controls: !0, controlsTutorial: !0, controlsLayout: "bottom-right", controlsBackArrows: "faded", progress: !0, slideNumber: !1, showSlideNumber: "all", hashOneBasedIndex: !1, hash: !1, history: !1, keyboard: !0, keyboardCondition: null, overview: !0, disableLayout: !1, center: !0, touch: !0, loop: !1, rtl: !1, navigationMode: "default", shuffle: !1, fragments: !0, fragmentInURL: !1, embedded: !1, help: !0, pause: !0, showNotes: !1, autoPlayMedia: null, preloadIframes: null, autoSlide: 0, autoSlideStoppable: !0, autoSlideMethod: null, defaultTiming: null, mouseWheel: !1, rollingLinks: !1, hideAddressBar: !0, previewLinks: !1, postMessage: !0, postMessageEvents: !1, focusBodyOnPageVisibilityChange: !0, transition: "default", transitionSpeed: "default", backgroundTransition: "default", parallaxBackgroundImage: "", parallaxBackgroundSize: "", parallaxBackgroundRepeat: "", parallaxBackgroundPosition: "", parallaxBackgroundHorizontal: null, parallaxBackgroundVertical: null, pdfMaxPagesPerSlide: Number.POSITIVE_INFINITY, pdfSeparateFragments: !0, pdfPageHeightOffset: -1, viewDistance: 3, display: "block", hideInactiveCursor: !0, hideCursorTime: 5e3, dependencies: [] },
            sr = !1,
            lr = !1,
            cr = !1,
            hr = null,
            dr = null,
            ur = !1,
            mr = !1,
            pr = [],
            fr = 1,
            gr = { layout: "", overview: "" },
            vr = {},
            br = {},
            yr = [],
            xr = {},
            wr = 0,
            kr = 0,
            Sr = !1,
            Ar = 0,
            Mr = !1,
            zr = 0,
            Tr = 0,
            Er = -1,
            Lr = !1,
            Cr = { startX: 0, startY: 0, startCount: 0, captured: !1, threshold: 40 },
            Nr = {},
            qr = {};
        return _t.prototype.setPlaying = function(e) { var t = this.playing;
            this.playing = e, !t && this.playing ? this.animate() : this.render() }, _t.prototype.animate = function() { var e = this.progress;
            this.progress = this.progressCheck(), e > .8 && this.progress < .2 && (this.progressOffset = this.progress), this.render(), this.playing && xr.requestAnimationFrameMethod.call(window, this.animate.bind(this)) }, _t.prototype.render = function() { var e = this.playing ? this.progress : 0,
                t = this.diameter2 - this.thickness,
                r = this.diameter2,
                n = this.diameter2,
                a = 28;
            this.progressOffset += .1 * (1 - this.progressOffset); var i = -Math.PI / 2 + e * (2 * Math.PI),
                o = -Math.PI / 2 + this.progressOffset * (2 * Math.PI);
            this.context.save(), this.context.clearRect(0, 0, this.diameter, this.diameter), this.context.beginPath(), this.context.arc(r, n, t + 4, 0, 2 * Math.PI, !1), this.context.fillStyle = "rgba( 0, 0, 0, 0.4 )", this.context.fill(), this.context.beginPath(), this.context.arc(r, n, t, 0, 2 * Math.PI, !1), this.context.lineWidth = this.thickness, this.context.strokeStyle = "rgba( 255, 255, 255, 0.2 )", this.context.stroke(), this.playing && (this.context.beginPath(), this.context.arc(r, n, t, o, i, !1), this.context.lineWidth = this.thickness, this.context.strokeStyle = "#fff", this.context.stroke()), this.context.translate(r - a / 2, n - a / 2), this.playing ? (this.context.fillStyle = "#fff", this.context.fillRect(0, 0, a / 2 - 4, a), this.context.fillRect(a / 2 + 4, 0, a / 2 - 4, a)) : (this.context.beginPath(), this.context.translate(4, 0), this.context.moveTo(0, 0), this.context.lineTo(a - 4, a / 2), this.context.lineTo(0, a), this.context.fillStyle = "#fff", this.context.fill()), this.context.restore() }, _t.prototype.on = function(e, t) { this.canvas.addEventListener(e, t, !1) }, _t.prototype.off = function(e, t) { this.canvas.removeEventListener(e, t, !1) }, _t.prototype.destroy = function() { this.playing = !1, this.canvas.parentNode && this.container.removeChild(this.canvas) }, Xt = { VERSION: er, initialize: e, configure: v, sync: ve, syncSlide: be, syncFragments: ye, slide: ge, left: mt, right: pt, up: ft, down: gt, prev: vt, next: bt, navigateFragment: ot, prevFragment: lt, nextFragment: st, navigateTo: ge, navigateLeft: mt, navigateRight: pt, navigateUp: ft, navigateDown: gt, navigatePrev: vt, navigateNext: bt, layout: j, shuffle: ke, availableRoutes: Pe, availableFragments: De, toggleHelp: X, toggleOverview: ne, togglePause: ue, toggleAutoSlide: pe, isOverview: ae, isPaused: me, isAutoSliding: fe, isSpeakerNotes: Ge, loadSlide: Oe, unloadSlide: Re, addEventListeners: b, removeEventListeners: y, getState: rt, setState: nt, getSlidePastCount: _e, getProgress: Xe, getIndices: $e, getSlides: Ke, getSlidesAttributes: Ze, getTotalSlides: Je, getSlide: Qe, getSlideBackground: et, getSlideNotes: tt, getPreviousSlide: function() { return jt }, getCurrentSlide: function() { return $t }, getScale: function() { return fr }, getConfig: function() { return or }, getQueryHash: function() { var e = {};
                location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi, function(t) { e[t.split("=").shift()] = t.split("=").pop() }); for (var t in e) { var r = e[t];
                    e[t] = T(unescape(r)) } return e }, getRevealElement: function() { return vr.wrapper || document.querySelector(".reveal") }, getPlugins: function() { return br }, isFirstSlide: function() { return 0 === Gt && 0 === Yt }, isLastSlide: function() { return !!$t && (!$t.nextElementSibling && (!oe($t) || !$t.parentNode.nextElementSibling)) }, isLastVerticalSlide: function() { return !(!$t || !oe($t)) && !$t.nextElementSibling }, isReady: function() { return lr }, addEventListener: function(e, t, r) { "addEventListener" in window && Xt.getRevealElement().addEventListener(e, t, r) }, removeEventListener: function(e, t, r) { "addEventListener" in window && Xt.getRevealElement().removeEventListener(e, t, r) }, addKeyBinding: S, removeKeyBinding: A, registerPlugin: x, hasPlugin: w, getPlugin: k, triggerKey: function(e) { St({ keyCode: e }) }, registerKeyboardShortcut: function(e, t) { Nr[e] = t } }
    }), SL("deck").Animation = { init: function() { this.animationListeners = [], this.animationsEnabled = !0, this.run = this.run.bind(this), this.reset = this.reset.bind(this), this.toggle = this.toggle.bind(this), this.onSlideChanged = this.onSlideChanged.bind(this), Reveal.addEventListener("slidechanged", this.onSlideChanged), this.revealElement = document.querySelector(".reveal"), this.interactiveAnimationChanged = new signals.Signal }, sync: function() { this.animationsEnabled ? this.enableAnimations() : this.disableAnimations() }, enableAnimations: function() { this.animationsEnabled = !0, this.revealElement.classList.remove("block-animations-disabled"), this.reset(this.revealElement); var e = Reveal.getCurrentSlide();
            this.fastForwardAnimation(e, function() { this.run(e), this.bind(e) }.bind(this)) }, disableAnimations: function() { this.animationsEnabled = !1, this.revealElement.classList.add("block-animations-disabled"), this.unbind(), this.fastForwardAnimation(this.revealElement) }, getAnimationTargets: function(e) { return e instanceof Array ? e : e.hasAttribute("data-animation-type") ? [e] : [].slice.call(e.querySelectorAll("[data-animation-type]")) }, getInteractiveAnimationTargets: function(e, t) { var r = t ? ".animate" : ""; return [].slice.call(e.querySelectorAll(['[data-animation-trigger="click"]', '[data-animation-trigger="hover"]'].join(r + ",") + r)) }, run: function(e, t) { this.getAnimationTargets(e).forEach(function(e) {!t && this.hasInteractiveAnimationTrigger(e) || e.classList.add("animate") }.bind(this)) }, toggle: function(e, t) { this.getAnimationTargets(e).forEach(function(e) {!t && this.hasInteractiveAnimationTrigger(e) || e.classList.toggle("animate") }.bind(this)) }, reset: function(e) { this.getAnimationTargets(e).forEach(function(e) { e.classList.remove("animate") }.bind(this)) }, preview: function(e) { this.animationsEnabled === !1 && this.revealElement.classList.remove("block-animations-disabled"), this.getAnimationTargets(e).forEach(function(e) { e.classList.remove("animate"), this.fastForwardAnimation(e, function() { e.classList.add("animate"), this.animationsEnabled === !1 && this.revealElement.classList.add("block-animations-disabled") }.bind(this)) }.bind(this)) }, bind: function(e) { this.unbind(), this.getAnimationTargets(e).forEach(function(t) { if (this.hasInteractiveAnimationTrigger(t)) { var r = t.getAttribute("data-animation-trigger-id"),
                        n = "self" === r ? t : e.querySelector('.sl-block[data-block-id="' + r + '"] .sl-block-content'); if (n) { var a = t.getAttribute("data-animation-trigger"); "click" === a ? (this.addAnimationEventListener(n, "touchstart", this.onTriggerTouchStart.bind(this, t)), this.addAnimationEventListener(n, "click", this.onTriggerClick.bind(this, t))) : "hover" === a && (this.addAnimationEventListener(n, "mouseover", this.onTriggerMouseOver.bind(this, t)), this.addAnimationEventListener(n, "mouseout", this.onTriggerMouseOut.bind(this, t))) } } }.bind(this)) }, addAnimationEventListener: function(e, t, r) { e.addEventListener(t, r), /click|touchstart/gi.test(t) && e.classList.add("animation-trigger"), this.animationListeners.push([e, t, r]) }, unbind: function() { this.animationListeners.forEach(function(e) { var t = e[0],
                    r = e[1],
                    n = e[2]; /click|touchstart/gi.test(r) && t.classList.remove("animation-trigger"), t.removeEventListener(r, n) }), this.animationListeners.length = 0 }, hasInteractiveAnimationTrigger: function(e) { return /click|hover/gi.test(e.getAttribute("data-animation-trigger")) }, fastForwardAnimation: function(e, t) { e.classList.add("no-transition"), setTimeout(function() { e.classList.remove("no-transition"), "function" == typeof t && t() }, 1) }, getSerializedInteractiveState: function() { return this.getInteractiveAnimationTargets(Reveal.getCurrentSlide(), !0).map(function(e) { var t = this.getParentBlock(e); return t ? t.getAttribute("data-block-id") : null }, this).filter(function(e) { return "string" == typeof e }).join(",") }, setSerializedInteractiveState: function(e) { var t = this.getInteractiveAnimationTargets(Reveal.getCurrentSlide()); if (t.length && "string" == typeof e) { e = e.split(","); var r = [],
                    n = [];
                t.forEach(function(t) { var a = this.getParentBlock(t),
                        i = a ? a.getAttribute("data-block-id") : null; "string" == typeof i && e.indexOf(i) !== -1 ? n.push(t) : r.push(t) }, this), this.reset(r), this.run(n, !0) } }, getParentBlock: function(e) { for (var t = e.parentNode; t && !t.hasAttribute("data-block-id");) t = t.parentNode; return t }, onSlideChanged: function(e) { this.animationsEnabled && (e.previousSlide && (this.reset(e.previousSlide), this.unbind()), e.currentSlide && (this.run(e.currentSlide), this.bind(e.currentSlide))) }, onTriggerTouchStart: function(e, t) { t.preventDefault(), this.toggle(e, !0), this.interactiveAnimationChanged.dispatch() }, onTriggerClick: function(e) { Reveal.isAutoSliding() && Reveal.getConfig().autoSlideStoppable && Reveal.toggleAutoSlide(!1), this.toggle(e, !0), this.interactiveAnimationChanged.dispatch() }, onTriggerMouseOver: function(e) { this.run(e, !0), this.interactiveAnimationChanged.dispatch() }, onTriggerMouseOut: function(e) { this.reset(e), this.interactiveAnimationChanged.dispatch() } }, SL("deck").Controller = { MODE_VIEWING: "viewing", MODE_EDITING: "editing", MODE_PRINTING: "printing", init: function(e) { this.options = e || {}, this.mode = null, Reveal.isReady() ? this.setup() : Reveal.addEventListener("ready", this.setup.bind(this)) }, setup: function() { SL.deck.Animation.init(), this.setMode(this.options.mode || SL.deck.Controller.MODE_VIEWING) }, setMode: function(e) { this.mode = e, this.mode === SL.deck.Controller.MODE_EDITING || this.mode === SL.deck.Controller.MODE_PRINTING ? SL.deck.Animation.disableAnimations() : SL.deck.Animation.enableAnimations() } }, SL("deck").util = { renderMath: function(e) { SL.deck.util.renderMathBlocks(e), SL.deck.util.renderInlineMath(e) }, renderMathBlocks: function(e) { e || (e = document.querySelector(".reveal .slides")), window.katex && "function" == typeof window.katex.render && [].slice.call(e.querySelectorAll('.sl-block[data-block-type="math"]')).forEach(function(e) { var t = e.querySelector(".math-input"),
                    r = e.querySelector(".math-output");
                t && !r && (r = document.createElement("div"), r.className = "math-output", t.parentNode.insertBefore(r, t)), t && r && katex.render(t.innerText, r) }) }, renderInlineMath: function(e) { e || (e = document.querySelector(".reveal .slides")), "function" == typeof window.renderMathInElement && SL.deck.util.containsInlineMath(e) && renderMathInElement(e, { delimiters: [{ left: "$$", right: "$$", display: !0 }, { left: "\\[", right: "\\]", display: !0 }, { left: "\\(", right: "\\)", display: !1 }] }) }, containsInlineMath: function(e) { return !!e && /\$\$.+\$\$|\\\[.+\\\]|\\\(.+\\\)/g.test(e.innerHTML) }, injectCodeCopyButtons: function() { var e = [].slice.call(document.querySelectorAll('.sl-block[data-block-type="code"] .sl-block-content:not(.has-copy-button)'));
            e.length && (this.copyButton = document.createElement("button"), this.copyButton.className = "copy-code-to-clipboard", this.copyButton.textContent = "Copy", this.copyButton.addEventListener("click", function() { this.copyButton.hasAttribute("data-code-to-copy") && (this.copyButton.textContent = "Copied!", this.copyButton.classList.add("bounce"), SL.deck.util.copyToClipboard(this.copyButton.getAttribute("data-code-to-copy")), setTimeout(function() { this.copyButton.textContent = "Copy", this.copyButton.classList.remove("bounce") }.bind(this), 1500)) }.bind(this)), e.forEach(function(e) { var t, r = e.querySelector("pre code");
                r && (t = r.textContent), t && e.addEventListener("mouseenter", function(e) { this.copyButton.setAttribute("data-code-to-copy", t), e.currentTarget.classList.add("has-copy-button"), e.currentTarget.appendChild(this.copyButton) }.bind(this)) }, this)) }, hasNotes: function() { if (SLConfig.deck && SLConfig.deck.notes)
                for (var e in SLConfig.deck.notes) return !0; return document.querySelectorAll(".reveal .slides section[data-notes]").length > 0 }, injectNotes: function() { SLConfig.deck && SLConfig.deck.notes && [].forEach.call(document.querySelectorAll(".reveal .slides section"), function(e) { var t = SLConfig.deck.notes[e.getAttribute("data-id")];
                t && "string" == typeof t && e.setAttribute("data-notes", t) }) }, copyToClipboard: function(e) { var t = document.createElement("textarea");
            t.value = e, document.body.appendChild(t), t.select(); var r = document.execCommand("copy"); return document.body.removeChild(t), r } };
