const figlet = require('figlet');
const { runCore: crawler } = require('accessible-pipeline');
const { args } = require('./helpers/parse-args');
const { faceHappy, faceSad } = require('./helpers/icons');
const { getViolations } = require('./helpers/parse-report-results');
const { getViolationNodesCount } = require('./helpers/count-violation-nodes');
const { violationGroupingReducer } = require('./helpers/group-violations');
const { writeReportFile } = require('./helpers/write-report');
const { displayResults } = require('./helpers/display-results');
const {
  log,
  success,
  warning,
  error,
  inverse,
  danger
} = require('./helpers/logger');

const defaultColumns = 80;
const asciiLineWSBreaks = 4;

const asciiLine = () => {
  const cols = process.stdout.columns || defaultColumns;
  return (
    '\n'.repeat(asciiLineWSBreaks) +
    '-'.repeat(cols) +
    '\n'.repeat(asciiLineWSBreaks)
  );
};

/**
 * @function runProgram
 * @description entry point to running the CLI
 * @returns {void} Nothing since everything is output via logs or errors
 */
async function runProgram() {
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

  log('\n');
  log(figlet.textSync('Accessibility Report'));
  log(asciiLine());

  if (args.displayResults === true) {
    showDetails(violations);
    log(asciiLine());
  }

  showSummary({ pageCount, violationsCount, results, averageErrors, violations });
}

function showDetails(violations) {
  log(figlet.textSync('Details'));
  displayResults(violations);
}

function showSummary({ pageCount, violationsCount, results, averageErrors, violations }) {
  log(figlet.textSync('Summary'));

  if (violationsCount === 0) {
    log(faceHappy);
    return log(success('Well done, no violations found!'));
  }

  log(faceSad);
  log('Thanks for making the web accessible for everybody!');
  log(`Accessibility report for ${args.site}\n`);
  log(`Pages scanned: ${pageCount}`);

  log(inverse(`Total accessibility issues: ${violationsCount}`));
  log(`\n\n`);

  const issuesByCategory = results && results.map(({ violations }) =>
    violationGroupingReducer(violations)
  );

  const impactCategoryCounts = issuesByCategory.reduce(
    (output, current) => {
      for (let [impact, value] of Object.entries(current)) {
        const exists = output.hasOwnProperty(impact);
        if (exists === false) {
          return output;
        }
        output[impact] += Object.keys(value).length;
      }

      return output;
    },
    { critical: 0, serious: 0, moderate: 0, minor: 0 }
  );
  log(error(`Critical Issues: ${impactCategoryCounts.critical}`));
  log(danger(`Serious Issues: ${impactCategoryCounts.serious}`));
  log(warning(`Moderate Issues: ${impactCategoryCounts.moderate}`));
  log(`Minor Issues: ${impactCategoryCounts.minor}\n`);

  if (averageErrors > args.errorAverageThreshold) {
    log(
      error(
        `CI Failed: Average errors of ${averageErrors} were above the defined threshold of ${args.errorAverageThreshold}`
      )
    );
    process.exitCode = 1;
  } else {
    log(
      warning(
        `CI run complete but ${violationsCount} ${
          violations === 1 ? 'issue' : 'issues'
        } require review.`
      )
    );
  }
}

module.exports = { runProgram };
