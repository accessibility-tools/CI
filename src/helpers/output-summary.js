const { log, warning, error, inverse, danger } = require('./logger');

/**
 * @function outputSummary
 * @param {String} faceSad
 * @param {Array<String>} args
 * @param {Object} issuesPerImpact
 * @param {Number} pageCount
 * @param {Number} averageErrors
 * @param {Number} violationsCount
 * @param {Array} violations
 * @returns {void}
 */
function outputSummary({
  faceSad,
  args,
  issuesPerImpact,
  pageCount,
  averageErrors,
  violationsCount,
  violations
}) {
  log(faceSad);
  log('Thanks for making the web accessible for everybody!');
  log(`Accessibility report for ${args.site}\n`);
  log(`Pages scanned: ${pageCount}`);

  log(inverse(`Total accessibility issues: ${violationsCount}`));
  log(`\n\n`);

  log(error(`Critical Issues: ${issuesPerImpact.critical}`));
  log(danger(`Serious Issues: ${issuesPerImpact.serious}`));
  log(warning(`Moderate Issues: ${issuesPerImpact.moderate}`));
  log(`Minor Issues: ${issuesPerImpact.minor}\n`);

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

module.exports = { outputSummary };
