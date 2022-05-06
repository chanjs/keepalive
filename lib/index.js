var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../../node_modules/.pnpm/react@18.1.0/node_modules/react/cjs/react.production.min.js
var require_react_production_min = __commonJS({
  "../../node_modules/.pnpm/react@18.1.0/node_modules/react/cjs/react.production.min.js"(exports) {
    "use strict";
    var l = Symbol.for("react.element");
    var n = Symbol.for("react.portal");
    var p = Symbol.for("react.fragment");
    var q = Symbol.for("react.strict_mode");
    var r = Symbol.for("react.profiler");
    var t = Symbol.for("react.provider");
    var u = Symbol.for("react.context");
    var v = Symbol.for("react.forward_ref");
    var w = Symbol.for("react.suspense");
    var x = Symbol.for("react.memo");
    var y = Symbol.for("react.lazy");
    var z = Symbol.iterator;
    function A(a) {
      if (a === null || typeof a !== "object")
        return null;
      a = z && a[z] || a["@@iterator"];
      return typeof a === "function" ? a : null;
    }
    var B = { isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } };
    var C = Object.assign;
    var D = {};
    function E(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    E.prototype.isReactComponent = {};
    E.prototype.setState = function(a, b) {
      if (typeof a !== "object" && typeof a !== "function" && a != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, a, b, "setState");
    };
    E.prototype.forceUpdate = function(a) {
      this.updater.enqueueForceUpdate(this, a, "forceUpdate");
    };
    function F() {
    }
    F.prototype = E.prototype;
    function G(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    var H = G.prototype = new F();
    H.constructor = G;
    C(H, E.prototype);
    H.isPureReactComponent = true;
    var I = Array.isArray;
    var J = Object.prototype.hasOwnProperty;
    var K = { current: null };
    var L = { key: true, ref: true, __self: true, __source: true };
    function M(a, b, e) {
      var d, c = {}, k = null, h = null;
      if (b != null)
        for (d in b.ref !== void 0 && (h = b.ref), b.key !== void 0 && (k = "" + b.key), b)
          J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
      var g = arguments.length - 2;
      if (g === 1)
        c.children = e;
      else if (1 < g) {
        for (var f = Array(g), m = 0; m < g; m++)
          f[m] = arguments[m + 2];
        c.children = f;
      }
      if (a && a.defaultProps)
        for (d in g = a.defaultProps, g)
          c[d] === void 0 && (c[d] = g[d]);
      return { $$typeof: l, type: a, key: k, ref: h, props: c, _owner: K.current };
    }
    function N(a, b) {
      return { $$typeof: l, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
    }
    function O(a) {
      return typeof a === "object" && a !== null && a.$$typeof === l;
    }
    function escape(a) {
      var b = { "=": "=0", ":": "=2" };
      return "$" + a.replace(/[=:]/g, function(a2) {
        return b[a2];
      });
    }
    var P = /\/+/g;
    function Q(a, b) {
      return typeof a === "object" && a !== null && a.key != null ? escape("" + a.key) : b.toString(36);
    }
    function R(a, b, e, d, c) {
      var k = typeof a;
      if (k === "undefined" || k === "boolean")
        a = null;
      var h = false;
      if (a === null)
        h = true;
      else
        switch (k) {
          case "string":
          case "number":
            h = true;
            break;
          case "object":
            switch (a.$$typeof) {
              case l:
              case n:
                h = true;
            }
        }
      if (h)
        return h = a, c = c(h), a = d === "" ? "." + Q(h, 0) : d, I(c) ? (e = "", a != null && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a2) {
          return a2;
        })) : c != null && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
      h = 0;
      d = d === "" ? "." : d + ":";
      if (I(a))
        for (var g = 0; g < a.length; g++) {
          k = a[g];
          var f = d + Q(k, g);
          h += R(k, b, e, f, c);
        }
      else if (f = A(a), typeof f === "function")
        for (a = f.call(a), g = 0; !(k = a.next()).done; )
          k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
      else if (k === "object")
        throw b = String(a), Error("Objects are not valid as a React child (found: " + (b === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
      return h;
    }
    function S(a, b, e) {
      if (a == null)
        return a;
      var d = [], c = 0;
      R(a, d, "", "", function(a2) {
        return b.call(e, a2, c++);
      });
      return d;
    }
    function T(a) {
      if (a._status === -1) {
        var b = a._result;
        b = b();
        b.then(function(b2) {
          if (a._status === 0 || a._status === -1)
            a._status = 1, a._result = b2;
        }, function(b2) {
          if (a._status === 0 || a._status === -1)
            a._status = 2, a._result = b2;
        });
        a._status === -1 && (a._status = 0, a._result = b);
      }
      if (a._status === 1)
        return a._result.default;
      throw a._result;
    }
    var U = { current: null };
    var V = { transition: null };
    var W = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K };
    exports.Children = { map: S, forEach: function(a, b, e) {
      S(a, function() {
        b.apply(this, arguments);
      }, e);
    }, count: function(a) {
      var b = 0;
      S(a, function() {
        b++;
      });
      return b;
    }, toArray: function(a) {
      return S(a, function(a2) {
        return a2;
      }) || [];
    }, only: function(a) {
      if (!O(a))
        throw Error("React.Children.only expected to receive a single React element child.");
      return a;
    } };
    exports.Component = E;
    exports.Fragment = p;
    exports.Profiler = r;
    exports.PureComponent = G;
    exports.StrictMode = q;
    exports.Suspense = w;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
    exports.cloneElement = function(a, b, e) {
      if (a === null || a === void 0)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
      var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
      if (b != null) {
        b.ref !== void 0 && (k = b.ref, h = K.current);
        b.key !== void 0 && (c = "" + b.key);
        if (a.type && a.type.defaultProps)
          var g = a.type.defaultProps;
        for (f in b)
          J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = b[f] === void 0 && g !== void 0 ? g[f] : b[f]);
      }
      var f = arguments.length - 2;
      if (f === 1)
        d.children = e;
      else if (1 < f) {
        g = Array(f);
        for (var m = 0; m < f; m++)
          g[m] = arguments[m + 2];
        d.children = g;
      }
      return { $$typeof: l, type: a.type, key: c, ref: k, props: d, _owner: h };
    };
    exports.createContext = function(a) {
      a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
      a.Provider = { $$typeof: t, _context: a };
      return a.Consumer = a;
    };
    exports.createElement = M;
    exports.createFactory = function(a) {
      var b = M.bind(null, a);
      b.type = a;
      return b;
    };
    exports.createRef = function() {
      return { current: null };
    };
    exports.forwardRef = function(a) {
      return { $$typeof: v, render: a };
    };
    exports.isValidElement = O;
    exports.lazy = function(a) {
      return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T };
    };
    exports.memo = function(a, b) {
      return { $$typeof: x, type: a, compare: b === void 0 ? null : b };
    };
    exports.startTransition = function(a) {
      var b = V.transition;
      V.transition = {};
      try {
        a();
      } finally {
        V.transition = b;
      }
    };
    exports.unstable_act = function() {
      throw Error("act(...) is not supported in production builds of React.");
    };
    exports.useCallback = function(a, b) {
      return U.current.useCallback(a, b);
    };
    exports.useContext = function(a) {
      return U.current.useContext(a);
    };
    exports.useDebugValue = function() {
    };
    exports.useDeferredValue = function(a) {
      return U.current.useDeferredValue(a);
    };
    exports.useEffect = function(a, b) {
      return U.current.useEffect(a, b);
    };
    exports.useId = function() {
      return U.current.useId();
    };
    exports.useImperativeHandle = function(a, b, e) {
      return U.current.useImperativeHandle(a, b, e);
    };
    exports.useInsertionEffect = function(a, b) {
      return U.current.useInsertionEffect(a, b);
    };
    exports.useLayoutEffect = function(a, b) {
      return U.current.useLayoutEffect(a, b);
    };
    exports.useMemo = function(a, b) {
      return U.current.useMemo(a, b);
    };
    exports.useReducer = function(a, b, e) {
      return U.current.useReducer(a, b, e);
    };
    exports.useRef = function(a) {
      return U.current.useRef(a);
    };
    exports.useState = function(a) {
      return U.current.useState(a);
    };
    exports.useSyncExternalStore = function(a, b, e) {
      return U.current.useSyncExternalStore(a, b, e);
    };
    exports.useTransition = function() {
      return U.current.useTransition();
    };
    exports.version = "18.1.0";
  }
});

// ../../node_modules/.pnpm/react@18.1.0/node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
  "../../node_modules/.pnpm/react@18.1.0/node_modules/react/cjs/react.development.js"(exports, module2) {
    "use strict";
    if (process.env.NODE_ENV !== "production") {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var ReactVersion = "18.1.0";
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactCurrentDispatcher = {
          current: null
        };
        var ReactCurrentBatchConfig = {
          transition: null
        };
        var ReactCurrentActQueue = {
          current: null,
          isBatchingLegacy: false,
          didScheduleLegacyUpdate: false
        };
        var ReactCurrentOwner = {
          current: null
        };
        var ReactDebugCurrentFrame = {};
        var currentExtraStackFrame = null;
        function setExtraStackFrame(stack) {
          {
            currentExtraStackFrame = stack;
          }
        }
        {
          ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
            {
              currentExtraStackFrame = stack;
            }
          };
          ReactDebugCurrentFrame.getCurrentStack = null;
          ReactDebugCurrentFrame.getStackAddendum = function() {
            var stack = "";
            if (currentExtraStackFrame) {
              stack += currentExtraStackFrame;
            }
            var impl = ReactDebugCurrentFrame.getCurrentStack;
            if (impl) {
              stack += impl() || "";
            }
            return stack;
          };
        }
        var ReactSharedInternals = {
          ReactCurrentDispatcher,
          ReactCurrentBatchConfig,
          ReactCurrentOwner
        };
        {
          ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
          ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
        }
        function warn(format) {
          {
            {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              printWarning("warn", format, args);
            }
          }
        }
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var didWarnStateUpdateForUnmountedComponent = {};
        function warnNoop(publicInstance, callerName) {
          {
            var _constructor = publicInstance.constructor;
            var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
            var warningKey = componentName + "." + callerName;
            if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
              return;
            }
            error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
            didWarnStateUpdateForUnmountedComponent[warningKey] = true;
          }
        }
        var ReactNoopUpdateQueue = {
          isMounted: function(publicInstance) {
            return false;
          },
          enqueueForceUpdate: function(publicInstance, callback, callerName) {
            warnNoop(publicInstance, "forceUpdate");
          },
          enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
            warnNoop(publicInstance, "replaceState");
          },
          enqueueSetState: function(publicInstance, partialState, callback, callerName) {
            warnNoop(publicInstance, "setState");
          }
        };
        var assign = Object.assign;
        var emptyObject = {};
        {
          Object.freeze(emptyObject);
        }
        function Component(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        Component.prototype.isReactComponent = {};
        Component.prototype.setState = function(partialState, callback) {
          if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null) {
            throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
          }
          this.updater.enqueueSetState(this, partialState, callback, "setState");
        };
        Component.prototype.forceUpdate = function(callback) {
          this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
        };
        {
          var deprecatedAPIs = {
            isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
            replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
          };
          var defineDeprecationWarning = function(methodName, info) {
            Object.defineProperty(Component.prototype, methodName, {
              get: function() {
                warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                return void 0;
              }
            });
          };
          for (var fnName in deprecatedAPIs) {
            if (deprecatedAPIs.hasOwnProperty(fnName)) {
              defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
            }
          }
        }
        function ComponentDummy() {
        }
        ComponentDummy.prototype = Component.prototype;
        function PureComponent(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
        pureComponentPrototype.constructor = PureComponent;
        assign(pureComponentPrototype, Component.prototype);
        pureComponentPrototype.isPureReactComponent = true;
        function createRef() {
          var refObject = {
            current: null
          };
          {
            Object.seal(refObject);
          }
          return refObject;
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function defineKeyPropWarningGetter(props, displayName) {
          var warnAboutAccessingKey = function() {
            {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
        function defineRefPropWarningGetter(props, displayName) {
          var warnAboutAccessingRef = function() {
            {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: true
          });
        }
        function warnIfStringRefCannotBeAutoConverted(config) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        var ReactElement = function(type, key, ref, self2, source, owner, props) {
          var element = {
            $$typeof: REACT_ELEMENT_TYPE,
            type,
            key,
            ref,
            props,
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self2
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function createElement(type, config, children) {
          var propName;
          var props = {};
          var key = null;
          var ref = null;
          var self2 = null;
          var source = null;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              {
                warnIfStringRefCannotBeAutoConverted(config);
              }
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            self2 = config.__self === void 0 ? null : config.__self;
            source = config.__source === void 0 ? null : config.__source;
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            {
              if (Object.freeze) {
                Object.freeze(childArray);
              }
            }
            props.children = childArray;
          }
          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for (propName in defaultProps) {
              if (props[propName] === void 0) {
                props[propName] = defaultProps[propName];
              }
            }
          }
          {
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
          }
          return ReactElement(type, key, ref, self2, source, ReactCurrentOwner.current, props);
        }
        function cloneAndReplaceKey(oldElement, newKey) {
          var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
          return newElement;
        }
        function cloneElement(element, config, children) {
          if (element === null || element === void 0) {
            throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
          }
          var propName;
          var props = assign({}, element.props);
          var key = element.key;
          var ref = element.ref;
          var self2 = element._self;
          var source = element._source;
          var owner = element._owner;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              owner = ReactCurrentOwner.current;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            var defaultProps;
            if (element.type && element.type.defaultProps) {
              defaultProps = element.type.defaultProps;
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                if (config[propName] === void 0 && defaultProps !== void 0) {
                  props[propName] = defaultProps[propName];
                } else {
                  props[propName] = config[propName];
                }
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            props.children = childArray;
          }
          return ReactElement(element.type, key, ref, self2, source, owner, props);
        }
        function isValidElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        var SEPARATOR = ".";
        var SUBSEPARATOR = ":";
        function escape(key) {
          var escapeRegex = /[=:]/g;
          var escaperLookup = {
            "=": "=0",
            ":": "=2"
          };
          var escapedString = key.replace(escapeRegex, function(match) {
            return escaperLookup[match];
          });
          return "$" + escapedString;
        }
        var didWarnAboutMaps = false;
        var userProvidedKeyEscapeRegex = /\/+/g;
        function escapeUserProvidedKey(text) {
          return text.replace(userProvidedKeyEscapeRegex, "$&/");
        }
        function getElementKey(element, index) {
          if (typeof element === "object" && element !== null && element.key != null) {
            {
              checkKeyStringCoercion(element.key);
            }
            return escape("" + element.key);
          }
          return index.toString(36);
        }
        function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
          var type = typeof children;
          if (type === "undefined" || type === "boolean") {
            children = null;
          }
          var invokeCallback = false;
          if (children === null) {
            invokeCallback = true;
          } else {
            switch (type) {
              case "string":
              case "number":
                invokeCallback = true;
                break;
              case "object":
                switch (children.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                  case REACT_PORTAL_TYPE:
                    invokeCallback = true;
                }
            }
          }
          if (invokeCallback) {
            var _child = children;
            var mappedChild = callback(_child);
            var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
            if (isArray(mappedChild)) {
              var escapedChildKey = "";
              if (childKey != null) {
                escapedChildKey = escapeUserProvidedKey(childKey) + "/";
              }
              mapIntoArray(mappedChild, array, escapedChildKey, "", function(c) {
                return c;
              });
            } else if (mappedChild != null) {
              if (isValidElement(mappedChild)) {
                {
                  if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
                    checkKeyStringCoercion(mappedChild.key);
                  }
                }
                mappedChild = cloneAndReplaceKey(mappedChild, escapedPrefix + (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? escapeUserProvidedKey("" + mappedChild.key) + "/" : "") + childKey);
              }
              array.push(mappedChild);
            }
            return 1;
          }
          var child;
          var nextName;
          var subtreeCount = 0;
          var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
          if (isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              child = children[i];
              nextName = nextNamePrefix + getElementKey(child, i);
              subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
            }
          } else {
            var iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === "function") {
              var iterableChildren = children;
              {
                if (iteratorFn === iterableChildren.entries) {
                  if (!didWarnAboutMaps) {
                    warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                  }
                  didWarnAboutMaps = true;
                }
              }
              var iterator = iteratorFn.call(iterableChildren);
              var step;
              var ii = 0;
              while (!(step = iterator.next()).done) {
                child = step.value;
                nextName = nextNamePrefix + getElementKey(child, ii++);
                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
              }
            } else if (type === "object") {
              var childrenString = String(children);
              throw new Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
            }
          }
          return subtreeCount;
        }
        function mapChildren(children, func, context) {
          if (children == null) {
            return children;
          }
          var result = [];
          var count = 0;
          mapIntoArray(children, result, "", "", function(child) {
            return func.call(context, child, count++);
          });
          return result;
        }
        function countChildren(children) {
          var n = 0;
          mapChildren(children, function() {
            n++;
          });
          return n;
        }
        function forEachChildren(children, forEachFunc, forEachContext) {
          mapChildren(children, function() {
            forEachFunc.apply(this, arguments);
          }, forEachContext);
        }
        function toArray(children) {
          return mapChildren(children, function(child) {
            return child;
          }) || [];
        }
        function onlyChild(children) {
          if (!isValidElement(children)) {
            throw new Error("React.Children.only expected to receive a single React element child.");
          }
          return children;
        }
        function createContext2(defaultValue) {
          var context = {
            $$typeof: REACT_CONTEXT_TYPE,
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
          };
          context.Provider = {
            $$typeof: REACT_PROVIDER_TYPE,
            _context: context
          };
          var hasWarnedAboutUsingNestedContextConsumers = false;
          var hasWarnedAboutUsingConsumerProvider = false;
          var hasWarnedAboutDisplayNameOnConsumer = false;
          {
            var Consumer = {
              $$typeof: REACT_CONTEXT_TYPE,
              _context: context
            };
            Object.defineProperties(Consumer, {
              Provider: {
                get: function() {
                  if (!hasWarnedAboutUsingConsumerProvider) {
                    hasWarnedAboutUsingConsumerProvider = true;
                    error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                  }
                  return context.Provider;
                },
                set: function(_Provider) {
                  context.Provider = _Provider;
                }
              },
              _currentValue: {
                get: function() {
                  return context._currentValue;
                },
                set: function(_currentValue) {
                  context._currentValue = _currentValue;
                }
              },
              _currentValue2: {
                get: function() {
                  return context._currentValue2;
                },
                set: function(_currentValue2) {
                  context._currentValue2 = _currentValue2;
                }
              },
              _threadCount: {
                get: function() {
                  return context._threadCount;
                },
                set: function(_threadCount) {
                  context._threadCount = _threadCount;
                }
              },
              Consumer: {
                get: function() {
                  if (!hasWarnedAboutUsingNestedContextConsumers) {
                    hasWarnedAboutUsingNestedContextConsumers = true;
                    error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                  }
                  return context.Consumer;
                }
              },
              displayName: {
                get: function() {
                  return context.displayName;
                },
                set: function(displayName) {
                  if (!hasWarnedAboutDisplayNameOnConsumer) {
                    warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                    hasWarnedAboutDisplayNameOnConsumer = true;
                  }
                }
              }
            });
            context.Consumer = Consumer;
          }
          {
            context._currentRenderer = null;
            context._currentRenderer2 = null;
          }
          return context;
        }
        var Uninitialized = -1;
        var Pending = 0;
        var Resolved = 1;
        var Rejected = 2;
        function lazyInitializer(payload) {
          if (payload._status === Uninitialized) {
            var ctor = payload._result;
            var thenable = ctor();
            thenable.then(function(moduleObject2) {
              if (payload._status === Pending || payload._status === Uninitialized) {
                var resolved = payload;
                resolved._status = Resolved;
                resolved._result = moduleObject2;
              }
            }, function(error2) {
              if (payload._status === Pending || payload._status === Uninitialized) {
                var rejected = payload;
                rejected._status = Rejected;
                rejected._result = error2;
              }
            });
            if (payload._status === Uninitialized) {
              var pending = payload;
              pending._status = Pending;
              pending._result = thenable;
            }
          }
          if (payload._status === Resolved) {
            var moduleObject = payload._result;
            {
              if (moduleObject === void 0) {
                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", moduleObject);
              }
            }
            {
              if (!("default" in moduleObject)) {
                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
              }
            }
            return moduleObject.default;
          } else {
            throw payload._result;
          }
        }
        function lazy(ctor) {
          var payload = {
            _status: Uninitialized,
            _result: ctor
          };
          var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: payload,
            _init: lazyInitializer
          };
          {
            var defaultProps;
            var propTypes;
            Object.defineProperties(lazyType, {
              defaultProps: {
                configurable: true,
                get: function() {
                  return defaultProps;
                },
                set: function(newDefaultProps) {
                  error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  defaultProps = newDefaultProps;
                  Object.defineProperty(lazyType, "defaultProps", {
                    enumerable: true
                  });
                }
              },
              propTypes: {
                configurable: true,
                get: function() {
                  return propTypes;
                },
                set: function(newPropTypes) {
                  error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  propTypes = newPropTypes;
                  Object.defineProperty(lazyType, "propTypes", {
                    enumerable: true
                  });
                }
              }
            });
          }
          return lazyType;
        }
        function forwardRef(render) {
          {
            if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
              error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
            } else if (typeof render !== "function") {
              error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
            } else {
              if (render.length !== 0 && render.length !== 2) {
                error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
              }
            }
            if (render != null) {
              if (render.defaultProps != null || render.propTypes != null) {
                error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
              }
            }
          }
          var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (!render.name && !render.displayName) {
                  render.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function memo(type, compare) {
          {
            if (!isValidElementType(type)) {
              error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
            }
          }
          var elementType = {
            $$typeof: REACT_MEMO_TYPE,
            type,
            compare: compare === void 0 ? null : compare
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (!type.name && !type.displayName) {
                  type.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        function resolveDispatcher() {
          var dispatcher = ReactCurrentDispatcher.current;
          {
            if (dispatcher === null) {
              error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
            }
          }
          return dispatcher;
        }
        function useContext2(Context) {
          var dispatcher = resolveDispatcher();
          {
            if (Context._context !== void 0) {
              var realContext = Context._context;
              if (realContext.Consumer === Context) {
                error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
              } else if (realContext.Provider === Context) {
                error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
              }
            }
          }
          return dispatcher.useContext(Context);
        }
        function useState(initialState) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useState(initialState);
        }
        function useReducer(reducer, initialArg, init) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useReducer(reducer, initialArg, init);
        }
        function useRef2(initialValue) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useRef(initialValue);
        }
        function useEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useEffect(create, deps);
        }
        function useInsertionEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useInsertionEffect(create, deps);
        }
        function useLayoutEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useLayoutEffect(create, deps);
        }
        function useCallback(callback, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useCallback(callback, deps);
        }
        function useMemo(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useMemo(create, deps);
        }
        function useImperativeHandle(ref, create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useImperativeHandle(ref, create, deps);
        }
        function useDebugValue(value, formatterFn) {
          {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDebugValue(value, formatterFn);
          }
        }
        function useTransition() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useTransition();
        }
        function useDeferredValue(value) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useDeferredValue(value);
        }
        function useId() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useId();
        }
        function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
        }
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher$1.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component2) {
          var prototype = Component2.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              setExtraStackFrame(stack);
            } else {
              setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function getDeclarationErrorAddendum() {
          if (ReactCurrentOwner.current) {
            var name = getComponentNameFromType(ReactCurrentOwner.current.type);
            if (name) {
              return "\n\nCheck the render method of `" + name + "`.";
            }
          }
          return "";
        }
        function getSourceInfoErrorAddendum(source) {
          if (source !== void 0) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
            var lineNumber = source.lineNumber;
            return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
          }
          return "";
        }
        function getSourceInfoErrorAddendumForProps(elementProps) {
          if (elementProps !== null && elementProps !== void 0) {
            return getSourceInfoErrorAddendum(elementProps.__source);
          }
          return "";
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          var info = getDeclarationErrorAddendum();
          if (!info) {
            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
            if (parentName) {
              info = "\n\nCheck the top-level render call using <" + parentName + ">.";
            }
          }
          return info;
        }
        function validateExplicitKey(element, parentType) {
          if (!element._store || element._store.validated || element.key != null) {
            return;
          }
          element._store.validated = true;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }
          ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
          var childOwner = "";
          if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
            childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
          }
          {
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          if (typeof node !== "object") {
            return;
          }
          if (isArray(node)) {
            for (var i = 0; i < node.length; i++) {
              var child = node[i];
              if (isValidElement(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement(node)) {
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === "function") {
              if (iteratorFn !== node.entries) {
                var iterator = iteratorFn.call(node);
                var step;
                while (!(step = iterator.next()).done) {
                  if (isValidElement(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function createElementWithValidation(type, props, children) {
          var validType = isValidElementType(type);
          if (!validType) {
            var info = "";
            if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
              info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            }
            var sourceInfo = getSourceInfoErrorAddendumForProps(props);
            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }
            var typeString;
            if (type === null) {
              typeString = "null";
            } else if (isArray(type)) {
              typeString = "array";
            } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
              typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
              info = " Did you accidentally export a JSX literal instead of a component?";
            } else {
              typeString = typeof type;
            }
            {
              error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
          }
          var element = createElement.apply(this, arguments);
          if (element == null) {
            return element;
          }
          if (validType) {
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], type);
            }
          }
          if (type === REACT_FRAGMENT_TYPE) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }
          return element;
        }
        var didWarnAboutDeprecatedCreateFactory = false;
        function createFactoryWithValidation(type) {
          var validatedFactory = createElementWithValidation.bind(null, type);
          validatedFactory.type = type;
          {
            if (!didWarnAboutDeprecatedCreateFactory) {
              didWarnAboutDeprecatedCreateFactory = true;
              warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
            }
            Object.defineProperty(validatedFactory, "type", {
              enumerable: false,
              get: function() {
                warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                Object.defineProperty(this, "type", {
                  value: type
                });
                return type;
              }
            });
          }
          return validatedFactory;
        }
        function cloneElementWithValidation(element, props, children) {
          var newElement = cloneElement.apply(this, arguments);
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], newElement.type);
          }
          validatePropTypes(newElement);
          return newElement;
        }
        function startTransition(scope, options) {
          var prevTransition = ReactCurrentBatchConfig.transition;
          ReactCurrentBatchConfig.transition = {};
          var currentTransition = ReactCurrentBatchConfig.transition;
          {
            ReactCurrentBatchConfig.transition._updatedFibers = /* @__PURE__ */ new Set();
          }
          try {
            scope();
          } finally {
            ReactCurrentBatchConfig.transition = prevTransition;
            {
              if (prevTransition === null && currentTransition._updatedFibers) {
                var updatedFibersCount = currentTransition._updatedFibers.size;
                if (updatedFibersCount > 10) {
                  warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
                }
                currentTransition._updatedFibers.clear();
              }
            }
          }
        }
        var didWarnAboutMessageChannel = false;
        var enqueueTaskImpl = null;
        function enqueueTask(task) {
          if (enqueueTaskImpl === null) {
            try {
              var requireString = ("require" + Math.random()).slice(0, 7);
              var nodeRequire = module2 && module2[requireString];
              enqueueTaskImpl = nodeRequire.call(module2, "timers").setImmediate;
            } catch (_err) {
              enqueueTaskImpl = function(callback) {
                {
                  if (didWarnAboutMessageChannel === false) {
                    didWarnAboutMessageChannel = true;
                    if (typeof MessageChannel === "undefined") {
                      error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.");
                    }
                  }
                }
                var channel = new MessageChannel();
                channel.port1.onmessage = callback;
                channel.port2.postMessage(void 0);
              };
            }
          }
          return enqueueTaskImpl(task);
        }
        var actScopeDepth = 0;
        var didWarnNoAwaitAct = false;
        function act(callback) {
          {
            var prevActScopeDepth = actScopeDepth;
            actScopeDepth++;
            if (ReactCurrentActQueue.current === null) {
              ReactCurrentActQueue.current = [];
            }
            var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
            var result;
            try {
              ReactCurrentActQueue.isBatchingLegacy = true;
              result = callback();
              if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
                var queue = ReactCurrentActQueue.current;
                if (queue !== null) {
                  ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                  flushActQueue(queue);
                }
              }
            } catch (error2) {
              popActScope(prevActScopeDepth);
              throw error2;
            } finally {
              ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
            }
            if (result !== null && typeof result === "object" && typeof result.then === "function") {
              var thenableResult = result;
              var wasAwaited = false;
              var thenable = {
                then: function(resolve, reject) {
                  wasAwaited = true;
                  thenableResult.then(function(returnValue2) {
                    popActScope(prevActScopeDepth);
                    if (actScopeDepth === 0) {
                      recursivelyFlushAsyncActWork(returnValue2, resolve, reject);
                    } else {
                      resolve(returnValue2);
                    }
                  }, function(error2) {
                    popActScope(prevActScopeDepth);
                    reject(error2);
                  });
                }
              };
              {
                if (!didWarnNoAwaitAct && typeof Promise !== "undefined") {
                  Promise.resolve().then(function() {
                  }).then(function() {
                    if (!wasAwaited) {
                      didWarnNoAwaitAct = true;
                      error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);");
                    }
                  });
                }
              }
              return thenable;
            } else {
              var returnValue = result;
              popActScope(prevActScopeDepth);
              if (actScopeDepth === 0) {
                var _queue = ReactCurrentActQueue.current;
                if (_queue !== null) {
                  flushActQueue(_queue);
                  ReactCurrentActQueue.current = null;
                }
                var _thenable = {
                  then: function(resolve, reject) {
                    if (ReactCurrentActQueue.current === null) {
                      ReactCurrentActQueue.current = [];
                      recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                    } else {
                      resolve(returnValue);
                    }
                  }
                };
                return _thenable;
              } else {
                var _thenable2 = {
                  then: function(resolve, reject) {
                    resolve(returnValue);
                  }
                };
                return _thenable2;
              }
            }
          }
        }
        function popActScope(prevActScopeDepth) {
          {
            if (prevActScopeDepth !== actScopeDepth - 1) {
              error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
            }
            actScopeDepth = prevActScopeDepth;
          }
        }
        function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
          {
            var queue = ReactCurrentActQueue.current;
            if (queue !== null) {
              try {
                flushActQueue(queue);
                enqueueTask(function() {
                  if (queue.length === 0) {
                    ReactCurrentActQueue.current = null;
                    resolve(returnValue);
                  } else {
                    recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                  }
                });
              } catch (error2) {
                reject(error2);
              }
            } else {
              resolve(returnValue);
            }
          }
        }
        var isFlushing = false;
        function flushActQueue(queue) {
          {
            if (!isFlushing) {
              isFlushing = true;
              var i = 0;
              try {
                for (; i < queue.length; i++) {
                  var callback = queue[i];
                  do {
                    callback = callback(true);
                  } while (callback !== null);
                }
                queue.length = 0;
              } catch (error2) {
                queue = queue.slice(i + 1);
                throw error2;
              } finally {
                isFlushing = false;
              }
            }
          }
        }
        var createElement$1 = createElementWithValidation;
        var cloneElement$1 = cloneElementWithValidation;
        var createFactory = createFactoryWithValidation;
        var Children = {
          map: mapChildren,
          forEach: forEachChildren,
          count: countChildren,
          toArray,
          only: onlyChild
        };
        exports.Children = Children;
        exports.Component = Component;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.Profiler = REACT_PROFILER_TYPE;
        exports.PureComponent = PureComponent;
        exports.StrictMode = REACT_STRICT_MODE_TYPE;
        exports.Suspense = REACT_SUSPENSE_TYPE;
        exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
        exports.cloneElement = cloneElement$1;
        exports.createContext = createContext2;
        exports.createElement = createElement$1;
        exports.createFactory = createFactory;
        exports.createRef = createRef;
        exports.forwardRef = forwardRef;
        exports.isValidElement = isValidElement;
        exports.lazy = lazy;
        exports.memo = memo;
        exports.startTransition = startTransition;
        exports.unstable_act = act;
        exports.useCallback = useCallback;
        exports.useContext = useContext2;
        exports.useDebugValue = useDebugValue;
        exports.useDeferredValue = useDeferredValue;
        exports.useEffect = useEffect;
        exports.useId = useId;
        exports.useImperativeHandle = useImperativeHandle;
        exports.useInsertionEffect = useInsertionEffect;
        exports.useLayoutEffect = useLayoutEffect;
        exports.useMemo = useMemo;
        exports.useReducer = useReducer;
        exports.useRef = useRef2;
        exports.useState = useState;
        exports.useSyncExternalStore = useSyncExternalStore;
        exports.useTransition = useTransition;
        exports.version = ReactVersion;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var require_react = __commonJS({
  "../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js"(exports, module2) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module2.exports = require_react_production_min();
    } else {
      module2.exports = require_react_development();
    }
  }
});

// ../../node_modules/.pnpm/history@5.3.0/node_modules/history/umd/history.production.min.js
var require_history_production_min = __commonJS({
  "../../node_modules/.pnpm/history@5.3.0/node_modules/history/umd/history.production.min.js"(exports, module2) {
    !function(t, n) {
      typeof exports == "object" && typeof module2 != "undefined" ? n(exports) : typeof define == "function" && define.amd ? define(["exports"], n) : n((t = typeof globalThis != "undefined" ? globalThis : t || self).HistoryLibrary = {});
    }(exports, function(t) {
      "use strict";
      function n() {
        return (n = Object.assign || function(t2) {
          for (var n2 = 1; n2 < arguments.length; n2++) {
            var e2 = arguments[n2];
            for (var r2 in e2)
              Object.prototype.hasOwnProperty.call(e2, r2) && (t2[r2] = e2[r2]);
          }
          return t2;
        }).apply(this, arguments);
      }
      var e;
      t.Action = void 0, (e = t.Action || (t.Action = {})).Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
      var r = "beforeunload", o = "popstate";
      function a(t2, n2, e2) {
        return Math.min(Math.max(t2, n2), e2);
      }
      function i(t2) {
        t2.preventDefault(), t2.returnValue = "";
      }
      function c() {
        var t2 = [];
        return { get length() {
          return t2.length;
        }, push: function(n2) {
          return t2.push(n2), function() {
            t2 = t2.filter(function(t3) {
              return t3 !== n2;
            });
          };
        }, call: function(n2) {
          t2.forEach(function(t3) {
            return t3 && t3(n2);
          });
        } };
      }
      function u() {
        return Math.random().toString(36).substr(2, 8);
      }
      function l(t2) {
        var n2 = t2.pathname, e2 = n2 === void 0 ? "/" : n2, r2 = t2.search, o2 = r2 === void 0 ? "" : r2, a2 = t2.hash, i2 = a2 === void 0 ? "" : a2;
        return o2 && o2 !== "?" && (e2 += o2.charAt(0) === "?" ? o2 : "?" + o2), i2 && i2 !== "#" && (e2 += i2.charAt(0) === "#" ? i2 : "#" + i2), e2;
      }
      function f(t2) {
        var n2 = {};
        if (t2) {
          var e2 = t2.indexOf("#");
          e2 >= 0 && (n2.hash = t2.substr(e2), t2 = t2.substr(0, e2));
          var r2 = t2.indexOf("?");
          r2 >= 0 && (n2.search = t2.substr(r2), t2 = t2.substr(0, r2)), t2 && (n2.pathname = t2);
        }
        return n2;
      }
      t.createBrowserHistory = function(e2) {
        e2 === void 0 && (e2 = {});
        var a2 = e2.window, s = a2 === void 0 ? document.defaultView : a2, h = s.history;
        function p() {
          var t2 = s.location, n2 = t2.pathname, e3 = t2.search, r2 = t2.hash, o2 = h.state || {};
          return [o2.idx, { pathname: n2, search: e3, hash: r2, state: o2.usr || null, key: o2.key || "default" }];
        }
        var v = null;
        s.addEventListener(o, function() {
          if (v)
            A.call(v), v = null;
          else {
            var n2 = t.Action.Pop, e3 = p(), r2 = e3[0], o2 = e3[1];
            if (A.length) {
              if (r2 != null) {
                var a3 = y - r2;
                a3 && (v = { action: n2, location: o2, retry: function() {
                  H(-1 * a3);
                } }, H(a3));
              }
            } else
              E(n2);
          }
        });
        var d = t.Action.Pop, g = p(), y = g[0], m = g[1], b = c(), A = c();
        function P(t2) {
          return typeof t2 == "string" ? t2 : l(t2);
        }
        function k(t2, e3) {
          return e3 === void 0 && (e3 = null), n({ pathname: m.pathname, hash: "", search: "" }, typeof t2 == "string" ? f(t2) : t2, { state: e3, key: u() });
        }
        function x(t2, n2) {
          return [{ usr: t2.state, key: t2.key, idx: n2 }, P(t2)];
        }
        function w(t2, n2, e3) {
          return !A.length || (A.call({ action: t2, location: n2, retry: e3 }), false);
        }
        function E(t2) {
          d = t2;
          var n2 = p();
          y = n2[0], m = n2[1], b.call({ action: d, location: m });
        }
        function H(t2) {
          h.go(t2);
        }
        return y == null && (y = 0, h.replaceState(n({}, h.state, { idx: y }), "")), { get action() {
          return d;
        }, get location() {
          return m;
        }, createHref: P, push: function n2(e3, r2) {
          var o2 = t.Action.Push, a3 = k(e3, r2);
          if (w(o2, a3, function() {
            n2(e3, r2);
          })) {
            var i2 = x(a3, y + 1), c2 = i2[0], u2 = i2[1];
            try {
              h.pushState(c2, "", u2);
            } catch (t2) {
              s.location.assign(u2);
            }
            E(o2);
          }
        }, replace: function n2(e3, r2) {
          var o2 = t.Action.Replace, a3 = k(e3, r2);
          if (w(o2, a3, function() {
            n2(e3, r2);
          })) {
            var i2 = x(a3, y), c2 = i2[0], u2 = i2[1];
            h.replaceState(c2, "", u2), E(o2);
          }
        }, go: H, back: function() {
          H(-1);
        }, forward: function() {
          H(1);
        }, listen: function(t2) {
          return b.push(t2);
        }, block: function(t2) {
          var n2 = A.push(t2);
          return A.length === 1 && s.addEventListener(r, i), function() {
            n2(), A.length || s.removeEventListener(r, i);
          };
        } };
      }, t.createHashHistory = function(e2) {
        e2 === void 0 && (e2 = {});
        var a2 = e2.window, s = a2 === void 0 ? document.defaultView : a2, h = s.history;
        function p() {
          var t2 = f(s.location.hash.substr(1)), n2 = t2.pathname, e3 = n2 === void 0 ? "/" : n2, r2 = t2.search, o2 = r2 === void 0 ? "" : r2, a3 = t2.hash, i2 = a3 === void 0 ? "" : a3, c2 = h.state || {};
          return [c2.idx, { pathname: e3, search: o2, hash: i2, state: c2.usr || null, key: c2.key || "default" }];
        }
        var v = null;
        function d() {
          if (v)
            P.call(v), v = null;
          else {
            var n2 = t.Action.Pop, e3 = p(), r2 = e3[0], o2 = e3[1];
            if (P.length) {
              if (r2 != null) {
                var a3 = m - r2;
                a3 && (v = { action: n2, location: o2, retry: function() {
                  L(-1 * a3);
                } }, L(a3));
              }
            } else
              H(n2);
          }
        }
        s.addEventListener(o, d), s.addEventListener("hashchange", function() {
          l(p()[1]) !== l(b) && d();
        });
        var g = t.Action.Pop, y = p(), m = y[0], b = y[1], A = c(), P = c();
        function k(t2) {
          return function() {
            var t3 = document.querySelector("base"), n2 = "";
            if (t3 && t3.getAttribute("href")) {
              var e3 = s.location.href, r2 = e3.indexOf("#");
              n2 = r2 === -1 ? e3 : e3.slice(0, r2);
            }
            return n2;
          }() + "#" + (typeof t2 == "string" ? t2 : l(t2));
        }
        function x(t2, e3) {
          return e3 === void 0 && (e3 = null), n({ pathname: b.pathname, hash: "", search: "" }, typeof t2 == "string" ? f(t2) : t2, { state: e3, key: u() });
        }
        function w(t2, n2) {
          return [{ usr: t2.state, key: t2.key, idx: n2 }, k(t2)];
        }
        function E(t2, n2, e3) {
          return !P.length || (P.call({ action: t2, location: n2, retry: e3 }), false);
        }
        function H(t2) {
          g = t2;
          var n2 = p();
          m = n2[0], b = n2[1], A.call({ action: g, location: b });
        }
        function L(t2) {
          h.go(t2);
        }
        return m == null && (m = 0, h.replaceState(n({}, h.state, { idx: m }), "")), { get action() {
          return g;
        }, get location() {
          return b;
        }, createHref: k, push: function n2(e3, r2) {
          var o2 = t.Action.Push, a3 = x(e3, r2);
          if (E(o2, a3, function() {
            n2(e3, r2);
          })) {
            var i2 = w(a3, m + 1), c2 = i2[0], u2 = i2[1];
            try {
              h.pushState(c2, "", u2);
            } catch (t2) {
              s.location.assign(u2);
            }
            H(o2);
          }
        }, replace: function n2(e3, r2) {
          var o2 = t.Action.Replace, a3 = x(e3, r2);
          if (E(o2, a3, function() {
            n2(e3, r2);
          })) {
            var i2 = w(a3, m), c2 = i2[0], u2 = i2[1];
            h.replaceState(c2, "", u2), H(o2);
          }
        }, go: L, back: function() {
          L(-1);
        }, forward: function() {
          L(1);
        }, listen: function(t2) {
          return A.push(t2);
        }, block: function(t2) {
          var n2 = P.push(t2);
          return P.length === 1 && s.addEventListener(r, i), function() {
            n2(), P.length || s.removeEventListener(r, i);
          };
        } };
      }, t.createMemoryHistory = function(e2) {
        e2 === void 0 && (e2 = {});
        var r2 = e2, o2 = r2.initialEntries, i2 = o2 === void 0 ? ["/"] : o2, s = r2.initialIndex, h = i2.map(function(t2) {
          return n({ pathname: "/", search: "", hash: "", state: null, key: u() }, typeof t2 == "string" ? f(t2) : t2);
        }), p = a(s == null ? h.length - 1 : s, 0, h.length - 1), v = t.Action.Pop, d = h[p], g = c(), y = c();
        function m(t2, e3) {
          return e3 === void 0 && (e3 = null), n({ pathname: d.pathname, search: "", hash: "" }, typeof t2 == "string" ? f(t2) : t2, { state: e3, key: u() });
        }
        function b(t2, n2, e3) {
          return !y.length || (y.call({ action: t2, location: n2, retry: e3 }), false);
        }
        function A(t2, n2) {
          v = t2, d = n2, g.call({ action: v, location: d });
        }
        function P(n2) {
          var e3 = a(p + n2, 0, h.length - 1), r3 = t.Action.Pop, o3 = h[e3];
          b(r3, o3, function() {
            P(n2);
          }) && (p = e3, A(r3, o3));
        }
        return { get index() {
          return p;
        }, get action() {
          return v;
        }, get location() {
          return d;
        }, createHref: function(t2) {
          return typeof t2 == "string" ? t2 : l(t2);
        }, push: function n2(e3, r3) {
          var o3 = t.Action.Push, a2 = m(e3, r3);
          b(o3, a2, function() {
            n2(e3, r3);
          }) && (p += 1, h.splice(p, h.length, a2), A(o3, a2));
        }, replace: function n2(e3, r3) {
          var o3 = t.Action.Replace, a2 = m(e3, r3);
          b(o3, a2, function() {
            n2(e3, r3);
          }) && (h[p] = a2, A(o3, a2));
        }, go: P, back: function() {
          P(-1);
        }, forward: function() {
          P(1);
        }, listen: function(t2) {
          return g.push(t2);
        }, block: function(t2) {
          return y.push(t2);
        } };
      }, t.createPath = l, t.parsePath = f, Object.defineProperty(t, "__esModule", { value: true });
    });
  }
});

// ../../node_modules/.pnpm/history@5.3.0/node_modules/history/umd/history.development.js
var require_history_development = __commonJS({
  "../../node_modules/.pnpm/history@5.3.0/node_modules/history/umd/history.development.js"(exports, module2) {
    (function(global, factory) {
      typeof exports === "object" && typeof module2 !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.HistoryLibrary = {}));
    })(exports, function(exports2) {
      "use strict";
      function _extends() {
        _extends = Object.assign || function(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };
        return _extends.apply(this, arguments);
      }
      exports2.Action = void 0;
      (function(Action) {
        Action["Pop"] = "POP";
        Action["Push"] = "PUSH";
        Action["Replace"] = "REPLACE";
      })(exports2.Action || (exports2.Action = {}));
      var readOnly = function(obj) {
        return Object.freeze(obj);
      };
      function warning(cond, message) {
        if (!cond) {
          if (typeof console !== "undefined")
            console.warn(message);
          try {
            throw new Error(message);
          } catch (e) {
          }
        }
      }
      var BeforeUnloadEventType = "beforeunload";
      var HashChangeEventType = "hashchange";
      var PopStateEventType = "popstate";
      function createBrowserHistory(options) {
        if (options === void 0) {
          options = {};
        }
        var _options = options, _options$window = _options.window, window = _options$window === void 0 ? document.defaultView : _options$window;
        var globalHistory = window.history;
        function getIndexAndLocation() {
          var _window$location = window.location, pathname = _window$location.pathname, search = _window$location.search, hash = _window$location.hash;
          var state = globalHistory.state || {};
          return [state.idx, readOnly({
            pathname,
            search,
            hash,
            state: state.usr || null,
            key: state.key || "default"
          })];
        }
        var blockedPopTx = null;
        function handlePop() {
          if (blockedPopTx) {
            blockers.call(blockedPopTx);
            blockedPopTx = null;
          } else {
            var nextAction = exports2.Action.Pop;
            var _getIndexAndLocation = getIndexAndLocation(), nextIndex = _getIndexAndLocation[0], nextLocation = _getIndexAndLocation[1];
            if (blockers.length) {
              if (nextIndex != null) {
                var delta = index - nextIndex;
                if (delta) {
                  blockedPopTx = {
                    action: nextAction,
                    location: nextLocation,
                    retry: function retry() {
                      go(delta * -1);
                    }
                  };
                  go(delta);
                }
              } else {
                warning(false, "You are trying to block a POP navigation to a location that was not created by the history library. The block will fail silently in production, but in general you should do all navigation with the history library (instead of using window.history.pushState directly) to avoid this situation.");
              }
            } else {
              applyTx(nextAction);
            }
          }
        }
        window.addEventListener(PopStateEventType, handlePop);
        var action = exports2.Action.Pop;
        var _getIndexAndLocation2 = getIndexAndLocation(), index = _getIndexAndLocation2[0], location = _getIndexAndLocation2[1];
        var listeners = createEvents();
        var blockers = createEvents();
        if (index == null) {
          index = 0;
          globalHistory.replaceState(_extends({}, globalHistory.state, {
            idx: index
          }), "");
        }
        function createHref(to) {
          return typeof to === "string" ? to : createPath(to);
        }
        function getNextLocation(to, state) {
          if (state === void 0) {
            state = null;
          }
          return readOnly(_extends({
            pathname: location.pathname,
            hash: "",
            search: ""
          }, typeof to === "string" ? parsePath(to) : to, {
            state,
            key: createKey()
          }));
        }
        function getHistoryStateAndUrl(nextLocation, index2) {
          return [{
            usr: nextLocation.state,
            key: nextLocation.key,
            idx: index2
          }, createHref(nextLocation)];
        }
        function allowTx(action2, location2, retry) {
          return !blockers.length || (blockers.call({
            action: action2,
            location: location2,
            retry
          }), false);
        }
        function applyTx(nextAction) {
          action = nextAction;
          var _getIndexAndLocation3 = getIndexAndLocation();
          index = _getIndexAndLocation3[0];
          location = _getIndexAndLocation3[1];
          listeners.call({
            action,
            location
          });
        }
        function push(to, state) {
          var nextAction = exports2.Action.Push;
          var nextLocation = getNextLocation(to, state);
          function retry() {
            push(to, state);
          }
          if (allowTx(nextAction, nextLocation, retry)) {
            var _getHistoryStateAndUr = getHistoryStateAndUrl(nextLocation, index + 1), historyState = _getHistoryStateAndUr[0], url = _getHistoryStateAndUr[1];
            try {
              globalHistory.pushState(historyState, "", url);
            } catch (error) {
              window.location.assign(url);
            }
            applyTx(nextAction);
          }
        }
        function replace(to, state) {
          var nextAction = exports2.Action.Replace;
          var nextLocation = getNextLocation(to, state);
          function retry() {
            replace(to, state);
          }
          if (allowTx(nextAction, nextLocation, retry)) {
            var _getHistoryStateAndUr2 = getHistoryStateAndUrl(nextLocation, index), historyState = _getHistoryStateAndUr2[0], url = _getHistoryStateAndUr2[1];
            globalHistory.replaceState(historyState, "", url);
            applyTx(nextAction);
          }
        }
        function go(delta) {
          globalHistory.go(delta);
        }
        var history = {
          get action() {
            return action;
          },
          get location() {
            return location;
          },
          createHref,
          push,
          replace,
          go,
          back: function back() {
            go(-1);
          },
          forward: function forward() {
            go(1);
          },
          listen: function listen(listener) {
            return listeners.push(listener);
          },
          block: function block(blocker) {
            var unblock = blockers.push(blocker);
            if (blockers.length === 1) {
              window.addEventListener(BeforeUnloadEventType, promptBeforeUnload);
            }
            return function() {
              unblock();
              if (!blockers.length) {
                window.removeEventListener(BeforeUnloadEventType, promptBeforeUnload);
              }
            };
          }
        };
        return history;
      }
      function createHashHistory(options) {
        if (options === void 0) {
          options = {};
        }
        var _options2 = options, _options2$window = _options2.window, window = _options2$window === void 0 ? document.defaultView : _options2$window;
        var globalHistory = window.history;
        function getIndexAndLocation() {
          var _parsePath = parsePath(window.location.hash.substr(1)), _parsePath$pathname = _parsePath.pathname, pathname = _parsePath$pathname === void 0 ? "/" : _parsePath$pathname, _parsePath$search = _parsePath.search, search = _parsePath$search === void 0 ? "" : _parsePath$search, _parsePath$hash = _parsePath.hash, hash = _parsePath$hash === void 0 ? "" : _parsePath$hash;
          var state = globalHistory.state || {};
          return [state.idx, readOnly({
            pathname,
            search,
            hash,
            state: state.usr || null,
            key: state.key || "default"
          })];
        }
        var blockedPopTx = null;
        function handlePop() {
          if (blockedPopTx) {
            blockers.call(blockedPopTx);
            blockedPopTx = null;
          } else {
            var nextAction = exports2.Action.Pop;
            var _getIndexAndLocation4 = getIndexAndLocation(), nextIndex = _getIndexAndLocation4[0], nextLocation = _getIndexAndLocation4[1];
            if (blockers.length) {
              if (nextIndex != null) {
                var delta = index - nextIndex;
                if (delta) {
                  blockedPopTx = {
                    action: nextAction,
                    location: nextLocation,
                    retry: function retry() {
                      go(delta * -1);
                    }
                  };
                  go(delta);
                }
              } else {
                warning(false, "You are trying to block a POP navigation to a location that was not created by the history library. The block will fail silently in production, but in general you should do all navigation with the history library (instead of using window.history.pushState directly) to avoid this situation.");
              }
            } else {
              applyTx(nextAction);
            }
          }
        }
        window.addEventListener(PopStateEventType, handlePop);
        window.addEventListener(HashChangeEventType, function() {
          var _getIndexAndLocation5 = getIndexAndLocation(), nextLocation = _getIndexAndLocation5[1];
          if (createPath(nextLocation) !== createPath(location)) {
            handlePop();
          }
        });
        var action = exports2.Action.Pop;
        var _getIndexAndLocation6 = getIndexAndLocation(), index = _getIndexAndLocation6[0], location = _getIndexAndLocation6[1];
        var listeners = createEvents();
        var blockers = createEvents();
        if (index == null) {
          index = 0;
          globalHistory.replaceState(_extends({}, globalHistory.state, {
            idx: index
          }), "");
        }
        function getBaseHref() {
          var base = document.querySelector("base");
          var href = "";
          if (base && base.getAttribute("href")) {
            var url = window.location.href;
            var hashIndex = url.indexOf("#");
            href = hashIndex === -1 ? url : url.slice(0, hashIndex);
          }
          return href;
        }
        function createHref(to) {
          return getBaseHref() + "#" + (typeof to === "string" ? to : createPath(to));
        }
        function getNextLocation(to, state) {
          if (state === void 0) {
            state = null;
          }
          return readOnly(_extends({
            pathname: location.pathname,
            hash: "",
            search: ""
          }, typeof to === "string" ? parsePath(to) : to, {
            state,
            key: createKey()
          }));
        }
        function getHistoryStateAndUrl(nextLocation, index2) {
          return [{
            usr: nextLocation.state,
            key: nextLocation.key,
            idx: index2
          }, createHref(nextLocation)];
        }
        function allowTx(action2, location2, retry) {
          return !blockers.length || (blockers.call({
            action: action2,
            location: location2,
            retry
          }), false);
        }
        function applyTx(nextAction) {
          action = nextAction;
          var _getIndexAndLocation7 = getIndexAndLocation();
          index = _getIndexAndLocation7[0];
          location = _getIndexAndLocation7[1];
          listeners.call({
            action,
            location
          });
        }
        function push(to, state) {
          var nextAction = exports2.Action.Push;
          var nextLocation = getNextLocation(to, state);
          function retry() {
            push(to, state);
          }
          warning(nextLocation.pathname.charAt(0) === "/", "Relative pathnames are not supported in hash history.push(" + JSON.stringify(to) + ")");
          if (allowTx(nextAction, nextLocation, retry)) {
            var _getHistoryStateAndUr3 = getHistoryStateAndUrl(nextLocation, index + 1), historyState = _getHistoryStateAndUr3[0], url = _getHistoryStateAndUr3[1];
            try {
              globalHistory.pushState(historyState, "", url);
            } catch (error) {
              window.location.assign(url);
            }
            applyTx(nextAction);
          }
        }
        function replace(to, state) {
          var nextAction = exports2.Action.Replace;
          var nextLocation = getNextLocation(to, state);
          function retry() {
            replace(to, state);
          }
          warning(nextLocation.pathname.charAt(0) === "/", "Relative pathnames are not supported in hash history.replace(" + JSON.stringify(to) + ")");
          if (allowTx(nextAction, nextLocation, retry)) {
            var _getHistoryStateAndUr4 = getHistoryStateAndUrl(nextLocation, index), historyState = _getHistoryStateAndUr4[0], url = _getHistoryStateAndUr4[1];
            globalHistory.replaceState(historyState, "", url);
            applyTx(nextAction);
          }
        }
        function go(delta) {
          globalHistory.go(delta);
        }
        var history = {
          get action() {
            return action;
          },
          get location() {
            return location;
          },
          createHref,
          push,
          replace,
          go,
          back: function back() {
            go(-1);
          },
          forward: function forward() {
            go(1);
          },
          listen: function listen(listener) {
            return listeners.push(listener);
          },
          block: function block(blocker) {
            var unblock = blockers.push(blocker);
            if (blockers.length === 1) {
              window.addEventListener(BeforeUnloadEventType, promptBeforeUnload);
            }
            return function() {
              unblock();
              if (!blockers.length) {
                window.removeEventListener(BeforeUnloadEventType, promptBeforeUnload);
              }
            };
          }
        };
        return history;
      }
      function createMemoryHistory(options) {
        if (options === void 0) {
          options = {};
        }
        var _options3 = options, _options3$initialEntr = _options3.initialEntries, initialEntries = _options3$initialEntr === void 0 ? ["/"] : _options3$initialEntr, initialIndex = _options3.initialIndex;
        var entries = initialEntries.map(function(entry) {
          var location2 = readOnly(_extends({
            pathname: "/",
            search: "",
            hash: "",
            state: null,
            key: createKey()
          }, typeof entry === "string" ? parsePath(entry) : entry));
          warning(location2.pathname.charAt(0) === "/", "Relative pathnames are not supported in createMemoryHistory({ initialEntries }) (invalid entry: " + JSON.stringify(entry) + ")");
          return location2;
        });
        var index = clamp(initialIndex == null ? entries.length - 1 : initialIndex, 0, entries.length - 1);
        var action = exports2.Action.Pop;
        var location = entries[index];
        var listeners = createEvents();
        var blockers = createEvents();
        function createHref(to) {
          return typeof to === "string" ? to : createPath(to);
        }
        function getNextLocation(to, state) {
          if (state === void 0) {
            state = null;
          }
          return readOnly(_extends({
            pathname: location.pathname,
            search: "",
            hash: ""
          }, typeof to === "string" ? parsePath(to) : to, {
            state,
            key: createKey()
          }));
        }
        function allowTx(action2, location2, retry) {
          return !blockers.length || (blockers.call({
            action: action2,
            location: location2,
            retry
          }), false);
        }
        function applyTx(nextAction, nextLocation) {
          action = nextAction;
          location = nextLocation;
          listeners.call({
            action,
            location
          });
        }
        function push(to, state) {
          var nextAction = exports2.Action.Push;
          var nextLocation = getNextLocation(to, state);
          function retry() {
            push(to, state);
          }
          warning(location.pathname.charAt(0) === "/", "Relative pathnames are not supported in memory history.push(" + JSON.stringify(to) + ")");
          if (allowTx(nextAction, nextLocation, retry)) {
            index += 1;
            entries.splice(index, entries.length, nextLocation);
            applyTx(nextAction, nextLocation);
          }
        }
        function replace(to, state) {
          var nextAction = exports2.Action.Replace;
          var nextLocation = getNextLocation(to, state);
          function retry() {
            replace(to, state);
          }
          warning(location.pathname.charAt(0) === "/", "Relative pathnames are not supported in memory history.replace(" + JSON.stringify(to) + ")");
          if (allowTx(nextAction, nextLocation, retry)) {
            entries[index] = nextLocation;
            applyTx(nextAction, nextLocation);
          }
        }
        function go(delta) {
          var nextIndex = clamp(index + delta, 0, entries.length - 1);
          var nextAction = exports2.Action.Pop;
          var nextLocation = entries[nextIndex];
          function retry() {
            go(delta);
          }
          if (allowTx(nextAction, nextLocation, retry)) {
            index = nextIndex;
            applyTx(nextAction, nextLocation);
          }
        }
        var history = {
          get index() {
            return index;
          },
          get action() {
            return action;
          },
          get location() {
            return location;
          },
          createHref,
          push,
          replace,
          go,
          back: function back() {
            go(-1);
          },
          forward: function forward() {
            go(1);
          },
          listen: function listen(listener) {
            return listeners.push(listener);
          },
          block: function block(blocker) {
            return blockers.push(blocker);
          }
        };
        return history;
      }
      function clamp(n, lowerBound, upperBound) {
        return Math.min(Math.max(n, lowerBound), upperBound);
      }
      function promptBeforeUnload(event) {
        event.preventDefault();
        event.returnValue = "";
      }
      function createEvents() {
        var handlers = [];
        return {
          get length() {
            return handlers.length;
          },
          push: function push(fn) {
            handlers.push(fn);
            return function() {
              handlers = handlers.filter(function(handler) {
                return handler !== fn;
              });
            };
          },
          call: function call(arg) {
            handlers.forEach(function(fn) {
              return fn && fn(arg);
            });
          }
        };
      }
      function createKey() {
        return Math.random().toString(36).substr(2, 8);
      }
      function createPath(_ref) {
        var _ref$pathname = _ref.pathname, pathname = _ref$pathname === void 0 ? "/" : _ref$pathname, _ref$search = _ref.search, search = _ref$search === void 0 ? "" : _ref$search, _ref$hash = _ref.hash, hash = _ref$hash === void 0 ? "" : _ref$hash;
        if (search && search !== "?")
          pathname += search.charAt(0) === "?" ? search : "?" + search;
        if (hash && hash !== "#")
          pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
        return pathname;
      }
      function parsePath(path) {
        var parsedPath = {};
        if (path) {
          var hashIndex = path.indexOf("#");
          if (hashIndex >= 0) {
            parsedPath.hash = path.substr(hashIndex);
            path = path.substr(0, hashIndex);
          }
          var searchIndex = path.indexOf("?");
          if (searchIndex >= 0) {
            parsedPath.search = path.substr(searchIndex);
            path = path.substr(0, searchIndex);
          }
          if (path) {
            parsedPath.pathname = path;
          }
        }
        return parsedPath;
      }
      exports2.createBrowserHistory = createBrowserHistory;
      exports2.createHashHistory = createHashHistory;
      exports2.createMemoryHistory = createMemoryHistory;
      exports2.createPath = createPath;
      exports2.parsePath = parsePath;
      Object.defineProperty(exports2, "__esModule", { value: true });
    });
  }
});

// ../../node_modules/.pnpm/history@5.3.0/node_modules/history/main.js
var require_main = __commonJS({
  "../../node_modules/.pnpm/history@5.3.0/node_modules/history/main.js"(exports, module2) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module2.exports = require_history_production_min();
    } else {
      module2.exports = require_history_development();
    }
  }
});

// ../../node_modules/.pnpm/react-router@6.3.0_react@18.1.0/node_modules/react-router/umd/react-router.production.min.js
var require_react_router_production_min = __commonJS({
  "../../node_modules/.pnpm/react-router@6.3.0_react@18.1.0/node_modules/react-router/umd/react-router.production.min.js"(exports, module2) {
    !function(e, t) {
      typeof exports == "object" && typeof module2 != "undefined" ? t(exports, require_main(), require_react()) : typeof define == "function" && define.amd ? define(["exports", "history", "react"], t) : t((e = e || self).ReactRouter = {}, e.HistoryLibrary, e.React);
    }(exports, function(e, t, n) {
      "use strict";
      const a = n.createContext(null), r = n.createContext(null), i = n.createContext({ outlet: null, matches: [] });
      function l(e2, t2) {
        if (!e2)
          throw new Error(t2);
      }
      function o(e2, n2, a2) {
        a2 === void 0 && (a2 = "/");
        let r2 = g((typeof n2 == "string" ? t.parsePath(n2) : n2).pathname || "/", a2);
        if (r2 == null)
          return null;
        let i2 = s(e2);
        !function(e3) {
          e3.sort((e4, t2) => e4.score !== t2.score ? t2.score - e4.score : function(e5, t3) {
            return e5.length === t3.length && e5.slice(0, -1).every((e6, n3) => e6 === t3[n3]) ? e5[e5.length - 1] - t3[t3.length - 1] : 0;
          }(e4.routesMeta.map((e5) => e5.childrenIndex), t2.routesMeta.map((e5) => e5.childrenIndex)));
        }(i2);
        let l2 = null;
        for (let e3 = 0; l2 == null && e3 < i2.length; ++e3)
          l2 = p(i2[e3], r2);
        return l2;
      }
      function s(e2, t2, n2, a2) {
        return t2 === void 0 && (t2 = []), n2 === void 0 && (n2 = []), a2 === void 0 && (a2 = ""), e2.forEach((e3, r2) => {
          let i2 = { relativePath: e3.path || "", caseSensitive: e3.caseSensitive === true, childrenIndex: r2, route: e3 };
          i2.relativePath.startsWith("/") && (i2.relativePath.startsWith(a2) || l(false), i2.relativePath = i2.relativePath.slice(a2.length));
          let o2 = v([a2, i2.relativePath]), u2 = n2.concat(i2);
          e3.children && e3.children.length > 0 && (e3.index === true && l(false), s(e3.children, t2, u2, o2)), (e3.path != null || e3.index) && t2.push({ path: o2, score: h(o2, e3.index), routesMeta: u2 });
        }), t2;
      }
      const u = /^:\w+$/, c = (e2) => e2 === "*";
      function h(e2, t2) {
        let n2 = e2.split("/"), a2 = n2.length;
        return n2.some(c) && (a2 += -2), t2 && (a2 += 2), n2.filter((e3) => !c(e3)).reduce((e3, t3) => e3 + (u.test(t3) ? 3 : t3 === "" ? 1 : 10), a2);
      }
      function p(e2, t2) {
        let { routesMeta: n2 } = e2, a2 = {}, r2 = "/", i2 = [];
        for (let e3 = 0; e3 < n2.length; ++e3) {
          let l2 = n2[e3], o2 = e3 === n2.length - 1, s2 = r2 === "/" ? t2 : t2.slice(r2.length) || "/", u2 = f({ path: l2.relativePath, caseSensitive: l2.caseSensitive, end: o2 }, s2);
          if (!u2)
            return null;
          Object.assign(a2, u2.params);
          let c2 = l2.route;
          i2.push({ params: a2, pathname: v([r2, u2.pathname]), pathnameBase: y(v([r2, u2.pathnameBase])), route: c2 }), u2.pathnameBase !== "/" && (r2 = v([r2, u2.pathnameBase]));
        }
        return i2;
      }
      function f(e2, t2) {
        typeof e2 == "string" && (e2 = { path: e2, caseSensitive: false, end: true });
        let [n2, a2] = function(e3, t3, n3) {
          t3 === void 0 && (t3 = false);
          n3 === void 0 && (n3 = true);
          let a3 = [], r3 = "^" + e3.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/:(\w+)/g, (e4, t4) => (a3.push(t4), "([^\\/]+)"));
          e3.endsWith("*") ? (a3.push("*"), r3 += e3 === "*" || e3 === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r3 += n3 ? "\\/*$" : "(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)";
          return [new RegExp(r3, t3 ? void 0 : "i"), a3];
        }(e2.path, e2.caseSensitive, e2.end), r2 = t2.match(n2);
        if (!r2)
          return null;
        let i2 = r2[0], l2 = i2.replace(/(.)\/+$/, "$1"), o2 = r2.slice(1);
        return { params: a2.reduce((e3, t3, n3) => {
          if (t3 === "*") {
            let e4 = o2[n3] || "";
            l2 = i2.slice(0, i2.length - e4.length).replace(/(.)\/+$/, "$1");
          }
          return e3[t3] = function(e4, t4) {
            try {
              return decodeURIComponent(e4);
            } catch (t5) {
              return e4;
            }
          }(o2[n3] || ""), e3;
        }, {}), pathname: i2, pathnameBase: l2, pattern: e2 };
      }
      function m(e2, n2) {
        n2 === void 0 && (n2 = "/");
        let { pathname: a2, search: r2 = "", hash: i2 = "" } = typeof e2 == "string" ? t.parsePath(e2) : e2, l2 = a2 ? a2.startsWith("/") ? a2 : function(e3, t2) {
          let n3 = t2.replace(/\/+$/, "").split("/");
          return e3.split("/").forEach((e4) => {
            e4 === ".." ? n3.length > 1 && n3.pop() : e4 !== "." && n3.push(e4);
          }), n3.length > 1 ? n3.join("/") : "/";
        }(a2, n2) : n2;
        return { pathname: l2, search: x(r2), hash: P(i2) };
      }
      function d(e2, n2, a2) {
        let r2, i2 = typeof e2 == "string" ? t.parsePath(e2) : e2, l2 = e2 === "" || i2.pathname === "" ? "/" : i2.pathname;
        if (l2 == null)
          r2 = a2;
        else {
          let e3 = n2.length - 1;
          if (l2.startsWith("..")) {
            let t2 = l2.split("/");
            for (; t2[0] === ".."; )
              t2.shift(), e3 -= 1;
            i2.pathname = t2.join("/");
          }
          r2 = e3 >= 0 ? n2[e3] : "/";
        }
        let o2 = m(i2, r2);
        return l2 && l2 !== "/" && l2.endsWith("/") && !o2.pathname.endsWith("/") && (o2.pathname += "/"), o2;
      }
      function g(e2, t2) {
        if (t2 === "/")
          return e2;
        if (!e2.toLowerCase().startsWith(t2.toLowerCase()))
          return null;
        let n2 = e2.charAt(t2.length);
        return n2 && n2 !== "/" ? null : e2.slice(t2.length) || "/";
      }
      const v = (e2) => e2.join("/").replace(/\/\/+/g, "/"), y = (e2) => e2.replace(/\/+$/, "").replace(/^\/*/, "/"), x = (e2) => e2 && e2 !== "?" ? e2.startsWith("?") ? e2 : "?" + e2 : "", P = (e2) => e2 && e2 !== "#" ? e2.startsWith("#") ? e2 : "#" + e2 : "";
      function C() {
        return n.useContext(r) != null;
      }
      function b() {
        return C() || l(false), n.useContext(r).location;
      }
      function E() {
        C() || l(false);
        let { basename: e2, navigator: t2 } = n.useContext(a), { matches: r2 } = n.useContext(i), { pathname: o2 } = b(), s2 = JSON.stringify(r2.map((e3) => e3.pathnameBase)), u2 = n.useRef(false);
        return n.useEffect(() => {
          u2.current = true;
        }), n.useCallback(function(n2, a2) {
          if (a2 === void 0 && (a2 = {}), !u2.current)
            return;
          if (typeof n2 == "number")
            return void t2.go(n2);
          let r3 = d(n2, JSON.parse(s2), o2);
          e2 !== "/" && (r3.pathname = v([e2, r3.pathname])), (a2.replace ? t2.replace : t2.push)(r3, a2.state);
        }, [e2, t2, s2, o2]);
      }
      const R = n.createContext(null);
      function S(e2) {
        let t2 = n.useContext(i).outlet;
        return t2 ? n.createElement(R.Provider, { value: e2 }, t2) : t2;
      }
      function $(e2) {
        let { matches: t2 } = n.useContext(i), { pathname: a2 } = b(), r2 = JSON.stringify(t2.map((e3) => e3.pathnameBase));
        return n.useMemo(() => d(e2, JSON.parse(r2), a2), [e2, r2, a2]);
      }
      function O(e2, a2) {
        C() || l(false);
        let r2, { matches: s2 } = n.useContext(i), u2 = s2[s2.length - 1], c2 = u2 ? u2.params : {}, h2 = (u2 && u2.pathname, u2 ? u2.pathnameBase : "/"), p2 = (u2 && u2.route, b());
        if (a2) {
          var f2;
          let e3 = typeof a2 == "string" ? t.parsePath(a2) : a2;
          h2 === "/" || ((f2 = e3.pathname) == null ? void 0 : f2.startsWith(h2)) || l(false), r2 = e3;
        } else
          r2 = p2;
        let m2 = r2.pathname || "/", d2 = o(e2, { pathname: h2 === "/" ? m2 : m2.slice(h2.length) || "/" });
        return M(d2 && d2.map((e3) => Object.assign({}, e3, { params: Object.assign({}, c2, e3.params), pathname: v([h2, e3.pathname]), pathnameBase: e3.pathnameBase === "/" ? h2 : v([h2, e3.pathnameBase]) })), s2);
      }
      function M(e2, t2) {
        return t2 === void 0 && (t2 = []), e2 == null ? null : e2.reduceRight((a2, r2, l2) => n.createElement(i.Provider, { children: r2.route.element !== void 0 ? r2.route.element : a2, value: { outlet: a2, matches: t2.concat(e2.slice(0, l2 + 1)) } }), null);
      }
      function N(e2) {
        l(false);
      }
      function W(e2) {
        let { basename: i2 = "/", children: o2 = null, location: s2, navigationType: u2 = t.Action.Pop, navigator: c2, static: h2 = false } = e2;
        C() && l(false);
        let p2 = y(i2), f2 = n.useMemo(() => ({ basename: p2, navigator: c2, static: h2 }), [p2, c2, h2]);
        typeof s2 == "string" && (s2 = t.parsePath(s2));
        let { pathname: m2 = "/", search: d2 = "", hash: v2 = "", state: x2 = null, key: P2 = "default" } = s2, b2 = n.useMemo(() => {
          let e3 = g(m2, p2);
          return e3 == null ? null : { pathname: e3, search: d2, hash: v2, state: x2, key: P2 };
        }, [p2, m2, d2, v2, x2, P2]);
        return b2 == null ? null : n.createElement(a.Provider, { value: f2 }, n.createElement(r.Provider, { children: o2, value: { location: b2, navigationType: u2 } }));
      }
      function j(e2) {
        let t2 = [];
        return n.Children.forEach(e2, (e3) => {
          if (!n.isValidElement(e3))
            return;
          if (e3.type === n.Fragment)
            return void t2.push.apply(t2, j(e3.props.children));
          e3.type !== N && l(false);
          let a2 = { caseSensitive: e3.props.caseSensitive, element: e3.props.element, index: e3.props.index, path: e3.props.path };
          e3.props.children && (a2.children = j(e3.props.children)), t2.push(a2);
        }), t2;
      }
      Object.defineProperty(e, "NavigationType", { enumerable: true, get: function() {
        return t.Action;
      } }), Object.defineProperty(e, "createPath", { enumerable: true, get: function() {
        return t.createPath;
      } }), Object.defineProperty(e, "parsePath", { enumerable: true, get: function() {
        return t.parsePath;
      } }), e.MemoryRouter = function(e2) {
        let { basename: a2, children: r2, initialEntries: i2, initialIndex: l2 } = e2, o2 = n.useRef();
        o2.current == null && (o2.current = t.createMemoryHistory({ initialEntries: i2, initialIndex: l2 }));
        let s2 = o2.current, [u2, c2] = n.useState({ action: s2.action, location: s2.location });
        return n.useLayoutEffect(() => s2.listen(c2), [s2]), n.createElement(W, { basename: a2, children: r2, location: u2.location, navigationType: u2.action, navigator: s2 });
      }, e.Navigate = function(e2) {
        let { to: t2, replace: a2, state: r2 } = e2;
        C() || l(false);
        let i2 = E();
        return n.useEffect(() => {
          i2(t2, { replace: a2, state: r2 });
        }), null;
      }, e.Outlet = function(e2) {
        return S(e2.context);
      }, e.Route = N, e.Router = W, e.Routes = function(e2) {
        let { children: t2, location: n2 } = e2;
        return O(j(t2), n2);
      }, e.UNSAFE_LocationContext = r, e.UNSAFE_NavigationContext = a, e.UNSAFE_RouteContext = i, e.createRoutesFromChildren = j, e.generatePath = function(e2, t2) {
        return t2 === void 0 && (t2 = {}), e2.replace(/:(\w+)/g, (e3, n2) => (t2[n2] == null && l(false), t2[n2])).replace(/\/*\*$/, (e3) => t2["*"] == null ? "" : t2["*"].replace(/^\/*/, "/"));
      }, e.matchPath = f, e.matchRoutes = o, e.renderMatches = function(e2) {
        return M(e2);
      }, e.resolvePath = m, e.useHref = function(e2) {
        C() || l(false);
        let { basename: r2, navigator: i2 } = n.useContext(a), { hash: o2, pathname: s2, search: u2 } = $(e2), c2 = s2;
        if (r2 !== "/") {
          let n2 = function(e3) {
            return e3 === "" || e3.pathname === "" ? "/" : typeof e3 == "string" ? t.parsePath(e3).pathname : e3.pathname;
          }(e2), a2 = n2 != null && n2.endsWith("/");
          c2 = s2 === "/" ? r2 + (a2 ? "/" : "") : v([r2, s2]);
        }
        return i2.createHref({ pathname: c2, search: u2, hash: o2 });
      }, e.useInRouterContext = C, e.useLocation = b, e.useMatch = function(e2) {
        C() || l(false);
        let { pathname: t2 } = b();
        return n.useMemo(() => f(e2, t2), [t2, e2]);
      }, e.useNavigate = E, e.useNavigationType = function() {
        return n.useContext(r).navigationType;
      }, e.useOutlet = S, e.useOutletContext = function() {
        return n.useContext(R);
      }, e.useParams = function() {
        let { matches: e2 } = n.useContext(i), t2 = e2[e2.length - 1];
        return t2 ? t2.params : {};
      }, e.useResolvedPath = $, e.useRoutes = O, Object.defineProperty(e, "__esModule", { value: true });
    });
  }
});

// ../../node_modules/.pnpm/react-router@6.3.0_react@18.1.0/node_modules/react-router/umd/react-router.development.js
var require_react_router_development = __commonJS({
  "../../node_modules/.pnpm/react-router@6.3.0_react@18.1.0/node_modules/react-router/umd/react-router.development.js"(exports, module2) {
    (function(global, factory) {
      typeof exports === "object" && typeof module2 !== "undefined" ? factory(exports, require_main(), require_react()) : typeof define === "function" && define.amd ? define(["exports", "history", "react"], factory) : (global = global || self, factory(global.ReactRouter = {}, global.HistoryLibrary, global.React));
    })(exports, function(exports2, history, React2) {
      "use strict";
      const NavigationContext = /* @__PURE__ */ React2.createContext(null);
      {
        NavigationContext.displayName = "Navigation";
      }
      const LocationContext = /* @__PURE__ */ React2.createContext(null);
      {
        LocationContext.displayName = "Location";
      }
      const RouteContext = /* @__PURE__ */ React2.createContext({
        outlet: null,
        matches: []
      });
      {
        RouteContext.displayName = "Route";
      }
      function invariant(cond, message) {
        if (!cond)
          throw new Error(message);
      }
      function warning(cond, message) {
        if (!cond) {
          if (typeof console !== "undefined")
            console.warn(message);
          try {
            throw new Error(message);
          } catch (e) {
          }
        }
      }
      const alreadyWarned = {};
      function warningOnce(key, cond, message) {
        if (!cond && !alreadyWarned[key]) {
          alreadyWarned[key] = true;
          warning(false, message);
        }
      }
      function generatePath(path, params) {
        if (params === void 0) {
          params = {};
        }
        return path.replace(/:(\w+)/g, (_, key) => {
          !(params[key] != null) ? invariant(false, 'Missing ":' + key + '" param') : void 0;
          return params[key];
        }).replace(/\/*\*$/, (_) => params["*"] == null ? "" : params["*"].replace(/^\/*/, "/"));
      }
      function matchRoutes(routes, locationArg, basename) {
        if (basename === void 0) {
          basename = "/";
        }
        let location = typeof locationArg === "string" ? history.parsePath(locationArg) : locationArg;
        let pathname = stripBasename(location.pathname || "/", basename);
        if (pathname == null) {
          return null;
        }
        let branches = flattenRoutes(routes);
        rankRouteBranches(branches);
        let matches = null;
        for (let i = 0; matches == null && i < branches.length; ++i) {
          matches = matchRouteBranch(branches[i], pathname);
        }
        return matches;
      }
      function flattenRoutes(routes, branches, parentsMeta, parentPath) {
        if (branches === void 0) {
          branches = [];
        }
        if (parentsMeta === void 0) {
          parentsMeta = [];
        }
        if (parentPath === void 0) {
          parentPath = "";
        }
        routes.forEach((route, index) => {
          let meta = {
            relativePath: route.path || "",
            caseSensitive: route.caseSensitive === true,
            childrenIndex: index,
            route
          };
          if (meta.relativePath.startsWith("/")) {
            !meta.relativePath.startsWith(parentPath) ? invariant(false, 'Absolute route path "' + meta.relativePath + '" nested under path ' + ('"' + parentPath + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.") : void 0;
            meta.relativePath = meta.relativePath.slice(parentPath.length);
          }
          let path = joinPaths([parentPath, meta.relativePath]);
          let routesMeta = parentsMeta.concat(meta);
          if (route.children && route.children.length > 0) {
            !(route.index !== true) ? invariant(false, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + path + '".')) : void 0;
            flattenRoutes(route.children, branches, routesMeta, path);
          }
          if (route.path == null && !route.index) {
            return;
          }
          branches.push({
            path,
            score: computeScore(path, route.index),
            routesMeta
          });
        });
        return branches;
      }
      function rankRouteBranches(branches) {
        branches.sort((a, b) => a.score !== b.score ? b.score - a.score : compareIndexes(a.routesMeta.map((meta) => meta.childrenIndex), b.routesMeta.map((meta) => meta.childrenIndex)));
      }
      const paramRe = /^:\w+$/;
      const dynamicSegmentValue = 3;
      const indexRouteValue = 2;
      const emptySegmentValue = 1;
      const staticSegmentValue = 10;
      const splatPenalty = -2;
      const isSplat = (s) => s === "*";
      function computeScore(path, index) {
        let segments = path.split("/");
        let initialScore = segments.length;
        if (segments.some(isSplat)) {
          initialScore += splatPenalty;
        }
        if (index) {
          initialScore += indexRouteValue;
        }
        return segments.filter((s) => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
      }
      function compareIndexes(a, b) {
        let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
        return siblings ? a[a.length - 1] - b[b.length - 1] : 0;
      }
      function matchRouteBranch(branch, pathname) {
        let {
          routesMeta
        } = branch;
        let matchedParams = {};
        let matchedPathname = "/";
        let matches = [];
        for (let i = 0; i < routesMeta.length; ++i) {
          let meta = routesMeta[i];
          let end = i === routesMeta.length - 1;
          let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
          let match = matchPath2({
            path: meta.relativePath,
            caseSensitive: meta.caseSensitive,
            end
          }, remainingPathname);
          if (!match)
            return null;
          Object.assign(matchedParams, match.params);
          let route = meta.route;
          matches.push({
            params: matchedParams,
            pathname: joinPaths([matchedPathname, match.pathname]),
            pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
            route
          });
          if (match.pathnameBase !== "/") {
            matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
          }
        }
        return matches;
      }
      function matchPath2(pattern, pathname) {
        if (typeof pattern === "string") {
          pattern = {
            path: pattern,
            caseSensitive: false,
            end: true
          };
        }
        let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
        let match = pathname.match(matcher);
        if (!match)
          return null;
        let matchedPathname = match[0];
        let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
        let captureGroups = match.slice(1);
        let params = paramNames.reduce((memo, paramName, index) => {
          if (paramName === "*") {
            let splatValue = captureGroups[index] || "";
            pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
          }
          memo[paramName] = safelyDecodeURIComponent(captureGroups[index] || "", paramName);
          return memo;
        }, {});
        return {
          params,
          pathname: matchedPathname,
          pathnameBase,
          pattern
        };
      }
      function compilePath(path, caseSensitive, end) {
        if (caseSensitive === void 0) {
          caseSensitive = false;
        }
        if (end === void 0) {
          end = true;
        }
        warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
        let paramNames = [];
        let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/:(\w+)/g, (_, paramName) => {
          paramNames.push(paramName);
          return "([^\\/]+)";
        });
        if (path.endsWith("*")) {
          paramNames.push("*");
          regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
        } else {
          regexpSource += end ? "\\/*$" : "(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)";
        }
        let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
        return [matcher, paramNames];
      }
      function safelyDecodeURIComponent(value, paramName) {
        try {
          return decodeURIComponent(value);
        } catch (error) {
          warning(false, 'The value for the URL param "' + paramName + '" will not be decoded because' + (' the string "' + value + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + error + ")."));
          return value;
        }
      }
      function resolvePath(to, fromPathname) {
        if (fromPathname === void 0) {
          fromPathname = "/";
        }
        let {
          pathname: toPathname,
          search = "",
          hash = ""
        } = typeof to === "string" ? history.parsePath(to) : to;
        let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
        return {
          pathname,
          search: normalizeSearch(search),
          hash: normalizeHash(hash)
        };
      }
      function resolvePathname(relativePath, fromPathname) {
        let segments = fromPathname.replace(/\/+$/, "").split("/");
        let relativeSegments = relativePath.split("/");
        relativeSegments.forEach((segment) => {
          if (segment === "..") {
            if (segments.length > 1)
              segments.pop();
          } else if (segment !== ".") {
            segments.push(segment);
          }
        });
        return segments.length > 1 ? segments.join("/") : "/";
      }
      function resolveTo(toArg, routePathnames, locationPathname) {
        let to = typeof toArg === "string" ? history.parsePath(toArg) : toArg;
        let toPathname = toArg === "" || to.pathname === "" ? "/" : to.pathname;
        let from;
        if (toPathname == null) {
          from = locationPathname;
        } else {
          let routePathnameIndex = routePathnames.length - 1;
          if (toPathname.startsWith("..")) {
            let toSegments = toPathname.split("/");
            while (toSegments[0] === "..") {
              toSegments.shift();
              routePathnameIndex -= 1;
            }
            to.pathname = toSegments.join("/");
          }
          from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
        }
        let path = resolvePath(to, from);
        if (toPathname && toPathname !== "/" && toPathname.endsWith("/") && !path.pathname.endsWith("/")) {
          path.pathname += "/";
        }
        return path;
      }
      function getToPathname(to) {
        return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? history.parsePath(to).pathname : to.pathname;
      }
      function stripBasename(pathname, basename) {
        if (basename === "/")
          return pathname;
        if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
          return null;
        }
        let nextChar = pathname.charAt(basename.length);
        if (nextChar && nextChar !== "/") {
          return null;
        }
        return pathname.slice(basename.length) || "/";
      }
      const joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
      const normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
      const normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
      const normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
      function useHref(to) {
        !useInRouterContext() ? invariant(false, "useHref() may be used only in the context of a <Router> component.") : void 0;
        let {
          basename,
          navigator
        } = React2.useContext(NavigationContext);
        let {
          hash,
          pathname,
          search
        } = useResolvedPath(to);
        let joinedPathname = pathname;
        if (basename !== "/") {
          let toPathname = getToPathname(to);
          let endsWithSlash = toPathname != null && toPathname.endsWith("/");
          joinedPathname = pathname === "/" ? basename + (endsWithSlash ? "/" : "") : joinPaths([basename, pathname]);
        }
        return navigator.createHref({
          pathname: joinedPathname,
          search,
          hash
        });
      }
      function useInRouterContext() {
        return React2.useContext(LocationContext) != null;
      }
      function useLocation2() {
        !useInRouterContext() ? invariant(false, "useLocation() may be used only in the context of a <Router> component.") : void 0;
        return React2.useContext(LocationContext).location;
      }
      function useNavigationType() {
        return React2.useContext(LocationContext).navigationType;
      }
      function useMatch(pattern) {
        !useInRouterContext() ? invariant(false, "useMatch() may be used only in the context of a <Router> component.") : void 0;
        let {
          pathname
        } = useLocation2();
        return React2.useMemo(() => matchPath2(pattern, pathname), [pathname, pattern]);
      }
      function useNavigate() {
        !useInRouterContext() ? invariant(false, "useNavigate() may be used only in the context of a <Router> component.") : void 0;
        let {
          basename,
          navigator
        } = React2.useContext(NavigationContext);
        let {
          matches
        } = React2.useContext(RouteContext);
        let {
          pathname: locationPathname
        } = useLocation2();
        let routePathnamesJson = JSON.stringify(matches.map((match) => match.pathnameBase));
        let activeRef = React2.useRef(false);
        React2.useEffect(() => {
          activeRef.current = true;
        });
        let navigate = React2.useCallback(function(to, options) {
          if (options === void 0) {
            options = {};
          }
          warning(activeRef.current, "You should call navigate() in a React.useEffect(), not when your component is first rendered.");
          if (!activeRef.current)
            return;
          if (typeof to === "number") {
            navigator.go(to);
            return;
          }
          let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname);
          if (basename !== "/") {
            path.pathname = joinPaths([basename, path.pathname]);
          }
          (!!options.replace ? navigator.replace : navigator.push)(path, options.state);
        }, [basename, navigator, routePathnamesJson, locationPathname]);
        return navigate;
      }
      const OutletContext = /* @__PURE__ */ React2.createContext(null);
      function useOutletContext() {
        return React2.useContext(OutletContext);
      }
      function useOutlet2(context) {
        let outlet = React2.useContext(RouteContext).outlet;
        if (outlet) {
          return /* @__PURE__ */ React2.createElement(OutletContext.Provider, {
            value: context
          }, outlet);
        }
        return outlet;
      }
      function useParams() {
        let {
          matches
        } = React2.useContext(RouteContext);
        let routeMatch = matches[matches.length - 1];
        return routeMatch ? routeMatch.params : {};
      }
      function useResolvedPath(to) {
        let {
          matches
        } = React2.useContext(RouteContext);
        let {
          pathname: locationPathname
        } = useLocation2();
        let routePathnamesJson = JSON.stringify(matches.map((match) => match.pathnameBase));
        return React2.useMemo(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname), [to, routePathnamesJson, locationPathname]);
      }
      function useRoutes(routes, locationArg) {
        !useInRouterContext() ? invariant(false, "useRoutes() may be used only in the context of a <Router> component.") : void 0;
        let {
          matches: parentMatches
        } = React2.useContext(RouteContext);
        let routeMatch = parentMatches[parentMatches.length - 1];
        let parentParams = routeMatch ? routeMatch.params : {};
        let parentPathname = routeMatch ? routeMatch.pathname : "/";
        let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
        let parentRoute = routeMatch && routeMatch.route;
        {
          let parentPath = parentRoute && parentRoute.path || "";
          warningOnce(parentPathname, !parentRoute || parentPath.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + parentPathname + '" (under <Route path="' + parentPath + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + parentPath + '"> to <Route ') + ('path="' + (parentPath === "/" ? "*" : parentPath + "/*") + '">.'));
        }
        let locationFromContext = useLocation2();
        let location;
        if (locationArg) {
          var _parsedLocationArg$pa;
          let parsedLocationArg = typeof locationArg === "string" ? history.parsePath(locationArg) : locationArg;
          !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? invariant(false, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + parentPathnameBase + '" ') + ('but pathname "' + parsedLocationArg.pathname + '" was given in the `location` prop.')) : void 0;
          location = parsedLocationArg;
        } else {
          location = locationFromContext;
        }
        let pathname = location.pathname || "/";
        let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
        let matches = matchRoutes(routes, {
          pathname: remainingPathname
        });
        {
          warning(parentRoute || matches != null, 'No routes matched location "' + location.pathname + location.search + location.hash + '" ');
          warning(matches == null || matches[matches.length - 1].route.element !== void 0, 'Matched leaf route at location "' + location.pathname + location.search + location.hash + '" does not have an element. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.');
        }
        return _renderMatches(matches && matches.map((match) => Object.assign({}, match, {
          params: Object.assign({}, parentParams, match.params),
          pathname: joinPaths([parentPathnameBase, match.pathname]),
          pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([parentPathnameBase, match.pathnameBase])
        })), parentMatches);
      }
      function _renderMatches(matches, parentMatches) {
        if (parentMatches === void 0) {
          parentMatches = [];
        }
        if (matches == null)
          return null;
        return matches.reduceRight((outlet, match, index) => {
          return /* @__PURE__ */ React2.createElement(RouteContext.Provider, {
            children: match.route.element !== void 0 ? match.route.element : outlet,
            value: {
              outlet,
              matches: parentMatches.concat(matches.slice(0, index + 1))
            }
          });
        }, null);
      }
      function MemoryRouter(_ref) {
        let {
          basename,
          children,
          initialEntries,
          initialIndex
        } = _ref;
        let historyRef = React2.useRef();
        if (historyRef.current == null) {
          historyRef.current = history.createMemoryHistory({
            initialEntries,
            initialIndex
          });
        }
        let history$1 = historyRef.current;
        let [state, setState] = React2.useState({
          action: history$1.action,
          location: history$1.location
        });
        React2.useLayoutEffect(() => history$1.listen(setState), [history$1]);
        return /* @__PURE__ */ React2.createElement(Router, {
          basename,
          children,
          location: state.location,
          navigationType: state.action,
          navigator: history$1
        });
      }
      function Navigate(_ref2) {
        let {
          to,
          replace,
          state
        } = _ref2;
        !useInRouterContext() ? invariant(false, "<Navigate> may be used only in the context of a <Router> component.") : void 0;
        warning(!React2.useContext(NavigationContext).static, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
        let navigate = useNavigate();
        React2.useEffect(() => {
          navigate(to, {
            replace,
            state
          });
        });
        return null;
      }
      function Outlet(props) {
        return useOutlet2(props.context);
      }
      function Route(_props) {
        invariant(false, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
      }
      function Router(_ref3) {
        let {
          basename: basenameProp = "/",
          children = null,
          location: locationProp,
          navigationType = history.Action.Pop,
          navigator,
          static: staticProp = false
        } = _ref3;
        !!useInRouterContext() ? invariant(false, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.") : void 0;
        let basename = normalizePathname(basenameProp);
        let navigationContext = React2.useMemo(() => ({
          basename,
          navigator,
          static: staticProp
        }), [basename, navigator, staticProp]);
        if (typeof locationProp === "string") {
          locationProp = history.parsePath(locationProp);
        }
        let {
          pathname = "/",
          search = "",
          hash = "",
          state = null,
          key = "default"
        } = locationProp;
        let location = React2.useMemo(() => {
          let trailingPathname = stripBasename(pathname, basename);
          if (trailingPathname == null) {
            return null;
          }
          return {
            pathname: trailingPathname,
            search,
            hash,
            state,
            key
          };
        }, [basename, pathname, search, hash, state, key]);
        warning(location != null, '<Router basename="' + basename + '"> is not able to match the URL ' + ('"' + pathname + search + hash + '" because it does not start with the ') + "basename, so the <Router> won't render anything.");
        if (location == null) {
          return null;
        }
        return /* @__PURE__ */ React2.createElement(NavigationContext.Provider, {
          value: navigationContext
        }, /* @__PURE__ */ React2.createElement(LocationContext.Provider, {
          children,
          value: {
            location,
            navigationType
          }
        }));
      }
      function Routes(_ref4) {
        let {
          children,
          location
        } = _ref4;
        return useRoutes(createRoutesFromChildren(children), location);
      }
      function createRoutesFromChildren(children) {
        let routes = [];
        React2.Children.forEach(children, (element) => {
          if (!/* @__PURE__ */ React2.isValidElement(element)) {
            return;
          }
          if (element.type === React2.Fragment) {
            routes.push.apply(routes, createRoutesFromChildren(element.props.children));
            return;
          }
          !(element.type === Route) ? invariant(false, "[" + (typeof element.type === "string" ? element.type : element.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>") : void 0;
          let route = {
            caseSensitive: element.props.caseSensitive,
            element: element.props.element,
            index: element.props.index,
            path: element.props.path
          };
          if (element.props.children) {
            route.children = createRoutesFromChildren(element.props.children);
          }
          routes.push(route);
        });
        return routes;
      }
      function renderMatches(matches) {
        return _renderMatches(matches);
      }
      Object.defineProperty(exports2, "NavigationType", {
        enumerable: true,
        get: function() {
          return history.Action;
        }
      });
      Object.defineProperty(exports2, "createPath", {
        enumerable: true,
        get: function() {
          return history.createPath;
        }
      });
      Object.defineProperty(exports2, "parsePath", {
        enumerable: true,
        get: function() {
          return history.parsePath;
        }
      });
      exports2.MemoryRouter = MemoryRouter;
      exports2.Navigate = Navigate;
      exports2.Outlet = Outlet;
      exports2.Route = Route;
      exports2.Router = Router;
      exports2.Routes = Routes;
      exports2.UNSAFE_LocationContext = LocationContext;
      exports2.UNSAFE_NavigationContext = NavigationContext;
      exports2.UNSAFE_RouteContext = RouteContext;
      exports2.createRoutesFromChildren = createRoutesFromChildren;
      exports2.generatePath = generatePath;
      exports2.matchPath = matchPath2;
      exports2.matchRoutes = matchRoutes;
      exports2.renderMatches = renderMatches;
      exports2.resolvePath = resolvePath;
      exports2.useHref = useHref;
      exports2.useInRouterContext = useInRouterContext;
      exports2.useLocation = useLocation2;
      exports2.useMatch = useMatch;
      exports2.useNavigate = useNavigate;
      exports2.useNavigationType = useNavigationType;
      exports2.useOutlet = useOutlet2;
      exports2.useOutletContext = useOutletContext;
      exports2.useParams = useParams;
      exports2.useResolvedPath = useResolvedPath;
      exports2.useRoutes = useRoutes;
      Object.defineProperty(exports2, "__esModule", { value: true });
    });
  }
});

// ../../node_modules/.pnpm/react-router@6.3.0_react@18.1.0/node_modules/react-router/main.js
var require_main2 = __commonJS({
  "../../node_modules/.pnpm/react-router@6.3.0_react@18.1.0/node_modules/react-router/main.js"(exports, module2) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module2.exports = require_react_router_production_min();
    } else {
      module2.exports = require_react_router_development();
    }
  }
});

// ../../node_modules/.pnpm/react-router-dom@6.3.0_react-dom@18.1.0+react@18.1.0/node_modules/react-router-dom/umd/react-router-dom.production.min.js
var require_react_router_dom_production_min = __commonJS({
  "../../node_modules/.pnpm/react-router-dom@6.3.0_react-dom@18.1.0+react@18.1.0/node_modules/react-router-dom/umd/react-router-dom.production.min.js"(exports, module2) {
    !function(e, t) {
      typeof exports == "object" && typeof module2 != "undefined" ? t(exports, require_react(), require_main(), require_main2()) : typeof define == "function" && define.amd ? define(["exports", "react", "history", "react-router"], t) : t((e = e || self).ReactRouterDOM = {}, e.React, e.HistoryLibrary, e.ReactRouter);
    }(exports, function(e, t, r, n) {
      "use strict";
      function a() {
        return a = Object.assign || function(e2) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var r2 = arguments[t2];
            for (var n2 in r2)
              Object.prototype.hasOwnProperty.call(r2, n2) && (e2[n2] = r2[n2]);
          }
          return e2;
        }, a.apply(this, arguments);
      }
      function o(e2, t2) {
        if (e2 == null)
          return {};
        var r2, n2, a2 = {}, o2 = Object.keys(e2);
        for (n2 = 0; n2 < o2.length; n2++)
          r2 = o2[n2], t2.indexOf(r2) >= 0 || (a2[r2] = e2[r2]);
        return a2;
      }
      const u = ["onClick", "reloadDocument", "replace", "state", "target", "to"], i = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"];
      const c = t.forwardRef(function(e2, r2) {
        let { onClick: i2, reloadDocument: c2, replace: s2 = false, state: f2, target: b, to: y } = e2, d = o(e2, u), m = n.useHref(y), p = l(y, { replace: s2, state: f2, target: b });
        return t.createElement("a", a({}, d, { href: m, onClick: function(e3) {
          i2 && i2(e3), e3.defaultPrevented || c2 || p(e3);
        }, ref: r2, target: b }));
      }), s = t.forwardRef(function(e2, r2) {
        let { "aria-current": u2 = "page", caseSensitive: s2 = false, className: l2 = "", end: f2 = false, style: b, to: y, children: d } = e2, m = o(e2, i), p = n.useLocation(), g = n.useResolvedPath(y), h = p.pathname, P = g.pathname;
        s2 || (h = h.toLowerCase(), P = P.toLowerCase());
        let O, v = h === P || !f2 && h.startsWith(P) && h.charAt(P.length) === "/", R = v ? u2 : void 0;
        O = typeof l2 == "function" ? l2({ isActive: v }) : [l2, v ? "active" : null].filter(Boolean).join(" ");
        let j = typeof b == "function" ? b({ isActive: v }) : b;
        return t.createElement(c, a({}, m, { "aria-current": R, className: O, ref: r2, style: j, to: y }), typeof d == "function" ? d({ isActive: v }) : d);
      });
      function l(e2, r2) {
        let { target: a2, replace: o2, state: u2 } = r2 === void 0 ? {} : r2, i2 = n.useNavigate(), c2 = n.useLocation(), s2 = n.useResolvedPath(e2);
        return t.useCallback((t2) => {
          if (!(t2.button !== 0 || a2 && a2 !== "_self" || function(e3) {
            return !!(e3.metaKey || e3.altKey || e3.ctrlKey || e3.shiftKey);
          }(t2))) {
            t2.preventDefault();
            let r3 = !!o2 || n.createPath(c2) === n.createPath(s2);
            i2(e2, { replace: r3, state: u2 });
          }
        }, [c2, i2, s2, o2, u2, a2, e2]);
      }
      function f(e2) {
        return e2 === void 0 && (e2 = ""), new URLSearchParams(typeof e2 == "string" || Array.isArray(e2) || e2 instanceof URLSearchParams ? e2 : Object.keys(e2).reduce((t2, r2) => {
          let n2 = e2[r2];
          return t2.concat(Array.isArray(n2) ? n2.map((e3) => [r2, e3]) : [[r2, n2]]);
        }, []));
      }
      Object.defineProperty(e, "MemoryRouter", { enumerable: true, get: function() {
        return n.MemoryRouter;
      } }), Object.defineProperty(e, "Navigate", { enumerable: true, get: function() {
        return n.Navigate;
      } }), Object.defineProperty(e, "NavigationType", { enumerable: true, get: function() {
        return n.NavigationType;
      } }), Object.defineProperty(e, "Outlet", { enumerable: true, get: function() {
        return n.Outlet;
      } }), Object.defineProperty(e, "Route", { enumerable: true, get: function() {
        return n.Route;
      } }), Object.defineProperty(e, "Router", { enumerable: true, get: function() {
        return n.Router;
      } }), Object.defineProperty(e, "Routes", { enumerable: true, get: function() {
        return n.Routes;
      } }), Object.defineProperty(e, "UNSAFE_LocationContext", { enumerable: true, get: function() {
        return n.UNSAFE_LocationContext;
      } }), Object.defineProperty(e, "UNSAFE_NavigationContext", { enumerable: true, get: function() {
        return n.UNSAFE_NavigationContext;
      } }), Object.defineProperty(e, "UNSAFE_RouteContext", { enumerable: true, get: function() {
        return n.UNSAFE_RouteContext;
      } }), Object.defineProperty(e, "createPath", { enumerable: true, get: function() {
        return n.createPath;
      } }), Object.defineProperty(e, "createRoutesFromChildren", { enumerable: true, get: function() {
        return n.createRoutesFromChildren;
      } }), Object.defineProperty(e, "generatePath", { enumerable: true, get: function() {
        return n.generatePath;
      } }), Object.defineProperty(e, "matchPath", { enumerable: true, get: function() {
        return n.matchPath;
      } }), Object.defineProperty(e, "matchRoutes", { enumerable: true, get: function() {
        return n.matchRoutes;
      } }), Object.defineProperty(e, "parsePath", { enumerable: true, get: function() {
        return n.parsePath;
      } }), Object.defineProperty(e, "renderMatches", { enumerable: true, get: function() {
        return n.renderMatches;
      } }), Object.defineProperty(e, "resolvePath", { enumerable: true, get: function() {
        return n.resolvePath;
      } }), Object.defineProperty(e, "useHref", { enumerable: true, get: function() {
        return n.useHref;
      } }), Object.defineProperty(e, "useInRouterContext", { enumerable: true, get: function() {
        return n.useInRouterContext;
      } }), Object.defineProperty(e, "useLocation", { enumerable: true, get: function() {
        return n.useLocation;
      } }), Object.defineProperty(e, "useMatch", { enumerable: true, get: function() {
        return n.useMatch;
      } }), Object.defineProperty(e, "useNavigate", { enumerable: true, get: function() {
        return n.useNavigate;
      } }), Object.defineProperty(e, "useNavigationType", { enumerable: true, get: function() {
        return n.useNavigationType;
      } }), Object.defineProperty(e, "useOutlet", { enumerable: true, get: function() {
        return n.useOutlet;
      } }), Object.defineProperty(e, "useOutletContext", { enumerable: true, get: function() {
        return n.useOutletContext;
      } }), Object.defineProperty(e, "useParams", { enumerable: true, get: function() {
        return n.useParams;
      } }), Object.defineProperty(e, "useResolvedPath", { enumerable: true, get: function() {
        return n.useResolvedPath;
      } }), Object.defineProperty(e, "useRoutes", { enumerable: true, get: function() {
        return n.useRoutes;
      } }), e.BrowserRouter = function(e2) {
        let { basename: a2, children: o2, window: u2 } = e2, i2 = t.useRef();
        i2.current == null && (i2.current = r.createBrowserHistory({ window: u2 }));
        let c2 = i2.current, [s2, l2] = t.useState({ action: c2.action, location: c2.location });
        return t.useLayoutEffect(() => c2.listen(l2), [c2]), t.createElement(n.Router, { basename: a2, children: o2, location: s2.location, navigationType: s2.action, navigator: c2 });
      }, e.HashRouter = function(e2) {
        let { basename: a2, children: o2, window: u2 } = e2, i2 = t.useRef();
        i2.current == null && (i2.current = r.createHashHistory({ window: u2 }));
        let c2 = i2.current, [s2, l2] = t.useState({ action: c2.action, location: c2.location });
        return t.useLayoutEffect(() => c2.listen(l2), [c2]), t.createElement(n.Router, { basename: a2, children: o2, location: s2.location, navigationType: s2.action, navigator: c2 });
      }, e.Link = c, e.NavLink = s, e.createSearchParams = f, e.unstable_HistoryRouter = function(e2) {
        let { basename: r2, children: a2, history: o2 } = e2;
        const [u2, i2] = t.useState({ action: o2.action, location: o2.location });
        return t.useLayoutEffect(() => o2.listen(i2), [o2]), t.createElement(n.Router, { basename: r2, children: a2, location: u2.location, navigationType: u2.action, navigator: o2 });
      }, e.useLinkClickHandler = l, e.useSearchParams = function(e2) {
        let r2 = t.useRef(f(e2)), a2 = n.useLocation(), o2 = t.useMemo(() => {
          let e3 = f(a2.search);
          for (let t2 of r2.current.keys())
            e3.has(t2) || r2.current.getAll(t2).forEach((r3) => {
              e3.append(t2, r3);
            });
          return e3;
        }, [a2.search]), u2 = n.useNavigate();
        return [o2, t.useCallback((e3, t2) => {
          u2("?" + f(e3), t2);
        }, [u2])];
      }, Object.defineProperty(e, "__esModule", { value: true });
    });
  }
});

// ../../node_modules/.pnpm/react-router-dom@6.3.0_react-dom@18.1.0+react@18.1.0/node_modules/react-router-dom/umd/react-router-dom.development.js
var require_react_router_dom_development = __commonJS({
  "../../node_modules/.pnpm/react-router-dom@6.3.0_react-dom@18.1.0+react@18.1.0/node_modules/react-router-dom/umd/react-router-dom.development.js"(exports, module2) {
    (function(global, factory) {
      typeof exports === "object" && typeof module2 !== "undefined" ? factory(exports, require_react(), require_main(), require_main2()) : typeof define === "function" && define.amd ? define(["exports", "react", "history", "react-router"], factory) : (global = global || self, factory(global.ReactRouterDOM = {}, global.React, global.HistoryLibrary, global.ReactRouter));
    })(exports, function(exports2, React2, history, reactRouter) {
      "use strict";
      function _extends() {
        _extends = Object.assign || function(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };
        return _extends.apply(this, arguments);
      }
      function _objectWithoutPropertiesLoose(source, excluded) {
        if (source == null)
          return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key, i;
        for (i = 0; i < sourceKeys.length; i++) {
          key = sourceKeys[i];
          if (excluded.indexOf(key) >= 0)
            continue;
          target[key] = source[key];
        }
        return target;
      }
      const _excluded = ["onClick", "reloadDocument", "replace", "state", "target", "to"], _excluded2 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"];
      function warning(cond, message) {
        if (!cond) {
          if (typeof console !== "undefined")
            console.warn(message);
          try {
            throw new Error(message);
          } catch (e) {
          }
        }
      }
      function BrowserRouter(_ref) {
        let {
          basename,
          children,
          window
        } = _ref;
        let historyRef = React2.useRef();
        if (historyRef.current == null) {
          historyRef.current = history.createBrowserHistory({
            window
          });
        }
        let history$1 = historyRef.current;
        let [state, setState] = React2.useState({
          action: history$1.action,
          location: history$1.location
        });
        React2.useLayoutEffect(() => history$1.listen(setState), [history$1]);
        return /* @__PURE__ */ React2.createElement(reactRouter.Router, {
          basename,
          children,
          location: state.location,
          navigationType: state.action,
          navigator: history$1
        });
      }
      function HashRouter(_ref2) {
        let {
          basename,
          children,
          window
        } = _ref2;
        let historyRef = React2.useRef();
        if (historyRef.current == null) {
          historyRef.current = history.createHashHistory({
            window
          });
        }
        let history$1 = historyRef.current;
        let [state, setState] = React2.useState({
          action: history$1.action,
          location: history$1.location
        });
        React2.useLayoutEffect(() => history$1.listen(setState), [history$1]);
        return /* @__PURE__ */ React2.createElement(reactRouter.Router, {
          basename,
          children,
          location: state.location,
          navigationType: state.action,
          navigator: history$1
        });
      }
      function HistoryRouter(_ref3) {
        let {
          basename,
          children,
          history: history2
        } = _ref3;
        const [state, setState] = React2.useState({
          action: history2.action,
          location: history2.location
        });
        React2.useLayoutEffect(() => history2.listen(setState), [history2]);
        return /* @__PURE__ */ React2.createElement(reactRouter.Router, {
          basename,
          children,
          location: state.location,
          navigationType: state.action,
          navigator: history2
        });
      }
      {
        HistoryRouter.displayName = "unstable_HistoryRouter";
      }
      function isModifiedEvent(event) {
        return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
      }
      const Link = /* @__PURE__ */ React2.forwardRef(function LinkWithRef(_ref4, ref) {
        let {
          onClick,
          reloadDocument,
          replace = false,
          state,
          target,
          to
        } = _ref4, rest = _objectWithoutPropertiesLoose(_ref4, _excluded);
        let href = reactRouter.useHref(to);
        let internalOnClick = useLinkClickHandler(to, {
          replace,
          state,
          target
        });
        function handleClick(event) {
          if (onClick)
            onClick(event);
          if (!event.defaultPrevented && !reloadDocument) {
            internalOnClick(event);
          }
        }
        return /* @__PURE__ */ React2.createElement("a", _extends({}, rest, {
          href,
          onClick: handleClick,
          ref,
          target
        }));
      });
      {
        Link.displayName = "Link";
      }
      const NavLink = /* @__PURE__ */ React2.forwardRef(function NavLinkWithRef(_ref5, ref) {
        let {
          "aria-current": ariaCurrentProp = "page",
          caseSensitive = false,
          className: classNameProp = "",
          end = false,
          style: styleProp,
          to,
          children
        } = _ref5, rest = _objectWithoutPropertiesLoose(_ref5, _excluded2);
        let location = reactRouter.useLocation();
        let path = reactRouter.useResolvedPath(to);
        let locationPathname = location.pathname;
        let toPathname = path.pathname;
        if (!caseSensitive) {
          locationPathname = locationPathname.toLowerCase();
          toPathname = toPathname.toLowerCase();
        }
        let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === "/";
        let ariaCurrent = isActive ? ariaCurrentProp : void 0;
        let className;
        if (typeof classNameProp === "function") {
          className = classNameProp({
            isActive
          });
        } else {
          className = [classNameProp, isActive ? "active" : null].filter(Boolean).join(" ");
        }
        let style = typeof styleProp === "function" ? styleProp({
          isActive
        }) : styleProp;
        return /* @__PURE__ */ React2.createElement(Link, _extends({}, rest, {
          "aria-current": ariaCurrent,
          className,
          ref,
          style,
          to
        }), typeof children === "function" ? children({
          isActive
        }) : children);
      });
      {
        NavLink.displayName = "NavLink";
      }
      function useLinkClickHandler(to, _temp) {
        let {
          target,
          replace: replaceProp,
          state
        } = _temp === void 0 ? {} : _temp;
        let navigate = reactRouter.useNavigate();
        let location = reactRouter.useLocation();
        let path = reactRouter.useResolvedPath(to);
        return React2.useCallback((event) => {
          if (event.button === 0 && (!target || target === "_self") && !isModifiedEvent(event)) {
            event.preventDefault();
            let replace = !!replaceProp || reactRouter.createPath(location) === reactRouter.createPath(path);
            navigate(to, {
              replace,
              state
            });
          }
        }, [location, navigate, path, replaceProp, state, target, to]);
      }
      function useSearchParams(defaultInit) {
        warning(typeof URLSearchParams !== "undefined", "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params\n\nIf you're unsure how to load polyfills, we recommend you check out https://polyfill.io/v3/ which provides some recommendations about how to load polyfills only for users that need them, instead of for every user.");
        let defaultSearchParamsRef = React2.useRef(createSearchParams(defaultInit));
        let location = reactRouter.useLocation();
        let searchParams = React2.useMemo(() => {
          let searchParams2 = createSearchParams(location.search);
          for (let key of defaultSearchParamsRef.current.keys()) {
            if (!searchParams2.has(key)) {
              defaultSearchParamsRef.current.getAll(key).forEach((value) => {
                searchParams2.append(key, value);
              });
            }
          }
          return searchParams2;
        }, [location.search]);
        let navigate = reactRouter.useNavigate();
        let setSearchParams = React2.useCallback((nextInit, navigateOptions) => {
          navigate("?" + createSearchParams(nextInit), navigateOptions);
        }, [navigate]);
        return [searchParams, setSearchParams];
      }
      function createSearchParams(init) {
        if (init === void 0) {
          init = "";
        }
        return new URLSearchParams(typeof init === "string" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce((memo, key) => {
          let value = init[key];
          return memo.concat(Array.isArray(value) ? value.map((v) => [key, v]) : [[key, value]]);
        }, []));
      }
      Object.defineProperty(exports2, "MemoryRouter", {
        enumerable: true,
        get: function() {
          return reactRouter.MemoryRouter;
        }
      });
      Object.defineProperty(exports2, "Navigate", {
        enumerable: true,
        get: function() {
          return reactRouter.Navigate;
        }
      });
      Object.defineProperty(exports2, "NavigationType", {
        enumerable: true,
        get: function() {
          return reactRouter.NavigationType;
        }
      });
      Object.defineProperty(exports2, "Outlet", {
        enumerable: true,
        get: function() {
          return reactRouter.Outlet;
        }
      });
      Object.defineProperty(exports2, "Route", {
        enumerable: true,
        get: function() {
          return reactRouter.Route;
        }
      });
      Object.defineProperty(exports2, "Router", {
        enumerable: true,
        get: function() {
          return reactRouter.Router;
        }
      });
      Object.defineProperty(exports2, "Routes", {
        enumerable: true,
        get: function() {
          return reactRouter.Routes;
        }
      });
      Object.defineProperty(exports2, "UNSAFE_LocationContext", {
        enumerable: true,
        get: function() {
          return reactRouter.UNSAFE_LocationContext;
        }
      });
      Object.defineProperty(exports2, "UNSAFE_NavigationContext", {
        enumerable: true,
        get: function() {
          return reactRouter.UNSAFE_NavigationContext;
        }
      });
      Object.defineProperty(exports2, "UNSAFE_RouteContext", {
        enumerable: true,
        get: function() {
          return reactRouter.UNSAFE_RouteContext;
        }
      });
      Object.defineProperty(exports2, "createPath", {
        enumerable: true,
        get: function() {
          return reactRouter.createPath;
        }
      });
      Object.defineProperty(exports2, "createRoutesFromChildren", {
        enumerable: true,
        get: function() {
          return reactRouter.createRoutesFromChildren;
        }
      });
      Object.defineProperty(exports2, "generatePath", {
        enumerable: true,
        get: function() {
          return reactRouter.generatePath;
        }
      });
      Object.defineProperty(exports2, "matchPath", {
        enumerable: true,
        get: function() {
          return reactRouter.matchPath;
        }
      });
      Object.defineProperty(exports2, "matchRoutes", {
        enumerable: true,
        get: function() {
          return reactRouter.matchRoutes;
        }
      });
      Object.defineProperty(exports2, "parsePath", {
        enumerable: true,
        get: function() {
          return reactRouter.parsePath;
        }
      });
      Object.defineProperty(exports2, "renderMatches", {
        enumerable: true,
        get: function() {
          return reactRouter.renderMatches;
        }
      });
      Object.defineProperty(exports2, "resolvePath", {
        enumerable: true,
        get: function() {
          return reactRouter.resolvePath;
        }
      });
      Object.defineProperty(exports2, "useHref", {
        enumerable: true,
        get: function() {
          return reactRouter.useHref;
        }
      });
      Object.defineProperty(exports2, "useInRouterContext", {
        enumerable: true,
        get: function() {
          return reactRouter.useInRouterContext;
        }
      });
      Object.defineProperty(exports2, "useLocation", {
        enumerable: true,
        get: function() {
          return reactRouter.useLocation;
        }
      });
      Object.defineProperty(exports2, "useMatch", {
        enumerable: true,
        get: function() {
          return reactRouter.useMatch;
        }
      });
      Object.defineProperty(exports2, "useNavigate", {
        enumerable: true,
        get: function() {
          return reactRouter.useNavigate;
        }
      });
      Object.defineProperty(exports2, "useNavigationType", {
        enumerable: true,
        get: function() {
          return reactRouter.useNavigationType;
        }
      });
      Object.defineProperty(exports2, "useOutlet", {
        enumerable: true,
        get: function() {
          return reactRouter.useOutlet;
        }
      });
      Object.defineProperty(exports2, "useOutletContext", {
        enumerable: true,
        get: function() {
          return reactRouter.useOutletContext;
        }
      });
      Object.defineProperty(exports2, "useParams", {
        enumerable: true,
        get: function() {
          return reactRouter.useParams;
        }
      });
      Object.defineProperty(exports2, "useResolvedPath", {
        enumerable: true,
        get: function() {
          return reactRouter.useResolvedPath;
        }
      });
      Object.defineProperty(exports2, "useRoutes", {
        enumerable: true,
        get: function() {
          return reactRouter.useRoutes;
        }
      });
      exports2.BrowserRouter = BrowserRouter;
      exports2.HashRouter = HashRouter;
      exports2.Link = Link;
      exports2.NavLink = NavLink;
      exports2.createSearchParams = createSearchParams;
      exports2.unstable_HistoryRouter = HistoryRouter;
      exports2.useLinkClickHandler = useLinkClickHandler;
      exports2.useSearchParams = useSearchParams;
      Object.defineProperty(exports2, "__esModule", { value: true });
    });
  }
});

// ../../node_modules/.pnpm/react-router-dom@6.3.0_react-dom@18.1.0+react@18.1.0/node_modules/react-router-dom/main.js
var require_main3 = __commonJS({
  "../../node_modules/.pnpm/react-router-dom@6.3.0_react-dom@18.1.0+react@18.1.0/node_modules/react-router-dom/main.js"(exports, module2) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module2.exports = require_react_router_dom_production_min();
    } else {
      module2.exports = require_react_router_dom_development();
    }
  }
});

// lib/index.tsx
var lib_exports = {};
__export(lib_exports, {
  KeepAliveContext: () => KeepAliveContext,
  default: () => lib_default,
  useKeepOutlets: () => useKeepOutlets
});
module.exports = __toCommonJS(lib_exports);
var import_react = __toESM(require_react());
var import_react_router_dom = __toESM(require_main3());
var KeepAliveContext = (0, import_react.createContext)({ keepalive: [], keepElements: {} });
var isKeepPath = (aliveList, path) => {
  let isKeep = false;
  aliveList.map((item) => {
    if (item === path) {
      isKeep = true;
    }
    if (item instanceof RegExp && item.test(path)) {
      isKeep = true;
    }
    if (typeof item === "string" && item.toLowerCase() === path) {
      isKeep = true;
    }
  });
  return isKeep;
};
function useKeepOutlets() {
  const location = (0, import_react_router_dom.useLocation)();
  const element = (0, import_react_router_dom.useOutlet)();
  const { keepElements, keepalive } = (0, import_react.useContext)(KeepAliveContext);
  const isKeep = isKeepPath(keepalive, location.pathname);
  if (isKeep) {
    keepElements.current[location.pathname] = element;
  }
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, Object.entries(keepElements.current).map(([pathname, element2]) => {
    return /* @__PURE__ */ import_react.default.createElement("div", {
      key: pathname,
      style: { height: "100%", width: "100%", position: "relative", overflow: "hidden auto" },
      className: "rumtime-keep-alive-layout",
      hidden: !(0, import_react_router_dom.matchPath)(location.pathname, pathname)
    }, element2);
  }), /* @__PURE__ */ import_react.default.createElement("div", {
    hidden: isKeep,
    style: { height: "100%", width: "100%", position: "relative", overflow: "hidden auto" },
    className: "rumtime-keep-alive-layout-no"
  }, !isKeep && element));
}
var KeepAliveLayout = (props) => {
  const _a = props, { keepalive } = _a, other = __objRest(_a, ["keepalive"]);
  const keepElements = (0, import_react.useRef)({});
  function delCache(path) {
    keepElements.current[path] = null;
  }
  return /* @__PURE__ */ import_react.default.createElement(KeepAliveContext.Provider, __spreadValues({
    value: { keepalive, keepElements, delCache }
  }, other));
};
var lib_default = KeepAliveLayout;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  KeepAliveContext,
  useKeepOutlets
});
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
