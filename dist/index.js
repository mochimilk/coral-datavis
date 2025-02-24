var yr = Object.defineProperty;
var br = (i, n, s) => n in i ? yr(i, n, { enumerable: !0, configurable: !0, writable: !0, value: s }) : i[n] = s;
var le = (i, n, s) => br(i, typeof n != "symbol" ? n + "" : n, s);
import j, { useState as H, useEffect as ue } from "react";
import { Avatar as Rr, Subtitle2 as Er, Toolbar as Ne, ToggleButton as wr, Body1Strong as ce, Button as Sr } from "@fluentui/react-components";
import { bundleIcon as c, SendFilled as _r, SendRegular as jr, CopyFilled as Cr, CopyRegular as Pr, MoreHorizontalFilled as Tr, MoreHorizontalRegular as kr, ArrowExitFilled as Fr, ArrowExitRegular as Or, BookmarkFilled as Dr, BookmarkRegular as Ar, SparkleFilled as Wr, SparkleRegular as Ir, StarFilled as Mr, StarRegular as Lr, DocumentSparkleFilled as Nr, DocumentSparkleRegular as Vr, DismissFilled as Hr, DismissRegular as Br, DrawerArrowDownloadFilled as Yr, DrawerArrowDownloadRegular as $r, BeakerFilled as zr, BeakerRegular as Ur, CodeFilled as Xr, CodeRegular as Jr, CubeFilled as qr, CubeRegular as Kr, DesignIdeasFilled as Gr, DesignIdeasRegular as Zr, FlowFilled as Qr, FlowRegular as et, FolderOpenFilled as rt, FolderOpenRegular as tt, LeafOneFilled as nt, LeafOneRegular as at, LinkFilled as ot, LinkRegular as it, OpenFilled as lt, OpenRegular as st, OrganizationHorizontalFilled as ut, OrganizationHorizontalRegular as ct, PanelLeftContractFilled as ft, PanelLeftContractRegular as dt, PanelLeftExpandFilled as vt, PanelLeftExpandRegular as pt, PanelRightContractFilled as ht, PanelRightContractRegular as gt, PanelRightExpandFilled as mt, PanelRightExpandRegular as xt, PersonFilled as yt, PersonRegular as bt, PersonFeedbackFilled as Rt, PersonFeedbackRegular as Et, SearchFilled as wt, SearchRegular as St, ShareFilled as _t, ShareRegular as jt, TreeDeciduousFilled as Ct, TreeDeciduousRegular as Pt, TreeEvergreenFilled as Tt, TreeEvergreenRegular as kt, WeatherMoonFilled as Ft, WeatherMoonRegular as Ot, WeatherSunnyFilled as Dt, WeatherSunnyRegular as At } from "@fluentui/react-icons";
var se = { exports: {} }, $ = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ie;
function Wt() {
  if (Ie) return $;
  Ie = 1;
  var i = j, n = Symbol.for("react.element"), s = Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, b = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, F = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(R, v, P) {
    var E, m = {}, T = null, W = null;
    P !== void 0 && (T = "" + P), v.key !== void 0 && (T = "" + v.key), v.ref !== void 0 && (W = v.ref);
    for (E in v) h.call(v, E) && !F.hasOwnProperty(E) && (m[E] = v[E]);
    if (R && R.defaultProps) for (E in v = R.defaultProps, v) m[E] === void 0 && (m[E] = v[E]);
    return { $$typeof: n, type: R, key: T, ref: W, props: m, _owner: b.current };
  }
  return $.Fragment = s, $.jsx = p, $.jsxs = p, $;
}
var z = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Me;
function It() {
  return Me || (Me = 1, process.env.NODE_ENV !== "production" && function() {
    var i = j, n = Symbol.for("react.element"), s = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), F = Symbol.for("react.profiler"), p = Symbol.for("react.provider"), R = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), w = Symbol.iterator, D = "@@iterator";
    function A(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = w && e[w] || e[D];
      return typeof r == "function" ? r : null;
    }
    var O = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        Z("error", e, t);
      }
    }
    function Z(e, r, t) {
      {
        var a = O.ReactDebugCurrentFrame, f = a.getStackAddendum();
        f !== "" && (r += "%s", t = t.concat([f]));
        var d = t.map(function(u) {
          return String(u);
        });
        d.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var U = !1, Ve = !1, He = !1, Be = !1, Ye = !1, fe;
    fe = Symbol.for("react.module.reference");
    function $e(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === h || e === F || Ye || e === b || e === P || e === E || Be || e === W || U || Ve || He || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === m || e.$$typeof === p || e.$$typeof === R || e.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === fe || e.getModuleId !== void 0));
    }
    function ze(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var f = r.displayName || r.name || "";
      return f !== "" ? t + "(" + f + ")" : t;
    }
    function de(e) {
      return e.displayName || "Context";
    }
    function I(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case h:
          return "Fragment";
        case s:
          return "Portal";
        case F:
          return "Profiler";
        case b:
          return "StrictMode";
        case P:
          return "Suspense";
        case E:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var r = e;
            return de(r) + ".Consumer";
          case p:
            var t = e;
            return de(t._context) + ".Provider";
          case v:
            return ze(e, e.render, "ForwardRef");
          case m:
            var a = e.displayName || null;
            return a !== null ? a : I(e.type) || "Memo";
          case T: {
            var f = e, d = f._payload, u = f._init;
            try {
              return I(u(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var M = Object.assign, B = 0, ve, pe, he, ge, me, xe, ye;
    function be() {
    }
    be.__reactDisabledLog = !0;
    function Ue() {
      {
        if (B === 0) {
          ve = console.log, pe = console.info, he = console.warn, ge = console.error, me = console.group, xe = console.groupCollapsed, ye = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: be,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        B++;
      }
    }
    function Xe() {
      {
        if (B--, B === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: M({}, e, {
              value: ve
            }),
            info: M({}, e, {
              value: pe
            }),
            warn: M({}, e, {
              value: he
            }),
            error: M({}, e, {
              value: ge
            }),
            group: M({}, e, {
              value: me
            }),
            groupCollapsed: M({}, e, {
              value: xe
            }),
            groupEnd: M({}, e, {
              value: ye
            })
          });
        }
        B < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Q = O.ReactCurrentDispatcher, ee;
    function X(e, r, t) {
      {
        if (ee === void 0)
          try {
            throw Error();
          } catch (f) {
            var a = f.stack.trim().match(/\n( *(at )?)/);
            ee = a && a[1] || "";
          }
        return `
` + ee + e;
      }
    }
    var re = !1, J;
    {
      var Je = typeof WeakMap == "function" ? WeakMap : Map;
      J = new Je();
    }
    function Re(e, r) {
      if (!e || re)
        return "";
      {
        var t = J.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      re = !0;
      var f = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = Q.current, Q.current = null, Ue();
      try {
        if (r) {
          var u = function() {
            throw Error();
          };
          if (Object.defineProperty(u.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(u, []);
            } catch (_) {
              a = _;
            }
            Reflect.construct(e, [], u);
          } else {
            try {
              u.call();
            } catch (_) {
              a = _;
            }
            e.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_) {
            a = _;
          }
          e();
        }
      } catch (_) {
        if (_ && a && typeof _.stack == "string") {
          for (var l = _.stack.split(`
`), S = a.stack.split(`
`), g = l.length - 1, x = S.length - 1; g >= 1 && x >= 0 && l[g] !== S[x]; )
            x--;
          for (; g >= 1 && x >= 0; g--, x--)
            if (l[g] !== S[x]) {
              if (g !== 1 || x !== 1)
                do
                  if (g--, x--, x < 0 || l[g] !== S[x]) {
                    var k = `
` + l[g].replace(" at new ", " at ");
                    return e.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", e.displayName)), typeof e == "function" && J.set(e, k), k;
                  }
                while (g >= 1 && x >= 0);
              break;
            }
        }
      } finally {
        re = !1, Q.current = d, Xe(), Error.prepareStackTrace = f;
      }
      var V = e ? e.displayName || e.name : "", L = V ? X(V) : "";
      return typeof e == "function" && J.set(e, L), L;
    }
    function qe(e, r, t) {
      return Re(e, !1);
    }
    function Ke(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function q(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Re(e, Ke(e));
      if (typeof e == "string")
        return X(e);
      switch (e) {
        case P:
          return X("Suspense");
        case E:
          return X("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            return qe(e.render);
          case m:
            return q(e.type, r, t);
          case T: {
            var a = e, f = a._payload, d = a._init;
            try {
              return q(d(f), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var Y = Object.prototype.hasOwnProperty, Ee = {}, we = O.ReactDebugCurrentFrame;
    function K(e) {
      if (e) {
        var r = e._owner, t = q(e.type, e._source, r ? r.type : null);
        we.setExtraStackFrame(t);
      } else
        we.setExtraStackFrame(null);
    }
    function Ge(e, r, t, a, f) {
      {
        var d = Function.call.bind(Y);
        for (var u in e)
          if (d(e, u)) {
            var l = void 0;
            try {
              if (typeof e[u] != "function") {
                var S = Error((a || "React class") + ": " + t + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw S.name = "Invariant Violation", S;
              }
              l = e[u](r, u, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (g) {
              l = g;
            }
            l && !(l instanceof Error) && (K(f), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, u, typeof l), K(null)), l instanceof Error && !(l.message in Ee) && (Ee[l.message] = !0, K(f), y("Failed %s type: %s", t, l.message), K(null));
          }
      }
    }
    var Ze = Array.isArray;
    function te(e) {
      return Ze(e);
    }
    function Qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function er(e) {
      try {
        return Se(e), !1;
      } catch {
        return !0;
      }
    }
    function Se(e) {
      return "" + e;
    }
    function _e(e) {
      if (er(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qe(e)), Se(e);
    }
    var je = O.ReactCurrentOwner, rr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ce, Pe;
    function tr(e) {
      if (Y.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function nr(e) {
      if (Y.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ar(e, r) {
      typeof e.ref == "string" && je.current;
    }
    function or(e, r) {
      {
        var t = function() {
          Ce || (Ce = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function ir(e, r) {
      {
        var t = function() {
          Pe || (Pe = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var lr = function(e, r, t, a, f, d, u) {
      var l = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: u,
        // Record the component responsible for creating this element.
        _owner: d
      };
      return l._store = {}, Object.defineProperty(l._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(l, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(l, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.freeze && (Object.freeze(l.props), Object.freeze(l)), l;
    };
    function sr(e, r, t, a, f) {
      {
        var d, u = {}, l = null, S = null;
        t !== void 0 && (_e(t), l = "" + t), nr(r) && (_e(r.key), l = "" + r.key), tr(r) && (S = r.ref, ar(r, f));
        for (d in r)
          Y.call(r, d) && !rr.hasOwnProperty(d) && (u[d] = r[d]);
        if (e && e.defaultProps) {
          var g = e.defaultProps;
          for (d in g)
            u[d] === void 0 && (u[d] = g[d]);
        }
        if (l || S) {
          var x = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          l && or(u, x), S && ir(u, x);
        }
        return lr(e, l, S, f, a, je.current, u);
      }
    }
    var ne = O.ReactCurrentOwner, Te = O.ReactDebugCurrentFrame;
    function N(e) {
      if (e) {
        var r = e._owner, t = q(e.type, e._source, r ? r.type : null);
        Te.setExtraStackFrame(t);
      } else
        Te.setExtraStackFrame(null);
    }
    var ae;
    ae = !1;
    function oe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === n;
    }
    function ke() {
      {
        if (ne.current) {
          var e = I(ne.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ur(e) {
      return "";
    }
    var Fe = {};
    function cr(e) {
      {
        var r = ke();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Oe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = cr(r);
        if (Fe[t])
          return;
        Fe[t] = !0;
        var a = "";
        e && e._owner && e._owner !== ne.current && (a = " It was passed a child from " + I(e._owner.type) + "."), N(e), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), N(null);
      }
    }
    function De(e, r) {
      {
        if (typeof e != "object")
          return;
        if (te(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            oe(a) && Oe(a, r);
          }
        else if (oe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var f = A(e);
          if (typeof f == "function" && f !== e.entries)
            for (var d = f.call(e), u; !(u = d.next()).done; )
              oe(u.value) && Oe(u.value, r);
        }
      }
    }
    function fr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === m))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = I(r);
          Ge(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !ae) {
          ae = !0;
          var f = I(r);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function dr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            N(e), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), N(null);
            break;
          }
        }
        e.ref !== null && (N(e), y("Invalid attribute `ref` supplied to `React.Fragment`."), N(null));
      }
    }
    var Ae = {};
    function We(e, r, t, a, f, d) {
      {
        var u = $e(e);
        if (!u) {
          var l = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (l += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var S = ur();
          S ? l += S : l += ke();
          var g;
          e === null ? g = "null" : te(e) ? g = "array" : e !== void 0 && e.$$typeof === n ? (g = "<" + (I(e.type) || "Unknown") + " />", l = " Did you accidentally export a JSX literal instead of a component?") : g = typeof e, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", g, l);
        }
        var x = sr(e, r, t, f, d);
        if (x == null)
          return x;
        if (u) {
          var k = r.children;
          if (k !== void 0)
            if (a)
              if (te(k)) {
                for (var V = 0; V < k.length; V++)
                  De(k[V], e);
                Object.freeze && Object.freeze(k);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              De(k, e);
        }
        if (Y.call(r, "key")) {
          var L = I(e), _ = Object.keys(r).filter(function(xr) {
            return xr !== "key";
          }), ie = _.length > 0 ? "{key: someKey, " + _.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ae[L + ie]) {
            var mr = _.length > 0 ? "{" + _.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ie, L, mr, L), Ae[L + ie] = !0;
          }
        }
        return e === h ? dr(x) : fr(x), x;
      }
    }
    function vr(e, r, t) {
      return We(e, r, t, !0);
    }
    function pr(e, r, t) {
      return We(e, r, t, !1);
    }
    var hr = pr, gr = vr;
    z.Fragment = h, z.jsx = hr, z.jsxs = gr;
  }()), z;
}
process.env.NODE_ENV === "production" ? se.exports = Wt() : se.exports = It();
var o = se.exports;
const Mt = () => /* @__PURE__ */ o.jsxs(
  "svg",
  {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ o.jsx("path", { d: "M5.04349 5.04349H15.4783V15.4783H5.04349V5.04349Z", fill: "#F35325" }),
      /* @__PURE__ */ o.jsx("path", { d: "M16.5217 5.04349H26.9565V15.4783H16.5217V5.04349Z", fill: "#81BC06" }),
      /* @__PURE__ */ o.jsx("path", { d: "M5.04349 16.5217H15.4783V26.9565H5.04349V16.5217Z", fill: "#05A6F0" }),
      /* @__PURE__ */ o.jsx("path", { d: "M16.5217 16.5217H26.9565V26.9565H16.5217V16.5217Z", fill: "#FFBA08" })
    ]
  }
), $t = ({ logo: i, title: n = "Microsoft", subtitle: s, children: h }) => /* @__PURE__ */ o.jsxs(
  "header",
  {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      backgroundColor: "var(--colorNeutralBackgroundAlpha)",
      borderBottom: "1px solid var(--colorNeutralStroke2)",
      padding: "16px",
      height: "64px",
      boxSizing: "border-box",
      gap: "12px"
    },
    "data-figma-component": "Header",
    children: [
      /* @__PURE__ */ o.jsxs(
        "div",
        {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "8px"
          },
          children: [
            /* @__PURE__ */ o.jsx(Rr, { shape: "square", color: null, icon: i || /* @__PURE__ */ o.jsx(Mt, {}) }),
            /* @__PURE__ */ o.jsxs(Er, { style: { whiteSpace: "nowrap", marginTop: "-2px" }, children: [
              n,
              s && /* @__PURE__ */ o.jsxs("span", { style: { fontWeight: "400" }, children: [
                " | ",
                s
              ] })
            ] })
          ]
        }
      ),
      h
    ]
  }
), zt = ({ children: i }) => /* @__PURE__ */ o.jsx(
  Ne,
  {
    style: {
      display: "flex",
      flex: "0",
      alignItems: "center",
      flexDirection: "row-reverse",
      padding: "4px 0"
    },
    children: i
  }
);
class Lt {
  constructor() {
    le(this, "events", {});
    le(this, "panelWidth", 400);
  }
  // Shared default width for panels
  // Register an event listener
  on(n, s) {
    this.events[n] || (this.events[n] = []), this.events[n].push(s);
  }
  // Remove an event listener
  off(n, s) {
    this.events[n] && (this.events[n] = this.events[n].filter((h) => h !== s));
  }
  // Emit an event
  emit(n, ...s) {
    this.events[n] && this.events[n].forEach((h) => h(...s));
  }
  // Manage shared panel width
  setPanelWidth(n) {
    this.panelWidth = n, this.emit("panelWidthChanged", n);
  }
  getPanelWidth() {
    return this.panelWidth;
  }
}
const C = new Lt(), Ut = ({ children: i }) => {
  const [n, s] = H(null), h = ["first", "second", "third", "fourth"];
  ue(() => {
    const p = (R) => {
      s(R);
    };
    return C.on("setActivePanel", p), C.emit("setActivePanel", "first"), () => {
      C.off("setActivePanel", p);
    };
  }, []);
  const b = (p) => {
    C.emit("setActivePanel", n === p ? null : p);
  }, F = (p) => j.isValidElement(p) && p.type === wr;
  return /* @__PURE__ */ o.jsx(Ne, { style: { padding: "4px 0", display: "flex", flexDirection: "row-reverse" }, children: j.Children.map(i, (p, R) => {
    const v = h[R];
    return F(p) && v ? j.cloneElement(p, {
      onClick: () => b(v),
      checked: n === v
    }) : p;
  }) });
}, G = ({
  panelIcon: i,
  panelTitle: n,
  children: s
}) => /* @__PURE__ */ o.jsxs(
  "div",
  {
    className: "panelToolbar",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "16px",
      boxSizing: "border-box",
      height: "56px"
    },
    children: [
      (i || n) && /* @__PURE__ */ o.jsxs(
        "div",
        {
          className: "panelTitle",
          style: {
            display: "flex",
            alignItems: "center",
            gap: "6px",
            flexShrink: 1,
            // Allow shrinking when needed
            overflow: "hidden",
            minWidth: 0
            // Prevents breaking layout when shrinking
          },
          children: [
            i && /* @__PURE__ */ o.jsx(
              "div",
              {
                style: {
                  flexShrink: 0,
                  // Prevents icon from shrinking
                  display: "flex",
                  alignItems: "center"
                },
                children: i
              }
            ),
            n && /* @__PURE__ */ o.jsx(
              ce,
              {
                style: {
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                },
                children: n
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ o.jsx(
        "div",
        {
          className: "panelTools",
          style: {
            display: "flex",
            alignItems: "center",
            flexGrow: 1,
            // Allows `panelTools` to take the remaining space
            justifyContent: "flex-end",
            // Makes sure buttons hug their content
            minWidth: 0
            // Prevents layout breaking when content shrinks
          },
          children: s
        }
      )
    ]
  }
), Xt = ({
  panelWidth: i = 500,
  panelResize: n = !0,
  children: s
}) => {
  const [h, b] = H(i), [F, p] = H(!1);
  ue(() => {
    b(i);
  }, [i]);
  const R = (m) => {
    if (!n) return;
    const T = m.clientX, W = h, w = (A) => {
      const O = Math.min(
        500,
        Math.max(256, W + (A.clientX - T))
      );
      b(O);
    }, D = () => {
      document.removeEventListener("mousemove", w), document.removeEventListener("mouseup", D), document.body.style.userSelect = "";
    };
    document.addEventListener("mousemove", w), document.addEventListener("mouseup", D), document.body.style.userSelect = "none";
  }, v = j.Children.toArray(s), P = v.find(
    (m) => j.isValidElement(m) && m.type === G
  ), E = v.filter(
    (m) => !(j.isValidElement(m) && m.type === G)
  );
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: "panelLeft",
      style: {
        width: `${h}px`,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "var(--colorNeutralBackground4)",
        height: "100%",
        boxSizing: "border-box",
        position: "relative",
        borderRight: n ? F ? "2px solid var(--colorNeutralStroke2)" : "2px solid transparent" : "none"
      },
      children: [
        P && /* @__PURE__ */ o.jsx("div", { style: { flexShrink: 0 }, children: P }),
        /* @__PURE__ */ o.jsx(
          "div",
          {
            className: "panelContent",
            style: {
              flex: 1,
              overflowY: "auto"
              //   padding: "16px",
            },
            children: E
          }
        ),
        n && /* @__PURE__ */ o.jsx(
          "div",
          {
            className: "resizeHandle",
            onMouseDown: R,
            onMouseEnter: () => p(!0),
            onMouseLeave: () => p(!1),
            style: {
              position: "absolute",
              top: 0,
              right: 0,
              width: "2px",
              height: "100%",
              cursor: "ew-resize",
              zIndex: 1,
              backgroundColor: F ? "var(--colorNeutralStroke2)" : "transparent"
            }
          }
        )
      ]
    }
  );
};
c(_r, jr);
c(Cr, Pr);
c(Tr, kr);
c(Fr, Or);
c(Dr, Ar);
c(Wr, Ir);
c(Mr, Lr);
c(Nr, Vr);
const Nt = c(Hr, Br);
c(Yr, $r);
c(zr, Ur);
c(Xr, Jr);
c(qr, Kr);
c(Gr, Zr);
c(Qr, et);
c(rt, tt);
c(nt, at);
c(ot, it);
c(lt, st);
c(
  ut,
  ct
);
c(
  ft,
  dt
);
c(
  vt,
  pt
);
c(
  ht,
  gt
);
c(
  mt,
  xt
);
c(yt, bt);
c(
  Rt,
  Et
);
c(wt, St);
c(_t, jt);
c(
  Ct,
  Pt
);
c(
  Tt,
  kt
);
c(Ft, Ot);
c(Dt, At);
const Jt = { bundleIcon: c }, Le = ({
  panelTitle: i,
  panelIcon: n,
  //   panelType = "first", // Default value set here
  children: s
}) => {
  const h = () => {
    C.emit("setActivePanel", null);
  };
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: "panelToolbar",
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px",
        boxSizing: "border-box",
        height: "56px",
        gap: "8px"
      },
      children: [
        /* @__PURE__ */ o.jsxs(
          "div",
          {
            className: "panelTitle",
            style: {
              display: "flex",
              alignItems: "center",
              gap: "8px",
              flex: "1 1 auto",
              overflow: "hidden"
            },
            children: [
              n && /* @__PURE__ */ o.jsx(
                "div",
                {
                  style: {
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center"
                  },
                  children: n
                }
              ),
              i && /* @__PURE__ */ o.jsx(
                ce,
                {
                  style: {
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                  },
                  children: i
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ o.jsxs(
          "div",
          {
            className: "panelTools",
            style: {
              display: "flex",
              alignItems: "center",
              gap: "0px"
            },
            children: [
              s,
              /* @__PURE__ */ o.jsx(
                Sr,
                {
                  appearance: "subtle",
                  icon: /* @__PURE__ */ o.jsx(Nt, {}),
                  onClick: h,
                  "aria-label": "Close panel"
                }
              )
            ]
          }
        )
      ]
    }
  );
}, qt = ({
  panelWidth: i = 325,
  // Default width if not provided
  panelResize: n = !0,
  panelType: s = "first",
  // Default to "first" if not explicitly defined
  children: h
}) => {
  const [b, F] = H(s === "first"), [p, R] = H(i), [v, P] = H(!1);
  ue(() => {
    C.getPanelWidth() === 400 && C.setPanelWidth(i), R(C.getPanelWidth());
    const w = (A) => {
      F(A === s);
    }, D = (A) => {
      R(A);
    };
    return C.on("setActivePanel", w), C.on("panelWidthChanged", D), () => {
      C.off("setActivePanel", w), C.off("panelWidthChanged", D);
    };
  }, [s, i]);
  const E = (w) => {
    if (!n) return;
    const D = w.clientX, A = p, O = (Z) => {
      const U = Math.min(
        500,
        // Max width
        Math.max(256, A - (Z.clientX - D))
        // Min width
      );
      R(U), C.setPanelWidth(U);
    }, y = () => {
      document.removeEventListener("mousemove", O), document.removeEventListener("mouseup", y), document.body.style.userSelect = "";
    };
    document.addEventListener("mousemove", O), document.addEventListener("mouseup", y), document.body.style.userSelect = "none";
  };
  if (!b) return null;
  const m = j.Children.toArray(h), T = m.find(
    (w) => j.isValidElement(w) && w.type === Le
  ), W = m.filter(
    (w) => !(j.isValidElement(w) && w.type === Le)
  );
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: "panelRight",
      style: {
        width: `${p}px`,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "var(--colorNeutralBackground4)",
        height: "100%",
        boxSizing: "border-box",
        position: "relative",
        borderLeft: n ? v ? "2px solid var(--colorNeutralStroke2)" : "2px solid transparent" : "none"
      },
      children: [
        T && /* @__PURE__ */ o.jsx("div", { style: { flexShrink: 0 }, children: T }),
        /* @__PURE__ */ o.jsx(
          "div",
          {
            className: "panelContent",
            style: {
              flex: 1,
              overflowY: "auto"
            },
            children: W
          }
        ),
        n && /* @__PURE__ */ o.jsx(
          "div",
          {
            className: "resizeHandle",
            onMouseDown: E,
            onMouseEnter: () => P(!0),
            onMouseLeave: () => P(!1),
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              width: "2px",
              height: "100%",
              cursor: "ew-resize",
              zIndex: 1,
              backgroundColor: v ? "var(--colorNeutralStroke2)" : "transparent"
            }
          }
        )
      ]
    }
  );
}, Kt = ({ children: i }) => {
  const n = j.Children.toArray(i), s = n.find(
    (b) => j.isValidElement(b) && b.type === G
  ), h = n.filter(
    (b) => !(j.isValidElement(b) && b.type === G)
  );
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: "content",
      style: {
        display: "flex",
        flex: "1",
        flexDirection: "column",
        height: "100%",
        boxSizing: "border-box",
        position: "relative",
        minWidth: "320px"
      },
      children: [
        s && /* @__PURE__ */ o.jsx("div", { style: { flexShrink: 0 }, children: s }),
        /* @__PURE__ */ o.jsx(
          "div",
          {
            className: "panelContent",
            style: {
              flex: 1,
              overflowY: "auto"
            },
            children: h
          }
        )
      ]
    }
  );
}, Gt = ({
  panelIcon: i,
  panelTitle: n,
  children: s
}) => /* @__PURE__ */ o.jsxs(
  "div",
  {
    className: "panelToolbar",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "16px",
      boxSizing: "border-box",
      height: "56px"
    },
    children: [
      (i || n) && /* @__PURE__ */ o.jsxs(
        "div",
        {
          className: "panelTitle",
          style: {
            display: "flex",
            alignItems: "center",
            gap: "6px",
            flex: "1 1 auto",
            overflow: "hidden"
            // Ensure title section is contained
          },
          children: [
            i && /* @__PURE__ */ o.jsx(
              "div",
              {
                style: {
                  flexShrink: 0,
                  // Prevent the icon from shrinking
                  display: "flex",
                  alignItems: "center"
                },
                children: i
              }
            ),
            n && /* @__PURE__ */ o.jsx(
              ce,
              {
                style: {
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                },
                children: n
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ o.jsx(
        "div",
        {
          className: "panelTools",
          style: {
            display: "flex",
            alignItems: "center",
            gap: "0"
          },
          children: s
        }
      )
    ]
  }
);
export {
  Kt as Content,
  Gt as ContentToolbar,
  $t as Header,
  zt as HeaderTools,
  Mt as MsftColor,
  Xt as PanelLeft,
  G as PanelLeftToolbar,
  qt as PanelRight,
  Ut as PanelRightToggles,
  Le as PanelRightToolbar,
  Jt as bundleicons,
  C as eventBus
};
