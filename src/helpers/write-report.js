const {
  promises: { open, writeFile, mkdir },
  existsSync
} = require("fs");
const path = require("path");
const mkdirp = require("mkdirp");

/**
 * @function writeReportFile
 * @description writes the report results to a provided output output path
 * @param {Array<Object>} results
 * @param {String} outputPath
 * @param {String} outputFileName
 * @returns {Promise<Boolean>} Representing if the file was written or not
 */
async function writeReportFile(results, outputPath = "", outputFileName) {
  if (!outputFileName) return false;

  const root = process.cwd().replace(/\/$/, "");
  const outdir = outputPath.replace(/\/$/, "");
  const outpath = path.join(root, outdir);

  if (existsSync(outpath) === false) {
    await mkdirp(outpath);
  }

  await writeFile(
    path.join(outpath, outputFileName),
    JSON.stringify(results, null, 2)
  );

  return true;
}

module.exports = { writeReportFile };
