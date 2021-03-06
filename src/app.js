const figlet = require('figlet');
const { runCore: crawler } = require('accessible-pipeline');
const { args, commandLineHelp } = require('./helpers/args');
const { faceHappy, faceSad } = require('./helpers/ascii-elements');
const {
  getViolationsInfo,
  mapViolationsByImpact
} = require('./helpers/data-structure');
const { writeReportFile } = require('./helpers/write-report');
const { outputDetails } = require('./helpers/output-details');
const { outputTitle } = require('./helpers/output-title');
const { outputSummary } = require('./helpers/output-summary');
const { verifyRequiredArgs } = require('./helpers/args');
const { log, success } = require('./helpers/logger');
const { drawLine } = require('./helpers/ascii-elements');

/**
 * @function runProgram
 * @description entry point to running the CLI
 * @returns {void} Nothing since everything is output via logs or errors
 */
async function runProgram() {
  if (args.help === true) {
    return log(commandLineHelp);
  }
  if (args.version === true) {
    const version = require('../package.json').version;
    return log(`Current version: ${version}`);
  }

  verifyRequiredArgs(args);
  const { results } = await crawler(args.site, args);
  const { pageUrls, violations } = getViolationsInfo(results);

  if (args.outputFileName) {
    await writeReportFile(
      violations,
      args.outputDirectory,
      args.outputFileName
    );
  }

  displayReport({ pageUrls, violations });
}

function displayReport({ pageUrls, violations }) {
  const violationsByImpact = mapViolationsByImpact(violations);

  outputTitle();

  if (args.displayResults === true) {
    outputDetails(violationsByImpact);
    log(drawLine());
  }

  displaySummary({
    pageUrls,
    violationsByImpact,
    violations
  });
}

function displaySummary({ pageUrls, violations, violationsByImpact }) {
  const nodes = violations.map(({ nodes }) => nodes).flat();
  const violationsCount = nodes.length;

  log(figlet.textSync('Summary'));

  if (violationsCount === 0) {
    log(faceHappy);
    return log(success('Well done, no violations found!'));
  }

  const issuesPerImpact = countIssuesPerImpact(violationsByImpact);
  const pageCount = pageUrls.length;
  const averageErrors = Math.round((violationsCount / pageCount) * 100) / 100;

  outputSummary({
    violations,
    faceSad,
    args,
    issuesPerImpact,
    pageCount,
    averageErrors,
    violationsCount
  });
}

function countIssuesPerImpact(violationsByImpact) {
  let impactCategoryCounts = { critical: 0, serious: 0, moderate: 0, minor: 0 };
  for (let [impact, violations] of Object.entries(violationsByImpact)) {
    for (let issue of Object.values(violations)) {
      const { nodesPerPage } = issue;
      nodesPerPage.forEach((item) => {
        impactCategoryCounts[impact] += item.nodes && item.nodes.length;
      });
    }
  }

  return impactCategoryCounts;
}

module.exports = { runProgram };
