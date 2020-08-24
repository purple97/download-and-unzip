/*
下载并解压
*/
const path = require("path");
const DownloadAndUnizp = require("./lib/download-to-unzip");
/*  */
const fileName = "bid-examples";
const fileUrl = `https://github.com/purple97/${fileName}/archive/master.zip`;
const zipFilePath = path.join(__dirname, "./download/", `${fileName}.zip`);
/*  */
DownloadAndUnizp({
    fileUrl,
    filePath: zipFilePath,
    outputDir: path.join(__dirname, "./download/"),
}).then(function (res) {
    console.log("--done--", res);
});
