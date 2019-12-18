import { Children } from "react";

const UP = [-1, 0];
const LEFT = [0, -1];
const TOPLEFT = [-1, -1];
const ORIGIN = [0, 0];
var d = {};
function getWeights(v, w, delta) {
  var rights = [];
  var downs = [];
  var downrights = [];
  for (var i = 0; i < v.length + 1; i++) {
    rights.push([]);
    downs.push([]);
    downrights.push([]);
    for (var j = 0; j < w.length + 1; j++) {
      rights[i][j] = 0;
      downs[i][j] = 0;
      downrights[i][j] = 0;
    }
  }
  for (var i = 0; i < v.length + 1; i++) {
    for (var j = 1; j < w.length + 1; j++) {
      //console.log("delta, w[j-1]: ", delta, w[j - 1]);
      rights[i][j] = delta["-"][w[j - 1]];
    }
  }
  for (var i = 1; i < v.length + 1; i++) {
    for (var j = 0; j < w.length + 1; j++) {
      //console.log("delta 26: ", delta);
      //console.log(v[i - 1]);
      //console.log("v: ", v);
      downs[i][j] = delta[v[i - 1]]["-"];
    }
  }
  for (var i = 1; i < v.length + 1; i++) {
    for (var j = 1; j < w.length + 1; j++) {
      downrights[i][j] = delta[v[i - 1]][w[j - 1]];
    }
  }
  return [rights, downs, downrights];
}

function revStr(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

function globalAlignment(v, w, delta) {
  const getWeightsResult = getWeights(v, w, delta);
  var rights = getWeightsResult[0];
  var downs = getWeightsResult[1];
  var downrights = getWeightsResult[2];
  //console.log("rights, downs, dr: ", rights, downs, downrights);
  var table = [];
  var pointers = [];
  for (var i = 0; i < v.length + 1; i++) {
    table.push([]);
    pointers.push([]);
    for (var j = 0; j < w.length + 1; j++) {
      table[i][j] = 0;
      pointers[i][j] = ORIGIN;
    }
  }
  for (var i = 0; i < v.length + 1; i++) {
    for (var j = 0; j < w.length + 1; j++) {
      if (i === 0 && j === 0) {
        continue;
      } else if (i > 0 && j === 0) {
        table[i][j] = table[i - 1][j] + downs[i][j];
        pointers[i][j] = UP;
      } else if (i === 0 && j > 0) {
        //console.log("i, j, table, rights: ", i, j, table, rights);
        table[i][j] = table[i][j - 1] + rights[i][j];
        pointers[i][j] = LEFT;
      } else {
        var choice1 = table[i - 1][j] + downs[i][j];
        var choice2 = table[i][j - 1] + rights[i][j];
        var choice3 = table[i - 1][j - 1] + downrights[i][j];
        table[i][j] = Math.max(choice1, choice2, choice3);
        if (table[i][j] === choice1) {
          pointers[i][j] = UP;
        } else if (table[i][j] === choice2) {
          pointers[i][j] = LEFT;
        } else {
          pointers[i][j] = TOPLEFT;
        }
      }
    }
  }
  var m = v.length;
  var n = w.length;
  var string1 = "";
  var string2 = "";
  while (1) {
    var point = pointers[m][n];
    if (point === UP) {
      string1 += v[m - 1];
      string2 += "-";
    } else if (point === LEFT) {
      string1 += "-";
      string2 += w[n - 1];
    } else if (point === TOPLEFT) {
      string1 += v[m - 1];
      string2 += w[n - 1];
    } else {
      string1 += v[m];
      string2 += w[n];
    }
    m += point[0];
    n += point[1];
    if (m == 0 && n == 0) {
      break;
    }
  }
  string1 = revStr(string1);
  string2 = revStr(string2);
  var alignment = "";
  for (var i = 0; i < string1.length; i++) {
    if (string1[i] === string2[i]) {
      alignment += "|";
    } else {
      alignment += " ";
    }
  }
  alignment = string1 + "\n" + alignment + "\n" + string2;
  //console.log('global alignment result: ', [table, pointers, alignment]);
  return [table, pointers, alignment];
}

function prefixSuffix(v, w, delta) {
  const gwR = getWeights(v, w, delta);
  var rights = gwR[0];
  var downs = gwR[1];
  var downrights = gwR[2];
  const gaR = globalAlignment(v, w, delta);
  var table = gaR[0];
  var pointers = gaR[1];
  var alignment = gaR[2];
  var split = Math.ceil(w.length / 2);
  var p1 = [];
  var p2 = [];
  var p3 = [];
  for (var i = 0; i < v.length + 1; i++) {
    p1.push([]);
    p2.push([]);
    p3.push([]);
    for (var j = 0; j < split + 1; j++) {
      p1[i][j] = rights[i][j];
      p2[i][j] = downs[i][j];
      p3[i][j] = downrights[i][j];
    }
  }
  var lefts = [];
  var ups = [];
  var uplefts = [];
  for (var i = 0; i < v.length + 1; i++) {
    lefts.push([]);
    ups.push([]);
    uplefts.push([]);
    for (var j = 0; j < w.length + 1; j++) {
      lefts[i][j] = 0;
      downs[i][j] = 0;
      downrights[i][j] = 0;
    }
  }
  for (var i = v.length; i > -1; i--) {
    for (var j = w.length - 1; j > split - 1; j--) {
      lefts[i][j] = rights[i][j + 1];
    }
  }
  for (var i = v.length - 1; i > -1; i--) {
    for (var j = w.length; j > split - 1; j--) {
      ups[i][j] = downs[i + 1][j];
    }
  }
  for (var i = v.length - 1; i > -1; i--) {
    for (var j = w.length - 1; j > split - 1; j--) {
      uplefts[i][j] = downrights[i + 1][j + 1];
    }
  }
  var s1 = [];
  var s2 = [];
  var s3 = [];
  for (var i = 0; i < v.length + 1; i++) {
    s1.push([]);
    s2.push([]);
    s3.push([]);
    for (var j = split; j < w.length + 1; j++) {
      s1[i][j] = lefts[i][j];
      s2[i][j] = ups[i][j];
      s3[i][j] = uplefts[i][j];
    }
  }

  var suffixTable = [];
  var suffixPointers = [];
  for (var i = 0; i < v.length + 1; i++) {
    suffixTable.push([]);
    suffixPointers.push([]);
    for (var j = 0; j < w.length + 1; j++) {
      suffixTable[i][j] = 0;
      suffixPointers[i][j] = ORIGIN;
    }
  }

  for (var i = v.length; i > -1; i--) {
    for (var j = w.length; j > -1; j--) {
      if (i === v.length && j === w.length) {
        continue;
      } else if (i === v.length && j < w.length) {
        suffixPointers[i][j] = LEFT;
        suffixTable[i][j] = suffixTable[i][j + 1] + lefts[i][j];
      } else if (i < v.length && j === w.length) {
        suffixPointers[i][j] = UP;
        suffixTable[i][j] = suffixTable[i + 1][j] + ups[i][j];
      } else {
        var choice1 = suffixTable[i][j + 1] + lefts[i][j];
        var choice2 = suffixTable[i + 1][j] + ups[i][j];
        var choice3 = suffixTable[i + 1][j + 1] + uplefts[i][j];
        var choice = Math.max(choice1, choice2, choice3);
        if (choice === choice1) {
          suffixPointers[i][j] = LEFT;
        } else if (choice === choice2) {
          suffixPointers[i][j] = UP;
        } else {
          suffixPointers[i][j] = TOPLEFT;
        }
        suffixTable[i][j] = choice;
      }
    }
  }

  var pTable = [];
  var sTable = [];
  var pList = [];
  var sList = [];
  var sumList = [];
  for (var i = 0; i < v.length + 1; i++) {
    pTable.push([]);
    for (var j = 0; j < split + 1; j++) {
      pTable[i].push(table[i][j]);
    }
    sTable.push([]);
    for (var j = split; j < w.length + 1; j++) {
      sTable[i].push(suffixTable[i][j]);
    }
  }

  for (var i = 0; i < v.length + 1; i++) {
    pList.push(pTable[i][pTable[0].length - 1]);
    sList.push(sTable[i][0]);
  }

  for (var i = 0; i < v.length + 1; i++) {
    sumList.push(pList[i] + sList[i]);
  }

  var report = 0;
  var maxVal = sumList[0];
  //console.log("sumList: ", sumList);

  for (var i = 0; i < v.length + 1; i++) {
    if (sumList[i] > maxVal) {
      maxVal = sumList[i];
      report = i;
    }
  }
  return [report, split];
}

function merge(alignment1, alignment2) {
  var length = alignment1.indexOf("\n");
  var a = alignment1.substring(0, length) + alignment2.substring(0, length);
  var b =
    alignment1.substring(length * 2 + 2, alignment1.length) +
    alignment2.substring(length * 2 + 2, alignment2.length);
  var middle = "";
  for (var i = 0; i < a.length; i++) {
    if (a[i] === b[i]) {
      middle += "|";
    } else {
      middle += " ";
    }
  }
  return a + "\n" + middle + "\n" + b;
}

function hirschberg(short, long, delta, indent_i, indent_j, level) {
  //console.log("d: ", d, ", level: ", level);
  var node = {
    name: "(" + short + " / " + long + ")",
    attributes: {
      prefix_i: indent_i,
      suffix_j: indent_j,
      i: short.length + indent_i,
      j: long.length + indent_j
    }
  };
  //console.log("node: ", node);

  // if (!(level in d)) {
  //   d[level] = [];
  // }
  // d[level].push([
  //   indent_i,
  //   indent_j,
  //   short.length + indent_i,
  //   long.length + indent_j,
  //   short,
  //   long
  // ]);
  // console.log("d[level]: ", d[level]);
  if (long.length > 1) {
    const psR = prefixSuffix(short, long, delta);
    var i = psR[0];
    var j = psR[1];
    var a = hirschberg(
      short.substring(0, i),
      long.substring(0, j),
      delta,
      indent_i,
      indent_j,
      level + 1
    );
    var b = hirschberg(
      short.substring(i, short.length),
      long.substring(j, long.length),
      delta,
      indent_i + i,
      indent_j + j,
      level + 1
    );
    node["children"] = [a[1], b[1]];
    var m = merge(a[0], b[0]);
    console.log('m: ', m, ', node: ', node);
    return [m, node];
  } else {
    const temp = globalAlignment(short, long, delta)[2];
    console.log('temp : ', temp, ', node: ', node);
    return [temp, node];
  }
}

function h(short, long, match, mismatch, gap) {
  d = {};
  const keys = ["A", "C", "T", "G", "-"];
  var delta = {};
  for (var i = 0; i < keys.length; i++) {
    delta[keys[i]] = {};
    for (var j = 0; j < keys.length; j++) {
      if (keys[i] === keys[j]) {
        delta[keys[i]][keys[j]] = match;
      } else if (keys[j] == "-" || keys[i] == "-") {
        delta[keys[i]][keys[j]] = gap;
      } else {
        delta[keys[i]][keys[j]] = mismatch;
      }
    }
  }
  //console.log("delta: ", delta);

  var h = hirschberg(short, long, delta, 0, 0, 0);
  console.log("h:", h);
  // console.log("d_final: ", d);
  return h;
}

export { h };
