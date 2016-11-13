"use strict";function init(){function e(e,i){var r=e.args,a=r.tempFilePath;if(a){var t=l.saveFileForever(a);i(t===!1?{errMsg:"saveFile:fail"}:{errMsg:"saveFile:ok",savedFilePath:t})}else i({errMsg:"saveFile:fail"})}function i(e,i){var r=e.args,a=r.filePath,t=n.extname(a);if(!v[t])return void i({errMsg:"openDocument:fail,filetype not supported"});var s=l.getRealPath(a);return o.existsSync(s)?(nw.Shell.openItem(s),void i({errMsg:"openDocument:ok"})):void i({errMsg:"openDocument:fail,fail file not exist"})}function r(e,i){var r=l.getSavedFileList();i({errMsg:"getSavedFileList:ok",fileList:r})}function a(e,i){var r=e.args;if(r.filePath){var a=l.getFileStat(r.filePath);i(a?{errMsg:"getSavedFileInfo:ok",size:a.size,createTime:parseInt(a.ctime.getTime()/1e3)}:{errMsg:"getSavedFileInfo:fail;file doesn't exist"})}else i({errMsg:"getSavedFileInfo:fail"})}function t(e,i){var r=e.args;i(r.filePath?l.removeSavedFile(r.filePath)?{errMsg:"removeSavedFile:ok"}:{errMsg:"removeSavedFile:fail;file doesn't exist"}:{errMsg:"removeSavedFile:fail"})}function s(e,i){var r=e.args;if(r.base64Data){var a=l.saveBase64DataToFile(r.base64Data,".jpg");i(a?{errMsg:"base64ToTempFilePath:ok",tempFilePath:a}:{errMsg:"base64ToTempFilePath:fail"})}else i({errMsg:"base64ToTempFilePath:fail"})}var l=(require("../../actions/webviewActions.js"),require("../../stores/projectStores.js"),require("../../utils/file.js")),o=require("fs"),n=require("path"),v={".doc":!0,".xls":!0,".ppt":!0,".pdf":!0,".docx":!0,".xlsx":!0,".pptx":!0};_exports={saveFile:e,openDocument:i,getSavedFileList:r,getSavedFileInfo:a,removeSavedFile:t,base64ToTempFilePath:s}}var _exports;init(),module.exports=_exports;