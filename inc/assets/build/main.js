(() => {
  var t,
    e = {
      7856: (t, e, r) => {
        "use strict";
        var n = {};
        r.r(n),
          r.d(n, {
            scaleBand: () => Ko,
            scaleDiverging: () => gs,
            scaleDivergingLog: () => xs,
            scaleDivergingPow: () => Os,
            scaleDivergingSqrt: () => js,
            scaleDivergingSymlog: () => ws,
            scaleIdentity: () => vc,
            scaleImplicit: () => Go,
            scaleLinear: () => yc,
            scaleLog: () => Ec,
            scaleOrdinal: () => Yo,
            scalePoint: () => Jo,
            scalePow: () => Ic,
            scaleQuantile: () => qc,
            scaleQuantize: () => Xc,
            scaleRadial: () => Lc,
            scaleSequential: () => ps,
            scaleSequentialLog: () => hs,
            scaleSequentialPow: () => ys,
            scaleSequentialQuantile: () => ms,
            scaleSequentialSqrt: () => vs,
            scaleSequentialSymlog: () => ds,
            scaleSqrt: () => Nc,
            scaleSymlog: () => Mc,
            scaleThreshold: () => Hc,
            scaleTime: () => us,
            scaleUtc: () => ls,
            tickFormat: () => hc,
          });
        const o = window.React;
        var i = r.n(o);
        const a = window.wp.element;
        function c(t) {
          var e,
            r,
            n = "";
          if ("string" == typeof t || "number" == typeof t) n += t;
          else if ("object" == typeof t)
            if (Array.isArray(t)) {
              var o = t.length;
              for (e = 0; e < o; e++)
                t[e] && (r = c(t[e])) && (n && (n += " "), (n += r));
            } else for (r in t) t[r] && (n && (n += " "), (n += r));
          return n;
        }
        const u = function () {
          for (var t, e, r = 0, n = "", o = arguments.length; r < o; r++)
            (t = arguments[r]) && (e = c(t)) && (n && (n += " "), (n += e));
          return n;
        };
        var l = r(7350),
          s = r.n(l),
          f = r(2199),
          p = r(5015),
          h = r.n(p),
          d = r(1741),
          y = r.n(d),
          v = r(8156),
          m = r.n(v),
          b = r(8023),
          g = r.n(b),
          x = function (t) {
            return 0 === t ? 0 : t > 0 ? 1 : -1;
          },
          w = function (t) {
            return h()(t) && t.indexOf("%") === t.length - 1;
          },
          O = function (t) {
            return g()(t) && !y()(t);
          },
          j = function (t) {
            return O(t) || h()(t);
          },
          S = 0,
          E = function (t) {
            var e = ++S;
            return "".concat(t || "").concat(e);
          },
          P = function (t, e) {
            var r,
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 0,
              o =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (!O(t) && !h()(t)) return n;
            if (w(t)) {
              var i = t.indexOf("%");
              r = (e * parseFloat(t.slice(0, i))) / 100;
            } else r = +t;
            return y()(r) && (r = n), o && r > e && (r = e), r;
          },
          A = function (t) {
            if (!t) return null;
            var e = Object.keys(t);
            return e && e.length ? t[e[0]] : null;
          },
          k = function (t, e) {
            return O(t) && O(e)
              ? function (r) {
                  return t + r * (e - t);
                }
              : function () {
                  return e;
                };
          };
        function M(t, e, r) {
          return t && t.length
            ? t.find(function (t) {
                return t && ("function" == typeof e ? e(t) : m()(t, e)) === r;
              })
            : null;
        }
        var T = function (t, e) {
            for (
              var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), o = 2;
              o < r;
              o++
            )
              n[o - 2] = arguments[o];
          },
          _ = r(9843),
          C = r.n(_),
          D = r(1882),
          I = r.n(D),
          N = r(3805),
          B = r.n(N);
        function L(t, e) {
          for (var r in t)
            if (
              {}.hasOwnProperty.call(t, r) &&
              (!{}.hasOwnProperty.call(e, r) || t[r] !== e[r])
            )
              return !1;
          for (var n in e)
            if ({}.hasOwnProperty.call(e, n) && !{}.hasOwnProperty.call(t, n))
              return !1;
          return !0;
        }
        function R(t) {
          return (
            (R =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            R(t)
          );
        }
        var z = [
            "aria-activedescendant",
            "aria-atomic",
            "aria-autocomplete",
            "aria-busy",
            "aria-checked",
            "aria-colcount",
            "aria-colindex",
            "aria-colspan",
            "aria-controls",
            "aria-current",
            "aria-describedby",
            "aria-details",
            "aria-disabled",
            "aria-errormessage",
            "aria-expanded",
            "aria-flowto",
            "aria-haspopup",
            "aria-hidden",
            "aria-invalid",
            "aria-keyshortcuts",
            "aria-label",
            "aria-labelledby",
            "aria-level",
            "aria-live",
            "aria-modal",
            "aria-multiline",
            "aria-multiselectable",
            "aria-orientation",
            "aria-owns",
            "aria-placeholder",
            "aria-posinset",
            "aria-pressed",
            "aria-readonly",
            "aria-relevant",
            "aria-required",
            "aria-roledescription",
            "aria-rowcount",
            "aria-rowindex",
            "aria-rowspan",
            "aria-selected",
            "aria-setsize",
            "aria-sort",
            "aria-valuemax",
            "aria-valuemin",
            "aria-valuenow",
            "aria-valuetext",
            "className",
            "color",
            "height",
            "id",
            "lang",
            "max",
            "media",
            "method",
            "min",
            "name",
            "style",
            "target",
            "width",
            "role",
            "tabIndex",
            "accentHeight",
            "accumulate",
            "additive",
            "alignmentBaseline",
            "allowReorder",
            "alphabetic",
            "amplitude",
            "arabicForm",
            "ascent",
            "attributeName",
            "attributeType",
            "autoReverse",
            "azimuth",
            "baseFrequency",
            "baselineShift",
            "baseProfile",
            "bbox",
            "begin",
            "bias",
            "by",
            "calcMode",
            "capHeight",
            "clip",
            "clipPath",
            "clipPathUnits",
            "clipRule",
            "colorInterpolation",
            "colorInterpolationFilters",
            "colorProfile",
            "colorRendering",
            "contentScriptType",
            "contentStyleType",
            "cursor",
            "cx",
            "cy",
            "d",
            "decelerate",
            "descent",
            "diffuseConstant",
            "direction",
            "display",
            "divisor",
            "dominantBaseline",
            "dur",
            "dx",
            "dy",
            "edgeMode",
            "elevation",
            "enableBackground",
            "end",
            "exponent",
            "externalResourcesRequired",
            "fill",
            "fillOpacity",
            "fillRule",
            "filter",
            "filterRes",
            "filterUnits",
            "floodColor",
            "floodOpacity",
            "focusable",
            "fontFamily",
            "fontSize",
            "fontSizeAdjust",
            "fontStretch",
            "fontStyle",
            "fontVariant",
            "fontWeight",
            "format",
            "from",
            "fx",
            "fy",
            "g1",
            "g2",
            "glyphName",
            "glyphOrientationHorizontal",
            "glyphOrientationVertical",
            "glyphRef",
            "gradientTransform",
            "gradientUnits",
            "hanging",
            "horizAdvX",
            "horizOriginX",
            "href",
            "ideographic",
            "imageRendering",
            "in2",
            "in",
            "intercept",
            "k1",
            "k2",
            "k3",
            "k4",
            "k",
            "kernelMatrix",
            "kernelUnitLength",
            "kerning",
            "keyPoints",
            "keySplines",
            "keyTimes",
            "lengthAdjust",
            "letterSpacing",
            "lightingColor",
            "limitingConeAngle",
            "local",
            "markerEnd",
            "markerHeight",
            "markerMid",
            "markerStart",
            "markerUnits",
            "markerWidth",
            "mask",
            "maskContentUnits",
            "maskUnits",
            "mathematical",
            "mode",
            "numOctaves",
            "offset",
            "opacity",
            "operator",
            "order",
            "orient",
            "orientation",
            "origin",
            "overflow",
            "overlinePosition",
            "overlineThickness",
            "paintOrder",
            "panose1",
            "pathLength",
            "patternContentUnits",
            "patternTransform",
            "patternUnits",
            "pointerEvents",
            "pointsAtX",
            "pointsAtY",
            "pointsAtZ",
            "preserveAlpha",
            "preserveAspectRatio",
            "primitiveUnits",
            "r",
            "radius",
            "refX",
            "refY",
            "renderingIntent",
            "repeatCount",
            "repeatDur",
            "requiredExtensions",
            "requiredFeatures",
            "restart",
            "result",
            "rotate",
            "rx",
            "ry",
            "seed",
            "shapeRendering",
            "slope",
            "spacing",
            "specularConstant",
            "specularExponent",
            "speed",
            "spreadMethod",
            "startOffset",
            "stdDeviation",
            "stemh",
            "stemv",
            "stitchTiles",
            "stopColor",
            "stopOpacity",
            "strikethroughPosition",
            "strikethroughThickness",
            "string",
            "stroke",
            "strokeDasharray",
            "strokeDashoffset",
            "strokeLinecap",
            "strokeLinejoin",
            "strokeMiterlimit",
            "strokeOpacity",
            "strokeWidth",
            "surfaceScale",
            "systemLanguage",
            "tableValues",
            "targetX",
            "targetY",
            "textAnchor",
            "textDecoration",
            "textLength",
            "textRendering",
            "to",
            "transform",
            "u1",
            "u2",
            "underlinePosition",
            "underlineThickness",
            "unicode",
            "unicodeBidi",
            "unicodeRange",
            "unitsPerEm",
            "vAlphabetic",
            "values",
            "vectorEffect",
            "version",
            "vertAdvY",
            "vertOriginX",
            "vertOriginY",
            "vHanging",
            "vIdeographic",
            "viewTarget",
            "visibility",
            "vMathematical",
            "widths",
            "wordSpacing",
            "writingMode",
            "x1",
            "x2",
            "x",
            "xChannelSelector",
            "xHeight",
            "xlinkActuate",
            "xlinkArcrole",
            "xlinkHref",
            "xlinkRole",
            "xlinkShow",
            "xlinkTitle",
            "xlinkType",
            "xmlBase",
            "xmlLang",
            "xmlns",
            "xmlnsXlink",
            "xmlSpace",
            "y1",
            "y2",
            "y",
            "yChannelSelector",
            "z",
            "zoomAndPan",
            "ref",
            "key",
            "angle",
          ],
          U = ["points", "pathLength"],
          $ = { svg: ["viewBox", "children"], polygon: U, polyline: U },
          F = [
            "dangerouslySetInnerHTML",
            "onCopy",
            "onCopyCapture",
            "onCut",
            "onCutCapture",
            "onPaste",
            "onPasteCapture",
            "onCompositionEnd",
            "onCompositionEndCapture",
            "onCompositionStart",
            "onCompositionStartCapture",
            "onCompositionUpdate",
            "onCompositionUpdateCapture",
            "onFocus",
            "onFocusCapture",
            "onBlur",
            "onBlurCapture",
            "onChange",
            "onChangeCapture",
            "onBeforeInput",
            "onBeforeInputCapture",
            "onInput",
            "onInputCapture",
            "onReset",
            "onResetCapture",
            "onSubmit",
            "onSubmitCapture",
            "onInvalid",
            "onInvalidCapture",
            "onLoad",
            "onLoadCapture",
            "onError",
            "onErrorCapture",
            "onKeyDown",
            "onKeyDownCapture",
            "onKeyPress",
            "onKeyPressCapture",
            "onKeyUp",
            "onKeyUpCapture",
            "onAbort",
            "onAbortCapture",
            "onCanPlay",
            "onCanPlayCapture",
            "onCanPlayThrough",
            "onCanPlayThroughCapture",
            "onDurationChange",
            "onDurationChangeCapture",
            "onEmptied",
            "onEmptiedCapture",
            "onEncrypted",
            "onEncryptedCapture",
            "onEnded",
            "onEndedCapture",
            "onLoadedData",
            "onLoadedDataCapture",
            "onLoadedMetadata",
            "onLoadedMetadataCapture",
            "onLoadStart",
            "onLoadStartCapture",
            "onPause",
            "onPauseCapture",
            "onPlay",
            "onPlayCapture",
            "onPlaying",
            "onPlayingCapture",
            "onProgress",
            "onProgressCapture",
            "onRateChange",
            "onRateChangeCapture",
            "onSeeked",
            "onSeekedCapture",
            "onSeeking",
            "onSeekingCapture",
            "onStalled",
            "onStalledCapture",
            "onSuspend",
            "onSuspendCapture",
            "onTimeUpdate",
            "onTimeUpdateCapture",
            "onVolumeChange",
            "onVolumeChangeCapture",
            "onWaiting",
            "onWaitingCapture",
            "onAuxClick",
            "onAuxClickCapture",
            "onClick",
            "onClickCapture",
            "onContextMenu",
            "onContextMenuCapture",
            "onDoubleClick",
            "onDoubleClickCapture",
            "onDrag",
            "onDragCapture",
            "onDragEnd",
            "onDragEndCapture",
            "onDragEnter",
            "onDragEnterCapture",
            "onDragExit",
            "onDragExitCapture",
            "onDragLeave",
            "onDragLeaveCapture",
            "onDragOver",
            "onDragOverCapture",
            "onDragStart",
            "onDragStartCapture",
            "onDrop",
            "onDropCapture",
            "onMouseDown",
            "onMouseDownCapture",
            "onMouseEnter",
            "onMouseLeave",
            "onMouseMove",
            "onMouseMoveCapture",
            "onMouseOut",
            "onMouseOutCapture",
            "onMouseOver",
            "onMouseOverCapture",
            "onMouseUp",
            "onMouseUpCapture",
            "onSelect",
            "onSelectCapture",
            "onTouchCancel",
            "onTouchCancelCapture",
            "onTouchEnd",
            "onTouchEndCapture",
            "onTouchMove",
            "onTouchMoveCapture",
            "onTouchStart",
            "onTouchStartCapture",
            "onPointerDown",
            "onPointerDownCapture",
            "onPointerMove",
            "onPointerMoveCapture",
            "onPointerUp",
            "onPointerUpCapture",
            "onPointerCancel",
            "onPointerCancelCapture",
            "onPointerEnter",
            "onPointerEnterCapture",
            "onPointerLeave",
            "onPointerLeaveCapture",
            "onPointerOver",
            "onPointerOverCapture",
            "onPointerOut",
            "onPointerOutCapture",
            "onGotPointerCapture",
            "onGotPointerCaptureCapture",
            "onLostPointerCapture",
            "onLostPointerCaptureCapture",
            "onScroll",
            "onScrollCapture",
            "onWheel",
            "onWheelCapture",
            "onAnimationStart",
            "onAnimationStartCapture",
            "onAnimationEnd",
            "onAnimationEndCapture",
            "onAnimationIteration",
            "onAnimationIterationCapture",
            "onTransitionEnd",
            "onTransitionEndCapture",
          ],
          W = function (t, e) {
            if (!t || "function" == typeof t || "boolean" == typeof t)
              return null;
            var r = t;
            if (((0, o.isValidElement)(t) && (r = t.props), !B()(r)))
              return null;
            var n = {};
            return (
              Object.keys(r).forEach(function (t) {
                F.includes(t) &&
                  (n[t] =
                    e ||
                    function (e) {
                      return r[t](r, e);
                    });
              }),
              n
            );
          },
          q = function (t, e, r) {
            if (!B()(t) || "object" !== R(t)) return null;
            var n = null;
            return (
              Object.keys(t).forEach(function (o) {
                var i = t[o];
                F.includes(o) &&
                  "function" == typeof i &&
                  (n || (n = {}),
                  (n[o] = (function (t, e, r) {
                    return function (n) {
                      return t(e, r, n), null;
                    };
                  })(i, e, r)));
              }),
              n
            );
          },
          X = ["children"],
          H = ["children"];
        function V(t, e) {
          if (null == t) return {};
          var r,
            n,
            o = (function (t, e) {
              if (null == t) return {};
              var r,
                n,
                o = {},
                i = Object.keys(t);
              for (n = 0; n < i.length; n++)
                (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
              return o;
            })(t, e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            for (n = 0; n < i.length; n++)
              (r = i[n]),
                e.indexOf(r) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(t, r) &&
                    (o[r] = t[r]));
          }
          return o;
        }
        function G(t) {
          return (
            (G =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            G(t)
          );
        }
        var Y = {
            click: "onClick",
            mousedown: "onMouseDown",
            mouseup: "onMouseUp",
            mouseover: "onMouseOver",
            mousemove: "onMouseMove",
            mouseout: "onMouseOut",
            mouseenter: "onMouseEnter",
            mouseleave: "onMouseLeave",
            touchcancel: "onTouchCancel",
            touchend: "onTouchEnd",
            touchmove: "onTouchMove",
            touchstart: "onTouchStart",
          },
          K = function (t) {
            return "string" == typeof t
              ? t
              : t
              ? t.displayName || t.name || "Component"
              : "";
          },
          Z = null,
          J = null,
          Q = function t(e) {
            if (e === Z && Array.isArray(J)) return J;
            var r = [];
            return (
              o.Children.forEach(e, function (e) {
                C()(e) ||
                  ((0, f.isFragment)(e)
                    ? (r = r.concat(t(e.props.children)))
                    : r.push(e));
              }),
              (J = r),
              (Z = e),
              r
            );
          };
        function tt(t, e) {
          var r = [],
            n = [];
          return (
            (n = Array.isArray(e)
              ? e.map(function (t) {
                  return K(t);
                })
              : [K(e)]),
            Q(t).forEach(function (t) {
              var e = m()(t, "type.displayName") || m()(t, "type.name");
              -1 !== n.indexOf(e) && r.push(t);
            }),
            r
          );
        }
        function et(t, e) {
          var r = tt(t, e);
          return r && r[0];
        }
        var rt = function (t) {
            if (!t || !t.props) return !1;
            var e = t.props,
              r = e.width,
              n = e.height;
            return !(!O(r) || r <= 0 || !O(n) || n <= 0);
          },
          nt = [
            "a",
            "altGlyph",
            "altGlyphDef",
            "altGlyphItem",
            "animate",
            "animateColor",
            "animateMotion",
            "animateTransform",
            "circle",
            "clipPath",
            "color-profile",
            "cursor",
            "defs",
            "desc",
            "ellipse",
            "feBlend",
            "feColormatrix",
            "feComponentTransfer",
            "feComposite",
            "feConvolveMatrix",
            "feDiffuseLighting",
            "feDisplacementMap",
            "feDistantLight",
            "feFlood",
            "feFuncA",
            "feFuncB",
            "feFuncG",
            "feFuncR",
            "feGaussianBlur",
            "feImage",
            "feMerge",
            "feMergeNode",
            "feMorphology",
            "feOffset",
            "fePointLight",
            "feSpecularLighting",
            "feSpotLight",
            "feTile",
            "feTurbulence",
            "filter",
            "font",
            "font-face",
            "font-face-format",
            "font-face-name",
            "font-face-url",
            "foreignObject",
            "g",
            "glyph",
            "glyphRef",
            "hkern",
            "image",
            "line",
            "lineGradient",
            "marker",
            "mask",
            "metadata",
            "missing-glyph",
            "mpath",
            "path",
            "pattern",
            "polygon",
            "polyline",
            "radialGradient",
            "rect",
            "script",
            "set",
            "stop",
            "style",
            "svg",
            "switch",
            "symbol",
            "text",
            "textPath",
            "title",
            "tref",
            "tspan",
            "use",
            "view",
            "vkern",
          ],
          ot = function (t, e, r) {
            if (!t || "function" == typeof t || "boolean" == typeof t)
              return null;
            var n = t;
            if (((0, o.isValidElement)(t) && (n = t.props), !B()(n)))
              return null;
            var i = {};
            return (
              Object.keys(n).forEach(function (t) {
                var o;
                (function (t, e, r, n) {
                  var o,
                    i =
                      null !== (o = null == $ ? void 0 : $[n]) && void 0 !== o
                        ? o
                        : [];
                  return (
                    (!I()(t) && ((n && i.includes(e)) || z.includes(e))) ||
                    (r && F.includes(e))
                  );
                })(null === (o = n) || void 0 === o ? void 0 : o[t], t, e, r) &&
                  (i[t] = n[t]);
              }),
              i
            );
          },
          it = function t(e, r) {
            if (e === r) return !0;
            var n = o.Children.count(e);
            if (n !== o.Children.count(r)) return !1;
            if (0 === n) return !0;
            if (1 === n)
              return at(
                Array.isArray(e) ? e[0] : e,
                Array.isArray(r) ? r[0] : r
              );
            for (var i = 0; i < n; i++) {
              var a = e[i],
                c = r[i];
              if (Array.isArray(a) || Array.isArray(c)) {
                if (!t(a, c)) return !1;
              } else if (!at(a, c)) return !1;
            }
            return !0;
          },
          at = function (t, e) {
            if (C()(t) && C()(e)) return !0;
            if (!C()(t) && !C()(e)) {
              var r = t.props || {},
                n = r.children,
                o = V(r, X),
                i = e.props || {},
                a = i.children,
                c = V(i, H);
              return n && a ? L(o, c) && it(n, a) : !n && !a && L(o, c);
            }
            return !1;
          },
          ct = function (t, e) {
            var r = [],
              n = {};
            return (
              Q(t).forEach(function (t, o) {
                if (
                  (function (t) {
                    return (
                      t && t.type && h()(t.type) && nt.indexOf(t.type) >= 0
                    );
                  })(t)
                )
                  r.push(t);
                else if (t) {
                  var i = K(t.type),
                    a = e[i] || {},
                    c = a.handler,
                    u = a.once;
                  if (c && (!u || !n[i])) {
                    var l = c(t, i, o);
                    r.push(l), (n[i] = !0);
                  }
                }
              }),
              r
            );
          };
        function ut(t) {
          return (
            (ut =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            ut(t)
          );
        }
        function lt(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function st(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? lt(Object(r), !0).forEach(function (e) {
                  ft(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : lt(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e)
                  );
                });
          }
          return t;
        }
        function ft(t, e, r) {
          var n;
          return (
            (n = (function (t, e) {
              if ("object" != ut(t) || !t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, "string");
                if ("object" != ut(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(e)),
            (e = "symbol" == ut(n) ? n : String(n)) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        function pt(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
          return n;
        }
        var ht = (0, o.forwardRef)(function (t, e) {
            var r = t.aspect,
              n = t.initialDimension,
              a = void 0 === n ? { width: -1, height: -1 } : n,
              c = t.width,
              l = void 0 === c ? "100%" : c,
              p = t.height,
              h = void 0 === p ? "100%" : p,
              d = t.minWidth,
              y = void 0 === d ? 0 : d,
              v = t.minHeight,
              m = t.maxHeight,
              b = t.children,
              g = t.debounce,
              x = void 0 === g ? 0 : g,
              O = t.id,
              j = t.className,
              S = t.onResize,
              E = t.style,
              P = void 0 === E ? {} : E,
              A = (0, o.useRef)(null),
              k = (0, o.useRef)();
            (k.current = S),
              (0, o.useImperativeHandle)(e, function () {
                return Object.defineProperty(A.current, "current", {
                  get: function () {
                    return (
                      console.warn(
                        "The usage of ref.current.current is deprecated and will no longer be supported."
                      ),
                      A.current
                    );
                  },
                  configurable: !0,
                });
              });
            var M,
              _,
              C =
                ((M = (0, o.useState)({
                  containerWidth: a.width,
                  containerHeight: a.height,
                })),
                (_ = 2),
                (function (t) {
                  if (Array.isArray(t)) return t;
                })(M) ||
                  (function (t, e) {
                    var r =
                      null == t
                        ? null
                        : ("undefined" != typeof Symbol &&
                            t[Symbol.iterator]) ||
                          t["@@iterator"];
                    if (null != r) {
                      var n,
                        o,
                        i,
                        a,
                        c = [],
                        u = !0,
                        l = !1;
                      try {
                        if (((i = (r = r.call(t)).next), 0 === e)) {
                          if (Object(r) !== r) return;
                          u = !1;
                        } else
                          for (
                            ;
                            !(u = (n = i.call(r)).done) &&
                            (c.push(n.value), c.length !== e);
                            u = !0
                          );
                      } catch (t) {
                        (l = !0), (o = t);
                      } finally {
                        try {
                          if (
                            !u &&
                            null != r.return &&
                            ((a = r.return()), Object(a) !== a)
                          )
                            return;
                        } finally {
                          if (l) throw o;
                        }
                      }
                      return c;
                    }
                  })(M, _) ||
                  (function (t, e) {
                    if (t) {
                      if ("string" == typeof t) return pt(t, e);
                      var r = Object.prototype.toString.call(t).slice(8, -1);
                      return (
                        "Object" === r &&
                          t.constructor &&
                          (r = t.constructor.name),
                        "Map" === r || "Set" === r
                          ? Array.from(t)
                          : "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          ? pt(t, e)
                          : void 0
                      );
                    }
                  })(M, _) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()),
              D = C[0],
              I = C[1],
              N = (0, o.useCallback)(function (t, e) {
                I(function (r) {
                  var n = Math.round(t),
                    o = Math.round(e);
                  return r.containerWidth === n && r.containerHeight === o
                    ? r
                    : { containerWidth: n, containerHeight: o };
                });
              }, []);
            (0, o.useEffect)(
              function () {
                var t = function (t) {
                  var e,
                    r = t[0].contentRect,
                    n = r.width,
                    o = r.height;
                  N(n, o),
                    null === (e = k.current) || void 0 === e || e.call(k, n, o);
                };
                x > 0 && (t = s()(t, x, { trailing: !0, leading: !1 }));
                var e = new ResizeObserver(t),
                  r = A.current.getBoundingClientRect(),
                  n = r.width,
                  o = r.height;
                return (
                  N(n, o),
                  e.observe(A.current),
                  function () {
                    e.disconnect();
                  }
                );
              },
              [N, x]
            );
            var B = (0, o.useMemo)(
              function () {
                var t = D.containerWidth,
                  e = D.containerHeight;
                if (t < 0 || e < 0) return null;
                T(
                  w(l) || w(h),
                  "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.",
                  l,
                  h
                ),
                  T(
                    !r || r > 0,
                    "The aspect(%s) must be greater than zero.",
                    r
                  );
                var n = w(l) ? t : l,
                  a = w(h) ? e : h;
                r &&
                  r > 0 &&
                  (n ? (a = n / r) : a && (n = a * r), m && a > m && (a = m)),
                  T(
                    n > 0 || a > 0,
                    "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.",
                    n,
                    a,
                    l,
                    h,
                    y,
                    v,
                    r
                  );
                var c =
                  !Array.isArray(b) &&
                  (0, f.isElement)(b) &&
                  K(b.type).endsWith("Chart");
                return i().Children.map(b, function (t) {
                  return (0, f.isElement)(t)
                    ? (0, o.cloneElement)(
                        t,
                        st(
                          { width: n, height: a },
                          c
                            ? {
                                style: st(
                                  {
                                    height: "100%",
                                    width: "100%",
                                    maxHeight: a,
                                    maxWidth: n,
                                  },
                                  t.props.style
                                ),
                              }
                            : {}
                        )
                      )
                    : t;
                });
              },
              [r, b, h, m, v, y, D, l]
            );
            return i().createElement(
              "div",
              {
                id: O ? "".concat(O) : void 0,
                className: u("recharts-responsive-container", j),
                style: st(
                  st({}, P),
                  {},
                  {
                    width: l,
                    height: h,
                    minWidth: y,
                    minHeight: v,
                    maxHeight: m,
                  }
                ),
                ref: A,
              },
              B
            );
          }),
          dt = r(3181),
          yt = r.n(dt),
          vt = r(3031),
          mt = r.n(vt),
          bt = !0,
          gt = "Invariant failed";
        function xt(t, e) {
          if (!t) {
            if (bt) throw new Error(gt);
            var r = "function" == typeof e ? e() : e,
              n = r ? "".concat(gt, ": ").concat(r) : gt;
            throw new Error(n);
          }
        }
        var wt = [
          "children",
          "width",
          "height",
          "viewBox",
          "className",
          "style",
          "title",
          "desc",
        ];
        function Ot() {
          return (
            (Ot = Object.assign
              ? Object.assign.bind()
              : function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var n in r)
                      Object.prototype.hasOwnProperty.call(r, n) &&
                        (t[n] = r[n]);
                  }
                  return t;
                }),
            Ot.apply(this, arguments)
          );
        }
        function jt(t) {
          var e = t.children,
            r = t.width,
            n = t.height,
            o = t.viewBox,
            a = t.className,
            c = t.style,
            l = t.title,
            s = t.desc,
            f = (function (t, e) {
              if (null == t) return {};
              var r,
                n,
                o = (function (t, e) {
                  if (null == t) return {};
                  var r,
                    n,
                    o = {},
                    i = Object.keys(t);
                  for (n = 0; n < i.length; n++)
                    (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
                  return o;
                })(t, e);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                for (n = 0; n < i.length; n++)
                  (r = i[n]),
                    e.indexOf(r) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(t, r) &&
                        (o[r] = t[r]));
              }
              return o;
            })(t, wt),
            p = o || { width: r, height: n, x: 0, y: 0 },
            h = u("recharts-surface", a);
          return i().createElement(
            "svg",
            Ot({}, ot(f, !0, "svg"), {
              className: h,
              width: r,
              height: n,
              style: c,
              viewBox: ""
                .concat(p.x, " ")
                .concat(p.y, " ")
                .concat(p.width, " ")
                .concat(p.height),
            }),
            i().createElement("title", null, l),
            i().createElement("desc", null, s),
            e
          );
        }
        var St = ["children", "className"];
        function Et() {
          return (
            (Et = Object.assign
              ? Object.assign.bind()
              : function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var n in r)
                      Object.prototype.hasOwnProperty.call(r, n) &&
                        (t[n] = r[n]);
                  }
                  return t;
                }),
            Et.apply(this, arguments)
          );
        }
        var Pt = i().forwardRef(function (t, e) {
          var r = t.children,
            n = t.className,
            o = (function (t, e) {
              if (null == t) return {};
              var r,
                n,
                o = (function (t, e) {
                  if (null == t) return {};
                  var r,
                    n,
                    o = {},
                    i = Object.keys(t);
                  for (n = 0; n < i.length; n++)
                    (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
                  return o;
                })(t, e);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                for (n = 0; n < i.length; n++)
                  (r = i[n]),
                    e.indexOf(r) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(t, r) &&
                        (o[r] = t[r]));
              }
              return o;
            })(t, St),
            a = u("recharts-layer", n);
          return i().createElement(
            "g",
            Et({ className: a }, ot(o, !0), { ref: e }),
            r
          );
        });
        function At(t) {
          return (
            (At =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            At(t)
          );
        }
        function kt() {
          return (
            (kt = Object.assign
              ? Object.assign.bind()
              : function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var n in r)
                      Object.prototype.hasOwnProperty.call(r, n) &&
                        (t[n] = r[n]);
                  }
                  return t;
                }),
            kt.apply(this, arguments)
          );
        }
        function Mt(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
          return n;
        }
        function Tt(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function _t(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? Tt(Object(r), !0).forEach(function (e) {
                  Ct(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : Tt(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e)
                  );
                });
          }
          return t;
        }
        function Ct(t, e, r) {
          var n;
          return (
            (n = (function (t, e) {
              if ("object" != At(t) || !t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, "string");
                if ("object" != At(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(e)),
            (e = "symbol" == At(n) ? n : String(n)) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        function Dt(t) {
          return Array.isArray(t) && j(t[0]) && j(t[1]) ? t.join(" ~ ") : t;
        }
        var It = function (t) {
          var e = t.separator,
            r = void 0 === e ? " : " : e,
            n = t.contentStyle,
            o = void 0 === n ? {} : n,
            a = t.itemStyle,
            c = void 0 === a ? {} : a,
            l = t.labelStyle,
            s = void 0 === l ? {} : l,
            f = t.payload,
            p = t.formatter,
            h = t.itemSorter,
            d = t.wrapperClassName,
            y = t.labelClassName,
            v = t.label,
            m = t.labelFormatter,
            b = t.accessibilityLayer,
            g = void 0 !== b && b,
            x = _t(
              {
                margin: 0,
                padding: 10,
                backgroundColor: "#fff",
                border: "1px solid #ccc",
                whiteSpace: "nowrap",
              },
              o
            ),
            w = _t({ margin: 0 }, s),
            O = !C()(v),
            S = O ? v : "",
            E = u("recharts-default-tooltip", d),
            P = u("recharts-tooltip-label", y);
          O && m && null != f && (S = m(v, f));
          var A = g ? { role: "status", "aria-live": "assertive" } : {};
          return i().createElement(
            "div",
            kt({ className: E, style: x }, A),
            i().createElement(
              "p",
              { className: P, style: w },
              i().isValidElement(S) ? S : "".concat(S)
            ),
            (function () {
              if (f && f.length) {
                var t = (h ? mt()(f, h) : f).map(function (t, e) {
                  if ("none" === t.type) return null;
                  var n = _t(
                      {
                        display: "block",
                        paddingTop: 4,
                        paddingBottom: 4,
                        color: t.color || "#000",
                      },
                      c
                    ),
                    o = t.formatter || p || Dt,
                    a = t.value,
                    u = t.name,
                    l = a,
                    s = u;
                  if (o && null != l && null != s) {
                    var h = o(a, u, t, e, f);
                    if (Array.isArray(h)) {
                      var d = (function (t, e) {
                        return (
                          (function (t) {
                            if (Array.isArray(t)) return t;
                          })(t) ||
                          (function (t, e) {
                            var r =
                              null == t
                                ? null
                                : ("undefined" != typeof Symbol &&
                                    t[Symbol.iterator]) ||
                                  t["@@iterator"];
                            if (null != r) {
                              var n,
                                o,
                                i,
                                a,
                                c = [],
                                u = !0,
                                l = !1;
                              try {
                                if (((i = (r = r.call(t)).next), 0 === e)) {
                                  if (Object(r) !== r) return;
                                  u = !1;
                                } else
                                  for (
                                    ;
                                    !(u = (n = i.call(r)).done) &&
                                    (c.push(n.value), c.length !== e);
                                    u = !0
                                  );
                              } catch (t) {
                                (l = !0), (o = t);
                              } finally {
                                try {
                                  if (
                                    !u &&
                                    null != r.return &&
                                    ((a = r.return()), Object(a) !== a)
                                  )
                                    return;
                                } finally {
                                  if (l) throw o;
                                }
                              }
                              return c;
                            }
                          })(t, e) ||
                          (function (t, e) {
                            if (t) {
                              if ("string" == typeof t) return Mt(t, e);
                              var r = Object.prototype.toString
                                .call(t)
                                .slice(8, -1);
                              return (
                                "Object" === r &&
                                  t.constructor &&
                                  (r = t.constructor.name),
                                "Map" === r || "Set" === r
                                  ? Array.from(t)
                                  : "Arguments" === r ||
                                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                      r
                                    )
                                  ? Mt(t, e)
                                  : void 0
                              );
                            }
                          })(t, e) ||
                          (function () {
                            throw new TypeError(
                              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                            );
                          })()
                        );
                      })(h, 2);
                      (l = d[0]), (s = d[1]);
                    } else l = h;
                  }
                  return i().createElement(
                    "li",
                    {
                      className: "recharts-tooltip-item",
                      key: "tooltip-item-".concat(e),
                      style: n,
                    },
                    j(s)
                      ? i().createElement(
                          "span",
                          { className: "recharts-tooltip-item-name" },
                          s
                        )
                      : null,
                    j(s)
                      ? i().createElement(
                          "span",
                          { className: "recharts-tooltip-item-separator" },
                          r
                        )
                      : null,
                    i().createElement(
                      "span",
                      { className: "recharts-tooltip-item-value" },
                      l
                    ),
                    i().createElement(
                      "span",
                      { className: "recharts-tooltip-item-unit" },
                      t.unit || ""
                    )
                  );
                });
                return i().createElement(
                  "ul",
                  {
                    className: "recharts-tooltip-item-list",
                    style: { padding: 0, margin: 0 },
                  },
                  t
                );
              }
              return null;
            })()
          );
        };
        function Nt(t) {
          return (
            (Nt =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            Nt(t)
          );
        }
        function Bt(t, e, r) {
          var n;
          return (
            (n = (function (t, e) {
              if ("object" != Nt(t) || !t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, "string");
                if ("object" != Nt(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(e)),
            (e = "symbol" == Nt(n) ? n : String(n)) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        var Lt = "recharts-tooltip-wrapper",
          Rt = { visibility: "hidden" };
        function zt(t) {
          var e = t.coordinate,
            r = t.translateX,
            n = t.translateY;
          return u(
            Lt,
            Bt(
              Bt(
                Bt(
                  Bt(
                    {},
                    "".concat(Lt, "-right"),
                    O(r) && e && O(e.x) && r >= e.x
                  ),
                  "".concat(Lt, "-left"),
                  O(r) && e && O(e.x) && r < e.x
                ),
                "".concat(Lt, "-bottom"),
                O(n) && e && O(e.y) && n >= e.y
              ),
              "".concat(Lt, "-top"),
              O(n) && e && O(e.y) && n < e.y
            )
          );
        }
        function Ut(t) {
          var e = t.allowEscapeViewBox,
            r = t.coordinate,
            n = t.key,
            o = t.offsetTopLeft,
            i = t.position,
            a = t.reverseDirection,
            c = t.tooltipDimension,
            u = t.viewBox,
            l = t.viewBoxDimension;
          if (i && O(i[n])) return i[n];
          var s = r[n] - c - o,
            f = r[n] + o;
          return e[n]
            ? a[n]
              ? s
              : f
            : a[n]
            ? s < u[n]
              ? Math.max(f, u[n])
              : Math.max(s, u[n])
            : f + c > u[n] + l
            ? Math.max(s, u[n])
            : Math.max(f, u[n]);
        }
        function $t(t) {
          return (
            ($t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            $t(t)
          );
        }
        function Ft(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function Wt(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? Ft(Object(r), !0).forEach(function (e) {
                  Kt(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : Ft(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e)
                  );
                });
          }
          return t;
        }
        function qt(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, Zt(n.key), n);
          }
        }
        function Xt(t, e, r) {
          return (
            (e = Vt(e)),
            (function (t, e) {
              if (e && ("object" === $t(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return Gt(t);
            })(
              t,
              Ht()
                ? Reflect.construct(e, r || [], Vt(t).constructor)
                : e.apply(t, r)
            )
          );
        }
        function Ht() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            );
          } catch (t) {}
          return (Ht = function () {
            return !!t;
          })();
        }
        function Vt(t) {
          return (
            (Vt = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            Vt(t)
          );
        }
        function Gt(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function Yt(t, e) {
          return (
            (Yt = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            Yt(t, e)
          );
        }
        function Kt(t, e, r) {
          return (
            (e = Zt(e)) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        function Zt(t) {
          var e = (function (t, e) {
            if ("object" != $t(t) || !t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, "string");
              if ("object" != $t(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(t);
          })(t);
          return "symbol" == $t(e) ? e : String(e);
        }
        var Jt = (function (t) {
            function e() {
              var t;
              !(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e);
              for (
                var r = arguments.length, n = new Array(r), o = 0;
                o < r;
                o++
              )
                n[o] = arguments[o];
              return (
                Kt(Gt((t = Xt(this, e, [].concat(n)))), "state", {
                  dismissed: !1,
                  dismissedAtCoordinate: { x: 0, y: 0 },
                  lastBoundingBox: { width: -1, height: -1 },
                }),
                Kt(Gt(t), "handleKeyDown", function (e) {
                  var r, n, o, i;
                  "Escape" === e.key &&
                    t.setState({
                      dismissed: !0,
                      dismissedAtCoordinate: {
                        x:
                          null !==
                            (r =
                              null === (n = t.props.coordinate) || void 0 === n
                                ? void 0
                                : n.x) && void 0 !== r
                            ? r
                            : 0,
                        y:
                          null !==
                            (o =
                              null === (i = t.props.coordinate) || void 0 === i
                                ? void 0
                                : i.y) && void 0 !== o
                            ? o
                            : 0,
                      },
                    });
                }),
                t
              );
            }
            var r, n;
            return (
              (function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (t.prototype = Object.create(e && e.prototype, {
                  constructor: { value: t, writable: !0, configurable: !0 },
                })),
                  Object.defineProperty(t, "prototype", { writable: !1 }),
                  e && Yt(t, e);
              })(e, t),
              (r = e),
              (n = [
                {
                  key: "updateBBox",
                  value: function () {
                    if (
                      this.wrapperNode &&
                      this.wrapperNode.getBoundingClientRect
                    ) {
                      var t = this.wrapperNode.getBoundingClientRect();
                      (Math.abs(t.width - this.state.lastBoundingBox.width) >
                        1 ||
                        Math.abs(t.height - this.state.lastBoundingBox.height) >
                          1) &&
                        this.setState({
                          lastBoundingBox: { width: t.width, height: t.height },
                        });
                    } else
                      (-1 === this.state.lastBoundingBox.width &&
                        -1 === this.state.lastBoundingBox.height) ||
                        this.setState({
                          lastBoundingBox: { width: -1, height: -1 },
                        });
                  },
                },
                {
                  key: "componentDidMount",
                  value: function () {
                    document.addEventListener("keydown", this.handleKeyDown),
                      this.updateBBox();
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    document.removeEventListener("keydown", this.handleKeyDown);
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function () {
                    var t, e;
                    this.props.active && this.updateBBox(),
                      this.state.dismissed &&
                        (((null === (t = this.props.coordinate) || void 0 === t
                          ? void 0
                          : t.x) === this.state.dismissedAtCoordinate.x &&
                          (null === (e = this.props.coordinate) || void 0 === e
                            ? void 0
                            : e.y) === this.state.dismissedAtCoordinate.y) ||
                          (this.state.dismissed = !1));
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var t = this,
                      e = this.props,
                      r = e.active,
                      n = e.allowEscapeViewBox,
                      o = e.animationDuration,
                      a = e.animationEasing,
                      c = e.children,
                      u = e.coordinate,
                      l = e.hasPayload,
                      s = e.isAnimationActive,
                      f = e.offset,
                      p = e.position,
                      h = e.reverseDirection,
                      d = e.useTranslate3d,
                      y = e.viewBox,
                      v = e.wrapperStyle,
                      m = (function (t) {
                        var e,
                          r,
                          n = t.allowEscapeViewBox,
                          o = t.coordinate,
                          i = t.offsetTopLeft,
                          a = t.position,
                          c = t.reverseDirection,
                          u = t.tooltipBox,
                          l = t.useTranslate3d,
                          s = t.viewBox;
                        return {
                          cssProperties:
                            u.height > 0 && u.width > 0 && o
                              ? (function (t) {
                                  var e = t.translateX,
                                    r = t.translateY;
                                  return {
                                    transform: t.useTranslate3d
                                      ? "translate3d("
                                          .concat(e, "px, ")
                                          .concat(r, "px, 0)")
                                      : "translate("
                                          .concat(e, "px, ")
                                          .concat(r, "px)"),
                                  };
                                })({
                                  translateX: (e = Ut({
                                    allowEscapeViewBox: n,
                                    coordinate: o,
                                    key: "x",
                                    offsetTopLeft: i,
                                    position: a,
                                    reverseDirection: c,
                                    tooltipDimension: u.width,
                                    viewBox: s,
                                    viewBoxDimension: s.width,
                                  })),
                                  translateY: (r = Ut({
                                    allowEscapeViewBox: n,
                                    coordinate: o,
                                    key: "y",
                                    offsetTopLeft: i,
                                    position: a,
                                    reverseDirection: c,
                                    tooltipDimension: u.height,
                                    viewBox: s,
                                    viewBoxDimension: s.height,
                                  })),
                                  useTranslate3d: l,
                                })
                              : Rt,
                          cssClasses: zt({
                            translateX: e,
                            translateY: r,
                            coordinate: o,
                          }),
                        };
                      })({
                        allowEscapeViewBox: n,
                        coordinate: u,
                        offsetTopLeft: f,
                        position: p,
                        reverseDirection: h,
                        tooltipBox: this.state.lastBoundingBox,
                        useTranslate3d: d,
                        viewBox: y,
                      }),
                      b = m.cssClasses,
                      g = m.cssProperties,
                      x = Wt(
                        Wt(
                          {
                            transition:
                              s && r
                                ? "transform ".concat(o, "ms ").concat(a)
                                : void 0,
                          },
                          g
                        ),
                        {},
                        {
                          pointerEvents: "none",
                          visibility:
                            !this.state.dismissed && r && l
                              ? "visible"
                              : "hidden",
                          position: "absolute",
                          top: 0,
                          left: 0,
                        },
                        v
                      );
                    return i().createElement(
                      "div",
                      {
                        tabIndex: -1,
                        className: b,
                        style: x,
                        ref: function (e) {
                          t.wrapperNode = e;
                        },
                      },
                      c
                    );
                  },
                },
              ]) && qt(r.prototype, n),
              Object.defineProperty(r, "prototype", { writable: !1 }),
              e
            );
          })(o.PureComponent),
          Qt = {
            isSsr: !(
              "undefined" != typeof window &&
              window.document &&
              window.document.createElement &&
              window.setTimeout
            ),
            get: function (t) {
              return Qt[t];
            },
            set: function (t, e) {
              if ("string" == typeof t) Qt[t] = e;
              else {
                var r = Object.keys(t);
                r &&
                  r.length &&
                  r.forEach(function (e) {
                    Qt[e] = t[e];
                  });
              }
            },
          },
          te = r(14),
          ee = r.n(te);
        function re(t, e, r) {
          return !0 === e ? ee()(t, r) : I()(e) ? ee()(t, e) : t;
        }
        function ne(t) {
          return (
            (ne =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            ne(t)
          );
        }
        function oe(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function ie(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? oe(Object(r), !0).forEach(function (e) {
                  fe(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : oe(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e)
                  );
                });
          }
          return t;
        }
        function ae(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, pe(n.key), n);
          }
        }
        function ce(t, e, r) {
          return (
            (e = le(e)),
            (function (t, e) {
              if (e && ("object" === ne(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return (function (t) {
                if (void 0 === t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return t;
              })(t);
            })(
              t,
              ue()
                ? Reflect.construct(e, r || [], le(t).constructor)
                : e.apply(t, r)
            )
          );
        }
        function ue() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            );
          } catch (t) {}
          return (ue = function () {
            return !!t;
          })();
        }
        function le(t) {
          return (
            (le = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            le(t)
          );
        }
        function se(t, e) {
          return (
            (se = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            se(t, e)
          );
        }
        function fe(t, e, r) {
          return (
            (e = pe(e)) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        function pe(t) {
          var e = (function (t, e) {
            if ("object" != ne(t) || !t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, "string");
              if ("object" != ne(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(t);
          })(t);
          return "symbol" == ne(e) ? e : String(e);
        }
        function he(t) {
          return t.dataKey;
        }
        var de = (function (t) {
          function e() {
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
              ce(this, e, arguments)
            );
          }
          var r, n;
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && se(t, e);
            })(e, t),
            (r = e),
            (n = [
              {
                key: "render",
                value: function () {
                  var t = this,
                    e = this.props,
                    r = e.active,
                    n = e.allowEscapeViewBox,
                    o = e.animationDuration,
                    a = e.animationEasing,
                    c = e.content,
                    u = e.coordinate,
                    l = e.filterNull,
                    s = e.isAnimationActive,
                    f = e.offset,
                    p = e.payload,
                    h = e.payloadUniqBy,
                    d = e.position,
                    y = e.reverseDirection,
                    v = e.useTranslate3d,
                    m = e.viewBox,
                    b = e.wrapperStyle,
                    g = null != p ? p : [];
                  l &&
                    g.length &&
                    (g = re(
                      p.filter(function (e) {
                        return (
                          null != e.value &&
                          (!0 !== e.hide || t.props.includeHidden)
                        );
                      }),
                      h,
                      he
                    ));
                  var x = g.length > 0;
                  return i().createElement(
                    Jt,
                    {
                      allowEscapeViewBox: n,
                      animationDuration: o,
                      animationEasing: a,
                      isAnimationActive: s,
                      active: r,
                      coordinate: u,
                      hasPayload: x,
                      offset: f,
                      position: d,
                      reverseDirection: y,
                      useTranslate3d: v,
                      viewBox: m,
                      wrapperStyle: b,
                    },
                    (function (t, e) {
                      return i().isValidElement(t)
                        ? i().cloneElement(t, e)
                        : "function" == typeof t
                        ? i().createElement(t, e)
                        : i().createElement(It, e);
                    })(c, ie(ie({}, this.props), {}, { payload: g }))
                  );
                },
              },
            ]) && ae(r.prototype, n),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            e
          );
        })(o.PureComponent);
        fe(de, "displayName", "Tooltip"),
          fe(de, "defaultProps", {
            accessibilityLayer: !1,
            allowEscapeViewBox: { x: !1, y: !1 },
            animationDuration: 400,
            animationEasing: "ease",
            contentStyle: {},
            coordinate: { x: 0, y: 0 },
            cursor: !0,
            cursorStyle: {},
            filterNull: !0,
            isAnimationActive: !Qt.isSsr,
            itemStyle: {},
            labelStyle: {},
            offset: 10,
            reverseDirection: { x: !1, y: !1 },
            separator: " : ",
            trigger: "hover",
            useTranslate3d: !1,
            viewBox: { x: 0, y: 0, height: 0, width: 0 },
            wrapperStyle: {},
          });
        var ye = r(5808),
          ve = r.n(ye);
        Math.abs, Math.atan2;
        const me = Math.cos,
          be = (Math.max, Math.min, Math.sin),
          ge = Math.sqrt,
          xe = Math.PI,
          we = 2 * xe,
          Oe = {
            draw(t, e) {
              const r = ge(e / xe);
              t.moveTo(r, 0), t.arc(0, 0, r, 0, we);
            },
          },
          je = {
            draw(t, e) {
              const r = ge(e / 5) / 2;
              t.moveTo(-3 * r, -r),
                t.lineTo(-r, -r),
                t.lineTo(-r, -3 * r),
                t.lineTo(r, -3 * r),
                t.lineTo(r, -r),
                t.lineTo(3 * r, -r),
                t.lineTo(3 * r, r),
                t.lineTo(r, r),
                t.lineTo(r, 3 * r),
                t.lineTo(-r, 3 * r),
                t.lineTo(-r, r),
                t.lineTo(-3 * r, r),
                t.closePath();
            },
          },
          Se = ge(1 / 3),
          Ee = 2 * Se,
          Pe = {
            draw(t, e) {
              const r = ge(e / Ee),
                n = r * Se;
              t.moveTo(0, -r),
                t.lineTo(n, 0),
                t.lineTo(0, r),
                t.lineTo(-n, 0),
                t.closePath();
            },
          },
          Ae = {
            draw(t, e) {
              const r = ge(e),
                n = -r / 2;
              t.rect(n, n, r, r);
            },
          },
          ke = be(xe / 10) / be((7 * xe) / 10),
          Me = be(we / 10) * ke,
          Te = -me(we / 10) * ke,
          _e = {
            draw(t, e) {
              const r = ge(0.8908130915292852 * e),
                n = Me * r,
                o = Te * r;
              t.moveTo(0, -r), t.lineTo(n, o);
              for (let e = 1; e < 5; ++e) {
                const i = (we * e) / 5,
                  a = me(i),
                  c = be(i);
                t.lineTo(c * r, -a * r), t.lineTo(a * n - c * o, c * n + a * o);
              }
              t.closePath();
            },
          },
          Ce = ge(3),
          De = {
            draw(t, e) {
              const r = -ge(e / (3 * Ce));
              t.moveTo(0, 2 * r),
                t.lineTo(-Ce * r, -r),
                t.lineTo(Ce * r, -r),
                t.closePath();
            },
          },
          Ie = -0.5,
          Ne = ge(3) / 2,
          Be = 1 / ge(12),
          Le = 3 * (Be / 2 + 1),
          Re = {
            draw(t, e) {
              const r = ge(e / Le),
                n = r / 2,
                o = r * Be,
                i = n,
                a = r * Be + r,
                c = -i,
                u = a;
              t.moveTo(n, o),
                t.lineTo(i, a),
                t.lineTo(c, u),
                t.lineTo(Ie * n - Ne * o, Ne * n + Ie * o),
                t.lineTo(Ie * i - Ne * a, Ne * i + Ie * a),
                t.lineTo(Ie * c - Ne * u, Ne * c + Ie * u),
                t.lineTo(Ie * n + Ne * o, Ie * o - Ne * n),
                t.lineTo(Ie * i + Ne * a, Ie * a - Ne * i),
                t.lineTo(Ie * c + Ne * u, Ie * u - Ne * c),
                t.closePath();
            },
          };
        function ze(t) {
          return function () {
            return t;
          };
        }
        const Ue = Math.PI,
          $e = 2 * Ue,
          Fe = 1e-6,
          We = $e - Fe;
        function qe(t) {
          this._ += t[0];
          for (let e = 1, r = t.length; e < r; ++e)
            this._ += arguments[e] + t[e];
        }
        class Xe {
          constructor(t) {
            (this._x0 = this._y0 = this._x1 = this._y1 = null),
              (this._ = ""),
              (this._append =
                null == t
                  ? qe
                  : (function (t) {
                      let e = Math.floor(t);
                      if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
                      if (e > 15) return qe;
                      const r = 10 ** e;
                      return function (t) {
                        this._ += t[0];
                        for (let e = 1, n = t.length; e < n; ++e)
                          this._ += Math.round(arguments[e] * r) / r + t[e];
                      };
                    })(t));
          }
          moveTo(t, e) {
            this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 =
              +e)}`;
          }
          closePath() {
            null !== this._x1 &&
              ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
          }
          lineTo(t, e) {
            this._append`L${(this._x1 = +t)},${(this._y1 = +e)}`;
          }
          quadraticCurveTo(t, e, r, n) {
            this._append`Q${+t},${+e},${(this._x1 = +r)},${(this._y1 = +n)}`;
          }
          bezierCurveTo(t, e, r, n, o, i) {
            this._append`C${+t},${+e},${+r},${+n},${(this._x1 =
              +o)},${(this._y1 = +i)}`;
          }
          arcTo(t, e, r, n, o) {
            if (((t = +t), (e = +e), (r = +r), (n = +n), (o = +o) < 0))
              throw new Error(`negative radius: ${o}`);
            let i = this._x1,
              a = this._y1,
              c = r - t,
              u = n - e,
              l = i - t,
              s = a - e,
              f = l * l + s * s;
            if (null === this._x1)
              this._append`M${(this._x1 = t)},${(this._y1 = e)}`;
            else if (f > Fe)
              if (Math.abs(s * c - u * l) > Fe && o) {
                let p = r - i,
                  h = n - a,
                  d = c * c + u * u,
                  y = p * p + h * h,
                  v = Math.sqrt(d),
                  m = Math.sqrt(f),
                  b =
                    o *
                    Math.tan((Ue - Math.acos((d + f - y) / (2 * v * m))) / 2),
                  g = b / m,
                  x = b / v;
                Math.abs(g - 1) > Fe &&
                  this._append`L${t + g * l},${e + g * s}`,
                  this._append`A${o},${o},0,0,${+(s * p > l * h)},${(this._x1 =
                    t + x * c)},${(this._y1 = e + x * u)}`;
              } else this._append`L${(this._x1 = t)},${(this._y1 = e)}`;
          }
          arc(t, e, r, n, o, i) {
            if (((t = +t), (e = +e), (i = !!i), (r = +r) < 0))
              throw new Error(`negative radius: ${r}`);
            let a = r * Math.cos(n),
              c = r * Math.sin(n),
              u = t + a,
              l = e + c,
              s = 1 ^ i,
              f = i ? n - o : o - n;
            null === this._x1
              ? this._append`M${u},${l}`
              : (Math.abs(this._x1 - u) > Fe || Math.abs(this._y1 - l) > Fe) &&
                this._append`L${u},${l}`,
              r &&
                (f < 0 && (f = (f % $e) + $e),
                f > We
                  ? this._append`A${r},${r},0,1,${s},${t - a},${
                      e - c
                    }A${r},${r},0,1,${s},${(this._x1 = u)},${(this._y1 = l)}`
                  : f > Fe &&
                    this._append`A${r},${r},0,${+(f >= Ue)},${s},${(this._x1 =
                      t + r * Math.cos(o))},${(this._y1 =
                      e + r * Math.sin(o))}`);
          }
          rect(t, e, r, n) {
            this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 =
              +e)}h${(r = +r)}v${+n}h${-r}Z`;
          }
          toString() {
            return this._;
          }
        }
        function He(t) {
          let e = 3;
          return (
            (t.digits = function (r) {
              if (!arguments.length) return e;
              if (null == r) e = null;
              else {
                const t = Math.floor(r);
                if (!(t >= 0)) throw new RangeError(`invalid digits: ${r}`);
                e = t;
              }
              return t;
            }),
            () => new Xe(e)
          );
        }
        function Ve(t) {
          return (
            (Ve =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            Ve(t)
          );
        }
        Xe.prototype, ge(3), ge(3);
        var Ge = ["type", "size", "sizeType"];
        function Ye() {
          return (
            (Ye = Object.assign
              ? Object.assign.bind()
              : function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var n in r)
                      Object.prototype.hasOwnProperty.call(r, n) &&
                        (t[n] = r[n]);
                  }
                  return t;
                }),
            Ye.apply(this, arguments)
          );
        }
        function Ke(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function Ze(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? Ke(Object(r), !0).forEach(function (e) {
                  Je(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : Ke(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e)
                  );
                });
          }
          return t;
        }
        function Je(t, e, r) {
          var n;
          return (
            (n = (function (t, e) {
              if ("object" != Ve(t) || !t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, "string");
                if ("object" != Ve(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(e)),
            (e = "symbol" == Ve(n) ? n : String(n)) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        var Qe = {
            symbolCircle: Oe,
            symbolCross: je,
            symbolDiamond: Pe,
            symbolSquare: Ae,
            symbolStar: _e,
            symbolTriangle: De,
            symbolWye: Re,
          },
          tr = Math.PI / 180,
          er = function (t) {
            var e,
              r,
              n = t.type,
              o = void 0 === n ? "circle" : n,
              a = t.size,
              c = void 0 === a ? 64 : a,
              l = t.sizeType,
              s = void 0 === l ? "area" : l,
              f = Ze(
                Ze(
                  {},
                  (function (t, e) {
                    if (null == t) return {};
                    var r,
                      n,
                      o = (function (t, e) {
                        if (null == t) return {};
                        var r,
                          n,
                          o = {},
                          i = Object.keys(t);
                        for (n = 0; n < i.length; n++)
                          (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
                        return o;
                      })(t, e);
                    if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(t);
                      for (n = 0; n < i.length; n++)
                        (r = i[n]),
                          e.indexOf(r) >= 0 ||
                            (Object.prototype.propertyIsEnumerable.call(t, r) &&
                              (o[r] = t[r]));
                    }
                    return o;
                  })(t, Ge)
                ),
                {},
                { type: o, size: c, sizeType: s }
              ),
              p = f.className,
              h = f.cx,
              d = f.cy,
              y = ot(f, !0);
            return h === +h && d === +d && c === +c
              ? i().createElement(
                  "path",
                  Ye({}, y, {
                    className: u("recharts-symbols", p),
                    transform: "translate(".concat(h, ", ").concat(d, ")"),
                    d:
                      ((e = (function (t) {
                        var e = "symbol".concat(ve()(t));
                        return Qe[e] || Oe;
                      })(o)),
                      (r = (function (t, e) {
                        let r = null,
                          n = He(o);
                        function o() {
                          let o;
                          if (
                            (r || (r = o = n()),
                            t
                              .apply(this, arguments)
                              .draw(r, +e.apply(this, arguments)),
                            o)
                          )
                            return (r = null), o + "" || null;
                        }
                        return (
                          (t = "function" == typeof t ? t : ze(t || Oe)),
                          (e =
                            "function" == typeof e
                              ? e
                              : ze(void 0 === e ? 64 : +e)),
                          (o.type = function (e) {
                            return arguments.length
                              ? ((t = "function" == typeof e ? e : ze(e)), o)
                              : t;
                          }),
                          (o.size = function (t) {
                            return arguments.length
                              ? ((e = "function" == typeof t ? t : ze(+t)), o)
                              : e;
                          }),
                          (o.context = function (t) {
                            return arguments.length
                              ? ((r = null == t ? null : t), o)
                              : r;
                          }),
                          o
                        );
                      })()
                        .type(e)
                        .size(
                          (function (t, e, r) {
                            if ("area" === e) return t;
                            switch (r) {
                              case "cross":
                                return (5 * t * t) / 9;
                              case "diamond":
                                return (0.5 * t * t) / Math.sqrt(3);
                              case "square":
                                return t * t;
                              case "star":
                                var n = 18 * tr;
                                return (
                                  1.25 *
                                  t *
                                  t *
                                  (Math.tan(n) -
                                    Math.tan(2 * n) * Math.pow(Math.tan(n), 2))
                                );
                              case "triangle":
                                return (Math.sqrt(3) * t * t) / 4;
                              case "wye":
                                return ((21 - 10 * Math.sqrt(3)) * t * t) / 8;
                              default:
                                return (Math.PI * t * t) / 4;
                            }
                          })(c, s, o)
                        )),
                      r()),
                  })
                )
              : null;
          };
        function rr(t) {
          return (
            (rr =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            rr(t)
          );
        }
        function nr() {
          return (
            (nr = Object.assign
              ? Object.assign.bind()
              : function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var n in r)
                      Object.prototype.hasOwnProperty.call(r, n) &&
                        (t[n] = r[n]);
                  }
                  return t;
                }),
            nr.apply(this, arguments)
          );
        }
        function or(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function ir(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, fr(n.key), n);
          }
        }
        function ar(t, e, r) {
          return (
            (e = ur(e)),
            (function (t, e) {
              if (e && ("object" === rr(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return (function (t) {
                if (void 0 === t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return t;
              })(t);
            })(
              t,
              cr()
                ? Reflect.construct(e, r || [], ur(t).constructor)
                : e.apply(t, r)
            )
          );
        }
        function cr() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            );
          } catch (t) {}
          return (cr = function () {
            return !!t;
          })();
        }
        function ur(t) {
          return (
            (ur = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            ur(t)
          );
        }
        function lr(t, e) {
          return (
            (lr = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            lr(t, e)
          );
        }
        function sr(t, e, r) {
          return (
            (e = fr(e)) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        function fr(t) {
          var e = (function (t, e) {
            if ("object" != rr(t) || !t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, "string");
              if ("object" != rr(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(t);
          })(t);
          return "symbol" == rr(e) ? e : String(e);
        }
        er.registerSymbol = function (t, e) {
          Qe["symbol".concat(ve()(t))] = e;
        };
        var pr = 32,
          hr = (function (t) {
            function e() {
              return (
                (function (t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e),
                ar(this, e, arguments)
              );
            }
            var r, n;
            return (
              (function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (t.prototype = Object.create(e && e.prototype, {
                  constructor: { value: t, writable: !0, configurable: !0 },
                })),
                  Object.defineProperty(t, "prototype", { writable: !1 }),
                  e && lr(t, e);
              })(e, t),
              (r = e),
              (n = [
                {
                  key: "renderIcon",
                  value: function (t) {
                    var e = this.props.inactiveColor,
                      r = 16,
                      n = pr / 6,
                      o = pr / 3,
                      a = t.inactive ? e : t.color;
                    if ("plainline" === t.type)
                      return i().createElement("line", {
                        strokeWidth: 4,
                        fill: "none",
                        stroke: a,
                        strokeDasharray: t.payload.strokeDasharray,
                        x1: 0,
                        y1: r,
                        x2: pr,
                        y2: r,
                        className: "recharts-legend-icon",
                      });
                    if ("line" === t.type)
                      return i().createElement("path", {
                        strokeWidth: 4,
                        fill: "none",
                        stroke: a,
                        d: "M0,"
                          .concat(r, "h")
                          .concat(o, "\n            A")
                          .concat(n, ",")
                          .concat(n, ",0,1,1,")
                          .concat(2 * o, ",")
                          .concat(r, "\n            H")
                          .concat(pr, "M")
                          .concat(2 * o, ",")
                          .concat(r, "\n            A")
                          .concat(n, ",")
                          .concat(n, ",0,1,1,")
                          .concat(o, ",")
                          .concat(r),
                        className: "recharts-legend-icon",
                      });
                    if ("rect" === t.type)
                      return i().createElement("path", {
                        stroke: "none",
                        fill: a,
                        d: "M0,"
                          .concat(4, "h")
                          .concat(pr, "v")
                          .concat(24, "h")
                          .concat(-32, "z"),
                        className: "recharts-legend-icon",
                      });
                    if (i().isValidElement(t.legendIcon)) {
                      var c = (function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                          var r = null != arguments[e] ? arguments[e] : {};
                          e % 2
                            ? or(Object(r), !0).forEach(function (e) {
                                sr(t, e, r[e]);
                              })
                            : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                t,
                                Object.getOwnPropertyDescriptors(r)
                              )
                            : or(Object(r)).forEach(function (e) {
                                Object.defineProperty(
                                  t,
                                  e,
                                  Object.getOwnPropertyDescriptor(r, e)
                                );
                              });
                        }
                        return t;
                      })({}, t);
                      return (
                        delete c.legendIcon, i().cloneElement(t.legendIcon, c)
                      );
                    }
                    return i().createElement(er, {
                      fill: a,
                      cx: r,
                      cy: r,
                      size: pr,
                      sizeType: "diameter",
                      type: t.type,
                    });
                  },
                },
                {
                  key: "renderItems",
                  value: function () {
                    var t = this,
                      e = this.props,
                      r = e.payload,
                      n = e.iconSize,
                      o = e.layout,
                      a = e.formatter,
                      c = e.inactiveColor,
                      l = { x: 0, y: 0, width: pr, height: pr },
                      s = {
                        display: "horizontal" === o ? "inline-block" : "block",
                        marginRight: 10,
                      },
                      f = {
                        display: "inline-block",
                        verticalAlign: "middle",
                        marginRight: 4,
                      };
                    return r.map(function (e, r) {
                      var o = e.formatter || a,
                        p = u(
                          sr(
                            sr(
                              { "recharts-legend-item": !0 },
                              "legend-item-".concat(r),
                              !0
                            ),
                            "inactive",
                            e.inactive
                          )
                        );
                      if ("none" === e.type) return null;
                      var h = I()(e.value) ? null : e.value;
                      T(
                        !I()(e.value),
                        'The name property is also required when using a function for the dataKey of a chart\'s cartesian components. Ex: <Bar name="Name of my Data"/>'
                      );
                      var d = e.inactive ? c : e.color;
                      return i().createElement(
                        "li",
                        nr(
                          {
                            className: p,
                            style: s,
                            key: "legend-item-".concat(r),
                          },
                          q(t.props, e, r)
                        ),
                        i().createElement(
                          jt,
                          { width: n, height: n, viewBox: l, style: f },
                          t.renderIcon(e)
                        ),
                        i().createElement(
                          "span",
                          {
                            className: "recharts-legend-item-text",
                            style: { color: d },
                          },
                          o ? o(h, e, r) : h
                        )
                      );
                    });
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var t = this.props,
                      e = t.payload,
                      r = t.layout,
                      n = t.align;
                    if (!e || !e.length) return null;
                    var o = {
                      padding: 0,
                      margin: 0,
                      textAlign: "horizontal" === r ? n : "left",
                    };
                    return i().createElement(
                      "ul",
                      { className: "recharts-default-legend", style: o },
                      this.renderItems()
                    );
                  },
                },
              ]),
              n && ir(r.prototype, n),
              Object.defineProperty(r, "prototype", { writable: !1 }),
              e
            );
          })(o.PureComponent);
        function dr(t) {
          return (
            (dr =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            dr(t)
          );
        }
        sr(hr, "displayName", "Legend"),
          sr(hr, "defaultProps", {
            iconSize: 14,
            layout: "horizontal",
            align: "center",
            verticalAlign: "middle",
            inactiveColor: "#ccc",
          });
        var yr = ["ref"];
        function vr(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function mr(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? vr(Object(r), !0).forEach(function (e) {
                  Sr(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : vr(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e)
                  );
                });
          }
          return t;
        }
        function br(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, Er(n.key), n);
          }
        }
        function gr(t, e, r) {
          return (
            (e = wr(e)),
            (function (t, e) {
              if (e && ("object" === dr(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return Or(t);
            })(
              t,
              xr()
                ? Reflect.construct(e, r || [], wr(t).constructor)
                : e.apply(t, r)
            )
          );
        }
        function xr() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            );
          } catch (t) {}
          return (xr = function () {
            return !!t;
          })();
        }
        function wr(t) {
          return (
            (wr = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            wr(t)
          );
        }
        function Or(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function jr(t, e) {
          return (
            (jr = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            jr(t, e)
          );
        }
        function Sr(t, e, r) {
          return (
            (e = Er(e)) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        function Er(t) {
          var e = (function (t, e) {
            if ("object" != dr(t) || !t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, "string");
              if ("object" != dr(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(t);
          })(t);
          return "symbol" == dr(e) ? e : String(e);
        }
        function Pr(t) {
          return t.value;
        }
        var Ar = (function (t) {
          function e() {
            var t;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e);
            for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
              n[o] = arguments[o];
            return (
              Sr(Or((t = gr(this, e, [].concat(n)))), "lastBoundingBox", {
                width: -1,
                height: -1,
              }),
              t
            );
          }
          var r, n, o;
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && jr(t, e);
            })(e, t),
            (r = e),
            (o = [
              {
                key: "getWithHeight",
                value: function (t, e) {
                  var r = t.props.layout;
                  return "vertical" === r && O(t.props.height)
                    ? { height: t.props.height }
                    : "horizontal" === r
                    ? { width: t.props.width || e }
                    : null;
                },
              },
            ]),
            (n = [
              {
                key: "componentDidMount",
                value: function () {
                  this.updateBBox();
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  this.updateBBox();
                },
              },
              {
                key: "getBBox",
                value: function () {
                  if (
                    this.wrapperNode &&
                    this.wrapperNode.getBoundingClientRect
                  ) {
                    var t = this.wrapperNode.getBoundingClientRect();
                    return (
                      (t.height = this.wrapperNode.offsetHeight),
                      (t.width = this.wrapperNode.offsetWidth),
                      t
                    );
                  }
                  return null;
                },
              },
              {
                key: "updateBBox",
                value: function () {
                  var t = this.props.onBBoxUpdate,
                    e = this.getBBox();
                  e
                    ? (Math.abs(e.width - this.lastBoundingBox.width) > 1 ||
                        Math.abs(e.height - this.lastBoundingBox.height) > 1) &&
                      ((this.lastBoundingBox.width = e.width),
                      (this.lastBoundingBox.height = e.height),
                      t && t(e))
                    : (-1 === this.lastBoundingBox.width &&
                        -1 === this.lastBoundingBox.height) ||
                      ((this.lastBoundingBox.width = -1),
                      (this.lastBoundingBox.height = -1),
                      t && t(null));
                },
              },
              {
                key: "getBBoxSnapshot",
                value: function () {
                  return this.lastBoundingBox.width >= 0 &&
                    this.lastBoundingBox.height >= 0
                    ? mr({}, this.lastBoundingBox)
                    : { width: 0, height: 0 };
                },
              },
              {
                key: "getDefaultPosition",
                value: function (t) {
                  var e,
                    r,
                    n = this.props,
                    o = n.layout,
                    i = n.align,
                    a = n.verticalAlign,
                    c = n.margin,
                    u = n.chartWidth,
                    l = n.chartHeight;
                  return (
                    (t &&
                      ((void 0 !== t.left && null !== t.left) ||
                        (void 0 !== t.right && null !== t.right))) ||
                      (e =
                        "center" === i && "vertical" === o
                          ? {
                              left:
                                ((u || 0) - this.getBBoxSnapshot().width) / 2,
                            }
                          : "right" === i
                          ? { right: (c && c.right) || 0 }
                          : { left: (c && c.left) || 0 }),
                    (t &&
                      ((void 0 !== t.top && null !== t.top) ||
                        (void 0 !== t.bottom && null !== t.bottom))) ||
                      (r =
                        "middle" === a
                          ? {
                              top:
                                ((l || 0) - this.getBBoxSnapshot().height) / 2,
                            }
                          : "bottom" === a
                          ? { bottom: (c && c.bottom) || 0 }
                          : { top: (c && c.top) || 0 }),
                    mr(mr({}, e), r)
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this,
                    e = this.props,
                    r = e.content,
                    n = e.width,
                    o = e.height,
                    a = e.wrapperStyle,
                    c = e.payloadUniqBy,
                    u = e.payload,
                    l = mr(
                      mr(
                        {
                          position: "absolute",
                          width: n || "auto",
                          height: o || "auto",
                        },
                        this.getDefaultPosition(a)
                      ),
                      a
                    );
                  return i().createElement(
                    "div",
                    {
                      className: "recharts-legend-wrapper",
                      style: l,
                      ref: function (e) {
                        t.wrapperNode = e;
                      },
                    },
                    (function (t, e) {
                      if (i().isValidElement(t)) return i().cloneElement(t, e);
                      if ("function" == typeof t)
                        return i().createElement(t, e);
                      e.ref;
                      var r = (function (t, e) {
                        if (null == t) return {};
                        var r,
                          n,
                          o = (function (t, e) {
                            if (null == t) return {};
                            var r,
                              n,
                              o = {},
                              i = Object.keys(t);
                            for (n = 0; n < i.length; n++)
                              (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
                            return o;
                          })(t, e);
                        if (Object.getOwnPropertySymbols) {
                          var i = Object.getOwnPropertySymbols(t);
                          for (n = 0; n < i.length; n++)
                            (r = i[n]),
                              e.indexOf(r) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(
                                  t,
                                  r
                                ) &&
                                  (o[r] = t[r]));
                        }
                        return o;
                      })(e, yr);
                      return i().createElement(hr, r);
                    })(r, mr(mr({}, this.props), {}, { payload: re(u, c, Pr) }))
                  );
                },
              },
            ]) && br(r.prototype, n),
            o && br(r, o),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            e
          );
        })(o.PureComponent);
        function kr() {
          return (
            (kr = Object.assign
              ? Object.assign.bind()
              : function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var n in r)
                      Object.prototype.hasOwnProperty.call(r, n) &&
                        (t[n] = r[n]);
                  }
                  return t;
                }),
            kr.apply(this, arguments)
          );
        }
        Sr(Ar, "displayName", "Legend"),
          Sr(Ar, "defaultProps", {
            iconSize: 14,
            layout: "horizontal",
            align: "center",
            verticalAlign: "bottom",
          });
        var Mr = function (t) {
            var e = t.cx,
              r = t.cy,
              n = t.r,
              o = t.className,
              a = u("recharts-dot", o);
            return e === +e && r === +r && n === +n
              ? i().createElement(
                  "circle",
                  kr({}, ot(t, !1), W(t), { className: a, cx: e, cy: r, r: n })
                )
              : null;
          },
          Tr = r(5556),
          _r = r.n(Tr),
          Cr = Object.getOwnPropertyNames,
          Dr = Object.getOwnPropertySymbols,
          Ir = Object.prototype.hasOwnProperty;
        function Nr(t, e) {
          return function (r, n, o) {
            return t(r, n, o) && e(r, n, o);
          };
        }
        function Br(t) {
          return function (e, r, n) {
            if (!e || !r || "object" != typeof e || "object" != typeof r)
              return t(e, r, n);
            var o = n.cache,
              i = o.get(e),
              a = o.get(r);
            if (i && a) return i === r && a === e;
            o.set(e, r), o.set(r, e);
            var c = t(e, r, n);
            return o.delete(e), o.delete(r), c;
          };
        }
        function Lr(t) {
          return Cr(t).concat(Dr(t));
        }
        var Rr =
          Object.hasOwn ||
          function (t, e) {
            return Ir.call(t, e);
          };
        function zr(t, e) {
          return t || e ? t === e : t === e || (t != t && e != e);
        }
        var Ur = "_owner",
          $r = Object.getOwnPropertyDescriptor,
          Fr = Object.keys;
        function Wr(t, e, r) {
          var n = t.length;
          if (e.length !== n) return !1;
          for (; n-- > 0; ) if (!r.equals(t[n], e[n], n, n, t, e, r)) return !1;
          return !0;
        }
        function qr(t, e) {
          return zr(t.getTime(), e.getTime());
        }
        function Xr(t, e, r) {
          if (t.size !== e.size) return !1;
          for (
            var n, o, i = {}, a = t.entries(), c = 0;
            (n = a.next()) && !n.done;

          ) {
            for (
              var u = e.entries(), l = !1, s = 0;
              (o = u.next()) && !o.done;

            ) {
              var f = n.value,
                p = f[0],
                h = f[1],
                d = o.value,
                y = d[0],
                v = d[1];
              l ||
                i[s] ||
                !(l =
                  r.equals(p, y, c, s, t, e, r) &&
                  r.equals(h, v, p, y, t, e, r)) ||
                (i[s] = !0),
                s++;
            }
            if (!l) return !1;
            c++;
          }
          return !0;
        }
        function Hr(t, e, r) {
          var n,
            o = Fr(t),
            i = o.length;
          if (Fr(e).length !== i) return !1;
          for (; i-- > 0; ) {
            if (
              (n = o[i]) === Ur &&
              (t.$$typeof || e.$$typeof) &&
              t.$$typeof !== e.$$typeof
            )
              return !1;
            if (!Rr(e, n) || !r.equals(t[n], e[n], n, n, t, e, r)) return !1;
          }
          return !0;
        }
        function Vr(t, e, r) {
          var n,
            o,
            i,
            a = Lr(t),
            c = a.length;
          if (Lr(e).length !== c) return !1;
          for (; c-- > 0; ) {
            if (
              (n = a[c]) === Ur &&
              (t.$$typeof || e.$$typeof) &&
              t.$$typeof !== e.$$typeof
            )
              return !1;
            if (!Rr(e, n)) return !1;
            if (!r.equals(t[n], e[n], n, n, t, e, r)) return !1;
            if (
              ((o = $r(t, n)),
              (i = $r(e, n)),
              (o || i) &&
                (!o ||
                  !i ||
                  o.configurable !== i.configurable ||
                  o.enumerable !== i.enumerable ||
                  o.writable !== i.writable))
            )
              return !1;
          }
          return !0;
        }
        function Gr(t, e) {
          return zr(t.valueOf(), e.valueOf());
        }
        function Yr(t, e) {
          return t.source === e.source && t.flags === e.flags;
        }
        function Kr(t, e, r) {
          if (t.size !== e.size) return !1;
          for (var n, o, i = {}, a = t.values(); (n = a.next()) && !n.done; ) {
            for (var c = e.values(), u = !1, l = 0; (o = c.next()) && !o.done; )
              u ||
                i[l] ||
                !(u = r.equals(n.value, o.value, n.value, o.value, t, e, r)) ||
                (i[l] = !0),
                l++;
            if (!u) return !1;
          }
          return !0;
        }
        function Zr(t, e) {
          var r = t.length;
          if (e.length !== r) return !1;
          for (; r-- > 0; ) if (t[r] !== e[r]) return !1;
          return !0;
        }
        var Jr = Array.isArray,
          Qr =
            "function" == typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView
              : null,
          tn = Object.assign,
          en = Object.prototype.toString.call.bind(Object.prototype.toString),
          rn = nn();
        function nn(t) {
          void 0 === t && (t = {});
          var e,
            r = t.circular,
            n = void 0 !== r && r,
            o = t.createInternalComparator,
            i = t.createState,
            a = t.strict,
            c = void 0 !== a && a,
            u = (function (t) {
              var e = t.circular,
                r = t.createCustomConfig,
                n = t.strict,
                o = {
                  areArraysEqual: n ? Vr : Wr,
                  areDatesEqual: qr,
                  areMapsEqual: n ? Nr(Xr, Vr) : Xr,
                  areObjectsEqual: n ? Vr : Hr,
                  arePrimitiveWrappersEqual: Gr,
                  areRegExpsEqual: Yr,
                  areSetsEqual: n ? Nr(Kr, Vr) : Kr,
                  areTypedArraysEqual: n ? Vr : Zr,
                };
              if ((r && (o = tn({}, o, r(o))), e)) {
                var i = Br(o.areArraysEqual),
                  a = Br(o.areMapsEqual),
                  c = Br(o.areObjectsEqual),
                  u = Br(o.areSetsEqual);
                o = tn({}, o, {
                  areArraysEqual: i,
                  areMapsEqual: a,
                  areObjectsEqual: c,
                  areSetsEqual: u,
                });
              }
              return o;
            })(t),
            l = (function (t) {
              var e = t.areArraysEqual,
                r = t.areDatesEqual,
                n = t.areMapsEqual,
                o = t.areObjectsEqual,
                i = t.arePrimitiveWrappersEqual,
                a = t.areRegExpsEqual,
                c = t.areSetsEqual,
                u = t.areTypedArraysEqual;
              return function (t, l, s) {
                if (t === l) return !0;
                if (
                  null == t ||
                  null == l ||
                  "object" != typeof t ||
                  "object" != typeof l
                )
                  return t != t && l != l;
                var f = t.constructor;
                if (f !== l.constructor) return !1;
                if (f === Object) return o(t, l, s);
                if (Jr(t)) return e(t, l, s);
                if (null != Qr && Qr(t)) return u(t, l, s);
                if (f === Date) return r(t, l, s);
                if (f === RegExp) return a(t, l, s);
                if (f === Map) return n(t, l, s);
                if (f === Set) return c(t, l, s);
                var p = en(t);
                return "[object Date]" === p
                  ? r(t, l, s)
                  : "[object RegExp]" === p
                  ? a(t, l, s)
                  : "[object Map]" === p
                  ? n(t, l, s)
                  : "[object Set]" === p
                  ? c(t, l, s)
                  : "[object Object]" === p
                  ? "function" != typeof t.then &&
                    "function" != typeof l.then &&
                    o(t, l, s)
                  : "[object Arguments]" === p
                  ? o(t, l, s)
                  : ("[object Boolean]" === p ||
                      "[object Number]" === p ||
                      "[object String]" === p) &&
                    i(t, l, s);
              };
            })(u),
            s = o
              ? o(l)
              : ((e = l),
                function (t, r, n, o, i, a, c) {
                  return e(t, r, c);
                });
          return (function (t) {
            var e = t.circular,
              r = t.comparator,
              n = t.createState,
              o = t.equals,
              i = t.strict;
            if (n)
              return function (t, a) {
                var c = n(),
                  u = c.cache,
                  l = void 0 === u ? (e ? new WeakMap() : void 0) : u,
                  s = c.meta;
                return r(t, a, { cache: l, equals: o, meta: s, strict: i });
              };
            if (e)
              return function (t, e) {
                return r(t, e, {
                  cache: new WeakMap(),
                  equals: o,
                  meta: void 0,
                  strict: i,
                });
              };
            var a = { cache: void 0, equals: o, meta: void 0, strict: i };
            return function (t, e) {
              return r(t, e, a);
            };
          })({
            circular: n,
            comparator: l,
            createState: i,
            equals: s,
            strict: c,
          });
        }
        function on(t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            r = -1;
          requestAnimationFrame(function n(o) {
            r < 0 && (r = o),
              o - r > e
                ? (t(o), (r = -1))
                : (function (t) {
                    "undefined" != typeof requestAnimationFrame &&
                      requestAnimationFrame(t);
                  })(n);
          });
        }
        function an(t) {
          return (
            (an =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            an(t)
          );
        }
        function cn(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
          return n;
        }
        function un() {
          var t = function () {
              return null;
            },
            e = !1,
            r = function r(n) {
              if (!e) {
                if (Array.isArray(n)) {
                  if (!n.length) return;
                  var o =
                      (function (t) {
                        if (Array.isArray(t)) return t;
                      })((c = n)) ||
                      (function (t) {
                        if (
                          ("undefined" != typeof Symbol &&
                            null != t[Symbol.iterator]) ||
                          null != t["@@iterator"]
                        )
                          return Array.from(t);
                      })(c) ||
                      (function (t, e) {
                        if (t) {
                          if ("string" == typeof t) return cn(t, e);
                          var r = Object.prototype.toString
                            .call(t)
                            .slice(8, -1);
                          return (
                            "Object" === r &&
                              t.constructor &&
                              (r = t.constructor.name),
                            "Map" === r || "Set" === r
                              ? Array.from(t)
                              : "Arguments" === r ||
                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                  r
                                )
                              ? cn(t, e)
                              : void 0
                          );
                        }
                      })(c) ||
                      (function () {
                        throw new TypeError(
                          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                      })(),
                    i = o[0],
                    a = o.slice(1);
                  return "number" == typeof i
                    ? void on(r.bind(null, a), i)
                    : (r(i), void on(r.bind(null, a)));
                }
                "object" === an(n) && t(n), "function" == typeof n && n();
              }
              var c;
            };
          return {
            stop: function () {
              e = !0;
            },
            start: function (t) {
              (e = !1), r(t);
            },
            subscribe: function (e) {
              return (
                (t = e),
                function () {
                  t = function () {
                    return null;
                  };
                }
              );
            },
          };
        }
        function ln(t) {
          return (
            (ln =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            ln(t)
          );
        }
        function sn(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function fn(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? sn(Object(r), !0).forEach(function (e) {
                  pn(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : sn(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e)
                  );
                });
          }
          return t;
        }
        function pn(t, e, r) {
          return (
            (e = (function (t) {
              var e = (function (t, e) {
                if ("object" !== ln(t) || null === t) return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                  var n = r.call(t, "string");
                  if ("object" !== ln(n)) return n;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(t);
              })(t);
              return "symbol" === ln(e) ? e : String(e);
            })(e)) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        nn({ strict: !0 }),
          nn({ circular: !0 }),
          nn({ circular: !0, strict: !0 }),
          nn({
            createInternalComparator: function () {
              return zr;
            },
          }),
          nn({
            strict: !0,
            createInternalComparator: function () {
              return zr;
            },
          }),
          nn({
            circular: !0,
            createInternalComparator: function () {
              return zr;
            },
          }),
          nn({
            circular: !0,
            createInternalComparator: function () {
              return zr;
            },
            strict: !0,
          });
        var hn = function (t) {
            return t;
          },
          dn = function (t, e) {
            return Object.keys(e).reduce(function (r, n) {
              return fn(fn({}, r), {}, pn({}, n, t(n, e[n])));
            }, {});
          },
          yn = function (t, e, r) {
            return t
              .map(function (t) {
                return ""
                  .concat(
                    ((n = t),
                    n.replace(/([A-Z])/g, function (t) {
                      return "-".concat(t.toLowerCase());
                    })),
                    " "
                  )
                  .concat(e, "ms ")
                  .concat(r);
                var n;
              })
              .join(",");
          };
        function vn(t, e) {
          if (t) {
            if ("string" == typeof t) return mn(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            return (
              "Object" === r && t.constructor && (r = t.constructor.name),
              "Map" === r || "Set" === r
                ? Array.from(t)
                : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? mn(t, e)
                : void 0
            );
          }
        }
        function mn(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
          return n;
        }
        var bn = 1e-4,
          gn = function (t, e) {
            return [0, 3 * t, 3 * e - 6 * t, 3 * t - 3 * e + 1];
          },
          xn = function (t, e) {
            return t
              .map(function (t, r) {
                return t * Math.pow(e, r);
              })
              .reduce(function (t, e) {
                return t + e;
              });
          },
          wn = function (t, e) {
            return function (r) {
              var n = gn(t, e);
              return xn(n, r);
            };
          },
          On = function () {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
              e[r] = arguments[r];
            var n,
              o,
              i = e[0],
              a = e[1],
              c = e[2],
              u = e[3];
            if (1 === e.length)
              switch (e[0]) {
                case "linear":
                  (i = 0), (a = 0), (c = 1), (u = 1);
                  break;
                case "ease":
                  (i = 0.25), (a = 0.1), (c = 0.25), (u = 1);
                  break;
                case "ease-in":
                  (i = 0.42), (a = 0), (c = 1), (u = 1);
                  break;
                case "ease-out":
                  (i = 0.42), (a = 0), (c = 0.58), (u = 1);
                  break;
                case "ease-in-out":
                  (i = 0), (a = 0), (c = 0.58), (u = 1);
                  break;
                default:
                  var l = e[0].split("(");
                  if (
                    "cubic-bezier" === l[0] &&
                    4 === l[1].split(")")[0].split(",").length
                  ) {
                    var s =
                      ((n = l[1]
                        .split(")")[0]
                        .split(",")
                        .map(function (t) {
                          return parseFloat(t);
                        })),
                      (o = 4),
                      (function (t) {
                        if (Array.isArray(t)) return t;
                      })(n) ||
                        (function (t, e) {
                          var r =
                            null == t
                              ? null
                              : ("undefined" != typeof Symbol &&
                                  t[Symbol.iterator]) ||
                                t["@@iterator"];
                          if (null != r) {
                            var n,
                              o,
                              i,
                              a,
                              c = [],
                              u = !0,
                              l = !1;
                            try {
                              if (((i = (r = r.call(t)).next), 0 === e)) {
                                if (Object(r) !== r) return;
                                u = !1;
                              } else
                                for (
                                  ;
                                  !(u = (n = i.call(r)).done) &&
                                  (c.push(n.value), c.length !== e);
                                  u = !0
                                );
                            } catch (t) {
                              (l = !0), (o = t);
                            } finally {
                              try {
                                if (
                                  !u &&
                                  null != r.return &&
                                  ((a = r.return()), Object(a) !== a)
                                )
                                  return;
                              } finally {
                                if (l) throw o;
                              }
                            }
                            return c;
                          }
                        })(n, o) ||
                        vn(n, o) ||
                        (function () {
                          throw new TypeError(
                            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                          );
                        })());
                    (i = s[0]), (a = s[1]), (c = s[2]), (u = s[3]);
                  }
              }
            [i, c, a, u].every(function (t) {
              return "number" == typeof t && t >= 0 && t <= 1;
            });
            var f,
              p,
              h = wn(i, c),
              d = wn(a, u),
              y =
                ((f = i),
                (p = c),
                function (t) {
                  var e = gn(f, p),
                    r = [].concat(
                      (function (t) {
                        return (
                          (function (t) {
                            if (Array.isArray(t)) return mn(t);
                          })(t) ||
                          (function (t) {
                            if (
                              ("undefined" != typeof Symbol &&
                                null != t[Symbol.iterator]) ||
                              null != t["@@iterator"]
                            )
                              return Array.from(t);
                          })(t) ||
                          vn(t) ||
                          (function () {
                            throw new TypeError(
                              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                            );
                          })()
                        );
                      })(
                        e
                          .map(function (t, e) {
                            return t * e;
                          })
                          .slice(1)
                      ),
                      [0]
                    );
                  return xn(r, t);
                }),
              v = function (t) {
                return t > 1 ? 1 : t < 0 ? 0 : t;
              },
              m = function (t) {
                for (var e = t > 1 ? 1 : t, r = e, n = 0; n < 8; ++n) {
                  var o = h(r) - e,
                    i = y(r);
                  if (Math.abs(o - e) < bn || i < bn) return d(r);
                  r = v(r - o / i);
                }
                return d(r);
              };
            return (m.isStepper = !1), m;
          };
        function jn(t) {
          return (
            (jn =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            jn(t)
          );
        }
        function Sn(t) {
          return (
            (function (t) {
              if (Array.isArray(t)) return Mn(t);
            })(t) ||
            (function (t) {
              if (
                ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
                null != t["@@iterator"]
              )
                return Array.from(t);
            })(t) ||
            kn(t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function En(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function Pn(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? En(Object(r), !0).forEach(function (e) {
                  An(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : En(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e)
                  );
                });
          }
          return t;
        }
        function An(t, e, r) {
          return (
            (e = (function (t) {
              var e = (function (t, e) {
                if ("object" !== jn(t) || null === t) return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                  var n = r.call(t, "string");
                  if ("object" !== jn(n)) return n;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(t);
              })(t);
              return "symbol" === jn(e) ? e : String(e);
            })(e)) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        function kn(t, e) {
          if (t) {
            if ("string" == typeof t) return Mn(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            return (
              "Object" === r && t.constructor && (r = t.constructor.name),
              "Map" === r || "Set" === r
                ? Array.from(t)
                : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? Mn(t, e)
                : void 0
            );
          }
        }
        function Mn(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
          return n;
        }
        var Tn = function (t, e, r) {
            return t + (e - t) * r;
          },
          Cn = function (t) {
            return t.from !== t.to;
          },
          Dn = function t(e, r, n) {
            var o = dn(function (t, r) {
              if (Cn(r)) {
                var n =
                    ((a = e(r.from, r.to, r.velocity)),
                    (c = 2),
                    (function (t) {
                      if (Array.isArray(t)) return t;
                    })(a) ||
                      (function (t, e) {
                        var r =
                          null == t
                            ? null
                            : ("undefined" != typeof Symbol &&
                                t[Symbol.iterator]) ||
                              t["@@iterator"];
                        if (null != r) {
                          var n,
                            o,
                            i,
                            a,
                            c = [],
                            u = !0,
                            l = !1;
                          try {
                            if (((i = (r = r.call(t)).next), 0 === e)) {
                              if (Object(r) !== r) return;
                              u = !1;
                            } else
                              for (
                                ;
                                !(u = (n = i.call(r)).done) &&
                                (c.push(n.value), c.length !== e);
                                u = !0
                              );
                          } catch (t) {
                            (l = !0), (o = t);
                          } finally {
                            try {
                              if (
                                !u &&
                                null != r.return &&
                                ((a = r.return()), Object(a) !== a)
                              )
                                return;
                            } finally {
                              if (l) throw o;
                            }
                          }
                          return c;
                        }
                      })(a, c) ||
                      kn(a, c) ||
                      (function () {
                        throw new TypeError(
                          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                      })()),
                  o = n[0],
                  i = n[1];
                return Pn(Pn({}, r), {}, { from: o, velocity: i });
              }
              var a, c;
              return r;
            }, r);
            return n < 1
              ? dn(function (t, e) {
                  return Cn(e)
                    ? Pn(
                        Pn({}, e),
                        {},
                        {
                          velocity: Tn(e.velocity, o[t].velocity, n),
                          from: Tn(e.from, o[t].from, n),
                        }
                      )
                    : e;
                }, r)
              : t(e, o, n - 1);
          };
        function In(t) {
          return (
            (In =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            In(t)
          );
        }
        var Nn = [
          "children",
          "begin",
          "duration",
          "attributeName",
          "easing",
          "isActive",
          "steps",
          "from",
          "to",
          "canBegin",
          "onAnimationEnd",
          "shouldReAnimate",
          "onAnimationReStart",
        ];
        function Bn(t) {
          return (
            (function (t) {
              if (Array.isArray(t)) return Ln(t);
            })(t) ||
            (function (t) {
              if (
                ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
                null != t["@@iterator"]
              )
                return Array.from(t);
            })(t) ||
            (function (t, e) {
              if (t) {
                if ("string" == typeof t) return Ln(t, e);
                var r = Object.prototype.toString.call(t).slice(8, -1);
                return (
                  "Object" === r && t.constructor && (r = t.constructor.name),
                  "Map" === r || "Set" === r
                    ? Array.from(t)
                    : "Arguments" === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? Ln(t, e)
                    : void 0
                );
              }
            })(t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function Ln(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
          return n;
        }
        function Rn(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function zn(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? Rn(Object(r), !0).forEach(function (e) {
                  Un(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : Rn(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e)
                  );
                });
          }
          return t;
        }
        function Un(t, e, r) {
          return (
            (e = Fn(e)) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        function $n(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, Fn(n.key), n);
          }
        }
        function Fn(t) {
          var e = (function (t, e) {
            if ("object" !== In(t) || null === t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, "string");
              if ("object" !== In(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(t);
          })(t);
          return "symbol" === In(e) ? e : String(e);
        }
        function Wn(t, e) {
          return (
            (Wn = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            Wn(t, e)
          );
        }
        function qn(t, e) {
          if (e && ("object" === In(e) || "function" == typeof e)) return e;
          if (void 0 !== e)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return Xn(t);
        }
        function Xn(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function Hn(t) {
          return (
            (Hn = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            Hn(t)
          );
        }
        var Vn = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && Wn(t, e);
          })(u, t);
          var e,
            r,
            n,
            a,
            c =
              ((n = u),
              (a = (function () {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()),
              function () {
                var t,
                  e = Hn(n);
                if (a) {
                  var r = Hn(this).constructor;
                  t = Reflect.construct(e, arguments, r);
                } else t = e.apply(this, arguments);
                return qn(this, t);
              });
          function u(t, e) {
            var r;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, u);
            var n = (r = c.call(this, t, e)).props,
              o = n.isActive,
              i = n.attributeName,
              a = n.from,
              l = n.to,
              s = n.steps,
              f = n.children,
              p = n.duration;
            if (
              ((r.handleStyleChange = r.handleStyleChange.bind(Xn(r))),
              (r.changeStyle = r.changeStyle.bind(Xn(r))),
              !o || p <= 0)
            )
              return (
                (r.state = { style: {} }),
                "function" == typeof f && (r.state = { style: l }),
                qn(r)
              );
            if (s && s.length) r.state = { style: s[0].style };
            else if (a) {
              if ("function" == typeof f)
                return (r.state = { style: a }), qn(r);
              r.state = { style: i ? Un({}, i, a) : a };
            } else r.state = { style: {} };
            return r;
          }
          return (
            (e = u),
            (r = [
              {
                key: "componentDidMount",
                value: function () {
                  var t = this.props,
                    e = t.isActive,
                    r = t.canBegin;
                  (this.mounted = !0), e && r && this.runAnimation(this.props);
                },
              },
              {
                key: "componentDidUpdate",
                value: function (t) {
                  var e = this.props,
                    r = e.isActive,
                    n = e.canBegin,
                    o = e.attributeName,
                    i = e.shouldReAnimate,
                    a = e.to,
                    c = e.from,
                    u = this.state.style;
                  if (n)
                    if (r) {
                      if (!(rn(t.to, a) && t.canBegin && t.isActive)) {
                        var l = !t.canBegin || !t.isActive;
                        this.manager && this.manager.stop(),
                          this.stopJSAnimation && this.stopJSAnimation();
                        var s = l || i ? c : t.to;
                        if (this.state && u) {
                          var f = { style: o ? Un({}, o, s) : s };
                          ((o && u[o] !== s) || (!o && u !== s)) &&
                            this.setState(f);
                        }
                        this.runAnimation(
                          zn(zn({}, this.props), {}, { from: s, begin: 0 })
                        );
                      }
                    } else {
                      var p = { style: o ? Un({}, o, a) : a };
                      this.state &&
                        u &&
                        ((o && u[o] !== a) || (!o && u !== a)) &&
                        this.setState(p);
                    }
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.mounted = !1;
                  var t = this.props.onAnimationEnd;
                  this.unSubscribe && this.unSubscribe(),
                    this.manager &&
                      (this.manager.stop(), (this.manager = null)),
                    this.stopJSAnimation && this.stopJSAnimation(),
                    t && t();
                },
              },
              {
                key: "handleStyleChange",
                value: function (t) {
                  this.changeStyle(t);
                },
              },
              {
                key: "changeStyle",
                value: function (t) {
                  this.mounted && this.setState({ style: t });
                },
              },
              {
                key: "runJSAnimation",
                value: function (t) {
                  var e = this,
                    r = t.from,
                    n = t.to,
                    o = t.duration,
                    i = t.easing,
                    a = t.begin,
                    c = t.onAnimationEnd,
                    u = t.onAnimationStart,
                    l = (function (t, e, r, n, o) {
                      var i,
                        a,
                        c,
                        u,
                        l =
                          ((i = t),
                          (a = e),
                          [Object.keys(i), Object.keys(a)].reduce(function (
                            t,
                            e
                          ) {
                            return t.filter(function (t) {
                              return e.includes(t);
                            });
                          })),
                        s = l.reduce(function (r, n) {
                          return Pn(Pn({}, r), {}, An({}, n, [t[n], e[n]]));
                        }, {}),
                        f = l.reduce(function (r, n) {
                          return Pn(
                            Pn({}, r),
                            {},
                            An({}, n, { from: t[n], velocity: 0, to: e[n] })
                          );
                        }, {}),
                        p = -1,
                        h = function () {
                          return null;
                        };
                      return (
                        (h = r.isStepper
                          ? function (n) {
                              c || (c = n);
                              var i = (n - c) / r.dt;
                              (f = Dn(r, f, i)),
                                o(
                                  Pn(
                                    Pn(Pn({}, t), e),
                                    dn(function (t, e) {
                                      return e.from;
                                    }, f)
                                  )
                                ),
                                (c = n),
                                Object.values(f).filter(Cn).length &&
                                  (p = requestAnimationFrame(h));
                            }
                          : function (i) {
                              u || (u = i);
                              var a = (i - u) / n,
                                c = dn(function (t, e) {
                                  return Tn.apply(void 0, Sn(e).concat([r(a)]));
                                }, s);
                              if ((o(Pn(Pn(Pn({}, t), e), c)), a < 1))
                                p = requestAnimationFrame(h);
                              else {
                                var l = dn(function (t, e) {
                                  return Tn.apply(void 0, Sn(e).concat([r(1)]));
                                }, s);
                                o(Pn(Pn(Pn({}, t), e), l));
                              }
                            }),
                        function () {
                          return (
                            requestAnimationFrame(h),
                            function () {
                              cancelAnimationFrame(p);
                            }
                          );
                        }
                      );
                    })(
                      r,
                      n,
                      (function () {
                        for (
                          var t = arguments.length, e = new Array(t), r = 0;
                          r < t;
                          r++
                        )
                          e[r] = arguments[r];
                        var n = e[0];
                        if ("string" == typeof n)
                          switch (n) {
                            case "ease":
                            case "ease-in-out":
                            case "ease-out":
                            case "ease-in":
                            case "linear":
                              return On(n);
                            case "spring":
                              return (function () {
                                var t =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                      ? arguments[0]
                                      : {},
                                  e = t.stiff,
                                  r = void 0 === e ? 100 : e,
                                  n = t.damping,
                                  o = void 0 === n ? 8 : n,
                                  i = t.dt,
                                  a = void 0 === i ? 17 : i,
                                  c = function (t, e, n) {
                                    var i =
                                        n + ((-(t - e) * r - n * o) * a) / 1e3,
                                      c = (n * a) / 1e3 + t;
                                    return Math.abs(c - e) < bn &&
                                      Math.abs(i) < bn
                                      ? [e, 0]
                                      : [c, i];
                                  };
                                return (c.isStepper = !0), (c.dt = a), c;
                              })();
                            default:
                              if ("cubic-bezier" === n.split("(")[0])
                                return On(n);
                          }
                        return "function" == typeof n ? n : null;
                      })(i),
                      o,
                      this.changeStyle
                    );
                  this.manager.start([
                    u,
                    a,
                    function () {
                      e.stopJSAnimation = l();
                    },
                    o,
                    c,
                  ]);
                },
              },
              {
                key: "runStepAnimation",
                value: function (t) {
                  var e = this,
                    r = t.steps,
                    n = t.begin,
                    o = t.onAnimationStart,
                    i = r[0],
                    a = i.style,
                    c = i.duration,
                    u = void 0 === c ? 0 : c;
                  return this.manager.start(
                    [o].concat(
                      Bn(
                        r.reduce(
                          function (t, n, o) {
                            if (0 === o) return t;
                            var i = n.duration,
                              a = n.easing,
                              c = void 0 === a ? "ease" : a,
                              u = n.style,
                              l = n.properties,
                              s = n.onAnimationEnd,
                              f = o > 0 ? r[o - 1] : n,
                              p = l || Object.keys(u);
                            if ("function" == typeof c || "spring" === c)
                              return [].concat(Bn(t), [
                                e.runJSAnimation.bind(e, {
                                  from: f.style,
                                  to: u,
                                  duration: i,
                                  easing: c,
                                }),
                                i,
                              ]);
                            var h = yn(p, i, c),
                              d = zn(
                                zn(zn({}, f.style), u),
                                {},
                                { transition: h }
                              );
                            return [].concat(Bn(t), [d, i, s]).filter(hn);
                          },
                          [a, Math.max(u, n)]
                        )
                      ),
                      [t.onAnimationEnd]
                    )
                  );
                },
              },
              {
                key: "runAnimation",
                value: function (t) {
                  this.manager || (this.manager = un());
                  var e = t.begin,
                    r = t.duration,
                    n = t.attributeName,
                    o = t.to,
                    i = t.easing,
                    a = t.onAnimationStart,
                    c = t.onAnimationEnd,
                    u = t.steps,
                    l = t.children,
                    s = this.manager;
                  if (
                    ((this.unSubscribe = s.subscribe(this.handleStyleChange)),
                    "function" != typeof i &&
                      "function" != typeof l &&
                      "spring" !== i)
                  )
                    if (u.length > 1) this.runStepAnimation(t);
                    else {
                      var f = n ? Un({}, n, o) : o,
                        p = yn(Object.keys(f), r, i);
                      s.start([
                        a,
                        e,
                        zn(zn({}, f), {}, { transition: p }),
                        r,
                        c,
                      ]);
                    }
                  else this.runJSAnimation(t);
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this.props,
                    e = t.children,
                    r = (t.begin, t.duration),
                    n = (t.attributeName, t.easing, t.isActive),
                    a =
                      (t.steps,
                      t.from,
                      t.to,
                      t.canBegin,
                      t.onAnimationEnd,
                      t.shouldReAnimate,
                      t.onAnimationReStart,
                      (function (t, e) {
                        if (null == t) return {};
                        var r,
                          n,
                          o = (function (t, e) {
                            if (null == t) return {};
                            var r,
                              n,
                              o = {},
                              i = Object.keys(t);
                            for (n = 0; n < i.length; n++)
                              (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
                            return o;
                          })(t, e);
                        if (Object.getOwnPropertySymbols) {
                          var i = Object.getOwnPropertySymbols(t);
                          for (n = 0; n < i.length; n++)
                            (r = i[n]),
                              e.indexOf(r) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(
                                  t,
                                  r
                                ) &&
                                  (o[r] = t[r]));
                        }
                        return o;
                      })(t, Nn)),
                    c = o.Children.count(e),
                    u = this.state.style;
                  if ("function" == typeof e) return e(u);
                  if (!n || 0 === c || r <= 0) return e;
                  var l = function (t) {
                    var e = t.props,
                      r = e.style,
                      n = void 0 === r ? {} : r,
                      i = e.className;
                    return (0, o.cloneElement)(
                      t,
                      zn(
                        zn({}, a),
                        {},
                        { style: zn(zn({}, n), u), className: i }
                      )
                    );
                  };
                  return 1 === c
                    ? l(o.Children.only(e))
                    : i().createElement(
                        "div",
                        null,
                        o.Children.map(e, function (t) {
                          return l(t);
                        })
                      );
                },
              },
            ]) && $n(e.prototype, r),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            u
          );
        })(o.PureComponent);
        (Vn.displayName = "Animate"),
          (Vn.defaultProps = {
            begin: 0,
            duration: 1e3,
            from: "",
            to: "",
            attributeName: "",
            easing: "ease",
            isActive: !0,
            canBegin: !0,
            steps: [],
            onAnimationEnd: function () {},
            onAnimationStart: function () {},
          }),
          (Vn.propTypes = {
            from: _r().oneOfType([_r().object, _r().string]),
            to: _r().oneOfType([_r().object, _r().string]),
            attributeName: _r().string,
            duration: _r().number,
            begin: _r().number,
            easing: _r().oneOfType([_r().string, _r().func]),
            steps: _r().arrayOf(
              _r().shape({
                duration: _r().number.isRequired,
                style: _r().object.isRequired,
                easing: _r().oneOfType([
                  _r().oneOf([
                    "ease",
                    "ease-in",
                    "ease-out",
                    "ease-in-out",
                    "linear",
                  ]),
                  _r().func,
                ]),
                properties: _r().arrayOf("string"),
                onAnimationEnd: _r().func,
              })
            ),
            children: _r().oneOfType([_r().node, _r().func]),
            isActive: _r().bool,
            canBegin: _r().bool,
            onAnimationEnd: _r().func,
            shouldReAnimate: _r().bool,
            onAnimationStart: _r().func,
            onAnimationReStart: _r().func,
          });
        const Gn = Vn;
        function Yn(t, e) {
          if (null == t) return {};
          var r = {};
          for (var n in t)
            if (Object.prototype.hasOwnProperty.call(t, n)) {
              if (e.indexOf(n) >= 0) continue;
              r[n] = t[n];
            }
          return r;
        }
        function Kn() {
          return (
            (Kn = Object.assign
              ? Object.assign.bind()
              : function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var n in r)
                      Object.prototype.hasOwnProperty.call(r, n) &&
                        (t[n] = r[n]);
                  }
                  return t;
                }),
            Kn.apply(this, arguments)
          );
        }
        function Zn(t, e) {
          return (
            (Zn = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            Zn(t, e)
          );
        }
        function Jn(t, e) {
          (t.prototype = Object.create(e.prototype)),
            (t.prototype.constructor = t),
            Zn(t, e);
        }
        const Qn = i().createContext(null);
        function to(t, e) {
          var r = Object.create(null);
          return (
            t &&
              o.Children.map(t, function (t) {
                return t;
              }).forEach(function (t) {
                r[t.key] = (function (t) {
                  return e && (0, o.isValidElement)(t) ? e(t) : t;
                })(t);
              }),
            r
          );
        }
        function eo(t, e, r) {
          return null != r[e] ? r[e] : t.props[e];
        }
        function ro(t, e, r) {
          var n = to(t.children),
            i = (function (t, e) {
              function r(r) {
                return r in e ? e[r] : t[r];
              }
              (t = t || {}), (e = e || {});
              var n,
                o = Object.create(null),
                i = [];
              for (var a in t)
                a in e ? i.length && ((o[a] = i), (i = [])) : i.push(a);
              var c = {};
              for (var u in e) {
                if (o[u])
                  for (n = 0; n < o[u].length; n++) {
                    var l = o[u][n];
                    c[o[u][n]] = r(l);
                  }
                c[u] = r(u);
              }
              for (n = 0; n < i.length; n++) c[i[n]] = r(i[n]);
              return c;
            })(e, n);
          return (
            Object.keys(i).forEach(function (a) {
              var c = i[a];
              if ((0, o.isValidElement)(c)) {
                var u = a in e,
                  l = a in n,
                  s = e[a],
                  f = (0, o.isValidElement)(s) && !s.props.in;
                !l || (u && !f)
                  ? l || !u || f
                    ? l &&
                      u &&
                      (0, o.isValidElement)(s) &&
                      (i[a] = (0, o.cloneElement)(c, {
                        onExited: r.bind(null, c),
                        in: s.props.in,
                        exit: eo(c, "exit", t),
                        enter: eo(c, "enter", t),
                      }))
                    : (i[a] = (0, o.cloneElement)(c, { in: !1 }))
                  : (i[a] = (0, o.cloneElement)(c, {
                      onExited: r.bind(null, c),
                      in: !0,
                      exit: eo(c, "exit", t),
                      enter: eo(c, "enter", t),
                    }));
              }
            }),
            i
          );
        }
        var no =
            Object.values ||
            function (t) {
              return Object.keys(t).map(function (e) {
                return t[e];
              });
            },
          oo = (function (t) {
            function e(e, r) {
              var n,
                o = (n = t.call(this, e, r) || this).handleExited.bind(
                  (function (t) {
                    if (void 0 === t)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return t;
                  })(n)
                );
              return (
                (n.state = {
                  contextValue: { isMounting: !0 },
                  handleExited: o,
                  firstRender: !0,
                }),
                n
              );
            }
            Jn(e, t);
            var r = e.prototype;
            return (
              (r.componentDidMount = function () {
                (this.mounted = !0),
                  this.setState({ contextValue: { isMounting: !1 } });
              }),
              (r.componentWillUnmount = function () {
                this.mounted = !1;
              }),
              (e.getDerivedStateFromProps = function (t, e) {
                var r,
                  n,
                  i = e.children,
                  a = e.handleExited;
                return {
                  children: e.firstRender
                    ? ((r = t),
                      (n = a),
                      to(r.children, function (t) {
                        return (0,
                        o.cloneElement)(t, { onExited: n.bind(null, t), in: !0, appear: eo(t, "appear", r), enter: eo(t, "enter", r), exit: eo(t, "exit", r) });
                      }))
                    : ro(t, i, a),
                  firstRender: !1,
                };
              }),
              (r.handleExited = function (t, e) {
                var r = to(this.props.children);
                t.key in r ||
                  (t.props.onExited && t.props.onExited(e),
                  this.mounted &&
                    this.setState(function (e) {
                      var r = Kn({}, e.children);
                      return delete r[t.key], { children: r };
                    }));
              }),
              (r.render = function () {
                var t = this.props,
                  e = t.component,
                  r = t.childFactory,
                  n = Yn(t, ["component", "childFactory"]),
                  o = this.state.contextValue,
                  a = no(this.state.children).map(r);
                return (
                  delete n.appear,
                  delete n.enter,
                  delete n.exit,
                  null === e
                    ? i().createElement(Qn.Provider, { value: o }, a)
                    : i().createElement(
                        Qn.Provider,
                        { value: o },
                        i().createElement(e, n, a)
                      )
                );
              }),
              e
            );
          })(i().Component);
        (oo.propTypes = {}),
          (oo.defaultProps = {
            component: "div",
            childFactory: function (t) {
              return t;
            },
          });
        const io = oo,
          ao = window.ReactDOM;
        var co = r.n(ao);
        var uo = "unmounted",
          lo = "exited",
          so = "entering",
          fo = "entered",
          po = "exiting",
          ho = (function (t) {
            function e(e, r) {
              var n;
              n = t.call(this, e, r) || this;
              var o,
                i = r && !r.isMounting ? e.enter : e.appear;
              return (
                (n.appearStatus = null),
                e.in
                  ? i
                    ? ((o = lo), (n.appearStatus = so))
                    : (o = fo)
                  : (o = e.unmountOnExit || e.mountOnEnter ? uo : lo),
                (n.state = { status: o }),
                (n.nextCallback = null),
                n
              );
            }
            Jn(e, t),
              (e.getDerivedStateFromProps = function (t, e) {
                return t.in && e.status === uo ? { status: lo } : null;
              });
            var r = e.prototype;
            return (
              (r.componentDidMount = function () {
                this.updateStatus(!0, this.appearStatus);
              }),
              (r.componentDidUpdate = function (t) {
                var e = null;
                if (t !== this.props) {
                  var r = this.state.status;
                  this.props.in
                    ? r !== so && r !== fo && (e = so)
                    : (r !== so && r !== fo) || (e = po);
                }
                this.updateStatus(!1, e);
              }),
              (r.componentWillUnmount = function () {
                this.cancelNextCallback();
              }),
              (r.getTimeouts = function () {
                var t,
                  e,
                  r,
                  n = this.props.timeout;
                return (
                  (t = e = r = n),
                  null != n &&
                    "number" != typeof n &&
                    ((t = n.exit),
                    (e = n.enter),
                    (r = void 0 !== n.appear ? n.appear : e)),
                  { exit: t, enter: e, appear: r }
                );
              }),
              (r.updateStatus = function (t, e) {
                if ((void 0 === t && (t = !1), null !== e))
                  if ((this.cancelNextCallback(), e === so)) {
                    if (this.props.unmountOnExit || this.props.mountOnEnter) {
                      var r = this.props.nodeRef
                        ? this.props.nodeRef.current
                        : co().findDOMNode(this);
                      r &&
                        (function (t) {
                          t.scrollTop;
                        })(r);
                    }
                    this.performEnter(t);
                  } else this.performExit();
                else
                  this.props.unmountOnExit &&
                    this.state.status === lo &&
                    this.setState({ status: uo });
              }),
              (r.performEnter = function (t) {
                var e = this,
                  r = this.props.enter,
                  n = this.context ? this.context.isMounting : t,
                  o = this.props.nodeRef ? [n] : [co().findDOMNode(this), n],
                  i = o[0],
                  a = o[1],
                  c = this.getTimeouts(),
                  u = n ? c.appear : c.enter;
                t || r
                  ? (this.props.onEnter(i, a),
                    this.safeSetState({ status: so }, function () {
                      e.props.onEntering(i, a),
                        e.onTransitionEnd(u, function () {
                          e.safeSetState({ status: fo }, function () {
                            e.props.onEntered(i, a);
                          });
                        });
                    }))
                  : this.safeSetState({ status: fo }, function () {
                      e.props.onEntered(i);
                    });
              }),
              (r.performExit = function () {
                var t = this,
                  e = this.props.exit,
                  r = this.getTimeouts(),
                  n = this.props.nodeRef ? void 0 : co().findDOMNode(this);
                e
                  ? (this.props.onExit(n),
                    this.safeSetState({ status: po }, function () {
                      t.props.onExiting(n),
                        t.onTransitionEnd(r.exit, function () {
                          t.safeSetState({ status: lo }, function () {
                            t.props.onExited(n);
                          });
                        });
                    }))
                  : this.safeSetState({ status: lo }, function () {
                      t.props.onExited(n);
                    });
              }),
              (r.cancelNextCallback = function () {
                null !== this.nextCallback &&
                  (this.nextCallback.cancel(), (this.nextCallback = null));
              }),
              (r.safeSetState = function (t, e) {
                (e = this.setNextCallback(e)), this.setState(t, e);
              }),
              (r.setNextCallback = function (t) {
                var e = this,
                  r = !0;
                return (
                  (this.nextCallback = function (n) {
                    r && ((r = !1), (e.nextCallback = null), t(n));
                  }),
                  (this.nextCallback.cancel = function () {
                    r = !1;
                  }),
                  this.nextCallback
                );
              }),
              (r.onTransitionEnd = function (t, e) {
                this.setNextCallback(e);
                var r = this.props.nodeRef
                    ? this.props.nodeRef.current
                    : co().findDOMNode(this),
                  n = null == t && !this.props.addEndListener;
                if (r && !n) {
                  if (this.props.addEndListener) {
                    var o = this.props.nodeRef
                        ? [this.nextCallback]
                        : [r, this.nextCallback],
                      i = o[0],
                      a = o[1];
                    this.props.addEndListener(i, a);
                  }
                  null != t && setTimeout(this.nextCallback, t);
                } else setTimeout(this.nextCallback, 0);
              }),
              (r.render = function () {
                var t = this.state.status;
                if (t === uo) return null;
                var e = this.props,
                  r = e.children,
                  n =
                    (e.in,
                    e.mountOnEnter,
                    e.unmountOnExit,
                    e.appear,
                    e.enter,
                    e.exit,
                    e.timeout,
                    e.addEndListener,
                    e.onEnter,
                    e.onEntering,
                    e.onEntered,
                    e.onExit,
                    e.onExiting,
                    e.onExited,
                    e.nodeRef,
                    Yn(e, [
                      "children",
                      "in",
                      "mountOnEnter",
                      "unmountOnExit",
                      "appear",
                      "enter",
                      "exit",
                      "timeout",
                      "addEndListener",
                      "onEnter",
                      "onEntering",
                      "onEntered",
                      "onExit",
                      "onExiting",
                      "onExited",
                      "nodeRef",
                    ]));
                return i().createElement(
                  Qn.Provider,
                  { value: null },
                  "function" == typeof r
                    ? r(t, n)
                    : i().cloneElement(i().Children.only(r), n)
                );
              }),
              e
            );
          })(i().Component);
        function yo() {}
        (ho.contextType = Qn),
          (ho.propTypes = {}),
          (ho.defaultProps = {
            in: !1,
            mountOnEnter: !1,
            unmountOnExit: !1,
            appear: !1,
            enter: !0,
            exit: !0,
            onEnter: yo,
            onEntering: yo,
            onEntered: yo,
            onExit: yo,
            onExiting: yo,
            onExited: yo,
          }),
          (ho.UNMOUNTED = uo),
          (ho.EXITED = lo),
          (ho.ENTERING = so),
          (ho.ENTERED = fo),
          (ho.EXITING = po);
        const vo = ho;
        var mo = ["children", "appearOptions", "enterOptions", "leaveOptions"];
        function bo(t) {
          return (
            (bo =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            bo(t)
          );
        }
        function go() {
          return (
            (go = Object.assign
              ? Object.assign.bind()
              : function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var n in r)
                      Object.prototype.hasOwnProperty.call(r, n) &&
                        (t[n] = r[n]);
                  }
                  return t;
                }),
            go.apply(this, arguments)
          );
        }
        function xo(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function wo(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? xo(Object(r), !0).forEach(function (e) {
                  Po(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : xo(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e)
                  );
                });
          }
          return t;
        }
        function Oo(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, Ao(n.key), n);
          }
        }
        function jo(t, e) {
          return (
            (jo = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            jo(t, e)
          );
        }
        function So(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function Eo(t) {
          return (
            (Eo = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            Eo(t)
          );
        }
        function Po(t, e, r) {
          return (
            (e = Ao(e)) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        function Ao(t) {
          var e = (function (t, e) {
            if ("object" !== bo(t) || null === t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, "string");
              if ("object" !== bo(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(t);
          })(t);
          return "symbol" === bo(e) ? e : String(e);
        }
        var ko = function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              e = t.steps,
              r = t.duration;
            return e && e.length
              ? e.reduce(function (t, e) {
                  return (
                    t +
                    (Number.isFinite(e.duration) && e.duration > 0
                      ? e.duration
                      : 0)
                  );
                }, 0)
              : Number.isFinite(r)
              ? r
              : 0;
          },
          Mo = (function (t) {
            !(function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && jo(t, e);
            })(u, t);
            var e,
              r,
              n,
              a,
              c =
                ((n = u),
                (a = (function () {
                  if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                  if (Reflect.construct.sham) return !1;
                  if ("function" == typeof Proxy) return !0;
                  try {
                    return (
                      Boolean.prototype.valueOf.call(
                        Reflect.construct(Boolean, [], function () {})
                      ),
                      !0
                    );
                  } catch (t) {
                    return !1;
                  }
                })()),
                function () {
                  var t,
                    e = Eo(n);
                  if (a) {
                    var r = Eo(this).constructor;
                    t = Reflect.construct(e, arguments, r);
                  } else t = e.apply(this, arguments);
                  return (function (t, e) {
                    if (e && ("object" === bo(e) || "function" == typeof e))
                      return e;
                    if (void 0 !== e)
                      throw new TypeError(
                        "Derived constructors may only return object or undefined"
                      );
                    return So(t);
                  })(this, t);
                });
            function u() {
              var t;
              return (
                (function (t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, u),
                Po(So((t = c.call(this))), "handleEnter", function (e, r) {
                  var n = t.props,
                    o = n.appearOptions,
                    i = n.enterOptions;
                  t.handleStyleActive(r ? o : i);
                }),
                Po(So(t), "handleExit", function () {
                  var e = t.props.leaveOptions;
                  t.handleStyleActive(e);
                }),
                (t.state = { isActive: !1 }),
                t
              );
            }
            return (
              (e = u),
              (r = [
                {
                  key: "handleStyleActive",
                  value: function (t) {
                    if (t) {
                      var e = t.onAnimationEnd
                        ? function () {
                            t.onAnimationEnd();
                          }
                        : null;
                      this.setState(
                        wo(wo({}, t), {}, { onAnimationEnd: e, isActive: !0 })
                      );
                    }
                  },
                },
                {
                  key: "parseTimeout",
                  value: function () {
                    var t = this.props,
                      e = t.appearOptions,
                      r = t.enterOptions,
                      n = t.leaveOptions;
                    return ko(e) + ko(r) + ko(n);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var t = this,
                      e = this.props,
                      r = e.children,
                      n =
                        (e.appearOptions,
                        e.enterOptions,
                        e.leaveOptions,
                        (function (t, e) {
                          if (null == t) return {};
                          var r,
                            n,
                            o = (function (t, e) {
                              if (null == t) return {};
                              var r,
                                n,
                                o = {},
                                i = Object.keys(t);
                              for (n = 0; n < i.length; n++)
                                (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
                              return o;
                            })(t, e);
                          if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(t);
                            for (n = 0; n < i.length; n++)
                              (r = i[n]),
                                e.indexOf(r) >= 0 ||
                                  (Object.prototype.propertyIsEnumerable.call(
                                    t,
                                    r
                                  ) &&
                                    (o[r] = t[r]));
                          }
                          return o;
                        })(e, mo));
                    return i().createElement(
                      vo,
                      go({}, n, {
                        onEnter: this.handleEnter,
                        onExit: this.handleExit,
                        timeout: this.parseTimeout(),
                      }),
                      function () {
                        return i().createElement(
                          Gn,
                          t.state,
                          o.Children.only(r)
                        );
                      }
                    );
                  },
                },
              ]) && Oo(e.prototype, r),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              u
            );
          })(o.Component);
        Mo.propTypes = {
          appearOptions: _r().object,
          enterOptions: _r().object,
          leaveOptions: _r().object,
          children: _r().element,
        };
        const To = Mo;
        function _o(t) {
          var e = t.component,
            r = t.children,
            n = t.appear,
            a = t.enter,
            c = t.leave;
          return i().createElement(
            io,
            { component: e },
            o.Children.map(r, function (t, e) {
              return i().createElement(
                To,
                {
                  appearOptions: n,
                  enterOptions: a,
                  leaveOptions: c,
                  key: "child-".concat(e),
                },
                t
              );
            })
          );
        }
        (_o.propTypes = {
          appear: _r().object,
          enter: _r().object,
          leave: _r().object,
          children: _r().oneOfType([_r().array, _r().element]),
          component: _r().any,
        }),
          (_o.defaultProps = { component: "span" });
        const Co = Gn;
        function Do(t) {
          return (
            (Do =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            Do(t)
          );
        }
        function Io() {
          return (
            (Io = Object.assign
              ? Object.assign.bind()
              : function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var n in r)
                      Object.prototype.hasOwnProperty.call(r, n) &&
                        (t[n] = r[n]);
                  }
                  return t;
                }),
            Io.apply(this, arguments)
          );
        }
        function No(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
          return n;
        }
        function Bo(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function Lo(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? Bo(Object(r), !0).forEach(function (e) {
                  Ro(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : Bo(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e)
                  );
                });
          }
          return t;
        }
        function Ro(t, e, r) {
          var n;
          return (
            (n = (function (t, e) {
              if ("object" != Do(t) || !t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, "string");
                if ("object" != Do(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(e)),
            (e = "symbol" == Do(n) ? n : String(n)) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        var zo = function (t, e, r, n, o) {
            var i,
              a = Math.min(Math.abs(r) / 2, Math.abs(n) / 2),
              c = n >= 0 ? 1 : -1,
              u = r >= 0 ? 1 : -1,
              l = (n >= 0 && r >= 0) || (n < 0 && r < 0) ? 1 : 0;
            if (a > 0 && o instanceof Array) {
              for (var s = [0, 0, 0, 0], f = 0; f < 4; f++)
                s[f] = o[f] > a ? a : o[f];
              (i = "M".concat(t, ",").concat(e + c * s[0])),
                s[0] > 0 &&
                  (i += "A "
                    .concat(s[0], ",")
                    .concat(s[0], ",0,0,")
                    .concat(l, ",")
                    .concat(t + u * s[0], ",")
                    .concat(e)),
                (i += "L ".concat(t + r - u * s[1], ",").concat(e)),
                s[1] > 0 &&
                  (i += "A "
                    .concat(s[1], ",")
                    .concat(s[1], ",0,0,")
                    .concat(l, ",\n        ")
                    .concat(t + r, ",")
                    .concat(e + c * s[1])),
                (i += "L ".concat(t + r, ",").concat(e + n - c * s[2])),
                s[2] > 0 &&
                  (i += "A "
                    .concat(s[2], ",")
                    .concat(s[2], ",0,0,")
                    .concat(l, ",\n        ")
                    .concat(t + r - u * s[2], ",")
                    .concat(e + n)),
                (i += "L ".concat(t + u * s[3], ",").concat(e + n)),
                s[3] > 0 &&
                  (i += "A "
                    .concat(s[3], ",")
                    .concat(s[3], ",0,0,")
                    .concat(l, ",\n        ")
                    .concat(t, ",")
                    .concat(e + n - c * s[3])),
                (i += "Z");
            } else if (a > 0 && o === +o && o > 0) {
              var p = Math.min(a, o);
              i = "M "
                .concat(t, ",")
                .concat(e + c * p, "\n            A ")
                .concat(p, ",")
                .concat(p, ",0,0,")
                .concat(l, ",")
                .concat(t + u * p, ",")
                .concat(e, "\n            L ")
                .concat(t + r - u * p, ",")
                .concat(e, "\n            A ")
                .concat(p, ",")
                .concat(p, ",0,0,")
                .concat(l, ",")
                .concat(t + r, ",")
                .concat(e + c * p, "\n            L ")
                .concat(t + r, ",")
                .concat(e + n - c * p, "\n            A ")
                .concat(p, ",")
                .concat(p, ",0,0,")
                .concat(l, ",")
                .concat(t + r - u * p, ",")
                .concat(e + n, "\n            L ")
                .concat(t + u * p, ",")
                .concat(e + n, "\n            A ")
                .concat(p, ",")
                .concat(p, ",0,0,")
                .concat(l, ",")
                .concat(t, ",")
                .concat(e + n - c * p, " Z");
            } else
              i = "M "
                .concat(t, ",")
                .concat(e, " h ")
                .concat(r, " v ")
                .concat(n, " h ")
                .concat(-r, " Z");
            return i;
          },
          Uo = function (t, e) {
            if (!t || !e) return !1;
            var r = t.x,
              n = t.y,
              o = e.x,
              i = e.y,
              a = e.width,
              c = e.height;
            if (Math.abs(a) > 0 && Math.abs(c) > 0) {
              var u = Math.min(o, o + a),
                l = Math.max(o, o + a),
                s = Math.min(i, i + c),
                f = Math.max(i, i + c);
              return r >= u && r <= l && n >= s && n <= f;
            }
            return !1;
          },
          $o = {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            radius: 0,
            isAnimationActive: !1,
            isUpdateAnimationActive: !1,
            animationBegin: 0,
            animationDuration: 1500,
            animationEasing: "ease",
          },
          Fo = function (t) {
            var e,
              r,
              n = Lo(Lo({}, $o), t),
              a = (0, o.useRef)(),
              c =
                ((e = (0, o.useState)(-1)),
                (r = 2),
                (function (t) {
                  if (Array.isArray(t)) return t;
                })(e) ||
                  (function (t, e) {
                    var r =
                      null == t
                        ? null
                        : ("undefined" != typeof Symbol &&
                            t[Symbol.iterator]) ||
                          t["@@iterator"];
                    if (null != r) {
                      var n,
                        o,
                        i,
                        a,
                        c = [],
                        u = !0,
                        l = !1;
                      try {
                        if (((i = (r = r.call(t)).next), 0 === e)) {
                          if (Object(r) !== r) return;
                          u = !1;
                        } else
                          for (
                            ;
                            !(u = (n = i.call(r)).done) &&
                            (c.push(n.value), c.length !== e);
                            u = !0
                          );
                      } catch (t) {
                        (l = !0), (o = t);
                      } finally {
                        try {
                          if (
                            !u &&
                            null != r.return &&
                            ((a = r.return()), Object(a) !== a)
                          )
                            return;
                        } finally {
                          if (l) throw o;
                        }
                      }
                      return c;
                    }
                  })(e, r) ||
                  (function (t, e) {
                    if (t) {
                      if ("string" == typeof t) return No(t, e);
                      var r = Object.prototype.toString.call(t).slice(8, -1);
                      return (
                        "Object" === r &&
                          t.constructor &&
                          (r = t.constructor.name),
                        "Map" === r || "Set" === r
                          ? Array.from(t)
                          : "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          ? No(t, e)
                          : void 0
                      );
                    }
                  })(e, r) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()),
              l = c[0],
              s = c[1];
            (0, o.useEffect)(function () {
              if (a.current && a.current.getTotalLength)
                try {
                  var t = a.current.getTotalLength();
                  t && s(t);
                } catch (t) {}
            }, []);
            var f = n.x,
              p = n.y,
              h = n.width,
              d = n.height,
              y = n.radius,
              v = n.className,
              m = n.animationEasing,
              b = n.animationDuration,
              g = n.animationBegin,
              x = n.isAnimationActive,
              w = n.isUpdateAnimationActive;
            if (
              f !== +f ||
              p !== +p ||
              h !== +h ||
              d !== +d ||
              0 === h ||
              0 === d
            )
              return null;
            var O = u("recharts-rectangle", v);
            return w
              ? i().createElement(
                  Co,
                  {
                    canBegin: l > 0,
                    from: { width: h, height: d, x: f, y: p },
                    to: { width: h, height: d, x: f, y: p },
                    duration: b,
                    animationEasing: m,
                    isActive: w,
                  },
                  function (t) {
                    var e = t.width,
                      r = t.height,
                      o = t.x,
                      c = t.y;
                    return i().createElement(
                      Co,
                      {
                        canBegin: l > 0,
                        from: "0px ".concat(-1 === l ? 1 : l, "px"),
                        to: "".concat(l, "px 0px"),
                        attributeName: "strokeDasharray",
                        begin: g,
                        duration: b,
                        isActive: x,
                        easing: m,
                      },
                      i().createElement(
                        "path",
                        Io({}, ot(n, !0), {
                          className: O,
                          d: zo(o, c, e, r, y),
                          ref: a,
                        })
                      )
                    );
                  }
                )
              : i().createElement(
                  "path",
                  Io({}, ot(n, !0), { className: O, d: zo(f, p, h, d, y) })
                );
          };
        function Wo(t, e) {
          switch (arguments.length) {
            case 0:
              break;
            case 1:
              this.range(t);
              break;
            default:
              this.range(e).domain(t);
          }
          return this;
        }
        function qo(t, e) {
          switch (arguments.length) {
            case 0:
              break;
            case 1:
              "function" == typeof t ? this.interpolator(t) : this.range(t);
              break;
            default:
              this.domain(t),
                "function" == typeof e ? this.interpolator(e) : this.range(e);
          }
          return this;
        }
        class Xo extends Map {
          constructor(t, e = Vo) {
            if (
              (super(),
              Object.defineProperties(this, {
                _intern: { value: new Map() },
                _key: { value: e },
              }),
              null != t)
            )
              for (const [e, r] of t) this.set(e, r);
          }
          get(t) {
            return super.get(Ho(this, t));
          }
          has(t) {
            return super.has(Ho(this, t));
          }
          set(t, e) {
            return super.set(
              (function ({ _intern: t, _key: e }, r) {
                const n = e(r);
                return t.has(n) ? t.get(n) : (t.set(n, r), r);
              })(this, t),
              e
            );
          }
          delete(t) {
            return super.delete(
              (function ({ _intern: t, _key: e }, r) {
                const n = e(r);
                return t.has(n) && ((r = t.get(n)), t.delete(n)), r;
              })(this, t)
            );
          }
        }
        function Ho({ _intern: t, _key: e }, r) {
          const n = e(r);
          return t.has(n) ? t.get(n) : r;
        }
        function Vo(t) {
          return null !== t && "object" == typeof t ? t.valueOf() : t;
        }
        Set;
        const Go = Symbol("implicit");
        function Yo() {
          var t = new Xo(),
            e = [],
            r = [],
            n = Go;
          function o(o) {
            let i = t.get(o);
            if (void 0 === i) {
              if (n !== Go) return n;
              t.set(o, (i = e.push(o) - 1));
            }
            return r[i % r.length];
          }
          return (
            (o.domain = function (r) {
              if (!arguments.length) return e.slice();
              (e = []), (t = new Xo());
              for (const n of r) t.has(n) || t.set(n, e.push(n) - 1);
              return o;
            }),
            (o.range = function (t) {
              return arguments.length ? ((r = Array.from(t)), o) : r.slice();
            }),
            (o.unknown = function (t) {
              return arguments.length ? ((n = t), o) : n;
            }),
            (o.copy = function () {
              return Yo(e, r).unknown(n);
            }),
            Wo.apply(o, arguments),
            o
          );
        }
        function Ko() {
          var t,
            e,
            r = Yo().unknown(void 0),
            n = r.domain,
            o = r.range,
            i = 0,
            a = 1,
            c = !1,
            u = 0,
            l = 0,
            s = 0.5;
          function f() {
            var r = n().length,
              f = a < i,
              p = f ? a : i,
              h = f ? i : a;
            (t = (h - p) / Math.max(1, r - u + 2 * l)),
              c && (t = Math.floor(t)),
              (p += (h - p - t * (r - u)) * s),
              (e = t * (1 - u)),
              c && ((p = Math.round(p)), (e = Math.round(e)));
            var d = (function (t, e, r) {
              (t = +t),
                (e = +e),
                (r =
                  (o = arguments.length) < 2
                    ? ((e = t), (t = 0), 1)
                    : o < 3
                    ? 1
                    : +r);
              for (
                var n = -1,
                  o = 0 | Math.max(0, Math.ceil((e - t) / r)),
                  i = new Array(o);
                ++n < o;

              )
                i[n] = t + n * r;
              return i;
            })(r).map(function (e) {
              return p + t * e;
            });
            return o(f ? d.reverse() : d);
          }
          return (
            delete r.unknown,
            (r.domain = function (t) {
              return arguments.length ? (n(t), f()) : n();
            }),
            (r.range = function (t) {
              return arguments.length
                ? (([i, a] = t), (i = +i), (a = +a), f())
                : [i, a];
            }),
            (r.rangeRound = function (t) {
              return ([i, a] = t), (i = +i), (a = +a), (c = !0), f();
            }),
            (r.bandwidth = function () {
              return e;
            }),
            (r.step = function () {
              return t;
            }),
            (r.round = function (t) {
              return arguments.length ? ((c = !!t), f()) : c;
            }),
            (r.padding = function (t) {
              return arguments.length ? ((u = Math.min(1, (l = +t))), f()) : u;
            }),
            (r.paddingInner = function (t) {
              return arguments.length ? ((u = Math.min(1, t)), f()) : u;
            }),
            (r.paddingOuter = function (t) {
              return arguments.length ? ((l = +t), f()) : l;
            }),
            (r.align = function (t) {
              return arguments.length
                ? ((s = Math.max(0, Math.min(1, t))), f())
                : s;
            }),
            (r.copy = function () {
              return Ko(n(), [i, a])
                .round(c)
                .paddingInner(u)
                .paddingOuter(l)
                .align(s);
            }),
            Wo.apply(f(), arguments)
          );
        }
        function Zo(t) {
          var e = t.copy;
          return (
            (t.padding = t.paddingOuter),
            delete t.paddingInner,
            delete t.paddingOuter,
            (t.copy = function () {
              return Zo(e());
            }),
            t
          );
        }
        function Jo() {
          return Zo(Ko.apply(null, arguments).paddingInner(1));
        }
        function Qo(t) {
          return (
            (Qo =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            Qo(t)
          );
        }
        function ti(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function ei(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? ti(Object(r), !0).forEach(function (e) {
                  ri(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : ti(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e)
                  );
                });
          }
          return t;
        }
        function ri(t, e, r) {
          var n;
          return (
            (n = (function (t, e) {
              if ("object" != Qo(t) || !t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, "string");
                if ("object" != Qo(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(e)),
            (e = "symbol" == Qo(n) ? n : String(n)) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        var ni = { widthCache: {}, cacheCount: 0 },
          oi = {
            position: "absolute",
            top: "-20000px",
            left: 0,
            padding: 0,
            margin: 0,
            border: "none",
            whiteSpace: "pre",
          },
          ii = "recharts_measurement_span",
          ai = function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            if (null == t || Qt.isSsr) return { width: 0, height: 0 };
            var r,
              n =
                ((r = ei({}, e)),
                Object.keys(r).forEach(function (t) {
                  r[t] || delete r[t];
                }),
                r),
              o = JSON.stringify({ text: t, copyStyle: n });
            if (ni.widthCache[o]) return ni.widthCache[o];
            try {
              var i = document.getElementById(ii);
              i ||
                ((i = document.createElement("span")).setAttribute("id", ii),
                i.setAttribute("aria-hidden", "true"),
                document.body.appendChild(i));
              var a = ei(ei({}, oi), n);
              Object.assign(i.style, a), (i.textContent = "".concat(t));
              var c = i.getBoundingClientRect(),
                u = { width: c.width, height: c.height };
              return (
                (ni.widthCache[o] = u),
                ++ni.cacheCount > 2e3 &&
                  ((ni.cacheCount = 0), (ni.widthCache = {})),
                u
              );
            } catch (t) {
              return { width: 0, height: 0 };
            }
          };
        function ci(t) {
          return (
            (ci =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            ci(t)
          );
        }
        function ui(t, e) {
          return (
            (function (t) {
              if (Array.isArray(t)) return t;
            })(t) ||
            (function (t, e) {
              var r =
                null == t
                  ? null
                  : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                    t["@@iterator"];
              if (null != r) {
                var n,
                  o,
                  i,
                  a,
                  c = [],
                  u = !0,
                  l = !1;
                try {
                  if (((i = (r = r.call(t)).next), 0 === e)) {
                    if (Object(r) !== r) return;
                    u = !1;
                  } else
                    for (
                      ;
                      !(u = (n = i.call(r)).done) &&
                      (c.push(n.value), c.length !== e);
                      u = !0
                    );
                } catch (t) {
                  (l = !0), (o = t);
                } finally {
                  try {
                    if (
                      !u &&
                      null != r.return &&
                      ((a = r.return()), Object(a) !== a)
                    )
                      return;
                  } finally {
                    if (l) throw o;
                  }
                }
                return c;
              }
            })(t, e) ||
            (function (t, e) {
              if (t) {
                if ("string" == typeof t) return li(t, e);
                var r = Object.prototype.toString.call(t).slice(8, -1);
                return (
                  "Object" === r && t.constructor && (r = t.constructor.name),
                  "Map" === r || "Set" === r
                    ? Array.from(t)
                    : "Arguments" === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? li(t, e)
                    : void 0
                );
              }
            })(t, e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function li(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
          return n;
        }
        function si(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, fi(n.key), n);
          }
        }
        function fi(t) {
          var e = (function (t, e) {
            if ("object" != ci(t) || !t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, "string");
              if ("object" != ci(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(t);
          })(t);
          return "symbol" == ci(e) ? e : String(e);
        }
        var pi = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
          hi = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
          di = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
          yi = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
          vi = {
            cm: 96 / 2.54,
            mm: 96 / 25.4,
            pt: 96 / 72,
            pc: 16,
            in: 96,
            Q: 96 / 101.6,
            px: 1,
          },
          mi = Object.keys(vi),
          bi = "NaN",
          gi = (function () {
            function t(e, r) {
              !(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                (this.num = e),
                (this.unit = r),
                (this.num = e),
                (this.unit = r),
                Number.isNaN(e) && (this.unit = ""),
                "" === r || di.test(r) || ((this.num = NaN), (this.unit = "")),
                mi.includes(r) &&
                  ((this.num = (function (t, e) {
                    return t * vi[e];
                  })(e, r)),
                  (this.unit = "px"));
            }
            var e, r, n;
            return (
              (e = t),
              (n = [
                {
                  key: "parse",
                  value: function (e) {
                    var r,
                      n = ui(
                        null !== (r = yi.exec(e)) && void 0 !== r ? r : [],
                        3
                      ),
                      o = n[1],
                      i = n[2];
                    return new t(parseFloat(o), null != i ? i : "");
                  },
                },
              ]),
              (r = [
                {
                  key: "add",
                  value: function (e) {
                    return this.unit !== e.unit
                      ? new t(NaN, "")
                      : new t(this.num + e.num, this.unit);
                  },
                },
                {
                  key: "subtract",
                  value: function (e) {
                    return this.unit !== e.unit
                      ? new t(NaN, "")
                      : new t(this.num - e.num, this.unit);
                  },
                },
                {
                  key: "multiply",
                  value: function (e) {
                    return "" !== this.unit &&
                      "" !== e.unit &&
                      this.unit !== e.unit
                      ? new t(NaN, "")
                      : new t(this.num * e.num, this.unit || e.unit);
                  },
                },
                {
                  key: "divide",
                  value: function (e) {
                    return "" !== this.unit &&
                      "" !== e.unit &&
                      this.unit !== e.unit
                      ? new t(NaN, "")
                      : new t(this.num / e.num, this.unit || e.unit);
                  },
                },
                {
                  key: "toString",
                  value: function () {
                    return "".concat(this.num).concat(this.unit);
                  },
                },
                {
                  key: "isNaN",
                  value: function () {
                    return Number.isNaN(this.num);
                  },
                },
              ]) && si(e.prototype, r),
              n && si(e, n),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t
            );
          })();
        function xi(t) {
          if (t.includes(bi)) return bi;
          for (var e = t; e.includes("*") || e.includes("/"); ) {
            var r,
              n = ui(null !== (r = pi.exec(e)) && void 0 !== r ? r : [], 4),
              o = n[1],
              i = n[2],
              a = n[3],
              c = gi.parse(null != o ? o : ""),
              u = gi.parse(null != a ? a : ""),
              l = "*" === i ? c.multiply(u) : c.divide(u);
            if (l.isNaN()) return bi;
            e = e.replace(pi, l.toString());
          }
          for (; e.includes("+") || /.-\d+(?:\.\d+)?/.test(e); ) {
            var s,
              f = ui(null !== (s = hi.exec(e)) && void 0 !== s ? s : [], 4),
              p = f[1],
              h = f[2],
              d = f[3],
              y = gi.parse(null != p ? p : ""),
              v = gi.parse(null != d ? d : ""),
              m = "+" === h ? y.add(v) : y.subtract(v);
            if (m.isNaN()) return bi;
            e = e.replace(hi, m.toString());
          }
          return e;
        }
        var wi = /\(([^()]*)\)/;
        function Oi(t) {
          var e = (function (t) {
            try {
              return (function (t) {
                var e = t.replace(/\s+/g, "");
                return (
                  (e = (function (t) {
                    for (var e = t; e.includes("("); ) {
                      var r = ui(wi.exec(e), 2)[1];
                      e = e.replace(wi, xi(r));
                    }
                    return e;
                  })(e)),
                  xi(e)
                );
              })(t);
            } catch (t) {
              return bi;
            }
          })(t.slice(5, -1));
          return e === bi ? "" : e;
        }
        var ji = [
            "x",
            "y",
            "lineHeight",
            "capHeight",
            "scaleToFit",
            "textAnchor",
            "verticalAnchor",
            "fill",
          ],
          Si = ["dx", "dy", "angle", "className", "breakAll"];
        function Ei() {
          return (
            (Ei = Object.assign
              ? Object.assign.bind()
              : function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var n in r)
                      Object.prototype.hasOwnProperty.call(r, n) &&
                        (t[n] = r[n]);
                  }
                  return t;
                }),
            Ei.apply(this, arguments)
          );
        }
        function Pi(t, e) {
          if (null == t) return {};
          var r,
            n,
            o = (function (t, e) {
              if (null == t) return {};
              var r,
                n,
                o = {},
                i = Object.keys(t);
              for (n = 0; n < i.length; n++)
                (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
              return o;
            })(t, e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            for (n = 0; n < i.length; n++)
              (r = i[n]),
                e.indexOf(r) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(t, r) &&
                    (o[r] = t[r]));
          }
          return o;
        }
        function Ai(t, e) {
          return (
            (function (t) {
              if (Array.isArray(t)) return t;
            })(t) ||
            (function (t, e) {
              var r =
                null == t
                  ? null
                  : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                    t["@@iterator"];
              if (null != r) {
                var n,
                  o,
                  i,
                  a,
                  c = [],
                  u = !0,
                  l = !1;
                try {
                  if (((i = (r = r.call(t)).next), 0 === e)) {
                    if (Object(r) !== r) return;
                    u = !1;
                  } else
                    for (
                      ;
                      !(u = (n = i.call(r)).done) &&
                      (c.push(n.value), c.length !== e);
                      u = !0
                    );
                } catch (t) {
                  (l = !0), (o = t);
                } finally {
                  try {
                    if (
                      !u &&
                      null != r.return &&
                      ((a = r.return()), Object(a) !== a)
                    )
                      return;
                  } finally {
                    if (l) throw o;
                  }
                }
                return c;
              }
            })(t, e) ||
            (function (t, e) {
              if (t) {
                if ("string" == typeof t) return ki(t, e);
                var r = Object.prototype.toString.call(t).slice(8, -1);
                return (
                  "Object" === r && t.constructor && (r = t.constructor.name),
                  "Map" === r || "Set" === r
                    ? Array.from(t)
                    : "Arguments" === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? ki(t, e)
                    : void 0
                );
              }
            })(t, e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function ki(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
          return n;
        }
        var Mi = /[ \f\n\r\t\v\u2028\u2029]+/,
          Ti = function (t) {
            var e = t.children,
              r = t.breakAll,
              n = t.style;
            try {
              var o = [];
              return (
                C()(e) ||
                  (o = r ? e.toString().split("") : e.toString().split(Mi)),
                {
                  wordsWithComputedWidth: o.map(function (t) {
                    return { word: t, width: ai(t, n).width };
                  }),
                  spaceWidth: r ? 0 : ai(" ", n).width,
                }
              );
            } catch (t) {
              return null;
            }
          },
          _i = function (t) {
            return [{ words: C()(t) ? [] : t.toString().split(Mi) }];
          },
          Ci = "#808080",
          Di = function (t) {
            var e = t.x,
              r = void 0 === e ? 0 : e,
              n = t.y,
              a = void 0 === n ? 0 : n,
              c = t.lineHeight,
              l = void 0 === c ? "1em" : c,
              s = t.capHeight,
              f = void 0 === s ? "0.71em" : s,
              p = t.scaleToFit,
              h = void 0 !== p && p,
              d = t.textAnchor,
              y = void 0 === d ? "start" : d,
              v = t.verticalAnchor,
              m = void 0 === v ? "end" : v,
              b = t.fill,
              g = void 0 === b ? Ci : b,
              x = Pi(t, ji),
              w = (0, o.useMemo)(
                function () {
                  return (function (t) {
                    var e = t.width,
                      r = t.scaleToFit,
                      n = t.children,
                      o = t.style,
                      i = t.breakAll,
                      a = t.maxLines;
                    if ((e || r) && !Qt.isSsr) {
                      var c = Ti({ breakAll: i, children: n, style: o });
                      return c
                        ? (function (t, e, r, n, o) {
                            var i = t.maxLines,
                              a = t.children,
                              c = t.style,
                              u = t.breakAll,
                              l = O(i),
                              s = a,
                              f = function () {
                                return (
                                  arguments.length > 0 &&
                                  void 0 !== arguments[0]
                                    ? arguments[0]
                                    : []
                                ).reduce(function (t, e) {
                                  var i = e.word,
                                    a = e.width,
                                    c = t[t.length - 1];
                                  if (
                                    c &&
                                    (null == n ||
                                      o ||
                                      c.width + a + r < Number(n))
                                  )
                                    c.words.push(i), (c.width += a + r);
                                  else {
                                    var u = { words: [i], width: a };
                                    t.push(u);
                                  }
                                  return t;
                                }, []);
                              },
                              p = f(e);
                            if (!l) return p;
                            for (
                              var h,
                                d = function (t) {
                                  var e = s.slice(0, t),
                                    r = Ti({
                                      breakAll: u,
                                      style: c,
                                      children: e + "…",
                                    }).wordsWithComputedWidth,
                                    o = f(r),
                                    a =
                                      o.length > i ||
                                      (function (t) {
                                        return t.reduce(function (t, e) {
                                          return t.width > e.width ? t : e;
                                        });
                                      })(o).width > Number(n);
                                  return [a, o];
                                },
                                y = 0,
                                v = s.length - 1,
                                m = 0;
                              y <= v && m <= s.length - 1;

                            ) {
                              var b = Math.floor((y + v) / 2),
                                g = Ai(d(b - 1), 2),
                                x = g[0],
                                w = g[1],
                                j = Ai(d(b), 1)[0];
                              if (
                                (x || j || (y = b + 1),
                                x && j && (v = b - 1),
                                !x && j)
                              ) {
                                h = w;
                                break;
                              }
                              m++;
                            }
                            return h || p;
                          })(
                            { breakAll: i, children: n, maxLines: a, style: o },
                            c.wordsWithComputedWidth,
                            c.spaceWidth,
                            e,
                            r
                          )
                        : _i(n);
                    }
                    return _i(n);
                  })({
                    breakAll: x.breakAll,
                    children: x.children,
                    maxLines: x.maxLines,
                    scaleToFit: h,
                    style: x.style,
                    width: x.width,
                  });
                },
                [x.breakAll, x.children, x.maxLines, h, x.style, x.width]
              ),
              S = x.dx,
              E = x.dy,
              P = x.angle,
              A = x.className,
              k = x.breakAll,
              M = Pi(x, Si);
            if (!j(r) || !j(a)) return null;
            var T,
              _ = r + (O(S) ? S : 0),
              C = a + (O(E) ? E : 0);
            switch (m) {
              case "start":
                T = Oi("calc(".concat(f, ")"));
                break;
              case "middle":
                T = Oi(
                  "calc("
                    .concat((w.length - 1) / 2, " * -")
                    .concat(l, " + (")
                    .concat(f, " / 2))")
                );
                break;
              default:
                T = Oi("calc(".concat(w.length - 1, " * -").concat(l, ")"));
            }
            var D = [];
            if (h) {
              var I = w[0].width,
                N = x.width;
              D.push("scale(".concat((O(N) ? N / I : 1) / I, ")"));
            }
            return (
              P &&
                D.push(
                  "rotate(".concat(P, ", ").concat(_, ", ").concat(C, ")")
                ),
              D.length && (M.transform = D.join(" ")),
              i().createElement(
                "text",
                Ei({}, ot(M, !0), {
                  x: _,
                  y: C,
                  className: u("recharts-text", A),
                  textAnchor: y,
                  fill: g.includes("url") ? Ci : g,
                }),
                w.map(function (t, e) {
                  var r = t.words.join(k ? "" : " ");
                  return i().createElement(
                    "tspan",
                    { x: _, dy: 0 === e ? T : l, key: r },
                    r
                  );
                })
              )
            );
          };
        const Ii = Math.sqrt(50),
          Ni = Math.sqrt(10),
          Bi = Math.sqrt(2);
        function Li(t, e, r) {
          const n = (e - t) / Math.max(0, r),
            o = Math.floor(Math.log10(n)),
            i = n / Math.pow(10, o),
            a = i >= Ii ? 10 : i >= Ni ? 5 : i >= Bi ? 2 : 1;
          let c, u, l;
          return (
            o < 0
              ? ((l = Math.pow(10, -o) / a),
                (c = Math.round(t * l)),
                (u = Math.round(e * l)),
                c / l < t && ++c,
                u / l > e && --u,
                (l = -l))
              : ((l = Math.pow(10, o) * a),
                (c = Math.round(t / l)),
                (u = Math.round(e / l)),
                c * l < t && ++c,
                u * l > e && --u),
            u < c && 0.5 <= r && r < 2 ? Li(t, e, 2 * r) : [c, u, l]
          );
        }
        function Ri(t, e, r) {
          if (!((r = +r) > 0)) return [];
          if ((t = +t) == (e = +e)) return [t];
          const n = e < t,
            [o, i, a] = n ? Li(e, t, r) : Li(t, e, r);
          if (!(i >= o)) return [];
          const c = i - o + 1,
            u = new Array(c);
          if (n)
            if (a < 0) for (let t = 0; t < c; ++t) u[t] = (i - t) / -a;
            else for (let t = 0; t < c; ++t) u[t] = (i - t) * a;
          else if (a < 0) for (let t = 0; t < c; ++t) u[t] = (o + t) / -a;
          else for (let t = 0; t < c; ++t) u[t] = (o + t) * a;
          return u;
        }
        function zi(t, e, r) {
          return Li((t = +t), (e = +e), (r = +r))[2];
        }
        function Ui(t, e, r) {
          r = +r;
          const n = (e = +e) < (t = +t),
            o = n ? zi(e, t, r) : zi(t, e, r);
          return (n ? -1 : 1) * (o < 0 ? 1 / -o : o);
        }
        function $i(t, e) {
          return null == t || null == e
            ? NaN
            : t < e
            ? -1
            : t > e
            ? 1
            : t >= e
            ? 0
            : NaN;
        }
        function Fi(t, e) {
          return null == t || null == e
            ? NaN
            : e < t
            ? -1
            : e > t
            ? 1
            : e >= t
            ? 0
            : NaN;
        }
        function Wi(t) {
          let e, r, n;
          function o(t, n, o = 0, i = t.length) {
            if (o < i) {
              if (0 !== e(n, n)) return i;
              do {
                const e = (o + i) >>> 1;
                r(t[e], n) < 0 ? (o = e + 1) : (i = e);
              } while (o < i);
            }
            return o;
          }
          return (
            2 !== t.length
              ? ((e = $i),
                (r = (e, r) => $i(t(e), r)),
                (n = (e, r) => t(e) - r))
              : ((e = t === $i || t === Fi ? t : qi), (r = t), (n = t)),
            {
              left: o,
              center: function (t, e, r = 0, i = t.length) {
                const a = o(t, e, r, i - 1);
                return a > r && n(t[a - 1], e) > -n(t[a], e) ? a - 1 : a;
              },
              right: function (t, n, o = 0, i = t.length) {
                if (o < i) {
                  if (0 !== e(n, n)) return i;
                  do {
                    const e = (o + i) >>> 1;
                    r(t[e], n) <= 0 ? (o = e + 1) : (i = e);
                  } while (o < i);
                }
                return o;
              },
            }
          );
        }
        function qi() {
          return 0;
        }
        function Xi(t) {
          return null === t ? NaN : +t;
        }
        const Hi = Wi($i),
          Vi = Hi.right,
          Gi = (Hi.left, Wi(Xi).center, Vi);
        function Yi(t, e, r) {
          (t.prototype = e.prototype = r), (r.constructor = t);
        }
        function Ki(t, e) {
          var r = Object.create(t.prototype);
          for (var n in e) r[n] = e[n];
          return r;
        }
        function Zi() {}
        var Ji = 0.7,
          Qi = 1 / Ji,
          ta = "\\s*([+-]?\\d+)\\s*",
          ea = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
          ra = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
          na = /^#([0-9a-f]{3,8})$/,
          oa = new RegExp(`^rgb\\(${ta},${ta},${ta}\\)$`),
          ia = new RegExp(`^rgb\\(${ra},${ra},${ra}\\)$`),
          aa = new RegExp(`^rgba\\(${ta},${ta},${ta},${ea}\\)$`),
          ca = new RegExp(`^rgba\\(${ra},${ra},${ra},${ea}\\)$`),
          ua = new RegExp(`^hsl\\(${ea},${ra},${ra}\\)$`),
          la = new RegExp(`^hsla\\(${ea},${ra},${ra},${ea}\\)$`),
          sa = {
            aliceblue: 15792383,
            antiquewhite: 16444375,
            aqua: 65535,
            aquamarine: 8388564,
            azure: 15794175,
            beige: 16119260,
            bisque: 16770244,
            black: 0,
            blanchedalmond: 16772045,
            blue: 255,
            blueviolet: 9055202,
            brown: 10824234,
            burlywood: 14596231,
            cadetblue: 6266528,
            chartreuse: 8388352,
            chocolate: 13789470,
            coral: 16744272,
            cornflowerblue: 6591981,
            cornsilk: 16775388,
            crimson: 14423100,
            cyan: 65535,
            darkblue: 139,
            darkcyan: 35723,
            darkgoldenrod: 12092939,
            darkgray: 11119017,
            darkgreen: 25600,
            darkgrey: 11119017,
            darkkhaki: 12433259,
            darkmagenta: 9109643,
            darkolivegreen: 5597999,
            darkorange: 16747520,
            darkorchid: 10040012,
            darkred: 9109504,
            darksalmon: 15308410,
            darkseagreen: 9419919,
            darkslateblue: 4734347,
            darkslategray: 3100495,
            darkslategrey: 3100495,
            darkturquoise: 52945,
            darkviolet: 9699539,
            deeppink: 16716947,
            deepskyblue: 49151,
            dimgray: 6908265,
            dimgrey: 6908265,
            dodgerblue: 2003199,
            firebrick: 11674146,
            floralwhite: 16775920,
            forestgreen: 2263842,
            fuchsia: 16711935,
            gainsboro: 14474460,
            ghostwhite: 16316671,
            gold: 16766720,
            goldenrod: 14329120,
            gray: 8421504,
            green: 32768,
            greenyellow: 11403055,
            grey: 8421504,
            honeydew: 15794160,
            hotpink: 16738740,
            indianred: 13458524,
            indigo: 4915330,
            ivory: 16777200,
            khaki: 15787660,
            lavender: 15132410,
            lavenderblush: 16773365,
            lawngreen: 8190976,
            lemonchiffon: 16775885,
            lightblue: 11393254,
            lightcoral: 15761536,
            lightcyan: 14745599,
            lightgoldenrodyellow: 16448210,
            lightgray: 13882323,
            lightgreen: 9498256,
            lightgrey: 13882323,
            lightpink: 16758465,
            lightsalmon: 16752762,
            lightseagreen: 2142890,
            lightskyblue: 8900346,
            lightslategray: 7833753,
            lightslategrey: 7833753,
            lightsteelblue: 11584734,
            lightyellow: 16777184,
            lime: 65280,
            limegreen: 3329330,
            linen: 16445670,
            magenta: 16711935,
            maroon: 8388608,
            mediumaquamarine: 6737322,
            mediumblue: 205,
            mediumorchid: 12211667,
            mediumpurple: 9662683,
            mediumseagreen: 3978097,
            mediumslateblue: 8087790,
            mediumspringgreen: 64154,
            mediumturquoise: 4772300,
            mediumvioletred: 13047173,
            midnightblue: 1644912,
            mintcream: 16121850,
            mistyrose: 16770273,
            moccasin: 16770229,
            navajowhite: 16768685,
            navy: 128,
            oldlace: 16643558,
            olive: 8421376,
            olivedrab: 7048739,
            orange: 16753920,
            orangered: 16729344,
            orchid: 14315734,
            palegoldenrod: 15657130,
            palegreen: 10025880,
            paleturquoise: 11529966,
            palevioletred: 14381203,
            papayawhip: 16773077,
            peachpuff: 16767673,
            peru: 13468991,
            pink: 16761035,
            plum: 14524637,
            powderblue: 11591910,
            purple: 8388736,
            rebeccapurple: 6697881,
            red: 16711680,
            rosybrown: 12357519,
            royalblue: 4286945,
            saddlebrown: 9127187,
            salmon: 16416882,
            sandybrown: 16032864,
            seagreen: 3050327,
            seashell: 16774638,
            sienna: 10506797,
            silver: 12632256,
            skyblue: 8900331,
            slateblue: 6970061,
            slategray: 7372944,
            slategrey: 7372944,
            snow: 16775930,
            springgreen: 65407,
            steelblue: 4620980,
            tan: 13808780,
            teal: 32896,
            thistle: 14204888,
            tomato: 16737095,
            turquoise: 4251856,
            violet: 15631086,
            wheat: 16113331,
            white: 16777215,
            whitesmoke: 16119285,
            yellow: 16776960,
            yellowgreen: 10145074,
          };
        function fa() {
          return this.rgb().formatHex();
        }
        function pa() {
          return this.rgb().formatRgb();
        }
        function ha(t) {
          var e, r;
          return (
            (t = (t + "").trim().toLowerCase()),
            (e = na.exec(t))
              ? ((r = e[1].length),
                (e = parseInt(e[1], 16)),
                6 === r
                  ? da(e)
                  : 3 === r
                  ? new ma(
                      ((e >> 8) & 15) | ((e >> 4) & 240),
                      ((e >> 4) & 15) | (240 & e),
                      ((15 & e) << 4) | (15 & e),
                      1
                    )
                  : 8 === r
                  ? ya(
                      (e >> 24) & 255,
                      (e >> 16) & 255,
                      (e >> 8) & 255,
                      (255 & e) / 255
                    )
                  : 4 === r
                  ? ya(
                      ((e >> 12) & 15) | ((e >> 8) & 240),
                      ((e >> 8) & 15) | ((e >> 4) & 240),
                      ((e >> 4) & 15) | (240 & e),
                      (((15 & e) << 4) | (15 & e)) / 255
                    )
                  : null)
              : (e = oa.exec(t))
              ? new ma(e[1], e[2], e[3], 1)
              : (e = ia.exec(t))
              ? new ma(
                  (255 * e[1]) / 100,
                  (255 * e[2]) / 100,
                  (255 * e[3]) / 100,
                  1
                )
              : (e = aa.exec(t))
              ? ya(e[1], e[2], e[3], e[4])
              : (e = ca.exec(t))
              ? ya(
                  (255 * e[1]) / 100,
                  (255 * e[2]) / 100,
                  (255 * e[3]) / 100,
                  e[4]
                )
              : (e = ua.exec(t))
              ? ja(e[1], e[2] / 100, e[3] / 100, 1)
              : (e = la.exec(t))
              ? ja(e[1], e[2] / 100, e[3] / 100, e[4])
              : sa.hasOwnProperty(t)
              ? da(sa[t])
              : "transparent" === t
              ? new ma(NaN, NaN, NaN, 0)
              : null
          );
        }
        function da(t) {
          return new ma((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
        }
        function ya(t, e, r, n) {
          return n <= 0 && (t = e = r = NaN), new ma(t, e, r, n);
        }
        function va(t, e, r, n) {
          return 1 === arguments.length
            ? ((o = t) instanceof Zi || (o = ha(o)),
              o ? new ma((o = o.rgb()).r, o.g, o.b, o.opacity) : new ma())
            : new ma(t, e, r, null == n ? 1 : n);
          var o;
        }
        function ma(t, e, r, n) {
          (this.r = +t), (this.g = +e), (this.b = +r), (this.opacity = +n);
        }
        function ba() {
          return `#${Oa(this.r)}${Oa(this.g)}${Oa(this.b)}`;
        }
        function ga() {
          const t = xa(this.opacity);
          return `${1 === t ? "rgb(" : "rgba("}${wa(this.r)}, ${wa(
            this.g
          )}, ${wa(this.b)}${1 === t ? ")" : `, ${t})`}`;
        }
        function xa(t) {
          return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
        }
        function wa(t) {
          return Math.max(0, Math.min(255, Math.round(t) || 0));
        }
        function Oa(t) {
          return ((t = wa(t)) < 16 ? "0" : "") + t.toString(16);
        }
        function ja(t, e, r, n) {
          return (
            n <= 0
              ? (t = e = r = NaN)
              : r <= 0 || r >= 1
              ? (t = e = NaN)
              : e <= 0 && (t = NaN),
            new Ea(t, e, r, n)
          );
        }
        function Sa(t) {
          if (t instanceof Ea) return new Ea(t.h, t.s, t.l, t.opacity);
          if ((t instanceof Zi || (t = ha(t)), !t)) return new Ea();
          if (t instanceof Ea) return t;
          var e = (t = t.rgb()).r / 255,
            r = t.g / 255,
            n = t.b / 255,
            o = Math.min(e, r, n),
            i = Math.max(e, r, n),
            a = NaN,
            c = i - o,
            u = (i + o) / 2;
          return (
            c
              ? ((a =
                  e === i
                    ? (r - n) / c + 6 * (r < n)
                    : r === i
                    ? (n - e) / c + 2
                    : (e - r) / c + 4),
                (c /= u < 0.5 ? i + o : 2 - i - o),
                (a *= 60))
              : (c = u > 0 && u < 1 ? 0 : a),
            new Ea(a, c, u, t.opacity)
          );
        }
        function Ea(t, e, r, n) {
          (this.h = +t), (this.s = +e), (this.l = +r), (this.opacity = +n);
        }
        function Pa(t) {
          return (t = (t || 0) % 360) < 0 ? t + 360 : t;
        }
        function Aa(t) {
          return Math.max(0, Math.min(1, t || 0));
        }
        function ka(t, e, r) {
          return (
            255 *
            (t < 60
              ? e + ((r - e) * t) / 60
              : t < 180
              ? r
              : t < 240
              ? e + ((r - e) * (240 - t)) / 60
              : e)
          );
        }
        function Ma(t, e, r, n, o) {
          var i = t * t,
            a = i * t;
          return (
            ((1 - 3 * t + 3 * i - a) * e +
              (4 - 6 * i + 3 * a) * r +
              (1 + 3 * t + 3 * i - 3 * a) * n +
              a * o) /
            6
          );
        }
        Yi(Zi, ha, {
          copy(t) {
            return Object.assign(new this.constructor(), this, t);
          },
          displayable() {
            return this.rgb().displayable();
          },
          hex: fa,
          formatHex: fa,
          formatHex8: function () {
            return this.rgb().formatHex8();
          },
          formatHsl: function () {
            return Sa(this).formatHsl();
          },
          formatRgb: pa,
          toString: pa,
        }),
          Yi(
            ma,
            va,
            Ki(Zi, {
              brighter(t) {
                return (
                  (t = null == t ? Qi : Math.pow(Qi, t)),
                  new ma(this.r * t, this.g * t, this.b * t, this.opacity)
                );
              },
              darker(t) {
                return (
                  (t = null == t ? Ji : Math.pow(Ji, t)),
                  new ma(this.r * t, this.g * t, this.b * t, this.opacity)
                );
              },
              rgb() {
                return this;
              },
              clamp() {
                return new ma(
                  wa(this.r),
                  wa(this.g),
                  wa(this.b),
                  xa(this.opacity)
                );
              },
              displayable() {
                return (
                  -0.5 <= this.r &&
                  this.r < 255.5 &&
                  -0.5 <= this.g &&
                  this.g < 255.5 &&
                  -0.5 <= this.b &&
                  this.b < 255.5 &&
                  0 <= this.opacity &&
                  this.opacity <= 1
                );
              },
              hex: ba,
              formatHex: ba,
              formatHex8: function () {
                return `#${Oa(this.r)}${Oa(this.g)}${Oa(this.b)}${Oa(
                  255 * (isNaN(this.opacity) ? 1 : this.opacity)
                )}`;
              },
              formatRgb: ga,
              toString: ga,
            })
          ),
          Yi(
            Ea,
            function (t, e, r, n) {
              return 1 === arguments.length
                ? Sa(t)
                : new Ea(t, e, r, null == n ? 1 : n);
            },
            Ki(Zi, {
              brighter(t) {
                return (
                  (t = null == t ? Qi : Math.pow(Qi, t)),
                  new Ea(this.h, this.s, this.l * t, this.opacity)
                );
              },
              darker(t) {
                return (
                  (t = null == t ? Ji : Math.pow(Ji, t)),
                  new Ea(this.h, this.s, this.l * t, this.opacity)
                );
              },
              rgb() {
                var t = (this.h % 360) + 360 * (this.h < 0),
                  e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                  r = this.l,
                  n = r + (r < 0.5 ? r : 1 - r) * e,
                  o = 2 * r - n;
                return new ma(
                  ka(t >= 240 ? t - 240 : t + 120, o, n),
                  ka(t, o, n),
                  ka(t < 120 ? t + 240 : t - 120, o, n),
                  this.opacity
                );
              },
              clamp() {
                return new Ea(
                  Pa(this.h),
                  Aa(this.s),
                  Aa(this.l),
                  xa(this.opacity)
                );
              },
              displayable() {
                return (
                  ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
                  0 <= this.l &&
                  this.l <= 1 &&
                  0 <= this.opacity &&
                  this.opacity <= 1
                );
              },
              formatHsl() {
                const t = xa(this.opacity);
                return `${1 === t ? "hsl(" : "hsla("}${Pa(this.h)}, ${
                  100 * Aa(this.s)
                }%, ${100 * Aa(this.l)}%${1 === t ? ")" : `, ${t})`}`;
              },
            })
          );
        const Ta = (t) => () => t;
        function _a(t, e) {
          var r = e - t;
          return r
            ? (function (t, e) {
                return function (r) {
                  return t + r * e;
                };
              })(t, r)
            : Ta(isNaN(t) ? e : t);
        }
        const Ca = (function t(e) {
          var r = (function (t) {
            return 1 == (t = +t)
              ? _a
              : function (e, r) {
                  return r - e
                    ? (function (t, e, r) {
                        return (
                          (t = Math.pow(t, r)),
                          (e = Math.pow(e, r) - t),
                          (r = 1 / r),
                          function (n) {
                            return Math.pow(t + n * e, r);
                          }
                        );
                      })(e, r, t)
                    : Ta(isNaN(e) ? r : e);
                };
          })(e);
          function n(t, e) {
            var n = r((t = va(t)).r, (e = va(e)).r),
              o = r(t.g, e.g),
              i = r(t.b, e.b),
              a = _a(t.opacity, e.opacity);
            return function (e) {
              return (
                (t.r = n(e)),
                (t.g = o(e)),
                (t.b = i(e)),
                (t.opacity = a(e)),
                t + ""
              );
            };
          }
          return (n.gamma = t), n;
        })(1);
        function Da(t) {
          return function (e) {
            var r,
              n,
              o = e.length,
              i = new Array(o),
              a = new Array(o),
              c = new Array(o);
            for (r = 0; r < o; ++r)
              (n = va(e[r])),
                (i[r] = n.r || 0),
                (a[r] = n.g || 0),
                (c[r] = n.b || 0);
            return (
              (i = t(i)),
              (a = t(a)),
              (c = t(c)),
              (n.opacity = 1),
              function (t) {
                return (n.r = i(t)), (n.g = a(t)), (n.b = c(t)), n + "";
              }
            );
          };
        }
        function Ia(t, e) {
          var r,
            n = e ? e.length : 0,
            o = t ? Math.min(n, t.length) : 0,
            i = new Array(o),
            a = new Array(n);
          for (r = 0; r < o; ++r) i[r] = Fa(t[r], e[r]);
          for (; r < n; ++r) a[r] = e[r];
          return function (t) {
            for (r = 0; r < o; ++r) a[r] = i[r](t);
            return a;
          };
        }
        function Na(t, e) {
          var r = new Date();
          return (
            (t = +t),
            (e = +e),
            function (n) {
              return r.setTime(t * (1 - n) + e * n), r;
            }
          );
        }
        function Ba(t, e) {
          return (
            (t = +t),
            (e = +e),
            function (r) {
              return t * (1 - r) + e * r;
            }
          );
        }
        function La(t, e) {
          var r,
            n = {},
            o = {};
          for (r in ((null !== t && "object" == typeof t) || (t = {}),
          (null !== e && "object" == typeof e) || (e = {}),
          e))
            r in t ? (n[r] = Fa(t[r], e[r])) : (o[r] = e[r]);
          return function (t) {
            for (r in n) o[r] = n[r](t);
            return o;
          };
        }
        Da(function (t) {
          var e = t.length - 1;
          return function (r) {
            var n =
                r <= 0
                  ? (r = 0)
                  : r >= 1
                  ? ((r = 1), e - 1)
                  : Math.floor(r * e),
              o = t[n],
              i = t[n + 1],
              a = n > 0 ? t[n - 1] : 2 * o - i,
              c = n < e - 1 ? t[n + 2] : 2 * i - o;
            return Ma((r - n / e) * e, a, o, i, c);
          };
        }),
          Da(function (t) {
            var e = t.length;
            return function (r) {
              var n = Math.floor(((r %= 1) < 0 ? ++r : r) * e),
                o = t[(n + e - 1) % e],
                i = t[n % e],
                a = t[(n + 1) % e],
                c = t[(n + 2) % e];
              return Ma((r - n / e) * e, o, i, a, c);
            };
          });
        var Ra = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
          za = new RegExp(Ra.source, "g");
        function Ua(t, e) {
          var r,
            n,
            o,
            i = (Ra.lastIndex = za.lastIndex = 0),
            a = -1,
            c = [],
            u = [];
          for (t += "", e += ""; (r = Ra.exec(t)) && (n = za.exec(e)); )
            (o = n.index) > i &&
              ((o = e.slice(i, o)), c[a] ? (c[a] += o) : (c[++a] = o)),
              (r = r[0]) === (n = n[0])
                ? c[a]
                  ? (c[a] += n)
                  : (c[++a] = n)
                : ((c[++a] = null), u.push({ i: a, x: Ba(r, n) })),
              (i = za.lastIndex);
          return (
            i < e.length &&
              ((o = e.slice(i)), c[a] ? (c[a] += o) : (c[++a] = o)),
            c.length < 2
              ? u[0]
                ? (function (t) {
                    return function (e) {
                      return t(e) + "";
                    };
                  })(u[0].x)
                : (function (t) {
                    return function () {
                      return t;
                    };
                  })(e)
              : ((e = u.length),
                function (t) {
                  for (var r, n = 0; n < e; ++n) c[(r = u[n]).i] = r.x(t);
                  return c.join("");
                })
          );
        }
        function $a(t, e) {
          e || (e = []);
          var r,
            n = t ? Math.min(e.length, t.length) : 0,
            o = e.slice();
          return function (i) {
            for (r = 0; r < n; ++r) o[r] = t[r] * (1 - i) + e[r] * i;
            return o;
          };
        }
        function Fa(t, e) {
          var r,
            n,
            o = typeof e;
          return null == e || "boolean" === o
            ? Ta(e)
            : ("number" === o
                ? Ba
                : "string" === o
                ? (r = ha(e))
                  ? ((e = r), Ca)
                  : Ua
                : e instanceof ha
                ? Ca
                : e instanceof Date
                ? Na
                : ((n = e),
                  !ArrayBuffer.isView(n) || n instanceof DataView
                    ? Array.isArray(e)
                      ? Ia
                      : ("function" != typeof e.valueOf &&
                          "function" != typeof e.toString) ||
                        isNaN(e)
                      ? La
                      : Ba
                    : $a))(t, e);
        }
        function Wa(t, e) {
          return (
            (t = +t),
            (e = +e),
            function (r) {
              return Math.round(t * (1 - r) + e * r);
            }
          );
        }
        function qa(t) {
          return +t;
        }
        var Xa = [0, 1];
        function Ha(t) {
          return t;
        }
        function Va(t, e) {
          return (e -= t = +t)
            ? function (r) {
                return (r - t) / e;
              }
            : ((r = isNaN(e) ? NaN : 0.5),
              function () {
                return r;
              });
          var r;
        }
        function Ga(t, e, r) {
          var n = t[0],
            o = t[1],
            i = e[0],
            a = e[1];
          return (
            o < n
              ? ((n = Va(o, n)), (i = r(a, i)))
              : ((n = Va(n, o)), (i = r(i, a))),
            function (t) {
              return i(n(t));
            }
          );
        }
        function Ya(t, e, r) {
          var n = Math.min(t.length, e.length) - 1,
            o = new Array(n),
            i = new Array(n),
            a = -1;
          for (
            t[n] < t[0] &&
            ((t = t.slice().reverse()), (e = e.slice().reverse()));
            ++a < n;

          )
            (o[a] = Va(t[a], t[a + 1])), (i[a] = r(e[a], e[a + 1]));
          return function (e) {
            var r = Gi(t, e, 1, n) - 1;
            return i[r](o[r](e));
          };
        }
        function Ka(t, e) {
          return e
            .domain(t.domain())
            .range(t.range())
            .interpolate(t.interpolate())
            .clamp(t.clamp())
            .unknown(t.unknown());
        }
        function Za() {
          var t,
            e,
            r,
            n,
            o,
            i,
            a = Xa,
            c = Xa,
            u = Fa,
            l = Ha;
          function s() {
            var t = Math.min(a.length, c.length);
            return (
              l !== Ha &&
                (l = (function (t, e) {
                  var r;
                  return (
                    t > e && ((r = t), (t = e), (e = r)),
                    function (r) {
                      return Math.max(t, Math.min(e, r));
                    }
                  );
                })(a[0], a[t - 1])),
              (n = t > 2 ? Ya : Ga),
              (o = i = null),
              f
            );
          }
          function f(e) {
            return null == e || isNaN((e = +e))
              ? r
              : (o || (o = n(a.map(t), c, u)))(t(l(e)));
          }
          return (
            (f.invert = function (r) {
              return l(e((i || (i = n(c, a.map(t), Ba)))(r)));
            }),
            (f.domain = function (t) {
              return arguments.length
                ? ((a = Array.from(t, qa)), s())
                : a.slice();
            }),
            (f.range = function (t) {
              return arguments.length ? ((c = Array.from(t)), s()) : c.slice();
            }),
            (f.rangeRound = function (t) {
              return (c = Array.from(t)), (u = Wa), s();
            }),
            (f.clamp = function (t) {
              return arguments.length ? ((l = !!t || Ha), s()) : l !== Ha;
            }),
            (f.interpolate = function (t) {
              return arguments.length ? ((u = t), s()) : u;
            }),
            (f.unknown = function (t) {
              return arguments.length ? ((r = t), f) : r;
            }),
            function (r, n) {
              return (t = r), (e = n), s();
            }
          );
        }
        function Ja() {
          return Za()(Ha, Ha);
        }
        var Qa,
          tc =
            /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
        function ec(t) {
          if (!(e = tc.exec(t))) throw new Error("invalid format: " + t);
          var e;
          return new rc({
            fill: e[1],
            align: e[2],
            sign: e[3],
            symbol: e[4],
            zero: e[5],
            width: e[6],
            comma: e[7],
            precision: e[8] && e[8].slice(1),
            trim: e[9],
            type: e[10],
          });
        }
        function rc(t) {
          (this.fill = void 0 === t.fill ? " " : t.fill + ""),
            (this.align = void 0 === t.align ? ">" : t.align + ""),
            (this.sign = void 0 === t.sign ? "-" : t.sign + ""),
            (this.symbol = void 0 === t.symbol ? "" : t.symbol + ""),
            (this.zero = !!t.zero),
            (this.width = void 0 === t.width ? void 0 : +t.width),
            (this.comma = !!t.comma),
            (this.precision = void 0 === t.precision ? void 0 : +t.precision),
            (this.trim = !!t.trim),
            (this.type = void 0 === t.type ? "" : t.type + "");
        }
        function nc(t, e) {
          if (
            (r = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf(
              "e"
            )) < 0
          )
            return null;
          var r,
            n = t.slice(0, r);
          return [n.length > 1 ? n[0] + n.slice(2) : n, +t.slice(r + 1)];
        }
        function oc(t) {
          return (t = nc(Math.abs(t))) ? t[1] : NaN;
        }
        function ic(t, e) {
          var r = nc(t, e);
          if (!r) return t + "";
          var n = r[0],
            o = r[1];
          return o < 0
            ? "0." + new Array(-o).join("0") + n
            : n.length > o + 1
            ? n.slice(0, o + 1) + "." + n.slice(o + 1)
            : n + new Array(o - n.length + 2).join("0");
        }
        (ec.prototype = rc.prototype),
          (rc.prototype.toString = function () {
            return (
              this.fill +
              this.align +
              this.sign +
              this.symbol +
              (this.zero ? "0" : "") +
              (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) +
              (this.comma ? "," : "") +
              (void 0 === this.precision
                ? ""
                : "." + Math.max(0, 0 | this.precision)) +
              (this.trim ? "~" : "") +
              this.type
            );
          });
        const ac = {
          "%": (t, e) => (100 * t).toFixed(e),
          b: (t) => Math.round(t).toString(2),
          c: (t) => t + "",
          d: function (t) {
            return Math.abs((t = Math.round(t))) >= 1e21
              ? t.toLocaleString("en").replace(/,/g, "")
              : t.toString(10);
          },
          e: (t, e) => t.toExponential(e),
          f: (t, e) => t.toFixed(e),
          g: (t, e) => t.toPrecision(e),
          o: (t) => Math.round(t).toString(8),
          p: (t, e) => ic(100 * t, e),
          r: ic,
          s: function (t, e) {
            var r = nc(t, e);
            if (!r) return t + "";
            var n = r[0],
              o = r[1],
              i =
                o - (Qa = 3 * Math.max(-8, Math.min(8, Math.floor(o / 3)))) + 1,
              a = n.length;
            return i === a
              ? n
              : i > a
              ? n + new Array(i - a + 1).join("0")
              : i > 0
              ? n.slice(0, i) + "." + n.slice(i)
              : "0." +
                new Array(1 - i).join("0") +
                nc(t, Math.max(0, e + i - 1))[0];
          },
          X: (t) => Math.round(t).toString(16).toUpperCase(),
          x: (t) => Math.round(t).toString(16),
        };
        function cc(t) {
          return t;
        }
        var uc,
          lc,
          sc,
          fc = Array.prototype.map,
          pc = [
            "y",
            "z",
            "a",
            "f",
            "p",
            "n",
            "µ",
            "m",
            "",
            "k",
            "M",
            "G",
            "T",
            "P",
            "E",
            "Z",
            "Y",
          ];
        function hc(t, e, r, n) {
          var o,
            i = Ui(t, e, r);
          switch ((n = ec(null == n ? ",f" : n)).type) {
            case "s":
              var a = Math.max(Math.abs(t), Math.abs(e));
              return (
                null != n.precision ||
                  isNaN(
                    (o = (function (t, e) {
                      return Math.max(
                        0,
                        3 * Math.max(-8, Math.min(8, Math.floor(oc(e) / 3))) -
                          oc(Math.abs(t))
                      );
                    })(i, a))
                  ) ||
                  (n.precision = o),
                sc(n, a)
              );
            case "":
            case "e":
            case "g":
            case "p":
            case "r":
              null != n.precision ||
                isNaN(
                  (o = (function (t, e) {
                    return (
                      (t = Math.abs(t)),
                      (e = Math.abs(e) - t),
                      Math.max(0, oc(e) - oc(t)) + 1
                    );
                  })(i, Math.max(Math.abs(t), Math.abs(e))))
                ) ||
                (n.precision = o - ("e" === n.type));
              break;
            case "f":
            case "%":
              null != n.precision ||
                isNaN(
                  (o = (function (t) {
                    return Math.max(0, -oc(Math.abs(t)));
                  })(i))
                ) ||
                (n.precision = o - 2 * ("%" === n.type));
          }
          return lc(n);
        }
        function dc(t) {
          var e = t.domain;
          return (
            (t.ticks = function (t) {
              var r = e();
              return Ri(r[0], r[r.length - 1], null == t ? 10 : t);
            }),
            (t.tickFormat = function (t, r) {
              var n = e();
              return hc(n[0], n[n.length - 1], null == t ? 10 : t, r);
            }),
            (t.nice = function (r) {
              null == r && (r = 10);
              var n,
                o,
                i = e(),
                a = 0,
                c = i.length - 1,
                u = i[a],
                l = i[c],
                s = 10;
              for (
                l < u && ((o = u), (u = l), (l = o), (o = a), (a = c), (c = o));
                s-- > 0;

              ) {
                if ((o = zi(u, l, r)) === n)
                  return (i[a] = u), (i[c] = l), e(i);
                if (o > 0)
                  (u = Math.floor(u / o) * o), (l = Math.ceil(l / o) * o);
                else {
                  if (!(o < 0)) break;
                  (u = Math.ceil(u * o) / o), (l = Math.floor(l * o) / o);
                }
                n = o;
              }
              return t;
            }),
            t
          );
        }
        function yc() {
          var t = Ja();
          return (
            (t.copy = function () {
              return Ka(t, yc());
            }),
            Wo.apply(t, arguments),
            dc(t)
          );
        }
        function vc(t) {
          var e;
          function r(t) {
            return null == t || isNaN((t = +t)) ? e : t;
          }
          return (
            (r.invert = r),
            (r.domain = r.range =
              function (e) {
                return arguments.length
                  ? ((t = Array.from(e, qa)), r)
                  : t.slice();
              }),
            (r.unknown = function (t) {
              return arguments.length ? ((e = t), r) : e;
            }),
            (r.copy = function () {
              return vc(t).unknown(e);
            }),
            (t = arguments.length ? Array.from(t, qa) : [0, 1]),
            dc(r)
          );
        }
        function mc(t, e) {
          var r,
            n = 0,
            o = (t = t.slice()).length - 1,
            i = t[n],
            a = t[o];
          return (
            a < i && ((r = n), (n = o), (o = r), (r = i), (i = a), (a = r)),
            (t[n] = e.floor(i)),
            (t[o] = e.ceil(a)),
            t
          );
        }
        function bc(t) {
          return Math.log(t);
        }
        function gc(t) {
          return Math.exp(t);
        }
        function xc(t) {
          return -Math.log(-t);
        }
        function wc(t) {
          return -Math.exp(-t);
        }
        function Oc(t) {
          return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t;
        }
        function jc(t) {
          return (e, r) => -t(-e, r);
        }
        function Sc(t) {
          const e = t(bc, gc),
            r = e.domain;
          let n,
            o,
            i = 10;
          function a() {
            return (
              (n = (function (t) {
                return t === Math.E
                  ? Math.log
                  : (10 === t && Math.log10) ||
                      (2 === t && Math.log2) ||
                      ((t = Math.log(t)), (e) => Math.log(e) / t);
              })(i)),
              (o = (function (t) {
                return 10 === t
                  ? Oc
                  : t === Math.E
                  ? Math.exp
                  : (e) => Math.pow(t, e);
              })(i)),
              r()[0] < 0 ? ((n = jc(n)), (o = jc(o)), t(xc, wc)) : t(bc, gc),
              e
            );
          }
          return (
            (e.base = function (t) {
              return arguments.length ? ((i = +t), a()) : i;
            }),
            (e.domain = function (t) {
              return arguments.length ? (r(t), a()) : r();
            }),
            (e.ticks = (t) => {
              const e = r();
              let a = e[0],
                c = e[e.length - 1];
              const u = c < a;
              u && ([a, c] = [c, a]);
              let l,
                s,
                f = n(a),
                p = n(c);
              const h = null == t ? 10 : +t;
              let d = [];
              if (!(i % 1) && p - f < h) {
                if (((f = Math.floor(f)), (p = Math.ceil(p)), a > 0)) {
                  for (; f <= p; ++f)
                    for (l = 1; l < i; ++l)
                      if (((s = f < 0 ? l / o(-f) : l * o(f)), !(s < a))) {
                        if (s > c) break;
                        d.push(s);
                      }
                } else
                  for (; f <= p; ++f)
                    for (l = i - 1; l >= 1; --l)
                      if (((s = f > 0 ? l / o(-f) : l * o(f)), !(s < a))) {
                        if (s > c) break;
                        d.push(s);
                      }
                2 * d.length < h && (d = Ri(a, c, h));
              } else d = Ri(f, p, Math.min(p - f, h)).map(o);
              return u ? d.reverse() : d;
            }),
            (e.tickFormat = (t, r) => {
              if (
                (null == t && (t = 10),
                null == r && (r = 10 === i ? "s" : ","),
                "function" != typeof r &&
                  (i % 1 || null != (r = ec(r)).precision || (r.trim = !0),
                  (r = lc(r))),
                t === 1 / 0)
              )
                return r;
              const a = Math.max(1, (i * t) / e.ticks().length);
              return (t) => {
                let e = t / o(Math.round(n(t)));
                return e * i < i - 0.5 && (e *= i), e <= a ? r(t) : "";
              };
            }),
            (e.nice = () =>
              r(
                mc(r(), {
                  floor: (t) => o(Math.floor(n(t))),
                  ceil: (t) => o(Math.ceil(n(t))),
                })
              )),
            e
          );
        }
        function Ec() {
          const t = Sc(Za()).domain([1, 10]);
          return (
            (t.copy = () => Ka(t, Ec()).base(t.base())),
            Wo.apply(t, arguments),
            t
          );
        }
        function Pc(t) {
          return function (e) {
            return Math.sign(e) * Math.log1p(Math.abs(e / t));
          };
        }
        function Ac(t) {
          return function (e) {
            return Math.sign(e) * Math.expm1(Math.abs(e)) * t;
          };
        }
        function kc(t) {
          var e = 1,
            r = t(Pc(e), Ac(e));
          return (
            (r.constant = function (r) {
              return arguments.length ? t(Pc((e = +r)), Ac(e)) : e;
            }),
            dc(r)
          );
        }
        function Mc() {
          var t = kc(Za());
          return (
            (t.copy = function () {
              return Ka(t, Mc()).constant(t.constant());
            }),
            Wo.apply(t, arguments)
          );
        }
        function Tc(t) {
          return function (e) {
            return e < 0 ? -Math.pow(-e, t) : Math.pow(e, t);
          };
        }
        function _c(t) {
          return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
        }
        function Cc(t) {
          return t < 0 ? -t * t : t * t;
        }
        function Dc(t) {
          var e = t(Ha, Ha),
            r = 1;
          return (
            (e.exponent = function (e) {
              return arguments.length
                ? 1 == (r = +e)
                  ? t(Ha, Ha)
                  : 0.5 === r
                  ? t(_c, Cc)
                  : t(Tc(r), Tc(1 / r))
                : r;
            }),
            dc(e)
          );
        }
        function Ic() {
          var t = Dc(Za());
          return (
            (t.copy = function () {
              return Ka(t, Ic()).exponent(t.exponent());
            }),
            Wo.apply(t, arguments),
            t
          );
        }
        function Nc() {
          return Ic.apply(null, arguments).exponent(0.5);
        }
        function Bc(t) {
          return Math.sign(t) * t * t;
        }
        function Lc() {
          var t,
            e = Ja(),
            r = [0, 1],
            n = !1;
          function o(r) {
            var o = (function (t) {
              return Math.sign(t) * Math.sqrt(Math.abs(t));
            })(e(r));
            return isNaN(o) ? t : n ? Math.round(o) : o;
          }
          return (
            (o.invert = function (t) {
              return e.invert(Bc(t));
            }),
            (o.domain = function (t) {
              return arguments.length ? (e.domain(t), o) : e.domain();
            }),
            (o.range = function (t) {
              return arguments.length
                ? (e.range((r = Array.from(t, qa)).map(Bc)), o)
                : r.slice();
            }),
            (o.rangeRound = function (t) {
              return o.range(t).round(!0);
            }),
            (o.round = function (t) {
              return arguments.length ? ((n = !!t), o) : n;
            }),
            (o.clamp = function (t) {
              return arguments.length ? (e.clamp(t), o) : e.clamp();
            }),
            (o.unknown = function (e) {
              return arguments.length ? ((t = e), o) : t;
            }),
            (o.copy = function () {
              return Lc(e.domain(), r).round(n).clamp(e.clamp()).unknown(t);
            }),
            Wo.apply(o, arguments),
            dc(o)
          );
        }
        function Rc(t, e) {
          let r;
          if (void 0 === e)
            for (const e of t)
              null != e && (r < e || (void 0 === r && e >= e)) && (r = e);
          else {
            let n = -1;
            for (let o of t)
              null != (o = e(o, ++n, t)) &&
                (r < o || (void 0 === r && o >= o)) &&
                (r = o);
          }
          return r;
        }
        function zc(t, e) {
          let r;
          if (void 0 === e)
            for (const e of t)
              null != e && (r > e || (void 0 === r && e >= e)) && (r = e);
          else {
            let n = -1;
            for (let o of t)
              null != (o = e(o, ++n, t)) &&
                (r > o || (void 0 === r && o >= o)) &&
                (r = o);
          }
          return r;
        }
        function Uc(t, e) {
          return (
            (null == t || !(t >= t)) - (null == e || !(e >= e)) ||
            (t < e ? -1 : t > e ? 1 : 0)
          );
        }
        function $c(t, e, r = 0, n = 1 / 0, o) {
          if (
            ((e = Math.floor(e)),
            (r = Math.floor(Math.max(0, r))),
            (n = Math.floor(Math.min(t.length - 1, n))),
            !(r <= e && e <= n))
          )
            return t;
          for (
            o =
              void 0 === o
                ? Uc
                : (function (t = $i) {
                    if (t === $i) return Uc;
                    if ("function" != typeof t)
                      throw new TypeError("compare is not a function");
                    return (e, r) => {
                      const n = t(e, r);
                      return n || 0 === n
                        ? n
                        : (0 === t(r, r)) - (0 === t(e, e));
                    };
                  })(o);
            n > r;

          ) {
            if (n - r > 600) {
              const i = n - r + 1,
                a = e - r + 1,
                c = Math.log(i),
                u = 0.5 * Math.exp((2 * c) / 3),
                l =
                  0.5 *
                  Math.sqrt((c * u * (i - u)) / i) *
                  (a - i / 2 < 0 ? -1 : 1);
              $c(
                t,
                e,
                Math.max(r, Math.floor(e - (a * u) / i + l)),
                Math.min(n, Math.floor(e + ((i - a) * u) / i + l)),
                o
              );
            }
            const i = t[e];
            let a = r,
              c = n;
            for (Fc(t, r, e), o(t[n], i) > 0 && Fc(t, r, n); a < c; ) {
              for (Fc(t, a, c), ++a, --c; o(t[a], i) < 0; ) ++a;
              for (; o(t[c], i) > 0; ) --c;
            }
            0 === o(t[r], i) ? Fc(t, r, c) : (++c, Fc(t, c, n)),
              c <= e && (r = c + 1),
              e <= c && (n = c - 1);
          }
          return t;
        }
        function Fc(t, e, r) {
          const n = t[e];
          (t[e] = t[r]), (t[r] = n);
        }
        function Wc(t, e, r = Xi) {
          if ((n = t.length) && !isNaN((e = +e))) {
            if (e <= 0 || n < 2) return +r(t[0], 0, t);
            if (e >= 1) return +r(t[n - 1], n - 1, t);
            var n,
              o = (n - 1) * e,
              i = Math.floor(o),
              a = +r(t[i], i, t);
            return a + (+r(t[i + 1], i + 1, t) - a) * (o - i);
          }
        }
        function qc() {
          var t,
            e = [],
            r = [],
            n = [];
          function o() {
            var t = 0,
              o = Math.max(1, r.length);
            for (n = new Array(o - 1); ++t < o; ) n[t - 1] = Wc(e, t / o);
            return i;
          }
          function i(e) {
            return null == e || isNaN((e = +e)) ? t : r[Gi(n, e)];
          }
          return (
            (i.invertExtent = function (t) {
              var o = r.indexOf(t);
              return o < 0
                ? [NaN, NaN]
                : [
                    o > 0 ? n[o - 1] : e[0],
                    o < n.length ? n[o] : e[e.length - 1],
                  ];
            }),
            (i.domain = function (t) {
              if (!arguments.length) return e.slice();
              e = [];
              for (let r of t) null == r || isNaN((r = +r)) || e.push(r);
              return e.sort($i), o();
            }),
            (i.range = function (t) {
              return arguments.length ? ((r = Array.from(t)), o()) : r.slice();
            }),
            (i.unknown = function (e) {
              return arguments.length ? ((t = e), i) : t;
            }),
            (i.quantiles = function () {
              return n.slice();
            }),
            (i.copy = function () {
              return qc().domain(e).range(r).unknown(t);
            }),
            Wo.apply(i, arguments)
          );
        }
        function Xc() {
          var t,
            e = 0,
            r = 1,
            n = 1,
            o = [0.5],
            i = [0, 1];
          function a(e) {
            return null != e && e <= e ? i[Gi(o, e, 0, n)] : t;
          }
          function c() {
            var t = -1;
            for (o = new Array(n); ++t < n; )
              o[t] = ((t + 1) * r - (t - n) * e) / (n + 1);
            return a;
          }
          return (
            (a.domain = function (t) {
              return arguments.length
                ? (([e, r] = t), (e = +e), (r = +r), c())
                : [e, r];
            }),
            (a.range = function (t) {
              return arguments.length
                ? ((n = (i = Array.from(t)).length - 1), c())
                : i.slice();
            }),
            (a.invertExtent = function (t) {
              var a = i.indexOf(t);
              return a < 0
                ? [NaN, NaN]
                : a < 1
                ? [e, o[0]]
                : a >= n
                ? [o[n - 1], r]
                : [o[a - 1], o[a]];
            }),
            (a.unknown = function (e) {
              return arguments.length ? ((t = e), a) : a;
            }),
            (a.thresholds = function () {
              return o.slice();
            }),
            (a.copy = function () {
              return Xc().domain([e, r]).range(i).unknown(t);
            }),
            Wo.apply(dc(a), arguments)
          );
        }
        function Hc() {
          var t,
            e = [0.5],
            r = [0, 1],
            n = 1;
          function o(o) {
            return null != o && o <= o ? r[Gi(e, o, 0, n)] : t;
          }
          return (
            (o.domain = function (t) {
              return arguments.length
                ? ((e = Array.from(t)),
                  (n = Math.min(e.length, r.length - 1)),
                  o)
                : e.slice();
            }),
            (o.range = function (t) {
              return arguments.length
                ? ((r = Array.from(t)),
                  (n = Math.min(e.length, r.length - 1)),
                  o)
                : r.slice();
            }),
            (o.invertExtent = function (t) {
              var n = r.indexOf(t);
              return [e[n - 1], e[n]];
            }),
            (o.unknown = function (e) {
              return arguments.length ? ((t = e), o) : t;
            }),
            (o.copy = function () {
              return Hc().domain(e).range(r).unknown(t);
            }),
            Wo.apply(o, arguments)
          );
        }
        (uc = (function (t) {
          var e,
            r,
            n =
              void 0 === t.grouping || void 0 === t.thousands
                ? cc
                : ((e = fc.call(t.grouping, Number)),
                  (r = t.thousands + ""),
                  function (t, n) {
                    for (
                      var o = t.length, i = [], a = 0, c = e[0], u = 0;
                      o > 0 &&
                      c > 0 &&
                      (u + c + 1 > n && (c = Math.max(1, n - u)),
                      i.push(t.substring((o -= c), o + c)),
                      !((u += c + 1) > n));

                    )
                      c = e[(a = (a + 1) % e.length)];
                    return i.reverse().join(r);
                  }),
            o = void 0 === t.currency ? "" : t.currency[0] + "",
            i = void 0 === t.currency ? "" : t.currency[1] + "",
            a = void 0 === t.decimal ? "." : t.decimal + "",
            c =
              void 0 === t.numerals
                ? cc
                : (function (t) {
                    return function (e) {
                      return e.replace(/[0-9]/g, function (e) {
                        return t[+e];
                      });
                    };
                  })(fc.call(t.numerals, String)),
            u = void 0 === t.percent ? "%" : t.percent + "",
            l = void 0 === t.minus ? "−" : t.minus + "",
            s = void 0 === t.nan ? "NaN" : t.nan + "";
          function f(t) {
            var e = (t = ec(t)).fill,
              r = t.align,
              f = t.sign,
              p = t.symbol,
              h = t.zero,
              d = t.width,
              y = t.comma,
              v = t.precision,
              m = t.trim,
              b = t.type;
            "n" === b
              ? ((y = !0), (b = "g"))
              : ac[b] || (void 0 === v && (v = 12), (m = !0), (b = "g")),
              (h || ("0" === e && "=" === r)) &&
                ((h = !0), (e = "0"), (r = "="));
            var g =
                "$" === p
                  ? o
                  : "#" === p && /[boxX]/.test(b)
                  ? "0" + b.toLowerCase()
                  : "",
              x = "$" === p ? i : /[%p]/.test(b) ? u : "",
              w = ac[b],
              O = /[defgprs%]/.test(b);
            function j(t) {
              var o,
                i,
                u,
                p = g,
                j = x;
              if ("c" === b) (j = w(t) + j), (t = "");
              else {
                var S = (t = +t) < 0 || 1 / t < 0;
                if (
                  ((t = isNaN(t) ? s : w(Math.abs(t), v)),
                  m &&
                    (t = (function (t) {
                      t: for (var e, r = t.length, n = 1, o = -1; n < r; ++n)
                        switch (t[n]) {
                          case ".":
                            o = e = n;
                            break;
                          case "0":
                            0 === o && (o = n), (e = n);
                            break;
                          default:
                            if (!+t[n]) break t;
                            o > 0 && (o = 0);
                        }
                      return o > 0 ? t.slice(0, o) + t.slice(e + 1) : t;
                    })(t)),
                  S && 0 == +t && "+" !== f && (S = !1),
                  (p =
                    (S
                      ? "(" === f
                        ? f
                        : l
                      : "-" === f || "(" === f
                      ? ""
                      : f) + p),
                  (j =
                    ("s" === b ? pc[8 + Qa / 3] : "") +
                    j +
                    (S && "(" === f ? ")" : "")),
                  O)
                )
                  for (o = -1, i = t.length; ++o < i; )
                    if (48 > (u = t.charCodeAt(o)) || u > 57) {
                      (j = (46 === u ? a + t.slice(o + 1) : t.slice(o)) + j),
                        (t = t.slice(0, o));
                      break;
                    }
              }
              y && !h && (t = n(t, 1 / 0));
              var E = p.length + t.length + j.length,
                P = E < d ? new Array(d - E + 1).join(e) : "";
              switch (
                (y &&
                  h &&
                  ((t = n(P + t, P.length ? d - j.length : 1 / 0)), (P = "")),
                r)
              ) {
                case "<":
                  t = p + t + j + P;
                  break;
                case "=":
                  t = p + P + t + j;
                  break;
                case "^":
                  t = P.slice(0, (E = P.length >> 1)) + p + t + j + P.slice(E);
                  break;
                default:
                  t = P + p + t + j;
              }
              return c(t);
            }
            return (
              (v =
                void 0 === v
                  ? 6
                  : /[gprs]/.test(b)
                  ? Math.max(1, Math.min(21, v))
                  : Math.max(0, Math.min(20, v))),
              (j.toString = function () {
                return t + "";
              }),
              j
            );
          }
          return {
            format: f,
            formatPrefix: function (t, e) {
              var r = f((((t = ec(t)).type = "f"), t)),
                n = 3 * Math.max(-8, Math.min(8, Math.floor(oc(e) / 3))),
                o = Math.pow(10, -n),
                i = pc[8 + n / 3];
              return function (t) {
                return r(o * t) + i;
              };
            },
          };
        })({ thousands: ",", grouping: [3], currency: ["$", ""] })),
          (lc = uc.format),
          (sc = uc.formatPrefix);
        const Vc = 1e3,
          Gc = 6e4,
          Yc = 36e5,
          Kc = 864e5,
          Zc = 6048e5,
          Jc = 31536e6,
          Qc = new Date(),
          tu = new Date();
        function eu(t, e, r, n) {
          function o(e) {
            return (
              t((e = 0 === arguments.length ? new Date() : new Date(+e))), e
            );
          }
          return (
            (o.floor = (e) => (t((e = new Date(+e))), e)),
            (o.ceil = (r) => (t((r = new Date(r - 1))), e(r, 1), t(r), r)),
            (o.round = (t) => {
              const e = o(t),
                r = o.ceil(t);
              return t - e < r - t ? e : r;
            }),
            (o.offset = (t, r) => (
              e((t = new Date(+t)), null == r ? 1 : Math.floor(r)), t
            )),
            (o.range = (r, n, i) => {
              const a = [];
              if (
                ((r = o.ceil(r)),
                (i = null == i ? 1 : Math.floor(i)),
                !(r < n && i > 0))
              )
                return a;
              let c;
              do {
                a.push((c = new Date(+r))), e(r, i), t(r);
              } while (c < r && r < n);
              return a;
            }),
            (o.filter = (r) =>
              eu(
                (e) => {
                  if (e >= e) for (; t(e), !r(e); ) e.setTime(e - 1);
                },
                (t, n) => {
                  if (t >= t)
                    if (n < 0) for (; ++n <= 0; ) for (; e(t, -1), !r(t); );
                    else for (; --n >= 0; ) for (; e(t, 1), !r(t); );
                }
              )),
            r &&
              ((o.count = (e, n) => (
                Qc.setTime(+e),
                tu.setTime(+n),
                t(Qc),
                t(tu),
                Math.floor(r(Qc, tu))
              )),
              (o.every = (t) => (
                (t = Math.floor(t)),
                isFinite(t) && t > 0
                  ? t > 1
                    ? o.filter(
                        n ? (e) => n(e) % t == 0 : (e) => o.count(0, e) % t == 0
                      )
                    : o
                  : null
              ))),
            o
          );
        }
        const ru = eu(
          () => {},
          (t, e) => {
            t.setTime(+t + e);
          },
          (t, e) => e - t
        );
        (ru.every = (t) => (
          (t = Math.floor(t)),
          isFinite(t) && t > 0
            ? t > 1
              ? eu(
                  (e) => {
                    e.setTime(Math.floor(e / t) * t);
                  },
                  (e, r) => {
                    e.setTime(+e + r * t);
                  },
                  (e, r) => (r - e) / t
                )
              : ru
            : null
        )),
          ru.range;
        const nu = eu(
            (t) => {
              t.setTime(t - t.getMilliseconds());
            },
            (t, e) => {
              t.setTime(+t + e * Vc);
            },
            (t, e) => (e - t) / Vc,
            (t) => t.getUTCSeconds()
          ),
          ou =
            (nu.range,
            eu(
              (t) => {
                t.setTime(t - t.getMilliseconds() - t.getSeconds() * Vc);
              },
              (t, e) => {
                t.setTime(+t + e * Gc);
              },
              (t, e) => (e - t) / Gc,
              (t) => t.getMinutes()
            )),
          iu =
            (ou.range,
            eu(
              (t) => {
                t.setUTCSeconds(0, 0);
              },
              (t, e) => {
                t.setTime(+t + e * Gc);
              },
              (t, e) => (e - t) / Gc,
              (t) => t.getUTCMinutes()
            )),
          au =
            (iu.range,
            eu(
              (t) => {
                t.setTime(
                  t -
                    t.getMilliseconds() -
                    t.getSeconds() * Vc -
                    t.getMinutes() * Gc
                );
              },
              (t, e) => {
                t.setTime(+t + e * Yc);
              },
              (t, e) => (e - t) / Yc,
              (t) => t.getHours()
            )),
          cu =
            (au.range,
            eu(
              (t) => {
                t.setUTCMinutes(0, 0, 0);
              },
              (t, e) => {
                t.setTime(+t + e * Yc);
              },
              (t, e) => (e - t) / Yc,
              (t) => t.getUTCHours()
            )),
          uu =
            (cu.range,
            eu(
              (t) => t.setHours(0, 0, 0, 0),
              (t, e) => t.setDate(t.getDate() + e),
              (t, e) =>
                (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * Gc) /
                Kc,
              (t) => t.getDate() - 1
            )),
          lu =
            (uu.range,
            eu(
              (t) => {
                t.setUTCHours(0, 0, 0, 0);
              },
              (t, e) => {
                t.setUTCDate(t.getUTCDate() + e);
              },
              (t, e) => (e - t) / Kc,
              (t) => t.getUTCDate() - 1
            )),
          su =
            (lu.range,
            eu(
              (t) => {
                t.setUTCHours(0, 0, 0, 0);
              },
              (t, e) => {
                t.setUTCDate(t.getUTCDate() + e);
              },
              (t, e) => (e - t) / Kc,
              (t) => Math.floor(t / Kc)
            ));
        function fu(t) {
          return eu(
            (e) => {
              e.setDate(e.getDate() - ((e.getDay() + 7 - t) % 7)),
                e.setHours(0, 0, 0, 0);
            },
            (t, e) => {
              t.setDate(t.getDate() + 7 * e);
            },
            (t, e) =>
              (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * Gc) /
              Zc
          );
        }
        su.range;
        const pu = fu(0),
          hu = fu(1),
          du = fu(2),
          yu = fu(3),
          vu = fu(4),
          mu = fu(5),
          bu = fu(6);
        function gu(t) {
          return eu(
            (e) => {
              e.setUTCDate(e.getUTCDate() - ((e.getUTCDay() + 7 - t) % 7)),
                e.setUTCHours(0, 0, 0, 0);
            },
            (t, e) => {
              t.setUTCDate(t.getUTCDate() + 7 * e);
            },
            (t, e) => (e - t) / Zc
          );
        }
        pu.range, hu.range, du.range, yu.range, vu.range, mu.range, bu.range;
        const xu = gu(0),
          wu = gu(1),
          Ou = gu(2),
          ju = gu(3),
          Su = gu(4),
          Eu = gu(5),
          Pu = gu(6),
          Au =
            (xu.range,
            wu.range,
            Ou.range,
            ju.range,
            Su.range,
            Eu.range,
            Pu.range,
            eu(
              (t) => {
                t.setDate(1), t.setHours(0, 0, 0, 0);
              },
              (t, e) => {
                t.setMonth(t.getMonth() + e);
              },
              (t, e) =>
                e.getMonth() -
                t.getMonth() +
                12 * (e.getFullYear() - t.getFullYear()),
              (t) => t.getMonth()
            )),
          ku =
            (Au.range,
            eu(
              (t) => {
                t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
              },
              (t, e) => {
                t.setUTCMonth(t.getUTCMonth() + e);
              },
              (t, e) =>
                e.getUTCMonth() -
                t.getUTCMonth() +
                12 * (e.getUTCFullYear() - t.getUTCFullYear()),
              (t) => t.getUTCMonth()
            )),
          Mu =
            (ku.range,
            eu(
              (t) => {
                t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
              },
              (t, e) => {
                t.setFullYear(t.getFullYear() + e);
              },
              (t, e) => e.getFullYear() - t.getFullYear(),
              (t) => t.getFullYear()
            ));
        (Mu.every = (t) =>
          isFinite((t = Math.floor(t))) && t > 0
            ? eu(
                (e) => {
                  e.setFullYear(Math.floor(e.getFullYear() / t) * t),
                    e.setMonth(0, 1),
                    e.setHours(0, 0, 0, 0);
                },
                (e, r) => {
                  e.setFullYear(e.getFullYear() + r * t);
                }
              )
            : null),
          Mu.range;
        const Tu = eu(
          (t) => {
            t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
          },
          (t, e) => {
            t.setUTCFullYear(t.getUTCFullYear() + e);
          },
          (t, e) => e.getUTCFullYear() - t.getUTCFullYear(),
          (t) => t.getUTCFullYear()
        );
        function _u(t, e, r, n, o, i) {
          const a = [
            [nu, 1, Vc],
            [nu, 5, 5e3],
            [nu, 15, 15e3],
            [nu, 30, 3e4],
            [i, 1, Gc],
            [i, 5, 3e5],
            [i, 15, 9e5],
            [i, 30, 18e5],
            [o, 1, Yc],
            [o, 3, 108e5],
            [o, 6, 216e5],
            [o, 12, 432e5],
            [n, 1, Kc],
            [n, 2, 1728e5],
            [r, 1, Zc],
            [e, 1, 2592e6],
            [e, 3, 7776e6],
            [t, 1, Jc],
          ];
          function c(e, r, n) {
            const o = Math.abs(r - e) / n,
              i = Wi(([, , t]) => t).right(a, o);
            if (i === a.length) return t.every(Ui(e / Jc, r / Jc, n));
            if (0 === i) return ru.every(Math.max(Ui(e, r, n), 1));
            const [c, u] = a[o / a[i - 1][2] < a[i][2] / o ? i - 1 : i];
            return c.every(u);
          }
          return [
            function (t, e, r) {
              const n = e < t;
              n && ([t, e] = [e, t]);
              const o = r && "function" == typeof r.range ? r : c(t, e, r),
                i = o ? o.range(t, +e + 1) : [];
              return n ? i.reverse() : i;
            },
            c,
          ];
        }
        (Tu.every = (t) =>
          isFinite((t = Math.floor(t))) && t > 0
            ? eu(
                (e) => {
                  e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t),
                    e.setUTCMonth(0, 1),
                    e.setUTCHours(0, 0, 0, 0);
                },
                (e, r) => {
                  e.setUTCFullYear(e.getUTCFullYear() + r * t);
                }
              )
            : null),
          Tu.range;
        const [Cu, Du] = _u(Tu, ku, xu, su, cu, iu),
          [Iu, Nu] = _u(Mu, Au, pu, uu, au, ou);
        function Bu(t) {
          if (0 <= t.y && t.y < 100) {
            var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
            return e.setFullYear(t.y), e;
          }
          return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
        }
        function Lu(t) {
          if (0 <= t.y && t.y < 100) {
            var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
            return e.setUTCFullYear(t.y), e;
          }
          return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
        }
        function Ru(t, e, r) {
          return { y: t, m: e, d: r, H: 0, M: 0, S: 0, L: 0 };
        }
        var zu,
          Uu,
          $u,
          Fu = { "-": "", _: " ", 0: "0" },
          Wu = /^\s*\d+/,
          qu = /^%/,
          Xu = /[\\^$*+?|[\]().{}]/g;
        function Hu(t, e, r) {
          var n = t < 0 ? "-" : "",
            o = (n ? -t : t) + "",
            i = o.length;
          return n + (i < r ? new Array(r - i + 1).join(e) + o : o);
        }
        function Vu(t) {
          return t.replace(Xu, "\\$&");
        }
        function Gu(t) {
          return new RegExp("^(?:" + t.map(Vu).join("|") + ")", "i");
        }
        function Yu(t) {
          return new Map(t.map((t, e) => [t.toLowerCase(), e]));
        }
        function Ku(t, e, r) {
          var n = Wu.exec(e.slice(r, r + 1));
          return n ? ((t.w = +n[0]), r + n[0].length) : -1;
        }
        function Zu(t, e, r) {
          var n = Wu.exec(e.slice(r, r + 1));
          return n ? ((t.u = +n[0]), r + n[0].length) : -1;
        }
        function Ju(t, e, r) {
          var n = Wu.exec(e.slice(r, r + 2));
          return n ? ((t.U = +n[0]), r + n[0].length) : -1;
        }
        function Qu(t, e, r) {
          var n = Wu.exec(e.slice(r, r + 2));
          return n ? ((t.V = +n[0]), r + n[0].length) : -1;
        }
        function tl(t, e, r) {
          var n = Wu.exec(e.slice(r, r + 2));
          return n ? ((t.W = +n[0]), r + n[0].length) : -1;
        }
        function el(t, e, r) {
          var n = Wu.exec(e.slice(r, r + 4));
          return n ? ((t.y = +n[0]), r + n[0].length) : -1;
        }
        function rl(t, e, r) {
          var n = Wu.exec(e.slice(r, r + 2));
          return n
            ? ((t.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3)), r + n[0].length)
            : -1;
        }
        function nl(t, e, r) {
          var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(r, r + 6));
          return n
            ? ((t.Z = n[1] ? 0 : -(n[2] + (n[3] || "00"))), r + n[0].length)
            : -1;
        }
        function ol(t, e, r) {
          var n = Wu.exec(e.slice(r, r + 1));
          return n ? ((t.q = 3 * n[0] - 3), r + n[0].length) : -1;
        }
        function il(t, e, r) {
          var n = Wu.exec(e.slice(r, r + 2));
          return n ? ((t.m = n[0] - 1), r + n[0].length) : -1;
        }
        function al(t, e, r) {
          var n = Wu.exec(e.slice(r, r + 2));
          return n ? ((t.d = +n[0]), r + n[0].length) : -1;
        }
        function cl(t, e, r) {
          var n = Wu.exec(e.slice(r, r + 3));
          return n ? ((t.m = 0), (t.d = +n[0]), r + n[0].length) : -1;
        }
        function ul(t, e, r) {
          var n = Wu.exec(e.slice(r, r + 2));
          return n ? ((t.H = +n[0]), r + n[0].length) : -1;
        }
        function ll(t, e, r) {
          var n = Wu.exec(e.slice(r, r + 2));
          return n ? ((t.M = +n[0]), r + n[0].length) : -1;
        }
        function sl(t, e, r) {
          var n = Wu.exec(e.slice(r, r + 2));
          return n ? ((t.S = +n[0]), r + n[0].length) : -1;
        }
        function fl(t, e, r) {
          var n = Wu.exec(e.slice(r, r + 3));
          return n ? ((t.L = +n[0]), r + n[0].length) : -1;
        }
        function pl(t, e, r) {
          var n = Wu.exec(e.slice(r, r + 6));
          return n ? ((t.L = Math.floor(n[0] / 1e3)), r + n[0].length) : -1;
        }
        function hl(t, e, r) {
          var n = qu.exec(e.slice(r, r + 1));
          return n ? r + n[0].length : -1;
        }
        function dl(t, e, r) {
          var n = Wu.exec(e.slice(r));
          return n ? ((t.Q = +n[0]), r + n[0].length) : -1;
        }
        function yl(t, e, r) {
          var n = Wu.exec(e.slice(r));
          return n ? ((t.s = +n[0]), r + n[0].length) : -1;
        }
        function vl(t, e) {
          return Hu(t.getDate(), e, 2);
        }
        function ml(t, e) {
          return Hu(t.getHours(), e, 2);
        }
        function bl(t, e) {
          return Hu(t.getHours() % 12 || 12, e, 2);
        }
        function gl(t, e) {
          return Hu(1 + uu.count(Mu(t), t), e, 3);
        }
        function xl(t, e) {
          return Hu(t.getMilliseconds(), e, 3);
        }
        function wl(t, e) {
          return xl(t, e) + "000";
        }
        function Ol(t, e) {
          return Hu(t.getMonth() + 1, e, 2);
        }
        function jl(t, e) {
          return Hu(t.getMinutes(), e, 2);
        }
        function Sl(t, e) {
          return Hu(t.getSeconds(), e, 2);
        }
        function El(t) {
          var e = t.getDay();
          return 0 === e ? 7 : e;
        }
        function Pl(t, e) {
          return Hu(pu.count(Mu(t) - 1, t), e, 2);
        }
        function Al(t) {
          var e = t.getDay();
          return e >= 4 || 0 === e ? vu(t) : vu.ceil(t);
        }
        function kl(t, e) {
          return (
            (t = Al(t)), Hu(vu.count(Mu(t), t) + (4 === Mu(t).getDay()), e, 2)
          );
        }
        function Ml(t) {
          return t.getDay();
        }
        function Tl(t, e) {
          return Hu(hu.count(Mu(t) - 1, t), e, 2);
        }
        function _l(t, e) {
          return Hu(t.getFullYear() % 100, e, 2);
        }
        function Cl(t, e) {
          return Hu((t = Al(t)).getFullYear() % 100, e, 2);
        }
        function Dl(t, e) {
          return Hu(t.getFullYear() % 1e4, e, 4);
        }
        function Il(t, e) {
          var r = t.getDay();
          return Hu(
            (t = r >= 4 || 0 === r ? vu(t) : vu.ceil(t)).getFullYear() % 1e4,
            e,
            4
          );
        }
        function Nl(t) {
          var e = t.getTimezoneOffset();
          return (
            (e > 0 ? "-" : ((e *= -1), "+")) +
            Hu((e / 60) | 0, "0", 2) +
            Hu(e % 60, "0", 2)
          );
        }
        function Bl(t, e) {
          return Hu(t.getUTCDate(), e, 2);
        }
        function Ll(t, e) {
          return Hu(t.getUTCHours(), e, 2);
        }
        function Rl(t, e) {
          return Hu(t.getUTCHours() % 12 || 12, e, 2);
        }
        function zl(t, e) {
          return Hu(1 + lu.count(Tu(t), t), e, 3);
        }
        function Ul(t, e) {
          return Hu(t.getUTCMilliseconds(), e, 3);
        }
        function $l(t, e) {
          return Ul(t, e) + "000";
        }
        function Fl(t, e) {
          return Hu(t.getUTCMonth() + 1, e, 2);
        }
        function Wl(t, e) {
          return Hu(t.getUTCMinutes(), e, 2);
        }
        function ql(t, e) {
          return Hu(t.getUTCSeconds(), e, 2);
        }
        function Xl(t) {
          var e = t.getUTCDay();
          return 0 === e ? 7 : e;
        }
        function Hl(t, e) {
          return Hu(xu.count(Tu(t) - 1, t), e, 2);
        }
        function Vl(t) {
          var e = t.getUTCDay();
          return e >= 4 || 0 === e ? Su(t) : Su.ceil(t);
        }
        function Gl(t, e) {
          return (
            (t = Vl(t)),
            Hu(Su.count(Tu(t), t) + (4 === Tu(t).getUTCDay()), e, 2)
          );
        }
        function Yl(t) {
          return t.getUTCDay();
        }
        function Kl(t, e) {
          return Hu(wu.count(Tu(t) - 1, t), e, 2);
        }
        function Zl(t, e) {
          return Hu(t.getUTCFullYear() % 100, e, 2);
        }
        function Jl(t, e) {
          return Hu((t = Vl(t)).getUTCFullYear() % 100, e, 2);
        }
        function Ql(t, e) {
          return Hu(t.getUTCFullYear() % 1e4, e, 4);
        }
        function ts(t, e) {
          var r = t.getUTCDay();
          return Hu(
            (t = r >= 4 || 0 === r ? Su(t) : Su.ceil(t)).getUTCFullYear() % 1e4,
            e,
            4
          );
        }
        function es() {
          return "+0000";
        }
        function rs() {
          return "%";
        }
        function ns(t) {
          return +t;
        }
        function os(t) {
          return Math.floor(+t / 1e3);
        }
        function is(t) {
          return new Date(t);
        }
        function as(t) {
          return t instanceof Date ? +t : +new Date(+t);
        }
        function cs(t, e, r, n, o, i, a, c, u, l) {
          var s = Ja(),
            f = s.invert,
            p = s.domain,
            h = l(".%L"),
            d = l(":%S"),
            y = l("%I:%M"),
            v = l("%I %p"),
            m = l("%a %d"),
            b = l("%b %d"),
            g = l("%B"),
            x = l("%Y");
          function w(t) {
            return (
              u(t) < t
                ? h
                : c(t) < t
                ? d
                : a(t) < t
                ? y
                : i(t) < t
                ? v
                : n(t) < t
                ? o(t) < t
                  ? m
                  : b
                : r(t) < t
                ? g
                : x
            )(t);
          }
          return (
            (s.invert = function (t) {
              return new Date(f(t));
            }),
            (s.domain = function (t) {
              return arguments.length ? p(Array.from(t, as)) : p().map(is);
            }),
            (s.ticks = function (e) {
              var r = p();
              return t(r[0], r[r.length - 1], null == e ? 10 : e);
            }),
            (s.tickFormat = function (t, e) {
              return null == e ? w : l(e);
            }),
            (s.nice = function (t) {
              var r = p();
              return (
                (t && "function" == typeof t.range) ||
                  (t = e(r[0], r[r.length - 1], null == t ? 10 : t)),
                t ? p(mc(r, t)) : s
              );
            }),
            (s.copy = function () {
              return Ka(s, cs(t, e, r, n, o, i, a, c, u, l));
            }),
            s
          );
        }
        function us() {
          return Wo.apply(
            cs(Iu, Nu, Mu, Au, pu, uu, au, ou, nu, Uu).domain([
              new Date(2e3, 0, 1),
              new Date(2e3, 0, 2),
            ]),
            arguments
          );
        }
        function ls() {
          return Wo.apply(
            cs(Cu, Du, Tu, ku, xu, lu, cu, iu, nu, $u).domain([
              Date.UTC(2e3, 0, 1),
              Date.UTC(2e3, 0, 2),
            ]),
            arguments
          );
        }
        function ss() {
          var t,
            e,
            r,
            n,
            o,
            i = 0,
            a = 1,
            c = Ha,
            u = !1;
          function l(e) {
            return null == e || isNaN((e = +e))
              ? o
              : c(
                  0 === r
                    ? 0.5
                    : ((e = (n(e) - t) * r),
                      u ? Math.max(0, Math.min(1, e)) : e)
                );
          }
          function s(t) {
            return function (e) {
              var r, n;
              return arguments.length
                ? (([r, n] = e), (c = t(r, n)), l)
                : [c(0), c(1)];
            };
          }
          return (
            (l.domain = function (o) {
              return arguments.length
                ? (([i, a] = o),
                  (t = n((i = +i))),
                  (e = n((a = +a))),
                  (r = t === e ? 0 : 1 / (e - t)),
                  l)
                : [i, a];
            }),
            (l.clamp = function (t) {
              return arguments.length ? ((u = !!t), l) : u;
            }),
            (l.interpolator = function (t) {
              return arguments.length ? ((c = t), l) : c;
            }),
            (l.range = s(Fa)),
            (l.rangeRound = s(Wa)),
            (l.unknown = function (t) {
              return arguments.length ? ((o = t), l) : o;
            }),
            function (o) {
              return (
                (n = o),
                (t = o(i)),
                (e = o(a)),
                (r = t === e ? 0 : 1 / (e - t)),
                l
              );
            }
          );
        }
        function fs(t, e) {
          return e
            .domain(t.domain())
            .interpolator(t.interpolator())
            .clamp(t.clamp())
            .unknown(t.unknown());
        }
        function ps() {
          var t = dc(ss()(Ha));
          return (
            (t.copy = function () {
              return fs(t, ps());
            }),
            qo.apply(t, arguments)
          );
        }
        function hs() {
          var t = Sc(ss()).domain([1, 10]);
          return (
            (t.copy = function () {
              return fs(t, hs()).base(t.base());
            }),
            qo.apply(t, arguments)
          );
        }
        function ds() {
          var t = kc(ss());
          return (
            (t.copy = function () {
              return fs(t, ds()).constant(t.constant());
            }),
            qo.apply(t, arguments)
          );
        }
        function ys() {
          var t = Dc(ss());
          return (
            (t.copy = function () {
              return fs(t, ys()).exponent(t.exponent());
            }),
            qo.apply(t, arguments)
          );
        }
        function vs() {
          return ys.apply(null, arguments).exponent(0.5);
        }
        function ms() {
          var t = [],
            e = Ha;
          function r(r) {
            if (null != r && !isNaN((r = +r)))
              return e((Gi(t, r, 1) - 1) / (t.length - 1));
          }
          return (
            (r.domain = function (e) {
              if (!arguments.length) return t.slice();
              t = [];
              for (let r of e) null == r || isNaN((r = +r)) || t.push(r);
              return t.sort($i), r;
            }),
            (r.interpolator = function (t) {
              return arguments.length ? ((e = t), r) : e;
            }),
            (r.range = function () {
              return t.map((r, n) => e(n / (t.length - 1)));
            }),
            (r.quantiles = function (e) {
              return Array.from({ length: e + 1 }, (r, n) =>
                (function (t, e, r) {
                  if (
                    ((t = Float64Array.from(
                      (function* (t, e) {
                        if (void 0 === e)
                          for (let e of t)
                            null != e && (e = +e) >= e && (yield e);
                        else {
                          let r = -1;
                          for (let n of t)
                            null != (n = e(n, ++r, t)) &&
                              (n = +n) >= n &&
                              (yield n);
                        }
                      })(t, r)
                    )),
                    (n = t.length) && !isNaN((e = +e)))
                  ) {
                    if (e <= 0 || n < 2) return zc(t);
                    if (e >= 1) return Rc(t);
                    var n,
                      o = (n - 1) * e,
                      i = Math.floor(o),
                      a = Rc($c(t, i).subarray(0, i + 1));
                    return a + (zc(t.subarray(i + 1)) - a) * (o - i);
                  }
                })(t, n / e)
              );
            }),
            (r.copy = function () {
              return ms(e).domain(t);
            }),
            qo.apply(r, arguments)
          );
        }
        function bs() {
          var t,
            e,
            r,
            n,
            o,
            i,
            a,
            c = 0,
            u = 0.5,
            l = 1,
            s = 1,
            f = Ha,
            p = !1;
          function h(t) {
            return isNaN((t = +t))
              ? a
              : ((t = 0.5 + ((t = +i(t)) - e) * (s * t < s * e ? n : o)),
                f(p ? Math.max(0, Math.min(1, t)) : t));
          }
          function d(t) {
            return function (e) {
              var r, n, o;
              return arguments.length
                ? (([r, n, o] = e),
                  (f = (function (t, e) {
                    void 0 === e && ((e = t), (t = Fa));
                    for (
                      var r = 0,
                        n = e.length - 1,
                        o = e[0],
                        i = new Array(n < 0 ? 0 : n);
                      r < n;

                    )
                      i[r] = t(o, (o = e[++r]));
                    return function (t) {
                      var e = Math.max(
                        0,
                        Math.min(n - 1, Math.floor((t *= n)))
                      );
                      return i[e](t - e);
                    };
                  })(t, [r, n, o])),
                  h)
                : [f(0), f(0.5), f(1)];
            };
          }
          return (
            (h.domain = function (a) {
              return arguments.length
                ? (([c, u, l] = a),
                  (t = i((c = +c))),
                  (e = i((u = +u))),
                  (r = i((l = +l))),
                  (n = t === e ? 0 : 0.5 / (e - t)),
                  (o = e === r ? 0 : 0.5 / (r - e)),
                  (s = e < t ? -1 : 1),
                  h)
                : [c, u, l];
            }),
            (h.clamp = function (t) {
              return arguments.length ? ((p = !!t), h) : p;
            }),
            (h.interpolator = function (t) {
              return arguments.length ? ((f = t), h) : f;
            }),
            (h.range = d(Fa)),
            (h.rangeRound = d(Wa)),
            (h.unknown = function (t) {
              return arguments.length ? ((a = t), h) : a;
            }),
            function (a) {
              return (
                (i = a),
                (t = a(c)),
                (e = a(u)),
                (r = a(l)),
                (n = t === e ? 0 : 0.5 / (e - t)),
                (o = e === r ? 0 : 0.5 / (r - e)),
                (s = e < t ? -1 : 1),
                h
              );
            }
          );
        }
        function gs() {
          var t = dc(bs()(Ha));
          return (
            (t.copy = function () {
              return fs(t, gs());
            }),
            qo.apply(t, arguments)
          );
        }
        function xs() {
          var t = Sc(bs()).domain([0.1, 1, 10]);
          return (
            (t.copy = function () {
              return fs(t, xs()).base(t.base());
            }),
            qo.apply(t, arguments)
          );
        }
        function ws() {
          var t = kc(bs());
          return (
            (t.copy = function () {
              return fs(t, ws()).constant(t.constant());
            }),
            qo.apply(t, arguments)
          );
        }
        function Os() {
          var t = Dc(bs());
          return (
            (t.copy = function () {
              return fs(t, Os()).exponent(t.exponent());
            }),
            qo.apply(t, arguments)
          );
        }
        function js() {
          return Os.apply(null, arguments).exponent(0.5);
        }
        function Ss(t, e) {
          if ((o = t.length) > 1)
            for (var r, n, o, i = 1, a = t[e[0]], c = a.length; i < o; ++i)
              for (n = a, a = t[e[i]], r = 0; r < c; ++r)
                a[r][1] += a[r][0] = isNaN(n[r][1]) ? n[r][0] : n[r][1];
        }
        function Es(t) {
          return "object" == typeof t && "length" in t ? t : Array.from(t);
        }
        function Ps(t) {
          for (var e = t.length, r = new Array(e); --e >= 0; ) r[e] = e;
          return r;
        }
        function As(t, e) {
          return t[e];
        }
        function ks(t) {
          const e = [];
          return (e.key = t), e;
        }
        (zu = (function (t) {
          var e = t.dateTime,
            r = t.date,
            n = t.time,
            o = t.periods,
            i = t.days,
            a = t.shortDays,
            c = t.months,
            u = t.shortMonths,
            l = Gu(o),
            s = Yu(o),
            f = Gu(i),
            p = Yu(i),
            h = Gu(a),
            d = Yu(a),
            y = Gu(c),
            v = Yu(c),
            m = Gu(u),
            b = Yu(u),
            g = {
              a: function (t) {
                return a[t.getDay()];
              },
              A: function (t) {
                return i[t.getDay()];
              },
              b: function (t) {
                return u[t.getMonth()];
              },
              B: function (t) {
                return c[t.getMonth()];
              },
              c: null,
              d: vl,
              e: vl,
              f: wl,
              g: Cl,
              G: Il,
              H: ml,
              I: bl,
              j: gl,
              L: xl,
              m: Ol,
              M: jl,
              p: function (t) {
                return o[+(t.getHours() >= 12)];
              },
              q: function (t) {
                return 1 + ~~(t.getMonth() / 3);
              },
              Q: ns,
              s: os,
              S: Sl,
              u: El,
              U: Pl,
              V: kl,
              w: Ml,
              W: Tl,
              x: null,
              X: null,
              y: _l,
              Y: Dl,
              Z: Nl,
              "%": rs,
            },
            x = {
              a: function (t) {
                return a[t.getUTCDay()];
              },
              A: function (t) {
                return i[t.getUTCDay()];
              },
              b: function (t) {
                return u[t.getUTCMonth()];
              },
              B: function (t) {
                return c[t.getUTCMonth()];
              },
              c: null,
              d: Bl,
              e: Bl,
              f: $l,
              g: Jl,
              G: ts,
              H: Ll,
              I: Rl,
              j: zl,
              L: Ul,
              m: Fl,
              M: Wl,
              p: function (t) {
                return o[+(t.getUTCHours() >= 12)];
              },
              q: function (t) {
                return 1 + ~~(t.getUTCMonth() / 3);
              },
              Q: ns,
              s: os,
              S: ql,
              u: Xl,
              U: Hl,
              V: Gl,
              w: Yl,
              W: Kl,
              x: null,
              X: null,
              y: Zl,
              Y: Ql,
              Z: es,
              "%": rs,
            },
            w = {
              a: function (t, e, r) {
                var n = h.exec(e.slice(r));
                return n
                  ? ((t.w = d.get(n[0].toLowerCase())), r + n[0].length)
                  : -1;
              },
              A: function (t, e, r) {
                var n = f.exec(e.slice(r));
                return n
                  ? ((t.w = p.get(n[0].toLowerCase())), r + n[0].length)
                  : -1;
              },
              b: function (t, e, r) {
                var n = m.exec(e.slice(r));
                return n
                  ? ((t.m = b.get(n[0].toLowerCase())), r + n[0].length)
                  : -1;
              },
              B: function (t, e, r) {
                var n = y.exec(e.slice(r));
                return n
                  ? ((t.m = v.get(n[0].toLowerCase())), r + n[0].length)
                  : -1;
              },
              c: function (t, r, n) {
                return S(t, e, r, n);
              },
              d: al,
              e: al,
              f: pl,
              g: rl,
              G: el,
              H: ul,
              I: ul,
              j: cl,
              L: fl,
              m: il,
              M: ll,
              p: function (t, e, r) {
                var n = l.exec(e.slice(r));
                return n
                  ? ((t.p = s.get(n[0].toLowerCase())), r + n[0].length)
                  : -1;
              },
              q: ol,
              Q: dl,
              s: yl,
              S: sl,
              u: Zu,
              U: Ju,
              V: Qu,
              w: Ku,
              W: tl,
              x: function (t, e, n) {
                return S(t, r, e, n);
              },
              X: function (t, e, r) {
                return S(t, n, e, r);
              },
              y: rl,
              Y: el,
              Z: nl,
              "%": hl,
            };
          function O(t, e) {
            return function (r) {
              var n,
                o,
                i,
                a = [],
                c = -1,
                u = 0,
                l = t.length;
              for (r instanceof Date || (r = new Date(+r)); ++c < l; )
                37 === t.charCodeAt(c) &&
                  (a.push(t.slice(u, c)),
                  null != (o = Fu[(n = t.charAt(++c))])
                    ? (n = t.charAt(++c))
                    : (o = "e" === n ? " " : "0"),
                  (i = e[n]) && (n = i(r, o)),
                  a.push(n),
                  (u = c + 1));
              return a.push(t.slice(u, c)), a.join("");
            };
          }
          function j(t, e) {
            return function (r) {
              var n,
                o,
                i = Ru(1900, void 0, 1);
              if (S(i, t, (r += ""), 0) != r.length) return null;
              if ("Q" in i) return new Date(i.Q);
              if ("s" in i) return new Date(1e3 * i.s + ("L" in i ? i.L : 0));
              if (
                (e && !("Z" in i) && (i.Z = 0),
                "p" in i && (i.H = (i.H % 12) + 12 * i.p),
                void 0 === i.m && (i.m = "q" in i ? i.q : 0),
                "V" in i)
              ) {
                if (i.V < 1 || i.V > 53) return null;
                "w" in i || (i.w = 1),
                  "Z" in i
                    ? ((o = (n = Lu(Ru(i.y, 0, 1))).getUTCDay()),
                      (n = o > 4 || 0 === o ? wu.ceil(n) : wu(n)),
                      (n = lu.offset(n, 7 * (i.V - 1))),
                      (i.y = n.getUTCFullYear()),
                      (i.m = n.getUTCMonth()),
                      (i.d = n.getUTCDate() + ((i.w + 6) % 7)))
                    : ((o = (n = Bu(Ru(i.y, 0, 1))).getDay()),
                      (n = o > 4 || 0 === o ? hu.ceil(n) : hu(n)),
                      (n = uu.offset(n, 7 * (i.V - 1))),
                      (i.y = n.getFullYear()),
                      (i.m = n.getMonth()),
                      (i.d = n.getDate() + ((i.w + 6) % 7)));
              } else
                ("W" in i || "U" in i) &&
                  ("w" in i || (i.w = "u" in i ? i.u % 7 : "W" in i ? 1 : 0),
                  (o =
                    "Z" in i
                      ? Lu(Ru(i.y, 0, 1)).getUTCDay()
                      : Bu(Ru(i.y, 0, 1)).getDay()),
                  (i.m = 0),
                  (i.d =
                    "W" in i
                      ? ((i.w + 6) % 7) + 7 * i.W - ((o + 5) % 7)
                      : i.w + 7 * i.U - ((o + 6) % 7)));
              return "Z" in i
                ? ((i.H += (i.Z / 100) | 0), (i.M += i.Z % 100), Lu(i))
                : Bu(i);
            };
          }
          function S(t, e, r, n) {
            for (var o, i, a = 0, c = e.length, u = r.length; a < c; ) {
              if (n >= u) return -1;
              if (37 === (o = e.charCodeAt(a++))) {
                if (
                  ((o = e.charAt(a++)),
                  !(i = w[o in Fu ? e.charAt(a++) : o]) || (n = i(t, r, n)) < 0)
                )
                  return -1;
              } else if (o != r.charCodeAt(n++)) return -1;
            }
            return n;
          }
          return (
            (g.x = O(r, g)),
            (g.X = O(n, g)),
            (g.c = O(e, g)),
            (x.x = O(r, x)),
            (x.X = O(n, x)),
            (x.c = O(e, x)),
            {
              format: function (t) {
                var e = O((t += ""), g);
                return (
                  (e.toString = function () {
                    return t;
                  }),
                  e
                );
              },
              parse: function (t) {
                var e = j((t += ""), !1);
                return (
                  (e.toString = function () {
                    return t;
                  }),
                  e
                );
              },
              utcFormat: function (t) {
                var e = O((t += ""), x);
                return (
                  (e.toString = function () {
                    return t;
                  }),
                  e
                );
              },
              utcParse: function (t) {
                var e = j((t += ""), !0);
                return (
                  (e.toString = function () {
                    return t;
                  }),
                  e
                );
              },
            }
          );
        })({
          dateTime: "%x, %X",
          date: "%-m/%-d/%Y",
          time: "%-I:%M:%S %p",
          periods: ["AM", "PM"],
          days: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          months: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          shortMonths: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        })),
          (Uu = zu.format),
          zu.parse,
          ($u = zu.utcFormat),
          zu.utcParse,
          Array.prototype.slice;
        var Ms = r(4506),
          Ts = r.n(Ms),
          _s = r(1684),
          Cs = r.n(_s),
          Ds = r(7307),
          Is = r.n(Ds),
          Ns = r(2404),
          Bs = r.n(Ns),
          Ls = r(8351),
          Rs = r.n(Ls);
        function zs(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
          return n;
        }
        var Us = function (t) {
            return t;
          },
          $s = { "@@functional/placeholder": !0 },
          Fs = function (t) {
            return t === $s;
          },
          Ws = function (t) {
            return function e() {
              return 0 === arguments.length ||
                (1 === arguments.length &&
                  Fs(arguments.length <= 0 ? void 0 : arguments[0]))
                ? e
                : t.apply(void 0, arguments);
            };
          },
          qs = function t(e, r) {
            return 1 === e
              ? r
              : Ws(function () {
                  for (
                    var n = arguments.length, o = new Array(n), i = 0;
                    i < n;
                    i++
                  )
                    o[i] = arguments[i];
                  var a = o.filter(function (t) {
                    return t !== $s;
                  }).length;
                  return a >= e
                    ? r.apply(void 0, o)
                    : t(
                        e - a,
                        Ws(function () {
                          for (
                            var t = arguments.length, e = new Array(t), n = 0;
                            n < t;
                            n++
                          )
                            e[n] = arguments[n];
                          var i,
                            a = o.map(function (t) {
                              return Fs(t) ? e.shift() : t;
                            });
                          return r.apply(
                            void 0,
                            ((i = a),
                            (function (t) {
                              if (Array.isArray(t)) return zs(t);
                            })(i) ||
                              (function (t) {
                                if (
                                  "undefined" != typeof Symbol &&
                                  Symbol.iterator in Object(t)
                                )
                                  return Array.from(t);
                              })(i) ||
                              (function (t, e) {
                                if (t) {
                                  if ("string" == typeof t) return zs(t, e);
                                  var r = Object.prototype.toString
                                    .call(t)
                                    .slice(8, -1);
                                  return (
                                    "Object" === r &&
                                      t.constructor &&
                                      (r = t.constructor.name),
                                    "Map" === r || "Set" === r
                                      ? Array.from(t)
                                      : "Arguments" === r ||
                                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                          r
                                        )
                                      ? zs(t, e)
                                      : void 0
                                  );
                                }
                              })(i) ||
                              (function () {
                                throw new TypeError(
                                  "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                                );
                              })()).concat(e)
                          );
                        })
                      );
                });
          },
          Xs = function (t) {
            return qs(t.length, t);
          },
          Hs = function (t, e) {
            for (var r = [], n = t; n < e; ++n) r[n - t] = n;
            return r;
          },
          Vs = Xs(function (t, e) {
            return Array.isArray(e)
              ? e.map(t)
              : Object.keys(e)
                  .map(function (t) {
                    return e[t];
                  })
                  .map(t);
          }),
          Gs = function () {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
              e[r] = arguments[r];
            if (!e.length) return Us;
            var n = e.reverse(),
              o = n[0],
              i = n.slice(1);
            return function () {
              return i.reduce(function (t, e) {
                return e(t);
              }, o.apply(void 0, arguments));
            };
          },
          Ys = function (t) {
            return Array.isArray(t)
              ? t.reverse()
              : t.split("").reverse.join("");
          },
          Ks = function (t) {
            var e = null,
              r = null;
            return function () {
              for (
                var n = arguments.length, o = new Array(n), i = 0;
                i < n;
                i++
              )
                o[i] = arguments[i];
              return e &&
                o.every(function (t, r) {
                  return t === e[r];
                })
                ? r
                : ((e = o), (r = t.apply(void 0, o)));
            };
          },
          Zs = Xs(function (t, e, r) {
            var n = +t;
            return n + r * (+e - n);
          }),
          Js = Xs(function (t, e, r) {
            var n = e - +t;
            return (r - t) / (n || 1 / 0);
          }),
          Qs = Xs(function (t, e, r) {
            var n = e - +t;
            return (n = n || 1 / 0), Math.max(0, Math.min(1, (r - t) / n));
          });
        const tf = {
          rangeStep: function (t, e, r) {
            for (var n = new (Rs())(t), o = 0, i = []; n.lt(e) && o < 1e5; )
              i.push(n.toNumber()), (n = n.add(r)), o++;
            return i;
          },
          getDigitCount: function (t) {
            return 0 === t
              ? 1
              : Math.floor(new (Rs())(t).abs().log(10).toNumber()) + 1;
          },
          interpolateNumber: Zs,
          uninterpolateNumber: Js,
          uninterpolateTruncation: Qs,
        };
        function ef(t) {
          return (
            (function (t) {
              if (Array.isArray(t)) return of(t);
            })(t) ||
            (function (t) {
              if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
                return Array.from(t);
            })(t) ||
            nf(t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function rf(t, e) {
          return (
            (function (t) {
              if (Array.isArray(t)) return t;
            })(t) ||
            (function (t, e) {
              if (
                "undefined" != typeof Symbol &&
                Symbol.iterator in Object(t)
              ) {
                var r = [],
                  _n = !0,
                  n = !1,
                  o = void 0;
                try {
                  for (
                    var i, a = t[Symbol.iterator]();
                    !(_n = (i = a.next()).done) &&
                    (r.push(i.value), !e || r.length !== e);
                    _n = !0
                  );
                } catch (t) {
                  (n = !0), (o = t);
                } finally {
                  try {
                    _n || null == a.return || a.return();
                  } finally {
                    if (n) throw o;
                  }
                }
                return r;
              }
            })(t, e) ||
            nf(t, e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function nf(t, e) {
          if (t) {
            if ("string" == typeof t) return of(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            return (
              "Object" === r && t.constructor && (r = t.constructor.name),
              "Map" === r || "Set" === r
                ? Array.from(t)
                : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? of(t, e)
                : void 0
            );
          }
        }
        function of(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
          return n;
        }
        function af(t) {
          var e = rf(t, 2),
            r = e[0],
            n = e[1],
            o = r,
            i = n;
          return r > n && ((o = n), (i = r)), [o, i];
        }
        function cf(t, e, r) {
          if (t.lte(0)) return new (Rs())(0);
          var n = tf.getDigitCount(t.toNumber()),
            o = new (Rs())(10).pow(n),
            i = t.div(o),
            a = 1 !== n ? 0.05 : 0.1,
            c = new (Rs())(Math.ceil(i.div(a).toNumber())).add(r).mul(a).mul(o);
          return e ? c : new (Rs())(Math.ceil(c));
        }
        function uf(t, e, r) {
          var n = 1,
            o = new (Rs())(t);
          if (!o.isint() && r) {
            var i = Math.abs(t);
            i < 1
              ? ((n = new (Rs())(10).pow(tf.getDigitCount(t) - 1)),
                (o = new (Rs())(Math.floor(o.div(n).toNumber())).mul(n)))
              : i > 1 && (o = new (Rs())(Math.floor(t)));
          } else
            0 === t
              ? (o = new (Rs())(Math.floor((e - 1) / 2)))
              : r || (o = new (Rs())(Math.floor(t)));
          var a = Math.floor((e - 1) / 2);
          return Gs(
            Vs(function (t) {
              return o.add(new (Rs())(t - a).mul(n)).toNumber();
            }),
            Hs
          )(0, e);
        }
        function lf(t, e, r, n) {
          var o =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          if (!Number.isFinite((e - t) / (r - 1)))
            return {
              step: new (Rs())(0),
              tickMin: new (Rs())(0),
              tickMax: new (Rs())(0),
            };
          var i,
            a = cf(new (Rs())(e).sub(t).div(r - 1), n, o);
          i =
            t <= 0 && e >= 0
              ? new (Rs())(0)
              : (i = new (Rs())(t).add(e).div(2)).sub(new (Rs())(i).mod(a));
          var c = Math.ceil(i.sub(t).div(a).toNumber()),
            u = Math.ceil(new (Rs())(e).sub(i).div(a).toNumber()),
            l = c + u + 1;
          return l > r
            ? lf(t, e, r, n, o + 1)
            : (l < r &&
                ((u = e > 0 ? u + (r - l) : u), (c = e > 0 ? c : c + (r - l))),
              {
                step: a,
                tickMin: i.sub(new (Rs())(c).mul(a)),
                tickMax: i.add(new (Rs())(u).mul(a)),
              });
        }
        var sf = Ks(function (t) {
            var e = rf(t, 2),
              r = e[0],
              n = e[1],
              o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 6,
              i =
                !(arguments.length > 2 && void 0 !== arguments[2]) ||
                arguments[2],
              a = Math.max(o, 2),
              c = rf(af([r, n]), 2),
              u = c[0],
              l = c[1];
            if (u === -1 / 0 || l === 1 / 0) {
              var s =
                l === 1 / 0
                  ? [u].concat(
                      ef(
                        Hs(0, o - 1).map(function () {
                          return 1 / 0;
                        })
                      )
                    )
                  : [].concat(
                      ef(
                        Hs(0, o - 1).map(function () {
                          return -1 / 0;
                        })
                      ),
                      [l]
                    );
              return r > n ? Ys(s) : s;
            }
            if (u === l) return uf(u, o, i);
            var f = lf(u, l, a, i),
              p = f.step,
              h = f.tickMin,
              d = f.tickMax,
              y = tf.rangeStep(h, d.add(new (Rs())(0.1).mul(p)), p);
            return r > n ? Ys(y) : y;
          }),
          ff =
            (Ks(function (t) {
              var e = rf(t, 2),
                r = e[0],
                n = e[1],
                o =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 6,
                i =
                  !(arguments.length > 2 && void 0 !== arguments[2]) ||
                  arguments[2],
                a = Math.max(o, 2),
                c = rf(af([r, n]), 2),
                u = c[0],
                l = c[1];
              if (u === -1 / 0 || l === 1 / 0) return [r, n];
              if (u === l) return uf(u, o, i);
              var s = cf(new (Rs())(l).sub(u).div(a - 1), i, 0),
                f = Gs(
                  Vs(function (t) {
                    return new (Rs())(u).add(new (Rs())(t).mul(s)).toNumber();
                  }),
                  Hs
                )(0, a).filter(function (t) {
                  return t >= u && t <= l;
                });
              return r > n ? Ys(f) : f;
            }),
            Ks(function (t, e) {
              var r = rf(t, 2),
                n = r[0],
                o = r[1],
                i =
                  !(arguments.length > 2 && void 0 !== arguments[2]) ||
                  arguments[2],
                a = rf(af([n, o]), 2),
                c = a[0],
                u = a[1];
              if (c === -1 / 0 || u === 1 / 0) return [n, o];
              if (c === u) return [c];
              var l = Math.max(e, 2),
                s = cf(new (Rs())(u).sub(c).div(l - 1), i, 0),
                f = [].concat(
                  ef(
                    tf.rangeStep(
                      new (Rs())(c),
                      new (Rs())(u).sub(new (Rs())(0.99).mul(s)),
                      s
                    )
                  ),
                  [u]
                );
              return n > o ? Ys(f) : f;
            })),
          pf = [
            "offset",
            "layout",
            "width",
            "dataKey",
            "data",
            "dataPointFormatter",
            "xAxis",
            "yAxis",
          ];
        function hf() {
          return (
            (hf = Object.assign
              ? Object.assign.bind()
              : function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var n in r)
                      Object.prototype.hasOwnProperty.call(r, n) &&
                        (t[n] = r[n]);
                  }
                  return t;
                }),
            hf.apply(this, arguments)
          );
        }
        function df(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
          return n;
        }
        function yf(t) {
          var e = t.offset,
            r = t.layout,
            n = t.width,
            o = t.dataKey,
            a = t.data,
            c = t.dataPointFormatter,
            u = t.xAxis,
            l = t.yAxis,
            s = (function (t, e) {
              if (null == t) return {};
              var r,
                n,
                o = (function (t, e) {
                  if (null == t) return {};
                  var r,
                    n,
                    o = {},
                    i = Object.keys(t);
                  for (n = 0; n < i.length; n++)
                    (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
                  return o;
                })(t, e);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                for (n = 0; n < i.length; n++)
                  (r = i[n]),
                    e.indexOf(r) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(t, r) &&
                        (o[r] = t[r]));
              }
              return o;
            })(t, pf),
            f = ot(s, !1);
          "x" === t.direction && "number" !== u.type && xt(!1);
          var p = a.map(function (t) {
            var a = c(t, o),
              s = a.x,
              p = a.y,
              h = a.value,
              d = a.errorVal;
            if (!d) return null;
            var y,
              v,
              m,
              b,
              g = [];
            if (Array.isArray(d)) {
              var x =
                ((b = 2),
                (function (t) {
                  if (Array.isArray(t)) return t;
                })((m = d)) ||
                  (function (t, e) {
                    var r =
                      null == t
                        ? null
                        : ("undefined" != typeof Symbol &&
                            t[Symbol.iterator]) ||
                          t["@@iterator"];
                    if (null != r) {
                      var n,
                        o,
                        i,
                        a,
                        c = [],
                        u = !0,
                        l = !1;
                      try {
                        if (((i = (r = r.call(t)).next), 0 === e)) {
                          if (Object(r) !== r) return;
                          u = !1;
                        } else
                          for (
                            ;
                            !(u = (n = i.call(r)).done) &&
                            (c.push(n.value), c.length !== e);
                            u = !0
                          );
                      } catch (t) {
                        (l = !0), (o = t);
                      } finally {
                        try {
                          if (
                            !u &&
                            null != r.return &&
                            ((a = r.return()), Object(a) !== a)
                          )
                            return;
                        } finally {
                          if (l) throw o;
                        }
                      }
                      return c;
                    }
                  })(m, b) ||
                  (function (t, e) {
                    if (t) {
                      if ("string" == typeof t) return df(t, e);
                      var r = Object.prototype.toString.call(t).slice(8, -1);
                      return (
                        "Object" === r &&
                          t.constructor &&
                          (r = t.constructor.name),
                        "Map" === r || "Set" === r
                          ? Array.from(t)
                          : "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          ? df(t, e)
                          : void 0
                      );
                    }
                  })(m, b) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })());
              (y = x[0]), (v = x[1]);
            } else y = v = d;
            if ("vertical" === r) {
              var w = u.scale,
                O = p + e,
                j = O + n,
                S = O - n,
                E = w(h - y),
                P = w(h + v);
              g.push({ x1: P, y1: j, x2: P, y2: S }),
                g.push({ x1: E, y1: O, x2: P, y2: O }),
                g.push({ x1: E, y1: j, x2: E, y2: S });
            } else if ("horizontal" === r) {
              var A = l.scale,
                k = s + e,
                M = k - n,
                T = k + n,
                _ = A(h - y),
                C = A(h + v);
              g.push({ x1: M, y1: C, x2: T, y2: C }),
                g.push({ x1: k, y1: _, x2: k, y2: C }),
                g.push({ x1: M, y1: _, x2: T, y2: _ });
            }
            return i().createElement(
              Pt,
              hf(
                {
                  className: "recharts-errorBar",
                  key: "bar-".concat(
                    g.map(function (t) {
                      return ""
                        .concat(t.x1, "-")
                        .concat(t.x2, "-")
                        .concat(t.y1, "-")
                        .concat(t.y2);
                    })
                  ),
                },
                f
              ),
              g.map(function (t) {
                return i().createElement(
                  "line",
                  hf({}, t, {
                    key: "line-"
                      .concat(t.x1, "-")
                      .concat(t.x2, "-")
                      .concat(t.y1, "-")
                      .concat(t.y2),
                  })
                );
              })
            );
          });
          return i().createElement(Pt, { className: "recharts-errorBars" }, p);
        }
        function vf(t) {
          return (
            (vf =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            vf(t)
          );
        }
        function mf(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function bf(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? mf(Object(r), !0).forEach(function (e) {
                  gf(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : mf(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e)
                  );
                });
          }
          return t;
        }
        function gf(t, e, r) {
          var n;
          return (
            (n = (function (t, e) {
              if ("object" != vf(t) || !t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, "string");
                if ("object" != vf(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(e)),
            (e = "symbol" == vf(n) ? n : String(n)) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        (yf.defaultProps = {
          stroke: "black",
          strokeWidth: 1.5,
          width: 5,
          offset: 0,
          layout: "horizontal",
        }),
          (yf.displayName = "ErrorBar");
        var xf = function (t) {
          var e,
            r = t.children,
            n = t.formattedGraphicalItems,
            o = t.legendWidth,
            i = t.legendContent,
            a = et(r, Ar);
          return a
            ? ((e =
                a.props && a.props.payload
                  ? a.props && a.props.payload
                  : "children" === i
                  ? (n || []).reduce(function (t, e) {
                      var r = e.item,
                        n = e.props,
                        o = n.sectors || n.data || [];
                      return t.concat(
                        o.map(function (t) {
                          return {
                            type: a.props.iconType || r.props.legendType,
                            value: t.name,
                            color: t.fill,
                            payload: t,
                          };
                        })
                      );
                    }, [])
                  : (n || []).map(function (t) {
                      var e = t.item,
                        r = e.props,
                        n = r.dataKey,
                        o = r.name,
                        i = r.legendType;
                      return {
                        inactive: r.hide,
                        dataKey: n,
                        type: a.props.iconType || i || "square",
                        color: Mf(e),
                        value: o || n,
                        payload: e.props,
                      };
                    })),
              bf(
                bf(bf({}, a.props), Ar.getWithHeight(a, o)),
                {},
                { payload: e, item: a }
              ))
            : null;
        };
        function wf(t) {
          return (
            (wf =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            wf(t)
          );
        }
        function Of(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function jf(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? Of(Object(r), !0).forEach(function (e) {
                  Sf(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : Of(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e)
                  );
                });
          }
          return t;
        }
        function Sf(t, e, r) {
          var n;
          return (
            (n = (function (t, e) {
              if ("object" != wf(t) || !t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, "string");
                if ("object" != wf(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(e)),
            (e = "symbol" == wf(n) ? n : String(n)) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        function Ef(t) {
          return (
            (function (t) {
              if (Array.isArray(t)) return Pf(t);
            })(t) ||
            (function (t) {
              if (
                ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
                null != t["@@iterator"]
              )
                return Array.from(t);
            })(t) ||
            (function (t, e) {
              if (t) {
                if ("string" == typeof t) return Pf(t, e);
                var r = Object.prototype.toString.call(t).slice(8, -1);
                return (
                  "Object" === r && t.constructor && (r = t.constructor.name),
                  "Map" === r || "Set" === r
                    ? Array.from(t)
                    : "Arguments" === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? Pf(t, e)
                    : void 0
                );
              }
            })(t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function Pf(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
          return n;
        }
        function Af(t, e, r) {
          return C()(t) || C()(e) ? r : j(e) ? m()(t, e, r) : I()(e) ? e(t) : r;
        }
        function kf(t, e, r, n) {
          var o = Is()(t, function (t) {
            return Af(t, e);
          });
          if ("number" === r) {
            var i = o.filter(function (t) {
              return O(t) || parseFloat(t);
            });
            return i.length ? [Cs()(i), Ts()(i)] : [1 / 0, -1 / 0];
          }
          return (
            n
              ? o.filter(function (t) {
                  return !C()(t);
                })
              : o
          ).map(function (t) {
            return j(t) || t instanceof Date ? t : "";
          });
        }
        var Mf = function (t) {
            var e,
              r = t.type.displayName,
              n = t.props,
              o = n.stroke,
              i = n.fill;
            switch (r) {
              case "Line":
                e = o;
                break;
              case "Area":
              case "Radar":
                e = o && "none" !== o ? o : i;
                break;
              default:
                e = i;
            }
            return e;
          },
          Tf = function (t, e, r, n, o) {
            var i = tt(e.props.children, yf).filter(function (t) {
              return (function (t, e, r) {
                return (
                  !!C()(e) ||
                  ("horizontal" === t
                    ? "yAxis" === e
                    : "vertical" === t || "x" === r
                    ? "xAxis" === e
                    : "y" !== r || "yAxis" === e)
                );
              })(n, o, t.props.direction);
            });
            if (i && i.length) {
              var a = i.map(function (t) {
                return t.props.dataKey;
              });
              return t.reduce(
                function (t, e) {
                  var n = Af(e, r);
                  if (C()(n)) return t;
                  var o = Array.isArray(n) ? [Cs()(n), Ts()(n)] : [n, n],
                    i = a.reduce(
                      function (t, r) {
                        var n = Af(e, r, 0),
                          i = o[0] - Math.abs(Array.isArray(n) ? n[0] : n),
                          a = o[1] + Math.abs(Array.isArray(n) ? n[1] : n);
                        return [Math.min(i, t[0]), Math.max(a, t[1])];
                      },
                      [1 / 0, -1 / 0]
                    );
                  return [Math.min(i[0], t[0]), Math.max(i[1], t[1])];
                },
                [1 / 0, -1 / 0]
              );
            }
            return null;
          },
          _f = function (t, e, r, n, o) {
            var i = e.map(function (e) {
              var i = e.props.dataKey;
              return ("number" === r && i && Tf(t, e, i, n)) || kf(t, i, r, o);
            });
            if ("number" === r)
              return i.reduce(
                function (t, e) {
                  return [Math.min(t[0], e[0]), Math.max(t[1], e[1])];
                },
                [1 / 0, -1 / 0]
              );
            var a = {};
            return i.reduce(function (t, e) {
              for (var r = 0, n = e.length; r < n; r++)
                a[e[r]] || ((a[e[r]] = !0), t.push(e[r]));
              return t;
            }, []);
          },
          Cf = function (t, e) {
            return (
              ("horizontal" === t && "xAxis" === e) ||
              ("vertical" === t && "yAxis" === e) ||
              ("centric" === t && "angleAxis" === e) ||
              ("radial" === t && "radiusAxis" === e)
            );
          },
          Df = function (t, e, r, n) {
            if (n)
              return t.map(function (t) {
                return t.coordinate;
              });
            var o,
              i,
              a = t.map(function (t) {
                return (
                  t.coordinate === e && (o = !0),
                  t.coordinate === r && (i = !0),
                  t.coordinate
                );
              });
            return o || a.push(e), i || a.push(r), a;
          },
          If = function (t, e, r) {
            if (!t) return null;
            var n = t.scale,
              o = t.duplicateDomain,
              i = t.type,
              a = t.range,
              c = "scaleBand" === t.realScaleType ? n.bandwidth() / 2 : 2,
              u =
                (e || r) && "category" === i && n.bandwidth
                  ? n.bandwidth() / c
                  : 0;
            return (
              (u =
                "angleAxis" === t.axisType &&
                (null == a ? void 0 : a.length) >= 2
                  ? 2 * x(a[0] - a[1]) * u
                  : u),
              e && (t.ticks || t.niceTicks)
                ? (t.ticks || t.niceTicks)
                    .map(function (t) {
                      var e = o ? o.indexOf(t) : t;
                      return { coordinate: n(e) + u, value: t, offset: u };
                    })
                    .filter(function (t) {
                      return !y()(t.coordinate);
                    })
                : t.isCategorical && t.categoricalDomain
                ? t.categoricalDomain.map(function (t, e) {
                    return {
                      coordinate: n(t) + u,
                      value: t,
                      index: e,
                      offset: u,
                    };
                  })
                : n.ticks && !r
                ? n.ticks(t.tickCount).map(function (t) {
                    return { coordinate: n(t) + u, value: t, offset: u };
                  })
                : n.domain().map(function (t, e) {
                    return {
                      coordinate: n(t) + u,
                      value: o ? o[t] : t,
                      index: e,
                      offset: u,
                    };
                  })
            );
          },
          Nf = new WeakMap(),
          Bf = function (t, e) {
            if ("function" != typeof e) return t;
            Nf.has(t) || Nf.set(t, new WeakMap());
            var r = Nf.get(t);
            if (r.has(e)) return r.get(e);
            var n = function () {
              t.apply(void 0, arguments), e.apply(void 0, arguments);
            };
            return r.set(e, n), n;
          },
          Lf = 1e-4,
          Rf = {
            sign: function (t) {
              var e = t.length;
              if (!(e <= 0))
                for (var r = 0, n = t[0].length; r < n; ++r)
                  for (var o = 0, i = 0, a = 0; a < e; ++a) {
                    var c = y()(t[a][r][1]) ? t[a][r][0] : t[a][r][1];
                    c >= 0
                      ? ((t[a][r][0] = o),
                        (t[a][r][1] = o + c),
                        (o = t[a][r][1]))
                      : ((t[a][r][0] = i),
                        (t[a][r][1] = i + c),
                        (i = t[a][r][1]));
                  }
            },
            expand: function (t, e) {
              if ((n = t.length) > 0) {
                for (var r, n, o, i = 0, a = t[0].length; i < a; ++i) {
                  for (o = r = 0; r < n; ++r) o += t[r][i][1] || 0;
                  if (o) for (r = 0; r < n; ++r) t[r][i][1] /= o;
                }
                Ss(t, e);
              }
            },
            none: Ss,
            silhouette: function (t, e) {
              if ((r = t.length) > 0) {
                for (var r, n = 0, o = t[e[0]], i = o.length; n < i; ++n) {
                  for (var a = 0, c = 0; a < r; ++a) c += t[a][n][1] || 0;
                  o[n][1] += o[n][0] = -c / 2;
                }
                Ss(t, e);
              }
            },
            wiggle: function (t, e) {
              if ((o = t.length) > 0 && (n = (r = t[e[0]]).length) > 0) {
                for (var r, n, o, i = 0, a = 1; a < n; ++a) {
                  for (var c = 0, u = 0, l = 0; c < o; ++c) {
                    for (
                      var s = t[e[c]],
                        f = s[a][1] || 0,
                        p = (f - (s[a - 1][1] || 0)) / 2,
                        h = 0;
                      h < c;
                      ++h
                    ) {
                      var d = t[e[h]];
                      p += (d[a][1] || 0) - (d[a - 1][1] || 0);
                    }
                    (u += f), (l += p * f);
                  }
                  (r[a - 1][1] += r[a - 1][0] = i), u && (i -= l / u);
                }
                (r[a - 1][1] += r[a - 1][0] = i), Ss(t, e);
              }
            },
            positive: function (t) {
              var e = t.length;
              if (!(e <= 0))
                for (var r = 0, n = t[0].length; r < n; ++r)
                  for (var o = 0, i = 0; i < e; ++i) {
                    var a = y()(t[i][r][1]) ? t[i][r][0] : t[i][r][1];
                    a >= 0
                      ? ((t[i][r][0] = o),
                        (t[i][r][1] = o + a),
                        (o = t[i][r][1]))
                      : ((t[i][r][0] = 0), (t[i][r][1] = 0));
                  }
            },
          },
          zf = function (t, e, r) {
            var n = e.map(function (t) {
                return t.props.dataKey;
              }),
              o = Rf[r],
              i = (function () {
                var t = ze([]),
                  e = Ps,
                  r = Ss,
                  n = As;
                function o(o) {
                  var i,
                    a,
                    c = Array.from(t.apply(this, arguments), ks),
                    u = c.length,
                    l = -1;
                  for (const t of o)
                    for (i = 0, ++l; i < u; ++i)
                      (c[i][l] = [0, +n(t, c[i].key, l, o)]).data = t;
                  for (i = 0, a = Es(e(c)); i < u; ++i) c[a[i]].index = i;
                  return r(c, a), c;
                }
                return (
                  (o.keys = function (e) {
                    return arguments.length
                      ? ((t = "function" == typeof e ? e : ze(Array.from(e))),
                        o)
                      : t;
                  }),
                  (o.value = function (t) {
                    return arguments.length
                      ? ((n = "function" == typeof t ? t : ze(+t)), o)
                      : n;
                  }),
                  (o.order = function (t) {
                    return arguments.length
                      ? ((e =
                          null == t
                            ? Ps
                            : "function" == typeof t
                            ? t
                            : ze(Array.from(t))),
                        o)
                      : e;
                  }),
                  (o.offset = function (t) {
                    return arguments.length ? ((r = null == t ? Ss : t), o) : r;
                  }),
                  o
                );
              })()
                .keys(n)
                .value(function (t, e) {
                  return +Af(t, e, 0);
                })
                .order(Ps)
                .offset(o);
            return i(t);
          };
        function Uf(t) {
          var e = t.axis,
            r = t.ticks,
            n = t.bandSize,
            o = t.entry,
            i = t.index,
            a = t.dataKey;
          if ("category" === e.type) {
            if (!e.allowDuplicatedCategory && e.dataKey && !C()(o[e.dataKey])) {
              var c = M(r, "value", o[e.dataKey]);
              if (c) return c.coordinate + n / 2;
            }
            return r[i] ? r[i].coordinate + n / 2 : null;
          }
          var u = Af(o, C()(a) ? e.dataKey : a);
          return C()(u) ? null : e.scale(u);
        }
        var $f = function (t) {
            var e = t.axis,
              r = t.ticks,
              n = t.offset,
              o = t.bandSize,
              i = t.entry,
              a = t.index;
            if ("category" === e.type) return r[a] ? r[a].coordinate + n : null;
            var c = Af(i, e.dataKey, e.domain[a]);
            return C()(c) ? null : e.scale(c) - o / 2 + n;
          },
          Ff = function (t, e, r) {
            return Object.keys(t)
              .reduce(
                function (n, o) {
                  var i = t[o].stackedData.reduce(
                    function (t, n) {
                      var o = n.slice(e, r + 1).reduce(
                        function (t, e) {
                          return [
                            Cs()(e.concat([t[0]]).filter(O)),
                            Ts()(e.concat([t[1]]).filter(O)),
                          ];
                        },
                        [1 / 0, -1 / 0]
                      );
                      return [Math.min(t[0], o[0]), Math.max(t[1], o[1])];
                    },
                    [1 / 0, -1 / 0]
                  );
                  return [Math.min(i[0], n[0]), Math.max(i[1], n[1])];
                },
                [1 / 0, -1 / 0]
              )
              .map(function (t) {
                return t === 1 / 0 || t === -1 / 0 ? 0 : t;
              });
          },
          Wf = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
          qf = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
          Xf = function (t, e, r) {
            if (I()(t)) return t(e, r);
            if (!Array.isArray(t)) return e;
            var n = [];
            if (O(t[0])) n[0] = r ? t[0] : Math.min(t[0], e[0]);
            else if (Wf.test(t[0])) {
              var o = +Wf.exec(t[0])[1];
              n[0] = e[0] - o;
            } else I()(t[0]) ? (n[0] = t[0](e[0])) : (n[0] = e[0]);
            if (O(t[1])) n[1] = r ? t[1] : Math.max(t[1], e[1]);
            else if (qf.test(t[1])) {
              var i = +qf.exec(t[1])[1];
              n[1] = e[1] + i;
            } else I()(t[1]) ? (n[1] = t[1](e[1])) : (n[1] = e[1]);
            return n;
          },
          Hf = function (t, e, r) {
            if (t && t.scale && t.scale.bandwidth) {
              var n = t.scale.bandwidth();
              if (!r || n > 0) return n;
            }
            if (t && e && e.length >= 2) {
              for (
                var o = mt()(e, function (t) {
                    return t.coordinate;
                  }),
                  i = 1 / 0,
                  a = 1,
                  c = o.length;
                a < c;
                a++
              ) {
                var u = o[a],
                  l = o[a - 1];
                i = Math.min((u.coordinate || 0) - (l.coordinate || 0), i);
              }
              return i === 1 / 0 ? 0 : i;
            }
            return r ? void 0 : 0;
          },
          Vf = function (t, e, r) {
            return t && t.length
              ? Bs()(t, m()(r, "type.defaultProps.domain"))
                ? e
                : t
              : e;
          },
          Gf = function (t, e) {
            var r = t.props,
              n = r.dataKey,
              o = r.name,
              i = r.unit,
              a = r.formatter,
              c = r.tooltipType,
              u = r.chartType,
              l = r.hide;
            return jf(
              jf({}, ot(t, !1)),
              {},
              {
                dataKey: n,
                unit: i,
                formatter: a,
                name: o || n,
                color: Mf(t),
                value: Af(e, n),
                type: c,
                payload: e,
                chartType: u,
                hide: l,
              }
            );
          };
        function Yf(t) {
          return (
            (Yf =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            Yf(t)
          );
        }
        function Kf(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function Zf(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? Kf(Object(r), !0).forEach(function (e) {
                  Jf(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : Kf(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e)
                  );
                });
          }
          return t;
        }
        function Jf(t, e, r) {
          var n;
          return (
            (n = (function (t, e) {
              if ("object" != Yf(t) || !t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, "string");
                if ("object" != Yf(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(e)),
            (e = "symbol" == Yf(n) ? n : String(n)) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        var Qf = ["Webkit", "Moz", "O", "ms"];
        function tp(t) {
          return (
            (tp =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            tp(t)
          );
        }
        function ep() {
          return (
            (ep = Object.assign
              ? Object.assign.bind()
              : function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var n in r)
                      Object.prototype.hasOwnProperty.call(r, n) &&
                        (t[n] = r[n]);
                  }
                  return t;
                }),
            ep.apply(this, arguments)
          );
        }
        function rp(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function np(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? rp(Object(r), !0).forEach(function (e) {
                  sp(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : rp(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e)
                  );
                });
          }
          return t;
        }
        function op(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, fp(n.key), n);
          }
        }
        function ip(t, e, r) {
          return (
            (e = cp(e)),
            (function (t, e) {
              if (e && ("object" === tp(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return up(t);
            })(
              t,
              ap()
                ? Reflect.construct(e, r || [], cp(t).constructor)
                : e.apply(t, r)
            )
          );
        }
        function ap() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            );
          } catch (t) {}
          return (ap = function () {
            return !!t;
          })();
        }
        function cp(t) {
          return (
            (cp = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            cp(t)
          );
        }
        function up(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function lp(t, e) {
          return (
            (lp = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            lp(t, e)
          );
        }
        function sp(t, e, r) {
          return (
            (e = fp(e)) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        function fp(t) {
          var e = (function (t, e) {
            if ("object" != tp(t) || !t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, "string");
              if ("object" != tp(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(t);
          })(t);
          return "symbol" == tp(e) ? e : String(e);
        }
        var pp = function (t) {
            return t.changedTouches && !!t.changedTouches.length;
          },
          hp = (function (t) {
            function e(t) {
              var r;
              return (
                (function (t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e),
                sp(up((r = ip(this, e, [t]))), "handleDrag", function (t) {
                  r.leaveTimer &&
                    (clearTimeout(r.leaveTimer), (r.leaveTimer = null)),
                    r.state.isTravellerMoving
                      ? r.handleTravellerMove(t)
                      : r.state.isSlideMoving && r.handleSlideDrag(t);
                }),
                sp(up(r), "handleTouchMove", function (t) {
                  null != t.changedTouches &&
                    t.changedTouches.length > 0 &&
                    r.handleDrag(t.changedTouches[0]);
                }),
                sp(up(r), "handleDragEnd", function () {
                  r.setState(
                    { isTravellerMoving: !1, isSlideMoving: !1 },
                    function () {
                      var t = r.props,
                        e = t.endIndex,
                        n = t.onDragEnd,
                        o = t.startIndex;
                      null == n || n({ endIndex: e, startIndex: o });
                    }
                  ),
                    r.detachDragEndListener();
                }),
                sp(up(r), "handleLeaveWrapper", function () {
                  (r.state.isTravellerMoving || r.state.isSlideMoving) &&
                    (r.leaveTimer = window.setTimeout(
                      r.handleDragEnd,
                      r.props.leaveTimeOut
                    ));
                }),
                sp(up(r), "handleEnterSlideOrTraveller", function () {
                  r.setState({ isTextActive: !0 });
                }),
                sp(up(r), "handleLeaveSlideOrTraveller", function () {
                  r.setState({ isTextActive: !1 });
                }),
                sp(up(r), "handleSlideDragStart", function (t) {
                  var e = pp(t) ? t.changedTouches[0] : t;
                  r.setState({
                    isTravellerMoving: !1,
                    isSlideMoving: !0,
                    slideMoveStartX: e.pageX,
                  }),
                    r.attachDragEndListener();
                }),
                (r.travellerDragStartHandlers = {
                  startX: r.handleTravellerDragStart.bind(up(r), "startX"),
                  endX: r.handleTravellerDragStart.bind(up(r), "endX"),
                }),
                (r.state = {}),
                r
              );
            }
            var r, n, a;
            return (
              (function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (t.prototype = Object.create(e && e.prototype, {
                  constructor: { value: t, writable: !0, configurable: !0 },
                })),
                  Object.defineProperty(t, "prototype", { writable: !1 }),
                  e && lp(t, e);
              })(e, t),
              (r = e),
              (n = [
                {
                  key: "componentWillUnmount",
                  value: function () {
                    this.leaveTimer &&
                      (clearTimeout(this.leaveTimer), (this.leaveTimer = null)),
                      this.detachDragEndListener();
                  },
                },
                {
                  key: "getIndex",
                  value: function (t) {
                    var r = t.startX,
                      n = t.endX,
                      o = this.state.scaleValues,
                      i = this.props,
                      a = i.gap,
                      c = i.data.length - 1,
                      u = Math.min(r, n),
                      l = Math.max(r, n),
                      s = e.getIndexInRange(o, u),
                      f = e.getIndexInRange(o, l);
                    return {
                      startIndex: s - (s % a),
                      endIndex: f === c ? c : f - (f % a),
                    };
                  },
                },
                {
                  key: "getTextOfTick",
                  value: function (t) {
                    var e = this.props,
                      r = e.data,
                      n = e.tickFormatter,
                      o = e.dataKey,
                      i = Af(r[t], o, t);
                    return I()(n) ? n(i, t) : i;
                  },
                },
                {
                  key: "attachDragEndListener",
                  value: function () {
                    window.addEventListener("mouseup", this.handleDragEnd, !0),
                      window.addEventListener(
                        "touchend",
                        this.handleDragEnd,
                        !0
                      ),
                      window.addEventListener("mousemove", this.handleDrag, !0);
                  },
                },
                {
                  key: "detachDragEndListener",
                  value: function () {
                    window.removeEventListener(
                      "mouseup",
                      this.handleDragEnd,
                      !0
                    ),
                      window.removeEventListener(
                        "touchend",
                        this.handleDragEnd,
                        !0
                      ),
                      window.removeEventListener(
                        "mousemove",
                        this.handleDrag,
                        !0
                      );
                  },
                },
                {
                  key: "handleSlideDrag",
                  value: function (t) {
                    var e = this.state,
                      r = e.slideMoveStartX,
                      n = e.startX,
                      o = e.endX,
                      i = this.props,
                      a = i.x,
                      c = i.width,
                      u = i.travellerWidth,
                      l = i.startIndex,
                      s = i.endIndex,
                      f = i.onChange,
                      p = t.pageX - r;
                    p > 0
                      ? (p = Math.min(p, a + c - u - o, a + c - u - n))
                      : p < 0 && (p = Math.max(p, a - n, a - o));
                    var h = this.getIndex({ startX: n + p, endX: o + p });
                    (h.startIndex === l && h.endIndex === s) || !f || f(h),
                      this.setState({
                        startX: n + p,
                        endX: o + p,
                        slideMoveStartX: t.pageX,
                      });
                  },
                },
                {
                  key: "handleTravellerDragStart",
                  value: function (t, e) {
                    var r = pp(e) ? e.changedTouches[0] : e;
                    this.setState({
                      isSlideMoving: !1,
                      isTravellerMoving: !0,
                      movingTravellerId: t,
                      brushMoveStartX: r.pageX,
                    }),
                      this.attachDragEndListener();
                  },
                },
                {
                  key: "handleTravellerMove",
                  value: function (t) {
                    var e = this.state,
                      r = e.brushMoveStartX,
                      n = e.movingTravellerId,
                      o = e.endX,
                      i = e.startX,
                      a = this.state[n],
                      c = this.props,
                      u = c.x,
                      l = c.width,
                      s = c.travellerWidth,
                      f = c.onChange,
                      p = c.gap,
                      h = c.data,
                      d = { startX: this.state.startX, endX: this.state.endX },
                      y = t.pageX - r;
                    y > 0
                      ? (y = Math.min(y, u + l - s - a))
                      : y < 0 && (y = Math.max(y, u - a)),
                      (d[n] = a + y);
                    var v = this.getIndex(d),
                      m = v.startIndex,
                      b = v.endIndex;
                    this.setState(
                      sp(sp({}, n, a + y), "brushMoveStartX", t.pageX),
                      function () {
                        var t;
                        f &&
                          ((t = h.length - 1),
                          (("startX" === n &&
                            (o > i ? m % p == 0 : b % p == 0)) ||
                            (o < i && b === t) ||
                            ("endX" === n &&
                              (o > i ? b % p == 0 : m % p == 0)) ||
                            (o > i && b === t)) &&
                            f(v));
                      }
                    );
                  },
                },
                {
                  key: "handleTravellerMoveKeyboard",
                  value: function (t, e) {
                    var r = this,
                      n = this.state,
                      o = n.scaleValues,
                      i = n.startX,
                      a = n.endX,
                      c = this.state[e],
                      u = o.indexOf(c);
                    if (-1 !== u) {
                      var l = u + t;
                      if (!(-1 === l || l >= o.length)) {
                        var s = o[l];
                        ("startX" === e && s >= a) ||
                          ("endX" === e && s <= i) ||
                          this.setState(sp({}, e, s), function () {
                            r.props.onChange(
                              r.getIndex({
                                startX: r.state.startX,
                                endX: r.state.endX,
                              })
                            );
                          });
                      }
                    }
                  },
                },
                {
                  key: "renderBackground",
                  value: function () {
                    var t = this.props,
                      e = t.x,
                      r = t.y,
                      n = t.width,
                      o = t.height,
                      a = t.fill,
                      c = t.stroke;
                    return i().createElement("rect", {
                      stroke: c,
                      fill: a,
                      x: e,
                      y: r,
                      width: n,
                      height: o,
                    });
                  },
                },
                {
                  key: "renderPanorama",
                  value: function () {
                    var t = this.props,
                      e = t.x,
                      r = t.y,
                      n = t.width,
                      a = t.height,
                      c = t.data,
                      u = t.children,
                      l = t.padding,
                      s = o.Children.only(u);
                    return s
                      ? i().cloneElement(s, {
                          x: e,
                          y: r,
                          width: n,
                          height: a,
                          margin: l,
                          compact: !0,
                          data: c,
                        })
                      : null;
                  },
                },
                {
                  key: "renderTravellerLayer",
                  value: function (t, r) {
                    var n,
                      o,
                      a = this,
                      c = this.props,
                      u = c.y,
                      l = c.travellerWidth,
                      s = c.height,
                      f = c.traveller,
                      p = c.ariaLabel,
                      h = c.data,
                      d = c.startIndex,
                      y = c.endIndex,
                      v = Math.max(t, this.props.x),
                      m = np(
                        np({}, ot(this.props, !1)),
                        {},
                        { x: v, y: u, width: l, height: s }
                      ),
                      b =
                        p ||
                        "Min value: "
                          .concat(
                            null === (n = h[d]) || void 0 === n
                              ? void 0
                              : n.name,
                            ", Max value: "
                          )
                          .concat(
                            null === (o = h[y]) || void 0 === o
                              ? void 0
                              : o.name
                          );
                    return i().createElement(
                      Pt,
                      {
                        tabIndex: 0,
                        role: "slider",
                        "aria-label": b,
                        "aria-valuenow": t,
                        className: "recharts-brush-traveller",
                        onMouseEnter: this.handleEnterSlideOrTraveller,
                        onMouseLeave: this.handleLeaveSlideOrTraveller,
                        onMouseDown: this.travellerDragStartHandlers[r],
                        onTouchStart: this.travellerDragStartHandlers[r],
                        onKeyDown: function (t) {
                          ["ArrowLeft", "ArrowRight"].includes(t.key) &&
                            (t.preventDefault(),
                            t.stopPropagation(),
                            a.handleTravellerMoveKeyboard(
                              "ArrowRight" === t.key ? 1 : -1,
                              r
                            ));
                        },
                        onFocus: function () {
                          a.setState({ isTravellerFocused: !0 });
                        },
                        onBlur: function () {
                          a.setState({ isTravellerFocused: !1 });
                        },
                        style: { cursor: "col-resize" },
                      },
                      e.renderTraveller(f, m)
                    );
                  },
                },
                {
                  key: "renderSlide",
                  value: function (t, e) {
                    var r = this.props,
                      n = r.y,
                      o = r.height,
                      a = r.stroke,
                      c = r.travellerWidth,
                      u = Math.min(t, e) + c,
                      l = Math.max(Math.abs(e - t) - c, 0);
                    return i().createElement("rect", {
                      className: "recharts-brush-slide",
                      onMouseEnter: this.handleEnterSlideOrTraveller,
                      onMouseLeave: this.handleLeaveSlideOrTraveller,
                      onMouseDown: this.handleSlideDragStart,
                      onTouchStart: this.handleSlideDragStart,
                      style: { cursor: "move" },
                      stroke: "none",
                      fill: a,
                      fillOpacity: 0.2,
                      x: u,
                      y: n,
                      width: l,
                      height: o,
                    });
                  },
                },
                {
                  key: "renderText",
                  value: function () {
                    var t = this.props,
                      e = t.startIndex,
                      r = t.endIndex,
                      n = t.y,
                      o = t.height,
                      a = t.travellerWidth,
                      c = t.stroke,
                      u = this.state,
                      l = u.startX,
                      s = u.endX,
                      f = { pointerEvents: "none", fill: c };
                    return i().createElement(
                      Pt,
                      { className: "recharts-brush-texts" },
                      i().createElement(
                        Di,
                        ep(
                          {
                            textAnchor: "end",
                            verticalAnchor: "middle",
                            x: Math.min(l, s) - 5,
                            y: n + o / 2,
                          },
                          f
                        ),
                        this.getTextOfTick(e)
                      ),
                      i().createElement(
                        Di,
                        ep(
                          {
                            textAnchor: "start",
                            verticalAnchor: "middle",
                            x: Math.max(l, s) + a + 5,
                            y: n + o / 2,
                          },
                          f
                        ),
                        this.getTextOfTick(r)
                      )
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var t = this.props,
                      e = t.data,
                      r = t.className,
                      n = t.children,
                      o = t.x,
                      a = t.y,
                      c = t.width,
                      l = t.height,
                      s = t.alwaysShowText,
                      f = this.state,
                      p = f.startX,
                      h = f.endX,
                      d = f.isTextActive,
                      y = f.isSlideMoving,
                      v = f.isTravellerMoving,
                      m = f.isTravellerFocused;
                    if (
                      !e ||
                      !e.length ||
                      !O(o) ||
                      !O(a) ||
                      !O(c) ||
                      !O(l) ||
                      c <= 0 ||
                      l <= 0
                    )
                      return null;
                    var b = u("recharts-brush", r),
                      g = 1 === i().Children.count(n),
                      x = (function (t, e) {
                        var r = t.replace(/(\w)/, function (t) {
                            return t.toUpperCase();
                          }),
                          n = Qf.reduce(function (t, n) {
                            return Zf(Zf({}, t), {}, Jf({}, n + r, e));
                          }, {});
                        return (n[t] = e), n;
                      })("userSelect", "none");
                    return i().createElement(
                      Pt,
                      {
                        className: b,
                        onMouseLeave: this.handleLeaveWrapper,
                        onTouchMove: this.handleTouchMove,
                        style: x,
                      },
                      this.renderBackground(),
                      g && this.renderPanorama(),
                      this.renderSlide(p, h),
                      this.renderTravellerLayer(p, "startX"),
                      this.renderTravellerLayer(h, "endX"),
                      (d || y || v || m || s) && this.renderText()
                    );
                  },
                },
              ]),
              (a = [
                {
                  key: "renderDefaultTraveller",
                  value: function (t) {
                    var e = t.x,
                      r = t.y,
                      n = t.width,
                      o = t.height,
                      a = t.stroke,
                      c = Math.floor(r + o / 2) - 1;
                    return i().createElement(
                      i().Fragment,
                      null,
                      i().createElement("rect", {
                        x: e,
                        y: r,
                        width: n,
                        height: o,
                        fill: a,
                        stroke: "none",
                      }),
                      i().createElement("line", {
                        x1: e + 1,
                        y1: c,
                        x2: e + n - 1,
                        y2: c,
                        fill: "none",
                        stroke: "#fff",
                      }),
                      i().createElement("line", {
                        x1: e + 1,
                        y1: c + 2,
                        x2: e + n - 1,
                        y2: c + 2,
                        fill: "none",
                        stroke: "#fff",
                      })
                    );
                  },
                },
                {
                  key: "renderTraveller",
                  value: function (t, r) {
                    return i().isValidElement(t)
                      ? i().cloneElement(t, r)
                      : I()(t)
                      ? t(r)
                      : e.renderDefaultTraveller(r);
                  },
                },
                {
                  key: "getDerivedStateFromProps",
                  value: function (t, e) {
                    var r = t.data,
                      n = t.width,
                      o = t.x,
                      i = t.travellerWidth,
                      a = t.updateId,
                      c = t.startIndex,
                      u = t.endIndex;
                    if (r !== e.prevData || a !== e.prevUpdateId)
                      return np(
                        {
                          prevData: r,
                          prevTravellerWidth: i,
                          prevUpdateId: a,
                          prevX: o,
                          prevWidth: n,
                        },
                        r && r.length
                          ? (function (t) {
                              var e = t.data,
                                r = t.startIndex,
                                n = t.endIndex,
                                o = t.x,
                                i = t.width,
                                a = t.travellerWidth;
                              if (!e || !e.length) return {};
                              var c = e.length,
                                u = Jo()
                                  .domain(yt()(0, c))
                                  .range([o, o + i - a]),
                                l = u.domain().map(function (t) {
                                  return u(t);
                                });
                              return {
                                isTextActive: !1,
                                isSlideMoving: !1,
                                isTravellerMoving: !1,
                                isTravellerFocused: !1,
                                startX: u(r),
                                endX: u(n),
                                scale: u,
                                scaleValues: l,
                              };
                            })({
                              data: r,
                              width: n,
                              x: o,
                              travellerWidth: i,
                              startIndex: c,
                              endIndex: u,
                            })
                          : { scale: null, scaleValues: null }
                      );
                    if (
                      e.scale &&
                      (n !== e.prevWidth ||
                        o !== e.prevX ||
                        i !== e.prevTravellerWidth)
                    ) {
                      e.scale.range([o, o + n - i]);
                      var l = e.scale.domain().map(function (t) {
                        return e.scale(t);
                      });
                      return {
                        prevData: r,
                        prevTravellerWidth: i,
                        prevUpdateId: a,
                        prevX: o,
                        prevWidth: n,
                        startX: e.scale(t.startIndex),
                        endX: e.scale(t.endIndex),
                        scaleValues: l,
                      };
                    }
                    return null;
                  },
                },
                {
                  key: "getIndexInRange",
                  value: function (t, e) {
                    for (var r = 0, n = t.length - 1; n - r > 1; ) {
                      var o = Math.floor((r + n) / 2);
                      t[o] > e ? (n = o) : (r = o);
                    }
                    return e >= t[n] ? n : r;
                  },
                },
              ]),
              n && op(r.prototype, n),
              a && op(r, a),
              Object.defineProperty(r, "prototype", { writable: !1 }),
              e
            );
          })(o.PureComponent);
        function dp(t) {
          return (
            (dp =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            dp(t)
          );
        }
        function yp(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function vp(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? yp(Object(r), !0).forEach(function (e) {
                  mp(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : yp(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e)
                  );
                });
          }
          return t;
        }
        function mp(t, e, r) {
          var n;
          return (
            (n = (function (t, e) {
              if ("object" != dp(t) || !t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, "string");
                if ("object" != dp(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(e)),
            (e = "symbol" == dp(n) ? n : String(n)) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        sp(hp, "displayName", "Brush"),
          sp(hp, "defaultProps", {
            height: 40,
            travellerWidth: 5,
            gap: 1,
            fill: "#fff",
            stroke: "#666",
            padding: { top: 1, right: 1, bottom: 1, left: 1 },
            leaveTimeOut: 1e3,
            alwaysShowText: !1,
          });
        var bp = Math.PI / 180,
          gp = function (t) {
            return (180 * t) / Math.PI;
          },
          xp = function (t, e, r, n) {
            return {
              x: t + Math.cos(-bp * n) * r,
              y: e + Math.sin(-bp * n) * r,
            };
          },
          wp = function (t, e) {
            var r = e.startAngle,
              n = e.endAngle,
              o = Math.floor(r / 360),
              i = Math.floor(n / 360);
            return t + 360 * Math.min(o, i);
          },
          Op = function (t, e) {
            var r = (function (t, e) {
                var r = t.x,
                  n = t.y,
                  o = e.cx,
                  i = e.cy,
                  a = (function (t, e) {
                    var r = t.x,
                      n = t.y,
                      o = e.x,
                      i = e.y;
                    return Math.sqrt(Math.pow(r - o, 2) + Math.pow(n - i, 2));
                  })({ x: r, y: n }, { x: o, y: i });
                if (a <= 0) return { radius: a };
                var c = (r - o) / a,
                  u = Math.acos(c);
                return (
                  n > i && (u = 2 * Math.PI - u),
                  { radius: a, angle: gp(u), angleInRadian: u }
                );
              })({ x: t.x, y: t.y }, e),
              n = r.radius,
              o = r.angle,
              i = e.innerRadius,
              a = e.outerRadius;
            if (n < i || n > a) return !1;
            if (0 === n) return !0;
            var c,
              u = (function (t) {
                var e = t.startAngle,
                  r = t.endAngle,
                  n = Math.floor(e / 360),
                  o = Math.floor(r / 360),
                  i = Math.min(n, o);
                return { startAngle: e - 360 * i, endAngle: r - 360 * i };
              })(e),
              l = u.startAngle,
              s = u.endAngle,
              f = o;
            if (l <= s) {
              for (; f > s; ) f -= 360;
              for (; f < l; ) f += 360;
              c = f >= l && f <= s;
            } else {
              for (; f > l; ) f -= 360;
              for (; f < s; ) f += 360;
              c = f >= s && f <= l;
            }
            return c ? vp(vp({}, e), {}, { radius: n, angle: wp(f, e) }) : null;
          };
        function jp(t) {
          return (
            (jp =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            jp(t)
          );
        }
        var Sp = ["offset"];
        function Ep(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
          return n;
        }
        function Pp(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function Ap(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? Pp(Object(r), !0).forEach(function (e) {
                  kp(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : Pp(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e)
                  );
                });
          }
          return t;
        }
        function kp(t, e, r) {
          var n;
          return (
            (n = (function (t, e) {
              if ("object" != jp(t) || !t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, "string");
                if ("object" != jp(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(e)),
            (e = "symbol" == jp(n) ? n : String(n)) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        function Mp() {
          return (
            (Mp = Object.assign
              ? Object.assign.bind()
              : function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var n in r)
                      Object.prototype.hasOwnProperty.call(r, n) &&
                        (t[n] = r[n]);
                  }
                  return t;
                }),
            Mp.apply(this, arguments)
          );
        }
        var Tp = function (t) {
            var e = t.value,
              r = t.formatter,
              n = C()(t.children) ? e : t.children;
            return I()(r) ? r(n) : n;
          },
          _p = function (t, e, r) {
            var n,
              o,
              a = t.position,
              c = t.viewBox,
              l = t.offset,
              s = t.className,
              f = c,
              p = f.cx,
              h = f.cy,
              d = f.innerRadius,
              y = f.outerRadius,
              v = f.startAngle,
              m = f.endAngle,
              b = f.clockWise,
              g = (d + y) / 2,
              w = (function (t, e) {
                return x(e - t) * Math.min(Math.abs(e - t), 360);
              })(v, m),
              O = w >= 0 ? 1 : -1;
            "insideStart" === a
              ? ((n = v + O * l), (o = b))
              : "insideEnd" === a
              ? ((n = m - O * l), (o = !b))
              : "end" === a && ((n = m + O * l), (o = b)),
              (o = w <= 0 ? o : !o);
            var j = xp(p, h, g, n),
              S = xp(p, h, g, n + 359 * (o ? 1 : -1)),
              P = "M"
                .concat(j.x, ",")
                .concat(j.y, "\n    A")
                .concat(g, ",")
                .concat(g, ",0,1,")
                .concat(o ? 0 : 1, ",\n    ")
                .concat(S.x, ",")
                .concat(S.y),
              A = C()(t.id) ? E("recharts-radial-line-") : t.id;
            return i().createElement(
              "text",
              Mp({}, r, {
                dominantBaseline: "central",
                className: u("recharts-radial-bar-label", s),
              }),
              i().createElement(
                "defs",
                null,
                i().createElement("path", { id: A, d: P })
              ),
              i().createElement("textPath", { xlinkHref: "#".concat(A) }, e)
            );
          },
          Cp = function (t) {
            var e = t.viewBox,
              r = t.offset,
              n = t.position,
              o = e,
              i = o.cx,
              a = o.cy,
              c = o.innerRadius,
              u = o.outerRadius,
              l = (o.startAngle + o.endAngle) / 2;
            if ("outside" === n) {
              var s = xp(i, a, u + r, l),
                _x = s.x;
              return {
                x: _x,
                y: s.y,
                textAnchor: _x >= i ? "start" : "end",
                verticalAnchor: "middle",
              };
            }
            if ("center" === n)
              return {
                x: i,
                y: a,
                textAnchor: "middle",
                verticalAnchor: "middle",
              };
            if ("centerTop" === n)
              return {
                x: i,
                y: a,
                textAnchor: "middle",
                verticalAnchor: "start",
              };
            if ("centerBottom" === n)
              return {
                x: i,
                y: a,
                textAnchor: "middle",
                verticalAnchor: "end",
              };
            var f = xp(i, a, (c + u) / 2, l);
            return {
              x: f.x,
              y: f.y,
              textAnchor: "middle",
              verticalAnchor: "middle",
            };
          },
          Dp = function (t) {
            var e = t.viewBox,
              r = t.parentViewBox,
              n = t.offset,
              o = t.position,
              i = e,
              a = i.x,
              c = i.y,
              u = i.width,
              l = i.height,
              s = l >= 0 ? 1 : -1,
              f = s * n,
              p = s > 0 ? "end" : "start",
              h = s > 0 ? "start" : "end",
              d = u >= 0 ? 1 : -1,
              y = d * n,
              v = d > 0 ? "end" : "start",
              m = d > 0 ? "start" : "end";
            if ("top" === o)
              return Ap(
                Ap(
                  {},
                  {
                    x: a + u / 2,
                    y: c - s * n,
                    textAnchor: "middle",
                    verticalAnchor: p,
                  }
                ),
                r ? { height: Math.max(c - r.y, 0), width: u } : {}
              );
            if ("bottom" === o)
              return Ap(
                Ap(
                  {},
                  {
                    x: a + u / 2,
                    y: c + l + f,
                    textAnchor: "middle",
                    verticalAnchor: h,
                  }
                ),
                r
                  ? { height: Math.max(r.y + r.height - (c + l), 0), width: u }
                  : {}
              );
            if ("left" === o) {
              var b = {
                x: a - y,
                y: c + l / 2,
                textAnchor: v,
                verticalAnchor: "middle",
              };
              return Ap(
                Ap({}, b),
                r ? { width: Math.max(b.x - r.x, 0), height: l } : {}
              );
            }
            if ("right" === o) {
              var g = {
                x: a + u + y,
                y: c + l / 2,
                textAnchor: m,
                verticalAnchor: "middle",
              };
              return Ap(
                Ap({}, g),
                r ? { width: Math.max(r.x + r.width - g.x, 0), height: l } : {}
              );
            }
            var x = r ? { width: u, height: l } : {};
            return "insideLeft" === o
              ? Ap(
                  {
                    x: a + y,
                    y: c + l / 2,
                    textAnchor: m,
                    verticalAnchor: "middle",
                  },
                  x
                )
              : "insideRight" === o
              ? Ap(
                  {
                    x: a + u - y,
                    y: c + l / 2,
                    textAnchor: v,
                    verticalAnchor: "middle",
                  },
                  x
                )
              : "insideTop" === o
              ? Ap(
                  {
                    x: a + u / 2,
                    y: c + f,
                    textAnchor: "middle",
                    verticalAnchor: h,
                  },
                  x
                )
              : "insideBottom" === o
              ? Ap(
                  {
                    x: a + u / 2,
                    y: c + l - f,
                    textAnchor: "middle",
                    verticalAnchor: p,
                  },
                  x
                )
              : "insideTopLeft" === o
              ? Ap({ x: a + y, y: c + f, textAnchor: m, verticalAnchor: h }, x)
              : "insideTopRight" === o
              ? Ap(
                  { x: a + u - y, y: c + f, textAnchor: v, verticalAnchor: h },
                  x
                )
              : "insideBottomLeft" === o
              ? Ap(
                  { x: a + y, y: c + l - f, textAnchor: m, verticalAnchor: p },
                  x
                )
              : "insideBottomRight" === o
              ? Ap(
                  {
                    x: a + u - y,
                    y: c + l - f,
                    textAnchor: v,
                    verticalAnchor: p,
                  },
                  x
                )
              : B()(o) && (O(o.x) || w(o.x)) && (O(o.y) || w(o.y))
              ? Ap(
                  {
                    x: a + P(o.x, u),
                    y: c + P(o.y, l),
                    textAnchor: "end",
                    verticalAnchor: "end",
                  },
                  x
                )
              : Ap(
                  {
                    x: a + u / 2,
                    y: c + l / 2,
                    textAnchor: "middle",
                    verticalAnchor: "middle",
                  },
                  x
                );
          },
          Ip = function (t) {
            return "cx" in t && O(t.cx);
          };
        function Np(t) {
          var e,
            r = t.offset,
            n = Ap(
              { offset: void 0 === r ? 5 : r },
              (function (t, e) {
                if (null == t) return {};
                var r,
                  n,
                  o = (function (t, e) {
                    if (null == t) return {};
                    var r,
                      n,
                      o = {},
                      i = Object.keys(t);
                    for (n = 0; n < i.length; n++)
                      (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
                    return o;
                  })(t, e);
                if (Object.getOwnPropertySymbols) {
                  var i = Object.getOwnPropertySymbols(t);
                  for (n = 0; n < i.length; n++)
                    (r = i[n]),
                      e.indexOf(r) >= 0 ||
                        (Object.prototype.propertyIsEnumerable.call(t, r) &&
                          (o[r] = t[r]));
                }
                return o;
              })(t, Sp)
            ),
            a = n.viewBox,
            c = n.position,
            l = n.value,
            s = n.children,
            f = n.content,
            p = n.className,
            h = void 0 === p ? "" : p,
            d = n.textBreakAll;
          if (!a || (C()(l) && C()(s) && !(0, o.isValidElement)(f) && !I()(f)))
            return null;
          if ((0, o.isValidElement)(f)) return (0, o.cloneElement)(f, n);
          if (I()(f)) {
            if (((e = (0, o.createElement)(f, n)), (0, o.isValidElement)(e)))
              return e;
          } else e = Tp(n);
          var y = Ip(a),
            v = ot(n, !0);
          if (y && ("insideStart" === c || "insideEnd" === c || "end" === c))
            return _p(n, e, v);
          var m = y ? Cp(n) : Dp(n);
          return i().createElement(
            Di,
            Mp({ className: u("recharts-label", h) }, v, m, { breakAll: d }),
            e
          );
        }
        Np.displayName = "Label";
        var Bp = function (t) {
          var e = t.cx,
            r = t.cy,
            n = t.angle,
            o = t.startAngle,
            i = t.endAngle,
            a = t.r,
            c = t.radius,
            u = t.innerRadius,
            l = t.outerRadius,
            s = t.x,
            f = t.y,
            p = t.top,
            h = t.left,
            d = t.width,
            y = t.height,
            v = t.clockWise,
            m = t.labelViewBox;
          if (m) return m;
          if (O(d) && O(y)) {
            if (O(s) && O(f)) return { x: s, y: f, width: d, height: y };
            if (O(p) && O(h)) return { x: p, y: h, width: d, height: y };
          }
          return O(s) && O(f)
            ? { x: s, y: f, width: 0, height: 0 }
            : O(e) && O(r)
            ? {
                cx: e,
                cy: r,
                startAngle: o || n || 0,
                endAngle: i || n || 0,
                innerRadius: u || 0,
                outerRadius: l || c || a || 0,
                clockWise: v,
              }
            : t.viewBox
            ? t.viewBox
            : {};
        };
        (Np.parseViewBox = Bp),
          (Np.renderCallByParent = function (t, e) {
            var r =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2];
            if (!t || (!t.children && r && !t.label)) return null;
            var n = t.children,
              a = Bp(t),
              c = tt(n, Np).map(function (t, r) {
                return (0,
                o.cloneElement)(t, { viewBox: e || a, key: "label-".concat(r) });
              });
            if (!r) return c;
            var u,
              l = (function (t, e) {
                return t
                  ? !0 === t
                    ? i().createElement(Np, {
                        key: "label-implicit",
                        viewBox: e,
                      })
                    : j(t)
                    ? i().createElement(Np, {
                        key: "label-implicit",
                        viewBox: e,
                        value: t,
                      })
                    : (0, o.isValidElement)(t)
                    ? t.type === Np
                      ? (0, o.cloneElement)(t, {
                          key: "label-implicit",
                          viewBox: e,
                        })
                      : i().createElement(Np, {
                          key: "label-implicit",
                          content: t,
                          viewBox: e,
                        })
                    : I()(t)
                    ? i().createElement(Np, {
                        key: "label-implicit",
                        content: t,
                        viewBox: e,
                      })
                    : B()(t)
                    ? i().createElement(
                        Np,
                        Mp({ viewBox: e }, t, { key: "label-implicit" })
                      )
                    : null
                  : null;
              })(t.label, e || a);
            return [l].concat(
              (function (t) {
                if (Array.isArray(t)) return Ep(t);
              })((u = c)) ||
                (function (t) {
                  if (
                    ("undefined" != typeof Symbol &&
                      null != t[Symbol.iterator]) ||
                    null != t["@@iterator"]
                  )
                    return Array.from(t);
                })(u) ||
                (function (t, e) {
                  if (t) {
                    if ("string" == typeof t) return Ep(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    return (
                      "Object" === r &&
                        t.constructor &&
                        (r = t.constructor.name),
                      "Map" === r || "Set" === r
                        ? Array.from(t)
                        : "Arguments" === r ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                        ? Ep(t, e)
                        : void 0
                    );
                  }
                })(u) ||
                (function () {
                  throw new TypeError(
                    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })()
            );
          });
        var Lp = function (t, e) {
            var r = t.alwaysShow,
              n = t.ifOverflow;
            return r && (n = "extendDomain"), n === e;
          },
          Rp = r(3916),
          zp = r.n(Rp),
          Up = r(9747),
          $p = r.n(Up),
          Fp = function (t) {
            return null;
          };
        Fp.displayName = "Cell";
        var Wp = r(8090),
          qp = r.n(Wp);
        function Xp(t) {
          return (
            (Xp =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            Xp(t)
          );
        }
        var Hp = ["valueAccessor"],
          Vp = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
        function Gp(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
          return n;
        }
        function Yp() {
          return (
            (Yp = Object.assign
              ? Object.assign.bind()
              : function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var n in r)
                      Object.prototype.hasOwnProperty.call(r, n) &&
                        (t[n] = r[n]);
                  }
                  return t;
                }),
            Yp.apply(this, arguments)
          );
        }
        function Kp(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function Zp(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? Kp(Object(r), !0).forEach(function (e) {
                  Jp(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : Kp(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e)
                  );
                });
          }
          return t;
        }
        function Jp(t, e, r) {
          var n;
          return (
            (n = (function (t, e) {
              if ("object" != Xp(t) || !t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, "string");
                if ("object" != Xp(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(e)),
            (e = "symbol" == Xp(n) ? n : String(n)) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        function Qp(t, e) {
          if (null == t) return {};
          var r,
            n,
            o = (function (t, e) {
              if (null == t) return {};
              var r,
                n,
                o = {},
                i = Object.keys(t);
              for (n = 0; n < i.length; n++)
                (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
              return o;
            })(t, e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            for (n = 0; n < i.length; n++)
              (r = i[n]),
                e.indexOf(r) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(t, r) &&
                    (o[r] = t[r]));
          }
          return o;
        }
        var th = function (t) {
          return Array.isArray(t.value) ? qp()(t.value) : t.value;
        };
        function eh(t) {
          var e = t.valueAccessor,
            r = void 0 === e ? th : e,
            n = Qp(t, Hp),
            o = n.data,
            a = n.dataKey,
            c = n.clockWise,
            u = n.id,
            l = n.textBreakAll,
            s = Qp(n, Vp);
          return o && o.length
            ? i().createElement(
                Pt,
                { className: "recharts-label-list" },
                o.map(function (t, e) {
                  var n = C()(a) ? r(t, e) : Af(t && t.payload, a),
                    o = C()(u) ? {} : { id: "".concat(u, "-").concat(e) };
                  return i().createElement(
                    Np,
                    Yp({}, ot(t, !0), s, o, {
                      parentViewBox: t.parentViewBox,
                      value: n,
                      textBreakAll: l,
                      viewBox: Np.parseViewBox(
                        C()(c) ? t : Zp(Zp({}, t), {}, { clockWise: c })
                      ),
                      key: "label-".concat(e),
                      index: e,
                    })
                  );
                })
              )
            : null;
        }
        (eh.displayName = "LabelList"),
          (eh.renderCallByParent = function (t, e) {
            var r =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2];
            if (!t || (!t.children && r && !t.label)) return null;
            var n,
              a = tt(t.children, eh).map(function (t, r) {
                return (0,
                o.cloneElement)(t, { data: e, key: "labelList-".concat(r) });
              });
            return r
              ? [
                  (function (t, e) {
                    return t
                      ? !0 === t
                        ? i().createElement(eh, {
                            key: "labelList-implicit",
                            data: e,
                          })
                        : i().isValidElement(t) || I()(t)
                        ? i().createElement(eh, {
                            key: "labelList-implicit",
                            data: e,
                            content: t,
                          })
                        : B()(t)
                        ? i().createElement(
                            eh,
                            Yp({ data: e }, t, { key: "labelList-implicit" })
                          )
                        : null
                      : null;
                  })(t.label, e),
                ].concat(
                  (function (t) {
                    if (Array.isArray(t)) return Gp(t);
                  })((n = a)) ||
                    (function (t) {
                      if (
                        ("undefined" != typeof Symbol &&
                          null != t[Symbol.iterator]) ||
                        null != t["@@iterator"]
                      )
                        return Array.from(t);
                    })(n) ||
                    (function (t, e) {
                      if (t) {
                        if ("string" == typeof t) return Gp(t, e);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        return (
                          "Object" === r &&
                            t.constructor &&
                            (r = t.constructor.name),
                          "Map" === r || "Set" === r
                            ? Array.from(t)
                            : "Arguments" === r ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                            ? Gp(t, e)
                            : void 0
                        );
                      }
                    })(n) ||
                    (function () {
                      throw new TypeError(
                        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                      );
                    })()
                )
              : a;
          });
        var rh = r(1331),
          nh = r.n(rh),
          oh = r(3812),
          ih = r.n(oh);
        function ah(t) {
          return (
            (ah =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            ah(t)
          );
        }
        function ch() {
          return (
            (ch = Object.assign
              ? Object.assign.bind()
              : function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var n in r)
                      Object.prototype.hasOwnProperty.call(r, n) &&
                        (t[n] = r[n]);
                  }
                  return t;
                }),
            ch.apply(this, arguments)
          );
        }
        function uh(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
          return n;
        }
        function lh(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function sh(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? lh(Object(r), !0).forEach(function (e) {
                  fh(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : lh(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e)
                  );
                });
          }
          return t;
        }
        function fh(t, e, r) {
          var n;
          return (
            (n = (function (t, e) {
              if ("object" != ah(t) || !t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, "string");
                if ("object" != ah(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(e)),
            (e = "symbol" == ah(n) ? n : String(n)) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        var ph = function (t, e, r, n, o) {
            var i,
              a = r - n;
            return (
              (i = "M ".concat(t, ",").concat(e)),
              (i += "L ".concat(t + r, ",").concat(e)),
              (i += "L ".concat(t + r - a / 2, ",").concat(e + o)),
              (i += "L ".concat(t + r - a / 2 - n, ",").concat(e + o)) +
                "L ".concat(t, ",").concat(e, " Z")
            );
          },
          hh = {
            x: 0,
            y: 0,
            upperWidth: 0,
            lowerWidth: 0,
            height: 0,
            isUpdateAnimationActive: !1,
            animationBegin: 0,
            animationDuration: 1500,
            animationEasing: "ease",
          },
          dh = function (t) {
            var e,
              r,
              n = sh(sh({}, hh), t),
              a = (0, o.useRef)(),
              c =
                ((e = (0, o.useState)(-1)),
                (r = 2),
                (function (t) {
                  if (Array.isArray(t)) return t;
                })(e) ||
                  (function (t, e) {
                    var r =
                      null == t
                        ? null
                        : ("undefined" != typeof Symbol &&
                            t[Symbol.iterator]) ||
                          t["@@iterator"];
                    if (null != r) {
                      var n,
                        o,
                        i,
                        a,
                        c = [],
                        u = !0,
                        l = !1;
                      try {
                        if (((i = (r = r.call(t)).next), 0 === e)) {
                          if (Object(r) !== r) return;
                          u = !1;
                        } else
                          for (
                            ;
                            !(u = (n = i.call(r)).done) &&
                            (c.push(n.value), c.length !== e);
                            u = !0
                          );
                      } catch (t) {
                        (l = !0), (o = t);
                      } finally {
                        try {
                          if (
                            !u &&
                            null != r.return &&
                            ((a = r.return()), Object(a) !== a)
                          )
                            return;
                        } finally {
                          if (l) throw o;
                        }
                      }
                      return c;
                    }
                  })(e, r) ||
                  (function (t, e) {
                    if (t) {
                      if ("string" == typeof t) return uh(t, e);
                      var r = Object.prototype.toString.call(t).slice(8, -1);
                      return (
                        "Object" === r &&
                          t.constructor &&
                          (r = t.constructor.name),
                        "Map" === r || "Set" === r
                          ? Array.from(t)
                          : "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          ? uh(t, e)
                          : void 0
                      );
                    }
                  })(e, r) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()),
              l = c[0],
              s = c[1];
            (0, o.useEffect)(function () {
              if (a.current && a.current.getTotalLength)
                try {
                  var t = a.current.getTotalLength();
                  t && s(t);
                } catch (t) {}
            }, []);
            var f = n.x,
              p = n.y,
              h = n.upperWidth,
              d = n.lowerWidth,
              y = n.height,
              v = n.className,
              m = n.animationEasing,
              b = n.animationDuration,
              g = n.animationBegin,
              x = n.isUpdateAnimationActive;
            if (
              f !== +f ||
              p !== +p ||
              h !== +h ||
              d !== +d ||
              y !== +y ||
              (0 === h && 0 === d) ||
              0 === y
            )
              return null;
            var w = u("recharts-trapezoid", v);
            return x
              ? i().createElement(
                  Co,
                  {
                    canBegin: l > 0,
                    from: {
                      upperWidth: 0,
                      lowerWidth: 0,
                      height: y,
                      x: f,
                      y: p,
                    },
                    to: { upperWidth: h, lowerWidth: d, height: y, x: f, y: p },
                    duration: b,
                    animationEasing: m,
                    isActive: x,
                  },
                  function (t) {
                    var e = t.upperWidth,
                      r = t.lowerWidth,
                      o = t.height,
                      c = t.x,
                      u = t.y;
                    return i().createElement(
                      Co,
                      {
                        canBegin: l > 0,
                        from: "0px ".concat(-1 === l ? 1 : l, "px"),
                        to: "".concat(l, "px 0px"),
                        attributeName: "strokeDasharray",
                        begin: g,
                        duration: b,
                        easing: m,
                      },
                      i().createElement(
                        "path",
                        ch({}, ot(n, !0), {
                          className: w,
                          d: ph(c, u, e, r, o),
                          ref: a,
                        })
                      )
                    );
                  }
                )
              : i().createElement(
                  "g",
                  null,
                  i().createElement(
                    "path",
                    ch({}, ot(n, !0), { className: w, d: ph(f, p, h, d, y) })
                  )
                );
          };
        function yh(t) {
          return (
            (yh =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            yh(t)
          );
        }
        function vh() {
          return (
            (vh = Object.assign
              ? Object.assign.bind()
              : function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var n in r)
                      Object.prototype.hasOwnProperty.call(r, n) &&
                        (t[n] = r[n]);
                  }
                  return t;
                }),
            vh.apply(this, arguments)
          );
        }
        function mh(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function bh(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? mh(Object(r), !0).forEach(function (e) {
                  gh(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : mh(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e)
                  );
                });
          }
          return t;
        }
        function gh(t, e, r) {
          var n;
          return (
            (n = (function (t, e) {
              if ("object" != yh(t) || !t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, "string");
                if ("object" != yh(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(e)),
            (e = "symbol" == yh(n) ? n : String(n)) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        var xh = function (t) {
            var e = t.cx,
              r = t.cy,
              n = t.radius,
              o = t.angle,
              i = t.sign,
              a = t.isExternal,
              c = t.cornerRadius,
              u = t.cornerIsExternal,
              l = c * (a ? 1 : -1) + n,
              s = Math.asin(c / l) / bp,
              f = u ? o : o + i * s,
              p = u ? o - i * s : o;
            return {
              center: xp(e, r, l, f),
              circleTangency: xp(e, r, n, f),
              lineTangency: xp(e, r, l * Math.cos(s * bp), p),
              theta: s,
            };
          },
          wh = function (t) {
            var e = t.cx,
              r = t.cy,
              n = t.innerRadius,
              o = t.outerRadius,
              i = t.startAngle,
              a = (function (t, e) {
                return x(e - t) * Math.min(Math.abs(e - t), 359.999);
              })(i, t.endAngle),
              c = i + a,
              u = xp(e, r, o, i),
              l = xp(e, r, o, c),
              s = "M "
                .concat(u.x, ",")
                .concat(u.y, "\n    A ")
                .concat(o, ",")
                .concat(o, ",0,\n    ")
                .concat(+(Math.abs(a) > 180), ",")
                .concat(+(i > c), ",\n    ")
                .concat(l.x, ",")
                .concat(l.y, "\n  ");
            if (n > 0) {
              var f = xp(e, r, n, i),
                p = xp(e, r, n, c);
              s += "L "
                .concat(p.x, ",")
                .concat(p.y, "\n            A ")
                .concat(n, ",")
                .concat(n, ",0,\n            ")
                .concat(+(Math.abs(a) > 180), ",")
                .concat(+(i <= c), ",\n            ")
                .concat(f.x, ",")
                .concat(f.y, " Z");
            } else s += "L ".concat(e, ",").concat(r, " Z");
            return s;
          },
          Oh = {
            cx: 0,
            cy: 0,
            innerRadius: 0,
            outerRadius: 0,
            startAngle: 0,
            endAngle: 0,
            cornerRadius: 0,
            forceCornerRadius: !1,
            cornerIsExternal: !1,
          },
          jh = function (t) {
            var e = bh(bh({}, Oh), t),
              r = e.cx,
              n = e.cy,
              o = e.innerRadius,
              a = e.outerRadius,
              c = e.cornerRadius,
              l = e.forceCornerRadius,
              s = e.cornerIsExternal,
              f = e.startAngle,
              p = e.endAngle,
              h = e.className;
            if (a < o || f === p) return null;
            var d,
              y = u("recharts-sector", h),
              v = a - o,
              m = P(c, v, 0, !0);
            return (
              (d =
                m > 0 && Math.abs(f - p) < 360
                  ? (function (t) {
                      var e = t.cx,
                        r = t.cy,
                        n = t.innerRadius,
                        o = t.outerRadius,
                        i = t.cornerRadius,
                        a = t.forceCornerRadius,
                        c = t.cornerIsExternal,
                        u = t.startAngle,
                        l = t.endAngle,
                        s = x(l - u),
                        f = xh({
                          cx: e,
                          cy: r,
                          radius: o,
                          angle: u,
                          sign: s,
                          cornerRadius: i,
                          cornerIsExternal: c,
                        }),
                        p = f.circleTangency,
                        h = f.lineTangency,
                        d = f.theta,
                        y = xh({
                          cx: e,
                          cy: r,
                          radius: o,
                          angle: l,
                          sign: -s,
                          cornerRadius: i,
                          cornerIsExternal: c,
                        }),
                        v = y.circleTangency,
                        m = y.lineTangency,
                        b = y.theta,
                        g = c ? Math.abs(u - l) : Math.abs(u - l) - d - b;
                      if (g < 0)
                        return a
                          ? "M "
                              .concat(h.x, ",")
                              .concat(h.y, "\n        a")
                              .concat(i, ",")
                              .concat(i, ",0,0,1,")
                              .concat(2 * i, ",0\n        a")
                              .concat(i, ",")
                              .concat(i, ",0,0,1,")
                              .concat(2 * -i, ",0\n      ")
                          : wh({
                              cx: e,
                              cy: r,
                              innerRadius: n,
                              outerRadius: o,
                              startAngle: u,
                              endAngle: l,
                            });
                      var w = "M "
                        .concat(h.x, ",")
                        .concat(h.y, "\n    A")
                        .concat(i, ",")
                        .concat(i, ",0,0,")
                        .concat(+(s < 0), ",")
                        .concat(p.x, ",")
                        .concat(p.y, "\n    A")
                        .concat(o, ",")
                        .concat(o, ",0,")
                        .concat(+(g > 180), ",")
                        .concat(+(s < 0), ",")
                        .concat(v.x, ",")
                        .concat(v.y, "\n    A")
                        .concat(i, ",")
                        .concat(i, ",0,0,")
                        .concat(+(s < 0), ",")
                        .concat(m.x, ",")
                        .concat(m.y, "\n  ");
                      if (n > 0) {
                        var O = xh({
                            cx: e,
                            cy: r,
                            radius: n,
                            angle: u,
                            sign: s,
                            isExternal: !0,
                            cornerRadius: i,
                            cornerIsExternal: c,
                          }),
                          j = O.circleTangency,
                          S = O.lineTangency,
                          E = O.theta,
                          P = xh({
                            cx: e,
                            cy: r,
                            radius: n,
                            angle: l,
                            sign: -s,
                            isExternal: !0,
                            cornerRadius: i,
                            cornerIsExternal: c,
                          }),
                          A = P.circleTangency,
                          k = P.lineTangency,
                          M = P.theta,
                          T = c ? Math.abs(u - l) : Math.abs(u - l) - E - M;
                        if (T < 0 && 0 === i)
                          return ""
                            .concat(w, "L")
                            .concat(e, ",")
                            .concat(r, "Z");
                        w += "L"
                          .concat(k.x, ",")
                          .concat(k.y, "\n      A")
                          .concat(i, ",")
                          .concat(i, ",0,0,")
                          .concat(+(s < 0), ",")
                          .concat(A.x, ",")
                          .concat(A.y, "\n      A")
                          .concat(n, ",")
                          .concat(n, ",0,")
                          .concat(+(T > 180), ",")
                          .concat(+(s > 0), ",")
                          .concat(j.x, ",")
                          .concat(j.y, "\n      A")
                          .concat(i, ",")
                          .concat(i, ",0,0,")
                          .concat(+(s < 0), ",")
                          .concat(S.x, ",")
                          .concat(S.y, "Z");
                      } else w += "L".concat(e, ",").concat(r, "Z");
                      return w;
                    })({
                      cx: r,
                      cy: n,
                      innerRadius: o,
                      outerRadius: a,
                      cornerRadius: Math.min(m, v / 2),
                      forceCornerRadius: l,
                      cornerIsExternal: s,
                      startAngle: f,
                      endAngle: p,
                    })
                  : wh({
                      cx: r,
                      cy: n,
                      innerRadius: o,
                      outerRadius: a,
                      startAngle: f,
                      endAngle: p,
                    })),
              i().createElement(
                "path",
                vh({}, ot(e, !0), { className: y, d, role: "img" })
              )
            );
          },
          Sh = [
            "option",
            "shapeType",
            "propTransformer",
            "activeClassName",
            "isActive",
          ];
        function Eh(t) {
          return (
            (Eh =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            Eh(t)
          );
        }
        function Ph(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function Ah(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? Ph(Object(r), !0).forEach(function (e) {
                  kh(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : Ph(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e)
                  );
                });
          }
          return t;
        }
        function kh(t, e, r) {
          var n;
          return (
            (n = (function (t, e) {
              if ("object" != Eh(t) || !t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, "string");
                if ("object" != Eh(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(e)),
            (e = "symbol" == Eh(n) ? n : String(n)) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        function Mh(t, e) {
          return Ah(Ah({}, e), t);
        }
        function Th(t) {
          var e = t.shapeType,
            r = t.elementProps;
          switch (e) {
            case "rectangle":
              return i().createElement(Fo, r);
            case "trapezoid":
              return i().createElement(dh, r);
            case "sector":
              return i().createElement(jh, r);
            case "symbols":
              if (
                (function (t, e) {
                  return "symbols" === t;
                })(e)
              )
                return i().createElement(er, r);
              break;
            default:
              return null;
          }
        }
        function _h(t) {
          var e,
            r = t.option,
            n = t.shapeType,
            a = t.propTransformer,
            c = void 0 === a ? Mh : a,
            u = t.activeClassName,
            l = void 0 === u ? "recharts-active-shape" : u,
            s = t.isActive,
            f = (function (t, e) {
              if (null == t) return {};
              var r,
                n,
                o = (function (t, e) {
                  if (null == t) return {};
                  var r,
                    n,
                    o = {},
                    i = Object.keys(t);
                  for (n = 0; n < i.length; n++)
                    (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
                  return o;
                })(t, e);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                for (n = 0; n < i.length; n++)
                  (r = i[n]),
                    e.indexOf(r) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(t, r) &&
                        (o[r] = t[r]));
              }
              return o;
            })(t, Sh);
          if ((0, o.isValidElement)(r))
            e = (0, o.cloneElement)(
              r,
              Ah(
                Ah({}, f),
                (function (t) {
                  return (0, o.isValidElement)(t) ? t.props : t;
                })(r)
              )
            );
          else if (I()(r)) e = r(f);
          else if (nh()(r) && !ih()(r)) {
            var p = c(r, f);
            e = i().createElement(Th, { shapeType: n, elementProps: p });
          } else {
            var h = f;
            e = i().createElement(Th, { shapeType: n, elementProps: h });
          }
          return s ? i().createElement(Pt, { className: l }, e) : e;
        }
        function Ch(t, e) {
          return null != e && "trapezoids" in t.props;
        }
        function Dh(t, e) {
          return null != e && "sectors" in t.props;
        }
        function Ih(t, e) {
          return null != e && "points" in t.props;
        }
        function Nh(t, e) {
          var r,
            n,
            o =
              t.x ===
                (null == e || null === (r = e.labelViewBox) || void 0 === r
                  ? void 0
                  : r.x) || t.x === e.x,
            i =
              t.y ===
                (null == e || null === (n = e.labelViewBox) || void 0 === n
                  ? void 0
                  : n.y) || t.y === e.y;
          return o && i;
        }
        function Bh(t, e) {
          var r = t.endAngle === e.endAngle,
            n = t.startAngle === e.startAngle;
          return r && n;
        }
        function Lh(t, e) {
          var r = t.x === e.x,
            n = t.y === e.y,
            o = t.z === e.z;
          return r && n && o;
        }
        function Rh(t) {
          var e = t.activeTooltipItem,
            r = t.graphicalItem,
            n = t.itemData,
            o = (function (t, e) {
              var r;
              return (
                Ch(t, e)
                  ? (r = "trapezoids")
                  : Dh(t, e)
                  ? (r = "sectors")
                  : Ih(t, e) && (r = "points"),
                r
              );
            })(r, e),
            i = (function (t, e) {
              var r, n;
              return Ch(t, e)
                ? null === (r = e.tooltipPayload) ||
                  void 0 === r ||
                  null === (r = r[0]) ||
                  void 0 === r ||
                  null === (r = r.payload) ||
                  void 0 === r
                  ? void 0
                  : r.payload
                : Dh(t, e)
                ? null === (n = e.tooltipPayload) ||
                  void 0 === n ||
                  null === (n = n[0]) ||
                  void 0 === n ||
                  null === (n = n.payload) ||
                  void 0 === n
                  ? void 0
                  : n.payload
                : Ih(t, e)
                ? e.payload
                : {};
            })(r, e),
            a = n.filter(function (t, n) {
              var a = Bs()(i, t),
                c = r.props[o].filter(function (t) {
                  var n = (function (t, e) {
                    var r;
                    return (
                      Ch(t, e)
                        ? (r = Nh)
                        : Dh(t, e)
                        ? (r = Bh)
                        : Ih(t, e) && (r = Lh),
                      r
                    );
                  })(r, e);
                  return n(t, e);
                }),
                u = r.props[o].indexOf(c[c.length - 1]);
              return a && n === u;
            });
          return n.indexOf(a[a.length - 1]);
        }
        var zh = ["x", "y"];
        function Uh(t) {
          return (
            (Uh =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            Uh(t)
          );
        }
        function $h() {
          return (
            ($h = Object.assign
              ? Object.assign.bind()
              : function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var n in r)
                      Object.prototype.hasOwnProperty.call(r, n) &&
                        (t[n] = r[n]);
                  }
                  return t;
                }),
            $h.apply(this, arguments)
          );
        }
        function Fh(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function Wh(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? Fh(Object(r), !0).forEach(function (e) {
                  qh(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : Fh(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e)
                  );
                });
          }
          return t;
        }
        function qh(t, e, r) {
          var n;
          return (
            (n = (function (t, e) {
              if ("object" != Uh(t) || !t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, "string");
                if ("object" != Uh(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(e)),
            (e = "symbol" == Uh(n) ? n : String(n)) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        function Xh(t, e) {
          var r = t.x,
            n = t.y,
            o = (function (t, e) {
              if (null == t) return {};
              var r,
                n,
                o = (function (t, e) {
                  if (null == t) return {};
                  var r,
                    n,
                    o = {},
                    i = Object.keys(t);
                  for (n = 0; n < i.length; n++)
                    (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
                  return o;
                })(t, e);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                for (n = 0; n < i.length; n++)
                  (r = i[n]),
                    e.indexOf(r) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(t, r) &&
                        (o[r] = t[r]));
              }
              return o;
            })(t, zh),
            i = "".concat(r),
            a = parseInt(i, 10),
            c = "".concat(n),
            u = parseInt(c, 10),
            l = "".concat(e.height || o.height),
            s = parseInt(l, 10),
            f = "".concat(e.width || o.width),
            p = parseInt(f, 10);
          return Wh(
            Wh(Wh(Wh(Wh({}, e), o), a ? { x: a } : {}), u ? { y: u } : {}),
            {},
            { height: s, width: p, name: e.name, radius: e.radius }
          );
        }
        function Hh(t) {
          return i().createElement(
            _h,
            $h(
              {
                shapeType: "rectangle",
                propTransformer: Xh,
                activeClassName: "recharts-active-bar",
              },
              t
            )
          );
        }
        var Vh,
          Gh = ["value", "background"];
        function Yh(t) {
          return (
            (Yh =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            Yh(t)
          );
        }
        function Kh() {
          return (
            (Kh = Object.assign
              ? Object.assign.bind()
              : function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var n in r)
                      Object.prototype.hasOwnProperty.call(r, n) &&
                        (t[n] = r[n]);
                  }
                  return t;
                }),
            Kh.apply(this, arguments)
          );
        }
        function Zh(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function Jh(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? Zh(Object(r), !0).forEach(function (e) {
                  id(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : Zh(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e)
                  );
                });
          }
          return t;
        }
        function Qh(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, ad(n.key), n);
          }
        }
        function td(t, e, r) {
          return (
            (e = rd(e)),
            (function (t, e) {
              if (e && ("object" === Yh(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return nd(t);
            })(
              t,
              ed()
                ? Reflect.construct(e, r || [], rd(t).constructor)
                : e.apply(t, r)
            )
          );
        }
        function ed() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            );
          } catch (t) {}
          return (ed = function () {
            return !!t;
          })();
        }
        function rd(t) {
          return (
            (rd = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            rd(t)
          );
        }
        function nd(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function od(t, e) {
          return (
            (od = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            od(t, e)
          );
        }
        function id(t, e, r) {
          return (
            (e = ad(e)) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        function ad(t) {
          var e = (function (t, e) {
            if ("object" != Yh(t) || !t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, "string");
              if ("object" != Yh(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(t);
          })(t);
          return "symbol" == Yh(e) ? e : String(e);
        }
        var cd = (function (t) {
          function e() {
            var t;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e);
            for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
              n[o] = arguments[o];
            return (
              id(nd((t = td(this, e, [].concat(n)))), "state", {
                isAnimationFinished: !1,
              }),
              id(nd(t), "id", E("recharts-bar-")),
              id(nd(t), "handleAnimationEnd", function () {
                var e = t.props.onAnimationEnd;
                t.setState({ isAnimationFinished: !0 }), e && e();
              }),
              id(nd(t), "handleAnimationStart", function () {
                var e = t.props.onAnimationStart;
                t.setState({ isAnimationFinished: !1 }), e && e();
              }),
              t
            );
          }
          var r, n, o;
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && od(t, e);
            })(e, t),
            (r = e),
            (n = [
              {
                key: "renderRectanglesStatically",
                value: function (t) {
                  var e = this,
                    r = this.props,
                    n = r.shape,
                    o = r.dataKey,
                    a = r.activeIndex,
                    c = r.activeBar,
                    u = ot(this.props, !1);
                  return (
                    t &&
                    t.map(function (t, r) {
                      var l = r === a,
                        s = l ? c : n,
                        f = Jh(
                          Jh(Jh({}, u), t),
                          {},
                          {
                            isActive: l,
                            option: s,
                            index: r,
                            dataKey: o,
                            onAnimationStart: e.handleAnimationStart,
                            onAnimationEnd: e.handleAnimationEnd,
                          }
                        );
                      return i().createElement(
                        Pt,
                        Kh(
                          { className: "recharts-bar-rectangle" },
                          q(e.props, t, r),
                          {
                            key: "rectangle-"
                              .concat(null == t ? void 0 : t.x, "-")
                              .concat(null == t ? void 0 : t.y, "-")
                              .concat(null == t ? void 0 : t.value),
                          }
                        ),
                        i().createElement(Hh, f)
                      );
                    })
                  );
                },
              },
              {
                key: "renderRectanglesWithAnimation",
                value: function () {
                  var t = this,
                    e = this.props,
                    r = e.data,
                    n = e.layout,
                    o = e.isAnimationActive,
                    a = e.animationBegin,
                    c = e.animationDuration,
                    u = e.animationEasing,
                    l = e.animationId,
                    s = this.state.prevData;
                  return i().createElement(
                    Co,
                    {
                      begin: a,
                      duration: c,
                      isActive: o,
                      easing: u,
                      from: { t: 0 },
                      to: { t: 1 },
                      key: "bar-".concat(l),
                      onAnimationEnd: this.handleAnimationEnd,
                      onAnimationStart: this.handleAnimationStart,
                    },
                    function (e) {
                      var o = e.t,
                        a = r.map(function (t, e) {
                          var r = s && s[e];
                          if (r) {
                            var i = k(r.x, t.x),
                              a = k(r.y, t.y),
                              c = k(r.width, t.width),
                              u = k(r.height, t.height);
                            return Jh(
                              Jh({}, t),
                              {},
                              { x: i(o), y: a(o), width: c(o), height: u(o) }
                            );
                          }
                          if ("horizontal" === n) {
                            var l = k(0, t.height)(o);
                            return Jh(
                              Jh({}, t),
                              {},
                              { y: t.y + t.height - l, height: l }
                            );
                          }
                          var f = k(0, t.width)(o);
                          return Jh(Jh({}, t), {}, { width: f });
                        });
                      return i().createElement(
                        Pt,
                        null,
                        t.renderRectanglesStatically(a)
                      );
                    }
                  );
                },
              },
              {
                key: "renderRectangles",
                value: function () {
                  var t = this.props,
                    e = t.data,
                    r = t.isAnimationActive,
                    n = this.state.prevData;
                  return !(r && e && e.length) || (n && Bs()(n, e))
                    ? this.renderRectanglesStatically(e)
                    : this.renderRectanglesWithAnimation();
                },
              },
              {
                key: "renderBackground",
                value: function () {
                  var t = this,
                    e = this.props,
                    r = e.data,
                    n = e.dataKey,
                    o = e.activeIndex,
                    a = ot(this.props.background, !1);
                  return r.map(function (e, r) {
                    e.value;
                    var c = e.background,
                      u = (function (t, e) {
                        if (null == t) return {};
                        var r,
                          n,
                          o = (function (t, e) {
                            if (null == t) return {};
                            var r,
                              n,
                              o = {},
                              i = Object.keys(t);
                            for (n = 0; n < i.length; n++)
                              (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
                            return o;
                          })(t, e);
                        if (Object.getOwnPropertySymbols) {
                          var i = Object.getOwnPropertySymbols(t);
                          for (n = 0; n < i.length; n++)
                            (r = i[n]),
                              e.indexOf(r) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(
                                  t,
                                  r
                                ) &&
                                  (o[r] = t[r]));
                        }
                        return o;
                      })(e, Gh);
                    if (!c) return null;
                    var l = Jh(
                      Jh(
                        Jh(Jh(Jh({}, u), {}, { fill: "#eee" }, c), a),
                        q(t.props, e, r)
                      ),
                      {},
                      {
                        onAnimationStart: t.handleAnimationStart,
                        onAnimationEnd: t.handleAnimationEnd,
                        dataKey: n,
                        index: r,
                        key: "background-bar-".concat(r),
                        className: "recharts-bar-background-rectangle",
                      }
                    );
                    return i().createElement(
                      Hh,
                      Kh({ option: t.props.background, isActive: r === o }, l)
                    );
                  });
                },
              },
              {
                key: "renderErrorBar",
                value: function (t, e) {
                  if (
                    this.props.isAnimationActive &&
                    !this.state.isAnimationFinished
                  )
                    return null;
                  var r = this.props,
                    n = r.data,
                    o = r.xAxis,
                    a = r.yAxis,
                    c = r.layout,
                    u = tt(r.children, yf);
                  if (!u) return null;
                  var l = "vertical" === c ? n[0].height / 2 : n[0].width / 2,
                    s = function (t, e) {
                      var r = Array.isArray(t.value) ? t.value[1] : t.value;
                      return { x: t.x, y: t.y, value: r, errorVal: Af(t, e) };
                    },
                    f = {
                      clipPath: t ? "url(#clipPath-".concat(e, ")") : null,
                    };
                  return i().createElement(
                    Pt,
                    f,
                    u.map(function (t) {
                      return i().cloneElement(t, {
                        key: "error-bar-"
                          .concat(e, "-")
                          .concat(t.props.dataKey),
                        data: n,
                        xAxis: o,
                        yAxis: a,
                        layout: c,
                        offset: l,
                        dataPointFormatter: s,
                      });
                    })
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this.props,
                    e = t.hide,
                    r = t.data,
                    n = t.className,
                    o = t.xAxis,
                    a = t.yAxis,
                    c = t.left,
                    l = t.top,
                    s = t.width,
                    f = t.height,
                    p = t.isAnimationActive,
                    h = t.background,
                    d = t.id;
                  if (e || !r || !r.length) return null;
                  var y = this.state.isAnimationFinished,
                    v = u("recharts-bar", n),
                    m = o && o.allowDataOverflow,
                    b = a && a.allowDataOverflow,
                    g = m || b,
                    x = C()(d) ? this.id : d;
                  return i().createElement(
                    Pt,
                    { className: v },
                    m || b
                      ? i().createElement(
                          "defs",
                          null,
                          i().createElement(
                            "clipPath",
                            { id: "clipPath-".concat(x) },
                            i().createElement("rect", {
                              x: m ? c : c - s / 2,
                              y: b ? l : l - f / 2,
                              width: m ? s : 2 * s,
                              height: b ? f : 2 * f,
                            })
                          )
                        )
                      : null,
                    i().createElement(
                      Pt,
                      {
                        className: "recharts-bar-rectangles",
                        clipPath: g ? "url(#clipPath-".concat(x, ")") : null,
                      },
                      h ? this.renderBackground() : null,
                      this.renderRectangles()
                    ),
                    this.renderErrorBar(g, x),
                    (!p || y) && eh.renderCallByParent(this.props, r)
                  );
                },
              },
            ]),
            (o = [
              {
                key: "getDerivedStateFromProps",
                value: function (t, e) {
                  return t.animationId !== e.prevAnimationId
                    ? {
                        prevAnimationId: t.animationId,
                        curData: t.data,
                        prevData: e.curData,
                      }
                    : t.data !== e.curData
                    ? { curData: t.data }
                    : null;
                },
              },
            ]),
            n && Qh(r.prototype, n),
            o && Qh(r, o),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            e
          );
        })(o.PureComponent);
        function ud(t) {
          return (
            (ud =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            ud(t)
          );
        }
        function ld(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, hd(n.key), n);
          }
        }
        function sd(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function fd(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? sd(Object(r), !0).forEach(function (e) {
                  pd(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : sd(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e)
                  );
                });
          }
          return t;
        }
        function pd(t, e, r) {
          return (
            (e = hd(e)) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        function hd(t) {
          var e = (function (t, e) {
            if ("object" != ud(t) || !t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, "string");
              if ("object" != ud(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(t);
          })(t);
          return "symbol" == ud(e) ? e : String(e);
        }
        (Vh = cd),
          id(cd, "displayName", "Bar"),
          id(cd, "defaultProps", {
            xAxisId: 0,
            yAxisId: 0,
            legendType: "rect",
            minPointSize: 0,
            hide: !1,
            data: [],
            layout: "vertical",
            activeBar: !1,
            isAnimationActive: !Qt.isSsr,
            animationBegin: 0,
            animationDuration: 400,
            animationEasing: "ease",
          }),
          id(cd, "getComposedData", function (t) {
            var e = t.props,
              r = t.item,
              n = t.barPosition,
              o = t.bandSize,
              i = t.xAxis,
              a = t.yAxis,
              c = t.xAxisTicks,
              u = t.yAxisTicks,
              l = t.stackedData,
              s = t.dataStartIndex,
              f = t.displayedData,
              p = t.offset,
              h = (function (t, e) {
                if (!t) return null;
                for (var r = 0, n = t.length; r < n; r++)
                  if (t[r].item === e) return t[r].position;
                return null;
              })(n, r);
            if (!h) return null;
            var d = e.layout,
              y = r.props,
              v = y.dataKey,
              m = y.children,
              b = y.minPointSize,
              g = "horizontal" === d ? a : i,
              w = l ? g.scale.domain() : null,
              j = (function (t) {
                var e = t.numericAxis,
                  r = e.scale.domain();
                if ("number" === e.type) {
                  var n = Math.min(r[0], r[1]),
                    o = Math.max(r[0], r[1]);
                  return n <= 0 && o >= 0 ? 0 : o < 0 ? o : n;
                }
                return r[0];
              })({ numericAxis: g }),
              S = tt(m, Fp),
              E = f.map(function (t, e) {
                var n, f, p, y, m, g;
                l
                  ? (n = (function (t, e) {
                      if (!e || 2 !== e.length || !O(e[0]) || !O(e[1]))
                        return t;
                      var r = Math.min(e[0], e[1]),
                        n = Math.max(e[0], e[1]),
                        o = [t[0], t[1]];
                      return (
                        (!O(t[0]) || t[0] < r) && (o[0] = r),
                        (!O(t[1]) || t[1] > n) && (o[1] = n),
                        o[0] > n && (o[0] = n),
                        o[1] < r && (o[1] = r),
                        o
                      );
                    })(l[s + e], w))
                  : ((n = Af(t, v)), Array.isArray(n) || (n = [j, n]));
                var E = (function (t) {
                  var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 0;
                  return function (r, n) {
                    if ("number" == typeof t) return t;
                    var o = "number" == typeof r;
                    return o ? t(r, n) : (o || xt(!1), e);
                  };
                })(b, Vh.defaultProps.minPointSize)(n[1], e);
                if ("horizontal" === d) {
                  var P,
                    A = [a.scale(n[0]), a.scale(n[1])],
                    k = A[0],
                    M = A[1];
                  (f = $f({
                    axis: i,
                    ticks: c,
                    bandSize: o,
                    offset: h.offset,
                    entry: t,
                    index: e,
                  })),
                    (p =
                      null !== (P = null != M ? M : k) && void 0 !== P
                        ? P
                        : void 0),
                    (y = h.size);
                  var T = k - M;
                  if (
                    ((m = Number.isNaN(T) ? 0 : T),
                    (g = { x: f, y: a.y, width: y, height: a.height }),
                    Math.abs(E) > 0 && Math.abs(m) < Math.abs(E))
                  ) {
                    var _ = x(m || E) * (Math.abs(E) - Math.abs(m));
                    (p -= _), (m += _);
                  }
                } else {
                  var C = [i.scale(n[0]), i.scale(n[1])],
                    D = C[0],
                    I = C[1];
                  (f = D),
                    (p = $f({
                      axis: a,
                      ticks: u,
                      bandSize: o,
                      offset: h.offset,
                      entry: t,
                      index: e,
                    })),
                    (y = I - D),
                    (m = h.size),
                    (g = { x: i.x, y: p, width: i.width, height: m }),
                    Math.abs(E) > 0 &&
                      Math.abs(y) < Math.abs(E) &&
                      (y += x(y || E) * (Math.abs(E) - Math.abs(y)));
                }
                return Jh(
                  Jh(
                    Jh({}, t),
                    {},
                    {
                      x: f,
                      y: p,
                      width: y,
                      height: m,
                      value: l ? n : n[1],
                      payload: t,
                      background: g,
                    },
                    S && S[e] && S[e].props
                  ),
                  {},
                  {
                    tooltipPayload: [Gf(r, t)],
                    tooltipPosition: { x: f + y / 2, y: p + m / 2 },
                  }
                );
              });
            return Jh({ data: E, layout: d }, p);
          });
        var dd = function (t, e) {
            var r = t.x,
              n = t.y,
              o = e.x,
              i = e.y;
            return {
              x: Math.min(r, o),
              y: Math.min(n, i),
              width: Math.abs(o - r),
              height: Math.abs(i - n),
            };
          },
          yd = (function () {
            function t(e) {
              !(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                (this.scale = e);
            }
            var e, r, n;
            return (
              (e = t),
              (r = [
                {
                  key: "domain",
                  get: function () {
                    return this.scale.domain;
                  },
                },
                {
                  key: "range",
                  get: function () {
                    return this.scale.range;
                  },
                },
                {
                  key: "rangeMin",
                  get: function () {
                    return this.range()[0];
                  },
                },
                {
                  key: "rangeMax",
                  get: function () {
                    return this.range()[1];
                  },
                },
                {
                  key: "bandwidth",
                  get: function () {
                    return this.scale.bandwidth;
                  },
                },
                {
                  key: "apply",
                  value: function (t) {
                    var e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      r = e.bandAware,
                      n = e.position;
                    if (void 0 !== t) {
                      if (n)
                        switch (n) {
                          case "start":
                          default:
                            return this.scale(t);
                          case "middle":
                            var o = this.bandwidth ? this.bandwidth() / 2 : 0;
                            return this.scale(t) + o;
                          case "end":
                            var i = this.bandwidth ? this.bandwidth() : 0;
                            return this.scale(t) + i;
                        }
                      if (r) {
                        var a = this.bandwidth ? this.bandwidth() / 2 : 0;
                        return this.scale(t) + a;
                      }
                      return this.scale(t);
                    }
                  },
                },
                {
                  key: "isInRange",
                  value: function (t) {
                    var e = this.range(),
                      r = e[0],
                      n = e[e.length - 1];
                    return r <= n ? t >= r && t <= n : t >= n && t <= r;
                  },
                },
              ]),
              (n = [
                {
                  key: "create",
                  value: function (e) {
                    return new t(e);
                  },
                },
              ]),
              r && ld(e.prototype, r),
              n && ld(e, n),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t
            );
          })();
        pd(yd, "EPS", 1e-4);
        var vd = function (t) {
          var e = Object.keys(t).reduce(function (e, r) {
            return fd(fd({}, e), {}, pd({}, r, yd.create(t[r])));
          }, {});
          return fd(
            fd({}, e),
            {},
            {
              apply: function (t) {
                var r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n = r.bandAware,
                  o = r.position;
                return zp()(t, function (t, r) {
                  return e[r].apply(t, { bandAware: n, position: o });
                });
              },
              isInRange: function (t) {
                return $p()(t, function (t, r) {
                  return e[r].isInRange(t);
                });
              },
            }
          );
        };
        function md(t) {
          return (
            (md =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            md(t)
          );
        }
        function bd() {
          return (
            (bd = Object.assign
              ? Object.assign.bind()
              : function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var n in r)
                      Object.prototype.hasOwnProperty.call(r, n) &&
                        (t[n] = r[n]);
                  }
                  return t;
                }),
            bd.apply(this, arguments)
          );
        }
        function gd(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function xd(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? gd(Object(r), !0).forEach(function (e) {
                  wd(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : gd(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e)
                  );
                });
          }
          return t;
        }
        function wd(t, e, r) {
          var n;
          return (
            (n = (function (t, e) {
              if ("object" != md(t) || !t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, "string");
                if ("object" != md(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(e)),
            (e = "symbol" == md(n) ? n : String(n)) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        function Od(t) {
          var e = t.x,
            r = t.y,
            n = t.r,
            o = t.alwaysShow,
            a = t.clipPathId,
            c = j(e),
            l = j(r);
          if (
            (T(
              void 0 === o,
              'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'
            ),
            !c || !l)
          )
            return null;
          var s = (function (t) {
            var e = t.x,
              r = t.y,
              n = t.xAxis,
              o = t.yAxis,
              i = vd({ x: n.scale, y: o.scale }),
              a = i.apply({ x: e, y: r }, { bandAware: !0 });
            return Lp(t, "discard") && !i.isInRange(a) ? null : a;
          })(t);
          if (!s) return null;
          var f = s.x,
            p = s.y,
            h = t.shape,
            d = t.className,
            y = xd(
              xd(
                { clipPath: Lp(t, "hidden") ? "url(#".concat(a, ")") : void 0 },
                ot(t, !0)
              ),
              {},
              { cx: f, cy: p }
            );
          return i().createElement(
            Pt,
            { className: u("recharts-reference-dot", d) },
            Od.renderDot(h, y),
            Np.renderCallByParent(t, {
              x: f - n,
              y: p - n,
              width: 2 * n,
              height: 2 * n,
            })
          );
        }
        (Od.displayName = "ReferenceDot"),
          (Od.defaultProps = {
            isFront: !1,
            ifOverflow: "discard",
            xAxisId: 0,
            yAxisId: 0,
            r: 10,
            fill: "#fff",
            stroke: "#ccc",
            fillOpacity: 1,
            strokeWidth: 1,
          }),
          (Od.renderDot = function (t, e) {
            return i().isValidElement(t)
              ? i().cloneElement(t, e)
              : I()(t)
              ? t(e)
              : i().createElement(
                  Mr,
                  bd({}, e, {
                    cx: e.cx,
                    cy: e.cy,
                    className: "recharts-reference-dot-dot",
                  })
                );
          });
        var jd = r(2426),
          Sd = r.n(jd),
          Ed = r(7309),
          Pd = r.n(Ed),
          Ad = r(104),
          kd = r.n(Ad)()(
            function (t) {
              return { x: t.left, y: t.top, width: t.width, height: t.height };
            },
            function (t) {
              return [
                "l",
                t.left,
                "t",
                t.top,
                "w",
                t.width,
                "h",
                t.height,
              ].join("");
            }
          ),
          Md = (0, o.createContext)(void 0),
          Td = (0, o.createContext)(void 0),
          _d = (0, o.createContext)(void 0),
          Cd = (0, o.createContext)({}),
          Dd = (0, o.createContext)(void 0),
          Id = (0, o.createContext)(0),
          Nd = (0, o.createContext)(0),
          Bd = function (t) {
            var e = t.state,
              r = e.xAxisMap,
              n = e.yAxisMap,
              o = e.offset,
              a = t.clipPathId,
              c = t.children,
              u = t.width,
              l = t.height,
              s = kd(o);
            return i().createElement(
              Md.Provider,
              { value: r },
              i().createElement(
                Td.Provider,
                { value: n },
                i().createElement(
                  Cd.Provider,
                  { value: o },
                  i().createElement(
                    _d.Provider,
                    { value: s },
                    i().createElement(
                      Dd.Provider,
                      { value: a },
                      i().createElement(
                        Id.Provider,
                        { value: l },
                        i().createElement(Nd.Provider, { value: u }, c)
                      )
                    )
                  )
                )
              )
            );
          },
          Ld = function (t) {
            var e = (0, o.useContext)(Md);
            null == e && xt(!1);
            var r = e[t];
            return null == r && xt(!1), r;
          },
          Rd = function (t) {
            var e = (0, o.useContext)(Td);
            null == e && xt(!1);
            var r = e[t];
            return null == r && xt(!1), r;
          },
          zd = function () {
            return (0, o.useContext)(Nd);
          },
          Ud = function () {
            return (0, o.useContext)(Id);
          };
        function $d(t) {
          return (
            ($d =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            $d(t)
          );
        }
        function Fd(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function Wd(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? Fd(Object(r), !0).forEach(function (e) {
                  qd(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : Fd(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e)
                  );
                });
          }
          return t;
        }
        function qd(t, e, r) {
          var n;
          return (
            (n = (function (t, e) {
              if ("object" != $d(t) || !t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, "string");
                if ("object" != $d(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(e)),
            (e = "symbol" == $d(n) ? n : String(n)) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        function Xd(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
          return n;
        }
        function Hd() {
          return (
            (Hd = Object.assign
              ? Object.assign.bind()
              : function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var n in r)
                      Object.prototype.hasOwnProperty.call(r, n) &&
                        (t[n] = r[n]);
                  }
                  return t;
                }),
            Hd.apply(this, arguments)
          );
        }
        function Vd(t) {
          var e = t.x,
            r = t.y,
            n = t.segment,
            a = t.xAxisId,
            c = t.yAxisId,
            l = t.shape,
            s = t.className,
            f = t.alwaysShow,
            p = (0, o.useContext)(Dd),
            h = Ld(a),
            d = Rd(c),
            y = (0, o.useContext)(_d);
          if (!p || !y) return null;
          T(
            void 0 === f,
            'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'
          );
          var v = (function (t, e, r, n, o, i, a, c, u) {
            var l = o.x,
              s = o.y,
              f = o.width,
              p = o.height;
            if (r) {
              var h = u.y,
                d = t.y.apply(h, { position: i });
              if (Lp(u, "discard") && !t.y.isInRange(d)) return null;
              var y = [
                { x: l + f, y: d },
                { x: l, y: d },
              ];
              return "left" === c ? y.reverse() : y;
            }
            if (e) {
              var v = u.x,
                m = t.x.apply(v, { position: i });
              if (Lp(u, "discard") && !t.x.isInRange(m)) return null;
              var b = [
                { x: m, y: s + p },
                { x: m, y: s },
              ];
              return "top" === a ? b.reverse() : b;
            }
            if (n) {
              var g = u.segment.map(function (e) {
                return t.apply(e, { position: i });
              });
              return Lp(u, "discard") &&
                Sd()(g, function (e) {
                  return !t.isInRange(e);
                })
                ? null
                : g;
            }
            return null;
          })(
            vd({ x: h.scale, y: d.scale }),
            j(e),
            j(r),
            n && 2 === n.length,
            y,
            t.position,
            h.orientation,
            d.orientation,
            t
          );
          if (!v) return null;
          var m,
            b,
            g,
            x =
              ((b = 2),
              (function (t) {
                if (Array.isArray(t)) return t;
              })((m = v)) ||
                (function (t, e) {
                  var r =
                    null == t
                      ? null
                      : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                        t["@@iterator"];
                  if (null != r) {
                    var n,
                      o,
                      i,
                      a,
                      c = [],
                      u = !0,
                      l = !1;
                    try {
                      if (((i = (r = r.call(t)).next), 0 === e)) {
                        if (Object(r) !== r) return;
                        u = !1;
                      } else
                        for (
                          ;
                          !(u = (n = i.call(r)).done) &&
                          (c.push(n.value), c.length !== e);
                          u = !0
                        );
                    } catch (t) {
                      (l = !0), (o = t);
                    } finally {
                      try {
                        if (
                          !u &&
                          null != r.return &&
                          ((a = r.return()), Object(a) !== a)
                        )
                          return;
                      } finally {
                        if (l) throw o;
                      }
                    }
                    return c;
                  }
                })(m, b) ||
                (function (t, e) {
                  if (t) {
                    if ("string" == typeof t) return Xd(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    return (
                      "Object" === r &&
                        t.constructor &&
                        (r = t.constructor.name),
                      "Map" === r || "Set" === r
                        ? Array.from(t)
                        : "Arguments" === r ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                        ? Xd(t, e)
                        : void 0
                    );
                  }
                })(m, b) ||
                (function () {
                  throw new TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })()),
            w = x[0],
            O = w.x,
            S = w.y,
            E = x[1],
            P = E.x,
            A = E.y,
            k = Wd(
              Wd(
                { clipPath: Lp(t, "hidden") ? "url(#".concat(p, ")") : void 0 },
                ot(t, !0)
              ),
              {},
              { x1: O, y1: S, x2: P, y2: A }
            );
          return i().createElement(
            Pt,
            { className: u("recharts-reference-line", s) },
            (function (t, e) {
              return i().isValidElement(t)
                ? i().cloneElement(t, e)
                : I()(t)
                ? t(e)
                : i().createElement(
                    "line",
                    Hd({}, e, { className: "recharts-reference-line-line" })
                  );
            })(l, k),
            Np.renderCallByParent(
              t,
              dd(
                { x: (g = { x1: O, y1: S, x2: P, y2: A }).x1, y: g.y1 },
                { x: g.x2, y: g.y2 }
              )
            )
          );
        }
        function Gd(t) {
          return (
            (Gd =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            Gd(t)
          );
        }
        function Yd() {
          return (
            (Yd = Object.assign
              ? Object.assign.bind()
              : function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var n in r)
                      Object.prototype.hasOwnProperty.call(r, n) &&
                        (t[n] = r[n]);
                  }
                  return t;
                }),
            Yd.apply(this, arguments)
          );
        }
        function Kd(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function Zd(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? Kd(Object(r), !0).forEach(function (e) {
                  Jd(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : Kd(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e)
                  );
                });
          }
          return t;
        }
        function Jd(t, e, r) {
          var n;
          return (
            (n = (function (t, e) {
              if ("object" != Gd(t) || !t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, "string");
                if ("object" != Gd(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(e)),
            (e = "symbol" == Gd(n) ? n : String(n)) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        function Qd(t) {
          var e = t.x1,
            r = t.x2,
            n = t.y1,
            o = t.y2,
            a = t.className,
            c = t.alwaysShow,
            l = t.clipPathId;
          T(
            void 0 === c,
            'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'
          );
          var s = j(e),
            f = j(r),
            p = j(n),
            h = j(o),
            d = t.shape;
          if (!(s || f || p || h || d)) return null;
          var y = (function (t, e, r, n, o) {
            var i = o.x1,
              a = o.x2,
              c = o.y1,
              u = o.y2,
              l = o.xAxis,
              s = o.yAxis;
            if (!l || !s) return null;
            var f = vd({ x: l.scale, y: s.scale }),
              p = {
                x: t ? f.x.apply(i, { position: "start" }) : f.x.rangeMin,
                y: r ? f.y.apply(c, { position: "start" }) : f.y.rangeMin,
              },
              h = {
                x: e ? f.x.apply(a, { position: "end" }) : f.x.rangeMax,
                y: n ? f.y.apply(u, { position: "end" }) : f.y.rangeMax,
              };
            return !Lp(o, "discard") || (f.isInRange(p) && f.isInRange(h))
              ? dd(p, h)
              : null;
          })(s, f, p, h, t);
          if (!y && !d) return null;
          var v = Lp(t, "hidden") ? "url(#".concat(l, ")") : void 0;
          return i().createElement(
            Pt,
            { className: u("recharts-reference-area", a) },
            Qd.renderRect(d, Zd(Zd({ clipPath: v }, ot(t, !0)), y)),
            Np.renderCallByParent(t, y)
          );
        }
        function ty(t) {
          return (
            (function (t) {
              if (Array.isArray(t)) return ey(t);
            })(t) ||
            (function (t) {
              if (
                ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
                null != t["@@iterator"]
              )
                return Array.from(t);
            })(t) ||
            (function (t, e) {
              if (t) {
                if ("string" == typeof t) return ey(t, e);
                var r = Object.prototype.toString.call(t).slice(8, -1);
                return (
                  "Object" === r && t.constructor && (r = t.constructor.name),
                  "Map" === r || "Set" === r
                    ? Array.from(t)
                    : "Arguments" === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? ey(t, e)
                    : void 0
                );
              }
            })(t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function ey(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
          return n;
        }
        (Vd.displayName = "ReferenceLine"),
          (Vd.defaultProps = {
            isFront: !1,
            ifOverflow: "discard",
            xAxisId: 0,
            yAxisId: 0,
            fill: "none",
            stroke: "#ccc",
            fillOpacity: 1,
            strokeWidth: 1,
            position: "middle",
          }),
          (Qd.displayName = "ReferenceArea"),
          (Qd.defaultProps = {
            isFront: !1,
            ifOverflow: "discard",
            xAxisId: 0,
            yAxisId: 0,
            r: 10,
            fill: "#ccc",
            fillOpacity: 0.5,
            stroke: "none",
            strokeWidth: 1,
          }),
          (Qd.renderRect = function (t, e) {
            return i().isValidElement(t)
              ? i().cloneElement(t, e)
              : I()(t)
              ? t(e)
              : i().createElement(
                  Fo,
                  Yd({}, e, { className: "recharts-reference-area-rect" })
                );
          });
        var ry = function (t, e, r, n, o) {
            var i = tt(t, Vd),
              a = tt(t, Od),
              c = [].concat(ty(i), ty(a)),
              u = tt(t, Qd),
              l = "".concat(n, "Id"),
              s = n[0],
              f = e;
            if (
              (c.length &&
                (f = c.reduce(function (t, e) {
                  if (
                    e.props[l] === r &&
                    Lp(e.props, "extendDomain") &&
                    O(e.props[s])
                  ) {
                    var n = e.props[s];
                    return [Math.min(t[0], n), Math.max(t[1], n)];
                  }
                  return t;
                }, f)),
              u.length)
            ) {
              var p = "".concat(s, "1"),
                h = "".concat(s, "2");
              f = u.reduce(function (t, e) {
                if (
                  e.props[l] === r &&
                  Lp(e.props, "extendDomain") &&
                  O(e.props[p]) &&
                  O(e.props[h])
                ) {
                  var n = e.props[p],
                    o = e.props[h];
                  return [Math.min(t[0], n, o), Math.max(t[1], n, o)];
                }
                return t;
              }, f);
            }
            return (
              o &&
                o.length &&
                (f = o.reduce(function (t, e) {
                  return O(e) ? [Math.min(t[0], e), Math.max(t[1], e)] : t;
                }, f)),
              f
            );
          },
          ny = r(228),
          oy = new (r.n(ny)())(),
          iy = "recharts.syncMouseEvents";
        function ay(t) {
          return (
            (ay =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            ay(t)
          );
        }
        function cy(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, ly(n.key), n);
          }
        }
        function uy(t, e, r) {
          return (
            (e = ly(e)) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        function ly(t) {
          var e = (function (t, e) {
            if ("object" != ay(t) || !t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, "string");
              if ("object" != ay(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(t);
          })(t);
          return "symbol" == ay(e) ? e : String(e);
        }
        var sy = (function () {
          function t() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              uy(this, "activeIndex", 0),
              uy(this, "coordinateList", []),
              uy(this, "layout", "horizontal");
          }
          var e, r;
          return (
            (e = t),
            (r = [
              {
                key: "setDetails",
                value: function (t) {
                  var e,
                    r = t.coordinateList,
                    n = void 0 === r ? null : r,
                    o = t.container,
                    i = void 0 === o ? null : o,
                    a = t.layout,
                    c = void 0 === a ? null : a,
                    u = t.offset,
                    l = void 0 === u ? null : u,
                    s = t.mouseHandlerCallback,
                    f = void 0 === s ? null : s;
                  (this.coordinateList =
                    null !== (e = null != n ? n : this.coordinateList) &&
                    void 0 !== e
                      ? e
                      : []),
                    (this.container = null != i ? i : this.container),
                    (this.layout = null != c ? c : this.layout),
                    (this.offset = null != l ? l : this.offset),
                    (this.mouseHandlerCallback =
                      null != f ? f : this.mouseHandlerCallback),
                    (this.activeIndex = Math.min(
                      Math.max(this.activeIndex, 0),
                      this.coordinateList.length - 1
                    ));
                },
              },
              {
                key: "focus",
                value: function () {
                  this.spoofMouse();
                },
              },
              {
                key: "keyboardEvent",
                value: function (t) {
                  if (0 !== this.coordinateList.length)
                    switch (t.key) {
                      case "ArrowRight":
                        if ("horizontal" !== this.layout) return;
                        (this.activeIndex = Math.min(
                          this.activeIndex + 1,
                          this.coordinateList.length - 1
                        )),
                          this.spoofMouse();
                        break;
                      case "ArrowLeft":
                        if ("horizontal" !== this.layout) return;
                        (this.activeIndex = Math.max(this.activeIndex - 1, 0)),
                          this.spoofMouse();
                    }
                },
              },
              {
                key: "setIndex",
                value: function (t) {
                  this.activeIndex = t;
                },
              },
              {
                key: "spoofMouse",
                value: function () {
                  var t, e;
                  if (
                    "horizontal" === this.layout &&
                    0 !== this.coordinateList.length
                  ) {
                    var r = this.container.getBoundingClientRect(),
                      n = r.x,
                      o = r.y,
                      i = r.height,
                      a = this.coordinateList[this.activeIndex].coordinate,
                      c =
                        (null === (t = window) || void 0 === t
                          ? void 0
                          : t.scrollX) || 0,
                      u =
                        (null === (e = window) || void 0 === e
                          ? void 0
                          : e.scrollY) || 0,
                      l = n + a + c,
                      s = o + this.offset.top + i / 2 + u;
                    this.mouseHandlerCallback({ pageX: l, pageY: s });
                  }
                },
              },
            ]) && cy(e.prototype, r),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t
          );
        })();
        function fy() {}
        function py(t, e, r) {
          t._context.bezierCurveTo(
            (2 * t._x0 + t._x1) / 3,
            (2 * t._y0 + t._y1) / 3,
            (t._x0 + 2 * t._x1) / 3,
            (t._y0 + 2 * t._y1) / 3,
            (t._x0 + 4 * t._x1 + e) / 6,
            (t._y0 + 4 * t._y1 + r) / 6
          );
        }
        function hy(t) {
          this._context = t;
        }
        function dy(t) {
          this._context = t;
        }
        function yy(t) {
          this._context = t;
        }
        (hy.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x0 = this._x1 = this._y0 = this._y1 = NaN),
              (this._point = 0);
          },
          lineEnd: function () {
            switch (this._point) {
              case 3:
                py(this, this._x1, this._y1);
              case 2:
                this._context.lineTo(this._x1, this._y1);
            }
            (this._line || (0 !== this._line && 1 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (t, e) {
            switch (((t = +t), (e = +e), this._point)) {
              case 0:
                (this._point = 1),
                  this._line
                    ? this._context.lineTo(t, e)
                    : this._context.moveTo(t, e);
                break;
              case 1:
                this._point = 2;
                break;
              case 2:
                (this._point = 3),
                  this._context.lineTo(
                    (5 * this._x0 + this._x1) / 6,
                    (5 * this._y0 + this._y1) / 6
                  );
              default:
                py(this, t, e);
            }
            (this._x0 = this._x1),
              (this._x1 = t),
              (this._y0 = this._y1),
              (this._y1 = e);
          },
        }),
          (dy.prototype = {
            areaStart: fy,
            areaEnd: fy,
            lineStart: function () {
              (this._x0 =
                this._x1 =
                this._x2 =
                this._x3 =
                this._x4 =
                this._y0 =
                this._y1 =
                this._y2 =
                this._y3 =
                this._y4 =
                  NaN),
                (this._point = 0);
            },
            lineEnd: function () {
              switch (this._point) {
                case 1:
                  this._context.moveTo(this._x2, this._y2),
                    this._context.closePath();
                  break;
                case 2:
                  this._context.moveTo(
                    (this._x2 + 2 * this._x3) / 3,
                    (this._y2 + 2 * this._y3) / 3
                  ),
                    this._context.lineTo(
                      (this._x3 + 2 * this._x2) / 3,
                      (this._y3 + 2 * this._y2) / 3
                    ),
                    this._context.closePath();
                  break;
                case 3:
                  this.point(this._x2, this._y2),
                    this.point(this._x3, this._y3),
                    this.point(this._x4, this._y4);
              }
            },
            point: function (t, e) {
              switch (((t = +t), (e = +e), this._point)) {
                case 0:
                  (this._point = 1), (this._x2 = t), (this._y2 = e);
                  break;
                case 1:
                  (this._point = 2), (this._x3 = t), (this._y3 = e);
                  break;
                case 2:
                  (this._point = 3),
                    (this._x4 = t),
                    (this._y4 = e),
                    this._context.moveTo(
                      (this._x0 + 4 * this._x1 + t) / 6,
                      (this._y0 + 4 * this._y1 + e) / 6
                    );
                  break;
                default:
                  py(this, t, e);
              }
              (this._x0 = this._x1),
                (this._x1 = t),
                (this._y0 = this._y1),
                (this._y1 = e);
            },
          }),
          (yy.prototype = {
            areaStart: function () {
              this._line = 0;
            },
            areaEnd: function () {
              this._line = NaN;
            },
            lineStart: function () {
              (this._x0 = this._x1 = this._y0 = this._y1 = NaN),
                (this._point = 0);
            },
            lineEnd: function () {
              (this._line || (0 !== this._line && 3 === this._point)) &&
                this._context.closePath(),
                (this._line = 1 - this._line);
            },
            point: function (t, e) {
              switch (((t = +t), (e = +e), this._point)) {
                case 0:
                  this._point = 1;
                  break;
                case 1:
                  this._point = 2;
                  break;
                case 2:
                  this._point = 3;
                  var r = (this._x0 + 4 * this._x1 + t) / 6,
                    n = (this._y0 + 4 * this._y1 + e) / 6;
                  this._line
                    ? this._context.lineTo(r, n)
                    : this._context.moveTo(r, n);
                  break;
                case 3:
                  this._point = 4;
                default:
                  py(this, t, e);
              }
              (this._x0 = this._x1),
                (this._x1 = t),
                (this._y0 = this._y1),
                (this._y1 = e);
            },
          });
        class vy {
          constructor(t, e) {
            (this._context = t), (this._x = e);
          }
          areaStart() {
            this._line = 0;
          }
          areaEnd() {
            this._line = NaN;
          }
          lineStart() {
            this._point = 0;
          }
          lineEnd() {
            (this._line || (0 !== this._line && 1 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          }
          point(t, e) {
            switch (((t = +t), (e = +e), this._point)) {
              case 0:
                (this._point = 1),
                  this._line
                    ? this._context.lineTo(t, e)
                    : this._context.moveTo(t, e);
                break;
              case 1:
                this._point = 2;
              default:
                this._x
                  ? this._context.bezierCurveTo(
                      (this._x0 = (this._x0 + t) / 2),
                      this._y0,
                      this._x0,
                      e,
                      t,
                      e
                    )
                  : this._context.bezierCurveTo(
                      this._x0,
                      (this._y0 = (this._y0 + e) / 2),
                      t,
                      this._y0,
                      t,
                      e
                    );
            }
            (this._x0 = t), (this._y0 = e);
          }
        }
        function my(t) {
          this._context = t;
        }
        function by(t) {
          this._context = t;
        }
        function gy(t) {
          return new by(t);
        }
        function xy(t) {
          return t < 0 ? -1 : 1;
        }
        function wy(t, e, r) {
          var n = t._x1 - t._x0,
            o = e - t._x1,
            i = (t._y1 - t._y0) / (n || (o < 0 && -0)),
            a = (r - t._y1) / (o || (n < 0 && -0)),
            c = (i * o + a * n) / (n + o);
          return (
            (xy(i) + xy(a)) *
              Math.min(Math.abs(i), Math.abs(a), 0.5 * Math.abs(c)) || 0
          );
        }
        function Oy(t, e) {
          var r = t._x1 - t._x0;
          return r ? ((3 * (t._y1 - t._y0)) / r - e) / 2 : e;
        }
        function jy(t, e, r) {
          var n = t._x0,
            o = t._y0,
            i = t._x1,
            a = t._y1,
            c = (i - n) / 3;
          t._context.bezierCurveTo(n + c, o + c * e, i - c, a - c * r, i, a);
        }
        function Sy(t) {
          this._context = t;
        }
        function Ey(t) {
          this._context = new Py(t);
        }
        function Py(t) {
          this._context = t;
        }
        function Ay(t) {
          this._context = t;
        }
        function ky(t) {
          var e,
            r,
            n = t.length - 1,
            o = new Array(n),
            i = new Array(n),
            a = new Array(n);
          for (
            o[0] = 0, i[0] = 2, a[0] = t[0] + 2 * t[1], e = 1;
            e < n - 1;
            ++e
          )
            (o[e] = 1), (i[e] = 4), (a[e] = 4 * t[e] + 2 * t[e + 1]);
          for (
            o[n - 1] = 2, i[n - 1] = 7, a[n - 1] = 8 * t[n - 1] + t[n], e = 1;
            e < n;
            ++e
          )
            (r = o[e] / i[e - 1]), (i[e] -= r), (a[e] -= r * a[e - 1]);
          for (o[n - 1] = a[n - 1] / i[n - 1], e = n - 2; e >= 0; --e)
            o[e] = (a[e] - o[e + 1]) / i[e];
          for (i[n - 1] = (t[n] + o[n - 1]) / 2, e = 0; e < n - 1; ++e)
            i[e] = 2 * t[e + 1] - o[e + 1];
          return [o, i];
        }
        function My(t, e) {
          (this._context = t), (this._t = e);
        }
        function Ty(t) {
          return t[0];
        }
        function _y(t) {
          return t[1];
        }
        function Cy(t, e) {
          var r = ze(!0),
            n = null,
            o = gy,
            i = null,
            a = He(c);
          function c(c) {
            var u,
              l,
              s,
              f = (c = Es(c)).length,
              p = !1;
            for (null == n && (i = o((s = a()))), u = 0; u <= f; ++u)
              !(u < f && r((l = c[u]), u, c)) === p &&
                ((p = !p) ? i.lineStart() : i.lineEnd()),
                p && i.point(+t(l, u, c), +e(l, u, c));
            if (s) return (i = null), s + "" || null;
          }
          return (
            (t = "function" == typeof t ? t : void 0 === t ? Ty : ze(t)),
            (e = "function" == typeof e ? e : void 0 === e ? _y : ze(e)),
            (c.x = function (e) {
              return arguments.length
                ? ((t = "function" == typeof e ? e : ze(+e)), c)
                : t;
            }),
            (c.y = function (t) {
              return arguments.length
                ? ((e = "function" == typeof t ? t : ze(+t)), c)
                : e;
            }),
            (c.defined = function (t) {
              return arguments.length
                ? ((r = "function" == typeof t ? t : ze(!!t)), c)
                : r;
            }),
            (c.curve = function (t) {
              return arguments.length
                ? ((o = t), null != n && (i = o(n)), c)
                : o;
            }),
            (c.context = function (t) {
              return arguments.length
                ? (null == t ? (n = i = null) : (i = o((n = t))), c)
                : n;
            }),
            c
          );
        }
        function Dy(t, e, r) {
          var n = null,
            o = ze(!0),
            i = null,
            a = gy,
            c = null,
            u = He(l);
          function l(l) {
            var s,
              f,
              p,
              h,
              d,
              y = (l = Es(l)).length,
              v = !1,
              m = new Array(y),
              b = new Array(y);
            for (null == i && (c = a((d = u()))), s = 0; s <= y; ++s) {
              if (!(s < y && o((h = l[s]), s, l)) === v)
                if ((v = !v)) (f = s), c.areaStart(), c.lineStart();
                else {
                  for (c.lineEnd(), c.lineStart(), p = s - 1; p >= f; --p)
                    c.point(m[p], b[p]);
                  c.lineEnd(), c.areaEnd();
                }
              v &&
                ((m[s] = +t(h, s, l)),
                (b[s] = +e(h, s, l)),
                c.point(n ? +n(h, s, l) : m[s], r ? +r(h, s, l) : b[s]));
            }
            if (d) return (c = null), d + "" || null;
          }
          function s() {
            return Cy().defined(o).curve(a).context(i);
          }
          return (
            (t = "function" == typeof t ? t : void 0 === t ? Ty : ze(+t)),
            (e = "function" == typeof e ? e : ze(void 0 === e ? 0 : +e)),
            (r = "function" == typeof r ? r : void 0 === r ? _y : ze(+r)),
            (l.x = function (e) {
              return arguments.length
                ? ((t = "function" == typeof e ? e : ze(+e)), (n = null), l)
                : t;
            }),
            (l.x0 = function (e) {
              return arguments.length
                ? ((t = "function" == typeof e ? e : ze(+e)), l)
                : t;
            }),
            (l.x1 = function (t) {
              return arguments.length
                ? ((n = null == t ? null : "function" == typeof t ? t : ze(+t)),
                  l)
                : n;
            }),
            (l.y = function (t) {
              return arguments.length
                ? ((e = "function" == typeof t ? t : ze(+t)), (r = null), l)
                : e;
            }),
            (l.y0 = function (t) {
              return arguments.length
                ? ((e = "function" == typeof t ? t : ze(+t)), l)
                : e;
            }),
            (l.y1 = function (t) {
              return arguments.length
                ? ((r = null == t ? null : "function" == typeof t ? t : ze(+t)),
                  l)
                : r;
            }),
            (l.lineX0 = l.lineY0 =
              function () {
                return s().x(t).y(e);
              }),
            (l.lineY1 = function () {
              return s().x(t).y(r);
            }),
            (l.lineX1 = function () {
              return s().x(n).y(e);
            }),
            (l.defined = function (t) {
              return arguments.length
                ? ((o = "function" == typeof t ? t : ze(!!t)), l)
                : o;
            }),
            (l.curve = function (t) {
              return arguments.length
                ? ((a = t), null != i && (c = a(i)), l)
                : a;
            }),
            (l.context = function (t) {
              return arguments.length
                ? (null == t ? (i = c = null) : (c = a((i = t))), l)
                : i;
            }),
            l
          );
        }
        function Iy(t) {
          return (
            (Iy =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            Iy(t)
          );
        }
        function Ny() {
          return (
            (Ny = Object.assign
              ? Object.assign.bind()
              : function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var n in r)
                      Object.prototype.hasOwnProperty.call(r, n) &&
                        (t[n] = r[n]);
                  }
                  return t;
                }),
            Ny.apply(this, arguments)
          );
        }
        function By(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function Ly(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? By(Object(r), !0).forEach(function (e) {
                  Ry(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : By(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e)
                  );
                });
          }
          return t;
        }
        function Ry(t, e, r) {
          var n;
          return (
            (n = (function (t, e) {
              if ("object" != Iy(t) || !t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, "string");
                if ("object" != Iy(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(e)),
            (e = "symbol" == Iy(n) ? n : String(n)) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        (my.prototype = {
          areaStart: fy,
          areaEnd: fy,
          lineStart: function () {
            this._point = 0;
          },
          lineEnd: function () {
            this._point && this._context.closePath();
          },
          point: function (t, e) {
            (t = +t),
              (e = +e),
              this._point
                ? this._context.lineTo(t, e)
                : ((this._point = 1), this._context.moveTo(t, e));
          },
        }),
          (by.prototype = {
            areaStart: function () {
              this._line = 0;
            },
            areaEnd: function () {
              this._line = NaN;
            },
            lineStart: function () {
              this._point = 0;
            },
            lineEnd: function () {
              (this._line || (0 !== this._line && 1 === this._point)) &&
                this._context.closePath(),
                (this._line = 1 - this._line);
            },
            point: function (t, e) {
              switch (((t = +t), (e = +e), this._point)) {
                case 0:
                  (this._point = 1),
                    this._line
                      ? this._context.lineTo(t, e)
                      : this._context.moveTo(t, e);
                  break;
                case 1:
                  this._point = 2;
                default:
                  this._context.lineTo(t, e);
              }
            },
          }),
          (Sy.prototype = {
            areaStart: function () {
              this._line = 0;
            },
            areaEnd: function () {
              this._line = NaN;
            },
            lineStart: function () {
              (this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
                (this._point = 0);
            },
            lineEnd: function () {
              switch (this._point) {
                case 2:
                  this._context.lineTo(this._x1, this._y1);
                  break;
                case 3:
                  jy(this, this._t0, Oy(this, this._t0));
              }
              (this._line || (0 !== this._line && 1 === this._point)) &&
                this._context.closePath(),
                (this._line = 1 - this._line);
            },
            point: function (t, e) {
              var r = NaN;
              if (((e = +e), (t = +t) !== this._x1 || e !== this._y1)) {
                switch (this._point) {
                  case 0:
                    (this._point = 1),
                      this._line
                        ? this._context.lineTo(t, e)
                        : this._context.moveTo(t, e);
                    break;
                  case 1:
                    this._point = 2;
                    break;
                  case 2:
                    (this._point = 3),
                      jy(this, Oy(this, (r = wy(this, t, e))), r);
                    break;
                  default:
                    jy(this, this._t0, (r = wy(this, t, e)));
                }
                (this._x0 = this._x1),
                  (this._x1 = t),
                  (this._y0 = this._y1),
                  (this._y1 = e),
                  (this._t0 = r);
              }
            },
          }),
          ((Ey.prototype = Object.create(Sy.prototype)).point = function (
            t,
            e
          ) {
            Sy.prototype.point.call(this, e, t);
          }),
          (Py.prototype = {
            moveTo: function (t, e) {
              this._context.moveTo(e, t);
            },
            closePath: function () {
              this._context.closePath();
            },
            lineTo: function (t, e) {
              this._context.lineTo(e, t);
            },
            bezierCurveTo: function (t, e, r, n, o, i) {
              this._context.bezierCurveTo(e, t, n, r, i, o);
            },
          }),
          (Ay.prototype = {
            areaStart: function () {
              this._line = 0;
            },
            areaEnd: function () {
              this._line = NaN;
            },
            lineStart: function () {
              (this._x = []), (this._y = []);
            },
            lineEnd: function () {
              var t = this._x,
                e = this._y,
                r = t.length;
              if (r)
                if (
                  (this._line
                    ? this._context.lineTo(t[0], e[0])
                    : this._context.moveTo(t[0], e[0]),
                  2 === r)
                )
                  this._context.lineTo(t[1], e[1]);
                else
                  for (var n = ky(t), o = ky(e), i = 0, a = 1; a < r; ++i, ++a)
                    this._context.bezierCurveTo(
                      n[0][i],
                      o[0][i],
                      n[1][i],
                      o[1][i],
                      t[a],
                      e[a]
                    );
              (this._line || (0 !== this._line && 1 === r)) &&
                this._context.closePath(),
                (this._line = 1 - this._line),
                (this._x = this._y = null);
            },
            point: function (t, e) {
              this._x.push(+t), this._y.push(+e);
            },
          }),
          (My.prototype = {
            areaStart: function () {
              this._line = 0;
            },
            areaEnd: function () {
              this._line = NaN;
            },
            lineStart: function () {
              (this._x = this._y = NaN), (this._point = 0);
            },
            lineEnd: function () {
              0 < this._t &&
                this._t < 1 &&
                2 === this._point &&
                this._context.lineTo(this._x, this._y),
                (this._line || (0 !== this._line && 1 === this._point)) &&
                  this._context.closePath(),
                this._line >= 0 &&
                  ((this._t = 1 - this._t), (this._line = 1 - this._line));
            },
            point: function (t, e) {
              switch (((t = +t), (e = +e), this._point)) {
                case 0:
                  (this._point = 1),
                    this._line
                      ? this._context.lineTo(t, e)
                      : this._context.moveTo(t, e);
                  break;
                case 1:
                  this._point = 2;
                default:
                  if (this._t <= 0)
                    this._context.lineTo(this._x, e),
                      this._context.lineTo(t, e);
                  else {
                    var r = this._x * (1 - this._t) + t * this._t;
                    this._context.lineTo(r, this._y),
                      this._context.lineTo(r, e);
                  }
              }
              (this._x = t), (this._y = e);
            },
          });
        var zy = {
            curveBasisClosed: function (t) {
              return new dy(t);
            },
            curveBasisOpen: function (t) {
              return new yy(t);
            },
            curveBasis: function (t) {
              return new hy(t);
            },
            curveBumpX: function (t) {
              return new vy(t, !0);
            },
            curveBumpY: function (t) {
              return new vy(t, !1);
            },
            curveLinearClosed: function (t) {
              return new my(t);
            },
            curveLinear: gy,
            curveMonotoneX: function (t) {
              return new Sy(t);
            },
            curveMonotoneY: function (t) {
              return new Ey(t);
            },
            curveNatural: function (t) {
              return new Ay(t);
            },
            curveStep: function (t) {
              return new My(t, 0.5);
            },
            curveStepAfter: function (t) {
              return new My(t, 1);
            },
            curveStepBefore: function (t) {
              return new My(t, 0);
            },
          },
          Uy = function (t) {
            return t.x === +t.x && t.y === +t.y;
          },
          $y = function (t) {
            return t.x;
          },
          Fy = function (t) {
            return t.y;
          },
          Wy = function (t) {
            var e = t.className,
              r = t.points,
              n = t.path,
              o = t.pathRef;
            if (!((r && r.length) || n)) return null;
            var a =
              r && r.length
                ? (function (t) {
                    var e,
                      r = t.type,
                      n = void 0 === r ? "linear" : r,
                      o = t.points,
                      i = void 0 === o ? [] : o,
                      a = t.baseLine,
                      c = t.layout,
                      u = t.connectNulls,
                      l = void 0 !== u && u,
                      s = (function (t, e) {
                        if (I()(t)) return t;
                        var r = "curve".concat(ve()(t));
                        return ("curveMonotone" !== r && "curveBump" !== r) ||
                          !e
                          ? zy[r] || gy
                          : zy[
                              "".concat(r).concat("vertical" === e ? "Y" : "X")
                            ];
                      })(n, c),
                      f = l
                        ? i.filter(function (t) {
                            return Uy(t);
                          })
                        : i;
                    if (Array.isArray(a)) {
                      var p = l
                          ? a.filter(function (t) {
                              return Uy(t);
                            })
                          : a,
                        h = f.map(function (t, e) {
                          return Ly(Ly({}, t), {}, { base: p[e] });
                        });
                      return (
                        (e =
                          "vertical" === c
                            ? Dy()
                                .y(Fy)
                                .x1($y)
                                .x0(function (t) {
                                  return t.base.x;
                                })
                            : Dy()
                                .x($y)
                                .y1(Fy)
                                .y0(function (t) {
                                  return t.base.y;
                                }))
                          .defined(Uy)
                          .curve(s),
                        e(h)
                      );
                    }
                    return (
                      (e =
                        "vertical" === c && O(a)
                          ? Dy().y(Fy).x1($y).x0(a)
                          : O(a)
                          ? Dy().x($y).y1(Fy).y0(a)
                          : Cy().x($y).y(Fy))
                        .defined(Uy)
                        .curve(s),
                      e(f)
                    );
                  })(t)
                : n;
            return i().createElement(
              "path",
              Ny({}, ot(t, !1), W(t), {
                className: u("recharts-curve", e),
                d: a,
                ref: o,
              })
            );
          };
        function qy(t) {
          return (
            (qy =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            qy(t)
          );
        }
        var Xy = ["x", "y", "top", "left", "width", "height", "className"];
        function Hy() {
          return (
            (Hy = Object.assign
              ? Object.assign.bind()
              : function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var n in r)
                      Object.prototype.hasOwnProperty.call(r, n) &&
                        (t[n] = r[n]);
                  }
                  return t;
                }),
            Hy.apply(this, arguments)
          );
        }
        function Vy(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function Gy(t, e, r) {
          var n;
          return (
            (n = (function (t, e) {
              if ("object" != qy(t) || !t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, "string");
                if ("object" != qy(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(e)),
            (e = "symbol" == qy(n) ? n : String(n)) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        var Yy = function (t, e, r, n, o, i) {
            return "M"
              .concat(t, ",")
              .concat(o, "v")
              .concat(n, "M")
              .concat(i, ",")
              .concat(e, "h")
              .concat(r);
          },
          Ky = function (t) {
            var e = t.x,
              r = void 0 === e ? 0 : e,
              n = t.y,
              o = void 0 === n ? 0 : n,
              a = t.top,
              c = void 0 === a ? 0 : a,
              l = t.left,
              s = void 0 === l ? 0 : l,
              f = t.width,
              p = void 0 === f ? 0 : f,
              h = t.height,
              d = void 0 === h ? 0 : h,
              y = t.className,
              v = (function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = null != arguments[e] ? arguments[e] : {};
                  e % 2
                    ? Vy(Object(r), !0).forEach(function (e) {
                        Gy(t, e, r[e]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        t,
                        Object.getOwnPropertyDescriptors(r)
                      )
                    : Vy(Object(r)).forEach(function (e) {
                        Object.defineProperty(
                          t,
                          e,
                          Object.getOwnPropertyDescriptor(r, e)
                        );
                      });
                }
                return t;
              })(
                { x: r, y: o, top: c, left: s, width: p, height: d },
                (function (t, e) {
                  if (null == t) return {};
                  var r,
                    n,
                    o = (function (t, e) {
                      if (null == t) return {};
                      var r,
                        n,
                        o = {},
                        i = Object.keys(t);
                      for (n = 0; n < i.length; n++)
                        (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
                      return o;
                    })(t, e);
                  if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (n = 0; n < i.length; n++)
                      (r = i[n]),
                        e.indexOf(r) >= 0 ||
                          (Object.prototype.propertyIsEnumerable.call(t, r) &&
                            (o[r] = t[r]));
                  }
                  return o;
                })(t, Xy)
              );
            return O(r) && O(o) && O(p) && O(d) && O(c) && O(s)
              ? i().createElement(
                  "path",
                  Hy({}, ot(v, !0), {
                    className: u("recharts-cross", y),
                    d: Yy(r, o, p, d, c, s),
                  })
                )
              : null;
          };
        function Zy(t) {
          var e = t.cx,
            r = t.cy,
            n = t.radius,
            o = t.startAngle,
            i = t.endAngle;
          return {
            points: [xp(e, r, n, o), xp(e, r, n, i)],
            cx: e,
            cy: r,
            radius: n,
            startAngle: o,
            endAngle: i,
          };
        }
        function Jy(t, e, r) {
          var n, o, i, a;
          if ("horizontal" === t)
            (i = n = e.x), (o = r.top), (a = r.top + r.height);
          else if ("vertical" === t)
            (a = o = e.y), (n = r.left), (i = r.left + r.width);
          else if (null != e.cx && null != e.cy) {
            if ("centric" !== t) return Zy(e);
            var c = e.cx,
              u = e.cy,
              l = e.innerRadius,
              s = e.outerRadius,
              f = e.angle,
              p = xp(c, u, l, f),
              h = xp(c, u, s, f);
            (n = p.x), (o = p.y), (i = h.x), (a = h.y);
          }
          return [
            { x: n, y: o },
            { x: i, y: a },
          ];
        }
        function Qy(t) {
          return (
            (Qy =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            Qy(t)
          );
        }
        function tv(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function ev(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? tv(Object(r), !0).forEach(function (e) {
                  rv(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : tv(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e)
                  );
                });
          }
          return t;
        }
        function rv(t, e, r) {
          var n;
          return (
            (n = (function (t, e) {
              if ("object" != Qy(t) || !t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, "string");
                if ("object" != Qy(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(e)),
            (e = "symbol" == Qy(n) ? n : String(n)) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        function nv(t) {
          var e,
            r = t.element,
            n = t.tooltipEventType,
            i = t.isActive,
            a = t.activeCoordinate,
            c = t.activePayload,
            l = t.offset,
            s = t.activeTooltipIndex,
            f = t.tooltipAxisBandSize,
            p = t.layout,
            h = t.chartName;
          if (
            !r ||
            !r.props.cursor ||
            !i ||
            !a ||
            ("ScatterChart" !== h && "axis" !== n)
          )
            return null;
          var d = Wy;
          if ("ScatterChart" === h) (e = a), (d = Ky);
          else if ("BarChart" === h)
            (e = (function (t, e, r, n) {
              var o = n / 2;
              return {
                stroke: "none",
                fill: "#ccc",
                x: "horizontal" === t ? e.x - o : r.left + 0.5,
                y: "horizontal" === t ? r.top + 0.5 : e.y - o,
                width: "horizontal" === t ? n : r.width - 1,
                height: "horizontal" === t ? r.height - 1 : n,
              };
            })(p, a, l, f)),
              (d = Fo);
          else if ("radial" === p) {
            var y = Zy(a),
              v = y.cx,
              m = y.cy,
              b = y.radius;
            (e = {
              cx: v,
              cy: m,
              startAngle: y.startAngle,
              endAngle: y.endAngle,
              innerRadius: b,
              outerRadius: b,
            }),
              (d = jh);
          } else (e = { points: Jy(p, a, l) }), (d = Wy);
          var g = ev(
            ev(
              ev(ev({ stroke: "#ccc", pointerEvents: "none" }, l), e),
              ot(r.props.cursor, !1)
            ),
            {},
            {
              payload: c,
              payloadIndex: s,
              className: u("recharts-tooltip-cursor", r.props.cursor.className),
            }
          );
          return (0, o.isValidElement)(r.props.cursor)
            ? (0, o.cloneElement)(r.props.cursor, g)
            : (0, o.createElement)(d, g);
        }
        var ov = ["item"],
          iv = [
            "children",
            "className",
            "width",
            "height",
            "style",
            "compact",
            "title",
            "desc",
          ];
        function av(t) {
          return (
            (av =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            av(t)
          );
        }
        function cv() {
          return (
            (cv = Object.assign
              ? Object.assign.bind()
              : function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var n in r)
                      Object.prototype.hasOwnProperty.call(r, n) &&
                        (t[n] = r[n]);
                  }
                  return t;
                }),
            cv.apply(this, arguments)
          );
        }
        function uv(t, e) {
          return (
            (function (t) {
              if (Array.isArray(t)) return t;
            })(t) ||
            (function (t, e) {
              var r =
                null == t
                  ? null
                  : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                    t["@@iterator"];
              if (null != r) {
                var n,
                  o,
                  i,
                  a,
                  c = [],
                  u = !0,
                  l = !1;
                try {
                  if (((i = (r = r.call(t)).next), 0 === e)) {
                    if (Object(r) !== r) return;
                    u = !1;
                  } else
                    for (
                      ;
                      !(u = (n = i.call(r)).done) &&
                      (c.push(n.value), c.length !== e);
                      u = !0
                    );
                } catch (t) {
                  (l = !0), (o = t);
                } finally {
                  try {
                    if (
                      !u &&
                      null != r.return &&
                      ((a = r.return()), Object(a) !== a)
                    )
                      return;
                  } finally {
                    if (l) throw o;
                  }
                }
                return c;
              }
            })(t, e) ||
            mv(t, e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function lv(t, e) {
          if (null == t) return {};
          var r,
            n,
            o = (function (t, e) {
              if (null == t) return {};
              var r,
                n,
                o = {},
                i = Object.keys(t);
              for (n = 0; n < i.length; n++)
                (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
              return o;
            })(t, e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            for (n = 0; n < i.length; n++)
              (r = i[n]),
                e.indexOf(r) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(t, r) &&
                    (o[r] = t[r]));
          }
          return o;
        }
        function sv(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, Ov(n.key), n);
          }
        }
        function fv(t, e, r) {
          return (
            (e = hv(e)),
            (function (t, e) {
              if (e && ("object" === av(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return dv(t);
            })(
              t,
              pv()
                ? Reflect.construct(e, r || [], hv(t).constructor)
                : e.apply(t, r)
            )
          );
        }
        function pv() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            );
          } catch (t) {}
          return (pv = function () {
            return !!t;
          })();
        }
        function hv(t) {
          return (
            (hv = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            hv(t)
          );
        }
        function dv(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function yv(t, e) {
          return (
            (yv = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            yv(t, e)
          );
        }
        function vv(t) {
          return (
            (function (t) {
              if (Array.isArray(t)) return bv(t);
            })(t) ||
            (function (t) {
              if (
                ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
                null != t["@@iterator"]
              )
                return Array.from(t);
            })(t) ||
            mv(t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function mv(t, e) {
          if (t) {
            if ("string" == typeof t) return bv(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            return (
              "Object" === r && t.constructor && (r = t.constructor.name),
              "Map" === r || "Set" === r
                ? Array.from(t)
                : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? bv(t, e)
                : void 0
            );
          }
        }
        function bv(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
          return n;
        }
        function gv(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function xv(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? gv(Object(r), !0).forEach(function (e) {
                  wv(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : gv(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e)
                  );
                });
          }
          return t;
        }
        function wv(t, e, r) {
          return (
            (e = Ov(e)) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        function Ov(t) {
          var e = (function (t, e) {
            if ("object" != av(t) || !t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, "string");
              if ("object" != av(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(t);
          })(t);
          return "symbol" == av(e) ? e : String(e);
        }
        var jv = { xAxis: ["bottom", "top"], yAxis: ["left", "right"] },
          Sv = { width: "100%", height: "100%" },
          Ev = { x: 0, y: 0 };
        function Pv(t) {
          return t;
        }
        var Av = function (t, e) {
          var r = e.graphicalItems,
            n = e.dataStartIndex,
            o = e.dataEndIndex,
            i = (null != r ? r : []).reduce(function (t, e) {
              var r = e.props.data;
              return r && r.length ? [].concat(vv(t), vv(r)) : t;
            }, []);
          return i.length > 0
            ? i
            : t && t.length && O(n) && O(o)
            ? t.slice(n, o + 1)
            : [];
        };
        function kv(t) {
          return "number" === t ? [0, "auto"] : void 0;
        }
        var Mv = function (t, e, r, n) {
            var o = t.graphicalItems,
              i = t.tooltipAxis,
              a = Av(e, t);
            return r < 0 || !o || !o.length || r >= a.length
              ? null
              : o.reduce(function (o, c) {
                  var u,
                    l,
                    s = null !== (u = c.props.data) && void 0 !== u ? u : e;
                  return (
                    s &&
                      t.dataStartIndex + t.dataEndIndex !== 0 &&
                      (s = s.slice(t.dataStartIndex, t.dataEndIndex + 1)),
                    (l =
                      i.dataKey && !i.allowDuplicatedCategory
                        ? M(void 0 === s ? a : s, i.dataKey, n)
                        : (s && s[r]) || a[r])
                      ? [].concat(vv(o), [Gf(c, l)])
                      : o
                  );
                }, []);
          },
          Tv = function (t, e, r, n) {
            var o = n || { x: t.chartX, y: t.chartY },
              i = (function (t, e) {
                return "horizontal" === e
                  ? t.x
                  : "vertical" === e
                  ? t.y
                  : "centric" === e
                  ? t.angle
                  : t.radius;
              })(o, r),
              a = t.orderedTooltipTicks,
              c = t.tooltipAxis,
              u = t.tooltipTicks,
              l = (function (t) {
                var e,
                  r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : [],
                  n = arguments.length > 2 ? arguments[2] : void 0,
                  o = arguments.length > 3 ? arguments[3] : void 0,
                  i = -1,
                  a =
                    null !== (e = null == r ? void 0 : r.length) && void 0 !== e
                      ? e
                      : 0;
                if (a <= 1) return 0;
                if (
                  o &&
                  "angleAxis" === o.axisType &&
                  Math.abs(Math.abs(o.range[1] - o.range[0]) - 360) <= 1e-6
                )
                  for (var c = o.range, u = 0; u < a; u++) {
                    var l = u > 0 ? n[u - 1].coordinate : n[a - 1].coordinate,
                      s = n[u].coordinate,
                      f = u >= a - 1 ? n[0].coordinate : n[u + 1].coordinate,
                      p = void 0;
                    if (x(s - l) !== x(f - s)) {
                      var h = [];
                      if (x(f - s) === x(c[1] - c[0])) {
                        p = f;
                        var d = s + c[1] - c[0];
                        (h[0] = Math.min(d, (d + l) / 2)),
                          (h[1] = Math.max(d, (d + l) / 2));
                      } else {
                        p = l;
                        var y = f + c[1] - c[0];
                        (h[0] = Math.min(s, (y + s) / 2)),
                          (h[1] = Math.max(s, (y + s) / 2));
                      }
                      var v = [
                        Math.min(s, (p + s) / 2),
                        Math.max(s, (p + s) / 2),
                      ];
                      if ((t > v[0] && t <= v[1]) || (t >= h[0] && t <= h[1])) {
                        i = n[u].index;
                        break;
                      }
                    } else {
                      var m = Math.min(l, f),
                        b = Math.max(l, f);
                      if (t > (m + s) / 2 && t <= (b + s) / 2) {
                        i = n[u].index;
                        break;
                      }
                    }
                  }
                else
                  for (var g = 0; g < a; g++)
                    if (
                      (0 === g &&
                        t <= (r[g].coordinate + r[g + 1].coordinate) / 2) ||
                      (g > 0 &&
                        g < a - 1 &&
                        t > (r[g].coordinate + r[g - 1].coordinate) / 2 &&
                        t <= (r[g].coordinate + r[g + 1].coordinate) / 2) ||
                      (g === a - 1 &&
                        t > (r[g].coordinate + r[g - 1].coordinate) / 2)
                    ) {
                      i = r[g].index;
                      break;
                    }
                return i;
              })(i, a, u, c);
            if (l >= 0 && u) {
              var s = u[l] && u[l].value,
                f = Mv(t, e, l, s),
                p = (function (t, e, r, n) {
                  var o = e.find(function (t) {
                    return t && t.index === r;
                  });
                  if (o) {
                    if ("horizontal" === t) return { x: o.coordinate, y: n.y };
                    if ("vertical" === t) return { x: n.x, y: o.coordinate };
                    if ("centric" === t) {
                      var i = o.coordinate,
                        a = n.radius;
                      return xv(
                        xv(xv({}, n), xp(n.cx, n.cy, a, i)),
                        {},
                        { angle: i, radius: a }
                      );
                    }
                    var c = o.coordinate,
                      u = n.angle;
                    return xv(
                      xv(xv({}, n), xp(n.cx, n.cy, c, u)),
                      {},
                      { angle: u, radius: c }
                    );
                  }
                  return Ev;
                })(r, a, l, o);
              return {
                activeTooltipIndex: l,
                activeLabel: s,
                activePayload: f,
                activeCoordinate: p,
              };
            }
            return null;
          },
          _v = function (t, e) {
            var r = e.axisType,
              n = void 0 === r ? "xAxis" : r,
              o = e.AxisComp,
              i = e.graphicalItems,
              a = e.stackGroups,
              c = e.dataStartIndex,
              u = e.dataEndIndex,
              l = t.children,
              s = "".concat(n, "Id"),
              f = tt(l, o),
              p = {};
            return (
              f && f.length
                ? (p = (function (t, e) {
                    var r = e.axes,
                      n = e.graphicalItems,
                      o = e.axisType,
                      i = e.axisIdKey,
                      a = e.stackGroups,
                      c = e.dataStartIndex,
                      u = e.dataEndIndex,
                      l = t.layout,
                      s = t.children,
                      f = t.stackOffset,
                      p = Cf(l, o);
                    return r.reduce(function (e, r) {
                      var h,
                        d = r.props,
                        y = d.type,
                        v = d.dataKey,
                        m = d.allowDataOverflow,
                        b = d.allowDuplicatedCategory,
                        g = d.scale,
                        x = d.ticks,
                        w = d.includeHidden,
                        j = r.props[i];
                      if (e[j]) return e;
                      var S,
                        E,
                        P,
                        A = Av(t.data, {
                          graphicalItems: n.filter(function (t) {
                            return t.props[i] === j;
                          }),
                          dataStartIndex: c,
                          dataEndIndex: u,
                        }),
                        k = A.length;
                      (function (t, e, r) {
                        if ("number" === r && !0 === e && Array.isArray(t)) {
                          var n = null == t ? void 0 : t[0],
                            o = null == t ? void 0 : t[1];
                          if (n && o && O(n) && O(o)) return !0;
                        }
                        return !1;
                      })(r.props.domain, m, y) &&
                        ((S = Xf(r.props.domain, null, m)),
                        !p ||
                          ("number" !== y && "auto" === g) ||
                          (P = kf(A, v, "category")));
                      var M = kv(y);
                      if (!S || 0 === S.length) {
                        var T,
                          _ =
                            null !== (T = r.props.domain) && void 0 !== T
                              ? T
                              : M;
                        if (v) {
                          if (((S = kf(A, v, y)), "category" === y && p)) {
                            var D = (function (t) {
                              if (!Array.isArray(t)) return !1;
                              for (
                                var e = t.length, r = {}, n = 0;
                                n < e;
                                n++
                              ) {
                                if (r[t[n]]) return !0;
                                r[t[n]] = !0;
                              }
                              return !1;
                            })(S);
                            b && D
                              ? ((E = S), (S = yt()(0, k)))
                              : b ||
                                (S = Vf(_, S, r).reduce(function (t, e) {
                                  return t.indexOf(e) >= 0
                                    ? t
                                    : [].concat(vv(t), [e]);
                                }, []));
                          } else if ("category" === y)
                            S = b
                              ? S.filter(function (t) {
                                  return "" !== t && !C()(t);
                                })
                              : Vf(_, S, r).reduce(function (t, e) {
                                  return t.indexOf(e) >= 0 || "" === e || C()(e)
                                    ? t
                                    : [].concat(vv(t), [e]);
                                }, []);
                          else if ("number" === y) {
                            var I = (function (t, e, r, n, o) {
                              var i = e
                                .map(function (e) {
                                  return Tf(t, e, r, o, n);
                                })
                                .filter(function (t) {
                                  return !C()(t);
                                });
                              return i && i.length
                                ? i.reduce(
                                    function (t, e) {
                                      return [
                                        Math.min(t[0], e[0]),
                                        Math.max(t[1], e[1]),
                                      ];
                                    },
                                    [1 / 0, -1 / 0]
                                  )
                                : null;
                            })(
                              A,
                              n.filter(function (t) {
                                return t.props[i] === j && (w || !t.props.hide);
                              }),
                              v,
                              o,
                              l
                            );
                            I && (S = I);
                          }
                          !p ||
                            ("number" !== y && "auto" === g) ||
                            (P = kf(A, v, "category"));
                        } else
                          S = p
                            ? yt()(0, k)
                            : a && a[j] && a[j].hasStack && "number" === y
                            ? "expand" === f
                              ? [0, 1]
                              : Ff(a[j].stackGroups, c, u)
                            : _f(
                                A,
                                n.filter(function (t) {
                                  return (
                                    t.props[i] === j && (w || !t.props.hide)
                                  );
                                }),
                                y,
                                l,
                                !0
                              );
                        if ("number" === y)
                          (S = ry(s, S, j, o, x)), _ && (S = Xf(_, S, m));
                        else if ("category" === y && _) {
                          var N = _;
                          S.every(function (t) {
                            return N.indexOf(t) >= 0;
                          }) && (S = N);
                        }
                      }
                      return xv(
                        xv({}, e),
                        {},
                        wv(
                          {},
                          j,
                          xv(
                            xv({}, r.props),
                            {},
                            {
                              axisType: o,
                              domain: S,
                              categoricalDomain: P,
                              duplicateDomain: E,
                              originalDomain:
                                null !== (h = r.props.domain) && void 0 !== h
                                  ? h
                                  : M,
                              isCategorical: p,
                              layout: l,
                            }
                          )
                        )
                      );
                    }, {});
                  })(t, {
                    axes: f,
                    graphicalItems: i,
                    axisType: n,
                    axisIdKey: s,
                    stackGroups: a,
                    dataStartIndex: c,
                    dataEndIndex: u,
                  }))
                : i &&
                  i.length &&
                  (p = (function (t, e) {
                    var r = e.graphicalItems,
                      n = e.Axis,
                      o = e.axisType,
                      i = e.axisIdKey,
                      a = e.stackGroups,
                      c = e.dataStartIndex,
                      u = e.dataEndIndex,
                      l = t.layout,
                      s = t.children,
                      f = Av(t.data, {
                        graphicalItems: r,
                        dataStartIndex: c,
                        dataEndIndex: u,
                      }),
                      p = f.length,
                      h = Cf(l, o),
                      d = -1;
                    return r.reduce(function (t, e) {
                      var y,
                        v = e.props[i],
                        b = kv("number");
                      return t[v]
                        ? t
                        : (d++,
                          h
                            ? (y = yt()(0, p))
                            : a && a[v] && a[v].hasStack
                            ? ((y = Ff(a[v].stackGroups, c, u)),
                              (y = ry(s, y, v, o)))
                            : ((y = Xf(
                                b,
                                _f(
                                  f,
                                  r.filter(function (t) {
                                    return t.props[i] === v && !t.props.hide;
                                  }),
                                  "number",
                                  l
                                ),
                                n.defaultProps.allowDataOverflow
                              )),
                              (y = ry(s, y, v, o))),
                          xv(
                            xv({}, t),
                            {},
                            wv(
                              {},
                              v,
                              xv(
                                xv({ axisType: o }, n.defaultProps),
                                {},
                                {
                                  hide: !0,
                                  orientation: m()(
                                    jv,
                                    "".concat(o, ".").concat(d % 2),
                                    null
                                  ),
                                  domain: y,
                                  originalDomain: b,
                                  isCategorical: h,
                                  layout: l,
                                }
                              )
                            )
                          ));
                    }, {});
                  })(t, {
                    Axis: o,
                    graphicalItems: i,
                    axisType: n,
                    axisIdKey: s,
                    stackGroups: a,
                    dataStartIndex: c,
                    dataEndIndex: u,
                  })),
              p
            );
          },
          Cv = function (t) {
            var e = t.children,
              r = t.defaultShowTooltip,
              n = et(e, hp),
              o = 0,
              i = 0;
            return (
              t.data && 0 !== t.data.length && (i = t.data.length - 1),
              n &&
                n.props &&
                (n.props.startIndex >= 0 && (o = n.props.startIndex),
                n.props.endIndex >= 0 && (i = n.props.endIndex)),
              {
                chartX: 0,
                chartY: 0,
                dataStartIndex: o,
                dataEndIndex: i,
                activeTooltipIndex: -1,
                isTooltipActive: Boolean(r),
              }
            );
          },
          Dv = function (t) {
            return "horizontal" === t
              ? { numericAxisName: "yAxis", cateAxisName: "xAxis" }
              : "vertical" === t
              ? { numericAxisName: "xAxis", cateAxisName: "yAxis" }
              : "centric" === t
              ? { numericAxisName: "radiusAxis", cateAxisName: "angleAxis" }
              : { numericAxisName: "angleAxis", cateAxisName: "radiusAxis" };
          },
          Iv = function (t, e) {
            return "xAxis" === e
              ? t[e].width
              : "yAxis" === e
              ? t[e].height
              : void 0;
          },
          Nv = ["type", "layout", "connectNulls", "ref"];
        function Bv(t) {
          return (
            (Bv =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            Bv(t)
          );
        }
        function Lv() {
          return (
            (Lv = Object.assign
              ? Object.assign.bind()
              : function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var n in r)
                      Object.prototype.hasOwnProperty.call(r, n) &&
                        (t[n] = r[n]);
                  }
                  return t;
                }),
            Lv.apply(this, arguments)
          );
        }
        function Rv(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function zv(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? Rv(Object(r), !0).forEach(function (e) {
                  Gv(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : Rv(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e)
                  );
                });
          }
          return t;
        }
        function Uv(t) {
          return (
            (function (t) {
              if (Array.isArray(t)) return $v(t);
            })(t) ||
            (function (t) {
              if (
                ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
                null != t["@@iterator"]
              )
                return Array.from(t);
            })(t) ||
            (function (t, e) {
              if (t) {
                if ("string" == typeof t) return $v(t, e);
                var r = Object.prototype.toString.call(t).slice(8, -1);
                return (
                  "Object" === r && t.constructor && (r = t.constructor.name),
                  "Map" === r || "Set" === r
                    ? Array.from(t)
                    : "Arguments" === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? $v(t, e)
                    : void 0
                );
              }
            })(t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function $v(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
          return n;
        }
        function Fv(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, Yv(n.key), n);
          }
        }
        function Wv(t, e, r) {
          return (
            (e = Xv(e)),
            (function (t, e) {
              if (e && ("object" === Bv(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return Hv(t);
            })(
              t,
              qv()
                ? Reflect.construct(e, r || [], Xv(t).constructor)
                : e.apply(t, r)
            )
          );
        }
        function qv() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            );
          } catch (t) {}
          return (qv = function () {
            return !!t;
          })();
        }
        function Xv(t) {
          return (
            (Xv = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            Xv(t)
          );
        }
        function Hv(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function Vv(t, e) {
          return (
            (Vv = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            Vv(t, e)
          );
        }
        function Gv(t, e, r) {
          return (
            (e = Yv(e)) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        function Yv(t) {
          var e = (function (t, e) {
            if ("object" != Bv(t) || !t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, "string");
              if ("object" != Bv(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(t);
          })(t);
          return "symbol" == Bv(e) ? e : String(e);
        }
        var Kv = (function (t) {
          function e() {
            var t;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e);
            for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
              n[o] = arguments[o];
            return (
              Gv(Hv((t = Wv(this, e, [].concat(n)))), "state", {
                isAnimationFinished: !0,
                totalLength: 0,
              }),
              Gv(Hv(t), "generateSimpleStrokeDasharray", function (t, e) {
                return "".concat(e, "px ").concat(t - e, "px");
              }),
              Gv(Hv(t), "getStrokeDasharray", function (r, n, o) {
                var i = o.reduce(function (t, e) {
                  return t + e;
                });
                if (!i) return t.generateSimpleStrokeDasharray(n, r);
                for (
                  var a = Math.floor(r / i),
                    c = r % i,
                    u = n - r,
                    l = [],
                    s = 0,
                    f = 0;
                  s < o.length;
                  f += o[s], ++s
                )
                  if (f + o[s] > c) {
                    l = [].concat(Uv(o.slice(0, s)), [c - f]);
                    break;
                  }
                var p = l.length % 2 == 0 ? [0, u] : [u];
                return []
                  .concat(Uv(e.repeat(o, a)), Uv(l), p)
                  .map(function (t) {
                    return "".concat(t, "px");
                  })
                  .join(", ");
              }),
              Gv(Hv(t), "id", E("recharts-line-")),
              Gv(Hv(t), "pathRef", function (e) {
                t.mainCurve = e;
              }),
              Gv(Hv(t), "handleAnimationEnd", function () {
                t.setState({ isAnimationFinished: !0 }),
                  t.props.onAnimationEnd && t.props.onAnimationEnd();
              }),
              Gv(Hv(t), "handleAnimationStart", function () {
                t.setState({ isAnimationFinished: !1 }),
                  t.props.onAnimationStart && t.props.onAnimationStart();
              }),
              t
            );
          }
          var r, n, o;
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && Vv(t, e);
            })(e, t),
            (r = e),
            (n = [
              {
                key: "componentDidMount",
                value: function () {
                  if (this.props.isAnimationActive) {
                    var t = this.getTotalLength();
                    this.setState({ totalLength: t });
                  }
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  if (this.props.isAnimationActive) {
                    var t = this.getTotalLength();
                    t !== this.state.totalLength &&
                      this.setState({ totalLength: t });
                  }
                },
              },
              {
                key: "getTotalLength",
                value: function () {
                  var t = this.mainCurve;
                  try {
                    return (t && t.getTotalLength && t.getTotalLength()) || 0;
                  } catch (t) {
                    return 0;
                  }
                },
              },
              {
                key: "renderErrorBar",
                value: function (t, e) {
                  if (
                    this.props.isAnimationActive &&
                    !this.state.isAnimationFinished
                  )
                    return null;
                  var r = this.props,
                    n = r.points,
                    o = r.xAxis,
                    a = r.yAxis,
                    c = r.layout,
                    u = tt(r.children, yf);
                  if (!u) return null;
                  var l = function (t, e) {
                      return {
                        x: t.x,
                        y: t.y,
                        value: t.value,
                        errorVal: Af(t.payload, e),
                      };
                    },
                    s = {
                      clipPath: t ? "url(#clipPath-".concat(e, ")") : null,
                    };
                  return i().createElement(
                    Pt,
                    s,
                    u.map(function (t) {
                      return i().cloneElement(t, {
                        key: "bar-".concat(t.props.dataKey),
                        data: n,
                        xAxis: o,
                        yAxis: a,
                        layout: c,
                        dataPointFormatter: l,
                      });
                    })
                  );
                },
              },
              {
                key: "renderDots",
                value: function (t, r, n) {
                  if (
                    this.props.isAnimationActive &&
                    !this.state.isAnimationFinished
                  )
                    return null;
                  var o = this.props,
                    a = o.dot,
                    c = o.points,
                    u = o.dataKey,
                    l = ot(this.props, !1),
                    s = ot(a, !0),
                    f = c.map(function (t, r) {
                      var n = zv(
                        zv(zv({ key: "dot-".concat(r), r: 3 }, l), s),
                        {},
                        {
                          value: t.value,
                          dataKey: u,
                          cx: t.x,
                          cy: t.y,
                          index: r,
                          payload: t.payload,
                        }
                      );
                      return e.renderDotItem(a, n);
                    }),
                    p = {
                      clipPath: t
                        ? "url(#clipPath-"
                            .concat(r ? "" : "dots-")
                            .concat(n, ")")
                        : null,
                    };
                  return i().createElement(
                    Pt,
                    Lv({ className: "recharts-line-dots", key: "dots" }, p),
                    f
                  );
                },
              },
              {
                key: "renderCurveStatically",
                value: function (t, e, r, n) {
                  var o = this.props,
                    a = o.type,
                    c = o.layout,
                    u = o.connectNulls,
                    l =
                      (o.ref,
                      (function (t, e) {
                        if (null == t) return {};
                        var r,
                          n,
                          o = (function (t, e) {
                            if (null == t) return {};
                            var r,
                              n,
                              o = {},
                              i = Object.keys(t);
                            for (n = 0; n < i.length; n++)
                              (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
                            return o;
                          })(t, e);
                        if (Object.getOwnPropertySymbols) {
                          var i = Object.getOwnPropertySymbols(t);
                          for (n = 0; n < i.length; n++)
                            (r = i[n]),
                              e.indexOf(r) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(
                                  t,
                                  r
                                ) &&
                                  (o[r] = t[r]));
                        }
                        return o;
                      })(o, Nv)),
                    s = zv(
                      zv(
                        zv({}, ot(l, !0)),
                        {},
                        {
                          fill: "none",
                          className: "recharts-line-curve",
                          clipPath: e ? "url(#clipPath-".concat(r, ")") : null,
                          points: t,
                        },
                        n
                      ),
                      {},
                      { type: a, layout: c, connectNulls: u }
                    );
                  return i().createElement(
                    Wy,
                    Lv({}, s, { pathRef: this.pathRef })
                  );
                },
              },
              {
                key: "renderCurveWithAnimation",
                value: function (t, e) {
                  var r = this,
                    n = this.props,
                    o = n.points,
                    a = n.strokeDasharray,
                    c = n.isAnimationActive,
                    u = n.animationBegin,
                    l = n.animationDuration,
                    s = n.animationEasing,
                    f = n.animationId,
                    p = n.animateNewValues,
                    h = n.width,
                    d = n.height,
                    y = this.state,
                    v = y.prevPoints,
                    m = y.totalLength;
                  return i().createElement(
                    Co,
                    {
                      begin: u,
                      duration: l,
                      isActive: c,
                      easing: s,
                      from: { t: 0 },
                      to: { t: 1 },
                      key: "line-".concat(f),
                      onAnimationEnd: this.handleAnimationEnd,
                      onAnimationStart: this.handleAnimationStart,
                    },
                    function (n) {
                      var i = n.t;
                      if (v) {
                        var c = v.length / o.length,
                          u = o.map(function (t, e) {
                            var r = Math.floor(e * c);
                            if (v[r]) {
                              var n = v[r],
                                o = k(n.x, t.x),
                                a = k(n.y, t.y);
                              return zv(zv({}, t), {}, { x: o(i), y: a(i) });
                            }
                            if (p) {
                              var u = k(2 * h, t.x),
                                l = k(d / 2, t.y);
                              return zv(zv({}, t), {}, { x: u(i), y: l(i) });
                            }
                            return zv(zv({}, t), {}, { x: t.x, y: t.y });
                          });
                        return r.renderCurveStatically(u, t, e);
                      }
                      var l,
                        s = k(0, m)(i);
                      if (a) {
                        var f = ""
                          .concat(a)
                          .split(/[,\s]+/gim)
                          .map(function (t) {
                            return parseFloat(t);
                          });
                        l = r.getStrokeDasharray(s, m, f);
                      } else l = r.generateSimpleStrokeDasharray(m, s);
                      return r.renderCurveStatically(o, t, e, {
                        strokeDasharray: l,
                      });
                    }
                  );
                },
              },
              {
                key: "renderCurve",
                value: function (t, e) {
                  var r = this.props,
                    n = r.points,
                    o = r.isAnimationActive,
                    i = this.state,
                    a = i.prevPoints,
                    c = i.totalLength;
                  return o && n && n.length && ((!a && c > 0) || !Bs()(a, n))
                    ? this.renderCurveWithAnimation(t, e)
                    : this.renderCurveStatically(n, t, e);
                },
              },
              {
                key: "render",
                value: function () {
                  var t,
                    e = this.props,
                    r = e.hide,
                    n = e.dot,
                    o = e.points,
                    a = e.className,
                    c = e.xAxis,
                    l = e.yAxis,
                    s = e.top,
                    f = e.left,
                    p = e.width,
                    h = e.height,
                    d = e.isAnimationActive,
                    y = e.id;
                  if (r || !o || !o.length) return null;
                  var v = this.state.isAnimationFinished,
                    m = 1 === o.length,
                    b = u("recharts-line", a),
                    g = c && c.allowDataOverflow,
                    x = l && l.allowDataOverflow,
                    w = g || x,
                    O = C()(y) ? this.id : y,
                    j =
                      null !== (t = ot(n, !1)) && void 0 !== t
                        ? t
                        : { r: 3, strokeWidth: 2 },
                    S = j.r,
                    E = void 0 === S ? 3 : S,
                    P = j.strokeWidth,
                    A = void 0 === P ? 2 : P,
                    k = (
                      (function (t) {
                        return (
                          t &&
                          "object" === G(t) &&
                          "cx" in t &&
                          "cy" in t &&
                          "r" in t
                        );
                      })(n)
                        ? n
                        : {}
                    ).clipDot,
                    M = void 0 === k || k,
                    T = 2 * E + A;
                  return i().createElement(
                    Pt,
                    { className: b },
                    g || x
                      ? i().createElement(
                          "defs",
                          null,
                          i().createElement(
                            "clipPath",
                            { id: "clipPath-".concat(O) },
                            i().createElement("rect", {
                              x: g ? f : f - p / 2,
                              y: x ? s : s - h / 2,
                              width: g ? p : 2 * p,
                              height: x ? h : 2 * h,
                            })
                          ),
                          !M &&
                            i().createElement(
                              "clipPath",
                              { id: "clipPath-dots-".concat(O) },
                              i().createElement("rect", {
                                x: f - T / 2,
                                y: s - T / 2,
                                width: p + T,
                                height: h + T,
                              })
                            )
                        )
                      : null,
                    !m && this.renderCurve(w, O),
                    this.renderErrorBar(w, O),
                    (m || n) && this.renderDots(w, M, O),
                    (!d || v) && eh.renderCallByParent(this.props, o)
                  );
                },
              },
            ]),
            (o = [
              {
                key: "getDerivedStateFromProps",
                value: function (t, e) {
                  return t.animationId !== e.prevAnimationId
                    ? {
                        prevAnimationId: t.animationId,
                        curPoints: t.points,
                        prevPoints: e.curPoints,
                      }
                    : t.points !== e.curPoints
                    ? { curPoints: t.points }
                    : null;
                },
              },
              {
                key: "repeat",
                value: function (t, e) {
                  for (
                    var r = t.length % 2 != 0 ? [].concat(Uv(t), [0]) : t,
                      n = [],
                      o = 0;
                    o < e;
                    ++o
                  )
                    n = [].concat(Uv(n), Uv(r));
                  return n;
                },
              },
              {
                key: "renderDotItem",
                value: function (t, e) {
                  var r;
                  if (i().isValidElement(t)) r = i().cloneElement(t, e);
                  else if (I()(t)) r = t(e);
                  else {
                    var n = u(
                      "recharts-line-dot",
                      "boolean" != typeof t ? t.className : ""
                    );
                    r = i().createElement(Mr, Lv({}, e, { className: n }));
                  }
                  return r;
                },
              },
            ]),
            n && Fv(r.prototype, n),
            o && Fv(r, o),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            e
          );
        })(o.PureComponent);
        function Zv(t, e, r) {
          if (e < 1) return [];
          if (1 === e && void 0 === r) return t;
          for (var n = [], o = 0; o < t.length; o += e) {
            if (void 0 !== r && !0 !== r(t[o])) return;
            n.push(t[o]);
          }
          return n;
        }
        function Jv(t, e, r, n, o) {
          if (t * e < t * n || t * e > t * o) return !1;
          var i = r();
          return (
            t * (e - (t * i) / 2 - n) >= 0 && t * (e + (t * i) / 2 - o) <= 0
          );
        }
        function Qv(t) {
          return (
            (Qv =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            Qv(t)
          );
        }
        function tm(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function em(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? tm(Object(r), !0).forEach(function (e) {
                  rm(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : tm(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e)
                  );
                });
          }
          return t;
        }
        function rm(t, e, r) {
          var n;
          return (
            (n = (function (t, e) {
              if ("object" != Qv(t) || !t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, "string");
                if ("object" != Qv(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(e)),
            (e = "symbol" == Qv(n) ? n : String(n)) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        function nm(t, e, r) {
          var n = t.tick,
            o = t.ticks,
            i = t.viewBox,
            a = t.minTickGap,
            c = t.orientation,
            u = t.interval,
            l = t.tickFormatter,
            s = t.unit,
            f = t.angle;
          if (!o || !o.length || !n) return [];
          if (O(u) || Qt.isSsr)
            return (function (t, e) {
              return Zv(t, e + 1);
            })(o, "number" == typeof u && O(u) ? u : 0);
          var p = [],
            h = "top" === c || "bottom" === c ? "width" : "height",
            d =
              s && "width" === h
                ? ai(s, { fontSize: e, letterSpacing: r })
                : { width: 0, height: 0 },
            y = function (t, n) {
              var o = I()(l) ? l(t.value, n) : t.value;
              return "width" === h
                ? (function (t, e, r) {
                    return (function (t) {
                      var e = t.width,
                        r = t.height,
                        n =
                          (((((arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : 0) %
                            180) +
                            180) %
                            180) *
                            Math.PI) /
                          180,
                        o = Math.atan(r / e),
                        i =
                          n > o && n < Math.PI - o
                            ? r / Math.sin(n)
                            : e / Math.cos(n);
                      return Math.abs(i);
                    })(
                      { width: t.width + e.width, height: t.height + e.height },
                      r
                    );
                  })(ai(o, { fontSize: e, letterSpacing: r }), d, f)
                : ai(o, { fontSize: e, letterSpacing: r })[h];
            },
            v = o.length >= 2 ? x(o[1].coordinate - o[0].coordinate) : 1,
            m = (function (t, e, r) {
              var n = "width" === r,
                o = t.x,
                i = t.y,
                a = t.width,
                c = t.height;
              return 1 === e
                ? { start: n ? o : i, end: n ? o + a : i + c }
                : { start: n ? o + a : i + c, end: n ? o : i };
            })(i, v, h);
          return "equidistantPreserveStart" === u
            ? (function (t, e, r, n, o) {
                for (
                  var i,
                    a = (n || []).slice(),
                    c = e.start,
                    u = e.end,
                    l = 0,
                    s = 1,
                    f = c,
                    p = function () {
                      var e = null == n ? void 0 : n[l];
                      if (void 0 === e) return { v: Zv(n, s) };
                      var i,
                        a = l,
                        p = function () {
                          return void 0 === i && (i = r(e, a)), i;
                        },
                        h = e.coordinate,
                        d = 0 === l || Jv(t, h, p, f, u);
                      d || ((l = 0), (f = c), (s += 1)),
                        d && ((f = h + t * (p() / 2 + o)), (l += s));
                    };
                  s <= a.length;

                )
                  if ((i = p())) return i.v;
                return [];
              })(v, m, y, o, a)
            : ((p =
                "preserveStart" === u || "preserveStartEnd" === u
                  ? (function (t, e, r, n, o, i) {
                      var a = (n || []).slice(),
                        c = a.length,
                        u = e.start,
                        l = e.end;
                      if (i) {
                        var s = n[c - 1],
                          f = r(s, c - 1),
                          p = t * (s.coordinate + (t * f) / 2 - l);
                        (a[c - 1] = s =
                          em(
                            em({}, s),
                            {},
                            {
                              tickCoord:
                                p > 0 ? s.coordinate - p * t : s.coordinate,
                            }
                          )),
                          Jv(
                            t,
                            s.tickCoord,
                            function () {
                              return f;
                            },
                            u,
                            l
                          ) &&
                            ((l = s.tickCoord - t * (f / 2 + o)),
                            (a[c - 1] = em(em({}, s), {}, { isShow: !0 })));
                      }
                      for (
                        var h = i ? c - 1 : c,
                          d = function (e) {
                            var n,
                              i = a[e],
                              c = function () {
                                return void 0 === n && (n = r(i, e)), n;
                              };
                            if (0 === e) {
                              var s = t * (i.coordinate - (t * c()) / 2 - u);
                              a[e] = i = em(
                                em({}, i),
                                {},
                                {
                                  tickCoord:
                                    s < 0 ? i.coordinate - s * t : i.coordinate,
                                }
                              );
                            } else
                              a[e] = i = em(
                                em({}, i),
                                {},
                                { tickCoord: i.coordinate }
                              );
                            Jv(t, i.tickCoord, c, u, l) &&
                              ((u = i.tickCoord + t * (c() / 2 + o)),
                              (a[e] = em(em({}, i), {}, { isShow: !0 })));
                          },
                          y = 0;
                        y < h;
                        y++
                      )
                        d(y);
                      return a;
                    })(v, m, y, o, a, "preserveStartEnd" === u)
                  : (function (t, e, r, n, o) {
                      for (
                        var i = (n || []).slice(),
                          a = i.length,
                          c = e.start,
                          u = e.end,
                          l = function (e) {
                            var n,
                              l = i[e],
                              s = function () {
                                return void 0 === n && (n = r(l, e)), n;
                              };
                            if (e === a - 1) {
                              var f = t * (l.coordinate + (t * s()) / 2 - u);
                              i[e] = l = em(
                                em({}, l),
                                {},
                                {
                                  tickCoord:
                                    f > 0 ? l.coordinate - f * t : l.coordinate,
                                }
                              );
                            } else
                              i[e] = l = em(
                                em({}, l),
                                {},
                                { tickCoord: l.coordinate }
                              );
                            Jv(t, l.tickCoord, s, c, u) &&
                              ((u = l.tickCoord - t * (s() / 2 + o)),
                              (i[e] = em(em({}, l), {}, { isShow: !0 })));
                          },
                          s = a - 1;
                        s >= 0;
                        s--
                      )
                        l(s);
                      return i;
                    })(v, m, y, o, a)),
              p.filter(function (t) {
                return t.isShow;
              }));
        }
        Gv(Kv, "displayName", "Line"),
          Gv(Kv, "defaultProps", {
            xAxisId: 0,
            yAxisId: 0,
            connectNulls: !1,
            activeDot: !0,
            dot: !0,
            legendType: "line",
            stroke: "#3182bd",
            strokeWidth: 1,
            fill: "#fff",
            points: [],
            isAnimationActive: !Qt.isSsr,
            animateNewValues: !0,
            animationBegin: 0,
            animationDuration: 1500,
            animationEasing: "ease",
            hide: !1,
            label: !1,
          }),
          Gv(Kv, "getComposedData", function (t) {
            var e = t.props,
              r = t.xAxis,
              n = t.yAxis,
              o = t.xAxisTicks,
              i = t.yAxisTicks,
              a = t.dataKey,
              c = t.bandSize,
              u = t.displayedData,
              l = t.offset,
              s = e.layout,
              f = u.map(function (t, e) {
                var u = Af(t, a);
                return "horizontal" === s
                  ? {
                      x: Uf({
                        axis: r,
                        ticks: o,
                        bandSize: c,
                        entry: t,
                        index: e,
                      }),
                      y: C()(u) ? null : n.scale(u),
                      value: u,
                      payload: t,
                    }
                  : {
                      x: C()(u) ? null : r.scale(u),
                      y: Uf({
                        axis: n,
                        ticks: i,
                        bandSize: c,
                        entry: t,
                        index: e,
                      }),
                      value: u,
                      payload: t,
                    };
              });
            return zv({ points: f, layout: s }, l);
          });
        var om = ["viewBox"],
          im = ["viewBox"],
          am = ["ticks"];
        function cm(t) {
          return (
            (cm =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            cm(t)
          );
        }
        function um() {
          return (
            (um = Object.assign
              ? Object.assign.bind()
              : function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var n in r)
                      Object.prototype.hasOwnProperty.call(r, n) &&
                        (t[n] = r[n]);
                  }
                  return t;
                }),
            um.apply(this, arguments)
          );
        }
        function lm(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function sm(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? lm(Object(r), !0).forEach(function (e) {
                  mm(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : lm(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e)
                  );
                });
          }
          return t;
        }
        function fm(t, e) {
          if (null == t) return {};
          var r,
            n,
            o = (function (t, e) {
              if (null == t) return {};
              var r,
                n,
                o = {},
                i = Object.keys(t);
              for (n = 0; n < i.length; n++)
                (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
              return o;
            })(t, e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            for (n = 0; n < i.length; n++)
              (r = i[n]),
                e.indexOf(r) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(t, r) &&
                    (o[r] = t[r]));
          }
          return o;
        }
        function pm(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, bm(n.key), n);
          }
        }
        function hm(t, e, r) {
          return (
            (e = ym(e)),
            (function (t, e) {
              if (e && ("object" === cm(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return (function (t) {
                if (void 0 === t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return t;
              })(t);
            })(
              t,
              dm()
                ? Reflect.construct(e, r || [], ym(t).constructor)
                : e.apply(t, r)
            )
          );
        }
        function dm() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            );
          } catch (t) {}
          return (dm = function () {
            return !!t;
          })();
        }
        function ym(t) {
          return (
            (ym = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            ym(t)
          );
        }
        function vm(t, e) {
          return (
            (vm = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            vm(t, e)
          );
        }
        function mm(t, e, r) {
          return (
            (e = bm(e)) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        function bm(t) {
          var e = (function (t, e) {
            if ("object" != cm(t) || !t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, "string");
              if ("object" != cm(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(t);
          })(t);
          return "symbol" == cm(e) ? e : String(e);
        }
        var gm = (function (t) {
          function e(t) {
            var r;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
              ((r = hm(this, e, [t])).state = {
                fontSize: "",
                letterSpacing: "",
              }),
              r
            );
          }
          var r, n, o;
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && vm(t, e);
            })(e, t),
            (r = e),
            (n = [
              {
                key: "shouldComponentUpdate",
                value: function (t, e) {
                  var r = t.viewBox,
                    n = fm(t, om),
                    o = this.props,
                    i = o.viewBox,
                    a = fm(o, im);
                  return !L(r, i) || !L(n, a) || !L(e, this.state);
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  var t = this.layerReference;
                  if (t) {
                    var e = t.getElementsByClassName(
                      "recharts-cartesian-axis-tick-value"
                    )[0];
                    e &&
                      this.setState({
                        fontSize: window.getComputedStyle(e).fontSize,
                        letterSpacing: window.getComputedStyle(e).letterSpacing,
                      });
                  }
                },
              },
              {
                key: "getTickLineCoord",
                value: function (t) {
                  var e,
                    r,
                    n,
                    o,
                    i,
                    a,
                    c = this.props,
                    u = c.x,
                    l = c.y,
                    s = c.width,
                    f = c.height,
                    p = c.orientation,
                    h = c.tickSize,
                    d = c.mirror,
                    y = c.tickMargin,
                    v = d ? -1 : 1,
                    m = t.tickSize || h,
                    b = O(t.tickCoord) ? t.tickCoord : t.coordinate;
                  switch (p) {
                    case "top":
                      (e = r = t.coordinate),
                        (a = (n = (o = l + +!d * f) - v * m) - v * y),
                        (i = b);
                      break;
                    case "left":
                      (n = o = t.coordinate),
                        (i = (e = (r = u + +!d * s) - v * m) - v * y),
                        (a = b);
                      break;
                    case "right":
                      (n = o = t.coordinate),
                        (i = (e = (r = u + +d * s) + v * m) + v * y),
                        (a = b);
                      break;
                    default:
                      (e = r = t.coordinate),
                        (a = (n = (o = l + +d * f) + v * m) + v * y),
                        (i = b);
                  }
                  return {
                    line: { x1: e, y1: n, x2: r, y2: o },
                    tick: { x: i, y: a },
                  };
                },
              },
              {
                key: "getTickTextAnchor",
                value: function () {
                  var t,
                    e = this.props,
                    r = e.orientation,
                    n = e.mirror;
                  switch (r) {
                    case "left":
                      t = n ? "start" : "end";
                      break;
                    case "right":
                      t = n ? "end" : "start";
                      break;
                    default:
                      t = "middle";
                  }
                  return t;
                },
              },
              {
                key: "getTickVerticalAnchor",
                value: function () {
                  var t = this.props,
                    e = t.orientation,
                    r = t.mirror,
                    n = "end";
                  switch (e) {
                    case "left":
                    case "right":
                      n = "middle";
                      break;
                    case "top":
                      n = r ? "start" : "end";
                      break;
                    default:
                      n = r ? "end" : "start";
                  }
                  return n;
                },
              },
              {
                key: "renderAxisLine",
                value: function () {
                  var t = this.props,
                    e = t.x,
                    r = t.y,
                    n = t.width,
                    o = t.height,
                    a = t.orientation,
                    c = t.mirror,
                    l = t.axisLine,
                    s = sm(
                      sm(sm({}, ot(this.props, !1)), ot(l, !1)),
                      {},
                      { fill: "none" }
                    );
                  if ("top" === a || "bottom" === a) {
                    var f = +(("top" === a && !c) || ("bottom" === a && c));
                    s = sm(
                      sm({}, s),
                      {},
                      { x1: e, y1: r + f * o, x2: e + n, y2: r + f * o }
                    );
                  } else {
                    var p = +(("left" === a && !c) || ("right" === a && c));
                    s = sm(
                      sm({}, s),
                      {},
                      { x1: e + p * n, y1: r, x2: e + p * n, y2: r + o }
                    );
                  }
                  return i().createElement(
                    "line",
                    um({}, s, {
                      className: u(
                        "recharts-cartesian-axis-line",
                        m()(l, "className")
                      ),
                    })
                  );
                },
              },
              {
                key: "renderTicks",
                value: function (t, r, n) {
                  var o = this,
                    a = this.props,
                    c = a.tickLine,
                    l = a.stroke,
                    s = a.tick,
                    f = a.tickFormatter,
                    p = a.unit,
                    h = nm(sm(sm({}, this.props), {}, { ticks: t }), r, n),
                    d = this.getTickTextAnchor(),
                    y = this.getTickVerticalAnchor(),
                    v = ot(this.props, !1),
                    b = ot(s, !1),
                    g = sm(sm({}, v), {}, { fill: "none" }, ot(c, !1)),
                    x = h.map(function (t, r) {
                      var n = o.getTickLineCoord(t),
                        a = n.line,
                        x = n.tick,
                        w = sm(
                          sm(
                            sm(
                              sm({ textAnchor: d, verticalAnchor: y }, v),
                              {},
                              { stroke: "none", fill: l },
                              b
                            ),
                            x
                          ),
                          {},
                          {
                            index: r,
                            payload: t,
                            visibleTicksCount: h.length,
                            tickFormatter: f,
                          }
                        );
                      return i().createElement(
                        Pt,
                        um(
                          {
                            className: "recharts-cartesian-axis-tick",
                            key: "tick-"
                              .concat(t.value, "-")
                              .concat(t.coordinate, "-")
                              .concat(t.tickCoord),
                          },
                          q(o.props, t, r)
                        ),
                        c &&
                          i().createElement(
                            "line",
                            um({}, g, a, {
                              className: u(
                                "recharts-cartesian-axis-tick-line",
                                m()(c, "className")
                              ),
                            })
                          ),
                        s &&
                          e.renderTickItem(
                            s,
                            w,
                            ""
                              .concat(I()(f) ? f(t.value, r) : t.value)
                              .concat(p || "")
                          )
                      );
                    });
                  return i().createElement(
                    "g",
                    { className: "recharts-cartesian-axis-ticks" },
                    x
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this,
                    e = this.props,
                    r = e.axisLine,
                    n = e.width,
                    o = e.height,
                    a = e.ticksGenerator,
                    c = e.className;
                  if (e.hide) return null;
                  var l = this.props,
                    s = l.ticks,
                    f = fm(l, am),
                    p = s;
                  return (
                    I()(a) && (p = s && s.length > 0 ? a(this.props) : a(f)),
                    n <= 0 || o <= 0 || !p || !p.length
                      ? null
                      : i().createElement(
                          Pt,
                          {
                            className: u("recharts-cartesian-axis", c),
                            ref: function (e) {
                              t.layerReference = e;
                            },
                          },
                          r && this.renderAxisLine(),
                          this.renderTicks(
                            p,
                            this.state.fontSize,
                            this.state.letterSpacing
                          ),
                          Np.renderCallByParent(this.props)
                        )
                  );
                },
              },
            ]),
            (o = [
              {
                key: "renderTickItem",
                value: function (t, e, r) {
                  return i().isValidElement(t)
                    ? i().cloneElement(t, e)
                    : I()(t)
                    ? t(e)
                    : i().createElement(
                        Di,
                        um({}, e, {
                          className: "recharts-cartesian-axis-tick-value",
                        }),
                        r
                      );
                },
              },
            ]),
            n && pm(r.prototype, n),
            o && pm(r, o),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            e
          );
        })(o.Component);
        function xm() {
          return (
            (xm = Object.assign
              ? Object.assign.bind()
              : function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var n in r)
                      Object.prototype.hasOwnProperty.call(r, n) &&
                        (t[n] = r[n]);
                  }
                  return t;
                }),
            xm.apply(this, arguments)
          );
        }
        mm(gm, "displayName", "CartesianAxis"),
          mm(gm, "defaultProps", {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            viewBox: { x: 0, y: 0, width: 0, height: 0 },
            orientation: "bottom",
            ticks: [],
            stroke: "#666",
            tickLine: !0,
            axisLine: !0,
            tick: !0,
            mirror: !1,
            minTickGap: 5,
            tickSize: 6,
            tickMargin: 2,
            interval: "preserveEnd",
          });
        var wm = function (t) {
          var e = t.xAxisId,
            r = zd(),
            n = Ud(),
            o = Ld(e);
          return null == o
            ? null
            : i().createElement(
                gm,
                xm({}, o, {
                  className: u(
                    "recharts-".concat(o.axisType, " ").concat(o.axisType),
                    o.className
                  ),
                  viewBox: { x: 0, y: 0, width: r, height: n },
                  ticksGenerator: function (t) {
                    return If(t, !0);
                  },
                })
              );
        };
        function Om() {
          return (
            (Om = Object.assign
              ? Object.assign.bind()
              : function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var n in r)
                      Object.prototype.hasOwnProperty.call(r, n) &&
                        (t[n] = r[n]);
                  }
                  return t;
                }),
            Om.apply(this, arguments)
          );
        }
        (wm.displayName = "XAxis"),
          (wm.defaultProps = {
            allowDecimals: !0,
            hide: !1,
            orientation: "bottom",
            width: 0,
            height: 30,
            mirror: !1,
            xAxisId: 0,
            tickCount: 5,
            type: "category",
            padding: { left: 0, right: 0 },
            allowDataOverflow: !1,
            scale: "auto",
            reversed: !1,
            allowDuplicatedCategory: !0,
          });
        var jm = function (t) {
          var e = t.yAxisId,
            r = zd(),
            n = Ud(),
            o = Rd(e);
          return null == o
            ? null
            : i().createElement(
                gm,
                Om({}, o, {
                  className: u(
                    "recharts-".concat(o.axisType, " ").concat(o.axisType),
                    o.className
                  ),
                  viewBox: { x: 0, y: 0, width: r, height: n },
                  ticksGenerator: function (t) {
                    return If(t, !0);
                  },
                })
              );
        };
        (jm.displayName = "YAxis"),
          (jm.defaultProps = {
            allowDuplicatedCategory: !0,
            allowDecimals: !0,
            hide: !1,
            orientation: "left",
            width: 60,
            height: 0,
            mirror: !1,
            yAxisId: 0,
            tickCount: 5,
            type: "number",
            padding: { top: 0, bottom: 0 },
            allowDataOverflow: !1,
            scale: "auto",
            reversed: !1,
          });
        var Sm,
          Em,
          Pm,
          Am,
          km,
          Mm,
          Tm,
          _m,
          Cm,
          Dm,
          Im,
          Nm,
          Bm,
          Lm =
            ((Sm = {
              chartName: "LineChart",
              GraphicalChild: Kv,
              axisComponents: [
                { axisType: "xAxis", AxisComp: wm },
                { axisType: "yAxis", AxisComp: jm },
              ],
              formatAxisMap: function (t, e, r, o, i) {
                var a = t.width,
                  c = t.height,
                  u = t.layout,
                  l = t.children,
                  s = Object.keys(e),
                  f = {
                    left: r.left,
                    leftMirror: r.left,
                    right: a - r.right,
                    rightMirror: a - r.right,
                    top: r.top,
                    topMirror: r.top,
                    bottom: c - r.bottom,
                    bottomMirror: c - r.bottom,
                  },
                  p = !!et(l, cd);
                return s.reduce(function (a, c) {
                  var l,
                    s,
                    d,
                    y,
                    v,
                    m = e[c],
                    b = m.orientation,
                    g = m.domain,
                    x = m.padding,
                    w = void 0 === x ? {} : x,
                    O = m.mirror,
                    j = m.reversed,
                    S = "".concat(b).concat(O ? "Mirror" : "");
                  if (
                    "number" === m.type &&
                    ("gap" === m.padding || "no-gap" === m.padding)
                  ) {
                    var E = g[1] - g[0],
                      A = 1 / 0,
                      k = m.categoricalDomain.sort();
                    if (
                      (k.forEach(function (t, e) {
                        e > 0 && (A = Math.min((t || 0) - (k[e - 1] || 0), A));
                      }),
                      Number.isFinite(A))
                    ) {
                      var M = A / E,
                        T = "vertical" === m.layout ? r.height : r.width;
                      if (
                        ("gap" === m.padding && (l = (M * T) / 2),
                        "no-gap" === m.padding)
                      ) {
                        var _ = P(t.barCategoryGap, M * T),
                          C = (M * T) / 2;
                        l = C - _ - ((C - _) / T) * _;
                      }
                    }
                  }
                  (s =
                    "xAxis" === o
                      ? [
                          r.left + (w.left || 0) + (l || 0),
                          r.left + r.width - (w.right || 0) - (l || 0),
                        ]
                      : "yAxis" === o
                      ? "horizontal" === u
                        ? [
                            r.top + r.height - (w.bottom || 0),
                            r.top + (w.top || 0),
                          ]
                        : [
                            r.top + (w.top || 0) + (l || 0),
                            r.top + r.height - (w.bottom || 0) - (l || 0),
                          ]
                      : m.range),
                    j && (s = [s[1], s[0]]);
                  var D = (function (t, e, r) {
                      var o = t.scale,
                        i = t.type,
                        a = t.layout,
                        c = t.axisType;
                      if ("auto" === o)
                        return "radial" === a && "radiusAxis" === c
                          ? { scale: Ko(), realScaleType: "band" }
                          : "radial" === a && "angleAxis" === c
                          ? { scale: yc(), realScaleType: "linear" }
                          : "category" === i &&
                            e &&
                            (e.indexOf("LineChart") >= 0 ||
                              e.indexOf("AreaChart") >= 0 ||
                              (e.indexOf("ComposedChart") >= 0 && !r))
                          ? { scale: Jo(), realScaleType: "point" }
                          : "category" === i
                          ? { scale: Ko(), realScaleType: "band" }
                          : { scale: yc(), realScaleType: "linear" };
                      if (h()(o)) {
                        var u = "scale".concat(ve()(o));
                        return {
                          scale: (n[u] || Jo)(),
                          realScaleType: n[u] ? u : "point",
                        };
                      }
                      return I()(o)
                        ? { scale: o }
                        : { scale: Jo(), realScaleType: "point" };
                    })(m, i, p),
                    N = D.scale,
                    B = D.realScaleType;
                  N.domain(g).range(s),
                    (function (t) {
                      var e = t.domain();
                      if (e && !(e.length <= 2)) {
                        var r = e.length,
                          n = t.range(),
                          o = Math.min(n[0], n[1]) - Lf,
                          i = Math.max(n[0], n[1]) + Lf,
                          a = t(e[0]),
                          c = t(e[r - 1]);
                        (a < o || a > i || c < o || c > i) &&
                          t.domain([e[0], e[r - 1]]);
                      }
                    })(N);
                  var L = (function (t, e) {
                    var r = e.realScaleType,
                      n = e.type,
                      o = e.tickCount,
                      i = e.originalDomain,
                      a = e.allowDecimals,
                      c = r || e.scale;
                    if ("auto" !== c && "linear" !== c) return null;
                    if (
                      o &&
                      "number" === n &&
                      i &&
                      ("auto" === i[0] || "auto" === i[1])
                    ) {
                      var u = t.domain();
                      if (!u.length) return null;
                      var l = sf(u, o, a);
                      return t.domain([Cs()(l), Ts()(l)]), { niceTicks: l };
                    }
                    if (o && "number" === n) {
                      var s = t.domain();
                      return { niceTicks: ff(s, o, a) };
                    }
                    return null;
                  })(N, fd(fd({}, m), {}, { realScaleType: B }));
                  "xAxis" === o
                    ? ((v = ("top" === b && !O) || ("bottom" === b && O)),
                      (d = r.left),
                      (y = f[S] - v * m.height))
                    : "yAxis" === o &&
                      ((v = ("left" === b && !O) || ("right" === b && O)),
                      (d = f[S] - v * m.width),
                      (y = r.top));
                  var R = fd(
                    fd(fd({}, m), L),
                    {},
                    {
                      realScaleType: B,
                      x: d,
                      y,
                      scale: N,
                      width: "xAxis" === o ? r.width : m.width,
                      height: "yAxis" === o ? r.height : m.height,
                    }
                  );
                  return (
                    (R.bandSize = Hf(R, L)),
                    m.hide || "xAxis" !== o
                      ? m.hide || (f[S] += (v ? -1 : 1) * R.width)
                      : (f[S] += (v ? -1 : 1) * R.height),
                    fd(fd({}, a), {}, pd({}, c, R))
                  );
                }, {});
              },
            }),
            (Pm = Sm.chartName),
            (Am = Sm.GraphicalChild),
            (Mm = void 0 === (km = Sm.defaultTooltipEventType) ? "axis" : km),
            (_m =
              void 0 === (Tm = Sm.validateTooltipEventTypes) ? ["axis"] : Tm),
            (Cm = Sm.axisComponents),
            (Dm = Sm.legendContent),
            (Im = Sm.formatAxisMap),
            (Nm = Sm.defaultProps),
            (Bm = function (t, e) {
              var r = t.props,
                n = t.dataStartIndex,
                o = t.dataEndIndex,
                i = t.updateId;
              if (!rt({ props: r })) return null;
              var a = r.children,
                c = r.layout,
                u = r.stackOffset,
                l = r.data,
                s = r.reverseStackOrder,
                f = Dv(c),
                p = f.numericAxisName,
                h = f.cateAxisName,
                d = tt(a, Am),
                y = (function (t, e, r, n, o, i) {
                  if (!t) return null;
                  var a = (i ? e.reverse() : e).reduce(function (t, e) {
                    var o = e.props,
                      i = o.stackId;
                    if (o.hide) return t;
                    var a = e.props[r],
                      c = t[a] || { hasStack: !1, stackGroups: {} };
                    if (j(i)) {
                      var u = c.stackGroups[i] || {
                        numericAxisId: r,
                        cateAxisId: n,
                        items: [],
                      };
                      u.items.push(e),
                        (c.hasStack = !0),
                        (c.stackGroups[i] = u);
                    } else c.stackGroups[E("_stackId_")] = { numericAxisId: r, cateAxisId: n, items: [e] };
                    return jf(jf({}, t), {}, Sf({}, a, c));
                  }, {});
                  return Object.keys(a).reduce(function (e, i) {
                    var c = a[i];
                    return (
                      c.hasStack &&
                        (c.stackGroups = Object.keys(c.stackGroups).reduce(
                          function (e, i) {
                            var a = c.stackGroups[i];
                            return jf(
                              jf({}, e),
                              {},
                              Sf({}, i, {
                                numericAxisId: r,
                                cateAxisId: n,
                                items: a.items,
                                stackedData: zf(t, a.items, o),
                              })
                            );
                          },
                          {}
                        )),
                      jf(jf({}, e), {}, Sf({}, i, c))
                    );
                  }, {});
                })(l, d, "".concat(p, "Id"), "".concat(h, "Id"), u, s),
                v = Cm.reduce(function (t, e) {
                  var i = "".concat(e.axisType, "Map");
                  return xv(
                    xv({}, t),
                    {},
                    wv(
                      {},
                      i,
                      _v(
                        r,
                        xv(
                          xv({}, e),
                          {},
                          {
                            graphicalItems: d,
                            stackGroups: e.axisType === p && y,
                            dataStartIndex: n,
                            dataEndIndex: o,
                          }
                        )
                      )
                    )
                  );
                }, {}),
                b = (function (t, e) {
                  var r = t.props,
                    n = (t.graphicalItems, t.xAxisMap),
                    o = void 0 === n ? {} : n,
                    i = t.yAxisMap,
                    a = void 0 === i ? {} : i,
                    c = r.width,
                    u = r.height,
                    l = r.children,
                    s = r.margin || {},
                    f = et(l, hp),
                    p = et(l, Ar),
                    h = Object.keys(a).reduce(
                      function (t, e) {
                        var r = a[e],
                          n = r.orientation;
                        return r.mirror || r.hide
                          ? t
                          : xv(xv({}, t), {}, wv({}, n, t[n] + r.width));
                      },
                      { left: s.left || 0, right: s.right || 0 }
                    ),
                    d = Object.keys(o).reduce(
                      function (t, e) {
                        var r = o[e],
                          n = r.orientation;
                        return r.mirror || r.hide
                          ? t
                          : xv(
                              xv({}, t),
                              {},
                              wv({}, n, m()(t, "".concat(n)) + r.height)
                            );
                      },
                      { top: s.top || 0, bottom: s.bottom || 0 }
                    ),
                    y = xv(xv({}, d), h),
                    v = y.bottom;
                  f && (y.bottom += f.props.height || hp.defaultProps.height),
                    p &&
                      e &&
                      (y = (function (t, e, r, n) {
                        var o = r.children,
                          i = r.width,
                          a = r.margin,
                          c = i - (a.left || 0) - (a.right || 0),
                          u = xf({ children: o, legendWidth: c });
                        if (u) {
                          var l = n || {},
                            s = l.width,
                            f = l.height,
                            p = u.align,
                            h = u.verticalAlign,
                            d = u.layout;
                          if (
                            ("vertical" === d ||
                              ("horizontal" === d && "middle" === h)) &&
                            "center" !== p &&
                            O(t[p])
                          )
                            return jf(
                              jf({}, t),
                              {},
                              Sf({}, p, t[p] + (s || 0))
                            );
                          if (
                            ("horizontal" === d ||
                              ("vertical" === d && "center" === p)) &&
                            "middle" !== h &&
                            O(t[h])
                          )
                            return jf(
                              jf({}, t),
                              {},
                              Sf({}, h, t[h] + (f || 0))
                            );
                        }
                        return t;
                      })(y, 0, r, e));
                  var b = c - y.left - y.right,
                    g = u - y.top - y.bottom;
                  return xv(
                    xv({ brushBottom: v }, y),
                    {},
                    { width: Math.max(b, 0), height: Math.max(g, 0) }
                  );
                })(
                  xv(xv({}, v), {}, { props: r, graphicalItems: d }),
                  null == e ? void 0 : e.legendBBox
                );
              Object.keys(v).forEach(function (t) {
                v[t] = Im(r, v[t], b, t.replace("Map", ""), Pm);
              });
              var g,
                x,
                w = v["".concat(h, "Map")],
                S =
                  ((g = A(w)),
                  {
                    tooltipTicks: (x = If(g, !1, !0)),
                    orderedTooltipTicks: mt()(x, function (t) {
                      return t.coordinate;
                    }),
                    tooltipAxis: g,
                    tooltipAxisBandSize: Hf(g, x),
                  }),
                k = (function (t, e) {
                  var r = e.graphicalItems,
                    n = e.stackGroups,
                    o = e.offset,
                    i = e.updateId,
                    a = e.dataStartIndex,
                    c = e.dataEndIndex,
                    u = t.barSize,
                    l = t.layout,
                    s = t.barGap,
                    f = t.barCategoryGap,
                    p = t.maxBarSize,
                    h = Dv(l),
                    d = h.numericAxisName,
                    y = h.cateAxisName,
                    v = (function (t) {
                      return (
                        !(!t || !t.length) &&
                        t.some(function (t) {
                          var e = K(t && t.type);
                          return e && e.indexOf("Bar") >= 0;
                        })
                      );
                    })(r),
                    m = [];
                  return (
                    r.forEach(function (r, h) {
                      var b = Av(t.data, {
                          graphicalItems: [r],
                          dataStartIndex: a,
                          dataEndIndex: c,
                        }),
                        g = r.props,
                        x = g.dataKey,
                        w = g.maxBarSize,
                        O = r.props["".concat(d, "Id")],
                        S = r.props["".concat(y, "Id")],
                        E = Cm.reduce(function (t, n) {
                          var o = e["".concat(n.axisType, "Map")],
                            i = r.props["".concat(n.axisType, "Id")];
                          (o && o[i]) || "zAxis" === n.axisType || xt(!1);
                          var a = o[i];
                          return xv(
                            xv({}, t),
                            {},
                            wv(
                              wv({}, n.axisType, a),
                              "".concat(n.axisType, "Ticks"),
                              If(a)
                            )
                          );
                        }, {}),
                        A = E[y],
                        k = E["".concat(y, "Ticks")],
                        M =
                          n &&
                          n[O] &&
                          n[O].hasStack &&
                          (function (t, e) {
                            var r = t.props.stackId;
                            if (j(r)) {
                              var n = e[r];
                              if (n) {
                                var o = n.items.indexOf(t);
                                return o >= 0 ? n.stackedData[o] : null;
                              }
                            }
                            return null;
                          })(r, n[O].stackGroups),
                        T = K(r.type).indexOf("Bar") >= 0,
                        _ = Hf(A, k),
                        D = [],
                        I =
                          v &&
                          (function (t) {
                            var e = t.barSize,
                              r = t.totalSize,
                              n = t.stackGroups,
                              o = void 0 === n ? {} : n;
                            if (!o) return {};
                            for (
                              var i = {},
                                a = Object.keys(o),
                                c = 0,
                                u = a.length;
                              c < u;
                              c++
                            )
                              for (
                                var l = o[a[c]].stackGroups,
                                  s = Object.keys(l),
                                  f = 0,
                                  p = s.length;
                                f < p;
                                f++
                              ) {
                                var h = l[s[f]],
                                  d = h.items,
                                  y = h.cateAxisId,
                                  v = d.filter(function (t) {
                                    return K(t.type).indexOf("Bar") >= 0;
                                  });
                                if (v && v.length) {
                                  var m = v[0].props.barSize,
                                    b = v[0].props[y];
                                  i[b] || (i[b] = []);
                                  var g = C()(m) ? e : m;
                                  i[b].push({
                                    item: v[0],
                                    stackList: v.slice(1),
                                    barSize: C()(g) ? void 0 : P(g, r, 0),
                                  });
                                }
                              }
                            return i;
                          })({
                            barSize: u,
                            stackGroups: n,
                            totalSize: Iv(E, y),
                          });
                      if (T) {
                        var N,
                          B,
                          L = C()(w) ? p : w,
                          R =
                            null !==
                              (N =
                                null !== (B = Hf(A, k, !0)) && void 0 !== B
                                  ? B
                                  : L) && void 0 !== N
                              ? N
                              : 0;
                        (D = (function (t) {
                          var e = t.barGap,
                            r = t.barCategoryGap,
                            n = t.bandSize,
                            o = t.sizeList,
                            i = void 0 === o ? [] : o,
                            a = t.maxBarSize,
                            c = i.length;
                          if (c < 1) return null;
                          var u,
                            l = P(e, n, 0, !0),
                            s = [];
                          if (i[0].barSize === +i[0].barSize) {
                            var f = !1,
                              p = n / c,
                              h = i.reduce(function (t, e) {
                                return t + e.barSize || 0;
                              }, 0);
                            (h += (c - 1) * l) >= n &&
                              ((h -= (c - 1) * l), (l = 0)),
                              h >= n &&
                                p > 0 &&
                                ((f = !0), (h = c * (p *= 0.9)));
                            var d = {
                              offset: (((n - h) / 2) | 0) - l,
                              size: 0,
                            };
                            u = i.reduce(function (t, e) {
                              var r = {
                                  item: e.item,
                                  position: {
                                    offset: d.offset + d.size + l,
                                    size: f ? p : e.barSize,
                                  },
                                },
                                n = [].concat(Ef(t), [r]);
                              return (
                                (d = n[n.length - 1].position),
                                e.stackList &&
                                  e.stackList.length &&
                                  e.stackList.forEach(function (t) {
                                    n.push({ item: t, position: d });
                                  }),
                                n
                              );
                            }, s);
                          } else {
                            var y = P(r, n, 0, !0);
                            n - 2 * y - (c - 1) * l <= 0 && (l = 0);
                            var v = (n - 2 * y - (c - 1) * l) / c;
                            v > 1 && (v >>= 0);
                            var m = a === +a ? Math.min(v, a) : v;
                            u = i.reduce(function (t, e, r) {
                              var n = [].concat(Ef(t), [
                                {
                                  item: e.item,
                                  position: {
                                    offset: y + (v + l) * r + (v - m) / 2,
                                    size: m,
                                  },
                                },
                              ]);
                              return (
                                e.stackList &&
                                  e.stackList.length &&
                                  e.stackList.forEach(function (t) {
                                    n.push({
                                      item: t,
                                      position: n[n.length - 1].position,
                                    });
                                  }),
                                n
                              );
                            }, s);
                          }
                          return u;
                        })({
                          barGap: s,
                          barCategoryGap: f,
                          bandSize: R !== _ ? R : _,
                          sizeList: I[S],
                          maxBarSize: L,
                        })),
                          R !== _ &&
                            (D = D.map(function (t) {
                              return xv(
                                xv({}, t),
                                {},
                                {
                                  position: xv(
                                    xv({}, t.position),
                                    {},
                                    { offset: t.position.offset - R / 2 }
                                  ),
                                }
                              );
                            }));
                      }
                      var z,
                        U,
                        $ = r && r.type && r.type.getComposedData;
                      $ &&
                        m.push({
                          props: xv(
                            xv(
                              {},
                              $(
                                xv(
                                  xv({}, E),
                                  {},
                                  {
                                    displayedData: b,
                                    props: t,
                                    dataKey: x,
                                    item: r,
                                    bandSize: _,
                                    barPosition: D,
                                    offset: o,
                                    stackedData: M,
                                    layout: l,
                                    dataStartIndex: a,
                                    dataEndIndex: c,
                                  }
                                )
                              )
                            ),
                            {},
                            wv(
                              wv(
                                wv(
                                  { key: r.key || "item-".concat(h) },
                                  d,
                                  E[d]
                                ),
                                y,
                                E[y]
                              ),
                              "animationId",
                              i
                            )
                          ),
                          childIndex:
                            ((z = r), (U = t.children), Q(U).indexOf(z)),
                          item: r,
                        });
                    }),
                    m
                  );
                })(
                  r,
                  xv(
                    xv({}, v),
                    {},
                    {
                      dataStartIndex: n,
                      dataEndIndex: o,
                      updateId: i,
                      graphicalItems: d,
                      stackGroups: y,
                      offset: b,
                    }
                  )
                );
              return xv(
                xv(
                  {
                    formattedGraphicalItems: k,
                    graphicalItems: d,
                    offset: b,
                    stackGroups: y,
                  },
                  S
                ),
                v
              );
            }),
            (Em = (function (t) {
              function e(t) {
                var r, n, a;
                return (
                  (function (t, e) {
                    if (!(t instanceof e))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, e),
                  wv(
                    dv((a = fv(this, e, [t]))),
                    "eventEmitterSymbol",
                    Symbol("rechartsEventEmitter")
                  ),
                  wv(dv(a), "accessibilityManager", new sy()),
                  wv(dv(a), "handleLegendBBoxUpdate", function (t) {
                    if (t) {
                      var e = a.state,
                        r = e.dataStartIndex,
                        n = e.dataEndIndex,
                        o = e.updateId;
                      a.setState(
                        xv(
                          { legendBBox: t },
                          Bm(
                            {
                              props: a.props,
                              dataStartIndex: r,
                              dataEndIndex: n,
                              updateId: o,
                            },
                            xv(xv({}, a.state), {}, { legendBBox: t })
                          )
                        )
                      );
                    }
                  }),
                  wv(dv(a), "handleReceiveSyncEvent", function (t, e, r) {
                    if (a.props.syncId === t) {
                      if (
                        r === a.eventEmitterSymbol &&
                        "function" != typeof a.props.syncMethod
                      )
                        return;
                      a.applySyncEvent(e);
                    }
                  }),
                  wv(dv(a), "handleBrushChange", function (t) {
                    var e = t.startIndex,
                      r = t.endIndex;
                    if (
                      e !== a.state.dataStartIndex ||
                      r !== a.state.dataEndIndex
                    ) {
                      var n = a.state.updateId;
                      a.setState(function () {
                        return xv(
                          { dataStartIndex: e, dataEndIndex: r },
                          Bm(
                            {
                              props: a.props,
                              dataStartIndex: e,
                              dataEndIndex: r,
                              updateId: n,
                            },
                            a.state
                          )
                        );
                      }),
                        a.triggerSyncEvent({
                          dataStartIndex: e,
                          dataEndIndex: r,
                        });
                    }
                  }),
                  wv(dv(a), "handleMouseEnter", function (t) {
                    var e = a.getMouseInfo(t);
                    if (e) {
                      var r = xv(xv({}, e), {}, { isTooltipActive: !0 });
                      a.setState(r), a.triggerSyncEvent(r);
                      var n = a.props.onMouseEnter;
                      I()(n) && n(r, t);
                    }
                  }),
                  wv(dv(a), "triggeredAfterMouseMove", function (t) {
                    var e = a.getMouseInfo(t),
                      r = e
                        ? xv(xv({}, e), {}, { isTooltipActive: !0 })
                        : { isTooltipActive: !1 };
                    a.setState(r), a.triggerSyncEvent(r);
                    var n = a.props.onMouseMove;
                    I()(n) && n(r, t);
                  }),
                  wv(dv(a), "handleItemMouseEnter", function (t) {
                    a.setState(function () {
                      return {
                        isTooltipActive: !0,
                        activeItem: t,
                        activePayload: t.tooltipPayload,
                        activeCoordinate: t.tooltipPosition || {
                          x: t.cx,
                          y: t.cy,
                        },
                      };
                    });
                  }),
                  wv(dv(a), "handleItemMouseLeave", function () {
                    a.setState(function () {
                      return { isTooltipActive: !1 };
                    });
                  }),
                  wv(dv(a), "handleMouseMove", function (t) {
                    t.persist(), a.throttleTriggeredAfterMouseMove(t);
                  }),
                  wv(dv(a), "handleMouseLeave", function (t) {
                    a.throttleTriggeredAfterMouseMove.cancel();
                    var e = { isTooltipActive: !1 };
                    a.setState(e), a.triggerSyncEvent(e);
                    var r = a.props.onMouseLeave;
                    I()(r) && r(e, t);
                  }),
                  wv(dv(a), "handleOuterEvent", function (t) {
                    var e,
                      r = (function (t) {
                        var e = t && t.type;
                        return e && Y[e] ? Y[e] : null;
                      })(t),
                      n = m()(a.props, "".concat(r));
                    r &&
                      I()(n) &&
                      n(
                        null !==
                          (e = /.*touch.*/i.test(r)
                            ? a.getMouseInfo(t.changedTouches[0])
                            : a.getMouseInfo(t)) && void 0 !== e
                          ? e
                          : {},
                        t
                      );
                  }),
                  wv(dv(a), "handleClick", function (t) {
                    var e = a.getMouseInfo(t);
                    if (e) {
                      var r = xv(xv({}, e), {}, { isTooltipActive: !0 });
                      a.setState(r), a.triggerSyncEvent(r);
                      var n = a.props.onClick;
                      I()(n) && n(r, t);
                    }
                  }),
                  wv(dv(a), "handleMouseDown", function (t) {
                    var e = a.props.onMouseDown;
                    I()(e) && e(a.getMouseInfo(t), t);
                  }),
                  wv(dv(a), "handleMouseUp", function (t) {
                    var e = a.props.onMouseUp;
                    I()(e) && e(a.getMouseInfo(t), t);
                  }),
                  wv(dv(a), "handleTouchMove", function (t) {
                    null != t.changedTouches &&
                      t.changedTouches.length > 0 &&
                      a.throttleTriggeredAfterMouseMove(t.changedTouches[0]);
                  }),
                  wv(dv(a), "handleTouchStart", function (t) {
                    null != t.changedTouches &&
                      t.changedTouches.length > 0 &&
                      a.handleMouseDown(t.changedTouches[0]);
                  }),
                  wv(dv(a), "handleTouchEnd", function (t) {
                    null != t.changedTouches &&
                      t.changedTouches.length > 0 &&
                      a.handleMouseUp(t.changedTouches[0]);
                  }),
                  wv(dv(a), "triggerSyncEvent", function (t) {
                    void 0 !== a.props.syncId &&
                      oy.emit(iy, a.props.syncId, t, a.eventEmitterSymbol);
                  }),
                  wv(dv(a), "applySyncEvent", function (t) {
                    var e = a.props,
                      r = e.layout,
                      n = e.syncMethod,
                      o = a.state.updateId,
                      i = t.dataStartIndex,
                      c = t.dataEndIndex;
                    if (
                      void 0 !== t.dataStartIndex ||
                      void 0 !== t.dataEndIndex
                    )
                      a.setState(
                        xv(
                          { dataStartIndex: i, dataEndIndex: c },
                          Bm(
                            {
                              props: a.props,
                              dataStartIndex: i,
                              dataEndIndex: c,
                              updateId: o,
                            },
                            a.state
                          )
                        )
                      );
                    else if (void 0 !== t.activeTooltipIndex) {
                      var u = t.chartX,
                        l = t.chartY,
                        s = t.activeTooltipIndex,
                        f = a.state,
                        p = f.offset,
                        h = f.tooltipTicks;
                      if (!p) return;
                      if ("function" == typeof n) s = n(h, t);
                      else if ("value" === n) {
                        s = -1;
                        for (var d = 0; d < h.length; d++)
                          if (h[d].value === t.activeLabel) {
                            s = d;
                            break;
                          }
                      }
                      var y = xv(xv({}, p), {}, { x: p.left, y: p.top }),
                        v = Math.min(u, y.x + y.width),
                        m = Math.min(l, y.y + y.height),
                        b = h[s] && h[s].value,
                        g = Mv(a.state, a.props.data, s),
                        x = h[s]
                          ? {
                              x: "horizontal" === r ? h[s].coordinate : v,
                              y: "horizontal" === r ? m : h[s].coordinate,
                            }
                          : Ev;
                      a.setState(
                        xv(
                          xv({}, t),
                          {},
                          {
                            activeLabel: b,
                            activeCoordinate: x,
                            activePayload: g,
                            activeTooltipIndex: s,
                          }
                        )
                      );
                    } else a.setState(t);
                  }),
                  wv(dv(a), "renderCursor", function (t) {
                    var e,
                      r = a.state,
                      n = r.isTooltipActive,
                      o = r.activeCoordinate,
                      c = r.activePayload,
                      u = r.offset,
                      l = r.activeTooltipIndex,
                      s = r.tooltipAxisBandSize,
                      f = a.getTooltipEventType(),
                      p = null !== (e = t.props.active) && void 0 !== e ? e : n,
                      h = a.props.layout,
                      d = t.key || "_recharts-cursor";
                    return i().createElement(nv, {
                      key: d,
                      activeCoordinate: o,
                      activePayload: c,
                      activeTooltipIndex: l,
                      chartName: Pm,
                      element: t,
                      isActive: p,
                      layout: h,
                      offset: u,
                      tooltipAxisBandSize: s,
                      tooltipEventType: f,
                    });
                  }),
                  wv(dv(a), "renderPolarAxis", function (t, e, r) {
                    var n = m()(t, "type.axisType"),
                      i = m()(a.state, "".concat(n, "Map")),
                      c = i && i[t.props["".concat(n, "Id")]];
                    return (0,
                    o.cloneElement)(t, xv(xv({}, c), {}, { className: u(n, c.className), key: t.key || "".concat(e, "-").concat(r), ticks: If(c, !0) }));
                  }),
                  wv(dv(a), "renderPolarGrid", function (t) {
                    var e = t.props,
                      r = e.radialLines,
                      n = e.polarAngles,
                      i = e.polarRadius,
                      c = a.state,
                      u = c.radiusAxisMap,
                      l = c.angleAxisMap,
                      s = A(u),
                      f = A(l),
                      p = f.cx,
                      h = f.cy,
                      d = f.innerRadius,
                      y = f.outerRadius;
                    return (0, o.cloneElement)(t, {
                      polarAngles: Array.isArray(n)
                        ? n
                        : If(f, !0).map(function (t) {
                            return t.coordinate;
                          }),
                      polarRadius: Array.isArray(i)
                        ? i
                        : If(s, !0).map(function (t) {
                            return t.coordinate;
                          }),
                      cx: p,
                      cy: h,
                      innerRadius: d,
                      outerRadius: y,
                      key: t.key || "polar-grid",
                      radialLines: r,
                    });
                  }),
                  wv(dv(a), "renderLegend", function () {
                    var t = a.state.formattedGraphicalItems,
                      e = a.props,
                      r = e.children,
                      n = e.width,
                      i = e.height,
                      c = a.props.margin || {},
                      u = n - (c.left || 0) - (c.right || 0),
                      l = xf({
                        children: r,
                        formattedGraphicalItems: t,
                        legendWidth: u,
                        legendContent: Dm,
                      });
                    if (!l) return null;
                    var s = l.item,
                      f = lv(l, ov);
                    return (0,
                    o.cloneElement)(s, xv(xv({}, f), {}, { chartWidth: n, chartHeight: i, margin: c, onBBoxUpdate: a.handleLegendBBoxUpdate }));
                  }),
                  wv(dv(a), "renderTooltip", function () {
                    var t,
                      e = a.props,
                      r = e.children,
                      n = e.accessibilityLayer,
                      i = et(r, de);
                    if (!i) return null;
                    var c = a.state,
                      u = c.isTooltipActive,
                      l = c.activeCoordinate,
                      s = c.activePayload,
                      f = c.activeLabel,
                      p = c.offset,
                      h = null !== (t = i.props.active) && void 0 !== t ? t : u;
                    return (0,
                    o.cloneElement)(i, { viewBox: xv(xv({}, p), {}, { x: p.left, y: p.top }), active: h, label: f, payload: h ? s : [], coordinate: l, accessibilityLayer: n });
                  }),
                  wv(dv(a), "renderBrush", function (t) {
                    var e = a.props,
                      r = e.margin,
                      n = e.data,
                      i = a.state,
                      c = i.offset,
                      u = i.dataStartIndex,
                      l = i.dataEndIndex,
                      s = i.updateId;
                    return (0,
                    o.cloneElement)(t, { key: t.key || "_recharts-brush", onChange: Bf(a.handleBrushChange, t.props.onChange), data: n, x: O(t.props.x) ? t.props.x : c.left, y: O(t.props.y) ? t.props.y : c.top + c.height + c.brushBottom - (r.bottom || 0), width: O(t.props.width) ? t.props.width : c.width, startIndex: u, endIndex: l, updateId: "brush-".concat(s) });
                  }),
                  wv(dv(a), "renderReferenceElement", function (t, e, r) {
                    if (!t) return null;
                    var n = dv(a).clipPathId,
                      i = a.state,
                      c = i.xAxisMap,
                      u = i.yAxisMap,
                      l = i.offset,
                      s = t.props,
                      f = s.xAxisId,
                      p = s.yAxisId;
                    return (0,
                    o.cloneElement)(t, { key: t.key || "".concat(e, "-").concat(r), xAxis: c[f], yAxis: u[p], viewBox: { x: l.left, y: l.top, width: l.width, height: l.height }, clipPathId: n });
                  }),
                  wv(dv(a), "renderActivePoints", function (t) {
                    var r = t.item,
                      n = t.activePoint,
                      o = t.basePoint,
                      i = t.childIndex,
                      a = t.isRange,
                      c = [],
                      u = r.props.key,
                      l = r.item.props,
                      s = l.activeDot,
                      f = xv(
                        xv(
                          {
                            index: i,
                            dataKey: l.dataKey,
                            cx: n.x,
                            cy: n.y,
                            r: 4,
                            fill: Mf(r.item),
                            strokeWidth: 2,
                            stroke: "#fff",
                            payload: n.payload,
                            value: n.value,
                            key: "".concat(u, "-activePoint-").concat(i),
                          },
                          ot(s, !1)
                        ),
                        W(s)
                      );
                    return (
                      c.push(e.renderActiveDot(s, f)),
                      o
                        ? c.push(
                            e.renderActiveDot(
                              s,
                              xv(
                                xv({}, f),
                                {},
                                {
                                  cx: o.x,
                                  cy: o.y,
                                  key: "".concat(u, "-basePoint-").concat(i),
                                }
                              )
                            )
                          )
                        : a && c.push(null),
                      c
                    );
                  }),
                  wv(dv(a), "renderGraphicChild", function (t, e, r) {
                    var n = a.filterFormatItem(t, e, r);
                    if (!n) return null;
                    var i = a.getTooltipEventType(),
                      c = a.state,
                      u = c.isTooltipActive,
                      l = c.tooltipAxis,
                      s = c.activeTooltipIndex,
                      f = c.activeLabel,
                      p = et(a.props.children, de),
                      h = n.props,
                      d = h.points,
                      y = h.isRange,
                      v = h.baseLine,
                      m = n.item.props,
                      b = m.activeDot,
                      g = m.hide,
                      x = m.activeBar,
                      w = m.activeShape,
                      O = Boolean(!g && u && p && (b || x || w)),
                      j = {};
                    "axis" !== i && p && "click" === p.props.trigger
                      ? (j = {
                          onClick: Bf(a.handleItemMouseEnter, t.props.onClick),
                        })
                      : "axis" !== i &&
                        (j = {
                          onMouseLeave: Bf(
                            a.handleItemMouseLeave,
                            t.props.onMouseLeave
                          ),
                          onMouseEnter: Bf(
                            a.handleItemMouseEnter,
                            t.props.onMouseEnter
                          ),
                        });
                    var S = (0, o.cloneElement)(t, xv(xv({}, n.props), j));
                    if (O) {
                      if (!(s >= 0)) {
                        var E,
                          P = (
                            null !==
                              (E = a.getItemByXY(a.state.activeCoordinate)) &&
                            void 0 !== E
                              ? E
                              : { graphicalItem: S }
                          ).graphicalItem,
                          A = P.item,
                          k = void 0 === A ? t : A,
                          T = P.childIndex,
                          _ = xv(
                            xv(xv({}, n.props), j),
                            {},
                            { activeIndex: T }
                          );
                        return [(0, o.cloneElement)(k, _), null, null];
                      }
                      var D, I;
                      if (l.dataKey && !l.allowDuplicatedCategory) {
                        var N =
                          "function" == typeof l.dataKey
                            ? function (t) {
                                return "function" == typeof l.dataKey
                                  ? l.dataKey(t.payload)
                                  : null;
                              }
                            : "payload.".concat(l.dataKey.toString());
                        (D = M(d, N, f)), (I = y && v && M(v, N, f));
                      } else
                        (D = null == d ? void 0 : d[s]), (I = y && v && v[s]);
                      if (w || x) {
                        var B =
                          void 0 !== t.props.activeIndex
                            ? t.props.activeIndex
                            : s;
                        return [
                          (0, o.cloneElement)(
                            t,
                            xv(xv(xv({}, n.props), j), {}, { activeIndex: B })
                          ),
                          null,
                          null,
                        ];
                      }
                      if (!C()(D))
                        return [S].concat(
                          vv(
                            a.renderActivePoints({
                              item: n,
                              activePoint: D,
                              basePoint: I,
                              childIndex: s,
                              isRange: y,
                            })
                          )
                        );
                    }
                    return y ? [S, null, null] : [S, null];
                  }),
                  wv(dv(a), "renderCustomized", function (t, e, r) {
                    return (0,
                    o.cloneElement)(t, xv(xv({ key: "recharts-customized-".concat(r) }, a.props), a.state));
                  }),
                  wv(dv(a), "renderMap", {
                    CartesianGrid: { handler: Pv, once: !0 },
                    ReferenceArea: { handler: a.renderReferenceElement },
                    ReferenceLine: { handler: Pv },
                    ReferenceDot: { handler: a.renderReferenceElement },
                    XAxis: { handler: Pv },
                    YAxis: { handler: Pv },
                    Brush: { handler: a.renderBrush, once: !0 },
                    Bar: { handler: a.renderGraphicChild },
                    Line: { handler: a.renderGraphicChild },
                    Area: { handler: a.renderGraphicChild },
                    Radar: { handler: a.renderGraphicChild },
                    RadialBar: { handler: a.renderGraphicChild },
                    Scatter: { handler: a.renderGraphicChild },
                    Pie: { handler: a.renderGraphicChild },
                    Funnel: { handler: a.renderGraphicChild },
                    Tooltip: { handler: a.renderCursor, once: !0 },
                    PolarGrid: { handler: a.renderPolarGrid, once: !0 },
                    PolarAngleAxis: { handler: a.renderPolarAxis },
                    PolarRadiusAxis: { handler: a.renderPolarAxis },
                    Customized: { handler: a.renderCustomized },
                  }),
                  (a.clipPathId = "".concat(
                    null !== (r = t.id) && void 0 !== r ? r : E("recharts"),
                    "-clip"
                  )),
                  (a.throttleTriggeredAfterMouseMove = s()(
                    a.triggeredAfterMouseMove,
                    null !== (n = t.throttleDelay) && void 0 !== n
                      ? n
                      : 1e3 / 60
                  )),
                  (a.state = {}),
                  a
                );
              }
              var r, n;
              return (
                (function (t, e) {
                  if ("function" != typeof e && null !== e)
                    throw new TypeError(
                      "Super expression must either be null or a function"
                    );
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: { value: t, writable: !0, configurable: !0 },
                  })),
                    Object.defineProperty(t, "prototype", { writable: !1 }),
                    e && yv(t, e);
                })(e, t),
                (r = e),
                (n = [
                  {
                    key: "componentDidMount",
                    value: function () {
                      var t, e;
                      this.addListener(),
                        this.accessibilityManager.setDetails({
                          container: this.container,
                          offset: {
                            left:
                              null !== (t = this.props.margin.left) &&
                              void 0 !== t
                                ? t
                                : 0,
                            top:
                              null !== (e = this.props.margin.top) &&
                              void 0 !== e
                                ? e
                                : 0,
                          },
                          coordinateList: this.state.tooltipTicks,
                          mouseHandlerCallback: this.triggeredAfterMouseMove,
                          layout: this.props.layout,
                        }),
                        this.displayDefaultTooltip();
                    },
                  },
                  {
                    key: "displayDefaultTooltip",
                    value: function () {
                      var t = this.props,
                        e = t.children,
                        r = t.data,
                        n = t.height,
                        o = t.layout,
                        i = et(e, de);
                      if (i) {
                        var a = i.props.defaultIndex;
                        if (
                          !(
                            "number" != typeof a ||
                            a < 0 ||
                            a > this.state.tooltipTicks.length
                          )
                        ) {
                          var c =
                              this.state.tooltipTicks[a] &&
                              this.state.tooltipTicks[a].value,
                            u = Mv(this.state, r, a, c),
                            l = this.state.tooltipTicks[a].coordinate,
                            s = (this.state.offset.top + n) / 2,
                            f =
                              "horizontal" === o
                                ? { x: l, y: s }
                                : { y: l, x: s },
                            p = this.state.formattedGraphicalItems.find(
                              function (t) {
                                return "Scatter" === t.item.type.name;
                              }
                            );
                          p &&
                            ((f = xv(
                              xv({}, f),
                              p.props.points[a].tooltipPosition
                            )),
                            (u = p.props.points[a].tooltipPayload));
                          var h = {
                            activeTooltipIndex: a,
                            isTooltipActive: !0,
                            activeLabel: c,
                            activePayload: u,
                            activeCoordinate: f,
                          };
                          this.setState(h),
                            this.renderCursor(i),
                            this.accessibilityManager.setIndex(a);
                        }
                      }
                    },
                  },
                  {
                    key: "getSnapshotBeforeUpdate",
                    value: function (t, e) {
                      return this.props.accessibilityLayer
                        ? (this.state.tooltipTicks !== e.tooltipTicks &&
                            this.accessibilityManager.setDetails({
                              coordinateList: this.state.tooltipTicks,
                            }),
                          this.props.layout !== t.layout &&
                            this.accessibilityManager.setDetails({
                              layout: this.props.layout,
                            }),
                          this.props.margin !== t.margin &&
                            this.accessibilityManager.setDetails({
                              offset: {
                                left:
                                  null !== (r = this.props.margin.left) &&
                                  void 0 !== r
                                    ? r
                                    : 0,
                                top:
                                  null !== (n = this.props.margin.top) &&
                                  void 0 !== n
                                    ? n
                                    : 0,
                              },
                            }),
                          null)
                        : null;
                      var r, n;
                    },
                  },
                  {
                    key: "componentDidUpdate",
                    value: function (t) {
                      it([et(t.children, de)], [et(this.props.children, de)]) ||
                        this.displayDefaultTooltip();
                    },
                  },
                  {
                    key: "componentWillUnmount",
                    value: function () {
                      this.removeListener(),
                        this.throttleTriggeredAfterMouseMove.cancel();
                    },
                  },
                  {
                    key: "getTooltipEventType",
                    value: function () {
                      var t = et(this.props.children, de);
                      if (t && "boolean" == typeof t.props.shared) {
                        var e = t.props.shared ? "axis" : "item";
                        return _m.indexOf(e) >= 0 ? e : Mm;
                      }
                      return Mm;
                    },
                  },
                  {
                    key: "getMouseInfo",
                    value: function (t) {
                      if (!this.container) return null;
                      var e,
                        r = this.container,
                        n = r.getBoundingClientRect(),
                        o =
                          (e = n).top +
                          window.scrollY -
                          document.documentElement.clientTop,
                        i =
                          e.left +
                          window.scrollX -
                          document.documentElement.clientLeft,
                        a = {
                          chartX: Math.round(t.pageX - i),
                          chartY: Math.round(t.pageY - o),
                        },
                        c = n.width / r.offsetWidth || 1,
                        u = this.inRange(a.chartX, a.chartY, c);
                      if (!u) return null;
                      var l = this.state,
                        s = l.xAxisMap,
                        f = l.yAxisMap;
                      if ("axis" !== this.getTooltipEventType() && s && f) {
                        var p = A(s).scale,
                          h = A(f).scale,
                          d = p && p.invert ? p.invert(a.chartX) : null,
                          y = h && h.invert ? h.invert(a.chartY) : null;
                        return xv(xv({}, a), {}, { xValue: d, yValue: y });
                      }
                      var v = Tv(
                        this.state,
                        this.props.data,
                        this.props.layout,
                        u
                      );
                      return v ? xv(xv({}, a), v) : null;
                    },
                  },
                  {
                    key: "inRange",
                    value: function (t, e) {
                      var r =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : 1,
                        n = this.props.layout,
                        o = t / r,
                        i = e / r;
                      if ("horizontal" === n || "vertical" === n) {
                        var a = this.state.offset;
                        return o >= a.left &&
                          o <= a.left + a.width &&
                          i >= a.top &&
                          i <= a.top + a.height
                          ? { x: o, y: i }
                          : null;
                      }
                      var c = this.state,
                        u = c.angleAxisMap,
                        l = c.radiusAxisMap;
                      if (u && l) {
                        var s = A(u);
                        return Op({ x: o, y: i }, s);
                      }
                      return null;
                    },
                  },
                  {
                    key: "parseEventsOfWrapper",
                    value: function () {
                      var t = this.props.children,
                        e = this.getTooltipEventType(),
                        r = et(t, de),
                        n = {};
                      return (
                        r &&
                          "axis" === e &&
                          (n =
                            "click" === r.props.trigger
                              ? { onClick: this.handleClick }
                              : {
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseMove: this.handleMouseMove,
                                  onMouseLeave: this.handleMouseLeave,
                                  onTouchMove: this.handleTouchMove,
                                  onTouchStart: this.handleTouchStart,
                                  onTouchEnd: this.handleTouchEnd,
                                }),
                        xv(xv({}, W(this.props, this.handleOuterEvent)), n)
                      );
                    },
                  },
                  {
                    key: "addListener",
                    value: function () {
                      oy.on(iy, this.handleReceiveSyncEvent);
                    },
                  },
                  {
                    key: "removeListener",
                    value: function () {
                      oy.removeListener(iy, this.handleReceiveSyncEvent);
                    },
                  },
                  {
                    key: "filterFormatItem",
                    value: function (t, e, r) {
                      for (
                        var n = this.state.formattedGraphicalItems,
                          o = 0,
                          i = n.length;
                        o < i;
                        o++
                      ) {
                        var a = n[o];
                        if (
                          a.item === t ||
                          a.props.key === t.key ||
                          (e === K(a.item.type) && r === a.childIndex)
                        )
                          return a;
                      }
                      return null;
                    },
                  },
                  {
                    key: "renderClipPath",
                    value: function () {
                      var t = this.clipPathId,
                        e = this.state.offset,
                        r = e.left,
                        n = e.top,
                        o = e.height,
                        a = e.width;
                      return i().createElement(
                        "defs",
                        null,
                        i().createElement(
                          "clipPath",
                          { id: t },
                          i().createElement("rect", {
                            x: r,
                            y: n,
                            height: o,
                            width: a,
                          })
                        )
                      );
                    },
                  },
                  {
                    key: "getXScales",
                    value: function () {
                      var t = this.state.xAxisMap;
                      return t
                        ? Object.entries(t).reduce(function (t, e) {
                            var r = uv(e, 2),
                              n = r[0],
                              o = r[1];
                            return xv(xv({}, t), {}, wv({}, n, o.scale));
                          }, {})
                        : null;
                    },
                  },
                  {
                    key: "getYScales",
                    value: function () {
                      var t = this.state.yAxisMap;
                      return t
                        ? Object.entries(t).reduce(function (t, e) {
                            var r = uv(e, 2),
                              n = r[0],
                              o = r[1];
                            return xv(xv({}, t), {}, wv({}, n, o.scale));
                          }, {})
                        : null;
                    },
                  },
                  {
                    key: "getXScaleByAxisId",
                    value: function (t) {
                      var e;
                      return null === (e = this.state.xAxisMap) ||
                        void 0 === e ||
                        null === (e = e[t]) ||
                        void 0 === e
                        ? void 0
                        : e.scale;
                    },
                  },
                  {
                    key: "getYScaleByAxisId",
                    value: function (t) {
                      var e;
                      return null === (e = this.state.yAxisMap) ||
                        void 0 === e ||
                        null === (e = e[t]) ||
                        void 0 === e
                        ? void 0
                        : e.scale;
                    },
                  },
                  {
                    key: "getItemByXY",
                    value: function (t) {
                      var e = this.state,
                        r = e.formattedGraphicalItems,
                        n = e.activeItem;
                      if (r && r.length)
                        for (var o = 0, i = r.length; o < i; o++) {
                          var a = r[o],
                            c = a.props,
                            u = a.item,
                            l = K(u.type);
                          if ("Bar" === l) {
                            var s = (c.data || []).find(function (e) {
                              return Uo(t, e);
                            });
                            if (s) return { graphicalItem: a, payload: s };
                          } else if ("RadialBar" === l) {
                            var f = (c.data || []).find(function (e) {
                              return Op(t, e);
                            });
                            if (f) return { graphicalItem: a, payload: f };
                          } else if (Ch(a, n) || Dh(a, n) || Ih(a, n)) {
                            var p = Rh({
                                graphicalItem: a,
                                activeTooltipItem: n,
                                itemData: u.props.data,
                              }),
                              h =
                                void 0 === u.props.activeIndex
                                  ? p
                                  : u.props.activeIndex;
                            return {
                              graphicalItem: xv(
                                xv({}, a),
                                {},
                                { childIndex: h }
                              ),
                              payload: Ih(a, n)
                                ? u.props.data[p]
                                : a.props.data[p],
                            };
                          }
                        }
                      return null;
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var t = this;
                      if (!rt(this)) return null;
                      var e,
                        r,
                        n = this.props,
                        o = n.children,
                        a = n.className,
                        c = n.width,
                        l = n.height,
                        s = n.style,
                        f = n.compact,
                        p = n.title,
                        h = n.desc,
                        d = lv(n, iv),
                        y = ot(d, !1);
                      if (f)
                        return i().createElement(
                          Bd,
                          {
                            state: this.state,
                            width: this.props.width,
                            height: this.props.height,
                            clipPathId: this.clipPathId,
                          },
                          i().createElement(
                            jt,
                            cv({}, y, {
                              width: c,
                              height: l,
                              title: p,
                              desc: h,
                            }),
                            this.renderClipPath(),
                            ct(o, this.renderMap)
                          )
                        );
                      this.props.accessibilityLayer &&
                        ((y.tabIndex =
                          null !== (e = this.props.tabIndex) && void 0 !== e
                            ? e
                            : 0),
                        (y.role =
                          null !== (r = this.props.role) && void 0 !== r
                            ? r
                            : "application"),
                        (y.onKeyDown = function (e) {
                          t.accessibilityManager.keyboardEvent(e);
                        }),
                        (y.onFocus = function () {
                          t.accessibilityManager.focus();
                        }));
                      var v = this.parseEventsOfWrapper();
                      return i().createElement(
                        Bd,
                        {
                          state: this.state,
                          width: this.props.width,
                          height: this.props.height,
                          clipPathId: this.clipPathId,
                        },
                        i().createElement(
                          "div",
                          cv(
                            {
                              className: u("recharts-wrapper", a),
                              style: xv(
                                {
                                  position: "relative",
                                  cursor: "default",
                                  width: c,
                                  height: l,
                                },
                                s
                              ),
                            },
                            v,
                            {
                              ref: function (e) {
                                t.container = e;
                              },
                            }
                          ),
                          i().createElement(
                            jt,
                            cv({}, y, {
                              width: c,
                              height: l,
                              title: p,
                              desc: h,
                              style: Sv,
                            }),
                            this.renderClipPath(),
                            ct(o, this.renderMap)
                          ),
                          this.renderLegend(),
                          this.renderTooltip()
                        )
                      );
                    },
                  },
                ]),
                n && sv(r.prototype, n),
                Object.defineProperty(r, "prototype", { writable: !1 }),
                e
              );
            })(o.Component)),
            wv(Em, "displayName", Pm),
            wv(
              Em,
              "defaultProps",
              xv(
                {
                  layout: "horizontal",
                  stackOffset: "none",
                  barCategoryGap: "10%",
                  barGap: 4,
                  margin: { top: 5, right: 5, bottom: 5, left: 5 },
                  reverseStackOrder: !1,
                  syncMethod: "index",
                },
                Nm
              )
            ),
            wv(Em, "getDerivedStateFromProps", function (t, e) {
              var r = t.dataKey,
                n = t.data,
                o = t.children,
                i = t.width,
                a = t.height,
                c = t.layout,
                u = t.stackOffset,
                l = t.margin,
                s = e.dataStartIndex,
                f = e.dataEndIndex;
              if (void 0 === e.updateId) {
                var p = Cv(t);
                return xv(
                  xv(
                    xv({}, p),
                    {},
                    { updateId: 0 },
                    Bm(xv(xv({ props: t }, p), {}, { updateId: 0 }), e)
                  ),
                  {},
                  {
                    prevDataKey: r,
                    prevData: n,
                    prevWidth: i,
                    prevHeight: a,
                    prevLayout: c,
                    prevStackOffset: u,
                    prevMargin: l,
                    prevChildren: o,
                  }
                );
              }
              if (
                r !== e.prevDataKey ||
                n !== e.prevData ||
                i !== e.prevWidth ||
                a !== e.prevHeight ||
                c !== e.prevLayout ||
                u !== e.prevStackOffset ||
                !L(l, e.prevMargin)
              ) {
                var h = Cv(t),
                  d = {
                    chartX: e.chartX,
                    chartY: e.chartY,
                    isTooltipActive: e.isTooltipActive,
                  },
                  y = xv(xv({}, Tv(e, n, c)), {}, { updateId: e.updateId + 1 }),
                  v = xv(xv(xv({}, h), d), y);
                return xv(
                  xv(xv({}, v), Bm(xv({ props: t }, v), e)),
                  {},
                  {
                    prevDataKey: r,
                    prevData: n,
                    prevWidth: i,
                    prevHeight: a,
                    prevLayout: c,
                    prevStackOffset: u,
                    prevMargin: l,
                    prevChildren: o,
                  }
                );
              }
              if (!it(o, e.prevChildren)) {
                var m,
                  b,
                  g,
                  x,
                  w = et(o, hp),
                  O =
                    w &&
                    null !==
                      (m =
                        null === (b = w.props) || void 0 === b
                          ? void 0
                          : b.startIndex) &&
                    void 0 !== m
                      ? m
                      : s,
                  j =
                    w &&
                    null !==
                      (g =
                        null === (x = w.props) || void 0 === x
                          ? void 0
                          : x.endIndex) &&
                    void 0 !== g
                      ? g
                      : f,
                  S = O !== s || j !== f,
                  E = C()(n) || S ? e.updateId + 1 : e.updateId;
                return xv(
                  xv(
                    { updateId: E },
                    Bm(
                      xv(
                        xv({ props: t }, e),
                        {},
                        { updateId: E, dataStartIndex: O, dataEndIndex: j }
                      ),
                      e
                    )
                  ),
                  {},
                  { prevChildren: o, dataStartIndex: O, dataEndIndex: j }
                );
              }
              return null;
            }),
            wv(Em, "renderActiveDot", function (t, e) {
              var r;
              return (
                (r = (0, o.isValidElement)(t)
                  ? (0, o.cloneElement)(t, e)
                  : I()(t)
                  ? t(e)
                  : i().createElement(Mr, e)),
                i().createElement(
                  Pt,
                  { className: "recharts-active-dot", key: e.key },
                  r
                )
              );
            }),
            Em),
          Rm = ["x1", "y1", "x2", "y2", "key"],
          zm = ["offset"];
        function Um(t) {
          return (
            (Um =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            Um(t)
          );
        }
        function $m(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function Fm(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? $m(Object(r), !0).forEach(function (e) {
                  Wm(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : $m(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e)
                  );
                });
          }
          return t;
        }
        function Wm(t, e, r) {
          var n;
          return (
            (n = (function (t, e) {
              if ("object" != Um(t) || !t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, "string");
                if ("object" != Um(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(e)),
            (e = "symbol" == Um(n) ? n : String(n)) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        function qm() {
          return (
            (qm = Object.assign
              ? Object.assign.bind()
              : function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var n in r)
                      Object.prototype.hasOwnProperty.call(r, n) &&
                        (t[n] = r[n]);
                  }
                  return t;
                }),
            qm.apply(this, arguments)
          );
        }
        function Xm(t, e) {
          if (null == t) return {};
          var r,
            n,
            o = (function (t, e) {
              if (null == t) return {};
              var r,
                n,
                o = {},
                i = Object.keys(t);
              for (n = 0; n < i.length; n++)
                (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
              return o;
            })(t, e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            for (n = 0; n < i.length; n++)
              (r = i[n]),
                e.indexOf(r) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(t, r) &&
                    (o[r] = t[r]));
          }
          return o;
        }
        var Hm = function (t) {
          var e = t.fill;
          if (!e || "none" === e) return null;
          var r = t.fillOpacity,
            n = t.x,
            o = t.y,
            a = t.width,
            c = t.height;
          return i().createElement("rect", {
            x: n,
            y: o,
            width: a,
            height: c,
            stroke: "none",
            fill: e,
            fillOpacity: r,
            className: "recharts-cartesian-grid-bg",
          });
        };
        function Vm(t, e) {
          var r;
          if (i().isValidElement(t)) r = i().cloneElement(t, e);
          else if (I()(t)) r = t(e);
          else {
            var n = e.x1,
              o = e.y1,
              a = e.x2,
              c = e.y2,
              u = e.key,
              l = Xm(e, Rm),
              s = ot(l, !1),
              f = (s.offset, Xm(s, zm));
            r = i().createElement(
              "line",
              qm({}, f, { x1: n, y1: o, x2: a, y2: c, fill: "none", key: u })
            );
          }
          return r;
        }
        function Gm(t) {
          var e = t.x,
            r = t.width,
            n = t.horizontal,
            o = void 0 === n || n,
            a = t.horizontalPoints;
          if (!o || !a || !a.length) return null;
          var c = a.map(function (n, i) {
            var a = Fm(
              Fm({}, t),
              {},
              {
                x1: e,
                y1: n,
                x2: e + r,
                y2: n,
                key: "line-".concat(i),
                index: i,
              }
            );
            return Vm(o, a);
          });
          return i().createElement(
            "g",
            { className: "recharts-cartesian-grid-horizontal" },
            c
          );
        }
        function Ym(t) {
          var e = t.y,
            r = t.height,
            n = t.vertical,
            o = void 0 === n || n,
            a = t.verticalPoints;
          if (!o || !a || !a.length) return null;
          var c = a.map(function (n, i) {
            var a = Fm(
              Fm({}, t),
              {},
              {
                x1: n,
                y1: e,
                x2: n,
                y2: e + r,
                key: "line-".concat(i),
                index: i,
              }
            );
            return Vm(o, a);
          });
          return i().createElement(
            "g",
            { className: "recharts-cartesian-grid-vertical" },
            c
          );
        }
        function Km(t) {
          var e = t.horizontalFill,
            r = t.fillOpacity,
            n = t.x,
            o = t.y,
            a = t.width,
            c = t.height,
            u = t.horizontalPoints,
            l = t.horizontal;
          if ((void 0 !== l && !l) || !e || !e.length) return null;
          var s = u
            .map(function (t) {
              return Math.round(t + o - o);
            })
            .sort(function (t, e) {
              return t - e;
            });
          o !== s[0] && s.unshift(0);
          var f = s.map(function (t, u) {
            var l = s[u + 1] ? s[u + 1] - t : o + c - t;
            if (l <= 0) return null;
            var f = u % e.length;
            return i().createElement("rect", {
              key: "react-".concat(u),
              y: t,
              x: n,
              height: l,
              width: a,
              stroke: "none",
              fill: e[f],
              fillOpacity: r,
              className: "recharts-cartesian-grid-bg",
            });
          });
          return i().createElement(
            "g",
            { className: "recharts-cartesian-gridstripes-horizontal" },
            f
          );
        }
        function Zm(t) {
          var e = t.vertical,
            r = void 0 === e || e,
            n = t.verticalFill,
            o = t.fillOpacity,
            a = t.x,
            c = t.y,
            u = t.width,
            l = t.height,
            s = t.verticalPoints;
          if (!r || !n || !n.length) return null;
          var f = s
            .map(function (t) {
              return Math.round(t + a - a);
            })
            .sort(function (t, e) {
              return t - e;
            });
          a !== f[0] && f.unshift(0);
          var p = f.map(function (t, e) {
            var r = f[e + 1] ? f[e + 1] - t : a + u - t;
            if (r <= 0) return null;
            var s = e % n.length;
            return i().createElement("rect", {
              key: "react-".concat(e),
              x: t,
              y: c,
              width: r,
              height: l,
              stroke: "none",
              fill: n[s],
              fillOpacity: o,
              className: "recharts-cartesian-grid-bg",
            });
          });
          return i().createElement(
            "g",
            { className: "recharts-cartesian-gridstripes-vertical" },
            p
          );
        }
        var Jm = function (t, e) {
            var r = t.xAxis,
              n = t.width,
              o = t.height,
              i = t.offset;
            return Df(
              nm(
                Fm(
                  Fm(Fm({}, gm.defaultProps), r),
                  {},
                  {
                    ticks: If(r, !0),
                    viewBox: { x: 0, y: 0, width: n, height: o },
                  }
                )
              ),
              i.left,
              i.left + i.width,
              e
            );
          },
          Qm = function (t, e) {
            var r = t.yAxis,
              n = t.width,
              o = t.height,
              i = t.offset;
            return Df(
              nm(
                Fm(
                  Fm(Fm({}, gm.defaultProps), r),
                  {},
                  {
                    ticks: If(r, !0),
                    viewBox: { x: 0, y: 0, width: n, height: o },
                  }
                )
              ),
              i.top,
              i.top + i.height,
              e
            );
          },
          tb = {
            horizontal: !0,
            vertical: !0,
            horizontalPoints: [],
            verticalPoints: [],
            stroke: "#ccc",
            fill: "none",
            verticalFill: [],
            horizontalFill: [],
          };
        function eb(t) {
          var e,
            r,
            n,
            a,
            c,
            u,
            l,
            s,
            f = zd(),
            p = Ud(),
            h = (0, o.useContext)(Cd),
            d = Fm(
              Fm({}, t),
              {},
              {
                stroke: null !== (e = t.stroke) && void 0 !== e ? e : tb.stroke,
                fill: null !== (r = t.fill) && void 0 !== r ? r : tb.fill,
                horizontal:
                  null !== (n = t.horizontal) && void 0 !== n
                    ? n
                    : tb.horizontal,
                horizontalFill:
                  null !== (a = t.horizontalFill) && void 0 !== a
                    ? a
                    : tb.horizontalFill,
                vertical:
                  null !== (c = t.vertical) && void 0 !== c ? c : tb.vertical,
                verticalFill:
                  null !== (u = t.verticalFill) && void 0 !== u
                    ? u
                    : tb.verticalFill,
                x: O(t.x) ? t.x : h.left,
                y: O(t.y) ? t.y : h.top,
                width: O(t.width) ? t.width : h.width,
                height: O(t.height) ? t.height : h.height,
              }
            ),
            y = d.x,
            v = d.y,
            m = d.width,
            b = d.height,
            g = d.syncWithTicks,
            x = d.horizontalValues,
            w = d.verticalValues,
            j = ((l = (0, o.useContext)(Md)), A(l)),
            S =
              ((s = (0, o.useContext)(Td)),
              Pd()(s, function (t) {
                return $p()(t.domain, Number.isFinite);
              }) || A(s));
          if (
            !O(m) ||
            m <= 0 ||
            !O(b) ||
            b <= 0 ||
            !O(y) ||
            y !== +y ||
            !O(v) ||
            v !== +v
          )
            return null;
          var E = d.verticalCoordinatesGenerator || Jm,
            P = d.horizontalCoordinatesGenerator || Qm,
            k = d.horizontalPoints,
            M = d.verticalPoints;
          if ((!k || !k.length) && I()(P)) {
            var _ = x && x.length,
              C = P(
                {
                  yAxis: S
                    ? Fm(Fm({}, S), {}, { ticks: _ ? x : S.ticks })
                    : void 0,
                  width: f,
                  height: p,
                  offset: h,
                },
                !!_ || g
              );
            T(
              Array.isArray(C),
              "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(
                Um(C),
                "]"
              )
            ),
              Array.isArray(C) && (k = C);
          }
          if ((!M || !M.length) && I()(E)) {
            var D = w && w.length,
              N = E(
                {
                  xAxis: j
                    ? Fm(Fm({}, j), {}, { ticks: D ? w : j.ticks })
                    : void 0,
                  width: f,
                  height: p,
                  offset: h,
                },
                !!D || g
              );
            T(
              Array.isArray(N),
              "verticalCoordinatesGenerator should return Array but instead it returned [".concat(
                Um(N),
                "]"
              )
            ),
              Array.isArray(N) && (M = N);
          }
          return i().createElement(
            "g",
            { className: "recharts-cartesian-grid" },
            i().createElement(Hm, {
              fill: d.fill,
              fillOpacity: d.fillOpacity,
              x: d.x,
              y: d.y,
              width: d.width,
              height: d.height,
            }),
            i().createElement(
              Gm,
              qm({}, d, { offset: h, horizontalPoints: k, xAxis: j, yAxis: S })
            ),
            i().createElement(
              Ym,
              qm({}, d, { offset: h, verticalPoints: M, xAxis: j, yAxis: S })
            ),
            i().createElement(Km, qm({}, d, { horizontalPoints: k })),
            i().createElement(Zm, qm({}, d, { verticalPoints: M }))
          );
        }
        eb.displayName = "CartesianGrid";
        const rb = () => {
          const [t, e] = (0, o.useState)([]),
            [r, n] = (0, o.useState)("7days");
          (0, o.useEffect)(() => {
            i();
          }, [r]);
          const i = async () => {
            const t = await fetch(
                `/wp-json/rm-charts-widget/v1/data?filter=${r}`
              ),
              n = await t.json();
            e(n);
          };
          return (0, o.createElement)(
            "div",
            { className: "rm-charts-widget" },
            (0, o.createElement)(
              "div",
              { className: "rm-charts-widget-heading" },
              (0, o.createElement)(
                "select",
                {
                  value: r,
                  onChange: (t) => {
                    n(t.target.value);
                  },
                },
                (0, o.createElement)(
                  "option",
                  { value: "7days" },
                  "Last 7 Days"
                ),
                (0, o.createElement)(
                  "option",
                  { value: "15days" },
                  "Last 15 Days"
                ),
                (0, o.createElement)(
                  "option",
                  { value: "1month" },
                  "Last 1 Month"
                )
              )
            ),
            (0, o.createElement)(
              ht,
              { width: "100%", height: 300 },
              (0, o.createElement)(
                Lm,
                { data: t },
                (0, o.createElement)(eb, { strokeDasharray: "3 3" }),
                (0, o.createElement)(wm, { dataKey: "date" }),
                (0, o.createElement)(jm, null),
                (0, o.createElement)(de, null),
                (0, o.createElement)(Ar, null),
                (0, o.createElement)(Kv, {
                  type: "monotone",
                  dataKey: "value",
                  stroke: "#8884d8",
                })
              )
            )
          );
        };
        (0, a.createRoot)(
          document.getElementById("rm-charts-widget-container")
        ).render(
          (0, o.createElement)(() => (0, o.createElement)(rb, null), null)
        );
      },
      8351: function (t, e, r) {
        var n;
        !(function (o) {
          "use strict";
          var i,
            a = 1e9,
            c = {
              precision: 20,
              rounding: 4,
              toExpNeg: -7,
              toExpPos: 21,
              LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286",
            },
            u = !0,
            l = "[DecimalError] ",
            s = l + "Invalid argument: ",
            f = l + "Exponent out of range: ",
            p = Math.floor,
            h = Math.pow,
            d = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
            y = 1e7,
            v = 7,
            m = 9007199254740991,
            b = p(m / v),
            g = {};
          function x(t, e) {
            var r,
              n,
              o,
              i,
              a,
              c,
              l,
              s,
              f = t.constructor,
              p = f.precision;
            if (!t.s || !e.s) return e.s || (e = new f(t)), u ? T(e, p) : e;
            if (
              ((l = t.d),
              (s = e.d),
              (a = t.e),
              (o = e.e),
              (l = l.slice()),
              (i = a - o))
            ) {
              for (
                i < 0
                  ? ((n = l), (i = -i), (c = s.length))
                  : ((n = s), (o = a), (c = l.length)),
                  i > (c = (a = Math.ceil(p / v)) > c ? a + 1 : c + 1) &&
                    ((i = c), (n.length = 1)),
                  n.reverse();
                i--;

              )
                n.push(0);
              n.reverse();
            }
            for (
              (c = l.length) - (i = s.length) < 0 &&
                ((i = c), (n = s), (s = l), (l = n)),
                r = 0;
              i;

            )
              (r = ((l[--i] = l[i] + s[i] + r) / y) | 0), (l[i] %= y);
            for (r && (l.unshift(r), ++o), c = l.length; 0 == l[--c]; ) l.pop();
            return (e.d = l), (e.e = o), u ? T(e, p) : e;
          }
          function w(t, e, r) {
            if (t !== ~~t || t < e || t > r) throw Error(s + t);
          }
          function O(t) {
            var e,
              r,
              n,
              o = t.length - 1,
              i = "",
              a = t[0];
            if (o > 0) {
              for (i += a, e = 1; e < o; e++)
                (n = t[e] + ""), (r = v - n.length) && (i += A(r)), (i += n);
              (a = t[e]), (r = v - (n = a + "").length) && (i += A(r));
            } else if (0 === a) return "0";
            for (; a % 10 == 0; ) a /= 10;
            return i + a;
          }
          (g.absoluteValue = g.abs =
            function () {
              var t = new this.constructor(this);
              return t.s && (t.s = 1), t;
            }),
            (g.comparedTo = g.cmp =
              function (t) {
                var e,
                  r,
                  n,
                  o,
                  i = this;
                if (((t = new i.constructor(t)), i.s !== t.s))
                  return i.s || -t.s;
                if (i.e !== t.e) return (i.e > t.e) ^ (i.s < 0) ? 1 : -1;
                for (
                  e = 0, r = (n = i.d.length) < (o = t.d.length) ? n : o;
                  e < r;
                  ++e
                )
                  if (i.d[e] !== t.d[e])
                    return (i.d[e] > t.d[e]) ^ (i.s < 0) ? 1 : -1;
                return n === o ? 0 : (n > o) ^ (i.s < 0) ? 1 : -1;
              }),
            (g.decimalPlaces = g.dp =
              function () {
                var t = this,
                  e = t.d.length - 1,
                  r = (e - t.e) * v;
                if ((e = t.d[e])) for (; e % 10 == 0; e /= 10) r--;
                return r < 0 ? 0 : r;
              }),
            (g.dividedBy = g.div =
              function (t) {
                return j(this, new this.constructor(t));
              }),
            (g.dividedToIntegerBy = g.idiv =
              function (t) {
                var e = this.constructor;
                return T(j(this, new e(t), 0, 1), e.precision);
              }),
            (g.equals = g.eq =
              function (t) {
                return !this.cmp(t);
              }),
            (g.exponent = function () {
              return E(this);
            }),
            (g.greaterThan = g.gt =
              function (t) {
                return this.cmp(t) > 0;
              }),
            (g.greaterThanOrEqualTo = g.gte =
              function (t) {
                return this.cmp(t) >= 0;
              }),
            (g.isInteger = g.isint =
              function () {
                return this.e > this.d.length - 2;
              }),
            (g.isNegative = g.isneg =
              function () {
                return this.s < 0;
              }),
            (g.isPositive = g.ispos =
              function () {
                return this.s > 0;
              }),
            (g.isZero = function () {
              return 0 === this.s;
            }),
            (g.lessThan = g.lt =
              function (t) {
                return this.cmp(t) < 0;
              }),
            (g.lessThanOrEqualTo = g.lte =
              function (t) {
                return this.cmp(t) < 1;
              }),
            (g.logarithm = g.log =
              function (t) {
                var e,
                  r = this,
                  n = r.constructor,
                  o = n.precision,
                  a = o + 5;
                if (void 0 === t) t = new n(10);
                else if ((t = new n(t)).s < 1 || t.eq(i))
                  throw Error(l + "NaN");
                if (r.s < 1) throw Error(l + (r.s ? "NaN" : "-Infinity"));
                return r.eq(i)
                  ? new n(0)
                  : ((u = !1), (e = j(k(r, a), k(t, a), a)), (u = !0), T(e, o));
              }),
            (g.minus = g.sub =
              function (t) {
                var e = this;
                return (
                  (t = new e.constructor(t)),
                  e.s == t.s ? _(e, t) : x(e, ((t.s = -t.s), t))
                );
              }),
            (g.modulo = g.mod =
              function (t) {
                var e,
                  r = this,
                  n = r.constructor,
                  o = n.precision;
                if (!(t = new n(t)).s) throw Error(l + "NaN");
                return r.s
                  ? ((u = !1),
                    (e = j(r, t, 0, 1).times(t)),
                    (u = !0),
                    r.minus(e))
                  : T(new n(r), o);
              }),
            (g.naturalExponential = g.exp =
              function () {
                return S(this);
              }),
            (g.naturalLogarithm = g.ln =
              function () {
                return k(this);
              }),
            (g.negated = g.neg =
              function () {
                var t = new this.constructor(this);
                return (t.s = -t.s || 0), t;
              }),
            (g.plus = g.add =
              function (t) {
                var e = this;
                return (
                  (t = new e.constructor(t)),
                  e.s == t.s ? x(e, t) : _(e, ((t.s = -t.s), t))
                );
              }),
            (g.precision = g.sd =
              function (t) {
                var e,
                  r,
                  n,
                  o = this;
                if (void 0 !== t && t !== !!t && 1 !== t && 0 !== t)
                  throw Error(s + t);
                if (
                  ((e = E(o) + 1),
                  (r = (n = o.d.length - 1) * v + 1),
                  (n = o.d[n]))
                ) {
                  for (; n % 10 == 0; n /= 10) r--;
                  for (n = o.d[0]; n >= 10; n /= 10) r++;
                }
                return t && e > r ? e : r;
              }),
            (g.squareRoot = g.sqrt =
              function () {
                var t,
                  e,
                  r,
                  n,
                  o,
                  i,
                  a,
                  c = this,
                  s = c.constructor;
                if (c.s < 1) {
                  if (!c.s) return new s(0);
                  throw Error(l + "NaN");
                }
                for (
                  t = E(c),
                    u = !1,
                    0 == (o = Math.sqrt(+c)) || o == 1 / 0
                      ? (((e = O(c.d)).length + t) % 2 == 0 && (e += "0"),
                        (o = Math.sqrt(e)),
                        (t = p((t + 1) / 2) - (t < 0 || t % 2)),
                        (n = new s(
                          (e =
                            o == 1 / 0
                              ? "5e" + t
                              : (e = o.toExponential()).slice(
                                  0,
                                  e.indexOf("e") + 1
                                ) + t)
                        )))
                      : (n = new s(o.toString())),
                    o = a = (r = s.precision) + 3;
                  ;

                )
                  if (
                    ((n = (i = n).plus(j(c, i, a + 2)).times(0.5)),
                    O(i.d).slice(0, a) === (e = O(n.d)).slice(0, a))
                  ) {
                    if (((e = e.slice(a - 3, a + 1)), o == a && "4999" == e)) {
                      if ((T(i, r + 1, 0), i.times(i).eq(c))) {
                        n = i;
                        break;
                      }
                    } else if ("9999" != e) break;
                    a += 4;
                  }
                return (u = !0), T(n, r);
              }),
            (g.times = g.mul =
              function (t) {
                var e,
                  r,
                  n,
                  o,
                  i,
                  a,
                  c,
                  l,
                  s,
                  f = this,
                  p = f.constructor,
                  h = f.d,
                  d = (t = new p(t)).d;
                if (!f.s || !t.s) return new p(0);
                for (
                  t.s *= f.s,
                    r = f.e + t.e,
                    (l = h.length) < (s = d.length) &&
                      ((i = h), (h = d), (d = i), (a = l), (l = s), (s = a)),
                    i = [],
                    n = a = l + s;
                  n--;

                )
                  i.push(0);
                for (n = s; --n >= 0; ) {
                  for (e = 0, o = l + n; o > n; )
                    (c = i[o] + d[n] * h[o - n - 1] + e),
                      (i[o--] = c % y | 0),
                      (e = (c / y) | 0);
                  i[o] = (i[o] + e) % y | 0;
                }
                for (; !i[--a]; ) i.pop();
                return (
                  e ? ++r : i.shift(),
                  (t.d = i),
                  (t.e = r),
                  u ? T(t, p.precision) : t
                );
              }),
            (g.toDecimalPlaces = g.todp =
              function (t, e) {
                var r = this,
                  n = r.constructor;
                return (
                  (r = new n(r)),
                  void 0 === t
                    ? r
                    : (w(t, 0, a),
                      void 0 === e ? (e = n.rounding) : w(e, 0, 8),
                      T(r, t + E(r) + 1, e))
                );
              }),
            (g.toExponential = function (t, e) {
              var r,
                n = this,
                o = n.constructor;
              return (
                void 0 === t
                  ? (r = C(n, !0))
                  : (w(t, 0, a),
                    void 0 === e ? (e = o.rounding) : w(e, 0, 8),
                    (r = C((n = T(new o(n), t + 1, e)), !0, t + 1))),
                r
              );
            }),
            (g.toFixed = function (t, e) {
              var r,
                n,
                o = this,
                i = o.constructor;
              return void 0 === t
                ? C(o)
                : (w(t, 0, a),
                  void 0 === e ? (e = i.rounding) : w(e, 0, 8),
                  (r = C(
                    (n = T(new i(o), t + E(o) + 1, e)).abs(),
                    !1,
                    t + E(n) + 1
                  )),
                  o.isneg() && !o.isZero() ? "-" + r : r);
            }),
            (g.toInteger = g.toint =
              function () {
                var t = this,
                  e = t.constructor;
                return T(new e(t), E(t) + 1, e.rounding);
              }),
            (g.toNumber = function () {
              return +this;
            }),
            (g.toPower = g.pow =
              function (t) {
                var e,
                  r,
                  n,
                  o,
                  a,
                  c,
                  s = this,
                  f = s.constructor,
                  h = +(t = new f(t));
                if (!t.s) return new f(i);
                if (!(s = new f(s)).s) {
                  if (t.s < 1) throw Error(l + "Infinity");
                  return s;
                }
                if (s.eq(i)) return s;
                if (((n = f.precision), t.eq(i))) return T(s, n);
                if (((c = (e = t.e) >= (r = t.d.length - 1)), (a = s.s), c)) {
                  if ((r = h < 0 ? -h : h) <= m) {
                    for (
                      o = new f(i), e = Math.ceil(n / v + 4), u = !1;
                      r % 2 && D((o = o.times(s)).d, e), 0 !== (r = p(r / 2));

                    )
                      D((s = s.times(s)).d, e);
                    return (u = !0), t.s < 0 ? new f(i).div(o) : T(o, n);
                  }
                } else if (a < 0) throw Error(l + "NaN");
                return (
                  (a = a < 0 && 1 & t.d[Math.max(e, r)] ? -1 : 1),
                  (s.s = 1),
                  (u = !1),
                  (o = t.times(k(s, n + 12))),
                  (u = !0),
                  ((o = S(o)).s = a),
                  o
                );
              }),
            (g.toPrecision = function (t, e) {
              var r,
                n,
                o = this,
                i = o.constructor;
              return (
                void 0 === t
                  ? (n = C(o, (r = E(o)) <= i.toExpNeg || r >= i.toExpPos))
                  : (w(t, 1, a),
                    void 0 === e ? (e = i.rounding) : w(e, 0, 8),
                    (n = C(
                      (o = T(new i(o), t, e)),
                      t <= (r = E(o)) || r <= i.toExpNeg,
                      t
                    ))),
                n
              );
            }),
            (g.toSignificantDigits = g.tosd =
              function (t, e) {
                var r = this.constructor;
                return (
                  void 0 === t
                    ? ((t = r.precision), (e = r.rounding))
                    : (w(t, 1, a),
                      void 0 === e ? (e = r.rounding) : w(e, 0, 8)),
                  T(new r(this), t, e)
                );
              }),
            (g.toString =
              g.valueOf =
              g.val =
              g.toJSON =
                function () {
                  var t = this,
                    e = E(t),
                    r = t.constructor;
                  return C(t, e <= r.toExpNeg || e >= r.toExpPos);
                });
          var j = (function () {
            function t(t, e) {
              var r,
                n = 0,
                o = t.length;
              for (t = t.slice(); o--; )
                (r = t[o] * e + n), (t[o] = r % y | 0), (n = (r / y) | 0);
              return n && t.unshift(n), t;
            }
            function e(t, e, r, n) {
              var o, i;
              if (r != n) i = r > n ? 1 : -1;
              else
                for (o = i = 0; o < r; o++)
                  if (t[o] != e[o]) {
                    i = t[o] > e[o] ? 1 : -1;
                    break;
                  }
              return i;
            }
            function r(t, e, r) {
              for (var n = 0; r--; )
                (t[r] -= n),
                  (n = t[r] < e[r] ? 1 : 0),
                  (t[r] = n * y + t[r] - e[r]);
              for (; !t[0] && t.length > 1; ) t.shift();
            }
            return function (n, o, i, a) {
              var c,
                u,
                s,
                f,
                p,
                h,
                d,
                m,
                b,
                g,
                x,
                w,
                O,
                j,
                S,
                P,
                A,
                k,
                M = n.constructor,
                _ = n.s == o.s ? 1 : -1,
                C = n.d,
                D = o.d;
              if (!n.s) return new M(n);
              if (!o.s) throw Error(l + "Division by zero");
              for (
                u = n.e - o.e,
                  A = D.length,
                  S = C.length,
                  m = (d = new M(_)).d = [],
                  s = 0;
                D[s] == (C[s] || 0);

              )
                ++s;
              if (
                (D[s] > (C[s] || 0) && --u,
                (w =
                  null == i
                    ? (i = M.precision)
                    : a
                    ? i + (E(n) - E(o)) + 1
                    : i) < 0)
              )
                return new M(0);
              if (((w = (w / v + 2) | 0), (s = 0), 1 == A))
                for (f = 0, D = D[0], w++; (s < S || f) && w--; s++)
                  (O = f * y + (C[s] || 0)),
                    (m[s] = (O / D) | 0),
                    (f = O % D | 0);
              else {
                for (
                  (f = (y / (D[0] + 1)) | 0) > 1 &&
                    ((D = t(D, f)),
                    (C = t(C, f)),
                    (A = D.length),
                    (S = C.length)),
                    j = A,
                    g = (b = C.slice(0, A)).length;
                  g < A;

                )
                  b[g++] = 0;
                (k = D.slice()).unshift(0), (P = D[0]), D[1] >= y / 2 && ++P;
                do {
                  (f = 0),
                    (c = e(D, b, A, g)) < 0
                      ? ((x = b[0]),
                        A != g && (x = x * y + (b[1] || 0)),
                        (f = (x / P) | 0) > 1
                          ? (f >= y && (f = y - 1),
                            1 ==
                              (c = e(
                                (p = t(D, f)),
                                b,
                                (h = p.length),
                                (g = b.length)
                              )) && (f--, r(p, A < h ? k : D, h)))
                          : (0 == f && (c = f = 1), (p = D.slice())),
                        (h = p.length) < g && p.unshift(0),
                        r(b, p, g),
                        -1 == c &&
                          (c = e(D, b, A, (g = b.length))) < 1 &&
                          (f++, r(b, A < g ? k : D, g)),
                        (g = b.length))
                      : 0 === c && (f++, (b = [0])),
                    (m[s++] = f),
                    c && b[0] ? (b[g++] = C[j] || 0) : ((b = [C[j]]), (g = 1));
                } while ((j++ < S || void 0 !== b[0]) && w--);
              }
              return m[0] || m.shift(), (d.e = u), T(d, a ? i + E(d) + 1 : i);
            };
          })();
          function S(t, e) {
            var r,
              n,
              o,
              a,
              c,
              l = 0,
              s = 0,
              p = t.constructor,
              d = p.precision;
            if (E(t) > 16) throw Error(f + E(t));
            if (!t.s) return new p(i);
            for (
              null == e ? ((u = !1), (c = d)) : (c = e), a = new p(0.03125);
              t.abs().gte(0.1);

            )
              (t = t.times(a)), (s += 5);
            for (
              c += ((Math.log(h(2, s)) / Math.LN10) * 2 + 5) | 0,
                r = n = o = new p(i),
                p.precision = c;
              ;

            ) {
              if (
                ((n = T(n.times(t), c)),
                (r = r.times(++l)),
                O((a = o.plus(j(n, r, c))).d).slice(0, c) ===
                  O(o.d).slice(0, c))
              ) {
                for (; s--; ) o = T(o.times(o), c);
                return (p.precision = d), null == e ? ((u = !0), T(o, d)) : o;
              }
              o = a;
            }
          }
          function E(t) {
            for (var e = t.e * v, r = t.d[0]; r >= 10; r /= 10) e++;
            return e;
          }
          function P(t, e, r) {
            if (e > t.LN10.sd())
              throw (
                ((u = !0),
                r && (t.precision = r),
                Error(l + "LN10 precision limit exceeded"))
              );
            return T(new t(t.LN10), e);
          }
          function A(t) {
            for (var e = ""; t--; ) e += "0";
            return e;
          }
          function k(t, e) {
            var r,
              n,
              o,
              a,
              c,
              s,
              f,
              p,
              h,
              d = 1,
              y = t,
              v = y.d,
              m = y.constructor,
              b = m.precision;
            if (y.s < 1) throw Error(l + (y.s ? "NaN" : "-Infinity"));
            if (y.eq(i)) return new m(0);
            if ((null == e ? ((u = !1), (p = b)) : (p = e), y.eq(10)))
              return null == e && (u = !0), P(m, p);
            if (
              ((p += 10),
              (m.precision = p),
              (n = (r = O(v)).charAt(0)),
              (a = E(y)),
              !(Math.abs(a) < 15e14))
            )
              return (
                (f = P(m, p + 2, b).times(a + "")),
                (y = k(new m(n + "." + r.slice(1)), p - 10).plus(f)),
                (m.precision = b),
                null == e ? ((u = !0), T(y, b)) : y
              );
            for (; (n < 7 && 1 != n) || (1 == n && r.charAt(1) > 3); )
              (n = (r = O((y = y.times(t)).d)).charAt(0)), d++;
            for (
              a = E(y),
                n > 1
                  ? ((y = new m("0." + r)), a++)
                  : (y = new m(n + "." + r.slice(1))),
                s = c = y = j(y.minus(i), y.plus(i), p),
                h = T(y.times(y), p),
                o = 3;
              ;

            ) {
              if (
                ((c = T(c.times(h), p)),
                O((f = s.plus(j(c, new m(o), p))).d).slice(0, p) ===
                  O(s.d).slice(0, p))
              )
                return (
                  (s = s.times(2)),
                  0 !== a && (s = s.plus(P(m, p + 2, b).times(a + ""))),
                  (s = j(s, new m(d), p)),
                  (m.precision = b),
                  null == e ? ((u = !0), T(s, b)) : s
                );
              (s = f), (o += 2);
            }
          }
          function M(t, e) {
            var r, n, o;
            for (
              (r = e.indexOf(".")) > -1 && (e = e.replace(".", "")),
                (n = e.search(/e/i)) > 0
                  ? (r < 0 && (r = n),
                    (r += +e.slice(n + 1)),
                    (e = e.substring(0, n)))
                  : r < 0 && (r = e.length),
                n = 0;
              48 === e.charCodeAt(n);

            )
              ++n;
            for (o = e.length; 48 === e.charCodeAt(o - 1); ) --o;
            if ((e = e.slice(n, o))) {
              if (
                ((o -= n),
                (r = r - n - 1),
                (t.e = p(r / v)),
                (t.d = []),
                (n = (r + 1) % v),
                r < 0 && (n += v),
                n < o)
              ) {
                for (n && t.d.push(+e.slice(0, n)), o -= v; n < o; )
                  t.d.push(+e.slice(n, (n += v)));
                (e = e.slice(n)), (n = v - e.length);
              } else n -= o;
              for (; n--; ) e += "0";
              if ((t.d.push(+e), u && (t.e > b || t.e < -b)))
                throw Error(f + r);
            } else (t.s = 0), (t.e = 0), (t.d = [0]);
            return t;
          }
          function T(t, e, r) {
            var n,
              o,
              i,
              a,
              c,
              l,
              s,
              d,
              m = t.d;
            for (a = 1, i = m[0]; i >= 10; i /= 10) a++;
            if ((n = e - a) < 0) (n += v), (o = e), (s = m[(d = 0)]);
            else {
              if ((d = Math.ceil((n + 1) / v)) >= (i = m.length)) return t;
              for (s = i = m[d], a = 1; i >= 10; i /= 10) a++;
              o = (n %= v) - v + a;
            }
            if (
              (void 0 !== r &&
                ((c = (s / (i = h(10, a - o - 1))) % 10 | 0),
                (l = e < 0 || void 0 !== m[d + 1] || s % i),
                (l =
                  r < 4
                    ? (c || l) && (0 == r || r == (t.s < 0 ? 3 : 2))
                    : c > 5 ||
                      (5 == c &&
                        (4 == r ||
                          l ||
                          (6 == r &&
                            (n > 0
                              ? o > 0
                                ? s / h(10, a - o)
                                : 0
                              : m[d - 1]) %
                              10 &
                              1) ||
                          r == (t.s < 0 ? 8 : 7))))),
              e < 1 || !m[0])
            )
              return (
                l
                  ? ((i = E(t)),
                    (m.length = 1),
                    (e = e - i - 1),
                    (m[0] = h(10, (v - (e % v)) % v)),
                    (t.e = p(-e / v) || 0))
                  : ((m.length = 1), (m[0] = t.e = t.s = 0)),
                t
              );
            if (
              (0 == n
                ? ((m.length = d), (i = 1), d--)
                : ((m.length = d + 1),
                  (i = h(10, v - n)),
                  (m[d] = o > 0 ? ((s / h(10, a - o)) % h(10, o) | 0) * i : 0)),
              l)
            )
              for (;;) {
                if (0 == d) {
                  (m[0] += i) == y && ((m[0] = 1), ++t.e);
                  break;
                }
                if (((m[d] += i), m[d] != y)) break;
                (m[d--] = 0), (i = 1);
              }
            for (n = m.length; 0 === m[--n]; ) m.pop();
            if (u && (t.e > b || t.e < -b)) throw Error(f + E(t));
            return t;
          }
          function _(t, e) {
            var r,
              n,
              o,
              i,
              a,
              c,
              l,
              s,
              f,
              p,
              h = t.constructor,
              d = h.precision;
            if (!t.s || !e.s)
              return e.s ? (e.s = -e.s) : (e = new h(t)), u ? T(e, d) : e;
            if (
              ((l = t.d),
              (p = e.d),
              (n = e.e),
              (s = t.e),
              (l = l.slice()),
              (a = s - n))
            ) {
              for (
                (f = a < 0)
                  ? ((r = l), (a = -a), (c = p.length))
                  : ((r = p), (n = s), (c = l.length)),
                  a > (o = Math.max(Math.ceil(d / v), c) + 2) &&
                    ((a = o), (r.length = 1)),
                  r.reverse(),
                  o = a;
                o--;

              )
                r.push(0);
              r.reverse();
            } else {
              for (
                (f = (o = l.length) < (c = p.length)) && (c = o), o = 0;
                o < c;
                o++
              )
                if (l[o] != p[o]) {
                  f = l[o] < p[o];
                  break;
                }
              a = 0;
            }
            for (
              f && ((r = l), (l = p), (p = r), (e.s = -e.s)),
                c = l.length,
                o = p.length - c;
              o > 0;
              --o
            )
              l[c++] = 0;
            for (o = p.length; o > a; ) {
              if (l[--o] < p[o]) {
                for (i = o; i && 0 === l[--i]; ) l[i] = y - 1;
                --l[i], (l[o] += y);
              }
              l[o] -= p[o];
            }
            for (; 0 === l[--c]; ) l.pop();
            for (; 0 === l[0]; l.shift()) --n;
            return l[0] ? ((e.d = l), (e.e = n), u ? T(e, d) : e) : new h(0);
          }
          function C(t, e, r) {
            var n,
              o = E(t),
              i = O(t.d),
              a = i.length;
            return (
              e
                ? (r && (n = r - a) > 0
                    ? (i = i.charAt(0) + "." + i.slice(1) + A(n))
                    : a > 1 && (i = i.charAt(0) + "." + i.slice(1)),
                  (i = i + (o < 0 ? "e" : "e+") + o))
                : o < 0
                ? ((i = "0." + A(-o - 1) + i),
                  r && (n = r - a) > 0 && (i += A(n)))
                : o >= a
                ? ((i += A(o + 1 - a)),
                  r && (n = r - o - 1) > 0 && (i = i + "." + A(n)))
                : ((n = o + 1) < a && (i = i.slice(0, n) + "." + i.slice(n)),
                  r &&
                    (n = r - a) > 0 &&
                    (o + 1 === a && (i += "."), (i += A(n)))),
              t.s < 0 ? "-" + i : i
            );
          }
          function D(t, e) {
            if (t.length > e) return (t.length = e), !0;
          }
          function I(t) {
            if (!t || "object" != typeof t) throw Error(l + "Object expected");
            var e,
              r,
              n,
              o = [
                "precision",
                1,
                a,
                "rounding",
                0,
                8,
                "toExpNeg",
                -1 / 0,
                0,
                "toExpPos",
                0,
                1 / 0,
              ];
            for (e = 0; e < o.length; e += 3)
              if (void 0 !== (n = t[(r = o[e])])) {
                if (!(p(n) === n && n >= o[e + 1] && n <= o[e + 2]))
                  throw Error(s + r + ": " + n);
                this[r] = n;
              }
            if (void 0 !== (n = t[(r = "LN10")])) {
              if (n != Math.LN10) throw Error(s + r + ": " + n);
              this[r] = new this(n);
            }
            return this;
          }
          ((c = (function t(e) {
            var r, n, o;
            function i(t) {
              var e = this;
              if (!(e instanceof i)) return new i(t);
              if (((e.constructor = i), t instanceof i))
                return (
                  (e.s = t.s),
                  (e.e = t.e),
                  void (e.d = (t = t.d) ? t.slice() : t)
                );
              if ("number" == typeof t) {
                if (0 * t != 0) throw Error(s + t);
                if (t > 0) e.s = 1;
                else {
                  if (!(t < 0)) return (e.s = 0), (e.e = 0), void (e.d = [0]);
                  (t = -t), (e.s = -1);
                }
                return t === ~~t && t < 1e7
                  ? ((e.e = 0), void (e.d = [t]))
                  : M(e, t.toString());
              }
              if ("string" != typeof t) throw Error(s + t);
              if (
                (45 === t.charCodeAt(0)
                  ? ((t = t.slice(1)), (e.s = -1))
                  : (e.s = 1),
                !d.test(t))
              )
                throw Error(s + t);
              M(e, t);
            }
            if (
              ((i.prototype = g),
              (i.ROUND_UP = 0),
              (i.ROUND_DOWN = 1),
              (i.ROUND_CEIL = 2),
              (i.ROUND_FLOOR = 3),
              (i.ROUND_HALF_UP = 4),
              (i.ROUND_HALF_DOWN = 5),
              (i.ROUND_HALF_EVEN = 6),
              (i.ROUND_HALF_CEIL = 7),
              (i.ROUND_HALF_FLOOR = 8),
              (i.clone = t),
              (i.config = i.set = I),
              void 0 === e && (e = {}),
              e)
            )
              for (
                o = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"],
                  r = 0;
                r < o.length;

              )
                e.hasOwnProperty((n = o[r++])) || (e[n] = this[n]);
            return i.config(e), i;
          })(c)).default = c.Decimal =
            c),
            (i = new c(1)),
            void 0 ===
              (n = function () {
                return c;
              }.call(e, r, e, t)) || (t.exports = n);
        })();
      },
      228: (t) => {
        "use strict";
        var e = Object.prototype.hasOwnProperty,
          r = "~";
        function n() {}
        function o(t, e, r) {
          (this.fn = t), (this.context = e), (this.once = r || !1);
        }
        function i(t, e, n, i, a) {
          if ("function" != typeof n)
            throw new TypeError("The listener must be a function");
          var c = new o(n, i || t, a),
            u = r ? r + e : e;
          return (
            t._events[u]
              ? t._events[u].fn
                ? (t._events[u] = [t._events[u], c])
                : t._events[u].push(c)
              : ((t._events[u] = c), t._eventsCount++),
            t
          );
        }
        function a(t, e) {
          0 == --t._eventsCount ? (t._events = new n()) : delete t._events[e];
        }
        function c() {
          (this._events = new n()), (this._eventsCount = 0);
        }
        Object.create &&
          ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1)),
          (c.prototype.eventNames = function () {
            var t,
              n,
              o = [];
            if (0 === this._eventsCount) return o;
            for (n in (t = this._events))
              e.call(t, n) && o.push(r ? n.slice(1) : n);
            return Object.getOwnPropertySymbols
              ? o.concat(Object.getOwnPropertySymbols(t))
              : o;
          }),
          (c.prototype.listeners = function (t) {
            var e = r ? r + t : t,
              n = this._events[e];
            if (!n) return [];
            if (n.fn) return [n.fn];
            for (var o = 0, i = n.length, a = new Array(i); o < i; o++)
              a[o] = n[o].fn;
            return a;
          }),
          (c.prototype.listenerCount = function (t) {
            var e = r ? r + t : t,
              n = this._events[e];
            return n ? (n.fn ? 1 : n.length) : 0;
          }),
          (c.prototype.emit = function (t, e, n, o, i, a) {
            var c = r ? r + t : t;
            if (!this._events[c]) return !1;
            var u,
              l,
              s = this._events[c],
              f = arguments.length;
            if (s.fn) {
              switch ((s.once && this.removeListener(t, s.fn, void 0, !0), f)) {
                case 1:
                  return s.fn.call(s.context), !0;
                case 2:
                  return s.fn.call(s.context, e), !0;
                case 3:
                  return s.fn.call(s.context, e, n), !0;
                case 4:
                  return s.fn.call(s.context, e, n, o), !0;
                case 5:
                  return s.fn.call(s.context, e, n, o, i), !0;
                case 6:
                  return s.fn.call(s.context, e, n, o, i, a), !0;
              }
              for (l = 1, u = new Array(f - 1); l < f; l++)
                u[l - 1] = arguments[l];
              s.fn.apply(s.context, u);
            } else {
              var p,
                h = s.length;
              for (l = 0; l < h; l++)
                switch (
                  (s[l].once && this.removeListener(t, s[l].fn, void 0, !0), f)
                ) {
                  case 1:
                    s[l].fn.call(s[l].context);
                    break;
                  case 2:
                    s[l].fn.call(s[l].context, e);
                    break;
                  case 3:
                    s[l].fn.call(s[l].context, e, n);
                    break;
                  case 4:
                    s[l].fn.call(s[l].context, e, n, o);
                    break;
                  default:
                    if (!u)
                      for (p = 1, u = new Array(f - 1); p < f; p++)
                        u[p - 1] = arguments[p];
                    s[l].fn.apply(s[l].context, u);
                }
            }
            return !0;
          }),
          (c.prototype.on = function (t, e, r) {
            return i(this, t, e, r, !1);
          }),
          (c.prototype.once = function (t, e, r) {
            return i(this, t, e, r, !0);
          }),
          (c.prototype.removeListener = function (t, e, n, o) {
            var i = r ? r + t : t;
            if (!this._events[i]) return this;
            if (!e) return a(this, i), this;
            var c = this._events[i];
            if (c.fn)
              c.fn !== e ||
                (o && !c.once) ||
                (n && c.context !== n) ||
                a(this, i);
            else {
              for (var u = 0, l = [], s = c.length; u < s; u++)
                (c[u].fn !== e ||
                  (o && !c[u].once) ||
                  (n && c[u].context !== n)) &&
                  l.push(c[u]);
              l.length
                ? (this._events[i] = 1 === l.length ? l[0] : l)
                : a(this, i);
            }
            return this;
          }),
          (c.prototype.removeAllListeners = function (t) {
            var e;
            return (
              t
                ? ((e = r ? r + t : t), this._events[e] && a(this, e))
                : ((this._events = new n()), (this._eventsCount = 0)),
              this
            );
          }),
          (c.prototype.off = c.prototype.removeListener),
          (c.prototype.addListener = c.prototype.on),
          (c.prefixed = r),
          (c.EventEmitter = c),
          (t.exports = c);
      },
      5580: (t, e, r) => {
        var n = r(6110)(r(9325), "DataView");
        t.exports = n;
      },
      1549: (t, e, r) => {
        var n = r(2032),
          o = r(3862),
          i = r(6721),
          a = r(2749),
          c = r(5749);
        function u(t) {
          var e = -1,
            r = null == t ? 0 : t.length;
          for (this.clear(); ++e < r; ) {
            var n = t[e];
            this.set(n[0], n[1]);
          }
        }
        (u.prototype.clear = n),
          (u.prototype.delete = o),
          (u.prototype.get = i),
          (u.prototype.has = a),
          (u.prototype.set = c),
          (t.exports = u);
      },
      79: (t, e, r) => {
        var n = r(3702),
          o = r(80),
          i = r(4739),
          a = r(8655),
          c = r(1175);
        function u(t) {
          var e = -1,
            r = null == t ? 0 : t.length;
          for (this.clear(); ++e < r; ) {
            var n = t[e];
            this.set(n[0], n[1]);
          }
        }
        (u.prototype.clear = n),
          (u.prototype.delete = o),
          (u.prototype.get = i),
          (u.prototype.has = a),
          (u.prototype.set = c),
          (t.exports = u);
      },
      8223: (t, e, r) => {
        var n = r(6110)(r(9325), "Map");
        t.exports = n;
      },
      3661: (t, e, r) => {
        var n = r(3040),
          o = r(7670),
          i = r(289),
          a = r(4509),
          c = r(2949);
        function u(t) {
          var e = -1,
            r = null == t ? 0 : t.length;
          for (this.clear(); ++e < r; ) {
            var n = t[e];
            this.set(n[0], n[1]);
          }
        }
        (u.prototype.clear = n),
          (u.prototype.delete = o),
          (u.prototype.get = i),
          (u.prototype.has = a),
          (u.prototype.set = c),
          (t.exports = u);
      },
      2804: (t, e, r) => {
        var n = r(6110)(r(9325), "Promise");
        t.exports = n;
      },
      6545: (t, e, r) => {
        var n = r(6110)(r(9325), "Set");
        t.exports = n;
      },
      8859: (t, e, r) => {
        var n = r(3661),
          o = r(1380),
          i = r(1459);
        function a(t) {
          var e = -1,
            r = null == t ? 0 : t.length;
          for (this.__data__ = new n(); ++e < r; ) this.add(t[e]);
        }
        (a.prototype.add = a.prototype.push = o),
          (a.prototype.has = i),
          (t.exports = a);
      },
      7217: (t, e, r) => {
        var n = r(79),
          o = r(1420),
          i = r(938),
          a = r(3605),
          c = r(9817),
          u = r(945);
        function l(t) {
          var e = (this.__data__ = new n(t));
          this.size = e.size;
        }
        (l.prototype.clear = o),
          (l.prototype.delete = i),
          (l.prototype.get = a),
          (l.prototype.has = c),
          (l.prototype.set = u),
          (t.exports = l);
      },
      1873: (t, e, r) => {
        var n = r(9325).Symbol;
        t.exports = n;
      },
      7828: (t, e, r) => {
        var n = r(9325).Uint8Array;
        t.exports = n;
      },
      8303: (t, e, r) => {
        var n = r(6110)(r(9325), "WeakMap");
        t.exports = n;
      },
      1033: (t) => {
        t.exports = function (t, e, r) {
          switch (r.length) {
            case 0:
              return t.call(e);
            case 1:
              return t.call(e, r[0]);
            case 2:
              return t.call(e, r[0], r[1]);
            case 3:
              return t.call(e, r[0], r[1], r[2]);
          }
          return t.apply(e, r);
        };
      },
      7277: (t) => {
        t.exports = function (t, e) {
          for (var r = -1, n = null == t ? 0 : t.length; ++r < n; )
            if (!e(t[r], r, t)) return !1;
          return !0;
        };
      },
      9770: (t) => {
        t.exports = function (t, e) {
          for (
            var r = -1, n = null == t ? 0 : t.length, o = 0, i = [];
            ++r < n;

          ) {
            var a = t[r];
            e(a, r, t) && (i[o++] = a);
          }
          return i;
        };
      },
      5325: (t, e, r) => {
        var n = r(6131);
        t.exports = function (t, e) {
          return !(null == t || !t.length) && n(t, e, 0) > -1;
        };
      },
      9905: (t) => {
        t.exports = function (t, e, r) {
          for (var n = -1, o = null == t ? 0 : t.length; ++n < o; )
            if (r(e, t[n])) return !0;
          return !1;
        };
      },
      695: (t, e, r) => {
        var n = r(8096),
          o = r(2428),
          i = r(6449),
          a = r(3656),
          c = r(361),
          u = r(7167),
          l = Object.prototype.hasOwnProperty;
        t.exports = function (t, e) {
          var r = i(t),
            s = !r && o(t),
            f = !r && !s && a(t),
            p = !r && !s && !f && u(t),
            h = r || s || f || p,
            d = h ? n(t.length, String) : [],
            y = d.length;
          for (var v in t)
            (!e && !l.call(t, v)) ||
              (h &&
                ("length" == v ||
                  (f && ("offset" == v || "parent" == v)) ||
                  (p &&
                    ("buffer" == v ||
                      "byteLength" == v ||
                      "byteOffset" == v)) ||
                  c(v, y))) ||
              d.push(v);
          return d;
        };
      },
      4932: (t) => {
        t.exports = function (t, e) {
          for (
            var r = -1, n = null == t ? 0 : t.length, o = Array(n);
            ++r < n;

          )
            o[r] = e(t[r], r, t);
          return o;
        };
      },
      4528: (t) => {
        t.exports = function (t, e) {
          for (var r = -1, n = e.length, o = t.length; ++r < n; )
            t[o + r] = e[r];
          return t;
        };
      },
      4248: (t) => {
        t.exports = function (t, e) {
          for (var r = -1, n = null == t ? 0 : t.length; ++r < n; )
            if (e(t[r], r, t)) return !0;
          return !1;
        };
      },
      1074: (t) => {
        t.exports = function (t) {
          return t.split("");
        };
      },
      6025: (t, e, r) => {
        var n = r(5288);
        t.exports = function (t, e) {
          for (var r = t.length; r--; ) if (n(t[r][0], e)) return r;
          return -1;
        };
      },
      3360: (t, e, r) => {
        var n = r(3243);
        t.exports = function (t, e, r) {
          "__proto__" == e && n
            ? n(t, e, {
                configurable: !0,
                enumerable: !0,
                value: r,
                writable: !0,
              })
            : (t[e] = r);
        };
      },
      909: (t, e, r) => {
        var n = r(641),
          o = r(8329)(n);
        t.exports = o;
      },
      3777: (t, e, r) => {
        var n = r(909);
        t.exports = function (t, e) {
          var r = !0;
          return (
            n(t, function (t, n, o) {
              return (r = !!e(t, n, o));
            }),
            r
          );
        };
      },
      3599: (t, e, r) => {
        var n = r(4394);
        t.exports = function (t, e, r) {
          for (var o = -1, i = t.length; ++o < i; ) {
            var a = t[o],
              c = e(a);
            if (null != c && (void 0 === u ? c == c && !n(c) : r(c, u)))
              var u = c,
                l = a;
          }
          return l;
        };
      },
      2523: (t) => {
        t.exports = function (t, e, r, n) {
          for (var o = t.length, i = r + (n ? 1 : -1); n ? i-- : ++i < o; )
            if (e(t[i], i, t)) return i;
          return -1;
        };
      },
      3120: (t, e, r) => {
        var n = r(4528),
          o = r(5891);
        t.exports = function t(e, r, i, a, c) {
          var u = -1,
            l = e.length;
          for (i || (i = o), c || (c = []); ++u < l; ) {
            var s = e[u];
            r > 0 && i(s)
              ? r > 1
                ? t(s, r - 1, i, a, c)
                : n(c, s)
              : a || (c[c.length] = s);
          }
          return c;
        };
      },
      6649: (t, e, r) => {
        var n = r(3221)();
        t.exports = n;
      },
      641: (t, e, r) => {
        var n = r(6649),
          o = r(5950);
        t.exports = function (t, e) {
          return t && n(t, e, o);
        };
      },
      7422: (t, e, r) => {
        var n = r(1769),
          o = r(7797);
        t.exports = function (t, e) {
          for (var r = 0, i = (e = n(e, t)).length; null != t && r < i; )
            t = t[o(e[r++])];
          return r && r == i ? t : void 0;
        };
      },
      4580: (t, e, r) => {
        var n = r(4528),
          o = r(6449);
        t.exports = function (t, e, r) {
          var i = e(t);
          return o(t) ? i : n(i, r(t));
        };
      },
      2552: (t, e, r) => {
        var n = r(1873),
          o = r(659),
          i = r(9350),
          a = n ? n.toStringTag : void 0;
        t.exports = function (t) {
          return null == t
            ? void 0 === t
              ? "[object Undefined]"
              : "[object Null]"
            : a && a in Object(t)
            ? o(t)
            : i(t);
        };
      },
      3335: (t) => {
        t.exports = function (t, e) {
          return t > e;
        };
      },
      8077: (t) => {
        t.exports = function (t, e) {
          return null != t && e in Object(t);
        };
      },
      6131: (t, e, r) => {
        var n = r(2523),
          o = r(5463),
          i = r(6959);
        t.exports = function (t, e, r) {
          return e == e ? i(t, e, r) : n(t, o, r);
        };
      },
      7534: (t, e, r) => {
        var n = r(2552),
          o = r(346);
        t.exports = function (t) {
          return o(t) && "[object Arguments]" == n(t);
        };
      },
      270: (t, e, r) => {
        var n = r(7068),
          o = r(346);
        t.exports = function t(e, r, i, a, c) {
          return (
            e === r ||
            (null == e || null == r || (!o(e) && !o(r))
              ? e != e && r != r
              : n(e, r, i, a, t, c))
          );
        };
      },
      7068: (t, e, r) => {
        var n = r(7217),
          o = r(5911),
          i = r(1986),
          a = r(689),
          c = r(5861),
          u = r(6449),
          l = r(3656),
          s = r(7167),
          f = "[object Arguments]",
          p = "[object Array]",
          h = "[object Object]",
          d = Object.prototype.hasOwnProperty;
        t.exports = function (t, e, r, y, v, m) {
          var b = u(t),
            g = u(e),
            x = b ? p : c(t),
            w = g ? p : c(e),
            O = (x = x == f ? h : x) == h,
            j = (w = w == f ? h : w) == h,
            S = x == w;
          if (S && l(t)) {
            if (!l(e)) return !1;
            (b = !0), (O = !1);
          }
          if (S && !O)
            return (
              m || (m = new n()),
              b || s(t) ? o(t, e, r, y, v, m) : i(t, e, x, r, y, v, m)
            );
          if (!(1 & r)) {
            var E = O && d.call(t, "__wrapped__"),
              P = j && d.call(e, "__wrapped__");
            if (E || P) {
              var A = E ? t.value() : t,
                k = P ? e.value() : e;
              return m || (m = new n()), v(A, k, r, y, m);
            }
          }
          return !!S && (m || (m = new n()), a(t, e, r, y, v, m));
        };
      },
      1799: (t, e, r) => {
        var n = r(7217),
          o = r(270);
        t.exports = function (t, e, r, i) {
          var a = r.length,
            c = a,
            u = !i;
          if (null == t) return !c;
          for (t = Object(t); a--; ) {
            var l = r[a];
            if (u && l[2] ? l[1] !== t[l[0]] : !(l[0] in t)) return !1;
          }
          for (; ++a < c; ) {
            var s = (l = r[a])[0],
              f = t[s],
              p = l[1];
            if (u && l[2]) {
              if (void 0 === f && !(s in t)) return !1;
            } else {
              var h = new n();
              if (i) var d = i(f, p, s, t, e, h);
              if (!(void 0 === d ? o(p, f, 3, i, h) : d)) return !1;
            }
          }
          return !0;
        };
      },
      5463: (t) => {
        t.exports = function (t) {
          return t != t;
        };
      },
      5083: (t, e, r) => {
        var n = r(1882),
          o = r(7296),
          i = r(3805),
          a = r(7473),
          c = /^\[object .+?Constructor\]$/,
          u = Function.prototype,
          l = Object.prototype,
          s = u.toString,
          f = l.hasOwnProperty,
          p = RegExp(
            "^" +
              s
                .call(f)
                .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          );
        t.exports = function (t) {
          return !(!i(t) || o(t)) && (n(t) ? p : c).test(a(t));
        };
      },
      4901: (t, e, r) => {
        var n = r(2552),
          o = r(294),
          i = r(346),
          a = {};
        (a["[object Float32Array]"] =
          a["[object Float64Array]"] =
          a["[object Int8Array]"] =
          a["[object Int16Array]"] =
          a["[object Int32Array]"] =
          a["[object Uint8Array]"] =
          a["[object Uint8ClampedArray]"] =
          a["[object Uint16Array]"] =
          a["[object Uint32Array]"] =
            !0),
          (a["[object Arguments]"] =
            a["[object Array]"] =
            a["[object ArrayBuffer]"] =
            a["[object Boolean]"] =
            a["[object DataView]"] =
            a["[object Date]"] =
            a["[object Error]"] =
            a["[object Function]"] =
            a["[object Map]"] =
            a["[object Number]"] =
            a["[object Object]"] =
            a["[object RegExp]"] =
            a["[object Set]"] =
            a["[object String]"] =
            a["[object WeakMap]"] =
              !1),
          (t.exports = function (t) {
            return i(t) && o(t.length) && !!a[n(t)];
          });
      },
      5389: (t, e, r) => {
        var n = r(3663),
          o = r(7978),
          i = r(3488),
          a = r(6449),
          c = r(583);
        t.exports = function (t) {
          return "function" == typeof t
            ? t
            : null == t
            ? i
            : "object" == typeof t
            ? a(t)
              ? o(t[0], t[1])
              : n(t)
            : c(t);
        };
      },
      8984: (t, e, r) => {
        var n = r(5527),
          o = r(3650),
          i = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
          if (!n(t)) return o(t);
          var e = [];
          for (var r in Object(t))
            i.call(t, r) && "constructor" != r && e.push(r);
          return e;
        };
      },
      6176: (t) => {
        t.exports = function (t, e) {
          return t < e;
        };
      },
      5128: (t, e, r) => {
        var n = r(909),
          o = r(4894);
        t.exports = function (t, e) {
          var r = -1,
            i = o(t) ? Array(t.length) : [];
          return (
            n(t, function (t, n, o) {
              i[++r] = e(t, n, o);
            }),
            i
          );
        };
      },
      3663: (t, e, r) => {
        var n = r(1799),
          o = r(776),
          i = r(7197);
        t.exports = function (t) {
          var e = o(t);
          return 1 == e.length && e[0][2]
            ? i(e[0][0], e[0][1])
            : function (r) {
                return r === t || n(r, t, e);
              };
        };
      },
      7978: (t, e, r) => {
        var n = r(270),
          o = r(8156),
          i = r(631),
          a = r(8586),
          c = r(756),
          u = r(7197),
          l = r(7797);
        t.exports = function (t, e) {
          return a(t) && c(e)
            ? u(l(t), e)
            : function (r) {
                var a = o(r, t);
                return void 0 === a && a === e ? i(r, t) : n(e, a, 3);
              };
        };
      },
      6155: (t, e, r) => {
        var n = r(4932),
          o = r(7422),
          i = r(5389),
          a = r(5128),
          c = r(3937),
          u = r(7301),
          l = r(3714),
          s = r(3488),
          f = r(6449);
        t.exports = function (t, e, r) {
          e = e.length
            ? n(e, function (t) {
                return f(t)
                  ? function (e) {
                      return o(e, 1 === t.length ? t[0] : t);
                    }
                  : t;
              })
            : [s];
          var p = -1;
          e = n(e, u(i));
          var h = a(t, function (t, r, o) {
            return {
              criteria: n(e, function (e) {
                return e(t);
              }),
              index: ++p,
              value: t,
            };
          });
          return c(h, function (t, e) {
            return l(t, e, r);
          });
        };
      },
      7237: (t) => {
        t.exports = function (t) {
          return function (e) {
            return null == e ? void 0 : e[t];
          };
        };
      },
      7255: (t, e, r) => {
        var n = r(7422);
        t.exports = function (t) {
          return function (e) {
            return n(e, t);
          };
        };
      },
      6151: (t) => {
        var e = Math.ceil,
          r = Math.max;
        t.exports = function (t, n, o, i) {
          for (var a = -1, c = r(e((n - t) / (o || 1)), 0), u = Array(c); c--; )
            (u[i ? c : ++a] = t), (t += o);
          return u;
        };
      },
      9302: (t, e, r) => {
        var n = r(3488),
          o = r(6757),
          i = r(2865);
        t.exports = function (t, e) {
          return i(o(t, e, n), t + "");
        };
      },
      9570: (t, e, r) => {
        var n = r(7334),
          o = r(3243),
          i = r(3488),
          a = o
            ? function (t, e) {
                return o(t, "toString", {
                  configurable: !0,
                  enumerable: !1,
                  value: n(e),
                  writable: !0,
                });
              }
            : i;
        t.exports = a;
      },
      5160: (t) => {
        t.exports = function (t, e, r) {
          var n = -1,
            o = t.length;
          e < 0 && (e = -e > o ? 0 : o + e),
            (r = r > o ? o : r) < 0 && (r += o),
            (o = e > r ? 0 : (r - e) >>> 0),
            (e >>>= 0);
          for (var i = Array(o); ++n < o; ) i[n] = t[n + e];
          return i;
        };
      },
      916: (t, e, r) => {
        var n = r(909);
        t.exports = function (t, e) {
          var r;
          return (
            n(t, function (t, n, o) {
              return !(r = e(t, n, o));
            }),
            !!r
          );
        };
      },
      3937: (t) => {
        t.exports = function (t, e) {
          var r = t.length;
          for (t.sort(e); r--; ) t[r] = t[r].value;
          return t;
        };
      },
      8096: (t) => {
        t.exports = function (t, e) {
          for (var r = -1, n = Array(t); ++r < t; ) n[r] = e(r);
          return n;
        };
      },
      7556: (t, e, r) => {
        var n = r(1873),
          o = r(4932),
          i = r(6449),
          a = r(4394),
          c = n ? n.prototype : void 0,
          u = c ? c.toString : void 0;
        t.exports = function t(e) {
          if ("string" == typeof e) return e;
          if (i(e)) return o(e, t) + "";
          if (a(e)) return u ? u.call(e) : "";
          var r = e + "";
          return "0" == r && 1 / e == -1 / 0 ? "-0" : r;
        };
      },
      4128: (t, e, r) => {
        var n = r(1800),
          o = /^\s+/;
        t.exports = function (t) {
          return t ? t.slice(0, n(t) + 1).replace(o, "") : t;
        };
      },
      7301: (t) => {
        t.exports = function (t) {
          return function (e) {
            return t(e);
          };
        };
      },
      5765: (t, e, r) => {
        var n = r(8859),
          o = r(5325),
          i = r(9905),
          a = r(9219),
          c = r(4517),
          u = r(4247);
        t.exports = function (t, e, r) {
          var l = -1,
            s = o,
            f = t.length,
            p = !0,
            h = [],
            d = h;
          if (r) (p = !1), (s = i);
          else if (f >= 200) {
            var y = e ? null : c(t);
            if (y) return u(y);
            (p = !1), (s = a), (d = new n());
          } else d = e ? [] : h;
          t: for (; ++l < f; ) {
            var v = t[l],
              m = e ? e(v) : v;
            if (((v = r || 0 !== v ? v : 0), p && m == m)) {
              for (var b = d.length; b--; ) if (d[b] === m) continue t;
              e && d.push(m), h.push(v);
            } else s(d, m, r) || (d !== h && d.push(m), h.push(v));
          }
          return h;
        };
      },
      9219: (t) => {
        t.exports = function (t, e) {
          return t.has(e);
        };
      },
      1769: (t, e, r) => {
        var n = r(6449),
          o = r(8586),
          i = r(1802),
          a = r(3222);
        t.exports = function (t, e) {
          return n(t) ? t : o(t, e) ? [t] : i(a(t));
        };
      },
      8754: (t, e, r) => {
        var n = r(5160);
        t.exports = function (t, e, r) {
          var o = t.length;
          return (r = void 0 === r ? o : r), !e && r >= o ? t : n(t, e, r);
        };
      },
      3730: (t, e, r) => {
        var n = r(4394);
        t.exports = function (t, e) {
          if (t !== e) {
            var r = void 0 !== t,
              o = null === t,
              i = t == t,
              a = n(t),
              c = void 0 !== e,
              u = null === e,
              l = e == e,
              s = n(e);
            if (
              (!u && !s && !a && t > e) ||
              (a && c && l && !u && !s) ||
              (o && c && l) ||
              (!r && l) ||
              !i
            )
              return 1;
            if (
              (!o && !a && !s && t < e) ||
              (s && r && i && !o && !a) ||
              (u && r && i) ||
              (!c && i) ||
              !l
            )
              return -1;
          }
          return 0;
        };
      },
      3714: (t, e, r) => {
        var n = r(3730);
        t.exports = function (t, e, r) {
          for (
            var o = -1,
              i = t.criteria,
              a = e.criteria,
              c = i.length,
              u = r.length;
            ++o < c;

          ) {
            var l = n(i[o], a[o]);
            if (l) return o >= u ? l : l * ("desc" == r[o] ? -1 : 1);
          }
          return t.index - e.index;
        };
      },
      5481: (t, e, r) => {
        var n = r(9325)["__core-js_shared__"];
        t.exports = n;
      },
      8329: (t, e, r) => {
        var n = r(4894);
        t.exports = function (t, e) {
          return function (r, o) {
            if (null == r) return r;
            if (!n(r)) return t(r, o);
            for (
              var i = r.length, a = e ? i : -1, c = Object(r);
              (e ? a-- : ++a < i) && !1 !== o(c[a], a, c);

            );
            return r;
          };
        };
      },
      3221: (t) => {
        t.exports = function (t) {
          return function (e, r, n) {
            for (var o = -1, i = Object(e), a = n(e), c = a.length; c--; ) {
              var u = a[t ? c : ++o];
              if (!1 === r(i[u], u, i)) break;
            }
            return e;
          };
        };
      },
      2507: (t, e, r) => {
        var n = r(8754),
          o = r(9698),
          i = r(3912),
          a = r(3222);
        t.exports = function (t) {
          return function (e) {
            e = a(e);
            var r = o(e) ? i(e) : void 0,
              c = r ? r[0] : e.charAt(0),
              u = r ? n(r, 1).join("") : e.slice(1);
            return c[t]() + u;
          };
        };
      },
      2006: (t, e, r) => {
        var n = r(5389),
          o = r(4894),
          i = r(5950);
        t.exports = function (t) {
          return function (e, r, a) {
            var c = Object(e);
            if (!o(e)) {
              var u = n(r, 3);
              (e = i(e)),
                (r = function (t) {
                  return u(c[t], t, c);
                });
            }
            var l = t(e, r, a);
            return l > -1 ? c[u ? e[l] : l] : void 0;
          };
        };
      },
      5508: (t, e, r) => {
        var n = r(6151),
          o = r(6800),
          i = r(7400);
        t.exports = function (t) {
          return function (e, r, a) {
            return (
              a && "number" != typeof a && o(e, r, a) && (r = a = void 0),
              (e = i(e)),
              void 0 === r ? ((r = e), (e = 0)) : (r = i(r)),
              (a = void 0 === a ? (e < r ? 1 : -1) : i(a)),
              n(e, r, a, t)
            );
          };
        };
      },
      4517: (t, e, r) => {
        var n = r(6545),
          o = r(3950),
          i = r(4247),
          a =
            n && 1 / i(new n([, -0]))[1] == 1 / 0
              ? function (t) {
                  return new n(t);
                }
              : o;
        t.exports = a;
      },
      3243: (t, e, r) => {
        var n = r(6110),
          o = (function () {
            try {
              var t = n(Object, "defineProperty");
              return t({}, "", {}), t;
            } catch (t) {}
          })();
        t.exports = o;
      },
      5911: (t, e, r) => {
        var n = r(8859),
          o = r(4248),
          i = r(9219);
        t.exports = function (t, e, r, a, c, u) {
          var l = 1 & r,
            s = t.length,
            f = e.length;
          if (s != f && !(l && f > s)) return !1;
          var p = u.get(t),
            h = u.get(e);
          if (p && h) return p == e && h == t;
          var d = -1,
            y = !0,
            v = 2 & r ? new n() : void 0;
          for (u.set(t, e), u.set(e, t); ++d < s; ) {
            var m = t[d],
              b = e[d];
            if (a) var g = l ? a(b, m, d, e, t, u) : a(m, b, d, t, e, u);
            if (void 0 !== g) {
              if (g) continue;
              y = !1;
              break;
            }
            if (v) {
              if (
                !o(e, function (t, e) {
                  if (!i(v, e) && (m === t || c(m, t, r, a, u)))
                    return v.push(e);
                })
              ) {
                y = !1;
                break;
              }
            } else if (m !== b && !c(m, b, r, a, u)) {
              y = !1;
              break;
            }
          }
          return u.delete(t), u.delete(e), y;
        };
      },
      1986: (t, e, r) => {
        var n = r(1873),
          o = r(7828),
          i = r(5288),
          a = r(5911),
          c = r(317),
          u = r(4247),
          l = n ? n.prototype : void 0,
          s = l ? l.valueOf : void 0;
        t.exports = function (t, e, r, n, l, f, p) {
          switch (r) {
            case "[object DataView]":
              if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
                return !1;
              (t = t.buffer), (e = e.buffer);
            case "[object ArrayBuffer]":
              return !(t.byteLength != e.byteLength || !f(new o(t), new o(e)));
            case "[object Boolean]":
            case "[object Date]":
            case "[object Number]":
              return i(+t, +e);
            case "[object Error]":
              return t.name == e.name && t.message == e.message;
            case "[object RegExp]":
            case "[object String]":
              return t == e + "";
            case "[object Map]":
              var h = c;
            case "[object Set]":
              var d = 1 & n;
              if ((h || (h = u), t.size != e.size && !d)) return !1;
              var y = p.get(t);
              if (y) return y == e;
              (n |= 2), p.set(t, e);
              var v = a(h(t), h(e), n, l, f, p);
              return p.delete(t), v;
            case "[object Symbol]":
              if (s) return s.call(t) == s.call(e);
          }
          return !1;
        };
      },
      689: (t, e, r) => {
        var n = r(2),
          o = Object.prototype.hasOwnProperty;
        t.exports = function (t, e, r, i, a, c) {
          var u = 1 & r,
            l = n(t),
            s = l.length;
          if (s != n(e).length && !u) return !1;
          for (var f = s; f--; ) {
            var p = l[f];
            if (!(u ? p in e : o.call(e, p))) return !1;
          }
          var h = c.get(t),
            d = c.get(e);
          if (h && d) return h == e && d == t;
          var y = !0;
          c.set(t, e), c.set(e, t);
          for (var v = u; ++f < s; ) {
            var m = t[(p = l[f])],
              b = e[p];
            if (i) var g = u ? i(b, m, p, e, t, c) : i(m, b, p, t, e, c);
            if (!(void 0 === g ? m === b || a(m, b, r, i, c) : g)) {
              y = !1;
              break;
            }
            v || (v = "constructor" == p);
          }
          if (y && !v) {
            var x = t.constructor,
              w = e.constructor;
            x == w ||
              !("constructor" in t) ||
              !("constructor" in e) ||
              ("function" == typeof x &&
                x instanceof x &&
                "function" == typeof w &&
                w instanceof w) ||
              (y = !1);
          }
          return c.delete(t), c.delete(e), y;
        };
      },
      4840: (t, e, r) => {
        var n = "object" == typeof r.g && r.g && r.g.Object === Object && r.g;
        t.exports = n;
      },
      2: (t, e, r) => {
        var n = r(4580),
          o = r(4664),
          i = r(5950);
        t.exports = function (t) {
          return n(t, i, o);
        };
      },
      2651: (t, e, r) => {
        var n = r(4218);
        t.exports = function (t, e) {
          var r = t.__data__;
          return n(e) ? r["string" == typeof e ? "string" : "hash"] : r.map;
        };
      },
      776: (t, e, r) => {
        var n = r(756),
          o = r(5950);
        t.exports = function (t) {
          for (var e = o(t), r = e.length; r--; ) {
            var i = e[r],
              a = t[i];
            e[r] = [i, a, n(a)];
          }
          return e;
        };
      },
      6110: (t, e, r) => {
        var n = r(5083),
          o = r(392);
        t.exports = function (t, e) {
          var r = o(t, e);
          return n(r) ? r : void 0;
        };
      },
      8879: (t, e, r) => {
        var n = r(4335)(Object.getPrototypeOf, Object);
        t.exports = n;
      },
      659: (t, e, r) => {
        var n = r(1873),
          o = Object.prototype,
          i = o.hasOwnProperty,
          a = o.toString,
          c = n ? n.toStringTag : void 0;
        t.exports = function (t) {
          var e = i.call(t, c),
            r = t[c];
          try {
            t[c] = void 0;
            var n = !0;
          } catch (t) {}
          var o = a.call(t);
          return n && (e ? (t[c] = r) : delete t[c]), o;
        };
      },
      4664: (t, e, r) => {
        var n = r(9770),
          o = r(3345),
          i = Object.prototype.propertyIsEnumerable,
          a = Object.getOwnPropertySymbols,
          c = a
            ? function (t) {
                return null == t
                  ? []
                  : ((t = Object(t)),
                    n(a(t), function (e) {
                      return i.call(t, e);
                    }));
              }
            : o;
        t.exports = c;
      },
      5861: (t, e, r) => {
        var n = r(5580),
          o = r(8223),
          i = r(2804),
          a = r(6545),
          c = r(8303),
          u = r(2552),
          l = r(7473),
          s = "[object Map]",
          f = "[object Promise]",
          p = "[object Set]",
          h = "[object WeakMap]",
          d = "[object DataView]",
          y = l(n),
          v = l(o),
          m = l(i),
          b = l(a),
          g = l(c),
          x = u;
        ((n && x(new n(new ArrayBuffer(1))) != d) ||
          (o && x(new o()) != s) ||
          (i && x(i.resolve()) != f) ||
          (a && x(new a()) != p) ||
          (c && x(new c()) != h)) &&
          (x = function (t) {
            var e = u(t),
              r = "[object Object]" == e ? t.constructor : void 0,
              n = r ? l(r) : "";
            if (n)
              switch (n) {
                case y:
                  return d;
                case v:
                  return s;
                case m:
                  return f;
                case b:
                  return p;
                case g:
                  return h;
              }
            return e;
          }),
          (t.exports = x);
      },
      392: (t) => {
        t.exports = function (t, e) {
          return null == t ? void 0 : t[e];
        };
      },
      9326: (t, e, r) => {
        var n = r(1769),
          o = r(2428),
          i = r(6449),
          a = r(361),
          c = r(294),
          u = r(7797);
        t.exports = function (t, e, r) {
          for (var l = -1, s = (e = n(e, t)).length, f = !1; ++l < s; ) {
            var p = u(e[l]);
            if (!(f = null != t && r(t, p))) break;
            t = t[p];
          }
          return f || ++l != s
            ? f
            : !!(s = null == t ? 0 : t.length) &&
                c(s) &&
                a(p, s) &&
                (i(t) || o(t));
        };
      },
      9698: (t) => {
        var e = RegExp(
          "[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"
        );
        t.exports = function (t) {
          return e.test(t);
        };
      },
      2032: (t, e, r) => {
        var n = r(1042);
        t.exports = function () {
          (this.__data__ = n ? n(null) : {}), (this.size = 0);
        };
      },
      3862: (t) => {
        t.exports = function (t) {
          var e = this.has(t) && delete this.__data__[t];
          return (this.size -= e ? 1 : 0), e;
        };
      },
      6721: (t, e, r) => {
        var n = r(1042),
          o = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
          var e = this.__data__;
          if (n) {
            var r = e[t];
            return "__lodash_hash_undefined__" === r ? void 0 : r;
          }
          return o.call(e, t) ? e[t] : void 0;
        };
      },
      2749: (t, e, r) => {
        var n = r(1042),
          o = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
          var e = this.__data__;
          return n ? void 0 !== e[t] : o.call(e, t);
        };
      },
      5749: (t, e, r) => {
        var n = r(1042);
        t.exports = function (t, e) {
          var r = this.__data__;
          return (
            (this.size += this.has(t) ? 0 : 1),
            (r[t] = n && void 0 === e ? "__lodash_hash_undefined__" : e),
            this
          );
        };
      },
      5891: (t, e, r) => {
        var n = r(1873),
          o = r(2428),
          i = r(6449),
          a = n ? n.isConcatSpreadable : void 0;
        t.exports = function (t) {
          return i(t) || o(t) || !!(a && t && t[a]);
        };
      },
      361: (t) => {
        var e = /^(?:0|[1-9]\d*)$/;
        t.exports = function (t, r) {
          var n = typeof t;
          return (
            !!(r = null == r ? 9007199254740991 : r) &&
            ("number" == n || ("symbol" != n && e.test(t))) &&
            t > -1 &&
            t % 1 == 0 &&
            t < r
          );
        };
      },
      6800: (t, e, r) => {
        var n = r(5288),
          o = r(4894),
          i = r(361),
          a = r(3805);
        t.exports = function (t, e, r) {
          if (!a(r)) return !1;
          var c = typeof e;
          return (
            !!("number" == c
              ? o(r) && i(e, r.length)
              : "string" == c && e in r) && n(r[e], t)
          );
        };
      },
      8586: (t, e, r) => {
        var n = r(6449),
          o = r(4394),
          i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          a = /^\w*$/;
        t.exports = function (t, e) {
          if (n(t)) return !1;
          var r = typeof t;
          return (
            !(
              "number" != r &&
              "symbol" != r &&
              "boolean" != r &&
              null != t &&
              !o(t)
            ) ||
            a.test(t) ||
            !i.test(t) ||
            (null != e && t in Object(e))
          );
        };
      },
      4218: (t) => {
        t.exports = function (t) {
          var e = typeof t;
          return "string" == e ||
            "number" == e ||
            "symbol" == e ||
            "boolean" == e
            ? "__proto__" !== t
            : null === t;
        };
      },
      7296: (t, e, r) => {
        var n,
          o = r(5481),
          i = (n = /[^.]+$/.exec((o && o.keys && o.keys.IE_PROTO) || ""))
            ? "Symbol(src)_1." + n
            : "";
        t.exports = function (t) {
          return !!i && i in t;
        };
      },
      5527: (t) => {
        var e = Object.prototype;
        t.exports = function (t) {
          var r = t && t.constructor;
          return t === (("function" == typeof r && r.prototype) || e);
        };
      },
      756: (t, e, r) => {
        var n = r(3805);
        t.exports = function (t) {
          return t == t && !n(t);
        };
      },
      3702: (t) => {
        t.exports = function () {
          (this.__data__ = []), (this.size = 0);
        };
      },
      80: (t, e, r) => {
        var n = r(6025),
          o = Array.prototype.splice;
        t.exports = function (t) {
          var e = this.__data__,
            r = n(e, t);
          return !(
            r < 0 ||
            (r == e.length - 1 ? e.pop() : o.call(e, r, 1), --this.size, 0)
          );
        };
      },
      4739: (t, e, r) => {
        var n = r(6025);
        t.exports = function (t) {
          var e = this.__data__,
            r = n(e, t);
          return r < 0 ? void 0 : e[r][1];
        };
      },
      8655: (t, e, r) => {
        var n = r(6025);
        t.exports = function (t) {
          return n(this.__data__, t) > -1;
        };
      },
      1175: (t, e, r) => {
        var n = r(6025);
        t.exports = function (t, e) {
          var r = this.__data__,
            o = n(r, t);
          return o < 0 ? (++this.size, r.push([t, e])) : (r[o][1] = e), this;
        };
      },
      3040: (t, e, r) => {
        var n = r(1549),
          o = r(79),
          i = r(8223);
        t.exports = function () {
          (this.size = 0),
            (this.__data__ = {
              hash: new n(),
              map: new (i || o)(),
              string: new n(),
            });
        };
      },
      7670: (t, e, r) => {
        var n = r(2651);
        t.exports = function (t) {
          var e = n(this, t).delete(t);
          return (this.size -= e ? 1 : 0), e;
        };
      },
      289: (t, e, r) => {
        var n = r(2651);
        t.exports = function (t) {
          return n(this, t).get(t);
        };
      },
      4509: (t, e, r) => {
        var n = r(2651);
        t.exports = function (t) {
          return n(this, t).has(t);
        };
      },
      2949: (t, e, r) => {
        var n = r(2651);
        t.exports = function (t, e) {
          var r = n(this, t),
            o = r.size;
          return r.set(t, e), (this.size += r.size == o ? 0 : 1), this;
        };
      },
      317: (t) => {
        t.exports = function (t) {
          var e = -1,
            r = Array(t.size);
          return (
            t.forEach(function (t, n) {
              r[++e] = [n, t];
            }),
            r
          );
        };
      },
      7197: (t) => {
        t.exports = function (t, e) {
          return function (r) {
            return null != r && r[t] === e && (void 0 !== e || t in Object(r));
          };
        };
      },
      2224: (t, e, r) => {
        var n = r(104);
        t.exports = function (t) {
          var e = n(t, function (t) {
              return 500 === r.size && r.clear(), t;
            }),
            r = e.cache;
          return e;
        };
      },
      1042: (t, e, r) => {
        var n = r(6110)(Object, "create");
        t.exports = n;
      },
      3650: (t, e, r) => {
        var n = r(4335)(Object.keys, Object);
        t.exports = n;
      },
      6009: (t, e, r) => {
        t = r.nmd(t);
        var n = r(4840),
          o = e && !e.nodeType && e,
          i = o && t && !t.nodeType && t,
          a = i && i.exports === o && n.process,
          c = (function () {
            try {
              return (
                (i && i.require && i.require("util").types) ||
                (a && a.binding && a.binding("util"))
              );
            } catch (t) {}
          })();
        t.exports = c;
      },
      9350: (t) => {
        var e = Object.prototype.toString;
        t.exports = function (t) {
          return e.call(t);
        };
      },
      4335: (t) => {
        t.exports = function (t, e) {
          return function (r) {
            return t(e(r));
          };
        };
      },
      6757: (t, e, r) => {
        var n = r(1033),
          o = Math.max;
        t.exports = function (t, e, r) {
          return (
            (e = o(void 0 === e ? t.length - 1 : e, 0)),
            function () {
              for (
                var i = arguments, a = -1, c = o(i.length - e, 0), u = Array(c);
                ++a < c;

              )
                u[a] = i[e + a];
              a = -1;
              for (var l = Array(e + 1); ++a < e; ) l[a] = i[a];
              return (l[e] = r(u)), n(t, this, l);
            }
          );
        };
      },
      9325: (t, e, r) => {
        var n = r(4840),
          o = "object" == typeof self && self && self.Object === Object && self,
          i = n || o || Function("return this")();
        t.exports = i;
      },
      1380: (t) => {
        t.exports = function (t) {
          return this.__data__.set(t, "__lodash_hash_undefined__"), this;
        };
      },
      1459: (t) => {
        t.exports = function (t) {
          return this.__data__.has(t);
        };
      },
      4247: (t) => {
        t.exports = function (t) {
          var e = -1,
            r = Array(t.size);
          return (
            t.forEach(function (t) {
              r[++e] = t;
            }),
            r
          );
        };
      },
      2865: (t, e, r) => {
        var n = r(9570),
          o = r(1811)(n);
        t.exports = o;
      },
      1811: (t) => {
        var e = Date.now;
        t.exports = function (t) {
          var r = 0,
            n = 0;
          return function () {
            var o = e(),
              i = 16 - (o - n);
            if (((n = o), i > 0)) {
              if (++r >= 800) return arguments[0];
            } else r = 0;
            return t.apply(void 0, arguments);
          };
        };
      },
      1420: (t, e, r) => {
        var n = r(79);
        t.exports = function () {
          (this.__data__ = new n()), (this.size = 0);
        };
      },
      938: (t) => {
        t.exports = function (t) {
          var e = this.__data__,
            r = e.delete(t);
          return (this.size = e.size), r;
        };
      },
      3605: (t) => {
        t.exports = function (t) {
          return this.__data__.get(t);
        };
      },
      9817: (t) => {
        t.exports = function (t) {
          return this.__data__.has(t);
        };
      },
      945: (t, e, r) => {
        var n = r(79),
          o = r(8223),
          i = r(3661);
        t.exports = function (t, e) {
          var r = this.__data__;
          if (r instanceof n) {
            var a = r.__data__;
            if (!o || a.length < 199)
              return a.push([t, e]), (this.size = ++r.size), this;
            r = this.__data__ = new i(a);
          }
          return r.set(t, e), (this.size = r.size), this;
        };
      },
      6959: (t) => {
        t.exports = function (t, e, r) {
          for (var n = r - 1, o = t.length; ++n < o; ) if (t[n] === e) return n;
          return -1;
        };
      },
      3912: (t, e, r) => {
        var n = r(1074),
          o = r(9698),
          i = r(2054);
        t.exports = function (t) {
          return o(t) ? i(t) : n(t);
        };
      },
      1802: (t, e, r) => {
        var n = r(2224),
          o =
            /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          i = /\\(\\)?/g,
          a = n(function (t) {
            var e = [];
            return (
              46 === t.charCodeAt(0) && e.push(""),
              t.replace(o, function (t, r, n, o) {
                e.push(n ? o.replace(i, "$1") : r || t);
              }),
              e
            );
          });
        t.exports = a;
      },
      7797: (t, e, r) => {
        var n = r(4394);
        t.exports = function (t) {
          if ("string" == typeof t || n(t)) return t;
          var e = t + "";
          return "0" == e && 1 / t == -1 / 0 ? "-0" : e;
        };
      },
      7473: (t) => {
        var e = Function.prototype.toString;
        t.exports = function (t) {
          if (null != t) {
            try {
              return e.call(t);
            } catch (t) {}
            try {
              return t + "";
            } catch (t) {}
          }
          return "";
        };
      },
      1800: (t) => {
        var e = /\s/;
        t.exports = function (t) {
          for (var r = t.length; r-- && e.test(t.charAt(r)); );
          return r;
        };
      },
      2054: (t) => {
        var e = "\\ud800-\\udfff",
          r = "[" + e + "]",
          n = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
          o = "\\ud83c[\\udffb-\\udfff]",
          i = "[^" + e + "]",
          a = "(?:\\ud83c[\\udde6-\\uddff]){2}",
          c = "[\\ud800-\\udbff][\\udc00-\\udfff]",
          u = "(?:" + n + "|" + o + ")?",
          l = "[\\ufe0e\\ufe0f]?",
          s =
            l + u + "(?:\\u200d(?:" + [i, a, c].join("|") + ")" + l + u + ")*",
          f = "(?:" + [i + n + "?", n, a, c, r].join("|") + ")",
          p = RegExp(o + "(?=" + o + ")|" + f + s, "g");
        t.exports = function (t) {
          return t.match(p) || [];
        };
      },
      7334: (t) => {
        t.exports = function (t) {
          return function () {
            return t;
          };
        };
      },
      8221: (t, e, r) => {
        var n = r(3805),
          o = r(124),
          i = r(9374),
          a = Math.max,
          c = Math.min;
        t.exports = function (t, e, r) {
          var u,
            l,
            s,
            f,
            p,
            h,
            d = 0,
            y = !1,
            v = !1,
            m = !0;
          if ("function" != typeof t)
            throw new TypeError("Expected a function");
          function b(e) {
            var r = u,
              n = l;
            return (u = l = void 0), (d = e), (f = t.apply(n, r));
          }
          function g(t) {
            var r = t - h;
            return void 0 === h || r >= e || r < 0 || (v && t - d >= s);
          }
          function x() {
            var t = o();
            if (g(t)) return w(t);
            p = setTimeout(
              x,
              (function (t) {
                var r = e - (t - h);
                return v ? c(r, s - (t - d)) : r;
              })(t)
            );
          }
          function w(t) {
            return (p = void 0), m && u ? b(t) : ((u = l = void 0), f);
          }
          function O() {
            var t = o(),
              r = g(t);
            if (((u = arguments), (l = this), (h = t), r)) {
              if (void 0 === p)
                return (function (t) {
                  return (d = t), (p = setTimeout(x, e)), y ? b(t) : f;
                })(h);
              if (v) return clearTimeout(p), (p = setTimeout(x, e)), b(h);
            }
            return void 0 === p && (p = setTimeout(x, e)), f;
          }
          return (
            (e = i(e) || 0),
            n(r) &&
              ((y = !!r.leading),
              (s = (v = "maxWait" in r) ? a(i(r.maxWait) || 0, e) : s),
              (m = "trailing" in r ? !!r.trailing : m)),
            (O.cancel = function () {
              void 0 !== p && clearTimeout(p),
                (d = 0),
                (u = h = l = p = void 0);
            }),
            (O.flush = function () {
              return void 0 === p ? f : w(o());
            }),
            O
          );
        };
      },
      5288: (t) => {
        t.exports = function (t, e) {
          return t === e || (t != t && e != e);
        };
      },
      9747: (t, e, r) => {
        var n = r(7277),
          o = r(3777),
          i = r(5389),
          a = r(6449),
          c = r(6800);
        t.exports = function (t, e, r) {
          var u = a(t) ? n : o;
          return r && c(t, e, r) && (e = void 0), u(t, i(e, 3));
        };
      },
      7309: (t, e, r) => {
        var n = r(2006)(r(4713));
        t.exports = n;
      },
      4713: (t, e, r) => {
        var n = r(2523),
          o = r(5389),
          i = r(1489),
          a = Math.max;
        t.exports = function (t, e, r) {
          var c = null == t ? 0 : t.length;
          if (!c) return -1;
          var u = null == r ? 0 : i(r);
          return u < 0 && (u = a(c + u, 0)), n(t, o(e, 3), u);
        };
      },
      7307: (t, e, r) => {
        var n = r(3120),
          o = r(5378);
        t.exports = function (t, e) {
          return n(o(t, e), 1);
        };
      },
      8156: (t, e, r) => {
        var n = r(7422);
        t.exports = function (t, e, r) {
          var o = null == t ? void 0 : n(t, e);
          return void 0 === o ? r : o;
        };
      },
      631: (t, e, r) => {
        var n = r(8077),
          o = r(9326);
        t.exports = function (t, e) {
          return null != t && o(t, e, n);
        };
      },
      3488: (t) => {
        t.exports = function (t) {
          return t;
        };
      },
      2428: (t, e, r) => {
        var n = r(7534),
          o = r(346),
          i = Object.prototype,
          a = i.hasOwnProperty,
          c = i.propertyIsEnumerable,
          u = n(
            (function () {
              return arguments;
            })()
          )
            ? n
            : function (t) {
                return o(t) && a.call(t, "callee") && !c.call(t, "callee");
              };
        t.exports = u;
      },
      6449: (t) => {
        var e = Array.isArray;
        t.exports = e;
      },
      4894: (t, e, r) => {
        var n = r(1882),
          o = r(294);
        t.exports = function (t) {
          return null != t && o(t.length) && !n(t);
        };
      },
      3812: (t, e, r) => {
        var n = r(2552),
          o = r(346);
        t.exports = function (t) {
          return !0 === t || !1 === t || (o(t) && "[object Boolean]" == n(t));
        };
      },
      3656: (t, e, r) => {
        t = r.nmd(t);
        var n = r(9325),
          o = r(9935),
          i = e && !e.nodeType && e,
          a = i && t && !t.nodeType && t,
          c = a && a.exports === i ? n.Buffer : void 0,
          u = (c ? c.isBuffer : void 0) || o;
        t.exports = u;
      },
      2404: (t, e, r) => {
        var n = r(270);
        t.exports = function (t, e) {
          return n(t, e);
        };
      },
      1882: (t, e, r) => {
        var n = r(2552),
          o = r(3805);
        t.exports = function (t) {
          if (!o(t)) return !1;
          var e = n(t);
          return (
            "[object Function]" == e ||
            "[object GeneratorFunction]" == e ||
            "[object AsyncFunction]" == e ||
            "[object Proxy]" == e
          );
        };
      },
      294: (t) => {
        t.exports = function (t) {
          return (
            "number" == typeof t &&
            t > -1 &&
            t % 1 == 0 &&
            t <= 9007199254740991
          );
        };
      },
      1741: (t, e, r) => {
        var n = r(8023);
        t.exports = function (t) {
          return n(t) && t != +t;
        };
      },
      9843: (t) => {
        t.exports = function (t) {
          return null == t;
        };
      },
      8023: (t, e, r) => {
        var n = r(2552),
          o = r(346);
        t.exports = function (t) {
          return "number" == typeof t || (o(t) && "[object Number]" == n(t));
        };
      },
      3805: (t) => {
        t.exports = function (t) {
          var e = typeof t;
          return null != t && ("object" == e || "function" == e);
        };
      },
      346: (t) => {
        t.exports = function (t) {
          return null != t && "object" == typeof t;
        };
      },
      1331: (t, e, r) => {
        var n = r(2552),
          o = r(8879),
          i = r(346),
          a = Function.prototype,
          c = Object.prototype,
          u = a.toString,
          l = c.hasOwnProperty,
          s = u.call(Object);
        t.exports = function (t) {
          if (!i(t) || "[object Object]" != n(t)) return !1;
          var e = o(t);
          if (null === e) return !0;
          var r = l.call(e, "constructor") && e.constructor;
          return "function" == typeof r && r instanceof r && u.call(r) == s;
        };
      },
      5015: (t, e, r) => {
        var n = r(2552),
          o = r(6449),
          i = r(346);
        t.exports = function (t) {
          return (
            "string" == typeof t || (!o(t) && i(t) && "[object String]" == n(t))
          );
        };
      },
      4394: (t, e, r) => {
        var n = r(2552),
          o = r(346);
        t.exports = function (t) {
          return "symbol" == typeof t || (o(t) && "[object Symbol]" == n(t));
        };
      },
      7167: (t, e, r) => {
        var n = r(4901),
          o = r(7301),
          i = r(6009),
          a = i && i.isTypedArray,
          c = a ? o(a) : n;
        t.exports = c;
      },
      5950: (t, e, r) => {
        var n = r(695),
          o = r(8984),
          i = r(4894);
        t.exports = function (t) {
          return i(t) ? n(t) : o(t);
        };
      },
      8090: (t) => {
        t.exports = function (t) {
          var e = null == t ? 0 : t.length;
          return e ? t[e - 1] : void 0;
        };
      },
      5378: (t, e, r) => {
        var n = r(4932),
          o = r(5389),
          i = r(5128),
          a = r(6449);
        t.exports = function (t, e) {
          return (a(t) ? n : i)(t, o(e, 3));
        };
      },
      3916: (t, e, r) => {
        var n = r(3360),
          o = r(641),
          i = r(5389);
        t.exports = function (t, e) {
          var r = {};
          return (
            (e = i(e, 3)),
            o(t, function (t, o, i) {
              n(r, o, e(t, o, i));
            }),
            r
          );
        };
      },
      4506: (t, e, r) => {
        var n = r(3599),
          o = r(3335),
          i = r(3488);
        t.exports = function (t) {
          return t && t.length ? n(t, i, o) : void 0;
        };
      },
      104: (t, e, r) => {
        var n = r(3661);
        function o(t, e) {
          if ("function" != typeof t || (null != e && "function" != typeof e))
            throw new TypeError("Expected a function");
          var r = function () {
            var n = arguments,
              o = e ? e.apply(this, n) : n[0],
              i = r.cache;
            if (i.has(o)) return i.get(o);
            var a = t.apply(this, n);
            return (r.cache = i.set(o, a) || i), a;
          };
          return (r.cache = new (o.Cache || n)()), r;
        }
        (o.Cache = n), (t.exports = o);
      },
      1684: (t, e, r) => {
        var n = r(3599),
          o = r(6176),
          i = r(3488);
        t.exports = function (t) {
          return t && t.length ? n(t, i, o) : void 0;
        };
      },
      3950: (t) => {
        t.exports = function () {};
      },
      124: (t, e, r) => {
        var n = r(9325);
        t.exports = function () {
          return n.Date.now();
        };
      },
      583: (t, e, r) => {
        var n = r(7237),
          o = r(7255),
          i = r(8586),
          a = r(7797);
        t.exports = function (t) {
          return i(t) ? n(a(t)) : o(t);
        };
      },
      3181: (t, e, r) => {
        var n = r(5508)();
        t.exports = n;
      },
      2426: (t, e, r) => {
        var n = r(4248),
          o = r(5389),
          i = r(916),
          a = r(6449),
          c = r(6800);
        t.exports = function (t, e, r) {
          var u = a(t) ? n : i;
          return r && c(t, e, r) && (e = void 0), u(t, o(e, 3));
        };
      },
      3031: (t, e, r) => {
        var n = r(3120),
          o = r(6155),
          i = r(9302),
          a = r(6800),
          c = i(function (t, e) {
            if (null == t) return [];
            var r = e.length;
            return (
              r > 1 && a(t, e[0], e[1])
                ? (e = [])
                : r > 2 && a(e[0], e[1], e[2]) && (e = [e[0]]),
              o(t, n(e, 1), [])
            );
          });
        t.exports = c;
      },
      3345: (t) => {
        t.exports = function () {
          return [];
        };
      },
      9935: (t) => {
        t.exports = function () {
          return !1;
        };
      },
      7350: (t, e, r) => {
        var n = r(8221),
          o = r(3805);
        t.exports = function (t, e, r) {
          var i = !0,
            a = !0;
          if ("function" != typeof t)
            throw new TypeError("Expected a function");
          return (
            o(r) &&
              ((i = "leading" in r ? !!r.leading : i),
              (a = "trailing" in r ? !!r.trailing : a)),
            n(t, e, { leading: i, maxWait: e, trailing: a })
          );
        };
      },
      7400: (t, e, r) => {
        var n = r(9374),
          o = 1 / 0;
        t.exports = function (t) {
          return t
            ? (t = n(t)) === o || t === -1 / 0
              ? 17976931348623157e292 * (t < 0 ? -1 : 1)
              : t == t
              ? t
              : 0
            : 0 === t
            ? t
            : 0;
        };
      },
      1489: (t, e, r) => {
        var n = r(7400);
        t.exports = function (t) {
          var e = n(t),
            r = e % 1;
          return e == e ? (r ? e - r : e) : 0;
        };
      },
      9374: (t, e, r) => {
        var n = r(4128),
          o = r(3805),
          i = r(4394),
          a = /^[-+]0x[0-9a-f]+$/i,
          c = /^0b[01]+$/i,
          u = /^0o[0-7]+$/i,
          l = parseInt;
        t.exports = function (t) {
          if ("number" == typeof t) return t;
          if (i(t)) return NaN;
          if (o(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = o(e) ? e + "" : e;
          }
          if ("string" != typeof t) return 0 === t ? t : +t;
          t = n(t);
          var r = c.test(t);
          return r || u.test(t)
            ? l(t.slice(2), r ? 2 : 8)
            : a.test(t)
            ? NaN
            : +t;
        };
      },
      3222: (t, e, r) => {
        var n = r(7556);
        t.exports = function (t) {
          return null == t ? "" : n(t);
        };
      },
      14: (t, e, r) => {
        var n = r(5389),
          o = r(5765);
        t.exports = function (t, e) {
          return t && t.length ? o(t, n(e, 2)) : [];
        };
      },
      5808: (t, e, r) => {
        var n = r(2507)("toUpperCase");
        t.exports = n;
      },
      2694: (t, e, r) => {
        "use strict";
        var n = r(6925);
        function o() {}
        function i() {}
        (i.resetWarningCache = o),
          (t.exports = function () {
            function t(t, e, r, o, i, a) {
              if (a !== n) {
                var c = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                );
                throw ((c.name = "Invariant Violation"), c);
              }
            }
            function e() {
              return t;
            }
            t.isRequired = t;
            var r = {
              array: t,
              bigint: t,
              bool: t,
              func: t,
              number: t,
              object: t,
              string: t,
              symbol: t,
              any: t,
              arrayOf: e,
              element: t,
              elementType: t,
              instanceOf: e,
              node: t,
              objectOf: e,
              oneOf: e,
              oneOfType: e,
              shape: e,
              exact: e,
              checkPropTypes: i,
              resetWarningCache: o,
            };
            return (r.PropTypes = r), r;
          });
      },
      5556: (t, e, r) => {
        t.exports = r(2694)();
      },
      6925: (t) => {
        "use strict";
        t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      },
      8867: (t, e) => {
        "use strict";
        var r = "function" == typeof Symbol && Symbol.for,
          n = r ? Symbol.for("react.element") : 60103,
          o = r ? Symbol.for("react.portal") : 60106,
          i = r ? Symbol.for("react.fragment") : 60107,
          a = r ? Symbol.for("react.strict_mode") : 60108,
          c = r ? Symbol.for("react.profiler") : 60114,
          u = r ? Symbol.for("react.provider") : 60109,
          l = r ? Symbol.for("react.context") : 60110,
          s = r ? Symbol.for("react.async_mode") : 60111,
          f = r ? Symbol.for("react.concurrent_mode") : 60111,
          p = r ? Symbol.for("react.forward_ref") : 60112,
          h = r ? Symbol.for("react.suspense") : 60113,
          d =
            (r && Symbol.for("react.suspense_list"),
            r ? Symbol.for("react.memo") : 60115),
          y = r ? Symbol.for("react.lazy") : 60116;
        r && Symbol.for("react.block"),
          r && Symbol.for("react.fundamental"),
          r && Symbol.for("react.responder"),
          r && Symbol.for("react.scope");
        function v(t) {
          if ("object" == typeof t && null !== t) {
            var e = t.$$typeof;
            switch (e) {
              case n:
                switch ((t = t.type)) {
                  case s:
                  case f:
                  case i:
                  case c:
                  case a:
                  case h:
                    return t;
                  default:
                    switch ((t = t && t.$$typeof)) {
                      case l:
                      case p:
                      case y:
                      case d:
                      case u:
                        return t;
                      default:
                        return e;
                    }
                }
              case o:
                return e;
            }
          }
        }
        (e.isElement = function (t) {
          return "object" == typeof t && null !== t && t.$$typeof === n;
        }),
          (e.isFragment = function (t) {
            return v(t) === i;
          });
      },
      2199: (t, e, r) => {
        "use strict";
        t.exports = r(8867);
      },
    },
    r = {};
  function n(t) {
    var o = r[t];
    if (void 0 !== o) return o.exports;
    var i = (r[t] = { id: t, loaded: !1, exports: {} });
    return e[t].call(i.exports, i, i.exports, n), (i.loaded = !0), i.exports;
  }
  (n.m = e),
    (t = []),
    (n.O = (e, r, o, i) => {
      if (!r) {
        var a = 1 / 0;
        for (s = 0; s < t.length; s++) {
          for (var [r, o, i] = t[s], c = !0, u = 0; u < r.length; u++)
            (!1 & i || a >= i) && Object.keys(n.O).every((t) => n.O[t](r[u]))
              ? r.splice(u--, 1)
              : ((c = !1), i < a && (a = i));
          if (c) {
            t.splice(s--, 1);
            var l = o();
            void 0 !== l && (e = l);
          }
        }
        return e;
      }
      i = i || 0;
      for (var s = t.length; s > 0 && t[s - 1][2] > i; s--) t[s] = t[s - 1];
      t[s] = [r, o, i];
    }),
    (n.n = (t) => {
      var e = t && t.__esModule ? () => t.default : () => t;
      return n.d(e, { a: e }), e;
    }),
    (n.d = (t, e) => {
      for (var r in e)
        n.o(e, r) &&
          !n.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (n.r = (t) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.nmd = (t) => ((t.paths = []), t.children || (t.children = []), t)),
    (() => {
      var t = { 792: 0, 85: 0 };
      n.O.j = (e) => 0 === t[e];
      var e = (e, r) => {
          var o,
            i,
            [a, c, u] = r,
            l = 0;
          if (a.some((e) => 0 !== t[e])) {
            for (o in c) n.o(c, o) && (n.m[o] = c[o]);
            if (u) var s = u(n);
          }
          for (e && e(r); l < a.length; l++)
            (i = a[l]), n.o(t, i) && t[i] && t[i][0](), (t[i] = 0);
          return n.O(s);
        },
        r = (globalThis.webpackChunkrm_charts_widget =
          globalThis.webpackChunkrm_charts_widget || []);
      r.forEach(e.bind(null, 0)), (r.push = e.bind(null, r.push.bind(r)));
    })();
  var o = n.O(void 0, [85], () => n(7856));
  o = n.O(o);
})();
