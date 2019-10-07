var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) {
    "use strict";
    "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");return t(e);
    } : t(e);
}("undefined" != typeof window ? window : this, function (C, e) {
    "use strict";
    var t = [],
        E = C.document,
        r = Object.getPrototypeOf,
        s = t.slice,
        g = t.concat,
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        v = n.hasOwnProperty,
        a = v.toString,
        l = a.call(Object),
        y = {},
        m = function m(e) {
        return "function" == typeof e && "number" != typeof e.nodeType;
    },
        x = function x(e) {
        return null != e && e === e.window;
    },
        c = { type: !0, src: !0, nonce: !0, noModule: !0 };function b(e, t, n) {
        var r,
            i,
            o = (n = n || E).createElement("script");if (o.text = e, t) for (r in c) {
            (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        }n.head.appendChild(o).parentNode.removeChild(o);
    }function w(e) {
        return null == e ? e + "" : "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e ? n[o.call(e)] || "object" : typeof e === "undefined" ? "undefined" : _typeof(e);
    }var f = "3.4.1",
        k = function k(e, t) {
        return new k.fn.init(e, t);
    },
        p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
    }k.fn = k.prototype = { jquery: f, constructor: k, length: 0, toArray: function toArray() {
            return s.call(this);
        }, get: function get(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
        }, pushStack: function pushStack(e) {
            var t = k.merge(this.constructor(), e);return t.prevObject = this, t;
        }, each: function each(e) {
            return k.each(this, e);
        }, map: function map(n) {
            return this.pushStack(k.map(this, function (e, t) {
                return n.call(e, t, e);
            }));
        }, slice: function slice() {
            return this.pushStack(s.apply(this, arguments));
        }, first: function first() {
            return this.eq(0);
        }, last: function last() {
            return this.eq(-1);
        }, eq: function eq(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);return this.pushStack(0 <= n && n < t ? [this[n]] : []);
        }, end: function end() {
            return this.prevObject || this.constructor();
        }, push: u, sort: t.sort, splice: t.splice }, k.extend = k.fn.extend = function () {
        var e,
            t,
            n,
            r,
            i,
            o,
            a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++) {
            if (null != (e = arguments[s])) for (t in e) {
                r = e[t], "__proto__" !== t && a !== r && (l && r && (k.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || k.isPlainObject(n) ? n : {}, i = !1, a[t] = k.extend(l, o, r)) : void 0 !== r && (a[t] = r));
            }
        }return a;
    }, k.extend({ expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(e) {
            throw new Error(e);
        }, noop: function noop() {}, isPlainObject: function isPlainObject(e) {
            var t, n;return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l);
        }, isEmptyObject: function isEmptyObject(e) {
            var t;for (t in e) {
                return !1;
            }return !0;
        }, globalEval: function globalEval(e, t) {
            b(e, { nonce: t && t.nonce });
        }, each: function each(e, t) {
            var n,
                r = 0;if (d(e)) {
                for (n = e.length; r < n; r++) {
                    if (!1 === t.call(e[r], r, e[r])) break;
                }
            } else for (r in e) {
                if (!1 === t.call(e[r], r, e[r])) break;
            }return e;
        }, trim: function trim(e) {
            return null == e ? "" : (e + "").replace(p, "");
        }, makeArray: function makeArray(e, t) {
            var n = t || [];return null != e && (d(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n;
        }, inArray: function inArray(e, t, n) {
            return null == t ? -1 : i.call(t, e, n);
        }, merge: function merge(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
                e[i++] = t[r];
            }return e.length = i, e;
        }, grep: function grep(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) {
                !t(e[i], i) !== a && r.push(e[i]);
            }return r;
        }, map: function map(e, t, n) {
            var r,
                i,
                o = 0,
                a = [];if (d(e)) for (r = e.length; o < r; o++) {
                null != (i = t(e[o], o, n)) && a.push(i);
            } else for (o in e) {
                null != (i = t(e[o], o, n)) && a.push(i);
            }return g.apply([], a);
        }, guid: 1, support: y }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
    });var h = function (n) {
        var e,
            d,
            b,
            o,
            i,
            h,
            f,
            g,
            w,
            u,
            l,
            T,
            C,
            a,
            E,
            v,
            s,
            c,
            y,
            k = "sizzle" + 1 * new Date(),
            m = n.document,
            S = 0,
            r = 0,
            p = ue(),
            x = ue(),
            N = ue(),
            A = ue(),
            D = function D(e, t) {
            return e === t && (l = !0), 0;
        },
            j = {}.hasOwnProperty,
            t = [],
            q = t.pop,
            L = t.push,
            H = t.push,
            O = t.slice,
            P = function P(e, t) {
            for (var n = 0, r = e.length; n < r; n++) {
                if (e[n] === t) return n;
            }return -1;
        },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
            $ = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            F = new RegExp(M + "+", "g"),
            B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            _ = new RegExp("^" + M + "*," + M + "*"),
            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp(M + "|>"),
            X = new RegExp($),
            V = new RegExp("^" + I + "$"),
            G = { ID: new RegExp("^#(" + I + ")"), CLASS: new RegExp("^\\.(" + I + ")"), TAG: new RegExp("^(" + I + "|[*])"), ATTR: new RegExp("^" + W), PSEUDO: new RegExp("^" + $), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + R + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            ne = function ne(e, t, n) {
            var r = "0x" + t - 65536;return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
        },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function ie(e, t) {
            return t ? "\0" === e ? "\uFFFD" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
        },
            oe = function oe() {
            T();
        },
            ae = be(function (e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        }, { dir: "parentNode", next: "legend" });try {
            H.apply(t = O.call(m.childNodes), m.childNodes), t[m.childNodes.length].nodeType;
        } catch (e) {
            H = { apply: t.length ? function (e, t) {
                    L.apply(e, O.call(t));
                } : function (e, t) {
                    var n = e.length,
                        r = 0;while (e[n++] = t[r++]) {}e.length = n - 1;
                } };
        }function se(t, e, n, r) {
            var i,
                o,
                a,
                s,
                u,
                l,
                c,
                f = e && e.ownerDocument,
                p = e ? e.nodeType : 9;if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;if (!r && ((e ? e.ownerDocument || e : m) !== C && T(e), e = e || C, E)) {
                if (11 !== p && (u = Z.exec(t))) if (i = u[1]) {
                    if (9 === p) {
                        if (!(a = e.getElementById(i))) return n;if (a.id === i) return n.push(a), n;
                    } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n;
                } else {
                    if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n;
                }if (d.qsa && !A[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t, f = e, 1 === p && U.test(t)) {
                        (s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = k), o = (l = h(t)).length;while (o--) {
                            l[o] = "#" + s + " " + xe(l[o]);
                        }c = l.join(","), f = ee.test(t) && ye(e.parentNode) || e;
                    }try {
                        return H.apply(n, f.querySelectorAll(c)), n;
                    } catch (e) {
                        A(t, !0);
                    } finally {
                        s === k && e.removeAttribute("id");
                    }
                }
            }return g(t.replace(B, "$1"), e, n, r);
        }function ue() {
            var r = [];return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n;
            };
        }function le(e) {
            return e[k] = !0, e;
        }function ce(e) {
            var t = C.createElement("fieldset");try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null;
            }
        }function fe(e, t) {
            var n = e.split("|"),
                r = n.length;while (r--) {
                b.attrHandle[n[r]] = t;
            }
        }function pe(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;if (r) return r;if (n) while (n = n.nextSibling) {
                if (n === t) return -1;
            }return e ? 1 : -1;
        }function de(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t;
            };
        }function he(n) {
            return function (e) {
                var t = e.nodeName.toLowerCase();return ("input" === t || "button" === t) && e.type === n;
            };
        }function ge(t) {
            return function (e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t;
            };
        }function ve(a) {
            return le(function (o) {
                return o = +o, le(function (e, t) {
                    var n,
                        r = a([], e.length, o),
                        i = r.length;while (i--) {
                        e[n = r[i]] && (e[n] = !(t[n] = e[n]));
                    }
                });
            });
        }function ye(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e;
        }for (e in d = se.support = {}, i = se.isXML = function (e) {
            var t = e.namespaceURI,
                n = (e.ownerDocument || e).documentElement;return !Y.test(t || n && n.nodeName || "HTML");
        }, T = se.setDocument = function (e) {
            var t,
                n,
                r = e ? e.ownerDocument || e : m;return r !== C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), m !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.attributes = ce(function (e) {
                return e.className = "i", !e.getAttribute("className");
            }), d.getElementsByTagName = ce(function (e) {
                return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length;
            }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
                return a.appendChild(e).id = k, !C.getElementsByName || !C.getElementsByName(k).length;
            }), d.getById ? (b.filter.ID = function (e) {
                var t = e.replace(te, ne);return function (e) {
                    return e.getAttribute("id") === t;
                };
            }, b.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);return n ? [n] : [];
                }
            }) : (b.filter.ID = function (e) {
                var n = e.replace(te, ne);return function (e) {
                    var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");return t && t.value === n;
                };
            }, b.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n,
                        r,
                        i,
                        o = t.getElementById(e);if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];i = t.getElementsByName(e), r = 0;while (o = i[r++]) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        }
                    }return [];
                }
            }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0;
            } : function (e, t) {
                var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);if ("*" === e) {
                    while (n = o[i++]) {
                        1 === n.nodeType && r.push(n);
                    }return r;
                }return o;
            }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e);
            }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
                a.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + k + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + k + "+*").length || v.push(".#.+[+~]");
            }), ce(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t = C.createElement("input");t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:");
            })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
                d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", $);
            }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
            } : function (e, t) {
                if (t) while (t = t.parentNode) {
                    if (t === e) return !0;
                }return !1;
            }, D = t ? function (e, t) {
                if (e === t) return l = !0, 0;var n = !e.compareDocumentPosition - !t.compareDocumentPosition;return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === m && y(m, e) ? -1 : t === C || t.ownerDocument === m && y(m, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1);
            } : function (e, t) {
                if (e === t) return l = !0, 0;var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];if (!i || !o) return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;if (i === o) return pe(e, t);n = e;while (n = n.parentNode) {
                    a.unshift(n);
                }n = t;while (n = n.parentNode) {
                    s.unshift(n);
                }while (a[r] === s[r]) {
                    r++;
                }return r ? pe(a[r], s[r]) : a[r] === m ? -1 : s[r] === m ? 1 : 0;
            }), C;
        }, se.matches = function (e, t) {
            return se(e, null, null, t);
        }, se.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== C && T(e), d.matchesSelector && E && !A[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
                var n = c.call(e, t);if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
            } catch (e) {
                A(t, !0);
            }return 0 < se(t, C, null, [e]).length;
        }, se.contains = function (e, t) {
            return (e.ownerDocument || e) !== C && T(e), y(e, t);
        }, se.attr = function (e, t) {
            (e.ownerDocument || e) !== C && T(e);var n = b.attrHandle[t.toLowerCase()],
                r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        }, se.escape = function (e) {
            return (e + "").replace(re, ie);
        }, se.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }, se.uniqueSort = function (e) {
            var t,
                n = [],
                r = 0,
                i = 0;if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) {
                while (t = e[i++]) {
                    t === e[i] && (r = n.push(i));
                }while (r--) {
                    e.splice(n[r], 1);
                }
            }return u = null, e;
        }, o = se.getText = function (e) {
            var t,
                n = "",
                r = 0,
                i = e.nodeType;if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;for (e = e.firstChild; e; e = e.nextSibling) {
                        n += o(e);
                    }
                } else if (3 === i || 4 === i) return e.nodeValue;
            } else while (t = e[r++]) {
                n += o(t);
            }return n;
        }, (b = se.selectors = { cacheLength: 50, createPseudo: le, match: G, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(e) {
                    return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                }, CHILD: function CHILD(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e;
                }, PSEUDO: function PSEUDO(e) {
                    var t,
                        n = !e[6] && e[2];return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
                } }, filter: { TAG: function TAG(e) {
                    var t = e.replace(te, ne).toLowerCase();return "*" === e ? function () {
                        return !0;
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
                }, CLASS: function CLASS(e) {
                    var t = p[e + " "];return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && p(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
                    });
                }, ATTR: function ATTR(n, r, i) {
                    return function (e) {
                        var t = se.attr(e, n);return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
                    };
                }, CHILD: function CHILD(h, e, t, g, v) {
                    var y = "nth" !== h.slice(0, 3),
                        m = "last" !== h.slice(-4),
                        x = "of-type" === e;return 1 === g && 0 === v ? function (e) {
                        return !!e.parentNode;
                    } : function (e, t, n) {
                        var r,
                            i,
                            o,
                            a,
                            s,
                            u,
                            l = y !== m ? "nextSibling" : "previousSibling",
                            c = e.parentNode,
                            f = x && e.nodeName.toLowerCase(),
                            p = !n && !x,
                            d = !1;if (c) {
                            if (y) {
                                while (l) {
                                    a = e;while (a = a[l]) {
                                        if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                    }u = l = "only" === h && !u && "nextSibling";
                                }return !0;
                            }if (u = [m ? c.firstChild : c.lastChild], m && p) {
                                d = (s = (r = (i = (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]) && r[2], a = s && c.childNodes[s];while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) {
                                    if (1 === a.nodeType && ++d && a === e) {
                                        i[h] = [S, s, d];break;
                                    }
                                }
                            } else if (p && (d = s = (r = (i = (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]), !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) {
                                if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [S, d]), a === e)) break;
                            }return (d -= v) === g || d % g == 0 && 0 <= d / g;
                        }
                    };
                }, PSEUDO: function PSEUDO(e, o) {
                    var t,
                        a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);return a[k] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
                        var n,
                            r = a(e, o),
                            i = r.length;while (i--) {
                            e[n = P(e, r[i])] = !(t[n] = r[i]);
                        }
                    }) : function (e) {
                        return a(e, 0, t);
                    }) : a;
                } }, pseudos: { not: le(function (e) {
                    var r = [],
                        i = [],
                        s = f(e.replace(B, "$1"));return s[k] ? le(function (e, t, n, r) {
                        var i,
                            o = s(e, null, r, []),
                            a = e.length;while (a--) {
                            (i = o[a]) && (e[a] = !(t[a] = i));
                        }
                    }) : function (e, t, n) {
                        return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop();
                    };
                }), has: le(function (t) {
                    return function (e) {
                        return 0 < se(t, e).length;
                    };
                }), contains: le(function (t) {
                    return t = t.replace(te, ne), function (e) {
                        return -1 < (e.textContent || o(e)).indexOf(t);
                    };
                }), lang: le(function (n) {
                    return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), function (e) {
                        var t;do {
                            if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
                        } while ((e = e.parentNode) && 1 === e.nodeType);return !1;
                    };
                }), target: function target(e) {
                    var t = n.location && n.location.hash;return t && t.slice(1) === e.id;
                }, root: function root(e) {
                    return e === a;
                }, focus: function focus(e) {
                    return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                }, enabled: ge(!1), disabled: ge(!0), checked: function checked(e) {
                    var t = e.nodeName.toLowerCase();return "input" === t && !!e.checked || "option" === t && !!e.selected;
                }, selected: function selected(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                }, empty: function empty(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) {
                        if (e.nodeType < 6) return !1;
                    }return !0;
                }, parent: function parent(e) {
                    return !b.pseudos.empty(e);
                }, header: function header(e) {
                    return J.test(e.nodeName);
                }, input: function input(e) {
                    return Q.test(e.nodeName);
                }, button: function button(e) {
                    var t = e.nodeName.toLowerCase();return "input" === t && "button" === e.type || "button" === t;
                }, text: function text(e) {
                    var t;return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                }, first: ve(function () {
                    return [0];
                }), last: ve(function (e, t) {
                    return [t - 1];
                }), eq: ve(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                }), even: ve(function (e, t) {
                    for (var n = 0; n < t; n += 2) {
                        e.push(n);
                    }return e;
                }), odd: ve(function (e, t) {
                    for (var n = 1; n < t; n += 2) {
                        e.push(n);
                    }return e;
                }), lt: ve(function (e, t, n) {
                    for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) {
                        e.push(r);
                    }return e;
                }), gt: ve(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) {
                        e.push(r);
                    }return e;
                }) } }).pseudos.nth = b.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
            b.pseudos[e] = de(e);
        }for (e in { submit: !0, reset: !0 }) {
            b.pseudos[e] = he(e);
        }function me() {}function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) {
                r += e[t].value;
            }return r;
        }function be(s, e, t) {
            var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && "parentNode" === c,
                p = r++;return e.first ? function (e, t, n) {
                while (e = e[u]) {
                    if (1 === e.nodeType || f) return s(e, t, n);
                }return !1;
            } : function (e, t, n) {
                var r,
                    i,
                    o,
                    a = [S, p];if (n) {
                    while (e = e[u]) {
                        if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
                    }
                } else while (e = e[u]) {
                    if (1 === e.nodeType || f) if (i = (o = e[k] || (e[k] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;else {
                        if ((r = i[c]) && r[0] === S && r[1] === p) return a[2] = r[2];if ((i[c] = a)[2] = s(e, t, n)) return !0;
                    }
                }return !1;
            };
        }function we(i) {
            return 1 < i.length ? function (e, t, n) {
                var r = i.length;while (r--) {
                    if (!i[r](e, t, n)) return !1;
                }return !0;
            } : i[0];
        }function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) {
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            }return a;
        }function Ce(d, h, g, v, y, e) {
            return v && !v[k] && (v = Ce(v)), y && !y[k] && (y = Ce(y, e)), le(function (e, t, n, r) {
                var i,
                    o,
                    a,
                    s = [],
                    u = [],
                    l = t.length,
                    c = e || function (e, t, n) {
                    for (var r = 0, i = t.length; r < i; r++) {
                        se(e, t[r], n);
                    }return n;
                }(h || "*", n.nodeType ? [n] : n, []),
                    f = !d || !e && h ? c : Te(c, s, d, n, r),
                    p = g ? y || (e ? d : l || v) ? [] : t : f;if (g && g(f, p, n, r), v) {
                    i = Te(p, u), v(i, [], n, r), o = i.length;while (o--) {
                        (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
                    }
                }if (e) {
                    if (y || d) {
                        if (y) {
                            i = [], o = p.length;while (o--) {
                                (a = p[o]) && i.push(f[o] = a);
                            }y(null, p = [], i, r);
                        }o = p.length;while (o--) {
                            (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a));
                        }
                    }
                } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p);
            });
        }function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
                return e === i;
            }, a, !0), l = be(function (e) {
                return -1 < P(i, e);
            }, a, !0), c = [function (e, t, n) {
                var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));return i = null, r;
            }]; s < r; s++) {
                if (t = b.relative[e[s].type]) c = [be(we(c), t)];else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
                        for (n = ++s; n < r; n++) {
                            if (b.relative[e[n].type]) break;
                        }return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(B, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e));
                    }c.push(t);
                }
            }return we(c);
        }return me.prototype = b.filters = b.pseudos, b.setFilters = new me(), h = se.tokenize = function (e, t) {
            var n,
                r,
                i,
                o,
                a,
                s,
                u,
                l = x[e + " "];if (l) return t ? 0 : l.slice(0);a = e, s = [], u = b.preFilter;while (a) {
                for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({ value: n, type: r[0].replace(B, " ") }), a = a.slice(n.length)), b.filter) {
                    !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({ value: n, type: o, matches: r }), a = a.slice(n.length));
                }if (!n) break;
            }return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
        }, f = se.compile = function (e, t) {
            var n,
                v,
                y,
                m,
                x,
                r,
                i = [],
                o = [],
                a = N[e + " "];if (!a) {
                t || (t = h(e)), n = t.length;while (n--) {
                    (a = Ee(t[n]))[k] ? i.push(a) : o.push(a);
                }(a = N(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function r(e, t, n, _r, i) {
                    var o,
                        a,
                        s,
                        u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        p = w,
                        d = e || x && b.find.TAG("*", i),
                        h = S += null == p ? 1 : Math.random() || .1,
                        g = d.length;for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0, t || o.ownerDocument === C || (T(o), n = !E);while (s = v[a++]) {
                                if (s(o, t || C, n)) {
                                    _r.push(o);break;
                                }
                            }i && (S = h);
                        }m && ((o = !s && o) && u--, e && c.push(o));
                    }if (u += l, m && l !== u) {
                        a = 0;while (s = y[a++]) {
                            s(c, f, t, n);
                        }if (e) {
                            if (0 < u) while (l--) {
                                c[l] || f[l] || (f[l] = q.call(_r));
                            }f = Te(f);
                        }H.apply(_r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(_r);
                    }return i && (S = h, w = p), c;
                }, m ? le(r) : r))).selector = e;
            }return a;
        }, g = se.select = function (e, t, n, r) {
            var i,
                o,
                a,
                s,
                u,
                l = "function" == typeof e && e,
                c = !r && h(e = l.selector || e);if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;l && (t = t.parentNode), e = e.slice(o.shift().value.length);
                }i = G.needsContext.test(e) ? 0 : o.length;while (i--) {
                    if (a = o[i], b.relative[s = a.type]) break;if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;break;
                    }
                }
            }return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n;
        }, d.sortStable = k.split("").sort(D).join("") === k, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
        }), ce(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
        }) || fe("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }), d.attributes && ce(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
        }) || fe("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }), ce(function (e) {
            return null == e.getAttribute("disabled");
        }) || fe(R, function (e, t, n) {
            var r;if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        }), se;
    }(C);k.find = h, k.expr = h.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = h.uniqueSort, k.text = h.getText, k.isXMLDoc = h.isXML, k.contains = h.contains, k.escapeSelector = h.escape;var T = function T(e, t, n) {
        var r = [],
            i = void 0 !== n;while ((e = e[t]) && 9 !== e.nodeType) {
            if (1 === e.nodeType) {
                if (i && k(e).is(n)) break;r.push(e);
            }
        }return r;
    },
        S = function S(e, t) {
        for (var n = []; e; e = e.nextSibling) {
            1 === e.nodeType && e !== t && n.push(e);
        }return n;
    },
        N = k.expr.match.needsContext;function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e, n, r) {
        return m(n) ? k.grep(e, function (e, t) {
            return !!n.call(e, t, e) !== r;
        }) : n.nodeType ? k.grep(e, function (e) {
            return e === n !== r;
        }) : "string" != typeof n ? k.grep(e, function (e) {
            return -1 < i.call(n, e) !== r;
        }) : k.filter(n, e, r);
    }k.filter = function (e, t, n) {
        var r = t[0];return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t, function (e) {
            return 1 === e.nodeType;
        }));
    }, k.fn.extend({ find: function find(e) {
            var t,
                n,
                r = this.length,
                i = this;if ("string" != typeof e) return this.pushStack(k(e).filter(function () {
                for (t = 0; t < r; t++) {
                    if (k.contains(i[t], this)) return !0;
                }
            }));for (n = this.pushStack([]), t = 0; t < r; t++) {
                k.find(e, i[t], n);
            }return 1 < r ? k.uniqueSort(n) : n;
        }, filter: function filter(e) {
            return this.pushStack(j(this, e || [], !1));
        }, not: function not(e) {
            return this.pushStack(j(this, e || [], !0));
        }, is: function is(e) {
            return !!j(this, "string" == typeof e && N.test(e) ? k(e) : e || [], !1).length;
        } });var q,
        L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init = function (e, t, n) {
        var r, i;if (!e) return this;if (n = n || q, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);if (r[1]) {
                if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), D.test(r[1]) && k.isPlainObject(t)) for (r in t) {
                    m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                }return this;
            }return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
        }return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this);
    }).prototype = k.fn, q = k(E);var H = /^(?:parents|prev(?:Until|All))/,
        O = { children: !0, contents: !0, next: !0, prev: !0 };function P(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType) {}return e;
    }k.fn.extend({ has: function has(e) {
            var t = k(e, this),
                n = t.length;return this.filter(function () {
                for (var e = 0; e < n; e++) {
                    if (k.contains(this, t[e])) return !0;
                }
            });
        }, closest: function closest(e, t) {
            var n,
                r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && k(e);if (!N.test(e)) for (; r < i; r++) {
                for (n = this[r]; n && n !== t; n = n.parentNode) {
                    if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
                        o.push(n);break;
                    }
                }
            }return this.pushStack(1 < o.length ? k.uniqueSort(o) : o);
        }, index: function index(e) {
            return e ? "string" == typeof e ? i.call(k(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        }, add: function add(e, t) {
            return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))));
        }, addBack: function addBack(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        } }), k.each({ parent: function parent(e) {
            var t = e.parentNode;return t && 11 !== t.nodeType ? t : null;
        }, parents: function parents(e) {
            return T(e, "parentNode");
        }, parentsUntil: function parentsUntil(e, t, n) {
            return T(e, "parentNode", n);
        }, next: function next(e) {
            return P(e, "nextSibling");
        }, prev: function prev(e) {
            return P(e, "previousSibling");
        }, nextAll: function nextAll(e) {
            return T(e, "nextSibling");
        }, prevAll: function prevAll(e) {
            return T(e, "previousSibling");
        }, nextUntil: function nextUntil(e, t, n) {
            return T(e, "nextSibling", n);
        }, prevUntil: function prevUntil(e, t, n) {
            return T(e, "previousSibling", n);
        }, siblings: function siblings(e) {
            return S((e.parentNode || {}).firstChild, e);
        }, children: function children(e) {
            return S(e.firstChild);
        }, contents: function contents(e) {
            return "undefined" != typeof e.contentDocument ? e.contentDocument : (A(e, "template") && (e = e.content || e), k.merge([], e.childNodes));
        } }, function (r, i) {
        k.fn[r] = function (e, t) {
            var n = k.map(this, i, e);return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = k.filter(t, n)), 1 < this.length && (O[r] || k.uniqueSort(n), H.test(r) && n.reverse()), this.pushStack(n);
        };
    });var R = /[^\x20\t\r\n\f]+/g;function M(e) {
        return e;
    }function I(e) {
        throw e;
    }function W(e, t, n, r) {
        var i;try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
        } catch (e) {
            n.apply(void 0, [e]);
        }
    }k.Callbacks = function (r) {
        var e, n;r = "string" == typeof r ? (e = r, n = {}, k.each(e.match(R) || [], function (e, t) {
            n[t] = !0;
        }), n) : k.extend({}, r);var i,
            t,
            o,
            a,
            s = [],
            u = [],
            l = -1,
            c = function c() {
            for (a = a || r.once, o = i = !0; u.length; l = -1) {
                t = u.shift();while (++l < s.length) {
                    !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1);
                }
            }r.memory || (t = !1), i = !1, a && (s = t ? [] : "");
        },
            f = { add: function add() {
                return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
                    k.each(e, function (e, t) {
                        m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t);
                    });
                }(arguments), t && !i && c()), this;
            }, remove: function remove() {
                return k.each(arguments, function (e, t) {
                    var n;while (-1 < (n = k.inArray(t, s, n))) {
                        s.splice(n, 1), n <= l && l--;
                    }
                }), this;
            }, has: function has(e) {
                return e ? -1 < k.inArray(e, s) : 0 < s.length;
            }, empty: function empty() {
                return s && (s = []), this;
            }, disable: function disable() {
                return a = u = [], s = t = "", this;
            }, disabled: function disabled() {
                return !s;
            }, lock: function lock() {
                return a = u = [], t || i || (s = t = ""), this;
            }, locked: function locked() {
                return !!a;
            }, fireWith: function fireWith(e, t) {
                return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this;
            }, fire: function fire() {
                return f.fireWith(this, arguments), this;
            }, fired: function fired() {
                return !!o;
            } };return f;
    }, k.extend({ Deferred: function Deferred(e) {
            var o = [["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2], ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]],
                i = "pending",
                a = { state: function state() {
                    return i;
                }, always: function always() {
                    return s.done(arguments).fail(arguments), this;
                }, "catch": function _catch(e) {
                    return a.then(null, e);
                }, pipe: function pipe() {
                    var i = arguments;return k.Deferred(function (r) {
                        k.each(o, function (e, t) {
                            var n = m(i[t[4]]) && i[t[4]];s[t[1]](function () {
                                var e = n && n.apply(this, arguments);e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
                            });
                        }), i = null;
                    }).promise();
                }, then: function then(t, n, r) {
                    var u = 0;function l(i, o, a, s) {
                        return function () {
                            var n = this,
                                r = arguments,
                                e = function e() {
                                var e, t;if (!(i < u)) {
                                    if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");t = e && ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, M, s), l(u, o, I, s)) : (u++, t.call(e, l(u, o, M, s), l(u, o, I, s), l(u, o, M, o.notifyWith))) : (a !== M && (n = void 0, r = [e]), (s || o.resolveWith)(n, r));
                                }
                            },
                                t = s ? e : function () {
                                try {
                                    e();
                                } catch (e) {
                                    k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== I && (n = void 0, r = [e]), o.rejectWith(n, r));
                                }
                            };i ? t() : (k.Deferred.getStackHook && (t.stackTrace = k.Deferred.getStackHook()), C.setTimeout(t));
                        };
                    }return k.Deferred(function (e) {
                        o[0][3].add(l(0, e, m(r) ? r : M, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : M)), o[2][3].add(l(0, e, m(n) ? n : I));
                    }).promise();
                }, promise: function promise(e) {
                    return null != e ? k.extend(e, a) : a;
                } },
                s = {};return k.each(o, function (e, t) {
                var n = t[2],
                    r = t[5];a[t[1]] = n.add, r && n.add(function () {
                    i = r;
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
                }, s[t[0] + "With"] = n.fireWith;
            }), a.promise(s), e && e.call(s, s), s;
        }, when: function when(e) {
            var n = arguments.length,
                t = n,
                r = Array(t),
                i = s.call(arguments),
                o = k.Deferred(),
                a = function a(t) {
                return function (e) {
                    r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i);
                };
            };if (n <= 1 && (W(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();while (t--) {
                W(i[t], a(t), o.reject);
            }return o.promise();
        } });var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook = function (e, t) {
        C.console && C.console.warn && e && $.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
    }, k.readyException = function (e) {
        C.setTimeout(function () {
            throw e;
        });
    };var F = k.Deferred();function B() {
        E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), k.ready();
    }k.fn.ready = function (e) {
        return F.then(e)["catch"](function (e) {
            k.readyException(e);
        }), this;
    }, k.extend({ isReady: !1, readyWait: 1, ready: function ready(e) {
            (!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0) !== e && 0 < --k.readyWait || F.resolveWith(E, [k]);
        } }), k.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(k.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));var _ = function _(e, t, n, r, i, o, a) {
        var s = 0,
            u = e.length,
            l = null == n;if ("object" === w(n)) for (s in i = !0, n) {
            _(e, t, s, n[s], !0, o, a);
        } else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
            return l.call(k(e), n);
        })), t)) for (; s < u; s++) {
            t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        }return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
        z = /^-ms-/,
        U = /-([a-z])/g;function X(e, t) {
        return t.toUpperCase();
    }function V(e) {
        return e.replace(z, "ms-").replace(U, X);
    }var G = function G(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };function Y() {
        this.expando = k.expando + Y.uid++;
    }Y.uid = 1, Y.prototype = { cache: function cache(e) {
            var t = e[this.expando];return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
        }, set: function set(e, t, n) {
            var r,
                i = this.cache(e);if ("string" == typeof t) i[V(t)] = n;else for (r in t) {
                i[V(r)] = t[r];
            }return i;
        }, get: function get(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)];
        }, access: function access(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
        }, remove: function remove(e, t) {
            var n,
                r = e[this.expando];if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(R) || []).length;while (n--) {
                        delete r[t[n]];
                    }
                }(void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
            }
        }, hasData: function hasData(e) {
            var t = e[this.expando];return void 0 !== t && !k.isEmptyObject(t);
        } };var Q = new Y(),
        J = new Y(),
        K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;function ee(e, t, n) {
        var r, i;if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
            try {
                n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : K.test(i) ? JSON.parse(i) : i);
            } catch (e) {}J.set(e, t, n);
        } else n = void 0;return n;
    }k.extend({ hasData: function hasData(e) {
            return J.hasData(e) || Q.hasData(e);
        }, data: function data(e, t, n) {
            return J.access(e, t, n);
        }, removeData: function removeData(e, t) {
            J.remove(e, t);
        }, _data: function _data(e, t, n) {
            return Q.access(e, t, n);
        }, _removeData: function _removeData(e, t) {
            Q.remove(e, t);
        } }), k.fn.extend({ data: function data(n, e) {
            var t,
                r,
                i,
                o = this[0],
                a = o && o.attributes;if (void 0 === n) {
                if (this.length && (i = J.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
                    t = a.length;while (t--) {
                        a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = V(r.slice(5)), ee(o, r, i[r]));
                    }Q.set(o, "hasDataAttrs", !0);
                }return i;
            }return "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) ? this.each(function () {
                J.set(this, n);
            }) : _(this, function (e) {
                var t;if (o && void 0 === e) return void 0 !== (t = J.get(o, n)) ? t : void 0 !== (t = ee(o, n)) ? t : void 0;this.each(function () {
                    J.set(this, n, e);
                });
            }, null, e, 1 < arguments.length, null, !0);
        }, removeData: function removeData(e) {
            return this.each(function () {
                J.remove(this, e);
            });
        } }), k.extend({ queue: function queue(e, t, n) {
            var r;if (e) return t = (t || "fx") + "queue", r = Q.get(e, t), n && (!r || Array.isArray(n) ? r = Q.access(e, t, k.makeArray(n)) : r.push(n)), r || [];
        }, dequeue: function dequeue(e, t) {
            t = t || "fx";var n = k.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = k._queueHooks(e, t);"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
                k.dequeue(e, t);
            }, o)), !r && o && o.empty.fire();
        }, _queueHooks: function _queueHooks(e, t) {
            var n = t + "queueHooks";return Q.get(e, n) || Q.access(e, n, { empty: k.Callbacks("once memory").add(function () {
                    Q.remove(e, [t + "queue", n]);
                }) });
        } }), k.fn.extend({ queue: function queue(t, n) {
            var e = 2;return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? k.queue(this[0], t) : void 0 === n ? this : this.each(function () {
                var e = k.queue(this, t, n);k._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t);
            });
        }, dequeue: function dequeue(e) {
            return this.each(function () {
                k.dequeue(this, e);
            });
        }, clearQueue: function clearQueue(e) {
            return this.queue(e || "fx", []);
        }, promise: function promise(e, t) {
            var n,
                r = 1,
                i = k.Deferred(),
                o = this,
                a = this.length,
                s = function s() {
                --r || i.resolveWith(o, [o]);
            };"string" != typeof e && (t = e, e = void 0), e = e || "fx";while (a--) {
                (n = Q.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            }return s(), i.promise(t);
        } });var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
        re = ["Top", "Right", "Bottom", "Left"],
        ie = E.documentElement,
        oe = function oe(e) {
        return k.contains(e.ownerDocument, e);
    },
        ae = { composed: !0 };ie.getRootNode && (oe = function oe(e) {
        return k.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument;
    });var se = function se(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === k.css(e, "display");
    },
        ue = function ue(e, t, n, r) {
        var i,
            o,
            a = {};for (o in t) {
            a[o] = e.style[o], e.style[o] = t[o];
        }for (o in i = n.apply(e, r || []), t) {
            e.style[o] = a[o];
        }return i;
    };function le(e, t, n, r) {
        var i,
            o,
            a = 20,
            s = r ? function () {
            return r.cur();
        } : function () {
            return k.css(e, t, "");
        },
            u = s(),
            l = n && n[3] || (k.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (k.cssNumber[t] || "px" !== l && +u) && ne.exec(k.css(e, t));if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;while (a--) {
                k.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            }c *= 2, k.style(e, t, c + l), n = n || [];
        }return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
    }var ce = {};function fe(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) {
            (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Q.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && se(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ce[s]) || (o = a.body.appendChild(a.createElement(s)), u = k.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ce[s] = u)))) : "none" !== n && (l[c] = "none", Q.set(r, "display", n)));
        }for (c = 0; c < f; c++) {
            null != l[c] && (e[c].style.display = l[c]);
        }return e;
    }k.fn.extend({ show: function show() {
            return fe(this, !0);
        }, hide: function hide() {
            return fe(this);
        }, toggle: function toggle(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                se(this) ? k(this).show() : k(this).hide();
            });
        } });var pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i,
        ge = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };function ve(e, t) {
        var n;return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? k.merge([e], n) : n;
    }function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++) {
            Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"));
        }
    }ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;var me,
        xe,
        be = /<|&#?\w+;/;function we(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) {
            if ((o = e[d]) || 0 === o) if ("object" === w(o)) k.merge(p, o.nodeType ? [o] : o);else if (be.test(o)) {
                a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2], c = u[0];while (c--) {
                    a = a.lastChild;
                }k.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
            } else p.push(t.createTextNode(o));
        }f.textContent = "", d = 0;while (o = p[d++]) {
            if (r && -1 < k.inArray(o, r)) i && i.push(o);else if (l = oe(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
                c = 0;while (o = a[c++]) {
                    he.test(o.type || "") && n.push(o);
                }
            }
        }return f;
    }me = E.createDocumentFragment().appendChild(E.createElement("div")), (xe = E.createElement("input")).setAttribute("type", "radio"), xe.setAttribute("checked", "checked"), xe.setAttribute("name", "t"), me.appendChild(xe), y.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked, me.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue;var Te = /^key/,
        Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ee = /^([^.]*)(?:\.(.+)|)/;function ke() {
        return !0;
    }function Se() {
        return !1;
    }function Ne(e, t) {
        return e === function () {
            try {
                return E.activeElement;
            } catch (e) {}
        }() == ("focus" === t);
    }function Ae(e, t, n, r, i, o) {
        var a, s;if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) {
                Ae(e, s, n, r, t[s], o);
            }return e;
        }if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Se;else if (!i) return e;return 1 === o && (a = i, (i = function i(e) {
            return k().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = k.guid++)), e.each(function () {
            k.event.add(this, t, i, r, n);
        });
    }function De(e, i, o) {
        o ? (Q.set(e, i, !1), k.event.add(e, i, { namespace: !1, handler: function handler(e) {
                var t,
                    n,
                    r = Q.get(this, i);if (1 & e.isTrigger && this[i]) {
                    if (r.length) (k.event.special[i] || {}).delegateType && e.stopPropagation();else if (r = s.call(arguments), Q.set(this, i, r), t = o(this, i), this[i](), r !== (n = Q.get(this, i)) || t ? Q.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value;
                } else r.length && (Q.set(this, i, { value: k.event.trigger(k.extend(r[0], k.Event.prototype), r.slice(1), this) }), e.stopImmediatePropagation());
            } })) : void 0 === Q.get(e, i) && k.event.add(e, i, ke);
    }k.event = { global: {}, add: function add(t, e, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                v = Q.get(t);if (v) {
                n.handler && (n = (o = n).handler, i = o.selector), i && k.find.matchesSelector(ie, i), n.guid || (n.guid = k.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function (e) {
                    return "undefined" != typeof k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0;
                }), l = (e = (e || "").match(R) || [""]).length;while (l--) {
                    d = g = (s = Ee.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = k.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = k.event.special[d] || {}, c = k.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && k.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), k.event.global[d] = !0);
                }
            }
        }, remove: function remove(e, t, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                v = Q.hasData(e) && Q.get(e);if (v && (u = v.events)) {
                l = (t = (t || "").match(R) || [""]).length;while (l--) {
                    if (d = g = (s = Ee.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                        f = k.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;while (o--) {
                            c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        }a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || k.removeEvent(e, d, v.handle), delete u[d]);
                    } else for (d in u) {
                        k.event.remove(e, d + t[l], n, r, !0);
                    }
                }k.isEmptyObject(u) && Q.remove(e, "handle events");
            }
        }, dispatch: function dispatch(e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                s = k.event.fix(e),
                u = new Array(arguments.length),
                l = (Q.get(this, "events") || {})[s.type] || [],
                c = k.event.special[s.type] || {};for (u[0] = s, t = 1; t < arguments.length; t++) {
                u[t] = arguments[t];
            }if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                a = k.event.handlers.call(this, s, l), t = 0;while ((i = a[t++]) && !s.isPropagationStopped()) {
                    s.currentTarget = i.elem, n = 0;while ((o = i.handlers[n++]) && !s.isImmediatePropagationStopped()) {
                        s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((k.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                    }
                }return c.postDispatch && c.postDispatch.call(this, s), s.result;
            }
        }, handlers: function handlers(e, t) {
            var n,
                r,
                i,
                o,
                a,
                s = [],
                u = t.delegateCount,
                l = e.target;if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) {
                if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                    for (o = [], a = {}, n = 0; n < u; n++) {
                        void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < k(i, this).index(l) : k.find(i, this, null, [l]).length), a[i] && o.push(r);
                    }o.length && s.push({ elem: l, handlers: o });
                }
            }return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s;
        }, addProp: function addProp(t, e) {
            Object.defineProperty(k.Event.prototype, t, { enumerable: !0, configurable: !0, get: m(e) ? function () {
                    if (this.originalEvent) return e(this.originalEvent);
                } : function () {
                    if (this.originalEvent) return this.originalEvent[t];
                }, set: function set(e) {
                    Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e });
                } });
        }, fix: function fix(e) {
            return e[k.expando] ? e : new k.Event(e);
        }, special: { load: { noBubble: !0 }, click: { setup: function setup(e) {
                    var t = this || e;return pe.test(t.type) && t.click && A(t, "input") && De(t, "click", ke), !1;
                }, trigger: function trigger(e) {
                    var t = this || e;return pe.test(t.type) && t.click && A(t, "input") && De(t, "click"), !0;
                }, _default: function _default(e) {
                    var t = e.target;return pe.test(t.type) && t.click && A(t, "input") && Q.get(t, "click") || A(t, "a");
                } }, beforeunload: { postDispatch: function postDispatch(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                } } } }, k.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
    }, k.Event = function (e, t) {
        if (!(this instanceof k.Event)) return new k.Event(e, t);e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && k.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[k.expando] = !0;
    }, k.Event.prototype = { constructor: k.Event, isDefaultPrevented: Se, isPropagationStopped: Se, isImmediatePropagationStopped: Se, isSimulated: !1, preventDefault: function preventDefault() {
            var e = this.originalEvent;this.isDefaultPrevented = ke, e && !this.isSimulated && e.preventDefault();
        }, stopPropagation: function stopPropagation() {
            var e = this.originalEvent;this.isPropagationStopped = ke, e && !this.isSimulated && e.stopPropagation();
        }, stopImmediatePropagation: function stopImmediatePropagation() {
            var e = this.originalEvent;this.isImmediatePropagationStopped = ke, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
        } }, k.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(e) {
            var t = e.button;return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
        } }, k.event.addProp), k.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        k.event.special[e] = { setup: function setup() {
                return De(this, e, Ne), !1;
            }, trigger: function trigger() {
                return De(this, e), !0;
            }, delegateType: t };
    }), k.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, i) {
        k.event.special[e] = { delegateType: i, bindType: i, handle: function handle(e) {
                var t,
                    n = e.relatedTarget,
                    r = e.handleObj;return n && (n === this || k.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t;
            } };
    }), k.fn.extend({ on: function on(e, t, n, r) {
            return Ae(this, e, t, n, r);
        }, one: function one(e, t, n, r) {
            return Ae(this, e, t, n, r, 1);
        }, off: function off(e, t, n) {
            var r, i;if (e && e.preventDefault && e.handleObj) return r = e.handleObj, k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) {
                for (i in e) {
                    this.off(i, t, e[i]);
                }return this;
            }return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each(function () {
                k.event.remove(this, e, n, t);
            });
        } });var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        qe = /<script|<style|<link/i,
        Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
        He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0] || e;
    }function Pe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
    }function Re(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
    }function Me(e, t) {
        var n, r, i, o, a, s, u, l;if (1 === t.nodeType) {
            if (Q.hasData(e) && (o = Q.access(e), a = Q.set(t, o), l = o.events)) for (i in delete a.handle, a.events = {}, l) {
                for (n = 0, r = l[i].length; n < r; n++) {
                    k.event.add(t, i, l[i][n]);
                }
            }J.hasData(e) && (s = J.access(e), u = k.extend({}, s), J.set(t, u));
        }
    }function Ie(n, r, i, o) {
        r = g.apply([], r);var e,
            t,
            a,
            s,
            u,
            l,
            c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = m(d);if (h || 1 < f && "string" == typeof d && !y.checkClone && Le.test(d)) return n.each(function (e) {
            var t = n.eq(e);h && (r[0] = d.call(this, e, t.html())), Ie(t, r, i, o);
        });if (f && (t = (e = we(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = k.map(ve(e, "script"), Pe)).length; c < f; c++) {
                u = e, c !== p && (u = k.clone(u, !0, !0), s && k.merge(a, ve(u, "script"))), i.call(n[c], u, c);
            }if (s) for (l = a[a.length - 1].ownerDocument, k.map(a, Re), c = 0; c < s; c++) {
                u = a[c], he.test(u.type || "") && !Q.access(u, "globalEval") && k.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? k._evalUrl && !u.noModule && k._evalUrl(u.src, { nonce: u.nonce || u.getAttribute("nonce") }) : b(u.textContent.replace(He, ""), u, l));
            }
        }return n;
    }function We(e, t, n) {
        for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
            n || 1 !== r.nodeType || k.cleanData(ve(r)), r.parentNode && (n && oe(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
        }return e;
    }k.extend({ htmlPrefilter: function htmlPrefilter(e) {
            return e.replace(je, "<$1></$2>");
        }, clone: function clone(e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                u,
                l,
                c = e.cloneNode(!0),
                f = oe(e);if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e))) for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) {
                s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            }if (t) if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) {
                Me(o[r], a[r]);
            } else Me(e, c);return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c;
        }, cleanData: function cleanData(e) {
            for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++) {
                if (G(n)) {
                    if (t = n[Q.expando]) {
                        if (t.events) for (r in t.events) {
                            i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
                        }n[Q.expando] = void 0;
                    }n[J.expando] && (n[J.expando] = void 0);
                }
            }
        } }), k.fn.extend({ detach: function detach(e) {
            return We(this, e, !0);
        }, remove: function remove(e) {
            return We(this, e);
        }, text: function text(e) {
            return _(this, function (e) {
                return void 0 === e ? k.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
                });
            }, null, e, arguments.length);
        }, append: function append() {
            return Ie(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e);
            });
        }, prepend: function prepend() {
            return Ie(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Oe(this, e);t.insertBefore(e, t.firstChild);
                }
            });
        }, before: function before() {
            return Ie(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
            });
        }, after: function after() {
            return Ie(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
        }, empty: function empty() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                1 === e.nodeType && (k.cleanData(ve(e, !1)), e.textContent = "");
            }return this;
        }, clone: function clone(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return k.clone(this, e, t);
            });
        }, html: function html(e) {
            return _(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;if (void 0 === e && 1 === t.nodeType) return t.innerHTML;if ("string" == typeof e && !qe.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = k.htmlPrefilter(e);try {
                        for (; n < r; n++) {
                            1 === (t = this[n] || {}).nodeType && (k.cleanData(ve(t, !1)), t.innerHTML = e);
                        }t = 0;
                    } catch (e) {}
                }t && this.empty().append(e);
            }, null, e, arguments.length);
        }, replaceWith: function replaceWith() {
            var n = [];return Ie(this, arguments, function (e) {
                var t = this.parentNode;k.inArray(this, n) < 0 && (k.cleanData(ve(this)), t && t.replaceChild(e, this));
            }, n);
        } }), k.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, a) {
        k.fn[e] = function (e) {
            for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++) {
                t = o === i ? this : this.clone(!0), k(r[o])[a](t), u.apply(n, t.get());
            }return this.pushStack(n);
        };
    });var $e = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
        Fe = function Fe(e) {
        var t = e.ownerDocument.defaultView;return t && t.opener || (t = C), t.getComputedStyle(e);
    },
        Be = new RegExp(re.join("|"), "i");function _e(e, t, n) {
        var r,
            i,
            o,
            a,
            s = e.style;return (n = n || Fe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = k.style(e, t)), !y.pixelBoxStyles() && $e.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
    }function ze(e, t) {
        return { get: function get() {
                if (!e()) return (this.get = t).apply(this, arguments);delete this.get;
            } };
    }!function () {
        function e() {
            if (u) {
                s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(s).appendChild(u);var e = C.getComputedStyle(u);n = "1%" !== e.top, a = 12 === t(e.marginLeft), u.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), u.style.position = "absolute", i = 12 === t(u.offsetWidth / 3), ie.removeChild(s), u = null;
            }
        }function t(e) {
            return Math.round(parseFloat(e));
        }var n,
            r,
            i,
            o,
            a,
            s = E.createElement("div"),
            u = E.createElement("div");u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === u.style.backgroundClip, k.extend(y, { boxSizingReliable: function boxSizingReliable() {
                return e(), r;
            }, pixelBoxStyles: function pixelBoxStyles() {
                return e(), o;
            }, pixelPosition: function pixelPosition() {
                return e(), n;
            }, reliableMarginLeft: function reliableMarginLeft() {
                return e(), a;
            }, scrollboxSize: function scrollboxSize() {
                return e(), i;
            } }));
    }();var Ue = ["Webkit", "Moz", "ms"],
        Xe = E.createElement("div").style,
        Ve = {};function Ge(e) {
        var t = k.cssProps[e] || Ve[e];return t || (e in Xe ? e : Ve[e] = function (e) {
            var t = e[0].toUpperCase() + e.slice(1),
                n = Ue.length;while (n--) {
                if ((e = Ue[n] + t) in Xe) return e;
            }
        }(e) || e);
    }var Ye = /^(none|table(?!-c[ea]).+)/,
        Qe = /^--/,
        Je = { position: "absolute", visibility: "hidden", display: "block" },
        Ke = { letterSpacing: "0", fontWeight: "400" };function Ze(e, t, n) {
        var r = ne.exec(t);return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }function et(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;if (n === (r ? "border" : "content")) return 0;for (; a < 4; a += 2) {
            "margin" === n && (u += k.css(e, n + re[a], !0, i)), r ? ("content" === n && (u -= k.css(e, "padding" + re[a], !0, i)), "margin" !== n && (u -= k.css(e, "border" + re[a] + "Width", !0, i))) : (u += k.css(e, "padding" + re[a], !0, i), "padding" !== n ? u += k.css(e, "border" + re[a] + "Width", !0, i) : s += k.css(e, "border" + re[a] + "Width", !0, i));
        }return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u;
    }function tt(e, t, n) {
        var r = Fe(e),
            i = (!y.boxSizingReliable() || n) && "border-box" === k.css(e, "boxSizing", !1, r),
            o = i,
            a = _e(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);if ($e.test(a)) {
            if (!n) return a;a = "auto";
        }return (!y.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === k.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === k.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + et(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
    }function nt(e, t, n, r, i) {
        return new nt.prototype.init(e, t, n, r, i);
    }k.extend({ cssHooks: { opacity: { get: function get(e, t) {
                    if (t) {
                        var n = _e(e, "opacity");return "" === n ? "1" : n;
                    }
                } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function style(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                    o,
                    a,
                    s = V(t),
                    u = Qe.test(t),
                    l = e.style;if (u || (t = Ge(s)), a = k.cssHooks[t] || k.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];"string" === (o = typeof n === "undefined" ? "undefined" : _typeof(n)) && (i = ne.exec(n)) && i[1] && (n = le(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (k.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
            }
        }, css: function css(e, t, n, r) {
            var i,
                o,
                a,
                s = V(t);return Qe.test(t) || (t = Ge(s)), (a = k.cssHooks[t] || k.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = _e(e, t, r)), "normal" === i && t in Ke && (i = Ke[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
        } }), k.each(["height", "width"], function (e, u) {
        k.cssHooks[u] = { get: function get(e, t, n) {
                if (t) return !Ye.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, u, n) : ue(e, Je, function () {
                    return tt(e, u, n);
                });
            }, set: function set(e, t, n) {
                var r,
                    i = Fe(e),
                    o = !y.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === k.css(e, "boxSizing", !1, i),
                    s = n ? et(e, u, n, a, i) : 0;return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - et(e, u, "border", !1, i) - .5)), s && (r = ne.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = k.css(e, u)), Ze(0, t, s);
            } };
    }), k.cssHooks.marginLeft = ze(y.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(_e(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, { marginLeft: 0 }, function () {
            return e.getBoundingClientRect().left;
        })) + "px";
    }), k.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
        k.cssHooks[i + o] = { expand: function expand(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) {
                    n[i + re[t] + o] = r[t] || r[t - 2] || r[0];
                }return n;
            } }, "margin" !== i && (k.cssHooks[i + o].set = Ze);
    }), k.fn.extend({ css: function css(e, t) {
            return _(this, function (e, t, n) {
                var r,
                    i,
                    o = {},
                    a = 0;if (Array.isArray(t)) {
                    for (r = Fe(e), i = t.length; a < i; a++) {
                        o[t[a]] = k.css(e, t[a], !1, r);
                    }return o;
                }return void 0 !== n ? k.style(e, t, n) : k.css(e, t);
            }, e, t, 1 < arguments.length);
        } }), ((k.Tween = nt).prototype = { constructor: nt, init: function init(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || k.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (k.cssNumber[n] ? "" : "px");
        }, cur: function cur() {
            var e = nt.propHooks[this.prop];return e && e.get ? e.get(this) : nt.propHooks._default.get(this);
        }, run: function run(e) {
            var t,
                n = nt.propHooks[this.prop];return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this;
        } }).init.prototype = nt.prototype, (nt.propHooks = { _default: { get: function get(e) {
                var t;return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
            }, set: function set(e) {
                k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !k.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit);
            } } }).scrollTop = nt.propHooks.scrollLeft = { set: function set(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        } }, k.easing = { linear: function linear(e) {
            return e;
        }, swing: function swing(e) {
            return .5 - Math.cos(e * Math.PI) / 2;
        }, _default: "swing" }, k.fx = nt.prototype.init, k.fx.step = {};var rt,
        it,
        ot,
        at,
        st = /^(?:toggle|show|hide)$/,
        ut = /queueHooks$/;function lt() {
        it && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(lt) : C.setTimeout(lt, k.fx.interval), k.fx.tick());
    }function ct() {
        return C.setTimeout(function () {
            rt = void 0;
        }), rt = Date.now();
    }function ft(e, t) {
        var n,
            r = 0,
            i = { height: e };for (t = t ? 1 : 0; r < 4; r += 2 - t) {
            i["margin" + (n = re[r])] = i["padding" + n] = e;
        }return t && (i.opacity = i.width = e), i;
    }function pt(e, t, n) {
        for (var r, i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), o = 0, a = i.length; o < a; o++) {
            if (r = i[o].call(n, t, e)) return r;
        }
    }function dt(o, e, t) {
        var n,
            a,
            r = 0,
            i = dt.prefilters.length,
            s = k.Deferred().always(function () {
            delete u.elem;
        }),
            u = function u() {
            if (a) return !1;for (var e = rt || ct(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) {
                l.tweens[r].run(n);
            }return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1);
        },
            l = s.promise({ elem: o, props: k.extend({}, e), opts: k.extend(!0, { specialEasing: {}, easing: k.easing._default }, t), originalProperties: e, originalOptions: t, startTime: rt || ct(), duration: t.duration, tweens: [], createTween: function createTween(e, t) {
                var n = k.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);return l.tweens.push(n), n;
            }, stop: function stop(e) {
                var t = 0,
                    n = e ? l.tweens.length : 0;if (a) return this;for (a = !0; t < n; t++) {
                    l.tweens[t].run(1);
                }return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this;
            } }),
            c = l.props;for (!function (e, t) {
            var n, r, i, o, a;for (n in e) {
                if (i = t[r = V(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = k.cssHooks[r]) && ("expand" in a)) for (n in o = a.expand(o), delete e[r], o) {
                    (n in e) || (e[n] = o[n], t[n] = i);
                } else t[r] = i;
            }
        }(c, l.opts.specialEasing); r < i; r++) {
            if (n = dt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        }return k.map(c, pt, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), k.fx.timer(k.extend(u, { elem: o, anim: l, queue: l.opts.queue })), l;
    }k.Animation = k.extend(dt, { tweeners: { "*": [function (e, t) {
                var n = this.createTween(e, t);return le(n.elem, e, ne.exec(t), n), n;
            }] }, tweener: function tweener(e, t) {
            m(e) ? (t = e, e = ["*"]) : e = e.match(R);for (var n, r = 0, i = e.length; r < i; r++) {
                n = e[r], dt.tweeners[n] = dt.tweeners[n] || [], dt.tweeners[n].unshift(t);
            }
        }, prefilters: [function (e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                u,
                l,
                c,
                f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && se(e),
                v = Q.get(e, "fxshow");for (r in n.queue || (null == (a = k._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
                a.unqueued || s();
            }), a.unqueued++, p.always(function () {
                p.always(function () {
                    a.unqueued--, k.queue(e, "fx").length || a.empty.fire();
                });
            })), t) {
                if (i = t[r], st.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r]) continue;g = !0;
                    }d[r] = v && v[r] || k.style(e, r);
                }
            }if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Q.get(e, "display")), "none" === (c = k.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = k.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === k.css(e, "float") && (u || (p.done(function () {
                h.display = l;
            }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
            })), u = !1, d) {
                u || (v ? "hidden" in v && (g = v.hidden) : v = Q.access(e, "fxshow", { display: l }), o && (v.hidden = !g), g && fe([e], !0), p.done(function () {
                    for (r in g || fe([e]), Q.remove(e, "fxshow"), d) {
                        k.style(e, r, d[r]);
                    }
                })), u = pt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0));
            }
        }], prefilter: function prefilter(e, t) {
            t ? dt.prefilters.unshift(e) : dt.prefilters.push(e);
        } }), k.speed = function (e, t, n) {
        var r = e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? k.extend({}, e) : { complete: n || !n && t || m(e) && e, duration: e, easing: n && t || t && !m(t) && t };return k.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            m(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue);
        }, r;
    }, k.fn.extend({ fadeTo: function fadeTo(e, t, n, r) {
            return this.filter(se).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
        }, animate: function animate(t, e, n, r) {
            var i = k.isEmptyObject(t),
                o = k.speed(e, n, r),
                a = function a() {
                var e = dt(this, k.extend({}, t), o);(i || Q.get(this, "finish")) && e.stop(!0);
            };return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
        }, stop: function stop(i, e, o) {
            var a = function a(e) {
                var t = e.stop;delete e.stop, t(o);
            };return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function () {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = k.timers,
                    r = Q.get(this);if (t) r[t] && r[t].stop && a(r[t]);else for (t in r) {
                    r[t] && r[t].stop && ut.test(t) && a(r[t]);
                }for (t = n.length; t--;) {
                    n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                }!e && o || k.dequeue(this, i);
            });
        }, finish: function finish(a) {
            return !1 !== a && (a = a || "fx"), this.each(function () {
                var e,
                    t = Q.get(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = k.timers,
                    o = n ? n.length : 0;for (t.finish = !0, k.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) {
                    i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                }for (e = 0; e < o; e++) {
                    n[e] && n[e].finish && n[e].finish.call(this);
                }delete t.finish;
            });
        } }), k.each(["toggle", "show", "hide"], function (e, r) {
        var i = k.fn[r];k.fn[r] = function (e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ft(r, !0), e, t, n);
        };
    }), k.each({ slideDown: ft("show"), slideUp: ft("hide"), slideToggle: ft("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, r) {
        k.fn[e] = function (e, t, n) {
            return this.animate(r, e, t, n);
        };
    }), k.timers = [], k.fx.tick = function () {
        var e,
            t = 0,
            n = k.timers;for (rt = Date.now(); t < n.length; t++) {
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        }n.length || k.fx.stop(), rt = void 0;
    }, k.fx.timer = function (e) {
        k.timers.push(e), k.fx.start();
    }, k.fx.interval = 13, k.fx.start = function () {
        it || (it = !0, lt());
    }, k.fx.stop = function () {
        it = null;
    }, k.fx.speeds = { slow: 600, fast: 200, _default: 400 }, k.fn.delay = function (r, e) {
        return r = k.fx && k.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
            var n = C.setTimeout(e, r);t.stop = function () {
                C.clearTimeout(n);
            };
        });
    }, ot = E.createElement("input"), at = E.createElement("select").appendChild(E.createElement("option")), ot.type = "checkbox", y.checkOn = "" !== ot.value, y.optSelected = at.selected, (ot = E.createElement("input")).value = "t", ot.type = "radio", y.radioValue = "t" === ot.value;var ht,
        gt = k.expr.attrHandle;k.fn.extend({ attr: function attr(e, t) {
            return _(this, k.attr, e, t, 1 < arguments.length);
        }, removeAttr: function removeAttr(e) {
            return this.each(function () {
                k.removeAttr(this, e);
            });
        } }), k.extend({ attr: function attr(e, t, n) {
            var r,
                i,
                o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? k.prop(e, t, n) : (1 === o && k.isXMLDoc(e) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? ht : void 0)), void 0 !== n ? null === n ? void k.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = k.find.attr(e, t)) ? void 0 : r);
        }, attrHooks: { type: { set: function set(e, t) {
                    if (!y.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                } } }, removeAttr: function removeAttr(e, t) {
            var n,
                r = 0,
                i = t && t.match(R);if (i && 1 === e.nodeType) while (n = i[r++]) {
                e.removeAttribute(n);
            }
        } }), ht = { set: function set(e, t, n) {
            return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n;
        } }, k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var a = gt[t] || k.find.attr;gt[t] = function (e, t, n) {
            var r,
                i,
                o = t.toLowerCase();return n || (i = gt[o], gt[o] = r, r = null != a(e, t, n) ? o : null, gt[o] = i), r;
        };
    });var vt = /^(?:input|select|textarea|button)$/i,
        yt = /^(?:a|area)$/i;function mt(e) {
        return (e.match(R) || []).join(" ");
    }function xt(e) {
        return e.getAttribute && e.getAttribute("class") || "";
    }function bt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || [];
    }k.fn.extend({ prop: function prop(e, t) {
            return _(this, k.prop, e, t, 1 < arguments.length);
        }, removeProp: function removeProp(e) {
            return this.each(function () {
                delete this[k.propFix[e] || e];
            });
        } }), k.extend({ prop: function prop(e, t, n) {
            var r,
                i,
                o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return 1 === o && k.isXMLDoc(e) || (t = k.propFix[t] || t, i = k.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
        }, propHooks: { tabIndex: { get: function get(e) {
                    var t = k.find.attr(e, "tabindex");return t ? parseInt(t, 10) : vt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1;
                } } }, propFix: { "for": "htmlFor", "class": "className" } }), y.optSelected || (k.propHooks.selected = { get: function get(e) {
            var t = e.parentNode;return t && t.parentNode && t.parentNode.selectedIndex, null;
        }, set: function set(e) {
            var t = e.parentNode;t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        } }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        k.propFix[this.toLowerCase()] = this;
    }), k.fn.extend({ addClass: function addClass(t) {
            var e,
                n,
                r,
                i,
                o,
                a,
                s,
                u = 0;if (m(t)) return this.each(function (e) {
                k(this).addClass(t.call(this, e, xt(this)));
            });if ((e = bt(t)).length) while (n = this[u++]) {
                if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
                    a = 0;while (o = e[a++]) {
                        r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                    }i !== (s = mt(r)) && n.setAttribute("class", s);
                }
            }return this;
        }, removeClass: function removeClass(t) {
            var e,
                n,
                r,
                i,
                o,
                a,
                s,
                u = 0;if (m(t)) return this.each(function (e) {
                k(this).removeClass(t.call(this, e, xt(this)));
            });if (!arguments.length) return this.attr("class", "");if ((e = bt(t)).length) while (n = this[u++]) {
                if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
                    a = 0;while (o = e[a++]) {
                        while (-1 < r.indexOf(" " + o + " ")) {
                            r = r.replace(" " + o + " ", " ");
                        }
                    }i !== (s = mt(r)) && n.setAttribute("class", s);
                }
            }return this;
        }, toggleClass: function toggleClass(i, t) {
            var o = typeof i === "undefined" ? "undefined" : _typeof(i),
                a = "string" === o || Array.isArray(i);return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) {
                k(this).toggleClass(i.call(this, e, xt(this), t), t);
            }) : this.each(function () {
                var e, t, n, r;if (a) {
                    t = 0, n = k(this), r = bt(i);while (e = r[t++]) {
                        n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                    }
                } else void 0 !== i && "boolean" !== o || ((e = xt(this)) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Q.get(this, "__className__") || ""));
            });
        }, hasClass: function hasClass(e) {
            var t,
                n,
                r = 0;t = " " + e + " ";while (n = this[r++]) {
                if (1 === n.nodeType && -1 < (" " + mt(xt(n)) + " ").indexOf(t)) return !0;
            }return !1;
        } });var wt = /\r/g;k.fn.extend({ val: function val(n) {
            var r,
                e,
                i,
                t = this[0];return arguments.length ? (i = m(n), this.each(function (e) {
                var t;1 === this.nodeType && (null == (t = i ? n.call(this, e, k(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = k.map(t, function (e) {
                    return null == e ? "" : e + "";
                })), (r = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t));
            })) : t ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(wt, "") : null == e ? "" : e : void 0;
        } }), k.extend({ valHooks: { option: { get: function get(e) {
                    var t = k.find.attr(e, "value");return null != t ? t : mt(k.text(e));
                } }, select: { get: function get(e) {
                    var t,
                        n,
                        r,
                        i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;for (r = o < 0 ? u : a ? o : 0; r < u; r++) {
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = k(n).val(), a) return t;s.push(t);
                        }
                    }return s;
                }, set: function set(e, t) {
                    var n,
                        r,
                        i = e.options,
                        o = k.makeArray(t),
                        a = i.length;while (a--) {
                        ((r = i[a]).selected = -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0);
                    }return n || (e.selectedIndex = -1), o;
                } } } }), k.each(["radio", "checkbox"], function () {
        k.valHooks[this] = { set: function set(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < k.inArray(k(e).val(), t);
            } }, y.checkOn || (k.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
        });
    }), y.focusin = "onfocusin" in C;var Tt = /^(?:focusinfocus|focusoutblur)$/,
        Ct = function Ct(e) {
        e.stopPropagation();
    };k.extend(k.event, { trigger: function trigger(e, t, n, r) {
            var i,
                o,
                a,
                s,
                u,
                l,
                c,
                f,
                p = [n || E],
                d = v.call(e, "type") ? e.type : e,
                h = v.call(e, "namespace") ? e.namespace.split(".") : [];if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !Tt.test(d + k.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[k.expando] ? e : new k.Event(d, "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : k.makeArray(t, [e]), c = k.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d, Tt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) {
                        p.push(o), a = o;
                    }a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C);
                }i = 0;while ((o = p[i++]) && !e.isPropagationStopped()) {
                    f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Q.get(o, "events") || {})[e.type] && Q.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && G(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                }return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !G(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), k.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, Ct), n[d](), e.isPropagationStopped() && f.removeEventListener(d, Ct), k.event.triggered = void 0, a && (n[u] = a)), e.result;
            }
        }, simulate: function simulate(e, t, n) {
            var r = k.extend(new k.Event(), n, { type: e, isSimulated: !0 });k.event.trigger(r, null, t);
        } }), k.fn.extend({ trigger: function trigger(e, t) {
            return this.each(function () {
                k.event.trigger(e, t, this);
            });
        }, triggerHandler: function triggerHandler(e, t) {
            var n = this[0];if (n) return k.event.trigger(e, t, n, !0);
        } }), y.focusin || k.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
        var i = function i(e) {
            k.event.simulate(r, e.target, k.event.fix(e));
        };k.event.special[r] = { setup: function setup() {
                var e = this.ownerDocument || this,
                    t = Q.access(e, r);t || e.addEventListener(n, i, !0), Q.access(e, r, (t || 0) + 1);
            }, teardown: function teardown() {
                var e = this.ownerDocument || this,
                    t = Q.access(e, r) - 1;t ? Q.access(e, r, t) : (e.removeEventListener(n, i, !0), Q.remove(e, r));
            } };
    });var Et = C.location,
        kt = Date.now(),
        St = /\?/;k.parseXML = function (e) {
        var t;if (!e || "string" != typeof e) return null;try {
            t = new C.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {
            t = void 0;
        }return t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e), t;
    };var Nt = /\[\]$/,
        At = /\r?\n/g,
        Dt = /^(?:submit|button|image|reset|file)$/i,
        jt = /^(?:input|select|textarea|keygen)/i;function qt(n, e, r, i) {
        var t;if (Array.isArray(e)) k.each(e, function (e, t) {
            r || Nt.test(n) ? i(n, t) : qt(n + "[" + ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && null != t ? e : "") + "]", t, r, i);
        });else if (r || "object" !== w(e)) i(n, e);else for (t in e) {
            qt(n + "[" + t + "]", e[t], r, i);
        }
    }k.param = function (e, t) {
        var n,
            r = [],
            i = function i(e, t) {
            var n = m(t) ? t() : t;r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
        };if (null == e) return "";if (Array.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, function () {
            i(this.name, this.value);
        });else for (n in e) {
            qt(n, e[n], t, i);
        }return r.join("&");
    }, k.fn.extend({ serialize: function serialize() {
            return k.param(this.serializeArray());
        }, serializeArray: function serializeArray() {
            return this.map(function () {
                var e = k.prop(this, "elements");return e ? k.makeArray(e) : this;
            }).filter(function () {
                var e = this.type;return this.name && !k(this).is(":disabled") && jt.test(this.nodeName) && !Dt.test(e) && (this.checked || !pe.test(e));
            }).map(function (e, t) {
                var n = k(this).val();return null == n ? null : Array.isArray(n) ? k.map(n, function (e) {
                    return { name: t.name, value: e.replace(At, "\r\n") };
                }) : { name: t.name, value: n.replace(At, "\r\n") };
            }).get();
        } });var Lt = /%20/g,
        Ht = /#.*$/,
        Ot = /([?&])_=[^&]*/,
        Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Rt = /^(?:GET|HEAD)$/,
        Mt = /^\/\//,
        It = {},
        Wt = {},
        $t = "*/".concat("*"),
        Ft = E.createElement("a");function Bt(o) {
        return function (e, t) {
            "string" != typeof e && (t = e, e = "*");var n,
                r = 0,
                i = e.toLowerCase().match(R) || [];if (m(t)) while (n = i[r++]) {
                "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
            }
        };
    }function _t(t, i, o, a) {
        var s = {},
            u = t === Wt;function l(e) {
            var r;return s[e] = !0, k.each(t[e] || [], function (e, t) {
                var n = t(i, o, a);return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1);
            }), r;
        }return l(i.dataTypes[0]) || !s["*"] && l("*");
    }function zt(e, t) {
        var n,
            r,
            i = k.ajaxSettings.flatOptions || {};for (n in t) {
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        }return r && k.extend(!0, e, r), e;
    }Ft.href = Et.href, k.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Et.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": $t, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": k.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(e, t) {
            return t ? zt(zt(e, k.ajaxSettings), t) : zt(k.ajaxSettings, e);
        }, ajaxPrefilter: Bt(It), ajaxTransport: Bt(Wt), ajax: function ajax(e, t) {
            "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && (t = e, e = void 0), t = t || {};var c,
                f,
                p,
                n,
                d,
                r,
                h,
                g,
                i,
                o,
                v = k.ajaxSetup({}, t),
                y = v.context || v,
                m = v.context && (y.nodeType || y.jquery) ? k(y) : k.event,
                x = k.Deferred(),
                b = k.Callbacks("once memory"),
                w = v.statusCode || {},
                a = {},
                s = {},
                u = "canceled",
                T = { readyState: 0, getResponseHeader: function getResponseHeader(e) {
                    var t;if (h) {
                        if (!n) {
                            n = {};while (t = Pt.exec(p)) {
                                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            }
                        }t = n[e.toLowerCase() + " "];
                    }return null == t ? null : t.join(", ");
                }, getAllResponseHeaders: function getAllResponseHeaders() {
                    return h ? p : null;
                }, setRequestHeader: function setRequestHeader(e, t) {
                    return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this;
                }, overrideMimeType: function overrideMimeType(e) {
                    return null == h && (v.mimeType = e), this;
                }, statusCode: function statusCode(e) {
                    var t;if (e) if (h) T.always(e[T.status]);else for (t in e) {
                        w[t] = [w[t], e[t]];
                    }return this;
                }, abort: function abort(e) {
                    var t = e || u;return c && c.abort(t), l(0, t), this;
                } };if (x.promise(T), v.url = ((e || v.url || Et.href) + "").replace(Mt, Et.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(R) || [""], null == v.crossDomain) {
                r = E.createElement("a");try {
                    r.href = v.url, r.href = r.href, v.crossDomain = Ft.protocol + "//" + Ft.host != r.protocol + "//" + r.host;
                } catch (e) {
                    v.crossDomain = !0;
                }
            }if (v.data && v.processData && "string" != typeof v.data && (v.data = k.param(v.data, v.traditional)), _t(It, v, t, T), h) return T;for (i in (g = k.event && v.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Rt.test(v.type), f = v.url.replace(Ht, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Lt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (St.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Ot, "$1"), o = (St.test(f) ? "&" : "?") + "_=" + kt++ + o), v.url = f + o), v.ifModified && (k.lastModified[f] && T.setRequestHeader("If-Modified-Since", k.lastModified[f]), k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : v.accepts["*"]), v.headers) {
                T.setRequestHeader(i, v.headers[i]);
            }if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = _t(Wt, v, t, T)) {
                if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;v.async && 0 < v.timeout && (d = C.setTimeout(function () {
                    T.abort("timeout");
                }, v.timeout));try {
                    h = !1, c.send(a, l);
                } catch (e) {
                    if (h) throw e;l(-1, e);
                }
            } else l(-1, "No Transport");function l(e, t, n, r) {
                var i,
                    o,
                    a,
                    s,
                    u,
                    l = t;h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
                    var r,
                        i,
                        o,
                        a,
                        s = e.contents,
                        u = e.dataTypes;while ("*" === u[0]) {
                        u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    }if (r) for (i in s) {
                        if (s[i] && s[i].test(r)) {
                            u.unshift(i);break;
                        }
                    }if (u[0] in n) o = u[0];else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;break;
                            }a || (a = i);
                        }o = o || a;
                    }if (o) return o !== u[0] && u.unshift(o), n[o];
                }(v, T, n)), s = function (e, t, n, r) {
                    var i,
                        o,
                        a,
                        s,
                        u,
                        l = {},
                        c = e.dataTypes.slice();if (c[1]) for (a in e.converters) {
                        l[a.toLowerCase()] = e.converters[a];
                    }o = c.shift();while (o) {
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
                            if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) {
                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));break;
                                }
                            }if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
                                t = a(t);
                            } catch (e) {
                                return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o };
                            }
                        }
                    }return { state: "success", data: t };
                }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (k.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (k.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --k.active || k.event.trigger("ajaxStop")));
            }return T;
        }, getJSON: function getJSON(e, t, n) {
            return k.get(e, t, n, "json");
        }, getScript: function getScript(e, t) {
            return k.get(e, void 0, t, "script");
        } }), k.each(["get", "post"], function (e, i) {
        k[i] = function (e, t, n, r) {
            return m(t) && (r = r || n, n = t, t = void 0), k.ajax(k.extend({ url: e, type: i, dataType: r, data: t, success: n }, k.isPlainObject(e) && e));
        };
    }), k._evalUrl = function (e, t) {
        return k.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, converters: { "text script": function textScript() {} }, dataFilter: function dataFilter(e) {
                k.globalEval(e, t);
            } });
    }, k.fn.extend({ wrapAll: function wrapAll(e) {
            var t;return this[0] && (m(e) && (e = e.call(this[0])), t = k(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                var e = this;while (e.firstElementChild) {
                    e = e.firstElementChild;
                }return e;
            }).append(this)), this;
        }, wrapInner: function wrapInner(n) {
            return m(n) ? this.each(function (e) {
                k(this).wrapInner(n.call(this, e));
            }) : this.each(function () {
                var e = k(this),
                    t = e.contents();t.length ? t.wrapAll(n) : e.append(n);
            });
        }, wrap: function wrap(t) {
            var n = m(t);return this.each(function (e) {
                k(this).wrapAll(n ? t.call(this, e) : t);
            });
        }, unwrap: function unwrap(e) {
            return this.parent(e).not("body").each(function () {
                k(this).replaceWith(this.childNodes);
            }), this;
        } }), k.expr.pseudos.hidden = function (e) {
        return !k.expr.pseudos.visible(e);
    }, k.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }, k.ajaxSettings.xhr = function () {
        try {
            return new C.XMLHttpRequest();
        } catch (e) {}
    };var Ut = { 0: 200, 1223: 204 },
        Xt = k.ajaxSettings.xhr();y.cors = !!Xt && "withCredentials" in Xt, y.ajax = Xt = !!Xt, k.ajaxTransport(function (i) {
        var _o, a;if (y.cors || Xt && !i.crossDomain) return { send: function send(e, t) {
                var n,
                    r = i.xhr();if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) {
                    r[n] = i.xhrFields[n];
                }for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) {
                    r.setRequestHeader(n, e[n]);
                }_o = function o(e) {
                    return function () {
                        _o && (_o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Ut[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? { binary: r.response } : { text: r.responseText }, r.getAllResponseHeaders()));
                    };
                }, r.onload = _o(), a = r.onerror = r.ontimeout = _o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
                    4 === r.readyState && C.setTimeout(function () {
                        _o && a();
                    });
                }, _o = _o("abort");try {
                    r.send(i.hasContent && i.data || null);
                } catch (e) {
                    if (_o) throw e;
                }
            }, abort: function abort() {
                _o && _o();
            } };
    }), k.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1);
    }), k.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(e) {
                return k.globalEval(e), e;
            } } }), k.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }), k.ajaxTransport("script", function (n) {
        var r, _i;if (n.crossDomain || n.scriptAttrs) return { send: function send(e, t) {
                r = k("<script>").attr(n.scriptAttrs || {}).prop({ charset: n.scriptCharset, src: n.url }).on("load error", _i = function i(e) {
                    r.remove(), _i = null, e && t("error" === e.type ? 404 : 200, e.type);
                }), E.head.appendChild(r[0]);
            }, abort: function abort() {
                _i && _i();
            } };
    });var Vt,
        Gt = [],
        Yt = /(=)\?(?=&|$)|\?\?/;k.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
            var e = Gt.pop() || k.expando + "_" + kt++;return this[e] = !0, e;
        } }), k.ajaxPrefilter("json jsonp", function (e, t, n) {
        var r,
            i,
            o,
            a = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Yt, "$1" + r) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
            return o || k.error(r + " was not called"), o[0];
        }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
            o = arguments;
        }, n.always(function () {
            void 0 === i ? k(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Gt.push(r)), o && m(i) && i(o[0]), o = i = void 0;
        }), "script";
    }), y.createHTMLDocument = ((Vt = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Vt.childNodes.length), k.parseHTML = function (e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = D.exec(e)) ? [t.createElement(i[1])] : (i = we([e], t, o), o && o.length && k(o).remove(), k.merge([], i.childNodes)));var r, i, o;
    }, k.fn.load = function (e, t, n) {
        var r,
            i,
            o,
            a = this,
            s = e.indexOf(" ");return -1 < s && (r = mt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (i = "POST"), 0 < a.length && k.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function (e) {
            o = arguments, a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e);
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(this, o || [e.responseText, t, e]);
            });
        }), this;
    }, k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        k.fn[t] = function (e) {
            return this.on(t, e);
        };
    }), k.expr.pseudos.animated = function (t) {
        return k.grep(k.timers, function (e) {
            return t === e.elem;
        }).length;
    }, k.offset = { setOffset: function setOffset(e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                u,
                l = k.css(e, "position"),
                c = k(e),
                f = {};"static" === l && (e.style.position = "relative"), s = c.offset(), o = k.css(e, "top"), u = k.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, k.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f);
        } }, k.fn.extend({ offset: function offset(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                k.offset.setOffset(this, t, e);
            });var e,
                n,
                r = this[0];return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0;
        }, position: function position() {
            if (this[0]) {
                var e,
                    t,
                    n,
                    r = this[0],
                    i = { top: 0, left: 0 };if ("fixed" === k.css(r, "position")) t = r.getBoundingClientRect();else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;while (e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position")) {
                        e = e.parentNode;
                    }e && e !== r && 1 === e.nodeType && ((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0), i.left += k.css(e, "borderLeftWidth", !0));
                }return { top: t.top - i.top - k.css(r, "marginTop", !0), left: t.left - i.left - k.css(r, "marginLeft", !0) };
            }
        }, offsetParent: function offsetParent() {
            return this.map(function () {
                var e = this.offsetParent;while (e && "static" === k.css(e, "position")) {
                    e = e.offsetParent;
                }return e || ie;
            });
        } }), k.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, i) {
        var o = "pageYOffset" === i;k.fn[t] = function (e) {
            return _(this, function (e, t, n) {
                var r;if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n;
            }, t, e, arguments.length);
        };
    }), k.each(["top", "left"], function (e, n) {
        k.cssHooks[n] = ze(y.pixelPosition, function (e, t) {
            if (t) return t = _e(e, n), $e.test(t) ? k(e).position()[n] + "px" : t;
        });
    }), k.each({ Height: "height", Width: "width" }, function (a, s) {
        k.each({ padding: "inner" + a, content: s, "": "outer" + a }, function (r, o) {
            k.fn[o] = function (e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");return _(this, function (e, t, n) {
                    var r;return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? k.css(e, t, i) : k.style(e, t, n, i);
                }, s, n ? e : void 0, n);
            };
        });
    }), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
        k.fn[n] = function (e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
        };
    }), k.fn.extend({ hover: function hover(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
        } }), k.fn.extend({ bind: function bind(e, t, n) {
            return this.on(e, null, t, n);
        }, unbind: function unbind(e, t) {
            return this.off(e, null, t);
        }, delegate: function delegate(e, t, n, r) {
            return this.on(t, e, n, r);
        }, undelegate: function undelegate(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        } }), k.proxy = function (e, t) {
        var n, r, i;if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function i() {
            return e.apply(t || this, r.concat(s.call(arguments)));
        }).guid = e.guid = e.guid || k.guid++, i;
    }, k.holdReady = function (e) {
        e ? k.readyWait++ : k.ready(!0);
    }, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = A, k.isFunction = m, k.isWindow = x, k.camelCase = V, k.type = w, k.now = Date.now, k.isNumeric = function (e) {
        var t = k.type(e);return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return k;
    });var Qt = C.jQuery,
        Jt = C.$;return k.noConflict = function (e) {
        return C.$ === k && (C.$ = Jt), e && C.jQuery === k && (C.jQuery = Qt), k;
    }, e || (C.jQuery = C.$ = k), k;
});

/*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function (t, e) {
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e((t = t || self).bootstrap = {}, t.jQuery, t.Popper);
}(this, function (t, g, u) {
    "use strict";
    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
        }
    }function s(t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t;
    }function l(o) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
                e = Object.keys(r);"function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(r).filter(function (t) {
                return Object.getOwnPropertyDescriptor(r, t).enumerable;
            }))), e.forEach(function (t) {
                var e, n, i;e = o, i = r[n = t], n in e ? Object.defineProperty(e, n, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = i;
            });
        }return o;
    }g = g && g.hasOwnProperty("default") ? g.default : g, u = u && u.hasOwnProperty("default") ? u.default : u;var e = "transitionend";function n(t) {
        var e = this,
            n = !1;return g(this).one(_.TRANSITION_END, function () {
            n = !0;
        }), setTimeout(function () {
            n || _.triggerTransitionEnd(e);
        }, t), this;
    }var _ = { TRANSITION_END: "bsTransitionEnd", getUID: function getUID(t) {
            for (; t += ~~(1e6 * Math.random()), document.getElementById(t);) {}return t;
        }, getSelectorFromElement: function getSelectorFromElement(t) {
            var e = t.getAttribute("data-target");if (!e || "#" === e) {
                var n = t.getAttribute("href");e = n && "#" !== n ? n.trim() : "";
            }try {
                return document.querySelector(e) ? e : null;
            } catch (t) {
                return null;
            }
        }, getTransitionDurationFromElement: function getTransitionDurationFromElement(t) {
            if (!t) return 0;var e = g(t).css("transition-duration"),
                n = g(t).css("transition-delay"),
                i = parseFloat(e),
                o = parseFloat(n);return i || o ? (e = e.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(e) + parseFloat(n))) : 0;
        }, reflow: function reflow(t) {
            return t.offsetHeight;
        }, triggerTransitionEnd: function triggerTransitionEnd(t) {
            g(t).trigger(e);
        }, supportsTransitionEnd: function supportsTransitionEnd() {
            return Boolean(e);
        }, isElement: function isElement(t) {
            return (t[0] || t).nodeType;
        }, typeCheckConfig: function typeCheckConfig(t, e, n) {
            for (var i in n) {
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var o = n[i],
                        r = e[i],
                        s = r && _.isElement(r) ? "element" : (a = r, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if (!new RegExp(o).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".');
                }
            }var a;
        }, findShadowRoot: function findShadowRoot(t) {
            if (!document.documentElement.attachShadow) return null;if ("function" != typeof t.getRootNode) return t instanceof ShadowRoot ? t : t.parentNode ? _.findShadowRoot(t.parentNode) : null;var e = t.getRootNode();return e instanceof ShadowRoot ? e : null;
        } };g.fn.emulateTransitionEnd = n, g.event.special[_.TRANSITION_END] = { bindType: e, delegateType: e, handle: function handle(t) {
            if (g(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
        } };var o = "alert",
        r = "bs.alert",
        a = "." + r,
        c = g.fn[o],
        h = { CLOSE: "close" + a, CLOSED: "closed" + a, CLICK_DATA_API: "click" + a + ".data-api" },
        f = "alert",
        d = "fade",
        m = "show",
        p = function () {
        function i(t) {
            this._element = t;
        }var t = i.prototype;return t.close = function (t) {
            var e = this._element;t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
        }, t.dispose = function () {
            g.removeData(this._element, r), this._element = null;
        }, t._getRootElement = function (t) {
            var e = _.getSelectorFromElement(t),
                n = !1;return e && (n = document.querySelector(e)), n || (n = g(t).closest("." + f)[0]), n;
        }, t._triggerCloseEvent = function (t) {
            var e = g.Event(h.CLOSE);return g(t).trigger(e), e;
        }, t._removeElement = function (e) {
            var n = this;if (g(e).removeClass(m), g(e).hasClass(d)) {
                var t = _.getTransitionDurationFromElement(e);g(e).one(_.TRANSITION_END, function (t) {
                    return n._destroyElement(e, t);
                }).emulateTransitionEnd(t);
            } else this._destroyElement(e);
        }, t._destroyElement = function (t) {
            g(t).detach().trigger(h.CLOSED).remove();
        }, i._jQueryInterface = function (n) {
            return this.each(function () {
                var t = g(this),
                    e = t.data(r);e || (e = new i(this), t.data(r, e)), "close" === n && e[n](this);
            });
        }, i._handleDismiss = function (e) {
            return function (t) {
                t && t.preventDefault(), e.close(this);
            };
        }, s(i, null, [{ key: "VERSION", get: function get() {
                return "4.3.1";
            } }]), i;
    }();g(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p())), g.fn[o] = p._jQueryInterface, g.fn[o].Constructor = p, g.fn[o].noConflict = function () {
        return g.fn[o] = c, p._jQueryInterface;
    };var v = "button",
        y = "bs.button",
        E = "." + y,
        C = ".data-api",
        T = g.fn[v],
        S = "active",
        b = "btn",
        I = "focus",
        D = '[data-toggle^="button"]',
        w = '[data-toggle="buttons"]',
        A = 'input:not([type="hidden"])',
        N = ".active",
        O = ".btn",
        k = { CLICK_DATA_API: "click" + E + C, FOCUS_BLUR_DATA_API: "focus" + E + C + " blur" + E + C },
        P = function () {
        function n(t) {
            this._element = t;
        }var t = n.prototype;return t.toggle = function () {
            var t = !0,
                e = !0,
                n = g(this._element).closest(w)[0];if (n) {
                var i = this._element.querySelector(A);if (i) {
                    if ("radio" === i.type) if (i.checked && this._element.classList.contains(S)) t = !1;else {
                        var o = n.querySelector(N);o && g(o).removeClass(S);
                    }if (t) {
                        if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;i.checked = !this._element.classList.contains(S), g(i).trigger("change");
                    }i.focus(), e = !1;
                }
            }e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(S)), t && g(this._element).toggleClass(S);
        }, t.dispose = function () {
            g.removeData(this._element, y), this._element = null;
        }, n._jQueryInterface = function (e) {
            return this.each(function () {
                var t = g(this).data(y);t || (t = new n(this), g(this).data(y, t)), "toggle" === e && t[e]();
            });
        }, s(n, null, [{ key: "VERSION", get: function get() {
                return "4.3.1";
            } }]), n;
    }();g(document).on(k.CLICK_DATA_API, D, function (t) {
        t.preventDefault();var e = t.target;g(e).hasClass(b) || (e = g(e).closest(O)), P._jQueryInterface.call(g(e), "toggle");
    }).on(k.FOCUS_BLUR_DATA_API, D, function (t) {
        var e = g(t.target).closest(O)[0];g(e).toggleClass(I, /^focus(in)?$/.test(t.type));
    }), g.fn[v] = P._jQueryInterface, g.fn[v].Constructor = P, g.fn[v].noConflict = function () {
        return g.fn[v] = T, P._jQueryInterface;
    };var L = "carousel",
        j = "bs.carousel",
        H = "." + j,
        R = ".data-api",
        x = g.fn[L],
        F = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
        U = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" },
        W = "next",
        q = "prev",
        M = "left",
        K = "right",
        Q = { SLIDE: "slide" + H, SLID: "slid" + H, KEYDOWN: "keydown" + H, MOUSEENTER: "mouseenter" + H, MOUSELEAVE: "mouseleave" + H, TOUCHSTART: "touchstart" + H, TOUCHMOVE: "touchmove" + H, TOUCHEND: "touchend" + H, POINTERDOWN: "pointerdown" + H, POINTERUP: "pointerup" + H, DRAG_START: "dragstart" + H, LOAD_DATA_API: "load" + H + R, CLICK_DATA_API: "click" + H + R },
        B = "carousel",
        V = "active",
        Y = "slide",
        z = "carousel-item-right",
        X = "carousel-item-left",
        $ = "carousel-item-next",
        G = "carousel-item-prev",
        J = "pointer-event",
        Z = ".active",
        tt = ".active.carousel-item",
        et = ".carousel-item",
        nt = ".carousel-item img",
        it = ".carousel-item-next, .carousel-item-prev",
        ot = ".carousel-indicators",
        rt = "[data-slide], [data-slide-to]",
        st = '[data-ride="carousel"]',
        at = { TOUCH: "touch", PEN: "pen" },
        lt = function () {
        function r(t, e) {
            this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(ot), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners();
        }var t = r.prototype;return t.next = function () {
            this._isSliding || this._slide(W);
        }, t.nextWhenVisible = function () {
            !document.hidden && g(this._element).is(":visible") && "hidden" !== g(this._element).css("visibility") && this.next();
        }, t.prev = function () {
            this._isSliding || this._slide(q);
        }, t.pause = function (t) {
            t || (this._isPaused = !0), this._element.querySelector(it) && (_.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
        }, t.cycle = function (t) {
            t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
        }, t.to = function (t) {
            var e = this;this._activeElement = this._element.querySelector(tt);var n = this._getItemIndex(this._activeElement);if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) g(this._element).one(Q.SLID, function () {
                return e.to(t);
            });else {
                if (n === t) return this.pause(), void this.cycle();var i = n < t ? W : q;this._slide(i, this._items[t]);
            }
        }, t.dispose = function () {
            g(this._element).off(H), g.removeData(this._element, j), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
        }, t._getConfig = function (t) {
            return t = l({}, F, t), _.typeCheckConfig(L, t, U), t;
        }, t._handleSwipe = function () {
            var t = Math.abs(this.touchDeltaX);if (!(t <= 40)) {
                var e = t / this.touchDeltaX;0 < e && this.prev(), e < 0 && this.next();
            }
        }, t._addEventListeners = function () {
            var e = this;this._config.keyboard && g(this._element).on(Q.KEYDOWN, function (t) {
                return e._keydown(t);
            }), "hover" === this._config.pause && g(this._element).on(Q.MOUSEENTER, function (t) {
                return e.pause(t);
            }).on(Q.MOUSELEAVE, function (t) {
                return e.cycle(t);
            }), this._config.touch && this._addTouchEventListeners();
        }, t._addTouchEventListeners = function () {
            var n = this;if (this._touchSupported) {
                var e = function e(t) {
                    n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()] ? n.touchStartX = t.originalEvent.clientX : n._pointerEvent || (n.touchStartX = t.originalEvent.touches[0].clientX);
                },
                    i = function i(t) {
                    n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = t.originalEvent.clientX - n.touchStartX), n._handleSwipe(), "hover" === n._config.pause && (n.pause(), n.touchTimeout && clearTimeout(n.touchTimeout), n.touchTimeout = setTimeout(function (t) {
                        return n.cycle(t);
                    }, 500 + n._config.interval));
                };g(this._element.querySelectorAll(nt)).on(Q.DRAG_START, function (t) {
                    return t.preventDefault();
                }), this._pointerEvent ? (g(this._element).on(Q.POINTERDOWN, function (t) {
                    return e(t);
                }), g(this._element).on(Q.POINTERUP, function (t) {
                    return i(t);
                }), this._element.classList.add(J)) : (g(this._element).on(Q.TOUCHSTART, function (t) {
                    return e(t);
                }), g(this._element).on(Q.TOUCHMOVE, function (t) {
                    var e;(e = t).originalEvent.touches && 1 < e.originalEvent.touches.length ? n.touchDeltaX = 0 : n.touchDeltaX = e.originalEvent.touches[0].clientX - n.touchStartX;
                }), g(this._element).on(Q.TOUCHEND, function (t) {
                    return i(t);
                }));
            }
        }, t._keydown = function (t) {
            if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {case 37:
                    t.preventDefault(), this.prev();break;case 39:
                    t.preventDefault(), this.next();}
        }, t._getItemIndex = function (t) {
            return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(et)) : [], this._items.indexOf(t);
        }, t._getItemByDirection = function (t, e) {
            var n = t === W,
                i = t === q,
                o = this._getItemIndex(e),
                r = this._items.length - 1;if ((i && 0 === o || n && o === r) && !this._config.wrap) return e;var s = (o + (t === q ? -1 : 1)) % this._items.length;return -1 === s ? this._items[this._items.length - 1] : this._items[s];
        }, t._triggerSlideEvent = function (t, e) {
            var n = this._getItemIndex(t),
                i = this._getItemIndex(this._element.querySelector(tt)),
                o = g.Event(Q.SLIDE, { relatedTarget: t, direction: e, from: i, to: n });return g(this._element).trigger(o), o;
        }, t._setActiveIndicatorElement = function (t) {
            if (this._indicatorsElement) {
                var e = [].slice.call(this._indicatorsElement.querySelectorAll(Z));g(e).removeClass(V);var n = this._indicatorsElement.children[this._getItemIndex(t)];n && g(n).addClass(V);
            }
        }, t._slide = function (t, e) {
            var n,
                i,
                o,
                r = this,
                s = this._element.querySelector(tt),
                a = this._getItemIndex(s),
                l = e || s && this._getItemByDirection(t, s),
                c = this._getItemIndex(l),
                h = Boolean(this._interval);if (o = t === W ? (n = X, i = $, M) : (n = z, i = G, K), l && g(l).hasClass(V)) this._isSliding = !1;else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && s && l) {
                this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(l);var u = g.Event(Q.SLID, { relatedTarget: l, direction: o, from: a, to: c });if (g(this._element).hasClass(Y)) {
                    g(l).addClass(i), _.reflow(l), g(s).addClass(n), g(l).addClass(n);var f = parseInt(l.getAttribute("data-interval"), 10);this._config.interval = f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, f) : this._config.defaultInterval || this._config.interval;var d = _.getTransitionDurationFromElement(s);g(s).one(_.TRANSITION_END, function () {
                        g(l).removeClass(n + " " + i).addClass(V), g(s).removeClass(V + " " + i + " " + n), r._isSliding = !1, setTimeout(function () {
                            return g(r._element).trigger(u);
                        }, 0);
                    }).emulateTransitionEnd(d);
                } else g(s).removeClass(V), g(l).addClass(V), this._isSliding = !1, g(this._element).trigger(u);h && this.cycle();
            }
        }, r._jQueryInterface = function (i) {
            return this.each(function () {
                var t = g(this).data(j),
                    e = l({}, F, g(this).data());"object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) && (e = l({}, e, i));var n = "string" == typeof i ? i : e.slide;if (t || (t = new r(this, e), g(this).data(j, t)), "number" == typeof i) t.to(i);else if ("string" == typeof n) {
                    if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');t[n]();
                } else e.interval && e.ride && (t.pause(), t.cycle());
            });
        }, r._dataApiClickHandler = function (t) {
            var e = _.getSelectorFromElement(this);if (e) {
                var n = g(e)[0];if (n && g(n).hasClass(B)) {
                    var i = l({}, g(n).data(), g(this).data()),
                        o = this.getAttribute("data-slide-to");o && (i.interval = !1), r._jQueryInterface.call(g(n), i), o && g(n).data(j).to(o), t.preventDefault();
                }
            }
        }, s(r, null, [{ key: "VERSION", get: function get() {
                return "4.3.1";
            } }, { key: "Default", get: function get() {
                return F;
            } }]), r;
    }();g(document).on(Q.CLICK_DATA_API, rt, lt._dataApiClickHandler), g(window).on(Q.LOAD_DATA_API, function () {
        for (var t = [].slice.call(document.querySelectorAll(st)), e = 0, n = t.length; e < n; e++) {
            var i = g(t[e]);lt._jQueryInterface.call(i, i.data());
        }
    }), g.fn[L] = lt._jQueryInterface, g.fn[L].Constructor = lt, g.fn[L].noConflict = function () {
        return g.fn[L] = x, lt._jQueryInterface;
    };var ct = "collapse",
        ht = "bs.collapse",
        ut = "." + ht,
        ft = g.fn[ct],
        dt = { toggle: !0, parent: "" },
        gt = { toggle: "boolean", parent: "(string|element)" },
        _t = { SHOW: "show" + ut, SHOWN: "shown" + ut, HIDE: "hide" + ut, HIDDEN: "hidden" + ut, CLICK_DATA_API: "click" + ut + ".data-api" },
        mt = "show",
        pt = "collapse",
        vt = "collapsing",
        yt = "collapsed",
        Et = "width",
        Ct = "height",
        Tt = ".show, .collapsing",
        St = '[data-toggle="collapse"]',
        bt = function () {
        function a(e, t) {
            this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));for (var n = [].slice.call(document.querySelectorAll(St)), i = 0, o = n.length; i < o; i++) {
                var r = n[i],
                    s = _.getSelectorFromElement(r),
                    a = [].slice.call(document.querySelectorAll(s)).filter(function (t) {
                    return t === e;
                });null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(r));
            }this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
        }var t = a.prototype;return t.toggle = function () {
            g(this._element).hasClass(mt) ? this.hide() : this.show();
        }, t.show = function () {
            var t,
                e,
                n = this;if (!this._isTransitioning && !g(this._element).hasClass(mt) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(Tt)).filter(function (t) {
                return "string" == typeof n._config.parent ? t.getAttribute("data-parent") === n._config.parent : t.classList.contains(pt);
            })).length && (t = null), !(t && (e = g(t).not(this._selector).data(ht)) && e._isTransitioning))) {
                var i = g.Event(_t.SHOW);if (g(this._element).trigger(i), !i.isDefaultPrevented()) {
                    t && (a._jQueryInterface.call(g(t).not(this._selector), "hide"), e || g(t).data(ht, null));var o = this._getDimension();g(this._element).removeClass(pt).addClass(vt), this._element.style[o] = 0, this._triggerArray.length && g(this._triggerArray).removeClass(yt).attr("aria-expanded", !0), this.setTransitioning(!0);var r = "scroll" + (o[0].toUpperCase() + o.slice(1)),
                        s = _.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END, function () {
                        g(n._element).removeClass(vt).addClass(pt).addClass(mt), n._element.style[o] = "", n.setTransitioning(!1), g(n._element).trigger(_t.SHOWN);
                    }).emulateTransitionEnd(s), this._element.style[o] = this._element[r] + "px";
                }
            }
        }, t.hide = function () {
            var t = this;if (!this._isTransitioning && g(this._element).hasClass(mt)) {
                var e = g.Event(_t.HIDE);if (g(this._element).trigger(e), !e.isDefaultPrevented()) {
                    var n = this._getDimension();this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", _.reflow(this._element), g(this._element).addClass(vt).removeClass(pt).removeClass(mt);var i = this._triggerArray.length;if (0 < i) for (var o = 0; o < i; o++) {
                        var r = this._triggerArray[o],
                            s = _.getSelectorFromElement(r);if (null !== s) g([].slice.call(document.querySelectorAll(s))).hasClass(mt) || g(r).addClass(yt).attr("aria-expanded", !1);
                    }this.setTransitioning(!0);this._element.style[n] = "";var a = _.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END, function () {
                        t.setTransitioning(!1), g(t._element).removeClass(vt).addClass(pt).trigger(_t.HIDDEN);
                    }).emulateTransitionEnd(a);
                }
            }
        }, t.setTransitioning = function (t) {
            this._isTransitioning = t;
        }, t.dispose = function () {
            g.removeData(this._element, ht), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
        }, t._getConfig = function (t) {
            return (t = l({}, dt, t)).toggle = Boolean(t.toggle), _.typeCheckConfig(ct, t, gt), t;
        }, t._getDimension = function () {
            return g(this._element).hasClass(Et) ? Et : Ct;
        }, t._getParent = function () {
            var t,
                n = this;_.isElement(this._config.parent) ? (t = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                i = [].slice.call(t.querySelectorAll(e));return g(i).each(function (t, e) {
                n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e]);
            }), t;
        }, t._addAriaAndCollapsedClass = function (t, e) {
            var n = g(t).hasClass(mt);e.length && g(e).toggleClass(yt, !n).attr("aria-expanded", n);
        }, a._getTargetFromElement = function (t) {
            var e = _.getSelectorFromElement(t);return e ? document.querySelector(e) : null;
        }, a._jQueryInterface = function (i) {
            return this.each(function () {
                var t = g(this),
                    e = t.data(ht),
                    n = l({}, dt, t.data(), "object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) && i ? i : {});if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), t.data(ht, e)), "string" == typeof i) {
                    if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"');e[i]();
                }
            });
        }, s(a, null, [{ key: "VERSION", get: function get() {
                return "4.3.1";
            } }, { key: "Default", get: function get() {
                return dt;
            } }]), a;
    }();g(document).on(_t.CLICK_DATA_API, St, function (t) {
        "A" === t.currentTarget.tagName && t.preventDefault();var n = g(this),
            e = _.getSelectorFromElement(this),
            i = [].slice.call(document.querySelectorAll(e));g(i).each(function () {
            var t = g(this),
                e = t.data(ht) ? "toggle" : n.data();bt._jQueryInterface.call(t, e);
        });
    }), g.fn[ct] = bt._jQueryInterface, g.fn[ct].Constructor = bt, g.fn[ct].noConflict = function () {
        return g.fn[ct] = ft, bt._jQueryInterface;
    };var It = "dropdown",
        Dt = "bs.dropdown",
        wt = "." + Dt,
        At = ".data-api",
        Nt = g.fn[It],
        Ot = new RegExp("38|40|27"),
        kt = { HIDE: "hide" + wt, HIDDEN: "hidden" + wt, SHOW: "show" + wt, SHOWN: "shown" + wt, CLICK: "click" + wt, CLICK_DATA_API: "click" + wt + At, KEYDOWN_DATA_API: "keydown" + wt + At, KEYUP_DATA_API: "keyup" + wt + At },
        Pt = "disabled",
        Lt = "show",
        jt = "dropup",
        Ht = "dropright",
        Rt = "dropleft",
        xt = "dropdown-menu-right",
        Ft = "position-static",
        Ut = '[data-toggle="dropdown"]',
        Wt = ".dropdown form",
        qt = ".dropdown-menu",
        Mt = ".navbar-nav",
        Kt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        Qt = "top-start",
        Bt = "top-end",
        Vt = "bottom-start",
        Yt = "bottom-end",
        zt = "right-start",
        Xt = "left-start",
        $t = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic" },
        Gt = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string" },
        Jt = function () {
        function c(t, e) {
            this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
        }var t = c.prototype;return t.toggle = function () {
            if (!this._element.disabled && !g(this._element).hasClass(Pt)) {
                var t = c._getParentFromElement(this._element),
                    e = g(this._menu).hasClass(Lt);if (c._clearMenus(), !e) {
                    var n = { relatedTarget: this._element },
                        i = g.Event(kt.SHOW, n);if (g(t).trigger(i), !i.isDefaultPrevented()) {
                        if (!this._inNavbar) {
                            if ("undefined" == typeof u) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var o = this._element;"parent" === this._config.reference ? o = t : _.isElement(this._config.reference) && (o = this._config.reference, "undefined" != typeof this._config.reference.jquery && (o = this._config.reference[0])), "scrollParent" !== this._config.boundary && g(t).addClass(Ft), this._popper = new u(o, this._menu, this._getPopperConfig());
                        }"ontouchstart" in document.documentElement && 0 === g(t).closest(Mt).length && g(document.body).children().on("mouseover", null, g.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), g(this._menu).toggleClass(Lt), g(t).toggleClass(Lt).trigger(g.Event(kt.SHOWN, n));
                    }
                }
            }
        }, t.show = function () {
            if (!(this._element.disabled || g(this._element).hasClass(Pt) || g(this._menu).hasClass(Lt))) {
                var t = { relatedTarget: this._element },
                    e = g.Event(kt.SHOW, t),
                    n = c._getParentFromElement(this._element);g(n).trigger(e), e.isDefaultPrevented() || (g(this._menu).toggleClass(Lt), g(n).toggleClass(Lt).trigger(g.Event(kt.SHOWN, t)));
            }
        }, t.hide = function () {
            if (!this._element.disabled && !g(this._element).hasClass(Pt) && g(this._menu).hasClass(Lt)) {
                var t = { relatedTarget: this._element },
                    e = g.Event(kt.HIDE, t),
                    n = c._getParentFromElement(this._element);g(n).trigger(e), e.isDefaultPrevented() || (g(this._menu).toggleClass(Lt), g(n).toggleClass(Lt).trigger(g.Event(kt.HIDDEN, t)));
            }
        }, t.dispose = function () {
            g.removeData(this._element, Dt), g(this._element).off(wt), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null);
        }, t.update = function () {
            this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
        }, t._addEventListeners = function () {
            var e = this;g(this._element).on(kt.CLICK, function (t) {
                t.preventDefault(), t.stopPropagation(), e.toggle();
            });
        }, t._getConfig = function (t) {
            return t = l({}, this.constructor.Default, g(this._element).data(), t), _.typeCheckConfig(It, t, this.constructor.DefaultType), t;
        }, t._getMenuElement = function () {
            if (!this._menu) {
                var t = c._getParentFromElement(this._element);t && (this._menu = t.querySelector(qt));
            }return this._menu;
        }, t._getPlacement = function () {
            var t = g(this._element.parentNode),
                e = Vt;return t.hasClass(jt) ? (e = Qt, g(this._menu).hasClass(xt) && (e = Bt)) : t.hasClass(Ht) ? e = zt : t.hasClass(Rt) ? e = Xt : g(this._menu).hasClass(xt) && (e = Yt), e;
        }, t._detectNavbar = function () {
            return 0 < g(this._element).closest(".navbar").length;
        }, t._getOffset = function () {
            var e = this,
                t = {};return "function" == typeof this._config.offset ? t.fn = function (t) {
                return t.offsets = l({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t;
            } : t.offset = this._config.offset, t;
        }, t._getPopperConfig = function () {
            var t = { placement: this._getPlacement(), modifiers: { offset: this._getOffset(), flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } };return "static" === this._config.display && (t.modifiers.applyStyle = { enabled: !1 }), t;
        }, c._jQueryInterface = function (e) {
            return this.each(function () {
                var t = g(this).data(Dt);if (t || (t = new c(this, "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? e : null), g(this).data(Dt, t)), "string" == typeof e) {
                    if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');t[e]();
                }
            });
        }, c._clearMenus = function (t) {
            if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var e = [].slice.call(document.querySelectorAll(Ut)), n = 0, i = e.length; n < i; n++) {
                var o = c._getParentFromElement(e[n]),
                    r = g(e[n]).data(Dt),
                    s = { relatedTarget: e[n] };if (t && "click" === t.type && (s.clickEvent = t), r) {
                    var a = r._menu;if (g(o).hasClass(Lt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && g.contains(o, t.target))) {
                        var l = g.Event(kt.HIDE, s);g(o).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop), e[n].setAttribute("aria-expanded", "false"), g(a).removeClass(Lt), g(o).removeClass(Lt).trigger(g.Event(kt.HIDDEN, s)));
                    }
                }
            }
        }, c._getParentFromElement = function (t) {
            var e,
                n = _.getSelectorFromElement(t);return n && (e = document.querySelector(n)), e || t.parentNode;
        }, c._dataApiKeydownHandler = function (t) {
            if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || g(t.target).closest(qt).length)) : Ot.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !g(this).hasClass(Pt))) {
                var e = c._getParentFromElement(this),
                    n = g(e).hasClass(Lt);if (n && (!n || 27 !== t.which && 32 !== t.which)) {
                    var i = [].slice.call(e.querySelectorAll(Kt));if (0 !== i.length) {
                        var o = i.indexOf(t.target);38 === t.which && 0 < o && o--, 40 === t.which && o < i.length - 1 && o++, o < 0 && (o = 0), i[o].focus();
                    }
                } else {
                    if (27 === t.which) {
                        var r = e.querySelector(Ut);g(r).trigger("focus");
                    }g(this).trigger("click");
                }
            }
        }, s(c, null, [{ key: "VERSION", get: function get() {
                return "4.3.1";
            } }, { key: "Default", get: function get() {
                return $t;
            } }, { key: "DefaultType", get: function get() {
                return Gt;
            } }]), c;
    }();g(document).on(kt.KEYDOWN_DATA_API, Ut, Jt._dataApiKeydownHandler).on(kt.KEYDOWN_DATA_API, qt, Jt._dataApiKeydownHandler).on(kt.CLICK_DATA_API + " " + kt.KEYUP_DATA_API, Jt._clearMenus).on(kt.CLICK_DATA_API, Ut, function (t) {
        t.preventDefault(), t.stopPropagation(), Jt._jQueryInterface.call(g(this), "toggle");
    }).on(kt.CLICK_DATA_API, Wt, function (t) {
        t.stopPropagation();
    }), g.fn[It] = Jt._jQueryInterface, g.fn[It].Constructor = Jt, g.fn[It].noConflict = function () {
        return g.fn[It] = Nt, Jt._jQueryInterface;
    };var Zt = "modal",
        te = "bs.modal",
        ee = "." + te,
        ne = g.fn[Zt],
        ie = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
        oe = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
        re = { HIDE: "hide" + ee, HIDDEN: "hidden" + ee, SHOW: "show" + ee, SHOWN: "shown" + ee, FOCUSIN: "focusin" + ee, RESIZE: "resize" + ee, CLICK_DISMISS: "click.dismiss" + ee, KEYDOWN_DISMISS: "keydown.dismiss" + ee, MOUSEUP_DISMISS: "mouseup.dismiss" + ee, MOUSEDOWN_DISMISS: "mousedown.dismiss" + ee, CLICK_DATA_API: "click" + ee + ".data-api" },
        se = "modal-dialog-scrollable",
        ae = "modal-scrollbar-measure",
        le = "modal-backdrop",
        ce = "modal-open",
        he = "fade",
        ue = "show",
        fe = ".modal-dialog",
        de = ".modal-body",
        ge = '[data-toggle="modal"]',
        _e = '[data-dismiss="modal"]',
        me = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        pe = ".sticky-top",
        ve = function () {
        function o(t, e) {
            this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(fe), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0;
        }var t = o.prototype;return t.toggle = function (t) {
            return this._isShown ? this.hide() : this.show(t);
        }, t.show = function (t) {
            var e = this;if (!this._isShown && !this._isTransitioning) {
                g(this._element).hasClass(he) && (this._isTransitioning = !0);var n = g.Event(re.SHOW, { relatedTarget: t });g(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), g(this._element).on(re.CLICK_DISMISS, _e, function (t) {
                    return e.hide(t);
                }), g(this._dialog).on(re.MOUSEDOWN_DISMISS, function () {
                    g(e._element).one(re.MOUSEUP_DISMISS, function (t) {
                        g(t.target).is(e._element) && (e._ignoreBackdropClick = !0);
                    });
                }), this._showBackdrop(function () {
                    return e._showElement(t);
                }));
            }
        }, t.hide = function (t) {
            var e = this;if (t && t.preventDefault(), this._isShown && !this._isTransitioning) {
                var n = g.Event(re.HIDE);if (g(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                    this._isShown = !1;var i = g(this._element).hasClass(he);if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), g(document).off(re.FOCUSIN), g(this._element).removeClass(ue), g(this._element).off(re.CLICK_DISMISS), g(this._dialog).off(re.MOUSEDOWN_DISMISS), i) {
                        var o = _.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END, function (t) {
                            return e._hideModal(t);
                        }).emulateTransitionEnd(o);
                    } else this._hideModal();
                }
            }
        }, t.dispose = function () {
            [window, this._element, this._dialog].forEach(function (t) {
                return g(t).off(ee);
            }), g(document).off(re.FOCUSIN), g.removeData(this._element, te), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null;
        }, t.handleUpdate = function () {
            this._adjustDialog();
        }, t._getConfig = function (t) {
            return t = l({}, ie, t), _.typeCheckConfig(Zt, t, oe), t;
        }, t._showElement = function (t) {
            var e = this,
                n = g(this._element).hasClass(he);this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), g(this._dialog).hasClass(se) ? this._dialog.querySelector(de).scrollTop = 0 : this._element.scrollTop = 0, n && _.reflow(this._element), g(this._element).addClass(ue), this._config.focus && this._enforceFocus();var i = g.Event(re.SHOWN, { relatedTarget: t }),
                o = function o() {
                e._config.focus && e._element.focus(), e._isTransitioning = !1, g(e._element).trigger(i);
            };if (n) {
                var r = _.getTransitionDurationFromElement(this._dialog);g(this._dialog).one(_.TRANSITION_END, o).emulateTransitionEnd(r);
            } else o();
        }, t._enforceFocus = function () {
            var e = this;g(document).off(re.FOCUSIN).on(re.FOCUSIN, function (t) {
                document !== t.target && e._element !== t.target && 0 === g(e._element).has(t.target).length && e._element.focus();
            });
        }, t._setEscapeEvent = function () {
            var e = this;this._isShown && this._config.keyboard ? g(this._element).on(re.KEYDOWN_DISMISS, function (t) {
                27 === t.which && (t.preventDefault(), e.hide());
            }) : this._isShown || g(this._element).off(re.KEYDOWN_DISMISS);
        }, t._setResizeEvent = function () {
            var e = this;this._isShown ? g(window).on(re.RESIZE, function (t) {
                return e.handleUpdate(t);
            }) : g(window).off(re.RESIZE);
        }, t._hideModal = function () {
            var t = this;this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function () {
                g(document.body).removeClass(ce), t._resetAdjustments(), t._resetScrollbar(), g(t._element).trigger(re.HIDDEN);
            });
        }, t._removeBackdrop = function () {
            this._backdrop && (g(this._backdrop).remove(), this._backdrop = null);
        }, t._showBackdrop = function (t) {
            var e = this,
                n = g(this._element).hasClass(he) ? he : "";if (this._isShown && this._config.backdrop) {
                if (this._backdrop = document.createElement("div"), this._backdrop.className = le, n && this._backdrop.classList.add(n), g(this._backdrop).appendTo(document.body), g(this._element).on(re.CLICK_DISMISS, function (t) {
                    e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide());
                }), n && _.reflow(this._backdrop), g(this._backdrop).addClass(ue), !t) return;if (!n) return void t();var i = _.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END, t).emulateTransitionEnd(i);
            } else if (!this._isShown && this._backdrop) {
                g(this._backdrop).removeClass(ue);var o = function o() {
                    e._removeBackdrop(), t && t();
                };if (g(this._element).hasClass(he)) {
                    var r = _.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END, o).emulateTransitionEnd(r);
                } else o();
            } else t && t();
        }, t._adjustDialog = function () {
            var t = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
        }, t._resetAdjustments = function () {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
        }, t._checkScrollbar = function () {
            var t = document.body.getBoundingClientRect();this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
        }, t._setScrollbar = function () {
            var o = this;if (this._isBodyOverflowing) {
                var t = [].slice.call(document.querySelectorAll(me)),
                    e = [].slice.call(document.querySelectorAll(pe));g(t).each(function (t, e) {
                    var n = e.style.paddingRight,
                        i = g(e).css("padding-right");g(e).data("padding-right", n).css("padding-right", parseFloat(i) + o._scrollbarWidth + "px");
                }), g(e).each(function (t, e) {
                    var n = e.style.marginRight,
                        i = g(e).css("margin-right");g(e).data("margin-right", n).css("margin-right", parseFloat(i) - o._scrollbarWidth + "px");
                });var n = document.body.style.paddingRight,
                    i = g(document.body).css("padding-right");g(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px");
            }g(document.body).addClass(ce);
        }, t._resetScrollbar = function () {
            var t = [].slice.call(document.querySelectorAll(me));g(t).each(function (t, e) {
                var n = g(e).data("padding-right");g(e).removeData("padding-right"), e.style.paddingRight = n || "";
            });var e = [].slice.call(document.querySelectorAll("" + pe));g(e).each(function (t, e) {
                var n = g(e).data("margin-right");"undefined" != typeof n && g(e).css("margin-right", n).removeData("margin-right");
            });var n = g(document.body).data("padding-right");g(document.body).removeData("padding-right"), document.body.style.paddingRight = n || "";
        }, t._getScrollbarWidth = function () {
            var t = document.createElement("div");t.className = ae, document.body.appendChild(t);var e = t.getBoundingClientRect().width - t.clientWidth;return document.body.removeChild(t), e;
        }, o._jQueryInterface = function (n, i) {
            return this.each(function () {
                var t = g(this).data(te),
                    e = l({}, ie, g(this).data(), "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && n ? n : {});if (t || (t = new o(this, e), g(this).data(te, t)), "string" == typeof n) {
                    if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');t[n](i);
                } else e.show && t.show(i);
            });
        }, s(o, null, [{ key: "VERSION", get: function get() {
                return "4.3.1";
            } }, { key: "Default", get: function get() {
                return ie;
            } }]), o;
    }();g(document).on(re.CLICK_DATA_API, ge, function (t) {
        var e,
            n = this,
            i = _.getSelectorFromElement(this);i && (e = document.querySelector(i));var o = g(e).data(te) ? "toggle" : l({}, g(e).data(), g(this).data());"A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();var r = g(e).one(re.SHOW, function (t) {
            t.isDefaultPrevented() || r.one(re.HIDDEN, function () {
                g(n).is(":visible") && n.focus();
            });
        });ve._jQueryInterface.call(g(e), o, this);
    }), g.fn[Zt] = ve._jQueryInterface, g.fn[Zt].Constructor = ve, g.fn[Zt].noConflict = function () {
        return g.fn[Zt] = ne, ve._jQueryInterface;
    };var ye = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        Ee = { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] },
        Ce = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        Te = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function Se(t, s, e) {
        if (0 === t.length) return t;if (e && "function" == typeof e) return e(t);for (var n = new window.DOMParser().parseFromString(t, "text/html"), a = Object.keys(s), l = [].slice.call(n.body.querySelectorAll("*")), i = function i(t, e) {
            var n = l[t],
                i = n.nodeName.toLowerCase();if (-1 === a.indexOf(n.nodeName.toLowerCase())) return n.parentNode.removeChild(n), "continue";var o = [].slice.call(n.attributes),
                r = [].concat(s["*"] || [], s[i] || []);o.forEach(function (t) {
                (function (t, e) {
                    var n = t.nodeName.toLowerCase();if (-1 !== e.indexOf(n)) return -1 === ye.indexOf(n) || Boolean(t.nodeValue.match(Ce) || t.nodeValue.match(Te));for (var i = e.filter(function (t) {
                        return t instanceof RegExp;
                    }), o = 0, r = i.length; o < r; o++) {
                        if (n.match(i[o])) return !0;
                    }return !1;
                })(t, r) || n.removeAttribute(t.nodeName);
            });
        }, o = 0, r = l.length; o < r; o++) {
            i(o);
        }return n.body.innerHTML;
    }var be = "tooltip",
        Ie = "bs.tooltip",
        De = "." + Ie,
        we = g.fn[be],
        Ae = "bs-tooltip",
        Ne = new RegExp("(^|\\s)" + Ae + "\\S+", "g"),
        Oe = ["sanitize", "whiteList", "sanitizeFn"],
        ke = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string|function)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)", sanitize: "boolean", sanitizeFn: "(null|function)", whiteList: "object" },
        Pe = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
        Le = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent", sanitize: !0, sanitizeFn: null, whiteList: Ee },
        je = "show",
        He = "out",
        Re = { HIDE: "hide" + De, HIDDEN: "hidden" + De, SHOW: "show" + De, SHOWN: "shown" + De, INSERTED: "inserted" + De, CLICK: "click" + De, FOCUSIN: "focusin" + De, FOCUSOUT: "focusout" + De, MOUSEENTER: "mouseenter" + De, MOUSELEAVE: "mouseleave" + De },
        xe = "fade",
        Fe = "show",
        Ue = ".tooltip-inner",
        We = ".arrow",
        qe = "hover",
        Me = "focus",
        Ke = "click",
        Qe = "manual",
        Be = function () {
        function i(t, e) {
            if ("undefined" == typeof u) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners();
        }var t = i.prototype;return t.enable = function () {
            this._isEnabled = !0;
        }, t.disable = function () {
            this._isEnabled = !1;
        }, t.toggleEnabled = function () {
            this._isEnabled = !this._isEnabled;
        }, t.toggle = function (t) {
            if (this._isEnabled) if (t) {
                var e = this.constructor.DATA_KEY,
                    n = g(t.currentTarget).data(e);n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
            } else {
                if (g(this.getTipElement()).hasClass(Fe)) return void this._leave(null, this);this._enter(null, this);
            }
        }, t.dispose = function () {
            clearTimeout(this._timeout), g.removeData(this.element, this.constructor.DATA_KEY), g(this.element).off(this.constructor.EVENT_KEY), g(this.element).closest(".modal").off("hide.bs.modal"), this.tip && g(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
        }, t.show = function () {
            var e = this;if ("none" === g(this.element).css("display")) throw new Error("Please use show on visible elements");var t = g.Event(this.constructor.Event.SHOW);if (this.isWithContent() && this._isEnabled) {
                g(this.element).trigger(t);var n = _.findShadowRoot(this.element),
                    i = g.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);if (t.isDefaultPrevented() || !i) return;var o = this.getTipElement(),
                    r = _.getUID(this.constructor.NAME);o.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && g(o).addClass(xe);var s = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                    a = this._getAttachment(s);this.addAttachmentClass(a);var l = this._getContainer();g(o).data(this.constructor.DATA_KEY, this), g.contains(this.element.ownerDocument.documentElement, this.tip) || g(o).appendTo(l), g(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new u(this.element, o, { placement: a, modifiers: { offset: this._getOffset(), flip: { behavior: this.config.fallbackPlacement }, arrow: { element: We }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function onCreate(t) {
                        t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
                    }, onUpdate: function onUpdate(t) {
                        return e._handlePopperPlacementChange(t);
                    } }), g(o).addClass(Fe), "ontouchstart" in document.documentElement && g(document.body).children().on("mouseover", null, g.noop);var c = function c() {
                    e.config.animation && e._fixTransition();var t = e._hoverState;e._hoverState = null, g(e.element).trigger(e.constructor.Event.SHOWN), t === He && e._leave(null, e);
                };if (g(this.tip).hasClass(xe)) {
                    var h = _.getTransitionDurationFromElement(this.tip);g(this.tip).one(_.TRANSITION_END, c).emulateTransitionEnd(h);
                } else c();
            }
        }, t.hide = function (t) {
            var e = this,
                n = this.getTipElement(),
                i = g.Event(this.constructor.Event.HIDE),
                o = function o() {
                e._hoverState !== je && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), g(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t();
            };if (g(this.element).trigger(i), !i.isDefaultPrevented()) {
                if (g(n).removeClass(Fe), "ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop), this._activeTrigger[Ke] = !1, this._activeTrigger[Me] = !1, this._activeTrigger[qe] = !1, g(this.tip).hasClass(xe)) {
                    var r = _.getTransitionDurationFromElement(n);g(n).one(_.TRANSITION_END, o).emulateTransitionEnd(r);
                } else o();this._hoverState = "";
            }
        }, t.update = function () {
            null !== this._popper && this._popper.scheduleUpdate();
        }, t.isWithContent = function () {
            return Boolean(this.getTitle());
        }, t.addAttachmentClass = function (t) {
            g(this.getTipElement()).addClass(Ae + "-" + t);
        }, t.getTipElement = function () {
            return this.tip = this.tip || g(this.config.template)[0], this.tip;
        }, t.setContent = function () {
            var t = this.getTipElement();this.setElementContent(g(t.querySelectorAll(Ue)), this.getTitle()), g(t).removeClass(xe + " " + Fe);
        }, t.setElementContent = function (t, e) {
            "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) || !e.nodeType && !e.jquery ? this.config.html ? (this.config.sanitize && (e = Se(e, this.config.whiteList, this.config.sanitizeFn)), t.html(e)) : t.text(e) : this.config.html ? g(e).parent().is(t) || t.empty().append(e) : t.text(g(e).text());
        }, t.getTitle = function () {
            var t = this.element.getAttribute("data-original-title");return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
        }, t._getOffset = function () {
            var e = this,
                t = {};return "function" == typeof this.config.offset ? t.fn = function (t) {
                return t.offsets = l({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t;
            } : t.offset = this.config.offset, t;
        }, t._getContainer = function () {
            return !1 === this.config.container ? document.body : _.isElement(this.config.container) ? g(this.config.container) : g(document).find(this.config.container);
        }, t._getAttachment = function (t) {
            return Pe[t.toUpperCase()];
        }, t._setListeners = function () {
            var i = this;this.config.trigger.split(" ").forEach(function (t) {
                if ("click" === t) g(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (t) {
                    return i.toggle(t);
                });else if (t !== Qe) {
                    var e = t === qe ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
                        n = t === qe ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;g(i.element).on(e, i.config.selector, function (t) {
                        return i._enter(t);
                    }).on(n, i.config.selector, function (t) {
                        return i._leave(t);
                    });
                }
            }), g(this.element).closest(".modal").on("hide.bs.modal", function () {
                i.element && i.hide();
            }), this.config.selector ? this.config = l({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle();
        }, t._fixTitle = function () {
            var t = _typeof(this.element.getAttribute("data-original-title"));(this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
        }, t._enter = function (t, e) {
            var n = this.constructor.DATA_KEY;(e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? Me : qe] = !0), g(e.getTipElement()).hasClass(Fe) || e._hoverState === je ? e._hoverState = je : (clearTimeout(e._timeout), e._hoverState = je, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
                e._hoverState === je && e.show();
            }, e.config.delay.show) : e.show());
        }, t._leave = function (t, e) {
            var n = this.constructor.DATA_KEY;(e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? Me : qe] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = He, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
                e._hoverState === He && e.hide();
            }, e.config.delay.hide) : e.hide());
        }, t._isWithActiveTrigger = function () {
            for (var t in this._activeTrigger) {
                if (this._activeTrigger[t]) return !0;
            }return !1;
        }, t._getConfig = function (t) {
            var e = g(this.element).data();return Object.keys(e).forEach(function (t) {
                -1 !== Oe.indexOf(t) && delete e[t];
            }), "number" == typeof (t = l({}, this.constructor.Default, e, "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t ? t : {})).delay && (t.delay = { show: t.delay, hide: t.delay }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), _.typeCheckConfig(be, t, this.constructor.DefaultType), t.sanitize && (t.template = Se(t.template, t.whiteList, t.sanitizeFn)), t;
        }, t._getDelegateConfig = function () {
            var t = {};if (this.config) for (var e in this.config) {
                this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
            }return t;
        }, t._cleanTipClass = function () {
            var t = g(this.getTipElement()),
                e = t.attr("class").match(Ne);null !== e && e.length && t.removeClass(e.join(""));
        }, t._handlePopperPlacementChange = function (t) {
            var e = t.instance;this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
        }, t._fixTransition = function () {
            var t = this.getTipElement(),
                e = this.config.animation;null === t.getAttribute("x-placement") && (g(t).removeClass(xe), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e);
        }, i._jQueryInterface = function (n) {
            return this.each(function () {
                var t = g(this).data(Ie),
                    e = "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && n;if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), g(this).data(Ie, t)), "string" == typeof n)) {
                    if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');t[n]();
                }
            });
        }, s(i, null, [{ key: "VERSION", get: function get() {
                return "4.3.1";
            } }, { key: "Default", get: function get() {
                return Le;
            } }, { key: "NAME", get: function get() {
                return be;
            } }, { key: "DATA_KEY", get: function get() {
                return Ie;
            } }, { key: "Event", get: function get() {
                return Re;
            } }, { key: "EVENT_KEY", get: function get() {
                return De;
            } }, { key: "DefaultType", get: function get() {
                return ke;
            } }]), i;
    }();g.fn[be] = Be._jQueryInterface, g.fn[be].Constructor = Be, g.fn[be].noConflict = function () {
        return g.fn[be] = we, Be._jQueryInterface;
    };var Ve = "popover",
        Ye = "bs.popover",
        ze = "." + Ye,
        Xe = g.fn[Ve],
        $e = "bs-popover",
        Ge = new RegExp("(^|\\s)" + $e + "\\S+", "g"),
        Je = l({}, Be.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
        Ze = l({}, Be.DefaultType, { content: "(string|element|function)" }),
        tn = "fade",
        en = "show",
        nn = ".popover-header",
        on = ".popover-body",
        rn = { HIDE: "hide" + ze, HIDDEN: "hidden" + ze, SHOW: "show" + ze, SHOWN: "shown" + ze, INSERTED: "inserted" + ze, CLICK: "click" + ze, FOCUSIN: "focusin" + ze, FOCUSOUT: "focusout" + ze, MOUSEENTER: "mouseenter" + ze, MOUSELEAVE: "mouseleave" + ze },
        sn = function (t) {
        var e, n;function i() {
            return t.apply(this, arguments) || this;
        }n = t, (e = i).prototype = Object.create(n.prototype), (e.prototype.constructor = e).__proto__ = n;var o = i.prototype;return o.isWithContent = function () {
            return this.getTitle() || this._getContent();
        }, o.addAttachmentClass = function (t) {
            g(this.getTipElement()).addClass($e + "-" + t);
        }, o.getTipElement = function () {
            return this.tip = this.tip || g(this.config.template)[0], this.tip;
        }, o.setContent = function () {
            var t = g(this.getTipElement());this.setElementContent(t.find(nn), this.getTitle());var e = this._getContent();"function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(on), e), t.removeClass(tn + " " + en);
        }, o._getContent = function () {
            return this.element.getAttribute("data-content") || this.config.content;
        }, o._cleanTipClass = function () {
            var t = g(this.getTipElement()),
                e = t.attr("class").match(Ge);null !== e && 0 < e.length && t.removeClass(e.join(""));
        }, i._jQueryInterface = function (n) {
            return this.each(function () {
                var t = g(this).data(Ye),
                    e = "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) ? n : null;if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), g(this).data(Ye, t)), "string" == typeof n)) {
                    if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');t[n]();
                }
            });
        }, s(i, null, [{ key: "VERSION", get: function get() {
                return "4.3.1";
            } }, { key: "Default", get: function get() {
                return Je;
            } }, { key: "NAME", get: function get() {
                return Ve;
            } }, { key: "DATA_KEY", get: function get() {
                return Ye;
            } }, { key: "Event", get: function get() {
                return rn;
            } }, { key: "EVENT_KEY", get: function get() {
                return ze;
            } }, { key: "DefaultType", get: function get() {
                return Ze;
            } }]), i;
    }(Be);g.fn[Ve] = sn._jQueryInterface, g.fn[Ve].Constructor = sn, g.fn[Ve].noConflict = function () {
        return g.fn[Ve] = Xe, sn._jQueryInterface;
    };var an = "scrollspy",
        ln = "bs.scrollspy",
        cn = "." + ln,
        hn = g.fn[an],
        un = { offset: 10, method: "auto", target: "" },
        fn = { offset: "number", method: "string", target: "(string|element)" },
        dn = { ACTIVATE: "activate" + cn, SCROLL: "scroll" + cn, LOAD_DATA_API: "load" + cn + ".data-api" },
        gn = "dropdown-item",
        _n = "active",
        mn = '[data-spy="scroll"]',
        pn = ".nav, .list-group",
        vn = ".nav-link",
        yn = ".nav-item",
        En = ".list-group-item",
        Cn = ".dropdown",
        Tn = ".dropdown-item",
        Sn = ".dropdown-toggle",
        bn = "offset",
        In = "position",
        Dn = function () {
        function n(t, e) {
            var n = this;this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + vn + "," + this._config.target + " " + En + "," + this._config.target + " " + Tn, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, g(this._scrollElement).on(dn.SCROLL, function (t) {
                return n._process(t);
            }), this.refresh(), this._process();
        }var t = n.prototype;return t.refresh = function () {
            var e = this,
                t = this._scrollElement === this._scrollElement.window ? bn : In,
                o = "auto" === this._config.method ? t : this._config.method,
                r = o === In ? this._getScrollTop() : 0;this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (t) {
                var e,
                    n = _.getSelectorFromElement(t);if (n && (e = document.querySelector(n)), e) {
                    var i = e.getBoundingClientRect();if (i.width || i.height) return [g(e)[o]().top + r, n];
                }return null;
            }).filter(function (t) {
                return t;
            }).sort(function (t, e) {
                return t[0] - e[0];
            }).forEach(function (t) {
                e._offsets.push(t[0]), e._targets.push(t[1]);
            });
        }, t.dispose = function () {
            g.removeData(this._element, ln), g(this._scrollElement).off(cn), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
        }, t._getConfig = function (t) {
            if ("string" != typeof (t = l({}, un, "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t ? t : {})).target) {
                var e = g(t.target).attr("id");e || (e = _.getUID(an), g(t.target).attr("id", e)), t.target = "#" + e;
            }return _.typeCheckConfig(an, t, fn), t;
        }, t._getScrollTop = function () {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
        }, t._getScrollHeight = function () {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
        }, t._getOffsetHeight = function () {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
        }, t._process = function () {
            var t = this._getScrollTop() + this._config.offset,
                e = this._getScrollHeight(),
                n = this._config.offset + e - this._getOffsetHeight();if (this._scrollHeight !== e && this.refresh(), n <= t) {
                var i = this._targets[this._targets.length - 1];this._activeTarget !== i && this._activate(i);
            } else {
                if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();for (var o = this._offsets.length; o--;) {
                    this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o]);
                }
            }
        }, t._activate = function (e) {
            this._activeTarget = e, this._clear();var t = this._selector.split(",").map(function (t) {
                return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
            }),
                n = g([].slice.call(document.querySelectorAll(t.join(","))));n.hasClass(gn) ? (n.closest(Cn).find(Sn).addClass(_n), n.addClass(_n)) : (n.addClass(_n), n.parents(pn).prev(vn + ", " + En).addClass(_n), n.parents(pn).prev(yn).children(vn).addClass(_n)), g(this._scrollElement).trigger(dn.ACTIVATE, { relatedTarget: e });
        }, t._clear = function () {
            [].slice.call(document.querySelectorAll(this._selector)).filter(function (t) {
                return t.classList.contains(_n);
            }).forEach(function (t) {
                return t.classList.remove(_n);
            });
        }, n._jQueryInterface = function (e) {
            return this.each(function () {
                var t = g(this).data(ln);if (t || (t = new n(this, "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e), g(this).data(ln, t)), "string" == typeof e) {
                    if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');t[e]();
                }
            });
        }, s(n, null, [{ key: "VERSION", get: function get() {
                return "4.3.1";
            } }, { key: "Default", get: function get() {
                return un;
            } }]), n;
    }();g(window).on(dn.LOAD_DATA_API, function () {
        for (var t = [].slice.call(document.querySelectorAll(mn)), e = t.length; e--;) {
            var n = g(t[e]);Dn._jQueryInterface.call(n, n.data());
        }
    }), g.fn[an] = Dn._jQueryInterface, g.fn[an].Constructor = Dn, g.fn[an].noConflict = function () {
        return g.fn[an] = hn, Dn._jQueryInterface;
    };var wn = "bs.tab",
        An = "." + wn,
        Nn = g.fn.tab,
        On = { HIDE: "hide" + An, HIDDEN: "hidden" + An, SHOW: "show" + An, SHOWN: "shown" + An, CLICK_DATA_API: "click" + An + ".data-api" },
        kn = "dropdown-menu",
        Pn = "active",
        Ln = "disabled",
        jn = "fade",
        Hn = "show",
        Rn = ".dropdown",
        xn = ".nav, .list-group",
        Fn = ".active",
        Un = "> li > .active",
        Wn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        qn = ".dropdown-toggle",
        Mn = "> .dropdown-menu .active",
        Kn = function () {
        function i(t) {
            this._element = t;
        }var t = i.prototype;return t.show = function () {
            var n = this;if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && g(this._element).hasClass(Pn) || g(this._element).hasClass(Ln))) {
                var t,
                    i,
                    e = g(this._element).closest(xn)[0],
                    o = _.getSelectorFromElement(this._element);if (e) {
                    var r = "UL" === e.nodeName || "OL" === e.nodeName ? Un : Fn;i = (i = g.makeArray(g(e).find(r)))[i.length - 1];
                }var s = g.Event(On.HIDE, { relatedTarget: this._element }),
                    a = g.Event(On.SHOW, { relatedTarget: i });if (i && g(i).trigger(s), g(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                    o && (t = document.querySelector(o)), this._activate(this._element, e);var l = function l() {
                        var t = g.Event(On.HIDDEN, { relatedTarget: n._element }),
                            e = g.Event(On.SHOWN, { relatedTarget: i });g(i).trigger(t), g(n._element).trigger(e);
                    };t ? this._activate(t, t.parentNode, l) : l();
                }
            }
        }, t.dispose = function () {
            g.removeData(this._element, wn), this._element = null;
        }, t._activate = function (t, e, n) {
            var i = this,
                o = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? g(e).children(Fn) : g(e).find(Un))[0],
                r = n && o && g(o).hasClass(jn),
                s = function s() {
                return i._transitionComplete(t, o, n);
            };if (o && r) {
                var a = _.getTransitionDurationFromElement(o);g(o).removeClass(Hn).one(_.TRANSITION_END, s).emulateTransitionEnd(a);
            } else s();
        }, t._transitionComplete = function (t, e, n) {
            if (e) {
                g(e).removeClass(Pn);var i = g(e.parentNode).find(Mn)[0];i && g(i).removeClass(Pn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
            }if (g(t).addClass(Pn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), _.reflow(t), t.classList.contains(jn) && t.classList.add(Hn), t.parentNode && g(t.parentNode).hasClass(kn)) {
                var o = g(t).closest(Rn)[0];if (o) {
                    var r = [].slice.call(o.querySelectorAll(qn));g(r).addClass(Pn);
                }t.setAttribute("aria-expanded", !0);
            }n && n();
        }, i._jQueryInterface = function (n) {
            return this.each(function () {
                var t = g(this),
                    e = t.data(wn);if (e || (e = new i(this), t.data(wn, e)), "string" == typeof n) {
                    if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');e[n]();
                }
            });
        }, s(i, null, [{ key: "VERSION", get: function get() {
                return "4.3.1";
            } }]), i;
    }();g(document).on(On.CLICK_DATA_API, Wn, function (t) {
        t.preventDefault(), Kn._jQueryInterface.call(g(this), "show");
    }), g.fn.tab = Kn._jQueryInterface, g.fn.tab.Constructor = Kn, g.fn.tab.noConflict = function () {
        return g.fn.tab = Nn, Kn._jQueryInterface;
    };var Qn = "toast",
        Bn = "bs.toast",
        Vn = "." + Bn,
        Yn = g.fn[Qn],
        zn = { CLICK_DISMISS: "click.dismiss" + Vn, HIDE: "hide" + Vn, HIDDEN: "hidden" + Vn, SHOW: "show" + Vn, SHOWN: "shown" + Vn },
        Xn = "fade",
        $n = "hide",
        Gn = "show",
        Jn = "showing",
        Zn = { animation: "boolean", autohide: "boolean", delay: "number" },
        ti = { animation: !0, autohide: !0, delay: 500 },
        ei = '[data-dismiss="toast"]',
        ni = function () {
        function i(t, e) {
            this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners();
        }var t = i.prototype;return t.show = function () {
            var t = this;g(this._element).trigger(zn.SHOW), this._config.animation && this._element.classList.add(Xn);var e = function e() {
                t._element.classList.remove(Jn), t._element.classList.add(Gn), g(t._element).trigger(zn.SHOWN), t._config.autohide && t.hide();
            };if (this._element.classList.remove($n), this._element.classList.add(Jn), this._config.animation) {
                var n = _.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n);
            } else e();
        }, t.hide = function (t) {
            var e = this;this._element.classList.contains(Gn) && (g(this._element).trigger(zn.HIDE), t ? this._close() : this._timeout = setTimeout(function () {
                e._close();
            }, this._config.delay));
        }, t.dispose = function () {
            clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(Gn) && this._element.classList.remove(Gn), g(this._element).off(zn.CLICK_DISMISS), g.removeData(this._element, Bn), this._element = null, this._config = null;
        }, t._getConfig = function (t) {
            return t = l({}, ti, g(this._element).data(), "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t ? t : {}), _.typeCheckConfig(Qn, t, this.constructor.DefaultType), t;
        }, t._setListeners = function () {
            var t = this;g(this._element).on(zn.CLICK_DISMISS, ei, function () {
                return t.hide(!0);
            });
        }, t._close = function () {
            var t = this,
                e = function e() {
                t._element.classList.add($n), g(t._element).trigger(zn.HIDDEN);
            };if (this._element.classList.remove(Gn), this._config.animation) {
                var n = _.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n);
            } else e();
        }, i._jQueryInterface = function (n) {
            return this.each(function () {
                var t = g(this),
                    e = t.data(Bn);if (e || (e = new i(this, "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && n), t.data(Bn, e)), "string" == typeof n) {
                    if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');e[n](this);
                }
            });
        }, s(i, null, [{ key: "VERSION", get: function get() {
                return "4.3.1";
            } }, { key: "DefaultType", get: function get() {
                return Zn;
            } }, { key: "Default", get: function get() {
                return ti;
            } }]), i;
    }();g.fn[Qn] = ni._jQueryInterface, g.fn[Qn].Constructor = ni, g.fn[Qn].noConflict = function () {
        return g.fn[Qn] = Yn, ni._jQueryInterface;
    }, function () {
        if ("undefined" == typeof g) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t = g.fn.jquery.split(" ")[0].split(".");if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
    }(), t.Util = _, t.Alert = p, t.Button = P, t.Carousel = lt, t.Collapse = bt, t.Dropdown = Jt, t.Modal = ve, t.Popover = sn, t.Scrollspy = Dn, t.Tab = Kn, t.Toast = ni, t.Tooltip = Be, Object.defineProperty(t, "__esModule", { value: !0 });
});
//# sourceMappingURL=bootstrap.min.js.map
/*
 * This combined file was created by the DataTables downloader builder:
 *   https://datatables.net/download
 *
 * To rebuild or modify this file with the latest versions of the included
 * software please visit:
 *   https://datatables.net/download/#bs4/dt-1.10.18
 *
 * Included libraries:
 *   DataTables 1.10.18
 */

/*!
 DataTables 1.10.18
 ©2008-2018 SpryMedia Ltd - datatables.net/license
*/
(function (h) {
    "function" === typeof define && define.amd ? define(["jquery"], function (E) {
        return h(E, window, document);
    }) : "object" === (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = function (E, H) {
        E || (E = window);H || (H = "undefined" !== typeof window ? require("jquery") : require("jquery")(E));return h(H, E, E.document);
    } : h(jQuery, window, document);
})(function (h, E, H, k) {
    function Z(a) {
        var b,
            c,
            d = {};h.each(a, function (e) {
            if ((b = e.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(b[1] + " ")) c = e.replace(b[0], b[2].toLowerCase()), d[c] = e, "o" === b[1] && Z(a[e]);
        });a._hungarianMap = d;
    }function J(a, b, c) {
        a._hungarianMap || Z(a);var d;h.each(b, function (e) {
            d = a._hungarianMap[e];if (d !== k && (c || b[d] === k)) "o" === d.charAt(0) ? (b[d] || (b[d] = {}), h.extend(!0, b[d], b[e]), J(a[d], b[d], c)) : b[d] = b[e];
        });
    }function Ca(a) {
        var b = n.defaults.oLanguage,
            c = b.sDecimal;c && Da(c);if (a) {
            var d = a.sZeroRecords;!a.sEmptyTable && d && "No data available in table" === b.sEmptyTable && F(a, a, "sZeroRecords", "sEmptyTable");!a.sLoadingRecords && d && "Loading..." === b.sLoadingRecords && F(a, a, "sZeroRecords", "sLoadingRecords");a.sInfoThousands && (a.sThousands = a.sInfoThousands);(a = a.sDecimal) && c !== a && Da(a);
        }
    }function eb(a) {
        A(a, "ordering", "bSort");A(a, "orderMulti", "bSortMulti");A(a, "orderClasses", "bSortClasses");A(a, "orderCellsTop", "bSortCellsTop");A(a, "order", "aaSorting");A(a, "orderFixed", "aaSortingFixed");A(a, "paging", "bPaginate");A(a, "pagingType", "sPaginationType");A(a, "pageLength", "iDisplayLength");A(a, "searching", "bFilter");"boolean" === typeof a.sScrollX && (a.sScrollX = a.sScrollX ? "100%" : "");"boolean" === typeof a.scrollX && (a.scrollX = a.scrollX ? "100%" : "");if (a = a.aoSearchCols) for (var b = 0, c = a.length; b < c; b++) {
            a[b] && J(n.models.oSearch, a[b]);
        }
    }function fb(a) {
        A(a, "orderable", "bSortable");A(a, "orderData", "aDataSort");A(a, "orderSequence", "asSorting");A(a, "orderDataType", "sortDataType");var b = a.aDataSort;"number" === typeof b && !h.isArray(b) && (a.aDataSort = [b]);
    }function gb(a) {
        if (!n.__browser) {
            var b = {};n.__browser = b;var c = h("<div/>").css({ position: "fixed", top: 0, left: -1 * h(E).scrollLeft(), height: 1, width: 1,
                overflow: "hidden" }).append(h("<div/>").css({ position: "absolute", top: 1, left: 1, width: 100, overflow: "scroll" }).append(h("<div/>").css({ width: "100%", height: 10 }))).appendTo("body"),
                d = c.children(),
                e = d.children();b.barWidth = d[0].offsetWidth - d[0].clientWidth;b.bScrollOversize = 100 === e[0].offsetWidth && 100 !== d[0].clientWidth;b.bScrollbarLeft = 1 !== Math.round(e.offset().left);b.bBounding = c[0].getBoundingClientRect().width ? !0 : !1;c.remove();
        }h.extend(a.oBrowser, n.__browser);a.oScroll.iBarWidth = n.__browser.barWidth;
    }
    function hb(a, b, c, d, e, f) {
        var g,
            j = !1;c !== k && (g = c, j = !0);for (; d !== e;) {
            a.hasOwnProperty(d) && (g = j ? b(g, a[d], d, a) : a[d], j = !0, d += f);
        }return g;
    }function Ea(a, b) {
        var c = n.defaults.column,
            d = a.aoColumns.length,
            c = h.extend({}, n.models.oColumn, c, { nTh: b ? b : H.createElement("th"), sTitle: c.sTitle ? c.sTitle : b ? b.innerHTML : "", aDataSort: c.aDataSort ? c.aDataSort : [d], mData: c.mData ? c.mData : d, idx: d });a.aoColumns.push(c);c = a.aoPreSearchCols;c[d] = h.extend({}, n.models.oSearch, c[d]);ka(a, d, h(b).data());
    }function ka(a, b, c) {
        var b = a.aoColumns[b],
            d = a.oClasses,
            e = h(b.nTh);if (!b.sWidthOrig) {
            b.sWidthOrig = e.attr("width") || null;var f = (e.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);f && (b.sWidthOrig = f[1]);
        }c !== k && null !== c && (fb(c), J(n.defaults.column, c), c.mDataProp !== k && !c.mData && (c.mData = c.mDataProp), c.sType && (b._sManualType = c.sType), c.className && !c.sClass && (c.sClass = c.className), c.sClass && e.addClass(c.sClass), h.extend(b, c), F(b, c, "sWidth", "sWidthOrig"), c.iDataSort !== k && (b.aDataSort = [c.iDataSort]), F(b, c, "aDataSort"));var g = b.mData,
            j = S(g),
            i = b.mRender ? S(b.mRender) : null,
            c = function c(a) {
            return "string" === typeof a && -1 !== a.indexOf("@");
        };b._bAttrSrc = h.isPlainObject(g) && (c(g.sort) || c(g.type) || c(g.filter));b._setter = null;b.fnGetData = function (a, b, c) {
            var d = j(a, b, k, c);return i && b ? i(d, b, a, c) : d;
        };b.fnSetData = function (a, b, c) {
            return N(g)(a, b, c);
        };"number" !== typeof g && (a._rowReadObject = !0);a.oFeatures.bSort || (b.bSortable = !1, e.addClass(d.sSortableNone));a = -1 !== h.inArray("asc", b.asSorting);c = -1 !== h.inArray("desc", b.asSorting);!b.bSortable || !a && !c ? (b.sSortingClass = d.sSortableNone, b.sSortingClassJUI = "") : a && !c ? (b.sSortingClass = d.sSortableAsc, b.sSortingClassJUI = d.sSortJUIAscAllowed) : !a && c ? (b.sSortingClass = d.sSortableDesc, b.sSortingClassJUI = d.sSortJUIDescAllowed) : (b.sSortingClass = d.sSortable, b.sSortingClassJUI = d.sSortJUI);
    }function $(a) {
        if (!1 !== a.oFeatures.bAutoWidth) {
            var b = a.aoColumns;Fa(a);for (var c = 0, d = b.length; c < d; c++) {
                b[c].nTh.style.width = b[c].sWidth;
            }
        }b = a.oScroll;("" !== b.sY || "" !== b.sX) && la(a);r(a, null, "column-sizing", [a]);
    }function aa(a, b) {
        var c = ma(a, "bVisible");return "number" === typeof c[b] ? c[b] : null;
    }function ba(a, b) {
        var c = ma(a, "bVisible"),
            c = h.inArray(b, c);return -1 !== c ? c : null;
    }function V(a) {
        var b = 0;h.each(a.aoColumns, function (a, d) {
            d.bVisible && "none" !== h(d.nTh).css("display") && b++;
        });return b;
    }function ma(a, b) {
        var c = [];h.map(a.aoColumns, function (a, e) {
            a[b] && c.push(e);
        });return c;
    }function Ga(a) {
        var b = a.aoColumns,
            c = a.aoData,
            d = n.ext.type.detect,
            e,
            f,
            g,
            j,
            i,
            h,
            l,
            q,
            t;e = 0;for (f = b.length; e < f; e++) {
            if (l = b[e], t = [], !l.sType && l._sManualType) l.sType = l._sManualType;else if (!l.sType) {
                g = 0;for (j = d.length; g < j; g++) {
                    i = 0;for (h = c.length; i < h; i++) {
                        t[i] === k && (t[i] = B(a, i, e, "type"));q = d[g](t[i], a);if (!q && g !== d.length - 1) break;if ("html" === q) break;
                    }if (q) {
                        l.sType = q;break;
                    }
                }l.sType || (l.sType = "string");
            }
        }
    }function ib(a, b, c, d) {
        var e,
            f,
            g,
            j,
            i,
            m,
            l = a.aoColumns;if (b) for (e = b.length - 1; 0 <= e; e--) {
            m = b[e];var q = m.targets !== k ? m.targets : m.aTargets;h.isArray(q) || (q = [q]);f = 0;for (g = q.length; f < g; f++) {
                if ("number" === typeof q[f] && 0 <= q[f]) {
                    for (; l.length <= q[f];) {
                        Ea(a);
                    }d(q[f], m);
                } else if ("number" === typeof q[f] && 0 > q[f]) d(l.length + q[f], m);else if ("string" === typeof q[f]) {
                    j = 0;for (i = l.length; j < i; j++) {
                        ("_all" == q[f] || h(l[j].nTh).hasClass(q[f])) && d(j, m);
                    }
                }
            }
        }if (c) {
            e = 0;for (a = c.length; e < a; e++) {
                d(e, c[e]);
            }
        }
    }function O(a, b, c, d) {
        var e = a.aoData.length,
            f = h.extend(!0, {}, n.models.oRow, { src: c ? "dom" : "data", idx: e });f._aData = b;a.aoData.push(f);for (var g = a.aoColumns, j = 0, i = g.length; j < i; j++) {
            g[j].sType = null;
        }a.aiDisplayMaster.push(e);b = a.rowIdFn(b);b !== k && (a.aIds[b] = f);(c || !a.oFeatures.bDeferRender) && Ha(a, e, c, d);return e;
    }function na(a, b) {
        var c;b instanceof h || (b = h(b));return b.map(function (b, e) {
            c = Ia(a, e);return O(a, c.data, e, c.cells);
        });
    }function B(a, b, c, d) {
        var e = a.iDraw,
            f = a.aoColumns[c],
            g = a.aoData[b]._aData,
            j = f.sDefaultContent,
            i = f.fnGetData(g, d, { settings: a, row: b, col: c });if (i === k) return a.iDrawError != e && null === j && (K(a, 0, "Requested unknown parameter " + ("function" == typeof f.mData ? "{function}" : "'" + f.mData + "'") + " for row " + b + ", column " + c, 4), a.iDrawError = e), j;if ((i === g || null === i) && null !== j && d !== k) i = j;else if ("function" === typeof i) return i.call(g);return null === i && "display" == d ? "" : i;
    }function jb(a, b, c, d) {
        a.aoColumns[c].fnSetData(a.aoData[b]._aData, d, { settings: a, row: b, col: c });
    }function Ja(a) {
        return h.map(a.match(/(\\.|[^\.])+/g) || [""], function (a) {
            return a.replace(/\\\./g, ".");
        });
    }function S(a) {
        if (h.isPlainObject(a)) {
            var b = {};h.each(a, function (a, c) {
                c && (b[a] = S(c));
            });return function (a, c, f, g) {
                var j = b[c] || b._;return j !== k ? j(a, c, f, g) : a;
            };
        }if (null === a) return function (a) {
            return a;
        };if ("function" === typeof a) return function (b, c, f, g) {
            return a(b, c, f, g);
        };if ("string" === typeof a && (-1 !== a.indexOf(".") || -1 !== a.indexOf("[") || -1 !== a.indexOf("("))) {
            var c = function c(a, b, f) {
                var g, j;if ("" !== f) {
                    j = Ja(f);for (var i = 0, m = j.length; i < m; i++) {
                        f = j[i].match(ca);g = j[i].match(W);if (f) {
                            j[i] = j[i].replace(ca, "");"" !== j[i] && (a = a[j[i]]);g = [];j.splice(0, i + 1);j = j.join(".");if (h.isArray(a)) {
                                i = 0;for (m = a.length; i < m; i++) {
                                    g.push(c(a[i], b, j));
                                }
                            }a = f[0].substring(1, f[0].length - 1);a = "" === a ? g : g.join(a);break;
                        } else if (g) {
                            j[i] = j[i].replace(W, "");a = a[j[i]]();continue;
                        }if (null === a || a[j[i]] === k) return k;a = a[j[i]];
                    }
                }return a;
            };return function (b, e) {
                return c(b, e, a);
            };
        }return function (b) {
            return b[a];
        };
    }
    function N(a) {
        if (h.isPlainObject(a)) return N(a._);if (null === a) return function () {};if ("function" === typeof a) return function (b, d, e) {
            a(b, "set", d, e);
        };if ("string" === typeof a && (-1 !== a.indexOf(".") || -1 !== a.indexOf("[") || -1 !== a.indexOf("("))) {
            var b = function b(a, d, e) {
                var e = Ja(e),
                    f;f = e[e.length - 1];for (var g, j, i = 0, m = e.length - 1; i < m; i++) {
                    g = e[i].match(ca);j = e[i].match(W);if (g) {
                        e[i] = e[i].replace(ca, "");a[e[i]] = [];f = e.slice();f.splice(0, i + 1);g = f.join(".");if (h.isArray(d)) {
                            j = 0;for (m = d.length; j < m; j++) {
                                f = {}, b(f, d[j], g), a[e[i]].push(f);
                            }
                        } else a[e[i]] = d;return;
                    }j && (e[i] = e[i].replace(W, ""), a = a[e[i]](d));if (null === a[e[i]] || a[e[i]] === k) a[e[i]] = {};a = a[e[i]];
                }if (f.match(W)) a[f.replace(W, "")](d);else a[f.replace(ca, "")] = d;
            };return function (c, d) {
                return b(c, d, a);
            };
        }return function (b, d) {
            b[a] = d;
        };
    }function Ka(a) {
        return D(a.aoData, "_aData");
    }function oa(a) {
        a.aoData.length = 0;a.aiDisplayMaster.length = 0;a.aiDisplay.length = 0;a.aIds = {};
    }function pa(a, b, c) {
        for (var d = -1, e = 0, f = a.length; e < f; e++) {
            a[e] == b ? d = e : a[e] > b && a[e]--;
        }-1 != d && c === k && a.splice(d, 1);
    }function da(a, b, c, d) {
        var e = a.aoData[b],
            f,
            g = function g(c, d) {
            for (; c.childNodes.length;) {
                c.removeChild(c.firstChild);
            }c.innerHTML = B(a, b, d, "display");
        };if ("dom" === c || (!c || "auto" === c) && "dom" === e.src) e._aData = Ia(a, e, d, d === k ? k : e._aData).data;else {
            var j = e.anCells;if (j) if (d !== k) g(j[d], d);else {
                c = 0;for (f = j.length; c < f; c++) {
                    g(j[c], c);
                }
            }
        }e._aSortData = null;e._aFilterData = null;g = a.aoColumns;if (d !== k) g[d].sType = null;else {
            c = 0;for (f = g.length; c < f; c++) {
                g[c].sType = null;
            }La(a, e);
        }
    }function Ia(a, b, c, d) {
        var e = [],
            f = b.firstChild,
            g,
            j,
            i = 0,
            m,
            l = a.aoColumns,
            q = a._rowReadObject,
            d = d !== k ? d : q ? {} : [],
            t = function t(a, b) {
            if ("string" === typeof a) {
                var c = a.indexOf("@");-1 !== c && (c = a.substring(c + 1), N(a)(d, b.getAttribute(c)));
            }
        },
            G = function G(a) {
            if (c === k || c === i) j = l[i], m = h.trim(a.innerHTML), j && j._bAttrSrc ? (N(j.mData._)(d, m), t(j.mData.sort, a), t(j.mData.type, a), t(j.mData.filter, a)) : q ? (j._setter || (j._setter = N(j.mData)), j._setter(d, m)) : d[i] = m;i++;
        };if (f) for (; f;) {
            g = f.nodeName.toUpperCase();if ("TD" == g || "TH" == g) G(f), e.push(f);f = f.nextSibling;
        } else {
            e = b.anCells;
            f = 0;for (g = e.length; f < g; f++) {
                G(e[f]);
            }
        }if (b = b.firstChild ? b : b.nTr) (b = b.getAttribute("id")) && N(a.rowId)(d, b);return { data: d, cells: e };
    }function Ha(a, b, c, d) {
        var e = a.aoData[b],
            f = e._aData,
            g = [],
            j,
            i,
            m,
            l,
            q;if (null === e.nTr) {
            j = c || H.createElement("tr");e.nTr = j;e.anCells = g;j._DT_RowIndex = b;La(a, e);l = 0;for (q = a.aoColumns.length; l < q; l++) {
                m = a.aoColumns[l];i = c ? d[l] : H.createElement(m.sCellType);i._DT_CellIndex = { row: b, column: l };g.push(i);if ((!c || m.mRender || m.mData !== l) && (!h.isPlainObject(m.mData) || m.mData._ !== l + ".display")) i.innerHTML = B(a, b, l, "display");m.sClass && (i.className += " " + m.sClass);m.bVisible && !c ? j.appendChild(i) : !m.bVisible && c && i.parentNode.removeChild(i);m.fnCreatedCell && m.fnCreatedCell.call(a.oInstance, i, B(a, b, l), f, b, l);
            }r(a, "aoRowCreatedCallback", null, [j, f, b, g]);
        }e.nTr.setAttribute("role", "row");
    }function La(a, b) {
        var c = b.nTr,
            d = b._aData;if (c) {
            var e = a.rowIdFn(d);e && (c.id = e);d.DT_RowClass && (e = d.DT_RowClass.split(" "), b.__rowc = b.__rowc ? qa(b.__rowc.concat(e)) : e, h(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));
            d.DT_RowAttr && h(c).attr(d.DT_RowAttr);d.DT_RowData && h(c).data(d.DT_RowData);
        }
    }function kb(a) {
        var b,
            c,
            d,
            e,
            f,
            g = a.nTHead,
            j = a.nTFoot,
            i = 0 === h("th, td", g).length,
            m = a.oClasses,
            l = a.aoColumns;i && (e = h("<tr/>").appendTo(g));b = 0;for (c = l.length; b < c; b++) {
            f = l[b], d = h(f.nTh).addClass(f.sClass), i && d.appendTo(e), a.oFeatures.bSort && (d.addClass(f.sSortingClass), !1 !== f.bSortable && (d.attr("tabindex", a.iTabIndex).attr("aria-controls", a.sTableId), Ma(a, f.nTh, b))), f.sTitle != d[0].innerHTML && d.html(f.sTitle), Na(a, "header")(a, d, f, m);
        }i && ea(a.aoHeader, g);h(g).find(">tr").attr("role", "row");h(g).find(">tr>th, >tr>td").addClass(m.sHeaderTH);h(j).find(">tr>th, >tr>td").addClass(m.sFooterTH);if (null !== j) {
            a = a.aoFooter[0];b = 0;for (c = a.length; b < c; b++) {
                f = l[b], f.nTf = a[b].cell, f.sClass && h(f.nTf).addClass(f.sClass);
            }
        }
    }function fa(a, b, c) {
        var d,
            e,
            f,
            g = [],
            j = [],
            i = a.aoColumns.length,
            m;if (b) {
            c === k && (c = !1);d = 0;for (e = b.length; d < e; d++) {
                g[d] = b[d].slice();g[d].nTr = b[d].nTr;for (f = i - 1; 0 <= f; f--) {
                    !a.aoColumns[f].bVisible && !c && g[d].splice(f, 1);
                }j.push([]);
            }d = 0;for (e = g.length; d < e; d++) {
                if (a = g[d].nTr) for (; f = a.firstChild;) {
                    a.removeChild(f);
                }f = 0;for (b = g[d].length; f < b; f++) {
                    if (m = i = 1, j[d][f] === k) {
                        a.appendChild(g[d][f].cell);for (j[d][f] = 1; g[d + i] !== k && g[d][f].cell == g[d + i][f].cell;) {
                            j[d + i][f] = 1, i++;
                        }for (; g[d][f + m] !== k && g[d][f].cell == g[d][f + m].cell;) {
                            for (c = 0; c < i; c++) {
                                j[d + c][f + m] = 1;
                            }m++;
                        }h(g[d][f].cell).attr("rowspan", i).attr("colspan", m);
                    }
                }
            }
        }
    }function P(a) {
        var b = r(a, "aoPreDrawCallback", "preDraw", [a]);if (-1 !== h.inArray(!1, b)) C(a, !1);else {
            var b = [],
                c = 0,
                d = a.asStripeClasses,
                e = d.length,
                f = a.oLanguage,
                g = a.iInitDisplayStart,
                j = "ssp" == y(a),
                i = a.aiDisplay;a.bDrawing = !0;g !== k && -1 !== g && (a._iDisplayStart = j ? g : g >= a.fnRecordsDisplay() ? 0 : g, a.iInitDisplayStart = -1);var g = a._iDisplayStart,
                m = a.fnDisplayEnd();if (a.bDeferLoading) a.bDeferLoading = !1, a.iDraw++, C(a, !1);else if (j) {
                if (!a.bDestroying && !lb(a)) return;
            } else a.iDraw++;if (0 !== i.length) {
                f = j ? a.aoData.length : m;for (j = j ? 0 : g; j < f; j++) {
                    var l = i[j],
                        q = a.aoData[l];null === q.nTr && Ha(a, l);var t = q.nTr;if (0 !== e) {
                        var G = d[c % e];q._sRowStripe != G && (h(t).removeClass(q._sRowStripe).addClass(G), q._sRowStripe = G);
                    }r(a, "aoRowCallback", null, [t, q._aData, c, j, l]);b.push(t);c++;
                }
            } else c = f.sZeroRecords, 1 == a.iDraw && "ajax" == y(a) ? c = f.sLoadingRecords : f.sEmptyTable && 0 === a.fnRecordsTotal() && (c = f.sEmptyTable), b[0] = h("<tr/>", { "class": e ? d[0] : "" }).append(h("<td />", { valign: "top", colSpan: V(a), "class": a.oClasses.sRowEmpty }).html(c))[0];r(a, "aoHeaderCallback", "header", [h(a.nTHead).children("tr")[0], Ka(a), g, m, i]);r(a, "aoFooterCallback", "footer", [h(a.nTFoot).children("tr")[0], Ka(a), g, m, i]);d = h(a.nTBody);d.children().detach();
            d.append(h(b));r(a, "aoDrawCallback", "draw", [a]);a.bSorted = !1;a.bFiltered = !1;a.bDrawing = !1;
        }
    }function T(a, b) {
        var c = a.oFeatures,
            d = c.bFilter;c.bSort && mb(a);d ? ga(a, a.oPreviousSearch) : a.aiDisplay = a.aiDisplayMaster.slice();!0 !== b && (a._iDisplayStart = 0);a._drawHold = b;P(a);a._drawHold = !1;
    }function nb(a) {
        var b = a.oClasses,
            c = h(a.nTable),
            c = h("<div/>").insertBefore(c),
            d = a.oFeatures,
            e = h("<div/>", { id: a.sTableId + "_wrapper", "class": b.sWrapper + (a.nTFoot ? "" : " " + b.sNoFooter) });a.nHolding = c[0];a.nTableWrapper = e[0];a.nTableReinsertBefore = a.nTable.nextSibling;for (var f = a.sDom.split(""), g, j, i, m, l, q, k = 0; k < f.length; k++) {
            g = null;j = f[k];if ("<" == j) {
                i = h("<div/>")[0];m = f[k + 1];if ("'" == m || '"' == m) {
                    l = "";for (q = 2; f[k + q] != m;) {
                        l += f[k + q], q++;
                    }"H" == l ? l = b.sJUIHeader : "F" == l && (l = b.sJUIFooter);-1 != l.indexOf(".") ? (m = l.split("."), i.id = m[0].substr(1, m[0].length - 1), i.className = m[1]) : "#" == l.charAt(0) ? i.id = l.substr(1, l.length - 1) : i.className = l;k += q;
                }e.append(i);e = h(i);
            } else if (">" == j) e = e.parent();else if ("l" == j && d.bPaginate && d.bLengthChange) g = ob(a);else if ("f" == j && d.bFilter) g = pb(a);else if ("r" == j && d.bProcessing) g = qb(a);else if ("t" == j) g = rb(a);else if ("i" == j && d.bInfo) g = sb(a);else if ("p" == j && d.bPaginate) g = tb(a);else if (0 !== n.ext.feature.length) {
                i = n.ext.feature;q = 0;for (m = i.length; q < m; q++) {
                    if (j == i[q].cFeature) {
                        g = i[q].fnInit(a);break;
                    }
                }
            }g && (i = a.aanFeatures, i[j] || (i[j] = []), i[j].push(g), e.append(g));
        }c.replaceWith(e);a.nHolding = null;
    }function ea(a, b) {
        var c = h(b).children("tr"),
            d,
            e,
            f,
            g,
            j,
            i,
            m,
            l,
            q,
            k;a.splice(0, a.length);f = 0;for (i = c.length; f < i; f++) {
            a.push([]);
        }f = 0;for (i = c.length; f < i; f++) {
            d = c[f];for (e = d.firstChild; e;) {
                if ("TD" == e.nodeName.toUpperCase() || "TH" == e.nodeName.toUpperCase()) {
                    l = 1 * e.getAttribute("colspan");q = 1 * e.getAttribute("rowspan");l = !l || 0 === l || 1 === l ? 1 : l;q = !q || 0 === q || 1 === q ? 1 : q;g = 0;for (j = a[f]; j[g];) {
                        g++;
                    }m = g;k = 1 === l ? !0 : !1;for (j = 0; j < l; j++) {
                        for (g = 0; g < q; g++) {
                            a[f + g][m + j] = { cell: e, unique: k }, a[f + g].nTr = d;
                        }
                    }
                }e = e.nextSibling;
            }
        }
    }function ra(a, b, c) {
        var d = [];c || (c = a.aoHeader, b && (c = [], ea(c, b)));for (var b = 0, e = c.length; b < e; b++) {
            for (var f = 0, g = c[b].length; f < g; f++) {
                if (c[b][f].unique && (!d[f] || !a.bSortCellsTop)) d[f] = c[b][f].cell;
            }
        }return d;
    }function sa(a, b, c) {
        r(a, "aoServerParams", "serverParams", [b]);if (b && h.isArray(b)) {
            var d = {},
                e = /(.*?)\[\]$/;h.each(b, function (a, b) {
                var c = b.name.match(e);c ? (c = c[0], d[c] || (d[c] = []), d[c].push(b.value)) : d[b.name] = b.value;
            });b = d;
        }var f,
            g = a.ajax,
            j = a.oInstance,
            i = function i(b) {
            r(a, null, "xhr", [a, b, a.jqXHR]);c(b);
        };if (h.isPlainObject(g) && g.data) {
            f = g.data;var m = "function" === typeof f ? f(b, a) : f,
                b = "function" === typeof f && m ? m : h.extend(!0, b, m);delete g.data;
        }m = { data: b, success: function success(b) {
                var c = b.error || b.sError;c && K(a, 0, c);a.json = b;i(b);
            }, dataType: "json", cache: !1, type: a.sServerMethod, error: function error(b, c) {
                var d = r(a, null, "xhr", [a, null, a.jqXHR]);-1 === h.inArray(!0, d) && ("parsererror" == c ? K(a, 0, "Invalid JSON response", 1) : 4 === b.readyState && K(a, 0, "Ajax error", 7));C(a, !1);
            } };a.oAjaxData = b;r(a, null, "preXhr", [a, b]);a.fnServerData ? a.fnServerData.call(j, a.sAjaxSource, h.map(b, function (a, b) {
            return { name: b, value: a };
        }), i, a) : a.sAjaxSource || "string" === typeof g ? a.jqXHR = h.ajax(h.extend(m, { url: g || a.sAjaxSource })) : "function" === typeof g ? a.jqXHR = g.call(j, b, i, a) : (a.jqXHR = h.ajax(h.extend(m, g)), g.data = f);
    }function lb(a) {
        return a.bAjaxDataGet ? (a.iDraw++, C(a, !0), sa(a, ub(a), function (b) {
            vb(a, b);
        }), !1) : !0;
    }function ub(a) {
        var b = a.aoColumns,
            c = b.length,
            d = a.oFeatures,
            e = a.oPreviousSearch,
            f = a.aoPreSearchCols,
            g,
            j = [],
            i,
            m,
            l,
            k = X(a);g = a._iDisplayStart;i = !1 !== d.bPaginate ? a._iDisplayLength : -1;var t = function t(a, b) {
            j.push({ name: a, value: b });
        };t("sEcho", a.iDraw);t("iColumns", c);t("sColumns", D(b, "sName").join(","));t("iDisplayStart", g);t("iDisplayLength", i);var G = { draw: a.iDraw, columns: [], order: [], start: g, length: i, search: { value: e.sSearch, regex: e.bRegex } };for (g = 0; g < c; g++) {
            m = b[g], l = f[g], i = "function" == typeof m.mData ? "function" : m.mData, G.columns.push({ data: i, name: m.sName, searchable: m.bSearchable, orderable: m.bSortable, search: { value: l.sSearch, regex: l.bRegex } }), t("mDataProp_" + g, i), d.bFilter && (t("sSearch_" + g, l.sSearch), t("bRegex_" + g, l.bRegex), t("bSearchable_" + g, m.bSearchable)), d.bSort && t("bSortable_" + g, m.bSortable);
        }d.bFilter && (t("sSearch", e.sSearch), t("bRegex", e.bRegex));d.bSort && (h.each(k, function (a, b) {
            G.order.push({ column: b.col, dir: b.dir });t("iSortCol_" + a, b.col);t("sSortDir_" + a, b.dir);
        }), t("iSortingCols", k.length));b = n.ext.legacy.ajax;return null === b ? a.sAjaxSource ? j : G : b ? j : G;
    }function vb(a, b) {
        var c = ta(a, b),
            d = b.sEcho !== k ? b.sEcho : b.draw,
            e = b.iTotalRecords !== k ? b.iTotalRecords : b.recordsTotal,
            f = b.iTotalDisplayRecords !== k ? b.iTotalDisplayRecords : b.recordsFiltered;if (d) {
            if (1 * d < a.iDraw) return;a.iDraw = 1 * d;
        }oa(a);a._iRecordsTotal = parseInt(e, 10);a._iRecordsDisplay = parseInt(f, 10);d = 0;for (e = c.length; d < e; d++) {
            O(a, c[d]);
        }a.aiDisplay = a.aiDisplayMaster.slice();a.bAjaxDataGet = !1;P(a);a._bInitComplete || ua(a, b);a.bAjaxDataGet = !0;C(a, !1);
    }function ta(a, b) {
        var c = h.isPlainObject(a.ajax) && a.ajax.dataSrc !== k ? a.ajax.dataSrc : a.sAjaxDataProp;return "data" === c ? b.aaData || b[c] : "" !== c ? S(c)(b) : b;
    }function pb(a) {
        var b = a.oClasses,
            c = a.sTableId,
            d = a.oLanguage,
            e = a.oPreviousSearch,
            f = a.aanFeatures,
            g = '<input type="search" class="' + b.sFilterInput + '"/>',
            j = d.sSearch,
            j = j.match(/_INPUT_/) ? j.replace("_INPUT_", g) : j + g,
            b = h("<div/>", { id: !f.f ? c + "_filter" : null, "class": b.sFilter }).append(h("<label/>").append(j)),
            f = function f() {
            var b = !this.value ? "" : this.value;b != e.sSearch && (ga(a, { sSearch: b, bRegex: e.bRegex, bSmart: e.bSmart, bCaseInsensitive: e.bCaseInsensitive }), a._iDisplayStart = 0, P(a));
        },
            g = null !== a.searchDelay ? a.searchDelay : "ssp" === y(a) ? 400 : 0,
            i = h("input", b).val(e.sSearch).attr("placeholder", d.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT", g ? Oa(f, g) : f).on("keypress.DT", function (a) {
            if (13 == a.keyCode) return !1;
        }).attr("aria-controls", c);h(a.nTable).on("search.dt.DT", function (b, c) {
            if (a === c) try {
                i[0] !== H.activeElement && i.val(e.sSearch);
            } catch (d) {}
        });return b[0];
    }function ga(a, b, c) {
        var d = a.oPreviousSearch,
            e = a.aoPreSearchCols,
            f = function f(a) {
            d.sSearch = a.sSearch;d.bRegex = a.bRegex;d.bSmart = a.bSmart;d.bCaseInsensitive = a.bCaseInsensitive;
        };Ga(a);if ("ssp" != y(a)) {
            wb(a, b.sSearch, c, b.bEscapeRegex !== k ? !b.bEscapeRegex : b.bRegex, b.bSmart, b.bCaseInsensitive);f(b);for (b = 0; b < e.length; b++) {
                xb(a, e[b].sSearch, b, e[b].bEscapeRegex !== k ? !e[b].bEscapeRegex : e[b].bRegex, e[b].bSmart, e[b].bCaseInsensitive);
            }yb(a);
        } else f(b);a.bFiltered = !0;r(a, null, "search", [a]);
    }function yb(a) {
        for (var b = n.ext.search, c = a.aiDisplay, d, e, f = 0, g = b.length; f < g; f++) {
            for (var j = [], i = 0, m = c.length; i < m; i++) {
                e = c[i], d = a.aoData[e], b[f](a, d._aFilterData, e, d._aData, i) && j.push(e);
            }c.length = 0;h.merge(c, j);
        }
    }function xb(a, b, c, d, e, f) {
        if ("" !== b) {
            for (var g = [], j = a.aiDisplay, d = Pa(b, d, e, f), e = 0; e < j.length; e++) {
                b = a.aoData[j[e]]._aFilterData[c], d.test(b) && g.push(j[e]);
            }a.aiDisplay = g;
        }
    }function wb(a, b, c, d, e, f) {
        var d = Pa(b, d, e, f),
            f = a.oPreviousSearch.sSearch,
            g = a.aiDisplayMaster,
            j,
            e = [];0 !== n.ext.search.length && (c = !0);j = zb(a);if (0 >= b.length) a.aiDisplay = g.slice();else {
            if (j || c || f.length > b.length || 0 !== b.indexOf(f) || a.bSorted) a.aiDisplay = g.slice();b = a.aiDisplay;for (c = 0; c < b.length; c++) {
                d.test(a.aoData[b[c]]._sFilterRow) && e.push(b[c]);
            }a.aiDisplay = e;
        }
    }function Pa(a, b, c, d) {
        a = b ? a : Qa(a);c && (a = "^(?=.*?" + h.map(a.match(/"[^"]+"|[^ ]+/g) || [""], function (a) {
            if ('"' === a.charAt(0)) var b = a.match(/^"(.*)"$/),
                a = b ? b[1] : a;return a.replace('"', "");
        }).join(")(?=.*?") + ").*$");return RegExp(a, d ? "i" : "");
    }function zb(a) {
        var b = a.aoColumns,
            c,
            d,
            e,
            f,
            g,
            j,
            i,
            h,
            l = n.ext.type.search;c = !1;d = 0;for (f = a.aoData.length; d < f; d++) {
            if (h = a.aoData[d], !h._aFilterData) {
                j = [];e = 0;for (g = b.length; e < g; e++) {
                    c = b[e], c.bSearchable ? (i = B(a, d, e, "filter"), l[c.sType] && (i = l[c.sType](i)), null === i && (i = ""), "string" !== typeof i && i.toString && (i = i.toString())) : i = "", i.indexOf && -1 !== i.indexOf("&") && (va.innerHTML = i, i = Wb ? va.textContent : va.innerText), i.replace && (i = i.replace(/[\r\n]/g, "")), j.push(i);
                }h._aFilterData = j;h._sFilterRow = j.join("  ");c = !0;
            }
        }return c;
    }function Ab(a) {
        return { search: a.sSearch, smart: a.bSmart, regex: a.bRegex, caseInsensitive: a.bCaseInsensitive };
    }function Bb(a) {
        return { sSearch: a.search, bSmart: a.smart, bRegex: a.regex, bCaseInsensitive: a.caseInsensitive };
    }function sb(a) {
        var b = a.sTableId,
            c = a.aanFeatures.i,
            d = h("<div/>", { "class": a.oClasses.sInfo, id: !c ? b + "_info" : null });c || (a.aoDrawCallback.push({ fn: Cb, sName: "information" }), d.attr("role", "status").attr("aria-live", "polite"), h(a.nTable).attr("aria-describedby", b + "_info"));return d[0];
    }function Cb(a) {
        var b = a.aanFeatures.i;if (0 !== b.length) {
            var c = a.oLanguage,
                d = a._iDisplayStart + 1,
                e = a.fnDisplayEnd(),
                f = a.fnRecordsTotal(),
                g = a.fnRecordsDisplay(),
                j = g ? c.sInfo : c.sInfoEmpty;g !== f && (j += " " + c.sInfoFiltered);j += c.sInfoPostFix;j = Db(a, j);c = c.fnInfoCallback;null !== c && (j = c.call(a.oInstance, a, d, e, f, g, j));h(b).html(j);
        }
    }function Db(a, b) {
        var c = a.fnFormatNumber,
            d = a._iDisplayStart + 1,
            e = a._iDisplayLength,
            f = a.fnRecordsDisplay(),
            g = -1 === e;return b.replace(/_START_/g, c.call(a, d)).replace(/_END_/g, c.call(a, a.fnDisplayEnd())).replace(/_MAX_/g, c.call(a, a.fnRecordsTotal())).replace(/_TOTAL_/g, c.call(a, f)).replace(/_PAGE_/g, c.call(a, g ? 1 : Math.ceil(d / e))).replace(/_PAGES_/g, c.call(a, g ? 1 : Math.ceil(f / e)));
    }function ha(a) {
        var b,
            c,
            d = a.iInitDisplayStart,
            e = a.aoColumns,
            f;c = a.oFeatures;var g = a.bDeferLoading;if (a.bInitialised) {
            nb(a);kb(a);fa(a, a.aoHeader);fa(a, a.aoFooter);C(a, !0);c.bAutoWidth && Fa(a);b = 0;for (c = e.length; b < c; b++) {
                f = e[b], f.sWidth && (f.nTh.style.width = v(f.sWidth));
            }r(a, null, "preInit", [a]);T(a);e = y(a);if ("ssp" != e || g) "ajax" == e ? sa(a, [], function (c) {
                var f = ta(a, c);for (b = 0; b < f.length; b++) {
                    O(a, f[b]);
                }a.iInitDisplayStart = d;T(a);C(a, !1);ua(a, c);
            }, a) : (C(a, !1), ua(a));
        } else setTimeout(function () {
            ha(a);
        }, 200);
    }function ua(a, b) {
        a._bInitComplete = !0;(b || a.oInit.aaData) && $(a);r(a, null, "plugin-init", [a, b]);r(a, "aoInitComplete", "init", [a, b]);
    }function Ra(a, b) {
        var c = parseInt(b, 10);a._iDisplayLength = c;Sa(a);r(a, null, "length", [a, c]);
    }function ob(a) {
        for (var b = a.oClasses, c = a.sTableId, d = a.aLengthMenu, e = h.isArray(d[0]), f = e ? d[0] : d, d = e ? d[1] : d, e = h("<select/>", { name: c + "_length", "aria-controls": c, "class": b.sLengthSelect }), g = 0, j = f.length; g < j; g++) {
            e[0][g] = new Option("number" === typeof d[g] ? a.fnFormatNumber(d[g]) : d[g], f[g]);
        }var i = h("<div><label/></div>").addClass(b.sLength);a.aanFeatures.l || (i[0].id = c + "_length");i.children().append(a.oLanguage.sLengthMenu.replace("_MENU_", e[0].outerHTML));h("select", i).val(a._iDisplayLength).on("change.DT", function () {
            Ra(a, h(this).val());P(a);
        });h(a.nTable).on("length.dt.DT", function (b, c, d) {
            a === c && h("select", i).val(d);
        });return i[0];
    }function tb(a) {
        var b = a.sPaginationType,
            c = n.ext.pager[b],
            d = "function" === typeof c,
            e = function e(a) {
            P(a);
        },
            b = h("<div/>").addClass(a.oClasses.sPaging + b)[0],
            f = a.aanFeatures;d || c.fnInit(a, b, e);f.p || (b.id = a.sTableId + "_paginate", a.aoDrawCallback.push({ fn: function fn(a) {
                if (d) {
                    var b = a._iDisplayStart,
                        i = a._iDisplayLength,
                        h = a.fnRecordsDisplay(),
                        l = -1 === i,
                        b = l ? 0 : Math.ceil(b / i),
                        i = l ? 1 : Math.ceil(h / i),
                        h = c(b, i),
                        k,
                        l = 0;for (k = f.p.length; l < k; l++) {
                        Na(a, "pageButton")(a, f.p[l], l, h, b, i);
                    }
                } else c.fnUpdate(a, e);
            }, sName: "pagination" }));return b;
    }function Ta(a, b, c) {
        var d = a._iDisplayStart,
            e = a._iDisplayLength,
            f = a.fnRecordsDisplay();0 === f || -1 === e ? d = 0 : "number" === typeof b ? (d = b * e, d > f && (d = 0)) : "first" == b ? d = 0 : "previous" == b ? (d = 0 <= e ? d - e : 0, 0 > d && (d = 0)) : "next" == b ? d + e < f && (d += e) : "last" == b ? d = Math.floor((f - 1) / e) * e : K(a, 0, "Unknown paging action: " + b, 5);b = a._iDisplayStart !== d;a._iDisplayStart = d;b && (r(a, null, "page", [a]), c && P(a));return b;
    }function qb(a) {
        return h("<div/>", { id: !a.aanFeatures.r ? a.sTableId + "_processing" : null, "class": a.oClasses.sProcessing }).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0];
    }
    function C(a, b) {
        a.oFeatures.bProcessing && h(a.aanFeatures.r).css("display", b ? "block" : "none");r(a, null, "processing", [a, b]);
    }function rb(a) {
        var b = h(a.nTable);b.attr("role", "grid");var c = a.oScroll;if ("" === c.sX && "" === c.sY) return a.nTable;var d = c.sX,
            e = c.sY,
            f = a.oClasses,
            g = b.children("caption"),
            j = g.length ? g[0]._captionSide : null,
            i = h(b[0].cloneNode(!1)),
            m = h(b[0].cloneNode(!1)),
            l = b.children("tfoot");l.length || (l = null);i = h("<div/>", { "class": f.sScrollWrapper }).append(h("<div/>", { "class": f.sScrollHead }).css({ overflow: "hidden",
            position: "relative", border: 0, width: d ? !d ? null : v(d) : "100%" }).append(h("<div/>", { "class": f.sScrollHeadInner }).css({ "box-sizing": "content-box", width: c.sXInner || "100%" }).append(i.removeAttr("id").css("margin-left", 0).append("top" === j ? g : null).append(b.children("thead"))))).append(h("<div/>", { "class": f.sScrollBody }).css({ position: "relative", overflow: "auto", width: !d ? null : v(d) }).append(b));l && i.append(h("<div/>", { "class": f.sScrollFoot }).css({ overflow: "hidden", border: 0, width: d ? !d ? null : v(d) : "100%" }).append(h("<div/>", { "class": f.sScrollFootInner }).append(m.removeAttr("id").css("margin-left", 0).append("bottom" === j ? g : null).append(b.children("tfoot")))));var b = i.children(),
            k = b[0],
            f = b[1],
            t = l ? b[2] : null;if (d) h(f).on("scroll.DT", function () {
            var a = this.scrollLeft;k.scrollLeft = a;l && (t.scrollLeft = a);
        });h(f).css(e && c.bCollapse ? "max-height" : "height", e);a.nScrollHead = k;a.nScrollBody = f;a.nScrollFoot = t;a.aoDrawCallback.push({ fn: la, sName: "scrolling" });return i[0];
    }function la(a) {
        var b = a.oScroll,
            c = b.sX,
            d = b.sXInner,
            e = b.sY,
            b = b.iBarWidth,
            f = h(a.nScrollHead),
            g = f[0].style,
            j = f.children("div"),
            i = j[0].style,
            m = j.children("table"),
            j = a.nScrollBody,
            l = h(j),
            q = j.style,
            t = h(a.nScrollFoot).children("div"),
            n = t.children("table"),
            o = h(a.nTHead),
            p = h(a.nTable),
            s = p[0],
            r = s.style,
            u = a.nTFoot ? h(a.nTFoot) : null,
            x = a.oBrowser,
            U = x.bScrollOversize,
            Xb = D(a.aoColumns, "nTh"),
            Q,
            L,
            R,
            w,
            Ua = [],
            y = [],
            z = [],
            A = [],
            B,
            C = function C(a) {
            a = a.style;a.paddingTop = "0";a.paddingBottom = "0";a.borderTopWidth = "0";a.borderBottomWidth = "0";a.height = 0;
        };L = j.scrollHeight > j.clientHeight;if (a.scrollBarVis !== L && a.scrollBarVis !== k) a.scrollBarVis = L, $(a);else {
            a.scrollBarVis = L;p.children("thead, tfoot").remove();u && (R = u.clone().prependTo(p), Q = u.find("tr"), R = R.find("tr"));w = o.clone().prependTo(p);o = o.find("tr");L = w.find("tr");w.find("th, td").removeAttr("tabindex");c || (q.width = "100%", f[0].style.width = "100%");h.each(ra(a, w), function (b, c) {
                B = aa(a, b);c.style.width = a.aoColumns[B].sWidth;
            });u && I(function (a) {
                a.style.width = "";
            }, R);f = p.outerWidth();if ("" === c) {
                r.width = "100%";if (U && (p.find("tbody").height() > j.offsetHeight || "scroll" == l.css("overflow-y"))) r.width = v(p.outerWidth() - b);f = p.outerWidth();
            } else "" !== d && (r.width = v(d), f = p.outerWidth());I(C, L);I(function (a) {
                z.push(a.innerHTML);Ua.push(v(h(a).css("width")));
            }, L);I(function (a, b) {
                if (h.inArray(a, Xb) !== -1) a.style.width = Ua[b];
            }, o);h(L).height(0);u && (I(C, R), I(function (a) {
                A.push(a.innerHTML);y.push(v(h(a).css("width")));
            }, R), I(function (a, b) {
                a.style.width = y[b];
            }, Q), h(R).height(0));I(function (a, b) {
                a.innerHTML = '<div class="dataTables_sizing">' + z[b] + "</div>";a.childNodes[0].style.height = "0";a.childNodes[0].style.overflow = "hidden";a.style.width = Ua[b];
            }, L);u && I(function (a, b) {
                a.innerHTML = '<div class="dataTables_sizing">' + A[b] + "</div>";a.childNodes[0].style.height = "0";a.childNodes[0].style.overflow = "hidden";a.style.width = y[b];
            }, R);if (p.outerWidth() < f) {
                Q = j.scrollHeight > j.offsetHeight || "scroll" == l.css("overflow-y") ? f + b : f;if (U && (j.scrollHeight > j.offsetHeight || "scroll" == l.css("overflow-y"))) r.width = v(Q - b);("" === c || "" !== d) && K(a, 1, "Possible column misalignment", 6);
            } else Q = "100%";q.width = v(Q);
            g.width = v(Q);u && (a.nScrollFoot.style.width = v(Q));!e && U && (q.height = v(s.offsetHeight + b));c = p.outerWidth();m[0].style.width = v(c);i.width = v(c);d = p.height() > j.clientHeight || "scroll" == l.css("overflow-y");e = "padding" + (x.bScrollbarLeft ? "Left" : "Right");i[e] = d ? b + "px" : "0px";u && (n[0].style.width = v(c), t[0].style.width = v(c), t[0].style[e] = d ? b + "px" : "0px");p.children("colgroup").insertBefore(p.children("thead"));l.scroll();if ((a.bSorted || a.bFiltered) && !a._drawHold) j.scrollTop = 0;
        }
    }function I(a, b, c) {
        for (var d = 0, e = 0, f = b.length, g, j; e < f;) {
            g = b[e].firstChild;for (j = c ? c[e].firstChild : null; g;) {
                1 === g.nodeType && (c ? a(g, j, d) : a(g, d), d++), g = g.nextSibling, j = c ? j.nextSibling : null;
            }e++;
        }
    }function Fa(a) {
        var b = a.nTable,
            c = a.aoColumns,
            d = a.oScroll,
            e = d.sY,
            f = d.sX,
            g = d.sXInner,
            j = c.length,
            i = ma(a, "bVisible"),
            m = h("th", a.nTHead),
            l = b.getAttribute("width"),
            k = b.parentNode,
            t = !1,
            n,
            o,
            p = a.oBrowser,
            d = p.bScrollOversize;(n = b.style.width) && -1 !== n.indexOf("%") && (l = n);for (n = 0; n < i.length; n++) {
            o = c[i[n]], null !== o.sWidth && (o.sWidth = Eb(o.sWidthOrig, k), t = !0);
        }if (d || !t && !f && !e && j == V(a) && j == m.length) for (n = 0; n < j; n++) {
            i = aa(a, n), null !== i && (c[i].sWidth = v(m.eq(n).width()));
        } else {
            j = h(b).clone().css("visibility", "hidden").removeAttr("id");j.find("tbody tr").remove();var s = h("<tr/>").appendTo(j.find("tbody"));j.find("thead, tfoot").remove();j.append(h(a.nTHead).clone()).append(h(a.nTFoot).clone());j.find("tfoot th, tfoot td").css("width", "");m = ra(a, j.find("thead")[0]);for (n = 0; n < i.length; n++) {
                o = c[i[n]], m[n].style.width = null !== o.sWidthOrig && "" !== o.sWidthOrig ? v(o.sWidthOrig) : "", o.sWidthOrig && f && h(m[n]).append(h("<div/>").css({ width: o.sWidthOrig, margin: 0, padding: 0, border: 0, height: 1 }));
            }if (a.aoData.length) for (n = 0; n < i.length; n++) {
                t = i[n], o = c[t], h(Fb(a, t)).clone(!1).append(o.sContentPadding).appendTo(s);
            }h("[name]", j).removeAttr("name");o = h("<div/>").css(f || e ? { position: "absolute", top: 0, left: 0, height: 1, right: 0, overflow: "hidden" } : {}).append(j).appendTo(k);f && g ? j.width(g) : f ? (j.css("width", "auto"), j.removeAttr("width"), j.width() < k.clientWidth && l && j.width(k.clientWidth)) : e ? j.width(k.clientWidth) : l && j.width(l);for (n = e = 0; n < i.length; n++) {
                k = h(m[n]), g = k.outerWidth() - k.width(), k = p.bBounding ? Math.ceil(m[n].getBoundingClientRect().width) : k.outerWidth(), e += k, c[i[n]].sWidth = v(k - g);
            }b.style.width = v(e);o.remove();
        }l && (b.style.width = v(l));if ((l || f) && !a._reszEvt) b = function b() {
            h(E).on("resize.DT-" + a.sInstance, Oa(function () {
                $(a);
            }));
        }, d ? setTimeout(b, 1E3) : b(), a._reszEvt = !0;
    }function Eb(a, b) {
        if (!a) return 0;var c = h("<div/>").css("width", v(a)).appendTo(b || H.body),
            d = c[0].offsetWidth;c.remove();return d;
    }function Fb(a, b) {
        var c = Gb(a, b);if (0 > c) return null;var d = a.aoData[c];return !d.nTr ? h("<td/>").html(B(a, c, b, "display"))[0] : d.anCells[b];
    }function Gb(a, b) {
        for (var c, d = -1, e = -1, f = 0, g = a.aoData.length; f < g; f++) {
            c = B(a, f, b, "display") + "", c = c.replace(Yb, ""), c = c.replace(/&nbsp;/g, " "), c.length > d && (d = c.length, e = f);
        }return e;
    }function v(a) {
        return null === a ? "0px" : "number" == typeof a ? 0 > a ? "0px" : a + "px" : a.match(/\d$/) ? a + "px" : a;
    }function X(a) {
        var b,
            c,
            d = [],
            e = a.aoColumns,
            f,
            g,
            j,
            i;b = a.aaSortingFixed;c = h.isPlainObject(b);var m = [];f = function f(a) {
            a.length && !h.isArray(a[0]) ? m.push(a) : h.merge(m, a);
        };h.isArray(b) && f(b);c && b.pre && f(b.pre);f(a.aaSorting);c && b.post && f(b.post);for (a = 0; a < m.length; a++) {
            i = m[a][0];f = e[i].aDataSort;b = 0;for (c = f.length; b < c; b++) {
                g = f[b], j = e[g].sType || "string", m[a]._idx === k && (m[a]._idx = h.inArray(m[a][1], e[g].asSorting)), d.push({ src: i, col: g, dir: m[a][1], index: m[a]._idx, type: j, formatter: n.ext.type.order[j + "-pre"] });
            }
        }return d;
    }function mb(a) {
        var b,
            c,
            d = [],
            e = n.ext.type.order,
            f = a.aoData,
            g = 0,
            j,
            i = a.aiDisplayMaster,
            h;Ga(a);h = X(a);b = 0;for (c = h.length; b < c; b++) {
            j = h[b], j.formatter && g++, Hb(a, j.col);
        }if ("ssp" != y(a) && 0 !== h.length) {
            b = 0;for (c = i.length; b < c; b++) {
                d[i[b]] = b;
            }g === h.length ? i.sort(function (a, b) {
                var c,
                    e,
                    g,
                    j,
                    i = h.length,
                    k = f[a]._aSortData,
                    n = f[b]._aSortData;for (g = 0; g < i; g++) {
                    if (j = h[g], c = k[j.col], e = n[j.col], c = c < e ? -1 : c > e ? 1 : 0, 0 !== c) return "asc" === j.dir ? c : -c;
                }c = d[a];e = d[b];return c < e ? -1 : c > e ? 1 : 0;
            }) : i.sort(function (a, b) {
                var c,
                    g,
                    j,
                    i,
                    k = h.length,
                    n = f[a]._aSortData,
                    o = f[b]._aSortData;for (j = 0; j < k; j++) {
                    if (i = h[j], c = n[i.col], g = o[i.col], i = e[i.type + "-" + i.dir] || e["string-" + i.dir], c = i(c, g), 0 !== c) return c;
                }c = d[a];g = d[b];return c < g ? -1 : c > g ? 1 : 0;
            });
        }a.bSorted = !0;
    }function Ib(a) {
        for (var b, c, d = a.aoColumns, e = X(a), a = a.oLanguage.oAria, f = 0, g = d.length; f < g; f++) {
            c = d[f];var j = c.asSorting;b = c.sTitle.replace(/<.*?>/g, "");var i = c.nTh;i.removeAttribute("aria-sort");c.bSortable && (0 < e.length && e[0].col == f ? (i.setAttribute("aria-sort", "asc" == e[0].dir ? "ascending" : "descending"), c = j[e[0].index + 1] || j[0]) : c = j[0], b += "asc" === c ? a.sSortAscending : a.sSortDescending);i.setAttribute("aria-label", b);
        }
    }function Va(a, b, c, d) {
        var e = a.aaSorting,
            f = a.aoColumns[b].asSorting,
            g = function g(a, b) {
            var c = a._idx;c === k && (c = h.inArray(a[1], f));return c + 1 < f.length ? c + 1 : b ? null : 0;
        };"number" === typeof e[0] && (e = a.aaSorting = [e]);c && a.oFeatures.bSortMulti ? (c = h.inArray(b, D(e, "0")), -1 !== c ? (b = g(e[c], !0), null === b && 1 === e.length && (b = 0), null === b ? e.splice(c, 1) : (e[c][1] = f[b], e[c]._idx = b)) : (e.push([b, f[0], 0]), e[e.length - 1]._idx = 0)) : e.length && e[0][0] == b ? (b = g(e[0]), e.length = 1, e[0][1] = f[b], e[0]._idx = b) : (e.length = 0, e.push([b, f[0]]), e[0]._idx = 0);T(a);"function" == typeof d && d(a);
    }function Ma(a, b, c, d) {
        var e = a.aoColumns[c];Wa(b, {}, function (b) {
            !1 !== e.bSortable && (a.oFeatures.bProcessing ? (C(a, !0), setTimeout(function () {
                Va(a, c, b.shiftKey, d);"ssp" !== y(a) && C(a, !1);
            }, 0)) : Va(a, c, b.shiftKey, d));
        });
    }function wa(a) {
        var b = a.aLastSort,
            c = a.oClasses.sSortColumn,
            d = X(a),
            e = a.oFeatures,
            f,
            g;if (e.bSort && e.bSortClasses) {
            e = 0;for (f = b.length; e < f; e++) {
                g = b[e].src, h(D(a.aoData, "anCells", g)).removeClass(c + (2 > e ? e + 1 : 3));
            }e = 0;for (f = d.length; e < f; e++) {
                g = d[e].src, h(D(a.aoData, "anCells", g)).addClass(c + (2 > e ? e + 1 : 3));
            }
        }a.aLastSort = d;
    }function Hb(a, b) {
        var c = a.aoColumns[b],
            d = n.ext.order[c.sSortDataType],
            e;d && (e = d.call(a.oInstance, a, b, ba(a, b)));for (var f, g = n.ext.type.order[c.sType + "-pre"], j = 0, i = a.aoData.length; j < i; j++) {
            if (c = a.aoData[j], c._aSortData || (c._aSortData = []), !c._aSortData[b] || d) f = d ? e[j] : B(a, j, b, "sort"), c._aSortData[b] = g ? g(f) : f;
        }
    }function xa(a) {
        if (a.oFeatures.bStateSave && !a.bDestroying) {
            var b = { time: +new Date(), start: a._iDisplayStart, length: a._iDisplayLength, order: h.extend(!0, [], a.aaSorting), search: Ab(a.oPreviousSearch),
                columns: h.map(a.aoColumns, function (b, d) {
                    return { visible: b.bVisible, search: Ab(a.aoPreSearchCols[d]) };
                }) };r(a, "aoStateSaveParams", "stateSaveParams", [a, b]);a.oSavedState = b;a.fnStateSaveCallback.call(a.oInstance, a, b);
        }
    }function Jb(a, b, c) {
        var d,
            e,
            f = a.aoColumns,
            b = function b(_b) {
            if (_b && _b.time) {
                var g = r(a, "aoStateLoadParams", "stateLoadParams", [a, _b]);if (-1 === h.inArray(!1, g) && (g = a.iStateDuration, !(0 < g && _b.time < +new Date() - 1E3 * g) && !(_b.columns && f.length !== _b.columns.length))) {
                    a.oLoadedState = h.extend(!0, {}, _b);_b.start !== k && (a._iDisplayStart = _b.start, a.iInitDisplayStart = _b.start);_b.length !== k && (a._iDisplayLength = _b.length);_b.order !== k && (a.aaSorting = [], h.each(_b.order, function (b, c) {
                        a.aaSorting.push(c[0] >= f.length ? [0, c[1]] : c);
                    }));_b.search !== k && h.extend(a.oPreviousSearch, Bb(_b.search));if (_b.columns) {
                        d = 0;for (e = _b.columns.length; d < e; d++) {
                            g = _b.columns[d], g.visible !== k && (f[d].bVisible = g.visible), g.search !== k && h.extend(a.aoPreSearchCols[d], Bb(g.search));
                        }
                    }r(a, "aoStateLoaded", "stateLoaded", [a, _b]);
                }
            }c();
        };if (a.oFeatures.bStateSave) {
            var g = a.fnStateLoadCallback.call(a.oInstance, a, b);g !== k && b(g);
        } else c();
    }function ya(a) {
        var b = n.settings,
            a = h.inArray(a, D(b, "nTable"));return -1 !== a ? b[a] : null;
    }function K(a, b, c, d) {
        c = "DataTables warning: " + (a ? "table id=" + a.sTableId + " - " : "") + c;d && (c += ". For more information about this error, please see http://datatables.net/tn/" + d);if (b) E.console && console.log && console.log(c);else if (b = n.ext, b = b.sErrMode || b.errMode, a && r(a, null, "error", [a, d, c]), "alert" == b) alert(c);else {
            if ("throw" == b) throw Error(c);"function" == typeof b && b(a, d, c);
        }
    }function F(a, b, c, d) {
        h.isArray(c) ? h.each(c, function (c, d) {
            h.isArray(d) ? F(a, b, d[0], d[1]) : F(a, b, d);
        }) : (d === k && (d = c), b[c] !== k && (a[d] = b[c]));
    }function Xa(a, b, c) {
        var d, e;for (e in b) {
            b.hasOwnProperty(e) && (d = b[e], h.isPlainObject(d) ? (h.isPlainObject(a[e]) || (a[e] = {}), h.extend(!0, a[e], d)) : a[e] = c && "data" !== e && "aaData" !== e && h.isArray(d) ? d.slice() : d);
        }return a;
    }function Wa(a, b, c) {
        h(a).on("click.DT", b, function (b) {
            h(a).blur();c(b);
        }).on("keypress.DT", b, function (a) {
            13 === a.which && (a.preventDefault(), c(a));
        }).on("selectstart.DT", function () {
            return !1;
        });
    }function z(a, b, c, d) {
        c && a[b].push({ fn: c, sName: d });
    }function r(a, b, c, d) {
        var e = [];b && (e = h.map(a[b].slice().reverse(), function (b) {
            return b.fn.apply(a.oInstance, d);
        }));null !== c && (b = h.Event(c + ".dt"), h(a.nTable).trigger(b, d), e.push(b.result));return e;
    }function Sa(a) {
        var b = a._iDisplayStart,
            c = a.fnDisplayEnd(),
            d = a._iDisplayLength;b >= c && (b = c - d);b -= b % d;if (-1 === d || 0 > b) b = 0;a._iDisplayStart = b;
    }function Na(a, b) {
        var c = a.renderer,
            d = n.ext.renderer[b];return h.isPlainObject(c) && c[b] ? d[c[b]] || d._ : "string" === typeof c ? d[c] || d._ : d._;
    }function y(a) {
        return a.oFeatures.bServerSide ? "ssp" : a.ajax || a.sAjaxSource ? "ajax" : "dom";
    }function ia(a, b) {
        var c = [],
            c = Kb.numbers_length,
            d = Math.floor(c / 2);b <= c ? c = Y(0, b) : a <= d ? (c = Y(0, c - 2), c.push("ellipsis"), c.push(b - 1)) : (a >= b - 1 - d ? c = Y(b - (c - 2), b) : (c = Y(a - d + 2, a + d - 1), c.push("ellipsis"), c.push(b - 1)), c.splice(0, 0, "ellipsis"), c.splice(0, 0, 0));c.DT_el = "span";return c;
    }function Da(a) {
        h.each({ num: function num(b) {
                return za(b, a);
            }, "num-fmt": function numFmt(b) {
                return za(b, a, Ya);
            }, "html-num": function htmlNum(b) {
                return za(b, a, Aa);
            }, "html-num-fmt": function htmlNumFmt(b) {
                return za(b, a, Aa, Ya);
            } }, function (b, c) {
            x.type.order[b + a + "-pre"] = c;b.match(/^html\-/) && (x.type.search[b + a] = x.type.search.html);
        });
    }function Lb(a) {
        return function () {
            var b = [ya(this[n.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));return n.ext.internal[a].apply(this, b);
        };
    }var n = function n(a) {
        this.$ = function (a, b) {
            return this.api(!0).$(a, b);
        };this._ = function (a, b) {
            return this.api(!0).rows(a, b).data();
        };this.api = function (a) {
            return a ? new _s(ya(this[x.iApiIndex])) : new _s(this);
        };
        this.fnAddData = function (a, b) {
            var c = this.api(!0),
                d = h.isArray(a) && (h.isArray(a[0]) || h.isPlainObject(a[0])) ? c.rows.add(a) : c.row.add(a);(b === k || b) && c.draw();return d.flatten().toArray();
        };this.fnAdjustColumnSizing = function (a) {
            var b = this.api(!0).columns.adjust(),
                c = b.settings()[0],
                d = c.oScroll;a === k || a ? b.draw(!1) : ("" !== d.sX || "" !== d.sY) && la(c);
        };this.fnClearTable = function (a) {
            var b = this.api(!0).clear();(a === k || a) && b.draw();
        };this.fnClose = function (a) {
            this.api(!0).row(a).child.hide();
        };this.fnDeleteRow = function (a, b, c) {
            var d = this.api(!0),
                a = d.rows(a),
                e = a.settings()[0],
                h = e.aoData[a[0][0]];a.remove();b && b.call(this, e, h);(c === k || c) && d.draw();return h;
        };this.fnDestroy = function (a) {
            this.api(!0).destroy(a);
        };this.fnDraw = function (a) {
            this.api(!0).draw(a);
        };this.fnFilter = function (a, b, c, d, e, h) {
            e = this.api(!0);null === b || b === k ? e.search(a, c, d, h) : e.column(b).search(a, c, d, h);e.draw();
        };this.fnGetData = function (a, b) {
            var c = this.api(!0);if (a !== k) {
                var d = a.nodeName ? a.nodeName.toLowerCase() : "";return b !== k || "td" == d || "th" == d ? c.cell(a, b).data() : c.row(a).data() || null;
            }return c.data().toArray();
        };this.fnGetNodes = function (a) {
            var b = this.api(!0);return a !== k ? b.row(a).node() : b.rows().nodes().flatten().toArray();
        };this.fnGetPosition = function (a) {
            var b = this.api(!0),
                c = a.nodeName.toUpperCase();return "TR" == c ? b.row(a).index() : "TD" == c || "TH" == c ? (a = b.cell(a).index(), [a.row, a.columnVisible, a.column]) : null;
        };this.fnIsOpen = function (a) {
            return this.api(!0).row(a).child.isShown();
        };this.fnOpen = function (a, b, c) {
            return this.api(!0).row(a).child(b, c).show().child()[0];
        };
        this.fnPageChange = function (a, b) {
            var c = this.api(!0).page(a);(b === k || b) && c.draw(!1);
        };this.fnSetColumnVis = function (a, b, c) {
            a = this.api(!0).column(a).visible(b);(c === k || c) && a.columns.adjust().draw();
        };this.fnSettings = function () {
            return ya(this[x.iApiIndex]);
        };this.fnSort = function (a) {
            this.api(!0).order(a).draw();
        };this.fnSortListener = function (a, b, c) {
            this.api(!0).order.listener(a, b, c);
        };this.fnUpdate = function (a, b, c, d, e) {
            var h = this.api(!0);c === k || null === c ? h.row(b).data(a) : h.cell(b, c).data(a);(e === k || e) && h.columns.adjust();
            (d === k || d) && h.draw();return 0;
        };this.fnVersionCheck = x.fnVersionCheck;var b = this,
            c = a === k,
            d = this.length;c && (a = {});this.oApi = this.internal = x.internal;for (var e in n.ext.internal) {
            e && (this[e] = Lb(e));
        }this.each(function () {
            var e = {},
                g = 1 < d ? Xa(e, a, !0) : a,
                j = 0,
                i,
                e = this.getAttribute("id"),
                m = !1,
                l = n.defaults,
                q = h(this);if ("table" != this.nodeName.toLowerCase()) K(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);else {
                eb(l);fb(l.column);J(l, l, !0);J(l.column, l.column, !0);J(l, h.extend(g, q.data()));var t = n.settings,
                    j = 0;for (i = t.length; j < i; j++) {
                    var o = t[j];if (o.nTable == this || o.nTHead && o.nTHead.parentNode == this || o.nTFoot && o.nTFoot.parentNode == this) {
                        var s = g.bRetrieve !== k ? g.bRetrieve : l.bRetrieve;if (c || s) return o.oInstance;if (g.bDestroy !== k ? g.bDestroy : l.bDestroy) {
                            o.oInstance.fnDestroy();break;
                        } else {
                            K(o, 0, "Cannot reinitialise DataTable", 3);return;
                        }
                    }if (o.sTableId == this.id) {
                        t.splice(j, 1);break;
                    }
                }if (null === e || "" === e) this.id = e = "DataTables_Table_" + n.ext._unique++;var p = h.extend(!0, {}, n.models.oSettings, { sDestroyWidth: q[0].style.width,
                    sInstance: e, sTableId: e });p.nTable = this;p.oApi = b.internal;p.oInit = g;t.push(p);p.oInstance = 1 === b.length ? b : q.dataTable();eb(g);Ca(g.oLanguage);g.aLengthMenu && !g.iDisplayLength && (g.iDisplayLength = h.isArray(g.aLengthMenu[0]) ? g.aLengthMenu[0][0] : g.aLengthMenu[0]);g = Xa(h.extend(!0, {}, l), g);F(p.oFeatures, g, "bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));F(p, g, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", "rowId", ["iCookieDuration", "iStateDuration"], ["oSearch", "oPreviousSearch"], ["aoSearchCols", "aoPreSearchCols"], ["iDisplayLength", "_iDisplayLength"]]);F(p.oScroll, g, [["sScrollX", "sX"], ["sScrollXInner", "sXInner"], ["sScrollY", "sY"], ["bScrollCollapse", "bCollapse"]]);F(p.oLanguage, g, "fnInfoCallback");
                z(p, "aoDrawCallback", g.fnDrawCallback, "user");z(p, "aoServerParams", g.fnServerParams, "user");z(p, "aoStateSaveParams", g.fnStateSaveParams, "user");z(p, "aoStateLoadParams", g.fnStateLoadParams, "user");z(p, "aoStateLoaded", g.fnStateLoaded, "user");z(p, "aoRowCallback", g.fnRowCallback, "user");z(p, "aoRowCreatedCallback", g.fnCreatedRow, "user");z(p, "aoHeaderCallback", g.fnHeaderCallback, "user");z(p, "aoFooterCallback", g.fnFooterCallback, "user");z(p, "aoInitComplete", g.fnInitComplete, "user");z(p, "aoPreDrawCallback", g.fnPreDrawCallback, "user");p.rowIdFn = S(g.rowId);gb(p);var u = p.oClasses;h.extend(u, n.ext.classes, g.oClasses);q.addClass(u.sTable);p.iInitDisplayStart === k && (p.iInitDisplayStart = g.iDisplayStart, p._iDisplayStart = g.iDisplayStart);null !== g.iDeferLoading && (p.bDeferLoading = !0, e = h.isArray(g.iDeferLoading), p._iRecordsDisplay = e ? g.iDeferLoading[0] : g.iDeferLoading, p._iRecordsTotal = e ? g.iDeferLoading[1] : g.iDeferLoading);var v = p.oLanguage;h.extend(!0, v, g.oLanguage);v.sUrl && (h.ajax({ dataType: "json", url: v.sUrl, success: function success(a) {
                        Ca(a);
                        J(l.oLanguage, a);h.extend(true, v, a);ha(p);
                    }, error: function error() {
                        ha(p);
                    } }), m = !0);null === g.asStripeClasses && (p.asStripeClasses = [u.sStripeOdd, u.sStripeEven]);var e = p.asStripeClasses,
                    x = q.children("tbody").find("tr").eq(0);-1 !== h.inArray(!0, h.map(e, function (a) {
                    return x.hasClass(a);
                })) && (h("tbody tr", this).removeClass(e.join(" ")), p.asDestroyStripes = e.slice());e = [];t = this.getElementsByTagName("thead");0 !== t.length && (ea(p.aoHeader, t[0]), e = ra(p));if (null === g.aoColumns) {
                    t = [];j = 0;for (i = e.length; j < i; j++) {
                        t.push(null);
                    }
                } else t = g.aoColumns;j = 0;for (i = t.length; j < i; j++) {
                    Ea(p, e ? e[j] : null);
                }ib(p, g.aoColumnDefs, t, function (a, b) {
                    ka(p, a, b);
                });if (x.length) {
                    var w = function w(a, b) {
                        return a.getAttribute("data-" + b) !== null ? b : null;
                    };h(x[0]).children("th, td").each(function (a, b) {
                        var c = p.aoColumns[a];if (c.mData === a) {
                            var d = w(b, "sort") || w(b, "order"),
                                e = w(b, "filter") || w(b, "search");if (d !== null || e !== null) {
                                c.mData = { _: a + ".display", sort: d !== null ? a + ".@data-" + d : k, type: d !== null ? a + ".@data-" + d : k, filter: e !== null ? a + ".@data-" + e : k };ka(p, a);
                            }
                        }
                    });
                }var U = p.oFeatures,
                    e = function e() {
                    if (g.aaSorting === k) {
                        var a = p.aaSorting;j = 0;for (i = a.length; j < i; j++) {
                            a[j][1] = p.aoColumns[j].asSorting[0];
                        }
                    }wa(p);U.bSort && z(p, "aoDrawCallback", function () {
                        if (p.bSorted) {
                            var a = X(p),
                                b = {};h.each(a, function (a, c) {
                                b[c.src] = c.dir;
                            });r(p, null, "order", [p, a, b]);Ib(p);
                        }
                    });z(p, "aoDrawCallback", function () {
                        (p.bSorted || y(p) === "ssp" || U.bDeferRender) && wa(p);
                    }, "sc");var a = q.children("caption").each(function () {
                        this._captionSide = h(this).css("caption-side");
                    }),
                        b = q.children("thead");b.length === 0 && (b = h("<thead/>").appendTo(q));
                    p.nTHead = b[0];b = q.children("tbody");b.length === 0 && (b = h("<tbody/>").appendTo(q));p.nTBody = b[0];b = q.children("tfoot");if (b.length === 0 && a.length > 0 && (p.oScroll.sX !== "" || p.oScroll.sY !== "")) b = h("<tfoot/>").appendTo(q);if (b.length === 0 || b.children().length === 0) q.addClass(u.sNoFooter);else if (b.length > 0) {
                        p.nTFoot = b[0];ea(p.aoFooter, p.nTFoot);
                    }if (g.aaData) for (j = 0; j < g.aaData.length; j++) {
                        O(p, g.aaData[j]);
                    } else (p.bDeferLoading || y(p) == "dom") && na(p, h(p.nTBody).children("tr"));p.aiDisplay = p.aiDisplayMaster.slice();
                    p.bInitialised = true;m === false && ha(p);
                };g.bStateSave ? (U.bStateSave = !0, z(p, "aoDrawCallback", xa, "state_save"), Jb(p, g, e)) : e();
            }
        });b = null;return this;
    },
        x,
        _s,
        o,
        u,
        Za = {},
        Mb = /[\r\n]/g,
        Aa = /<.*?>/g,
        Zb = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,
        $b = RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)", "g"),
        Ya = /[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi,
        M = function M(a) {
        return !a || !0 === a || "-" === a ? !0 : !1;
    },
        Nb = function Nb(a) {
        var b = parseInt(a, 10);return !isNaN(b) && isFinite(a) ? b : null;
    },
        Ob = function Ob(a, b) {
        Za[b] || (Za[b] = RegExp(Qa(b), "g"));return "string" === typeof a && "." !== b ? a.replace(/\./g, "").replace(Za[b], ".") : a;
    },
        $a = function $a(a, b, c) {
        var d = "string" === typeof a;if (M(a)) return !0;b && d && (a = Ob(a, b));c && d && (a = a.replace(Ya, ""));return !isNaN(parseFloat(a)) && isFinite(a);
    },
        Pb = function Pb(a, b, c) {
        return M(a) ? !0 : !(M(a) || "string" === typeof a) ? null : $a(a.replace(Aa, ""), b, c) ? !0 : null;
    },
        D = function D(a, b, c) {
        var d = [],
            e = 0,
            f = a.length;if (c !== k) for (; e < f; e++) {
            a[e] && a[e][b] && d.push(a[e][b][c]);
        } else for (; e < f; e++) {
            a[e] && d.push(a[e][b]);
        }return d;
    },
        ja = function ja(a, b, c, d) {
        var e = [],
            f = 0,
            g = b.length;if (d !== k) for (; f < g; f++) {
            a[b[f]][c] && e.push(a[b[f]][c][d]);
        } else for (; f < g; f++) {
            e.push(a[b[f]][c]);
        }return e;
    },
        Y = function Y(a, b) {
        var c = [],
            d;b === k ? (b = 0, d = a) : (d = b, b = a);for (var e = b; e < d; e++) {
            c.push(e);
        }return c;
    },
        Qb = function Qb(a) {
        for (var b = [], c = 0, d = a.length; c < d; c++) {
            a[c] && b.push(a[c]);
        }return b;
    },
        qa = function qa(a) {
        var b;a: {
            if (!(2 > a.length)) {
                b = a.slice().sort();for (var c = b[0], d = 1, e = b.length; d < e; d++) {
                    if (b[d] === c) {
                        b = !1;break a;
                    }c = b[d];
                }
            }b = !0;
        }if (b) return a.slice();
        b = [];var e = a.length,
            f,
            g = 0,
            d = 0;a: for (; d < e; d++) {
            c = a[d];for (f = 0; f < g; f++) {
                if (b[f] === c) continue a;
            }b.push(c);g++;
        }return b;
    };n.util = { throttle: function throttle(a, b) {
            var c = b !== k ? b : 200,
                d,
                e;return function () {
                var b = this,
                    g = +new Date(),
                    j = arguments;d && g < d + c ? (clearTimeout(e), e = setTimeout(function () {
                    d = k;a.apply(b, j);
                }, c)) : (d = g, a.apply(b, j));
            };
        }, escapeRegex: function escapeRegex(a) {
            return a.replace($b, "\\$1");
        } };var A = function A(a, b, c) {
        a[b] !== k && (a[c] = a[b]);
    },
        ca = /\[.*?\]$/,
        W = /\(\)$/,
        Qa = n.util.escapeRegex,
        va = h("<div>")[0],
        Wb = va.textContent !== k,
        Yb = /<.*?>/g,
        Oa = n.util.throttle,
        Rb = [],
        w = Array.prototype,
        ac = function ac(a) {
        var b,
            c,
            d = n.settings,
            e = h.map(d, function (a) {
            return a.nTable;
        });if (a) {
            if (a.nTable && a.oApi) return [a];if (a.nodeName && "table" === a.nodeName.toLowerCase()) return b = h.inArray(a, e), -1 !== b ? [d[b]] : null;if (a && "function" === typeof a.settings) return a.settings().toArray();"string" === typeof a ? c = h(a) : a instanceof h && (c = a);
        } else return [];if (c) return c.map(function () {
            b = h.inArray(this, e);return -1 !== b ? d[b] : null;
        }).toArray();
    };_s = function s(a, b) {
        if (!(this instanceof _s)) return new _s(a, b);var c = [],
            d = function d(a) {
            (a = ac(a)) && (c = c.concat(a));
        };if (h.isArray(a)) for (var e = 0, f = a.length; e < f; e++) {
            d(a[e]);
        } else d(a);this.context = qa(c);b && h.merge(this, b);this.selector = { rows: null, cols: null, opts: null };_s.extend(this, this, Rb);
    };n.Api = _s;h.extend(_s.prototype, { any: function any() {
            return 0 !== this.count();
        }, concat: w.concat, context: [], count: function count() {
            return this.flatten().length;
        }, each: function each(a) {
            for (var b = 0, c = this.length; b < c; b++) {
                a.call(this, this[b], b, this);
            }return this;
        }, eq: function eq(a) {
            var b = this.context;return b.length > a ? new _s(b[a], this[a]) : null;
        }, filter: function filter(a) {
            var b = [];if (w.filter) b = w.filter.call(this, a, this);else for (var c = 0, d = this.length; c < d; c++) {
                a.call(this, this[c], c, this) && b.push(this[c]);
            }return new _s(this.context, b);
        }, flatten: function flatten() {
            var a = [];return new _s(this.context, a.concat.apply(a, this.toArray()));
        }, join: w.join, indexOf: w.indexOf || function (a, b) {
            for (var c = b || 0, d = this.length; c < d; c++) {
                if (this[c] === a) return c;
            }return -1;
        }, iterator: function iterator(a, b, c, d) {
            var e = [],
                f,
                g,
                j,
                h,
                m,
                l = this.context,
                n,
                o,
                u = this.selector;"string" === typeof a && (d = c, c = b, b = a, a = !1);g = 0;for (j = l.length; g < j; g++) {
                var r = new _s(l[g]);if ("table" === b) f = c.call(r, l[g], g), f !== k && e.push(f);else if ("columns" === b || "rows" === b) f = c.call(r, l[g], this[g], g), f !== k && e.push(f);else if ("column" === b || "column-rows" === b || "row" === b || "cell" === b) {
                    o = this[g];"column-rows" === b && (n = Ba(l[g], u.opts));h = 0;for (m = o.length; h < m; h++) {
                        f = o[h], f = "cell" === b ? c.call(r, l[g], f.row, f.column, g, h) : c.call(r, l[g], f, g, h, n), f !== k && e.push(f);
                    }
                }
            }return e.length || d ? (a = new _s(l, a ? e.concat.apply([], e) : e), b = a.selector, b.rows = u.rows, b.cols = u.cols, b.opts = u.opts, a) : this;
        }, lastIndexOf: w.lastIndexOf || function (a, b) {
            return this.indexOf.apply(this.toArray.reverse(), arguments);
        }, length: 0, map: function map(a) {
            var b = [];if (w.map) b = w.map.call(this, a, this);else for (var c = 0, d = this.length; c < d; c++) {
                b.push(a.call(this, this[c], c));
            }return new _s(this.context, b);
        }, pluck: function pluck(a) {
            return this.map(function (b) {
                return b[a];
            });
        }, pop: w.pop, push: w.push, reduce: w.reduce || function (a, b) {
            return hb(this, a, b, 0, this.length, 1);
        }, reduceRight: w.reduceRight || function (a, b) {
            return hb(this, a, b, this.length - 1, -1, -1);
        }, reverse: w.reverse, selector: null, shift: w.shift, slice: function slice() {
            return new _s(this.context, this);
        }, sort: w.sort, splice: w.splice, toArray: function toArray() {
            return w.slice.call(this);
        }, to$: function to$() {
            return h(this);
        }, toJQuery: function toJQuery() {
            return h(this);
        }, unique: function unique() {
            return new _s(this.context, qa(this));
        }, unshift: w.unshift });_s.extend = function (a, b, c) {
        if (c.length && b && (b instanceof _s || b.__dt_wrapper)) {
            var d,
                e,
                f,
                g = function g(a, b, c) {
                return function () {
                    var d = b.apply(a, arguments);_s.extend(d, d, c.methodExt);return d;
                };
            };d = 0;for (e = c.length; d < e; d++) {
                f = c[d], b[f.name] = "function" === typeof f.val ? g(a, f.val, f) : h.isPlainObject(f.val) ? {} : f.val, b[f.name].__dt_wrapper = !0, _s.extend(a, b[f.name], f.propExt);
            }
        }
    };_s.register = o = function o(a, b) {
        if (h.isArray(a)) for (var c = 0, d = a.length; c < d; c++) {
            _s.register(a[c], b);
        } else for (var e = a.split("."), f = Rb, g, j, c = 0, d = e.length; c < d; c++) {
            g = (j = -1 !== e[c].indexOf("()")) ? e[c].replace("()", "") : e[c];var i;a: {
                i = 0;for (var m = f.length; i < m; i++) {
                    if (f[i].name === g) {
                        i = f[i];break a;
                    }
                }i = null;
            }i || (i = { name: g, val: {}, methodExt: [], propExt: [] }, f.push(i));c === d - 1 ? i.val = b : f = j ? i.methodExt : i.propExt;
        }
    };_s.registerPlural = u = function u(a, b, c) {
        _s.register(a, c);_s.register(b, function () {
            var a = c.apply(this, arguments);return a === this ? this : a instanceof _s ? a.length ? h.isArray(a[0]) ? new _s(a.context, a[0]) : a[0] : k : a;
        });
    };o("tables()", function (a) {
        var b;if (a) {
            b = _s;var c = this.context;if ("number" === typeof a) a = [c[a]];else var d = h.map(c, function (a) {
                return a.nTable;
            }),
                a = h(d).filter(a).map(function () {
                var a = h.inArray(this, d);return c[a];
            }).toArray();b = new b(a);
        } else b = this;return b;
    });o("table()", function (a) {
        var a = this.tables(a),
            b = a.context;return b.length ? new _s(b[0]) : a;
    });u("tables().nodes()", "table().node()", function () {
        return this.iterator("table", function (a) {
            return a.nTable;
        }, 1);
    });u("tables().body()", "table().body()", function () {
        return this.iterator("table", function (a) {
            return a.nTBody;
        }, 1);
    });u("tables().header()", "table().header()", function () {
        return this.iterator("table", function (a) {
            return a.nTHead;
        }, 1);
    });u("tables().footer()", "table().footer()", function () {
        return this.iterator("table", function (a) {
            return a.nTFoot;
        }, 1);
    });u("tables().containers()", "table().container()", function () {
        return this.iterator("table", function (a) {
            return a.nTableWrapper;
        }, 1);
    });o("draw()", function (a) {
        return this.iterator("table", function (b) {
            "page" === a ? P(b) : ("string" === typeof a && (a = "full-hold" === a ? !1 : !0), T(b, !1 === a));
        });
    });o("page()", function (a) {
        return a === k ? this.page.info().page : this.iterator("table", function (b) {
            Ta(b, a);
        });
    });o("page.info()", function () {
        if (0 === this.context.length) return k;var a = this.context[0],
            b = a._iDisplayStart,
            c = a.oFeatures.bPaginate ? a._iDisplayLength : -1,
            d = a.fnRecordsDisplay(),
            e = -1 === c;return { page: e ? 0 : Math.floor(b / c), pages: e ? 1 : Math.ceil(d / c), start: b, end: a.fnDisplayEnd(), length: c, recordsTotal: a.fnRecordsTotal(), recordsDisplay: d, serverSide: "ssp" === y(a) };
    });o("page.len()", function (a) {
        return a === k ? 0 !== this.context.length ? this.context[0]._iDisplayLength : k : this.iterator("table", function (b) {
            Ra(b, a);
        });
    });var Sb = function Sb(a, b, c) {
        if (c) {
            var d = new _s(a);
            d.one("draw", function () {
                c(d.ajax.json());
            });
        }if ("ssp" == y(a)) T(a, b);else {
            C(a, !0);var e = a.jqXHR;e && 4 !== e.readyState && e.abort();sa(a, [], function (c) {
                oa(a);for (var c = ta(a, c), d = 0, e = c.length; d < e; d++) {
                    O(a, c[d]);
                }T(a, b);C(a, !1);
            });
        }
    };o("ajax.json()", function () {
        var a = this.context;if (0 < a.length) return a[0].json;
    });o("ajax.params()", function () {
        var a = this.context;if (0 < a.length) return a[0].oAjaxData;
    });o("ajax.reload()", function (a, b) {
        return this.iterator("table", function (c) {
            Sb(c, !1 === b, a);
        });
    });o("ajax.url()", function (a) {
        var b = this.context;if (a === k) {
            if (0 === b.length) return k;b = b[0];return b.ajax ? h.isPlainObject(b.ajax) ? b.ajax.url : b.ajax : b.sAjaxSource;
        }return this.iterator("table", function (b) {
            h.isPlainObject(b.ajax) ? b.ajax.url = a : b.ajax = a;
        });
    });o("ajax.url().load()", function (a, b) {
        return this.iterator("table", function (c) {
            Sb(c, !1 === b, a);
        });
    });var ab = function ab(a, b, c, d, e) {
        var f = [],
            g,
            j,
            i,
            m,
            l,
            n;i = typeof b === "undefined" ? "undefined" : _typeof(b);if (!b || "string" === i || "function" === i || b.length === k) b = [b];i = 0;for (m = b.length; i < m; i++) {
            j = b[i] && b[i].split && !b[i].match(/[\[\(:]/) ? b[i].split(",") : [b[i]];l = 0;for (n = j.length; l < n; l++) {
                (g = c("string" === typeof j[l] ? h.trim(j[l]) : j[l])) && g.length && (f = f.concat(g));
            }
        }a = x.selector[a];if (a.length) {
            i = 0;for (m = a.length; i < m; i++) {
                f = a[i](d, e, f);
            }
        }return qa(f);
    },
        bb = function bb(a) {
        a || (a = {});a.filter && a.search === k && (a.search = a.filter);return h.extend({ search: "none", order: "current", page: "all" }, a);
    },
        cb = function cb(a) {
        for (var b = 0, c = a.length; b < c; b++) {
            if (0 < a[b].length) return a[0] = a[b], a[0].length = 1, a.length = 1, a.context = [a.context[b]], a;
        }a.length = 0;return a;
    },
        Ba = function Ba(a, b) {
        var c,
            d,
            e,
            f = [],
            g = a.aiDisplay;e = a.aiDisplayMaster;var j = b.search;c = b.order;d = b.page;if ("ssp" == y(a)) return "removed" === j ? [] : Y(0, e.length);if ("current" == d) {
            c = a._iDisplayStart;for (d = a.fnDisplayEnd(); c < d; c++) {
                f.push(g[c]);
            }
        } else if ("current" == c || "applied" == c) {
            if ("none" == j) f = e.slice();else if ("applied" == j) f = g.slice();else {
                if ("removed" == j) {
                    var i = {};c = 0;for (d = g.length; c < d; c++) {
                        i[g[c]] = null;
                    }f = h.map(e, function (a) {
                        return !i.hasOwnProperty(a) ? a : null;
                    });
                }
            }
        } else if ("index" == c || "original" == c) {
            c = 0;for (d = a.aoData.length; c < d; c++) {
                "none" == j ? f.push(c) : (e = h.inArray(c, g), (-1 === e && "removed" == j || 0 <= e && "applied" == j) && f.push(c));
            }
        }return f;
    };o("rows()", function (a, b) {
        a === k ? a = "" : h.isPlainObject(a) && (b = a, a = "");var b = bb(b),
            c = this.iterator("table", function (c) {
            var e = b,
                f;return ab("row", a, function (a) {
                var b = Nb(a),
                    i = c.aoData;if (b !== null && !e) return [b];f || (f = Ba(c, e));if (b !== null && h.inArray(b, f) !== -1) return [b];if (a === null || a === k || a === "") return f;if (typeof a === "function") return h.map(f, function (b) {
                    var c = i[b];return a(b, c._aData, c.nTr) ? b : null;
                });if (a.nodeName) {
                    var b = a._DT_RowIndex,
                        m = a._DT_CellIndex;if (b !== k) return i[b] && i[b].nTr === a ? [b] : [];if (m) return i[m.row] && i[m.row].nTr === a ? [m.row] : [];b = h(a).closest("*[data-dt-row]");return b.length ? [b.data("dt-row")] : [];
                }if (typeof a === "string" && a.charAt(0) === "#") {
                    b = c.aIds[a.replace(/^#/, "")];if (b !== k) return [b.idx];
                }b = Qb(ja(c.aoData, f, "nTr"));return h(b).filter(a).map(function () {
                    return this._DT_RowIndex;
                }).toArray();
            }, c, e);
        }, 1);c.selector.rows = a;c.selector.opts = b;return c;
    });o("rows().nodes()", function () {
        return this.iterator("row", function (a, b) {
            return a.aoData[b].nTr || k;
        }, 1);
    });o("rows().data()", function () {
        return this.iterator(!0, "rows", function (a, b) {
            return ja(a.aoData, b, "_aData");
        }, 1);
    });u("rows().cache()", "row().cache()", function (a) {
        return this.iterator("row", function (b, c) {
            var d = b.aoData[c];return "search" === a ? d._aFilterData : d._aSortData;
        }, 1);
    });u("rows().invalidate()", "row().invalidate()", function (a) {
        return this.iterator("row", function (b, c) {
            da(b, c, a);
        });
    });u("rows().indexes()", "row().index()", function () {
        return this.iterator("row", function (a, b) {
            return b;
        }, 1);
    });u("rows().ids()", "row().id()", function (a) {
        for (var b = [], c = this.context, d = 0, e = c.length; d < e; d++) {
            for (var f = 0, g = this[d].length; f < g; f++) {
                var h = c[d].rowIdFn(c[d].aoData[this[d][f]]._aData);b.push((!0 === a ? "#" : "") + h);
            }
        }return new _s(c, b);
    });u("rows().remove()", "row().remove()", function () {
        var a = this;this.iterator("row", function (b, c, d) {
            var e = b.aoData,
                f = e[c],
                g,
                h,
                i,
                m,
                l;e.splice(c, 1);g = 0;for (h = e.length; g < h; g++) {
                if (i = e[g], l = i.anCells, null !== i.nTr && (i.nTr._DT_RowIndex = g), null !== l) {
                    i = 0;for (m = l.length; i < m; i++) {
                        l[i]._DT_CellIndex.row = g;
                    }
                }
            }pa(b.aiDisplayMaster, c);pa(b.aiDisplay, c);pa(a[d], c, !1);0 < b._iRecordsDisplay && b._iRecordsDisplay--;Sa(b);c = b.rowIdFn(f._aData);c !== k && delete b.aIds[c];
        });this.iterator("table", function (a) {
            for (var c = 0, d = a.aoData.length; c < d; c++) {
                a.aoData[c].idx = c;
            }
        });return this;
    });o("rows.add()", function (a) {
        var b = this.iterator("table", function (b) {
            var c,
                f,
                g,
                h = [];f = 0;for (g = a.length; f < g; f++) {
                c = a[f], c.nodeName && "TR" === c.nodeName.toUpperCase() ? h.push(na(b, c)[0]) : h.push(O(b, c));
            }return h;
        }, 1),
            c = this.rows(-1);c.pop();h.merge(c, b);return c;
    });o("row()", function (a, b) {
        return cb(this.rows(a, b));
    });o("row().data()", function (a) {
        var b = this.context;if (a === k) return b.length && this.length ? b[0].aoData[this[0]]._aData : k;var c = b[0].aoData[this[0]];c._aData = a;h.isArray(a) && c.nTr.id && N(b[0].rowId)(a, c.nTr.id);da(b[0], this[0], "data");return this;
    });o("row().node()", function () {
        var a = this.context;return a.length && this.length ? a[0].aoData[this[0]].nTr || null : null;
    });o("row.add()", function (a) {
        a instanceof h && a.length && (a = a[0]);var b = this.iterator("table", function (b) {
            return a.nodeName && "TR" === a.nodeName.toUpperCase() ? na(b, a)[0] : O(b, a);
        });return this.row(b[0]);
    });var db = function db(a, b) {
        var c = a.context;if (c.length && (c = c[0].aoData[b !== k ? b : a[0]]) && c._details) c._details.remove(), c._detailsShow = k, c._details = k;
    },
        Tb = function Tb(a, b) {
        var c = a.context;if (c.length && a.length) {
            var d = c[0].aoData[a[0]];if (d._details) {
                (d._detailsShow = b) ? d._details.insertAfter(d.nTr) : d._details.detach();var e = c[0],
                    f = new _s(e),
                    g = e.aoData;f.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");
                0 < D(g, "_details").length && (f.on("draw.dt.DT_details", function (a, b) {
                    e === b && f.rows({ page: "current" }).eq(0).each(function (a) {
                        a = g[a];a._detailsShow && a._details.insertAfter(a.nTr);
                    });
                }), f.on("column-visibility.dt.DT_details", function (a, b) {
                    if (e === b) for (var c, d = V(b), f = 0, h = g.length; f < h; f++) {
                        c = g[f], c._details && c._details.children("td[colspan]").attr("colspan", d);
                    }
                }), f.on("destroy.dt.DT_details", function (a, b) {
                    if (e === b) for (var c = 0, d = g.length; c < d; c++) {
                        g[c]._details && db(f, c);
                    }
                }));
            }
        }
    };o("row().child()", function (a, b) {
        var c = this.context;if (a === k) return c.length && this.length ? c[0].aoData[this[0]]._details : k;if (!0 === a) this.child.show();else if (!1 === a) db(this);else if (c.length && this.length) {
            var d = c[0],
                c = c[0].aoData[this[0]],
                e = [],
                f = function f(a, b) {
                if (h.isArray(a) || a instanceof h) for (var c = 0, k = a.length; c < k; c++) {
                    f(a[c], b);
                } else a.nodeName && "tr" === a.nodeName.toLowerCase() ? e.push(a) : (c = h("<tr><td/></tr>").addClass(b), h("td", c).addClass(b).html(a)[0].colSpan = V(d), e.push(c[0]));
            };f(a, b);c._details && c._details.detach();c._details = h(e);
            c._detailsShow && c._details.insertAfter(c.nTr);
        }return this;
    });o(["row().child.show()", "row().child().show()"], function () {
        Tb(this, !0);return this;
    });o(["row().child.hide()", "row().child().hide()"], function () {
        Tb(this, !1);return this;
    });o(["row().child.remove()", "row().child().remove()"], function () {
        db(this);return this;
    });o("row().child.isShown()", function () {
        var a = this.context;return a.length && this.length ? a[0].aoData[this[0]]._detailsShow || !1 : !1;
    });var bc = /^([^:]+):(name|visIdx|visible)$/,
        Ub = function Ub(a, b, c, d, e) {
        for (var c = [], d = 0, f = e.length; d < f; d++) {
            c.push(B(a, e[d], b));
        }return c;
    };o("columns()", function (a, b) {
        a === k ? a = "" : h.isPlainObject(a) && (b = a, a = "");var b = bb(b),
            c = this.iterator("table", function (c) {
            var e = a,
                f = b,
                g = c.aoColumns,
                j = D(g, "sName"),
                i = D(g, "nTh");return ab("column", e, function (a) {
                var b = Nb(a);if (a === "") return Y(g.length);if (b !== null) return [b >= 0 ? b : g.length + b];if (typeof a === "function") {
                    var e = Ba(c, f);return h.map(g, function (b, f) {
                        return a(f, Ub(c, f, 0, 0, e), i[f]) ? f : null;
                    });
                }var k = typeof a === "string" ? a.match(bc) : "";if (k) switch (k[2]) {case "visIdx":case "visible":
                        b = parseInt(k[1], 10);if (b < 0) {
                            var n = h.map(g, function (a, b) {
                                return a.bVisible ? b : null;
                            });return [n[n.length + b]];
                        }return [aa(c, b)];case "name":
                        return h.map(j, function (a, b) {
                            return a === k[1] ? b : null;
                        });default:
                        return [];}if (a.nodeName && a._DT_CellIndex) return [a._DT_CellIndex.column];b = h(i).filter(a).map(function () {
                    return h.inArray(this, i);
                }).toArray();if (b.length || !a.nodeName) return b;b = h(a).closest("*[data-dt-column]");return b.length ? [b.data("dt-column")] : [];
            }, c, f);
        }, 1);c.selector.cols = a;c.selector.opts = b;return c;
    });u("columns().header()", "column().header()", function () {
        return this.iterator("column", function (a, b) {
            return a.aoColumns[b].nTh;
        }, 1);
    });u("columns().footer()", "column().footer()", function () {
        return this.iterator("column", function (a, b) {
            return a.aoColumns[b].nTf;
        }, 1);
    });u("columns().data()", "column().data()", function () {
        return this.iterator("column-rows", Ub, 1);
    });u("columns().dataSrc()", "column().dataSrc()", function () {
        return this.iterator("column", function (a, b) {
            return a.aoColumns[b].mData;
        }, 1);
    });u("columns().cache()", "column().cache()", function (a) {
        return this.iterator("column-rows", function (b, c, d, e, f) {
            return ja(b.aoData, f, "search" === a ? "_aFilterData" : "_aSortData", c);
        }, 1);
    });u("columns().nodes()", "column().nodes()", function () {
        return this.iterator("column-rows", function (a, b, c, d, e) {
            return ja(a.aoData, e, "anCells", b);
        }, 1);
    });u("columns().visible()", "column().visible()", function (a, b) {
        var c = this.iterator("column", function (b, c) {
            if (a === k) return b.aoColumns[c].bVisible;var f = b.aoColumns,
                g = f[c],
                j = b.aoData,
                i,
                m,
                l;if (a !== k && g.bVisible !== a) {
                if (a) {
                    var n = h.inArray(!0, D(f, "bVisible"), c + 1);i = 0;for (m = j.length; i < m; i++) {
                        l = j[i].nTr, f = j[i].anCells, l && l.insertBefore(f[c], f[n] || null);
                    }
                } else h(D(b.aoData, "anCells", c)).detach();g.bVisible = a;fa(b, b.aoHeader);fa(b, b.aoFooter);b.aiDisplay.length || h(b.nTBody).find("td[colspan]").attr("colspan", V(b));xa(b);
            }
        });a !== k && (this.iterator("column", function (c, e) {
            r(c, null, "column-visibility", [c, e, a, b]);
        }), (b === k || b) && this.columns.adjust());return c;
    });u("columns().indexes()", "column().index()", function (a) {
        return this.iterator("column", function (b, c) {
            return "visible" === a ? ba(b, c) : c;
        }, 1);
    });o("columns.adjust()", function () {
        return this.iterator("table", function (a) {
            $(a);
        }, 1);
    });o("column.index()", function (a, b) {
        if (0 !== this.context.length) {
            var c = this.context[0];if ("fromVisible" === a || "toData" === a) return aa(c, b);if ("fromData" === a || "toVisible" === a) return ba(c, b);
        }
    });o("column()", function (a, b) {
        return cb(this.columns(a, b));
    });o("cells()", function (a, b, c) {
        h.isPlainObject(a) && (a.row === k ? (c = a, a = null) : (c = b, b = null));
        h.isPlainObject(b) && (c = b, b = null);if (null === b || b === k) return this.iterator("table", function (b) {
            var d = a,
                e = bb(c),
                f = b.aoData,
                g = Ba(b, e),
                j = Qb(ja(f, g, "anCells")),
                i = h([].concat.apply([], j)),
                l,
                m = b.aoColumns.length,
                n,
                o,
                u,
                s,
                r,
                v;return ab("cell", d, function (a) {
                var c = typeof a === "function";if (a === null || a === k || c) {
                    n = [];o = 0;for (u = g.length; o < u; o++) {
                        l = g[o];for (s = 0; s < m; s++) {
                            r = { row: l, column: s };if (c) {
                                v = f[l];a(r, B(b, l, s), v.anCells ? v.anCells[s] : null) && n.push(r);
                            } else n.push(r);
                        }
                    }return n;
                }if (h.isPlainObject(a)) return a.column !== k && a.row !== k && h.inArray(a.row, g) !== -1 ? [a] : [];c = i.filter(a).map(function (a, b) {
                    return { row: b._DT_CellIndex.row, column: b._DT_CellIndex.column };
                }).toArray();if (c.length || !a.nodeName) return c;v = h(a).closest("*[data-dt-row]");return v.length ? [{ row: v.data("dt-row"), column: v.data("dt-column") }] : [];
            }, b, e);
        });var d = this.columns(b),
            e = this.rows(a),
            f,
            g,
            j,
            i,
            m;this.iterator("table", function (a, b) {
            f = [];g = 0;for (j = e[b].length; g < j; g++) {
                i = 0;for (m = d[b].length; i < m; i++) {
                    f.push({ row: e[b][g], column: d[b][i] });
                }
            }
        }, 1);var l = this.cells(f, c);h.extend(l.selector, { cols: b, rows: a, opts: c });return l;
    });u("cells().nodes()", "cell().node()", function () {
        return this.iterator("cell", function (a, b, c) {
            return (a = a.aoData[b]) && a.anCells ? a.anCells[c] : k;
        }, 1);
    });o("cells().data()", function () {
        return this.iterator("cell", function (a, b, c) {
            return B(a, b, c);
        }, 1);
    });u("cells().cache()", "cell().cache()", function (a) {
        a = "search" === a ? "_aFilterData" : "_aSortData";return this.iterator("cell", function (b, c, d) {
            return b.aoData[c][a][d];
        }, 1);
    });u("cells().render()", "cell().render()", function (a) {
        return this.iterator("cell", function (b, c, d) {
            return B(b, c, d, a);
        }, 1);
    });u("cells().indexes()", "cell().index()", function () {
        return this.iterator("cell", function (a, b, c) {
            return { row: b, column: c, columnVisible: ba(a, c) };
        }, 1);
    });u("cells().invalidate()", "cell().invalidate()", function (a) {
        return this.iterator("cell", function (b, c, d) {
            da(b, c, a, d);
        });
    });o("cell()", function (a, b, c) {
        return cb(this.cells(a, b, c));
    });o("cell().data()", function (a) {
        var b = this.context,
            c = this[0];if (a === k) return b.length && c.length ? B(b[0], c[0].row, c[0].column) : k;jb(b[0], c[0].row, c[0].column, a);da(b[0], c[0].row, "data", c[0].column);return this;
    });o("order()", function (a, b) {
        var c = this.context;if (a === k) return 0 !== c.length ? c[0].aaSorting : k;"number" === typeof a ? a = [[a, b]] : a.length && !h.isArray(a[0]) && (a = Array.prototype.slice.call(arguments));return this.iterator("table", function (b) {
            b.aaSorting = a.slice();
        });
    });o("order.listener()", function (a, b, c) {
        return this.iterator("table", function (d) {
            Ma(d, a, b, c);
        });
    });o("order.fixed()", function (a) {
        if (!a) {
            var b = this.context,
                b = b.length ? b[0].aaSortingFixed : k;return h.isArray(b) ? { pre: b } : b;
        }return this.iterator("table", function (b) {
            b.aaSortingFixed = h.extend(!0, {}, a);
        });
    });o(["columns().order()", "column().order()"], function (a) {
        var b = this;return this.iterator("table", function (c, d) {
            var e = [];h.each(b[d], function (b, c) {
                e.push([c, a]);
            });c.aaSorting = e;
        });
    });o("search()", function (a, b, c, d) {
        var e = this.context;return a === k ? 0 !== e.length ? e[0].oPreviousSearch.sSearch : k : this.iterator("table", function (e) {
            e.oFeatures.bFilter && ga(e, h.extend({}, e.oPreviousSearch, { sSearch: a + "", bRegex: null === b ? !1 : b, bSmart: null === c ? !0 : c, bCaseInsensitive: null === d ? !0 : d }), 1);
        });
    });u("columns().search()", "column().search()", function (a, b, c, d) {
        return this.iterator("column", function (e, f) {
            var g = e.aoPreSearchCols;if (a === k) return g[f].sSearch;e.oFeatures.bFilter && (h.extend(g[f], { sSearch: a + "", bRegex: null === b ? !1 : b, bSmart: null === c ? !0 : c, bCaseInsensitive: null === d ? !0 : d }), ga(e, e.oPreviousSearch, 1));
        });
    });o("state()", function () {
        return this.context.length ? this.context[0].oSavedState : null;
    });o("state.clear()", function () {
        return this.iterator("table", function (a) {
            a.fnStateSaveCallback.call(a.oInstance, a, {});
        });
    });o("state.loaded()", function () {
        return this.context.length ? this.context[0].oLoadedState : null;
    });o("state.save()", function () {
        return this.iterator("table", function (a) {
            xa(a);
        });
    });n.versionCheck = n.fnVersionCheck = function (a) {
        for (var b = n.version.split("."), a = a.split("."), c, d, e = 0, f = a.length; e < f; e++) {
            if (c = parseInt(b[e], 10) || 0, d = parseInt(a[e], 10) || 0, c !== d) return c > d;
        }return !0;
    };n.isDataTable = n.fnIsDataTable = function (a) {
        var b = h(a).get(0),
            c = !1;if (a instanceof n.Api) return !0;h.each(n.settings, function (a, e) {
            var f = e.nScrollHead ? h("table", e.nScrollHead)[0] : null,
                g = e.nScrollFoot ? h("table", e.nScrollFoot)[0] : null;if (e.nTable === b || f === b || g === b) c = !0;
        });return c;
    };n.tables = n.fnTables = function (a) {
        var b = !1;h.isPlainObject(a) && (b = a.api, a = a.visible);var c = h.map(n.settings, function (b) {
            if (!a || a && h(b.nTable).is(":visible")) return b.nTable;
        });return b ? new _s(c) : c;
    };n.camelToHungarian = J;o("$()", function (a, b) {
        var c = this.rows(b).nodes(),
            c = h(c);return h([].concat(c.filter(a).toArray(), c.find(a).toArray()));
    });h.each(["on", "one", "off"], function (a, b) {
        o(b + "()", function () {
            var a = Array.prototype.slice.call(arguments);a[0] = h.map(a[0].split(/\s/), function (a) {
                return !a.match(/\.dt\b/) ? a + ".dt" : a;
            }).join(" ");var d = h(this.tables().nodes());d[b].apply(d, a);return this;
        });
    });o("clear()", function () {
        return this.iterator("table", function (a) {
            oa(a);
        });
    });o("settings()", function () {
        return new _s(this.context, this.context);
    });o("init()", function () {
        var a = this.context;return a.length ? a[0].oInit : null;
    });o("data()", function () {
        return this.iterator("table", function (a) {
            return D(a.aoData, "_aData");
        }).flatten();
    });o("destroy()", function (a) {
        a = a || !1;return this.iterator("table", function (b) {
            var c = b.nTableWrapper.parentNode,
                d = b.oClasses,
                e = b.nTable,
                f = b.nTBody,
                g = b.nTHead,
                j = b.nTFoot,
                i = h(e),
                f = h(f),
                k = h(b.nTableWrapper),
                l = h.map(b.aoData, function (a) {
                return a.nTr;
            }),
                o;b.bDestroying = !0;r(b, "aoDestroyCallback", "destroy", [b]);a || new _s(b).columns().visible(!0);k.off(".DT").find(":not(tbody *)").off(".DT");
            h(E).off(".DT-" + b.sInstance);e != g.parentNode && (i.children("thead").detach(), i.append(g));j && e != j.parentNode && (i.children("tfoot").detach(), i.append(j));b.aaSorting = [];b.aaSortingFixed = [];wa(b);h(l).removeClass(b.asStripeClasses.join(" "));h("th, td", g).removeClass(d.sSortable + " " + d.sSortableAsc + " " + d.sSortableDesc + " " + d.sSortableNone);f.children().detach();f.append(l);g = a ? "remove" : "detach";i[g]();k[g]();!a && c && (c.insertBefore(e, b.nTableReinsertBefore), i.css("width", b.sDestroyWidth).removeClass(d.sTable), (o = b.asDestroyStripes.length) && f.children().each(function (a) {
                h(this).addClass(b.asDestroyStripes[a % o]);
            }));c = h.inArray(b, n.settings);-1 !== c && n.settings.splice(c, 1);
        });
    });h.each(["column", "row", "cell"], function (a, b) {
        o(b + "s().every()", function (a) {
            var d = this.selector.opts,
                e = this;return this.iterator(b, function (f, g, h, i, m) {
                a.call(e[b](g, "cell" === b ? h : d, "cell" === b ? d : k), g, h, i, m);
            });
        });
    });o("i18n()", function (a, b, c) {
        var d = this.context[0],
            a = S(a)(d.oLanguage);a === k && (a = b);c !== k && h.isPlainObject(a) && (a = a[c] !== k ? a[c] : a._);return a.replace("%d", c);
    });n.version = "1.10.18";n.settings = [];n.models = {};n.models.oSearch = { bCaseInsensitive: !0, sSearch: "", bRegex: !1, bSmart: !0 };n.models.oRow = { nTr: null, anCells: null, _aData: [], _aSortData: null, _aFilterData: null, _sFilterRow: null, _sRowStripe: "", src: null, idx: -1 };n.models.oColumn = { idx: null, aDataSort: null, asSorting: null, bSearchable: null, bSortable: null, bVisible: null, _sManualType: null, _bAttrSrc: !1, fnCreatedCell: null, fnGetData: null, fnSetData: null, mData: null, mRender: null, nTh: null, nTf: null,
        sClass: null, sContentPadding: null, sDefaultContent: null, sName: null, sSortDataType: "std", sSortingClass: null, sSortingClassJUI: null, sTitle: null, sType: null, sWidth: null, sWidthOrig: null };n.defaults = { aaData: null, aaSorting: [[0, "asc"]], aaSortingFixed: [], ajax: null, aLengthMenu: [10, 25, 50, 100], aoColumns: null, aoColumnDefs: null, aoSearchCols: [], asStripeClasses: null, bAutoWidth: !0, bDeferRender: !1, bDestroy: !1, bFilter: !0, bInfo: !0, bLengthChange: !0, bPaginate: !0, bProcessing: !1, bRetrieve: !1, bScrollCollapse: !1, bServerSide: !1,
        bSort: !0, bSortMulti: !0, bSortCellsTop: !1, bSortClasses: !0, bStateSave: !1, fnCreatedRow: null, fnDrawCallback: null, fnFooterCallback: null, fnFormatNumber: function fnFormatNumber(a) {
            return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands);
        }, fnHeaderCallback: null, fnInfoCallback: null, fnInitComplete: null, fnPreDrawCallback: null, fnRowCallback: null, fnServerData: null, fnServerParams: null, fnStateLoadCallback: function fnStateLoadCallback(a) {
            try {
                return JSON.parse((-1 === a.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" + a.sInstance + "_" + location.pathname));
            } catch (b) {}
        }, fnStateLoadParams: null, fnStateLoaded: null, fnStateSaveCallback: function fnStateSaveCallback(a, b) {
            try {
                (-1 === a.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + a.sInstance + "_" + location.pathname, JSON.stringify(b));
            } catch (c) {}
        }, fnStateSaveParams: null, iStateDuration: 7200, iDeferLoading: null, iDisplayLength: 10, iDisplayStart: 0, iTabIndex: 0, oClasses: {}, oLanguage: { oAria: { sSortAscending: ": activate to sort column ascending", sSortDescending: ": activate to sort column descending" },
            oPaginate: { sFirst: "First", sLast: "Last", sNext: "Next", sPrevious: "Previous" }, sEmptyTable: "No data available in table", sInfo: "Showing _START_ to _END_ of _TOTAL_ entries", sInfoEmpty: "Showing 0 to 0 of 0 entries", sInfoFiltered: "(filtered from _MAX_ total entries)", sInfoPostFix: "", sDecimal: "", sThousands: ",", sLengthMenu: "Show _MENU_ entries", sLoadingRecords: "Loading...", sProcessing: "Processing...", sSearch: "Search:", sSearchPlaceholder: "", sUrl: "", sZeroRecords: "No matching records found" }, oSearch: h.extend({}, n.models.oSearch), sAjaxDataProp: "data", sAjaxSource: null, sDom: "lfrtip", searchDelay: null, sPaginationType: "simple_numbers", sScrollX: "", sScrollXInner: "", sScrollY: "", sServerMethod: "GET", renderer: null, rowId: "DT_RowId" };Z(n.defaults);n.defaults.column = { aDataSort: null, iDataSort: -1, asSorting: ["asc", "desc"], bSearchable: !0, bSortable: !0, bVisible: !0, fnCreatedCell: null, mData: null, mRender: null, sCellType: "td", sClass: "", sContentPadding: "", sDefaultContent: null, sName: "", sSortDataType: "std", sTitle: null, sType: null, sWidth: null };
    Z(n.defaults.column);n.models.oSettings = { oFeatures: { bAutoWidth: null, bDeferRender: null, bFilter: null, bInfo: null, bLengthChange: null, bPaginate: null, bProcessing: null, bServerSide: null, bSort: null, bSortMulti: null, bSortClasses: null, bStateSave: null }, oScroll: { bCollapse: null, iBarWidth: 0, sX: null, sXInner: null, sY: null }, oLanguage: { fnInfoCallback: null }, oBrowser: { bScrollOversize: !1, bScrollbarLeft: !1, bBounding: !1, barWidth: 0 }, ajax: null, aanFeatures: [], aoData: [], aiDisplay: [], aiDisplayMaster: [], aIds: {}, aoColumns: [], aoHeader: [],
        aoFooter: [], oPreviousSearch: {}, aoPreSearchCols: [], aaSorting: null, aaSortingFixed: [], asStripeClasses: null, asDestroyStripes: [], sDestroyWidth: 0, aoRowCallback: [], aoHeaderCallback: [], aoFooterCallback: [], aoDrawCallback: [], aoRowCreatedCallback: [], aoPreDrawCallback: [], aoInitComplete: [], aoStateSaveParams: [], aoStateLoadParams: [], aoStateLoaded: [], sTableId: "", nTable: null, nTHead: null, nTFoot: null, nTBody: null, nTableWrapper: null, bDeferLoading: !1, bInitialised: !1, aoOpenRows: [], sDom: null, searchDelay: null, sPaginationType: "two_button",
        iStateDuration: 0, aoStateSave: [], aoStateLoad: [], oSavedState: null, oLoadedState: null, sAjaxSource: null, sAjaxDataProp: null, bAjaxDataGet: !0, jqXHR: null, json: k, oAjaxData: k, fnServerData: null, aoServerParams: [], sServerMethod: null, fnFormatNumber: null, aLengthMenu: null, iDraw: 0, bDrawing: !1, iDrawError: -1, _iDisplayLength: 10, _iDisplayStart: 0, _iRecordsTotal: 0, _iRecordsDisplay: 0, oClasses: {}, bFiltered: !1, bSorted: !1, bSortCellsTop: null, oInit: null, aoDestroyCallback: [], fnRecordsTotal: function fnRecordsTotal() {
            return "ssp" == y(this) ? 1 * this._iRecordsTotal : this.aiDisplayMaster.length;
        }, fnRecordsDisplay: function fnRecordsDisplay() {
            return "ssp" == y(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length;
        }, fnDisplayEnd: function fnDisplayEnd() {
            var a = this._iDisplayLength,
                b = this._iDisplayStart,
                c = b + a,
                d = this.aiDisplay.length,
                e = this.oFeatures,
                f = e.bPaginate;return e.bServerSide ? !1 === f || -1 === a ? b + d : Math.min(b + a, this._iRecordsDisplay) : !f || c > d || -1 === a ? d : c;
        }, oInstance: null, sInstance: null, iTabIndex: 0, nScrollHead: null, nScrollFoot: null, aLastSort: [], oPlugins: {}, rowIdFn: null, rowId: null };n.ext = x = { buttons: {},
        classes: {}, build: "bs4/dt-1.10.18", errMode: "alert", feature: [], search: [], selector: { cell: [], column: [], row: [] }, internal: {}, legacy: { ajax: null }, pager: {}, renderer: { pageButton: {}, header: {} }, order: {}, type: { detect: [], search: {}, order: {} }, _unique: 0, fnVersionCheck: n.fnVersionCheck, iApiIndex: 0, oJUIClasses: {}, sVersion: n.version };h.extend(x, { afnFiltering: x.search, aTypes: x.type.detect, ofnSearch: x.type.search, oSort: x.type.order, afnSortData: x.order, aoFeatures: x.feature, oApi: x.internal, oStdClasses: x.classes, oPagination: x.pager });
    h.extend(n.ext.classes, { sTable: "dataTable", sNoFooter: "no-footer", sPageButton: "paginate_button", sPageButtonActive: "current", sPageButtonDisabled: "disabled", sStripeOdd: "odd", sStripeEven: "even", sRowEmpty: "dataTables_empty", sWrapper: "dataTables_wrapper", sFilter: "dataTables_filter", sInfo: "dataTables_info", sPaging: "dataTables_paginate paging_", sLength: "dataTables_length", sProcessing: "dataTables_processing", sSortAsc: "sorting_asc", sSortDesc: "sorting_desc", sSortable: "sorting", sSortableAsc: "sorting_asc_disabled",
        sSortableDesc: "sorting_desc_disabled", sSortableNone: "sorting_disabled", sSortColumn: "sorting_", sFilterInput: "", sLengthSelect: "", sScrollWrapper: "dataTables_scroll", sScrollHead: "dataTables_scrollHead", sScrollHeadInner: "dataTables_scrollHeadInner", sScrollBody: "dataTables_scrollBody", sScrollFoot: "dataTables_scrollFoot", sScrollFootInner: "dataTables_scrollFootInner", sHeaderTH: "", sFooterTH: "", sSortJUIAsc: "", sSortJUIDesc: "", sSortJUI: "", sSortJUIAscAllowed: "", sSortJUIDescAllowed: "", sSortJUIWrapper: "", sSortIcon: "",
        sJUIHeader: "", sJUIFooter: "" });var Kb = n.ext.pager;h.extend(Kb, { simple: function simple() {
            return ["previous", "next"];
        }, full: function full() {
            return ["first", "previous", "next", "last"];
        }, numbers: function numbers(a, b) {
            return [ia(a, b)];
        }, simple_numbers: function simple_numbers(a, b) {
            return ["previous", ia(a, b), "next"];
        }, full_numbers: function full_numbers(a, b) {
            return ["first", "previous", ia(a, b), "next", "last"];
        }, first_last_numbers: function first_last_numbers(a, b) {
            return ["first", ia(a, b), "last"];
        }, _numbers: ia, numbers_length: 7 });h.extend(!0, n.ext.renderer, { pageButton: { _: function _(a, b, c, d, e, f) {
                var g = a.oClasses,
                    j = a.oLanguage.oPaginate,
                    i = a.oLanguage.oAria.paginate || {},
                    m,
                    l,
                    n = 0,
                    o = function o(b, d) {
                    var k,
                        s,
                        u,
                        r,
                        v = function v(b) {
                        Ta(a, b.data.action, true);
                    };k = 0;for (s = d.length; k < s; k++) {
                        r = d[k];if (h.isArray(r)) {
                            u = h("<" + (r.DT_el || "div") + "/>").appendTo(b);o(u, r);
                        } else {
                            m = null;l = "";switch (r) {case "ellipsis":
                                    b.append('<span class="ellipsis">&#x2026;</span>');break;case "first":
                                    m = j.sFirst;l = r + (e > 0 ? "" : " " + g.sPageButtonDisabled);break;case "previous":
                                    m = j.sPrevious;l = r + (e > 0 ? "" : " " + g.sPageButtonDisabled);break;case "next":
                                    m = j.sNext;l = r + (e < f - 1 ? "" : " " + g.sPageButtonDisabled);break;case "last":
                                    m = j.sLast;l = r + (e < f - 1 ? "" : " " + g.sPageButtonDisabled);break;default:
                                    m = r + 1;l = e === r ? g.sPageButtonActive : "";}if (m !== null) {
                                u = h("<a>", { "class": g.sPageButton + " " + l, "aria-controls": a.sTableId, "aria-label": i[r], "data-dt-idx": n, tabindex: a.iTabIndex, id: c === 0 && typeof r === "string" ? a.sTableId + "_" + r : null }).html(m).appendTo(b);Wa(u, { action: r }, v);n++;
                            }
                        }
                    }
                },
                    s;try {
                    s = h(b).find(H.activeElement).data("dt-idx");
                } catch (u) {}o(h(b).empty(), d);s !== k && h(b).find("[data-dt-idx=" + s + "]").focus();
            } } });h.extend(n.ext.type.detect, [function (a, b) {
        var c = b.oLanguage.sDecimal;return $a(a, c) ? "num" + c : null;
    }, function (a) {
        if (a && !(a instanceof Date) && !Zb.test(a)) return null;var b = Date.parse(a);return null !== b && !isNaN(b) || M(a) ? "date" : null;
    }, function (a, b) {
        var c = b.oLanguage.sDecimal;return $a(a, c, !0) ? "num-fmt" + c : null;
    }, function (a, b) {
        var c = b.oLanguage.sDecimal;return Pb(a, c) ? "html-num" + c : null;
    }, function (a, b) {
        var c = b.oLanguage.sDecimal;return Pb(a, c, !0) ? "html-num-fmt" + c : null;
    }, function (a) {
        return M(a) || "string" === typeof a && -1 !== a.indexOf("<") ? "html" : null;
    }]);h.extend(n.ext.type.search, { html: function html(a) {
            return M(a) ? a : "string" === typeof a ? a.replace(Mb, " ").replace(Aa, "") : "";
        }, string: function string(a) {
            return M(a) ? a : "string" === typeof a ? a.replace(Mb, " ") : a;
        } });var za = function za(a, b, c, d) {
        if (0 !== a && (!a || "-" === a)) return -Infinity;b && (a = Ob(a, b));a.replace && (c && (a = a.replace(c, "")), d && (a = a.replace(d, "")));return 1 * a;
    };h.extend(x.type.order, { "date-pre": function datePre(a) {
            a = Date.parse(a);return isNaN(a) ? -Infinity : a;
        }, "html-pre": function htmlPre(a) {
            return M(a) ? "" : a.replace ? a.replace(/<.*?>/g, "").toLowerCase() : a + "";
        }, "string-pre": function stringPre(a) {
            return M(a) ? "" : "string" === typeof a ? a.toLowerCase() : !a.toString ? "" : a.toString();
        }, "string-asc": function stringAsc(a, b) {
            return a < b ? -1 : a > b ? 1 : 0;
        }, "string-desc": function stringDesc(a, b) {
            return a < b ? 1 : a > b ? -1 : 0;
        } });Da("");h.extend(!0, n.ext.renderer, { header: { _: function _(a, b, c, d) {
                h(a.nTable).on("order.dt.DT", function (e, f, g, h) {
                    if (a === f) {
                        e = c.idx;b.removeClass(c.sSortingClass + " " + d.sSortAsc + " " + d.sSortDesc).addClass(h[e] == "asc" ? d.sSortAsc : h[e] == "desc" ? d.sSortDesc : c.sSortingClass);
                    }
                });
            }, jqueryui: function jqueryui(a, b, c, d) {
                h("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(h("<span/>").addClass(d.sSortIcon + " " + c.sSortingClassJUI)).appendTo(b);h(a.nTable).on("order.dt.DT", function (e, f, g, h) {
                    if (a === f) {
                        e = c.idx;b.removeClass(d.sSortAsc + " " + d.sSortDesc).addClass(h[e] == "asc" ? d.sSortAsc : h[e] == "desc" ? d.sSortDesc : c.sSortingClass);b.find("span." + d.sSortIcon).removeClass(d.sSortJUIAsc + " " + d.sSortJUIDesc + " " + d.sSortJUI + " " + d.sSortJUIAscAllowed + " " + d.sSortJUIDescAllowed).addClass(h[e] == "asc" ? d.sSortJUIAsc : h[e] == "desc" ? d.sSortJUIDesc : c.sSortingClassJUI);
                    }
                });
            } } });var Vb = function Vb(a) {
        return "string" === typeof a ? a.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : a;
    };n.render = { number: function number(a, b, c, d, e) {
            return { display: function display(f) {
                    if ("number" !== typeof f && "string" !== typeof f) return f;var g = 0 > f ? "-" : "",
                        h = parseFloat(f);if (isNaN(h)) return Vb(f);h = h.toFixed(c);f = Math.abs(h);h = parseInt(f, 10);f = c ? b + (f - h).toFixed(c).substring(2) : "";return g + (d || "") + h.toString().replace(/\B(?=(\d{3})+(?!\d))/g, a) + f + (e || "");
                } };
        }, text: function text() {
            return { display: Vb };
        } };h.extend(n.ext.internal, { _fnExternApiFunc: Lb, _fnBuildAjax: sa, _fnAjaxUpdate: lb, _fnAjaxParameters: ub, _fnAjaxUpdateDraw: vb, _fnAjaxDataSrc: ta, _fnAddColumn: Ea, _fnColumnOptions: ka, _fnAdjustColumnSizing: $, _fnVisibleToColumnIndex: aa, _fnColumnIndexToVisible: ba, _fnVisbleColumns: V, _fnGetColumns: ma, _fnColumnTypes: Ga, _fnApplyColumnDefs: ib, _fnHungarianMap: Z, _fnCamelToHungarian: J, _fnLanguageCompat: Ca, _fnBrowserDetect: gb, _fnAddData: O, _fnAddTr: na, _fnNodeToDataIndex: function _fnNodeToDataIndex(a, b) {
            return b._DT_RowIndex !== k ? b._DT_RowIndex : null;
        }, _fnNodeToColumnIndex: function _fnNodeToColumnIndex(a, b, c) {
            return h.inArray(c, a.aoData[b].anCells);
        }, _fnGetCellData: B, _fnSetCellData: jb, _fnSplitObjNotation: Ja, _fnGetObjectDataFn: S, _fnSetObjectDataFn: N, _fnGetDataMaster: Ka, _fnClearTable: oa, _fnDeleteIndex: pa, _fnInvalidate: da, _fnGetRowElements: Ia, _fnCreateTr: Ha, _fnBuildHead: kb, _fnDrawHead: fa, _fnDraw: P, _fnReDraw: T, _fnAddOptionsHtml: nb, _fnDetectHeader: ea, _fnGetUniqueThs: ra, _fnFeatureHtmlFilter: pb, _fnFilterComplete: ga, _fnFilterCustom: yb,
        _fnFilterColumn: xb, _fnFilter: wb, _fnFilterCreateSearch: Pa, _fnEscapeRegex: Qa, _fnFilterData: zb, _fnFeatureHtmlInfo: sb, _fnUpdateInfo: Cb, _fnInfoMacros: Db, _fnInitialise: ha, _fnInitComplete: ua, _fnLengthChange: Ra, _fnFeatureHtmlLength: ob, _fnFeatureHtmlPaginate: tb, _fnPageChange: Ta, _fnFeatureHtmlProcessing: qb, _fnProcessingDisplay: C, _fnFeatureHtmlTable: rb, _fnScrollDraw: la, _fnApplyToChildren: I, _fnCalculateColumnWidths: Fa, _fnThrottle: Oa, _fnConvertToWidth: Eb, _fnGetWidestNode: Fb, _fnGetMaxLenString: Gb, _fnStringToCss: v,
        _fnSortFlatten: X, _fnSort: mb, _fnSortAria: Ib, _fnSortListener: Va, _fnSortAttachListener: Ma, _fnSortingClasses: wa, _fnSortData: Hb, _fnSaveState: xa, _fnLoadState: Jb, _fnSettingsFromNode: ya, _fnLog: K, _fnMap: F, _fnBindAction: Wa, _fnCallbackReg: z, _fnCallbackFire: r, _fnLengthOverflow: Sa, _fnRenderer: Na, _fnDataSource: y, _fnRowAttributes: La, _fnExtend: Xa, _fnCalculateEnd: function _fnCalculateEnd() {} });h.fn.dataTable = n;n.$ = h;h.fn.dataTableSettings = n.settings;h.fn.dataTableExt = n.ext;h.fn.DataTable = function (a) {
        return h(this).dataTable(a).api();
    };
    h.each(n, function (a, b) {
        h.fn.DataTable[a] = b;
    });return h.fn.dataTable;
});

/*!
 DataTables Bootstrap 4 integration
 ©2011-2017 SpryMedia Ltd - datatables.net/license
*/
(function (b) {
    "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function (a) {
        return b(a, window, document);
    }) : "object" === (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = function (a, d) {
        a || (a = window);if (!d || !d.fn.dataTable) d = require("datatables.net")(a, d).$;return b(d, a, a.document);
    } : b(jQuery, window, document);
})(function (b, a, d, m) {
    var f = b.fn.dataTable;b.extend(!0, f.defaults, { dom: "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
        renderer: "bootstrap" });b.extend(f.ext.classes, { sWrapper: "dataTables_wrapper dt-bootstrap4", sFilterInput: "form-control form-control-sm", sLengthSelect: "custom-select custom-select-sm form-control form-control-sm", sProcessing: "dataTables_processing card", sPageButton: "paginate_button page-item" });f.ext.renderer.pageButton.bootstrap = function (a, h, r, s, j, n) {
        var o = new f.Api(a),
            t = a.oClasses,
            k = a.oLanguage.oPaginate,
            u = a.oLanguage.oAria.paginate || {},
            e,
            g,
            p = 0,
            q = function q(d, f) {
            var l,
                h,
                i,
                c,
                m = function m(a) {
                a.preventDefault();
                !b(a.currentTarget).hasClass("disabled") && o.page() != a.data.action && o.page(a.data.action).draw("page");
            };l = 0;for (h = f.length; l < h; l++) {
                if (c = f[l], b.isArray(c)) q(d, c);else {
                    g = e = "";switch (c) {case "ellipsis":
                            e = "&#x2026;";g = "disabled";break;case "first":
                            e = k.sFirst;g = c + (0 < j ? "" : " disabled");break;case "previous":
                            e = k.sPrevious;g = c + (0 < j ? "" : " disabled");break;case "next":
                            e = k.sNext;g = c + (j < n - 1 ? "" : " disabled");break;case "last":
                            e = k.sLast;g = c + (j < n - 1 ? "" : " disabled");break;default:
                            e = c + 1, g = j === c ? "active" : "";}e && (i = b("<li>", { "class": t.sPageButton + " " + g, id: 0 === r && "string" === typeof c ? a.sTableId + "_" + c : null }).append(b("<a>", { href: "#", "aria-controls": a.sTableId, "aria-label": u[c], "data-dt-idx": p, tabindex: a.iTabIndex, "class": "page-link" }).html(e)).appendTo(d), a.oApi._fnBindAction(i, { action: c }, m), p++);
                }
            }
        },
            i;try {
            i = b(h).find(d.activeElement).data("dt-idx");
        } catch (v) {}q(b(h).empty().html('<ul class="pagination"/>').children("ul"), s);i !== m && b(h).find("[data-dt-idx=" + i + "]").focus();
    };return f;
});

$(document).ready(function () {
    $('.preventDefault').click(function (e) {
        e.preventDefault();
    });
    var data_model_plural = $('#data-table').data('model-plural');
    var data_model_singular = $('#data-table').data('model-singular');
    var article = data_model_singular == 'transacción' ? 'la' : 'el';
    var none = data_model_singular == 'transacción' ? 'ninguna' : 'ningún';
    $('#data-table').DataTable({
        "language": {
            decimal: ".",
            thousands: ",",
            lengthMenu: "Mostrar _MENU_ " + data_model_plural,
            emptyTable: "No hay " + data_model_plural + " para mostrar",
            loadingRecords: "Cargando...",
            processing: "Procesando...",
            search: "Buscar:",
            info: "Mostrando del _START_ al _END_ de _TOTAL_ " + data_model_plural,
            infoEmpty: "No se encontr\xF3 " + article + " " + data_model_singular,
            zeroRecords: "No se encontr\xF3 " + none + " " + data_model_singular,
            infoFiltered: "(filtrado de _MAX_ " + data_model_plural + ")",
            searchPlaceholder: "Buscar " + data_model_plural,
            paginate: {
                "first": "Primera",
                "last": "Última",
                "next": "Siguiente",
                "previous": "Anterior"
            }
        }
    });

    // Numeric inputs control
    $('input[type=number]').on('keydown', function (e) {
        return numberControl(e.key, $(this));
    });

    numberControl = function numberControl(key, input) {
        if (key == '.' && (input.val() == '' || input.val().indexOf('.') >= 0)) return false;

        if (key == 'e' || key == '-' || key == '+') {
            return false;
        } else {
            return key;
        }
    };

    // Prevent form from submitting more than once
    $('form').submit(function () {
        $('button[type=submit]').attr('disabled', 'disabled');
    });

    /** Show edit field */
    $('.show-field').click(function (e) {
        e.preventDefault();

        var id = $(this).attr('data-id');

        // Hide all inputs, hide all save buttons, disable all inputs, show all descriptions and show all edit buttons
        $('.inv_input').addClass('d-none');
        $('.inv_save').addClass('d-none');
        $('.inv_edit').removeClass('d-none');
        $('.inv_p').show();
        $('.inv_input').attr('disabled', true);

        // Show description input
        $("#inv_" + id).removeClass('d-none');
        // Hide description paragraph
        $("#inv_" + id).parent().children('p').hide();
        // Enable current description input
        $("#inv_" + id).attr('disabled', false);
        // Enable current code input
        $("#inv_code_" + id).attr('disabled', false);

        // Show current record's save button
        $(this).parent().children('.btn-success').removeClass('d-none');
        // Hide current record's edit button
        $(this).addClass('d-none');
    });

    /** content container */
    $('.show-content').click(function (e) {
        e.preventDefault();
        var type = $(this).attr('data-type'),
            action = $(this).attr('data-action'),
            record_type = $(this).attr('data-record-type');

        // Show content container
        $(".content-container[data-type=" + type + "]").show();
        $(".content-container[data-type=" + type + "] .content-container-box").slideDown();

        // Set quantity default value to 1
        $('#quantity').val('1');

        // Change form action
        if (action) {
            $(".content-container[data-type=" + type + "] form").attr('action', action);
        }

        // Change record type
        if (record_type) {
            $(".content-container[data-type=" + type + "] .record-type").text(record_type);
        }

        // Change delete text
        var text = $(this).attr('data-text');
        $('#delete-text span.text-italic').text(text);

        var code = $(this).attr('data-id');
        $('#delete_code').val(code);
    });

    // hide content container
    $('.content-container').click(function (e) {
        if (e.target.classList.contains('btn-cancel')) {
            $(this).fadeOut();
            $('.content-container-box').fadeOut();
        }
    });

    /** recover container */
    $('.show-recover').click(function (e) {
        e.preventDefault();
        var type = $(this).attr('data-type'),
            action = $(this).attr('data-action'),
            record_type = $(this).attr('data-record-type');

        // Change form action
        if (action) {
            $(".recover-container[data-type=" + type + "] form").attr('action', action);
        }

        // Change record type
        if (record_type) {
            $(".recover-container[data-type=" + type + "] .record-type").text(record_type);
        }

        // Show recover container
        $(".recover-container[data-type=" + type + "]").show();
        $(".recover-container[data-type=" + type + "] .recover-container-box").slideDown();

        // Change recover text
        var text = $(this).attr('data-text');
        $('#recover-text span.text-italic').text(text);

        var code = $(this).attr('data-id');
        $('#recover_code').val(code);
    });

    // hide recover container
    $('.recover-container').click(function (e) {
        if (e.target.classList.contains('btn-cancel')) {
            $(this).fadeOut();
            $('.recover-container-box').fadeOut();
        }
    });

    /** Form container */
    $('.btn-input').click(function (e) {
        e.preventDefault();

        // Show form container
        $('.form-container').show();
        $('.form-container-box').slideDown();
    });

    // hide form container
    $('.form-container').click(function (e) {
        if (e.target.classList.contains('btn-cancel')) {
            $(this).fadeOut();
            $('.form-container-box').fadeOut();
        }
    });

    /** Stock entry */
    selectEntry = function selectEntry() {
        var code = document.getElementById('code').value;
        var quantity = document.getElementById('quantity').value;
        var inputCheck = document.querySelector("input[name=\"code[]\"][value=\"" + code + "\"]");
        var option = $("#inv_" + code);

        // Check if element is not inserted already
        if (!inputCheck) {
            if (code !== '' && quantity !== '') {
                // Check if quantity is less than 1
                if (quantity < 1) {
                    document.querySelector('div.alert.alert-danger').innerHTML = "<p class=\"d-inline-block m-0\">\n                                                                                    La cantidad no puede ser menor o igual a cero (0)\n                                                                                </P>";
                    document.querySelector('div.alert.alert-danger').classList.remove('d-none');
                    return;
                }

                var description = document.getElementById('inv_' + code).getAttribute('data-description');
                var type = document.getElementById('inv_' + code).getAttribute('data-type');
                var stock = document.getElementById('inv_' + code).getAttribute('data-stock');
                addRow(code, type, description, stock, quantity, option);
            } else {
                document.querySelector('div.alert.alert-danger').innerHTML = "<p class=\"d-inline-block m-0\">\n                                                                                    Todos los campos son obligatorios\n                                                                                </P>";
                document.querySelector('div.alert.alert-danger').classList.remove('d-none');
            }
        } else {
            document.querySelector('div.alert.alert-danger').innerHTML = "<p class=\"d-inline-block m-0\">\n                                                                                Ya ha seleccionado este art\xEDculo\n                                                                            </p>";
            document.querySelector('div.alert.alert-danger').classList.remove('d-none');
        }
    };

    var addRow = function addRow(code, type, description, stock, quantity, option) {
        var html = "\n            <tr>\n                <td class=\"code-children\">\n                  <p class=\"m-0\">" + code + "</p>\n                  <input type=\"hidden\" name=\"code[]\" class=\"form-control\" value=\"" + code + "\">\n                  <input type=\"hidden\" name=\"types[]\" class=\"form-control\" value=\"" + type + "\">\n                </td>\n\n                <td class=\"description-children\">\n                  <p class=\"m-0\">" + description + "</p>\n                </td>\n\n                <td class=\"stock-children\">\n                  <p class=\"m-0\">" + stock + "</p>\n                  <input type=\"number\" name=\"previous[]\" class=\"form-control d-none\" value=\"" + stock + "\">\n                </td>\n\n                <td class=\"quantity-children\">\n                  <p class=\"m-0\">" + quantity + "</p>\n                  <input type=\"number\" name=\"quantity[]\" class=\"form-control d-none\" min=\"0\" value=\"" + quantity + "\">\n                </td>\n\n                <td class=\"action-children\">\n                  <a href=\"#\" class=\"btn btn-primary btn-edit\" onClick=\"editQuantity(event)\"><i class=\"lzi pencil\"></i></a>\n                  <a href=\"#\" class=\"btn btn-danger\" onClick=\"deleteLine(event)\"><i class=\"lzi delete\"></i></a>\n                </td>\n            </tr>\n        ";

        if (code !== '' && description !== '' && quantity !== '') {
            $('table.table tbody').append(html);
            document.querySelector('div.alert.alert-danger').classList.add('d-none');
            document.getElementById('code').value = '';
            document.getElementById('quantity').value = '';
            $('.content-container').css({ 'display': 'none' });
            $('#btn-save').attr('disabled', false);

            // Remove option from list
            option.remove();

            // Append number control function to added input
            $(document).on('keydown', 'input[type=number]', function (e) {
                return numberControl(e.key, $(this));
            });
        } else {
            document.querySelector('div.alert.alert-danger').classList.remove('d-none');
        }
    };

    editQuantity = function editQuantity(e) {
        e.preventDefault();

        if ($(e.target).closest('tr').children('.action-children').children('.btn-edit').hasClass('btn-success')) {
            var quantity = $(e.target).closest('tr').children('.quantity-children').children('input').val();
            $(e.target).closest('tr').children('.quantity-children').children('p').text(quantity);

            $('#btn-save').attr('disabled', false);

            $(e.target).closest('tr').children('.action-children').children('.btn-edit').removeClass('btn-success');
            $(e.target).closest('tr').children('.quantity-children').children('p').removeClass('d-none');
            $(e.target).closest('tr').children('.quantity-children').children('input').addClass('d-none');
            $(e.target).closest('tr').children('.action-children').children('.btn-edit').html('<i class="lzi pencil"></i>');
        } else {
            $(e.target).closest('tr').children('.action-children').children('.btn-edit').addClass('btn-success');
            $(e.target).closest('tr').children('.quantity-children').children('p').addClass('d-none');
            $(e.target).closest('tr').children('.quantity-children').children('input').removeClass('d-none');
            $(e.target).closest('tr').children('.action-children').children('.btn-edit').html('<i class="lzi check"></i>');
        }
    };

    deleteLine = function deleteLine(e) {
        e.preventDefault();

        // Recover option
        var code = $(e.target).closest('tr').children('.code-children').children('p').text();
        var type = $(e.target).closest('tr').children('.code-children').children('input[name="type[]"]').val();
        var description = $(e.target).closest('tr').children('.description-children').children('p').text();
        var stock = $(e.target).closest('tr').children('.stock-children').children('p').text();
        var select = $('#code');

        var option = "\n        <option value=\"" + code + "\"\n            id=\"inv_" + code + "\"\n            data-description=\"" + description + "\"\n            data-stock=\"" + stock + "\"\n            data-type=\"" + type + "\">\n\n            " + description + "  (" + stock + ")\n        </option>\n        ";

        select.append(option);

        $(e.target).closest('tr').remove();

        var rows = $('.fh-table table tbody tr').length;

        if (rows <= 0) {
            $('#btn-save').attr('disabled', true);
        } else {
            $('#btn-save').attr('disabled', false);
        }
    };

    /** Add kit components */
    $('#kit-component').click(function () {
        $('#kit-components-container').removeClass('d-none');
        $('#kit-components-container').slideDown('d-none');
        $('#stock').attr('disabled', true);
        $('#stock-group').slideUp('fast');
        $('.components').attr('disabled', false);
    });
    $('#singular-product').click(function () {
        $('#kit-components-container').slideUp('d-none');
        $('#stock').attr('disabled', false);
        $('#stock-group').slideDown('fast');
        $('.components').attr('disabled', true);
    });
    $('#service-product').click(function () {
        $('#kit-components-container').slideUp('d-none');
        $('#stock').attr('disabled', true);
        $('#stock-group').slideUp('fast');
        $('.components').attr('disabled', true);
    });
    $('#add-kit-component').click(function (e) {
        e.preventDefault();

        // Find value of first select to remove selected item from the new component row
        var select = $('#kit-components div:first-of-type select').val();

        // If all components are selected, which can be verified if the first select has only one possible option, then return. If last component's option is not selected, return
        var options = $('#kit-components div:first-of-type select option').length;
        var lastSelect = $('#kit-components div:last-of-type select').val();
        if (options <= 1 || lastSelect == 'null') return;

        // Retrieve first component elements to create new component row
        var component = $('#kit-components div:first-of-type').html();
        var defaultOption = '<option value="null">-- Seleccionar un componente --</option>';

        // Create new component row
        var html = "\n            <div class=\"d-flex\">\n                " + component + "\n            </div>\n        ";
        $('#kit-components').append(html);

        // Append default option as the first option of the new component
        $('#kit-components div:last-of-type').children('select').prepend(defaultOption);
        // Append delete button to row
        $('#kit-components div:last-of-type').append('<a href="#" class="btn delete-component" onClick="deleteComponent(event)"><i class="lzi delete lzi-danger"></i></a>');

        // Remove first select's selected value from new component
        $("#kit-components div:last-of-type .components option[value=" + select + "]").remove();
        $("#kit-components div:last-of-type .components").val('null');

        // Append number control function to added input
        $(document).on('keydown', 'input[type=number]', function (e) {
            return numberControl(e.key, $(this));
        });
    });

    setOption = function setOption(e) {
        $(e.target).data('val', $(e.target).val());
    };

    removeOption = function removeOption(e) {
        var prev = $(e.target).data('val');

        if (prev != 'null' && prev != undefined && prev != 'undefined' && prev != null) {
            var text = $(e.target).children("option[value=" + prev + "]").text();
            var prevOption = "<option value=\"" + prev + "\">" + text + "</option>";
            $('.components').not($(e.target)).append(prevOption);
        } else {
            $(e.target).children('option[value=null]').remove();
        }

        var select = $(e.target).val();
        var option = $(".components option[value=" + select + "]").not($(e.target).children("option[value=" + select + "]"));

        option.remove();
    };

    // Delete kit component row
    deleteComponent = function deleteComponent(e) {
        e.preventDefault();

        var select = $(e.target).closest('div').children('select').val();
        var text = $(e.target).closest('div').children('select').children("option[value=" + select + "]").text();

        if (select != 'null') {
            var prevOption = "<option value=\"" + select + "\">" + text + "</option>";
            $('.components').append(prevOption);
        }

        $(e.target).closest('div').remove();
    };

    /** Show user dropdown menu */
    $('#user-dropdown').click(function (e) {
        $('.user-dropdown-menu').toggle('fast');
    });
});