(function (i) {
    var j = { "\u0008": "\\b", "\t": "\\t", "\n": "\\n", "\u000c": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" }, h = { array: function (a) { var b = ["["], d, c, e, f = a.length, g; for (e = 0; e < f; e += 1) { g = a[e]; if (c = h[typeof g]) { g = c(g); if (typeof g == "string") { if (d) b[b.length] = ","; b[b.length] = g; d = true } } } b[b.length] = "]"; return b.join("") }, "boolean": function (a) { return String(a) }, "null": function () { return "null" }, number: function (a) { return isFinite(a) ? String(a) : "null" }, object: function (a) {
        if (a) {
            if (a instanceof Array) return h.array(a);
            var b = ["{"], d, c, e, f; for (e in a) { f = a[e]; if (c = h[typeof f]) { f = c(f); if (typeof f == "string") { if (d) b[b.length] = ","; b.push(h.string(e), ":", f); d = true } } } b[b.length] = "}"; return b.join("")
        } return "null"
    }, string: function (a) { if (/["\\\x00-\x1f]/.test(a)) a = a.replace(/([\x00-\x1f\\"])/g, function (b, d) { var c = j[d]; if (c) return c; c = d.charCodeAt(); return "\\u00" + Math.floor(c / 16).toString(16) + (c % 16).toString(16) }); return '"' + a + '"' } 
    }; i.toJSON = function (a) { var b = isNaN(a) ? h[typeof a] : h.number; if (b) return b(a) }; i.parseJSON = function (a,
b) { if (b === undefined) b = i.parseJSON.safe; if (!(b && !/^("(\\.|[^"\\\n\r])*?"|[,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t])+?$/.test(a))) return eval("(" + a + ")") }; i.parseJSON.safe = false
})(jQuery);
