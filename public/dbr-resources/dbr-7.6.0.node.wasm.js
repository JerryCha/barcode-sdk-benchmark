
var c;
c || (c = typeof Module !== 'undefined' ? Module : {});
var aa = {}, ba;
for (ba in c) {
  c.hasOwnProperty(ba) && (aa[ba] = c[ba]);
}
var ca = "./this.program";
function da(a, b) {
  throw b;
}
var ea = !1, fa = !1, ha = !1, ia = !1;
ea = "object" === typeof window;
fa = "function" === typeof importScripts;
ha = "object" === typeof process && "object" === typeof process.versions && "string" === typeof process.versions.node;
ia = !ea && !ha && !fa;
if (c.ENVIRONMENT) {
  throw Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -s ENVIRONMENT=web or -s ENVIRONMENT=node)");
}
var h = "", ja, ka, la, ma;
if (ha) {
  h = fa ? require("path").dirname(h) + "/" : __dirname + "/", ja = function(a, b) {
    la || (la = require("fs"));
    ma || (ma = require("path"));
    a = ma.normalize(a);
    return la.readFileSync(a, b ? null : "utf8");
  }, ka = function(a) {
    a = ja(a, !0);
    a.buffer || (a = new Uint8Array(a));
    assert(a.buffer);
    return a;
  }, 1 < process.argv.length && (ca = process.argv[1].replace(/\\/g, "/")), process.argv.slice(2), "undefined" !== typeof module && (module.exports = c), process.on("uncaughtException", function(a) {
    if (!(a instanceof na)) {
      throw a;
    }
  }), process.on("unhandledRejection", r), da = function(a) {
    process.exit(a);
  }, c.inspect = function() {
    return "[Emscripten Module object]";
  };
} else {
  if (ia) {
    "undefined" != typeof read && (ja = function(a) {
      return read(a);
    }), ka = function(a) {
      if ("function" === typeof readbuffer) {
        return new Uint8Array(readbuffer(a));
      }
      a = read(a, "binary");
      assert("object" === typeof a);
      return a;
    }, "function" === typeof quit && (da = function(a) {
      quit(a);
    }), "undefined" !== typeof print && ("undefined" === typeof console && (console = {}), console.log = print, console.warn = console.error = "undefined" !== typeof printErr ? printErr : print);
  } else {
    if (ea || fa) {
      fa ? h = self.location.href : document.currentScript && (h = document.currentScript.src), h = 0 !== h.indexOf("blob:") ? h.substr(0, h.lastIndexOf("/") + 1) : "", ja = function(a) {
        var b = new XMLHttpRequest;
        b.open("GET", a, !1);
        b.send(null);
        return b.responseText;
      }, fa && (ka = function(a) {
        var b = new XMLHttpRequest;
        b.open("GET", a, !1);
        b.responseType = "arraybuffer";
        b.send(null);
        return new Uint8Array(b.response);
      });
    } else {
      throw Error("environment detection error");
    }
  }
}
var oa = c.print || console.log.bind(console), u = c.printErr || console.warn.bind(console);
for (ba in aa) {
  aa.hasOwnProperty(ba) && (c[ba] = aa[ba]);
}
aa = null;
Object.getOwnPropertyDescriptor(c, "arguments") || Object.defineProperty(c, "arguments", {configurable:!0, get:function() {
  r("Module.arguments has been replaced with plain arguments_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
c.thisProgram && (ca = c.thisProgram);
Object.getOwnPropertyDescriptor(c, "thisProgram") || Object.defineProperty(c, "thisProgram", {configurable:!0, get:function() {
  r("Module.thisProgram has been replaced with plain thisProgram (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
c.quit && (da = c.quit);
Object.getOwnPropertyDescriptor(c, "quit") || Object.defineProperty(c, "quit", {configurable:!0, get:function() {
  r("Module.quit has been replaced with plain quit_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
assert("undefined" === typeof c.memoryInitializerPrefixURL, "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead");
assert("undefined" === typeof c.pthreadMainPrefixURL, "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead");
assert("undefined" === typeof c.cdInitializerPrefixURL, "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead");
assert("undefined" === typeof c.filePackagePrefixURL, "Module.filePackagePrefixURL option was removed, use Module.locateFile instead");
assert("undefined" === typeof c.read, "Module.read option was removed (modify read_ in JS)");
assert("undefined" === typeof c.readAsync, "Module.readAsync option was removed (modify readAsync in JS)");
assert("undefined" === typeof c.readBinary, "Module.readBinary option was removed (modify readBinary in JS)");
assert("undefined" === typeof c.setWindowTitle, "Module.setWindowTitle option was removed (modify setWindowTitle in JS)");
assert("undefined" === typeof c.TOTAL_MEMORY, "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY");
Object.getOwnPropertyDescriptor(c, "read") || Object.defineProperty(c, "read", {configurable:!0, get:function() {
  r("Module.read has been replaced with plain read_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
Object.getOwnPropertyDescriptor(c, "readAsync") || Object.defineProperty(c, "readAsync", {configurable:!0, get:function() {
  r("Module.readAsync has been replaced with plain readAsync (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
Object.getOwnPropertyDescriptor(c, "readBinary") || Object.defineProperty(c, "readBinary", {configurable:!0, get:function() {
  r("Module.readBinary has been replaced with plain readBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
Object.getOwnPropertyDescriptor(c, "setWindowTitle") || Object.defineProperty(c, "setWindowTitle", {configurable:!0, get:function() {
  r("Module.setWindowTitle has been replaced with plain setWindowTitle (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
function pa(a) {
  qa || (qa = {});
  qa[a] || (qa[a] = 1, u(a));
}
var qa, ra = 0, sa;
c.wasmBinary && (sa = c.wasmBinary);
Object.getOwnPropertyDescriptor(c, "wasmBinary") || Object.defineProperty(c, "wasmBinary", {configurable:!0, get:function() {
  r("Module.wasmBinary has been replaced with plain wasmBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
var noExitRuntime;
c.noExitRuntime && (noExitRuntime = c.noExitRuntime);
Object.getOwnPropertyDescriptor(c, "noExitRuntime") || Object.defineProperty(c, "noExitRuntime", {configurable:!0, get:function() {
  r("Module.noExitRuntime has been replaced with plain noExitRuntime (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
"object" !== typeof WebAssembly && r("No WebAssembly support found. Build with -s WASM=0 to target JavaScript instead.");
var ta, ua = new WebAssembly.Table({initial:8851, maximum:8851, element:"anyfunc"}), va = !1;
function assert(a, b) {
  a || r("Assertion failed: " + b);
}
var wa = "undefined" !== typeof TextDecoder ? new TextDecoder("utf8") : void 0;
function xa(a, b, d) {
  var e = b + d;
  for (d = b; a[d] && !(d >= e);) {
    ++d;
  }
  if (16 < d - b && a.subarray && wa) {
    return wa.decode(a.subarray(b, d));
  }
  for (e = ""; b < d;) {
    var g = a[b++];
    if (g & 128) {
      var f = a[b++] & 63;
      if (192 == (g & 224)) {
        e += String.fromCharCode((g & 31) << 6 | f);
      } else {
        var k = a[b++] & 63;
        224 == (g & 240) ? g = (g & 15) << 12 | f << 6 | k : (240 != (g & 248) && pa("Invalid UTF-8 leading byte 0x" + g.toString(16) + " encountered when deserializing a UTF-8 string on the asm.js/wasm heap to a JS string!"), g = (g & 7) << 18 | f << 12 | k << 6 | a[b++] & 63);
        65536 > g ? e += String.fromCharCode(g) : (g -= 65536, e += String.fromCharCode(55296 | g >> 10, 56320 | g & 1023));
      }
    } else {
      e += String.fromCharCode(g);
    }
  }
  return e;
}
function y(a, b) {
  return a ? xa(A, a, b) : "";
}
function ya(a, b, d, e) {
  if (!(0 < e)) {
    return 0;
  }
  var g = d;
  e = d + e - 1;
  for (var f = 0; f < a.length; ++f) {
    var k = a.charCodeAt(f);
    if (55296 <= k && 57343 >= k) {
      var l = a.charCodeAt(++f);
      k = 65536 + ((k & 1023) << 10) | l & 1023;
    }
    if (127 >= k) {
      if (d >= e) {
        break;
      }
      b[d++] = k;
    } else {
      if (2047 >= k) {
        if (d + 1 >= e) {
          break;
        }
        b[d++] = 192 | k >> 6;
      } else {
        if (65535 >= k) {
          if (d + 2 >= e) {
            break;
          }
          b[d++] = 224 | k >> 12;
        } else {
          if (d + 3 >= e) {
            break;
          }
          2097152 <= k && pa("Invalid Unicode code point 0x" + k.toString(16) + " encountered when serializing a JS string to an UTF-8 string on the asm.js/wasm heap! (Valid unicode code points should be in range 0-0x1FFFFF).");
          b[d++] = 240 | k >> 18;
          b[d++] = 128 | k >> 12 & 63;
        }
        b[d++] = 128 | k >> 6 & 63;
      }
      b[d++] = 128 | k & 63;
    }
  }
  b[d] = 0;
  return d - g;
}
function za(a, b, d) {
  assert("number" == typeof d, "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
  ya(a, A, b, d);
}
function Aa(a) {
  for (var b = 0, d = 0; d < a.length; ++d) {
    var e = a.charCodeAt(d);
    55296 <= e && 57343 >= e && (e = 65536 + ((e & 1023) << 10) | a.charCodeAt(++d) & 1023);
    127 >= e ? ++b : b = 2047 >= e ? b + 2 : 65535 >= e ? b + 3 : b + 4;
  }
  return b;
}
var Ba = "undefined" !== typeof TextDecoder ? new TextDecoder("utf-16le") : void 0;
function Ca(a, b) {
  assert(0 == a % 2, "Pointer passed to UTF16ToString must be aligned to two bytes!");
  var d = a >> 1;
  for (var e = d + b / 2; !(d >= e) && Da[d];) {
    ++d;
  }
  d <<= 1;
  if (32 < d - a && Ba) {
    return Ba.decode(A.subarray(a, d));
  }
  d = 0;
  for (e = "";;) {
    var g = Ea[a + 2 * d >> 1];
    if (0 == g || d == b / 2) {
      return e;
    }
    ++d;
    e += String.fromCharCode(g);
  }
}
function Fa(a, b, d) {
  assert(0 == b % 2, "Pointer passed to stringToUTF16 must be aligned to two bytes!");
  assert("number" == typeof d, "stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
  void 0 === d && (d = 2147483647);
  if (2 > d) {
    return 0;
  }
  d -= 2;
  var e = b;
  d = d < 2 * a.length ? d / 2 : a.length;
  for (var g = 0; g < d; ++g) {
    Ea[b >> 1] = a.charCodeAt(g), b += 2;
  }
  Ea[b >> 1] = 0;
  return b - e;
}
function Ga(a) {
  return 2 * a.length;
}
function Ha(a, b) {
  assert(0 == a % 4, "Pointer passed to UTF32ToString must be aligned to four bytes!");
  for (var d = 0, e = ""; !(d >= b / 4);) {
    var g = B[a + 4 * d >> 2];
    if (0 == g) {
      break;
    }
    ++d;
    65536 <= g ? (g -= 65536, e += String.fromCharCode(55296 | g >> 10, 56320 | g & 1023)) : e += String.fromCharCode(g);
  }
  return e;
}
function Ia(a, b, d) {
  assert(0 == b % 4, "Pointer passed to stringToUTF32 must be aligned to four bytes!");
  assert("number" == typeof d, "stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
  void 0 === d && (d = 2147483647);
  if (4 > d) {
    return 0;
  }
  var e = b;
  d = e + d - 4;
  for (var g = 0; g < a.length; ++g) {
    var f = a.charCodeAt(g);
    if (55296 <= f && 57343 >= f) {
      var k = a.charCodeAt(++g);
      f = 65536 + ((f & 1023) << 10) | k & 1023;
    }
    B[b >> 2] = f;
    b += 4;
    if (b + 4 > d) {
      break;
    }
  }
  B[b >> 2] = 0;
  return b - e;
}
function Ja(a) {
  for (var b = 0, d = 0; d < a.length; ++d) {
    var e = a.charCodeAt(d);
    55296 <= e && 57343 >= e && ++d;
    b += 4;
  }
  return b;
}
function Ka(a) {
  var b = Aa(a) + 1, d = La(b);
  d && ya(a, D, d, b);
  return d;
}
function Ma(a, b) {
  assert(0 <= a.length, "writeArrayToMemory array must have a length (should be an array or typed array)");
  D.set(a, b);
}
var Na, D, A, Ea, Da, B, E, Oa, Pa;
function Qa(a) {
  Na = a;
  c.HEAP8 = D = new Int8Array(a);
  c.HEAP16 = Ea = new Int16Array(a);
  c.HEAP32 = B = new Int32Array(a);
  c.HEAPU8 = A = new Uint8Array(a);
  c.HEAPU16 = Da = new Uint16Array(a);
  c.HEAPU32 = E = new Uint32Array(a);
  c.HEAPF32 = Oa = new Float32Array(a);
  c.HEAPF64 = Pa = new Float64Array(a);
}
assert(!0, "stack must start aligned");
assert(!0, "heap must start aligned");
c.TOTAL_STACK && assert(5242880 === c.TOTAL_STACK, "the stack size can no longer be determined at runtime");
var Ra = c.INITIAL_MEMORY || 16777216;
Object.getOwnPropertyDescriptor(c, "INITIAL_MEMORY") || Object.defineProperty(c, "INITIAL_MEMORY", {configurable:!0, get:function() {
  r("Module.INITIAL_MEMORY has been replaced with plain INITIAL_INITIAL_MEMORY (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
assert(5242880 <= Ra, "INITIAL_MEMORY should be larger than TOTAL_STACK, was " + Ra + "! (TOTAL_STACK=5242880)");
assert("undefined" !== typeof Int32Array && "undefined" !== typeof Float64Array && void 0 !== Int32Array.prototype.subarray && void 0 !== Int32Array.prototype.set, "JS engine does not provide full typed array support");
c.wasmMemory ? ta = c.wasmMemory : ta = new WebAssembly.Memory({initial:Ra / 65536, maximum:32768});
ta && (Na = ta.buffer);
Ra = Na.byteLength;
assert(0 === Ra % 65536);
assert(!0);
Qa(Na);
B[503288] = 7256192;
function Sa() {
  assert(!0);
  E[503329] = 34821223;
  E[503330] = 2310721022;
  B[0] = 1668509029;
}
function Ta() {
  var a = E[503329], b = E[503330];
  34821223 == a && 2310721022 == b || r("Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x2135467, but received 0x" + b.toString(16) + " " + a.toString(16));
  1668509029 !== B[0] && r("Runtime error: The application has corrupted its heap memory area (address zero)!");
}
var Ua = new Int16Array(1), Va = new Int8Array(Ua.buffer);
Ua[0] = 25459;
if (115 !== Va[0] || 99 !== Va[1]) {
  throw "Runtime error: expected the system to be little-endian!";
}
function Wa(a) {
  for (; 0 < a.length;) {
    var b = a.shift();
    if ("function" == typeof b) {
      b(c);
    } else {
      var d = b.pa;
      "number" === typeof d ? void 0 === b.Y ? c.dynCall_v(d) : c.dynCall_vi(d, b.Y) : d(void 0 === b.Y ? null : b.Y);
    }
  }
}
var Xa = [], Ya = [], Za = [], $a = [], ab = [], bb = !1, cb = !1;
function db() {
  var a = c.preRun.shift();
  Xa.unshift(a);
}
function eb(a, b) {
  return 0 <= a ? a : 32 >= b ? 2 * Math.abs(1 << b - 1) + a : Math.pow(2, b) + a;
}
function fb(a, b) {
  if (0 >= a) {
    return a;
  }
  var d = 32 >= b ? Math.abs(1 << b - 1) : Math.pow(2, b - 1);
  a >= d && (32 >= b || a > d) && (a = -2 * d + a);
  return a;
}
assert(Math.imul, "This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
assert(Math.fround, "This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
assert(Math.clz32, "This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
assert(Math.trunc, "This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
var gb = Math.abs, hb = Math.ceil, ib = Math.floor, jb = Math.min, kb = 0, lb = null, mb = null, nb = {};
function ob() {
  kb++;
  c.monitorRunDependencies && c.monitorRunDependencies(kb);
  assert(!nb["wasm-instantiate"]);
  nb["wasm-instantiate"] = 1;
  null === lb && "undefined" !== typeof setInterval && (lb = setInterval(function() {
    if (va) {
      clearInterval(lb), lb = null;
    } else {
      var a = !1, b;
      for (b in nb) {
        a || (a = !0, u("still waiting on run dependencies:")), u("dependency: " + b);
      }
      a && u("(end of list)");
    }
  }, 10000));
}
c.preloadedImages = {};
c.preloadedAudios = {};
function r(a) {
  if (c.onAbort) {
    c.onAbort(a);
  }
  oa(a);
  u(a);
  va = !0;
  a = "abort(" + a + ") at ";
  var b = pb();
  c.extraStackTrace && (b += "\n" + c.extraStackTrace());
  b = qb(b);
  throw new WebAssembly.RuntimeError(a + b);
}
function rb(a) {
  var b = sb;
  return String.prototype.startsWith ? b.startsWith(a) : 0 === b.indexOf(a);
}
function tb() {
  return rb("data:application/octet-stream;base64,");
}
function G(a) {
  return function() {
    var b = c.asm;
    assert(bb, "native function `" + a + "` called before runtime initialization");
    assert(!cb, "native function `" + a + "` called after runtime exit (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    b[a] || assert(b[a], "exported native function `" + a + "` not found");
    return b[a].apply(null, arguments);
  };
}
var sb = "dbr-7.6.0.node.wasm";
if (!tb()) {
  var ub = sb;
  sb = c.locateFile ? c.locateFile(ub, h) : h + ub;
}
function vb() {
  try {
    if (sa) {
      return new Uint8Array(sa);
    }
    if (ka) {
      return ka(sb);
    }
    throw "both async and sync fetching of the wasm failed";
  } catch (a) {
    r(a);
  }
}
function wb() {
  return sa || !ea && !fa || "function" !== typeof fetch || rb("file://") ? new Promise(function(a) {
    a(vb());
  }) : fetch(sb, {credentials:"same-origin"}).then(function(a) {
    if (!a.ok) {
      throw "failed to load wasm binary file at '" + sb + "'";
    }
    return a.arrayBuffer();
  }).catch(function() {
    return vb();
  });
}
var H, I;
Ya.push({pa:function() {
  xb();
}});
function yb(a) {
  pa("warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling");
  return a;
}
function qb(a) {
  return a.replace(/\b_Z[\w\d_]+/g, function(b) {
    var d = yb(b);
    return b === d ? b : d + " [" + b + "]";
  });
}
function pb() {
  var a = Error();
  if (!a.stack) {
    try {
      throw Error();
    } catch (b) {
      a = b;
    }
    if (!a.stack) {
      return "(no stack trace available)";
    }
  }
  return a.stack.toString();
}
function zb(a, b) {
  for (var d = 0, e = a.length - 1; 0 <= e; e--) {
    var g = a[e];
    "." === g ? a.splice(e, 1) : ".." === g ? (a.splice(e, 1), d++) : d && (a.splice(e, 1), d--);
  }
  if (b) {
    for (; d; d--) {
      a.unshift("..");
    }
  }
  return a;
}
function Ab(a) {
  var b = "/" === a.charAt(0), d = "/" === a.substr(-1);
  (a = zb(a.split("/").filter(function(e) {
    return !!e;
  }), !b).join("/")) || b || (a = ".");
  a && d && (a += "/");
  return (b ? "/" : "") + a;
}
function Bb(a) {
  var b = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);
  a = b[0];
  b = b[1];
  if (!a && !b) {
    return ".";
  }
  b && (b = b.substr(0, b.length - 1));
  return a + b;
}
function Cb(a) {
  if ("/" === a) {
    return "/";
  }
  var b = a.lastIndexOf("/");
  return -1 === b ? a : a.substr(b + 1);
}
function Db() {
  for (var a = "", b = !1, d = arguments.length - 1; -1 <= d && !b; d--) {
    b = 0 <= d ? arguments[d] : "/";
    if ("string" !== typeof b) {
      throw new TypeError("Arguments to path.resolve must be strings");
    }
    if (!b) {
      return "";
    }
    a = b + "/" + a;
    b = "/" === b.charAt(0);
  }
  a = zb(a.split("/").filter(function(e) {
    return !!e;
  }), !b).join("/");
  return (b ? "/" : "") + a || ".";
}
var Eb = [];
function Fb(a, b) {
  Eb[a] = {input:[], output:[], S:b};
  Gb(a, Hb);
}
var Hb = {open:function(a) {
  var b = Eb[a.node.rdev];
  if (!b) {
    throw new J(43);
  }
  a.tty = b;
  a.seekable = !1;
}, close:function(a) {
  a.tty.S.flush(a.tty);
}, flush:function(a) {
  a.tty.S.flush(a.tty);
}, read:function(a, b, d, e) {
  if (!a.tty || !a.tty.S.qa) {
    throw new J(60);
  }
  for (var g = 0, f = 0; f < e; f++) {
    try {
      var k = a.tty.S.qa(a.tty);
    } catch (l) {
      throw new J(29);
    }
    if (void 0 === k && 0 === g) {
      throw new J(6);
    }
    if (null === k || void 0 === k) {
      break;
    }
    g++;
    b[d + f] = k;
  }
  g && (a.node.timestamp = Date.now());
  return g;
}, write:function(a, b, d, e) {
  if (!a.tty || !a.tty.S.ha) {
    throw new J(60);
  }
  try {
    for (var g = 0; g < e; g++) {
      a.tty.S.ha(a.tty, b[d + g]);
    }
  } catch (f) {
    throw new J(29);
  }
  e && (a.node.timestamp = Date.now());
  return g;
}}, Jb = {qa:function(a) {
  if (!a.input.length) {
    var b = null;
    if (ha) {
      var d = Buffer.I ? Buffer.I(256) : new Buffer(256), e = 0;
      try {
        e = la.readSync(process.stdin.fd, d, 0, 256, null);
      } catch (g) {
        if (-1 != g.toString().indexOf("EOF")) {
          e = 0;
        } else {
          throw g;
        }
      }
      0 < e ? b = d.slice(0, e).toString("utf-8") : b = null;
    } else {
      "undefined" != typeof window && "function" == typeof window.prompt ? (b = window.prompt("Input: "), null !== b && (b += "\n")) : "function" == typeof readline && (b = readline(), null !== b && (b += "\n"));
    }
    if (!b) {
      return null;
    }
    a.input = Ib(b, !0);
  }
  return a.input.shift();
}, ha:function(a, b) {
  null === b || 10 === b ? (oa(xa(a.output, 0)), a.output = []) : 0 != b && a.output.push(b);
}, flush:function(a) {
  a.output && 0 < a.output.length && (oa(xa(a.output, 0)), a.output = []);
}}, Kb = {ha:function(a, b) {
  null === b || 10 === b ? (u(xa(a.output, 0)), a.output = []) : 0 != b && a.output.push(b);
}, flush:function(a) {
  a.output && 0 < a.output.length && (u(xa(a.output, 0)), a.output = []);
}}, K = {B:null, F:function() {
  return K.createNode(null, "/", 16895, 0);
}, createNode:function(a, b, d, e) {
  if (24576 === (d & 61440) || 4096 === (d & 61440)) {
    throw new J(63);
  }
  K.B || (K.B = {dir:{node:{G:K.f.G, C:K.f.C, lookup:K.f.lookup, aa:K.f.aa, rename:K.f.rename, unlink:K.f.unlink, rmdir:K.f.rmdir, readdir:K.f.readdir, symlink:K.f.symlink}, stream:{L:K.g.L}}, file:{node:{G:K.f.G, C:K.f.C}, stream:{L:K.g.L, read:K.g.read, write:K.g.write, ka:K.g.ka, ra:K.g.ra, ba:K.g.ba}}, link:{node:{G:K.f.G, C:K.f.C, readlink:K.f.readlink}, stream:{}}, la:{node:{G:K.f.G, C:K.f.C}, stream:Lb}});
  d = Mb(a, b, d, e);
  L(d.mode) ? (d.f = K.B.dir.node, d.g = K.B.dir.stream, d.c = {}) : 32768 === (d.mode & 61440) ? (d.f = K.B.file.node, d.g = K.B.file.stream, d.j = 0, d.c = null) : 40960 === (d.mode & 61440) ? (d.f = K.B.link.node, d.g = K.B.link.stream) : 8192 === (d.mode & 61440) && (d.f = K.B.la.node, d.g = K.B.la.stream);
  d.timestamp = Date.now();
  a && (a.c[b] = d);
  return d;
}, nd:function(a) {
  if (a.c && a.c.subarray) {
    for (var b = [], d = 0; d < a.j; ++d) {
      b.push(a.c[d]);
    }
    return b;
  }
  return a.c;
}, od:function(a) {
  return a.c ? a.c.subarray ? a.c.subarray(0, a.j) : new Uint8Array(a.c) : new Uint8Array(0);
}, na:function(a, b) {
  var d = a.c ? a.c.length : 0;
  d >= b || (b = Math.max(b, d * (1048576 > d ? 2.0 : 1.125) >>> 0), 0 != d && (b = Math.max(b, 256)), d = a.c, a.c = new Uint8Array(b), 0 < a.j && a.c.set(d.subarray(0, a.j), 0));
}, Na:function(a, b) {
  if (a.j != b) {
    if (0 == b) {
      a.c = null, a.j = 0;
    } else {
      if (!a.c || a.c.subarray) {
        var d = a.c;
        a.c = new Uint8Array(b);
        d && a.c.set(d.subarray(0, Math.min(b, a.j)));
      } else {
        if (a.c || (a.c = []), a.c.length > b) {
          a.c.length = b;
        } else {
          for (; a.c.length < b;) {
            a.c.push(0);
          }
        }
      }
      a.j = b;
    }
  }
}, f:{G:function(a) {
  var b = {};
  b.dev = 8192 === (a.mode & 61440) ? a.id : 1;
  b.ino = a.id;
  b.mode = a.mode;
  b.nlink = 1;
  b.uid = 0;
  b.gid = 0;
  b.rdev = a.rdev;
  L(a.mode) ? b.size = 4096 : 32768 === (a.mode & 61440) ? b.size = a.j : 40960 === (a.mode & 61440) ? b.size = a.link.length : b.size = 0;
  b.atime = new Date(a.timestamp);
  b.mtime = new Date(a.timestamp);
  b.ctime = new Date(a.timestamp);
  b.va = 4096;
  b.blocks = Math.ceil(b.size / b.va);
  return b;
}, C:function(a, b) {
  void 0 !== b.mode && (a.mode = b.mode);
  void 0 !== b.timestamp && (a.timestamp = b.timestamp);
  void 0 !== b.size && K.Na(a, b.size);
}, lookup:function() {
  throw Nb[44];
}, aa:function(a, b, d, e) {
  return K.createNode(a, b, d, e);
}, rename:function(a, b, d) {
  if (L(a.mode)) {
    try {
      var e = Ob(b, d);
    } catch (f) {
    }
    if (e) {
      for (var g in e.c) {
        throw new J(55);
      }
    }
  }
  delete a.parent.c[a.name];
  a.name = d;
  b.c[d] = a;
  a.parent = b;
}, unlink:function(a, b) {
  delete a.c[b];
}, rmdir:function(a, b) {
  var d = Ob(a, b), e;
  for (e in d.c) {
    throw new J(55);
  }
  delete a.c[b];
}, readdir:function(a) {
  var b = [".", ".."], d;
  for (d in a.c) {
    a.c.hasOwnProperty(d) && b.push(d);
  }
  return b;
}, symlink:function(a, b, d) {
  a = K.createNode(a, b, 41471, 0);
  a.link = d;
  return a;
}, readlink:function(a) {
  if (40960 !== (a.mode & 61440)) {
    throw new J(28);
  }
  return a.link;
}}, g:{read:function(a, b, d, e, g) {
  var f = a.node.c;
  if (g >= a.node.j) {
    return 0;
  }
  a = Math.min(a.node.j - g, e);
  assert(0 <= a);
  if (8 < a && f.subarray) {
    b.set(f.subarray(g, g + a), d);
  } else {
    for (e = 0; e < a; e++) {
      b[d + e] = f[g + e];
    }
  }
  return a;
}, write:function(a, b, d, e, g, f) {
  assert(!(b instanceof ArrayBuffer));
  b.buffer === D.buffer && (f && pa("file packager has copied file data into memory, but in memory growth we are forced to copy it again (see --no-heap-copy)"), f = !1);
  if (!e) {
    return 0;
  }
  a = a.node;
  a.timestamp = Date.now();
  if (b.subarray && (!a.c || a.c.subarray)) {
    if (f) {
      return assert(0 === g, "canOwn must imply no weird position inside the file"), a.c = b.subarray(d, d + e), a.j = e;
    }
    if (0 === a.j && 0 === g) {
      return a.c = b.slice(d, d + e), a.j = e;
    }
    if (g + e <= a.j) {
      return a.c.set(b.subarray(d, d + e), g), e;
    }
  }
  K.na(a, g + e);
  if (a.c.subarray && b.subarray) {
    a.c.set(b.subarray(d, d + e), g);
  } else {
    for (f = 0; f < e; f++) {
      a.c[g + f] = b[d + f];
    }
  }
  a.j = Math.max(a.j, g + e);
  return e;
}, L:function(a, b, d) {
  1 === d ? b += a.position : 2 === d && 32768 === (a.node.mode & 61440) && (b += a.node.j);
  if (0 > b) {
    throw new J(28);
  }
  return b;
}, ka:function(a, b, d) {
  K.na(a.node, b + d);
  a.node.j = Math.max(a.node.j, b + d);
}, ra:function(a, b, d, e, g, f) {
  assert(0 === b);
  if (32768 !== (a.node.mode & 61440)) {
    throw new J(43);
  }
  a = a.node.c;
  if (f & 2 || a.buffer !== Na) {
    if (0 < e || e + d < a.length) {
      a.subarray ? a = a.subarray(e, e + d) : a = Array.prototype.slice.call(a, e, e + d);
    }
    e = !0;
    d = La(d);
    if (!d) {
      throw new J(48);
    }
    D.set(a, d);
  } else {
    e = !1, d = a.byteOffset;
  }
  return {i:d, ua:e};
}, ba:function(a, b, d, e, g) {
  if (32768 !== (a.node.mode & 61440)) {
    throw new J(43);
  }
  if (g & 2) {
    return 0;
  }
  K.g.write(a, b, 0, e, d, !1);
  return 0;
}}}, Pb = {0:"Success", 1:"Arg list too long", 2:"Permission denied", 3:"Address already in use", 4:"Address not available", 5:"Address family not supported by protocol family", 6:"No more processes", 7:"Socket already connected", 8:"Bad file number", 9:"Trying to read unreadable message", 10:"Mount device busy", 11:"Operation canceled", 12:"No children", 13:"Connection aborted", 14:"Connection refused", 15:"Connection reset by peer", 16:"File locking deadlock error", 17:"Destination address required", 
18:"Math arg out of domain of func", 19:"Quota exceeded", 20:"File exists", 21:"Bad address", 22:"File too large", 23:"Host is unreachable", 24:"Identifier removed", 25:"Illegal byte sequence", 26:"Connection already in progress", 27:"Interrupted system call", 28:"Invalid argument", 29:"I/O error", 30:"Socket is already connected", 31:"Is a directory", 32:"Too many symbolic links", 33:"Too many open files", 34:"Too many links", 35:"Message too long", 36:"Multihop attempted", 37:"File or path name too long", 
38:"Network interface is not configured", 39:"Connection reset by network", 40:"Network is unreachable", 41:"Too many open files in system", 42:"No buffer space available", 43:"No such device", 44:"No such file or directory", 45:"Exec format error", 46:"No record locks available", 47:"The link has been severed", 48:"Not enough core", 49:"No message of desired type", 50:"Protocol not available", 51:"No space left on device", 52:"Function not implemented", 53:"Socket is not connected", 54:"Not a directory", 
55:"Directory not empty", 56:"State not recoverable", 57:"Socket operation on non-socket", 59:"Not a typewriter", 60:"No such device or address", 61:"Value too large for defined data type", 62:"Previous owner died", 63:"Not super-user", 64:"Broken pipe", 65:"Protocol error", 66:"Unknown protocol", 67:"Protocol wrong type for socket", 68:"Math result not representable", 69:"Read only file system", 70:"Illegal seek", 71:"No such process", 72:"Stale file handle", 73:"Connection timed out", 74:"Text file busy", 
75:"Cross-device link", 100:"Device not a stream", 101:"Bad font file fmt", 102:"Invalid slot", 103:"Invalid request code", 104:"No anode", 105:"Block device required", 106:"Channel number out of range", 107:"Level 3 halted", 108:"Level 3 reset", 109:"Link number out of range", 110:"Protocol driver not attached", 111:"No CSI structure available", 112:"Level 2 halted", 113:"Invalid exchange", 114:"Invalid request descriptor", 115:"Exchange full", 116:"No data (for no delay io)", 117:"Timer expired", 
118:"Out of streams resources", 119:"Machine is not on the network", 120:"Package not installed", 121:"The object is remote", 122:"Advertise error", 123:"Srmount error", 124:"Communication error on send", 125:"Cross mount point (not really error)", 126:"Given log. name not unique", 127:"f.d. invalid for this operation", 128:"Remote address changed", 129:"Can   access a needed shared lib", 130:"Accessing a corrupted shared lib", 131:".lib section in a.out corrupted", 132:"Attempting to link in too many libs", 
133:"Attempting to exec a shared library", 135:"Streams pipe error", 136:"Too many users", 137:"Socket type not supported", 138:"Not supported", 139:"Protocol family not supported", 140:"Can't send after socket shutdown", 141:"Too many references", 142:"Host is down", 148:"No medium (in tape drive)", 156:"Level 2 not synchronized"}, Qb = {Mc:63, lc:44, Zc:71, Hb:27, Jb:29, Ic:60, Va:1, mc:45, eb:8, nb:12, ab:6, kd:6, qc:48, Wa:2, Ab:21, zc:105, lb:10, zb:20, ld:75, kc:43, Bc:54, Lb:31, Ib:28, ec:41, 
Xb:33, Gc:59, gd:74, Bb:22, vc:51, Yc:70, Vc:69, Yb:34, Oc:64, wb:18, Sc:68, rc:49, Eb:24, ob:106, Nb:156, Ob:107, Pb:108, Vb:109, hd:110, ic:111, Mb:112, tb:16, nc:46, cb:113, hb:114, md:115, fc:104, ib:103, jb:102, ub:16, kb:101, xc:100, jc:116, cd:117, wc:118, sc:119, tc:120, Uc:121, oc:47, Za:122, $c:123, pb:124, Pc:65, $b:36, xb:125, gb:9, Hc:126, fb:127, Tc:128, Qb:129, Rb:130, Ub:131, Tb:132, Sb:133, yc:52, Cc:55, ac:37, Wb:32, Jc:138, Nc:139, sb:15, hc:42, $a:5, Rc:67, Ec:57, uc:50, Wc:140, 
rb:14, Xa:3, qb:13, dc:40, bc:38, dd:73, Cb:142, Db:23, Gb:26, bb:7, vb:17, Zb:35, Qc:66, Xc:137, Ya:4, cc:39, Kb:30, Ac:53, ed:141, jd:136, yb:19, ad:72, Fc:138, pc:148, Fb:25, Kc:61, mb:11, Dc:56, Lc:62, bd:135}, Rb = null, Sb = {}, Tb = [], Ub = 1, Vb = null, Wb = !0, M = {}, J = null, Nb = {};
function N(a, b) {
  a = Db("/", a);
  b = b || {};
  if (!a) {
    return {path:"", node:null};
  }
  var d = {oa:!0, ia:0}, e;
  for (e in d) {
    void 0 === b[e] && (b[e] = d[e]);
  }
  if (8 < b.ia) {
    throw new J(32);
  }
  a = zb(a.split("/").filter(function(k) {
    return !!k;
  }), !1);
  var g = Rb;
  d = "/";
  for (e = 0; e < a.length; e++) {
    var f = e === a.length - 1;
    if (f && b.parent) {
      break;
    }
    g = Ob(g, a[e]);
    d = Ab(d + "/" + a[e]);
    g.P && (!f || f && b.oa) && (g = g.P.root);
    if (!f || b.U) {
      for (f = 0; 40960 === (g.mode & 61440);) {
        if (g = Xb(d), d = Db(Bb(d), g), g = N(d, {ia:b.ia}).node, 40 < f++) {
          throw new J(32);
        }
      }
    }
  }
  return {path:d, node:g};
}
function Yb(a) {
  for (var b;;) {
    if (a === a.parent) {
      return a = a.F.sa, b ? "/" !== a[a.length - 1] ? a + "/" + b : a + b : a;
    }
    b = b ? a.name + "/" + b : a.name;
    a = a.parent;
  }
}
function Zb(a, b) {
  for (var d = 0, e = 0; e < b.length; e++) {
    d = (d << 5) - d + b.charCodeAt(e) | 0;
  }
  return (a + d >>> 0) % Vb.length;
}
function $b(a) {
  var b = Zb(a.parent.id, a.name);
  if (Vb[b] === a) {
    Vb[b] = a.R;
  } else {
    for (b = Vb[b]; b;) {
      if (b.R === a) {
        b.R = a.R;
        break;
      }
      b = b.R;
    }
  }
}
function Ob(a, b) {
  var d;
  if (d = (d = ac(a, "x")) ? d : a.f.lookup ? 0 : 2) {
    throw new J(d, a);
  }
  for (d = Vb[Zb(a.id, b)]; d; d = d.R) {
    var e = d.name;
    if (d.parent.id === a.id && e === b) {
      return d;
    }
  }
  return a.f.lookup(a, b);
}
function Mb(a, b, d, e) {
  a = new bc(a, b, d, e);
  b = Zb(a.parent.id, a.name);
  a.R = Vb[b];
  return Vb[b] = a;
}
function L(a) {
  return 16384 === (a & 61440);
}
var cc = {r:0, rs:1052672, "r+":2, w:577, wx:705, xw:705, "w+":578, "wx+":706, "xw+":706, a:1089, ax:1217, xa:1217, "a+":1090, "ax+":1218, "xa+":1218};
function dc(a) {
  var b = ["r", "w", "rw"][a & 3];
  a & 512 && (b += "w");
  return b;
}
function ac(a, b) {
  if (Wb) {
    return 0;
  }
  if (-1 === b.indexOf("r") || a.mode & 292) {
    if (-1 !== b.indexOf("w") && !(a.mode & 146) || -1 !== b.indexOf("x") && !(a.mode & 73)) {
      return 2;
    }
  } else {
    return 2;
  }
  return 0;
}
function ec(a, b) {
  try {
    return Ob(a, b), 20;
  } catch (d) {
  }
  return ac(a, "wx");
}
function fc(a, b, d) {
  try {
    var e = Ob(a, b);
  } catch (g) {
    return g.m;
  }
  if (a = ac(a, "wx")) {
    return a;
  }
  if (d) {
    if (!L(e.mode)) {
      return 54;
    }
    if (e === e.parent || "/" === Yb(e)) {
      return 10;
    }
  } else {
    if (L(e.mode)) {
      return 31;
    }
  }
  return 0;
}
function hc(a) {
  var b = 4096;
  for (a = a || 0; a <= b; a++) {
    if (!Tb[a]) {
      return a;
    }
  }
  throw new J(33);
}
function ic(a, b) {
  jc || (jc = function() {
  }, jc.prototype = {object:{get:function() {
    return this.node;
  }, set:function(g) {
    this.node = g;
  }}});
  var d = new jc, e;
  for (e in a) {
    d[e] = a[e];
  }
  a = d;
  b = hc(b);
  a.fd = b;
  return Tb[b] = a;
}
var Lb = {open:function(a) {
  a.g = Sb[a.node.rdev].g;
  a.g.open && a.g.open(a);
}, L:function() {
  throw new J(70);
}};
function Gb(a, b) {
  Sb[a] = {g:b};
}
function kc(a, b) {
  if ("string" === typeof a) {
    throw a;
  }
  var d = "/" === b, e = !b;
  if (d && Rb) {
    throw new J(10);
  }
  if (!d && !e) {
    var g = N(b, {oa:!1});
    b = g.path;
    g = g.node;
    if (g.P) {
      throw new J(10);
    }
    if (!L(g.mode)) {
      throw new J(54);
    }
  }
  b = {type:a, sd:{}, sa:b, Fa:[]};
  a = a.F(b);
  a.F = b;
  b.root = a;
  d ? Rb = a : g && (g.P = b, g.F && g.F.Fa.push(b));
}
function lc(a, b, d) {
  var e = N(a, {parent:!0}).node;
  a = Cb(a);
  if (!a || "." === a || ".." === a) {
    throw new J(28);
  }
  var g = ec(e, a);
  if (g) {
    throw new J(g);
  }
  if (!e.f.aa) {
    throw new J(63);
  }
  return e.f.aa(e, a, b, d);
}
function O(a) {
  lc(a, 16895, 0);
}
function mc(a, b, d) {
  "undefined" === typeof d && (d = b, b = 438);
  lc(a, b | 8192, d);
}
function nc(a, b) {
  if (!Db(a)) {
    throw new J(44);
  }
  var d = N(b, {parent:!0}).node;
  if (!d) {
    throw new J(44);
  }
  b = Cb(b);
  var e = ec(d, b);
  if (e) {
    throw new J(e);
  }
  if (!d.f.symlink) {
    throw new J(63);
  }
  d.f.symlink(d, b, a);
}
function Xb(a) {
  a = N(a).node;
  if (!a) {
    throw new J(44);
  }
  if (!a.f.readlink) {
    throw new J(28);
  }
  return Db(Yb(a.parent), a.f.readlink(a));
}
function oc(a, b, d, e) {
  if ("" === a) {
    throw new J(44);
  }
  if ("string" === typeof b) {
    var g = cc[b];
    if ("undefined" === typeof g) {
      throw Error("Unknown file open mode: " + b);
    }
    b = g;
  }
  d = b & 64 ? ("undefined" === typeof d ? 438 : d) & 4095 | 32768 : 0;
  if ("object" === typeof a) {
    var f = a;
  } else {
    a = Ab(a);
    try {
      f = N(a, {U:!(b & 131072)}).node;
    } catch (l) {
    }
  }
  g = !1;
  if (b & 64) {
    if (f) {
      if (b & 128) {
        throw new J(20);
      }
    } else {
      f = lc(a, d, 0), g = !0;
    }
  }
  if (!f) {
    throw new J(44);
  }
  8192 === (f.mode & 61440) && (b &= -513);
  if (b & 65536 && !L(f.mode)) {
    throw new J(54);
  }
  if (!g && (d = f ? 40960 === (f.mode & 61440) ? 32 : L(f.mode) && ("r" !== dc(b) || b & 512) ? 31 : ac(f, dc(b)) : 44)) {
    throw new J(d);
  }
  if (b & 512) {
    d = f;
    var k;
    "string" === typeof d ? k = N(d, {U:!0}).node : k = d;
    if (!k.f.C) {
      throw new J(63);
    }
    if (L(k.mode)) {
      throw new J(31);
    }
    if (32768 !== (k.mode & 61440)) {
      throw new J(28);
    }
    if (d = ac(k, "w")) {
      throw new J(d);
    }
    k.f.C(k, {size:0, timestamp:Date.now()});
  }
  b &= -131713;
  e = ic({node:f, path:Yb(f), flags:b, seekable:!0, position:0, g:f.g, Ua:[], error:!1}, e);
  e.g.open && e.g.open(e);
  !c.logReadFiles || b & 1 || (pc || (pc = {}), a in pc || (pc[a] = 1, u("FS.trackingDelegate error on read file: " + a)));
  try {
    M.onOpenFile && (f = 0, 1 !== (b & 2097155) && (f |= 1), 0 !== (b & 2097155) && (f |= 2), M.onOpenFile(a, f));
  } catch (l) {
    u("FS.trackingDelegate['onOpenFile']('" + a + "', flags) threw an exception: " + l.message);
  }
  return e;
}
function qc(a, b, d) {
  if (null === a.fd) {
    throw new J(8);
  }
  if (!a.seekable || !a.g.L) {
    throw new J(70);
  }
  if (0 != d && 1 != d && 2 != d) {
    throw new J(28);
  }
  a.position = a.g.L(a, b, d);
  a.Ua = [];
  return a.position;
}
function rc() {
  J || (J = function(a, b) {
    this.node = b;
    this.Oa = function(d) {
      this.m = d;
      for (var e in Qb) {
        if (Qb[e] === d) {
          this.code = e;
          break;
        }
      }
    };
    this.Oa(a);
    this.message = Pb[a];
    this.stack && (Object.defineProperty(this, "stack", {value:Error().stack, writable:!0}), this.stack = qb(this.stack));
  }, J.prototype = Error(), J.prototype.constructor = J, [44].forEach(function(a) {
    Nb[a] = new J(a);
    Nb[a].stack = "<generic error, no stack>";
  }));
}
var sc;
function tc(a, b) {
  var d = 0;
  a && (d |= 365);
  b && (d |= 146);
  return d;
}
function uc(a, b, d) {
  a = Ab("/dev/" + a);
  var e = tc(!!b, !!d);
  vc || (vc = 64);
  var g = vc++ << 8 | 0;
  Gb(g, {open:function(f) {
    f.seekable = !1;
  }, close:function() {
    d && d.buffer && d.buffer.length && d(10);
  }, read:function(f, k, l, p) {
    for (var n = 0, q = 0; q < p; q++) {
      try {
        var v = b();
      } catch (x) {
        throw new J(29);
      }
      if (void 0 === v && 0 === n) {
        throw new J(6);
      }
      if (null === v || void 0 === v) {
        break;
      }
      n++;
      k[l + q] = v;
    }
    n && (f.node.timestamp = Date.now());
    return n;
  }, write:function(f, k, l, p) {
    for (var n = 0; n < p; n++) {
      try {
        d(k[l + n]);
      } catch (q) {
        throw new J(29);
      }
    }
    p && (f.node.timestamp = Date.now());
    return n;
  }});
  mc(a, e, g);
}
var vc, P = {}, jc, pc, wc = {}, xc = void 0;
function yc() {
  assert(void 0 != xc);
  xc += 4;
  return B[xc - 4 >> 2];
}
function zc(a) {
  a = Tb[a];
  if (!a) {
    throw new J(8);
  }
  return a;
}
function Ac(a) {
  switch(a) {
    case 1:
      return 0;
    case 2:
      return 1;
    case 4:
      return 2;
    case 8:
      return 3;
    default:
      throw new TypeError("Unknown type size: " + a);
  }
}
var Bc = void 0;
function Q(a) {
  for (var b = ""; A[a];) {
    b += Bc[A[a++]];
  }
  return b;
}
var Cc = {}, Dc = {}, Ec = {};
function Fc(a) {
  if (void 0 === a) {
    return "_unknown";
  }
  a = a.replace(/[^a-zA-Z0-9_]/g, "$");
  var b = a.charCodeAt(0);
  return 48 <= b && 57 >= b ? "_" + a : a;
}
function Gc(a, b) {
  a = Fc(a);
  return (new Function("body", "return function " + a + '() {\n    "use strict";    return body.apply(this, arguments);\n};\n'))(b);
}
function Hc(a) {
  var b = Error, d = Gc(a, function(e) {
    this.name = a;
    this.message = e;
    e = Error(e).stack;
    void 0 !== e && (this.stack = this.toString() + "\n" + e.replace(/^Error(:[^\n]*)?\n/, ""));
  });
  d.prototype = Object.create(b.prototype);
  d.prototype.constructor = d;
  d.prototype.toString = function() {
    return void 0 === this.message ? this.name : this.name + ": " + this.message;
  };
  return d;
}
var Ic = void 0;
function R(a) {
  throw new Ic(a);
}
var Jc = void 0;
function Kc(a) {
  throw new Jc(a);
}
function S(a, b, d) {
  function e(l) {
    l = d(l);
    l.length !== a.length && Kc("Mismatched type converter count");
    for (var p = 0; p < a.length; ++p) {
      Lc(a[p], l[p]);
    }
  }
  a.forEach(function(l) {
    Ec[l] = b;
  });
  var g = Array(b.length), f = [], k = 0;
  b.forEach(function(l, p) {
    Dc.hasOwnProperty(l) ? g[p] = Dc[l] : (f.push(l), Cc.hasOwnProperty(l) || (Cc[l] = []), Cc[l].push(function() {
      g[p] = Dc[l];
      ++k;
      k === f.length && e(g);
    }));
  });
  0 === f.length && e(g);
}
function Lc(a, b, d) {
  d = d || {};
  if (!("argPackAdvance" in b)) {
    throw new TypeError("registerType registeredInstance requires argPackAdvance");
  }
  var e = b.name;
  a || R('type "' + e + '" must have a positive integer typeid pointer');
  if (Dc.hasOwnProperty(a)) {
    if (d.Ca) {
      return;
    }
    R("Cannot register type '" + e + "' twice");
  }
  Dc[a] = b;
  delete Ec[a];
  Cc.hasOwnProperty(a) && (b = Cc[a], delete Cc[a], b.forEach(function(g) {
    g();
  }));
}
function Mc(a) {
  return {count:a.count, O:a.O, V:a.V, i:a.i, l:a.l, u:a.u, v:a.v};
}
function Nc(a) {
  R(a.b.l.h.name + " instance already deleted");
}
var Oc = !1;
function Pc() {
}
function Qc(a) {
  --a.count.value;
  0 === a.count.value && (a.u ? a.v.M(a.u) : a.l.h.M(a.i));
}
function Rc(a) {
  if ("undefined" === typeof FinalizationGroup) {
    return Rc = function(b) {
      return b;
    }, a;
  }
  Oc = new FinalizationGroup(function(b) {
    for (var d = b.next(); !d.done; d = b.next()) {
      d = d.value, d.i ? Qc(d) : console.warn("object already deleted: " + d.i);
    }
  });
  Rc = function(b) {
    Oc.register(b, b.b, b.b);
    return b;
  };
  Pc = function(b) {
    Oc.unregister(b.b);
  };
  return Rc(a);
}
var Sc = void 0, Tc = [];
function Uc() {
  for (; Tc.length;) {
    var a = Tc.pop();
    a.b.O = !1;
    a["delete"]();
  }
}
function Vc() {
}
var Wc = {};
function Xc(a, b, d) {
  if (void 0 === a[b].o) {
    var e = a[b];
    a[b] = function() {
      a[b].o.hasOwnProperty(arguments.length) || R("Function '" + d + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + a[b].o + ")!");
      return a[b].o[arguments.length].apply(this, arguments);
    };
    a[b].o = [];
    a[b].o[e.N] = e;
  }
}
function Yc(a, b) {
  c.hasOwnProperty(a) ? (R("Cannot register public name '" + a + "' twice"), Xc(c, a, a), c.hasOwnProperty(void 0) && R("Cannot register multiple overloads of a function with the same number of arguments (undefined)!"), c[a].o[void 0] = b) : c[a] = b;
}
function Zc(a, b, d, e, g, f, k, l) {
  this.name = a;
  this.constructor = b;
  this.H = d;
  this.M = e;
  this.A = g;
  this.Aa = f;
  this.X = k;
  this.za = l;
  this.Ka = [];
}
function $c(a, b, d) {
  for (; b !== d;) {
    b.X || R("Expected null or instance of " + d.name + ", got an instance of " + b.name), a = b.X(a), b = b.A;
  }
  return a;
}
function ad(a, b) {
  if (null === b) {
    return this.ga && R("null is not a valid " + this.name), 0;
  }
  b.b || R('Cannot pass "' + bd(b) + '" as a ' + this.name);
  b.b.i || R("Cannot pass deleted object as a pointer of type " + this.name);
  return $c(b.b.i, b.b.l.h, this.h);
}
function cd(a, b) {
  if (null === b) {
    this.ga && R("null is not a valid " + this.name);
    if (this.$) {
      var d = this.La();
      null !== a && a.push(this.M, d);
      return d;
    }
    return 0;
  }
  b.b || R('Cannot pass "' + bd(b) + '" as a ' + this.name);
  b.b.i || R("Cannot pass deleted object as a pointer of type " + this.name);
  !this.Z && b.b.l.Z && R("Cannot convert argument of type " + (b.b.v ? b.b.v.name : b.b.l.name) + " to parameter type " + this.name);
  d = $c(b.b.i, b.b.l.h, this.h);
  if (this.$) {
    switch(void 0 === b.b.u && R("Passing raw pointer to smart pointer is illegal"), this.Pa) {
      case 0:
        b.b.v === this ? d = b.b.u : R("Cannot convert argument of type " + (b.b.v ? b.b.v.name : b.b.l.name) + " to parameter type " + this.name);
        break;
      case 1:
        d = b.b.u;
        break;
      case 2:
        if (b.b.v === this) {
          d = b.b.u;
        } else {
          var e = b.clone();
          d = this.Ma(d, dd(function() {
            e["delete"]();
          }));
          null !== a && a.push(this.M, d);
        }
        break;
      default:
        R("Unsupporting sharing policy");
    }
  }
  return d;
}
function ed(a, b) {
  if (null === b) {
    return this.ga && R("null is not a valid " + this.name), 0;
  }
  b.b || R('Cannot pass "' + bd(b) + '" as a ' + this.name);
  b.b.i || R("Cannot pass deleted object as a pointer of type " + this.name);
  b.b.l.Z && R("Cannot convert argument of type " + b.b.l.name + " to parameter type " + this.name);
  return $c(b.b.i, b.b.l.h, this.h);
}
function fd(a) {
  return this.fromWireType(E[a >> 2]);
}
function gd(a, b, d) {
  if (b === d) {
    return a;
  }
  if (void 0 === d.A) {
    return null;
  }
  a = gd(a, b, d.A);
  return null === a ? null : d.za(a);
}
var hd = {};
function jd(a, b) {
  for (void 0 === b && R("ptr should not be undefined"); a.A;) {
    b = a.X(b), a = a.A;
  }
  return hd[b];
}
function kd(a, b) {
  b.l && b.i || Kc("makeClassHandle requires ptr and ptrType");
  !!b.v !== !!b.u && Kc("Both smartPtrType and smartPtr must be specified");
  b.count = {value:1};
  return Rc(Object.create(a, {b:{value:b}}));
}
function ld(a, b, d, e) {
  this.name = a;
  this.h = b;
  this.ga = d;
  this.Z = e;
  this.$ = !1;
  this.M = this.Ma = this.La = this.ta = this.Pa = this.Ja = void 0;
  void 0 !== b.A ? this.toWireType = cd : (this.toWireType = e ? ad : ed, this.D = null);
}
function md(a, b) {
  c.hasOwnProperty(a) || Kc("Replacing nonexistant public symbol");
  c[a] = b;
  c[a].N = void 0;
}
function nd(a, b) {
  a = Q(a);
  var d = c["dynCall_" + a];
  for (var e = [], g = 1; g < a.length; ++g) {
    e.push("a" + g);
  }
  g = "return function dynCall_" + (a + "_" + b) + "(" + e.join(", ") + ") {\n";
  g += "    return dynCall(rawFunction" + (e.length ? ", " : "") + e.join(", ") + ");\n";
  d = (new Function("dynCall", "rawFunction", g + "};\n"))(d, b);
  "function" !== typeof d && R("unknown function pointer with signature " + a + ": " + b);
  return d;
}
var od = void 0;
function pd(a) {
  a = qd(a);
  var b = Q(a);
  U(a);
  return b;
}
function rd(a, b) {
  function d(f) {
    g[f] || Dc[f] || (Ec[f] ? Ec[f].forEach(d) : (e.push(f), g[f] = !0));
  }
  var e = [], g = {};
  b.forEach(d);
  throw new od(a + ": " + e.map(pd).join([", "]));
}
function sd(a) {
  var b = Function;
  if (!(b instanceof Function)) {
    throw new TypeError("new_ called with constructor type " + typeof b + " which is not a function");
  }
  var d = Gc(b.name || "unknownFunctionName", function() {
  });
  d.prototype = b.prototype;
  d = new d;
  a = b.apply(d, a);
  return a instanceof Object ? a : d;
}
function td(a) {
  for (; a.length;) {
    var b = a.pop();
    a.pop()(b);
  }
}
function ud(a, b, d, e, g) {
  var f = b.length;
  2 > f && R("argTypes array size mismatch! Must at least get return value and 'this' types!");
  var k = null !== b[1] && null !== d, l = !1;
  for (d = 1; d < b.length; ++d) {
    if (null !== b[d] && void 0 === b[d].D) {
      l = !0;
      break;
    }
  }
  var p = "void" !== b[0].name, n = "", q = "";
  for (d = 0; d < f - 2; ++d) {
    n += (0 !== d ? ", " : "") + "arg" + d, q += (0 !== d ? ", " : "") + "arg" + d + "Wired";
  }
  a = "return function " + Fc(a) + "(" + n + ") {\nif (arguments.length !== " + (f - 2) + ") {\nthrowBindingError('function " + a + " called with ' + arguments.length + ' arguments, expected " + (f - 2) + " args!');\n}\n";
  l && (a += "var destructors = [];\n");
  var v = l ? "destructors" : "null";
  n = "throwBindingError invoker fn runDestructors retType classParam".split(" ");
  e = [R, e, g, td, b[0], b[1]];
  k && (a += "var thisWired = classParam.toWireType(" + v + ", this);\n");
  for (d = 0; d < f - 2; ++d) {
    a += "var arg" + d + "Wired = argType" + d + ".toWireType(" + v + ", arg" + d + "); // " + b[d + 2].name + "\n", n.push("argType" + d), e.push(b[d + 2]);
  }
  k && (q = "thisWired" + (0 < q.length ? ", " : "") + q);
  a += (p ? "var rv = " : "") + "invoker(fn" + (0 < q.length ? ", " : "") + q + ");\n";
  if (l) {
    a += "runDestructors(destructors);\n";
  } else {
    for (d = k ? 1 : 2; d < b.length; ++d) {
      f = 1 === d ? "thisWired" : "arg" + (d - 2) + "Wired", null !== b[d].D && (a += f + "_dtor(" + f + "); // " + b[d].name + "\n", n.push(f + "_dtor"), e.push(b[d].D));
    }
  }
  p && (a += "var ret = retType.fromWireType(rv);\nreturn ret;\n");
  n.push(a + "}\n");
  return sd(n).apply(null, e);
}
function vd(a, b) {
  for (var d = [], e = 0; e < a; e++) {
    d.push(B[(b >> 2) + e]);
  }
  return d;
}
function wd(a, b, d) {
  a instanceof Object || R(d + ' with invalid "this": ' + a);
  a instanceof b.h.constructor || R(d + ' incompatible with "this" of type ' + a.constructor.name);
  a.b.i || R("cannot call emscripten binding method " + d + " on deleted object");
  return $c(a.b.i, a.b.l.h, b.h);
}
var xd = [], V = [{}, {value:void 0}, {value:null}, {value:!0}, {value:!1}];
function yd(a) {
  4 < a && 0 === --V[a].ja && (V[a] = void 0, xd.push(a));
}
function dd(a) {
  switch(a) {
    case void 0:
      return 1;
    case null:
      return 2;
    case !0:
      return 3;
    case !1:
      return 4;
    default:
      var b = xd.length ? xd.pop() : V.length;
      V[b] = {ja:1, value:a};
      return b;
  }
}
function bd(a) {
  if (null === a) {
    return "null";
  }
  var b = typeof a;
  return "object" === b || "array" === b || "function" === b ? a.toString() : "" + a;
}
function zd(a, b) {
  switch(b) {
    case 2:
      return function(d) {
        return this.fromWireType(Oa[d >> 2]);
      };
    case 3:
      return function(d) {
        return this.fromWireType(Pa[d >> 3]);
      };
    default:
      throw new TypeError("Unknown float type: " + a);
  }
}
function Ad(a, b, d) {
  switch(b) {
    case 0:
      return d ? function(e) {
        return D[e];
      } : function(e) {
        return A[e];
      };
    case 1:
      return d ? function(e) {
        return Ea[e >> 1];
      } : function(e) {
        return Da[e >> 1];
      };
    case 2:
      return d ? function(e) {
        return B[e >> 2];
      } : function(e) {
        return E[e >> 2];
      };
    default:
      throw new TypeError("Unknown integer type: " + a);
  }
}
function Bd() {
  void 0 === Bd.start && (Bd.start = Date.now());
  return 1E3 * (Date.now() - Bd.start) | 0;
}
function Cd(a, b) {
  assert(b === (b | 0));
  return (a >>> 0) + 4294967296 * b;
}
function Dd(a, b) {
  function d(F) {
    var T = e;
    "double" === F || "i64" === F ? T & 7 && (assert(4 === (T & 7)), T += 4) : assert(0 === (T & 3));
    e = T;
    "double" === F ? (F = Pa[e >> 3], e += 8) : "i64" == F ? (F = [B[e >> 2], B[e + 4 >> 2]], e += 8) : (assert(0 === (e & 3)), F = B[e >> 2], e += 4);
    return F;
  }
  assert(0 === (b & 3));
  for (var e = b, g = [], f, k;;) {
    var l = a;
    f = D[a >> 0];
    if (0 === f) {
      break;
    }
    k = D[a + 1 >> 0];
    if (37 == f) {
      var p = !1, n = b = !1, q = !1, v = !1;
      a: for (;;) {
        switch(k) {
          case 43:
            p = !0;
            break;
          case 45:
            b = !0;
            break;
          case 35:
            n = !0;
            break;
          case 48:
            if (q) {
              break a;
            } else {
              q = !0;
              break;
            }
          case 32:
            v = !0;
            break;
          default:
            break a;
        }
        a++;
        k = D[a + 1 >> 0];
      }
      var x = 0;
      if (42 == k) {
        x = d("i32"), a++, k = D[a + 1 >> 0];
      } else {
        for (; 48 <= k && 57 >= k;) {
          x = 10 * x + (k - 48), a++, k = D[a + 1 >> 0];
        }
      }
      var m = !1, t = -1;
      if (46 == k) {
        t = 0;
        m = !0;
        a++;
        k = D[a + 1 >> 0];
        if (42 == k) {
          t = d("i32"), a++;
        } else {
          for (;;) {
            k = D[a + 1 >> 0];
            if (48 > k || 57 < k) {
              break;
            }
            t = 10 * t + (k - 48);
            a++;
          }
        }
        k = D[a + 1 >> 0];
      }
      0 > t && (t = 6, m = !1);
      switch(String.fromCharCode(k)) {
        case "h":
          k = D[a + 2 >> 0];
          if (104 == k) {
            a++;
            var z = 1;
          } else {
            z = 2;
          }
          break;
        case "l":
          k = D[a + 2 >> 0];
          108 == k ? (a++, z = 8) : z = 4;
          break;
        case "L":
        case "q":
        case "j":
          z = 8;
          break;
        case "z":
        case "t":
        case "I":
          z = 4;
          break;
        default:
          z = null;
      }
      z && a++;
      k = D[a + 1 >> 0];
      switch(String.fromCharCode(k)) {
        case "d":
        case "i":
        case "u":
        case "o":
        case "x":
        case "X":
        case "p":
          l = 100 == k || 105 == k;
          z = z || 4;
          f = d("i" + 8 * z);
          8 == z && (f = 117 == k ? (f[0] >>> 0) + 4294967296 * (f[1] >>> 0) : Cd(f[0], f[1]));
          4 >= z && (f = (l ? fb : eb)(f & Math.pow(256, z) - 1, 8 * z));
          var C = Math.abs(f);
          l = "";
          if (100 == k || 105 == k) {
            var w = fb(f, 8 * z, 1).toString(10);
          } else {
            if (117 == k) {
              w = eb(f, 8 * z, 1).toString(10), f = Math.abs(f);
            } else {
              if (111 == k) {
                w = (n ? "0" : "") + C.toString(8);
              } else {
                if (120 == k || 88 == k) {
                  l = n && 0 != f ? "0x" : "";
                  if (0 > f) {
                    f = -f;
                    w = (C - 1).toString(16);
                    C = [];
                    for (n = 0; n < w.length; n++) {
                      C.push((15 - parseInt(w[n], 16)).toString(16));
                    }
                    for (w = C.join(""); w.length < 2 * z;) {
                      w = "f" + w;
                    }
                  } else {
                    w = C.toString(16);
                  }
                  88 == k && (l = l.toUpperCase(), w = w.toUpperCase());
                } else {
                  112 == k && (0 === C ? w = "(nil)" : (l = "0x", w = C.toString(16)));
                }
              }
            }
          }
          if (m) {
            for (; w.length < t;) {
              w = "0" + w;
            }
          }
          0 <= f && (p ? l = "+" + l : v && (l = " " + l));
          "-" == w.charAt(0) && (l = "-" + l, w = w.substr(1));
          for (; l.length + w.length < x;) {
            b ? w += " " : q ? w = "0" + w : l = " " + l;
          }
          w = l + w;
          w.split("").forEach(function(F) {
            g.push(F.charCodeAt(0));
          });
          break;
        case "f":
        case "F":
        case "e":
        case "E":
        case "g":
        case "G":
          f = d("double");
          if (isNaN(f)) {
            w = "nan", q = !1;
          } else {
            if (isFinite(f)) {
              m = !1;
              z = Math.min(t, 20);
              if (103 == k || 71 == k) {
                m = !0, t = t || 1, z = parseInt(f.toExponential(z).split("e")[1], 10), t > z && -4 <= z ? (k = (103 == k ? "f" : "F").charCodeAt(0), t -= z + 1) : (k = (103 == k ? "e" : "E").charCodeAt(0), t--), z = Math.min(t, 20);
              }
              if (101 == k || 69 == k) {
                w = f.toExponential(z), /[eE][-+]\d$/.test(w) && (w = w.slice(0, -1) + "0" + w.slice(-1));
              } else {
                if (102 == k || 70 == k) {
                  w = f.toFixed(z), 0 === f && (0 > f || 0 === f && -Infinity === 1 / f) && (w = "-" + w);
                }
              }
              l = w.split("e");
              if (m && !n) {
                for (; 1 < l[0].length && -1 != l[0].indexOf(".") && ("0" == l[0].slice(-1) || "." == l[0].slice(-1));) {
                  l[0] = l[0].slice(0, -1);
                }
              } else {
                for (n && -1 == w.indexOf(".") && (l[0] += "."); t > z++;) {
                  l[0] += "0";
                }
              }
              w = l[0] + (1 < l.length ? "e" + l[1] : "");
              69 == k && (w = w.toUpperCase());
              0 <= f && (p ? w = "+" + w : v && (w = " " + w));
            } else {
              w = (0 > f ? "-" : "") + "inf", q = !1;
            }
          }
          for (; w.length < x;) {
            b ? w += " " : !q || "-" != w[0] && "+" != w[0] ? w = (q ? "0" : " ") + w : w = w[0] + "0" + w.slice(1);
          }
          97 > k && (w = w.toUpperCase());
          w.split("").forEach(function(F) {
            g.push(F.charCodeAt(0));
          });
          break;
        case "s":
          q = (p = d("i8*")) ? Ed(p) : 6;
          m && (q = Math.min(q, t));
          if (!b) {
            for (; q < x--;) {
              g.push(32);
            }
          }
          if (p) {
            for (n = 0; n < q; n++) {
              g.push(A[p++ >> 0]);
            }
          } else {
            g = g.concat(Ib("(null)".substr(0, q), !0));
          }
          if (b) {
            for (; q < x--;) {
              g.push(32);
            }
          }
          break;
        case "c":
          for (b && g.push(d("i8")); 0 < --x;) {
            g.push(32);
          }
          b || g.push(d("i8"));
          break;
        case "n":
          b = d("i32*");
          B[b >> 2] = g.length;
          break;
        case "%":
          g.push(f);
          break;
        default:
          for (n = l; n < a + 2; n++) {
            g.push(D[n >> 0]);
          }
      }
      a += 2;
    } else {
      g.push(f), a += 1;
    }
  }
  return g;
}
function Fd(a) {
  if (!a || !a.callee || !a.callee.name) {
    return [null, "", ""];
  }
  var b = a.callee.name, d = "(", e = !0, g;
  for (g in a) {
    var f = a[g];
    e || (d += ", ");
    e = !1;
    d = "number" === typeof f || "string" === typeof f ? d + f : d + ("(" + typeof f + ")");
  }
  d += ")";
  a = (a = a.callee.caller) ? a.arguments : [];
  e && (d = "");
  return [a, b, d];
}
function Gd(a) {
  var b = pb();
  b = b.slice(b.indexOf("\n", Math.max(b.lastIndexOf("_emscripten_log"), b.lastIndexOf("_emscripten_get_callstack"))) + 1);
  a & 8 && "undefined" === typeof emscripten_source_map && (pa('Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with "--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js" linker flag to add source map loading to code.'), a = a ^ 8 | 16);
  var d = null;
  if (a & 128) {
    for (d = Fd(arguments); 0 <= d[1].indexOf("_emscripten_");) {
      d = Fd(d[0]);
    }
  }
  var e = b.split("\n");
  b = "";
  var g = /\s*(.*?)@(.*?):([0-9]+):([0-9]+)/, f = /\s*(.*?)@(.*):(.*)(:(.*))?/, k = /\s*at (.*?) \((.*):(.*):(.*)\)/, l;
  for (l in e) {
    var p = e[l], n;
    if ((n = k.exec(p)) && 5 == n.length) {
      p = n[1];
      var q = n[2];
      var v = n[3];
      n = n[4];
    } else {
      if ((n = g.exec(p)) || (n = f.exec(p)), n && 4 <= n.length) {
        p = n[1], q = n[2], v = n[3], n = n[4] | 0;
      } else {
        b += p + "\n";
        continue;
      }
    }
    var x = a & 32 ? yb(p) : p;
    x || (x = p);
    var m = !1;
    if (a & 8) {
      var t = emscripten_source_map.td({line:v, wa:n});
      if (m = t && t.source) {
        a & 64 && (t.source = t.source.substring(t.source.replace(/\\/g, "/").lastIndexOf("/") + 1)), b += "    at " + x + " (" + t.source + ":" + t.line + ":" + t.wa + ")\n";
      }
    }
    if (a & 16 || !m) {
      a & 64 && (q = q.substring(q.replace(/\\/g, "/").lastIndexOf("/") + 1)), b += (m ? "     = " + p : "    at " + x) + " (" + q + ":" + v + ":" + n + ")\n";
    }
    a & 128 && d[0] && (d[1] == p && 0 < d[2].length && (b = b.replace(/\s+$/, ""), b += " with values: " + d[1] + d[2] + "\n"), d = Fd(d[0]));
  }
  return b = b.replace(/\s+$/, "");
}
function W(a) {
  a = eval(y(a));
  if (null == a) {
    return 0;
  }
  var b = Aa(a);
  if (!W.I || W.I < b + 1) {
    W.I && U(W.buffer), W.I = b + 1, W.buffer = La(W.I);
  }
  za(a, W.buffer, W.I);
  return W.buffer;
}
var Hd = {};
function Id() {
  if (!Jd) {
    var a = {USER:"web_user", LOGNAME:"web_user", PATH:"/", PWD:"/", HOME:"/home/web_user", LANG:("object" === typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _:ca || "./this.program"}, b;
    for (b in Hd) {
      a[b] = Hd[b];
    }
    var d = [];
    for (b in a) {
      d.push(b + "=" + a[b]);
    }
    Jd = d;
  }
  return Jd;
}
var Jd;
za("GMT", 2013216, 4);
function Kd() {
  function a(f) {
    return (f = f.toTimeString().match(/\(([A-Za-z ]+)\)$/)) ? f[1] : "GMT";
  }
  if (!Ld) {
    Ld = !0;
    B[Md() >> 2] = 60 * (new Date).getTimezoneOffset();
    var b = (new Date).getFullYear(), d = new Date(b, 0, 1);
    b = new Date(b, 6, 1);
    B[Nd() >> 2] = Number(d.getTimezoneOffset() != b.getTimezoneOffset());
    var e = a(d), g = a(b);
    e = Ka(e);
    g = Ka(g);
    b.getTimezoneOffset() < d.getTimezoneOffset() ? (B[Od() >> 2] = e, B[Od() + 4 >> 2] = g) : (B[Od() >> 2] = g, B[Od() + 4 >> 2] = e);
  }
}
var Ld;
function Pd(a) {
  return 0 === a % 4 && (0 !== a % 100 || 0 === a % 400);
}
function Qd(a, b) {
  for (var d = 0, e = 0; e <= b; d += a[e++]) {
  }
  return d;
}
var Rd = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Sd = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Td(a, b) {
  for (a = new Date(a.getTime()); 0 < b;) {
    var d = a.getMonth(), e = (Pd(a.getFullYear()) ? Rd : Sd)[d];
    if (b > e - a.getDate()) {
      b -= e - a.getDate() + 1, a.setDate(1), 11 > d ? a.setMonth(d + 1) : (a.setMonth(0), a.setFullYear(a.getFullYear() + 1));
    } else {
      a.setDate(a.getDate() + b);
      break;
    }
  }
  return a;
}
function Ud(a, b, d, e) {
  function g(m, t, z) {
    for (m = "number" === typeof m ? m.toString() : m || ""; m.length < t;) {
      m = z[0] + m;
    }
    return m;
  }
  function f(m, t) {
    return g(m, t, "0");
  }
  function k(m, t) {
    function z(w) {
      return 0 > w ? -1 : 0 < w ? 1 : 0;
    }
    var C;
    0 === (C = z(m.getFullYear() - t.getFullYear())) && 0 === (C = z(m.getMonth() - t.getMonth())) && (C = z(m.getDate() - t.getDate()));
    return C;
  }
  function l(m) {
    switch(m.getDay()) {
      case 0:
        return new Date(m.getFullYear() - 1, 11, 29);
      case 1:
        return m;
      case 2:
        return new Date(m.getFullYear(), 0, 3);
      case 3:
        return new Date(m.getFullYear(), 0, 2);
      case 4:
        return new Date(m.getFullYear(), 0, 1);
      case 5:
        return new Date(m.getFullYear() - 1, 11, 31);
      case 6:
        return new Date(m.getFullYear() - 1, 11, 30);
    }
  }
  function p(m) {
    m = Td(new Date(m.s + 1900, 0, 1), m.fa);
    var t = new Date(m.getFullYear() + 1, 0, 4), z = l(new Date(m.getFullYear(), 0, 4));
    t = l(t);
    return 0 >= k(z, m) ? 0 >= k(t, m) ? m.getFullYear() + 1 : m.getFullYear() : m.getFullYear() - 1;
  }
  var n = B[e + 40 >> 2];
  e = {Sa:B[e >> 2], Ra:B[e + 4 >> 2], da:B[e + 8 >> 2], W:B[e + 12 >> 2], T:B[e + 16 >> 2], s:B[e + 20 >> 2], ea:B[e + 24 >> 2], fa:B[e + 28 >> 2], vd:B[e + 32 >> 2], Qa:B[e + 36 >> 2], Ta:n ? y(n) : ""};
  d = y(d);
  n = {"%c":"%a %b %d %H:%M:%S %Y", "%D":"%m/%d/%y", "%F":"%Y-%m-%d", "%h":"%b", "%r":"%I:%M:%S %p", "%R":"%H:%M", "%T":"%H:%M:%S", "%x":"%m/%d/%y", "%X":"%H:%M:%S", "%Ec":"%c", "%EC":"%C", "%Ex":"%m/%d/%y", "%EX":"%H:%M:%S", "%Ey":"%y", "%EY":"%Y", "%Od":"%d", "%Oe":"%e", "%OH":"%H", "%OI":"%I", "%Om":"%m", "%OM":"%M", "%OS":"%S", "%Ou":"%u", "%OU":"%U", "%OV":"%V", "%Ow":"%w", "%OW":"%W", "%Oy":"%y"};
  for (var q in n) {
    d = d.replace(new RegExp(q, "g"), n[q]);
  }
  var v = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), x = "January February March April May June July August September October November December".split(" ");
  n = {"%a":function(m) {
    return v[m.ea].substring(0, 3);
  }, "%A":function(m) {
    return v[m.ea];
  }, "%b":function(m) {
    return x[m.T].substring(0, 3);
  }, "%B":function(m) {
    return x[m.T];
  }, "%C":function(m) {
    return f((m.s + 1900) / 100 | 0, 2);
  }, "%d":function(m) {
    return f(m.W, 2);
  }, "%e":function(m) {
    return g(m.W, 2, " ");
  }, "%g":function(m) {
    return p(m).toString().substring(2);
  }, "%G":function(m) {
    return p(m);
  }, "%H":function(m) {
    return f(m.da, 2);
  }, "%I":function(m) {
    m = m.da;
    0 == m ? m = 12 : 12 < m && (m -= 12);
    return f(m, 2);
  }, "%j":function(m) {
    return f(m.W + Qd(Pd(m.s + 1900) ? Rd : Sd, m.T - 1), 3);
  }, "%m":function(m) {
    return f(m.T + 1, 2);
  }, "%M":function(m) {
    return f(m.Ra, 2);
  }, "%n":function() {
    return "\n";
  }, "%p":function(m) {
    return 0 <= m.da && 12 > m.da ? "AM" : "PM";
  }, "%S":function(m) {
    return f(m.Sa, 2);
  }, "%t":function() {
    return "\t";
  }, "%u":function(m) {
    return m.ea || 7;
  }, "%U":function(m) {
    var t = new Date(m.s + 1900, 0, 1), z = 0 === t.getDay() ? t : Td(t, 7 - t.getDay());
    m = new Date(m.s + 1900, m.T, m.W);
    return 0 > k(z, m) ? f(Math.ceil((31 - z.getDate() + (Qd(Pd(m.getFullYear()) ? Rd : Sd, m.getMonth() - 1) - 31) + m.getDate()) / 7), 2) : 0 === k(z, t) ? "01" : "00";
  }, "%V":function(m) {
    var t = new Date(m.s + 1901, 0, 4), z = l(new Date(m.s + 1900, 0, 4));
    t = l(t);
    var C = Td(new Date(m.s + 1900, 0, 1), m.fa);
    return 0 > k(C, z) ? "53" : 0 >= k(t, C) ? "01" : f(Math.ceil((z.getFullYear() < m.s + 1900 ? m.fa + 32 - z.getDate() : m.fa + 1 - z.getDate()) / 7), 2);
  }, "%w":function(m) {
    return m.ea;
  }, "%W":function(m) {
    var t = new Date(m.s, 0, 1), z = 1 === t.getDay() ? t : Td(t, 0 === t.getDay() ? 1 : 7 - t.getDay() + 1);
    m = new Date(m.s + 1900, m.T, m.W);
    return 0 > k(z, m) ? f(Math.ceil((31 - z.getDate() + (Qd(Pd(m.getFullYear()) ? Rd : Sd, m.getMonth() - 1) - 31) + m.getDate()) / 7), 2) : 0 === k(z, t) ? "01" : "00";
  }, "%y":function(m) {
    return (m.s + 1900).toString().substring(2);
  }, "%Y":function(m) {
    return m.s + 1900;
  }, "%z":function(m) {
    m = m.Qa;
    var t = 0 <= m;
    m = Math.abs(m) / 60;
    return (t ? "+" : "-") + String("0000" + (m / 60 * 100 + m % 60)).slice(-4);
  }, "%Z":function(m) {
    return m.Ta;
  }, "%%":function() {
    return "%";
  }};
  for (q in n) {
    0 <= d.indexOf(q) && (d = d.replace(new RegExp(q, "g"), n[q](e)));
  }
  q = Ib(d, !1);
  if (q.length > b) {
    return 0;
  }
  Ma(q, a);
  return q.length - 1;
}
function bc(a, b, d, e) {
  a || (a = this);
  this.parent = a;
  this.F = a.F;
  this.P = null;
  this.id = Ub++;
  this.name = b;
  this.mode = d;
  this.f = {};
  this.g = {};
  this.rdev = e;
}
Object.defineProperties(bc.prototype, {read:{get:function() {
  return 365 === (this.mode & 365);
}, set:function(a) {
  a ? this.mode |= 365 : this.mode &= -366;
}}, write:{get:function() {
  return 146 === (this.mode & 146);
}, set:function(a) {
  a ? this.mode |= 146 : this.mode &= -147;
}}});
rc();
Vb = Array(4096);
kc(K, "/");
O("/tmp");
O("/home");
O("/home/web_user");
(function() {
  O("/dev");
  Gb(259, {read:function() {
    return 0;
  }, write:function(e, g, f, k) {
    return k;
  }});
  mc("/dev/null", 259);
  Fb(1280, Jb);
  Fb(1536, Kb);
  mc("/dev/tty", 1280);
  mc("/dev/tty1", 1536);
  if ("object" === typeof crypto && "function" === typeof crypto.getRandomValues) {
    var a = new Uint8Array(1);
    var b = function() {
      crypto.getRandomValues(a);
      return a[0];
    };
  } else {
    if (ha) {
      try {
        var d = require("crypto");
        b = function() {
          return d.randomBytes(1)[0];
        };
      } catch (e) {
      }
    }
  }
  b || (b = function() {
    r("no cryptographic support found for random_device. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: function(array) { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };");
  });
  uc("random", b);
  uc("urandom", b);
  O("/dev/shm");
  O("/dev/shm/tmp");
})();
O("/proc");
O("/proc/self");
O("/proc/self/fd");
kc({F:function() {
  var a = Mb("/proc/self", "fd", 16895, 73);
  a.f = {lookup:function(b, d) {
    var e = Tb[+d];
    if (!e) {
      throw new J(8);
    }
    b = {parent:null, F:{sa:"fake"}, f:{readlink:function() {
      return e.path;
    }}};
    return b.parent = b;
  }};
  return a;
}}, "/proc/self/fd");
for (var Vd = Array(256), Wd = 0; 256 > Wd; ++Wd) {
  Vd[Wd] = String.fromCharCode(Wd);
}
Bc = Vd;
Ic = c.BindingError = Hc("BindingError");
Jc = c.InternalError = Hc("InternalError");
Vc.prototype.isAliasOf = function(a) {
  if (!(this instanceof Vc && a instanceof Vc)) {
    return !1;
  }
  var b = this.b.l.h, d = this.b.i, e = a.b.l.h;
  for (a = a.b.i; b.A;) {
    d = b.X(d), b = b.A;
  }
  for (; e.A;) {
    a = e.X(a), e = e.A;
  }
  return b === e && d === a;
};
Vc.prototype.clone = function() {
  this.b.i || Nc(this);
  if (this.b.V) {
    return this.b.count.value += 1, this;
  }
  var a = Rc(Object.create(Object.getPrototypeOf(this), {b:{value:Mc(this.b)}}));
  a.b.count.value += 1;
  a.b.O = !1;
  return a;
};
Vc.prototype["delete"] = function() {
  this.b.i || Nc(this);
  this.b.O && !this.b.V && R("Object already scheduled for deletion");
  Pc(this);
  Qc(this.b);
  this.b.V || (this.b.u = void 0, this.b.i = void 0);
};
Vc.prototype.isDeleted = function() {
  return !this.b.i;
};
Vc.prototype.deleteLater = function() {
  this.b.i || Nc(this);
  this.b.O && !this.b.V && R("Object already scheduled for deletion");
  Tc.push(this);
  1 === Tc.length && Sc && Sc(Uc);
  this.b.O = !0;
  return this;
};
ld.prototype.Ba = function(a) {
  this.ta && (a = this.ta(a));
  return a;
};
ld.prototype.ma = function(a) {
  this.M && this.M(a);
};
ld.prototype.argPackAdvance = 8;
ld.prototype.readValueFromPointer = fd;
ld.prototype.deleteObject = function(a) {
  if (null !== a) {
    a["delete"]();
  }
};
ld.prototype.fromWireType = function(a) {
  function b() {
    return this.$ ? kd(this.h.H, {l:this.Ja, i:d, v:this, u:a}) : kd(this.h.H, {l:this, i:a});
  }
  var d = this.Ba(a);
  if (!d) {
    return this.ma(a), null;
  }
  var e = jd(this.h, d);
  if (void 0 !== e) {
    if (0 === e.b.count.value) {
      return e.b.i = d, e.b.u = a, e.clone();
    }
    e = e.clone();
    this.ma(a);
    return e;
  }
  e = this.h.Aa(d);
  e = Wc[e];
  if (!e) {
    return b.call(this);
  }
  e = this.Z ? e.ya : e.pointerType;
  var g = gd(d, this.h, e.h);
  return null === g ? b.call(this) : this.$ ? kd(e.h.H, {l:e, i:g, v:this, u:a}) : kd(e.h.H, {l:e, i:g});
};
c.getInheritedInstanceCount = function() {
  return Object.keys(hd).length;
};
c.getLiveInheritedInstances = function() {
  var a = [], b;
  for (b in hd) {
    hd.hasOwnProperty(b) && a.push(hd[b]);
  }
  return a;
};
c.flushPendingDeletes = Uc;
c.setDelayFunction = function(a) {
  Sc = a;
  Tc.length && Sc && Sc(Uc);
};
od = c.UnboundTypeError = Hc("UnboundTypeError");
c.count_emval_handles = function() {
  for (var a = 0, b = 5; b < V.length; ++b) {
    void 0 !== V[b] && ++a;
  }
  return a;
};
c.get_first_emval = function() {
  for (var a = 5; a < V.length; ++a) {
    if (void 0 !== V[a]) {
      return V[a];
    }
  }
  return null;
};
function Ib(a, b) {
  var d = Array(Aa(a) + 1);
  a = ya(a, d, 0, d.length);
  b && (d.length = a);
  return d;
}
var ne = {__assert_fail:function(a, b, d, e) {
  r("Assertion failed: " + y(a) + ", at: " + [b ? y(b) : "unknown filename", d, e ? y(e) : "unknown function"]);
}, __cxa_atexit:function(a, b) {
  pa("atexit() called, but EXIT_RUNTIME is not set, so atexits() will not be called. set EXIT_RUNTIME to 1 (see the FAQ)");
  $a.unshift({pa:a, Y:b});
}, __handle_stack_overflow:function() {
  r("stack overflow");
}, __map_file:function() {
  B[Xd() >> 2] = 63;
  return -1;
}, __sys_fcntl64:function(a, b, d) {
  xc = d;
  try {
    var e = zc(a);
    switch(b) {
      case 0:
        var g = yc();
        return 0 > g ? -28 : oc(e.path, e.flags, 0, g).fd;
      case 1:
      case 2:
        return 0;
      case 3:
        return e.flags;
      case 4:
        return g = yc(), e.flags |= g, 0;
      case 12:
        return g = yc(), Ea[g + 0 >> 1] = 2, 0;
      case 13:
      case 14:
        return 0;
      case 16:
      case 8:
        return -28;
      case 9:
        return B[Xd() >> 2] = 28, -1;
      default:
        return -28;
    }
  } catch (f) {
    return "undefined" !== typeof P && f instanceof J || r(f), -f.m;
  }
}, __sys_getdents64:function(a, b, d) {
  try {
    var e = zc(a);
    if (!e.K) {
      var g = N(e.path, {U:!0}).node;
      if (!g.f.readdir) {
        throw new J(54);
      }
      var f = g.f.readdir(g);
      e.K = f;
    }
    a = 0;
    for (var k = qc(e, 0, 1), l = Math.floor(k / 280); l < e.K.length && a + 280 <= d;) {
      var p = e.K[l];
      if ("." === p[0]) {
        var n = 1;
        var q = 4;
      } else {
        var v = Ob(e.node, p);
        n = v.id;
        q = 8192 === (v.mode & 61440) ? 2 : L(v.mode) ? 4 : 40960 === (v.mode & 61440) ? 10 : 8;
      }
      I = [n >>> 0, (H = n, 1.0 <= +gb(H) ? 0.0 < H ? (jb(+ib(H / 4294967296.0), 4294967295.0) | 0) >>> 0 : ~~+hb((H - +(~~H >>> 0)) / 4294967296.0) >>> 0 : 0)];
      B[b + a >> 2] = I[0];
      B[b + a + 4 >> 2] = I[1];
      I = [280 * (l + 1) >>> 0, (H = 280 * (l + 1), 1.0 <= +gb(H) ? 0.0 < H ? (jb(+ib(H / 4294967296.0), 4294967295.0) | 0) >>> 0 : ~~+hb((H - +(~~H >>> 0)) / 4294967296.0) >>> 0 : 0)];
      B[b + a + 8 >> 2] = I[0];
      B[b + a + 12 >> 2] = I[1];
      Ea[b + a + 16 >> 1] = 280;
      D[b + a + 18 >> 0] = q;
      za(p, b + a + 19, 256);
      a += 280;
      l += 1;
    }
    qc(e, 280 * l, 0);
    return a;
  } catch (x) {
    return "undefined" !== typeof P && x instanceof J || r(x), -x.m;
  }
}, __sys_ioctl:function(a, b, d) {
  xc = d;
  try {
    var e = zc(a);
    switch(b) {
      case 21509:
      case 21505:
        return e.tty ? 0 : -59;
      case 21510:
      case 21511:
      case 21512:
      case 21506:
      case 21507:
      case 21508:
        return e.tty ? 0 : -59;
      case 21519:
        if (!e.tty) {
          return -59;
        }
        var g = yc();
        return B[g >> 2] = 0;
      case 21520:
        return e.tty ? -28 : -59;
      case 21531:
        a = g = yc();
        if (!e.g.Da) {
          throw new J(59);
        }
        return e.g.Da(e, b, a);
      case 21523:
        return e.tty ? 0 : -59;
      case 21524:
        return e.tty ? 0 : -59;
      default:
        r("bad ioctl syscall " + b);
    }
  } catch (f) {
    return "undefined" !== typeof P && f instanceof J || r(f), -f.m;
  }
}, __sys_munmap:function(a, b) {
  try {
    if (-1 === (a | 0) || 0 === b) {
      var d = -28;
    } else {
      var e = wc[a];
      if (e && b === e.qd) {
        var g = Tb[e.fd];
        if (e.ud & 2) {
          var f = e.flags, k = e.offset, l = A.slice(a, a + b);
          g && g.g.ba && g.g.ba(g, l, k, b, f);
        }
        wc[a] = null;
        e.ua && U(e.rd);
      }
      d = 0;
    }
    return d;
  } catch (p) {
    return "undefined" !== typeof P && p instanceof J || r(p), -p.m;
  }
}, __sys_open:function(a, b, d) {
  xc = d;
  try {
    var e = y(a), g = yc();
    return oc(e, b, g).fd;
  } catch (f) {
    return "undefined" !== typeof P && f instanceof J || r(f), -f.m;
  }
}, __sys_readlink:function(a, b, d) {
  try {
    a = y(a);
    if (0 >= d) {
      var e = -28;
    } else {
      var g = Xb(a), f = Math.min(d, Aa(g)), k = D[b + f];
      za(g, b, d + 1);
      D[b + f] = k;
      e = f;
    }
    return e;
  } catch (l) {
    return "undefined" !== typeof P && l instanceof J || r(l), -l.m;
  }
}, __sys_rmdir:function(a) {
  try {
    a = y(a);
    var b = N(a, {parent:!0}).node, d = Cb(a), e = Ob(b, d), g = fc(b, d, !0);
    if (g) {
      throw new J(g);
    }
    if (!b.f.rmdir) {
      throw new J(63);
    }
    if (e.P) {
      throw new J(10);
    }
    try {
      M.willDeletePath && M.willDeletePath(a);
    } catch (f) {
      u("FS.trackingDelegate['willDeletePath']('" + a + "') threw an exception: " + f.message);
    }
    b.f.rmdir(b, d);
    $b(e);
    try {
      if (M.onDeletePath) {
        M.onDeletePath(a);
      }
    } catch (f) {
      u("FS.trackingDelegate['onDeletePath']('" + a + "') threw an exception: " + f.message);
    }
    return 0;
  } catch (f) {
    return "undefined" !== typeof P && f instanceof J || r(f), -f.m;
  }
}, __sys_unlink:function(a) {
  try {
    a = y(a);
    var b = N(a, {parent:!0}).node, d = Cb(a), e = Ob(b, d), g = fc(b, d, !1);
    if (g) {
      throw new J(g);
    }
    if (!b.f.unlink) {
      throw new J(63);
    }
    if (e.P) {
      throw new J(10);
    }
    try {
      M.willDeletePath && M.willDeletePath(a);
    } catch (f) {
      u("FS.trackingDelegate['willDeletePath']('" + a + "') threw an exception: " + f.message);
    }
    b.f.unlink(b, d);
    $b(e);
    try {
      if (M.onDeletePath) {
        M.onDeletePath(a);
      }
    } catch (f) {
      u("FS.trackingDelegate['onDeletePath']('" + a + "') threw an exception: " + f.message);
    }
    return 0;
  } catch (f) {
    return "undefined" !== typeof P && f instanceof J || r(f), -f.m;
  }
}, _embind_register_bool:function(a, b, d, e, g) {
  var f = Ac(d);
  b = Q(b);
  Lc(a, {name:b, fromWireType:function(k) {
    return !!k;
  }, toWireType:function(k, l) {
    return l ? e : g;
  }, argPackAdvance:8, readValueFromPointer:function(k) {
    if (1 === d) {
      var l = D;
    } else {
      if (2 === d) {
        l = Ea;
      } else {
        if (4 === d) {
          l = B;
        } else {
          throw new TypeError("Unknown boolean type size: " + b);
        }
      }
    }
    return this.fromWireType(l[k >> f]);
  }, D:null});
}, _embind_register_class:function(a, b, d, e, g, f, k, l, p, n, q, v, x) {
  q = Q(q);
  f = nd(g, f);
  l && (l = nd(k, l));
  n && (n = nd(p, n));
  x = nd(v, x);
  var m = Fc(q);
  Yc(m, function() {
    rd("Cannot construct " + q + " due to unbound types", [e]);
  });
  S([a, b, d], e ? [e] : [], function(t) {
    t = t[0];
    if (e) {
      var z = t.h;
      var C = z.H;
    } else {
      C = Vc.prototype;
    }
    t = Gc(m, function() {
      if (Object.getPrototypeOf(this) !== w) {
        throw new Ic("Use 'new' to construct " + q);
      }
      if (void 0 === F.J) {
        throw new Ic(q + " has no accessible constructor");
      }
      var id = F.J[arguments.length];
      if (void 0 === id) {
        throw new Ic("Tried to invoke ctor of " + q + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(F.J).toString() + ") parameters instead!");
      }
      return id.apply(this, arguments);
    });
    var w = Object.create(C, {constructor:{value:t}});
    t.prototype = w;
    var F = new Zc(q, t, w, x, z, f, l, n);
    z = new ld(q, F, !0, !1);
    C = new ld(q + "*", F, !1, !1);
    var T = new ld(q + " const*", F, !1, !0);
    Wc[a] = {pointerType:C, ya:T};
    md(m, t);
    return [z, C, T];
  });
}, _embind_register_class_class_function:function(a, b, d, e, g, f, k) {
  var l = vd(d, e);
  b = Q(b);
  f = nd(g, f);
  S([], [a], function(p) {
    function n() {
      rd("Cannot call " + q + " due to unbound types", l);
    }
    p = p[0];
    var q = p.name + "." + b, v = p.h.constructor;
    void 0 === v[b] ? (n.N = d - 1, v[b] = n) : (Xc(v, b, q), v[b].o[d - 1] = n);
    S([], l, function(x) {
      x = [x[0], null].concat(x.slice(1));
      x = ud(q, x, null, f, k);
      void 0 === v[b].o ? (x.N = d - 1, v[b] = x) : v[b].o[d - 1] = x;
      return [];
    });
    return [];
  });
}, _embind_register_class_constructor:function(a, b, d, e, g, f) {
  assert(0 < b);
  var k = vd(b, d);
  g = nd(e, g);
  var l = [f], p = [];
  S([], [a], function(n) {
    n = n[0];
    var q = "constructor " + n.name;
    void 0 === n.h.J && (n.h.J = []);
    if (void 0 !== n.h.J[b - 1]) {
      throw new Ic("Cannot register multiple constructors with identical number of parameters (" + (b - 1) + ") for class '" + n.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
    }
    n.h.J[b - 1] = function() {
      rd("Cannot construct " + n.name + " due to unbound types", k);
    };
    S([], k, function(v) {
      n.h.J[b - 1] = function() {
        arguments.length !== b - 1 && R(q + " called with " + arguments.length + " arguments, expected " + (b - 1));
        p.length = 0;
        l.length = b;
        for (var x = 1; x < b; ++x) {
          l[x] = v[x].toWireType(p, arguments[x - 1]);
        }
        x = g.apply(null, l);
        td(p);
        return v[0].fromWireType(x);
      };
      return [];
    });
    return [];
  });
}, _embind_register_class_function:function(a, b, d, e, g, f, k, l) {
  var p = vd(d, e);
  b = Q(b);
  f = nd(g, f);
  S([], [a], function(n) {
    function q() {
      rd("Cannot call " + v + " due to unbound types", p);
    }
    n = n[0];
    var v = n.name + "." + b;
    l && n.h.Ka.push(b);
    var x = n.h.H, m = x[b];
    void 0 === m || void 0 === m.o && m.className !== n.name && m.N === d - 2 ? (q.N = d - 2, q.className = n.name, x[b] = q) : (Xc(x, b, v), x[b].o[d - 2] = q);
    S([], p, function(t) {
      t = ud(v, t, n, f, k);
      void 0 === x[b].o ? (t.N = d - 2, x[b] = t) : x[b].o[d - 2] = t;
      return [];
    });
    return [];
  });
}, _embind_register_class_property:function(a, b, d, e, g, f, k, l, p, n) {
  b = Q(b);
  g = nd(e, g);
  S([], [a], function(q) {
    q = q[0];
    var v = q.name + "." + b, x = {get:function() {
      rd("Cannot access " + v + " due to unbound types", [d, k]);
    }, enumerable:!0, configurable:!0};
    p ? x.set = function() {
      rd("Cannot access " + v + " due to unbound types", [d, k]);
    } : x.set = function() {
      R(v + " is a read-only property");
    };
    Object.defineProperty(q.h.H, b, x);
    S([], p ? [d, k] : [d], function(m) {
      var t = m[0], z = {get:function() {
        var w = wd(this, q, v + " getter");
        return t.fromWireType(g(f, w));
      }, enumerable:!0};
      if (p) {
        p = nd(l, p);
        var C = m[1];
        z.set = function(w) {
          var F = wd(this, q, v + " setter"), T = [];
          p(n, F, C.toWireType(T, w));
          td(T);
        };
      }
      Object.defineProperty(q.h.H, b, z);
      return [];
    });
    return [];
  });
}, _embind_register_emval:function(a, b) {
  b = Q(b);
  Lc(a, {name:b, fromWireType:function(d) {
    var e = V[d].value;
    yd(d);
    return e;
  }, toWireType:function(d, e) {
    return dd(e);
  }, argPackAdvance:8, readValueFromPointer:fd, D:null});
}, _embind_register_float:function(a, b, d) {
  d = Ac(d);
  b = Q(b);
  Lc(a, {name:b, fromWireType:function(e) {
    return e;
  }, toWireType:function(e, g) {
    if ("number" !== typeof g && "boolean" !== typeof g) {
      throw new TypeError('Cannot convert "' + bd(g) + '" to ' + this.name);
    }
    return g;
  }, argPackAdvance:8, readValueFromPointer:zd(b, d), D:null});
}, _embind_register_integer:function(a, b, d, e, g) {
  function f(n) {
    return n;
  }
  b = Q(b);
  -1 === g && (g = 4294967295);
  var k = Ac(d);
  if (0 === e) {
    var l = 32 - 8 * d;
    f = function(n) {
      return n << l >>> l;
    };
  }
  var p = -1 != b.indexOf("unsigned");
  Lc(a, {name:b, fromWireType:f, toWireType:function(n, q) {
    if ("number" !== typeof q && "boolean" !== typeof q) {
      throw new TypeError('Cannot convert "' + bd(q) + '" to ' + this.name);
    }
    if (q < e || q > g) {
      throw new TypeError('Passing a number "' + bd(q) + '" from JS side to C/C++ side to an argument of type "' + b + '", which is outside the valid range [' + e + ", " + g + "]!");
    }
    return p ? q >>> 0 : q | 0;
  }, argPackAdvance:8, readValueFromPointer:Ad(b, k, 0 !== e), D:null});
}, _embind_register_memory_view:function(a, b, d) {
  function e(f) {
    f >>= 2;
    var k = E;
    return new g(Na, k[f + 1], k[f]);
  }
  var g = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][b];
  d = Q(d);
  Lc(a, {name:d, fromWireType:e, argPackAdvance:8, readValueFromPointer:e}, {Ca:!0});
}, _embind_register_std_string:function(a, b) {
  b = Q(b);
  var d = "std::string" === b;
  Lc(a, {name:b, fromWireType:function(e) {
    var g = E[e >> 2];
    if (d) {
      for (var f = e + 4, k = 0; k <= g; ++k) {
        var l = e + 4 + k;
        if (0 == A[l] || k == g) {
          f = y(f, l - f);
          if (void 0 === p) {
            var p = f;
          } else {
            p += String.fromCharCode(0), p += f;
          }
          f = l + 1;
        }
      }
    } else {
      p = Array(g);
      for (k = 0; k < g; ++k) {
        p[k] = String.fromCharCode(A[e + 4 + k]);
      }
      p = p.join("");
    }
    U(e);
    return p;
  }, toWireType:function(e, g) {
    g instanceof ArrayBuffer && (g = new Uint8Array(g));
    var f = "string" === typeof g;
    f || g instanceof Uint8Array || g instanceof Uint8ClampedArray || g instanceof Int8Array || R("Cannot pass non-string to std::string");
    var k = (d && f ? function() {
      return Aa(g);
    } : function() {
      return g.length;
    })(), l = La(4 + k + 1);
    E[l >> 2] = k;
    if (d && f) {
      za(g, l + 4, k + 1);
    } else {
      if (f) {
        for (f = 0; f < k; ++f) {
          var p = g.charCodeAt(f);
          255 < p && (U(l), R("String has UTF-16 code units that do not fit in 8 bits"));
          A[l + 4 + f] = p;
        }
      } else {
        for (f = 0; f < k; ++f) {
          A[l + 4 + f] = g[f];
        }
      }
    }
    null !== e && e.push(U, l);
    return l;
  }, argPackAdvance:8, readValueFromPointer:fd, D:function(e) {
    U(e);
  }});
}, _embind_register_std_wstring:function(a, b, d) {
  d = Q(d);
  if (2 === b) {
    var e = Ca;
    var g = Fa;
    var f = Ga;
    var k = function() {
      return Da;
    };
    var l = 1;
  } else {
    4 === b && (e = Ha, g = Ia, f = Ja, k = function() {
      return E;
    }, l = 2);
  }
  Lc(a, {name:d, fromWireType:function(p) {
    for (var n = E[p >> 2], q = k(), v, x = p + 4, m = 0; m <= n; ++m) {
      var t = p + 4 + m * b;
      if (0 == q[t >> l] || m == n) {
        x = e(x, t - x), void 0 === v ? v = x : (v += String.fromCharCode(0), v += x), x = t + b;
      }
    }
    U(p);
    return v;
  }, toWireType:function(p, n) {
    "string" !== typeof n && R("Cannot pass non-string to C++ string type " + d);
    var q = f(n), v = La(4 + q + b);
    E[v >> 2] = q >> l;
    g(n, v + 4, q + b);
    null !== p && p.push(U, v);
    return v;
  }, argPackAdvance:8, readValueFromPointer:fd, D:function(p) {
    U(p);
  }});
}, _embind_register_void:function(a, b) {
  b = Q(b);
  Lc(a, {pd:!0, name:b, argPackAdvance:0, fromWireType:function() {
  }, toWireType:function() {
  }});
}, _emval_decref:yd, _emval_incref:function(a) {
  4 < a && (V[a].ja += 1);
}, _emval_take_value:function(a, b) {
  var d = Dc[a];
  void 0 === d && R("_emval_take_value has unknown type " + pd(a));
  a = d.readValueFromPointer(b);
  return dd(a);
}, abort:function() {
  r();
}, clock:Bd, emscripten_get_sbrk_ptr:function() {
  return 2013152;
}, emscripten_log:function(a, b, d) {
  var e = "";
  b = Dd(b, d);
  for (d = 0; d < b.length; ++d) {
    e += String.fromCharCode(b[d]);
  }
  a & 24 && (e = e.replace(/\s+$/, ""), e += (0 < e.length ? "\n" : "") + Gd(a));
  a & 1 ? a & 4 ? console.error(e) : a & 2 ? console.warn(e) : a & 512 ? console.info(e) : a & 256 ? console.debug(e) : console.log(e) : a & 6 ? u(e) : oa(e);
}, emscripten_longjmp:function(a, b) {
  X(a, b || 1);
  throw "longjmp";
}, emscripten_memcpy_big:function(a, b, d) {
  A.copyWithin(a, b, b + d);
}, emscripten_resize_heap:function(a) {
  a >>>= 0;
  var b = A.length;
  assert(a > b);
  if (2147483648 < a) {
    return u("Cannot enlarge memory, asked to go up to " + a + " bytes, but the limit is 2147483648 bytes!"), !1;
  }
  for (var d = 1; 4 >= d; d *= 2) {
    var e = b * (1 + 0.2 / d);
    e = Math.min(e, a + 100663296);
    e = Math.max(16777216, a, e);
    0 < e % 65536 && (e += 65536 - e % 65536);
    e = Math.min(2147483648, e);
    a: {
      var g = e;
      try {
        ta.grow(g - Na.byteLength + 65535 >>> 16);
        Qa(ta.buffer);
        var f = 1;
        break a;
      } catch (k) {
        console.error("emscripten_realloc_buffer: Attempted to grow heap from " + Na.byteLength + " bytes to " + g + " bytes, but got error: " + k);
      }
      f = void 0;
    }
    if (f) {
      return !0;
    }
  }
  u("Failed to grow the heap from " + b + " bytes to " + e + " bytes, not enough memory!");
  return !1;
}, emscripten_run_script:function(a) {
  eval(y(a));
}, emscripten_run_script_int:function(a) {
  return eval(y(a)) | 0;
}, emscripten_run_script_string:W, environ_get:function(a, b) {
  var d = 0;
  Id().forEach(function(e, g) {
    var f = b + d;
    g = B[a + 4 * g >> 2] = f;
    for (f = 0; f < e.length; ++f) {
      assert(e.charCodeAt(f) === e.charCodeAt(f) & 255), D[g++ >> 0] = e.charCodeAt(f);
    }
    D[g >> 0] = 0;
    d += e.length + 1;
  });
  return 0;
}, environ_sizes_get:function(a, b) {
  var d = Id();
  B[a >> 2] = d.length;
  var e = 0;
  d.forEach(function(g) {
    e += g.length + 1;
  });
  B[b >> 2] = e;
  return 0;
}, exit:function(a) {
  Yd();
  if (noExitRuntime) {
    u("program exited (with status: " + a + "), but EXIT_RUNTIME is not set, so halting execution but not exiting the runtime or preventing further async execution (build with EXIT_RUNTIME=1, if you want a true shutdown)");
  } else {
    if (va = !0, Ta(), cb = !0, c.onExit) {
      c.onExit(a);
    }
  }
  da(a, new na(a));
}, fd_close:function(a) {
  try {
    var b = zc(a);
    if (null === b.fd) {
      throw new J(8);
    }
    b.K && (b.K = null);
    try {
      b.g.close && b.g.close(b);
    } catch (d) {
      throw d;
    } finally {
      Tb[b.fd] = null;
    }
    b.fd = null;
    return 0;
  } catch (d) {
    return "undefined" !== typeof P && d instanceof J || r(d), d.m;
  }
}, fd_read:function(a, b, d, e) {
  try {
    a: {
      for (var g = zc(a), f = a = 0; f < d; f++) {
        var k = B[b + (8 * f + 4) >> 2], l = g, p = B[b + 8 * f >> 2], n = k, q = void 0, v = D;
        if (0 > n || 0 > q) {
          throw new J(28);
        }
        if (null === l.fd) {
          throw new J(8);
        }
        if (1 === (l.flags & 2097155)) {
          throw new J(8);
        }
        if (L(l.node.mode)) {
          throw new J(31);
        }
        if (!l.g.read) {
          throw new J(28);
        }
        var x = "undefined" !== typeof q;
        if (!x) {
          q = l.position;
        } else {
          if (!l.seekable) {
            throw new J(70);
          }
        }
        var m = l.g.read(l, v, p, n, q);
        x || (l.position += m);
        var t = m;
        if (0 > t) {
          var z = -1;
          break a;
        }
        a += t;
        if (t < k) {
          break;
        }
      }
      z = a;
    }
    B[e >> 2] = z;
    return 0;
  } catch (C) {
    return "undefined" !== typeof P && C instanceof J || r(C), C.m;
  }
}, fd_seek:function(a, b, d, e, g) {
  try {
    var f = zc(a);
    a = 4294967296 * d + (b >>> 0);
    if (-9007199254740992 >= a || 9007199254740992 <= a) {
      return -61;
    }
    qc(f, a, e);
    I = [f.position >>> 0, (H = f.position, 1.0 <= +gb(H) ? 0.0 < H ? (jb(+ib(H / 4294967296.0), 4294967295.0) | 0) >>> 0 : ~~+hb((H - +(~~H >>> 0)) / 4294967296.0) >>> 0 : 0)];
    B[g >> 2] = I[0];
    B[g + 4 >> 2] = I[1];
    f.K && 0 === a && 0 === e && (f.K = null);
    return 0;
  } catch (k) {
    return "undefined" !== typeof P && k instanceof J || r(k), k.m;
  }
}, fd_write:function(a, b, d, e) {
  try {
    a: {
      for (var g = zc(a), f = a = 0; f < d; f++) {
        var k = g, l = B[b + 8 * f >> 2], p = B[b + (8 * f + 4) >> 2], n = void 0, q = D;
        if (0 > p || 0 > n) {
          throw new J(28);
        }
        if (null === k.fd) {
          throw new J(8);
        }
        if (0 === (k.flags & 2097155)) {
          throw new J(8);
        }
        if (L(k.node.mode)) {
          throw new J(31);
        }
        if (!k.g.write) {
          throw new J(28);
        }
        k.seekable && k.flags & 1024 && qc(k, 0, 2);
        var v = "undefined" !== typeof n;
        if (!v) {
          n = k.position;
        } else {
          if (!k.seekable) {
            throw new J(70);
          }
        }
        var x = k.g.write(k, q, l, p, n, void 0);
        v || (k.position += x);
        try {
          if (k.path && M.onWriteToFile) {
            M.onWriteToFile(k.path);
          }
        } catch (z) {
          u("FS.trackingDelegate['onWriteToFile']('" + k.path + "') threw an exception: " + z.message);
        }
        var m = x;
        if (0 > m) {
          var t = -1;
          break a;
        }
        a += m;
      }
      t = a;
    }
    B[e >> 2] = t;
    return 0;
  } catch (z) {
    return "undefined" !== typeof P && z instanceof J || r(z), z.m;
  }
}, getTempRet0:function() {
  return ra | 0;
}, invoke_ii:Zd, invoke_iii:$d, invoke_iiii:ae, invoke_iiiii:be, invoke_iiiiii:ce, invoke_iiiiiii:de, invoke_iiiiiiii:ee, invoke_iiiiiiiiii:fe, invoke_vi:ge, invoke_vii:he, invoke_viii:ie, invoke_viiii:je, invoke_viiiii:ke, invoke_viiiiii:le, invoke_viiiiiiiii:me, localtime:function(a) {
  Kd();
  a = new Date(1000 * B[a >> 2]);
  B[503292] = a.getSeconds();
  B[503293] = a.getMinutes();
  B[503294] = a.getHours();
  B[503295] = a.getDate();
  B[503296] = a.getMonth();
  B[503297] = a.getFullYear() - 1900;
  B[503298] = a.getDay();
  var b = new Date(a.getFullYear(), 0, 1);
  B[503299] = (a.getTime() - b.getTime()) / 864E5 | 0;
  B[503301] = -(60 * a.getTimezoneOffset());
  var d = (new Date(a.getFullYear(), 6, 1)).getTimezoneOffset();
  b = b.getTimezoneOffset();
  a = (d != b && a.getTimezoneOffset() == Math.min(b, d)) | 0;
  B[503300] = a;
  a = B[Od() + (a ? 4 : 0) >> 2];
  B[503302] = a;
  return 2013168;
}, memory:ta, mktime:function(a) {
  Kd();
  var b = new Date(B[a + 20 >> 2] + 1900, B[a + 16 >> 2], B[a + 12 >> 2], B[a + 8 >> 2], B[a + 4 >> 2], B[a >> 2], 0), d = B[a + 32 >> 2], e = b.getTimezoneOffset(), g = new Date(b.getFullYear(), 0, 1), f = (new Date(b.getFullYear(), 6, 1)).getTimezoneOffset(), k = g.getTimezoneOffset(), l = Math.min(k, f);
  0 > d ? B[a + 32 >> 2] = Number(f != k && l == e) : 0 < d != (l == e) && (f = Math.max(k, f), b.setTime(b.getTime() + 60000 * ((0 < d ? l : f) - e)));
  B[a + 24 >> 2] = b.getDay();
  B[a + 28 >> 2] = (b.getTime() - g.getTime()) / 864E5 | 0;
  return b.getTime() / 1000 | 0;
}, pthread_create:function() {
  return 6;
}, pthread_join:function() {
}, pthread_mutexattr_destroy:function() {
}, pthread_mutexattr_init:function() {
}, pthread_mutexattr_settype:function() {
}, pthread_spin_destroy:function() {
  return 0;
}, pthread_spin_init:function() {
  return 0;
}, pthread_spin_lock:function() {
  return 0;
}, pthread_spin_unlock:function() {
  return 0;
}, setTempRet0:function(a) {
  ra = a | 0;
}, strftime:Ud, strftime_l:function(a, b, d, e) {
  return Ud(a, b, d, e);
}, table:ua, time:function(a) {
  var b = Date.now() / 1000 | 0;
  a && (B[a >> 2] = b);
  return b;
}};
(function() {
  function a(f) {
    c.asm = f.exports;
    kb--;
    c.monitorRunDependencies && c.monitorRunDependencies(kb);
    assert(nb["wasm-instantiate"]);
    delete nb["wasm-instantiate"];
    0 == kb && (null !== lb && (clearInterval(lb), lb = null), mb && (f = mb, mb = null, f()));
  }
  function b(f) {
    assert(c === g, "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?");
    g = null;
    a(f.instance);
  }
  function d(f) {
    return wb().then(function(k) {
      return WebAssembly.instantiate(k, e);
    }).then(f, function(k) {
      u("failed to asynchronously prepare wasm: " + k);
      r(k);
    });
  }
  var e = {env:ne, wasi_snapshot_preview1:ne};
  ob();
  var g = c;
  if (c.instantiateWasm) {
    try {
      return c.instantiateWasm(e, a);
    } catch (f) {
      return u("Module.instantiateWasm callback failed with error: " + f), !1;
    }
  }
  (function() {
    if (sa || "function" !== typeof WebAssembly.instantiateStreaming || tb() || rb("file://") || "function" !== typeof fetch) {
      return d(b);
    }
    fetch(sb, {credentials:"same-origin"}).then(function(f) {
      return WebAssembly.instantiateStreaming(f, e).then(b, function(k) {
        u("wasm streaming compile failed: " + k);
        u("falling back to ArrayBuffer instantiation");
        return d(b);
      });
    });
  })();
  return {};
})();
var xb = c.___wasm_call_ctors = G("__wasm_call_ctors"), Ed = c._strlen = G("strlen"), La = c._malloc = G("malloc"), U = c._free = G("free"), Xd = c.___errno_location = G("__errno_location");
c._fflush = G("fflush");
c._testSetjmp = G("testSetjmp");
c._saveSetjmp = G("saveSetjmp");
c._realloc = G("realloc");
var qd = c.___getTypeName = G("__getTypeName");
c.___embind_register_native_and_builtin_types = G("__embind_register_native_and_builtin_types");
var Od = c.__get_tzname = G("_get_tzname"), Nd = c.__get_daylight = G("_get_daylight"), Md = c.__get_timezone = G("_get_timezone"), X = c._setThrew = G("setThrew"), Y = c.stackSave = G("stackSave"), Z = c.stackRestore = G("stackRestore");
c.stackAlloc = G("stackAlloc");
c._emscripten_main_thread_process_queued_calls = G("emscripten_main_thread_process_queued_calls");
var oe = c.dynCall_vi = G("dynCall_vi"), pe = c.dynCall_vii = G("dynCall_vii"), qe = c.dynCall_viii = G("dynCall_viii"), re = c.dynCall_viiii = G("dynCall_viiii"), se = c.dynCall_viiiii = G("dynCall_viiiii"), te = c.dynCall_viiiiii = G("dynCall_viiiiii"), ue = c.dynCall_viiiiiiiii = G("dynCall_viiiiiiiii"), ve = c.dynCall_ii = G("dynCall_ii"), we = c.dynCall_iii = G("dynCall_iii"), xe = c.dynCall_iiii = G("dynCall_iiii"), ye = c.dynCall_iiiii = G("dynCall_iiiii"), ze = c.dynCall_iiiiii = G("dynCall_iiiiii"), 
Ae = c.dynCall_iiiiiii = G("dynCall_iiiiiii"), Be = c.dynCall_iiiiiiii = G("dynCall_iiiiiiii"), Ce = c.dynCall_iiiiiiiiii = G("dynCall_iiiiiiiiii");
c.___set_stack_limit = G("__set_stack_limit");
c.__growWasmMemory = G("__growWasmMemory");
c.dynCall_viiiiiii = G("dynCall_viiiiiii");
c.dynCall_viiiiiiii = G("dynCall_viiiiiiii");
c.dynCall_iiiiiiiii = G("dynCall_iiiiiiiii");
c.dynCall_viijii = G("dynCall_viijii");
c.dynCall_v = G("dynCall_v");
c.dynCall_diiid = G("dynCall_diiid");
c.dynCall_viij = G("dynCall_viij");
c.dynCall_viiiiiiiiiiii = G("dynCall_viiiiiiiiiiii");
c.dynCall_jiji = G("dynCall_jiji");
c.dynCall_ji = G("dynCall_ji");
c.dynCall_iiiiiiiiiiiii = G("dynCall_iiiiiiiiiiiii");
c.dynCall_iiiiiiiiiiii = G("dynCall_iiiiiiiiiiii");
c.dynCall_viiiiiiiiii = G("dynCall_viiiiiiiiii");
c.dynCall_viiiiiiji = G("dynCall_viiiiiiji");
c.dynCall_viiij = G("dynCall_viiij");
c.dynCall_viiiiiijii = G("dynCall_viiiiiijii");
c.dynCall_fi = G("dynCall_fi");
c.dynCall_vif = G("dynCall_vif");
c.dynCall_idd = G("dynCall_idd");
c.dynCall_viffff = G("dynCall_viffff");
c.dynCall_iiiiiiiiiii = G("dynCall_iiiiiiiiiii");
c.dynCall_viiifiii = G("dynCall_viiifiii");
c.dynCall_viiifii = G("dynCall_viiifii");
c.dynCall_viiifiiii = G("dynCall_viiifiiii");
c.dynCall_iidiiii = G("dynCall_iidiiii");
c.dynCall_iiiiij = G("dynCall_iiiiij");
c.dynCall_iiiiid = G("dynCall_iiiiid");
c.dynCall_iiiiijj = G("dynCall_iiiiijj");
c.dynCall_iiiiiijj = G("dynCall_iiiiiijj");
function Zd(a, b) {
  var d = Y();
  try {
    return ve(a, b);
  } catch (e) {
    Z(d);
    if (e !== e + 0 && "longjmp" !== e) {
      throw e;
    }
    X(1, 0);
  }
}
function ae(a, b, d, e) {
  var g = Y();
  try {
    return xe(a, b, d, e);
  } catch (f) {
    Z(g);
    if (f !== f + 0 && "longjmp" !== f) {
      throw f;
    }
    X(1, 0);
  }
}
function ge(a, b) {
  var d = Y();
  try {
    oe(a, b);
  } catch (e) {
    Z(d);
    if (e !== e + 0 && "longjmp" !== e) {
      throw e;
    }
    X(1, 0);
  }
}
function ie(a, b, d, e) {
  var g = Y();
  try {
    qe(a, b, d, e);
  } catch (f) {
    Z(g);
    if (f !== f + 0 && "longjmp" !== f) {
      throw f;
    }
    X(1, 0);
  }
}
function he(a, b, d) {
  var e = Y();
  try {
    pe(a, b, d);
  } catch (g) {
    Z(e);
    if (g !== g + 0 && "longjmp" !== g) {
      throw g;
    }
    X(1, 0);
  }
}
function $d(a, b, d) {
  var e = Y();
  try {
    return we(a, b, d);
  } catch (g) {
    Z(e);
    if (g !== g + 0 && "longjmp" !== g) {
      throw g;
    }
    X(1, 0);
  }
}
function ee(a, b, d, e, g, f, k, l) {
  var p = Y();
  try {
    return Be(a, b, d, e, g, f, k, l);
  } catch (n) {
    Z(p);
    if (n !== n + 0 && "longjmp" !== n) {
      throw n;
    }
    X(1, 0);
  }
}
function be(a, b, d, e, g) {
  var f = Y();
  try {
    return ye(a, b, d, e, g);
  } catch (k) {
    Z(f);
    if (k !== k + 0 && "longjmp" !== k) {
      throw k;
    }
    X(1, 0);
  }
}
function je(a, b, d, e, g) {
  var f = Y();
  try {
    re(a, b, d, e, g);
  } catch (k) {
    Z(f);
    if (k !== k + 0 && "longjmp" !== k) {
      throw k;
    }
    X(1, 0);
  }
}
function fe(a, b, d, e, g, f, k, l, p, n) {
  var q = Y();
  try {
    return Ce(a, b, d, e, g, f, k, l, p, n);
  } catch (v) {
    Z(q);
    if (v !== v + 0 && "longjmp" !== v) {
      throw v;
    }
    X(1, 0);
  }
}
function ce(a, b, d, e, g, f) {
  var k = Y();
  try {
    return ze(a, b, d, e, g, f);
  } catch (l) {
    Z(k);
    if (l !== l + 0 && "longjmp" !== l) {
      throw l;
    }
    X(1, 0);
  }
}
function de(a, b, d, e, g, f, k) {
  var l = Y();
  try {
    return Ae(a, b, d, e, g, f, k);
  } catch (p) {
    Z(l);
    if (p !== p + 0 && "longjmp" !== p) {
      throw p;
    }
    X(1, 0);
  }
}
function ke(a, b, d, e, g, f) {
  var k = Y();
  try {
    se(a, b, d, e, g, f);
  } catch (l) {
    Z(k);
    if (l !== l + 0 && "longjmp" !== l) {
      throw l;
    }
    X(1, 0);
  }
}
function me(a, b, d, e, g, f, k, l, p, n) {
  var q = Y();
  try {
    ue(a, b, d, e, g, f, k, l, p, n);
  } catch (v) {
    Z(q);
    if (v !== v + 0 && "longjmp" !== v) {
      throw v;
    }
    X(1, 0);
  }
}
function le(a, b, d, e, g, f, k) {
  var l = Y();
  try {
    te(a, b, d, e, g, f, k);
  } catch (p) {
    Z(l);
    if (p !== p + 0 && "longjmp" !== p) {
      throw p;
    }
    X(1, 0);
  }
}
Object.getOwnPropertyDescriptor(c, "intArrayFromString") || (c.intArrayFromString = function() {
  r("'intArrayFromString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "intArrayToString") || (c.intArrayToString = function() {
  r("'intArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "ccall") || (c.ccall = function() {
  r("'ccall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "cwrap") || (c.cwrap = function() {
  r("'cwrap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "setValue") || (c.setValue = function() {
  r("'setValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "getValue") || (c.getValue = function() {
  r("'getValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "allocate") || (c.allocate = function() {
  r("'allocate' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "getMemory") || (c.getMemory = function() {
  r("'getMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(c, "UTF8ArrayToString") || (c.UTF8ArrayToString = function() {
  r("'UTF8ArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "UTF8ToString") || (c.UTF8ToString = function() {
  r("'UTF8ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "stringToUTF8Array") || (c.stringToUTF8Array = function() {
  r("'stringToUTF8Array' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "stringToUTF8") || (c.stringToUTF8 = function() {
  r("'stringToUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "lengthBytesUTF8") || (c.lengthBytesUTF8 = function() {
  r("'lengthBytesUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "stackTrace") || (c.stackTrace = function() {
  r("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "addOnPreRun") || (c.addOnPreRun = function() {
  r("'addOnPreRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "addOnInit") || (c.addOnInit = function() {
  r("'addOnInit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "addOnPreMain") || (c.addOnPreMain = function() {
  r("'addOnPreMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "addOnExit") || (c.addOnExit = function() {
  r("'addOnExit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "addOnPostRun") || (c.addOnPostRun = function() {
  r("'addOnPostRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "writeStringToMemory") || (c.writeStringToMemory = function() {
  r("'writeStringToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "writeArrayToMemory") || (c.writeArrayToMemory = function() {
  r("'writeArrayToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "writeAsciiToMemory") || (c.writeAsciiToMemory = function() {
  r("'writeAsciiToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "addRunDependency") || (c.addRunDependency = function() {
  r("'addRunDependency' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(c, "removeRunDependency") || (c.removeRunDependency = function() {
  r("'removeRunDependency' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(c, "FS_createFolder") || (c.FS_createFolder = function() {
  r("'FS_createFolder' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(c, "FS_createPath") || (c.FS_createPath = function() {
  r("'FS_createPath' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(c, "FS_createDataFile") || (c.FS_createDataFile = function() {
  r("'FS_createDataFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(c, "FS_createPreloadedFile") || (c.FS_createPreloadedFile = function() {
  r("'FS_createPreloadedFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(c, "FS_createLazyFile") || (c.FS_createLazyFile = function() {
  r("'FS_createLazyFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(c, "FS_createLink") || (c.FS_createLink = function() {
  r("'FS_createLink' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(c, "FS_createDevice") || (c.FS_createDevice = function() {
  r("'FS_createDevice' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(c, "FS_unlink") || (c.FS_unlink = function() {
  r("'FS_unlink' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(c, "dynamicAlloc") || (c.dynamicAlloc = function() {
  r("'dynamicAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "loadDynamicLibrary") || (c.loadDynamicLibrary = function() {
  r("'loadDynamicLibrary' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "loadWebAssemblyModule") || (c.loadWebAssemblyModule = function() {
  r("'loadWebAssemblyModule' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "getLEB") || (c.getLEB = function() {
  r("'getLEB' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "getFunctionTables") || (c.getFunctionTables = function() {
  r("'getFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "alignFunctionTables") || (c.alignFunctionTables = function() {
  r("'alignFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "registerFunctions") || (c.registerFunctions = function() {
  r("'registerFunctions' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "addFunction") || (c.addFunction = function() {
  r("'addFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "removeFunction") || (c.removeFunction = function() {
  r("'removeFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "getFuncWrapper") || (c.getFuncWrapper = function() {
  r("'getFuncWrapper' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "prettyPrint") || (c.prettyPrint = function() {
  r("'prettyPrint' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "makeBigInt") || (c.makeBigInt = function() {
  r("'makeBigInt' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "dynCall") || (c.dynCall = function() {
  r("'dynCall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "getCompilerSetting") || (c.getCompilerSetting = function() {
  r("'getCompilerSetting' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "print") || (c.print = function() {
  r("'print' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "printErr") || (c.printErr = function() {
  r("'printErr' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "getTempRet0") || (c.getTempRet0 = function() {
  r("'getTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "setTempRet0") || (c.setTempRet0 = function() {
  r("'setTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "callMain") || (c.callMain = function() {
  r("'callMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "abort") || (c.abort = function() {
  r("'abort' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "stringToNewUTF8") || (c.stringToNewUTF8 = function() {
  r("'stringToNewUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "emscripten_realloc_buffer") || (c.emscripten_realloc_buffer = function() {
  r("'emscripten_realloc_buffer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "ENV") || (c.ENV = function() {
  r("'ENV' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "ERRNO_CODES") || (c.ERRNO_CODES = function() {
  r("'ERRNO_CODES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "ERRNO_MESSAGES") || (c.ERRNO_MESSAGES = function() {
  r("'ERRNO_MESSAGES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "setErrNo") || (c.setErrNo = function() {
  r("'setErrNo' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "DNS") || (c.DNS = function() {
  r("'DNS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "GAI_ERRNO_MESSAGES") || (c.GAI_ERRNO_MESSAGES = function() {
  r("'GAI_ERRNO_MESSAGES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "Protocols") || (c.Protocols = function() {
  r("'Protocols' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "Sockets") || (c.Sockets = function() {
  r("'Sockets' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "UNWIND_CACHE") || (c.UNWIND_CACHE = function() {
  r("'UNWIND_CACHE' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "readAsmConstArgs") || (c.readAsmConstArgs = function() {
  r("'readAsmConstArgs' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "jstoi_q") || (c.jstoi_q = function() {
  r("'jstoi_q' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "jstoi_s") || (c.jstoi_s = function() {
  r("'jstoi_s' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "abortStackOverflow") || (c.abortStackOverflow = function() {
  r("'abortStackOverflow' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "reallyNegative") || (c.reallyNegative = function() {
  r("'reallyNegative' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "formatString") || (c.formatString = function() {
  r("'formatString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "PATH") || (c.PATH = function() {
  r("'PATH' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "PATH_FS") || (c.PATH_FS = function() {
  r("'PATH_FS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "SYSCALLS") || (c.SYSCALLS = function() {
  r("'SYSCALLS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "syscallMmap2") || (c.syscallMmap2 = function() {
  r("'syscallMmap2' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "syscallMunmap") || (c.syscallMunmap = function() {
  r("'syscallMunmap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "JSEvents") || (c.JSEvents = function() {
  r("'JSEvents' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "specialHTMLTargets") || (c.specialHTMLTargets = function() {
  r("'specialHTMLTargets' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "demangle") || (c.demangle = function() {
  r("'demangle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "demangleAll") || (c.demangleAll = function() {
  r("'demangleAll' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "jsStackTrace") || (c.jsStackTrace = function() {
  r("'jsStackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "stackTrace") || (c.stackTrace = function() {
  r("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "getEnvStrings") || (c.getEnvStrings = function() {
  r("'getEnvStrings' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "checkWasiClock") || (c.checkWasiClock = function() {
  r("'checkWasiClock' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "writeI53ToI64") || (c.writeI53ToI64 = function() {
  r("'writeI53ToI64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "writeI53ToI64Clamped") || (c.writeI53ToI64Clamped = function() {
  r("'writeI53ToI64Clamped' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "writeI53ToI64Signaling") || (c.writeI53ToI64Signaling = function() {
  r("'writeI53ToI64Signaling' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "writeI53ToU64Clamped") || (c.writeI53ToU64Clamped = function() {
  r("'writeI53ToU64Clamped' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "writeI53ToU64Signaling") || (c.writeI53ToU64Signaling = function() {
  r("'writeI53ToU64Signaling' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "readI53FromI64") || (c.readI53FromI64 = function() {
  r("'readI53FromI64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "readI53FromU64") || (c.readI53FromU64 = function() {
  r("'readI53FromU64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "convertI32PairToI53") || (c.convertI32PairToI53 = function() {
  r("'convertI32PairToI53' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "convertU32PairToI53") || (c.convertU32PairToI53 = function() {
  r("'convertU32PairToI53' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "Browser") || (c.Browser = function() {
  r("'Browser' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "FS") || (c.FS = function() {
  r("'FS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "MEMFS") || (c.MEMFS = function() {
  r("'MEMFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "TTY") || (c.TTY = function() {
  r("'TTY' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "PIPEFS") || (c.PIPEFS = function() {
  r("'PIPEFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "SOCKFS") || (c.SOCKFS = function() {
  r("'SOCKFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "GL") || (c.GL = function() {
  r("'GL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "emscriptenWebGLGet") || (c.emscriptenWebGLGet = function() {
  r("'emscriptenWebGLGet' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "emscriptenWebGLGetTexPixelData") || (c.emscriptenWebGLGetTexPixelData = function() {
  r("'emscriptenWebGLGetTexPixelData' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "emscriptenWebGLGetUniform") || (c.emscriptenWebGLGetUniform = function() {
  r("'emscriptenWebGLGetUniform' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "emscriptenWebGLGetVertexAttrib") || (c.emscriptenWebGLGetVertexAttrib = function() {
  r("'emscriptenWebGLGetVertexAttrib' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "AL") || (c.AL = function() {
  r("'AL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "SDL_unicode") || (c.SDL_unicode = function() {
  r("'SDL_unicode' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "SDL_ttfContext") || (c.SDL_ttfContext = function() {
  r("'SDL_ttfContext' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "SDL_audio") || (c.SDL_audio = function() {
  r("'SDL_audio' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "SDL") || (c.SDL = function() {
  r("'SDL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "SDL_gfx") || (c.SDL_gfx = function() {
  r("'SDL_gfx' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "GLUT") || (c.GLUT = function() {
  r("'GLUT' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "EGL") || (c.EGL = function() {
  r("'EGL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "GLFW_Window") || (c.GLFW_Window = function() {
  r("'GLFW_Window' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "GLFW") || (c.GLFW = function() {
  r("'GLFW' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "GLEW") || (c.GLEW = function() {
  r("'GLEW' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "IDBStore") || (c.IDBStore = function() {
  r("'IDBStore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "runAndAbortIfError") || (c.runAndAbortIfError = function() {
  r("'runAndAbortIfError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "emval_handle_array") || (c.emval_handle_array = function() {
  r("'emval_handle_array' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "emval_free_list") || (c.emval_free_list = function() {
  r("'emval_free_list' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "emval_symbols") || (c.emval_symbols = function() {
  r("'emval_symbols' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "init_emval") || (c.init_emval = function() {
  r("'init_emval' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "count_emval_handles") || (c.count_emval_handles = function() {
  r("'count_emval_handles' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "get_first_emval") || (c.get_first_emval = function() {
  r("'get_first_emval' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "getStringOrSymbol") || (c.getStringOrSymbol = function() {
  r("'getStringOrSymbol' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "requireHandle") || (c.requireHandle = function() {
  r("'requireHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "emval_newers") || (c.emval_newers = function() {
  r("'emval_newers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "craftEmvalAllocator") || (c.craftEmvalAllocator = function() {
  r("'craftEmvalAllocator' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "emval_get_global") || (c.emval_get_global = function() {
  r("'emval_get_global' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "emval_methodCallers") || (c.emval_methodCallers = function() {
  r("'emval_methodCallers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "InternalError") || (c.InternalError = function() {
  r("'InternalError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "BindingError") || (c.BindingError = function() {
  r("'BindingError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "UnboundTypeError") || (c.UnboundTypeError = function() {
  r("'UnboundTypeError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "PureVirtualError") || (c.PureVirtualError = function() {
  r("'PureVirtualError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "init_embind") || (c.init_embind = function() {
  r("'init_embind' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "throwInternalError") || (c.throwInternalError = function() {
  r("'throwInternalError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "throwBindingError") || (c.throwBindingError = function() {
  r("'throwBindingError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "throwUnboundTypeError") || (c.throwUnboundTypeError = function() {
  r("'throwUnboundTypeError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "ensureOverloadTable") || (c.ensureOverloadTable = function() {
  r("'ensureOverloadTable' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "exposePublicSymbol") || (c.exposePublicSymbol = function() {
  r("'exposePublicSymbol' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "replacePublicSymbol") || (c.replacePublicSymbol = function() {
  r("'replacePublicSymbol' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "extendError") || (c.extendError = function() {
  r("'extendError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "createNamedFunction") || (c.createNamedFunction = function() {
  r("'createNamedFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "registeredInstances") || (c.registeredInstances = function() {
  r("'registeredInstances' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "getBasestPointer") || (c.getBasestPointer = function() {
  r("'getBasestPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "registerInheritedInstance") || (c.registerInheritedInstance = function() {
  r("'registerInheritedInstance' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "unregisterInheritedInstance") || (c.unregisterInheritedInstance = function() {
  r("'unregisterInheritedInstance' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "getInheritedInstance") || (c.getInheritedInstance = function() {
  r("'getInheritedInstance' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "getInheritedInstanceCount") || (c.getInheritedInstanceCount = function() {
  r("'getInheritedInstanceCount' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "getLiveInheritedInstances") || (c.getLiveInheritedInstances = function() {
  r("'getLiveInheritedInstances' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "registeredTypes") || (c.registeredTypes = function() {
  r("'registeredTypes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "awaitingDependencies") || (c.awaitingDependencies = function() {
  r("'awaitingDependencies' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "typeDependencies") || (c.typeDependencies = function() {
  r("'typeDependencies' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "registeredPointers") || (c.registeredPointers = function() {
  r("'registeredPointers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "registerType") || (c.registerType = function() {
  r("'registerType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "whenDependentTypesAreResolved") || (c.whenDependentTypesAreResolved = function() {
  r("'whenDependentTypesAreResolved' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "embind_charCodes") || (c.embind_charCodes = function() {
  r("'embind_charCodes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "embind_init_charCodes") || (c.embind_init_charCodes = function() {
  r("'embind_init_charCodes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "readLatin1String") || (c.readLatin1String = function() {
  r("'readLatin1String' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "getTypeName") || (c.getTypeName = function() {
  r("'getTypeName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "heap32VectorToArray") || (c.heap32VectorToArray = function() {
  r("'heap32VectorToArray' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "requireRegisteredType") || (c.requireRegisteredType = function() {
  r("'requireRegisteredType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "getShiftFromSize") || (c.getShiftFromSize = function() {
  r("'getShiftFromSize' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "integerReadValueFromPointer") || (c.integerReadValueFromPointer = function() {
  r("'integerReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "enumReadValueFromPointer") || (c.enumReadValueFromPointer = function() {
  r("'enumReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "floatReadValueFromPointer") || (c.floatReadValueFromPointer = function() {
  r("'floatReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "simpleReadValueFromPointer") || (c.simpleReadValueFromPointer = function() {
  r("'simpleReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "runDestructors") || (c.runDestructors = function() {
  r("'runDestructors' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "new_") || (c.new_ = function() {
  r("'new_' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "craftInvokerFunction") || (c.craftInvokerFunction = function() {
  r("'craftInvokerFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "embind__requireFunction") || (c.embind__requireFunction = function() {
  r("'embind__requireFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "tupleRegistrations") || (c.tupleRegistrations = function() {
  r("'tupleRegistrations' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "structRegistrations") || (c.structRegistrations = function() {
  r("'structRegistrations' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "genericPointerToWireType") || (c.genericPointerToWireType = function() {
  r("'genericPointerToWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "constNoSmartPtrRawPointerToWireType") || (c.constNoSmartPtrRawPointerToWireType = function() {
  r("'constNoSmartPtrRawPointerToWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "nonConstNoSmartPtrRawPointerToWireType") || (c.nonConstNoSmartPtrRawPointerToWireType = function() {
  r("'nonConstNoSmartPtrRawPointerToWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "init_RegisteredPointer") || (c.init_RegisteredPointer = function() {
  r("'init_RegisteredPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "RegisteredPointer") || (c.RegisteredPointer = function() {
  r("'RegisteredPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "RegisteredPointer_getPointee") || (c.RegisteredPointer_getPointee = function() {
  r("'RegisteredPointer_getPointee' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "RegisteredPointer_destructor") || (c.RegisteredPointer_destructor = function() {
  r("'RegisteredPointer_destructor' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "RegisteredPointer_deleteObject") || (c.RegisteredPointer_deleteObject = function() {
  r("'RegisteredPointer_deleteObject' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "RegisteredPointer_fromWireType") || (c.RegisteredPointer_fromWireType = function() {
  r("'RegisteredPointer_fromWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "runDestructor") || (c.runDestructor = function() {
  r("'runDestructor' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "releaseClassHandle") || (c.releaseClassHandle = function() {
  r("'releaseClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "finalizationGroup") || (c.finalizationGroup = function() {
  r("'finalizationGroup' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "detachFinalizer_deps") || (c.detachFinalizer_deps = function() {
  r("'detachFinalizer_deps' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "detachFinalizer") || (c.detachFinalizer = function() {
  r("'detachFinalizer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "attachFinalizer") || (c.attachFinalizer = function() {
  r("'attachFinalizer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "makeClassHandle") || (c.makeClassHandle = function() {
  r("'makeClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "init_ClassHandle") || (c.init_ClassHandle = function() {
  r("'init_ClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "ClassHandle") || (c.ClassHandle = function() {
  r("'ClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "ClassHandle_isAliasOf") || (c.ClassHandle_isAliasOf = function() {
  r("'ClassHandle_isAliasOf' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "throwInstanceAlreadyDeleted") || (c.throwInstanceAlreadyDeleted = function() {
  r("'throwInstanceAlreadyDeleted' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "ClassHandle_clone") || (c.ClassHandle_clone = function() {
  r("'ClassHandle_clone' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "ClassHandle_delete") || (c.ClassHandle_delete = function() {
  r("'ClassHandle_delete' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "deletionQueue") || (c.deletionQueue = function() {
  r("'deletionQueue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "ClassHandle_isDeleted") || (c.ClassHandle_isDeleted = function() {
  r("'ClassHandle_isDeleted' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "ClassHandle_deleteLater") || (c.ClassHandle_deleteLater = function() {
  r("'ClassHandle_deleteLater' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "flushPendingDeletes") || (c.flushPendingDeletes = function() {
  r("'flushPendingDeletes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "delayFunction") || (c.delayFunction = function() {
  r("'delayFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "setDelayFunction") || (c.setDelayFunction = function() {
  r("'setDelayFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "RegisteredClass") || (c.RegisteredClass = function() {
  r("'RegisteredClass' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "shallowCopyInternalPointer") || (c.shallowCopyInternalPointer = function() {
  r("'shallowCopyInternalPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "downcastPointer") || (c.downcastPointer = function() {
  r("'downcastPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "upcastPointer") || (c.upcastPointer = function() {
  r("'upcastPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "validateThis") || (c.validateThis = function() {
  r("'validateThis' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "char_0") || (c.char_0 = function() {
  r("'char_0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "char_9") || (c.char_9 = function() {
  r("'char_9' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "makeLegalFunctionName") || (c.makeLegalFunctionName = function() {
  r("'makeLegalFunctionName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "warnOnce") || (c.warnOnce = function() {
  r("'warnOnce' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "stackSave") || (c.stackSave = function() {
  r("'stackSave' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "stackRestore") || (c.stackRestore = function() {
  r("'stackRestore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "stackAlloc") || (c.stackAlloc = function() {
  r("'stackAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "AsciiToString") || (c.AsciiToString = function() {
  r("'AsciiToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "stringToAscii") || (c.stringToAscii = function() {
  r("'stringToAscii' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "UTF16ToString") || (c.UTF16ToString = function() {
  r("'UTF16ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "stringToUTF16") || (c.stringToUTF16 = function() {
  r("'stringToUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "lengthBytesUTF16") || (c.lengthBytesUTF16 = function() {
  r("'lengthBytesUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "UTF32ToString") || (c.UTF32ToString = function() {
  r("'UTF32ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "stringToUTF32") || (c.stringToUTF32 = function() {
  r("'stringToUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "lengthBytesUTF32") || (c.lengthBytesUTF32 = function() {
  r("'lengthBytesUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "allocateUTF8") || (c.allocateUTF8 = function() {
  r("'allocateUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(c, "allocateUTF8OnStack") || (c.allocateUTF8OnStack = function() {
  r("'allocateUTF8OnStack' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
c.writeStackCookie = Sa;
c.checkStackCookie = Ta;
Object.getOwnPropertyDescriptor(c, "ALLOC_NORMAL") || Object.defineProperty(c, "ALLOC_NORMAL", {configurable:!0, get:function() {
  r("'ALLOC_NORMAL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
}});
Object.getOwnPropertyDescriptor(c, "ALLOC_STACK") || Object.defineProperty(c, "ALLOC_STACK", {configurable:!0, get:function() {
  r("'ALLOC_STACK' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
}});
Object.getOwnPropertyDescriptor(c, "ALLOC_DYNAMIC") || Object.defineProperty(c, "ALLOC_DYNAMIC", {configurable:!0, get:function() {
  r("'ALLOC_DYNAMIC' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
}});
Object.getOwnPropertyDescriptor(c, "ALLOC_NONE") || Object.defineProperty(c, "ALLOC_NONE", {configurable:!0, get:function() {
  r("'ALLOC_NONE' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
}});
var De;
function na(a) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + a + ")";
  this.status = a;
}
mb = function Ee() {
  De || Fe();
  De || (mb = Ee);
};
function Fe() {
  function a() {
    if (!De && (De = !0, c.calledRun = !0, !va)) {
      Ta();
      assert(!bb);
      bb = !0;
      if (!c.noFSInit && !sc) {
        assert(!sc, "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");
        sc = !0;
        rc();
        c.stdin = c.stdin;
        c.stdout = c.stdout;
        c.stderr = c.stderr;
        c.stdin ? uc("stdin", c.stdin) : nc("/dev/tty", "/dev/stdin");
        c.stdout ? uc("stdout", null, c.stdout) : nc("/dev/tty", "/dev/stdout");
        c.stderr ? uc("stderr", null, c.stderr) : nc("/dev/tty1", "/dev/stderr");
        var b = oc("/dev/stdin", "r"), d = oc("/dev/stdout", "w"), e = oc("/dev/stderr", "w");
        assert(0 === b.fd, "invalid handle for stdin (" + b.fd + ")");
        assert(1 === d.fd, "invalid handle for stdout (" + d.fd + ")");
        assert(2 === e.fd, "invalid handle for stderr (" + e.fd + ")");
      }
      Wa(Ya);
      Ta();
      Wb = !1;
      Wa(Za);
      if (c.onRuntimeInitialized) {
        c.onRuntimeInitialized();
      }
      assert(!c._main, 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]');
      Ta();
      if (c.postRun) {
        for ("function" == typeof c.postRun && (c.postRun = [c.postRun]); c.postRun.length;) {
          b = c.postRun.shift(), ab.unshift(b);
        }
      }
      Wa(ab);
    }
  }
  if (!(0 < kb)) {
    Sa();
    if (c.preRun) {
      for ("function" == typeof c.preRun && (c.preRun = [c.preRun]); c.preRun.length;) {
        db();
      }
    }
    Wa(Xa);
    0 < kb || (c.setStatus ? (c.setStatus("Running..."), setTimeout(function() {
      setTimeout(function() {
        c.setStatus("");
      }, 1);
      a();
    }, 1)) : a(), Ta());
  }
}
c.run = Fe;
function Yd() {
  var a = oa, b = u, d = !1;
  oa = u = function() {
    d = !0;
  };
  try {
    var e = c._fflush;
    e && e(0);
    ["stdout", "stderr"].forEach(function(g) {
      g = "/dev/" + g;
      try {
        var f = N(g, {U:!0});
        g = f.path;
      } catch (l) {
      }
      var k = {Ea:!1, exists:!1, error:0, name:null, path:null, object:null, Ga:!1, Ia:null, Ha:null};
      try {
        f = N(g, {parent:!0}), k.Ga = !0, k.Ia = f.path, k.Ha = f.node, k.name = Cb(g), f = N(g, {U:!0}), k.exists = !0, k.path = f.path, k.object = f.node, k.name = f.node.name, k.Ea = "/" === f.path;
      } catch (l) {
        k.error = l.m;
      }
      k && (f = Eb[k.object.rdev]) && f.output && f.output.length && (d = !0);
    });
  } catch (g) {
  }
  oa = a;
  u = b;
  d && pa("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the FAQ), or make sure to emit a newline when you printf etc.");
}
if (c.preInit) {
  for ("function" == typeof c.preInit && (c.preInit = [c.preInit]); 0 < c.preInit.length;) {
    c.preInit.pop()();
  }
}
noExitRuntime = !0;
Fe();

