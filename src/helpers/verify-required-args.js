const { error } = require("./logger");

function verifyRequiredArgs(args) {
  if (args.site instanceof URL === false) {
    error(
      `The --site or -s flag with a valid base url for crawling must be passed. Example: aci -s https://example.com`
    );

    process.exit(1);
  }
}

module.exports = {
  verifyRequiredArgs
};
