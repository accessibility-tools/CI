const { runCore: crawler } = require("accessible-pipeline");
const { args, help } = require("./helpers/parse-args");
const { getViolations } = require("./helpers/parse-report-results");
const { getViolationNodesCount } = require("./helpers/count-violation-nodes");
const { writeReportFile } = require("./helpers/write-report");
const { displayResults } = require("./helpers/display-results");
const { log, success, warning, error } = require("./helpers/logger");
const { verifyRequiredArgs } = require("./helpers/verify-required-args");

/**
 * @function runProgram
 * @description entry point to running the CLI
 * @returns {void} Nothing since everything is output via logs or errors
 */
async function runProgram() {
  if (args.help === true) return log(help);
  if (args.version === true) {
    const version = require("../package.json").version;
    return log(`Current version: ${version}`);
  }
  verifyRequiredArgs(args);
  const { results } = await crawler(args.site, args);
  const violations = getViolations(results);
  const violationsCount = getViolationNodesCount(violations);
  const pageCount = violations.length;
  const averageErrors = Math.round((violationsCount / pageCount) * 100) / 100;

  if (args.outputFileName) {
    await writeReportFile(
      violations,
      args.outputDirectory,
      args.outputFileName
    );
  }

  if (violationsCount === 0) return success("Well done, no violations found!");
  if (args.displayResults === true) displayResults(violations);

  log(`Total accessibility issues: ${violationsCount}`);
  log(`Average errors: ${averageErrors}`);
  log(`Threshold: ${args.errorAverageThreshold}`);

  if (averageErrors > args.errorAverageThreshold) {
    error(
      `CI Failed: Average errors of ${averageErrors} were above the defined threshold of ${args.errorAverageThreshold}`
    );
    process.exitCode = 1;
  } else {
    warning(
      `CI run complete but ${violationsCount} ${
        violations === 1 ? "issue" : "issues"
      } require review.`
    );
  }
}

module.exports = { runProgram };
