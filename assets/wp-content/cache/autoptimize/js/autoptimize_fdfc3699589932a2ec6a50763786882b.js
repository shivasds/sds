/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
    function(a, b, c) {
        function d(c) {
            var d = b.console;
            f[c] || (f[c] = !0, a.migrateWarnings.push(c), d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace()))
        }

        function e(b, c, e, f) {
            if (Object.defineProperty) try {
                return void Object.defineProperty(b, c, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return d(f), e
                    },
                    set: function(a) {
                        d(f), e = a
                    }
                })
            } catch (g) {}
            a._definePropertyBroken = !0, b[c] = e
        }
        a.migrateVersion = "1.4.1";
        var f = {};
        a.migrateWarnings = [], b.console && b.console.log && b.console.log("JQMIGRATE: Migrate is installed" + (a.migrateMute ? "" : " with logging active") + ", version " + a.migrateVersion), a.migrateTrace === c && (a.migrateTrace = !0), a.migrateReset = function() {
            f = {}, a.migrateWarnings.length = 0
        }, "BackCompat" === document.compatMode && d("jQuery is not compatible with Quirks Mode");
        var g = a("<input/>", {
                size: 1
            }).attr("size") && a.attrFn,
            h = a.attr,
            i = a.attrHooks.value && a.attrHooks.value.get || function() {
                return null
            },
            j = a.attrHooks.value && a.attrHooks.value.set || function() {
                return c
            },
            k = /^(?:input|button)$/i,
            l = /^[238]$/,
            m = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            n = /^(?:checked|selected)$/i;
        e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"), a.attr = function(b, e, f, i) {
            var j = e.toLowerCase(),
                o = b && b.nodeType;
            return i && (h.length < 4 && d("jQuery.fn.attr( props, pass ) is deprecated"), b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e]))) ? a(b)[e](f) : ("type" === e && f !== c && k.test(b.nodeName) && b.parentNode && d("Can't change the 'type' of an input or button in IE 6/7/8"), !a.attrHooks[j] && m.test(j) && (a.attrHooks[j] = {
                get: function(b, d) {
                    var e, f = a.prop(b, d);
                    return f === !0 || "boolean" != typeof f && (e = b.getAttributeNode(d)) && e.nodeValue !== !1 ? d.toLowerCase() : c
                },
                set: function(b, c, d) {
                    var e;
                    return c === !1 ? a.removeAttr(b, d) : (e = a.propFix[d] || d, e in b && (b[e] = !0), b.setAttribute(d, d.toLowerCase())), d
                }
            }, n.test(j) && d("jQuery.fn.attr('" + j + "') might use property instead of attribute")), h.call(a, b, e, f))
        }, a.attrHooks.value = {
            get: function(a, b) {
                var c = (a.nodeName || "").toLowerCase();
                return "button" === c ? i.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value') no longer gets properties"), b in a ? a.value : null)
            },
            set: function(a, b) {
                var c = (a.nodeName || "").toLowerCase();
                return "button" === c ? j.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value', val) no longer sets properties"), void(a.value = b))
            }
        };
        var o, p, q = a.fn.init,
            r = a.find,
            s = a.parseJSON,
            t = /^\s*</,
            u = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
            v = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
            w = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
        a.fn.init = function(b, e, f) {
            var g, h;
            return b && "string" == typeof b && !a.isPlainObject(e) && (g = w.exec(a.trim(b))) && g[0] && (t.test(b) || d("$(html) HTML strings must start with '<' character"), g[3] && d("$(html) HTML text after last tag is ignored"), "#" === g[0].charAt(0) && (d("HTML string cannot start with a '#' character"), a.error("JQMIGRATE: Invalid selector string (XSS)")), e && e.context && e.context.nodeType && (e = e.context), a.parseHTML) ? q.call(this, a.parseHTML(g[2], e && e.ownerDocument || e || document, !0), e, f) : (h = q.apply(this, arguments), b && b.selector !== c ? (h.selector = b.selector, h.context = b.context) : (h.selector = "string" == typeof b ? b : "", b && (h.context = b.nodeType ? b : e || document)), h)
        }, a.fn.init.prototype = a.fn, a.find = function(a) {
            var b = Array.prototype.slice.call(arguments);
            if ("string" == typeof a && u.test(a)) try {
                document.querySelector(a)
            } catch (c) {
                a = a.replace(v, function(a, b, c, d) {
                    return "[" + b + c + '"' + d + '"]'
                });
                try {
                    document.querySelector(a), d("Attribute selector with '#' must be quoted: " + b[0]), b[0] = a
                } catch (e) {
                    d("Attribute selector with '#' was not fixed: " + b[0])
                }
            }
            return r.apply(this, b)
        };
        var x;
        for (x in r) Object.prototype.hasOwnProperty.call(r, x) && (a.find[x] = r[x]);
        a.parseJSON = function(a) {
            return a ? s.apply(this, arguments) : (d("jQuery.parseJSON requires a valid JSON string"), null)
        }, a.uaMatch = function(a) {
            a = a.toLowerCase();
            var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
            return {
                browser: b[1] || "",
                version: b[2] || "0"
            }
        }, a.browser || (o = a.uaMatch(navigator.userAgent), p = {}, o.browser && (p[o.browser] = !0, p.version = o.version), p.chrome ? p.webkit = !0 : p.webkit && (p.safari = !0), a.browser = p), e(a, "browser", a.browser, "jQuery.browser is deprecated"), a.boxModel = a.support.boxModel = "CSS1Compat" === document.compatMode, e(a, "boxModel", a.boxModel, "jQuery.boxModel is deprecated"), e(a.support, "boxModel", a.support.boxModel, "jQuery.support.boxModel is deprecated"), a.sub = function() {
            function b(a, c) {
                return new b.fn.init(a, c)
            }
            a.extend(!0, b, this), b.superclass = this, b.fn = b.prototype = this(), b.fn.constructor = b, b.sub = this.sub, b.fn.init = function(d, e) {
                var f = a.fn.init.call(this, d, e, c);
                return f instanceof b ? f : b(f)
            }, b.fn.init.prototype = b.fn;
            var c = b(document);
            return d("jQuery.sub() is deprecated"), b
        }, a.fn.size = function() {
            return d("jQuery.fn.size() is deprecated; use the .length property"), this.length
        };
        var y = !1;
        a.swap && a.each(["height", "width", "reliableMarginRight"], function(b, c) {
            var d = a.cssHooks[c] && a.cssHooks[c].get;
            d && (a.cssHooks[c].get = function() {
                var a;
                return y = !0, a = d.apply(this, arguments), y = !1, a
            })
        }), a.swap = function(a, b, c, e) {
            var f, g, h = {};
            y || d("jQuery.swap() is undocumented and deprecated");
            for (g in b) h[g] = a.style[g], a.style[g] = b[g];
            f = c.apply(a, e || []);
            for (g in b) a.style[g] = h[g];
            return f
        }, a.ajaxSetup({
            converters: {
                "text json": a.parseJSON
            }
        });
        var z = a.fn.data;
        a.fn.data = function(b) {
            var e, f, g = this[0];
            return !g || "events" !== b || 1 !== arguments.length || (e = a.data(g, b), f = a._data(g, b), e !== c && e !== f || f === c) ? z.apply(this, arguments) : (d("Use of jQuery.fn.data('events') is deprecated"), f)
        };
        var A = /\/(java|ecma)script/i;
        a.clean || (a.clean = function(b, c, e, f) {
            c = c || document, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, d("jQuery.clean() is deprecated");
            var g, h, i, j, k = [];
            if (a.merge(k, a.buildFragment(b, c).childNodes), e)
                for (i = function(a) {
                        return !a.type || A.test(a.type) ? f ? f.push(a.parentNode ? a.parentNode.removeChild(a) : a) : e.appendChild(a) : void 0
                    }, g = 0; null != (h = k[g]); g++) a.nodeName(h, "script") && i(h) || (e.appendChild(h), "undefined" != typeof h.getElementsByTagName && (j = a.grep(a.merge([], h.getElementsByTagName("script")), i), k.splice.apply(k, [g + 1, 0].concat(j)), g += j.length));
            return k
        });
        var B = a.event.add,
            C = a.event.remove,
            D = a.event.trigger,
            E = a.fn.toggle,
            F = a.fn.live,
            G = a.fn.die,
            H = a.fn.load,
            I = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
            J = new RegExp("\\b(?:" + I + ")\\b"),
            K = /(?:^|\s)hover(\.\S+|)\b/,
            L = function(b) {
                return "string" != typeof b || a.event.special.hover ? b : (K.test(b) && d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), b && b.replace(K, "mouseenter$1 mouseleave$1"))
            };
        a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), a.event.dispatch && e(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), a.event.add = function(a, b, c, e, f) {
            a !== document && J.test(b) && d("AJAX events should be attached to document: " + b), B.call(this, a, L(b || ""), c, e, f)
        }, a.event.remove = function(a, b, c, d, e) {
            C.call(this, a, L(b) || "", c, d, e)
        }, a.each(["load", "unload", "error"], function(b, c) {
            a.fn[c] = function() {
                var a = Array.prototype.slice.call(arguments, 0);
                return "load" === c && "string" == typeof a[0] ? H.apply(this, a) : (d("jQuery.fn." + c + "() is deprecated"), a.splice(0, 0, c), arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a), this))
            }
        }), a.fn.toggle = function(b, c) {
            if (!a.isFunction(b) || !a.isFunction(c)) return E.apply(this, arguments);
            d("jQuery.fn.toggle(handler, handler...) is deprecated");
            var e = arguments,
                f = b.guid || a.guid++,
                g = 0,
                h = function(c) {
                    var d = (a._data(this, "lastToggle" + b.guid) || 0) % g;
                    return a._data(this, "lastToggle" + b.guid, d + 1), c.preventDefault(), e[d].apply(this, arguments) || !1
                };
            for (h.guid = f; g < e.length;) e[g++].guid = f;
            return this.click(h)
        }, a.fn.live = function(b, c, e) {
            return d("jQuery.fn.live() is deprecated"), F ? F.apply(this, arguments) : (a(this.context).on(b, this.selector, c, e), this)
        }, a.fn.die = function(b, c) {
            return d("jQuery.fn.die() is deprecated"), G ? G.apply(this, arguments) : (a(this.context).off(b, this.selector || "**", c), this)
        }, a.event.trigger = function(a, b, c, e) {
            return c || J.test(a) || d("Global events are undocumented and deprecated"), D.call(this, a, b, c || document, e)
        }, a.each(I.split("|"), function(b, c) {
            a.event.special[c] = {
                setup: function() {
                    var b = this;
                    return b !== document && (a.event.add(document, c + "." + a.guid, function() {
                        a.event.trigger(c, Array.prototype.slice.call(arguments, 1), b, !0)
                    }), a._data(this, c, a.guid++)), !1
                },
                teardown: function() {
                    return this !== document && a.event.remove(document, c + "." + a._data(this, c)), !1
                }
            }
        }), a.event.special.ready = {
            setup: function() {
                this === document && d("'ready' event is deprecated")
            }
        };
        var M = a.fn.andSelf || a.fn.addBack,
            N = a.fn.find;
        if (a.fn.andSelf = function() {
                return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), M.apply(this, arguments)
            }, a.fn.find = function(a) {
                var b = N.apply(this, arguments);
                return b.context = this.context, b.selector = this.selector ? this.selector + " " + a : a, b
            }, a.Callbacks) {
            var O = a.Deferred,
                P = [
                    ["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]
                ];
            a.Deferred = function(b) {
                var c = O(),
                    e = c.promise();
                return c.pipe = e.pipe = function() {
                    var b = arguments;
                    return d("deferred.pipe() is deprecated"), a.Deferred(function(d) {
                        a.each(P, function(f, g) {
                            var h = a.isFunction(b[f]) && b[f];
                            c[g[1]](function() {
                                var b = h && h.apply(this, arguments);
                                b && a.isFunction(b.promise) ? b.promise().done(d.resolve).fail(d.reject).progress(d.notify) : d[g[0] + "With"](this === e ? d.promise() : this, h ? [b] : arguments)
                            })
                        }), b = null
                    }).promise()
                }, c.isResolved = function() {
                    return d("deferred.isResolved is deprecated"), "resolved" === c.state()
                }, c.isRejected = function() {
                    return d("deferred.isRejected is deprecated"), "rejected" === c.state()
                }, b && b.call(c, c), c
            }
        }
    }(jQuery, window);
(function() {
    function a(a) {
        function b(b, c, d, e, f, g) {
            for (; f >= 0 && f < g; f += a) {
                var h = e ? e[f] : f;
                d = c(d, b[h], h, b)
            }
            return d
        }
        return function(c, d, e, f) {
            d = t(d, f, 4);
            var g = !A(c) && s.keys(c),
                h = (g || c).length,
                i = a > 0 ? 0 : h - 1;
            return arguments.length < 3 && (e = c[g ? g[i] : i], i += a), b(c, d, e, g, i, h)
        }
    }

    function b(a) {
        return function(b, c, d) {
            c = u(c, d);
            for (var e = z(b), f = a > 0 ? 0 : e - 1; f >= 0 && f < e; f += a)
                if (c(b[f], f, b)) return f;
            return -1
        }
    }

    function c(a, b, c) {
        return function(d, e, f) {
            var g = 0,
                h = z(d);
            if ("number" == typeof f) a > 0 ? g = f >= 0 ? f : Math.max(f + h, g) : h = f >= 0 ? Math.min(f + 1, h) : f + h + 1;
            else if (c && f && h) return f = c(d, e), d[f] === e ? f : -1;
            if (e !== e) return f = b(k.call(d, g, h), s.isNaN), f >= 0 ? f + g : -1;
            for (f = a > 0 ? g : h - 1; f >= 0 && f < h; f += a)
                if (d[f] === e) return f;
            return -1
        }
    }

    function d(a, b) {
        var c = F.length,
            d = a.constructor,
            e = s.isFunction(d) && d.prototype || h,
            f = "constructor";
        for (s.has(a, f) && !s.contains(b, f) && b.push(f); c--;) f = F[c], f in a && a[f] !== e[f] && !s.contains(b, f) && b.push(f)
    }
    var e = this,
        f = e._,
        g = Array.prototype,
        h = Object.prototype,
        i = Function.prototype,
        j = g.push,
        k = g.slice,
        l = h.toString,
        m = h.hasOwnProperty,
        n = Array.isArray,
        o = Object.keys,
        p = i.bind,
        q = Object.create,
        r = function() {},
        s = function(a) {
            return a instanceof s ? a : this instanceof s ? void(this._wrapped = a) : new s(a)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = s), exports._ = s) : e._ = s, s.VERSION = "1.8.3";
    var t = function(a, b, c) {
            if (void 0 === b) return a;
            switch (null == c ? 3 : c) {
                case 1:
                    return function(c) {
                        return a.call(b, c)
                    };
                case 2:
                    return function(c, d) {
                        return a.call(b, c, d)
                    };
                case 3:
                    return function(c, d, e) {
                        return a.call(b, c, d, e)
                    };
                case 4:
                    return function(c, d, e, f) {
                        return a.call(b, c, d, e, f)
                    }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        u = function(a, b, c) {
            return null == a ? s.identity : s.isFunction(a) ? t(a, b, c) : s.isObject(a) ? s.matcher(a) : s.property(a)
        };
    s.iteratee = function(a, b) {
        return u(a, b, 1 / 0)
    };
    var v = function(a, b) {
            return function(c) {
                var d = arguments.length;
                if (d < 2 || null == c) return c;
                for (var e = 1; e < d; e++)
                    for (var f = arguments[e], g = a(f), h = g.length, i = 0; i < h; i++) {
                        var j = g[i];
                        b && void 0 !== c[j] || (c[j] = f[j])
                    }
                return c
            }
        },
        w = function(a) {
            if (!s.isObject(a)) return {};
            if (q) return q(a);
            r.prototype = a;
            var b = new r;
            return r.prototype = null, b
        },
        x = function(a) {
            return function(b) {
                return null == b ? void 0 : b[a]
            }
        },
        y = Math.pow(2, 53) - 1,
        z = x("length"),
        A = function(a) {
            var b = z(a);
            return "number" == typeof b && b >= 0 && b <= y
        };
    s.each = s.forEach = function(a, b, c) {
        b = t(b, c);
        var d, e;
        if (A(a))
            for (d = 0, e = a.length; d < e; d++) b(a[d], d, a);
        else {
            var f = s.keys(a);
            for (d = 0, e = f.length; d < e; d++) b(a[f[d]], f[d], a)
        }
        return a
    }, s.map = s.collect = function(a, b, c) {
        b = u(b, c);
        for (var d = !A(a) && s.keys(a), e = (d || a).length, f = Array(e), g = 0; g < e; g++) {
            var h = d ? d[g] : g;
            f[g] = b(a[h], h, a)
        }
        return f
    }, s.reduce = s.foldl = s.inject = a(1), s.reduceRight = s.foldr = a(-1), s.find = s.detect = function(a, b, c) {
        var d;
        if (d = A(a) ? s.findIndex(a, b, c) : s.findKey(a, b, c), void 0 !== d && d !== -1) return a[d]
    }, s.filter = s.select = function(a, b, c) {
        var d = [];
        return b = u(b, c), s.each(a, function(a, c, e) {
            b(a, c, e) && d.push(a)
        }), d
    }, s.reject = function(a, b, c) {
        return s.filter(a, s.negate(u(b)), c)
    }, s.every = s.all = function(a, b, c) {
        b = u(b, c);
        for (var d = !A(a) && s.keys(a), e = (d || a).length, f = 0; f < e; f++) {
            var g = d ? d[f] : f;
            if (!b(a[g], g, a)) return !1
        }
        return !0
    }, s.some = s.any = function(a, b, c) {
        b = u(b, c);
        for (var d = !A(a) && s.keys(a), e = (d || a).length, f = 0; f < e; f++) {
            var g = d ? d[f] : f;
            if (b(a[g], g, a)) return !0
        }
        return !1
    }, s.contains = s.includes = s.include = function(a, b, c, d) {
        return A(a) || (a = s.values(a)), ("number" != typeof c || d) && (c = 0), s.indexOf(a, b, c) >= 0
    }, s.invoke = function(a, b) {
        var c = k.call(arguments, 2),
            d = s.isFunction(b);
        return s.map(a, function(a) {
            var e = d ? b : a[b];
            return null == e ? e : e.apply(a, c)
        })
    }, s.pluck = function(a, b) {
        return s.map(a, s.property(b))
    }, s.where = function(a, b) {
        return s.filter(a, s.matcher(b))
    }, s.findWhere = function(a, b) {
        return s.find(a, s.matcher(b))
    }, s.max = function(a, b, c) {
        var d, e, f = -(1 / 0),
            g = -(1 / 0);
        if (null == b && null != a) {
            a = A(a) ? a : s.values(a);
            for (var h = 0, i = a.length; h < i; h++) d = a[h], d > f && (f = d)
        } else b = u(b, c), s.each(a, function(a, c, d) {
            e = b(a, c, d), (e > g || e === -(1 / 0) && f === -(1 / 0)) && (f = a, g = e)
        });
        return f
    }, s.min = function(a, b, c) {
        var d, e, f = 1 / 0,
            g = 1 / 0;
        if (null == b && null != a) {
            a = A(a) ? a : s.values(a);
            for (var h = 0, i = a.length; h < i; h++) d = a[h], d < f && (f = d)
        } else b = u(b, c), s.each(a, function(a, c, d) {
            e = b(a, c, d), (e < g || e === 1 / 0 && f === 1 / 0) && (f = a, g = e)
        });
        return f
    }, s.shuffle = function(a) {
        for (var b, c = A(a) ? a : s.values(a), d = c.length, e = Array(d), f = 0; f < d; f++) b = s.random(0, f), b !== f && (e[f] = e[b]), e[b] = c[f];
        return e
    }, s.sample = function(a, b, c) {
        return null == b || c ? (A(a) || (a = s.values(a)), a[s.random(a.length - 1)]) : s.shuffle(a).slice(0, Math.max(0, b))
    }, s.sortBy = function(a, b, c) {
        return b = u(b, c), s.pluck(s.map(a, function(a, c, d) {
            return {
                value: a,
                index: c,
                criteria: b(a, c, d)
            }
        }).sort(function(a, b) {
            var c = a.criteria,
                d = b.criteria;
            if (c !== d) {
                if (c > d || void 0 === c) return 1;
                if (c < d || void 0 === d) return -1
            }
            return a.index - b.index
        }), "value")
    };
    var B = function(a) {
        return function(b, c, d) {
            var e = {};
            return c = u(c, d), s.each(b, function(d, f) {
                var g = c(d, f, b);
                a(e, d, g)
            }), e
        }
    };
    s.groupBy = B(function(a, b, c) {
        s.has(a, c) ? a[c].push(b) : a[c] = [b]
    }), s.indexBy = B(function(a, b, c) {
        a[c] = b
    }), s.countBy = B(function(a, b, c) {
        s.has(a, c) ? a[c]++ : a[c] = 1
    }), s.toArray = function(a) {
        return a ? s.isArray(a) ? k.call(a) : A(a) ? s.map(a, s.identity) : s.values(a) : []
    }, s.size = function(a) {
        return null == a ? 0 : A(a) ? a.length : s.keys(a).length
    }, s.partition = function(a, b, c) {
        b = u(b, c);
        var d = [],
            e = [];
        return s.each(a, function(a, c, f) {
            (b(a, c, f) ? d : e).push(a)
        }), [d, e]
    }, s.first = s.head = s.take = function(a, b, c) {
        if (null != a) return null == b || c ? a[0] : s.initial(a, a.length - b)
    }, s.initial = function(a, b, c) {
        return k.call(a, 0, Math.max(0, a.length - (null == b || c ? 1 : b)))
    }, s.last = function(a, b, c) {
        if (null != a) return null == b || c ? a[a.length - 1] : s.rest(a, Math.max(0, a.length - b))
    }, s.rest = s.tail = s.drop = function(a, b, c) {
        return k.call(a, null == b || c ? 1 : b)
    }, s.compact = function(a) {
        return s.filter(a, s.identity)
    };
    var C = function(a, b, c, d) {
        for (var e = [], f = 0, g = d || 0, h = z(a); g < h; g++) {
            var i = a[g];
            if (A(i) && (s.isArray(i) || s.isArguments(i))) {
                b || (i = C(i, b, c));
                var j = 0,
                    k = i.length;
                for (e.length += k; j < k;) e[f++] = i[j++]
            } else c || (e[f++] = i)
        }
        return e
    };
    s.flatten = function(a, b) {
        return C(a, b, !1)
    }, s.without = function(a) {
        return s.difference(a, k.call(arguments, 1))
    }, s.uniq = s.unique = function(a, b, c, d) {
        s.isBoolean(b) || (d = c, c = b, b = !1), null != c && (c = u(c, d));
        for (var e = [], f = [], g = 0, h = z(a); g < h; g++) {
            var i = a[g],
                j = c ? c(i, g, a) : i;
            b ? (g && f === j || e.push(i), f = j) : c ? s.contains(f, j) || (f.push(j), e.push(i)) : s.contains(e, i) || e.push(i)
        }
        return e
    }, s.union = function() {
        return s.uniq(C(arguments, !0, !0))
    }, s.intersection = function(a) {
        for (var b = [], c = arguments.length, d = 0, e = z(a); d < e; d++) {
            var f = a[d];
            if (!s.contains(b, f)) {
                for (var g = 1; g < c && s.contains(arguments[g], f); g++);
                g === c && b.push(f)
            }
        }
        return b
    }, s.difference = function(a) {
        var b = C(arguments, !0, !0, 1);
        return s.filter(a, function(a) {
            return !s.contains(b, a)
        })
    }, s.zip = function() {
        return s.unzip(arguments)
    }, s.unzip = function(a) {
        for (var b = a && s.max(a, z).length || 0, c = Array(b), d = 0; d < b; d++) c[d] = s.pluck(a, d);
        return c
    }, s.object = function(a, b) {
        for (var c = {}, d = 0, e = z(a); d < e; d++) b ? c[a[d]] = b[d] : c[a[d][0]] = a[d][1];
        return c
    }, s.findIndex = b(1), s.findLastIndex = b(-1), s.sortedIndex = function(a, b, c, d) {
        c = u(c, d, 1);
        for (var e = c(b), f = 0, g = z(a); f < g;) {
            var h = Math.floor((f + g) / 2);
            c(a[h]) < e ? f = h + 1 : g = h
        }
        return f
    }, s.indexOf = c(1, s.findIndex, s.sortedIndex), s.lastIndexOf = c(-1, s.findLastIndex), s.range = function(a, b, c) {
        null == b && (b = a || 0, a = 0), c = c || 1;
        for (var d = Math.max(Math.ceil((b - a) / c), 0), e = Array(d), f = 0; f < d; f++, a += c) e[f] = a;
        return e
    };
    var D = function(a, b, c, d, e) {
        if (!(d instanceof b)) return a.apply(c, e);
        var f = w(a.prototype),
            g = a.apply(f, e);
        return s.isObject(g) ? g : f
    };
    s.bind = function(a, b) {
        if (p && a.bind === p) return p.apply(a, k.call(arguments, 1));
        if (!s.isFunction(a)) throw new TypeError("Bind must be called on a function");
        var c = k.call(arguments, 2),
            d = function() {
                return D(a, d, b, this, c.concat(k.call(arguments)))
            };
        return d
    }, s.partial = function(a) {
        var b = k.call(arguments, 1),
            c = function() {
                for (var d = 0, e = b.length, f = Array(e), g = 0; g < e; g++) f[g] = b[g] === s ? arguments[d++] : b[g];
                for (; d < arguments.length;) f.push(arguments[d++]);
                return D(a, c, this, this, f)
            };
        return c
    }, s.bindAll = function(a) {
        var b, c, d = arguments.length;
        if (d <= 1) throw new Error("bindAll must be passed function names");
        for (b = 1; b < d; b++) c = arguments[b], a[c] = s.bind(a[c], a);
        return a
    }, s.memoize = function(a, b) {
        var c = function(d) {
            var e = c.cache,
                f = "" + (b ? b.apply(this, arguments) : d);
            return s.has(e, f) || (e[f] = a.apply(this, arguments)), e[f]
        };
        return c.cache = {}, c
    }, s.delay = function(a, b) {
        var c = k.call(arguments, 2);
        return setTimeout(function() {
            return a.apply(null, c)
        }, b)
    }, s.defer = s.partial(s.delay, s, 1), s.throttle = function(a, b, c) {
        var d, e, f, g = null,
            h = 0;
        c || (c = {});
        var i = function() {
            h = c.leading === !1 ? 0 : s.now(), g = null, f = a.apply(d, e), g || (d = e = null)
        };
        return function() {
            var j = s.now();
            h || c.leading !== !1 || (h = j);
            var k = b - (j - h);
            return d = this, e = arguments, k <= 0 || k > b ? (g && (clearTimeout(g), g = null), h = j, f = a.apply(d, e), g || (d = e = null)) : g || c.trailing === !1 || (g = setTimeout(i, k)), f
        }
    }, s.debounce = function(a, b, c) {
        var d, e, f, g, h, i = function() {
            var j = s.now() - g;
            j < b && j >= 0 ? d = setTimeout(i, b - j) : (d = null, c || (h = a.apply(f, e), d || (f = e = null)))
        };
        return function() {
            f = this, e = arguments, g = s.now();
            var j = c && !d;
            return d || (d = setTimeout(i, b)), j && (h = a.apply(f, e), f = e = null), h
        }
    }, s.wrap = function(a, b) {
        return s.partial(b, a)
    }, s.negate = function(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }, s.compose = function() {
        var a = arguments,
            b = a.length - 1;
        return function() {
            for (var c = b, d = a[b].apply(this, arguments); c--;) d = a[c].call(this, d);
            return d
        }
    }, s.after = function(a, b) {
        return function() {
            if (--a < 1) return b.apply(this, arguments)
        }
    }, s.before = function(a, b) {
        var c;
        return function() {
            return --a > 0 && (c = b.apply(this, arguments)), a <= 1 && (b = null), c
        }
    }, s.once = s.partial(s.before, 2);
    var E = !{
            toString: null
        }.propertyIsEnumerable("toString"),
        F = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
    s.keys = function(a) {
        if (!s.isObject(a)) return [];
        if (o) return o(a);
        var b = [];
        for (var c in a) s.has(a, c) && b.push(c);
        return E && d(a, b), b
    }, s.allKeys = function(a) {
        if (!s.isObject(a)) return [];
        var b = [];
        for (var c in a) b.push(c);
        return E && d(a, b), b
    }, s.values = function(a) {
        for (var b = s.keys(a), c = b.length, d = Array(c), e = 0; e < c; e++) d[e] = a[b[e]];
        return d
    }, s.mapObject = function(a, b, c) {
        b = u(b, c);
        for (var d, e = s.keys(a), f = e.length, g = {}, h = 0; h < f; h++) d = e[h], g[d] = b(a[d], d, a);
        return g
    }, s.pairs = function(a) {
        for (var b = s.keys(a), c = b.length, d = Array(c), e = 0; e < c; e++) d[e] = [b[e], a[b[e]]];
        return d
    }, s.invert = function(a) {
        for (var b = {}, c = s.keys(a), d = 0, e = c.length; d < e; d++) b[a[c[d]]] = c[d];
        return b
    }, s.functions = s.methods = function(a) {
        var b = [];
        for (var c in a) s.isFunction(a[c]) && b.push(c);
        return b.sort()
    }, s.extend = v(s.allKeys), s.extendOwn = s.assign = v(s.keys), s.findKey = function(a, b, c) {
        b = u(b, c);
        for (var d, e = s.keys(a), f = 0, g = e.length; f < g; f++)
            if (d = e[f], b(a[d], d, a)) return d
    }, s.pick = function(a, b, c) {
        var d, e, f = {},
            g = a;
        if (null == g) return f;
        s.isFunction(b) ? (e = s.allKeys(g), d = t(b, c)) : (e = C(arguments, !1, !1, 1), d = function(a, b, c) {
            return b in c
        }, g = Object(g));
        for (var h = 0, i = e.length; h < i; h++) {
            var j = e[h],
                k = g[j];
            d(k, j, g) && (f[j] = k)
        }
        return f
    }, s.omit = function(a, b, c) {
        if (s.isFunction(b)) b = s.negate(b);
        else {
            var d = s.map(C(arguments, !1, !1, 1), String);
            b = function(a, b) {
                return !s.contains(d, b)
            }
        }
        return s.pick(a, b, c)
    }, s.defaults = v(s.allKeys, !0), s.create = function(a, b) {
        var c = w(a);
        return b && s.extendOwn(c, b), c
    }, s.clone = function(a) {
        return s.isObject(a) ? s.isArray(a) ? a.slice() : s.extend({}, a) : a
    }, s.tap = function(a, b) {
        return b(a), a
    }, s.isMatch = function(a, b) {
        var c = s.keys(b),
            d = c.length;
        if (null == a) return !d;
        for (var e = Object(a), f = 0; f < d; f++) {
            var g = c[f];
            if (b[g] !== e[g] || !(g in e)) return !1
        }
        return !0
    };
    var G = function(a, b, c, d) {
        if (a === b) return 0 !== a || 1 / a === 1 / b;
        if (null == a || null == b) return a === b;
        a instanceof s && (a = a._wrapped), b instanceof s && (b = b._wrapped);
        var e = l.call(a);
        if (e !== l.call(b)) return !1;
        switch (e) {
            case "[object RegExp]":
            case "[object String]":
                return "" + a == "" + b;
            case "[object Number]":
                return +a !== +a ? +b !== +b : 0 === +a ? 1 / +a === 1 / b : +a === +b;
            case "[object Date]":
            case "[object Boolean]":
                return +a === +b
        }
        var f = "[object Array]" === e;
        if (!f) {
            if ("object" != typeof a || "object" != typeof b) return !1;
            var g = a.constructor,
                h = b.constructor;
            if (g !== h && !(s.isFunction(g) && g instanceof g && s.isFunction(h) && h instanceof h) && "constructor" in a && "constructor" in b) return !1
        }
        c = c || [], d = d || [];
        for (var i = c.length; i--;)
            if (c[i] === a) return d[i] === b;
        if (c.push(a), d.push(b), f) {
            if (i = a.length, i !== b.length) return !1;
            for (; i--;)
                if (!G(a[i], b[i], c, d)) return !1
        } else {
            var j, k = s.keys(a);
            if (i = k.length, s.keys(b).length !== i) return !1;
            for (; i--;)
                if (j = k[i], !s.has(b, j) || !G(a[j], b[j], c, d)) return !1
        }
        return c.pop(), d.pop(), !0
    };
    s.isEqual = function(a, b) {
        return G(a, b)
    }, s.isEmpty = function(a) {
        return null == a || (A(a) && (s.isArray(a) || s.isString(a) || s.isArguments(a)) ? 0 === a.length : 0 === s.keys(a).length)
    }, s.isElement = function(a) {
        return !(!a || 1 !== a.nodeType)
    }, s.isArray = n || function(a) {
        return "[object Array]" === l.call(a)
    }, s.isObject = function(a) {
        var b = typeof a;
        return "function" === b || "object" === b && !!a
    }, s.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(a) {
        s["is" + a] = function(b) {
            return l.call(b) === "[object " + a + "]"
        }
    }), s.isArguments(arguments) || (s.isArguments = function(a) {
        return s.has(a, "callee")
    }), "function" != typeof /./ && "object" != typeof Int8Array && (s.isFunction = function(a) {
        return "function" == typeof a || !1
    }), s.isFinite = function(a) {
        return isFinite(a) && !isNaN(parseFloat(a))
    }, s.isNaN = function(a) {
        return s.isNumber(a) && a !== +a
    }, s.isBoolean = function(a) {
        return a === !0 || a === !1 || "[object Boolean]" === l.call(a)
    }, s.isNull = function(a) {
        return null === a
    }, s.isUndefined = function(a) {
        return void 0 === a
    }, s.has = function(a, b) {
        return null != a && m.call(a, b)
    }, s.noConflict = function() {
        return e._ = f, this
    }, s.identity = function(a) {
        return a
    }, s.constant = function(a) {
        return function() {
            return a
        }
    }, s.noop = function() {}, s.property = x, s.propertyOf = function(a) {
        return null == a ? function() {} : function(b) {
            return a[b]
        }
    }, s.matcher = s.matches = function(a) {
        return a = s.extendOwn({}, a),
            function(b) {
                return s.isMatch(b, a)
            }
    }, s.times = function(a, b, c) {
        var d = Array(Math.max(0, a));
        b = t(b, c, 1);
        for (var e = 0; e < a; e++) d[e] = b(e);
        return d
    }, s.random = function(a, b) {
        return null == b && (b = a, a = 0), a + Math.floor(Math.random() * (b - a + 1))
    }, s.now = Date.now || function() {
        return (new Date).getTime()
    };
    var H = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        },
        I = s.invert(H),
        J = function(a) {
            var b = function(b) {
                    return a[b]
                },
                c = "(?:" + s.keys(a).join("|") + ")",
                d = RegExp(c),
                e = RegExp(c, "g");
            return function(a) {
                return a = null == a ? "" : "" + a, d.test(a) ? a.replace(e, b) : a
            }
        };
    s.escape = J(H), s.unescape = J(I), s.result = function(a, b, c) {
        var d = null == a ? void 0 : a[b];
        return void 0 === d && (d = c), s.isFunction(d) ? d.call(a) : d
    };
    var K = 0;
    s.uniqueId = function(a) {
        var b = ++K + "";
        return a ? a + b : b
    }, s.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var L = /(.)^/,
        M = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        N = /\\|'|\r|\n|\u2028|\u2029/g,
        O = function(a) {
            return "\\" + M[a]
        };
    s.template = function(a, b, c) {
        !b && c && (b = c), b = s.defaults({}, b, s.templateSettings);
        var d = RegExp([(b.escape || L).source, (b.interpolate || L).source, (b.evaluate || L).source].join("|") + "|$", "g"),
            e = 0,
            f = "__p+='";
        a.replace(d, function(b, c, d, g, h) {
            return f += a.slice(e, h).replace(N, O), e = h + b.length, c ? f += "'+\n((__t=(" + c + "))==null?'':_.escape(__t))+\n'" : d ? f += "'+\n((__t=(" + d + "))==null?'':__t)+\n'" : g && (f += "';\n" + g + "\n__p+='"), b
        }), f += "';\n", b.variable || (f = "with(obj||{}){\n" + f + "}\n"), f = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + f + "return __p;\n";
        try {
            var g = new Function(b.variable || "obj", "_", f)
        } catch (h) {
            throw h.source = f, h
        }
        var i = function(a) {
                return g.call(this, a, s)
            },
            j = b.variable || "obj";
        return i.source = "function(" + j + "){\n" + f + "}", i
    }, s.chain = function(a) {
        var b = s(a);
        return b._chain = !0, b
    };
    var P = function(a, b) {
        return a._chain ? s(b).chain() : b
    };
    s.mixin = function(a) {
        s.each(s.functions(a), function(b) {
            var c = s[b] = a[b];
            s.prototype[b] = function() {
                var a = [this._wrapped];
                return j.apply(a, arguments), P(this, c.apply(s, a))
            }
        })
    }, s.mixin(s), s.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(a) {
        var b = g[a];
        s.prototype[a] = function() {
            var c = this._wrapped;
            return b.apply(c, arguments), "shift" !== a && "splice" !== a || 0 !== c.length || delete c[0], P(this, c)
        }
    }), s.each(["concat", "join", "slice"], function(a) {
        var b = g[a];
        s.prototype[a] = function() {
            return P(this, b.apply(this._wrapped, arguments))
        }
    }), s.prototype.value = function() {
        return this._wrapped
    }, s.prototype.valueOf = s.prototype.toJSON = s.prototype.value, s.prototype.toString = function() {
        return "" + this._wrapped
    }, "function" == typeof define && define.amd && define("underscore", [], function() {
        return s
    })
}).call(this);
! function(a) {
    var b = "object" == typeof self && self.self === self && self || "object" == typeof global && global.global === global && global;
    if ("function" == typeof define && define.amd) define(["underscore", "jquery", "exports"], function(c, d, e) {
        b.Backbone = a(b, e, c, d)
    });
    else if ("undefined" != typeof exports) {
        var c, d = require("underscore");
        try {
            c = require("jquery")
        } catch (e) {}
        a(b, exports, d, c)
    } else b.Backbone = a(b, {}, b._, b.jQuery || b.Zepto || b.ender || b.$)
}(function(a, b, c, d) {
    var e = a.Backbone,
        f = Array.prototype.slice;
    b.VERSION = "1.3.3", b.$ = d, b.noConflict = function() {
        return a.Backbone = e, this
    }, b.emulateHTTP = !1, b.emulateJSON = !1;
    var g = function(a, b, d) {
            switch (a) {
                case 1:
                    return function() {
                        return c[b](this[d])
                    };
                case 2:
                    return function(a) {
                        return c[b](this[d], a)
                    };
                case 3:
                    return function(a, e) {
                        return c[b](this[d], i(a, this), e)
                    };
                case 4:
                    return function(a, e, f) {
                        return c[b](this[d], i(a, this), e, f)
                    };
                default:
                    return function() {
                        var a = f.call(arguments);
                        return a.unshift(this[d]), c[b].apply(c, a)
                    }
            }
        },
        h = function(a, b, d) {
            c.each(b, function(b, e) {
                c[e] && (a.prototype[e] = g(b, e, d))
            })
        },
        i = function(a, b) {
            return c.isFunction(a) ? a : c.isObject(a) && !b._isModel(a) ? j(a) : c.isString(a) ? function(b) {
                return b.get(a)
            } : a
        },
        j = function(a) {
            var b = c.matches(a);
            return function(a) {
                return b(a.attributes)
            }
        },
        k = b.Events = {},
        l = /\s+/,
        m = function(a, b, d, e, f) {
            var g, h = 0;
            if (d && "object" == typeof d) {
                void 0 !== e && "context" in f && void 0 === f.context && (f.context = e);
                for (g = c.keys(d); h < g.length; h++) b = m(a, b, g[h], d[g[h]], f)
            } else if (d && l.test(d))
                for (g = d.split(l); h < g.length; h++) b = a(b, g[h], e, f);
            else b = a(b, d, e, f);
            return b
        };
    k.on = function(a, b, c) {
        return n(this, a, b, c)
    };
    var n = function(a, b, c, d, e) {
        if (a._events = m(o, a._events || {}, b, c, {
                context: d,
                ctx: a,
                listening: e
            }), e) {
            var f = a._listeners || (a._listeners = {});
            f[e.id] = e
        }
        return a
    };
    k.listenTo = function(a, b, d) {
        if (!a) return this;
        var e = a._listenId || (a._listenId = c.uniqueId("l")),
            f = this._listeningTo || (this._listeningTo = {}),
            g = f[e];
        if (!g) {
            var h = this._listenId || (this._listenId = c.uniqueId("l"));
            g = f[e] = {
                obj: a,
                objId: e,
                id: h,
                listeningTo: f,
                count: 0
            }
        }
        return n(a, b, d, this, g), this
    };
    var o = function(a, b, c, d) {
        if (c) {
            var e = a[b] || (a[b] = []),
                f = d.context,
                g = d.ctx,
                h = d.listening;
            h && h.count++, e.push({
                callback: c,
                context: f,
                ctx: f || g,
                listening: h
            })
        }
        return a
    };
    k.off = function(a, b, c) {
        return this._events ? (this._events = m(p, this._events, a, b, {
            context: c,
            listeners: this._listeners
        }), this) : this
    }, k.stopListening = function(a, b, d) {
        var e = this._listeningTo;
        if (!e) return this;
        for (var f = a ? [a._listenId] : c.keys(e), g = 0; g < f.length; g++) {
            var h = e[f[g]];
            if (!h) break;
            h.obj.off(b, d, this)
        }
        return this
    };
    var p = function(a, b, d, e) {
        if (a) {
            var f, g = 0,
                h = e.context,
                i = e.listeners;
            if (b || d || h) {
                for (var j = b ? [b] : c.keys(a); g < j.length; g++) {
                    b = j[g];
                    var k = a[b];
                    if (!k) break;
                    for (var l = [], m = 0; m < k.length; m++) {
                        var n = k[m];
                        d && d !== n.callback && d !== n.callback._callback || h && h !== n.context ? l.push(n) : (f = n.listening, f && 0 === --f.count && (delete i[f.id], delete f.listeningTo[f.objId]))
                    }
                    l.length ? a[b] = l : delete a[b]
                }
                return a
            }
            for (var o = c.keys(i); g < o.length; g++) f = i[o[g]], delete i[f.id], delete f.listeningTo[f.objId]
        }
    };
    k.once = function(a, b, d) {
        var e = m(q, {}, a, b, c.bind(this.off, this));
        return "string" == typeof a && null == d && (b = void 0), this.on(e, b, d)
    }, k.listenToOnce = function(a, b, d) {
        var e = m(q, {}, b, d, c.bind(this.stopListening, this, a));
        return this.listenTo(a, e)
    };
    var q = function(a, b, d, e) {
        if (d) {
            var f = a[b] = c.once(function() {
                e(b, f), d.apply(this, arguments)
            });
            f._callback = d
        }
        return a
    };
    k.trigger = function(a) {
        if (!this._events) return this;
        for (var b = Math.max(0, arguments.length - 1), c = Array(b), d = 0; d < b; d++) c[d] = arguments[d + 1];
        return m(r, this._events, a, void 0, c), this
    };
    var r = function(a, b, c, d) {
            if (a) {
                var e = a[b],
                    f = a.all;
                e && f && (f = f.slice()), e && s(e, d), f && s(f, [b].concat(d))
            }
            return a
        },
        s = function(a, b) {
            var c, d = -1,
                e = a.length,
                f = b[0],
                g = b[1],
                h = b[2];
            switch (b.length) {
                case 0:
                    for (; ++d < e;)(c = a[d]).callback.call(c.ctx);
                    return;
                case 1:
                    for (; ++d < e;)(c = a[d]).callback.call(c.ctx, f);
                    return;
                case 2:
                    for (; ++d < e;)(c = a[d]).callback.call(c.ctx, f, g);
                    return;
                case 3:
                    for (; ++d < e;)(c = a[d]).callback.call(c.ctx, f, g, h);
                    return;
                default:
                    for (; ++d < e;)(c = a[d]).callback.apply(c.ctx, b);
                    return
            }
        };
    k.bind = k.on, k.unbind = k.off, c.extend(b, k);
    var t = b.Model = function(a, b) {
        var d = a || {};
        b || (b = {}), this.cid = c.uniqueId(this.cidPrefix), this.attributes = {}, b.collection && (this.collection = b.collection), b.parse && (d = this.parse(d, b) || {});
        var e = c.result(this, "defaults");
        d = c.defaults(c.extend({}, e, d), e), this.set(d, b), this.changed = {}, this.initialize.apply(this, arguments)
    };
    c.extend(t.prototype, k, {
        changed: null,
        validationError: null,
        idAttribute: "id",
        cidPrefix: "c",
        initialize: function() {},
        toJSON: function(a) {
            return c.clone(this.attributes)
        },
        sync: function() {
            return b.sync.apply(this, arguments)
        },
        get: function(a) {
            return this.attributes[a]
        },
        escape: function(a) {
            return c.escape(this.get(a))
        },
        has: function(a) {
            return null != this.get(a)
        },
        matches: function(a) {
            return !!c.iteratee(a, this)(this.attributes)
        },
        set: function(a, b, d) {
            if (null == a) return this;
            var e;
            if ("object" == typeof a ? (e = a, d = b) : (e = {})[a] = b, d || (d = {}), !this._validate(e, d)) return !1;
            var f = d.unset,
                g = d.silent,
                h = [],
                i = this._changing;
            this._changing = !0, i || (this._previousAttributes = c.clone(this.attributes), this.changed = {});
            var j = this.attributes,
                k = this.changed,
                l = this._previousAttributes;
            for (var m in e) b = e[m], c.isEqual(j[m], b) || h.push(m), c.isEqual(l[m], b) ? delete k[m] : k[m] = b, f ? delete j[m] : j[m] = b;
            if (this.idAttribute in e && (this.id = this.get(this.idAttribute)), !g) {
                h.length && (this._pending = d);
                for (var n = 0; n < h.length; n++) this.trigger("change:" + h[n], this, j[h[n]], d)
            }
            if (i) return this;
            if (!g)
                for (; this._pending;) d = this._pending, this._pending = !1, this.trigger("change", this, d);
            return this._pending = !1, this._changing = !1, this
        },
        unset: function(a, b) {
            return this.set(a, void 0, c.extend({}, b, {
                unset: !0
            }))
        },
        clear: function(a) {
            var b = {};
            for (var d in this.attributes) b[d] = void 0;
            return this.set(b, c.extend({}, a, {
                unset: !0
            }))
        },
        hasChanged: function(a) {
            return null == a ? !c.isEmpty(this.changed) : c.has(this.changed, a)
        },
        changedAttributes: function(a) {
            if (!a) return !!this.hasChanged() && c.clone(this.changed);
            var b = this._changing ? this._previousAttributes : this.attributes,
                d = {};
            for (var e in a) {
                var f = a[e];
                c.isEqual(b[e], f) || (d[e] = f)
            }
            return !!c.size(d) && d
        },
        previous: function(a) {
            return null != a && this._previousAttributes ? this._previousAttributes[a] : null
        },
        previousAttributes: function() {
            return c.clone(this._previousAttributes)
        },
        fetch: function(a) {
            a = c.extend({
                parse: !0
            }, a);
            var b = this,
                d = a.success;
            return a.success = function(c) {
                var e = a.parse ? b.parse(c, a) : c;
                return !!b.set(e, a) && (d && d.call(a.context, b, c, a), void b.trigger("sync", b, c, a))
            }, P(this, a), this.sync("read", this, a)
        },
        save: function(a, b, d) {
            var e;
            null == a || "object" == typeof a ? (e = a, d = b) : (e = {})[a] = b, d = c.extend({
                validate: !0,
                parse: !0
            }, d);
            var f = d.wait;
            if (e && !f) {
                if (!this.set(e, d)) return !1
            } else if (!this._validate(e, d)) return !1;
            var g = this,
                h = d.success,
                i = this.attributes;
            d.success = function(a) {
                g.attributes = i;
                var b = d.parse ? g.parse(a, d) : a;
                return f && (b = c.extend({}, e, b)), !(b && !g.set(b, d)) && (h && h.call(d.context, g, a, d), void g.trigger("sync", g, a, d))
            }, P(this, d), e && f && (this.attributes = c.extend({}, i, e));
            var j = this.isNew() ? "create" : d.patch ? "patch" : "update";
            "patch" !== j || d.attrs || (d.attrs = e);
            var k = this.sync(j, this, d);
            return this.attributes = i, k
        },
        destroy: function(a) {
            a = a ? c.clone(a) : {};
            var b = this,
                d = a.success,
                e = a.wait,
                f = function() {
                    b.stopListening(), b.trigger("destroy", b, b.collection, a)
                };
            a.success = function(c) {
                e && f(), d && d.call(a.context, b, c, a), b.isNew() || b.trigger("sync", b, c, a)
            };
            var g = !1;
            return this.isNew() ? c.defer(a.success) : (P(this, a), g = this.sync("delete", this, a)), e || f(), g
        },
        url: function() {
            var a = c.result(this, "urlRoot") || c.result(this.collection, "url") || O();
            if (this.isNew()) return a;
            var b = this.get(this.idAttribute);
            return a.replace(/[^\/]$/, "$&/") + encodeURIComponent(b)
        },
        parse: function(a, b) {
            return a
        },
        clone: function() {
            return new this.constructor(this.attributes)
        },
        isNew: function() {
            return !this.has(this.idAttribute)
        },
        isValid: function(a) {
            return this._validate({}, c.extend({}, a, {
                validate: !0
            }))
        },
        _validate: function(a, b) {
            if (!b.validate || !this.validate) return !0;
            a = c.extend({}, this.attributes, a);
            var d = this.validationError = this.validate(a, b) || null;
            return !d || (this.trigger("invalid", this, d, c.extend(b, {
                validationError: d
            })), !1)
        }
    });
    var u = {
        keys: 1,
        values: 1,
        pairs: 1,
        invert: 1,
        pick: 0,
        omit: 0,
        chain: 1,
        isEmpty: 1
    };
    h(t, u, "attributes");
    var v = b.Collection = function(a, b) {
            b || (b = {}), b.model && (this.model = b.model), void 0 !== b.comparator && (this.comparator = b.comparator), this._reset(), this.initialize.apply(this, arguments), a && this.reset(a, c.extend({
                silent: !0
            }, b))
        },
        w = {
            add: !0,
            remove: !0,
            merge: !0
        },
        x = {
            add: !0,
            remove: !1
        },
        y = function(a, b, c) {
            c = Math.min(Math.max(c, 0), a.length);
            var d, e = Array(a.length - c),
                f = b.length;
            for (d = 0; d < e.length; d++) e[d] = a[d + c];
            for (d = 0; d < f; d++) a[d + c] = b[d];
            for (d = 0; d < e.length; d++) a[d + f + c] = e[d]
        };
    c.extend(v.prototype, k, {
        model: t,
        initialize: function() {},
        toJSON: function(a) {
            return this.map(function(b) {
                return b.toJSON(a)
            })
        },
        sync: function() {
            return b.sync.apply(this, arguments)
        },
        add: function(a, b) {
            return this.set(a, c.extend({
                merge: !1
            }, b, x))
        },
        remove: function(a, b) {
            b = c.extend({}, b);
            var d = !c.isArray(a);
            a = d ? [a] : a.slice();
            var e = this._removeModels(a, b);
            return !b.silent && e.length && (b.changes = {
                added: [],
                merged: [],
                removed: e
            }, this.trigger("update", this, b)), d ? e[0] : e
        },
        set: function(a, b) {
            if (null != a) {
                b = c.extend({}, w, b), b.parse && !this._isModel(a) && (a = this.parse(a, b) || []);
                var d = !c.isArray(a);
                a = d ? [a] : a.slice();
                var e = b.at;
                null != e && (e = +e), e > this.length && (e = this.length), e < 0 && (e += this.length + 1);
                var f, g, h = [],
                    i = [],
                    j = [],
                    k = [],
                    l = {},
                    m = b.add,
                    n = b.merge,
                    o = b.remove,
                    p = !1,
                    q = this.comparator && null == e && b.sort !== !1,
                    r = c.isString(this.comparator) ? this.comparator : null;
                for (g = 0; g < a.length; g++) {
                    f = a[g];
                    var s = this.get(f);
                    if (s) {
                        if (n && f !== s) {
                            var t = this._isModel(f) ? f.attributes : f;
                            b.parse && (t = s.parse(t, b)), s.set(t, b), j.push(s), q && !p && (p = s.hasChanged(r))
                        }
                        l[s.cid] || (l[s.cid] = !0, h.push(s)), a[g] = s
                    } else m && (f = a[g] = this._prepareModel(f, b), f && (i.push(f), this._addReference(f, b), l[f.cid] = !0, h.push(f)))
                }
                if (o) {
                    for (g = 0; g < this.length; g++) f = this.models[g], l[f.cid] || k.push(f);
                    k.length && this._removeModels(k, b)
                }
                var u = !1,
                    v = !q && m && o;
                if (h.length && v ? (u = this.length !== h.length || c.some(this.models, function(a, b) {
                        return a !== h[b]
                    }), this.models.length = 0, y(this.models, h, 0), this.length = this.models.length) : i.length && (q && (p = !0), y(this.models, i, null == e ? this.length : e), this.length = this.models.length), p && this.sort({
                        silent: !0
                    }), !b.silent) {
                    for (g = 0; g < i.length; g++) null != e && (b.index = e + g), f = i[g], f.trigger("add", f, this, b);
                    (p || u) && this.trigger("sort", this, b), (i.length || k.length || j.length) && (b.changes = {
                        added: i,
                        removed: k,
                        merged: j
                    }, this.trigger("update", this, b))
                }
                return d ? a[0] : a
            }
        },
        reset: function(a, b) {
            b = b ? c.clone(b) : {};
            for (var d = 0; d < this.models.length; d++) this._removeReference(this.models[d], b);
            return b.previousModels = this.models, this._reset(), a = this.add(a, c.extend({
                silent: !0
            }, b)), b.silent || this.trigger("reset", this, b), a
        },
        push: function(a, b) {
            return this.add(a, c.extend({
                at: this.length
            }, b))
        },
        pop: function(a) {
            var b = this.at(this.length - 1);
            return this.remove(b, a)
        },
        unshift: function(a, b) {
            return this.add(a, c.extend({
                at: 0
            }, b))
        },
        shift: function(a) {
            var b = this.at(0);
            return this.remove(b, a)
        },
        slice: function() {
            return f.apply(this.models, arguments)
        },
        get: function(a) {
            if (null != a) return this._byId[a] || this._byId[this.modelId(a.attributes || a)] || a.cid && this._byId[a.cid]
        },
        has: function(a) {
            return null != this.get(a)
        },
        at: function(a) {
            return a < 0 && (a += this.length), this.models[a]
        },
        where: function(a, b) {
            return this[b ? "find" : "filter"](a)
        },
        findWhere: function(a) {
            return this.where(a, !0)
        },
        sort: function(a) {
            var b = this.comparator;
            if (!b) throw new Error("Cannot sort a set without a comparator");
            a || (a = {});
            var d = b.length;
            return c.isFunction(b) && (b = c.bind(b, this)), 1 === d || c.isString(b) ? this.models = this.sortBy(b) : this.models.sort(b), a.silent || this.trigger("sort", this, a), this
        },
        pluck: function(a) {
            return this.map(a + "")
        },
        fetch: function(a) {
            a = c.extend({
                parse: !0
            }, a);
            var b = a.success,
                d = this;
            return a.success = function(c) {
                var e = a.reset ? "reset" : "set";
                d[e](c, a), b && b.call(a.context, d, c, a), d.trigger("sync", d, c, a)
            }, P(this, a), this.sync("read", this, a)
        },
        create: function(a, b) {
            b = b ? c.clone(b) : {};
            var d = b.wait;
            if (a = this._prepareModel(a, b), !a) return !1;
            d || this.add(a, b);
            var e = this,
                f = b.success;
            return b.success = function(a, b, c) {
                d && e.add(a, c), f && f.call(c.context, a, b, c)
            }, a.save(null, b), a
        },
        parse: function(a, b) {
            return a
        },
        clone: function() {
            return new this.constructor(this.models, {
                model: this.model,
                comparator: this.comparator
            })
        },
        modelId: function(a) {
            return a[this.model.prototype.idAttribute || "id"]
        },
        _reset: function() {
            this.length = 0, this.models = [], this._byId = {}
        },
        _prepareModel: function(a, b) {
            if (this._isModel(a)) return a.collection || (a.collection = this), a;
            b = b ? c.clone(b) : {}, b.collection = this;
            var d = new this.model(a, b);
            return d.validationError ? (this.trigger("invalid", this, d.validationError, b), !1) : d
        },
        _removeModels: function(a, b) {
            for (var c = [], d = 0; d < a.length; d++) {
                var e = this.get(a[d]);
                if (e) {
                    var f = this.indexOf(e);
                    this.models.splice(f, 1), this.length--, delete this._byId[e.cid];
                    var g = this.modelId(e.attributes);
                    null != g && delete this._byId[g], b.silent || (b.index = f, e.trigger("remove", e, this, b)), c.push(e), this._removeReference(e, b)
                }
            }
            return c
        },
        _isModel: function(a) {
            return a instanceof t
        },
        _addReference: function(a, b) {
            this._byId[a.cid] = a;
            var c = this.modelId(a.attributes);
            null != c && (this._byId[c] = a), a.on("all", this._onModelEvent, this)
        },
        _removeReference: function(a, b) {
            delete this._byId[a.cid];
            var c = this.modelId(a.attributes);
            null != c && delete this._byId[c], this === a.collection && delete a.collection, a.off("all", this._onModelEvent, this)
        },
        _onModelEvent: function(a, b, c, d) {
            if (b) {
                if (("add" === a || "remove" === a) && c !== this) return;
                if ("destroy" === a && this.remove(b, d), "change" === a) {
                    var e = this.modelId(b.previousAttributes()),
                        f = this.modelId(b.attributes);
                    e !== f && (null != e && delete this._byId[e], null != f && (this._byId[f] = b))
                }
            }
            this.trigger.apply(this, arguments)
        }
    });
    var z = {
        forEach: 3,
        each: 3,
        map: 3,
        collect: 3,
        reduce: 0,
        foldl: 0,
        inject: 0,
        reduceRight: 0,
        foldr: 0,
        find: 3,
        detect: 3,
        filter: 3,
        select: 3,
        reject: 3,
        every: 3,
        all: 3,
        some: 3,
        any: 3,
        include: 3,
        includes: 3,
        contains: 3,
        invoke: 0,
        max: 3,
        min: 3,
        toArray: 1,
        size: 1,
        first: 3,
        head: 3,
        take: 3,
        initial: 3,
        rest: 3,
        tail: 3,
        drop: 3,
        last: 3,
        without: 0,
        difference: 0,
        indexOf: 3,
        shuffle: 1,
        lastIndexOf: 3,
        isEmpty: 1,
        chain: 1,
        sample: 3,
        partition: 3,
        groupBy: 3,
        countBy: 3,
        sortBy: 3,
        indexBy: 3,
        findIndex: 3,
        findLastIndex: 3
    };
    h(v, z, "models");
    var A = b.View = function(a) {
            this.cid = c.uniqueId("view"), c.extend(this, c.pick(a, C)), this._ensureElement(), this.initialize.apply(this, arguments)
        },
        B = /^(\S+)\s*(.*)$/,
        C = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    c.extend(A.prototype, k, {
        tagName: "div",
        $: function(a) {
            return this.$el.find(a)
        },
        initialize: function() {},
        render: function() {
            return this
        },
        remove: function() {
            return this._removeElement(), this.stopListening(), this
        },
        _removeElement: function() {
            this.$el.remove()
        },
        setElement: function(a) {
            return this.undelegateEvents(), this._setElement(a), this.delegateEvents(), this
        },
        _setElement: function(a) {
            this.$el = a instanceof b.$ ? a : b.$(a), this.el = this.$el[0]
        },
        delegateEvents: function(a) {
            if (a || (a = c.result(this, "events")), !a) return this;
            this.undelegateEvents();
            for (var b in a) {
                var d = a[b];
                if (c.isFunction(d) || (d = this[d]), d) {
                    var e = b.match(B);
                    this.delegate(e[1], e[2], c.bind(d, this))
                }
            }
            return this
        },
        delegate: function(a, b, c) {
            return this.$el.on(a + ".delegateEvents" + this.cid, b, c), this
        },
        undelegateEvents: function() {
            return this.$el && this.$el.off(".delegateEvents" + this.cid), this
        },
        undelegate: function(a, b, c) {
            return this.$el.off(a + ".delegateEvents" + this.cid, b, c), this
        },
        _createElement: function(a) {
            return document.createElement(a)
        },
        _ensureElement: function() {
            if (this.el) this.setElement(c.result(this, "el"));
            else {
                var a = c.extend({}, c.result(this, "attributes"));
                this.id && (a.id = c.result(this, "id")), this.className && (a["class"] = c.result(this, "className")), this.setElement(this._createElement(c.result(this, "tagName"))), this._setAttributes(a)
            }
        },
        _setAttributes: function(a) {
            this.$el.attr(a)
        }
    }), b.sync = function(a, d, e) {
        var f = D[a];
        c.defaults(e || (e = {}), {
            emulateHTTP: b.emulateHTTP,
            emulateJSON: b.emulateJSON
        });
        var g = {
            type: f,
            dataType: "json"
        };
        if (e.url || (g.url = c.result(d, "url") || O()), null != e.data || !d || "create" !== a && "update" !== a && "patch" !== a || (g.contentType = "application/json", g.data = JSON.stringify(e.attrs || d.toJSON(e))), e.emulateJSON && (g.contentType = "application/x-www-form-urlencoded", g.data = g.data ? {
                model: g.data
            } : {}), e.emulateHTTP && ("PUT" === f || "DELETE" === f || "PATCH" === f)) {
            g.type = "POST", e.emulateJSON && (g.data._method = f);
            var h = e.beforeSend;
            e.beforeSend = function(a) {
                if (a.setRequestHeader("X-HTTP-Method-Override", f), h) return h.apply(this, arguments)
            }
        }
        "GET" === g.type || e.emulateJSON || (g.processData = !1);
        var i = e.error;
        e.error = function(a, b, c) {
            e.textStatus = b, e.errorThrown = c, i && i.call(e.context, a, b, c)
        };
        var j = e.xhr = b.ajax(c.extend(g, e));
        return d.trigger("request", d, j, e), j
    };
    var D = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        "delete": "DELETE",
        read: "GET"
    };
    b.ajax = function() {
        return b.$.ajax.apply(b.$, arguments)
    };
    var E = b.Router = function(a) {
            a || (a = {}), a.routes && (this.routes = a.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
        },
        F = /\((.*?)\)/g,
        G = /(\(\?)?:\w+/g,
        H = /\*\w+/g,
        I = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    c.extend(E.prototype, k, {
        initialize: function() {},
        route: function(a, d, e) {
            c.isRegExp(a) || (a = this._routeToRegExp(a)), c.isFunction(d) && (e = d, d = ""), e || (e = this[d]);
            var f = this;
            return b.history.route(a, function(c) {
                var g = f._extractParameters(a, c);
                f.execute(e, g, d) !== !1 && (f.trigger.apply(f, ["route:" + d].concat(g)), f.trigger("route", d, g), b.history.trigger("route", f, d, g))
            }), this
        },
        execute: function(a, b, c) {
            a && a.apply(this, b)
        },
        navigate: function(a, c) {
            return b.history.navigate(a, c), this
        },
        _bindRoutes: function() {
            if (this.routes) {
                this.routes = c.result(this, "routes");
                for (var a, b = c.keys(this.routes); null != (a = b.pop());) this.route(a, this.routes[a])
            }
        },
        _routeToRegExp: function(a) {
            return a = a.replace(I, "\\$&").replace(F, "(?:$1)?").replace(G, function(a, b) {
                return b ? a : "([^/?]+)"
            }).replace(H, "([^?]*?)"), new RegExp("^" + a + "(?:\\?([\\s\\S]*))?$")
        },
        _extractParameters: function(a, b) {
            var d = a.exec(b).slice(1);
            return c.map(d, function(a, b) {
                return b === d.length - 1 ? a || null : a ? decodeURIComponent(a) : null
            })
        }
    });
    var J = b.History = function() {
            this.handlers = [], this.checkUrl = c.bind(this.checkUrl, this), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
        },
        K = /^[#\/]|\s+$/g,
        L = /^\/+|\/+$/g,
        M = /#.*$/;
    J.started = !1, c.extend(J.prototype, k, {
        interval: 50,
        atRoot: function() {
            var a = this.location.pathname.replace(/[^\/]$/, "$&/");
            return a === this.root && !this.getSearch()
        },
        matchRoot: function() {
            var a = this.decodeFragment(this.location.pathname),
                b = a.slice(0, this.root.length - 1) + "/";
            return b === this.root
        },
        decodeFragment: function(a) {
            return decodeURI(a.replace(/%25/g, "%2525"))
        },
        getSearch: function() {
            var a = this.location.href.replace(/#.*/, "").match(/\?.+/);
            return a ? a[0] : ""
        },
        getHash: function(a) {
            var b = (a || this).location.href.match(/#(.*)$/);
            return b ? b[1] : ""
        },
        getPath: function() {
            var a = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
            return "/" === a.charAt(0) ? a.slice(1) : a
        },
        getFragment: function(a) {
            return null == a && (a = this._usePushState || !this._wantsHashChange ? this.getPath() : this.getHash()), a.replace(K, "")
        },
        start: function(a) {
            if (J.started) throw new Error("Backbone.history has already been started");
            if (J.started = !0, this.options = c.extend({
                    root: "/"
                }, this.options, a), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._hasHashChange = "onhashchange" in window && (void 0 === document.documentMode || document.documentMode > 7), this._useHashChange = this._wantsHashChange && this._hasHashChange, this._wantsPushState = !!this.options.pushState, this._hasPushState = !(!this.history || !this.history.pushState), this._usePushState = this._wantsPushState && this._hasPushState, this.fragment = this.getFragment(), this.root = ("/" + this.root + "/").replace(L, "/"), this._wantsHashChange && this._wantsPushState) {
                if (!this._hasPushState && !this.atRoot()) {
                    var b = this.root.slice(0, -1) || "/";
                    return this.location.replace(b + "#" + this.getPath()), !0
                }
                this._hasPushState && this.atRoot() && this.navigate(this.getHash(), {
                    replace: !0
                })
            }
            if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
                this.iframe = document.createElement("iframe"), this.iframe.src = "javascript:0", this.iframe.style.display = "none", this.iframe.tabIndex = -1;
                var d = document.body,
                    e = d.insertBefore(this.iframe, d.firstChild).contentWindow;
                e.document.open(), e.document.close(), e.location.hash = "#" + this.fragment
            }
            var f = window.addEventListener || function(a, b) {
                return attachEvent("on" + a, b)
            };
            if (this._usePushState ? f("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe ? f("hashchange", this.checkUrl, !1) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), !this.options.silent) return this.loadUrl()
        },
        stop: function() {
            var a = window.removeEventListener || function(a, b) {
                return detachEvent("on" + a, b)
            };
            this._usePushState ? a("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe && a("hashchange", this.checkUrl, !1), this.iframe && (document.body.removeChild(this.iframe), this.iframe = null), this._checkUrlInterval && clearInterval(this._checkUrlInterval), J.started = !1
        },
        route: function(a, b) {
            this.handlers.unshift({
                route: a,
                callback: b
            })
        },
        checkUrl: function(a) {
            var b = this.getFragment();
            return b === this.fragment && this.iframe && (b = this.getHash(this.iframe.contentWindow)), b !== this.fragment && (this.iframe && this.navigate(b), void this.loadUrl())
        },
        loadUrl: function(a) {
            return !!this.matchRoot() && (a = this.fragment = this.getFragment(a), c.some(this.handlers, function(b) {
                if (b.route.test(a)) return b.callback(a), !0
            }))
        },
        navigate: function(a, b) {
            if (!J.started) return !1;
            b && b !== !0 || (b = {
                trigger: !!b
            }), a = this.getFragment(a || "");
            var c = this.root;
            "" !== a && "?" !== a.charAt(0) || (c = c.slice(0, -1) || "/");
            var d = c + a;
            if (a = this.decodeFragment(a.replace(M, "")), this.fragment !== a) {
                if (this.fragment = a, this._usePushState) this.history[b.replace ? "replaceState" : "pushState"]({}, document.title, d);
                else {
                    if (!this._wantsHashChange) return this.location.assign(d);
                    if (this._updateHash(this.location, a, b.replace), this.iframe && a !== this.getHash(this.iframe.contentWindow)) {
                        var e = this.iframe.contentWindow;
                        b.replace || (e.document.open(), e.document.close()), this._updateHash(e.location, a, b.replace)
                    }
                }
                return b.trigger ? this.loadUrl(a) : void 0
            }
        },
        _updateHash: function(a, b, c) {
            if (c) {
                var d = a.href.replace(/(javascript:|#).*$/, "");
                a.replace(d + "#" + b)
            } else a.hash = "#" + b
        }
    }), b.history = new J;
    var N = function(a, b) {
        var d, e = this;
        return d = a && c.has(a, "constructor") ? a.constructor : function() {
            return e.apply(this, arguments)
        }, c.extend(d, e, b), d.prototype = c.create(e.prototype, a), d.prototype.constructor = d, d.__super__ = e.prototype, d
    };
    t.extend = v.extend = E.extend = A.extend = J.extend = N;
    var O = function() {
            throw new Error('A "url" property or function must be specified')
        },
        P = function(a, b) {
            var c = b.error;
            b.error = function(d) {
                c && c.call(b.context, a, d, b), a.trigger("error", a, d, b)
            }
        };
    return b
});
/*!
 * Includes BabySitter
 * https://github.com/marionettejs/backbone.babysitter/
 *
 * Includes Wreqr
 * https://github.com/marionettejs/backbone.wreqr/
 */
(function(t, e) {
    if ("function" == typeof define && define.amd) define(["backbone", "underscore"], function(i, n) {
        return t.Marionette = t.Mn = e(t, i, n)
    });
    else if ("undefined" != typeof exports) {
        var i = require("backbone"),
            n = require("underscore");
        module.exports = e(t, i, n)
    } else t.Marionette = t.Mn = e(t, t.Backbone, t._)
})(this, function(t, e, i) {
    "use strict";
    (function(t, e) {
        var i = t.ChildViewContainer;
        return t.ChildViewContainer = function(t, e) {
            var i = function(t) {
                this._views = {}, this._indexByModel = {}, this._indexByCustom = {}, this._updateLength(), e.each(t, this.add, this)
            };
            e.extend(i.prototype, {
                add: function(t, e) {
                    var i = t.cid;
                    return this._views[i] = t, t.model && (this._indexByModel[t.model.cid] = i), e && (this._indexByCustom[e] = i), this._updateLength(), this
                },
                findByModel: function(t) {
                    return this.findByModelCid(t.cid)
                },
                findByModelCid: function(t) {
                    var e = this._indexByModel[t];
                    return this.findByCid(e)
                },
                findByCustom: function(t) {
                    var e = this._indexByCustom[t];
                    return this.findByCid(e)
                },
                findByIndex: function(t) {
                    return e.values(this._views)[t]
                },
                findByCid: function(t) {
                    return this._views[t]
                },
                remove: function(t) {
                    var i = t.cid;
                    return t.model && delete this._indexByModel[t.model.cid], e.any(this._indexByCustom, function(t, e) {
                        return t === i ? (delete this._indexByCustom[e], !0) : void 0
                    }, this), delete this._views[i], this._updateLength(), this
                },
                call: function(t) {
                    this.apply(t, e.tail(arguments))
                },
                apply: function(t, i) {
                    e.each(this._views, function(n) {
                        e.isFunction(n[t]) && n[t].apply(n, i || [])
                    })
                },
                _updateLength: function() {
                    this.length = e.size(this._views)
                }
            });
            var n = ["forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck", "reduce"];
            return e.each(n, function(t) {
                i.prototype[t] = function() {
                    var i = e.values(this._views),
                        n = [i].concat(e.toArray(arguments));
                    return e[t].apply(e, n)
                }
            }), i
        }(t, e), t.ChildViewContainer.VERSION = "0.1.7", t.ChildViewContainer.noConflict = function() {
            return t.ChildViewContainer = i, this
        }, t.ChildViewContainer
    })(e, i),
    function(t, e) {
        var i = t.Wreqr,
            n = t.Wreqr = {};
        return t.Wreqr.VERSION = "1.3.3", t.Wreqr.noConflict = function() {
            return t.Wreqr = i, this
        }, n.Handlers = function(t, e) {
            var i = function(t) {
                this.options = t, this._wreqrHandlers = {}, e.isFunction(this.initialize) && this.initialize(t)
            };
            return i.extend = t.Model.extend, e.extend(i.prototype, t.Events, {
                setHandlers: function(t) {
                    e.each(t, function(t, i) {
                        var n = null;
                        e.isObject(t) && !e.isFunction(t) && (n = t.context, t = t.callback), this.setHandler(i, t, n)
                    }, this)
                },
                setHandler: function(t, e, i) {
                    var n = {
                        callback: e,
                        context: i
                    };
                    this._wreqrHandlers[t] = n, this.trigger("handler:add", t, e, i)
                },
                hasHandler: function(t) {
                    return !!this._wreqrHandlers[t]
                },
                getHandler: function(t) {
                    var e = this._wreqrHandlers[t];
                    if (e) return function() {
                        return e.callback.apply(e.context, arguments)
                    }
                },
                removeHandler: function(t) {
                    delete this._wreqrHandlers[t]
                },
                removeAllHandlers: function() {
                    this._wreqrHandlers = {}
                }
            }), i
        }(t, e), n.CommandStorage = function() {
            var i = function(t) {
                this.options = t, this._commands = {}, e.isFunction(this.initialize) && this.initialize(t)
            };
            return e.extend(i.prototype, t.Events, {
                getCommands: function(t) {
                    var e = this._commands[t];
                    return e || (e = {
                        command: t,
                        instances: []
                    }, this._commands[t] = e), e
                },
                addCommand: function(t, e) {
                    var i = this.getCommands(t);
                    i.instances.push(e)
                },
                clearCommands: function(t) {
                    var e = this.getCommands(t);
                    e.instances = []
                }
            }), i
        }(), n.Commands = function(t, e) {
            return t.Handlers.extend({
                storageType: t.CommandStorage,
                constructor: function(e) {
                    this.options = e || {}, this._initializeStorage(this.options), this.on("handler:add", this._executeCommands, this), t.Handlers.prototype.constructor.apply(this, arguments)
                },
                execute: function(t) {
                    t = arguments[0];
                    var i = e.rest(arguments);
                    this.hasHandler(t) ? this.getHandler(t).apply(this, i) : this.storage.addCommand(t, i)
                },
                _executeCommands: function(t, i, n) {
                    var r = this.storage.getCommands(t);
                    e.each(r.instances, function(t) {
                        i.apply(n, t)
                    }), this.storage.clearCommands(t)
                },
                _initializeStorage: function(t) {
                    var i, n = t.storageType || this.storageType;
                    i = e.isFunction(n) ? new n : n, this.storage = i
                }
            })
        }(n, e), n.RequestResponse = function(t, e) {
            return t.Handlers.extend({
                request: function(t) {
                    return this.hasHandler(t) ? this.getHandler(t).apply(this, e.rest(arguments)) : void 0
                }
            })
        }(n, e), n.EventAggregator = function(t, e) {
            var i = function() {};
            return i.extend = t.Model.extend, e.extend(i.prototype, t.Events), i
        }(t, e), n.Channel = function() {
            var i = function(e) {
                this.vent = new t.Wreqr.EventAggregator, this.reqres = new t.Wreqr.RequestResponse, this.commands = new t.Wreqr.Commands, this.channelName = e
            };
            return e.extend(i.prototype, {
                reset: function() {
                    return this.vent.off(), this.vent.stopListening(), this.reqres.removeAllHandlers(), this.commands.removeAllHandlers(), this
                },
                connectEvents: function(t, e) {
                    return this._connect("vent", t, e), this
                },
                connectCommands: function(t, e) {
                    return this._connect("commands", t, e), this
                },
                connectRequests: function(t, e) {
                    return this._connect("reqres", t, e), this
                },
                _connect: function(t, i, n) {
                    if (i) {
                        n = n || this;
                        var r = "vent" === t ? "on" : "setHandler";
                        e.each(i, function(i, s) {
                            this[t][r](s, e.bind(i, n))
                        }, this)
                    }
                }
            }), i
        }(n), n.radio = function(t, e) {
            var i = function() {
                this._channels = {}, this.vent = {}, this.commands = {}, this.reqres = {}, this._proxyMethods()
            };
            e.extend(i.prototype, {
                channel: function(t) {
                    if (!t) throw Error("Channel must receive a name");
                    return this._getChannel(t)
                },
                _getChannel: function(e) {
                    var i = this._channels[e];
                    return i || (i = new t.Channel(e), this._channels[e] = i), i
                },
                _proxyMethods: function() {
                    e.each(["vent", "commands", "reqres"], function(t) {
                        e.each(n[t], function(e) {
                            this[t][e] = r(this, t, e)
                        }, this)
                    }, this)
                }
            });
            var n = {
                    vent: ["on", "off", "trigger", "once", "stopListening", "listenTo", "listenToOnce"],
                    commands: ["execute", "setHandler", "setHandlers", "removeHandler", "removeAllHandlers"],
                    reqres: ["request", "setHandler", "setHandlers", "removeHandler", "removeAllHandlers"]
                },
                r = function(t, i, n) {
                    return function(r) {
                        var s = t._getChannel(r)[i];
                        return s[n].apply(s, e.rest(arguments))
                    }
                };
            return new i
        }(n, e), t.Wreqr
    }(e, i);
    var n = t.Marionette,
        r = t.Mn,
        s = e.Marionette = {};
    s.VERSION = "2.4.2", s.noConflict = function() {
        return t.Marionette = n, t.Mn = r, this
    }, e.Marionette = s, s.Deferred = e.$.Deferred, s.extend = e.Model.extend, s.isNodeAttached = function(t) {
        return e.$.contains(document.documentElement, t)
    }, s.mergeOptions = function(t, e) {
        t && i.extend(this, i.pick(t, e))
    }, s.getOption = function(t, e) {
        return t && e ? t.options && void 0 !== t.options[e] ? t.options[e] : t[e] : void 0
    }, s.proxyGetOption = function(t) {
        return s.getOption(this, t)
    }, s._getValue = function(t, e, n) {
        return i.isFunction(t) && (t = n ? t.apply(e, n) : t.call(e)), t
    }, s.normalizeMethods = function(t) {
        return i.reduce(t, function(t, e, n) {
            return i.isFunction(e) || (e = this[e]), e && (t[n] = e), t
        }, {}, this)
    }, s.normalizeUIString = function(t, e) {
        return t.replace(/@ui\.[a-zA-Z_$0-9]*/g, function(t) {
            return e[t.slice(4)]
        })
    }, s.normalizeUIKeys = function(t, e) {
        return i.reduce(t, function(t, i, n) {
            var r = s.normalizeUIString(n, e);
            return t[r] = i, t
        }, {})
    }, s.normalizeUIValues = function(t, e, n) {
        return i.each(t, function(r, o) {
            i.isString(r) ? t[o] = s.normalizeUIString(r, e) : i.isObject(r) && i.isArray(n) && (i.extend(r, s.normalizeUIValues(i.pick(r, n), e)), i.each(n, function(t) {
                var n = r[t];
                i.isString(n) && (r[t] = s.normalizeUIString(n, e))
            }))
        }), t
    }, s.actAsCollection = function(t, e) {
        var n = ["forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck"];
        i.each(n, function(n) {
            t[n] = function() {
                var t = i.values(i.result(this, e)),
                    r = [t].concat(i.toArray(arguments));
                return i[n].apply(i, r)
            }
        })
    };
    var o = s.deprecate = function(t, e) {
        i.isObject(t) && (t = t.prev + " is going to be removed in the future. " + "Please use " + t.next + " instead." + (t.url ? " See: " + t.url : "")), void 0 !== e && e || o._cache[t] || (o._warn("Deprecation warning: " + t), o._cache[t] = !0)
    };
    o._warn = "undefined" != typeof console && (console.warn || console.log) || function() {}, o._cache = {}, s._triggerMethod = function() {
            function t(t, e, i) {
                return i.toUpperCase()
            }
            var e = /(^|:)(\w)/gi;
            return function(n, r, s) {
                var o = 3 > arguments.length;
                o && (s = r, r = s[0]);
                var h, a = "on" + r.replace(e, t),
                    d = n[a];
                return i.isFunction(d) && (h = d.apply(n, o ? i.rest(s) : s)), i.isFunction(n.trigger) && (o + s.length > 1 ? n.trigger.apply(n, o ? s : [r].concat(i.drop(s, 0))) : n.trigger(r)), h
            }
        }(), s.triggerMethod = function() {
            return s._triggerMethod(this, arguments)
        }, s.triggerMethodOn = function(t) {
            var e = i.isFunction(t.triggerMethod) ? t.triggerMethod : s.triggerMethod;
            return e.apply(t, i.rest(arguments))
        }, s.MonitorDOMRefresh = function(t) {
            function e() {
                t._isShown = !0, r()
            }

            function n() {
                t._isRendered = !0, r()
            }

            function r() {
                t._isShown && t._isRendered && s.isNodeAttached(t.el) && i.isFunction(t.triggerMethod) && t.triggerMethod("dom:refresh")
            }
            t.on({
                show: e,
                render: n
            })
        },
        function(t) {
            function e(e, n, r, s) {
                var o = s.split(/\s+/);
                i.each(o, function(i) {
                    var s = e[i];
                    if (!s) throw new t.Error('Method "' + i + '" was configured as an event handler, but does not exist.');
                    e.listenTo(n, r, s)
                })
            }

            function n(t, e, i, n) {
                t.listenTo(e, i, n)
            }

            function r(t, e, n, r) {
                var s = r.split(/\s+/);
                i.each(s, function(i) {
                    var r = t[i];
                    t.stopListening(e, n, r)
                })
            }

            function s(t, e, i, n) {
                t.stopListening(e, i, n)
            }

            function o(e, n, r, s, o) {
                if (n && r) {
                    if (!i.isObject(r)) throw new t.Error({
                        message: "Bindings must be an object or function.",
                        url: "marionette.functions.html#marionettebindentityevents"
                    });
                    r = t._getValue(r, e), i.each(r, function(t, r) {
                        i.isFunction(t) ? s(e, n, r, t) : o(e, n, r, t)
                    })
                }
            }
            t.bindEntityEvents = function(t, i, r) {
                o(t, i, r, n, e)
            }, t.unbindEntityEvents = function(t, e, i) {
                o(t, e, i, s, r)
            }, t.proxyBindEntityEvents = function(e, i) {
                return t.bindEntityEvents(this, e, i)
            }, t.proxyUnbindEntityEvents = function(e, i) {
                return t.unbindEntityEvents(this, e, i)
            }
        }(s);
    var h = ["description", "fileName", "lineNumber", "name", "message", "number"];
    return s.Error = s.extend.call(Error, {
        urlRoot: "http://marionettejs.com/docs/v" + s.VERSION + "/",
        constructor: function(t, e) {
            i.isObject(t) ? (e = t, t = e.message) : e || (e = {});
            var n = Error.call(this, t);
            i.extend(this, i.pick(n, h), i.pick(e, h)), this.captureStackTrace(), e.url && (this.url = this.urlRoot + e.url)
        },
        captureStackTrace: function() {
            Error.captureStackTrace && Error.captureStackTrace(this, s.Error)
        },
        toString: function() {
            return this.name + ": " + this.message + (this.url ? " See: " + this.url : "")
        }
    }), s.Error.extend = s.extend, s.Callbacks = function() {
        this._deferred = s.Deferred(), this._callbacks = []
    }, i.extend(s.Callbacks.prototype, {
        add: function(t, e) {
            var n = i.result(this._deferred, "promise");
            this._callbacks.push({
                cb: t,
                ctx: e
            }), n.then(function(i) {
                e && (i.context = e), t.call(i.context, i.options)
            })
        },
        run: function(t, e) {
            this._deferred.resolve({
                options: t,
                context: e
            })
        },
        reset: function() {
            var t = this._callbacks;
            this._deferred = s.Deferred(), this._callbacks = [], i.each(t, function(t) {
                this.add(t.cb, t.ctx)
            }, this)
        }
    }), s.Controller = function(t) {
        this.options = t || {}, i.isFunction(this.initialize) && this.initialize(this.options)
    }, s.Controller.extend = s.extend, i.extend(s.Controller.prototype, e.Events, {
        destroy: function() {
            return s._triggerMethod(this, "before:destroy", arguments), s._triggerMethod(this, "destroy", arguments), this.stopListening(), this.off(), this
        },
        triggerMethod: s.triggerMethod,
        mergeOptions: s.mergeOptions,
        getOption: s.proxyGetOption
    }), s.Object = function(t) {
        this.options = i.extend({}, i.result(this, "options"), t), this.initialize.apply(this, arguments)
    }, s.Object.extend = s.extend, i.extend(s.Object.prototype, e.Events, {
        initialize: function() {},
        destroy: function() {
            return this.triggerMethod("before:destroy"), this.triggerMethod("destroy"), this.stopListening(), this
        },
        triggerMethod: s.triggerMethod,
        mergeOptions: s.mergeOptions,
        getOption: s.proxyGetOption,
        bindEntityEvents: s.proxyBindEntityEvents,
        unbindEntityEvents: s.proxyUnbindEntityEvents
    }), s.Region = s.Object.extend({
        constructor: function(t) {
            if (this.options = t || {}, this.el = this.getOption("el"), this.el = this.el instanceof e.$ ? this.el[0] : this.el, !this.el) throw new s.Error({
                name: "NoElError",
                message: 'An "el" must be specified for a region.'
            });
            this.$el = this.getEl(this.el), s.Object.call(this, t)
        },
        show: function(t, e) {
            if (this._ensureElement()) {
                this._ensureViewIsIntact(t);
                var n = e || {},
                    r = t !== this.currentView,
                    o = !!n.preventDestroy,
                    h = !!n.forceShow,
                    a = !!this.currentView,
                    d = r && !o,
                    l = r || h;
                if (a && this.triggerMethod("before:swapOut", this.currentView, this, e), this.currentView && delete this.currentView._parent, d ? this.empty() : a && l && this.currentView.off("destroy", this.empty, this), l) {
                    t.once("destroy", this.empty, this), t.render(), t._parent = this, a && this.triggerMethod("before:swap", t, this, e), this.triggerMethod("before:show", t, this, e), s.triggerMethodOn(t, "before:show", t, this, e), a && this.triggerMethod("swapOut", this.currentView, this, e);
                    var c = s.isNodeAttached(this.el),
                        u = [],
                        g = i.extend({
                            triggerBeforeAttach: this.triggerBeforeAttach,
                            triggerAttach: this.triggerAttach
                        }, n);
                    return c && g.triggerBeforeAttach && (u = this._displayedViews(t), this._triggerAttach(u, "before:")), this.attachHtml(t), this.currentView = t, c && g.triggerAttach && (u = this._displayedViews(t), this._triggerAttach(u)), a && this.triggerMethod("swap", t, this, e), this.triggerMethod("show", t, this, e), s.triggerMethodOn(t, "show", t, this, e), this
                }
                return this
            }
        },
        triggerBeforeAttach: !0,
        triggerAttach: !0,
        _triggerAttach: function(t, e) {
            var n = (e || "") + "attach";
            i.each(t, function(t) {
                s.triggerMethodOn(t, n, t, this)
            }, this)
        },
        _displayedViews: function(t) {
            return i.union([t], i.result(t, "_getNestedViews") || [])
        },
        _ensureElement: function() {
            if (i.isObject(this.el) || (this.$el = this.getEl(this.el), this.el = this.$el[0]), !this.$el || 0 === this.$el.length) {
                if (this.getOption("allowMissingEl")) return !1;
                throw new s.Error('An "el" ' + this.$el.selector + " must exist in DOM")
            }
            return !0
        },
        _ensureViewIsIntact: function(t) {
            if (!t) throw new s.Error({
                name: "ViewNotValid",
                message: "The view passed is undefined and therefore invalid. You must pass a view instance to show."
            });
            if (t.isDestroyed) throw new s.Error({
                name: "ViewDestroyedError",
                message: 'View (cid: "' + t.cid + '") has already been destroyed and cannot be used.'
            })
        },
        getEl: function(t) {
            return e.$(t, s._getValue(this.options.parentEl, this))
        },
        attachHtml: function(t) {
            this.$el.contents().detach(), this.el.appendChild(t.el)
        },
        empty: function(t) {
            var e = this.currentView,
                i = s._getValue(t, "preventDestroy", this);
            return e ? (e.off("destroy", this.empty, this), this.triggerMethod("before:empty", e), i || this._destroyView(), this.triggerMethod("empty", e), delete this.currentView, i && this.$el.contents().detach(), this) : void 0
        },
        _destroyView: function() {
            var t = this.currentView;
            t.destroy && !t.isDestroyed ? t.destroy() : t.remove && (t.remove(), t.isDestroyed = !0)
        },
        attachView: function(t) {
            return this.currentView = t, this
        },
        hasView: function() {
            return !!this.currentView
        },
        reset: function() {
            return this.empty(), this.$el && (this.el = this.$el.selector), delete this.$el, this
        }
    }, {
        buildRegion: function(t, e) {
            if (i.isString(t)) return this._buildRegionFromSelector(t, e);
            if (t.selector || t.el || t.regionClass) return this._buildRegionFromObject(t, e);
            if (i.isFunction(t)) return this._buildRegionFromRegionClass(t);
            throw new s.Error({
                message: "Improper region configuration type.",
                url: "marionette.region.html#region-configuration-types"
            })
        },
        _buildRegionFromSelector: function(t, e) {
            return new e({
                el: t
            })
        },
        _buildRegionFromObject: function(t, e) {
            var n = t.regionClass || e,
                r = i.omit(t, "selector", "regionClass");
            return t.selector && !r.el && (r.el = t.selector), new n(r)
        },
        _buildRegionFromRegionClass: function(t) {
            return new t
        }
    }), s.RegionManager = s.Controller.extend({
        constructor: function(t) {
            this._regions = {}, this.length = 0, s.Controller.call(this, t), this.addRegions(this.getOption("regions"))
        },
        addRegions: function(t, e) {
            return t = s._getValue(t, this, arguments), i.reduce(t, function(t, n, r) {
                return i.isString(n) && (n = {
                    selector: n
                }), n.selector && (n = i.defaults({}, n, e)), t[r] = this.addRegion(r, n), t
            }, {}, this)
        },
        addRegion: function(t, e) {
            var i;
            return i = e instanceof s.Region ? e : s.Region.buildRegion(e, s.Region), this.triggerMethod("before:add:region", t, i), i._parent = this, this._store(t, i), this.triggerMethod("add:region", t, i), i
        },
        get: function(t) {
            return this._regions[t]
        },
        getRegions: function() {
            return i.clone(this._regions)
        },
        removeRegion: function(t) {
            var e = this._regions[t];
            return this._remove(t, e), e
        },
        removeRegions: function() {
            var t = this.getRegions();
            return i.each(this._regions, function(t, e) {
                this._remove(e, t)
            }, this), t
        },
        emptyRegions: function() {
            var t = this.getRegions();
            return i.invoke(t, "empty"), t
        },
        destroy: function() {
            return this.removeRegions(), s.Controller.prototype.destroy.apply(this, arguments)
        },
        _store: function(t, e) {
            this._regions[t] || this.length++, this._regions[t] = e
        },
        _remove: function(t, e) {
            this.triggerMethod("before:remove:region", t, e), e.empty(), e.stopListening(), delete e._parent, delete this._regions[t], this.length--, this.triggerMethod("remove:region", t, e)
        }
    }), s.actAsCollection(s.RegionManager.prototype, "_regions"), s.TemplateCache = function(t) {
        this.templateId = t
    }, i.extend(s.TemplateCache, {
        templateCaches: {},
        get: function(t, e) {
            var i = this.templateCaches[t];
            return i || (i = new s.TemplateCache(t), this.templateCaches[t] = i), i.load(e)
        },
        clear: function() {
            var t, e = i.toArray(arguments),
                n = e.length;
            if (n > 0)
                for (t = 0; n > t; t++) delete this.templateCaches[e[t]];
            else this.templateCaches = {}
        }
    }), i.extend(s.TemplateCache.prototype, {
        load: function(t) {
            if (this.compiledTemplate) return this.compiledTemplate;
            var e = this.loadTemplate(this.templateId, t);
            return this.compiledTemplate = this.compileTemplate(e, t), this.compiledTemplate
        },
        loadTemplate: function(t) {
            var i = e.$(t).html();
            if (!i || 0 === i.length) throw new s.Error({
                name: "NoTemplateError",
                message: 'Could not find template: "' + t + '"'
            });
            return i
        },
        compileTemplate: function(t, e) {
            return i.template(t, e)
        }
    }), s.Renderer = {
        render: function(t, e) {
            if (!t) throw new s.Error({
                name: "TemplateNotFoundError",
                message: "Cannot render the template since its false, null or undefined."
            });
            var n = i.isFunction(t) ? t : s.TemplateCache.get(t);
            return n(e)
        }
    }, s.View = e.View.extend({
        isDestroyed: !1,
        constructor: function(t) {
            i.bindAll(this, "render"), t = s._getValue(t, this), this.options = i.extend({}, i.result(this, "options"), t), this._behaviors = s.Behaviors(this), e.View.call(this, this.options), s.MonitorDOMRefresh(this)
        },
        getTemplate: function() {
            return this.getOption("template")
        },
        serializeModel: function(t) {
            return t.toJSON.apply(t, i.rest(arguments))
        },
        mixinTemplateHelpers: function(t) {
            t = t || {};
            var e = this.getOption("templateHelpers");
            return e = s._getValue(e, this), i.extend(t, e)
        },
        normalizeUIKeys: function(t) {
            var e = i.result(this, "_uiBindings");
            return s.normalizeUIKeys(t, e || i.result(this, "ui"))
        },
        normalizeUIValues: function(t, e) {
            var n = i.result(this, "ui"),
                r = i.result(this, "_uiBindings");
            return s.normalizeUIValues(t, r || n, e)
        },
        configureTriggers: function() {
            if (this.triggers) {
                var t = this.normalizeUIKeys(i.result(this, "triggers"));
                return i.reduce(t, function(t, e, i) {
                    return t[i] = this._buildViewTrigger(e), t
                }, {}, this)
            }
        },
        delegateEvents: function(t) {
            return this._delegateDOMEvents(t), this.bindEntityEvents(this.model, this.getOption("modelEvents")), this.bindEntityEvents(this.collection, this.getOption("collectionEvents")), i.each(this._behaviors, function(t) {
                t.bindEntityEvents(this.model, t.getOption("modelEvents")), t.bindEntityEvents(this.collection, t.getOption("collectionEvents"))
            }, this), this
        },
        _delegateDOMEvents: function(t) {
            var n = s._getValue(t || this.events, this);
            n = this.normalizeUIKeys(n), i.isUndefined(t) && (this.events = n);
            var r = {},
                o = i.result(this, "behaviorEvents") || {},
                h = this.configureTriggers(),
                a = i.result(this, "behaviorTriggers") || {};
            i.extend(r, o, n, h, a), e.View.prototype.delegateEvents.call(this, r)
        },
        undelegateEvents: function() {
            return e.View.prototype.undelegateEvents.apply(this, arguments), this.unbindEntityEvents(this.model, this.getOption("modelEvents")), this.unbindEntityEvents(this.collection, this.getOption("collectionEvents")), i.each(this._behaviors, function(t) {
                t.unbindEntityEvents(this.model, t.getOption("modelEvents")), t.unbindEntityEvents(this.collection, t.getOption("collectionEvents"))
            }, this), this
        },
        _ensureViewIsIntact: function() {
            if (this.isDestroyed) throw new s.Error({
                name: "ViewDestroyedError",
                message: 'View (cid: "' + this.cid + '") has already been destroyed and cannot be used.'
            })
        },
        destroy: function() {
            if (this.isDestroyed) return this;
            var t = i.toArray(arguments);
            return this.triggerMethod.apply(this, ["before:destroy"].concat(t)), this.isDestroyed = !0, this.triggerMethod.apply(this, ["destroy"].concat(t)), this.unbindUIElements(), this.isRendered = !1, this.remove(), i.invoke(this._behaviors, "destroy", t), this
        },
        bindUIElements: function() {
            this._bindUIElements(), i.invoke(this._behaviors, this._bindUIElements)
        },
        _bindUIElements: function() {
            if (this.ui) {
                this._uiBindings || (this._uiBindings = this.ui);
                var t = i.result(this, "_uiBindings");
                this.ui = {}, i.each(t, function(t, e) {
                    this.ui[e] = this.$(t)
                }, this)
            }
        },
        unbindUIElements: function() {
            this._unbindUIElements(), i.invoke(this._behaviors, this._unbindUIElements)
        },
        _unbindUIElements: function() {
            this.ui && this._uiBindings && (i.each(this.ui, function(t, e) {
                delete this.ui[e]
            }, this), this.ui = this._uiBindings, delete this._uiBindings)
        },
        _buildViewTrigger: function(t) {
            var e = i.isObject(t),
                n = i.defaults({}, e ? t : {}, {
                    preventDefault: !0,
                    stopPropagation: !0
                }),
                r = e ? n.event : t;
            return function(t) {
                t && (t.preventDefault && n.preventDefault && t.preventDefault(), t.stopPropagation && n.stopPropagation && t.stopPropagation());
                var e = {
                    view: this,
                    model: this.model,
                    collection: this.collection
                };
                this.triggerMethod(r, e)
            }
        },
        setElement: function() {
            var t = e.View.prototype.setElement.apply(this, arguments);
            return i.invoke(this._behaviors, "proxyViewProperties", this), t
        },
        triggerMethod: function() {
            var t = s._triggerMethod(this, arguments);
            return this._triggerEventOnBehaviors(arguments), this._triggerEventOnParentLayout(arguments[0], i.rest(arguments)), t
        },
        _triggerEventOnBehaviors: function(t) {
            for (var e = s._triggerMethod, i = this._behaviors, n = 0, r = i && i.length; r > n; n++) e(i[n], t)
        },
        _triggerEventOnParentLayout: function(t, e) {
            var n = this._parentLayoutView();
            if (n) {
                var r = s.getOption(n, "childViewEventPrefix"),
                    o = r + ":" + t;
                s._triggerMethod(n, [o, this].concat(e));
                var h = s.getOption(n, "childEvents"),
                    a = n.normalizeMethods(h);
                a && i.isFunction(a[t]) && a[t].apply(n, [this].concat(e))
            }
        },
        _getImmediateChildren: function() {
            return []
        },
        _getNestedViews: function() {
            var t = this._getImmediateChildren();
            return t.length ? i.reduce(t, function(t, e) {
                return e._getNestedViews ? t.concat(e._getNestedViews()) : t
            }, t) : t
        },
        _getAncestors: function() {
            for (var t = [], e = this._parent; e;) t.push(e), e = e._parent;
            return t
        },
        _parentLayoutView: function() {
            var t = this._getAncestors();
            return i.find(t, function(t) {
                return t instanceof s.LayoutView
            })
        },
        normalizeMethods: s.normalizeMethods,
        mergeOptions: s.mergeOptions,
        getOption: s.proxyGetOption,
        bindEntityEvents: s.proxyBindEntityEvents,
        unbindEntityEvents: s.proxyUnbindEntityEvents
    }), s.ItemView = s.View.extend({
        constructor: function() {
            s.View.apply(this, arguments)
        },
        serializeData: function() {
            if (!this.model && !this.collection) return {};
            var t = [this.model || this.collection];
            return arguments.length && t.push.apply(t, arguments), this.model ? this.serializeModel.apply(this, t) : {
                items: this.serializeCollection.apply(this, t)
            }
        },
        serializeCollection: function(t) {
            return t.toJSON.apply(t, i.rest(arguments))
        },
        render: function() {
            return this._ensureViewIsIntact(), this.triggerMethod("before:render", this), this._renderTemplate(), this.isRendered = !0, this.bindUIElements(), this.triggerMethod("render", this), this
        },
        _renderTemplate: function() {
            var t = this.getTemplate();
            if (t !== !1) {
                if (!t) throw new s.Error({
                    name: "UndefinedTemplateError",
                    message: "Cannot render the template since it is null or undefined."
                });
                var e = this.mixinTemplateHelpers(this.serializeData()),
                    i = s.Renderer.render(t, e, this);
                return this.attachElContent(i), this
            }
        },
        attachElContent: function(t) {
            return this.$el.html(t), this
        }
    }), s.CollectionView = s.View.extend({
        childViewEventPrefix: "childview",
        sort: !0,
        constructor: function() {
            this.once("render", this._initialEvents), this._initChildViewStorage(), s.View.apply(this, arguments), this.on({
                "before:show": this._onBeforeShowCalled,
                show: this._onShowCalled,
                "before:attach": this._onBeforeAttachCalled,
                attach: this._onAttachCalled
            }), this.initRenderBuffer()
        },
        initRenderBuffer: function() {
            this._bufferedChildren = []
        },
        startBuffering: function() {
            this.initRenderBuffer(), this.isBuffering = !0
        },
        endBuffering: function() {
            var t, e = this._isShown && s.isNodeAttached(this.el);
            this.isBuffering = !1, this._isShown && this._triggerMethodMany(this._bufferedChildren, this, "before:show"), e && this._triggerBeforeAttach && (t = this._getNestedViews(), this._triggerMethodMany(t, this, "before:attach")), this.attachBuffer(this, this._createBuffer()), e && this._triggerAttach && (t = this._getNestedViews(), this._triggerMethodMany(t, this, "attach")), this._isShown && this._triggerMethodMany(this._bufferedChildren, this, "show"), this.initRenderBuffer()
        },
        _triggerMethodMany: function(t, e, n) {
            var r = i.drop(arguments, 3);
            i.each(t, function(t) {
                s.triggerMethodOn.apply(t, [t, n, t, e].concat(r))
            })
        },
        _initialEvents: function() {
            this.collection && (this.listenTo(this.collection, "add", this._onCollectionAdd), this.listenTo(this.collection, "remove", this._onCollectionRemove), this.listenTo(this.collection, "reset", this.render), this.getOption("sort") && this.listenTo(this.collection, "sort", this._sortViews))
        },
        _onCollectionAdd: function(t, e, n) {
            var r;
            if (r = void 0 !== n.at ? n.at : i.indexOf(this._filteredSortedModels(), t), this._shouldAddChild(t, r)) {
                this.destroyEmptyView();
                var s = this.getChildView(t);
                this.addChild(t, s, r)
            }
        },
        _onCollectionRemove: function(t) {
            var e = this.children.findByModel(t);
            this.removeChildView(e), this.checkEmpty()
        },
        _onBeforeShowCalled: function() {
            this._triggerBeforeAttach = this._triggerAttach = !1, this.children.each(function(t) {
                s.triggerMethodOn(t, "before:show", t)
            })
        },
        _onShowCalled: function() {
            this.children.each(function(t) {
                s.triggerMethodOn(t, "show", t)
            })
        },
        _onBeforeAttachCalled: function() {
            this._triggerBeforeAttach = !0
        },
        _onAttachCalled: function() {
            this._triggerAttach = !0
        },
        render: function() {
            return this._ensureViewIsIntact(), this.triggerMethod("before:render", this), this._renderChildren(), this.isRendered = !0, this.triggerMethod("render", this), this
        },
        reorder: function() {
            var t = this.children,
                e = this._filteredSortedModels(),
                n = i.find(e, function(e) {
                    return !t.findByModel(e)
                });
            if (n) this.render();
            else {
                var r = i.map(e, function(e, i) {
                    var n = t.findByModel(e);
                    return n._index = i, n.el
                });
                this.triggerMethod("before:reorder"), this._appendReorderedChildren(r), this.triggerMethod("reorder")
            }
        },
        resortView: function() {
            s.getOption(this, "reorderOnSort") ? this.reorder() : this.render()
        },
        _sortViews: function() {
            var t = this._filteredSortedModels(),
                e = i.find(t, function(t, e) {
                    var i = this.children.findByModel(t);
                    return !i || i._index !== e
                }, this);
            e && this.resortView()
        },
        _emptyViewIndex: -1,
        _appendReorderedChildren: function(t) {
            this.$el.append(t)
        },
        _renderChildren: function() {
            this.destroyEmptyView(), this.destroyChildren({
                checkEmpty: !1
            }), this.isEmpty(this.collection) ? this.showEmptyView() : (this.triggerMethod("before:render:collection", this), this.startBuffering(), this.showCollection(), this.endBuffering(), this.triggerMethod("render:collection", this), this.children.isEmpty() && this.showEmptyView())
        },
        showCollection: function() {
            var t, e = this._filteredSortedModels();
            i.each(e, function(e, i) {
                t = this.getChildView(e), this.addChild(e, t, i)
            }, this)
        },
        _filteredSortedModels: function() {
            var t, e = this.getViewComparator();
            return t = e ? i.isString(e) || 1 === e.length ? this.collection.sortBy(e, this) : i.clone(this.collection.models).sort(i.bind(e, this)) : this.collection.models, this.getOption("filter") && (t = i.filter(t, function(t, e) {
                return this._shouldAddChild(t, e)
            }, this)), t
        },
        showEmptyView: function() {
            var t = this.getEmptyView();
            if (t && !this._showingEmptyView) {
                this.triggerMethod("before:render:empty"), this._showingEmptyView = !0;
                var i = new e.Model;
                this.addEmptyView(i, t), this.triggerMethod("render:empty")
            }
        },
        destroyEmptyView: function() {
            this._showingEmptyView && (this.triggerMethod("before:remove:empty"), this.destroyChildren(), delete this._showingEmptyView, this.triggerMethod("remove:empty"))
        },
        getEmptyView: function() {
            return this.getOption("emptyView")
        },
        addEmptyView: function(t, e) {
            var n, r = this._isShown && !this.isBuffering && s.isNodeAttached(this.el),
                o = this.getOption("emptyViewOptions") || this.getOption("childViewOptions");
            i.isFunction(o) && (o = o.call(this, t, this._emptyViewIndex));
            var h = this.buildChildView(t, e, o);
            h._parent = this, this.proxyChildEvents(h), this._isShown && s.triggerMethodOn(h, "before:show", h), this.children.add(h), r && this._triggerBeforeAttach && (n = [h].concat(h._getNestedViews()), h.once("render", function() {
                this._triggerMethodMany(n, this, "before:attach")
            }, this)), this.renderChildView(h, this._emptyViewIndex), r && this._triggerAttach && (n = [h].concat(h._getNestedViews()), this._triggerMethodMany(n, this, "attach")), this._isShown && s.triggerMethodOn(h, "show", h)
        },
        getChildView: function() {
            var t = this.getOption("childView");
            if (!t) throw new s.Error({
                name: "NoChildViewError",
                message: 'A "childView" must be specified'
            });
            return t
        },
        addChild: function(t, e, i) {
            var n = this.getOption("childViewOptions");
            n = s._getValue(n, this, [t, i]);
            var r = this.buildChildView(t, e, n);
            return this._updateIndices(r, !0, i), this.triggerMethod("before:add:child", r), this._addChildView(r, i), this.triggerMethod("add:child", r), r._parent = this, r
        },
        _updateIndices: function(t, e, i) {
            this.getOption("sort") && (e && (t._index = i), this.children.each(function(i) {
                i._index >= t._index && (i._index += e ? 1 : -1)
            }))
        },
        _addChildView: function(t, e) {
            var i, n = this._isShown && !this.isBuffering && s.isNodeAttached(this.el);
            this.proxyChildEvents(t), this._isShown && !this.isBuffering && s.triggerMethodOn(t, "before:show", t), this.children.add(t), n && this._triggerBeforeAttach && (i = [t].concat(t._getNestedViews()), t.once("render", function() {
                this._triggerMethodMany(i, this, "before:attach")
            }, this)), this.renderChildView(t, e), n && this._triggerAttach && (i = [t].concat(t._getNestedViews()), this._triggerMethodMany(i, this, "attach")), this._isShown && !this.isBuffering && s.triggerMethodOn(t, "show", t)
        },
        renderChildView: function(t, e) {
            return t.render(), this.attachHtml(this, t, e), t
        },
        buildChildView: function(t, e, n) {
            var r = i.extend({
                model: t
            }, n);
            return new e(r)
        },
        removeChildView: function(t) {
            return t && (this.triggerMethod("before:remove:child", t), t.destroy ? t.destroy() : t.remove && t.remove(), delete t._parent, this.stopListening(t), this.children.remove(t), this.triggerMethod("remove:child", t), this._updateIndices(t, !1)), t
        },
        isEmpty: function() {
            return !this.collection || 0 === this.collection.length
        },
        checkEmpty: function() {
            this.isEmpty(this.collection) && this.showEmptyView()
        },
        attachBuffer: function(t, e) {
            t.$el.append(e)
        },
        _createBuffer: function() {
            var t = document.createDocumentFragment();
            return i.each(this._bufferedChildren, function(e) {
                t.appendChild(e.el)
            }), t
        },
        attachHtml: function(t, e, i) {
            t.isBuffering ? t._bufferedChildren.splice(i, 0, e) : t._insertBefore(e, i) || t._insertAfter(e)
        },
        _insertBefore: function(t, e) {
            var i, n = this.getOption("sort") && this.children.length - 1 > e;
            return n && (i = this.children.find(function(t) {
                return t._index === e + 1
            })), i ? (i.$el.before(t.el), !0) : !1
        },
        _insertAfter: function(t) {
            this.$el.append(t.el)
        },
        _initChildViewStorage: function() {
            this.children = new e.ChildViewContainer
        },
        destroy: function() {
            return this.isDestroyed ? this : (this.triggerMethod("before:destroy:collection"), this.destroyChildren({
                checkEmpty: !1
            }), this.triggerMethod("destroy:collection"), s.View.prototype.destroy.apply(this, arguments))
        },
        destroyChildren: function(t) {
            var e = t || {},
                n = !0,
                r = this.children.map(i.identity);
            return i.isUndefined(e.checkEmpty) || (n = e.checkEmpty), this.children.each(this.removeChildView, this), n && this.checkEmpty(), r
        },
        _shouldAddChild: function(t, e) {
            var n = this.getOption("filter");
            return !i.isFunction(n) || n.call(this, t, e, this.collection)
        },
        proxyChildEvents: function(t) {
            var e = this.getOption("childViewEventPrefix");
            this.listenTo(t, "all", function() {
                var n = i.toArray(arguments),
                    r = n[0],
                    s = this.normalizeMethods(i.result(this, "childEvents"));
                n[0] = e + ":" + r, n.splice(1, 0, t), s !== void 0 && i.isFunction(s[r]) && s[r].apply(this, n.slice(1)), this.triggerMethod.apply(this, n)
            })
        },
        _getImmediateChildren: function() {
            return i.values(this.children._views)
        },
        getViewComparator: function() {
            return this.getOption("viewComparator")
        }
    }), s.CompositeView = s.CollectionView.extend({
        constructor: function() {
            s.CollectionView.apply(this, arguments)
        },
        _initialEvents: function() {
            this.collection && (this.listenTo(this.collection, "add", this._onCollectionAdd), this.listenTo(this.collection, "remove", this._onCollectionRemove), this.listenTo(this.collection, "reset", this._renderChildren), this.getOption("sort") && this.listenTo(this.collection, "sort", this._sortViews))
        },
        getChildView: function() {
            var t = this.getOption("childView") || this.constructor;
            return t
        },
        serializeData: function() {
            var t = {};
            return this.model && (t = i.partial(this.serializeModel, this.model).apply(this, arguments)), t
        },
        render: function() {
            return this._ensureViewIsIntact(), this._isRendering = !0, this.resetChildViewContainer(), this.triggerMethod("before:render", this), this._renderTemplate(), this._renderChildren(), this._isRendering = !1, this.isRendered = !0, this.triggerMethod("render", this), this
        },
        _renderChildren: function() {
            (this.isRendered || this._isRendering) && s.CollectionView.prototype._renderChildren.call(this)
        },
        _renderTemplate: function() {
            var t = {};
            t = this.serializeData(), t = this.mixinTemplateHelpers(t), this.triggerMethod("before:render:template");
            var e = this.getTemplate(),
                i = s.Renderer.render(e, t, this);
            this.attachElContent(i), this.bindUIElements(), this.triggerMethod("render:template")
        },
        attachElContent: function(t) {
            return this.$el.html(t), this
        },
        attachBuffer: function(t, e) {
            var i = this.getChildViewContainer(t);
            i.append(e)
        },
        _insertAfter: function(t) {
            var e = this.getChildViewContainer(this, t);
            e.append(t.el)
        },
        _appendReorderedChildren: function(t) {
            var e = this.getChildViewContainer(this);
            e.append(t)
        },
        getChildViewContainer: function(t) {
            if (t.$childViewContainer) return t.$childViewContainer;
            var e, i = s.getOption(t, "childViewContainer");
            if (i) {
                var n = s._getValue(i, t);
                if (e = "@" === n.charAt(0) && t.ui ? t.ui[n.substr(4)] : t.$(n), 0 >= e.length) throw new s.Error({
                    name: "ChildViewContainerMissingError",
                    message: 'The specified "childViewContainer" was not found: ' + t.childViewContainer
                })
            } else e = t.$el;
            return t.$childViewContainer = e, e
        },
        resetChildViewContainer: function() {
            this.$childViewContainer && (this.$childViewContainer = void 0)
        }
    }), s.LayoutView = s.ItemView.extend({
        regionClass: s.Region,
        options: {
            destroyImmediate: !1
        },
        childViewEventPrefix: "childview",
        constructor: function(t) {
            t = t || {}, this._firstRender = !0, this._initializeRegions(t), s.ItemView.call(this, t)
        },
        render: function() {
            return this._ensureViewIsIntact(), this._firstRender ? this._firstRender = !1 : this._reInitializeRegions(), s.ItemView.prototype.render.apply(this, arguments)
        },
        destroy: function() {
            return this.isDestroyed ? this : (this.getOption("destroyImmediate") === !0 && this.$el.remove(), this.regionManager.destroy(), s.ItemView.prototype.destroy.apply(this, arguments))
        },
        showChildView: function(t, e) {
            return this.getRegion(t).show(e)
        },
        getChildView: function(t) {
            return this.getRegion(t).currentView
        },
        addRegion: function(t, e) {
            var i = {};
            return i[t] = e, this._buildRegions(i)[t]
        },
        addRegions: function(t) {
            return this.regions = i.extend({}, this.regions, t), this._buildRegions(t)
        },
        removeRegion: function(t) {
            return delete this.regions[t], this.regionManager.removeRegion(t)
        },
        getRegion: function(t) {
            return this.regionManager.get(t)
        },
        getRegions: function() {
            return this.regionManager.getRegions()
        },
        _buildRegions: function(t) {
            var e = {
                regionClass: this.getOption("regionClass"),
                parentEl: i.partial(i.result, this, "el")
            };
            return this.regionManager.addRegions(t, e)
        },
        _initializeRegions: function(t) {
            var e;
            this._initRegionManager(), e = s._getValue(this.regions, this, [t]) || {};
            var n = this.getOption.call(t, "regions");
            n = s._getValue(n, this, [t]), i.extend(e, n), e = this.normalizeUIValues(e, ["selector", "el"]), this.addRegions(e)
        },
        _reInitializeRegions: function() {
            this.regionManager.invoke("reset")
        },
        getRegionManager: function() {
            return new s.RegionManager
        },
        _initRegionManager: function() {
            this.regionManager = this.getRegionManager(), this.regionManager._parent = this, this.listenTo(this.regionManager, "before:add:region", function(t) {
                this.triggerMethod("before:add:region", t)
            }), this.listenTo(this.regionManager, "add:region", function(t, e) {
                this[t] = e, this.triggerMethod("add:region", t, e)
            }), this.listenTo(this.regionManager, "before:remove:region", function(t) {
                this.triggerMethod("before:remove:region", t)
            }), this.listenTo(this.regionManager, "remove:region", function(t, e) {
                delete this[t], this.triggerMethod("remove:region", t, e)
            })
        },
        _getImmediateChildren: function() {
            return i.chain(this.regionManager.getRegions()).pluck("currentView").compact().value()
        }
    }), s.Behavior = s.Object.extend({
        constructor: function(t, e) {
            this.view = e, this.defaults = i.result(this, "defaults") || {}, this.options = i.extend({}, this.defaults, t), this.ui = i.extend({}, i.result(e, "ui"), i.result(this, "ui")), s.Object.apply(this, arguments)
        },
        $: function() {
            return this.view.$.apply(this.view, arguments)
        },
        destroy: function() {
            return this.stopListening(), this
        },
        proxyViewProperties: function(t) {
            this.$el = t.$el, this.el = t.el
        }
    }), s.Behaviors = function(t, e) {
        function i(t, n) {
            return e.isObject(t.behaviors) ? (n = i.parseBehaviors(t, n || e.result(t, "behaviors")), i.wrap(t, n, e.keys(o)), n) : {}
        }

        function n(t, e) {
            this._view = t, this._behaviors = e, this._triggers = {}
        }

        function r(t) {
            return t._uiBindings || t.ui
        }
        var s = /^(\S+)\s*(.*)$/,
            o = {
                behaviorTriggers: function(t, e) {
                    var i = new n(this, e);
                    return i.buildBehaviorTriggers()
                },
                behaviorEvents: function(i, n) {
                    var o = {};
                    return e.each(n, function(i, n) {
                        var h = {},
                            a = e.clone(e.result(i, "events")) || {};
                        a = t.normalizeUIKeys(a, r(i));
                        var d = 0;
                        e.each(a, function(t, r) {
                            var o = r.match(s),
                                a = o[1] + "." + [this.cid, n, d++, " "].join(""),
                                l = o[2],
                                c = a + l,
                                u = e.isFunction(t) ? t : i[t];
                            h[c] = e.bind(u, i)
                        }, this), o = e.extend(o, h)
                    }, this), o
                }
            };
        return e.extend(i, {
            behaviorsLookup: function() {
                throw new t.Error({
                    message: "You must define where your behaviors are stored.",
                    url: "marionette.behaviors.html#behaviorslookup"
                })
            },
            getBehaviorClass: function(e, n) {
                return e.behaviorClass ? e.behaviorClass : t._getValue(i.behaviorsLookup, this, [e, n])[n]
            },
            parseBehaviors: function(t, n) {
                return e.chain(n).map(function(n, r) {
                    var s = i.getBehaviorClass(n, r),
                        o = new s(n, t),
                        h = i.parseBehaviors(t, e.result(o, "behaviors"));
                    return [o].concat(h)
                }).flatten().value()
            },
            wrap: function(t, i, n) {
                e.each(n, function(n) {
                    t[n] = e.partial(o[n], t[n], i)
                })
            }
        }), e.extend(n.prototype, {
            buildBehaviorTriggers: function() {
                return e.each(this._behaviors, this._buildTriggerHandlersForBehavior, this), this._triggers
            },
            _buildTriggerHandlersForBehavior: function(i, n) {
                var s = e.clone(e.result(i, "triggers")) || {};
                s = t.normalizeUIKeys(s, r(i)), e.each(s, e.bind(this._setHandlerForBehavior, this, i, n))
            },
            _setHandlerForBehavior: function(t, e, i, n) {
                var r = n.replace(/^\S+/, function(t) {
                    return t + "." + "behaviortriggers" + e
                });
                this._triggers[r] = this._view._buildViewTrigger(i)
            }
        }), i
    }(s, i), s.AppRouter = e.Router.extend({
        constructor: function(t) {
            this.options = t || {}, e.Router.apply(this, arguments);
            var i = this.getOption("appRoutes"),
                n = this._getController();
            this.processAppRoutes(n, i), this.on("route", this._processOnRoute, this)
        },
        appRoute: function(t, e) {
            var i = this._getController();
            this._addAppRoute(i, t, e)
        },
        _processOnRoute: function(t, e) {
            if (i.isFunction(this.onRoute)) {
                var n = i.invert(this.getOption("appRoutes"))[t];
                this.onRoute(t, n, e)
            }
        },
        processAppRoutes: function(t, e) {
            if (e) {
                var n = i.keys(e).reverse();
                i.each(n, function(i) {
                    this._addAppRoute(t, i, e[i])
                }, this)
            }
        },
        _getController: function() {
            return this.getOption("controller")
        },
        _addAppRoute: function(t, e, n) {
            var r = t[n];
            if (!r) throw new s.Error('Method "' + n + '" was not found on the controller');
            this.route(e, n, i.bind(r, t))
        },
        mergeOptions: s.mergeOptions,
        getOption: s.proxyGetOption,
        triggerMethod: s.triggerMethod,
        bindEntityEvents: s.proxyBindEntityEvents,
        unbindEntityEvents: s.proxyUnbindEntityEvents
    }), s.Application = s.Object.extend({
        constructor: function(t) {
            this._initializeRegions(t), this._initCallbacks = new s.Callbacks, this.submodules = {}, i.extend(this, t), this._initChannel(), s.Object.call(this, t)
        },
        execute: function() {
            this.commands.execute.apply(this.commands, arguments)
        },
        request: function() {
            return this.reqres.request.apply(this.reqres, arguments)
        },
        addInitializer: function(t) {
            this._initCallbacks.add(t)
        },
        start: function(t) {
            this.triggerMethod("before:start", t), this._initCallbacks.run(t, this), this.triggerMethod("start", t)
        },
        addRegions: function(t) {
            return this._regionManager.addRegions(t)
        },
        emptyRegions: function() {
            return this._regionManager.emptyRegions()
        },
        removeRegion: function(t) {
            return this._regionManager.removeRegion(t)
        },
        getRegion: function(t) {
            return this._regionManager.get(t)
        },
        getRegions: function() {
            return this._regionManager.getRegions()
        },
        module: function(t, e) {
            var n = s.Module.getClass(e),
                r = i.toArray(arguments);
            return r.unshift(this), n.create.apply(n, r)
        },
        getRegionManager: function() {
            return new s.RegionManager
        },
        _initializeRegions: function(t) {
            var e = i.isFunction(this.regions) ? this.regions(t) : this.regions || {};
            this._initRegionManager();
            var n = s.getOption(t, "regions");
            return i.isFunction(n) && (n = n.call(this, t)), i.extend(e, n), this.addRegions(e), this
        },
        _initRegionManager: function() {
            this._regionManager = this.getRegionManager(), this._regionManager._parent = this, this.listenTo(this._regionManager, "before:add:region", function() {
                s._triggerMethod(this, "before:add:region", arguments)
            }), this.listenTo(this._regionManager, "add:region", function(t, e) {
                this[t] = e, s._triggerMethod(this, "add:region", arguments)
            }), this.listenTo(this._regionManager, "before:remove:region", function() {
                s._triggerMethod(this, "before:remove:region", arguments)
            }), this.listenTo(this._regionManager, "remove:region", function(t) {
                delete this[t], s._triggerMethod(this, "remove:region", arguments)
            })
        },
        _initChannel: function() {
            this.channelName = i.result(this, "channelName") || "global", this.channel = i.result(this, "channel") || e.Wreqr.radio.channel(this.channelName), this.vent = i.result(this, "vent") || this.channel.vent, this.commands = i.result(this, "commands") || this.channel.commands, this.reqres = i.result(this, "reqres") || this.channel.reqres
        }
    }), s.Module = function(t, e, n) {
        this.moduleName = t, this.options = i.extend({}, this.options, n), this.initialize = n.initialize || this.initialize, this.submodules = {}, this._setupInitializersAndFinalizers(), this.app = e, i.isFunction(this.initialize) && this.initialize(t, e, this.options)
    }, s.Module.extend = s.extend, i.extend(s.Module.prototype, e.Events, {
        startWithParent: !0,
        initialize: function() {},
        addInitializer: function(t) {
            this._initializerCallbacks.add(t)
        },
        addFinalizer: function(t) {
            this._finalizerCallbacks.add(t)
        },
        start: function(t) {
            this._isInitialized || (i.each(this.submodules, function(e) {
                e.startWithParent && e.start(t)
            }), this.triggerMethod("before:start", t), this._initializerCallbacks.run(t, this), this._isInitialized = !0, this.triggerMethod("start", t))
        },
        stop: function() {
            this._isInitialized && (this._isInitialized = !1, this.triggerMethod("before:stop"), i.invoke(this.submodules, "stop"), this._finalizerCallbacks.run(void 0, this), this._initializerCallbacks.reset(), this._finalizerCallbacks.reset(), this.triggerMethod("stop"))
        },
        addDefinition: function(t, e) {
            this._runModuleDefinition(t, e)
        },
        _runModuleDefinition: function(t, n) {
            if (t) {
                var r = i.flatten([this, this.app, e, s, e.$, i, n]);
                t.apply(this, r)
            }
        },
        _setupInitializersAndFinalizers: function() {
            this._initializerCallbacks = new s.Callbacks, this._finalizerCallbacks = new s.Callbacks
        },
        triggerMethod: s.triggerMethod
    }), i.extend(s.Module, {
        create: function(t, e, n) {
            var r = t,
                s = i.drop(arguments, 3);
            e = e.split(".");
            var o = e.length,
                h = [];
            return h[o - 1] = n, i.each(e, function(e, i) {
                var o = r;
                r = this._getModule(o, e, t, n), this._addModuleDefinition(o, r, h[i], s)
            }, this), r
        },
        _getModule: function(t, e, n, r) {
            var s = i.extend({}, r),
                o = this.getClass(r),
                h = t[e];
            return h || (h = new o(e, n, s), t[e] = h, t.submodules[e] = h), h
        },
        getClass: function(t) {
            var e = s.Module;
            return t ? t.prototype instanceof e ? t : t.moduleClass || e : e
        },
        _addModuleDefinition: function(t, e, i, n) {
            var r = this._getDefine(i),
                s = this._getStartWithParent(i, e);
            r && e.addDefinition(r, n), this._addStartWithParent(t, e, s)
        },
        _getStartWithParent: function(t, e) {
            var n;
            return i.isFunction(t) && t.prototype instanceof s.Module ? (n = e.constructor.prototype.startWithParent, i.isUndefined(n) ? !0 : n) : i.isObject(t) ? (n = t.startWithParent, i.isUndefined(n) ? !0 : n) : !0
        },
        _getDefine: function(t) {
            return !i.isFunction(t) || t.prototype instanceof s.Module ? i.isObject(t) ? t.define : null : t
        },
        _addStartWithParent: function(t, e, i) {
            e.startWithParent = e.startWithParent && i, e.startWithParent && !e.startWithParentIsConfigured && (e.startWithParentIsConfigured = !0, t.addInitializer(function(t) {
                e.startWithParent && e.start(t)
            }))
        }
    }), s
});
! function(e, n) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = n(require("underscore"), require("backbone")) : "function" == typeof define && define.amd ? define(["underscore", "backbone"], n) : e.Backbone.Radio = n(e._, e.Backbone)
}(this, function(e, n) {
    "use strict";

    function t(e, n, t, r) {
        var s = e[n];
        return t && t !== s.callback && t !== s.callback._callback || r && r !== s.context ? void 0 : (delete e[n], !0)
    }

    function r(n, r, s, i) {
        n || (n = {});
        for (var a = r ? [r] : e.keys(n), u = !1, o = 0, c = a.length; c > o; o++) r = a[o], n[r] && t(n, r, s, i) && (u = !0);
        return u
    }

    function s(n) {
        return c[n] || (c[n] = e.partial(u.log, n))
    }

    function i(n) {
        return e.isFunction(n) ? n : function() {
            return n
        }
    }
    var a = n.Radio,
        u = n.Radio = {};
    u.VERSION = "1.0.1", u.noConflict = function() {
        return n.Radio = a, this
    }, u.DEBUG = !1, u._debugText = function(e, n, t) {
        return e + (t ? " on the " + t + " channel" : "") + ': "' + n + '"'
    }, u.debugLog = function(e, n, t) {
        u.DEBUG && console && console.warn && console.warn(u._debugText(e, n, t))
    };
    var o = /\s+/;
    u._eventsApi = function(n, t, r, s) {
        if (!r) return !1;
        var i = {};
        if ("object" == typeof r) {
            for (var a in r) {
                var u = n[t].apply(n, [a, r[a]].concat(s));
                o.test(a) ? e.extend(i, u) : i[a] = u
            }
            return i
        }
        if (o.test(r)) {
            for (var c = r.split(o), l = 0, h = c.length; h > l; l++) i[c[l]] = n[t].apply(n, [c[l]].concat(s));
            return i
        }
        return !1
    }, u._callHandler = function(e, n, t) {
        var r = t[0],
            s = t[1],
            i = t[2];
        switch (t.length) {
            case 0:
                return e.call(n);
            case 1:
                return e.call(n, r);
            case 2:
                return e.call(n, r, s);
            case 3:
                return e.call(n, r, s, i);
            default:
                return e.apply(n, t)
        }
    };
    var c = {};
    e.extend(u, {
        log: function(n, t) {
            var r = e.rest(arguments, 2);
            console.log("[" + n + '] "' + t + '"', r)
        },
        tuneIn: function(e) {
            var n = u.channel(e);
            return n._tunedIn = !0, n.on("all", s(e)), this
        },
        tuneOut: function(e) {
            var n = u.channel(e);
            return n._tunedIn = !1, n.off("all", s(e)), delete c[e], this
        }
    }), u.Requests = {
        request: function(n) {
            var t = e.rest(arguments),
                r = u._eventsApi(this, "request", n, t);
            if (r) return r;
            var s = this.channelName,
                i = this._requests;
            if (s && this._tunedIn && u.log.apply(this, [s, n].concat(t)), i && (i[n] || i["default"])) {
                var a = i[n] || i["default"];
                return t = i[n] ? t : arguments, u._callHandler(a.callback, a.context, t)
            }
            u.debugLog("An unhandled request was fired", n, s)
        },
        reply: function(e, n, t) {
            return u._eventsApi(this, "reply", e, [n, t]) ? this : (this._requests || (this._requests = {}), this._requests[e] && u.debugLog("A request was overwritten", e, this.channelName), this._requests[e] = {
                callback: i(n),
                context: t || this
            }, this)
        },
        replyOnce: function(n, t, r) {
            if (u._eventsApi(this, "replyOnce", n, [t, r])) return this;
            var s = this,
                a = e.once(function() {
                    return s.stopReplying(n), i(t).apply(this, arguments)
                });
            return this.reply(n, a, r)
        },
        stopReplying: function(e, n, t) {
            return u._eventsApi(this, "stopReplying", e) ? this : (e || n || t ? r(this._requests, e, n, t) || u.debugLog("Attempted to remove the unregistered request", e, this.channelName) : delete this._requests, this)
        }
    }, u._channels = {}, u.channel = function(e) {
        if (!e) throw new Error("You must provide a name for the channel.");
        return u._channels[e] ? u._channels[e] : u._channels[e] = new u.Channel(e)
    }, u.Channel = function(e) {
        this.channelName = e
    }, e.extend(u.Channel.prototype, n.Events, u.Requests, {
        reset: function() {
            return this.off(), this.stopListening(), this.stopReplying(), this
        }
    });
    var l, h, f = [n.Events, u.Commands, u.Requests];
    e.each(f, function(n) {
        e.each(n, function(n, t) {
            u[t] = function(n) {
                return h = e.rest(arguments), l = this.channel(n), l[t].apply(l, h)
            }
        })
    }), u.reset = function(n) {
        var t = n ? [this._channels[n]] : this._channels;
        e.invoke(t, "reset")
    };
    var p = u;
    return p
});
! function(a) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = a();
    else if ("function" == typeof define && define.amd) define([], a);
    else {
        var b;
        b = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, b.mexp = a()
    }
}(function() {
    return function a(b, c, d) {
        function e(g, h) {
            if (!c[g]) {
                if (!b[g]) {
                    var i = "function" == typeof require && require;
                    if (!h && i) return i(g, !0);
                    if (f) return f(g, !0);
                    var j = new Error("Cannot find module '" + g + "'");
                    throw j.code = "MODULE_NOT_FOUND", j
                }
                var k = c[g] = {
                    exports: {}
                };
                b[g][0].call(k.exports, function(a) {
                    var c = b[g][1][a];
                    return e(c ? c : a)
                }, k, k.exports, a, b, c, d)
            }
            return c[g].exports
        }
        for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
        return e
    }({
        1: [function(a, b, c) {
            var d = a("./postfix_evaluator.js");
            d.prototype.formulaEval = function() {
                "use strict";
                for (var a, b, c, d = [], e = this.value, f = 0; f < e.length; f++) 1 === e[f].type || 3 === e[f].type ? d.push({
                    value: 3 === e[f].type ? e[f].show : e[f].value,
                    type: 1
                }) : 13 === e[f].type ? d.push({
                    value: e[f].show,
                    type: 1
                }) : 0 === e[f].type ? d[d.length - 1] = {
                    value: e[f].show + ("-" != e[f].show ? "(" : "") + d[d.length - 1].value + ("-" != e[f].show ? ")" : ""),
                    type: 0
                } : 7 === e[f].type ? d[d.length - 1] = {
                    value: (1 != d[d.length - 1].type ? "(" : "") + d[d.length - 1].value + (1 != d[d.length - 1].type ? ")" : "") + e[f].show,
                    type: 7
                } : 10 === e[f].type ? (a = d.pop(), b = d.pop(), "P" === e[f].show || "C" === e[f].show ? d.push({
                    value: "<sup>" + b.value + "</sup>" + e[f].show + "<sub>" + a.value + "</sub>",
                    type: 10
                }) : d.push({
                    value: (1 != b.type ? "(" : "") + b.value + (1 != b.type ? ")" : "") + "<sup>" + a.value + "</sup>",
                    type: 1
                })) : 2 === e[f].type || 9 === e[f].type ? (a = d.pop(), b = d.pop(), d.push({
                    value: (1 != b.type ? "(" : "") + b.value + (1 != b.type ? ")" : "") + e[f].show + (1 != a.type ? "(" : "") + a.value + (1 != a.type ? ")" : ""),
                    type: e[f].type
                })) : 12 === e[f].type && (a = d.pop(), b = d.pop(), c = d.pop(), d.push({
                    value: e[f].show + "(" + c.value + "," + b.value + "," + a.value + ")",
                    type: 12
                }));
                return d[0].value
            }, b.exports = d
        }, {
            "./postfix_evaluator.js": 5
        }],
        2: [function(a, b, c) {
            function d(a, b) {
                for (var c = 0; c < a.length; c++) a[c] += b;
                return a
            }

            function e(a, b, c, d) {
                for (var e = 0; e < d; e++)
                    if (a[c + e] !== b[e]) return !1;
                return !0
            }
            var f = a("./math_function.js"),
                g = ["sin", "cos", "tan", "pi", "(", ")", "P", "C", "asin", "acos", "atan", "7", "8", "9", "int", "cosh", "acosh", "ln", "^", "root", "4", "5", "6", "/", "!", "tanh", "atanh", "Mod", "1", "2", "3", "*", "sinh", "asinh", "e", "log", "0", ".", "+", "-", ",", "Sigma", "n", "Pi", "pow"],
                h = ["sin", "cos", "tan", "&pi;", "(", ")", "P", "C", "asin", "acos", "atan", "7", "8", "9", "Int", "cosh", "acosh", " ln", "^", "root", "4", "5", "6", "&divide;", "!", "tanh", "atanh", " Mod ", "1", "2", "3", "&times;", "sinh", "asinh", "e", " log", "0", ".", "+", "-", ",", "&Sigma;", "n", "&Pi;", "pow"],
                j = [f.math.sin, f.math.cos, f.math.tan, "PI", "(", ")", f.math.P, f.math.C, f.math.asin, f.math.acos, f.math.atan, "7", "8", "9", Math.floor, f.math.cosh, f.math.acosh, Math.log, Math.pow, Math.sqrt, "4", "5", "6", f.math.div, f.math.fact, f.math.tanh, f.math.atanh, f.math.mod, "1", "2", "3", f.math.mul, f.math.sinh, f.math.asinh, "E", f.math.log, "0", ".", f.math.add, f.math.sub, ",", f.math.sigma, "n", f.math.Pi, Math.pow],
                k = {
                    0: 11,
                    1: 0,
                    2: 3,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 11,
                    8: 11,
                    9: 1,
                    10: 10,
                    11: 0,
                    12: 11,
                    13: 0
                },
                l = [0, 0, 0, 3, 4, 5, 10, 10, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 10, 0, 1, 1, 1, 2, 7, 0, 0, 2, 1, 1, 1, 2, 0, 0, 3, 0, 1, 6, 9, 9, 11, 12, 13, 12, 8],
                m = {
                    0: !0,
                    1: !0,
                    3: !0,
                    4: !0,
                    6: !0,
                    8: !0,
                    9: !0,
                    12: !0,
                    13: !0
                },
                n = {
                    0: !0,
                    1: !0,
                    2: !0,
                    3: !0,
                    4: !0,
                    5: !0,
                    6: !0,
                    7: !0,
                    8: !0,
                    9: !0,
                    10: !0,
                    11: !0,
                    12: !0,
                    13: !0
                },
                o = {
                    0: !0,
                    3: !0,
                    4: !0,
                    8: !0,
                    12: !0,
                    13: !0
                },
                p = {},
                q = {
                    0: !0,
                    1: !0,
                    3: !0,
                    4: !0,
                    6: !0,
                    8: !0,
                    12: !0,
                    13: !0
                },
                r = {
                    1: !0
                },
                s = [
                    [],
                    ["1", "2", "3", "7", "8", "9", "4", "5", "6", "+", "-", "*", "/", "(", ")", "^", "!", "P", "C", "e", "0", ".", ",", "n"],
                    ["pi", "ln", "Pi"],
                    ["sin", "cos", "tan", "Del", "int", "Mod", "log", "pow"],
                    ["asin", "acos", "atan", "cosh", "root", "tanh", "sinh"],
                    ["acosh", "atanh", "asinh", "Sigma"]
                ];
            f.addToken = function(a) {
                for (i = 0; i < a.length; i++) {
                    x = a[i].token.length;
                    var b = -1;
                    if (x < s.length)
                        for (y = 0; y < s[x].length; y++)
                            if (a[i].token === s[x][y]) {
                                b = g.indexOf(s[x][y]);
                                break
                            }
                    b === -1 ? (g.push(a[i].token), l.push(a[i].type), s.length <= a[i].token.length && (s[a[i].token.length] = []), s[a[i].token.length].push(a[i].token), j.push(a[i].value), h.push(a[i].show)) : (g[b] = a[i].token, l[b] = a[i].type, j[b] = a[i].value, h[b] = a[i].show)
                }
            }, f.lex = function(a, b) {
                "use strict";
                var c, i, t, u, v = [{
                        type: 4,
                        value: "(",
                        show: "(",
                        pre: 0
                    }],
                    w = [],
                    x = a,
                    y = 0,
                    z = m,
                    A = 0,
                    B = p,
                    C = "";
                "undefined" != typeof b && f.addToken(b);
                var D = {};
                for (i = 0; i < x.length; i++)
                    if (" " != x[i]) {
                        c = "";
                        a: for (t = x.length - i > s.length - 2 ? s.length - 1 : x.length - i; t > 0; t--)
                            for (u = 0; u < s[t].length; u++)
                                if (e(x, s[t][u], i, t)) {
                                    c = s[t][u];
                                    break a
                                }
                        if (i += c.length - 1, "" === c) throw new f.exception("Can't understand after " + x.slice(i));
                        var E = g.indexOf(c),
                            F = c,
                            G = l[E],
                            H = j[E],
                            I = k[G],
                            J = h[E],
                            K = v[v.length - 1];
                        for (L = w.length; L--;)
                            if (0 === w[L] && [0, 2, 3, 5, 9, 11, 12, 13].indexOf(G) !== -1) {
                                if (z[G] !== !0) throw new f.exception(c + " is not allowed after " + C);
                                v.push({
                                    value: ")",
                                    type: 5,
                                    pre: 0,
                                    show: ")"
                                }), z = n, B = q, d(w, -1).pop()
                            }
                        if (z[G] !== !0) throw new f.exception(c + " is not allowed after " + C);
                        if (B[G] === !0 && (G = 2, H = f.math.mul, J = "&times;", I = 3, i -= c.length), D = {
                                value: H,
                                type: G,
                                pre: I,
                                show: J
                            }, 0 === G) z = m, B = p, d(w, 2).push(2), v.push(D), v.push({
                            value: "(",
                            type: 4,
                            pre: 0,
                            show: "("
                        });
                        else if (1 === G) 1 === K.type ? (K.value += H, d(w, 1)) : v.push(D), z = n, B = o;
                        else if (2 === G) z = m, B = p, d(w, 2), v.push(D);
                        else if (3 === G) v.push(D), z = n, B = q;
                        else if (4 === G) y += w.length, w = [], A++, z = m, B = p, v.push(D);
                        else if (5 === G) {
                            if (!A) throw new f.exception("Closing parenthesis are more than opening one, wait What!!!");
                            for (; y--;) v.push({
                                value: ")",
                                type: 5,
                                pre: 0,
                                show: ")"
                            });
                            y = 0, A--, z = n, B = q, v.push(D)
                        } else if (6 === G) {
                            if (K.hasDec) throw new f.exception("Two decimals are not allowed in one number");
                            1 !== K.type && (K = {
                                value: 0,
                                type: 1,
                                pre: 0
                            }, v.push(K), d(w, -1)), z = r, d(w, 1), B = p, K.value += H, K.hasDec = !0
                        } else 7 === G && (z = n, B = q, d(w, 1), v.push(D));
                        8 === G ? (z = m, B = p, d(w, 4).push(4), v.push(D), v.push({
                            value: "(",
                            type: 4,
                            pre: 0,
                            show: "("
                        })) : 9 === G ? (9 === K.type ? K.value === f.math.add ? (K.value = H, K.show = J, d(w, 1)) : K.value === f.math.sub && "-" === J && (K.value = f.math.add, K.show = "+", d(w, 1)) : 5 !== K.type && 7 !== K.type && 1 !== K.type && 3 !== K.type && 13 !== K.type ? "-" === F && (z = m, B = p, d(w, 2).push(2), v.push({
                            value: f.math.changeSign,
                            type: 0,
                            pre: 21,
                            show: "-"
                        }), v.push({
                            value: "(",
                            type: 4,
                            pre: 0,
                            show: "("
                        })) : (v.push(D), d(w, 2)), z = m, B = p) : 10 === G ? (z = m, B = p, d(w, 2), v.push(D)) : 11 === G ? (z = m, B = p, v.push(D)) : 12 === G ? (z = m, B = p, d(w, 6).push(6), v.push(D), v.push({
                            value: "(",
                            type: 4,
                            pre: 0
                        })) : 13 === G && (z = n, B = q, v.push(D)), d(w, -1), C = c
                    }
                for (var L = w.length; L--;) 0 === w[L] && (v.push({
                    value: ")",
                    show: ")",
                    type: 5,
                    pre: 3
                }), d(w, -1).pop());
                if (z[5] !== !0) throw new f.exception("complete the expression");
                for (; A--;) v.push({
                    value: ")",
                    show: ")",
                    type: 5,
                    pre: 3
                });
                return v.push({
                    type: 5,
                    value: ")",
                    show: ")",
                    pre: 0
                }), new f(v)
            }, b.exports = f
        }, {
            "./math_function.js": 3
        }],
        3: [function(a, b, c) {
            var d = function(a) {
                this.value = a
            };
            d.math = {
                isDegree: !0,
                acos: function(a) {
                    return d.math.isDegree ? 180 / Math.PI * Math.acos(a) : Math.acos(a)
                },
                add: function(a, b) {
                    return a + b
                },
                asin: function(a) {
                    return d.math.isDegree ? 180 / Math.PI * Math.asin(a) : Math.asin(a)
                },
                atan: function(a) {
                    return d.math.isDegree ? 180 / Math.PI * Math.atan(a) : Math.atan(a)
                },
                acosh: function(a) {
                    return Math.log(a + Math.sqrt(a * a - 1))
                },
                asinh: function(a) {
                    return Math.log(a + Math.sqrt(a * a + 1))
                },
                atanh: function(a) {
                    return Math.log((1 + a) / (1 - a))
                },
                C: function(a, b) {
                    var c = 1,
                        e = a - b,
                        f = b;
                    f < e && (f = e, e = b);
                    for (var g = f + 1; g <= a; g++) c *= g;
                    return c / d.math.fact(e)
                },
                changeSign: function(a) {
                    return -a
                },
                cos: function(a) {
                    return d.math.isDegree && (a = d.math.toRadian(a)), Math.cos(a)
                },
                cosh: function(a) {
                    return (Math.pow(Math.E, a) + Math.pow(Math.E, -1 * a)) / 2
                },
                div: function(a, b) {
                    return a / b
                },
                fact: function(a) {
                    if (a % 1 !== 0) return "NAN";
                    for (var b = 1, c = 2; c <= a; c++) b *= c;
                    return b
                },
                inverse: function(a) {
                    return 1 / a
                },
                log: function(a) {
                    return Math.log(a) / Math.log(10)
                },
                mod: function(a, b) {
                    return a % b
                },
                mul: function(a, b) {
                    return a * b
                },
                P: function(a, b) {
                    for (var c = 1, d = Math.floor(a) - Math.floor(b) + 1; d <= Math.floor(a); d++) c *= d;
                    return c
                },
                Pi: function(a, b, c) {
                    for (var d = 1, e = a; e <= b; e++) d *= Number(c.postfixEval({
                        n: e
                    }));
                    return d
                },
                pow10x: function(a) {
                    for (var b = 1; a--;) b *= 10;
                    return b
                },
                sigma: function(a, b, c) {
                    for (var d = 0, e = a; e <= b; e++) d += Number(c.postfixEval({
                        n: e
                    }));
                    return d
                },
                sin: function(a) {
                    return d.math.isDegree && (a = d.math.toRadian(a)), Math.sin(a)
                },
                sinh: function(a) {
                    return (Math.pow(Math.E, a) - Math.pow(Math.E, -1 * a)) / 2
                },
                sub: function(a, b) {
                    return a - b
                },
                tan: function(a) {
                    return d.math.isDegree && (a = d.math.toRadian(a)), Math.tan(a)
                },
                tanh: function(a) {
                    return d.sinha(a) / d.cosha(a)
                },
                toRadian: function(a) {
                    return a * Math.PI / 180
                }
            }, d.exception = function(a) {
                this.message = a
            }, b.exports = d
        }, {}],
        4: [function(a, b, c) {
            var d = a("./lexer.js");
            d.prototype.toPostfix = function() {
                "use strict";
                for (var a, b, c, e, f, g = [], h = [{
                        value: "(",
                        type: 4,
                        pre: 0
                    }], i = this.value, j = 1; j < i.length; j++)
                    if (1 === i[j].type || 3 === i[j].type || 13 === i[j].type) 1 === i[j].type && (i[j].value = Number(i[j].value)), g.push(i[j]);
                    else if (4 === i[j].type) h.push(i[j]);
                else if (5 === i[j].type)
                    for (; 4 !== (b = h.pop()).type;) g.push(b);
                else if (11 === i[j].type) {
                    for (; 4 !== (b = h.pop()).type;) g.push(b);
                    h.push(b)
                } else {
                    a = i[j], e = a.pre, f = h[h.length - 1], c = f.pre;
                    var k = "Math.pow" == f.value && "Math.pow" == a.value;
                    if (e > c) h.push(a);
                    else {
                        for (; c >= e && !k || k && e < c;) b = h.pop(), f = h[h.length - 1], g.push(b), c = f.pre, k = "Math.pow" == a.value && "Math.pow" == f.value;
                        h.push(a)
                    }
                }
                return new d(g)
            }, b.exports = d
        }, {
            "./lexer.js": 2
        }],
        5: [function(a, b, c) {
            var d = a("./postfix.js");
            d.prototype.postfixEval = function(a) {
                "use strict";
                a = a || {}, a.PI = Math.PI, a.E = Math.E;
                for (var b, c, e, f = [], g = this.value, h = "undefined" != typeof a.n, i = 0; i < g.length; i++) 1 === g[i].type ? f.push({
                    value: g[i].value,
                    type: 1
                }) : 3 === g[i].type ? f.push({
                    value: a[g[i].value],
                    type: 1
                }) : 0 === g[i].type ? "undefined" == typeof f[f.length - 1].type ? f[f.length - 1].value.push(g[i]) : f[f.length - 1].value = g[i].value(f[f.length - 1].value) : 7 === g[i].type ? "undefined" == typeof f[f.length - 1].type ? f[f.length - 1].value.push(g[i]) : f[f.length - 1].value = g[i].value(f[f.length - 1].value) : 8 === g[i].type ? (b = f.pop(), c = f.pop(), f.push({
                    type: 1,
                    value: g[i].value(c.value, b.value)
                })) : 10 === g[i].type ? (b = f.pop(), c = f.pop(), "undefined" == typeof c.type ? (c.value = c.concat(b), c.value.push(g[i]), f.push(c)) : "undefined" == typeof b.type ? (b.unshift(c), b.push(g[i]), f.push(b)) : f.push({
                    type: 1,
                    value: g[i].value(c.value, b.value)
                })) : 2 === g[i].type || 9 === g[i].type ? (b = f.pop(), c = f.pop(), "undefined" == typeof c.type ? (console.log(c), c = c.concat(b), c.push(g[i]), f.push(c)) : "undefined" == typeof b.type ? (b.unshift(c), b.push(g[i]), f.push(b)) : f.push({
                    type: 1,
                    value: g[i].value(c.value, b.value)
                })) : 12 === g[i].type ? (b = f.pop(), "undefined" != typeof b.type && (b = [b]), c = f.pop(), e = f.pop(), f.push({
                    type: 1,
                    value: g[i].value(e.value, c.value, new d(b))
                })) : 13 === g[i].type && (h ? f.push({
                    value: a[g[i].value],
                    type: 3
                }) : f.push([g[i]]));
                if (f.length > 1) throw new d.exception("Uncaught Syntax error");
                return f[0].value > 1e15 ? "Infinity" : Number(f[0].value.toFixed(15)).toPrecision()
            }, d.eval = function(a, b, c) {
                return "undefined" == typeof b ? this.lex(a).toPostfix().postfixEval() : "undefined" == typeof c ? "undefined" != typeof b.length ? this.lex(a, b).toPostfix().postfixEval() : this.lex(a).toPostfix().postfixEval(b) : this.lex(a, b).toPostfix().postfixEval(c)
            }, b.exports = d
        }, {
            "./postfix.js": 4
        }]
    }, {}, [1])(1)
});
var nfRadio = Backbone.Radio;
nfRadio.channel('form').on('render:view', function() {
    jQuery('.g-recaptcha').each(function() {
        var callback = jQuery(this).data('callback');
        var fieldID = jQuery(this).data('fieldid');
        if (typeof window[callback] !== 'function') {
            window[callback] = function(response) {
                nfRadio.channel('recaptcha').request('update:response', response, fieldID);
            };
        }
    });
});
var nfRecaptcha = Marionette.Object.extend({
    initialize: function() {
        if (0 != jQuery('.g-recaptcha').length) {
            this.renderCaptcha();
        }
        this.listenTo(nfRadio.channel('form'), 'render:view', this.renderCaptcha);
        this.listenTo(nfRadio.channel('captcha'), 'reset', this.renderCaptcha);
    },
    renderCaptcha: function() {
        jQuery('.g-recaptcha').each(function() {
            var opts = {
                fieldid: jQuery(this).data('fieldid'),
                size: jQuery(this).data('size'),
                theme: jQuery(this).data('theme'),
                sitekey: jQuery(this).data('sitekey'),
                callback: jQuery(this).data('callback')
            };
            var grecaptchaID = grecaptcha.render(jQuery(this)[0], opts);
            if (opts.size === 'invisible') {
                try {
                    grecaptcha.execute(grecaptchaID);
                } catch (e) {
                    console.log('Notice: Error trying to execute grecaptcha.');
                }
            }
        });
    }
});
var nfRenderRecaptcha = function() {
    new nfRecaptcha();
};
! function() {
    var e, t, i;
    ! function(n) {
        function r(e, t) {
            return R.call(e, t)
        }

        function o(e, t) {
            var i, n, r, o, a, l, s, d, c, f, u, h = t && t.split("/"),
                g = b.map,
                m = g && g["*"] || {};
            if (e && "." === e.charAt(0))
                if (t) {
                    for (e = e.split("/"), a = e.length - 1, b.nodeIdCompat && _.test(e[a]) && (e[a] = e[a].replace(_, "")), e = h.slice(0, h.length - 1).concat(e), c = 0; c < e.length; c += 1)
                        if ("." === (u = e[c])) e.splice(c, 1), c -= 1;
                        else if (".." === u) {
                        if (1 === c && (".." === e[2] || ".." === e[0])) break;
                        c > 0 && (e.splice(c - 1, 2), c -= 2)
                    }
                    e = e.join("/")
                } else 0 === e.indexOf("./") && (e = e.substring(2));
            if ((h || m) && g) {
                for (i = e.split("/"), c = i.length; c > 0; c -= 1) {
                    if (n = i.slice(0, c).join("/"), h)
                        for (f = h.length; f > 0; f -= 1)
                            if ((r = g[h.slice(0, f).join("/")]) && (r = r[n])) {
                                o = r, l = c;
                                break
                            }
                    if (o) break;
                    !s && m && m[n] && (s = m[n], d = c)
                }!o && s && (o = s, l = d), o && (i.splice(0, l, o), e = i.join("/"))
            }
            return e
        }

        function a(e, t) {
            return function() {
                var i = w.call(arguments, 0);
                return "string" != typeof i[0] && 1 === i.length && i.push(null), h.apply(n, i.concat([e, t]))
            }
        }

        function l(e) {
            return function(t) {
                return o(t, e)
            }
        }

        function s(e) {
            return function(t) {
                p[e] = t
            }
        }

        function d(e) {
            if (r(v, e)) {
                var t = v[e];
                delete v[e], y[e] = !0, u.apply(n, t)
            }
            if (!r(p, e) && !r(y, e)) throw new Error("No " + e);
            return p[e]
        }

        function c(e) {
            var t, i = e ? e.indexOf("!") : -1;
            return i > -1 && (t = e.substring(0, i), e = e.substring(i + 1, e.length)), [t, e]
        }

        function f(e) {
            return function() {
                return b && b.config && b.config[e] || {}
            }
        }
        var u, h, g, m, p = {},
            v = {},
            b = {},
            y = {},
            R = Object.prototype.hasOwnProperty,
            w = [].slice,
            _ = /\.js$/;
        g = function(e, t) {
            var i, n = c(e),
                r = n[0];
            return e = n[1], r && (r = o(r, t), i = d(r)), r ? e = i && i.normalize ? i.normalize(e, l(t)) : o(e, t) : (e = o(e, t), n = c(e), r = n[0], e = n[1], r && (i = d(r))), {
                f: r ? r + "!" + e : e,
                n: e,
                pr: r,
                p: i
            }
        }, m = {
            require: function(e) {
                return a(e)
            },
            exports: function(e) {
                var t = p[e];
                return void 0 !== t ? t : p[e] = {}
            },
            module: function(e) {
                return {
                    id: e,
                    uri: "",
                    exports: p[e],
                    config: f(e)
                }
            }
        }, u = function(e, t, i, o) {
            var l, c, f, u, h, b, R = [],
                w = typeof i;
            if (o = o || e, "undefined" === w || "function" === w) {
                for (t = !t.length && i.length ? ["require", "exports", "module"] : t, h = 0; h < t.length; h += 1)
                    if (u = g(t[h], o), "require" === (c = u.f)) R[h] = m.require(e);
                    else if ("exports" === c) R[h] = m.exports(e), b = !0;
                else if ("module" === c) l = R[h] = m.module(e);
                else if (r(p, c) || r(v, c) || r(y, c)) R[h] = d(c);
                else {
                    if (!u.p) throw new Error(e + " missing " + c);
                    u.p.load(u.n, a(o, !0), s(c), {}), R[h] = p[c]
                }
                f = i ? i.apply(p[e], R) : void 0, e && (l && l.exports !== n && l.exports !== p[e] ? p[e] = l.exports : f === n && b || (p[e] = f))
            } else e && (p[e] = i)
        }, e = t = h = function(e, t, i, r, o) {
            if ("string" == typeof e) return m[e] ? m[e](t) : d(g(e, t).f);
            if (!e.splice) {
                if (b = e, b.deps && h(b.deps, b.callback), !t) return;
                t.splice ? (e = t, t = i, i = null) : e = n
            }
            return t = t || function() {}, "function" == typeof i && (i = r, r = o), r ? u(n, e, t, i) : setTimeout(function() {
                u(n, e, t, i)
            }, 4), h
        }, h.config = function(e) {
            return h(e)
        }, e._defined = p, i = function(e, t, i) {
            if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
            t.splice || (i = t, t = []), r(p, e) || r(v, e) || (v[e] = [e, t, i])
        }, i.amd = {
            jQuery: !0
        }
    }(), i("../lib/almond", function() {}), i("models/fieldErrorModel", [], function() {
        return Backbone.Model.extend({})
    }), i("models/fieldErrorCollection", ["models/fieldErrorModel"], function(e) {
        return Backbone.Collection.extend({
            model: e
        })
    }), i("models/fieldModel", ["models/fieldErrorCollection"], function(e) {
        return Backbone.Model.extend({
            defaults: {
                placeholder: "",
                value: "",
                label_pos: "",
                classes: "",
                reRender: !1,
                mirror_field: !1,
                confirm_field: !1,
                clean: !0,
                disabled: "",
                visible: !0,
                invalid: !1
            },
            initialize: function() {
                this.set("formID", this.collection.options.formModel.get("id")), this.listenTo(nfRadio.channel("form-" + this.get("formID")), "reset", this.resetModel), this.bind("change", this.changeModel, this), this.bind("change:value", this.changeValue, this), this.set("errors", new e), nfRadio.channel("fields").trigger("init:model", this), nfRadio.channel(this.get("type")).trigger("init:model", this), nfRadio.channel("fields-" + this.get("type")).trigger("init:model", this), "undefined" != this.get("parentType") && nfRadio.channel(this.get("parentType")).trigger("init:model", this), this.listenTo(nfRadio.channel("form-" + this.get("formID")), "loaded", this.formLoaded), this.listenTo(nfRadio.channel("form-" + this.get("formID")), "before:submit", this.beforeSubmit)
            },
            changeModel: function() {
                nfRadio.channel("field-" + this.get("id")).trigger("change:model", this), nfRadio.channel(this.get("type")).trigger("change:model", this), nfRadio.channel("fields").trigger("change:model", this)
            },
            changeValue: function() {
                nfRadio.channel("field-" + this.get("id")).trigger("change:modelValue", this), nfRadio.channel(this.get("type")).trigger("change:modelValue", this), nfRadio.channel("fields").trigger("change:modelValue", this)
            },
            addWrapperClass: function(e) {
                this.set("addWrapperClass", e)
            },
            removeWrapperClass: function(e) {
                this.set("removeWrapperClass", e)
            },
            setInvalid: function(e) {
                this.set("invalid", e)
            },
            formLoaded: function() {
                nfRadio.channel("fields").trigger("formLoaded", this), nfRadio.channel("fields-" + this.get("type")).trigger("formLoaded", this)
            },
            beforeSubmit: function(e) {
                nfRadio.channel(this.get("type")).trigger("before:submit", this), nfRadio.channel("fields").trigger("before:submit", this)
            }
        })
    }), i("models/fieldCollection", ["models/fieldModel"], function(e) {
        return Backbone.Collection.extend({
            model: e,
            comparator: "order",
            initialize: function(e, t) {
                this.options = t, this.on("reset", function(e) {
                    nfRadio.channel("fields").trigger("reset:collection", e)
                }, this)
            },
            validateFields: function() {
                _.each(this.models, function(e) {
                    e.set("clean", !1), nfRadio.channel("submit").trigger("validate:field", e)
                }, this)
            },
            showFields: function() {
                this.invoke("set", {
                    visible: !0
                }), this.invoke(function() {
                    this.trigger("change:value", this)
                })
            },
            hideFields: function() {
                this.invoke("set", {
                    visible: !1
                }), this.invoke(function() {
                    this.trigger("change:value", this)
                })
            }
        })
    }), i("models/formErrorModel", [], function() {
        return Backbone.Model.extend({})
    }), i("models/formErrorCollection", ["models/formErrorModel"], function(e) {
        return Backbone.Collection.extend({
            model: e
        })
    }), i("models/formModel", ["models/fieldCollection", "models/formErrorCollection"], function(e, t) {
        return Backbone.Model.extend({
            defaults: {
                beforeForm: "",
                afterForm: "",
                beforeFields: "",
                afterFields: "",
                wrapper_class: "",
                element_class: "",
                hp: "",
                fieldErrors: {},
                extra: {}
            },
            initialize: function() {
                _.each(this.get("settings"), function(e, t) {
                    this.set(t, e)
                }, this), this.set("loadedFields", this.get("fields")), this.set("fields", new e(this.get("fields"), {
                    formModel: this
                })), this.set("errors", new t), nfRadio.channel("form").trigger("before:filterData", this);
                var i = this.get("formContentData");
                i || (i = this.get("fieldContentsData"));
                var n = nfRadio.channel("formContent").request("get:loadFilters"),
                    r = _.without(n, void 0);
                i = _.first(r)(i, this, this), this.set("formContentData", i), nfRadio.channel("forms").trigger("init:model", this), nfRadio.channel("form-" + this.get("id")).trigger("init:model", this), nfRadio.channel("form-" + this.get("id")).reply("get:fieldByKey", this.getFieldByKey, this), nfRadio.channel("form-" + this.get("id")).reply("add:error", this.addError, this), nfRadio.channel("form-" + this.get("id")).reply("remove:error", this.removeError, this), nfRadio.channel("form-" + this.get("id")).reply("get:extra", this.getExtra, this), nfRadio.channel("form-" + this.get("id")).reply("add:extra", this.addExtra, this), nfRadio.channel("form-" + this.get("id")).reply("remove:extra", this.removeExtra, this), nfRadio.channel("form-" + this.get("id")).reply("get:form", this.getForm, this), nfRadio.channel("form").trigger("loaded", this), nfRadio.channel("form").trigger("after:loaded", this), nfRadio.channel("form-" + this.get("id")).trigger("loaded", this)
            },
            getFieldByKey: function(e) {
                return this.get("fields").findWhere({
                    key: e
                })
            },
            addError: function(e, t) {
                this.get("errors").add({
                    id: e,
                    msg: t
                }), nfRadio.channel("form-" + this.get("id")).trigger("add:error", this, e, t)
            },
            removeError: function(e) {
                var t = this.get("errors"),
                    i = t.get(e);
                t.remove(i), nfRadio.channel("form-" + this.get("id")).trigger("remove:error", this, e)
            },
            getExtra: function(e) {
                var t = this.get("extra");
                return void 0 === e ? t : t[e]
            },
            addExtra: function(e, t) {
                this.get("extra")[e] = t, nfRadio.channel("form-" + this.get("id")).trigger("add:extra", this, e, t)
            },
            removeExtra: function(e) {
                delete this.get("extra")[e], nfRadio.channel("form-" + this.get("id")).trigger("remove:extra", this, e)
            },
            getForm: function() {
                return this
            }
        })
    }), i("models/formCollection", ["models/formModel"], function(e) {
        return Backbone.Collection.extend({
            model: e
        })
    }), i("controllers/formData", ["models/formModel", "models/formCollection", "models/fieldCollection", "models/formErrorCollection"], function(e, t, i, n) {
        return Marionette.Object.extend({
            initialize: function() {
                this.collection = new t(nfForms), nfRadio.channel("forms").trigger("loaded", this.collection), nfRadio.channel("app").trigger("forms:loaded", this.collection), nfRadio.channel("app").reply("get:form", this.getForm, this), nfRadio.channel("app").reply("get:forms", this.getForms, this), nfRadio.channel("fields").reply("get:field", this.getField, this)
            },
            getForm: function(e) {
                return this.collection.get(e)
            },
            getForms: function() {
                return this.collection
            },
            getField: function(e) {
                var t = !1;
                return _.each(this.collection.models, function(i) {
                    t || (t = i.get("fields").get(e))
                }), t
            }
        })
    }), i("controllers/fieldError", ["models/fieldErrorModel"], function(e) {
        return Marionette.Object.extend({
            initialize: function() {
                nfRadio.channel("fields").reply("add:error", this.addError), nfRadio.channel("fields").reply("remove:error", this.removeError), nfRadio.channel("fields").reply("get:error", this.getError)
            },
            addError: function(e, t, i) {
                var n = nfRadio.channel("fields").request("get:field", e);
                if (void 0 !== n) {
                    var r = n.get("errors");
                    r.add({
                        id: t,
                        msg: i
                    }), n.set("errors", r), n.trigger("change:errors", n), n.set("clean", !1), nfRadio.channel("fields").trigger("add:error", n, t, i)
                }
            },
            removeError: function(e, t) {
                var i = nfRadio.channel("fields").request("get:field", e);
                if (void 0 !== i) {
                    var n = i.get("errors"),
                        r = n.get(t);
                    void 0 !== r && (n.remove(r), i.set("errors", n), i.trigger("change:errors", i), nfRadio.channel("fields").trigger("remove:error", i, t))
                }
            },
            getError: function(e, t) {
                var i = nfRadio.channel("fields").request("get:field", e),
                    n = i.get("errors"),
                    r = n.get(t);
                return "undefined" != r && r
            }
        })
    }), i("controllers/changeField", [], function() {
        return Marionette.Object.extend({
            initialize: function() {
                nfRadio.channel("nfAdmin").reply("change:field", this.changeField), this.listenTo(nfRadio.channel("fields"), "blur:field", this.blurField)
            },
            changeField: function(e, t) {
                var i = nfRadio.channel(t.get("type")).request("before:updateField", e, t);
                i = void 0 !== i ? i : nfRadio.channel(t.get("parentType")).request("before:updateField", e, t), i = void 0 !== i ? i : jQuery(e).val(), t.set("isUpdated", !1), t.set("clean", !1), nfRadio.channel("field-" + t.get("id")).trigger("change:field", e, t), nfRadio.channel(t.get("type")).trigger("change:field", e, t), nfRadio.channel("fields").trigger("change:field", e, t), nfRadio.channel("nfAdmin").request("update:field", t, i)
            },
            blurField: function(e, t) {
                t.set("clean", !1)
            }
        })
    }), i("controllers/changeEmail", [], function() {
        var e = nfRadio.channel("email"),
            t = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            i = "invalid-email";
        return Marionette.Object.extend({
            initialize: function() {
                this.listenTo(e, "change:modelValue", this.onChangeModelValue), this.listenTo(e, "keyup:field", this.emailKeyup), this.listenTo(e, "blur:field", this.onBlurField)
            },
            onChangeModelValue: function(e) {
                var t = e.get("value"),
                    i = e.get("id");
                this.emailChange(t, i)
            },
            onBlurField: function(e, t) {
                var i = jQuery(e).val(),
                    n = t.get("id");
                this.emailChange(i, n)
            },
            emailChange: function(e, n) {
                if (0 < e.length)
                    if (t.test(e)) nfRadio.channel("fields").request("remove:error", n, i);
                    else {
                        var r = nfRadio.channel("fields").request("get:field", n),
                            o = nfRadio.channel("app").request("get:form", r.get("formID"));
                        nfRadio.channel("fields").request("add:error", n, i, o.get("settings").changeEmailErrorMsg)
                    } else nfRadio.channel("fields").request("remove:error", n, i)
            },
            emailKeyup: function(e, n, r) {
                if (9 == r) return !1;
                var o = jQuery(e).val(),
                    a = n.get("id");
                if (0 == o.length) nfRadio.channel("fields").request("remove:error", a, i);
                else if (t.test(o) || n.get("clean")) t.test(o) && (nfRadio.channel("fields").request("remove:error", a, i), n.addWrapperClass("nf-pass"), n.set("clean", !1));
                else {
                    var l = nfRadio.channel("fields").request("get:field", a),
                        s = nfRadio.channel("app").request("get:form", l.get("formID"));
                    nfRadio.channel("fields").request("add:error", a, i, s.get("settings").changeEmailErrorMsg), n.removeWrapperClass("nf-pass")
                }
            }
        })
    }), i("controllers/changeDate", [], function() {
        var e = nfRadio.channel("date"),
            t = "invalid-date";
        return Marionette.Object.extend({
            initialize: function() {
                this.listenTo(e, "change:modelValue", this.onChangeModelValue), this.listenTo(e, "keyup:field", this.dateKeyup), this.listenTo(e, "blur:field", this.onBlurField)
            },
            onChangeModelValue: function(e) {
                this.dateChange(e)
            },
            onBlurField: function(e, t) {
                this.dateChange(t)
            },
            dateChange: function(e) {
                var i = e.get("id"),
                    n = e.get("value"),
                    r = e.get("date_format");
                if ("default" === r && (r = nfi18n.dateFormat), 0 < n.length)
                    if (moment(n, r).isValid()) nfRadio.channel("fields").request("remove:error", i, t);
                    else {
                        var o = nfRadio.channel("fields").request("get:field", i),
                            a = nfRadio.channel("app").request("get:form", o.get("formID"));
                        nfRadio.channel("fields").request("add:error", i, t, a.get("settings").changeDateErrorMsg)
                    } else nfRadio.channel("fields").request("remove:error", i, t)
            },
            dateKeyup: function(e, i, n) {
                if (9 == n) return !1;
                var r = jQuery(e).val(),
                    o = i.get("id"),
                    a = i.get("date_format");
                if ("default" === a && (a = nfi18n.dateFormat), 0 == r.length) nfRadio.channel("fields").request("remove:error", o, t);
                else if (moment(r, a).isValid() || i.get("clean")) moment(r, a).isValid() && (nfRadio.channel("fields").request("remove:error", o, t), i.addWrapperClass("nf-pass"), i.set("clean", !1));
                else {
                    var l = nfRadio.channel("fields").request("get:field", o),
                        s = nfRadio.channel("app").request("get:form", l.get("formID"));
                    nfRadio.channel("fields").request("add:error", o, t, s.get("settings").changeDateErrorMsg), i.removeWrapperClass("nf-pass")
                }
            }
        })
    }), i("controllers/fieldCheckbox", [], function() {
        return Marionette.Object.extend({
            initialize: function() {
                this.listenTo(nfRadio.channel("checkbox"), "init:model", this.registerRenderClasses), nfRadio.channel("checkbox").reply("validate:required", this.validateRequired), nfRadio.channel("checkbox").reply("validate:modelData", this.validateModelData), nfRadio.channel("checkbox").reply("before:updateField", this.beforeUpdateField, this), nfRadio.channel("checkbox").reply("get:calcValue", this.getCalcValue, this)
            },
            beforeUpdateField: function(e, t) {
                if (jQuery(e).prop("checked")) {
                    var i = 1;
                    jQuery(e).addClass("nf-checked"), jQuery(e).closest(".field-wrap").find('label[for="' + jQuery(e).prop("id") + '"]').addClass("nf-checked-label")
                } else {
                    var i = 0;
                    jQuery(e).removeClass("nf-checked"), jQuery(e).closest(".field-wrap").find('label[for="' + jQuery(e).prop("id") + '"]').removeClass("nf-checked-label")
                }
                return i
            },
            validateRequired: function(e, t) {
                return e[0].checked
            },
            validateModelData: function(e) {
                return 0 != e.get("value")
            },
            getCalcValue: function(e) {
                return 1 == e.get("value") ? calcValue = e.get("checked_calc_value") : calcValue = e.get("unchecked_calc_value"), calcValue
            },
            registerRenderClasses: function(e) {
                "checked" == e.get("default_value") ? e.set("value", 1) : e.set("value", 0), e.set("customClasses", this.customClasses), e.set("customLabelClasses", this.customLabelClasses), e.set("maybeChecked", this.maybeChecked)
            },
            customClasses: function(e) {
                return 1 == this.value || this.clean && void 0 !== this.default_value && "checked" == this.default_value ? e += " nf-checked" : e.replace("nf-checked", ""), e
            },
            customLabelClasses: function(e) {
                return 1 == this.value || this.clean && void 0 !== this.default_value && "checked" == this.default_value ? e += " nf-checked-label" : e.replace("nf-checked-label", ""), e
            },
            maybeChecked: function() {
                return 1 == this.value || this.clean && void 0 !== this.default_value && "checked" == this.default_value ? " checked" : ""
            }
        })
    }), i("controllers/fieldCheckboxList", [], function() {
        return Marionette.Object.extend({
            initialize: function() {
                this.listenTo(nfRadio.channel("listcheckbox"), "init:model", this.register), this.listenTo(nfRadio.channel("terms"), "init:model", this.register), nfRadio.channel("listcheckbox").reply("before:updateField", this.beforeUpdateField, this), nfRadio.channel("terms").reply("before:updateField", this.beforeUpdateField, this), nfRadio.channel("listcheckbox").reply("get:calcValue", this.getCalcValue, this), nfRadio.channel("terms").reply("get:calcValue", this.getCalcValue, this)
            },
            register: function(e) {
                if (e.set("renderOptions", this.renderOptions), e.set("renderOtherText", this.renderOtherText), e.set("selected", []), 0 != e.get("options").length) {
                    var t = _.filter(e.get("options"), function(e) {
                        return 1 == e.selected
                    });
                    t = _.map(t, function(e) {
                        return e.value
                    })
                }
                var i = e.get("value");
                void 0 !== i && Array.isArray(i) ? e.set("value", i) : void 0 !== t && e.set("value", t)
            },
            renderOptions: function() {
                var e = "";
                if ("" == this.value || Array.isArray(this.value) && 0 < this.value.length || 0 < this.value.length) var t = !0;
                else var t = !1;
                if (_.each(this.options, function(i, n) {
                        Array.isArray(this.value) && (Array.isArray(this.value[0]) && -1 !== _.indexOf(this.value[0], i.value) ? t = !0 : _.indexOf(this.value, i.value) && (t = !0)), i.value == this.value && (t = !0), void 0 === i.visible && (i.visible = !0), i.fieldID = this.id, i.classes = this.classes, i.index = n;
                        var r = !1;
                        Array.isArray(this.value) && 0 < this.value.length ? -1 === _.indexOf(this.value[0].split(","), i.value) && -1 === _.indexOf(this.value, i.value) || (r = !0) : _.isArray(this.value) || i.value != this.value ? 1 == i.selected && this.clean && void 0 === this.value && (r = !0) : r = !0, i.selected = r, i.isSelected = r, i.required = this.required;
                        var o = nfRadio.channel("app").request("get:template", "#tmpl-nf-field-listcheckbox-option");
                        e += o(i)
                    }, this), 1 == this.show_other) {
                    "nf-other" == this.value && (t = !1);
                    var i = {
                            fieldID: this.id,
                            classes: this.classes,
                            currentValue: this.value,
                            renderOtherText: this.renderOtherText,
                            valueFound: t
                        },
                        n = nfRadio.channel("app").request("get:template", "#tmpl-nf-field-listcheckbox-other");
                    e += n(i)
                }
                return e
            },
            renderOtherText: function() {
                if ("nf-other" == this.currentValue || !this.valueFound) {
                    "nf-other" == this.currentValue && (this.currentValue = "");
                    var e = {
                        fieldID: this.fieldID,
                        classes: this.classes,
                        currentValue: this.currentValue
                    };
                    return nfRadio.channel("app").request("get:template", "#tmpl-nf-field-listcheckbox-other-text")(e)
                }
            },
            getCalcValue: function(e) {
                var t = 0,
                    i = e.get("options");
                return 0 != i.length && _.each(e.get("value"), function(e) {
                    var n = _.find(i, function(t) {
                        return t.value == e
                    });
                    t = Number(t) + Number(n.calc)
                }), t
            },
            beforeUpdateField: function(e, t) {
                var i = t.get("value") || [];
                "string" == typeof i && (i = [i]);
                var n = jQuery(e).val();
                if (jQuery(e).prop("checked")) i.push(n), jQuery(e).addClass("nf-checked"), jQuery(e).parent().find('label[for="' + jQuery(e).prop("id") + '"]').addClass("nf-checked-label");
                else {
                    jQuery(e).removeClass("nf-checked"), jQuery(e).parent().find('label[for="' + jQuery(e).prop("id") + '"]').removeClass("nf-checked-label");
                    var r = i.indexOf(n);
                    if (-1 != r) i.splice(r, 1);
                    else if (Array.isArray(i)) {
                        var o = i[0].split(","),
                            a = o.indexOf(n); - 1 !== a && o.splice(a, 1), i = o.join(",")
                    }
                }
                return _.clone(i)
            }
        })
    }), i("controllers/fieldRadio", [], function() {
        return Marionette.Object.extend({
            initialize: function() {
                this.listenTo(nfRadio.channel("listradio"), "change:modelValue", this.changeModelValue), this.listenTo(nfRadio.channel("listradio"), "init:model", this.register), nfRadio.channel("listradio").reply("get:calcValue", this.getCalcValue, this), this.listenTo(nfRadio.channel("listradio"), "change:field", this.updateCheckedClass, this)
            },
            register: function(e) {
                if (e.set("renderOptions", this.renderOptions), e.set("renderOtherText", this.renderOtherText), 0 != e.get("options").length) {
                    var t = _.find(e.get("options"), function(e) {
                        return 1 == e.selected
                    });
                    void 0 !== t && e.set("value", t.value)
                }
            },
            changeModelValue: function(e) {
                1 == e.get("show_other") && e.trigger("reRender")
            },
            renderOptions: function() {
                var e = "";
                if ("" == this.value) var t = !0;
                else var t = !1;
                if (_.each(this.options, function(i, n) {
                        i.value == this.value && (t = !0), void 0 === i.visible && (i.visible = !0), i.selected = !1, i.fieldID = this.id, i.classes = this.classes, i.currentValue = this.value, i.index = n, i.required = this.required, this.clean && 1 == this.selected ? i.selected = !0 : this.value == i.value ? i.selected = !0 : i.selected = !1;
                        var r = nfRadio.channel("app").request("get:template", "#tmpl-nf-field-listradio-option");
                        e += r(i)
                    }, this), 1 == this.show_other) {
                    "nf-other" == this.value && (t = !1);
                    var i = {
                            fieldID: this.id,
                            classes: this.classes,
                            currentValue: this.value,
                            renderOtherText: this.renderOtherText,
                            valueFound: t
                        },
                        n = nfRadio.channel("app").request("get:template", "#tmpl-nf-field-listradio-other");
                    e += n(i)
                }
                return e
            },
            renderOtherText: function() {
                if ("nf-other" == this.currentValue || !this.valueFound) {
                    "nf-other" == this.currentValue && (this.currentValue = "");
                    var e = {
                        fieldID: this.fieldID,
                        classes: this.classes,
                        currentValue: this.currentValue
                    };
                    return nfRadio.channel("app").request("get:template", "#tmpl-nf-field-listradio-other-text")(e)
                }
            },
            getCalcValue: function(e) {
                var t = 0;
                if (0 != e.get("options").length) {
                    var i = _.find(e.get("options"), function(t) {
                        return e.get("value") == t.value
                    });
                    void 0 !== i && (t = i.calc)
                }
                return t
            },
            updateCheckedClass: function(e, t) {
                jQuery('[name="' + jQuery(e).attr("name") + '"]').removeClass("nf-checked"), jQuery(e).closest("ul").find("label").removeClass("nf-checked-label"), jQuery(e).addClass("nf-checked"), jQuery(e).closest("li").find('label[for="' + jQuery(e).prop("id") + '"]').addClass("nf-checked-label")
            }
        })
    }), i("controllers/fieldNumber", [], function() {
        return Marionette.Object.extend({
            initialize: function() {
                this.listenTo(nfRadio.channel("number"), "init:model", this.maybeMinDefault), this.listenTo(nfRadio.channel("number"), "keyup:field", this.validateMinMax)
            },
            maybeMinDefault: function(e) {
                if ("" == e.get("value") && "" == e.get("placeholder")) {
                    var t = e.get("num_min");
                    e.set("placeholder", t)
                }
            },
            validateMinMax: function(e, t) {
                var i = jQuery(e),
                    n = parseFloat(i.val()),
                    r = i.attr("min"),
                    o = i.attr("max"),
                    a = parseFloat(i.attr("step"));
                if (r && n < r) {
                    var l = nfRadio.channel("fields").request("get:field", t.get("id")),
                        s = nfRadio.channel("app").request("get:form", l.get("formID"));
                    nfRadio.channel("fields").request("add:error", t.get("id"), "number-min", s.get("settings").fieldNumberNumMinError)
                } else nfRadio.channel("fields").request("remove:error", t.get("id"), "number-min");
                if (o && n > o) {
                    var l = nfRadio.channel("fields").request("get:field", t.get("id")),
                        s = nfRadio.channel("app").request("get:form", l.get("formID"));
                    nfRadio.channel("fields").request("add:error", t.get("id"), "number-max", s.get("settings").fieldNumberNumMaxError)
                } else nfRadio.channel("fields").request("remove:error", t.get("id"), "number-max");
                var d = Math.round(1e9 * parseFloat(n)),
                    c = Math.round(1e9 * parseFloat(a));
                if (n && 0 != d % c) {
                    var l = nfRadio.channel("fields").request("get:field", t.get("id")),
                        s = nfRadio.channel("app").request("get:form", l.get("formID"));
                    nfRadio.channel("fields").request("add:error", t.get("id"), "number-step", s.get("settings").fieldNumberIncrementBy + a)
                } else nfRadio.channel("fields").request("remove:error", t.get("id"), "number-step")
            }
        })
    }), i("controllers/mirrorField", [], function() {
        var e = nfRadio.channel("fields");
        return Marionette.Object.extend({
            listeningModel: "",
            initialize: function() {
                this.listenTo(e, "init:model", this.registerMirror)
            },
            registerMirror: function(e) {
                if (e.get("mirror_field")) {
                    this.listeningModel = e;
                    var t = e.get("mirror_field");
                    this.listenTo(nfRadio.channel("field-" + t), "change:modelValue", this.changeValue)
                }
            },
            changeValue: function(e) {
                this.listeningModel.set("value", e.get("value")), this.listeningModel.trigger("reRender")
            }
        })
    }), i("controllers/confirmField", [], function() {
        var e = nfRadio.channel("fields"),
            t = "confirm-mismatch";
        return Marionette.Object.extend({
            initialize: function() {
                this.listenTo(e, "init:model", this.registerConfirm), this.listenTo(e, "keyup:field", this.confirmKeyup)
            },
            registerConfirm: function(e) {
                e.get("confirm_field") && this.listenTo(nfRadio.channel("form"), "loaded", function(t) {
                    this.registerConfirmListeners(e)
                })
            },
            registerConfirmListeners: function(e) {
                var t = nfRadio.channel("form-" + e.get("formID")).request("get:fieldByKey", e.get("confirm_field"));
                void 0 !== t && (t.set("confirm_with", e.get("id")), this.listenTo(nfRadio.channel("field-" + t.get("id")), "change:modelValue", this.changeValue), this.listenTo(nfRadio.channel("field-" + e.get("id")), "change:modelValue", this.changeValue))
            },
            changeValue: function(i) {
                if (void 0 === i.get("confirm_with")) var n = i,
                    r = nfRadio.channel("form-" + i.get("formID")).request("get:fieldByKey", n.get("confirm_field"));
                else var r = i,
                    n = e.request("get:field", r.get("confirm_with"));
                var o = (r.get("id"), n.get("id"));
                if ("" == n.get("value") || n.get("value") == r.get("value")) nfRadio.channel("fields").request("remove:error", o, t);
                else {
                    var a = nfRadio.channel("fields").request("get:field", o),
                        l = nfRadio.channel("app").request("get:form", a.get("formID"));
                    nfRadio.channel("fields").request("add:error", o, t, l.get("settings").confirmFieldErrorMsg)
                }
            },
            confirmKeyup: function(e, i, n) {
                var r = jQuery(e).val();
                if (i.get("confirm_field")) var o = i,
                    a = i.get("id"),
                    l = nfRadio.channel("form-" + i.get("formID")).request("get:fieldByKey", o.get("confirm_field")),
                    s = l.get("value"),
                    d = r;
                else if (i.get("confirm_with")) var o = nfRadio.channel("fields").request("get:field", i.get("confirm_with")),
                    a = o.get("id"),
                    d = o.get("value"),
                    s = d;
                if (void 0 !== o)
                    if ("" == d) nfRadio.channel("fields").request("remove:error", a, t);
                    else if (r == s) nfRadio.channel("fields").request("remove:error", a, t);
                else {
                    var c = nfRadio.channel("fields").request("get:field", a),
                        f = nfRadio.channel("app").request("get:form", c.get("formID"));
                    nfRadio.channel("fields").request("add:error", a, t, f.get("settings").confirmFieldErrorMsg)
                }
            }
        })
    }), i("controllers/updateFieldModel", [], function() {
        return Marionette.Object.extend({
            initialize: function() {
                nfRadio.channel("nfAdmin").reply("update:field", this.updateField)
            },
            updateField: function(e, t) {
                e.get("isUpdated") || (e.set("value", t), e.set("isUpdated", !0), _.isArray(t) && e.trigger("change:value", e))
            }
        })
    }), i("controllers/submitButton", ["controllers/submitButton"], function(e) {
        return Marionette.Object.extend({
            bound: {},
            initialize: function() {
                this.listenTo(nfRadio.channel("submit"), "init:model", this.registerHandlers)
            },
            registerHandlers: function(e) {
                if (void 0 !== this.bound[e.get("id")]) return !1;
                this.listenTo(nfRadio.channel("field-" + e.get("id")), "click:field", this.click, this), e.listenTo(nfRadio.channel("form-" + e.get("formID")), "before:submit", this.beforeSubmit, e), e.listenTo(nfRadio.channel("form-" + e.get("formID")), "submit:failed", this.resetLabel, e), e.listenTo(nfRadio.channel("form-" + e.get("formID")), "submit:response", this.resetLabel, e), e.listenTo(nfRadio.channel("form-" + e.get("formID")), "enable:submit", this.maybeEnable, e), e.listenTo(nfRadio.channel("form-" + e.get("formID")), "disable:submit", this.maybeDisable, e), e.listenTo(nfRadio.channel("form-" + e.get("formID")), "processingLabel", this.processingLabel, e), e.listenTo(nfRadio.channel("fields"), "add:error", this.maybeDisable, e), e.listenTo(nfRadio.channel("fields"), "remove:error", this.maybeEnable, e), this.bound[e.get("id")] = !0
            },
            click: function(e, t) {
                var i = nfRadio.channel("app").request("get:form", t.get("formID"));
                nfRadio.channel("form-" + t.get("formID")).request("submit", i)
            },
            beforeSubmit: function() {
                this.set("disabled", !0), nfRadio.channel("form-" + this.get("formID")).trigger("processingLabel", this)
            },
            maybeDisable: function(e) {
                void 0 !== e && e.get("formID") != this.get("formID") || (this.set("disabled", !0), this.trigger("reRender"))
            },
            maybeEnable: function(e) {
                if (void 0 !== e && e.get("formID") != this.get("formID")) return !1;
                var t = nfRadio.channel("app").request("get:form", this.get("formID"));
                0 == _.size(t.get("fieldErrors")) && (this.set("disabled", !1), this.trigger("reRender"))
            },
            processingLabel: function() {
                if (this.get("label") == this.get("processing_label")) return !1;
                this.set("oldLabel", this.get("label")), this.set("label", this.get("processing_label")), this.trigger("reRender")
            },
            resetLabel: function(e) {
                void 0 !== e.errors && void 0 !== e.errors.nonce && _.size(e.errors.nonce) > 0 && void 0 !== e.errors.nonce.new_nonce && void 0 !== e.errors.nonce.nonce_ts || (void 0 !== this.get("oldLabel") && this.set("label", this.get("oldLabel")), this.set("disabled", !1), this.trigger("reRender"))
            }
        })
    }), i("controllers/submitDebug", [], function() {
        return Marionette.Object.extend({
            initialize: function() {
                this.listenTo(nfRadio.channel("forms"), "submit:response", this.submitDebug)
            },
            submitDebug: function(e, t, i, n) {
                if (void 0 !== e.debug) {
                    if (void 0 !== e.debug.form) {
                        var r = document.createElement("span");
                        _.each(e.debug.form, function(e, t) {
                            var i = document.createTextNode(e);
                            r.appendChild(i), r.appendChild(document.createElement("br"))
                        }), jQuery(".nf-debug-msg").html(r)
                    }
                  
                }
            }
        })
    }), i("controllers/getFormErrors", [], function() {
        nfRadio.channel("fields");
        return Marionette.Object.extend({
            initialize: function(e) {
                nfRadio.channel("form").reply("get:errors", this.getFormErrors)
            },
            getFormErrors: function(e) {
                var t = nfRadio.channel("app").request("get:form", e),
                    i = !1;
                return t && (0 !== t.get("errors").length && _.each(t.get("errors").models, function(e) {
                    i = i || {}, i[e.get("id")] = e.get("msg")
                }), _.each(t.get("fields").models, function(e) {
                    "submit" != e.get("type") && e.get("errors").length > 0 && (i = i || {}, i[e.get("id")] = e.get("errors"))
                })), i
            }
        })
    }), i("controllers/validateRequired", [], function() {
        return Marionette.Object.extend({
            initialize: function() {
                this.listenTo(nfRadio.channel("fields"), "blur:field", this.validateRequired), this.listenTo(nfRadio.channel("fields"), "change:field", this.validateRequired), this.listenTo(nfRadio.channel("fields"), "keyup:field", this.validateKeyup), this.listenTo(nfRadio.channel("fields"), "change:modelValue", this.validateModelData), this.listenTo(nfRadio.channel("submit"), "validate:field", this.validateModelData)
            },
            validateKeyup: function(e, t, i) {
                if (1 != t.get("required")) return !1;
                t.get("clean") || this.validateRequired(e, t)
            },
            validateRequired: function(e, t) {
                if (1 != t.get("required") || !t.get("visible")) return !1;
                var i = jQuery(e).val(),
                    n = nfRadio.channel(t.get("type")).request("validate:required", e, t),
                    r = !0,
                    o = t.get("mask");
                if (o && (o = o.replace(/9/g, "_"), o = o.replace(/a/g, "_"), o = o.replace(/\*/g, "_")), o && i === o && 0 < t.get("errors").length && (r = !1), jQuery.trim(i) || (r = !1), void 0 !== n) var a = n;
                else var a = r;
                this.maybeError(a, t)
            },
            validateModelData: function(e) {
                if (1 != e.get("required") || !e.get("visible") || e.get("clean")) return !1;
                if (e.get("errors").get("required-error")) return !1;
                currentValue = e.get("value");
                var t = !0;
                jQuery.trim(currentValue) || (t = !1);
                var i = nfRadio.channel(e.get("type")).request("validate:modelData", e);
                if (void 0 !== i) var n = i;
                else var n = t;
                this.maybeError(n, e)
            },
            maybeError: function(e, t) {
                if (e) nfRadio.channel("fields").request("remove:error", t.get("id"), "required-error");
                else {
                    var i = nfRadio.channel("form-" + t.get("formID")).request("get:form");
                    void 0 !== i && nfRadio.channel("fields").request("add:error", t.get("id"), "required-error", i.get("settings").validateRequiredField)
                }
            }
        })
    }), i("controllers/submitError", [], function() {
        return Marionette.Object.extend({
            initialize: function() {
                this.listenTo(nfRadio.channel("forms"), "submit:response", this.submitErrors)
            },
            submitErrors: function(e, t, i, n) {
                if (_.size(e.errors.nonce) > 0 && void 0 !== e.errors.nonce.new_nonce && void 0 !== e.errors.nonce.nonce_ts) {
                    nfFrontEnd.ajaxNonce = e.errors.nonce.new_nonce, nfFrontEnd.nonce_ts = e.errors.nonce.nonce_ts;
                    var r = nfRadio.channel("app").request("get:form", n);
                    nfRadio.channel("form-" + n).request("submit", r)
                }
                if (_.size(e.errors.fields) > 0 && _.each(e.errors.fields, function(e, t) {
                        "object" == typeof e ? nfRadio.channel("fields").request("add:error", t, e.slug, e.message) : nfRadio.channel("fields").request("add:error", t, "required-error", e)
                    }), _.size(e.errors.form) > 0 && _.each(e.errors.form, function(e, t) {
                        nfRadio.channel("form-" + n).request("remove:error", t), nfRadio.channel("form-" + n).request("add:error", t, e)
                    }), void 0 !== e.errors.last && void 0 !== e.errors.last.message) {
                    var o = "background: rgba( 255, 207, 115, .5 ); color: #FFA700; display: block;";
                  
                }
                jQuery("#nf-form-" + n + "-cont .nf-field-container").show()
            }
        })
    }), i("controllers/actionRedirect", [], function() {
        return Marionette.Object.extend({
            initialize: function() {
                this.listenTo(nfRadio.channel("forms"), "submit:response", this.actionRedirect)
            },
            actionRedirect: function(e) {
                void 0 !== e.data.halt && void 0 !== e.data.halt.redirect && "" != e.data.halt.redirect && (window.location = e.data.halt.redirect), 0 == _.size(e.errors) && void 0 !== e.data.actions && void 0 !== e.data.actions.redirect && "" != e.data.actions.redirect && (window.location = e.data.actions.redirect)
            }
        })
    }), i("controllers/actionSuccess", [], function() {
        return Marionette.Object.extend({
            initialize: function() {
                this.listenTo(nfRadio.channel("forms"), "submit:response", this.actionSubmit)
            },
            actionSubmit: function(e) {
                if (0 == _.size(e.errors) && void 0 !== e.data.actions && void 0 !== e.data.actions.success_message && "" != e.data.actions.success_message) {
                    var t = e.data.form_id,
                        i = jQuery("#nf-form-" + t + "-cont .nf-response-msg");
                    i.html(e.data.actions.success_message).show();
                    var n = i.offset().top,
                        r = i.offset().top + i.outerHeight(),
                        o = jQuery(window).scrollTop() + jQuery(window).height(),
                        a = jQuery(window).scrollTop();
                    o > r && a < n || jQuery("html, body").animate({
                        scrollTop: i.offset().top - 50
                    }, 300)
                }
            }
        })
    }), i("controllers/fieldSelect", [], function() {
        return Marionette.Object.extend({
            initialize: function() {
                this.listenTo(nfRadio.channel("fields"), "init:model", function(e) {
                    "list" == e.get("parentType") && this.register(e)
                }, this), nfRadio.channel("listselect").reply("get:calcValue", this.getCalcValue, this), nfRadio.channel("listmultiselect").reply("get:calcValue", this.getCalcValue, this)
            },
            register: function(e) {
                if (e.set("renderOptions", this.renderOptions), e.set("renderOtherAttributes", this.renderOtherAttributes), 0 != e.get("options").length) {
                    var t = e.get("value");
                    if ("listmultiselect" == e.get("type")) {
                        var i = _.filter(e.get("options"), function(e) {
                            return 1 == e.selected
                        });
                        i = _.map(i, function(e) {
                            return e.value
                        });
                        var n = i
                    } else if ("listradio" !== e.get("type")) {
                        var i = _.find(e.get("options"), function(e) {
                            return 1 == e.selected
                        });
                        if (void 0 === i && (i = _.first(e.get("options"))), void 0 !== i && void 0 !== i.value) var n = i.value;
                        else if (void 0 !== i) var n = i.label
                    }
                    void 0 !== t && "" !== t && Array.isArray(t) ? e.set("value", t) : void 0 !== i && e.set("value", n)
                }
            },
            renderOptions: function() {
                var e = "";
                return _.each(this.options, function(t) {
                    if (_.isArray(this.value)) {
                        if ("listmultiselect" === this.type && 0 < this.value.length && -1 != _.indexOf(this.value[0].split(","), t.value)) var i = !0;
                        else if (-1 != _.indexOf(this.value, t.value)) var i = !0
                    } else if (_.isArray(this.value) || t.value != this.value)
                        if (1 == t.selected && this.clean && void 0 === this.value) var i = !0;
                        else var i = !1;
                    else var i = !0;
                    void 0 === t.visible && (t.visible = !0), t.selected = i, t.fieldID = this.id, t.classes = this.classes, t.currentValue = this.value;
                    var n = nfRadio.channel("app").request("get:template", "#tmpl-nf-field-listselect-option");
                    e += n(t)
                }, this), e
            },
            renderOtherAttributes: function() {
                var e = "";
                if ("listmultiselect" == this.type) {
                    e += " multiple";
                    e = e + ' size="' + (this.multi_size || 5) + '"'
                }
                return e
            },
            getCalcValue: function(e) {
                var t = 0,
                    i = e.get("options");
                if (0 != i.length)
                    if ("listmultiselect" == e.get("type")) _.each(e.get("value"), function(e) {
                        var n = _.find(i, function(t) {
                            return t.value == e
                        });
                        t += Number(n.calc)
                    });
                    else {
                        var n = _.find(i, function(t) {
                            return e.get("value") == t.value
                        });
                        void 0 === n && (n = e.get("options")[0]), t = n.calc
                    }
                return t
            }
        })
    }), i("controllers/coreSubmitResponse", [], function() {
        return Marionette.Object.extend({
            initialize: function() {
                this.listenTo(nfRadio.channel("forms"), "submit:response", this.actionSubmit)
            },
            actionSubmit: function(e) {
                var t = nfRadio.channel("app").request("get:form", e.data.form_id);
                if (0 != _.size(e.errors)) return !1;
                1 == e.data.settings.clear_complete && (t.get("fields").reset(t.get("loadedFields")), 1 != e.data.settings.hide_complete && nfRadio.channel("captcha").trigger("reset")), 1 == e.data.settings.hide_complete && t.trigger("hide")
            }
        })
    }), i("controllers/fieldProduct", [], function() {
        return Marionette.Object.extend({
            initialize: function() {
                this.listenTo(nfRadio.channel("product"), "init:model", this.register), nfRadio.channel("product").reply("get:calcValue", this.getCalcValue, this)
            },
            register: function(e) {
                e.set("renderProductQuantity", this.renderProductQuantity), e.set("renderProduct", this.renderProduct), e.set("renderOptions", this.renderOptions)
            },
            renderProduct: function() {
                switch (this.product_type) {
                    case "user":
                        var e = nfRadio.channel("app").request("get:template", "#tmpl-nf-field-textbox");
                        return e(this);
                    case "hidden":
                        var e = nfRadio.channel("app").request("get:template", "#tmpl-nf-field-hidden");
                        return e(this);
                    case "dropdown":
                        var e = nfRadio.channel("app").request("get:template", "#tmpl-nf-product-dropdown");
                        return e(this);
                    default:
                        var e = nfRadio.channel("app").request("get:template", "#tmpl-nf-product-single");
                        return e(this)
                }
            },
            renderProductQuantity: function() {
                if (1 == this.product_use_quantity) {
                    return nfRadio.channel("app").request("get:template", "#tmpl-nf-product-quantity")(this)
                }
            },
            renderOptions: function() {
                var e = this,
                    t = "";
                return _.each(this.options, function(i) {
                    if (1 == i.selected) var n = !0;
                    else var n = !1;
                    i.selected = n, i.fieldID = e.id, i.classes = e.classes, i.currentValue = e.value;
                    var r = nfRadio.channel("app").request("get:template", "#tmpl-nf-product-" + e.product_type + "-option");
                    t += r(i)
                }), t
            },
            getCalcValue: function(e) {
                return e.get("product_price") * e.get("value")
            }
        })
    }), i("controllers/fieldTotal", [], function() {
        return Marionette.Object.extend({
            totalModel: {},
            productTotals: {},
            initialize: function() {
                this.listenTo(nfRadio.channel("total"), "init:model", this.register), this.listenTo(nfRadio.channel("shipping"), "init:model", this.registerShipping)
            },
            register: function(e) {
                this.totalModel = e;
                var t = e.get("formID");
                this.listenTo(nfRadio.channel("form-" + t), "loaded", this.onFormLoaded), this.listenTo(nfRadio.channel("product"), "change:modelValue", this.onChangeProduct), this.listenTo(nfRadio.channel("quantity"), "change:modelValue", this.onChangeQuantity)
            },
            registerShipping: function(e) {
                this.shippingCost = e.get("shipping_cost")
            },
            onFormLoaded: function(e) {
                var t = e.get("fields").models,
                    i = {},
                    n = {};
                for (var r in t) {
                    var o = t[r],
                        a = o.get("id");
                    if ("product" == o.get("type")) i[a] = o;
                    else if ("quantity" == o.get("type")) {
                        var l = o.get("product_assignment");
                        n[l] = o
                    }
                }
                for (var l in i) {
                    var s = i[l],
                        d = Number(s.get("product_price"));
                    n[l] ? d *= n[l].get("value") : 1 == s.get("product_use_quantity") && (d *= s.get("value")), this.productTotals[l] = d
                }
                this.updateTotal()
            },
            onChangeProduct: function(e) {
                var t = e.get("id"),
                    i = Number(e.get("product_price")),
                    n = Number(e.get("value")),
                    r = n * i;
                this.productTotals[t] = r, this.updateTotal()
            },
            onChangeQuantity: function(e) {
                var t = e.get("product_assignment"),
                    i = nfRadio.channel("fields").request("get:field", t),
                    n = Number(i.get("product_price")),
                    r = Number(e.get("value")),
                    o = r * n;
                this.productTotals[t] = o, this.updateTotal()
            },
            updateTotal: function() {
                var e = 0;
                for (var t in this.productTotals) e += Number(this.productTotals[t]);
                e && this.shippingCost && (e += Number(this.shippingCost)), this.totalModel.set("value", e.toFixed(2)), this.totalModel.trigger("reRender")
            }
        })
    }), i("controllers/fieldQuantity", [], function() {
        return Marionette.Object.extend({
            initialize: function() {
                this.listenTo(nfRadio.channel("quantity"), "init:model", this.registerQuantity)
            },
            registerQuantity: function(e) {
                var t = e.get("product_assignment"),
                    i = nfRadio.channel("fields").request("get:field", t);
                i && i.set("product_use_quantity", 0)
            }
        })
    }), i("models/calcModel", [], function() {
        return Backbone.Model.extend({
            initialize: function() {
                this.set("formID", this.collection.options.formModel.get("id")), this.set("fields", {}), nfRadio.channel("calc").trigger("init:model", this), this.on("change:value", this.changeValue, this)
            },
            changeField: function(e) {
                nfRadio.channel("calc").trigger("change:field", this, e)
            },
            changeCalc: function(e) {
                nfRadio.channel("calc").trigger("change:calc", this, e)
            },
            changeValue: function() {
                nfRadio.channel("calc").trigger("change:value", this)
            }
        })
    }), i("models/calcCollection", ["models/calcModel"], function(e) {
        return Backbone.Collection.extend({
            model: e,
            comparator: "order",
            initialize: function(e, t) {
                this.options = t, _.each(e, function(e) {
                    void 0 !== e.dec && ("" === e.dec.toString().trim() && (e.dec = 2), e.dec = parseInt(e.dec))
                }), nfRadio.channel("form-" + t.formModel.get("id")).reply("get:calc", this.getCalc, this)
            },
            getCalc: function(e) {
                return this.findWhere({
                    name: e
                })
            }
        })
    }), i("controllers/calculations", ["models/calcCollection"], function(e) {
        return Marionette.Object.extend({
            initialize: function() {
                this.calcs = {}, this.displayFields = {}, this.listenTo(nfRadio.channel("form"), "loaded", this.registerCalcs), this.listenTo(nfRadio.channel("fields"), "reset:collection", this.resetCalcs), this.listenTo(nfRadio.channel("calc"), "change:field", this.changeField), this.listenTo(nfRadio.channel("calc"), "change:calc", this.changeCalc);
                var e = this;
                _.each(nfFrontEnd.use_merge_tags.calculations, function(t) {
                    e.listenTo(nfRadio.channel("fields-" + t), "init:model", e.initDisplayField)
                }), this.listenTo(nfRadio.channel("calc"), "change:value", this.updateDisplayFields), this.init = {}
            },
            resetCalcs: function(e) {
                void 0 !== e.options.formModel && this.registerCalcs(e.options.formModel)
            },
            registerCalcs: function(t) {
                var i = new e(t.get("settings").calculations, {
                    formModel: t
                });
                this.calcs[t.get("id")] = i;
                var n = this;
                _.each(i.models, function(e) {
                    n.init[e.get("name")] = !0, n.setupCalc(e)
                })
            },
            setupCalc: function(e) {
                var t = this,
                    i = e.get("eq"),
                    n = i,
                    r = (e.get("name"), i.match(new RegExp(/{field:(.*?)}/g)));
                r && (r = r.map(function(i) {
                    var r = i.replace(":calc}", "").replace("}", "").replace("{field:", "");
                    if (fieldModel = nfRadio.channel("form-" + e.get("formID")).request("get:fieldByKey", r), "undefined" != typeof fieldModel) {
                        fieldModel.set("clean", !1), fieldModel.on("change:value", e.changeField, e);
                        var o = t.getCalcValue(fieldModel);
                        t.updateCalcFields(e, r, o), n = t.replaceKey("field", r, o, n)
                    }
                }));
                var o = i.match(new RegExp(/{calc:(.*?)}/g));
                o && (o = o.map(function(i) {
                    var r = i.replace("}", "").replace("{calc:", ""),
                        o = e.collection.findWhere({
                            name: r
                        });
                    if (void 0 !== o) {
                        o.on("change:value", e.changeCalc, e);
                        var a = o.get("value");
                        n = t.replaceKey("calc", r, a, n)
                    }
                })), n = n.replace(/{([a-zA-Z0-9]|:|_|-)*}/g, 0), n = n.replace(/\r?\n|\r/g, "");
                try {
                    this.debug("Calculation Decoder " + n + " -> " + this.localeDecodeEquation(n) + " (Setup)"), e.set("value", Number(mexp.eval(this.localeDecodeEquation(n))).toFixed(e.get("dec")))
                } catch (e) {
                    console.log(e)
                }
                "NaN" === e.get("value") && e.set("value", "0")
            },
            updateCalcFields: function(e, t, i) {
                var n = e.get("fields");
                n[t] = i, e.set("fields", n)
            },
            getCalcValue: function(e) {
                var t = nfRadio.channel(e.get("type")).request("get:calcValue", e),
                    i = new n(nfi18n.siteLocale, nfi18n.thousands_sep, nfi18n.decimal_point),
                    r = t || e.get("value"),
                    o = i.numberDecoder(r),
                    a = i.numberEncoder(r);
                return t = void 0 !== o && jQuery.isNumeric(o) ? a : 0, e.get("visible") || (t = 0), t
            },
            replaceKey: function(e, t, i, n) {
                n = n || calcModel.get("eq"), tag = "{" + e + ":" + t + "}";
                var r = new RegExp(tag, "g");
                calcTag = "{" + e + ":" + t + ":calc}";
                var o = new RegExp(calcTag, "g");
                return n = n.replace(r, i), n = n.replace(o, i)
            },
            replaceAllKeys: function(e) {
                var t = e.get("eq"),
                    i = this;
                _.each(e.get("fields"), function(e, n) {
                    t = i.replaceKey("field", n, e, t)
                });
                var n = t.match(new RegExp(/{calc:(.*?)}/g));
                return n && _.each(n, function(i) {
                    var n = i.replace("}", "").replace("{calc:", ""),
                        r = e.collection.findWhere({
                            name: n
                        });
                    if (void 0 !== r) {
                        var o = new RegExp(i, "g");
                        t = t.replace(o, r.get("value"))
                    }
                }), t
            },
            changeField: function(e, t) {
                var i = t.get("key"),
                    n = this.getCalcValue(t);
                this.updateCalcFields(e, i, n);
                var r = this.replaceAllKeys(e);
                r = r.replace(/{([a-zA-Z0-9]|:|_|-)*}/g, "0"), r = r.replace(/\r?\n|\r/g, "");
                try {
                    this.debug("Calculation Decoder " + r + " -> " + this.localeDecodeEquation(r) + " (Change Field)"), e.set("value", Number(mexp.eval(this.localeDecodeEquation(r))).toFixed(e.get("dec")))
                } catch (e) {
                    this.debug() && console.log(e)
                }
                "NaN" === e.get("value") && e.set("value", "0")
            },
            initDisplayField: function(e) {
                if (e.get("default") && "string" == typeof e.get("default")) {
                    var t = e.get("default").match(new RegExp(/{calc:(.*?)}/g));
                    t && _.each(t, function(t) {
                        t = t.replace("{calc:", "").replace("}", "").replace(":2", ""), this.displayFields[t] = this.displayFields[t] || [], this.displayFields[t].push(e)
                    }, this)
                }
            },
            updateDisplayFields: function(e) {
                var t = this;
                void 0 !== this.displayFields[e.get("name")] && _.each(this.displayFields[e.get("name")], function(i) {
                    var n = "";
                    n = "html" === i.get("type") ? i.get("value") : i.get("default");
                    var r = n.match(new RegExp(/<span data-key="calc:(.*?)<\/span>/g));
                    _.each(r, function(e) {
                        var t = "{" + e.replace('<span data-key="', "").replace(/">(.*?)<\/span>/, "") + "}";
                        n = n.replace(e, t)
                    });
                    var o = n.match(new RegExp(/{calc:(.*?)}/g));
                    _.each(o, function(e) {
                        var r = e.replace("}", "").replace("{calc:", "").replace(":2", ""),
                            o = t.calcs[i.get("formID")].findWhere({
                                name: r
                            }),
                            a = new RegExp(e, "g"),
                            l = o.get("value");
                        void 0 !== l && (l = t.applyLocaleFormatting(l, o)), n = "html" === i.get("type") ? n.replace(a, '<span data-key="calc:' + r + '">' + l + "</span>") : l
                    }), i.set("value", n), t.init[e.get("name")] || i.trigger("reRender"), t.init[e.get("name")] = !1
                })
            },
            getCalc: function(e, t) {
                return this.calcs[t].findWhere({
                    name: e
                })
            },
            changeCalc: function(e, t) {
                var i = this.replaceAllKeys(e);
                i = i.replace("[", "").replace("]", ""), i = i.replace(/\r?\n|\r/g, "");
                try {
                    this.debug("Calculation Decoder " + i + " -> " + this.localeDecodeEquation(i) + " (Change Calc)"), e.set("value", Number(mexp.eval(this.localeDecodeEquation(i))).toFixed(e.get("dec")))
                } catch (e) {
                    console.log(e)
                }
                "NaN" === e.get("value") && e.set("value", "0")
            },
            applyLocaleFormatting: function(e, t) {
                return new n(nfi18n.siteLocale, nfi18n.thousands_sep, nfi18n.decimal_point).numberEncoder(e, t.get("dec"))
            },
            localeDecodeEquation: function(e) {
                var t = "",
                    i = "",
                    r = /[0-9.,]/,
                    o = new n(nfi18n.siteLocale, nfi18n.thousands_sep, nfi18n.decimal_point);
                return e = e.replace(/\s/g, ""), e = e.replace(/&nbsp;/g, ""), e.split("").forEach(function(e) {
                    r.test(e) ? i += e : (0 < i.length && (t += o.numberDecoder(i), i = ""), t += e)
                }), 0 < i.length && (t += o.numberDecoder(i)), t
            },
            debug: function(e) {
                window.nfCalculationsDebug && console.log(e)
            }
        })
    }), i("controllers/fieldDate", [], function() {
        return Marionette.Object.extend({
            initialize: function() {
                this.listenTo(nfRadio.channel("date"), "render:view", this.initDatepicker)
            },
            initDatepicker: function(e) {
                var t = e.model.get("date_format");
                "" != t && "default" != t || (t = this.convertDateFormat(nfi18n.dateFormat));
                var i = jQuery(e.el).find(".nf-element")[0],
                    n = pikadayResponsive(i, {
                        format: t,
                        outputFormat: t,
                        classes: jQuery(i).attr("class"),
                        placeholder: e.model.get("placeholder"),
                        pikadayOptions: {
                            yearRange: this.getYearRange(e.model),
                            minDate: this.getMinDate(e.model),
                            maxDate: this.getMaxDate(e.model),
                            firstDay: parseInt(nfi18n.startOfWeek)
                        }
                    });
                1 == e.model.get("date_default") && n.setDate(moment()), nfRadio.channel("pikaday").trigger("init", n, e.model)
            },
            getYearRange: function(e) {
                var t = e.get("year_range_start"),
                    i = e.get("year_range_end");
                return t && i ? [t, i] : t ? (i = t + 10, [t, i]) : i ? (t = i - 10, [t, i]) : 10
            },
            getMinDate: function(e) {
                var t = e.get("year_range_start");
                return t ? new Date(t, 0, 1) : null
            },
            getMaxDate: function(e) {
                var t = e.get("year_range_end");
                return t ? new Date(t, 11, 31) : null
            },
            convertDateFormat: function(e) {
                return e = e.replace("D", "ddd"), e = e.replace("d", "DD"), e = e.replace("l", "dddd"), e = e.replace("j", "D"), e = e.replace("N", ""), e = e.replace("S", ""), e = e.replace("w", "d"), e = e.replace("z", ""), e = e.replace("W", "W"), e = e.replace("M", "MMM"), e = e.replace("F", "MMMM"), e = e.replace("m", "MM"), e = e.replace("n", "M"), e = e.replace("t", ""), e = e.replace("L", ""), e = e.replace("o", "YYYY"), e = e.replace("Y", "YYYY"), e = e.replace("y", "YY"), e = e.replace("a", ""), e = e.replace("A", ""), e = e.replace("B", ""), e = e.replace("g", ""), e = e.replace("G", ""), e = e.replace("h", ""), e = e.replace("H", ""), e = e.replace("i", ""), e = e.replace("s", ""), e = e.replace("u", ""), e = e.replace("v", ""), e = e.replace("e", ""), e = e.replace("I", ""), e = e.replace("O", ""), e = e.replace("P", ""), e = e.replace("T", ""), e = e.replace("Z", ""), e = e.replace("c", ""), e = e.replace("r", ""), e = e.replace("u", "")
            }
        })
    }), i("controllers/fieldRecaptcha", [], function() {
        return Marionette.Object.extend({
            initialize: function() {
                this.listenTo(nfRadio.channel("recaptcha"), "init:model", this.initRecaptcha), this.listenTo(nfRadio.channel("forms"), "submit:response", this.resetRecaptcha)
            },
            initRecaptcha: function(e) {
                nfRadio.channel("recaptcha").reply("update:response", this.updateResponse, this, e.id)
            },
            updateResponse: function(e, t) {
                var i = nfRadio.channel("fields").request("get:field", t);
                i.set("value", e), nfRadio.channel("fields").request("remove:error", i.get("id"), "required-error")
            },
            resetRecaptcha: function() {
                var e = 0;
                jQuery(".g-recaptcha").each(function() {
                    try {
                        grecaptcha.reset(e)
                    } catch (e) {
                        console.log("Notice: Error trying to reset grecaptcha.")
                    }
                    e++
                })
            }
        })
    }), i("controllers/fieldHTML", [], function() {
        return Marionette.Object.extend({
            htmlFields: [],
            trackedMergeTags: [],
            initialize: function() {
                this.listenTo(Backbone.Radio.channel("fields-html"), "init:model", this.setupFieldMergeTagTracking)
            },
            setupFieldMergeTagTracking: function(e) {
                this.htmlFields.push(e);
                var t = e.get("formID");
                this.listenTo(nfRadio.channel("form-" + t), "init:model", function(t) {
                    var i = e.get("default").match(new RegExp(/{field:(.*?)}/g));
                    i && (_.each(i, function(e) {
                        var i = e.replace("{field:", "").replace("}", ""),
                            n = t.get("fields").findWhere({
                                key: i
                            });
                        void 0 !== n && (this.trackedMergeTags.push(n), this.listenTo(nfRadio.channel("field-" + n.get("id")), "change:modelValue", this.updateFieldMergeTags))
                    }, this), this.updateFieldMergeTags())
                }, this)
            },
            updateFieldMergeTags: function(e) {
                _.each(this.htmlFields, function(e) {
                    var t = e.get("value");
                    _.each(this.trackedMergeTags, function(e) {
                        var i = t.match(new RegExp(/<span data-key="field:(.*?)<\/span>/g));
                        _.each(i, function(i) {
                            -1 < i.indexOf('data-key="field:' + e.get("key")) && (t = t.replace(i, "{field:" + e.get("key") + "}"))
                        });
                        var n = "{field:" + e.get("key") + "}";
                        t = t.replace(n, '<span data-key="field:' + e.get("key") + '">' + e.get("value") + "</span>")
                    }, this), e.set("value", t), e.trigger("reRender")
                }, this)
            }
        })
    }), i("controllers/helpText", [], function() {
        return Marionette.Object.extend({
            initialize: function() {
                this.listenTo(nfRadio.channel("form"), "render:view", this.initHelpText), nfRadio.channel("form").reply("init:help", this.initHelpText)
            },
            initHelpText: function(e) {
                jQuery(e.el).find(".nf-help").each(function() {
                    jQuery(this).jBox("Tooltip", {
                        theme: "TooltipBorder",
                        content: jQuery(this).data("text")
                    })
                })
            }
        })
    }), i("controllers/fieldTextbox", [], function() {
        return Marionette.Object.extend({
            initialize: function() {
                nfRadio.channel("textbox").reply("get:calcValue", this.getCalcValue, this)
            },
            getCalcValue: function(e) {
                if ("currency" == e.get("mask")) {
                    var t = nfRadio.channel("app").request("get:form", e.get("formID")),
                        i = void 0 !== t ? t.get("currencySymbol") : "",
                        n = jQuery("<textarea />").html(i).text();
                    return e.get("value").replace(n, "")
                }
                return e.get("value")
            }
        })
    }), i("controllers/fieldTextareaRTE", [], function() {
        return Marionette.Object.extend({
            initialize: function() {
                this.listenTo(nfRadio.channel("textarea"), "render:view", this.initTextareaRTEs), this.listenTo(nfRadio.channel("textarea"), "click:extra", this.clickExtra), this.meta_image_frame, this.currentContext = {}, void 0 !== jQuery.summernote && (jQuery.summernote.options.icons = {
                    align: "dashicons dashicons-editor-alignleft",
                    alignCenter: "dashicons dashicons-editor-aligncenter",
                    alignJustify: "dashicons dashicons-editor-justify",
                    alignLeft: "dashicons dashicons-editor-alignleft",
                    alignRight: "dashicons dashicons-editor-alignright",
                    indent: "dashicons dashicons-editor-indent",
                    outdent: "dashicons dashicons-editor-outdent",
                    bold: "dashicons dashicons-editor-bold",
                    caret: "dashicons dashicons-arrow-down",
                    close: "dashicons dashicons-dismiss",
                    code: "dashicons dashicons-editor-code",
                    eraser: "dashicons dashicons-editor-removeformatting",
                    italic: "dashicons dashicons-editor-italic",
                    link: "dashicons dashicons-admin-links",
                    unlink: "dashicons dashicons-editor-unlink",
                    magic: "dashicons dashicons-editor-paragraph",
                    minus: "dashicons dashicons-minus",
                    orderedlist: "dashicons dashicons-editor-ol",
                    redo: "dashicons dashicons-redo",
                    square: "dashicons fa-square",
                    table: "dashicons dashicons-editor-table",
                    underline: "dashicons dashicons-editor-underline",
                    undo: "dashicons dashicons-undo",
                    unorderedlist: "dashicons dashicons-editor-ul"
                })
            },
            initTextareaRTEs: function(e) {
                if (1 != e.model.get("textarea_rte")) return !1;
                var t = this,
                    i = function(e) {
                        return t.linkButton(e)
                    },
                    n = function(e) {
                        return t.mediaButton(e)
                    },
                    r = [
                        ["paragraphStyle", ["style"]],
                        ["fontStyle", ["bold", "italic", "underline", "clear"]],
                        ["lists", ["ul", "ol"]],
                        ["paragraph", ["paragraph"]],
                        ["customGroup", ["linkButton", "unlink"]],
                        ["table", ["table"]],
                        ["actions", ["undo", "redo"]]
                    ];
                1 == e.model.get("textarea_media") && 0 != userSettings.uid && r.push(["tools", ["mediaButton"]]), jQuery(e.el).find(".nf-element").summernote({
                    toolbar: r,
                    buttons: {
                        linkButton: i,
                        mediaButton: n
                    },
                    height: 150,
                    codemirror: {
                        theme: "monokai",
                        lineNumbers: !0
                    },
                    prettifyHtml: !0,
                    callbacks: {
                        onChange: function(t) {
                            e.model.set("value", jQuery(this).summernote("code"))
                        }
                    }
                });
                var o = jQuery(e.el).find(".link-button").next(".dropdown-menu").find("button");
                o.replaceWith(function() {
                    return jQuery("<div/>", {
                        class: jQuery(o).attr("class"),
                        html: this.innerHTML
                    })
                })
            },
            linkButton: function(e) {
                var t = this,
                    i = jQuery.summernote.ui,
                    n = nfRadio.channel("app").request("get:template", "#tmpl-nf-rte-link-button"),
                    r = nfRadio.channel("app").request("get:template", "#tmpl-nf-rte-link-dropdown");
                return i.buttonGroup([i.button({
                    className: "dropdown-toggle link-button",
                    contents: n({}),
                    tooltip: nfi18n.fieldTextareaRTEInsertLink,
                    click: function(i) {
                        t.clickLinkButton(i, e)
                    },
                    data: {
                        toggle: "dropdown"
                    }
                }), i.dropdown([i.buttonGroup({
                    children: [i.button({
                        contents: r({}),
                        tooltip: ""
                    })]
                })])]).render()
            },
            mediaButton: function(e) {
                var t = this,
                    i = jQuery.summernote.ui,
                    n = nfRadio.channel("app").request("get:template", "#tmpl-nf-rte-media-button");
                return i.button({
                    className: "dropdown-toggle",
                    contents: n({}),
                    tooltip: nfi18n.fieldTextareaRTEInsertMedia,
                    click: function(i) {
                        t.openMediaManager(i, e)
                    }
                }).render()
            },
            openMediaManager: function(e, t) {
                if (t.invoke("editor.saveRange"), this.meta_image_frame) return void this.meta_image_frame.open();
                this.meta_image_frame = wp.media.frames.meta_image_frame = wp.media({
                    title: nfi18n.fieldTextareaRTESelectAFile,
                    button: {
                        text: "insert"
                    }
                });
                var i = this;
                this.meta_image_frame.on("select", function() {
                    var e = i.meta_image_frame.state().get("selection").first().toJSON();
                    i.insertMedia(e, t)
                }), this.meta_image_frame.open()
            },
            clickLinkButton: function(e, t) {
                var i = t.invoke("editor.createRange");
                t.invoke("editor.saveRange");
                var n = i.toString();
                this.currentContext = t, jQuery(e.target).closest(".note-customGroup > .note-btn-group").on("hide.bs.dropdown", function(e) {
                    return !1
                }), jQuery(e.target).closest(".note-customGroup > .note-btn-group").on("shown.bs.dropdown", function(e) {
                    jQuery(e.target).parent().parent().find(".link-text").val(n), jQuery(e.target).parent().parent().find(".link-url").focus()
                })
            },
            clickExtra: function(e) {
                var t = jQuery(e.target).parent().find(".link-text"),
                    i = jQuery(e.target).parent().find(".link-url"),
                    n = jQuery(e.target).parent().find(".link-new-window");
                if (this.currentContext.invoke("editor.restoreRange"), jQuery(e.target).hasClass("insert-link")) {
                    var r = t.val(),
                        o = i.val(),
                        a = !!n.prop("checked");
                    0 != r.length && 0 != o.length && this.currentContext.invoke("editor.createLink", {
                        text: r,
                        url: o,
                        isNewWindow: a
                    })
                }
                t.val(""), i.val(""), n.prop("checked", !1), jQuery(e.target).closest("div.note-btn-group.open").removeClass("open")
            },
            insertMedia: function(e, t) {
                t.invoke("editor.restoreRange"), "image" == e.type ? t.invoke("editor.insertImage", e.url) : t.invoke("editor.createLink", {
                    text: e.filename,
                    url: e.url
                })
            }
        })
    }), i("controllers/fieldStarRating", [], function() {
        return Marionette.Object.extend({
            initialize: function() {
                this.listenTo(nfRadio.channel("starrating"), "init:model", this.register), this.listenTo(nfRadio.channel("starrating"), "render:view", this.initRating)
            },
            register: function(e) {
                e.set("renderRatings", this.renderRatings)
            },
            initRating: function(e) {
                jQuery(e.el).find(".starrating").rating()
            },
            renderRatings: function() {
                for (var e = document.createElement("span"), t = 0; t <= this.number_of_stars - 1; t++) {
                    var i = nfRadio.channel("app").request("get:template", "#tmpl-nf-field-starrating-star"),
                        n = t + 1,
                        r = "";
                    this.value == n && (r = "checked");
                    var o = i({
                        id: this.id,
                        classes: this.classes,
                        num: n,
                        checked: r,
                        required: this.required
                    });
                    e.appendChild(document.createRange().createContextualFragment(o))
                }
                return e.innerHTML
            }
        })
    }), i("controllers/fieldTerms", [], function() {
        return Marionette.Object.extend({
            initialize: function() {
                this.listenTo(nfRadio.channel("terms"), "init:model", this.register)
            },
            register: function(e) {
                this.listenTo(nfRadio.channel("field-" + e.get("id")), "click:extra", this.clickExtra), this.listenTo(nfRadio.channel("field-" + e.get("id")), "keyup:field", this.keyUpExtra)
            },
            clickExtra: function(e, t) {
                var i = jQuery(e.currentTarget),
                    n = i.parent().find(".extra-value").val();
                this.addOption(t, n)
            },
            keyUpExtra: function(e, t, i) {
                13 == i && this.addOption(t, e.val())
            },
            addOption: function(e, t) {
                if (t) {
                    var i = e.get("options"),
                        n = {
                            label: t,
                            value: t,
                            selected: 0
                        };
                    i.push(n);
                    e.get("value").push(t), e.trigger("reRender")
                }
            }
        })
    }), i("controllers/formContentFilters", [], function() {
        return Marionette.Object.extend({
            initialize: function() {
                this.viewFilters = [], this.loadFilters = [], nfRadio.channel("formContent").reply("add:viewFilter", this.addViewFilter, this), nfRadio.channel("formContent").reply("add:loadFilter", this.addLoadFilter, this), nfRadio.channel("formContent").reply("get:viewFilters", this.getViewFilters, this), nfRadio.channel("formContent").reply("get:loadFilters", this.getLoadFilters, this), nfRadio.channel("fieldContents").reply("add:viewFilter", this.addViewFilter, this), nfRadio.channel("fieldContents").reply("add:loadFilter", this.addLoadFilter, this), nfRadio.channel("fieldContents").reply("get:viewFilters", this.getViewFilters, this), nfRadio.channel("fieldContents").reply("get:loadFilters", this.getLoadFilters, this)
            },
            addViewFilter: function(e, t) {
                this.viewFilters[t] = e
            },
            getViewFilters: function() {
                return this.viewFilters
            },
            addLoadFilter: function(e, t) {
                this.loadFilters[t] = e
            },
            getLoadFilters: function() {
                return this.loadFilters
            }
        })
    }), i("views/fieldItem", [], function() {
        return Marionette.ItemView.extend({
            tagName: "div",
            initialize: function() {
                this.listenTo(this.model, "reRender", this.render, this), this.listenTo(this.model, "change:addWrapperClass", this.addWrapperClass, this), this.listenTo(this.model, "change:removeWrapperClass", this.removeWrapperClass, this), this.listenTo(this.model, "change:invalid", this.toggleAriaInvalid, this), this.template = "#tmpl-nf-field-" + this.model.get("wrap_template")
            },
            test: function(e) {
                console.log("firing from trigger 1")
            },
            addWrapperClass: function() {
                var e = this.model.get("addWrapperClass");
                "" != e && (jQuery(this.el).addClass(e), this.model.set("addWrapperClass", ""))
            },
            removeWrapperClass: function() {
                var e = this.model.get("removeWrapperClass");
                "" != e && (jQuery(this.el).removeClass(e), this.model.set("removeWrapperClass", ""))
            },
            toggleAriaInvalid: function() {
                var e = this.model.get("invalid");
                jQuery("[aria-invalid]", this.el).attr("aria-invalid", JSON.stringify(e))
            },
            onRender: function() {
                if (this.$el = this.$el.children(), this.$el.unwrap(), this.setElement(this.$el), void 0 !== this.model.get("mask") && "" != jQuery.trim(this.model.get("mask"))) {
                    if ("custom" == this.model.get("mask")) var e = this.model.get("custom_mask");
                    else var e = this.model.get("mask");
                    if (Number.isInteger = Number.isInteger || function(e) {
                            return "number" == typeof e && isFinite(e) && Math.floor(e) === e
                        }, Number.isInteger(e) && (e = e.toString()), "currency" == e) {
                        var t = nfRadio.channel("app").request("get:form", this.model.get("formID")),
                            i = t.get("thousands_sep");
                        "&nbsp;" == i && (i = " ");
                        var n = jQuery("<div/>").html(t.get("currencySymbol")).text();
                        i = jQuery("<div/>").html(i).text();
                        var r = jQuery("<div/>").html(t.get("decimal_point")).text(),
                            o = {
                                digitGroupSeparator: i,
                                decimalCharacter: r,
                                currencySymbol: n
                            },
                            a = jQuery(jQuery(this.el).find(".nf-element")[0]);
                        new AutoNumeric(jQuery(this.el).find(".nf-element")[0], o);
                        var l = this;
                        a.on("change", function(e) {
                            l.model.set("value", e.target.value)
                        })
                    } else jQuery(this.el).find(".nf-element").mask(e)
                }
                nfRadio.channel(this.model.get("type")).trigger("render:view", this), nfRadio.channel("fields").trigger("render:view", this)
            },
            templateHelpers: function() {
                var e = this;
                return {
                    renderElement: function() {
                        var e = _.find(this.element_templates, function(e) {
                            if (0 < jQuery("#tmpl-nf-field-" + e).length) return !0
                        });
                        return nfRadio.channel("app").request("get:template", "#tmpl-nf-field-" + e)(this)
                    },
                    renderLabel: function() {
                        return nfRadio.channel("app").request("get:template", "#tmpl-nf-field-label")(this)
                    },
                    renderLabelClasses: function() {
                        var e = "";
                        return void 0 !== this.customLabelClasses && (e = this.customLabelClasses(e)), e
                    },
                    renderPlaceholder: function() {
                        var e = this.placeholder;
                        return void 0 !== this.customPlaceholder && (e = this.customPlaceholder(e)), "" != jQuery.trim(e) ? 'placeholder="' + e + '"' : ""
                    },
                    renderWrapClass: function() {
                        var e = "field-wrap " + this.type + "-wrap";
                        return this.type !== this.parentType && (e = e + " " + this.parentType + "-wrap"), void 0 !== this.old_classname && 0 < jQuery.trim(this.old_classname).length && (e += " " + this.old_classname + "-wrap"), "undefined" != typeof customWrapClass && (e = customWrapClass(e)), e
                    },
                    renderClasses: function() {
                        var e = this.classes;
                        return this.error ? e += " nf-error" : e = e.replace("nf-error", ""), void 0 !== this.element_class && 0 < jQuery.trim(this.element_class).length && (e += " " + this.element_class), void 0 !== this.customClasses && (e = this.customClasses(e)), e
                    },
                    maybeDisabled: function() {
                        return 1 == this.disable_input ? "disabled" : ""
                    },
                    maybeRequired: function() {
                        return 1 == this.required ? "required" : ""
                    },
                    maybeDisableAutocomplete: function() {
                        return 1 == this.disable_browser_autocomplete ? 'autocomplete="off"' : ""
                    },
                    maybeInputLimit: function() {
                        return "characters" == this.input_limit_type && "" != jQuery.trim(this.input_limit) ? 'maxlength="' + this.input_limit + '"' : ""
                    },
                    getHelpText: function() {
                        return void 0 !== this.help_text ? this.help_text : ""
                    },
                    maybeRenderHelp: function() {
                        var e = document.createElement("p");
                        e.innerHTML = this.help_text;
                        var t = !1;
                        if ((0 != jQuery.trim(jQuery(e).text()).length || 0 < jQuery(e).find("img").length) && (t = !0), void 0 !== this.help_text && t) {
                            var i = document.createElement("span");
                            return i.classList.add("fa", "fa-info-circle", "nf-help"), i.setAttribute("data-text", this.getHelpText()), i.outerHTML
                        }
                        return ""
                    },
                    renderDescText: function() {
                        if (void 0 === this.desc_text) return "";
                        var e = document.createElement("p");
                        if (e.innerHTML = this.desc_text, 0 == jQuery.trim(e.innerText).length) return "";
                        var t, i;
                        if (i = document.createTextNode(this.desc_text), t = document.createElement("p"), t.appendChild(i), 0 != jQuery.trim(jQuery(t).text()).length) {
                            var n, r;
                            return n = document.createRange().createContextualFragment(this.desc_text), r = document.createElement("div"), r.classList.add("nf-field-description"), r.appendChild(n), r.outerHTML
                        }
                        return ""
                    },
                    renderNumberDefault: function() {
                        return this.clean ? this.default ? this.default : this.placeholder ? "" : this.value : this.value
                    },
                    renderCurrencyFormatting: function(t) {
                        var i = t.toString().replace(".", "||"),
                            n = i.replace(/\B(?=(\d{3})+(?!\d))/g, nfi18n.thousands_sep),
                            r = n.replace("||", nfi18n.decimal_point);
                        return nfRadio.channel("app").request("get:form", e.model.get("formID")).get("settings").currency_symbol + r
                    }
                }
            },
            events: {
                "change .nf-element": "fieldChange",
                "keyup .nf-element": "fieldKeyup",
                "click .nf-element": "fieldClick",
                "click .extra": "extraClick",
                "blur .nf-element": "fieldBlur"
            },
            fieldChange: function(e) {
                var t = jQuery(e.currentTarget);
                nfRadio.channel("nfAdmin").request("change:field", t, this.model)
            },
            fieldKeyup: function(e) {
                var t = jQuery(e.currentTarget),
                    i = e.keyCode;
                nfRadio.channel("field-" + this.model.get("id")).trigger("keyup:field", t, this.model, i), nfRadio.channel(this.model.get("type")).trigger("keyup:field", t, this.model, i), nfRadio.channel("fields").trigger("keyup:field", t, this.model, i)
            },
            fieldClick: function(e) {
                var t = jQuery(e.currentTarget);
                nfRadio.channel("field-" + this.model.get("id")).trigger("click:field", t, this.model), nfRadio.channel(this.model.get("type")).trigger("click:field", t, this.model), nfRadio.channel("fields").trigger("click:field", t, this.model)
            },
            extraClick: function(e) {
                nfRadio.channel("field-" + this.model.get("id")).trigger("click:extra", e, this.model), nfRadio.channel(this.model.get("type")).trigger("click:extra", e, this.model), nfRadio.channel("fields").trigger("click:extra", e, this.model)
            },
            fieldBlur: function(e) {
                var t = jQuery(e.currentTarget);
                nfRadio.channel("field-" + this.model.get("id")).trigger("blur:field", t, this.model), nfRadio.channel(this.model.get("type")).trigger("blur:field", t, this.model), nfRadio.channel("fields").trigger("blur:field", t, this.model)
            },
            onAttach: function() {
                nfRadio.channel(this.model.get("type")).trigger("attach:view", this)
            }
        })
    }), i("views/beforeField", [], function() {
        return Marionette.ItemView.extend({
            tagName: "nf-section",
            template: "#tmpl-nf-field-before"
        })
    }), i("views/fieldErrorItem", [], function() {
        return Marionette.ItemView.extend({
            tagName: "nf-section",
            template: "#tmpl-nf-field-error",
            onRender: function() {
                this.$el = this.$el.children(), this.$el.unwrap(), this.setElement(this.$el)
            }
        })
    }), i("views/fieldErrorCollection", ["views/fieldErrorItem"], function(e) {
        return Marionette.CollectionView.extend({
            tagName: "nf-errors",
            childView: e,
            initialize: function(e) {
                this.fieldModel = e.fieldModel
            },
            onRender: function() {
                0 == this.fieldModel.get("errors").models.length ? (this.fieldModel.removeWrapperClass("nf-error"), this.fieldModel.removeWrapperClass("nf-fail"), this.fieldModel.addWrapperClass("nf-pass"), this.fieldModel.setInvalid(!1)) : (this.fieldModel.removeWrapperClass("nf-pass"), this.fieldModel.addWrapperClass("nf-fail"), this.fieldModel.addWrapperClass("nf-error"), this.fieldModel.setInvalid(!0))
            }
        })
    }), i("views/inputLimit", [], function() {
        return Marionette.ItemView.extend({
            tagName: "nf-section",
            template: "#tmpl-nf-field-input-limit",
            initialize: function() {
                this.listenTo(nfRadio.channel("field-" + this.model.get("id")), "keyup:field", this.updateCount), this.count = this.model.get("input_limit"), this.render()
            },
            updateCount: function(e, t) {
                var i = jQuery(e).val(),
                    n = /\s+/gi,
                    r = i.trim().replace(n, " ").split(" "),
                    o = r.length,
                    a = i.length;
                if ("characters" == this.model.get("input_limit_type") || "char" == this.model.get("input_limit_type")) jQuery(e).attr("maxlength", this.model.get("input_limit")), this.count = this.model.get("input_limit") - a;
                else {
                    this.count = this.model.get("input_limit") - o;
                    var l = this.model.get("input_limit");
                    o > l && jQuery(e).val(r.slice(0, l).join(" "))
                }
                this.render()
            },
            templateHelpers: function() {
                var e = this;
                return {
                    currentCount: function() {
                        return e.count
                    }
                }
            }
        })
    }), i("views/afterField", ["views/fieldErrorCollection", "views/inputLimit"], function(e, t) {
        return Marionette.ItemView.extend({
            tagName: "nf-section",
            template: "#tmpl-nf-field-after",
            initialize: function() {
                this.model.on("change:errors", this.changeError, this)
            },
            onRender: function() {
                var i = jQuery(this.el).children(".nf-error-wrap");
                if (this.errorCollectionView = new e({
                        el: i,
                        collection: this.model.get("errors"),
                        fieldModel: this.model
                    }), 0 < this.model.get("errors").length && this.errorCollectionView.render(), void 0 !== this.model.get("input_limit") && "" != jQuery.trim(this.model.get("input_limit"))) {
                    var n = jQuery(this.el).children(".nf-input-limit");
                    this.inputLimitView = new t({
                        el: n,
                        model: this.model
                    })
                }
            },
            changeError: function() {
                this.errorCollectionView.render()
            }
        })
    }), i("views/fieldLayout", ["views/fieldItem", "views/beforeField", "views/afterField"], function(e, t, i) {
        return Marionette.LayoutView.extend({
            tagName: "nf-field",
            regions: {
                beforeField: ".nf-before-field",
                field: ".nf-field",
                afterField: ".nf-after-field"
            },
            initialize: function() {
                this.listenTo(this.model, "change:visible", this.render, this)
            },
            getTemplate: function() {
                return this.model.get("visible") ? "#tmpl-nf-field-layout" : "#tmpl-nf-empty"
            },
            onRender: function() {
                this.model.get("visible") && (this.beforeField.show(new t({
                    model: this.model
                })), this.field.show(new e({
                    model: this.model
                })), this.afterField.show(new i({
                    model: this.model
                })))
            },
            templateHelpers: function() {
                return {
                    renderContainerClass: function() {
                        var e = " label-" + this.label_pos + " ";
                        return void 0 !== this.desc_pos && (e += "desc-" + this.desc_pos + " "), void 0 !== this.container_class && 0 < jQuery.trim(this.container_class).length && (e += this.container_class + " "), this.type !== this.parentType && (e += " " + this.parentType + "-container"), e
                    }
                }
            }
        })
    }), i("controllers/loadViews", ["views/fieldItem", "views/fieldLayout"], function(e, t) {
        return Marionette.Object.extend({
            initialize: function() {
                nfRadio.channel("views").reply("get:fieldItem", this.getFieldItem), nfRadio.channel("views").reply("get:fieldLayout", this.getFieldLayout)
            },
            getFieldItem: function(t) {
                return e
            },
            getFieldLayout: function() {
                return t
            }
        })
    }), i("controllers/formErrors", [], function() {
        return Marionette.Object.extend({
            initialize: function() {
                this.listenTo(nfRadio.channel("fields"), "add:error", this.addError), this.listenTo(nfRadio.channel("fields"), "remove:error", this.removeError), nfRadio.channel("form").reply("get:errors", this.getFormErrors)
            },
            addError: function(e, t, i) {
                var n = nfRadio.channel("app").request("get:form", e.get("formID"));
                void 0 === n.get("fieldErrors")[e.get("id")] && (n.get("fieldErrors")[e.get("id")] = {}), n.get("fieldErrors")[e.get("id")][t] = i, nfRadio.channel("form-" + e.get("formID")).request("add:error", "field-errors", n.get("settings").formErrorsCorrectErrors)
            },
            removeError: function(e, t) {
                var i = nfRadio.channel("app").request("get:form", e.get("formID"));
                i.get("fieldErrors")[e.get("id")] = _.omit(i.get("fieldErrors")[e.get("id")], t), 0 == _.size(i.get("fieldErrors")[e.get("id")]) && delete i.get("fieldErrors")[e.get("id")], 0 == _.size(i.get("fieldErrors")) && nfRadio.channel("form-" + e.get("formID")).request("remove:error", "field-errors")
            },
            getFormErrors: function(e) {
                var t = nfRadio.channel("app").request("get:form", e),
                    i = !1;
                return t && 0 !== t.get("errors").length && _.each(t.get("errors").models, function(e) {
                    i = i || {}, i[e.get("id")] = e.get("msg")
                }), i
            }
        })
    }), i("controllers/submit", [], function() {
        return Marionette.Object.extend({
            initialize: function() {
                this.listenTo(nfRadio.channel("forms"), "init:model", this.registerSubmitHandler)
            },
            registerSubmitHandler: function(e) {
                nfRadio.channel("form-" + e.get("id")).reply("submit", this.submit)
            },
            submit: function(e) {
                nfRadio.channel("forms").trigger("before:submit", e), nfRadio.channel("form-" + e.get("id")).trigger("before:submit", e);
                var t = nfRadio.channel("forms").request("maybe:validate", e);
                if (!1 !== t && (_.each(e.get("fields").models, function(e) {
                        e.set("clean", !1)
                    }), e.get("formContentData").validateFields()), 0 == nfRadio.channel("form-" + e.get("id")).request("maybe:submit", e)) return nfRadio.channel("forms").trigger("submit:cancel", e), void nfRadio.channel("form-" + e.get("id")).trigger("submit:cancel", e);
                if (!1 !== t) {
                    var i = _.filter(e.get("errors").models, function(e) {
                        return "invalid_email" != e.get("id") && "email_not_sent" != e.get("id")
                    });
                    if (0 != _.size(i)) return nfRadio.channel("forms").trigger("submit:failed", e), nfRadio.channel("form-" + e.get("id")).trigger("submit:failed", e), !1
                }
                nfRadio.channel("forms").trigger("after:submitValidation", e), nfRadio.channel("form-" + e.get("id")).trigger("after:submitValidation", e);
                var n = e.get("id"),
                    r = {};
                _.each(e.get("fields").models, function(e) {
                    var t = {
                        value: e.get("value"),
                        id: e.get("id")
                    };
                    r[e.get("id")] = nfRadio.channel(e.get("type")).request("get:submitData", t, e) || t
                });
                var o = e.get("extra"),
                    a = e.get("settings");
                delete a.formContentData;
                var l = JSON.stringify({
                        id: n,
                        fields: r,
                        settings: a,
                        extra: o
                    }),
                    s = {
                        action: "nf_ajax_submit",
                        security: nfFrontEnd.ajaxNonce,
                        nonce_ts: nfFrontEnd.nonce_ts,
                        formData: l
                    };
                jQuery.ajax({
                    url: nfFrontEnd.adminAjax,
                    type: "POST",
                    data: s,
                    cache: !1,
                    success: function(t, i, n) {
                        try {
                            var r = t;
                            nfRadio.channel("forms").trigger("submit:response", r, i, n, e.get("id")), nfRadio.channel("form-" + e.get("id")).trigger("submit:response", r, i, n), jQuery(document).trigger("nfFormSubmitResponse", {
                                response: r,
                                id: e.get("id")
                            })
                        } catch (e) {
                            console.log(e), console.log("Parse Error"), console.log(e)
                        }
                    },
                    error: function(t, i, n) {
                        console.log("ERRORS: " + n), console.log(t);
                        try {
                            var r = jQuery.parseJSON(t.responseText);
                            nfRadio.channel("forms").trigger("submit:response", r, i, t, e.get("id")), nfRadio.channel("form-" + e.get("id")).trigger("submit:response", r, i, t)
                        } catch (e) {
                            console.log("Parse Error")
                        }
                        nfRadio.channel("forms").trigger("submit:response", "error", i, t, n)
                    }
                })
            }
        })
    }), i("views/fieldCollection", ["views/fieldLayout"], function(e) {
        return Marionette.CollectionView.extend({
            tagName: "nf-fields-wrap",
            childView: e
        })
    }), i("controllers/defaultFilters", ["views/fieldCollection", "models/fieldCollection"], function(e, t) {
        return Marionette.Object.extend({
            initialize: function() {
                this.listenTo(nfRadio.channel("form"), "before:filterData", this.registerDefaultDataFilter)
            },
            registerDefaultDataFilter: function(e) {
                nfRadio.channel("formContent").request("add:loadFilter", this.defaultFormContentLoad, 10, this), nfRadio.channel("formContent").request("add:viewFilter", this.defaultFormContentView, 10, this)
            },
            defaultFormContentLoad: function(e, i, n) {
                var r = i.get("fields"),
                    o = nfRadio.channel("formContent").request("get:loadFilters");
                if (1 == _.without(o, void 0).length || void 0 === e || 1 == e instanceof Backbone.Collection) return i.get("fields");
                var a = _.map(e, function(e) {
                        return i.get("fields").findWhere({
                            key: e
                        })
                    }, this),
                    l = new t(a);
                return r.on("reset", function(e) {
                    var t = [];
                    l.each(function(i) {
                        "submit" != i.get("type") ? t.push(e.findWhere({
                            key: i.get("key")
                        })) : t.push(i)
                    }), l.options = {
                        formModel: i
                    }, l.reset(t)
                }), l
            },
            defaultFormContentView: function() {
                return e
            }
        })
    }), i("controllers/uniqueFieldError", [], function() {
        return Marionette.Object.extend({
            initialize: function() {
                this.listenTo(nfRadio.channel("fields"), "change:modelValue", this.removeError), this.listenTo(nfRadio.channel("fields"), "keyup:field", this.removeError), this.listenTo(nfRadio.channel("fields"), "blur:field", this.removeError)
            },
            removeError: function(e, t) {
                t = t || e, nfRadio.channel("fields").request("remove:error", t.get("id"), "unique_field")
            }
        })
    }), i("controllers/loadControllers", ["controllers/formData", "controllers/fieldError", "controllers/changeField", "controllers/changeEmail", "controllers/changeDate", "controllers/fieldCheckbox", "controllers/fieldCheckboxList", "controllers/fieldRadio", "controllers/fieldNumber", "controllers/mirrorField", "controllers/confirmField", "controllers/updateFieldModel", "controllers/submitButton", "controllers/submitDebug", "controllers/getFormErrors", "controllers/validateRequired", "controllers/submitError", "controllers/actionRedirect", "controllers/actionSuccess", "controllers/fieldSelect", "controllers/coreSubmitResponse", "controllers/fieldProduct", "controllers/fieldTotal", "controllers/fieldQuantity", "controllers/calculations", "controllers/fieldDate", "controllers/fieldRecaptcha", "controllers/fieldHTML", "controllers/helpText", "controllers/fieldTextbox", "controllers/fieldTextareaRTE", "controllers/fieldStarRating", "controllers/fieldTerms", "controllers/formContentFilters", "controllers/loadViews", "controllers/formErrors", "controllers/submit", "controllers/defaultFilters", "controllers/uniqueFieldError"], function(e, t, i, n, r, o, a, l, s, d, c, f, u, h, g, m, p, v, b, y, R, w, _, x, C, F, M, k, T, E, j, q, D, Q, V, O, I, L, N) {
        return Marionette.Object.extend({
            initialize: function() {
                new V, new O, new I, new o, new a, new l, new s, new y, new w, new _, new x, new M, new k, new T, new E, new j, new q, new D, new Q, new N, new t, new i, new n, new r, new d, new c, new f, new u, new h, new g, new m, new p, new v, new b, new R, new C, new L, new F, new e
            }
        })
    }), i("views/beforeForm", [], function() {
        return Marionette.ItemView.extend({
            tagName: "nf-section",
            template: "#tmpl-nf-before-form"
        })
    }), i("views/formErrorItem", [], function() {
        return Marionette.ItemView.extend({
            tagName: "nf-section",
            template: "#tmpl-nf-form-error",
            onRender: function() {}
        })
    }), i("views/formErrorCollection", ["views/formErrorItem"], function(e) {
        return Marionette.CollectionView.extend({
            tagName: "nf-errors",
            childView: e
        })
    }), i("views/honeyPot", [], function() {
        return Marionette.ItemView.extend({
            tagName: "nf-section",
            template: "#tmpl-nf-form-hp",
            events: {
                "keyup .nf-field-hp": "maybeError",
                "change .nf-field-hp": "maybeError"
            },
            maybeError: function(e) {
                if (0 == jQuery(e.target).val().length) nfRadio.channel("form-" + this.model.get("id")).request("remove:error", "honeyPot");
                else {
                    var t = nfRadio.channel("app").request("get:form", this.model.get("id"));
                    nfRadio.channel("form-" + this.model.get("id")).request("add:error", "honeyPot", t.get("settings").honeypotHoneypotError)
                }
            }
        })
    }), i("views/afterFormContent", ["views/formErrorCollection", "views/honeyPot"], function(e, t) {
        return Marionette.LayoutView.extend({
            tagName: "nf-section",
            template: "#tmpl-nf-after-fields",
            regions: {
                errors: ".nf-form-errors",
                hp: ".nf-form-hp"
            },
            onShow: function() {
                this.errors.show(new e({
                    collection: this.model.get("errors")
                })), this.hp.show(new t({
                    model: this.model
                }))
            }
        })
    }), i("views/beforeFormContent", [], function() {
        return Marionette.ItemView.extend({
            tagName: "nf-section",
            template: "#tmpl-nf-before-fields",
            templateHelpers: function() {
                return {
                    renderFieldsMarkedRequired: function() {
                        return this.fields.filter({
                            required: 1
                        }).length ? this.fieldsMarkedRequired : ""
                    }
                }
            }
        })
    }), i("views/formLayout", ["views/afterFormContent", "views/beforeFormContent", "models/fieldCollection"], function(e, t, i) {
        return Marionette.LayoutView.extend({
            tagName: "nf-section",
            template: "#tmpl-nf-form-layout",
            regions: {
                beforeFormContent: ".nf-before-form-content",
                formContent: ".nf-form-content",
                afterFormContent: ".nf-after-form-content"
            },
            initialize: function() {
                nfRadio.channel("form-" + this.model.get("id")).reply("get:el", this.getEl, this), this.listenTo(this.model, "hide", this.hide)
            },
            onRender: function() {
                this.$el = this.$el.children(), this.$el.unwrap(), this.setElement(this.$el)
            },
            onShow: function() {
                this.beforeFormContent.show(new t({
                    model: this.model
                }));
                var i = this.model.get("formContentData"),
                    n = nfRadio.channel("formContent").request("get:viewFilters"),
                    r = _.without(n, void 0),
                    o = _.first(r);
                formContentView = o();
                var a = {
                    data: i,
                    formModel: this.model
                };
                !1 != i instanceof Backbone.Collection ? a.collection = i : !1 != i instanceof Backbone.Model && (a.model = i), this.formContent.show(new formContentView(a)), this.afterFormContent.show(new e({
                    model: this.model
                }))
            },
            getEl: function() {
                return this.el
            },
            templateHelpers: function() {
                return {
                    renderClasses: function() {
                        return ""
                    }
                }
            },
            hide: function() {
                jQuery(this.el).hide()
            }
        })
    }), i("views/afterForm", [], function() {
        return Marionette.ItemView.extend({
            tagName: "nf-section",
            template: "#tmpl-nf-after-form"
        })
    }), i("views/mainLayout", ["views/beforeForm", "views/formLayout", "views/afterForm"], function(e, t, i) {
        return Marionette.LayoutView.extend({
            template: "#tmpl-nf-layout",
            regions: {
                responseMsg: ".nf-response-msg",
                beforeForm: ".nf-before-form",
                formLayout: ".nf-form-layout",
                afterForm: ".nf-after-form"
            },
            initialize: function() {
                this.$el = jQuery("#nf-form-" + this.model.id + "-cont"), this.el = "#nf-form-" + this.model.id + "-cont", this.render(), this.beforeForm.show(new e({
                    model: this.model
                })), this.formLayout.show(new t({
                    model: this.model,
                    fieldCollection: this.options.fieldCollection
                })), this.afterForm.show(new i({
                    model: this.model
                })), this.listenTo(this.model, "hide", this.hide)
            },
            hide: function() {
                jQuery(this.el).find(".nf-form-title").hide()
            }
        })
    });
    var n = function(e, t, i) {
        void 0 !== e && 0 < e.length ? this.locale = e.replace("_", "-") : this.locale = "en-US", this.thousands_sep = t || ",", this.decimal_sep = i || ".", this.uniqueElememts = function(e, t, i) {
            return i.indexOf(e) === t
        }, this.numberDecoder = function(e) {
            e = e.toString();
            var t = "",
                i = !1;
            "-" === e.charAt(0) && (i = !0, e = e.replace("-", "")), e = e.replace(/\s/g, ""), e = e.replace(/&nbsp;/g, "");
            var n = e.split(""),
                r = n.filter(function(e) {
                    return !e.match(/[0-9]/)
                }),
                o = r.filter(this.uniqueElememts);
            switch (o.length) {
                case 0:
                    t = e;
                    break;
                case 1:
                    var a = "";
                    if (1 == r.length) {
                        separator = r.pop();
                        a = 3 == e.split(separator).pop().length && separator == this.thousands_sep ? "" : "."
                    } else separator = o.pop();
                    t = e.split(separator).join(a);
                    break;
                case 2:
                    var l, s = o[0];
                    l = "." === s ? new RegExp("[.]", "g") : new RegExp(s, "g"), t = e.replace(l, "");
                    var d, c = o[1];
                    d = "." === c ? new RegExp("[.]", "g") : new RegExp(c, "g"), t = t.replace(d, ".");
                    break;
                default:
                    return "NaN"
            }
            return i && (t = "-" + t), this.debug("Number Decoder " + e + " -> " + t), t
        }, this.numberEncoder = function(e, t) {
            return e = this.numberDecoder(e), Intl.NumberFormat(this.locale, {
                minimumFractionDigits: t,
                maximumFractionDigits: t
            }).format(e)
        }, this.debug = function(e) {
            window.nfLocaleConverterDebug && console.log(e)
        }
    };
    i("../nfLocaleConverter", function() {}),
        function(e) {
            var t = e.fn.val;
            e.fn.val = function() {
                var i;
                arguments.length > 0 && (i = t.apply(this, []));
                var n = t.apply(this, arguments);
                return arguments.length > 0 && i != t.apply(this, []) && e(this).hasClass("nf-element") && e(this).change(), n
            }
        }(jQuery), jQuery(document).ready(function(e) {
            t(["models/formCollection", "models/formModel", "models/fieldCollection", "controllers/loadControllers", "views/mainLayout", "../nfLocaleConverter"], function(t, i, r, o, a) {
                if ("undefined" == typeof nfForms) return void jQuery(".nf-form-cont").empty();
                (new(Marionette.Application.extend({
                    forms: {},
                    initialize: function(e) {
                        var t = this;
                        Marionette.Renderer.render = function(e, i) {
                            var e = t.template(e);
                            return e(i)
                        }, this.urlParameters = _.object(_.compact(_.map(location.search.slice(1).split("&"), function(e) {
                            if (e) return e.split("=")
                        }))), void 0 !== this.urlParameters.nf_resume && this.listenTo(nfRadio.channel("form-" + this.urlParameters.nf_resume), "loaded", this.restart), nfRadio.channel("app").reply("locale:decodeNumber", this.decodeNumber), nfRadio.channel("app").reply("locale:encodeNumber", this.encodeNumber);
                        new o;
                        nfRadio.channel("app").trigger("after:loadControllers"), nfRadio.channel("app").reply("get:template", this.template)
                    },
                    onStart: function() {
                        var e = nfRadio.channel("app").request("get:forms");
                        _.each(e.models, function(e, t) {
                            var i = new a({
                                model: e,
                                fieldCollection: e.get("fields")
                            });
                            nfRadio.channel("form").trigger("render:view", i), jQuery(document).trigger("nfFormReady", i)
                        })
                    },
                    restart: function(e) {
                        if (void 0 !== this.urlParameters.nf_resume) {
                            var t = {
                                action: "nf_ajax_submit",
                                security: nfFrontEnd.ajaxNonce,
                                nf_resume: this.urlParameters
                            };
                            nfRadio.channel("form-" + e.get("id")).trigger("disable:submit"), nfRadio.channel("form-" + e.get("id")).trigger("processingLabel"), this.listenTo(nfRadio.channel("form"), "render:view", function() {
                                jQuery("#nf-form-" + e.get("id") + "-cont .nf-field-container:not(.submit-container)").hide()
                            }), jQuery.ajax({
                                url: nfFrontEnd.adminAjax,
                                type: "POST",
                                data: t,
                                cache: !1,
                                success: function(t, i, n) {
                                    try {
                                        var r = t;
                                        nfRadio.channel("forms").trigger("submit:response", r, i, n, e.get("id")), nfRadio.channel("form-" + e.get("id")).trigger("submit:response", r, i, n)
                                    } catch (e) {
                                        console.log("Parse Error")
                                    }
                                },
                                error: function(e, t, i) {
                                    console.log("ERRORS: " + t), nfRadio.channel("forms").trigger("submit:response", "error", t, e, i)
                                }
                            })
                        }
                    },
                    template: function(t) {
                        return _.template(e(t).html(), {
                            evaluate: /<#([\s\S]+?)#>/g,
                            interpolate: /\{\{\{([\s\S]+?)\}\}\}/g,
                            escape: /\{\{([^\}]+?)\}\}(?!\})/g,
                            variable: "data"
                        })
                    },
                    encodeNumber: function(e) {
                        return new n(nfi18n.siteLocale, nfi18n.thousands_sep, nfi18n.decimal_point).numberEncoder(e)
                    },
                    decodeNumber: function(e) {
                        return new n(nfi18n.siteLocale, nfi18n.thousands_sep, nfi18n.decimal_point).numberDecoder(e)
                    }
                }))).start()
            })
        }), i("main", function() {})
}();