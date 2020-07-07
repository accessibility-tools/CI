const URL = require('url').URL;
const commandLineArgs = require('command-line-args');
const commandLineUsage = require('command-line-usage');

const args = [
  {
    name: 'site',
    alias: 's',
    type: url => new URL(url),
    typeLabel: '{underline url}',
    group: 'required',
    defaultOption: true
  },
  {
    name: 'ignoreExtensions',
    alias: 'e',
    type: String,
    multiple: true,
    defaultValue: ['.pdf', '.jpeg', '.jpg', '.png', '.svg', '.webp'],
    group: 'optional'
  },
  {
    name: 'ignoreFragmentLinks',
    alias: 'i',
    type: Boolean,
    defaultValue: false,
    group: 'optional'
  },
  { name: 'pageLimit', alias: 'l', type: Number, group: 'optional' },
  {
    name: 'streaming',
    alias: 'm',
    type: Boolean,
    defaultValue: true,
    group: 'optional'
  },
  {
    name: 'numRetries',
    alias: 'n',
    type: Number,
    defaultValue: 5,
    group: 'optional'
  },
  {
    name: 'ignoreQueryParams',
    alias: 'q',
    type: Boolean,
    defaultValue: false,
    group: 'optional'
  },
  {
    name: 'displayResults',
    alias: 'd',
    type: Boolean,
    defaultValue: false,
    group: 'optional'
  },
  {
    name: 'outputFileName',
    alias: 'f',
    type: String,
    group: 'optional'
  },
  { name: 'outputDirectory', alias: 'o', type: String, group: 'optional' },
  {
    name: 'errorAverageThreshold',
    alias: 't',
    type: Number,
    defaultValue: 5,
    group: 'optional'
  },
  {
    name: 'help',
    alias: 'h',
    type: Boolean,
    defaultValue: false,
    group: 'optional'
  }
];

/**
 * @function sortArgs
 * @param {Array} args
 * @returns {Array} the sorted args array
 */
function sortArgs(args) {
  return [...args].sort((left, right) => {
    if (left.alias < right.alias) {
      return -1;
    }
    if (left.alias > right.alias) {
      return 1;
    }
    return 0;
  });
}

const options = sortArgs(args);
const parsedArgs = commandLineArgs(options)._all;
const help = [
  {
    header: 'A11Y CI',
    content: 'An accessibility checker for your web based projects'
  },
  {
    header: 'Required arguments',
    optionList: options,
    group: ['required']
  },
  {
    header: 'Optional arguments',
    optionList: options,
    group: ['optional']
  }
];


module.exports = {
  args: parsedArgs,
  commandLineHelp: commandLineUsage(help)
};
