"use strict";function init(){function e(e,r,n){var o=r.project,i=o.projectpath,s=t.join(i,e);h(s,i,function(r,t){r?n("编译 "+e+" 文件错误， 错误信息："+r.toString()):!function(){t=t.reverse().map(function(e){return e.replace(/\\/g,"/")});var r=t.concat(["-js","-db"]),i=p(u,r,{cwd:o.projectpath}),s=[],a=[];i.on("close",function(r){0===r?(d[o.hash]||(d[o.hash]={}),d[o.hash][e]=Buffer.concat(s).toString(),n(null,d[o.hash][e])):n("编译 "+e+" 文件错误， 错误信息："+Buffer.concat(a).toString())}),i.stdout.on("data",function(e){s.push(e)}),i.stderr.on("data",function(e){a.push(e)})}()})}var r="darwin"===process.platform,n=global.appConfig.isDev,t=(require("fs"),require("path")),o=(require("../utils/tools.js"),require("url")),i=require("../utils/projectManager.js"),s=require("../../config/dirConfig.js"),a=s.WeappVendor,c=n?t.join(__dirname,"../vendor/"):a,u=r?t.join(c,"wcsc"):t.join(c,"wcsc.exe"),p=require("child_process").spawn,h=require("../commit/getallwxss.js"),f=require("mkdir-p"),l=s.WeappBuildCache;f.sync(l);var d={};i.manager.on("FILE_CHANGE",function(e,r,n){".wxss"===t.extname(n)&&delete d[e.hash]}),_exports=function(r,n,t){var i=n.project,s=o.parse(r),a=s.pathname;return d[i.hash]&&d[i.hash][a]?void process.nextTick(function(){t(null,d[i.hash][a])}):void e(a,{project:i},t)}}var _exports;init(),module.exports=_exports;