(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5405],
  {
    8312: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return s(1870);
        },
      ]);
    },
    2701: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return l;
        },
      });
      var i = s(5893),
        l =
          (s(7294),
          function (e) {
            var t = e.text,
              s = void 0 === t ? "Coming Soon" : t,
              l = e.onClick,
              n = e.className,
              a = void 0 === n ? "" : n,
              r = e.innerClassname,
              o = void 0 === r ? "" : r,
              c = e.showIcon,
              d = void 0 === c || c;
            return (0, i.jsx)("div", {
              className: "learn_more_button_wrapper cursor-pointer ".concat(a),
              // onClick: l,
              role: l ? "button" : void 0,
              tabIndex: l ? 0 : void 0,
              onKeyPress: function (e) {
                !l || ("Enter" !== e.key && " " !== e.key) || l(e);
              },
              children: (0, i.jsxs)("div", {
                className: "learn_more_button ".concat(
                  o,
                  " font-sf-pro text-base text-black flex items-center justify-center w-full"
                ),
                children: [
                  s,
                  " ",
                  // d &&
                  //   (0, i.jsx)("div", {
                  //     className: "ml-8 scale-x-150",
                  //     children: "\u2192",
                  //   }),
                ],
              }),
            });
          });
    },
    1870: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return ce;
          },
        });
      var i = s(5893),
        l = s(7294),
        n = s(1284),
        a = {
          src: "//_next/static/media/fizz-poster.780793ad.svg",
          height: 321,
          width: 321,
        },
        r = s(9816),
        o = s(2701),
        c = function (e) {
          var t = e.classname,
            s = void 0 === t ? "" : t,
            l = e.customText,
            n = void 0 === l ? "Buy $SPON" : l,
            a = e.onClick,
            o =
              void 0 === a
                ? function () {
                    window.open("https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0xcomingsoon", "_blank");
                  }
                : a;
          return (0, i.jsx)("button", {
            className: "power-button ".concat(s),
            onClick: o,
            type: "button",
            children: (0, i.jsxs)("div", {
              className: "power-button-content",
              children: [
                (0, i.jsx)("div", {
                  className: "icon-container",
                  children: (0, i.jsxs)("svg", {
                    className: "power-icon",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 44,
                    height: 22,
                    viewBox: "0 0 44 22",
                    fill: "none",
                    children: [
                      (0, i.jsx)("path", {
                        className: "bracket-left",
                        d: "M4.08193 0.49618L0.79834 0.495605V20.7911H4.08194",
                        stroke: "white",
                      }),
                      (0, i.jsx)("path", {
                        className: "bracket-right",
                        d: "M39.3004 0.49618L42.584 0.495605V20.7911H39.3004",
                        stroke: "white",
                      }),
                      (0, i.jsx)("path", {
                        className: "line-left",
                        d: "M7.04395 10.6753H13.7285",
                        stroke: "white",
                      }),
                      (0, i.jsx)("path", {
                        className: "line-top",
                        d: "M21.6025 1.69531L21.5962 4.80719",
                        stroke: "white",
                      }),
                      (0, i.jsx)("path", {
                        className: "line-bottom",
                        d: "M21.6025 16.5435L21.5962 19.6553",
                        stroke: "white",
                      }),
                      (0, i.jsx)("path", {
                        className: "line-right",
                        d: "M29.6543 10.6753H36.3389",
                        stroke: "white",
                      }),
                      (0, i.jsx)("circle", {
                        className: "center-circle",
                        cx: "21.6484",
                        cy: "10.6753",
                        r: "3.16992",
                        stroke: "white",
                      }),
                    ],
                  }),
                }),
                (0, i.jsx)("span", {
                  className: "font-sf-pro font-500 tracking-wider",
                  children: n,
                }),
              ],
            }),
          });
        },
        d = function () {
          return (0, i.jsx)("div", {
            className:
              "fizz-block p-4 border border-[#ffffff1a] rounded-[2px] bg-[#111111] flex-1",
            children: (0, i.jsxs)("div", {
              className:
                "fizz-block-content flex flex-col gap-y-10 items-start",
              children: [
                (0, i.jsxs)("div", {
                  className: "flex flex-row gap-x-3 items-start",
                  children: [
                    (0, i.jsx)("div", {
                      className: "fizz-block-icon",
                      children: (0, i.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 25,
                        height: 25,
                        viewBox: "0 0 25 25",
                        fill: "none",
                        children: [
                          (0, i.jsx)("circle", {
                            cx: "12.4355",
                            cy: "12.2061",
                            r: "11.5",
                            stroke: "white",
                          }),
                          (0, i.jsx)("path", {
                            d: "M11.6184 11.1358L9.04169 7.09559C9.00664 7.04063 8.99444 6.97414 9.0077 6.91031L9.64519 3.84174C9.66276 3.75716 9.72275 3.68764 9.80386 3.65789L10.653 3.34637C10.7928 3.29508 10.9462 3.37664 10.9818 3.52124L12.6842 10.4266C12.707 10.5191 12.6753 10.6165 12.6024 10.6778L11.9901 11.1927C11.8744 11.29 11.6996 11.2632 11.6184 11.1358Z",
                            fill: "white",
                          }),
                          (0, i.jsx)("path", {
                            d: "M13.2384 10.7484L16.6863 7.42057C16.7332 7.37529 16.7959 7.35013 16.8611 7.35045L19.9951 7.36573C20.0815 7.36615 20.1616 7.41114 20.2069 7.48472L20.6808 8.25506C20.7589 8.3819 20.7094 8.54842 20.5748 8.61208L14.1451 11.6521C14.059 11.6928 13.9572 11.6811 13.8827 11.6218L13.2564 11.124C13.1381 11.03 13.1296 10.8534 13.2384 10.7484Z",
                            fill: "white",
                          }),
                          (0, i.jsx)("path", {
                            d: "M14.3276 12.1052L18.8998 13.5396C18.962 13.5591 19.0141 13.6022 19.045 13.6596L20.5318 16.4186C20.5727 16.4946 20.5716 16.5864 20.5286 16.6614L20.0791 17.4463C20.0051 17.5755 19.8352 17.6118 19.7149 17.5241L13.9681 13.3339C13.8912 13.2778 13.8528 13.1829 13.8691 13.089L14.0064 12.3009C14.0324 12.152 14.1834 12.06 14.3276 12.1052Z",
                            fill: "white",
                          }),
                          (0, i.jsx)("path", {
                            d: "M13.3498 13.3599L13.2393 18.1505C13.2378 18.2157 13.2109 18.2777 13.1644 18.3234L10.9257 20.5167C10.864 20.5772 10.7754 20.6015 10.6915 20.5811L9.81279 20.3668C9.6681 20.3315 9.58615 20.1783 9.63709 20.0384L12.0696 13.3552C12.1022 13.2657 12.1828 13.2025 12.2775 13.1922L13.0728 13.1056C13.223 13.0892 13.3533 13.2088 13.3498 13.3599Z",
                            fill: "white",
                          }),
                          (0, i.jsx)("path", {
                            d: "M11.775 12.9349L7.1969 14.3505C7.13462 14.3698 7.06728 14.3639 7.00923 14.3343L4.21878 12.9074C4.14186 12.8681 4.0907 12.7918 4.08347 12.7057L4.00779 11.8044C3.99532 11.656 4.11456 11.5297 4.26344 11.5336L11.3731 11.7194C11.4683 11.7219 11.5539 11.7783 11.5937 11.8648L11.9282 12.5915C11.9914 12.7288 11.9193 12.8903 11.775 12.9349Z",
                            fill: "white",
                          }),
                        ],
                      }),
                    }),
                    (0, i.jsx)("div", {
                      className:
                        "fizz-block-title font-ocr font-400 lg:text-3xl text-xl leading-normal text-left uppercase",
                      children: "Fizz",
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: "h-[320px] w-full",
                  children: (0, i.jsxs)("video", {
                    poster: a,
                    src: "/videos/fizz-block-1.mp4",
                    autoPlay: !0,
                    muted: !0,
                    loop: !0,
                    playsInline: !0,
                    preload: "auto",
                    className: "w-full h-full object-cover mix-blend-screen",
                    children: [
                      (0, i.jsx)("source", {
                        src: "/videos/fizz-block-1.mp4",
                        type: "video/mp4",
                      }),
                      "Your browser does not support the video tag.",
                    ],
                  }),
                }),
                (0, i.jsxs)("div", {
                  className: "flex flex-row gap-x-4 items-center",
                  children: [
                    (0, i.jsx)("div", {
                      className: "flex flex-row items-center justify-center",
                      children: (0, i.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 27,
                        height: 26,
                        viewBox: "0 0 27 26",
                        fill: "none",
                        children: [
                          (0, i.jsx)("path", {
                            d: "M10.266 8.14115C7.35038 9.7683 6.2709 13.495 7.90243 16.3209C9.53396 19.1468 12.9198 20.6691 16.3187 18.7703C19.8757 16.7832 20.8995 10.3003 15.4468 8.14022",
                            stroke: "white",
                            strokeWidth: "1.5",
                          }),
                          (0, i.jsx)("path", {
                            d: "M12.9443 10.8179L12.9443 5.70459",
                            stroke: "white",
                            strokeWidth: "1.5",
                          }),
                          (0, i.jsx)("rect", {
                            x: "0.935547",
                            y: "0.786133",
                            width: "24.6348",
                            height: "24.6348",
                            rx: "3.5",
                            stroke: "white",
                          }),
                        ],
                      }),
                    }),
                    (0, i.jsx)("span", {
                      className:
                        "font-ocr font-400 lg:text-2xl text-xl mt-1 text-left uppercase",
                      children: "RUN NODE",
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className:
                    "font-sf-pro font-400 lg:text-base text-sm leading-normal text-left text-[#ffffff99]",
                  children:
                    "Consumer-grade nodes from gaming rigs and personal computers contributing idle GPU power to the network.",
                }),
                (0, i.jsx)("div", {
                  className: "lg:w-[215px] w-full flex flex-col items-center",
                  children: (0, i.jsx)(c, {
                    onClick: function () {
                      window.open("https://fizz.spheronai.network", "_blank");
                    },
                  }),
                }),
              ],
            }),
          });
        },
        h = function (e) {
          var t = e.title,
            s = e.description,
            n = e.icon,
            a = e.features,
            r = e.onMouseEnter,
            c = e.onMouseLeave,
            d = e.active,
            h = e.learnMoreLink,
            x = void 0 === h ? "" : h,
            u = (0, l.useState)(""),
            m = u[0],
            f = u[1];
          return (
            (0, l.useEffect)(
              function () {
                var e;
                if (d) {
                  f("");
                  var t = 0,
                    i = function () {
                      f(s.slice(0, t)),
                        t <= s.length &&
                          (e = setTimeout(function () {
                            t++, i();
                          }, 12));
                    };
                  i();
                } else f("");
                return function () {
                  return clearTimeout(e);
                };
              },
              [d, s]
            ),
            (0, i.jsx)("div", {
              className: "other-block flex-1",
              onMouseEnter: r,
              onMouseLeave: c,
              role: "button",
              children: (0, i.jsxs)("div", {
                className: ""
                  .concat(
                    x ? "h-[290px] lg:h-[240px]" : "h-[240px]",
                    " other-block-content flex flex-col justify-between transition-colors duration-300 "
                  )
                  .concat(d ? "!bg-[#0059FF]" : ""),
                children: [
                  (0, i.jsxs)("div", {
                    className:
                      "flex flex-col lg:flex-row justify-between lg:p-5 lg:pr-8 p-4 gap-4 lg:gap-8 h-full",
                    children: [
                      (0, i.jsxs)("div", {
                        className:
                          "flex flex-col lg:justify-between justify-start gap-2",
                        children: [
                          (0, i.jsxs)("div", {
                            className: "flex flex-row gap-x-3 items-center",
                            children: [
                              (0, i.jsx)("div", { children: n }),
                              (0, i.jsx)("div", {
                                className:
                                  "pt-1.5 font-ocr font-400 lg:text-2xl text-xl uppercase h-min flex items-center",
                                children: t,
                              }),
                            ],
                          }),
                          (0, i.jsx)("div", {
                            className: "self-start",
                            children: (0, i.jsxs)("div", {
                              className:
                                "font-sf-pro font-400 lg:text-base text-sm lg:leading-[24px] text-left transition-all duration-500 overflow-hidden ".concat(
                                  d
                                    ? "max-h-max opacity-100 visible"
                                    : "max-h-0 opacity-0 invisible"
                                ),
                              children: [
                                m,
                                (0, i.jsx)("span", {
                                  className:
                                    "inline-block w-2 align-middle animate-pulse",
                                  children: d && m.length < s.length ? "|" : "",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      !!x &&
                        (0, i.jsx)("div", {
                          className:
                            "h-full flex flex-col items-center justify-end lg:justify-start",
                          children: (0, i.jsx)(o.Z, {
                            onClick: function () {
                              return window.open(x, "_blank");
                            },
                            className: "h-min",
                            innerClassname: d ? "" : "learn_more_button_dark",
                          }),
                        }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className: "w-full flex flex-col lg:flex-row",
                    children: a.map(function (e) {
                      return (0,
                      i.jsx)("div", { className: "lg:w-1/3 w-full lg:h-[112px] h-[32px] font-sf-pro font-400 lg:text-base text-xs leading-[24px] text-center text-[#ffffff99] border border-[#ffffff1a] flex flex-row lg:items-end items-center justify-start p-4", children: e }, e);
                    }),
                  }),
                ],
              }),
            })
          );
        },
        x = function () {
          var e = (0, l.useState)(-1),
            t = e[0],
            s = e[1];
          return (0, i.jsxs)("div", {
            className: "building-blocks text-white",
            children: [
              (0, i.jsxs)("h1", {
                className:
                  "building-blocks-title font-ocr font-400 lg:text-[72px] text-4xl leading-normal text-left uppercase",
                children: [
                  "Spheron's",
                  (0, i.jsx)("br", {}),
                  " Building Blocks",
                ],
              }),
              (0, i.jsxs)("div", {
                className:
                  "building-blocks-content flex lg:flex-row flex-col gap-y-4 lg:gap-x-4 mt-10 items-stretch",
                children: [
                  (0, i.jsx)("div", {
                    className: "lg:w-1/3 w-full",
                    children: (0, i.jsx)("div", {
                      className: "h-full flex flex-col",
                      children: (0, i.jsx)(d, {}),
                    }),
                  }),
                  (0, i.jsxs)("div", {
                    className:
                      "lg:w-2/3 w-full flex flex-col justify-between h-full gap-y-4",
                    children: [
                      (0, i.jsx)(h, {
                        title: "Provider",
                        learnMoreLink: r.rC.PROVIDER_APP,
                        description:
                          "Enterprise-grade data centers and mining farms offering high-performance compute resources.",
                        icon: (0, i.jsxs)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: 21,
                          height: 19,
                          viewBox: "0 0 21 19",
                          fill: "none",
                          children: [
                            (0, i.jsx)("path", {
                              d: "M0.126953 1.68555C0.126953 1.13326 0.574668 0.685547 1.12695 0.685547H19.127C19.6792 0.685547 20.127 1.13326 20.127 1.68555V5.04661C20.127 5.5989 19.6792 6.04661 19.127 6.04661H1.12695C0.574669 6.04661 0.126953 5.59889 0.126953 5.04661V1.68555Z",
                              fill: "white",
                            }),
                            (0, i.jsx)("path", {
                              d: "M0.126953 8.11865C0.126953 7.56637 0.574668 7.11865 1.12695 7.11865H19.127C19.6792 7.11865 20.127 7.56637 20.127 8.11865V11.4797C20.127 12.032 19.6792 12.4797 19.127 12.4797H1.12695C0.574669 12.4797 0.126953 12.032 0.126953 11.4797V8.11865Z",
                              fill: "white",
                            }),
                            (0, i.jsx)("path", {
                              d: "M0.126953 14.5532C0.126953 14.0009 0.574668 13.5532 1.12695 13.5532H19.127C19.6792 13.5532 20.127 14.0009 20.127 14.5532V17.9143C20.127 18.4666 19.6792 18.9143 19.127 18.9143H1.12695C0.574669 18.9143 0.126953 18.4666 0.126953 17.9143V14.5532Z",
                              fill: "white",
                            }),
                            (0, i.jsx)("path", {
                              d: "M1.93066 3.36588C1.93066 3.08587 2.15765 2.85889 2.43766 2.85889H3.30459C3.58459 2.85889 3.81158 3.08587 3.81158 3.36588C3.81158 3.64588 3.58459 3.87287 3.30459 3.87287H2.43766C2.15765 3.87287 1.93066 3.64588 1.93066 3.36588Z",
                              fill: "#0059FF",
                            }),
                            (0, i.jsx)("path", {
                              d: "M1.93066 9.80045C1.93066 9.52044 2.15765 9.29346 2.43766 9.29346H3.30459C3.58459 9.29346 3.81158 9.52044 3.81158 9.80045C3.81158 10.0805 3.58459 10.3074 3.30459 10.3074H2.43766C2.15765 10.3074 1.93066 10.0805 1.93066 9.80045Z",
                              fill: "#0059FF",
                            }),
                            (0, i.jsx)("path", {
                              d: "M1.93066 16.2345C1.93066 15.9545 2.15765 15.7275 2.43766 15.7275H3.30459C3.58459 15.7275 3.81158 15.9545 3.81158 16.2345C3.81158 16.5145 3.58459 16.7415 3.30459 16.7415H2.43766C2.15765 16.7415 1.93066 16.5145 1.93066 16.2345Z",
                              fill: "#0059FF",
                            }),
                          ],
                        }),
                        features: [
                          "Data Center Integration",
                          "High-Performance GPUs",
                          "Scalable Infrastructure",
                        ],
                        onMouseEnter: function () {
                          return s(0);
                        },
                        onMouseLeave: function () {
                          return s(-1);
                        },
                        active: 0 === t,
                      }),
                      (0, i.jsx)(h, {
                        title: "Slark Nodes",
                        description:
                          "Validators & auditors ensuring network integrity through continuous monitoring & verification.",
                        icon: (0, i.jsxs)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: 25,
                          height: 17,
                          viewBox: "0 0 25 17",
                          fill: "none",
                          children: [
                            (0, i.jsx)("path", {
                              d: "M2.51465 15.0752C2.51465 14.7991 2.73851 14.5752 3.01465 14.5752H22.219C22.4951 14.5752 22.719 14.7991 22.719 15.0752V16.0812C22.719 16.3573 22.4951 16.5812 22.219 16.5812H3.01465C2.73851 16.5812 2.51465 16.3573 2.51465 16.0812V15.0752Z",
                              fill: "white",
                            }),
                            (0, i.jsx)("path", {
                              d: "M4.76172 6.57422C4.76172 6.29808 4.98558 6.07422 5.26172 6.07422H6.66172C6.93786 6.07422 7.16172 6.29808 7.16172 6.57422V13.2823C7.16172 13.5584 6.93786 13.7823 6.66172 13.7823H5.26172C4.98558 13.7823 4.76172 13.5584 4.76172 13.2823V6.57422Z",
                              fill: "white",
                            }),
                            (0, i.jsx)("path", {
                              d: "M13.191 0.188596C13.3189 0.136799 13.4626 0.140178 13.5879 0.197933L22.5465 4.32585C23.0336 4.55029 22.8736 5.27996 22.3373 5.27996H3.18421C2.63487 5.27996 2.48737 4.52269 2.99655 4.31652L13.191 0.188596Z",
                              fill: "white",
                            }),
                            (0, i.jsx)("path", {
                              d: "M9.17188 6.57422C9.17188 6.29808 9.39573 6.07422 9.67187 6.07422H11.0719C11.348 6.07422 11.5719 6.29808 11.5719 6.57422V13.2823C11.5719 13.5584 11.348 13.7823 11.0719 13.7823H9.67187C9.39573 13.7823 9.17188 13.5584 9.17188 13.2823V6.57422Z",
                              fill: "white",
                            }),
                            (0, i.jsx)("path", {
                              d: "M13.5859 6.57422C13.5859 6.29808 13.8098 6.07422 14.0859 6.07422H15.4859C15.7621 6.07422 15.9859 6.29808 15.9859 6.57422V13.2823C15.9859 13.5584 15.7621 13.7823 15.4859 13.7823H14.0859C13.8098 13.7823 13.5859 13.5584 13.5859 13.2823V6.57422Z",
                              fill: "white",
                            }),
                            (0, i.jsx)("path", {
                              d: "M17.999 6.57422C17.999 6.29808 18.2229 6.07422 18.499 6.07422H19.899C20.1752 6.07422 20.399 6.29808 20.399 6.57422V13.2823C20.399 13.5584 20.1752 13.7823 19.899 13.7823H18.499C18.2229 13.7823 17.999 13.5584 17.999 13.2823V6.57422Z",
                              fill: "white",
                            }),
                          ],
                        }),
                        features: [
                          "Network Validation",
                          "Quality Assurance",
                          "Fraud Prevention",
                        ],
                        onMouseEnter: function () {
                          return s(1);
                        },
                        onMouseLeave: function () {
                          return s(-1);
                        },
                        active: 1 === t,
                      }),
                      (0, i.jsx)(h, {
                        title: "MATCHMAKER",
                        description:
                          "Smart resource allocation and inventory management for optimal performance.",
                        icon: (0, i.jsxs)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: 21,
                          height: 13,
                          viewBox: "0 0 21 13",
                          fill: "none",
                          children: [
                            (0, i.jsx)("path", {
                              d: "M5.70772 1.1642L6.4464 0.617488C6.67562 0.447829 6.95327 0.356257 7.23846 0.356257H13.9204C14.2684 0.356257 14.6103 0.447049 14.9125 0.619662L16.0283 1.25712C16.4168 1.47905 16.9078 1.39658 17.2025 1.05991C17.5432 0.670642 18.1407 0.626633 18.4892 1.0089C21.943 4.79709 20.1029 10.4356 18.3063 11.7255C16.7011 12.878 15.802 10.3457 14.9724 9.66255C14.1959 9.02305 13.7525 9.13927 10.6619 9.13927C7.57126 9.13927 6.14031 8.9306 5.06678 10.6385C3.99326 12.3463 2.98384 14.3605 0.885592 8.35853C-0.643769 3.98384 2.0585 1.49107 4.00271 0.577936C4.30074 0.437962 4.64277 0.59476 4.76669 0.899813C4.91874 1.27413 5.38298 1.40456 5.70772 1.1642Z",
                              fill: "white",
                            }),
                            (0, i.jsx)("circle", {
                              cx: "14.7017",
                              cy: "3.9117",
                              r: "1.01326",
                              fill: "#0D0D0D",
                            }),
                            (0, i.jsx)("circle", {
                              cx: "15.898",
                              cy: "6.37361",
                              r: "1.01326",
                              fill: "#0D0D0D",
                            }),
                            (0, i.jsx)("circle", {
                              cx: "13.2877",
                              cy: "6.37361",
                              r: "1.01326",
                              fill: "#0D0D0D",
                            }),
                            (0, i.jsx)("path", {
                              d: "M5.15723 3.9293C5.15723 3.84645 5.22438 3.7793 5.30723 3.7793H5.98978C6.07263 3.7793 6.13978 3.84645 6.13978 3.9293V5.24449C6.13978 5.28889 6.12011 5.33101 6.08606 5.35951L5.74734 5.64302C5.6919 5.68943 5.61125 5.68968 5.55552 5.64363L5.21168 5.35954C5.1772 5.33104 5.15723 5.28864 5.15723 5.2439V3.9293Z",
                              fill: "#0D0D0D",
                            }),
                            (0, i.jsx)("path", {
                              d: "M7.65273 5.48926C7.73558 5.48926 7.80273 5.55642 7.80273 5.63926L7.80273 6.32182C7.80273 6.40466 7.73558 6.47182 7.65273 6.47182L6.33376 6.47182C6.29155 6.47182 6.25129 6.45403 6.22286 6.42282L5.86989 6.0353C5.81302 5.97286 5.81889 5.87579 5.88288 5.82066L6.22528 5.52562C6.25251 5.50216 6.28726 5.48926 6.3232 5.48926L7.65273 5.48926Z",
                              fill: "#0D0D0D",
                            }),
                            (0, i.jsx)("path", {
                              d: "M3.63047 5.48926C3.54763 5.48926 3.48047 5.55642 3.48047 5.63926L3.48047 6.32182C3.48047 6.40466 3.54763 6.47182 3.63047 6.47182L4.94945 6.47182C4.99166 6.47182 5.03192 6.45403 5.06034 6.42282L5.41331 6.0353C5.47018 5.97286 5.46431 5.87579 5.40033 5.82066L5.05792 5.52562C5.03069 5.50216 4.99595 5.48926 4.96001 5.48926L3.63047 5.48926Z",
                              fill: "#0D0D0D",
                            }),
                          ],
                        }),
                        features: [
                          "Smart Resource Allocation",
                          "Optimal Performance",
                          "Smart Inventory Manager",
                        ],
                        onMouseEnter: function () {
                          return s(2);
                        },
                        onMouseLeave: function () {
                          return s(-1);
                        },
                        active: 2 === t,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        u = s(5675),
        m = s.n(u),
        f = {
          src: "//_next/static/media/developer-first-image.33da573b.png",
          height: 1501,
          width: 1080,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAGFBMVEULFhMCAAEgGhsECwkcCw4nJiETBgcUDA5WbdFtAAAAAXRSTlP+GuMHfQAAAAlwSFlzAAAhOAAAITgBRZYxYAAAACtJREFUeJwVyMkNADAIBLHZA9J/xxEvSyYEQMoQJMhhPEf96LpdVq9zKdkfCtIAdsfNPgIAAAAASUVORK5CYII=",
          blurWidth: 6,
          blurHeight: 8,
        },
        g = function (e) {
          var t = e.classname,
            s = void 0 === t ? "" : t,
            l = e.onClick,
            n =
              void 0 === l
                ? function () {
                    window.open(r.rC.DOCS, "_blank");
                  }
                : l,
            a = e.customText,
            o = void 0 === a ? "Documentation" : a;
          return (0, i.jsx)("button", {
            className: "start-building-button-wrapper ".concat(s),
            onClick: n,
            children: (0, i.jsx)("div", {
              className: "start-building-button",
              children: (0, i.jsxs)("div", {
                className: "button-content",
                children: [
                  (0, i.jsx)("div", {
                    className: "icon-container",
                    children: (0, i.jsxs)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      className: "animated-svg",
                      viewBox: "0 0 32 27",
                      fill: "none",
                      children: [
                        (0, i.jsx)("path", {
                          className: "bracket-left",
                          d: "M3.30518 0.680664L0.650879 3.33496V23.6357L3.30518 26.29",
                          stroke: "#D9D9D9",
                        }),
                        (0, i.jsx)("path", {
                          className: "bracket-right",
                          d: "M27.9678 0.680664L30.6221 3.33496V23.6357L27.9678 26.29",
                          stroke: "#D9D9D9",
                        }),
                        (0, i.jsx)("path", {
                          className: "line",
                          d: "M6.23486 7.11719H25.0386",
                          stroke: "#D9D9D9",
                        }),
                        (0, i.jsx)("path", {
                          className: "line",
                          d: "M6.23486 12.0278H25.0386",
                          stroke: "#D9D9D9",
                        }),
                        (0, i.jsx)("path", {
                          className: "line",
                          d: "M6.23486 16.939H25.0386",
                          stroke: "#D9D9D9",
                        }),
                        (0, i.jsx)("path", {
                          className: "line",
                          d: "M6.23486 21.8496H25.0386",
                          stroke: "#D9D9D9",
                        }),
                      ],
                    }),
                  }),
                  (0, i.jsx)("span", {
                    className: "font-sf-pro font-500 text-base tracking-wider",
                    children: o,
                  }),
                ],
              }),
            }),
          });
        },
        p = function () {
          return (0, i.jsxs)("section", {
            className:
              "relative flex flex-col gap-28 lg:gap-2 border border-[#737373] py-16 p-4 lg:p-12 lg:pr-0",
            children: [
              (0, i.jsxs)("div", {
                className: "flex flex-row gap-8",
                children: [
                  (0, i.jsxs)("div", {
                    className:
                      "hero-title-section inline-flex flex-col gap-10 items-stretch lg:basis-8/12",
                    children: [
                      (0, i.jsx)("h1", {
                        className:
                          "font-ocr text-2xl lg:text-[42px] lg:leading-15 text-white z-10",
                        children: "DEVELOPER-FIRST, MARKETPLACE AS A SERVICE",
                      }),
                      (0, i.jsxs)("div", {
                        className: "flex flex-row gap-2 relative",
                        children: [
                          (0, i.jsxs)("div", {
                            className: "relative w-px h-48 lg:h-40 -top-4",
                            children: [
                              (0, i.jsx)("div", {
                                className:
                                  "absolute inset-y-0 left-0 w-px bg-gray-500",
                              }),
                              (0, i.jsx)("div", {
                                className:
                                  "absolute top-10 left-0 h-px w-12 lg:w-16 bg-gray-500",
                              }),
                              (0, i.jsx)("div", {
                                className:
                                  "absolute bottom-0 left-0 h-px w-12 lg:w-16 bg-gray-500",
                              }),
                            ],
                          }),
                          (0, i.jsxs)("div", {
                            className: "text-sm lg:text-lg text-white",
                            children: [
                              (0, i.jsx)("span", {
                                className:
                                  "absolute left-16 lg:left-20 block whitespace-normal break-words z-10 w-[80%] lg:w-[85%]",
                                children:
                                  "Spheron is a permissionless network of high-performance nodes \u2014 from data centers to personal devices \u2014 purpose-built for developers. It offers a scalable, decentralized alternative to traditional cloud compute, optimized for AI, ML, and next-gen workloads.",
                              }),
                              (0, i.jsx)("span", {
                                className:
                                  "absolute left-16 lg:left-20 top-[155px] lg:top-[120px] block w-[80%] whitespace-normal break-words lg:w-[85%]",
                                children:
                                  "Whether you're building your own Node-as-a-Service (NaaS) platform or launching a custom compute marketplace, Spheron gives you the infrastructure and tools to go from zero to launch \u2014 fast, flexible, and on-chain.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className:
                      "lg:basis-[29%] lg:ml-8 absolute right-0 top-8 lg:static w-[120px] lg:w-full lg:h-[400px]",
                    children: (0, i.jsx)(m(), {
                      src: f,
                      alt: "globe-gpu",
                      className: "w-full h-full min-w-full",
                    }),
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className:
                  "flex flex-col-reverse lg:flex-row lg:pl-20 gap-4 items-center",
                children: [
                  (0, i.jsx)("div", {
                    className: "navbar-rent-now grow-0 relative h-max",
                    children: (0, i.jsx)(c, {
                      customText: "SDK Docs",
                      onClick: function () {
                        window.open(
                          "https://docs.spheronai.network",
                          "_blank"
                        );
                      },
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className: "navbar-rent-now grow-0 relative h-max",
                    children: (0, i.jsx)(g, {
                      customText: "CLI Docs",
                      onClick: function () {
                        window.open(
                          "https://docs.spheronai.network",
                          "_blank"
                        );
                      },
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        w = function (e) {
          var t,
            s = e.videos,
            n = (0, l.useState)(0),
            a = n[0],
            r = n[1],
            o = (0, l.useRef)(null);
          return (
            (0, l.useEffect)(
              function () {
                var e = o.current;
                e &&
                  ((e.muted = !0),
                  (e.playsInline = !0),
                  e.play().catch(function (e) {
                    console.warn("Autoplay prevented:", e);
                  }));
              },
              [a]
            ),
            (0, i.jsxs)("div", {
              className:
                "relative w-full h-[160px] lg:h-[400px] bg-gray-900 rounded-lg overflow-hidden",
              children: [
                (0, i.jsx)("div", {
                  className: "w-full h-full",
                  children: (0, i.jsxs)(
                    "video",
                    {
                      ref: o,
                      className: "w-full h-full object-cover",
                      autoPlay: !0,
                      muted: !0,
                      preload: "auto",
                      poster:
                        null === (t = s[a]) || void 0 === t
                          ? void 0
                          : t.thumbnail,
                      loop: !0,
                      children: [
                        (0, i.jsx)("source", {
                          src: s[a].src,
                          type: "video/mp4",
                        }),
                        "Your browser does not support the video tag.",
                      ],
                    },
                    s[a].id
                  ),
                }),
                (0, i.jsxs)("div", {
                  className:
                    "absolute top-1 left-1 flex items-center gap-x-12 z-10 bg-white bg-opacity-10 backdrop-blur-sm p-2",
                  children: [
                    (0, i.jsx)("button", {
                      onClick: function () {
                        r(function (e) {
                          return 0 === e ? s.length - 1 : e - 1;
                        });
                      },
                      className:
                        "w-3.5 h-3.5 text-white flex items-center justify-center",
                      "aria-label": "Previous video",
                      children: (0, i.jsx)("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: (0, i.jsx)("polyline", {
                          points: "15,18 9,12 15,6",
                        }),
                      }),
                    }),
                    (0, i.jsxs)("div", {
                      className: "text-base text-white",
                      children: [a + 1, " / ", s.length],
                    }),
                    (0, i.jsx)("button", {
                      onClick: function () {
                        r(function (e) {
                          return e === s.length - 1 ? 0 : e + 1;
                        });
                      },
                      className:
                        "w-3.5 h-3.5 text-white flex items-center justify-center",
                      "aria-label": "Next video",
                      children: (0, i.jsx)("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: (0, i.jsx)("polyline", {
                          points: "9,18 15,12 9,6",
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            })
          );
        },
        v = {
          src: "//_next/static/media/join-globe.686a9006.svg",
          height: 25,
          width: 25,
        },
        j = function (e) {
          var t = e.className,
            s = void 0 === t ? "" : t,
            l = e.onClick,
            n =
              void 0 === l
                ? function () {
                    return window.open(r.rC.LINKTREE, "_blank");
                  }
                : l;
          return (0, i.jsx)("button", {
            type: "button",
            onClick: n,
            className: "rent-now-button group ".concat(s),
            children: (0, i.jsxs)("div", {
              className: "button-content flex items-center gap-2",
              children: [
                (0, i.jsx)("div", {
                  className:
                    " transform transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:rotate-90 flex items-center ",
                  children: (0, i.jsx)(m(), { src: v, alt: "join-globe" }),
                }),
                (0, i.jsx)("span", {
                  className: "font-sf-pro font-[500] tracking-wider",
                  children: "Join Community",
                }),
              ],
            }),
          });
        },
        b = function () {
          return (0, i.jsxs)("div", {
            className: "flex flex-col gap-y-14 lg:gap-y-10 mb-10 lg:mb-4",
            children: [
              (0, i.jsx)("h1", {
                className:
                  "text-left font-ocr text-4xl lg:text-[42px] font-normal text-white",
                children: "Explore Our Community",
              }),
              (0, i.jsxs)("div", {
                className: "items-center justify-start gap-x-4 hidden lg:flex",
                children: [
                  (0, i.jsx)(g, {}),
                  (0, i.jsx)("div", {
                    className: "w-[220px] grow-0 relative h-max",
                    children: (0, i.jsx)(j, {}),
                  }),
                ],
              }),
              (0, i.jsx)(w, {
                videos: [
                  {
                    id: 1,
                    title: "Getting Started with Spheron",
                    src: "/videos/video-1.mp4",
                    thumbnail: "/videos/community-1.png",
                  },
                  {
                    id: 2,
                    title: "Deploy Your First App",
                    src: "/videos/video-2.mp4",
                    thumbnail: "/videos/community-2.png",
                  },
                  {
                    id: 3,
                    title: "Advanced Deployment Features",
                    src: "/videos/video-3.mp4",
                    thumbnail: "/videos/community-3.png",
                  },
                ],
              }),
              (0, i.jsxs)("div", {
                className: "flex flex-col gap-y-4 lg:hidden items-center",
                children: [
                  (0, i.jsx)("div", {
                    className: "w-[220px] grow-0 relative h-max",
                    children: (0, i.jsx)(j, {}),
                  }),
                  (0, i.jsx)(g, {}),
                ],
              }),
            ],
          });
        },
        N = s(7072),
        y = {
          src: "/_next/static/media/mac-chips.faeed0be.svg",
          height: 18,
          width: 22,
        },
        k = {
          src: "/_next/static/media/tflops.3b53f0dc.svg",
          height: 21,
          width: 21,
        },
        C = {
          src: "/_next/static/media/total-leased.36153c8c.svg",
          height: 21,
          width: 21,
        },
        L = {
          src: "/_next/static/media/hero-section-image.1f87e845.svg",
          height: 561,
          width: 561,
        },
        A = {
          src: "/_next/static/media/hero-section-title.8d4ff2f2.svg",
          height: 160,
          width: 567,
        },
        M = s(6451),
        _ = s(6338),
        H = function (e) {
          var t = e.cardData,
            s = (0, l.useState)(0),
            n = s[0],
            a = s[1];
          (0, l.useEffect)(function () {
            var e = 0,
              t = setInterval(function () {
                e++, a(e), e >= 5 && clearInterval(t);
              }, 200);
            return function () {
              return clearInterval(t);
            };
          }, []);
          var r = [
            {
              id: 1,
              title: "GPU + CPU",
              icon: y,
              value: (0, M.uf)(t.totalChips),
            },
            {
              id: 2,
              title: "Total T-Flops",
              icon: k,
              value: (0, M.uf)(t.totalTFlops),
            },
            {
              id: 3,
              title: "Total Leased",
              icon: C,
              value: (0, M.uf)(t.totalLeases),
            },
          ];
          return (0, i.jsx)("section", {
            className: "flex flex-col w-full",
            children: (0, i.jsxs)("div", {
              className: "relative flex flex-col-reverse lg:flex-row gap-8",
              children: [
                (0, i.jsxs)("div", {
                  className:
                    "hero-title-section inline-flex flex-col gap-8 justify-center items-stretch basis-6/12",
                  children: [
                    (0, i.jsx)("div", {
                      className: "w-full transition-all duration-500 ".concat(
                        n >= 2 ? "blur-0 opacity-100" : "blur-lg opacity-50"
                      ),
                      children: (0, i.jsx)(m(), {
                        src: A,
                        alt: "building the world's largest data center",
                        className: "w-full h-auto",
                      }),
                    }),
                    (0, i.jsx)("span", {
                      className:
                        "block w-full text-center lg:text-left px-6 lg:px-0 text-lg text-white whitespace-normal break-words transition-all duration-500 ".concat(
                          n >= 3 ? "blur-0 opacity-100" : "blur-lg opacity-50"
                        ),
                      children:
                        "Revolutionizing GPU compute for Al and ML workloads through a permissionless, decentralized network that brings together idle resources from gaming rigs, data centers, and mining farms.",
                    }),
                    (0, i.jsx)("span", {
                      className:
                        "block w-full text-center lg:text-left px-6 lg:px-0 text-lg text-white whitespace-normal break-words transition-all duration-500 ".concat(
                          n >= 3 ? "blur-0 opacity-100" : "blur-lg opacity-50"
                        ),
                      children:
                        "CA: 0xcomingsoon",
                    }),
                    (0, i.jsxs)("div", {
                      className: "flex flex-col-reverse lg:flex-col gap-8",
                      children: [
                        (0, i.jsx)("div", {
                          className:
                            "flex flex-col lg:flex-row gap-4 w-full transition-all duration-500 ".concat(
                              n >= 4
                                ? "blur-0 opacity-100"
                                : "blur-lg opacity-50"
                            ),
                          children: r.map(function (e) {
                            return (0,
                            i.jsxs)("div", { className: "hero-card px-3 py-[10px] flex flex-col gap-4 w-full items-center lg:items-start text-center lg:text-start", children: [(0, i.jsxs)("div", { className: "flex flex-row gap-2", children: [(0, i.jsx)(m(), { src: e.icon, alt: e.title, className: "w-max h-auto" }), (0, i.jsx)("span", { className: "block w-full text-sm font-[400] leading-8", children: e.title })] }), (0, i.jsxs)("span", { className: "block w-full text-white text-[28px] font-[500]", children: [e.value, " +"] })] }, e.id);
                          }),
                        }),
                        (0, i.jsxs)("div", {
                          className:
                            "flex lg:flex-row flex-col items-center gap-4 transition-all duration-500 ".concat(
                              n >= 5
                                ? "blur-0 opacity-100"
                                : "blur-lg opacity-50"
                            ),
                          children: [
                            // (0, i.jsx)("div", {
                            //   className:
                            //     "navbar-rent-now grow-0 relative h-max",
                            //   children: (0, i.jsx)(_.Z, {}),
                            // }),
                            (0, i.jsx)("div", {
                              className:
                                "navbar-rent-now grow-0 relative h-max",
                              children: (0, i.jsx)(c, {}),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className:
                    "hero-section-image basis-6/12 relative lg:-top-[20px] transition-all duration-200 ".concat(
                      n >= 2 ? "blur-0 opacity-100" : "blur-lg opacity-50"
                    ),
                  children: (0, i.jsx)("video", {
                    className: "w-full h-full mix-blend-screen",
                    src: "/videos/hero-section-video.mp4",
                    poster: L,
                    autoPlay: !0,
                    muted: !0,
                    loop: !0,
                    playsInline: !0,
                    preload: "auto",
                  }),
                }),
              ],
            }),
          });
        },
        V = s(8958),
        S = s(797),
        T = [
          {
            id: 1,
            icon: {
              src: "//_next/static/media/allora.c7f4419c.svg",
              height: 50,
              width: 101,
            },
            altText: "allora",
          },
          {
            id: 2,
            icon: {
              src: "//_next/static/media/alxblock.e694456a.svg",
              height: 43,
              width: 139,
            },
            altText: "alxblock",
          },
          {
            id: 3,
            icon: {
              src: "//_next/static/media/azen.737f33a3.svg",
              height: 67,
              width: 159,
            },
            altText: "azen",
          },
          {
            id: 4,
            icon: {
              src: "//_next/static/media/chainbase.6be571e4.svg",
              height: 37,
              width: 203,
            },
            altText: "chainbase",
          },
          {
            id: 5,
            icon: {
              src: "//_next/static/media/dawn.95befad7.svg",
              height: 44,
              width: 183,
            },
            altText: "dawn",
          },
          {
            id: 6,
            icon: {
              src: "//_next/static/media/din.837be438.svg",
              height: 56,
              width: 94,
            },
            altText: "din",
          },
          {
            id: 7,
            icon: {
              src: "//_next/static/media/flowai.1797748c.svg",
              height: 56,
              width: 173,
            },
            altText: "flow-ai",
          },
          {
            id: 8,
            icon: {
              src: "//_next/static/media/fraction-ai.c52358cc.svg",
              height: 49,
              width: 229,
            },
            altText: "fraction-ai",
          },
          {
            id: 9,
            icon: {
              src: "//_next/static/media/gaia.e335cc3f.svg",
              height: 42,
              width: 116,
            },
            altText: "gaia",
          },
          {
            id: 10,
            icon: {
              src: "//_next/static/media/hive.decb8207.svg",
              height: 34,
              width: 72,
            },
            altText: "hive",
          },
          {
            id: 11,
            icon: {
              src: "//_next/static/media/huddle.1bbb0826.svg",
              height: 31,
              width: 129,
            },
            altText: "huddle",
          },
          {
            id: 12,
            icon: {
              src: "//_next/static/media/inferix.4f67d581.svg",
              height: 55,
              width: 178,
            },
            altText: "inferix",
          },
          {
            id: 13,
            icon: {
              src: "//_next/static/media/mintair.7231fa4e.svg",
              height: 34,
              width: 105,
            },
            altText: "mintair",
          },
          {
            id: 14,
            icon: {
              src: "//_next/static/media/narra.a5bc1d85.svg",
              height: 29,
              width: 100,
            },
            altText: "narra",
          },
          {
            id: 15,
            icon: {
              src: "//_next/static/media/nevermined.1cf73fba.svg",
              height: 38,
              width: 149,
            },
            altText: "neverminded",
          },
          {
            id: 16,
            icon: {
              src: "//_next/static/media/nexAI.10433850.svg",
              height: 37,
              width: 126,
            },
            altText: "nexAl",
          },
          {
            id: 17,
            icon: {
              src: "//_next/static/media/nodeopz.78824c94.svg",
              height: 21,
              width: 137,
            },
            altText: "nodeopz",
          },
          {
            id: 18,
            icon: {
              src: "//_next/static/media/open-ledger.7436e47a.svg",
              height: 44,
              width: 113,
            },
            altText: "open-ledger",
          },
          {
            id: 19,
            icon: {
              src: "//_next/static/media/opengradient.2a71e04f.svg",
              height: 27,
              width: 122,
            },
            altText: "opengradient",
          },
          {
            id: 20,
            icon: {
              src: "//_next/static/media/sint.b7a3a0d2.svg",
              height: 16,
              width: 107,
            },
            altText: "sint",
          },
          {
            id: 21,
            icon: {
              src: "//_next/static/media/solo.5d43aad5.svg",
              height: 49,
              width: 109,
            },
            altText: "solo",
          },
          {
            id: 22,
            icon: {
              src: "//_next/static/media/soonchain.7fb9dd59.svg",
              height: 27,
              width: 124,
            },
            altText: "soonchain",
          },
          {
            id: 23,
            icon: {
              src: "//_next/static/media/storacha.3c17ab16.svg",
              height: 54,
              width: 114,
            },
            altText: "storacha",
          },
          {
            id: 24,
            icon: {
              src: "//_next/static/media/tars.3967ad54.svg",
              height: 35,
              width: 90,
            },
            altText: "tars",
          },
          {
            id: 25,
            icon: {
              src: "//_next/static/media/wire-network.8b5d98ca.svg",
              height: 32,
              width: 181,
            },
            altText: "wire-network",
          },
          {
            id: 26,
            icon: {
              src: "//_next/static/media/0g.6807e639.svg",
              height: 38,
              width: 67,
            },
            altText: "zerog",
          },
          {
            id: 27,
            icon: {
              src: "//_next/static/media/akave.6e29df6f.svg",
              height: 45,
              width: 322,
            },
            altText: "akave",
          },
          {
            id: 28,
            icon: {
              src: "//_next/static/media/denet.897546df.svg",
              height: 45,
              width: 194,
            },
            altText: "denet",
          },
          {
            id: 29,
            icon: {
              src: "//_next/static/media/heurist.a0d73549.svg",
              height: 45,
              width: 162,
            },
            altText: "heurist",
          },
          {
            id: 30,
            icon: {
              src: "//_next/static/media/kaisar.21ac3951.svg",
              height: 45,
              width: 139,
            },
            altText: "kaisar",
          },
          {
            id: 31,
            icon: {
              src: "//_next/static/media/lilypads.22cd5ccc.svg",
              height: 45,
              width: 210,
            },
            altText: "lilypads",
          },
          {
            id: 32,
            icon: {
              src: "//_next/static/media/neuromesh.76a453b9.svg",
              height: 45,
              width: 240,
            },
            altText: "neuromesh",
          },
          {
            id: 33,
            icon: {
              src: "//_next/static/media/parasail.24c74fba.svg",
              height: 45,
              width: 210,
            },
            altText: "parasail",
          },
          {
            id: 34,
            icon: {
              src: "//_next/static/media/supersight.1b1e3dc4.svg",
              height: 45,
              width: 509,
            },
            altText: "supersight",
          },
          {
            id: 35,
            icon: {
              src: "//_next/static/media/swanchain.d81c2e98.svg",
              height: 45,
              width: 213,
            },
            altText: "swanchain",
          },
        ],
        E = function () {
          return (0, i.jsx)("div", {
            className:
              "flex items-center h-max justify-start w-[6000px] animate-marquee",
            children: T.map(function (e) {
              return (0,
              i.jsx)("div", { className: "px-1 h-full flex justify-center", children: (0, i.jsx)("div", { className: "ecosystem-partner-tab p-4 flex items-center justify-center", children: (0, i.jsx)("div", { className: "w-1/2", children: (0, i.jsx)(m(), { src: e.icon, alt: e.altText, loading: "eager", className: "w-full h-full" }) }) }) }, e.id);
            }),
          });
        },
        D = function () {
          return (0, i.jsx)("div", {
            className:
              "flex items-center h-max justify-start w-[6000px] animate-reverseMarquee",
            children: (0, S.Z)(T)
              .reverse()
              .map(function (e, t) {
                return (0,
                i.jsx)("div", { className: "px-1 h-full flex justify-center", children: (0, i.jsx)("div", { className: "ecosystem-partner-tab p-4 flex items-center justify-center", children: (0, i.jsx)("div", { className: "w-1/2", children: (0, i.jsx)(m(), { src: e.icon, alt: e.altText, loading: "eager", className: "w-full h-full" }) }) }) }, "r".concat(t));
              }),
          });
        },
        Z = function () {
          return (0, i.jsxs)("div", {
            className:
              " ecosystem-partner-section relative overflow-hidden w-full text-center tracking-[1px] h-max flex flex-col gap-2 py-16 lg:py-[103px] text-lg leading-5 ",
            children: [
              (0, i.jsx)("h3", {
                className: "logo-ocr-text text-white mb-10",
                children: "ECOSYSTEM PARTNERS",
              }),
              (0, i.jsx)(E, {}),
              (0, i.jsx)(D, {}),
              (0, i.jsx)("div", {
                className:
                  "absolute -left-[51px] top-1/4 w-[104px] h-[104px] bg-black blur-lg",
              }),
              (0, i.jsx)("div", {
                className:
                  "absolute -right-[51px] top-1/4 w-[104px] h-[104px] bg-black blur-lg",
              }),
            ],
          });
        },
        P = function (e) {
          var t = e.label,
            s = e.heading,
            l = e.descriptions,
            n = e.imageSrc,
            a = e.imageAlt,
            r = e.buttonText,
            c = e.onButtonClick,
            d = e.isSticky,
            h = e.isMobile,
            x = e.className,
            u = void 0 === x ? "" : x,
            f = e.logo,
            g = d || h;
          return (0, i.jsx)("div", {
            className: "relative w-full ".concat(u),
            children: (0, i.jsx)("div", {
              className: "product-suite-card_wrapper",
              children: (0, i.jsxs)("div", {
                className:
                  "product-suite-card_inner transition-colors duration-300 "
                    .concat(d ? "bg-[#0059FF]" : "bg-[#0D0D0D]", " ")
                    .concat(h ? "!bg-[#0059FF]" : ""),
                children: [
                  (0, i.jsx)("span", {
                    className: "".concat(
                      g ? "" : "text-opacity-40",
                      " text-white absolute left-3 top-6 lg:left-8 uppercase font-ocr text-xs lg:text-xl font-[600] max-h-6"
                    ),
                    style: { opacity: g ? 1 : 0.4 },
                    children: t,
                  }),
                  (0, i.jsx)("div", {
                    className: "h-[91%] lg:h-full pt-14",
                    children: (0, i.jsxs)("div", {
                      className:
                        "w-full px-4 lg:px-8 flex lg:flex-row gap-4 lg:gap-8 flex-col justify-center lg:justify-start items-center h-full",
                      children: [
                        (0, i.jsx)("div", {
                          className:
                            "w-2/3 lg:w-full lg:basis-1/2 flex items-center justify-center",
                          children: (0, i.jsx)(m(), { src: n, alt: a }),
                        }),
                        (0, i.jsx)("div", {
                          className: "flex justify-center lg:basis-1/2",
                          children: (0, i.jsxs)("div", {
                            className:
                              "flex flex-col gap-4 lg:gap-8 lg:-mt-16 items-center lg:items-start",
                            children: [
                              !!f &&
                                (0, i.jsx)("div", {
                                  className: "w-full",
                                  children: f,
                                }),
                              (0, i.jsx)("h1", {
                                className:
                                  "font-ocr text-lg lg:text-[32px] lg:leading-10 uppercase text-white",
                                children: s,
                              }),
                              (0, i.jsx)("div", {
                                className:
                                  "text-white text-xs lg:text-base flex flex-col gap-4",
                                children: l.map(function (e, t) {
                                  return (0, i.jsx)("h3", { children: e }, t);
                                }),
                              }),
                              (0, i.jsx)(o.Z, {
                                text: r,
                                onClick: c,
                                className: "mt-5 lg:mt-0",
                                innerClassname: g
                                  ? ""
                                  : "learn_more_button_dark",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        I = {
          src: "//_next/static/media/console-ss-group.091018b9.svg",
          height: 590,
          width: 747,
        },
        B = function (e) {
          var t = e.fill,
            s = void 0 === t ? "white" : t,
            l = e.width,
            n = void 0 === l ? 234 : l,
            a = e.height,
            r = void 0 === a ? 26 : a,
            o = e.className,
            c = void 0 === o ? "" : o;
          return (0, i.jsx)("svg", {
            width: n,
            height: r,
            viewBox: "0 0 194 12",
            fill: s,
            xmlns: "http://www.w3.org/2000/svg",
            className: c,
            children: (0, i.jsxs)("g", {
              children: [
                (0, i.jsx)("path", {
                  d: "M6.25518 11.3869C4.15547 11.4031 2.83663 11.3869 0.674805 11.3869V9.94827C2.24389 9.94827 4.70058 9.94827 6.33594 9.94827C8.153 9.93211 9.36437 9.38251 9.38456 8.44497C9.42494 7.57208 8.69812 7.24879 6.8003 6.89317L5.08419 6.58604C2.31822 6.08494 0.694994 5.16356 0.674805 3.64409C0.674805 1.96297 2.33961 0.820852 5.20653 0.804688C7.08416 0.804688 9.22425 0.804688 10.6577 0.804688V2.24333C9.55044 2.24333 6.78131 2.24333 5.38823 2.24333C3.61155 2.2595 2.79471 2.7712 2.8149 3.69258C2.8149 4.48465 3.97376 4.8726 5.66968 5.19589L7.48674 5.51918C10.2325 6.02028 11.4439 6.86084 11.4439 8.4288C11.4641 10.1907 9.34418 11.3869 6.25518 11.3869Z",
                }),
                (0, i.jsx)("path", {
                  d: "M48.2421 11.2576H45.4559L38.5511 5.72323V11.2576H36.5523V0.912274H38.5511V5.72323L44.3859 0.912274H47.1922L41.5379 5.72323L48.2421 11.2576Z",
                }),
                (0, i.jsx)("path", {
                  d: "M78.4509 7.46267L71.8287 0.912274H74.2111L78.4509 4.98296L82.7109 0.912274H85.0933L78.4509 7.46267Z",
                }),
                (0, i.jsx)("path", {
                  d: "M109.338 11.2738V0.928439H111.317L119.292 8.96223V0.912274H121.27V11.2738H119.292L111.337 3.23997V11.2738H109.338Z",
                }),
                (0, i.jsx)("path", {
                  d: "M187.216 11.2576V2.38325H182.714L182.694 0.912274H193.697V2.38325H189.195V11.2576H187.216Z",
                }),
                (0, i.jsx)("path", {
                  d: "M147.251 0.915527H159.175V2.1546H147.251V0.915527Z",
                }),
                (0, i.jsx)("rect", {
                  x: "147.251",
                  y: "5.70996",
                  width: "11.9234",
                  height: "0.563018",
                }),
                (0, i.jsx)("path", {
                  d: "M147.251 9.98482H159.175V11.2519H147.251V9.98482Z",
                }),
                (0, i.jsx)("rect", {
                  x: "77.2656",
                  y: "7.52344",
                  width: "2.36985",
                  height: "3.7215",
                }),
              ],
            }),
          });
        },
        R = {
          src: "//_next/static/media/skynet-ss-group.a30a58db.svg",
          height: 474,
          width: 453,
        },
        z = s(4767),
        O = {
          src: "//_next/static/media/super-ss-group.f89efb58.svg",
          height: 590,
          width: 702,
        },
        U = function (e) {
          var t = e.fill,
            s = void 0 === t ? "white" : t,
            l = e.width,
            n = void 0 === l ? 234 : l,
            a = e.height,
            r = void 0 === a ? 22 : a,
            o = e.className,
            c = void 0 === o ? "" : o;
          return (0, i.jsxs)("svg", {
            width: n,
            height: r,
            viewBox: "0 0 201 14",
            fill: s,
            xmlns: "http://www.w3.org/2000/svg",
            className: c,
            children: [
              (0, i.jsx)("path", {
                d: "M188.005 10.4864H200.971V13.4972H184.693V8.24719L197.245 3.52408V3.37354H184.581V0.362793H200.557V5.46225L188.005 10.2042V10.4864Z",
              }),
              (0, i.jsx)("path", {
                d: "M167.793 0.306641H183.318V3.01631H171.105V13.4975H167.793V0.306641Z",
              }),
              (0, i.jsx)("path", {
                d: "M149.413 0.325684H165.464V8.26653H152.725V9.47083L153.685 10.4117H164.298V13.4977H152.179L149.413 10.7504V0.325684ZM162.153 5.55686V3.4117H152.725V5.55686H162.153Z",
              }),
              (0, i.jsx)("path", {
                d: "M146.953 0.325684V13.4977H133.725L130.958 10.7504V3.24235H143.623V0.325684H146.953ZM143.623 10.4117V6.32836H134.27V9.47083L135.23 10.4117H143.623Z",
              }),
              (0, i.jsx)("path", {
                d: "M111.889 0.325684H128.674V13.4977H114.655L111.889 10.7504V0.325684ZM125.362 10.4117V3.33643H115.201V9.47083L116.16 10.4117H125.362Z",
              }),
              (0, i.jsx)("path", {
                d: "M106.064 0.325684H109.376V13.4977H107.024L96.1288 5.01116V13.4977H92.8169V0.325684H95.1879L106.064 8.81223V0.325684Z",
              }),
              (0, i.jsx)("path", {
                d: "M75.6719 0.306641H91.1963V3.01631H78.9838V13.4975H75.6719V0.306641Z",
              }),
              (0, i.jsx)("path", {
                d: "M57.292 0.325684H73.3433V8.26653H60.6039V9.47083L61.5636 10.4117H72.1766V13.4977H60.0582L57.292 10.7504V0.325684ZM70.0314 5.55686V3.4117H60.6039V5.55686H70.0314Z",
              }),
              (0, i.jsx)("path", {
                d: "M38.937 0.306641H55.1389V9.37652H42.2489V13.4975H38.937V0.306641ZM51.8082 6.66684V3.01631H42.2489V6.66684H51.8082Z",
              }),
              (0, i.jsx)("path", {
                d: "M32.9674 0.306641H36.2793V13.4975H20.3032V0.306641H23.6151V10.7878H32.9674V0.306641Z",
              }),
              (0, i.jsx)("path", {
                d: "M17.7545 5.55675V13.4976H0.969238V10.4868H14.4426V8.26642H0.969238V0.438477H17.7545V3.44922H4.28112V5.55675H17.7545Z",
              }),
            ],
          });
        },
        F = function () {
          var e = (0, l.useRef)(null),
            t = (0, l.useRef)(null),
            s = (0, l.useRef)(null),
            n = (0, l.useState)(!0),
            a = n[0],
            o = n[1],
            c = (0, l.useState)(!1),
            d = c[0],
            h = c[1],
            x = (0, l.useState)(!1),
            u = x[0],
            m = x[1],
            f = (0, l.useState)(!1),
            g = f[0],
            p = f[1];
          return (
            (0, l.useEffect)(function () {
              var i = function () {
                  if (e.current) {
                    var i = e.current.getBoundingClientRect().top;
                    o(i <= r);
                  }
                  if (t.current) {
                    var l = t.current.getBoundingClientRect().top;
                    h(l <= c);
                  }
                  if (s.current) {
                    var n = s.current.getBoundingClientRect().top;
                    m(n <= d);
                  }
                },
                l = function () {
                  p(window.innerWidth < 768);
                },
                n = parseFloat(
                  getComputedStyle(document.documentElement).fontSize
                ),
                a = function (e) {
                  return e * n;
                },
                r = a(8),
                c = a(12),
                d = a(16);
              return (
                window.addEventListener("scroll", i, { passive: !0 }),
                window.addEventListener("resize", l),
                i(),
                l(),
                function () {
                  window.removeEventListener("scroll", i),
                    window.removeEventListener("resize", l);
                }
              );
            }, []),
            (0, i.jsxs)("section", {
              className:
                "w-full flex flex-col gap-4 items-center mt-[150px] h-[300vh]",
              children: [
                (0, i.jsx)("div", {
                  className: "w-full",
                  children: (0, i.jsxs)("div", {
                    className: "flex flex-col",
                    children: [
                      (0, i.jsx)("h1", {
                        className:
                          "font-ocr text-4xl lg:text-7xl uppercase text-white",
                        children: "OUR PRODUCT SUITE",
                      }),
                      (0, i.jsx)("h3", {
                        className: "text-base text-end font-sf-pro text-white",
                        children: "Powered by Spheron",
                      }),
                    ],
                  }),
                }),
                (0, i.jsx)("div", {
                  className:
                    "insight sticky top-[calc(var(--navbar-height)+var(--padding-md)+var(--offset))] h-[calc(var(--insight-card-height)-var(--navbar-height)-var(--offset)-var(--padding-md)*2)] place-items-stretch w-full",
                  style: {
                    "--insight-card-height": "100lvh",
                    "--navbar-height": "5rem",
                    "--padding-md": "1rem",
                    "--offset": "2rem",
                  },
                  ref: e,
                  children: (0, i.jsx)(P, {
                    label: "CONSOLE",
                    logo: (0, i.jsx)(z.Z, {
                      className: "w-1/2 md:w-max md:mt-[75px] -ml-4 md:-ml-0",
                    }),
                    heading: "One-Click Access to GPUs & Mac Devices",
                    descriptions: [
                      "Spheron Console is built for developers who need fast, frictionless access to compute. Whether it's a Mac device or a GPU, just hit \"Rent Now\" and you're live, no setup headaches. Need full control? SSH directly into the machine and run your workflows just like it's your own setup.",
                      "From container deployment to GPU testing right inside your IDE, Spheron Console makes it easy to scale, test, and ship. It's the simplest way for developers to access powerful machines \u2014 when they need them, how they need them.",
                    ],
                    imageSrc: I,
                    imageAlt: "Spheron Console UI",
                    buttonText: "Rent Now",
                    onButtonClick: function () {
                      return window.open(r.rC.CONSOLE_APP);
                    },
                    isSticky: a && !d && !u,
                    isMobile: g,
                  }),
                }),
                (0, i.jsx)("div", {
                  className:
                    "insight sticky top-[calc(var(--navbar-height)+var(--padding-md)+var(--offset))] h-[calc(var(--insight-card-height)-var(--navbar-height)-var(--offset)-var(--padding-md)*2)] place-items-stretch w-full",
                  style: {
                    "--insight-card-height": "100lvh",
                    "--navbar-height": "5rem",
                    "--padding-md": "1rem",
                    "--offset": "6rem",
                  },
                  ref: t,
                  children: (0, i.jsx)(P, {
                    label: "SUPERNODERZ",
                    logo: (0, i.jsx)(U, { className: "w-1/2 md:w-max" }),
                    heading: "The First No-Code Node Deployment Platform",
                    descriptions: [
                      "Supernoderz is the first no-code platform that lets anyone deploy and manage blockchain nodes, smartly and effortlessly. Powered by AI agents, Supernoderz ensures your nodes are always live, healthy, and actively contributing to the ecosystem they\u2019re part of. No DevOps skills required.",
                      "Whether you choose to deploy on community infrastructure or secure environments, Supernoderz uses smart containers to optimize performance, reliability, and uptime.",
                    ],
                    imageSrc: O,
                    imageAlt: "Supernoderz dashboard screenshot",
                    buttonText: "Deploy Now",
                    onButtonClick: function () {
                      return window.open(r.rC.SUPERNODERZ);
                    },
                    isSticky: d && !u,
                    isMobile: g,
                  }),
                }),
                (0, i.jsx)("div", {
                  className:
                    "insight sticky top-[calc(var(--navbar-height)+var(--padding-md)+var(--offset))] h-[calc(var(--insight-card-height)-var(--navbar-height)-var(--offset)-var(--padding-md)*2)] place-items-stretch w-full",
                  style: {
                    "--insight-card-height": "100lvh",
                    "--navbar-height": "5rem",
                    "--padding-md": "1rem",
                    "--offset": "10rem",
                  },
                  ref: s,
                  children: (0, i.jsx)(P, {
                    label: "SKYNET",
                    logo: (0, i.jsx)(B, {
                      className: "w-1/2 md:w-max md:-mt-6",
                    }),
                    heading: "The No-Code AI Agent Builder",
                    descriptions: [
                      "Skynet is the first no-code agent builder powered by secure, compliant machines on the Spheron Network, designed to help you build and deploy AI agents effortlessly.",
                      "No coding, no prompt engineering, just drag, drop, and launch. With Skynet, anyone can build full-stack AI agents that seamlessly connect APIs, automate tasks, and deliver intelligent results, all without writing a single line of code.",
                    ],
                    imageSrc: R,
                    imageAlt: "Skynet dashboard screenshot",
                    buttonText: "Create Agent",
                    onButtonClick: function () {
                      return window.open(r.rC.SKYNET);
                    },
                    isSticky: u,
                    isMobile: g,
                  }),
                }),
              ],
            })
          );
        },
        W = {
          src: "//_next/static/media/rent-compute.51a359dd.png",
          height: 1038,
          width: 841,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAADFBMVEUPBgkXDQ8PFCAIAwb+aIgJAAAAA3RSTlP9/f68fWS2AAAACXBIWXMAACE4AAAhOAFFljFgAAAAJElEQVR4nCXHwREAMBCCQMT+e8544bNKwkpC/+wuPXJ04YlafQWgAEa8z3TmAAAAAElFTkSuQmCC",
          blurWidth: 6,
          blurHeight: 8,
        },
        G = function () {
          return (0, i.jsxs)("section", {
            className:
              "relative flex lg:flex-row flex-col gap-11 justify-between",
            children: [
              (0, i.jsxs)("div", {
                className: "flex flex-col gap-11 w-full items-left lg:pt-16",
                children: [
                  (0, i.jsx)("h1", {
                    className:
                      "font-ocr text-4xl lg:text-[42px] uppercase text-white",
                    children: "RENT COMPUTE POWER",
                  }),
                  (0, i.jsx)("span", {
                    className: "text-white text-sm lg:text-lg lg:w-3/5",
                    children:
                      "Tap into decentralized GPU and CPU compute \u2014 from edge devices to enterprise-grade data centers, at significantly lower costs than traditional cloud providers.",
                  }),
                  (0, i.jsxs)("div", {
                    className:
                      "flex lg:flex-row flex-col gap-4 lg:gap-8 w-full items-center",
                    children: [
                      (0, i.jsx)("div", {
                        className: "w-[220px] grow-0 relative h-max",
                        children: (0, i.jsx)(_.Z, {}),
                      }),
                      (0, i.jsx)(g, {}),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className: "basis-1/2",
                children: (0, i.jsx)(m(), {
                  src: W,
                  alt: "rent-compute",
                  className: "h-full",
                }),
              }),
            ],
          });
        },
        Y = s(7568),
        K = s(7582),
        X = {
          src: "/_next/static/media/external-link.4da08ec5.svg",
          height: 16,
          width: 16,
        },
        Q = function (e) {
          var t = e.children,
            s = e.className,
            l = void 0 === s ? "" : s;
          return (0, i.jsx)("div", {
            className:
              "border border-gray-800 bg-black px-8 flex items-center ".concat(
                l
              ),
            children: t,
          });
        },
        J = [
          {
            id: 1,
            name: "Uniswap",
            link: "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0xcomingsoon",
            logo: (0, i.jsx)(m(), {
              height: 24,
              width: 24,
              src: "/uniswap.png",
              alt: "gate-logo",
            }),
          },
          // {
          //   id: 2,
          //   name: "MEXC",
          //   link: "https://www.mexc.com/exchange/SPON_USDT",
          //   logo: (0, i.jsx)(m(), {
          //     height: 24,
          //     width: 24,
          //     src: "/logos/mexc.svg",
          //     alt: "mexc-logo",
          //   }),
          // },
          // {
          //   id: 3,
          //   name: "Bitget",
          //   link: "https://www.bitget.com/spot/SPONUSDT",
          //   logo: (0, i.jsx)(m(), {
          //     height: 24,
          //     width: 24,
          //     src: "/logos/bitget.svg",
          //     alt: "bitget-logo",
          //   }),
          // },
          // {
          //   id: 4,
          //   name: "LBank",
          //   link: "https://www.lbank.com/trade/spon_usdt",
          //   logo: (0, i.jsx)(m(), {
          //     height: 20,
          //     width: 24,
          //     src: "/logos/lbank.png",
          //     alt: "lbank-logo",
          //   }),
          // },
        ],
        q = function (e) {
          var t = e.close,
            s = (0, l.useRef)(null),
            n = (0, l.useState)(!1),
            a = n[0],
            r = n[1],
            o = (0, l.useState)(!1),
            c = o[0],
            d = o[1],
            h = (0, l.useState)(!1),
            x = h[0],
            u = h[1],
            f = (0, l.useState)(0),
            g = f[0],
            p = f[1],
            w = (0, l.useState)(0),
            v = w[0],
            j = w[1],
            b = (0, l.useState)(!1),
            N = b[0],
            y = b[1],
            k = (0, l.useState)(!1),
            C = k[0],
            L = k[1],
            A = (0, l.useState)(!1),
            M = A[0],
            _ = A[1];
          (0, l.useEffect)(function () {
            var e = setTimeout(function () {
              r(!0);
            }, 100);
            return function () {
              return clearTimeout(e);
            };
          }, []),
            (0, l.useEffect)(function () {
              var e = function () {
                  _(!!document.fullscreenElement),
                    !document.fullscreenElement &&
                      s.current &&
                      L(s.current.muted);
                },
                t = function () {
                  s.current && L(s.current.muted);
                };
              return (
                document.addEventListener("fullscreenchange", e),
                s.current && s.current.addEventListener("volumechange", t),
                function () {
                  document.removeEventListener("fullscreenchange", e),
                    s.current &&
                      s.current.removeEventListener("volumechange", t);
                }
              );
            }, []);
          var H = function () {
              d(!0),
                setTimeout(function () {
                  t();
                }, 100);
            },
            V = (function () {
              var e = (0, Y.Z)(function () {
                var e;
                return (0, K.__generator)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      if (!s.current) return [3, 8];
                      t.label = 1;
                    case 1:
                      return (
                        t.trys.push([1, 7, , 8]),
                        x ? (s.current.pause(), u(!1), [3, 6]) : [3, 2]
                      );
                    case 2:
                      return (
                        t.trys.push([2, 4, , 6]),
                        (s.current.muted = !1),
                        [4, s.current.play()]
                      );
                    case 3:
                      return t.sent(), u(!0), [3, 6];
                    case 4:
                      return (
                        t.sent(), (s.current.muted = !0), [4, s.current.play()]
                      );
                    case 5:
                      return t.sent(), u(!0), [3, 6];
                    case 6:
                      return [3, 8];
                    case 7:
                      return (
                        (e = t.sent()),
                        console.error("Error playing video:", e),
                        [3, 8]
                      );
                    case 8:
                      return [2];
                  }
                });
              });
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            S = function (e) {
              var t = Math.floor(e / 60),
                s = Math.floor(e % 60);
              return "".concat(t, ":").concat(s.toString().padStart(2, "0"));
            },
            T = function (e) {
              if (s.current) {
                var t = Math.max(0, Math.min(v, g + e));
                (s.current.currentTime = t), p(t);
              }
            };
          return (0, i.jsx)("div", {
            className:
              "isolate z-[100] fixed inset-0 bg-black backdrop-blur-sm transition-all duration-500 ease-out ".concat(
                a && !c ? "bg-opacity-80" : "bg-opacity-0"
              ),
            onClick: H,
            children: (0, i.jsxs)("div", {
              className:
                "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-800 bg-black rounded-2xl px-4 py-6 lg:p-8 text-center lg:w-auto lg:h-auto w-[90vw] max-w-2xl shadow-2xl transition-all duration-500 ease-out ".concat(
                  a && !c ? "opacity-100 scale-100" : "opacity-0 scale-95"
                ),
              onClick: function (e) {
                return e.stopPropagation();
              },
              children: [
                (0, i.jsx)("button", {
                  className:
                    "absolute right-4 top-4 cursor-pointer hover:opacity-70 transition-opacity z-10 text-white",
                  onClick: H,
                  children: (0, i.jsx)("svg", {
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, i.jsx)("path", {
                      d: "M18 6L6 18M6 6L18 18",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }),
                  }),
                }),
                (0, i.jsxs)("div", {
                  className: "flex flex-col gap-6",
                  children: [
                    (0, i.jsxs)("div", {
                      className: "flex flex-col gap-3",
                      children: [
                        (0, i.jsxs)("div", {
                          className: "flex items-center justify-center gap-2",
                          children: [
                            (0, i.jsx)("div", {
                              className:
                                "w-3 h-3 bg-green-500 rounded-full animate-pulse",
                            }),
                            (0, i.jsx)("h2", {
                              className:
                                "font-ocr text-xl lg:text-3xl font-bold text-white",
                              children: "SPON is Live! \ud83d\ude80",
                            }),
                          ],
                        }),
                        (0, i.jsx)("p", {
                          className:
                            "font-ocr text-sm text-gray-300 leading-relaxed max-w-xl mx-auto",
                          children:
                            "Together, we're building a world where compute is a right, not a privilege.",
                        }),
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className: "relative",
                      children: (0, i.jsxs)("div", {
                        className:
                          "relative w-full h-48 lg:h-64 bg-gray-900 rounded-xl overflow-hidden cursor-pointer group",
                        onClick: V,
                        onMouseEnter: function () {
                          return y(!0);
                        },
                        onMouseLeave: function () {
                          return y(!1);
                        },
                        children: [
                          (0, i.jsx)("video", {
                            ref: s,
                            className: "w-full h-full object-cover",
                            src: "/videos/spon-modal-video.mp4",
                            poster: "/videos/spon-modal-poster.png",
                            muted: !1,
                            loop: !1,
                            playsInline: !0,
                            preload: "metadata",
                            onLoadedMetadata: function () {
                              s.current && j(s.current.duration);
                            },
                            onTimeUpdate: function () {
                              s.current && p(s.current.currentTime);
                            },
                          }),
                          !x &&
                            (0, i.jsx)("div", {
                              className:
                                "absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all",
                              children: (0, i.jsx)("div", {
                                className:
                                  "w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform",
                                children: (0, i.jsx)("svg", {
                                  width: "28",
                                  height: "28",
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  className: "ml-0.5",
                                  children: (0, i.jsx)("path", {
                                    d: "M8 5V19L19 12L8 5Z",
                                    fill: "currentColor",
                                  }),
                                }),
                              }),
                            }),
                          x &&
                            N &&
                            (0, i.jsx)("div", {
                              className:
                                "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4",
                              children: (0, i.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: [
                                  (0, i.jsxs)("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                      (0, i.jsx)("button", {
                                        onClick: function (e) {
                                          e.stopPropagation(), T(-10);
                                        },
                                        className:
                                          "text-white hover:text-gray-300 transition-colors",
                                        children: (0, i.jsx)("svg", {
                                          width: "20",
                                          height: "20",
                                          viewBox: "0 0 24 24",
                                          fill: "none",
                                          children: (0, i.jsx)("path", {
                                            d: "M11 19L4 12L11 5M20 19L13 12L20 5",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                          }),
                                        }),
                                      }),
                                      (0, i.jsx)("button", {
                                        onClick: function (e) {
                                          e.stopPropagation(), V();
                                        },
                                        className:
                                          "text-white hover:text-gray-300 transition-colors",
                                        children: x
                                          ? (0, i.jsx)("svg", {
                                              width: "20",
                                              height: "20",
                                              viewBox: "0 0 24 24",
                                              fill: "none",
                                              children: (0, i.jsx)("path", {
                                                d: "M6 4H10V20H6V4ZM14 4H18V20H14V4Z",
                                                fill: "currentColor",
                                              }),
                                            })
                                          : (0, i.jsx)("svg", {
                                              width: "20",
                                              height: "20",
                                              viewBox: "0 0 24 24",
                                              fill: "none",
                                              children: (0, i.jsx)("path", {
                                                d: "M8 5V19L19 12L8 5Z",
                                                fill: "currentColor",
                                              }),
                                            }),
                                      }),
                                      (0, i.jsx)("button", {
                                        onClick: function (e) {
                                          e.stopPropagation(), T(10);
                                        },
                                        className:
                                          "text-white hover:text-gray-300 transition-colors",
                                        children: (0, i.jsx)("svg", {
                                          width: "20",
                                          height: "20",
                                          viewBox: "0 0 24 24",
                                          fill: "none",
                                          children: (0, i.jsx)("path", {
                                            d: "M13 5L20 12L13 19M4 5L11 12L4 19",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, i.jsxs)("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                      (0, i.jsxs)("div", {
                                        className:
                                          "text-white text-sm w-[80px] text-right",
                                        children: [S(g), " / ", S(v)],
                                      }),
                                      (0, i.jsx)("button", {
                                        onClick: function (e) {
                                          e.stopPropagation(),
                                            s.current &&
                                              ((s.current.muted =
                                                !s.current.muted),
                                              L(s.current.muted));
                                        },
                                        className:
                                          "text-white hover:text-gray-300 transition-colors w-5 h-5 flex items-center justify-center",
                                        children: C
                                          ? (0, i.jsxs)("svg", {
                                              width: "20",
                                              height: "20",
                                              viewBox: "0 0 24 24",
                                              fill: "none",
                                              children: [
                                                (0, i.jsx)("path", {
                                                  d: "M11 5L6 9H2V15H6L11 19V5Z",
                                                  stroke: "currentColor",
                                                  strokeWidth: "2",
                                                  strokeLinecap: "round",
                                                  strokeLinejoin: "round",
                                                }),
                                                (0, i.jsx)("path", {
                                                  d: "M23 9L17 15",
                                                  stroke: "currentColor",
                                                  strokeWidth: "2",
                                                  strokeLinecap: "round",
                                                  strokeLinejoin: "round",
                                                }),
                                                (0, i.jsx)("path", {
                                                  d: "M17 9L23 15",
                                                  stroke: "currentColor",
                                                  strokeWidth: "2",
                                                  strokeLinecap: "round",
                                                  strokeLinejoin: "round",
                                                }),
                                              ],
                                            })
                                          : (0, i.jsxs)("svg", {
                                              width: "20",
                                              height: "20",
                                              viewBox: "0 0 24 24",
                                              fill: "none",
                                              children: [
                                                (0, i.jsx)("path", {
                                                  d: "M11 5L6 9H2V15H6L11 19V5Z",
                                                  stroke: "currentColor",
                                                  strokeWidth: "2",
                                                  strokeLinecap: "round",
                                                  strokeLinejoin: "round",
                                                }),
                                                (0, i.jsx)("path", {
                                                  d: "M19.07 4.93C20.9447 6.80528 21.9979 9.34836 21.9979 12C21.9979 14.6516 20.9447 17.1947 19.07 19.07M15.54 8.46C16.4774 9.39764 17.004 10.6696 17.004 12C17.004 13.3304 16.4774 14.6024 15.54 15.54",
                                                  stroke: "currentColor",
                                                  strokeWidth: "2",
                                                  strokeLinecap: "round",
                                                  strokeLinejoin: "round",
                                                }),
                                              ],
                                            }),
                                      }),
                                      (0, i.jsx)("button", {
                                        onClick: function (e) {
                                          e.stopPropagation(),
                                            s.current &&
                                              (document.fullscreenElement
                                                ? document
                                                    .exitFullscreen()
                                                    .then(function () {
                                                      _(!1);
                                                    })
                                                    .catch(function (e) {
                                                      console.error(
                                                        "Error attempting to exit fullscreen:",
                                                        e
                                                      );
                                                    })
                                                : s.current
                                                    .requestFullscreen()
                                                    .then(function () {
                                                      _(!0);
                                                    })
                                                    .catch(function (e) {
                                                      console.error(
                                                        "Error attempting to enable fullscreen:",
                                                        e
                                                      );
                                                    }));
                                        },
                                        className:
                                          "text-white hover:text-gray-300 transition-colors w-5 h-5 flex items-center justify-center",
                                        children: M
                                          ? (0, i.jsx)("svg", {
                                              width: "16",
                                              height: "16",
                                              viewBox: "0 0 24 24",
                                              fill: "none",
                                              children: (0, i.jsx)("path", {
                                                d: "M9 9L4 4M20 4L15 9M15 15L20 20M4 20L9 15",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                              }),
                                            })
                                          : (0, i.jsx)("svg", {
                                              width: "16",
                                              height: "16",
                                              viewBox: "0 0 24 24",
                                              fill: "none",
                                              children: (0, i.jsx)("path", {
                                                d: "M15 3H21V9M9 21H3V15M21 3L15 9M3 21L9 15",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                              }),
                                            }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                        ],
                      }),
                    }),
                    (0, i.jsxs)(Q, {
                      className:
                        "w-full flex flex-col gap-3 p-3 !px-3 items-center",
                      children: [
                        (0, i.jsx)("h2", {
                          className:
                            "text-xl md:font-semibold flex items-center gap-2 text-white font-ocr",
                          children: "BUY $SPON",
                        }),
                        (0, i.jsx)("div", {
                          className:
                            "w-full justify-items-center",
                          children: J.map(function (e) {
                            return (0,
                            i.jsx)("a", { className: "w-full max-w-[200px]", href: e.link, target: "_blank", children: (0, i.jsxs)("div", { className: "text-white hover:border-gray-600 flex justify-between !items-center gap-2 rounded-sm !px-3 !py-2 bg-white bg-opacity-10 hover:bg-opacity-20 duration-300 !border-gray-700 transition-all ", children: [(0, i.jsxs)("div", { className: "flex flex-row gap-2", children: [e.logo, e.name] }), (0, i.jsx)(m(), { src: X, alt: "external link", width: 16, height: 16, className: "hidden ml-auto transition-opacity duration-300 hover:opacity-80" })] }) }, e.id);
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        $ = q,
        ee = {
          src: "//_next/static/media/introducing-spon.5979f462.png",
          height: 1e3,
          width: 3e3,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAABlBMVEUHBwcaGhrLa0jZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAE0lEQVR4nGNggANGRkZGBI+BAQAAVQAFC5k1aQAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 3,
        },
        te = "/_next/static/media/token-economy-poster.b1868f22.png",
        se = function (e) {
          var t = e.text,
            s = e.onClick,
            l = e.classname;
          return (0, i.jsx)("div", {
            className: "external-link-button_wrapper ".concat(l),
            children: (0, i.jsxs)("button", {
              className:
                "external-link-button_inner items-center justify-center",
              type: "button",
              onClick: s,
              "aria-label": "Play announcement",
              children: [
                (0, i.jsx)("span", {
                  className: "text-white text-base w-max",
                  children: t,
                }),
                (0, i.jsx)("div", {
                  className:
                    "flex-shrink-0 w-5 h-5 flex items-center justify-center bg-[#0059FF] border-none",
                  children: (0, i.jsx)("svg", {
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, i.jsx)("path", {
                      d: "M5 3L12 8L5 13V3Z",
                      fill: "rgba(255,255,255,1)",
                    }),
                  }),
                }),
              ],
            }),
          });
        },
        ie = s(4285),
        le = function (e) {
          var t = e.classname,
            s = void 0 === t ? "" : t,
            l = e.onClick,
            n =
              void 0 === l
                ? function () {
                    window.open(r.rC.TOKENOMICS, "_blank");
                  }
                : l;
          return (0, i.jsx)("div", {
            className:
              "tokenomics_btn_container p-[0.5px] flex items-center justify-center",
            children: (0, i.jsx)("button", {
              className: "tokenomics_btn ".concat(s),
              onClick: () => window.open("https://etherscan.io/token/0xcomingsoon"),
              type: "button",
              children: (0, i.jsxs)("div", {
                className:
                  "button-content flex items-center justify-center gap-x-5 px-[17.5px] py-[11px] w-[220px]",
                children: [
                  (0, i.jsx)("div", {
                    className: "icon-container",
                    children: (0, i.jsxs)("svg", {
                      className: "tokenomics_svg",
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "28",
                      height: "30",
                      viewBox: "0 0 28 30",
                      fill: "none",
                      children: [
                        (0, i.jsx)("g", {
                          className: "top-line",
                          children: (0, i.jsx)("path", {
                            d: "M5.82227 3.39311C6.31471 3.0262 14.8984 -1.94115 22.6541 3.78522",
                            stroke: "white",
                          }),
                        }),
                        (0, i.jsx)("g", {
                          className: "bottom-line",
                          children: (0, i.jsx)("path", {
                            d: "M5.9082 26.9442C14.2814 32.337 22.3618 27.5378 22.5477 27.3581",
                            stroke: "white",
                          }),
                        }),
                        (0, i.jsx)("g", {
                          className: "path-group top-left",
                          children: (0, i.jsx)("path", {
                            d: "M1.46367 11.9385L3.05349 12.5176C3.5839 10.3503 4.32901 8.64592 6.64433 6.66479L5.6125 5.42169",
                            stroke: "white",
                          }),
                        }),
                        (0, i.jsx)("g", {
                          className: "path-group top-right",
                          children: (0, i.jsx)("path", {
                            d: "M27.6182 11.7039L26.0848 12.4194C25.3677 10.3065 24.3099 8.58143 22.112 6.57452L23.0316 5.24628",
                            stroke: "white",
                          }),
                        }),
                        (0, i.jsx)("g", {
                          className: "path-group bottom-left",
                          children: (0, i.jsx)("path", {
                            d: "M2.05078 19.1673L3.58411 18.4519C4.30129 20.5648 5.19201 22.1978 7.67109 23.9697L6.75145 25.2979",
                            stroke: "white",
                          }),
                        }),
                        (0, i.jsx)("g", {
                          className: "path-group bottom-right",
                          children: (0, i.jsx)("path", {
                            d: "M26.9956 19.4272L25.4623 18.7118C24.7451 20.8247 23.8544 22.4577 21.3753 24.2296L22.2949 25.5579",
                            stroke: "white",
                          }),
                        }),
                        (0, i.jsx)("g", {
                          className: "middle-circle",
                          children: (0, i.jsx)("circle", {
                            cx: "14.6934",
                            cy: "15.2416",
                            r: "6.41947",
                            stroke: "white",
                            strokeWidth: "2",
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, i.jsx)("span", {
                    className:
                      "font-sf-pro text-white text-base tracking-wider",
                    children: "View Token",
                  }),
                ],
              }),
            }),
          });
        },
        ne = function () {
          return (0, i.jsxs)("section", {
            className: "relative flex flex-col gap-11",
            children: [
              (0, i.jsxs)("div", {
                className: "flex flex-col gap-4 lg:mb-[100px]",
                children: [
                  (0, i.jsx)(se, {
                    text: "Introducing $SPON",
                    // onClick: function () {
                    //   return window.open(
                    //     "https://foundation.spheronai.network/knowledge-gallery/token-utility"
                    //   );
                    // },
                  }),
                  (0, i.jsx)(m(), {
                    src: ee,
                    alt: "programmable-compute-for-ai-agents",
                    className: "w-full h-auto",
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className:
                  "flex flex-col gap-11 w-full items-center md:text-center",
                children: [
                  (0, i.jsx)("h1", {
                    className:
                      "font-ocr text-4xl lg:text-7xl uppercase text-white",
                    children: "$SPON TOKEN ECONOMY",
                  }),
                  (0, i.jsx)("span", {
                    className: "text-white text-sm md:text-lg md:w-2/3",
                    children:
                      "The native token powering the Spheron ecosystem with comprehensive utility for leasing, staking, and rewarding network participants.",
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className:
                  "flex md:flex-row flex-col gap-4 w-full md:justify-center items-center",
                children: [(0, i.jsx)(le, {}), (0, i.jsx)(g, {})],
              }),
              (0, i.jsxs)("div", {
                className: "flex md:flex-row gap-4 flex-col",
                children: [
                  (0, i.jsx)("div", {
                    className: "basis-1/2",
                    children: (0, i.jsx)("video", {
                      className: "w-full h-full mix-blend-screen",
                      src: "/videos/token-economy.mp4",
                      poster: te,
                      autoPlay: !0,
                      muted: !0,
                      loop: !0,
                      playsInline: !0,
                      preload: "auto",
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className: "basis-1/2",
                    children: (0, i.jsx)("div", {
                      className: "flex flex-col gap-2",
                      children: ie.DT.map(function (e) {
                        return (0,
                        i.jsx)("div", { className: "flex flex-col gap-y-0 lg:flex-row items-start justify-between gap-x-0 why_spheron_section", children: (0, i.jsx)("div", { className: "h-full why_spheron_text_section_container", children: (0, i.jsxs)("div", { className: "text-white flex flex-row gap-6 why_spheron_text_container_clip py-6 px-8", children: [e.icon, (0, i.jsxs)("div", { className: "flex flex-col gap-y-0.5 w-full", children: [(0, i.jsx)("h2", { className: "font-ocr text-base md:text-lg uppercase mx-auto w-full", children: e.title }), (0, i.jsx)("p", { className: "font-sf-pro tracking-wide text-sm lg:text-base mx-auto w-full opacity-90 text-left text-white", children: e.description })] })] }) }) }, e.id);
                      }),
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        ae = function () {
          var e = function (e) {
            var t = e.currentTarget.querySelector("video");
            t && t.play();
          };
          return (0, i.jsxs)("div", {
            className:
              "flex flex-col items-start justify-center gap-y-8 lg:gap-y-14",
            children: [
              (0, i.jsx)("h1", {
                className: "font-ocr text-4xl lg:text-7xl uppercase text-white",
                children: "Why Spheron?",
              }),
              (0, i.jsx)("div", {
                className: "hidden lg:block space-y-1",
                children: ie.YA.map(function (t) {
                  return (0,
                  i.jsxs)("div", { className: "flex flex-col gap-y-0 lg:flex-row items-start justify-between gap-x-0 lg:gap-x-[6px] lg:h-[300px] why_spheron_section", onMouseEnter: e, children: [(0, i.jsx)("div", { className: "why_spheron_img_section_container h-full flex justify-center w-full lg:max-w-[30%]", children: (0, i.jsx)("div", { className: "pt-14 lg:pt-0 flex items-center justify-center why_spheron_img_container w-full", children: t.icon }) }), (0, i.jsx)("div", { className: "h-full why_spheron_text_section_container relative", children: (0, i.jsx)("div", { className: "text-white pb-20 lg:pb-0 lg:pt-9 lg:pl-16 relative z-10 why_spheron_text_container_clip", children: (0, i.jsxs)("div", { className: "flex flex-col gap-y-8 lg:gap-y-5 w-full lg:w-[75%]", children: [(0, i.jsx)("h2", { className: "font-ocr text-xl lg:text-2xl uppercase w-[85%] mx-auto lg:w-full", children: t.title }), (0, i.jsx)("p", { className: "font-sf-pro text-sm lg:text-base w-[85%] mx-auto lg:w-full opacity-90 text-left text-white", children: t.description })] }) }) })] }, t.id);
                }),
              }),
              (0, i.jsx)("div", {
                className: "flex flex-col gap-y-8 lg:hidden",
                children: ie.YA.map(function (t) {
                  return (0,
                  i.jsx)("div", { onMouseEnter: e, children: (0, i.jsx)("div", { className: "why_spheron_mobile_wrapper", children: (0, i.jsxs)("div", { className: "flex flex-col bg-[#0d0d0d] hover:bg-[#0059ff] why_spheron_mobile_section transition-all duration-300 pb-20", children: [t.icon, (0, i.jsxs)("div", { className: "text-white flex flex-col gap-y-8 w-[90%] mx-auto", children: [(0, i.jsx)("h2", { className: "font-ocr text-xl lg:text-2xl uppercase w-[85%] mx-auto lg:w-full", children: t.title }), (0, i.jsx)("p", { className: "font-sf-pro text-sm lg:text-base w-[85%] mx-auto lg:w-full opacity-90 text-left", children: t.description })] })] }) }) }, t.id);
                }),
              }),
            ],
          });
        },
        re = s(5568),
        oe = s(3454),
        ce = function () {
          var e = oe.env.NEXT_PUBLIC_TOTAL_CHIPS || "614100",
            t = oe.env.NEXT_PUBLIC_TFLOPS || "190517",
            s = oe.env.NEXT_PUBLIC_TOTAL_LEASES || "30000",
            a = (0, l.useState)(!1),
            r = a[0],
            o = a[1];
          (0, l.useEffect)(function () {
            var e = setTimeout(function () {
              parseInt(localStorage.getItem("sponModalShownCount") || "0") >=
                3 ||
                (o(!0),
                (function () {
                  var e = parseInt(
                    localStorage.getItem("sponModalShownCount") || "0"
                  );
                  localStorage.setItem(
                    "sponModalShownCount",
                    (e + 1).toString()
                  );
                })());
            }, 2e3);
            return function () {
              return clearTimeout(e);
            };
          }, []);
          return (0, i.jsxs)("main", {
            className:
              "bg-black min-h-screen w-full flex flex-col items-center",
            children: [
              (0, i.jsx)(n.Z, {
                title: re.j9.title,
                desc: re.j9.desc,
                keyword: re.j9.keyword,
                icon: re.j9.icon,
                metaImage: re.j9.metaImage,
                url: re.j9.url,
              }),
              (0, i.jsx)(V.Z, {
                onSPONClick: function () {
                  o(!0);
                },
              }),
              (0, i.jsx)("div", {
                className:
                  "mx-auto w-full max-w-[80rem] px-[1rem] md:px-[1.5rem] lg:px-[2rem] mt-3 md:mt-[56px]",
                children: (0, i.jsx)(H, {
                  cardData: {
                    totalChips: Number(e),
                    totalTFlops: Number(t),
                    totalLeases: Number(s),
                  },
                }),
              }),
              (0, i.jsx)(Z, {}),
              (0, i.jsxs)("div", {
                className:
                  "mx-auto w-full max-w-[80rem] px-[1rem] md:px-[1.5rem] lg:px-[2rem] flex flex-col justify-center mt-[100px] gap-y-[100px] h-full",
                children: [(0, i.jsx)(ae, {}), (0, i.jsx)(G, {})],
              }),
              (0, i.jsxs)("div", {
                className:
                  "mx-auto w-full max-w-[80rem] px-[1rem] md:px-[1.5rem] lg:px-[2rem] mt-3 flex flex-col gap-y-[100px]",
                children: [
                  (0, i.jsx)(F, {}),
                  (0, i.jsx)("div", {
                    className: "mt-72 3xl:mt-32 4xl:mt-0",
                    children: (0, i.jsx)(p, {}),
                  }),
                  (0, i.jsx)(x, {}),
                  (0, i.jsx)(ne, {}),
                  (0, i.jsx)(b, {}),
                ],
              }),
              (0, i.jsx)(N.Z, {}),
              r &&
                (0, i.jsx)($, {
                  close: function () {
                    o(!1),
                      localStorage.setItem(
                        "sponModalLastClosed",
                        Date.now().toString()
                      );
                  },
                }),
            ],
          });
        };
    },
  },
  function (e) {
    e.O(0, [9122, 5694, 2360, 9774, 2888, 179], function () {
      return (t = 8312), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
//# sourceMappingURL=index-96ff536b227b0690.js.map
