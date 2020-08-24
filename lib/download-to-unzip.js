/* 下载并解压 */
const { zip } = require("compressing");
const targetDir = require("os").tmpdir();
// const { createGzip, createGunzip } = require("zlib");
const { createReadStream, createWriteStream } = require("fs");
const request = require("request");
const { resolve } = require("path");
function DownloadAndUnizp({ fileUrl, filePath, outputDir }) {
    const destination = createWriteStream(filePath);
    /*  */
    return new Promise(function (resolve, reject) {
        console.log("开始下载...");
        request(fileUrl)
            .pipe(destination)
            .on("close", function (err) {
                console.log("文件[" + fileUrl + "]下载完毕.");
                console.log("开始解压...");
                /* 解压 */
                zip.uncompress(filePath, outputDir || targetDir)
                    .then(function () {
                        console.log("解压完成");
                        resolve(outputDir || targetDir);
                    })
                    .catch(function (err) {
                        console.error(err);
                        reject();
                    });
            });
    });
}

module.exports = DownloadAndUnizp;
