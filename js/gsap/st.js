
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
! function(a) {
    "use strict";
    var b = a.GreenSockGlobals || a,
        c = function(a) {
            var e, c = a.split("."),
                d = b;
            for (e = 0; e < c.length; e++) d[c[e]] = d = d[c[e]] || {};

            return d
        },
        d = c("com.greensock.utils"),
        e = function(a) {
            var b = a.nodeType,
                c = "";
            if (1 === b || 9 === b || 11 === b) {
                if ("string" == typeof a.textContent) return a.textContent;
                for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
            } else if (3 === b || 4 === b) return a.nodeValue;
            return c
        },
        f = document,
        g = f.defaultView ? f.defaultView.getComputedStyle : function() {},
        h = /([A-Z])/g,
        i = function(a, b, c, d) {
            var e;
            return (c = c || g(a, null)) ? (a = c.getPropertyValue(b.replace(h, "-$1").toLowerCase()), e = a || c.length ? a : c[b]) : a.currentStyle && (c = a.currentStyle, e = c[b]), d ? e : parseInt(e, 10) || 0
        },
        j = function(a) {
            return a.length && a[0] && (a[0].nodeType && a[0].style && !a.nodeType || a[0].length && a[0][0]) ? !0 : !1
        },
        k = function(a) {
            var d, e, f, b = [],
                c = a.length;
            for (d = 0; c > d; d++)
                if (e = a[d], j(e))
                    for (f = e.length, f = 0; f < e.length; f++) b.push(e[f]);
                else b.push(e);
            return b
        },
        l = ")eefec303079ad17405c",
        m = /(?:<br>|<br\/>|<br \/>)/gi,
        n = f.all && !f.addEventListener,
        o = "<div style='position:relative;display:inline-block;" + (n ? "*display:inline;*zoom:1;'" : "'"),
        p = function(a) {
            a = a || "";
            var b = -1 !== a.indexOf("++"),
                c = 1;
            return b && (a = a.split("++").join("")),
                function() {
                    return o + (a ? " class='" + a + (b ? c++ : "") + "'>" : ">")
                }
        },
        q = "",
        r = "SplitText",
        s = "",
        t = "",
        u = function(b) {
            for (var c = -1 !== (a ? a.location.href : "").indexOf(String.fromCharCode(103, 114, 101, 101, 110, 115, 111, 99, 107)) && -1 !== b.indexOf(String.fromCharCode(108, 111, 99, 97, 108, 104, 111, 115, 116)), d = [s, String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 105, 111), String.fromCharCode(99, 100, 112, 110, 46, 105, 111), String.fromCharCode(103, 97, 110, 110, 111, 110, 46, 116, 118), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116), String.fromCharCode(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116), String.fromCharCode(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107), String.fromCharCode(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116), String.fromCharCode(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109), String.fromCharCode(116, 119, 101, 101, 110, 108, 105, 116, 101, 46, 99, 111, 109), String.fromCharCode(112, 108, 110, 107, 114, 46, 99, 111), String.fromCharCode(104, 111, 116, 106, 97, 114, 46, 99, 111, 109), String.fromCharCode(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116)], e = d.length; --e > -1;)
                if (-1 !== b.indexOf(d[e])) return !0;
            return c && a && a.console && console.log(String.fromCharCode(87, 65, 82, 78, 73, 78, 71, 58, 32, 97, 32, 115, 112, 101, 99, 105, 97, 108, 32, 118, 101, 114, 115, 105, 111, 110, 32, 111, 102, 32) + r + String.fromCharCode(32, 105, 115, 32, 114, 117, 110, 110, 105, 110, 103, 32, 108, 111, 99, 97, 108, 108, 121, 44, 32, 98, 117, 116, 32, 105, 116, 32, 119, 105, 108, 108, 32, 110, 111, 116, 32, 119, 111, 114, 107, 32, 111, 110, 32, 97, 32, 108, 105, 118, 101, 32, 100, 111, 109, 97, 105, 110, 32, 98, 101, 99, 97, 117, 115, 101, 32, 105, 116, 32, 105, 115, 32, 97, 32, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 32, 98, 101, 110, 101, 102, 105, 116, 32, 111, 102, 32, 67, 108, 117, 98, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 46, 32, 80, 108, 101, 97, 115, 101, 32, 115, 105, 103, 110, 32, 117, 112, 32, 97, 116, 32, 104, 116, 116, 112, 58, 47, 47, 103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109, 47, 99, 108, 117, 98, 47, 32, 97, 110, 100, 32, 116, 104, 101, 110, 32, 100, 111, 119, 110, 108, 111, 97, 100, 32, 116, 104, 101, 32, 39, 114, 101, 97, 108, 39, 32, 118, 101, 114, 115, 105, 111, 110, 32, 102, 114, 111, 109, 32, 121, 111, 117, 114, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 32, 97, 99, 99, 111, 117, 110, 116, 32, 119, 104, 105, 99, 104, 32, 104, 97, 115, 32, 110, 111, 32, 115, 117, 99, 104, 32, 108, 105, 109, 105, 116, 97, 116, 105, 111, 110, 115, 46, 32, 84, 104, 101, 32, 102, 105, 108, 101, 32, 121, 111, 117, 39, 114, 101, 32, 117, 115, 105, 110, 103, 32, 119, 97, 115, 32, 108, 105, 107, 101, 108, 121, 32, 100, 111, 119, 110, 108, 111, 97, 100, 101, 100, 32, 102, 114, 111, 109, 32, 101, 108, 115, 101, 119, 104, 101, 114, 101, 32, 111, 110, 32, 116, 104, 101, 32, 119, 101, 98, 32, 97, 110, 100, 32, 105, 115, 32, 114, 101, 115, 116, 114, 105, 99, 116, 101, 100, 32, 116, 111, 32, 108, 111, 99, 97, 108, 32, 117, 115, 101, 32, 111, 114, 32, 111, 110, 32, 115, 105, 116, 101, 115, 32, 108, 105, 107, 101, 32, 99, 111, 100, 101, 112, 101, 110, 46, 105, 111, 46)), c
        }(a ? a.location.host : ""),
        v = d.SplitText = b.SplitText = function(b, c) {
            if ("string" == typeof b && (b = v.selector(b)), !b) throw "cannot split a null element.";
            return u ? (this.elements = j(b) ? k(b) : [b], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = c || {}, this.split(c), void 0) : (a.location.href = "http://" + s + t + "?plugin=" + r + "&source=" + q, !1)
        },
        w = function(a, b, c) {
            var d = a.nodeType;
            if (1 === d || 9 === d || 11 === d)
                for (a = a.firstChild; a; a = a.nextSibling) w(a, b, c);
            else(3 === d || 4 === d) && (a.nodeValue = a.nodeValue.split(b).join(c))
        },
        x = function(a, b) {
            for (var c = b.length; --c > -1;) a.push(b[c])
        },
        y = function(a, b, c, d, h) {
            m.test(a.innerHTML) && (a.innerHTML = a.innerHTML.replace(m, l));
            var P, Q, R, S, T, U, V, W, X, Y, Z, $, _, ab, j = e(a),
                k = b.type || b.split || "chars,words,lines",
                n = -1 !== k.indexOf("lines") ? [] : null,
                o = -1 !== k.indexOf("words"),
                q = -1 !== k.indexOf("chars"),
                r = "absolute" === b.position || b.absolute === !0,
                s = r ? "&#173; " : " ",
                t = -999,
                u = g(a),
                v = i(a, "paddingLeft", u),
                y = i(a, "borderBottomWidth", u) + i(a, "borderTopWidth", u),
                z = i(a, "borderLeftWidth", u) + i(a, "borderRightWidth", u),
                A = i(a, "paddingTop", u) + i(a, "paddingBottom", u),
                B = i(a, "paddingLeft", u) + i(a, "paddingRight", u),
                C = i(a, "textAlign", u, !0),
                D = a.clientHeight,
                E = a.clientWidth,
                F = "</div>",
                G = p(b.wordsClass),
                H = p(b.charsClass),
                I = -1 !== (b.linesClass || "").indexOf("++"),
                J = b.linesClass,
                K = -1 !== j.indexOf("<"),
                L = !0,
                M = [],
                N = [],
                O = [];
            for (I && (J = J.split("++").join("")), K && (j = j.split("<").join("{{LT}}")), P = j.length, S = G(), T = 0; P > T; T++)
                if (V = j.charAt(T), ")" === V && j.substr(T, 20) === l) S += (L ? F : "") + "<BR/>", L = !1, T !== P - 20 && j.substr(T + 20, 20) !== l && (S += " " + G(), L = !0), T += 19;
                else if (" " === V && " " !== j.charAt(T - 1) && T !== P - 1 && j.substr(T - 20, 20) !== l) {
                for (S += L ? F : "", L = !1;
                    " " === j.charAt(T + 1);) S += s, T++;
                (")" !== j.charAt(T + 1) || j.substr(T + 1, 20) !== l) && (S += s + G(), L = !0)
            } else S += q && " " !== V ? H() + V + "</div>" : V;
            for (a.innerHTML = S + (L ? F : ""), K && w(a, "{{LT}}", "<"), U = a.getElementsByTagName("*"), P = U.length, W = [], T = 0; P > T; T++) W[T] = U[T];
            if (n || r)
                for (T = 0; P > T; T++) X = W[T], R = X.parentNode === a, (R || r || q && !o) && (Y = X.offsetTop, n && R && Y !== t && "BR" !== X.nodeName && (Q = [], n.push(Q), t = Y), r && (X._x = X.offsetLeft, X._y = Y, X._w = X.offsetWidth, X._h = X.offsetHeight), n && (o !== R && q || (Q.push(X), X._x -= v), R && T && (W[T - 1]._wordEnd = !0), "BR" === X.nodeName && X.nextSibling && "BR" === X.nextSibling.nodeName && n.push([])));
            for (T = 0; P > T; T++) X = W[T], R = X.parentNode === a, "BR" !== X.nodeName ? (r && ($ = X.style, o || R || (X._x += X.parentNode._x, X._y += X.parentNode._y), $.left = X._x + "px", $.top = X._y + "px", $.position = "absolute", $.display = "block", $.width = X._w + 1 + "px", $.height = X._h + "px"), o ? R && "" !== X.innerHTML ? N.push(X) : q && M.push(X) : R ? (a.removeChild(X), W.splice(T--, 1), P--) : !R && q && (Y = !n && !r && X.nextSibling, a.appendChild(X), Y || a.appendChild(f.createTextNode(" ")), M.push(X))) : n || r ? (a.removeChild(X), W.splice(T--, 1), P--) : o || a.appendChild(X);
            if (n) {
                for (r && (Z = f.createElement("div"), a.appendChild(Z), _ = Z.offsetWidth + "px", Y = Z.offsetParent === a ? 0 : a.offsetLeft, a.removeChild(Z)), $ = a.style.cssText, a.style.cssText = "display:none;"; a.firstChild;) a.removeChild(a.firstChild);
                for (ab = !r || !o && !q, T = 0; T < n.length; T++) {
                    for (Q = n[T], Z = f.createElement("div"), Z.style.cssText = "display:block;text-align:" + C + ";position:" + (r ? "absolute;" : "relative;"), J && (Z.className = J + (I ? T + 1 : "")), O.push(Z), P = Q.length, U = 0; P > U; U++) "BR" !== Q[U].nodeName && (X = Q[U], Z.appendChild(X), ab && (X._wordEnd || o) && Z.appendChild(f.createTextNode(" ")), r && (0 === U && (Z.style.top = X._y + "px", Z.style.left = v + Y + "px"), X.style.top = "0px", Y && (X.style.left = X._x - Y + "px")));
                    0 === P && (Z.innerHTML = "&nbsp;"), o || q || (Z.innerHTML = e(Z).split(String.fromCharCode(160)).join(" ")), r && (Z.style.width = _, Z.style.height = X._h + "px"), a.appendChild(Z)
                }
                a.style.cssText = $
            }
            r && (D > a.clientHeight && (a.style.height = D - A + "px", a.clientHeight < D && (a.style.height = D + y + "px")), E > a.clientWidth && (a.style.width = E - B + "px", a.clientWidth < E && (a.style.width = E + z + "px"))), x(c, M), x(d, N), x(h, O)
        },
        z = v.prototype;
    z.split = function(a) {
        this.isSplit && this.revert(), this.vars = a || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
        for (var b = this.elements.length; --b > -1;) this._originals[b] = this.elements[b].innerHTML, y(this.elements[b], this.vars, this.chars, this.words, this.lines);
        return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
    }, z.revert = function() {
        if (!this._originals) throw "revert() call wasn't scoped properly.";
        for (var a = this._originals.length; --a > -1;) this.elements[a].innerHTML = this._originals[a];
        return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
    }, v.selector = a.$ || a.jQuery || function(b) {
        var c = a.$ || a.jQuery;
        return c ? (v.selector = c, c(b)) : "undefined" == typeof document ? b : document.querySelectorAll ? document.querySelectorAll(b) : document.getElementById("#" === b.charAt(0) ? b.substr(1) : b)
    }, v.version = "0.3.3"
}(_gsScope),
function(a) {
    "use strict";
    var b = function() {
        return (_gsScope.GreenSockGlobals || _gsScope)[a]
    };
    "function" == typeof define && define.amd ? define(["TweenLite"], b) : "undefined" != typeof module && module.exports && (module.exports = b())
}("SplitText");