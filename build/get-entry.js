var path = require('path');
var glob = require('glob');

function getEntry(globPath) {
    var entries = {},
        basename, tmp, pathname;
    console.log(glob.sync(globPath));
    glob.sync(globPath).forEach(function(entry) {
        basename = path.basename(entry, path.extname(entry));
        tmp = entry.split('/').splice(-3);
        pathname = tmp.splice(0, 1) + '/' + basename; // 正确输出js和html的路径
        entries[basename] = entry;
    });
    // console.log("base-entrys:");
    // console.log(entries);
    return entries;
}

function getPath(globPath) {
    return glob.sync(globPath);
}

module.exports = { 
  getEntry: getEntry, 
  getPath: getPath 
};
