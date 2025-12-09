(function () {
  const a = document.createElement("link").relList;
  if (a && a.supports && a.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) u(o);
  new MutationObserver((o) => {
    for (const c of o)
      if (c.type === "childList")
        for (const h of c.addedNodes)
          h.tagName === "LINK" && h.rel === "modulepreload" && u(h);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(o) {
    const c = {};
    return (
      o.integrity && (c.integrity = o.integrity),
      o.referrerPolicy && (c.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (c.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (c.credentials = "omit")
        : (c.credentials = "same-origin"),
      c
    );
  }
  function u(o) {
    if (o.ep) return;
    o.ep = !0;
    const c = r(o);
    fetch(o.href, c);
  }
})();
function tf(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
var cc = { exports: {} },
  ki = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zp;
function Db() {
  if (zp) return ki;
  zp = 1;
  var n = Symbol.for("react.transitional.element"),
    a = Symbol.for("react.fragment");
  function r(u, o, c) {
    var h = null;
    if (
      (c !== void 0 && (h = "" + c),
      o.key !== void 0 && (h = "" + o.key),
      "key" in o)
    ) {
      c = {};
      for (var d in o) d !== "key" && (c[d] = o[d]);
    } else c = o;
    return (
      (o = c.ref),
      { $$typeof: n, type: u, key: h, ref: o !== void 0 ? o : null, props: c }
    );
  }
  return (ki.Fragment = a), (ki.jsx = r), (ki.jsxs = r), ki;
}
var Op;
function Mb() {
  return Op || ((Op = 1), (cc.exports = Db())), cc.exports;
}
var R = Mb(),
  fc = { exports: {} },
  ge = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rp;
function kb() {
  if (Rp) return ge;
  Rp = 1;
  var n = Symbol.for("react.transitional.element"),
    a = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    u = Symbol.for("react.strict_mode"),
    o = Symbol.for("react.profiler"),
    c = Symbol.for("react.consumer"),
    h = Symbol.for("react.context"),
    d = Symbol.for("react.forward_ref"),
    y = Symbol.for("react.suspense"),
    m = Symbol.for("react.memo"),
    p = Symbol.for("react.lazy"),
    b = Symbol.for("react.activity"),
    S = Symbol.iterator;
  function v(C) {
    return C === null || typeof C != "object"
      ? null
      : ((C = (S && C[S]) || C["@@iterator"]),
        typeof C == "function" ? C : null);
  }
  var T = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    O = Object.assign,
    N = {};
  function _(C, V, E) {
    (this.props = C),
      (this.context = V),
      (this.refs = N),
      (this.updater = E || T);
  }
  (_.prototype.isReactComponent = {}),
    (_.prototype.setState = function (C, V) {
      if (typeof C != "object" && typeof C != "function" && C != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, C, V, "setState");
    }),
    (_.prototype.forceUpdate = function (C) {
      this.updater.enqueueForceUpdate(this, C, "forceUpdate");
    });
  function Z() {}
  Z.prototype = _.prototype;
  function k(C, V, E) {
    (this.props = C),
      (this.context = V),
      (this.refs = N),
      (this.updater = E || T);
  }
  var ee = (k.prototype = new Z());
  (ee.constructor = k), O(ee, _.prototype), (ee.isPureReactComponent = !0);
  var ae = Array.isArray;
  function Y() {}
  var I = { H: null, A: null, T: null, S: null },
    de = Object.prototype.hasOwnProperty;
  function ce(C, V, E) {
    var W = E.ref;
    return {
      $$typeof: n,
      type: C,
      key: V,
      ref: W !== void 0 ? W : null,
      props: E,
    };
  }
  function me(C, V) {
    return ce(C.type, V, C.props);
  }
  function ne(C) {
    return typeof C == "object" && C !== null && C.$$typeof === n;
  }
  function te(C) {
    var V = { "=": "=0", ":": "=2" };
    return (
      "$" +
      C.replace(/[=:]/g, function (E) {
        return V[E];
      })
    );
  }
  var we = /\/+/g;
  function ie(C, V) {
    return typeof C == "object" && C !== null && C.key != null
      ? te("" + C.key)
      : V.toString(36);
  }
  function $(C) {
    switch (C.status) {
      case "fulfilled":
        return C.value;
      case "rejected":
        throw C.reason;
      default:
        switch (
          (typeof C.status == "string"
            ? C.then(Y, Y)
            : ((C.status = "pending"),
              C.then(
                function (V) {
                  C.status === "pending" &&
                    ((C.status = "fulfilled"), (C.value = V));
                },
                function (V) {
                  C.status === "pending" &&
                    ((C.status = "rejected"), (C.reason = V));
                }
              )),
          C.status)
        ) {
          case "fulfilled":
            return C.value;
          case "rejected":
            throw C.reason;
        }
    }
    throw C;
  }
  function M(C, V, E, W, fe) {
    var oe = typeof C;
    (oe === "undefined" || oe === "boolean") && (C = null);
    var ze = !1;
    if (C === null) ze = !0;
    else
      switch (oe) {
        case "bigint":
        case "string":
        case "number":
          ze = !0;
          break;
        case "object":
          switch (C.$$typeof) {
            case n:
            case a:
              ze = !0;
              break;
            case p:
              return (ze = C._init), M(ze(C._payload), V, E, W, fe);
          }
      }
    if (ze)
      return (
        (fe = fe(C)),
        (ze = W === "" ? "." + ie(C, 0) : W),
        ae(fe)
          ? ((E = ""),
            ze != null && (E = ze.replace(we, "$&/") + "/"),
            M(fe, V, E, "", function (Qt) {
              return Qt;
            }))
          : fe != null &&
            (ne(fe) &&
              (fe = me(
                fe,
                E +
                  (fe.key == null || (C && C.key === fe.key)
                    ? ""
                    : ("" + fe.key).replace(we, "$&/") + "/") +
                  ze
              )),
            V.push(fe)),
        1
      );
    ze = 0;
    var Ke = W === "" ? "." : W + ":";
    if (ae(C))
      for (var Be = 0; Be < C.length; Be++)
        (W = C[Be]), (oe = Ke + ie(W, Be)), (ze += M(W, V, E, oe, fe));
    else if (((Be = v(C)), typeof Be == "function"))
      for (C = Be.call(C), Be = 0; !(W = C.next()).done; )
        (W = W.value), (oe = Ke + ie(W, Be++)), (ze += M(W, V, E, oe, fe));
    else if (oe === "object") {
      if (typeof C.then == "function") return M($(C), V, E, W, fe);
      throw (
        ((V = String(C)),
        Error(
          "Objects are not valid as a React child (found: " +
            (V === "[object Object]"
              ? "object with keys {" + Object.keys(C).join(", ") + "}"
              : V) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return ze;
  }
  function K(C, V, E) {
    if (C == null) return C;
    var W = [],
      fe = 0;
    return (
      M(C, W, "", "", function (oe) {
        return V.call(E, oe, fe++);
      }),
      W
    );
  }
  function le(C) {
    if (C._status === -1) {
      var V = C._result;
      (V = V()),
        V.then(
          function (E) {
            (C._status === 0 || C._status === -1) &&
              ((C._status = 1), (C._result = E));
          },
          function (E) {
            (C._status === 0 || C._status === -1) &&
              ((C._status = 2), (C._result = E));
          }
        ),
        C._status === -1 && ((C._status = 0), (C._result = V));
    }
    if (C._status === 1) return C._result.default;
    throw C._result;
  }
  var xe =
      typeof reportError == "function"
        ? reportError
        : function (C) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var V = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof C == "object" &&
                  C !== null &&
                  typeof C.message == "string"
                    ? String(C.message)
                    : String(C),
                error: C,
              });
              if (!window.dispatchEvent(V)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", C);
              return;
            }
            console.error(C);
          },
    w = {
      map: K,
      forEach: function (C, V, E) {
        K(
          C,
          function () {
            V.apply(this, arguments);
          },
          E
        );
      },
      count: function (C) {
        var V = 0;
        return (
          K(C, function () {
            V++;
          }),
          V
        );
      },
      toArray: function (C) {
        return (
          K(C, function (V) {
            return V;
          }) || []
        );
      },
      only: function (C) {
        if (!ne(C))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return C;
      },
    };
  return (
    (ge.Activity = b),
    (ge.Children = w),
    (ge.Component = _),
    (ge.Fragment = r),
    (ge.Profiler = o),
    (ge.PureComponent = k),
    (ge.StrictMode = u),
    (ge.Suspense = y),
    (ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I),
    (ge.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (C) {
        return I.H.useMemoCache(C);
      },
    }),
    (ge.cache = function (C) {
      return function () {
        return C.apply(null, arguments);
      };
    }),
    (ge.cacheSignal = function () {
      return null;
    }),
    (ge.cloneElement = function (C, V, E) {
      if (C == null)
        throw Error(
          "The argument must be a React element, but you passed " + C + "."
        );
      var W = O({}, C.props),
        fe = C.key;
      if (V != null)
        for (oe in (V.key !== void 0 && (fe = "" + V.key), V))
          !de.call(V, oe) ||
            oe === "key" ||
            oe === "__self" ||
            oe === "__source" ||
            (oe === "ref" && V.ref === void 0) ||
            (W[oe] = V[oe]);
      var oe = arguments.length - 2;
      if (oe === 1) W.children = E;
      else if (1 < oe) {
        for (var ze = Array(oe), Ke = 0; Ke < oe; Ke++)
          ze[Ke] = arguments[Ke + 2];
        W.children = ze;
      }
      return ce(C.type, fe, W);
    }),
    (ge.createContext = function (C) {
      return (
        (C = {
          $$typeof: h,
          _currentValue: C,
          _currentValue2: C,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (C.Provider = C),
        (C.Consumer = { $$typeof: c, _context: C }),
        C
      );
    }),
    (ge.createElement = function (C, V, E) {
      var W,
        fe = {},
        oe = null;
      if (V != null)
        for (W in (V.key !== void 0 && (oe = "" + V.key), V))
          de.call(V, W) &&
            W !== "key" &&
            W !== "__self" &&
            W !== "__source" &&
            (fe[W] = V[W]);
      var ze = arguments.length - 2;
      if (ze === 1) fe.children = E;
      else if (1 < ze) {
        for (var Ke = Array(ze), Be = 0; Be < ze; Be++)
          Ke[Be] = arguments[Be + 2];
        fe.children = Ke;
      }
      if (C && C.defaultProps)
        for (W in ((ze = C.defaultProps), ze))
          fe[W] === void 0 && (fe[W] = ze[W]);
      return ce(C, oe, fe);
    }),
    (ge.createRef = function () {
      return { current: null };
    }),
    (ge.forwardRef = function (C) {
      return { $$typeof: d, render: C };
    }),
    (ge.isValidElement = ne),
    (ge.lazy = function (C) {
      return { $$typeof: p, _payload: { _status: -1, _result: C }, _init: le };
    }),
    (ge.memo = function (C, V) {
      return { $$typeof: m, type: C, compare: V === void 0 ? null : V };
    }),
    (ge.startTransition = function (C) {
      var V = I.T,
        E = {};
      I.T = E;
      try {
        var W = C(),
          fe = I.S;
        fe !== null && fe(E, W),
          typeof W == "object" &&
            W !== null &&
            typeof W.then == "function" &&
            W.then(Y, xe);
      } catch (oe) {
        xe(oe);
      } finally {
        V !== null && E.types !== null && (V.types = E.types), (I.T = V);
      }
    }),
    (ge.unstable_useCacheRefresh = function () {
      return I.H.useCacheRefresh();
    }),
    (ge.use = function (C) {
      return I.H.use(C);
    }),
    (ge.useActionState = function (C, V, E) {
      return I.H.useActionState(C, V, E);
    }),
    (ge.useCallback = function (C, V) {
      return I.H.useCallback(C, V);
    }),
    (ge.useContext = function (C) {
      return I.H.useContext(C);
    }),
    (ge.useDebugValue = function () {}),
    (ge.useDeferredValue = function (C, V) {
      return I.H.useDeferredValue(C, V);
    }),
    (ge.useEffect = function (C, V) {
      return I.H.useEffect(C, V);
    }),
    (ge.useEffectEvent = function (C) {
      return I.H.useEffectEvent(C);
    }),
    (ge.useId = function () {
      return I.H.useId();
    }),
    (ge.useImperativeHandle = function (C, V, E) {
      return I.H.useImperativeHandle(C, V, E);
    }),
    (ge.useInsertionEffect = function (C, V) {
      return I.H.useInsertionEffect(C, V);
    }),
    (ge.useLayoutEffect = function (C, V) {
      return I.H.useLayoutEffect(C, V);
    }),
    (ge.useMemo = function (C, V) {
      return I.H.useMemo(C, V);
    }),
    (ge.useOptimistic = function (C, V) {
      return I.H.useOptimistic(C, V);
    }),
    (ge.useReducer = function (C, V, E) {
      return I.H.useReducer(C, V, E);
    }),
    (ge.useRef = function (C) {
      return I.H.useRef(C);
    }),
    (ge.useState = function (C) {
      return I.H.useState(C);
    }),
    (ge.useSyncExternalStore = function (C, V, E) {
      return I.H.useSyncExternalStore(C, V, E);
    }),
    (ge.useTransition = function () {
      return I.H.useTransition();
    }),
    (ge.version = "19.2.1"),
    ge
  );
}
var Np;
function nf() {
  return Np || ((Np = 1), (fc.exports = kb())), fc.exports;
}
var q = nf();
const Eu = tf(q);
var hc = { exports: {} },
  ji = {},
  dc = { exports: {} },
  mc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _p;
function jb() {
  return (
    _p ||
      ((_p = 1),
      (function (n) {
        function a(M, K) {
          var le = M.length;
          M.push(K);
          e: for (; 0 < le; ) {
            var xe = (le - 1) >>> 1,
              w = M[xe];
            if (0 < o(w, K)) (M[xe] = K), (M[le] = w), (le = xe);
            else break e;
          }
        }
        function r(M) {
          return M.length === 0 ? null : M[0];
        }
        function u(M) {
          if (M.length === 0) return null;
          var K = M[0],
            le = M.pop();
          if (le !== K) {
            M[0] = le;
            e: for (var xe = 0, w = M.length, C = w >>> 1; xe < C; ) {
              var V = 2 * (xe + 1) - 1,
                E = M[V],
                W = V + 1,
                fe = M[W];
              if (0 > o(E, le))
                W < w && 0 > o(fe, E)
                  ? ((M[xe] = fe), (M[W] = le), (xe = W))
                  : ((M[xe] = E), (M[V] = le), (xe = V));
              else if (W < w && 0 > o(fe, le))
                (M[xe] = fe), (M[W] = le), (xe = W);
              else break e;
            }
          }
          return K;
        }
        function o(M, K) {
          var le = M.sortIndex - K.sortIndex;
          return le !== 0 ? le : M.id - K.id;
        }
        if (
          ((n.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var c = performance;
          n.unstable_now = function () {
            return c.now();
          };
        } else {
          var h = Date,
            d = h.now();
          n.unstable_now = function () {
            return h.now() - d;
          };
        }
        var y = [],
          m = [],
          p = 1,
          b = null,
          S = 3,
          v = !1,
          T = !1,
          O = !1,
          N = !1,
          _ = typeof setTimeout == "function" ? setTimeout : null,
          Z = typeof clearTimeout == "function" ? clearTimeout : null,
          k = typeof setImmediate < "u" ? setImmediate : null;
        function ee(M) {
          for (var K = r(m); K !== null; ) {
            if (K.callback === null) u(m);
            else if (K.startTime <= M)
              u(m), (K.sortIndex = K.expirationTime), a(y, K);
            else break;
            K = r(m);
          }
        }
        function ae(M) {
          if (((O = !1), ee(M), !T))
            if (r(y) !== null) (T = !0), Y || ((Y = !0), te());
            else {
              var K = r(m);
              K !== null && $(ae, K.startTime - M);
            }
        }
        var Y = !1,
          I = -1,
          de = 5,
          ce = -1;
        function me() {
          return N ? !0 : !(n.unstable_now() - ce < de);
        }
        function ne() {
          if (((N = !1), Y)) {
            var M = n.unstable_now();
            ce = M;
            var K = !0;
            try {
              e: {
                (T = !1), O && ((O = !1), Z(I), (I = -1)), (v = !0);
                var le = S;
                try {
                  t: {
                    for (
                      ee(M), b = r(y);
                      b !== null && !(b.expirationTime > M && me());

                    ) {
                      var xe = b.callback;
                      if (typeof xe == "function") {
                        (b.callback = null), (S = b.priorityLevel);
                        var w = xe(b.expirationTime <= M);
                        if (((M = n.unstable_now()), typeof w == "function")) {
                          (b.callback = w), ee(M), (K = !0);
                          break t;
                        }
                        b === r(y) && u(y), ee(M);
                      } else u(y);
                      b = r(y);
                    }
                    if (b !== null) K = !0;
                    else {
                      var C = r(m);
                      C !== null && $(ae, C.startTime - M), (K = !1);
                    }
                  }
                  break e;
                } finally {
                  (b = null), (S = le), (v = !1);
                }
                K = void 0;
              }
            } finally {
              K ? te() : (Y = !1);
            }
          }
        }
        var te;
        if (typeof k == "function")
          te = function () {
            k(ne);
          };
        else if (typeof MessageChannel < "u") {
          var we = new MessageChannel(),
            ie = we.port2;
          (we.port1.onmessage = ne),
            (te = function () {
              ie.postMessage(null);
            });
        } else
          te = function () {
            _(ne, 0);
          };
        function $(M, K) {
          I = _(function () {
            M(n.unstable_now());
          }, K);
        }
        (n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (M) {
            M.callback = null;
          }),
          (n.unstable_forceFrameRate = function (M) {
            0 > M || 125 < M
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (de = 0 < M ? Math.floor(1e3 / M) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return S;
          }),
          (n.unstable_next = function (M) {
            switch (S) {
              case 1:
              case 2:
              case 3:
                var K = 3;
                break;
              default:
                K = S;
            }
            var le = S;
            S = K;
            try {
              return M();
            } finally {
              S = le;
            }
          }),
          (n.unstable_requestPaint = function () {
            N = !0;
          }),
          (n.unstable_runWithPriority = function (M, K) {
            switch (M) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                M = 3;
            }
            var le = S;
            S = M;
            try {
              return K();
            } finally {
              S = le;
            }
          }),
          (n.unstable_scheduleCallback = function (M, K, le) {
            var xe = n.unstable_now();
            switch (
              (typeof le == "object" && le !== null
                ? ((le = le.delay),
                  (le = typeof le == "number" && 0 < le ? xe + le : xe))
                : (le = xe),
              M)
            ) {
              case 1:
                var w = -1;
                break;
              case 2:
                w = 250;
                break;
              case 5:
                w = 1073741823;
                break;
              case 4:
                w = 1e4;
                break;
              default:
                w = 5e3;
            }
            return (
              (w = le + w),
              (M = {
                id: p++,
                callback: K,
                priorityLevel: M,
                startTime: le,
                expirationTime: w,
                sortIndex: -1,
              }),
              le > xe
                ? ((M.sortIndex = le),
                  a(m, M),
                  r(y) === null &&
                    M === r(m) &&
                    (O ? (Z(I), (I = -1)) : (O = !0), $(ae, le - xe)))
                : ((M.sortIndex = w),
                  a(y, M),
                  T || v || ((T = !0), Y || ((Y = !0), te()))),
              M
            );
          }),
          (n.unstable_shouldYield = me),
          (n.unstable_wrapCallback = function (M) {
            var K = S;
            return function () {
              var le = S;
              S = K;
              try {
                return M.apply(this, arguments);
              } finally {
                S = le;
              }
            };
          });
      })(mc)),
    mc
  );
}
var Dp;
function Lb() {
  return Dp || ((Dp = 1), (dc.exports = jb())), dc.exports;
}
var pc = { exports: {} },
  yt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mp;
function Ub() {
  if (Mp) return yt;
  Mp = 1;
  var n = nf();
  function a(y) {
    var m = "https://react.dev/errors/" + y;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var p = 2; p < arguments.length; p++)
        m += "&args[]=" + encodeURIComponent(arguments[p]);
    }
    return (
      "Minified React error #" +
      y +
      "; visit " +
      m +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function r() {}
  var u = {
      d: {
        f: r,
        r: function () {
          throw Error(a(522));
        },
        D: r,
        C: r,
        L: r,
        m: r,
        X: r,
        S: r,
        M: r,
      },
      p: 0,
      findDOMNode: null,
    },
    o = Symbol.for("react.portal");
  function c(y, m, p) {
    var b =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: b == null ? null : "" + b,
      children: y,
      containerInfo: m,
      implementation: p,
    };
  }
  var h = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function d(y, m) {
    if (y === "font") return "";
    if (typeof m == "string") return m === "use-credentials" ? m : "";
  }
  return (
    (yt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u),
    (yt.createPortal = function (y, m) {
      var p =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11))
        throw Error(a(299));
      return c(y, m, null, p);
    }),
    (yt.flushSync = function (y) {
      var m = h.T,
        p = u.p;
      try {
        if (((h.T = null), (u.p = 2), y)) return y();
      } finally {
        (h.T = m), (u.p = p), u.d.f();
      }
    }),
    (yt.preconnect = function (y, m) {
      typeof y == "string" &&
        (m
          ? ((m = m.crossOrigin),
            (m =
              typeof m == "string"
                ? m === "use-credentials"
                  ? m
                  : ""
                : void 0))
          : (m = null),
        u.d.C(y, m));
    }),
    (yt.prefetchDNS = function (y) {
      typeof y == "string" && u.d.D(y);
    }),
    (yt.preinit = function (y, m) {
      if (typeof y == "string" && m && typeof m.as == "string") {
        var p = m.as,
          b = d(p, m.crossOrigin),
          S = typeof m.integrity == "string" ? m.integrity : void 0,
          v = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
        p === "style"
          ? u.d.S(y, typeof m.precedence == "string" ? m.precedence : void 0, {
              crossOrigin: b,
              integrity: S,
              fetchPriority: v,
            })
          : p === "script" &&
            u.d.X(y, {
              crossOrigin: b,
              integrity: S,
              fetchPriority: v,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
      }
    }),
    (yt.preinitModule = function (y, m) {
      if (typeof y == "string")
        if (typeof m == "object" && m !== null) {
          if (m.as == null || m.as === "script") {
            var p = d(m.as, m.crossOrigin);
            u.d.M(y, {
              crossOrigin: p,
              integrity: typeof m.integrity == "string" ? m.integrity : void 0,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
          }
        } else m == null && u.d.M(y);
    }),
    (yt.preload = function (y, m) {
      if (
        typeof y == "string" &&
        typeof m == "object" &&
        m !== null &&
        typeof m.as == "string"
      ) {
        var p = m.as,
          b = d(p, m.crossOrigin);
        u.d.L(y, p, {
          crossOrigin: b,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          type: typeof m.type == "string" ? m.type : void 0,
          fetchPriority:
            typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
          referrerPolicy:
            typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
          imageSrcSet:
            typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
          imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
          media: typeof m.media == "string" ? m.media : void 0,
        });
      }
    }),
    (yt.preloadModule = function (y, m) {
      if (typeof y == "string")
        if (m) {
          var p = d(m.as, m.crossOrigin);
          u.d.m(y, {
            as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
            crossOrigin: p,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          });
        } else u.d.m(y);
    }),
    (yt.requestFormReset = function (y) {
      u.d.r(y);
    }),
    (yt.unstable_batchedUpdates = function (y, m) {
      return y(m);
    }),
    (yt.useFormState = function (y, m, p) {
      return h.H.useFormState(y, m, p);
    }),
    (yt.useFormStatus = function () {
      return h.H.useHostTransitionStatus();
    }),
    (yt.version = "19.2.1"),
    yt
  );
}
var kp;
function Bb() {
  if (kp) return pc.exports;
  kp = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (a) {
        console.error(a);
      }
  }
  return n(), (pc.exports = Ub()), pc.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jp;
function Hb() {
  if (jp) return ji;
  jp = 1;
  var n = Lb(),
    a = nf(),
    r = Bb();
  function u(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        t += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function o(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function c(e) {
    var t = e,
      l = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (l = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? l : null;
  }
  function h(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function d(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function y(e) {
    if (c(e) !== e) throw Error(u(188));
  }
  function m(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = c(e)), t === null)) throw Error(u(188));
      return t !== e ? null : e;
    }
    for (var l = e, i = t; ; ) {
      var s = l.return;
      if (s === null) break;
      var f = s.alternate;
      if (f === null) {
        if (((i = s.return), i !== null)) {
          l = i;
          continue;
        }
        break;
      }
      if (s.child === f.child) {
        for (f = s.child; f; ) {
          if (f === l) return y(s), e;
          if (f === i) return y(s), t;
          f = f.sibling;
        }
        throw Error(u(188));
      }
      if (l.return !== i.return) (l = s), (i = f);
      else {
        for (var g = !1, x = s.child; x; ) {
          if (x === l) {
            (g = !0), (l = s), (i = f);
            break;
          }
          if (x === i) {
            (g = !0), (i = s), (l = f);
            break;
          }
          x = x.sibling;
        }
        if (!g) {
          for (x = f.child; x; ) {
            if (x === l) {
              (g = !0), (l = f), (i = s);
              break;
            }
            if (x === i) {
              (g = !0), (i = f), (l = s);
              break;
            }
            x = x.sibling;
          }
          if (!g) throw Error(u(189));
        }
      }
      if (l.alternate !== i) throw Error(u(190));
    }
    if (l.tag !== 3) throw Error(u(188));
    return l.stateNode.current === l ? e : t;
  }
  function p(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = p(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var b = Object.assign,
    S = Symbol.for("react.element"),
    v = Symbol.for("react.transitional.element"),
    T = Symbol.for("react.portal"),
    O = Symbol.for("react.fragment"),
    N = Symbol.for("react.strict_mode"),
    _ = Symbol.for("react.profiler"),
    Z = Symbol.for("react.consumer"),
    k = Symbol.for("react.context"),
    ee = Symbol.for("react.forward_ref"),
    ae = Symbol.for("react.suspense"),
    Y = Symbol.for("react.suspense_list"),
    I = Symbol.for("react.memo"),
    de = Symbol.for("react.lazy"),
    ce = Symbol.for("react.activity"),
    me = Symbol.for("react.memo_cache_sentinel"),
    ne = Symbol.iterator;
  function te(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (ne && e[ne]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var we = Symbol.for("react.client.reference");
  function ie(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === we ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case O:
        return "Fragment";
      case _:
        return "Profiler";
      case N:
        return "StrictMode";
      case ae:
        return "Suspense";
      case Y:
        return "SuspenseList";
      case ce:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case T:
          return "Portal";
        case k:
          return e.displayName || "Context";
        case Z:
          return (e._context.displayName || "Context") + ".Consumer";
        case ee:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case I:
          return (
            (t = e.displayName || null), t !== null ? t : ie(e.type) || "Memo"
          );
        case de:
          (t = e._payload), (e = e._init);
          try {
            return ie(e(t));
          } catch {}
      }
    return null;
  }
  var $ = Array.isArray,
    M = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    K = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    le = { pending: !1, data: null, method: null, action: null },
    xe = [],
    w = -1;
  function C(e) {
    return { current: e };
  }
  function V(e) {
    0 > w || ((e.current = xe[w]), (xe[w] = null), w--);
  }
  function E(e, t) {
    w++, (xe[w] = e.current), (e.current = t);
  }
  var W = C(null),
    fe = C(null),
    oe = C(null),
    ze = C(null);
  function Ke(e, t) {
    switch ((E(oe, t), E(fe, e), E(W, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Im(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          (t = Im(t)), (e = $m(t, e));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    V(W), E(W, e);
  }
  function Be() {
    V(W), V(fe), V(oe);
  }
  function Qt(e) {
    e.memoizedState !== null && E(ze, e);
    var t = W.current,
      l = $m(t, e.type);
    t !== l && (E(fe, e), E(W, l));
  }
  function Sn(e) {
    fe.current === e && (V(W), V(fe)),
      ze.current === e && (V(ze), (Ni._currentValue = le));
  }
  var Ya, lr;
  function En(e) {
    if (Ya === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        (Ya = (t && t[1]) || ""),
          (lr =
            -1 <
            l.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < l.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      Ya +
      e +
      lr
    );
  }
  var Yl = !1;
  function Vl(e, t) {
    if (!e || Yl) return "";
    Yl = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var i = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var F = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(F.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(F, []);
                } catch (H) {
                  var U = H;
                }
                Reflect.construct(e, [], F);
              } else {
                try {
                  F.call();
                } catch (H) {
                  U = H;
                }
                e.call(F.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (H) {
                U = H;
              }
              (F = e()) &&
                typeof F.catch == "function" &&
                F.catch(function () {});
            }
          } catch (H) {
            if (H && U && typeof H.stack == "string") return [H.stack, U.stack];
          }
          return [null, null];
        },
      };
      i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        i.DetermineComponentFrameRoot,
        "name"
      );
      s &&
        s.configurable &&
        Object.defineProperty(i.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var f = i.DetermineComponentFrameRoot(),
        g = f[0],
        x = f[1];
      if (g && x) {
        var A = g.split(`
`),
          L = x.split(`
`);
        for (
          s = i = 0;
          i < A.length && !A[i].includes("DetermineComponentFrameRoot");

        )
          i++;
        for (; s < L.length && !L[s].includes("DetermineComponentFrameRoot"); )
          s++;
        if (i === A.length || s === L.length)
          for (
            i = A.length - 1, s = L.length - 1;
            1 <= i && 0 <= s && A[i] !== L[s];

          )
            s--;
        for (; 1 <= i && 0 <= s; i--, s--)
          if (A[i] !== L[s]) {
            if (i !== 1 || s !== 1)
              do
                if ((i--, s--, 0 > s || A[i] !== L[s])) {
                  var X =
                    `
` + A[i].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      X.includes("<anonymous>") &&
                      (X = X.replace("<anonymous>", e.displayName)),
                    X
                  );
                }
              while (1 <= i && 0 <= s);
            break;
          }
      }
    } finally {
      (Yl = !1), (Error.prepareStackTrace = l);
    }
    return (l = e ? e.displayName || e.name : "") ? En(l) : "";
  }
  function ar(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return En(e.type);
      case 16:
        return En("Lazy");
      case 13:
        return e.child !== t && t !== null
          ? En("Suspense Fallback")
          : En("Suspense");
      case 19:
        return En("SuspenseList");
      case 0:
      case 15:
        return Vl(e.type, !1);
      case 11:
        return Vl(e.type.render, !1);
      case 1:
        return Vl(e.type, !0);
      case 31:
        return En("Activity");
      default:
        return "";
    }
  }
  function ir(e) {
    try {
      var t = "",
        l = null;
      do (t += ar(e, l)), (l = e), (e = e.return);
      while (e);
      return t;
    } catch (i) {
      return (
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack
      );
    }
  }
  var Xl = Object.prototype.hasOwnProperty,
    Gl = n.unstable_scheduleCallback,
    Va = n.unstable_cancelCallback,
    Ku = n.unstable_shouldYield,
    Ju = n.unstable_requestPaint,
    vt = n.unstable_now,
    Iu = n.unstable_getCurrentPriorityLevel,
    G = n.unstable_ImmediatePriority,
    P = n.unstable_UserBlockingPriority,
    pe = n.unstable_NormalPriority,
    Te = n.unstable_LowPriority,
    je = n.unstable_IdlePriority,
    jt = n.log,
    wn = n.unstable_setDisableYieldValue,
    xt = null,
    ut = null;
  function Et(e) {
    if (
      (typeof jt == "function" && wn(e),
      ut && typeof ut.setStrictMode == "function")
    )
      try {
        ut.setStrictMode(xt, e);
      } catch {}
  }
  var Ve = Math.clz32 ? Math.clz32 : b0,
    Qn = Math.log,
    an = Math.LN2;
  function b0(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Qn(e) / an) | 0)) | 0;
  }
  var rr = 256,
    ur = 262144,
    or = 4194304;
  function vl(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function sr(e, t, l) {
    var i = e.pendingLanes;
    if (i === 0) return 0;
    var s = 0,
      f = e.suspendedLanes,
      g = e.pingedLanes;
    e = e.warmLanes;
    var x = i & 134217727;
    return (
      x !== 0
        ? ((i = x & ~f),
          i !== 0
            ? (s = vl(i))
            : ((g &= x),
              g !== 0
                ? (s = vl(g))
                : l || ((l = x & ~e), l !== 0 && (s = vl(l)))))
        : ((x = i & ~f),
          x !== 0
            ? (s = vl(x))
            : g !== 0
            ? (s = vl(g))
            : l || ((l = i & ~e), l !== 0 && (s = vl(l)))),
      s === 0
        ? 0
        : t !== 0 &&
          t !== s &&
          (t & f) === 0 &&
          ((f = s & -s),
          (l = t & -t),
          f >= l || (f === 32 && (l & 4194048) !== 0))
        ? t
        : s
    );
  }
  function Xa(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function v0(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function _f() {
    var e = or;
    return (or <<= 1), (or & 62914560) === 0 && (or = 4194304), e;
  }
  function $u(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function Ga(e, t) {
    (e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function x0(e, t, l, i, s, f) {
    var g = e.pendingLanes;
    (e.pendingLanes = l),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= l),
      (e.entangledLanes &= l),
      (e.errorRecoveryDisabledLanes &= l),
      (e.shellSuspendCounter = 0);
    var x = e.entanglements,
      A = e.expirationTimes,
      L = e.hiddenUpdates;
    for (l = g & ~l; 0 < l; ) {
      var X = 31 - Ve(l),
        F = 1 << X;
      (x[X] = 0), (A[X] = -1);
      var U = L[X];
      if (U !== null)
        for (L[X] = null, X = 0; X < U.length; X++) {
          var H = U[X];
          H !== null && (H.lane &= -536870913);
        }
      l &= ~F;
    }
    i !== 0 && Df(e, i, 0),
      f !== 0 && s === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(g & ~t));
  }
  function Df(e, t, l) {
    (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
    var i = 31 - Ve(t);
    (e.entangledLanes |= t),
      (e.entanglements[i] = e.entanglements[i] | 1073741824 | (l & 261930));
  }
  function Mf(e, t) {
    var l = (e.entangledLanes |= t);
    for (e = e.entanglements; l; ) {
      var i = 31 - Ve(l),
        s = 1 << i;
      (s & t) | (e[i] & t) && (e[i] |= t), (l &= ~s);
    }
  }
  function kf(e, t) {
    var l = t & -t;
    return (
      (l = (l & 42) !== 0 ? 1 : Pu(l)),
      (l & (e.suspendedLanes | t)) !== 0 ? 0 : l
    );
  }
  function Pu(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Wu(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function jf() {
    var e = K.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : xp(e.type));
  }
  function Lf(e, t) {
    var l = K.p;
    try {
      return (K.p = e), t();
    } finally {
      K.p = l;
    }
  }
  var Zn = Math.random().toString(36).slice(2),
    ft = "__reactFiber$" + Zn,
    wt = "__reactProps$" + Zn,
    Ql = "__reactContainer$" + Zn,
    eo = "__reactEvents$" + Zn,
    S0 = "__reactListeners$" + Zn,
    E0 = "__reactHandles$" + Zn,
    Uf = "__reactResources$" + Zn,
    Qa = "__reactMarker$" + Zn;
  function to(e) {
    delete e[ft], delete e[wt], delete e[eo], delete e[S0], delete e[E0];
  }
  function Zl(e) {
    var t = e[ft];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if ((t = l[Ql] || l[ft])) {
        if (
          ((l = t.alternate),
          t.child !== null || (l !== null && l.child !== null))
        )
          for (e = ap(e); e !== null; ) {
            if ((l = e[ft])) return l;
            e = ap(e);
          }
        return t;
      }
      (e = l), (l = e.parentNode);
    }
    return null;
  }
  function Fl(e) {
    if ((e = e[ft] || e[Ql])) {
      var t = e.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return e;
    }
    return null;
  }
  function Za(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(u(33));
  }
  function Kl(e) {
    var t = e[Uf];
    return (
      t ||
        (t = e[Uf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function st(e) {
    e[Qa] = !0;
  }
  var Bf = new Set(),
    Hf = {};
  function xl(e, t) {
    Jl(e, t), Jl(e + "Capture", t);
  }
  function Jl(e, t) {
    for (Hf[e] = t, e = 0; e < t.length; e++) Bf.add(t[e]);
  }
  var w0 = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    qf = {},
    Yf = {};
  function T0(e) {
    return Xl.call(Yf, e)
      ? !0
      : Xl.call(qf, e)
      ? !1
      : w0.test(e)
      ? (Yf[e] = !0)
      : ((qf[e] = !0), !1);
  }
  function cr(e, t, l) {
    if (T0(t))
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var i = t.toLowerCase().slice(0, 5);
            if (i !== "data-" && i !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + l);
      }
  }
  function fr(e, t, l) {
    if (l === null) e.removeAttribute(t);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + l);
    }
  }
  function Tn(e, t, l, i) {
    if (i === null) e.removeAttribute(l);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(t, l, "" + i);
    }
  }
  function Zt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Vf(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function A0(e, t, l) {
    var i = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof i < "u" &&
      typeof i.get == "function" &&
      typeof i.set == "function"
    ) {
      var s = i.get,
        f = i.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return s.call(this);
          },
          set: function (g) {
            (l = "" + g), f.call(this, g);
          },
        }),
        Object.defineProperty(e, t, { enumerable: i.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (g) {
            l = "" + g;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function no(e) {
    if (!e._valueTracker) {
      var t = Vf(e) ? "checked" : "value";
      e._valueTracker = A0(e, t, "" + e[t]);
    }
  }
  function Xf(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(),
      i = "";
    return (
      e && (i = Vf(e) ? (e.checked ? "true" : "false") : e.value),
      (e = i),
      e !== l ? (t.setValue(e), !0) : !1
    );
  }
  function hr(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var C0 = /[\n"\\]/g;
  function Ft(e) {
    return e.replace(C0, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function lo(e, t, l, i, s, f, g, x) {
    (e.name = ""),
      g != null &&
      typeof g != "function" &&
      typeof g != "symbol" &&
      typeof g != "boolean"
        ? (e.type = g)
        : e.removeAttribute("type"),
      t != null
        ? g === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + Zt(t))
          : e.value !== "" + Zt(t) && (e.value = "" + Zt(t))
        : (g !== "submit" && g !== "reset") || e.removeAttribute("value"),
      t != null
        ? ao(e, g, Zt(t))
        : l != null
        ? ao(e, g, Zt(l))
        : i != null && e.removeAttribute("value"),
      s == null && f != null && (e.defaultChecked = !!f),
      s != null &&
        (e.checked = s && typeof s != "function" && typeof s != "symbol"),
      x != null &&
      typeof x != "function" &&
      typeof x != "symbol" &&
      typeof x != "boolean"
        ? (e.name = "" + Zt(x))
        : e.removeAttribute("name");
  }
  function Gf(e, t, l, i, s, f, g, x) {
    if (
      (f != null &&
        typeof f != "function" &&
        typeof f != "symbol" &&
        typeof f != "boolean" &&
        (e.type = f),
      t != null || l != null)
    ) {
      if (!((f !== "submit" && f !== "reset") || t != null)) {
        no(e);
        return;
      }
      (l = l != null ? "" + Zt(l) : ""),
        (t = t != null ? "" + Zt(t) : l),
        x || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (i = i ?? s),
      (i = typeof i != "function" && typeof i != "symbol" && !!i),
      (e.checked = x ? e.checked : !!i),
      (e.defaultChecked = !!i),
      g != null &&
        typeof g != "function" &&
        typeof g != "symbol" &&
        typeof g != "boolean" &&
        (e.name = g),
      no(e);
  }
  function ao(e, t, l) {
    (t === "number" && hr(e.ownerDocument) === e) ||
      e.defaultValue === "" + l ||
      (e.defaultValue = "" + l);
  }
  function Il(e, t, l, i) {
    if (((e = e.options), t)) {
      t = {};
      for (var s = 0; s < l.length; s++) t["$" + l[s]] = !0;
      for (l = 0; l < e.length; l++)
        (s = t.hasOwnProperty("$" + e[l].value)),
          e[l].selected !== s && (e[l].selected = s),
          s && i && (e[l].defaultSelected = !0);
    } else {
      for (l = "" + Zt(l), t = null, s = 0; s < e.length; s++) {
        if (e[s].value === l) {
          (e[s].selected = !0), i && (e[s].defaultSelected = !0);
          return;
        }
        t !== null || e[s].disabled || (t = e[s]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Qf(e, t, l) {
    if (
      t != null &&
      ((t = "" + Zt(t)), t !== e.value && (e.value = t), l == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + Zt(l) : "";
  }
  function Zf(e, t, l, i) {
    if (t == null) {
      if (i != null) {
        if (l != null) throw Error(u(92));
        if ($(i)) {
          if (1 < i.length) throw Error(u(93));
          i = i[0];
        }
        l = i;
      }
      l == null && (l = ""), (t = l);
    }
    (l = Zt(t)),
      (e.defaultValue = l),
      (i = e.textContent),
      i === l && i !== "" && i !== null && (e.value = i),
      no(e);
  }
  function $l(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var z0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Ff(e, t, l) {
    var i = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === ""
      ? i
        ? e.setProperty(t, "")
        : t === "float"
        ? (e.cssFloat = "")
        : (e[t] = "")
      : i
      ? e.setProperty(t, l)
      : typeof l != "number" || l === 0 || z0.has(t)
      ? t === "float"
        ? (e.cssFloat = l)
        : (e[t] = ("" + l).trim())
      : (e[t] = l + "px");
  }
  function Kf(e, t, l) {
    if (t != null && typeof t != "object") throw Error(u(62));
    if (((e = e.style), l != null)) {
      for (var i in l)
        !l.hasOwnProperty(i) ||
          (t != null && t.hasOwnProperty(i)) ||
          (i.indexOf("--") === 0
            ? e.setProperty(i, "")
            : i === "float"
            ? (e.cssFloat = "")
            : (e[i] = ""));
      for (var s in t)
        (i = t[s]), t.hasOwnProperty(s) && l[s] !== i && Ff(e, s, i);
    } else for (var f in t) t.hasOwnProperty(f) && Ff(e, f, t[f]);
  }
  function io(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var O0 = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    R0 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function dr(e) {
    return R0.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function An() {}
  var ro = null;
  function uo(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Pl = null,
    Wl = null;
  function Jf(e) {
    var t = Fl(e);
    if (t && (e = t.stateNode)) {
      var l = e[wt] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (lo(
              e,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name
            ),
            (t = l.name),
            l.type === "radio" && t != null)
          ) {
            for (l = e; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + Ft("" + t) + '"][type="radio"]'
              ),
                t = 0;
              t < l.length;
              t++
            ) {
              var i = l[t];
              if (i !== e && i.form === e.form) {
                var s = i[wt] || null;
                if (!s) throw Error(u(90));
                lo(
                  i,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (t = 0; t < l.length; t++)
              (i = l[t]), i.form === e.form && Xf(i);
          }
          break e;
        case "textarea":
          Qf(e, l.value, l.defaultValue);
          break e;
        case "select":
          (t = l.value), t != null && Il(e, !!l.multiple, t, !1);
      }
    }
  }
  var oo = !1;
  function If(e, t, l) {
    if (oo) return e(t, l);
    oo = !0;
    try {
      var i = e(t);
      return i;
    } finally {
      if (
        ((oo = !1),
        (Pl !== null || Wl !== null) &&
          (eu(), Pl && ((t = Pl), (e = Wl), (Wl = Pl = null), Jf(t), e)))
      )
        for (t = 0; t < e.length; t++) Jf(e[t]);
    }
  }
  function Fa(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var i = l[wt] || null;
    if (i === null) return null;
    l = i[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (i = !i.disabled) ||
          ((e = e.type),
          (i = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !i);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (l && typeof l != "function") throw Error(u(231, t, typeof l));
    return l;
  }
  var Cn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    so = !1;
  if (Cn)
    try {
      var Ka = {};
      Object.defineProperty(Ka, "passive", {
        get: function () {
          so = !0;
        },
      }),
        window.addEventListener("test", Ka, Ka),
        window.removeEventListener("test", Ka, Ka);
    } catch {
      so = !1;
    }
  var Fn = null,
    co = null,
    mr = null;
  function $f() {
    if (mr) return mr;
    var e,
      t = co,
      l = t.length,
      i,
      s = "value" in Fn ? Fn.value : Fn.textContent,
      f = s.length;
    for (e = 0; e < l && t[e] === s[e]; e++);
    var g = l - e;
    for (i = 1; i <= g && t[l - i] === s[f - i]; i++);
    return (mr = s.slice(e, 1 < i ? 1 - i : void 0));
  }
  function pr(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function yr() {
    return !0;
  }
  function Pf() {
    return !1;
  }
  function Tt(e) {
    function t(l, i, s, f, g) {
      (this._reactName = l),
        (this._targetInst = s),
        (this.type = i),
        (this.nativeEvent = f),
        (this.target = g),
        (this.currentTarget = null);
      for (var x in e)
        e.hasOwnProperty(x) && ((l = e[x]), (this[x] = l ? l(f) : f[x]));
      return (
        (this.isDefaultPrevented = (
          f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1
        )
          ? yr
          : Pf),
        (this.isPropagationStopped = Pf),
        this
      );
    }
    return (
      b(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = yr));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = yr));
        },
        persist: function () {},
        isPersistent: yr,
      }),
      t
    );
  }
  var Sl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    gr = Tt(Sl),
    Ja = b({}, Sl, { view: 0, detail: 0 }),
    N0 = Tt(Ja),
    fo,
    ho,
    Ia,
    br = b({}, Ja, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: po,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Ia &&
              (Ia && e.type === "mousemove"
                ? ((fo = e.screenX - Ia.screenX), (ho = e.screenY - Ia.screenY))
                : (ho = fo = 0),
              (Ia = e)),
            fo);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : ho;
      },
    }),
    Wf = Tt(br),
    _0 = b({}, br, { dataTransfer: 0 }),
    D0 = Tt(_0),
    M0 = b({}, Ja, { relatedTarget: 0 }),
    mo = Tt(M0),
    k0 = b({}, Sl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    j0 = Tt(k0),
    L0 = b({}, Sl, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    U0 = Tt(L0),
    B0 = b({}, Sl, { data: 0 }),
    eh = Tt(B0),
    H0 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    q0 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Y0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function V0(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Y0[e])
      ? !!t[e]
      : !1;
  }
  function po() {
    return V0;
  }
  var X0 = b({}, Ja, {
      key: function (e) {
        if (e.key) {
          var t = H0[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = pr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? q0[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: po,
      charCode: function (e) {
        return e.type === "keypress" ? pr(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? pr(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    G0 = Tt(X0),
    Q0 = b({}, br, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    th = Tt(Q0),
    Z0 = b({}, Ja, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: po,
    }),
    F0 = Tt(Z0),
    K0 = b({}, Sl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    J0 = Tt(K0),
    I0 = b({}, br, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    $0 = Tt(I0),
    P0 = b({}, Sl, { newState: 0, oldState: 0 }),
    W0 = Tt(P0),
    e1 = [9, 13, 27, 32],
    yo = Cn && "CompositionEvent" in window,
    $a = null;
  Cn && "documentMode" in document && ($a = document.documentMode);
  var t1 = Cn && "TextEvent" in window && !$a,
    nh = Cn && (!yo || ($a && 8 < $a && 11 >= $a)),
    lh = " ",
    ah = !1;
  function ih(e, t) {
    switch (e) {
      case "keyup":
        return e1.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function rh(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var ea = !1;
  function n1(e, t) {
    switch (e) {
      case "compositionend":
        return rh(t);
      case "keypress":
        return t.which !== 32 ? null : ((ah = !0), lh);
      case "textInput":
        return (e = t.data), e === lh && ah ? null : e;
      default:
        return null;
    }
  }
  function l1(e, t) {
    if (ea)
      return e === "compositionend" || (!yo && ih(e, t))
        ? ((e = $f()), (mr = co = Fn = null), (ea = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return nh && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var a1 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function uh(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!a1[e.type] : t === "textarea";
  }
  function oh(e, t, l, i) {
    Pl ? (Wl ? Wl.push(i) : (Wl = [i])) : (Pl = i),
      (t = uu(t, "onChange")),
      0 < t.length &&
        ((l = new gr("onChange", "change", null, l, i)),
        e.push({ event: l, listeners: t }));
  }
  var Pa = null,
    Wa = null;
  function i1(e) {
    Gm(e, 0);
  }
  function vr(e) {
    var t = Za(e);
    if (Xf(t)) return e;
  }
  function sh(e, t) {
    if (e === "change") return t;
  }
  var ch = !1;
  if (Cn) {
    var go;
    if (Cn) {
      var bo = "oninput" in document;
      if (!bo) {
        var fh = document.createElement("div");
        fh.setAttribute("oninput", "return;"),
          (bo = typeof fh.oninput == "function");
      }
      go = bo;
    } else go = !1;
    ch = go && (!document.documentMode || 9 < document.documentMode);
  }
  function hh() {
    Pa && (Pa.detachEvent("onpropertychange", dh), (Wa = Pa = null));
  }
  function dh(e) {
    if (e.propertyName === "value" && vr(Wa)) {
      var t = [];
      oh(t, Wa, e, uo(e)), If(i1, t);
    }
  }
  function r1(e, t, l) {
    e === "focusin"
      ? (hh(), (Pa = t), (Wa = l), Pa.attachEvent("onpropertychange", dh))
      : e === "focusout" && hh();
  }
  function u1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return vr(Wa);
  }
  function o1(e, t) {
    if (e === "click") return vr(t);
  }
  function s1(e, t) {
    if (e === "input" || e === "change") return vr(t);
  }
  function c1(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Lt = typeof Object.is == "function" ? Object.is : c1;
  function ei(e, t) {
    if (Lt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var l = Object.keys(e),
      i = Object.keys(t);
    if (l.length !== i.length) return !1;
    for (i = 0; i < l.length; i++) {
      var s = l[i];
      if (!Xl.call(t, s) || !Lt(e[s], t[s])) return !1;
    }
    return !0;
  }
  function mh(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ph(e, t) {
    var l = mh(e);
    e = 0;
    for (var i; l; ) {
      if (l.nodeType === 3) {
        if (((i = e + l.textContent.length), e <= t && i >= t))
          return { node: l, offset: t - e };
        e = i;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = mh(l);
    }
  }
  function yh(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? yh(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function gh(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = hr(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = hr(e.document);
    }
    return t;
  }
  function vo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var f1 = Cn && "documentMode" in document && 11 >= document.documentMode,
    ta = null,
    xo = null,
    ti = null,
    So = !1;
  function bh(e, t, l) {
    var i =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    So ||
      ta == null ||
      ta !== hr(i) ||
      ((i = ta),
      "selectionStart" in i && vo(i)
        ? (i = { start: i.selectionStart, end: i.selectionEnd })
        : ((i = (
            (i.ownerDocument && i.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (i = {
            anchorNode: i.anchorNode,
            anchorOffset: i.anchorOffset,
            focusNode: i.focusNode,
            focusOffset: i.focusOffset,
          })),
      (ti && ei(ti, i)) ||
        ((ti = i),
        (i = uu(xo, "onSelect")),
        0 < i.length &&
          ((t = new gr("onSelect", "select", null, t, l)),
          e.push({ event: t, listeners: i }),
          (t.target = ta))));
  }
  function El(e, t) {
    var l = {};
    return (
      (l[e.toLowerCase()] = t.toLowerCase()),
      (l["Webkit" + e] = "webkit" + t),
      (l["Moz" + e] = "moz" + t),
      l
    );
  }
  var na = {
      animationend: El("Animation", "AnimationEnd"),
      animationiteration: El("Animation", "AnimationIteration"),
      animationstart: El("Animation", "AnimationStart"),
      transitionrun: El("Transition", "TransitionRun"),
      transitionstart: El("Transition", "TransitionStart"),
      transitioncancel: El("Transition", "TransitionCancel"),
      transitionend: El("Transition", "TransitionEnd"),
    },
    Eo = {},
    vh = {};
  Cn &&
    ((vh = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete na.animationend.animation,
      delete na.animationiteration.animation,
      delete na.animationstart.animation),
    "TransitionEvent" in window || delete na.transitionend.transition);
  function wl(e) {
    if (Eo[e]) return Eo[e];
    if (!na[e]) return e;
    var t = na[e],
      l;
    for (l in t) if (t.hasOwnProperty(l) && l in vh) return (Eo[e] = t[l]);
    return e;
  }
  var xh = wl("animationend"),
    Sh = wl("animationiteration"),
    Eh = wl("animationstart"),
    h1 = wl("transitionrun"),
    d1 = wl("transitionstart"),
    m1 = wl("transitioncancel"),
    wh = wl("transitionend"),
    Th = new Map(),
    wo =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  wo.push("scrollEnd");
  function rn(e, t) {
    Th.set(e, t), xl(t, [e]);
  }
  var xr =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == "object" &&
                  e !== null &&
                  typeof e.message == "string"
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", e);
              return;
            }
            console.error(e);
          },
    Kt = [],
    la = 0,
    To = 0;
  function Sr() {
    for (var e = la, t = (To = la = 0); t < e; ) {
      var l = Kt[t];
      Kt[t++] = null;
      var i = Kt[t];
      Kt[t++] = null;
      var s = Kt[t];
      Kt[t++] = null;
      var f = Kt[t];
      if (((Kt[t++] = null), i !== null && s !== null)) {
        var g = i.pending;
        g === null ? (s.next = s) : ((s.next = g.next), (g.next = s)),
          (i.pending = s);
      }
      f !== 0 && Ah(l, s, f);
    }
  }
  function Er(e, t, l, i) {
    (Kt[la++] = e),
      (Kt[la++] = t),
      (Kt[la++] = l),
      (Kt[la++] = i),
      (To |= i),
      (e.lanes |= i),
      (e = e.alternate),
      e !== null && (e.lanes |= i);
  }
  function Ao(e, t, l, i) {
    return Er(e, t, l, i), wr(e);
  }
  function Tl(e, t) {
    return Er(e, null, null, t), wr(e);
  }
  function Ah(e, t, l) {
    e.lanes |= l;
    var i = e.alternate;
    i !== null && (i.lanes |= l);
    for (var s = !1, f = e.return; f !== null; )
      (f.childLanes |= l),
        (i = f.alternate),
        i !== null && (i.childLanes |= l),
        f.tag === 22 &&
          ((e = f.stateNode), e === null || e._visibility & 1 || (s = !0)),
        (e = f),
        (f = f.return);
    return e.tag === 3
      ? ((f = e.stateNode),
        s &&
          t !== null &&
          ((s = 31 - Ve(l)),
          (e = f.hiddenUpdates),
          (i = e[s]),
          i === null ? (e[s] = [t]) : i.push(t),
          (t.lane = l | 536870912)),
        f)
      : null;
  }
  function wr(e) {
    if (50 < wi) throw ((wi = 0), (ks = null), Error(u(185)));
    for (var t = e.return; t !== null; ) (e = t), (t = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var aa = {};
  function p1(e, t, l, i) {
    (this.tag = e),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = i),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Ut(e, t, l, i) {
    return new p1(e, t, l, i);
  }
  function Co(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function zn(e, t) {
    var l = e.alternate;
    return (
      l === null
        ? ((l = Ut(e.tag, t, e.key, e.mode)),
          (l.elementType = e.elementType),
          (l.type = e.type),
          (l.stateNode = e.stateNode),
          (l.alternate = e),
          (e.alternate = l))
        : ((l.pendingProps = t),
          (l.type = e.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = e.flags & 65011712),
      (l.childLanes = e.childLanes),
      (l.lanes = e.lanes),
      (l.child = e.child),
      (l.memoizedProps = e.memoizedProps),
      (l.memoizedState = e.memoizedState),
      (l.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (l.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (l.sibling = e.sibling),
      (l.index = e.index),
      (l.ref = e.ref),
      (l.refCleanup = e.refCleanup),
      l
    );
  }
  function Ch(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return (
      l === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = l.childLanes),
          (e.lanes = l.lanes),
          (e.child = l.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = l.memoizedProps),
          (e.memoizedState = l.memoizedState),
          (e.updateQueue = l.updateQueue),
          (e.type = l.type),
          (t = l.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function Tr(e, t, l, i, s, f) {
    var g = 0;
    if (((i = e), typeof e == "function")) Co(e) && (g = 1);
    else if (typeof e == "string")
      g = xb(e, l, W.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
        ? 27
        : 5;
    else
      e: switch (e) {
        case ce:
          return (e = Ut(31, l, t, s)), (e.elementType = ce), (e.lanes = f), e;
        case O:
          return Al(l.children, s, f, t);
        case N:
          (g = 8), (s |= 24);
          break;
        case _:
          return (
            (e = Ut(12, l, t, s | 2)), (e.elementType = _), (e.lanes = f), e
          );
        case ae:
          return (e = Ut(13, l, t, s)), (e.elementType = ae), (e.lanes = f), e;
        case Y:
          return (e = Ut(19, l, t, s)), (e.elementType = Y), (e.lanes = f), e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case k:
                g = 10;
                break e;
              case Z:
                g = 9;
                break e;
              case ee:
                g = 11;
                break e;
              case I:
                g = 14;
                break e;
              case de:
                (g = 16), (i = null);
                break e;
            }
          (g = 29),
            (l = Error(u(130, e === null ? "null" : typeof e, ""))),
            (i = null);
      }
    return (
      (t = Ut(g, l, t, s)), (t.elementType = e), (t.type = i), (t.lanes = f), t
    );
  }
  function Al(e, t, l, i) {
    return (e = Ut(7, e, i, t)), (e.lanes = l), e;
  }
  function zo(e, t, l) {
    return (e = Ut(6, e, null, t)), (e.lanes = l), e;
  }
  function zh(e) {
    var t = Ut(18, null, null, 0);
    return (t.stateNode = e), t;
  }
  function Oo(e, t, l) {
    return (
      (t = Ut(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = l),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var Oh = new WeakMap();
  function Jt(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = Oh.get(e);
      return l !== void 0
        ? l
        : ((t = { value: e, source: t, stack: ir(t) }), Oh.set(e, t), t);
    }
    return { value: e, source: t, stack: ir(t) };
  }
  var ia = [],
    ra = 0,
    Ar = null,
    ni = 0,
    It = [],
    $t = 0,
    Kn = null,
    fn = 1,
    hn = "";
  function On(e, t) {
    (ia[ra++] = ni), (ia[ra++] = Ar), (Ar = e), (ni = t);
  }
  function Rh(e, t, l) {
    (It[$t++] = fn), (It[$t++] = hn), (It[$t++] = Kn), (Kn = e);
    var i = fn;
    e = hn;
    var s = 32 - Ve(i) - 1;
    (i &= ~(1 << s)), (l += 1);
    var f = 32 - Ve(t) + s;
    if (30 < f) {
      var g = s - (s % 5);
      (f = (i & ((1 << g) - 1)).toString(32)),
        (i >>= g),
        (s -= g),
        (fn = (1 << (32 - Ve(t) + s)) | (l << s) | i),
        (hn = f + e);
    } else (fn = (1 << f) | (l << s) | i), (hn = e);
  }
  function Ro(e) {
    e.return !== null && (On(e, 1), Rh(e, 1, 0));
  }
  function No(e) {
    for (; e === Ar; )
      (Ar = ia[--ra]), (ia[ra] = null), (ni = ia[--ra]), (ia[ra] = null);
    for (; e === Kn; )
      (Kn = It[--$t]),
        (It[$t] = null),
        (hn = It[--$t]),
        (It[$t] = null),
        (fn = It[--$t]),
        (It[$t] = null);
  }
  function Nh(e, t) {
    (It[$t++] = fn),
      (It[$t++] = hn),
      (It[$t++] = Kn),
      (fn = t.id),
      (hn = t.overflow),
      (Kn = e);
  }
  var ht = null,
    Ze = null,
    Ne = !1,
    Jn = null,
    Pt = !1,
    _o = Error(u(519));
  function In(e) {
    var t = Error(
      u(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        ""
      )
    );
    throw (li(Jt(t, e)), _o);
  }
  function _h(e) {
    var t = e.stateNode,
      l = e.type,
      i = e.memoizedProps;
    switch (((t[ft] = e), (t[wt] = i), l)) {
      case "dialog":
        Ce("cancel", t), Ce("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ce("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Ai.length; l++) Ce(Ai[l], t);
        break;
      case "source":
        Ce("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Ce("error", t), Ce("load", t);
        break;
      case "details":
        Ce("toggle", t);
        break;
      case "input":
        Ce("invalid", t),
          Gf(
            t,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0
          );
        break;
      case "select":
        Ce("invalid", t);
        break;
      case "textarea":
        Ce("invalid", t), Zf(t, i.value, i.defaultValue, i.children);
    }
    (l = i.children),
      (typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
      t.textContent === "" + l ||
      i.suppressHydrationWarning === !0 ||
      Km(t.textContent, l)
        ? (i.popover != null && (Ce("beforetoggle", t), Ce("toggle", t)),
          i.onScroll != null && Ce("scroll", t),
          i.onScrollEnd != null && Ce("scrollend", t),
          i.onClick != null && (t.onclick = An),
          (t = !0))
        : (t = !1),
      t || In(e, !0);
  }
  function Dh(e) {
    for (ht = e.return; ht; )
      switch (ht.tag) {
        case 5:
        case 31:
        case 13:
          Pt = !1;
          return;
        case 27:
        case 3:
          Pt = !0;
          return;
        default:
          ht = ht.return;
      }
  }
  function ua(e) {
    if (e !== ht) return !1;
    if (!Ne) return Dh(e), (Ne = !0), !1;
    var t = e.tag,
      l;
    if (
      ((l = t !== 3 && t !== 27) &&
        ((l = t === 5) &&
          ((l = e.type),
          (l =
            !(l !== "form" && l !== "button") || Js(e.type, e.memoizedProps))),
        (l = !l)),
      l && Ze && In(e),
      Dh(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(u(317));
      Ze = lp(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(u(317));
      Ze = lp(e);
    } else
      t === 27
        ? ((t = Ze), cl(e.type) ? ((e = ec), (ec = null), (Ze = e)) : (Ze = t))
        : (Ze = ht ? en(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Cl() {
    (Ze = ht = null), (Ne = !1);
  }
  function Do() {
    var e = Jn;
    return (
      e !== null &&
        (Ot === null ? (Ot = e) : Ot.push.apply(Ot, e), (Jn = null)),
      e
    );
  }
  function li(e) {
    Jn === null ? (Jn = [e]) : Jn.push(e);
  }
  var Mo = C(null),
    zl = null,
    Rn = null;
  function $n(e, t, l) {
    E(Mo, t._currentValue), (t._currentValue = l);
  }
  function Nn(e) {
    (e._currentValue = Mo.current), V(Mo);
  }
  function ko(e, t, l) {
    for (; e !== null; ) {
      var i = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), i !== null && (i.childLanes |= t))
          : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t),
        e === l)
      )
        break;
      e = e.return;
    }
  }
  function jo(e, t, l, i) {
    var s = e.child;
    for (s !== null && (s.return = e); s !== null; ) {
      var f = s.dependencies;
      if (f !== null) {
        var g = s.child;
        f = f.firstContext;
        e: for (; f !== null; ) {
          var x = f;
          f = s;
          for (var A = 0; A < t.length; A++)
            if (x.context === t[A]) {
              (f.lanes |= l),
                (x = f.alternate),
                x !== null && (x.lanes |= l),
                ko(f.return, l, e),
                i || (g = null);
              break e;
            }
          f = x.next;
        }
      } else if (s.tag === 18) {
        if (((g = s.return), g === null)) throw Error(u(341));
        (g.lanes |= l),
          (f = g.alternate),
          f !== null && (f.lanes |= l),
          ko(g, l, e),
          (g = null);
      } else g = s.child;
      if (g !== null) g.return = s;
      else
        for (g = s; g !== null; ) {
          if (g === e) {
            g = null;
            break;
          }
          if (((s = g.sibling), s !== null)) {
            (s.return = g.return), (g = s);
            break;
          }
          g = g.return;
        }
      s = g;
    }
  }
  function oa(e, t, l, i) {
    e = null;
    for (var s = t, f = !1; s !== null; ) {
      if (!f) {
        if ((s.flags & 524288) !== 0) f = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var g = s.alternate;
        if (g === null) throw Error(u(387));
        if (((g = g.memoizedProps), g !== null)) {
          var x = s.type;
          Lt(s.pendingProps.value, g.value) ||
            (e !== null ? e.push(x) : (e = [x]));
        }
      } else if (s === ze.current) {
        if (((g = s.alternate), g === null)) throw Error(u(387));
        g.memoizedState.memoizedState !== s.memoizedState.memoizedState &&
          (e !== null ? e.push(Ni) : (e = [Ni]));
      }
      s = s.return;
    }
    e !== null && jo(t, e, l, i), (t.flags |= 262144);
  }
  function Cr(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Lt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Ol(e) {
    (zl = e),
      (Rn = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null);
  }
  function dt(e) {
    return Mh(zl, e);
  }
  function zr(e, t) {
    return zl === null && Ol(e), Mh(e, t);
  }
  function Mh(e, t) {
    var l = t._currentValue;
    if (((t = { context: t, memoizedValue: l, next: null }), Rn === null)) {
      if (e === null) throw Error(u(308));
      (Rn = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288);
    } else Rn = Rn.next = t;
    return l;
  }
  var y1 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (l, i) {
                  e.push(i);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                e.forEach(function (l) {
                  return l();
                });
            };
          },
    g1 = n.unstable_scheduleCallback,
    b1 = n.unstable_NormalPriority,
    nt = {
      $$typeof: k,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Lo() {
    return { controller: new y1(), data: new Map(), refCount: 0 };
  }
  function ai(e) {
    e.refCount--,
      e.refCount === 0 &&
        g1(b1, function () {
          e.controller.abort();
        });
  }
  var ii = null,
    Uo = 0,
    sa = 0,
    ca = null;
  function v1(e, t) {
    if (ii === null) {
      var l = (ii = []);
      (Uo = 0),
        (sa = qs()),
        (ca = {
          status: "pending",
          value: void 0,
          then: function (i) {
            l.push(i);
          },
        });
    }
    return Uo++, t.then(kh, kh), t;
  }
  function kh() {
    if (--Uo === 0 && ii !== null) {
      ca !== null && (ca.status = "fulfilled");
      var e = ii;
      (ii = null), (sa = 0), (ca = null);
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function x1(e, t) {
    var l = [],
      i = {
        status: "pending",
        value: null,
        reason: null,
        then: function (s) {
          l.push(s);
        },
      };
    return (
      e.then(
        function () {
          (i.status = "fulfilled"), (i.value = t);
          for (var s = 0; s < l.length; s++) (0, l[s])(t);
        },
        function (s) {
          for (i.status = "rejected", i.reason = s, s = 0; s < l.length; s++)
            (0, l[s])(void 0);
        }
      ),
      i
    );
  }
  var jh = M.S;
  M.S = function (e, t) {
    (bm = vt()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        v1(e, t),
      jh !== null && jh(e, t);
  };
  var Rl = C(null);
  function Bo() {
    var e = Rl.current;
    return e !== null ? e : Xe.pooledCache;
  }
  function Or(e, t) {
    t === null ? E(Rl, Rl.current) : E(Rl, t.pool);
  }
  function Lh() {
    var e = Bo();
    return e === null ? null : { parent: nt._currentValue, pool: e };
  }
  var fa = Error(u(460)),
    Ho = Error(u(474)),
    Rr = Error(u(542)),
    Nr = { then: function () {} };
  function Uh(e) {
    return (e = e.status), e === "fulfilled" || e === "rejected";
  }
  function Bh(e, t, l) {
    switch (
      ((l = e[l]),
      l === void 0 ? e.push(t) : l !== t && (t.then(An, An), (t = l)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), qh(e), e);
      default:
        if (typeof t.status == "string") t.then(An, An);
        else {
          if (((e = Xe), e !== null && 100 < e.shellSuspendCounter))
            throw Error(u(482));
          (e = t),
            (e.status = "pending"),
            e.then(
              function (i) {
                if (t.status === "pending") {
                  var s = t;
                  (s.status = "fulfilled"), (s.value = i);
                }
              },
              function (i) {
                if (t.status === "pending") {
                  var s = t;
                  (s.status = "rejected"), (s.reason = i);
                }
              }
            );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), qh(e), e);
        }
        throw ((_l = t), fa);
    }
  }
  function Nl(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function"
        ? ((_l = l), fa)
        : l;
    }
  }
  var _l = null;
  function Hh() {
    if (_l === null) throw Error(u(459));
    var e = _l;
    return (_l = null), e;
  }
  function qh(e) {
    if (e === fa || e === Rr) throw Error(u(483));
  }
  var ha = null,
    ri = 0;
  function _r(e) {
    var t = ri;
    return (ri += 1), ha === null && (ha = []), Bh(ha, e, t);
  }
  function ui(e, t) {
    (t = t.props.ref), (e.ref = t !== void 0 ? t : null);
  }
  function Dr(e, t) {
    throw t.$$typeof === S
      ? Error(u(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          u(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e
          )
        ));
  }
  function Yh(e) {
    function t(D, z) {
      if (e) {
        var j = D.deletions;
        j === null ? ((D.deletions = [z]), (D.flags |= 16)) : j.push(z);
      }
    }
    function l(D, z) {
      if (!e) return null;
      for (; z !== null; ) t(D, z), (z = z.sibling);
      return null;
    }
    function i(D) {
      for (var z = new Map(); D !== null; )
        D.key !== null ? z.set(D.key, D) : z.set(D.index, D), (D = D.sibling);
      return z;
    }
    function s(D, z) {
      return (D = zn(D, z)), (D.index = 0), (D.sibling = null), D;
    }
    function f(D, z, j) {
      return (
        (D.index = j),
        e
          ? ((j = D.alternate),
            j !== null
              ? ((j = j.index), j < z ? ((D.flags |= 67108866), z) : j)
              : ((D.flags |= 67108866), z))
          : ((D.flags |= 1048576), z)
      );
    }
    function g(D) {
      return e && D.alternate === null && (D.flags |= 67108866), D;
    }
    function x(D, z, j, Q) {
      return z === null || z.tag !== 6
        ? ((z = zo(j, D.mode, Q)), (z.return = D), z)
        : ((z = s(z, j)), (z.return = D), z);
    }
    function A(D, z, j, Q) {
      var se = j.type;
      return se === O
        ? X(D, z, j.props.children, Q, j.key)
        : z !== null &&
          (z.elementType === se ||
            (typeof se == "object" &&
              se !== null &&
              se.$$typeof === de &&
              Nl(se) === z.type))
        ? ((z = s(z, j.props)), ui(z, j), (z.return = D), z)
        : ((z = Tr(j.type, j.key, j.props, null, D.mode, Q)),
          ui(z, j),
          (z.return = D),
          z);
    }
    function L(D, z, j, Q) {
      return z === null ||
        z.tag !== 4 ||
        z.stateNode.containerInfo !== j.containerInfo ||
        z.stateNode.implementation !== j.implementation
        ? ((z = Oo(j, D.mode, Q)), (z.return = D), z)
        : ((z = s(z, j.children || [])), (z.return = D), z);
    }
    function X(D, z, j, Q, se) {
      return z === null || z.tag !== 7
        ? ((z = Al(j, D.mode, Q, se)), (z.return = D), z)
        : ((z = s(z, j)), (z.return = D), z);
    }
    function F(D, z, j) {
      if (
        (typeof z == "string" && z !== "") ||
        typeof z == "number" ||
        typeof z == "bigint"
      )
        return (z = zo("" + z, D.mode, j)), (z.return = D), z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case v:
            return (
              (j = Tr(z.type, z.key, z.props, null, D.mode, j)),
              ui(j, z),
              (j.return = D),
              j
            );
          case T:
            return (z = Oo(z, D.mode, j)), (z.return = D), z;
          case de:
            return (z = Nl(z)), F(D, z, j);
        }
        if ($(z) || te(z))
          return (z = Al(z, D.mode, j, null)), (z.return = D), z;
        if (typeof z.then == "function") return F(D, _r(z), j);
        if (z.$$typeof === k) return F(D, zr(D, z), j);
        Dr(D, z);
      }
      return null;
    }
    function U(D, z, j, Q) {
      var se = z !== null ? z.key : null;
      if (
        (typeof j == "string" && j !== "") ||
        typeof j == "number" ||
        typeof j == "bigint"
      )
        return se !== null ? null : x(D, z, "" + j, Q);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case v:
            return j.key === se ? A(D, z, j, Q) : null;
          case T:
            return j.key === se ? L(D, z, j, Q) : null;
          case de:
            return (j = Nl(j)), U(D, z, j, Q);
        }
        if ($(j) || te(j)) return se !== null ? null : X(D, z, j, Q, null);
        if (typeof j.then == "function") return U(D, z, _r(j), Q);
        if (j.$$typeof === k) return U(D, z, zr(D, j), Q);
        Dr(D, j);
      }
      return null;
    }
    function H(D, z, j, Q, se) {
      if (
        (typeof Q == "string" && Q !== "") ||
        typeof Q == "number" ||
        typeof Q == "bigint"
      )
        return (D = D.get(j) || null), x(z, D, "" + Q, se);
      if (typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case v:
            return (
              (D = D.get(Q.key === null ? j : Q.key) || null), A(z, D, Q, se)
            );
          case T:
            return (
              (D = D.get(Q.key === null ? j : Q.key) || null), L(z, D, Q, se)
            );
          case de:
            return (Q = Nl(Q)), H(D, z, j, Q, se);
        }
        if ($(Q) || te(Q)) return (D = D.get(j) || null), X(z, D, Q, se, null);
        if (typeof Q.then == "function") return H(D, z, j, _r(Q), se);
        if (Q.$$typeof === k) return H(D, z, j, zr(z, Q), se);
        Dr(z, Q);
      }
      return null;
    }
    function re(D, z, j, Q) {
      for (
        var se = null, _e = null, ue = z, Se = (z = 0), Re = null;
        ue !== null && Se < j.length;
        Se++
      ) {
        ue.index > Se ? ((Re = ue), (ue = null)) : (Re = ue.sibling);
        var De = U(D, ue, j[Se], Q);
        if (De === null) {
          ue === null && (ue = Re);
          break;
        }
        e && ue && De.alternate === null && t(D, ue),
          (z = f(De, z, Se)),
          _e === null ? (se = De) : (_e.sibling = De),
          (_e = De),
          (ue = Re);
      }
      if (Se === j.length) return l(D, ue), Ne && On(D, Se), se;
      if (ue === null) {
        for (; Se < j.length; Se++)
          (ue = F(D, j[Se], Q)),
            ue !== null &&
              ((z = f(ue, z, Se)),
              _e === null ? (se = ue) : (_e.sibling = ue),
              (_e = ue));
        return Ne && On(D, Se), se;
      }
      for (ue = i(ue); Se < j.length; Se++)
        (Re = H(ue, D, Se, j[Se], Q)),
          Re !== null &&
            (e &&
              Re.alternate !== null &&
              ue.delete(Re.key === null ? Se : Re.key),
            (z = f(Re, z, Se)),
            _e === null ? (se = Re) : (_e.sibling = Re),
            (_e = Re));
      return (
        e &&
          ue.forEach(function (pl) {
            return t(D, pl);
          }),
        Ne && On(D, Se),
        se
      );
    }
    function he(D, z, j, Q) {
      if (j == null) throw Error(u(151));
      for (
        var se = null,
          _e = null,
          ue = z,
          Se = (z = 0),
          Re = null,
          De = j.next();
        ue !== null && !De.done;
        Se++, De = j.next()
      ) {
        ue.index > Se ? ((Re = ue), (ue = null)) : (Re = ue.sibling);
        var pl = U(D, ue, De.value, Q);
        if (pl === null) {
          ue === null && (ue = Re);
          break;
        }
        e && ue && pl.alternate === null && t(D, ue),
          (z = f(pl, z, Se)),
          _e === null ? (se = pl) : (_e.sibling = pl),
          (_e = pl),
          (ue = Re);
      }
      if (De.done) return l(D, ue), Ne && On(D, Se), se;
      if (ue === null) {
        for (; !De.done; Se++, De = j.next())
          (De = F(D, De.value, Q)),
            De !== null &&
              ((z = f(De, z, Se)),
              _e === null ? (se = De) : (_e.sibling = De),
              (_e = De));
        return Ne && On(D, Se), se;
      }
      for (ue = i(ue); !De.done; Se++, De = j.next())
        (De = H(ue, D, Se, De.value, Q)),
          De !== null &&
            (e &&
              De.alternate !== null &&
              ue.delete(De.key === null ? Se : De.key),
            (z = f(De, z, Se)),
            _e === null ? (se = De) : (_e.sibling = De),
            (_e = De));
      return (
        e &&
          ue.forEach(function (_b) {
            return t(D, _b);
          }),
        Ne && On(D, Se),
        se
      );
    }
    function Ye(D, z, j, Q) {
      if (
        (typeof j == "object" &&
          j !== null &&
          j.type === O &&
          j.key === null &&
          (j = j.props.children),
        typeof j == "object" && j !== null)
      ) {
        switch (j.$$typeof) {
          case v:
            e: {
              for (var se = j.key; z !== null; ) {
                if (z.key === se) {
                  if (((se = j.type), se === O)) {
                    if (z.tag === 7) {
                      l(D, z.sibling),
                        (Q = s(z, j.props.children)),
                        (Q.return = D),
                        (D = Q);
                      break e;
                    }
                  } else if (
                    z.elementType === se ||
                    (typeof se == "object" &&
                      se !== null &&
                      se.$$typeof === de &&
                      Nl(se) === z.type)
                  ) {
                    l(D, z.sibling),
                      (Q = s(z, j.props)),
                      ui(Q, j),
                      (Q.return = D),
                      (D = Q);
                    break e;
                  }
                  l(D, z);
                  break;
                } else t(D, z);
                z = z.sibling;
              }
              j.type === O
                ? ((Q = Al(j.props.children, D.mode, Q, j.key)),
                  (Q.return = D),
                  (D = Q))
                : ((Q = Tr(j.type, j.key, j.props, null, D.mode, Q)),
                  ui(Q, j),
                  (Q.return = D),
                  (D = Q));
            }
            return g(D);
          case T:
            e: {
              for (se = j.key; z !== null; ) {
                if (z.key === se)
                  if (
                    z.tag === 4 &&
                    z.stateNode.containerInfo === j.containerInfo &&
                    z.stateNode.implementation === j.implementation
                  ) {
                    l(D, z.sibling),
                      (Q = s(z, j.children || [])),
                      (Q.return = D),
                      (D = Q);
                    break e;
                  } else {
                    l(D, z);
                    break;
                  }
                else t(D, z);
                z = z.sibling;
              }
              (Q = Oo(j, D.mode, Q)), (Q.return = D), (D = Q);
            }
            return g(D);
          case de:
            return (j = Nl(j)), Ye(D, z, j, Q);
        }
        if ($(j)) return re(D, z, j, Q);
        if (te(j)) {
          if (((se = te(j)), typeof se != "function")) throw Error(u(150));
          return (j = se.call(j)), he(D, z, j, Q);
        }
        if (typeof j.then == "function") return Ye(D, z, _r(j), Q);
        if (j.$$typeof === k) return Ye(D, z, zr(D, j), Q);
        Dr(D, j);
      }
      return (typeof j == "string" && j !== "") ||
        typeof j == "number" ||
        typeof j == "bigint"
        ? ((j = "" + j),
          z !== null && z.tag === 6
            ? (l(D, z.sibling), (Q = s(z, j)), (Q.return = D), (D = Q))
            : (l(D, z), (Q = zo(j, D.mode, Q)), (Q.return = D), (D = Q)),
          g(D))
        : l(D, z);
    }
    return function (D, z, j, Q) {
      try {
        ri = 0;
        var se = Ye(D, z, j, Q);
        return (ha = null), se;
      } catch (ue) {
        if (ue === fa || ue === Rr) throw ue;
        var _e = Ut(29, ue, null, D.mode);
        return (_e.lanes = Q), (_e.return = D), _e;
      } finally {
      }
    };
  }
  var Dl = Yh(!0),
    Vh = Yh(!1),
    Pn = !1;
  function qo(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Yo(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        });
  }
  function Wn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function el(e, t, l) {
    var i = e.updateQueue;
    if (i === null) return null;
    if (((i = i.shared), (Me & 2) !== 0)) {
      var s = i.pending;
      return (
        s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
        (i.pending = t),
        (t = wr(e)),
        Ah(e, null, l),
        t
      );
    }
    return Er(e, i, t, l), wr(e);
  }
  function oi(e, t, l) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (l & 4194048) !== 0))
    ) {
      var i = t.lanes;
      (i &= e.pendingLanes), (l |= i), (t.lanes = l), Mf(e, l);
    }
  }
  function Vo(e, t) {
    var l = e.updateQueue,
      i = e.alternate;
    if (i !== null && ((i = i.updateQueue), l === i)) {
      var s = null,
        f = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var g = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          f === null ? (s = f = g) : (f = f.next = g), (l = l.next);
        } while (l !== null);
        f === null ? (s = f = t) : (f = f.next = t);
      } else s = f = t;
      (l = {
        baseState: i.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: f,
        shared: i.shared,
        callbacks: i.callbacks,
      }),
        (e.updateQueue = l);
      return;
    }
    (e = l.lastBaseUpdate),
      e === null ? (l.firstBaseUpdate = t) : (e.next = t),
      (l.lastBaseUpdate = t);
  }
  var Xo = !1;
  function si() {
    if (Xo) {
      var e = ca;
      if (e !== null) throw e;
    }
  }
  function ci(e, t, l, i) {
    Xo = !1;
    var s = e.updateQueue;
    Pn = !1;
    var f = s.firstBaseUpdate,
      g = s.lastBaseUpdate,
      x = s.shared.pending;
    if (x !== null) {
      s.shared.pending = null;
      var A = x,
        L = A.next;
      (A.next = null), g === null ? (f = L) : (g.next = L), (g = A);
      var X = e.alternate;
      X !== null &&
        ((X = X.updateQueue),
        (x = X.lastBaseUpdate),
        x !== g &&
          (x === null ? (X.firstBaseUpdate = L) : (x.next = L),
          (X.lastBaseUpdate = A)));
    }
    if (f !== null) {
      var F = s.baseState;
      (g = 0), (X = L = A = null), (x = f);
      do {
        var U = x.lane & -536870913,
          H = U !== x.lane;
        if (H ? (Oe & U) === U : (i & U) === U) {
          U !== 0 && U === sa && (Xo = !0),
            X !== null &&
              (X = X.next =
                {
                  lane: 0,
                  tag: x.tag,
                  payload: x.payload,
                  callback: null,
                  next: null,
                });
          e: {
            var re = e,
              he = x;
            U = t;
            var Ye = l;
            switch (he.tag) {
              case 1:
                if (((re = he.payload), typeof re == "function")) {
                  F = re.call(Ye, F, U);
                  break e;
                }
                F = re;
                break e;
              case 3:
                re.flags = (re.flags & -65537) | 128;
              case 0:
                if (
                  ((re = he.payload),
                  (U = typeof re == "function" ? re.call(Ye, F, U) : re),
                  U == null)
                )
                  break e;
                F = b({}, F, U);
                break e;
              case 2:
                Pn = !0;
            }
          }
          (U = x.callback),
            U !== null &&
              ((e.flags |= 64),
              H && (e.flags |= 8192),
              (H = s.callbacks),
              H === null ? (s.callbacks = [U]) : H.push(U));
        } else
          (H = {
            lane: U,
            tag: x.tag,
            payload: x.payload,
            callback: x.callback,
            next: null,
          }),
            X === null ? ((L = X = H), (A = F)) : (X = X.next = H),
            (g |= U);
        if (((x = x.next), x === null)) {
          if (((x = s.shared.pending), x === null)) break;
          (H = x),
            (x = H.next),
            (H.next = null),
            (s.lastBaseUpdate = H),
            (s.shared.pending = null);
        }
      } while (!0);
      X === null && (A = F),
        (s.baseState = A),
        (s.firstBaseUpdate = L),
        (s.lastBaseUpdate = X),
        f === null && (s.shared.lanes = 0),
        (il |= g),
        (e.lanes = g),
        (e.memoizedState = F);
    }
  }
  function Xh(e, t) {
    if (typeof e != "function") throw Error(u(191, e));
    e.call(t);
  }
  function Gh(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++) Xh(l[e], t);
  }
  var da = C(null),
    Mr = C(0);
  function Qh(e, t) {
    (e = Hn), E(Mr, e), E(da, t), (Hn = e | t.baseLanes);
  }
  function Go() {
    E(Mr, Hn), E(da, da.current);
  }
  function Qo() {
    (Hn = Mr.current), V(da), V(Mr);
  }
  var Bt = C(null),
    Wt = null;
  function tl(e) {
    var t = e.alternate;
    E(We, We.current & 1),
      E(Bt, e),
      Wt === null &&
        (t === null || da.current !== null || t.memoizedState !== null) &&
        (Wt = e);
  }
  function Zo(e) {
    E(We, We.current), E(Bt, e), Wt === null && (Wt = e);
  }
  function Zh(e) {
    e.tag === 22
      ? (E(We, We.current), E(Bt, e), Wt === null && (Wt = e))
      : nl();
  }
  function nl() {
    E(We, We.current), E(Bt, Bt.current);
  }
  function Ht(e) {
    V(Bt), Wt === e && (Wt = null), V(We);
  }
  var We = C(0);
  function kr(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && ((l = l.dehydrated), l === null || Ps(l) || Ws(l)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var _n = 0,
    be = null,
    He = null,
    lt = null,
    jr = !1,
    ma = !1,
    Ml = !1,
    Lr = 0,
    fi = 0,
    pa = null,
    S1 = 0;
  function $e() {
    throw Error(u(321));
  }
  function Fo(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!Lt(e[l], t[l])) return !1;
    return !0;
  }
  function Ko(e, t, l, i, s, f) {
    return (
      (_n = f),
      (be = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (M.H = e === null || e.memoizedState === null ? Rd : ss),
      (Ml = !1),
      (f = l(i, s)),
      (Ml = !1),
      ma && (f = Kh(t, l, i, s)),
      Fh(e),
      f
    );
  }
  function Fh(e) {
    M.H = mi;
    var t = He !== null && He.next !== null;
    if (((_n = 0), (lt = He = be = null), (jr = !1), (fi = 0), (pa = null), t))
      throw Error(u(300));
    e === null ||
      at ||
      ((e = e.dependencies), e !== null && Cr(e) && (at = !0));
  }
  function Kh(e, t, l, i) {
    be = e;
    var s = 0;
    do {
      if ((ma && (pa = null), (fi = 0), (ma = !1), 25 <= s))
        throw Error(u(301));
      if (((s += 1), (lt = He = null), e.updateQueue != null)) {
        var f = e.updateQueue;
        (f.lastEffect = null),
          (f.events = null),
          (f.stores = null),
          f.memoCache != null && (f.memoCache.index = 0);
      }
      (M.H = Nd), (f = t(l, i));
    } while (ma);
    return f;
  }
  function E1() {
    var e = M.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? hi(t) : t),
      (e = e.useState()[0]),
      (He !== null ? He.memoizedState : null) !== e && (be.flags |= 1024),
      t
    );
  }
  function Jo() {
    var e = Lr !== 0;
    return (Lr = 0), e;
  }
  function Io(e, t, l) {
    (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l);
  }
  function $o(e) {
    if (jr) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), (e = e.next);
      }
      jr = !1;
    }
    (_n = 0), (lt = He = be = null), (ma = !1), (fi = Lr = 0), (pa = null);
  }
  function St() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return lt === null ? (be.memoizedState = lt = e) : (lt = lt.next = e), lt;
  }
  function et() {
    if (He === null) {
      var e = be.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = He.next;
    var t = lt === null ? be.memoizedState : lt.next;
    if (t !== null) (lt = t), (He = e);
    else {
      if (e === null)
        throw be.alternate === null ? Error(u(467)) : Error(u(310));
      (He = e),
        (e = {
          memoizedState: He.memoizedState,
          baseState: He.baseState,
          baseQueue: He.baseQueue,
          queue: He.queue,
          next: null,
        }),
        lt === null ? (be.memoizedState = lt = e) : (lt = lt.next = e);
    }
    return lt;
  }
  function Ur() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function hi(e) {
    var t = fi;
    return (
      (fi += 1),
      pa === null && (pa = []),
      (e = Bh(pa, e, t)),
      (t = be),
      (lt === null ? t.memoizedState : lt.next) === null &&
        ((t = t.alternate),
        (M.H = t === null || t.memoizedState === null ? Rd : ss)),
      e
    );
  }
  function Br(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return hi(e);
      if (e.$$typeof === k) return dt(e);
    }
    throw Error(u(438, String(e)));
  }
  function Po(e) {
    var t = null,
      l = be.updateQueue;
    if ((l !== null && (t = l.memoCache), t == null)) {
      var i = be.alternate;
      i !== null &&
        ((i = i.updateQueue),
        i !== null &&
          ((i = i.memoCache),
          i != null &&
            (t = {
              data: i.data.map(function (s) {
                return s.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      l === null && ((l = Ur()), (be.updateQueue = l)),
      (l.memoCache = t),
      (l = t.data[t.index]),
      l === void 0)
    )
      for (l = t.data[t.index] = Array(e), i = 0; i < e; i++) l[i] = me;
    return t.index++, l;
  }
  function Dn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Hr(e) {
    var t = et();
    return Wo(t, He, e);
  }
  function Wo(e, t, l) {
    var i = e.queue;
    if (i === null) throw Error(u(311));
    i.lastRenderedReducer = l;
    var s = e.baseQueue,
      f = i.pending;
    if (f !== null) {
      if (s !== null) {
        var g = s.next;
        (s.next = f.next), (f.next = g);
      }
      (t.baseQueue = s = f), (i.pending = null);
    }
    if (((f = e.baseState), s === null)) e.memoizedState = f;
    else {
      t = s.next;
      var x = (g = null),
        A = null,
        L = t,
        X = !1;
      do {
        var F = L.lane & -536870913;
        if (F !== L.lane ? (Oe & F) === F : (_n & F) === F) {
          var U = L.revertLane;
          if (U === 0)
            A !== null &&
              (A = A.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: L.action,
                  hasEagerState: L.hasEagerState,
                  eagerState: L.eagerState,
                  next: null,
                }),
              F === sa && (X = !0);
          else if ((_n & U) === U) {
            (L = L.next), U === sa && (X = !0);
            continue;
          } else
            (F = {
              lane: 0,
              revertLane: L.revertLane,
              gesture: null,
              action: L.action,
              hasEagerState: L.hasEagerState,
              eagerState: L.eagerState,
              next: null,
            }),
              A === null ? ((x = A = F), (g = f)) : (A = A.next = F),
              (be.lanes |= U),
              (il |= U);
          (F = L.action),
            Ml && l(f, F),
            (f = L.hasEagerState ? L.eagerState : l(f, F));
        } else
          (U = {
            lane: F,
            revertLane: L.revertLane,
            gesture: L.gesture,
            action: L.action,
            hasEagerState: L.hasEagerState,
            eagerState: L.eagerState,
            next: null,
          }),
            A === null ? ((x = A = U), (g = f)) : (A = A.next = U),
            (be.lanes |= F),
            (il |= F);
        L = L.next;
      } while (L !== null && L !== t);
      if (
        (A === null ? (g = f) : (A.next = x),
        !Lt(f, e.memoizedState) && ((at = !0), X && ((l = ca), l !== null)))
      )
        throw l;
      (e.memoizedState = f),
        (e.baseState = g),
        (e.baseQueue = A),
        (i.lastRenderedState = f);
    }
    return s === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
  }
  function es(e) {
    var t = et(),
      l = t.queue;
    if (l === null) throw Error(u(311));
    l.lastRenderedReducer = e;
    var i = l.dispatch,
      s = l.pending,
      f = t.memoizedState;
    if (s !== null) {
      l.pending = null;
      var g = (s = s.next);
      do (f = e(f, g.action)), (g = g.next);
      while (g !== s);
      Lt(f, t.memoizedState) || (at = !0),
        (t.memoizedState = f),
        t.baseQueue === null && (t.baseState = f),
        (l.lastRenderedState = f);
    }
    return [f, i];
  }
  function Jh(e, t, l) {
    var i = be,
      s = et(),
      f = Ne;
    if (f) {
      if (l === void 0) throw Error(u(407));
      l = l();
    } else l = t();
    var g = !Lt((He || s).memoizedState, l);
    if (
      (g && ((s.memoizedState = l), (at = !0)),
      (s = s.queue),
      ls(Ph.bind(null, i, s, e), [e]),
      s.getSnapshot !== t || g || (lt !== null && lt.memoizedState.tag & 1))
    ) {
      if (
        ((i.flags |= 2048),
        ya(9, { destroy: void 0 }, $h.bind(null, i, s, l, t), null),
        Xe === null)
      )
        throw Error(u(349));
      f || (_n & 127) !== 0 || Ih(i, t, l);
    }
    return l;
  }
  function Ih(e, t, l) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: l }),
      (t = be.updateQueue),
      t === null
        ? ((t = Ur()), (be.updateQueue = t), (t.stores = [e]))
        : ((l = t.stores), l === null ? (t.stores = [e]) : l.push(e));
  }
  function $h(e, t, l, i) {
    (t.value = l), (t.getSnapshot = i), Wh(t) && ed(e);
  }
  function Ph(e, t, l) {
    return l(function () {
      Wh(t) && ed(e);
    });
  }
  function Wh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !Lt(e, l);
    } catch {
      return !0;
    }
  }
  function ed(e) {
    var t = Tl(e, 2);
    t !== null && Rt(t, e, 2);
  }
  function ts(e) {
    var t = St();
    if (typeof e == "function") {
      var l = e;
      if (((e = l()), Ml)) {
        Et(!0);
        try {
          l();
        } finally {
          Et(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Dn,
        lastRenderedState: e,
      }),
      t
    );
  }
  function td(e, t, l, i) {
    return (e.baseState = l), Wo(e, He, typeof i == "function" ? i : Dn);
  }
  function w1(e, t, l, i, s) {
    if (Vr(e)) throw Error(u(485));
    if (((e = t.action), e !== null)) {
      var f = {
        payload: s,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (g) {
          f.listeners.push(g);
        },
      };
      M.T !== null ? l(!0) : (f.isTransition = !1),
        i(f),
        (l = t.pending),
        l === null
          ? ((f.next = t.pending = f), nd(t, f))
          : ((f.next = l.next), (t.pending = l.next = f));
    }
  }
  function nd(e, t) {
    var l = t.action,
      i = t.payload,
      s = e.state;
    if (t.isTransition) {
      var f = M.T,
        g = {};
      M.T = g;
      try {
        var x = l(s, i),
          A = M.S;
        A !== null && A(g, x), ld(e, t, x);
      } catch (L) {
        ns(e, t, L);
      } finally {
        f !== null && g.types !== null && (f.types = g.types), (M.T = f);
      }
    } else
      try {
        (f = l(s, i)), ld(e, t, f);
      } catch (L) {
        ns(e, t, L);
      }
  }
  function ld(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function"
      ? l.then(
          function (i) {
            ad(e, t, i);
          },
          function (i) {
            return ns(e, t, i);
          }
        )
      : ad(e, t, l);
  }
  function ad(e, t, l) {
    (t.status = "fulfilled"),
      (t.value = l),
      id(t),
      (e.state = l),
      (t = e.pending),
      t !== null &&
        ((l = t.next),
        l === t ? (e.pending = null) : ((l = l.next), (t.next = l), nd(e, l)));
  }
  function ns(e, t, l) {
    var i = e.pending;
    if (((e.pending = null), i !== null)) {
      i = i.next;
      do (t.status = "rejected"), (t.reason = l), id(t), (t = t.next);
      while (t !== i);
    }
    e.action = null;
  }
  function id(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function rd(e, t) {
    return t;
  }
  function ud(e, t) {
    if (Ne) {
      var l = Xe.formState;
      if (l !== null) {
        e: {
          var i = be;
          if (Ne) {
            if (Ze) {
              t: {
                for (var s = Ze, f = Pt; s.nodeType !== 8; ) {
                  if (!f) {
                    s = null;
                    break t;
                  }
                  if (((s = en(s.nextSibling)), s === null)) {
                    s = null;
                    break t;
                  }
                }
                (f = s.data), (s = f === "F!" || f === "F" ? s : null);
              }
              if (s) {
                (Ze = en(s.nextSibling)), (i = s.data === "F!");
                break e;
              }
            }
            In(i);
          }
          i = !1;
        }
        i && (t = l[0]);
      }
    }
    return (
      (l = St()),
      (l.memoizedState = l.baseState = t),
      (i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: rd,
        lastRenderedState: t,
      }),
      (l.queue = i),
      (l = Cd.bind(null, be, i)),
      (i.dispatch = l),
      (i = ts(!1)),
      (f = os.bind(null, be, !1, i.queue)),
      (i = St()),
      (s = { state: t, dispatch: null, action: e, pending: null }),
      (i.queue = s),
      (l = w1.bind(null, be, s, f, l)),
      (s.dispatch = l),
      (i.memoizedState = e),
      [t, l, !1]
    );
  }
  function od(e) {
    var t = et();
    return sd(t, He, e);
  }
  function sd(e, t, l) {
    if (
      ((t = Wo(e, t, rd)[0]),
      (e = Hr(Dn)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var i = hi(t);
      } catch (g) {
        throw g === fa ? Rr : g;
      }
    else i = t;
    t = et();
    var s = t.queue,
      f = s.dispatch;
    return (
      l !== t.memoizedState &&
        ((be.flags |= 2048),
        ya(9, { destroy: void 0 }, T1.bind(null, s, l), null)),
      [i, f, e]
    );
  }
  function T1(e, t) {
    e.action = t;
  }
  function cd(e) {
    var t = et(),
      l = He;
    if (l !== null) return sd(t, l, e);
    et(), (t = t.memoizedState), (l = et());
    var i = l.queue.dispatch;
    return (l.memoizedState = e), [t, i, !1];
  }
  function ya(e, t, l, i) {
    return (
      (e = { tag: e, create: l, deps: i, inst: t, next: null }),
      (t = be.updateQueue),
      t === null && ((t = Ur()), (be.updateQueue = t)),
      (l = t.lastEffect),
      l === null
        ? (t.lastEffect = e.next = e)
        : ((i = l.next), (l.next = e), (e.next = i), (t.lastEffect = e)),
      e
    );
  }
  function fd() {
    return et().memoizedState;
  }
  function qr(e, t, l, i) {
    var s = St();
    (be.flags |= e),
      (s.memoizedState = ya(
        1 | t,
        { destroy: void 0 },
        l,
        i === void 0 ? null : i
      ));
  }
  function Yr(e, t, l, i) {
    var s = et();
    i = i === void 0 ? null : i;
    var f = s.memoizedState.inst;
    He !== null && i !== null && Fo(i, He.memoizedState.deps)
      ? (s.memoizedState = ya(t, f, l, i))
      : ((be.flags |= e), (s.memoizedState = ya(1 | t, f, l, i)));
  }
  function hd(e, t) {
    qr(8390656, 8, e, t);
  }
  function ls(e, t) {
    Yr(2048, 8, e, t);
  }
  function A1(e) {
    be.flags |= 4;
    var t = be.updateQueue;
    if (t === null) (t = Ur()), (be.updateQueue = t), (t.events = [e]);
    else {
      var l = t.events;
      l === null ? (t.events = [e]) : l.push(e);
    }
  }
  function dd(e) {
    var t = et().memoizedState;
    return (
      A1({ ref: t, nextImpl: e }),
      function () {
        if ((Me & 2) !== 0) throw Error(u(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function md(e, t) {
    return Yr(4, 2, e, t);
  }
  function pd(e, t) {
    return Yr(4, 4, e, t);
  }
  function yd(e, t) {
    if (typeof t == "function") {
      e = e();
      var l = t(e);
      return function () {
        typeof l == "function" ? l() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function gd(e, t, l) {
    (l = l != null ? l.concat([e]) : null), Yr(4, 4, yd.bind(null, t, e), l);
  }
  function as() {}
  function bd(e, t) {
    var l = et();
    t = t === void 0 ? null : t;
    var i = l.memoizedState;
    return t !== null && Fo(t, i[1]) ? i[0] : ((l.memoizedState = [e, t]), e);
  }
  function vd(e, t) {
    var l = et();
    t = t === void 0 ? null : t;
    var i = l.memoizedState;
    if (t !== null && Fo(t, i[1])) return i[0];
    if (((i = e()), Ml)) {
      Et(!0);
      try {
        e();
      } finally {
        Et(!1);
      }
    }
    return (l.memoizedState = [i, t]), i;
  }
  function is(e, t, l) {
    return l === void 0 || ((_n & 1073741824) !== 0 && (Oe & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = l), (e = xm()), (be.lanes |= e), (il |= e), l);
  }
  function xd(e, t, l, i) {
    return Lt(l, t)
      ? l
      : da.current !== null
      ? ((e = is(e, l, i)), Lt(e, t) || (at = !0), e)
      : (_n & 42) === 0 || ((_n & 1073741824) !== 0 && (Oe & 261930) === 0)
      ? ((at = !0), (e.memoizedState = l))
      : ((e = xm()), (be.lanes |= e), (il |= e), t);
  }
  function Sd(e, t, l, i, s) {
    var f = K.p;
    K.p = f !== 0 && 8 > f ? f : 8;
    var g = M.T,
      x = {};
    (M.T = x), os(e, !1, t, l);
    try {
      var A = s(),
        L = M.S;
      if (
        (L !== null && L(x, A),
        A !== null && typeof A == "object" && typeof A.then == "function")
      ) {
        var X = x1(A, i);
        di(e, t, X, Vt(e));
      } else di(e, t, i, Vt(e));
    } catch (F) {
      di(e, t, { then: function () {}, status: "rejected", reason: F }, Vt());
    } finally {
      (K.p = f),
        g !== null && x.types !== null && (g.types = x.types),
        (M.T = g);
    }
  }
  function C1() {}
  function rs(e, t, l, i) {
    if (e.tag !== 5) throw Error(u(476));
    var s = Ed(e).queue;
    Sd(
      e,
      s,
      t,
      le,
      l === null
        ? C1
        : function () {
            return wd(e), l(i);
          }
    );
  }
  function Ed(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: le,
      baseState: le,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Dn,
        lastRenderedState: le,
      },
      next: null,
    };
    var l = {};
    return (
      (t.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Dn,
          lastRenderedState: l,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function wd(e) {
    var t = Ed(e);
    t.next === null && (t = e.alternate.memoizedState),
      di(e, t.next.queue, {}, Vt());
  }
  function us() {
    return dt(Ni);
  }
  function Td() {
    return et().memoizedState;
  }
  function Ad() {
    return et().memoizedState;
  }
  function z1(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = Vt();
          e = Wn(l);
          var i = el(t, e, l);
          i !== null && (Rt(i, t, l), oi(i, t, l)),
            (t = { cache: Lo() }),
            (e.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function O1(e, t, l) {
    var i = Vt();
    (l = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Vr(e)
        ? zd(t, l)
        : ((l = Ao(e, t, l, i)), l !== null && (Rt(l, e, i), Od(l, t, i)));
  }
  function Cd(e, t, l) {
    var i = Vt();
    di(e, t, l, i);
  }
  function di(e, t, l, i) {
    var s = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Vr(e)) zd(t, s);
    else {
      var f = e.alternate;
      if (
        e.lanes === 0 &&
        (f === null || f.lanes === 0) &&
        ((f = t.lastRenderedReducer), f !== null)
      )
        try {
          var g = t.lastRenderedState,
            x = f(g, l);
          if (((s.hasEagerState = !0), (s.eagerState = x), Lt(x, g)))
            return Er(e, t, s, 0), Xe === null && Sr(), !1;
        } catch {
        } finally {
        }
      if (((l = Ao(e, t, s, i)), l !== null))
        return Rt(l, e, i), Od(l, t, i), !0;
    }
    return !1;
  }
  function os(e, t, l, i) {
    if (
      ((i = {
        lane: 2,
        revertLane: qs(),
        gesture: null,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Vr(e))
    ) {
      if (t) throw Error(u(479));
    } else (t = Ao(e, l, i, 2)), t !== null && Rt(t, e, 2);
  }
  function Vr(e) {
    var t = e.alternate;
    return e === be || (t !== null && t === be);
  }
  function zd(e, t) {
    ma = jr = !0;
    var l = e.pending;
    l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (e.pending = t);
  }
  function Od(e, t, l) {
    if ((l & 4194048) !== 0) {
      var i = t.lanes;
      (i &= e.pendingLanes), (l |= i), (t.lanes = l), Mf(e, l);
    }
  }
  var mi = {
    readContext: dt,
    use: Br,
    useCallback: $e,
    useContext: $e,
    useEffect: $e,
    useImperativeHandle: $e,
    useLayoutEffect: $e,
    useInsertionEffect: $e,
    useMemo: $e,
    useReducer: $e,
    useRef: $e,
    useState: $e,
    useDebugValue: $e,
    useDeferredValue: $e,
    useTransition: $e,
    useSyncExternalStore: $e,
    useId: $e,
    useHostTransitionStatus: $e,
    useFormState: $e,
    useActionState: $e,
    useOptimistic: $e,
    useMemoCache: $e,
    useCacheRefresh: $e,
  };
  mi.useEffectEvent = $e;
  var Rd = {
      readContext: dt,
      use: Br,
      useCallback: function (e, t) {
        return (St().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: dt,
      useEffect: hd,
      useImperativeHandle: function (e, t, l) {
        (l = l != null ? l.concat([e]) : null),
          qr(4194308, 4, yd.bind(null, t, e), l);
      },
      useLayoutEffect: function (e, t) {
        return qr(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        qr(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var l = St();
        t = t === void 0 ? null : t;
        var i = e();
        if (Ml) {
          Et(!0);
          try {
            e();
          } finally {
            Et(!1);
          }
        }
        return (l.memoizedState = [i, t]), i;
      },
      useReducer: function (e, t, l) {
        var i = St();
        if (l !== void 0) {
          var s = l(t);
          if (Ml) {
            Et(!0);
            try {
              l(t);
            } finally {
              Et(!1);
            }
          }
        } else s = t;
        return (
          (i.memoizedState = i.baseState = s),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: s,
          }),
          (i.queue = e),
          (e = e.dispatch = O1.bind(null, be, e)),
          [i.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = St();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: function (e) {
        e = ts(e);
        var t = e.queue,
          l = Cd.bind(null, be, t);
        return (t.dispatch = l), [e.memoizedState, l];
      },
      useDebugValue: as,
      useDeferredValue: function (e, t) {
        var l = St();
        return is(l, e, t);
      },
      useTransition: function () {
        var e = ts(!1);
        return (
          (e = Sd.bind(null, be, e.queue, !0, !1)),
          (St().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, l) {
        var i = be,
          s = St();
        if (Ne) {
          if (l === void 0) throw Error(u(407));
          l = l();
        } else {
          if (((l = t()), Xe === null)) throw Error(u(349));
          (Oe & 127) !== 0 || Ih(i, t, l);
        }
        s.memoizedState = l;
        var f = { value: l, getSnapshot: t };
        return (
          (s.queue = f),
          hd(Ph.bind(null, i, f, e), [e]),
          (i.flags |= 2048),
          ya(9, { destroy: void 0 }, $h.bind(null, i, f, l, t), null),
          l
        );
      },
      useId: function () {
        var e = St(),
          t = Xe.identifierPrefix;
        if (Ne) {
          var l = hn,
            i = fn;
          (l = (i & ~(1 << (32 - Ve(i) - 1))).toString(32) + l),
            (t = "_" + t + "R_" + l),
            (l = Lr++),
            0 < l && (t += "H" + l.toString(32)),
            (t += "_");
        } else (l = S1++), (t = "_" + t + "r_" + l.toString(32) + "_");
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: us,
      useFormState: ud,
      useActionState: ud,
      useOptimistic: function (e) {
        var t = St();
        t.memoizedState = t.baseState = e;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = l),
          (t = os.bind(null, be, !0, l)),
          (l.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: Po,
      useCacheRefresh: function () {
        return (St().memoizedState = z1.bind(null, be));
      },
      useEffectEvent: function (e) {
        var t = St(),
          l = { impl: e };
        return (
          (t.memoizedState = l),
          function () {
            if ((Me & 2) !== 0) throw Error(u(440));
            return l.impl.apply(void 0, arguments);
          }
        );
      },
    },
    ss = {
      readContext: dt,
      use: Br,
      useCallback: bd,
      useContext: dt,
      useEffect: ls,
      useImperativeHandle: gd,
      useInsertionEffect: md,
      useLayoutEffect: pd,
      useMemo: vd,
      useReducer: Hr,
      useRef: fd,
      useState: function () {
        return Hr(Dn);
      },
      useDebugValue: as,
      useDeferredValue: function (e, t) {
        var l = et();
        return xd(l, He.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Hr(Dn)[0],
          t = et().memoizedState;
        return [typeof e == "boolean" ? e : hi(e), t];
      },
      useSyncExternalStore: Jh,
      useId: Td,
      useHostTransitionStatus: us,
      useFormState: od,
      useActionState: od,
      useOptimistic: function (e, t) {
        var l = et();
        return td(l, He, e, t);
      },
      useMemoCache: Po,
      useCacheRefresh: Ad,
    };
  ss.useEffectEvent = dd;
  var Nd = {
    readContext: dt,
    use: Br,
    useCallback: bd,
    useContext: dt,
    useEffect: ls,
    useImperativeHandle: gd,
    useInsertionEffect: md,
    useLayoutEffect: pd,
    useMemo: vd,
    useReducer: es,
    useRef: fd,
    useState: function () {
      return es(Dn);
    },
    useDebugValue: as,
    useDeferredValue: function (e, t) {
      var l = et();
      return He === null ? is(l, e, t) : xd(l, He.memoizedState, e, t);
    },
    useTransition: function () {
      var e = es(Dn)[0],
        t = et().memoizedState;
      return [typeof e == "boolean" ? e : hi(e), t];
    },
    useSyncExternalStore: Jh,
    useId: Td,
    useHostTransitionStatus: us,
    useFormState: cd,
    useActionState: cd,
    useOptimistic: function (e, t) {
      var l = et();
      return He !== null
        ? td(l, He, e, t)
        : ((l.baseState = e), [e, l.queue.dispatch]);
    },
    useMemoCache: Po,
    useCacheRefresh: Ad,
  };
  Nd.useEffectEvent = dd;
  function cs(e, t, l, i) {
    (t = e.memoizedState),
      (l = l(i, t)),
      (l = l == null ? t : b({}, t, l)),
      (e.memoizedState = l),
      e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var fs = {
    enqueueSetState: function (e, t, l) {
      e = e._reactInternals;
      var i = Vt(),
        s = Wn(i);
      (s.payload = t),
        l != null && (s.callback = l),
        (t = el(e, s, i)),
        t !== null && (Rt(t, e, i), oi(t, e, i));
    },
    enqueueReplaceState: function (e, t, l) {
      e = e._reactInternals;
      var i = Vt(),
        s = Wn(i);
      (s.tag = 1),
        (s.payload = t),
        l != null && (s.callback = l),
        (t = el(e, s, i)),
        t !== null && (Rt(t, e, i), oi(t, e, i));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var l = Vt(),
        i = Wn(l);
      (i.tag = 2),
        t != null && (i.callback = t),
        (t = el(e, i, l)),
        t !== null && (Rt(t, e, l), oi(t, e, l));
    },
  };
  function _d(e, t, l, i, s, f, g) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(i, f, g)
        : t.prototype && t.prototype.isPureReactComponent
        ? !ei(l, i) || !ei(s, f)
        : !0
    );
  }
  function Dd(e, t, l, i) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(l, i),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(l, i),
      t.state !== e && fs.enqueueReplaceState(t, t.state, null);
  }
  function kl(e, t) {
    var l = t;
    if ("ref" in t) {
      l = {};
      for (var i in t) i !== "ref" && (l[i] = t[i]);
    }
    if ((e = e.defaultProps)) {
      l === t && (l = b({}, l));
      for (var s in e) l[s] === void 0 && (l[s] = e[s]);
    }
    return l;
  }
  function Md(e) {
    xr(e);
  }
  function kd(e) {
    console.error(e);
  }
  function jd(e) {
    xr(e);
  }
  function Xr(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  function Ld(e, t, l) {
    try {
      var i = e.onCaughtError;
      i(l.value, {
        componentStack: l.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }
  function hs(e, t, l) {
    return (
      (l = Wn(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        Xr(e, t);
      }),
      l
    );
  }
  function Ud(e) {
    return (e = Wn(e)), (e.tag = 3), e;
  }
  function Bd(e, t, l, i) {
    var s = l.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var f = i.value;
      (e.payload = function () {
        return s(f);
      }),
        (e.callback = function () {
          Ld(t, l, i);
        });
    }
    var g = l.stateNode;
    g !== null &&
      typeof g.componentDidCatch == "function" &&
      (e.callback = function () {
        Ld(t, l, i),
          typeof s != "function" &&
            (rl === null ? (rl = new Set([this])) : rl.add(this));
        var x = i.stack;
        this.componentDidCatch(i.value, {
          componentStack: x !== null ? x : "",
        });
      });
  }
  function R1(e, t, l, i, s) {
    if (
      ((l.flags |= 32768),
      i !== null && typeof i == "object" && typeof i.then == "function")
    ) {
      if (
        ((t = l.alternate),
        t !== null && oa(t, l, s, !0),
        (l = Bt.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 31:
          case 13:
            return (
              Wt === null ? tu() : l.alternate === null && Pe === 0 && (Pe = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = s),
              i === Nr
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null ? (l.updateQueue = new Set([i])) : t.add(i),
                  Us(e, i, s)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              i === Nr
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([i]),
                      }),
                      (l.updateQueue = t))
                    : ((l = t.retryQueue),
                      l === null ? (t.retryQueue = new Set([i])) : l.add(i)),
                  Us(e, i, s)),
              !1
            );
        }
        throw Error(u(435, l.tag));
      }
      return Us(e, i, s), tu(), !1;
    }
    if (Ne)
      return (
        (t = Bt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = s),
            i !== _o && ((e = Error(u(422), { cause: i })), li(Jt(e, l))))
          : (i !== _o && ((t = Error(u(423), { cause: i })), li(Jt(t, l))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (s &= -s),
            (e.lanes |= s),
            (i = Jt(i, l)),
            (s = hs(e.stateNode, i, s)),
            Vo(e, s),
            Pe !== 4 && (Pe = 2)),
        !1
      );
    var f = Error(u(520), { cause: i });
    if (
      ((f = Jt(f, l)),
      Ei === null ? (Ei = [f]) : Ei.push(f),
      Pe !== 4 && (Pe = 2),
      t === null)
    )
      return !0;
    (i = Jt(i, l)), (l = t);
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (e = s & -s),
            (l.lanes |= e),
            (e = hs(l.stateNode, i, e)),
            Vo(l, e),
            !1
          );
        case 1:
          if (
            ((t = l.type),
            (f = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (f !== null &&
                  typeof f.componentDidCatch == "function" &&
                  (rl === null || !rl.has(f)))))
          )
            return (
              (l.flags |= 65536),
              (s &= -s),
              (l.lanes |= s),
              (s = Ud(s)),
              Bd(s, e, l, i),
              Vo(l, s),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var ds = Error(u(461)),
    at = !1;
  function mt(e, t, l, i) {
    t.child = e === null ? Vh(t, null, l, i) : Dl(t, e.child, l, i);
  }
  function Hd(e, t, l, i, s) {
    l = l.render;
    var f = t.ref;
    if ("ref" in i) {
      var g = {};
      for (var x in i) x !== "ref" && (g[x] = i[x]);
    } else g = i;
    return (
      Ol(t),
      (i = Ko(e, t, l, g, f, s)),
      (x = Jo()),
      e !== null && !at
        ? (Io(e, t, s), Mn(e, t, s))
        : (Ne && x && Ro(t), (t.flags |= 1), mt(e, t, i, s), t.child)
    );
  }
  function qd(e, t, l, i, s) {
    if (e === null) {
      var f = l.type;
      return typeof f == "function" &&
        !Co(f) &&
        f.defaultProps === void 0 &&
        l.compare === null
        ? ((t.tag = 15), (t.type = f), Yd(e, t, f, i, s))
        : ((e = Tr(l.type, null, i, t, t.mode, s)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((f = e.child), !Ss(e, s))) {
      var g = f.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : ei), l(g, i) && e.ref === t.ref)
      )
        return Mn(e, t, s);
    }
    return (
      (t.flags |= 1),
      (e = zn(f, i)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Yd(e, t, l, i, s) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (ei(f, i) && e.ref === t.ref)
        if (((at = !1), (t.pendingProps = i = f), Ss(e, s)))
          (e.flags & 131072) !== 0 && (at = !0);
        else return (t.lanes = e.lanes), Mn(e, t, s);
    }
    return ms(e, t, l, i, s);
  }
  function Vd(e, t, l, i) {
    var s = i.children,
      f = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      i.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((f = f !== null ? f.baseLanes | l : l), e !== null)) {
          for (i = t.child = e.child, s = 0; i !== null; )
            (s = s | i.lanes | i.childLanes), (i = i.sibling);
          i = s & ~f;
        } else (i = 0), (t.child = null);
        return Xd(e, t, f, l, i);
      }
      if ((l & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Or(t, f !== null ? f.cachePool : null),
          f !== null ? Qh(t, f) : Go(),
          Zh(t);
      else
        return (
          (i = t.lanes = 536870912),
          Xd(e, t, f !== null ? f.baseLanes | l : l, l, i)
        );
    } else
      f !== null
        ? (Or(t, f.cachePool), Qh(t, f), nl(), (t.memoizedState = null))
        : (e !== null && Or(t, null), Go(), nl());
    return mt(e, t, s, l), t.child;
  }
  function pi(e, t) {
    return (
      (e !== null && e.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function Xd(e, t, l, i, s) {
    var f = Bo();
    return (
      (f = f === null ? null : { parent: nt._currentValue, pool: f }),
      (t.memoizedState = { baseLanes: l, cachePool: f }),
      e !== null && Or(t, null),
      Go(),
      Zh(t),
      e !== null && oa(e, t, i, !0),
      (t.childLanes = s),
      null
    );
  }
  function Gr(e, t) {
    return (
      (t = Zr({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function Gd(e, t, l) {
    return (
      Dl(t, e.child, null, l),
      (e = Gr(t, t.pendingProps)),
      (e.flags |= 2),
      Ht(t),
      (t.memoizedState = null),
      e
    );
  }
  function N1(e, t, l) {
    var i = t.pendingProps,
      s = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (Ne) {
        if (i.mode === "hidden")
          return (e = Gr(t, i)), (t.lanes = 536870912), pi(null, e);
        if (
          (Zo(t),
          (e = Ze)
            ? ((e = np(e, Pt)),
              (e = e !== null && e.data === "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Kn !== null ? { id: fn, overflow: hn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = zh(e)),
                (l.return = t),
                (t.child = l),
                (ht = t),
                (Ze = null)))
            : (e = null),
          e === null)
        )
          throw In(t);
        return (t.lanes = 536870912), null;
      }
      return Gr(t, i);
    }
    var f = e.memoizedState;
    if (f !== null) {
      var g = f.dehydrated;
      if ((Zo(t), s))
        if (t.flags & 256) (t.flags &= -257), (t = Gd(e, t, l));
        else if (t.memoizedState !== null)
          (t.child = e.child), (t.flags |= 128), (t = null);
        else throw Error(u(558));
      else if (
        (at || oa(e, t, l, !1), (s = (l & e.childLanes) !== 0), at || s)
      ) {
        if (
          ((i = Xe),
          i !== null && ((g = kf(i, l)), g !== 0 && g !== f.retryLane))
        )
          throw ((f.retryLane = g), Tl(e, g), Rt(i, e, g), ds);
        tu(), (t = Gd(e, t, l));
      } else
        (e = f.treeContext),
          (Ze = en(g.nextSibling)),
          (ht = t),
          (Ne = !0),
          (Jn = null),
          (Pt = !1),
          e !== null && Nh(t, e),
          (t = Gr(t, i)),
          (t.flags |= 4096);
      return t;
    }
    return (
      (e = zn(e.child, { mode: i.mode, children: i.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function Qr(e, t) {
    var l = t.ref;
    if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(u(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function ms(e, t, l, i, s) {
    return (
      Ol(t),
      (l = Ko(e, t, l, i, void 0, s)),
      (i = Jo()),
      e !== null && !at
        ? (Io(e, t, s), Mn(e, t, s))
        : (Ne && i && Ro(t), (t.flags |= 1), mt(e, t, l, s), t.child)
    );
  }
  function Qd(e, t, l, i, s, f) {
    return (
      Ol(t),
      (t.updateQueue = null),
      (l = Kh(t, i, l, s)),
      Fh(e),
      (i = Jo()),
      e !== null && !at
        ? (Io(e, t, f), Mn(e, t, f))
        : (Ne && i && Ro(t), (t.flags |= 1), mt(e, t, l, f), t.child)
    );
  }
  function Zd(e, t, l, i, s) {
    if ((Ol(t), t.stateNode === null)) {
      var f = aa,
        g = l.contextType;
      typeof g == "object" && g !== null && (f = dt(g)),
        (f = new l(i, f)),
        (t.memoizedState =
          f.state !== null && f.state !== void 0 ? f.state : null),
        (f.updater = fs),
        (t.stateNode = f),
        (f._reactInternals = t),
        (f = t.stateNode),
        (f.props = i),
        (f.state = t.memoizedState),
        (f.refs = {}),
        qo(t),
        (g = l.contextType),
        (f.context = typeof g == "object" && g !== null ? dt(g) : aa),
        (f.state = t.memoizedState),
        (g = l.getDerivedStateFromProps),
        typeof g == "function" && (cs(t, l, g, i), (f.state = t.memoizedState)),
        typeof l.getDerivedStateFromProps == "function" ||
          typeof f.getSnapshotBeforeUpdate == "function" ||
          (typeof f.UNSAFE_componentWillMount != "function" &&
            typeof f.componentWillMount != "function") ||
          ((g = f.state),
          typeof f.componentWillMount == "function" && f.componentWillMount(),
          typeof f.UNSAFE_componentWillMount == "function" &&
            f.UNSAFE_componentWillMount(),
          g !== f.state && fs.enqueueReplaceState(f, f.state, null),
          ci(t, i, f, s),
          si(),
          (f.state = t.memoizedState)),
        typeof f.componentDidMount == "function" && (t.flags |= 4194308),
        (i = !0);
    } else if (e === null) {
      f = t.stateNode;
      var x = t.memoizedProps,
        A = kl(l, x);
      f.props = A;
      var L = f.context,
        X = l.contextType;
      (g = aa), typeof X == "object" && X !== null && (g = dt(X));
      var F = l.getDerivedStateFromProps;
      (X =
        typeof F == "function" ||
        typeof f.getSnapshotBeforeUpdate == "function"),
        (x = t.pendingProps !== x),
        X ||
          (typeof f.UNSAFE_componentWillReceiveProps != "function" &&
            typeof f.componentWillReceiveProps != "function") ||
          ((x || L !== g) && Dd(t, f, i, g)),
        (Pn = !1);
      var U = t.memoizedState;
      (f.state = U),
        ci(t, i, f, s),
        si(),
        (L = t.memoizedState),
        x || U !== L || Pn
          ? (typeof F == "function" && (cs(t, l, F, i), (L = t.memoizedState)),
            (A = Pn || _d(t, l, A, i, U, L, g))
              ? (X ||
                  (typeof f.UNSAFE_componentWillMount != "function" &&
                    typeof f.componentWillMount != "function") ||
                  (typeof f.componentWillMount == "function" &&
                    f.componentWillMount(),
                  typeof f.UNSAFE_componentWillMount == "function" &&
                    f.UNSAFE_componentWillMount()),
                typeof f.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof f.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = i),
                (t.memoizedState = L)),
            (f.props = i),
            (f.state = L),
            (f.context = g),
            (i = A))
          : (typeof f.componentDidMount == "function" && (t.flags |= 4194308),
            (i = !1));
    } else {
      (f = t.stateNode),
        Yo(e, t),
        (g = t.memoizedProps),
        (X = kl(l, g)),
        (f.props = X),
        (F = t.pendingProps),
        (U = f.context),
        (L = l.contextType),
        (A = aa),
        typeof L == "object" && L !== null && (A = dt(L)),
        (x = l.getDerivedStateFromProps),
        (L =
          typeof x == "function" ||
          typeof f.getSnapshotBeforeUpdate == "function") ||
          (typeof f.UNSAFE_componentWillReceiveProps != "function" &&
            typeof f.componentWillReceiveProps != "function") ||
          ((g !== F || U !== A) && Dd(t, f, i, A)),
        (Pn = !1),
        (U = t.memoizedState),
        (f.state = U),
        ci(t, i, f, s),
        si();
      var H = t.memoizedState;
      g !== F ||
      U !== H ||
      Pn ||
      (e !== null && e.dependencies !== null && Cr(e.dependencies))
        ? (typeof x == "function" && (cs(t, l, x, i), (H = t.memoizedState)),
          (X =
            Pn ||
            _d(t, l, X, i, U, H, A) ||
            (e !== null && e.dependencies !== null && Cr(e.dependencies)))
            ? (L ||
                (typeof f.UNSAFE_componentWillUpdate != "function" &&
                  typeof f.componentWillUpdate != "function") ||
                (typeof f.componentWillUpdate == "function" &&
                  f.componentWillUpdate(i, H, A),
                typeof f.UNSAFE_componentWillUpdate == "function" &&
                  f.UNSAFE_componentWillUpdate(i, H, A)),
              typeof f.componentDidUpdate == "function" && (t.flags |= 4),
              typeof f.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof f.componentDidUpdate != "function" ||
                (g === e.memoizedProps && U === e.memoizedState) ||
                (t.flags |= 4),
              typeof f.getSnapshotBeforeUpdate != "function" ||
                (g === e.memoizedProps && U === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = i),
              (t.memoizedState = H)),
          (f.props = i),
          (f.state = H),
          (f.context = A),
          (i = X))
        : (typeof f.componentDidUpdate != "function" ||
            (g === e.memoizedProps && U === e.memoizedState) ||
            (t.flags |= 4),
          typeof f.getSnapshotBeforeUpdate != "function" ||
            (g === e.memoizedProps && U === e.memoizedState) ||
            (t.flags |= 1024),
          (i = !1));
    }
    return (
      (f = i),
      Qr(e, t),
      (i = (t.flags & 128) !== 0),
      f || i
        ? ((f = t.stateNode),
          (l =
            i && typeof l.getDerivedStateFromError != "function"
              ? null
              : f.render()),
          (t.flags |= 1),
          e !== null && i
            ? ((t.child = Dl(t, e.child, null, s)),
              (t.child = Dl(t, null, l, s)))
            : mt(e, t, l, s),
          (t.memoizedState = f.state),
          (e = t.child))
        : (e = Mn(e, t, s)),
      e
    );
  }
  function Fd(e, t, l, i) {
    return Cl(), (t.flags |= 256), mt(e, t, l, i), t.child;
  }
  var ps = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function ys(e) {
    return { baseLanes: e, cachePool: Lh() };
  }
  function gs(e, t, l) {
    return (e = e !== null ? e.childLanes & ~l : 0), t && (e |= Yt), e;
  }
  function Kd(e, t, l) {
    var i = t.pendingProps,
      s = !1,
      f = (t.flags & 128) !== 0,
      g;
    if (
      ((g = f) ||
        (g =
          e !== null && e.memoizedState === null ? !1 : (We.current & 2) !== 0),
      g && ((s = !0), (t.flags &= -129)),
      (g = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (Ne) {
        if (
          (s ? tl(t) : nl(),
          (e = Ze)
            ? ((e = np(e, Pt)),
              (e = e !== null && e.data !== "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Kn !== null ? { id: fn, overflow: hn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = zh(e)),
                (l.return = t),
                (t.child = l),
                (ht = t),
                (Ze = null)))
            : (e = null),
          e === null)
        )
          throw In(t);
        return Ws(e) ? (t.lanes = 32) : (t.lanes = 536870912), null;
      }
      var x = i.children;
      return (
        (i = i.fallback),
        s
          ? (nl(),
            (s = t.mode),
            (x = Zr({ mode: "hidden", children: x }, s)),
            (i = Al(i, s, l, null)),
            (x.return = t),
            (i.return = t),
            (x.sibling = i),
            (t.child = x),
            (i = t.child),
            (i.memoizedState = ys(l)),
            (i.childLanes = gs(e, g, l)),
            (t.memoizedState = ps),
            pi(null, i))
          : (tl(t), bs(t, x))
      );
    }
    var A = e.memoizedState;
    if (A !== null && ((x = A.dehydrated), x !== null)) {
      if (f)
        t.flags & 256
          ? (tl(t), (t.flags &= -257), (t = vs(e, t, l)))
          : t.memoizedState !== null
          ? (nl(), (t.child = e.child), (t.flags |= 128), (t = null))
          : (nl(),
            (x = i.fallback),
            (s = t.mode),
            (i = Zr({ mode: "visible", children: i.children }, s)),
            (x = Al(x, s, l, null)),
            (x.flags |= 2),
            (i.return = t),
            (x.return = t),
            (i.sibling = x),
            (t.child = i),
            Dl(t, e.child, null, l),
            (i = t.child),
            (i.memoizedState = ys(l)),
            (i.childLanes = gs(e, g, l)),
            (t.memoizedState = ps),
            (t = pi(null, i)));
      else if ((tl(t), Ws(x))) {
        if (((g = x.nextSibling && x.nextSibling.dataset), g)) var L = g.dgst;
        (g = L),
          (i = Error(u(419))),
          (i.stack = ""),
          (i.digest = g),
          li({ value: i, source: null, stack: null }),
          (t = vs(e, t, l));
      } else if (
        (at || oa(e, t, l, !1), (g = (l & e.childLanes) !== 0), at || g)
      ) {
        if (
          ((g = Xe),
          g !== null && ((i = kf(g, l)), i !== 0 && i !== A.retryLane))
        )
          throw ((A.retryLane = i), Tl(e, i), Rt(g, e, i), ds);
        Ps(x) || tu(), (t = vs(e, t, l));
      } else
        Ps(x)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = A.treeContext),
            (Ze = en(x.nextSibling)),
            (ht = t),
            (Ne = !0),
            (Jn = null),
            (Pt = !1),
            e !== null && Nh(t, e),
            (t = bs(t, i.children)),
            (t.flags |= 4096));
      return t;
    }
    return s
      ? (nl(),
        (x = i.fallback),
        (s = t.mode),
        (A = e.child),
        (L = A.sibling),
        (i = zn(A, { mode: "hidden", children: i.children })),
        (i.subtreeFlags = A.subtreeFlags & 65011712),
        L !== null ? (x = zn(L, x)) : ((x = Al(x, s, l, null)), (x.flags |= 2)),
        (x.return = t),
        (i.return = t),
        (i.sibling = x),
        (t.child = i),
        pi(null, i),
        (i = t.child),
        (x = e.child.memoizedState),
        x === null
          ? (x = ys(l))
          : ((s = x.cachePool),
            s !== null
              ? ((A = nt._currentValue),
                (s = s.parent !== A ? { parent: A, pool: A } : s))
              : (s = Lh()),
            (x = { baseLanes: x.baseLanes | l, cachePool: s })),
        (i.memoizedState = x),
        (i.childLanes = gs(e, g, l)),
        (t.memoizedState = ps),
        pi(e.child, i))
      : (tl(t),
        (l = e.child),
        (e = l.sibling),
        (l = zn(l, { mode: "visible", children: i.children })),
        (l.return = t),
        (l.sibling = null),
        e !== null &&
          ((g = t.deletions),
          g === null ? ((t.deletions = [e]), (t.flags |= 16)) : g.push(e)),
        (t.child = l),
        (t.memoizedState = null),
        l);
  }
  function bs(e, t) {
    return (
      (t = Zr({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Zr(e, t) {
    return (e = Ut(22, e, null, t)), (e.lanes = 0), e;
  }
  function vs(e, t, l) {
    return (
      Dl(t, e.child, null, l),
      (e = bs(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Jd(e, t, l) {
    e.lanes |= t;
    var i = e.alternate;
    i !== null && (i.lanes |= t), ko(e.return, t, l);
  }
  function xs(e, t, l, i, s, f) {
    var g = e.memoizedState;
    g === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: i,
          tail: l,
          tailMode: s,
          treeForkCount: f,
        })
      : ((g.isBackwards = t),
        (g.rendering = null),
        (g.renderingStartTime = 0),
        (g.last = i),
        (g.tail = l),
        (g.tailMode = s),
        (g.treeForkCount = f));
  }
  function Id(e, t, l) {
    var i = t.pendingProps,
      s = i.revealOrder,
      f = i.tail;
    i = i.children;
    var g = We.current,
      x = (g & 2) !== 0;
    if (
      (x ? ((g = (g & 1) | 2), (t.flags |= 128)) : (g &= 1),
      E(We, g),
      mt(e, t, i, l),
      (i = Ne ? ni : 0),
      !x && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Jd(e, l, t);
        else if (e.tag === 19) Jd(e, l, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    switch (s) {
      case "forwards":
        for (l = t.child, s = null; l !== null; )
          (e = l.alternate),
            e !== null && kr(e) === null && (s = l),
            (l = l.sibling);
        (l = s),
          l === null
            ? ((s = t.child), (t.child = null))
            : ((s = l.sibling), (l.sibling = null)),
          xs(t, !1, s, l, f, i);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, s = t.child, t.child = null; s !== null; ) {
          if (((e = s.alternate), e !== null && kr(e) === null)) {
            t.child = s;
            break;
          }
          (e = s.sibling), (s.sibling = l), (l = s), (s = e);
        }
        xs(t, !0, l, null, f, i);
        break;
      case "together":
        xs(t, !1, null, null, void 0, i);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Mn(e, t, l) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (il |= t.lanes),
      (l & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((oa(e, t, l, !1), (l & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(u(153));
    if (t.child !== null) {
      for (
        e = t.child, l = zn(e, e.pendingProps), t.child = l, l.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (l = l.sibling = zn(e, e.pendingProps)),
          (l.return = t);
      l.sibling = null;
    }
    return t.child;
  }
  function Ss(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && Cr(e)));
  }
  function _1(e, t, l) {
    switch (t.tag) {
      case 3:
        Ke(t, t.stateNode.containerInfo),
          $n(t, nt, e.memoizedState.cache),
          Cl();
        break;
      case 27:
      case 5:
        Qt(t);
        break;
      case 4:
        Ke(t, t.stateNode.containerInfo);
        break;
      case 10:
        $n(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return (t.flags |= 128), Zo(t), null;
        break;
      case 13:
        var i = t.memoizedState;
        if (i !== null)
          return i.dehydrated !== null
            ? (tl(t), (t.flags |= 128), null)
            : (l & t.child.childLanes) !== 0
            ? Kd(e, t, l)
            : (tl(t), (e = Mn(e, t, l)), e !== null ? e.sibling : null);
        tl(t);
        break;
      case 19:
        var s = (e.flags & 128) !== 0;
        if (
          ((i = (l & t.childLanes) !== 0),
          i || (oa(e, t, l, !1), (i = (l & t.childLanes) !== 0)),
          s)
        ) {
          if (i) return Id(e, t, l);
          t.flags |= 128;
        }
        if (
          ((s = t.memoizedState),
          s !== null &&
            ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
          E(We, We.current),
          i)
        )
          break;
        return null;
      case 22:
        return (t.lanes = 0), Vd(e, t, l, t.pendingProps);
      case 24:
        $n(t, nt, e.memoizedState.cache);
    }
    return Mn(e, t, l);
  }
  function $d(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) at = !0;
      else {
        if (!Ss(e, l) && (t.flags & 128) === 0) return (at = !1), _1(e, t, l);
        at = (e.flags & 131072) !== 0;
      }
    else (at = !1), Ne && (t.flags & 1048576) !== 0 && Rh(t, ni, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var i = t.pendingProps;
          if (((e = Nl(t.elementType)), (t.type = e), typeof e == "function"))
            Co(e)
              ? ((i = kl(e, i)), (t.tag = 1), (t = Zd(null, t, e, i, l)))
              : ((t.tag = 0), (t = ms(null, t, e, i, l)));
          else {
            if (e != null) {
              var s = e.$$typeof;
              if (s === ee) {
                (t.tag = 11), (t = Hd(null, t, e, i, l));
                break e;
              } else if (s === I) {
                (t.tag = 14), (t = qd(null, t, e, i, l));
                break e;
              }
            }
            throw ((t = ie(e) || e), Error(u(306, t, "")));
          }
        }
        return t;
      case 0:
        return ms(e, t, t.type, t.pendingProps, l);
      case 1:
        return (i = t.type), (s = kl(i, t.pendingProps)), Zd(e, t, i, s, l);
      case 3:
        e: {
          if ((Ke(t, t.stateNode.containerInfo), e === null))
            throw Error(u(387));
          i = t.pendingProps;
          var f = t.memoizedState;
          (s = f.element), Yo(e, t), ci(t, i, null, l);
          var g = t.memoizedState;
          if (
            ((i = g.cache),
            $n(t, nt, i),
            i !== f.cache && jo(t, [nt], l, !0),
            si(),
            (i = g.element),
            f.isDehydrated)
          )
            if (
              ((f = { element: i, isDehydrated: !1, cache: g.cache }),
              (t.updateQueue.baseState = f),
              (t.memoizedState = f),
              t.flags & 256)
            ) {
              t = Fd(e, t, i, l);
              break e;
            } else if (i !== s) {
              (s = Jt(Error(u(424)), t)), li(s), (t = Fd(e, t, i, l));
              break e;
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (
                Ze = en(e.firstChild),
                  ht = t,
                  Ne = !0,
                  Jn = null,
                  Pt = !0,
                  l = Vh(t, null, i, l),
                  t.child = l;
                l;

              )
                (l.flags = (l.flags & -3) | 4096), (l = l.sibling);
            }
          else {
            if ((Cl(), i === s)) {
              t = Mn(e, t, l);
              break e;
            }
            mt(e, t, i, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          Qr(e, t),
          e === null
            ? (l = op(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = l)
              : Ne ||
                ((l = t.type),
                (e = t.pendingProps),
                (i = ou(oe.current).createElement(l)),
                (i[ft] = t),
                (i[wt] = e),
                pt(i, l, e),
                st(i),
                (t.stateNode = i))
            : (t.memoizedState = op(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState
              )),
          null
        );
      case 27:
        return (
          Qt(t),
          e === null &&
            Ne &&
            ((i = t.stateNode = ip(t.type, t.pendingProps, oe.current)),
            (ht = t),
            (Pt = !0),
            (s = Ze),
            cl(t.type) ? ((ec = s), (Ze = en(i.firstChild))) : (Ze = s)),
          mt(e, t, t.pendingProps.children, l),
          Qr(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            Ne &&
            ((s = i = Ze) &&
              ((i = ub(i, t.type, t.pendingProps, Pt)),
              i !== null
                ? ((t.stateNode = i),
                  (ht = t),
                  (Ze = en(i.firstChild)),
                  (Pt = !1),
                  (s = !0))
                : (s = !1)),
            s || In(t)),
          Qt(t),
          (s = t.type),
          (f = t.pendingProps),
          (g = e !== null ? e.memoizedProps : null),
          (i = f.children),
          Js(s, f) ? (i = null) : g !== null && Js(s, g) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((s = Ko(e, t, E1, null, null, l)), (Ni._currentValue = s)),
          Qr(e, t),
          mt(e, t, i, l),
          t.child
        );
      case 6:
        return (
          e === null &&
            Ne &&
            ((e = l = Ze) &&
              ((l = ob(l, t.pendingProps, Pt)),
              l !== null
                ? ((t.stateNode = l), (ht = t), (Ze = null), (e = !0))
                : (e = !1)),
            e || In(t)),
          null
        );
      case 13:
        return Kd(e, t, l);
      case 4:
        return (
          Ke(t, t.stateNode.containerInfo),
          (i = t.pendingProps),
          e === null ? (t.child = Dl(t, null, i, l)) : mt(e, t, i, l),
          t.child
        );
      case 11:
        return Hd(e, t, t.type, t.pendingProps, l);
      case 7:
        return mt(e, t, t.pendingProps, l), t.child;
      case 8:
        return mt(e, t, t.pendingProps.children, l), t.child;
      case 12:
        return mt(e, t, t.pendingProps.children, l), t.child;
      case 10:
        return (
          (i = t.pendingProps),
          $n(t, t.type, i.value),
          mt(e, t, i.children, l),
          t.child
        );
      case 9:
        return (
          (s = t.type._context),
          (i = t.pendingProps.children),
          Ol(t),
          (s = dt(s)),
          (i = i(s)),
          (t.flags |= 1),
          mt(e, t, i, l),
          t.child
        );
      case 14:
        return qd(e, t, t.type, t.pendingProps, l);
      case 15:
        return Yd(e, t, t.type, t.pendingProps, l);
      case 19:
        return Id(e, t, l);
      case 31:
        return N1(e, t, l);
      case 22:
        return Vd(e, t, l, t.pendingProps);
      case 24:
        return (
          Ol(t),
          (i = dt(nt)),
          e === null
            ? ((s = Bo()),
              s === null &&
                ((s = Xe),
                (f = Lo()),
                (s.pooledCache = f),
                f.refCount++,
                f !== null && (s.pooledCacheLanes |= l),
                (s = f)),
              (t.memoizedState = { parent: i, cache: s }),
              qo(t),
              $n(t, nt, s))
            : ((e.lanes & l) !== 0 && (Yo(e, t), ci(t, null, null, l), si()),
              (s = e.memoizedState),
              (f = t.memoizedState),
              s.parent !== i
                ? ((s = { parent: i, cache: i }),
                  (t.memoizedState = s),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = s),
                  $n(t, nt, i))
                : ((i = f.cache),
                  $n(t, nt, i),
                  i !== s.cache && jo(t, [nt], l, !0))),
          mt(e, t, t.pendingProps.children, l),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(u(156, t.tag));
  }
  function kn(e) {
    e.flags |= 4;
  }
  function Es(e, t, l, i, s) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (s & 335544128) === s))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Tm()) e.flags |= 8192;
        else throw ((_l = Nr), Ho);
    } else e.flags &= -16777217;
  }
  function Pd(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !dp(t)))
      if (Tm()) e.flags |= 8192;
      else throw ((_l = Nr), Ho);
  }
  function Fr(e, t) {
    t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? _f() : 536870912), (e.lanes |= t), (xa |= t));
  }
  function yi(e, t) {
    if (!Ne)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var l = null; t !== null; )
            t.alternate !== null && (l = t), (t = t.sibling);
          l === null ? (e.tail = null) : (l.sibling = null);
          break;
        case "collapsed":
          l = e.tail;
          for (var i = null; l !== null; )
            l.alternate !== null && (i = l), (l = l.sibling);
          i === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (i.sibling = null);
      }
  }
  function Fe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      l = 0,
      i = 0;
    if (t)
      for (var s = e.child; s !== null; )
        (l |= s.lanes | s.childLanes),
          (i |= s.subtreeFlags & 65011712),
          (i |= s.flags & 65011712),
          (s.return = e),
          (s = s.sibling);
    else
      for (s = e.child; s !== null; )
        (l |= s.lanes | s.childLanes),
          (i |= s.subtreeFlags),
          (i |= s.flags),
          (s.return = e),
          (s = s.sibling);
    return (e.subtreeFlags |= i), (e.childLanes = l), t;
  }
  function D1(e, t, l) {
    var i = t.pendingProps;
    switch ((No(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Fe(t), null;
      case 1:
        return Fe(t), null;
      case 3:
        return (
          (l = t.stateNode),
          (i = null),
          e !== null && (i = e.memoizedState.cache),
          t.memoizedState.cache !== i && (t.flags |= 2048),
          Nn(nt),
          Be(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
            (ua(t)
              ? kn(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Do())),
          Fe(t),
          null
        );
      case 26:
        var s = t.type,
          f = t.memoizedState;
        return (
          e === null
            ? (kn(t),
              f !== null ? (Fe(t), Pd(t, f)) : (Fe(t), Es(t, s, null, i, l)))
            : f
            ? f !== e.memoizedState
              ? (kn(t), Fe(t), Pd(t, f))
              : (Fe(t), (t.flags &= -16777217))
            : ((e = e.memoizedProps),
              e !== i && kn(t),
              Fe(t),
              Es(t, s, e, i, l)),
          null
        );
      case 27:
        if (
          (Sn(t),
          (l = oe.current),
          (s = t.type),
          e !== null && t.stateNode != null)
        )
          e.memoizedProps !== i && kn(t);
        else {
          if (!i) {
            if (t.stateNode === null) throw Error(u(166));
            return Fe(t), null;
          }
          (e = W.current),
            ua(t) ? _h(t) : ((e = ip(s, i, l)), (t.stateNode = e), kn(t));
        }
        return Fe(t), null;
      case 5:
        if ((Sn(t), (s = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== i && kn(t);
        else {
          if (!i) {
            if (t.stateNode === null) throw Error(u(166));
            return Fe(t), null;
          }
          if (((f = W.current), ua(t))) _h(t);
          else {
            var g = ou(oe.current);
            switch (f) {
              case 1:
                f = g.createElementNS("http://www.w3.org/2000/svg", s);
                break;
              case 2:
                f = g.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                break;
              default:
                switch (s) {
                  case "svg":
                    f = g.createElementNS("http://www.w3.org/2000/svg", s);
                    break;
                  case "math":
                    f = g.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s
                    );
                    break;
                  case "script":
                    (f = g.createElement("div")),
                      (f.innerHTML = "<script></script>"),
                      (f = f.removeChild(f.firstChild));
                    break;
                  case "select":
                    (f =
                      typeof i.is == "string"
                        ? g.createElement("select", { is: i.is })
                        : g.createElement("select")),
                      i.multiple
                        ? (f.multiple = !0)
                        : i.size && (f.size = i.size);
                    break;
                  default:
                    f =
                      typeof i.is == "string"
                        ? g.createElement(s, { is: i.is })
                        : g.createElement(s);
                }
            }
            (f[ft] = t), (f[wt] = i);
            e: for (g = t.child; g !== null; ) {
              if (g.tag === 5 || g.tag === 6) f.appendChild(g.stateNode);
              else if (g.tag !== 4 && g.tag !== 27 && g.child !== null) {
                (g.child.return = g), (g = g.child);
                continue;
              }
              if (g === t) break e;
              for (; g.sibling === null; ) {
                if (g.return === null || g.return === t) break e;
                g = g.return;
              }
              (g.sibling.return = g.return), (g = g.sibling);
            }
            t.stateNode = f;
            e: switch ((pt(f, s, i), s)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                i = !!i.autoFocus;
                break e;
              case "img":
                i = !0;
                break e;
              default:
                i = !1;
            }
            i && kn(t);
          }
        }
        return (
          Fe(t),
          Es(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, l),
          null
        );
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== i && kn(t);
        else {
          if (typeof i != "string" && t.stateNode === null) throw Error(u(166));
          if (((e = oe.current), ua(t))) {
            if (
              ((e = t.stateNode),
              (l = t.memoizedProps),
              (i = null),
              (s = ht),
              s !== null)
            )
              switch (s.tag) {
                case 27:
                case 5:
                  i = s.memoizedProps;
              }
            (e[ft] = t),
              (e = !!(
                e.nodeValue === l ||
                (i !== null && i.suppressHydrationWarning === !0) ||
                Km(e.nodeValue, l)
              )),
              e || In(t, !0);
          } else (e = ou(e).createTextNode(i)), (e[ft] = t), (t.stateNode = e);
        }
        return Fe(t), null;
      case 31:
        if (((l = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((i = ua(t)), l !== null)) {
            if (e === null) {
              if (!i) throw Error(u(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(u(557));
              e[ft] = t;
            } else
              Cl(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            Fe(t), (e = !1);
          } else
            (l = Do()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = l),
              (e = !0);
          if (!e) return t.flags & 256 ? (Ht(t), t) : (Ht(t), null);
          if ((t.flags & 128) !== 0) throw Error(u(558));
        }
        return Fe(t), null;
      case 13:
        if (
          ((i = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((s = ua(t)), i !== null && i.dehydrated !== null)) {
            if (e === null) {
              if (!s) throw Error(u(318));
              if (
                ((s = t.memoizedState),
                (s = s !== null ? s.dehydrated : null),
                !s)
              )
                throw Error(u(317));
              s[ft] = t;
            } else
              Cl(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            Fe(t), (s = !1);
          } else
            (s = Do()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = s),
              (s = !0);
          if (!s) return t.flags & 256 ? (Ht(t), t) : (Ht(t), null);
        }
        return (
          Ht(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = l), t)
            : ((l = i !== null),
              (e = e !== null && e.memoizedState !== null),
              l &&
                ((i = t.child),
                (s = null),
                i.alternate !== null &&
                  i.alternate.memoizedState !== null &&
                  i.alternate.memoizedState.cachePool !== null &&
                  (s = i.alternate.memoizedState.cachePool.pool),
                (f = null),
                i.memoizedState !== null &&
                  i.memoizedState.cachePool !== null &&
                  (f = i.memoizedState.cachePool.pool),
                f !== s && (i.flags |= 2048)),
              l !== e && l && (t.child.flags |= 8192),
              Fr(t, t.updateQueue),
              Fe(t),
              null)
        );
      case 4:
        return Be(), e === null && Gs(t.stateNode.containerInfo), Fe(t), null;
      case 10:
        return Nn(t.type), Fe(t), null;
      case 19:
        if ((V(We), (i = t.memoizedState), i === null)) return Fe(t), null;
        if (((s = (t.flags & 128) !== 0), (f = i.rendering), f === null))
          if (s) yi(i, !1);
          else {
            if (Pe !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((f = kr(e)), f !== null)) {
                  for (
                    t.flags |= 128,
                      yi(i, !1),
                      e = f.updateQueue,
                      t.updateQueue = e,
                      Fr(t, e),
                      t.subtreeFlags = 0,
                      e = l,
                      l = t.child;
                    l !== null;

                  )
                    Ch(l, e), (l = l.sibling);
                  return (
                    E(We, (We.current & 1) | 2),
                    Ne && On(t, i.treeForkCount),
                    t.child
                  );
                }
                e = e.sibling;
              }
            i.tail !== null &&
              vt() > Pr &&
              ((t.flags |= 128), (s = !0), yi(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!s)
            if (((e = kr(f)), e !== null)) {
              if (
                ((t.flags |= 128),
                (s = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                Fr(t, e),
                yi(i, !0),
                i.tail === null &&
                  i.tailMode === "hidden" &&
                  !f.alternate &&
                  !Ne)
              )
                return Fe(t), null;
            } else
              2 * vt() - i.renderingStartTime > Pr &&
                l !== 536870912 &&
                ((t.flags |= 128), (s = !0), yi(i, !1), (t.lanes = 4194304));
          i.isBackwards
            ? ((f.sibling = t.child), (t.child = f))
            : ((e = i.last),
              e !== null ? (e.sibling = f) : (t.child = f),
              (i.last = f));
        }
        return i.tail !== null
          ? ((e = i.tail),
            (i.rendering = e),
            (i.tail = e.sibling),
            (i.renderingStartTime = vt()),
            (e.sibling = null),
            (l = We.current),
            E(We, s ? (l & 1) | 2 : l & 1),
            Ne && On(t, i.treeForkCount),
            e)
          : (Fe(t), null);
      case 22:
      case 23:
        return (
          Ht(t),
          Qo(),
          (i = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== i && (t.flags |= 8192)
            : i && (t.flags |= 8192),
          i
            ? (l & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (Fe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Fe(t),
          (l = t.updateQueue),
          l !== null && Fr(t, l.retryQueue),
          (l = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (l = e.memoizedState.cachePool.pool),
          (i = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (i = t.memoizedState.cachePool.pool),
          i !== l && (t.flags |= 2048),
          e !== null && V(Rl),
          null
        );
      case 24:
        return (
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          Nn(nt),
          Fe(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(u(156, t.tag));
  }
  function M1(e, t) {
    switch ((No(t), t.tag)) {
      case 1:
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Nn(nt),
          Be(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Sn(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if ((Ht(t), t.alternate === null)) throw Error(u(340));
          Cl();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 13:
        if (
          (Ht(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(u(340));
          Cl();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return V(We), null;
      case 4:
        return Be(), null;
      case 10:
        return Nn(t.type), null;
      case 22:
      case 23:
        return (
          Ht(t),
          Qo(),
          e !== null && V(Rl),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return Nn(nt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Wd(e, t) {
    switch ((No(t), t.tag)) {
      case 3:
        Nn(nt), Be();
        break;
      case 26:
      case 27:
      case 5:
        Sn(t);
        break;
      case 4:
        Be();
        break;
      case 31:
        t.memoizedState !== null && Ht(t);
        break;
      case 13:
        Ht(t);
        break;
      case 19:
        V(We);
        break;
      case 10:
        Nn(t.type);
        break;
      case 22:
      case 23:
        Ht(t), Qo(), e !== null && V(Rl);
        break;
      case 24:
        Nn(nt);
    }
  }
  function gi(e, t) {
    try {
      var l = t.updateQueue,
        i = l !== null ? l.lastEffect : null;
      if (i !== null) {
        var s = i.next;
        l = s;
        do {
          if ((l.tag & e) === e) {
            i = void 0;
            var f = l.create,
              g = l.inst;
            (i = f()), (g.destroy = i);
          }
          l = l.next;
        } while (l !== s);
      }
    } catch (x) {
      Ue(t, t.return, x);
    }
  }
  function ll(e, t, l) {
    try {
      var i = t.updateQueue,
        s = i !== null ? i.lastEffect : null;
      if (s !== null) {
        var f = s.next;
        i = f;
        do {
          if ((i.tag & e) === e) {
            var g = i.inst,
              x = g.destroy;
            if (x !== void 0) {
              (g.destroy = void 0), (s = t);
              var A = l,
                L = x;
              try {
                L();
              } catch (X) {
                Ue(s, A, X);
              }
            }
          }
          i = i.next;
        } while (i !== f);
      }
    } catch (X) {
      Ue(t, t.return, X);
    }
  }
  function em(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        Gh(t, l);
      } catch (i) {
        Ue(e, e.return, i);
      }
    }
  }
  function tm(e, t, l) {
    (l.props = kl(e.type, e.memoizedProps)), (l.state = e.memoizedState);
    try {
      l.componentWillUnmount();
    } catch (i) {
      Ue(e, t, i);
    }
  }
  function bi(e, t) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var i = e.stateNode;
            break;
          case 30:
            i = e.stateNode;
            break;
          default:
            i = e.stateNode;
        }
        typeof l == "function" ? (e.refCleanup = l(i)) : (l.current = i);
      }
    } catch (s) {
      Ue(e, t, s);
    }
  }
  function dn(e, t) {
    var l = e.ref,
      i = e.refCleanup;
    if (l !== null)
      if (typeof i == "function")
        try {
          i();
        } catch (s) {
          Ue(e, t, s);
        } finally {
          (e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (s) {
          Ue(e, t, s);
        }
      else l.current = null;
  }
  function nm(e) {
    var t = e.type,
      l = e.memoizedProps,
      i = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && i.focus();
          break e;
        case "img":
          l.src ? (i.src = l.src) : l.srcSet && (i.srcset = l.srcSet);
      }
    } catch (s) {
      Ue(e, e.return, s);
    }
  }
  function ws(e, t, l) {
    try {
      var i = e.stateNode;
      tb(i, e.type, l, t), (i[wt] = t);
    } catch (s) {
      Ue(e, e.return, s);
    }
  }
  function lm(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && cl(e.type)) ||
      e.tag === 4
    );
  }
  function Ts(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || lm(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (
          (e.tag === 27 && cl(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function As(e, t, l) {
    var i = e.tag;
    if (i === 5 || i === 6)
      (e = e.stateNode),
        t
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === "HTML"
              ? l.ownerDocument.body
              : l
            ).insertBefore(e, t)
          : ((t =
              l.nodeType === 9
                ? l.body
                : l.nodeName === "HTML"
                ? l.ownerDocument.body
                : l),
            t.appendChild(e),
            (l = l._reactRootContainer),
            l != null || t.onclick !== null || (t.onclick = An));
    else if (
      i !== 4 &&
      (i === 27 && cl(e.type) && ((l = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (As(e, t, l), e = e.sibling; e !== null; )
        As(e, t, l), (e = e.sibling);
  }
  function Kr(e, t, l) {
    var i = e.tag;
    if (i === 5 || i === 6)
      (e = e.stateNode), t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (
      i !== 4 &&
      (i === 27 && cl(e.type) && (l = e.stateNode), (e = e.child), e !== null)
    )
      for (Kr(e, t, l), e = e.sibling; e !== null; )
        Kr(e, t, l), (e = e.sibling);
  }
  function am(e) {
    var t = e.stateNode,
      l = e.memoizedProps;
    try {
      for (var i = e.type, s = t.attributes; s.length; )
        t.removeAttributeNode(s[0]);
      pt(t, i, l), (t[ft] = e), (t[wt] = l);
    } catch (f) {
      Ue(e, e.return, f);
    }
  }
  var jn = !1,
    it = !1,
    Cs = !1,
    im = typeof WeakSet == "function" ? WeakSet : Set,
    ct = null;
  function k1(e, t) {
    if (((e = e.containerInfo), (Fs = pu), (e = gh(e)), vo(e))) {
      if ("selectionStart" in e)
        var l = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          l = ((l = e.ownerDocument) && l.defaultView) || window;
          var i = l.getSelection && l.getSelection();
          if (i && i.rangeCount !== 0) {
            l = i.anchorNode;
            var s = i.anchorOffset,
              f = i.focusNode;
            i = i.focusOffset;
            try {
              l.nodeType, f.nodeType;
            } catch {
              l = null;
              break e;
            }
            var g = 0,
              x = -1,
              A = -1,
              L = 0,
              X = 0,
              F = e,
              U = null;
            t: for (;;) {
              for (
                var H;
                F !== l || (s !== 0 && F.nodeType !== 3) || (x = g + s),
                  F !== f || (i !== 0 && F.nodeType !== 3) || (A = g + i),
                  F.nodeType === 3 && (g += F.nodeValue.length),
                  (H = F.firstChild) !== null;

              )
                (U = F), (F = H);
              for (;;) {
                if (F === e) break t;
                if (
                  (U === l && ++L === s && (x = g),
                  U === f && ++X === i && (A = g),
                  (H = F.nextSibling) !== null)
                )
                  break;
                (F = U), (U = F.parentNode);
              }
              F = H;
            }
            l = x === -1 || A === -1 ? null : { start: x, end: A };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      Ks = { focusedElem: e, selectionRange: l }, pu = !1, ct = t;
      ct !== null;

    )
      if (
        ((t = ct), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        (e.return = t), (ct = e);
      else
        for (; ct !== null; ) {
          switch (((t = ct), (f = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              if (
                (e & 4) !== 0 &&
                ((e = t.updateQueue),
                (e = e !== null ? e.events : null),
                e !== null)
              )
                for (l = 0; l < e.length; l++)
                  (s = e[l]), (s.ref.impl = s.nextImpl);
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && f !== null) {
                (e = void 0),
                  (l = t),
                  (s = f.memoizedProps),
                  (f = f.memoizedState),
                  (i = l.stateNode);
                try {
                  var re = kl(l.type, s);
                  (e = i.getSnapshotBeforeUpdate(re, f)),
                    (i.__reactInternalSnapshotBeforeUpdate = e);
                } catch (he) {
                  Ue(l, l.return, he);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (l = e.nodeType), l === 9)
                )
                  $s(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      $s(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(u(163));
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (ct = e);
            break;
          }
          ct = t.return;
        }
  }
  function rm(e, t, l) {
    var i = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Un(e, l), i & 4 && gi(5, l);
        break;
      case 1:
        if ((Un(e, l), i & 4))
          if (((e = l.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (g) {
              Ue(l, l.return, g);
            }
          else {
            var s = kl(l.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(s, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (g) {
              Ue(l, l.return, g);
            }
          }
        i & 64 && em(l), i & 512 && bi(l, l.return);
        break;
      case 3:
        if ((Un(e, l), i & 64 && ((e = l.updateQueue), e !== null))) {
          if (((t = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode;
                break;
              case 1:
                t = l.child.stateNode;
            }
          try {
            Gh(e, t);
          } catch (g) {
            Ue(l, l.return, g);
          }
        }
        break;
      case 27:
        t === null && i & 4 && am(l);
      case 26:
      case 5:
        Un(e, l), t === null && i & 4 && nm(l), i & 512 && bi(l, l.return);
        break;
      case 12:
        Un(e, l);
        break;
      case 31:
        Un(e, l), i & 4 && sm(e, l);
        break;
      case 13:
        Un(e, l),
          i & 4 && cm(e, l),
          i & 64 &&
            ((e = l.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((l = X1.bind(null, l)), sb(e, l))));
        break;
      case 22:
        if (((i = l.memoizedState !== null || jn), !i)) {
          (t = (t !== null && t.memoizedState !== null) || it), (s = jn);
          var f = it;
          (jn = i),
            (it = t) && !f ? Bn(e, l, (l.subtreeFlags & 8772) !== 0) : Un(e, l),
            (jn = s),
            (it = f);
        }
        break;
      case 30:
        break;
      default:
        Un(e, l);
    }
  }
  function um(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), um(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && to(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var Je = null,
    At = !1;
  function Ln(e, t, l) {
    for (l = l.child; l !== null; ) om(e, t, l), (l = l.sibling);
  }
  function om(e, t, l) {
    if (ut && typeof ut.onCommitFiberUnmount == "function")
      try {
        ut.onCommitFiberUnmount(xt, l);
      } catch {}
    switch (l.tag) {
      case 26:
        it || dn(l, t),
          Ln(e, t, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l));
        break;
      case 27:
        it || dn(l, t);
        var i = Je,
          s = At;
        cl(l.type) && ((Je = l.stateNode), (At = !1)),
          Ln(e, t, l),
          zi(l.stateNode),
          (Je = i),
          (At = s);
        break;
      case 5:
        it || dn(l, t);
      case 6:
        if (
          ((i = Je),
          (s = At),
          (Je = null),
          Ln(e, t, l),
          (Je = i),
          (At = s),
          Je !== null)
        )
          if (At)
            try {
              (Je.nodeType === 9
                ? Je.body
                : Je.nodeName === "HTML"
                ? Je.ownerDocument.body
                : Je
              ).removeChild(l.stateNode);
            } catch (f) {
              Ue(l, t, f);
            }
          else
            try {
              Je.removeChild(l.stateNode);
            } catch (f) {
              Ue(l, t, f);
            }
        break;
      case 18:
        Je !== null &&
          (At
            ? ((e = Je),
              ep(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                  ? e.ownerDocument.body
                  : e,
                l.stateNode
              ),
              Oa(e))
            : ep(Je, l.stateNode));
        break;
      case 4:
        (i = Je),
          (s = At),
          (Je = l.stateNode.containerInfo),
          (At = !0),
          Ln(e, t, l),
          (Je = i),
          (At = s);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ll(2, l, t), it || ll(4, l, t), Ln(e, t, l);
        break;
      case 1:
        it ||
          (dn(l, t),
          (i = l.stateNode),
          typeof i.componentWillUnmount == "function" && tm(l, t, i)),
          Ln(e, t, l);
        break;
      case 21:
        Ln(e, t, l);
        break;
      case 22:
        (it = (i = it) || l.memoizedState !== null), Ln(e, t, l), (it = i);
        break;
      default:
        Ln(e, t, l);
    }
  }
  function sm(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        Oa(e);
      } catch (l) {
        Ue(t, t.return, l);
      }
    }
  }
  function cm(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Oa(e);
      } catch (l) {
        Ue(t, t.return, l);
      }
  }
  function j1(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new im()), t;
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new im()),
          t
        );
      default:
        throw Error(u(435, e.tag));
    }
  }
  function Jr(e, t) {
    var l = j1(e);
    t.forEach(function (i) {
      if (!l.has(i)) {
        l.add(i);
        var s = G1.bind(null, e, i);
        i.then(s, s);
      }
    });
  }
  function Ct(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var i = 0; i < l.length; i++) {
        var s = l[i],
          f = e,
          g = t,
          x = g;
        e: for (; x !== null; ) {
          switch (x.tag) {
            case 27:
              if (cl(x.type)) {
                (Je = x.stateNode), (At = !1);
                break e;
              }
              break;
            case 5:
              (Je = x.stateNode), (At = !1);
              break e;
            case 3:
            case 4:
              (Je = x.stateNode.containerInfo), (At = !0);
              break e;
          }
          x = x.return;
        }
        if (Je === null) throw Error(u(160));
        om(f, g, s),
          (Je = null),
          (At = !1),
          (f = s.alternate),
          f !== null && (f.return = null),
          (s.return = null);
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) fm(t, e), (t = t.sibling);
  }
  var un = null;
  function fm(e, t) {
    var l = e.alternate,
      i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ct(t, e),
          zt(e),
          i & 4 && (ll(3, e, e.return), gi(3, e), ll(5, e, e.return));
        break;
      case 1:
        Ct(t, e),
          zt(e),
          i & 512 && (it || l === null || dn(l, l.return)),
          i & 64 &&
            jn &&
            ((e = e.updateQueue),
            e !== null &&
              ((i = e.callbacks),
              i !== null &&
                ((l = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = l === null ? i : l.concat(i)))));
        break;
      case 26:
        var s = un;
        if (
          (Ct(t, e),
          zt(e),
          i & 512 && (it || l === null || dn(l, l.return)),
          i & 4)
        ) {
          var f = l !== null ? l.memoizedState : null;
          if (((i = e.memoizedState), l === null))
            if (i === null)
              if (e.stateNode === null) {
                e: {
                  (i = e.type),
                    (l = e.memoizedProps),
                    (s = s.ownerDocument || s);
                  t: switch (i) {
                    case "title":
                      (f = s.getElementsByTagName("title")[0]),
                        (!f ||
                          f[Qa] ||
                          f[ft] ||
                          f.namespaceURI === "http://www.w3.org/2000/svg" ||
                          f.hasAttribute("itemprop")) &&
                          ((f = s.createElement(i)),
                          s.head.insertBefore(
                            f,
                            s.querySelector("head > title")
                          )),
                        pt(f, i, l),
                        (f[ft] = e),
                        st(f),
                        (i = f);
                      break e;
                    case "link":
                      var g = fp("link", "href", s).get(i + (l.href || ""));
                      if (g) {
                        for (var x = 0; x < g.length; x++)
                          if (
                            ((f = g[x]),
                            f.getAttribute("href") ===
                              (l.href == null || l.href === ""
                                ? null
                                : l.href) &&
                              f.getAttribute("rel") ===
                                (l.rel == null ? null : l.rel) &&
                              f.getAttribute("title") ===
                                (l.title == null ? null : l.title) &&
                              f.getAttribute("crossorigin") ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            g.splice(x, 1);
                            break t;
                          }
                      }
                      (f = s.createElement(i)),
                        pt(f, i, l),
                        s.head.appendChild(f);
                      break;
                    case "meta":
                      if (
                        (g = fp("meta", "content", s).get(
                          i + (l.content || "")
                        ))
                      ) {
                        for (x = 0; x < g.length; x++)
                          if (
                            ((f = g[x]),
                            f.getAttribute("content") ===
                              (l.content == null ? null : "" + l.content) &&
                              f.getAttribute("name") ===
                                (l.name == null ? null : l.name) &&
                              f.getAttribute("property") ===
                                (l.property == null ? null : l.property) &&
                              f.getAttribute("http-equiv") ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              f.getAttribute("charset") ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            g.splice(x, 1);
                            break t;
                          }
                      }
                      (f = s.createElement(i)),
                        pt(f, i, l),
                        s.head.appendChild(f);
                      break;
                    default:
                      throw Error(u(468, i));
                  }
                  (f[ft] = e), st(f), (i = f);
                }
                e.stateNode = i;
              } else hp(s, e.type, e.stateNode);
            else e.stateNode = cp(s, i, e.memoizedProps);
          else
            f !== i
              ? (f === null
                  ? l.stateNode !== null &&
                    ((l = l.stateNode), l.parentNode.removeChild(l))
                  : f.count--,
                i === null
                  ? hp(s, e.type, e.stateNode)
                  : cp(s, i, e.memoizedProps))
              : i === null &&
                e.stateNode !== null &&
                ws(e, e.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        Ct(t, e),
          zt(e),
          i & 512 && (it || l === null || dn(l, l.return)),
          l !== null && i & 4 && ws(e, e.memoizedProps, l.memoizedProps);
        break;
      case 5:
        if (
          (Ct(t, e),
          zt(e),
          i & 512 && (it || l === null || dn(l, l.return)),
          e.flags & 32)
        ) {
          s = e.stateNode;
          try {
            $l(s, "");
          } catch (re) {
            Ue(e, e.return, re);
          }
        }
        i & 4 &&
          e.stateNode != null &&
          ((s = e.memoizedProps), ws(e, s, l !== null ? l.memoizedProps : s)),
          i & 1024 && (Cs = !0);
        break;
      case 6:
        if ((Ct(t, e), zt(e), i & 4)) {
          if (e.stateNode === null) throw Error(u(162));
          (i = e.memoizedProps), (l = e.stateNode);
          try {
            l.nodeValue = i;
          } catch (re) {
            Ue(e, e.return, re);
          }
        }
        break;
      case 3:
        if (
          ((fu = null),
          (s = un),
          (un = su(t.containerInfo)),
          Ct(t, e),
          (un = s),
          zt(e),
          i & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            Oa(t.containerInfo);
          } catch (re) {
            Ue(e, e.return, re);
          }
        Cs && ((Cs = !1), hm(e));
        break;
      case 4:
        (i = un),
          (un = su(e.stateNode.containerInfo)),
          Ct(t, e),
          zt(e),
          (un = i);
        break;
      case 12:
        Ct(t, e), zt(e);
        break;
      case 31:
        Ct(t, e),
          zt(e),
          i & 4 &&
            ((i = e.updateQueue),
            i !== null && ((e.updateQueue = null), Jr(e, i)));
        break;
      case 13:
        Ct(t, e),
          zt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            ($r = vt()),
          i & 4 &&
            ((i = e.updateQueue),
            i !== null && ((e.updateQueue = null), Jr(e, i)));
        break;
      case 22:
        s = e.memoizedState !== null;
        var A = l !== null && l.memoizedState !== null,
          L = jn,
          X = it;
        if (
          ((jn = L || s),
          (it = X || A),
          Ct(t, e),
          (it = X),
          (jn = L),
          zt(e),
          i & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = s ? t._visibility & -2 : t._visibility | 1,
              s && (l === null || A || jn || it || jl(e)),
              l = null,
              t = e;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                A = l = t;
                try {
                  if (((f = A.stateNode), s))
                    (g = f.style),
                      typeof g.setProperty == "function"
                        ? g.setProperty("display", "none", "important")
                        : (g.display = "none");
                  else {
                    x = A.stateNode;
                    var F = A.memoizedProps.style,
                      U =
                        F != null && F.hasOwnProperty("display")
                          ? F.display
                          : null;
                    x.style.display =
                      U == null || typeof U == "boolean" ? "" : ("" + U).trim();
                  }
                } catch (re) {
                  Ue(A, A.return, re);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                A = t;
                try {
                  A.stateNode.nodeValue = s ? "" : A.memoizedProps;
                } catch (re) {
                  Ue(A, A.return, re);
                }
              }
            } else if (t.tag === 18) {
              if (l === null) {
                A = t;
                try {
                  var H = A.stateNode;
                  s ? tp(H, !0) : tp(A.stateNode, !1);
                } catch (re) {
                  Ue(A, A.return, re);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              l === t && (l = null), (t = t.return);
            }
            l === t && (l = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        i & 4 &&
          ((i = e.updateQueue),
          i !== null &&
            ((l = i.retryQueue),
            l !== null && ((i.retryQueue = null), Jr(e, l))));
        break;
      case 19:
        Ct(t, e),
          zt(e),
          i & 4 &&
            ((i = e.updateQueue),
            i !== null && ((e.updateQueue = null), Jr(e, i)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ct(t, e), zt(e);
    }
  }
  function zt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, i = e.return; i !== null; ) {
          if (lm(i)) {
            l = i;
            break;
          }
          i = i.return;
        }
        if (l == null) throw Error(u(160));
        switch (l.tag) {
          case 27:
            var s = l.stateNode,
              f = Ts(e);
            Kr(e, f, s);
            break;
          case 5:
            var g = l.stateNode;
            l.flags & 32 && ($l(g, ""), (l.flags &= -33));
            var x = Ts(e);
            Kr(e, x, g);
            break;
          case 3:
          case 4:
            var A = l.stateNode.containerInfo,
              L = Ts(e);
            As(e, L, A);
            break;
          default:
            throw Error(u(161));
        }
      } catch (X) {
        Ue(e, e.return, X);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function hm(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        hm(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling);
      }
  }
  function Un(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) rm(e, t.alternate, t), (t = t.sibling);
  }
  function jl(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ll(4, t, t.return), jl(t);
          break;
        case 1:
          dn(t, t.return);
          var l = t.stateNode;
          typeof l.componentWillUnmount == "function" && tm(t, t.return, l),
            jl(t);
          break;
        case 27:
          zi(t.stateNode);
        case 26:
        case 5:
          dn(t, t.return), jl(t);
          break;
        case 22:
          t.memoizedState === null && jl(t);
          break;
        case 30:
          jl(t);
          break;
        default:
          jl(t);
      }
      e = e.sibling;
    }
  }
  function Bn(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var i = t.alternate,
        s = e,
        f = t,
        g = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Bn(s, f, l), gi(4, f);
          break;
        case 1:
          if (
            (Bn(s, f, l),
            (i = f),
            (s = i.stateNode),
            typeof s.componentDidMount == "function")
          )
            try {
              s.componentDidMount();
            } catch (L) {
              Ue(i, i.return, L);
            }
          if (((i = f), (s = i.updateQueue), s !== null)) {
            var x = i.stateNode;
            try {
              var A = s.shared.hiddenCallbacks;
              if (A !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < A.length; s++)
                  Xh(A[s], x);
            } catch (L) {
              Ue(i, i.return, L);
            }
          }
          l && g & 64 && em(f), bi(f, f.return);
          break;
        case 27:
          am(f);
        case 26:
        case 5:
          Bn(s, f, l), l && i === null && g & 4 && nm(f), bi(f, f.return);
          break;
        case 12:
          Bn(s, f, l);
          break;
        case 31:
          Bn(s, f, l), l && g & 4 && sm(s, f);
          break;
        case 13:
          Bn(s, f, l), l && g & 4 && cm(s, f);
          break;
        case 22:
          f.memoizedState === null && Bn(s, f, l), bi(f, f.return);
          break;
        case 30:
          break;
        default:
          Bn(s, f, l);
      }
      t = t.sibling;
    }
  }
  function zs(e, t) {
    var l = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (l = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== l && (e != null && e.refCount++, l != null && ai(l));
  }
  function Os(e, t) {
    (e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && ai(e));
  }
  function on(e, t, l, i) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) dm(e, t, l, i), (t = t.sibling);
  }
  function dm(e, t, l, i) {
    var s = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        on(e, t, l, i), s & 2048 && gi(9, t);
        break;
      case 1:
        on(e, t, l, i);
        break;
      case 3:
        on(e, t, l, i),
          s & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && ai(e)));
        break;
      case 12:
        if (s & 2048) {
          on(e, t, l, i), (e = t.stateNode);
          try {
            var f = t.memoizedProps,
              g = f.id,
              x = f.onPostCommit;
            typeof x == "function" &&
              x(
                g,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0
              );
          } catch (A) {
            Ue(t, t.return, A);
          }
        } else on(e, t, l, i);
        break;
      case 31:
        on(e, t, l, i);
        break;
      case 13:
        on(e, t, l, i);
        break;
      case 23:
        break;
      case 22:
        (f = t.stateNode),
          (g = t.alternate),
          t.memoizedState !== null
            ? f._visibility & 2
              ? on(e, t, l, i)
              : vi(e, t)
            : f._visibility & 2
            ? on(e, t, l, i)
            : ((f._visibility |= 2),
              ga(e, t, l, i, (t.subtreeFlags & 10256) !== 0 || !1)),
          s & 2048 && zs(g, t);
        break;
      case 24:
        on(e, t, l, i), s & 2048 && Os(t.alternate, t);
        break;
      default:
        on(e, t, l, i);
    }
  }
  function ga(e, t, l, i, s) {
    for (
      s = s && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;

    ) {
      var f = e,
        g = t,
        x = l,
        A = i,
        L = g.flags;
      switch (g.tag) {
        case 0:
        case 11:
        case 15:
          ga(f, g, x, A, s), gi(8, g);
          break;
        case 23:
          break;
        case 22:
          var X = g.stateNode;
          g.memoizedState !== null
            ? X._visibility & 2
              ? ga(f, g, x, A, s)
              : vi(f, g)
            : ((X._visibility |= 2), ga(f, g, x, A, s)),
            s && L & 2048 && zs(g.alternate, g);
          break;
        case 24:
          ga(f, g, x, A, s), s && L & 2048 && Os(g.alternate, g);
          break;
        default:
          ga(f, g, x, A, s);
      }
      t = t.sibling;
    }
  }
  function vi(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e,
          i = t,
          s = i.flags;
        switch (i.tag) {
          case 22:
            vi(l, i), s & 2048 && zs(i.alternate, i);
            break;
          case 24:
            vi(l, i), s & 2048 && Os(i.alternate, i);
            break;
          default:
            vi(l, i);
        }
        t = t.sibling;
      }
  }
  var xi = 8192;
  function ba(e, t, l) {
    if (e.subtreeFlags & xi)
      for (e = e.child; e !== null; ) mm(e, t, l), (e = e.sibling);
  }
  function mm(e, t, l) {
    switch (e.tag) {
      case 26:
        ba(e, t, l),
          e.flags & xi &&
            e.memoizedState !== null &&
            Sb(l, un, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        ba(e, t, l);
        break;
      case 3:
      case 4:
        var i = un;
        (un = su(e.stateNode.containerInfo)), ba(e, t, l), (un = i);
        break;
      case 22:
        e.memoizedState === null &&
          ((i = e.alternate),
          i !== null && i.memoizedState !== null
            ? ((i = xi), (xi = 16777216), ba(e, t, l), (xi = i))
            : ba(e, t, l));
        break;
      default:
        ba(e, t, l);
    }
  }
  function pm(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do (t = e.sibling), (e.sibling = null), (e = t);
      while (e !== null);
    }
  }
  function Si(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var i = t[l];
          (ct = i), gm(i, e);
        }
      pm(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) ym(e), (e = e.sibling);
  }
  function ym(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Si(e), e.flags & 2048 && ll(9, e, e.return);
        break;
      case 3:
        Si(e);
        break;
      case 12:
        Si(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), Ir(e))
          : Si(e);
        break;
      default:
        Si(e);
    }
  }
  function Ir(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var i = t[l];
          (ct = i), gm(i, e);
        }
      pm(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          ll(8, t, t.return), Ir(t);
          break;
        case 22:
          (l = t.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), Ir(t));
          break;
        default:
          Ir(t);
      }
      e = e.sibling;
    }
  }
  function gm(e, t) {
    for (; ct !== null; ) {
      var l = ct;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          ll(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var i = l.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          ai(l.memoizedState.cache);
      }
      if (((i = l.child), i !== null)) (i.return = l), (ct = i);
      else
        e: for (l = e; ct !== null; ) {
          i = ct;
          var s = i.sibling,
            f = i.return;
          if ((um(i), i === l)) {
            ct = null;
            break e;
          }
          if (s !== null) {
            (s.return = f), (ct = s);
            break e;
          }
          ct = f;
        }
    }
  }
  var L1 = {
      getCacheForType: function (e) {
        var t = dt(nt),
          l = t.data.get(e);
        return l === void 0 && ((l = e()), t.data.set(e, l)), l;
      },
      cacheSignal: function () {
        return dt(nt).controller.signal;
      },
    },
    U1 = typeof WeakMap == "function" ? WeakMap : Map,
    Me = 0,
    Xe = null,
    Ae = null,
    Oe = 0,
    Le = 0,
    qt = null,
    al = !1,
    va = !1,
    Rs = !1,
    Hn = 0,
    Pe = 0,
    il = 0,
    Ll = 0,
    Ns = 0,
    Yt = 0,
    xa = 0,
    Ei = null,
    Ot = null,
    _s = !1,
    $r = 0,
    bm = 0,
    Pr = 1 / 0,
    Wr = null,
    rl = null,
    ot = 0,
    ul = null,
    Sa = null,
    qn = 0,
    Ds = 0,
    Ms = null,
    vm = null,
    wi = 0,
    ks = null;
  function Vt() {
    return (Me & 2) !== 0 && Oe !== 0 ? Oe & -Oe : M.T !== null ? qs() : jf();
  }
  function xm() {
    if (Yt === 0)
      if ((Oe & 536870912) === 0 || Ne) {
        var e = ur;
        (ur <<= 1), (ur & 3932160) === 0 && (ur = 262144), (Yt = e);
      } else Yt = 536870912;
    return (e = Bt.current), e !== null && (e.flags |= 32), Yt;
  }
  function Rt(e, t, l) {
    ((e === Xe && (Le === 2 || Le === 9)) || e.cancelPendingCommit !== null) &&
      (Ea(e, 0), ol(e, Oe, Yt, !1)),
      Ga(e, l),
      ((Me & 2) === 0 || e !== Xe) &&
        (e === Xe &&
          ((Me & 2) === 0 && (Ll |= l), Pe === 4 && ol(e, Oe, Yt, !1)),
        mn(e));
  }
  function Sm(e, t, l) {
    if ((Me & 6) !== 0) throw Error(u(327));
    var i = (!l && (t & 127) === 0 && (t & e.expiredLanes) === 0) || Xa(e, t),
      s = i ? q1(e, t) : Ls(e, t, !0),
      f = i;
    do {
      if (s === 0) {
        va && !i && ol(e, t, 0, !1);
        break;
      } else {
        if (((l = e.current.alternate), f && !B1(l))) {
          (s = Ls(e, t, !1)), (f = !1);
          continue;
        }
        if (s === 2) {
          if (((f = t), e.errorRecoveryDisabledLanes & f)) var g = 0;
          else
            (g = e.pendingLanes & -536870913),
              (g = g !== 0 ? g : g & 536870912 ? 536870912 : 0);
          if (g !== 0) {
            t = g;
            e: {
              var x = e;
              s = Ei;
              var A = x.current.memoizedState.isDehydrated;
              if ((A && (Ea(x, g).flags |= 256), (g = Ls(x, g, !1)), g !== 2)) {
                if (Rs && !A) {
                  (x.errorRecoveryDisabledLanes |= f), (Ll |= f), (s = 4);
                  break e;
                }
                (f = Ot),
                  (Ot = s),
                  f !== null && (Ot === null ? (Ot = f) : Ot.push.apply(Ot, f));
              }
              s = g;
            }
            if (((f = !1), s !== 2)) continue;
          }
        }
        if (s === 1) {
          Ea(e, 0), ol(e, t, 0, !0);
          break;
        }
        e: {
          switch (((i = e), (f = s), f)) {
            case 0:
            case 1:
              throw Error(u(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ol(i, t, Yt, !al);
              break e;
            case 2:
              Ot = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(u(329));
          }
          if ((t & 62914560) === t && ((s = $r + 300 - vt()), 10 < s)) {
            if ((ol(i, t, Yt, !al), sr(i, 0, !0) !== 0)) break e;
            (qn = t),
              (i.timeoutHandle = Pm(
                Em.bind(
                  null,
                  i,
                  l,
                  Ot,
                  Wr,
                  _s,
                  t,
                  Yt,
                  Ll,
                  xa,
                  al,
                  f,
                  "Throttled",
                  -0,
                  0
                ),
                s
              ));
            break e;
          }
          Em(i, l, Ot, Wr, _s, t, Yt, Ll, xa, al, f, null, -0, 0);
        }
      }
      break;
    } while (!0);
    mn(e);
  }
  function Em(e, t, l, i, s, f, g, x, A, L, X, F, U, H) {
    if (
      ((e.timeoutHandle = -1),
      (F = t.subtreeFlags),
      F & 8192 || (F & 16785408) === 16785408)
    ) {
      (F = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: An,
      }),
        mm(t, f, F);
      var re =
        (f & 62914560) === f ? $r - vt() : (f & 4194048) === f ? bm - vt() : 0;
      if (((re = Eb(F, re)), re !== null)) {
        (qn = f),
          (e.cancelPendingCommit = re(
            Nm.bind(null, e, t, f, l, i, s, g, x, A, X, F, null, U, H)
          )),
          ol(e, f, g, !L);
        return;
      }
    }
    Nm(e, t, f, l, i, s, g, x, A);
  }
  function B1(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        t.flags & 16384 &&
        ((l = t.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var i = 0; i < l.length; i++) {
          var s = l[i],
            f = s.getSnapshot;
          s = s.value;
          try {
            if (!Lt(f(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = t.child), t.subtreeFlags & 16384 && l !== null))
        (l.return = t), (t = l);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function ol(e, t, l, i) {
    (t &= ~Ns),
      (t &= ~Ll),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      i && (e.warmLanes |= t),
      (i = e.expirationTimes);
    for (var s = t; 0 < s; ) {
      var f = 31 - Ve(s),
        g = 1 << f;
      (i[f] = -1), (s &= ~g);
    }
    l !== 0 && Df(e, l, t);
  }
  function eu() {
    return (Me & 6) === 0 ? (Ti(0), !1) : !0;
  }
  function js() {
    if (Ae !== null) {
      if (Le === 0) var e = Ae.return;
      else (e = Ae), (Rn = zl = null), $o(e), (ha = null), (ri = 0), (e = Ae);
      for (; e !== null; ) Wd(e.alternate, e), (e = e.return);
      Ae = null;
    }
  }
  function Ea(e, t) {
    var l = e.timeoutHandle;
    l !== -1 && ((e.timeoutHandle = -1), ab(l)),
      (l = e.cancelPendingCommit),
      l !== null && ((e.cancelPendingCommit = null), l()),
      (qn = 0),
      js(),
      (Xe = e),
      (Ae = l = zn(e.current, null)),
      (Oe = t),
      (Le = 0),
      (qt = null),
      (al = !1),
      (va = Xa(e, t)),
      (Rs = !1),
      (xa = Yt = Ns = Ll = il = Pe = 0),
      (Ot = Ei = null),
      (_s = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var i = e.entangledLanes;
    if (i !== 0)
      for (e = e.entanglements, i &= t; 0 < i; ) {
        var s = 31 - Ve(i),
          f = 1 << s;
        (t |= e[s]), (i &= ~f);
      }
    return (Hn = t), Sr(), l;
  }
  function wm(e, t) {
    (be = null),
      (M.H = mi),
      t === fa || t === Rr
        ? ((t = Hh()), (Le = 3))
        : t === Ho
        ? ((t = Hh()), (Le = 4))
        : (Le =
            t === ds
              ? 8
              : t !== null &&
                typeof t == "object" &&
                typeof t.then == "function"
              ? 6
              : 1),
      (qt = t),
      Ae === null && ((Pe = 1), Xr(e, Jt(t, e.current)));
  }
  function Tm() {
    var e = Bt.current;
    return e === null
      ? !0
      : (Oe & 4194048) === Oe
      ? Wt === null
      : (Oe & 62914560) === Oe || (Oe & 536870912) !== 0
      ? e === Wt
      : !1;
  }
  function Am() {
    var e = M.H;
    return (M.H = mi), e === null ? mi : e;
  }
  function Cm() {
    var e = M.A;
    return (M.A = L1), e;
  }
  function tu() {
    (Pe = 4),
      al || ((Oe & 4194048) !== Oe && Bt.current !== null) || (va = !0),
      ((il & 134217727) === 0 && (Ll & 134217727) === 0) ||
        Xe === null ||
        ol(Xe, Oe, Yt, !1);
  }
  function Ls(e, t, l) {
    var i = Me;
    Me |= 2;
    var s = Am(),
      f = Cm();
    (Xe !== e || Oe !== t) && ((Wr = null), Ea(e, t)), (t = !1);
    var g = Pe;
    e: do
      try {
        if (Le !== 0 && Ae !== null) {
          var x = Ae,
            A = qt;
          switch (Le) {
            case 8:
              js(), (g = 6);
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Bt.current === null && (t = !0);
              var L = Le;
              if (((Le = 0), (qt = null), wa(e, x, A, L), l && va)) {
                g = 0;
                break e;
              }
              break;
            default:
              (L = Le), (Le = 0), (qt = null), wa(e, x, A, L);
          }
        }
        H1(), (g = Pe);
        break;
      } catch (X) {
        wm(e, X);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (Rn = zl = null),
      (Me = i),
      (M.H = s),
      (M.A = f),
      Ae === null && ((Xe = null), (Oe = 0), Sr()),
      g
    );
  }
  function H1() {
    for (; Ae !== null; ) zm(Ae);
  }
  function q1(e, t) {
    var l = Me;
    Me |= 2;
    var i = Am(),
      s = Cm();
    Xe !== e || Oe !== t
      ? ((Wr = null), (Pr = vt() + 500), Ea(e, t))
      : (va = Xa(e, t));
    e: do
      try {
        if (Le !== 0 && Ae !== null) {
          t = Ae;
          var f = qt;
          t: switch (Le) {
            case 1:
              (Le = 0), (qt = null), wa(e, t, f, 1);
              break;
            case 2:
            case 9:
              if (Uh(f)) {
                (Le = 0), (qt = null), Om(t);
                break;
              }
              (t = function () {
                (Le !== 2 && Le !== 9) || Xe !== e || (Le = 7), mn(e);
              }),
                f.then(t, t);
              break e;
            case 3:
              Le = 7;
              break e;
            case 4:
              Le = 5;
              break e;
            case 7:
              Uh(f)
                ? ((Le = 0), (qt = null), Om(t))
                : ((Le = 0), (qt = null), wa(e, t, f, 7));
              break;
            case 5:
              var g = null;
              switch (Ae.tag) {
                case 26:
                  g = Ae.memoizedState;
                case 5:
                case 27:
                  var x = Ae;
                  if (g ? dp(g) : x.stateNode.complete) {
                    (Le = 0), (qt = null);
                    var A = x.sibling;
                    if (A !== null) Ae = A;
                    else {
                      var L = x.return;
                      L !== null ? ((Ae = L), nu(L)) : (Ae = null);
                    }
                    break t;
                  }
              }
              (Le = 0), (qt = null), wa(e, t, f, 5);
              break;
            case 6:
              (Le = 0), (qt = null), wa(e, t, f, 6);
              break;
            case 8:
              js(), (Pe = 6);
              break e;
            default:
              throw Error(u(462));
          }
        }
        Y1();
        break;
      } catch (X) {
        wm(e, X);
      }
    while (!0);
    return (
      (Rn = zl = null),
      (M.H = i),
      (M.A = s),
      (Me = l),
      Ae !== null ? 0 : ((Xe = null), (Oe = 0), Sr(), Pe)
    );
  }
  function Y1() {
    for (; Ae !== null && !Ku(); ) zm(Ae);
  }
  function zm(e) {
    var t = $d(e.alternate, e, Hn);
    (e.memoizedProps = e.pendingProps), t === null ? nu(e) : (Ae = t);
  }
  function Om(e) {
    var t = e,
      l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Qd(l, t, t.pendingProps, t.type, void 0, Oe);
        break;
      case 11:
        t = Qd(l, t, t.pendingProps, t.type.render, t.ref, Oe);
        break;
      case 5:
        $o(t);
      default:
        Wd(l, t), (t = Ae = Ch(t, Hn)), (t = $d(l, t, Hn));
    }
    (e.memoizedProps = e.pendingProps), t === null ? nu(e) : (Ae = t);
  }
  function wa(e, t, l, i) {
    (Rn = zl = null), $o(t), (ha = null), (ri = 0);
    var s = t.return;
    try {
      if (R1(e, s, t, l, Oe)) {
        (Pe = 1), Xr(e, Jt(l, e.current)), (Ae = null);
        return;
      }
    } catch (f) {
      if (s !== null) throw ((Ae = s), f);
      (Pe = 1), Xr(e, Jt(l, e.current)), (Ae = null);
      return;
    }
    t.flags & 32768
      ? (Ne || i === 1
          ? (e = !0)
          : va || (Oe & 536870912) !== 0
          ? (e = !1)
          : ((al = e = !0),
            (i === 2 || i === 9 || i === 3 || i === 6) &&
              ((i = Bt.current),
              i !== null && i.tag === 13 && (i.flags |= 16384))),
        Rm(t, e))
      : nu(t);
  }
  function nu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Rm(t, al);
        return;
      }
      e = t.return;
      var l = D1(t.alternate, t, Hn);
      if (l !== null) {
        Ae = l;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Ae = t;
        return;
      }
      Ae = t = e;
    } while (t !== null);
    Pe === 0 && (Pe = 5);
  }
  function Rm(e, t) {
    do {
      var l = M1(e.alternate, e);
      if (l !== null) {
        (l.flags &= 32767), (Ae = l);
        return;
      }
      if (
        ((l = e.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        Ae = e;
        return;
      }
      Ae = e = l;
    } while (e !== null);
    (Pe = 6), (Ae = null);
  }
  function Nm(e, t, l, i, s, f, g, x, A) {
    e.cancelPendingCommit = null;
    do lu();
    while (ot !== 0);
    if ((Me & 6) !== 0) throw Error(u(327));
    if (t !== null) {
      if (t === e.current) throw Error(u(177));
      if (
        ((f = t.lanes | t.childLanes),
        (f |= To),
        x0(e, l, f, g, x, A),
        e === Xe && ((Ae = Xe = null), (Oe = 0)),
        (Sa = t),
        (ul = e),
        (qn = l),
        (Ds = f),
        (Ms = s),
        (vm = i),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            Q1(pe, function () {
              return jm(), null;
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (i = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || i)
      ) {
        (i = M.T), (M.T = null), (s = K.p), (K.p = 2), (g = Me), (Me |= 4);
        try {
          k1(e, t, l);
        } finally {
          (Me = g), (K.p = s), (M.T = i);
        }
      }
      (ot = 1), _m(), Dm(), Mm();
    }
  }
  function _m() {
    if (ot === 1) {
      ot = 0;
      var e = ul,
        t = Sa,
        l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        (l = M.T), (M.T = null);
        var i = K.p;
        K.p = 2;
        var s = Me;
        Me |= 4;
        try {
          fm(t, e);
          var f = Ks,
            g = gh(e.containerInfo),
            x = f.focusedElem,
            A = f.selectionRange;
          if (
            g !== x &&
            x &&
            x.ownerDocument &&
            yh(x.ownerDocument.documentElement, x)
          ) {
            if (A !== null && vo(x)) {
              var L = A.start,
                X = A.end;
              if ((X === void 0 && (X = L), "selectionStart" in x))
                (x.selectionStart = L),
                  (x.selectionEnd = Math.min(X, x.value.length));
              else {
                var F = x.ownerDocument || document,
                  U = (F && F.defaultView) || window;
                if (U.getSelection) {
                  var H = U.getSelection(),
                    re = x.textContent.length,
                    he = Math.min(A.start, re),
                    Ye = A.end === void 0 ? he : Math.min(A.end, re);
                  !H.extend && he > Ye && ((g = Ye), (Ye = he), (he = g));
                  var D = ph(x, he),
                    z = ph(x, Ye);
                  if (
                    D &&
                    z &&
                    (H.rangeCount !== 1 ||
                      H.anchorNode !== D.node ||
                      H.anchorOffset !== D.offset ||
                      H.focusNode !== z.node ||
                      H.focusOffset !== z.offset)
                  ) {
                    var j = F.createRange();
                    j.setStart(D.node, D.offset),
                      H.removeAllRanges(),
                      he > Ye
                        ? (H.addRange(j), H.extend(z.node, z.offset))
                        : (j.setEnd(z.node, z.offset), H.addRange(j));
                  }
                }
              }
            }
            for (F = [], H = x; (H = H.parentNode); )
              H.nodeType === 1 &&
                F.push({ element: H, left: H.scrollLeft, top: H.scrollTop });
            for (
              typeof x.focus == "function" && x.focus(), x = 0;
              x < F.length;
              x++
            ) {
              var Q = F[x];
              (Q.element.scrollLeft = Q.left), (Q.element.scrollTop = Q.top);
            }
          }
          (pu = !!Fs), (Ks = Fs = null);
        } finally {
          (Me = s), (K.p = i), (M.T = l);
        }
      }
      (e.current = t), (ot = 2);
    }
  }
  function Dm() {
    if (ot === 2) {
      ot = 0;
      var e = ul,
        t = Sa,
        l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        (l = M.T), (M.T = null);
        var i = K.p;
        K.p = 2;
        var s = Me;
        Me |= 4;
        try {
          rm(e, t.alternate, t);
        } finally {
          (Me = s), (K.p = i), (M.T = l);
        }
      }
      ot = 3;
    }
  }
  function Mm() {
    if (ot === 4 || ot === 3) {
      (ot = 0), Ju();
      var e = ul,
        t = Sa,
        l = qn,
        i = vm;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (ot = 5)
        : ((ot = 0), (Sa = ul = null), km(e, e.pendingLanes));
      var s = e.pendingLanes;
      if (
        (s === 0 && (rl = null),
        Wu(l),
        (t = t.stateNode),
        ut && typeof ut.onCommitFiberRoot == "function")
      )
        try {
          ut.onCommitFiberRoot(xt, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (i !== null) {
        (t = M.T), (s = K.p), (K.p = 2), (M.T = null);
        try {
          for (var f = e.onRecoverableError, g = 0; g < i.length; g++) {
            var x = i[g];
            f(x.value, { componentStack: x.stack });
          }
        } finally {
          (M.T = t), (K.p = s);
        }
      }
      (qn & 3) !== 0 && lu(),
        mn(e),
        (s = e.pendingLanes),
        (l & 261930) !== 0 && (s & 42) !== 0
          ? e === ks
            ? wi++
            : ((wi = 0), (ks = e))
          : (wi = 0),
        Ti(0);
    }
  }
  function km(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), ai(t)));
  }
  function lu() {
    return _m(), Dm(), Mm(), jm();
  }
  function jm() {
    if (ot !== 5) return !1;
    var e = ul,
      t = Ds;
    Ds = 0;
    var l = Wu(qn),
      i = M.T,
      s = K.p;
    try {
      (K.p = 32 > l ? 32 : l), (M.T = null), (l = Ms), (Ms = null);
      var f = ul,
        g = qn;
      if (((ot = 0), (Sa = ul = null), (qn = 0), (Me & 6) !== 0))
        throw Error(u(331));
      var x = Me;
      if (
        ((Me |= 4),
        ym(f.current),
        dm(f, f.current, g, l),
        (Me = x),
        Ti(0, !1),
        ut && typeof ut.onPostCommitFiberRoot == "function")
      )
        try {
          ut.onPostCommitFiberRoot(xt, f);
        } catch {}
      return !0;
    } finally {
      (K.p = s), (M.T = i), km(e, t);
    }
  }
  function Lm(e, t, l) {
    (t = Jt(l, t)),
      (t = hs(e.stateNode, t, 2)),
      (e = el(e, t, 2)),
      e !== null && (Ga(e, 2), mn(e));
  }
  function Ue(e, t, l) {
    if (e.tag === 3) Lm(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Lm(t, e, l);
          break;
        } else if (t.tag === 1) {
          var i = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof i.componentDidCatch == "function" &&
              (rl === null || !rl.has(i)))
          ) {
            (e = Jt(l, e)),
              (l = Ud(2)),
              (i = el(t, l, 2)),
              i !== null && (Bd(l, i, t, e), Ga(i, 2), mn(i));
            break;
          }
        }
        t = t.return;
      }
  }
  function Us(e, t, l) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new U1();
      var s = new Set();
      i.set(t, s);
    } else (s = i.get(t)), s === void 0 && ((s = new Set()), i.set(t, s));
    s.has(l) ||
      ((Rs = !0), s.add(l), (e = V1.bind(null, e, t, l)), t.then(e, e));
  }
  function V1(e, t, l) {
    var i = e.pingCache;
    i !== null && i.delete(t),
      (e.pingedLanes |= e.suspendedLanes & l),
      (e.warmLanes &= ~l),
      Xe === e &&
        (Oe & l) === l &&
        (Pe === 4 || (Pe === 3 && (Oe & 62914560) === Oe && 300 > vt() - $r)
          ? (Me & 2) === 0 && Ea(e, 0)
          : (Ns |= l),
        xa === Oe && (xa = 0)),
      mn(e);
  }
  function Um(e, t) {
    t === 0 && (t = _f()), (e = Tl(e, t)), e !== null && (Ga(e, t), mn(e));
  }
  function X1(e) {
    var t = e.memoizedState,
      l = 0;
    t !== null && (l = t.retryLane), Um(e, l);
  }
  function G1(e, t) {
    var l = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var i = e.stateNode,
          s = e.memoizedState;
        s !== null && (l = s.retryLane);
        break;
      case 19:
        i = e.stateNode;
        break;
      case 22:
        i = e.stateNode._retryCache;
        break;
      default:
        throw Error(u(314));
    }
    i !== null && i.delete(t), Um(e, l);
  }
  function Q1(e, t) {
    return Gl(e, t);
  }
  var au = null,
    Ta = null,
    Bs = !1,
    iu = !1,
    Hs = !1,
    sl = 0;
  function mn(e) {
    e !== Ta &&
      e.next === null &&
      (Ta === null ? (au = Ta = e) : (Ta = Ta.next = e)),
      (iu = !0),
      Bs || ((Bs = !0), F1());
  }
  function Ti(e, t) {
    if (!Hs && iu) {
      Hs = !0;
      do
        for (var l = !1, i = au; i !== null; ) {
          if (e !== 0) {
            var s = i.pendingLanes;
            if (s === 0) var f = 0;
            else {
              var g = i.suspendedLanes,
                x = i.pingedLanes;
              (f = (1 << (31 - Ve(42 | e) + 1)) - 1),
                (f &= s & ~(g & ~x)),
                (f = f & 201326741 ? (f & 201326741) | 1 : f ? f | 2 : 0);
            }
            f !== 0 && ((l = !0), Ym(i, f));
          } else
            (f = Oe),
              (f = sr(
                i,
                i === Xe ? f : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== -1
              )),
              (f & 3) === 0 || Xa(i, f) || ((l = !0), Ym(i, f));
          i = i.next;
        }
      while (l);
      Hs = !1;
    }
  }
  function Z1() {
    Bm();
  }
  function Bm() {
    iu = Bs = !1;
    var e = 0;
    sl !== 0 && lb() && (e = sl);
    for (var t = vt(), l = null, i = au; i !== null; ) {
      var s = i.next,
        f = Hm(i, t);
      f === 0
        ? ((i.next = null),
          l === null ? (au = s) : (l.next = s),
          s === null && (Ta = l))
        : ((l = i), (e !== 0 || (f & 3) !== 0) && (iu = !0)),
        (i = s);
    }
    (ot !== 0 && ot !== 5) || Ti(e), sl !== 0 && (sl = 0);
  }
  function Hm(e, t) {
    for (
      var l = e.suspendedLanes,
        i = e.pingedLanes,
        s = e.expirationTimes,
        f = e.pendingLanes & -62914561;
      0 < f;

    ) {
      var g = 31 - Ve(f),
        x = 1 << g,
        A = s[g];
      A === -1
        ? ((x & l) === 0 || (x & i) !== 0) && (s[g] = v0(x, t))
        : A <= t && (e.expiredLanes |= x),
        (f &= ~x);
    }
    if (
      ((t = Xe),
      (l = Oe),
      (l = sr(
        e,
        e === t ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      (i = e.callbackNode),
      l === 0 ||
        (e === t && (Le === 2 || Le === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        i !== null && i !== null && Va(i),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((l & 3) === 0 || Xa(e, l)) {
      if (((t = l & -l), t === e.callbackPriority)) return t;
      switch ((i !== null && Va(i), Wu(l))) {
        case 2:
        case 8:
          l = P;
          break;
        case 32:
          l = pe;
          break;
        case 268435456:
          l = je;
          break;
        default:
          l = pe;
      }
      return (
        (i = qm.bind(null, e)),
        (l = Gl(l, i)),
        (e.callbackPriority = t),
        (e.callbackNode = l),
        t
      );
    }
    return (
      i !== null && i !== null && Va(i),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function qm(e, t) {
    if (ot !== 0 && ot !== 5)
      return (e.callbackNode = null), (e.callbackPriority = 0), null;
    var l = e.callbackNode;
    if (lu() && e.callbackNode !== l) return null;
    var i = Oe;
    return (
      (i = sr(
        e,
        e === Xe ? i : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      i === 0
        ? null
        : (Sm(e, i, t),
          Hm(e, vt()),
          e.callbackNode != null && e.callbackNode === l
            ? qm.bind(null, e)
            : null)
    );
  }
  function Ym(e, t) {
    if (lu()) return null;
    Sm(e, t, !0);
  }
  function F1() {
    ib(function () {
      (Me & 6) !== 0 ? Gl(G, Z1) : Bm();
    });
  }
  function qs() {
    if (sl === 0) {
      var e = sa;
      e === 0 && ((e = rr), (rr <<= 1), (rr & 261888) === 0 && (rr = 256)),
        (sl = e);
    }
    return sl;
  }
  function Vm(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
      ? e
      : dr("" + e);
  }
  function Xm(e, t) {
    var l = t.ownerDocument.createElement("input");
    return (
      (l.name = t.name),
      (l.value = t.value),
      e.id && l.setAttribute("form", e.id),
      t.parentNode.insertBefore(l, t),
      (e = new FormData(e)),
      l.parentNode.removeChild(l),
      e
    );
  }
  function K1(e, t, l, i, s) {
    if (t === "submit" && l && l.stateNode === s) {
      var f = Vm((s[wt] || null).action),
        g = i.submitter;
      g &&
        ((t = (t = g[wt] || null)
          ? Vm(t.formAction)
          : g.getAttribute("formAction")),
        t !== null && ((f = t), (g = null)));
      var x = new gr("action", "action", null, i, s);
      e.push({
        event: x,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (i.defaultPrevented) {
                if (sl !== 0) {
                  var A = g ? Xm(s, g) : new FormData(s);
                  rs(
                    l,
                    { pending: !0, data: A, method: s.method, action: f },
                    null,
                    A
                  );
                }
              } else
                typeof f == "function" &&
                  (x.preventDefault(),
                  (A = g ? Xm(s, g) : new FormData(s)),
                  rs(
                    l,
                    { pending: !0, data: A, method: s.method, action: f },
                    f,
                    A
                  ));
            },
            currentTarget: s,
          },
        ],
      });
    }
  }
  for (var Ys = 0; Ys < wo.length; Ys++) {
    var Vs = wo[Ys],
      J1 = Vs.toLowerCase(),
      I1 = Vs[0].toUpperCase() + Vs.slice(1);
    rn(J1, "on" + I1);
  }
  rn(xh, "onAnimationEnd"),
    rn(Sh, "onAnimationIteration"),
    rn(Eh, "onAnimationStart"),
    rn("dblclick", "onDoubleClick"),
    rn("focusin", "onFocus"),
    rn("focusout", "onBlur"),
    rn(h1, "onTransitionRun"),
    rn(d1, "onTransitionStart"),
    rn(m1, "onTransitionCancel"),
    rn(wh, "onTransitionEnd"),
    Jl("onMouseEnter", ["mouseout", "mouseover"]),
    Jl("onMouseLeave", ["mouseout", "mouseover"]),
    Jl("onPointerEnter", ["pointerout", "pointerover"]),
    Jl("onPointerLeave", ["pointerout", "pointerover"]),
    xl(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    xl(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    xl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    xl(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    xl(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    xl(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Ai =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    $1 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Ai)
    );
  function Gm(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var i = e[l],
        s = i.event;
      i = i.listeners;
      e: {
        var f = void 0;
        if (t)
          for (var g = i.length - 1; 0 <= g; g--) {
            var x = i[g],
              A = x.instance,
              L = x.currentTarget;
            if (((x = x.listener), A !== f && s.isPropagationStopped()))
              break e;
            (f = x), (s.currentTarget = L);
            try {
              f(s);
            } catch (X) {
              xr(X);
            }
            (s.currentTarget = null), (f = A);
          }
        else
          for (g = 0; g < i.length; g++) {
            if (
              ((x = i[g]),
              (A = x.instance),
              (L = x.currentTarget),
              (x = x.listener),
              A !== f && s.isPropagationStopped())
            )
              break e;
            (f = x), (s.currentTarget = L);
            try {
              f(s);
            } catch (X) {
              xr(X);
            }
            (s.currentTarget = null), (f = A);
          }
      }
    }
  }
  function Ce(e, t) {
    var l = t[eo];
    l === void 0 && (l = t[eo] = new Set());
    var i = e + "__bubble";
    l.has(i) || (Qm(t, e, 2, !1), l.add(i));
  }
  function Xs(e, t, l) {
    var i = 0;
    t && (i |= 4), Qm(l, e, i, t);
  }
  var ru = "_reactListening" + Math.random().toString(36).slice(2);
  function Gs(e) {
    if (!e[ru]) {
      (e[ru] = !0),
        Bf.forEach(function (l) {
          l !== "selectionchange" && ($1.has(l) || Xs(l, !1, e), Xs(l, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ru] || ((t[ru] = !0), Xs("selectionchange", !1, t));
    }
  }
  function Qm(e, t, l, i) {
    switch (xp(t)) {
      case 2:
        var s = Ab;
        break;
      case 8:
        s = Cb;
        break;
      default:
        s = ic;
    }
    (l = s.bind(null, t, l, e)),
      (s = void 0),
      !so ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (s = !0),
      i
        ? s !== void 0
          ? e.addEventListener(t, l, { capture: !0, passive: s })
          : e.addEventListener(t, l, !0)
        : s !== void 0
        ? e.addEventListener(t, l, { passive: s })
        : e.addEventListener(t, l, !1);
  }
  function Qs(e, t, l, i, s) {
    var f = i;
    if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
      e: for (;;) {
        if (i === null) return;
        var g = i.tag;
        if (g === 3 || g === 4) {
          var x = i.stateNode.containerInfo;
          if (x === s) break;
          if (g === 4)
            for (g = i.return; g !== null; ) {
              var A = g.tag;
              if ((A === 3 || A === 4) && g.stateNode.containerInfo === s)
                return;
              g = g.return;
            }
          for (; x !== null; ) {
            if (((g = Zl(x)), g === null)) return;
            if (((A = g.tag), A === 5 || A === 6 || A === 26 || A === 27)) {
              i = f = g;
              continue e;
            }
            x = x.parentNode;
          }
        }
        i = i.return;
      }
    If(function () {
      var L = f,
        X = uo(l),
        F = [];
      e: {
        var U = Th.get(e);
        if (U !== void 0) {
          var H = gr,
            re = e;
          switch (e) {
            case "keypress":
              if (pr(l) === 0) break e;
            case "keydown":
            case "keyup":
              H = G0;
              break;
            case "focusin":
              (re = "focus"), (H = mo);
              break;
            case "focusout":
              (re = "blur"), (H = mo);
              break;
            case "beforeblur":
            case "afterblur":
              H = mo;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              H = Wf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              H = D0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              H = F0;
              break;
            case xh:
            case Sh:
            case Eh:
              H = j0;
              break;
            case wh:
              H = J0;
              break;
            case "scroll":
            case "scrollend":
              H = N0;
              break;
            case "wheel":
              H = $0;
              break;
            case "copy":
            case "cut":
            case "paste":
              H = U0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              H = th;
              break;
            case "toggle":
            case "beforetoggle":
              H = W0;
          }
          var he = (t & 4) !== 0,
            Ye = !he && (e === "scroll" || e === "scrollend"),
            D = he ? (U !== null ? U + "Capture" : null) : U;
          he = [];
          for (var z = L, j; z !== null; ) {
            var Q = z;
            if (
              ((j = Q.stateNode),
              (Q = Q.tag),
              (Q !== 5 && Q !== 26 && Q !== 27) ||
                j === null ||
                D === null ||
                ((Q = Fa(z, D)), Q != null && he.push(Ci(z, Q, j))),
              Ye)
            )
              break;
            z = z.return;
          }
          0 < he.length &&
            ((U = new H(U, re, null, l, X)),
            F.push({ event: U, listeners: he }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((U = e === "mouseover" || e === "pointerover"),
            (H = e === "mouseout" || e === "pointerout"),
            U &&
              l !== ro &&
              (re = l.relatedTarget || l.fromElement) &&
              (Zl(re) || re[Ql]))
          )
            break e;
          if (
            (H || U) &&
            ((U =
              X.window === X
                ? X
                : (U = X.ownerDocument)
                ? U.defaultView || U.parentWindow
                : window),
            H
              ? ((re = l.relatedTarget || l.toElement),
                (H = L),
                (re = re ? Zl(re) : null),
                re !== null &&
                  ((Ye = c(re)),
                  (he = re.tag),
                  re !== Ye || (he !== 5 && he !== 27 && he !== 6)) &&
                  (re = null))
              : ((H = null), (re = L)),
            H !== re)
          ) {
            if (
              ((he = Wf),
              (Q = "onMouseLeave"),
              (D = "onMouseEnter"),
              (z = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((he = th),
                (Q = "onPointerLeave"),
                (D = "onPointerEnter"),
                (z = "pointer")),
              (Ye = H == null ? U : Za(H)),
              (j = re == null ? U : Za(re)),
              (U = new he(Q, z + "leave", H, l, X)),
              (U.target = Ye),
              (U.relatedTarget = j),
              (Q = null),
              Zl(X) === L &&
                ((he = new he(D, z + "enter", re, l, X)),
                (he.target = j),
                (he.relatedTarget = Ye),
                (Q = he)),
              (Ye = Q),
              H && re)
            )
              t: {
                for (he = P1, D = H, z = re, j = 0, Q = D; Q; Q = he(Q)) j++;
                Q = 0;
                for (var se = z; se; se = he(se)) Q++;
                for (; 0 < j - Q; ) (D = he(D)), j--;
                for (; 0 < Q - j; ) (z = he(z)), Q--;
                for (; j--; ) {
                  if (D === z || (z !== null && D === z.alternate)) {
                    he = D;
                    break t;
                  }
                  (D = he(D)), (z = he(z));
                }
                he = null;
              }
            else he = null;
            H !== null && Zm(F, U, H, he, !1),
              re !== null && Ye !== null && Zm(F, Ye, re, he, !0);
          }
        }
        e: {
          if (
            ((U = L ? Za(L) : window),
            (H = U.nodeName && U.nodeName.toLowerCase()),
            H === "select" || (H === "input" && U.type === "file"))
          )
            var _e = sh;
          else if (uh(U))
            if (ch) _e = s1;
            else {
              _e = u1;
              var ue = r1;
            }
          else
            (H = U.nodeName),
              !H ||
              H.toLowerCase() !== "input" ||
              (U.type !== "checkbox" && U.type !== "radio")
                ? L && io(L.elementType) && (_e = sh)
                : (_e = o1);
          if (_e && (_e = _e(e, L))) {
            oh(F, _e, l, X);
            break e;
          }
          ue && ue(e, U, L),
            e === "focusout" &&
              L &&
              U.type === "number" &&
              L.memoizedProps.value != null &&
              ao(U, "number", U.value);
        }
        switch (((ue = L ? Za(L) : window), e)) {
          case "focusin":
            (uh(ue) || ue.contentEditable === "true") &&
              ((ta = ue), (xo = L), (ti = null));
            break;
          case "focusout":
            ti = xo = ta = null;
            break;
          case "mousedown":
            So = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (So = !1), bh(F, l, X);
            break;
          case "selectionchange":
            if (f1) break;
          case "keydown":
          case "keyup":
            bh(F, l, X);
        }
        var Se;
        if (yo)
          e: {
            switch (e) {
              case "compositionstart":
                var Re = "onCompositionStart";
                break e;
              case "compositionend":
                Re = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Re = "onCompositionUpdate";
                break e;
            }
            Re = void 0;
          }
        else
          ea
            ? ih(e, l) && (Re = "onCompositionEnd")
            : e === "keydown" &&
              l.keyCode === 229 &&
              (Re = "onCompositionStart");
        Re &&
          (nh &&
            l.locale !== "ko" &&
            (ea || Re !== "onCompositionStart"
              ? Re === "onCompositionEnd" && ea && (Se = $f())
              : ((Fn = X),
                (co = "value" in Fn ? Fn.value : Fn.textContent),
                (ea = !0))),
          (ue = uu(L, Re)),
          0 < ue.length &&
            ((Re = new eh(Re, e, null, l, X)),
            F.push({ event: Re, listeners: ue }),
            Se
              ? (Re.data = Se)
              : ((Se = rh(l)), Se !== null && (Re.data = Se)))),
          (Se = t1 ? n1(e, l) : l1(e, l)) &&
            ((Re = uu(L, "onBeforeInput")),
            0 < Re.length &&
              ((ue = new eh("onBeforeInput", "beforeinput", null, l, X)),
              F.push({ event: ue, listeners: Re }),
              (ue.data = Se))),
          K1(F, e, L, l, X);
      }
      Gm(F, t);
    });
  }
  function Ci(e, t, l) {
    return { instance: e, listener: t, currentTarget: l };
  }
  function uu(e, t) {
    for (var l = t + "Capture", i = []; e !== null; ) {
      var s = e,
        f = s.stateNode;
      if (
        ((s = s.tag),
        (s !== 5 && s !== 26 && s !== 27) ||
          f === null ||
          ((s = Fa(e, l)),
          s != null && i.unshift(Ci(e, s, f)),
          (s = Fa(e, t)),
          s != null && i.push(Ci(e, s, f))),
        e.tag === 3)
      )
        return i;
      e = e.return;
    }
    return [];
  }
  function P1(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Zm(e, t, l, i, s) {
    for (var f = t._reactName, g = []; l !== null && l !== i; ) {
      var x = l,
        A = x.alternate,
        L = x.stateNode;
      if (((x = x.tag), A !== null && A === i)) break;
      (x !== 5 && x !== 26 && x !== 27) ||
        L === null ||
        ((A = L),
        s
          ? ((L = Fa(l, f)), L != null && g.unshift(Ci(l, L, A)))
          : s || ((L = Fa(l, f)), L != null && g.push(Ci(l, L, A)))),
        (l = l.return);
    }
    g.length !== 0 && e.push({ event: t, listeners: g });
  }
  var W1 = /\r\n?/g,
    eb = /\u0000|\uFFFD/g;
  function Fm(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        W1,
        `
`
      )
      .replace(eb, "");
  }
  function Km(e, t) {
    return (t = Fm(t)), Fm(e) === t;
  }
  function qe(e, t, l, i, s, f) {
    switch (l) {
      case "children":
        typeof i == "string"
          ? t === "body" || (t === "textarea" && i === "") || $l(e, i)
          : (typeof i == "number" || typeof i == "bigint") &&
            t !== "body" &&
            $l(e, "" + i);
        break;
      case "className":
        fr(e, "class", i);
        break;
      case "tabIndex":
        fr(e, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        fr(e, l, i);
        break;
      case "style":
        Kf(e, i, f);
        break;
      case "data":
        if (t !== "object") {
          fr(e, "data", i);
          break;
        }
      case "src":
      case "href":
        if (i === "" && (t !== "a" || l !== "href")) {
          e.removeAttribute(l);
          break;
        }
        if (
          i == null ||
          typeof i == "function" ||
          typeof i == "symbol" ||
          typeof i == "boolean"
        ) {
          e.removeAttribute(l);
          break;
        }
        (i = dr("" + i)), e.setAttribute(l, i);
        break;
      case "action":
      case "formAction":
        if (typeof i == "function") {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof f == "function" &&
            (l === "formAction"
              ? (t !== "input" && qe(e, t, "name", s.name, s, null),
                qe(e, t, "formEncType", s.formEncType, s, null),
                qe(e, t, "formMethod", s.formMethod, s, null),
                qe(e, t, "formTarget", s.formTarget, s, null))
              : (qe(e, t, "encType", s.encType, s, null),
                qe(e, t, "method", s.method, s, null),
                qe(e, t, "target", s.target, s, null)));
        if (i == null || typeof i == "symbol" || typeof i == "boolean") {
          e.removeAttribute(l);
          break;
        }
        (i = dr("" + i)), e.setAttribute(l, i);
        break;
      case "onClick":
        i != null && (e.onclick = An);
        break;
      case "onScroll":
        i != null && Ce("scroll", e);
        break;
      case "onScrollEnd":
        i != null && Ce("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(u(61));
          if (((l = i.__html), l != null)) {
            if (s.children != null) throw Error(u(60));
            e.innerHTML = l;
          }
        }
        break;
      case "multiple":
        e.multiple = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "muted":
        e.muted = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          i == null ||
          typeof i == "function" ||
          typeof i == "boolean" ||
          typeof i == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        (l = dr("" + i)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        i != null && typeof i != "function" && typeof i != "symbol"
          ? e.setAttribute(l, "" + i)
          : e.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        i && typeof i != "function" && typeof i != "symbol"
          ? e.setAttribute(l, "")
          : e.removeAttribute(l);
        break;
      case "capture":
      case "download":
        i === !0
          ? e.setAttribute(l, "")
          : i !== !1 &&
            i != null &&
            typeof i != "function" &&
            typeof i != "symbol"
          ? e.setAttribute(l, i)
          : e.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        !isNaN(i) &&
        1 <= i
          ? e.setAttribute(l, i)
          : e.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i)
          ? e.removeAttribute(l)
          : e.setAttribute(l, i);
        break;
      case "popover":
        Ce("beforetoggle", e), Ce("toggle", e), cr(e, "popover", i);
        break;
      case "xlinkActuate":
        Tn(e, "http://www.w3.org/1999/xlink", "xlink:actuate", i);
        break;
      case "xlinkArcrole":
        Tn(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", i);
        break;
      case "xlinkRole":
        Tn(e, "http://www.w3.org/1999/xlink", "xlink:role", i);
        break;
      case "xlinkShow":
        Tn(e, "http://www.w3.org/1999/xlink", "xlink:show", i);
        break;
      case "xlinkTitle":
        Tn(e, "http://www.w3.org/1999/xlink", "xlink:title", i);
        break;
      case "xlinkType":
        Tn(e, "http://www.w3.org/1999/xlink", "xlink:type", i);
        break;
      case "xmlBase":
        Tn(e, "http://www.w3.org/XML/1998/namespace", "xml:base", i);
        break;
      case "xmlLang":
        Tn(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", i);
        break;
      case "xmlSpace":
        Tn(e, "http://www.w3.org/XML/1998/namespace", "xml:space", i);
        break;
      case "is":
        cr(e, "is", i);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== "o" && l[0] !== "O") ||
          (l[1] !== "n" && l[1] !== "N")) &&
          ((l = O0.get(l) || l), cr(e, l, i));
    }
  }
  function Zs(e, t, l, i, s, f) {
    switch (l) {
      case "style":
        Kf(e, i, f);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(u(61));
          if (((l = i.__html), l != null)) {
            if (s.children != null) throw Error(u(60));
            e.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof i == "string"
          ? $l(e, i)
          : (typeof i == "number" || typeof i == "bigint") && $l(e, "" + i);
        break;
      case "onScroll":
        i != null && Ce("scroll", e);
        break;
      case "onScrollEnd":
        i != null && Ce("scrollend", e);
        break;
      case "onClick":
        i != null && (e.onclick = An);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Hf.hasOwnProperty(l))
          e: {
            if (
              l[0] === "o" &&
              l[1] === "n" &&
              ((s = l.endsWith("Capture")),
              (t = l.slice(2, s ? l.length - 7 : void 0)),
              (f = e[wt] || null),
              (f = f != null ? f[l] : null),
              typeof f == "function" && e.removeEventListener(t, f, s),
              typeof i == "function")
            ) {
              typeof f != "function" &&
                f !== null &&
                (l in e
                  ? (e[l] = null)
                  : e.hasAttribute(l) && e.removeAttribute(l)),
                e.addEventListener(t, i, s);
              break e;
            }
            l in e
              ? (e[l] = i)
              : i === !0
              ? e.setAttribute(l, "")
              : cr(e, l, i);
          }
    }
  }
  function pt(e, t, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Ce("error", e), Ce("load", e);
        var i = !1,
          s = !1,
          f;
        for (f in l)
          if (l.hasOwnProperty(f)) {
            var g = l[f];
            if (g != null)
              switch (f) {
                case "src":
                  i = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(u(137, t));
                default:
                  qe(e, t, f, g, l, null);
              }
          }
        s && qe(e, t, "srcSet", l.srcSet, l, null),
          i && qe(e, t, "src", l.src, l, null);
        return;
      case "input":
        Ce("invalid", e);
        var x = (f = g = s = null),
          A = null,
          L = null;
        for (i in l)
          if (l.hasOwnProperty(i)) {
            var X = l[i];
            if (X != null)
              switch (i) {
                case "name":
                  s = X;
                  break;
                case "type":
                  g = X;
                  break;
                case "checked":
                  A = X;
                  break;
                case "defaultChecked":
                  L = X;
                  break;
                case "value":
                  f = X;
                  break;
                case "defaultValue":
                  x = X;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (X != null) throw Error(u(137, t));
                  break;
                default:
                  qe(e, t, i, X, l, null);
              }
          }
        Gf(e, f, x, A, L, g, s, !1);
        return;
      case "select":
        Ce("invalid", e), (i = g = f = null);
        for (s in l)
          if (l.hasOwnProperty(s) && ((x = l[s]), x != null))
            switch (s) {
              case "value":
                f = x;
                break;
              case "defaultValue":
                g = x;
                break;
              case "multiple":
                i = x;
              default:
                qe(e, t, s, x, l, null);
            }
        (t = f),
          (l = g),
          (e.multiple = !!i),
          t != null ? Il(e, !!i, t, !1) : l != null && Il(e, !!i, l, !0);
        return;
      case "textarea":
        Ce("invalid", e), (f = s = i = null);
        for (g in l)
          if (l.hasOwnProperty(g) && ((x = l[g]), x != null))
            switch (g) {
              case "value":
                i = x;
                break;
              case "defaultValue":
                s = x;
                break;
              case "children":
                f = x;
                break;
              case "dangerouslySetInnerHTML":
                if (x != null) throw Error(u(91));
                break;
              default:
                qe(e, t, g, x, l, null);
            }
        Zf(e, i, s, f);
        return;
      case "option":
        for (A in l)
          if (l.hasOwnProperty(A) && ((i = l[A]), i != null))
            switch (A) {
              case "selected":
                e.selected =
                  i && typeof i != "function" && typeof i != "symbol";
                break;
              default:
                qe(e, t, A, i, l, null);
            }
        return;
      case "dialog":
        Ce("beforetoggle", e), Ce("toggle", e), Ce("cancel", e), Ce("close", e);
        break;
      case "iframe":
      case "object":
        Ce("load", e);
        break;
      case "video":
      case "audio":
        for (i = 0; i < Ai.length; i++) Ce(Ai[i], e);
        break;
      case "image":
        Ce("error", e), Ce("load", e);
        break;
      case "details":
        Ce("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Ce("error", e), Ce("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (L in l)
          if (l.hasOwnProperty(L) && ((i = l[L]), i != null))
            switch (L) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(u(137, t));
              default:
                qe(e, t, L, i, l, null);
            }
        return;
      default:
        if (io(t)) {
          for (X in l)
            l.hasOwnProperty(X) &&
              ((i = l[X]), i !== void 0 && Zs(e, t, X, i, l, void 0));
          return;
        }
    }
    for (x in l)
      l.hasOwnProperty(x) && ((i = l[x]), i != null && qe(e, t, x, i, l, null));
  }
  function tb(e, t, l, i) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null,
          f = null,
          g = null,
          x = null,
          A = null,
          L = null,
          X = null;
        for (H in l) {
          var F = l[H];
          if (l.hasOwnProperty(H) && F != null)
            switch (H) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                A = F;
              default:
                i.hasOwnProperty(H) || qe(e, t, H, null, i, F);
            }
        }
        for (var U in i) {
          var H = i[U];
          if (((F = l[U]), i.hasOwnProperty(U) && (H != null || F != null)))
            switch (U) {
              case "type":
                f = H;
                break;
              case "name":
                s = H;
                break;
              case "checked":
                L = H;
                break;
              case "defaultChecked":
                X = H;
                break;
              case "value":
                g = H;
                break;
              case "defaultValue":
                x = H;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (H != null) throw Error(u(137, t));
                break;
              default:
                H !== F && qe(e, t, U, H, i, F);
            }
        }
        lo(e, g, x, A, L, X, f, s);
        return;
      case "select":
        H = g = x = U = null;
        for (f in l)
          if (((A = l[f]), l.hasOwnProperty(f) && A != null))
            switch (f) {
              case "value":
                break;
              case "multiple":
                H = A;
              default:
                i.hasOwnProperty(f) || qe(e, t, f, null, i, A);
            }
        for (s in i)
          if (
            ((f = i[s]),
            (A = l[s]),
            i.hasOwnProperty(s) && (f != null || A != null))
          )
            switch (s) {
              case "value":
                U = f;
                break;
              case "defaultValue":
                x = f;
                break;
              case "multiple":
                g = f;
              default:
                f !== A && qe(e, t, s, f, i, A);
            }
        (t = x),
          (l = g),
          (i = H),
          U != null
            ? Il(e, !!l, U, !1)
            : !!i != !!l &&
              (t != null ? Il(e, !!l, t, !0) : Il(e, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        H = U = null;
        for (x in l)
          if (
            ((s = l[x]),
            l.hasOwnProperty(x) && s != null && !i.hasOwnProperty(x))
          )
            switch (x) {
              case "value":
                break;
              case "children":
                break;
              default:
                qe(e, t, x, null, i, s);
            }
        for (g in i)
          if (
            ((s = i[g]),
            (f = l[g]),
            i.hasOwnProperty(g) && (s != null || f != null))
          )
            switch (g) {
              case "value":
                U = s;
                break;
              case "defaultValue":
                H = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(u(91));
                break;
              default:
                s !== f && qe(e, t, g, s, i, f);
            }
        Qf(e, U, H);
        return;
      case "option":
        for (var re in l)
          if (
            ((U = l[re]),
            l.hasOwnProperty(re) && U != null && !i.hasOwnProperty(re))
          )
            switch (re) {
              case "selected":
                e.selected = !1;
                break;
              default:
                qe(e, t, re, null, i, U);
            }
        for (A in i)
          if (
            ((U = i[A]),
            (H = l[A]),
            i.hasOwnProperty(A) && U !== H && (U != null || H != null))
          )
            switch (A) {
              case "selected":
                e.selected =
                  U && typeof U != "function" && typeof U != "symbol";
                break;
              default:
                qe(e, t, A, U, i, H);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var he in l)
          (U = l[he]),
            l.hasOwnProperty(he) &&
              U != null &&
              !i.hasOwnProperty(he) &&
              qe(e, t, he, null, i, U);
        for (L in i)
          if (
            ((U = i[L]),
            (H = l[L]),
            i.hasOwnProperty(L) && U !== H && (U != null || H != null))
          )
            switch (L) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (U != null) throw Error(u(137, t));
                break;
              default:
                qe(e, t, L, U, i, H);
            }
        return;
      default:
        if (io(t)) {
          for (var Ye in l)
            (U = l[Ye]),
              l.hasOwnProperty(Ye) &&
                U !== void 0 &&
                !i.hasOwnProperty(Ye) &&
                Zs(e, t, Ye, void 0, i, U);
          for (X in i)
            (U = i[X]),
              (H = l[X]),
              !i.hasOwnProperty(X) ||
                U === H ||
                (U === void 0 && H === void 0) ||
                Zs(e, t, X, U, i, H);
          return;
        }
    }
    for (var D in l)
      (U = l[D]),
        l.hasOwnProperty(D) &&
          U != null &&
          !i.hasOwnProperty(D) &&
          qe(e, t, D, null, i, U);
    for (F in i)
      (U = i[F]),
        (H = l[F]),
        !i.hasOwnProperty(F) ||
          U === H ||
          (U == null && H == null) ||
          qe(e, t, F, U, i, H);
  }
  function Jm(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function nb() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var e = 0, t = 0, l = performance.getEntriesByType("resource"), i = 0;
        i < l.length;
        i++
      ) {
        var s = l[i],
          f = s.transferSize,
          g = s.initiatorType,
          x = s.duration;
        if (f && x && Jm(g)) {
          for (g = 0, x = s.responseEnd, i += 1; i < l.length; i++) {
            var A = l[i],
              L = A.startTime;
            if (L > x) break;
            var X = A.transferSize,
              F = A.initiatorType;
            X &&
              Jm(F) &&
              ((A = A.responseEnd), (g += X * (A < x ? 1 : (x - L) / (A - L))));
          }
          if ((--i, (t += (8 * (f + g)) / (s.duration / 1e3)), e++, 10 < e))
            break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection &&
      ((e = navigator.connection.downlink), typeof e == "number")
      ? e
      : 5;
  }
  var Fs = null,
    Ks = null;
  function ou(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Im(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function $m(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function Js(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Is = null;
  function lb() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === Is
        ? !1
        : ((Is = e), !0)
      : ((Is = null), !1);
  }
  var Pm = typeof setTimeout == "function" ? setTimeout : void 0,
    ab = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Wm = typeof Promise == "function" ? Promise : void 0,
    ib =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Wm < "u"
        ? function (e) {
            return Wm.resolve(null).then(e).catch(rb);
          }
        : Pm;
  function rb(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function cl(e) {
    return e === "head";
  }
  function ep(e, t) {
    var l = t,
      i = 0;
    do {
      var s = l.nextSibling;
      if ((e.removeChild(l), s && s.nodeType === 8))
        if (((l = s.data), l === "/$" || l === "/&")) {
          if (i === 0) {
            e.removeChild(s), Oa(t);
            return;
          }
          i--;
        } else if (
          l === "$" ||
          l === "$?" ||
          l === "$~" ||
          l === "$!" ||
          l === "&"
        )
          i++;
        else if (l === "html") zi(e.ownerDocument.documentElement);
        else if (l === "head") {
          (l = e.ownerDocument.head), zi(l);
          for (var f = l.firstChild; f; ) {
            var g = f.nextSibling,
              x = f.nodeName;
            f[Qa] ||
              x === "SCRIPT" ||
              x === "STYLE" ||
              (x === "LINK" && f.rel.toLowerCase() === "stylesheet") ||
              l.removeChild(f),
              (f = g);
          }
        } else l === "body" && zi(e.ownerDocument.body);
      l = s;
    } while (l);
    Oa(t);
  }
  function tp(e, t) {
    var l = e;
    e = 0;
    do {
      var i = l.nextSibling;
      if (
        (l.nodeType === 1
          ? t
            ? ((l._stashedDisplay = l.style.display),
              (l.style.display = "none"))
            : ((l.style.display = l._stashedDisplay || ""),
              l.getAttribute("style") === "" && l.removeAttribute("style"))
          : l.nodeType === 3 &&
            (t
              ? ((l._stashedText = l.nodeValue), (l.nodeValue = ""))
              : (l.nodeValue = l._stashedText || "")),
        i && i.nodeType === 8)
      )
        if (((l = i.data), l === "/$")) {
          if (e === 0) break;
          e--;
        } else (l !== "$" && l !== "$?" && l !== "$~" && l !== "$!") || e++;
      l = i;
    } while (l);
  }
  function $s(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (((t = t.nextSibling), l.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          $s(l), to(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(l);
    }
  }
  function ub(e, t, l, i) {
    for (; e.nodeType === 1; ) {
      var s = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (i) {
        if (!e[Qa])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((f = e.getAttribute("rel")),
                f === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                f !== s.rel ||
                e.getAttribute("href") !==
                  (s.href == null || s.href === "" ? null : s.href) ||
                e.getAttribute("crossorigin") !==
                  (s.crossOrigin == null ? null : s.crossOrigin) ||
                e.getAttribute("title") !== (s.title == null ? null : s.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((f = e.getAttribute("src")),
                (f !== (s.src == null ? null : s.src) ||
                  e.getAttribute("type") !== (s.type == null ? null : s.type) ||
                  e.getAttribute("crossorigin") !==
                    (s.crossOrigin == null ? null : s.crossOrigin)) &&
                  f &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var f = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && e.getAttribute("name") === f) return e;
      } else return e;
      if (((e = en(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function ob(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !l) ||
        ((e = en(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function np(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !t) ||
        ((e = en(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Ps(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Ws(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState !== "loading")
    );
  }
  function sb(e, t) {
    var l = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || l.readyState !== "loading") t();
    else {
      var i = function () {
        t(), l.removeEventListener("DOMContentLoaded", i);
      };
      l.addEventListener("DOMContentLoaded", i), (e._reactRetry = i);
    }
  }
  function en(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var ec = null;
  function lp(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "/$" || l === "/&") {
          if (t === 0) return en(e.nextSibling);
          t--;
        } else
          (l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&") ||
            t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function ap(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (t === 0) return e;
          t--;
        } else (l !== "/$" && l !== "/&") || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function ip(e, t, l) {
    switch (((t = ou(l)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(u(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(u(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(u(454));
        return e;
      default:
        throw Error(u(451));
    }
  }
  function zi(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    to(e);
  }
  var tn = new Map(),
    rp = new Set();
  function su(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
      ? e
      : e.ownerDocument;
  }
  var Yn = K.d;
  K.d = { f: cb, r: fb, D: hb, C: db, L: mb, m: pb, X: gb, S: yb, M: bb };
  function cb() {
    var e = Yn.f(),
      t = eu();
    return e || t;
  }
  function fb(e) {
    var t = Fl(e);
    t !== null && t.tag === 5 && t.type === "form" ? wd(t) : Yn.r(e);
  }
  var Aa = typeof document > "u" ? null : document;
  function up(e, t, l) {
    var i = Aa;
    if (i && typeof t == "string" && t) {
      var s = Ft(t);
      (s = 'link[rel="' + e + '"][href="' + s + '"]'),
        typeof l == "string" && (s += '[crossorigin="' + l + '"]'),
        rp.has(s) ||
          (rp.add(s),
          (e = { rel: e, crossOrigin: l, href: t }),
          i.querySelector(s) === null &&
            ((t = i.createElement("link")),
            pt(t, "link", e),
            st(t),
            i.head.appendChild(t)));
    }
  }
  function hb(e) {
    Yn.D(e), up("dns-prefetch", e, null);
  }
  function db(e, t) {
    Yn.C(e, t), up("preconnect", e, t);
  }
  function mb(e, t, l) {
    Yn.L(e, t, l);
    var i = Aa;
    if (i && e && t) {
      var s = 'link[rel="preload"][as="' + Ft(t) + '"]';
      t === "image" && l && l.imageSrcSet
        ? ((s += '[imagesrcset="' + Ft(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == "string" &&
            (s += '[imagesizes="' + Ft(l.imageSizes) + '"]'))
        : (s += '[href="' + Ft(e) + '"]');
      var f = s;
      switch (t) {
        case "style":
          f = Ca(e);
          break;
        case "script":
          f = za(e);
      }
      tn.has(f) ||
        ((e = b(
          {
            rel: "preload",
            href: t === "image" && l && l.imageSrcSet ? void 0 : e,
            as: t,
          },
          l
        )),
        tn.set(f, e),
        i.querySelector(s) !== null ||
          (t === "style" && i.querySelector(Oi(f))) ||
          (t === "script" && i.querySelector(Ri(f))) ||
          ((t = i.createElement("link")),
          pt(t, "link", e),
          st(t),
          i.head.appendChild(t)));
    }
  }
  function pb(e, t) {
    Yn.m(e, t);
    var l = Aa;
    if (l && e) {
      var i = t && typeof t.as == "string" ? t.as : "script",
        s =
          'link[rel="modulepreload"][as="' + Ft(i) + '"][href="' + Ft(e) + '"]',
        f = s;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          f = za(e);
      }
      if (
        !tn.has(f) &&
        ((e = b({ rel: "modulepreload", href: e }, t)),
        tn.set(f, e),
        l.querySelector(s) === null)
      ) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Ri(f))) return;
        }
        (i = l.createElement("link")),
          pt(i, "link", e),
          st(i),
          l.head.appendChild(i);
      }
    }
  }
  function yb(e, t, l) {
    Yn.S(e, t, l);
    var i = Aa;
    if (i && e) {
      var s = Kl(i).hoistableStyles,
        f = Ca(e);
      t = t || "default";
      var g = s.get(f);
      if (!g) {
        var x = { loading: 0, preload: null };
        if ((g = i.querySelector(Oi(f)))) x.loading = 5;
        else {
          (e = b({ rel: "stylesheet", href: e, "data-precedence": t }, l)),
            (l = tn.get(f)) && tc(e, l);
          var A = (g = i.createElement("link"));
          st(A),
            pt(A, "link", e),
            (A._p = new Promise(function (L, X) {
              (A.onload = L), (A.onerror = X);
            })),
            A.addEventListener("load", function () {
              x.loading |= 1;
            }),
            A.addEventListener("error", function () {
              x.loading |= 2;
            }),
            (x.loading |= 4),
            cu(g, t, i);
        }
        (g = { type: "stylesheet", instance: g, count: 1, state: x }),
          s.set(f, g);
      }
    }
  }
  function gb(e, t) {
    Yn.X(e, t);
    var l = Aa;
    if (l && e) {
      var i = Kl(l).hoistableScripts,
        s = za(e),
        f = i.get(s);
      f ||
        ((f = l.querySelector(Ri(s))),
        f ||
          ((e = b({ src: e, async: !0 }, t)),
          (t = tn.get(s)) && nc(e, t),
          (f = l.createElement("script")),
          st(f),
          pt(f, "link", e),
          l.head.appendChild(f)),
        (f = { type: "script", instance: f, count: 1, state: null }),
        i.set(s, f));
    }
  }
  function bb(e, t) {
    Yn.M(e, t);
    var l = Aa;
    if (l && e) {
      var i = Kl(l).hoistableScripts,
        s = za(e),
        f = i.get(s);
      f ||
        ((f = l.querySelector(Ri(s))),
        f ||
          ((e = b({ src: e, async: !0, type: "module" }, t)),
          (t = tn.get(s)) && nc(e, t),
          (f = l.createElement("script")),
          st(f),
          pt(f, "link", e),
          l.head.appendChild(f)),
        (f = { type: "script", instance: f, count: 1, state: null }),
        i.set(s, f));
    }
  }
  function op(e, t, l, i) {
    var s = (s = oe.current) ? su(s) : null;
    if (!s) throw Error(u(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string"
          ? ((t = Ca(l.href)),
            (l = Kl(s).hoistableStyles),
            (i = l.get(t)),
            i ||
              ((i = { type: "style", instance: null, count: 0, state: null }),
              l.set(t, i)),
            i)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          l.rel === "stylesheet" &&
          typeof l.href == "string" &&
          typeof l.precedence == "string"
        ) {
          e = Ca(l.href);
          var f = Kl(s).hoistableStyles,
            g = f.get(e);
          if (
            (g ||
              ((s = s.ownerDocument || s),
              (g = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              f.set(e, g),
              (f = s.querySelector(Oi(e))) &&
                !f._p &&
                ((g.instance = f), (g.state.loading = 5)),
              tn.has(e) ||
                ((l = {
                  rel: "preload",
                  as: "style",
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                tn.set(e, l),
                f || vb(s, e, l, g.state))),
            t && i === null)
          )
            throw Error(u(528, ""));
          return g;
        }
        if (t && i !== null) throw Error(u(529, ""));
        return null;
      case "script":
        return (
          (t = l.async),
          (l = l.src),
          typeof l == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = za(l)),
              (l = Kl(s).hoistableScripts),
              (i = l.get(t)),
              i ||
                ((i = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                l.set(t, i)),
              i)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(u(444, e));
    }
  }
  function Ca(e) {
    return 'href="' + Ft(e) + '"';
  }
  function Oi(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function sp(e) {
    return b({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function vb(e, t, l, i) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (i.loading = 1)
      : ((t = e.createElement("link")),
        (i.preload = t),
        t.addEventListener("load", function () {
          return (i.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (i.loading |= 2);
        }),
        pt(t, "link", l),
        st(t),
        e.head.appendChild(t));
  }
  function za(e) {
    return '[src="' + Ft(e) + '"]';
  }
  function Ri(e) {
    return "script[async]" + e;
  }
  function cp(e, t, l) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var i = e.querySelector('style[data-href~="' + Ft(l.href) + '"]');
          if (i) return (t.instance = i), st(i), i;
          var s = b({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (i = (e.ownerDocument || e).createElement("style")),
            st(i),
            pt(i, "style", s),
            cu(i, l.precedence, e),
            (t.instance = i)
          );
        case "stylesheet":
          s = Ca(l.href);
          var f = e.querySelector(Oi(s));
          if (f) return (t.state.loading |= 4), (t.instance = f), st(f), f;
          (i = sp(l)),
            (s = tn.get(s)) && tc(i, s),
            (f = (e.ownerDocument || e).createElement("link")),
            st(f);
          var g = f;
          return (
            (g._p = new Promise(function (x, A) {
              (g.onload = x), (g.onerror = A);
            })),
            pt(f, "link", i),
            (t.state.loading |= 4),
            cu(f, l.precedence, e),
            (t.instance = f)
          );
        case "script":
          return (
            (f = za(l.src)),
            (s = e.querySelector(Ri(f)))
              ? ((t.instance = s), st(s), s)
              : ((i = l),
                (s = tn.get(f)) && ((i = b({}, l)), nc(i, s)),
                (e = e.ownerDocument || e),
                (s = e.createElement("script")),
                st(s),
                pt(s, "link", i),
                e.head.appendChild(s),
                (t.instance = s))
          );
        case "void":
          return null;
        default:
          throw Error(u(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((i = t.instance), (t.state.loading |= 4), cu(i, l.precedence, e));
    return t.instance;
  }
  function cu(e, t, l) {
    for (
      var i = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        s = i.length ? i[i.length - 1] : null,
        f = s,
        g = 0;
      g < i.length;
      g++
    ) {
      var x = i[g];
      if (x.dataset.precedence === t) f = x;
      else if (f !== s) break;
    }
    f
      ? f.parentNode.insertBefore(e, f.nextSibling)
      : ((t = l.nodeType === 9 ? l.head : l), t.insertBefore(e, t.firstChild));
  }
  function tc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title);
  }
  function nc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity);
  }
  var fu = null;
  function fp(e, t, l) {
    if (fu === null) {
      var i = new Map(),
        s = (fu = new Map());
      s.set(l, i);
    } else (s = fu), (i = s.get(l)), i || ((i = new Map()), s.set(l, i));
    if (i.has(e)) return i;
    for (
      i.set(e, null), l = l.getElementsByTagName(e), s = 0;
      s < l.length;
      s++
    ) {
      var f = l[s];
      if (
        !(
          f[Qa] ||
          f[ft] ||
          (e === "link" && f.getAttribute("rel") === "stylesheet")
        ) &&
        f.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var g = f.getAttribute(t) || "";
        g = e + g;
        var x = i.get(g);
        x ? x.push(f) : i.set(g, [f]);
      }
    }
    return i;
  }
  function hp(e, t, l) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(
        l,
        t === "title" ? e.querySelector("head > title") : null
      );
  }
  function xb(e, t, l) {
    if (l === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (e = t.disabled), typeof t.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function dp(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Sb(e, t, l, i) {
    if (
      l.type === "stylesheet" &&
      (typeof i.media != "string" || matchMedia(i.media).matches !== !1) &&
      (l.state.loading & 4) === 0
    ) {
      if (l.instance === null) {
        var s = Ca(i.href),
          f = t.querySelector(Oi(s));
        if (f) {
          (t = f._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (e.count++, (e = hu.bind(e)), t.then(e, e)),
            (l.state.loading |= 4),
            (l.instance = f),
            st(f);
          return;
        }
        (f = t.ownerDocument || t),
          (i = sp(i)),
          (s = tn.get(s)) && tc(i, s),
          (f = f.createElement("link")),
          st(f);
        var g = f;
        (g._p = new Promise(function (x, A) {
          (g.onload = x), (g.onerror = A);
        })),
          pt(f, "link", i),
          (l.instance = f);
      }
      e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(l, t),
        (t = l.state.preload) &&
          (l.state.loading & 3) === 0 &&
          (e.count++,
          (l = hu.bind(e)),
          t.addEventListener("load", l),
          t.addEventListener("error", l));
    }
  }
  var lc = 0;
  function Eb(e, t) {
    return (
      e.stylesheets && e.count === 0 && mu(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (l) {
            var i = setTimeout(function () {
              if ((e.stylesheets && mu(e, e.stylesheets), e.unsuspend)) {
                var f = e.unsuspend;
                (e.unsuspend = null), f();
              }
            }, 6e4 + t);
            0 < e.imgBytes && lc === 0 && (lc = 62500 * nb());
            var s = setTimeout(function () {
              if (
                ((e.waitingForImages = !1),
                e.count === 0 &&
                  (e.stylesheets && mu(e, e.stylesheets), e.unsuspend))
              ) {
                var f = e.unsuspend;
                (e.unsuspend = null), f();
              }
            }, (e.imgBytes > lc ? 50 : 800) + t);
            return (
              (e.unsuspend = l),
              function () {
                (e.unsuspend = null), clearTimeout(i), clearTimeout(s);
              }
            );
          }
        : null
    );
  }
  function hu() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) mu(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var du = null;
  function mu(e, t) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (du = new Map()),
        t.forEach(wb, e),
        (du = null),
        hu.call(e));
  }
  function wb(e, t) {
    if (!(t.state.loading & 4)) {
      var l = du.get(e);
      if (l) var i = l.get(null);
      else {
        (l = new Map()), du.set(e, l);
        for (
          var s = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            f = 0;
          f < s.length;
          f++
        ) {
          var g = s[f];
          (g.nodeName === "LINK" || g.getAttribute("media") !== "not all") &&
            (l.set(g.dataset.precedence, g), (i = g));
        }
        i && l.set(null, i);
      }
      (s = t.instance),
        (g = s.getAttribute("data-precedence")),
        (f = l.get(g) || i),
        f === i && l.set(null, s),
        l.set(g, s),
        this.count++,
        (i = hu.bind(this)),
        s.addEventListener("load", i),
        s.addEventListener("error", i),
        f
          ? f.parentNode.insertBefore(s, f.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(s, e.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var Ni = {
    $$typeof: k,
    Provider: null,
    Consumer: null,
    _currentValue: le,
    _currentValue2: le,
    _threadCount: 0,
  };
  function Tb(e, t, l, i, s, f, g, x, A) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = $u(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = $u(0)),
      (this.hiddenUpdates = $u(null)),
      (this.identifierPrefix = i),
      (this.onUncaughtError = s),
      (this.onCaughtError = f),
      (this.onRecoverableError = g),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = A),
      (this.incompleteTransitions = new Map());
  }
  function mp(e, t, l, i, s, f, g, x, A, L, X, F) {
    return (
      (e = new Tb(e, t, l, g, A, L, X, F, x)),
      (t = 1),
      f === !0 && (t |= 24),
      (f = Ut(3, null, null, t)),
      (e.current = f),
      (f.stateNode = e),
      (t = Lo()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (f.memoizedState = { element: i, isDehydrated: l, cache: t }),
      qo(f),
      e
    );
  }
  function pp(e) {
    return e ? ((e = aa), e) : aa;
  }
  function yp(e, t, l, i, s, f) {
    (s = pp(s)),
      i.context === null ? (i.context = s) : (i.pendingContext = s),
      (i = Wn(t)),
      (i.payload = { element: l }),
      (f = f === void 0 ? null : f),
      f !== null && (i.callback = f),
      (l = el(e, i, t)),
      l !== null && (Rt(l, e, t), oi(l, e, t));
  }
  function gp(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function ac(e, t) {
    gp(e, t), (e = e.alternate) && gp(e, t);
  }
  function bp(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Tl(e, 67108864);
      t !== null && Rt(t, e, 67108864), ac(e, 67108864);
    }
  }
  function vp(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Vt();
      t = Pu(t);
      var l = Tl(e, t);
      l !== null && Rt(l, e, t), ac(e, t);
    }
  }
  var pu = !0;
  function Ab(e, t, l, i) {
    var s = M.T;
    M.T = null;
    var f = K.p;
    try {
      (K.p = 2), ic(e, t, l, i);
    } finally {
      (K.p = f), (M.T = s);
    }
  }
  function Cb(e, t, l, i) {
    var s = M.T;
    M.T = null;
    var f = K.p;
    try {
      (K.p = 8), ic(e, t, l, i);
    } finally {
      (K.p = f), (M.T = s);
    }
  }
  function ic(e, t, l, i) {
    if (pu) {
      var s = rc(i);
      if (s === null) Qs(e, t, i, yu, l), Sp(e, i);
      else if (Ob(s, e, t, l, i)) i.stopPropagation();
      else if ((Sp(e, i), t & 4 && -1 < zb.indexOf(e))) {
        for (; s !== null; ) {
          var f = Fl(s);
          if (f !== null)
            switch (f.tag) {
              case 3:
                if (((f = f.stateNode), f.current.memoizedState.isDehydrated)) {
                  var g = vl(f.pendingLanes);
                  if (g !== 0) {
                    var x = f;
                    for (x.pendingLanes |= 2, x.entangledLanes |= 2; g; ) {
                      var A = 1 << (31 - Ve(g));
                      (x.entanglements[1] |= A), (g &= ~A);
                    }
                    mn(f), (Me & 6) === 0 && ((Pr = vt() + 500), Ti(0));
                  }
                }
                break;
              case 31:
              case 13:
                (x = Tl(f, 2)), x !== null && Rt(x, f, 2), eu(), ac(f, 2);
            }
          if (((f = rc(i)), f === null && Qs(e, t, i, yu, l), f === s)) break;
          s = f;
        }
        s !== null && i.stopPropagation();
      } else Qs(e, t, i, null, l);
    }
  }
  function rc(e) {
    return (e = uo(e)), uc(e);
  }
  var yu = null;
  function uc(e) {
    if (((yu = null), (e = Zl(e)), e !== null)) {
      var t = c(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (((e = h(t)), e !== null)) return e;
          e = null;
        } else if (l === 31) {
          if (((e = d(t)), e !== null)) return e;
          e = null;
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return (yu = e), null;
  }
  function xp(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Iu()) {
          case G:
            return 2;
          case P:
            return 8;
          case pe:
          case Te:
            return 32;
          case je:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var oc = !1,
    fl = null,
    hl = null,
    dl = null,
    _i = new Map(),
    Di = new Map(),
    ml = [],
    zb =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function Sp(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        fl = null;
        break;
      case "dragenter":
      case "dragleave":
        hl = null;
        break;
      case "mouseover":
      case "mouseout":
        dl = null;
        break;
      case "pointerover":
      case "pointerout":
        _i.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Di.delete(t.pointerId);
    }
  }
  function Mi(e, t, l, i, s, f) {
    return e === null || e.nativeEvent !== f
      ? ((e = {
          blockedOn: t,
          domEventName: l,
          eventSystemFlags: i,
          nativeEvent: f,
          targetContainers: [s],
        }),
        t !== null && ((t = Fl(t)), t !== null && bp(t)),
        e)
      : ((e.eventSystemFlags |= i),
        (t = e.targetContainers),
        s !== null && t.indexOf(s) === -1 && t.push(s),
        e);
  }
  function Ob(e, t, l, i, s) {
    switch (t) {
      case "focusin":
        return (fl = Mi(fl, e, t, l, i, s)), !0;
      case "dragenter":
        return (hl = Mi(hl, e, t, l, i, s)), !0;
      case "mouseover":
        return (dl = Mi(dl, e, t, l, i, s)), !0;
      case "pointerover":
        var f = s.pointerId;
        return _i.set(f, Mi(_i.get(f) || null, e, t, l, i, s)), !0;
      case "gotpointercapture":
        return (
          (f = s.pointerId), Di.set(f, Mi(Di.get(f) || null, e, t, l, i, s)), !0
        );
    }
    return !1;
  }
  function Ep(e) {
    var t = Zl(e.target);
    if (t !== null) {
      var l = c(t);
      if (l !== null) {
        if (((t = l.tag), t === 13)) {
          if (((t = h(l)), t !== null)) {
            (e.blockedOn = t),
              Lf(e.priority, function () {
                vp(l);
              });
            return;
          }
        } else if (t === 31) {
          if (((t = d(l)), t !== null)) {
            (e.blockedOn = t),
              Lf(e.priority, function () {
                vp(l);
              });
            return;
          }
        } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function gu(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = rc(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var i = new l.constructor(l.type, l);
        (ro = i), l.target.dispatchEvent(i), (ro = null);
      } else return (t = Fl(l)), t !== null && bp(t), (e.blockedOn = l), !1;
      t.shift();
    }
    return !0;
  }
  function wp(e, t, l) {
    gu(e) && l.delete(t);
  }
  function Rb() {
    (oc = !1),
      fl !== null && gu(fl) && (fl = null),
      hl !== null && gu(hl) && (hl = null),
      dl !== null && gu(dl) && (dl = null),
      _i.forEach(wp),
      Di.forEach(wp);
  }
  function bu(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      oc ||
        ((oc = !0),
        n.unstable_scheduleCallback(n.unstable_NormalPriority, Rb)));
  }
  var vu = null;
  function Tp(e) {
    vu !== e &&
      ((vu = e),
      n.unstable_scheduleCallback(n.unstable_NormalPriority, function () {
        vu === e && (vu = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t],
            i = e[t + 1],
            s = e[t + 2];
          if (typeof i != "function") {
            if (uc(i || l) === null) continue;
            break;
          }
          var f = Fl(l);
          f !== null &&
            (e.splice(t, 3),
            (t -= 3),
            rs(f, { pending: !0, data: s, method: l.method, action: i }, i, s));
        }
      }));
  }
  function Oa(e) {
    function t(A) {
      return bu(A, e);
    }
    fl !== null && bu(fl, e),
      hl !== null && bu(hl, e),
      dl !== null && bu(dl, e),
      _i.forEach(t),
      Di.forEach(t);
    for (var l = 0; l < ml.length; l++) {
      var i = ml[l];
      i.blockedOn === e && (i.blockedOn = null);
    }
    for (; 0 < ml.length && ((l = ml[0]), l.blockedOn === null); )
      Ep(l), l.blockedOn === null && ml.shift();
    if (((l = (e.ownerDocument || e).$$reactFormReplay), l != null))
      for (i = 0; i < l.length; i += 3) {
        var s = l[i],
          f = l[i + 1],
          g = s[wt] || null;
        if (typeof f == "function") g || Tp(l);
        else if (g) {
          var x = null;
          if (f && f.hasAttribute("formAction")) {
            if (((s = f), (g = f[wt] || null))) x = g.formAction;
            else if (uc(s) !== null) continue;
          } else x = g.action;
          typeof x == "function" ? (l[i + 1] = x) : (l.splice(i, 3), (i -= 3)),
            Tp(l);
        }
      }
  }
  function Ap() {
    function e(f) {
      f.canIntercept &&
        f.info === "react-transition" &&
        f.intercept({
          handler: function () {
            return new Promise(function (g) {
              return (s = g);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      s !== null && (s(), (s = null)), i || setTimeout(l, 20);
    }
    function l() {
      if (!i && !navigation.transition) {
        var f = navigation.currentEntry;
        f &&
          f.url != null &&
          navigation.navigate(f.url, {
            state: f.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var i = !1,
        s = null;
      return (
        navigation.addEventListener("navigate", e),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(l, 100),
        function () {
          (i = !0),
            navigation.removeEventListener("navigate", e),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            s !== null && (s(), (s = null));
        }
      );
    }
  }
  function sc(e) {
    this._internalRoot = e;
  }
  (xu.prototype.render = sc.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(u(409));
      var l = t.current,
        i = Vt();
      yp(l, i, e, t, null, null);
    }),
    (xu.prototype.unmount = sc.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          yp(e.current, 2, null, e, null, null), eu(), (t[Ql] = null);
        }
      });
  function xu(e) {
    this._internalRoot = e;
  }
  xu.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = jf();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < ml.length && t !== 0 && t < ml[l].priority; l++);
      ml.splice(l, 0, e), l === 0 && Ep(e);
    }
  };
  var Cp = a.version;
  if (Cp !== "19.2.1") throw Error(u(527, Cp, "19.2.1"));
  K.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(u(188))
        : ((e = Object.keys(e).join(",")), Error(u(268, e)));
    return (
      (e = m(t)),
      (e = e !== null ? p(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var Nb = {
    bundleType: 0,
    version: "19.2.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: M,
    reconcilerVersion: "19.2.1",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Su = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Su.isDisabled && Su.supportsFiber)
      try {
        (xt = Su.inject(Nb)), (ut = Su);
      } catch {}
  }
  return (
    (ji.createRoot = function (e, t) {
      if (!o(e)) throw Error(u(299));
      var l = !1,
        i = "",
        s = Md,
        f = kd,
        g = jd;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (l = !0),
          t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (s = t.onUncaughtError),
          t.onCaughtError !== void 0 && (f = t.onCaughtError),
          t.onRecoverableError !== void 0 && (g = t.onRecoverableError)),
        (t = mp(e, 1, !1, null, null, l, i, null, s, f, g, Ap)),
        (e[Ql] = t.current),
        Gs(e),
        new sc(t)
      );
    }),
    (ji.hydrateRoot = function (e, t, l) {
      if (!o(e)) throw Error(u(299));
      var i = !1,
        s = "",
        f = Md,
        g = kd,
        x = jd,
        A = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (i = !0),
          l.identifierPrefix !== void 0 && (s = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (f = l.onUncaughtError),
          l.onCaughtError !== void 0 && (g = l.onCaughtError),
          l.onRecoverableError !== void 0 && (x = l.onRecoverableError),
          l.formState !== void 0 && (A = l.formState)),
        (t = mp(e, 1, !0, t, l ?? null, i, s, A, f, g, x, Ap)),
        (t.context = pp(null)),
        (l = t.current),
        (i = Vt()),
        (i = Pu(i)),
        (s = Wn(i)),
        (s.callback = null),
        el(l, s, i),
        (l = i),
        (t.current.lanes = l),
        Ga(t, l),
        mn(t),
        (e[Ql] = t.current),
        Gs(e),
        new xu(t)
      );
    }),
    (ji.version = "19.2.1"),
    ji
  );
}
var Lp;
function qb() {
  if (Lp) return hc.exports;
  Lp = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (a) {
        console.error(a);
      }
  }
  return n(), (hc.exports = Hb()), hc.exports;
}
var Yb = qb();
/**
 * react-router v7.10.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Up = "popstate";
function Vb(n = {}) {
  function a(u, o) {
    let { pathname: c, search: h, hash: d } = u.location;
    return kc(
      "",
      { pathname: c, search: h, hash: d },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function r(u, o) {
    return typeof o == "string" ? o : Qi(o);
  }
  return Gb(a, r, null, n);
}
function Ie(n, a) {
  if (n === !1 || n === null || typeof n > "u") throw new Error(a);
}
function ln(n, a) {
  if (!n) {
    typeof console < "u" && console.warn(a);
    try {
      throw new Error(a);
    } catch {}
  }
}
function Xb() {
  return Math.random().toString(36).substring(2, 10);
}
function Bp(n, a) {
  return { usr: n.state, key: n.key, idx: a };
}
function kc(n, a, r = null, u) {
  return {
    pathname: typeof n == "string" ? n : n.pathname,
    search: "",
    hash: "",
    ...(typeof a == "string" ? ja(a) : a),
    state: r,
    key: (a && a.key) || u || Xb(),
  };
}
function Qi({ pathname: n = "/", search: a = "", hash: r = "" }) {
  return (
    a && a !== "?" && (n += a.charAt(0) === "?" ? a : "?" + a),
    r && r !== "#" && (n += r.charAt(0) === "#" ? r : "#" + r),
    n
  );
}
function ja(n) {
  let a = {};
  if (n) {
    let r = n.indexOf("#");
    r >= 0 && ((a.hash = n.substring(r)), (n = n.substring(0, r)));
    let u = n.indexOf("?");
    u >= 0 && ((a.search = n.substring(u)), (n = n.substring(0, u))),
      n && (a.pathname = n);
  }
  return a;
}
function Gb(n, a, r, u = {}) {
  let { window: o = document.defaultView, v5Compat: c = !1 } = u,
    h = o.history,
    d = "POP",
    y = null,
    m = p();
  m == null && ((m = 0), h.replaceState({ ...h.state, idx: m }, ""));
  function p() {
    return (h.state || { idx: null }).idx;
  }
  function b() {
    d = "POP";
    let N = p(),
      _ = N == null ? null : N - m;
    (m = N), y && y({ action: d, location: O.location, delta: _ });
  }
  function S(N, _) {
    d = "PUSH";
    let Z = kc(O.location, N, _);
    m = p() + 1;
    let k = Bp(Z, m),
      ee = O.createHref(Z);
    try {
      h.pushState(k, "", ee);
    } catch (ae) {
      if (ae instanceof DOMException && ae.name === "DataCloneError") throw ae;
      o.location.assign(ee);
    }
    c && y && y({ action: d, location: O.location, delta: 1 });
  }
  function v(N, _) {
    d = "REPLACE";
    let Z = kc(O.location, N, _);
    m = p();
    let k = Bp(Z, m),
      ee = O.createHref(Z);
    h.replaceState(k, "", ee),
      c && y && y({ action: d, location: O.location, delta: 0 });
  }
  function T(N) {
    return Qb(N);
  }
  let O = {
    get action() {
      return d;
    },
    get location() {
      return n(o, h);
    },
    listen(N) {
      if (y) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(Up, b),
        (y = N),
        () => {
          o.removeEventListener(Up, b), (y = null);
        }
      );
    },
    createHref(N) {
      return a(o, N);
    },
    createURL: T,
    encodeLocation(N) {
      let _ = T(N);
      return { pathname: _.pathname, search: _.search, hash: _.hash };
    },
    push: S,
    replace: v,
    go(N) {
      return h.go(N);
    },
  };
  return O;
}
function Qb(n, a = !1) {
  let r = "http://localhost";
  typeof window < "u" &&
    (r =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    Ie(r, "No window.location.(origin|href) available to create URL");
  let u = typeof n == "string" ? n : Qi(n);
  return (
    (u = u.replace(/ $/, "%20")),
    !a && u.startsWith("//") && (u = r + u),
    new URL(u, r)
  );
}
function Jy(n, a, r = "/") {
  return Zb(n, a, r, !1);
}
function Zb(n, a, r, u) {
  let o = typeof a == "string" ? ja(a) : a,
    c = Xn(o.pathname || "/", r);
  if (c == null) return null;
  let h = Iy(n);
  Fb(h);
  let d = null;
  for (let y = 0; d == null && y < h.length; ++y) {
    let m = av(c);
    d = nv(h[y], m, u);
  }
  return d;
}
function Iy(n, a = [], r = [], u = "", o = !1) {
  let c = (h, d, y = o, m) => {
    let p = {
      relativePath: m === void 0 ? h.path || "" : m,
      caseSensitive: h.caseSensitive === !0,
      childrenIndex: d,
      route: h,
    };
    if (p.relativePath.startsWith("/")) {
      if (!p.relativePath.startsWith(u) && y) return;
      Ie(
        p.relativePath.startsWith(u),
        `Absolute route path "${p.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
        (p.relativePath = p.relativePath.slice(u.length));
    }
    let b = Vn([u, p.relativePath]),
      S = r.concat(p);
    h.children &&
      h.children.length > 0 &&
      (Ie(
        h.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${b}".`
      ),
      Iy(h.children, a, S, b, y)),
      !(h.path == null && !h.index) &&
        a.push({ path: b, score: ev(b, h.index), routesMeta: S });
  };
  return (
    n.forEach((h, d) => {
      var y;
      if (h.path === "" || !((y = h.path) != null && y.includes("?"))) c(h, d);
      else for (let m of $y(h.path)) c(h, d, !0, m);
    }),
    a
  );
}
function $y(n) {
  let a = n.split("/");
  if (a.length === 0) return [];
  let [r, ...u] = a,
    o = r.endsWith("?"),
    c = r.replace(/\?$/, "");
  if (u.length === 0) return o ? [c, ""] : [c];
  let h = $y(u.join("/")),
    d = [];
  return (
    d.push(...h.map((y) => (y === "" ? c : [c, y].join("/")))),
    o && d.push(...h),
    d.map((y) => (n.startsWith("/") && y === "" ? "/" : y))
  );
}
function Fb(n) {
  n.sort((a, r) =>
    a.score !== r.score
      ? r.score - a.score
      : tv(
          a.routesMeta.map((u) => u.childrenIndex),
          r.routesMeta.map((u) => u.childrenIndex)
        )
  );
}
var Kb = /^:[\w-]+$/,
  Jb = 3,
  Ib = 2,
  $b = 1,
  Pb = 10,
  Wb = -2,
  Hp = (n) => n === "*";
function ev(n, a) {
  let r = n.split("/"),
    u = r.length;
  return (
    r.some(Hp) && (u += Wb),
    a && (u += Ib),
    r
      .filter((o) => !Hp(o))
      .reduce((o, c) => o + (Kb.test(c) ? Jb : c === "" ? $b : Pb), u)
  );
}
function tv(n, a) {
  return n.length === a.length && n.slice(0, -1).every((u, o) => u === a[o])
    ? n[n.length - 1] - a[a.length - 1]
    : 0;
}
function nv(n, a, r = !1) {
  let { routesMeta: u } = n,
    o = {},
    c = "/",
    h = [];
  for (let d = 0; d < u.length; ++d) {
    let y = u[d],
      m = d === u.length - 1,
      p = c === "/" ? a : a.slice(c.length) || "/",
      b = ku(
        { path: y.relativePath, caseSensitive: y.caseSensitive, end: m },
        p
      ),
      S = y.route;
    if (
      (!b &&
        m &&
        r &&
        !u[u.length - 1].route.index &&
        (b = ku(
          { path: y.relativePath, caseSensitive: y.caseSensitive, end: !1 },
          p
        )),
      !b)
    )
      return null;
    Object.assign(o, b.params),
      h.push({
        params: o,
        pathname: Vn([c, b.pathname]),
        pathnameBase: sv(Vn([c, b.pathnameBase])),
        route: S,
      }),
      b.pathnameBase !== "/" && (c = Vn([c, b.pathnameBase]));
  }
  return h;
}
function ku(n, a) {
  typeof n == "string" && (n = { path: n, caseSensitive: !1, end: !0 });
  let [r, u] = lv(n.path, n.caseSensitive, n.end),
    o = a.match(r);
  if (!o) return null;
  let c = o[0],
    h = c.replace(/(.)\/+$/, "$1"),
    d = o.slice(1);
  return {
    params: u.reduce((m, { paramName: p, isOptional: b }, S) => {
      if (p === "*") {
        let T = d[S] || "";
        h = c.slice(0, c.length - T.length).replace(/(.)\/+$/, "$1");
      }
      const v = d[S];
      return (
        b && !v ? (m[p] = void 0) : (m[p] = (v || "").replace(/%2F/g, "/")), m
      );
    }, {}),
    pathname: c,
    pathnameBase: h,
    pattern: n,
  };
}
function lv(n, a = !1, r = !0) {
  ln(
    n === "*" || !n.endsWith("*") || n.endsWith("/*"),
    `Route path "${n}" will be treated as if it were "${n.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let u = [],
    o =
      "^" +
      n
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (h, d, y) => (
            u.push({ paramName: d, isOptional: y != null }),
            y ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        )
        .replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return (
    n.endsWith("*")
      ? (u.push({ paramName: "*" }),
        (o += n === "*" || n === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : r
      ? (o += "\\/*$")
      : n !== "" && n !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, a ? void 0 : "i"), u]
  );
}
function av(n) {
  try {
    return n
      .split("/")
      .map((a) => decodeURIComponent(a).replace(/\//g, "%2F"))
      .join("/");
  } catch (a) {
    return (
      ln(
        !1,
        `The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`
      ),
      n
    );
  }
}
function Xn(n, a) {
  if (a === "/") return n;
  if (!n.toLowerCase().startsWith(a.toLowerCase())) return null;
  let r = a.endsWith("/") ? a.length - 1 : a.length,
    u = n.charAt(r);
  return u && u !== "/" ? null : n.slice(r) || "/";
}
var iv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  rv = (n) => iv.test(n);
function uv(n, a = "/") {
  let {
      pathname: r,
      search: u = "",
      hash: o = "",
    } = typeof n == "string" ? ja(n) : n,
    c;
  if (r)
    if (rv(r)) c = r;
    else {
      if (r.includes("//")) {
        let h = r;
        (r = r.replace(/\/\/+/g, "/")),
          ln(
            !1,
            `Pathnames cannot have embedded double slashes - normalizing ${h} -> ${r}`
          );
      }
      r.startsWith("/") ? (c = qp(r.substring(1), "/")) : (c = qp(r, a));
    }
  else c = a;
  return { pathname: c, search: cv(u), hash: fv(o) };
}
function qp(n, a) {
  let r = a.replace(/\/+$/, "").split("/");
  return (
    n.split("/").forEach((o) => {
      o === ".." ? r.length > 1 && r.pop() : o !== "." && r.push(o);
    }),
    r.length > 1 ? r.join("/") : "/"
  );
}
function yc(n, a, r, u) {
  return `Cannot include a '${n}' character in a manually specified \`to.${a}\` field [${JSON.stringify(
    u
  )}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function ov(n) {
  return n.filter(
    (a, r) => r === 0 || (a.route.path && a.route.path.length > 0)
  );
}
function Py(n) {
  let a = ov(n);
  return a.map((r, u) => (u === a.length - 1 ? r.pathname : r.pathnameBase));
}
function Wy(n, a, r, u = !1) {
  let o;
  typeof n == "string"
    ? (o = ja(n))
    : ((o = { ...n }),
      Ie(
        !o.pathname || !o.pathname.includes("?"),
        yc("?", "pathname", "search", o)
      ),
      Ie(
        !o.pathname || !o.pathname.includes("#"),
        yc("#", "pathname", "hash", o)
      ),
      Ie(!o.search || !o.search.includes("#"), yc("#", "search", "hash", o)));
  let c = n === "" || o.pathname === "",
    h = c ? "/" : o.pathname,
    d;
  if (h == null) d = r;
  else {
    let b = a.length - 1;
    if (!u && h.startsWith("..")) {
      let S = h.split("/");
      for (; S[0] === ".."; ) S.shift(), (b -= 1);
      o.pathname = S.join("/");
    }
    d = b >= 0 ? a[b] : "/";
  }
  let y = uv(o, d),
    m = h && h !== "/" && h.endsWith("/"),
    p = (c || h === ".") && r.endsWith("/");
  return !y.pathname.endsWith("/") && (m || p) && (y.pathname += "/"), y;
}
var Vn = (n) => n.join("/").replace(/\/\/+/g, "/"),
  sv = (n) => n.replace(/\/+$/, "").replace(/^\/*/, "/"),
  cv = (n) => (!n || n === "?" ? "" : n.startsWith("?") ? n : "?" + n),
  fv = (n) => (!n || n === "#" ? "" : n.startsWith("#") ? n : "#" + n);
function hv(n) {
  return (
    n != null &&
    typeof n.status == "number" &&
    typeof n.statusText == "string" &&
    typeof n.internal == "boolean" &&
    "data" in n
  );
}
function dv(n) {
  return (
    n
      .map((a) => a.route.path)
      .filter(Boolean)
      .join("/")
      .replace(/\/\/*/g, "/") || "/"
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var eg = ["POST", "PUT", "PATCH", "DELETE"];
new Set(eg);
var mv = ["GET", ...eg];
new Set(mv);
var La = q.createContext(null);
La.displayName = "DataRouter";
var Bu = q.createContext(null);
Bu.displayName = "DataRouterState";
q.createContext(!1);
var tg = q.createContext({ isTransitioning: !1 });
tg.displayName = "ViewTransition";
var pv = q.createContext(new Map());
pv.displayName = "Fetchers";
var yv = q.createContext(null);
yv.displayName = "Await";
var sn = q.createContext(null);
sn.displayName = "Navigation";
var Fi = q.createContext(null);
Fi.displayName = "Location";
var Gn = q.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Gn.displayName = "Route";
var lf = q.createContext(null);
lf.displayName = "RouteError";
function gv(n, { relative: a } = {}) {
  Ie(
    Ki(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: r, navigator: u } = q.useContext(sn),
    { hash: o, pathname: c, search: h } = Ji(n, { relative: a }),
    d = c;
  return (
    r !== "/" && (d = c === "/" ? r : Vn([r, c])),
    u.createHref({ pathname: d, search: h, hash: o })
  );
}
function Ki() {
  return q.useContext(Fi) != null;
}
function gl() {
  return (
    Ie(
      Ki(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    q.useContext(Fi).location
  );
}
var ng =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function lg(n) {
  q.useContext(sn).static || q.useLayoutEffect(n);
}
function af() {
  let { isDataRoute: n } = q.useContext(Gn);
  return n ? Nv() : bv();
}
function bv() {
  Ie(
    Ki(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let n = q.useContext(La),
    { basename: a, navigator: r } = q.useContext(sn),
    { matches: u } = q.useContext(Gn),
    { pathname: o } = gl(),
    c = JSON.stringify(Py(u)),
    h = q.useRef(!1);
  return (
    lg(() => {
      h.current = !0;
    }),
    q.useCallback(
      (y, m = {}) => {
        if ((ln(h.current, ng), !h.current)) return;
        if (typeof y == "number") {
          r.go(y);
          return;
        }
        let p = Wy(y, JSON.parse(c), o, m.relative === "path");
        n == null &&
          a !== "/" &&
          (p.pathname = p.pathname === "/" ? a : Vn([a, p.pathname])),
          (m.replace ? r.replace : r.push)(p, m.state, m);
      },
      [a, r, c, o, n]
    )
  );
}
q.createContext(null);
function Ji(n, { relative: a } = {}) {
  let { matches: r } = q.useContext(Gn),
    { pathname: u } = gl(),
    o = JSON.stringify(Py(r));
  return q.useMemo(() => Wy(n, JSON.parse(o), u, a === "path"), [n, o, u, a]);
}
function vv(n, a) {
  return ag(n, a);
}
function ag(n, a, r, u, o) {
  var Z;
  Ie(
    Ki(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: c } = q.useContext(sn),
    { matches: h } = q.useContext(Gn),
    d = h[h.length - 1],
    y = d ? d.params : {},
    m = d ? d.pathname : "/",
    p = d ? d.pathnameBase : "/",
    b = d && d.route;
  {
    let k = (b && b.path) || "";
    ig(
      m,
      !b || k.endsWith("*") || k.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${k}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${k}"> to <Route path="${
        k === "/" ? "*" : `${k}/*`
      }">.`
    );
  }
  let S = gl(),
    v;
  if (a) {
    let k = typeof a == "string" ? ja(a) : a;
    Ie(
      p === "/" || ((Z = k.pathname) == null ? void 0 : Z.startsWith(p)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${k.pathname}" was given in the \`location\` prop.`
    ),
      (v = k);
  } else v = S;
  let T = v.pathname || "/",
    O = T;
  if (p !== "/") {
    let k = p.replace(/^\//, "").split("/");
    O = "/" + T.replace(/^\//, "").split("/").slice(k.length).join("/");
  }
  let N = Jy(n, { pathname: O });
  ln(
    b || N != null,
    `No routes matched location "${v.pathname}${v.search}${v.hash}" `
  ),
    ln(
      N == null ||
        N[N.length - 1].route.element !== void 0 ||
        N[N.length - 1].route.Component !== void 0 ||
        N[N.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let _ = Tv(
    N &&
      N.map((k) =>
        Object.assign({}, k, {
          params: Object.assign({}, y, k.params),
          pathname: Vn([
            p,
            c.encodeLocation
              ? c.encodeLocation(
                  k.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")
                ).pathname
              : k.pathname,
          ]),
          pathnameBase:
            k.pathnameBase === "/"
              ? p
              : Vn([
                  p,
                  c.encodeLocation
                    ? c.encodeLocation(
                        k.pathnameBase
                          .replace(/\?/g, "%3F")
                          .replace(/#/g, "%23")
                      ).pathname
                    : k.pathnameBase,
                ]),
        })
      ),
    h,
    r,
    u,
    o
  );
  return a && _
    ? q.createElement(
        Fi.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...v,
            },
            navigationType: "POP",
          },
        },
        _
      )
    : _;
}
function xv() {
  let n = Rv(),
    a = hv(n)
      ? `${n.status} ${n.statusText}`
      : n instanceof Error
      ? n.message
      : JSON.stringify(n),
    r = n instanceof Error ? n.stack : null,
    u = "rgba(200,200,200, 0.5)",
    o = { padding: "0.5rem", backgroundColor: u },
    c = { padding: "2px 4px", backgroundColor: u },
    h = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", n),
    (h = q.createElement(
      q.Fragment,
      null,
      q.createElement("p", null, "💿 Hey developer 👋"),
      q.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        q.createElement("code", { style: c }, "ErrorBoundary"),
        " or",
        " ",
        q.createElement("code", { style: c }, "errorElement"),
        " prop on your route."
      )
    )),
    q.createElement(
      q.Fragment,
      null,
      q.createElement("h2", null, "Unexpected Application Error!"),
      q.createElement("h3", { style: { fontStyle: "italic" } }, a),
      r ? q.createElement("pre", { style: o }, r) : null,
      h
    )
  );
}
var Sv = q.createElement(xv, null),
  Ev = class extends q.Component {
    constructor(n) {
      super(n),
        (this.state = {
          location: n.location,
          revalidation: n.revalidation,
          error: n.error,
        });
    }
    static getDerivedStateFromError(n) {
      return { error: n };
    }
    static getDerivedStateFromProps(n, a) {
      return a.location !== n.location ||
        (a.revalidation !== "idle" && n.revalidation === "idle")
        ? { error: n.error, location: n.location, revalidation: n.revalidation }
        : {
            error: n.error !== void 0 ? n.error : a.error,
            location: a.location,
            revalidation: n.revalidation || a.revalidation,
          };
    }
    componentDidCatch(n, a) {
      this.props.onError
        ? this.props.onError(n, a)
        : console.error(
            "React Router caught the following error during render",
            n
          );
    }
    render() {
      return this.state.error !== void 0
        ? q.createElement(
            Gn.Provider,
            { value: this.props.routeContext },
            q.createElement(lf.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function wv({ routeContext: n, match: a, children: r }) {
  let u = q.useContext(La);
  return (
    u &&
      u.static &&
      u.staticContext &&
      (a.route.errorElement || a.route.ErrorBoundary) &&
      (u.staticContext._deepestRenderedBoundaryId = a.route.id),
    q.createElement(Gn.Provider, { value: n }, r)
  );
}
function Tv(n, a = [], r = null, u = null, o = null) {
  if (n == null) {
    if (!r) return null;
    if (r.errors) n = r.matches;
    else if (a.length === 0 && !r.initialized && r.matches.length > 0)
      n = r.matches;
    else return null;
  }
  let c = n,
    h = r == null ? void 0 : r.errors;
  if (h != null) {
    let p = c.findIndex(
      (b) => b.route.id && (h == null ? void 0 : h[b.route.id]) !== void 0
    );
    Ie(
      p >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        h
      ).join(",")}`
    ),
      (c = c.slice(0, Math.min(c.length, p + 1)));
  }
  let d = !1,
    y = -1;
  if (r)
    for (let p = 0; p < c.length; p++) {
      let b = c[p];
      if (
        ((b.route.HydrateFallback || b.route.hydrateFallbackElement) && (y = p),
        b.route.id)
      ) {
        let { loaderData: S, errors: v } = r,
          T =
            b.route.loader &&
            !S.hasOwnProperty(b.route.id) &&
            (!v || v[b.route.id] === void 0);
        if (b.route.lazy || T) {
          (d = !0), y >= 0 ? (c = c.slice(0, y + 1)) : (c = [c[0]]);
          break;
        }
      }
    }
  let m =
    r && u
      ? (p, b) => {
          var S, v;
          u(p, {
            location: r.location,
            params:
              ((v = (S = r.matches) == null ? void 0 : S[0]) == null
                ? void 0
                : v.params) ?? {},
            unstable_pattern: dv(r.matches),
            errorInfo: b,
          });
        }
      : void 0;
  return c.reduceRight((p, b, S) => {
    let v,
      T = !1,
      O = null,
      N = null;
    r &&
      ((v = h && b.route.id ? h[b.route.id] : void 0),
      (O = b.route.errorElement || Sv),
      d &&
        (y < 0 && S === 0
          ? (ig(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (T = !0),
            (N = null))
          : y === S &&
            ((T = !0), (N = b.route.hydrateFallbackElement || null))));
    let _ = a.concat(c.slice(0, S + 1)),
      Z = () => {
        let k;
        return (
          v
            ? (k = O)
            : T
            ? (k = N)
            : b.route.Component
            ? (k = q.createElement(b.route.Component, null))
            : b.route.element
            ? (k = b.route.element)
            : (k = p),
          q.createElement(wv, {
            match: b,
            routeContext: { outlet: p, matches: _, isDataRoute: r != null },
            children: k,
          })
        );
      };
    return r && (b.route.ErrorBoundary || b.route.errorElement || S === 0)
      ? q.createElement(Ev, {
          location: r.location,
          revalidation: r.revalidation,
          component: O,
          error: v,
          children: Z(),
          routeContext: { outlet: null, matches: _, isDataRoute: !0 },
          onError: m,
        })
      : Z();
  }, null);
}
function rf(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Av(n) {
  let a = q.useContext(La);
  return Ie(a, rf(n)), a;
}
function Cv(n) {
  let a = q.useContext(Bu);
  return Ie(a, rf(n)), a;
}
function zv(n) {
  let a = q.useContext(Gn);
  return Ie(a, rf(n)), a;
}
function uf(n) {
  let a = zv(n),
    r = a.matches[a.matches.length - 1];
  return (
    Ie(
      r.route.id,
      `${n} can only be used on routes that contain a unique "id"`
    ),
    r.route.id
  );
}
function Ov() {
  return uf("useRouteId");
}
function Rv() {
  var u;
  let n = q.useContext(lf),
    a = Cv("useRouteError"),
    r = uf("useRouteError");
  return n !== void 0 ? n : (u = a.errors) == null ? void 0 : u[r];
}
function Nv() {
  let { router: n } = Av("useNavigate"),
    a = uf("useNavigate"),
    r = q.useRef(!1);
  return (
    lg(() => {
      r.current = !0;
    }),
    q.useCallback(
      async (o, c = {}) => {
        ln(r.current, ng),
          r.current &&
            (typeof o == "number"
              ? await n.navigate(o)
              : await n.navigate(o, { fromRouteId: a, ...c }));
      },
      [n, a]
    )
  );
}
var Yp = {};
function ig(n, a, r) {
  !a && !Yp[n] && ((Yp[n] = !0), ln(!1, r));
}
q.memo(_v);
function _v({ routes: n, future: a, state: r, unstable_onError: u }) {
  return ag(n, void 0, r, u, a);
}
function jc(n) {
  Ie(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Dv({
  basename: n = "/",
  children: a = null,
  location: r,
  navigationType: u = "POP",
  navigator: o,
  static: c = !1,
  unstable_useTransitions: h,
}) {
  Ie(
    !Ki(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let d = n.replace(/^\/*/, "/"),
    y = q.useMemo(
      () => ({
        basename: d,
        navigator: o,
        static: c,
        unstable_useTransitions: h,
        future: {},
      }),
      [d, o, c, h]
    );
  typeof r == "string" && (r = ja(r));
  let {
      pathname: m = "/",
      search: p = "",
      hash: b = "",
      state: S = null,
      key: v = "default",
    } = r,
    T = q.useMemo(() => {
      let O = Xn(m, d);
      return O == null
        ? null
        : {
            location: { pathname: O, search: p, hash: b, state: S, key: v },
            navigationType: u,
          };
    }, [d, m, p, b, S, v, u]);
  return (
    ln(
      T != null,
      `<Router basename="${d}"> is not able to match the URL "${m}${p}${b}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    T == null
      ? null
      : q.createElement(
          sn.Provider,
          { value: y },
          q.createElement(Fi.Provider, { children: a, value: T })
        )
  );
}
function Mv({ children: n, location: a }) {
  return vv(Lc(n), a);
}
function Lc(n, a = []) {
  let r = [];
  return (
    q.Children.forEach(n, (u, o) => {
      if (!q.isValidElement(u)) return;
      let c = [...a, o];
      if (u.type === q.Fragment) {
        r.push.apply(r, Lc(u.props.children, c));
        return;
      }
      Ie(
        u.type === jc,
        `[${
          typeof u.type == "string" ? u.type : u.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        Ie(
          !u.props.index || !u.props.children,
          "An index route cannot have child routes."
        );
      let h = {
        id: u.props.id || c.join("-"),
        caseSensitive: u.props.caseSensitive,
        element: u.props.element,
        Component: u.props.Component,
        index: u.props.index,
        path: u.props.path,
        middleware: u.props.middleware,
        loader: u.props.loader,
        action: u.props.action,
        hydrateFallbackElement: u.props.hydrateFallbackElement,
        HydrateFallback: u.props.HydrateFallback,
        errorElement: u.props.errorElement,
        ErrorBoundary: u.props.ErrorBoundary,
        hasErrorBoundary:
          u.props.hasErrorBoundary === !0 ||
          u.props.ErrorBoundary != null ||
          u.props.errorElement != null,
        shouldRevalidate: u.props.shouldRevalidate,
        handle: u.props.handle,
        lazy: u.props.lazy,
      };
      u.props.children && (h.children = Lc(u.props.children, c)), r.push(h);
    }),
    r
  );
}
var Ou = "get",
  Ru = "application/x-www-form-urlencoded";
function Hu(n) {
  return typeof HTMLElement < "u" && n instanceof HTMLElement;
}
function kv(n) {
  return Hu(n) && n.tagName.toLowerCase() === "button";
}
function jv(n) {
  return Hu(n) && n.tagName.toLowerCase() === "form";
}
function Lv(n) {
  return Hu(n) && n.tagName.toLowerCase() === "input";
}
function Uv(n) {
  return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey);
}
function Bv(n, a) {
  return n.button === 0 && (!a || a === "_self") && !Uv(n);
}
function Uc(n = "") {
  return new URLSearchParams(
    typeof n == "string" || Array.isArray(n) || n instanceof URLSearchParams
      ? n
      : Object.keys(n).reduce((a, r) => {
          let u = n[r];
          return a.concat(Array.isArray(u) ? u.map((o) => [r, o]) : [[r, u]]);
        }, [])
  );
}
function Hv(n, a) {
  let r = Uc(n);
  return (
    a &&
      a.forEach((u, o) => {
        r.has(o) ||
          a.getAll(o).forEach((c) => {
            r.append(o, c);
          });
      }),
    r
  );
}
var wu = null;
function qv() {
  if (wu === null)
    try {
      new FormData(document.createElement("form"), 0), (wu = !1);
    } catch {
      wu = !0;
    }
  return wu;
}
var Yv = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function gc(n) {
  return n != null && !Yv.has(n)
    ? (ln(
        !1,
        `"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ru}"`
      ),
      null)
    : n;
}
function Vv(n, a) {
  let r, u, o, c, h;
  if (jv(n)) {
    let d = n.getAttribute("action");
    (u = d ? Xn(d, a) : null),
      (r = n.getAttribute("method") || Ou),
      (o = gc(n.getAttribute("enctype")) || Ru),
      (c = new FormData(n));
  } else if (kv(n) || (Lv(n) && (n.type === "submit" || n.type === "image"))) {
    let d = n.form;
    if (d == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let y = n.getAttribute("formaction") || d.getAttribute("action");
    if (
      ((u = y ? Xn(y, a) : null),
      (r = n.getAttribute("formmethod") || d.getAttribute("method") || Ou),
      (o =
        gc(n.getAttribute("formenctype")) ||
        gc(d.getAttribute("enctype")) ||
        Ru),
      (c = new FormData(d, n)),
      !qv())
    ) {
      let { name: m, type: p, value: b } = n;
      if (p === "image") {
        let S = m ? `${m}.` : "";
        c.append(`${S}x`, "0"), c.append(`${S}y`, "0");
      } else m && c.append(m, b);
    }
  } else {
    if (Hu(n))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (r = Ou), (u = null), (o = Ru), (h = n);
  }
  return (
    c && o === "text/plain" && ((h = c), (c = void 0)),
    { action: u, method: r.toLowerCase(), encType: o, formData: c, body: h }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function of(n, a) {
  if (n === !1 || n === null || typeof n > "u") throw new Error(a);
}
function Xv(n, a, r) {
  let u =
    typeof n == "string"
      ? new URL(
          n,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : n;
  return (
    u.pathname === "/"
      ? (u.pathname = `_root.${r}`)
      : a && Xn(u.pathname, a) === "/"
      ? (u.pathname = `${a.replace(/\/$/, "")}/_root.${r}`)
      : (u.pathname = `${u.pathname.replace(/\/$/, "")}.${r}`),
    u
  );
}
async function Gv(n, a) {
  if (n.id in a) return a[n.id];
  try {
    let r = await import(n.module);
    return (a[n.id] = r), r;
  } catch (r) {
    return (
      console.error(
        `Error loading route module \`${n.module}\`, reloading page...`
      ),
      console.error(r),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function Qv(n) {
  return n == null
    ? !1
    : n.href == null
    ? n.rel === "preload" &&
      typeof n.imageSrcSet == "string" &&
      typeof n.imageSizes == "string"
    : typeof n.rel == "string" && typeof n.href == "string";
}
async function Zv(n, a, r) {
  let u = await Promise.all(
    n.map(async (o) => {
      let c = a.routes[o.route.id];
      if (c) {
        let h = await Gv(c, r);
        return h.links ? h.links() : [];
      }
      return [];
    })
  );
  return Iv(
    u
      .flat(1)
      .filter(Qv)
      .filter((o) => o.rel === "stylesheet" || o.rel === "preload")
      .map((o) =>
        o.rel === "stylesheet"
          ? { ...o, rel: "prefetch", as: "style" }
          : { ...o, rel: "prefetch" }
      )
  );
}
function Vp(n, a, r, u, o, c) {
  let h = (y, m) => (r[m] ? y.route.id !== r[m].route.id : !0),
    d = (y, m) => {
      var p;
      return (
        r[m].pathname !== y.pathname ||
        (((p = r[m].route.path) == null ? void 0 : p.endsWith("*")) &&
          r[m].params["*"] !== y.params["*"])
      );
    };
  return c === "assets"
    ? a.filter((y, m) => h(y, m) || d(y, m))
    : c === "data"
    ? a.filter((y, m) => {
        var b;
        let p = u.routes[y.route.id];
        if (!p || !p.hasLoader) return !1;
        if (h(y, m) || d(y, m)) return !0;
        if (y.route.shouldRevalidate) {
          let S = y.route.shouldRevalidate({
            currentUrl: new URL(o.pathname + o.search + o.hash, window.origin),
            currentParams: ((b = r[0]) == null ? void 0 : b.params) || {},
            nextUrl: new URL(n, window.origin),
            nextParams: y.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof S == "boolean") return S;
        }
        return !0;
      })
    : [];
}
function Fv(n, a, { includeHydrateFallback: r } = {}) {
  return Kv(
    n
      .map((u) => {
        let o = a.routes[u.route.id];
        if (!o) return [];
        let c = [o.module];
        return (
          o.clientActionModule && (c = c.concat(o.clientActionModule)),
          o.clientLoaderModule && (c = c.concat(o.clientLoaderModule)),
          r &&
            o.hydrateFallbackModule &&
            (c = c.concat(o.hydrateFallbackModule)),
          o.imports && (c = c.concat(o.imports)),
          c
        );
      })
      .flat(1)
  );
}
function Kv(n) {
  return [...new Set(n)];
}
function Jv(n) {
  let a = {},
    r = Object.keys(n).sort();
  for (let u of r) a[u] = n[u];
  return a;
}
function Iv(n, a) {
  let r = new Set();
  return (
    new Set(a),
    n.reduce((u, o) => {
      let c = JSON.stringify(Jv(o));
      return r.has(c) || (r.add(c), u.push({ key: c, link: o })), u;
    }, [])
  );
}
function rg() {
  let n = q.useContext(La);
  return (
    of(
      n,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    n
  );
}
function $v() {
  let n = q.useContext(Bu);
  return (
    of(
      n,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    n
  );
}
var sf = q.createContext(void 0);
sf.displayName = "FrameworkContext";
function ug() {
  let n = q.useContext(sf);
  return (
    of(n, "You must render this element inside a <HydratedRouter> element"), n
  );
}
function Pv(n, a) {
  let r = q.useContext(sf),
    [u, o] = q.useState(!1),
    [c, h] = q.useState(!1),
    {
      onFocus: d,
      onBlur: y,
      onMouseEnter: m,
      onMouseLeave: p,
      onTouchStart: b,
    } = a,
    S = q.useRef(null);
  q.useEffect(() => {
    if ((n === "render" && h(!0), n === "viewport")) {
      let O = (_) => {
          _.forEach((Z) => {
            h(Z.isIntersecting);
          });
        },
        N = new IntersectionObserver(O, { threshold: 0.5 });
      return (
        S.current && N.observe(S.current),
        () => {
          N.disconnect();
        }
      );
    }
  }, [n]),
    q.useEffect(() => {
      if (u) {
        let O = setTimeout(() => {
          h(!0);
        }, 100);
        return () => {
          clearTimeout(O);
        };
      }
    }, [u]);
  let v = () => {
      o(!0);
    },
    T = () => {
      o(!1), h(!1);
    };
  return r
    ? n !== "intent"
      ? [c, S, {}]
      : [
          c,
          S,
          {
            onFocus: Li(d, v),
            onBlur: Li(y, T),
            onMouseEnter: Li(m, v),
            onMouseLeave: Li(p, T),
            onTouchStart: Li(b, v),
          },
        ]
    : [!1, S, {}];
}
function Li(n, a) {
  return (r) => {
    n && n(r), r.defaultPrevented || a(r);
  };
}
function Wv({ page: n, ...a }) {
  let { router: r } = rg(),
    u = q.useMemo(() => Jy(r.routes, n, r.basename), [r.routes, n, r.basename]);
  return u ? q.createElement(tx, { page: n, matches: u, ...a }) : null;
}
function ex(n) {
  let { manifest: a, routeModules: r } = ug(),
    [u, o] = q.useState([]);
  return (
    q.useEffect(() => {
      let c = !1;
      return (
        Zv(n, a, r).then((h) => {
          c || o(h);
        }),
        () => {
          c = !0;
        }
      );
    }, [n, a, r]),
    u
  );
}
function tx({ page: n, matches: a, ...r }) {
  let u = gl(),
    { manifest: o, routeModules: c } = ug(),
    { basename: h } = rg(),
    { loaderData: d, matches: y } = $v(),
    m = q.useMemo(() => Vp(n, a, y, o, u, "data"), [n, a, y, o, u]),
    p = q.useMemo(() => Vp(n, a, y, o, u, "assets"), [n, a, y, o, u]),
    b = q.useMemo(() => {
      if (n === u.pathname + u.search + u.hash) return [];
      let T = new Set(),
        O = !1;
      if (
        (a.forEach((_) => {
          var k;
          let Z = o.routes[_.route.id];
          !Z ||
            !Z.hasLoader ||
            ((!m.some((ee) => ee.route.id === _.route.id) &&
              _.route.id in d &&
              (k = c[_.route.id]) != null &&
              k.shouldRevalidate) ||
            Z.hasClientLoader
              ? (O = !0)
              : T.add(_.route.id));
        }),
        T.size === 0)
      )
        return [];
      let N = Xv(n, h, "data");
      return (
        O &&
          T.size > 0 &&
          N.searchParams.set(
            "_routes",
            a
              .filter((_) => T.has(_.route.id))
              .map((_) => _.route.id)
              .join(",")
          ),
        [N.pathname + N.search]
      );
    }, [h, d, u, o, m, a, n, c]),
    S = q.useMemo(() => Fv(p, o), [p, o]),
    v = ex(p);
  return q.createElement(
    q.Fragment,
    null,
    b.map((T) =>
      q.createElement("link", {
        key: T,
        rel: "prefetch",
        as: "fetch",
        href: T,
        ...r,
      })
    ),
    S.map((T) =>
      q.createElement("link", { key: T, rel: "modulepreload", href: T, ...r })
    ),
    v.map(({ key: T, link: O }) =>
      q.createElement("link", { key: T, nonce: r.nonce, ...O })
    )
  );
}
function nx(...n) {
  return (a) => {
    n.forEach((r) => {
      typeof r == "function" ? r(a) : r != null && (r.current = a);
    });
  };
}
var og =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  og && (window.__reactRouterVersion = "7.10.1");
} catch {}
function lx({
  basename: n,
  children: a,
  unstable_useTransitions: r,
  window: u,
}) {
  let o = q.useRef();
  o.current == null && (o.current = Vb({ window: u, v5Compat: !0 }));
  let c = o.current,
    [h, d] = q.useState({ action: c.action, location: c.location }),
    y = q.useCallback(
      (m) => {
        r === !1 ? d(m) : q.startTransition(() => d(m));
      },
      [r]
    );
  return (
    q.useLayoutEffect(() => c.listen(y), [c, y]),
    q.createElement(Dv, {
      basename: n,
      children: a,
      location: h.location,
      navigationType: h.action,
      navigator: c,
      unstable_useTransitions: r === !0,
    })
  );
}
var sg = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  cg = q.forwardRef(function (
    {
      onClick: a,
      discover: r = "render",
      prefetch: u = "none",
      relative: o,
      reloadDocument: c,
      replace: h,
      state: d,
      target: y,
      to: m,
      preventScrollReset: p,
      viewTransition: b,
      ...S
    },
    v
  ) {
    let { basename: T, unstable_useTransitions: O } = q.useContext(sn),
      N = typeof m == "string" && sg.test(m),
      _,
      Z = !1;
    if (typeof m == "string" && N && ((_ = m), og))
      try {
        let me = new URL(window.location.href),
          ne = m.startsWith("//") ? new URL(me.protocol + m) : new URL(m),
          te = Xn(ne.pathname, T);
        ne.origin === me.origin && te != null
          ? (m = te + ne.search + ne.hash)
          : (Z = !0);
      } catch {
        ln(
          !1,
          `<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let k = gv(m, { relative: o }),
      [ee, ae, Y] = Pv(u, S),
      I = ux(m, {
        replace: h,
        state: d,
        target: y,
        preventScrollReset: p,
        relative: o,
        viewTransition: b,
        unstable_useTransitions: O,
      });
    function de(me) {
      a && a(me), me.defaultPrevented || I(me);
    }
    let ce = q.createElement("a", {
      ...S,
      ...Y,
      href: _ || k,
      onClick: Z || c ? a : de,
      ref: nx(v, ae),
      target: y,
      "data-discover": !N && r === "render" ? "true" : void 0,
    });
    return ee && !N
      ? q.createElement(q.Fragment, null, ce, q.createElement(Wv, { page: k }))
      : ce;
  });
cg.displayName = "Link";
var ax = q.forwardRef(function (
  {
    "aria-current": a = "page",
    caseSensitive: r = !1,
    className: u = "",
    end: o = !1,
    style: c,
    to: h,
    viewTransition: d,
    children: y,
    ...m
  },
  p
) {
  let b = Ji(h, { relative: m.relative }),
    S = gl(),
    v = q.useContext(Bu),
    { navigator: T, basename: O } = q.useContext(sn),
    N = v != null && dx(b) && d === !0,
    _ = T.encodeLocation ? T.encodeLocation(b).pathname : b.pathname,
    Z = S.pathname,
    k =
      v && v.navigation && v.navigation.location
        ? v.navigation.location.pathname
        : null;
  r ||
    ((Z = Z.toLowerCase()),
    (k = k ? k.toLowerCase() : null),
    (_ = _.toLowerCase())),
    k && O && (k = Xn(k, O) || k);
  const ee = _ !== "/" && _.endsWith("/") ? _.length - 1 : _.length;
  let ae = Z === _ || (!o && Z.startsWith(_) && Z.charAt(ee) === "/"),
    Y =
      k != null &&
      (k === _ || (!o && k.startsWith(_) && k.charAt(_.length) === "/")),
    I = { isActive: ae, isPending: Y, isTransitioning: N },
    de = ae ? a : void 0,
    ce;
  typeof u == "function"
    ? (ce = u(I))
    : (ce = [
        u,
        ae ? "active" : null,
        Y ? "pending" : null,
        N ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let me = typeof c == "function" ? c(I) : c;
  return q.createElement(
    cg,
    {
      ...m,
      "aria-current": de,
      className: ce,
      ref: p,
      style: me,
      to: h,
      viewTransition: d,
    },
    typeof y == "function" ? y(I) : y
  );
});
ax.displayName = "NavLink";
var ix = q.forwardRef(
  (
    {
      discover: n = "render",
      fetcherKey: a,
      navigate: r,
      reloadDocument: u,
      replace: o,
      state: c,
      method: h = Ou,
      action: d,
      onSubmit: y,
      relative: m,
      preventScrollReset: p,
      viewTransition: b,
      ...S
    },
    v
  ) => {
    let { unstable_useTransitions: T } = q.useContext(sn),
      O = fx(),
      N = hx(d, { relative: m }),
      _ = h.toLowerCase() === "get" ? "get" : "post",
      Z = typeof d == "string" && sg.test(d),
      k = (ee) => {
        if ((y && y(ee), ee.defaultPrevented)) return;
        ee.preventDefault();
        let ae = ee.nativeEvent.submitter,
          Y = (ae == null ? void 0 : ae.getAttribute("formmethod")) || h,
          I = () =>
            O(ae || ee.currentTarget, {
              fetcherKey: a,
              method: Y,
              navigate: r,
              replace: o,
              state: c,
              relative: m,
              preventScrollReset: p,
              viewTransition: b,
            });
        T && r !== !1 ? q.startTransition(() => I()) : I();
      };
    return q.createElement("form", {
      ref: v,
      method: _,
      action: N,
      onSubmit: u ? y : k,
      ...S,
      "data-discover": !Z && n === "render" ? "true" : void 0,
    });
  }
);
ix.displayName = "Form";
function rx(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function fg(n) {
  let a = q.useContext(La);
  return Ie(a, rx(n)), a;
}
function ux(
  n,
  {
    target: a,
    replace: r,
    state: u,
    preventScrollReset: o,
    relative: c,
    viewTransition: h,
    unstable_useTransitions: d,
  } = {}
) {
  let y = af(),
    m = gl(),
    p = Ji(n, { relative: c });
  return q.useCallback(
    (b) => {
      if (Bv(b, a)) {
        b.preventDefault();
        let S = r !== void 0 ? r : Qi(m) === Qi(p),
          v = () =>
            y(n, {
              replace: S,
              state: u,
              preventScrollReset: o,
              relative: c,
              viewTransition: h,
            });
        d ? q.startTransition(() => v()) : v();
      }
    },
    [m, y, p, r, u, a, n, o, c, h, d]
  );
}
function ox(n) {
  ln(
    typeof URLSearchParams < "u",
    "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params."
  );
  let a = q.useRef(Uc(n)),
    r = q.useRef(!1),
    u = gl(),
    o = q.useMemo(() => Hv(u.search, r.current ? null : a.current), [u.search]),
    c = af(),
    h = q.useCallback(
      (d, y) => {
        const m = Uc(typeof d == "function" ? d(new URLSearchParams(o)) : d);
        (r.current = !0), c("?" + m, y);
      },
      [c, o]
    );
  return [o, h];
}
var sx = 0,
  cx = () => `__${String(++sx)}__`;
function fx() {
  let { router: n } = fg("useSubmit"),
    { basename: a } = q.useContext(sn),
    r = Ov(),
    u = n.fetch,
    o = n.navigate;
  return q.useCallback(
    async (c, h = {}) => {
      let { action: d, method: y, encType: m, formData: p, body: b } = Vv(c, a);
      if (h.navigate === !1) {
        let S = h.fetcherKey || cx();
        await u(S, r, h.action || d, {
          preventScrollReset: h.preventScrollReset,
          formData: p,
          body: b,
          formMethod: h.method || y,
          formEncType: h.encType || m,
          flushSync: h.flushSync,
        });
      } else
        await o(h.action || d, {
          preventScrollReset: h.preventScrollReset,
          formData: p,
          body: b,
          formMethod: h.method || y,
          formEncType: h.encType || m,
          replace: h.replace,
          state: h.state,
          fromRouteId: r,
          flushSync: h.flushSync,
          viewTransition: h.viewTransition,
        });
    },
    [u, o, a, r]
  );
}
function hx(n, { relative: a } = {}) {
  let { basename: r } = q.useContext(sn),
    u = q.useContext(Gn);
  Ie(u, "useFormAction must be used inside a RouteContext");
  let [o] = u.matches.slice(-1),
    c = { ...Ji(n || ".", { relative: a }) },
    h = gl();
  if (n == null) {
    c.search = h.search;
    let d = new URLSearchParams(c.search),
      y = d.getAll("index");
    if (y.some((p) => p === "")) {
      d.delete("index"),
        y.filter((b) => b).forEach((b) => d.append("index", b));
      let p = d.toString();
      c.search = p ? `?${p}` : "";
    }
  }
  return (
    (!n || n === ".") &&
      o.route.index &&
      (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"),
    r !== "/" && (c.pathname = c.pathname === "/" ? r : Vn([r, c.pathname])),
    Qi(c)
  );
}
function dx(n, { relative: a } = {}) {
  let r = q.useContext(tg);
  Ie(
    r != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: u } = fg("useViewTransitionState"),
    o = Ji(n, { relative: a });
  if (!r.isTransitioning) return !1;
  let c = Xn(r.currentLocation.pathname, u) || r.currentLocation.pathname,
    h = Xn(r.nextLocation.pathname, u) || r.nextLocation.pathname;
  return ku(o.pathname, h) != null || ku(o.pathname, c) != null;
}
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mx = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  hg = (...n) =>
    n
      .filter((a, r, u) => !!a && a.trim() !== "" && u.indexOf(a) === r)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var px = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yx = q.forwardRef(
  (
    {
      color: n = "currentColor",
      size: a = 24,
      strokeWidth: r = 2,
      absoluteStrokeWidth: u,
      className: o = "",
      children: c,
      iconNode: h,
      ...d
    },
    y
  ) =>
    q.createElement(
      "svg",
      {
        ref: y,
        ...px,
        width: a,
        height: a,
        stroke: n,
        strokeWidth: u ? (Number(r) * 24) / Number(a) : r,
        className: hg("lucide", o),
        ...d,
      },
      [
        ...h.map(([m, p]) => q.createElement(m, p)),
        ...(Array.isArray(c) ? c : [c]),
      ]
    )
);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vn = (n, a) => {
  const r = q.forwardRef(({ className: u, ...o }, c) =>
    q.createElement(yx, {
      ref: c,
      iconNode: a,
      className: hg(`lucide-${mx(n)}`, u),
      ...o,
    })
  );
  return (r.displayName = `${n}`), r;
};
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _a = vn("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xp = vn("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gp = vn("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gx = vn("Ellipsis", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bx = vn("MessageSquare", [
  [
    "path",
    {
      d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
      key: "1lielz",
    },
  ],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vx = vn("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xx = vn("RefreshCw", [
  [
    "path",
    { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" },
  ],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  [
    "path",
    { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" },
  ],
  ["path", { d: "M8 16H3v5", key: "1cv678" }],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sx = vn("Send", [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3",
    },
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ex = vn("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wx = vn("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  Qp = (n) => {
    let a;
    const r = new Set(),
      u = (m, p) => {
        const b = typeof m == "function" ? m(a) : m;
        if (!Object.is(b, a)) {
          const S = a;
          (a =
            p ?? (typeof b != "object" || b === null)
              ? b
              : Object.assign({}, a, b)),
            r.forEach((v) => v(a, S));
        }
      },
      o = () => a,
      d = {
        setState: u,
        getState: o,
        getInitialState: () => y,
        subscribe: (m) => (r.add(m), () => r.delete(m)),
      },
      y = (a = n(u, o, d));
    return d;
  },
  Tx = (n) => (n ? Qp(n) : Qp),
  Ax = (n) => n;
function Cx(n, a = Ax) {
  const r = Eu.useSyncExternalStore(
    n.subscribe,
    Eu.useCallback(() => a(n.getState()), [n, a]),
    Eu.useCallback(() => a(n.getInitialState()), [n, a])
  );
  return Eu.useDebugValue(r), r;
}
const Zp = (n) => {
    const a = Tx(n),
      r = (u) => Cx(a, u);
    return Object.assign(r, a), r;
  },
  cf = (n) => (n ? Zp(n) : Zp);
function zx(n, a) {
  let r;
  try {
    r = n();
  } catch {
    return;
  }
  return {
    getItem: (o) => {
      var c;
      const h = (y) => (y === null ? null : JSON.parse(y, void 0)),
        d = (c = r.getItem(o)) != null ? c : null;
      return d instanceof Promise ? d.then(h) : h(d);
    },
    setItem: (o, c) => r.setItem(o, JSON.stringify(c, void 0)),
    removeItem: (o) => r.removeItem(o),
  };
}
const Bc = (n) => (a) => {
    try {
      const r = n(a);
      return r instanceof Promise
        ? r
        : {
            then(u) {
              return Bc(u)(r);
            },
            catch(u) {
              return this;
            },
          };
    } catch (r) {
      return {
        then(u) {
          return this;
        },
        catch(u) {
          return Bc(u)(r);
        },
      };
    }
  },
  Ox = (n, a) => (r, u, o) => {
    let c = {
        storage: zx(() => localStorage),
        partialize: (O) => O,
        version: 0,
        merge: (O, N) => ({ ...N, ...O }),
        ...a,
      },
      h = !1;
    const d = new Set(),
      y = new Set();
    let m = c.storage;
    if (!m)
      return n(
        (...O) => {
          console.warn(
            `[zustand persist middleware] Unable to update item '${c.name}', the given storage is currently unavailable.`
          ),
            r(...O);
        },
        u,
        o
      );
    const p = () => {
        const O = c.partialize({ ...u() });
        return m.setItem(c.name, { state: O, version: c.version });
      },
      b = o.setState;
    o.setState = (O, N) => (b(O, N), p());
    const S = n((...O) => (r(...O), p()), u, o);
    o.getInitialState = () => S;
    let v;
    const T = () => {
      var O, N;
      if (!m) return;
      (h = !1),
        d.forEach((Z) => {
          var k;
          return Z((k = u()) != null ? k : S);
        });
      const _ =
        ((N = c.onRehydrateStorage) == null
          ? void 0
          : N.call(c, (O = u()) != null ? O : S)) || void 0;
      return Bc(m.getItem.bind(m))(c.name)
        .then((Z) => {
          if (Z)
            if (typeof Z.version == "number" && Z.version !== c.version) {
              if (c.migrate) {
                const k = c.migrate(Z.state, Z.version);
                return k instanceof Promise
                  ? k.then((ee) => [!0, ee])
                  : [!0, k];
              }
              console.error(
                "State loaded from storage couldn't be migrated since no migrate function was provided"
              );
            } else return [!1, Z.state];
          return [!1, void 0];
        })
        .then((Z) => {
          var k;
          const [ee, ae] = Z;
          if (((v = c.merge(ae, (k = u()) != null ? k : S)), r(v, !0), ee))
            return p();
        })
        .then(() => {
          _ == null || _(v, void 0),
            (v = u()),
            (h = !0),
            y.forEach((Z) => Z(v));
        })
        .catch((Z) => {
          _ == null || _(void 0, Z);
        });
    };
    return (
      (o.persist = {
        setOptions: (O) => {
          (c = { ...c, ...O }), O.storage && (m = O.storage);
        },
        clearStorage: () => {
          m == null || m.removeItem(c.name);
        },
        getOptions: () => c,
        rehydrate: () => T(),
        hasHydrated: () => h,
        onHydrate: (O) => (
          d.add(O),
          () => {
            d.delete(O);
          }
        ),
        onFinishHydration: (O) => (
          y.add(O),
          () => {
            y.delete(O);
          }
        ),
      }),
      c.skipHydration || T(),
      v || S
    );
  },
  Rx = Ox;
function dg(n, a) {
  return function () {
    return n.apply(a, arguments);
  };
}
const { toString: Nx } = Object.prototype,
  { getPrototypeOf: ff } = Object,
  { iterator: qu, toStringTag: mg } = Symbol,
  Yu = ((n) => (a) => {
    const r = Nx.call(a);
    return n[r] || (n[r] = r.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  cn = (n) => ((n = n.toLowerCase()), (a) => Yu(a) === n),
  Vu = (n) => (a) => typeof a === n,
  { isArray: Ua } = Array,
  ka = Vu("undefined");
function Ii(n) {
  return (
    n !== null &&
    !ka(n) &&
    n.constructor !== null &&
    !ka(n.constructor) &&
    _t(n.constructor.isBuffer) &&
    n.constructor.isBuffer(n)
  );
}
const pg = cn("ArrayBuffer");
function _x(n) {
  let a;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (a = ArrayBuffer.isView(n))
      : (a = n && n.buffer && pg(n.buffer)),
    a
  );
}
const Dx = Vu("string"),
  _t = Vu("function"),
  yg = Vu("number"),
  $i = (n) => n !== null && typeof n == "object",
  Mx = (n) => n === !0 || n === !1,
  Nu = (n) => {
    if (Yu(n) !== "object") return !1;
    const a = ff(n);
    return (
      (a === null ||
        a === Object.prototype ||
        Object.getPrototypeOf(a) === null) &&
      !(mg in n) &&
      !(qu in n)
    );
  },
  kx = (n) => {
    if (!$i(n) || Ii(n)) return !1;
    try {
      return (
        Object.keys(n).length === 0 &&
        Object.getPrototypeOf(n) === Object.prototype
      );
    } catch {
      return !1;
    }
  },
  jx = cn("Date"),
  Lx = cn("File"),
  Ux = cn("Blob"),
  Bx = cn("FileList"),
  Hx = (n) => $i(n) && _t(n.pipe),
  qx = (n) => {
    let a;
    return (
      n &&
      ((typeof FormData == "function" && n instanceof FormData) ||
        (_t(n.append) &&
          ((a = Yu(n)) === "formdata" ||
            (a === "object" &&
              _t(n.toString) &&
              n.toString() === "[object FormData]"))))
    );
  },
  Yx = cn("URLSearchParams"),
  [Vx, Xx, Gx, Qx] = ["ReadableStream", "Request", "Response", "Headers"].map(
    cn
  ),
  Zx = (n) =>
    n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Pi(n, a, { allOwnKeys: r = !1 } = {}) {
  if (n === null || typeof n > "u") return;
  let u, o;
  if ((typeof n != "object" && (n = [n]), Ua(n)))
    for (u = 0, o = n.length; u < o; u++) a.call(null, n[u], u, n);
  else {
    if (Ii(n)) return;
    const c = r ? Object.getOwnPropertyNames(n) : Object.keys(n),
      h = c.length;
    let d;
    for (u = 0; u < h; u++) (d = c[u]), a.call(null, n[d], d, n);
  }
}
function gg(n, a) {
  if (Ii(n)) return null;
  a = a.toLowerCase();
  const r = Object.keys(n);
  let u = r.length,
    o;
  for (; u-- > 0; ) if (((o = r[u]), a === o.toLowerCase())) return o;
  return null;
}
const Ul =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  bg = (n) => !ka(n) && n !== Ul;
function Hc() {
  const { caseless: n, skipUndefined: a } = (bg(this) && this) || {},
    r = {},
    u = (o, c) => {
      const h = (n && gg(r, c)) || c;
      Nu(r[h]) && Nu(o)
        ? (r[h] = Hc(r[h], o))
        : Nu(o)
        ? (r[h] = Hc({}, o))
        : Ua(o)
        ? (r[h] = o.slice())
        : (!a || !ka(o)) && (r[h] = o);
    };
  for (let o = 0, c = arguments.length; o < c; o++)
    arguments[o] && Pi(arguments[o], u);
  return r;
}
const Fx = (n, a, r, { allOwnKeys: u } = {}) => (
    Pi(
      a,
      (o, c) => {
        r && _t(o) ? (n[c] = dg(o, r)) : (n[c] = o);
      },
      { allOwnKeys: u }
    ),
    n
  ),
  Kx = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n),
  Jx = (n, a, r, u) => {
    (n.prototype = Object.create(a.prototype, u)),
      (n.prototype.constructor = n),
      Object.defineProperty(n, "super", { value: a.prototype }),
      r && Object.assign(n.prototype, r);
  },
  Ix = (n, a, r, u) => {
    let o, c, h;
    const d = {};
    if (((a = a || {}), n == null)) return a;
    do {
      for (o = Object.getOwnPropertyNames(n), c = o.length; c-- > 0; )
        (h = o[c]), (!u || u(h, n, a)) && !d[h] && ((a[h] = n[h]), (d[h] = !0));
      n = r !== !1 && ff(n);
    } while (n && (!r || r(n, a)) && n !== Object.prototype);
    return a;
  },
  $x = (n, a, r) => {
    (n = String(n)),
      (r === void 0 || r > n.length) && (r = n.length),
      (r -= a.length);
    const u = n.indexOf(a, r);
    return u !== -1 && u === r;
  },
  Px = (n) => {
    if (!n) return null;
    if (Ua(n)) return n;
    let a = n.length;
    if (!yg(a)) return null;
    const r = new Array(a);
    for (; a-- > 0; ) r[a] = n[a];
    return r;
  },
  Wx = (
    (n) => (a) =>
      n && a instanceof n
  )(typeof Uint8Array < "u" && ff(Uint8Array)),
  eS = (n, a) => {
    const u = (n && n[qu]).call(n);
    let o;
    for (; (o = u.next()) && !o.done; ) {
      const c = o.value;
      a.call(n, c[0], c[1]);
    }
  },
  tS = (n, a) => {
    let r;
    const u = [];
    for (; (r = n.exec(a)) !== null; ) u.push(r);
    return u;
  },
  nS = cn("HTMLFormElement"),
  lS = (n) =>
    n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (r, u, o) {
      return u.toUpperCase() + o;
    }),
  Fp = (
    ({ hasOwnProperty: n }) =>
    (a, r) =>
      n.call(a, r)
  )(Object.prototype),
  aS = cn("RegExp"),
  vg = (n, a) => {
    const r = Object.getOwnPropertyDescriptors(n),
      u = {};
    Pi(r, (o, c) => {
      let h;
      (h = a(o, c, n)) !== !1 && (u[c] = h || o);
    }),
      Object.defineProperties(n, u);
  },
  iS = (n) => {
    vg(n, (a, r) => {
      if (_t(n) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
        return !1;
      const u = n[r];
      if (_t(u)) {
        if (((a.enumerable = !1), "writable" in a)) {
          a.writable = !1;
          return;
        }
        a.set ||
          (a.set = () => {
            throw Error("Can not rewrite read-only method '" + r + "'");
          });
      }
    });
  },
  rS = (n, a) => {
    const r = {},
      u = (o) => {
        o.forEach((c) => {
          r[c] = !0;
        });
      };
    return Ua(n) ? u(n) : u(String(n).split(a)), r;
  },
  uS = () => {},
  oS = (n, a) => (n != null && Number.isFinite((n = +n)) ? n : a);
function sS(n) {
  return !!(n && _t(n.append) && n[mg] === "FormData" && n[qu]);
}
const cS = (n) => {
    const a = new Array(10),
      r = (u, o) => {
        if ($i(u)) {
          if (a.indexOf(u) >= 0) return;
          if (Ii(u)) return u;
          if (!("toJSON" in u)) {
            a[o] = u;
            const c = Ua(u) ? [] : {};
            return (
              Pi(u, (h, d) => {
                const y = r(h, o + 1);
                !ka(y) && (c[d] = y);
              }),
              (a[o] = void 0),
              c
            );
          }
        }
        return u;
      };
    return r(n, 0);
  },
  fS = cn("AsyncFunction"),
  hS = (n) => n && ($i(n) || _t(n)) && _t(n.then) && _t(n.catch),
  xg = ((n, a) =>
    n
      ? setImmediate
      : a
      ? ((r, u) => (
          Ul.addEventListener(
            "message",
            ({ source: o, data: c }) => {
              o === Ul && c === r && u.length && u.shift()();
            },
            !1
          ),
          (o) => {
            u.push(o), Ul.postMessage(r, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (r) => setTimeout(r))(
    typeof setImmediate == "function",
    _t(Ul.postMessage)
  ),
  dS =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(Ul)
      : (typeof process < "u" && process.nextTick) || xg,
  mS = (n) => n != null && _t(n[qu]),
  B = {
    isArray: Ua,
    isArrayBuffer: pg,
    isBuffer: Ii,
    isFormData: qx,
    isArrayBufferView: _x,
    isString: Dx,
    isNumber: yg,
    isBoolean: Mx,
    isObject: $i,
    isPlainObject: Nu,
    isEmptyObject: kx,
    isReadableStream: Vx,
    isRequest: Xx,
    isResponse: Gx,
    isHeaders: Qx,
    isUndefined: ka,
    isDate: jx,
    isFile: Lx,
    isBlob: Ux,
    isRegExp: aS,
    isFunction: _t,
    isStream: Hx,
    isURLSearchParams: Yx,
    isTypedArray: Wx,
    isFileList: Bx,
    forEach: Pi,
    merge: Hc,
    extend: Fx,
    trim: Zx,
    stripBOM: Kx,
    inherits: Jx,
    toFlatObject: Ix,
    kindOf: Yu,
    kindOfTest: cn,
    endsWith: $x,
    toArray: Px,
    forEachEntry: eS,
    matchAll: tS,
    isHTMLForm: nS,
    hasOwnProperty: Fp,
    hasOwnProp: Fp,
    reduceDescriptors: vg,
    freezeMethods: iS,
    toObjectSet: rS,
    toCamelCase: lS,
    noop: uS,
    toFiniteNumber: oS,
    findKey: gg,
    global: Ul,
    isContextDefined: bg,
    isSpecCompliantForm: sS,
    toJSONObject: cS,
    isAsyncFn: fS,
    isThenable: hS,
    setImmediate: xg,
    asap: dS,
    isIterable: mS,
  };
function ve(n, a, r, u, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = n),
    (this.name = "AxiosError"),
    a && (this.code = a),
    r && (this.config = r),
    u && (this.request = u),
    o && ((this.response = o), (this.status = o.status ? o.status : null));
}
B.inherits(ve, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: B.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const Sg = ve.prototype,
  Eg = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((n) => {
  Eg[n] = { value: n };
});
Object.defineProperties(ve, Eg);
Object.defineProperty(Sg, "isAxiosError", { value: !0 });
ve.from = (n, a, r, u, o, c) => {
  const h = Object.create(Sg);
  B.toFlatObject(
    n,
    h,
    function (p) {
      return p !== Error.prototype;
    },
    (m) => m !== "isAxiosError"
  );
  const d = n && n.message ? n.message : "Error",
    y = a == null && n ? n.code : a;
  return (
    ve.call(h, d, y, r, u, o),
    n &&
      h.cause == null &&
      Object.defineProperty(h, "cause", { value: n, configurable: !0 }),
    (h.name = (n && n.name) || "Error"),
    c && Object.assign(h, c),
    h
  );
};
const pS = null;
function qc(n) {
  return B.isPlainObject(n) || B.isArray(n);
}
function wg(n) {
  return B.endsWith(n, "[]") ? n.slice(0, -2) : n;
}
function Kp(n, a, r) {
  return n
    ? n
        .concat(a)
        .map(function (o, c) {
          return (o = wg(o)), !r && c ? "[" + o + "]" : o;
        })
        .join(r ? "." : "")
    : a;
}
function yS(n) {
  return B.isArray(n) && !n.some(qc);
}
const gS = B.toFlatObject(B, {}, null, function (a) {
  return /^is[A-Z]/.test(a);
});
function Xu(n, a, r) {
  if (!B.isObject(n)) throw new TypeError("target must be an object");
  (a = a || new FormData()),
    (r = B.toFlatObject(
      r,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (O, N) {
        return !B.isUndefined(N[O]);
      }
    ));
  const u = r.metaTokens,
    o = r.visitor || p,
    c = r.dots,
    h = r.indexes,
    y = (r.Blob || (typeof Blob < "u" && Blob)) && B.isSpecCompliantForm(a);
  if (!B.isFunction(o)) throw new TypeError("visitor must be a function");
  function m(T) {
    if (T === null) return "";
    if (B.isDate(T)) return T.toISOString();
    if (B.isBoolean(T)) return T.toString();
    if (!y && B.isBlob(T))
      throw new ve("Blob is not supported. Use a Buffer instead.");
    return B.isArrayBuffer(T) || B.isTypedArray(T)
      ? y && typeof Blob == "function"
        ? new Blob([T])
        : Buffer.from(T)
      : T;
  }
  function p(T, O, N) {
    let _ = T;
    if (T && !N && typeof T == "object") {
      if (B.endsWith(O, "{}"))
        (O = u ? O : O.slice(0, -2)), (T = JSON.stringify(T));
      else if (
        (B.isArray(T) && yS(T)) ||
        ((B.isFileList(T) || B.endsWith(O, "[]")) && (_ = B.toArray(T)))
      )
        return (
          (O = wg(O)),
          _.forEach(function (k, ee) {
            !(B.isUndefined(k) || k === null) &&
              a.append(
                h === !0 ? Kp([O], ee, c) : h === null ? O : O + "[]",
                m(k)
              );
          }),
          !1
        );
    }
    return qc(T) ? !0 : (a.append(Kp(N, O, c), m(T)), !1);
  }
  const b = [],
    S = Object.assign(gS, {
      defaultVisitor: p,
      convertValue: m,
      isVisitable: qc,
    });
  function v(T, O) {
    if (!B.isUndefined(T)) {
      if (b.indexOf(T) !== -1)
        throw Error("Circular reference detected in " + O.join("."));
      b.push(T),
        B.forEach(T, function (_, Z) {
          (!(B.isUndefined(_) || _ === null) &&
            o.call(a, _, B.isString(Z) ? Z.trim() : Z, O, S)) === !0 &&
            v(_, O ? O.concat(Z) : [Z]);
        }),
        b.pop();
    }
  }
  if (!B.isObject(n)) throw new TypeError("data must be an object");
  return v(n), a;
}
function Jp(n) {
  const a = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g, function (u) {
    return a[u];
  });
}
function hf(n, a) {
  (this._pairs = []), n && Xu(n, this, a);
}
const Tg = hf.prototype;
Tg.append = function (a, r) {
  this._pairs.push([a, r]);
};
Tg.toString = function (a) {
  const r = a
    ? function (u) {
        return a.call(this, u, Jp);
      }
    : Jp;
  return this._pairs
    .map(function (o) {
      return r(o[0]) + "=" + r(o[1]);
    }, "")
    .join("&");
};
function bS(n) {
  return encodeURIComponent(n)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+");
}
function Ag(n, a, r) {
  if (!a) return n;
  const u = (r && r.encode) || bS;
  B.isFunction(r) && (r = { serialize: r });
  const o = r && r.serialize;
  let c;
  if (
    (o
      ? (c = o(a, r))
      : (c = B.isURLSearchParams(a) ? a.toString() : new hf(a, r).toString(u)),
    c)
  ) {
    const h = n.indexOf("#");
    h !== -1 && (n = n.slice(0, h)),
      (n += (n.indexOf("?") === -1 ? "?" : "&") + c);
  }
  return n;
}
class Ip {
  constructor() {
    this.handlers = [];
  }
  use(a, r, u) {
    return (
      this.handlers.push({
        fulfilled: a,
        rejected: r,
        synchronous: u ? u.synchronous : !1,
        runWhen: u ? u.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(a) {
    this.handlers[a] && (this.handlers[a] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(a) {
    B.forEach(this.handlers, function (u) {
      u !== null && a(u);
    });
  }
}
const Cg = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  vS = typeof URLSearchParams < "u" ? URLSearchParams : hf,
  xS = typeof FormData < "u" ? FormData : null,
  SS = typeof Blob < "u" ? Blob : null,
  ES = {
    isBrowser: !0,
    classes: { URLSearchParams: vS, FormData: xS, Blob: SS },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  df = typeof window < "u" && typeof document < "u",
  Yc = (typeof navigator == "object" && navigator) || void 0,
  wS =
    df &&
    (!Yc || ["ReactNative", "NativeScript", "NS"].indexOf(Yc.product) < 0),
  TS =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  AS = (df && window.location.href) || "http://localhost",
  CS = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: df,
        hasStandardBrowserEnv: wS,
        hasStandardBrowserWebWorkerEnv: TS,
        navigator: Yc,
        origin: AS,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  gt = { ...CS, ...ES };
function zS(n, a) {
  return Xu(n, new gt.classes.URLSearchParams(), {
    visitor: function (r, u, o, c) {
      return gt.isNode && B.isBuffer(r)
        ? (this.append(u, r.toString("base64")), !1)
        : c.defaultVisitor.apply(this, arguments);
    },
    ...a,
  });
}
function OS(n) {
  return B.matchAll(/\w+|\[(\w*)]/g, n).map((a) =>
    a[0] === "[]" ? "" : a[1] || a[0]
  );
}
function RS(n) {
  const a = {},
    r = Object.keys(n);
  let u;
  const o = r.length;
  let c;
  for (u = 0; u < o; u++) (c = r[u]), (a[c] = n[c]);
  return a;
}
function zg(n) {
  function a(r, u, o, c) {
    let h = r[c++];
    if (h === "__proto__") return !0;
    const d = Number.isFinite(+h),
      y = c >= r.length;
    return (
      (h = !h && B.isArray(o) ? o.length : h),
      y
        ? (B.hasOwnProp(o, h) ? (o[h] = [o[h], u]) : (o[h] = u), !d)
        : ((!o[h] || !B.isObject(o[h])) && (o[h] = []),
          a(r, u, o[h], c) && B.isArray(o[h]) && (o[h] = RS(o[h])),
          !d)
    );
  }
  if (B.isFormData(n) && B.isFunction(n.entries)) {
    const r = {};
    return (
      B.forEachEntry(n, (u, o) => {
        a(OS(u), o, r, 0);
      }),
      r
    );
  }
  return null;
}
function NS(n, a, r) {
  if (B.isString(n))
    try {
      return (a || JSON.parse)(n), B.trim(n);
    } catch (u) {
      if (u.name !== "SyntaxError") throw u;
    }
  return (r || JSON.stringify)(n);
}
const Wi = {
  transitional: Cg,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (a, r) {
      const u = r.getContentType() || "",
        o = u.indexOf("application/json") > -1,
        c = B.isObject(a);
      if ((c && B.isHTMLForm(a) && (a = new FormData(a)), B.isFormData(a)))
        return o ? JSON.stringify(zg(a)) : a;
      if (
        B.isArrayBuffer(a) ||
        B.isBuffer(a) ||
        B.isStream(a) ||
        B.isFile(a) ||
        B.isBlob(a) ||
        B.isReadableStream(a)
      )
        return a;
      if (B.isArrayBufferView(a)) return a.buffer;
      if (B.isURLSearchParams(a))
        return (
          r.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          a.toString()
        );
      let d;
      if (c) {
        if (u.indexOf("application/x-www-form-urlencoded") > -1)
          return zS(a, this.formSerializer).toString();
        if ((d = B.isFileList(a)) || u.indexOf("multipart/form-data") > -1) {
          const y = this.env && this.env.FormData;
          return Xu(
            d ? { "files[]": a } : a,
            y && new y(),
            this.formSerializer
          );
        }
      }
      return c || o ? (r.setContentType("application/json", !1), NS(a)) : a;
    },
  ],
  transformResponse: [
    function (a) {
      const r = this.transitional || Wi.transitional,
        u = r && r.forcedJSONParsing,
        o = this.responseType === "json";
      if (B.isResponse(a) || B.isReadableStream(a)) return a;
      if (a && B.isString(a) && ((u && !this.responseType) || o)) {
        const h = !(r && r.silentJSONParsing) && o;
        try {
          return JSON.parse(a, this.parseReviver);
        } catch (d) {
          if (h)
            throw d.name === "SyntaxError"
              ? ve.from(d, ve.ERR_BAD_RESPONSE, this, null, this.response)
              : d;
        }
      }
      return a;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: gt.classes.FormData, Blob: gt.classes.Blob },
  validateStatus: function (a) {
    return a >= 200 && a < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
B.forEach(["delete", "get", "head", "post", "put", "patch"], (n) => {
  Wi.headers[n] = {};
});
const _S = B.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  DS = (n) => {
    const a = {};
    let r, u, o;
    return (
      n &&
        n
          .split(
            `
`
          )
          .forEach(function (h) {
            (o = h.indexOf(":")),
              (r = h.substring(0, o).trim().toLowerCase()),
              (u = h.substring(o + 1).trim()),
              !(!r || (a[r] && _S[r])) &&
                (r === "set-cookie"
                  ? a[r]
                    ? a[r].push(u)
                    : (a[r] = [u])
                  : (a[r] = a[r] ? a[r] + ", " + u : u));
          }),
      a
    );
  },
  $p = Symbol("internals");
function Ui(n) {
  return n && String(n).trim().toLowerCase();
}
function _u(n) {
  return n === !1 || n == null ? n : B.isArray(n) ? n.map(_u) : String(n);
}
function MS(n) {
  const a = Object.create(null),
    r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let u;
  for (; (u = r.exec(n)); ) a[u[1]] = u[2];
  return a;
}
const kS = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function bc(n, a, r, u, o) {
  if (B.isFunction(u)) return u.call(this, a, r);
  if ((o && (a = r), !!B.isString(a))) {
    if (B.isString(u)) return a.indexOf(u) !== -1;
    if (B.isRegExp(u)) return u.test(a);
  }
}
function jS(n) {
  return n
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (a, r, u) => r.toUpperCase() + u);
}
function LS(n, a) {
  const r = B.toCamelCase(" " + a);
  ["get", "set", "has"].forEach((u) => {
    Object.defineProperty(n, u + r, {
      value: function (o, c, h) {
        return this[u].call(this, a, o, c, h);
      },
      configurable: !0,
    });
  });
}
let Dt = class {
  constructor(a) {
    a && this.set(a);
  }
  set(a, r, u) {
    const o = this;
    function c(d, y, m) {
      const p = Ui(y);
      if (!p) throw new Error("header name must be a non-empty string");
      const b = B.findKey(o, p);
      (!b || o[b] === void 0 || m === !0 || (m === void 0 && o[b] !== !1)) &&
        (o[b || y] = _u(d));
    }
    const h = (d, y) => B.forEach(d, (m, p) => c(m, p, y));
    if (B.isPlainObject(a) || a instanceof this.constructor) h(a, r);
    else if (B.isString(a) && (a = a.trim()) && !kS(a)) h(DS(a), r);
    else if (B.isObject(a) && B.isIterable(a)) {
      let d = {},
        y,
        m;
      for (const p of a) {
        if (!B.isArray(p))
          throw TypeError("Object iterator must return a key-value pair");
        d[(m = p[0])] = (y = d[m])
          ? B.isArray(y)
            ? [...y, p[1]]
            : [y, p[1]]
          : p[1];
      }
      h(d, r);
    } else a != null && c(r, a, u);
    return this;
  }
  get(a, r) {
    if (((a = Ui(a)), a)) {
      const u = B.findKey(this, a);
      if (u) {
        const o = this[u];
        if (!r) return o;
        if (r === !0) return MS(o);
        if (B.isFunction(r)) return r.call(this, o, u);
        if (B.isRegExp(r)) return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(a, r) {
    if (((a = Ui(a)), a)) {
      const u = B.findKey(this, a);
      return !!(u && this[u] !== void 0 && (!r || bc(this, this[u], u, r)));
    }
    return !1;
  }
  delete(a, r) {
    const u = this;
    let o = !1;
    function c(h) {
      if (((h = Ui(h)), h)) {
        const d = B.findKey(u, h);
        d && (!r || bc(u, u[d], d, r)) && (delete u[d], (o = !0));
      }
    }
    return B.isArray(a) ? a.forEach(c) : c(a), o;
  }
  clear(a) {
    const r = Object.keys(this);
    let u = r.length,
      o = !1;
    for (; u--; ) {
      const c = r[u];
      (!a || bc(this, this[c], c, a, !0)) && (delete this[c], (o = !0));
    }
    return o;
  }
  normalize(a) {
    const r = this,
      u = {};
    return (
      B.forEach(this, (o, c) => {
        const h = B.findKey(u, c);
        if (h) {
          (r[h] = _u(o)), delete r[c];
          return;
        }
        const d = a ? jS(c) : String(c).trim();
        d !== c && delete r[c], (r[d] = _u(o)), (u[d] = !0);
      }),
      this
    );
  }
  concat(...a) {
    return this.constructor.concat(this, ...a);
  }
  toJSON(a) {
    const r = Object.create(null);
    return (
      B.forEach(this, (u, o) => {
        u != null && u !== !1 && (r[o] = a && B.isArray(u) ? u.join(", ") : u);
      }),
      r
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([a, r]) => a + ": " + r).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(a) {
    return a instanceof this ? a : new this(a);
  }
  static concat(a, ...r) {
    const u = new this(a);
    return r.forEach((o) => u.set(o)), u;
  }
  static accessor(a) {
    const u = (this[$p] = this[$p] = { accessors: {} }).accessors,
      o = this.prototype;
    function c(h) {
      const d = Ui(h);
      u[d] || (LS(o, h), (u[d] = !0));
    }
    return B.isArray(a) ? a.forEach(c) : c(a), this;
  }
};
Dt.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
B.reduceDescriptors(Dt.prototype, ({ value: n }, a) => {
  let r = a[0].toUpperCase() + a.slice(1);
  return {
    get: () => n,
    set(u) {
      this[r] = u;
    },
  };
});
B.freezeMethods(Dt);
function vc(n, a) {
  const r = this || Wi,
    u = a || r,
    o = Dt.from(u.headers);
  let c = u.data;
  return (
    B.forEach(n, function (d) {
      c = d.call(r, c, o.normalize(), a ? a.status : void 0);
    }),
    o.normalize(),
    c
  );
}
function Og(n) {
  return !!(n && n.__CANCEL__);
}
function Ba(n, a, r) {
  ve.call(this, n ?? "canceled", ve.ERR_CANCELED, a, r),
    (this.name = "CanceledError");
}
B.inherits(Ba, ve, { __CANCEL__: !0 });
function Rg(n, a, r) {
  const u = r.config.validateStatus;
  !r.status || !u || u(r.status)
    ? n(r)
    : a(
        new ve(
          "Request failed with status code " + r.status,
          [ve.ERR_BAD_REQUEST, ve.ERR_BAD_RESPONSE][
            Math.floor(r.status / 100) - 4
          ],
          r.config,
          r.request,
          r
        )
      );
}
function US(n) {
  const a = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
  return (a && a[1]) || "";
}
function BS(n, a) {
  n = n || 10;
  const r = new Array(n),
    u = new Array(n);
  let o = 0,
    c = 0,
    h;
  return (
    (a = a !== void 0 ? a : 1e3),
    function (y) {
      const m = Date.now(),
        p = u[c];
      h || (h = m), (r[o] = y), (u[o] = m);
      let b = c,
        S = 0;
      for (; b !== o; ) (S += r[b++]), (b = b % n);
      if (((o = (o + 1) % n), o === c && (c = (c + 1) % n), m - h < a)) return;
      const v = p && m - p;
      return v ? Math.round((S * 1e3) / v) : void 0;
    }
  );
}
function HS(n, a) {
  let r = 0,
    u = 1e3 / a,
    o,
    c;
  const h = (m, p = Date.now()) => {
    (r = p), (o = null), c && (clearTimeout(c), (c = null)), n(...m);
  };
  return [
    (...m) => {
      const p = Date.now(),
        b = p - r;
      b >= u
        ? h(m, p)
        : ((o = m),
          c ||
            (c = setTimeout(() => {
              (c = null), h(o);
            }, u - b)));
    },
    () => o && h(o),
  ];
}
const ju = (n, a, r = 3) => {
    let u = 0;
    const o = BS(50, 250);
    return HS((c) => {
      const h = c.loaded,
        d = c.lengthComputable ? c.total : void 0,
        y = h - u,
        m = o(y),
        p = h <= d;
      u = h;
      const b = {
        loaded: h,
        total: d,
        progress: d ? h / d : void 0,
        bytes: y,
        rate: m || void 0,
        estimated: m && d && p ? (d - h) / m : void 0,
        event: c,
        lengthComputable: d != null,
        [a ? "download" : "upload"]: !0,
      };
      n(b);
    }, r);
  },
  Pp = (n, a) => {
    const r = n != null;
    return [(u) => a[0]({ lengthComputable: r, total: n, loaded: u }), a[1]];
  },
  Wp =
    (n) =>
    (...a) =>
      B.asap(() => n(...a)),
  qS = gt.hasStandardBrowserEnv
    ? ((n, a) => (r) => (
        (r = new URL(r, gt.origin)),
        n.protocol === r.protocol &&
          n.host === r.host &&
          (a || n.port === r.port)
      ))(
        new URL(gt.origin),
        gt.navigator && /(msie|trident)/i.test(gt.navigator.userAgent)
      )
    : () => !0,
  YS = gt.hasStandardBrowserEnv
    ? {
        write(n, a, r, u, o, c, h) {
          if (typeof document > "u") return;
          const d = [`${n}=${encodeURIComponent(a)}`];
          B.isNumber(r) && d.push(`expires=${new Date(r).toUTCString()}`),
            B.isString(u) && d.push(`path=${u}`),
            B.isString(o) && d.push(`domain=${o}`),
            c === !0 && d.push("secure"),
            B.isString(h) && d.push(`SameSite=${h}`),
            (document.cookie = d.join("; "));
        },
        read(n) {
          if (typeof document > "u") return null;
          const a = document.cookie.match(
            new RegExp("(?:^|; )" + n + "=([^;]*)")
          );
          return a ? decodeURIComponent(a[1]) : null;
        },
        remove(n) {
          this.write(n, "", Date.now() - 864e5, "/");
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function VS(n) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function XS(n, a) {
  return a ? n.replace(/\/?\/$/, "") + "/" + a.replace(/^\/+/, "") : n;
}
function Ng(n, a, r) {
  let u = !VS(a);
  return n && (u || r == !1) ? XS(n, a) : a;
}
const ey = (n) => (n instanceof Dt ? { ...n } : n);
function Hl(n, a) {
  a = a || {};
  const r = {};
  function u(m, p, b, S) {
    return B.isPlainObject(m) && B.isPlainObject(p)
      ? B.merge.call({ caseless: S }, m, p)
      : B.isPlainObject(p)
      ? B.merge({}, p)
      : B.isArray(p)
      ? p.slice()
      : p;
  }
  function o(m, p, b, S) {
    if (B.isUndefined(p)) {
      if (!B.isUndefined(m)) return u(void 0, m, b, S);
    } else return u(m, p, b, S);
  }
  function c(m, p) {
    if (!B.isUndefined(p)) return u(void 0, p);
  }
  function h(m, p) {
    if (B.isUndefined(p)) {
      if (!B.isUndefined(m)) return u(void 0, m);
    } else return u(void 0, p);
  }
  function d(m, p, b) {
    if (b in a) return u(m, p);
    if (b in n) return u(void 0, m);
  }
  const y = {
    url: c,
    method: c,
    data: c,
    baseURL: h,
    transformRequest: h,
    transformResponse: h,
    paramsSerializer: h,
    timeout: h,
    timeoutMessage: h,
    withCredentials: h,
    withXSRFToken: h,
    adapter: h,
    responseType: h,
    xsrfCookieName: h,
    xsrfHeaderName: h,
    onUploadProgress: h,
    onDownloadProgress: h,
    decompress: h,
    maxContentLength: h,
    maxBodyLength: h,
    beforeRedirect: h,
    transport: h,
    httpAgent: h,
    httpsAgent: h,
    cancelToken: h,
    socketPath: h,
    responseEncoding: h,
    validateStatus: d,
    headers: (m, p, b) => o(ey(m), ey(p), b, !0),
  };
  return (
    B.forEach(Object.keys({ ...n, ...a }), function (p) {
      const b = y[p] || o,
        S = b(n[p], a[p], p);
      (B.isUndefined(S) && b !== d) || (r[p] = S);
    }),
    r
  );
}
const _g = (n) => {
    const a = Hl({}, n);
    let {
      data: r,
      withXSRFToken: u,
      xsrfHeaderName: o,
      xsrfCookieName: c,
      headers: h,
      auth: d,
    } = a;
    if (
      ((a.headers = h = Dt.from(h)),
      (a.url = Ag(
        Ng(a.baseURL, a.url, a.allowAbsoluteUrls),
        n.params,
        n.paramsSerializer
      )),
      d &&
        h.set(
          "Authorization",
          "Basic " +
            btoa(
              (d.username || "") +
                ":" +
                (d.password ? unescape(encodeURIComponent(d.password)) : "")
            )
        ),
      B.isFormData(r))
    ) {
      if (gt.hasStandardBrowserEnv || gt.hasStandardBrowserWebWorkerEnv)
        h.setContentType(void 0);
      else if (B.isFunction(r.getHeaders)) {
        const y = r.getHeaders(),
          m = ["content-type", "content-length"];
        Object.entries(y).forEach(([p, b]) => {
          m.includes(p.toLowerCase()) && h.set(p, b);
        });
      }
    }
    if (
      gt.hasStandardBrowserEnv &&
      (u && B.isFunction(u) && (u = u(a)), u || (u !== !1 && qS(a.url)))
    ) {
      const y = o && c && YS.read(c);
      y && h.set(o, y);
    }
    return a;
  },
  GS = typeof XMLHttpRequest < "u",
  QS =
    GS &&
    function (n) {
      return new Promise(function (r, u) {
        const o = _g(n);
        let c = o.data;
        const h = Dt.from(o.headers).normalize();
        let { responseType: d, onUploadProgress: y, onDownloadProgress: m } = o,
          p,
          b,
          S,
          v,
          T;
        function O() {
          v && v(),
            T && T(),
            o.cancelToken && o.cancelToken.unsubscribe(p),
            o.signal && o.signal.removeEventListener("abort", p);
        }
        let N = new XMLHttpRequest();
        N.open(o.method.toUpperCase(), o.url, !0), (N.timeout = o.timeout);
        function _() {
          if (!N) return;
          const k = Dt.from(
              "getAllResponseHeaders" in N && N.getAllResponseHeaders()
            ),
            ae = {
              data:
                !d || d === "text" || d === "json"
                  ? N.responseText
                  : N.response,
              status: N.status,
              statusText: N.statusText,
              headers: k,
              config: n,
              request: N,
            };
          Rg(
            function (I) {
              r(I), O();
            },
            function (I) {
              u(I), O();
            },
            ae
          ),
            (N = null);
        }
        "onloadend" in N
          ? (N.onloadend = _)
          : (N.onreadystatechange = function () {
              !N ||
                N.readyState !== 4 ||
                (N.status === 0 &&
                  !(N.responseURL && N.responseURL.indexOf("file:") === 0)) ||
                setTimeout(_);
            }),
          (N.onabort = function () {
            N &&
              (u(new ve("Request aborted", ve.ECONNABORTED, n, N)), (N = null));
          }),
          (N.onerror = function (ee) {
            const ae = ee && ee.message ? ee.message : "Network Error",
              Y = new ve(ae, ve.ERR_NETWORK, n, N);
            (Y.event = ee || null), u(Y), (N = null);
          }),
          (N.ontimeout = function () {
            let ee = o.timeout
              ? "timeout of " + o.timeout + "ms exceeded"
              : "timeout exceeded";
            const ae = o.transitional || Cg;
            o.timeoutErrorMessage && (ee = o.timeoutErrorMessage),
              u(
                new ve(
                  ee,
                  ae.clarifyTimeoutError ? ve.ETIMEDOUT : ve.ECONNABORTED,
                  n,
                  N
                )
              ),
              (N = null);
          }),
          c === void 0 && h.setContentType(null),
          "setRequestHeader" in N &&
            B.forEach(h.toJSON(), function (ee, ae) {
              N.setRequestHeader(ae, ee);
            }),
          B.isUndefined(o.withCredentials) ||
            (N.withCredentials = !!o.withCredentials),
          d && d !== "json" && (N.responseType = o.responseType),
          m && (([S, T] = ju(m, !0)), N.addEventListener("progress", S)),
          y &&
            N.upload &&
            (([b, v] = ju(y)),
            N.upload.addEventListener("progress", b),
            N.upload.addEventListener("loadend", v)),
          (o.cancelToken || o.signal) &&
            ((p = (k) => {
              N &&
                (u(!k || k.type ? new Ba(null, n, N) : k),
                N.abort(),
                (N = null));
            }),
            o.cancelToken && o.cancelToken.subscribe(p),
            o.signal &&
              (o.signal.aborted ? p() : o.signal.addEventListener("abort", p)));
        const Z = US(o.url);
        if (Z && gt.protocols.indexOf(Z) === -1) {
          u(new ve("Unsupported protocol " + Z + ":", ve.ERR_BAD_REQUEST, n));
          return;
        }
        N.send(c || null);
      });
    },
  ZS = (n, a) => {
    const { length: r } = (n = n ? n.filter(Boolean) : []);
    if (a || r) {
      let u = new AbortController(),
        o;
      const c = function (m) {
        if (!o) {
          (o = !0), d();
          const p = m instanceof Error ? m : this.reason;
          u.abort(
            p instanceof ve ? p : new Ba(p instanceof Error ? p.message : p)
          );
        }
      };
      let h =
        a &&
        setTimeout(() => {
          (h = null), c(new ve(`timeout ${a} of ms exceeded`, ve.ETIMEDOUT));
        }, a);
      const d = () => {
        n &&
          (h && clearTimeout(h),
          (h = null),
          n.forEach((m) => {
            m.unsubscribe
              ? m.unsubscribe(c)
              : m.removeEventListener("abort", c);
          }),
          (n = null));
      };
      n.forEach((m) => m.addEventListener("abort", c));
      const { signal: y } = u;
      return (y.unsubscribe = () => B.asap(d)), y;
    }
  },
  FS = function* (n, a) {
    let r = n.byteLength;
    if (r < a) {
      yield n;
      return;
    }
    let u = 0,
      o;
    for (; u < r; ) (o = u + a), yield n.slice(u, o), (u = o);
  },
  KS = async function* (n, a) {
    for await (const r of JS(n)) yield* FS(r, a);
  },
  JS = async function* (n) {
    if (n[Symbol.asyncIterator]) {
      yield* n;
      return;
    }
    const a = n.getReader();
    try {
      for (;;) {
        const { done: r, value: u } = await a.read();
        if (r) break;
        yield u;
      }
    } finally {
      await a.cancel();
    }
  },
  ty = (n, a, r, u) => {
    const o = KS(n, a);
    let c = 0,
      h,
      d = (y) => {
        h || ((h = !0), u && u(y));
      };
    return new ReadableStream(
      {
        async pull(y) {
          try {
            const { done: m, value: p } = await o.next();
            if (m) {
              d(), y.close();
              return;
            }
            let b = p.byteLength;
            if (r) {
              let S = (c += b);
              r(S);
            }
            y.enqueue(new Uint8Array(p));
          } catch (m) {
            throw (d(m), m);
          }
        },
        cancel(y) {
          return d(y), o.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  ny = 64 * 1024,
  { isFunction: Tu } = B,
  IS = (({ Request: n, Response: a }) => ({ Request: n, Response: a }))(
    B.global
  ),
  { ReadableStream: ly, TextEncoder: ay } = B.global,
  iy = (n, ...a) => {
    try {
      return !!n(...a);
    } catch {
      return !1;
    }
  },
  $S = (n) => {
    n = B.merge.call({ skipUndefined: !0 }, IS, n);
    const { fetch: a, Request: r, Response: u } = n,
      o = a ? Tu(a) : typeof fetch == "function",
      c = Tu(r),
      h = Tu(u);
    if (!o) return !1;
    const d = o && Tu(ly),
      y =
        o &&
        (typeof ay == "function"
          ? (
              (T) => (O) =>
                T.encode(O)
            )(new ay())
          : async (T) => new Uint8Array(await new r(T).arrayBuffer())),
      m =
        c &&
        d &&
        iy(() => {
          let T = !1;
          const O = new r(gt.origin, {
            body: new ly(),
            method: "POST",
            get duplex() {
              return (T = !0), "half";
            },
          }).headers.has("Content-Type");
          return T && !O;
        }),
      p = h && d && iy(() => B.isReadableStream(new u("").body)),
      b = { stream: p && ((T) => T.body) };
    o &&
      ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((T) => {
        !b[T] &&
          (b[T] = (O, N) => {
            let _ = O && O[T];
            if (_) return _.call(O);
            throw new ve(
              `Response type '${T}' is not supported`,
              ve.ERR_NOT_SUPPORT,
              N
            );
          });
      });
    const S = async (T) => {
        if (T == null) return 0;
        if (B.isBlob(T)) return T.size;
        if (B.isSpecCompliantForm(T))
          return (
            await new r(gt.origin, { method: "POST", body: T }).arrayBuffer()
          ).byteLength;
        if (B.isArrayBufferView(T) || B.isArrayBuffer(T)) return T.byteLength;
        if ((B.isURLSearchParams(T) && (T = T + ""), B.isString(T)))
          return (await y(T)).byteLength;
      },
      v = async (T, O) => {
        const N = B.toFiniteNumber(T.getContentLength());
        return N ?? S(O);
      };
    return async (T) => {
      let {
          url: O,
          method: N,
          data: _,
          signal: Z,
          cancelToken: k,
          timeout: ee,
          onDownloadProgress: ae,
          onUploadProgress: Y,
          responseType: I,
          headers: de,
          withCredentials: ce = "same-origin",
          fetchOptions: me,
        } = _g(T),
        ne = a || fetch;
      I = I ? (I + "").toLowerCase() : "text";
      let te = ZS([Z, k && k.toAbortSignal()], ee),
        we = null;
      const ie =
        te &&
        te.unsubscribe &&
        (() => {
          te.unsubscribe();
        });
      let $;
      try {
        if (
          Y &&
          m &&
          N !== "get" &&
          N !== "head" &&
          ($ = await v(de, _)) !== 0
        ) {
          let C = new r(O, { method: "POST", body: _, duplex: "half" }),
            V;
          if (
            (B.isFormData(_) &&
              (V = C.headers.get("content-type")) &&
              de.setContentType(V),
            C.body)
          ) {
            const [E, W] = Pp($, ju(Wp(Y)));
            _ = ty(C.body, ny, E, W);
          }
        }
        B.isString(ce) || (ce = ce ? "include" : "omit");
        const M = c && "credentials" in r.prototype,
          K = {
            ...me,
            signal: te,
            method: N.toUpperCase(),
            headers: de.normalize().toJSON(),
            body: _,
            duplex: "half",
            credentials: M ? ce : void 0,
          };
        we = c && new r(O, K);
        let le = await (c ? ne(we, me) : ne(O, K));
        const xe = p && (I === "stream" || I === "response");
        if (p && (ae || (xe && ie))) {
          const C = {};
          ["status", "statusText", "headers"].forEach((fe) => {
            C[fe] = le[fe];
          });
          const V = B.toFiniteNumber(le.headers.get("content-length")),
            [E, W] = (ae && Pp(V, ju(Wp(ae), !0))) || [];
          le = new u(
            ty(le.body, ny, E, () => {
              W && W(), ie && ie();
            }),
            C
          );
        }
        I = I || "text";
        let w = await b[B.findKey(b, I) || "text"](le, T);
        return (
          !xe && ie && ie(),
          await new Promise((C, V) => {
            Rg(C, V, {
              data: w,
              headers: Dt.from(le.headers),
              status: le.status,
              statusText: le.statusText,
              config: T,
              request: we,
            });
          })
        );
      } catch (M) {
        throw (
          (ie && ie(),
          M && M.name === "TypeError" && /Load failed|fetch/i.test(M.message)
            ? Object.assign(new ve("Network Error", ve.ERR_NETWORK, T, we), {
                cause: M.cause || M,
              })
            : ve.from(M, M && M.code, T, we))
        );
      }
    };
  },
  PS = new Map(),
  Dg = (n) => {
    let a = (n && n.env) || {};
    const { fetch: r, Request: u, Response: o } = a,
      c = [u, o, r];
    let h = c.length,
      d = h,
      y,
      m,
      p = PS;
    for (; d--; )
      (y = c[d]),
        (m = p.get(y)),
        m === void 0 && p.set(y, (m = d ? new Map() : $S(a))),
        (p = m);
    return m;
  };
Dg();
const mf = { http: pS, xhr: QS, fetch: { get: Dg } };
B.forEach(mf, (n, a) => {
  if (n) {
    try {
      Object.defineProperty(n, "name", { value: a });
    } catch {}
    Object.defineProperty(n, "adapterName", { value: a });
  }
});
const ry = (n) => `- ${n}`,
  WS = (n) => B.isFunction(n) || n === null || n === !1;
function e2(n, a) {
  n = B.isArray(n) ? n : [n];
  const { length: r } = n;
  let u, o;
  const c = {};
  for (let h = 0; h < r; h++) {
    u = n[h];
    let d;
    if (
      ((o = u),
      !WS(u) && ((o = mf[(d = String(u)).toLowerCase()]), o === void 0))
    )
      throw new ve(`Unknown adapter '${d}'`);
    if (o && (B.isFunction(o) || (o = o.get(a)))) break;
    c[d || "#" + h] = o;
  }
  if (!o) {
    const h = Object.entries(c).map(
      ([y, m]) =>
        `adapter ${y} ` +
        (m === !1
          ? "is not supported by the environment"
          : "is not available in the build")
    );
    let d = r
      ? h.length > 1
        ? `since :
` +
          h.map(ry).join(`
`)
        : " " + ry(h[0])
      : "as no adapter specified";
    throw new ve(
      "There is no suitable adapter to dispatch the request " + d,
      "ERR_NOT_SUPPORT"
    );
  }
  return o;
}
const Mg = { getAdapter: e2, adapters: mf };
function xc(n) {
  if (
    (n.cancelToken && n.cancelToken.throwIfRequested(),
    n.signal && n.signal.aborted)
  )
    throw new Ba(null, n);
}
function uy(n) {
  return (
    xc(n),
    (n.headers = Dt.from(n.headers)),
    (n.data = vc.call(n, n.transformRequest)),
    ["post", "put", "patch"].indexOf(n.method) !== -1 &&
      n.headers.setContentType("application/x-www-form-urlencoded", !1),
    Mg.getAdapter(
      n.adapter || Wi.adapter,
      n
    )(n).then(
      function (u) {
        return (
          xc(n),
          (u.data = vc.call(n, n.transformResponse, u)),
          (u.headers = Dt.from(u.headers)),
          u
        );
      },
      function (u) {
        return (
          Og(u) ||
            (xc(n),
            u &&
              u.response &&
              ((u.response.data = vc.call(n, n.transformResponse, u.response)),
              (u.response.headers = Dt.from(u.response.headers)))),
          Promise.reject(u)
        );
      }
    )
  );
}
const kg = "1.13.2",
  Gu = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (n, a) => {
    Gu[n] = function (u) {
      return typeof u === n || "a" + (a < 1 ? "n " : " ") + n;
    };
  }
);
const oy = {};
Gu.transitional = function (a, r, u) {
  function o(c, h) {
    return (
      "[Axios v" +
      kg +
      "] Transitional option '" +
      c +
      "'" +
      h +
      (u ? ". " + u : "")
    );
  }
  return (c, h, d) => {
    if (a === !1)
      throw new ve(
        o(h, " has been removed" + (r ? " in " + r : "")),
        ve.ERR_DEPRECATED
      );
    return (
      r &&
        !oy[h] &&
        ((oy[h] = !0),
        console.warn(
          o(
            h,
            " has been deprecated since v" +
              r +
              " and will be removed in the near future"
          )
        )),
      a ? a(c, h, d) : !0
    );
  };
};
Gu.spelling = function (a) {
  return (r, u) => (console.warn(`${u} is likely a misspelling of ${a}`), !0);
};
function t2(n, a, r) {
  if (typeof n != "object")
    throw new ve("options must be an object", ve.ERR_BAD_OPTION_VALUE);
  const u = Object.keys(n);
  let o = u.length;
  for (; o-- > 0; ) {
    const c = u[o],
      h = a[c];
    if (h) {
      const d = n[c],
        y = d === void 0 || h(d, c, n);
      if (y !== !0)
        throw new ve("option " + c + " must be " + y, ve.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0) throw new ve("Unknown option " + c, ve.ERR_BAD_OPTION);
  }
}
const Du = { assertOptions: t2, validators: Gu },
  pn = Du.validators;
let Bl = class {
  constructor(a) {
    (this.defaults = a || {}),
      (this.interceptors = { request: new Ip(), response: new Ip() });
  }
  async request(a, r) {
    try {
      return await this._request(a, r);
    } catch (u) {
      if (u instanceof Error) {
        let o = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(o)
          : (o = new Error());
        const c = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          u.stack
            ? c &&
              !String(u.stack).endsWith(c.replace(/^.+\n.+\n/, "")) &&
              (u.stack +=
                `
` + c)
            : (u.stack = c);
        } catch {}
      }
      throw u;
    }
  }
  _request(a, r) {
    typeof a == "string" ? ((r = r || {}), (r.url = a)) : (r = a || {}),
      (r = Hl(this.defaults, r));
    const { transitional: u, paramsSerializer: o, headers: c } = r;
    u !== void 0 &&
      Du.assertOptions(
        u,
        {
          silentJSONParsing: pn.transitional(pn.boolean),
          forcedJSONParsing: pn.transitional(pn.boolean),
          clarifyTimeoutError: pn.transitional(pn.boolean),
        },
        !1
      ),
      o != null &&
        (B.isFunction(o)
          ? (r.paramsSerializer = { serialize: o })
          : Du.assertOptions(
              o,
              { encode: pn.function, serialize: pn.function },
              !0
            )),
      r.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (r.allowAbsoluteUrls = !0)),
      Du.assertOptions(
        r,
        {
          baseUrl: pn.spelling("baseURL"),
          withXsrfToken: pn.spelling("withXSRFToken"),
        },
        !0
      ),
      (r.method = (r.method || this.defaults.method || "get").toLowerCase());
    let h = c && B.merge(c.common, c[r.method]);
    c &&
      B.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (T) => {
          delete c[T];
        }
      ),
      (r.headers = Dt.concat(h, c));
    const d = [];
    let y = !0;
    this.interceptors.request.forEach(function (O) {
      (typeof O.runWhen == "function" && O.runWhen(r) === !1) ||
        ((y = y && O.synchronous), d.unshift(O.fulfilled, O.rejected));
    });
    const m = [];
    this.interceptors.response.forEach(function (O) {
      m.push(O.fulfilled, O.rejected);
    });
    let p,
      b = 0,
      S;
    if (!y) {
      const T = [uy.bind(this), void 0];
      for (
        T.unshift(...d), T.push(...m), S = T.length, p = Promise.resolve(r);
        b < S;

      )
        p = p.then(T[b++], T[b++]);
      return p;
    }
    S = d.length;
    let v = r;
    for (; b < S; ) {
      const T = d[b++],
        O = d[b++];
      try {
        v = T(v);
      } catch (N) {
        O.call(this, N);
        break;
      }
    }
    try {
      p = uy.call(this, v);
    } catch (T) {
      return Promise.reject(T);
    }
    for (b = 0, S = m.length; b < S; ) p = p.then(m[b++], m[b++]);
    return p;
  }
  getUri(a) {
    a = Hl(this.defaults, a);
    const r = Ng(a.baseURL, a.url, a.allowAbsoluteUrls);
    return Ag(r, a.params, a.paramsSerializer);
  }
};
B.forEach(["delete", "get", "head", "options"], function (a) {
  Bl.prototype[a] = function (r, u) {
    return this.request(
      Hl(u || {}, { method: a, url: r, data: (u || {}).data })
    );
  };
});
B.forEach(["post", "put", "patch"], function (a) {
  function r(u) {
    return function (c, h, d) {
      return this.request(
        Hl(d || {}, {
          method: a,
          headers: u ? { "Content-Type": "multipart/form-data" } : {},
          url: c,
          data: h,
        })
      );
    };
  }
  (Bl.prototype[a] = r()), (Bl.prototype[a + "Form"] = r(!0));
});
let n2 = class jg {
  constructor(a) {
    if (typeof a != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function (c) {
      r = c;
    });
    const u = this;
    this.promise.then((o) => {
      if (!u._listeners) return;
      let c = u._listeners.length;
      for (; c-- > 0; ) u._listeners[c](o);
      u._listeners = null;
    }),
      (this.promise.then = (o) => {
        let c;
        const h = new Promise((d) => {
          u.subscribe(d), (c = d);
        }).then(o);
        return (
          (h.cancel = function () {
            u.unsubscribe(c);
          }),
          h
        );
      }),
      a(function (c, h, d) {
        u.reason || ((u.reason = new Ba(c, h, d)), r(u.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(a) {
    if (this.reason) {
      a(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(a) : (this._listeners = [a]);
  }
  unsubscribe(a) {
    if (!this._listeners) return;
    const r = this._listeners.indexOf(a);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const a = new AbortController(),
      r = (u) => {
        a.abort(u);
      };
    return (
      this.subscribe(r),
      (a.signal.unsubscribe = () => this.unsubscribe(r)),
      a.signal
    );
  }
  static source() {
    let a;
    return {
      token: new jg(function (o) {
        a = o;
      }),
      cancel: a,
    };
  }
};
function l2(n) {
  return function (r) {
    return n.apply(null, r);
  };
}
function a2(n) {
  return B.isObject(n) && n.isAxiosError === !0;
}
const Vc = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526,
};
Object.entries(Vc).forEach(([n, a]) => {
  Vc[a] = n;
});
function Lg(n) {
  const a = new Bl(n),
    r = dg(Bl.prototype.request, a);
  return (
    B.extend(r, Bl.prototype, a, { allOwnKeys: !0 }),
    B.extend(r, a, null, { allOwnKeys: !0 }),
    (r.create = function (o) {
      return Lg(Hl(n, o));
    }),
    r
  );
}
const tt = Lg(Wi);
tt.Axios = Bl;
tt.CanceledError = Ba;
tt.CancelToken = n2;
tt.isCancel = Og;
tt.VERSION = kg;
tt.toFormData = Xu;
tt.AxiosError = ve;
tt.Cancel = tt.CanceledError;
tt.all = function (a) {
  return Promise.all(a);
};
tt.spread = l2;
tt.isAxiosError = a2;
tt.mergeConfig = Hl;
tt.AxiosHeaders = Dt;
tt.formToJSON = (n) => zg(B.isHTMLForm(n) ? new FormData(n) : n);
tt.getAdapter = Mg.getAdapter;
tt.HttpStatusCode = Vc;
tt.default = tt;
const {
    Axios: eC,
    AxiosError: tC,
    CanceledError: nC,
    isCancel: lC,
    CancelToken: aC,
    VERSION: iC,
    all: rC,
    Cancel: uC,
    isAxiosError: oC,
    spread: sC,
    toFormData: cC,
    AxiosHeaders: fC,
    HttpStatusCode: hC,
    formToJSON: dC,
    getAdapter: mC,
    mergeConfig: pC,
  } = tt,
  i2 = "https://agent-backend-api-88199591627.us-east4.run.app",
  xn = tt.create({
    baseURL: i2,
    headers: { "Content-Type": "application/json" },
    timeout: 6e4,
  }),
  r2 = () => localStorage.getItem("access_token"),
  u2 = (n) => {
    localStorage.setItem("access_token", n);
  },
  Xc = () => {
    localStorage.removeItem("access_token");
  };
xn.interceptors.request.use(
  (n) => {
    const a = r2();
    return a && n.headers && (n.headers.Authorization = `Bearer ${a}`), n;
  },
  (n) => Promise.reject(n)
);
xn.interceptors.response.use(
  (n) => n,
  (n) => {
    var r, u;
    const a = {
      message: "알 수 없는 오류가 발생했습니다.",
      status: ((r = n.response) == null ? void 0 : r.status) || 500,
      details: (u = n.response) == null ? void 0 : u.data,
    };
    if (n.response)
      switch (n.response.status) {
        case 401:
          (a.message = "인증이 필요합니다. 다시 로그인해주세요."),
            Xc(),
            (window.location.href = "/login");
          break;
        case 403:
          a.message = "접근 권한이 없습니다.";
          break;
        case 404:
          a.message = "요청한 리소스를 찾을 수 없습니다.";
          break;
        case 422:
          a.message = "입력값이 올바르지 않습니다.";
          break;
        case 500:
          a.message = "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.";
          break;
      }
    else n.request && (a.message = "네트워크 연결을 확인해주세요.");
    return Promise.reject(a);
  }
);
const o2 = "https://agent-backend-api-88199591627.us-east4.run.app",
  s2 = (n) => {
    const a = new URLSearchParams();
    n && a.append("redirect_uri", n);
    const r = a.toString(),
      u = `${o2}/auth/google/login${r ? `?${r}` : ""}`;
    window.location.href = u;
  },
  c2 = async () => (await xn.get("/auth/me")).data,
  f2 = async () => (await xn.post("/sessions/")).data,
  h2 = async (n = !1) =>
    (await xn.get("/sessions/", { params: { include_inactive: n } })).data,
  d2 = async (n, a) =>
    (await xn.get(`/sessions/${n}/messages`, { params: void 0 })).data,
  m2 = async (n) => (await xn.delete(`/sessions/${n}`)).data,
  p2 = async (n) => (await xn.post("/chat/message", n)).data,
  sy = async () => (await xn.get("/profiles/")).data,
  y2 = async (n) => (await xn.post("/profiles/", n)).data,
  pf = cf()(
    Rx(
      (n) => ({
        user: null,
        profile: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null,
        setUser: (a) => n({ user: a, isAuthenticated: !!a }),
        setProfile: (a) => n({ profile: a }),
        login: async (a) => {
          n({ isLoading: !0, error: null });
          try {
            u2(a);
            const r = await c2();
            n({ user: r, isAuthenticated: !0, isLoading: !1 });
            const u = await sy();
            n({ profile: u });
          } catch (r) {
            Xc(),
              n({
                user: null,
                isAuthenticated: !1,
                isLoading: !1,
                error:
                  r instanceof Error ? r.message : "로그인에 실패했습니다.",
              });
          }
        },
        logout: () => {
          Xc(),
            n({ user: null, profile: null, isAuthenticated: !1, error: null });
        },
        fetchProfile: async () => {
          n({ isLoading: !0 });
          try {
            const a = await sy();
            n({ profile: a, isLoading: !1 });
          } catch (a) {
            n({
              isLoading: !1,
              error:
                a instanceof Error
                  ? a.message
                  : "프로필을 불러오지 못했습니다.",
            });
          }
        },
        updateProfile: async (a) => {
          n({ isLoading: !0, error: null });
          try {
            const r = await y2(a);
            n({ profile: r, isLoading: !1 });
          } catch (r) {
            throw (
              (n({
                isLoading: !1,
                error:
                  r instanceof Error
                    ? r.message
                    : "프로필 저장에 실패했습니다.",
              }),
              r)
            );
          }
        },
        clearError: () => n({ error: null }),
      }),
      {
        name: "auth-storage",
        partialize: (n) => ({
          user: n.user,
          profile: n.profile,
          isAuthenticated: n.isAuthenticated,
        }),
      }
    )
  ),
  er = cf((n, a) => ({
    sessions: [],
    currentSessionId: null,
    messages: [],
    isLoading: !1,
    isSending: !1,
    error: null,
    fetchSessions: async () => {
      n({ isLoading: !0, error: null });
      try {
        const r = await h2();
        n({ sessions: r.sessions, isLoading: !1 });
      } catch (r) {
        n({
          isLoading: !1,
          error:
            r instanceof Error ? r.message : "세션 목록을 불러오지 못했습니다.",
        });
      }
    },
    createSession: async () => {
      n({ isLoading: !0, error: null });
      try {
        const r = await f2(),
          u = {
            sid: r.session_id,
            title: r.title,
            is_active: !0,
            created_at: r.created_at || new Date().toISOString(),
          };
        return (
          n((o) => ({
            sessions: [u, ...o.sessions],
            currentSessionId: r.session_id,
            messages: [],
            isLoading: !1,
          })),
          r.session_id
        );
      } catch (r) {
        throw (
          (n({
            isLoading: !1,
            error:
              r instanceof Error ? r.message : "새 대화를 시작하지 못했습니다.",
          }),
          r)
        );
      }
    },
    selectSession: async (r) => {
      n({ isLoading: !0, error: null, currentSessionId: r });
      try {
        const u = await d2(r);
        n({ messages: u.messages, isLoading: !1 });
      } catch (u) {
        n({
          isLoading: !1,
          error:
            u instanceof Error ? u.message : "대화 내용을 불러오지 못했습니다.",
        });
      }
    },
    deleteSession: async (r) => {
      try {
        await m2(r),
          n((u) => ({
            sessions: u.sessions.filter((o) => o.sid !== r),
            currentSessionId:
              u.currentSessionId === r ? null : u.currentSessionId,
            messages: u.currentSessionId === r ? [] : u.messages,
          }));
      } catch (u) {
        n({
          error: u instanceof Error ? u.message : "대화를 삭제하지 못했습니다.",
        });
      }
    },
    sendMessage: async (r, u) => {
      const { currentSessionId: o } = a();
      if (!o) {
        n({ error: "세션이 선택되지 않았습니다." });
        return;
      }
      const c = {
        role: "user",
        content: r,
        created_at: new Date().toISOString(),
      };
      n((h) => ({ messages: [...h.messages, c], isSending: !0, error: null }));
      try {
        const d = {
          role: "assistant",
          content: (await p2({ session_id: o, message: r, user_id: u })).text,
          created_at: new Date().toISOString(),
        };
        n((y) => ({ messages: [...y.messages, d], isSending: !1 })),
          a().messages.length <= 2 &&
            n((y) => ({
              sessions: y.sessions.map((m) =>
                m.sid === o
                  ? {
                      ...m,
                      title: r.slice(0, 50) + (r.length > 50 ? "..." : ""),
                    }
                  : m
              ),
            }));
      } catch (h) {
        n({
          isSending: !1,
          error: h instanceof Error ? h.message : "메시지 전송에 실패했습니다.",
        });
      }
    },
    addMessage: (r) => {
      n((u) => ({ messages: [...u.messages, r] }));
    },
    clearCurrentSession: () => {
      n({ currentSessionId: null, messages: [] });
    },
    clearError: () => n({ error: null }),
  })),
  yf = cf((n) => ({
    isSidebarOpen: !0,
    isProfileModalOpen: !1,
    isMobile: typeof window < "u" ? window.innerWidth < 768 : !1,
    toggleSidebar: () => n((a) => ({ isSidebarOpen: !a.isSidebarOpen })),
    setSidebarOpen: (a) => n({ isSidebarOpen: a }),
    openProfileModal: () => n({ isProfileModalOpen: !0 }),
    closeProfileModal: () => n({ isProfileModalOpen: !1 }),
    setIsMobile: (a) => n({ isMobile: a, isSidebarOpen: !a }),
  })),
  g2 = () => {
    const {
        isSidebarOpen: n,
        setSidebarOpen: a,
        isMobile: r,
        openProfileModal: u,
      } = yf(),
      {
        sessions: o,
        currentSessionId: c,
        selectSession: h,
        deleteSession: d,
        fetchSessions: y,
      } = er(),
      { user: m, profile: p, isAuthenticated: b } = pf(),
      [S, v] = q.useState(!0);
    q.useEffect(() => {
      b && y();
    }, [b, y]);
    const T = async (_) => {
        await h(_), r && a(!1);
      },
      O = async (_, Z) => {
        _.stopPropagation(), await d(Z);
      },
      N = () => {
        y();
      };
    return R.jsxs(R.Fragment, {
      children: [
        r &&
          n &&
          R.jsx("div", {
            className:
              "fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden",
            onClick: () => a(!1),
          }),
        !n &&
          R.jsxs("div", {
            className:
              "fixed left-0 top-0 bottom-0 z-30 flex flex-col justify-between py-4 px-3",
            children: [
              R.jsxs("button", {
                onClick: () => a(!0),
                className: "sidebar-toggle",
                children: [
                  R.jsx(Gp, { size: 20, strokeWidth: 2.5 }),
                  R.jsx(Gp, { size: 20, strokeWidth: 2.5, className: "-ml-3" }),
                ],
              }),
              R.jsx("button", {
                onClick: u,
                className:
                  "w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden hover:ring-2 hover:ring-primary-300 transition-all",
                children:
                  m != null && m.picture
                    ? R.jsx("img", {
                        src: m.picture,
                        alt: "",
                        className: "w-full h-full object-cover",
                      })
                    : R.jsx("svg", {
                        className: "w-6 h-6 text-gray-400",
                        fill: "currentColor",
                        viewBox: "0 0 24 24",
                        children: R.jsx("path", {
                          d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
                        }),
                      }),
              }),
            ],
          }),
        R.jsxs("aside", {
          className: `
          fixed md:relative inset-y-0 left-0 z-50
          w-[240px] glass-sidebar border-r border-gray-100
          transform transition-transform duration-300 ease-in-out
          flex flex-col
          ${n ? "translate-x-0" : "-translate-x-full"}
        `,
          children: [
            R.jsxs("div", {
              className:
                "flex items-center justify-between px-5 py-4 border-b border-gray-100",
              children: [
                R.jsxs("div", {
                  className: "flex items-center gap-1.5",
                  children: [
                    R.jsx("span", {
                      className: "text-xl font-bold text-primary-400",
                      children: "ㅋB",
                    }),
                    R.jsx("span", {
                      className: "text-sm font-medium text-gray-700",
                      children: "gangnyeongbot",
                    }),
                  ],
                }),
                R.jsxs("button", {
                  onClick: () => a(!1),
                  className:
                    "p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 transition-colors",
                  children: [
                    R.jsx(Xp, { size: 18 }),
                    R.jsx(Xp, { size: 18, className: "-ml-2.5" }),
                  ],
                }),
              ],
            }),
            R.jsxs("div", {
              className: "flex-1 overflow-y-auto px-4 py-4",
              children: [
                R.jsxs("div", {
                  className: "flex items-center justify-between mb-3",
                  children: [
                    R.jsxs("button", {
                      onClick: () => v(!S),
                      className:
                        "flex items-center gap-1.5 text-sm font-semibold text-gray-800",
                      children: [
                        "내 대화 모아보기",
                        R.jsx(_a, {
                          size: 16,
                          className: `text-gray-400 transition-transform ${
                            S ? "" : "-rotate-90"
                          }`,
                        }),
                      ],
                    }),
                    R.jsxs("div", {
                      className: "flex items-center gap-1",
                      children: [
                        R.jsx("button", {
                          onClick: N,
                          className:
                            "p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 transition-colors",
                          children: R.jsx(xx, { size: 14 }),
                        }),
                        R.jsx("button", {
                          className:
                            "p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 transition-colors",
                          children: R.jsx(gx, { size: 14 }),
                        }),
                      ],
                    }),
                  ],
                }),
                S &&
                  R.jsx("div", {
                    className: "space-y-1",
                    children:
                      o.length === 0
                        ? R.jsxs("p", {
                            className: "text-sm text-gray-400 py-4",
                            children: [
                              "아직 강냉봇과",
                              R.jsx("br", {}),
                              "나눈 대화가 없어요.",
                            ],
                          })
                        : o.map((_) =>
                            R.jsxs(
                              "button",
                              {
                                onClick: () => T(_.sid),
                                className: `
                      w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl text-left
                      transition-all duration-200 group
                      ${
                        c === _.sid
                          ? "bg-primary-50 text-primary-600"
                          : "hover:bg-gray-50 text-gray-700"
                      }
                    `,
                                children: [
                                  R.jsxs("div", {
                                    className:
                                      "flex items-center gap-2 flex-1 min-w-0",
                                    children: [
                                      R.jsx(bx, {
                                        size: 14,
                                        className: "flex-shrink-0 opacity-60",
                                      }),
                                      R.jsx("span", {
                                        className: "truncate text-sm",
                                        children: _.title,
                                      }),
                                    ],
                                  }),
                                  R.jsx("button", {
                                    onClick: (Z) => O(Z, _.sid),
                                    className:
                                      "opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-gray-200 text-gray-400 hover:text-red-500 transition-all flex-shrink-0",
                                    children: R.jsx(Ex, { size: 12 }),
                                  }),
                                ],
                              },
                              _.sid
                            )
                          ),
                  }),
              ],
            }),
            R.jsx("div", {
              className: "px-4 py-3 border-t border-gray-100",
              children: R.jsxs("button", {
                onClick: u,
                className:
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-full bg-white border border-gray-100 shadow-sm hover:shadow-input hover:border-primary-200 transition-all",
                children: [
                  R.jsx("div", {
                    className:
                      "w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden",
                    children:
                      m != null && m.picture
                        ? R.jsx("img", {
                            src: m.picture,
                            alt: "",
                            className: "w-full h-full object-cover",
                          })
                        : R.jsx("svg", {
                            className: "w-5 h-5 text-gray-400",
                            fill: "currentColor",
                            viewBox: "0 0 24 24",
                            children: R.jsx("path", {
                              d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
                            }),
                          }),
                  }),
                  R.jsx("span", {
                    className:
                      "text-sm text-gray-600 truncate flex-1 text-left",
                    children:
                      (m == null ? void 0 : m.email) ||
                      (p == null ? void 0 : p.profile_name) ||
                      "hello@gmail.com",
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    });
  },
  Gc = q.forwardRef(
    (
      {
        className: n = "",
        variant: a = "primary",
        size: r = "md",
        isLoading: u,
        children: o,
        disabled: c,
        ...h
      },
      d
    ) => {
      const y =
          "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
        m = {
          primary:
            "bg-gradient-to-r from-primary-400 to-primary-500 text-white hover:shadow-button focus:ring-primary-400",
          secondary:
            "bg-white text-gray-700 border border-gray-200 hover:border-primary-300 hover:shadow-input focus:ring-primary-400",
          ghost:
            "bg-transparent text-gray-600 hover:bg-gray-100 focus:ring-primary-400",
          danger:
            "bg-red-500 text-white hover:bg-red-600 focus:ring-red-400 shadow-md",
        },
        p = {
          sm: "px-4 py-2 text-sm",
          md: "px-5 py-2.5 text-base",
          lg: "px-6 py-3 text-lg",
        };
      return R.jsxs("button", {
        ref: d,
        className: `${y} ${m[a]} ${p[r]} ${n}`,
        disabled: c || u,
        ...h,
        children: [
          u &&
            R.jsxs("svg", {
              className: "animate-spin -ml-1 mr-2 h-4 w-4",
              fill: "none",
              viewBox: "0 0 24 24",
              children: [
                R.jsx("circle", {
                  className: "opacity-25",
                  cx: "12",
                  cy: "12",
                  r: "10",
                  stroke: "currentColor",
                  strokeWidth: "4",
                }),
                R.jsx("path", {
                  className: "opacity-75",
                  fill: "currentColor",
                  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                }),
              ],
            }),
          o,
        ],
      });
    }
  );
Gc.displayName = "Button";
const b2 = q.forwardRef(
  ({ className: n = "", label: a, error: r, id: u, ...o }, c) =>
    R.jsxs("div", {
      className: "w-full",
      children: [
        a &&
          R.jsx("label", {
            htmlFor: u,
            className: "block text-sm font-medium text-navy-700 mb-1.5",
            children: a,
          }),
        R.jsx("input", {
          ref: c,
          id: u,
          className: `
            w-full px-4 py-2.5 rounded-xl border transition-all duration-200
            bg-white text-navy-900 placeholder-navy-400
            focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
            ${r ? "border-red-500" : "border-navy-200 hover:border-navy-300"}
            ${n}
          `,
          ...o,
        }),
        r &&
          R.jsx("p", { className: "mt-1.5 text-sm text-red-600", children: r }),
      ],
    })
);
b2.displayName = "Input";
const v2 = ({
    isOpen: n,
    onClose: a,
    title: r,
    children: u,
    size: o = "md",
  }) => {
    if (
      (q.useEffect(() => {
        const h = (d) => {
          d.key === "Escape" && a();
        };
        return (
          n &&
            (document.addEventListener("keydown", h),
            (document.body.style.overflow = "hidden")),
          () => {
            document.removeEventListener("keydown", h),
              (document.body.style.overflow = "unset");
          }
        );
      }, [n, a]),
      !n)
    )
      return null;
    const c = { sm: "max-w-sm", md: "max-w-lg", lg: "max-w-xl" };
    return R.jsxs("div", {
      className: "fixed inset-0 z-50 flex items-center justify-center p-4",
      children: [
        R.jsx("div", {
          className:
            "absolute inset-0 bg-black/20 backdrop-blur-sm animate-fade-in",
          onClick: a,
        }),
        R.jsxs("div", {
          className: `
          relative w-full ${c[o]} bg-white rounded-2xl shadow-brand-lg
          animate-slide-up transform
        `,
          children: [
            r &&
              R.jsxs("div", {
                className:
                  "flex items-center justify-between px-6 py-4 border-b border-gray-100",
                children: [
                  R.jsx("h2", {
                    className: "text-lg font-semibold text-gray-800",
                    children: r,
                  }),
                  R.jsx("button", {
                    onClick: a,
                    className:
                      "p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors",
                    children: R.jsx(wx, { size: 18 }),
                  }),
                ],
              }),
            R.jsx("div", { className: "p-6", children: u }),
          ],
        }),
      ],
    });
  },
  x2 = ["공과대학", "경영대학", "사회과학대학", "인문대학", "예술대학"],
  S2 = {
    공과대학: ["컴퓨터공학부", "전자공학부", "기계공학부", "건축학부"],
    경영대학: ["경영학부", "회계학부", "무역학부"],
    사회과학대학: ["사회복지학부", "행정학부", "심리학부"],
    인문대학: ["국어국문학부", "영어영문학부", "사학부"],
    예술대학: ["디자인학부", "음악학부", "미술학부"],
  },
  E2 = {
    컴퓨터공학부: ["개발전공", "보안전공", "AI전공"],
    전자공학부: ["전자전공", "통신전공"],
    기계공학부: ["기계전공", "자동차전공"],
  },
  w2 = () => {
    const { isProfileModalOpen: n, closeProfileModal: a } = yf(),
      {
        profile: r,
        updateProfile: u,
        isLoading: o,
        error: c,
        clearError: h,
      } = pf(),
      [d, y] = q.useState({
        profile_name: "",
        student_id: "",
        college: "",
        department: "",
        major: "",
        current_grade: 1,
        current_semester: 1,
      });
    q.useEffect(() => {
      r &&
        y({
          profile_name: r.profile_name || "",
          student_id: r.student_id || "",
          college: r.college || "",
          department: r.department || "",
          major: r.major || "",
          current_grade: r.current_grade || 1,
          current_semester: r.current_semester || 1,
        });
    }, [r]);
    const m = (v) => {
        const { name: T, value: O } = v.target;
        y((N) => {
          const _ = {
            ...N,
            [T]:
              T === "current_grade" || T === "current_semester" ? Number(O) : O,
          };
          return (
            T === "college" && ((_.department = ""), (_.major = "")),
            T === "department" && (_.major = ""),
            _
          );
        });
      },
      p = async (v) => {
        v.preventDefault(), h();
        try {
          await u(d), a();
        } catch {}
      },
      b = d.college ? S2[d.college] || [] : [],
      S = d.department ? E2[d.department] || [] : [];
    return R.jsx(v2, {
      isOpen: n,
      onClose: a,
      title: "프로필",
      size: "md",
      children: R.jsxs("form", {
        onSubmit: p,
        className: "space-y-5",
        children: [
          c &&
            R.jsx("div", {
              className:
                "p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm",
              children: c,
            }),
          R.jsxs("div", {
            className: "flex items-center gap-4",
            children: [
              R.jsx("label", {
                className: "w-20 text-sm text-gray-500 flex-shrink-0",
                children: "이름",
              }),
              R.jsx("input", {
                type: "text",
                name: "profile_name",
                value: d.profile_name,
                onChange: m,
                placeholder: "홍길동",
                className:
                  "flex-1 px-4 py-2.5 bg-gray-50 rounded-lg border-0 focus:ring-2 focus:ring-primary-400/30 text-gray-800 placeholder-gray-400",
              }),
            ],
          }),
          R.jsxs("div", {
            className: "flex items-center gap-4",
            children: [
              R.jsx("label", {
                className: "w-20 text-sm text-gray-500 flex-shrink-0",
                children: "학번",
              }),
              R.jsx("input", {
                type: "text",
                name: "student_id",
                value: d.student_id,
                onChange: m,
                placeholder: "C049529",
                className:
                  "flex-1 px-4 py-2.5 bg-gray-50 rounded-lg border-0 focus:ring-2 focus:ring-primary-400/30 text-gray-800 placeholder-gray-400",
              }),
            ],
          }),
          R.jsxs("div", {
            className: "flex items-center gap-4",
            children: [
              R.jsx("label", {
                className: "w-20 text-sm text-gray-500 flex-shrink-0",
                children: "단과대학",
              }),
              R.jsxs("div", {
                className: "flex-1 relative",
                children: [
                  R.jsxs("select", {
                    name: "college",
                    value: d.college,
                    onChange: m,
                    className:
                      "w-full px-4 py-2.5 bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-400/30 focus:border-primary-300 text-gray-800 appearance-none cursor-pointer",
                    children: [
                      R.jsx("option", { value: "", children: "선택" }),
                      x2.map((v) =>
                        R.jsx("option", { value: v, children: v }, v)
                      ),
                    ],
                  }),
                  R.jsx(_a, {
                    size: 16,
                    className:
                      "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none",
                  }),
                ],
              }),
            ],
          }),
          R.jsxs("div", {
            className: "flex items-center gap-4",
            children: [
              R.jsx("label", {
                className: "w-20 text-sm text-gray-500 flex-shrink-0",
                children: "학부",
              }),
              R.jsxs("div", {
                className: "flex-1 relative",
                children: [
                  R.jsxs("select", {
                    name: "department",
                    value: d.department,
                    onChange: m,
                    className:
                      "w-full px-4 py-2.5 bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-400/30 focus:border-primary-300 text-gray-800 appearance-none cursor-pointer",
                    disabled: !d.college,
                    children: [
                      R.jsx("option", { value: "", children: "선택" }),
                      b.map((v) =>
                        R.jsx("option", { value: v, children: v }, v)
                      ),
                    ],
                  }),
                  R.jsx(_a, {
                    size: 16,
                    className:
                      "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none",
                  }),
                ],
              }),
            ],
          }),
          R.jsxs("div", {
            className: "flex items-center gap-4",
            children: [
              R.jsx("label", {
                className: "w-20 text-sm text-gray-500 flex-shrink-0",
                children: "전공",
              }),
              R.jsxs("div", {
                className: "flex-1 relative",
                children: [
                  R.jsxs("select", {
                    name: "major",
                    value: d.major,
                    onChange: m,
                    className:
                      "w-full px-4 py-2.5 bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-400/30 focus:border-primary-300 text-gray-800 appearance-none cursor-pointer",
                    disabled: !d.department,
                    children: [
                      R.jsx("option", { value: "", children: "선택" }),
                      S.map((v) =>
                        R.jsx("option", { value: v, children: v }, v)
                      ),
                    ],
                  }),
                  R.jsx(_a, {
                    size: 16,
                    className:
                      "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none",
                  }),
                ],
              }),
            ],
          }),
          R.jsxs("div", {
            className: "flex items-center gap-4",
            children: [
              R.jsx("label", {
                className: "w-20 text-sm text-gray-500 flex-shrink-0",
                children: "현재학기",
              }),
              R.jsxs("div", {
                className: "flex items-center gap-2 flex-1",
                children: [
                  R.jsxs("div", {
                    className: "relative",
                    children: [
                      R.jsx("select", {
                        name: "current_grade",
                        value: d.current_grade,
                        onChange: m,
                        className:
                          "px-4 py-2.5 bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-400/30 focus:border-primary-300 text-gray-800 appearance-none cursor-pointer pr-8",
                        children: [1, 2, 3, 4, 5].map((v) =>
                          R.jsx("option", { value: v, children: v }, v)
                        ),
                      }),
                      R.jsx(_a, {
                        size: 14,
                        className:
                          "absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none",
                      }),
                    ],
                  }),
                  R.jsx("span", {
                    className: "text-sm text-gray-500",
                    children: "학년",
                  }),
                  R.jsxs("div", {
                    className: "relative",
                    children: [
                      R.jsx("select", {
                        name: "current_semester",
                        value: d.current_semester,
                        onChange: m,
                        className:
                          "px-4 py-2.5 bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-400/30 focus:border-primary-300 text-gray-800 appearance-none cursor-pointer pr-8",
                        children: [1, 2].map((v) =>
                          R.jsx("option", { value: v, children: v }, v)
                        ),
                      }),
                      R.jsx(_a, {
                        size: 14,
                        className:
                          "absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none",
                      }),
                    ],
                  }),
                  R.jsx("span", {
                    className: "text-sm text-gray-500",
                    children: "학기",
                  }),
                ],
              }),
            ],
          }),
          R.jsx("div", {
            className: "flex justify-end pt-4",
            children: R.jsx("button", {
              type: "submit",
              disabled: o,
              className:
                "px-8 py-2.5 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg shadow-md transition-all disabled:opacity-50",
              children: o ? "저장 중..." : "저장",
            }),
          }),
        ],
      }),
    });
  },
  T2 = ({ children: n }) => {
    const { setIsMobile: a } = yf();
    return (
      q.useEffect(() => {
        const r = () => {
          a(window.innerWidth < 768);
        };
        return (
          r(),
          window.addEventListener("resize", r),
          () => window.removeEventListener("resize", r)
        );
      }, [a]),
      R.jsxs("div", {
        className: "flex h-screen overflow-hidden",
        children: [
          R.jsx(g2, {}),
          R.jsx("main", {
            className: "flex-1 flex flex-col overflow-hidden",
            children: n,
          }),
          R.jsx(w2, {}),
        ],
      })
    );
  };
function A2(n, a) {
  const r = {};
  return (n[n.length - 1] === "" ? [...n, ""] : n)
    .join((r.padRight ? " " : "") + "," + (r.padLeft === !1 ? "" : " "))
    .trim();
}
const C2 = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
  z2 = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
  O2 = {};
function cy(n, a) {
  return (O2.jsx ? z2 : C2).test(n);
}
const R2 = /[ \t\n\f\r]/g;
function N2(n) {
  return typeof n == "object" ? (n.type === "text" ? fy(n.value) : !1) : fy(n);
}
function fy(n) {
  return n.replace(R2, "") === "";
}
class tr {
  constructor(a, r, u) {
    (this.normal = r), (this.property = a), u && (this.space = u);
  }
}
tr.prototype.normal = {};
tr.prototype.property = {};
tr.prototype.space = void 0;
function Ug(n, a) {
  const r = {},
    u = {};
  for (const o of n) Object.assign(r, o.property), Object.assign(u, o.normal);
  return new tr(r, u, a);
}
function Qc(n) {
  return n.toLowerCase();
}
class kt {
  constructor(a, r) {
    (this.attribute = r), (this.property = a);
  }
}
kt.prototype.attribute = "";
kt.prototype.booleanish = !1;
kt.prototype.boolean = !1;
kt.prototype.commaOrSpaceSeparated = !1;
kt.prototype.commaSeparated = !1;
kt.prototype.defined = !1;
kt.prototype.mustUseProperty = !1;
kt.prototype.number = !1;
kt.prototype.overloadedBoolean = !1;
kt.prototype.property = "";
kt.prototype.spaceSeparated = !1;
kt.prototype.space = void 0;
let _2 = 0;
const Ee = ql(),
  rt = ql(),
  Zc = ql(),
  J = ql(),
  Ge = ql(),
  Da = ql(),
  Xt = ql();
function ql() {
  return 2 ** ++_2;
}
const Fc = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        boolean: Ee,
        booleanish: rt,
        commaOrSpaceSeparated: Xt,
        commaSeparated: Da,
        number: J,
        overloadedBoolean: Zc,
        spaceSeparated: Ge,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Sc = Object.keys(Fc);
class gf extends kt {
  constructor(a, r, u, o) {
    let c = -1;
    if ((super(a, r), hy(this, "space", o), typeof u == "number"))
      for (; ++c < Sc.length; ) {
        const h = Sc[c];
        hy(this, Sc[c], (u & Fc[h]) === Fc[h]);
      }
  }
}
gf.prototype.defined = !0;
function hy(n, a, r) {
  r && (n[a] = r);
}
function Ha(n) {
  const a = {},
    r = {};
  for (const [u, o] of Object.entries(n.properties)) {
    const c = new gf(u, n.transform(n.attributes || {}, u), o, n.space);
    n.mustUseProperty &&
      n.mustUseProperty.includes(u) &&
      (c.mustUseProperty = !0),
      (a[u] = c),
      (r[Qc(u)] = u),
      (r[Qc(c.attribute)] = u);
  }
  return new tr(a, r, n.space);
}
const Bg = Ha({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: rt,
    ariaAutoComplete: null,
    ariaBusy: rt,
    ariaChecked: rt,
    ariaColCount: J,
    ariaColIndex: J,
    ariaColSpan: J,
    ariaControls: Ge,
    ariaCurrent: null,
    ariaDescribedBy: Ge,
    ariaDetails: null,
    ariaDisabled: rt,
    ariaDropEffect: Ge,
    ariaErrorMessage: null,
    ariaExpanded: rt,
    ariaFlowTo: Ge,
    ariaGrabbed: rt,
    ariaHasPopup: null,
    ariaHidden: rt,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: Ge,
    ariaLevel: J,
    ariaLive: null,
    ariaModal: rt,
    ariaMultiLine: rt,
    ariaMultiSelectable: rt,
    ariaOrientation: null,
    ariaOwns: Ge,
    ariaPlaceholder: null,
    ariaPosInSet: J,
    ariaPressed: rt,
    ariaReadOnly: rt,
    ariaRelevant: null,
    ariaRequired: rt,
    ariaRoleDescription: Ge,
    ariaRowCount: J,
    ariaRowIndex: J,
    ariaRowSpan: J,
    ariaSelected: rt,
    ariaSetSize: J,
    ariaSort: null,
    ariaValueMax: J,
    ariaValueMin: J,
    ariaValueNow: J,
    ariaValueText: null,
    role: null,
  },
  transform(n, a) {
    return a === "role" ? a : "aria-" + a.slice(4).toLowerCase();
  },
});
function Hg(n, a) {
  return a in n ? n[a] : a;
}
function qg(n, a) {
  return Hg(n, a.toLowerCase());
}
const D2 = Ha({
    attributes: {
      acceptcharset: "accept-charset",
      classname: "class",
      htmlfor: "for",
      httpequiv: "http-equiv",
    },
    mustUseProperty: ["checked", "multiple", "muted", "selected"],
    properties: {
      abbr: null,
      accept: Da,
      acceptCharset: Ge,
      accessKey: Ge,
      action: null,
      allow: null,
      allowFullScreen: Ee,
      allowPaymentRequest: Ee,
      allowUserMedia: Ee,
      alt: null,
      as: null,
      async: Ee,
      autoCapitalize: null,
      autoComplete: Ge,
      autoFocus: Ee,
      autoPlay: Ee,
      blocking: Ge,
      capture: null,
      charSet: null,
      checked: Ee,
      cite: null,
      className: Ge,
      cols: J,
      colSpan: null,
      content: null,
      contentEditable: rt,
      controls: Ee,
      controlsList: Ge,
      coords: J | Da,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: Ee,
      defer: Ee,
      dir: null,
      dirName: null,
      disabled: Ee,
      download: Zc,
      draggable: rt,
      encType: null,
      enterKeyHint: null,
      fetchPriority: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: Ee,
      formTarget: null,
      headers: Ge,
      height: J,
      hidden: Zc,
      high: J,
      href: null,
      hrefLang: null,
      htmlFor: Ge,
      httpEquiv: Ge,
      id: null,
      imageSizes: null,
      imageSrcSet: null,
      inert: Ee,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: Ee,
      itemId: null,
      itemProp: Ge,
      itemRef: Ge,
      itemScope: Ee,
      itemType: Ge,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: Ee,
      low: J,
      manifest: null,
      max: null,
      maxLength: J,
      media: null,
      method: null,
      min: null,
      minLength: J,
      multiple: Ee,
      muted: Ee,
      name: null,
      nonce: null,
      noModule: Ee,
      noValidate: Ee,
      onAbort: null,
      onAfterPrint: null,
      onAuxClick: null,
      onBeforeMatch: null,
      onBeforePrint: null,
      onBeforeToggle: null,
      onBeforeUnload: null,
      onBlur: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onContextLost: null,
      onContextMenu: null,
      onContextRestored: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFormData: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLanguageChange: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadEnd: null,
      onLoadStart: null,
      onMessage: null,
      onMessageError: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRejectionHandled: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onScrollEnd: null,
      onSecurityPolicyViolation: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onSlotChange: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnhandledRejection: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onWheel: null,
      open: Ee,
      optimum: J,
      pattern: null,
      ping: Ge,
      placeholder: null,
      playsInline: Ee,
      popover: null,
      popoverTarget: null,
      popoverTargetAction: null,
      poster: null,
      preload: null,
      readOnly: Ee,
      referrerPolicy: null,
      rel: Ge,
      required: Ee,
      reversed: Ee,
      rows: J,
      rowSpan: J,
      sandbox: Ge,
      scope: null,
      scoped: Ee,
      seamless: Ee,
      selected: Ee,
      shadowRootClonable: Ee,
      shadowRootDelegatesFocus: Ee,
      shadowRootMode: null,
      shape: null,
      size: J,
      sizes: null,
      slot: null,
      span: J,
      spellCheck: rt,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: null,
      start: J,
      step: null,
      style: null,
      tabIndex: J,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: Ee,
      useMap: null,
      value: rt,
      width: J,
      wrap: null,
      writingSuggestions: null,
      align: null,
      aLink: null,
      archive: Ge,
      axis: null,
      background: null,
      bgColor: null,
      border: J,
      borderColor: null,
      bottomMargin: J,
      cellPadding: null,
      cellSpacing: null,
      char: null,
      charOff: null,
      classId: null,
      clear: null,
      code: null,
      codeBase: null,
      codeType: null,
      color: null,
      compact: Ee,
      declare: Ee,
      event: null,
      face: null,
      frame: null,
      frameBorder: null,
      hSpace: J,
      leftMargin: J,
      link: null,
      longDesc: null,
      lowSrc: null,
      marginHeight: J,
      marginWidth: J,
      noResize: Ee,
      noHref: Ee,
      noShade: Ee,
      noWrap: Ee,
      object: null,
      profile: null,
      prompt: null,
      rev: null,
      rightMargin: J,
      rules: null,
      scheme: null,
      scrolling: rt,
      standby: null,
      summary: null,
      text: null,
      topMargin: J,
      valueType: null,
      version: null,
      vAlign: null,
      vLink: null,
      vSpace: J,
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: Ee,
      disableRemotePlayback: Ee,
      prefix: null,
      property: null,
      results: J,
      security: null,
      unselectable: null,
    },
    space: "html",
    transform: qg,
  }),
  M2 = Ha({
    attributes: {
      accentHeight: "accent-height",
      alignmentBaseline: "alignment-baseline",
      arabicForm: "arabic-form",
      baselineShift: "baseline-shift",
      capHeight: "cap-height",
      className: "class",
      clipPath: "clip-path",
      clipRule: "clip-rule",
      colorInterpolation: "color-interpolation",
      colorInterpolationFilters: "color-interpolation-filters",
      colorProfile: "color-profile",
      colorRendering: "color-rendering",
      crossOrigin: "crossorigin",
      dataType: "datatype",
      dominantBaseline: "dominant-baseline",
      enableBackground: "enable-background",
      fillOpacity: "fill-opacity",
      fillRule: "fill-rule",
      floodColor: "flood-color",
      floodOpacity: "flood-opacity",
      fontFamily: "font-family",
      fontSize: "font-size",
      fontSizeAdjust: "font-size-adjust",
      fontStretch: "font-stretch",
      fontStyle: "font-style",
      fontVariant: "font-variant",
      fontWeight: "font-weight",
      glyphName: "glyph-name",
      glyphOrientationHorizontal: "glyph-orientation-horizontal",
      glyphOrientationVertical: "glyph-orientation-vertical",
      hrefLang: "hreflang",
      horizAdvX: "horiz-adv-x",
      horizOriginX: "horiz-origin-x",
      horizOriginY: "horiz-origin-y",
      imageRendering: "image-rendering",
      letterSpacing: "letter-spacing",
      lightingColor: "lighting-color",
      markerEnd: "marker-end",
      markerMid: "marker-mid",
      markerStart: "marker-start",
      navDown: "nav-down",
      navDownLeft: "nav-down-left",
      navDownRight: "nav-down-right",
      navLeft: "nav-left",
      navNext: "nav-next",
      navPrev: "nav-prev",
      navRight: "nav-right",
      navUp: "nav-up",
      navUpLeft: "nav-up-left",
      navUpRight: "nav-up-right",
      onAbort: "onabort",
      onActivate: "onactivate",
      onAfterPrint: "onafterprint",
      onBeforePrint: "onbeforeprint",
      onBegin: "onbegin",
      onCancel: "oncancel",
      onCanPlay: "oncanplay",
      onCanPlayThrough: "oncanplaythrough",
      onChange: "onchange",
      onClick: "onclick",
      onClose: "onclose",
      onCopy: "oncopy",
      onCueChange: "oncuechange",
      onCut: "oncut",
      onDblClick: "ondblclick",
      onDrag: "ondrag",
      onDragEnd: "ondragend",
      onDragEnter: "ondragenter",
      onDragExit: "ondragexit",
      onDragLeave: "ondragleave",
      onDragOver: "ondragover",
      onDragStart: "ondragstart",
      onDrop: "ondrop",
      onDurationChange: "ondurationchange",
      onEmptied: "onemptied",
      onEnd: "onend",
      onEnded: "onended",
      onError: "onerror",
      onFocus: "onfocus",
      onFocusIn: "onfocusin",
      onFocusOut: "onfocusout",
      onHashChange: "onhashchange",
      onInput: "oninput",
      onInvalid: "oninvalid",
      onKeyDown: "onkeydown",
      onKeyPress: "onkeypress",
      onKeyUp: "onkeyup",
      onLoad: "onload",
      onLoadedData: "onloadeddata",
      onLoadedMetadata: "onloadedmetadata",
      onLoadStart: "onloadstart",
      onMessage: "onmessage",
      onMouseDown: "onmousedown",
      onMouseEnter: "onmouseenter",
      onMouseLeave: "onmouseleave",
      onMouseMove: "onmousemove",
      onMouseOut: "onmouseout",
      onMouseOver: "onmouseover",
      onMouseUp: "onmouseup",
      onMouseWheel: "onmousewheel",
      onOffline: "onoffline",
      onOnline: "ononline",
      onPageHide: "onpagehide",
      onPageShow: "onpageshow",
      onPaste: "onpaste",
      onPause: "onpause",
      onPlay: "onplay",
      onPlaying: "onplaying",
      onPopState: "onpopstate",
      onProgress: "onprogress",
      onRateChange: "onratechange",
      onRepeat: "onrepeat",
      onReset: "onreset",
      onResize: "onresize",
      onScroll: "onscroll",
      onSeeked: "onseeked",
      onSeeking: "onseeking",
      onSelect: "onselect",
      onShow: "onshow",
      onStalled: "onstalled",
      onStorage: "onstorage",
      onSubmit: "onsubmit",
      onSuspend: "onsuspend",
      onTimeUpdate: "ontimeupdate",
      onToggle: "ontoggle",
      onUnload: "onunload",
      onVolumeChange: "onvolumechange",
      onWaiting: "onwaiting",
      onZoom: "onzoom",
      overlinePosition: "overline-position",
      overlineThickness: "overline-thickness",
      paintOrder: "paint-order",
      panose1: "panose-1",
      pointerEvents: "pointer-events",
      referrerPolicy: "referrerpolicy",
      renderingIntent: "rendering-intent",
      shapeRendering: "shape-rendering",
      stopColor: "stop-color",
      stopOpacity: "stop-opacity",
      strikethroughPosition: "strikethrough-position",
      strikethroughThickness: "strikethrough-thickness",
      strokeDashArray: "stroke-dasharray",
      strokeDashOffset: "stroke-dashoffset",
      strokeLineCap: "stroke-linecap",
      strokeLineJoin: "stroke-linejoin",
      strokeMiterLimit: "stroke-miterlimit",
      strokeOpacity: "stroke-opacity",
      strokeWidth: "stroke-width",
      tabIndex: "tabindex",
      textAnchor: "text-anchor",
      textDecoration: "text-decoration",
      textRendering: "text-rendering",
      transformOrigin: "transform-origin",
      typeOf: "typeof",
      underlinePosition: "underline-position",
      underlineThickness: "underline-thickness",
      unicodeBidi: "unicode-bidi",
      unicodeRange: "unicode-range",
      unitsPerEm: "units-per-em",
      vAlphabetic: "v-alphabetic",
      vHanging: "v-hanging",
      vIdeographic: "v-ideographic",
      vMathematical: "v-mathematical",
      vectorEffect: "vector-effect",
      vertAdvY: "vert-adv-y",
      vertOriginX: "vert-origin-x",
      vertOriginY: "vert-origin-y",
      wordSpacing: "word-spacing",
      writingMode: "writing-mode",
      xHeight: "x-height",
      playbackOrder: "playbackorder",
      timelineBegin: "timelinebegin",
    },
    properties: {
      about: Xt,
      accentHeight: J,
      accumulate: null,
      additive: null,
      alignmentBaseline: null,
      alphabetic: J,
      amplitude: J,
      arabicForm: null,
      ascent: J,
      attributeName: null,
      attributeType: null,
      azimuth: J,
      bandwidth: null,
      baselineShift: null,
      baseFrequency: null,
      baseProfile: null,
      bbox: null,
      begin: null,
      bias: J,
      by: null,
      calcMode: null,
      capHeight: J,
      className: Ge,
      clip: null,
      clipPath: null,
      clipPathUnits: null,
      clipRule: null,
      color: null,
      colorInterpolation: null,
      colorInterpolationFilters: null,
      colorProfile: null,
      colorRendering: null,
      content: null,
      contentScriptType: null,
      contentStyleType: null,
      crossOrigin: null,
      cursor: null,
      cx: null,
      cy: null,
      d: null,
      dataType: null,
      defaultAction: null,
      descent: J,
      diffuseConstant: J,
      direction: null,
      display: null,
      dur: null,
      divisor: J,
      dominantBaseline: null,
      download: Ee,
      dx: null,
      dy: null,
      edgeMode: null,
      editable: null,
      elevation: J,
      enableBackground: null,
      end: null,
      event: null,
      exponent: J,
      externalResourcesRequired: null,
      fill: null,
      fillOpacity: J,
      fillRule: null,
      filter: null,
      filterRes: null,
      filterUnits: null,
      floodColor: null,
      floodOpacity: null,
      focusable: null,
      focusHighlight: null,
      fontFamily: null,
      fontSize: null,
      fontSizeAdjust: null,
      fontStretch: null,
      fontStyle: null,
      fontVariant: null,
      fontWeight: null,
      format: null,
      fr: null,
      from: null,
      fx: null,
      fy: null,
      g1: Da,
      g2: Da,
      glyphName: Da,
      glyphOrientationHorizontal: null,
      glyphOrientationVertical: null,
      glyphRef: null,
      gradientTransform: null,
      gradientUnits: null,
      handler: null,
      hanging: J,
      hatchContentUnits: null,
      hatchUnits: null,
      height: null,
      href: null,
      hrefLang: null,
      horizAdvX: J,
      horizOriginX: J,
      horizOriginY: J,
      id: null,
      ideographic: J,
      imageRendering: null,
      initialVisibility: null,
      in: null,
      in2: null,
      intercept: J,
      k: J,
      k1: J,
      k2: J,
      k3: J,
      k4: J,
      kernelMatrix: Xt,
      kernelUnitLength: null,
      keyPoints: null,
      keySplines: null,
      keyTimes: null,
      kerning: null,
      lang: null,
      lengthAdjust: null,
      letterSpacing: null,
      lightingColor: null,
      limitingConeAngle: J,
      local: null,
      markerEnd: null,
      markerMid: null,
      markerStart: null,
      markerHeight: null,
      markerUnits: null,
      markerWidth: null,
      mask: null,
      maskContentUnits: null,
      maskUnits: null,
      mathematical: null,
      max: null,
      media: null,
      mediaCharacterEncoding: null,
      mediaContentEncodings: null,
      mediaSize: J,
      mediaTime: null,
      method: null,
      min: null,
      mode: null,
      name: null,
      navDown: null,
      navDownLeft: null,
      navDownRight: null,
      navLeft: null,
      navNext: null,
      navPrev: null,
      navRight: null,
      navUp: null,
      navUpLeft: null,
      navUpRight: null,
      numOctaves: null,
      observer: null,
      offset: null,
      onAbort: null,
      onActivate: null,
      onAfterPrint: null,
      onBeforePrint: null,
      onBegin: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnd: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFocusIn: null,
      onFocusOut: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadStart: null,
      onMessage: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onMouseWheel: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRepeat: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onShow: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onZoom: null,
      opacity: null,
      operator: null,
      order: null,
      orient: null,
      orientation: null,
      origin: null,
      overflow: null,
      overlay: null,
      overlinePosition: J,
      overlineThickness: J,
      paintOrder: null,
      panose1: null,
      path: null,
      pathLength: J,
      patternContentUnits: null,
      patternTransform: null,
      patternUnits: null,
      phase: null,
      ping: Ge,
      pitch: null,
      playbackOrder: null,
      pointerEvents: null,
      points: null,
      pointsAtX: J,
      pointsAtY: J,
      pointsAtZ: J,
      preserveAlpha: null,
      preserveAspectRatio: null,
      primitiveUnits: null,
      propagate: null,
      property: Xt,
      r: null,
      radius: null,
      referrerPolicy: null,
      refX: null,
      refY: null,
      rel: Xt,
      rev: Xt,
      renderingIntent: null,
      repeatCount: null,
      repeatDur: null,
      requiredExtensions: Xt,
      requiredFeatures: Xt,
      requiredFonts: Xt,
      requiredFormats: Xt,
      resource: null,
      restart: null,
      result: null,
      rotate: null,
      rx: null,
      ry: null,
      scale: null,
      seed: null,
      shapeRendering: null,
      side: null,
      slope: null,
      snapshotTime: null,
      specularConstant: J,
      specularExponent: J,
      spreadMethod: null,
      spacing: null,
      startOffset: null,
      stdDeviation: null,
      stemh: null,
      stemv: null,
      stitchTiles: null,
      stopColor: null,
      stopOpacity: null,
      strikethroughPosition: J,
      strikethroughThickness: J,
      string: null,
      stroke: null,
      strokeDashArray: Xt,
      strokeDashOffset: null,
      strokeLineCap: null,
      strokeLineJoin: null,
      strokeMiterLimit: J,
      strokeOpacity: J,
      strokeWidth: null,
      style: null,
      surfaceScale: J,
      syncBehavior: null,
      syncBehaviorDefault: null,
      syncMaster: null,
      syncTolerance: null,
      syncToleranceDefault: null,
      systemLanguage: Xt,
      tabIndex: J,
      tableValues: null,
      target: null,
      targetX: J,
      targetY: J,
      textAnchor: null,
      textDecoration: null,
      textRendering: null,
      textLength: null,
      timelineBegin: null,
      title: null,
      transformBehavior: null,
      type: null,
      typeOf: Xt,
      to: null,
      transform: null,
      transformOrigin: null,
      u1: null,
      u2: null,
      underlinePosition: J,
      underlineThickness: J,
      unicode: null,
      unicodeBidi: null,
      unicodeRange: null,
      unitsPerEm: J,
      values: null,
      vAlphabetic: J,
      vMathematical: J,
      vectorEffect: null,
      vHanging: J,
      vIdeographic: J,
      version: null,
      vertAdvY: J,
      vertOriginX: J,
      vertOriginY: J,
      viewBox: null,
      viewTarget: null,
      visibility: null,
      width: null,
      widths: null,
      wordSpacing: null,
      writingMode: null,
      x: null,
      x1: null,
      x2: null,
      xChannelSelector: null,
      xHeight: J,
      y: null,
      y1: null,
      y2: null,
      yChannelSelector: null,
      z: null,
      zoomAndPan: null,
    },
    space: "svg",
    transform: Hg,
  }),
  Yg = Ha({
    properties: {
      xLinkActuate: null,
      xLinkArcRole: null,
      xLinkHref: null,
      xLinkRole: null,
      xLinkShow: null,
      xLinkTitle: null,
      xLinkType: null,
    },
    space: "xlink",
    transform(n, a) {
      return "xlink:" + a.slice(5).toLowerCase();
    },
  }),
  Vg = Ha({
    attributes: { xmlnsxlink: "xmlns:xlink" },
    properties: { xmlnsXLink: null, xmlns: null },
    space: "xmlns",
    transform: qg,
  }),
  Xg = Ha({
    properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
    space: "xml",
    transform(n, a) {
      return "xml:" + a.slice(3).toLowerCase();
    },
  }),
  k2 = {
    classId: "classID",
    dataType: "datatype",
    itemId: "itemID",
    strokeDashArray: "strokeDasharray",
    strokeDashOffset: "strokeDashoffset",
    strokeLineCap: "strokeLinecap",
    strokeLineJoin: "strokeLinejoin",
    strokeMiterLimit: "strokeMiterlimit",
    typeOf: "typeof",
    xLinkActuate: "xlinkActuate",
    xLinkArcRole: "xlinkArcrole",
    xLinkHref: "xlinkHref",
    xLinkRole: "xlinkRole",
    xLinkShow: "xlinkShow",
    xLinkTitle: "xlinkTitle",
    xLinkType: "xlinkType",
    xmlnsXLink: "xmlnsXlink",
  },
  j2 = /[A-Z]/g,
  dy = /-[a-z]/g,
  L2 = /^data[-\w.:]+$/i;
function U2(n, a) {
  const r = Qc(a);
  let u = a,
    o = kt;
  if (r in n.normal) return n.property[n.normal[r]];
  if (r.length > 4 && r.slice(0, 4) === "data" && L2.test(a)) {
    if (a.charAt(4) === "-") {
      const c = a.slice(5).replace(dy, H2);
      u = "data" + c.charAt(0).toUpperCase() + c.slice(1);
    } else {
      const c = a.slice(4);
      if (!dy.test(c)) {
        let h = c.replace(j2, B2);
        h.charAt(0) !== "-" && (h = "-" + h), (a = "data" + h);
      }
    }
    o = gf;
  }
  return new o(u, a);
}
function B2(n) {
  return "-" + n.toLowerCase();
}
function H2(n) {
  return n.charAt(1).toUpperCase();
}
const q2 = Ug([Bg, D2, Yg, Vg, Xg], "html"),
  bf = Ug([Bg, M2, Yg, Vg, Xg], "svg");
function Y2(n) {
  return n.join(" ").trim();
}
var Ra = {},
  Ec,
  my;
function V2() {
  if (my) return Ec;
  my = 1;
  var n = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
    a = /\n/g,
    r = /^\s*/,
    u = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
    o = /^:\s*/,
    c = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
    h = /^[;\s]*/,
    d = /^\s+|\s+$/g,
    y = `
`,
    m = "/",
    p = "*",
    b = "",
    S = "comment",
    v = "declaration";
  function T(N, _) {
    if (typeof N != "string")
      throw new TypeError("First argument must be a string");
    if (!N) return [];
    _ = _ || {};
    var Z = 1,
      k = 1;
    function ee(ie) {
      var $ = ie.match(a);
      $ && (Z += $.length);
      var M = ie.lastIndexOf(y);
      k = ~M ? ie.length - M : k + ie.length;
    }
    function ae() {
      var ie = { line: Z, column: k };
      return function ($) {
        return ($.position = new Y(ie)), ce(), $;
      };
    }
    function Y(ie) {
      (this.start = ie),
        (this.end = { line: Z, column: k }),
        (this.source = _.source);
    }
    Y.prototype.content = N;
    function I(ie) {
      var $ = new Error(_.source + ":" + Z + ":" + k + ": " + ie);
      if (
        (($.reason = ie),
        ($.filename = _.source),
        ($.line = Z),
        ($.column = k),
        ($.source = N),
        !_.silent)
      )
        throw $;
    }
    function de(ie) {
      var $ = ie.exec(N);
      if ($) {
        var M = $[0];
        return ee(M), (N = N.slice(M.length)), $;
      }
    }
    function ce() {
      de(r);
    }
    function me(ie) {
      var $;
      for (ie = ie || []; ($ = ne()); ) $ !== !1 && ie.push($);
      return ie;
    }
    function ne() {
      var ie = ae();
      if (!(m != N.charAt(0) || p != N.charAt(1))) {
        for (
          var $ = 2;
          b != N.charAt($) && (p != N.charAt($) || m != N.charAt($ + 1));

        )
          ++$;
        if ((($ += 2), b === N.charAt($ - 1)))
          return I("End of comment missing");
        var M = N.slice(2, $ - 2);
        return (
          (k += 2),
          ee(M),
          (N = N.slice($)),
          (k += 2),
          ie({ type: S, comment: M })
        );
      }
    }
    function te() {
      var ie = ae(),
        $ = de(u);
      if ($) {
        if ((ne(), !de(o))) return I("property missing ':'");
        var M = de(c),
          K = ie({
            type: v,
            property: O($[0].replace(n, b)),
            value: M ? O(M[0].replace(n, b)) : b,
          });
        return de(h), K;
      }
    }
    function we() {
      var ie = [];
      me(ie);
      for (var $; ($ = te()); ) $ !== !1 && (ie.push($), me(ie));
      return ie;
    }
    return ce(), we();
  }
  function O(N) {
    return N ? N.replace(d, b) : b;
  }
  return (Ec = T), Ec;
}
var py;
function X2() {
  if (py) return Ra;
  py = 1;
  var n =
    (Ra && Ra.__importDefault) ||
    function (u) {
      return u && u.__esModule ? u : { default: u };
    };
  Object.defineProperty(Ra, "__esModule", { value: !0 }), (Ra.default = r);
  const a = n(V2());
  function r(u, o) {
    let c = null;
    if (!u || typeof u != "string") return c;
    const h = (0, a.default)(u),
      d = typeof o == "function";
    return (
      h.forEach((y) => {
        if (y.type !== "declaration") return;
        const { property: m, value: p } = y;
        d ? o(m, p, y) : p && ((c = c || {}), (c[m] = p));
      }),
      c
    );
  }
  return Ra;
}
var Bi = {},
  yy;
function G2() {
  if (yy) return Bi;
  (yy = 1),
    Object.defineProperty(Bi, "__esModule", { value: !0 }),
    (Bi.camelCase = void 0);
  var n = /^--[a-zA-Z0-9_-]+$/,
    a = /-([a-z])/g,
    r = /^[^-]+$/,
    u = /^-(webkit|moz|ms|o|khtml)-/,
    o = /^-(ms)-/,
    c = function (m) {
      return !m || r.test(m) || n.test(m);
    },
    h = function (m, p) {
      return p.toUpperCase();
    },
    d = function (m, p) {
      return "".concat(p, "-");
    },
    y = function (m, p) {
      return (
        p === void 0 && (p = {}),
        c(m)
          ? m
          : ((m = m.toLowerCase()),
            p.reactCompat ? (m = m.replace(o, d)) : (m = m.replace(u, d)),
            m.replace(a, h))
      );
    };
  return (Bi.camelCase = y), Bi;
}
var Hi, gy;
function Q2() {
  if (gy) return Hi;
  gy = 1;
  var n =
      (Hi && Hi.__importDefault) ||
      function (o) {
        return o && o.__esModule ? o : { default: o };
      },
    a = n(X2()),
    r = G2();
  function u(o, c) {
    var h = {};
    return (
      !o ||
        typeof o != "string" ||
        (0, a.default)(o, function (d, y) {
          d && y && (h[(0, r.camelCase)(d, c)] = y);
        }),
      h
    );
  }
  return (u.default = u), (Hi = u), Hi;
}
var Z2 = Q2();
const F2 = tf(Z2),
  Gg = Qg("end"),
  vf = Qg("start");
function Qg(n) {
  return a;
  function a(r) {
    const u = (r && r.position && r.position[n]) || {};
    if (
      typeof u.line == "number" &&
      u.line > 0 &&
      typeof u.column == "number" &&
      u.column > 0
    )
      return {
        line: u.line,
        column: u.column,
        offset:
          typeof u.offset == "number" && u.offset > -1 ? u.offset : void 0,
      };
  }
}
function K2(n) {
  const a = vf(n),
    r = Gg(n);
  if (a && r) return { start: a, end: r };
}
function Vi(n) {
  return !n || typeof n != "object"
    ? ""
    : "position" in n || "type" in n
    ? by(n.position)
    : "start" in n || "end" in n
    ? by(n)
    : "line" in n || "column" in n
    ? Kc(n)
    : "";
}
function Kc(n) {
  return vy(n && n.line) + ":" + vy(n && n.column);
}
function by(n) {
  return Kc(n && n.start) + "-" + Kc(n && n.end);
}
function vy(n) {
  return n && typeof n == "number" ? n : 1;
}
class bt extends Error {
  constructor(a, r, u) {
    super(), typeof r == "string" && ((u = r), (r = void 0));
    let o = "",
      c = {},
      h = !1;
    if (
      (r &&
        ("line" in r && "column" in r
          ? (c = { place: r })
          : "start" in r && "end" in r
          ? (c = { place: r })
          : "type" in r
          ? (c = { ancestors: [r], place: r.position })
          : (c = { ...r })),
      typeof a == "string"
        ? (o = a)
        : !c.cause && a && ((h = !0), (o = a.message), (c.cause = a)),
      !c.ruleId && !c.source && typeof u == "string")
    ) {
      const y = u.indexOf(":");
      y === -1
        ? (c.ruleId = u)
        : ((c.source = u.slice(0, y)), (c.ruleId = u.slice(y + 1)));
    }
    if (!c.place && c.ancestors && c.ancestors) {
      const y = c.ancestors[c.ancestors.length - 1];
      y && (c.place = y.position);
    }
    const d = c.place && "start" in c.place ? c.place.start : c.place;
    (this.ancestors = c.ancestors || void 0),
      (this.cause = c.cause || void 0),
      (this.column = d ? d.column : void 0),
      (this.fatal = void 0),
      (this.file = ""),
      (this.message = o),
      (this.line = d ? d.line : void 0),
      (this.name = Vi(c.place) || "1:1"),
      (this.place = c.place || void 0),
      (this.reason = this.message),
      (this.ruleId = c.ruleId || void 0),
      (this.source = c.source || void 0),
      (this.stack =
        h && c.cause && typeof c.cause.stack == "string" ? c.cause.stack : ""),
      (this.actual = void 0),
      (this.expected = void 0),
      (this.note = void 0),
      (this.url = void 0);
  }
}
bt.prototype.file = "";
bt.prototype.name = "";
bt.prototype.reason = "";
bt.prototype.message = "";
bt.prototype.stack = "";
bt.prototype.column = void 0;
bt.prototype.line = void 0;
bt.prototype.ancestors = void 0;
bt.prototype.cause = void 0;
bt.prototype.fatal = void 0;
bt.prototype.place = void 0;
bt.prototype.ruleId = void 0;
bt.prototype.source = void 0;
const xf = {}.hasOwnProperty,
  J2 = new Map(),
  I2 = /[A-Z]/g,
  $2 = new Set(["table", "tbody", "thead", "tfoot", "tr"]),
  P2 = new Set(["td", "th"]),
  Zg = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function W2(n, a) {
  if (!a || a.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const r = a.filePath || void 0;
  let u;
  if (a.development) {
    if (typeof a.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    u = uE(r, a.jsxDEV);
  } else {
    if (typeof a.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof a.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    u = rE(r, a.jsx, a.jsxs);
  }
  const o = {
      Fragment: a.Fragment,
      ancestors: [],
      components: a.components || {},
      create: u,
      elementAttributeNameCase: a.elementAttributeNameCase || "react",
      evaluater: a.createEvaluater ? a.createEvaluater() : void 0,
      filePath: r,
      ignoreInvalidStyle: a.ignoreInvalidStyle || !1,
      passKeys: a.passKeys !== !1,
      passNode: a.passNode || !1,
      schema: a.space === "svg" ? bf : q2,
      stylePropertyNameCase: a.stylePropertyNameCase || "dom",
      tableCellAlignToStyle: a.tableCellAlignToStyle !== !1,
    },
    c = Fg(o, n, void 0);
  return c && typeof c != "string"
    ? c
    : o.create(n, o.Fragment, { children: c || void 0 }, void 0);
}
function Fg(n, a, r) {
  if (a.type === "element") return eE(n, a, r);
  if (a.type === "mdxFlowExpression" || a.type === "mdxTextExpression")
    return tE(n, a);
  if (a.type === "mdxJsxFlowElement" || a.type === "mdxJsxTextElement")
    return lE(n, a, r);
  if (a.type === "mdxjsEsm") return nE(n, a);
  if (a.type === "root") return aE(n, a, r);
  if (a.type === "text") return iE(n, a);
}
function eE(n, a, r) {
  const u = n.schema;
  let o = u;
  a.tagName.toLowerCase() === "svg" &&
    u.space === "html" &&
    ((o = bf), (n.schema = o)),
    n.ancestors.push(a);
  const c = Jg(n, a.tagName, !1),
    h = oE(n, a);
  let d = Ef(n, a);
  return (
    $2.has(a.tagName) &&
      (d = d.filter(function (y) {
        return typeof y == "string" ? !N2(y) : !0;
      })),
    Kg(n, h, c, a),
    Sf(h, d),
    n.ancestors.pop(),
    (n.schema = u),
    n.create(a, c, h, r)
  );
}
function tE(n, a) {
  if (a.data && a.data.estree && n.evaluater) {
    const u = a.data.estree.body[0];
    return u.type, n.evaluater.evaluateExpression(u.expression);
  }
  Zi(n, a.position);
}
function nE(n, a) {
  if (a.data && a.data.estree && n.evaluater)
    return n.evaluater.evaluateProgram(a.data.estree);
  Zi(n, a.position);
}
function lE(n, a, r) {
  const u = n.schema;
  let o = u;
  a.name === "svg" && u.space === "html" && ((o = bf), (n.schema = o)),
    n.ancestors.push(a);
  const c = a.name === null ? n.Fragment : Jg(n, a.name, !0),
    h = sE(n, a),
    d = Ef(n, a);
  return (
    Kg(n, h, c, a),
    Sf(h, d),
    n.ancestors.pop(),
    (n.schema = u),
    n.create(a, c, h, r)
  );
}
function aE(n, a, r) {
  const u = {};
  return Sf(u, Ef(n, a)), n.create(a, n.Fragment, u, r);
}
function iE(n, a) {
  return a.value;
}
function Kg(n, a, r, u) {
  typeof r != "string" && r !== n.Fragment && n.passNode && (a.node = u);
}
function Sf(n, a) {
  if (a.length > 0) {
    const r = a.length > 1 ? a : a[0];
    r && (n.children = r);
  }
}
function rE(n, a, r) {
  return u;
  function u(o, c, h, d) {
    const m = Array.isArray(h.children) ? r : a;
    return d ? m(c, h, d) : m(c, h);
  }
}
function uE(n, a) {
  return r;
  function r(u, o, c, h) {
    const d = Array.isArray(c.children),
      y = vf(u);
    return a(
      o,
      c,
      h,
      d,
      {
        columnNumber: y ? y.column - 1 : void 0,
        fileName: n,
        lineNumber: y ? y.line : void 0,
      },
      void 0
    );
  }
}
function oE(n, a) {
  const r = {};
  let u, o;
  for (o in a.properties)
    if (o !== "children" && xf.call(a.properties, o)) {
      const c = cE(n, o, a.properties[o]);
      if (c) {
        const [h, d] = c;
        n.tableCellAlignToStyle &&
        h === "align" &&
        typeof d == "string" &&
        P2.has(a.tagName)
          ? (u = d)
          : (r[h] = d);
      }
    }
  if (u) {
    const c = r.style || (r.style = {});
    c[n.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = u;
  }
  return r;
}
function sE(n, a) {
  const r = {};
  for (const u of a.attributes)
    if (u.type === "mdxJsxExpressionAttribute")
      if (u.data && u.data.estree && n.evaluater) {
        const c = u.data.estree.body[0];
        c.type;
        const h = c.expression;
        h.type;
        const d = h.properties[0];
        d.type, Object.assign(r, n.evaluater.evaluateExpression(d.argument));
      } else Zi(n, a.position);
    else {
      const o = u.name;
      let c;
      if (u.value && typeof u.value == "object")
        if (u.value.data && u.value.data.estree && n.evaluater) {
          const d = u.value.data.estree.body[0];
          d.type, (c = n.evaluater.evaluateExpression(d.expression));
        } else Zi(n, a.position);
      else c = u.value === null ? !0 : u.value;
      r[o] = c;
    }
  return r;
}
function Ef(n, a) {
  const r = [];
  let u = -1;
  const o = n.passKeys ? new Map() : J2;
  for (; ++u < a.children.length; ) {
    const c = a.children[u];
    let h;
    if (n.passKeys) {
      const y =
        c.type === "element"
          ? c.tagName
          : c.type === "mdxJsxFlowElement" || c.type === "mdxJsxTextElement"
          ? c.name
          : void 0;
      if (y) {
        const m = o.get(y) || 0;
        (h = y + "-" + m), o.set(y, m + 1);
      }
    }
    const d = Fg(n, c, h);
    d !== void 0 && r.push(d);
  }
  return r;
}
function cE(n, a, r) {
  const u = U2(n.schema, a);
  if (!(r == null || (typeof r == "number" && Number.isNaN(r)))) {
    if (
      (Array.isArray(r) && (r = u.commaSeparated ? A2(r) : Y2(r)),
      u.property === "style")
    ) {
      let o = typeof r == "object" ? r : fE(n, String(r));
      return n.stylePropertyNameCase === "css" && (o = hE(o)), ["style", o];
    }
    return [
      n.elementAttributeNameCase === "react" && u.space
        ? k2[u.property] || u.property
        : u.attribute,
      r,
    ];
  }
}
function fE(n, a) {
  try {
    return F2(a, { reactCompat: !0 });
  } catch (r) {
    if (n.ignoreInvalidStyle) return {};
    const u = r,
      o = new bt("Cannot parse `style` attribute", {
        ancestors: n.ancestors,
        cause: u,
        ruleId: "style",
        source: "hast-util-to-jsx-runtime",
      });
    throw (
      ((o.file = n.filePath || void 0),
      (o.url = Zg + "#cannot-parse-style-attribute"),
      o)
    );
  }
}
function Jg(n, a, r) {
  let u;
  if (!r) u = { type: "Literal", value: a };
  else if (a.includes(".")) {
    const o = a.split(".");
    let c = -1,
      h;
    for (; ++c < o.length; ) {
      const d = cy(o[c])
        ? { type: "Identifier", name: o[c] }
        : { type: "Literal", value: o[c] };
      h = h
        ? {
            type: "MemberExpression",
            object: h,
            property: d,
            computed: !!(c && d.type === "Literal"),
            optional: !1,
          }
        : d;
    }
    u = h;
  } else
    u =
      cy(a) && !/^[a-z]/.test(a)
        ? { type: "Identifier", name: a }
        : { type: "Literal", value: a };
  if (u.type === "Literal") {
    const o = u.value;
    return xf.call(n.components, o) ? n.components[o] : o;
  }
  if (n.evaluater) return n.evaluater.evaluateExpression(u);
  Zi(n);
}
function Zi(n, a) {
  const r = new bt("Cannot handle MDX estrees without `createEvaluater`", {
    ancestors: n.ancestors,
    place: a,
    ruleId: "mdx-estree",
    source: "hast-util-to-jsx-runtime",
  });
  throw (
    ((r.file = n.filePath || void 0),
    (r.url = Zg + "#cannot-handle-mdx-estrees-without-createevaluater"),
    r)
  );
}
function hE(n) {
  const a = {};
  let r;
  for (r in n) xf.call(n, r) && (a[dE(r)] = n[r]);
  return a;
}
function dE(n) {
  let a = n.replace(I2, mE);
  return a.slice(0, 3) === "ms-" && (a = "-" + a), a;
}
function mE(n) {
  return "-" + n.toLowerCase();
}
const wc = {
    action: ["form"],
    cite: ["blockquote", "del", "ins", "q"],
    data: ["object"],
    formAction: ["button", "input"],
    href: ["a", "area", "base", "link"],
    icon: ["menuitem"],
    itemId: null,
    manifest: ["html"],
    ping: ["a", "area"],
    poster: ["video"],
    src: [
      "audio",
      "embed",
      "iframe",
      "img",
      "input",
      "script",
      "source",
      "track",
      "video",
    ],
  },
  pE = {};
function yE(n, a) {
  const r = pE,
    u = typeof r.includeImageAlt == "boolean" ? r.includeImageAlt : !0,
    o = typeof r.includeHtml == "boolean" ? r.includeHtml : !0;
  return Ig(n, u, o);
}
function Ig(n, a, r) {
  if (gE(n)) {
    if ("value" in n) return n.type === "html" && !r ? "" : n.value;
    if (a && "alt" in n && n.alt) return n.alt;
    if ("children" in n) return xy(n.children, a, r);
  }
  return Array.isArray(n) ? xy(n, a, r) : "";
}
function xy(n, a, r) {
  const u = [];
  let o = -1;
  for (; ++o < n.length; ) u[o] = Ig(n[o], a, r);
  return u.join("");
}
function gE(n) {
  return !!(n && typeof n == "object");
}
const Sy = document.createElement("i");
function wf(n) {
  const a = "&" + n + ";";
  Sy.innerHTML = a;
  const r = Sy.textContent;
  return (r.charCodeAt(r.length - 1) === 59 && n !== "semi") || r === a
    ? !1
    : r;
}
function bn(n, a, r, u) {
  const o = n.length;
  let c = 0,
    h;
  if (
    (a < 0 ? (a = -a > o ? 0 : o + a) : (a = a > o ? o : a),
    (r = r > 0 ? r : 0),
    u.length < 1e4)
  )
    (h = Array.from(u)), h.unshift(a, r), n.splice(...h);
  else
    for (r && n.splice(a, r); c < u.length; )
      (h = u.slice(c, c + 1e4)),
        h.unshift(a, 0),
        n.splice(...h),
        (c += 1e4),
        (a += 1e4);
}
function nn(n, a) {
  return n.length > 0 ? (bn(n, n.length, 0, a), n) : a;
}
const Ey = {}.hasOwnProperty;
function bE(n) {
  const a = {};
  let r = -1;
  for (; ++r < n.length; ) vE(a, n[r]);
  return a;
}
function vE(n, a) {
  let r;
  for (r in a) {
    const o = (Ey.call(n, r) ? n[r] : void 0) || (n[r] = {}),
      c = a[r];
    let h;
    if (c)
      for (h in c) {
        Ey.call(o, h) || (o[h] = []);
        const d = c[h];
        xE(o[h], Array.isArray(d) ? d : d ? [d] : []);
      }
  }
}
function xE(n, a) {
  let r = -1;
  const u = [];
  for (; ++r < a.length; ) (a[r].add === "after" ? n : u).push(a[r]);
  bn(n, 0, 0, u);
}
function $g(n, a) {
  const r = Number.parseInt(n, a);
  return r < 9 ||
    r === 11 ||
    (r > 13 && r < 32) ||
    (r > 126 && r < 160) ||
    (r > 55295 && r < 57344) ||
    (r > 64975 && r < 65008) ||
    (r & 65535) === 65535 ||
    (r & 65535) === 65534 ||
    r > 1114111
    ? "�"
    : String.fromCodePoint(r);
}
function Ma(n) {
  return n
    .replace(/[\t\n\r ]+/g, " ")
    .replace(/^ | $/g, "")
    .toLowerCase()
    .toUpperCase();
}
const gn = bl(/[A-Za-z]/),
  Gt = bl(/[\dA-Za-z]/),
  SE = bl(/[#-'*+\--9=?A-Z^-~]/);
function Jc(n) {
  return n !== null && (n < 32 || n === 127);
}
const Ic = bl(/\d/),
  EE = bl(/[\dA-Fa-f]/),
  wE = bl(/[!-/:-@[-`{-~]/);
function ye(n) {
  return n !== null && n < -2;
}
function Mt(n) {
  return n !== null && (n < 0 || n === 32);
}
function ke(n) {
  return n === -2 || n === -1 || n === 32;
}
const TE = bl(new RegExp("\\p{P}|\\p{S}", "u")),
  AE = bl(/\s/);
function bl(n) {
  return a;
  function a(r) {
    return r !== null && r > -1 && n.test(String.fromCharCode(r));
  }
}
function qa(n) {
  const a = [];
  let r = -1,
    u = 0,
    o = 0;
  for (; ++r < n.length; ) {
    const c = n.charCodeAt(r);
    let h = "";
    if (c === 37 && Gt(n.charCodeAt(r + 1)) && Gt(n.charCodeAt(r + 2))) o = 2;
    else if (c < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(c)) ||
        (h = String.fromCharCode(c));
    else if (c > 55295 && c < 57344) {
      const d = n.charCodeAt(r + 1);
      c < 56320 && d > 56319 && d < 57344
        ? ((h = String.fromCharCode(c, d)), (o = 1))
        : (h = "�");
    } else h = String.fromCharCode(c);
    h &&
      (a.push(n.slice(u, r), encodeURIComponent(h)), (u = r + o + 1), (h = "")),
      o && ((r += o), (o = 0));
  }
  return a.join("") + n.slice(u);
}
function Qe(n, a, r, u) {
  const o = u ? u - 1 : Number.POSITIVE_INFINITY;
  let c = 0;
  return h;
  function h(y) {
    return ke(y) ? (n.enter(r), d(y)) : a(y);
  }
  function d(y) {
    return ke(y) && c++ < o ? (n.consume(y), d) : (n.exit(r), a(y));
  }
}
const CE = { tokenize: zE };
function zE(n) {
  const a = n.attempt(this.parser.constructs.contentInitial, u, o);
  let r;
  return a;
  function u(d) {
    if (d === null) {
      n.consume(d);
      return;
    }
    return (
      n.enter("lineEnding"),
      n.consume(d),
      n.exit("lineEnding"),
      Qe(n, a, "linePrefix")
    );
  }
  function o(d) {
    return n.enter("paragraph"), c(d);
  }
  function c(d) {
    const y = n.enter("chunkText", { contentType: "text", previous: r });
    return r && (r.next = y), (r = y), h(d);
  }
  function h(d) {
    if (d === null) {
      n.exit("chunkText"), n.exit("paragraph"), n.consume(d);
      return;
    }
    return ye(d) ? (n.consume(d), n.exit("chunkText"), c) : (n.consume(d), h);
  }
}
const OE = { tokenize: RE },
  wy = { tokenize: NE };
function RE(n) {
  const a = this,
    r = [];
  let u = 0,
    o,
    c,
    h;
  return d;
  function d(k) {
    if (u < r.length) {
      const ee = r[u];
      return (a.containerState = ee[1]), n.attempt(ee[0].continuation, y, m)(k);
    }
    return m(k);
  }
  function y(k) {
    if ((u++, a.containerState._closeFlow)) {
      (a.containerState._closeFlow = void 0), o && Z();
      const ee = a.events.length;
      let ae = ee,
        Y;
      for (; ae--; )
        if (
          a.events[ae][0] === "exit" &&
          a.events[ae][1].type === "chunkFlow"
        ) {
          Y = a.events[ae][1].end;
          break;
        }
      _(u);
      let I = ee;
      for (; I < a.events.length; ) (a.events[I][1].end = { ...Y }), I++;
      return (
        bn(a.events, ae + 1, 0, a.events.slice(ee)), (a.events.length = I), m(k)
      );
    }
    return d(k);
  }
  function m(k) {
    if (u === r.length) {
      if (!o) return S(k);
      if (o.currentConstruct && o.currentConstruct.concrete) return T(k);
      a.interrupt = !!(o.currentConstruct && !o._gfmTableDynamicInterruptHack);
    }
    return (a.containerState = {}), n.check(wy, p, b)(k);
  }
  function p(k) {
    return o && Z(), _(u), S(k);
  }
  function b(k) {
    return (
      (a.parser.lazy[a.now().line] = u !== r.length), (h = a.now().offset), T(k)
    );
  }
  function S(k) {
    return (a.containerState = {}), n.attempt(wy, v, T)(k);
  }
  function v(k) {
    return u++, r.push([a.currentConstruct, a.containerState]), S(k);
  }
  function T(k) {
    if (k === null) {
      o && Z(), _(0), n.consume(k);
      return;
    }
    return (
      (o = o || a.parser.flow(a.now())),
      n.enter("chunkFlow", { _tokenizer: o, contentType: "flow", previous: c }),
      O(k)
    );
  }
  function O(k) {
    if (k === null) {
      N(n.exit("chunkFlow"), !0), _(0), n.consume(k);
      return;
    }
    return ye(k)
      ? (n.consume(k),
        N(n.exit("chunkFlow")),
        (u = 0),
        (a.interrupt = void 0),
        d)
      : (n.consume(k), O);
  }
  function N(k, ee) {
    const ae = a.sliceStream(k);
    if (
      (ee && ae.push(null),
      (k.previous = c),
      c && (c.next = k),
      (c = k),
      o.defineSkip(k.start),
      o.write(ae),
      a.parser.lazy[k.start.line])
    ) {
      let Y = o.events.length;
      for (; Y--; )
        if (
          o.events[Y][1].start.offset < h &&
          (!o.events[Y][1].end || o.events[Y][1].end.offset > h)
        )
          return;
      const I = a.events.length;
      let de = I,
        ce,
        me;
      for (; de--; )
        if (
          a.events[de][0] === "exit" &&
          a.events[de][1].type === "chunkFlow"
        ) {
          if (ce) {
            me = a.events[de][1].end;
            break;
          }
          ce = !0;
        }
      for (_(u), Y = I; Y < a.events.length; )
        (a.events[Y][1].end = { ...me }), Y++;
      bn(a.events, de + 1, 0, a.events.slice(I)), (a.events.length = Y);
    }
  }
  function _(k) {
    let ee = r.length;
    for (; ee-- > k; ) {
      const ae = r[ee];
      (a.containerState = ae[1]), ae[0].exit.call(a, n);
    }
    r.length = k;
  }
  function Z() {
    o.write([null]),
      (c = void 0),
      (o = void 0),
      (a.containerState._closeFlow = void 0);
  }
}
function NE(n, a, r) {
  return Qe(
    n,
    n.attempt(this.parser.constructs.document, a, r),
    "linePrefix",
    this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
  );
}
function Ty(n) {
  if (n === null || Mt(n) || AE(n)) return 1;
  if (TE(n)) return 2;
}
function Tf(n, a, r) {
  const u = [];
  let o = -1;
  for (; ++o < n.length; ) {
    const c = n[o].resolveAll;
    c && !u.includes(c) && ((a = c(a, r)), u.push(c));
  }
  return a;
}
const $c = { name: "attention", resolveAll: _E, tokenize: DE };
function _E(n, a) {
  let r = -1,
    u,
    o,
    c,
    h,
    d,
    y,
    m,
    p;
  for (; ++r < n.length; )
    if (
      n[r][0] === "enter" &&
      n[r][1].type === "attentionSequence" &&
      n[r][1]._close
    ) {
      for (u = r; u--; )
        if (
          n[u][0] === "exit" &&
          n[u][1].type === "attentionSequence" &&
          n[u][1]._open &&
          a.sliceSerialize(n[u][1]).charCodeAt(0) ===
            a.sliceSerialize(n[r][1]).charCodeAt(0)
        ) {
          if (
            (n[u][1]._close || n[r][1]._open) &&
            (n[r][1].end.offset - n[r][1].start.offset) % 3 &&
            !(
              (n[u][1].end.offset -
                n[u][1].start.offset +
                n[r][1].end.offset -
                n[r][1].start.offset) %
              3
            )
          )
            continue;
          y =
            n[u][1].end.offset - n[u][1].start.offset > 1 &&
            n[r][1].end.offset - n[r][1].start.offset > 1
              ? 2
              : 1;
          const b = { ...n[u][1].end },
            S = { ...n[r][1].start };
          Ay(b, -y),
            Ay(S, y),
            (h = {
              type: y > 1 ? "strongSequence" : "emphasisSequence",
              start: b,
              end: { ...n[u][1].end },
            }),
            (d = {
              type: y > 1 ? "strongSequence" : "emphasisSequence",
              start: { ...n[r][1].start },
              end: S,
            }),
            (c = {
              type: y > 1 ? "strongText" : "emphasisText",
              start: { ...n[u][1].end },
              end: { ...n[r][1].start },
            }),
            (o = {
              type: y > 1 ? "strong" : "emphasis",
              start: { ...h.start },
              end: { ...d.end },
            }),
            (n[u][1].end = { ...h.start }),
            (n[r][1].start = { ...d.end }),
            (m = []),
            n[u][1].end.offset - n[u][1].start.offset &&
              (m = nn(m, [
                ["enter", n[u][1], a],
                ["exit", n[u][1], a],
              ])),
            (m = nn(m, [
              ["enter", o, a],
              ["enter", h, a],
              ["exit", h, a],
              ["enter", c, a],
            ])),
            (m = nn(
              m,
              Tf(a.parser.constructs.insideSpan.null, n.slice(u + 1, r), a)
            )),
            (m = nn(m, [
              ["exit", c, a],
              ["enter", d, a],
              ["exit", d, a],
              ["exit", o, a],
            ])),
            n[r][1].end.offset - n[r][1].start.offset
              ? ((p = 2),
                (m = nn(m, [
                  ["enter", n[r][1], a],
                  ["exit", n[r][1], a],
                ])))
              : (p = 0),
            bn(n, u - 1, r - u + 3, m),
            (r = u + m.length - p - 2);
          break;
        }
    }
  for (r = -1; ++r < n.length; )
    n[r][1].type === "attentionSequence" && (n[r][1].type = "data");
  return n;
}
function DE(n, a) {
  const r = this.parser.constructs.attentionMarkers.null,
    u = this.previous,
    o = Ty(u);
  let c;
  return h;
  function h(y) {
    return (c = y), n.enter("attentionSequence"), d(y);
  }
  function d(y) {
    if (y === c) return n.consume(y), d;
    const m = n.exit("attentionSequence"),
      p = Ty(y),
      b = !p || (p === 2 && o) || r.includes(y),
      S = !o || (o === 2 && p) || r.includes(u);
    return (
      (m._open = !!(c === 42 ? b : b && (o || !S))),
      (m._close = !!(c === 42 ? S : S && (p || !b))),
      a(y)
    );
  }
}
function Ay(n, a) {
  (n.column += a), (n.offset += a), (n._bufferIndex += a);
}
const ME = { name: "autolink", tokenize: kE };
function kE(n, a, r) {
  let u = 0;
  return o;
  function o(v) {
    return (
      n.enter("autolink"),
      n.enter("autolinkMarker"),
      n.consume(v),
      n.exit("autolinkMarker"),
      n.enter("autolinkProtocol"),
      c
    );
  }
  function c(v) {
    return gn(v) ? (n.consume(v), h) : v === 64 ? r(v) : m(v);
  }
  function h(v) {
    return v === 43 || v === 45 || v === 46 || Gt(v) ? ((u = 1), d(v)) : m(v);
  }
  function d(v) {
    return v === 58
      ? (n.consume(v), (u = 0), y)
      : (v === 43 || v === 45 || v === 46 || Gt(v)) && u++ < 32
      ? (n.consume(v), d)
      : ((u = 0), m(v));
  }
  function y(v) {
    return v === 62
      ? (n.exit("autolinkProtocol"),
        n.enter("autolinkMarker"),
        n.consume(v),
        n.exit("autolinkMarker"),
        n.exit("autolink"),
        a)
      : v === null || v === 32 || v === 60 || Jc(v)
      ? r(v)
      : (n.consume(v), y);
  }
  function m(v) {
    return v === 64 ? (n.consume(v), p) : SE(v) ? (n.consume(v), m) : r(v);
  }
  function p(v) {
    return Gt(v) ? b(v) : r(v);
  }
  function b(v) {
    return v === 46
      ? (n.consume(v), (u = 0), p)
      : v === 62
      ? ((n.exit("autolinkProtocol").type = "autolinkEmail"),
        n.enter("autolinkMarker"),
        n.consume(v),
        n.exit("autolinkMarker"),
        n.exit("autolink"),
        a)
      : S(v);
  }
  function S(v) {
    if ((v === 45 || Gt(v)) && u++ < 63) {
      const T = v === 45 ? S : b;
      return n.consume(v), T;
    }
    return r(v);
  }
}
const Qu = { partial: !0, tokenize: jE };
function jE(n, a, r) {
  return u;
  function u(c) {
    return ke(c) ? Qe(n, o, "linePrefix")(c) : o(c);
  }
  function o(c) {
    return c === null || ye(c) ? a(c) : r(c);
  }
}
const Pg = {
  continuation: { tokenize: UE },
  exit: BE,
  name: "blockQuote",
  tokenize: LE,
};
function LE(n, a, r) {
  const u = this;
  return o;
  function o(h) {
    if (h === 62) {
      const d = u.containerState;
      return (
        d.open || (n.enter("blockQuote", { _container: !0 }), (d.open = !0)),
        n.enter("blockQuotePrefix"),
        n.enter("blockQuoteMarker"),
        n.consume(h),
        n.exit("blockQuoteMarker"),
        c
      );
    }
    return r(h);
  }
  function c(h) {
    return ke(h)
      ? (n.enter("blockQuotePrefixWhitespace"),
        n.consume(h),
        n.exit("blockQuotePrefixWhitespace"),
        n.exit("blockQuotePrefix"),
        a)
      : (n.exit("blockQuotePrefix"), a(h));
  }
}
function UE(n, a, r) {
  const u = this;
  return o;
  function o(h) {
    return ke(h)
      ? Qe(
          n,
          c,
          "linePrefix",
          u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
        )(h)
      : c(h);
  }
  function c(h) {
    return n.attempt(Pg, a, r)(h);
  }
}
function BE(n) {
  n.exit("blockQuote");
}
const Wg = { name: "characterEscape", tokenize: HE };
function HE(n, a, r) {
  return u;
  function u(c) {
    return (
      n.enter("characterEscape"),
      n.enter("escapeMarker"),
      n.consume(c),
      n.exit("escapeMarker"),
      o
    );
  }
  function o(c) {
    return wE(c)
      ? (n.enter("characterEscapeValue"),
        n.consume(c),
        n.exit("characterEscapeValue"),
        n.exit("characterEscape"),
        a)
      : r(c);
  }
}
const e0 = { name: "characterReference", tokenize: qE };
function qE(n, a, r) {
  const u = this;
  let o = 0,
    c,
    h;
  return d;
  function d(b) {
    return (
      n.enter("characterReference"),
      n.enter("characterReferenceMarker"),
      n.consume(b),
      n.exit("characterReferenceMarker"),
      y
    );
  }
  function y(b) {
    return b === 35
      ? (n.enter("characterReferenceMarkerNumeric"),
        n.consume(b),
        n.exit("characterReferenceMarkerNumeric"),
        m)
      : (n.enter("characterReferenceValue"), (c = 31), (h = Gt), p(b));
  }
  function m(b) {
    return b === 88 || b === 120
      ? (n.enter("characterReferenceMarkerHexadecimal"),
        n.consume(b),
        n.exit("characterReferenceMarkerHexadecimal"),
        n.enter("characterReferenceValue"),
        (c = 6),
        (h = EE),
        p)
      : (n.enter("characterReferenceValue"), (c = 7), (h = Ic), p(b));
  }
  function p(b) {
    if (b === 59 && o) {
      const S = n.exit("characterReferenceValue");
      return h === Gt && !wf(u.sliceSerialize(S))
        ? r(b)
        : (n.enter("characterReferenceMarker"),
          n.consume(b),
          n.exit("characterReferenceMarker"),
          n.exit("characterReference"),
          a);
    }
    return h(b) && o++ < c ? (n.consume(b), p) : r(b);
  }
}
const Cy = { partial: !0, tokenize: VE },
  zy = { concrete: !0, name: "codeFenced", tokenize: YE };
function YE(n, a, r) {
  const u = this,
    o = { partial: !0, tokenize: ae };
  let c = 0,
    h = 0,
    d;
  return y;
  function y(Y) {
    return m(Y);
  }
  function m(Y) {
    const I = u.events[u.events.length - 1];
    return (
      (c =
        I && I[1].type === "linePrefix"
          ? I[2].sliceSerialize(I[1], !0).length
          : 0),
      (d = Y),
      n.enter("codeFenced"),
      n.enter("codeFencedFence"),
      n.enter("codeFencedFenceSequence"),
      p(Y)
    );
  }
  function p(Y) {
    return Y === d
      ? (h++, n.consume(Y), p)
      : h < 3
      ? r(Y)
      : (n.exit("codeFencedFenceSequence"),
        ke(Y) ? Qe(n, b, "whitespace")(Y) : b(Y));
  }
  function b(Y) {
    return Y === null || ye(Y)
      ? (n.exit("codeFencedFence"), u.interrupt ? a(Y) : n.check(Cy, O, ee)(Y))
      : (n.enter("codeFencedFenceInfo"),
        n.enter("chunkString", { contentType: "string" }),
        S(Y));
  }
  function S(Y) {
    return Y === null || ye(Y)
      ? (n.exit("chunkString"), n.exit("codeFencedFenceInfo"), b(Y))
      : ke(Y)
      ? (n.exit("chunkString"),
        n.exit("codeFencedFenceInfo"),
        Qe(n, v, "whitespace")(Y))
      : Y === 96 && Y === d
      ? r(Y)
      : (n.consume(Y), S);
  }
  function v(Y) {
    return Y === null || ye(Y)
      ? b(Y)
      : (n.enter("codeFencedFenceMeta"),
        n.enter("chunkString", { contentType: "string" }),
        T(Y));
  }
  function T(Y) {
    return Y === null || ye(Y)
      ? (n.exit("chunkString"), n.exit("codeFencedFenceMeta"), b(Y))
      : Y === 96 && Y === d
      ? r(Y)
      : (n.consume(Y), T);
  }
  function O(Y) {
    return n.attempt(o, ee, N)(Y);
  }
  function N(Y) {
    return n.enter("lineEnding"), n.consume(Y), n.exit("lineEnding"), _;
  }
  function _(Y) {
    return c > 0 && ke(Y) ? Qe(n, Z, "linePrefix", c + 1)(Y) : Z(Y);
  }
  function Z(Y) {
    return Y === null || ye(Y)
      ? n.check(Cy, O, ee)(Y)
      : (n.enter("codeFlowValue"), k(Y));
  }
  function k(Y) {
    return Y === null || ye(Y)
      ? (n.exit("codeFlowValue"), Z(Y))
      : (n.consume(Y), k);
  }
  function ee(Y) {
    return n.exit("codeFenced"), a(Y);
  }
  function ae(Y, I, de) {
    let ce = 0;
    return me;
    function me($) {
      return Y.enter("lineEnding"), Y.consume($), Y.exit("lineEnding"), ne;
    }
    function ne($) {
      return (
        Y.enter("codeFencedFence"),
        ke($)
          ? Qe(
              Y,
              te,
              "linePrefix",
              u.parser.constructs.disable.null.includes("codeIndented")
                ? void 0
                : 4
            )($)
          : te($)
      );
    }
    function te($) {
      return $ === d ? (Y.enter("codeFencedFenceSequence"), we($)) : de($);
    }
    function we($) {
      return $ === d
        ? (ce++, Y.consume($), we)
        : ce >= h
        ? (Y.exit("codeFencedFenceSequence"),
          ke($) ? Qe(Y, ie, "whitespace")($) : ie($))
        : de($);
    }
    function ie($) {
      return $ === null || ye($) ? (Y.exit("codeFencedFence"), I($)) : de($);
    }
  }
}
function VE(n, a, r) {
  const u = this;
  return o;
  function o(h) {
    return h === null
      ? r(h)
      : (n.enter("lineEnding"), n.consume(h), n.exit("lineEnding"), c);
  }
  function c(h) {
    return u.parser.lazy[u.now().line] ? r(h) : a(h);
  }
}
const Tc = { name: "codeIndented", tokenize: GE },
  XE = { partial: !0, tokenize: QE };
function GE(n, a, r) {
  const u = this;
  return o;
  function o(m) {
    return n.enter("codeIndented"), Qe(n, c, "linePrefix", 5)(m);
  }
  function c(m) {
    const p = u.events[u.events.length - 1];
    return p &&
      p[1].type === "linePrefix" &&
      p[2].sliceSerialize(p[1], !0).length >= 4
      ? h(m)
      : r(m);
  }
  function h(m) {
    return m === null
      ? y(m)
      : ye(m)
      ? n.attempt(XE, h, y)(m)
      : (n.enter("codeFlowValue"), d(m));
  }
  function d(m) {
    return m === null || ye(m)
      ? (n.exit("codeFlowValue"), h(m))
      : (n.consume(m), d);
  }
  function y(m) {
    return n.exit("codeIndented"), a(m);
  }
}
function QE(n, a, r) {
  const u = this;
  return o;
  function o(h) {
    return u.parser.lazy[u.now().line]
      ? r(h)
      : ye(h)
      ? (n.enter("lineEnding"), n.consume(h), n.exit("lineEnding"), o)
      : Qe(n, c, "linePrefix", 5)(h);
  }
  function c(h) {
    const d = u.events[u.events.length - 1];
    return d &&
      d[1].type === "linePrefix" &&
      d[2].sliceSerialize(d[1], !0).length >= 4
      ? a(h)
      : ye(h)
      ? o(h)
      : r(h);
  }
}
const ZE = { name: "codeText", previous: KE, resolve: FE, tokenize: JE };
function FE(n) {
  let a = n.length - 4,
    r = 3,
    u,
    o;
  if (
    (n[r][1].type === "lineEnding" || n[r][1].type === "space") &&
    (n[a][1].type === "lineEnding" || n[a][1].type === "space")
  ) {
    for (u = r; ++u < a; )
      if (n[u][1].type === "codeTextData") {
        (n[r][1].type = "codeTextPadding"),
          (n[a][1].type = "codeTextPadding"),
          (r += 2),
          (a -= 2);
        break;
      }
  }
  for (u = r - 1, a++; ++u <= a; )
    o === void 0
      ? u !== a && n[u][1].type !== "lineEnding" && (o = u)
      : (u === a || n[u][1].type === "lineEnding") &&
        ((n[o][1].type = "codeTextData"),
        u !== o + 2 &&
          ((n[o][1].end = n[u - 1][1].end),
          n.splice(o + 2, u - o - 2),
          (a -= u - o - 2),
          (u = o + 2)),
        (o = void 0));
  return n;
}
function KE(n) {
  return (
    n !== 96 ||
    this.events[this.events.length - 1][1].type === "characterEscape"
  );
}
function JE(n, a, r) {
  let u = 0,
    o,
    c;
  return h;
  function h(b) {
    return n.enter("codeText"), n.enter("codeTextSequence"), d(b);
  }
  function d(b) {
    return b === 96
      ? (n.consume(b), u++, d)
      : (n.exit("codeTextSequence"), y(b));
  }
  function y(b) {
    return b === null
      ? r(b)
      : b === 32
      ? (n.enter("space"), n.consume(b), n.exit("space"), y)
      : b === 96
      ? ((c = n.enter("codeTextSequence")), (o = 0), p(b))
      : ye(b)
      ? (n.enter("lineEnding"), n.consume(b), n.exit("lineEnding"), y)
      : (n.enter("codeTextData"), m(b));
  }
  function m(b) {
    return b === null || b === 32 || b === 96 || ye(b)
      ? (n.exit("codeTextData"), y(b))
      : (n.consume(b), m);
  }
  function p(b) {
    return b === 96
      ? (n.consume(b), o++, p)
      : o === u
      ? (n.exit("codeTextSequence"), n.exit("codeText"), a(b))
      : ((c.type = "codeTextData"), m(b));
  }
}
class IE {
  constructor(a) {
    (this.left = a ? [...a] : []), (this.right = []);
  }
  get(a) {
    if (a < 0 || a >= this.left.length + this.right.length)
      throw new RangeError(
        "Cannot access index `" +
          a +
          "` in a splice buffer of size `" +
          (this.left.length + this.right.length) +
          "`"
      );
    return a < this.left.length
      ? this.left[a]
      : this.right[this.right.length - a + this.left.length - 1];
  }
  get length() {
    return this.left.length + this.right.length;
  }
  shift() {
    return this.setCursor(0), this.right.pop();
  }
  slice(a, r) {
    const u = r ?? Number.POSITIVE_INFINITY;
    return u < this.left.length
      ? this.left.slice(a, u)
      : a > this.left.length
      ? this.right
          .slice(
            this.right.length - u + this.left.length,
            this.right.length - a + this.left.length
          )
          .reverse()
      : this.left
          .slice(a)
          .concat(
            this.right.slice(this.right.length - u + this.left.length).reverse()
          );
  }
  splice(a, r, u) {
    const o = r || 0;
    this.setCursor(Math.trunc(a));
    const c = this.right.splice(
      this.right.length - o,
      Number.POSITIVE_INFINITY
    );
    return u && qi(this.left, u), c.reverse();
  }
  pop() {
    return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
  }
  push(a) {
    this.setCursor(Number.POSITIVE_INFINITY), this.left.push(a);
  }
  pushMany(a) {
    this.setCursor(Number.POSITIVE_INFINITY), qi(this.left, a);
  }
  unshift(a) {
    this.setCursor(0), this.right.push(a);
  }
  unshiftMany(a) {
    this.setCursor(0), qi(this.right, a.reverse());
  }
  setCursor(a) {
    if (
      !(
        a === this.left.length ||
        (a > this.left.length && this.right.length === 0) ||
        (a < 0 && this.left.length === 0)
      )
    )
      if (a < this.left.length) {
        const r = this.left.splice(a, Number.POSITIVE_INFINITY);
        qi(this.right, r.reverse());
      } else {
        const r = this.right.splice(
          this.left.length + this.right.length - a,
          Number.POSITIVE_INFINITY
        );
        qi(this.left, r.reverse());
      }
  }
}
function qi(n, a) {
  let r = 0;
  if (a.length < 1e4) n.push(...a);
  else for (; r < a.length; ) n.push(...a.slice(r, r + 1e4)), (r += 1e4);
}
function t0(n) {
  const a = {};
  let r = -1,
    u,
    o,
    c,
    h,
    d,
    y,
    m;
  const p = new IE(n);
  for (; ++r < p.length; ) {
    for (; r in a; ) r = a[r];
    if (
      ((u = p.get(r)),
      r &&
        u[1].type === "chunkFlow" &&
        p.get(r - 1)[1].type === "listItemPrefix" &&
        ((y = u[1]._tokenizer.events),
        (c = 0),
        c < y.length && y[c][1].type === "lineEndingBlank" && (c += 2),
        c < y.length && y[c][1].type === "content"))
    )
      for (; ++c < y.length && y[c][1].type !== "content"; )
        y[c][1].type === "chunkText" &&
          ((y[c][1]._isInFirstContentOfListItem = !0), c++);
    if (u[0] === "enter")
      u[1].contentType && (Object.assign(a, $E(p, r)), (r = a[r]), (m = !0));
    else if (u[1]._container) {
      for (c = r, o = void 0; c--; )
        if (
          ((h = p.get(c)),
          h[1].type === "lineEnding" || h[1].type === "lineEndingBlank")
        )
          h[0] === "enter" &&
            (o && (p.get(o)[1].type = "lineEndingBlank"),
            (h[1].type = "lineEnding"),
            (o = c));
        else if (
          !(h[1].type === "linePrefix" || h[1].type === "listItemIndent")
        )
          break;
      o &&
        ((u[1].end = { ...p.get(o)[1].start }),
        (d = p.slice(o, r)),
        d.unshift(u),
        p.splice(o, r - o + 1, d));
    }
  }
  return bn(n, 0, Number.POSITIVE_INFINITY, p.slice(0)), !m;
}
function $E(n, a) {
  const r = n.get(a)[1],
    u = n.get(a)[2];
  let o = a - 1;
  const c = [];
  let h = r._tokenizer;
  h ||
    ((h = u.parser[r.contentType](r.start)),
    r._contentTypeTextTrailing && (h._contentTypeTextTrailing = !0));
  const d = h.events,
    y = [],
    m = {};
  let p,
    b,
    S = -1,
    v = r,
    T = 0,
    O = 0;
  const N = [O];
  for (; v; ) {
    for (; n.get(++o)[1] !== v; );
    c.push(o),
      v._tokenizer ||
        ((p = u.sliceStream(v)),
        v.next || p.push(null),
        b && h.defineSkip(v.start),
        v._isInFirstContentOfListItem &&
          (h._gfmTasklistFirstContentOfListItem = !0),
        h.write(p),
        v._isInFirstContentOfListItem &&
          (h._gfmTasklistFirstContentOfListItem = void 0)),
      (b = v),
      (v = v.next);
  }
  for (v = r; ++S < d.length; )
    d[S][0] === "exit" &&
      d[S - 1][0] === "enter" &&
      d[S][1].type === d[S - 1][1].type &&
      d[S][1].start.line !== d[S][1].end.line &&
      ((O = S + 1),
      N.push(O),
      (v._tokenizer = void 0),
      (v.previous = void 0),
      (v = v.next));
  for (
    h.events = [],
      v ? ((v._tokenizer = void 0), (v.previous = void 0)) : N.pop(),
      S = N.length;
    S--;

  ) {
    const _ = d.slice(N[S], N[S + 1]),
      Z = c.pop();
    y.push([Z, Z + _.length - 1]), n.splice(Z, 2, _);
  }
  for (y.reverse(), S = -1; ++S < y.length; )
    (m[T + y[S][0]] = T + y[S][1]), (T += y[S][1] - y[S][0] - 1);
  return m;
}
const PE = { resolve: ew, tokenize: tw },
  WE = { partial: !0, tokenize: nw };
function ew(n) {
  return t0(n), n;
}
function tw(n, a) {
  let r;
  return u;
  function u(d) {
    return (
      n.enter("content"),
      (r = n.enter("chunkContent", { contentType: "content" })),
      o(d)
    );
  }
  function o(d) {
    return d === null ? c(d) : ye(d) ? n.check(WE, h, c)(d) : (n.consume(d), o);
  }
  function c(d) {
    return n.exit("chunkContent"), n.exit("content"), a(d);
  }
  function h(d) {
    return (
      n.consume(d),
      n.exit("chunkContent"),
      (r.next = n.enter("chunkContent", {
        contentType: "content",
        previous: r,
      })),
      (r = r.next),
      o
    );
  }
}
function nw(n, a, r) {
  const u = this;
  return o;
  function o(h) {
    return (
      n.exit("chunkContent"),
      n.enter("lineEnding"),
      n.consume(h),
      n.exit("lineEnding"),
      Qe(n, c, "linePrefix")
    );
  }
  function c(h) {
    if (h === null || ye(h)) return r(h);
    const d = u.events[u.events.length - 1];
    return !u.parser.constructs.disable.null.includes("codeIndented") &&
      d &&
      d[1].type === "linePrefix" &&
      d[2].sliceSerialize(d[1], !0).length >= 4
      ? a(h)
      : n.interrupt(u.parser.constructs.flow, r, a)(h);
  }
}
function n0(n, a, r, u, o, c, h, d, y) {
  const m = y || Number.POSITIVE_INFINITY;
  let p = 0;
  return b;
  function b(_) {
    return _ === 60
      ? (n.enter(u), n.enter(o), n.enter(c), n.consume(_), n.exit(c), S)
      : _ === null || _ === 32 || _ === 41 || Jc(_)
      ? r(_)
      : (n.enter(u),
        n.enter(h),
        n.enter(d),
        n.enter("chunkString", { contentType: "string" }),
        O(_));
  }
  function S(_) {
    return _ === 62
      ? (n.enter(c), n.consume(_), n.exit(c), n.exit(o), n.exit(u), a)
      : (n.enter(d), n.enter("chunkString", { contentType: "string" }), v(_));
  }
  function v(_) {
    return _ === 62
      ? (n.exit("chunkString"), n.exit(d), S(_))
      : _ === null || _ === 60 || ye(_)
      ? r(_)
      : (n.consume(_), _ === 92 ? T : v);
  }
  function T(_) {
    return _ === 60 || _ === 62 || _ === 92 ? (n.consume(_), v) : v(_);
  }
  function O(_) {
    return !p && (_ === null || _ === 41 || Mt(_))
      ? (n.exit("chunkString"), n.exit(d), n.exit(h), n.exit(u), a(_))
      : p < m && _ === 40
      ? (n.consume(_), p++, O)
      : _ === 41
      ? (n.consume(_), p--, O)
      : _ === null || _ === 32 || _ === 40 || Jc(_)
      ? r(_)
      : (n.consume(_), _ === 92 ? N : O);
  }
  function N(_) {
    return _ === 40 || _ === 41 || _ === 92 ? (n.consume(_), O) : O(_);
  }
}
function l0(n, a, r, u, o, c) {
  const h = this;
  let d = 0,
    y;
  return m;
  function m(v) {
    return n.enter(u), n.enter(o), n.consume(v), n.exit(o), n.enter(c), p;
  }
  function p(v) {
    return d > 999 ||
      v === null ||
      v === 91 ||
      (v === 93 && !y) ||
      (v === 94 && !d && "_hiddenFootnoteSupport" in h.parser.constructs)
      ? r(v)
      : v === 93
      ? (n.exit(c), n.enter(o), n.consume(v), n.exit(o), n.exit(u), a)
      : ye(v)
      ? (n.enter("lineEnding"), n.consume(v), n.exit("lineEnding"), p)
      : (n.enter("chunkString", { contentType: "string" }), b(v));
  }
  function b(v) {
    return v === null || v === 91 || v === 93 || ye(v) || d++ > 999
      ? (n.exit("chunkString"), p(v))
      : (n.consume(v), y || (y = !ke(v)), v === 92 ? S : b);
  }
  function S(v) {
    return v === 91 || v === 92 || v === 93 ? (n.consume(v), d++, b) : b(v);
  }
}
function a0(n, a, r, u, o, c) {
  let h;
  return d;
  function d(S) {
    return S === 34 || S === 39 || S === 40
      ? (n.enter(u),
        n.enter(o),
        n.consume(S),
        n.exit(o),
        (h = S === 40 ? 41 : S),
        y)
      : r(S);
  }
  function y(S) {
    return S === h
      ? (n.enter(o), n.consume(S), n.exit(o), n.exit(u), a)
      : (n.enter(c), m(S));
  }
  function m(S) {
    return S === h
      ? (n.exit(c), y(h))
      : S === null
      ? r(S)
      : ye(S)
      ? (n.enter("lineEnding"),
        n.consume(S),
        n.exit("lineEnding"),
        Qe(n, m, "linePrefix"))
      : (n.enter("chunkString", { contentType: "string" }), p(S));
  }
  function p(S) {
    return S === h || S === null || ye(S)
      ? (n.exit("chunkString"), m(S))
      : (n.consume(S), S === 92 ? b : p);
  }
  function b(S) {
    return S === h || S === 92 ? (n.consume(S), p) : p(S);
  }
}
function Xi(n, a) {
  let r;
  return u;
  function u(o) {
    return ye(o)
      ? (n.enter("lineEnding"), n.consume(o), n.exit("lineEnding"), (r = !0), u)
      : ke(o)
      ? Qe(n, u, r ? "linePrefix" : "lineSuffix")(o)
      : a(o);
  }
}
const lw = { name: "definition", tokenize: iw },
  aw = { partial: !0, tokenize: rw };
function iw(n, a, r) {
  const u = this;
  let o;
  return c;
  function c(v) {
    return n.enter("definition"), h(v);
  }
  function h(v) {
    return l0.call(
      u,
      n,
      d,
      r,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(v);
  }
  function d(v) {
    return (
      (o = Ma(u.sliceSerialize(u.events[u.events.length - 1][1]).slice(1, -1))),
      v === 58
        ? (n.enter("definitionMarker"),
          n.consume(v),
          n.exit("definitionMarker"),
          y)
        : r(v)
    );
  }
  function y(v) {
    return Mt(v) ? Xi(n, m)(v) : m(v);
  }
  function m(v) {
    return n0(
      n,
      p,
      r,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(v);
  }
  function p(v) {
    return n.attempt(aw, b, b)(v);
  }
  function b(v) {
    return ke(v) ? Qe(n, S, "whitespace")(v) : S(v);
  }
  function S(v) {
    return v === null || ye(v)
      ? (n.exit("definition"), u.parser.defined.push(o), a(v))
      : r(v);
  }
}
function rw(n, a, r) {
  return u;
  function u(d) {
    return Mt(d) ? Xi(n, o)(d) : r(d);
  }
  function o(d) {
    return a0(
      n,
      c,
      r,
      "definitionTitle",
      "definitionTitleMarker",
      "definitionTitleString"
    )(d);
  }
  function c(d) {
    return ke(d) ? Qe(n, h, "whitespace")(d) : h(d);
  }
  function h(d) {
    return d === null || ye(d) ? a(d) : r(d);
  }
}
const uw = { name: "hardBreakEscape", tokenize: ow };
function ow(n, a, r) {
  return u;
  function u(c) {
    return n.enter("hardBreakEscape"), n.consume(c), o;
  }
  function o(c) {
    return ye(c) ? (n.exit("hardBreakEscape"), a(c)) : r(c);
  }
}
const sw = { name: "headingAtx", resolve: cw, tokenize: fw };
function cw(n, a) {
  let r = n.length - 2,
    u = 3,
    o,
    c;
  return (
    n[u][1].type === "whitespace" && (u += 2),
    r - 2 > u && n[r][1].type === "whitespace" && (r -= 2),
    n[r][1].type === "atxHeadingSequence" &&
      (u === r - 1 || (r - 4 > u && n[r - 2][1].type === "whitespace")) &&
      (r -= u + 1 === r ? 2 : 4),
    r > u &&
      ((o = { type: "atxHeadingText", start: n[u][1].start, end: n[r][1].end }),
      (c = {
        type: "chunkText",
        start: n[u][1].start,
        end: n[r][1].end,
        contentType: "text",
      }),
      bn(n, u, r - u + 1, [
        ["enter", o, a],
        ["enter", c, a],
        ["exit", c, a],
        ["exit", o, a],
      ])),
    n
  );
}
function fw(n, a, r) {
  let u = 0;
  return o;
  function o(p) {
    return n.enter("atxHeading"), c(p);
  }
  function c(p) {
    return n.enter("atxHeadingSequence"), h(p);
  }
  function h(p) {
    return p === 35 && u++ < 6
      ? (n.consume(p), h)
      : p === null || Mt(p)
      ? (n.exit("atxHeadingSequence"), d(p))
      : r(p);
  }
  function d(p) {
    return p === 35
      ? (n.enter("atxHeadingSequence"), y(p))
      : p === null || ye(p)
      ? (n.exit("atxHeading"), a(p))
      : ke(p)
      ? Qe(n, d, "whitespace")(p)
      : (n.enter("atxHeadingText"), m(p));
  }
  function y(p) {
    return p === 35 ? (n.consume(p), y) : (n.exit("atxHeadingSequence"), d(p));
  }
  function m(p) {
    return p === null || p === 35 || Mt(p)
      ? (n.exit("atxHeadingText"), d(p))
      : (n.consume(p), m);
  }
}
const hw = [
    "address",
    "article",
    "aside",
    "base",
    "basefont",
    "blockquote",
    "body",
    "caption",
    "center",
    "col",
    "colgroup",
    "dd",
    "details",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "frame",
    "frameset",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hr",
    "html",
    "iframe",
    "legend",
    "li",
    "link",
    "main",
    "menu",
    "menuitem",
    "nav",
    "noframes",
    "ol",
    "optgroup",
    "option",
    "p",
    "param",
    "search",
    "section",
    "summary",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "title",
    "tr",
    "track",
    "ul",
  ],
  Oy = ["pre", "script", "style", "textarea"],
  dw = { concrete: !0, name: "htmlFlow", resolveTo: yw, tokenize: gw },
  mw = { partial: !0, tokenize: vw },
  pw = { partial: !0, tokenize: bw };
function yw(n) {
  let a = n.length;
  for (; a-- && !(n[a][0] === "enter" && n[a][1].type === "htmlFlow"); );
  return (
    a > 1 &&
      n[a - 2][1].type === "linePrefix" &&
      ((n[a][1].start = n[a - 2][1].start),
      (n[a + 1][1].start = n[a - 2][1].start),
      n.splice(a - 2, 2)),
    n
  );
}
function gw(n, a, r) {
  const u = this;
  let o, c, h, d, y;
  return m;
  function m(E) {
    return p(E);
  }
  function p(E) {
    return n.enter("htmlFlow"), n.enter("htmlFlowData"), n.consume(E), b;
  }
  function b(E) {
    return E === 33
      ? (n.consume(E), S)
      : E === 47
      ? (n.consume(E), (c = !0), O)
      : E === 63
      ? (n.consume(E), (o = 3), u.interrupt ? a : w)
      : gn(E)
      ? (n.consume(E), (h = String.fromCharCode(E)), N)
      : r(E);
  }
  function S(E) {
    return E === 45
      ? (n.consume(E), (o = 2), v)
      : E === 91
      ? (n.consume(E), (o = 5), (d = 0), T)
      : gn(E)
      ? (n.consume(E), (o = 4), u.interrupt ? a : w)
      : r(E);
  }
  function v(E) {
    return E === 45 ? (n.consume(E), u.interrupt ? a : w) : r(E);
  }
  function T(E) {
    const W = "CDATA[";
    return E === W.charCodeAt(d++)
      ? (n.consume(E), d === W.length ? (u.interrupt ? a : te) : T)
      : r(E);
  }
  function O(E) {
    return gn(E) ? (n.consume(E), (h = String.fromCharCode(E)), N) : r(E);
  }
  function N(E) {
    if (E === null || E === 47 || E === 62 || Mt(E)) {
      const W = E === 47,
        fe = h.toLowerCase();
      return !W && !c && Oy.includes(fe)
        ? ((o = 1), u.interrupt ? a(E) : te(E))
        : hw.includes(h.toLowerCase())
        ? ((o = 6), W ? (n.consume(E), _) : u.interrupt ? a(E) : te(E))
        : ((o = 7),
          u.interrupt && !u.parser.lazy[u.now().line] ? r(E) : c ? Z(E) : k(E));
    }
    return E === 45 || Gt(E)
      ? (n.consume(E), (h += String.fromCharCode(E)), N)
      : r(E);
  }
  function _(E) {
    return E === 62 ? (n.consume(E), u.interrupt ? a : te) : r(E);
  }
  function Z(E) {
    return ke(E) ? (n.consume(E), Z) : me(E);
  }
  function k(E) {
    return E === 47
      ? (n.consume(E), me)
      : E === 58 || E === 95 || gn(E)
      ? (n.consume(E), ee)
      : ke(E)
      ? (n.consume(E), k)
      : me(E);
  }
  function ee(E) {
    return E === 45 || E === 46 || E === 58 || E === 95 || Gt(E)
      ? (n.consume(E), ee)
      : ae(E);
  }
  function ae(E) {
    return E === 61 ? (n.consume(E), Y) : ke(E) ? (n.consume(E), ae) : k(E);
  }
  function Y(E) {
    return E === null || E === 60 || E === 61 || E === 62 || E === 96
      ? r(E)
      : E === 34 || E === 39
      ? (n.consume(E), (y = E), I)
      : ke(E)
      ? (n.consume(E), Y)
      : de(E);
  }
  function I(E) {
    return E === y
      ? (n.consume(E), (y = null), ce)
      : E === null || ye(E)
      ? r(E)
      : (n.consume(E), I);
  }
  function de(E) {
    return E === null ||
      E === 34 ||
      E === 39 ||
      E === 47 ||
      E === 60 ||
      E === 61 ||
      E === 62 ||
      E === 96 ||
      Mt(E)
      ? ae(E)
      : (n.consume(E), de);
  }
  function ce(E) {
    return E === 47 || E === 62 || ke(E) ? k(E) : r(E);
  }
  function me(E) {
    return E === 62 ? (n.consume(E), ne) : r(E);
  }
  function ne(E) {
    return E === null || ye(E) ? te(E) : ke(E) ? (n.consume(E), ne) : r(E);
  }
  function te(E) {
    return E === 45 && o === 2
      ? (n.consume(E), M)
      : E === 60 && o === 1
      ? (n.consume(E), K)
      : E === 62 && o === 4
      ? (n.consume(E), C)
      : E === 63 && o === 3
      ? (n.consume(E), w)
      : E === 93 && o === 5
      ? (n.consume(E), xe)
      : ye(E) && (o === 6 || o === 7)
      ? (n.exit("htmlFlowData"), n.check(mw, V, we)(E))
      : E === null || ye(E)
      ? (n.exit("htmlFlowData"), we(E))
      : (n.consume(E), te);
  }
  function we(E) {
    return n.check(pw, ie, V)(E);
  }
  function ie(E) {
    return n.enter("lineEnding"), n.consume(E), n.exit("lineEnding"), $;
  }
  function $(E) {
    return E === null || ye(E) ? we(E) : (n.enter("htmlFlowData"), te(E));
  }
  function M(E) {
    return E === 45 ? (n.consume(E), w) : te(E);
  }
  function K(E) {
    return E === 47 ? (n.consume(E), (h = ""), le) : te(E);
  }
  function le(E) {
    if (E === 62) {
      const W = h.toLowerCase();
      return Oy.includes(W) ? (n.consume(E), C) : te(E);
    }
    return gn(E) && h.length < 8
      ? (n.consume(E), (h += String.fromCharCode(E)), le)
      : te(E);
  }
  function xe(E) {
    return E === 93 ? (n.consume(E), w) : te(E);
  }
  function w(E) {
    return E === 62
      ? (n.consume(E), C)
      : E === 45 && o === 2
      ? (n.consume(E), w)
      : te(E);
  }
  function C(E) {
    return E === null || ye(E)
      ? (n.exit("htmlFlowData"), V(E))
      : (n.consume(E), C);
  }
  function V(E) {
    return n.exit("htmlFlow"), a(E);
  }
}
function bw(n, a, r) {
  const u = this;
  return o;
  function o(h) {
    return ye(h)
      ? (n.enter("lineEnding"), n.consume(h), n.exit("lineEnding"), c)
      : r(h);
  }
  function c(h) {
    return u.parser.lazy[u.now().line] ? r(h) : a(h);
  }
}
function vw(n, a, r) {
  return u;
  function u(o) {
    return (
      n.enter("lineEnding"),
      n.consume(o),
      n.exit("lineEnding"),
      n.attempt(Qu, a, r)
    );
  }
}
const xw = { name: "htmlText", tokenize: Sw };
function Sw(n, a, r) {
  const u = this;
  let o, c, h;
  return d;
  function d(w) {
    return n.enter("htmlText"), n.enter("htmlTextData"), n.consume(w), y;
  }
  function y(w) {
    return w === 33
      ? (n.consume(w), m)
      : w === 47
      ? (n.consume(w), ae)
      : w === 63
      ? (n.consume(w), k)
      : gn(w)
      ? (n.consume(w), de)
      : r(w);
  }
  function m(w) {
    return w === 45
      ? (n.consume(w), p)
      : w === 91
      ? (n.consume(w), (c = 0), T)
      : gn(w)
      ? (n.consume(w), Z)
      : r(w);
  }
  function p(w) {
    return w === 45 ? (n.consume(w), v) : r(w);
  }
  function b(w) {
    return w === null
      ? r(w)
      : w === 45
      ? (n.consume(w), S)
      : ye(w)
      ? ((h = b), K(w))
      : (n.consume(w), b);
  }
  function S(w) {
    return w === 45 ? (n.consume(w), v) : b(w);
  }
  function v(w) {
    return w === 62 ? M(w) : w === 45 ? S(w) : b(w);
  }
  function T(w) {
    const C = "CDATA[";
    return w === C.charCodeAt(c++)
      ? (n.consume(w), c === C.length ? O : T)
      : r(w);
  }
  function O(w) {
    return w === null
      ? r(w)
      : w === 93
      ? (n.consume(w), N)
      : ye(w)
      ? ((h = O), K(w))
      : (n.consume(w), O);
  }
  function N(w) {
    return w === 93 ? (n.consume(w), _) : O(w);
  }
  function _(w) {
    return w === 62 ? M(w) : w === 93 ? (n.consume(w), _) : O(w);
  }
  function Z(w) {
    return w === null || w === 62
      ? M(w)
      : ye(w)
      ? ((h = Z), K(w))
      : (n.consume(w), Z);
  }
  function k(w) {
    return w === null
      ? r(w)
      : w === 63
      ? (n.consume(w), ee)
      : ye(w)
      ? ((h = k), K(w))
      : (n.consume(w), k);
  }
  function ee(w) {
    return w === 62 ? M(w) : k(w);
  }
  function ae(w) {
    return gn(w) ? (n.consume(w), Y) : r(w);
  }
  function Y(w) {
    return w === 45 || Gt(w) ? (n.consume(w), Y) : I(w);
  }
  function I(w) {
    return ye(w) ? ((h = I), K(w)) : ke(w) ? (n.consume(w), I) : M(w);
  }
  function de(w) {
    return w === 45 || Gt(w)
      ? (n.consume(w), de)
      : w === 47 || w === 62 || Mt(w)
      ? ce(w)
      : r(w);
  }
  function ce(w) {
    return w === 47
      ? (n.consume(w), M)
      : w === 58 || w === 95 || gn(w)
      ? (n.consume(w), me)
      : ye(w)
      ? ((h = ce), K(w))
      : ke(w)
      ? (n.consume(w), ce)
      : M(w);
  }
  function me(w) {
    return w === 45 || w === 46 || w === 58 || w === 95 || Gt(w)
      ? (n.consume(w), me)
      : ne(w);
  }
  function ne(w) {
    return w === 61
      ? (n.consume(w), te)
      : ye(w)
      ? ((h = ne), K(w))
      : ke(w)
      ? (n.consume(w), ne)
      : ce(w);
  }
  function te(w) {
    return w === null || w === 60 || w === 61 || w === 62 || w === 96
      ? r(w)
      : w === 34 || w === 39
      ? (n.consume(w), (o = w), we)
      : ye(w)
      ? ((h = te), K(w))
      : ke(w)
      ? (n.consume(w), te)
      : (n.consume(w), ie);
  }
  function we(w) {
    return w === o
      ? (n.consume(w), (o = void 0), $)
      : w === null
      ? r(w)
      : ye(w)
      ? ((h = we), K(w))
      : (n.consume(w), we);
  }
  function ie(w) {
    return w === null ||
      w === 34 ||
      w === 39 ||
      w === 60 ||
      w === 61 ||
      w === 96
      ? r(w)
      : w === 47 || w === 62 || Mt(w)
      ? ce(w)
      : (n.consume(w), ie);
  }
  function $(w) {
    return w === 47 || w === 62 || Mt(w) ? ce(w) : r(w);
  }
  function M(w) {
    return w === 62
      ? (n.consume(w), n.exit("htmlTextData"), n.exit("htmlText"), a)
      : r(w);
  }
  function K(w) {
    return (
      n.exit("htmlTextData"),
      n.enter("lineEnding"),
      n.consume(w),
      n.exit("lineEnding"),
      le
    );
  }
  function le(w) {
    return ke(w)
      ? Qe(
          n,
          xe,
          "linePrefix",
          u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
        )(w)
      : xe(w);
  }
  function xe(w) {
    return n.enter("htmlTextData"), h(w);
  }
}
const Af = { name: "labelEnd", resolveAll: Aw, resolveTo: Cw, tokenize: zw },
  Ew = { tokenize: Ow },
  ww = { tokenize: Rw },
  Tw = { tokenize: Nw };
function Aw(n) {
  let a = -1;
  const r = [];
  for (; ++a < n.length; ) {
    const u = n[a][1];
    if (
      (r.push(n[a]),
      u.type === "labelImage" ||
        u.type === "labelLink" ||
        u.type === "labelEnd")
    ) {
      const o = u.type === "labelImage" ? 4 : 2;
      (u.type = "data"), (a += o);
    }
  }
  return n.length !== r.length && bn(n, 0, n.length, r), n;
}
function Cw(n, a) {
  let r = n.length,
    u = 0,
    o,
    c,
    h,
    d;
  for (; r--; )
    if (((o = n[r][1]), c)) {
      if (o.type === "link" || (o.type === "labelLink" && o._inactive)) break;
      n[r][0] === "enter" && o.type === "labelLink" && (o._inactive = !0);
    } else if (h) {
      if (
        n[r][0] === "enter" &&
        (o.type === "labelImage" || o.type === "labelLink") &&
        !o._balanced &&
        ((c = r), o.type !== "labelLink")
      ) {
        u = 2;
        break;
      }
    } else o.type === "labelEnd" && (h = r);
  const y = {
      type: n[c][1].type === "labelLink" ? "link" : "image",
      start: { ...n[c][1].start },
      end: { ...n[n.length - 1][1].end },
    },
    m = { type: "label", start: { ...n[c][1].start }, end: { ...n[h][1].end } },
    p = {
      type: "labelText",
      start: { ...n[c + u + 2][1].end },
      end: { ...n[h - 2][1].start },
    };
  return (
    (d = [
      ["enter", y, a],
      ["enter", m, a],
    ]),
    (d = nn(d, n.slice(c + 1, c + u + 3))),
    (d = nn(d, [["enter", p, a]])),
    (d = nn(
      d,
      Tf(a.parser.constructs.insideSpan.null, n.slice(c + u + 4, h - 3), a)
    )),
    (d = nn(d, [["exit", p, a], n[h - 2], n[h - 1], ["exit", m, a]])),
    (d = nn(d, n.slice(h + 1))),
    (d = nn(d, [["exit", y, a]])),
    bn(n, c, n.length, d),
    n
  );
}
function zw(n, a, r) {
  const u = this;
  let o = u.events.length,
    c,
    h;
  for (; o--; )
    if (
      (u.events[o][1].type === "labelImage" ||
        u.events[o][1].type === "labelLink") &&
      !u.events[o][1]._balanced
    ) {
      c = u.events[o][1];
      break;
    }
  return d;
  function d(S) {
    return c
      ? c._inactive
        ? b(S)
        : ((h = u.parser.defined.includes(
            Ma(u.sliceSerialize({ start: c.end, end: u.now() }))
          )),
          n.enter("labelEnd"),
          n.enter("labelMarker"),
          n.consume(S),
          n.exit("labelMarker"),
          n.exit("labelEnd"),
          y)
      : r(S);
  }
  function y(S) {
    return S === 40
      ? n.attempt(Ew, p, h ? p : b)(S)
      : S === 91
      ? n.attempt(ww, p, h ? m : b)(S)
      : h
      ? p(S)
      : b(S);
  }
  function m(S) {
    return n.attempt(Tw, p, b)(S);
  }
  function p(S) {
    return a(S);
  }
  function b(S) {
    return (c._balanced = !0), r(S);
  }
}
function Ow(n, a, r) {
  return u;
  function u(b) {
    return (
      n.enter("resource"),
      n.enter("resourceMarker"),
      n.consume(b),
      n.exit("resourceMarker"),
      o
    );
  }
  function o(b) {
    return Mt(b) ? Xi(n, c)(b) : c(b);
  }
  function c(b) {
    return b === 41
      ? p(b)
      : n0(
          n,
          h,
          d,
          "resourceDestination",
          "resourceDestinationLiteral",
          "resourceDestinationLiteralMarker",
          "resourceDestinationRaw",
          "resourceDestinationString",
          32
        )(b);
  }
  function h(b) {
    return Mt(b) ? Xi(n, y)(b) : p(b);
  }
  function d(b) {
    return r(b);
  }
  function y(b) {
    return b === 34 || b === 39 || b === 40
      ? a0(
          n,
          m,
          r,
          "resourceTitle",
          "resourceTitleMarker",
          "resourceTitleString"
        )(b)
      : p(b);
  }
  function m(b) {
    return Mt(b) ? Xi(n, p)(b) : p(b);
  }
  function p(b) {
    return b === 41
      ? (n.enter("resourceMarker"),
        n.consume(b),
        n.exit("resourceMarker"),
        n.exit("resource"),
        a)
      : r(b);
  }
}
function Rw(n, a, r) {
  const u = this;
  return o;
  function o(d) {
    return l0.call(
      u,
      n,
      c,
      h,
      "reference",
      "referenceMarker",
      "referenceString"
    )(d);
  }
  function c(d) {
    return u.parser.defined.includes(
      Ma(u.sliceSerialize(u.events[u.events.length - 1][1]).slice(1, -1))
    )
      ? a(d)
      : r(d);
  }
  function h(d) {
    return r(d);
  }
}
function Nw(n, a, r) {
  return u;
  function u(c) {
    return (
      n.enter("reference"),
      n.enter("referenceMarker"),
      n.consume(c),
      n.exit("referenceMarker"),
      o
    );
  }
  function o(c) {
    return c === 93
      ? (n.enter("referenceMarker"),
        n.consume(c),
        n.exit("referenceMarker"),
        n.exit("reference"),
        a)
      : r(c);
  }
}
const _w = { name: "labelStartImage", resolveAll: Af.resolveAll, tokenize: Dw };
function Dw(n, a, r) {
  const u = this;
  return o;
  function o(d) {
    return (
      n.enter("labelImage"),
      n.enter("labelImageMarker"),
      n.consume(d),
      n.exit("labelImageMarker"),
      c
    );
  }
  function c(d) {
    return d === 91
      ? (n.enter("labelMarker"),
        n.consume(d),
        n.exit("labelMarker"),
        n.exit("labelImage"),
        h)
      : r(d);
  }
  function h(d) {
    return d === 94 && "_hiddenFootnoteSupport" in u.parser.constructs
      ? r(d)
      : a(d);
  }
}
const Mw = { name: "labelStartLink", resolveAll: Af.resolveAll, tokenize: kw };
function kw(n, a, r) {
  const u = this;
  return o;
  function o(h) {
    return (
      n.enter("labelLink"),
      n.enter("labelMarker"),
      n.consume(h),
      n.exit("labelMarker"),
      n.exit("labelLink"),
      c
    );
  }
  function c(h) {
    return h === 94 && "_hiddenFootnoteSupport" in u.parser.constructs
      ? r(h)
      : a(h);
  }
}
const Ac = { name: "lineEnding", tokenize: jw };
function jw(n, a) {
  return r;
  function r(u) {
    return (
      n.enter("lineEnding"),
      n.consume(u),
      n.exit("lineEnding"),
      Qe(n, a, "linePrefix")
    );
  }
}
const Mu = { name: "thematicBreak", tokenize: Lw };
function Lw(n, a, r) {
  let u = 0,
    o;
  return c;
  function c(m) {
    return n.enter("thematicBreak"), h(m);
  }
  function h(m) {
    return (o = m), d(m);
  }
  function d(m) {
    return m === o
      ? (n.enter("thematicBreakSequence"), y(m))
      : u >= 3 && (m === null || ye(m))
      ? (n.exit("thematicBreak"), a(m))
      : r(m);
  }
  function y(m) {
    return m === o
      ? (n.consume(m), u++, y)
      : (n.exit("thematicBreakSequence"),
        ke(m) ? Qe(n, d, "whitespace")(m) : d(m));
  }
}
const Nt = {
    continuation: { tokenize: qw },
    exit: Vw,
    name: "list",
    tokenize: Hw,
  },
  Uw = { partial: !0, tokenize: Xw },
  Bw = { partial: !0, tokenize: Yw };
function Hw(n, a, r) {
  const u = this,
    o = u.events[u.events.length - 1];
  let c =
      o && o[1].type === "linePrefix"
        ? o[2].sliceSerialize(o[1], !0).length
        : 0,
    h = 0;
  return d;
  function d(v) {
    const T =
      u.containerState.type ||
      (v === 42 || v === 43 || v === 45 ? "listUnordered" : "listOrdered");
    if (
      T === "listUnordered"
        ? !u.containerState.marker || v === u.containerState.marker
        : Ic(v)
    ) {
      if (
        (u.containerState.type ||
          ((u.containerState.type = T), n.enter(T, { _container: !0 })),
        T === "listUnordered")
      )
        return (
          n.enter("listItemPrefix"),
          v === 42 || v === 45 ? n.check(Mu, r, m)(v) : m(v)
        );
      if (!u.interrupt || v === 49)
        return n.enter("listItemPrefix"), n.enter("listItemValue"), y(v);
    }
    return r(v);
  }
  function y(v) {
    return Ic(v) && ++h < 10
      ? (n.consume(v), y)
      : (!u.interrupt || h < 2) &&
        (u.containerState.marker
          ? v === u.containerState.marker
          : v === 41 || v === 46)
      ? (n.exit("listItemValue"), m(v))
      : r(v);
  }
  function m(v) {
    return (
      n.enter("listItemMarker"),
      n.consume(v),
      n.exit("listItemMarker"),
      (u.containerState.marker = u.containerState.marker || v),
      n.check(Qu, u.interrupt ? r : p, n.attempt(Uw, S, b))
    );
  }
  function p(v) {
    return (u.containerState.initialBlankLine = !0), c++, S(v);
  }
  function b(v) {
    return ke(v)
      ? (n.enter("listItemPrefixWhitespace"),
        n.consume(v),
        n.exit("listItemPrefixWhitespace"),
        S)
      : r(v);
  }
  function S(v) {
    return (
      (u.containerState.size =
        c + u.sliceSerialize(n.exit("listItemPrefix"), !0).length),
      a(v)
    );
  }
}
function qw(n, a, r) {
  const u = this;
  return (u.containerState._closeFlow = void 0), n.check(Qu, o, c);
  function o(d) {
    return (
      (u.containerState.furtherBlankLines =
        u.containerState.furtherBlankLines ||
        u.containerState.initialBlankLine),
      Qe(n, a, "listItemIndent", u.containerState.size + 1)(d)
    );
  }
  function c(d) {
    return u.containerState.furtherBlankLines || !ke(d)
      ? ((u.containerState.furtherBlankLines = void 0),
        (u.containerState.initialBlankLine = void 0),
        h(d))
      : ((u.containerState.furtherBlankLines = void 0),
        (u.containerState.initialBlankLine = void 0),
        n.attempt(Bw, a, h)(d));
  }
  function h(d) {
    return (
      (u.containerState._closeFlow = !0),
      (u.interrupt = void 0),
      Qe(
        n,
        n.attempt(Nt, a, r),
        "linePrefix",
        u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
      )(d)
    );
  }
}
function Yw(n, a, r) {
  const u = this;
  return Qe(n, o, "listItemIndent", u.containerState.size + 1);
  function o(c) {
    const h = u.events[u.events.length - 1];
    return h &&
      h[1].type === "listItemIndent" &&
      h[2].sliceSerialize(h[1], !0).length === u.containerState.size
      ? a(c)
      : r(c);
  }
}
function Vw(n) {
  n.exit(this.containerState.type);
}
function Xw(n, a, r) {
  const u = this;
  return Qe(
    n,
    o,
    "listItemPrefixWhitespace",
    u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5
  );
  function o(c) {
    const h = u.events[u.events.length - 1];
    return !ke(c) && h && h[1].type === "listItemPrefixWhitespace"
      ? a(c)
      : r(c);
  }
}
const Ry = { name: "setextUnderline", resolveTo: Gw, tokenize: Qw };
function Gw(n, a) {
  let r = n.length,
    u,
    o,
    c;
  for (; r--; )
    if (n[r][0] === "enter") {
      if (n[r][1].type === "content") {
        u = r;
        break;
      }
      n[r][1].type === "paragraph" && (o = r);
    } else
      n[r][1].type === "content" && n.splice(r, 1),
        !c && n[r][1].type === "definition" && (c = r);
  const h = {
    type: "setextHeading",
    start: { ...n[u][1].start },
    end: { ...n[n.length - 1][1].end },
  };
  return (
    (n[o][1].type = "setextHeadingText"),
    c
      ? (n.splice(o, 0, ["enter", h, a]),
        n.splice(c + 1, 0, ["exit", n[u][1], a]),
        (n[u][1].end = { ...n[c][1].end }))
      : (n[u][1] = h),
    n.push(["exit", h, a]),
    n
  );
}
function Qw(n, a, r) {
  const u = this;
  let o;
  return c;
  function c(m) {
    let p = u.events.length,
      b;
    for (; p--; )
      if (
        u.events[p][1].type !== "lineEnding" &&
        u.events[p][1].type !== "linePrefix" &&
        u.events[p][1].type !== "content"
      ) {
        b = u.events[p][1].type === "paragraph";
        break;
      }
    return !u.parser.lazy[u.now().line] && (u.interrupt || b)
      ? (n.enter("setextHeadingLine"), (o = m), h(m))
      : r(m);
  }
  function h(m) {
    return n.enter("setextHeadingLineSequence"), d(m);
  }
  function d(m) {
    return m === o
      ? (n.consume(m), d)
      : (n.exit("setextHeadingLineSequence"),
        ke(m) ? Qe(n, y, "lineSuffix")(m) : y(m));
  }
  function y(m) {
    return m === null || ye(m) ? (n.exit("setextHeadingLine"), a(m)) : r(m);
  }
}
const Zw = { tokenize: Fw };
function Fw(n) {
  const a = this,
    r = n.attempt(
      Qu,
      u,
      n.attempt(
        this.parser.constructs.flowInitial,
        o,
        Qe(
          n,
          n.attempt(this.parser.constructs.flow, o, n.attempt(PE, o)),
          "linePrefix"
        )
      )
    );
  return r;
  function u(c) {
    if (c === null) {
      n.consume(c);
      return;
    }
    return (
      n.enter("lineEndingBlank"),
      n.consume(c),
      n.exit("lineEndingBlank"),
      (a.currentConstruct = void 0),
      r
    );
  }
  function o(c) {
    if (c === null) {
      n.consume(c);
      return;
    }
    return (
      n.enter("lineEnding"),
      n.consume(c),
      n.exit("lineEnding"),
      (a.currentConstruct = void 0),
      r
    );
  }
}
const Kw = { resolveAll: r0() },
  Jw = i0("string"),
  Iw = i0("text");
function i0(n) {
  return { resolveAll: r0(n === "text" ? $w : void 0), tokenize: a };
  function a(r) {
    const u = this,
      o = this.parser.constructs[n],
      c = r.attempt(o, h, d);
    return h;
    function h(p) {
      return m(p) ? c(p) : d(p);
    }
    function d(p) {
      if (p === null) {
        r.consume(p);
        return;
      }
      return r.enter("data"), r.consume(p), y;
    }
    function y(p) {
      return m(p) ? (r.exit("data"), c(p)) : (r.consume(p), y);
    }
    function m(p) {
      if (p === null) return !0;
      const b = o[p];
      let S = -1;
      if (b)
        for (; ++S < b.length; ) {
          const v = b[S];
          if (!v.previous || v.previous.call(u, u.previous)) return !0;
        }
      return !1;
    }
  }
}
function r0(n) {
  return a;
  function a(r, u) {
    let o = -1,
      c;
    for (; ++o <= r.length; )
      c === void 0
        ? r[o] && r[o][1].type === "data" && ((c = o), o++)
        : (!r[o] || r[o][1].type !== "data") &&
          (o !== c + 2 &&
            ((r[c][1].end = r[o - 1][1].end),
            r.splice(c + 2, o - c - 2),
            (o = c + 2)),
          (c = void 0));
    return n ? n(r, u) : r;
  }
}
function $w(n, a) {
  let r = 0;
  for (; ++r <= n.length; )
    if (
      (r === n.length || n[r][1].type === "lineEnding") &&
      n[r - 1][1].type === "data"
    ) {
      const u = n[r - 1][1],
        o = a.sliceStream(u);
      let c = o.length,
        h = -1,
        d = 0,
        y;
      for (; c--; ) {
        const m = o[c];
        if (typeof m == "string") {
          for (h = m.length; m.charCodeAt(h - 1) === 32; ) d++, h--;
          if (h) break;
          h = -1;
        } else if (m === -2) (y = !0), d++;
        else if (m !== -1) {
          c++;
          break;
        }
      }
      if ((a._contentTypeTextTrailing && r === n.length && (d = 0), d)) {
        const m = {
          type:
            r === n.length || y || d < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: c ? h : u.start._bufferIndex + h,
            _index: u.start._index + c,
            line: u.end.line,
            column: u.end.column - d,
            offset: u.end.offset - d,
          },
          end: { ...u.end },
        };
        (u.end = { ...m.start }),
          u.start.offset === u.end.offset
            ? Object.assign(u, m)
            : (n.splice(r, 0, ["enter", m, a], ["exit", m, a]), (r += 2));
      }
      r++;
    }
  return n;
}
const Pw = {
    42: Nt,
    43: Nt,
    45: Nt,
    48: Nt,
    49: Nt,
    50: Nt,
    51: Nt,
    52: Nt,
    53: Nt,
    54: Nt,
    55: Nt,
    56: Nt,
    57: Nt,
    62: Pg,
  },
  Ww = { 91: lw },
  eT = { [-2]: Tc, [-1]: Tc, 32: Tc },
  tT = {
    35: sw,
    42: Mu,
    45: [Ry, Mu],
    60: dw,
    61: Ry,
    95: Mu,
    96: zy,
    126: zy,
  },
  nT = { 38: e0, 92: Wg },
  lT = {
    [-5]: Ac,
    [-4]: Ac,
    [-3]: Ac,
    33: _w,
    38: e0,
    42: $c,
    60: [ME, xw],
    91: Mw,
    92: [uw, Wg],
    93: Af,
    95: $c,
    96: ZE,
  },
  aT = { null: [$c, Kw] },
  iT = { null: [42, 95] },
  rT = { null: [] },
  uT = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        attentionMarkers: iT,
        contentInitial: Ww,
        disable: rT,
        document: Pw,
        flow: tT,
        flowInitial: eT,
        insideSpan: aT,
        string: nT,
        text: lT,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
function oT(n, a, r) {
  let u = {
    _bufferIndex: -1,
    _index: 0,
    line: (r && r.line) || 1,
    column: (r && r.column) || 1,
    offset: (r && r.offset) || 0,
  };
  const o = {},
    c = [];
  let h = [],
    d = [];
  const y = {
      attempt: I(ae),
      check: I(Y),
      consume: Z,
      enter: k,
      exit: ee,
      interrupt: I(Y, { interrupt: !0 }),
    },
    m = {
      code: null,
      containerState: {},
      defineSkip: O,
      events: [],
      now: T,
      parser: n,
      previous: null,
      sliceSerialize: S,
      sliceStream: v,
      write: b,
    };
  let p = a.tokenize.call(m, y);
  return a.resolveAll && c.push(a), m;
  function b(ne) {
    return (
      (h = nn(h, ne)),
      N(),
      h[h.length - 1] !== null
        ? []
        : (de(a, 0), (m.events = Tf(c, m.events, m)), m.events)
    );
  }
  function S(ne, te) {
    return cT(v(ne), te);
  }
  function v(ne) {
    return sT(h, ne);
  }
  function T() {
    const { _bufferIndex: ne, _index: te, line: we, column: ie, offset: $ } = u;
    return { _bufferIndex: ne, _index: te, line: we, column: ie, offset: $ };
  }
  function O(ne) {
    (o[ne.line] = ne.column), me();
  }
  function N() {
    let ne;
    for (; u._index < h.length; ) {
      const te = h[u._index];
      if (typeof te == "string")
        for (
          ne = u._index, u._bufferIndex < 0 && (u._bufferIndex = 0);
          u._index === ne && u._bufferIndex < te.length;

        )
          _(te.charCodeAt(u._bufferIndex));
      else _(te);
    }
  }
  function _(ne) {
    p = p(ne);
  }
  function Z(ne) {
    ye(ne)
      ? (u.line++, (u.column = 1), (u.offset += ne === -3 ? 2 : 1), me())
      : ne !== -1 && (u.column++, u.offset++),
      u._bufferIndex < 0
        ? u._index++
        : (u._bufferIndex++,
          u._bufferIndex === h[u._index].length &&
            ((u._bufferIndex = -1), u._index++)),
      (m.previous = ne);
  }
  function k(ne, te) {
    const we = te || {};
    return (
      (we.type = ne),
      (we.start = T()),
      m.events.push(["enter", we, m]),
      d.push(we),
      we
    );
  }
  function ee(ne) {
    const te = d.pop();
    return (te.end = T()), m.events.push(["exit", te, m]), te;
  }
  function ae(ne, te) {
    de(ne, te.from);
  }
  function Y(ne, te) {
    te.restore();
  }
  function I(ne, te) {
    return we;
    function we(ie, $, M) {
      let K, le, xe, w;
      return Array.isArray(ie) ? V(ie) : "tokenize" in ie ? V([ie]) : C(ie);
      function C(oe) {
        return ze;
        function ze(Ke) {
          const Be = Ke !== null && oe[Ke],
            Qt = Ke !== null && oe.null,
            Sn = [
              ...(Array.isArray(Be) ? Be : Be ? [Be] : []),
              ...(Array.isArray(Qt) ? Qt : Qt ? [Qt] : []),
            ];
          return V(Sn)(Ke);
        }
      }
      function V(oe) {
        return (K = oe), (le = 0), oe.length === 0 ? M : E(oe[le]);
      }
      function E(oe) {
        return ze;
        function ze(Ke) {
          return (
            (w = ce()),
            (xe = oe),
            oe.partial || (m.currentConstruct = oe),
            oe.name && m.parser.constructs.disable.null.includes(oe.name)
              ? fe()
              : oe.tokenize.call(
                  te ? Object.assign(Object.create(m), te) : m,
                  y,
                  W,
                  fe
                )(Ke)
          );
        }
      }
      function W(oe) {
        return ne(xe, w), $;
      }
      function fe(oe) {
        return w.restore(), ++le < K.length ? E(K[le]) : M;
      }
    }
  }
  function de(ne, te) {
    ne.resolveAll && !c.includes(ne) && c.push(ne),
      ne.resolve &&
        bn(
          m.events,
          te,
          m.events.length - te,
          ne.resolve(m.events.slice(te), m)
        ),
      ne.resolveTo && (m.events = ne.resolveTo(m.events, m));
  }
  function ce() {
    const ne = T(),
      te = m.previous,
      we = m.currentConstruct,
      ie = m.events.length,
      $ = Array.from(d);
    return { from: ie, restore: M };
    function M() {
      (u = ne),
        (m.previous = te),
        (m.currentConstruct = we),
        (m.events.length = ie),
        (d = $),
        me();
    }
  }
  function me() {
    u.line in o &&
      u.column < 2 &&
      ((u.column = o[u.line]), (u.offset += o[u.line] - 1));
  }
}
function sT(n, a) {
  const r = a.start._index,
    u = a.start._bufferIndex,
    o = a.end._index,
    c = a.end._bufferIndex;
  let h;
  if (r === o) h = [n[r].slice(u, c)];
  else {
    if (((h = n.slice(r, o)), u > -1)) {
      const d = h[0];
      typeof d == "string" ? (h[0] = d.slice(u)) : h.shift();
    }
    c > 0 && h.push(n[o].slice(0, c));
  }
  return h;
}
function cT(n, a) {
  let r = -1;
  const u = [];
  let o;
  for (; ++r < n.length; ) {
    const c = n[r];
    let h;
    if (typeof c == "string") h = c;
    else
      switch (c) {
        case -5: {
          h = "\r";
          break;
        }
        case -4: {
          h = `
`;
          break;
        }
        case -3: {
          h = `\r
`;
          break;
        }
        case -2: {
          h = a ? " " : "	";
          break;
        }
        case -1: {
          if (!a && o) continue;
          h = " ";
          break;
        }
        default:
          h = String.fromCharCode(c);
      }
    (o = c === -2), u.push(h);
  }
  return u.join("");
}
function fT(n) {
  const u = {
    constructs: bE([uT, ...((n || {}).extensions || [])]),
    content: o(CE),
    defined: [],
    document: o(OE),
    flow: o(Zw),
    lazy: {},
    string: o(Jw),
    text: o(Iw),
  };
  return u;
  function o(c) {
    return h;
    function h(d) {
      return oT(u, c, d);
    }
  }
}
function hT(n) {
  for (; !t0(n); );
  return n;
}
const Ny = /[\0\t\n\r]/g;
function dT() {
  let n = 1,
    a = "",
    r = !0,
    u;
  return o;
  function o(c, h, d) {
    const y = [];
    let m, p, b, S, v;
    for (
      c =
        a +
        (typeof c == "string"
          ? c.toString()
          : new TextDecoder(h || void 0).decode(c)),
        b = 0,
        a = "",
        r && (c.charCodeAt(0) === 65279 && b++, (r = void 0));
      b < c.length;

    ) {
      if (
        ((Ny.lastIndex = b),
        (m = Ny.exec(c)),
        (S = m && m.index !== void 0 ? m.index : c.length),
        (v = c.charCodeAt(S)),
        !m)
      ) {
        a = c.slice(b);
        break;
      }
      if (v === 10 && b === S && u) y.push(-3), (u = void 0);
      else
        switch (
          (u && (y.push(-5), (u = void 0)),
          b < S && (y.push(c.slice(b, S)), (n += S - b)),
          v)
        ) {
          case 0: {
            y.push(65533), n++;
            break;
          }
          case 9: {
            for (p = Math.ceil(n / 4) * 4, y.push(-2); n++ < p; ) y.push(-1);
            break;
          }
          case 10: {
            y.push(-4), (n = 1);
            break;
          }
          default:
            (u = !0), (n = 1);
        }
      b = S + 1;
    }
    return d && (u && y.push(-5), a && y.push(a), y.push(null)), y;
  }
}
const mT = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function pT(n) {
  return n.replace(mT, yT);
}
function yT(n, a, r) {
  if (a) return a;
  if (r.charCodeAt(0) === 35) {
    const o = r.charCodeAt(1),
      c = o === 120 || o === 88;
    return $g(r.slice(c ? 2 : 1), c ? 16 : 10);
  }
  return wf(r) || n;
}
const u0 = {}.hasOwnProperty;
function gT(n, a, r) {
  return (
    typeof a != "string" && ((r = a), (a = void 0)),
    bT(r)(hT(fT(r).document().write(dT()(n, a, !0))))
  );
}
function bT(n) {
  const a = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: c(Xl),
      autolinkProtocol: ce,
      autolinkEmail: ce,
      atxHeading: c(Yl),
      blockQuote: c(Qt),
      characterEscape: ce,
      characterReference: ce,
      codeFenced: c(Sn),
      codeFencedFenceInfo: h,
      codeFencedFenceMeta: h,
      codeIndented: c(Sn, h),
      codeText: c(Ya, h),
      codeTextData: ce,
      data: ce,
      codeFlowValue: ce,
      definition: c(lr),
      definitionDestinationString: h,
      definitionLabelString: h,
      definitionTitleString: h,
      emphasis: c(En),
      hardBreakEscape: c(Vl),
      hardBreakTrailing: c(Vl),
      htmlFlow: c(ar, h),
      htmlFlowData: ce,
      htmlText: c(ar, h),
      htmlTextData: ce,
      image: c(ir),
      label: h,
      link: c(Xl),
      listItem: c(Va),
      listItemValue: S,
      listOrdered: c(Gl, b),
      listUnordered: c(Gl),
      paragraph: c(Ku),
      reference: E,
      referenceString: h,
      resourceDestinationString: h,
      resourceTitleString: h,
      setextHeading: c(Yl),
      strong: c(Ju),
      thematicBreak: c(Iu),
    },
    exit: {
      atxHeading: y(),
      atxHeadingSequence: ae,
      autolink: y(),
      autolinkEmail: Be,
      autolinkProtocol: Ke,
      blockQuote: y(),
      characterEscapeValue: me,
      characterReferenceMarkerHexadecimal: fe,
      characterReferenceMarkerNumeric: fe,
      characterReferenceValue: oe,
      characterReference: ze,
      codeFenced: y(N),
      codeFencedFence: O,
      codeFencedFenceInfo: v,
      codeFencedFenceMeta: T,
      codeFlowValue: me,
      codeIndented: y(_),
      codeText: y($),
      codeTextData: me,
      data: me,
      definition: y(),
      definitionDestinationString: ee,
      definitionLabelString: Z,
      definitionTitleString: k,
      emphasis: y(),
      hardBreakEscape: y(te),
      hardBreakTrailing: y(te),
      htmlFlow: y(we),
      htmlFlowData: me,
      htmlText: y(ie),
      htmlTextData: me,
      image: y(K),
      label: xe,
      labelText: le,
      lineEnding: ne,
      link: y(M),
      listItem: y(),
      listOrdered: y(),
      listUnordered: y(),
      paragraph: y(),
      referenceString: W,
      resourceDestinationString: w,
      resourceTitleString: C,
      resource: V,
      setextHeading: y(de),
      setextHeadingLineSequence: I,
      setextHeadingText: Y,
      strong: y(),
      thematicBreak: y(),
    },
  };
  o0(a, (n || {}).mdastExtensions || []);
  const r = {};
  return u;
  function u(G) {
    let P = { type: "root", children: [] };
    const pe = {
        stack: [P],
        tokenStack: [],
        config: a,
        enter: d,
        exit: m,
        buffer: h,
        resume: p,
        data: r,
      },
      Te = [];
    let je = -1;
    for (; ++je < G.length; )
      if (G[je][1].type === "listOrdered" || G[je][1].type === "listUnordered")
        if (G[je][0] === "enter") Te.push(je);
        else {
          const jt = Te.pop();
          je = o(G, jt, je);
        }
    for (je = -1; ++je < G.length; ) {
      const jt = a[G[je][0]];
      u0.call(jt, G[je][1].type) &&
        jt[G[je][1].type].call(
          Object.assign({ sliceSerialize: G[je][2].sliceSerialize }, pe),
          G[je][1]
        );
    }
    if (pe.tokenStack.length > 0) {
      const jt = pe.tokenStack[pe.tokenStack.length - 1];
      (jt[1] || _y).call(pe, void 0, jt[0]);
    }
    for (
      P.position = {
        start: yl(
          G.length > 0 ? G[0][1].start : { line: 1, column: 1, offset: 0 }
        ),
        end: yl(
          G.length > 0
            ? G[G.length - 2][1].end
            : { line: 1, column: 1, offset: 0 }
        ),
      },
        je = -1;
      ++je < a.transforms.length;

    )
      P = a.transforms[je](P) || P;
    return P;
  }
  function o(G, P, pe) {
    let Te = P - 1,
      je = -1,
      jt = !1,
      wn,
      xt,
      ut,
      Et;
    for (; ++Te <= pe; ) {
      const Ve = G[Te];
      switch (Ve[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          Ve[0] === "enter" ? je++ : je--, (Et = void 0);
          break;
        }
        case "lineEndingBlank": {
          Ve[0] === "enter" &&
            (wn && !Et && !je && !ut && (ut = Te), (Et = void 0));
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          Et = void 0;
      }
      if (
        (!je && Ve[0] === "enter" && Ve[1].type === "listItemPrefix") ||
        (je === -1 &&
          Ve[0] === "exit" &&
          (Ve[1].type === "listUnordered" || Ve[1].type === "listOrdered"))
      ) {
        if (wn) {
          let Qn = Te;
          for (xt = void 0; Qn--; ) {
            const an = G[Qn];
            if (
              an[1].type === "lineEnding" ||
              an[1].type === "lineEndingBlank"
            ) {
              if (an[0] === "exit") continue;
              xt && ((G[xt][1].type = "lineEndingBlank"), (jt = !0)),
                (an[1].type = "lineEnding"),
                (xt = Qn);
            } else if (
              !(
                an[1].type === "linePrefix" ||
                an[1].type === "blockQuotePrefix" ||
                an[1].type === "blockQuotePrefixWhitespace" ||
                an[1].type === "blockQuoteMarker" ||
                an[1].type === "listItemIndent"
              )
            )
              break;
          }
          ut && (!xt || ut < xt) && (wn._spread = !0),
            (wn.end = Object.assign({}, xt ? G[xt][1].start : Ve[1].end)),
            G.splice(xt || Te, 0, ["exit", wn, Ve[2]]),
            Te++,
            pe++;
        }
        if (Ve[1].type === "listItemPrefix") {
          const Qn = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, Ve[1].start),
            end: void 0,
          };
          (wn = Qn),
            G.splice(Te, 0, ["enter", Qn, Ve[2]]),
            Te++,
            pe++,
            (ut = void 0),
            (Et = !0);
        }
      }
    }
    return (G[P][1]._spread = jt), pe;
  }
  function c(G, P) {
    return pe;
    function pe(Te) {
      d.call(this, G(Te), Te), P && P.call(this, Te);
    }
  }
  function h() {
    this.stack.push({ type: "fragment", children: [] });
  }
  function d(G, P, pe) {
    this.stack[this.stack.length - 1].children.push(G),
      this.stack.push(G),
      this.tokenStack.push([P, pe || void 0]),
      (G.position = { start: yl(P.start), end: void 0 });
  }
  function y(G) {
    return P;
    function P(pe) {
      G && G.call(this, pe), m.call(this, pe);
    }
  }
  function m(G, P) {
    const pe = this.stack.pop(),
      Te = this.tokenStack.pop();
    if (Te)
      Te[0].type !== G.type &&
        (P ? P.call(this, G, Te[0]) : (Te[1] || _y).call(this, G, Te[0]));
    else
      throw new Error(
        "Cannot close `" +
          G.type +
          "` (" +
          Vi({ start: G.start, end: G.end }) +
          "): it’s not open"
      );
    pe.position.end = yl(G.end);
  }
  function p() {
    return yE(this.stack.pop());
  }
  function b() {
    this.data.expectingFirstListItemValue = !0;
  }
  function S(G) {
    if (this.data.expectingFirstListItemValue) {
      const P = this.stack[this.stack.length - 2];
      (P.start = Number.parseInt(this.sliceSerialize(G), 10)),
        (this.data.expectingFirstListItemValue = void 0);
    }
  }
  function v() {
    const G = this.resume(),
      P = this.stack[this.stack.length - 1];
    P.lang = G;
  }
  function T() {
    const G = this.resume(),
      P = this.stack[this.stack.length - 1];
    P.meta = G;
  }
  function O() {
    this.data.flowCodeInside ||
      (this.buffer(), (this.data.flowCodeInside = !0));
  }
  function N() {
    const G = this.resume(),
      P = this.stack[this.stack.length - 1];
    (P.value = G.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "")),
      (this.data.flowCodeInside = void 0);
  }
  function _() {
    const G = this.resume(),
      P = this.stack[this.stack.length - 1];
    P.value = G.replace(/(\r?\n|\r)$/g, "");
  }
  function Z(G) {
    const P = this.resume(),
      pe = this.stack[this.stack.length - 1];
    (pe.label = P), (pe.identifier = Ma(this.sliceSerialize(G)).toLowerCase());
  }
  function k() {
    const G = this.resume(),
      P = this.stack[this.stack.length - 1];
    P.title = G;
  }
  function ee() {
    const G = this.resume(),
      P = this.stack[this.stack.length - 1];
    P.url = G;
  }
  function ae(G) {
    const P = this.stack[this.stack.length - 1];
    if (!P.depth) {
      const pe = this.sliceSerialize(G).length;
      P.depth = pe;
    }
  }
  function Y() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function I(G) {
    const P = this.stack[this.stack.length - 1];
    P.depth = this.sliceSerialize(G).codePointAt(0) === 61 ? 1 : 2;
  }
  function de() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function ce(G) {
    const pe = this.stack[this.stack.length - 1].children;
    let Te = pe[pe.length - 1];
    (!Te || Te.type !== "text") &&
      ((Te = vt()),
      (Te.position = { start: yl(G.start), end: void 0 }),
      pe.push(Te)),
      this.stack.push(Te);
  }
  function me(G) {
    const P = this.stack.pop();
    (P.value += this.sliceSerialize(G)), (P.position.end = yl(G.end));
  }
  function ne(G) {
    const P = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const pe = P.children[P.children.length - 1];
      (pe.position.end = yl(G.end)), (this.data.atHardBreak = void 0);
      return;
    }
    !this.data.setextHeadingSlurpLineEnding &&
      a.canContainEols.includes(P.type) &&
      (ce.call(this, G), me.call(this, G));
  }
  function te() {
    this.data.atHardBreak = !0;
  }
  function we() {
    const G = this.resume(),
      P = this.stack[this.stack.length - 1];
    P.value = G;
  }
  function ie() {
    const G = this.resume(),
      P = this.stack[this.stack.length - 1];
    P.value = G;
  }
  function $() {
    const G = this.resume(),
      P = this.stack[this.stack.length - 1];
    P.value = G;
  }
  function M() {
    const G = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const P = this.data.referenceType || "shortcut";
      (G.type += "Reference"),
        (G.referenceType = P),
        delete G.url,
        delete G.title;
    } else delete G.identifier, delete G.label;
    this.data.referenceType = void 0;
  }
  function K() {
    const G = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const P = this.data.referenceType || "shortcut";
      (G.type += "Reference"),
        (G.referenceType = P),
        delete G.url,
        delete G.title;
    } else delete G.identifier, delete G.label;
    this.data.referenceType = void 0;
  }
  function le(G) {
    const P = this.sliceSerialize(G),
      pe = this.stack[this.stack.length - 2];
    (pe.label = pT(P)), (pe.identifier = Ma(P).toLowerCase());
  }
  function xe() {
    const G = this.stack[this.stack.length - 1],
      P = this.resume(),
      pe = this.stack[this.stack.length - 1];
    if (((this.data.inReference = !0), pe.type === "link")) {
      const Te = G.children;
      pe.children = Te;
    } else pe.alt = P;
  }
  function w() {
    const G = this.resume(),
      P = this.stack[this.stack.length - 1];
    P.url = G;
  }
  function C() {
    const G = this.resume(),
      P = this.stack[this.stack.length - 1];
    P.title = G;
  }
  function V() {
    this.data.inReference = void 0;
  }
  function E() {
    this.data.referenceType = "collapsed";
  }
  function W(G) {
    const P = this.resume(),
      pe = this.stack[this.stack.length - 1];
    (pe.label = P),
      (pe.identifier = Ma(this.sliceSerialize(G)).toLowerCase()),
      (this.data.referenceType = "full");
  }
  function fe(G) {
    this.data.characterReferenceType = G.type;
  }
  function oe(G) {
    const P = this.sliceSerialize(G),
      pe = this.data.characterReferenceType;
    let Te;
    pe
      ? ((Te = $g(P, pe === "characterReferenceMarkerNumeric" ? 10 : 16)),
        (this.data.characterReferenceType = void 0))
      : (Te = wf(P));
    const je = this.stack[this.stack.length - 1];
    je.value += Te;
  }
  function ze(G) {
    const P = this.stack.pop();
    P.position.end = yl(G.end);
  }
  function Ke(G) {
    me.call(this, G);
    const P = this.stack[this.stack.length - 1];
    P.url = this.sliceSerialize(G);
  }
  function Be(G) {
    me.call(this, G);
    const P = this.stack[this.stack.length - 1];
    P.url = "mailto:" + this.sliceSerialize(G);
  }
  function Qt() {
    return { type: "blockquote", children: [] };
  }
  function Sn() {
    return { type: "code", lang: null, meta: null, value: "" };
  }
  function Ya() {
    return { type: "inlineCode", value: "" };
  }
  function lr() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: "",
    };
  }
  function En() {
    return { type: "emphasis", children: [] };
  }
  function Yl() {
    return { type: "heading", depth: 0, children: [] };
  }
  function Vl() {
    return { type: "break" };
  }
  function ar() {
    return { type: "html", value: "" };
  }
  function ir() {
    return { type: "image", title: null, url: "", alt: null };
  }
  function Xl() {
    return { type: "link", title: null, url: "", children: [] };
  }
  function Gl(G) {
    return {
      type: "list",
      ordered: G.type === "listOrdered",
      start: null,
      spread: G._spread,
      children: [],
    };
  }
  function Va(G) {
    return { type: "listItem", spread: G._spread, checked: null, children: [] };
  }
  function Ku() {
    return { type: "paragraph", children: [] };
  }
  function Ju() {
    return { type: "strong", children: [] };
  }
  function vt() {
    return { type: "text", value: "" };
  }
  function Iu() {
    return { type: "thematicBreak" };
  }
}
function yl(n) {
  return { line: n.line, column: n.column, offset: n.offset };
}
function o0(n, a) {
  let r = -1;
  for (; ++r < a.length; ) {
    const u = a[r];
    Array.isArray(u) ? o0(n, u) : vT(n, u);
  }
}
function vT(n, a) {
  let r;
  for (r in a)
    if (u0.call(a, r))
      switch (r) {
        case "canContainEols": {
          const u = a[r];
          u && n[r].push(...u);
          break;
        }
        case "transforms": {
          const u = a[r];
          u && n[r].push(...u);
          break;
        }
        case "enter":
        case "exit": {
          const u = a[r];
          u && Object.assign(n[r], u);
          break;
        }
      }
}
function _y(n, a) {
  throw n
    ? new Error(
        "Cannot close `" +
          n.type +
          "` (" +
          Vi({ start: n.start, end: n.end }) +
          "): a different token (`" +
          a.type +
          "`, " +
          Vi({ start: a.start, end: a.end }) +
          ") is open"
      )
    : new Error(
        "Cannot close document, a token (`" +
          a.type +
          "`, " +
          Vi({ start: a.start, end: a.end }) +
          ") is still open"
      );
}
function xT(n) {
  const a = this;
  a.parser = r;
  function r(u) {
    return gT(u, {
      ...a.data("settings"),
      ...n,
      extensions: a.data("micromarkExtensions") || [],
      mdastExtensions: a.data("fromMarkdownExtensions") || [],
    });
  }
}
function ST(n, a) {
  const r = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: n.wrap(n.all(a), !0),
  };
  return n.patch(a, r), n.applyData(a, r);
}
function ET(n, a) {
  const r = { type: "element", tagName: "br", properties: {}, children: [] };
  return (
    n.patch(a, r),
    [
      n.applyData(a, r),
      {
        type: "text",
        value: `
`,
      },
    ]
  );
}
function wT(n, a) {
  const r = a.value
      ? a.value +
        `
`
      : "",
    u = {},
    o = a.lang ? a.lang.split(/\s+/) : [];
  o.length > 0 && (u.className = ["language-" + o[0]]);
  let c = {
    type: "element",
    tagName: "code",
    properties: u,
    children: [{ type: "text", value: r }],
  };
  return (
    a.meta && (c.data = { meta: a.meta }),
    n.patch(a, c),
    (c = n.applyData(a, c)),
    (c = { type: "element", tagName: "pre", properties: {}, children: [c] }),
    n.patch(a, c),
    c
  );
}
function TT(n, a) {
  const r = {
    type: "element",
    tagName: "del",
    properties: {},
    children: n.all(a),
  };
  return n.patch(a, r), n.applyData(a, r);
}
function AT(n, a) {
  const r = {
    type: "element",
    tagName: "em",
    properties: {},
    children: n.all(a),
  };
  return n.patch(a, r), n.applyData(a, r);
}
function CT(n, a) {
  const r =
      typeof n.options.clobberPrefix == "string"
        ? n.options.clobberPrefix
        : "user-content-",
    u = String(a.identifier).toUpperCase(),
    o = qa(u.toLowerCase()),
    c = n.footnoteOrder.indexOf(u);
  let h,
    d = n.footnoteCounts.get(u);
  d === void 0
    ? ((d = 0), n.footnoteOrder.push(u), (h = n.footnoteOrder.length))
    : (h = c + 1),
    (d += 1),
    n.footnoteCounts.set(u, d);
  const y = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + r + "fn-" + o,
      id: r + "fnref-" + o + (d > 1 ? "-" + d : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"],
    },
    children: [{ type: "text", value: String(h) }],
  };
  n.patch(a, y);
  const m = { type: "element", tagName: "sup", properties: {}, children: [y] };
  return n.patch(a, m), n.applyData(a, m);
}
function zT(n, a) {
  const r = {
    type: "element",
    tagName: "h" + a.depth,
    properties: {},
    children: n.all(a),
  };
  return n.patch(a, r), n.applyData(a, r);
}
function OT(n, a) {
  if (n.options.allowDangerousHtml) {
    const r = { type: "raw", value: a.value };
    return n.patch(a, r), n.applyData(a, r);
  }
}
function s0(n, a) {
  const r = a.referenceType;
  let u = "]";
  if (
    (r === "collapsed"
      ? (u += "[]")
      : r === "full" && (u += "[" + (a.label || a.identifier) + "]"),
    a.type === "imageReference")
  )
    return [{ type: "text", value: "![" + a.alt + u }];
  const o = n.all(a),
    c = o[0];
  c && c.type === "text"
    ? (c.value = "[" + c.value)
    : o.unshift({ type: "text", value: "[" });
  const h = o[o.length - 1];
  return (
    h && h.type === "text"
      ? (h.value += u)
      : o.push({ type: "text", value: u }),
    o
  );
}
function RT(n, a) {
  const r = String(a.identifier).toUpperCase(),
    u = n.definitionById.get(r);
  if (!u) return s0(n, a);
  const o = { src: qa(u.url || ""), alt: a.alt };
  u.title !== null && u.title !== void 0 && (o.title = u.title);
  const c = { type: "element", tagName: "img", properties: o, children: [] };
  return n.patch(a, c), n.applyData(a, c);
}
function NT(n, a) {
  const r = { src: qa(a.url) };
  a.alt !== null && a.alt !== void 0 && (r.alt = a.alt),
    a.title !== null && a.title !== void 0 && (r.title = a.title);
  const u = { type: "element", tagName: "img", properties: r, children: [] };
  return n.patch(a, u), n.applyData(a, u);
}
function _T(n, a) {
  const r = { type: "text", value: a.value.replace(/\r?\n|\r/g, " ") };
  n.patch(a, r);
  const u = { type: "element", tagName: "code", properties: {}, children: [r] };
  return n.patch(a, u), n.applyData(a, u);
}
function DT(n, a) {
  const r = String(a.identifier).toUpperCase(),
    u = n.definitionById.get(r);
  if (!u) return s0(n, a);
  const o = { href: qa(u.url || "") };
  u.title !== null && u.title !== void 0 && (o.title = u.title);
  const c = {
    type: "element",
    tagName: "a",
    properties: o,
    children: n.all(a),
  };
  return n.patch(a, c), n.applyData(a, c);
}
function MT(n, a) {
  const r = { href: qa(a.url) };
  a.title !== null && a.title !== void 0 && (r.title = a.title);
  const u = {
    type: "element",
    tagName: "a",
    properties: r,
    children: n.all(a),
  };
  return n.patch(a, u), n.applyData(a, u);
}
function kT(n, a, r) {
  const u = n.all(a),
    o = r ? jT(r) : c0(a),
    c = {},
    h = [];
  if (typeof a.checked == "boolean") {
    const p = u[0];
    let b;
    p && p.type === "element" && p.tagName === "p"
      ? (b = p)
      : ((b = { type: "element", tagName: "p", properties: {}, children: [] }),
        u.unshift(b)),
      b.children.length > 0 && b.children.unshift({ type: "text", value: " " }),
      b.children.unshift({
        type: "element",
        tagName: "input",
        properties: { type: "checkbox", checked: a.checked, disabled: !0 },
        children: [],
      }),
      (c.className = ["task-list-item"]);
  }
  let d = -1;
  for (; ++d < u.length; ) {
    const p = u[d];
    (o || d !== 0 || p.type !== "element" || p.tagName !== "p") &&
      h.push({
        type: "text",
        value: `
`,
      }),
      p.type === "element" && p.tagName === "p" && !o
        ? h.push(...p.children)
        : h.push(p);
  }
  const y = u[u.length - 1];
  y &&
    (o || y.type !== "element" || y.tagName !== "p") &&
    h.push({
      type: "text",
      value: `
`,
    });
  const m = { type: "element", tagName: "li", properties: c, children: h };
  return n.patch(a, m), n.applyData(a, m);
}
function jT(n) {
  let a = !1;
  if (n.type === "list") {
    a = n.spread || !1;
    const r = n.children;
    let u = -1;
    for (; !a && ++u < r.length; ) a = c0(r[u]);
  }
  return a;
}
function c0(n) {
  const a = n.spread;
  return a ?? n.children.length > 1;
}
function LT(n, a) {
  const r = {},
    u = n.all(a);
  let o = -1;
  for (
    typeof a.start == "number" && a.start !== 1 && (r.start = a.start);
    ++o < u.length;

  ) {
    const h = u[o];
    if (
      h.type === "element" &&
      h.tagName === "li" &&
      h.properties &&
      Array.isArray(h.properties.className) &&
      h.properties.className.includes("task-list-item")
    ) {
      r.className = ["contains-task-list"];
      break;
    }
  }
  const c = {
    type: "element",
    tagName: a.ordered ? "ol" : "ul",
    properties: r,
    children: n.wrap(u, !0),
  };
  return n.patch(a, c), n.applyData(a, c);
}
function UT(n, a) {
  const r = {
    type: "element",
    tagName: "p",
    properties: {},
    children: n.all(a),
  };
  return n.patch(a, r), n.applyData(a, r);
}
function BT(n, a) {
  const r = { type: "root", children: n.wrap(n.all(a)) };
  return n.patch(a, r), n.applyData(a, r);
}
function HT(n, a) {
  const r = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: n.all(a),
  };
  return n.patch(a, r), n.applyData(a, r);
}
function qT(n, a) {
  const r = n.all(a),
    u = r.shift(),
    o = [];
  if (u) {
    const h = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: n.wrap([u], !0),
    };
    n.patch(a.children[0], h), o.push(h);
  }
  if (r.length > 0) {
    const h = {
        type: "element",
        tagName: "tbody",
        properties: {},
        children: n.wrap(r, !0),
      },
      d = vf(a.children[1]),
      y = Gg(a.children[a.children.length - 1]);
    d && y && (h.position = { start: d, end: y }), o.push(h);
  }
  const c = {
    type: "element",
    tagName: "table",
    properties: {},
    children: n.wrap(o, !0),
  };
  return n.patch(a, c), n.applyData(a, c);
}
function YT(n, a, r) {
  const u = r ? r.children : void 0,
    c = (u ? u.indexOf(a) : 1) === 0 ? "th" : "td",
    h = r && r.type === "table" ? r.align : void 0,
    d = h ? h.length : a.children.length;
  let y = -1;
  const m = [];
  for (; ++y < d; ) {
    const b = a.children[y],
      S = {},
      v = h ? h[y] : void 0;
    v && (S.align = v);
    let T = { type: "element", tagName: c, properties: S, children: [] };
    b && ((T.children = n.all(b)), n.patch(b, T), (T = n.applyData(b, T))),
      m.push(T);
  }
  const p = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: n.wrap(m, !0),
  };
  return n.patch(a, p), n.applyData(a, p);
}
function VT(n, a) {
  const r = {
    type: "element",
    tagName: "td",
    properties: {},
    children: n.all(a),
  };
  return n.patch(a, r), n.applyData(a, r);
}
const Dy = 9,
  My = 32;
function XT(n) {
  const a = String(n),
    r = /\r?\n|\r/g;
  let u = r.exec(a),
    o = 0;
  const c = [];
  for (; u; )
    c.push(ky(a.slice(o, u.index), o > 0, !0), u[0]),
      (o = u.index + u[0].length),
      (u = r.exec(a));
  return c.push(ky(a.slice(o), o > 0, !1)), c.join("");
}
function ky(n, a, r) {
  let u = 0,
    o = n.length;
  if (a) {
    let c = n.codePointAt(u);
    for (; c === Dy || c === My; ) u++, (c = n.codePointAt(u));
  }
  if (r) {
    let c = n.codePointAt(o - 1);
    for (; c === Dy || c === My; ) o--, (c = n.codePointAt(o - 1));
  }
  return o > u ? n.slice(u, o) : "";
}
function GT(n, a) {
  const r = { type: "text", value: XT(String(a.value)) };
  return n.patch(a, r), n.applyData(a, r);
}
function QT(n, a) {
  const r = { type: "element", tagName: "hr", properties: {}, children: [] };
  return n.patch(a, r), n.applyData(a, r);
}
const ZT = {
  blockquote: ST,
  break: ET,
  code: wT,
  delete: TT,
  emphasis: AT,
  footnoteReference: CT,
  heading: zT,
  html: OT,
  imageReference: RT,
  image: NT,
  inlineCode: _T,
  linkReference: DT,
  link: MT,
  listItem: kT,
  list: LT,
  paragraph: UT,
  root: BT,
  strong: HT,
  table: qT,
  tableCell: VT,
  tableRow: YT,
  text: GT,
  thematicBreak: QT,
  toml: Au,
  yaml: Au,
  definition: Au,
  footnoteDefinition: Au,
};
function Au() {}
const f0 = -1,
  Zu = 0,
  Gi = 1,
  Lu = 2,
  Cf = 3,
  zf = 4,
  Of = 5,
  Rf = 6,
  h0 = 7,
  d0 = 8,
  jy = typeof self == "object" ? self : globalThis,
  FT = (n, a) => {
    const r = (o, c) => (n.set(c, o), o),
      u = (o) => {
        if (n.has(o)) return n.get(o);
        const [c, h] = a[o];
        switch (c) {
          case Zu:
          case f0:
            return r(h, o);
          case Gi: {
            const d = r([], o);
            for (const y of h) d.push(u(y));
            return d;
          }
          case Lu: {
            const d = r({}, o);
            for (const [y, m] of h) d[u(y)] = u(m);
            return d;
          }
          case Cf:
            return r(new Date(h), o);
          case zf: {
            const { source: d, flags: y } = h;
            return r(new RegExp(d, y), o);
          }
          case Of: {
            const d = r(new Map(), o);
            for (const [y, m] of h) d.set(u(y), u(m));
            return d;
          }
          case Rf: {
            const d = r(new Set(), o);
            for (const y of h) d.add(u(y));
            return d;
          }
          case h0: {
            const { name: d, message: y } = h;
            return r(new jy[d](y), o);
          }
          case d0:
            return r(BigInt(h), o);
          case "BigInt":
            return r(Object(BigInt(h)), o);
          case "ArrayBuffer":
            return r(new Uint8Array(h).buffer, h);
          case "DataView": {
            const { buffer: d } = new Uint8Array(h);
            return r(new DataView(d), h);
          }
        }
        return r(new jy[c](h), o);
      };
    return u;
  },
  Ly = (n) => FT(new Map(), n)(0),
  Na = "",
  { toString: KT } = {},
  { keys: JT } = Object,
  Yi = (n) => {
    const a = typeof n;
    if (a !== "object" || !n) return [Zu, a];
    const r = KT.call(n).slice(8, -1);
    switch (r) {
      case "Array":
        return [Gi, Na];
      case "Object":
        return [Lu, Na];
      case "Date":
        return [Cf, Na];
      case "RegExp":
        return [zf, Na];
      case "Map":
        return [Of, Na];
      case "Set":
        return [Rf, Na];
      case "DataView":
        return [Gi, r];
    }
    return r.includes("Array")
      ? [Gi, r]
      : r.includes("Error")
      ? [h0, r]
      : [Lu, r];
  },
  Cu = ([n, a]) => n === Zu && (a === "function" || a === "symbol"),
  IT = (n, a, r, u) => {
    const o = (h, d) => {
        const y = u.push(h) - 1;
        return r.set(d, y), y;
      },
      c = (h) => {
        if (r.has(h)) return r.get(h);
        let [d, y] = Yi(h);
        switch (d) {
          case Zu: {
            let p = h;
            switch (y) {
              case "bigint":
                (d = d0), (p = h.toString());
                break;
              case "function":
              case "symbol":
                if (n) throw new TypeError("unable to serialize " + y);
                p = null;
                break;
              case "undefined":
                return o([f0], h);
            }
            return o([d, p], h);
          }
          case Gi: {
            if (y) {
              let S = h;
              return (
                y === "DataView"
                  ? (S = new Uint8Array(h.buffer))
                  : y === "ArrayBuffer" && (S = new Uint8Array(h)),
                o([y, [...S]], h)
              );
            }
            const p = [],
              b = o([d, p], h);
            for (const S of h) p.push(c(S));
            return b;
          }
          case Lu: {
            if (y)
              switch (y) {
                case "BigInt":
                  return o([y, h.toString()], h);
                case "Boolean":
                case "Number":
                case "String":
                  return o([y, h.valueOf()], h);
              }
            if (a && "toJSON" in h) return c(h.toJSON());
            const p = [],
              b = o([d, p], h);
            for (const S of JT(h))
              (n || !Cu(Yi(h[S]))) && p.push([c(S), c(h[S])]);
            return b;
          }
          case Cf:
            return o([d, h.toISOString()], h);
          case zf: {
            const { source: p, flags: b } = h;
            return o([d, { source: p, flags: b }], h);
          }
          case Of: {
            const p = [],
              b = o([d, p], h);
            for (const [S, v] of h)
              (n || !(Cu(Yi(S)) || Cu(Yi(v)))) && p.push([c(S), c(v)]);
            return b;
          }
          case Rf: {
            const p = [],
              b = o([d, p], h);
            for (const S of h) (n || !Cu(Yi(S))) && p.push(c(S));
            return b;
          }
        }
        const { message: m } = h;
        return o([d, { name: y, message: m }], h);
      };
    return c;
  },
  Uy = (n, { json: a, lossy: r } = {}) => {
    const u = [];
    return IT(!(a || r), !!a, new Map(), u)(n), u;
  },
  Uu =
    typeof structuredClone == "function"
      ? (n, a) =>
          a && ("json" in a || "lossy" in a) ? Ly(Uy(n, a)) : structuredClone(n)
      : (n, a) => Ly(Uy(n, a));
function $T(n, a) {
  const r = [{ type: "text", value: "↩" }];
  return (
    a > 1 &&
      r.push({
        type: "element",
        tagName: "sup",
        properties: {},
        children: [{ type: "text", value: String(a) }],
      }),
    r
  );
}
function PT(n, a) {
  return "Back to reference " + (n + 1) + (a > 1 ? "-" + a : "");
}
function WT(n) {
  const a =
      typeof n.options.clobberPrefix == "string"
        ? n.options.clobberPrefix
        : "user-content-",
    r = n.options.footnoteBackContent || $T,
    u = n.options.footnoteBackLabel || PT,
    o = n.options.footnoteLabel || "Footnotes",
    c = n.options.footnoteLabelTagName || "h2",
    h = n.options.footnoteLabelProperties || { className: ["sr-only"] },
    d = [];
  let y = -1;
  for (; ++y < n.footnoteOrder.length; ) {
    const m = n.footnoteById.get(n.footnoteOrder[y]);
    if (!m) continue;
    const p = n.all(m),
      b = String(m.identifier).toUpperCase(),
      S = qa(b.toLowerCase());
    let v = 0;
    const T = [],
      O = n.footnoteCounts.get(b);
    for (; O !== void 0 && ++v <= O; ) {
      T.length > 0 && T.push({ type: "text", value: " " });
      let Z = typeof r == "string" ? r : r(y, v);
      typeof Z == "string" && (Z = { type: "text", value: Z }),
        T.push({
          type: "element",
          tagName: "a",
          properties: {
            href: "#" + a + "fnref-" + S + (v > 1 ? "-" + v : ""),
            dataFootnoteBackref: "",
            ariaLabel: typeof u == "string" ? u : u(y, v),
            className: ["data-footnote-backref"],
          },
          children: Array.isArray(Z) ? Z : [Z],
        });
    }
    const N = p[p.length - 1];
    if (N && N.type === "element" && N.tagName === "p") {
      const Z = N.children[N.children.length - 1];
      Z && Z.type === "text"
        ? (Z.value += " ")
        : N.children.push({ type: "text", value: " " }),
        N.children.push(...T);
    } else p.push(...T);
    const _ = {
      type: "element",
      tagName: "li",
      properties: { id: a + "fn-" + S },
      children: n.wrap(p, !0),
    };
    n.patch(m, _), d.push(_);
  }
  if (d.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: c,
          properties: { ...Uu(h), id: "footnote-label" },
          children: [{ type: "text", value: o }],
        },
        {
          type: "text",
          value: `
`,
        },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: n.wrap(d, !0),
        },
        {
          type: "text",
          value: `
`,
        },
      ],
    };
}
const m0 = function (n) {
  if (n == null) return lA;
  if (typeof n == "function") return Fu(n);
  if (typeof n == "object") return Array.isArray(n) ? eA(n) : tA(n);
  if (typeof n == "string") return nA(n);
  throw new Error("Expected function, string, or object as test");
};
function eA(n) {
  const a = [];
  let r = -1;
  for (; ++r < n.length; ) a[r] = m0(n[r]);
  return Fu(u);
  function u(...o) {
    let c = -1;
    for (; ++c < a.length; ) if (a[c].apply(this, o)) return !0;
    return !1;
  }
}
function tA(n) {
  const a = n;
  return Fu(r);
  function r(u) {
    const o = u;
    let c;
    for (c in n) if (o[c] !== a[c]) return !1;
    return !0;
  }
}
function nA(n) {
  return Fu(a);
  function a(r) {
    return r && r.type === n;
  }
}
function Fu(n) {
  return a;
  function a(r, u, o) {
    return !!(
      aA(r) && n.call(this, r, typeof u == "number" ? u : void 0, o || void 0)
    );
  }
}
function lA() {
  return !0;
}
function aA(n) {
  return n !== null && typeof n == "object" && "type" in n;
}
const p0 = [],
  iA = !0,
  By = !1,
  rA = "skip";
function uA(n, a, r, u) {
  let o;
  typeof a == "function" && typeof r != "function"
    ? ((u = r), (r = a))
    : (o = a);
  const c = m0(o),
    h = u ? -1 : 1;
  d(n, void 0, [])();
  function d(y, m, p) {
    const b = y && typeof y == "object" ? y : {};
    if (typeof b.type == "string") {
      const v =
        typeof b.tagName == "string"
          ? b.tagName
          : typeof b.name == "string"
          ? b.name
          : void 0;
      Object.defineProperty(S, "name", {
        value: "node (" + (y.type + (v ? "<" + v + ">" : "")) + ")",
      });
    }
    return S;
    function S() {
      let v = p0,
        T,
        O,
        N;
      if (
        (!a || c(y, m, p[p.length - 1] || void 0)) &&
        ((v = oA(r(y, p))), v[0] === By)
      )
        return v;
      if ("children" in y && y.children) {
        const _ = y;
        if (_.children && v[0] !== rA)
          for (
            O = (u ? _.children.length : -1) + h, N = p.concat(_);
            O > -1 && O < _.children.length;

          ) {
            const Z = _.children[O];
            if (((T = d(Z, O, N)()), T[0] === By)) return T;
            O = typeof T[1] == "number" ? T[1] : O + h;
          }
      }
      return v;
    }
  }
}
function oA(n) {
  return Array.isArray(n)
    ? n
    : typeof n == "number"
    ? [iA, n]
    : n == null
    ? p0
    : [n];
}
function y0(n, a, r, u) {
  let o, c, h;
  typeof a == "function" && typeof r != "function"
    ? ((c = void 0), (h = a), (o = r))
    : ((c = a), (h = r), (o = u)),
    uA(n, c, d, o);
  function d(y, m) {
    const p = m[m.length - 1],
      b = p ? p.children.indexOf(y) : void 0;
    return h(y, b, p);
  }
}
const Pc = {}.hasOwnProperty,
  sA = {};
function cA(n, a) {
  const r = a || sA,
    u = new Map(),
    o = new Map(),
    c = new Map(),
    h = { ...ZT, ...r.handlers },
    d = {
      all: m,
      applyData: hA,
      definitionById: u,
      footnoteById: o,
      footnoteCounts: c,
      footnoteOrder: [],
      handlers: h,
      one: y,
      options: r,
      patch: fA,
      wrap: mA,
    };
  return (
    y0(n, function (p) {
      if (p.type === "definition" || p.type === "footnoteDefinition") {
        const b = p.type === "definition" ? u : o,
          S = String(p.identifier).toUpperCase();
        b.has(S) || b.set(S, p);
      }
    }),
    d
  );
  function y(p, b) {
    const S = p.type,
      v = d.handlers[S];
    if (Pc.call(d.handlers, S) && v) return v(d, p, b);
    if (d.options.passThrough && d.options.passThrough.includes(S)) {
      if ("children" in p) {
        const { children: O, ...N } = p,
          _ = Uu(N);
        return (_.children = d.all(p)), _;
      }
      return Uu(p);
    }
    return (d.options.unknownHandler || dA)(d, p, b);
  }
  function m(p) {
    const b = [];
    if ("children" in p) {
      const S = p.children;
      let v = -1;
      for (; ++v < S.length; ) {
        const T = d.one(S[v], p);
        if (T) {
          if (
            v &&
            S[v - 1].type === "break" &&
            (!Array.isArray(T) && T.type === "text" && (T.value = Hy(T.value)),
            !Array.isArray(T) && T.type === "element")
          ) {
            const O = T.children[0];
            O && O.type === "text" && (O.value = Hy(O.value));
          }
          Array.isArray(T) ? b.push(...T) : b.push(T);
        }
      }
    }
    return b;
  }
}
function fA(n, a) {
  n.position && (a.position = K2(n));
}
function hA(n, a) {
  let r = a;
  if (n && n.data) {
    const u = n.data.hName,
      o = n.data.hChildren,
      c = n.data.hProperties;
    if (typeof u == "string")
      if (r.type === "element") r.tagName = u;
      else {
        const h = "children" in r ? r.children : [r];
        r = { type: "element", tagName: u, properties: {}, children: h };
      }
    r.type === "element" && c && Object.assign(r.properties, Uu(c)),
      "children" in r &&
        r.children &&
        o !== null &&
        o !== void 0 &&
        (r.children = o);
  }
  return r;
}
function dA(n, a) {
  const r = a.data || {},
    u =
      "value" in a && !(Pc.call(r, "hProperties") || Pc.call(r, "hChildren"))
        ? { type: "text", value: a.value }
        : {
            type: "element",
            tagName: "div",
            properties: {},
            children: n.all(a),
          };
  return n.patch(a, u), n.applyData(a, u);
}
function mA(n, a) {
  const r = [];
  let u = -1;
  for (
    a &&
    r.push({
      type: "text",
      value: `
`,
    });
    ++u < n.length;

  )
    u &&
      r.push({
        type: "text",
        value: `
`,
      }),
      r.push(n[u]);
  return (
    a &&
      n.length > 0 &&
      r.push({
        type: "text",
        value: `
`,
      }),
    r
  );
}
function Hy(n) {
  let a = 0,
    r = n.charCodeAt(a);
  for (; r === 9 || r === 32; ) a++, (r = n.charCodeAt(a));
  return n.slice(a);
}
function qy(n, a) {
  const r = cA(n, a),
    u = r.one(n, void 0),
    o = WT(r),
    c = Array.isArray(u)
      ? { type: "root", children: u }
      : u || { type: "root", children: [] };
  return (
    o &&
      c.children.push(
        {
          type: "text",
          value: `
`,
        },
        o
      ),
    c
  );
}
function pA(n, a) {
  return n && "run" in n
    ? async function (r, u) {
        const o = qy(r, { file: u, ...a });
        await n.run(o, u);
      }
    : function (r, u) {
        return qy(r, { file: u, ...(n || a) });
      };
}
function Yy(n) {
  if (n) throw n;
}
var Cc, Vy;
function yA() {
  if (Vy) return Cc;
  Vy = 1;
  var n = Object.prototype.hasOwnProperty,
    a = Object.prototype.toString,
    r = Object.defineProperty,
    u = Object.getOwnPropertyDescriptor,
    o = function (m) {
      return typeof Array.isArray == "function"
        ? Array.isArray(m)
        : a.call(m) === "[object Array]";
    },
    c = function (m) {
      if (!m || a.call(m) !== "[object Object]") return !1;
      var p = n.call(m, "constructor"),
        b =
          m.constructor &&
          m.constructor.prototype &&
          n.call(m.constructor.prototype, "isPrototypeOf");
      if (m.constructor && !p && !b) return !1;
      var S;
      for (S in m);
      return typeof S > "u" || n.call(m, S);
    },
    h = function (m, p) {
      r && p.name === "__proto__"
        ? r(m, p.name, {
            enumerable: !0,
            configurable: !0,
            value: p.newValue,
            writable: !0,
          })
        : (m[p.name] = p.newValue);
    },
    d = function (m, p) {
      if (p === "__proto__")
        if (n.call(m, p)) {
          if (u) return u(m, p).value;
        } else return;
      return m[p];
    };
  return (
    (Cc = function y() {
      var m,
        p,
        b,
        S,
        v,
        T,
        O = arguments[0],
        N = 1,
        _ = arguments.length,
        Z = !1;
      for (
        typeof O == "boolean" && ((Z = O), (O = arguments[1] || {}), (N = 2)),
          (O == null || (typeof O != "object" && typeof O != "function")) &&
            (O = {});
        N < _;
        ++N
      )
        if (((m = arguments[N]), m != null))
          for (p in m)
            (b = d(O, p)),
              (S = d(m, p)),
              O !== S &&
                (Z && S && (c(S) || (v = o(S)))
                  ? (v
                      ? ((v = !1), (T = b && o(b) ? b : []))
                      : (T = b && c(b) ? b : {}),
                    h(O, { name: p, newValue: y(Z, T, S) }))
                  : typeof S < "u" && h(O, { name: p, newValue: S }));
      return O;
    }),
    Cc
  );
}
var gA = yA();
const zc = tf(gA);
function Wc(n) {
  if (typeof n != "object" || n === null) return !1;
  const a = Object.getPrototypeOf(n);
  return (
    (a === null ||
      a === Object.prototype ||
      Object.getPrototypeOf(a) === null) &&
    !(Symbol.toStringTag in n) &&
    !(Symbol.iterator in n)
  );
}
function bA() {
  const n = [],
    a = { run: r, use: u };
  return a;
  function r(...o) {
    let c = -1;
    const h = o.pop();
    if (typeof h != "function")
      throw new TypeError("Expected function as last argument, not " + h);
    d(null, ...o);
    function d(y, ...m) {
      const p = n[++c];
      let b = -1;
      if (y) {
        h(y);
        return;
      }
      for (; ++b < o.length; )
        (m[b] === null || m[b] === void 0) && (m[b] = o[b]);
      (o = m), p ? vA(p, d)(...m) : h(null, ...m);
    }
  }
  function u(o) {
    if (typeof o != "function")
      throw new TypeError("Expected `middelware` to be a function, not " + o);
    return n.push(o), a;
  }
}
function vA(n, a) {
  let r;
  return u;
  function u(...h) {
    const d = n.length > h.length;
    let y;
    d && h.push(o);
    try {
      y = n.apply(this, h);
    } catch (m) {
      const p = m;
      if (d && r) throw p;
      return o(p);
    }
    d ||
      (y && y.then && typeof y.then == "function"
        ? y.then(c, o)
        : y instanceof Error
        ? o(y)
        : c(y));
  }
  function o(h, ...d) {
    r || ((r = !0), a(h, ...d));
  }
  function c(h) {
    o(null, h);
  }
}
const yn = { basename: xA, dirname: SA, extname: EA, join: wA, sep: "/" };
function xA(n, a) {
  if (a !== void 0 && typeof a != "string")
    throw new TypeError('"ext" argument must be a string');
  nr(n);
  let r = 0,
    u = -1,
    o = n.length,
    c;
  if (a === void 0 || a.length === 0 || a.length > n.length) {
    for (; o--; )
      if (n.codePointAt(o) === 47) {
        if (c) {
          r = o + 1;
          break;
        }
      } else u < 0 && ((c = !0), (u = o + 1));
    return u < 0 ? "" : n.slice(r, u);
  }
  if (a === n) return "";
  let h = -1,
    d = a.length - 1;
  for (; o--; )
    if (n.codePointAt(o) === 47) {
      if (c) {
        r = o + 1;
        break;
      }
    } else
      h < 0 && ((c = !0), (h = o + 1)),
        d > -1 &&
          (n.codePointAt(o) === a.codePointAt(d--)
            ? d < 0 && (u = o)
            : ((d = -1), (u = h)));
  return r === u ? (u = h) : u < 0 && (u = n.length), n.slice(r, u);
}
function SA(n) {
  if ((nr(n), n.length === 0)) return ".";
  let a = -1,
    r = n.length,
    u;
  for (; --r; )
    if (n.codePointAt(r) === 47) {
      if (u) {
        a = r;
        break;
      }
    } else u || (u = !0);
  return a < 0
    ? n.codePointAt(0) === 47
      ? "/"
      : "."
    : a === 1 && n.codePointAt(0) === 47
    ? "//"
    : n.slice(0, a);
}
function EA(n) {
  nr(n);
  let a = n.length,
    r = -1,
    u = 0,
    o = -1,
    c = 0,
    h;
  for (; a--; ) {
    const d = n.codePointAt(a);
    if (d === 47) {
      if (h) {
        u = a + 1;
        break;
      }
      continue;
    }
    r < 0 && ((h = !0), (r = a + 1)),
      d === 46 ? (o < 0 ? (o = a) : c !== 1 && (c = 1)) : o > -1 && (c = -1);
  }
  return o < 0 || r < 0 || c === 0 || (c === 1 && o === r - 1 && o === u + 1)
    ? ""
    : n.slice(o, r);
}
function wA(...n) {
  let a = -1,
    r;
  for (; ++a < n.length; )
    nr(n[a]), n[a] && (r = r === void 0 ? n[a] : r + "/" + n[a]);
  return r === void 0 ? "." : TA(r);
}
function TA(n) {
  nr(n);
  const a = n.codePointAt(0) === 47;
  let r = AA(n, !a);
  return (
    r.length === 0 && !a && (r = "."),
    r.length > 0 && n.codePointAt(n.length - 1) === 47 && (r += "/"),
    a ? "/" + r : r
  );
}
function AA(n, a) {
  let r = "",
    u = 0,
    o = -1,
    c = 0,
    h = -1,
    d,
    y;
  for (; ++h <= n.length; ) {
    if (h < n.length) d = n.codePointAt(h);
    else {
      if (d === 47) break;
      d = 47;
    }
    if (d === 47) {
      if (!(o === h - 1 || c === 1))
        if (o !== h - 1 && c === 2) {
          if (
            r.length < 2 ||
            u !== 2 ||
            r.codePointAt(r.length - 1) !== 46 ||
            r.codePointAt(r.length - 2) !== 46
          ) {
            if (r.length > 2) {
              if (((y = r.lastIndexOf("/")), y !== r.length - 1)) {
                y < 0
                  ? ((r = ""), (u = 0))
                  : ((r = r.slice(0, y)),
                    (u = r.length - 1 - r.lastIndexOf("/"))),
                  (o = h),
                  (c = 0);
                continue;
              }
            } else if (r.length > 0) {
              (r = ""), (u = 0), (o = h), (c = 0);
              continue;
            }
          }
          a && ((r = r.length > 0 ? r + "/.." : ".."), (u = 2));
        } else
          r.length > 0
            ? (r += "/" + n.slice(o + 1, h))
            : (r = n.slice(o + 1, h)),
            (u = h - o - 1);
      (o = h), (c = 0);
    } else d === 46 && c > -1 ? c++ : (c = -1);
  }
  return r;
}
function nr(n) {
  if (typeof n != "string")
    throw new TypeError("Path must be a string. Received " + JSON.stringify(n));
}
const CA = { cwd: zA };
function zA() {
  return "/";
}
function ef(n) {
  return !!(
    n !== null &&
    typeof n == "object" &&
    "href" in n &&
    n.href &&
    "protocol" in n &&
    n.protocol &&
    n.auth === void 0
  );
}
function OA(n) {
  if (typeof n == "string") n = new URL(n);
  else if (!ef(n)) {
    const a = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' +
        n +
        "`"
    );
    throw ((a.code = "ERR_INVALID_ARG_TYPE"), a);
  }
  if (n.protocol !== "file:") {
    const a = new TypeError("The URL must be of scheme file");
    throw ((a.code = "ERR_INVALID_URL_SCHEME"), a);
  }
  return RA(n);
}
function RA(n) {
  if (n.hostname !== "") {
    const u = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw ((u.code = "ERR_INVALID_FILE_URL_HOST"), u);
  }
  const a = n.pathname;
  let r = -1;
  for (; ++r < a.length; )
    if (a.codePointAt(r) === 37 && a.codePointAt(r + 1) === 50) {
      const u = a.codePointAt(r + 2);
      if (u === 70 || u === 102) {
        const o = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw ((o.code = "ERR_INVALID_FILE_URL_PATH"), o);
      }
    }
  return decodeURIComponent(a);
}
const Oc = ["history", "path", "basename", "stem", "extname", "dirname"];
class g0 {
  constructor(a) {
    let r;
    a
      ? ef(a)
        ? (r = { path: a })
        : typeof a == "string" || NA(a)
        ? (r = { value: a })
        : (r = a)
      : (r = {}),
      (this.cwd = "cwd" in r ? "" : CA.cwd()),
      (this.data = {}),
      (this.history = []),
      (this.messages = []),
      this.value,
      this.map,
      this.result,
      this.stored;
    let u = -1;
    for (; ++u < Oc.length; ) {
      const c = Oc[u];
      c in r &&
        r[c] !== void 0 &&
        r[c] !== null &&
        (this[c] = c === "history" ? [...r[c]] : r[c]);
    }
    let o;
    for (o in r) Oc.includes(o) || (this[o] = r[o]);
  }
  get basename() {
    return typeof this.path == "string" ? yn.basename(this.path) : void 0;
  }
  set basename(a) {
    Nc(a, "basename"),
      Rc(a, "basename"),
      (this.path = yn.join(this.dirname || "", a));
  }
  get dirname() {
    return typeof this.path == "string" ? yn.dirname(this.path) : void 0;
  }
  set dirname(a) {
    Xy(this.basename, "dirname"), (this.path = yn.join(a || "", this.basename));
  }
  get extname() {
    return typeof this.path == "string" ? yn.extname(this.path) : void 0;
  }
  set extname(a) {
    if ((Rc(a, "extname"), Xy(this.dirname, "extname"), a)) {
      if (a.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (a.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = yn.join(this.dirname, this.stem + (a || ""));
  }
  get path() {
    return this.history[this.history.length - 1];
  }
  set path(a) {
    ef(a) && (a = OA(a)),
      Nc(a, "path"),
      this.path !== a && this.history.push(a);
  }
  get stem() {
    return typeof this.path == "string"
      ? yn.basename(this.path, this.extname)
      : void 0;
  }
  set stem(a) {
    Nc(a, "stem"),
      Rc(a, "stem"),
      (this.path = yn.join(this.dirname || "", a + (this.extname || "")));
  }
  fail(a, r, u) {
    const o = this.message(a, r, u);
    throw ((o.fatal = !0), o);
  }
  info(a, r, u) {
    const o = this.message(a, r, u);
    return (o.fatal = void 0), o;
  }
  message(a, r, u) {
    const o = new bt(a, r, u);
    return (
      this.path && ((o.name = this.path + ":" + o.name), (o.file = this.path)),
      (o.fatal = !1),
      this.messages.push(o),
      o
    );
  }
  toString(a) {
    return this.value === void 0
      ? ""
      : typeof this.value == "string"
      ? this.value
      : new TextDecoder(a || void 0).decode(this.value);
  }
}
function Rc(n, a) {
  if (n && n.includes(yn.sep))
    throw new Error(
      "`" + a + "` cannot be a path: did not expect `" + yn.sep + "`"
    );
}
function Nc(n, a) {
  if (!n) throw new Error("`" + a + "` cannot be empty");
}
function Xy(n, a) {
  if (!n) throw new Error("Setting `" + a + "` requires `path` to be set too");
}
function NA(n) {
  return !!(
    n &&
    typeof n == "object" &&
    "byteLength" in n &&
    "byteOffset" in n
  );
}
const _A = function (n) {
    const u = this.constructor.prototype,
      o = u[n],
      c = function () {
        return o.apply(c, arguments);
      };
    return Object.setPrototypeOf(c, u), c;
  },
  DA = {}.hasOwnProperty;
class Nf extends _A {
  constructor() {
    super("copy"),
      (this.Compiler = void 0),
      (this.Parser = void 0),
      (this.attachers = []),
      (this.compiler = void 0),
      (this.freezeIndex = -1),
      (this.frozen = void 0),
      (this.namespace = {}),
      (this.parser = void 0),
      (this.transformers = bA());
  }
  copy() {
    const a = new Nf();
    let r = -1;
    for (; ++r < this.attachers.length; ) {
      const u = this.attachers[r];
      a.use(...u);
    }
    return a.data(zc(!0, {}, this.namespace)), a;
  }
  data(a, r) {
    return typeof a == "string"
      ? arguments.length === 2
        ? (Mc("data", this.frozen), (this.namespace[a] = r), this)
        : (DA.call(this.namespace, a) && this.namespace[a]) || void 0
      : a
      ? (Mc("data", this.frozen), (this.namespace = a), this)
      : this.namespace;
  }
  freeze() {
    if (this.frozen) return this;
    const a = this;
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [r, ...u] = this.attachers[this.freezeIndex];
      if (u[0] === !1) continue;
      u[0] === !0 && (u[0] = void 0);
      const o = r.call(a, ...u);
      typeof o == "function" && this.transformers.use(o);
    }
    return (
      (this.frozen = !0), (this.freezeIndex = Number.POSITIVE_INFINITY), this
    );
  }
  parse(a) {
    this.freeze();
    const r = zu(a),
      u = this.parser || this.Parser;
    return _c("parse", u), u(String(r), r);
  }
  process(a, r) {
    const u = this;
    return (
      this.freeze(),
      _c("process", this.parser || this.Parser),
      Dc("process", this.compiler || this.Compiler),
      r ? o(void 0, r) : new Promise(o)
    );
    function o(c, h) {
      const d = zu(a),
        y = u.parse(d);
      u.run(y, d, function (p, b, S) {
        if (p || !b || !S) return m(p);
        const v = b,
          T = u.stringify(v, S);
        jA(T) ? (S.value = T) : (S.result = T), m(p, S);
      });
      function m(p, b) {
        p || !b ? h(p) : c ? c(b) : r(void 0, b);
      }
    }
  }
  processSync(a) {
    let r = !1,
      u;
    return (
      this.freeze(),
      _c("processSync", this.parser || this.Parser),
      Dc("processSync", this.compiler || this.Compiler),
      this.process(a, o),
      Qy("processSync", "process", r),
      u
    );
    function o(c, h) {
      (r = !0), Yy(c), (u = h);
    }
  }
  run(a, r, u) {
    Gy(a), this.freeze();
    const o = this.transformers;
    return (
      !u && typeof r == "function" && ((u = r), (r = void 0)),
      u ? c(void 0, u) : new Promise(c)
    );
    function c(h, d) {
      const y = zu(r);
      o.run(a, y, m);
      function m(p, b, S) {
        const v = b || a;
        p ? d(p) : h ? h(v) : u(void 0, v, S);
      }
    }
  }
  runSync(a, r) {
    let u = !1,
      o;
    return this.run(a, r, c), Qy("runSync", "run", u), o;
    function c(h, d) {
      Yy(h), (o = d), (u = !0);
    }
  }
  stringify(a, r) {
    this.freeze();
    const u = zu(r),
      o = this.compiler || this.Compiler;
    return Dc("stringify", o), Gy(a), o(a, u);
  }
  use(a, ...r) {
    const u = this.attachers,
      o = this.namespace;
    if ((Mc("use", this.frozen), a != null))
      if (typeof a == "function") y(a, r);
      else if (typeof a == "object") Array.isArray(a) ? d(a) : h(a);
      else throw new TypeError("Expected usable value, not `" + a + "`");
    return this;
    function c(m) {
      if (typeof m == "function") y(m, []);
      else if (typeof m == "object")
        if (Array.isArray(m)) {
          const [p, ...b] = m;
          y(p, b);
        } else h(m);
      else throw new TypeError("Expected usable value, not `" + m + "`");
    }
    function h(m) {
      if (!("plugins" in m) && !("settings" in m))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      d(m.plugins), m.settings && (o.settings = zc(!0, o.settings, m.settings));
    }
    function d(m) {
      let p = -1;
      if (m != null)
        if (Array.isArray(m))
          for (; ++p < m.length; ) {
            const b = m[p];
            c(b);
          }
        else throw new TypeError("Expected a list of plugins, not `" + m + "`");
    }
    function y(m, p) {
      let b = -1,
        S = -1;
      for (; ++b < u.length; )
        if (u[b][0] === m) {
          S = b;
          break;
        }
      if (S === -1) u.push([m, ...p]);
      else if (p.length > 0) {
        let [v, ...T] = p;
        const O = u[S][1];
        Wc(O) && Wc(v) && (v = zc(!0, O, v)), (u[S] = [m, v, ...T]);
      }
    }
  }
}
const MA = new Nf().freeze();
function _c(n, a) {
  if (typeof a != "function")
    throw new TypeError("Cannot `" + n + "` without `parser`");
}
function Dc(n, a) {
  if (typeof a != "function")
    throw new TypeError("Cannot `" + n + "` without `compiler`");
}
function Mc(n, a) {
  if (a)
    throw new Error(
      "Cannot call `" +
        n +
        "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function Gy(n) {
  if (!Wc(n) || typeof n.type != "string")
    throw new TypeError("Expected node, got `" + n + "`");
}
function Qy(n, a, r) {
  if (!r)
    throw new Error("`" + n + "` finished async. Use `" + a + "` instead");
}
function zu(n) {
  return kA(n) ? n : new g0(n);
}
function kA(n) {
  return !!(n && typeof n == "object" && "message" in n && "messages" in n);
}
function jA(n) {
  return typeof n == "string" || LA(n);
}
function LA(n) {
  return !!(
    n &&
    typeof n == "object" &&
    "byteLength" in n &&
    "byteOffset" in n
  );
}
const UA = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md",
  Zy = [],
  Fy = { allowDangerousHtml: !0 },
  BA = /^(https?|ircs?|mailto|xmpp)$/i,
  HA = [
    { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
    { from: "allowDangerousHtml", id: "remove-buggy-html-in-markdown-parser" },
    {
      from: "allowNode",
      id: "replace-allownode-allowedtypes-and-disallowedtypes",
      to: "allowElement",
    },
    {
      from: "allowedTypes",
      id: "replace-allownode-allowedtypes-and-disallowedtypes",
      to: "allowedElements",
    },
    {
      from: "disallowedTypes",
      id: "replace-allownode-allowedtypes-and-disallowedtypes",
      to: "disallowedElements",
    },
    { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
    { from: "includeElementIndex", id: "#remove-includeelementindex" },
    {
      from: "includeNodeIndex",
      id: "change-includenodeindex-to-includeelementindex",
    },
    { from: "linkTarget", id: "remove-linktarget" },
    {
      from: "plugins",
      id: "change-plugins-to-remarkplugins",
      to: "remarkPlugins",
    },
    { from: "rawSourcePos", id: "#remove-rawsourcepos" },
    {
      from: "renderers",
      id: "change-renderers-to-components",
      to: "components",
    },
    { from: "source", id: "change-source-to-children", to: "children" },
    { from: "sourcePos", id: "#remove-sourcepos" },
    { from: "transformImageUri", id: "#add-urltransform", to: "urlTransform" },
    { from: "transformLinkUri", id: "#add-urltransform", to: "urlTransform" },
  ];
function qA(n) {
  const a = YA(n),
    r = VA(n);
  return XA(a.runSync(a.parse(r), r), n);
}
function YA(n) {
  const a = n.rehypePlugins || Zy,
    r = n.remarkPlugins || Zy,
    u = n.remarkRehypeOptions ? { ...n.remarkRehypeOptions, ...Fy } : Fy;
  return MA().use(xT).use(r).use(pA, u).use(a);
}
function VA(n) {
  const a = n.children || "",
    r = new g0();
  return typeof a == "string" && (r.value = a), r;
}
function XA(n, a) {
  const r = a.allowedElements,
    u = a.allowElement,
    o = a.components,
    c = a.disallowedElements,
    h = a.skipHtml,
    d = a.unwrapDisallowed,
    y = a.urlTransform || GA;
  for (const p of HA)
    Object.hasOwn(a, p.from) &&
      ("" +
        p.from +
        (p.to ? "use `" + p.to + "` instead" : "remove it") +
        UA +
        p.id,
      void 0);
  return (
    a.className &&
      (n = {
        type: "element",
        tagName: "div",
        properties: { className: a.className },
        children: n.type === "root" ? n.children : [n],
      }),
    y0(n, m),
    W2(n, {
      Fragment: R.Fragment,
      components: o,
      ignoreInvalidStyle: !0,
      jsx: R.jsx,
      jsxs: R.jsxs,
      passKeys: !0,
      passNode: !0,
    })
  );
  function m(p, b, S) {
    if (p.type === "raw" && S && typeof b == "number")
      return (
        h
          ? S.children.splice(b, 1)
          : (S.children[b] = { type: "text", value: p.value }),
        b
      );
    if (p.type === "element") {
      let v;
      for (v in wc)
        if (Object.hasOwn(wc, v) && Object.hasOwn(p.properties, v)) {
          const T = p.properties[v],
            O = wc[v];
          (O === null || O.includes(p.tagName)) &&
            (p.properties[v] = y(String(T || ""), v, p));
        }
    }
    if (p.type === "element") {
      let v = r ? !r.includes(p.tagName) : c ? c.includes(p.tagName) : !1;
      if (
        (!v && u && typeof b == "number" && (v = !u(p, b, S)),
        v && S && typeof b == "number")
      )
        return (
          d && p.children
            ? S.children.splice(b, 1, ...p.children)
            : S.children.splice(b, 1),
          b
        );
    }
  }
}
function GA(n) {
  const a = n.indexOf(":"),
    r = n.indexOf("?"),
    u = n.indexOf("#"),
    o = n.indexOf("/");
  return a === -1 ||
    (o !== -1 && a > o) ||
    (r !== -1 && a > r) ||
    (u !== -1 && a > u) ||
    BA.test(n.slice(0, a))
    ? n
    : "";
}
const QA = ({ message: n }) => {
    const a = n.role === "user";
    return R.jsxs("div", {
      className: `flex gap-3 ${a ? "flex-row-reverse" : ""} animate-slide-up`,
      children: [
        !a &&
          R.jsx("div", {
            className:
              "flex-shrink-0 w-8 h-8 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center",
            children: R.jsx("span", {
              className: "text-sm font-bold text-primary-400",
              children: "ㅋB",
            }),
          }),
        R.jsx("div", {
          className: `
          max-w-[80%] md:max-w-[70%]
          ${a ? "bubble-user" : "bubble-ai"}
        `,
          children: a
            ? R.jsx("p", {
                className: "text-sm leading-relaxed whitespace-pre-wrap",
                children: n.content,
              })
            : R.jsx("div", {
                className:
                  "prose prose-sm max-w-none prose-p:my-1 prose-headings:mb-2 prose-headings:mt-3 prose-li:my-0.5 prose-ul:my-1 prose-ol:my-1 text-gray-800",
                children: R.jsx(qA, { children: n.content }),
              }),
        }),
      ],
    });
  },
  Ky = ({ showNewChatButton: n = !1 }) => {
    const [a, r] = q.useState(""),
      {
        sendMessage: u,
        isSending: o,
        currentSessionId: c,
        createSession: h,
      } = er(),
      d = async (p) => {
        if ((p.preventDefault(), !a.trim() || o)) return;
        const b = a.trim();
        r(""), c || (await h()), await u(b);
      },
      y = (p) => {
        p.key === "Enter" && !p.shiftKey && (p.preventDefault(), d(p));
      },
      m = async () => {
        await h();
      };
    return R.jsx("div", {
      className: "p-4 pb-6",
      children: R.jsxs("div", {
        className: "max-w-3xl mx-auto space-y-3",
        children: [
          n &&
            R.jsx("div", {
              className: "flex justify-center",
              children: R.jsxs("button", {
                onClick: m,
                className:
                  "inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-gray-200 text-sm text-gray-600 shadow-sm hover:shadow-input hover:border-primary-300 transition-all",
                children: ["새 대화 시작하기", R.jsx(vx, { size: 16 })],
              }),
            }),
          R.jsx("form", {
            onSubmit: d,
            children: R.jsxs("div", {
              className:
                "relative flex items-center bg-white rounded-full shadow-input border border-gray-100 overflow-hidden",
              children: [
                R.jsx("textarea", {
                  value: a,
                  onChange: (p) => r(p.target.value),
                  onKeyDown: y,
                  placeholder: "무엇이든 물어보세요.",
                  rows: 1,
                  className:
                    "flex-1 px-6 py-4 resize-none outline-none text-gray-800 placeholder-gray-400 max-h-32 overflow-y-auto bg-transparent",
                  style: { minHeight: "56px" },
                }),
                R.jsx("div", {
                  className: "pr-3",
                  children: R.jsx("button", {
                    type: "submit",
                    disabled: !a.trim() || o,
                    className: `
                  btn-send
                  ${!a.trim() || o ? "opacity-50 cursor-not-allowed" : ""}
                `,
                    children: o
                      ? R.jsx("div", {
                          className:
                            "w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin",
                        })
                      : R.jsx(Sx, { size: 18, className: "text-white ml-0.5" }),
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  ZA = () => {
    const { messages: n, isSending: a } = er(),
      r = q.useRef(null);
    return (
      q.useEffect(() => {
        var u;
        (u = r.current) == null || u.scrollIntoView({ behavior: "smooth" });
      }, [n, a]),
      R.jsx("div", {
        className: "flex-1 overflow-y-auto px-4 py-6",
        children: R.jsxs("div", {
          className: "max-w-3xl mx-auto space-y-6",
          children: [
            n.map((u, o) => R.jsx(QA, { message: u }, o)),
            a &&
              R.jsxs("div", {
                className: "flex gap-3 animate-slide-up",
                children: [
                  R.jsx("div", {
                    className:
                      "flex-shrink-0 w-8 h-8 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center",
                    children: R.jsx("span", {
                      className: "text-sm font-bold text-primary-400",
                      children: "ㅋB",
                    }),
                  }),
                  R.jsxs("div", {
                    className: "bubble-ai flex items-center gap-1",
                    children: [
                      R.jsx("span", {
                        className: "text-sm text-gray-500",
                        children: "생각중",
                      }),
                      R.jsxs("span", {
                        className: "flex gap-0.5 ml-1",
                        children: [
                          R.jsx("span", {
                            className:
                              "w-1 h-1 bg-primary-400 rounded-full animate-bounce-dot",
                            style: { animationDelay: "0ms" },
                          }),
                          R.jsx("span", {
                            className:
                              "w-1 h-1 bg-primary-400 rounded-full animate-bounce-dot",
                            style: { animationDelay: "160ms" },
                          }),
                          R.jsx("span", {
                            className:
                              "w-1 h-1 bg-primary-400 rounded-full animate-bounce-dot",
                            style: { animationDelay: "320ms" },
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            R.jsx("div", { ref: r }),
          ],
        }),
      })
    );
  },
  FA = [
    { id: "1", text: "오늘 급식 뭐야?" },
    { id: "2", text: "홍길동 교수님 수업 알려줘" },
    { id: "3", text: "행정실이 어디야?" },
  ],
  KA = () => {
    const { createSession: n, sendMessage: a } = er(),
      r = async (u) => {
        await n(), await a(u);
      };
    return R.jsxs("div", {
      className: "flex-1 flex flex-col items-center justify-center px-4 py-8",
      children: [
        R.jsx("div", {
          className: "text-center mb-12",
          children: R.jsxs("h1", {
            className:
              "text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed",
            children: [
              "안녕, 난 강남대학교",
              R.jsx("br", {}),
              "AI 강냉봇이야!",
            ],
          }),
        }),
        R.jsx("div", {
          className: "flex flex-wrap justify-center gap-3 max-w-2xl",
          children: FA.map((u) =>
            R.jsx(
              "button",
              {
                onClick: () => r(u.text),
                className: "chip-suggestion",
                children: u.text,
              },
              u.id
            )
          ),
        }),
      ],
    });
  },
  JA = () => {
    const { messages: n } = er(),
      a = n.length > 0;
    return R.jsx(T2, {
      children: a
        ? R.jsxs(R.Fragment, {
            children: [R.jsx(ZA, {}), R.jsx(Ky, { showNewChatButton: !0 })],
          })
        : R.jsxs(R.Fragment, { children: [R.jsx(KA, {}), R.jsx(Ky, {})] }),
    });
  },
  IA = () => {
    const n = af(),
      [a] = ox(),
      { login: r, isAuthenticated: u, isLoading: o } = pf();
    q.useEffect(() => {
      const d = a.get("token");
      d &&
        r(d).then(() => {
          n("/", { replace: !0 });
        });
    }, [a, r, n]),
      q.useEffect(() => {
        u && n("/", { replace: !0 });
      }, [u, n]);
    const c = () => {
        const d = `${window.location.origin}/login`;
        s2(d);
      },
      h = () => {
        n("/");
      };
    return o
      ? R.jsx("div", {
          className: "min-h-screen flex items-center justify-center",
          children: R.jsx("div", {
            className:
              "w-8 h-8 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin",
          }),
        })
      : R.jsxs("div", {
          className:
            "min-h-screen flex flex-col items-center justify-center px-4",
          children: [
            R.jsxs("div", {
              className: "absolute inset-0 overflow-hidden pointer-events-none",
              children: [
                R.jsx("div", {
                  className:
                    "absolute -top-40 -right-40 w-80 h-80 bg-primary-200/30 rounded-full blur-3xl",
                }),
                R.jsx("div", {
                  className:
                    "absolute -bottom-40 -left-40 w-80 h-80 bg-primary-300/20 rounded-full blur-3xl",
                }),
              ],
            }),
            R.jsxs("div", {
              className: "relative z-10 w-full max-w-sm",
              children: [
                R.jsxs("div", {
                  className: "text-center mb-8",
                  children: [
                    R.jsx("div", {
                      className:
                        "inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-primary-400 to-primary-600 shadow-2xl shadow-primary-500/40 mb-6",
                      children: R.jsx("span", {
                        className: "text-white text-4xl font-bold",
                        children: "강",
                      }),
                    }),
                    R.jsx("h1", {
                      className: "text-3xl font-bold text-navy-800 mb-2",
                      children: "강냉봇",
                    }),
                    R.jsx("p", {
                      className: "text-navy-500",
                      children: "강남대학교 AI 도우미",
                    }),
                  ],
                }),
                R.jsxs("div", {
                  className:
                    "bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 space-y-4",
                  children: [
                    R.jsxs(Gc, {
                      onClick: c,
                      variant: "secondary",
                      size: "lg",
                      className: "w-full gap-3",
                      children: [
                        R.jsxs("svg", {
                          className: "w-5 h-5",
                          viewBox: "0 0 24 24",
                          children: [
                            R.jsx("path", {
                              fill: "currentColor",
                              d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",
                            }),
                            R.jsx("path", {
                              fill: "currentColor",
                              d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",
                            }),
                            R.jsx("path", {
                              fill: "currentColor",
                              d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",
                            }),
                            R.jsx("path", {
                              fill: "currentColor",
                              d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",
                            }),
                          ],
                        }),
                        "Google 계정으로 시작하기",
                      ],
                    }),
                    R.jsxs("div", {
                      className: "relative",
                      children: [
                        R.jsx("div", {
                          className: "absolute inset-0 flex items-center",
                          children: R.jsx("div", {
                            className: "w-full border-t border-navy-200",
                          }),
                        }),
                        R.jsx("div", {
                          className: "relative flex justify-center text-sm",
                          children: R.jsx("span", {
                            className: "px-2 bg-white text-navy-400",
                            children: "또는",
                          }),
                        }),
                      ],
                    }),
                    R.jsx(Gc, {
                      onClick: h,
                      variant: "ghost",
                      size: "lg",
                      className: "w-full",
                      children: "게스트로 둘러보기",
                    }),
                  ],
                }),
                R.jsx("p", {
                  className: "text-center text-xs text-navy-400 mt-6",
                  children: "로그인하면 대화 기록이 저장됩니다.",
                }),
              ],
            }),
          ],
        });
  };
function $A() {
  return R.jsx(lx, {
    children: R.jsxs(Mv, {
      children: [
        R.jsx(jc, { path: "/", element: R.jsx(JA, {}) }),
        R.jsx(jc, { path: "/login", element: R.jsx(IA, {}) }),
      ],
    }),
  });
}
Yb.createRoot(document.getElementById("root")).render(
  R.jsx(q.StrictMode, { children: R.jsx($A, {}) })
);
