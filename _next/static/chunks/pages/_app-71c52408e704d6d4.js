(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2888],
  {
    734: function (e, t, n) {
      "use strict";
      n.d(t, {
        S1: function () {
          return Pr;
        },
        j: function () {
          return Ar;
        },
      });
      var r,
        i = n(7582);
      !(function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.Error = 1)] = "Error"),
          (e[(e.Warn = 2)] = "Warn"),
          (e[(e.Verbose = 3)] = "Verbose"),
          (e[(e.Debug = 4)] = "Debug");
      })(r || (r = {}));
      var o,
        s = function (e) {
          return (
            void 0 === e && (e = 0),
            (new Error().stack || "")
              .split("\n")
              .slice(2 + e)
              .map(function (e) {
                return e.trim();
              })
          );
        },
        a = function (e) {
          return function () {
            var t = (0, i.__assign)({}, e.config);
            return { logger: t.loggerProvider, logLevel: t.logLevel };
          };
        },
        u = function (e, t) {
          var n, r;
          t = (t = t.replace(/\[(\w+)\]/g, ".$1")).replace(/^\./, "");
          try {
            for (
              var o = (0, i.__values)(t.split(".")), s = o.next();
              !s.done;
              s = o.next()
            ) {
              var a = s.value;
              if (!(a in e)) return;
              e = e[a];
            }
          } catch (u) {
            n = { error: u };
          } finally {
            try {
              s && !s.done && (r = o.return) && r.call(o);
            } finally {
              if (n) throw n.error;
            }
          }
          return e;
        },
        c = function (e, t) {
          return function () {
            var n,
              r,
              o = {};
            try {
              for (
                var s = (0, i.__values)(t), a = s.next();
                !a.done;
                a = s.next()
              ) {
                var c = a.value;
                o[c] = u(e, c);
              }
            } catch (l) {
              n = { error: l };
            } finally {
              try {
                a && !a.done && (r = s.return) && r.call(s);
              } finally {
                if (n) throw n.error;
              }
            }
            return o;
          };
        },
        l = function (e, t, n, i, o) {
          return (
            void 0 === o && (o = null),
            function () {
              for (var a = [], u = 0; u < arguments.length; u++)
                a[u] = arguments[u];
              var c = n(),
                l = c.logger,
                d = c.logLevel;
              if ((d && d < r.Debug) || !d || !l) return e.apply(o, a);
              var f = {
                type: "invoke public method",
                name: t,
                args: a,
                stacktrace: s(1),
                time: { start: new Date().toISOString() },
                states: {},
              };
              i && f.states && (f.states.before = i());
              var v = e.apply(o, a);
              return (
                v && v.promise
                  ? v.promise.then(function () {
                      i && f.states && (f.states.after = i()),
                        f.time && (f.time.end = new Date().toISOString()),
                        l.debug(JSON.stringify(f, null, 2));
                    })
                  : (i && f.states && (f.states.after = i()),
                    f.time && (f.time.end = new Date().toISOString()),
                    l.debug(JSON.stringify(f, null, 2))),
                v
              );
            }
          );
        },
        d = function (e) {
          return { promise: e || Promise.resolve() };
        };
      !(function (e) {
        (e.Unknown = "unknown"),
          (e.Skipped = "skipped"),
          (e.Success = "success"),
          (e.RateLimit = "rate_limit"),
          (e.PayloadTooLarge = "payload_too_large"),
          (e.Invalid = "invalid"),
          (e.Failed = "failed"),
          (e.Timeout = "Timeout"),
          (e.SystemError = "SystemError");
      })(o || (o = {}));
      var f = "AMP",
        v = "".concat(f, "_unsent"),
        p = "https://api2.amplitude.com/2/httpapi",
        h = function (e, t, n) {
          return (
            void 0 === t && (t = 0),
            void 0 === n && (n = o.Unknown),
            { event: e, code: t, message: n }
          );
        },
        g = "Amplitude Logger ",
        m = (function () {
          function e() {
            this.logLevel = r.None;
          }
          return (
            (e.prototype.disable = function () {
              this.logLevel = r.None;
            }),
            (e.prototype.enable = function (e) {
              void 0 === e && (e = r.Warn), (this.logLevel = e);
            }),
            (e.prototype.log = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              this.logLevel < r.Verbose ||
                console.log("".concat(g, "[Log]: ").concat(e.join(" ")));
            }),
            (e.prototype.warn = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              this.logLevel < r.Warn ||
                console.warn("".concat(g, "[Warn]: ").concat(e.join(" ")));
            }),
            (e.prototype.error = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              this.logLevel < r.Error ||
                console.error("".concat(g, "[Error]: ").concat(e.join(" ")));
            }),
            (e.prototype.debug = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              this.logLevel < r.Debug ||
                console.log("".concat(g, "[Debug]: ").concat(e.join(" ")));
            }),
            e
          );
        })(),
        y = function () {
          return {
            flushMaxRetries: 12,
            flushQueueSize: 200,
            flushIntervalMillis: 1e4,
            instanceName: "$default_instance",
            logLevel: r.Warn,
            loggerProvider: new m(),
            offline: !1,
            optOut: !1,
            serverUrl: p,
            serverZone: "US",
            useBatch: !1,
          };
        },
        _ = (function () {
          function e(e) {
            var t, n, r, i;
            this._optOut = !1;
            var o = y();
            (this.apiKey = e.apiKey),
              (this.flushIntervalMillis =
                null !== (t = e.flushIntervalMillis) && void 0 !== t
                  ? t
                  : o.flushIntervalMillis),
              (this.flushMaxRetries = e.flushMaxRetries || o.flushMaxRetries),
              (this.flushQueueSize = e.flushQueueSize || o.flushQueueSize),
              (this.instanceName = e.instanceName || o.instanceName),
              (this.loggerProvider = e.loggerProvider || o.loggerProvider),
              (this.logLevel =
                null !== (n = e.logLevel) && void 0 !== n ? n : o.logLevel),
              (this.minIdLength = e.minIdLength),
              (this.plan = e.plan),
              (this.ingestionMetadata = e.ingestionMetadata),
              (this.offline = void 0 !== e.offline ? e.offline : o.offline),
              (this.optOut =
                null !== (r = e.optOut) && void 0 !== r ? r : o.optOut),
              (this.serverUrl = e.serverUrl),
              (this.serverZone = e.serverZone || o.serverZone),
              (this.storageProvider = e.storageProvider),
              (this.transportProvider = e.transportProvider),
              (this.useBatch =
                null !== (i = e.useBatch) && void 0 !== i ? i : o.useBatch),
              this.loggerProvider.enable(this.logLevel);
            var s = w(e.serverUrl, e.serverZone, e.useBatch);
            (this.serverZone = s.serverZone), (this.serverUrl = s.serverUrl);
          }
          return (
            Object.defineProperty(e.prototype, "optOut", {
              get: function () {
                return this._optOut;
              },
              set: function (e) {
                this._optOut = e;
              },
              enumerable: !1,
              configurable: !0,
            }),
            e
          );
        })(),
        b = function (e, t) {
          return "EU" === e
            ? t
              ? "https://api.eu.amplitude.com/batch"
              : "https://api.eu.amplitude.com/2/httpapi"
            : t
            ? "https://api2.amplitude.com/batch"
            : p;
        },
        w = function (e, t, n) {
          if (
            (void 0 === e && (e = ""),
            void 0 === t && (t = y().serverZone),
            void 0 === n && (n = y().useBatch),
            e)
          )
            return { serverUrl: e, serverZone: void 0 };
          var r = ["US", "EU"].includes(t) ? t : y().serverZone;
          return { serverZone: r, serverUrl: b(r, n) };
        },
        E = (function () {
          function e() {
            this.sdk = { metrics: { histogram: {} } };
          }
          return (
            (e.prototype.recordHistogram = function (e, t) {
              this.sdk.metrics.histogram[e] = t;
            }),
            e
          );
        })(),
        k = function (e) {
          return e
            ? (e ^ ((16 * Math.random()) >> (e / 4))).toString(16)
            : (
                String(1e7) +
                String(-1e3) +
                String(-4e3) +
                String(-8e3) +
                String(-1e11)
              ).replace(/[018]/g, k);
        };
      function S(e) {
        var t = "";
        try {
          "body" in e && (t = JSON.stringify(e.body, null, 2));
        } catch (n) {}
        return t;
      }
      var T,
        I,
        x,
        O = (function () {
          function e() {
            (this.name = "amplitude"),
              (this.type = "destination"),
              (this.retryTimeout = 1e3),
              (this.throttleTimeout = 3e4),
              (this.storageKey = ""),
              (this.scheduled = null),
              (this.queue = []);
          }
          return (
            (e.prototype.setup = function (e) {
              var t;
              return (0, i.__awaiter)(this, void 0, void 0, function () {
                var n,
                  r = this;
                return (0, i.__generator)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return (
                        (this.config = e),
                        (this.storageKey = ""
                          .concat(v, "_")
                          .concat(this.config.apiKey.substring(0, 10))),
                        [
                          4,
                          null === (t = this.config.storageProvider) ||
                          void 0 === t
                            ? void 0
                            : t.get(this.storageKey),
                        ]
                      );
                    case 1:
                      return (
                        (n = i.sent()) &&
                          n.length > 0 &&
                          Promise.all(
                            n.map(function (e) {
                              return r.execute(e);
                            })
                          ).catch(),
                        [2, Promise.resolve(void 0)]
                      );
                  }
                });
              });
            }),
            (e.prototype.execute = function (e) {
              var t = this;
              return (
                e.insert_id || (e.insert_id = k()),
                new Promise(function (n) {
                  var r = {
                    event: e,
                    attempts: 0,
                    callback: function (e) {
                      return n(e);
                    },
                    timeout: 0,
                  };
                  t.addToQueue(r);
                })
              );
            }),
            (e.prototype.getTryableList = function (e) {
              var t = this;
              return e.filter(function (e) {
                return e.attempts < t.config.flushMaxRetries
                  ? ((e.attempts += 1), !0)
                  : (t.fulfillRequest(
                      [e],
                      500,
                      "Event rejected due to exceeded retry count"
                    ),
                    !1);
              });
            }),
            (e.prototype.scheduleTryable = function (e, t) {
              var n = this;
              void 0 === t && (t = !1),
                e.forEach(function (e) {
                  t && (n.queue = n.queue.concat(e)),
                    0 !== e.timeout
                      ? setTimeout(function () {
                          (e.timeout = 0), n.schedule(0);
                        }, e.timeout)
                      : n.schedule(n.config.flushIntervalMillis);
                });
            }),
            (e.prototype.addToQueue = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              var n = this.getTryableList(e);
              this.scheduleTryable(n, !0), this.saveEvents();
            }),
            (e.prototype.schedule = function (e) {
              var t = this;
              this.scheduled ||
                this.config.offline ||
                (this.scheduled = setTimeout(function () {
                  t.flush(!0).then(function () {
                    t.queue.length > 0 && t.schedule(e);
                  });
                }, e));
            }),
            (e.prototype.flush = function (e) {
              return (
                void 0 === e && (e = !1),
                (0, i.__awaiter)(this, void 0, void 0, function () {
                  var t,
                    n,
                    r,
                    o = this;
                  return (0, i.__generator)(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return this.config.offline
                          ? (this.config.loggerProvider.debug(
                              "Skipping flush while offline."
                            ),
                            [2])
                          : ((t = []),
                            (n = []),
                            this.queue.forEach(function (e) {
                              return 0 === e.timeout ? t.push(e) : n.push(e);
                            }),
                            this.scheduled &&
                              (clearTimeout(this.scheduled),
                              (this.scheduled = null)),
                            (r = (function (e, t) {
                              var n = Math.max(t, 1);
                              return e.reduce(function (e, t, r) {
                                var i = Math.floor(r / n);
                                return e[i] || (e[i] = []), e[i].push(t), e;
                              }, []);
                            })(t, this.config.flushQueueSize)),
                            [
                              4,
                              Promise.all(
                                r.map(function (t) {
                                  return o.send(t, e);
                                })
                              ),
                            ]);
                      case 1:
                        return i.sent(), this.scheduleTryable(n), [2];
                    }
                  });
                })
              );
            }),
            (e.prototype.send = function (e, t) {
              return (
                void 0 === t && (t = !0),
                (0, i.__awaiter)(this, void 0, void 0, function () {
                  var n, r, s, a, u;
                  return (0, i.__generator)(this, function (c) {
                    switch (c.label) {
                      case 0:
                        if (!this.config.apiKey)
                          return [
                            2,
                            this.fulfillRequest(
                              e,
                              400,
                              "Event rejected due to missing API key"
                            ),
                          ];
                        (n = {
                          api_key: this.config.apiKey,
                          events: e.map(function (e) {
                            var t = e.event;
                            t.extra;
                            return (0, i.__rest)(t, ["extra"]);
                          }),
                          options: { min_id_length: this.config.minIdLength },
                          client_upload_time: new Date().toISOString(),
                          request_metadata: this.config.requestMetadata,
                        }),
                          (this.config.requestMetadata = new E()),
                          (c.label = 1);
                      case 1:
                        return (
                          c.trys.push([1, 3, , 4]),
                          (r = w(
                            this.config.serverUrl,
                            this.config.serverZone,
                            this.config.useBatch
                          ).serverUrl),
                          [4, this.config.transportProvider.send(r, n)]
                        );
                      case 2:
                        return null === (s = c.sent())
                          ? (this.fulfillRequest(
                              e,
                              0,
                              "Unexpected error occurred"
                            ),
                            [2])
                          : t
                          ? (this.handleResponse(s, e), [3, 4])
                          : ("body" in s
                              ? this.fulfillRequest(
                                  e,
                                  s.statusCode,
                                  "".concat(s.status, ": ").concat(S(s))
                                )
                              : this.fulfillRequest(e, s.statusCode, s.status),
                            [2]);
                      case 3:
                        return (
                          (a = c.sent()),
                          (u =
                            (l = a) instanceof Error ? l.message : String(l)),
                          this.config.loggerProvider.error(u),
                          this.handleResponse(
                            { status: o.Failed, statusCode: 0 },
                            e
                          ),
                          [3, 4]
                        );
                      case 4:
                        return [2];
                    }
                    var l;
                  });
                })
              );
            }),
            (e.prototype.handleResponse = function (e, t) {
              var n = e.status;
              switch (n) {
                case o.Success:
                  this.handleSuccessResponse(e, t);
                  break;
                case o.Invalid:
                  this.handleInvalidResponse(e, t);
                  break;
                case o.PayloadTooLarge:
                  this.handlePayloadTooLargeResponse(e, t);
                  break;
                case o.RateLimit:
                  this.handleRateLimitResponse(e, t);
                  break;
                default:
                  this.config.loggerProvider.warn(
                    "{code: 0, error: \"Status '"
                      .concat(n, "' provided for ")
                      .concat(t.length, ' events"}')
                  ),
                    this.handleOtherResponse(t);
              }
            }),
            (e.prototype.handleSuccessResponse = function (e, t) {
              this.fulfillRequest(
                t,
                e.statusCode,
                "Event tracked successfully"
              );
            }),
            (e.prototype.handleInvalidResponse = function (e, t) {
              var n = this;
              if (
                e.body.missingField ||
                e.body.error.startsWith("Invalid API key")
              )
                this.fulfillRequest(t, e.statusCode, e.body.error);
              else {
                var r = (0, i.__spreadArray)(
                    (0, i.__spreadArray)(
                      (0, i.__spreadArray)(
                        (0, i.__spreadArray)(
                          [],
                          (0, i.__read)(
                            Object.values(e.body.eventsWithInvalidFields)
                          ),
                          !1
                        ),
                        (0, i.__read)(
                          Object.values(e.body.eventsWithMissingFields)
                        ),
                        !1
                      ),
                      (0, i.__read)(
                        Object.values(e.body.eventsWithInvalidIdLengths)
                      ),
                      !1
                    ),
                    (0, i.__read)(e.body.silencedEvents),
                    !1
                  ).flat(),
                  o = new Set(r),
                  s = t.filter(function (t, r) {
                    if (!o.has(r)) return !0;
                    n.fulfillRequest([t], e.statusCode, e.body.error);
                  });
                s.length > 0 && this.config.loggerProvider.warn(S(e));
                var a = this.getTryableList(s);
                this.scheduleTryable(a);
              }
            }),
            (e.prototype.handlePayloadTooLargeResponse = function (e, t) {
              if (1 !== t.length) {
                this.config.loggerProvider.warn(S(e)),
                  (this.config.flushQueueSize /= 2);
                var n = this.getTryableList(t);
                this.scheduleTryable(n);
              } else this.fulfillRequest(t, e.statusCode, e.body.error);
            }),
            (e.prototype.handleRateLimitResponse = function (e, t) {
              var n = this,
                r = Object.keys(e.body.exceededDailyQuotaUsers),
                i = Object.keys(e.body.exceededDailyQuotaDevices),
                o = e.body.throttledEvents,
                s = new Set(r),
                a = new Set(i),
                u = new Set(o),
                c = t.filter(function (t, r) {
                  if (
                    !(
                      (t.event.user_id && s.has(t.event.user_id)) ||
                      (t.event.device_id && a.has(t.event.device_id))
                    )
                  )
                    return u.has(r) && (t.timeout = n.throttleTimeout), !0;
                  n.fulfillRequest([t], e.statusCode, e.body.error);
                });
              c.length > 0 && this.config.loggerProvider.warn(S(e));
              var l = this.getTryableList(c);
              this.scheduleTryable(l);
            }),
            (e.prototype.handleOtherResponse = function (e) {
              var t = this,
                n = e.map(function (e) {
                  return (e.timeout = e.attempts * t.retryTimeout), e;
                }),
                r = this.getTryableList(n);
              this.scheduleTryable(r);
            }),
            (e.prototype.fulfillRequest = function (e, t, n) {
              this.removeEvents(e),
                e.forEach(function (e) {
                  return e.callback(h(e.event, t, n));
                });
            }),
            (e.prototype.saveEvents = function () {
              if (this.config.storageProvider) {
                var e = this.queue.map(function (e) {
                  return e.event;
                });
                this.config.storageProvider.set(this.storageKey, e);
              }
            }),
            (e.prototype.removeEvents = function (e) {
              (this.queue = this.queue.filter(function (t) {
                return !e.some(function (e) {
                  return e.event.insert_id === t.event.insert_id;
                });
              })),
                this.saveEvents();
            }),
            e
          );
        })();
      !(function (e) {
        (e.SET = "$set"),
          (e.SET_ONCE = "$setOnce"),
          (e.ADD = "$add"),
          (e.APPEND = "$append"),
          (e.PREPEND = "$prepend"),
          (e.REMOVE = "$remove"),
          (e.PREINSERT = "$preInsert"),
          (e.POSTINSERT = "$postInsert"),
          (e.UNSET = "$unset"),
          (e.CLEAR_ALL = "$clearAll");
      })(T || (T = {})),
        (function (e) {
          (e.REVENUE_PRODUCT_ID = "$productId"),
            (e.REVENUE_QUANTITY = "$quantity"),
            (e.REVENUE_PRICE = "$price"),
            (e.REVENUE_TYPE = "$revenueType"),
            (e.REVENUE = "$revenue");
        })(I || (I = {})),
        (function (e) {
          (e.IDENTIFY = "$identify"),
            (e.GROUP_IDENTIFY = "$groupidentify"),
            (e.REVENUE = "revenue_amount");
        })(x || (x = {}));
      var P = function (e) {
          if (Object.keys(e).length > 1e3) return !1;
          for (var t in e) {
            var n = e[t];
            if (!A(t, n)) return !1;
          }
          return !0;
        },
        A = function (e, t) {
          var n, r;
          if ("string" !== typeof e) return !1;
          if (Array.isArray(t)) {
            var o = !0;
            try {
              for (
                var s = (0, i.__values)(t), a = s.next();
                !a.done;
                a = s.next()
              ) {
                var u = a.value;
                if (Array.isArray(u)) return !1;
                if ("object" === typeof u) o = o && P(u);
                else if (!["number", "string"].includes(typeof u)) return !1;
                if (!o) return !1;
              }
            } catch (c) {
              n = { error: c };
            } finally {
              try {
                a && !a.done && (r = s.return) && r.call(s);
              } finally {
                if (n) throw n.error;
              }
            }
          } else {
            if (null === t || void 0 === t) return !1;
            if ("object" === typeof t) return P(t);
            if (!["number", "string", "boolean"].includes(typeof t)) return !1;
          }
          return !0;
        },
        C = (function () {
          function e() {
            (this._propertySet = new Set()), (this._properties = {});
          }
          return (
            (e.prototype.getUserProperties = function () {
              return (0, i.__assign)({}, this._properties);
            }),
            (e.prototype.set = function (e, t) {
              return this._safeSet(T.SET, e, t), this;
            }),
            (e.prototype.setOnce = function (e, t) {
              return this._safeSet(T.SET_ONCE, e, t), this;
            }),
            (e.prototype.append = function (e, t) {
              return this._safeSet(T.APPEND, e, t), this;
            }),
            (e.prototype.prepend = function (e, t) {
              return this._safeSet(T.PREPEND, e, t), this;
            }),
            (e.prototype.postInsert = function (e, t) {
              return this._safeSet(T.POSTINSERT, e, t), this;
            }),
            (e.prototype.preInsert = function (e, t) {
              return this._safeSet(T.PREINSERT, e, t), this;
            }),
            (e.prototype.remove = function (e, t) {
              return this._safeSet(T.REMOVE, e, t), this;
            }),
            (e.prototype.add = function (e, t) {
              return this._safeSet(T.ADD, e, t), this;
            }),
            (e.prototype.unset = function (e) {
              return this._safeSet(T.UNSET, e, "-"), this;
            }),
            (e.prototype.clearAll = function () {
              return (
                (this._properties = {}),
                (this._properties[T.CLEAR_ALL] = "-"),
                this
              );
            }),
            (e.prototype._safeSet = function (e, t, n) {
              if (this._validate(e, t, n)) {
                var r = this._properties[e];
                return (
                  void 0 === r && ((r = {}), (this._properties[e] = r)),
                  (r[t] = n),
                  this._propertySet.add(t),
                  !0
                );
              }
              return !1;
            }),
            (e.prototype._validate = function (e, t, n) {
              return (
                void 0 === this._properties[T.CLEAR_ALL] &&
                !this._propertySet.has(t) &&
                (e === T.ADD
                  ? "number" === typeof n
                  : e === T.UNSET || e === T.REMOVE || A(t, n))
              );
            }),
            e
          );
        })(),
        N = (function () {
          function e() {
            (this.productId = ""), (this.quantity = 1), (this.price = 0);
          }
          return (
            (e.prototype.setProductId = function (e) {
              return (this.productId = e), this;
            }),
            (e.prototype.setQuantity = function (e) {
              return e > 0 && (this.quantity = e), this;
            }),
            (e.prototype.setPrice = function (e) {
              return (this.price = e), this;
            }),
            (e.prototype.setRevenueType = function (e) {
              return (this.revenueType = e), this;
            }),
            (e.prototype.setRevenue = function (e) {
              return (this.revenue = e), this;
            }),
            (e.prototype.setEventProperties = function (e) {
              return P(e) && (this.properties = e), this;
            }),
            (e.prototype.getEventProperties = function () {
              var e = this.properties
                ? (0, i.__assign)({}, this.properties)
                : {};
              return (
                (e[I.REVENUE_PRODUCT_ID] = this.productId),
                (e[I.REVENUE_QUANTITY] = this.quantity),
                (e[I.REVENUE_PRICE] = this.price),
                (e[I.REVENUE_TYPE] = this.revenueType),
                (e[I.REVENUE] = this.revenue),
                e
              );
            }),
            e
          );
        })(),
        L = (function () {
          function e(e) {
            (this.client = e),
              (this.queue = []),
              (this.applying = !1),
              (this.plugins = []);
          }
          return (
            (e.prototype.register = function (e, t) {
              var n, r;
              return (0, i.__awaiter)(this, void 0, void 0, function () {
                return (0, i.__generator)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return this.plugins.some(function (t) {
                        return t.name === e.name;
                      })
                        ? (t.loggerProvider.warn(
                            "Plugin with name ".concat(
                              e.name,
                              " already exists, skipping registration"
                            )
                          ),
                          [2])
                        : (void 0 === e.name &&
                            ((e.name = k()),
                            t.loggerProvider.warn(
                              "Plugin name is undefined. \n      Generating a random UUID for plugin name: ".concat(
                                e.name,
                                ". \n      Set a name for the plugin to prevent it from being added multiple times."
                              )
                            )),
                          (e.type =
                            null !== (n = e.type) && void 0 !== n
                              ? n
                              : "enrichment"),
                          [
                            4,
                            null === (r = e.setup) || void 0 === r
                              ? void 0
                              : r.call(e, t, this.client),
                          ]);
                    case 1:
                      return i.sent(), this.plugins.push(e), [2];
                  }
                });
              });
            }),
            (e.prototype.deregister = function (e) {
              var t;
              return (0, i.__awaiter)(this, void 0, void 0, function () {
                var n, r;
                return (0, i.__generator)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return (
                        (n = this.plugins.findIndex(function (t) {
                          return t.name === e;
                        })),
                        (r = this.plugins[n]),
                        this.plugins.splice(n, 1),
                        [
                          4,
                          null === (t = r.teardown) || void 0 === t
                            ? void 0
                            : t.call(r),
                        ]
                      );
                    case 1:
                      return i.sent(), [2];
                  }
                });
              });
            }),
            (e.prototype.reset = function (e) {
              (this.applying = !1),
                this.plugins.map(function (e) {
                  var t;
                  return null === (t = e.teardown) || void 0 === t
                    ? void 0
                    : t.call(e);
                }),
                (this.plugins = []),
                (this.client = e);
            }),
            (e.prototype.push = function (e) {
              var t = this;
              return new Promise(function (n) {
                t.queue.push([e, n]), t.scheduleApply(0);
              });
            }),
            (e.prototype.scheduleApply = function (e) {
              var t = this;
              this.applying ||
                ((this.applying = !0),
                setTimeout(function () {
                  t.apply(t.queue.shift()).then(function () {
                    (t.applying = !1), t.queue.length > 0 && t.scheduleApply(0);
                  });
                }, e));
            }),
            (e.prototype.apply = function (e) {
              return (0, i.__awaiter)(this, void 0, void 0, function () {
                var t, n, r, o, s, a, u, c, l, d, f, v, p, g, m, y, _, b, w, E;
                return (0, i.__generator)(this, function (k) {
                  switch (k.label) {
                    case 0:
                      if (!e) return [2];
                      (t = (0, i.__read)(e, 1)),
                        (n = t[0]),
                        (r = (0, i.__read)(e, 2)),
                        (o = r[1]),
                        (s = this.plugins.filter(function (e) {
                          return "before" === e.type;
                        })),
                        (k.label = 1);
                    case 1:
                      k.trys.push([1, 6, 7, 8]),
                        (a = (0, i.__values)(s)),
                        (u = a.next()),
                        (k.label = 2);
                    case 2:
                      return u.done
                        ? [3, 5]
                        : (v = u.value).execute
                        ? [4, v.execute((0, i.__assign)({}, n))]
                        : [3, 4];
                    case 3:
                      if (null === (p = k.sent()))
                        return o({ event: n, code: 0, message: "" }), [2];
                      (n = p), (k.label = 4);
                    case 4:
                      return (u = a.next()), [3, 2];
                    case 5:
                      return [3, 8];
                    case 6:
                      return (c = k.sent()), (_ = { error: c }), [3, 8];
                    case 7:
                      try {
                        u && !u.done && (b = a.return) && b.call(a);
                      } finally {
                        if (_) throw _.error;
                      }
                      return [7];
                    case 8:
                      (l = this.plugins.filter(function (e) {
                        return "enrichment" === e.type || void 0 === e.type;
                      })),
                        (k.label = 9);
                    case 9:
                      k.trys.push([9, 14, 15, 16]),
                        (d = (0, i.__values)(l)),
                        (f = d.next()),
                        (k.label = 10);
                    case 10:
                      return f.done
                        ? [3, 13]
                        : (v = f.value).execute
                        ? [4, v.execute((0, i.__assign)({}, n))]
                        : [3, 12];
                    case 11:
                      if (null === (p = k.sent()))
                        return o({ event: n, code: 0, message: "" }), [2];
                      (n = p), (k.label = 12);
                    case 12:
                      return (f = d.next()), [3, 10];
                    case 13:
                      return [3, 16];
                    case 14:
                      return (g = k.sent()), (w = { error: g }), [3, 16];
                    case 15:
                      try {
                        f && !f.done && (E = d.return) && E.call(d);
                      } finally {
                        if (w) throw w.error;
                      }
                      return [7];
                    case 16:
                      return (
                        (m = this.plugins.filter(function (e) {
                          return "destination" === e.type;
                        })),
                        (y = m.map(function (e) {
                          var t = (0, i.__assign)({}, n);
                          return e.execute(t).catch(function (e) {
                            return h(t, 0, String(e));
                          });
                        })),
                        Promise.all(y).then(function (e) {
                          var t =
                            (0, i.__read)(e, 1)[0] ||
                            h(
                              n,
                              100,
                              "Event not tracked, no destination plugins on the instance"
                            );
                          o(t);
                        }),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.flush = function () {
              return (0, i.__awaiter)(this, void 0, void 0, function () {
                var e,
                  t,
                  n,
                  r = this;
                return (0, i.__generator)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return (
                        (e = this.queue),
                        (this.queue = []),
                        [
                          4,
                          Promise.all(
                            e.map(function (e) {
                              return r.apply(e);
                            })
                          ),
                        ]
                      );
                    case 1:
                      return (
                        i.sent(),
                        (t = this.plugins.filter(function (e) {
                          return "destination" === e.type;
                        })),
                        (n = t.map(function (e) {
                          return e.flush && e.flush();
                        })),
                        [4, Promise.all(n)]
                      );
                    case 2:
                      return i.sent(), [2];
                  }
                });
              });
            }),
            e
          );
        })(),
        R = function (e, t) {
          return (0, i.__assign)((0, i.__assign)({}, t), {
            event_type: x.IDENTIFY,
            user_properties: e.getUserProperties(),
          });
        },
        j = (function () {
          function e(e) {
            void 0 === e && (e = "$default"),
              (this.initializing = !1),
              (this.isReady = !1),
              (this.q = []),
              (this.dispatchQ = []),
              (this.logEvent = this.track.bind(this)),
              (this.timeline = new L(this)),
              (this.name = e);
          }
          return (
            (e.prototype._init = function (e) {
              return (0, i.__awaiter)(this, void 0, void 0, function () {
                return (0, i.__generator)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        (this.config = e),
                        this.timeline.reset(this),
                        [4, this.runQueuedFunctions("q")]
                      );
                    case 1:
                      return t.sent(), (this.isReady = !0), [2];
                  }
                });
              });
            }),
            (e.prototype.runQueuedFunctions = function (e) {
              return (0, i.__awaiter)(this, void 0, void 0, function () {
                var t, n, r, o, s, a, u, c;
                return (0, i.__generator)(this, function (l) {
                  switch (l.label) {
                    case 0:
                      (t = this[e]), (this[e] = []), (l.label = 1);
                    case 1:
                      l.trys.push([1, 8, 9, 10]),
                        (n = (0, i.__values)(t)),
                        (r = n.next()),
                        (l.label = 2);
                    case 2:
                      return r.done
                        ? [3, 7]
                        : ((o = r.value),
                          (s = o()) && "promise" in s
                            ? [4, s.promise]
                            : [3, 4]);
                    case 3:
                      return l.sent(), [3, 6];
                    case 4:
                      return [4, s];
                    case 5:
                      l.sent(), (l.label = 6);
                    case 6:
                      return (r = n.next()), [3, 2];
                    case 7:
                      return [3, 10];
                    case 8:
                      return (a = l.sent()), (u = { error: a }), [3, 10];
                    case 9:
                      try {
                        r && !r.done && (c = n.return) && c.call(n);
                      } finally {
                        if (u) throw u.error;
                      }
                      return [7];
                    case 10:
                      return this[e].length
                        ? [4, this.runQueuedFunctions(e)]
                        : [3, 12];
                    case 11:
                      l.sent(), (l.label = 12);
                    case 12:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.track = function (e, t, n) {
              var r = (function (e, t, n) {
                var r = "string" === typeof e ? { event_type: e } : e;
                return (0, i.__assign)(
                  (0, i.__assign)((0, i.__assign)({}, r), n),
                  t && { event_properties: t }
                );
              })(e, t, n);
              return d(this.dispatch(r));
            }),
            (e.prototype.identify = function (e, t) {
              var n = R(e, t);
              return d(this.dispatch(n));
            }),
            (e.prototype.groupIdentify = function (e, t, n, r) {
              var o = (function (e, t, n, r) {
                var o;
                return (0, i.__assign)((0, i.__assign)({}, r), {
                  event_type: x.GROUP_IDENTIFY,
                  group_properties: n.getUserProperties(),
                  groups: ((o = {}), (o[e] = t), o),
                });
              })(e, t, n, r);
              return d(this.dispatch(o));
            }),
            (e.prototype.setGroup = function (e, t, n) {
              var r = (function (e, t, n) {
                var r,
                  o = new C();
                return (
                  o.set(e, t),
                  (0, i.__assign)((0, i.__assign)({}, n), {
                    event_type: x.IDENTIFY,
                    user_properties: o.getUserProperties(),
                    groups: ((r = {}), (r[e] = t), r),
                  })
                );
              })(e, t, n);
              return d(this.dispatch(r));
            }),
            (e.prototype.revenue = function (e, t) {
              var n = (function (e, t) {
                return (0, i.__assign)((0, i.__assign)({}, t), {
                  event_type: x.REVENUE,
                  event_properties: e.getEventProperties(),
                });
              })(e, t);
              return d(this.dispatch(n));
            }),
            (e.prototype.add = function (e) {
              return this.isReady
                ? this._addPlugin(e)
                : (this.q.push(this._addPlugin.bind(this, e)), d());
            }),
            (e.prototype._addPlugin = function (e) {
              return d(this.timeline.register(e, this.config));
            }),
            (e.prototype.remove = function (e) {
              return this.isReady
                ? this._removePlugin(e)
                : (this.q.push(this._removePlugin.bind(this, e)), d());
            }),
            (e.prototype._removePlugin = function (e) {
              return d(this.timeline.deregister(e));
            }),
            (e.prototype.dispatchWithCallback = function (e, t) {
              if (!this.isReady) return t(h(e, 0, "Client not initialized"));
              this.process(e).then(t);
            }),
            (e.prototype.dispatch = function (e) {
              return (0, i.__awaiter)(this, void 0, void 0, function () {
                var t = this;
                return (0, i.__generator)(this, function (n) {
                  return this.isReady
                    ? [2, this.process(e)]
                    : [
                        2,
                        new Promise(function (n) {
                          t.dispatchQ.push(
                            t.dispatchWithCallback.bind(t, e, n)
                          );
                        }),
                      ];
                });
              });
            }),
            (e.prototype.process = function (e) {
              return (0, i.__awaiter)(this, void 0, void 0, function () {
                var t, n, r;
                return (0, i.__generator)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return (
                        i.trys.push([0, 2, , 3]),
                        this.config.optOut
                          ? [2, h(e, 0, "Event skipped due to optOut config")]
                          : [4, this.timeline.push(e)]
                      );
                    case 1:
                      return (
                        200 === (r = i.sent()).code
                          ? this.config.loggerProvider.log(r.message)
                          : 100 === r.code
                          ? this.config.loggerProvider.warn(r.message)
                          : this.config.loggerProvider.error(r.message),
                        [2, r]
                      );
                    case 2:
                      return (
                        (t = i.sent()),
                        (n = String(t)),
                        this.config.loggerProvider.error(n),
                        [2, (r = h(e, 0, n))]
                      );
                    case 3:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.setOptOut = function (e) {
              this.isReady
                ? this._setOptOut(e)
                : this.q.push(this._setOptOut.bind(this, Boolean(e)));
            }),
            (e.prototype._setOptOut = function (e) {
              this.config.optOut = Boolean(e);
            }),
            (e.prototype.flush = function () {
              return d(this.timeline.flush());
            }),
            e
          );
        })(),
        q = function (e, t) {
          return "boolean" === typeof e
            ? e
            : !1 !== (null === e || void 0 === e ? void 0 : e[t]);
        },
        D = function (e) {
          return q(e, "attribution");
        },
        U = function (e) {
          return q(e, "pageViews");
        },
        M = function (e) {
          return q(e, "sessions");
        },
        F = function (e) {
          return "boolean" === typeof e
            ? e
            : "object" === typeof e &&
                (!0 === e.elementInteractions ||
                  "object" === typeof e.elementInteractions);
        },
        $ = function (e) {
          if (
            F(e.autocapture) &&
            "object" === typeof e.autocapture &&
            "object" === typeof e.autocapture.elementInteractions
          )
            return e.autocapture.elementInteractions;
        },
        z = function (e) {
          var t,
            n = function () {
              return !1;
            },
            r = void 0,
            i = e.pageCounter;
          return (
            U(e.defaultTracking) &&
              ((n = void 0),
              (t = void 0),
              e.defaultTracking &&
                "object" === typeof e.defaultTracking &&
                e.defaultTracking.pageViews &&
                "object" === typeof e.defaultTracking.pageViews &&
                ("trackOn" in e.defaultTracking.pageViews &&
                  (n = e.defaultTracking.pageViews.trackOn),
                "trackHistoryChanges" in e.defaultTracking.pageViews &&
                  (r = e.defaultTracking.pageViews.trackHistoryChanges),
                "eventType" in e.defaultTracking.pageViews &&
                  e.defaultTracking.pageViews.eventType &&
                  (t = e.defaultTracking.pageViews.eventType))),
            { trackOn: n, trackHistoryChanges: r, eventType: t, pageCounter: i }
          );
        },
        V = {
          utm_campaign: void 0,
          utm_content: void 0,
          utm_id: void 0,
          utm_medium: void 0,
          utm_source: void 0,
          utm_term: void 0,
          referrer: void 0,
          referring_domain: void 0,
          dclid: void 0,
          gbraid: void 0,
          gclid: void 0,
          fbclid: void 0,
          ko_click_id: void 0,
          li_fat_id: void 0,
          msclkid: void 0,
          rtd_cid: void 0,
          ttclid: void 0,
          twclid: void 0,
          wbraid: void 0,
        },
        K = function (e) {
          var t = e.split(".");
          return t.length <= 2 ? e : t.slice(t.length - 2, t.length).join(".");
        },
        H = function (e, t, n, r) {
          void 0 === r && (r = !0);
          e.referrer;
          var o = e.referring_domain,
            s = (0, i.__rest)(e, ["referrer", "referring_domain"]),
            a = t || {},
            u = (a.referrer, a.referring_domain),
            c = (0, i.__rest)(a, ["referrer", "referring_domain"]);
          if (W(n.excludeReferrers, e.referring_domain)) return !1;
          if (
            !r &&
            (function (e) {
              return Object.values(e).every(function (e) {
                return !e;
              });
            })(e) &&
            t
          )
            return !1;
          var l = JSON.stringify(s) !== JSON.stringify(c),
            d = K(o || "") !== K(u || "");
          return !t || l || d;
        },
        W = function (e, t) {
          return (
            void 0 === e && (e = []),
            void 0 === t && (t = ""),
            e.some(function (e) {
              return e instanceof RegExp ? e.test(t) : e === t;
            })
          );
        },
        B = function (e) {
          var t = e;
          return t
            ? (t.startsWith(".") && (t = t.substring(1)),
              [new RegExp("".concat(t.replace(".", "\\."), "$"))])
            : [];
        },
        J = function () {
          return "undefined" !== typeof globalThis &&
            "undefined" !== typeof globalThis.ampIntegrationContext
            ? globalThis.ampIntegrationContext
            : "undefined" !== typeof globalThis
            ? globalThis
            : "undefined" !== typeof window
            ? window
            : "undefined" !== typeof self
            ? self
            : "undefined" !== typeof n.g
            ? n.g
            : void 0;
        },
        Q = function () {
          var e,
            t = J();
          return (
            null === (e = null === t || void 0 === t ? void 0 : t.location) ||
            void 0 === e
              ? void 0
              : e.search
          )
            ? t.location.search
                .substring(1)
                .split("&")
                .filter(Boolean)
                .reduce(function (e, t) {
                  var n = t.split("=", 2),
                    r = Y(n[0]),
                    i = Y(n[1]);
                  return i ? ((e[r] = i), e) : e;
                }, {})
            : {};
        },
        Y = function (e) {
          void 0 === e && (e = "");
          try {
            return decodeURIComponent(e);
          } catch (t) {
            return "";
          }
        },
        Z = (function () {
          function e() {}
          return (
            (e.prototype.parse = function () {
              return (0, i.__awaiter)(this, void 0, void 0, function () {
                return (0, i.__generator)(this, function (e) {
                  return [
                    2,
                    (0, i.__assign)(
                      (0, i.__assign)(
                        (0, i.__assign)(
                          (0, i.__assign)({}, V),
                          this.getUtmParam()
                        ),
                        this.getReferrer()
                      ),
                      this.getClickIds()
                    ),
                  ];
                });
              });
            }),
            (e.prototype.getUtmParam = function () {
              var e = Q();
              return {
                utm_campaign: e.utm_campaign,
                utm_content: e.utm_content,
                utm_id: e.utm_id,
                utm_medium: e.utm_medium,
                utm_source: e.utm_source,
                utm_term: e.utm_term,
              };
            }),
            (e.prototype.getReferrer = function () {
              var e,
                t,
                n = { referrer: void 0, referring_domain: void 0 };
              try {
                (n.referrer = document.referrer || void 0),
                  (n.referring_domain =
                    null !==
                      (t =
                        null === (e = n.referrer) || void 0 === e
                          ? void 0
                          : e.split("/")[2]) && void 0 !== t
                      ? t
                      : void 0);
              } catch (r) {}
              return n;
            }),
            (e.prototype.getClickIds = function () {
              var e,
                t = Q();
              return (
                ((e = {}).dclid = t.dclid),
                (e.fbclid = t.fbclid),
                (e.gbraid = t.gbraid),
                (e.gclid = t.gclid),
                (e.ko_click_id = t.ko_click_id),
                (e.li_fat_id = t.li_fat_id),
                (e.msclkid = t.msclkid),
                (e.rtd_cid = t.rtd_cid),
                (e.ttclid = t.ttclid),
                (e.twclid = t.twclid),
                (e.wbraid = t.wbraid),
                e
              );
            }),
            e
          );
        })(),
        G = function (e, t) {
          return void 0 === t && (t = Date.now()), Date.now() - t > e;
        },
        X = (function () {
          function e(e, t) {
            var n, r, o, s;
            (this.shouldTrackNewCampaign = !1),
              (this.options = (0, i.__assign)(
                {
                  initialEmptyValue: "EMPTY",
                  resetSessionOnNewCampaign: !1,
                  excludeReferrers: B(
                    null === (n = t.cookieOptions) || void 0 === n
                      ? void 0
                      : n.domain
                  ),
                },
                e
              )),
              (this.storage = t.cookieStorage),
              (this.storageKey =
                ((r = t.apiKey),
                void 0 === (o = "MKTG") && (o = ""),
                void 0 === s && (s = 10),
                [f, o, r.substring(0, s)].filter(Boolean).join("_"))),
              (this.currentCampaign = V),
              (this.sessionTimeout = t.sessionTimeout),
              (this.lastEventTime = t.lastEventTime),
              t.loggerProvider.log("Installing web attribution tracking.");
          }
          return (
            (e.prototype.init = function () {
              return (0, i.__awaiter)(this, void 0, void 0, function () {
                var e, t;
                return (0, i.__generator)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.fetchCampaign()];
                    case 1:
                      return (
                        (t = i.__read.apply(void 0, [n.sent(), 2])),
                        (this.currentCampaign = t[0]),
                        (this.previousCampaign = t[1]),
                        (e =
                          !this.lastEventTime ||
                          G(this.sessionTimeout, this.lastEventTime)),
                        H(
                          this.currentCampaign,
                          this.previousCampaign,
                          this.options,
                          e
                        )
                          ? ((this.shouldTrackNewCampaign = !0),
                            [
                              4,
                              this.storage.set(
                                this.storageKey,
                                this.currentCampaign
                              ),
                            ])
                          : [3, 3]
                      );
                    case 2:
                      n.sent(), (n.label = 3);
                    case 3:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.fetchCampaign = function () {
              return (0, i.__awaiter)(this, void 0, void 0, function () {
                return (0, i.__generator)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        Promise.all([
                          new Z().parse(),
                          this.storage.get(this.storageKey),
                        ]),
                      ];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              });
            }),
            (e.prototype.generateCampaignEvent = function (e) {
              this.shouldTrackNewCampaign = !1;
              var t = (function (e, t) {
                var n = (0, i.__assign)((0, i.__assign)({}, V), e),
                  r = Object.entries(n).reduce(function (e, n) {
                    var r,
                      o = (0, i.__read)(n, 2),
                      s = o[0],
                      a = o[1];
                    return (
                      e.setOnce(
                        "initial_".concat(s),
                        null !==
                          (r =
                            null !== a && void 0 !== a
                              ? a
                              : t.initialEmptyValue) && void 0 !== r
                          ? r
                          : "EMPTY"
                      ),
                      a ? e.set(s, a) : e.unset(s)
                    );
                  }, new C());
                return R(r);
              })(this.currentCampaign, this.options);
              return e && (t.event_id = e), t;
            }),
            (e.prototype.shouldSetSessionIdOnNewCampaign = function () {
              return (
                this.shouldTrackNewCampaign &&
                !!this.options.resetSessionOnNewCampaign
              );
            }),
            e
          );
        })(),
        ee = (function () {
          function e() {}
          return (
            (e.prototype.getApplicationContext = function () {
              return {
                versionName: this.versionName,
                language: te(),
                platform: "Web",
                os: void 0,
                deviceModel: void 0,
              };
            }),
            e
          );
        })(),
        te = function () {
          return (
            ("undefined" !== typeof navigator &&
              ((navigator.languages && navigator.languages[0]) ||
                navigator.language)) ||
            ""
          );
        },
        ne = (function () {
          function e() {
            this.queue = [];
          }
          return (
            (e.prototype.logEvent = function (e) {
              this.receiver
                ? this.receiver(e)
                : this.queue.length < 512 && this.queue.push(e);
            }),
            (e.prototype.setEventReceiver = function (e) {
              (this.receiver = e),
                this.queue.length > 0 &&
                  (this.queue.forEach(function (t) {
                    e(t);
                  }),
                  (this.queue = []));
            }),
            e
          );
        })(),
        re = function () {
          return (
            (re =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            re.apply(this, arguments)
          );
        },
        ie = function (e, t) {
          var n = typeof e;
          if (n !== typeof t) return !1;
          for (
            var r = 0, i = ["string", "number", "boolean", "undefined"];
            r < i.length;
            r++
          ) {
            if (i[r] === n) return e === t;
          }
          if (null == e && null == t) return !0;
          if (null == e || null == t) return !1;
          if (e.length !== t.length) return !1;
          var o = Array.isArray(e),
            s = Array.isArray(t);
          if (o !== s) return !1;
          if (!o || !s) {
            var a = Object.keys(e).sort(),
              u = Object.keys(t).sort();
            if (!ie(a, u)) return !1;
            var c = !0;
            return (
              Object.keys(e).forEach(function (n) {
                ie(e[n], t[n]) || (c = !1);
              }),
              c
            );
          }
          for (var l = 0; l < e.length; l++) if (!ie(e[l], t[l])) return !1;
          return !0;
        };
      Object.entries ||
        (Object.entries = function (e) {
          for (var t = Object.keys(e), n = t.length, r = new Array(n); n--; )
            r[n] = [t[n], e[t[n]]];
          return r;
        });
      var oe,
        se = (function () {
          function e() {
            (this.identity = { userProperties: {} }),
              (this.listeners = new Set());
          }
          return (
            (e.prototype.editIdentity = function () {
              var e = this,
                t = re({}, this.identity.userProperties),
                n = re(re({}, this.identity), { userProperties: t });
              return {
                setUserId: function (e) {
                  return (n.userId = e), this;
                },
                setDeviceId: function (e) {
                  return (n.deviceId = e), this;
                },
                setUserProperties: function (e) {
                  return (n.userProperties = e), this;
                },
                setOptOut: function (e) {
                  return (n.optOut = e), this;
                },
                updateUserProperties: function (e) {
                  for (
                    var t = n.userProperties || {},
                      r = 0,
                      i = Object.entries(e);
                    r < i.length;
                    r++
                  ) {
                    var o = i[r],
                      s = o[0],
                      a = o[1];
                    switch (s) {
                      case "$set":
                        for (
                          var u = 0, c = Object.entries(a);
                          u < c.length;
                          u++
                        ) {
                          var l = c[u],
                            d = l[0],
                            f = l[1];
                          t[d] = f;
                        }
                        break;
                      case "$unset":
                        for (var v = 0, p = Object.keys(a); v < p.length; v++) {
                          delete t[(d = p[v])];
                        }
                        break;
                      case "$clearAll":
                        t = {};
                    }
                  }
                  return (n.userProperties = t), this;
                },
                commit: function () {
                  return e.setIdentity(n), this;
                },
              };
            }),
            (e.prototype.getIdentity = function () {
              return re({}, this.identity);
            }),
            (e.prototype.setIdentity = function (e) {
              var t = re({}, this.identity);
              (this.identity = re({}, e)),
                ie(t, this.identity) ||
                  this.listeners.forEach(function (t) {
                    t(e);
                  });
            }),
            (e.prototype.addIdentityListener = function (e) {
              this.listeners.add(e);
            }),
            (e.prototype.removeIdentityListener = function (e) {
              this.listeners.delete(e);
            }),
            e
          );
        })(),
        ae =
          "undefined" !== typeof globalThis
            ? globalThis
            : "undefined" !== typeof n.g
            ? n.g
            : self,
        ue = (function () {
          function e() {
            (this.identityStore = new se()),
              (this.eventBridge = new ne()),
              (this.applicationContextProvider = new ee());
          }
          return (
            (e.getInstance = function (t) {
              return (
                ae.analyticsConnectorInstances ||
                  (ae.analyticsConnectorInstances = {}),
                ae.analyticsConnectorInstances[t] ||
                  (ae.analyticsConnectorInstances[t] = new e()),
                ae.analyticsConnectorInstances[t]
              );
            }),
            e
          );
        })(),
        ce = function (e) {
          return void 0 === e && (e = "$default_instance"), ue.getInstance(e);
        },
        le = (function () {
          function e() {
            (this.name = "identity"),
              (this.type = "before"),
              (this.identityStore = ce().identityStore);
          }
          return (
            (e.prototype.execute = function (e) {
              return (0, i.__awaiter)(this, void 0, void 0, function () {
                var t;
                return (0, i.__generator)(this, function (n) {
                  return (
                    (t = e.user_properties) &&
                      this.identityStore
                        .editIdentity()
                        .updateUserProperties(t)
                        .commit(),
                    [2, e]
                  );
                });
              });
            }),
            (e.prototype.setup = function (e) {
              return (0, i.__awaiter)(this, void 0, void 0, function () {
                return (0, i.__generator)(this, function (t) {
                  return (
                    e.instanceName &&
                      (this.identityStore = ce(e.instanceName).identityStore),
                    [2]
                  );
                });
              });
            }),
            e
          );
        })(),
        de = function (e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n],
              i = r.name,
              o = r.args,
              s = r.resolve,
              a = e && e[i];
            if ("function" === typeof a) {
              var u = a.apply(e, o);
              "function" === typeof s &&
                s(null === u || void 0 === u ? void 0 : u.promise);
            }
          }
          return e;
        },
        fe = function (e) {
          return e && void 0 !== e._q;
        },
        ve = function () {
          var e, t, n, r;
          if ("undefined" === typeof navigator) return "";
          var i = navigator.userLanguage;
          return null !==
            (r =
              null !==
                (n =
                  null !==
                    (t =
                      null === (e = navigator.languages) || void 0 === e
                        ? void 0
                        : e[0]) && void 0 !== t
                    ? t
                    : navigator.language) && void 0 !== n
                ? n
                : i) && void 0 !== r
            ? r
            : "";
        },
        pe = (function () {
          function e() {
            (this.name = "@amplitude/plugin-context-browser"),
              (this.type = "before"),
              (this.library = "amplitude-ts/".concat("2.11.7")),
              "undefined" !== typeof navigator &&
                (this.userAgent = navigator.userAgent);
          }
          return (
            (e.prototype.setup = function (e) {
              return (this.config = e), Promise.resolve(void 0);
            }),
            (e.prototype.execute = function (e) {
              var t, n;
              return (0, i.__awaiter)(this, void 0, void 0, function () {
                var r, o, s;
                return (0, i.__generator)(this, function (a) {
                  return (
                    (r = new Date().getTime()),
                    (o =
                      null !== (t = this.config.lastEventId) && void 0 !== t
                        ? t
                        : -1),
                    (s = null !== (n = e.event_id) && void 0 !== n ? n : o + 1),
                    (this.config.lastEventId = s),
                    e.time || (this.config.lastEventTime = r),
                    [
                      2,
                      (0, i.__assign)(
                        (0, i.__assign)(
                          (0, i.__assign)(
                            (0, i.__assign)(
                              (0, i.__assign)(
                                (0, i.__assign)(
                                  (0, i.__assign)(
                                    (0, i.__assign)(
                                      {
                                        user_id: this.config.userId,
                                        device_id: this.config.deviceId,
                                        session_id: this.config.sessionId,
                                        time: r,
                                      },
                                      this.config.appVersion && {
                                        app_version: this.config.appVersion,
                                      }
                                    ),
                                    this.config.trackingOptions.platform && {
                                      platform: "Web",
                                    }
                                  ),
                                  this.config.trackingOptions.language && {
                                    language: ve(),
                                  }
                                ),
                                this.config.trackingOptions.ipAddress && {
                                  ip: "$remote",
                                }
                              ),
                              {
                                insert_id: k(),
                                partner_id: this.config.partnerId,
                                plan: this.config.plan,
                              }
                            ),
                            this.config.ingestionMetadata && {
                              ingestion_metadata: {
                                source_name:
                                  this.config.ingestionMetadata.sourceName,
                                source_version:
                                  this.config.ingestionMetadata.sourceVersion,
                              },
                            }
                          ),
                          e
                        ),
                        {
                          event_id: s,
                          library: this.library,
                          user_agent: this.userAgent,
                        }
                      ),
                    ]
                  );
                });
              });
            }),
            e
          );
        })(),
        he = (function () {
          function e() {
            this.memoryStorage = new Map();
          }
          return (
            (e.prototype.isEnabled = function () {
              return (0, i.__awaiter)(this, void 0, void 0, function () {
                return (0, i.__generator)(this, function (e) {
                  return [2, !0];
                });
              });
            }),
            (e.prototype.get = function (e) {
              return (0, i.__awaiter)(this, void 0, void 0, function () {
                return (0, i.__generator)(this, function (t) {
                  return [2, this.memoryStorage.get(e)];
                });
              });
            }),
            (e.prototype.getRaw = function (e) {
              return (0, i.__awaiter)(this, void 0, void 0, function () {
                var t;
                return (0, i.__generator)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.get(e)];
                    case 1:
                      return [2, (t = n.sent()) ? JSON.stringify(t) : void 0];
                  }
                });
              });
            }),
            (e.prototype.set = function (e, t) {
              return (0, i.__awaiter)(this, void 0, void 0, function () {
                return (0, i.__generator)(this, function (n) {
                  return this.memoryStorage.set(e, t), [2];
                });
              });
            }),
            (e.prototype.remove = function (e) {
              return (0, i.__awaiter)(this, void 0, void 0, function () {
                return (0, i.__generator)(this, function (t) {
                  return this.memoryStorage.delete(e), [2];
                });
              });
            }),
            (e.prototype.reset = function () {
              return (0, i.__awaiter)(this, void 0, void 0, function () {
                return (0, i.__generator)(this, function (e) {
                  return this.memoryStorage.clear(), [2];
                });
              });
            }),
            e
          );
        })(),
        ge = function (e, t, n) {
          return (
            void 0 === t && (t = ""),
            void 0 === n && (n = 10),
            [f, t, e.substring(0, n)].filter(Boolean).join("_")
          );
        },
        me = (function () {
          function e(e) {
            this.options = (0, i.__assign)({}, e);
          }
          return (
            (e.prototype.isEnabled = function () {
              return (0, i.__awaiter)(this, void 0, void 0, function () {
                var t, n;
                return (0, i.__generator)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      if (!J()) return [2, !1];
                      (e.testValue = String(Date.now())),
                        (t = new e(this.options)),
                        (n = "AMP_TEST"),
                        (r.label = 1);
                    case 1:
                      return (
                        r.trys.push([1, 4, 5, 7]), [4, t.set(n, e.testValue)]
                      );
                    case 2:
                      return r.sent(), [4, t.get(n)];
                    case 3:
                      return [2, r.sent() === e.testValue];
                    case 4:
                      return r.sent(), [2, !1];
                    case 5:
                      return [4, t.remove(n)];
                    case 6:
                      return r.sent(), [7];
                    case 7:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.get = function (e) {
              var t;
              return (0, i.__awaiter)(this, void 0, void 0, function () {
                var n, r;
                return (0, i.__generator)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return [4, this.getRaw(e)];
                    case 1:
                      if (!(n = i.sent())) return [2, void 0];
                      try {
                        return void 0 ===
                          (r = null !== (t = ye(n)) && void 0 !== t ? t : _e(n))
                          ? (console.error(
                              "Amplitude Logger [Error]: Failed to decode cookie value for key: "
                                .concat(e, ", value: ")
                                .concat(n)
                            ),
                            [2, void 0])
                          : [2, JSON.parse(r)];
                      } catch (o) {
                        return (
                          console.error(
                            "Amplitude Logger [Error]: Failed to parse cookie value for key: "
                              .concat(e, ", value: ")
                              .concat(n)
                          ),
                          [2, void 0]
                        );
                      }
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.getRaw = function (e) {
              var t, n;
              return (0, i.__awaiter)(this, void 0, void 0, function () {
                var r, o, s;
                return (0, i.__generator)(this, function (i) {
                  return (
                    (r = J()),
                    (o =
                      null !==
                        (n =
                          null ===
                            (t =
                              null === r || void 0 === r
                                ? void 0
                                : r.document) || void 0 === t
                            ? void 0
                            : t.cookie.split("; ")) && void 0 !== n
                        ? n
                        : []),
                    (s = o.find(function (t) {
                      return 0 === t.indexOf(e + "=");
                    }))
                      ? [2, s.substring(e.length + 1)]
                      : [2, void 0]
                  );
                });
              });
            }),
            (e.prototype.set = function (e, t) {
              var n;
              return (0, i.__awaiter)(this, void 0, void 0, function () {
                var r, o, s, a, u, c, l;
                return (0, i.__generator)(this, function (i) {
                  try {
                    (r =
                      null !== (n = this.options.expirationDays) && void 0 !== n
                        ? n
                        : 0),
                      (s = void 0),
                      (o = null !== t ? r : -1) &&
                        ((a = new Date()).setTime(
                          a.getTime() + 24 * o * 60 * 60 * 1e3
                        ),
                        (s = a)),
                      (u = ""
                        .concat(e, "=")
                        .concat(btoa(encodeURIComponent(JSON.stringify(t))))),
                      s && (u += "; expires=".concat(s.toUTCString())),
                      (u += "; path=/"),
                      this.options.domain &&
                        (u += "; domain=".concat(this.options.domain)),
                      this.options.secure && (u += "; Secure"),
                      this.options.sameSite &&
                        (u += "; SameSite=".concat(this.options.sameSite)),
                      (c = J()) && (c.document.cookie = u);
                  } catch (d) {
                    (l = d instanceof Error ? d.message : String(d)),
                      console.error(
                        "Amplitude Logger [Error]: Failed to set cookie for key: "
                          .concat(e, ". Error: ")
                          .concat(l)
                      );
                  }
                  return [2];
                });
              });
            }),
            (e.prototype.remove = function (e) {
              return (0, i.__awaiter)(this, void 0, void 0, function () {
                return (0, i.__generator)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [4, this.set(e, null)];
                    case 1:
                      return t.sent(), [2];
                  }
                });
              });
            }),
            (e.prototype.reset = function () {
              return (0, i.__awaiter)(this, void 0, void 0, function () {
                return (0, i.__generator)(this, function (e) {
                  return [2];
                });
              });
            }),
            e
          );
        })(),
        ye = function (e) {
          try {
            return decodeURIComponent(atob(e));
          } catch (t) {
            return;
          }
        },
        _e = function (e) {
          try {
            return decodeURIComponent(atob(decodeURIComponent(e)));
          } catch (t) {
            return;
          }
        },
        be = (function () {
          function e() {}
          return (
            (e.prototype.send = function (e, t) {
              return Promise.resolve(null);
            }),
            (e.prototype.buildResponse = function (e) {
              var t,
                n,
                r,
                i,
                s,
                a,
                u,
                c,
                l,
                d,
                f,
                v,
                p,
                h,
                g,
                m,
                y,
                _,
                b,
                w,
                E,
                k;
              if ("object" !== typeof e) return null;
              var S = e.code || 0,
                T = this.buildStatus(S);
              switch (T) {
                case o.Success:
                  return {
                    status: T,
                    statusCode: S,
                    body: {
                      eventsIngested:
                        null !== (t = e.events_ingested) && void 0 !== t
                          ? t
                          : 0,
                      payloadSizeBytes:
                        null !== (n = e.payload_size_bytes) && void 0 !== n
                          ? n
                          : 0,
                      serverUploadTime:
                        null !== (r = e.server_upload_time) && void 0 !== r
                          ? r
                          : 0,
                    },
                  };
                case o.Invalid:
                  return {
                    status: T,
                    statusCode: S,
                    body: {
                      error: null !== (i = e.error) && void 0 !== i ? i : "",
                      missingField:
                        null !== (s = e.missing_field) && void 0 !== s ? s : "",
                      eventsWithInvalidFields:
                        null !== (a = e.events_with_invalid_fields) &&
                        void 0 !== a
                          ? a
                          : {},
                      eventsWithMissingFields:
                        null !== (u = e.events_with_missing_fields) &&
                        void 0 !== u
                          ? u
                          : {},
                      eventsWithInvalidIdLengths:
                        null !== (c = e.events_with_invalid_id_lengths) &&
                        void 0 !== c
                          ? c
                          : {},
                      epsThreshold:
                        null !== (l = e.eps_threshold) && void 0 !== l ? l : 0,
                      exceededDailyQuotaDevices:
                        null !== (d = e.exceeded_daily_quota_devices) &&
                        void 0 !== d
                          ? d
                          : {},
                      silencedDevices:
                        null !== (f = e.silenced_devices) && void 0 !== f
                          ? f
                          : [],
                      silencedEvents:
                        null !== (v = e.silenced_events) && void 0 !== v
                          ? v
                          : [],
                      throttledDevices:
                        null !== (p = e.throttled_devices) && void 0 !== p
                          ? p
                          : {},
                      throttledEvents:
                        null !== (h = e.throttled_events) && void 0 !== h
                          ? h
                          : [],
                    },
                  };
                case o.PayloadTooLarge:
                  return {
                    status: T,
                    statusCode: S,
                    body: {
                      error: null !== (g = e.error) && void 0 !== g ? g : "",
                    },
                  };
                case o.RateLimit:
                  return {
                    status: T,
                    statusCode: S,
                    body: {
                      error: null !== (m = e.error) && void 0 !== m ? m : "",
                      epsThreshold:
                        null !== (y = e.eps_threshold) && void 0 !== y ? y : 0,
                      throttledDevices:
                        null !== (_ = e.throttled_devices) && void 0 !== _
                          ? _
                          : {},
                      throttledUsers:
                        null !== (b = e.throttled_users) && void 0 !== b
                          ? b
                          : {},
                      exceededDailyQuotaDevices:
                        null !== (w = e.exceeded_daily_quota_devices) &&
                        void 0 !== w
                          ? w
                          : {},
                      exceededDailyQuotaUsers:
                        null !== (E = e.exceeded_daily_quota_users) &&
                        void 0 !== E
                          ? E
                          : {},
                      throttledEvents:
                        null !== (k = e.throttled_events) && void 0 !== k
                          ? k
                          : [],
                    },
                  };
                case o.Timeout:
                default:
                  return { status: T, statusCode: S };
              }
            }),
            (e.prototype.buildStatus = function (e) {
              return e >= 200 && e < 300
                ? o.Success
                : 429 === e
                ? o.RateLimit
                : 413 === e
                ? o.PayloadTooLarge
                : 408 === e
                ? o.Timeout
                : e >= 400 && e < 500
                ? o.Invalid
                : e >= 500
                ? o.Failed
                : o.Unknown;
            }),
            e
          );
        })(),
        we = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            (0, i.__extends)(t, e),
            (t.prototype.send = function (e, t) {
              return (0, i.__awaiter)(this, void 0, void 0, function () {
                var n, r, o;
                return (0, i.__generator)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      if ("undefined" === typeof fetch)
                        throw new Error("FetchTransport is not supported");
                      return (
                        (n = {
                          headers: {
                            "Content-Type": "application/json",
                            Accept: "*/*",
                          },
                          body: JSON.stringify(t),
                          method: "POST",
                        }),
                        [4, fetch(e, n)]
                      );
                    case 1:
                      return [4, (r = i.sent()).text()];
                    case 2:
                      o = i.sent();
                      try {
                        return [2, this.buildResponse(JSON.parse(o))];
                      } catch (s) {
                        return [2, this.buildResponse({ code: r.status })];
                      }
                      return [2];
                  }
                });
              });
            }),
            t
          );
        })(be),
        Ee = (function () {
          function e(e) {
            this.storage = e;
          }
          return (
            (e.prototype.isEnabled = function () {
              return (0, i.__awaiter)(this, void 0, void 0, function () {
                var t, n, r;
                return (0, i.__generator)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      if (!this.storage) return [2, !1];
                      (t = String(Date.now())),
                        (n = new e(this.storage)),
                        (r = "AMP_TEST"),
                        (i.label = 1);
                    case 1:
                      return i.trys.push([1, 4, 5, 7]), [4, n.set(r, t)];
                    case 2:
                      return i.sent(), [4, n.get(r)];
                    case 3:
                      return [2, i.sent() === t];
                    case 4:
                      return i.sent(), [2, !1];
                    case 5:
                      return [4, n.remove(r)];
                    case 6:
                      return i.sent(), [7];
                    case 7:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.get = function (e) {
              return (0, i.__awaiter)(this, void 0, void 0, function () {
                var t;
                return (0, i.__generator)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return n.trys.push([0, 2, , 3]), [4, this.getRaw(e)];
                    case 1:
                      return (t = n.sent()) ? [2, JSON.parse(t)] : [2, void 0];
                    case 2:
                      return (
                        n.sent(),
                        console.error(
                          "[Amplitude] Error: Could not get value from storage"
                        ),
                        [2, void 0]
                      );
                    case 3:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.getRaw = function (e) {
              var t;
              return (0, i.__awaiter)(this, void 0, void 0, function () {
                return (0, i.__generator)(this, function (n) {
                  return [
                    2,
                    (null === (t = this.storage) || void 0 === t
                      ? void 0
                      : t.getItem(e)) || void 0,
                  ];
                });
              });
            }),
            (e.prototype.set = function (e, t) {
              var n;
              return (0, i.__awaiter)(this, void 0, void 0, function () {
                return (0, i.__generator)(this, function (r) {
                  try {
                    null === (n = this.storage) ||
                      void 0 === n ||
                      n.setItem(e, JSON.stringify(t));
                  } catch (i) {}
                  return [2];
                });
              });
            }),
            (e.prototype.remove = function (e) {
              var t;
              return (0, i.__awaiter)(this, void 0, void 0, function () {
                return (0, i.__generator)(this, function (n) {
                  try {
                    null === (t = this.storage) ||
                      void 0 === t ||
                      t.removeItem(e);
                  } catch (r) {}
                  return [2];
                });
              });
            }),
            (e.prototype.reset = function () {
              var e;
              return (0, i.__awaiter)(this, void 0, void 0, function () {
                return (0, i.__generator)(this, function (t) {
                  try {
                    null === (e = this.storage) || void 0 === e || e.clear();
                  } catch (n) {}
                  return [2];
                });
              });
            }),
            e
          );
        })(),
        ke = 1e3,
        Se = (function (e) {
          function t(t) {
            var n,
              r = this;
            return (
              ((r =
                e.call(
                  this,
                  null === (n = J()) || void 0 === n ? void 0 : n.localStorage
                ) || this).loggerProvider =
                null === t || void 0 === t ? void 0 : t.loggerProvider),
              r
            );
          }
          return (
            (0, i.__extends)(t, e),
            (t.prototype.set = function (t, n) {
              var r;
              return (0, i.__awaiter)(this, void 0, void 0, function () {
                var o;
                return (0, i.__generator)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return Array.isArray(n) && n.length > ke
                        ? ((o = n.length - ke),
                          [4, e.prototype.set.call(this, t, n.slice(0, ke))])
                        : [3, 2];
                    case 1:
                      return (
                        i.sent(),
                        null === (r = this.loggerProvider) ||
                          void 0 === r ||
                          r.error(
                            "Failed to save "
                              .concat(
                                o,
                                " events because the queue length exceeded "
                              )
                              .concat(ke, ".")
                          ),
                        [3, 4]
                      );
                    case 2:
                      return [4, e.prototype.set.call(this, t, n)];
                    case 3:
                      i.sent(), (i.label = 4);
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            t
          );
        })(Ee),
        Te = (function (e) {
          function t() {
            var t;
            return (
              e.call(
                this,
                null === (t = J()) || void 0 === t ? void 0 : t.sessionStorage
              ) || this
            );
          }
          return (0, i.__extends)(t, e), t;
        })(Ee),
        Ie = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.state = { done: 4 }), t;
          }
          return (
            (0, i.__extends)(t, e),
            (t.prototype.send = function (e, t) {
              return (0, i.__awaiter)(this, void 0, void 0, function () {
                var n = this;
                return (0, i.__generator)(this, function (r) {
                  return [
                    2,
                    new Promise(function (i, o) {
                      "undefined" === typeof XMLHttpRequest &&
                        o(new Error("XHRTransport is not supported."));
                      var s = new XMLHttpRequest();
                      s.open("POST", e, !0),
                        (s.onreadystatechange = function () {
                          if (s.readyState === n.state.done) {
                            var e = s.responseText;
                            try {
                              i(n.buildResponse(JSON.parse(e)));
                            } catch (r) {
                              i(n.buildResponse({ code: s.status }));
                            }
                          }
                        }),
                        s.setRequestHeader("Content-Type", "application/json"),
                        s.setRequestHeader("Accept", "*/*"),
                        s.send(JSON.stringify(t));
                    }),
                  ];
                });
              });
            }),
            t
          );
        })(be),
        xe = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            (0, i.__extends)(t, e),
            (t.prototype.send = function (e, t) {
              return (0, i.__awaiter)(this, void 0, void 0, function () {
                var n = this;
                return (0, i.__generator)(this, function (r) {
                  return [
                    2,
                    new Promise(function (r, i) {
                      var o = J();
                      if (
                        !(null === o || void 0 === o
                          ? void 0
                          : o.navigator.sendBeacon)
                      )
                        throw new Error("SendBeaconTransport is not supported");
                      try {
                        var s = JSON.stringify(t);
                        return r(
                          o.navigator.sendBeacon(e, JSON.stringify(t))
                            ? n.buildResponse({
                                code: 200,
                                events_ingested: t.events.length,
                                payload_size_bytes: s.length,
                                server_upload_time: Date.now(),
                              })
                            : n.buildResponse({ code: 500 })
                        );
                      } catch (a) {
                        i(a);
                      }
                    }),
                  ];
                });
              });
            }),
            t
          );
        })(be),
        Oe = function (e, t, n) {
          return (
            void 0 === n && (n = !0),
            (0, i.__awaiter)(void 0, void 0, void 0, function () {
              var r, o, s, a, u, c, l, d, v;
              return (0, i.__generator)(this, function (p) {
                switch (p.label) {
                  case 0:
                    return (
                      (r = (function (e) {
                        return ""
                          .concat(f.toLowerCase(), "_")
                          .concat(e.substring(0, 6));
                      })(e)),
                      [4, t.getRaw(r)]
                    );
                  case 1:
                    return (o = p.sent())
                      ? n
                        ? [4, t.remove(r)]
                        : [3, 3]
                      : [2, { optOut: !1 }];
                  case 2:
                    p.sent(), (p.label = 3);
                  case 3:
                    return (
                      (s = (0, i.__read)(o.split("."), 6)),
                      (a = s[0]),
                      (u = s[1]),
                      (c = s[2]),
                      (l = s[3]),
                      (d = s[4]),
                      (v = s[5]),
                      [
                        2,
                        {
                          deviceId: a,
                          userId: Ae(u),
                          sessionId: Pe(l),
                          lastEventId: Pe(v),
                          lastEventTime: Pe(d),
                          optOut: Boolean(c),
                        },
                      ]
                    );
                }
              });
            })
          );
        },
        Pe = function (e) {
          var t = parseInt(e, 32);
          if (!isNaN(t)) return t;
        },
        Ae = function (e) {
          if (atob && escape && e)
            try {
              return decodeURIComponent(escape(atob(e)));
            } catch (t) {
              return;
            }
        },
        Ce = "[Amplitude]",
        Ne = ("".concat(Ce, " Page Viewed"), "".concat(Ce, " Form Started")),
        Le = "".concat(Ce, " Form Submitted"),
        Re = "".concat(Ce, " File Downloaded"),
        je = "session_start",
        qe = "session_end",
        De = "".concat(Ce, " File Extension"),
        Ue = "".concat(Ce, " File Name"),
        Me = "".concat(Ce, " Link ID"),
        Fe = "".concat(Ce, " Link Text"),
        $e = "".concat(Ce, " Link URL"),
        ze = "".concat(Ce, " Form ID"),
        Ve = "".concat(Ce, " Form Name"),
        Ke = "".concat(Ce, " Form Destination"),
        He = "cookie",
        We = (function (e) {
          function t(
            t,
            n,
            i,
            o,
            s,
            a,
            u,
            c,
            l,
            d,
            f,
            v,
            p,
            h,
            g,
            y,
            _,
            b,
            w,
            E,
            k,
            S,
            T,
            I,
            x,
            O,
            P,
            A,
            C,
            N,
            L,
            R,
            j,
            q
          ) {
            void 0 === i && (i = new he()),
              void 0 === o &&
                (o = {
                  domain: "",
                  expiration: 365,
                  sameSite: "Lax",
                  secure: !1,
                  upgrade: !0,
                }),
              void 0 === c && (c = 1e3),
              void 0 === l && (l = 5),
              void 0 === d && (d = 30),
              void 0 === f && (f = He),
              void 0 === y && (y = new m()),
              void 0 === _ && (_ = r.Warn),
              void 0 === w && (w = !1),
              void 0 === E && (E = !1),
              void 0 === T && (T = ""),
              void 0 === I && (I = "US"),
              void 0 === O && (O = 18e5),
              void 0 === P && (P = new Se({ loggerProvider: y })),
              void 0 === A &&
                (A = { ipAddress: !0, language: !0, platform: !0 }),
              void 0 === C && (C = "fetch"),
              void 0 === N && (N = !1),
              void 0 === L && (L = !1);
            var D =
              e.call(this, {
                apiKey: t,
                storageProvider: P,
                transportProvider: Qe(C),
              }) || this;
            return (
              (D.apiKey = t),
              (D.appVersion = n),
              (D.cookieOptions = o),
              (D.defaultTracking = s),
              (D.autocapture = a),
              (D.flushIntervalMillis = c),
              (D.flushMaxRetries = l),
              (D.flushQueueSize = d),
              (D.identityStorage = f),
              (D.ingestionMetadata = v),
              (D.instanceName = p),
              (D.loggerProvider = y),
              (D.logLevel = _),
              (D.minIdLength = b),
              (D.offline = w),
              (D.partnerId = k),
              (D.plan = S),
              (D.serverUrl = T),
              (D.serverZone = I),
              (D.sessionTimeout = O),
              (D.storageProvider = P),
              (D.trackingOptions = A),
              (D.transport = C),
              (D.useBatch = N),
              (D.fetchRemoteConfig = L),
              (D._optOut = !1),
              (D._cookieStorage = i),
              (D.deviceId = u),
              (D.lastEventId = h),
              (D.lastEventTime = g),
              (D.optOut = E),
              (D.sessionId = x),
              (D.pageCounter = j),
              (D.userId = R),
              (D.debugLogsEnabled = q),
              D.loggerProvider.enable(q ? r.Debug : D.logLevel),
              D
            );
          }
          return (
            (0, i.__extends)(t, e),
            Object.defineProperty(t.prototype, "cookieStorage", {
              get: function () {
                return this._cookieStorage;
              },
              set: function (e) {
                this._cookieStorage !== e &&
                  ((this._cookieStorage = e), this.updateStorage());
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "deviceId", {
              get: function () {
                return this._deviceId;
              },
              set: function (e) {
                this._deviceId !== e &&
                  ((this._deviceId = e), this.updateStorage());
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "userId", {
              get: function () {
                return this._userId;
              },
              set: function (e) {
                this._userId !== e &&
                  ((this._userId = e), this.updateStorage());
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "sessionId", {
              get: function () {
                return this._sessionId;
              },
              set: function (e) {
                this._sessionId !== e &&
                  ((this._sessionId = e), this.updateStorage());
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "optOut", {
              get: function () {
                return this._optOut;
              },
              set: function (e) {
                this._optOut !== e &&
                  ((this._optOut = e), this.updateStorage());
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "lastEventTime", {
              get: function () {
                return this._lastEventTime;
              },
              set: function (e) {
                this._lastEventTime !== e &&
                  ((this._lastEventTime = e), this.updateStorage());
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "lastEventId", {
              get: function () {
                return this._lastEventId;
              },
              set: function (e) {
                this._lastEventId !== e &&
                  ((this._lastEventId = e), this.updateStorage());
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "pageCounter", {
              get: function () {
                return this._pageCounter;
              },
              set: function (e) {
                this._pageCounter !== e &&
                  ((this._pageCounter = e), this.updateStorage());
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "debugLogsEnabled", {
              set: function (e) {
                this._debugLogsEnabled !== e &&
                  ((this._debugLogsEnabled = e), this.updateStorage());
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.updateStorage = function () {
              var e = {
                deviceId: this._deviceId,
                userId: this._userId,
                sessionId: this._sessionId,
                optOut: this._optOut,
                lastEventTime: this._lastEventTime,
                lastEventId: this._lastEventId,
                pageCounter: this._pageCounter,
                debugLogsEnabled: this._debugLogsEnabled,
              };
              this.cookieStorage.set(ge(this.apiKey), e);
            }),
            t
          );
        })(_),
        Be = function (e, t, n) {
          return (
            void 0 === t && (t = {}),
            (0, i.__awaiter)(void 0, void 0, void 0, function () {
              var r,
                o,
                s,
                a,
                u,
                c,
                l,
                d,
                f,
                v,
                p,
                h,
                g,
                m,
                y,
                _,
                b,
                w,
                E,
                S,
                T,
                I,
                x,
                O,
                P,
                A,
                C,
                N,
                L,
                R,
                j,
                q,
                D,
                U,
                M,
                F,
                $,
                z,
                V,
                K,
                H,
                W,
                B;
              return (0, i.__generator)(this, function (J) {
                switch (J.label) {
                  case 0:
                    return (
                      (r = t.identityStorage || He),
                      (E = {}),
                      r === He ? [3, 1] : ((s = ""), [3, 5])
                    );
                  case 1:
                    return null ===
                      (T =
                        null === (S = t.cookieOptions) || void 0 === S
                          ? void 0
                          : S.domain) || void 0 === T
                      ? [3, 2]
                      : ((a = T), [3, 4]);
                  case 2:
                    return [4, Ye()];
                  case 3:
                    (a = J.sent()), (J.label = 4);
                  case 4:
                    (s = a), (J.label = 5);
                  case 5:
                    return (
                      (o = i.__assign.apply(void 0, [
                        ((E.domain = s),
                        (E.expiration = 365),
                        (E.sameSite = "Lax"),
                        (E.secure = !1),
                        (E.upgrade = !0),
                        E),
                        t.cookieOptions,
                      ])),
                      (u = Je(t.identityStorage, o)),
                      [
                        4,
                        Oe(
                          e,
                          u,
                          null ===
                            (x =
                              null === (I = t.cookieOptions) || void 0 === I
                                ? void 0
                                : I.upgrade) ||
                            void 0 === x ||
                            x
                        ),
                      ]
                    );
                  case 6:
                    return (c = J.sent()), [4, u.get(ge(e))];
                  case 7:
                    return (
                      (l = J.sent()),
                      (d = Q()),
                      (f =
                        null !==
                          (N =
                            null !==
                              (C =
                                null !==
                                  (A =
                                    null !==
                                      (P =
                                        null !== (O = t.deviceId) &&
                                        void 0 !== O
                                          ? O
                                          : d.ampDeviceId) && void 0 !== P
                                      ? P
                                      : d.deviceId) && void 0 !== A
                                  ? A
                                  : null === l || void 0 === l
                                  ? void 0
                                  : l.deviceId) && void 0 !== C
                              ? C
                              : c.deviceId) && void 0 !== N
                          ? N
                          : k()),
                      (v =
                        null !==
                          (L =
                            null === l || void 0 === l
                              ? void 0
                              : l.lastEventId) && void 0 !== L
                          ? L
                          : c.lastEventId),
                      (p =
                        null !==
                          (R =
                            null === l || void 0 === l
                              ? void 0
                              : l.lastEventTime) && void 0 !== R
                          ? R
                          : c.lastEventTime),
                      (h =
                        null !==
                          (q =
                            null !== (j = t.optOut) && void 0 !== j
                              ? j
                              : null === l || void 0 === l
                              ? void 0
                              : l.optOut) && void 0 !== q
                          ? q
                          : c.optOut),
                      (g =
                        null !==
                          (D =
                            null === l || void 0 === l
                              ? void 0
                              : l.sessionId) && void 0 !== D
                          ? D
                          : c.sessionId),
                      (m =
                        null !==
                          (M =
                            null !== (U = t.userId) && void 0 !== U
                              ? U
                              : null === l || void 0 === l
                              ? void 0
                              : l.userId) && void 0 !== M
                          ? M
                          : c.userId),
                      (n.previousSessionDeviceId =
                        null !==
                          (F =
                            null === l || void 0 === l ? void 0 : l.deviceId) &&
                        void 0 !== F
                          ? F
                          : c.deviceId),
                      (n.previousSessionUserId =
                        null !==
                          ($ =
                            null === l || void 0 === l ? void 0 : l.userId) &&
                        void 0 !== $
                          ? $
                          : c.userId),
                      (y = {
                        ipAddress:
                          null ===
                            (V =
                              null === (z = t.trackingOptions) || void 0 === z
                                ? void 0
                                : z.ipAddress) ||
                          void 0 === V ||
                          V,
                        language:
                          null ===
                            (H =
                              null === (K = t.trackingOptions) || void 0 === K
                                ? void 0
                                : K.language) ||
                          void 0 === H ||
                          H,
                        platform:
                          null ===
                            (B =
                              null === (W = t.trackingOptions) || void 0 === W
                                ? void 0
                                : W.platform) ||
                          void 0 === B ||
                          B,
                      }),
                      (_ = null === l || void 0 === l ? void 0 : l.pageCounter),
                      (b =
                        null === l || void 0 === l
                          ? void 0
                          : l.debugLogsEnabled),
                      void 0 !== t.autocapture &&
                        (t.defaultTracking = t.autocapture),
                      [
                        4,
                        (w = new We(
                          e,
                          t.appVersion,
                          u,
                          o,
                          t.defaultTracking,
                          t.autocapture,
                          f,
                          t.flushIntervalMillis,
                          t.flushMaxRetries,
                          t.flushQueueSize,
                          r,
                          t.ingestionMetadata,
                          t.instanceName,
                          v,
                          p,
                          t.loggerProvider,
                          t.logLevel,
                          t.minIdLength,
                          t.offline,
                          h,
                          t.partnerId,
                          t.plan,
                          t.serverUrl,
                          t.serverZone,
                          g,
                          t.sessionTimeout,
                          t.storageProvider,
                          y,
                          t.transport,
                          t.useBatch,
                          t.fetchRemoteConfig,
                          m,
                          _,
                          b
                        )).storageProvider.isEnabled(),
                      ]
                    );
                  case 8:
                    return (
                      J.sent() ||
                        (w.loggerProvider.warn(
                          "Storage provider ".concat(
                            w.storageProvider.constructor.name,
                            " is not enabled. Falling back to MemoryStorage."
                          )
                        ),
                        (w.storageProvider = new he())),
                      [2, w]
                    );
                }
              });
            })
          );
        },
        Je = function (e, t) {
          switch ((void 0 === e && (e = He), void 0 === t && (t = {}), e)) {
            case "localStorage":
              return new Se();
            case "sessionStorage":
              return new Te();
            case "none":
              return new he();
            default:
              return new me(
                (0, i.__assign)((0, i.__assign)({}, t), {
                  expirationDays: t.expiration,
                })
              );
          }
        },
        Qe = function (e) {
          return "xhr" === e ? new Ie() : "beacon" === e ? new xe() : new we();
        },
        Ye = function (e) {
          return (0, i.__awaiter)(void 0, void 0, void 0, function () {
            var t, n, r, o, s, a, u;
            return (0, i.__generator)(this, function (i) {
              switch (i.label) {
                case 0:
                  return [4, new me().isEnabled()];
                case 1:
                  if (
                    !i.sent() ||
                    (!e &&
                      ("undefined" === typeof location || !location.hostname))
                  )
                    return [2, ""];
                  for (
                    t = null !== e && void 0 !== e ? e : location.hostname,
                      n = t.split("."),
                      r = [],
                      o = "AMP_TLDTEST",
                      s = n.length - 2;
                    s >= 0;
                    --s
                  )
                    r.push(n.slice(s).join("."));
                  (s = 0), (i.label = 2);
                case 2:
                  return s < r.length
                    ? ((a = r[s]),
                      [4, (u = new me({ domain: "." + a })).set(o, 1)])
                    : [3, 7];
                case 3:
                  return i.sent(), [4, u.get(o)];
                case 4:
                  return i.sent() ? [4, u.remove(o)] : [3, 6];
                case 5:
                  return i.sent(), [2, "." + a];
                case 6:
                  return s++, [3, 2];
                case 7:
                  return [2, ""];
              }
            });
          });
        },
        Ze = function (e) {
          var t = {};
          for (var n in e) {
            var r = e[n];
            r && (t[n] = r);
          }
          return t;
        },
        Ge = function (e) {
          var t;
          void 0 === e && (e = {});
          var n,
            r,
            o = J(),
            s = void 0,
            a = e.trackOn,
            u = e.trackHistoryChanges,
            c = e.eventType,
            l = void 0 === c ? "[Amplitude] Page Viewed" : c,
            d = function (e) {
              var t = e;
              try {
                t = decodeURI(e);
              } catch (n) {
                null === s ||
                  void 0 === s ||
                  s.error("Malformed URI sequence: ", n);
              }
              return t;
            },
            f = function () {
              return (0, i.__awaiter)(void 0, void 0, void 0, function () {
                var e, t, n;
                return (0, i.__generator)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return (
                        (e = d(
                          ("undefined" !== typeof location && location.href) ||
                            ""
                        )),
                        (n = { event_type: l }),
                        (t = [{}]),
                        [4, Xe()]
                      );
                    case 1:
                      return [
                        2,
                        ((n.event_properties = i.__assign.apply(void 0, [
                          i.__assign.apply(void 0, t.concat([r.sent()])),
                          {
                            "[Amplitude] Page Domain":
                              ("undefined" !== typeof location &&
                                location.hostname) ||
                              "",
                            "[Amplitude] Page Location": e,
                            "[Amplitude] Page Path":
                              ("undefined" !== typeof location &&
                                d(location.pathname)) ||
                              "",
                            "[Amplitude] Page Title":
                              ("undefined" !== typeof document &&
                                document.title) ||
                              "",
                            "[Amplitude] Page URL": e.split("?")[0],
                          },
                        ])),
                        n),
                      ];
                  }
                });
              });
            },
            v = function () {
              return (
                "undefined" === typeof a || ("function" === typeof a && a())
              );
            },
            p = "undefined" !== typeof location ? location.href : null,
            h = function () {
              return (0, i.__awaiter)(void 0, void 0, void 0, function () {
                var e, n, r, o;
                return (0, i.__generator)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return (
                        (e = location.href),
                        (n = tt(u, e, p || "") && v()),
                        (p = e),
                        n
                          ? (null === s ||
                              void 0 === s ||
                              s.log("Tracking page view event"),
                            null !== t && void 0 !== t
                              ? [3, 1]
                              : (void 0, [3, 3]))
                          : [3, 4]
                      );
                    case 1:
                      return (o = (r = t).track), [4, f()];
                    case 2:
                      o.apply(r, [i.sent()]), (i.label = 3);
                    case 3:
                      i.label = 4;
                    case 4:
                      return [2];
                  }
                });
              });
            },
            g = function () {
              h();
            },
            m = {
              name: "@amplitude/plugin-page-view-tracking-browser",
              type: "enrichment",
              setup: function (e, a) {
                return (0, i.__awaiter)(void 0, void 0, void 0, function () {
                  var u, c;
                  return (0, i.__generator)(this, function (l) {
                    switch (l.label) {
                      case 0:
                        return (
                          (t = a),
                          (r = e),
                          (s = e.loggerProvider).log(
                            "Installing @amplitude/plugin-page-view-tracking-browser"
                          ),
                          o &&
                            (o.addEventListener("popstate", g),
                            (n = o.history.pushState),
                            (o.history.pushState = new Proxy(
                              o.history.pushState,
                              {
                                apply: function (e, t, n) {
                                  var r = (0, i.__read)(n, 3),
                                    o = r[0],
                                    s = r[1],
                                    a = r[2];
                                  e.apply(t, [o, s, a]), h();
                                },
                              }
                            ))),
                          v()
                            ? (s.log("Tracking page view event"),
                              (c = (u = t).track),
                              [4, f()])
                            : [3, 2]
                        );
                      case 1:
                        c.apply(u, [l.sent()]), (l.label = 2);
                      case 2:
                        return [2];
                    }
                  });
                });
              },
              execute: function (e) {
                return (0, i.__awaiter)(void 0, void 0, void 0, function () {
                  var t;
                  return (0, i.__generator)(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return "attribution" === a && et(e)
                          ? (null === s ||
                              void 0 === s ||
                              s.log(
                                "Enriching campaign event to page view event with campaign parameters"
                              ),
                            [4, f()])
                          : [3, 2];
                      case 1:
                        (t = n.sent()),
                          (e.event_type = t.event_type),
                          (e.event_properties = (0, i.__assign)(
                            (0, i.__assign)({}, e.event_properties),
                            t.event_properties
                          )),
                          (n.label = 2);
                      case 2:
                        return (
                          r &&
                            e.event_type === l &&
                            ((r.pageCounter = r.pageCounter
                              ? r.pageCounter + 1
                              : 1),
                            (e.event_properties = (0, i.__assign)(
                              (0, i.__assign)({}, e.event_properties),
                              { "[Amplitude] Page Counter": r.pageCounter }
                            ))),
                          [2, e]
                        );
                    }
                  });
                });
              },
              teardown: function () {
                return (0, i.__awaiter)(void 0, void 0, void 0, function () {
                  return (0, i.__generator)(this, function (e) {
                    return (
                      o &&
                        (o.removeEventListener("popstate", g),
                        n && (o.history.pushState = n)),
                      [2]
                    );
                  });
                });
              },
            };
          return m;
        },
        Xe = function () {
          return (0, i.__awaiter)(void 0, void 0, void 0, function () {
            var e;
            return (0, i.__generator)(this, function (t) {
              switch (t.label) {
                case 0:
                  return (e = Ze), [4, new Z().parse()];
                case 1:
                  return [2, e.apply(void 0, [t.sent()])];
              }
            });
          });
        },
        et = function (e) {
          if ("$identify" === e.event_type && e.user_properties) {
            var t = e.user_properties,
              n = t[T.SET] || {},
              r = t[T.UNSET] || {},
              o = (0, i.__spreadArray)(
                (0, i.__spreadArray)([], (0, i.__read)(Object.keys(n)), !1),
                (0, i.__read)(Object.keys(r)),
                !1
              );
            return Object.keys(V).every(function (e) {
              return o.includes(e);
            });
          }
          return !1;
        },
        tt = function (e, t, n) {
          if ("pathOnly" === e) {
            if ("" == n) return !0;
            var r = new URL(t),
              i = new URL(n);
            return r.origin + r.pathname !== i.origin + i.pathname;
          }
          return t !== n;
        },
        nt = function () {
          var e,
            t = [],
            n = function (e, n, r) {
              e.addEventListener(n, r),
                t.push({ element: e, type: n, handler: r });
            };
          return {
            name: "@amplitude/plugin-form-interaction-tracking-browser",
            type: "enrichment",
            setup: function (t, r) {
              return (0, i.__awaiter)(void 0, void 0, void 0, function () {
                var o;
                return (0, i.__generator)(this, function (i) {
                  return (
                    null === (o = J()) ||
                      void 0 === o ||
                      o.addEventListener("load", function () {
                        if (r) {
                          if ("undefined" !== typeof document) {
                            var i = function (e) {
                              var t = !1;
                              n(e, "change", function () {
                                var n;
                                t ||
                                  r.track(
                                    Ne,
                                    (((n = {})[ze] = rt(e.id)),
                                    (n[Ve] = rt(e.name)),
                                    (n[Ke] = e.action),
                                    n)
                                  ),
                                  (t = !0);
                              }),
                                n(e, "submit", function () {
                                  var n, i;
                                  t ||
                                    r.track(
                                      Ne,
                                      (((n = {})[ze] = rt(e.id)),
                                      (n[Ve] = rt(e.name)),
                                      (n[Ke] = e.action),
                                      n)
                                    ),
                                    r.track(
                                      Le,
                                      (((i = {})[ze] = rt(e.id)),
                                      (i[Ve] = rt(e.name)),
                                      (i[Ke] = e.action),
                                      i)
                                    ),
                                    (t = !1);
                                });
                            };
                            Array.from(
                              document.getElementsByTagName("form")
                            ).forEach(i),
                              "undefined" !== typeof MutationObserver &&
                                (e = new MutationObserver(function (e) {
                                  e.forEach(function (e) {
                                    e.addedNodes.forEach(function (e) {
                                      "FORM" === e.nodeName && i(e),
                                        "querySelectorAll" in e &&
                                          "function" ===
                                            typeof e.querySelectorAll &&
                                          Array.from(
                                            e.querySelectorAll("form")
                                          ).map(i);
                                    });
                                  });
                                })).observe(document.body, {
                                  subtree: !0,
                                  childList: !0,
                                });
                          }
                        } else t.loggerProvider.warn("Form interaction tracking requires a later version of @amplitude/analytics-browser. Form interaction events are not tracked.");
                      }),
                    [2]
                  );
                });
              });
            },
            execute: function (e) {
              return (0, i.__awaiter)(void 0, void 0, void 0, function () {
                return (0, i.__generator)(this, function (t) {
                  return [2, e];
                });
              });
            },
            teardown: function () {
              return (0, i.__awaiter)(void 0, void 0, void 0, function () {
                return (0, i.__generator)(this, function (n) {
                  return (
                    null === e || void 0 === e || e.disconnect(),
                    t.forEach(function (e) {
                      var t = e.element,
                        n = e.type,
                        r = e.handler;
                      null === t || void 0 === t || t.removeEventListener(n, r);
                    }),
                    (t = []),
                    [2]
                  );
                });
              });
            },
          };
        },
        rt = function (e) {
          if ("string" === typeof e) return e;
        },
        it = function () {
          var e,
            t = [];
          return {
            name: "@amplitude/plugin-file-download-tracking-browser",
            type: "enrichment",
            setup: function (n, r) {
              return (0, i.__awaiter)(void 0, void 0, void 0, function () {
                var o;
                return (0, i.__generator)(this, function (i) {
                  return (
                    null === (o = J()) ||
                      void 0 === o ||
                      o.addEventListener("load", function () {
                        if (r) {
                          if ("undefined" !== typeof document) {
                            var i = function (e) {
                                var n;
                                try {
                                  n = new URL(e.href, window.location.href);
                                } catch (o) {
                                  return;
                                }
                                var i = s.exec(n.href),
                                  a =
                                    null === i || void 0 === i ? void 0 : i[1];
                                a &&
                                  (function (e, n, r) {
                                    e.addEventListener(n, r),
                                      t.push({
                                        element: e,
                                        type: n,
                                        handler: r,
                                      });
                                  })(e, "click", function () {
                                    var t;
                                    a &&
                                      r.track(
                                        Re,
                                        (((t = {})[De] = a),
                                        (t[Ue] = n.pathname),
                                        (t[Me] = e.id),
                                        (t[Fe] = e.text),
                                        (t[$e] = e.href),
                                        t)
                                      );
                                  });
                              },
                              s =
                                /\.(pdf|xlsx?|docx?|txt|rtf|csv|exe|key|pp(s|t|tx)|7z|pkg|rar|gz|zip|avi|mov|mp4|mpe?g|wmv|midi?|mp3|wav|wma)$/;
                            Array.from(
                              document.getElementsByTagName("a")
                            ).forEach(i),
                              "undefined" !== typeof MutationObserver &&
                                (e = new MutationObserver(function (e) {
                                  e.forEach(function (e) {
                                    e.addedNodes.forEach(function (e) {
                                      "A" === e.nodeName && i(e),
                                        "querySelectorAll" in e &&
                                          "function" ===
                                            typeof e.querySelectorAll &&
                                          Array.from(
                                            e.querySelectorAll("a")
                                          ).map(i);
                                    });
                                  });
                                })).observe(document.body, {
                                  subtree: !0,
                                  childList: !0,
                                });
                          }
                        } else n.loggerProvider.warn("File download tracking requires a later version of @amplitude/analytics-browser. File download events are not tracked.");
                      }),
                    [2]
                  );
                });
              });
            },
            execute: function (e) {
              return (0, i.__awaiter)(void 0, void 0, void 0, function () {
                return (0, i.__generator)(this, function (t) {
                  return [2, e];
                });
              });
            },
            teardown: function () {
              return (0, i.__awaiter)(void 0, void 0, void 0, function () {
                return (0, i.__generator)(this, function (n) {
                  return (
                    null === e || void 0 === e || e.disconnect(),
                    t.forEach(function (e) {
                      var t = e.element,
                        n = e.type,
                        r = e.handler;
                      null === t || void 0 === t || t.removeEventListener(n, r);
                    }),
                    (t = []),
                    [2]
                  );
                });
              });
            },
          };
        },
        ot = !1,
        st = function () {
          var e = J(),
            t = [],
            n = function (n, r) {
              e && (e.addEventListener(n, r), t.push({ type: n, handler: r }));
            };
          return {
            name: "@amplitude/plugin-network-checker-browser",
            type: "before",
            setup: function (e, t) {
              return (0, i.__awaiter)(void 0, void 0, void 0, function () {
                return (0, i.__generator)(this, function (r) {
                  return "undefined" === typeof navigator
                    ? (e.loggerProvider.debug(
                        "Network connectivity checker plugin is disabled because navigator is not available."
                      ),
                      (e.offline = !1),
                      [2])
                    : ((e.offline = !navigator.onLine),
                      n("online", function () {
                        e.loggerProvider.debug(
                          "Network connectivity changed to online."
                        ),
                          (e.offline = !1),
                          setTimeout(function () {
                            t.flush();
                          }, e.flushIntervalMillis);
                      }),
                      n("offline", function () {
                        e.loggerProvider.debug(
                          "Network connectivity changed to offline."
                        ),
                          (e.offline = !0);
                      }),
                      [2]);
                });
              });
            },
            teardown: function () {
              return (0, i.__awaiter)(void 0, void 0, void 0, function () {
                return (0, i.__generator)(this, function (n) {
                  return (
                    t.forEach(function (t) {
                      var n = t.type,
                        r = t.handler;
                      e && e.removeEventListener(n, r);
                    }),
                    (t = []),
                    [2]
                  );
                });
              });
            },
          };
        };
      !(function (e) {
        (e.US = "US"), (e.EU = "EU");
      })(oe || (oe = {}));
      var at = "Remote config fetch rejected due to timeout after 5 seconds",
        ut = "Unexpected error occurred",
        ct = (function () {
          function e(e) {
            var t = e.localConfig,
              n = e.configKeys,
              r = this;
            (this.retryTimeout = 1e3),
              (this.attempts = 0),
              (this.sessionTargetingMatch = !1),
              (this.metrics = {}),
              (this.getRemoteConfig = function (e, t, n) {
                return (0, i.__awaiter)(r, void 0, void 0, function () {
                  var r, o, s;
                  return (0, i.__generator)(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return (r = Date.now()), [4, this.fetchWithTimeout(n)];
                      case 1:
                        return (o = i.sent()) && (s = o.configs && o.configs[e])
                          ? ((this.metrics.fetchTimeAPISuccess =
                              Date.now() - r),
                            [2, s[t]])
                          : ((this.metrics.fetchTimeAPIFail = Date.now() - r),
                            [2, void 0]);
                    }
                  });
                });
              }),
              (this.fetchWithTimeout = function (e) {
                return (0, i.__awaiter)(r, void 0, void 0, function () {
                  var t, n, r;
                  return (0, i.__generator)(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return (
                          (t = new AbortController()),
                          (n = setTimeout(function () {
                            return t.abort();
                          }, 5e3)),
                          [4, this.fetchRemoteConfig(t.signal, e)]
                        );
                      case 1:
                        return (r = i.sent()), clearTimeout(n), [2, r];
                    }
                  });
                });
              }),
              (this.fetchRemoteConfig = function (e, t) {
                return (0, i.__awaiter)(r, void 0, void 0, function () {
                  var n, r, s, a, u, c, l, d, f, v, p, h;
                  return (0, i.__generator)(this, function (g) {
                    switch (g.label) {
                      case 0:
                        if (
                          t === this.lastFetchedSessionId &&
                          this.attempts >= this.localConfig.flushMaxRetries
                        )
                          return [
                            2,
                            this.completeRequest({
                              err: "Remote config fetch rejected due to exceeded retry count",
                            }),
                          ];
                        if (e.aborted)
                          return [2, this.completeRequest({ err: at })];
                        t !== this.lastFetchedSessionId &&
                          ((this.lastFetchedSessionId = t),
                          (this.attempts = 0)),
                          (g.label = 1);
                      case 1:
                        g.trys.push([1, 3, , 4]),
                          (n = new URLSearchParams({
                            api_key: this.localConfig.apiKey,
                          }));
                        try {
                          for (
                            r = (0, i.__values)(this.configKeys), s = r.next();
                            !s.done;
                            s = r.next()
                          )
                            (a = s.value), n.append("config_keys", a);
                        } catch (m) {
                          v = { error: m };
                        } finally {
                          try {
                            s && !s.done && (p = r.return) && p.call(r);
                          } finally {
                            if (v) throw v.error;
                          }
                        }
                        return (
                          t && n.set("session_id", String(t)),
                          (u = { headers: { Accept: "*/*" }, method: "GET" }),
                          (c = ""
                            .concat(this.getServerUrl(), "?")
                            .concat(n.toString())),
                          (this.attempts += 1),
                          [
                            4,
                            fetch(
                              c,
                              (0, i.__assign)((0, i.__assign)({}, u), {
                                signal: e,
                              })
                            ),
                          ]
                        );
                      case 2:
                        if (null === (l = g.sent()))
                          return [2, this.completeRequest({ err: ut })];
                        switch (new be().buildStatus(l.status)) {
                          case o.Success:
                            return (
                              (this.attempts = 0),
                              [2, this.parseAndStoreConfig(l)]
                            );
                          case o.Failed:
                            return [2, this.retryFetch(e, t)];
                          default:
                            return [
                              2,
                              this.completeRequest({
                                err: "Network error occurred, remote config fetch failed",
                              }),
                            ];
                        }
                        return [3, 4];
                      case 3:
                        return (
                          (d = g.sent()),
                          (f = d),
                          e.aborted
                            ? [2, this.completeRequest({ err: at })]
                            : [
                                2,
                                this.completeRequest({
                                  err:
                                    null !== (h = f.message) && void 0 !== h
                                      ? h
                                      : ut,
                                }),
                              ]
                        );
                      case 4:
                        return [2];
                    }
                  });
                });
              }),
              (this.retryFetch = function (e, t) {
                return (0, i.__awaiter)(r, void 0, void 0, function () {
                  var n = this;
                  return (0, i.__generator)(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return [
                          4,
                          new Promise(function (e) {
                            return setTimeout(e, n.attempts * n.retryTimeout);
                          }),
                        ];
                      case 1:
                        return r.sent(), [2, this.fetchRemoteConfig(e, t)];
                    }
                  });
                });
              }),
              (this.parseAndStoreConfig = function (e) {
                return (0, i.__awaiter)(r, void 0, void 0, function () {
                  var t;
                  return (0, i.__generator)(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, e.json()];
                      case 1:
                        return (
                          (t = n.sent()),
                          this.completeRequest({
                            success: "Remote config successfully fetched",
                          }),
                          [2, t]
                        );
                    }
                  });
                });
              }),
              (this.localConfig = t),
              (this.configKeys = n);
          }
          return (
            (e.prototype.getServerUrl = function () {
              return this.localConfig.serverZone === oe.STAGING
                ? "https://sr-client-cfg.stag2.amplitude.com/config"
                : this.localConfig.serverZone === oe.EU
                ? "https://sr-client-cfg.eu.amplitude.com/config"
                : "https://sr-client-cfg.amplitude.com/config";
            }),
            (e.prototype.completeRequest = function (e) {
              var t = e.err,
                n = e.success;
              if (t) throw new Error(t);
              n && this.localConfig.loggerProvider.log(n);
            }),
            e
          );
        })(),
        lt = function (e) {
          var t = e.localConfig,
            n = e.configKeys;
          return (0, i.__awaiter)(void 0, void 0, void 0, function () {
            return (0, i.__generator)(this, function (e) {
              return [2, new ct({ localConfig: t, configKeys: n })];
            });
          });
        },
        dt = (function () {
          function e(e) {
            (this.config = e),
              this.config.loggerProvider.debug(
                "Local configuration before merging with remote config",
                JSON.stringify(this.config, null, 2)
              );
          }
          return (
            (e.prototype.initialize = function () {
              return (0, i.__awaiter)(this, void 0, void 0, function () {
                var e;
                return (0, i.__generator)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        (e = this),
                        [
                          4,
                          lt({
                            localConfig: this.config,
                            configKeys: ["analyticsSDK"],
                          }),
                        ]
                      );
                    case 1:
                      return (e.remoteConfigFetch = t.sent()), [2];
                  }
                });
              });
            }),
            (e.prototype.generateJoinedConfig = function () {
              var e, t, n, r;
              return (0, i.__awaiter)(this, void 0, void 0, function () {
                var o, s, a;
                return (0, i.__generator)(this, function (u) {
                  switch (u.label) {
                    case 0:
                      return (
                        u.trys.push([0, 3, , 4]),
                        (s = this.remoteConfigFetch)
                          ? [
                              4,
                              this.remoteConfigFetch.getRemoteConfig(
                                "analyticsSDK",
                                "browserSDK",
                                this.config.sessionId
                              ),
                            ]
                          : [3, 2]
                      );
                    case 1:
                      (s = u.sent()), (u.label = 2);
                    case 2:
                      return (
                        (o = s),
                        this.config.loggerProvider.debug(
                          "Remote configuration:",
                          JSON.stringify(o, null, 2)
                        ),
                        o &&
                          "autocapture" in o &&
                          ("boolean" === typeof o.autocapture &&
                            (this.config.autocapture = o.autocapture),
                          "object" === typeof o.autocapture &&
                            (void 0 === this.config.autocapture &&
                              (this.config.autocapture = o.autocapture),
                            "boolean" === typeof this.config.autocapture &&
                              (this.config.autocapture = (0, i.__assign)(
                                {
                                  attribution: this.config.autocapture,
                                  fileDownloads: this.config.autocapture,
                                  formInteractions: this.config.autocapture,
                                  pageViews: this.config.autocapture,
                                  sessions: this.config.autocapture,
                                  elementInteractions: this.config.autocapture,
                                },
                                o.autocapture
                              )),
                            "object" === typeof this.config.autocapture &&
                              (this.config.autocapture = (0, i.__assign)(
                                (0, i.__assign)({}, this.config.autocapture),
                                o.autocapture
                              ))),
                          (this.config.defaultTracking =
                            this.config.autocapture)),
                        this.config.loggerProvider.debug(
                          "Joined configuration: ",
                          JSON.stringify(this.config, null, 2)
                        ),
                        (null !== (e = (r = this.config).requestMetadata) &&
                          void 0 !== e) ||
                          (r.requestMetadata = new E()),
                        (null === (t = this.remoteConfigFetch) || void 0 === t
                          ? void 0
                          : t.metrics.fetchTimeAPISuccess) &&
                          this.config.requestMetadata.recordHistogram(
                            "remote_config_fetch_time_API_success",
                            this.remoteConfigFetch.metrics.fetchTimeAPISuccess
                          ),
                        (null === (n = this.remoteConfigFetch) || void 0 === n
                          ? void 0
                          : n.metrics.fetchTimeAPIFail) &&
                          this.config.requestMetadata.recordHistogram(
                            "remote_config_fetch_time_API_fail",
                            this.remoteConfigFetch.metrics.fetchTimeAPIFail
                          ),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (a = u.sent()),
                        this.config.loggerProvider.error(
                          "Failed to fetch remote configuration because of error: ",
                          a
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2, this.config];
                  }
                });
              });
            }),
            e
          );
        })(),
        ft = [
          "a",
          "button",
          "input",
          "select",
          "textarea",
          "label",
          "video",
          "audio",
          '[contenteditable="true" i]',
          "[data-amp-default-track]",
          ".amp-default-track",
        ],
        vt = ["div", "span", "h1", "h2", "h3", "h4", "h5", "h6"],
        pt = "[Amplitude] Element Clicked",
        ht = "https://app.amplitude.com",
        gt = {
          US: ht,
          EU: "https://app.eu.amplitude.com",
          STAGING: "https://apps.stag2.amplitude.com",
        },
        mt = "amp-visual-tagging-selector-highlight",
        yt = function (e) {
          return e && "number" === typeof e.length && "function" !== typeof e;
        };
      function _t(e) {
        return "function" === typeof e;
      }
      function bt(e) {
        return _t(null === e || void 0 === e ? void 0 : e.then);
      }
      function wt(e) {
        var t = e(function (e) {
          Error.call(e), (e.stack = new Error().stack);
        });
        return (
          (t.prototype = Object.create(Error.prototype)),
          (t.prototype.constructor = t),
          t
        );
      }
      var Et = wt(function (e) {
        return function (t) {
          e(this),
            (this.message = t
              ? t.length +
                " errors occurred during unsubscription:\n" +
                t
                  .map(function (e, t) {
                    return t + 1 + ") " + e.toString();
                  })
                  .join("\n  ")
              : ""),
            (this.name = "UnsubscriptionError"),
            (this.errors = t);
        };
      });
      function kt(e, t) {
        if (e) {
          var n = e.indexOf(t);
          0 <= n && e.splice(n, 1);
        }
      }
      var St = (function () {
        function e(e) {
          (this.initialTeardown = e),
            (this.closed = !1),
            (this._parentage = null),
            (this._finalizers = null);
        }
        return (
          (e.prototype.unsubscribe = function () {
            var e, t, n, r, o;
            if (!this.closed) {
              this.closed = !0;
              var s = this._parentage;
              if (s)
                if (((this._parentage = null), Array.isArray(s)))
                  try {
                    for (
                      var a = (0, i.__values)(s), u = a.next();
                      !u.done;
                      u = a.next()
                    ) {
                      u.value.remove(this);
                    }
                  } catch (p) {
                    e = { error: p };
                  } finally {
                    try {
                      u && !u.done && (t = a.return) && t.call(a);
                    } finally {
                      if (e) throw e.error;
                    }
                  }
                else s.remove(this);
              var c = this.initialTeardown;
              if (_t(c))
                try {
                  c();
                } catch (h) {
                  o = h instanceof Et ? h.errors : [h];
                }
              var l = this._finalizers;
              if (l) {
                this._finalizers = null;
                try {
                  for (
                    var d = (0, i.__values)(l), f = d.next();
                    !f.done;
                    f = d.next()
                  ) {
                    var v = f.value;
                    try {
                      It(v);
                    } catch (g) {
                      (o = null !== o && void 0 !== o ? o : []),
                        g instanceof Et
                          ? (o = (0, i.__spreadArray)(
                              (0, i.__spreadArray)([], (0, i.__read)(o)),
                              (0, i.__read)(g.errors)
                            ))
                          : o.push(g);
                    }
                  }
                } catch (m) {
                  n = { error: m };
                } finally {
                  try {
                    f && !f.done && (r = d.return) && r.call(d);
                  } finally {
                    if (n) throw n.error;
                  }
                }
              }
              if (o) throw new Et(o);
            }
          }),
          (e.prototype.add = function (t) {
            var n;
            if (t && t !== this)
              if (this.closed) It(t);
              else {
                if (t instanceof e) {
                  if (t.closed || t._hasParent(this)) return;
                  t._addParent(this);
                }
                (this._finalizers =
                  null !== (n = this._finalizers) && void 0 !== n
                    ? n
                    : []).push(t);
              }
          }),
          (e.prototype._hasParent = function (e) {
            var t = this._parentage;
            return t === e || (Array.isArray(t) && t.includes(e));
          }),
          (e.prototype._addParent = function (e) {
            var t = this._parentage;
            this._parentage = Array.isArray(t)
              ? (t.push(e), t)
              : t
              ? [t, e]
              : e;
          }),
          (e.prototype._removeParent = function (e) {
            var t = this._parentage;
            t === e ? (this._parentage = null) : Array.isArray(t) && kt(t, e);
          }),
          (e.prototype.remove = function (t) {
            var n = this._finalizers;
            n && kt(n, t), t instanceof e && t._removeParent(this);
          }),
          (e.EMPTY = (function () {
            var t = new e();
            return (t.closed = !0), t;
          })()),
          e
        );
      })();
      St.EMPTY;
      function Tt(e) {
        return (
          e instanceof St ||
          (e && "closed" in e && _t(e.remove) && _t(e.add) && _t(e.unsubscribe))
        );
      }
      function It(e) {
        _t(e) ? e() : e.unsubscribe();
      }
      var xt = {
          onUnhandledError: null,
          onStoppedNotification: null,
          Promise: void 0,
          useDeprecatedSynchronousErrorHandling: !1,
          useDeprecatedNextContext: !1,
        },
        Ot = {
          setTimeout: function (e, t) {
            for (var n = [], r = 2; r < arguments.length; r++)
              n[r - 2] = arguments[r];
            var o = Ot.delegate;
            return (null === o || void 0 === o ? void 0 : o.setTimeout)
              ? o.setTimeout.apply(
                  o,
                  (0, i.__spreadArray)([e, t], (0, i.__read)(n))
                )
              : setTimeout.apply(
                  void 0,
                  (0, i.__spreadArray)([e, t], (0, i.__read)(n))
                );
          },
          clearTimeout: function (e) {
            var t = Ot.delegate;
            return (
              (null === t || void 0 === t ? void 0 : t.clearTimeout) ||
              clearTimeout
            )(e);
          },
          delegate: void 0,
        };
      function Pt(e) {
        Ot.setTimeout(function () {
          var t = xt.onUnhandledError;
          if (!t) throw e;
          t(e);
        });
      }
      function At() {}
      var Ct = Nt("C", void 0, void 0);
      function Nt(e, t, n) {
        return { kind: e, value: t, error: n };
      }
      var Lt = null;
      var Rt = (function (e) {
          function t(t) {
            var n = e.call(this) || this;
            return (
              (n.isStopped = !1),
              t
                ? ((n.destination = t), Tt(t) && t.add(n))
                : (n.destination = $t),
              n
            );
          }
          return (
            (0, i.__extends)(t, e),
            (t.create = function (e, t, n) {
              return new Ut(e, t, n);
            }),
            (t.prototype.next = function (e) {
              this.isStopped
                ? Ft(
                    (function (e) {
                      return Nt("N", e, void 0);
                    })(e),
                    this
                  )
                : this._next(e);
            }),
            (t.prototype.error = function (e) {
              this.isStopped
                ? Ft(Nt("E", void 0, e), this)
                : ((this.isStopped = !0), this._error(e));
            }),
            (t.prototype.complete = function () {
              this.isStopped
                ? Ft(Ct, this)
                : ((this.isStopped = !0), this._complete());
            }),
            (t.prototype.unsubscribe = function () {
              this.closed ||
                ((this.isStopped = !0),
                e.prototype.unsubscribe.call(this),
                (this.destination = null));
            }),
            (t.prototype._next = function (e) {
              this.destination.next(e);
            }),
            (t.prototype._error = function (e) {
              try {
                this.destination.error(e);
              } finally {
                this.unsubscribe();
              }
            }),
            (t.prototype._complete = function () {
              try {
                this.destination.complete();
              } finally {
                this.unsubscribe();
              }
            }),
            t
          );
        })(St),
        jt = Function.prototype.bind;
      function qt(e, t) {
        return jt.call(e, t);
      }
      var Dt = (function () {
          function e(e) {
            this.partialObserver = e;
          }
          return (
            (e.prototype.next = function (e) {
              var t = this.partialObserver;
              if (t.next)
                try {
                  t.next(e);
                } catch (n) {
                  Mt(n);
                }
            }),
            (e.prototype.error = function (e) {
              var t = this.partialObserver;
              if (t.error)
                try {
                  t.error(e);
                } catch (n) {
                  Mt(n);
                }
              else Mt(e);
            }),
            (e.prototype.complete = function () {
              var e = this.partialObserver;
              if (e.complete)
                try {
                  e.complete();
                } catch (t) {
                  Mt(t);
                }
            }),
            e
          );
        })(),
        Ut = (function (e) {
          function t(t, n, r) {
            var i,
              o,
              s = e.call(this) || this;
            _t(t) || !t
              ? (i = {
                  next: null !== t && void 0 !== t ? t : void 0,
                  error: null !== n && void 0 !== n ? n : void 0,
                  complete: null !== r && void 0 !== r ? r : void 0,
                })
              : s && xt.useDeprecatedNextContext
              ? (((o = Object.create(t)).unsubscribe = function () {
                  return s.unsubscribe();
                }),
                (i = {
                  next: t.next && qt(t.next, o),
                  error: t.error && qt(t.error, o),
                  complete: t.complete && qt(t.complete, o),
                }))
              : (i = t);
            return (s.destination = new Dt(i)), s;
          }
          return (0, i.__extends)(t, e), t;
        })(Rt);
      function Mt(e) {
        var t;
        xt.useDeprecatedSynchronousErrorHandling
          ? ((t = e),
            xt.useDeprecatedSynchronousErrorHandling &&
              Lt &&
              ((Lt.errorThrown = !0), (Lt.error = t)))
          : Pt(e);
      }
      function Ft(e, t) {
        var n = xt.onStoppedNotification;
        n &&
          Ot.setTimeout(function () {
            return n(e, t);
          });
      }
      var $t = {
          closed: !0,
          next: At,
          error: function (e) {
            throw e;
          },
          complete: At,
        },
        zt =
          ("function" === typeof Symbol && Symbol.observable) || "@@observable";
      function Vt(e) {
        return e;
      }
      function Kt(e) {
        return 0 === e.length
          ? Vt
          : 1 === e.length
          ? e[0]
          : function (t) {
              return e.reduce(function (e, t) {
                return t(e);
              }, t);
            };
      }
      var Ht = (function () {
        function e(e) {
          e && (this._subscribe = e);
        }
        return (
          (e.prototype.lift = function (t) {
            var n = new e();
            return (n.source = this), (n.operator = t), n;
          }),
          (e.prototype.subscribe = function (e, t, n) {
            var r,
              i = this,
              o =
                ((r = e) && r instanceof Rt) ||
                ((function (e) {
                  return e && _t(e.next) && _t(e.error) && _t(e.complete);
                })(r) &&
                  Tt(r))
                  ? e
                  : new Ut(e, t, n);
            return (
              (function (e) {
                if (xt.useDeprecatedSynchronousErrorHandling) {
                  var t = !Lt;
                  if ((t && (Lt = { errorThrown: !1, error: null }), e(), t)) {
                    var n = Lt,
                      r = n.errorThrown,
                      i = n.error;
                    if (((Lt = null), r)) throw i;
                  }
                } else e();
              })(function () {
                var e = i,
                  t = e.operator,
                  n = e.source;
                o.add(
                  t ? t.call(o, n) : n ? i._subscribe(o) : i._trySubscribe(o)
                );
              }),
              o
            );
          }),
          (e.prototype._trySubscribe = function (e) {
            try {
              return this._subscribe(e);
            } catch (t) {
              e.error(t);
            }
          }),
          (e.prototype.forEach = function (e, t) {
            var n = this;
            return new (t = Wt(t))(function (t, r) {
              var i = new Ut({
                next: function (t) {
                  try {
                    e(t);
                  } catch (n) {
                    r(n), i.unsubscribe();
                  }
                },
                error: r,
                complete: t,
              });
              n.subscribe(i);
            });
          }),
          (e.prototype._subscribe = function (e) {
            var t;
            return null === (t = this.source) || void 0 === t
              ? void 0
              : t.subscribe(e);
          }),
          (e.prototype[zt] = function () {
            return this;
          }),
          (e.prototype.pipe = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            return Kt(e)(this);
          }),
          (e.prototype.toPromise = function (e) {
            var t = this;
            return new (e = Wt(e))(function (e, n) {
              var r;
              t.subscribe(
                function (e) {
                  return (r = e);
                },
                function (e) {
                  return n(e);
                },
                function () {
                  return e(r);
                }
              );
            });
          }),
          (e.create = function (t) {
            return new e(t);
          }),
          e
        );
      })();
      function Wt(e) {
        var t;
        return null !== (t = null !== e && void 0 !== e ? e : xt.Promise) &&
          void 0 !== t
          ? t
          : Promise;
      }
      function Bt(e) {
        return _t(e[zt]);
      }
      function Jt(e) {
        return (
          Symbol.asyncIterator &&
          _t(null === e || void 0 === e ? void 0 : e[Symbol.asyncIterator])
        );
      }
      function Qt(e) {
        return new TypeError(
          "You provided " +
            (null !== e && "object" === typeof e
              ? "an invalid object"
              : "'" + e + "'") +
            " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable."
        );
      }
      var Yt =
        "function" === typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : "@@iterator";
      function Zt(e) {
        return _t(null === e || void 0 === e ? void 0 : e[Yt]);
      }
      function Gt(e) {
        return (0, i.__asyncGenerator)(this, arguments, function () {
          var t, n, r;
          return (0, i.__generator)(this, function (o) {
            switch (o.label) {
              case 0:
                (t = e.getReader()), (o.label = 1);
              case 1:
                o.trys.push([1, , 9, 10]), (o.label = 2);
              case 2:
                return [4, (0, i.__await)(t.read())];
              case 3:
                return (
                  (n = o.sent()),
                  (r = n.value),
                  n.done ? [4, (0, i.__await)(void 0)] : [3, 5]
                );
              case 4:
                return [2, o.sent()];
              case 5:
                return [4, (0, i.__await)(r)];
              case 6:
                return [4, o.sent()];
              case 7:
                return o.sent(), [3, 2];
              case 8:
                return [3, 10];
              case 9:
                return t.releaseLock(), [7];
              case 10:
                return [2];
            }
          });
        });
      }
      function Xt(e) {
        return _t(null === e || void 0 === e ? void 0 : e.getReader);
      }
      function en(e) {
        if (e instanceof Ht) return e;
        if (null != e) {
          if (Bt(e))
            return (
              (o = e),
              new Ht(function (e) {
                var t = o[zt]();
                if (_t(t.subscribe)) return t.subscribe(e);
                throw new TypeError(
                  "Provided object does not correctly implement Symbol.observable"
                );
              })
            );
          if (yt(e))
            return (
              (r = e),
              new Ht(function (e) {
                for (var t = 0; t < r.length && !e.closed; t++) e.next(r[t]);
                e.complete();
              })
            );
          if (bt(e))
            return (
              (n = e),
              new Ht(function (e) {
                n.then(
                  function (t) {
                    e.closed || (e.next(t), e.complete());
                  },
                  function (t) {
                    return e.error(t);
                  }
                ).then(null, Pt);
              })
            );
          if (Jt(e)) return tn(e);
          if (Zt(e))
            return (
              (t = e),
              new Ht(function (e) {
                var n, r;
                try {
                  for (
                    var o = (0, i.__values)(t), s = o.next();
                    !s.done;
                    s = o.next()
                  ) {
                    var a = s.value;
                    if ((e.next(a), e.closed)) return;
                  }
                } catch (u) {
                  n = { error: u };
                } finally {
                  try {
                    s && !s.done && (r = o.return) && r.call(o);
                  } finally {
                    if (n) throw n.error;
                  }
                }
                e.complete();
              })
            );
          if (Xt(e)) return tn(Gt(e));
        }
        var t, n, r, o;
        throw Qt(e);
      }
      function tn(e) {
        return new Ht(function (t) {
          (function (e, t) {
            var n, r, o, s;
            return (0, i.__awaiter)(this, void 0, void 0, function () {
              var a, u;
              return (0, i.__generator)(this, function (c) {
                switch (c.label) {
                  case 0:
                    c.trys.push([0, 5, 6, 11]),
                      (n = (0, i.__asyncValues)(e)),
                      (c.label = 1);
                  case 1:
                    return [4, n.next()];
                  case 2:
                    if ((r = c.sent()).done) return [3, 4];
                    if (((a = r.value), t.next(a), t.closed)) return [2];
                    c.label = 3;
                  case 3:
                    return [3, 1];
                  case 4:
                    return [3, 11];
                  case 5:
                    return (u = c.sent()), (o = { error: u }), [3, 11];
                  case 6:
                    return (
                      c.trys.push([6, , 9, 10]),
                      r && !r.done && (s = n.return) ? [4, s.call(n)] : [3, 8]
                    );
                  case 7:
                    c.sent(), (c.label = 8);
                  case 8:
                    return [3, 10];
                  case 9:
                    if (o) throw o.error;
                    return [7];
                  case 10:
                    return [7];
                  case 11:
                    return t.complete(), [2];
                }
              });
            });
          })(e, t).catch(function (e) {
            return t.error(e);
          });
        });
      }
      function nn(e) {
        return function (t) {
          if (
            (function (e) {
              return _t(null === e || void 0 === e ? void 0 : e.lift);
            })(t)
          )
            return t.lift(function (t) {
              try {
                return e(t, this);
              } catch (n) {
                this.error(n);
              }
            });
          throw new TypeError("Unable to lift unknown Observable type");
        };
      }
      function rn(e, t, n, r, i) {
        return new on(e, t, n, r, i);
      }
      var on = (function (e) {
        function t(t, n, r, i, o, s) {
          var a = e.call(this, t) || this;
          return (
            (a.onFinalize = o),
            (a.shouldUnsubscribe = s),
            (a._next = n
              ? function (e) {
                  try {
                    n(e);
                  } catch (r) {
                    t.error(r);
                  }
                }
              : e.prototype._next),
            (a._error = i
              ? function (e) {
                  try {
                    i(e);
                  } catch (e) {
                    t.error(e);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : e.prototype._error),
            (a._complete = r
              ? function () {
                  try {
                    r();
                  } catch (e) {
                    t.error(e);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : e.prototype._complete),
            a
          );
        }
        return (
          (0, i.__extends)(t, e),
          (t.prototype.unsubscribe = function () {
            var t;
            if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
              var n = this.closed;
              e.prototype.unsubscribe.call(this),
                !n &&
                  (null === (t = this.onFinalize) ||
                    void 0 === t ||
                    t.call(this));
            }
          }),
          t
        );
      })(Rt);
      function sn(e, t) {
        return nn(function (n, r) {
          var i = 0;
          n.subscribe(
            rn(r, function (n) {
              r.next(e.call(t, n, i++));
            })
          );
        });
      }
      function an(e, t, n, r, i) {
        void 0 === r && (r = 0), void 0 === i && (i = !1);
        var o = t.schedule(function () {
          n(), i ? e.add(this.schedule(null, r)) : this.unsubscribe();
        }, r);
        if ((e.add(o), !i)) return o;
      }
      function un(e, t, n) {
        return (
          void 0 === n && (n = 1 / 0),
          _t(t)
            ? un(function (n, r) {
                return sn(function (e, i) {
                  return t(n, e, r, i);
                })(en(e(n, r)));
              }, n)
            : ("number" === typeof t && (n = t),
              nn(function (t, r) {
                return (function (e, t, n, r, i, o, s, a) {
                  var u = [],
                    c = 0,
                    l = 0,
                    d = !1,
                    f = function () {
                      !d || u.length || c || t.complete();
                    },
                    v = function (e) {
                      return c < r ? p(e) : u.push(e);
                    },
                    p = function (e) {
                      o && t.next(e), c++;
                      var a = !1;
                      en(n(e, l++)).subscribe(
                        rn(
                          t,
                          function (e) {
                            null === i || void 0 === i || i(e),
                              o ? v(e) : t.next(e);
                          },
                          function () {
                            a = !0;
                          },
                          void 0,
                          function () {
                            if (a)
                              try {
                                c--;
                                for (
                                  var e = function () {
                                    var e = u.shift();
                                    s
                                      ? an(t, s, function () {
                                          return p(e);
                                        })
                                      : p(e);
                                  };
                                  u.length && c < r;

                                )
                                  e();
                                f();
                              } catch (n) {
                                t.error(n);
                              }
                          }
                        )
                      );
                    };
                  return (
                    e.subscribe(
                      rn(t, v, function () {
                        (d = !0), f();
                      })
                    ),
                    function () {
                      null === a || void 0 === a || a();
                    }
                  );
                })(t, r, e, n);
              }))
        );
      }
      var cn = Array.isArray;
      function ln(e) {
        return sn(function (t) {
          return (function (e, t) {
            return cn(t)
              ? e.apply(void 0, (0, i.__spreadArray)([], (0, i.__read)(t)))
              : e(t);
          })(e, t);
        });
      }
      var dn,
        fn,
        vn = ["addListener", "removeListener"],
        pn = ["addEventListener", "removeEventListener"],
        hn = ["on", "off"];
      function gn(e, t, n, r) {
        if ((_t(n) && ((r = n), (n = void 0)), r))
          return gn(e, t, n).pipe(ln(r));
        var o = (0, i.__read)(
            (function (e) {
              return _t(e.addEventListener) && _t(e.removeEventListener);
            })(e)
              ? pn.map(function (r) {
                  return function (i) {
                    return e[r](t, i, n);
                  };
                })
              : (function (e) {
                  return _t(e.addListener) && _t(e.removeListener);
                })(e)
              ? vn.map(mn(e, t))
              : (function (e) {
                  return _t(e.on) && _t(e.off);
                })(e)
              ? hn.map(mn(e, t))
              : [],
            2
          ),
          s = o[0],
          a = o[1];
        if (!s && yt(e))
          return un(function (e) {
            return gn(e, t, n);
          })(en(e));
        if (!s) throw new TypeError("Invalid event target");
        return new Ht(function (e) {
          var t = function () {
            for (var t = [], n = 0; n < arguments.length; n++)
              t[n] = arguments[n];
            return e.next(1 < t.length ? t : t[0]);
          };
          return (
            s(t),
            function () {
              return a(t);
            }
          );
        });
      }
      function mn(e, t) {
        return function (n) {
          return function (r) {
            return e[n](t, r);
          };
        };
      }
      function yn(e, t) {
        if (e.nodeType !== Node.ELEMENT_NODE)
          throw new Error(
            "Can't generate CSS selector for non-element node type."
          );
        if ("html" === e.tagName.toLowerCase()) return "html";
        var n = {
          root: document.body,
          idName: function (e) {
            return !0;
          },
          className: function (e) {
            return !0;
          },
          tagName: function (e) {
            return !0;
          },
          attr: function (e, t) {
            return !1;
          },
          seedMinLength: 1,
          optimizedMinLength: 2,
          threshold: 1e3,
          maxNumberOfTries: 1e4,
        };
        (dn = (0, i.__assign)((0, i.__assign)({}, n), t)),
          (fn = (function (e, t) {
            if (e.nodeType === Node.DOCUMENT_NODE) return e;
            if (e === t.root) return e.ownerDocument;
            return e;
          })(dn.root, n));
        var r = _n(e, "all", function () {
          return _n(e, "two", function () {
            return _n(e, "one", function () {
              return _n(e, "none");
            });
          });
        });
        if (r) {
          var o = Pn(An(r, e));
          return o.length > 0 && (r = o[0]), wn(r);
        }
        throw new Error("Selector was not found.");
      }
      function _n(e, t, n) {
        for (
          var r = null,
            o = [],
            s = e,
            a = 0,
            u = function () {
              var e,
                u,
                c = In(
                  (function (e) {
                    var t = e.getAttribute("id");
                    if (t && dn.idName(t))
                      return { name: "#" + CSS.escape(t), penalty: 0 };
                    return null;
                  })(s)
                ) ||
                  In.apply(
                    void 0,
                    (0, i.__spreadArray)(
                      [],
                      (0, i.__read)(
                        (function (e) {
                          var t = Array.from(e.attributes).filter(function (e) {
                            return dn.attr(e.name, e.value);
                          });
                          return t.map(function (e) {
                            return {
                              name: "["
                                .concat(CSS.escape(e.name), '="')
                                .concat(CSS.escape(e.value), '"]'),
                              penalty: 0.5,
                            };
                          });
                        })(s)
                      ),
                      !1
                    )
                  ) ||
                  In.apply(
                    void 0,
                    (0, i.__spreadArray)(
                      [],
                      (0, i.__read)(
                        (function (e) {
                          return Array.from(e.classList)
                            .filter(dn.className)
                            .map(function (e) {
                              return { name: "." + CSS.escape(e), penalty: 1 };
                            });
                        })(s)
                      ),
                      !1
                    )
                  ) ||
                  In(
                    (function (e) {
                      var t = e.tagName.toLowerCase();
                      if (dn.tagName(t)) return { name: t, penalty: 2 };
                      return null;
                    })(s)
                  ) || [{ name: "*", penalty: 3 }],
                l = (function (e) {
                  var t = e.parentNode;
                  if (!t) return null;
                  var n = t.firstChild;
                  if (!n) return null;
                  var r = 0;
                  for (
                    ;
                    n && (n.nodeType === Node.ELEMENT_NODE && r++, n !== e);

                  )
                    n = n.nextSibling;
                  return r;
                })(s);
              if ("all" == t)
                l &&
                  (c = c.concat(
                    c.filter(Tn).map(function (e) {
                      return Sn(e, l);
                    })
                  ));
              else if ("two" == t)
                (c = c.slice(0, 1)),
                  l &&
                    (c = c.concat(
                      c.filter(Tn).map(function (e) {
                        return Sn(e, l);
                      })
                    ));
              else if ("one" == t) {
                var d = (0, i.__read)((c = c.slice(0, 1)), 1)[0];
                l && Tn(d) && (c = [Sn(d, l)]);
              } else
                "none" == t &&
                  ((c = [{ name: "*", penalty: 3 }]), l && (c = [Sn(c[0], l)]));
              try {
                for (
                  var f = ((e = void 0), (0, i.__values)(c)), v = f.next();
                  !v.done;
                  v = f.next()
                ) {
                  (d = v.value).level = a;
                }
              } catch (p) {
                e = { error: p };
              } finally {
                try {
                  v && !v.done && (u = f.return) && u.call(f);
                } finally {
                  if (e) throw e.error;
                }
              }
              if ((o.push(c), o.length >= dn.seedMinLength && (r = bn(o, n))))
                return "break";
              (s = s.parentElement), a++;
            };
          s;

        ) {
          if ("break" === u()) break;
        }
        return r || (r = bn(o, n)), !r && n ? n() : r;
      }
      function bn(e, t) {
        var n, r;
        if (
          e.reduce(function (e, t) {
            return e * t.length;
          }, 1) > dn.threshold
        )
          return t ? t() : null;
        var o = Pn(On(e));
        try {
          for (
            var s = (0, i.__values)(o), a = s.next();
            !a.done;
            a = s.next()
          ) {
            var u = a.value;
            if (kn(u)) return u;
          }
        } catch (c) {
          n = { error: c };
        } finally {
          try {
            a && !a.done && (r = s.return) && r.call(s);
          } finally {
            if (n) throw n.error;
          }
        }
        return null;
      }
      function wn(e) {
        for (var t = e[0], n = t.name, r = 1; r < e.length; r++) {
          var i = e[r].level || 0;
          (n =
            t.level === i - 1
              ? "".concat(e[r].name, " > ").concat(n)
              : "".concat(e[r].name, " ").concat(n)),
            (t = e[r]);
        }
        return n;
      }
      function En(e) {
        return e
          .map(function (e) {
            return e.penalty;
          })
          .reduce(function (e, t) {
            return e + t;
          }, 0);
      }
      function kn(e) {
        var t = wn(e);
        switch (fn.querySelectorAll(t).length) {
          case 0:
            throw new Error(
              "Can't select any node with this selector: ".concat(t)
            );
          case 1:
            return !0;
          default:
            return !1;
        }
      }
      function Sn(e, t) {
        return {
          name: e.name + ":nth-child(".concat(t, ")"),
          penalty: e.penalty + 1,
        };
      }
      function Tn(e) {
        return "html" !== e.name && !e.name.startsWith("#");
      }
      function In() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var n = e.filter(xn);
        return n.length > 0 ? n : null;
      }
      function xn(e) {
        return null !== e && void 0 !== e;
      }
      function On(e, t) {
        var n, r, o, s, a, u;
        return (
          void 0 === t && (t = []),
          (0, i.__generator)(this, function (c) {
            switch (c.label) {
              case 0:
                if (!(e.length > 0)) return [3, 9];
                c.label = 1;
              case 1:
                c.trys.push([1, 6, 7, 8]),
                  (n = (0, i.__values)(e[0])),
                  (r = n.next()),
                  (c.label = 2);
              case 2:
                return r.done
                  ? [3, 5]
                  : ((o = r.value),
                    [
                      5,
                      (0, i.__values)(On(e.slice(1, e.length), t.concat(o))),
                    ]);
              case 3:
                c.sent(), (c.label = 4);
              case 4:
                return (r = n.next()), [3, 2];
              case 5:
                return [3, 8];
              case 6:
                return (s = c.sent()), (a = { error: s }), [3, 8];
              case 7:
                try {
                  r && !r.done && (u = n.return) && u.call(n);
                } finally {
                  if (a) throw a.error;
                }
                return [7];
              case 8:
                return [3, 11];
              case 9:
                return [4, t];
              case 10:
                c.sent(), (c.label = 11);
              case 11:
                return [2];
            }
          })
        );
      }
      function Pn(e) {
        return (0, i.__spreadArray)([], (0, i.__read)(e), !1).sort(function (
          e,
          t
        ) {
          return En(e) - En(t);
        });
      }
      function An(e, t, n) {
        var r, o, s;
        return (
          void 0 === n && (n = { counter: 0, visited: new Map() }),
          (0, i.__generator)(this, function (a) {
            switch (a.label) {
              case 0:
                if (!(e.length > 2 && e.length > dn.optimizedMinLength))
                  return [3, 5];
                (r = 1), (a.label = 1);
              case 1:
                return r < e.length - 1
                  ? n.counter > dn.maxNumberOfTries
                    ? [2]
                    : ((n.counter += 1),
                      (o = (0, i.__spreadArray)(
                        [],
                        (0, i.__read)(e),
                        !1
                      )).splice(r, 1),
                      (s = wn(o)),
                      n.visited.has(s)
                        ? [2]
                        : kn(o) &&
                          (function (e, t) {
                            return fn.querySelector(wn(e)) === t;
                          })(o, t)
                        ? [4, o]
                        : [3, 4])
                  : [3, 5];
              case 2:
                return (
                  a.sent(),
                  n.visited.set(s, !0),
                  [5, (0, i.__values)(An(o, t, n))]
                );
              case 3:
                a.sent(), (a.label = 4);
              case 4:
                return r++, [3, 1];
              case 5:
                return [2];
            }
          })
        );
      }
      var Cn = ["input", "select", "textarea"],
        Nn = function (e, t) {
          return function (n, r) {
            var i,
              o,
              s,
              a = e.pageUrlAllowlist,
              u = e.shouldTrackEventResolver,
              c =
                null ===
                  (o =
                    null ===
                      (i = null === r || void 0 === r ? void 0 : r.tagName) ||
                    void 0 === i
                      ? void 0
                      : i.toLowerCase) || void 0 === o
                  ? void 0
                  : o.call(i);
            if (!c) return !1;
            if (u) return u(n, r);
            if (!Dn(window.location.href, a)) return !1;
            var l =
              String(
                null === r || void 0 === r ? void 0 : r.getAttribute("type")
              ) || "";
            if ("string" === typeof l)
              switch (l.toLowerCase()) {
                case "hidden":
                case "password":
                  return !1;
              }
            if (t) {
              var d = t.some(function (e) {
                var t;
                return !!(null ===
                  (t = null === r || void 0 === r ? void 0 : r.matches) ||
                void 0 === t
                  ? void 0
                  : t.call(r, e));
              });
              if (!d) return !1;
            }
            switch (c) {
              case "input":
              case "select":
              case "textarea":
                return "change" === n || "click" === n;
              default:
                var f =
                  null ===
                    (s =
                      null === window || void 0 === window
                        ? void 0
                        : window.getComputedStyle) || void 0 === s
                    ? void 0
                    : s.call(window, r);
                return (
                  !(
                    !f ||
                    "pointer" !== f.getPropertyValue("cursor") ||
                    "click" !== n
                  ) || "click" === n
                );
            }
          };
        },
        Ln = function (e) {
          if (null == e) return !1;
          if ("string" === typeof e) {
            if (
              /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/.test(
                (e || "").replace(/[- ]/g, "")
              )
            )
              return !1;
            if (/(^\d{3}-?\d{2}-?\d{4}$)/.test(e)) return !1;
          }
          return !0;
        },
        Rn = function (e) {
          var t,
            n,
            r,
            i =
              null ===
                (n =
                  null ===
                    (t = null === e || void 0 === e ? void 0 : e.tagName) ||
                  void 0 === t
                    ? void 0
                    : t.toLowerCase) || void 0 === n
                ? void 0
                : n.call(t),
            o =
              e instanceof HTMLElement &&
              "true" ===
                (null === (r = e.getAttribute("contenteditable")) ||
                void 0 === r
                  ? void 0
                  : r.toLowerCase());
          return !Cn.includes(i) && !o;
        },
        jn = function (e) {
          var t = "";
          return (
            Rn(e) &&
              e.childNodes &&
              e.childNodes.length &&
              e.childNodes.forEach(function (e) {
                var n,
                  r = "";
                (n = e) && 3 === n.nodeType
                  ? e.textContent && (r = e.textContent)
                  : (r = jn(e)),
                  (t += r
                    .split(/(\s+)/)
                    .filter(Ln)
                    .join("")
                    .replace(/[\r\n]/g, " ")
                    .replace(/[ ]+/g, " ")
                    .substring(0, 255));
              }),
            t
          );
        },
        qn = function (e, t) {
          var n,
            r,
            i = "";
          try {
            return (i = yn(e, {
              className: function (e) {
                return e !== mt;
              },
              maxNumberOfTries: 1e3,
            }));
          } catch (l) {
            if (t) {
              var o = l;
              t.warn(
                "Failed to get selector with finder, use fallback strategy instead: ".concat(
                  o.toString()
                )
              );
            }
          }
          var s =
            null ===
              (r =
                null ===
                  (n = null === e || void 0 === e ? void 0 : e.tagName) ||
                void 0 === n
                  ? void 0
                  : n.toLowerCase) || void 0 === r
              ? void 0
              : r.call(n);
          s && (i = s);
          var a = e.getAttribute("id"),
            u = e.getAttribute("class");
          if (a) i = "#".concat(a);
          else if (u) {
            var c = u
              .split(" ")
              .filter(function (e) {
                return e !== mt;
              })
              .join(".");
            c && (i = "".concat(i, ".").concat(c));
          }
          return i;
        },
        Dn = function (e, t) {
          return (
            !t ||
            !t.length ||
            t.some(function (t) {
              return "string" === typeof t ? e === t : e.match(t);
            })
          );
        },
        Un = function (e) {
          return Object.keys(e).reduce(function (t, n) {
            var r = e[n];
            return (
              (function (e) {
                return (
                  void 0 === e ||
                  null === e ||
                  ("object" === typeof e && 0 === Object.keys(e).length) ||
                  ("string" === typeof e && 0 === e.trim().length)
                );
              })(r) || (t[n] = r),
              t
            );
          }, {});
        },
        Mn = function (e) {
          var t,
            n = e.parentElement;
          if (!n) return "";
          try {
            t = n.querySelector(":scope>span,h1,h2,h3,h4,h5,h6");
          } catch (i) {
            t = null;
          }
          if (t) {
            var r = t.textContent || "";
            return Ln(r) ? r : "";
          }
          return Mn(n);
        },
        Fn = function (e, t) {
          return e
            ? t.some(function (t) {
                var n;
                return null ===
                  (n = null === e || void 0 === e ? void 0 : e.matches) ||
                  void 0 === n
                  ? void 0
                  : n.call(e, t);
              })
              ? e
              : Fn(null === e || void 0 === e ? void 0 : e.parentElement, t)
            : null;
        },
        $n = function (e, t) {
          var n, r, i;
          if (!e) return {};
          var o =
              null ===
                (i =
                  null ===
                    (r = null === e || void 0 === e ? void 0 : e.tagName) ||
                  void 0 === r
                    ? void 0
                    : r.toLowerCase) || void 0 === i
                ? void 0
                : i.call(r),
            s = qn(e, t),
            a =
              (((n = {})["[Amplitude] Element Tag"] = o),
              (n["[Amplitude] Element Text"] = jn(e)),
              (n["[Amplitude] Element Selector"] = s),
              (n["[Amplitude] Page URL"] = window.location.href.split("?")[0]),
              n);
          return Un(a);
        };
      var zn = function (e) {
          return !(null === e.event.target || !e.closestTrackedAncestor);
        },
        Vn = (function () {
          function e(e) {
            var t = (void 0 === e ? {} : e).origin,
              n = void 0 === t ? ht : t,
              r = this;
            (this.endpoint = ht),
              (this.requestCallbacks = {}),
              (this.onSelect = function (e) {
                r.notify({ action: "element-selected", data: e });
              }),
              (this.onTrack = function (e, t) {
                "selector-mode-changed" === e
                  ? r.notify({ action: "track-selector-mode-changed", data: t })
                  : "selector-moved" === e &&
                    r.notify({ action: "track-selector-moved", data: t });
              }),
              (this.endpoint = n);
          }
          return (
            (e.prototype.notify = function (e) {
              var t, n, r, i;
              null ===
                (n =
                  null === (t = this.logger) || void 0 === t
                    ? void 0
                    : t.debug) ||
                void 0 === n ||
                n.call(t, "Message sent: ", JSON.stringify(e)),
                null ===
                  (i =
                    null === (r = window.opener) || void 0 === r
                      ? void 0
                      : r.postMessage) ||
                  void 0 === i ||
                  i.call(r, e, this.endpoint);
            }),
            (e.prototype.sendRequest = function (e, t, n) {
              var r = this;
              void 0 === n && (n = { timeout: 15e3 });
              var i = ""
                  .concat(Date.now(), "-")
                  .concat(Math.random().toString(36).substr(2, 9)),
                o = { id: i, action: e, args: t };
              return new Promise(function (t, s) {
                (r.requestCallbacks[i] = { resolve: t, reject: s }),
                  r.notify(o),
                  (null === n || void 0 === n ? void 0 : n.timeout) > 0 &&
                    setTimeout(function () {
                      s(
                        new Error(
                          "".concat(e, " timed out (id: ").concat(i, ")")
                        )
                      ),
                        delete r.requestCallbacks[i];
                    }, n.timeout);
              });
            }),
            (e.prototype.handleResponse = function (e) {
              var t;
              this.requestCallbacks[e.id]
                ? (this.requestCallbacks[e.id].resolve(e.responseData),
                  delete this.requestCallbacks[e.id])
                : null === (t = this.logger) ||
                  void 0 === t ||
                  t.warn("No callback found for request id: ".concat(e.id));
            }),
            (e.prototype.setup = function (e) {
              var t = this,
                n = void 0 === e ? {} : e,
                r = n.logger,
                i = n.endpoint,
                o = n.isElementSelectable,
                s = n.cssSelectorAllowlist,
                a = n.actionClickAllowlist;
              (this.logger = r),
                i && this.endpoint === ht && (this.endpoint = i);
              var u = null;
              window.addEventListener("message", function (e) {
                var n, r, i, c, l;
                if (
                  (null ===
                    (r =
                      null === (n = t.logger) || void 0 === n
                        ? void 0
                        : n.debug) ||
                    void 0 === r ||
                    r.call(n, "Message received: ", JSON.stringify(e)),
                  t.endpoint === e.origin)
                ) {
                  var d,
                    f = null === e || void 0 === e ? void 0 : e.data,
                    v = null === f || void 0 === f ? void 0 : f.action;
                  if (v)
                    if ("id" in f)
                      null ===
                        (c =
                          null === (i = t.logger) || void 0 === i
                            ? void 0
                            : i.debug) ||
                        void 0 === c ||
                        c.call(
                          i,
                          "Received Response to previous request: ",
                          JSON.stringify(e)
                        ),
                        t.handleResponse(f);
                    else if ("ping" === v) t.notify({ action: "pong" });
                    else if ("initialize-visual-tagging-selector" === v) {
                      var p = null === f || void 0 === f ? void 0 : f.data;
                      ((d =
                        "https://cdn.amplitude.com/libs/visual-tagging-selector-1.0.0-alpha.js.gz"),
                      new Promise(function (e, t) {
                        var n;
                        try {
                          var r = document.createElement("script");
                          (r.type = "text/javascript"),
                            (r.async = !0),
                            (r.src = d),
                            r.addEventListener(
                              "load",
                              function () {
                                e({ status: !0 });
                              },
                              { once: !0 }
                            ),
                            r.addEventListener("error", function () {
                              t({
                                status: !1,
                                message: "Failed to load the script ".concat(d),
                              });
                            }),
                            null === (n = document.head) ||
                              void 0 === n ||
                              n.appendChild(r);
                        } catch (i) {
                          t(i);
                        }
                      }))
                        .then(function () {
                          var e;
                          (u =
                            null ===
                              (e =
                                null === window || void 0 === window
                                  ? void 0
                                  : window.amplitudeVisualTaggingSelector) ||
                            void 0 === e
                              ? void 0
                              : e.call(window, {
                                  getEventTagProps: $n,
                                  isElementSelectable: function (e) {
                                    return (
                                      !o ||
                                      o(
                                        (null === p || void 0 === p
                                          ? void 0
                                          : p.actionType) || "click",
                                        e
                                      )
                                    );
                                  },
                                  onTrack: t.onTrack,
                                  onSelect: t.onSelect,
                                  visualHighlightClass: mt,
                                  messenger: t,
                                  cssSelectorAllowlist: s,
                                  actionClickAllowlist: a,
                                })),
                            t.notify({ action: "selector-loaded" });
                        })
                        .catch(function () {
                          var e;
                          null === (e = t.logger) ||
                            void 0 === e ||
                            e.warn(
                              "Failed to initialize visual tagging selector"
                            );
                        });
                    } else
                      "close-visual-tagging-selector" === v &&
                        (null ===
                          (l = null === u || void 0 === u ? void 0 : u.close) ||
                          void 0 === l ||
                          l.call(u));
                }
              }),
                this.notify({ action: "page-loaded" });
            }),
            e
          );
        })(),
        Kn = [
          "id",
          "class",
          "style",
          "value",
          "onclick",
          "onchange",
          "oninput",
          "onblur",
          "onsubmit",
          "onfocus",
          "onkeydown",
          "onkeyup",
          "onkeypress",
          "data-reactid",
          "data-react-checksum",
          "data-reactroot",
        ],
        Hn = ["type"],
        Wn = ["svg", "path", "g"],
        Bn = ["password", "hidden"];
      var Jn = function (e) {
        var t;
        return e
          ? ((t = (function (e, t) {
              for (var n = 0, r = 0; r < e.length; r++) {
                var i = e[r];
                if (null === i) n += 4;
                else {
                  var o = Qn(i);
                  n += o ? Array.from(o).length : 4;
                }
                if (n > t) return e.slice(0, r);
              }
              return e;
            })(
              (function (e) {
                var t = [];
                if (!e) return t;
                t.push(e);
                for (var n = e.parentElement; n && "HTML" !== n.tagName; )
                  t.push(n), (n = n.parentElement);
                return t;
              })(e).map(function (e) {
                return (function (e) {
                  var t, n, r, o, s, a;
                  if (null === e) return null;
                  var u = String(e.tagName).toLowerCase(),
                    c = { tag: u },
                    l = Array.from(
                      null !==
                        (o =
                          null === (r = e.parentElement) || void 0 === r
                            ? void 0
                            : r.children) && void 0 !== o
                        ? o
                        : []
                    );
                  l.length &&
                    ((c.index = l.indexOf(e)),
                    (c.indexOfType = l
                      .filter(function (t) {
                        return t.tagName === e.tagName;
                      })
                      .indexOf(e)));
                  var d =
                    null ===
                      (a =
                        null === (s = e.previousElementSibling) || void 0 === s
                          ? void 0
                          : s.tagName) || void 0 === a
                      ? void 0
                      : a.toLowerCase();
                  d && (c.prevSib = String(d));
                  var f = e.getAttribute("id");
                  f && (c.id = String(f));
                  var v = Array.from(e.classList);
                  v.length && (c.classes = v);
                  var p = {},
                    h = Array.from(e.attributes).filter(function (e) {
                      return !Kn.includes(e.name);
                    }),
                    g = !Rn(e);
                  if (
                    !Bn.includes(String(e.getAttribute("type"))) &&
                    !Wn.includes(u)
                  )
                    try {
                      for (
                        var m = (0, i.__values)(h), y = m.next();
                        !y.done;
                        y = m.next()
                      ) {
                        var _ = y.value;
                        (g && !Hn.includes(_.name)) ||
                          (p[_.name] = String(_.value).substring(0, 128));
                      }
                    } catch (b) {
                      t = { error: b };
                    } finally {
                      try {
                        y && !y.done && (n = m.return) && n.call(m);
                      } finally {
                        if (t) throw t.error;
                      }
                    }
                  return Object.keys(p).length && (c.attrs = p), c;
                })(e);
              }),
              1024
            )),
            t)
          : [];
      };
      function Qn(e, t) {
        void 0 === t && (t = !1);
        try {
          if (null == e) return t ? "None" : null;
          if ("string" === typeof e)
            return t
              ? (e = e
                  .replace(/\\/g, "\\\\")
                  .replace(/\n/g, "\\n")
                  .replace(/\t/g, "\\t")
                  .replace(/\r/g, "\\r")).includes('"')
                ? "'".concat(e, "'")
                : e.includes("'")
                ? '"'.concat(e.replace(/'/g, "\\'"), '"')
                : "'".concat(e, "'")
              : e;
          if ("boolean" === typeof e) return e ? "True" : "False";
          if (Array.isArray(e)) {
            var n = e.map(function (e) {
              return Qn(e, !0);
            });
            return "[".concat(n.join(", "), "]");
          }
          if ("object" === typeof e) {
            var r = Object.entries(e)
                .filter(function (e) {
                  return null != (0, i.__read)(e, 1)[0];
                })
                .map(function (e) {
                  var t = (0, i.__read)(e, 2),
                    n = t[0],
                    r = t[1];
                  return ""
                    .concat(String(Qn(n, !0)), ": ")
                    .concat(String(Qn(r, !0)));
                }),
              o = "{".concat(r.join(", "), "}");
            return (
              o.includes("\\'") &&
                (o = o.replace(/'/g, "'").replace(/'/g, "\\'")),
              o
            );
          }
          return e.toString();
        } catch (s) {
          return null;
        }
      }
      function Yn(e, t) {
        return nn(function (n, r) {
          var i = 0;
          n.subscribe(
            rn(r, function (n) {
              return e.call(t, n, i++) && r.next(n);
            })
          );
        });
      }
      var Zn = (function (e) {
          function t(t, n) {
            return e.call(this) || this;
          }
          return (
            (0, i.__extends)(t, e),
            (t.prototype.schedule = function (e, t) {
              return void 0 === t && (t = 0), this;
            }),
            t
          );
        })(St),
        Gn = {
          setInterval: function (e, t) {
            for (var n = [], r = 2; r < arguments.length; r++)
              n[r - 2] = arguments[r];
            var o = Gn.delegate;
            return (null === o || void 0 === o ? void 0 : o.setInterval)
              ? o.setInterval.apply(
                  o,
                  (0, i.__spreadArray)([e, t], (0, i.__read)(n))
                )
              : setInterval.apply(
                  void 0,
                  (0, i.__spreadArray)([e, t], (0, i.__read)(n))
                );
          },
          clearInterval: function (e) {
            var t = Gn.delegate;
            return (
              (null === t || void 0 === t ? void 0 : t.clearInterval) ||
              clearInterval
            )(e);
          },
          delegate: void 0,
        },
        Xn = (function (e) {
          function t(t, n) {
            var r = e.call(this, t, n) || this;
            return (r.scheduler = t), (r.work = n), (r.pending = !1), r;
          }
          return (
            (0, i.__extends)(t, e),
            (t.prototype.schedule = function (e, t) {
              var n;
              if ((void 0 === t && (t = 0), this.closed)) return this;
              this.state = e;
              var r = this.id,
                i = this.scheduler;
              return (
                null != r && (this.id = this.recycleAsyncId(i, r, t)),
                (this.pending = !0),
                (this.delay = t),
                (this.id =
                  null !== (n = this.id) && void 0 !== n
                    ? n
                    : this.requestAsyncId(i, this.id, t)),
                this
              );
            }),
            (t.prototype.requestAsyncId = function (e, t, n) {
              return (
                void 0 === n && (n = 0),
                Gn.setInterval(e.flush.bind(e, this), n)
              );
            }),
            (t.prototype.recycleAsyncId = function (e, t, n) {
              if (
                (void 0 === n && (n = 0),
                null != n && this.delay === n && !1 === this.pending)
              )
                return t;
              null != t && Gn.clearInterval(t);
            }),
            (t.prototype.execute = function (e, t) {
              if (this.closed) return new Error("executing a cancelled action");
              this.pending = !1;
              var n = this._execute(e, t);
              if (n) return n;
              !1 === this.pending &&
                null != this.id &&
                (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
            }),
            (t.prototype._execute = function (e, t) {
              var n,
                r = !1;
              try {
                this.work(e);
              } catch (i) {
                (r = !0),
                  (n = i || new Error("Scheduled action threw falsy error"));
              }
              if (r) return this.unsubscribe(), n;
            }),
            (t.prototype.unsubscribe = function () {
              if (!this.closed) {
                var t = this.id,
                  n = this.scheduler,
                  r = n.actions;
                (this.work = this.state = this.scheduler = null),
                  (this.pending = !1),
                  kt(r, this),
                  null != t && (this.id = this.recycleAsyncId(n, t, null)),
                  (this.delay = null),
                  e.prototype.unsubscribe.call(this);
              }
            }),
            t
          );
        })(Zn),
        er = {
          now: function () {
            return (er.delegate || Date).now();
          },
          delegate: void 0,
        },
        tr = (function () {
          function e(t, n) {
            void 0 === n && (n = e.now),
              (this.schedulerActionCtor = t),
              (this.now = n);
          }
          return (
            (e.prototype.schedule = function (e, t, n) {
              return (
                void 0 === t && (t = 0),
                new this.schedulerActionCtor(this, e).schedule(n, t)
              );
            }),
            (e.now = er.now),
            e
          );
        })(),
        nr = new ((function (e) {
          function t(t, n) {
            void 0 === n && (n = tr.now);
            var r = e.call(this, t, n) || this;
            return (r.actions = []), (r._active = !1), r;
          }
          return (
            (0, i.__extends)(t, e),
            (t.prototype.flush = function (e) {
              var t = this.actions;
              if (this._active) t.push(e);
              else {
                var n;
                this._active = !0;
                do {
                  if ((n = e.execute(e.state, e.delay))) break;
                } while ((e = t.shift()));
                if (((this._active = !1), n)) {
                  for (; (e = t.shift()); ) e.unsubscribe();
                  throw n;
                }
              }
            }),
            t
          );
        })(tr))(Xn),
        rr = nr;
      function ir(e) {
        return void 0 === e && (e = 1 / 0), un(Vt, e);
      }
      var or = new Ht(function (e) {
        return e.complete();
      });
      function sr(e) {
        return e && _t(e.schedule);
      }
      function ar(e) {
        return e[e.length - 1];
      }
      function ur(e) {
        return sr(ar(e)) ? e.pop() : void 0;
      }
      function cr(e, t) {
        return "number" === typeof ar(e) ? e.pop() : t;
      }
      function lr(e, t) {
        return (
          void 0 === t && (t = 0),
          nn(function (n, r) {
            n.subscribe(
              rn(
                r,
                function (n) {
                  return an(
                    r,
                    e,
                    function () {
                      return r.next(n);
                    },
                    t
                  );
                },
                function () {
                  return an(
                    r,
                    e,
                    function () {
                      return r.complete();
                    },
                    t
                  );
                },
                function (n) {
                  return an(
                    r,
                    e,
                    function () {
                      return r.error(n);
                    },
                    t
                  );
                }
              )
            );
          })
        );
      }
      function dr(e, t) {
        return (
          void 0 === t && (t = 0),
          nn(function (n, r) {
            r.add(
              e.schedule(function () {
                return n.subscribe(r);
              }, t)
            );
          })
        );
      }
      function fr(e, t) {
        if (!e) throw new Error("Iterable cannot be null");
        return new Ht(function (n) {
          an(n, t, function () {
            var r = e[Symbol.asyncIterator]();
            an(
              n,
              t,
              function () {
                r.next().then(function (e) {
                  e.done ? n.complete() : n.next(e.value);
                });
              },
              0,
              !0
            );
          });
        });
      }
      function vr(e, t) {
        if (null != e) {
          if (Bt(e))
            return (function (e, t) {
              return en(e).pipe(dr(t), lr(t));
            })(e, t);
          if (yt(e))
            return (function (e, t) {
              return new Ht(function (n) {
                var r = 0;
                return t.schedule(function () {
                  r === e.length
                    ? n.complete()
                    : (n.next(e[r++]), n.closed || this.schedule());
                });
              });
            })(e, t);
          if (bt(e))
            return (function (e, t) {
              return en(e).pipe(dr(t), lr(t));
            })(e, t);
          if (Jt(e)) return fr(e, t);
          if (Zt(e))
            return (function (e, t) {
              return new Ht(function (n) {
                var r;
                return (
                  an(n, t, function () {
                    (r = e[Yt]()),
                      an(
                        n,
                        t,
                        function () {
                          var e, t, i;
                          try {
                            (t = (e = r.next()).value), (i = e.done);
                          } catch (o) {
                            return void n.error(o);
                          }
                          i ? n.complete() : n.next(t);
                        },
                        0,
                        !0
                      );
                  }),
                  function () {
                    return (
                      _t(null === r || void 0 === r ? void 0 : r.return) &&
                      r.return()
                    );
                  }
                );
              });
            })(e, t);
          if (Xt(e))
            return (function (e, t) {
              return fr(Gt(e), t);
            })(e, t);
        }
        throw Qt(e);
      }
      function pr(e, t) {
        return t ? vr(e, t) : en(e);
      }
      function hr() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var n = ur(e),
          r = cr(e, 1 / 0),
          i = e;
        return i.length ? (1 === i.length ? en(i[0]) : ir(r)(pr(i, n))) : or;
      }
      function gr() {
        return ir(1);
      }
      function mr(e) {
        return e <= 0
          ? function () {
              return or;
            }
          : nn(function (t, n) {
              var r = 0;
              t.subscribe(
                rn(n, function (t) {
                  ++r <= e && (n.next(t), e <= r && n.complete());
                })
              );
            });
      }
      function yr(e, t) {
        return t
          ? function (n) {
              return (function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                return gr()(pr(e, ur(e)));
              })(
                t.pipe(
                  mr(1),
                  nn(function (e, t) {
                    e.subscribe(rn(t, At));
                  })
                ),
                n.pipe(yr(e))
              );
            }
          : un(function (t, n) {
              return en(e(t, n)).pipe(
                mr(1),
                (function (e) {
                  return sn(function () {
                    return e;
                  });
                })(t)
              );
            });
      }
      function _r(e) {
        return e instanceof Date && !isNaN(e);
      }
      function br(e, t) {
        void 0 === t && (t = nr);
        var n = (function (e, t, n) {
          void 0 === e && (e = 0), void 0 === n && (n = rr);
          var r = -1;
          return (
            null != t && (sr(t) ? (n = t) : (r = t)),
            new Ht(function (t) {
              var i = _r(e) ? +e - n.now() : e;
              i < 0 && (i = 0);
              var o = 0;
              return n.schedule(function () {
                t.closed ||
                  (t.next(o++),
                  0 <= r ? this.schedule(void 0, r) : t.complete());
              }, i);
            })
          );
        })(e, t);
        return yr(function () {
          return n;
        });
      }
      function wr(e) {
        var t,
          n,
          r,
          o = e.amplitude,
          s = e.allObservables,
          a = e.options,
          u = e.shouldTrackEvent,
          c = s.clickObservable,
          l = c.pipe(
            nn(function (e, t) {
              var n,
                r = !1;
              e.subscribe(
                rn(t, function (e) {
                  var i = n;
                  (n = e), r && t.next([i, e]), (r = !0);
                })
              );
            }),
            Yn(function (e) {
              var t = (0, i.__read)(e, 2),
                n = t[0],
                r = t[1],
                o = n.event.target !== r.event.target,
                s =
                  Math.abs(r.event.screenX - n.event.screenX) <= 20 &&
                  Math.abs(r.event.screenY - n.event.screenY) <= 20;
              return o && !s;
            })
          ),
          d = hr(
            l,
            c.pipe(
              ((t = a.debounceTime),
              void 0 === n && (n = nr),
              nn(function (e, r) {
                var i = null,
                  o = null,
                  s = null,
                  a = function () {
                    if (i) {
                      i.unsubscribe(), (i = null);
                      var e = o;
                      (o = null), r.next(e);
                    }
                  };
                function u() {
                  var e = s + t,
                    o = n.now();
                  if (o < e)
                    return (i = this.schedule(void 0, e - o)), void r.add(i);
                  a();
                }
                e.subscribe(
                  rn(
                    r,
                    function (e) {
                      (o = e),
                        (s = n.now()),
                        i || ((i = n.schedule(u, t)), r.add(i));
                    },
                    function () {
                      a(), r.complete();
                    },
                    void 0,
                    function () {
                      o = i = null;
                    }
                  )
                );
              })),
              sn(function () {
                return "timeout";
              })
            )
          );
        return c
          .pipe(
            br(0),
            Yn(zn),
            Yn(function (e) {
              return u("click", e.closestTrackedAncestor);
            }),
            ((r = d),
            nn(function (e, t) {
              var n = [];
              return (
                e.subscribe(
                  rn(
                    t,
                    function (e) {
                      return n.push(e);
                    },
                    function () {
                      t.next(n), t.complete();
                    }
                  )
                ),
                en(r).subscribe(
                  rn(
                    t,
                    function () {
                      var e = n;
                      (n = []), t.next(e);
                    },
                    At
                  )
                ),
                function () {
                  n = null;
                }
              );
            }))
          )
          .subscribe(function (e) {
            var t,
              n,
              r = (e.length, pt);
            try {
              for (
                var s = (0, i.__values)(e), a = s.next();
                !a.done;
                a = s.next()
              ) {
                var u = a.value;
                null === o ||
                  void 0 === o ||
                  o.track(r, u.targetElementProperties, { time: u.timestamp });
              }
            } catch (c) {
              t = { error: c };
            } finally {
              try {
                a && !a.done && (n = s.return) && n.call(s);
              } finally {
                if (t) throw t.error;
              }
            }
          });
      }
      var Er,
        kr = wt(function (e) {
          return function (t) {
            void 0 === t && (t = null),
              e(this),
              (this.message = "Timeout has occurred"),
              (this.name = "TimeoutError"),
              (this.info = t);
          };
        });
      function Sr(e) {
        throw new kr(e);
      }
      function Tr(e) {
        var t = e.amplitude,
          n = e.allObservables,
          r = e.options,
          o = e.getEventProperties,
          s = e.shouldTrackEvent,
          a = e.shouldTrackActionClick,
          u = n.clickObservable,
          c = n.mutationObservable,
          l = n.navigateObservable,
          d = u.pipe(
            Yn(function (e) {
              return !s("click", e.closestTrackedAncestor);
            }),
            sn(function (e) {
              var t = Fn(e.event.target, r.actionClickAllowlist);
              return (
                (e.closestTrackedAncestor = t),
                null !== e.closestTrackedAncestor &&
                  (e.targetElementProperties = o(
                    e.type,
                    e.closestTrackedAncestor
                  )),
                e
              );
            }),
            Yn(zn),
            Yn(function (e) {
              return a("click", e.closestTrackedAncestor);
            })
          ),
          f = [c];
        l && f.push(l);
        var v,
          p,
          h = hr.apply(void 0, (0, i.__spreadArray)([], (0, i.__read)(f), !1)),
          g = d.pipe(
            ((v = function (e) {
              return h.pipe(
                mr(1),
                (function (e, t) {
                  var n = _r(e)
                      ? { first: e }
                      : "number" === typeof e
                      ? { each: e }
                      : e,
                    r = n.first,
                    i = n.each,
                    o = n.with,
                    s = void 0 === o ? Sr : o,
                    a = n.scheduler,
                    u =
                      void 0 === a ? (null !== t && void 0 !== t ? t : nr) : a,
                    c = n.meta,
                    l = void 0 === c ? null : c;
                  if (null == r && null == i)
                    throw new TypeError("No timeout provided.");
                  return nn(function (e, t) {
                    var n,
                      o,
                      a = null,
                      c = 0,
                      d = function (e) {
                        o = an(
                          t,
                          u,
                          function () {
                            try {
                              n.unsubscribe(),
                                en(
                                  s({ meta: l, lastValue: a, seen: c })
                                ).subscribe(t);
                            } catch (e) {
                              t.error(e);
                            }
                          },
                          e
                        );
                      };
                    (n = e.subscribe(
                      rn(
                        t,
                        function (e) {
                          null === o || void 0 === o || o.unsubscribe(),
                            c++,
                            t.next((a = e)),
                            i > 0 && d(i);
                        },
                        void 0,
                        void 0,
                        function () {
                          (null === o || void 0 === o ? void 0 : o.closed) ||
                            null === o ||
                            void 0 === o ||
                            o.unsubscribe(),
                            (a = null);
                        }
                      )
                    )),
                      !c &&
                        d(
                          null != r
                            ? "number" === typeof r
                              ? r
                              : +r - u.now()
                            : i
                        );
                  });
                })({
                  first: 500,
                  with: function () {
                    return or;
                  },
                }),
                sn(function () {
                  return e;
                })
              );
            }),
            nn(function (e, t) {
              var n = null,
                r = 0,
                i = !1,
                o = function () {
                  return i && !n && t.complete();
                };
              e.subscribe(
                rn(
                  t,
                  function (e) {
                    null === n || void 0 === n || n.unsubscribe();
                    var i = 0,
                      s = r++;
                    en(v(e, s)).subscribe(
                      (n = rn(
                        t,
                        function (n) {
                          return t.next(p ? p(e, n, s, i++) : n);
                        },
                        function () {
                          (n = null), o();
                        }
                      ))
                    );
                  },
                  function () {
                    (i = !0), o();
                  }
                )
              );
            }))
          );
        return g.subscribe(function (e) {
          null === t ||
            void 0 === t ||
            t.track(pt, o("click", e.closestTrackedAncestor), {
              time: e.timestamp,
            });
        });
      }
      !(function (e) {
        (e.ClickObservable = "clickObservable"),
          (e.ChangeObservable = "changeObservable"),
          (e.NavigateObservable = "navigateObservable"),
          (e.MutationObservable = "mutationObservable");
      })(Er || (Er = {}));
      var Ir = function (e) {
          var t, n, r;
          void 0 === e && (e = {});
          var o = e.dataAttributePrefix,
            s = void 0 === o ? "data-amp-track-" : o,
            a = e.visualTaggingOptions,
            u = void 0 === a ? { enabled: !0, messenger: new Vn() } : a;
          (e.cssSelectorAllowlist =
            null !== (t = e.cssSelectorAllowlist) && void 0 !== t ? t : ft),
            (e.actionClickAllowlist =
              null !== (n = e.actionClickAllowlist) && void 0 !== n ? n : vt),
            (e.debounceTime =
              null !== (r = e.debounceTime) && void 0 !== r ? r : 0);
          var c = "@amplitude/plugin-autocapture-browser",
            l = [],
            d = void 0,
            f = function (e, t) {
              var n,
                r,
                i,
                o =
                  null ===
                    (i =
                      null ===
                        (r = null === t || void 0 === t ? void 0 : t.tagName) ||
                      void 0 === r
                        ? void 0
                        : r.toLowerCase) || void 0 === i
                    ? void 0
                    : i.call(r),
                a =
                  "function" === typeof t.getBoundingClientRect
                    ? t.getBoundingClientRect()
                    : { left: null, top: null },
                u = t.getAttribute("aria-label"),
                c = (function (e, t) {
                  return e.getAttributeNames().reduce(function (n, r) {
                    if (r.startsWith(t)) {
                      var i = r.replace(t, ""),
                        o = e.getAttribute(r);
                      i && (n[i] = o || "");
                    }
                    return n;
                  }, {});
                })(t, s),
                l = Mn(t),
                f = qn(t, d),
                v =
                  (((n = {})["[Amplitude] Element ID"] =
                    t.getAttribute("id") || ""),
                  (n["[Amplitude] Element Class"] = t.getAttribute("class")),
                  (n["[Amplitude] Element Hierarchy"] = Jn(t)),
                  (n["[Amplitude] Element Tag"] = o),
                  (n["[Amplitude] Element Text"] = jn(t)),
                  (n["[Amplitude] Element Position Left"] =
                    null == a.left ? null : Math.round(a.left)),
                  (n["[Amplitude] Element Position Top"] =
                    null == a.top ? null : Math.round(a.top)),
                  (n["[Amplitude] Element Aria Label"] = u),
                  (n["[Amplitude] Element Attributes"] = c),
                  (n["[Amplitude] Element Selector"] = f),
                  (n["[Amplitude] Element Parent Label"] = l),
                  (n["[Amplitude] Page URL"] =
                    window.location.href.split("?")[0]),
                  (n["[Amplitude] Page Title"] =
                    ("undefined" !== typeof document && document.title) || ""),
                  (n["[Amplitude] Viewport Height"] = window.innerHeight),
                  (n["[Amplitude] Viewport Width"] = window.innerWidth),
                  n);
              return (
                "a" === o &&
                  "click" === e &&
                  t instanceof HTMLAnchorElement &&
                  (v["[Amplitude] Element Href"] = t.href),
                Un(v)
              );
            },
            v = function (t, n) {
              var r = { event: t, timestamp: Date.now(), type: n };
              if (
                (function (e) {
                  return "click" === e.type || "change" === e.type;
                })(r) &&
                null !== r.event.target
              ) {
                var i = Fn(r.event.target, e.cssSelectorAllowlist);
                return (
                  i &&
                    ((r.closestTrackedAncestor = i),
                    (r.targetElementProperties = f(r.type, i))),
                  r
                );
              }
              return r;
            };
          return {
            name: c,
            type: "enrichment",
            setup: function (t, n) {
              return (0, i.__awaiter)(void 0, void 0, void 0, function () {
                var r, o, s, a, p, h, g, m, y, _;
                return (0, i.__generator)(this, function (b) {
                  return (
                    (d = t.loggerProvider),
                    "undefined" === typeof document ||
                      ((r = Nn(e, e.cssSelectorAllowlist)),
                      (o = Nn(e, e.actionClickAllowlist)),
                      (s = (function () {
                        var e,
                          t,
                          n = gn(document, "click", { capture: !0 }).pipe(
                            sn(function (e) {
                              return v(e, "click");
                            })
                          ),
                          r = gn(document, "change", { capture: !0 }).pipe(
                            sn(function (e) {
                              return v(e, "change");
                            })
                          );
                        window.navigation &&
                          (t = gn(window.navigation, "navigate").pipe(
                            sn(function (e) {
                              return v(e, "navigate");
                            })
                          ));
                        var i = new Ht(function (e) {
                          var t = new MutationObserver(function (t) {
                            e.next(t);
                          });
                          return (
                            t.observe(document.body, {
                              childList: !0,
                              attributes: !0,
                              characterData: !0,
                              subtree: !0,
                            }),
                            function () {
                              return t.disconnect();
                            }
                          );
                        }).pipe(
                          sn(function (e) {
                            return v(e, "mutation");
                          })
                        );
                        return (
                          ((e = {})[Er.ClickObservable] = n),
                          (e[Er.ChangeObservable] = r),
                          (e[Er.NavigateObservable] = t),
                          (e[Er.MutationObservable] = i),
                          e
                        );
                      })()),
                      (a = wr({
                        allObservables: s,
                        options: e,
                        amplitude: n,
                        shouldTrackEvent: r,
                      })),
                      l.push(a),
                      (p = (function (e) {
                        var t = e.amplitude,
                          n = e.allObservables,
                          r = e.getEventProperties,
                          i = e.shouldTrackEvent;
                        return n.changeObservable
                          .pipe(
                            Yn(zn),
                            Yn(function (e) {
                              return i("change", e.closestTrackedAncestor);
                            })
                          )
                          .subscribe(function (e) {
                            null === t ||
                              void 0 === t ||
                              t.track(
                                "[Amplitude] Element Changed",
                                r("change", e.closestTrackedAncestor)
                              );
                          });
                      })({
                        allObservables: s,
                        getEventProperties: f,
                        amplitude: n,
                        shouldTrackEvent: r,
                      })),
                      l.push(p),
                      (h = Tr({
                        allObservables: s,
                        options: e,
                        getEventProperties: f,
                        amplitude: n,
                        shouldTrackEvent: r,
                        shouldTrackActionClick: o,
                      })),
                      l.push(h),
                      null ===
                        (y =
                          null === t || void 0 === t
                            ? void 0
                            : t.loggerProvider) ||
                        void 0 === y ||
                        y.log("".concat(c, " has been successfully added.")),
                      window.opener &&
                        u.enabled &&
                        ((g = e.cssSelectorAllowlist),
                        (m = e.actionClickAllowlist),
                        null === (_ = u.messenger) ||
                          void 0 === _ ||
                          _.setup(
                            (0, i.__assign)(
                              (0, i.__assign)(
                                {
                                  logger:
                                    null === t || void 0 === t
                                      ? void 0
                                      : t.loggerProvider,
                                },
                                (null === t || void 0 === t
                                  ? void 0
                                  : t.serverZone) && {
                                  endpoint: gt[t.serverZone],
                                }
                              ),
                              {
                                isElementSelectable: Nn(
                                  e,
                                  (0, i.__spreadArray)(
                                    (0, i.__spreadArray)(
                                      [],
                                      (0, i.__read)(g),
                                      !1
                                    ),
                                    (0, i.__read)(m),
                                    !1
                                  )
                                ),
                                cssSelectorAllowlist: g,
                                actionClickAllowlist: m,
                              }
                            )
                          ))),
                    [2]
                  );
                });
              });
            },
            execute: function (e) {
              return (0, i.__awaiter)(void 0, void 0, void 0, function () {
                return (0, i.__generator)(this, function (t) {
                  return [2, e];
                });
              });
            },
            teardown: function () {
              return (0, i.__awaiter)(void 0, void 0, void 0, function () {
                var e, t, n, r;
                return (0, i.__generator)(this, function (o) {
                  try {
                    for (
                      e = (0, i.__values)(l), t = e.next();
                      !t.done;
                      t = e.next()
                    )
                      t.value.unsubscribe();
                  } catch (s) {
                    n = { error: s };
                  } finally {
                    try {
                      t && !t.done && (r = e.return) && r.call(e);
                    } finally {
                      if (n) throw n.error;
                    }
                  }
                  return [2];
                });
              });
            },
          };
        },
        xr = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            (0, i.__extends)(t, e),
            (t.prototype.init = function (e, t, n) {
              var r, o;
              return (
                void 0 === e && (e = ""),
                arguments.length > 2
                  ? ((r = t), (o = n))
                  : "string" === typeof t
                  ? ((r = t), (o = void 0))
                  : ((r = null === t || void 0 === t ? void 0 : t.userId),
                    (o = t)),
                d(
                  this._init(
                    (0, i.__assign)((0, i.__assign)({}, o), {
                      userId: r,
                      apiKey: e,
                    })
                  )
                )
              );
            }),
            (t.prototype._init = function (t) {
              var n, r, o;
              return (0, i.__awaiter)(this, void 0, void 0, function () {
                var s,
                  a,
                  u,
                  c,
                  l,
                  d = this;
                return (0, i.__generator)(this, function (f) {
                  switch (f.label) {
                    case 0:
                      return this.initializing
                        ? [2]
                        : ((this.initializing = !0),
                          [4, Be(t.apiKey, t, this)]);
                    case 1:
                      return (
                        (s = f.sent()),
                        t.fetchRemoteConfig
                          ? [
                              4,
                              ((p = s),
                              (0, i.__awaiter)(
                                void 0,
                                void 0,
                                void 0,
                                function () {
                                  var e;
                                  return (0, i.__generator)(this, function (t) {
                                    switch (t.label) {
                                      case 0:
                                        return [
                                          4,
                                          (e = new dt(p)).initialize(),
                                        ];
                                      case 1:
                                        return t.sent(), [2, e];
                                    }
                                  });
                                }
                              )),
                            ]
                          : [3, 4]
                      );
                    case 2:
                      return [4, f.sent().generateJoinedConfig()];
                    case 3:
                      (s = f.sent()), (f.label = 4);
                    case 4:
                      return [4, e.prototype._init.call(this, s)];
                    case 5:
                      return (
                        f.sent(),
                        this.logBrowserOptions(s),
                        D(this.config.defaultTracking)
                          ? ((a = (function (e) {
                              return D(e.defaultTracking) &&
                                e.defaultTracking &&
                                "object" === typeof e.defaultTracking &&
                                e.defaultTracking.attribution &&
                                "object" ===
                                  typeof e.defaultTracking.attribution
                                ? (0, i.__assign)(
                                    {},
                                    e.defaultTracking.attribution
                                  )
                                : {};
                            })(this.config)),
                            (this.webAttribution = new X(a, this.config)),
                            [4, this.webAttribution.init()])
                          : [3, 7]
                      );
                    case 6:
                      f.sent(), (f.label = 7);
                    case 7:
                      return (
                        (u = Q()),
                        (c = Number.isNaN(Number(u.ampSessionId))
                          ? void 0
                          : Number(u.ampSessionId)),
                        this.setSessionId(
                          null !==
                            (o =
                              null !==
                                (r =
                                  null !== (n = t.sessionId) && void 0 !== n
                                    ? n
                                    : c) && void 0 !== r
                                ? r
                                : this.config.sessionId) && void 0 !== o
                            ? o
                            : Date.now()
                        ),
                        (l = ce(t.instanceName)).identityStore.setIdentity({
                          userId: this.config.userId,
                          deviceId: this.config.deviceId,
                        }),
                        null === this.config.offline
                          ? [3, 9]
                          : [4, this.add(st()).promise]
                      );
                    case 8:
                      f.sent(), (f.label = 9);
                    case 9:
                      return [4, this.add(new O()).promise];
                    case 10:
                      return f.sent(), [4, this.add(new pe()).promise];
                    case 11:
                      return f.sent(), [4, this.add(new le()).promise];
                    case 12:
                      return (
                        f.sent(),
                        (function (e) {
                          ot ||
                            void 0 !== e.defaultTracking ||
                            (e.loggerProvider.warn(
                              "`options.defaultTracking` is set to undefined. This implicitly configures your Amplitude instance to track Page Views, Sessions, File Downloads, and Form Interactions. You can suppress this warning by explicitly setting a value to `options.defaultTracking`. The value must either be a boolean, to enable and disable all default events, or an object, for advanced configuration. For example:\n\namplitude.init(<YOUR_API_KEY>, {\n  defaultTracking: true,\n});\n\nVisit https://www.docs.developers.amplitude.com/data/sdks/browser-2/#tracking-default-events for more details."
                            ),
                            (ot = !0));
                        })(this.config),
                        (v = this.config.defaultTracking),
                        q(v, "fileDownloads")
                          ? (this.config.loggerProvider.debug(
                              "Adding file download tracking plugin"
                            ),
                            [4, this.add(it()).promise])
                          : [3, 14]
                      );
                    case 13:
                      f.sent(), (f.label = 14);
                    case 14:
                      return (function (e) {
                        return q(e, "formInteractions");
                      })(this.config.defaultTracking)
                        ? (this.config.loggerProvider.debug(
                            "Adding form interaction plugin"
                          ),
                          [4, this.add(nt()).promise])
                        : [3, 16];
                    case 15:
                      f.sent(), (f.label = 16);
                    case 16:
                      return U(this.config.defaultTracking)
                        ? (this.config.loggerProvider.debug(
                            "Adding page view tracking plugin"
                          ),
                          [4, this.add(Ge(z(this.config))).promise])
                        : [3, 18];
                    case 17:
                      f.sent(), (f.label = 18);
                    case 18:
                      return F(this.config.autocapture)
                        ? (this.config.loggerProvider.debug(
                            "Adding user interactions plugin (autocapture plugin)"
                          ),
                          [4, this.add(Ir($(this.config))).promise])
                        : [3, 20];
                    case 19:
                      f.sent(), (f.label = 20);
                    case 20:
                      return (
                        (this.initializing = !1),
                        [4, this.runQueuedFunctions("dispatchQ")]
                      );
                    case 21:
                      return (
                        f.sent(),
                        l.eventBridge.setEventReceiver(function (e) {
                          d.track(e.eventType, e.eventProperties);
                        }),
                        [2]
                      );
                  }
                  var v, p;
                });
              });
            }),
            (t.prototype.getUserId = function () {
              var e;
              return null === (e = this.config) || void 0 === e
                ? void 0
                : e.userId;
            }),
            (t.prototype.setUserId = function (e) {
              this.config
                ? (this.config.loggerProvider.debug("function setUserId: ", e),
                  (e === this.config.userId && void 0 !== e) ||
                    ((this.config.userId = e),
                    (function (e, t) {
                      ce(t).identityStore.editIdentity().setUserId(e).commit();
                    })(e, this.config.instanceName)))
                : this.q.push(this.setUserId.bind(this, e));
            }),
            (t.prototype.getDeviceId = function () {
              var e;
              return null === (e = this.config) || void 0 === e
                ? void 0
                : e.deviceId;
            }),
            (t.prototype.setDeviceId = function (e) {
              this.config
                ? (this.config.loggerProvider.debug(
                    "function setDeviceId: ",
                    e
                  ),
                  (this.config.deviceId = e),
                  (function (e, t) {
                    ce(t).identityStore.editIdentity().setDeviceId(e).commit();
                  })(e, this.config.instanceName))
                : this.q.push(this.setDeviceId.bind(this, e));
            }),
            (t.prototype.reset = function () {
              this.setDeviceId(k()), this.setUserId(void 0);
            }),
            (t.prototype.getSessionId = function () {
              var e;
              return null === (e = this.config) || void 0 === e
                ? void 0
                : e.sessionId;
            }),
            (t.prototype.setSessionId = function (e) {
              var t,
                n = [];
              if (!this.config)
                return (
                  this.q.push(this.setSessionId.bind(this, e)),
                  d(Promise.resolve())
                );
              if (e === this.config.sessionId) return d(Promise.resolve());
              this.config.loggerProvider.debug("function setSessionId: ", e);
              var r = this.getSessionId(),
                i = this.config.lastEventTime,
                o =
                  null !== (t = this.config.lastEventId) && void 0 !== t
                    ? t
                    : -1;
              (this.config.sessionId = e),
                (this.config.lastEventTime = void 0),
                (this.config.pageCounter = 0),
                M(this.config.defaultTracking) &&
                  (r &&
                    i &&
                    n.push(
                      this.track(qe, void 0, {
                        device_id: this.previousSessionDeviceId,
                        event_id: ++o,
                        session_id: r,
                        time: i + 1,
                        user_id: this.previousSessionUserId,
                      }).promise
                    ),
                  (this.config.lastEventTime = this.config.sessionId));
              var s = this.trackCampaignEventIfNeeded(++o, n);
              return (
                M(this.config.defaultTracking) &&
                  n.push(
                    this.track(je, void 0, {
                      event_id: s ? ++o : o,
                      session_id: this.config.sessionId,
                      time: this.config.lastEventTime,
                    }).promise
                  ),
                (this.previousSessionDeviceId = this.config.deviceId),
                (this.previousSessionUserId = this.config.userId),
                d(Promise.all(n))
              );
            }),
            (t.prototype.extendSession = function () {
              this.config
                ? (this.config.lastEventTime = Date.now())
                : this.q.push(this.extendSession.bind(this));
            }),
            (t.prototype.setTransport = function (e) {
              this.config
                ? (this.config.transportProvider = Qe(e))
                : this.q.push(this.setTransport.bind(this, e));
            }),
            (t.prototype.identify = function (t, n) {
              if (fe(t)) {
                var r = t._q;
                (t._q = []), (t = de(new C(), r));
              }
              return (
                (null === n || void 0 === n ? void 0 : n.user_id) &&
                  this.setUserId(n.user_id),
                (null === n || void 0 === n ? void 0 : n.device_id) &&
                  this.setDeviceId(n.device_id),
                e.prototype.identify.call(this, t, n)
              );
            }),
            (t.prototype.groupIdentify = function (t, n, r, i) {
              if (fe(r)) {
                var o = r._q;
                (r._q = []), (r = de(new C(), o));
              }
              return e.prototype.groupIdentify.call(this, t, n, r, i);
            }),
            (t.prototype.revenue = function (t, n) {
              if (fe(t)) {
                var r = t._q;
                (t._q = []), (t = de(new N(), r));
              }
              return e.prototype.revenue.call(this, t, n);
            }),
            (t.prototype.trackCampaignEventIfNeeded = function (e, t) {
              if (
                !this.webAttribution ||
                !this.webAttribution.shouldTrackNewCampaign
              )
                return !1;
              var n = this.webAttribution.generateCampaignEvent(e);
              return (
                t ? t.push(this.track(n).promise) : this.track(n),
                this.config.loggerProvider.log("Tracking attribution."),
                !0
              );
            }),
            (t.prototype.process = function (t) {
              return (0, i.__awaiter)(this, void 0, void 0, function () {
                var n, r, o;
                return (0, i.__generator)(this, function (i) {
                  return (
                    (n = Date.now()),
                    (r = G(
                      this.config.sessionTimeout,
                      this.config.lastEventTime
                    )),
                    (o =
                      this.webAttribution &&
                      this.webAttribution.shouldSetSessionIdOnNewCampaign()),
                    t.event_type === je ||
                      t.event_type === qe ||
                      (t.session_id && t.session_id !== this.getSessionId()) ||
                      (r || o
                        ? (this.setSessionId(n),
                          o &&
                            this.config.loggerProvider.log(
                              "Created a new session for new campaign."
                            ))
                        : r || this.trackCampaignEventIfNeeded()),
                    [2, e.prototype.process.call(this, t)]
                  );
                });
              });
            }),
            (t.prototype.logBrowserOptions = function (e) {
              try {
                var t = (0, i.__assign)((0, i.__assign)({}, e), {
                  apiKey: e.apiKey.substring(0, 10) + "********",
                });
                this.config.loggerProvider.debug(
                  "Initialized Amplitude with BrowserConfig:",
                  JSON.stringify(t)
                );
              } catch (n) {
                this.config.loggerProvider.error(
                  "Error logging browser config",
                  n
                );
              }
            }),
            t
          );
        })(j),
        Or = (function () {
          var e = new xr();
          return {
            init: l(e.init.bind(e), "init", a(e), c(e, ["config"])),
            add: l(
              e.add.bind(e),
              "add",
              a(e),
              c(e, ["config.apiKey", "timeline.plugins"])
            ),
            remove: l(
              e.remove.bind(e),
              "remove",
              a(e),
              c(e, ["config.apiKey", "timeline.plugins"])
            ),
            track: l(
              e.track.bind(e),
              "track",
              a(e),
              c(e, ["config.apiKey", "timeline.queue.length"])
            ),
            logEvent: l(
              e.logEvent.bind(e),
              "logEvent",
              a(e),
              c(e, ["config.apiKey", "timeline.queue.length"])
            ),
            identify: l(
              e.identify.bind(e),
              "identify",
              a(e),
              c(e, ["config.apiKey", "timeline.queue.length"])
            ),
            groupIdentify: l(
              e.groupIdentify.bind(e),
              "groupIdentify",
              a(e),
              c(e, ["config.apiKey", "timeline.queue.length"])
            ),
            setGroup: l(
              e.setGroup.bind(e),
              "setGroup",
              a(e),
              c(e, ["config.apiKey", "timeline.queue.length"])
            ),
            revenue: l(
              e.revenue.bind(e),
              "revenue",
              a(e),
              c(e, ["config.apiKey", "timeline.queue.length"])
            ),
            flush: l(
              e.flush.bind(e),
              "flush",
              a(e),
              c(e, ["config.apiKey", "timeline.queue.length"])
            ),
            getUserId: l(
              e.getUserId.bind(e),
              "getUserId",
              a(e),
              c(e, ["config", "config.userId"])
            ),
            setUserId: l(
              e.setUserId.bind(e),
              "setUserId",
              a(e),
              c(e, ["config", "config.userId"])
            ),
            getDeviceId: l(
              e.getDeviceId.bind(e),
              "getDeviceId",
              a(e),
              c(e, ["config", "config.deviceId"])
            ),
            setDeviceId: l(
              e.setDeviceId.bind(e),
              "setDeviceId",
              a(e),
              c(e, ["config", "config.deviceId"])
            ),
            reset: l(
              e.reset.bind(e),
              "reset",
              a(e),
              c(e, ["config", "config.userId", "config.deviceId"])
            ),
            getSessionId: l(
              e.getSessionId.bind(e),
              "getSessionId",
              a(e),
              c(e, ["config"])
            ),
            setSessionId: l(
              e.setSessionId.bind(e),
              "setSessionId",
              a(e),
              c(e, ["config"])
            ),
            extendSession: l(
              e.extendSession.bind(e),
              "extendSession",
              a(e),
              c(e, ["config"])
            ),
            setOptOut: l(
              e.setOptOut.bind(e),
              "setOptOut",
              a(e),
              c(e, ["config"])
            ),
            setTransport: l(
              e.setTransport.bind(e),
              "setTransport",
              a(e),
              c(e, ["config"])
            ),
          };
        })(),
        Pr =
          (Or.add,
          Or.extendSession,
          Or.flush,
          Or.getDeviceId,
          Or.getSessionId,
          Or.getUserId,
          Or.groupIdentify,
          Or.identify,
          Or.init),
        Ar =
          (Or.logEvent,
          Or.remove,
          Or.reset,
          Or.revenue,
          Or.setDeviceId,
          Or.setGroup,
          Or.setOptOut,
          Or.setSessionId,
          Or.setTransport,
          Or.setUserId,
          Or.track);
    },
    2711: function (e) {
      e.exports = (function (e) {
        function t(r) {
          if (n[r]) return n[r].exports;
          var i = (n[r] = { exports: {}, id: r, loaded: !1 });
          return (
            e[r].call(i.exports, i, i.exports, t), (i.loaded = !0), i.exports
          );
        }
        var n = {};
        return (t.m = e), (t.c = n), (t.p = "dist/"), t(0);
      })([
        function (e, t, n) {
          "use strict";
          function r(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var i =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              },
            o = (r(n(1)), n(6)),
            s = r(o),
            a = r(n(7)),
            u = r(n(8)),
            c = r(n(9)),
            l = r(n(10)),
            d = r(n(11)),
            f = r(n(14)),
            v = [],
            p = !1,
            h = {
              offset: 120,
              delay: 0,
              easing: "ease",
              duration: 400,
              disable: !1,
              once: !1,
              startEvent: "DOMContentLoaded",
              throttleDelay: 99,
              debounceDelay: 50,
              disableMutationObserver: !1,
            },
            g = function () {
              if (
                (arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0] &&
                  (p = !0),
                p)
              )
                return (v = (0, d.default)(v, h)), (0, l.default)(v, h.once), v;
            },
            m = function () {
              (v = (0, f.default)()), g();
            },
            y = function () {
              v.forEach(function (e, t) {
                e.node.removeAttribute("data-aos"),
                  e.node.removeAttribute("data-aos-easing"),
                  e.node.removeAttribute("data-aos-duration"),
                  e.node.removeAttribute("data-aos-delay");
              });
            },
            _ = function (e) {
              return (
                !0 === e ||
                ("mobile" === e && c.default.mobile()) ||
                ("phone" === e && c.default.phone()) ||
                ("tablet" === e && c.default.tablet()) ||
                ("function" == typeof e && !0 === e())
              );
            },
            b = function (e) {
              (h = i(h, e)), (v = (0, f.default)());
              var t = document.all && !window.atob;
              return _(h.disable) || t
                ? y()
                : (h.disableMutationObserver ||
                    u.default.isSupported() ||
                    (console.info(
                      '\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '
                    ),
                    (h.disableMutationObserver = !0)),
                  document
                    .querySelector("body")
                    .setAttribute("data-aos-easing", h.easing),
                  document
                    .querySelector("body")
                    .setAttribute("data-aos-duration", h.duration),
                  document
                    .querySelector("body")
                    .setAttribute("data-aos-delay", h.delay),
                  "DOMContentLoaded" === h.startEvent &&
                  ["complete", "interactive"].indexOf(document.readyState) > -1
                    ? g(!0)
                    : "load" === h.startEvent
                    ? window.addEventListener(h.startEvent, function () {
                        g(!0);
                      })
                    : document.addEventListener(h.startEvent, function () {
                        g(!0);
                      }),
                  window.addEventListener(
                    "resize",
                    (0, a.default)(g, h.debounceDelay, !0)
                  ),
                  window.addEventListener(
                    "orientationchange",
                    (0, a.default)(g, h.debounceDelay, !0)
                  ),
                  window.addEventListener(
                    "scroll",
                    (0, s.default)(function () {
                      (0, l.default)(v, h.once);
                    }, h.throttleDelay)
                  ),
                  h.disableMutationObserver || u.default.ready("[data-aos]", m),
                  v);
            };
          e.exports = { init: b, refresh: g, refreshHard: m };
        },
        function (e, t) {},
        ,
        ,
        ,
        ,
        function (e, t) {
          (function (t) {
            "use strict";
            function n(e, t, n) {
              function r(t) {
                var n = h,
                  r = g;
                return (h = g = void 0), (S = t), (y = e.apply(r, n));
              }
              function o(e) {
                return (S = e), (_ = setTimeout(l, t)), T ? r(e) : y;
              }
              function s(e) {
                var n = t - (e - b);
                return I ? E(n, m - (e - S)) : n;
              }
              function u(e) {
                var n = e - b;
                return void 0 === b || n >= t || n < 0 || (I && e - S >= m);
              }
              function l() {
                var e = k();
                return u(e) ? d(e) : void (_ = setTimeout(l, s(e)));
              }
              function d(e) {
                return (_ = void 0), x && h ? r(e) : ((h = g = void 0), y);
              }
              function f() {
                void 0 !== _ && clearTimeout(_),
                  (S = 0),
                  (h = b = g = _ = void 0);
              }
              function v() {
                return void 0 === _ ? y : d(k());
              }
              function p() {
                var e = k(),
                  n = u(e);
                if (((h = arguments), (g = this), (b = e), n)) {
                  if (void 0 === _) return o(b);
                  if (I) return (_ = setTimeout(l, t)), r(b);
                }
                return void 0 === _ && (_ = setTimeout(l, t)), y;
              }
              var h,
                g,
                m,
                y,
                _,
                b,
                S = 0,
                T = !1,
                I = !1,
                x = !0;
              if ("function" != typeof e) throw new TypeError(c);
              return (
                (t = a(t) || 0),
                i(n) &&
                  ((T = !!n.leading),
                  (m = (I = "maxWait" in n) ? w(a(n.maxWait) || 0, t) : m),
                  (x = "trailing" in n ? !!n.trailing : x)),
                (p.cancel = f),
                (p.flush = v),
                p
              );
            }
            function r(e, t, r) {
              var o = !0,
                s = !0;
              if ("function" != typeof e) throw new TypeError(c);
              return (
                i(r) &&
                  ((o = "leading" in r ? !!r.leading : o),
                  (s = "trailing" in r ? !!r.trailing : s)),
                n(e, t, { leading: o, maxWait: t, trailing: s })
              );
            }
            function i(e) {
              var t = "undefined" == typeof e ? "undefined" : u(e);
              return !!e && ("object" == t || "function" == t);
            }
            function o(e) {
              return (
                !!e &&
                "object" == ("undefined" == typeof e ? "undefined" : u(e))
              );
            }
            function s(e) {
              return (
                "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) ||
                (o(e) && b.call(e) == d)
              );
            }
            function a(e) {
              if ("number" == typeof e) return e;
              if (s(e)) return l;
              if (i(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = i(t) ? t + "" : t;
              }
              if ("string" != typeof e) return 0 === e ? e : +e;
              e = e.replace(f, "");
              var n = p.test(e);
              return n || h.test(e)
                ? g(e.slice(2), n ? 2 : 8)
                : v.test(e)
                ? l
                : +e;
            }
            var u =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    },
              c = "Expected a function",
              l = NaN,
              d = "[object Symbol]",
              f = /^\s+|\s+$/g,
              v = /^[-+]0x[0-9a-f]+$/i,
              p = /^0b[01]+$/i,
              h = /^0o[0-7]+$/i,
              g = parseInt,
              m =
                "object" == ("undefined" == typeof t ? "undefined" : u(t)) &&
                t &&
                t.Object === Object &&
                t,
              y =
                "object" ==
                  ("undefined" == typeof self ? "undefined" : u(self)) &&
                self &&
                self.Object === Object &&
                self,
              _ = m || y || Function("return this")(),
              b = Object.prototype.toString,
              w = Math.max,
              E = Math.min,
              k = function () {
                return _.Date.now();
              };
            e.exports = r;
          }.call(
            t,
            (function () {
              return this;
            })()
          ));
        },
        function (e, t) {
          (function (t) {
            "use strict";
            function n(e, t, n) {
              function i(t) {
                var n = h,
                  r = g;
                return (h = g = void 0), (S = t), (y = e.apply(r, n));
              }
              function o(e) {
                return (S = e), (_ = setTimeout(l, t)), T ? i(e) : y;
              }
              function a(e) {
                var n = t - (e - k);
                return I ? w(n, m - (e - S)) : n;
              }
              function c(e) {
                var n = e - k;
                return void 0 === k || n >= t || n < 0 || (I && e - S >= m);
              }
              function l() {
                var e = E();
                return c(e) ? d(e) : void (_ = setTimeout(l, a(e)));
              }
              function d(e) {
                return (_ = void 0), x && h ? i(e) : ((h = g = void 0), y);
              }
              function f() {
                void 0 !== _ && clearTimeout(_),
                  (S = 0),
                  (h = k = g = _ = void 0);
              }
              function v() {
                return void 0 === _ ? y : d(E());
              }
              function p() {
                var e = E(),
                  n = c(e);
                if (((h = arguments), (g = this), (k = e), n)) {
                  if (void 0 === _) return o(k);
                  if (I) return (_ = setTimeout(l, t)), i(k);
                }
                return void 0 === _ && (_ = setTimeout(l, t)), y;
              }
              var h,
                g,
                m,
                y,
                _,
                k,
                S = 0,
                T = !1,
                I = !1,
                x = !0;
              if ("function" != typeof e) throw new TypeError(u);
              return (
                (t = s(t) || 0),
                r(n) &&
                  ((T = !!n.leading),
                  (m = (I = "maxWait" in n) ? b(s(n.maxWait) || 0, t) : m),
                  (x = "trailing" in n ? !!n.trailing : x)),
                (p.cancel = f),
                (p.flush = v),
                p
              );
            }
            function r(e) {
              var t = "undefined" == typeof e ? "undefined" : a(e);
              return !!e && ("object" == t || "function" == t);
            }
            function i(e) {
              return (
                !!e &&
                "object" == ("undefined" == typeof e ? "undefined" : a(e))
              );
            }
            function o(e) {
              return (
                "symbol" == ("undefined" == typeof e ? "undefined" : a(e)) ||
                (i(e) && _.call(e) == l)
              );
            }
            function s(e) {
              if ("number" == typeof e) return e;
              if (o(e)) return c;
              if (r(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = r(t) ? t + "" : t;
              }
              if ("string" != typeof e) return 0 === e ? e : +e;
              e = e.replace(d, "");
              var n = v.test(e);
              return n || p.test(e)
                ? h(e.slice(2), n ? 2 : 8)
                : f.test(e)
                ? c
                : +e;
            }
            var a =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    },
              u = "Expected a function",
              c = NaN,
              l = "[object Symbol]",
              d = /^\s+|\s+$/g,
              f = /^[-+]0x[0-9a-f]+$/i,
              v = /^0b[01]+$/i,
              p = /^0o[0-7]+$/i,
              h = parseInt,
              g =
                "object" == ("undefined" == typeof t ? "undefined" : a(t)) &&
                t &&
                t.Object === Object &&
                t,
              m =
                "object" ==
                  ("undefined" == typeof self ? "undefined" : a(self)) &&
                self &&
                self.Object === Object &&
                self,
              y = g || m || Function("return this")(),
              _ = Object.prototype.toString,
              b = Math.max,
              w = Math.min,
              E = function () {
                return y.Date.now();
              };
            e.exports = n;
          }.call(
            t,
            (function () {
              return this;
            })()
          ));
        },
        function (e, t) {
          "use strict";
          function n(e) {
            var t = void 0,
              r = void 0;
            for (t = 0; t < e.length; t += 1) {
              if ((r = e[t]).dataset && r.dataset.aos) return !0;
              if (r.children && n(r.children)) return !0;
            }
            return !1;
          }
          function r() {
            return (
              window.MutationObserver ||
              window.WebKitMutationObserver ||
              window.MozMutationObserver
            );
          }
          function i() {
            return !!r();
          }
          function o(e, t) {
            var n = window.document,
              i = new (r())(s);
            (a = t),
              i.observe(n.documentElement, {
                childList: !0,
                subtree: !0,
                removedNodes: !0,
              });
          }
          function s(e) {
            e &&
              e.forEach(function (e) {
                var t = Array.prototype.slice.call(e.addedNodes),
                  r = Array.prototype.slice.call(e.removedNodes);
                if (n(t.concat(r))) return a();
              });
          }
          Object.defineProperty(t, "__esModule", { value: !0 });
          var a = function () {};
          t.default = { isSupported: i, ready: o };
        },
        function (e, t) {
          "use strict";
          function n(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          }
          function r() {
            return (
              navigator.userAgent || navigator.vendor || window.opera || ""
            );
          }
          Object.defineProperty(t, "__esModule", { value: !0 });
          var i = (function () {
              function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var r = t[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
                }
              }
              return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
              };
            })(),
            o =
              /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
            s =
              /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            a =
              /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
            u =
              /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            c = (function () {
              function e() {
                n(this, e);
              }
              return (
                i(e, [
                  {
                    key: "phone",
                    value: function () {
                      var e = r();
                      return !(!o.test(e) && !s.test(e.substr(0, 4)));
                    },
                  },
                  {
                    key: "mobile",
                    value: function () {
                      var e = r();
                      return !(!a.test(e) && !u.test(e.substr(0, 4)));
                    },
                  },
                  {
                    key: "tablet",
                    value: function () {
                      return this.mobile() && !this.phone();
                    },
                  },
                ]),
                e
              );
            })();
          t.default = new c();
        },
        function (e, t) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var n = function (e, t, n) {
              var r = e.node.getAttribute("data-aos-once");
              t > e.position
                ? e.node.classList.add("aos-animate")
                : "undefined" != typeof r &&
                  ("false" === r || (!n && "true" !== r)) &&
                  e.node.classList.remove("aos-animate");
            },
            r = function (e, t) {
              var r = window.pageYOffset,
                i = window.innerHeight;
              e.forEach(function (e, o) {
                n(e, i + r, t);
              });
            };
          t.default = r;
        },
        function (e, t, n) {
          "use strict";
          function r(e) {
            return e && e.__esModule ? e : { default: e };
          }
          Object.defineProperty(t, "__esModule", { value: !0 });
          var i = r(n(12)),
            o = function (e, t) {
              return (
                e.forEach(function (e, n) {
                  e.node.classList.add("aos-init"),
                    (e.position = (0, i.default)(e.node, t.offset));
                }),
                e
              );
            };
          t.default = o;
        },
        function (e, t, n) {
          "use strict";
          function r(e) {
            return e && e.__esModule ? e : { default: e };
          }
          Object.defineProperty(t, "__esModule", { value: !0 });
          var i = r(n(13)),
            o = function (e, t) {
              var n = 0,
                r = 0,
                o = window.innerHeight,
                s = {
                  offset: e.getAttribute("data-aos-offset"),
                  anchor: e.getAttribute("data-aos-anchor"),
                  anchorPlacement: e.getAttribute("data-aos-anchor-placement"),
                };
              switch (
                (s.offset && !isNaN(s.offset) && (r = parseInt(s.offset)),
                s.anchor &&
                  document.querySelectorAll(s.anchor) &&
                  (e = document.querySelectorAll(s.anchor)[0]),
                (n = (0, i.default)(e).top),
                s.anchorPlacement)
              ) {
                case "top-bottom":
                  break;
                case "center-bottom":
                  n += e.offsetHeight / 2;
                  break;
                case "bottom-bottom":
                  n += e.offsetHeight;
                  break;
                case "top-center":
                  n += o / 2;
                  break;
                case "bottom-center":
                  n += o / 2 + e.offsetHeight;
                  break;
                case "center-center":
                  n += o / 2 + e.offsetHeight / 2;
                  break;
                case "top-top":
                  n += o;
                  break;
                case "bottom-top":
                  n += e.offsetHeight + o;
                  break;
                case "center-top":
                  n += e.offsetHeight / 2 + o;
              }
              return (
                s.anchorPlacement || s.offset || isNaN(t) || (r = t), n + r
              );
            };
          t.default = o;
        },
        function (e, t) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var n = function (e) {
            for (
              var t = 0, n = 0;
              e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);

            )
              (t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0)),
                (n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0)),
                (e = e.offsetParent);
            return { top: n, left: t };
          };
          t.default = n;
        },
        function (e, t) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var n = function (e) {
            return (
              (e = e || document.querySelectorAll("[data-aos]")),
              Array.prototype.map.call(e, function (e) {
                return { node: e };
              })
            );
          };
          t.default = n;
        },
      ]);
    },
    6840: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return n(4184);
        },
      ]);
    },
    4184: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return w;
          },
        });
      var r = n(1799),
        i = n(5893),
        o = n(7294),
        s = n(2711),
        a = n.n(s),
        u = n(1163),
        c = n(9008),
        l = n.n(c);
      const d = (0, o.createContext)({ setTheme: (e) => {}, themes: [] }),
        f = ["light", "dark"],
        v = "(prefers-color-scheme: dark)",
        p = ({
          forcedTheme: e,
          disableTransitionOnChange: t = !1,
          enableSystem: n = !0,
          enableColorScheme: r = !0,
          storageKey: i = "theme",
          themes: s = ["light", "dark"],
          defaultTheme: a = n ? "system" : "light",
          attribute: u = "data-theme",
          value: c,
          children: l,
        }) => {
          const [p, _] = (0, o.useState)(() => g(i, a)),
            [b, w] = (0, o.useState)(() => g(i)),
            E = c ? Object.values(c) : s,
            k = (0, o.useCallback)(
              (t) => {
                const n = y(t);
                w(n), "system" !== p || e || T(n, !1);
              },
              [p, e]
            ),
            S = (0, o.useRef)(k);
          S.current = k;
          const T = (0, o.useCallback)((e, r = !0, o = !0) => {
            let s = (null == c ? void 0 : c[e]) || e;
            const a = t && o ? m() : null;
            if (r)
              try {
                localStorage.setItem(i, e);
              } catch (e) {}
            if ("system" === e && n) {
              const e = y();
              s = (null == c ? void 0 : c[e]) || e;
            }
            if (o) {
              const e = document.documentElement;
              "class" === u
                ? (e.classList.remove(...E), e.classList.add(s))
                : e.setAttribute(u, s),
                null == a || a();
            }
          }, []);
          (0, o.useEffect)(() => {
            const e = function () {
                return S.current(...[].slice.call(arguments));
              },
              t = window.matchMedia(v);
            return t.addListener(e), e(t), () => t.removeListener(e);
          }, []);
          const I = (0, o.useCallback)(
            (t) => {
              e ? T(t, !0, !1) : T(t), _(t);
            },
            [e]
          );
          return (
            (0, o.useEffect)(() => {
              const e = (e) => {
                e.key === i && I(e.newValue || a);
              };
              return (
                window.addEventListener("storage", e),
                () => window.removeEventListener("storage", e)
              );
            }, [I]),
            (0, o.useEffect)(() => {
              if (!r) return;
              let t =
                e && f.includes(e)
                  ? e
                  : p && f.includes(p)
                  ? p
                  : ("system" === p && b) || null;
              document.documentElement.style.setProperty("color-scheme", t);
            }, [r, p, b, e]),
            o.createElement(
              d.Provider,
              {
                value: {
                  theme: p,
                  setTheme: I,
                  forcedTheme: e,
                  resolvedTheme: "system" === p ? b : p,
                  themes: n ? [...s, "system"] : s,
                  systemTheme: n ? b : void 0,
                },
              },
              o.createElement(h, {
                forcedTheme: e,
                storageKey: i,
                attribute: u,
                value: c,
                enableSystem: n,
                defaultTheme: a,
                attrs: E,
              }),
              l
            )
          );
        },
        h = (0, o.memo)(
          ({
            forcedTheme: e,
            storageKey: t,
            attribute: n,
            enableSystem: r,
            defaultTheme: i,
            value: s,
            attrs: a,
          }) => {
            const u =
                "class" === n
                  ? `var d=document.documentElement.classList;d.remove(${a
                      .map((e) => `'${e}'`)
                      .join(",")});`
                  : "var d=document.documentElement;",
              c = (e, t) => {
                e = (null == s ? void 0 : s[e]) || e;
                const r = t ? e : `'${e}'`;
                return "class" === n
                  ? `d.add(${r})`
                  : `d.setAttribute('${n}', ${r})`;
              },
              d = "system" === i;
            return o.createElement(
              l(),
              null,
              o.createElement(
                "script",
                e
                  ? {
                      key: "next-themes-script",
                      dangerouslySetInnerHTML: {
                        __html: `!function(){${u}${c(e)}}()`,
                      },
                    }
                  : r
                  ? {
                      key: "next-themes-script",
                      dangerouslySetInnerHTML: {
                        __html: `!function(){try {${u}var e=localStorage.getItem('${t}');${
                          d ? "" : c(i) + ";"
                        }if("system"===e||(!e&&${d})){var t="${v}",m=window.matchMedia(t);m.media!==t||m.matches?${c(
                          "dark"
                        )}:${c("light")}}else if(e) ${
                          s ? `var x=${JSON.stringify(s)};` : ""
                        }${c(s ? "x[e]" : "e", !0)}}catch(e){}}()`,
                      },
                    }
                  : {
                      key: "next-themes-script",
                      dangerouslySetInnerHTML: {
                        __html: `!function(){try{${u}var e=localStorage.getItem("${t}");if(e){${
                          s ? `var x=${JSON.stringify(s)};` : ""
                        }${c(s ? "x[e]" : "e", !0)}}else{${c(
                          i
                        )};}}catch(t){}}();`,
                      },
                    }
              )
            );
          },
          (e, t) => e.forcedTheme === t.forcedTheme
        ),
        g = (e, t) => {
          if ("undefined" == typeof window) return;
          let n;
          try {
            n = localStorage.getItem(e) || void 0;
          } catch (e) {}
          return n || t;
        },
        m = () => {
          const e = document.createElement("style");
          return (
            e.appendChild(
              document.createTextNode(
                "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
              )
            ),
            document.head.appendChild(e),
            () => {
              window.getComputedStyle(document.body),
                setTimeout(() => {
                  document.head.removeChild(e);
                }, 1);
            }
          );
        },
        y = (e) => (
          e || (e = window.matchMedia(v)), e.matches ? "dark" : "light"
        );
      n(4831), n(8279), n(8322), n(8745), n(7977);
      var _ = n(734),
        b = function () {
          return (
            (0, o.useEffect)(function () {
              _.S1("a47af83ef6d29efcbf4a9957a7601a90");
            }, []),
            null
          );
        };
      var w = function (e) {
        var t = e.Component,
          n = e.pageProps,
          s = (0, u.useRouter)(),
          c = (0, o.useContext)(d);
        c.theme,
          c.setTheme,
          (0, o.useEffect)(function () {
            setTimeout(function () {
              a().init();
            }, 1e3);
          }, []),
          (0, o.useEffect)(
            function () {
              var e = function (e) {
                !(function (e) {
                  window.gtag("config", "G-26DGM87FQS", { page_path: e });
                })(e);
              };
              return (
                s.events.on("routeChangeComplete", e),
                function () {
                  s.events.off("routeChangeComplete", e);
                }
              );
            },
            [s.events]
          );
        var l = t;
        return (0, i.jsxs)(p, {
          defaultTheme: "light",
          disableTransitionOnChange: !0,
          children: [(0, i.jsx)(b, {}), (0, i.jsx)(l, (0, r.Z)({}, n))],
        });
      };
    },
    8279: function () {},
    7977: function () {},
    8745: function () {},
    8322: function () {},
    4831: function () {},
    9008: function (e, t, n) {
      e.exports = n(5443);
    },
    1163: function (e, t, n) {
      e.exports = n(387);
    },
    1799: function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            i.forEach(function (t) {
              r(e, t, n[t]);
            });
        }
        return e;
      }
      n.d(t, {
        Z: function () {
          return i;
        },
      });
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t));
    };
    e.O(0, [9774, 179], function () {
      return t(6840), t(387);
    });
    var n = e.O();
    _N_E = n;
  },
]);
//# sourceMappingURL=_app-71c52408e704d6d4.js.map
