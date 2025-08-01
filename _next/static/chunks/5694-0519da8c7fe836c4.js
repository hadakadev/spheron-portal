(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5694],
  {
    3454: function (e, t, n) {
      "use strict";
      var r, o;
      e.exports =
        (null == (r = n.g.process) ? void 0 : r.env) &&
        "object" === typeof (null == (o = n.g.process) ? void 0 : o.env)
          ? n.g.process
          : n(7663);
    },
    1210: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getDomainLocale = function (e, t, n, r) {
          return !1;
        });
      ("function" === typeof t.default ||
        ("object" === typeof t.default && null !== t.default)) &&
        "undefined" === typeof t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    8418: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(4941).Z;
      n(5753).default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = n(2648).Z,
        u = n(7273).Z,
        a = o(n(7294)),
        l = n(6273),
        i = n(2725),
        c = n(3462),
        f = n(1018),
        s = n(7190),
        p = n(1210),
        d = n(8684),
        v = {};
      function y(e, t, n, r) {
        if (e && l.isLocalURL(t)) {
          Promise.resolve(e.prefetch(t, n, r)).catch(function (e) {
            0;
          });
          var o =
            r && "undefined" !== typeof r.locale ? r.locale : e && e.locale;
          v[t + "%" + n + (o ? "%" + o : "")] = !0;
        }
      }
      var h = a.default.forwardRef(function (e, t) {
        var n,
          o = e.href,
          h = e.as,
          m = e.children,
          b = e.prefetch,
          g = e.passHref,
          x = e.replace,
          T = e.shallow,
          C = e.scroll,
          w = e.locale,
          L = e.onClick,
          _ = e.onMouseEnter,
          E = e.onTouchStart,
          j = e.legacyBehavior,
          M = void 0 === j ? !0 !== Boolean(!1) : j,
          R = u(e, [
            "href",
            "as",
            "children",
            "prefetch",
            "passHref",
            "replace",
            "shallow",
            "scroll",
            "locale",
            "onClick",
            "onMouseEnter",
            "onTouchStart",
            "legacyBehavior",
          ]);
        (n = m),
          !M ||
            ("string" !== typeof n && "number" !== typeof n) ||
            (n = a.default.createElement("a", null, n));
        var A = !1 !== b,
          O = a.default.useContext(c.RouterContext),
          k = a.default.useContext(f.AppRouterContext);
        k && (O = k);
        var P,
          S = a.default.useMemo(
            function () {
              var e = r(l.resolveHref(O, o, !0), 2),
                t = e[0],
                n = e[1];
              return { href: t, as: h ? l.resolveHref(O, h) : n || t };
            },
            [O, o, h]
          ),
          U = S.href,
          Z = S.as,
          B = a.default.useRef(U),
          D = a.default.useRef(Z);
        M && (P = a.default.Children.only(n));
        var H = M ? P && "object" === typeof P && P.ref : t,
          I = r(s.useIntersection({ rootMargin: "200px" }), 3),
          K = I[0],
          N = I[1],
          G = I[2],
          $ = a.default.useCallback(
            function (e) {
              (D.current === Z && B.current === U) ||
                (G(), (D.current = Z), (B.current = U)),
                K(e),
                H &&
                  ("function" === typeof H
                    ? H(e)
                    : "object" === typeof H && (H.current = e));
            },
            [Z, H, U, G, K]
          );
        a.default.useEffect(
          function () {
            var e = N && A && l.isLocalURL(U),
              t = "undefined" !== typeof w ? w : O && O.locale,
              n = v[U + "%" + Z + (t ? "%" + t : "")];
            e && !n && y(O, U, Z, { locale: t });
          },
          [Z, U, N, w, A, O]
        );
        var q = {
          ref: $,
          onClick: function (e) {
            M || "function" !== typeof L || L(e),
              M &&
                P.props &&
                "function" === typeof P.props.onClick &&
                P.props.onClick(e),
              e.defaultPrevented ||
                (function (e, t, n, r, o, u, i, c, f, s) {
                  if (
                    "A" !== e.currentTarget.nodeName.toUpperCase() ||
                    (!(function (e) {
                      var t = e.currentTarget.target;
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) &&
                      l.isLocalURL(n))
                  ) {
                    e.preventDefault();
                    var p = function () {
                      "beforePopState" in t
                        ? t[o ? "replace" : "push"](n, r, {
                            shallow: u,
                            locale: c,
                            scroll: i,
                          })
                        : t[o ? "replace" : "push"](n, {
                            forceOptimisticNavigation: !s,
                          });
                    };
                    f ? a.default.startTransition(p) : p();
                  }
                })(e, O, U, Z, x, T, C, w, Boolean(k), A);
          },
          onMouseEnter: function (e) {
            M || "function" !== typeof _ || _(e),
              M &&
                P.props &&
                "function" === typeof P.props.onMouseEnter &&
                P.props.onMouseEnter(e),
              (!A && k) || (l.isLocalURL(U) && y(O, U, Z, { priority: !0 }));
          },
          onTouchStart: function (e) {
            M || "function" !== typeof E || E(e),
              M &&
                P.props &&
                "function" === typeof P.props.onTouchStart &&
                P.props.onTouchStart(e),
              (!A && k) || (l.isLocalURL(U) && y(O, U, Z, { priority: !0 }));
          },
        };
        if (!M || g || ("a" === P.type && !("href" in P.props))) {
          var z = "undefined" !== typeof w ? w : O && O.locale,
            F =
              O &&
              O.isLocaleDomain &&
              p.getDomainLocale(Z, z, O.locales, O.domainLocales);
          q.href = F || d.addBasePath(i.addLocale(Z, z, O && O.defaultLocale));
        }
        return M
          ? a.default.cloneElement(P, q)
          : a.default.createElement("a", Object.assign({}, R, q), n);
      });
      (t.default = h),
        ("function" === typeof t.default ||
          ("object" === typeof t.default && null !== t.default)) &&
          "undefined" === typeof t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    1018: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TemplateContext =
          t.GlobalLayoutRouterContext =
          t.LayoutRouterContext =
          t.AppRouterContext =
            void 0);
      var r = (0, n(2648).Z)(n(7294)),
        o = r.default.createContext(null);
      t.AppRouterContext = o;
      var u = r.default.createContext(null);
      t.LayoutRouterContext = u;
      var a = r.default.createContext(null);
      t.GlobalLayoutRouterContext = a;
      var l = r.default.createContext(null);
      t.TemplateContext = l;
    },
    7663: function (e) {
      !(function () {
        var t = {
            229: function (e) {
              var t,
                n,
                r = (e.exports = {});
              function o() {
                throw new Error("setTimeout has not been defined");
              }
              function u() {
                throw new Error("clearTimeout has not been defined");
              }
              function a(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === o || !t) && setTimeout)
                  return (t = setTimeout), setTimeout(e, 0);
                try {
                  return t(e, 0);
                } catch (r) {
                  try {
                    return t.call(null, e, 0);
                  } catch (r) {
                    return t.call(this, e, 0);
                  }
                }
              }
              !(function () {
                try {
                  t = "function" === typeof setTimeout ? setTimeout : o;
                } catch (e) {
                  t = o;
                }
                try {
                  n = "function" === typeof clearTimeout ? clearTimeout : u;
                } catch (e) {
                  n = u;
                }
              })();
              var l,
                i = [],
                c = !1,
                f = -1;
              function s() {
                c &&
                  l &&
                  ((c = !1),
                  l.length ? (i = l.concat(i)) : (f = -1),
                  i.length && p());
              }
              function p() {
                if (!c) {
                  var e = a(s);
                  c = !0;
                  for (var t = i.length; t; ) {
                    for (l = i, i = []; ++f < t; ) l && l[f].run();
                    (f = -1), (t = i.length);
                  }
                  (l = null),
                    (c = !1),
                    (function (e) {
                      if (n === clearTimeout) return clearTimeout(e);
                      if ((n === u || !n) && clearTimeout)
                        return (n = clearTimeout), clearTimeout(e);
                      try {
                        n(e);
                      } catch (t) {
                        try {
                          return n.call(null, e);
                        } catch (t) {
                          return n.call(this, e);
                        }
                      }
                    })(e);
                }
              }
              function d(e, t) {
                (this.fun = e), (this.array = t);
              }
              function v() {}
              (r.nextTick = function (e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
                i.push(new d(e, t)), 1 !== i.length || c || a(p);
              }),
                (d.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (r.title = "browser"),
                (r.browser = !0),
                (r.env = {}),
                (r.argv = []),
                (r.version = ""),
                (r.versions = {}),
                (r.on = v),
                (r.addListener = v),
                (r.once = v),
                (r.off = v),
                (r.removeListener = v),
                (r.removeAllListeners = v),
                (r.emit = v),
                (r.prependListener = v),
                (r.prependOnceListener = v),
                (r.listeners = function (e) {
                  return [];
                }),
                (r.binding = function (e) {
                  throw new Error("process.binding is not supported");
                }),
                (r.cwd = function () {
                  return "/";
                }),
                (r.chdir = function (e) {
                  throw new Error("process.chdir is not supported");
                }),
                (r.umask = function () {
                  return 0;
                });
            },
          },
          n = {};
        function r(e) {
          var o = n[e];
          if (void 0 !== o) return o.exports;
          var u = (n[e] = { exports: {} }),
            a = !0;
          try {
            t[e](u, u.exports, r), (a = !1);
          } finally {
            a && delete n[e];
          }
          return u.exports;
        }
        r.ab = "//";
        var o = r(229);
        e.exports = o;
      })();
    },
    1664: function (e, t, n) {
      e.exports = n(8418);
    },
    7568: function (e, t, n) {
      "use strict";
      function r(e, t, n, r, o, u, a) {
        try {
          var l = e[u](a),
            i = l.value;
        } catch (c) {
          return void n(c);
        }
        l.done ? t(i) : Promise.resolve(i).then(r, o);
      }
      function o(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (o, u) {
            var a = e.apply(t, n);
            function l(e) {
              r(a, o, u, l, i, "next", e);
            }
            function i(e) {
              r(a, o, u, l, i, "throw", e);
            }
            l(void 0);
          });
        };
      }
      n.d(t, {
        Z: function () {
          return o;
        },
      });
    },
    797: function (e, t, n) {
      "use strict";
      function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function o(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return r(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (e) {
              if ("string" === typeof e) return r(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(n)
                  : "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? r(e, t)
                  : void 0
              );
            }
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      n.d(t, {
        Z: function () {
          return o;
        },
      });
    },
  },
]);
//# sourceMappingURL=5694-0519da8c7fe836c4.js.map
