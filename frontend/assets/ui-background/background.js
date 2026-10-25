var df = { exports: {} }, ns = {};
var fg;
function qT() {
  if (fg) return ns;
  fg = 1;
  var a = /* @__PURE__ */ Symbol.for("react.transitional.element"), l = /* @__PURE__ */ Symbol.for("react.fragment");
  function r(u, c, h) {
    var d = null;
    if (h !== void 0 && (d = "" + h), c.key !== void 0 && (d = "" + c.key), "key" in c) {
      h = {};
      for (var m in c)
        m !== "key" && (h[m] = c[m]);
    } else h = c;
    return c = h.ref, {
      $$typeof: a,
      type: u,
      key: d,
      ref: c !== void 0 ? c : null,
      props: h
    };
  }
  return ns.Fragment = l, ns.jsx = r, ns.jsxs = r, ns;
}
var dg;
function XT() {
  return dg || (dg = 1, df.exports = qT()), df.exports;
}
var St = XT(), hf = { exports: {} }, ft = {};
var hg;
function QT() {
  if (hg) return ft;
  hg = 1;
  var a = /* @__PURE__ */ Symbol.for("react.transitional.element"), l = /* @__PURE__ */ Symbol.for("react.portal"), r = /* @__PURE__ */ Symbol.for("react.fragment"), u = /* @__PURE__ */ Symbol.for("react.strict_mode"), c = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.consumer"), d = /* @__PURE__ */ Symbol.for("react.context"), m = /* @__PURE__ */ Symbol.for("react.forward_ref"), b = /* @__PURE__ */ Symbol.for("react.suspense"), v = /* @__PURE__ */ Symbol.for("react.memo"), g = /* @__PURE__ */ Symbol.for("react.lazy"), y = /* @__PURE__ */ Symbol.for("react.activity"), T = /* @__PURE__ */ Symbol.for("react.view_transition"), _ = Symbol.iterator;
  function R(A) {
    return A === null || typeof A != "object" ? null : (A = _ && A[_] || A["@@iterator"], typeof A == "function" ? A : null);
  }
  var V = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, N = Object.assign, j = {};
  function H(A, L, k) {
    this.props = A, this.context = L, this.refs = j, this.updater = k || V;
  }
  H.prototype.isReactComponent = {}, H.prototype.setState = function(A, L) {
    if (typeof A != "object" && typeof A != "function" && A != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, A, L, "setState");
  }, H.prototype.forceUpdate = function(A) {
    this.updater.enqueueForceUpdate(this, A, "forceUpdate");
  };
  function q() {
  }
  q.prototype = H.prototype;
  function X(A, L, k) {
    this.props = A, this.context = L, this.refs = j, this.updater = k || V;
  }
  var nt = X.prototype = new q();
  nt.constructor = X, N(nt, H.prototype), nt.isPureReactComponent = !0;
  var ot = Array.isArray;
  function Q() {
  }
  var w = { H: null, A: null, T: null, S: null }, it = Object.prototype.hasOwnProperty;
  function I(A, L, k) {
    var at = k.ref;
    return {
      $$typeof: a,
      type: A,
      key: L,
      ref: at !== void 0 ? at : null,
      props: k
    };
  }
  function pt(A, L) {
    return I(A.type, L, A.props);
  }
  function Tt(A) {
    return typeof A == "object" && A !== null && A.$$typeof === a;
  }
  function kt(A) {
    var L = { "=": "=0", ":": "=2" };
    return "$" + A.replace(/[=:]/g, function(k) {
      return L[k];
    });
  }
  var Xt = /\/+/g;
  function Ct(A, L) {
    return typeof A == "object" && A !== null && A.key != null ? kt("" + A.key) : L.toString(36);
  }
  function G(A) {
    switch (A.status) {
      case "fulfilled":
        return A.value;
      case "rejected":
        throw A.reason;
      default:
        switch (typeof A.status == "string" ? A.then(Q, Q) : (A.status = "pending", A.then(
          function(L) {
            A.status === "pending" && (A.status = "fulfilled", A.value = L);
          },
          function(L) {
            A.status === "pending" && (A.status = "rejected", A.reason = L);
          }
        )), A.status) {
          case "fulfilled":
            return A.value;
          case "rejected":
            throw A.reason;
        }
    }
    throw A;
  }
  function lt(A, L, k, at, Et) {
    var ut = typeof A;
    (ut === "undefined" || ut === "boolean") && (A = null);
    var Mt = !1;
    if (A === null) Mt = !0;
    else
      switch (ut) {
        case "bigint":
        case "string":
        case "number":
          Mt = !0;
          break;
        case "object":
          switch (A.$$typeof) {
            case a:
            case l:
              Mt = !0;
              break;
            case g:
              return Mt = A._init, lt(
                Mt(A._payload),
                L,
                k,
                at,
                Et
              );
          }
      }
    if (Mt)
      return Et = Et(A), Mt = at === "" ? "." + Ct(A, 0) : at, ot(Et) ? (k = "", Mt != null && (k = Mt.replace(Xt, "$&/") + "/"), lt(Et, L, k, "", function(_e) {
        return _e;
      })) : Et != null && (Tt(Et) && (Et = pt(
        Et,
        k + (Et.key == null || A && A.key === Et.key ? "" : ("" + Et.key).replace(
          Xt,
          "$&/"
        ) + "/") + Mt
      )), L.push(Et)), 1;
    Mt = 0;
    var $ = at === "" ? "." : at + ":";
    if (ot(A))
      for (var rt = 0; rt < A.length; rt++)
        at = A[rt], ut = $ + Ct(at, rt), Mt += lt(
          at,
          L,
          k,
          ut,
          Et
        );
    else if (rt = R(A), typeof rt == "function")
      for (A = rt.call(A), rt = 0; !(at = A.next()).done; )
        at = at.value, ut = $ + Ct(at, rt++), Mt += lt(
          at,
          L,
          k,
          ut,
          Et
        );
    else if (ut === "object") {
      if (typeof A.then == "function")
        return lt(
          G(A),
          L,
          k,
          at,
          Et
        );
      throw L = String(A), Error(
        "Objects are not valid as a React child (found: " + (L === "[object Object]" ? "object with keys {" + Object.keys(A).join(", ") + "}" : L) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Mt;
  }
  function J(A, L, k) {
    if (A == null) return A;
    var at = [], Et = 0;
    return lt(A, at, "", "", function(ut) {
      return L.call(k, ut, Et++);
    }), at;
  }
  function dt(A) {
    if (A._status === -1) {
      var L = A._result, k = L();
      k.then(
        function(at) {
          (A._status === 0 || A._status === -1) && (A._status = 1, A._result = at, k.status === void 0 && (k.status = "fulfilled", k.value = at));
        },
        function(at) {
          (A._status === 0 || A._status === -1) && (A._status = 2, A._result = at, k.status === void 0 && (k.status = "rejected", k.reason = at));
        }
      ), A._status === -1 && (A._status = 0, A._result = k);
    }
    if (A._status === 1) return A._result.default;
    throw A._result;
  }
  var Y = typeof reportError == "function" ? reportError : function(A) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var L = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof A == "object" && A !== null && typeof A.message == "string" ? String(A.message) : String(A),
        error: A
      });
      if (!window.dispatchEvent(L)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", A);
      return;
    }
    console.error(A);
  };
  function Jt(A) {
    var L = w.T, k = {};
    k.types = L !== null ? L.types : null, w.T = k;
    try {
      var at = A(), Et = w.S;
      Et !== null && Et(k, at), typeof at == "object" && at !== null && typeof at.then == "function" && at.then(Q, Y);
    } catch (ut) {
      Y(ut);
    } finally {
      L !== null && k.types !== null && (L.types = k.types), w.T = L;
    }
  }
  function Ce(A) {
    var L = w.T;
    if (L !== null) {
      var k = L.types;
      k === null ? L.types = [A] : k.indexOf(A) === -1 && k.push(A);
    } else Jt(Ce.bind(null, A));
  }
  var dn = {
    map: J,
    forEach: function(A, L, k) {
      J(
        A,
        function() {
          L.apply(this, arguments);
        },
        k
      );
    },
    count: function(A) {
      var L = 0;
      return J(A, function() {
        L++;
      }), L;
    },
    toArray: function(A) {
      return J(A, function(L) {
        return L;
      }) || [];
    },
    only: function(A) {
      if (!Tt(A))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return A;
    }
  };
  return ft.Activity = y, ft.Children = dn, ft.Component = H, ft.Fragment = r, ft.Profiler = c, ft.PureComponent = X, ft.StrictMode = u, ft.Suspense = b, ft.ViewTransition = T, ft.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w, ft.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(A) {
      return w.H.useMemoCache(A);
    }
  }, ft.addTransitionType = Ce, ft.cache = function(A) {
    return function() {
      return A.apply(null, arguments);
    };
  }, ft.cacheSignal = function() {
    return null;
  }, ft.cloneElement = function(A, L, k) {
    if (A == null)
      throw Error(
        "The argument must be a React element, but you passed " + A + "."
      );
    var at = N({}, A.props), Et = A.key;
    if (L != null)
      for (ut in L.key !== void 0 && (Et = "" + L.key), L)
        !it.call(L, ut) || ut === "key" || ut === "__self" || ut === "__source" || ut === "ref" && L.ref === void 0 || (at[ut] = L[ut]);
    var ut = arguments.length - 2;
    if (ut === 1) at.children = k;
    else if (1 < ut) {
      for (var Mt = Array(ut), $ = 0; $ < ut; $++)
        Mt[$] = arguments[$ + 2];
      at.children = Mt;
    }
    return I(A.type, Et, at);
  }, ft.createContext = function(A) {
    return A = {
      $$typeof: d,
      _currentValue: A,
      _currentValue2: A,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, A.Provider = A, A.Consumer = {
      $$typeof: h,
      _context: A
    }, A;
  }, ft.createElement = function(A, L, k) {
    var at, Et = {}, ut = null;
    if (L != null)
      for (at in L.key !== void 0 && (ut = "" + L.key), L)
        it.call(L, at) && at !== "key" && at !== "__self" && at !== "__source" && (Et[at] = L[at]);
    var Mt = arguments.length - 2;
    if (Mt === 1) Et.children = k;
    else if (1 < Mt) {
      for (var $ = Array(Mt), rt = 0; rt < Mt; rt++)
        $[rt] = arguments[rt + 2];
      Et.children = $;
    }
    if (A && A.defaultProps)
      for (at in Mt = A.defaultProps, Mt)
        Et[at] === void 0 && (Et[at] = Mt[at]);
    return I(A, ut, Et);
  }, ft.createRef = function() {
    return { current: null };
  }, ft.forwardRef = function(A) {
    return { $$typeof: m, render: A };
  }, ft.isValidElement = Tt, ft.lazy = function(A) {
    return {
      $$typeof: g,
      _payload: { _status: -1, _result: A },
      _init: dt
    };
  }, ft.memo = function(A, L) {
    return {
      $$typeof: v,
      type: A,
      compare: L === void 0 ? null : L
    };
  }, ft.startTransition = Jt, ft.unstable_useCacheRefresh = function() {
    return w.H.useCacheRefresh();
  }, ft.use = function(A) {
    return w.H.use(A);
  }, ft.useActionState = function(A, L, k) {
    return w.H.useActionState(A, L, k);
  }, ft.useCallback = function(A, L) {
    return w.H.useCallback(A, L);
  }, ft.useContext = function(A) {
    return w.H.useContext(A);
  }, ft.useDebugValue = function() {
  }, ft.useDeferredValue = function(A, L) {
    return w.H.useDeferredValue(A, L);
  }, ft.useEffect = function(A, L) {
    return w.H.useEffect(A, L);
  }, ft.useEffectEvent = function(A) {
    return w.H.useEffectEvent(A);
  }, ft.useId = function() {
    return w.H.useId();
  }, ft.useImperativeHandle = function(A, L, k) {
    return w.H.useImperativeHandle(A, L, k);
  }, ft.useInsertionEffect = function(A, L) {
    return w.H.useInsertionEffect(A, L);
  }, ft.useLayoutEffect = function(A, L) {
    return w.H.useLayoutEffect(A, L);
  }, ft.useMemo = function(A, L) {
    return w.H.useMemo(A, L);
  }, ft.useOptimistic = function(A, L) {
    return w.H.useOptimistic(A, L);
  }, ft.useReducer = function(A, L, k) {
    return w.H.useReducer(A, L, k);
  }, ft.useRef = function(A) {
    return w.H.useRef(A);
  }, ft.useState = function(A) {
    return w.H.useState(A);
  }, ft.useSyncExternalStore = function(A, L, k) {
    return w.H.useSyncExternalStore(
      A,
      L,
      k
    );
  }, ft.useTransition = function() {
    return w.H.useTransition();
  }, ft.version = "19.3.1", ft;
}
var mg;
function rd() {
  return mg || (mg = 1, hf.exports = QT()), hf.exports;
}
var K = rd(), mf = { exports: {} }, is = {}, pf = { exports: {} }, yf = {};
var pg;
function ZT() {
  return pg || (pg = 1, (function(a) {
    function l(G, lt) {
      var J = G.length;
      G.push(lt);
      t: for (; 0 < J; ) {
        var dt = J - 1 >>> 1, Y = G[dt];
        if (0 < c(Y, lt))
          G[dt] = lt, G[J] = Y, J = dt;
        else break t;
      }
    }
    function r(G) {
      return G.length === 0 ? null : G[0];
    }
    function u(G) {
      if (G.length === 0) return null;
      var lt = G[0], J = G.pop();
      if (J !== lt) {
        G[0] = J;
        t: for (var dt = 0, Y = G.length, Jt = Y >>> 1; dt < Jt; ) {
          var Ce = 2 * (dt + 1) - 1, dn = G[Ce], A = Ce + 1, L = G[A];
          if (0 > c(dn, J))
            A < Y && 0 > c(L, dn) ? (G[dt] = L, G[A] = J, dt = A) : (G[dt] = dn, G[Ce] = J, dt = Ce);
          else if (A < Y && 0 > c(L, J))
            G[dt] = L, G[A] = J, dt = A;
          else break t;
        }
      }
      return lt;
    }
    function c(G, lt) {
      var J = G.sortIndex - lt.sortIndex;
      return J !== 0 ? J : G.id - lt.id;
    }
    if (a.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var h = performance;
      a.unstable_now = function() {
        return h.now();
      };
    } else {
      var d = Date, m = d.now();
      a.unstable_now = function() {
        return d.now() - m;
      };
    }
    var b = [], v = [], g = 1, y = null, T = 3, _ = !1, R = !1, V = !1, N = !1, j = typeof setTimeout == "function" ? setTimeout : null, H = typeof clearTimeout == "function" ? clearTimeout : null, q = typeof setImmediate < "u" ? setImmediate : null;
    function X(G) {
      for (var lt = r(v); lt !== null; ) {
        if (lt.callback === null) u(v);
        else if (lt.startTime <= G)
          u(v), lt.sortIndex = lt.expirationTime, l(b, lt);
        else break;
        lt = r(v);
      }
    }
    function nt(G) {
      if (V = !1, X(G), !R)
        if (r(b) !== null)
          R = !0, ot || (ot = !0, Tt());
        else {
          var lt = r(v);
          lt !== null && Ct(nt, lt.startTime - G);
        }
    }
    var ot = !1, Q = -1, w = 5, it = -1;
    function I() {
      return N ? !0 : !(a.unstable_now() - it < w);
    }
    function pt() {
      if (N = !1, ot) {
        var G = a.unstable_now();
        it = G;
        var lt = !0;
        try {
          t: {
            R = !1, V && (V = !1, H(Q), Q = -1), _ = !0;
            var J = T;
            try {
              e: {
                for (X(G), y = r(b); y !== null && !(y.expirationTime > G && I()); ) {
                  var dt = y.callback;
                  if (typeof dt == "function") {
                    y.callback = null, T = y.priorityLevel;
                    var Y = dt(
                      y.expirationTime <= G
                    );
                    if (G = a.unstable_now(), typeof Y == "function") {
                      y.callback = Y, X(G), lt = !0;
                      break e;
                    }
                    y === r(b) && u(b), X(G);
                  } else u(b);
                  y = r(b);
                }
                if (y !== null) lt = !0;
                else {
                  var Jt = r(v);
                  Jt !== null && Ct(
                    nt,
                    Jt.startTime - G
                  ), lt = !1;
                }
              }
              break t;
            } finally {
              y = null, T = J, _ = !1;
            }
            lt = void 0;
          }
        } finally {
          lt ? Tt() : ot = !1;
        }
      }
    }
    var Tt;
    if (typeof q == "function")
      Tt = function() {
        q(pt);
      };
    else if (typeof MessageChannel < "u") {
      var kt = new MessageChannel(), Xt = kt.port2;
      kt.port1.onmessage = pt, Tt = function() {
        Xt.postMessage(null);
      };
    } else
      Tt = function() {
        j(pt, 0);
      };
    function Ct(G, lt) {
      Q = j(function() {
        G(a.unstable_now());
      }, lt);
    }
    a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(G) {
      G.callback = null;
    }, a.unstable_forceFrameRate = function(G) {
      0 > G || 125 < G ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : w = 0 < G ? Math.floor(1e3 / G) : 5;
    }, a.unstable_getCurrentPriorityLevel = function() {
      return T;
    }, a.unstable_next = function(G) {
      switch (T) {
        case 1:
        case 2:
        case 3:
          var lt = 3;
          break;
        default:
          lt = T;
      }
      var J = T;
      T = lt;
      try {
        return G();
      } finally {
        T = J;
      }
    }, a.unstable_requestPaint = function() {
      N = !0;
    }, a.unstable_runWithPriority = function(G, lt) {
      switch (G) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          G = 3;
      }
      var J = T;
      T = G;
      try {
        return lt();
      } finally {
        T = J;
      }
    }, a.unstable_scheduleCallback = function(G, lt, J) {
      var dt = a.unstable_now();
      switch (typeof J == "object" && J !== null ? (J = J.delay, J = typeof J == "number" && 0 < J ? dt + J : dt) : J = dt, G) {
        case 1:
          var Y = -1;
          break;
        case 2:
          Y = 250;
          break;
        case 5:
          Y = 1073741823;
          break;
        case 4:
          Y = 1e4;
          break;
        default:
          Y = 5e3;
      }
      return Y = J + Y, G = {
        id: g++,
        callback: lt,
        priorityLevel: G,
        startTime: J,
        expirationTime: Y,
        sortIndex: -1
      }, J > dt ? (G.sortIndex = J, l(v, G), r(b) === null && G === r(v) && (V ? (H(Q), Q = -1) : V = !0, Ct(nt, J - dt))) : (G.sortIndex = Y, l(b, G), R || _ || (R = !0, ot || (ot = !0, Tt()))), G;
    }, a.unstable_shouldYield = I, a.unstable_wrapCallback = function(G) {
      var lt = T;
      return function() {
        var J = T;
        T = lt;
        try {
          return G.apply(this, arguments);
        } finally {
          T = J;
        }
      };
    };
  })(yf)), yf;
}
var yg;
function KT() {
  return yg || (yg = 1, pf.exports = ZT()), pf.exports;
}
var gf = { exports: {} }, pe = {};
var gg;
function kT() {
  if (gg) return pe;
  gg = 1;
  var a = rd();
  function l(g) {
    var y = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var T = 2; T < arguments.length; T++)
        y += "&args[]=" + encodeURIComponent(arguments[T]);
    }
    return "Minified React error #" + g + "; visit " + y + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function r() {
  }
  var u = {
    d: {
      f: r,
      r: function() {
        throw Error(l(522));
      },
      D: r,
      C: r,
      L: r,
      m: r,
      X: r,
      S: r,
      M: r
    },
    p: 0,
    findDOMNode: null
  }, c = /* @__PURE__ */ Symbol.for("react.portal"), h = /* @__PURE__ */ Symbol.for("react.recoverable"), d = /* @__PURE__ */ Symbol.for("react.optimistic_key");
  function m(g, y, T) {
    var _ = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: _ == null ? null : _ === d ? d : "" + _,
      children: g,
      containerInfo: y,
      implementation: T
    };
  }
  var b = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function v(g, y) {
    if (g === "font") return "";
    if (typeof y == "string")
      return y === "use-credentials" ? y : "";
  }
  return pe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u, pe.browser = function(g) {
    return { $$typeof: h, _reason: g };
  }, pe.createPortal = function(g, y) {
    var T = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)
      throw Error(l(299));
    return m(g, y, null, T);
  }, pe.flushSync = function(g) {
    var y = b.T, T = u.p;
    try {
      if (b.T = null, u.p = 2, g) return g();
    } finally {
      b.T = y, u.p = T, u.d.f();
    }
  }, pe.preconnect = function(g, y) {
    typeof g == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, u.d.C(g, y));
  }, pe.prefetchDNS = function(g) {
    typeof g == "string" && u.d.D(g);
  }, pe.preinit = function(g, y) {
    if (typeof g == "string" && y && typeof y.as == "string") {
      var T = y.as, _ = v(T, y.crossOrigin), R = typeof y.integrity == "string" ? y.integrity : void 0, V = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
      T === "style" ? u.d.S(
        g,
        typeof y.precedence == "string" ? y.precedence : void 0,
        {
          crossOrigin: _,
          integrity: R,
          fetchPriority: V
        }
      ) : T === "script" && u.d.X(g, {
        crossOrigin: _,
        integrity: R,
        fetchPriority: V,
        nonce: typeof y.nonce == "string" ? y.nonce : void 0
      });
    }
  }, pe.preinitModule = function(g, y) {
    if (typeof g == "string")
      if (typeof y == "object" && y !== null) {
        if (y.as == null || y.as === "script") {
          var T = v(
            y.as,
            y.crossOrigin
          );
          u.d.M(g, {
            crossOrigin: T,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
            nonce: typeof y.nonce == "string" ? y.nonce : void 0,
            fetchPriority: typeof y.fetchPriority == "string" ? y.fetchPriority : void 0
          });
        }
      } else y == null && u.d.M(g);
  }, pe.preload = function(g, y) {
    if (typeof g == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
      var T = y.as, _ = v(T, y.crossOrigin);
      u.d.L(g, T, {
        crossOrigin: _,
        integrity: typeof y.integrity == "string" ? y.integrity : void 0,
        nonce: typeof y.nonce == "string" ? y.nonce : void 0,
        type: typeof y.type == "string" ? y.type : void 0,
        fetchPriority: typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
        referrerPolicy: typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
        imageSrcSet: typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
        imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
        media: typeof y.media == "string" ? y.media : void 0
      });
    }
  }, pe.preloadModule = function(g, y) {
    if (typeof g == "string")
      if (y) {
        var T = v(y.as, y.crossOrigin);
        u.d.m(g, {
          as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
          crossOrigin: T,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0,
          nonce: typeof y.nonce == "string" ? y.nonce : void 0,
          fetchPriority: typeof y.fetchPriority == "string" ? y.fetchPriority : void 0
        });
      } else u.d.m(g);
  }, pe.requestFormReset = function(g) {
    u.d.r(g);
  }, pe.unstable_batchedUpdates = function(g, y) {
    return g(y);
  }, pe.useFormState = function(g, y, T) {
    return b.H.useFormState(g, y, T);
  }, pe.useFormStatus = function() {
    return b.H.useHostTransitionStatus();
  }, pe.version = "19.3.1", pe;
}
var vg;
function JT() {
  if (vg) return gf.exports;
  vg = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (l) {
        console.error(l);
      }
  }
  return a(), gf.exports = kT(), gf.exports;
}
var bg;
function PT() {
  if (bg) return is;
  bg = 1;
  var a = KT(), l = rd(), r = JT();
  function u(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function c(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function h(t) {
    for (var e = t, n = e; n && !n.alternate; )
      e = n, (e.flags & 4098) !== 0 && (t = e.return), n = e.return;
    for (; e.return; ) e = e.return;
    return e.tag === 3 ? t : null;
  }
  function d(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function m(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function b(t) {
    if (h(t) !== t)
      throw Error(u(188));
  }
  function v(t) {
    var e = t.alternate;
    if (!e) {
      if (e = h(t), e === null) throw Error(u(188));
      return e !== t ? null : t;
    }
    for (var n = t, i = e; ; ) {
      var s = n.return;
      if (s === null) break;
      var o = s.alternate;
      if (o === null) {
        if (i = s.return, i !== null) {
          n = i;
          continue;
        }
        break;
      }
      if (s.child === o.child) {
        for (o = s.child; o; ) {
          if (o === n) return b(s), t;
          if (o === i) return b(s), e;
          o = o.sibling;
        }
        throw Error(u(188));
      }
      if (n.return !== i.return) n = s, i = o;
      else {
        for (var f = !1, p = s.child; p; ) {
          if (p === n) {
            f = !0, n = s, i = o;
            break;
          }
          if (p === i) {
            f = !0, i = s, n = o;
            break;
          }
          p = p.sibling;
        }
        if (!f) {
          for (p = o.child; p; ) {
            if (p === n) {
              f = !0, n = o, i = s;
              break;
            }
            if (p === i) {
              f = !0, i = o, n = s;
              break;
            }
            p = p.sibling;
          }
          if (!f) throw Error(u(189));
        }
      }
      if (n.alternate !== i) throw Error(u(190));
    }
    if (n.tag !== 3) throw Error(u(188));
    return n.stateNode.current === n ? t : e;
  }
  function g(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = g(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  function y(t, e, n, i, s, o) {
    for (; t !== null; ) {
      if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && n(t, i, s, o) || (t.tag !== 22 || t.memoizedState === null) && (e || t.tag !== 5 && t.tag !== 27) && y(
        t.child,
        e,
        n,
        i,
        s,
        o
      ))
        return !0;
      t = t.sibling;
    }
    return !1;
  }
  function T(t) {
    for (t = t.return; t !== null; ) {
      if (t.tag === 3 || t.tag === 5 || t.tag === 27) return t;
      t = t.return;
    }
    return null;
  }
  function _(t) {
    var e = !1;
    for (t = t.return; t !== null && (t.tag === 4 && (e = !0), !(t.tag === 3 || t.tag === 5 || t.tag === 27)); )
      t = t.return;
    return e;
  }
  function R(t) {
    var e = [null, null], n = T(t);
    return n === null || V(
      e,
      t,
      n.child,
      { foundSelf: !1 }
    ), e;
  }
  function V(t, e, n, i) {
    for (; n !== null; ) {
      if (n === e) i.foundSelf = !0;
      else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
        if (i.foundSelf) return t[1] = n, !0;
        t[0] = n;
      } else if ((n.tag !== 22 || n.memoizedState === null) && V(
        t,
        e,
        n.child,
        i
      ))
        return !0;
      n = n.sibling;
    }
    return !1;
  }
  function N(t) {
    switch (t.tag) {
      case 5:
      case 27:
      case 6:
        return t.stateNode;
      case 3:
        return t.stateNode.containerInfo;
      default:
        throw Error(u(559));
    }
  }
  var j = null, H = null;
  function q(t, e, n) {
    return t === n ? !0 : t === e ? (j = t, !0) : !1;
  }
  function X(t, e, n) {
    return t === n ? (H = t, !1) : t === e ? (H !== null && (j = t), !0) : !1;
  }
  function nt(t) {
    if (t === null) return null;
    do
      t = t === null ? null : t.return;
    while (t && t.tag !== 5 && t.tag !== 27 && t.tag !== 3);
    return t || null;
  }
  function ot(t, e, n) {
    for (var i = 0, s = t; s; s = n(s)) i++;
    s = 0;
    for (var o = e; o; o = n(o)) s++;
    for (; 0 < i - s; ) t = n(t), i--;
    for (; 0 < s - i; ) e = n(e), s--;
    for (; i--; ) {
      if (t === e || e !== null && t === e.alternate)
        return t;
      t = n(t), e = n(e);
    }
    return null;
  }
  var Q = Object.assign, w = /* @__PURE__ */ Symbol.for("react.element"), it = /* @__PURE__ */ Symbol.for("react.transitional.element"), I = /* @__PURE__ */ Symbol.for("react.portal"), pt = /* @__PURE__ */ Symbol.for("react.fragment"), Tt = /* @__PURE__ */ Symbol.for("react.strict_mode"), kt = /* @__PURE__ */ Symbol.for("react.profiler"), Xt = /* @__PURE__ */ Symbol.for("react.consumer"), Ct = /* @__PURE__ */ Symbol.for("react.context"), G = /* @__PURE__ */ Symbol.for("react.forward_ref"), lt = /* @__PURE__ */ Symbol.for("react.suspense"), J = /* @__PURE__ */ Symbol.for("react.suspense_list"), dt = /* @__PURE__ */ Symbol.for("react.memo"), Y = /* @__PURE__ */ Symbol.for("react.lazy"), Jt = /* @__PURE__ */ Symbol.for("react.activity"), Ce = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), dn = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), A = /* @__PURE__ */ Symbol.for("react.view_transition"), L = /* @__PURE__ */ Symbol.for("react.recoverable"), k = Symbol.iterator;
  function at(t) {
    return t === null || typeof t != "object" ? null : (t = k && t[k] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var Et = /* @__PURE__ */ Symbol.for("react.client.reference");
  function ut(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Et ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case pt:
        return "Fragment";
      case kt:
        return "Profiler";
      case Tt:
        return "StrictMode";
      case lt:
        return "Suspense";
      case J:
        return "SuspenseList";
      case Jt:
        return "Activity";
      case A:
        return "ViewTransition";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case I:
          return "Portal";
        case Ct:
          return t.displayName || "Context";
        case Xt:
          return (t._context.displayName || "Context") + ".Consumer";
        case G:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case dt:
          return e = t.displayName || null, e !== null ? e : ut(t.type) || "Memo";
        case Y:
          e = t._payload, t = t._init;
          try {
            return ut(t(e));
          } catch {
          }
      }
    return null;
  }
  var Mt = Array.isArray, $ = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, rt = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _e = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Jn = [], oa = -1;
  function hn(t) {
    return { current: t };
  }
  function ue(t) {
    0 > oa || (t.current = Jn[oa], Jn[oa] = null, oa--);
  }
  function jt(t, e) {
    oa++, Jn[oa] = t.current, t.current = e;
  }
  var mn = hn(null), ul = hn(null), Pn = hn(null), Ss = hn(null);
  function Ts(t, e) {
    switch (jt(Pn, e), jt(ul, t), jt(mn, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Sy(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = Sy(e), t = Ty(e, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    ue(mn), jt(mn, t);
  }
  function ua() {
    ue(mn), ue(ul), ue(Pn);
  }
  function wu(t) {
    var e = t.memoizedState;
    e !== null && (Pa._currentValue = e.memoizedState, jt(Ss, t)), e = mn.current;
    var n = Ty(e, t.type);
    e !== n && (jt(ul, t), jt(mn, n));
  }
  function Es(t) {
    ul.current === t && (ue(mn), ue(ul)), Ss.current === t && (ue(Ss), Pa._currentValue = _e);
  }
  var _u, Yd;
  function Fn(t) {
    if (_u === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        _u = e && e[1] || "", Yd = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + _u + t + Yd;
  }
  var Nu = !1;
  function Vu(t, e) {
    if (!t || Nu) return "";
    Nu = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var i = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var B = function() {
                throw Error();
              };
              if (Object.defineProperty(B.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(B, []);
                } catch (Z) {
                  var x = Z;
                }
                Reflect.construct(t, [], B);
              } else {
                try {
                  B.call();
                } catch (Z) {
                  x = Z;
                }
                B = !1;
                try {
                  var z = Object.getOwnPropertyDescriptor(
                    t.prototype,
                    "props"
                  );
                  Object.defineProperty(t.prototype, "props", {
                    configurable: !0,
                    set: function() {
                      throw Error();
                    }
                  }), B = !0, new t();
                } finally {
                  B && (z !== void 0 ? Object.defineProperty(t.prototype, "props", z) : delete t.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (Z) {
                x = Z;
              }
              (B = t()) && typeof B.catch == "function" && B.catch(function() {
              });
            }
          } catch (Z) {
            if (Z && x && typeof Z.stack == "string")
              return [Z.stack, x.stack];
          }
          return [null, null];
        }
      };
      i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        i.DetermineComponentFrameRoot,
        "name"
      );
      s && s.configurable && Object.defineProperty(
        i.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var o = i.DetermineComponentFrameRoot(), f = o[0], p = o[1];
      if (f && p) {
        var S = f.split(`
`), M = p.split(`
`);
        for (s = i = 0; i < S.length && !S[i].includes("DetermineComponentFrameRoot"); )
          i++;
        for (; s < M.length && !M[s].includes(
          "DetermineComponentFrameRoot"
        ); )
          s++;
        if (i === S.length || s === M.length)
          for (i = S.length - 1, s = M.length - 1; 1 <= i && 0 <= s && S[i] !== M[s]; )
            s--;
        for (; 1 <= i && 0 <= s; i--, s--)
          if (S[i] !== M[s]) {
            if (i !== 1 || s !== 1)
              do
                if (i--, s--, 0 > s || S[i] !== M[s]) {
                  var O = `
` + S[i].replace(" at new ", " at ");
                  return t.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", t.displayName)), O;
                }
              while (1 <= i && 0 <= s);
            break;
          }
      }
    } finally {
      Nu = !1, Error.prepareStackTrace = n;
    }
    return (n = t ? t.displayName || t.name : "") ? Fn(n) : "";
  }
  function Kb(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Fn(t.type);
      case 16:
        return Fn("Lazy");
      case 13:
        return t.child !== e && e !== null ? Fn("Suspense Fallback") : Fn("Suspense");
      case 19:
        return Fn("SuspenseList");
      case 0:
      case 15:
        return Vu(t.type, !1);
      case 11:
        return Vu(t.type.render, !1);
      case 1:
        return Vu(t.type, !0);
      case 31:
        return Fn("Activity");
      case 30:
        return Fn("ViewTransition");
      default:
        return "";
    }
  }
  function qd(t) {
    try {
      var e = "", n = null;
      do
        e += Kb(t, n), n = t, t = t.return;
      while (t);
      return e;
    } catch (i) {
      return `
Error generating stack: ` + i.message + `
` + i.stack;
    }
  }
  var Uu = Object.prototype.hasOwnProperty, Bu = a.unstable_scheduleCallback, Lu = a.unstable_cancelCallback, kb = a.unstable_shouldYield, Jb = a.unstable_requestPaint, Ne = a.unstable_now, Pb = a.unstable_getCurrentPriorityLevel, Xd = a.unstable_ImmediatePriority, Qd = a.unstable_UserBlockingPriority, As = a.unstable_NormalPriority, Fb = a.unstable_LowPriority, Zd = a.unstable_IdlePriority, Ib = a.log, Wb = a.unstable_setDisableYieldValue, rl = null, Ve = null;
  function In(t) {
    if (typeof Ib == "function" && Wb(t), Ve && typeof Ve.setStrictMode == "function")
      try {
        Ve.setStrictMode(rl, t);
      } catch {
      }
  }
  var Ue = Math.clz32 ? Math.clz32 : e1, $b = Math.log, t1 = Math.LN2;
  function e1(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - ($b(t) / t1 | 0) | 0;
  }
  var xs = 256, Cs = 262144, Ms = 4194304;
  function Ri(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
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
        return t & -t;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
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
        return t;
    }
  }
  function Ds(t, e, n) {
    var i = t.pendingLanes;
    if (i === 0) return 0;
    var s = 0, o = t.suspendedLanes, f = t.pingedLanes;
    t = t.warmLanes;
    var p = i & 134217727;
    return p !== 0 ? (i = p & ~o, i !== 0 ? s = Ri(i) : (f &= p, f !== 0 ? s = Ri(f) : n || (n = p & ~t, n !== 0 && (s = Ri(n))))) : (p = i & ~o, p !== 0 ? s = Ri(p) : f !== 0 ? s = Ri(f) : n || (n = i & ~t, n !== 0 && (s = Ri(n)))), s === 0 ? 0 : e !== 0 && e !== s && (e & o) === 0 && (o = s & -s, n = e & -e, o >= n || o === 32 && (n & 4194048) !== 0) ? e : s;
  }
  function cl(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Kd(t, e) {
    (e & 8) !== 0 && (e |= e & 32);
    var n = t.entangledLanes;
    if (n !== 0)
      for (t = t.entanglements, n &= e; 0 < n; ) {
        var i = 31 - Ue(n), s = 1 << i;
        e |= t[i], n &= ~s;
      }
    return e;
  }
  function n1(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
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
        return e + 5e3;
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
  function kd() {
    var t = Ms;
    return Ms <<= 1, (Ms & 62914560) === 0 && (Ms = 4194304), t;
  }
  function ju(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function fl(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function i1(t, e, n, i, s, o) {
    var f = t.pendingLanes;
    t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= n, t.entangledLanes &= n, t.errorRecoveryDisabledLanes &= n, t.shellSuspendCounter = 0;
    var p = t.entanglements, S = t.expirationTimes, M = t.hiddenUpdates;
    for (n = f & ~n; 0 < n; ) {
      var O = 31 - Ue(n), B = 1 << O;
      p[O] = 0, S[O] = -1;
      var x = M[O];
      if (x !== null)
        for (M[O] = null, O = 0; O < x.length; O++) {
          var z = x[O];
          z !== null && (z.lane &= -536870913);
        }
      n &= ~B;
    }
    i !== 0 && Jd(t, i, 0), o !== 0 && s === 0 && t.tag !== 0 && (t.suspendedLanes |= o & ~(f & ~e));
  }
  function Jd(t, e, n) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var i = 31 - Ue(e);
    t.entangledLanes |= e, t.entanglements[i] = t.entanglements[i] | 1073741824 | n & 261930;
  }
  function Pd(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n; ) {
      var i = 31 - Ue(n), s = 1 << i;
      s & e | t[i] & e && (t[i] |= e), n &= ~s;
    }
  }
  function Fd(t, e) {
    var n = e & -e;
    return n = (n & 42) !== 0 ? 1 : Hu(n), (n & (t.suspendedLanes | e)) !== 0 ? 0 : n;
  }
  function Hu(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
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
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Gu(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Id() {
    var t = rt.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : ag(t.type));
  }
  function Wd(t, e) {
    var n = rt.p;
    try {
      return rt.p = t, e();
    } finally {
      rt.p = n;
    }
  }
  var wn = Math.random().toString(36).slice(2), re = "__reactFiber$" + wn, Me = "__reactProps$" + wn, ra = "__reactContainer$" + wn, $d = "__reactEvents$" + wn, a1 = "__reactListeners$" + wn, l1 = "__reactHandles$" + wn, th = "__reactResources$" + wn, dl = "__reactMarker$" + wn, zs = "__reactLoad$" + wn;
  function Os(t) {
    delete t[re], delete t[Me], delete t[a1], delete t[l1];
  }
  function wi(t) {
    var e;
    if (e = t[re]) return e;
    for (var n = t.parentNode; n; ) {
      if (e = n[ra] || n[re]) {
        if (n = e.alternate, e.child !== null || n !== null && n.child !== null)
          for (t = jy(t); t !== null; ) {
            if (n = t[re]) return n;
            t = jy(t);
          }
        return e;
      }
      t = n, n = t.parentNode;
    }
    return null;
  }
  function ca(t) {
    if (t = t[re] || t[ra]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function hl(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(u(33));
  }
  function fa(t) {
    var e = t[th];
    return e || (e = t[th] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function ae(t) {
    t[dl] = !0;
  }
  function eh(t) {
    t[zs] = void 0;
  }
  var nh = /* @__PURE__ */ new Set(), ih = {};
  function _i(t, e) {
    da(t, e), da(t + "Capture", e);
  }
  function da(t, e) {
    for (ih[t] = e, t = 0; t < e.length; t++)
      nh.add(e[t]);
  }
  var s1 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), ah = {}, lh = {};
  function o1(t) {
    return Uu.call(lh, t) ? !0 : Uu.call(ah, t) ? !1 : s1.test(t) ? lh[t] = !0 : (ah[t] = !0, !1);
  }
  var zt = !1;
  function sh() {
    var t = zt;
    return zt = !1, t;
  }
  function Rs(t, e, n) {
    if (o1(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var i = e.toLowerCase().slice(0, 5);
            if (i !== "data-" && i !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, n);
      }
  }
  function ws(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, n);
    }
  }
  function _n(t, e, n, i) {
    if (i === null) t.removeAttribute(n);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, i);
    }
  }
  function Be(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function oh(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function u1(t, e, n) {
    var i = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      e
    );
    if (!t.hasOwnProperty(e) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
      var s = i.get, o = i.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return s.call(this);
        },
        set: function(f) {
          n = "" + f, o.call(this, f);
        }
      }), Object.defineProperty(t, e, {
        enumerable: i.enumerable
      }), {
        getValue: function() {
          return n;
        },
        setValue: function(f) {
          n = "" + f;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function Yu(t) {
    if (!t._valueTracker) {
      var e = oh(t) ? "checked" : "value";
      t._valueTracker = u1(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function uh(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(), i = "";
    return t && (i = oh(t) ? t.checked ? "true" : "false" : t.value), t = i, t !== n ? (e.setValue(t), !0) : !1;
  }
  var r1 = /[\n"\\]/g;
  function Ze(t) {
    return t.replace(
      r1,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function qu(t, e, n, i, s, o, f, p) {
    t.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? t.type = f : t.removeAttribute("type"), e != null ? f === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Be(e)) : t.value !== "" + Be(e) && (t.value = "" + Be(e)) : f !== "submit" && f !== "reset" || t.removeAttribute("value"), e != null ? f === "number" && t.value == e ? Xu(t, Be(t.value)) : Xu(t, Be(e)) : n != null ? Xu(t, Be(n)) : i != null && t.removeAttribute("value"), s == null && o != null && (t.defaultChecked = !!o), s != null && (t.checked = s && typeof s != "function" && typeof s != "symbol"), p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" ? t.name = "" + Be(p) : t.removeAttribute("name");
  }
  function rh(t, e, n, i, s, o, f, p) {
    if (o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (t.type = o), e != null || n != null) {
      if (!(o !== "submit" && o !== "reset" || e != null)) {
        Yu(t);
        return;
      }
      n = n != null ? "" + Be(n) : "", e = e != null ? "" + Be(e) : n, p || e === t.value || (t.value = e), t.defaultValue = e;
    }
    i = i ?? s, i = typeof i != "function" && typeof i != "symbol" && !!i, t.checked = p ? t.checked : !!i, t.defaultChecked = !!i, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (t.name = f), Yu(t);
  }
  function Xu(t, e) {
    t.defaultValue !== "" + e && (t.defaultValue = "" + e);
  }
  function ha(t, e, n, i) {
    if (t = t.options, e) {
      e = {};
      for (var s = 0; s < n.length; s++)
        e["$" + n[s]] = !0;
      for (n = 0; n < t.length; n++)
        s = e.hasOwnProperty("$" + t[n].value), t[n].selected !== s && (t[n].selected = s), s && i && (t[n].defaultSelected = !0);
    } else {
      for (n = "" + Be(n), e = null, s = 0; s < t.length; s++) {
        if (t[s].value === n) {
          t[s].selected = !0, i && (t[s].defaultSelected = !0);
          return;
        }
        e !== null || t[s].disabled || (e = t[s]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function ch(t, e, n) {
    if (e != null && (e = "" + Be(e), e !== t.value && (t.value = e), n == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + Be(n) : "";
  }
  function fh(t, e, n, i) {
    if (e == null) {
      if (i != null) {
        if (n != null) throw Error(u(92));
        if (Mt(i)) {
          if (1 < i.length) throw Error(u(93));
          i = i[0];
        }
        n = i;
      }
      n == null && (n = ""), e = n;
    }
    n = Be(e), t.defaultValue = n, i = t.textContent, i === n && i !== "" && i !== null && (t.value = i), Yu(t);
  }
  function ma(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var c1 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function dh(t, e, n) {
    var i = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? i ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : i ? t.setProperty(e, n) : typeof n != "number" || n === 0 || c1.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px";
  }
  function hh(t, e, n) {
    if (e != null && typeof e != "object")
      throw Error(u(62));
    if (t = t.style, n != null) {
      for (var i in n)
        !n.hasOwnProperty(i) || e != null && e.hasOwnProperty(i) || (i.indexOf("--") === 0 ? t.setProperty(i, "") : i === "float" ? t.cssFloat = "" : t[i] = "", zt = !0);
      for (var s in e)
        i = e[s], e.hasOwnProperty(s) && n[s] !== i && (dh(t, s, i), zt = !0);
    } else
      for (var o in e)
        e.hasOwnProperty(o) && dh(t, o, e[o]);
  }
  function Qu(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
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
  var f1 = /* @__PURE__ */ new Map([
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
    ["maskType", "mask-type"],
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
    ["xHeight", "x-height"]
  ]), d1 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function _s(t) {
    return d1.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function pn() {
  }
  var Zu = null;
  function Ku(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var pa = null, ya = null;
  function mh(t) {
    var e = ca(t);
    if (e && (t = e.stateNode)) {
      var n = t[Me] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (qu(
            t,
            n.value,
            n.defaultValue,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name
          ), e = n.name, n.type === "radio" && e != null) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll(
              'input[name="' + Ze(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < n.length; e++) {
              var i = n[e];
              if (i !== t && i.form === t.form) {
                var s = i[Me] || null;
                if (!s) throw Error(u(90));
                qu(
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
            for (e = 0; e < n.length; e++)
              i = n[e], i.form === t.form && uh(i);
          }
          break t;
        case "textarea":
          ch(t, n.value, n.defaultValue);
          break t;
        case "select":
          e = n.value, e != null && ha(t, !!n.multiple, e, !1);
      }
    }
  }
  var ku = !1;
  function ph(t, e, n) {
    if (ku) return t(e, n);
    ku = !0;
    try {
      var i = t(e);
      return i;
    } finally {
      if (ku = !1, (pa !== null || ya !== null) && (No(), pa && (e = pa, t = ya, ya = pa = null, mh(e), t)))
        for (e = 0; e < t.length; e++) mh(t[e]);
    }
  }
  function ml(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var i = n[Me] || null;
    if (i === null) return null;
    n = i[e];
    t: switch (e) {
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
        (i = !i.disabled) || (t = t.type, i = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !i;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function")
      throw Error(
        u(231, e, typeof n)
      );
    return n;
  }
  var Nn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ju = !1;
  if (Nn)
    try {
      var pl = {};
      Object.defineProperty(pl, "passive", {
        get: function() {
          Ju = !0;
        }
      }), window.addEventListener("test", pl, pl), window.removeEventListener("test", pl, pl);
    } catch {
      Ju = !1;
    }
  var Wn = null, Pu = null, Ns = null;
  function yh() {
    if (Ns) return Ns;
    var t, e = Pu, n = e.length, i, s = "value" in Wn ? Wn.value : Wn.textContent, o = s.length;
    for (t = 0; t < n && e[t] === s[t]; t++) ;
    var f = n - t;
    for (i = 1; i <= f && e[n - i] === s[o - i]; i++) ;
    return Ns = s.slice(t, 1 < i ? 1 - i : void 0);
  }
  function Vs(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Us() {
    return !0;
  }
  function gh() {
    return !1;
  }
  function be(t) {
    function e(n, i, s, o, f) {
      this._reactName = n, this._targetInst = s, this.type = i, this.nativeEvent = o, this.target = f, this.currentTarget = null;
      for (var p in t)
        t.hasOwnProperty(p) && (n = t[p], this[p] = n ? n(o) : o[p]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Us : gh, this.isPropagationStopped = gh, this;
    }
    return Q(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Us);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Us);
      },
      persist: function() {
      },
      isPersistent: Us
    }), e;
  }
  var $n = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Bs = be($n), yl = Q({}, $n, { view: 0, detail: 0 }), h1 = be(yl), Fu, Iu, gl, Ls = Q({}, yl, {
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
    getModifierState: $u,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== gl && (gl && t.type === "mousemove" ? (Fu = t.screenX - gl.screenX, Iu = t.screenY - gl.screenY) : Iu = Fu = 0, gl = t), Fu);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Iu;
    }
  }), vh = be(Ls), m1 = Q({}, Ls, { dataTransfer: 0 }), p1 = be(m1), y1 = Q({}, yl, { relatedTarget: 0 }), Wu = be(y1), g1 = Q({}, $n, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), v1 = be(g1), b1 = Q({}, $n, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), S1 = be(b1), T1 = Q({}, $n, { data: 0 }), bh = be(T1), E1 = {
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
    MozPrintableKey: "Unidentified"
  }, A1 = {
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
    224: "Meta"
  }, x1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function C1(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = x1[t]) ? !!e[t] : !1;
  }
  function $u() {
    return C1;
  }
  var M1 = Q({}, yl, {
    key: function(t) {
      if (t.key) {
        var e = E1[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = Vs(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? A1[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: $u,
    charCode: function(t) {
      return t.type === "keypress" ? Vs(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Vs(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), D1 = be(M1), z1 = Q({}, Ls, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Sh = be(z1), O1 = Q({}, $n, { submitter: 0 }), R1 = be(O1), w1 = Q({}, yl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: $u
  }), _1 = be(w1), N1 = Q({}, $n, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), V1 = be(N1), U1 = Q({}, Ls, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), B1 = be(U1), L1 = Q({}, $n, {
    newState: 0,
    oldState: 0,
    source: 0
  }), j1 = be(L1), H1 = [9, 13, 27, 32], tr = Nn && "CompositionEvent" in window, vl = null;
  Nn && "documentMode" in document && (vl = document.documentMode);
  var G1 = Nn && "TextEvent" in window && !vl, Th = Nn && (!tr || vl && 8 < vl && 11 >= vl), Eh = " ", Ah = !1;
  function xh(t, e) {
    switch (t) {
      case "keyup":
        return H1.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ch(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var ga = !1;
  function Y1(t, e) {
    switch (t) {
      case "compositionend":
        return Ch(e);
      case "keypress":
        return e.which !== 32 ? null : (Ah = !0, Eh);
      case "textInput":
        return t = e.data, t === Eh && Ah ? null : t;
      default:
        return null;
    }
  }
  function q1(t, e) {
    if (ga)
      return t === "compositionend" || !tr && xh(t, e) ? (t = yh(), Ns = Pu = Wn = null, ga = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length)
            return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return Th && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var X1 = {
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
    week: !0
  };
  function Mh(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!X1[t.type] : e === "textarea";
  }
  function Dh(t, e, n, i) {
    pa ? ya ? ya.push(i) : ya = [i] : pa = i, e = Ho(e, "onChange"), 0 < e.length && (n = new Bs(
      "onChange",
      "change",
      null,
      n,
      i
    ), t.push({ event: n, listeners: e }));
  }
  var bl = null, Sl = null;
  function Q1(t) {
    my(t, 0);
  }
  function js(t) {
    var e = hl(t);
    if (uh(e)) return t;
  }
  function zh(t, e) {
    if (t === "change") return e;
  }
  var Oh = !1;
  if (Nn) {
    var er;
    if (Nn) {
      var nr = "oninput" in document;
      if (!nr) {
        var Rh = document.createElement("div");
        Rh.setAttribute("oninput", "return;"), nr = typeof Rh.oninput == "function";
      }
      er = nr;
    } else er = !1;
    Oh = er && (!document.documentMode || 9 < document.documentMode);
  }
  function wh() {
    bl && (bl.detachEvent("onpropertychange", _h), Sl = bl = null);
  }
  function _h(t) {
    if (t.propertyName === "value" && js(Sl)) {
      var e = [];
      Dh(
        e,
        Sl,
        t,
        Ku(t)
      ), ph(Q1, e);
    }
  }
  function Z1(t, e, n) {
    t === "focusin" ? (wh(), bl = e, Sl = n, bl.attachEvent("onpropertychange", _h)) : t === "focusout" && wh();
  }
  function K1(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return js(Sl);
  }
  function k1(t, e) {
    if (t === "click") return js(e);
  }
  function J1(t, e) {
    if (t === "input" || t === "change")
      return js(e);
  }
  function P1(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var Le = typeof Object.is == "function" ? Object.is : P1;
  function Tl(t, e) {
    if (Le(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var n = Object.keys(t), i = Object.keys(e);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
      var s = n[i];
      if (!Uu.call(e, s) || !Le(t[s], e[s]))
        return !1;
    }
    return !0;
  }
  function ir(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  function Nh(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Vh(t, e) {
    var n = Nh(t);
    t = 0;
    for (var i; n; ) {
      if (n.nodeType === 3) {
        if (i = t + n.textContent.length, t <= e && i >= e)
          return { node: n, offset: e - t };
        t = i;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Nh(n);
    }
  }
  function Uh(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Uh(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function Bh(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = ir(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = ir(t.document);
    }
    return e;
  }
  function ar(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var F1 = Nn && "documentMode" in document && 11 >= document.documentMode, va = null, lr = null, El = null, sr = !1;
  function Lh(t, e, n) {
    var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    sr || va == null || va !== ir(i) || (i = va, "selectionStart" in i && ar(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
      anchorNode: i.anchorNode,
      anchorOffset: i.anchorOffset,
      focusNode: i.focusNode,
      focusOffset: i.focusOffset
    }), El && Tl(El, i) || (El = i, i = Ho(lr, "onSelect"), 0 < i.length && (e = new Bs(
      "onSelect",
      "select",
      null,
      e,
      n
    ), t.push({ event: e, listeners: i }), e.target = va)));
  }
  function Ni(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n;
  }
  var ba = {
    animationend: Ni("Animation", "AnimationEnd"),
    animationiteration: Ni("Animation", "AnimationIteration"),
    animationstart: Ni("Animation", "AnimationStart"),
    transitionrun: Ni("Transition", "TransitionRun"),
    transitionstart: Ni("Transition", "TransitionStart"),
    transitioncancel: Ni("Transition", "TransitionCancel"),
    transitionend: Ni("Transition", "TransitionEnd")
  }, or = {}, jh = {};
  Nn && (jh = document.createElement("div").style, "AnimationEvent" in window || (delete ba.animationend.animation, delete ba.animationiteration.animation, delete ba.animationstart.animation), "TransitionEvent" in window || delete ba.transitionend.transition);
  function Vi(t) {
    if (or[t]) return or[t];
    if (!ba[t]) return t;
    var e = ba[t], n;
    for (n in e)
      if (e.hasOwnProperty(n) && n in jh)
        return or[t] = e[n];
    return t;
  }
  var Hh = Vi("animationend"), Gh = Vi("animationiteration"), Yh = Vi("animationstart"), I1 = Vi("transitionrun"), W1 = Vi("transitionstart"), $1 = Vi("transitioncancel"), qh = Vi("transitionend"), Xh = /* @__PURE__ */ new Map(), ur = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  ur.push("scrollEnd");
  function nn(t, e) {
    Xh.set(t, e), _i(e, [t]);
  }
  var tS = 0;
  function Vn(t, e) {
    if (t.name != null && t.name !== "auto") return t.name;
    if (e.autoName !== null) return e.autoName;
    t = on.identifierPrefix;
    var n = tS++;
    return t = "_" + t + "t_" + n.toString(32) + "_", e.autoName = t;
  }
  function Qh(t) {
    if (t == null || typeof t == "string")
      return t;
    var e = null, n = Ha;
    if (n !== null)
      for (var i = 0; i < n.length; i++) {
        var s = t[n[i]];
        if (s != null) {
          if (s === "none") return "none";
          e = e == null ? s : e + (" " + s);
        }
      }
    return e ?? t.default;
  }
  function Un(t, e) {
    return t = Qh(t), e = Qh(e), e == null ? t === "auto" ? null : t : e === "auto" ? null : e;
  }
  var Hs = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, Ke = [], Sa = 0, rr = 0;
  function Gs() {
    for (var t = Sa, e = rr = Sa = 0; e < t; ) {
      var n = Ke[e];
      Ke[e++] = null;
      var i = Ke[e];
      Ke[e++] = null;
      var s = Ke[e];
      Ke[e++] = null;
      var o = Ke[e];
      if (Ke[e++] = null, i !== null && s !== null) {
        var f = i.pending;
        f === null ? s.next = s : (s.next = f.next, f.next = s), i.pending = s;
      }
      o !== 0 && Zh(n, s, o);
    }
  }
  function Ys(t, e, n, i) {
    Ke[Sa++] = t, Ke[Sa++] = e, Ke[Sa++] = n, Ke[Sa++] = i, rr |= i, t.lanes |= i, t = t.alternate, t !== null && (t.lanes |= i);
  }
  function cr(t, e, n, i) {
    return Ys(t, e, n, i), qs(t);
  }
  function Ui(t, e) {
    return Ys(t, null, null, e), qs(t);
  }
  function Zh(t, e, n) {
    t.lanes |= n;
    var i = t.alternate;
    i !== null && (i.lanes |= n);
    for (var s = !1, o = t.return; o !== null; )
      o.childLanes |= n, i = o.alternate, i !== null && (i.childLanes |= n), o.tag === 22 && (t = o.stateNode, t === null || t._visibility & 1 || (s = !0)), t = o, o = o.return;
    return t.tag === 3 ? (o = t.stateNode, s && e !== null && (s = 31 - Ue(n), t = o.hiddenUpdates, i = t[s], i === null ? t[s] = [e] : i.push(e), e.lane = n | 536870912), o) : null;
  }
  function qs(t) {
    if (50 < Ql)
      throw Ql = 0, _o = null, Error(u(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Ta = {};
  function eS(t, e, n, i) {
    this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function De(t, e, n, i) {
    return new eS(t, e, n, i);
  }
  function fr(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Bn(t, e) {
    var n = t.alternate;
    return n === null ? (n = De(
      t.tag,
      e,
      t.key,
      t.mode
    ), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 1206910976, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n.refCleanup = t.refCleanup, n;
  }
  function Kh(t, e) {
    t.flags &= 1206910978;
    var n = t.alternate;
    return n === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function Xs(t, e, n, i, s, o) {
    var f = 0;
    if (i = t, typeof i == "function") fr(i) && (f = 1);
    else if (typeof i == "string")
      f = OT(
        t,
        n,
        mn.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (i) {
        case Jt:
          return t = De(31, n, e, s), t.elementType = Jt, t.lanes = o, t;
        case pt:
          return Bi(n.children, s, o, e);
        case Tt:
          f = 8, s |= 24;
          break;
        case kt:
          return t = De(12, n, e, s | 2), t.elementType = kt, t.lanes = o, t;
        case lt:
          return t = De(13, n, e, s), t.elementType = lt, t.lanes = o, t;
        case J:
          return t = De(19, n, e, s), t.elementType = J, t.lanes = o, t;
        case Ce:
        case A:
          return t = s | 32, t = De(30, n, e, t), t.elementType = A, t.lanes = o, t.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, t;
        default:
          if (typeof i == "object" && i !== null)
            switch (i.$$typeof) {
              case Ct:
                f = 10;
                break t;
              case Xt:
                f = 9;
                break t;
              case G:
                f = 11;
                break t;
              case dt:
                f = 14;
                break t;
              case Y:
                f = 16, i = null;
                break t;
            }
          f = 29, n = Error(
            u(130, t === null ? "null" : typeof t, "")
          ), i = null;
      }
    return e = De(f, n, e, s), e.elementType = t, e.type = i, e.lanes = o, e;
  }
  function Bi(t, e, n, i) {
    return t = De(7, t, i, e), t.lanes = n, t;
  }
  function dr(t, e, n) {
    return t = De(6, t, null, e), t.lanes = n, t;
  }
  function kh(t) {
    var e = De(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function hr(t, e, n) {
    return e = De(
      4,
      t.children !== null ? t.children : [],
      t.key,
      e
    ), e.lanes = n, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var Jh = /* @__PURE__ */ new WeakMap();
  function ke(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = Jh.get(t);
      return n !== void 0 ? n : (e = {
        value: t,
        source: e,
        stack: qd(e)
      }, Jh.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: qd(e)
    };
  }
  var Ea = [], Aa = 0, Qs = null, Al = 0, Je = [], Pe = 0, ti = null, yn = 1, gn = "";
  function Ln(t, e) {
    Ea[Aa++] = Al, Ea[Aa++] = Qs, Qs = t, Al = e;
  }
  function Ph(t, e, n) {
    Je[Pe++] = yn, Je[Pe++] = gn, Je[Pe++] = ti, ti = t;
    var i = yn;
    t = gn;
    var s = 32 - Ue(i) - 1;
    i &= ~(1 << s), n += 1;
    var o = 32 - Ue(e) + s;
    if (30 < o) {
      var f = s - s % 5;
      o = (i & (1 << f) - 1).toString(32), i >>= f, s -= f, yn = 1 << 32 - Ue(e) + s | n << s | i, gn = o + t;
    } else
      yn = 1 << o | n << s | i, gn = t;
  }
  function Zs(t) {
    t.return !== null && (Ln(t, 1), Ph(t, 1, 0));
  }
  function mr(t) {
    for (; t === Qs; )
      Qs = Ea[--Aa], Ea[Aa] = null, Al = Ea[--Aa], Ea[Aa] = null;
    for (; t === ti; )
      ti = Je[--Pe], Je[Pe] = null, gn = Je[--Pe], Je[Pe] = null, yn = Je[--Pe], Je[Pe] = null;
  }
  function Fh(t, e) {
    Je[Pe++] = yn, Je[Pe++] = gn, Je[Pe++] = ti, yn = e.id, gn = e.overflow, ti = t;
  }
  var le = null, Ht = null, yt = !1, ei = null, Fe = !1, pr = Error(u(519));
  function ni(t) {
    var e = Error(
      u(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw xl(ke(e, t)), pr;
  }
  function Ih(t) {
    var e = t.stateNode, n = t.type, i = t.memoizedProps;
    switch (e[re] = t, e[Me] = i, n) {
      case "dialog":
        bt("cancel", e), bt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        bt("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Kl.length; n++)
          bt(Kl[n], e);
        break;
      case "source":
        bt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        bt("error", e), bt("load", e);
        break;
      case "details":
        bt("toggle", e);
        break;
      case "input":
        bt("invalid", e), rh(
          e,
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
        bt("invalid", e);
        break;
      case "textarea":
        bt("invalid", e), fh(e, i.value, i.defaultValue, i.children);
    }
    n = i.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || i.suppressHydrationWarning === !0 || vy(e.textContent, n) ? (i.popover != null && (bt("beforetoggle", e), bt("toggle", e)), i.onScroll != null && bt("scroll", e), i.onScrollEnd != null && bt("scrollend", e), i.onClick != null && (e.onclick = pn), e = !0) : e = !1, e || ni(t, !0);
  }
  function Ks(t) {
    for (le = t.return; le; )
      switch (le.tag) {
        case 5:
        case 31:
        case 13:
          Fe = !1;
          return;
        case 27:
        case 3:
          Fe = !0;
          return;
        default:
          le = le.return;
      }
  }
  function xa(t) {
    if (t !== le) return !1;
    if (!yt) return Ks(t), yt = !0, !1;
    var e = t.tag, n;
    if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type, n = !(n !== "form" && n !== "button") || Zc(t.type, t.memoizedProps)), n = !n), n && Ht && ni(t), Ks(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(u(317));
      Ht = Ly(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(u(317));
      Ht = Ly(t);
    } else
      e === 27 ? (e = Ht, vi(t.type) ? (t = tf, tf = null, Ht = t) : Ht = e) : Ht = le ? We(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Li() {
    Ht = le = null, yt = !1;
  }
  function yr() {
    var t = ei;
    return t !== null && (Re === null ? Re = t : Re.push.apply(
      Re,
      t
    ), ei = null), t;
  }
  function xl(t) {
    ei === null ? ei = [t] : ei.push(t);
  }
  var gr = hn(null), ji = null, jn = null;
  function ii(t, e, n) {
    jt(gr, e._currentValue), e._currentValue = n;
  }
  function Hn(t) {
    t._currentValue = gr.current, ue(gr);
  }
  function ks(t, e, n) {
    for (; t !== null; ) {
      var i = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, i !== null && (i.childLanes |= e)) : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e), t === n) break;
      t = t.return;
    }
  }
  function vr(t, e, n, i) {
    var s = t.child;
    for (s !== null && (s.return = t); s !== null; ) {
      var o = s.dependencies;
      if (o !== null) {
        var f = s.child;
        o = o.firstContext;
        t: for (; o !== null; ) {
          var p = o;
          o = s;
          for (var S = 0; S < e.length; S++)
            if (p.context === e[S]) {
              o.lanes |= n, p = o.alternate, p !== null && (p.lanes |= n), ks(
                o.return,
                n,
                t
              ), i || (f = null);
              break t;
            }
          o = p.next;
        }
      } else if (s.tag === 18) {
        if (f = s.return, f === null) throw Error(u(341));
        f.lanes |= n, o = f.alternate, o !== null && (o.lanes |= n), ks(f, n, t), f = null;
      } else
        s.tag === 13 && s.memoizedState !== null && s.memoizedState.dehydrated === null ? (s.lanes |= n, f = s.alternate, f !== null && (f.lanes |= n), ks(
          s.return,
          n,
          t
        ), f = s.child, f = f !== null ? f.sibling : null) : f = s.child;
      if (f !== null) f.return = s;
      else
        for (f = s; f !== null; ) {
          if (f === t) {
            f = null;
            break;
          }
          if (s = f.sibling, s !== null) {
            s.return = f.return, f = s;
            break;
          }
          f = f.return;
        }
      s = f;
    }
  }
  function Hi(t, e, n, i) {
    t = null;
    for (var s = e, o = !1; s !== null; ) {
      if (!o) {
        if ((s.flags & 524288) !== 0) o = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var f = s.alternate;
        if (f === null) throw Error(u(387));
        if (f = f.memoizedProps, f !== null) {
          var p = s.type;
          Le(s.pendingProps.value, f.value) || (t !== null ? t.push(p) : t = [p]);
        }
      } else if (s === Ss.current) {
        if (f = s.alternate, f === null) throw Error(u(387));
        f.memoizedState.memoizedState !== s.memoizedState.memoizedState && (t !== null ? t.push(Pa) : t = [Pa]);
      }
      s = s.return;
    }
    return t !== null && vr(
      e,
      t,
      n,
      i
    ), e.flags |= 262144, t !== null;
  }
  function Js(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Le(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function Gi(t) {
    ji = t, jn = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function ce(t) {
    return Wh(ji, t);
  }
  function Ps(t, e) {
    return ji === null && Gi(t), Wh(t, e);
  }
  function Wh(t, e) {
    var n = e._currentValue;
    if (e = { context: e, memoizedValue: n, next: null }, jn === null) {
      if (t === null) throw Error(u(308));
      jn = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else jn = jn.next = e;
    return n;
  }
  var nS = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = {
      aborted: !1,
      addEventListener: function(n, i) {
        t.push(i);
      }
    };
    this.abort = function() {
      e.aborted = !0, t.forEach(function(n) {
        return n();
      });
    };
  }, iS = a.unstable_scheduleCallback, aS = a.unstable_NormalPriority, Ft = {
    $$typeof: Ct,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function br() {
    return {
      controller: new nS(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Cl(t) {
    t.refCount--, t.refCount === 0 && iS(aS, function() {
      t.controller.abort();
    });
  }
  function $h(t, e) {
    if ((t.pendingLanes & 4194048) !== 0) {
      var n = t.transitionTypes;
      for (n === null && (n = t.transitionTypes = []), t = 0; t < e.length; t++) {
        var i = e[t];
        n.indexOf(i) === -1 && n.push(i);
      }
    }
  }
  var Ml = null;
  function lS(t) {
    var e = t.transitionTypes;
    return t.transitionTypes = null, e;
  }
  var Dl = null, Sr = 0, Yi = 0, Ca = null;
  function sS(t, e) {
    if (Dl === null) {
      var n = Dl = [];
      Sr = 0, Yi = Bc(), Ca = {
        status: "pending",
        value: void 0,
        then: function(i) {
          n.push(i);
        }
      };
    }
    return Sr++, e.then(tm, tm), e;
  }
  function tm() {
    if (--Sr === 0 && (Ml = null, Dl !== null)) {
      Ca !== null && (Ca.status = "fulfilled");
      var t = Dl;
      Dl = null, Yi = 0, Ca = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function oS(t, e) {
    var n = [], i = {
      status: "pending",
      value: null,
      reason: null,
      then: function(s) {
        n.push(s);
      }
    };
    return t.then(
      function() {
        i.status = "fulfilled", i.value = e;
        for (var s = 0; s < n.length; s++) (0, n[s])(e);
      },
      function(s) {
        for (i.status = "rejected", i.reason = s, s = 0; s < n.length; s++)
          (0, n[s])(void 0);
      }
    ), i;
  }
  var em = $.S;
  $.S = function(t, e) {
    if (kp = Ne(), typeof e == "object" && e !== null && typeof e.then == "function" && sS(t, e), Ml !== null)
      for (var n = Xa; n !== null; )
        $h(n, Ml), n = n.next;
    if (n = t.types, n !== null) {
      for (var i = Xa; i !== null; )
        $h(i, n), i = i.next;
      if (Yi !== 0) {
        i = Ml, i === null && (i = Ml = []);
        for (var s = 0; s < n.length; s++) {
          var o = n[s];
          i.indexOf(o) === -1 && i.push(o);
        }
      }
    }
    em !== null && em(t, e);
  };
  var qi = hn(null);
  function Tr() {
    var t = qi.current;
    return t !== null ? t : Ut.pooledCache;
  }
  function Fs(t, e) {
    e === null ? jt(qi, qi.current) : jt(qi, e.pool);
  }
  function nm() {
    var t = Tr();
    return t === null ? null : { parent: Ft._currentValue, pool: t };
  }
  var Ma = Error(u(460)), Er = Error(u(474)), Is = Error(u(542)), Ws = { then: function() {
  } };
  function im(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function am(t, e, n) {
    switch (n = t[n], n === void 0 ? t.push(e) : n !== e && (e.then(pn, pn), e = n), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, sm(t), t === void 0 && !("reason" in e) ? Error(u(600)) : t;
      default:
        if (typeof e.status == "string") e.then(pn, pn);
        else {
          if (t = Ut, t !== null && 100 < t.shellSuspendCounter)
            throw Error(u(482));
          t = e, t.status = "pending", t.then(
            function(i) {
              if (e.status === "pending") {
                var s = e;
                s.status = "fulfilled", s.value = i;
              }
            },
            function(i) {
              if (e.status === "pending") {
                var s = e;
                s.status = "rejected", s.reason = i;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, sm(t), t;
        }
        throw Qi = e, Ma;
    }
  }
  function Xi(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (Qi = n, Ma) : n;
    }
  }
  var Qi = null;
  function lm() {
    if (Qi === null) throw Error(u(459));
    var t = Qi;
    return Qi = null, t;
  }
  function sm(t) {
    if (t === Ma || t === Is)
      throw Error(u(483));
  }
  var Da = null, zl = 0;
  function $s(t) {
    var e = zl;
    return zl += 1, Da === null && (Da = []), am(Da, t, e);
  }
  function ai(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function to(t, e) {
    throw e.$$typeof === w ? Error(u(525)) : (t = Object.prototype.toString.call(e), Error(
      u(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function om(t) {
    function e(C, E) {
      if (t) {
        var D = C.deletions;
        D === null ? (C.deletions = [E], C.flags |= 16) : D.push(E);
      }
    }
    function n(C, E) {
      if (!t) return null;
      for (; E !== null; )
        e(C, E), E = E.sibling;
      return null;
    }
    function i(C) {
      for (var E = /* @__PURE__ */ new Map(); C !== null; )
        C.key === null ? E.set(C.index, C) : E.set(C.key, C), C = C.sibling;
      return E;
    }
    function s(C, E) {
      return C = Bn(C, E), C.index = 0, C.sibling = null, C;
    }
    function o(C, E, D) {
      return C.index = D, t ? (D = C.alternate, D !== null ? (D = D.index, D < E ? (C.flags |= 2, E) : D) : (C.flags |= 134217730, E)) : (C.flags |= 1048576, E);
    }
    function f(C) {
      return t && C.alternate === null && (C.flags |= 134217730), C;
    }
    function p(C, E, D, U) {
      return E === null || E.tag !== 6 ? (E = dr(D, C.mode, U), E.return = C, E) : (E = s(E, D), E.return = C, E);
    }
    function S(C, E, D, U) {
      var P = D.type;
      return P === pt ? (C = O(
        C,
        E,
        D.props.children,
        U,
        D.key
      ), ai(C, D), C) : E !== null && (E.elementType === P || typeof P == "object" && P !== null && P.$$typeof === Y && Xi(P) === E.type) ? (E = s(E, D.props), ai(E, D), E.return = C, E) : (E = Xs(
        D.type,
        D.key,
        D.props,
        null,
        C.mode,
        U
      ), ai(E, D), E.return = C, E);
    }
    function M(C, E, D, U) {
      return E === null || E.tag !== 4 || E.stateNode.containerInfo !== D.containerInfo || E.stateNode.implementation !== D.implementation ? (E = hr(D, C.mode, U), E.return = C, E) : (E = s(E, D.children || []), E.return = C, E);
    }
    function O(C, E, D, U, P) {
      return E === null || E.tag !== 7 ? (E = Bi(
        D,
        C.mode,
        U,
        P
      ), E.return = C, E) : (E = s(E, D), E.return = C, E);
    }
    function B(C, E, D) {
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return E = dr(
          "" + E,
          C.mode,
          D
        ), E.return = C, E;
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case it:
            return D = Xs(
              E.type,
              E.key,
              E.props,
              null,
              C.mode,
              D
            ), ai(D, E), D.return = C, D;
          case I:
            return E = hr(
              E,
              C.mode,
              D
            ), E.return = C, E;
          case Y:
            return E = Xi(E), B(C, E, D);
        }
        if (Mt(E) || at(E))
          return E = Bi(
            E,
            C.mode,
            D,
            null
          ), E.return = C, E;
        if (typeof E.then == "function")
          return B(C, $s(E), D);
        if (E.$$typeof === Ct)
          return B(
            C,
            Ps(C, E),
            D
          );
        to(C, E);
      }
      return null;
    }
    function x(C, E, D, U) {
      var P = E !== null ? E.key : null;
      if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint")
        return P !== null ? null : p(C, E, "" + D, U);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case it:
            return D.key === P ? S(C, E, D, U) : null;
          case I:
            return D.key === P ? M(C, E, D, U) : null;
          case Y:
            return D = Xi(D), x(C, E, D, U);
        }
        if (Mt(D) || at(D))
          return P !== null ? null : O(C, E, D, U, null);
        if (typeof D.then == "function")
          return x(
            C,
            E,
            $s(D),
            U
          );
        if (D.$$typeof === Ct)
          return x(
            C,
            E,
            Ps(C, D),
            U
          );
        to(C, D);
      }
      return null;
    }
    function z(C, E, D, U, P) {
      if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint")
        return C = C.get(D) || null, p(E, C, "" + U, P);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case it:
            return C = C.get(
              U.key === null ? D : U.key
            ) || null, S(E, C, U, P);
          case I:
            return C = C.get(
              U.key === null ? D : U.key
            ) || null, M(E, C, U, P);
          case Y:
            return U = Xi(U), z(
              C,
              E,
              D,
              U,
              P
            );
        }
        if (Mt(U) || at(U))
          return C = C.get(D) || null, O(E, C, U, P, null);
        if (typeof U.then == "function")
          return z(
            C,
            E,
            D,
            $s(U),
            P
          );
        if (U.$$typeof === Ct)
          return z(
            C,
            E,
            D,
            Ps(E, U),
            P
          );
        to(E, U);
      }
      return null;
    }
    function Z(C, E, D, U) {
      for (var P = null, xt = null, st = E, ct = E = 0, $t = null; st !== null && ct < D.length; ct++) {
        st.index > ct ? ($t = st, st = null) : $t = st.sibling;
        var Dt = x(
          C,
          st,
          D[ct],
          U
        );
        if (Dt === null) {
          st === null && (st = $t);
          break;
        }
        t && st && Dt.alternate === null && e(C, st), E = o(Dt, E, ct), xt === null ? P = Dt : xt.sibling = Dt, xt = Dt, st = $t;
      }
      if (ct === D.length)
        return n(C, st), yt && Ln(C, ct), P;
      if (st === null) {
        for (; ct < D.length; ct++)
          st = B(C, D[ct], U), st !== null && (E = o(
            st,
            E,
            ct
          ), xt === null ? P = st : xt.sibling = st, xt = st);
        return yt && Ln(C, ct), P;
      }
      for (st = i(st); ct < D.length; ct++)
        $t = z(
          st,
          C,
          ct,
          D[ct],
          U
        ), $t !== null && (t && (Dt = $t.alternate, Dt !== null && st.delete(Dt.key === null ? ct : Dt.key)), E = o(
          $t,
          E,
          ct
        ), xt === null ? P = $t : xt.sibling = $t, xt = $t);
      return t && st.forEach(function(Ai) {
        return e(C, Ai);
      }), yt && Ln(C, ct), P;
    }
    function tt(C, E, D, U) {
      if (D == null) throw Error(u(151));
      for (var P = null, xt = null, st = E, ct = E = 0, $t = null, Dt = D.next(); st !== null && !Dt.done; ct++, Dt = D.next()) {
        st.index > ct ? ($t = st, st = null) : $t = st.sibling;
        var Ai = x(C, st, Dt.value, U);
        if (Ai === null) {
          st === null && (st = $t);
          break;
        }
        t && st && Ai.alternate === null && e(C, st), E = o(Ai, E, ct), xt === null ? P = Ai : xt.sibling = Ai, xt = Ai, st = $t;
      }
      if (Dt.done)
        return n(C, st), yt && Ln(C, ct), P;
      if (st === null) {
        for (; !Dt.done; ct++, Dt = D.next())
          Dt = B(C, Dt.value, U), Dt !== null && (E = o(Dt, E, ct), xt === null ? P = Dt : xt.sibling = Dt, xt = Dt);
        return yt && Ln(C, ct), P;
      }
      for (st = i(st); !Dt.done; ct++, Dt = D.next())
        Dt = z(st, C, ct, Dt.value, U), Dt !== null && (t && ($t = Dt.alternate, $t !== null && st.delete(
          $t.key === null ? ct : $t.key
        )), E = o(Dt, E, ct), xt === null ? P = Dt : xt.sibling = Dt, xt = Dt);
      return t && st.forEach(function(YT) {
        return e(C, YT);
      }), yt && Ln(C, ct), P;
    }
    function mt(C, E, D, U) {
      if (typeof D == "object" && D !== null && D.type === pt && D.key === null && D.props.ref === void 0 && (D = D.props.children), typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case it:
            t: {
              for (var P = D.key; E !== null; ) {
                if (E.key === P) {
                  if (P = D.type, P === pt) {
                    if (E.tag === 7) {
                      n(
                        C,
                        E.sibling
                      ), U = s(
                        E,
                        D.props.children
                      ), ai(U, D), U.return = C, C = U;
                      break t;
                    }
                  } else if (E.elementType === P || typeof P == "object" && P !== null && P.$$typeof === Y && Xi(P) === E.type) {
                    n(
                      C,
                      E.sibling
                    ), U = s(E, D.props), ai(U, D), U.return = C, C = U;
                    break t;
                  }
                  n(C, E);
                  break;
                } else e(C, E);
                E = E.sibling;
              }
              D.type === pt ? (U = Bi(
                D.props.children,
                C.mode,
                U,
                D.key
              ), ai(U, D), U.return = C, C = U) : (U = Xs(
                D.type,
                D.key,
                D.props,
                null,
                C.mode,
                U
              ), ai(U, D), U.return = C, C = U);
            }
            return f(C);
          case I:
            t: {
              for (P = D.key; E !== null; ) {
                if (E.key === P)
                  if (E.tag === 4 && E.stateNode.containerInfo === D.containerInfo && E.stateNode.implementation === D.implementation) {
                    n(
                      C,
                      E.sibling
                    ), U = s(E, D.children || []), U.return = C, C = U;
                    break t;
                  } else {
                    n(C, E);
                    break;
                  }
                else e(C, E);
                E = E.sibling;
              }
              U = hr(D, C.mode, U), U.return = C, C = U;
            }
            return f(C);
          case Y:
            return D = Xi(D), mt(
              C,
              E,
              D,
              U
            );
        }
        if (Mt(D))
          return Z(
            C,
            E,
            D,
            U
          );
        if (at(D)) {
          if (P = at(D), typeof P != "function") throw Error(u(150));
          return D = P.call(D), tt(
            C,
            E,
            D,
            U
          );
        }
        if (typeof D.then == "function")
          return mt(
            C,
            E,
            $s(D),
            U
          );
        if (D.$$typeof === Ct)
          return mt(
            C,
            E,
            Ps(C, D),
            U
          );
        to(C, D);
      }
      return typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint" ? (D = "" + D, E !== null && E.tag === 6 ? (n(C, E.sibling), U = s(E, D), U.return = C, C = U) : (n(C, E), U = dr(D, C.mode, U), U.return = C, C = U), f(C)) : n(C, E);
    }
    return function(C, E, D, U) {
      try {
        zl = 0;
        var P = mt(
          C,
          E,
          D,
          U
        );
        return Da = null, P;
      } catch (st) {
        if (st === Ma || st === Is) throw st;
        var xt = De(29, st, null, C.mode);
        return xt.lanes = U, xt.return = C, xt;
      }
    };
  }
  var Zi = om(!0), um = om(!1), li = !1;
  function Ar(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function xr(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function si(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function oi(t, e, n) {
    var i = t.updateQueue;
    if (i === null) return null;
    if (i = i.shared, (Ot & 2) !== 0) {
      var s = i.pending;
      return s === null ? e.next = e : (e.next = s.next, s.next = e), i.pending = e, e = qs(t), Zh(t, null, n), e;
    }
    return Ys(t, i, e, n), qs(t);
  }
  function Ol(t, e, n) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194048) !== 0)) {
      var i = e.lanes;
      i &= t.pendingLanes, n |= i, e.lanes = n, Pd(t, n);
    }
  }
  function Cr(t, e) {
    var n = t.updateQueue, i = t.alternate;
    if (i !== null && (i = i.updateQueue, n === i)) {
      var s = null, o = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var f = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          o === null ? s = o = f : o = o.next = f, n = n.next;
        } while (n !== null);
        o === null ? s = o = e : o = o.next = e;
      } else s = o = e;
      n = {
        baseState: i.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: o,
        shared: i.shared,
        callbacks: i.callbacks
      }, t.updateQueue = n;
      return;
    }
    t = n.lastBaseUpdate, t === null ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e;
  }
  var Mr = !1;
  function Rl() {
    if (Mr) {
      var t = Ca;
      if (t !== null) throw t;
    }
  }
  function wl(t, e, n, i) {
    Mr = !1;
    var s = t.updateQueue;
    li = !1;
    var o = s.firstBaseUpdate, f = s.lastBaseUpdate, p = s.shared.pending;
    if (p !== null) {
      s.shared.pending = null;
      var S = p, M = S.next;
      S.next = null, f === null ? o = M : f.next = M, f = S;
      var O = t.alternate;
      O !== null && (O = O.updateQueue, p = O.lastBaseUpdate, p !== f && (p === null ? O.firstBaseUpdate = M : p.next = M, O.lastBaseUpdate = S));
    }
    if (o !== null) {
      var B = s.baseState;
      f = 0, O = M = S = null, p = o;
      do {
        var x = p.lane & -536870913, z = x !== p.lane;
        if (z ? (At & x) === x : (i & x) === x) {
          x !== 0 && x === Yi && (Mr = !0), O !== null && (O = O.next = {
            lane: 0,
            tag: p.tag,
            payload: p.payload,
            callback: null,
            next: null
          });
          t: {
            var Z = t, tt = p;
            x = e;
            var mt = n;
            switch (tt.tag) {
              case 1:
                if (Z = tt.payload, typeof Z == "function") {
                  B = Z.call(mt, B, x);
                  break t;
                }
                B = Z;
                break t;
              case 3:
                Z.flags = Z.flags & -65537 | 128;
              case 0:
                if (Z = tt.payload, x = typeof Z == "function" ? Z.call(mt, B, x) : Z, x == null) break t;
                B = Q({}, B, x);
                break t;
              case 2:
                li = !0;
            }
          }
          x = p.callback, x !== null && (t.flags |= 64, z && (t.flags |= 8192), z = s.callbacks, z === null ? s.callbacks = [x] : z.push(x));
        } else
          z = {
            lane: x,
            tag: p.tag,
            payload: p.payload,
            callback: p.callback,
            next: null
          }, O === null ? (M = O = z, S = B) : O = O.next = z, f |= x;
        if (p = p.next, p === null) {
          if (p = s.shared.pending, p === null)
            break;
          z = p, p = z.next, z.next = null, s.lastBaseUpdate = z, s.shared.pending = null;
        }
      } while (!0);
      O === null && (S = B), s.baseState = S, s.firstBaseUpdate = M, s.lastBaseUpdate = O, o === null && (s.shared.lanes = 0), mi |= f, t.lanes = f, t.memoizedState = B;
    }
  }
  function rm(t, e) {
    if (typeof t != "function")
      throw Error(u(191, t));
    t.call(e);
  }
  function cm(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++)
        rm(n[t], e);
  }
  var ui = hn(null), eo = hn(0);
  function fm(t, e) {
    t = Qn, jt(eo, t), jt(ui, e), Qn = t | e.baseLanes;
  }
  function Dr() {
    jt(eo, Qn), jt(ui, ui.current);
  }
  function zr() {
    Qn = eo.current, ue(ui), ue(eo);
  }
  var fe = hn(null), ve = null;
  function ri(t) {
    var e = t.alternate;
    jt(de, de.current & 1), jt(fe, t), ve === null && (e === null || ui.current !== null || e.memoizedState !== null) && (ve = t);
  }
  function Or(t) {
    jt(de, de.current), jt(fe, t), ve === null && (ve = t);
  }
  function dm(t) {
    t.tag === 22 ? (jt(de, de.current), jt(fe, t), ve === null && (ve = t)) : ci();
  }
  function ci() {
    jt(de, de.current), jt(fe, fe.current);
  }
  function je(t) {
    ue(fe), ve === t && (ve = null), ue(de);
  }
  var de = hn(0);
  function _l(t, e) {
    jt(fe, fe.current), jt(de, e);
  }
  function Rr(t) {
    ue(de), ue(fe), ve === t && (ve = null);
  }
  function no(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || Wc(n) || $c(n)))
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== "independent") {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  var Gn = 0, ht = null, Vt = null, It = null, io = !1, za = !1, Ki = !1, ao = 0, Nl = 0, Oa = null, uS = 0;
  function Qt() {
    throw Error(u(321));
  }
  function wr(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!Le(t[n], e[n])) return !1;
    return !0;
  }
  function _r(t, e, n, i, s, o) {
    return Gn = o, ht = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, $.H = t === null || t.memoizedState === null ? Pm : Fm, Ki = !1, o = n(i, s), Ki = !1, za && (o = mm(
      e,
      n,
      i,
      s
    )), hm(t), o;
  }
  function hm(t) {
    $.H = fo;
    var e = Vt !== null && Vt.next !== null;
    if (Gn = 0, It = Vt = ht = null, io = !1, Nl = 0, Oa = null, e) throw Error(u(300));
    t === null || Wt || (t = t.dependencies, t !== null && Js(t) && (Wt = !0));
  }
  function mm(t, e, n, i) {
    ht = t;
    var s = 0;
    do {
      if (za && (Oa = null), Nl = 0, za = !1, 25 <= s) throw Error(u(301));
      if (s += 1, It = Vt = null, t.updateQueue != null) {
        var o = t.updateQueue;
        o.lastEffect = null, o.events = null, o.stores = null, o.memoCache != null && (o.memoCache.index = 0);
      }
      $.H = yS, o = e(n, i);
    } while (za);
    return o;
  }
  function rS() {
    var t = $.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? Vl(e) : e, t = t.useState()[0], (Vt !== null ? Vt.memoizedState : null) !== t && (ht.flags |= 1024), e;
  }
  function Nr() {
    var t = ao !== 0;
    return ao = 0, t;
  }
  function Vr(t, e, n) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~n;
  }
  function Ur(t) {
    if (io) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      io = !1;
    }
    Gn = 0, It = Vt = ht = null, za = !1, Nl = ao = 0, Oa = null;
  }
  function Se() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return It === null ? ht.memoizedState = It = t : It = It.next = t, It;
  }
  function Pt() {
    if (Vt === null) {
      var t = ht.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Vt.next;
    var e = It === null ? ht.memoizedState : It.next;
    if (e !== null)
      It = e, Vt = t;
    else {
      if (t === null)
        throw ht.alternate === null ? Error(u(467)) : Error(u(310));
      Vt = t, t = {
        memoizedState: Vt.memoizedState,
        baseState: Vt.baseState,
        baseQueue: Vt.baseQueue,
        queue: Vt.queue,
        next: null
      }, It === null ? ht.memoizedState = It = t : It = It.next = t;
    }
    return It;
  }
  function lo() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Vl(t) {
    var e = Nl;
    return Nl += 1, Oa === null && (Oa = []), t = am(Oa, t, e), e = ht, (It === null ? e.memoizedState : It.next) === null && (e = e.alternate, $.H = e === null || e.memoizedState === null ? Pm : Fm), t;
  }
  function so(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Vl(t);
      if (t.$$typeof === L) return;
      if (t.$$typeof === Ct) return ce(t);
    }
    throw Error(u(438, String(t)));
  }
  function Br(t) {
    var e = null, n = ht.updateQueue;
    if (n !== null && (e = n.memoCache), e == null) {
      var i = ht.alternate;
      i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (e = {
        data: i.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), n === null && (n = lo(), ht.updateQueue = n), n.memoCache = e, n = e.data[e.index], n === void 0)
      for (n = e.data[e.index] = Array(t), i = 0; i < t; i++)
        n[i] = dn;
    return e.index++, n;
  }
  function Yn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function oo(t) {
    var e = Pt();
    return Lr(e, Vt, t);
  }
  function Lr(t, e, n) {
    var i = t.queue;
    if (i === null) throw Error(u(311));
    i.lastRenderedReducer = n;
    var s = t.baseQueue, o = i.pending;
    if (o !== null) {
      if (s !== null) {
        var f = s.next;
        s.next = o.next, o.next = f;
      }
      e.baseQueue = s = o, i.pending = null;
    }
    if (o = t.baseState, s === null) t.memoizedState = o;
    else {
      e = s.next;
      var p = f = null, S = null, M = e, O = !1;
      do {
        var B = M.lane & -536870913;
        if (B !== M.lane ? (At & B) === B : (Gn & B) === B) {
          var x = M.revertLane;
          if (x === 0)
            S !== null && (S = S.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: M.action,
              hasEagerState: M.hasEagerState,
              eagerState: M.eagerState,
              next: null
            }), B === Yi && (O = !0);
          else if ((Gn & x) === x) {
            M = M.next, x === Yi && (O = !0);
            continue;
          } else
            B = {
              lane: 0,
              revertLane: M.revertLane,
              gesture: null,
              action: M.action,
              hasEagerState: M.hasEagerState,
              eagerState: M.eagerState,
              next: null
            }, S === null ? (p = S = B, f = o) : S = S.next = B, ht.lanes |= x, mi |= x;
          B = M.action, Ki && n(o, B), o = M.hasEagerState ? M.eagerState : n(o, B);
        } else
          x = {
            lane: B,
            revertLane: M.revertLane,
            gesture: M.gesture,
            action: M.action,
            hasEagerState: M.hasEagerState,
            eagerState: M.eagerState,
            next: null
          }, S === null ? (p = S = x, f = o) : S = S.next = x, ht.lanes |= B, mi |= B;
        M = M.next;
      } while (M !== null && M !== e);
      if (S === null ? f = o : S.next = p, !Le(o, t.memoizedState) && (Wt = !0, O && (n = Ca, n !== null)))
        throw n;
      t.memoizedState = o, t.baseState = f, t.baseQueue = S, i.lastRenderedState = o;
    }
    return s === null && (i.lanes = 0), [t.memoizedState, i.dispatch];
  }
  function jr(t) {
    var e = Pt(), n = e.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = t;
    var i = n.dispatch, s = n.pending, o = e.memoizedState;
    if (s !== null) {
      n.pending = null;
      var f = s = s.next;
      do
        o = t(o, f.action), f = f.next;
      while (f !== s);
      Le(o, e.memoizedState) || (Wt = !0), e.memoizedState = o, e.baseQueue === null && (e.baseState = o), n.lastRenderedState = o;
    }
    return [o, i];
  }
  function pm(t, e, n) {
    var i = ht, s = Pt(), o = yt;
    if (o) {
      if (n === void 0) throw Error(u(407));
      n = n();
    } else n = e();
    var f = !Le(
      (Vt || s).memoizedState,
      n
    );
    if (f && (s.memoizedState = n, Wt = !0), s = s.queue, Yr(vm.bind(null, i, s, t), [
      t
    ]), t = s.getSnapshot !== e || f || It !== null && (It.memoizedState.tag & 1) !== 0, Ra(
      t ? 9 : 8,
      { destroy: void 0 },
      gm.bind(null, i, s, n, e),
      null
    ), t) {
      if (i.flags |= 2048, Ut === null) throw Error(u(349));
      o || (Gn & 127) !== 0 || ym(i, e, n);
    }
    return n;
  }
  function ym(t, e, n) {
    t.flags |= 16384, t = { getSnapshot: e, value: n }, e = ht.updateQueue, e === null ? (e = lo(), ht.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t));
  }
  function gm(t, e, n, i) {
    e.value = n, e.getSnapshot = i, bm(e) && Sm(t);
  }
  function vm(t, e, n) {
    return n(function() {
      bm(e) && Sm(t);
    });
  }
  function bm(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !Le(t, n);
    } catch {
      return !0;
    }
  }
  function Sm(t) {
    var e = Ui(t, 2);
    e !== null && we(e, t, 2);
  }
  function Hr(t) {
    var e = Se();
    if (typeof t == "function") {
      var n = t;
      if (t = n(), Ki) {
        In(!0);
        try {
          n();
        } finally {
          In(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Yn,
      lastRenderedState: t
    }, e;
  }
  function Tm(t, e, n, i) {
    return t.baseState = n, Lr(
      t,
      Vt,
      typeof i == "function" ? i : Yn
    );
  }
  function cS(t, e, n, i, s) {
    if (co(t)) throw Error(u(485));
    if (t = e.action, t !== null) {
      var o = {
        payload: s,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(f) {
          o.listeners.push(f);
        }
      };
      $.T !== null ? n(!0) : o.isTransition = !1, i(o), n = e.pending, n === null ? (o.next = e.pending = o, Em(e, o)) : (o.next = n.next, e.pending = n.next = o);
    }
  }
  function Em(t, e) {
    var n = e.action, i = e.payload, s = t.state;
    if (e.isTransition) {
      var o = $.T, f = {};
      f.types = o !== null ? o.types : null, $.T = f;
      try {
        var p = n(s, i), S = $.S;
        S !== null && S(f, p), Am(t, e, p);
      } catch (M) {
        Gr(t, e, M);
      } finally {
        o !== null && f.types !== null && (o.types = f.types), $.T = o;
      }
    } else
      try {
        o = n(s, i), Am(t, e, o);
      } catch (M) {
        Gr(t, e, M);
      }
  }
  function Am(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(i) {
        xm(t, e, i);
      },
      function(i) {
        return Gr(t, e, i);
      }
    ) : xm(t, e, n);
  }
  function xm(t, e, n) {
    e.status = "fulfilled", e.value = n, Cm(e), t.state = n, e = t.pending, e !== null && (n = e.next, n === e ? t.pending = null : (n = n.next, e.next = n, Em(t, n)));
  }
  function Gr(t, e, n) {
    var i = t.pending;
    if (t.pending = null, i !== null) {
      i = i.next;
      do
        e.status = "rejected", e.reason = n, Cm(e), e = e.next;
      while (e !== i);
    }
    t.action = null;
  }
  function Cm(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Mm(t, e) {
    return e;
  }
  function Dm(t, e) {
    if (yt) {
      var n = Ut.formState;
      if (n !== null) {
        t: {
          var i = ht;
          if (yt) {
            if (Ht) {
              e: {
                for (var s = Ht, o = Fe; s.nodeType !== 8; ) {
                  if (!o) {
                    s = null;
                    break e;
                  }
                  if (s = We(
                    s.nextSibling
                  ), s === null) {
                    s = null;
                    break e;
                  }
                }
                o = s.data, s = o === "F!" || o === "F" ? s : null;
              }
              if (s) {
                Ht = We(
                  s.nextSibling
                ), i = s.data === "F!";
                break t;
              }
            }
            ni(i);
          }
          i = !1;
        }
        i && (e = n[0]);
      }
    }
    return n = Se(), n.memoizedState = n.baseState = e, i = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Mm,
      lastRenderedState: e
    }, n.queue = i, n = Km.bind(
      null,
      ht,
      i
    ), i.dispatch = n, i = Hr(!1), o = Kr.bind(
      null,
      ht,
      !1,
      i.queue
    ), i = Se(), s = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, i.queue = s, n = cS.bind(
      null,
      ht,
      s,
      o,
      n
    ), s.dispatch = n, i.memoizedState = t, [e, n, !1];
  }
  function zm(t) {
    var e = Pt();
    return Om(e, Vt, t);
  }
  function Om(t, e, n) {
    if (e = Lr(
      t,
      e,
      Mm
    )[0], t = oo(Yn)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var i = Vl(e);
      } catch (f) {
        throw f === Ma ? Is : f;
      }
    else i = e;
    e = Pt();
    var s = e.queue, o = s.dispatch;
    return n !== e.memoizedState && (ht.flags |= 2048, Ra(
      9,
      { destroy: void 0 },
      fS.bind(null, s, n),
      null
    )), [i, o, t];
  }
  function fS(t, e) {
    t.action = e;
  }
  function Rm(t) {
    var e = Pt(), n = Vt;
    if (n !== null)
      return Om(e, n, t);
    Pt(), e = e.memoizedState, n = Pt();
    var i = n.queue.dispatch;
    return n.memoizedState = t, [e, i, !1];
  }
  function Ra(t, e, n, i) {
    return t = { tag: t, create: n, deps: i, inst: e, next: null }, e = ht.updateQueue, e === null && (e = lo(), ht.updateQueue = e), n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (i = n.next, n.next = t, t.next = i, e.lastEffect = t), t;
  }
  function wm() {
    return Pt().memoizedState;
  }
  function uo(t, e, n, i) {
    var s = Se();
    ht.flags |= t, s.memoizedState = Ra(
      1 | e,
      { destroy: void 0 },
      n,
      i === void 0 ? null : i
    );
  }
  function ro(t, e, n, i) {
    var s = Pt();
    i = i === void 0 ? null : i;
    var o = s.memoizedState.inst;
    Vt !== null && i !== null && wr(i, Vt.memoizedState.deps) ? s.memoizedState = Ra(e, o, n, i) : (ht.flags |= t, s.memoizedState = Ra(
      1 | e,
      o,
      n,
      i
    ));
  }
  function _m(t, e) {
    uo(8390656, 8, t, e);
  }
  function Yr(t, e) {
    ro(2048, 8, t, e);
  }
  function dS(t) {
    ht.flags |= 4;
    var e = ht.updateQueue;
    if (e === null)
      e = lo(), ht.updateQueue = e, e.events = [t];
    else {
      var n = e.events;
      n === null ? e.events = [t] : n.push(t);
    }
  }
  function Nm(t) {
    var e = Pt().memoizedState;
    return dS({ ref: e, nextImpl: t }), function() {
      if ((Ot & 2) !== 0) throw Error(u(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function Vm(t, e) {
    return ro(4, 2, t, e);
  }
  function Um(t, e) {
    return ro(4, 4, t, e);
  }
  function Bm(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function() {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return t = t(), e.current = t, function() {
        e.current = null;
      };
  }
  function Lm(t, e, n) {
    n = n != null ? n.concat([t]) : null, ro(4, 4, Bm.bind(null, e, t), n);
  }
  function qr() {
  }
  function jm(t, e) {
    var n = Pt();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    return e !== null && wr(e, i[1]) ? i[0] : (n.memoizedState = [t, e], t);
  }
  function Hm(t, e) {
    var n = Pt();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    if (e !== null && wr(e, i[1]))
      return i[0];
    if (i = t(), Ki) {
      In(!0);
      try {
        t();
      } finally {
        In(!1);
      }
    }
    return n.memoizedState = [i, e], i;
  }
  function Xr(t, e, n) {
    return n === void 0 || (Gn & 1073741824) !== 0 && (At & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = n, t = Pp(), ht.lanes |= t, mi |= t, n);
  }
  function Gm(t, e, n, i) {
    return Le(n, e) ? n : ui.current !== null ? (t = Xr(t, n, i), Le(t, e) || (Wt = !0), t) : (Gn & 106) === 0 || (Gn & 1073741824) !== 0 && (At & 261930) === 0 ? (Wt = !0, t.memoizedState = n) : (t = Pp(), ht.lanes |= t, mi |= t, e);
  }
  function Ym(t, e, n, i, s) {
    var o = rt.p;
    rt.p = o !== 0 && 8 > o ? o : 8;
    var f = $.T, p = {};
    p.types = f !== null ? f.types : null, $.T = p, Kr(t, !1, e, n);
    try {
      var S = s(), M = $.S;
      if (M !== null && M(p, S), S !== null && typeof S == "object" && typeof S.then == "function") {
        var O = oS(
          S,
          i
        );
        Ul(
          t,
          e,
          O,
          qe(t)
        );
      } else
        Ul(
          t,
          e,
          i,
          qe(t)
        );
    } catch (B) {
      Ul(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: B },
        qe()
      );
    } finally {
      rt.p = o, f !== null && p.types !== null && (f.types = p.types), $.T = f;
    }
  }
  function hS() {
  }
  function Qr(t, e, n, i) {
    if (t.tag !== 5) throw Error(u(476));
    var s = qm(t).queue;
    Ym(
      t,
      s,
      e,
      _e,
      n === null ? hS : function() {
        return Xm(t), n(i);
      }
    );
  }
  function qm(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: _e,
      baseState: _e,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yn,
        lastRenderedState: _e
      },
      next: null
    };
    var n = {};
    return e.next = {
      memoizedState: n,
      baseState: n,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yn,
        lastRenderedState: n
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function Xm(t) {
    var e = qm(t);
    e.next === null && (e = t.alternate.memoizedState), Ul(
      t,
      e.next.queue,
      {},
      qe()
    );
  }
  function Zr() {
    return ce(Pa);
  }
  function Qm() {
    return Pt().memoizedState;
  }
  function Zm() {
    return Pt().memoizedState;
  }
  function mS(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = qe();
          t = si(n);
          var i = oi(e, t, n);
          i !== null && (we(i, e, n), Ol(i, e, n)), e = { cache: br() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function pS(t, e, n) {
    var i = qe();
    n = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, co(t) ? km(e, n) : (n = cr(t, e, n, i), n !== null && (we(n, t, i), Jm(n, e, i)));
  }
  function Km(t, e, n) {
    var i = qe();
    Ul(t, e, n, i);
  }
  function Ul(t, e, n, i) {
    var s = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (co(t)) km(e, s);
    else {
      var o = t.alternate;
      if (t.lanes === 0 && (o === null || o.lanes === 0) && (o = e.lastRenderedReducer, o !== null))
        try {
          var f = e.lastRenderedState, p = o(f, n);
          if (s.hasEagerState = !0, s.eagerState = p, Le(p, f))
            return Ys(t, e, s, 0), Ut === null && Gs(), !1;
        } catch {
        }
      if (n = cr(t, e, s, i), n !== null)
        return we(n, t, i), Jm(n, e, i), !0;
    }
    return !1;
  }
  function Kr(t, e, n, i) {
    if (i = {
      lane: 2,
      revertLane: Bc(),
      gesture: null,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, co(t)) {
      if (e) throw Error(u(479));
    } else
      e = cr(
        t,
        n,
        i,
        2
      ), e !== null && we(e, t, 2);
  }
  function co(t) {
    var e = t.alternate;
    return t === ht || e !== null && e === ht;
  }
  function km(t, e) {
    za = io = !0;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
  }
  function Jm(t, e, n) {
    if ((n & 4194048) !== 0) {
      var i = e.lanes;
      i &= t.pendingLanes, n |= i, e.lanes = n, Pd(t, n);
    }
  }
  var fo = {
    readContext: ce,
    use: so,
    useCallback: Qt,
    useContext: Qt,
    useEffect: Qt,
    useImperativeHandle: Qt,
    useLayoutEffect: Qt,
    useInsertionEffect: Qt,
    useMemo: Qt,
    useReducer: Qt,
    useRef: Qt,
    useState: Qt,
    useDebugValue: Qt,
    useDeferredValue: Qt,
    useTransition: Qt,
    useSyncExternalStore: Qt,
    useId: Qt,
    useHostTransitionStatus: Qt,
    useFormState: Qt,
    useActionState: Qt,
    useOptimistic: Qt,
    useMemoCache: Qt,
    useCacheRefresh: Qt,
    useEffectEvent: Qt
  }, Pm = {
    readContext: ce,
    use: so,
    useCallback: function(t, e) {
      return Se().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: ce,
    useEffect: _m,
    useImperativeHandle: function(t, e, n) {
      n = n != null ? n.concat([t]) : null, uo(
        4194308,
        4,
        Bm.bind(null, e, t),
        n
      );
    },
    useLayoutEffect: function(t, e) {
      return uo(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      uo(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var n = Se();
      e = e === void 0 ? null : e;
      var i = t();
      if (Ki) {
        In(!0);
        try {
          t();
        } finally {
          In(!1);
        }
      }
      return n.memoizedState = [i, e], i;
    },
    useReducer: function(t, e, n) {
      var i = Se();
      if (n !== void 0) {
        var s = n(e);
        if (Ki) {
          In(!0);
          try {
            n(e);
          } finally {
            In(!1);
          }
        }
      } else s = e;
      return i.memoizedState = i.baseState = s, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: s
      }, i.queue = t, t = t.dispatch = pS.bind(
        null,
        ht,
        t
      ), [i.memoizedState, t];
    },
    useRef: function(t) {
      var e = Se();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = Hr(t);
      var e = t.queue, n = Km.bind(null, ht, e);
      return e.dispatch = n, [t.memoizedState, n];
    },
    useDebugValue: qr,
    useDeferredValue: function(t, e) {
      var n = Se();
      return Xr(n, t, e);
    },
    useTransition: function() {
      var t = Hr(!1);
      return t = Ym.bind(
        null,
        ht,
        t.queue,
        !0,
        !1
      ), Se().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, n) {
      var i = ht, s = Se();
      if (yt) {
        if (n === void 0)
          throw Error(u(407));
        n = n();
      } else {
        if (n = e(), Ut === null)
          throw Error(u(349));
        (At & 127) !== 0 || ym(i, e, n);
      }
      s.memoizedState = n;
      var o = { value: n, getSnapshot: e };
      return s.queue = o, _m(vm.bind(null, i, o, t), [
        t
      ]), i.flags |= 2048, Ra(
        9,
        { destroy: void 0 },
        gm.bind(
          null,
          i,
          o,
          n,
          e
        ),
        null
      ), n;
    },
    useId: function() {
      var t = Se(), e = Ut.identifierPrefix;
      if (yt) {
        var n = gn, i = yn;
        n = (i & ~(1 << 32 - Ue(i) - 1)).toString(32) + n, e = "_" + e + "R_" + n, n = ao++, 0 < n && (e += "H" + n.toString(32)), e += "_";
      } else
        n = uS++, e = "_" + e + "r_" + n.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: Zr,
    useFormState: Dm,
    useActionState: Dm,
    useOptimistic: function(t) {
      var e = Se();
      e.memoizedState = e.baseState = t;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = n, e = Kr.bind(
        null,
        ht,
        !0,
        n
      ), n.dispatch = e, [t, e];
    },
    useMemoCache: Br,
    useCacheRefresh: function() {
      return Se().memoizedState = mS.bind(
        null,
        ht
      );
    },
    useEffectEvent: function(t) {
      var e = Se(), n = { impl: t };
      return e.memoizedState = n, function() {
        if ((Ot & 2) !== 0)
          throw Error(u(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, Fm = {
    readContext: ce,
    use: so,
    useCallback: jm,
    useContext: ce,
    useEffect: Yr,
    useImperativeHandle: Lm,
    useInsertionEffect: Vm,
    useLayoutEffect: Um,
    useMemo: Hm,
    useReducer: oo,
    useRef: wm,
    useState: function() {
      return oo(Yn);
    },
    useDebugValue: qr,
    useDeferredValue: function(t, e) {
      var n = Pt();
      return Gm(
        n,
        Vt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = oo(Yn)[0], e = Pt().memoizedState;
      return [
        typeof t == "boolean" ? t : Vl(t),
        e
      ];
    },
    useSyncExternalStore: pm,
    useId: Qm,
    useHostTransitionStatus: Zr,
    useFormState: zm,
    useActionState: zm,
    useOptimistic: function(t, e) {
      var n = Pt();
      return Tm(n, Vt, t, e);
    },
    useMemoCache: Br,
    useCacheRefresh: Zm,
    useEffectEvent: Nm
  }, yS = {
    readContext: ce,
    use: so,
    useCallback: jm,
    useContext: ce,
    useEffect: Yr,
    useImperativeHandle: Lm,
    useInsertionEffect: Vm,
    useLayoutEffect: Um,
    useMemo: Hm,
    useReducer: jr,
    useRef: wm,
    useState: function() {
      return jr(Yn);
    },
    useDebugValue: qr,
    useDeferredValue: function(t, e) {
      var n = Pt();
      return Vt === null ? Xr(n, t, e) : Gm(
        n,
        Vt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = jr(Yn)[0], e = Pt().memoizedState;
      return [
        typeof t == "boolean" ? t : Vl(t),
        e
      ];
    },
    useSyncExternalStore: pm,
    useId: Qm,
    useHostTransitionStatus: Zr,
    useFormState: Rm,
    useActionState: Rm,
    useOptimistic: function(t, e) {
      var n = Pt();
      return Vt !== null ? Tm(n, Vt, t, e) : (n.baseState = t, [t, n.queue.dispatch]);
    },
    useMemoCache: Br,
    useCacheRefresh: Zm,
    useEffectEvent: Nm
  };
  function kr(t, e, n, i) {
    e = t.memoizedState, n = n(i, e), n = n == null ? e : Q({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var Jr = {
    enqueueSetState: function(t, e, n) {
      t = t._reactInternals;
      var i = qe(), s = si(i);
      s.payload = e, n != null && (s.callback = n), e = oi(t, s, i), e !== null && (we(e, t, i), Ol(e, t, i));
    },
    enqueueReplaceState: function(t, e, n) {
      t = t._reactInternals;
      var i = qe(), s = si(i);
      s.tag = 1, s.payload = e, n != null && (s.callback = n), e = oi(t, s, i), e !== null && (we(e, t, i), Ol(e, t, i));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var n = qe(), i = si(n);
      i.tag = 2, e != null && (i.callback = e), e = oi(t, i, n), e !== null && (we(e, t, n), Ol(e, t, n));
    }
  };
  function Im(t, e, n, i, s, o, f) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(i, o, f) : e.prototype && e.prototype.isPureReactComponent ? !Tl(n, i) || !Tl(s, o) : !0;
  }
  function Wm(t, e, n, i) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, i), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, i), e.state !== t && Jr.enqueueReplaceState(e, e.state, null);
  }
  function ki(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var i in e)
        i !== "ref" && (n[i] = e[i]);
    }
    if (t = t.defaultProps) {
      n === e && (n = Q({}, n));
      for (var s in t)
        n[s] === void 0 && (n[s] = t[s]);
    }
    return n;
  }
  function $m(t) {
    Hs(t);
  }
  function tp(t) {
    console.error(t);
  }
  function ep(t) {
    Hs(t);
  }
  function ho(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (i) {
      setTimeout(function() {
        throw i;
      });
    }
  }
  function np(t, e, n) {
    try {
      var i = t.onCaughtError;
      i(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function Pr(t, e, n) {
    return n = si(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      ho(t, e);
    }, n;
  }
  function ip(t) {
    return t = si(t), t.tag = 3, t;
  }
  function ap(t, e, n, i) {
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var o = i.value;
      t.payload = function() {
        return s(o);
      }, t.callback = function() {
        np(e, n, i);
      };
    }
    var f = n.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (t.callback = function() {
      np(e, n, i), typeof s != "function" && (pi === null ? pi = /* @__PURE__ */ new Set([this]) : pi.add(this));
      var p = i.stack;
      this.componentDidCatch(i.value, {
        componentStack: p !== null ? p : ""
      });
    });
  }
  function gS(t, e, n, i, s) {
    if (n.flags |= 32768, i !== null && typeof i == "object" && typeof i.then == "function") {
      if (e = n.alternate, e !== null && Hi(
        e,
        n,
        s,
        !0
      ), n = fe.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
          case 19:
            return ve === null ? Vo() : n.alternate === null && Zt === 0 && (Zt = 3), n.flags &= -257, n.flags |= 65536, n.lanes = s, i === Ws ? n.flags |= 16384 : (e = n.updateQueue, e === null ? n.updateQueue = /* @__PURE__ */ new Set([i]) : e.add(i), Nc(t, i, s)), !1;
          case 22:
            return n.flags |= 65536, i === Ws ? n.flags |= 16384 : (e = n.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([i])
            }, n.updateQueue = e) : (n = e.retryQueue, n === null ? e.retryQueue = /* @__PURE__ */ new Set([i]) : n.add(i)), Nc(t, i, s)), !1;
        }
        throw Error(u(435, n.tag));
      }
      return Nc(t, i, s), Vo(), !1;
    }
    if (yt)
      return e = fe.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = s, i !== pr && (t = Error(u(422), { cause: i }), xl(ke(t, n)))) : (i !== pr && (e = Error(u(423), {
        cause: i
      }), xl(
        ke(e, n)
      )), t = t.current.alternate, t.flags |= 65536, s &= -s, t.lanes |= s, i = ke(i, n), s = Pr(
        t.stateNode,
        i,
        s
      ), Cr(t, s), Zt !== 4 && (Zt = 2)), !1;
    var o = Error(u(520), { cause: i });
    if (o = ke(o, n), Xl === null ? Xl = [o] : Xl.push(o), Zt !== 4 && (Zt = 2), e === null) return !0;
    i = ke(i, n), n = e;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, t = s & -s, n.lanes |= t, t = Pr(n.stateNode, i, t), Cr(n, t), !1;
        case 1:
          if (e = n.type, o = n.stateNode, (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || o !== null && typeof o.componentDidCatch == "function" && (pi === null || !pi.has(o))))
            return n.flags |= 65536, s &= -s, n.lanes |= s, s = ip(s), ap(
              s,
              t,
              n,
              i
            ), Cr(n, s), !1;
          break;
        case 22:
          if (n.memoizedState !== null)
            return n.flags |= 65536, !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Fr = Error(u(461)), Wt = !1;
  function ee(t, e, n, i) {
    e.child = t === null ? um(e, null, n, i) : Zi(
      e,
      t.child,
      n,
      i
    );
  }
  function lp(t, e, n, i, s) {
    n = n.render;
    var o = e.ref;
    if ("ref" in i) {
      var f = {};
      for (var p in i)
        p !== "ref" && (f[p] = i[p]);
    } else f = i;
    return Gi(e), i = _r(
      t,
      e,
      n,
      f,
      o,
      s
    ), p = Nr(), t !== null && !Wt ? (Vr(t, e, s), qn(t, e, s)) : (yt && p && Zs(e), e.flags |= 1, ee(t, e, i, s), e.child);
  }
  function sp(t, e, n, i, s) {
    if (t === null) {
      var o = n.type;
      return typeof o == "function" && !fr(o) && o.defaultProps === void 0 && n.compare === null ? (e.tag = 15, e.type = o, op(
        t,
        e,
        o,
        i,
        s
      )) : (t = Xs(
        n.type,
        null,
        i,
        e,
        e.mode,
        s
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (o = t.child, !ac(t, s)) {
      var f = o.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Tl, n(f, i) && t.ref === e.ref)
        return qn(t, e, s);
    }
    return e.flags |= 1, t = Bn(o, i), t.ref = e.ref, t.return = e, e.child = t;
  }
  function op(t, e, n, i, s) {
    if (t !== null) {
      var o = t.memoizedProps;
      if (Tl(o, i) && t.ref === e.ref)
        if (Wt = !1, e.pendingProps = i = o, ac(t, s))
          (t.flags & 131072) !== 0 && (Wt = !0);
        else
          return e.lanes = t.lanes, qn(t, e, s);
    }
    return Ir(
      t,
      e,
      n,
      i,
      s
    );
  }
  function up(t, e, n, i) {
    var s = i.children, o = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), i.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (o = o !== null ? o.baseLanes | n : n, t !== null) {
          for (i = e.child = t.child, s = 0; i !== null; )
            s = s | i.lanes | i.childLanes, i = i.sibling;
          i = s & ~o;
        } else i = 0, e.child = null;
        return rp(
          t,
          e,
          o,
          n,
          i
        );
      }
      if ((n & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Fs(
          e,
          o !== null ? o.cachePool : null
        ), o !== null ? fm(e, o) : Dr(), dm(e);
      else
        return i = e.lanes = 536870912, rp(
          t,
          e,
          o !== null ? o.baseLanes | n : n,
          n,
          i
        );
    } else
      o !== null ? (Fs(e, o.cachePool), fm(e, o), ci(), e.memoizedState = null) : (t !== null && Fs(e, null), Dr(), ci());
    return ee(t, e, s, n), e.child;
  }
  function Bl(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function rp(t, e, n, i, s) {
    var o = Tr();
    return o = o === null ? null : { parent: Ft._currentValue, pool: o }, e.memoizedState = {
      baseLanes: n,
      cachePool: o
    }, t !== null && Fs(e, null), Dr(), dm(e), t !== null && Hi(t, e, i, !0), e.childLanes = s, null;
  }
  function mo(t, e) {
    return e = po(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function cp(t, e, n) {
    return Zi(e, t.child, null, n), t = mo(e, e.pendingProps), t.flags |= 2, je(e), e.memoizedState = null, t;
  }
  function vS(t, e, n) {
    var i = e.pendingProps, s = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (yt) {
        if (i.mode === "hidden")
          return t = mo(e, i), e.lanes = 536870912, t.memoizedState = { baseLanes: 0, cachePool: null }, Bl(null, t);
        if (Or(e), (t = Ht) ? (t = By(
          t,
          Fe
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: ti !== null ? { id: yn, overflow: gn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = kh(t), n.return = e, e.child = n, le = e, Ht = null)) : t = null, t === null) throw ni(e);
        return e.lanes = 536870912, null;
      }
      return mo(e, i);
    }
    var o = t.memoizedState;
    if (o !== null) {
      var f = o.dehydrated;
      if (Or(e), s)
        if (e.flags & 256)
          e.flags &= -257, e = cp(
            t,
            e,
            n
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(u(558));
      else if (Wt || Hi(t, e, n, !1), s = (n & t.childLanes) !== 0, Wt || s) {
        if (ui.current === null) {
          if (i = Ut, i !== null && (f = Fd(i, n), f !== 0 && f !== o.retryLane))
            throw o.retryLane = f, Ui(t, f), we(i, t, f), Fr;
          Vo();
        }
        e = cp(
          t,
          e,
          n
        );
      } else
        t = o.treeContext, Ht = We(f.nextSibling), le = e, yt = !0, ei = null, Fe = !1, t !== null && Fh(e, t), e = mo(e, i), e.flags |= 134221824;
      return e;
    }
    return t = Bn(t.child, {
      mode: i.mode,
      children: i.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function wa(t, e) {
    var n = e.ref;
    if (n === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(u(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function Ir(t, e, n, i, s) {
    return Gi(e), n = _r(
      t,
      e,
      n,
      i,
      void 0,
      s
    ), i = Nr(), t !== null && !Wt ? (Vr(t, e, s), qn(t, e, s)) : (yt && i && Zs(e), e.flags |= 1, ee(t, e, n, s), e.child);
  }
  function fp(t, e, n, i, s, o) {
    return Gi(e), e.updateQueue = null, n = mm(
      e,
      i,
      n,
      s
    ), hm(t), i = Nr(), t !== null && !Wt ? (Vr(t, e, o), qn(t, e, o)) : (yt && i && Zs(e), e.flags |= 1, ee(t, e, n, o), e.child);
  }
  function dp(t, e, n, i, s) {
    if (Gi(e), e.stateNode === null) {
      var o = Ta, f = n.contextType;
      typeof f == "object" && f !== null && (o = ce(f)), o = new n(i, o), e.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, o.updater = Jr, e.stateNode = o, o._reactInternals = e, o = e.stateNode, o.props = i, o.state = e.memoizedState, o.refs = {}, Ar(e), f = n.contextType, o.context = typeof f == "object" && f !== null ? ce(f) : Ta, o.state = e.memoizedState, f = n.getDerivedStateFromProps, typeof f == "function" && (kr(
        e,
        n,
        f,
        i
      ), o.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (f = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), f !== o.state && Jr.enqueueReplaceState(o, o.state, null), wl(e, i, o, s), Rl(), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308), i = !0;
    } else if (t === null) {
      o = e.stateNode;
      var p = e.memoizedProps, S = ki(n, p);
      o.props = S;
      var M = o.context, O = n.contextType;
      f = Ta, typeof O == "object" && O !== null && (f = ce(O));
      var B = n.getDerivedStateFromProps;
      O = typeof B == "function" || typeof o.getSnapshotBeforeUpdate == "function", p = e.pendingProps !== p, O || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (p || M !== f) && Wm(
        e,
        o,
        i,
        f
      ), li = !1;
      var x = e.memoizedState;
      o.state = x, wl(e, i, o, s), Rl(), M = e.memoizedState, p || x !== M || li ? (typeof B == "function" && (kr(
        e,
        n,
        B,
        i
      ), M = e.memoizedState), (S = li || Im(
        e,
        n,
        S,
        i,
        x,
        M,
        f
      )) ? (O || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = i, e.memoizedState = M), o.props = i, o.state = M, o.context = f, i = S) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308), i = !1);
    } else {
      o = e.stateNode, xr(t, e), f = e.memoizedProps, O = ki(n, f), o.props = O, B = e.pendingProps, x = o.context, M = n.contextType, S = Ta, typeof M == "object" && M !== null && (S = ce(M)), p = n.getDerivedStateFromProps, (M = typeof p == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (f !== B || x !== S) && Wm(
        e,
        o,
        i,
        S
      ), li = !1, x = e.memoizedState, o.state = x, wl(e, i, o, s), Rl();
      var z = e.memoizedState;
      f !== B || x !== z || li || t !== null && t.dependencies !== null && Js(t.dependencies) ? (typeof p == "function" && (kr(
        e,
        n,
        p,
        i
      ), z = e.memoizedState), (O = li || Im(
        e,
        n,
        O,
        i,
        x,
        z,
        S
      ) || t !== null && t.dependencies !== null && Js(t.dependencies)) ? (M || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(i, z, S), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(
        i,
        z,
        S
      )), typeof o.componentDidUpdate == "function" && (e.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || f === t.memoizedProps && x === t.memoizedState || (e.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && x === t.memoizedState || (e.flags |= 1024), e.memoizedProps = i, e.memoizedState = z), o.props = i, o.state = z, o.context = S, i = O) : (typeof o.componentDidUpdate != "function" || f === t.memoizedProps && x === t.memoizedState || (e.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && x === t.memoizedState || (e.flags |= 1024), i = !1);
    }
    return o = i, wa(t, e), i = (e.flags & 128) !== 0, o || i ? (o = e.stateNode, n = i && typeof n.getDerivedStateFromError != "function" ? null : o.render(), e.flags |= 1, t !== null && i ? (e.child = Zi(
      e,
      t.child,
      null,
      s
    ), e.child = Zi(
      e,
      null,
      n,
      s
    )) : ee(t, e, n, s), e.memoizedState = o.state, t = e.child) : t = qn(
      t,
      e,
      s
    ), t;
  }
  function hp(t, e, n, i) {
    return Li(), e.flags |= 256, ee(t, e, n, i), e.child;
  }
  var Wr = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function $r(t) {
    return { baseLanes: t, cachePool: nm() };
  }
  function tc(t, e, n) {
    return t = t !== null ? t.childLanes & ~n : 0, e && (t |= Ye), t;
  }
  function mp(t, e, n) {
    var i = e.pendingProps, s = !1, o = (e.flags & 128) !== 0, f;
    if ((f = o) || (f = t !== null && t.memoizedState === null ? !1 : (de.current & 2) !== 0), f && (s = !0, e.flags &= -129), f = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (yt) {
        if (s ? ri(e) : ci(), (t = Ht) ? (t = By(
          t,
          Fe
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: ti !== null ? { id: yn, overflow: gn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = kh(t), n.return = e, e.child = n, le = e, Ht = null)) : t = null, t === null) throw ni(e);
        return $c(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      return o = i.children, i = i.fallback, s ? (ci(), s = e.mode, o = po(
        { mode: "hidden", children: o },
        s
      ), i = Bi(
        i,
        s,
        n,
        null
      ), o.return = e, i.return = e, o.sibling = i, e.child = o, i = e.child, i.memoizedState = $r(n), i.childLanes = tc(
        t,
        f,
        n
      ), e.memoizedState = Wr, Bl(null, i)) : (ri(e), ec(e, o));
    }
    var p = t.memoizedState;
    if (p !== null) {
      var S = p.dehydrated;
      if (S !== null)
        return bS(
          t,
          e,
          o,
          f,
          i,
          S,
          p,
          n
        );
    }
    return s ? (ci(), s = i.fallback, o = e.mode, p = t.child, S = p.sibling, i = Bn(p, {
      mode: "hidden",
      children: i.children
    }), i.subtreeFlags = p.subtreeFlags & 1206910976, S !== null ? s = Bn(S, s) : (s = Bi(
      s,
      o,
      n,
      null
    ), s.flags |= 2), s.return = e, i.return = e, i.sibling = s, e.child = i, Bl(null, i), i = e.child, s = t.child.memoizedState, s === null ? s = $r(n) : (o = s.cachePool, o !== null ? (p = Ft._currentValue, o = o.parent !== p ? { parent: p, pool: p } : o) : o = nm(), s = {
      baseLanes: s.baseLanes | n,
      cachePool: o
    }), i.memoizedState = s, i.childLanes = tc(
      t,
      f,
      n
    ), e.memoizedState = Wr, Bl(t.child, i)) : (ri(e), n = t.child, t = n.sibling, n = Bn(n, {
      mode: "visible",
      children: i.children
    }), n.return = e, n.sibling = null, t !== null && (f = e.deletions, f === null ? (e.deletions = [t], e.flags |= 16) : f.push(t)), e.child = n, e.memoizedState = null, n);
  }
  function ec(t, e) {
    return e = po(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function po(t, e) {
    return t = De(22, t, null, e), t.lanes = 0, t;
  }
  function yo(t, e, n) {
    return Zi(e, t.child, null, n), t = ec(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function bS(t, e, n, i, s, o, f, p) {
    if (n)
      return e.flags & 256 ? (ri(e), e.flags &= -257, yo(
        t,
        e,
        p
      )) : e.memoizedState !== null ? (ci(), e.child = t.child, e.flags |= 128, null) : (ci(), o = s.fallback, f = e.mode, s = po(
        { mode: "visible", children: s.children },
        f
      ), o = Bi(
        o,
        f,
        p,
        null
      ), o.flags |= 2, s.return = e, o.return = e, s.sibling = o, e.child = s, Zi(e, t.child, null, p), s = e.child, s.memoizedState = $r(p), s.childLanes = tc(
        t,
        i,
        p
      ), e.memoizedState = Wr, Bl(null, s));
    if (ri(e), $c(o)) {
      if (i = o.nextSibling && o.nextSibling.dataset, i) var S = i.dgst;
      return i = S, i !== "" && (s = Error(u(419)), s.stack = "", s.digest = i, xl({ value: s, source: null, stack: null })), yo(
        t,
        e,
        p
      );
    }
    if (Wt || Hi(t, e, p, !1), i = (p & t.childLanes) !== 0, Wt || i) {
      if (ui.current !== null)
        return yo(
          t,
          e,
          p
        );
      if (i = Ut, i !== null && (s = Fd(
        i,
        p
      ), s !== 0 && s !== f.retryLane))
        throw f.retryLane = s, Ui(t, s), we(i, t, s), Fr;
      return Wc(o) || Vo(), yo(
        t,
        e,
        p
      );
    }
    return Wc(o) ? (e.flags |= 192, e.child = t.child, null) : (t = f.treeContext, Ht = We(o.nextSibling), le = e, yt = !0, ei = null, Fe = !1, t !== null && Fh(e, t), e = ec(
      e,
      s.children
    ), e.flags |= 134221824, e);
  }
  function pp(t, e, n) {
    t.lanes |= e;
    var i = t.alternate;
    i !== null && (i.lanes |= e), ks(t.return, e, n);
  }
  function yp(t) {
    for (var e = null; t !== null; ) {
      var n = t.alternate;
      n !== null && no(n) === null && (e = t), t = t.sibling;
    }
    return e;
  }
  function go(t, e, n, i, s, o) {
    var f = t.memoizedState;
    f === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: i,
      tail: n,
      tailMode: s,
      treeForkCount: o
    } : (f.isBackwards = e, f.rendering = null, f.renderingStartTime = 0, f.last = i, f.tail = n, f.tailMode = s, f.treeForkCount = o);
  }
  function nc(t) {
    var e = t.child;
    for (t.child = null; e !== null; ) {
      var n = e.sibling;
      e.sibling = t.child, t.child = e, e = n;
    }
  }
  function ic(t, e, n) {
    var i = e.pendingProps, s = i.revealOrder, o = i.tail;
    i = i.children;
    var f = de.current;
    if (e.flags & 128)
      return _l(e, f), null;
    var p = (f & 2) !== 0;
    if (p ? (f = f & 1 | 2, e.flags |= 128) : f &= 1, _l(e, f), s === "backwards" && t !== null ? (nc(t), ee(t, e, i, n), nc(t)) : ee(t, e, i, n), i = yt ? Al : 0, !p && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && pp(t, n, e);
        else if (t.tag === 19)
          pp(t, n, e);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    switch (s) {
      case "backwards":
        n = yp(e.child), n === null ? (s = e.child, e.child = null) : (s = n.sibling, n.sibling = null, nc(e)), go(
          e,
          !0,
          s,
          null,
          o,
          i
        );
        break;
      case "unstable_legacy-backwards":
        for (n = null, s = e.child, e.child = null; s !== null; ) {
          if (t = s.alternate, t !== null && no(t) === null) {
            e.child = s;
            break;
          }
          t = s.sibling, s.sibling = n, n = s, s = t;
        }
        go(
          e,
          !0,
          n,
          null,
          o,
          i
        );
        break;
      case "together":
        go(
          e,
          !1,
          null,
          null,
          void 0,
          i
        );
        break;
      case "independent":
        e.memoizedState = null;
        break;
      default:
        n = yp(e.child), n === null ? (s = e.child, e.child = null) : (s = n.sibling, n.sibling = null), go(
          e,
          !1,
          s,
          n,
          o,
          i
        );
    }
    return e.child;
  }
  function gp(t, e, n) {
    var i = e.pendingProps;
    return ii(e, e.type, i.value), ee(t, e, i.children, n), e.child;
  }
  function qn(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies), mi |= e.lanes, (n & e.childLanes) === 0)
      if (t !== null) {
        if (Hi(
          t,
          e,
          n,
          !1
        ), (n & e.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && e.child !== t.child)
      throw Error(u(153));
    if (e.child !== null) {
      for (t = e.child, n = Bn(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; )
        t = t.sibling, n = n.sibling = Bn(t, t.pendingProps), n.return = e;
      n.sibling = null;
    }
    return e.child;
  }
  function ac(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Js(t)));
  }
  function SS(t, e, n) {
    switch (e.tag) {
      case 3:
        Ts(e, e.stateNode.containerInfo), ii(e, Ft, t.memoizedState.cache), Li();
        break;
      case 27:
      case 5:
        wu(e);
        break;
      case 4:
        Ts(e, e.stateNode.containerInfo);
        break;
      case 10:
        ii(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, Or(e), null;
        break;
      case 13:
        var i = e.memoizedState;
        if (i !== null) {
          if (i.dehydrated !== null)
            return ri(e), e.flags |= 128, null;
          i = Hi(
            t,
            e,
            n,
            !1
          );
          var s = e.child.childLanes;
          return i || (n & s) !== 0 ? mp(t, e, n) : (ri(e), t = qn(
            t,
            e,
            n
          ), t !== null ? t.sibling : null);
        }
        ri(e);
        break;
      case 19:
        if (e.flags & 128)
          return ic(
            t,
            e,
            n
          );
        if (s = (t.flags & 128) !== 0, i = (n & e.childLanes) !== 0, i || (Hi(
          t,
          e,
          n,
          !1
        ), i = (n & e.childLanes) !== 0), s) {
          if (i)
            return ic(
              t,
              e,
              n
            );
          e.flags |= 128;
        }
        if (s = e.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), _l(e, de.current), i) break;
        return null;
      case 22:
        return e.lanes = 0, up(
          t,
          e,
          n,
          e.pendingProps
        );
      case 24:
        ii(e, Ft, t.memoizedState.cache);
    }
    return qn(t, e, n);
  }
  function vp(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        Wt = !0;
      else {
        if (!ac(t, n) && (e.flags & 128) === 0)
          return Wt = !1, SS(
            t,
            e,
            n
          );
        Wt = (t.flags & 131072) !== 0;
      }
    else
      Wt = !1, yt && (e.flags & 1048576) !== 0 && Ph(e, Al, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var i = e.pendingProps;
          if (t = Xi(e.elementType), e.type = t, typeof t == "function")
            fr(t) ? (i = ki(t, i), e.tag = 1, e = dp(
              null,
              e,
              t,
              i,
              n
            )) : (e.tag = 0, e = Ir(
              null,
              e,
              t,
              i,
              n
            ));
          else {
            if (t != null) {
              var s = t.$$typeof;
              if (s === G) {
                e.tag = 11, e = lp(
                  null,
                  e,
                  t,
                  i,
                  n
                );
                break t;
              } else if (s === dt) {
                e.tag = 14, e = sp(
                  null,
                  e,
                  t,
                  i,
                  n
                );
                break t;
              } else if (s === Ct) {
                e.tag = 10, e.type = t, e = gp(
                  null,
                  e,
                  n
                );
                break t;
              }
            }
            throw e = ut(t) || t, Error(u(306, e, ""));
          }
        }
        return e;
      case 0:
        return Ir(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 1:
        return i = e.type, s = ki(
          i,
          e.pendingProps
        ), dp(
          t,
          e,
          i,
          s,
          n
        );
      case 3:
        t: {
          if (Ts(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(u(387));
          i = e.pendingProps;
          var o = e.memoizedState;
          s = o.element, xr(t, e), wl(e, i, null, n);
          var f = e.memoizedState;
          if (i = f.cache, ii(e, Ft, i), i !== o.cache && vr(
            e,
            [Ft],
            n,
            !0
          ), Rl(), i = f.element, o.isDehydrated)
            if (o = {
              element: i,
              isDehydrated: !1,
              cache: f.cache
            }, e.updateQueue.baseState = o, e.memoizedState = o, e.flags & 256) {
              e = hp(
                t,
                e,
                i,
                n
              );
              break t;
            } else if (i !== s) {
              s = ke(
                Error(u(424)),
                e
              ), xl(s), e = hp(
                t,
                e,
                i,
                n
              );
              break t;
            } else
              for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Ht = We(t.firstChild), le = e, yt = !0, ei = null, Fe = !0, n = um(
                e,
                null,
                i,
                n
              ), e.child = n; n; )
                n.flags = n.flags & -3 | 134221824, n = n.sibling;
          else {
            if (Li(), i === s) {
              e = qn(
                t,
                e,
                n
              );
              break t;
            }
            ee(t, e, i, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return wa(t, e), t === null ? (n = Xy(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = n : yt || (e.stateNode = Ey(
          e.type,
          e.pendingProps,
          Pn.current,
          e
        )) : e.memoizedState = Xy(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return wu(e), t === null && yt && (i = e.stateNode = Hy(
          e.type,
          e.pendingProps,
          Pn.current
        ), le = e, Fe = !0, s = Ht, vi(e.type) ? (tf = s, Ht = We(i.firstChild)) : Ht = s), ee(
          t,
          e,
          e.pendingProps.children,
          n
        ), wa(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && yt && ((s = i = Ht) && (i = mT(
          i,
          e.type,
          e.pendingProps,
          Fe
        ), i !== null ? (e.stateNode = i, le = e, Ht = We(i.firstChild), Fe = !1, s = !0) : s = !1), s || ni(e)), wu(e), s = e.type, o = e.pendingProps, f = t !== null ? t.memoizedProps : null, i = o.children, Zc(s, o) ? i = null : f !== null && Zc(s, f) && (e.flags |= 32), e.memoizedState !== null && (s = _r(
          t,
          e,
          rS,
          null,
          null,
          n
        ), Pa._currentValue = s), wa(t, e), ee(t, e, i, n), e.child;
      case 6:
        return t === null && yt && ((t = n = Ht) && (n = pT(
          n,
          e.pendingProps,
          Fe
        ), n !== null ? (e.stateNode = n, le = e, Ht = null, t = !0) : t = !1), t || ni(e)), null;
      case 13:
        return mp(t, e, n);
      case 4:
        return Ts(
          e,
          e.stateNode.containerInfo
        ), i = e.pendingProps, t === null ? e.child = Zi(
          e,
          null,
          i,
          n
        ) : ee(t, e, i, n), e.child;
      case 11:
        return lp(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 7:
        return i = e.pendingProps, wa(t, e), ee(t, e, i, n), e.child;
      case 8:
        return ee(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 12:
        return ee(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 10:
        return gp(t, e, n);
      case 9:
        return s = e.type._context, i = e.pendingProps.children, Gi(e), s = ce(s), i = i(s), e.flags |= 1, ee(t, e, i, n), e.child;
      case 14:
        return sp(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 15:
        return op(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 19:
        return ic(t, e, n);
      case 31:
        return vS(t, e, n);
      case 22:
        return up(
          t,
          e,
          n,
          e.pendingProps
        );
      case 24:
        return Gi(e), i = ce(Ft), t === null ? (s = Tr(), s === null && (s = Ut, o = br(), s.pooledCache = o, o.refCount++, o !== null && (s.pooledCacheLanes |= n), s = o), e.memoizedState = { parent: i, cache: s }, Ar(e), ii(e, Ft, s)) : ((t.lanes & n) !== 0 && (xr(t, e), wl(e, null, null, n), Rl()), s = t.memoizedState, o = e.memoizedState, s.parent !== i ? (s = { parent: i, cache: i }, e.memoizedState = s, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = s), ii(e, Ft, i)) : (i = o.cache, ii(e, Ft, i), i !== s.cache && vr(
          e,
          [Ft],
          n,
          !0
        ))), ee(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 30:
        return e.stateNode === null && (e.stateNode = {
          autoName: null,
          paired: null,
          clones: null,
          ref: null
        }), i = e.pendingProps, i.name != null && i.name !== "auto" ? e.flags |= t === null ? 18882560 : 18874368 : yt && Zs(e), t !== null && t.memoizedProps.name !== i.name ? e.flags |= 4194816 : wa(t, e), ee(t, e, i.children, n), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(u(156, e.tag));
  }
  function Xn(t) {
    t.flags |= 4;
  }
  function lc(t, e, n, i, s) {
    var o;
    if ((o = (t.mode & 32) !== 0) && (o = n === null ? ky(e, i) : ky(e, i) && (i.src !== n.src || i.srcSet !== n.srcSet)), o) {
      if (t.flags |= 16777216, (s & 335544128) === s)
        if (t.stateNode.complete) t.flags |= 8192;
        else if ($p()) t.flags |= 8192;
        else
          throw Qi = Ws, Er;
    } else t.flags &= -16777217;
  }
  function bp(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !Jy(e))
      if ($p()) t.flags |= 8192;
      else
        throw Qi = Ws, Er;
  }
  function vo(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? kd() : 536870912, t.lanes |= e, Ba |= e);
  }
  function Ll(t, e) {
    if (!yt)
      switch (t.tailMode) {
        case "visible":
          break;
        case "collapsed":
          for (var n = t.tail, i = null; n !== null; )
            n.alternate !== null && (i = n), n = n.sibling;
          i === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : i.sibling = null;
          break;
        default:
          for (e = t.tail, n = null; e !== null; )
            e.alternate !== null && (n = e), e = e.sibling;
          n === null ? t.tail = null : n.sibling = null;
      }
  }
  function Gt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, n = 0, i = 0;
    if (e)
      for (var s = t.child; s !== null; )
        n |= s.lanes | s.childLanes, i |= s.subtreeFlags & 1206910976, i |= s.flags & 1206910976, s.return = t, s = s.sibling;
    else
      for (s = t.child; s !== null; )
        n |= s.lanes | s.childLanes, i |= s.subtreeFlags, i |= s.flags, s.return = t, s = s.sibling;
    return t.subtreeFlags |= i, t.childLanes = n, e;
  }
  function TS(t, e, n) {
    var i = e.pendingProps;
    switch (mr(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Gt(e), null;
      case 1:
        return Gt(e), null;
      case 3:
        return n = e.stateNode, i = null, t !== null && (i = t.memoizedState.cache), e.memoizedState.cache !== i && (e.flags |= 2048), Hn(Ft), ua(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (xa(e) ? Xn(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, yr())), Gt(e), null;
      case 26:
        var s = e.type, o = e.memoizedState;
        return t === null ? (Xn(e), o !== null ? (Gt(e), bp(e, o)) : (Gt(e), lc(
          e,
          s,
          null,
          i,
          n
        ))) : o ? o !== t.memoizedState ? (Xn(e), Gt(e), bp(e, o)) : (Gt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== i && Xn(e), Gt(e), lc(
          e,
          s,
          t,
          i,
          n
        )), null;
      case 27:
        if (Es(e), n = Pn.current, s = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== i && Xn(e);
        else {
          if (!i) {
            if (e.stateNode === null)
              throw Error(u(166));
            return Gt(e), e.subtreeFlags &= -33554433, null;
          }
          t = mn.current, xa(e) ? Ih(e) : (t = Hy(s, i, n), e.stateNode = t, Xn(e));
        }
        return Gt(e), e.subtreeFlags &= -33554433, null;
      case 5:
        if (Es(e), s = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== i && Xn(e);
        else {
          if (!i) {
            if (e.stateNode === null)
              throw Error(u(166));
            return Gt(e), e.subtreeFlags &= -33554433, null;
          }
          if (o = mn.current, xa(e))
            Ih(e);
          else {
            var f = Jl(
              Pn.current
            );
            switch (o) {
              case 1:
                o = f.createElementNS(
                  "http://www.w3.org/2000/svg",
                  s
                );
                break;
              case 2:
                o = f.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  s
                );
                break;
              default:
                switch (s) {
                  case "svg":
                    o = f.createElementNS(
                      "http://www.w3.org/2000/svg",
                      s
                    );
                    break;
                  case "math":
                    o = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s
                    );
                    break;
                  case "script":
                    o = f.createElement("div"), o.innerHTML = "<script><\/script>", o = o.removeChild(
                      o.firstChild
                    );
                    break;
                  case "select":
                    o = typeof i.is == "string" ? f.createElement("select", {
                      is: i.is
                    }) : f.createElement("select"), i.multiple ? o.multiple = !0 : i.size && (o.size = i.size);
                    break;
                  default:
                    o = typeof i.is == "string" ? f.createElement(s, { is: i.is }) : f.createElement(s);
                }
            }
            o[re] = e, o[Me] = i;
            t: for (f = e.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6)
                o.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                f.child.return = f, f = f.child;
                continue;
              }
              if (f === e) break t;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === e)
                  break t;
                f = f.return;
              }
              f.sibling.return = f.return, f = f.sibling;
            }
            e.stateNode = o;
            t: switch (me(o, s, i), s) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                i = !!i.autoFocus;
                break t;
              case "img":
                i = !0;
                break t;
              default:
                i = !1;
            }
            i && Xn(e);
          }
        }
        return Gt(e), e.subtreeFlags &= -33554433, lc(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          n
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== i && Xn(e);
        else {
          if (typeof i != "string" && e.stateNode === null)
            throw Error(u(166));
          if (t = Pn.current, xa(e)) {
            if (t = e.stateNode, n = e.memoizedProps, i = null, s = le, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  i = s.memoizedProps;
              }
            t[re] = e, t = !!(t.nodeValue === n || i !== null && i.suppressHydrationWarning === !0 || vy(t.nodeValue, n)), t || ni(e, !0);
          } else
            t = Jl(t).createTextNode(
              i
            ), t[re] = e, e.stateNode = t;
        }
        return Gt(e), null;
      case 31:
        if (n = e.memoizedState, t === null || t.memoizedState !== null) {
          if (i = xa(e), n !== null) {
            if (t === null) {
              if (!i) throw Error(u(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(u(557));
              t[re] = e;
            } else
              Li(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Gt(e), t = !1;
          } else
            n = yr(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), t = !0;
          if (!t)
            return e.flags & 256 ? (je(e), e) : (je(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(u(558));
        }
        return Gt(e), null;
      case 13:
        if (i = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (s = xa(e), i !== null && i.dehydrated !== null) {
            if (t === null) {
              if (!s) throw Error(u(318));
              if (s = e.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(u(317));
              s[re] = e;
            } else
              Li(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Gt(e), s = !1;
          } else
            s = yr(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return e.flags & 256 ? (je(e), e) : (je(e), null);
        }
        return je(e), (e.flags & 128) !== 0 ? (e.lanes = n, e) : (n = i !== null, t = t !== null && t.memoizedState !== null, n && (i = e.child, s = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (s = i.alternate.memoizedState.cachePool.pool), o = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (o = i.memoizedState.cachePool.pool), o !== s && (i.flags |= 2048)), n !== t && n && (e.child.flags |= 8192), vo(e, e.updateQueue), Gt(e), null);
      case 4:
        return ua(), t === null && Gc(e.stateNode.containerInfo), e.flags |= 67108864, Gt(e), null;
      case 10:
        return Hn(e.type), Gt(e), null;
      case 19:
        if (Rr(e), i = e.memoizedState, i === null) return Gt(e), null;
        if (s = (e.flags & 128) !== 0, o = i.rendering, o === null)
          if (s) Ll(i, !1);
          else {
            if (Zt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (o = no(t), o !== null) {
                  for (e.flags |= 128, Ll(i, !1), t = o.updateQueue, e.updateQueue = t, vo(e, t), e.subtreeFlags = 0, t = n, n = e.child; n !== null; )
                    Kh(n, t), n = n.sibling;
                  return _l(
                    e,
                    de.current & 1 | 2
                  ), yt && Ln(e, i.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            i.tail !== null && Ne() > Ro && (e.flags |= 128, s = !0, Ll(i, !1), e.lanes = 4194304);
          }
        else {
          if (!s)
            if (t = no(o), t !== null) {
              if (e.flags |= 128, s = !0, t = t.updateQueue, e.updateQueue = t, vo(e, t), Ll(i, !0), i.tail === null && i.tailMode !== "collapsed" && i.tailMode !== "visible" && !o.alternate && !yt)
                return Gt(e), null;
            } else
              2 * Ne() - i.renderingStartTime > Ro && n !== 536870912 && (e.flags |= 128, s = !0, Ll(i, !1), e.lanes = 4194304);
          i.isBackwards ? (o.sibling = e.child, e.child = o) : (t = i.last, t !== null ? t.sibling = o : e.child = o, i.last = o);
        }
        if (i.tail !== null) {
          t = i.tail;
          t: {
            for (n = t; n !== null; ) {
              if (n.alternate !== null) {
                n = !1;
                break t;
              }
              n = n.sibling;
            }
            n = !0;
          }
          return i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Ne(), t.sibling = null, o = de.current, o = s ? o & 1 | 2 : o & 1, i.tailMode === "visible" || i.tailMode === "collapsed" || !n || yt ? _l(e, o) : (n = o, jt(fe, e), jt(de, n), ve === null && (ve = e)), yt && Ln(e, i.treeForkCount), t;
        }
        return Gt(e), null;
      case 22:
      case 23:
        return je(e), zr(), i = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== i && (e.flags |= 8192) : i && (e.flags |= 8192), i ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && (Gt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Gt(e), n = e.updateQueue, n !== null && vo(e, n.retryQueue), n = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), i = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), i !== n && (e.flags |= 2048), t !== null && ue(qi), null;
      case 24:
        return n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), Hn(Ft), Gt(e), null;
      case 25:
        return null;
      case 30:
        return e.flags |= 33554432, Gt(e), null;
    }
    throw Error(u(156, e.tag));
  }
  function ES(t, e) {
    switch (mr(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return Hn(Ft), ua(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return Es(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (je(e), e.alternate === null)
            throw Error(u(340));
          Li();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (je(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(u(340));
          Li();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return Rr(e), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, t = e.memoizedState, t !== null && (t.rendering = null, t.tail = null), e.flags |= 4, e) : null;
      case 4:
        return ua(), null;
      case 10:
        return Hn(e.type), null;
      case 22:
      case 23:
        return je(e), zr(), t !== null && ue(qi), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return Hn(Ft), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Sp(t, e) {
    switch (mr(e), e.tag) {
      case 3:
        Hn(Ft), ua();
        break;
      case 26:
      case 27:
      case 5:
        Es(e);
        break;
      case 4:
        ua();
        break;
      case 31:
        e.memoizedState !== null && je(e);
        break;
      case 13:
        je(e);
        break;
      case 19:
        Rr(e);
        break;
      case 10:
        Hn(e.type);
        break;
      case 22:
      case 23:
        je(e), zr(), t !== null && ue(qi);
        break;
      case 24:
        Hn(Ft);
    }
  }
  function jl(t, e) {
    try {
      var n = e.updateQueue, i = n !== null ? n.lastEffect : null;
      if (i !== null) {
        var s = i.next;
        n = s;
        do {
          if ((n.tag & t) === t) {
            i = void 0;
            var o = n.create, f = n.inst;
            i = o(), f.destroy = i;
          }
          n = n.next;
        } while (n !== s);
      }
    } catch (p) {
      _t(e, e.return, p);
    }
  }
  function fi(t, e, n) {
    try {
      var i = e.updateQueue, s = i !== null ? i.lastEffect : null;
      if (s !== null) {
        var o = s.next;
        i = o;
        do {
          if ((i.tag & t) === t) {
            var f = i.inst, p = f.destroy;
            if (p !== void 0) {
              f.destroy = void 0, s = e;
              var S = n, M = p;
              try {
                M();
              } catch (O) {
                _t(
                  s,
                  S,
                  O
                );
              }
            }
          }
          i = i.next;
        } while (i !== o);
      }
    } catch (O) {
      _t(e, e.return, O);
    }
  }
  function Tp(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        cm(e, n);
      } catch (i) {
        _t(t, t.return, i);
      }
    }
  }
  function Ep(t, e, n) {
    n.props = ki(
      t.type,
      t.memoizedProps
    ), n.state = t.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (i) {
      _t(t, e, i);
    }
  }
  function vn(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var i = t.stateNode;
            break;
          case 30:
            var s = t.stateNode, o = Vn(t.memoizedProps, s);
            (s.ref === null || s.ref.name !== o) && (s.ref = Oy(o)), i = s.ref;
            break;
          case 7:
            if (t.stateNode === null) {
              var f = new Xe(t);
              y(
                t.child,
                !1,
                dT,
                f,
                void 0,
                void 0
              ), t.stateNode = f;
            }
            i = t.stateNode;
            break;
          default:
            i = t.stateNode;
        }
        typeof n == "function" ? t.refCleanup = n(i) : n.current = i;
      }
    } catch (p) {
      _t(t, e, p);
    }
  }
  function he(t, e) {
    var n = t.ref, i = t.refCleanup;
    if (n !== null)
      if (typeof i == "function")
        try {
          i();
        } catch (s) {
          _t(t, e, s);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (s) {
          _t(t, e, s);
        }
      else n.current = null;
  }
  function bo(t, e) {
    if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && t.alternate === null && e !== null)
      for (var n = 0; n < e.length; n++)
        Uy(
          t.stateNode,
          e[n]
        );
  }
  function Ap(t) {
    for (var e = t.return; e !== null && (oc(e) && Uy(t.stateNode, e.stateNode), !sc(e)); )
      e = e.return;
  }
  function Hl(t) {
    for (var e = t.return; e !== null && (oc(e) && hT(t.stateNode, e.stateNode), !sc(e)); )
      e = e.return;
  }
  function sc(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 27;
  }
  function oc(t) {
    return t && t.tag === 7 && t.stateNode !== null;
  }
  function uc(t) {
    var e = t.type, n = t.memoizedProps, i = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && i.focus();
          break t;
        case "img":
          n.src ? i.src = n.src : n.srcSet && (i.srcset = n.srcSet);
      }
    } catch (s) {
      _t(t, t.return, s);
    }
  }
  function rc(t, e, n) {
    try {
      var i = t.stateNode;
      JS(i, t.type, n, e), i[Me] = e;
    } catch (s) {
      _t(t, t.return, s);
    }
  }
  function xp(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && vi(t.type) || t.tag === 4;
  }
  function cc(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || xp(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && vi(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function fc(t, e, n, i) {
    var s = t.tag;
    if (s === 5 || s === 6)
      s = t.stateNode, e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(s, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, e.appendChild(s), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = pn)), bo(t, i), zt = !0;
    else if (s !== 4 && (s === 27 && (bo(t, i), i = null, vi(t.type) && (n = t.stateNode, e = null)), t = t.child, t !== null))
      for (fc(
        t,
        e,
        n,
        i
      ), t = t.sibling; t !== null; )
        fc(
          t,
          e,
          n,
          i
        ), t = t.sibling;
  }
  function So(t, e, n, i) {
    var s = t.tag;
    if (s === 5 || s === 6)
      s = t.stateNode, e ? n.insertBefore(s, e) : n.appendChild(s), bo(t, i), zt = !0;
    else if (s !== 4 && (s === 27 && (bo(t, i), i = null, vi(t.type) && (n = t.stateNode)), t = t.child, t !== null))
      for (So(
        t,
        e,
        n,
        i
      ), t = t.sibling; t !== null; )
        So(
          t,
          e,
          n,
          i
        ), t = t.sibling;
  }
  function Cp(t) {
    var e = t.stateNode, n = t.memoizedProps;
    try {
      for (var i = t.type, s = e.attributes; s.length; )
        e.removeAttributeNode(s[0]);
      me(e, i, n), e[re] = t, e[Me] = n;
    } catch (o) {
      _t(t, t.return, o);
    }
  }
  var To = !1, He = null;
  function Mp(t) {
    (t.tag === 30 || (t.subtreeFlags & 33554432) !== 0) && (To = !0);
  }
  var bn = null;
  function Dp() {
    var t = bn;
    return bn = null, t;
  }
  var ze = 0;
  function _a(t, e, n, i, s) {
    return ze = 0, zp(
      t.child,
      e,
      n,
      i,
      s
    );
  }
  function zp(t, e, n, i, s) {
    for (var o = !1; t !== null; ) {
      if (t.tag === 5) {
        var f = t.stateNode;
        if (i !== null) {
          var p = Jc(f);
          i.push(p), p.view && (o = !0);
        } else
          o || Jc(f).view && (o = !0);
        To = !0, Dy(
          f,
          ze === 0 ? e : e + "_" + ze,
          n
        ), ze++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && s || zp(
        t.child,
        e,
        n,
        i,
        s
      ) && (o = !0));
      t = t.sibling;
    }
    return o;
  }
  function Sn(t, e) {
    for (; t !== null; )
      t.tag === 5 ? zy(t.stateNode, t.memoizedProps) : (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && e || Sn(
        t.child,
        e
      )), t = t.sibling;
  }
  function Eo(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if ((t.tag !== 22 || t.memoizedState === null) && (Eo(t), t.tag === 30 && (t.flags & 18874368) !== 0 && t.stateNode.paired)) {
          var e = t.memoizedProps;
          if (e.name == null || e.name === "auto")
            throw Error(u(544));
          var n = e.name;
          e = Un(e.default, e.share), e !== "none" && (_a(
            t,
            n,
            e,
            null,
            !1
          ) || Sn(t.child, !1));
        }
        t = t.sibling;
      }
  }
  function dc(t, e) {
    if (t.tag === 30) {
      var n = t.stateNode, i = t.memoizedProps, s = Vn(i, n), o = Un(
        i.default,
        n.paired ? i.share : i.enter
      );
      o !== "none" ? _a(t, s, o, null, !1) ? (Eo(t), n.paired || e || Ga(t, i.onEnter)) : Sn(t.child, !1) : Eo(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        dc(t, e), t = t.sibling;
    else Eo(t);
  }
  function hc(t) {
    if (He !== null && He.size !== 0) {
      var e = He;
      if ((t.subtreeFlags & 18874368) !== 0)
        for (t = t.child; t !== null; ) {
          if (t.tag !== 22 || t.memoizedState === null) {
            if (t.tag === 30 && (t.flags & 18874368) !== 0) {
              var n = t.memoizedProps, i = n.name;
              if (i != null && i !== "auto") {
                var s = e.get(i);
                if (s !== void 0) {
                  var o = Un(
                    n.default,
                    n.share
                  );
                  if (o !== "none" && (_a(
                    t,
                    i,
                    o,
                    null,
                    !1
                  ) ? (o = t.stateNode, s.paired = o, o.paired = s, Ga(t, n.onShare)) : Sn(t.child, !1)), e.delete(i), e.size === 0) break;
                }
              }
            }
            hc(t);
          }
          t = t.sibling;
        }
    }
  }
  function mc(t) {
    if (t.tag === 30) {
      var e = t.memoizedProps, n = Vn(e, t.stateNode), i = He !== null ? He.get(n) : void 0, s = Un(
        e.default,
        i !== void 0 ? e.share : e.exit
      );
      s !== "none" && (_a(t, n, s, null, !1) ? i !== void 0 ? (s = t.stateNode, i.paired = s, s.paired = i, He.delete(n), Ga(t, e.onShare)) : Ga(t, e.onExit) : Sn(t.child, !1)), He !== null && hc(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        mc(t), t = t.sibling;
    else
      He !== null && hc(t);
  }
  function Op(t) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var e = t.memoizedProps, n = Vn(e, t.stateNode);
        e = Un(e.default, e.update), t.flags &= -5, e !== "none" && _a(
          t,
          n,
          e,
          t.memoizedState = [],
          !1
        );
      } else
        (t.subtreeFlags & 33554432) !== 0 && Op(t);
      t = t.sibling;
    }
  }
  function pc(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if (t.tag !== 22 || t.memoizedState === null) {
          if (t.tag === 30 && (t.flags & 18874368) !== 0) {
            var e = t.stateNode;
            e.paired !== null && (e.paired = null, Sn(t.child, !1));
          }
          pc(t);
        }
        t = t.sibling;
      }
  }
  function Ao(t) {
    if (t.tag === 30)
      t.stateNode.paired = null, Sn(t.child, !1), pc(t);
    else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        Ao(t), t = t.sibling;
    else pc(t);
  }
  function Rp(t) {
    for (t = t.child; t !== null; )
      t.tag === 30 ? Sn(t.child, !1) : (t.subtreeFlags & 33554432) !== 0 && Rp(t), t = t.sibling;
  }
  function yc(t, e, n, i, s, o, f) {
    for (var p = !1; e !== null; ) {
      if (e.tag === 5) {
        var S = e.stateNode;
        if (o !== null && ze < o.length) {
          var M = o[ze], O = Jc(S);
          (M.view || O.view) && (p = !0);
          var B;
          if (B = (t.flags & 4) === 0)
            if (O.clip) B = !0;
            else {
              B = M.rect;
              var x = O.rect;
              B = B.y !== x.y || B.x !== x.x || B.height !== x.height || B.width !== x.width;
            }
          B && (t.flags |= 4), O.abs ? O = !M.abs : (M = M.rect, O = O.rect, O = M.height !== O.height || M.width !== O.width), O && (t.flags |= 32);
        } else t.flags |= 32;
        (t.flags & 4) !== 0 && Dy(
          S,
          ze === 0 ? n : n + "_" + ze,
          s
        ), p && (t.flags & 4) !== 0 || (bn === null && (bn = []), bn.push(
          S,
          ze === 0 ? i : i + "_" + ze,
          e.memoizedProps
        )), ze++;
      } else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && f ? t.flags |= e.flags & 32 : yc(
        t,
        e.child,
        n,
        i,
        s,
        o,
        f
      ) && (p = !0));
      e = e.sibling;
    }
    return p;
  }
  function wp(t, e) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var n = t.memoizedProps, i = t.stateNode, s = Vn(n, i), o = Un(n.default, n.update), f;
        f = t.memoizedState, t.memoizedState = null, i = t;
        var p = t.child;
        ze = 0, s = yc(
          i,
          p,
          s,
          s,
          o,
          f,
          !1
        ), (t.flags & 4) !== 0 && s && Ga(t, n.onUpdate);
      } else
        (t.subtreeFlags & 33554432) !== 0 && wp(t);
      t = t.sibling;
    }
  }
  var se = !1, Rt = !1, Tn = !1, gc = !1, _p = typeof WeakSet == "function" ? WeakSet : Set, oe = null, En = !1, Gl = !1, xo = !1, vc = !1;
  function AS(t, e, n) {
    if (t = t.containerInfo, Xc = Fa, t = Bh(t), ar(t)) {
      if ("selectionStart" in t)
        var i = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          i = (i = t.ownerDocument) && i.defaultView || window;
          var s = i.getSelection && i.getSelection();
          if (s && s.rangeCount !== 0) {
            i = s.anchorNode;
            var o = s.anchorOffset, f = s.focusNode;
            s = s.focusOffset;
            try {
              i.nodeType, f.nodeType;
            } catch {
              i = null;
              break t;
            }
            var p = 0, S = -1, M = -1, O = 0, B = 0, x = t, z = null;
            e: for (; ; ) {
              for (var Z; x !== i || o !== 0 && x.nodeType !== 3 || (S = p + o), x !== f || s !== 0 && x.nodeType !== 3 || (M = p + s), x.nodeType === 3 && (p += x.nodeValue.length), (Z = x.firstChild) !== null; )
                z = x, x = Z;
              for (; ; ) {
                if (x === t) break e;
                if (z === i && ++O === o && (S = p), z === f && ++B === s && (M = p), (Z = x.nextSibling) !== null) break;
                x = z, z = x.parentNode;
              }
              x = Z;
            }
            i = S === -1 || M === -1 ? null : { start: S, end: M };
          } else i = null;
        }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (Qc = { focusedElem: t, selectionRange: i }, Fa = !1, n = (n & 335544064) === n, oe = e, e = n ? 9270 : 1024; oe !== null; ) {
      if (t = oe, n && (i = t.deletions, i !== null))
        for (o = 0; o < i.length; o++)
          n && mc(i[o]);
      if (t.alternate === null && (t.flags & 2) !== 0)
        n && Mp(t), Co(n);
      else {
        if (t.tag === 22) {
          if (i = t.alternate, t.memoizedState !== null) {
            i !== null && i.memoizedState === null && n && mc(i), Co(n);
            continue;
          } else if (i !== null && i.memoizedState !== null) {
            n && Mp(t), Co(n);
            continue;
          }
        }
        i = t.child, (t.subtreeFlags & e) !== 0 && i !== null ? (i.return = t, oe = i) : (n && Op(t), Co(n));
      }
    }
    He = null;
  }
  function Co(t) {
    for (; oe !== null; ) {
      var e = oe, n = t, i = e.alternate, s = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((s & 1024) !== 0 && i !== null) {
            n = void 0, s = i.memoizedProps, i = i.memoizedState;
            var o = e.stateNode;
            try {
              var f = ki(
                e.type,
                s
              );
              n = o.getSnapshotBeforeUpdate(
                f,
                i
              ), o.__reactInternalSnapshotBeforeUpdate = n;
            } catch (p) {
              _t(e, e.return, p);
            }
          }
          break;
        case 3:
          if ((s & 1024) !== 0) {
            if (i = e.stateNode.containerInfo, n = i.nodeType, n === 9)
              Ic(i);
            else if (n === 1)
              switch (i.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  Ic(i);
                  break;
                default:
                  i.textContent = "";
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
        case 30:
          n && i !== null && (n = Vn(
            i.memoizedProps,
            i.stateNode
          ), s = e.memoizedProps, s = Un(s.default, s.update), s !== "none" && _a(
            i,
            n,
            s,
            i.memoizedState = [],
            !0
          ));
          break;
        default:
          if ((s & 1024) !== 0) throw Error(u(163));
      }
      if (i = e.sibling, i !== null) {
        i.return = e.return, oe = i;
        break;
      }
      oe = e.return;
    }
  }
  function Np(t, e, n) {
    var i = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        An(t, n), i & 4 && jl(5, n);
        break;
      case 1:
        if (An(t, n), i & 4)
          if (t = n.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (f) {
              _t(n, n.return, f);
            }
          else {
            var s = ki(
              n.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              t.componentDidUpdate(
                s,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (f) {
              _t(
                n,
                n.return,
                f
              );
            }
          }
        i & 64 && Tp(n), i & 512 && vn(n, n.return);
        break;
      case 3:
        if (An(t, n), i & 64 && (t = n.updateQueue, t !== null)) {
          if (e = null, n.child !== null)
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            cm(t, e);
          } catch (f) {
            _t(n, n.return, f);
          }
        }
        break;
      case 27:
        e === null && i & 4 && Cp(n);
      case 26:
      case 5:
        An(t, n), e === null && i & 4 && uc(n), i & 512 && vn(n, n.return);
        break;
      case 12:
        An(t, n);
        break;
      case 31:
        An(t, n), i & 4 && Lp(t, n);
        break;
      case 13:
        An(t, n), i & 4 && jp(t, n), i & 64 && (t = n.memoizedState, t !== null && (t = t.dehydrated, t !== null && (n = US.bind(
          null,
          n
        ), yT(t, n))));
        break;
      case 22:
        if (i = n.memoizedState !== null || se, !i) {
          var o = e !== null && e.memoizedState !== null || Rt;
          e = se, s = Rt, se = i, (Rt = o) && !s ? (i = 2, (n.subtreeFlags & 8772) !== 0 && (i |= 1), sn(
            t,
            n,
            i
          )) : An(t, n), se = e, Rt = s;
        }
        break;
      case 30:
        An(t, n), i & 512 && vn(n, n.return);
        break;
      case 7:
        i & 512 && vn(n, n.return);
      default:
        An(t, n);
    }
  }
  function bc(t, e) {
    for (t = t.child; t !== null; )
      Vp(t, e), t = t.sibling;
  }
  function Vp(t, e) {
    switch (t.tag) {
      case 5:
      case 26:
        try {
          var n = t.stateNode;
          if (e) {
            var i = n.style;
            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
          } else {
            var s = t.stateNode, o = t.memoizedProps.style, f = o != null && o.hasOwnProperty("display") ? o.display : null;
            s.style.display = f == null || typeof f == "boolean" ? "" : ("" + f).trim();
          }
        } catch (S) {
          _t(t, t.return, S);
        }
        Sc(t, e);
        break;
      case 6:
        try {
          t.stateNode.nodeValue = e ? "" : t.memoizedProps, zt = !0;
        } catch (S) {
          _t(t, t.return, S);
        }
        break;
      case 18:
        try {
          var p = t.stateNode;
          e ? My(p, !0) : My(t.stateNode, !1);
        } catch (S) {
          _t(t, t.return, S);
        }
        break;
      case 22:
      case 23:
        t.memoizedState === null && bc(t, e);
        break;
      default:
        bc(t, e);
    }
  }
  function Sc(t, e) {
    if (t.subtreeFlags & 67108864)
      for (t = t.child; t !== null; ) {
        t: {
          var n = t, i = e;
          switch (n.tag) {
            case 4:
              Vp(n, i);
              break t;
            case 22:
              n.memoizedState === null && Sc(n, i);
              break t;
            default:
              Sc(n, i);
          }
        }
        t = t.sibling;
      }
  }
  function Up(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, Up(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Os(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Yt = null, Oe = !1;
  function an(t, e, n) {
    for (n = n.child; n !== null; )
      Bp(t, e, n), n = n.sibling;
  }
  function Bp(t, e, n) {
    if (Ve && typeof Ve.onCommitFiberUnmount == "function")
      try {
        Ve.onCommitFiberUnmount(rl, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        Rt || he(n, e), an(
          t,
          e,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && !Rt && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Rt || he(n, e), Hl(n);
        var i = Yt, s = Oe;
        vi(n.type) && (Yt = n.stateNode, Oe = !1), an(
          t,
          e,
          n
        ), Gy(
          n.stateNode,
          n.type,
          n.memoizedProps
        ), Yt = i, Oe = s;
        break;
      case 5:
        Rt || he(n, e), Hl(n);
      case 6:
        if (n.tag === 6 && Hl(n), i = Yt, s = Oe, Yt = null, an(
          t,
          e,
          n
        ), Yt = i, Oe = s, Yt !== null)
          if (Oe)
            try {
              (Yt.nodeType === 9 ? Yt.body : Yt.nodeName === "HTML" ? Yt.ownerDocument.body : Yt).removeChild(n.stateNode), zt = !0;
            } catch (o) {
              _t(
                n,
                e,
                o
              );
            }
          else
            try {
              Yt.removeChild(n.stateNode), zt = !0;
            } catch (o) {
              _t(
                n,
                e,
                o
              );
            }
        break;
      case 18:
        Yt !== null && (Oe ? (t = Yt, Cy(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          n.stateNode
        ), Ia(t)) : Cy(Yt, n.stateNode));
        break;
      case 4:
        i = Yt, s = Oe, Yt = n.stateNode.containerInfo, Oe = !0, an(
          t,
          e,
          n
        ), Yt = i, Oe = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        fi(2, n, e), Rt || fi(4, n, e), an(
          t,
          e,
          n
        );
        break;
      case 1:
        Rt || (he(n, e), i = n.stateNode, typeof i.componentWillUnmount == "function" && Ep(
          n,
          e,
          i
        )), an(
          t,
          e,
          n
        );
        break;
      case 21:
        an(
          t,
          e,
          n
        );
        break;
      case 22:
        Rt = (i = Rt) || n.memoizedState !== null, an(
          t,
          e,
          n
        ), Rt = i;
        break;
      case 30:
        he(n, e), an(
          t,
          e,
          n
        );
        break;
      case 7:
        Rt || he(n, e), an(
          t,
          e,
          n
        );
        break;
      default:
        an(
          t,
          e,
          n
        );
    }
  }
  function Lp(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        Ia(t);
      } catch (n) {
        _t(e, e.return, n);
      }
    }
  }
  function jp(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Ia(t);
      } catch (n) {
        _t(e, e.return, n);
      }
  }
  function xS(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new _p()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new _p()), e;
      default:
        throw Error(u(435, t.tag));
    }
  }
  function Mo(t, e) {
    var n = xS(t);
    e.forEach(function(i) {
      if (!n.has(i)) {
        n.add(i);
        var s = BS.bind(null, t, i);
        i.then(s, s);
      }
    });
  }
  function Te(t, e, n) {
    var i = e.deletions;
    if (i !== null)
      for (var s = 0; s < i.length; s++) {
        var o = i[s], f = t, p = e, S = p;
        t: for (; S !== null; ) {
          switch (S.tag) {
            case 27:
              if (vi(S.type)) {
                Yt = S.stateNode, Oe = !1;
                break t;
              }
              break;
            case 5:
              Yt = S.stateNode, Oe = !1;
              break t;
            case 3:
            case 4:
              Yt = S.stateNode.containerInfo, Oe = !0;
              break t;
          }
          S = S.return;
        }
        if (Yt === null) throw Error(u(160));
        Bp(f, p, o), Yt = null, Oe = !1, f = o.alternate, f !== null && (f.return = null), o.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        Hp(e, t, n), e = e.sibling;
  }
  var ln = null;
  function Hp(t, e, n) {
    var i = t.alternate, s = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (s & 4 && (i = t.updateQueue, i = i !== null ? i.events : null, i !== null))
          for (var o = 0; o < i.length; o++) {
            var f = i[o];
            f.ref.impl = f.nextImpl;
          }
        Te(e, t, n), Ee(t), s & 4 && (fi(3, t, t.return), jl(3, t), fi(5, t, t.return));
        break;
      case 1:
        Te(e, t, n), Ee(t), s & 512 && (Rt || i === null || he(i, i.return)), s & 64 && se && (t = t.updateQueue, t !== null && (e = t.callbacks, e !== null && (n = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = n === null ? e : n.concat(e))));
        break;
      case 26:
        if (o = ln, Te(e, t, n), Ee(t), s & 512 && (Rt || i === null || he(i, i.return)), s & 4)
          if (s = i !== null ? i.memoizedState : null, n = t.memoizedState, i === null)
            if (n === null)
              if (t.stateNode === null)
                if (se)
                  t.stateNode = Ey(
                    t.type,
                    t.memoizedProps,
                    e.containerInfo,
                    t
                  );
                else {
                  t: {
                    e = t.type, n = t.memoizedProps, s = o.ownerDocument || o;
                    e: switch (e) {
                      case "title":
                        i = s.getElementsByTagName("title")[0], (!i || i[dl] || i[re] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = s.createElement(e), s.head.insertBefore(
                          i,
                          s.querySelector("head > title")
                        )), me(i, e, n), i[re] = t, ae(i), e = i;
                        break t;
                      case "link":
                        if (o = Ky(
                          "link",
                          "href",
                          s
                        ).get(e + (n.href || ""))) {
                          for (f = 0; f < o.length; f++)
                            if (i = o[f], i.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && i.getAttribute("rel") === (n.rel == null ? null : n.rel) && i.getAttribute("title") === (n.title == null ? null : n.title) && i.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                              o.splice(f, 1);
                              break e;
                            }
                        }
                        i = s.createElement(e), me(i, e, n), s.head.appendChild(i);
                        break;
                      case "meta":
                        if (o = Ky(
                          "meta",
                          "content",
                          s
                        ).get(e + (n.content || ""))) {
                          for (f = 0; f < o.length; f++)
                            if (i = o[f], i.getAttribute("content") === (n.content == null ? null : "" + n.content) && i.getAttribute("name") === (n.name == null ? null : n.name) && i.getAttribute("property") === (n.property == null ? null : n.property) && i.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && i.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                              o.splice(f, 1);
                              break e;
                            }
                        }
                        i = s.createElement(e), me(i, e, n), s.head.appendChild(i);
                        break;
                      default:
                        throw Error(u(468, e));
                    }
                    i[re] = t, ae(i), e = i;
                  }
                  t.stateNode = e;
                }
              else
                se || lf(o, t.type, t.stateNode);
            else
              t.stateNode = Zy(
                o,
                n,
                t.memoizedProps
              );
          else
            s !== n ? (s === null ? (e = i.stateNode, e === null || Rt || e.parentNode.removeChild(e)) : s.count--, n === null ? se || lf(o, t.type, t.stateNode) : Zy(o, n, t.memoizedProps)) : n === null && t.stateNode !== null && rc(
              t,
              t.memoizedProps,
              i.memoizedProps
            );
        break;
      case 27:
        Te(e, t, n), Ee(t), s & 512 && (Rt || i === null || he(i, i.return)), i !== null && s & 4 && rc(
          t,
          t.memoizedProps,
          i.memoizedProps
        );
        break;
      case 5:
        if (o = Tn, Tn = !1, Te(e, t, n), Tn = o, Ee(t), s & 512 && (Rt || i === null || he(i, i.return)), t.flags & 32) {
          e = t.stateNode;
          try {
            ma(e, ""), zt = !0;
          } catch (O) {
            _t(t, t.return, O);
          }
        }
        s & 4 && t.stateNode != null && (e = t.memoizedProps, rc(
          t,
          e,
          i !== null ? i.memoizedProps : e
        )), s & 1024 && (gc = !0);
        break;
      case 6:
        if (Te(e, t, n), Ee(t), s & 4) {
          if (t.stateNode === null)
            throw Error(u(162));
          e = t.memoizedProps, n = t.stateNode;
          try {
            n.nodeValue = e, zt = !0;
          } catch (O) {
            _t(t, t.return, O);
          }
        }
        break;
      case 3:
        if (zt = !1, Yo = null, o = ln, ln = Pl(e.containerInfo), Te(e, t, n), ln = o, Ee(t), s & 4 && i !== null && i.memoizedState.isDehydrated)
          try {
            Ia(e.containerInfo);
          } catch (O) {
            _t(t, t.return, O);
          }
        gc && (gc = !1, Gp(t)), zt = !1;
        break;
      case 4:
        s = Tn, Tn = se, i = sh(), o = ln, ln = Pl(
          t.stateNode.containerInfo
        ), Te(e, t, n), Ee(t), ln = o, zt && Gl && (xo = !0), zt = i, Tn = s;
        break;
      case 12:
        Te(e, t, n), Ee(t);
        break;
      case 31:
        Te(e, t, n), Ee(t), s & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, Mo(t, e)));
        break;
      case 13:
        Te(e, t, n), Ee(t), t.child.flags & 8192 && t.memoizedState !== null != (i !== null && i.memoizedState !== null) && (Oo = Ne()), s & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, Mo(t, e)));
        break;
      case 22:
        o = t.memoizedState !== null, f = i !== null && i.memoizedState !== null;
        var p = se, S = Rt, M = Tn;
        se = p || o, Tn = M || o, Rt = S || f, Te(e, t, n), Rt = S, Tn = M, se = p, Ee(t), s & 8192 && (e = t.stateNode, e._visibility = o ? e._visibility & -2 : e._visibility | 1, !o || i === null || f || se || Rt || (e = f || Rt, n = se, i = Rt, se = o || se, Rt = e, di(t, 2), se = n, Rt = i), !o && Tn || bc(t, o)), s & 4 && (e = t.updateQueue, e !== null && (n = e.retryQueue, n !== null && (e.retryQueue = null, Mo(t, n))));
        break;
      case 19:
        Te(e, t, n), Ee(t), s & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, Mo(t, e)));
        break;
      case 30:
        s & 512 && (Rt || i === null || he(i, i.return)), s = sh(), o = Gl, f = (n & 335544064) === n, p = t.memoizedProps, Gl = f && Un(
          p.default,
          p.update
        ) !== "none", Te(e, t, n), Ee(t), f && i !== null && zt && (t.flags |= 4), Gl = o, zt = s;
        break;
      case 21:
        break;
      case 7:
        s & 512 && (Rt || i === null || he(i, i.return)), i && i.stateNode !== null && (i.stateNode._fragmentFiber = t);
      default:
        Te(e, t, n), Ee(t);
    }
  }
  function Ee(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, i = t.return; i !== null; ) {
          if (xp(i)) {
            n = i;
            break;
          }
          i = i.return;
        }
        i = null;
        for (var s = t.return; s !== null; ) {
          if (oc(s)) {
            var o = s.stateNode;
            i === null ? i = [o] : i.push(o);
          }
          if (sc(s)) break;
          s = s.return;
        }
        var f = i;
        if (n == null) throw Error(u(160));
        switch (n.tag) {
          case 27:
            var p = n.stateNode, S = cc(t);
            So(
              t,
              S,
              p,
              f
            );
            break;
          case 5:
            var M = n.stateNode;
            n.flags & 32 && (ma(M, ""), n.flags &= -33);
            var O = cc(t);
            So(
              t,
              O,
              M,
              f
            );
            break;
          case 3:
          case 4:
            var B = n.stateNode.containerInfo, x = cc(t);
            fc(
              t,
              x,
              B,
              f
            );
            break;
          default:
            throw Error(u(161));
        }
      } catch (z) {
        _t(t, t.return, z);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Gp(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        Gp(e), e.tag === 5 && e.flags & 1024 && (e = e.stateNode, Fa = !0, e.reset(), Fa = !1), t = t.sibling;
      }
  }
  function Na(t, e) {
    if (e.subtreeFlags & 9270)
      for (e = e.child; e !== null; )
        Yp(e, t), e = e.sibling;
    else wp(e);
  }
  function Yp(t, e) {
    var n = t.alternate;
    if (n === null) dc(t, !1);
    else
      switch (t.tag) {
        case 3:
          if (vc = En = !1, Dp(), Na(e, t), !En && !xo) {
            if (t = bn, t !== null)
              for (var i = 0; i < t.length; i += 3) {
                n = t[i];
                var s = t[i + 1];
                zy(n, t[i + 2]), n = n.ownerDocument.documentElement, n !== null && n.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(" + s + ")"
                  }
                );
              }
            t = e.containerInfo, t = t.nodeType === 9 ? t.documentElement : t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "" && (t.style.viewTransitionName = "none", t.animate(
              { opacity: [0, 0], pointerEvents: ["none", "none"] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition-group(root)"
              }
            ), t.animate(
              { width: [0, 0], height: [0, 0] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition"
              }
            )), vc = !0;
          }
          bn = null;
          break;
        case 5:
          Na(e, t);
          break;
        case 4:
          i = En, En = !1, Na(e, t), En && (xo = !0), En = i;
          break;
        case 22:
          t.memoizedState === null && (n.memoizedState !== null ? dc(t, !1) : Na(e, t));
          break;
        case 30:
          i = En, s = Dp(), En = !1, Na(e, t), En && (t.flags |= 4);
          var o = t.memoizedProps, f = t.stateNode;
          e = Vn(o, f), f = Vn(n.memoizedProps, f);
          var p = Un(o.default, o.update);
          p === "none" ? e = !1 : (o = n.memoizedState, n.memoizedState = null, n = t.child, ze = 0, e = yc(
            t,
            n,
            e,
            f,
            p,
            o,
            !0
          ), ze !== (o === null ? 0 : o.length) && (t.flags |= 32)), (t.flags & 4) !== 0 && e ? (Ga(
            t,
            t.memoizedProps.onUpdate
          ), bn = s) : s !== null && (s.push.apply(s, bn), bn = s), En = (t.flags & 32) !== 0 ? !0 : i;
          break;
        default:
          Na(e, t);
      }
  }
  function An(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        Np(t, e.alternate, e), e = e.sibling;
  }
  function di(t, e) {
    for (t = t.child; t !== null; ) {
      var n = t, i = e;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          fi(4, n, n.return), di(
            n,
            i
          );
          break;
        case 1:
          he(n, n.return);
          var s = n.stateNode;
          typeof s.componentWillUnmount == "function" && Ep(
            n,
            n.return,
            s
          ), di(
            n,
            i
          );
          break;
        case 27:
          (i & 2) !== 0 && Gy(
            n.stateNode,
            n.type,
            n.memoizedProps
          );
        case 5:
          he(n, n.return), n.tag !== 5 && n.tag !== 27 || Hl(n), di(
            n,
            i
          );
          break;
        case 6:
          Hl(n);
          break;
        case 26:
          he(n, n.return), s = n.stateNode, n.memoizedState !== null || s === null || Rt || s.parentNode.removeChild(s), di(
            n,
            i
          );
          break;
        case 22:
          n.memoizedState === null && di(
            n,
            i
          );
          break;
        case 30:
          he(n, n.return), di(
            n,
            i
          );
          break;
        case 7:
          he(n, n.return);
        default:
          di(
            n,
            i
          );
      }
      t = t.sibling;
    }
  }
  function sn(t, e, n) {
    for (n = (e.subtreeFlags & 8772) !== 0 ? n : n & -2, e = e.child; e !== null; ) {
      var i = e.alternate, s = t, o = e, f = o.flags, p = (n & 1) !== 0;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          sn(
            s,
            o,
            n
          ), jl(4, o);
          break;
        case 1:
          if (sn(
            s,
            o,
            n
          ), i = o, s = i.stateNode, typeof s.componentDidMount == "function")
            try {
              s.componentDidMount();
            } catch (O) {
              _t(i, i.return, O);
            }
          if (i = o, s = i.updateQueue, s !== null) {
            var S = i.stateNode;
            try {
              var M = s.shared.hiddenCallbacks;
              if (M !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < M.length; s++)
                  rm(M[s], S);
            } catch (O) {
              _t(i, i.return, O);
            }
          }
          p && f & 64 && Tp(o), vn(o, o.return);
          break;
        case 27:
          (n & 2) !== 0 && Cp(o);
        case 5:
          o.tag !== 5 && o.tag !== 27 || Ap(o), sn(
            s,
            o,
            n
          ), p && i === null && f & 4 && uc(o), vn(o, o.return);
          break;
        case 6:
          Ap(o);
          break;
        case 26:
          S = o.stateNode, o.memoizedState !== null || S === null || se || lf(
            Pl(S.ownerDocument),
            o.type,
            S
          ), sn(
            s,
            o,
            n
          ), p && i === null && f & 4 && uc(o), vn(o, o.return);
          break;
        case 12:
          sn(
            s,
            o,
            n
          );
          break;
        case 31:
          sn(
            s,
            o,
            n
          ), p && f & 4 && Lp(s, o);
          break;
        case 13:
          sn(
            s,
            o,
            n
          ), p && f & 4 && jp(s, o);
          break;
        case 22:
          o.memoizedState === null && sn(
            s,
            o,
            n
          ), vn(o, o.return);
          break;
        case 30:
          sn(
            s,
            o,
            n
          ), vn(o, o.return);
          break;
        case 7:
          vn(o, o.return);
        default:
          sn(
            s,
            o,
            n
          );
      }
      e = e.sibling;
    }
  }
  function Tc(t, e) {
    var n = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== n && (t != null && t.refCount++, n != null && Cl(n));
  }
  function Ec(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Cl(t));
  }
  function Ie(t, e, n, i) {
    var s = (n & 335544064) === n;
    if (e.subtreeFlags & (s ? 10262 : 10256))
      for (e = e.child; e !== null; )
        qp(
          t,
          e,
          n,
          i
        ), e = e.sibling;
    else s && Rp(e);
  }
  function qp(t, e, n, i) {
    var s = (n & 335544064) === n;
    s && e.alternate === null && e.return !== null && e.return.alternate !== null && Ao(e);
    var o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ie(
          t,
          e,
          n,
          i
        ), o & 2048 && jl(9, e);
        break;
      case 1:
        Ie(
          t,
          e,
          n,
          i
        );
        break;
      case 3:
        Ie(
          t,
          e,
          n,
          i
        ), s && vc && (t = t.containerInfo, t = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, t.style.viewTransitionName === "root" && (t.style.viewTransitionName = ""), t = t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "none" && (t.style.viewTransitionName = "")), o & 2048 && (o = null, e.alternate !== null && (o = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== o && (e.refCount++, o != null && Cl(o)));
        break;
      case 12:
        if (o & 2048) {
          Ie(
            t,
            e,
            n,
            i
          ), o = e.stateNode;
          try {
            var f = e.memoizedProps, p = f.id, S = f.onPostCommit;
            typeof S == "function" && S(
              p,
              e.alternate === null ? "mount" : "update",
              o.passiveEffectDuration,
              -0
            );
          } catch (M) {
            _t(e, e.return, M);
          }
        } else
          Ie(
            t,
            e,
            n,
            i
          );
        break;
      case 31:
        Ie(
          t,
          e,
          n,
          i
        );
        break;
      case 13:
        Ie(
          t,
          e,
          n,
          i
        );
        break;
      case 23:
        break;
      case 22:
        f = e.stateNode, p = e.alternate, e.memoizedState !== null ? (s && p !== null && p.memoizedState === null && Ao(p), f._visibility & 2 ? Ie(
          t,
          e,
          n,
          i
        ) : Yl(
          t,
          e
        )) : (s && p !== null && p.memoizedState !== null && Ao(e), f._visibility & 2 ? Ie(
          t,
          e,
          n,
          i
        ) : (f._visibility |= 2, Va(
          t,
          e,
          n,
          i,
          (e.subtreeFlags & 10256) !== 0 || !1
        ))), o & 2048 && Tc(p, e);
        break;
      case 24:
        Ie(
          t,
          e,
          n,
          i
        ), o & 2048 && Ec(e.alternate, e);
        break;
      case 30:
        s && (o = e.alternate, o !== null && (Sn(o.child, !0), Sn(e.child, !0))), Ie(
          t,
          e,
          n,
          i
        );
        break;
      default:
        Ie(
          t,
          e,
          n,
          i
        );
    }
  }
  function Va(t, e, n, i, s) {
    for (s = s && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var o = t, f = e, p = n, S = i, M = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Va(
            o,
            f,
            p,
            S,
            s
          ), jl(8, f);
          break;
        case 23:
          break;
        case 22:
          var O = f.stateNode;
          f.memoizedState !== null ? O._visibility & 2 ? Va(
            o,
            f,
            p,
            S,
            s
          ) : Yl(
            o,
            f
          ) : (O._visibility |= 2, Va(
            o,
            f,
            p,
            S,
            s
          )), s && M & 2048 && Tc(
            f.alternate,
            f
          );
          break;
        case 24:
          Va(
            o,
            f,
            p,
            S,
            s
          ), s && M & 2048 && Ec(f.alternate, f);
          break;
        default:
          Va(
            o,
            f,
            p,
            S,
            s
          );
      }
      e = e.sibling;
    }
  }
  function Yl(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t, i = e, s = i.flags;
        switch (i.tag) {
          case 22:
            Yl(n, i), s & 2048 && Tc(
              i.alternate,
              i
            );
            break;
          case 24:
            Yl(n, i), s & 2048 && Ec(i.alternate, i);
            break;
          default:
            Yl(n, i);
        }
        e = e.sibling;
      }
  }
  var Ji = 8192;
  function Pi(t, e, n) {
    if (t.subtreeFlags & Ji)
      for (t = t.child; t !== null; )
        Xp(
          t,
          e,
          n
        ), t = t.sibling;
  }
  function Xp(t, e, n) {
    switch (t.tag) {
      case 26:
        Pi(
          t,
          e,
          n
        ), t.flags & Ji && (t.memoizedState !== null ? RT(
          n,
          ln,
          t.memoizedState,
          t.memoizedProps
        ) : (t = t.stateNode, (e & 335544128) === e && Fy(n, t)));
        break;
      case 5:
        Pi(
          t,
          e,
          n
        ), t.flags & Ji && (t = t.stateNode, (e & 335544128) === e && Fy(n, t));
        break;
      case 3:
      case 4:
        var i = ln;
        ln = Pl(t.stateNode.containerInfo), Pi(
          t,
          e,
          n
        ), ln = i;
        break;
      case 22:
        t.memoizedState === null && (i = t.alternate, i !== null && i.memoizedState !== null ? (i = Ji, Ji = 16777216, Pi(
          t,
          e,
          n
        ), Ji = i) : Pi(
          t,
          e,
          n
        ));
        break;
      case 30:
        if ((t.flags & Ji) !== 0 && (i = t.memoizedProps.name, i != null && i !== "auto")) {
          var s = t.stateNode;
          s.paired = null, He === null && (He = /* @__PURE__ */ new Map()), He.set(i, s);
        }
        Pi(
          t,
          e,
          n
        );
        break;
      default:
        Pi(
          t,
          e,
          n
        );
    }
  }
  function Qp(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function ql(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          oe = i, Kp(
            i,
            t
          );
        }
      Qp(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Zp(t), t = t.sibling;
  }
  function Zp(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ql(t), t.flags & 2048 && fi(9, t, t.return);
        break;
      case 3:
        ql(t);
        break;
      case 12:
        ql(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, Do(t)) : ql(t);
        break;
      default:
        ql(t);
    }
  }
  function Do(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          oe = i, Kp(
            i,
            t
          );
        }
      Qp(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          fi(8, e, e.return), Do(e);
          break;
        case 22:
          n = e.stateNode, n._visibility & 2 && (n._visibility &= -3, Do(e));
          break;
        default:
          Do(e);
      }
      t = t.sibling;
    }
  }
  function Kp(t, e) {
    for (; oe !== null; ) {
      var n = oe;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          fi(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var i = n.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          Cl(n.memoizedState.cache);
      }
      if (i = n.child, i !== null) i.return = n, oe = i;
      else
        t: for (n = t; oe !== null; ) {
          i = oe;
          var s = i.sibling, o = i.return;
          if (Up(i), i === n) {
            oe = null;
            break t;
          }
          if (s !== null) {
            s.return = o, oe = s;
            break t;
          }
          oe = o;
        }
    }
  }
  var CS = {
    getCacheForType: function(t) {
      var e = ce(Ft), n = e.data.get(t);
      return n === void 0 && (n = t(), e.data.set(t, n)), n;
    },
    cacheSignal: function() {
      return ce(Ft).controller.signal;
    }
  }, MS = typeof WeakMap == "function" ? WeakMap : Map, Ot = 0, Ut = null, vt = null, At = 0, wt = 0, Ge = null, hi = !1, Ua = !1, Ac = !1, Qn = 0, Zt = 0, mi = 0, Fi = 0, zo = 0, Ye = 0, Ba = 0, Xl = null, Re = null, xc = !1, Oo = 0, kp = 0, Ro = 1 / 0, wo = null, pi = null, qt = 0, on = null, Ii = null, xn = 0, Cc = 0, Mc = null, Jp = null, La = null, ja = null, Ha = null, Ql = 0, _o = null;
  function qe() {
    return (Ot & 2) !== 0 && At !== 0 ? At & -At : $.T !== null ? Bc() : Id();
  }
  function Pp() {
    if (Ye === 0)
      if ((At & 536870912) === 0 || yt) {
        var t = Cs;
        Cs <<= 1, (Cs & 3932160) === 0 && (Cs = 262144), Ye = t;
      } else Ye = 536870912;
    return t = fe.current, t !== null && (t.flags |= 32), Ye;
  }
  function Ga(t, e) {
    if (e != null) {
      var n = t.stateNode, i = n.ref;
      i === null && (i = n.ref = Oy(
        Vn(t.memoizedProps, n)
      )), ja === null && (ja = []), ja.push(e.bind(null, i));
    }
  }
  function we(t, e, n) {
    (t === Ut && (wt === 2 || wt === 9) || t.cancelPendingCommit !== null) && (Ya(t, 0), yi(
      t,
      At,
      Ye,
      !1
    )), fl(t, n), ((Ot & 2) === 0 || t !== Ut) && (t === Ut && ((Ot & 2) === 0 && (Fi |= n), Zt === 4 && yi(
      t,
      At,
      Ye,
      !1
    )), Cn(t));
  }
  function Fp(t, e, n) {
    if ((Ot & 6) !== 0) throw Error(u(327));
    var i = !n && (e & 127) === 0 && (e & t.expiredLanes) === 0 || cl(t, e), s = i ? OS(t, e) : zc(t, e, !0), o = i;
    do {
      if (s === 0) {
        Ua && !i && yi(t, e, 0, !1);
        break;
      } else {
        if (n = t.current.alternate, o && !DS(n)) {
          s = zc(t, e, !1), o = !1;
          continue;
        }
        if (s === 2) {
          if (o = e, t.errorRecoveryDisabledLanes & o)
            var f = 0;
          else
            f = t.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            e = f;
            t: {
              var p = t;
              s = Xl;
              var S = p.current.memoizedState.isDehydrated;
              if (S && (Ya(p, f).flags |= 256), f = zc(
                p,
                f,
                !1
              ), f !== 2 && f !== 6) {
                if (Ac && !S) {
                  p.errorRecoveryDisabledLanes |= o, Fi |= o, s = 4;
                  break t;
                }
                o = Re, Re = s, o !== null && (Re === null ? Re = o : Re.push.apply(
                  Re,
                  o
                ));
              }
              s = f;
            }
            if (o = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          Ya(t, 0), yi(t, e, 0, !0);
          break;
        }
        t: {
          switch (i = t, o = s, o) {
            case 0:
            case 1:
              throw Error(u(345));
            case 4:
              if ((e & 4194048) !== e && (e & 62914560) !== e)
                break;
            case 6:
              yi(
                i,
                e,
                Ye,
                !hi
              );
              break t;
            case 2:
              Re = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(u(329));
          }
          if ((e & 62914560) === e && (s = Oo + 300 - Ne(), 10 < s)) {
            if (yi(
              i,
              e,
              Ye,
              !hi
            ), Ds(i, 0, !0) !== 0) break t;
            xn = e, i.timeoutHandle = kc(
              Ip.bind(
                null,
                i,
                n,
                Re,
                wo,
                xc,
                e,
                Ye,
                Fi,
                Ba,
                hi,
                o,
                "Throttled",
                -0,
                0
              ),
              s
            );
            break t;
          }
          Ip(
            i,
            n,
            Re,
            wo,
            xc,
            e,
            Ye,
            Fi,
            Ba,
            hi,
            o,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Cn(t);
  }
  function Ip(t, e, n, i, s, o, f, p, S, M, O, B, x, z) {
    t.timeoutHandle = -1;
    var Z = e.subtreeFlags, tt = (o & 335544064) === o;
    if (B = null, (tt || Z & 8192 || (Z & 16785408) === 16785408) && (B = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: pn
    }, He = null, Xp(
      e,
      o,
      B
    ), tt && (Z = B, tt = t.containerInfo, tt = (tt.nodeType === 9 ? tt : tt.ownerDocument).__reactViewTransition, tt != null && (Z.count++, Z.waitingForViewTransition = !0, Z = Wl.bind(Z), tt.finished.then(Z, Z))), Z = (o & 62914560) === o ? Oo - Ne() : (o & 4194048) === o ? kp - Ne() : 0, Z = wT(
      B,
      Z
    ), Z !== null)) {
      xn = o, t.cancelPendingCommit = Z(
        ly.bind(
          null,
          t,
          e,
          o,
          n,
          i,
          s,
          f,
          p,
          S,
          M,
          O,
          B,
          null,
          x,
          z
        )
      ), yi(t, o, f, !M);
      return;
    }
    ly(
      t,
      e,
      o,
      n,
      i,
      s,
      f,
      p,
      S,
      M,
      O,
      B
    );
  }
  function DS(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if ((n === 0 || n === 11 || n === 15) && e.flags & 16384 && (n = e.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var i = 0; i < n.length; i++) {
          var s = n[i], o = s.getSnapshot;
          s = s.value;
          try {
            if (!Le(o(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (n = e.child, e.subtreeFlags & 16384 && n !== null)
        n.return = e, e = n;
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return !0;
  }
  function yi(t, e, n, i) {
    e = Kd(t, e), e &= ~zo, e &= ~Fi, t.suspendedLanes |= e, t.pingedLanes &= ~e, i && (t.warmLanes |= e), i = t.expirationTimes;
    for (var s = e; 0 < s; ) {
      var o = 31 - Ue(s), f = 1 << o;
      i[o] = -1, s &= ~f;
    }
    n !== 0 && Jd(t, n, e);
  }
  function No() {
    return (Ot & 6) === 0 ? (Zl(0), !1) : !0;
  }
  function Dc() {
    if (vt !== null) {
      if (wt === 0)
        var t = vt.return;
      else
        t = vt, jn = ji = null, Ur(t), Da = null, zl = 0, t = vt;
      for (; t !== null; )
        Sp(t.alternate, t), t = t.return;
      vt = null;
    }
  }
  function Ya(t, e) {
    var n = t.timeoutHandle;
    return n !== -1 && (t.timeoutHandle = -1, IS(n)), n = t.cancelPendingCommit, n !== null && (t.cancelPendingCommit = null, n()), xn = 0, Dc(), Ut = t, vt = n = Bn(t.current, null), At = e, wt = 0, Ge = null, hi = !1, Ua = cl(t, e), Ac = !1, Ba = Ye = zo = Fi = mi = Zt = 0, Re = Xl = null, xc = !1, Qn = Kd(t, e), Gs(), n;
  }
  function Wp(t, e) {
    ht = null, $.H = fo, e === Ma || e === Is ? (e = lm(), wt = 3) : e === Er ? (e = lm(), wt = 4) : wt = e === Fr ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Ge = e, vt === null && (Zt = 1, ho(
      t,
      ke(e, t.current)
    ));
  }
  function $p() {
    var t = fe.current;
    return t === null ? !0 : (At & 4194048) === At ? ve === null : (At & 62914560) === At || (At & 536870912) !== 0 ? t === ve : !1;
  }
  function ty() {
    var t = $.H;
    return $.H = fo, t === null ? fo : t;
  }
  function ey() {
    var t = $.A;
    return $.A = CS, t;
  }
  function Vo() {
    Zt = 4, hi || (At & 4194048) !== At && fe.current !== null || (Ua = !0), (mi & 134217727) === 0 && (Fi & 134217727) === 0 || Ut === null || yi(
      Ut,
      At,
      Ye,
      !1
    );
  }
  function zc(t, e, n) {
    var i = Ot;
    Ot |= 2;
    var s = ty(), o = ey();
    (Ut !== t || At !== e) && (wo = null, Ya(t, e)), e = !1;
    var f = Zt;
    t: do
      try {
        if (wt !== 0 && vt !== null) {
          var p = vt, S = Ge;
          switch (wt) {
            case 8:
              Dc(), f = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              fe.current === null && (e = !0);
              var M = wt;
              if (wt = 0, Ge = null, qa(t, p, S, M), n && Ua) {
                f = 0;
                break t;
              }
              break;
            default:
              M = wt, wt = 0, Ge = null, qa(t, p, S, M);
          }
        }
        zS(), f = Zt;
        break;
      } catch (O) {
        Wp(t, O);
      }
    while (!0);
    return e && t.shellSuspendCounter++, jn = ji = null, Ot = i, $.H = s, $.A = o, vt === null && (Ut = null, At = 0, Gs()), f;
  }
  function zS() {
    for (; vt !== null; ) ny(vt);
  }
  function OS(t, e) {
    var n = Ot;
    Ot |= 2;
    var i = ty(), s = ey();
    Ut !== t || At !== e ? (wo = null, Ro = Ne() + 500, Ya(t, e)) : Ua = cl(
      t,
      e
    );
    t: do
      try {
        if (wt !== 0 && vt !== null) {
          e = vt;
          var o = Ge;
          e: switch (wt) {
            case 1:
              wt = 0, Ge = null, qa(t, e, o, 1);
              break;
            case 2:
            case 9:
              if (im(o)) {
                wt = 0, Ge = null, iy(e);
                break;
              }
              e = function() {
                wt !== 2 && wt !== 9 || Ut !== t || (wt = 7), Cn(t);
              }, o.then(e, e);
              break t;
            case 3:
              wt = 7;
              break t;
            case 4:
              wt = 5;
              break t;
            case 7:
              im(o) ? (wt = 0, Ge = null, iy(e)) : (wt = 0, Ge = null, qa(t, e, o, 7));
              break;
            case 5:
              var f = null;
              switch (vt.tag) {
                case 26:
                  f = vt.memoizedState;
                case 5:
                case 27:
                  var p = vt;
                  if (f ? Jy(f) : p.stateNode.complete) {
                    wt = 0, Ge = null;
                    var S = p.sibling;
                    if (S !== null) vt = S;
                    else {
                      var M = p.return;
                      M !== null ? (vt = M, Uo(M)) : vt = null;
                    }
                    break e;
                  }
              }
              wt = 0, Ge = null, qa(t, e, o, 5);
              break;
            case 6:
              wt = 0, Ge = null, qa(t, e, o, 6);
              break;
            case 8:
              Dc(), Zt = 6;
              break t;
            default:
              throw Error(u(462));
          }
        }
        RS();
        break;
      } catch (O) {
        Wp(t, O);
      }
    while (!0);
    return jn = ji = null, $.H = i, $.A = s, Ot = n, vt !== null ? 0 : (Ut = null, At = 0, Gs(), Zt);
  }
  function RS() {
    for (; vt !== null && !kb(); )
      ny(vt);
  }
  function ny(t) {
    var e = vp(t.alternate, t, Qn);
    t.memoizedProps = t.pendingProps, e === null ? Uo(t) : vt = e;
  }
  function iy(t) {
    var e = t, n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = fp(
          n,
          e,
          e.pendingProps,
          e.type,
          void 0,
          At
        );
        break;
      case 11:
        e = fp(
          n,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          At
        );
        break;
      case 5:
        Ur(e);
        var i = e;
        i === le && (yt ? (Ks(i), i.tag === 5 && i.stateNode != null && (Ht = i.stateNode)) : (Ks(i), yt = !0));
      default:
        Sp(n, e), e = vt = Kh(e, Qn), e = vp(n, e, Qn);
    }
    t.memoizedProps = t.pendingProps, e === null ? Uo(t) : vt = e;
  }
  function qa(t, e, n, i) {
    jn = ji = null, Ur(e), Da = null, zl = 0;
    var s = e.return;
    try {
      if (gS(
        t,
        s,
        e,
        n,
        At
      )) {
        Zt = 1, ho(
          t,
          ke(n, t.current)
        ), vt = null;
        return;
      }
    } catch (o) {
      if (s !== null) throw vt = s, o;
      Zt = 1, ho(
        t,
        ke(n, t.current)
      ), vt = null;
      return;
    }
    e.flags & 32768 ? (yt || i === 1 ? t = !0 : Ua || (At & 536870912) !== 0 ? t = !1 : (hi = t = !0, (i === 2 || i === 9 || i === 3 || i === 6) && (i = fe.current, i !== null && i.tag === 13 && (i.flags |= 16384))), ay(e, t)) : Uo(e);
  }
  function Uo(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        ay(
          e,
          hi
        );
        return;
      }
      t = e.return;
      var n = TS(
        e.alternate,
        e,
        Qn
      );
      if (n !== null) {
        vt = n;
        return;
      }
      if (e = e.sibling, e !== null) {
        vt = e;
        return;
      }
      vt = e = t;
    } while (e !== null);
    Zt === 0 && (Zt = 5);
  }
  function ay(t, e) {
    do {
      var n = ES(t.alternate, t);
      if (n !== null) {
        n.flags &= 32767, vt = n;
        return;
      }
      if (n = t.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !e && (t = t.sibling, t !== null)) {
        vt = t;
        return;
      }
      vt = t = n;
    } while (t !== null);
    Zt = 6, vt = null;
  }
  function ly(t, e, n, i, s, o, f, p, S, M, O, B) {
    t.cancelPendingCommit = null;
    do
      Bo();
    while (qt !== 0);
    if ((Ot & 6) !== 0) throw Error(u(327));
    if (e !== null) {
      if (e === t.current) throw Error(u(177));
      t === Ut && (vt = Ut = null, At = 0), Ii = e, on = t, xn = n, Mc = s, Jp = i, wS(
        t,
        e,
        n,
        f,
        p,
        S,
        B
      );
    }
  }
  function wS(t, e, n, i, s, o, f) {
    var p = e.lanes | e.childLanes;
    if (Cc = p, p |= rr, i1(
      t,
      n,
      p,
      i,
      s,
      o
    ), ja = null, (n & 335544064) === n ? (Ha = lS(t), i = 10262) : (Ha = null, i = 10256), (e.subtreeFlags & i) !== 0 || (e.flags & i) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, LS(As, function() {
      return _c(), null;
    })) : (t.callbackNode = null, t.callbackPriority = 0), To = !1, i = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || i) {
      i = $.T, $.T = null, s = rt.p, rt.p = 2, o = Ot, Ot |= 4;
      try {
        AS(t, e, n);
      } finally {
        Ot = o, rt.p = s, $.T = i;
      }
    }
    qt = 1, To ? La = iT(
      f,
      t.containerInfo,
      Ha,
      Oc,
      Rc,
      NS,
      wc,
      _c,
      _S
    ) : (Oc(), Rc(), wc());
  }
  function _S(t) {
    if (qt !== 0) {
      var e = on.onRecoverableError;
      e(t, { componentStack: null });
    }
  }
  function NS() {
    qt === 3 && (qt = 0, Yp(Ii, on), qt = 4);
  }
  function Oc() {
    if (qt === 1) {
      qt = 0;
      var t = on, e = Ii, n = xn, i = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || i) {
        i = $.T, $.T = null;
        var s = rt.p;
        rt.p = 2;
        var o = Ot;
        Ot |= 4;
        try {
          Gl = xo = !1, Hp(e, t, n), n = Qc;
          var f = Bh(t.containerInfo), p = n.focusedElem, S = n.selectionRange;
          if (f !== p && p && p.ownerDocument && Uh(
            p.ownerDocument.documentElement,
            p
          )) {
            if (S !== null && ar(p)) {
              var M = S.start, O = S.end;
              if (O === void 0 && (O = M), "selectionStart" in p)
                p.selectionStart = M, p.selectionEnd = Math.min(
                  O,
                  p.value.length
                );
              else {
                var B = p.ownerDocument || document, x = B && B.defaultView || window;
                if (x.getSelection) {
                  var z = x.getSelection(), Z = p.textContent.length, tt = Math.min(S.start, Z), mt = S.end === void 0 ? tt : Math.min(S.end, Z);
                  !z.extend && tt > mt && (f = mt, mt = tt, tt = f);
                  var C = Vh(
                    p,
                    tt
                  ), E = Vh(
                    p,
                    mt
                  );
                  if (C && E && (z.rangeCount !== 1 || z.anchorNode !== C.node || z.anchorOffset !== C.offset || z.focusNode !== E.node || z.focusOffset !== E.offset)) {
                    var D = B.createRange();
                    D.setStart(C.node, C.offset), z.removeAllRanges(), tt > mt ? (z.addRange(D), z.extend(E.node, E.offset)) : (D.setEnd(E.node, E.offset), z.addRange(D));
                  }
                }
              }
            }
            for (B = [], z = p; z = z.parentNode; )
              z.nodeType === 1 && B.push({
                element: z,
                left: z.scrollLeft,
                top: z.scrollTop
              });
            for (typeof p.focus == "function" && p.focus(), p = 0; p < B.length; p++) {
              var U = B[p];
              U.element.scrollLeft = U.left, U.element.scrollTop = U.top;
            }
          }
          Fa = !!Xc, Qc = Xc = null;
        } finally {
          Ot = o, rt.p = s, $.T = i;
        }
      }
      t.current = e, qt = 2;
    }
  }
  function Rc() {
    if (qt === 2) {
      qt = 0;
      var t = on, e = Ii, n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        n = $.T, $.T = null;
        var i = rt.p;
        rt.p = 2;
        var s = Ot;
        Ot |= 4;
        try {
          Np(t, e.alternate, e);
        } finally {
          Ot = s, rt.p = i, $.T = n;
        }
      }
      qt = 3;
    }
  }
  function wc() {
    if (qt === 4 || qt === 3) {
      qt = 0;
      var t = La;
      La = null, Jb();
      var e = on, n = Ii, i = xn, s = Jp, o = (i & 335544064) === i ? 10262 : 10256;
      if ((n.subtreeFlags & o) !== 0 || (n.flags & o) !== 0 ? qt = 5 : (qt = 0, Ii = on = null, sy(e, e.pendingLanes)), o = e.pendingLanes, o === 0 && (pi = null), Gu(i), n = n.stateNode, Ve && typeof Ve.onCommitFiberRoot == "function")
        try {
          Ve.onCommitFiberRoot(
            rl,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (s !== null) {
        n = $.T, o = rt.p, rt.p = 2, $.T = null;
        try {
          for (var f = e.onRecoverableError, p = 0; p < s.length; p++) {
            var S = s[p];
            f(S.value, {
              componentStack: S.stack
            });
          }
        } finally {
          $.T = n, rt.p = o;
        }
      }
      if (s = ja, f = Ha, Ha = null, s !== null && (ja = null, f === null && (f = []), t !== null))
        for (S = 0; S < s.length; S++)
          n = (0, s[S])(
            f
          ), n !== void 0 && t.finished.finally(n);
      (xn & 3) !== 0 && Bo(), Cn(e), o = e.pendingLanes, (i & 261930) !== 0 && (o & 42) !== 0 ? e === _o ? Ql++ : (Ql = 0, _o = e) : (Ql = 0, _o = null), Zl(0);
    }
  }
  function sy(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Cl(e)));
  }
  function Bo() {
    return La !== null && (La.skipTransition(), La = null), Oc(), Rc(), wc(), _c();
  }
  function _c() {
    if (qt !== 5) return !1;
    var t = on, e = Cc;
    Cc = 0;
    var n = Gu(xn), i = $.T, s = rt.p;
    try {
      rt.p = 32 > n ? 32 : n, $.T = null, n = Mc, Mc = null;
      var o = on, f = xn;
      if (qt = 0, Ii = on = null, xn = 0, (Ot & 6) !== 0) throw Error(u(331));
      var p = Ot;
      if (Ot |= 4, Zp(o.current), qp(
        o,
        o.current,
        f,
        n
      ), Ot = p, Zl(0, !1), Ve && typeof Ve.onPostCommitFiberRoot == "function")
        try {
          Ve.onPostCommitFiberRoot(rl, o);
        } catch {
        }
      return !0;
    } finally {
      rt.p = s, $.T = i, sy(t, e);
    }
  }
  function oy(t, e, n) {
    e = ke(n, e), e = Pr(t.stateNode, e, 2), t = oi(t, e, 2), t !== null && (fl(t, 2), Cn(t));
  }
  function _t(t, e, n) {
    if (t.tag === 3)
      oy(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          oy(
            e,
            t,
            n
          );
          break;
        } else if (e.tag === 1) {
          var i = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (pi === null || !pi.has(i))) {
            t = ke(n, t), n = ip(2), i = oi(e, n, 2), i !== null && (ap(
              n,
              i,
              e,
              t
            ), fl(i, 2), Cn(i));
            break;
          }
        }
        e = e.return;
      }
  }
  function Nc(t, e, n) {
    var i = t.pingCache;
    if (i === null) {
      i = t.pingCache = new MS();
      var s = /* @__PURE__ */ new Set();
      i.set(e, s);
    } else
      s = i.get(e), s === void 0 && (s = /* @__PURE__ */ new Set(), i.set(e, s));
    s.has(n) || (Ac = !0, s.add(n), t = VS.bind(null, t, e, n), e.then(t, t));
  }
  function VS(t, e, n) {
    var i = t.pingCache;
    i !== null && i.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, Ut === t && (At & n) === n && ((Zt === 4 || Zt === 3 && (At & 62914560) === At && 300 > Ne() - Oo) && (Ot & 2) === 0 ? Ya(t, 0) : zo |= n, Ba === At && (Ba = 0)), Cn(t);
  }
  function uy(t, e) {
    e === 0 && (e = kd()), t = Ui(t, e), t !== null && (fl(t, e), Cn(t));
  }
  function US(t) {
    var e = t.memoizedState, n = 0;
    e !== null && (n = e.retryLane), uy(t, n);
  }
  function BS(t, e) {
    var n = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var i = t.stateNode, s = t.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        i = t.stateNode;
        break;
      case 22:
        i = t.stateNode._retryCache;
        break;
      default:
        throw Error(u(314));
    }
    i !== null && i.delete(e), uy(t, n);
  }
  function LS(t, e) {
    return Bu(t, e);
  }
  var Xa = null, Qa = null, Vc = !1, Lo = !1, Uc = !1, gi = 0;
  function Cn(t) {
    t !== Qa && t.next === null && (Qa === null ? Xa = Qa = t : Qa = Qa.next = t), Lo = !0, Vc || (Vc = !0, HS());
  }
  function Zl(t, e) {
    if (!Uc && Lo) {
      Uc = !0;
      do
        for (var n = !1, i = Xa; i !== null; ) {
          if (t !== 0) {
            var s = i.pendingLanes;
            if (s === 0) var o = 0;
            else {
              var f = i.suspendedLanes, p = i.pingedLanes;
              o = (1 << 31 - Ue(42 | t) + 1) - 1, o &= s & ~(f & ~p), o = o & 201326741 ? o & 201326741 | 1 : o ? o | 2 : 0;
            }
            o !== 0 && (n = !0, dy(i, o));
          } else
            o = At, o = Ds(
              i,
              i === Ut ? o : 0,
              i.cancelPendingCommit !== null || i.timeoutHandle !== -1
            ), (o & 3) === 0 || cl(i, o) || (n = !0, dy(i, o));
          i = i.next;
        }
      while (n);
      Uc = !1;
    }
  }
  function jS() {
    ry();
  }
  function ry() {
    Lo = Vc = !1;
    var t = 0;
    gi !== 0 && FS() && (t = gi);
    for (var e = Ne(), n = null, i = Xa; i !== null; ) {
      var s = i.next, o = cy(i, e);
      o === 0 ? (i.next = null, n === null ? Xa = s : n.next = s, s === null && (Qa = n)) : (n = i, (t !== 0 || (o & 3) !== 0) && (Lo = !0)), i = s;
    }
    qt !== 0 && qt !== 5 || Zl(t), gi !== 0 && (gi = 0);
  }
  function cy(t, e) {
    for (var n = t.suspendedLanes, i = t.pingedLanes, s = t.expirationTimes, o = t.pendingLanes & -62914561; 0 < o; ) {
      var f = 31 - Ue(o), p = 1 << f, S = s[f];
      S === -1 ? ((p & n) === 0 || (p & i) !== 0) && (s[f] = n1(p, e)) : S <= e && (t.expiredLanes |= p), o &= ~p;
    }
    if (e = Ut, n = At, n = Ds(
      t,
      t === e ? n : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), i = t.callbackNode, n === 0 || t === e && (wt === 2 || wt === 9) || t.cancelPendingCommit !== null)
      return i !== null && i !== null && Lu(i), t.callbackNode = null, t.callbackPriority = 0;
    if ((n & 3) === 0 || cl(t, n)) {
      if (e = n & -n, e === t.callbackPriority) return e;
      switch (i !== null && Lu(i), Gu(n)) {
        case 2:
        case 8:
          n = Qd;
          break;
        case 32:
          n = As;
          break;
        case 268435456:
          n = Zd;
          break;
        default:
          n = As;
      }
      return i = fy.bind(null, t), n = Bu(n, i), t.callbackPriority = e, t.callbackNode = n, e;
    }
    return i !== null && i !== null && Lu(i), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function fy(t, e) {
    if (qt !== 0 && qt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var n = t.callbackNode;
    if (Bo() && t.callbackNode !== n)
      return null;
    var i = At;
    return i = Ds(
      t,
      t === Ut ? i : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), i === 0 ? null : (Fp(t, i, e), cy(t, Ne()), t.callbackNode != null && t.callbackNode === n ? fy.bind(null, t) : null);
  }
  function dy(t, e) {
    if (Bo()) return null;
    Fp(t, e, !0);
  }
  function HS() {
    WS(function() {
      (Ot & 6) !== 0 ? Bu(
        Xd,
        jS
      ) : ry();
    });
  }
  function Bc() {
    if (gi === 0) {
      var t = Yi;
      t === 0 && (t = xs, xs <<= 1, (xs & 261888) === 0 && (xs = 256)), gi = t;
    }
    return gi;
  }
  function hy(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : _s(t);
  }
  function GS(t, e, n, i, s) {
    if (e === "submit" && n && n.stateNode === s) {
      var o = hy(
        (s[Me] || null).action
      ), f = i.submitter;
      f && (e = (e = f[Me] || null) ? hy(e.formAction) : f.getAttribute("formAction"), e !== null && (o = e, f = null));
      var p = new Bs(
        "action",
        "action",
        null,
        i,
        s
      );
      t.push({
        event: p,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (i.defaultPrevented) {
                if (gi !== 0) {
                  var S = new FormData(s, f);
                  Qr(
                    n,
                    {
                      pending: !0,
                      data: S,
                      method: s.method,
                      action: o
                    },
                    null,
                    S
                  );
                }
              } else
                typeof o == "function" && (p.preventDefault(), S = new FormData(s, f), Qr(
                  n,
                  {
                    pending: !0,
                    data: S,
                    method: s.method,
                    action: o
                  },
                  o,
                  S
                ));
            },
            currentTarget: s
          }
        ]
      });
    }
  }
  for (var Lc = 0; Lc < ur.length; Lc++) {
    var jc = ur[Lc], YS = jc.toLowerCase(), qS = jc[0].toUpperCase() + jc.slice(1);
    nn(
      YS,
      "on" + qS
    );
  }
  nn(Hh, "onAnimationEnd"), nn(Gh, "onAnimationIteration"), nn(Yh, "onAnimationStart"), nn("dblclick", "onDoubleClick"), nn("focusin", "onFocus"), nn("focusout", "onBlur"), nn(I1, "onTransitionRun"), nn(W1, "onTransitionStart"), nn($1, "onTransitionCancel"), nn(qh, "onTransitionEnd"), da("onMouseEnter", ["mouseout", "mouseover"]), da("onMouseLeave", ["mouseout", "mouseover"]), da("onPointerEnter", ["pointerout", "pointerover"]), da("onPointerLeave", ["pointerout", "pointerover"]), _i(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), _i(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), _i("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), _i(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), _i(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), _i(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Kl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), XS = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Kl)
  );
  function my(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var i = t[n], s = i.event;
      i = i.listeners;
      t: {
        var o = void 0;
        if (e)
          for (var f = i.length - 1; 0 <= f; f--) {
            var p = i[f], S = p.instance, M = p.currentTarget;
            if (p = p.listener, S !== o && s.isPropagationStopped())
              break t;
            o = p, s.currentTarget = M;
            try {
              o(s);
            } catch (O) {
              Hs(O);
            }
            s.currentTarget = null, o = S;
          }
        else
          for (f = 0; f < i.length; f++) {
            if (p = i[f], S = p.instance, M = p.currentTarget, p = p.listener, S !== o && s.isPropagationStopped())
              break t;
            o = p, s.currentTarget = M;
            try {
              o(s);
            } catch (O) {
              Hs(O);
            }
            s.currentTarget = null, o = S;
          }
      }
    }
  }
  function bt(t, e) {
    var n = e[$d];
    n === void 0 && (n = e[$d] = /* @__PURE__ */ new Set());
    var i = t + "__bubble";
    n.has(i) || (py(e, t, 2, !1), n.add(i));
  }
  function Hc(t, e, n) {
    var i = 0;
    e && (i |= 4), py(
      n,
      t,
      i,
      e
    );
  }
  var jo = "_reactListening" + Math.random().toString(36).slice(2);
  function Gc(t) {
    if (!t[jo]) {
      t[jo] = !0, nh.forEach(function(n) {
        n !== "selectionchange" && (XS.has(n) || Hc(n, !1, t), Hc(n, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[jo] || (e[jo] = !0, Hc("selectionchange", !1, e));
    }
  }
  function py(t, e, n, i) {
    switch (ag(e)) {
      case 2:
        var s = UT;
        break;
      case 8:
        s = BT;
        break;
      default:
        s = of;
    }
    n = s.bind(
      null,
      e,
      n,
      t
    ), s = void 0, !Ju || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (s = !0), i ? s !== void 0 ? t.addEventListener(e, n, {
      capture: !0,
      passive: s
    }) : t.addEventListener(e, n, !0) : s !== void 0 ? t.addEventListener(e, n, {
      passive: s
    }) : t.addEventListener(e, n, !1);
  }
  function Yc(t, e, n, i, s) {
    var o = i;
    if ((e & 1) === 0 && (e & 2) === 0 && i !== null)
      t: for (; ; ) {
        if (i === null) return;
        var f = i.tag;
        if (f === 3 || f === 4) {
          var p = i.stateNode.containerInfo;
          if (p === s) break;
          if (f === 4)
            for (f = i.return; f !== null; ) {
              var S = f.tag;
              if ((S === 3 || S === 4) && f.stateNode.containerInfo === s)
                return;
              f = f.return;
            }
          for (; p !== null; ) {
            if (f = wi(p), f === null) return;
            if (S = f.tag, S === 5 || S === 6 || S === 26 || S === 27) {
              i = o = f;
              continue t;
            }
            p = p.parentNode;
          }
        }
        i = i.return;
      }
    ph(function() {
      var M = o, O = Ku(n), B = [];
      t: {
        var x = Xh.get(t);
        if (x !== void 0) {
          var z = Bs, Z = t;
          switch (t) {
            case "keypress":
              if (Vs(n) === 0) break t;
            case "keydown":
            case "keyup":
              z = D1;
              break;
            case "focusin":
              Z = "focus", z = Wu;
              break;
            case "focusout":
              Z = "blur", z = Wu;
              break;
            case "beforeblur":
            case "afterblur":
              z = Wu;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              z = vh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              z = p1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              z = _1;
              break;
            case Hh:
            case Gh:
            case Yh:
              z = v1;
              break;
            case qh:
              z = V1;
              break;
            case "scroll":
            case "scrollend":
              z = h1;
              break;
            case "wheel":
              z = B1;
              break;
            case "copy":
            case "cut":
            case "paste":
              z = S1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              z = Sh;
              break;
            case "submit":
              z = R1;
              break;
            case "toggle":
            case "beforetoggle":
              z = j1;
          }
          var tt = (e & 4) !== 0, mt = !tt && (t === "scroll" || t === "scrollend"), C = tt ? x !== null ? x + "Capture" : null : x;
          tt = [];
          for (var E = M, D; E !== null; ) {
            var U = E;
            if (D = U.stateNode, U = U.tag, U !== 5 && U !== 26 && U !== 27 || D === null || C === null || (U = ml(E, C), U != null && tt.push(
              kl(E, U, D)
            )), mt) break;
            E = E.return;
          }
          0 < tt.length && (x = new z(
            x,
            Z,
            null,
            n,
            O
          ), B.push({ event: x, listeners: tt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (z = t === "mouseover" || t === "pointerover", x = t === "mouseout" || t === "pointerout", z && n !== Zu && (Z = n.relatedTarget || n.fromElement) && (wi(Z) || Z[ra]))
            break t;
          (x || z) && (Z = O.window === O ? O : (z = O.ownerDocument) ? z.defaultView || z.parentWindow : window, x ? (z = n.relatedTarget || n.toElement, x = M, z = z ? wi(z) : null, z !== null && (mt = h(z), tt = z.tag, z !== mt || tt !== 5 && tt !== 27 && tt !== 6) && (z = null)) : (x = null, z = M), x !== z && (tt = vh, U = "onMouseLeave", C = "onMouseEnter", E = "mouse", (t === "pointerout" || t === "pointerover") && (tt = Sh, U = "onPointerLeave", C = "onPointerEnter", E = "pointer"), mt = x == null ? Z : hl(x), D = z == null ? Z : hl(z), Z = new tt(
            U,
            E + "leave",
            x,
            n,
            O
          ), Z.target = mt, Z.relatedTarget = D, U = null, wi(O) === M && (tt = new tt(
            C,
            E + "enter",
            z,
            n,
            O
          ), tt.target = D, tt.relatedTarget = mt, U = tt), mt = U, tt = x && z ? ot(
            x,
            z,
            QS
          ) : null, x !== null && yy(
            B,
            Z,
            x,
            tt,
            !1
          ), z !== null && mt !== null && yy(
            B,
            mt,
            z,
            tt,
            !0
          )));
        }
        t: {
          if (x = M ? hl(M) : window, z = x.nodeName && x.nodeName.toLowerCase(), z === "select" || z === "input" && x.type === "file")
            var P = zh;
          else if (Mh(x))
            if (Oh)
              P = J1;
            else {
              P = K1;
              var xt = Z1;
            }
          else
            z = x.nodeName, !z || z.toLowerCase() !== "input" || x.type !== "checkbox" && x.type !== "radio" ? M && Qu(M.elementType) && (P = zh) : P = k1;
          if (P && (P = P(t, M))) {
            Dh(
              B,
              P,
              n,
              O
            );
            break t;
          }
          xt && xt(t, x, M);
        }
        switch (xt = M ? hl(M) : window, t) {
          case "focusin":
            (Mh(xt) || xt.contentEditable === "true") && (va = xt, lr = M, El = null);
            break;
          case "focusout":
            El = lr = va = null;
            break;
          case "mousedown":
            sr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            sr = !1, Lh(B, n, O);
            break;
          case "selectionchange":
            if (F1) break;
          case "keydown":
          case "keyup":
            Lh(B, n, O);
        }
        var st;
        if (tr)
          t: {
            switch (t) {
              case "compositionstart":
                var ct = "onCompositionStart";
                break t;
              case "compositionend":
                ct = "onCompositionEnd";
                break t;
              case "compositionupdate":
                ct = "onCompositionUpdate";
                break t;
            }
            ct = void 0;
          }
        else
          ga ? xh(t, n) && (ct = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (ct = "onCompositionStart");
        ct && (Th && n.locale !== "ko" && (ga || ct !== "onCompositionStart" ? ct === "onCompositionEnd" && ga && (st = yh()) : (Wn = O, Pu = "value" in Wn ? Wn.value : Wn.textContent, ga = !0)), xt = Ho(M, ct), 0 < xt.length && (ct = new bh(
          ct,
          t,
          null,
          n,
          O
        ), B.push({ event: ct, listeners: xt }), st ? ct.data = st : (st = Ch(n), st !== null && (ct.data = st)))), (st = G1 ? Y1(t, n) : q1(t, n)) && (ct = Ho(M, "onBeforeInput"), 0 < ct.length && (xt = new bh(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          O
        ), B.push({
          event: xt,
          listeners: ct
        }), xt.data = st)), GS(
          B,
          t,
          M,
          n,
          O
        );
      }
      my(B, e);
    });
  }
  function kl(t, e, n) {
    return {
      instance: t,
      listener: e,
      currentTarget: n
    };
  }
  function Ho(t, e) {
    for (var n = e + "Capture", i = []; t !== null; ) {
      var s = t, o = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || o === null || (s = ml(t, n), s != null && i.unshift(
        kl(t, s, o)
      ), s = ml(t, e), s != null && i.push(
        kl(t, s, o)
      )), t.tag === 3) return i;
      t = t.return;
    }
    return [];
  }
  function QS(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function yy(t, e, n, i, s) {
    for (var o = e._reactName, f = []; n !== null && n !== i; ) {
      var p = n, S = p.alternate, M = p.stateNode;
      if (p = p.tag, S !== null && S === i) break;
      p !== 5 && p !== 26 && p !== 27 || M === null || (S = M, s ? (M = ml(n, o), M != null && f.unshift(
        kl(n, M, S)
      )) : s || (M = ml(n, o), M != null && f.push(
        kl(n, M, S)
      ))), n = n.return;
    }
    f.length !== 0 && t.push({ event: e, listeners: f });
  }
  var ZS = /\r\n?/g, KS = /\u0000|\uFFFD/g;
  function gy(t) {
    return (typeof t == "string" ? t : "" + t).replace(ZS, `
`).replace(KS, "");
  }
  function vy(t, e) {
    return e = gy(e), gy(t) === e;
  }
  function Nt(t, e, n, i, s, o) {
    switch (n) {
      case "children":
        if (typeof i == "string")
          e === "body" || e === "textarea" && i === "" || ma(t, i);
        else if (typeof i == "number" || typeof i == "bigint")
          e !== "body" && ma(t, "" + i);
        else return;
        break;
      case "className":
        ws(t, "class", i);
        break;
      case "tabIndex":
        ws(t, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ws(t, n, i);
        break;
      case "style":
        hh(t, i, o);
        return;
      case "data":
        if (e !== "object") {
          ws(t, "data", i);
          break;
        }
      case "src":
      case "href":
        if (i === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
          t.removeAttribute(n);
          break;
        }
        i = _s(i), t.setAttribute(n, i);
        break;
      case "action":
      case "formAction":
        if (typeof i == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof o == "function" && (n === "formAction" ? (e !== "input" && Nt(t, e, "name", s.name, s, null), Nt(
            t,
            e,
            "formEncType",
            s.formEncType,
            s,
            null
          ), Nt(
            t,
            e,
            "formMethod",
            s.formMethod,
            s,
            null
          ), Nt(
            t,
            e,
            "formTarget",
            s.formTarget,
            s,
            null
          )) : (Nt(t, e, "encType", s.encType, s, null), Nt(t, e, "method", s.method, s, null), Nt(t, e, "target", s.target, s, null)));
        if (i == null || typeof i == "symbol" || typeof i == "boolean") {
          t.removeAttribute(n);
          break;
        }
        i = _s(i), t.setAttribute(n, i);
        break;
      case "onClick":
        i != null && (t.onclick = pn);
        return;
      case "onScroll":
        i != null && bt("scroll", t);
        return;
      case "onScrollEnd":
        i != null && bt("scrollend", t);
        return;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i))
            throw Error(u(61));
          if (n = i.__html, n != null) {
            if (s.children != null) throw Error(u(60));
            o?.__html !== n && (t.innerHTML = n);
          }
        }
        break;
      case "multiple":
        t.multiple = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "muted":
        t.muted = i && typeof i != "function" && typeof i != "symbol";
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
        if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        n = _s(i), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          n
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        i != null && typeof i != "function" && typeof i != "symbol" ? t.setAttribute(n, i) : t.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "credentialless":
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
        i && typeof i != "function" && typeof i != "symbol" ? t.setAttribute(n, "") : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        i === !0 ? t.setAttribute(n, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? t.setAttribute(n, i) : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? t.setAttribute(n, i) : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? t.removeAttribute(n) : t.setAttribute(n, i);
        break;
      case "popover":
        bt("beforetoggle", t), bt("toggle", t), Rs(t, "popover", i);
        break;
      case "xlinkActuate":
        _n(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          i
        );
        break;
      case "xlinkArcrole":
        _n(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          i
        );
        break;
      case "xlinkRole":
        _n(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          i
        );
        break;
      case "xlinkShow":
        _n(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          i
        );
        break;
      case "xlinkTitle":
        _n(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          i
        );
        break;
      case "xlinkType":
        _n(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          i
        );
        break;
      case "xmlBase":
        _n(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          i
        );
        break;
      case "xmlLang":
        _n(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          i
        );
        break;
      case "xmlSpace":
        _n(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          i
        );
        break;
      case "is":
        Rs(t, "is", i);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N")
          n = f1.get(n) || n, Rs(t, n, i);
        else return;
    }
    zt = !0;
  }
  function qc(t, e, n, i, s, o) {
    switch (n) {
      case "style":
        hh(t, i, o);
        return;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i))
            throw Error(u(61));
          if (n = i.__html, n != null) {
            if (s.children != null) throw Error(u(60));
            o?.__html !== n && (t.innerHTML = n);
          }
        }
        break;
      case "children":
        if (typeof i == "string") ma(t, i);
        else if (typeof i == "number" || typeof i == "bigint")
          ma(t, "" + i);
        else return;
        break;
      case "onScroll":
        i != null && bt("scroll", t);
        return;
      case "onScrollEnd":
        i != null && bt("scrollend", t);
        return;
      case "onClick":
        i != null && (t.onclick = pn);
        return;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        return;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!ih.hasOwnProperty(n))
          t: {
            if (n[0] === "o" && n[1] === "n" && (s = n.endsWith("Capture"), o = n.slice(2, s ? n.length - 7 : void 0), e = t[Me] || null, e = e != null ? e[n] : null, typeof e == "function" && t.removeEventListener(o, e, s), typeof i == "function")) {
              typeof e != "function" && e !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)), t.addEventListener(o, i, s);
              break t;
            }
            zt = !0, n in t ? t[n] = i : i === !0 ? t.setAttribute(n, "") : Rs(t, n, i);
          }
        return;
    }
    zt = !0;
  }
  function me(t, e, n) {
    switch (e) {
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
        bt("error", t), bt("load", t);
        var i = !1, s = !1, o;
        for (o in n)
          if (n.hasOwnProperty(o)) {
            var f = n[o];
            if (f != null)
              switch (o) {
                case "src":
                  i = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(u(137, e));
                default:
                  Nt(t, e, o, f, n, null);
              }
          }
        s && Nt(t, e, "srcSet", n.srcSet, n, null), i && Nt(t, e, "src", n.src, n, null);
        return;
      case "input":
        bt("invalid", t);
        var p = o = f = s = null, S = null, M = null;
        for (i in n)
          if (n.hasOwnProperty(i)) {
            var O = n[i];
            if (O != null)
              switch (i) {
                case "name":
                  s = O;
                  break;
                case "type":
                  f = O;
                  break;
                case "checked":
                  S = O;
                  break;
                case "defaultChecked":
                  M = O;
                  break;
                case "value":
                  o = O;
                  break;
                case "defaultValue":
                  p = O;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (O != null)
                    throw Error(u(137, e));
                  break;
                default:
                  Nt(t, e, i, O, n, null);
              }
          }
        rh(
          t,
          o,
          p,
          S,
          M,
          f,
          s,
          !1
        );
        return;
      case "select":
        bt("invalid", t), i = f = o = null;
        for (s in n)
          if (n.hasOwnProperty(s) && (p = n[s], p != null))
            switch (s) {
              case "value":
                o = p;
                break;
              case "defaultValue":
                f = p;
                break;
              case "multiple":
                i = p;
              default:
                Nt(t, e, s, p, n, null);
            }
        e = o, n = f, t.multiple = !!i, e != null ? ha(t, !!i, e, !1) : n != null && ha(t, !!i, n, !0);
        return;
      case "textarea":
        bt("invalid", t), o = s = i = null;
        for (f in n)
          if (n.hasOwnProperty(f) && (p = n[f], p != null))
            switch (f) {
              case "value":
                i = p;
                break;
              case "defaultValue":
                s = p;
                break;
              case "children":
                o = p;
                break;
              case "dangerouslySetInnerHTML":
                if (p != null) throw Error(u(91));
                break;
              default:
                Nt(t, e, f, p, n, null);
            }
        fh(t, i, s, o);
        return;
      case "option":
        for (S in n)
          n.hasOwnProperty(S) && (i = n[S], i != null) && (S === "selected" ? t.selected = i && typeof i != "function" && typeof i != "symbol" : Nt(t, e, S, i, n, null));
        return;
      case "dialog":
        bt("beforetoggle", t), bt("toggle", t), bt("cancel", t), bt("close", t);
        break;
      case "iframe":
      case "object":
        bt("load", t);
        break;
      case "video":
      case "audio":
        for (i = 0; i < Kl.length; i++)
          bt(Kl[i], t);
        break;
      case "image":
        bt("error", t), bt("load", t);
        break;
      case "details":
        bt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        bt("error", t), bt("load", t);
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
        for (M in n)
          if (n.hasOwnProperty(M) && (i = n[M], i != null))
            switch (M) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(u(137, e));
              default:
                Nt(t, e, M, i, n, null);
            }
        return;
      default:
        if (Qu(e)) {
          for (O in n)
            n.hasOwnProperty(O) && (i = n[O], i !== void 0 && qc(
              t,
              e,
              O,
              i,
              n,
              void 0
            ));
          return;
        }
    }
    for (p in n)
      n.hasOwnProperty(p) && (i = n[p], i != null && Nt(t, e, p, i, n, null));
  }
  var kS = {};
  function JS(t, e, n, i) {
    switch (e) {
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
        var s = null, o = null, f = null, p = null, S = null, M = null, O = null;
        for (z in n) {
          var B = n[z];
          if (n.hasOwnProperty(z) && B != null)
            switch (z) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = B;
              default:
                i.hasOwnProperty(z) || Nt(t, e, z, null, i, B);
            }
        }
        for (var x in i) {
          var z = i[x];
          if (B = n[x], i.hasOwnProperty(x) && (z != null || B != null))
            switch (x) {
              case "type":
                z !== B && (zt = !0), o = z;
                break;
              case "name":
                z !== B && (zt = !0), s = z;
                break;
              case "checked":
                z !== B && (zt = !0), M = z;
                break;
              case "defaultChecked":
                z !== B && (zt = !0), O = z;
                break;
              case "value":
                z !== B && (zt = !0), f = z;
                break;
              case "defaultValue":
                z !== B && (zt = !0), p = z;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null)
                  throw Error(u(137, e));
                break;
              default:
                z !== B && Nt(
                  t,
                  e,
                  x,
                  z,
                  i,
                  B
                );
            }
        }
        qu(
          t,
          f,
          p,
          S,
          M,
          O,
          o,
          s
        );
        return;
      case "select":
        z = f = p = x = null;
        for (o in n)
          if (S = n[o], n.hasOwnProperty(o) && S != null)
            switch (o) {
              case "value":
                break;
              case "multiple":
                z = S;
              default:
                i.hasOwnProperty(o) || Nt(
                  t,
                  e,
                  o,
                  null,
                  i,
                  S
                );
            }
        for (s in i)
          if (o = i[s], S = n[s], i.hasOwnProperty(s) && (o != null || S != null))
            switch (s) {
              case "value":
                o !== S && (zt = !0), x = o;
                break;
              case "defaultValue":
                o !== S && (zt = !0), p = o;
                break;
              case "multiple":
                o !== S && (zt = !0), f = o;
              default:
                o !== S && Nt(
                  t,
                  e,
                  s,
                  o,
                  i,
                  S
                );
            }
        e = p, n = f, i = z, x != null ? ha(t, !!n, x, !1) : !!i != !!n && (e != null ? ha(t, !!n, e, !0) : ha(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        z = x = null;
        for (p in n)
          if (s = n[p], n.hasOwnProperty(p) && s != null && !i.hasOwnProperty(p))
            switch (p) {
              case "value":
                break;
              case "children":
                break;
              default:
                Nt(t, e, p, null, i, s);
            }
        for (f in i)
          if (s = i[f], o = n[f], i.hasOwnProperty(f) && (s != null || o != null))
            switch (f) {
              case "value":
                s !== o && (zt = !0), x = s;
                break;
              case "defaultValue":
                s !== o && (zt = !0), z = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(u(91));
                break;
              default:
                s !== o && Nt(t, e, f, s, i, o);
            }
        ch(t, x, z);
        return;
      case "option":
        for (var Z in n)
          x = n[Z], n.hasOwnProperty(Z) && x != null && !i.hasOwnProperty(Z) && (Z === "selected" ? t.selected = !1 : Nt(
            t,
            e,
            Z,
            null,
            i,
            x
          ));
        for (S in i)
          x = i[S], z = n[S], i.hasOwnProperty(S) && x !== z && (x != null || z != null) && (S === "selected" ? (x !== z && (zt = !0), t.selected = x && typeof x != "function" && typeof x != "symbol") : Nt(
            t,
            e,
            S,
            x,
            i,
            z
          ));
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
        for (var tt in n)
          x = n[tt], n.hasOwnProperty(tt) && x != null && !i.hasOwnProperty(tt) && Nt(t, e, tt, null, i, x);
        for (M in i)
          if (x = i[M], z = n[M], i.hasOwnProperty(M) && x !== z && (x != null || z != null))
            switch (M) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (x != null)
                  throw Error(u(137, e));
                break;
              default:
                Nt(
                  t,
                  e,
                  M,
                  x,
                  i,
                  z
                );
            }
        return;
      default:
        if (Qu(e)) {
          for (var mt in n)
            x = n[mt], n.hasOwnProperty(mt) && x !== void 0 && !i.hasOwnProperty(mt) && qc(
              t,
              e,
              mt,
              void 0,
              i,
              x
            );
          for (O in i)
            x = i[O], z = n[O], !i.hasOwnProperty(O) || x === z || x === void 0 && z === void 0 || qc(
              t,
              e,
              O,
              x,
              i,
              z
            );
          return;
        }
    }
    for (var C in n)
      x = n[C], n.hasOwnProperty(C) && x != null && !i.hasOwnProperty(C) && Nt(t, e, C, null, i, x);
    for (B in i)
      x = i[B], z = n[B], !i.hasOwnProperty(B) || x === z || x == null && z == null || Nt(t, e, B, x, i, z);
  }
  function by(t) {
    switch (t) {
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
  function PS() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, n = performance.getEntriesByType("resource"), i = 0; i < n.length; i++) {
        var s = n[i], o = s.transferSize, f = s.initiatorType, p = s.duration;
        if (o && p && by(f)) {
          for (f = 0, p = s.responseEnd, i += 1; i < n.length; i++) {
            var S = n[i], M = S.startTime;
            if (M > p) break;
            var O = S.transferSize, B = S.initiatorType;
            O && by(B) && (S = S.responseEnd, f += O * (S < p ? 1 : (p - M) / (S - M)));
          }
          if (--i, e += 8 * (o + f) / (s.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var Xc = null, Qc = null;
  function Jl(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Sy(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Ty(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function Ey(t, e, n, i) {
    return n = Jl(
      n
    ).createElement(t), n[re] = i, n[Me] = e, me(n, t, e), ae(n), n;
  }
  function Zc(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var Kc = null;
  function FS() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Kc ? !1 : (Kc = t, !0) : (Kc = null, !1);
  }
  var kc = typeof setTimeout == "function" ? setTimeout : void 0, IS = typeof clearTimeout == "function" ? clearTimeout : void 0, Ay = typeof Promise == "function" ? Promise : void 0, xy = typeof requestAnimationFrame == "function" ? requestAnimationFrame : kc, WS = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ay < "u" ? function(t) {
    return Ay.resolve(null).then(t).catch($S);
  } : kc;
  function $S(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function vi(t) {
    return t === "head";
  }
  function Cy(t, e) {
    var n = e, i = 0;
    do {
      var s = n.nextSibling;
      if (t.removeChild(n), s && s.nodeType === 8)
        if (n = s.data, n === "/$" || n === "/&") {
          if (i === 0) {
            t.removeChild(s), Ia(e);
            return;
          }
          i--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          i++;
        else if (n === "html")
          ef(
            t.ownerDocument.documentElement
          );
        else if (n === "head") {
          n = t.ownerDocument.head, ef(n);
          for (var o = n.firstChild; o; ) {
            var f = o.nextSibling, p = o.nodeName;
            o[dl] || p === "SCRIPT" || p === "STYLE" || p === "LINK" && o.rel.toLowerCase() === "stylesheet" || n.removeChild(o), o = f;
          }
        } else
          n === "body" && ef(t.ownerDocument.body);
      n = s;
    } while (n);
    Ia(e);
  }
  function My(t, e) {
    var n = t;
    t = 0;
    do {
      var i = n.nextSibling;
      if (n.nodeType === 1 ? e ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (e ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), i && i.nodeType === 8)
        if (n = i.data, n === "/$") {
          if (t === 0) break;
          t--;
        } else
          n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || t++;
      n = i;
    } while (n);
  }
  function Dy(t, e, n) {
    if (e = CSS.escape(e) !== e ? "r-" + btoa(e).replace(/=/g, "") : e, t.style.viewTransitionName = e, n != null && (t.style.viewTransitionClass = n), n = getComputedStyle(t), n.display === "inline") {
      if (e = t.getClientRects(), e.length === 1) var i = 1;
      else
        for (var s = i = 0; s < e.length; s++) {
          var o = e[s];
          0 < o.width && 0 < o.height && i++;
        }
      i === 1 && (t = t.style, t.display = e.length === 1 ? "inline-block" : "block", t.marginTop = "-" + n.paddingTop, t.marginBottom = "-" + n.paddingBottom);
    }
  }
  function zy(t, e) {
    t = t.style, e = e.style;
    var n = e != null ? e.hasOwnProperty("viewTransitionName") ? e.viewTransitionName : e.hasOwnProperty("view-transition-name") ? e["view-transition-name"] : null : null;
    t.viewTransitionName = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), n = e != null ? e.hasOwnProperty("viewTransitionClass") ? e.viewTransitionClass : e.hasOwnProperty("view-transition-class") ? e["view-transition-class"] : null : null, t.viewTransitionClass = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), t.display === "inline-block" && (e == null ? t.display = t.margin = "" : (n = e.display, t.display = n == null || typeof n == "boolean" ? "" : n, n = e.margin, n != null ? t.margin = n : (n = e.hasOwnProperty("marginTop") ? e.marginTop : e["margin-top"], t.marginTop = n == null || typeof n == "boolean" ? "" : n, e = e.hasOwnProperty("marginBottom") ? e.marginBottom : e["margin-bottom"], t.marginBottom = e == null || typeof e == "boolean" ? "" : e)));
  }
  function tT(t, e, n) {
    return n = n.ownerDocument.defaultView, {
      rect: t,
      abs: e.position === "absolute" || e.position === "fixed",
      clip: e.clipPath !== "none" || e.overflow !== "visible" || e.filter !== "none" || e.mask !== "none" || e.mask !== "none" || e.borderRadius !== "0px",
      view: 0 <= t.bottom && 0 <= t.right && t.top <= n.innerHeight && t.left <= n.innerWidth
    };
  }
  function Jc(t) {
    var e = t.getBoundingClientRect(), n = getComputedStyle(t);
    return tT(e, n, t);
  }
  function eT(t) {
    return t.documentElement.clientHeight;
  }
  function nT(t) {
    this.addEventListener("load", t), this.addEventListener("error", t);
  }
  function iT(t, e, n, i, s, o, f, p, S) {
    var M = e.nodeType === 9 ? e : e.ownerDocument;
    try {
      var O = M.startViewTransition({
        update: function() {
          var x = M.defaultView, z = x.navigation && x.navigation.transition, Z = M.fonts.status;
          i();
          var tt = [];
          if (Z === "loaded" && (eT(M), M.fonts.status === "loading" && tt.push(M.fonts.ready)), Z = tt.length, t !== null)
            for (var mt = t.suspenseyImages, C = 0, E = 0; E < mt.length; E++) {
              var D = mt[E];
              if (!D.complete) {
                var U = D.getBoundingClientRect();
                if (0 < U.bottom && 0 < U.right && U.top < x.innerHeight && U.left < x.innerWidth) {
                  if (C += Py(D), C > qo) {
                    tt.length = Z;
                    break;
                  }
                  D = new Promise(
                    nT.bind(D)
                  ), tt.push(D);
                }
              }
            }
          if (0 < tt.length)
            return x = Promise.race([
              Promise.all(tt),
              new Promise(function(P) {
                return setTimeout(P, 500);
              })
            ]).then(s, s), (z ? Promise.allSettled([z.finished, x]) : x).then(o, o);
          if (s(), z)
            return z.finished.then(
              o,
              o
            );
          o();
        },
        types: n
      });
      M.__reactViewTransition = O;
      var B = [];
      return O.ready.then(
        function() {
          for (var x = M.documentElement.getAnimations({
            subtree: !0
          }), z = 0; z < x.length; z++) {
            var Z = x[z], tt = Z.effect, mt = tt.pseudoElement;
            if (mt != null && mt.startsWith("::view-transition")) {
              B.push(Z), Z = tt.getKeyframes();
              for (var C = mt = void 0, E = !0, D = 0; D < Z.length; D++) {
                var U = Z[D], P = U.width;
                if (mt === void 0) mt = P;
                else if (mt !== P) {
                  E = !1;
                  break;
                }
                if (P = U.height, C === void 0) C = P;
                else if (C !== P) {
                  E = !1;
                  break;
                }
                delete U.width, delete U.height, U.transform === "none" && delete U.transform;
              }
              E && mt !== void 0 && C !== void 0 && (tt.setKeyframes(Z), E = getComputedStyle(
                tt.target,
                tt.pseudoElement
              ), E.width !== mt || E.height !== C) && (E = Z[0], E.width = mt, E.height = C, E = Z[Z.length - 1], E.width = mt, E.height = C, tt.setKeyframes(Z));
            }
          }
          f();
        },
        function(x) {
          M.__reactViewTransition === O && (M.__reactViewTransition = null);
          try {
            typeof x == "object" && x !== null && x.name === "InvalidStateError" && (x.message === "View transition was skipped because document visibility state is hidden." || x.message === "Skipping view transition because document visibility state has become hidden." || x.message === "Skipping view transition because viewport size changed." || x.message === "Transition was aborted because of invalid state") && (x = null), x !== null && S(x);
          } finally {
            i(), s(), f();
          }
        }
      ), O.finished.finally(function() {
        for (var x = 0; x < B.length; x++)
          B[x].cancel();
        M.__reactViewTransition === O && (M.__reactViewTransition = null), p();
      }), O;
    } catch {
      return i(), s(), f(), null;
    }
  }
  function Wi(t, e) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + t + "(" + e + ")";
  }
  Wi.prototype.animate = function(t, e) {
    return e = typeof e == "number" ? { duration: e } : Q({}, e), e.pseudoElement = this._selector, this._scope.animate(t, e);
  }, Wi.prototype.getAnimations = function() {
    for (var t = this._scope, e = this._selector, n = t.getAnimations({ subtree: !0 }), i = [], s = 0; s < n.length; s++) {
      var o = n[s].effect;
      o !== null && o.target === t && o.pseudoElement === e && i.push(n[s]);
    }
    return i;
  }, Wi.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function Oy(t) {
    return {
      name: t,
      group: new Wi("group", t),
      imagePair: new Wi("image-pair", t),
      old: new Wi("old", t),
      new: new Wi("new", t)
    };
  }
  function Xe(t) {
    this._fragmentFiber = t, this._observers = this._eventListeners = null;
  }
  Xe.prototype.addEventListener = function(t, e, n) {
    var i = null, s = null;
    if (!(n != null && typeof n != "boolean" && (i = n.signal || null, i !== null && i.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var o = this._eventListeners;
      if (wy(o, t, e, n) === -1) {
        var f = this, p = e;
        n != null && typeof n != "boolean" && n.once === !0 && (p = function(S) {
          f.removeEventListener(
            t,
            e,
            n
          ), typeof e == "function" ? e.call(this, S) : e.handleEvent(S);
        }), i !== null && (s = f.removeEventListener.bind(
          f,
          t,
          e,
          n
        ), i.addEventListener("abort", s, { once: !0 }), s = i.removeEventListener.bind(i, "abort", s)), i = Za(n), o.push({
          type: t,
          listener: e,
          optionsOrUseCapture: n,
          attachedListener: p,
          cleanup: s
        }), y(
          this._fragmentFiber.child,
          !1,
          aT,
          t,
          p,
          i
        );
      }
      this._eventListeners = o;
    }
  };
  function aT(t, e, n, i) {
    return N(t).addEventListener(
      e,
      n,
      i
    ), !1;
  }
  Xe.prototype.removeEventListener = function(t, e, n) {
    var i = this._eventListeners;
    if (i !== null && (e = wy(
      i,
      t,
      e,
      n
    ), e !== -1)) {
      var s = i[e];
      n = s.attachedListener;
      var o = s.cleanup;
      s = Za(s.optionsOrUseCapture), y(
        this._fragmentFiber.child,
        !1,
        lT,
        t,
        n,
        s
      ), i.splice(e, 1), o !== null && o();
    }
  };
  function lT(t, e, n, i) {
    return N(t).removeEventListener(
      e,
      n,
      i
    ), !1;
  }
  function Za(t) {
    return t != null && typeof t != "boolean" && (t.once === !0 || t.signal instanceof AbortSignal) ? { capture: t.capture, passive: t.passive } : t;
  }
  function Ry(t) {
    return t == null ? "c=0" : typeof t == "boolean" ? "c=" + (t ? "1" : "0") : "c=" + (t.capture ? "1" : "0");
  }
  function wy(t, e, n, i) {
    if (t.length === 0) return -1;
    i = Ry(i);
    for (var s = 0; s < t.length; s++) {
      var o = t[s];
      if (o.type === e && o.listener === n && Ry(o.optionsOrUseCapture) === i)
        return s;
    }
    return -1;
  }
  Xe.prototype.dispatchEvent = function(t) {
    var e = T(
      this._fragmentFiber
    );
    if (e === null) return !0;
    e = N(e);
    var n = this._eventListeners;
    if (n !== null && 0 < n.length || !t.bubbles) {
      var i = e.nodeType === 9 ? e.createComment("") : document.createTextNode("");
      if (n)
        for (var s = 0; s < n.length; s++) {
          var o = n[s];
          i.addEventListener(
            o.type,
            o.attachedListener,
            Za(o.optionsOrUseCapture)
          );
        }
      if (e.appendChild(i), t = i.dispatchEvent(t), n)
        for (s = 0; s < n.length; s++)
          o = n[s], i.removeEventListener(
            o.type,
            o.attachedListener,
            Za(o.optionsOrUseCapture)
          );
      return e.removeChild(i), t;
    }
    return e.dispatchEvent(t);
  }, Xe.prototype.focus = function(t) {
    y(
      this._fragmentFiber.child,
      !0,
      _y,
      t,
      void 0,
      void 0
    );
  };
  function _y(t, e) {
    return t.tag === 6 ? !1 : (t = N(t), gT(t, e));
  }
  Xe.prototype.focusLast = function(t) {
    var e = [];
    y(
      this._fragmentFiber.child,
      !0,
      Pc,
      e,
      void 0,
      void 0
    );
    for (var n = e.length - 1; 0 <= n && !_y(e[n], t); n--) ;
  };
  function Pc(t, e) {
    return e.push(t), !1;
  }
  Xe.prototype.blur = function() {
    var t = T(
      this._fragmentFiber
    );
    t !== null && (t = N(t), t = Jl(t).activeElement, t !== null && y(
      this._fragmentFiber.child,
      !1,
      sT,
      t,
      void 0,
      void 0
    ));
  };
  function sT(t, e) {
    return t.tag === 6 ? !1 : (t = N(t), t === e || t.contains(e) ? (e.blur(), !0) : !1);
  }
  Xe.prototype.observeUsing = function(t) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(t), y(
      this._fragmentFiber.child,
      !1,
      oT,
      t,
      void 0,
      void 0
    );
  };
  function oT(t, e) {
    return t.tag === 6 || (t = N(t), e.observe(t)), !1;
  }
  Xe.prototype.unobserveUsing = function(t) {
    var e = this._observers;
    if (e !== null && e.has(t)) {
      e.delete(t), y(
        this._fragmentFiber.child,
        !1,
        uT,
        t,
        void 0,
        void 0
      );
      for (var n = e = 0; n < un.length; n++) {
        var i = un[n];
        i.fragmentInstance === this && i.observer === t ? t.unobserve(i.instance) : un[e++] = i;
      }
      un.length = e;
    }
  };
  function uT(t, e) {
    return t.tag === 6 || (t = N(t), e.unobserve(t)), !1;
  }
  var un = [], Fc = !1;
  function rT(t, e, n) {
    un.push({
      fragmentInstance: t,
      observer: e,
      instance: n
    }), Fc || (Fc = !0, vT(function() {
      Fc = !1;
      var i = un;
      un = [];
      for (var s = 0; s < i.length; s++) {
        var o = i[s];
        o.observer.unobserve(o.instance);
      }
    }));
  }
  Xe.prototype.getClientRects = function() {
    var t = [];
    return y(
      this._fragmentFiber.child,
      !1,
      cT,
      t,
      void 0,
      void 0
    ), t;
  };
  function cT(t, e) {
    if (t.tag === 6) {
      t = t.stateNode;
      var n = t.ownerDocument.createRange();
      n.selectNodeContents(t), e.push.apply(e, n.getClientRects());
    } else
      t = N(t), e.push.apply(e, t.getClientRects());
    return !1;
  }
  Xe.prototype.getRootNode = function(t) {
    var e = T(
      this._fragmentFiber
    );
    return e === null ? this : N(e).getRootNode(t);
  }, Xe.prototype.compareDocumentPosition = function(t) {
    var e = T(
      this._fragmentFiber
    );
    if (e === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var n = [];
    y(
      this._fragmentFiber.child,
      !1,
      Pc,
      n,
      void 0,
      void 0
    );
    var i = N(e);
    if (n.length === 0) {
      if (n = i, _(this._fragmentFiber)) {
        t: {
          for (e = this._fragmentFiber.return; e !== null; ) {
            if (e.tag === 4) {
              e = e.stateNode.containerInfo;
              break t;
            }
            if (e.tag === 3 || e.tag === 5 || e.tag === 27)
              break;
            e = e.return;
          }
          e = null;
        }
        e != null && (n = e);
      }
      e = this._fragmentFiber;
      var s = i = n.compareDocumentPosition(t);
      return n === t ? s = Node.DOCUMENT_POSITION_CONTAINS : i & Node.DOCUMENT_POSITION_CONTAINED_BY && (n = R(e)[1], n === null ? s = Node.DOCUMENT_POSITION_PRECEDING : (t = N(n).compareDocumentPosition(
        t
      ), s = t === 0 || t & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), s |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    e = N(n[0]), s = N(n[n.length - 1]);
    var o = _(this._fragmentFiber) ? e.parentElement : i;
    if (o == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    i = o.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY, o = o.compareDocumentPosition(s) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var f = e.compareDocumentPosition(t), p = s.compareDocumentPosition(t), S = f & Node.DOCUMENT_POSITION_CONTAINED_BY || p & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return p = i && o && f & Node.DOCUMENT_POSITION_FOLLOWING && p & Node.DOCUMENT_POSITION_PRECEDING, e = i && e === t || o && s === t || S || p ? Node.DOCUMENT_POSITION_CONTAINED_BY : !i && e === t || !o && s === t ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : f, e & Node.DOCUMENT_POSITION_DISCONNECTED || e & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || fT(
      e,
      this._fragmentFiber,
      n[0],
      n[n.length - 1],
      t
    ) ? e : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function fT(t, e, n, i, s) {
    var o = wi(s);
    if (t & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if (n = !!o)
        t: {
          for (; o !== null; ) {
            if (o.tag === 7 && (o === e || o.alternate === e)) {
              n = !0;
              break t;
            }
            o = o.return;
          }
          n = !1;
        }
      return n;
    }
    if (t & Node.DOCUMENT_POSITION_CONTAINS) {
      if (o === null)
        return o = s.ownerDocument, s === o || s === o.documentElement || s === o.body;
      t: {
        for (o = e, e = T(e); o !== null; ) {
          if (!(o.tag !== 5 && o.tag !== 3 && o.tag !== 27 || o !== e && o.alternate !== e)) {
            o = !0;
            break t;
          }
          o = o.return;
        }
        o = !1;
      }
      return o;
    }
    return t & Node.DOCUMENT_POSITION_PRECEDING ? ((e = !!o) && !(e = o === n) && (e = ot(
      n,
      o,
      nt
    ), e === null ? e = !1 : (y(
      e,
      !0,
      q,
      o,
      n
    ), o = j, j = null, e = o !== null)), e) : t & Node.DOCUMENT_POSITION_FOLLOWING ? ((e = !!o) && !(e = o === i) && (e = ot(
      i,
      o,
      nt
    ), e === null ? e = !1 : (y(
      e,
      !0,
      X,
      o,
      i
    ), o = j, H = j = null, e = o !== null)), e) : !1;
  }
  function Ny(t, e) {
    var n = t.ownerDocument.createRange();
    n.selectNodeContents(t), t = n.getBoundingClientRect(), window.scrollTo(
      window.scrollX + t.left,
      e ? window.scrollY + t.top : window.scrollY + t.bottom - window.innerHeight
    );
  }
  Xe.prototype.scrollIntoView = function(t) {
    if (typeof t == "object") throw Error(u(566));
    var e = [];
    y(
      this._fragmentFiber.child,
      !1,
      Pc,
      e,
      void 0,
      void 0
    );
    var n = t !== !1;
    if (e.length === 0) {
      var i = R(
        this._fragmentFiber
      );
      if (i = n ? i[1] || i[0] || T(this._fragmentFiber) : i[0] || i[1], i === null) return;
      if (i.tag === 6) {
        t = N(i), Ny(t, n);
        return;
      }
      if (i = N(i), i.nodeType !== 9) {
        if (i.nodeType === 11) {
          n = "host" in i ? i.host : null, n !== null && n.scrollIntoView(t);
          return;
        }
        i.scrollIntoView(t);
      }
    }
    for (i = n ? e.length - 1 : 0; i !== (n ? -1 : e.length); ) {
      var s = e[i];
      s.tag === 6 ? (s = N(s), Ny(s, n)) : N(s).scrollIntoView(t), i += n ? -1 : 1;
    }
  };
  function dT(t, e) {
    return t = N(t), Vy(t, e), !1;
  }
  function Vy(t, e) {
    t.reactFragments == null && (t.reactFragments = /* @__PURE__ */ new Set()), t.reactFragments.add(e);
  }
  function Uy(t, e) {
    var n = e._eventListeners;
    if (n !== null)
      for (var i = 0; i < n.length; i++) {
        var s = n[i];
        t.addEventListener(
          s.type,
          s.attachedListener,
          Za(s.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (n = e._observers, n !== null && n.forEach(function(o) {
      for (var f = 0, p = 0; p < un.length; p++) {
        var S = un[p];
        (S.fragmentInstance !== e || S.observer !== o || S.instance !== t) && (un[f++] = S);
      }
      un.length = f, o.observe(t);
    }), Vy(t, e));
  }
  function hT(t, e) {
    var n = e._eventListeners;
    if (n !== null)
      for (var i = 0; i < n.length; i++) {
        var s = n[i];
        t.removeEventListener(
          s.type,
          s.attachedListener,
          Za(s.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (n = e._observers, n !== null && n.forEach(function(o) {
      typeof o.rootMargin == "string" ? rT(
        e,
        o,
        t
      ) : o.unobserve(t);
    }), t.reactFragments != null && t.reactFragments.delete(e));
  }
  function Ic(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (e = e.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Ic(n), Os(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function mT(t, e, n, i) {
    for (; t.nodeType === 1; ) {
      var s = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!i && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (i) {
        if (!t[dl])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (o = t.getAttribute("rel"), o === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (o !== s.rel || t.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || t.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || t.getAttribute("title") !== (s.title == null ? null : s.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (o = t.getAttribute("src"), (o !== (s.src == null ? null : s.src) || t.getAttribute("type") !== (s.type == null ? null : s.type) || t.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && o && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var o = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && t.getAttribute("name") === o)
          return t;
      } else return t;
      if (t = We(t.nextSibling), t === null) break;
    }
    return null;
  }
  function pT(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = We(t.nextSibling), t === null)) return null;
    return t;
  }
  function By(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = We(t.nextSibling), t === null)) return null;
    return t;
  }
  function Wc(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function $c(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function yT(t, e) {
    var n = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || n.readyState !== "loading")
      e();
    else {
      var i = function() {
        e(), n.removeEventListener("DOMContentLoaded", i);
      };
      n.addEventListener("DOMContentLoaded", i), t._reactRetry = i;
    }
  }
  function We(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var tf = null;
  function Ly(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "/$" || n === "/&") {
          if (e === 0)
            return We(t.nextSibling);
          e--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function jy(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (e === 0) return t;
          e--;
        } else n !== "/$" && n !== "/&" || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function gT(t, e) {
    function n() {
      i = !0;
    }
    if (t.ownerDocument.activeElement === t) return !0;
    var i = !1;
    try {
      t.ownerDocument.addEventListener("focus", n, !0), (t.focus || HTMLElement.prototype.focus).call(t, e);
    } finally {
      t.ownerDocument.removeEventListener("focus", n, !0);
    }
    return i;
  }
  function vT(t) {
    xy(function() {
      xy(function(e) {
        return t(e);
      });
    });
  }
  function Hy(t, e, n) {
    switch (e = Jl(n), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(u(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(u(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(u(454));
        return t;
      default:
        throw Error(u(451));
    }
  }
  function Gy(t, e, n) {
    for (var i in n) {
      var s = n[i];
      n.hasOwnProperty(i) && s != null && Nt(t, e, i, null, kS, s);
    }
    n.dangerouslySetInnerHTML != null && (t.textContent = ""), t.onclick === pn && (t.onclick = null), Os(t);
  }
  function ef(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    Os(t);
  }
  var $e = /* @__PURE__ */ new Map(), Yy = /* @__PURE__ */ new Set();
  function Pl(t) {
    if (typeof t.getRootNode == "function") {
      var e = t.getRootNode();
      if (e.nodeType === 9 || e.nodeType === 11) return e;
    }
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  var Zn = rt.d;
  rt.d = {
    f: bT,
    r: ST,
    D: TT,
    C: ET,
    L: AT,
    m: xT,
    X: MT,
    S: CT,
    M: DT
  };
  function bT() {
    var t = Zn.f(), e = No();
    return t || e;
  }
  function ST(t) {
    var e = ca(t);
    e !== null && e.tag === 5 && e.type === "form" ? Xm(e) : Zn.r(t);
  }
  var Ka = typeof document > "u" ? null : document;
  function qy(t, e, n) {
    var i = Ka;
    if (i && typeof e == "string" && e) {
      var s = Ze(e);
      s = 'link[rel="' + t + '"][href="' + s + '"]', typeof n == "string" && (s += '[crossorigin="' + n + '"]'), Yy.has(s) || (Yy.add(s), t = { rel: t, crossOrigin: n, href: e }, i.querySelector(s) === null && (e = i.createElement("link"), me(e, "link", t), ae(e), i.head.appendChild(e)));
    }
  }
  function TT(t) {
    Zn.D(t), qy("dns-prefetch", t, null);
  }
  function ET(t, e) {
    Zn.C(t, e), qy("preconnect", t, e);
  }
  function AT(t, e, n) {
    Zn.L(t, e, n);
    var i = Ka;
    if (i && t && e) {
      var s = 'link[rel="preload"][as="' + Ze(e) + '"]';
      e === "image" && n && n.imageSrcSet ? (s += '[imagesrcset="' + Ze(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (s += '[imagesizes="' + Ze(
        n.imageSizes
      ) + '"]')) : s += '[href="' + Ze(t) + '"]';
      var o = s;
      switch (e) {
        case "style":
          o = ka(t);
          break;
        case "script":
          o = Ja(t);
      }
      if (!($e.has(o) || (t = Q(
        {
          rel: "preload",
          href: e === "image" && n && n.imageSrcSet ? void 0 : t,
          as: e
        },
        n
      ), $e.set(o, t), i.querySelector(s) !== null || e === "style" && i.querySelector(Fl(o)) || e === "script" && i.querySelector(Il(o))))) {
        var f = i.createElement("link");
        me(f, "link", t), e === "style" && (f[zs] = !0, f.onload = f.onerror = function() {
          eh(f);
        }), ae(f), i.head.appendChild(f);
      }
    }
  }
  function xT(t, e) {
    Zn.m(t, e);
    var n = Ka;
    if (n && t) {
      var i = e && typeof e.as == "string" ? e.as : "script", s = 'link[rel="modulepreload"][as="' + Ze(i) + '"][href="' + Ze(t) + '"]', o = s;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          o = Ja(t);
      }
      if (!$e.has(o) && (t = Q({ rel: "modulepreload", href: t }, e), $e.set(o, t), n.querySelector(s) === null)) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Il(o)))
              return;
        }
        i = n.createElement("link"), me(i, "link", t), ae(i), n.head.appendChild(i);
      }
    }
  }
  function CT(t, e, n) {
    Zn.S(t, e, n);
    var i = Ka;
    if (i && t) {
      var s = fa(i).hoistableStyles, o = ka(t);
      e = e || "default";
      var f = s.get(o);
      if (!f) {
        var p = { loading: 0, preload: null };
        if (f = i.querySelector(
          Fl(o)
        ))
          p.loading = 5;
        else {
          t = Q(
            { rel: "stylesheet", href: t, "data-precedence": e },
            n
          ), (n = $e.get(o)) && nf(t, n);
          var S = f = i.createElement("link");
          ae(S), me(S, "link", t), S._p = new Promise(function(M, O) {
            S.onload = M, S.onerror = O;
          }), S.addEventListener("load", function() {
            p.loading |= 1;
          }), S.addEventListener("error", function() {
            p.loading |= 2;
          }), p.loading |= 4, Go(f, e, i);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: p
        }, s.set(o, f);
      }
    }
  }
  function MT(t, e) {
    Zn.X(t, e);
    var n = Ka;
    if (n && t) {
      var i = fa(n).hoistableScripts, s = Ja(t), o = i.get(s);
      o || (o = n.querySelector(Il(s)), o || (t = Q({ src: t, async: !0 }, e), (e = $e.get(s)) && af(t, e), o = n.createElement("script"), ae(o), me(o, "link", t), n.head.appendChild(o)), o = {
        type: "script",
        instance: o,
        count: 1,
        state: null
      }, i.set(s, o));
    }
  }
  function DT(t, e) {
    Zn.M(t, e);
    var n = Ka;
    if (n && t) {
      var i = fa(n).hoistableScripts, s = Ja(t), o = i.get(s);
      o || (o = n.querySelector(Il(s)), o || (t = Q({ src: t, async: !0, type: "module" }, e), (e = $e.get(s)) && af(t, e), o = n.createElement("script"), ae(o), me(o, "link", t), n.head.appendChild(o)), o = {
        type: "script",
        instance: o,
        count: 1,
        state: null
      }, i.set(s, o));
    }
  }
  function Xy(t, e, n, i) {
    var s = (s = Pn.current) ? Pl(s) : null;
    if (!s) throw Error(u(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (n = ka(n.href), e = fa(
          s
        ).hoistableStyles, i = e.get(n), i || (i = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, e.set(n, i)), i) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          t = ka(n.href);
          var o = fa(
            s
          ).hoistableStyles, f = o.get(t);
          if (f || (s = s.ownerDocument || s, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, o.set(t, f), (o = s.querySelector(
            Fl(t)
          )) ? o._p || (f.instance = o, f.state.loading = 5) : (o = $e.get(t), o || (o = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, $e.set(t, o)), zT(
            s,
            t,
            o,
            f.state
          ))), e && i === null)
            throw Error(u(528, ""));
          return f;
        }
        if (e && i !== null)
          throw Error(u(529, ""));
        return null;
      case "script":
        return e = n.async, n = n.src, typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (n = Ja(n), e = fa(
          s
        ).hoistableScripts, i = e.get(n), i || (i = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, e.set(n, i)), i) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(u(444, t));
    }
  }
  function ka(t) {
    return 'href="' + Ze(t) + '"';
  }
  function Fl(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Qy(t) {
    return Q({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function zT(t, e, n, i) {
    if (e = t.querySelector(
      'link[rel="preload"][as="style"][' + e + "]"
    )) {
      if (e[zs] !== !0) {
        i.loading = 1;
        return;
      }
    } else
      e = t.createElement("link"), e[zs] = !0, e.onload = e.onerror = eh.bind(null, e), me(e, "link", n), ae(e), t.head.appendChild(e);
    i.preload = e, e.addEventListener("load", function() {
      return i.loading |= 1;
    }), e.addEventListener("error", function() {
      return i.loading |= 2;
    });
  }
  function Ja(t) {
    return '[src="' + Ze(t) + '"]';
  }
  function Il(t) {
    return "script[async]" + t;
  }
  function Zy(t, e, n) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var i = t.querySelector(
            'style[data-href~="' + Ze(n.href) + '"]'
          );
          if (i)
            return e.instance = i, ae(i), i;
          var s = Q({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return i = (t.ownerDocument || t).createElement(
            "style"
          ), ae(i), me(i, "style", s), Go(i, n.precedence, t), e.instance = i;
        case "stylesheet":
          s = ka(n.href);
          var o = t.querySelector(
            Fl(s)
          );
          if (o)
            return e.state.loading |= 4, e.instance = o, ae(o), o;
          i = Qy(n), (s = $e.get(s)) && nf(i, s), o = (t.ownerDocument || t).createElement("link"), ae(o);
          var f = o;
          return f._p = new Promise(function(p, S) {
            f.onload = p, f.onerror = S;
          }), me(o, "link", i), e.state.loading |= 4, Go(o, n.precedence, t), e.instance = o;
        case "script":
          return o = Ja(n.src), (s = t.querySelector(
            Il(o)
          )) ? (e.instance = s, ae(s), s) : (i = n, (s = $e.get(o)) && (i = Q({}, n), af(i, s)), t = t.ownerDocument || t, s = t.createElement("script"), ae(s), me(s, "link", i), t.head.appendChild(s), e.instance = s);
        case "void":
          return null;
        default:
          throw Error(u(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (i = e.instance, e.state.loading |= 4, Go(i, n.precedence, t));
    return e.instance;
  }
  function Go(t, e, n) {
    for (var i = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = i.length ? i[i.length - 1] : null, o = s, f = 0; f < i.length; f++) {
      var p = i[f];
      if (p.dataset.precedence === e) o = p;
      else if (o !== s) break;
    }
    o ? o.parentNode.insertBefore(t, o.nextSibling) : (e = n.nodeType === 9 ? n.head : n, e.insertBefore(t, e.firstChild));
  }
  function nf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function af(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var Yo = null;
  function Ky(t, e, n) {
    if (Yo === null) {
      var i = /* @__PURE__ */ new Map(), s = Yo = /* @__PURE__ */ new Map();
      s.set(n, i);
    } else
      s = Yo, i = s.get(n), i || (i = /* @__PURE__ */ new Map(), s.set(n, i));
    if (i.has(t)) return i;
    for (i.set(t, null), n = n.getElementsByTagName(t), s = 0; s < n.length; s++) {
      var o = n[s];
      if (!(o[dl] || o[re] || t === "link" && o.getAttribute("rel") === "stylesheet") && o.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = o.getAttribute(e) || "";
        f = t + f;
        var p = i.get(f);
        p ? p.push(o) : i.set(f, [o]);
      }
    }
    return i;
  }
  function lf(t, e, n) {
    t = t.ownerDocument || t, t.head.insertBefore(
      n,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function OT(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
          break;
        return !0;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
          break;
        return e.rel === "stylesheet" ? (t = e.disabled, typeof e.precedence == "string" && t == null) : !0;
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
          return !0;
    }
    return !1;
  }
  function ky(t, e) {
    return t === "img" && e.src != null && e.src !== "" && e.onLoad == null && e.loading !== "lazy";
  }
  function Jy(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function Py(t) {
    return (t.width || 100) * (t.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function Fy(t, e) {
    typeof e.decode == "function" && (t.imgCount++, e.complete || (t.imgBytes += Py(e), t.suspenseyImages.push(e)), t = _T.bind(t), e.decode().then(t, t));
  }
  function RT(t, e, n, i) {
    if (n.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var s = ka(i.href), o = e.querySelector(
          Fl(s)
        );
        if (o) {
          e = o._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = Wl.bind(t), e.then(t, t)), n.state.loading |= 4, n.instance = o, ae(o);
          return;
        }
        o = e.ownerDocument || e, i = Qy(i), (s = $e.get(s)) && nf(i, s), o = o.createElement("link"), ae(o);
        var f = o;
        f._p = new Promise(function(p, S) {
          f.onload = p, f.onerror = S;
        }), me(o, "link", i), n.instance = o;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (t.count++, n = Wl.bind(t), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  var qo = 0;
  function wT(t, e) {
    return t.stylesheets && t.count === 0 && Qo(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(n) {
      var i = setTimeout(function() {
        if (t.stylesheets && Qo(t, t.stylesheets), t.unsuspend) {
          var o = t.unsuspend;
          t.unsuspend = null, o();
        }
      }, 6e4 + e);
      0 < t.imgBytes && qo === 0 && (qo = 62500 * PS());
      var s = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && Qo(t, t.stylesheets), t.unsuspend)) {
            var o = t.unsuspend;
            t.unsuspend = null, o();
          }
        },
        (t.imgBytes > qo ? 50 : 800) + e
      );
      return t.unsuspend = n, function() {
        t.unsuspend = null, clearTimeout(i), clearTimeout(s);
      };
    } : null;
  }
  function Iy(t) {
    if (t.count === 0 && (t.imgCount === 0 || !t.waitingForImages)) {
      if (t.stylesheets) Qo(t, t.stylesheets);
      else if (t.unsuspend) {
        var e = t.unsuspend;
        t.unsuspend = null, e();
      }
    }
  }
  function Wl() {
    this.count--, Iy(this);
  }
  function _T() {
    this.imgCount--, Iy(this);
  }
  var Xo = null;
  function Qo(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Xo = /* @__PURE__ */ new Map(), e.forEach(NT, t), Xo = null, Wl.call(t));
  }
  function NT(t, e) {
    if (!(e.state.loading & 4)) {
      var n = Xo.get(t);
      if (n) var i = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Xo.set(t, n);
        for (var s = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), o = 0; o < s.length; o++) {
          var f = s[o];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (n.set(f.dataset.precedence, f), i = f);
        }
        i && n.set(null, i);
      }
      s = e.instance, f = s.getAttribute("data-precedence"), o = n.get(f) || i, o === i && n.set(null, s), n.set(f, s), this.count++, i = Wl.bind(this), s.addEventListener("load", i), s.addEventListener("error", i), o ? o.parentNode.insertBefore(s, o.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(s, t.firstChild)), e.state.loading |= 4;
    }
  }
  var Pa = {
    $$typeof: Ct,
    Provider: null,
    Consumer: null,
    _currentValue: _e,
    _currentValue2: _e,
    _threadCount: 0
  };
  function VT(t, e, n, i, s, o, f, p, S) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ju(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ju(0), this.hiddenUpdates = ju(null), this.identifierPrefix = i, this.onUncaughtError = s, this.onCaughtError = o, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = S, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Wy(t, e, n, i, s, o, f, p, S, M, O, B) {
    return t = new VT(
      t,
      e,
      n,
      f,
      S,
      M,
      O,
      B,
      p
    ), e = 1, o === !0 && (e |= 24), o = De(3, null, null, e), t.current = o, o.stateNode = t, e = br(), e.refCount++, t.pooledCache = e, e.refCount++, o.memoizedState = {
      element: i,
      isDehydrated: n,
      cache: e
    }, Ar(o), t;
  }
  function $y(t) {
    return t ? (t = Ta, t) : Ta;
  }
  function tg(t, e, n, i, s, o) {
    s = $y(s), i.context === null ? i.context = s : i.pendingContext = s, i = si(e), i.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (i.callback = o), n = oi(t, i, e), n !== null && (we(n, t, e), Ol(n, t, e));
  }
  function eg(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function sf(t, e) {
    eg(t, e), (t = t.alternate) && eg(t, e);
  }
  function ng(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Ui(t, 67108864);
      e !== null && we(e, t, 67108864), sf(t, 67108864);
    }
  }
  function ig(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = qe();
      e = Hu(e);
      var n = Ui(t, e);
      n !== null && we(n, t, e), sf(t, e);
    }
  }
  var Fa = !0;
  function UT(t, e, n, i) {
    var s = $.T;
    $.T = null;
    var o = rt.p;
    try {
      rt.p = 2, of(t, e, n, i);
    } finally {
      rt.p = o, $.T = s;
    }
  }
  function BT(t, e, n, i) {
    var s = $.T;
    $.T = null;
    var o = rt.p;
    try {
      rt.p = 8, of(t, e, n, i);
    } finally {
      rt.p = o, $.T = s;
    }
  }
  function of(t, e, n, i) {
    if (Fa) {
      var s = uf(i);
      if (s === null)
        Yc(
          t,
          e,
          i,
          Zo,
          n
        ), lg(t, i);
      else if (jT(
        s,
        t,
        e,
        n,
        i
      ))
        i.stopPropagation();
      else if (lg(t, i), e & 4 && -1 < LT.indexOf(t)) {
        for (; s !== null; ) {
          var o = ca(s);
          if (o !== null)
            switch (o.tag) {
              case 3:
                if (o = o.stateNode, o.current.memoizedState.isDehydrated) {
                  var f = Ri(o.pendingLanes);
                  if (f !== 0) {
                    var p = o;
                    for (p.pendingLanes |= 2, p.entangledLanes |= 2; f; ) {
                      var S = 1 << 31 - Ue(f);
                      p.entanglements[1] |= S, f &= ~S;
                    }
                    Cn(o), (Ot & 6) === 0 && (Ro = Ne() + 500, Zl(0));
                  }
                }
                break;
              case 31:
              case 13:
                p = Ui(o, 2), p !== null && we(p, o, 2), No(), sf(o, 2);
            }
          if (o = uf(i), o === null && Yc(
            t,
            e,
            i,
            Zo,
            n
          ), o === s) break;
          s = o;
        }
        s !== null && i.stopPropagation();
      } else
        Yc(
          t,
          e,
          i,
          null,
          n
        );
    }
  }
  function uf(t) {
    return t = Ku(t), rf(t);
  }
  var Zo = null;
  function rf(t) {
    if (Zo = null, t = wi(t), t !== null) {
      var e = h(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (t = d(e), t !== null) return t;
          t = null;
        } else if (n === 31) {
          if (t = m(e), t !== null) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return Zo = t, null;
  }
  function ag(t) {
    switch (t) {
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
      case "fullscreenerror":
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
      case "resize":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Pb()) {
          case Xd:
            return 2;
          case Qd:
            return 8;
          case As:
          case Fb:
            return 32;
          case Zd:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var cf = !1, bi = null, Si = null, Ti = null, $l = /* @__PURE__ */ new Map(), ts = /* @__PURE__ */ new Map(), Ei = [], LT = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function lg(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        bi = null;
        break;
      case "dragenter":
      case "dragleave":
        Si = null;
        break;
      case "mouseover":
      case "mouseout":
        Ti = null;
        break;
      case "pointerover":
      case "pointerout":
        $l.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ts.delete(e.pointerId);
    }
  }
  function es(t, e, n, i, s, o) {
    return t === null || t.nativeEvent !== o ? (t = {
      blockedOn: e,
      domEventName: n,
      eventSystemFlags: i,
      nativeEvent: o,
      targetContainers: [s]
    }, e !== null && (e = ca(e), e !== null && ng(e)), t) : (t.eventSystemFlags |= i, e = t.targetContainers, s !== null && e.indexOf(s) === -1 && e.push(s), t);
  }
  function jT(t, e, n, i, s) {
    switch (e) {
      case "focusin":
        return bi = es(
          bi,
          t,
          e,
          n,
          i,
          s
        ), !0;
      case "dragenter":
        return Si = es(
          Si,
          t,
          e,
          n,
          i,
          s
        ), !0;
      case "mouseover":
        return Ti = es(
          Ti,
          t,
          e,
          n,
          i,
          s
        ), !0;
      case "pointerover":
        var o = s.pointerId;
        return $l.set(
          o,
          es(
            $l.get(o) || null,
            t,
            e,
            n,
            i,
            s
          )
        ), !0;
      case "gotpointercapture":
        return o = s.pointerId, ts.set(
          o,
          es(
            ts.get(o) || null,
            t,
            e,
            n,
            i,
            s
          )
        ), !0;
    }
    return !1;
  }
  function sg(t) {
    var e = wi(t.target);
    if (e !== null) {
      var n = h(e);
      if (n !== null) {
        if (e = n.tag, e === 13) {
          if (e = d(n), e !== null) {
            t.blockedOn = e, Wd(t.priority, function() {
              ig(n);
            });
            return;
          }
        } else if (e === 31) {
          if (e = m(n), e !== null) {
            t.blockedOn = e, Wd(t.priority, function() {
              ig(n);
            });
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Ko(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = uf(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var i = new n.constructor(
          n.type,
          n
        );
        Zu = i, n.target.dispatchEvent(i), Zu = null;
      } else
        return e = ca(n), e !== null && ng(e), t.blockedOn = n, !1;
      e.shift();
    }
    return !0;
  }
  function og(t, e, n) {
    Ko(t) && n.delete(e);
  }
  function HT() {
    cf = !1, bi !== null && Ko(bi) && (bi = null), Si !== null && Ko(Si) && (Si = null), Ti !== null && Ko(Ti) && (Ti = null), $l.forEach(og), ts.forEach(og);
  }
  function ko(t, e) {
    t.blockedOn === e && (t.blockedOn = null, cf || (cf = !0, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      HT
    )));
  }
  var Jo = null;
  function ug(t) {
    Jo !== t && (Jo = t, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      function() {
        Jo === t && (Jo = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e], i = t[e + 1], s = t[e + 2];
          if (typeof i != "function") {
            if (rf(i || n) === null)
              continue;
            break;
          }
          var o = ca(n);
          o !== null && (t.splice(e, 3), e -= 3, Qr(
            o,
            {
              pending: !0,
              data: s,
              method: n.method,
              action: i
            },
            i,
            s
          ));
        }
      }
    ));
  }
  function Ia(t) {
    function e(S) {
      return ko(S, t);
    }
    bi !== null && ko(bi, t), Si !== null && ko(Si, t), Ti !== null && ko(Ti, t), $l.forEach(e), ts.forEach(e);
    for (var n = 0; n < Ei.length; n++) {
      var i = Ei[n];
      i.blockedOn === t && (i.blockedOn = null);
    }
    for (; 0 < Ei.length && (n = Ei[0], n.blockedOn === null); )
      sg(n), n.blockedOn === null && Ei.shift();
    if (n = (t.ownerDocument || t).$$reactFormReplay, n != null)
      for (i = 0; i < n.length; i += 3) {
        var s = n[i], o = n[i + 1], f = s[Me] || null;
        if (typeof o == "function")
          f || ug(n);
        else if (f) {
          var p = null;
          if (o && o.hasAttribute("formAction")) {
            if (s = o, f = o[Me] || null)
              p = f.formAction;
            else if (rf(s) !== null) continue;
          } else p = f.action;
          typeof p == "function" ? n[i + 1] = p : (n.splice(i, 3), i -= 3), ug(n);
        }
      }
  }
  function rg() {
    function t(o) {
      o.canIntercept && o.info === "react-transition" && o.intercept({
        handler: function() {
          return new Promise(function(f) {
            return s = f;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function e() {
      s !== null && (s(), s = null), i || setTimeout(n, 20);
    }
    function n() {
      if (!i && !navigation.transition) {
        var o = navigation.currentEntry;
        o && o.url != null && navigation.navigate(o.url, {
          state: o.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var i = !1, s = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(n, 100), function() {
        i = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), s !== null && (s(), s = null);
      };
    }
  }
  function ff(t) {
    this._internalRoot = t;
  }
  Po.prototype.render = ff.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(u(409));
    var n = e.current, i = qe();
    tg(n, i, t, e, null, null);
  }, Po.prototype.unmount = ff.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      tg(t.current, 2, null, t, null, null), No(), e[ra] = null;
    }
  };
  function Po(t) {
    this._internalRoot = t;
  }
  Po.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = Id();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Ei.length && e !== 0 && e < Ei[n].priority; n++) ;
      Ei.splice(n, 0, t), n === 0 && sg(t);
    }
  };
  var cg = l.version;
  if (cg !== "19.3.1")
    throw Error(
      u(
        527,
        cg,
        "19.3.1"
      )
    );
  rt.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(u(188)) : (t = Object.keys(t).join(","), Error(u(268, t)));
    return t = v(e), t = t !== null ? g(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var GT = {
    bundleType: 0,
    version: "19.3.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: $,
    reconcilerVersion: "19.3.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Fo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Fo.isDisabled && Fo.supportsFiber)
      try {
        rl = Fo.inject(
          GT
        ), Ve = Fo;
      } catch {
      }
  }
  return is.createRoot = function(t, e) {
    if (!c(t)) throw Error(u(299));
    var n = !1, i = "", s = $m, o = tp, f = ep;
    return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (i = e.identifierPrefix), e.onUncaughtError !== void 0 && (s = e.onUncaughtError), e.onCaughtError !== void 0 && (o = e.onCaughtError), e.onRecoverableError !== void 0 && (f = e.onRecoverableError)), e = Wy(
      t,
      1,
      !1,
      null,
      null,
      n,
      i,
      null,
      s,
      o,
      f,
      rg
    ), t[ra] = e.current, Gc(t), new ff(e);
  }, is.hydrateRoot = function(t, e, n) {
    if (!c(t)) throw Error(u(299));
    var i = !1, s = "", o = $m, f = tp, p = ep, S = null;
    return n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onUncaughtError !== void 0 && (o = n.onUncaughtError), n.onCaughtError !== void 0 && (f = n.onCaughtError), n.onRecoverableError !== void 0 && (p = n.onRecoverableError), n.formState !== void 0 && (S = n.formState)), e = Wy(
      t,
      1,
      !0,
      e,
      n ?? null,
      i,
      s,
      S,
      o,
      f,
      p,
      rg
    ), e.context = $y(null), n = e.current, i = qe(), i = Hu(i), s = si(i), s.callback = null, oi(n, s, i), n = i, e.current.lanes = n, fl(e, n), Cn(e), t[ra] = e.current, Gc(t), new Po(e);
  }, is.version = "19.3.1", is;
}
var Sg;
function FT() {
  if (Sg) return mf.exports;
  Sg = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (l) {
        console.error(l);
      }
  }
  return a(), mf.exports = PT(), mf.exports;
}
var ps = FT();
const cd = K.createContext({});
function fd(a) {
  const l = K.useRef(null);
  return l.current === null && (l.current = a()), l.current;
}
const IT = typeof window < "u", dd = IT ? K.useLayoutEffect : K.useEffect, xu = /* @__PURE__ */ K.createContext(null);
function hd(a, l) {
  a.indexOf(l) === -1 && a.push(l);
}
function hu(a, l) {
  const r = a.indexOf(l);
  r > -1 && a.splice(r, 1);
}
const Rn = (a, l, r) => r > l ? l : r < a ? a : r;
let Cu = () => {
};
const Mi = {}, K0 = (a) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a), k0 = (a) => typeof a == "object" && a !== null, J0 = (a) => /^0[^.\s]+$/u.test(a);
// @__NO_SIDE_EFFECTS__
function P0(a) {
  let l;
  return () => (l === void 0 && (l = a()), l);
}
const en = /* @__NO_SIDE_EFFECTS__ */ (a) => a, ys = (...a) => a.reduce((l, r) => (u) => r(l(u))), fs = /* @__NO_SIDE_EFFECTS__ */ (a, l, r) => {
  const u = l - a;
  return u ? (r - a) / u : 1;
};
class md {
  constructor() {
    this.subscriptions = [];
  }
  add(l) {
    return hd(this.subscriptions, l), () => hu(this.subscriptions, l);
  }
  notify(l, r, u) {
    const c = this.subscriptions.length;
    if (c)
      if (c === 1)
        this.subscriptions[0](l, r, u);
      else
        for (let h = 0; h < c; h++) {
          const d = this.subscriptions[h];
          d && d(l, r, u);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Qe = /* @__NO_SIDE_EFFECTS__ */ (a) => a * 1e3, tn = /* @__NO_SIDE_EFFECTS__ */ (a) => a / 1e3, F0 = /* @__NO_SIDE_EFFECTS__ */ (a, l) => l ? a * (1e3 / l) : 0, I0 = (a, l, r) => (((1 - 3 * r + 3 * l) * a + (3 * r - 6 * l)) * a + 3 * l) * a, WT = 1e-7, $T = 12;
function tE(a, l, r, u, c) {
  let h, d, m = 0;
  do
    d = l + (r - l) / 2, h = I0(d, u, c) - a, h > 0 ? r = d : l = d;
  while (Math.abs(h) > WT && ++m < $T);
  return d;
}
// @__NO_SIDE_EFFECTS__
function gs(a, l, r, u) {
  if (a === l && r === u)
    return en;
  const c = (h) => tE(h, 0, 1, a, r);
  return (h) => h === 0 || h === 1 ? h : I0(c(h), l, u);
}
const W0 = /* @__NO_SIDE_EFFECTS__ */ (a) => (l) => l <= 0.5 ? a(2 * l) / 2 : (2 - a(2 * (1 - l))) / 2, $0 = /* @__NO_SIDE_EFFECTS__ */ (a) => (l) => 1 - a(1 - l), tv = /* @__PURE__ */ gs(0.33, 1.53, 0.69, 0.99), pd = /* @__PURE__ */ $0(tv), ev = /* @__PURE__ */ W0(pd), nv = (a) => a >= 1 ? 1 : (a *= 2) < 1 ? 0.5 * pd(a) : 0.5 * (2 - Math.pow(2, -10 * (a - 1))), yd = (a) => 1 - Math.sin(Math.acos(a)), iv = /* @__PURE__ */ $0(yd), av = /* @__PURE__ */ W0(yd), eE = /* @__PURE__ */ gs(0.42, 0, 1, 1), nE = /* @__PURE__ */ gs(0, 0, 0.58, 1), lv = /* @__PURE__ */ gs(0.42, 0, 0.58, 1), iE = /* @__NO_SIDE_EFFECTS__ */ (a) => Array.isArray(a) && typeof a[0] != "number", sv = /* @__NO_SIDE_EFFECTS__ */ (a) => Array.isArray(a) && typeof a[0] == "number", aE = {
  linear: en,
  easeIn: eE,
  easeInOut: lv,
  easeOut: nE,
  circIn: yd,
  circInOut: av,
  circOut: iv,
  backIn: pd,
  backInOut: ev,
  backOut: tv,
  anticipate: nv
}, lE = (a) => typeof a == "string", Tg = (a) => {
  if (/* @__PURE__ */ sv(a)) {
    Cu(a.length === 4);
    const [l, r, u, c] = a;
    return /* @__PURE__ */ gs(l, r, u, c);
  } else if (lE(a))
    return aE[a];
  return a;
}, Io = [
  "setup",
  // Compute
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "preUpdate",
  // Compute
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
];
function sE(a) {
  let l = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), u = !1, c = !1;
  const h = /* @__PURE__ */ new WeakSet();
  let d = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function m(v) {
    h.has(v) && (b.schedule(v), a()), v(d);
  }
  const b = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (v, g = !1, y = !1) => {
      const _ = y && u ? l : r;
      return g && h.add(v), _.add(v), v;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (v) => {
      r.delete(v), h.delete(v);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (v) => {
      if (d = v, u) {
        c = !0;
        return;
      }
      u = !0;
      const g = l;
      l = r, r = g, l.forEach(m), l.clear(), u = !1, c && (c = !1, b.process(v));
    }
  };
  return b;
}
const oE = 40;
function ov(a, l) {
  let r = !1, u = !0;
  const c = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, h = () => r = !0, d = Io.reduce((q, X) => (q[X] = sE(h), q), {}), { setup: m, read: b, resolveKeyframes: v, preUpdate: g, update: y, preRender: T, render: _, postRender: R } = d, V = () => {
    const q = Mi.useManualTiming, X = q ? c.timestamp : performance.now();
    r = !1, q || (c.delta = u ? 1e3 / 60 : Math.max(Math.min(X - c.timestamp, oE), 1)), c.timestamp = X, c.isProcessing = !0, m.process(c), b.process(c), v.process(c), g.process(c), y.process(c), T.process(c), _.process(c), R.process(c), c.isProcessing = !1, r && l && (u = !1, a(V));
  }, N = () => {
    r = !0, u = !0, c.isProcessing || a(V);
  };
  return { schedule: Io.reduce((q, X) => {
    const nt = d[X];
    return q[X] = (ot, Q = !1, w = !1) => (r || N(), nt.schedule(ot, Q, w)), q;
  }, {}), cancel: (q) => {
    for (let X = 0; X < Io.length; X++)
      d[Io[X]].cancel(q);
  }, state: c, steps: d };
}
const { schedule: Lt, cancel: Di, state: ye, steps: vf } = /* @__PURE__ */ ov(typeof requestAnimationFrame < "u" ? requestAnimationFrame : en, !0);
let au;
function uE() {
  au = void 0;
}
const Ae = {
  now: () => (au === void 0 && Ae.set(ye.isProcessing || Mi.useManualTiming ? ye.timestamp : performance.now()), au),
  set: (a) => {
    au = a, queueMicrotask(uE);
  }
}, uv = (a) => (l) => typeof l == "string" && l.startsWith(a), rv = /* @__PURE__ */ uv("--"), rE = /* @__PURE__ */ uv("var(--"), gd = (a) => rE(a) ? cE.test(a.split("/*")[0].trim()) : !1, cE = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Eg(a) {
  return typeof a != "string" ? !1 : a.split("/*")[0].includes("var(--");
}
const ll = {
  test: (a) => typeof a == "number",
  parse: parseFloat,
  transform: (a) => a
}, ds = {
  ...ll,
  transform: (a) => Rn(0, 1, a)
}, Wo = {
  ...ll,
  default: 1
}, os = (a) => Math.round(a * 1e5) / 1e5, vd = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function fE(a) {
  return a == null;
}
const dE = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, bd = (a, l) => (r) => !!(typeof r == "string" && dE.test(r) && r.startsWith(a) || l && !fE(r) && Object.prototype.hasOwnProperty.call(r, l)), cv = (a, l, r) => (u) => {
  if (typeof u != "string")
    return u;
  const [c, h, d, m] = u.match(vd);
  return {
    [a]: parseFloat(c),
    [l]: parseFloat(h),
    [r]: parseFloat(d),
    alpha: m !== void 0 ? parseFloat(m) : 1
  };
}, hE = (a) => Rn(0, 255, a), bf = {
  ...ll,
  transform: (a) => Math.round(hE(a))
}, na = {
  test: /* @__PURE__ */ bd("rgb", "red"),
  parse: /* @__PURE__ */ cv("red", "green", "blue"),
  transform: ({ red: a, green: l, blue: r, alpha: u = 1 }) => "rgba(" + bf.transform(a) + ", " + bf.transform(l) + ", " + bf.transform(r) + ", " + os(ds.transform(u)) + ")"
};
function mE(a) {
  let l = "", r = "", u = "", c = "";
  return a.length > 5 ? (l = a.substring(1, 3), r = a.substring(3, 5), u = a.substring(5, 7), c = a.substring(7, 9)) : (l = a.substring(1, 2), r = a.substring(2, 3), u = a.substring(3, 4), c = a.substring(4, 5), l += l, r += r, u += u, c += c), {
    red: parseInt(l, 16),
    green: parseInt(r, 16),
    blue: parseInt(u, 16),
    alpha: c ? parseInt(c, 16) / 255 : 1
  };
}
const Lf = {
  test: /* @__PURE__ */ bd("#"),
  parse: mE,
  transform: na.transform
}, vs = /* @__NO_SIDE_EFFECTS__ */ (a) => ({
  test: (l) => typeof l == "string" && l.endsWith(a) && l.split(" ").length === 1,
  parse: parseFloat,
  transform: (l) => `${l}${a}`
}), kn = /* @__PURE__ */ vs("deg"), On = /* @__PURE__ */ vs("%"), et = /* @__PURE__ */ vs("px"), pE = /* @__PURE__ */ vs("vh"), yE = /* @__PURE__ */ vs("vw"), Ag = {
  ...On,
  parse: (a) => On.parse(a) / 100,
  transform: (a) => On.transform(a * 100)
}, $a = {
  test: /* @__PURE__ */ bd("hsl", "hue"),
  parse: /* @__PURE__ */ cv("hue", "saturation", "lightness"),
  transform: ({ hue: a, saturation: l, lightness: r, alpha: u = 1 }) => "hsla(" + Math.round(a) + ", " + On.transform(os(l)) + ", " + On.transform(os(r)) + ", " + os(ds.transform(u)) + ")"
}, te = {
  test: (a) => na.test(a) || Lf.test(a) || $a.test(a),
  parse: (a) => na.test(a) ? na.parse(a) : $a.test(a) ? $a.parse(a) : Lf.parse(a),
  transform: (a) => typeof a == "string" ? a : a.hasOwnProperty("red") ? na.transform(a) : $a.transform(a),
  getAnimatableNone: (a) => {
    const l = te.parse(a);
    return l.alpha = 0, te.transform(l);
  }
}, gE = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function vE(a) {
  return isNaN(a) && typeof a == "string" && (a.match(vd)?.length || 0) + (a.match(gE)?.length || 0) > 0;
}
const fv = "number", dv = "color", bE = "var", SE = "var(", xg = "${}", TE = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function il(a) {
  const l = a.toString(), r = [], u = {
    color: [],
    number: [],
    var: []
  }, c = [];
  let h = 0;
  const m = l.replace(TE, (b) => (te.test(b) ? (u.color.push(h), c.push(dv), r.push(te.parse(b))) : b.startsWith(SE) ? (u.var.push(h), c.push(bE), r.push(b)) : (u.number.push(h), c.push(fv), r.push(parseFloat(b))), ++h, xg)).split(xg);
  return { values: r, split: m, indexes: u, types: c };
}
function EE(a) {
  return il(a).values;
}
function hv({ split: a, types: l }) {
  const r = a.length;
  return (u) => {
    let c = "";
    for (let h = 0; h < r; h++)
      if (c += a[h], u[h] !== void 0) {
        const d = l[h];
        d === fv ? c += os(u[h]) : d === dv ? c += te.transform(u[h]) : c += u[h];
      }
    return c;
  };
}
function AE(a) {
  return hv(il(a));
}
const xE = (a) => typeof a == "number" ? 0 : te.test(a) ? te.getAnimatableNone(a) : a, CE = (a, l) => typeof a == "number" ? l?.trim().endsWith("/") ? a : 0 : xE(a);
function ME(a) {
  const l = il(a);
  return hv(l)(l.values.map((u, c) => CE(u, l.split[c])));
}
const fn = {
  test: vE,
  parse: EE,
  createTransformer: AE,
  getAnimatableNone: ME
};
function Sf(a, l, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? a + (l - a) * 6 * r : r < 1 / 2 ? l : r < 2 / 3 ? a + (l - a) * (2 / 3 - r) * 6 : a;
}
function DE({ hue: a, saturation: l, lightness: r, alpha: u }) {
  a /= 360, l /= 100, r /= 100;
  let c = 0, h = 0, d = 0;
  if (!l)
    c = h = d = r;
  else {
    const m = r < 0.5 ? r * (1 + l) : r + l - r * l, b = 2 * r - m;
    c = Sf(b, m, a + 1 / 3), h = Sf(b, m, a), d = Sf(b, m, a - 1 / 3);
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(h * 255),
    blue: Math.round(d * 255),
    alpha: u
  };
}
function mu(a, l) {
  return (r) => r > 0 ? l : a;
}
const Bt = (a, l, r) => a + (l - a) * r, Tf = (a, l, r) => {
  const u = a * a, c = r * (l * l - u) + u;
  return c < 0 ? 0 : Math.sqrt(c);
}, zE = [Lf, na, $a], OE = (a) => zE.find((l) => l.test(a));
function Cg(a) {
  const l = OE(a);
  if (!l)
    return !1;
  let r = l.parse(a);
  return l === $a && (r = DE(r)), r;
}
const Mg = (a, l) => {
  const r = Cg(a), u = Cg(l);
  if (!r || !u)
    return mu(a, l);
  const c = { ...r };
  return (h) => (c.red = Tf(r.red, u.red, h), c.green = Tf(r.green, u.green, h), c.blue = Tf(r.blue, u.blue, h), c.alpha = Bt(r.alpha, u.alpha, h), na.transform(c));
}, jf = /* @__PURE__ */ new Set(["none", "hidden"]);
function RE(a, l) {
  return jf.has(a) ? (r) => r <= 0 ? a : l : (r) => r >= 1 ? l : a;
}
function wE(a, l) {
  return (r) => Bt(a, l, r);
}
function Sd(a) {
  return typeof a == "number" ? wE : typeof a == "string" ? gd(a) ? mu : te.test(a) ? Mg : VE : Array.isArray(a) ? mv : typeof a == "object" ? te.test(a) ? Mg : _E : mu;
}
function mv(a, l) {
  const r = [...a], u = r.length, c = a.map((h, d) => Sd(h)(h, l[d]));
  return (h) => {
    for (let d = 0; d < u; d++)
      r[d] = c[d](h);
    return r;
  };
}
function _E(a, l) {
  const r = { ...a, ...l }, u = {};
  for (const c in r)
    a[c] !== void 0 && l[c] !== void 0 && (u[c] = Sd(a[c])(a[c], l[c]));
  return (c) => {
    for (const h in u)
      r[h] = u[h](c);
    return r;
  };
}
function NE(a, l) {
  const r = [], u = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < l.values.length; c++) {
    const h = l.types[c], d = a.indexes[h][u[h]], m = a.values[d] ?? 0;
    r[c] = m, u[h]++;
  }
  return r;
}
const VE = (a, l) => {
  const r = fn.createTransformer(l), u = il(a), c = il(l);
  return u.indexes.var.length === c.indexes.var.length && u.indexes.color.length === c.indexes.color.length && u.indexes.number.length >= c.indexes.number.length ? jf.has(a) && !c.values.length || jf.has(l) && !u.values.length ? RE(a, l) : ys(mv(NE(u, c), c.values), r) : mu(a, l);
};
function pv(a, l, r) {
  return typeof a == "number" && typeof l == "number" && typeof r == "number" ? Bt(a, l, r) : Sd(a)(a, l);
}
const UE = (a) => {
  const l = ({ timestamp: r }) => a(r);
  return {
    start: (r = !0) => Lt.update(l, r),
    stop: () => Di(l),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => ye.isProcessing ? ye.timestamp : Ae.now()
  };
}, yv = (a, l, r = 10) => {
  let u = "";
  const c = Math.max(Math.round(l / r), 2);
  for (let h = 0; h < c; h++)
    u += Math.round(a(h / (c - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${u.substring(0, u.length - 2)})`;
}, pu = 2e4;
function Td(a) {
  let l = 0;
  const r = 50;
  let u = a.next(l);
  for (; !u.done && l < pu; )
    l += r, u = a.next(l);
  return l >= pu ? 1 / 0 : l;
}
function BE(a, l = 100, r) {
  const u = r({ ...a, keyframes: [0, l] }), c = Math.min(Td(u), pu);
  return {
    type: "keyframes",
    ease: (h) => u.next(c * h).value / l,
    duration: /* @__PURE__ */ tn(c)
  };
}
const Kt = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
};
function Hf(a, l) {
  return a * Math.sqrt(1 - l * l);
}
const LE = 12;
function jE(a, l, r) {
  let u = r;
  for (let c = 1; c < LE; c++)
    u = u - a(u) / l(u);
  return u;
}
const Ef = 1e-3;
function HE({ duration: a = Kt.duration, bounce: l = Kt.bounce, velocity: r = Kt.velocity, mass: u = Kt.mass }) {
  let c, h, d = 1 - l;
  d = Rn(Kt.minDamping, Kt.maxDamping, d), a = Rn(Kt.minDuration, Kt.maxDuration, /* @__PURE__ */ tn(a)), d < 1 ? (c = (v) => {
    const g = v * d, y = g * a, T = g - r, _ = Hf(v, d), R = Math.exp(-y);
    return Ef - T / _ * R;
  }, h = (v) => {
    const y = v * d * a, T = y * r + r, _ = Math.pow(d, 2) * Math.pow(v, 2) * a, R = Math.exp(-y), V = Hf(Math.pow(v, 2), d);
    return (-c(v) + Ef > 0 ? -1 : 1) * ((T - _) * R) / V;
  }) : (c = (v) => {
    const g = Math.exp(-v * a), y = (v - r) * a + 1;
    return -Ef + g * y;
  }, h = (v) => {
    const g = Math.exp(-v * a), y = (r - v) * (a * a);
    return g * y;
  });
  const m = 5 / a, b = jE(c, h, m);
  if (a = /* @__PURE__ */ Qe(a), isNaN(b))
    return {
      stiffness: Kt.stiffness,
      damping: Kt.damping,
      duration: a
    };
  {
    const v = Math.pow(b, 2) * u;
    return {
      stiffness: v,
      damping: d * 2 * Math.sqrt(u * v),
      duration: a
    };
  }
}
const GE = ["duration", "bounce"], YE = ["stiffness", "damping", "mass"];
function Dg(a, l) {
  return l.some((r) => a[r] !== void 0);
}
function qE(a) {
  let l = {
    velocity: Kt.velocity,
    stiffness: Kt.stiffness,
    damping: Kt.damping,
    mass: Kt.mass,
    isResolvedFromDuration: !1,
    ...a
  };
  if (!Dg(a, YE) && Dg(a, GE))
    if (l.velocity = 0, a.visualDuration) {
      const r = a.visualDuration, u = 2 * Math.PI / (r * 1.2), c = u * u, h = 2 * Rn(0.05, 1, 1 - (a.bounce || 0)) * Math.sqrt(c);
      l = {
        ...l,
        mass: Kt.mass,
        stiffness: c,
        damping: h
      };
    } else {
      const r = HE({ ...a, velocity: 0 });
      l = {
        ...l,
        ...r,
        mass: Kt.mass
      }, l.isResolvedFromDuration = !0;
    }
  return l;
}
function yu(a = Kt.visualDuration, l = Kt.bounce) {
  const r = typeof a != "object" ? {
    visualDuration: a,
    keyframes: [0, 1],
    bounce: l
  } : a;
  let { restSpeed: u, restDelta: c } = r;
  const h = r.keyframes[0], d = r.keyframes[r.keyframes.length - 1], m = { done: !1, value: h }, { stiffness: b, damping: v, mass: g, duration: y, velocity: T, isResolvedFromDuration: _ } = qE({
    ...r,
    velocity: -/* @__PURE__ */ tn(r.velocity || 0)
  }), R = T || 0, V = v / (2 * Math.sqrt(b * g)), N = d - h, j = /* @__PURE__ */ tn(Math.sqrt(b / g)), H = Math.abs(N) < 5;
  u || (u = H ? Kt.restSpeed.granular : Kt.restSpeed.default), c || (c = H ? Kt.restDelta.granular : Kt.restDelta.default);
  let q, X, nt, ot, Q, w;
  if (V < 1)
    nt = Hf(j, V), ot = (R + V * j * N) / nt, q = (I) => {
      const pt = Math.exp(-V * j * I);
      return d - pt * (ot * Math.sin(nt * I) + N * Math.cos(nt * I));
    }, Q = V * j * ot + N * nt, w = V * j * N - ot * nt, X = (I) => Math.exp(-V * j * I) * (Q * Math.sin(nt * I) + w * Math.cos(nt * I));
  else if (V === 1) {
    q = (pt) => d - Math.exp(-j * pt) * (N + (R + j * N) * pt);
    const I = R + j * N;
    X = (pt) => Math.exp(-j * pt) * (j * I * pt - R);
  } else {
    const I = j * Math.sqrt(V * V - 1);
    q = (Xt) => {
      const Ct = Math.exp(-V * j * Xt), G = Math.min(I * Xt, 300);
      return d - Ct * ((R + V * j * N) * Math.sinh(G) + I * N * Math.cosh(G)) / I;
    };
    const pt = (R + V * j * N) / I, Tt = V * j * pt - N * I, kt = V * j * N - pt * I;
    X = (Xt) => {
      const Ct = Math.exp(-V * j * Xt), G = Math.min(I * Xt, 300);
      return Ct * (Tt * Math.sinh(G) + kt * Math.cosh(G));
    };
  }
  const it = {
    calculatedDuration: _ && y || null,
    velocity: (I) => /* @__PURE__ */ Qe(X(I)),
    next: (I) => {
      if (!_ && V < 1) {
        const Tt = Math.exp(-V * j * I), kt = Math.sin(nt * I), Xt = Math.cos(nt * I), Ct = d - Tt * (ot * kt + N * Xt), G = /* @__PURE__ */ Qe(Tt * (Q * kt + w * Xt));
        return m.done = Math.abs(G) <= u && Math.abs(d - Ct) <= c, m.value = m.done ? d : Ct, m;
      }
      const pt = q(I);
      if (_)
        m.done = I >= y;
      else {
        const Tt = /* @__PURE__ */ Qe(X(I));
        m.done = Math.abs(Tt) <= u && Math.abs(d - pt) <= c;
      }
      return m.value = m.done ? d : pt, m;
    },
    toString: () => {
      const I = Math.min(Td(it), pu), pt = yv((Tt) => it.next(I * Tt).value, I, 30);
      return I + "ms " + pt;
    },
    toTransition: () => {
    }
  };
  return it;
}
yu.applyToOptions = (a) => {
  const l = BE(a, 100, yu);
  return a.ease = l.ease, a.duration = /* @__PURE__ */ Qe(l.duration), a.type = "keyframes", a;
};
const XE = 5;
function gv(a, l, r) {
  const u = Math.max(l - XE, 0);
  return /* @__PURE__ */ F0(r - a(u), l - u);
}
function Gf({ keyframes: a, velocity: l = 0, power: r = 0.8, timeConstant: u = 325, bounceDamping: c = 10, bounceStiffness: h = 500, modifyTarget: d, min: m, max: b, restDelta: v = 0.5, restSpeed: g }) {
  const y = a[0], T = {
    done: !1,
    value: y
  }, _ = (w) => m !== void 0 && w < m || b !== void 0 && w > b, R = (w) => m === void 0 ? b : b === void 0 || Math.abs(m - w) < Math.abs(b - w) ? m : b;
  let V = r * l;
  const N = y + V, j = d === void 0 ? N : d(N);
  j !== N && (V = j - y);
  const H = (w) => -V * Math.exp(-w / u), q = (w) => j + H(w), X = (w) => {
    const it = H(w), I = q(w);
    T.done = Math.abs(it) <= v, T.value = T.done ? j : I;
  };
  let nt, ot;
  const Q = (w) => {
    _(T.value) && (nt = w, ot = yu({
      keyframes: [T.value, R(T.value)],
      velocity: gv(q, w, T.value),
      // TODO: This should be passing * 1000
      damping: c,
      stiffness: h,
      restDelta: v,
      restSpeed: g
    }));
  };
  return Q(0), {
    calculatedDuration: null,
    next: (w) => {
      let it = !1;
      return !ot && nt === void 0 && (it = !0, X(w), Q(w)), nt !== void 0 && w >= nt ? ot.next(w - nt) : (!it && X(w), T);
    }
  };
}
function QE(a, l, r) {
  const u = [], c = r || Mi.mix || pv, h = a.length - 1;
  for (let d = 0; d < h; d++) {
    let m = c(a[d], a[d + 1]);
    if (l) {
      const b = Array.isArray(l) ? l[d] || en : l;
      m = ys(b, m);
    }
    u.push(m);
  }
  return u;
}
function ZE(a, l, { clamp: r = !0, ease: u, mixer: c } = {}) {
  const h = a.length;
  if (Cu(h === l.length), h === 1)
    return () => l[0];
  if (h === 2 && l[0] === l[1])
    return () => l[1];
  const d = a[0] === a[1];
  a[0] > a[h - 1] && (a = [...a].reverse(), l = [...l].reverse());
  const m = QE(l, u, c), b = m.length, v = (g) => {
    if (d && g < a[0])
      return l[0];
    let y = 0;
    if (b > 1)
      for (; y < a.length - 2 && !(g < a[y + 1]); y++)
        ;
    const T = /* @__PURE__ */ fs(a[y], a[y + 1], g);
    return m[y](T);
  };
  return r ? (g) => v(Rn(a[0], a[h - 1], g)) : v;
}
function KE(a, l) {
  const r = a[a.length - 1];
  for (let u = 1; u <= l; u++) {
    const c = /* @__PURE__ */ fs(0, l, u);
    a.push(Bt(r, 1, c));
  }
}
function kE(a) {
  const l = [0];
  return KE(l, a.length - 1), l;
}
function JE(a, l) {
  return a.map((r) => r * l);
}
function PE(a, l) {
  return a.map(() => l || lv).splice(0, a.length - 1);
}
function us({ duration: a = 300, keyframes: l, times: r, ease: u = "easeInOut" }) {
  const c = /* @__PURE__ */ iE(u) ? u.map(Tg) : Tg(u), h = {
    done: !1,
    value: l[0]
  }, d = JE(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    r && r.length === l.length ? r : kE(l),
    a
  ), m = ZE(d, l, {
    ease: Array.isArray(c) ? c : PE(l, c)
  });
  return {
    calculatedDuration: a,
    next: (b) => (h.value = m(b), h.done = b >= a, h)
  };
}
const FE = (a) => a !== null;
function Mu(a, { repeat: l, repeatType: r = "loop" }, u, c = 1) {
  const h = a.filter(FE), m = c < 0 || l && r !== "loop" && l % 2 === 1 ? 0 : h.length - 1;
  return !m || u === void 0 ? h[m] : u;
}
const IE = {
  decay: Gf,
  inertia: Gf,
  tween: us,
  keyframes: us,
  spring: yu
};
function vv(a) {
  typeof a.type == "string" && (a.type = IE[a.type]);
}
class Ed {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((l) => {
      this.resolve = l;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  /**
   * Allows the animation to be awaited.
   *
   * @deprecated Use `finished` instead.
   */
  then(l, r) {
    return this.finished.then(l, r);
  }
}
const WE = (a) => a / 100;
class gu extends Ed {
  constructor(l) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
      done: !1,
      value: void 0
    }, this.stop = () => {
      const { motionValue: r } = this.options;
      r && r.updatedAt !== Ae.now() && this.tick(Ae.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
    }, this.options = l, this.initAnimation(), this.play(), l.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: l } = this;
    vv(l);
    const { type: r = us, repeat: u = 0, repeatDelay: c = 0, repeatType: h, velocity: d = 0 } = l;
    let { keyframes: m } = l;
    const b = r || us;
    b !== us && typeof m[0] != "number" && (this.mixKeyframes = ys(WE, pv(m[0], m[1])), m = [0, 100]);
    const v = b({ ...l, keyframes: m });
    h === "mirror" && (this.mirroredGenerator = b({
      ...l,
      keyframes: [...m].reverse(),
      velocity: -d
    })), v.calculatedDuration === null && (v.calculatedDuration = Td(v));
    const { calculatedDuration: g } = v;
    this.calculatedDuration = g, this.resolvedDuration = g + c, this.totalDuration = this.resolvedDuration * (u + 1) - c, this.generator = v;
  }
  updateTime(l) {
    const r = Math.round(l - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = r;
  }
  tick(l, r = !1) {
    const { generator: u, totalDuration: c, mixKeyframes: h, mirroredGenerator: d, resolvedDuration: m, calculatedDuration: b } = this;
    if (this.startTime === null)
      return u.next(0);
    const { delay: v = 0, keyframes: g, repeat: y, repeatType: T, repeatDelay: _, type: R, onUpdate: V, finalKeyframe: N } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, l) : this.speed < 0 && (this.startTime = Math.min(l - c / this.speed, this.startTime)), r ? this.currentTime = l : this.updateTime(l);
    const j = this.currentTime - v * (this.playbackSpeed >= 0 ? 1 : -1), H = this.playbackSpeed >= 0 ? j < 0 : j > c;
    this.currentTime = Math.max(j, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
    let q = this.currentTime, X = u;
    if (y) {
      const w = Math.min(this.currentTime, c) / m;
      let it = Math.floor(w), I = w % 1;
      !I && w >= 1 && (I = 1), I === 1 && it--, it = Math.min(it, y + 1), it % 2 && (T === "reverse" ? (I = 1 - I, _ && (I -= _ / m)) : T === "mirror" && (X = d)), q = Rn(0, 1, I) * m;
    }
    let nt;
    H ? (this.delayState.value = g[0], nt = this.delayState) : nt = X.next(q), h && !H && (nt.value = h(nt.value));
    let { done: ot } = nt;
    !H && b !== null && (ot = this.playbackSpeed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const Q = this.holdTime === null && (this.state === "finished" || this.state === "running" && ot);
    return Q && R !== Gf && (nt.value = Mu(g, this.options, N, this.speed)), V && V(nt.value), Q && this.finish(), nt;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(l, r) {
    return this.finished.then(l, r);
  }
  get duration() {
    return /* @__PURE__ */ tn(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: l = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ tn(l);
  }
  get time() {
    return /* @__PURE__ */ tn(this.currentTime);
  }
  set time(l) {
    l = /* @__PURE__ */ Qe(l), this.currentTime = l, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = l : this.driver && (this.startTime = this.driver.now() - l / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = l, this.tick(l));
  }
  /**
   * Returns the generator's velocity at the current time in units/second.
   * Uses the analytical derivative when available (springs), avoiding
   * the MotionValue's frame-dependent velocity estimation.
   */
  getGeneratorVelocity() {
    const l = this.currentTime;
    if (l <= 0)
      return this.options.velocity || 0;
    if (this.generator.velocity)
      return this.generator.velocity(l);
    const r = this.generator.next(l).value;
    return gv((u) => this.generator.next(u).value, l, r);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(l) {
    const r = this.playbackSpeed !== l;
    r && this.driver && this.updateTime(Ae.now()), this.playbackSpeed = l, r && this.driver && (this.time = /* @__PURE__ */ tn(this.currentTime));
  }
  play() {
    if (this.isStopped)
      return;
    const { driver: l = UE, startTime: r } = this.options;
    this.driver || (this.driver = l((c) => this.tick(c))), this.options.onPlay?.();
    const u = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = u) : this.holdTime !== null ? this.startTime = u - this.holdTime : this.startTime || (this.startTime = r ?? u), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(Ae.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
  }
  cancel() {
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(l) {
    return this.startTime = 0, this.tick(l, !0);
  }
  attachTimeline(l) {
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), l.observe(this);
  }
}
function $E(a) {
  for (let l = 1; l < a.length; l++)
    a[l] ?? (a[l] = a[l - 1]);
}
const ia = (a) => a * 180 / Math.PI, Yf = (a) => {
  const l = ia(Math.atan2(a[1], a[0]));
  return qf(l);
}, tA = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (a) => (Math.abs(a[0]) + Math.abs(a[3])) / 2,
  rotate: Yf,
  rotateZ: Yf,
  skewX: (a) => ia(Math.atan(a[1])),
  skewY: (a) => ia(Math.atan(a[2])),
  skew: (a) => (Math.abs(a[1]) + Math.abs(a[2])) / 2
}, qf = (a) => (a = a % 360, a < 0 && (a += 360), a), zg = Yf, Og = (a) => Math.sqrt(a[0] * a[0] + a[1] * a[1]), Rg = (a) => Math.sqrt(a[4] * a[4] + a[5] * a[5]), eA = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: Og,
  scaleY: Rg,
  scale: (a) => (Og(a) + Rg(a)) / 2,
  rotateX: (a) => qf(ia(Math.atan2(a[6], a[5]))),
  rotateY: (a) => qf(ia(Math.atan2(-a[2], a[0]))),
  rotateZ: zg,
  rotate: zg,
  skewX: (a) => ia(Math.atan(a[4])),
  skewY: (a) => ia(Math.atan(a[1])),
  skew: (a) => (Math.abs(a[1]) + Math.abs(a[4])) / 2
};
function Xf(a) {
  return a.includes("scale") ? 1 : 0;
}
function Qf(a, l) {
  if (!a || a === "none")
    return Xf(l);
  const r = a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let u, c;
  if (r)
    u = eA, c = r;
  else {
    const m = a.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    u = tA, c = m;
  }
  if (!c)
    return Xf(l);
  const h = u[l], d = c[1].split(",").map(iA);
  return typeof h == "function" ? h(d) : d[h];
}
const nA = (a, l) => {
  const { transform: r = "none" } = getComputedStyle(a);
  return Qf(r, l);
};
function iA(a) {
  return parseFloat(a.trim());
}
const sl = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], ol = /* @__PURE__ */ new Set([...sl, "pathRotation"]), wg = (a) => a === ll || a === et, aA = /* @__PURE__ */ new Set(["x", "y", "z"]), lA = sl.filter((a) => !aA.has(a));
function sA(a) {
  const l = [];
  return lA.forEach((r) => {
    const u = a.getValue(r);
    u !== void 0 && (l.push([r, u.get()]), u.set(r.startsWith("scale") ? 1 : 0));
  }), l;
}
const Ci = {
  // Dimensions
  width: ({ x: a }, { paddingLeft: l = "0", paddingRight: r = "0", boxSizing: u }) => {
    const c = a.max - a.min;
    return u === "border-box" ? c : c - parseFloat(l) - parseFloat(r);
  },
  height: ({ y: a }, { paddingTop: l = "0", paddingBottom: r = "0", boxSizing: u }) => {
    const c = a.max - a.min;
    return u === "border-box" ? c : c - parseFloat(l) - parseFloat(r);
  },
  top: (a, { top: l }) => parseFloat(l),
  left: (a, { left: l }) => parseFloat(l),
  bottom: ({ y: a }, { top: l }) => parseFloat(l) + (a.max - a.min),
  right: ({ x: a }, { left: l }) => parseFloat(l) + (a.max - a.min),
  // Transform
  x: (a, { transform: l }) => Qf(l, "x"),
  y: (a, { transform: l }) => Qf(l, "y")
};
Ci.translateX = Ci.x;
Ci.translateY = Ci.y;
const aa = /* @__PURE__ */ new Set();
let Zf = !1, Kf = !1, kf = !1;
function bv() {
  if (Kf) {
    const a = Array.from(aa).filter((u) => u.needsMeasurement), l = new Set(a.map((u) => u.element)), r = /* @__PURE__ */ new Map();
    l.forEach((u) => {
      const c = sA(u);
      c.length && (r.set(u, c), u.render());
    }), a.forEach((u) => u.measureInitialState()), l.forEach((u) => {
      u.render();
      const c = r.get(u);
      c && c.forEach(([h, d]) => {
        u.getValue(h)?.set(d);
      });
    }), a.forEach((u) => u.measureEndState()), a.forEach((u) => {
      u.suspendedScrollY !== void 0 && window.scrollTo(0, u.suspendedScrollY);
    });
  }
  Kf = !1, Zf = !1, aa.forEach((a) => a.complete(kf)), aa.clear();
}
function Sv() {
  aa.forEach((a) => {
    a.readKeyframes(), a.needsMeasurement && (Kf = !0);
  });
}
function oA() {
  kf = !0, Sv(), bv(), kf = !1;
}
class Ad {
  constructor(l, r, u, c, h, d = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...l], this.onComplete = r, this.name = u, this.motionValue = c, this.element = h, this.isAsync = d;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (aa.add(this), Zf || (Zf = !0, Lt.read(Sv), Lt.resolveKeyframes(bv))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, name: r, element: u, motionValue: c } = this;
    if (l[0] === null) {
      const h = c?.get(), d = l[l.length - 1];
      if (h !== void 0)
        l[0] = h;
      else if (u && r) {
        const m = u.readValue(r, d);
        m != null && (l[0] = m);
      }
      l[0] === void 0 && (l[0] = d), c && h === void 0 && c.set(l[0]);
    }
    $E(l);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(l = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, l), aa.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (aa.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const uA = (a) => a.startsWith("--");
function Tv(a, l, r) {
  uA(l) ? a.style.setProperty(l, r) : a.style[l] = r;
}
const rA = {};
function Ev(a, l) {
  const r = /* @__PURE__ */ P0(a);
  return () => rA[l] ?? r();
}
const cA = /* @__PURE__ */ Ev(() => window.ScrollTimeline !== void 0, "scrollTimeline"), Av = /* @__PURE__ */ Ev(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), ss = ([a, l, r, u]) => `cubic-bezier(${a}, ${l}, ${r}, ${u})`, _g = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ ss([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ ss([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ ss([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ ss([0.33, 1.53, 0.69, 0.99])
};
function xv(a, l) {
  if (a)
    return typeof a == "function" ? Av() ? yv(a, l) : "ease-out" : /* @__PURE__ */ sv(a) ? ss(a) : Array.isArray(a) ? a.map((r) => xv(r, l) || _g.easeOut) : _g[a];
}
function fA(a, l, r, { delay: u = 0, duration: c = 300, repeat: h = 0, repeatType: d = "loop", ease: m = "easeOut", times: b } = {}, v = void 0) {
  const g = {
    [l]: r
  };
  b && (g.offset = b);
  const y = xv(m, c);
  Array.isArray(y) && (g.easing = y);
  const T = {
    delay: u,
    duration: c,
    easing: Array.isArray(y) ? "linear" : y,
    fill: "both",
    iterations: h + 1,
    direction: d === "reverse" ? "alternate" : "normal"
  };
  return v && (T.pseudoElement = v), a.animate(g, T);
}
function Cv(a) {
  return typeof a == "function" && "applyToOptions" in a;
}
function dA({ type: a, ...l }) {
  return Cv(a) && Av() ? a.applyToOptions(l) : (l.duration ?? (l.duration = 300), l.ease ?? (l.ease = "easeOut"), l);
}
class Mv extends Ed {
  constructor(l) {
    if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !l)
      return;
    const { element: r, name: u, keyframes: c, pseudoElement: h, allowFlatten: d = !1, finalKeyframe: m, onComplete: b } = l;
    this.isPseudoElement = !!h, this.allowFlatten = d, this.options = l, Cu(typeof l.type != "string");
    const v = dA(l);
    this.animation = fA(r, u, c, v, h), v.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !h) {
        const g = Mu(c, this.options, m, this.speed);
        this.updateMotionValue && this.updateMotionValue(g), Tv(r, u, g), this.animation.cancel();
      }
      b?.(), this.notifyFinished();
    };
  }
  play() {
    this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {
    }
  }
  stop() {
    if (this.isStopped)
      return;
    this.isStopped = !0;
    const { state: l } = this;
    l === "idle" || l === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * In this method, we commit styles back to the DOM before cancelling
   * the animation.
   *
   * This is designed to be overridden by NativeAnimationExtended, which
   * will create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to also correctly calculate velocity for any subsequent animation
   * while deferring the commit until the next animation frame.
   */
  commitStyles() {
    const l = this.options?.element;
    !this.isPseudoElement && l?.isConnected && this.animation.commitStyles?.();
  }
  get duration() {
    const l = this.animation.effect?.getComputedTiming?.().duration || 0;
    return /* @__PURE__ */ tn(Number(l));
  }
  get iterationDuration() {
    const { delay: l = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ tn(l);
  }
  get time() {
    return /* @__PURE__ */ tn(Number(this.animation.currentTime) || 0);
  }
  set time(l) {
    const r = this.finishedTime !== null;
    this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ Qe(l), r && this.animation.pause();
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(l) {
    l < 0 && (this.finishedTime = null), this.animation.playbackRate = l;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(l) {
    this.manualStartTime = this.animation.startTime = l;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline: l, rangeStart: r, rangeEnd: u, observe: c }) {
    return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, l && cA() ? (this.animation.timeline = l, r && (this.animation.rangeStart = r), u && (this.animation.rangeEnd = u), en) : c(this);
  }
}
const Dv = {
  anticipate: nv,
  backInOut: ev,
  circInOut: av
};
function hA(a) {
  return a in Dv;
}
function mA(a) {
  typeof a.ease == "string" && hA(a.ease) && (a.ease = Dv[a.ease]);
}
const Af = 10;
class pA extends Mv {
  constructor(l) {
    mA(l), vv(l), super(l), l.startTime !== void 0 && l.autoplay !== !1 && (this.startTime = l.startTime), this.options = l;
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read committed styles back out of the DOM, we can
   * create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to calculate velocity for any subsequent animation.
   */
  updateMotionValue(l) {
    const { motionValue: r, onUpdate: u, onComplete: c, element: h, ...d } = this.options;
    if (!r)
      return;
    if (l !== void 0) {
      r.set(l);
      return;
    }
    const m = new gu({
      ...d,
      autoplay: !1
    }), b = Math.max(Af, Ae.now() - this.startTime), v = Rn(0, Af, b - Af), g = m.sample(b).value, { name: y } = this.options;
    h && y && Tv(h, y, g), r.setWithVelocity(m.sample(Math.max(0, b - v)).value, g, v), m.stop();
  }
}
const Ng = (a, l) => l === "zIndex" ? !1 : !!(typeof a == "number" || Array.isArray(a) || typeof a == "string" && // It's animatable if we have a string
(fn.test(a) || a === "0") && // And it contains numbers and/or colors
!a.startsWith("url("));
function yA(a) {
  const l = a[0];
  if (a.length === 1)
    return !0;
  for (let r = 0; r < a.length; r++)
    if (a[r] !== l)
      return !0;
}
function gA(a, l, r, u) {
  const c = a[0];
  if (c === null)
    return !1;
  if (l === "display" || l === "visibility")
    return !0;
  const h = a[a.length - 1], d = Ng(c, l), m = Ng(h, l);
  return !d || !m ? !1 : yA(a) || (r === "spring" || Cv(r)) && u;
}
function Jf(a) {
  a.duration = 0, a.type = "keyframes";
}
const zv = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), vA = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function bA(a) {
  for (let l = 0; l < a.length; l++)
    if (typeof a[l] == "string" && vA.test(a[l]))
      return !0;
  return !1;
}
const SA = /* @__PURE__ */ new Set([
  "color",
  "backgroundColor",
  "outlineColor",
  "fill",
  "stroke",
  "borderColor",
  "borderTopColor",
  "borderRightColor",
  "borderBottomColor",
  "borderLeftColor"
]), TA = /* @__PURE__ */ P0(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function EA(a) {
  const { motionValue: l, name: r, repeatDelay: u, repeatType: c, damping: h, type: d, keyframes: m } = a, b = l?.owner?.current;
  if (!(b instanceof HTMLElement) && !(b instanceof SVGElement))
    return !1;
  const { onUpdate: v, transformTemplate: g } = l.owner.getProps();
  return TA() && r && /**
   * Force WAAPI for color properties with browser-only color formats
   * (oklch, oklab, lab, lch, etc.) that the JS animation path can't parse.
   */
  (zv.has(r) || SA.has(r) && bA(m)) && (r !== "transform" || !g) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !v && !u && c !== "mirror" && h !== 0 && d !== "inertia";
}
const AA = 40;
class xA extends Ed {
  constructor({ autoplay: l = !0, delay: r = 0, type: u = "keyframes", repeat: c = 0, repeatDelay: h = 0, repeatType: d = "loop", keyframes: m, name: b, motionValue: v, element: g, ...y }) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = Ae.now();
    const T = {
      autoplay: l,
      delay: r,
      type: u,
      repeat: c,
      repeatDelay: h,
      repeatType: d,
      name: b,
      motionValue: v,
      element: g,
      ...y
    }, _ = g?.KeyframeResolver || Ad;
    this.keyframeResolver = new _(m, (R, V, N) => this.onKeyframesResolved(R, V, T, !N), b, v, g), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(l, r, u, c) {
    this.keyframeResolver = void 0;
    const { name: h, type: d, velocity: m, delay: b, isHandoff: v, onUpdate: g } = u;
    this.resolvedAt = Ae.now();
    let y = !0;
    gA(l, h, d, m) || (y = !1, (Mi.instantAnimations || !b) && g?.(Mu(l, u, r)), l[0] = l[l.length - 1], Jf(u), u.repeat = 0);
    const _ = {
      startTime: c ? this.resolvedAt ? this.resolvedAt - this.createdAt > AA ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: r,
      ...u,
      keyframes: l
    }, R = y && !v && EA(_), V = _.motionValue?.owner?.current;
    let N;
    if (R)
      try {
        N = new pA({
          ..._,
          element: V
        });
      } catch {
        N = new gu(_);
      }
    else
      N = new gu(_);
    N.finished.then(() => {
      this.notifyFinished();
    }).catch(en), this.pendingTimeline && (this.stopTimeline = N.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = N;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(l, r) {
    return this.finished.finally(l).then(() => {
    });
  }
  get animation() {
    return this._animation || (this.keyframeResolver?.resume(), oA()), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(l) {
    this.animation.time = l;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(l) {
    this.animation.speed = l;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(l) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(l) : this.pendingTimeline = l, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
  }
}
function Ov(a, l, r, u = 0, c = 1) {
  const h = Array.from(a).sort((v, g) => v.sortNodePosition(g)).indexOf(l), d = a.size, m = (d - 1) * u;
  return typeof r == "function" ? r(h, d) : c === 1 ? h * u : m - h * u;
}
const Vg = 30, CA = (a) => !isNaN(parseFloat(a));
class MA {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(l, r = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (u) => {
      const c = Ae.now();
      if (this.updatedAt !== c && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(u), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
        for (const h of this.dependents)
          h.dirty();
    }, this.hasAnimated = !1, this.setCurrent(l), this.owner = r.owner;
  }
  setCurrent(l) {
    this.current = l, this.updatedAt = Ae.now(), this.canTrackVelocity === null && l !== void 0 && (this.canTrackVelocity = CA(this.current));
  }
  setPrevFrameValue(l = this.current) {
    this.prevFrameValue = l, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(l) {
    return this.on("change", l);
  }
  on(l, r) {
    this.events[l] || (this.events[l] = new md());
    const u = this.events[l].add(r);
    return l === "change" ? () => {
      u(), Lt.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : u;
  }
  clearListeners() {
    for (const l in this.events)
      this.events[l].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(l, r) {
    this.passiveEffect = l, this.stopPassiveEffect = r;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(l) {
    this.passiveEffect ? this.passiveEffect(l, this.updateAndNotify) : this.updateAndNotify(l);
  }
  setWithVelocity(l, r, u) {
    this.set(r), this.prev = void 0, this.prevFrameValue = l, this.prevUpdatedAt = this.updatedAt - u;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(l, r = !0) {
    this.updateAndNotify(l), this.prev = l, this.prevUpdatedAt = this.prevFrameValue = void 0, r && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(l) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(l);
  }
  removeDependent(l) {
    this.dependents && this.dependents.delete(l);
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const l = Ae.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || l - this.updatedAt > Vg)
      return 0;
    const r = Math.min(this.updatedAt - this.prevUpdatedAt, Vg);
    return /* @__PURE__ */ F0(parseFloat(this.current) - parseFloat(this.prevFrameValue), r);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(l) {
    return this.stop(), new Promise((r) => {
      this.hasAnimated = !0, this.animation = l(r), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function al(a, l) {
  return new MA(a, l);
}
function Rv(a, l) {
  if (a?.inherit && l) {
    const { inherit: r, ...u } = a;
    return { ...l, ...u };
  }
  return a;
}
function xd(a, l) {
  const r = a?.[l] ?? a?.default ?? a;
  return r !== a ? Rv(r, a) : r;
}
const DA = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, zA = (a) => ({
  type: "spring",
  stiffness: 550,
  damping: a === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), OA = {
  type: "keyframes",
  duration: 0.8
}, RA = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, wA = (a, { keyframes: l }) => l.length > 2 ? OA : ol.has(a) ? a.startsWith("scale") ? zA(l[1]) : DA : RA, _A = /* @__PURE__ */ new Set([
  "when",
  "delay",
  "delayChildren",
  "staggerChildren",
  "staggerDirection",
  "repeat",
  "repeatType",
  "repeatDelay",
  "from",
  "elapsed"
]);
function NA(a) {
  for (const l in a)
    if (!_A.has(l))
      return !0;
  return !1;
}
const Cd = (a, l, r, u = {}, c, h) => (d) => {
  const m = xd(u, a) || {}, b = m.delay || u.delay || 0;
  let { elapsed: v = 0 } = u;
  v = v - /* @__PURE__ */ Qe(b);
  const g = {
    keyframes: Array.isArray(r) ? r : [null, r],
    ease: "easeOut",
    velocity: l.getVelocity(),
    ...m,
    delay: -v,
    onUpdate: (T) => {
      l.set(T), m.onUpdate && m.onUpdate(T);
    },
    onComplete: () => {
      d(), m.onComplete && m.onComplete();
    },
    name: a,
    motionValue: l,
    element: h ? void 0 : c
  };
  NA(m) || Object.assign(g, wA(a, g)), g.duration && (g.duration = /* @__PURE__ */ Qe(g.duration)), g.repeatDelay && (g.repeatDelay = /* @__PURE__ */ Qe(g.repeatDelay)), g.from !== void 0 && (g.keyframes[0] = g.from);
  let y = !1;
  if ((g.type === !1 || g.duration === 0 && !g.repeatDelay) && (Jf(g), g.delay === 0 && (y = !0)), (Mi.instantAnimations || Mi.skipAnimations || c?.shouldSkipAnimations || m.skipAnimations) && (y = !0, Jf(g), g.delay = 0), g.allowFlatten = !m.type && !m.ease, y && !h && l.get() !== void 0) {
    const T = Mu(g.keyframes, m);
    if (T !== void 0) {
      Lt.update(() => {
        g.onUpdate(T), g.onComplete();
      });
      return;
    }
  }
  return m.isSync ? new gu(g) : new xA(g);
}, VA = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function UA(a) {
  const l = VA.exec(a);
  if (!l)
    return [,];
  const [, r, u, c] = l;
  return [`--${r ?? u}`, c];
}
function wv(a, l, r = 1) {
  const [u, c] = UA(a);
  if (!u)
    return;
  const h = window.getComputedStyle(l).getPropertyValue(u);
  if (h) {
    const d = h.trim();
    return K0(d) ? parseFloat(d) : d;
  }
  return gd(c) ? wv(c, l, r + 1) : c;
}
function Ug(a) {
  const l = [{}, {}];
  return a?.values.forEach((r, u) => {
    l[0][u] = r.get(), l[1][u] = r.getVelocity();
  }), l;
}
function Md(a, l, r, u) {
  if (typeof l == "function") {
    const [c, h] = Ug(u);
    l = l(r !== void 0 ? r : a.custom, c, h);
  }
  if (typeof l == "string" && (l = a.variants && a.variants[l]), typeof l == "function") {
    const [c, h] = Ug(u);
    l = l(r !== void 0 ? r : a.custom, c, h);
  }
  return l;
}
function la(a, l, r) {
  const u = a.getProps();
  return Md(u, l, r !== void 0 ? r : u.custom, a);
}
const _v = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...sl
]), Pf = (a) => Array.isArray(a);
function BA(a, l, r) {
  a.hasValue(l) ? a.getValue(l).set(r) : a.addValue(l, al(r));
}
function LA(a) {
  return Pf(a) ? a[a.length - 1] || 0 : a;
}
function jA(a, l) {
  const r = la(a, l);
  let { transitionEnd: u = {}, transition: c = {}, ...h } = r || {};
  h = { ...h, ...u };
  for (const d in h) {
    const m = LA(h[d]);
    BA(a, d, m);
  }
}
const ge = (a) => !!(a && a.getVelocity);
function HA(a) {
  return !!(ge(a) && a.add);
}
function Ff(a, l) {
  const r = a.getValue("willChange");
  if (HA(r))
    return r.add(l);
  if (!r && Mi.WillChange) {
    const u = new Mi.WillChange("auto");
    a.addValue("willChange", u), u.add(l);
  }
}
function Dd(a) {
  return a.replace(/([A-Z])/g, (l) => `-${l.toLowerCase()}`);
}
const GA = "framerAppearId", Nv = "data-" + Dd(GA);
function Vv(a) {
  return a.props[Nv];
}
function YA({ protectedKeys: a, needsAnimating: l }, r) {
  const u = a.hasOwnProperty(r) && l[r] !== !0;
  return l[r] = !1, u;
}
function Uv(a, l, { delay: r = 0, transitionOverride: u, type: c } = {}) {
  let { transition: h, transitionEnd: d, ...m } = l;
  const b = a.getDefaultTransition();
  h = h ? Rv(h, b) : b;
  const v = h?.reduceMotion, g = h?.skipAnimations;
  u && (h = u);
  const y = [], T = c && a.animationState && a.animationState.getState()[c], _ = h?.path;
  _ && _.animateVisualElement(a, m, h, r, y);
  for (const R in m) {
    const V = a.getValue(R, a.latestValues[R] ?? null), N = m[R];
    if (N === void 0 || T && YA(T, R))
      continue;
    const j = {
      delay: r,
      ...xd(h || {}, R)
    };
    g && (j.skipAnimations = !0);
    const H = V.get();
    if (H !== void 0 && !V.isAnimating() && !Array.isArray(N) && N === H && !j.velocity) {
      Lt.update(() => V.set(N));
      continue;
    }
    let q = !1;
    if (window.MotionHandoffAnimation) {
      const ot = Vv(a);
      if (ot) {
        const Q = window.MotionHandoffAnimation(ot, R, Lt);
        Q !== null && (j.startTime = Q, q = !0);
      }
    }
    Ff(a, R);
    const X = v ?? a.shouldReduceMotion;
    V.start(Cd(R, V, N, X && _v.has(R) ? { type: !1 } : j, a, q));
    const nt = V.animation;
    nt && y.push(nt);
  }
  if (d) {
    const R = () => Lt.update(() => {
      d && jA(a, d);
    });
    y.length ? Promise.all(y).then(R) : R();
  }
  return y;
}
function If(a, l, r = {}) {
  const u = la(a, l, r.type === "exit" ? a.presenceContext?.custom : void 0);
  let { transition: c = a.getDefaultTransition() || {} } = u || {};
  r.transitionOverride && (c = r.transitionOverride);
  const h = u ? () => Promise.all(Uv(a, u, r)) : () => Promise.resolve(), d = a.variantChildren && a.variantChildren.size ? (b = 0) => {
    const { delayChildren: v = 0, staggerChildren: g, staggerDirection: y } = c;
    return qA(a, l, b, v, g, y, r);
  } : () => Promise.resolve(), { when: m } = c;
  if (m) {
    const [b, v] = m === "beforeChildren" ? [h, d] : [d, h];
    return b().then(() => v());
  } else
    return Promise.all([h(), d(r.delay)]);
}
function qA(a, l, r = 0, u = 0, c = 0, h = 1, d) {
  const m = [];
  for (const b of a.variantChildren)
    b.notify("AnimationStart", l), m.push(If(b, l, {
      ...d,
      delay: r + (typeof u == "function" ? 0 : u) + Ov(a.variantChildren, b, u, c, h)
    }).then(() => b.notify("AnimationComplete", l)));
  return Promise.all(m);
}
function XA(a, l, r = {}) {
  a.notify("AnimationStart", l);
  let u;
  if (Array.isArray(l)) {
    const c = l.map((h) => If(a, h, r));
    u = Promise.all(c);
  } else if (typeof l == "string")
    u = If(a, l, r);
  else {
    const c = typeof l == "function" ? la(a, l, r.custom) : l;
    u = Promise.all(Uv(a, c, r));
  }
  return u.then(() => {
    a.notify("AnimationComplete", l);
  });
}
const QA = {
  test: (a) => a === "auto",
  parse: (a) => a
}, Bv = (a) => (l) => l.test(a), Lv = [ll, et, On, kn, yE, pE, QA], Bg = (a) => Lv.find(Bv(a));
function ZA(a) {
  return typeof a == "number" ? a === 0 : a !== null ? a === "none" || a === "0" || J0(a) : !0;
}
const KA = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function kA(a) {
  const [l, r] = a.slice(0, -1).split("(");
  if (l === "drop-shadow")
    return a;
  const [u] = r.match(vd) || [];
  if (!u)
    return a;
  const c = r.replace(u, "");
  let h = KA.has(l) ? 1 : 0;
  return u !== r && (h *= 100), l + "(" + h + c + ")";
}
const JA = /\b([a-z-]*)\(.*?\)/gu, Wf = {
  ...fn,
  getAnimatableNone: (a) => {
    const l = a.match(JA);
    return l ? l.map(kA).join(" ") : a;
  }
}, $f = {
  ...fn,
  getAnimatableNone: (a) => {
    const l = fn.parse(a);
    return fn.createTransformer(a)(l.map((u) => typeof u == "number" ? 0 : typeof u == "object" ? { ...u, alpha: 1 } : u));
  }
}, Lg = {
  ...ll,
  transform: Math.round
}, PA = {
  rotate: kn,
  /**
   * Internal channel for `transition.path` orientToPath. Composed onto
   * `rotate` at the transform-build sites so the user's `rotate` is
   * never read or overwritten. Not part of `transformPropOrder`.
   */
  pathRotation: kn,
  rotateX: kn,
  rotateY: kn,
  rotateZ: kn,
  scale: Wo,
  scaleX: Wo,
  scaleY: Wo,
  scaleZ: Wo,
  skew: kn,
  skewX: kn,
  skewY: kn,
  distance: et,
  translateX: et,
  translateY: et,
  translateZ: et,
  x: et,
  y: et,
  z: et,
  perspective: et,
  transformPerspective: et,
  opacity: ds,
  originX: Ag,
  originY: Ag,
  originZ: et
}, vu = {
  // Border props
  borderWidth: et,
  borderTopWidth: et,
  borderRightWidth: et,
  borderBottomWidth: et,
  borderLeftWidth: et,
  borderRadius: et,
  borderTopLeftRadius: et,
  borderTopRightRadius: et,
  borderBottomRightRadius: et,
  borderBottomLeftRadius: et,
  // Positioning props
  width: et,
  maxWidth: et,
  height: et,
  maxHeight: et,
  top: et,
  right: et,
  bottom: et,
  left: et,
  inset: et,
  insetBlock: et,
  insetBlockStart: et,
  insetBlockEnd: et,
  insetInline: et,
  insetInlineStart: et,
  insetInlineEnd: et,
  // Spacing props
  padding: et,
  paddingTop: et,
  paddingRight: et,
  paddingBottom: et,
  paddingLeft: et,
  paddingBlock: et,
  paddingBlockStart: et,
  paddingBlockEnd: et,
  paddingInline: et,
  paddingInlineStart: et,
  paddingInlineEnd: et,
  margin: et,
  marginTop: et,
  marginRight: et,
  marginBottom: et,
  marginLeft: et,
  marginBlock: et,
  marginBlockStart: et,
  marginBlockEnd: et,
  marginInline: et,
  marginInlineStart: et,
  marginInlineEnd: et,
  // Typography
  fontSize: et,
  // Misc
  backgroundPositionX: et,
  backgroundPositionY: et,
  ...PA,
  zIndex: Lg,
  // SVG
  fillOpacity: ds,
  strokeOpacity: ds,
  numOctaves: Lg
}, FA = {
  ...vu,
  // Color props
  color: te,
  backgroundColor: te,
  outlineColor: te,
  fill: te,
  stroke: te,
  // Border props
  borderColor: te,
  borderTopColor: te,
  borderRightColor: te,
  borderBottomColor: te,
  borderLeftColor: te,
  filter: Wf,
  WebkitFilter: Wf,
  mask: $f,
  WebkitMask: $f
}, jv = (a) => FA[a], IA = /* @__PURE__ */ new Set([Wf, $f]);
function Hv(a, l) {
  let r = jv(a);
  return IA.has(r) || (r = fn), r.getAnimatableNone ? r.getAnimatableNone(l) : void 0;
}
const WA = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function $A(a, l, r) {
  let u = 0, c;
  for (; u < a.length && !c; ) {
    const h = a[u];
    typeof h == "string" && !WA.has(h) && il(h).values.length && (c = a[u]), u++;
  }
  if (c && r)
    for (const h of l)
      a[h] = Hv(r, c);
}
class tx extends Ad {
  constructor(l, r, u, c, h) {
    super(l, r, u, c, h, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, element: r, name: u } = this;
    if (!r || !r.current)
      return;
    super.readKeyframes();
    for (let g = 0; g < l.length; g++) {
      let y = l[g];
      if (typeof y == "string" && (y = y.trim(), gd(y))) {
        const T = wv(y, r.current);
        T !== void 0 && (l[g] = T), g === l.length - 1 && (this.finalKeyframe = y);
      }
    }
    if (this.resolveNoneKeyframes(), !_v.has(u) || l.length !== 2)
      return;
    const [c, h] = l, d = Bg(c), m = Bg(h), b = Eg(c), v = Eg(h);
    if (b !== v && Ci[u]) {
      this.needsMeasurement = !0;
      return;
    }
    if (d !== m)
      if (wg(d) && wg(m))
        for (let g = 0; g < l.length; g++) {
          const y = l[g];
          typeof y == "string" && (l[g] = parseFloat(y));
        }
      else Ci[u] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: l, name: r } = this, u = [];
    for (let c = 0; c < l.length; c++)
      (l[c] === null || ZA(l[c])) && u.push(c);
    u.length && $A(l, u, r);
  }
  measureInitialState() {
    const { element: l, unresolvedKeyframes: r, name: u } = this;
    if (!l || !l.current)
      return;
    u === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Ci[u](l.measureViewportBox(), window.getComputedStyle(l.current)), r[0] = this.measuredOrigin;
    const c = r[r.length - 1];
    c !== void 0 && l.getValue(u, c).jump(c, !1);
  }
  measureEndState() {
    const { element: l, name: r, unresolvedKeyframes: u } = this;
    if (!l || !l.current)
      return;
    const c = l.getValue(r);
    c && c.jump(this.measuredOrigin, !1);
    const h = u.length - 1, d = u[h];
    u[h] = Ci[r](l.measureViewportBox(), window.getComputedStyle(l.current)), d !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = d), this.removedTransforms?.length && this.removedTransforms.forEach(([m, b]) => {
      l.getValue(m).set(b);
    }), this.resolveNoneKeyframes();
  }
}
const zd = [
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomRightRadius",
  "borderBottomLeftRadius"
];
function Gv(a, l, r) {
  if (a == null)
    return [];
  if (a instanceof EventTarget)
    return [a];
  if (typeof a == "string") {
    let u = document;
    const c = r?.[a] ?? u.querySelectorAll(a);
    return c ? Array.from(c) : [];
  }
  return Array.from(a).filter((u) => u != null);
}
const td = (a, l) => l && typeof a == "number" ? l.transform(a) : a;
function lu(a) {
  return k0(a) && "offsetHeight" in a && !("ownerSVGElement" in a);
}
const { schedule: Od } = /* @__PURE__ */ ov(queueMicrotask, !1), cn = {
  x: !1,
  y: !1
};
function Yv() {
  return cn.x || cn.y;
}
function ex(a) {
  return a === "x" || a === "y" ? cn[a] ? null : (cn[a] = !0, () => {
    cn[a] = !1;
  }) : cn.x || cn.y ? null : (cn.x = cn.y = !0, () => {
    cn.x = cn.y = !1;
  });
}
function qv(a, l) {
  const r = Gv(a), u = new AbortController(), c = {
    passive: !0,
    ...l,
    signal: u.signal
  };
  return [r, c, () => u.abort()];
}
function nx(a) {
  return !(a.pointerType === "touch" || Yv());
}
function ix(a, l, r = {}) {
  const [u, c, h] = qv(a, r);
  return u.forEach((d) => {
    let m = !1, b = !1, v;
    const g = () => {
      d.removeEventListener("pointerleave", R);
    }, y = (N) => {
      v && (v(N), v = void 0), g();
    }, T = (N) => {
      m = !1, window.removeEventListener("pointerup", T), window.removeEventListener("pointercancel", T), b && (b = !1, y(N));
    }, _ = () => {
      m = !0, window.addEventListener("pointerup", T, c), window.addEventListener("pointercancel", T, c);
    }, R = (N) => {
      if (N.pointerType !== "touch") {
        if (m) {
          b = !0;
          return;
        }
        y(N);
      }
    }, V = (N) => {
      if (!nx(N))
        return;
      b = !1;
      const j = l(d, N);
      typeof j == "function" && (v = j, d.addEventListener("pointerleave", R, c));
    };
    d.addEventListener("pointerenter", V, c), d.addEventListener("pointerdown", _, c);
  }), h;
}
const Xv = (a, l) => l ? a === l ? !0 : Xv(a, l.parentElement) : !1, Rd = (a) => a.pointerType === "mouse" ? typeof a.button != "number" || a.button <= 0 : a.isPrimary !== !1, ax = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function lx(a) {
  return ax.has(a.tagName) || a.isContentEditable === !0;
}
const sx = /* @__PURE__ */ new Set(["INPUT", "SELECT", "TEXTAREA"]);
function ox(a) {
  return sx.has(a.tagName) || a.isContentEditable === !0;
}
const su = /* @__PURE__ */ new WeakSet();
function jg(a) {
  return (l) => {
    l.key === "Enter" && a(l);
  };
}
function xf(a, l) {
  a.dispatchEvent(new PointerEvent("pointer" + l, { isPrimary: !0, bubbles: !0 }));
}
const ux = (a, l) => {
  const r = a.currentTarget;
  if (!r)
    return;
  const u = jg(() => {
    if (su.has(r))
      return;
    xf(r, "down");
    const c = jg(() => {
      xf(r, "up");
    }), h = () => xf(r, "cancel");
    r.addEventListener("keyup", c, l), r.addEventListener("blur", h, l);
  });
  r.addEventListener("keydown", u, l), r.addEventListener("blur", () => r.removeEventListener("keydown", u), l);
};
function Hg(a) {
  return Rd(a) && !Yv();
}
const Gg = /* @__PURE__ */ new WeakSet();
function rx(a, l, r = {}) {
  const [u, c, h] = qv(a, r), d = (m) => {
    const b = m.currentTarget;
    if (!Hg(m) || Gg.has(m))
      return;
    su.add(b), r.stopPropagation && Gg.add(m);
    const v = l(b, m), g = { ...c, capture: !0 }, y = (R, V) => {
      window.removeEventListener("pointerup", T, g), window.removeEventListener("pointercancel", _, g), su.has(b) && su.delete(b), Hg(R) && typeof v == "function" && v(R, { success: V });
    }, T = (R) => {
      y(R, b === window || b === document || r.useGlobalTarget || Xv(b, R.target));
    }, _ = (R) => {
      y(R, !1);
    };
    window.addEventListener("pointerup", T, g), window.addEventListener("pointercancel", _, g);
  };
  return u.forEach((m) => {
    (r.useGlobalTarget ? window : m).addEventListener("pointerdown", d, c), lu(m) && (m.addEventListener("focus", (v) => ux(v, c)), !lx(m) && !m.hasAttribute("tabindex") && (m.tabIndex = 0));
  }), h;
}
function wd(a) {
  return k0(a) && "ownerSVGElement" in a;
}
const ou = /* @__PURE__ */ new WeakMap();
let uu;
const Qv = (a, l, r) => (u, c) => c && c[0] ? c[0][a + "Size"] : wd(u) && "getBBox" in u ? u.getBBox()[l] : u[r], cx = /* @__PURE__ */ Qv("inline", "width", "offsetWidth"), fx = /* @__PURE__ */ Qv("block", "height", "offsetHeight");
function dx({ target: a, borderBoxSize: l }) {
  ou.get(a)?.forEach((r) => {
    r(a, {
      get width() {
        return cx(a, l);
      },
      get height() {
        return fx(a, l);
      }
    });
  });
}
function hx(a) {
  a.forEach(dx);
}
function mx() {
  typeof ResizeObserver > "u" || (uu = new ResizeObserver(hx));
}
function px(a, l) {
  uu || mx();
  const r = Gv(a);
  return r.forEach((u) => {
    let c = ou.get(u);
    c || (c = /* @__PURE__ */ new Set(), ou.set(u, c)), c.add(l), uu?.observe(u);
  }), () => {
    r.forEach((u) => {
      const c = ou.get(u);
      c?.delete(l), c?.size || uu?.unobserve(u);
    });
  };
}
const ru = /* @__PURE__ */ new Set();
let tl;
function yx() {
  tl = () => {
    const a = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      }
    };
    ru.forEach((l) => l(a));
  }, window.addEventListener("resize", tl);
}
function gx(a) {
  return ru.add(a), tl || yx(), () => {
    ru.delete(a), !ru.size && typeof tl == "function" && (window.removeEventListener("resize", tl), tl = void 0);
  };
}
function Yg(a, l) {
  return typeof a == "function" ? gx(a) : px(a, l);
}
function vx(a) {
  return wd(a) && a.tagName === "svg";
}
const bx = [...Lv, te, fn], Sx = (a) => bx.find(Bv(a)), qg = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), el = () => ({
  x: qg(),
  y: qg()
}), Xg = () => ({ min: 0, max: 0 }), ie = () => ({
  x: Xg(),
  y: Xg()
}), Tx = /* @__PURE__ */ new WeakMap();
function Du(a) {
  return a !== null && typeof a == "object" && typeof a.start == "function";
}
function hs(a) {
  return typeof a == "string" || Array.isArray(a);
}
const _d = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Nd = ["initial", ..._d];
function zu(a) {
  return Du(a.animate) || Nd.some((l) => hs(a[l]));
}
function Zv(a) {
  return !!(zu(a) || a.variants);
}
function Ex(a, l, r) {
  for (const u in l) {
    const c = l[u], h = r[u];
    if (ge(c))
      a.addValue(u, c);
    else if (ge(h))
      a.addValue(u, al(c, { owner: a }));
    else if (h !== c)
      if (a.hasValue(u)) {
        const d = a.getValue(u);
        d.liveStyle === !0 ? d.jump(c) : d.hasAnimated || d.set(c);
      } else {
        const d = a.getStaticValue(u);
        a.addValue(u, al(d !== void 0 ? d : c, { owner: a }));
      }
  }
  for (const u in r)
    l[u] === void 0 && a.removeValue(u);
  return l;
}
const ed = { current: null }, Kv = { current: !1 }, Ax = typeof window < "u";
function xx() {
  if (Kv.current = !0, !!Ax)
    if (window.matchMedia) {
      const a = window.matchMedia("(prefers-reduced-motion)"), l = () => ed.current = a.matches;
      a.addEventListener("change", l), l();
    } else
      ed.current = !1;
}
const Qg = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
let bu = {};
function kv(a) {
  bu = a;
}
function Cx() {
  return bu;
}
class Mx {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(l, r, u) {
    return {};
  }
  constructor({ parent: l, props: r, presenceContext: u, reducedMotionConfig: c, skipAnimations: h, blockInitialAnimation: d, visualState: m }, b = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Ad, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const _ = Ae.now();
      this.renderScheduledAt < _ && (this.renderScheduledAt = _, Lt.render(this.render, !1, !0));
    };
    const { latestValues: v, renderState: g } = m;
    this.latestValues = v, this.baseTarget = { ...v }, this.initialValues = r.initial ? { ...v } : {}, this.renderState = g, this.parent = l, this.props = r, this.presenceContext = u, this.depth = l ? l.depth + 1 : 0, this.reducedMotionConfig = c, this.skipAnimationsConfig = h, this.options = b, this.blockInitialAnimation = !!d, this.isControllingVariants = zu(r), this.isVariantNode = Zv(r), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(l && l.current);
    const { willChange: y, ...T } = this.scrapeMotionValuesFromProps(r, {}, this);
    for (const _ in T) {
      const R = T[_];
      v[_] !== void 0 && ge(R) && R.set(v[_]);
    }
  }
  mount(l) {
    if (this.hasBeenMounted)
      for (const r in this.initialValues)
        this.values.get(r)?.jump(this.initialValues[r]), this.latestValues[r] = this.initialValues[r];
    this.current = l, Tx.set(l, this), this.projection && !this.projection.instance && this.projection.mount(l), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((r, u) => this.bindToMotionValue(u, r)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (Kv.current || xx(), this.shouldReduceMotion = ed.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
  }
  unmount() {
    this.projection && this.projection.unmount(), Di(this.notifyUpdate), Di(this.render), this.valueSubscriptions.forEach((l) => l()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
    for (const l in this.events)
      this.events[l].clear();
    for (const l in this.features) {
      const r = this.features[l];
      r && (r.unmount(), r.isMounted = !1);
    }
    this.current = null;
  }
  addChild(l) {
    this.children.add(l), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(l);
  }
  removeChild(l) {
    this.children.delete(l), this.enteringChildren && this.enteringChildren.delete(l);
  }
  bindToMotionValue(l, r) {
    if (this.valueSubscriptions.has(l) && this.valueSubscriptions.get(l)(), r.accelerate && zv.has(l) && this.current instanceof HTMLElement) {
      const { factory: d, keyframes: m, times: b, ease: v, duration: g } = r.accelerate, y = new Mv({
        element: this.current,
        name: l,
        keyframes: m,
        times: b,
        ease: v,
        duration: /* @__PURE__ */ Qe(g)
      }), T = d(y);
      this.valueSubscriptions.set(l, () => {
        T(), y.cancel();
      });
      return;
    }
    const u = ol.has(l);
    u && this.onBindTransform && this.onBindTransform();
    const c = r.on("change", (d) => {
      this.latestValues[l] = d, this.props.onUpdate && Lt.preRender(this.notifyUpdate), u && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    let h;
    typeof window < "u" && window.MotionCheckAppearSync && (h = window.MotionCheckAppearSync(this, l, r)), this.valueSubscriptions.set(l, () => {
      c(), h && h();
    });
  }
  sortNodePosition(l) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== l.type ? 0 : this.sortInstanceNodePosition(this.current, l.current);
  }
  updateFeatures() {
    let l = "animation";
    for (l in bu) {
      const r = bu[l];
      if (!r)
        continue;
      const { isEnabled: u, Feature: c } = r;
      if (!this.features[l] && c && u(this.props) && (this.features[l] = new c(this)), this.features[l]) {
        const h = this.features[l];
        h.isMounted ? h.update() : (h.mount(), h.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ie();
  }
  getStaticValue(l) {
    return this.latestValues[l];
  }
  setStaticValue(l, r) {
    this.latestValues[l] = r;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(l, r) {
    (l.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = l, this.prevPresenceContext = this.presenceContext, this.presenceContext = r;
    for (let u = 0; u < Qg.length; u++) {
      const c = Qg[u];
      this.propEventSubscriptions[c] && (this.propEventSubscriptions[c](), delete this.propEventSubscriptions[c]);
      const h = "on" + c, d = l[h];
      d && (this.propEventSubscriptions[c] = this.on(c, d));
    }
    this.prevMotionValues = Ex(this, this.scrapeMotionValuesFromProps(l, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(l) {
    return this.props.variants ? this.props.variants[l] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(l) {
    const r = this.getClosestVariantNode();
    if (r)
      return r.variantChildren && r.variantChildren.add(l), () => r.variantChildren.delete(l);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(l, r) {
    const u = this.values.get(l);
    r !== u && (u && this.removeValue(l), this.bindToMotionValue(l, r), this.values.set(l, r), this.latestValues[l] = r.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(l) {
    this.values.delete(l);
    const r = this.valueSubscriptions.get(l);
    r && (r(), this.valueSubscriptions.delete(l)), delete this.latestValues[l], this.removeValueFromRenderState(l, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(l) {
    return this.values.has(l);
  }
  getValue(l, r) {
    if (this.props.values && this.props.values[l])
      return this.props.values[l];
    let u = this.values.get(l);
    return u === void 0 && r !== void 0 && (u = al(r === null ? void 0 : r, { owner: this }), this.addValue(l, u)), u;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(l, r) {
    let u = this.latestValues[l] !== void 0 || !this.current ? this.latestValues[l] : this.getBaseTargetFromProps(this.props, l) ?? this.readValueFromInstance(this.current, l, this.options);
    return u != null && (typeof u == "string" && (K0(u) || J0(u)) ? u = parseFloat(u) : !Sx(u) && fn.test(r) && (u = Hv(l, r)), this.setBaseTarget(l, ge(u) ? u.get() : u)), ge(u) ? u.get() : u;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(l, r) {
    this.baseTarget[l] = r;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(l) {
    const { initial: r } = this.props;
    let u;
    if (typeof r == "string" || typeof r == "object") {
      const h = Md(this.props, r, this.presenceContext?.custom);
      h && (u = h[l]);
    }
    if (r && u !== void 0)
      return u;
    const c = this.getBaseTargetFromProps(this.props, l);
    return c !== void 0 && !ge(c) ? c : this.initialValues[l] !== void 0 && u === void 0 ? void 0 : this.baseTarget[l];
  }
  on(l, r) {
    return this.events[l] || (this.events[l] = new md()), this.events[l].add(r);
  }
  notify(l, ...r) {
    this.events[l] && this.events[l].notify(...r);
  }
  scheduleRenderMicrotask() {
    Od.render(this.render);
  }
}
class Jv extends Mx {
  constructor() {
    super(...arguments), this.KeyframeResolver = tx;
  }
  sortInstanceNodePosition(l, r) {
    return l.compareDocumentPosition(r) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(l, r) {
    const u = l.style;
    return u ? u[r] : void 0;
  }
  removeValueFromRenderState(l, { vars: r, style: u }) {
    delete r[l], delete u[l];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: l } = this.props;
    ge(l) && (this.childSubscription = l.on("change", (r) => {
      this.current && (this.current.textContent = `${r}`);
    }));
  }
}
class zi {
  constructor(l) {
    this.isMounted = !1, this.node = l;
  }
  update() {
  }
}
function Pv({ top: a, left: l, right: r, bottom: u }) {
  return {
    x: { min: l, max: r },
    y: { min: a, max: u }
  };
}
function Dx({ x: a, y: l }) {
  return { top: l.min, right: a.max, bottom: l.max, left: a.min };
}
function zx(a, l) {
  if (!l)
    return a;
  const r = l({ x: a.left, y: a.top }), u = l({ x: a.right, y: a.bottom });
  return {
    top: r.y,
    left: r.x,
    bottom: u.y,
    right: u.x
  };
}
function Cf(a) {
  return a === void 0 || a === 1;
}
function nd({ scale: a, scaleX: l, scaleY: r }) {
  return !Cf(a) || !Cf(l) || !Cf(r);
}
function ea(a) {
  return nd(a) || Fv(a) || a.z || a.rotate || a.rotateX || a.rotateY || a.skewX || a.skewY;
}
function Fv(a) {
  return Zg(a.x) || Zg(a.y);
}
function Zg(a) {
  return a && a !== "0%";
}
function Su(a, l, r) {
  const u = a - r, c = l * u;
  return r + c;
}
function Kg(a, l, r, u, c) {
  return c !== void 0 && (a = Su(a, c, u)), Su(a, r, u) + l;
}
function id(a, l = 0, r = 1, u, c) {
  a.min = Kg(a.min, l, r, u, c), a.max = Kg(a.max, l, r, u, c);
}
function Iv(a, { x: l, y: r }) {
  id(a.x, l.translate, l.scale, l.originPoint), id(a.y, r.translate, r.scale, r.originPoint);
}
const kg = 0.999999999999, Jg = 1.0000000000001;
function Ox(a, l, r, u = !1) {
  const c = r.length;
  if (!c)
    return;
  l.x = l.y = 1;
  let h, d;
  for (let m = 0; m < c; m++) {
    h = r[m], d = h.projectionDelta;
    const { visualElement: b } = h.options;
    b && b.props.style && b.props.style.display === "contents" || (u && h.options.layoutScroll && h.scroll && h !== h.root && (zn(a.x, -h.scroll.offset.x), zn(a.y, -h.scroll.offset.y)), d && (l.x *= d.x.scale, l.y *= d.y.scale, Iv(a, d)), u && ea(h.latestValues) && cu(a, h.latestValues, h.layout?.layoutBox));
  }
  l.x < Jg && l.x > kg && (l.x = 1), l.y < Jg && l.y > kg && (l.y = 1);
}
function zn(a, l) {
  a.min += l, a.max += l;
}
function Pg(a, l, r, u, c = 0.5) {
  const h = Bt(a.min, a.max, c);
  id(a, l, r, h, u);
}
function Fg(a, l) {
  return typeof a == "string" ? parseFloat(a) / 100 * (l.max - l.min) : a;
}
function cu(a, l, r) {
  const u = r ?? a;
  Pg(a.x, Fg(l.x, u.x), l.scaleX, l.scale, l.originX), Pg(a.y, Fg(l.y, u.y), l.scaleY, l.scale, l.originY);
}
function Wv(a, l) {
  return Pv(zx(a.getBoundingClientRect(), l));
}
function Rx(a, l, r) {
  const u = Wv(a, r), { scroll: c } = l;
  return c && (zn(u.x, c.offset.x), zn(u.y, c.offset.y)), u;
}
const wx = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, _x = sl.length;
function Nx(a, l, r) {
  let u = "", c = !0;
  for (let d = 0; d < _x; d++) {
    const m = sl[d], b = a[m];
    if (b === void 0)
      continue;
    let v = !0;
    if (typeof b == "number")
      v = b === (m.startsWith("scale") ? 1 : 0);
    else {
      const g = parseFloat(b);
      v = m.startsWith("scale") ? g === 1 : g === 0;
    }
    if (!v || r) {
      const g = td(b, vu[m]);
      if (!v) {
        c = !1;
        const y = wx[m] || m;
        u += `${y}(${g}) `;
      }
      r && (l[m] = g);
    }
  }
  const h = a.pathRotation;
  return h && (c = !1, u += `rotate(${td(h, vu.pathRotation)}) `), u = u.trim(), r ? u = r(l, c ? "" : u) : c && (u = "none"), u;
}
function Vd(a, l, r) {
  const { style: u, vars: c, transformOrigin: h } = a;
  let d = !1, m = !1;
  for (const b in l) {
    const v = l[b];
    if (ol.has(b)) {
      d = !0;
      continue;
    } else if (rv(b)) {
      c[b] = v;
      continue;
    } else {
      const g = td(v, vu[b]);
      b.startsWith("origin") ? (m = !0, h[b] = g) : u[b] = g;
    }
  }
  if (l.transform || (d || r ? u.transform = Nx(l, a.transform, r) : u.transform && (u.transform = "none")), m) {
    const { originX: b = "50%", originY: v = "50%", originZ: g = 0 } = h;
    u.transformOrigin = `${b} ${v} ${g}`;
  }
}
function $v(a, { style: l, vars: r }, u, c) {
  const h = a.style;
  let d;
  for (d in l)
    h[d] = l[d];
  c?.applyProjectionStyles(h, u);
  for (d in r)
    h.setProperty(d, r[d]);
}
function Ig(a, l) {
  return l.max === l.min ? 0 : a / (l.max - l.min) * 100;
}
const as = {
  correct: (a, l) => {
    if (!l.target)
      return a;
    if (typeof a == "string")
      if (et.test(a))
        a = parseFloat(a);
      else
        return a;
    const r = Ig(a, l.target.x), u = Ig(a, l.target.y);
    return `${r}% ${u}%`;
  }
}, Vx = {
  correct: (a, { treeScale: l, projectionDelta: r }) => {
    const u = a, c = fn.parse(a);
    if (c.length > 5)
      return u;
    const h = fn.createTransformer(a), d = typeof c[0] != "number" ? 1 : 0, m = r.x.scale * l.x, b = r.y.scale * l.y;
    c[0 + d] /= m, c[1 + d] /= b;
    const v = Bt(m, b, 0.5);
    return typeof c[2 + d] == "number" && (c[2 + d] /= v), typeof c[3 + d] == "number" && (c[3 + d] /= v), h(c);
  }
}, ad = {
  borderRadius: {
    ...as,
    applyTo: [...zd]
  },
  borderTopLeftRadius: as,
  borderTopRightRadius: as,
  borderBottomLeftRadius: as,
  borderBottomRightRadius: as,
  boxShadow: Vx
};
function tb(a, { layout: l, layoutId: r }) {
  return ol.has(a) || a.startsWith("origin") || (l || r !== void 0) && (!!ad[a] || a === "opacity");
}
function Ud(a, l, r) {
  const u = a.style, c = l?.style, h = {};
  if (!u)
    return h;
  for (const d in u)
    (ge(u[d]) || c && ge(c[d]) || tb(d, a) || r?.getValue(d)?.liveStyle !== void 0) && (h[d] = u[d]);
  return h;
}
function Ux(a) {
  return window.getComputedStyle(a);
}
class Bx extends Jv {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = $v;
  }
  mount(l) {
    Cu(!!l.style), super.mount(l);
  }
  readValueFromInstance(l, r) {
    if (ol.has(r))
      return this.projection?.isProjecting ? Xf(r) : nA(l, r);
    {
      const u = Ux(l), c = (rv(r) ? u.getPropertyValue(r) : u[r]) || 0;
      return typeof c == "string" ? c.trim() : c;
    }
  }
  measureInstanceViewportBox(l, { transformPagePoint: r }) {
    return Wv(l, r);
  }
  build(l, r, u) {
    Vd(l, r, u.transformTemplate);
  }
  scrapeMotionValuesFromProps(l, r, u) {
    return Ud(l, r, u);
  }
}
const Lx = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, jx = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function Hx(a, l, r = 1, u = 0, c = !0) {
  a.pathLength = 1;
  const h = c ? Lx : jx;
  a[h.offset] = `${-u}`, a[h.array] = `${l} ${r}`;
}
const Gx = [
  "offsetDistance",
  "offsetPath",
  "offsetRotate",
  "offsetAnchor"
];
function eb(a, {
  attrX: l,
  attrY: r,
  attrScale: u,
  pathLength: c,
  pathSpacing: h = 1,
  pathOffset: d = 0,
  // This is object creation, which we try to avoid per-frame.
  ...m
}, b, v, g) {
  if (Vd(a, m, v), b) {
    a.style.viewBox && (a.attrs.viewBox = a.style.viewBox);
    return;
  }
  a.attrs = a.style, a.style = {};
  const { attrs: y, style: T } = a;
  y.transform && (T.transform = y.transform, delete y.transform), (T.transform || y.transformOrigin) && (T.transformOrigin = y.transformOrigin ?? "50% 50%", delete y.transformOrigin), T.transform && (T.transformBox = g?.transformBox ?? "fill-box", delete y.transformBox);
  for (const _ of Gx)
    y[_] !== void 0 && (T[_] = y[_], delete y[_]);
  l !== void 0 && (y.x = l), r !== void 0 && (y.y = r), u !== void 0 && (y.scale = u), c !== void 0 && Hx(y, c, h, d, !1);
}
const nb = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]), ib = (a) => typeof a == "string" && a.toLowerCase() === "svg";
function Yx(a, l, r, u) {
  $v(a, l, void 0, u);
  for (const c in l.attrs)
    a.setAttribute(nb.has(c) ? c : Dd(c), l.attrs[c]);
}
function ab(a, l, r) {
  const u = Ud(a, l, r);
  for (const c in a)
    if (ge(a[c]) || ge(l[c])) {
      const h = sl.indexOf(c) !== -1 ? "attr" + c.charAt(0).toUpperCase() + c.substring(1) : c;
      u[h] = a[c];
    }
  return u;
}
class qx extends Jv {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = ie;
  }
  getBaseTargetFromProps(l, r) {
    return l[r];
  }
  readValueFromInstance(l, r) {
    if (ol.has(r)) {
      const u = jv(r);
      return u && u.default || 0;
    }
    return r = nb.has(r) ? r : Dd(r), l.getAttribute(r);
  }
  scrapeMotionValuesFromProps(l, r, u) {
    return ab(l, r, u);
  }
  build(l, r, u) {
    eb(l, r, this.isSVGTag, u.transformTemplate, u.style);
  }
  renderInstance(l, r, u, c) {
    Yx(l, r, u, c);
  }
  mount(l) {
    this.isSVGTag = ib(l.tagName), super.mount(l);
  }
}
const Xx = Nd.length;
function lb(a) {
  if (!a)
    return;
  if (!a.isControllingVariants) {
    const r = a.parent ? lb(a.parent) || {} : {};
    return a.props.initial !== void 0 && (r.initial = a.props.initial), r;
  }
  const l = {};
  for (let r = 0; r < Xx; r++) {
    const u = Nd[r], c = a.props[u];
    (hs(c) || c === !1) && (l[u] = c);
  }
  return l;
}
function sb(a, l) {
  if (!Array.isArray(l))
    return !1;
  const r = l.length;
  if (r !== a.length)
    return !1;
  for (let u = 0; u < r; u++)
    if (l[u] !== a[u])
      return !1;
  return !0;
}
const Qx = [..._d].reverse(), Zx = _d.length;
function Kx(a) {
  return (l) => Promise.all(l.map(({ animation: r, options: u }) => XA(a, r, u)));
}
function kx(a) {
  let l = Kx(a), r = Wg(), u = !0, c = !1;
  const h = (v) => (g, y) => {
    const T = la(a, y, v === "exit" ? a.presenceContext?.custom : void 0);
    if (T) {
      const { transition: _, transitionEnd: R, ...V } = T;
      g = { ...g, ...V, ...R };
    }
    return g;
  };
  function d(v) {
    l = v(a);
  }
  function m(v) {
    const { props: g } = a, y = lb(a.parent) || {}, T = [], _ = /* @__PURE__ */ new Set();
    let R = {}, V = 1 / 0;
    for (let j = 0; j < Zx; j++) {
      const H = Qx[j], q = r[H], X = g[H] !== void 0 ? g[H] : y[H], nt = hs(X), ot = H === v ? q.isActive : null;
      ot === !1 && (V = j);
      let Q = X === y[H] && X !== g[H] && nt;
      if (Q && (u || c) && a.manuallyAnimateOnMount && (Q = !1), q.protectedKeys = { ...R }, // If it isn't active and hasn't *just* been set as inactive
      !q.isActive && ot === null || // If we didn't and don't have any defined prop for this animation type
      !X && !q.prevProp || // Or if the prop doesn't define an animation
      Du(X) || typeof X == "boolean")
        continue;
      if (H === "exit" && q.isActive && ot !== !0) {
        q.prevResolvedValues && (R = {
          ...R,
          ...q.prevResolvedValues
        });
        continue;
      }
      const w = Jx(q.prevProp, X);
      let it = w || // If we're making this variant active, we want to always make it active
      H === v && q.isActive && !Q && nt || // If we removed a higher-priority variant (i is in reverse order)
      j > V && nt, I = !1;
      const pt = Array.isArray(X) ? X : [X];
      let Tt = pt.reduce(h(H), {});
      ot === !1 && (Tt = {});
      const { prevResolvedValues: kt = {} } = q, Xt = {
        ...kt,
        ...Tt
      }, Ct = (J) => {
        it = !0, _.has(J) && (I = !0, _.delete(J)), q.needsAnimating[J] = !0;
        const dt = a.getValue(J);
        dt && (dt.liveStyle = !1);
      };
      for (const J in Xt) {
        const dt = Tt[J], Y = kt[J];
        if (R.hasOwnProperty(J))
          continue;
        let Jt = !1;
        Pf(dt) && Pf(Y) ? Jt = !sb(dt, Y) || w : Jt = dt !== Y, Jt ? dt != null ? Ct(J) : _.add(J) : dt !== void 0 && _.has(J) ? Ct(J) : q.protectedKeys[J] = !0;
      }
      q.prevProp = X, q.prevResolvedValues = Tt, q.isActive && (R = { ...R, ...Tt }), (u || c) && a.blockInitialAnimation && (it = !1);
      const G = Q && w;
      it && (!G || I) && T.push(...pt.map((J) => {
        const dt = { type: H };
        if (typeof J == "string" && (u || c) && !G && a.manuallyAnimateOnMount && a.parent) {
          const { parent: Y } = a, Jt = la(Y, J);
          if (Y.enteringChildren && Jt) {
            const { delayChildren: Ce } = Jt.transition || {};
            dt.delay = Ov(Y.enteringChildren, a, Ce);
          }
        }
        return {
          animation: J,
          options: dt
        };
      }));
    }
    if (_.size) {
      const j = {};
      if (typeof g.initial != "boolean") {
        const H = la(a, Array.isArray(g.initial) ? g.initial[0] : g.initial);
        H && H.transition && (j.transition = H.transition);
      }
      _.forEach((H) => {
        const q = a.getBaseTarget(H), X = a.getValue(H);
        X && (X.liveStyle = !0), j[H] = q ?? null;
      }), T.push({ animation: j });
    }
    let N = !!T.length;
    return u && (g.initial === !1 || g.initial === g.animate) && !a.manuallyAnimateOnMount && (N = !1), u = !1, c = !1, N ? l(T) : Promise.resolve();
  }
  function b(v, g) {
    if (r[v].isActive === g)
      return Promise.resolve();
    a.variantChildren?.forEach((T) => T.animationState?.setActive(v, g)), r[v].isActive = g;
    const y = m(v);
    for (const T in r)
      r[T].protectedKeys = {};
    return y;
  }
  return {
    animateChanges: m,
    setActive: b,
    setAnimateFunction: d,
    getState: () => r,
    reset: () => {
      r = Wg(), c = !0;
    }
  };
}
function Jx(a, l) {
  return typeof l == "string" ? l !== a : Array.isArray(l) ? !sb(l, a) : !1;
}
function $i(a = !1) {
  return {
    isActive: a,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Wg() {
  return {
    animate: $i(!0),
    whileInView: $i(),
    whileHover: $i(),
    whileTap: $i(),
    whileDrag: $i(),
    whileFocus: $i(),
    exit: $i()
  };
}
function ld(a, l) {
  a.min = l.min, a.max = l.max;
}
function rn(a, l) {
  ld(a.x, l.x), ld(a.y, l.y);
}
function $g(a, l) {
  a.translate = l.translate, a.scale = l.scale, a.originPoint = l.originPoint, a.origin = l.origin;
}
const ob = 1e-4, Px = 1 - ob, Fx = 1 + ob, ub = 0.01, Ix = 0 - ub, Wx = 0 + ub;
function xe(a) {
  return a.max - a.min;
}
function $x(a, l, r) {
  return Math.abs(a - l) <= r;
}
function t0(a, l, r, u = 0.5) {
  a.origin = u, a.originPoint = Bt(l.min, l.max, a.origin), a.scale = xe(r) / xe(l), a.translate = Bt(r.min, r.max, a.origin) - a.originPoint, (a.scale >= Px && a.scale <= Fx || isNaN(a.scale)) && (a.scale = 1), (a.translate >= Ix && a.translate <= Wx || isNaN(a.translate)) && (a.translate = 0);
}
function rs(a, l, r, u) {
  t0(a.x, l.x, r.x, u ? u.originX : void 0), t0(a.y, l.y, r.y, u ? u.originY : void 0);
}
function e0(a, l, r, u = 0) {
  const c = u ? Bt(r.min, r.max, u) : r.min;
  a.min = c + l.min, a.max = a.min + xe(l);
}
function t2(a, l, r, u) {
  e0(a.x, l.x, r.x, u?.x), e0(a.y, l.y, r.y, u?.y);
}
function n0(a, l, r, u = 0) {
  const c = u ? Bt(r.min, r.max, u) : r.min;
  a.min = l.min - c, a.max = a.min + xe(l);
}
function Tu(a, l, r, u) {
  n0(a.x, l.x, r.x, u?.x), n0(a.y, l.y, r.y, u?.y);
}
function i0(a, l, r, u, c) {
  return a -= l, a = Su(a, 1 / r, u), c !== void 0 && (a = Su(a, 1 / c, u)), a;
}
function e2(a, l = 0, r = 1, u = 0.5, c, h = a, d = a) {
  if (On.test(l) && (l = parseFloat(l), l = Bt(d.min, d.max, l / 100) - d.min), typeof l != "number")
    return;
  let m = Bt(h.min, h.max, u);
  a === h && (m -= l), a.min = i0(a.min, l, r, m, c), a.max = i0(a.max, l, r, m, c);
}
function a0(a, l, [r, u, c], h, d) {
  e2(a, l[r], l[u], l[c], l.scale, h, d);
}
const n2 = ["x", "scaleX", "originX"], i2 = ["y", "scaleY", "originY"];
function l0(a, l, r, u) {
  a0(a.x, l, n2, r ? r.x : void 0, u ? u.x : void 0), a0(a.y, l, i2, r ? r.y : void 0, u ? u.y : void 0);
}
function s0(a) {
  return a.translate === 0 && a.scale === 1;
}
function rb(a) {
  return s0(a.x) && s0(a.y);
}
function o0(a, l) {
  return a.min === l.min && a.max === l.max;
}
function a2(a, l) {
  return o0(a.x, l.x) && o0(a.y, l.y);
}
function u0(a, l) {
  return Math.round(a.min) === Math.round(l.min) && Math.round(a.max) === Math.round(l.max);
}
function cb(a, l) {
  return u0(a.x, l.x) && u0(a.y, l.y);
}
function r0(a) {
  return xe(a.x) / xe(a.y);
}
function c0(a, l) {
  return a.translate === l.translate && a.scale === l.scale && a.originPoint === l.originPoint;
}
function Dn(a) {
  return [a("x"), a("y")];
}
function l2(a, l, r) {
  let u = "";
  const c = a.x.translate / l.x, h = a.y.translate / l.y, d = r?.z || 0;
  if ((c || h || d) && (u = `translate3d(${c}px, ${h}px, ${d}px) `), (l.x !== 1 || l.y !== 1) && (u += `scale(${1 / l.x}, ${1 / l.y}) `), r) {
    const { transformPerspective: v, rotate: g, pathRotation: y, rotateX: T, rotateY: _, skewX: R, skewY: V } = r;
    v && (u = `perspective(${v}px) ${u}`), g && (u += `rotate(${g}deg) `), y && (u += `rotate(${y}deg) `), T && (u += `rotateX(${T}deg) `), _ && (u += `rotateY(${_}deg) `), R && (u += `skewX(${R}deg) `), V && (u += `skewY(${V}deg) `);
  }
  const m = a.x.scale * l.x, b = a.y.scale * l.y;
  return (m !== 1 || b !== 1) && (u += `scale(${m}, ${b})`), u || "none";
}
const s2 = zd.length, f0 = (a) => typeof a == "string" ? parseFloat(a) : a, d0 = (a) => typeof a == "number" || et.test(a);
function o2(a, l, r, u, c, h) {
  c ? (a.opacity = Bt(0, r.opacity ?? 1, u2(u)), a.opacityExit = Bt(l.opacity ?? 1, 0, r2(u))) : h && (a.opacity = Bt(l.opacity ?? 1, r.opacity ?? 1, u));
  for (let d = 0; d < s2; d++) {
    const m = zd[d];
    let b = h0(l, m), v = h0(r, m);
    if (b === void 0 && v === void 0)
      continue;
    b || (b = 0), v || (v = 0), b === 0 || v === 0 || d0(b) === d0(v) ? (a[m] = Math.max(Bt(f0(b), f0(v), u), 0), (On.test(v) || On.test(b)) && (a[m] += "%")) : a[m] = v;
  }
  (l.rotate || r.rotate) && (a.rotate = Bt(l.rotate || 0, r.rotate || 0, u));
}
function h0(a, l) {
  return a[l] !== void 0 ? a[l] : a.borderRadius;
}
const u2 = /* @__PURE__ */ fb(0, 0.5, iv), r2 = /* @__PURE__ */ fb(0.5, 0.95, en);
function fb(a, l, r) {
  return (u) => u < a ? 0 : u > l ? 1 : r(/* @__PURE__ */ fs(a, l, u));
}
function c2(a, l, r) {
  const u = ge(a) ? a : al(a);
  return u.start(Cd("", u, l, r)), u.animation;
}
function ms(a, l, r, u = { passive: !0 }) {
  return a.addEventListener(l, r, u), () => a.removeEventListener(l, r, u);
}
const f2 = (a, l) => a.depth - l.depth;
class d2 {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(l) {
    hd(this.children, l), this.isDirty = !0;
  }
  remove(l) {
    hu(this.children, l), this.isDirty = !0;
  }
  forEach(l) {
    this.isDirty && this.children.sort(f2), this.isDirty = !1, this.children.forEach(l);
  }
}
function h2(a, l) {
  const r = Ae.now(), u = ({ timestamp: c }) => {
    const h = c - r;
    h >= l && (Di(u), a(h - l));
  };
  return Lt.setup(u, !0), () => Di(u);
}
function fu(a) {
  return ge(a) ? a.get() : a;
}
class m2 {
  constructor() {
    this.members = [];
  }
  add(l) {
    hd(this.members, l);
    for (let r = this.members.length - 1; r >= 0; r--) {
      const u = this.members[r];
      if (u === l || u === this.lead || u === this.prevLead)
        continue;
      const c = u.instance;
      (!c || c.isConnected === !1) && !u.snapshot && (hu(this.members, u), u.unmount());
    }
    l.scheduleRender();
  }
  remove(l) {
    if (hu(this.members, l), l === this.prevLead && (this.prevLead = void 0), l === this.lead) {
      const r = this.members[this.members.length - 1];
      r && this.promote(r);
    }
  }
  relegate(l) {
    for (let r = this.members.indexOf(l) - 1; r >= 0; r--) {
      const u = this.members[r];
      if (u.isPresent !== !1 && u.instance?.isConnected !== !1)
        return this.promote(u), !0;
    }
    return !1;
  }
  promote(l, r) {
    const u = this.lead;
    if (l !== u && (this.prevLead = u, this.lead = l, l.show(), u)) {
      u.updateSnapshot(), l.scheduleRender();
      const { layoutDependency: c } = u.options, { layoutDependency: h } = l.options;
      (c === void 0 || c !== h) && (l.resumeFrom = u, r && (u.preserveOpacity = !0), u.snapshot && (l.snapshot = u.snapshot, l.snapshot.latestValues = u.animationValues || u.latestValues), l.root?.isUpdating && (l.isLayoutDirty = !0)), l.options.crossfade === !1 && u.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((l) => {
      l.options.onExitComplete?.(), l.resumingFrom?.options.onExitComplete?.();
    });
  }
  scheduleRender() {
    this.members.forEach((l) => l.instance && l.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    this.lead?.snapshot && (this.lead.snapshot = void 0);
  }
}
const du = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
}, Mf = ["", "X", "Y", "Z"], p2 = 1e3;
let y2 = 0;
function Df(a, l, r, u) {
  const { latestValues: c } = l;
  c[a] && (r[a] = c[a], l.setStaticValue(a, 0), u && (u[a] = 0));
}
function db(a) {
  if (a.hasCheckedOptimisedAppear = !0, a.root === a)
    return;
  const { visualElement: l } = a.options;
  if (!l)
    return;
  const r = Vv(l);
  if (window.MotionHasOptimisedAnimation(r, "transform")) {
    const { layout: c, layoutId: h } = a.options;
    window.MotionCancelOptimisedAnimation(r, "transform", Lt, !(c || h));
  }
  const { parent: u } = a;
  u && !u.hasCheckedOptimisedAppear && db(u);
}
function hb({ attachResizeListener: a, defaultParent: l, measureScroll: r, checkIsScrollRoot: u, resetTransform: c }) {
  return class {
    constructor(d = {}, m = l?.()) {
      this.id = y2++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(b2), this.nodes.forEach(C2), this.nodes.forEach(M2), this.nodes.forEach(S2);
      }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = d, this.root = m ? m.root || m : this, this.path = m ? [...m.path, m] : [], this.parent = m, this.depth = m ? m.depth + 1 : 0;
      for (let b = 0; b < this.path.length; b++)
        this.path[b].shouldResetTransform = !0;
      this.root === this && (this.nodes = new d2());
    }
    addEventListener(d, m) {
      return this.eventHandlers.has(d) || this.eventHandlers.set(d, new md()), this.eventHandlers.get(d).add(m);
    }
    notifyListeners(d, ...m) {
      const b = this.eventHandlers.get(d);
      b && b.notify(...m);
    }
    hasListeners(d) {
      return this.eventHandlers.has(d);
    }
    /**
     * Lifecycles
     */
    mount(d) {
      if (this.instance)
        return;
      this.isSVG = wd(d) && !vx(d), this.instance = d;
      const { layoutId: m, layout: b, visualElement: v } = this.options;
      if (v && !v.current && v.mount(d), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (b || m) && (this.isLayoutDirty = !0), a) {
        let g, y = 0;
        const T = () => this.root.updateBlockedByResize = !1;
        Lt.read(() => {
          y = window.innerWidth;
        }), a(d, () => {
          const _ = window.innerWidth;
          _ !== y && (y = _, this.root.updateBlockedByResize = !0, g && g(), g = h2(T, 250), du.hasAnimatedSinceResize && (du.hasAnimatedSinceResize = !1, this.nodes.forEach(y0)));
        });
      }
      m && this.root.registerSharedNode(m, this), this.options.animate !== !1 && v && (m || b) && this.addEventListener("didUpdate", ({ delta: g, hasLayoutChanged: y, hasRelativeLayoutChanged: T, layout: _ }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const R = this.options.transition || v.getDefaultTransition() || w2, { onLayoutAnimationStart: V, onLayoutAnimationComplete: N } = v.getProps(), j = !this.targetLayout || !cb(this.targetLayout, _), H = !y && T;
        if (this.options.layoutRoot || this.resumeFrom || H || y && (j || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const q = {
            ...xd(R, "layout"),
            onPlay: V,
            onComplete: N
          };
          (v.shouldReduceMotion || this.options.layoutRoot) && (q.delay = 0, q.type = !1), this.startAnimation(q), this.setAnimationOrigin(g, H, q.path);
        } else
          y || y0(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = _;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const d = this.getStack();
      d && d.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), Di(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(D2), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: d } = this.options;
      return d && d.getProps().transformTemplate;
    }
    willUpdate(d = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && db(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let g = 0; g < this.path.length; g++) {
        const y = this.path[g];
        y.shouldResetTransform = !0, (typeof y.latestValues.x == "string" || typeof y.latestValues.y == "string") && (y.isLayoutDirty = !0), y.updateScroll("snapshot"), y.options.layoutRoot && y.willUpdate(!1);
      }
      const { layoutId: m, layout: b } = this.options;
      if (m === void 0 && !b)
        return;
      const v = this.getTransformTemplate();
      this.prevTransformTemplateValue = v ? v(this.latestValues, "") : void 0, this.updateSnapshot(), d && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        const b = this.updateBlockedByResize;
        this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), b && this.nodes.forEach(E2), this.nodes.forEach(m0);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(p0);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(A2), this.nodes.forEach(x2), this.nodes.forEach(g2), this.nodes.forEach(v2)) : this.nodes.forEach(p0), this.clearAllSnapshots();
      const m = Ae.now();
      ye.delta = Rn(0, 1e3 / 60, m - ye.timestamp), ye.timestamp = m, ye.isProcessing = !0, vf.update.process(ye), vf.preRender.process(ye), vf.render.process(ye), ye.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Od.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(T2), this.sharedNodes.forEach(z2);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Lt.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Lt.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !xe(this.snapshot.measuredBox.x) && !xe(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let b = 0; b < this.path.length; b++)
          this.path[b].updateScroll();
      const d = this.layout;
      this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected || (this.layoutCorrected = ie()), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: m } = this.options;
      m && m.notify("LayoutMeasure", this.layout.layoutBox, d ? d.layoutBox : void 0);
    }
    updateScroll(d = "measure") {
      let m = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === d && (m = !1), m && this.instance) {
        const b = u(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: d,
          isRoot: b,
          offset: r(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : b
        };
      }
    }
    resetTransform() {
      if (!c)
        return;
      const d = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, m = this.projectionDelta && !rb(this.projectionDelta), b = this.getTransformTemplate(), v = b ? b(this.latestValues, "") : void 0, g = v !== this.prevTransformTemplateValue;
      d && this.instance && (m || ea(this.latestValues) || g) && (c(this.instance, v), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(d = !0) {
      const m = this.measurePageBox();
      let b = this.removeElementScroll(m);
      return d && (b = this.removeTransform(b)), _2(b), {
        animationId: this.root.animationId,
        measuredBox: m,
        layoutBox: b,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: d } = this.options;
      if (!d)
        return ie();
      const m = d.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(N2))) {
        const { scroll: v } = this.root;
        v && (zn(m.x, v.offset.x), zn(m.y, v.offset.y));
      }
      return m;
    }
    removeElementScroll(d) {
      const m = ie();
      if (rn(m, d), this.scroll?.wasRoot)
        return m;
      for (let b = 0; b < this.path.length; b++) {
        const v = this.path[b], { scroll: g, options: y } = v;
        v !== this.root && g && y.layoutScroll && (g.wasRoot && rn(m, d), zn(m.x, g.offset.x), zn(m.y, g.offset.y));
      }
      return m;
    }
    applyTransform(d, m = !1, b) {
      const v = b || ie();
      rn(v, d);
      for (let g = 0; g < this.path.length; g++) {
        const y = this.path[g];
        !m && y.options.layoutScroll && y.scroll && y !== y.root && (zn(v.x, -y.scroll.offset.x), zn(v.y, -y.scroll.offset.y)), ea(y.latestValues) && cu(v, y.latestValues, y.layout?.layoutBox);
      }
      return ea(this.latestValues) && cu(v, this.latestValues, this.layout?.layoutBox), v;
    }
    removeTransform(d) {
      const m = ie();
      rn(m, d);
      for (let b = 0; b < this.path.length; b++) {
        const v = this.path[b];
        if (!ea(v.latestValues))
          continue;
        let g;
        v.instance && (nd(v.latestValues) && v.updateSnapshot(), g = ie(), rn(g, v.measurePageBox())), l0(m, v.latestValues, v.snapshot?.layoutBox, g);
      }
      return ea(this.latestValues) && l0(m, this.latestValues), m;
    }
    setTargetDelta(d) {
      this.targetDelta = d, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(d) {
      this.options = {
        ...this.options,
        ...d,
        crossfade: d.crossfade !== void 0 ? d.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ye.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(d = !1) {
      const m = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = m.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = m.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = m.isSharedProjectionDirty);
      const b = !!this.resumingFrom || this !== m;
      if (!(d || b && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: g, layoutId: y } = this.options;
      if (!this.layout || !(g || y))
        return;
      this.resolvedRelativeTargetAt = ye.timestamp;
      const T = this.getClosestProjectingParent();
      T && this.linkedParentVersion !== T.layoutVersion && !T.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && T && T.layout ? this.createRelativeTarget(T, this.layout.layoutBox, T.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = ie(), this.targetWithTransforms = ie()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), t2(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : rn(this.target, this.layout.layoutBox), Iv(this.target, this.targetDelta)) : rn(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && T && !!T.resumingFrom == !!this.resumingFrom && !T.options.layoutScroll && T.target && this.animationProgress !== 1 ? this.createRelativeTarget(T, this.target, T.target) : this.relativeParent = this.relativeTarget = void 0));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || nd(this.parent.latestValues) || Fv(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    createRelativeTarget(d, m, b) {
      this.relativeParent = d, this.linkedParentVersion = d.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ie(), this.relativeTargetOrigin = ie(), Tu(this.relativeTargetOrigin, m, b, this.options.layoutAnchor || void 0), rn(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      const d = this.getLead(), m = !!this.resumingFrom || this !== d;
      let b = !0;
      if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (b = !1), m && (this.isSharedProjectionDirty || this.isTransformDirty) && (b = !1), this.resolvedRelativeTargetAt === ye.timestamp && (b = !1), b)
        return;
      const { layout: v, layoutId: g } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(v || g))
        return;
      rn(this.layoutCorrected, this.layout.layoutBox);
      const y = this.treeScale.x, T = this.treeScale.y;
      Ox(this.layoutCorrected, this.treeScale, this.path, m), d.layout && !d.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (d.target = d.layout.layoutBox, d.targetWithTransforms = ie());
      const { target: _ } = d;
      if (!_) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : ($g(this.prevProjectionDelta.x, this.projectionDelta.x), $g(this.prevProjectionDelta.y, this.projectionDelta.y)), rs(this.projectionDelta, this.layoutCorrected, _, this.latestValues), (this.treeScale.x !== y || this.treeScale.y !== T || !c0(this.projectionDelta.x, this.prevProjectionDelta.x) || !c0(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", _));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(d = !0) {
      if (this.options.visualElement?.scheduleRender(), d) {
        const m = this.getStack();
        m && m.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = el(), this.projectionDelta = el(), this.projectionDeltaWithTransform = el();
    }
    setAnimationOrigin(d, m = !1, b) {
      const v = this.snapshot, g = v ? v.latestValues : {}, y = { ...this.latestValues }, T = el();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !m;
      const _ = ie(), R = v ? v.source : void 0, V = this.layout ? this.layout.source : void 0, N = R !== V, j = this.getStack(), H = !j || j.members.length <= 1, q = !!(N && !H && this.options.crossfade === !0 && !this.path.some(R2));
      this.animationProgress = 0;
      let X;
      const nt = b?.interpolateProjection(d);
      this.mixTargetDelta = (ot) => {
        const Q = ot / 1e3, w = nt?.(Q);
        w ? (T.x.translate = w.x, T.x.scale = Bt(d.x.scale, 1, Q), T.x.origin = d.x.origin, T.x.originPoint = d.x.originPoint, T.y.translate = w.y, T.y.scale = Bt(d.y.scale, 1, Q), T.y.origin = d.y.origin, T.y.originPoint = d.y.originPoint) : (g0(T.x, d.x, Q), g0(T.y, d.y, Q)), this.setTargetDelta(T), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Tu(_, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), O2(this.relativeTarget, this.relativeTargetOrigin, _, Q), X && a2(this.relativeTarget, X) && (this.isProjectionDirty = !1), X || (X = ie()), rn(X, this.relativeTarget)), N && (this.animationValues = y, o2(y, g, this.latestValues, Q, q, H)), w && w.rotate !== void 0 && (this.animationValues || (this.animationValues = y), this.animationValues.pathRotation = w.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = Q;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(d) {
      this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (Di(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Lt.update(() => {
        du.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = al(0)), this.motionValue.jump(0, !1), this.currentAnimation = c2(this.motionValue, [0, 1e3], {
          ...d,
          velocity: 0,
          isSync: !0,
          onUpdate: (m) => {
            this.mixTargetDelta(m), d.onUpdate && d.onUpdate(m);
          },
          onComplete: () => {
            d.onComplete && d.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const d = this.getStack();
      d && d.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(p2), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const d = this.getLead();
      let { targetWithTransforms: m, target: b, layout: v, latestValues: g } = d;
      if (!(!m || !b || !v)) {
        if (this !== d && this.layout && v && mb(this.options.animationType, this.layout.layoutBox, v.layoutBox)) {
          b = this.target || ie();
          const y = xe(this.layout.layoutBox.x);
          b.x.min = d.target.x.min, b.x.max = b.x.min + y;
          const T = xe(this.layout.layoutBox.y);
          b.y.min = d.target.y.min, b.y.max = b.y.min + T;
        }
        rn(m, b), cu(m, g), rs(this.projectionDeltaWithTransform, this.layoutCorrected, m, g);
      }
    }
    registerSharedNode(d, m) {
      this.sharedNodes.has(d) || this.sharedNodes.set(d, new m2()), this.sharedNodes.get(d).add(m);
      const v = m.options.initialPromotionConfig;
      m.promote({
        transition: v ? v.transition : void 0,
        preserveFollowOpacity: v && v.shouldPreserveFollowOpacity ? v.shouldPreserveFollowOpacity(m) : void 0
      });
    }
    isLead() {
      const d = this.getStack();
      return d ? d.lead === this : !0;
    }
    getLead() {
      const { layoutId: d } = this.options;
      return d ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: d } = this.options;
      return d ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: d } = this.options;
      if (d)
        return this.root.sharedNodes.get(d);
    }
    promote({ needsReset: d, transition: m, preserveFollowOpacity: b } = {}) {
      const v = this.getStack();
      v && v.promote(this, b), d && (this.projectionDelta = void 0, this.needsReset = !0), m && this.setOptions({ transition: m });
    }
    relegate() {
      const d = this.getStack();
      return d ? d.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: d } = this.options;
      if (!d)
        return;
      let m = !1;
      const { latestValues: b } = d;
      if ((b.z || b.rotate || b.rotateX || b.rotateY || b.rotateZ || b.skewX || b.skewY) && (m = !0), !m)
        return;
      const v = {};
      b.z && Df("z", d, v, this.animationValues);
      for (let g = 0; g < Mf.length; g++)
        Df(`rotate${Mf[g]}`, d, v, this.animationValues), Df(`skew${Mf[g]}`, d, v, this.animationValues);
      d.render();
      for (const g in v)
        d.setStaticValue(g, v[g]), this.animationValues && (this.animationValues[g] = v[g]);
      d.scheduleRender();
    }
    applyProjectionStyles(d, m) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        d.visibility = "hidden";
        return;
      }
      const b = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, d.visibility = "", d.opacity = "", d.pointerEvents = fu(m?.pointerEvents) || "", d.transform = b ? b(this.latestValues, "") : "none";
        return;
      }
      const v = this.getLead();
      if (!this.projectionDelta || !this.layout || !v.target) {
        this.options.layoutId && (d.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, d.pointerEvents = fu(m?.pointerEvents) || ""), this.hasProjected && !ea(this.latestValues) && (d.transform = b ? b({}, "") : "none", this.hasProjected = !1);
        return;
      }
      d.visibility = "";
      const g = v.animationValues || v.latestValues;
      this.applyTransformsToTarget();
      let y = l2(this.projectionDeltaWithTransform, this.treeScale, g);
      b && (y = b(g, y)), d.transform = y;
      const { x: T, y: _ } = this.projectionDelta;
      d.transformOrigin = `${T.origin * 100}% ${_.origin * 100}% 0`, v.animationValues ? d.opacity = v === this ? g.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : g.opacityExit : d.opacity = v === this ? g.opacity !== void 0 ? g.opacity : "" : g.opacityExit !== void 0 ? g.opacityExit : 0;
      for (const R in ad) {
        if (g[R] === void 0)
          continue;
        const { correct: V, applyTo: N, isCSSVariable: j } = ad[R], H = y === "none" ? g[R] : V(g[R], v);
        if (N) {
          const q = N.length;
          for (let X = 0; X < q; X++)
            d[N[X]] = H;
        } else
          j ? this.options.visualElement.renderState.vars[R] = H : d[R] = H;
      }
      this.options.layoutId && (d.pointerEvents = v === this ? fu(m?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((d) => d.currentAnimation?.stop()), this.root.nodes.forEach(m0), this.root.sharedNodes.clear();
    }
  };
}
function g2(a) {
  a.updateLayout();
}
function v2(a) {
  const l = a.resumeFrom?.snapshot || a.snapshot;
  if (a.isLead() && a.layout && l && a.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: u } = a.layout, { animationType: c } = a.options, h = l.source !== a.layout.source;
    if (c === "size")
      Dn((g) => {
        const y = h ? l.measuredBox[g] : l.layoutBox[g], T = xe(y);
        y.min = r[g].min, y.max = y.min + T;
      });
    else if (c === "x" || c === "y") {
      const g = c === "x" ? "y" : "x";
      ld(h ? l.measuredBox[g] : l.layoutBox[g], r[g]);
    } else mb(c, l.layoutBox, r) && Dn((g) => {
      const y = h ? l.measuredBox[g] : l.layoutBox[g], T = xe(r[g]);
      y.max = y.min + T, a.relativeTarget && !a.currentAnimation && (a.isProjectionDirty = !0, a.relativeTarget[g].max = a.relativeTarget[g].min + T);
    });
    const d = el();
    rs(d, r, l.layoutBox);
    const m = el();
    h ? rs(m, a.applyTransform(u, !0), l.measuredBox) : rs(m, r, l.layoutBox);
    const b = !rb(d);
    let v = !1;
    if (!a.resumeFrom) {
      const g = a.getClosestProjectingParent();
      if (g && !g.resumeFrom) {
        const { snapshot: y, layout: T } = g;
        if (y && T) {
          const _ = a.options.layoutAnchor || void 0, R = ie();
          Tu(R, l.layoutBox, y.layoutBox, _);
          const V = ie();
          Tu(V, r, T.layoutBox, _), cb(R, V) || (v = !0), g.options.layoutRoot && (a.relativeTarget = V, a.relativeTargetOrigin = R, a.relativeParent = g);
        }
      }
    }
    a.notifyListeners("didUpdate", {
      layout: r,
      snapshot: l,
      delta: m,
      layoutDelta: d,
      hasLayoutChanged: b,
      hasRelativeLayoutChanged: v
    });
  } else if (a.isLead()) {
    const { onExitComplete: r } = a.options;
    r && r();
  }
  a.options.transition = void 0;
}
function b2(a) {
  a.parent && (a.isProjecting() || (a.isProjectionDirty = a.parent.isProjectionDirty), a.isSharedProjectionDirty || (a.isSharedProjectionDirty = !!(a.isProjectionDirty || a.parent.isProjectionDirty || a.parent.isSharedProjectionDirty)), a.isTransformDirty || (a.isTransformDirty = a.parent.isTransformDirty));
}
function S2(a) {
  a.isProjectionDirty = a.isSharedProjectionDirty = a.isTransformDirty = !1;
}
function T2(a) {
  a.clearSnapshot();
}
function m0(a) {
  a.clearMeasurements();
}
function E2(a) {
  a.isLayoutDirty = !0, a.updateLayout();
}
function p0(a) {
  a.isLayoutDirty = !1;
}
function A2(a) {
  a.isAnimationBlocked && a.layout && !a.isLayoutDirty && (a.snapshot = a.layout, a.isLayoutDirty = !0);
}
function x2(a) {
  const { visualElement: l } = a.options;
  l && l.getProps().onBeforeLayoutMeasure && l.notify("BeforeLayoutMeasure"), a.resetTransform();
}
function y0(a) {
  a.finishAnimation(), a.targetDelta = a.relativeTarget = a.target = void 0, a.isProjectionDirty = !0;
}
function C2(a) {
  a.resolveTargetDelta();
}
function M2(a) {
  a.calcProjection();
}
function D2(a) {
  a.resetSkewAndRotation();
}
function z2(a) {
  a.removeLeadSnapshot();
}
function g0(a, l, r) {
  a.translate = Bt(l.translate, 0, r), a.scale = Bt(l.scale, 1, r), a.origin = l.origin, a.originPoint = l.originPoint;
}
function v0(a, l, r, u) {
  a.min = Bt(l.min, r.min, u), a.max = Bt(l.max, r.max, u);
}
function O2(a, l, r, u) {
  v0(a.x, l.x, r.x, u), v0(a.y, l.y, r.y, u);
}
function R2(a) {
  return a.animationValues && a.animationValues.opacityExit !== void 0;
}
const w2 = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, b0 = (a) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(a), S0 = b0("applewebkit/") && !b0("chrome/") ? Math.round : en;
function T0(a) {
  a.min = S0(a.min), a.max = S0(a.max);
}
function _2(a) {
  T0(a.x), T0(a.y);
}
function mb(a, l, r) {
  return a === "position" || a === "preserve-aspect" && !$x(r0(l), r0(r), 0.2);
}
function N2(a) {
  return a !== a.root && a.scroll?.wasRoot;
}
const V2 = hb({
  attachResizeListener: (a, l) => ms(a, "resize", l),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
    y: document.documentElement.scrollTop || document.body?.scrollTop || 0
  }),
  checkIsScrollRoot: () => !0
}), zf = {
  current: void 0
}, pb = hb({
  measureScroll: (a) => ({
    x: a.scrollLeft,
    y: a.scrollTop
  }),
  defaultParent: () => {
    if (!zf.current) {
      const a = new V2({});
      a.mount(window), a.setOptions({ layoutScroll: !0 }), zf.current = a;
    }
    return zf.current;
  },
  resetTransform: (a, l) => {
    a.style.transform = l !== void 0 ? l : "none";
  },
  checkIsScrollRoot: (a) => window.getComputedStyle(a).position === "fixed"
}), Bd = K.createContext({
  transformPagePoint: (a) => a,
  isStatic: !1,
  reducedMotion: "never"
});
function E0(a, l) {
  if (typeof a == "function")
    return a(l);
  a != null && (a.current = l);
}
function U2(...a) {
  return (l) => {
    let r = !1;
    const u = a.map((c) => {
      const h = E0(c, l);
      return !r && typeof h == "function" && (r = !0), h;
    });
    if (r)
      return () => {
        for (let c = 0; c < u.length; c++) {
          const h = u[c];
          typeof h == "function" ? h() : E0(a[c], null);
        }
      };
  };
}
function B2(...a) {
  return K.useCallback(U2(...a), a);
}
class L2 extends K.Component {
  getSnapshotBeforeUpdate(l) {
    const r = this.props.childRef.current;
    if (lu(r) && l.isPresent && !this.props.isPresent && this.props.pop !== !1) {
      const u = r.offsetParent, c = lu(u) && u.offsetWidth || 0, h = lu(u) && u.offsetHeight || 0, d = getComputedStyle(r), m = this.props.sizeRef.current;
      m.height = parseFloat(d.height), m.width = parseFloat(d.width), m.top = r.offsetTop, m.left = r.offsetLeft, m.right = c - m.width - m.left, m.bottom = h - m.height - m.top, m.direction = d.direction;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function j2({ children: a, isPresent: l, anchorX: r, anchorY: u, root: c, pop: h }) {
  const d = K.useId(), m = K.useRef(null), b = K.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    direction: "ltr"
  }), { nonce: v } = K.useContext(Bd), g = h !== !1 ? a.props?.ref ?? a?.ref : void 0, y = B2(m, g);
  return K.useInsertionEffect(() => {
    const { width: T, height: _, top: R, left: V, right: N, bottom: j, direction: H } = b.current;
    if (l || h === !1 || !m.current || !T || !_)
      return;
    const q = H === "rtl", X = r === "left" ? q ? `right: ${N}` : `left: ${V}` : q ? `left: ${V}` : `right: ${N}`, nt = u === "bottom" ? `bottom: ${j}` : `top: ${R}`;
    m.current.dataset.motionPopId = d;
    const ot = document.createElement("style");
    v && (ot.nonce = v);
    const Q = c ?? document.head;
    return Q.appendChild(ot), ot.sheet && ot.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${T}px !important;
            height: ${_}px !important;
            ${X}px !important;
            ${nt}px !important;
          }
        `), () => {
      m.current?.removeAttribute("data-motion-pop-id"), Q.contains(ot) && Q.removeChild(ot);
    };
  }, [l]), St.jsx(L2, { isPresent: l, childRef: m, sizeRef: b, pop: h, children: h === !1 ? a : K.cloneElement(a, { ref: y }) });
}
const H2 = ({ children: a, initial: l, isPresent: r, onExitComplete: u, custom: c, presenceAffectsLayout: h, mode: d, anchorX: m, anchorY: b, root: v }) => {
  const g = fd(G2), y = K.useId(), T = K.useRef(r), _ = K.useRef(u);
  dd(() => {
    T.current = r, _.current = u;
  });
  let R = !0, V = K.useMemo(() => (R = !1, {
    id: y,
    initial: l,
    isPresent: r,
    custom: c,
    onExitComplete: (N) => {
      g.set(N, !0);
      for (const j of g.values())
        if (!j)
          return;
      u && u();
    },
    register: (N) => (g.set(N, !1), () => {
      g.delete(N), !T.current && !g.size && _.current?.();
    })
  }), [r, g, u]);
  return h && R && (V = { ...V }), K.useMemo(() => {
    g.forEach((N, j) => g.set(j, !1));
  }, [r]), K.useEffect(() => {
    !r && !g.size && u && u();
  }, [r]), a = St.jsx(j2, { pop: d === "popLayout", isPresent: r, anchorX: m, anchorY: b, root: v, children: a }), St.jsx(xu.Provider, { value: V, children: a });
};
function G2() {
  return /* @__PURE__ */ new Map();
}
function yb(a = !0) {
  const l = K.useContext(xu);
  if (l === null)
    return [!0, null];
  const { isPresent: r, onExitComplete: u, register: c } = l, h = K.useId();
  K.useEffect(() => {
    if (a)
      return c(h);
  }, [a]);
  const d = K.useCallback(() => a && u && u(h), [h, u, a]);
  return !r && u ? [!1, d] : [!0];
}
const $o = (a) => a.key || "";
function A0(a) {
  const l = [];
  return K.Children.forEach(a, (r) => {
    K.isValidElement(r) && l.push(r);
  }), l;
}
const Y2 = ({ children: a, custom: l, initial: r = !0, onExitComplete: u, presenceAffectsLayout: c = !0, mode: h = "sync", propagate: d = !1, anchorX: m = "left", anchorY: b = "top", root: v }) => {
  const [g, y] = yb(d), T = K.useMemo(() => A0(a), [a]), _ = d && !g ? [] : T.map($o), R = K.useRef(!0), V = K.useRef(T), N = fd(() => /* @__PURE__ */ new Map()), j = K.useRef(/* @__PURE__ */ new Set()), [H, q] = K.useState(T), [X, nt] = K.useState(T);
  dd(() => {
    R.current = !1, V.current = T;
    for (let w = 0; w < X.length; w++) {
      const it = $o(X[w]);
      _.includes(it) ? (N.delete(it), j.current.delete(it)) : N.get(it) !== !0 && N.set(it, !1);
    }
  }, [X, _.length, _.join("-")]);
  const ot = [];
  if (T !== H) {
    let w = [...T];
    for (let it = 0; it < X.length; it++) {
      const I = X[it], pt = $o(I);
      _.includes(pt) || (w.splice(it, 0, I), ot.push(I));
    }
    return h === "wait" && ot.length && (w = ot), nt(A0(w)), q(T), null;
  }
  const { forceRender: Q } = K.useContext(cd);
  return St.jsx(St.Fragment, { children: X.map((w) => {
    const it = $o(w), I = d && !g ? !1 : T === X || _.includes(it), pt = () => {
      if (j.current.has(it))
        return;
      if (N.has(it))
        j.current.add(it), N.set(it, !0);
      else
        return;
      let Tt = !0;
      N.forEach((kt) => {
        kt || (Tt = !1);
      }), Tt && (Q?.(), nt(V.current), d && y?.(), u && u());
    };
    return St.jsx(H2, { isPresent: I, initial: !R.current || r ? void 0 : !1, custom: l, presenceAffectsLayout: c, mode: h, root: v, onExitComplete: I ? void 0 : pt, anchorX: m, anchorY: b, children: w }, it);
  }) });
}, gb = K.createContext({ strict: !1 }), x0 = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
};
let C0 = !1;
function q2() {
  if (C0)
    return;
  const a = {};
  for (const l in x0)
    a[l] = {
      isEnabled: (r) => x0[l].some((u) => !!r[u])
    };
  kv(a), C0 = !0;
}
function vb() {
  return q2(), Cx();
}
function X2(a) {
  const l = vb();
  for (const r in a)
    l[r] = {
      ...l[r],
      ...a[r]
    };
  kv(l);
}
const Q2 = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "propagate",
  "ignoreStrict",
  "viewport"
]);
function Eu(a) {
  return a.startsWith("while") || a.startsWith("drag") && a !== "draggable" || a.startsWith("layout") || a.startsWith("onTap") || a.startsWith("onPan") || a.startsWith("onLayout") || Q2.has(a);
}
let bb = (a) => !Eu(a);
function Z2(a) {
  typeof a == "function" && (bb = (l) => l.startsWith("on") ? !Eu(l) : a(l));
}
try {
  Z2(require("@emotion/is-prop-valid").default);
} catch {
}
function K2(a, l, r) {
  const u = {};
  for (const c in a)
    c === "values" && typeof a.values == "object" || ge(a[c]) || (bb(c) || r === !0 && Eu(c) || !l && !Eu(c) || // If trying to use native HTML drag events, forward drag listeners
    a.draggable && c.startsWith("onDrag")) && (u[c] = a[c]);
  return u;
}
const Ou = /* @__PURE__ */ K.createContext({});
function k2(a, l) {
  if (zu(a)) {
    const { initial: r, animate: u } = a;
    return {
      initial: r === !1 || hs(r) ? r : void 0,
      animate: hs(u) ? u : void 0
    };
  }
  return a.inherit !== !1 ? l : {};
}
function J2(a) {
  const { initial: l, animate: r } = k2(a, K.useContext(Ou));
  return K.useMemo(() => ({ initial: l, animate: r }), [M0(l), M0(r)]);
}
function M0(a) {
  return Array.isArray(a) ? a.join(" ") : a;
}
const Ld = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function Sb(a, l, r) {
  for (const u in l)
    !ge(l[u]) && !tb(u, r) && (a[u] = l[u]);
}
function P2({ transformTemplate: a }, l) {
  return K.useMemo(() => {
    const r = Ld();
    return Vd(r, l, a), Object.assign({}, r.vars, r.style);
  }, [l]);
}
function F2(a, l) {
  const r = a.style || {}, u = {};
  return Sb(u, r, a), Object.assign(u, P2(a, l)), u;
}
function I2(a, l) {
  const r = {}, u = F2(a, l);
  return a.drag && a.dragListener !== !1 && (r.draggable = !1, u.userSelect = u.WebkitUserSelect = u.WebkitTouchCallout = "none", u.touchAction = a.drag === !0 ? "none" : `pan-${a.drag === "x" ? "y" : "x"}`), a.tabIndex === void 0 && (a.onTap || a.onTapStart || a.whileTap) && (r.tabIndex = 0), r.style = u, r;
}
const Tb = () => ({
  ...Ld(),
  attrs: {}
});
function W2(a, l, r, u) {
  const c = K.useMemo(() => {
    const h = Tb();
    return eb(h, l, ib(u), a.transformTemplate, a.style), {
      ...h.attrs,
      style: { ...h.style }
    };
  }, [l]);
  if (a.style) {
    const h = {};
    Sb(h, a.style, a), c.style = { ...h, ...c.style };
  }
  return c;
}
const $2 = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function jd(a) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof a != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    a.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!($2.indexOf(a) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(a))
    )
  );
}
function t3(a, l, r, { latestValues: u }, c, h = !1, d) {
  const b = (d ?? jd(a) ? W2 : I2)(l, u, c, a), v = K2(l, typeof a == "string", h), g = a !== K.Fragment ? { ...v, ...b, ref: r } : {}, { children: y } = l, T = K.useMemo(() => ge(y) ? y.get() : y, [y]);
  return K.createElement(a, {
    ...g,
    children: T
  });
}
function e3({ scrapeMotionValuesFromProps: a, createRenderState: l }, r, u, c) {
  return {
    latestValues: n3(r, u, c, a),
    renderState: l()
  };
}
function n3(a, l, r, u) {
  const c = {}, h = u(a, {});
  for (const T in h)
    c[T] = fu(h[T]);
  let { initial: d, animate: m } = a;
  const b = zu(a), v = Zv(a);
  l && v && !b && a.inherit !== !1 && (d === void 0 && (d = l.initial), m === void 0 && (m = l.animate));
  let g = r ? r.initial === !1 : !1;
  g = g || d === !1;
  const y = g ? m : d;
  if (y && typeof y != "boolean" && !Du(y)) {
    const T = Array.isArray(y) ? y : [y];
    for (let _ = 0; _ < T.length; _++) {
      const R = Md(a, T[_]);
      if (R) {
        const { transitionEnd: V, transition: N, ...j } = R;
        for (const H in j) {
          let q = j[H];
          if (Array.isArray(q)) {
            const X = g ? q.length - 1 : 0;
            q = q[X];
          }
          q !== null && (c[H] = q);
        }
        for (const H in V)
          c[H] = V[H];
      }
    }
  }
  return c;
}
const Eb = (a) => (l, r) => {
  const u = K.useContext(Ou), c = K.useContext(xu), h = () => e3(a, l, u, c);
  return r ? h() : fd(h);
}, i3 = /* @__PURE__ */ Eb({
  scrapeMotionValuesFromProps: Ud,
  createRenderState: Ld
}), a3 = /* @__PURE__ */ Eb({
  scrapeMotionValuesFromProps: ab,
  createRenderState: Tb
}), l3 = /* @__PURE__ */ Symbol.for("motionComponentSymbol");
function s3(a, l, r) {
  const u = K.useRef(r);
  K.useInsertionEffect(() => {
    u.current = r;
  });
  const c = K.useRef(null);
  return K.useCallback((h) => {
    h && a.onMount?.(h), l && (h ? l.mount(h) : l.unmount());
    const d = u.current;
    if (typeof d == "function")
      if (h) {
        const m = d(h);
        typeof m == "function" && (c.current = m);
      } else c.current ? (c.current(), c.current = null) : d(h);
    else d && (d.current = h);
  }, [l]);
}
const Ab = K.createContext({});
function Wa(a) {
  return a && typeof a == "object" && Object.prototype.hasOwnProperty.call(a, "current");
}
function o3(a, l, r, u, c, h) {
  const { visualElement: d } = K.useContext(Ou), m = K.useContext(gb), b = K.useContext(xu), v = K.useContext(Bd), g = v.reducedMotion, y = v.skipAnimations, T = K.useRef(null), _ = K.useRef(!1);
  u = u || m.renderer, !T.current && u && (T.current = u(a, {
    visualState: l,
    parent: d,
    props: r,
    presenceContext: b,
    blockInitialAnimation: b ? b.initial === !1 : !1,
    reducedMotionConfig: g,
    skipAnimations: y,
    isSVG: h
  }), _.current && T.current && (T.current.manuallyAnimateOnMount = !0));
  const R = T.current, V = K.useContext(Ab);
  R && !R.projection && c && (R.type === "html" || R.type === "svg") && u3(T.current, r, c, V);
  const N = K.useRef(!1);
  K.useInsertionEffect(() => {
    R && N.current && R.update(r, b);
  });
  const j = r[Nv], H = K.useRef(!!j && typeof window < "u" && !window.MotionHandoffIsComplete?.(j) && window.MotionHasOptimisedAnimation?.(j));
  return dd(() => {
    _.current = !0, R && (N.current = !0, window.MotionIsMounted = !0, R.updateFeatures(), R.scheduleRenderMicrotask(), H.current && R.animationState && R.animationState.animateChanges());
  }), K.useEffect(() => {
    R && (!H.current && R.animationState && R.animationState.animateChanges(), H.current && (queueMicrotask(() => {
      window.MotionHandoffMarkAsComplete?.(j);
    }), H.current = !1), R.enteringChildren = void 0);
  }), R;
}
function u3(a, l, r, u) {
  const { layoutId: c, layout: h, drag: d, dragConstraints: m, layoutScroll: b, layoutRoot: v, layoutAnchor: g, layoutCrossfade: y } = l;
  a.projection = new r(a.latestValues, l["data-framer-portal-id"] ? void 0 : xb(a.parent)), a.projection.setOptions({
    layoutId: c,
    layout: h,
    alwaysMeasureLayout: !!d || m && Wa(m),
    visualElement: a,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof h == "string" ? h : "both",
    initialPromotionConfig: u,
    crossfade: y,
    layoutScroll: b,
    layoutRoot: v,
    layoutAnchor: g
  });
}
function xb(a) {
  if (a)
    return a.options.allowProjection !== !1 ? a.projection : xb(a.parent);
}
function Of(a, { forwardMotionProps: l = !1, type: r } = {}, u, c) {
  u && X2(u);
  const h = r ? r === "svg" : jd(a), d = h ? a3 : i3;
  function m(v, g) {
    let y;
    const T = {
      ...K.useContext(Bd),
      ...v,
      layoutId: r3(v)
    }, { isStatic: _ } = T, R = J2(v), V = d(v, _);
    if (!_ && typeof window < "u") {
      c3();
      const N = f3(T);
      y = N.MeasureLayout, R.visualElement = o3(a, V, T, c, N.ProjectionNode, h);
    }
    return St.jsxs(Ou.Provider, { value: R, children: [y && R.visualElement ? St.jsx(y, { visualElement: R.visualElement, ...T }) : null, t3(a, v, s3(V, R.visualElement, g), V, _, l, h)] });
  }
  m.displayName = `motion.${typeof a == "string" ? a : `create(${a.displayName ?? a.name ?? ""})`}`;
  const b = K.forwardRef(m);
  return b[l3] = a, b;
}
function r3({ layoutId: a }) {
  const l = K.useContext(cd).id;
  return l && a !== void 0 ? l + "-" + a : a;
}
function c3(a, l) {
  K.useContext(gb).strict;
}
function f3(a) {
  const l = vb(), { drag: r, layout: u } = l;
  if (!r && !u)
    return {};
  const c = { ...r, ...u };
  return {
    MeasureLayout: r?.isEnabled(a) || u?.isEnabled(a) ? c.MeasureLayout : void 0,
    ProjectionNode: c.ProjectionNode
  };
}
function d3(a, l) {
  if (typeof Proxy > "u")
    return Of;
  const r = /* @__PURE__ */ new Map(), u = (h, d) => Of(h, d, a, l), c = (h, d) => u(h, d);
  return new Proxy(c, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (h, d) => d === "create" ? u : (r.has(d) || r.set(d, Of(d, void 0, a, l)), r.get(d))
  });
}
const h3 = (a, l) => l.isSVG ?? jd(a) ? new qx(l) : new Bx(l, {
  allowProjection: a !== K.Fragment
});
class m3 extends zi {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(l) {
    super(l), l.animationState || (l.animationState = kx(l));
  }
  updateAnimationControlsSubscription() {
    const { animate: l } = this.node.getProps();
    Du(l) && (this.unmountControls = l.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: l } = this.node.getProps(), { animate: r } = this.node.prevProps || {};
    l !== r && this.updateAnimationControlsSubscription();
  }
  unmount() {
    this.node.animationState.reset(), this.unmountControls?.();
  }
}
let p3 = 0;
class y3 extends zi {
  constructor() {
    super(...arguments), this.id = p3++, this.isExitComplete = !1;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: l, onExitComplete: r } = this.node.presenceContext, { isPresent: u } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || l === u)
      return;
    if (l && u === !1) {
      if (this.isExitComplete) {
        const { initial: h, custom: d } = this.node.getProps();
        if (typeof h == "string" || typeof h == "object" && h !== null && !Array.isArray(h)) {
          const m = la(this.node, h, d);
          if (m) {
            const { transition: b, transitionEnd: v, ...g } = m;
            for (const y in g)
              this.node.getValue(y)?.jump(g[y]);
          }
        }
        this.node.animationState.reset(), this.node.animationState.animateChanges();
      } else
        this.node.animationState.setActive("exit", !1);
      this.isExitComplete = !1;
      return;
    }
    const c = this.node.animationState.setActive("exit", !l);
    r && !l && c.then(() => {
      this.isExitComplete = !0, r(this.id);
    });
  }
  mount() {
    const { register: l, onExitComplete: r } = this.node.presenceContext || {};
    r && r(this.id), l && (this.unmount = l(this.id));
  }
  unmount() {
  }
}
const g3 = {
  animation: {
    Feature: m3
  },
  exit: {
    Feature: y3
  }
};
function bs(a) {
  return {
    point: {
      x: a.pageX,
      y: a.pageY
    }
  };
}
const v3 = (a) => (l) => Rd(l) && a(l, bs(l));
function cs(a, l, r, u) {
  return ms(a, l, v3(r), u);
}
const Cb = ({ current: a }) => a ? a.ownerDocument.defaultView : null, D0 = (a, l) => Math.abs(a - l);
function b3(a, l) {
  const r = D0(a.x, l.x), u = D0(a.y, l.y);
  return Math.sqrt(r ** 2 + u ** 2);
}
const z0 = /* @__PURE__ */ new Set(["auto", "scroll"]);
class Mb {
  constructor(l, r, { transformPagePoint: u, contextWindow: c = window, dragSnapToOrigin: h = !1, distanceThreshold: d = 3, element: m } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (R) => {
      this.handleScroll(R.target);
    }, this.onWindowScroll = () => {
      this.handleScroll(window);
    }, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      this.lastRawMoveEventInfo && (this.lastMoveEventInfo = tu(this.lastRawMoveEventInfo, this.transformPagePoint));
      const R = Rf(this.lastMoveEventInfo, this.history), V = this.startEvent !== null, N = b3(R.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!V && !N)
        return;
      const { point: j } = R, { timestamp: H } = ye;
      this.history.push({ ...j, timestamp: H });
      const { onStart: q, onMove: X } = this.handlers;
      V || (q && q(this.lastMoveEvent, R), this.startEvent = this.lastMoveEvent), X && X(this.lastMoveEvent, R);
    }, this.handlePointerMove = (R, V) => {
      this.lastMoveEvent = R, this.lastRawMoveEventInfo = V, this.lastMoveEventInfo = tu(V, this.transformPagePoint), Lt.update(this.updatePoint, !0);
    }, this.handlePointerUp = (R, V) => {
      this.end();
      const { onEnd: N, onSessionEnd: j, resumeAnimation: H } = this.handlers;
      if ((this.dragSnapToOrigin || !this.startEvent) && H && H(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const q = Rf(R.type === "pointercancel" ? this.lastMoveEventInfo : tu(V, this.transformPagePoint), this.history);
      this.startEvent && N && N(R, q), j && j(R, q);
    }, !Rd(l))
      return;
    this.dragSnapToOrigin = h, this.handlers = r, this.transformPagePoint = u, this.distanceThreshold = d, this.contextWindow = c || window;
    const b = bs(l), v = tu(b, this.transformPagePoint), { point: g } = v, { timestamp: y } = ye;
    this.history = [{ ...g, timestamp: y }];
    const { onSessionStart: T } = r;
    T && T(l, Rf(v, this.history));
    const _ = { passive: !0, capture: !0 };
    this.removeListeners = ys(cs(this.contextWindow, "pointermove", this.handlePointerMove, _), cs(this.contextWindow, "pointerup", this.handlePointerUp, _), cs(this.contextWindow, "pointercancel", this.handlePointerUp, _)), m && this.startScrollTracking(m);
  }
  /**
   * Start tracking scroll on ancestors and window.
   */
  startScrollTracking(l) {
    let r = l.parentElement;
    for (; r; ) {
      const u = getComputedStyle(r);
      (z0.has(u.overflowX) || z0.has(u.overflowY)) && this.scrollPositions.set(r, {
        x: r.scrollLeft,
        y: r.scrollTop
      }), r = r.parentElement;
    }
    this.scrollPositions.set(window, {
      x: window.scrollX,
      y: window.scrollY
    }), window.addEventListener("scroll", this.onElementScroll, {
      capture: !0
    }), window.addEventListener("scroll", this.onWindowScroll), this.removeScrollListeners = () => {
      window.removeEventListener("scroll", this.onElementScroll, {
        capture: !0
      }), window.removeEventListener("scroll", this.onWindowScroll);
    };
  }
  /**
   * Handle scroll compensation during drag.
   *
   * For element scroll: adjusts history origin since pageX/pageY doesn't change.
   * For window scroll: adjusts lastMoveEventInfo since pageX/pageY would change.
   */
  handleScroll(l) {
    const r = this.scrollPositions.get(l);
    if (!r)
      return;
    const u = l === window, c = u ? { x: window.scrollX, y: window.scrollY } : {
      x: l.scrollLeft,
      y: l.scrollTop
    }, h = { x: c.x - r.x, y: c.y - r.y };
    h.x === 0 && h.y === 0 || (u ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += h.x, this.lastMoveEventInfo.point.y += h.y) : this.history.length > 0 && (this.history[0].x -= h.x, this.history[0].y -= h.y), this.scrollPositions.set(l, c), Lt.update(this.updatePoint, !0));
  }
  updateHandlers(l) {
    this.handlers = l;
  }
  end() {
    this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), Di(this.updatePoint);
  }
}
function tu(a, l) {
  return l ? { point: l(a.point) } : a;
}
function O0(a, l) {
  return { x: a.x - l.x, y: a.y - l.y };
}
function Rf({ point: a }, l) {
  return {
    point: a,
    delta: O0(a, Db(l)),
    offset: O0(a, S3(l)),
    velocity: T3(l, 0.1)
  };
}
function S3(a) {
  return a[0];
}
function Db(a) {
  return a[a.length - 1];
}
function T3(a, l) {
  if (a.length < 2)
    return { x: 0, y: 0 };
  let r = a.length - 1, u = null;
  const c = Db(a);
  for (; r >= 0 && (u = a[r], !(c.timestamp - u.timestamp > /* @__PURE__ */ Qe(l))); )
    r--;
  if (!u)
    return { x: 0, y: 0 };
  u === a[0] && a.length > 2 && c.timestamp - u.timestamp > /* @__PURE__ */ Qe(l) * 2 && (u = a[1]);
  const h = /* @__PURE__ */ tn(c.timestamp - u.timestamp);
  if (h === 0)
    return { x: 0, y: 0 };
  const d = {
    x: (c.x - u.x) / h,
    y: (c.y - u.y) / h
  };
  return d.x === 1 / 0 && (d.x = 0), d.y === 1 / 0 && (d.y = 0), d;
}
function E3(a, { min: l, max: r }, u) {
  return l !== void 0 && a < l ? a = u ? Bt(l, a, u.min) : Math.max(a, l) : r !== void 0 && a > r && (a = u ? Bt(r, a, u.max) : Math.min(a, r)), a;
}
function R0(a, l, r) {
  return {
    min: l !== void 0 ? a.min + l : void 0,
    max: r !== void 0 ? a.max + r - (a.max - a.min) : void 0
  };
}
function A3(a, { top: l, left: r, bottom: u, right: c }) {
  return {
    x: R0(a.x, r, c),
    y: R0(a.y, l, u)
  };
}
function w0(a, l) {
  let r = l.min - a.min, u = l.max - a.max;
  return l.max - l.min < a.max - a.min && ([r, u] = [u, r]), { min: r, max: u };
}
function x3(a, l) {
  return {
    x: w0(a.x, l.x),
    y: w0(a.y, l.y)
  };
}
function C3(a, l) {
  let r = 0.5;
  const u = xe(a), c = xe(l);
  return c > u ? r = /* @__PURE__ */ fs(l.min, l.max - u, a.min) : u > c && (r = /* @__PURE__ */ fs(a.min, a.max - c, l.min)), Rn(0, 1, r);
}
function M3(a, l) {
  const r = {};
  return l.min !== void 0 && (r.min = l.min - a.min), l.max !== void 0 && (r.max = l.max - a.min), r;
}
const sd = 0.35;
function D3(a = sd) {
  return a === !1 ? a = 0 : a === !0 && (a = sd), {
    x: _0(a, "left", "right"),
    y: _0(a, "top", "bottom")
  };
}
function _0(a, l, r) {
  return {
    min: N0(a, l),
    max: N0(a, r)
  };
}
function N0(a, l) {
  return typeof a == "number" ? a : a[l] || 0;
}
const z3 = /* @__PURE__ */ new WeakMap();
class O3 {
  constructor(l) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ie(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = l;
  }
  start(l, { snapToCursor: r = !1, distanceThreshold: u } = {}) {
    const { presenceContext: c } = this.visualElement;
    if (c && c.isPresent === !1)
      return;
    const h = (y) => {
      r && this.snapToCursor(bs(y).point), this.stopAnimation();
    }, d = (y, T) => {
      const { drag: _, dragPropagation: R, onDragStart: V } = this.getProps();
      if (_ && !R && (this.openDragLock && this.openDragLock(), this.openDragLock = ex(_), !this.openDragLock))
        return;
      this.latestPointerEvent = y, this.latestPanInfo = T, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Dn((j) => {
        let H = this.getAxisMotionValue(j).get() || 0;
        if (On.test(H)) {
          const { projection: q } = this.visualElement;
          if (q && q.layout) {
            const X = q.layout.layoutBox[j];
            X && (H = xe(X) * (parseFloat(H) / 100));
          }
        }
        this.originPoint[j] = H;
      }), V && Lt.update(() => V(y, T), !1, !0), Ff(this.visualElement, "transform");
      const { animationState: N } = this.visualElement;
      N && N.setActive("whileDrag", !0);
    }, m = (y, T) => {
      this.latestPointerEvent = y, this.latestPanInfo = T;
      const { dragPropagation: _, dragDirectionLock: R, onDirectionLock: V, onDrag: N } = this.getProps();
      if (!_ && !this.openDragLock)
        return;
      const { offset: j } = T;
      if (R && this.currentDirection === null) {
        this.currentDirection = w3(j), this.currentDirection !== null && V && V(this.currentDirection);
        return;
      }
      this.updateAxis("x", T.point, j), this.updateAxis("y", T.point, j), this.visualElement.render(), N && Lt.update(() => N(y, T), !1, !0);
    }, b = (y, T) => {
      this.latestPointerEvent = y, this.latestPanInfo = T, this.stop(y, T), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, v = () => {
      const { dragSnapToOrigin: y } = this.getProps();
      (y || this.constraints) && this.startAnimation({ x: 0, y: 0 });
    }, { dragSnapToOrigin: g } = this.getProps();
    this.panSession = new Mb(l, {
      onSessionStart: h,
      onStart: d,
      onMove: m,
      onSessionEnd: b,
      resumeAnimation: v
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: g,
      distanceThreshold: u,
      contextWindow: Cb(this.visualElement),
      element: this.visualElement.current
    });
  }
  /**
   * @internal
   */
  stop(l, r) {
    const u = l || this.latestPointerEvent, c = r || this.latestPanInfo, h = this.isDragging;
    if (this.cancel(), !h || !c || !u)
      return;
    const { velocity: d } = c;
    this.startAnimation(d);
    const { onDragEnd: m } = this.getProps();
    m && Lt.postRender(() => m(u, c));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: l, animationState: r } = this.visualElement;
    l && (l.isAnimationBlocked = !1), this.endPanSession();
    const { dragPropagation: u } = this.getProps();
    !u && this.openDragLock && (this.openDragLock(), this.openDragLock = null), r && r.setActive("whileDrag", !1);
  }
  /**
   * Clean up the pan session without modifying other drag state.
   * This is used during unmount to ensure event listeners are removed
   * without affecting projection animations or drag locks.
   * @internal
   */
  endPanSession() {
    this.panSession && this.panSession.end(), this.panSession = void 0;
  }
  updateAxis(l, r, u) {
    const { drag: c } = this.getProps();
    if (!u || !eu(l, c, this.currentDirection))
      return;
    const h = this.getAxisMotionValue(l);
    let d = this.originPoint[l] + u[l];
    this.constraints && this.constraints[l] && (d = E3(d, this.constraints[l], this.elastic[l])), h.set(d);
  }
  resolveConstraints() {
    const { dragConstraints: l, dragElastic: r } = this.getProps(), u = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, c = this.constraints;
    l && Wa(l) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : l && u ? this.constraints = A3(u.layoutBox, l) : this.constraints = !1, this.elastic = D3(r), c !== this.constraints && !Wa(l) && u && this.constraints && !this.hasMutatedConstraints && Dn((h) => {
      this.constraints !== !1 && this.getAxisMotionValue(h) && (this.constraints[h] = M3(u.layoutBox[h], this.constraints[h]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: l, onMeasureDragConstraints: r } = this.getProps();
    if (!l || !Wa(l))
      return !1;
    const u = l.current, { projection: c } = this.visualElement;
    if (!c || !c.layout)
      return !1;
    c.root && (c.root.scroll = void 0, c.root.updateScroll());
    const h = Rx(u, c.root, this.visualElement.getTransformPagePoint());
    let d = x3(c.layout.layoutBox, h);
    if (r) {
      const m = r(Dx(d));
      this.hasMutatedConstraints = !!m, m && (d = Pv(m));
    }
    return d;
  }
  startAnimation(l) {
    const { drag: r, dragMomentum: u, dragElastic: c, dragTransition: h, dragSnapToOrigin: d, onDragTransitionEnd: m } = this.getProps(), b = this.constraints || {}, v = Dn((g) => {
      if (!eu(g, r, this.currentDirection))
        return;
      let y = b && b[g] || {};
      (d === !0 || d === g) && (y = { min: 0, max: 0 });
      const T = c ? 200 : 1e6, _ = c ? 40 : 1e7, R = {
        type: "inertia",
        velocity: u ? l[g] : 0,
        bounceStiffness: T,
        bounceDamping: _,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...h,
        ...y
      };
      return this.startAxisValueAnimation(g, R);
    });
    return Promise.all(v).then(m);
  }
  startAxisValueAnimation(l, r) {
    const u = this.getAxisMotionValue(l);
    return Ff(this.visualElement, l), u.start(Cd(l, u, 0, r, this.visualElement, !1));
  }
  stopAnimation() {
    Dn((l) => this.getAxisMotionValue(l).stop());
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(l) {
    const r = `_drag${l.toUpperCase()}`, c = this.visualElement.getProps()[r];
    return c || this.visualElement.getValue(l, this.visualElement.latestValues[l] ?? 0);
  }
  snapToCursor(l) {
    Dn((r) => {
      const { drag: u } = this.getProps();
      if (!eu(r, u, this.currentDirection))
        return;
      const { projection: c } = this.visualElement, h = this.getAxisMotionValue(r);
      if (c && c.layout) {
        const { min: d, max: m } = c.layout.layoutBox[r], b = h.get() || 0;
        h.set(l[r] - Bt(d, m, 0.5) + b);
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: l, dragConstraints: r } = this.getProps(), { projection: u } = this.visualElement;
    if (!Wa(r) || !u || !this.constraints)
      return;
    this.stopAnimation();
    const c = { x: 0, y: 0 };
    Dn((d) => {
      const m = this.getAxisMotionValue(d);
      if (m && this.constraints !== !1) {
        const b = m.get();
        c[d] = C3({ min: b, max: b }, this.constraints[d]);
      }
    });
    const { transformTemplate: h } = this.visualElement.getProps();
    this.visualElement.current.style.transform = h ? h({}, "") : "none", u.root && u.root.updateScroll(), u.updateLayout(), this.constraints = !1, this.resolveConstraints(), Dn((d) => {
      if (!eu(d, l, null))
        return;
      const m = this.getAxisMotionValue(d), { min: b, max: v } = this.constraints[d];
      m.set(Bt(b, v, c[d]));
    }), this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    z3.set(this.visualElement, this);
    const l = this.visualElement.current, r = cs(l, "pointerdown", (v) => {
      const { drag: g, dragListener: y = !0 } = this.getProps(), T = v.target, _ = T !== l && ox(T);
      g && y && !_ && this.start(v);
    });
    let u;
    const c = () => {
      const { dragConstraints: v } = this.getProps();
      Wa(v) && v.current && (this.constraints = this.resolveRefConstraints(), u || (u = R3(l, v.current, () => this.scalePositionWithinConstraints())));
    }, { projection: h } = this.visualElement, d = h.addEventListener("measure", c);
    h && !h.layout && (h.root && h.root.updateScroll(), h.updateLayout()), Lt.read(c);
    const m = ms(window, "resize", () => this.scalePositionWithinConstraints()), b = h.addEventListener("didUpdate", (({ delta: v, hasLayoutChanged: g }) => {
      this.isDragging && g && (Dn((y) => {
        const T = this.getAxisMotionValue(y);
        T && (this.originPoint[y] += v[y].translate, T.set(T.get() + v[y].translate));
      }), this.visualElement.render());
    }));
    return () => {
      m(), r(), d(), b && b(), u && u();
    };
  }
  getProps() {
    const l = this.visualElement.getProps(), { drag: r = !1, dragDirectionLock: u = !1, dragPropagation: c = !1, dragConstraints: h = !1, dragElastic: d = sd, dragMomentum: m = !0 } = l;
    return {
      ...l,
      drag: r,
      dragDirectionLock: u,
      dragPropagation: c,
      dragConstraints: h,
      dragElastic: d,
      dragMomentum: m
    };
  }
}
function V0(a) {
  let l = !0;
  return () => {
    if (l) {
      l = !1;
      return;
    }
    a();
  };
}
function R3(a, l, r) {
  const u = Yg(a, V0(r)), c = Yg(l, V0(r));
  return () => {
    u(), c();
  };
}
function eu(a, l, r) {
  return (l === !0 || l === a) && (r === null || r === a);
}
function w3(a, l = 10) {
  let r = null;
  return Math.abs(a.y) > l ? r = "y" : Math.abs(a.x) > l && (r = "x"), r;
}
class _3 extends zi {
  constructor(l) {
    super(l), this.removeGroupControls = en, this.removeListeners = en, this.controls = new O3(l);
  }
  mount() {
    const { dragControls: l } = this.node.getProps();
    l && (this.removeGroupControls = l.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || en;
  }
  update() {
    const { dragControls: l } = this.node.getProps(), { dragControls: r } = this.node.prevProps || {};
    l !== r && (this.removeGroupControls(), l && (this.removeGroupControls = l.subscribe(this.controls)));
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
  }
}
const wf = (a) => (l, r) => {
  a && Lt.update(() => a(l, r), !1, !0);
};
class N3 extends zi {
  constructor() {
    super(...arguments), this.removePointerDownListener = en;
  }
  onPointerDown(l) {
    this.session = new Mb(l, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Cb(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: l, onPanStart: r, onPan: u, onPanEnd: c } = this.node.getProps();
    return {
      onSessionStart: wf(l),
      onStart: wf(r),
      onMove: wf(u),
      onEnd: (h, d) => {
        delete this.session, c && Lt.postRender(() => c(h, d));
      }
    };
  }
  mount() {
    this.removePointerDownListener = cs(this.node.current, "pointerdown", (l) => this.onPointerDown(l));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
let _f = !1;
class V3 extends K.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: l, layoutGroup: r, switchLayoutGroup: u, layoutId: c } = this.props, { projection: h } = l;
    h && (r.group && r.group.add(h), u && u.register && c && u.register(h), _f && h.root.didUpdate(), h.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), h.setOptions({
      ...h.options,
      layoutDependency: this.props.layoutDependency,
      onExitComplete: () => this.safeToRemove()
    })), du.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(l) {
    const { layoutDependency: r, visualElement: u, drag: c, isPresent: h } = this.props, { projection: d } = u;
    return d && (d.isPresent = h, l.layoutDependency !== r && d.setOptions({
      ...d.options,
      layoutDependency: r
    }), _f = !0, c || l.layoutDependency !== r || r === void 0 || l.isPresent !== h ? d.willUpdate() : this.safeToRemove(), l.isPresent !== h && (h ? d.promote() : d.relegate() || Lt.postRender(() => {
      const m = d.getStack();
      (!m || !m.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { visualElement: l, layoutAnchor: r } = this.props, { projection: u } = l;
    u && (u.options.layoutAnchor = r, u.root.didUpdate(), Od.postRender(() => {
      !u.currentAnimation && u.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: l, layoutGroup: r, switchLayoutGroup: u } = this.props, { projection: c } = l;
    _f = !0, c && (c.scheduleCheckAfterUnmount(), r && r.group && r.group.remove(c), u && u.deregister && u.deregister(c));
  }
  safeToRemove() {
    const { safeToRemove: l } = this.props;
    l && l();
  }
  render() {
    return null;
  }
}
function zb(a) {
  const [l, r] = yb(), u = K.useContext(cd);
  return St.jsx(V3, { ...a, layoutGroup: u, switchLayoutGroup: K.useContext(Ab), isPresent: l, safeToRemove: r });
}
const U3 = {
  pan: {
    Feature: N3
  },
  drag: {
    Feature: _3,
    ProjectionNode: pb,
    MeasureLayout: zb
  }
};
function U0(a, l, r) {
  const { props: u } = a;
  a.animationState && u.whileHover && a.animationState.setActive("whileHover", r === "Start");
  const c = "onHover" + r, h = u[c];
  h && Lt.postRender(() => h(l, bs(l)));
}
class B3 extends zi {
  mount() {
    const { current: l } = this.node;
    l && (this.unmount = ix(l, (r, u) => (U0(this.node, u, "Start"), (c) => U0(this.node, c, "End"))));
  }
  unmount() {
  }
}
class L3 extends zi {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let l = !1;
    try {
      l = this.node.current.matches(":focus-visible");
    } catch {
      l = !0;
    }
    !l || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = ys(ms(this.node.current, "focus", () => this.onFocus()), ms(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function B0(a, l, r) {
  const { props: u } = a;
  if (a.current instanceof HTMLButtonElement && a.current.disabled)
    return;
  a.animationState && u.whileTap && a.animationState.setActive("whileTap", r === "Start");
  const c = "onTap" + (r === "End" ? "" : r), h = u[c];
  h && Lt.postRender(() => h(l, bs(l)));
}
class j3 extends zi {
  mount() {
    const { current: l } = this.node;
    if (!l)
      return;
    const { globalTapTarget: r, propagate: u } = this.node.props;
    this.unmount = rx(l, (c, h) => (B0(this.node, h, "Start"), (d, { success: m }) => B0(this.node, d, m ? "End" : "Cancel")), {
      useGlobalTarget: r,
      stopPropagation: u?.tap === !1
    });
  }
  unmount() {
  }
}
const od = /* @__PURE__ */ new WeakMap(), Nf = /* @__PURE__ */ new WeakMap(), H3 = (a) => {
  const l = od.get(a.target);
  l && l(a);
}, G3 = (a) => {
  a.forEach(H3);
};
function Y3({ root: a, ...l }) {
  const r = a || document;
  Nf.has(r) || Nf.set(r, {});
  const u = Nf.get(r), c = JSON.stringify(l);
  return u[c] || (u[c] = new IntersectionObserver(G3, { root: a, ...l })), u[c];
}
function q3(a, l, r) {
  const u = Y3(l);
  return od.set(a, r), u.observe(a), () => {
    od.delete(a), u.unobserve(a);
  };
}
const X3 = {
  some: 0,
  all: 1
};
class Q3 extends zi {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.stopObserver?.();
    const { viewport: l = {} } = this.node.getProps(), { root: r, margin: u, amount: c = "some", once: h } = l, d = {
      root: r ? r.current : void 0,
      rootMargin: u,
      threshold: typeof c == "number" ? c : X3[c]
    }, m = (b) => {
      const { isIntersecting: v } = b;
      if (this.isInView === v || (this.isInView = v, h && !v && this.hasEnteredView))
        return;
      v && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", v);
      const { onViewportEnter: g, onViewportLeave: y } = this.node.getProps(), T = v ? g : y;
      T && T(b);
    };
    this.stopObserver = q3(this.node.current, d, m);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: l, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(Z3(l, r)) && this.startObserver();
  }
  unmount() {
    this.stopObserver?.(), this.hasEnteredView = !1, this.isInView = !1;
  }
}
function Z3({ viewport: a = {} }, { viewport: l = {} } = {}) {
  return (r) => a[r] !== l[r];
}
const K3 = {
  inView: {
    Feature: Q3
  },
  tap: {
    Feature: j3
  },
  focus: {
    Feature: L3
  },
  hover: {
    Feature: B3
  }
}, k3 = {
  layout: {
    ProjectionNode: pb,
    MeasureLayout: zb
  }
}, J3 = {
  ...g3,
  ...K3,
  ...U3,
  ...k3
}, P3 = /* @__PURE__ */ d3(J3, h3), nl = P3;
function Ob(a) {
  var l, r, u = "";
  if (typeof a == "string" || typeof a == "number") u += a;
  else if (typeof a == "object") if (Array.isArray(a)) {
    var c = a.length;
    for (l = 0; l < c; l++) a[l] && (r = Ob(a[l])) && (u && (u += " "), u += r);
  } else for (r in a) a[r] && (u && (u += " "), u += r);
  return u;
}
function F3() {
  for (var a, l, r = 0, u = "", c = arguments.length; r < c; r++) (a = arguments[r]) && (l = Ob(a)) && (u && (u += " "), u += l);
  return u;
}
const I3 = (a, l) => {
  const r = new Array(a.length + l.length);
  for (let u = 0; u < a.length; u++)
    r[u] = a[u];
  for (let u = 0; u < l.length; u++)
    r[a.length + u] = l[u];
  return r;
}, W3 = (a, l) => ({
  classGroupId: a,
  validator: l
}), Rb = (a = /* @__PURE__ */ new Map(), l = null, r) => ({
  nextPart: a,
  validators: l,
  classGroupId: r
}), Au = "-", L0 = [], $3 = "arbitrary..", tC = (a) => {
  const l = nC(a), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: u
  } = a;
  return {
    getClassGroupId: (d) => {
      if (d.startsWith("[") && d.endsWith("]"))
        return eC(d);
      const m = d.split(Au), b = m[0] === "" && m.length > 1 ? 1 : 0;
      return wb(m, b, l);
    },
    getConflictingClassGroupIds: (d, m) => {
      if (m) {
        const b = u[d], v = r[d];
        return b ? v ? I3(v, b) : b : v || L0;
      }
      return r[d] || L0;
    }
  };
}, wb = (a, l, r) => {
  if (a.length - l === 0)
    return r.classGroupId;
  const c = a[l], h = r.nextPart.get(c);
  if (h) {
    const v = wb(a, l + 1, h);
    if (v) return v;
  }
  const d = r.validators;
  if (d === null)
    return;
  const m = l === 0 ? a.join(Au) : a.slice(l).join(Au), b = d.length;
  for (let v = 0; v < b; v++) {
    const g = d[v];
    if (g.validator(m))
      return g.classGroupId;
  }
}, eC = (a) => a.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const l = a.slice(1, -1), r = l.indexOf(":"), u = l.slice(0, r);
  return u ? $3 + u : void 0;
})(), nC = (a) => {
  const {
    theme: l,
    classGroups: r
  } = a;
  return iC(r, l);
}, iC = (a, l) => {
  const r = Rb();
  for (const u in a) {
    const c = a[u];
    Hd(c, r, u, l);
  }
  return r;
}, Hd = (a, l, r, u) => {
  const c = a.length;
  for (let h = 0; h < c; h++) {
    const d = a[h];
    aC(d, l, r, u);
  }
}, aC = (a, l, r, u) => {
  if (typeof a == "string") {
    lC(a, l, r);
    return;
  }
  if (typeof a == "function") {
    sC(a, l, r, u);
    return;
  }
  oC(a, l, r, u);
}, lC = (a, l, r) => {
  const u = a === "" ? l : _b(l, a);
  u.classGroupId = r;
}, sC = (a, l, r, u) => {
  if (uC(a)) {
    Hd(a(u), l, r, u);
    return;
  }
  l.validators === null && (l.validators = []), l.validators.push(W3(r, a));
}, oC = (a, l, r, u) => {
  const c = Object.entries(a), h = c.length;
  for (let d = 0; d < h; d++) {
    const [m, b] = c[d];
    Hd(b, _b(l, m), r, u);
  }
}, _b = (a, l) => {
  let r = a;
  const u = l.split(Au), c = u.length;
  for (let h = 0; h < c; h++) {
    const d = u[h];
    let m = r.nextPart.get(d);
    m || (m = Rb(), r.nextPart.set(d, m)), r = m;
  }
  return r;
}, uC = (a) => "isThemeGetter" in a && a.isThemeGetter === !0, rC = (a) => {
  if (a < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let l = 0, r = /* @__PURE__ */ Object.create(null), u = /* @__PURE__ */ Object.create(null);
  const c = (h, d) => {
    r[h] = d, l++, l > a && (l = 0, u = r, r = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(h) {
      let d = r[h];
      if (d !== void 0)
        return d;
      if ((d = u[h]) !== void 0)
        return c(h, d), d;
    },
    set(h, d) {
      h in r ? r[h] = d : c(h, d);
    }
  };
}, ud = "!", j0 = ":", cC = [], H0 = (a, l, r, u, c) => ({
  modifiers: a,
  hasImportantModifier: l,
  baseClassName: r,
  maybePostfixModifierPosition: u,
  isExternal: c
}), fC = (a) => {
  const {
    prefix: l,
    experimentalParseClassName: r
  } = a;
  let u = (c) => {
    const h = [];
    let d = 0, m = 0, b = 0, v;
    const g = c.length;
    for (let V = 0; V < g; V++) {
      const N = c[V];
      if (d === 0 && m === 0) {
        if (N === j0) {
          h.push(c.slice(b, V)), b = V + 1;
          continue;
        }
        if (N === "/") {
          v = V;
          continue;
        }
      }
      N === "[" ? d++ : N === "]" ? d-- : N === "(" ? m++ : N === ")" && m--;
    }
    const y = h.length === 0 ? c : c.slice(b);
    let T = y, _ = !1;
    y.endsWith(ud) ? (T = y.slice(0, -1), _ = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      y.startsWith(ud) && (T = y.slice(1), _ = !0)
    );
    const R = v && v > b ? v - b : void 0;
    return H0(h, _, T, R);
  };
  if (l) {
    const c = l + j0, h = u;
    u = (d) => d.startsWith(c) ? h(d.slice(c.length)) : H0(cC, !1, d, void 0, !0);
  }
  if (r) {
    const c = u;
    u = (h) => r({
      className: h,
      parseClassName: c
    });
  }
  return u;
}, dC = (a) => {
  const l = /* @__PURE__ */ new Map();
  return a.orderSensitiveModifiers.forEach((r, u) => {
    l.set(r, 1e6 + u);
  }), (r) => {
    const u = [];
    let c = [];
    for (let h = 0; h < r.length; h++) {
      const d = r[h], m = d[0] === "[", b = l.has(d);
      m || b ? (c.length > 0 && (c.sort(), u.push(...c), c = []), u.push(d)) : c.push(d);
    }
    return c.length > 0 && (c.sort(), u.push(...c)), u;
  };
}, hC = (a) => ({
  cache: rC(a.cacheSize),
  parseClassName: fC(a),
  sortModifiers: dC(a),
  postfixLookupClassGroupIds: mC(a),
  ...tC(a)
}), mC = (a) => {
  const l = /* @__PURE__ */ Object.create(null), r = a.postfixLookupClassGroups;
  if (r)
    for (let u = 0; u < r.length; u++)
      l[r[u]] = !0;
  return l;
}, pC = /\s+/, yC = (a, l) => {
  const {
    parseClassName: r,
    getClassGroupId: u,
    getConflictingClassGroupIds: c,
    sortModifiers: h,
    postfixLookupClassGroupIds: d
  } = l, m = [], b = a.trim().split(pC);
  let v = "";
  for (let g = b.length - 1; g >= 0; g -= 1) {
    const y = b[g], {
      isExternal: T,
      modifiers: _,
      hasImportantModifier: R,
      baseClassName: V,
      maybePostfixModifierPosition: N
    } = r(y);
    if (T) {
      v = y + (v.length > 0 ? " " + v : v);
      continue;
    }
    let j = !!N, H;
    if (j) {
      const Q = V.substring(0, N);
      H = u(Q);
      const w = H && d[H] ? u(V) : void 0;
      w && w !== H && (H = w, j = !1);
    } else
      H = u(V);
    if (!H) {
      if (!j) {
        v = y + (v.length > 0 ? " " + v : v);
        continue;
      }
      if (H = u(V), !H) {
        v = y + (v.length > 0 ? " " + v : v);
        continue;
      }
      j = !1;
    }
    const q = _.length === 0 ? "" : _.length === 1 ? _[0] : h(_).join(":"), X = R ? q + ud : q, nt = X + H;
    if (m.indexOf(nt) > -1)
      continue;
    m.push(nt);
    const ot = c(H, j);
    for (let Q = 0; Q < ot.length; ++Q) {
      const w = ot[Q];
      m.push(X + w);
    }
    v = y + (v.length > 0 ? " " + v : v);
  }
  return v;
}, gC = (...a) => {
  let l = 0, r, u, c = "";
  for (; l < a.length; )
    (r = a[l++]) && (u = Nb(r)) && (c && (c += " "), c += u);
  return c;
}, Nb = (a) => {
  if (typeof a == "string")
    return a;
  let l, r = "";
  for (let u = 0; u < a.length; u++)
    a[u] && (l = Nb(a[u])) && (r && (r += " "), r += l);
  return r;
}, vC = (a, ...l) => {
  let r, u, c, h;
  const d = (b) => {
    const v = l.reduce((g, y) => y(g), a());
    return r = hC(v), u = r.cache.get, c = r.cache.set, h = m, m(b);
  }, m = (b) => {
    const v = u(b);
    if (v)
      return v;
    const g = yC(b, r);
    return c(b, g), g;
  };
  return h = d, (...b) => h(gC(...b));
}, bC = [], ne = (a) => {
  const l = (r) => r[a] || bC;
  return l.isThemeGetter = !0, l.themeKey = a, l;
}, Vb = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Ub = /^\((?:(\w[\w-]*):)?(.+)\)$/i, SC = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, TC = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, EC = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, AC = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/, xC = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, CC = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, xi = (a) => SC.test(a), gt = (a) => !!a && !Number.isNaN(Number(a)), Mn = (a) => !!a && Number.isInteger(Number(a)), Vf = (a) => a.endsWith("%") && gt(a.slice(0, -1)), Kn = (a) => TC.test(a), Bb = () => !0, MC = (a) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  EC.test(a) && !AC.test(a)
), Gd = () => !1, DC = (a) => xC.test(a), zC = (a) => CC.test(a), OC = (a) => !F(a) && !W(a), RC = (a) => a.startsWith("@container") && (a[10] === "/" && a[11] !== void 0 || a[11] === "s" && a[16] !== void 0 && a.startsWith("-size/", 10) || a[11] === "n" && a[18] !== void 0 && a.startsWith("-normal/", 10)), wC = (a) => Oi(a, Hb, Gd), F = (a) => Vb.test(a), ta = (a) => Oi(a, Gb, MC), G0 = (a) => Oi(a, HC, gt), _C = (a) => Oi(a, qb, Bb), NC = (a) => Oi(a, Yb, Gd), Y0 = (a) => Oi(a, Lb, Gd), VC = (a) => Oi(a, jb, zC), nu = (a) => Oi(a, Xb, DC), W = (a) => Ub.test(a), ls = (a) => sa(a, Gb), UC = (a) => sa(a, Yb), q0 = (a) => sa(a, Lb), BC = (a) => sa(a, Hb), LC = (a) => sa(a, jb), iu = (a) => sa(a, Xb, !0), jC = (a) => sa(a, qb, !0), Oi = (a, l, r) => {
  const u = Vb.exec(a);
  return u ? u[1] ? l(u[1]) : r(u[2]) : !1;
}, sa = (a, l, r = !1) => {
  const u = Ub.exec(a);
  return u ? u[1] ? l(u[1]) : r : !1;
}, Lb = (a) => a === "position" || a === "percentage", jb = (a) => a === "image" || a === "url", Hb = (a) => a === "length" || a === "size" || a === "bg-size", Gb = (a) => a === "length", HC = (a) => a === "number", Yb = (a) => a === "family-name", qb = (a) => a === "number" || a === "weight", Xb = (a) => a === "shadow", GC = () => {
  const a = ne("color"), l = ne("font"), r = ne("text"), u = ne("font-weight"), c = ne("tracking"), h = ne("leading"), d = ne("breakpoint"), m = ne("container"), b = ne("spacing"), v = ne("radius"), g = ne("shadow"), y = ne("inset-shadow"), T = ne("text-shadow"), _ = ne("drop-shadow"), R = ne("blur"), V = ne("perspective"), N = ne("aspect"), j = ne("ease"), H = ne("animate"), q = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], X = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], nt = () => [...X(), W, F], ot = () => ["auto", "hidden", "clip", "visible", "scroll"], Q = () => ["auto", "contain", "none"], w = () => [W, F, b], it = () => [xi, "full", "auto", ...w()], I = () => [Mn, "none", "subgrid", W, F], pt = () => ["auto", {
    span: ["full", Mn, W, F]
  }, Mn, W, F], Tt = () => [Mn, "auto", W, F], kt = () => ["auto", "min", "max", "fr", W, F], Xt = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], Ct = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], G = () => ["auto", ...w()], lt = () => [xi, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...w()], J = () => [m, xi, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...w()], dt = () => [xi, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...w()], Y = () => [a, W, F], Jt = () => [...X(), q0, Y0, {
    position: [W, F]
  }], Ce = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], dn = () => ["auto", "cover", "contain", BC, wC, {
    size: [W, F]
  }], A = () => [Vf, ls, ta], L = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    v,
    W,
    F
  ], k = () => ["", gt, ls, ta], at = () => ["solid", "dashed", "dotted", "double"], Et = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ut = () => [gt, Vf, q0, Y0], Mt = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    R,
    W,
    F
  ], $ = () => ["none", gt, W, F], rt = () => ["none", gt, W, F], _e = () => [gt, W, F], Jn = () => [xi, "full", ...w()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Kn],
      breakpoint: [Kn],
      color: [Bb],
      container: [Kn],
      "drop-shadow": [Kn],
      ease: ["in", "out", "in-out"],
      font: [OC],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Kn],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Kn],
      shadow: [Kn],
      spacing: ["px", gt],
      text: [Kn],
      "text-shadow": [Kn],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", xi, F, W, N]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Container Type
       * @see https://tailwindcss.com/docs/responsive-design#container-queries
       */
      "container-type": [{
        "@container": ["", "normal", "size", W, F]
      }],
      /**
       * Container Name
       * @see https://tailwindcss.com/docs/responsive-design#named-containers
       */
      "container-named": [RC],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [gt, "auto", F, W, m]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": q()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": q()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: nt()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: ot()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": ot()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": ot()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: Q()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": Q()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": Q()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Inset
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: it()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": it()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": it()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": it(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: it()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": it(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: it()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": it()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": it()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: it()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: it()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: it()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: it()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [Mn, "auto", W, F]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [xi, "full", "auto", m, ...w()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [gt, xi, "auto", "initial", "none", F]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", gt, W, F]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", gt, W, F]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Mn, "first", "last", "none", W, F]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": I()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: pt()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": Tt()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": Tt()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": I()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: pt()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": Tt()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": Tt()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": kt()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": kt()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: w()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": w()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": w()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...Xt(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...Ct(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...Ct()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...Xt()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...Ct(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...Ct(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": Xt()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...Ct(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...Ct()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: w()
      }],
      /**
       * Padding Inline
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: w()
      }],
      /**
       * Padding Block
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: w()
      }],
      /**
       * Padding Inline Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: w()
      }],
      /**
       * Padding Inline End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: w()
      }],
      /**
       * Padding Block Start
       * @see https://tailwindcss.com/docs/padding
       */
      pbs: [{
        pbs: w()
      }],
      /**
       * Padding Block End
       * @see https://tailwindcss.com/docs/padding
       */
      pbe: [{
        pbe: w()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: w()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: w()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: w()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: w()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: G()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: G()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: G()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: G()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: G()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: G()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: G()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: G()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: G()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: G()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: G()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": w()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": w()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: lt()
      }],
      /**
       * Inline Size
       * @see https://tailwindcss.com/docs/inline-size
       */
      "inline-size": [{
        inline: ["auto", ...J()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-inline-size
       */
      "min-inline-size": [{
        "min-inline": ["auto", ...J()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-inline-size
       */
      "max-inline-size": [{
        "max-inline": ["none", ...J()]
      }],
      /**
       * Block Size
       * @see https://tailwindcss.com/docs/block-size
       */
      "block-size": [{
        block: ["auto", ...dt()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-block-size
       */
      "min-block-size": [{
        "min-block": ["auto", ...dt()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-block-size
       */
      "max-block-size": [{
        "max-block": ["none", ...dt()]
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [m, "screen", ...lt()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          m,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...lt()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          m,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [d]
          },
          ...lt()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...lt()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...lt()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", "none", ...lt()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, ls, ta]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [u, jC, _C]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Vf, F]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [UC, NC, l]
      }],
      /**
       * Font Feature Settings
       * @see https://tailwindcss.com/docs/font-feature-settings
       */
      "font-features": [{
        "font-features": [F]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [c, W, F]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [gt, "none", W, G0]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          h,
          ...w()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", W, F]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", W, F]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: Y()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: Y()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...at(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [gt, "from-font", "auto", W, ta]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: Y()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [gt, "auto", W, F]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: w()
      }],
      /**
       * Tab Size
       * @see https://tailwindcss.com/docs/tab-size
       */
      "tab-size": [{
        tab: [Mn, W, F]
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", W, F]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", W, F]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: Jt()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: Ce()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: dn()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Mn, W, F],
          radial: ["", W, F],
          conic: ["", Mn, W, F]
        }, LC, VC]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: Y()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: A()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: A()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: A()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: Y()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: Y()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: Y()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: L()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": L()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": L()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": L()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": L()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": L()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": L()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": L()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": L()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": L()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": L()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": L()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": L()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": L()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": L()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: k()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": k()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": k()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": k()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": k()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-bs": [{
        "border-bs": k()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-be": [{
        "border-be": k()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": k()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": k()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": k()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": k()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": k()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": k()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...at(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...at(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: Y()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": Y()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": Y()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": Y()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": Y()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": Y()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": Y()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": Y()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": Y()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": Y()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": Y()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: Y()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...at(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [gt, W, F]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", gt, ls, ta]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: Y()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          // Deprecated since Tailwind CSS v4.0.0
          "inner",
          "none",
          g,
          iu,
          nu
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: Y()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", y, iu, nu]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": Y()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: k()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: Y()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [gt, ta]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": Y()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": k()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": Y()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", T, iu, nu]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": Y()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [gt, W, F]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Et(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Et()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [gt]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": ut()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": ut()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": Y()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": Y()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": ut()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": ut()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": Y()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": Y()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": ut()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": ut()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": Y()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": Y()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": ut()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": ut()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": Y()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": Y()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": ut()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": ut()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": Y()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": Y()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": ut()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": ut()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": Y()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": Y()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": ut()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": ut()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": Y()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": Y()
      }],
      "mask-image-radial": [{
        "mask-radial": [W, F]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": ut()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": ut()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": Y()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": Y()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": X()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [gt]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": ut()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": ut()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": Y()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": Y()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: Jt()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: Ce()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: dn()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", W, F]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          W,
          F
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: Mt()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [gt, W, F]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [gt, W, F]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          _,
          iu,
          nu
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": Y()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", gt, W, F]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [gt, W, F]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", gt, W, F]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [gt, W, F]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", gt, W, F]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          W,
          F
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": Mt()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [gt, W, F]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [gt, W, F]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", gt, W, F]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [gt, W, F]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", gt, W, F]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [gt, W, F]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [gt, W, F]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", gt, W, F]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": w()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": w()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": w()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", W, F]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [gt, "initial", W, F]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", j, W, F]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [gt, W, F]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", H, W, F]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [V, W, F]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": nt()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: $()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": $()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": $()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": $()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: rt()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": rt()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": rt()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": rt()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: _e()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": _e()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": _e()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [W, F, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: nt()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: Jn()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Jn()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Jn()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Jn()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      /**
       * Zoom
       * @see https://tailwindcss.com/docs/zoom
       */
      zoom: [{
        zoom: [Mn, W, F]
      }],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: Y()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: Y()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", W, F]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scrollbar Thumb Color
       * @see https://tailwindcss.com/docs/scrollbar-color
       */
      "scrollbar-thumb-color": [{
        "scrollbar-thumb": Y()
      }],
      /**
       * Scrollbar Track Color
       * @see https://tailwindcss.com/docs/scrollbar-color
       */
      "scrollbar-track-color": [{
        "scrollbar-track": Y()
      }],
      /**
       * Scrollbar Gutter
       * @see https://tailwindcss.com/docs/scrollbar-gutter
       */
      "scrollbar-gutter": [{
        "scrollbar-gutter": ["auto", "stable", "both"]
      }],
      /**
       * Scrollbar Width
       * @see https://tailwindcss.com/docs/scrollbar-width
       */
      "scrollbar-w": [{
        scrollbar: ["auto", "thin", "none"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": w()
      }],
      /**
       * Scroll Margin Inline
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": w()
      }],
      /**
       * Scroll Margin Block
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": w()
      }],
      /**
       * Scroll Margin Inline Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": w()
      }],
      /**
       * Scroll Margin Inline End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": w()
      }],
      /**
       * Scroll Margin Block Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbs": [{
        "scroll-mbs": w()
      }],
      /**
       * Scroll Margin Block End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbe": [{
        "scroll-mbe": w()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": w()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": w()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": w()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": w()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": w()
      }],
      /**
       * Scroll Padding Inline
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": w()
      }],
      /**
       * Scroll Padding Block
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": w()
      }],
      /**
       * Scroll Padding Inline Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": w()
      }],
      /**
       * Scroll Padding Inline End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": w()
      }],
      /**
       * Scroll Padding Block Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbs": [{
        "scroll-pbs": w()
      }],
      /**
       * Scroll Padding Block End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbe": [{
        "scroll-pbe": w()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": w()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": w()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": w()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": w()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", W, F]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...Y()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [gt, ls, ta, G0]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...Y()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      "container-named": ["container-type"],
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["start", "end", "right", "left"],
      "inset-y": ["inset-bs", "inset-be", "top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
      px: ["ps", "pe", "pr", "pl"],
      py: ["pbs", "pbe", "pt", "pb"],
      m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
      mx: ["ms", "me", "mr", "ml"],
      my: ["mbs", "mbe", "mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-s", "border-w-e", "border-w-r", "border-w-l"],
      "border-w-y": ["border-w-bs", "border-w-be", "border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-s", "border-color-e", "border-color-r", "border-color-l"],
      "border-color-y": ["border-color-bs", "border-color-be", "border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-ms", "scroll-me", "scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-ps", "scroll-pe", "scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    postfixLookupClassGroups: ["container-type"],
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, YC = /* @__PURE__ */ vC(GC);
function Ru(...a) {
  return YC(F3(a));
}
const Uf = [
  { x: 8, duration: 7, delay: 1, repeatDelay: 2, height: 130 },
  { x: 22, duration: 5, delay: 3, repeatDelay: 4, height: 90 },
  { x: 39, duration: 8, delay: 0, repeatDelay: 3, height: 150 },
  { x: 56, duration: 4.5, delay: 2, repeatDelay: 5, height: 115 },
  { x: 72, duration: 6, delay: 4, repeatDelay: 2, height: 170 },
  { x: 88, duration: 5.5, delay: 1, repeatDelay: 4, height: 105 }
];
function qC({ className: a }) {
  const l = K.useRef(null), r = K.useRef(null), [u, c] = K.useState([]);
  return K.useEffect(() => {
    const h = l.current, d = r.current;
    if (!h || !d) return;
    const m = [];
    return Array.from(h.querySelectorAll("[data-beam]")).forEach((v, g) => {
      let y = !1;
      const T = () => {
        if (y) return;
        const R = v.getBoundingClientRect(), V = d.getBoundingClientRect();
        if (R.bottom >= V.top && R.top < V.bottom + 3) {
          y = !0;
          const N = h.getBoundingClientRect(), j = Date.now() + g + Math.random();
          c((H) => [...H, { id: j, x: R.left - N.left, y: V.top - N.top }]), window.setTimeout(() => c((H) => H.filter((q) => q.id !== j)), 1100), window.setTimeout(() => {
            y = !1;
          }, (Uf[g].duration + Uf[g].repeatDelay) * 1e3);
        }
      }, _ = window.setInterval(T, 45);
      m.push(() => window.clearInterval(_));
    }), () => m.forEach((v) => v());
  }, []), /* @__PURE__ */ St.jsxs("div", { ref: l, className: Ru("beam-scene", a), "aria-hidden": "true", children: [
    Uf.map((h, d) => /* @__PURE__ */ St.jsx(
      nl.div,
      {
        "data-beam": !0,
        className: "beam",
        style: { left: `${h.x}%`, height: h.height },
        initial: { y: -220, opacity: 0 },
        animate: { y: "calc(100vh + 260px)", opacity: [0, 1, 1, 0.85] },
        transition: { duration: h.duration, delay: h.delay, repeat: 1 / 0, repeatType: "loop", repeatDelay: h.repeatDelay, ease: "linear" }
      },
      d
    )),
    /* @__PURE__ */ St.jsx("div", { ref: r, className: "beam-floor" }),
    /* @__PURE__ */ St.jsx(Y2, { children: u.map((h) => /* @__PURE__ */ St.jsxs(nl.div, { className: "absolute", style: { left: h.x, top: h.y }, initial: { opacity: 1 }, animate: { opacity: 0 }, exit: { opacity: 0 }, transition: { duration: 0.9 }, children: [
      Array.from({ length: 14 }, (d, m) => {
        const b = Math.PI * 2 * m / 14, v = 22 + m % 4 * 10;
        return /* @__PURE__ */ St.jsx(nl.span, { className: "beam-particle", initial: { x: 0, y: 0, scale: 1 }, animate: { x: Math.cos(b) * v, y: Math.sin(b) * v - 12, scale: 0, opacity: 0 }, transition: { duration: 0.7 + m % 3 * 0.1, ease: "easeOut" } }, m);
      }),
      /* @__PURE__ */ St.jsx(nl.div, { className: "absolute -left-12 -top-1 h-2 w-24 rounded-full bg-gradient-to-r from-transparent via-cyan-300 to-transparent", initial: { opacity: 1, scaleX: 0.3 }, animate: { opacity: 0, scaleX: 1.5 }, transition: { duration: 0.7 } })
    ] }, h.id)) })
  ] });
}
function Qb() {
  return /* @__PURE__ */ St.jsxs("div", { className: "aceternity-gradient-border", children: [
    /* @__PURE__ */ St.jsx(
      nl.div,
      {
        className: Ru(
          "aceternity-gradient-layer",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0%,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0%,#1ca0fb,#141316)]"
        ),
        animate: {
          backgroundPosition: [
            "0% 50%",
            "100% 50%",
            "0% 50%"
          ]
        },
        transition: {
          duration: 5,
          repeat: 1 / 0,
          repeatType: "reverse"
        },
        style: { backgroundSize: "400% 400%" }
      }
    ),
    /* @__PURE__ */ St.jsx("div", { className: "aceternity-gradient-inner" })
  ] });
}
function XC({
  number: a = 15,
  className: l
}) {
  const r = Array.from(
    { length: a },
    (u, c) => c
  );
  return /* @__PURE__ */ St.jsx(
    nl.div,
    {
      "aria-hidden": "true",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5 },
      className: "pointer-events-none absolute inset-0 overflow-hidden",
      children: r.map((u) => {
        const c = Math.random() * 100, h = Math.random() * 5, d = 5 + Math.random() * 5;
        return /* @__PURE__ */ St.jsx(
          "span",
          {
            className: Ru(
              "meteor-particle",
              l
            ),
            style: {
              left: `${c}%`,
              animationDelay: `${h}s`,
              animationDuration: `${d}s`
            }
          },
          u
        );
      })
    }
  );
}
const Zb = ({ className: a, fill: l }) => /* @__PURE__ */ St.jsxs(
  "svg",
  {
    className: Ru(
      "animate-spotlight pointer-events-none absolute z-[1]  h-[169%] w-[138%] lg:w-[84%] opacity-0",
      a
    ),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 3787 2842",
    fill: "none",
    children: [
      /* @__PURE__ */ St.jsx("g", { filter: "url(#filter)", children: /* @__PURE__ */ St.jsx(
        "ellipse",
        {
          cx: "1924.71",
          cy: "273.501",
          rx: "1924.71",
          ry: "273.501",
          transform: "matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)",
          fill: l || "white",
          fillOpacity: "0.21"
        }
      ) }),
      /* @__PURE__ */ St.jsx("defs", { children: /* @__PURE__ */ St.jsxs(
        "filter",
        {
          id: "filter",
          x: "0.860352",
          y: "0.838989",
          width: "3785.16",
          height: "2840.26",
          filterUnits: "userSpaceOnUse",
          colorInterpolationFilters: "sRGB",
          children: [
            /* @__PURE__ */ St.jsx("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
            /* @__PURE__ */ St.jsx(
              "feBlend",
              {
                mode: "normal",
                in: "SourceGraphic",
                in2: "BackgroundImageFix",
                result: "shape"
              }
            ),
            /* @__PURE__ */ St.jsx(
              "feGaussianBlur",
              {
                stdDeviation: "151",
                result: "effect1_foregroundBlur_1065_8"
              }
            )
          ]
        }
      ) })
    ]
  }
), X0 = document.getElementById(
  "quiz-animated-background"
);
X0 && ps.createRoot(X0).render(
  /* @__PURE__ */ St.jsx(qC, {})
);
document.querySelectorAll(".gradient-card").forEach((a, l) => {
  if (a.querySelector(".gradient-effect-mount")) return;
  const r = document.createElement("div");
  r.className = "gradient-effect-mount", r.setAttribute("aria-hidden", "true"), a.prepend(r), ps.createRoot(r).render(
    /* @__PURE__ */ St.jsxs(St.Fragment, { children: [
      /* @__PURE__ */ St.jsx(Qb, {}),
      l !== 1 && /* @__PURE__ */ St.jsx(XC, { number: 12 })
    ] })
  );
});
const Q0 = document.getElementById(
  "navbar-gradient-mount"
);
Q0 && ps.createRoot(Q0).render(
  /* @__PURE__ */ St.jsx(Qb, {})
);
const Z0 = document.getElementById(
  "character-spotlight-mount"
);
Z0 && ps.createRoot(Z0).render(
  /* @__PURE__ */ St.jsx(
    Zb,
    {
      className: "!top-[-50%] !left-[-30%] !h-[300%] !w-[300%]",
      fill: "#c4b5fd"
    }
  )
);
const Bf = document.getElementById("characterList");
if (Bf) {
  const a = /* @__PURE__ */ new Map(), l = () => {
    Bf.querySelectorAll(".character-card").forEach((c) => {
      let h = c.querySelector(
        ".character-spotlight-mount"
      );
      h || (h = document.createElement("div"), h.className = "character-spotlight-mount", h.setAttribute("aria-hidden", "true"), c.prepend(h));
      let d = a.get(c);
      d || (d = ps.createRoot(h), a.set(c, d));
      const m = c.classList.contains("selected"), b = h.dataset.selected === "true";
      m !== b && (h.dataset.selected = String(m), d.render(
        m ? /* @__PURE__ */ St.jsx(
          Zb,
          {
            className: "!top-[-45%] !left-[-15%] !h-[300%] lg:!w-[300%]",
            fill: "#c4b5fd"
          }
        ) : null
      ));
    });
  };
  l(), new MutationObserver(() => {
    l();
  }).observe(Bf, {
    childList: !0,
    subtree: !0,
    attributes: !0,
    attributeFilter: ["class"]
  });
}
