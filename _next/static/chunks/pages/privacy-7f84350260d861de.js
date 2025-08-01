(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8915],
  {
    3027: function (e, t, o) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/privacy",
        function () {
          return o(7407);
        },
      ]);
    },
    1210: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getDomainLocale = function (e, t, o, a) {
          return !1;
        });
      ("function" === typeof t.default ||
        ("object" === typeof t.default && null !== t.default)) &&
        "undefined" === typeof t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    8418: function (e, t, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = o(4941).Z;
      o(5753).default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = o(2648).Z,
        s = o(7273).Z,
        i = r(o(7294)),
        n = o(6273),
        l = o(2725),
        c = o(3462),
        d = o(1018),
        h = o(7190),
        u = o(1210),
        p = o(8684),
        m = {};
      function f(e, t, o, a) {
        if (e && n.isLocalURL(t)) {
          Promise.resolve(e.prefetch(t, o, a)).catch(function (e) {
            0;
          });
          var r =
            a && "undefined" !== typeof a.locale ? a.locale : e && e.locale;
          m[t + "%" + o + (r ? "%" + r : "")] = !0;
        }
      }
      var y = i.default.forwardRef(function (e, t) {
        var o,
          r = e.href,
          y = e.as,
          x = e.children,
          b = e.prefetch,
          v = e.passHref,
          g = e.replace,
          w = e.shallow,
          j = e.scroll,
          P = e.locale,
          N = e.onClick,
          Y = e.onMouseEnter,
          T = e.onTouchStart,
          k = e.legacyBehavior,
          C = void 0 === k ? !0 !== Boolean(!1) : k,
          S = s(e, [
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
        (o = x),
          !C ||
            ("string" !== typeof o && "number" !== typeof o) ||
            (o = i.default.createElement("a", null, o));
        var O = !1 !== b,
          R = i.default.useContext(c.RouterContext),
          U = i.default.useContext(d.AppRouterContext);
        U && (R = U);
        var A,
          W = i.default.useMemo(
            function () {
              var e = a(n.resolveHref(R, r, !0), 2),
                t = e[0],
                o = e[1];
              return { href: t, as: y ? n.resolveHref(R, y) : o || t };
            },
            [R, r, y]
          ),
          I = W.href,
          D = W.as,
          E = i.default.useRef(I),
          L = i.default.useRef(D);
        C && (A = i.default.Children.only(o));
        var q = C ? A && "object" === typeof A && A.ref : t,
          _ = a(h.useIntersection({ rootMargin: "200px" }), 3),
          G = _[0],
          M = _[1],
          F = _[2],
          H = i.default.useCallback(
            function (e) {
              (L.current === D && E.current === I) ||
                (F(), (L.current = D), (E.current = I)),
                G(e),
                q &&
                  ("function" === typeof q
                    ? q(e)
                    : "object" === typeof q && (q.current = e));
            },
            [D, q, I, F, G]
          );
        i.default.useEffect(
          function () {
            var e = M && O && n.isLocalURL(I),
              t = "undefined" !== typeof P ? P : R && R.locale,
              o = m[I + "%" + D + (t ? "%" + t : "")];
            e && !o && f(R, I, D, { locale: t });
          },
          [D, I, M, P, O, R]
        );
        var z = {
          ref: H,
          onClick: function (e) {
            C || "function" !== typeof N || N(e),
              C &&
                A.props &&
                "function" === typeof A.props.onClick &&
                A.props.onClick(e),
              e.defaultPrevented ||
                (function (e, t, o, a, r, s, l, c, d, h) {
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
                      n.isLocalURL(o))
                  ) {
                    e.preventDefault();
                    var u = function () {
                      "beforePopState" in t
                        ? t[r ? "replace" : "push"](o, a, {
                            shallow: s,
                            locale: c,
                            scroll: l,
                          })
                        : t[r ? "replace" : "push"](o, {
                            forceOptimisticNavigation: !h,
                          });
                    };
                    d ? i.default.startTransition(u) : u();
                  }
                })(e, R, I, D, g, w, j, P, Boolean(U), O);
          },
          onMouseEnter: function (e) {
            C || "function" !== typeof Y || Y(e),
              C &&
                A.props &&
                "function" === typeof A.props.onMouseEnter &&
                A.props.onMouseEnter(e),
              (!O && U) || (n.isLocalURL(I) && f(R, I, D, { priority: !0 }));
          },
          onTouchStart: function (e) {
            C || "function" !== typeof T || T(e),
              C &&
                A.props &&
                "function" === typeof A.props.onTouchStart &&
                A.props.onTouchStart(e),
              (!O && U) || (n.isLocalURL(I) && f(R, I, D, { priority: !0 }));
          },
        };
        if (!C || v || ("a" === A.type && !("href" in A.props))) {
          var K = "undefined" !== typeof P ? P : R && R.locale,
            B =
              R &&
              R.isLocaleDomain &&
              u.getDomainLocale(D, K, R.locales, R.domainLocales);
          z.href = B || p.addBasePath(l.addLocale(D, K, R && R.defaultLocale));
        }
        return C
          ? i.default.cloneElement(A, z)
          : i.default.createElement("a", Object.assign({}, S, z), o);
      });
      (t.default = y),
        ("function" === typeof t.default ||
          ("object" === typeof t.default && null !== t.default)) &&
          "undefined" === typeof t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    1018: function (e, t, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TemplateContext =
          t.GlobalLayoutRouterContext =
          t.LayoutRouterContext =
          t.AppRouterContext =
            void 0);
      var a = (0, o(2648).Z)(o(7294)),
        r = a.default.createContext(null);
      t.AppRouterContext = r;
      var s = a.default.createContext(null);
      t.LayoutRouterContext = s;
      var i = a.default.createContext(null);
      t.GlobalLayoutRouterContext = i;
      var n = a.default.createContext(null);
      t.TemplateContext = n;
    },
    7407: function (e, t, o) {
      "use strict";
      o.r(t),
        o.d(t, {
          default: function () {
            return h;
          },
        });
      var a = o(5893),
        r = o(7294),
        s = o(1163),
        i = o(1284),
        n = o(7072),
        l = o(8958),
        c = function () {
          return (0, a.jsxs)("div", {
            className: "mx-auto p-6 space-y-8 text-white font-sf-pro",
            children: [
              (0, a.jsx)("h1", {
                className: "text-4xl font-extrabold font-ocr",
                children: "Privacy Policy",
              }),
              (0, a.jsxs)("p", {
                className: "text-sm font-bold uppercase",
                children: [
                  "Last updated: ",
                  (0, a.jsx)("time", {
                    dateTime: "2025-06-23",
                    children: "23 June 2025",
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "space-y-4",
                children: [
                  (0, a.jsx)("p", {
                    children:
                      "This Privacy Policy is issued by Spheron Network. (\u201cUs\u201d or \u201cWe\u201d or \u201cOur\u201d or \u201cCompany\u201d). Please note the terms of this Privacy Policy (\u201cPrivacy Policy\u201d) are for the reference of the User (\u201cUser\u201d or \u201cConsumer\u201d or \u201cYou\u201d or \u201cYour\u201d) which is available on (HTTPS://SPHERON.NETWORK). (\u201cPlatform\u201d). Our Services governs the manner in which any data from which You can be identified (\u201cPersonal Data\u201d) is collected, processed, stored, transferred, and used by Us under Applicable Law. If You are not a User as suggested the Privacy Policy will not be applicable to You or Your affiliates or any party accessing the platform. The User hereby agrees and confirms that availing of the Services means that the User has explicitly consented to the terms of this Privacy Policy.",
                  }),
                  (0, a.jsx)("h2", {
                    className: "text-2xl font-semibold uppercase",
                    children: "1. INTRODUCTION:",
                  }),
                  (0, a.jsx)("p", {
                    children:
                      "Welcome to Spheron Network, we are building the world'`s largest community powered data centre, where anyone can contribute their computing power & anyone able to lease these computing power for AI workloads & innovations.",
                  }),
                  (0, a.jsx)("h2", {
                    className: "text-2xl font-semibold uppercase",
                    children: "2. WHAT INFORMATION DO WE COLLECT:",
                  }),
                  (0, a.jsxs)("ul", {
                    className: "list-disc list-inside space-y-2",
                    children: [
                      (0, a.jsx)("li", {
                        children:
                          "By accessing or using the Platform, You consent to providing Us Your Personal Data and agree to Our Privacy Policy.",
                      }),
                      (0, a.jsx)("li", {
                        children:
                          "We may collect and receive Personal Data from You when You access Our Platform, register for a User Account with Us, or when You connect Your User Account with an external third-party",
                      }),
                      (0, a.jsx)("li", {
                        children:
                          "We may monitor the use of the Platform through the use of cookies and similar tracking devices. To illustrate, We may monitor the number of times You visit the Platform or which pages You viewed. This information helps Us to build Your profile and render better Services to You. Some of this data will be aggregated or statistical, which means that We will not be able to identify You individually.",
                      }),
                      (0, a.jsxs)("li", {
                        children: [
                          "The following table lists the information We may collect from You and how We will use it:",
                          (0, a.jsxs)("table", {
                            className: "min-w-full border-collapse mt-4",
                            children: [
                              (0, a.jsx)("thead", {
                                children: (0, a.jsxs)("tr", {
                                  className: "",
                                  children: [
                                    (0, a.jsx)("th", {
                                      className:
                                        "px-4 py-2 border border-gray-300 text-left text-sm font-semibold w-1/2",
                                      children: "What We Collect",
                                    }),
                                    (0, a.jsx)("th", {
                                      className:
                                        "px-4 py-2 border border-gray-300 text-left text-sm font-semibold w-1/2",
                                      children: "Why We Collect it",
                                    }),
                                  ],
                                }),
                              }),
                              (0, a.jsxs)("tbody", {
                                children: [
                                  (0, a.jsxs)("tr", {
                                    children: [
                                      (0, a.jsx)("td", {
                                        className:
                                          "border border-gray-300 text-sm h-full",
                                        children: (0, a.jsxs)("div", {
                                          className: "flex flex-col h-full",
                                          children: [
                                            (0, a.jsxs)("div", {
                                              className: "px-4 py-2 m-auto",
                                              children: [
                                                (0, a.jsx)("span", {
                                                  className: "font-bold",
                                                  children:
                                                    "Registration and login data:",
                                                }),
                                                " ",
                                                "Your name, email, user-ID, password, or any information we ask You on the Platform.",
                                              ],
                                            }),
                                            (0, a.jsxs)("div", {
                                              className:
                                                "border-t border-white px-4 py-2 my-auto",
                                              children: [
                                                (0, a.jsx)("span", {
                                                  className: "font-bold",
                                                  children: "Log Data:",
                                                }),
                                                " Information We automatically collect when You use the Platform, whether through the use of cookies, web beacons, log files, scripts, or any other information of similar kind.",
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                      (0, a.jsx)("td", {
                                        className:
                                          "px-4 py-2 border border-gray-300 text-sm",
                                        children: (0, a.jsxs)("ul", {
                                          className:
                                            "list-disc list-inside space-y-2",
                                          children: [
                                            (0, a.jsx)("li", {
                                              children:
                                                "To set-up Your User Account on the Platform and facilitate login.",
                                            }),
                                            (0, a.jsx)("li", {
                                              children:
                                                "To notify You about new products and services, discounts, and promotional offers.",
                                            }),
                                            (0, a.jsx)("li", {
                                              children:
                                                "To notify You about changes to the Platform, including the Terms of Use and this Privacy Policy.",
                                            }),
                                            (0, a.jsx)("li", {
                                              children:
                                                "To facilitate communication with You and provide customer support.",
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("tr", {
                                    children: [
                                      (0, a.jsx)("td", {
                                        className:
                                          "border border-gray-300 text-sm h-full",
                                        children: (0, a.jsxs)("div", {
                                          className: "flex flex-col h-full",
                                          children: [
                                            (0, a.jsxs)("div", {
                                              className: "px-4 py-2 m-auto",
                                              children: [
                                                (0, a.jsx)("span", {
                                                  className: "font-bold",
                                                  children: "Surveys:",
                                                }),
                                                " We may ask You to undertake surveys or fill questionnaires from time to time. Some of these will require You to give Us additional personal information or data. These surveys or questionnaires may also be conducted by the Partners, Our Service Providers, or any other thirdparty",
                                              ],
                                            }),
                                            (0, a.jsxs)("div", {
                                              className:
                                                "border-t border-white px-4 py-2 my-auto",
                                              children: [
                                                (0, a.jsx)("span", {
                                                  className: "font-bold",
                                                  children: "Device Data:",
                                                }),
                                                " We collect the device data only if you are providing us the compute. For users we do not track or keep device ID's except the location of the incoming call coming to the network or our gateways.",
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                      (0, a.jsx)("td", {
                                        className:
                                          "px-4 py-2 border border-gray-300 text-sm",
                                        children: (0, a.jsxs)("ul", {
                                          className:
                                            "list-disc list-inside space-y-2",
                                          children: [
                                            (0, a.jsx)("li", {
                                              children:
                                                "To develop new services, improve existing services on the Platform, and integrate User preferences, feedbacks, and requests.",
                                            }),
                                            (0, a.jsx)("li", {
                                              children:
                                                "To administer the Platform and facilitate internal operations, including but not limited to, troubleshooting, data analysis, testing, research, security, and fraud-detection.",
                                            }),
                                            (0, a.jsx)("li", {
                                              children:
                                                "To better understand how You use and access the Platform and to improve Your User experience.",
                                            }),
                                            (0, a.jsx)("li", {
                                              children:
                                                "To assess effectiveness of and improve advertising and other marketing and promotional activities.",
                                            }),
                                            (0, a.jsx)("li", {
                                              children:
                                                "To keep the device compatible with Platform.",
                                            }),
                                            (0, a.jsx)("li", {
                                              children:
                                                "To customize and optimize Your user experience on the Platform.",
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("tr", {
                                    children: [
                                      (0, a.jsx)("td", {
                                        className:
                                          "border border-gray-300 text-sm h-full",
                                        children: (0, a.jsx)("div", {
                                          className: "flex flex-col h-full",
                                          children: (0, a.jsxs)("div", {
                                            className: "px-4 py-2 m-auto",
                                            children: [
                                              (0, a.jsx)("span", {
                                                className: "font-bold",
                                                children:
                                                  "Customer support data:",
                                              }),
                                              " ",
                                              "Any information that You provide to Our customer support team or Our helpdesk periodically.",
                                            ],
                                          }),
                                        }),
                                      }),
                                      (0, a.jsx)("td", {
                                        className:
                                          "px-4 py-2 border border-gray-300 text-sm",
                                        children: (0, a.jsxs)("ul", {
                                          className:
                                            "list-disc list-inside space-y-2",
                                          children: [
                                            (0, a.jsx)("li", {
                                              children:
                                                "To investigate Your support issue and assist You in resolving Your query.",
                                            }),
                                            (0, a.jsx)("li", {
                                              children:
                                                "To internally help Us in improving and developing Our user support systems.",
                                            }),
                                            (0, a.jsx)("li", {
                                              children:
                                                "To pass on relevant queries from users to Our Partners or Service Providers.",
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("tr", {
                                    children: [
                                      (0, a.jsx)("td", {
                                        className:
                                          "border border-gray-300 text-sm h-full",
                                        children: (0, a.jsx)("div", {
                                          className: "flex flex-col h-full",
                                          children: (0, a.jsxs)("div", {
                                            className: "px-4 py-2 m-auto",
                                            children: [
                                              (0, a.jsx)("span", {
                                                className: "font-bold",
                                                children: "Location data:",
                                              }),
                                              " ",
                                              "Information that We derive from Your device or from the location/address details You provide Us while using the Platform.",
                                            ],
                                          }),
                                        }),
                                      }),
                                      (0, a.jsx)("td", {
                                        className:
                                          "px-4 py-2 border border-gray-300 text-sm",
                                        children: (0, a.jsxs)("ul", {
                                          className:
                                            "list-disc list-inside space-y-2",
                                          children: [
                                            (0, a.jsx)("li", {
                                              children:
                                                "For security and account management.",
                                            }),
                                            (0, a.jsx)("li", {
                                              children:
                                                "To provide You with location customization.",
                                            }),
                                            (0, a.jsx)("li", {
                                              children:
                                                "To detect if You are operating from a Restricted Territory",
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("tr", {
                                    children: [
                                      (0, a.jsx)("td", {
                                        className:
                                          "border border-gray-300 text-sm h-full",
                                        children: (0, a.jsx)("div", {
                                          className: "flex flex-col h-full",
                                          children: (0, a.jsxs)("div", {
                                            className: "px-4 py-2 m-auto",
                                            children: [
                                              (0, a.jsx)("span", {
                                                className: "font-bold",
                                                children: "Wallet data:",
                                              }),
                                              " We may collect Wallet information including but not limited to blockchain address, transfers, balances, transactions and IP address.",
                                            ],
                                          }),
                                        }),
                                      }),
                                      (0, a.jsx)("td", {
                                        className:
                                          "px-4 py-2 border border-gray-300 text-sm",
                                        children: (0, a.jsxs)("ul", {
                                          className:
                                            "list-disc list-inside space-y-2",
                                          children: [
                                            (0, a.jsx)("li", {
                                              children:
                                                "To learn more about Your use of Our Services.",
                                            }),
                                            (0, a.jsx)("li", {
                                              children:
                                                "To screen Your Wallet for any prior illicit activity (We may screen Your Wallet using intelligence provided by leading blockchain analytics providers).",
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("tr", {
                                    children: [
                                      (0, a.jsx)("td", {
                                        className:
                                          "border border-gray-300 text-sm h-full",
                                        children: (0, a.jsx)("div", {
                                          className: "flex flex-col h-full",
                                          children: (0, a.jsxs)("div", {
                                            className: "px-4 py-2 m-auto",
                                            children: [
                                              (0, a.jsx)("span", {
                                                className: "font-bold",
                                                children: "KYC data:",
                                              }),
                                              " We may collect KYC data such as bank account details and/or identification proof documents in accordance with our AML/KYC Policy.",
                                            ],
                                          }),
                                        }),
                                      }),
                                      (0, a.jsx)("td", {
                                        className:
                                          "px-4 py-2 border border-gray-300 text-sm",
                                        children: (0, a.jsx)("ul", {
                                          className:
                                            "list-disc list-inside space-y-2",
                                          children: (0, a.jsx)("li", {
                                            children:
                                              "To satisfy anti-money laundering and know-your-customer legal obligations under Applicable Laws.",
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("tr", {
                                    children: [
                                      (0, a.jsx)("td", {
                                        className:
                                          "border border-gray-300 text-sm h-full",
                                        children: (0, a.jsx)("div", {
                                          className: "flex flex-col h-full",
                                          children: (0, a.jsxs)("div", {
                                            className: "px-4 py-2 m-auto",
                                            children: [
                                              (0, a.jsx)("span", {
                                                className: "font-bold",
                                                children:
                                                  "Correspondence data:",
                                              }),
                                              " ",
                                              "We may collect any communications and/or information You provide directly to Us via email, social media or another channel (such as Discord). This includes the content and metadata associated with the communication.",
                                            ],
                                          }),
                                        }),
                                      }),
                                      (0, a.jsx)("td", {
                                        className:
                                          "px-4 py-2 border border-gray-300 text-sm",
                                        children: (0, a.jsxs)("ul", {
                                          className:
                                            "list-disc list-inside space-y-2",
                                          children: [
                                            (0, a.jsx)("li", {
                                              children:
                                                "To assist You better in resolving any query.",
                                            }),
                                            (0, a.jsx)("li", {
                                              children:
                                                "To internally help Us in improving and developing Our user support systems.",
                                            }),
                                            (0, a.jsx)("li", {
                                              children:
                                                "To pass on relevant queries from users to Us or Service Providers.",
                                            }),
                                            (0, a.jsx)("li", {
                                              children:
                                                "For the purposes of internal record - keeping",
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)("h2", {
                    className: "text-2xl font-semibold",
                    children: "3. HOW DO WE USE YOUR PERSONAL INFORMATION:",
                  }),
                  (0, a.jsxs)("ul", {
                    className: "list-disc list-inside space-y-2",
                    children: [
                      (0, a.jsxs)("li", {
                        children: [
                          "We will disclose or share Your Personal Data, without notice, for the primary purposes for which it was collected in accordance with this Privacy Policy, including, without limitation:",
                          (0, a.jsxs)("ul", {
                            className: "list-disc list-inside space-y-2 pl-6",
                            children: [
                              (0, a.jsx)("li", {
                                children:
                                  "where You have consented to such disclosure or sharing.",
                              }),
                              (0, a.jsx)("li", {
                                children:
                                  "where permitted under the applicable Data Protection Laws.",
                              }),
                              (0, a.jsx)("li", {
                                children:
                                  "where required under Applicable Laws;",
                              }),
                              (0, a.jsx)("li", {
                                children:
                                  "where it is necessary to protect and defend the rights or property of Spheron and/or its users.",
                              }),
                              (0, a.jsx)("li", {
                                children:
                                  "where it is necessary to act under exigent circumstances to protect the personal safety of other users on the Platform, or the general public visiting the Platform.",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)("li", {
                        children:
                          "Sharing with Service Providers: We work with Our Service Providers to execute various functionalities of the Platform and We may share Your information with them to enable and better customize Our Services for You.",
                      }),
                      (0, a.jsx)("li", {
                        children:
                          "Sharing with Partners: We do not share any data to our partners until & unless explicitly asked from the users. This data may get shared or accessed via our ecosystem project.",
                      }),
                      (0, a.jsx)("li", {
                        children:
                          "Sharing with group companies: Subject to Applicable Law, We may share any data, including Personal Data, that We collect from You with Our group companies for product research and development; making Our Services better; and tailoring the Platform for Your benefit.",
                      }),
                      (0, a.jsx)("li", {
                        children:
                          "Sharing with law enforcement when needed: We will share Your information, without prior notice, on a request from any competent governmental authority or a court of competent jurisdiction or law enforcement officers that We find appropriate or necessary in order to comply with Applicable Law.",
                      }),
                    ],
                  }),
                  (0, a.jsx)("h2", {
                    className: "text-2xl font-semibold uppercase",
                    children:
                      "4. IS THE PERSONAL INFORMATION OF THE USER SECURED?",
                  }),
                  (0, a.jsx)("p", {
                    children:
                      "Your account is protected by a password for Your privacy and security. If You access Your account via a third-party site or service, You may have additional or different sign-on protections via that third party site or service. You must prevent unauthorized access to Your account and Personal Information by selecting and protecting Your password and/or other sign-on mechanism appropriately and limiting access to Your computer or device and browser by signing off after You have finished accessing Your account. We endeavor to protect the privacy of Your account and other Personal Information We hold in Our records, but unfortunately, We cannot guarantee complete security. Unauthorized entry or use, hardware or software failure, and other factors, may compromise the security of User information at any time",
                  }),
                  (0, a.jsx)("h2", {
                    className: "text-2xl font-semibold",
                    children:
                      "5. TRANSFER OF USER PERSONAL DATA CROSS BORDERS:",
                  }),
                  (0, a.jsxs)("p", {
                    children: [
                      "If User are a resident of the European Economic Area (\u201cEEA\u201d) or Switzerland, You may have additional rights under the General Data Protection Regulation (\u201c",
                      (0, a.jsx)("b", { children: "GDPR" }),
                      "\u201d) and other applicable law with respect to Your Personal Data, as outlined below. For this section, We use the terms \u201cPersonal Data\u201d and \u201cProcessing\u201d as they are defined in the GDPR, but \u201cPersonal Data\u201d generally means information that can be used to individually identify a person, and \u201cProcessing\u201d generally covers actions that can be performed in connection with data such as collection with data such as collection, use, storage and disclosure. The Company will be the controller of User Personal Data processed in connection with the Site.",
                    ],
                  }),
                  (0, a.jsx)("h2", {
                    className: "text-2xl font-semibold uppercase",
                    children: "6. COOKIE POLICY",
                  }),
                  (0, a.jsxs)("ul", {
                    className: "list-disc list-inside space-y-2",
                    children: [
                      (0, a.jsx)("li", {
                        children:
                          "Please note that We use \u201ccookies\u201d to help personalize Your online experience.",
                      }),
                      (0, a.jsx)("li", {
                        children:
                          "A cookie is a text file that is placed on Your hard drive by a web page server. Cookies cannot be used to run programs or deliver viruses to Your device. Cookies are uniquely assigned to You and can only be read by a web server in the domain that issued the cookie to You.",
                      }),
                      (0, a.jsx)("li", {
                        children:
                          "Cookies may be either persistent cookies or session cookies: a persistent cookie will be stored by a web browser and will remain valid until its set expiry date, unless deleted by the User before the expiry date; a session cookie, on the other hand, will expire at the end of the User session, when the web browser is closed.",
                      }),
                      (0, a.jsx)("li", {
                        children:
                          "Cookies do not typically contain any information that personally identifies a User, but personal information that We store about You may be linked to the information stored in and obtained from cookies.",
                      }),
                      (0, a.jsx)("li", {
                        children:
                          "We place cookies on certain pages of the Platform in order to help and analyze Our webpage flow, track User trends, measure promotional effectiveness, and promote trust and safety. We offer certain additional features on the Platform that are only available through the use of a \u201ccookie\u201d. We place both permanent and temporary cookies in Your device's hard drive.",
                      }),
                      (0, a.jsx)("li", {
                        children:
                          "Cookies on the Platform may be used to ensure a smooth User experience, perform analytics, and for showing relevant advertisements. Please note that third parties (such as Partners, Service Providers, analytical software providers, etc.) may also use cookies, over which We have no control.",
                      }),
                      (0, a.jsx)("li", {
                        children:
                          "Most web browsers automatically accept cookies but You can usually modify Your browser setting to disable, block or deactivate cookies if You so prefer. If You choose to decline cookies, You may not be able to access all or parts of Our Platform or to fully experience the interactive features of the Services or the websites You visit through Us.",
                      }),
                    ],
                  }),
                  (0, a.jsx)("h2", {
                    className: "text-2xl font-semibold",
                    children: "7. ADDITIONAL RIGHTS:",
                  }),
                  (0, a.jsxs)("ul", {
                    className: "list-disc list-inside space-y-2",
                    children: [
                      (0, a.jsxs)("div", {
                        children: [
                          (0, a.jsx)("p", {
                            className: "",
                            children:
                              "1. General Data Protection Regulation (GDPR) Data Protection Rights",
                          }),
                          (0, a.jsx)("p", {
                            className: "pl-4 mt-3",
                            children:
                              "I. The company invites You to be fully aware of all Your Personal Data protection rights if You are a resident where the GDPR is applicable. Every such User is entitled to the following:",
                          }),
                        ],
                      }),
                      (0, a.jsxs)("ul", {
                        className: "pl-10 list-disc list-inside space-y-2",
                        children: [
                          (0, a.jsx)("li", {
                            children:
                              "The right to access - The User has the right to request copies of Your personal data. The Company may charge additional costs for the same.",
                          }),
                          (0, a.jsx)("li", {
                            children:
                              "The right to rectification - The User has the right to request that We correct any information You believe is inaccurate. The consumer additionally has the right to request that We complete the information the consumer believes is incomplete.",
                          }),
                          (0, a.jsx)("li", {
                            children:
                              "The right to erasure - The User has the right to request that the Company erases Your personal data, under certain circumstances.",
                          }),
                          (0, a.jsx)("li", {
                            children:
                              "The right to restrict processing - The User has the right to request that the Company restricts the processing of Your personal data, under certain circumstances.",
                          }),
                          (0, a.jsx)("li", {
                            children:
                              "The right to object to processing - The User has the right to object to the Company's processing of Your personal data, under certain circumstances.",
                          }),
                          (0, a.jsx)("li", {
                            children:
                              "The right to data portability - The User has the right to request that the Company transfers the data that the Company has collected to another company/ organisation, or directly to You, under certain circumstances.",
                          }),
                          (0, a.jsxs)("li", {
                            children: [
                              "If the GDPR is applicable to You, You may make a request, and the Company will endeavour to respond to You within the timeline as per applicable law.",
                              (0, a.jsxs)("ul", {
                                className:
                                  "pl-10 list-disc list-inside space-y-2",
                                children: [
                                  (0, a.jsx)("li", {
                                    children:
                                      "Data Processing Agreements - Under the GDPR, \u201cData Controllers\u201d (i.e. entities that determine the purposes and means of processing data) are required to enter into agreements with other entities that process data on their behalf (called \u201cdata processors\u201d). Spheron offers its customers who are controllers of EU personal data. This includes Spheron's commitment to process Personal Data consistent with the instructions of the data controller.",
                                  }),
                                  (0, a.jsx)("li", {
                                    children:
                                      "Privacy Documentation - At its core, the GDPR is focused on transparency, fairness, and accountability. Accordingly, the law requires organizations to maintain documentation about their privacy practices and their decisions about how they handle individuals' personal data. Spheron shares the GDPR's commitment to these principles and has included within its ongoing GDPR compliance program documentation about its data collection and processing activities, and the various policies and guidelines it follows pursuant to the GDPR. You can learn more about how Spheron collects, uses, and discloses personal data by visiting Spheron's Privacy Policy.",
                                  }),
                                  (0, a.jsx)("li", {
                                    children:
                                      "Data Security - The GDPR requires organizations to use appropriate technical and organizational measures to protect the security, confidentiality, and integrity of personal data. This means that an independent third party has both validated our processes and practices with respect to these three trust services criteria and confirmed our ability to maintain compliance with the controls we have implemented. We have likewise implemented a variety of safeguards to protect the security of our platform, including encrypting web connections to protect data transmissions, replicating our databases to support reliability of the platform, and controlling access to our facilities and office network. Spheron also offers customers the ability to use additional security controls to further enhance the security of their teams' data.",
                                  }),
                                  (0, a.jsxs)("li", {
                                    children: [
                                      "California Consumer Privacy Act (CCPA)",
                                      (0, a.jsxs)("ul", {
                                        className:
                                          "pl-10 list-disc list-inside space-y-2",
                                        children: [
                                          (0, a.jsx)("li", {
                                            children:
                                              "The CCPA, which comes into force on January 1, 2020, is a law that provides California consumers certain rights with respect to their personal information. Specifically, the law requires that businesses subject to the statute grant consumers the ability to request access to and deletion of their data, and the ability to opt out of \u201csales\u201d of their personal information. The law also restricts how service providers that process personal information on behalf of a business may use that information.",
                                          }),
                                          (0, a.jsx)("li", {
                                            children:
                                              "Spheron does not sell its Consumers' or Users' personal information. Where a business subject to the CCPA has entered into a services or subscription agreement with Spheron, Spheron will also act as a service provider to that business. Specifically, Spheron will process such consumers' personal information only for the purposes set forth in the applicable agreement, and will cooperate with consumers to fulfill deletion or access requests.",
                                          }),
                                          (0, a.jsx)("li", {
                                            children:
                                              "Ongoing Compliance and Communication Both the GDPR and CCPA's requirements are comprehensive, but the law and regulatory guidance continues to evolve when it comes to privacy and data protection \u2013 and not just in the EU or the United States. As data protection authorities and regulators interpret and issue guidance on the GDPR, CCPA, and other currently existing data protection laws around the world and as countries pass new data protection laws, we will continue to follow these developments closely and evaluate our program for any changes or enhancements as needed.",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsxs)("p", {
                        children: [
                          "2. Family Educational Rights and Privacy Act",
                          (0, a.jsx)("p", {
                            className: "mt-4 pl-6",
                            children:
                              "The Family Educational Rights and Privacy Act (FERPA) is a federal law that requires academic institutions like colleges and universities to protect the privacy of students' educational records. Spheron enables our customers to comply with FERPA by ensuring personal data is kept secure and only used to provide our services as described in our Terms of Service and Privacy Policy. Spheron contractually commits to not disclosing customer data except as directed by the contracting academic institution, as allowed by our terms, or as required by law.",
                          }),
                        ],
                      }),
                      (0, a.jsxs)("p", {
                        children: [
                          "3. Act on the Protection of Personal Information",
                          (0, a.jsxs)("ul", {
                            className: "pl-6 list-disc list-inside space-y-2",
                            children: [
                              (0, a.jsx)("li", {
                                children:
                                  "The Act on the Protection of Personal Information (APPI) is the primary data protection law in Japan that regulates the protection of personal information. It applies to business operators handling personal information of individuals in Japan. The APPI has been amended since it was originally enacted in 2003, with the most recent amendments coming into effect April 1, 2022.",
                              }),
                              (0, a.jsx)("li", {
                                children:
                                  "Similarly, to the distinction between \u201cdata controllers\u201d and \u201cdata processors\u201d under the GDPR, the APPI makes a distinction between \u201cbusiness operators\u201d - or entities with the authority to control and make decisions about retained personal information (i.e. Spheron's customers) and third-party service providers handling personal information on behalf of a business operator (i.e. Spheron).",
                              }),
                              (0, a.jsx)("li", {
                                children:
                                  "The APPI also imposes restrictions on cross-border transfers of personal information outside of Japan. Personal information may be transferred to overseas recipients if there are contractual agreements in place that ensure compliance with data protection standards in Japan.",
                              }),
                              (0, a.jsx)("li", {
                                children:
                                  "Spheron is committed to processing and safeguarding personal information as required by the APPI and its amendments.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)("h2", {
                    className: "text-2xl font-semibold uppercase",
                    children: "8. DATA SECURITY AND INTEGRITY:",
                  }),
                  (0, a.jsx)("p", {
                    children:
                      "We take steps that are reasonably necessary to securely provide our Platform. We have put in place reasonably appropriate security measures designed to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. We limit access to personal data only to those employees, agents, contractors and the third parties who have a business need-to-know. We also have procedures in place to deal with any suspected data security breach. If required, We will notify You and any applicable regulator of a suspected data security breach. We also require those parties to whom We transfer Your personal information to provide acceptable standards of security. Notwithstanding, no Internet or email transmission is ever fully secure or error free. In particular, email sent to or from the Services may not be secure. Therefore, take special care in deciding what information You send to us via email. For any questions about the security of Your information, please contact privacy@spheron.com.",
                  }),
                  (0, a.jsx)("h2", {
                    className: "text-2xl font-semibold",
                    children:
                      "9. HOW LONG DO WE RETAIN YOUR PERSONAL INFORMATION?",
                  }),
                  (0, a.jsx)("p", {
                    children:
                      "We retain Personal Data about You for as long as You have an open account with Us and for [insert] months after You close Your account. In some cases We retain Personal Data for longer, if doing so is necessary to comply with Our legal obligations, resolve disputes or collect fees owed, or is otherwise permitted or required by applicable law, rule or regulation. Afterwards, We retain some information in a depersonalized or aggregated form but not in a way that would identify You personally.",
                  }),
                  (0, a.jsx)("h2", {
                    className: "text-2xl font-semibold",
                    children: "10. PERSONAL DATA OF CHILDREN:",
                  }),
                  (0, a.jsx)("p", {
                    children:
                      "We do not knowingly collect or solicit Personal Data from anyone under the age of 16 years. If You are under 16 years, please do not attempt to register for the Services or send any Personal Data about You to us. If We learn that We have collected Personal information from a child under age 16, We will delete that information as quickly as possible. If You believe that a child under 16 may have provided Us Personal Data, please contact us at info@spheron.network.",
                  }),
                  (0, a.jsx)("h2", {
                    className: "text-2xl font-semibold",
                    children: "11. CHANGE IN PRIVACY POLICY:",
                  }),
                  (0, a.jsxs)("ul", {
                    className: "list-disc list-inside space-y-2",
                    children: [
                      (0, a.jsx)("li", {
                        children:
                          "We reserve the absolute and unconditional right to update, modify, delete, or otherwise make changes to this Privacy Policy at any time. Any changes to this Privacy Policy will be posted to the Platform.",
                      }),
                      (0, a.jsx)("li", {
                        children:
                          "User can determine when this Privacy Policy was last modified by referring to the \u201cLast updated on\u201d legend at the beginning of this Privacy Policy. It shall be User responsibility to check this Privacy Policy periodically for changes.",
                      }),
                      (0, a.jsx)("li", {
                        children:
                          "Any changes to this Privacy Policy will take effect and be binding on User from the time of posting the changes to the Platform. If User continue to use any Services following any changes to this Privacy Policy, User will be deemed to have accepted the changes and the updated version of this Privacy Policy.",
                      }),
                      (0, a.jsx)("li", {
                        children:
                          "If User do not agree with the changes, please refrain from using the Platform. It is User responsibility to review this Privacy Policy (and the applicable conditions) from time to time.",
                      }),
                      (0, a.jsx)("li", {
                        children:
                          "If any provision of this Privacy Policy shall be held to be invalid, illegal, or unenforceable for any reason whatsoever, the validity, illegality, and enforceability of the remaining provision of this Privacy Policy shall not in any way be affected or impaired thereby.",
                      }),
                    ],
                  }),
                  (0, a.jsx)("h2", {
                    className: "text-2xl font-semibold uppercase",
                    children:
                      "12. HOW TO CHANGE YOUR COMMUNICATION PREFERANCE:",
                  }),
                  (0, a.jsxs)("p", {
                    children: [
                      'To keep Your information accurate, current, and complete, please contact Us as specified below. We will take reasonable steps to update any information in Our possession that You have previously submitted via the Platform. Note that You may also manage Your communications preferences and the receipt of any commercial communication by clicking the "unsubscribe" link included at the bottom of all emails from Spheron. You may also adjust Your preferences through Your account settings if You have a Spheron account, or send an email to',
                      " ",
                      (0, a.jsx)("a", {
                        href: "mailto:info@spheron.network",
                        className: "text-blue-600 hover:underline",
                        children: "info@spheron.network",
                      }),
                      ".",
                    ],
                  }),
                  (0, a.jsx)("h2", {
                    className: "text-2xl font-semibold uppercase",
                    children: "13. CONTACT US",
                  }),
                  (0, a.jsxs)("p", {
                    children: [
                      "If you have any questions or suggestions regarding this Privacy Policy, please contact us at",
                      " ",
                      (0, a.jsx)("a", {
                        href: "mailto:info@spheron.network",
                        className: "text-blue-600 hover:underline",
                        children: "info@spheron.network",
                      }),
                      ".",
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        d = o(5568);
      var h = function () {
        return (
          (0, s.useRouter)(),
          (0, r.useEffect)(function () {
            window.scrollY > 15 &&
              setTimeout(function () {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }, 100);
          }, []),
          (0, a.jsxs)("div", {
            className: "bg-black",
            children: [
              (0, a.jsx)(i.Z, {
                title: d.j9.title,
                desc: d.j9.desc,
                keyword: d.j9.keyword,
                icon: d.j9.icon,
                metaImage: d.j9.metaImage,
                url: d.j9.url,
              }),
              (0, a.jsxs)("main", {
                className: "rounded-md",
                children: [
                  (0, a.jsx)(l.Z, {}),
                  (0, a.jsx)("section", {
                    className:
                      "mx-auto mt-1 flex flex-col w-full max-w-[80rem] px-[1rem] md:px-[1.5rem] lg:px-[2rem]",
                    children: (0, a.jsx)(c, {}),
                  }),
                  (0, a.jsx)(n.Z, {}),
                ],
              }),
            ],
          })
        );
      };
    },
    1664: function (e, t, o) {
      e.exports = o(8418);
    },
  },
  function (e) {
    e.O(0, [9122, 2360, 9774, 2888, 179], function () {
      return (t = 3027), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
//# sourceMappingURL=privacy-7f84350260d861de.js.map
