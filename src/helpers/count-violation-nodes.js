/**
 * @function countViolationNodes
 * @param {Array<Object>} violations
 * @returns {Number} the count of html nodes per url grouping with violations
 */
function countViolationNodes(violations) {
  return violations.reduce((accumulator, current) => {
    const { nodes } = current;
    return accumulator + nodes.length;
  }, 0);
}

/**
 * @function getViolationNodesCount
 * @param {Array<Object>} results
 * @see countViolationNodes
 * @returns {Number} the count of html nodes on the page with violations
 */
function getViolationNodesCount(results) {
  return results.reduce((accumulator, current) => {
    const { violations } = current;
    const nodeCount = countViolationNodes(violations, 0);
    return accumulator + nodeCount;
  }, 0);
}

module.exports = { getViolationNodesCount };
