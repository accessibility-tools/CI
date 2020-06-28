const URL = require('url').URL;
const { error, log } = require('./logger');

function verifyRequiredArgs(parsedArgs) {
  if (parsedArgs.help === false && parsedArgs.site instanceof URL === false) {
    log(
      error(
        `The --site or -s flag with a valid base url for crawling must be passed. Example: aci -s https://example.com`
      )
    );

    process.exit(1);
  }
}

module.exports = {
  verifyRequiredArgs
};
